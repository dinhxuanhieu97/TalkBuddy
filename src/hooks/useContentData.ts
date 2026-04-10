import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import contentService, { Category, Scene, MicroInteractionGroup, Manifest } from "../services/contentService";

const CATEGORIES_KEY = "talkbuddy_categories";
const MICRO_INTERACTIONS_KEY = "talkbuddy_micro_interactions";
const SCENES_KEY_PREFIX = "talkbuddy_scenes_";
const MANIFEST_KEY = "talkbuddy_manifest";

interface UseContentDataReturn {
  categories: Category[];
  microInteractions: MicroInteractionGroup[];
  isLoading: boolean;
  error: string | null;
  refreshCategories: () => Promise<void>;
  refreshMicroInteractions: () => Promise<void>;
  getScenes: (categoryId: string) => Promise<Scene[]>;
  getManifest: () => Promise<Manifest | null>;
  clearCache: () => Promise<void>;
}

export const useContentData = (): UseContentDataReturn => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [microInteractions, setMicroInteractions] = useState<MicroInteractionGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFromStorage = useCallback(async () => {
    try {
      const [storedCategories, storedMicroInteractions] = await Promise.all([
        AsyncStorage.getItem(CATEGORIES_KEY),
        AsyncStorage.getItem(MICRO_INTERACTIONS_KEY),
      ]);

      if (storedCategories) {
        setCategories(JSON.parse(storedCategories));
      }
      if (storedMicroInteractions) {
        setMicroInteractions(JSON.parse(storedMicroInteractions));
      }
    } catch (err) {
      console.error("Error loading from storage:", err);
    }
  }, []);

  const saveToStorage = useCallback(async (
    categoriesData: Category[] | null, 
    microData: MicroInteractionGroup[] | null
  ) => {
    try {
      const promises: Promise<void>[] = [];
      if (categoriesData) {
        promises.push(AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(categoriesData)));
      }
      if (microData) {
        promises.push(AsyncStorage.setItem(MICRO_INTERACTIONS_KEY, JSON.stringify(microData)));
      }
      await Promise.all(promises);
    } catch (err) {
      console.error("Error saving to storage:", err);
    }
  }, []);

  const refreshCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await contentService.getCategories(true);
      setCategories(data);
      await AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(data));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch categories");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshMicroInteractions = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await contentService.getMicroInteractions(true);
      setMicroInteractions(data);
      await AsyncStorage.setItem(MICRO_INTERACTIONS_KEY, JSON.stringify(data));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch micro-interactions");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getScenes = useCallback(async (categoryId: string): Promise<Scene[]> => {
    try {
      const scenes = await contentService.getScenes(categoryId);
      await AsyncStorage.setItem(SCENES_KEY_PREFIX + categoryId, JSON.stringify(scenes));
      return scenes;
    } catch (err) {
      console.error("Error fetching scenes:", err);
      const stored = await AsyncStorage.getItem(SCENES_KEY_PREFIX + categoryId);
      if (stored) {
        return JSON.parse(stored);
      }
      return [];
    }
  }, []);

  const getManifest = useCallback(async (): Promise<Manifest | null> => {
    try {
      const manifest = await contentService.getManifest();
      if (manifest) {
        await AsyncStorage.setItem(MANIFEST_KEY, JSON.stringify(manifest));
      }
      return manifest;
    } catch (err) {
      console.error("Error fetching manifest:", err);
      const stored = await AsyncStorage.getItem(MANIFEST_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      return null;
    }
  }, []);

  const clearCache = useCallback(async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const cacheKeys = keys.filter(
        k => k.startsWith("talkbuddy_") && k !== CATEGORIES_KEY && k !== MICRO_INTERACTIONS_KEY
      );
      await AsyncStorage.multiRemove([CATEGORIES_KEY, MICRO_INTERACTIONS_KEY, ...cacheKeys]);
      setCategories([]);
      setMicroInteractions([]);
      contentService.clearCache();
    } catch (err) {
      console.error("Error clearing cache:", err);
    }
  }, []);

  useEffect(() => {
    const initialize = async () => {
      await loadFromStorage();
      await Promise.all([
        refreshCategories(),
        refreshMicroInteractions(),
      ]);
      setIsLoading(false);
    };
    initialize();
  }, []);

  return {
    categories,
    microInteractions,
    isLoading,
    error,
    refreshCategories,
    refreshMicroInteractions,
    getScenes,
    getManifest,
    clearCache,
  };
};

export default useContentData;
