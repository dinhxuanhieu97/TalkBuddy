import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EXPORT_API_BASE_URL = "https://talkbuddy.wayjet.io/api/export";
const API_KEY = import.meta.env.VITE_WEB_API_KEY || "";

const LOCAL_MANIFEST_KEY = "talkbuddy_local_manifest";
const AUDIO_FORMAT_MAP_KEY = "talkbuddy_audio_format_map";

export interface ExportManifest {
  schemaVersion: number;
  accent: string;
  speed: string;
  generatedAt: string;
  totalCategories: number;
  totalScenes: number;
  categories: Record<string, CategoryInfo>;
}

export interface CategoryInfo {
  titleZh: string;
  titleEn: string;
  sceneCount: number;
  phraseCount: number;
  availableAudioCount: number;
  totalAudioCount: number;
  contentVersion: string;
  audioVersion: string;
}

export interface DialogueTurn {
  index: number;
  speaker: string;
  textEn: string;
  textZh: string;
  role: string;
  cacheKey: string;
  audioUrl: string;
  keyPhrases: string[];
  culturalNote: string | null;
  responseTip: string;
}

export interface DialogueFlow {
  id: string;
  titleZh: string;
  titleEn: string;
  difficulty: string;
  turns: DialogueTurn[];
}

export interface PresetScene {
  id: string;
  category: string;
  titleZh: string;
  titleEn: string;
  description: string;
  otherRole: string;
  otherRoleIcon: string;
  flows: DialogueFlow[];
}

export interface ScenesResponse {
  success: boolean;
  data: {
    schemaVersion: number;
    category: string;
    titleZh: string;
    titleEn: string;
    accent: string;
    speed: string;
    contentVersion: string;
    audioVersion: string;
    sceneCount: number;
    totalAudioCount: number;
    availableAudioCount: number;
    availableAudioKeys: string[];
    scenes: PresetScene[];
    generatedAt: string;
  };
}

interface LocalManifestEntry {
  contentVersion: string;
  audioVersion: string;
}

type LocalManifest = Record<string, LocalManifestEntry>;

class ExportSyncService {
  private getApiClient() {
    return axios.create({
      baseURL: EXPORT_API_BASE_URL,
      headers: {
        "X-API-Key": API_KEY,
      },
      timeout: 30000,
    });
  }

  async getManifest(
    accent = "en-US",
    speed = "normal",
  ): Promise<ExportManifest | null> {
    try {
      const response = await this.getApiClient().get("/manifest", {
        params: { accent, speed },
      });
      if (response.data.success) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      console.error("Failed to fetch export manifest:", error);
      return null;
    }
  }

  async getScenes(
    category: string,
    accent = "en-US",
    speed = "normal",
  ): Promise<ScenesResponse["data"] | null> {
    try {
      const response = await this.getApiClient().get(`/scenes/${category}`, {
        params: { accent, speed },
      });
      if (response.data.success) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      console.error(`Failed to fetch scenes for ${category}:`, error);
      return null;
    }
  }

  async getAudio(
    cacheKey: string,
  ): Promise<{ bytes: ArrayBuffer; format: string } | null> {
    try {
      const response = await this.getApiClient().get(`/audio/${cacheKey}`, {
        responseType: "arraybuffer",
      });
      const format = response.headers["x-audio-format"] || "mp3";
      return {
        bytes: response.data,
        format,
      };
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error(`Failed to fetch audio ${cacheKey}:`, error);
      return null;
    }
  }

