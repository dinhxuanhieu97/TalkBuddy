import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://localhost:5277/api/content";

const CONTENT_CACHE_KEY = "talkbuddy_content_cache";
const CACHE_EXPIRY_HOURS = 24;

export interface Category {
  id: string;
  titleEn: string;
  titleZh: string;
  displayOrder: number;
  sceneCount: number;
}

export interface Scene {
  id: string;
  titleEn: string;
  titleZh: string;
  description: string;
  otherRole: string;
  otherRoleIcon?: string;
  flowCount: number;
}

export interface MicroInteractionItem {
  id: number;
  textEn: string;
  textZh: string;
  responseEn?: string;
  responseZh?: string;
  note?: string;
  displayOrder: number;
}

export interface MicroInteractionGroup {
  id: string;
  titleEn: string;
  titleZh: string;
  icon: string;
  displayOrder: number;
  items: MicroInteractionItem[];
}

export interface Manifest {
  categories: Category[];
  totalCategories: number;
  totalMicroInteractions: number;
  generatedAt: string;
}

interface CacheData {
  categories?: Category[];
  microInteractions?: MicroInteractionGroup[];
  scenes?: Record<string, Scene[]>;
  timestamp: number;
}

class ContentService {
  private getCachedData(): CacheData | null {
    try {
      const cached = localStorage.getItem(CONTENT_CACHE_KEY);
      if (!cached) return null;
      
      const data: CacheData = JSON.parse(cached);
      const hoursSinceCache = (Date.now() - data.timestamp) / (1000 * 60 * 60);
      
      if (hoursSinceCache > CACHE_EXPIRY_HOURS) {
        return null;
      }
      
      return data;
    } catch {
      return null;
    }
  }

  private setCachedData(data: Partial<CacheData>): void {
    try {
      const existing = this.getCachedData() || { timestamp: 0 };
      const newData: CacheData = {
        ...existing,
        ...data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify(newData));
    } catch {
      // Ignore cache errors
    }
  }

  async getCategories(forceRefresh = false): Promise<Category[]> {
    if (!forceRefresh) {
      const cached = this.getCachedData();
      if (cached?.categories) {
        return cached.categories;
      }
    }

    try {
      const response = await axios.get<{ success: boolean; data: Category[] }>(
        `${API_BASE_URL}/categories`
      );
      
      if (response.data.success) {
        this.setCachedData({ categories: response.data.data });
        return response.data.data;
      }
      throw new Error("Failed to fetch categories");
    } catch (error) {
      console.error("Error fetching categories:", error);
      const cached = this.getCachedData();
      if (cached?.categories) {
        return cached.categories;
      }
      return [];
    }
  }

  async getScenes(categoryId: string, forceRefresh = false): Promise<Scene[]> {
    const cacheKey = `scenes_${categoryId}`;
    
    if (!forceRefresh) {
      const cached = this.getCachedData();
      if (cached?.scenes?.[categoryId]) {
        return cached.scenes[categoryId];
      }
    }

    try {
      const response = await axios.get<{ success: boolean; data: Scene[] }>(
        `${API_BASE_URL}/scenes/${categoryId}`
      );
      
      if (response.data.success) {
        const cached = this.getCachedData() || { timestamp: 0, scenes: {} };
        cached.scenes = cached.scenes || {};
        cached.scenes[categoryId] = response.data.data;
        this.setCachedData(cached);
        return response.data.data;
      }
      throw new Error("Failed to fetch scenes");
    } catch (error) {
      console.error("Error fetching scenes:", error);
      const cached = this.getCachedData();
      if (cached?.scenes?.[categoryId]) {
        return cached.scenes[categoryId];
      }
      return [];
    }
  }

  async getMicroInteractions(forceRefresh = false): Promise<MicroInteractionGroup[]> {
    if (!forceRefresh) {
      const cached = this.getCachedData();
      if (cached?.microInteractions) {
        return cached.microInteractions;
      }
    }

    try {
      const response = await axios.get<{ success: boolean; data: MicroInteractionGroup[] }>(
        `${API_BASE_URL}/micro-interactions`
      );
      
      if (response.data.success) {
        this.setCachedData({ microInteractions: response.data.data });
        return response.data.data;
      }
      throw new Error("Failed to fetch micro-interactions");
    } catch (error) {
      console.error("Error fetching micro-interactions:", error);
      const cached = this.getCachedData();
      if (cached?.microInteractions) {
        return cached.microInteractions;
      }
      return [];
    }
  }

  async getManifest(): Promise<Manifest | null> {
    try {
      const response = await axios.get<{ success: boolean; data: Manifest }>(
        `${API_BASE_URL}/manifest`
      );
      
      if (response.data.success) {
        return response.data.data;
      }
      return null;
    } catch (error) {
      console.error("Error fetching manifest:", error);
      return null;
    }
  }

  clearCache(): void {
    try {
      localStorage.removeItem(CONTENT_CACHE_KEY);
    } catch {
      // Ignore
    }
  }
}

export default new ContentService();
