import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  learningApi,
  LearningProgress,
  UserStreak,
  DailyUsage,
} from "../lib/learningApi";

export type LearningProgressUpdate = Partial<LearningProgress>;
export type SavedPhraseInsert = any;
export type UserStreakUpdate = Partial<UserStreak>;
export type DailyUsageUpdate = Partial<DailyUsage>;

export interface SavedPhrase {
  id: string;
  user_id: string;
  phrase_key: string;
  created_at: string;
}

export class LearningService {
  // Learning Progress
  static async getProgress(
    userId: string,
    phraseKey?: string,
  ): Promise<LearningProgress[]> {
    try {
      return await learningApi.getProgress(userId, phraseKey);
    } catch (error) {
      console.error("Error fetching progress:", error);
      return [];
    }
  }

  static async updateProgress(
    userId: string,
    phraseKey: string,
    updates: Partial<LearningProgressUpdate>,
  ): Promise<LearningProgress | null> {
    try {
      return await learningApi.updateProgress(userId, phraseKey, updates);
    } catch (error) {
      console.error("Error updating progress:", error);
      return null;
    }
  }

  // Practice session - update scores and mastery
  static async practiceSession(
    userId: string,
    phraseKey: string,
    scores: {
      dictation_score?: number;
      shadowing_score?: number;
      listening_score?: number;
    },
  ): Promise<LearningProgress | null> {
    try {
      // Get current progress
      const currentProgress = await this.getProgress(userId, phraseKey);
      const existing = currentProgress[0];

      // Calculate new mastery based on scores
      const avgScore =
        Object.values(scores)
          .filter(Boolean)
          .reduce((a, b) => a + b, 0) /
        Object.values(scores).filter(Boolean).length;
      const newMastery = existing
        ? Math.min(100, (existing.mastery + avgScore) / 2)
        : avgScore;

      // Calculate SRS interval (simplified algorithm)
      let srsInterval = 1;
      let srsEaseFactor = 2.5;
      let srsRepetitions = 0;

      if (existing) {
        srsRepetitions = existing.srs_repetitions + 1;
        srsEaseFactor = Math.max(
          1.3,
          existing.srs_ease_factor + (0.1 - (3 - avgScore) * 0.08),
        );
        srsInterval = Math.ceil(srsInterval * srsEaseFactor);
      }

      const nextReview = new Date();
      nextReview.setDate(nextReview.getDate() + srsInterval);

      return this.updateProgress(userId, phraseKey, {
        mastery: Math.round(newMastery),
        read_count: (existing?.read_count || 0) + 1,
        dictation_score: scores.dictation_score,
        shadowing_score: scores.shadowing_score,
        listening_score: scores.listening_score,
        srs_interval: srsInterval,
        srs_ease_factor: srsEaseFactor,
        srs_repetitions: srsRepetitions,
        srs_next_review: nextReview.toISOString(),
        last_practiced: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error in practice session:", error);
      return null;
    }
  }

  // Saved Phrases - using AsyncStorage
  static async getSavedPhrases(userId: string): Promise<SavedPhrase[]> {
    try {
      const data = await AsyncStorage.getItem("talkbuddy_saved_phrases");
      const all: SavedPhrase[] = data ? JSON.parse(data) : [];
      return all.filter((p) => p.user_id === userId);
    } catch (error) {
      console.error("Error fetching saved phrases:", error);
      return [];
    }
  }

  static async savePhrase(userId: string, phraseKey: string): Promise<boolean> {
    try {
      const data = await AsyncStorage.getItem("talkbuddy_saved_phrases");
      const all: SavedPhrase[] = data ? JSON.parse(data) : [];
      const exists = all.find(
        (p) => p.user_id === userId && p.phrase_key === phraseKey,
      );
      if (!exists) {
        all.push({
          id: Date.now().toString(36),
          user_id: userId,
          phrase_key: phraseKey,
          created_at: new Date().toISOString(),
        });
        await AsyncStorage.setItem(
          "talkbuddy_saved_phrases",
          JSON.stringify(all),
        );
      }
      return true;
    } catch (error) {
      console.error("Error saving phrase:", error);
      return false;
    }
  }

  static async unsavePhrase(
    userId: string,
    phraseKey: string,
  ): Promise<boolean> {
    try {
      const data = await AsyncStorage.getItem("talkbuddy_saved_phrases");
      const all: SavedPhrase[] = data ? JSON.parse(data) : [];
      const filtered = all.filter(
        (p) => !(p.user_id === userId && p.phrase_key === phraseKey),
      );
      await AsyncStorage.setItem(
        "talkbuddy_saved_phrases",
        JSON.stringify(filtered),
      );
      return true;
    } catch (error) {
      console.error("Error unsaving phrase:", error);
      return false;
    }
  }

  // User Streak
  static async getUserStreak(userId: string): Promise<UserStreak | null> {
    try {
      return await learningApi.getUserStreak(userId);
    } catch (error) {
      console.error("Error fetching user streak:", error);
      return null;
    }
  }

  static async updateStreak(userId: string): Promise<UserStreak | null> {
    try {
      return await learningApi.updateStreak(userId);
    } catch (error) {
      console.error("Error updating streak:", error);
      return null;
    }
  }

  private static isConsecutiveDay(lastDate: string, today: string): boolean {
    const last = new Date(lastDate);
    const current = new Date(today);
    const diffTime = Math.abs(current.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  }

  // Daily Usage
  static async updateDailyUsage(
    userId: string,
    usage: {
      pronunciation_count?: number;
      ai_conversation_count?: number;
      speak_for_me_count?: number;
      word_lookup_count?: number;
      scene_generate_count?: number;
    },
  ): Promise<DailyUsage | null> {
    try {
      return await learningApi.updateDailyUsage(userId, usage);
    } catch (error) {
      console.error("Error updating daily usage:", error);
      return null;
    }
  }

  // Real-time subscriptions - disabled for local storage
  static subscribeToProgress(
    _userId: string,
    _callback: (progress: LearningProgress[]) => void,
  ) {
    return { unsubscribe: () => {} };
  }

  static subscribeToStreak(
    _userId: string,
    _callback: (streak: UserStreak | null) => void,
  ) {
    return { unsubscribe: () => {} };
  }
}

export default LearningService;
