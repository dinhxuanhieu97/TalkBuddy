import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from "expo-file-system";
import { unzip } from "react-native-zip-archive";

const API_BASE_URL = "https://talkbuddy.wayjet.io/api/export";
const API_KEY =
  "db1a180767297ee4691e51d057993f6e32ad800676fc0cdc9a7c9661298cfa78";

const CONTENT_VERSION_KEY = "talkbuddy_content_versions";
const CONTENT_DIR = FileSystem.documentDirectory + "content/";

export interface CategoryManifest {
  titleZh: string;
  titleEn: string;
  sceneCount: number;
  phraseCount: number;
  cachedAudioCount: number;
  version: string;
}

export interface ManifestResponse {
  success: boolean;
  data: {
    categories: Record<string, CategoryManifest>;
    totalCategories: number;
    totalScenes: number;
    accent: string;
    speed: string;
    generatedAt: string;
  };
}

export interface Scene {
  id: string;
  category: string;
  titleZh: string;
  titleEn: string;
  description: string;
  otherRole: string;
  flows: {
    id: string;
    titleZh: string;
    titleEn: string;
    difficulty: string;
    turns: {
      index: number;
      speaker: "you" | "them";
      textEn: string;
      textZh: string;
      audioFile: string;
      keyPhrases: { en: string; zh: string }[];
      culturalNote: string | null;
      responseTip: string;
    }[];
  }[];
}

export interface AudioManifest {
  category: string;
  titleZh: string;
  titleEn: string;
  accent: string;
  speed: string;
  sceneCount: number;
  totalAudioFiles: number;
  missingAudioFiles: number;
  generatedAt: string;
  audioIndex: {
    text: string;
    file: string;
    cached: boolean;
  }[];
}

interface ContentVersion {
  [category: string]: string;
}

const contentSyncService = {
  fetchManifest: async (
    accent: string = "en-US",
    speed: string = "normal",
  ): Promise<ManifestResponse | null> => {
    try {
      const url = `${API_BASE_URL}/manifest?accent=${accent}&speed=${speed}`;
      const response = await fetch(url, {
        headers: {
          "X-API-Key": API_KEY,
        },
      });

      if (!response.ok) {
        console.error("Failed to fetch manifest:", response.status);
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching manifest:", error);
      return null;
    }
  },

  getLocalVersions: async (): Promise<ContentVersion> => {
    try {
      const data = await AsyncStorage.getItem(CONTENT_VERSION_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveLocalVersions: async (versions: ContentVersion): Promise<void> => {
    await AsyncStorage.setItem(CONTENT_VERSION_KEY, JSON.stringify(versions));
  },

  getCategoriesNeedingUpdate: async (
    accent: string = "en-US",
    speed: string = "normal",
  ): Promise<{ category: string; version: string }[]> => {
    const manifest = await contentSyncService.fetchManifest(accent, speed);
    if (!manifest || !manifest.data?.categories) {
      return [];
    }

    const localVersions = await contentSyncService.getLocalVersions();
    const categoriesToUpdate: { category: string; version: string }[] = [];

    for (const [category, info] of Object.entries(manifest.data.categories)) {
      const localVersion = localVersions[category];
      if (!localVersion || localVersion !== info.version) {
        categoriesToUpdate.push({ category, version: info.version });
      }
    }

    return categoriesToUpdate;
  },

  downloadCategory: async (
    category: string,
    accent: string = "en-US",
    speed: string = "normal",
    onProgress?: (progress: number) => void,
  ): Promise<boolean> => {
    try {
      const url = `${API_BASE_URL}/bundle/${category}?accent=${accent}&speed=${speed}`;

      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        CONTENT_DIR + `${category}.zip`,
        {
          headers: {
            "X-API-Key": API_KEY,
          },
        },
        (downloadProgress) => {
          const progress =
            downloadProgress.totalBytesWritten /
            downloadProgress.totalBytesExpectedToWrite;
          onProgress?.(progress);
        },
      );

      const result = await downloadResumable.downloadAsync();

      if (!result?.uri) {
        console.error("Download failed - no URI");
        return false;
      }

      const extractDir = CONTENT_DIR + category + "/";
      await FileSystem.makeDirectoryAsync(extractDir, { intermediates: true });

      await unzip(result.uri, extractDir);

      await FileSystem.deleteAsync(result.uri, { idempotent: true });

      return true;
    } catch (error) {
      console.error("Error downloading category:", category, error);
      return false;
    }
  },

  syncAll: async (
    accent: string = "en-US",
    speed: string = "normal",
    onCategoryProgress?: (
      category: string,
      progress: number,
      total: number,
      current: number,
    ) => void,
  ): Promise<{
    success: boolean;
    updatedCategories: number;
    failedCategories: string[];
  }> => {
    const categoriesToUpdate =
      await contentSyncService.getCategoriesNeedingUpdate(accent, speed);

    if (categoriesToUpdate.length === 0) {
      return { success: true, updatedCategories: 0, failedCategories: [] };
    }

    const failedCategories: string[] = [];
    const localVersions = await contentSyncService.getLocalVersions();

    for (let i = 0; i < categoriesToUpdate.length; i++) {
      const { category, version } = categoriesToUpdate[i];

      onCategoryProgress?.(category, 0, categoriesToUpdate.length, i + 1);

      const success = await contentSyncService.downloadCategory(
        category,
        accent,
        speed,
        (progress) => {
          onCategoryProgress?.(
            category,
            progress,
            categoriesToUpdate.length,
            i + 1,
          );
        },
      );

      if (success) {
        localVersions[category] = version;
      } else {
        failedCategories.push(category);
      }
    }

    await contentSyncService.saveLocalVersions(localVersions);

    return {
      success: failedCategories.length === 0,
      updatedCategories: categoriesToUpdate.length - failedCategories.length,
      failedCategories,
    };
  },

  getCategoryScenes: async (category: string): Promise<Scene[]> => {
    try {
      const scenesPath = CONTENT_DIR + category + "/scenes.json";
      const content = await FileSystem.readAsStringAsync(scenesPath);
      return JSON.parse(content);
    } catch (error) {
      console.error("Error reading scenes:", error);
      return [];
    }
  },

  getAudioPath: (category: string, audioFile: string): string => {
    return CONTENT_DIR + category + "/" + audioFile;
  },

  getStorageInfo: async (): Promise<{ used: number; categories: string[] }> => {
    try {
      const dirInfo = await FileSystem.getInfoAsync(CONTENT_DIR);
      if (!dirInfo.exists) {
        return { used: 0, categories: [] };
      }

      const files = await FileSystem.readDirectoryAsync(CONTENT_DIR);
      const categories = files.filter((f) => !f.endsWith(".zip"));

      let totalSize = 0;
      for (const category of categories) {
        const catDir = CONTENT_DIR + category;
        const catInfo = await FileSystem.getInfoAsync(catDir, { size: true });
        if (catInfo.exists && "size" in catInfo) {
          totalSize += catInfo.size || 0;
        }
      }

      return { used: totalSize, categories };
    } catch {
      return { used: 0, categories: [] };
    }
  },

  clearAllContent: async (): Promise<void> => {
    try {
      const dirInfo = await FileSystem.getInfoAsync(CONTENT_DIR);
      if (dirInfo.exists) {
        await FileSystem.deleteAsync(CONTENT_DIR, { idempotent: true });
      }
      await AsyncStorage.removeItem(CONTENT_VERSION_KEY);
    } catch (error) {
      console.error("Error clearing content:", error);
    }
  },
};

export default contentSyncService;
