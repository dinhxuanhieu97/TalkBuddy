import { useState, useEffect, useCallback } from "react";
import { AppState, AppStateStatus } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import contentSyncService, {
  ManifestResponse,
  CategoryManifest,
} from "../services/contentSyncService";

const LAST_SYNC_KEY = "talkbuddy_content_last_sync";
const SYNC_SETTINGS_KEY = "talkbuddy_sync_settings";
const LAST_VERSION_CHECK_KEY = "talkbuddy_last_version_check";

interface SyncSettings {
  accent: string;
  speed: string;
  autoSync: boolean;
  wifiOnly: boolean;
}

interface UseContentSyncReturn {
  isLoading: boolean;
  isSyncing: boolean;
  progress: number;
  currentCategory: string;
  manifest: ManifestResponse | null;
  categoriesToUpdate: number;
  lastSyncTime: Date | null;
  storageInfo: { used: number; categories: string[] };
  error: string | null;
  sync: () => Promise<void>;
  checkForUpdates: () => Promise<number>;
  clearContent: () => Promise<void>;
  updateSettings: (settings: Partial<SyncSettings>) => Promise<void>;
  getSettings: () => Promise<SyncSettings>;
}

export const useContentSync = (): UseContentSyncReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [manifest, setManifest] = useState<ManifestResponse | null>(null);
  const [categoriesToUpdate, setCategoriesToUpdate] = useState(0);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [storageInfo, setStorageInfo] = useState<{
    used: number;
    categories: string[];
  }>({
    used: 0,
    categories: [],
  });
  const [error, setError] = useState<string | null>(null);

  const loadInitialData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [lastSync, settings, info] = await Promise.all([
        AsyncStorage.getItem(LAST_SYNC_KEY),
        AsyncStorage.getItem(SYNC_SETTINGS_KEY),
        contentSyncService.getStorageInfo(),
      ]);

      if (lastSync) {
        setLastSyncTime(new Date(lastSync));
      }

      setStorageInfo(info);

      const syncSettings: SyncSettings = settings
        ? JSON.parse(settings)
        : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };

      const manifestData = await contentSyncService.fetchManifest(
        syncSettings.accent,
        syncSettings.speed,
      );
      setManifest(manifestData);

      const categories = await contentSyncService.getCategoriesNeedingUpdate(
        syncSettings.accent,
        syncSettings.speed,
      );
      setCategoriesToUpdate(categories.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const checkForUpdates = useCallback(async (): Promise<number> => {
    try {
      const settings = await AsyncStorage.getItem(SYNC_SETTINGS_KEY);
      const syncSettings: SyncSettings = settings
        ? JSON.parse(settings)
        : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };

      const categories = await contentSyncService.getCategoriesNeedingUpdate(
        syncSettings.accent,
        syncSettings.speed,
      );
      setCategoriesToUpdate(categories.length);
      return categories.length;
    } catch {
      return 0;
    }
  }, []);

  const sync = useCallback(async () => {
    try {
      setIsSyncing(true);
      setError(null);
      setProgress(0);

      const settingsStr = await AsyncStorage.getItem(SYNC_SETTINGS_KEY);
      const syncSettings: SyncSettings = settingsStr
        ? JSON.parse(settingsStr)
        : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };

      const result = await contentSyncService.syncAll(
        syncSettings.accent,
        syncSettings.speed,
        (category, catProgress, total, current) => {
          const overallProgress = ((current - 1 + catProgress) / total) * 100;
          setProgress(overallProgress);
          setCurrentCategory(category);
        },
      );

      if (!result.success) {
        setError(`Failed to sync: ${result.failedCategories.join(", ")}`);
      }

      const newLastSync = new Date();
      setLastSyncTime(newLastSync);
      await AsyncStorage.setItem(LAST_SYNC_KEY, newLastSync.toISOString());

      const info = await contentSyncService.getStorageInfo();
      setStorageInfo(info);

      setCategoriesToUpdate(0);
      setCurrentCategory("");

      return;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sync failed");
    } finally {
      setIsSyncing(false);
      setProgress(0);
      setCurrentCategory("");
    }
  }, []);

  const clearContent = useCallback(async () => {
    try {
      setIsLoading(true);
      await contentSyncService.clearAllContent();
      await AsyncStorage.removeItem(LAST_SYNC_KEY);
      setLastSyncTime(null);
      setCategoriesToUpdate(0);
      setManifest(null);
      setStorageInfo({ used: 0, categories: [] });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to clear content");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateSettings = useCallback(
    async (newSettings: Partial<SyncSettings>) => {
      const currentStr = await AsyncStorage.getItem(SYNC_SETTINGS_KEY);
      const current: SyncSettings = currentStr
        ? JSON.parse(currentStr)
        : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };

      const updated = { ...current, ...newSettings };
      await AsyncStorage.setItem(SYNC_SETTINGS_KEY, JSON.stringify(updated));

      if (newSettings.accent || newSettings.speed) {
        loadInitialData();
      }
    },
    [loadInitialData],
  );

  const getSettings = useCallback(async (): Promise<SyncSettings> => {
    const settingsStr = await AsyncStorage.getItem(SYNC_SETTINGS_KEY);
    return settingsStr
      ? JSON.parse(settingsStr)
      : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };
  }, []);

  // Auto-sync: check version when app comes to foreground with network
  const checkVersionAndSync = useCallback(async () => {
    try {
      const settingsStr = await AsyncStorage.getItem(SYNC_SETTINGS_KEY);
      const syncSettings: SyncSettings = settingsStr
        ? JSON.parse(settingsStr)
        : { accent: "en-US", speed: "normal", autoSync: true, wifiOnly: true };

      if (!syncSettings.autoSync) return;

      // Check network connection
      const netInfo = await NetInfo.fetch();
      const isConnected = netInfo.isConnected ?? false;
      const isWifi = netInfo.type === "wifi";

      // Skip if no connection
      if (!isConnected) {
        console.log("[useContentSync] No network, skipping auto-sync");
        return;
      }

      // Skip if wifiOnly and not on wifi
      if (syncSettings.wifiOnly && !isWifi) {
        console.log(
          "[useContentSync] Mobile data only, skipping auto-sync (wifiOnly)",
        );
        return;
      }

      // Check for version changes
      const categoriesNeedingUpdate =
        await contentSyncService.getCategoriesNeedingUpdate(
          syncSettings.accent,
          syncSettings.speed,
        );

      if (categoriesNeedingUpdate.length > 0) {
        console.log(
          "[useContentSync] Auto-sync: New content detected, syncing...",
        );
        await contentSyncService.syncAll(
          syncSettings.accent,
          syncSettings.speed,
          () => {},
        );
        const newLastSync = new Date();
        setLastSyncTime(newLastSync);
        await AsyncStorage.setItem(LAST_SYNC_KEY, newLastSync.toISOString());
      }
    } catch (err) {
      console.warn("[useContentSync] Auto-sync check failed:", err);
    }
  }, []);

  // Run auto-sync when app comes to foreground
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        console.log("[useContentSync] App active, checking for updates...");
        checkVersionAndSync();
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, [checkVersionAndSync]);

  return {
    isLoading,
    isSyncing,
    progress,
    currentCategory,
    manifest,
    categoriesToUpdate,
    lastSyncTime,
    storageInfo,
    error,
    sync,
    checkForUpdates,
    clearContent,
    updateSettings,
    getSettings,
  };
};

export default useContentSync;
