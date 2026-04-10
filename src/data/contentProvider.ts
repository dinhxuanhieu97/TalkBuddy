import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_BASE_URL = "http://localhost:5277/api/content";
const CACHE_KEY = "talkbuddy_content_provider";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Import hardcoded data as fallback
import {
  PRESET_SCENES,
  MICRO_INTERACTIONS,
  getScenesByCategory,
  getSceneById,
  getAllPhrasesFromScene,
  type PresetScene,
  type PresetPhrase,
} from "./preset-scenes";

export type { PresetScene, PresetPhrase };

// Re-export existing functions for backward compatibility
export {
  getSceneById,
  getAllPhrasesFromScene,
  MICRO_INTERACTIONS,
};

// Hybrid function: Try API first, fallback to hardcoded
export const getScenesByCategoryHybrid = async (categoryId: string): Promise<PresetScene[]> => {
  try {
    const cached = await AsyncStorage.getItem(`${CACHE_KEY}_scenes_${categoryId}`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }

    const response = await axios.get(`${API_BASE_URL}/scenes/${categoryId}`, {
      timeout: 5000,
    });

    if (response.data.success && response.data.data.length > 0) {
      const scenes = response.data.data as PresetScene[];
      await AsyncStorage.setItem(
        `${CACHE_KEY}_scenes_${categoryId}`,
        JSON.stringify({ data: scenes, timestamp: Date.now() })
      );
      return scenes;
    }
  } catch (error) {
    console.log("Using hardcoded scenes for:", categoryId);
  }

  // Fallback to hardcoded
  return getScenesByCategory(categoryId);
};

// Get all scenes - try API, fallback to hardcoded
export const getAllScenesHybrid = async (): Promise<PresetScene[]> => {
  try {
    const cached = await AsyncStorage.getItem(`${CACHE_KEY}_all_scenes`);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }

    const response = await axios.get(`${API_BASE_URL}/categories`, {
      timeout: 5000,
    });

    if (response.data.success) {
      const categories = response.data.data;
      const allScenes: PresetScene[] = [];

      for (const cat of categories) {
        const scenes = await getScenesByCategoryHybrid(cat.id);
        allScenes.push(...scenes);
      }

      await AsyncStorage.setItem(
        `${CACHE_KEY}_all_scenes`,
        JSON.stringify({ data: allScenes, timestamp: Date.now() })
      );
      return allScenes;
    }
  } catch (error) {
    console.log("Using hardcoded PRESET_SCENES");
  }

  return PRESET_SCENES;
};

// Hook version for React components
export const useContentProvider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check if API is available
    const checkConnection = async () => {
      try {
        await axios.get(`${API_BASE_URL}/manifest`, { timeout: 3000 });
        setIsOnline(true);
      } catch {
        setIsOnline(false);
      }
    };
    checkConnection();
  }, []);

  const getScenes = useCallback(async (categoryId: string) => {
    setIsLoading(true);
    setError(null);
    try {
      return await getScenesByCategoryHybrid(categoryId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load scenes");
      return getScenesByCategory(categoryId);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getAllScenes = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      return await getAllScenesHybrid();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load scenes");
      return PRESET_SCENES;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshContent = useCallback(async () => {
    // Clear cache and reload
    const keys = await AsyncStorage.getAllKeys();
    const cacheKeys = keys.filter(k => k.startsWith(CACHE_KEY));
    await AsyncStorage.multiRemove(cacheKeys);
    return getAllScenes();
  }, [getAllScenes]);

  return {
    isLoading,
    error,
    isOnline,
    getScenes,
    getAllScenes,
    refreshContent,
    // Also export hardcoded for direct access
    hardcodedScenes: PRESET_SCENES,
    hardcodedMicroInteractions: MICRO_INTERACTIONS,
  };
};

// Default export for backward compatibility
export default {
  getScenesByCategory: getScenesByCategoryHybrid,
  getSceneById,
  getAllPhrasesFromScene,
  PRESET_SCENES,
  MICRO_INTERACTIONS,
  useContentProvider,
};
