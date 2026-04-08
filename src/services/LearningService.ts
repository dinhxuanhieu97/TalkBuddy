import { supabase, Database } from '../lib/supabase';

export type LearningProgress = Database['public']['Tables']['learning_progress']['Row'];
export type LearningProgressInsert = Database['public']['Tables']['learning_progress']['Insert'];
export type LearningProgressUpdate = Database['public']['Tables']['learning_progress']['Update'];

export type SavedPhrase = Database['public']['Tables']['saved_phrases']['Row'];
export type SavedPhraseInsert = Database['public']['Tables']['saved_phrases']['Insert'];

export type UserStreak = Database['public']['Tables']['user_streaks']['Row'];
export type UserStreakInsert = Database['public']['Tables']['user_streaks']['Insert'];
export type UserStreakUpdate = Database['public']['Tables']['user_streaks']['Update'];

export type DailyUsage = Database['public']['Tables']['daily_usage']['Row'];
export type DailyUsageInsert = Database['public']['Tables']['daily_usage']['Insert'];
export type DailyUsageUpdate = Database['public']['Tables']['daily_usage']['Update'];

export class LearningService {
  // Learning Progress
  static async getProgress(userId: string, phraseKey?: string): Promise<LearningProgress[]> {
    try {
      let query = supabase
        .from('learning_progress')
        .select('*')
        .eq('user_id', userId);

      if (phraseKey) {
        query = query.eq('phrase_key', phraseKey);
      }

      const { data, error } = await query;
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching progress:', error);
      return [];
    }
  }

  static async updateProgress(
    userId: string,
    phraseKey: string,
    updates: Partial<LearningProgressUpdate>
  ): Promise<LearningProgress | null> {
    try {
      const { data, error } = await supabase
        .from('learning_progress')
        .upsert({
          user_id: userId,
          phrase_key: phraseKey,
          ...updates,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating progress:', error);
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
    }
  ): Promise<LearningProgress | null> {
    try {
      // Get current progress
      const currentProgress = await this.getProgress(userId, phraseKey);
      const existing = currentProgress[0];

      // Calculate new mastery based on scores
      const avgScore = Object.values(scores).filter(Boolean).reduce((a, b) => a + b, 0) / Object.values(scores).filter(Boolean).length;
      const newMastery = existing 
        ? Math.min(100, (existing.mastery + avgScore) / 2)
        : avgScore;

      // Calculate SRS interval (simplified algorithm)
      let srsInterval = 1;
      let srsEaseFactor = 2.5;
      let srsRepetitions = 0;

      if (existing) {
        srsRepetitions = existing.srs_repetitions + 1;
        srsEaseFactor = Math.max(1.3, existing.srs_ease_factor + (0.1 - (3 - avgScore) * 0.08));
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
      console.error('Error in practice session:', error);
      return null;
    }
  }

  // Saved Phrases
  static async getSavedPhrases(userId: string): Promise<SavedPhrase[]> {
    try {
      const { data, error } = await supabase
        .from('saved_phrases')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching saved phrases:', error);
      return [];
    }
  }

  static async savePhrase(userId: string, phraseKey: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('saved_phrases')
        .upsert({
          user_id: userId,
          phrase_key: phraseKey,
        });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error saving phrase:', error);
      return false;
    }
  }

  static async unsavePhrase(userId: string, phraseKey: string): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('saved_phrases')
        .delete()
        .eq('user_id', userId)
        .eq('phrase_key', phraseKey);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error unsaving phrase:', error);
      return false;
    }
  }

  // User Streak
  static async getUserStreak(userId: string): Promise<UserStreak | null> {
    try {
      const { data, error } = await supabase
        .from('user_streaks')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
      return data || null;
    } catch (error) {
      console.error('Error fetching user streak:', error);
      return null;
    }
  }

  static async updateStreak(userId: string): Promise<UserStreak | null> {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
      const currentStreak = await this.getUserStreak(userId);

      let streakData: UserStreakInsert & { id?: string } = {
        user_id: userId,
        current_streak: 1,
        longest_streak: 1,
        total_days: 1,
        today_phrase_count: 1,
        last_active_date: today,
      };

      if (currentStreak) {
        const lastActive = currentStreak.last_active_date;
        const isConsecutive = lastActive && this.isConsecutiveDay(lastActive, today);

        streakData = {
          id: currentStreak.id,
          user_id: userId,
          current_streak: isConsecutive ? currentStreak.current_streak + 1 : 1,
          longest_streak: Math.max(currentStreak.longest_streak, isConsecutive ? currentStreak.current_streak + 1 : 1),
          total_days: currentStreak.total_days + 1,
          today_phrase_count: lastActive === today ? currentStreak.today_phrase_count + 1 : 1,
          last_active_date: today,
        };
      }

      const { data, error } = await supabase
        .from('user_streaks')
        .upsert(streakData)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating streak:', error);
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
    }
  ): Promise<DailyUsage | null> {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

      // Get existing usage for today
      const { data: existing } = await supabase
        .from('daily_usage')
        .select('*')
        .eq('user_id', userId)
        .eq('date', today)
        .single();

      const usageData: DailyUsageInsert = {
        user_id: userId,
        date: today,
        pronunciation_count: (existing?.pronunciation_count || 0) + (usage.pronunciation_count || 0),
        ai_conversation_count: (existing?.ai_conversation_count || 0) + (usage.ai_conversation_count || 0),
        speak_for_me_count: (existing?.speak_for_me_count || 0) + (usage.speak_for_me_count || 0),
        word_lookup_count: (existing?.word_lookup_count || 0) + (usage.word_lookup_count || 0),
        scene_generate_count: (existing?.scene_generate_count || 0) + (usage.scene_generate_count || 0),
      };

      const { data, error } = await supabase
        .from('daily_usage')
        .upsert(usageData)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating daily usage:', error);
      return null;
    }
  }

  // Real-time subscriptions
  static subscribeToProgress(userId: string, callback: (progress: LearningProgress[]) => void) {
    return supabase
      .channel(`progress_${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'learning_progress',
          filter: `user_id=eq.${userId}`,
        },
        async () => {
          const progress = await this.getProgress(userId);
          callback(progress);
        }
      )
      .subscribe();
  }

  static subscribeToStreak(userId: string, callback: (streak: UserStreak | null) => void) {
    return supabase
      .channel(`streak_${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_streaks',
          filter: `user_id=eq.${userId}`,
        },
        async () => {
          const streak = await this.getUserStreak(userId);
          callback(streak);
        }
      )
      .subscribe();
  }
}

export default LearningService;
