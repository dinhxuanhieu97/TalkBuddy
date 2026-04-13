import { useState, useEffect, useCallback } from "react";
import { AppState, AppStateStatus } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";
import * as SceneDatabase from "../services/SceneDatabase";

// Resolve the base URL the same way api.ts does
const isDebug = process.env.VITE_DEBUG === "true";
const _base = isDebug
  ? "http://localhost:5277"
  : (process.env.VITE_API_URL ?? "https://servicetalkbuddy.mysixbox.com");
const API_BASE_URL = `${_base}/api/content`;

// AsyncStorage fallback (web only) - uses a simple timestamp wrapper
const WEB_CACHE_KEY = "talkbuddy_content_provider";
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
export { getSceneById, getAllPhrasesFromScene, MICRO_INTERACTIONS };

// Fetch version from API
async function fetchVersionFromApi(): Promise<number | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}/version`, {
      timeout: 5000,
    });
    if (response.data.success && response.data.data?.version) {
      return response.data.data.version as number;
    }
    return null;
  } catch {
    return null;
  }
}

// Check if content version changed, clear cache if needed
async function checkAndRefreshVersion(): Promise<boolean> {
  const apiVersion = await fetchVersionFromApi();
  if (!apiVersion) return false;

  const storedVersion = await SceneDatabase.getStoredVersion();

  // No stored version or version changed -> need refresh
  if (!storedVersion || storedVersion !== apiVersion) {
    console.log(
      `[ContentProvider] Version changed: ${storedVersion} -> ${apiVersion}, clearing cache`,
    );
    await SceneDatabase.clearAllCache();
    await SceneDatabase.setStoredVersion(apiVersion);
    return true;
  }

  return false;
}

// Check version when app comes to foreground with network
async function checkVersionOnForeground(): Promise<void> {
  try {
    const netInfo = await NetInfo.fetch();
    const isConnected = netInfo.isConnected ?? false;

    if (!isConnected) {
      console.log("[ContentProvider] No network, skipping version check");
      return;
    }

    await checkAndRefreshVersion();
  } catch (err) {
    console.warn("[ContentProvider] Version check failed:", err);
  }
}

// Export for use in App.tsx to hook into AppState
export function setupAppStateListener(): () => void {
  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (nextAppState === "active") {
      console.log("[ContentProvider] App active, checking version...");
      checkVersionOnForeground();
    }
  };

  const subscription = AppState.addEventListener(
    "change",
    handleAppStateChange,
  );
  return () => subscription.remove();
}

// Web fallback helpers (AsyncStorage) ──────────────────────────────────

async function webCacheGet(key: string): Promise<PresetScene[] | null> {
  try {
    const raw = await AsyncStorage.getItem(`${WEB_CACHE_KEY}_${key}`);
    if (!raw) return null;
    const { data, timestamp } = JSON.parse(raw);
    if (Date.now() - timestamp > CACHE_DURATION) return null;
    return data as PresetScene[];
  } catch {
    return null;
  }
}

async function webCacheSet(key: string, data: PresetScene[]): Promise<void> {
  try {
    await AsyncStorage.setItem(
      `${WEB_CACHE_KEY}_${key}`,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch {
    // ignore
  }
}

// ── API fetch (scenes-full endpoint) ──────────────────────────────────────

async function fetchScenesFullFromApi(
  categoryId: string,
): Promise<PresetScene[] | null> {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/scenes-full/${categoryId}`,
      { timeout: 8000 },
    );
    if (
      response.data.success &&
      Array.isArray(response.data.data) &&
      response.data.data.length > 0
    ) {
      return response.data.data as PresetScene[];
    }
    return null;
  } catch {
    return null;
  }
}

// ── Primary hybrid function ───────────────────────────────────────────────
//
// Priority:
//   1. SQLite cache (native) / AsyncStorage cache (web)
//   2. API  →  save to cache
//   3. Hardcoded fallback

export const getScenesByCategoryHybrid = async (
  categoryId: string,
): Promise<PresetScene[]> => {
  // 0. Check version - auto-refresh if content changed on server
  await checkAndRefreshVersion();

  // 1. SQLite (native) or AsyncStorage (web)
  const sqliteCached = await SceneDatabase.getScenesFromCache(categoryId);
  if (sqliteCached && sqliteCached.length > 0) {
    return sqliteCached;
  }

  const webCached = await webCacheGet(`scenes_${categoryId}`);
  if (webCached && webCached.length > 0) {
    return webCached;
  }

  // 2. Fetch from API (scenes-full endpoint returns flows + turns)
  const apiScenes = await fetchScenesFullFromApi(categoryId);
  if (apiScenes && apiScenes.length > 0) {
    // Persist to SQLite (native) and AsyncStorage (web)
    await SceneDatabase.saveScenesToCache(categoryId, apiScenes);
    await webCacheSet(`scenes_${categoryId}`, apiScenes);
    return apiScenes;
  }

  // 3. Hardcoded fallback
  console.log("[ContentProvider] Using hardcoded scenes for:", categoryId);
  return getScenesByCategory(categoryId);
};

// Get all scenes across every category
export const getAllScenesHybrid = async (): Promise<PresetScene[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`, {
      timeout: 5000,
    });

    if (response.data.success) {
      const categories: { id: string }[] = response.data.data;
      const allScenes: PresetScene[] = [];

      for (const cat of categories) {
        const scenes = await getScenesByCategoryHybrid(cat.id);
        allScenes.push(...scenes);
      }

      return allScenes;
    }
  } catch {
    console.log("[ContentProvider] Using hardcoded PRESET_SCENES");
  }

  return PRESET_SCENES;
};

// ── React hook ────────────────────────────────────────────────────────────

export const useContentProvider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
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
    // Wipe SQLite + AsyncStorage caches, then reload
    await SceneDatabase.clearAllCache();
    const keys = await AsyncStorage.getAllKeys();
    const cacheKeys = keys.filter((k) => k.startsWith(WEB_CACHE_KEY));
    if (cacheKeys.length > 0) await AsyncStorage.multiRemove(cacheKeys);
    return getAllScenes();
  }, [getAllScenes]);

  return {
    isLoading,
    error,
    isOnline,
    getScenes,
    getAllScenes,
    refreshContent,
    hardcodedScenes: PRESET_SCENES,
    hardcodedMicroInteractions: MICRO_INTERACTIONS,
  };
};

// Default export for backward compatibility
export default {
  setupAppStateListener,
  getScenesByCategory: getScenesByCategoryHybrid,
  getSceneById,
  getAllPhrasesFromScene,
  PRESET_SCENES,
  MICRO_INTERACTIONS,
  useContentProvider,
};
