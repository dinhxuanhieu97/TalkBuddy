import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../services/api";

const isDebug = process.env.VITE_DEBUG === "true";
const API_BASE_URL = isDebug
  ? "http://localhost:5277"
  : process.env.VITE_API_URL || "https://servicetalkbuddy.mysixbox.com";

const STORAGE_KEYS = {
  LEARNING_PROGRESS: "talkbuddy_learning_progress",
  USER_STREAK: "talkbuddy_user_streak",
  DAILY_USAGE: "talkbuddy_daily_usage",
};

export interface LearningProgress {
  id: string;
  user_id: string;
  phrase_key: string;
  mastery: number;
  read_count: number;
  dictation_score: number | null;
  shadowing_score: number | null;
  listening_score: number | null;
  srs_interval: number;
  srs_ease_factor: number;
  srs_next_review: string;
  srs_repetitions: number;
  last_practiced: string;
  created_at: string;
  updated_at: string;
}

export interface UserStreak {
  id: string;
  user_id: string;
  current_streak: number;
  longest_streak: number;
  total_days: number;
  today_phrase_count: number;
  last_active_date: string | null;
}

export interface DailyUsage {
  id: string;
  user_id: string;
  date: string;
  pronunciation_count: number;
  ai_conversation_count: number;
  speak_for_me_count: number;
  word_lookup_count: number;
  scene_generate_count: number;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

async function getUserId(): Promise<string> {
  const userId = await AsyncStorage.getItem("user_id");
  if (userId) return userId;
  const newId = generateId();
  await AsyncStorage.setItem("user_id", newId);
  return newId;
}

export const learningApi = {
  async getProgress(
    userId: string,
    phraseKey?: string,
  ): Promise<LearningProgress[]> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS);
      const allProgress: LearningProgress[] = data ? JSON.parse(data) : [];
      return allProgress.filter(
        (p) =>
          p.user_id === userId && (!phraseKey || p.phrase_key === phraseKey),
      );
    } catch (error) {
      console.error("Error getting progress:", error);
      return [];
    }
  },

  async updateProgress(
    userId: string,
    phraseKey: string,
    updates: Partial<LearningProgress>,
  ): Promise<LearningProgress | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS);
      const allProgress: LearningProgress[] = data ? JSON.parse(data) : [];
      const existingIndex = allProgress.findIndex(
        (p) => p.user_id === userId && p.phrase_key === phraseKey,
      );

      const now = new Date().toISOString();
      const progress: LearningProgress =
        existingIndex >= 0
          ? { ...allProgress[existingIndex], ...updates, updated_at: now }
          : {
              id: generateId(),
              user_id: userId,
              phrase_key: phraseKey,
              mastery: updates.mastery || 0,
              read_count: updates.read_count || 0,
              dictation_score: updates.dictation_score || null,
              shadowing_score: updates.shadowing_score || null,
              listening_score: updates.listening_score || null,
              srs_interval: updates.srs_interval || 1,
              srs_ease_factor: updates.srs_ease_factor || 2.5,
              srs_next_review: updates.srs_next_review || now,
              srs_repetitions: updates.srs_repetitions || 0,
              last_practiced: updates.last_practiced || now,
              created_at: now,
              updated_at: now,
            };

      if (existingIndex >= 0) {
        allProgress[existingIndex] = progress;
      } else {
        allProgress.push(progress);
      }

      await AsyncStorage.setItem(
        STORAGE_KEYS.LEARNING_PROGRESS,
        JSON.stringify(allProgress),
      );
      return progress;
    } catch (error) {
      console.error("Error updating progress:", error);
      return null;
    }
  },

  async getUserStreak(userId: string): Promise<UserStreak | null> {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_STREAK);
      const allStreaks: UserStreak[] = data ? JSON.parse(data) : [];
      return allStreaks.find((s) => s.user_id === userId) || null;
    } catch (error) {
      console.error("Error getting streak:", error);
      return null;
    }
  },

  async updateStreak(userId: string): Promise<UserStreak | null> {
    try {
      const today = new Date().toISOString().split("T")[0];
      const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_STREAK);
      const allStreaks: UserStreak[] = data ? JSON.parse(data) : [];
      const existingIndex = allStreaks.findIndex((s) => s.user_id === userId);

      let streak: UserStreak;
      if (existingIndex >= 0) {
        const current = allStreaks[existingIndex];
        const lastActive = current.last_active_date;
        const isConsecutive = lastActive
          ? (new Date(today).getTime() - new Date(lastActive).getTime()) /
              (1000 * 60 * 60 * 24) ===
            1
          : false;

        streak = {
          ...current,
          current_streak: isConsecutive ? current.current_streak + 1 : 1,
          longest_streak: Math.max(
            current.longest_streak,
            isConsecutive ? current.current_streak + 1 : 1,
          ),
          total_days: current.total_days + 1,
          today_phrase_count:
            lastActive === today ? current.today_phrase_count + 1 : 1,
          last_active_date: today,
        };
      } else {
        streak = {
          id: generateId(),
          user_id: userId,
          current_streak: 1,
          longest_streak: 1,
          total_days: 1,
          today_phrase_count: 1,
          last_active_date: today,
        };
      }

      if (existingIndex >= 0) {
        allStreaks[existingIndex] = streak;
      } else {
        allStreaks.push(streak);
      }

      await AsyncStorage.setItem(
        STORAGE_KEYS.USER_STREAK,
        JSON.stringify(allStreaks),
      );
      return streak;
    } catch (error) {
      console.error("Error updating streak:", error);
      return null;
    }
  },

  async getDailyUsage(
    userId: string,
    date?: string,
  ): Promise<DailyUsage | null> {
    try {
      const targetDate = date || new Date().toISOString().split("T")[0];
      const data = await AsyncStorage.getItem(STORAGE_KEYS.DAILY_USAGE);
      const allUsage: DailyUsage[] = data ? JSON.parse(data) : [];
      return (
        allUsage.find((u) => u.user_id === userId && u.date === targetDate) ||
        null
      );
    } catch (error) {
      console.error("Error getting daily usage:", error);
      return null;
    }
  },

  async updateDailyUsage(
    userId: string,
    usage: Partial<DailyUsage>,
  ): Promise<DailyUsage | null> {
    try {
      const today = new Date().toISOString().split("T")[0];
      const data = await AsyncStorage.getItem(STORAGE_KEYS.DAILY_USAGE);
      const allUsage: DailyUsage[] = data ? JSON.parse(data) : [];
      const existingIndex = allUsage.findIndex(
        (u) => u.user_id === userId && u.date === today,
      );

      const usageData: DailyUsage =
        existingIndex >= 0
          ? {
              ...allUsage[existingIndex],
              pronunciation_count:
                (allUsage[existingIndex].pronunciation_count || 0) +
                (usage.pronunciation_count || 0),
              ai_conversation_count:
                (allUsage[existingIndex].ai_conversation_count || 0) +
                (usage.ai_conversation_count || 0),
              speak_for_me_count:
                (allUsage[existingIndex].speak_for_me_count || 0) +
                (usage.speak_for_me_count || 0),
              word_lookup_count:
                (allUsage[existingIndex].word_lookup_count || 0) +
                (usage.word_lookup_count || 0),
              scene_generate_count:
                (allUsage[existingIndex].scene_generate_count || 0) +
                (usage.scene_generate_count || 0),
            }
          : {
              id: generateId(),
              user_id: userId,
              date: today,
              pronunciation_count: usage.pronunciation_count || 0,
              ai_conversation_count: usage.ai_conversation_count || 0,
              speak_for_me_count: usage.speak_for_me_count || 0,
              word_lookup_count: usage.word_lookup_count || 0,
              scene_generate_count: usage.scene_generate_count || 0,
            };

      if (existingIndex >= 0) {
        allUsage[existingIndex] = usageData;
      } else {
        allUsage.push(usageData);
      }

      await AsyncStorage.setItem(
        STORAGE_KEYS.DAILY_USAGE,
        JSON.stringify(allUsage),
      );
      return usageData;
    } catch (error) {
      console.error("Error updating daily usage:", error);
      return null;
    }
  },

  async syncToServer(authToken: string): Promise<boolean> {
    try {
      const userId = await getUserId();

      const progressData = await AsyncStorage.getItem(
        STORAGE_KEYS.LEARNING_PROGRESS,
      );
      const progress: LearningProgress[] = progressData
        ? JSON.parse(progressData)
        : [];
      const userProgress = progress.filter((p) => p.user_id === userId);

      const streakData = await AsyncStorage.getItem(STORAGE_KEYS.USER_STREAK);
      const streaks: UserStreak[] = streakData ? JSON.parse(streakData) : [];
      const userStreak = streaks.find((s) => s.user_id === userId) || null;

      const usageData = await AsyncStorage.getItem(STORAGE_KEYS.DAILY_USAGE);
      const usages: DailyUsage[] = usageData ? JSON.parse(usageData) : [];
      const today = new Date().toISOString().split("T")[0];
      const userUsage =
        usages.find((u) => u.user_id === userId && u.date === today) || null;

      const savedData = await AsyncStorage.getItem("talkbuddy_saved_phrases");
      const savedPhrases = savedData ? JSON.parse(savedData) : [];

      const response = await fetch(`${API_BASE_URL}/api/learning/sync`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          progress: userProgress,
          streak: userStreak,
          dailyUsage: userUsage,
          savedPhrases: savedPhrases,
        }),
      });

      if (!response.ok) {
        console.error("Sync failed:", response.status);
        return false;
      }

      const result = await response.json();
      console.log("Sync success:", result);
      return true;
    } catch (error) {
      console.error("Error syncing to server:", error);
      return false;
    }
  },

  async fetchFromServer(authToken: string): Promise<boolean> {
    try {
      const userId = await getUserId();

      const response = await fetch(`${API_BASE_URL}/api/learning/progress`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const serverProgress = await response.json();
        const localData = await AsyncStorage.getItem(
          STORAGE_KEYS.LEARNING_PROGRESS,
        );
        const localProgress: LearningProgress[] = localData
          ? JSON.parse(localData)
          : [];

        const merged = [
          ...localProgress.filter((p) => p.user_id !== userId),
          ...serverProgress,
        ];
        await AsyncStorage.setItem(
          STORAGE_KEYS.LEARNING_PROGRESS,
          JSON.stringify(merged),
        );
      }

      const streakResponse = await fetch(
        `${API_BASE_URL}/api/learning/streak`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      );

      if (streakResponse.ok) {
        const serverStreak = await streakResponse.json();
        const streakData = await AsyncStorage.getItem(STORAGE_KEYS.USER_STREAK);
        const localStreaks: UserStreak[] = streakData
          ? JSON.parse(streakData)
          : [];
        const filtered = localStreaks.filter((s) => s.user_id !== userId);
        filtered.push(serverStreak);
        await AsyncStorage.setItem(
          STORAGE_KEYS.USER_STREAK,
          JSON.stringify(filtered),
        );
      }

      return true;
    } catch (error) {
      console.error("Error fetching from server:", error);
      return false;
    }
  },
};

export default learningApi;