  async getLocalManifest(): Promise<LocalManifest> {
    try {
      const stored = await AsyncStorage.getItem(LOCAL_MANIFEST_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  async saveLocalManifestEntry(
    category: string,
    entry: LocalManifestEntry,
  ): Promise<void> {
    try {
      const manifest = await this.getLocalManifest();
      manifest[category] = entry;
      await AsyncStorage.setItem(LOCAL_MANIFEST_KEY, JSON.stringify(manifest));
    } catch (error) {
      console.error("Failed to save local manifest:", error);
    }
  }

  async getAudioFormatMap(): Promise<Record<string, string>> {
    try {
      const stored = await AsyncStorage.getItem(AUDIO_FORMAT_MAP_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  }

  async recordAudioFormat(cacheKey: string, format: string): Promise<void> {
    try {
      const map = await this.getAudioFormatMap();
      map[cacheKey] = format;
      await AsyncStorage.setItem(AUDIO_FORMAT_MAP_KEY, JSON.stringify(map));
    } catch (error) {
      console.error("Failed to record audio format:", error);
    }
  }

  async syncAllCategories(
    accent = "en-US",
    speed = "normal",
    onProgress?: (category: string, progress: number, total: number) => void,
  ): Promise<boolean> {
    const manifest = await this.getManifest();
    if (!manifest) {
      console.error("Failed to get manifest");
      return false;
    }

    const localManifest = await this.getLocalManifest();
    const categories = Object.keys(manifest.categories);
    let processed = 0;

    for (const category of categories) {
      const remote = manifest.categories[category];
      const local = localManifest[category];

      const contentChanged =
        !local || local.contentVersion !== remote.contentVersion;
      const audioChanged = !local || local.audioVersion !== remote.audioVersion;

      if (!contentChanged && !audioChanged) {
        processed++;
        continue;
      }

      console.log(`Syncing category: ${category}`);

      const scenesData = await this.getScenes(category, accent, speed);
      if (!scenesData) {
        console.error(`Failed to get scenes for ${category}`);
        continue;
      }

      await this.syncCategoryScenes(category, scenesData);

      await this.saveLocalManifestEntry(category, {
        contentVersion: scenesData.contentVersion,
        audioVersion: scenesData.audioVersion,
      });

      processed++;
      onProgress?.(category, processed, categories.length);
    }

    return true;
  }

  private async syncCategoryScenes(
    category: string,
    scenesData: ScenesResponse["data"],
  ): Promise<void> {
    const availableKeys = scenesData.availableAudioKeys || [];
    const localFormatMap = await this.getAudioFormatMap();

    const missingKeys = availableKeys.filter((key) => !localFormatMap[key]);

    console.log(
      `Downloading ${missingKeys.length} audio files for ${category}`,
    );

    const concurrency = 6;
    for (let i = 0; i < missingKeys.length; i += concurrency) {
      const batch = missingKeys.slice(i, i + concurrency);
      await Promise.all(
        batch.map(async (key) => {
          const result = await this.getAudio(key);
          if (result) {
            await this.recordAudioFormat(key, result.format);
            console.log(`Downloaded audio: ${key}.${result.format}`);
          }
        }),
      );
    }
  }

  async downloadBundle(
    category: string,
    accent = "en-US",
    speed = "normal",
  ): Promise<Blob | null> {
    try {
      const response = await this.getApiClient().get(`/bundle/${category}`, {
        params: { accent, speed },
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      console.error(`Failed to download bundle for ${category}:`, error);
      return null;
    }
  }

  async checkForUpdates(
    accent = "en-US",
    speed = "normal",
  ): Promise<{
    hasUpdates: boolean;
    categoriesToUpdate: string[];
  }> {
    const manifest = await this.getManifest(accent, speed);
    if (!manifest) {
      return { hasUpdates: false, categoriesToUpdate: [] };
    }

    const localManifest = await this.getLocalManifest();
    const categoriesToUpdate: string[] = [];

    for (const [category, remote] of Object.entries(manifest.categories)) {
      const local = localManifest[category];
      if (
        !local ||
        local.contentVersion !== remote.contentVersion ||
        local.audioVersion !== remote.audioVersion
      ) {
        categoriesToUpdate.push(category);
      }
    }

    return {
      hasUpdates: categoriesToUpdate.length > 0,
      categoriesToUpdate,
    };
  }
}

export default new ExportSyncService();
