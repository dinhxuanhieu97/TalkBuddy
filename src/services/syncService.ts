import AsyncStorage from "@react-native-async-storage/async-storage";
import { srsService, type PhraseProgress } from "./srsService";
import { userApi } from "./api";

const SYNC_QUEUE_KEY = "talkbuddy_sync_queue";
const LAST_SYNC_KEY = "talkbuddy_last_sync";

interface SyncItem {
  type: "progress" | "streak" | "stats";
  data: unknown;
  timestamp: number;
}

export const syncService = {
  addToQueue: async (item: SyncItem): Promise<void> => {
    try {
      const queue = await syncService.getQueue();
      queue.push(item);
      await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue));
    } catch (error) {
      console.error("Failed to add to sync queue:", error);
    }
  },

  getQueue: async (): Promise<SyncItem[]> => {
    try {
      const data = await AsyncStorage.getItem(SYNC_QUEUE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  clearQueue: async (): Promise<void> => {
    await AsyncStorage.removeItem(SYNC_QUEUE_KEY);
  },

  getLastSyncTime: async (): Promise<Date | null> => {
    try {
      const data = await AsyncStorage.getItem(LAST_SYNC_KEY);
      return data ? new Date(data) : null;
    } catch {
      return null;
    }
  },

  setLastSyncTime: async (): Promise<void> => {
    await AsyncStorage.setItem(LAST_SYNC_KEY, new Date().toISOString());
  },

  syncProgress: async (progress: PhraseProgress): Promise<boolean> => {
    try {
      await userApi.updateStats({
        PhrasesLearned: 1,
      });
      return true;
    } catch (error) {
      console.error("Failed to sync progress:", error);
      await syncService.addToQueue({
        type: "progress",
        data: progress,
        timestamp: Date.now(),
      });
      return false;
    }
  },

  syncStreak: async (streak: number): Promise<boolean> => {
    try {
      await userApi.updateStats({
        PracticeStreak: streak,
      });
      return true;
    } catch (error) {
      console.error("Failed to sync streak:", error);
      await syncService.addToQueue({
        type: "streak",
        data: { streak },
        timestamp: Date.now(),
      });
      return false;
    }
  },

  syncAll: async (): Promise<{ synced: number; failed: number }> => {
    const queue = await syncService.getQueue();
    if (queue.length === 0) {
      return { synced: 0, failed: 0 };
    }

    let synced = 0;
    let failed = 0;
    const remaining: SyncItem[] = [];

    for (const item of queue) {
      try {
        if (item.type === "progress") {
          await userApi.updateStats({ PhrasesLearned: 1 });
          synced++;
        } else if (item.type === "streak") {
          const data = item.data as { streak: number };
          await userApi.updateStats({ PracticeStreak: data.streak });
          synced++;
        } else if (item.type === "stats") {
          const data = item.data as { phrasesLearned?: number; practiceStreak?: number; totalTimeMinutes?: number };
          await userApi.updateStats({
            PhrasesLearned: data.phrasesLearned,
            PracticeStreak: data.practiceStreak,
            TotalTimeMinutes: data.totalTimeMinutes,
          });
          synced++;
        }
      } catch {
        failed++;
        remaining.push(item);
      }
    }

    await AsyncStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(remaining));
    await syncService.setLastSyncTime();

    return { synced, failed };
  },

  autoSync: async (): Promise<void> => {
    const lastSync = await syncService.getLastSyncTime();
    const now = new Date();
    
    if (!lastSync) {
      await syncService.setLastSyncTime();
      return;
    }

    const hoursSinceLastSync = (now.getTime() - lastSync.getTime()) / (1000 * 60 * 60);
    
    if (hoursSinceLastSync >= 1) {
      await syncService.syncAll();
    }
  },

  recordPractice: async (
    phraseId: string,
    mode: "dictation" | "shadowing" | "practice",
    score: number
  ): Promise<PhraseProgress> => {
    const progress = await srsService.recordScore(phraseId, mode, score);
    
    await syncService.syncProgress(progress);
    
    return progress;
  },

  getStats: async () => {
    const srsStats = await srsService.getStats();
    const lastSync = await syncService.getLastSyncTime();
    const queue = await syncService.getQueue();

    return {
      ...srsStats,
      lastSyncTime: lastSync?.toISOString() ?? null,
      pendingSync: queue.length,
    };
  },
};
