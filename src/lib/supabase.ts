import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found in environment variables. App will run in offline mode.",
  );
}

// Create a mock client for development when credentials are missing
const createMockClient = () => ({
  auth: {
    signInWithPassword: async () => ({
      data: null,
      error: new Error("Supabase not configured"),
    }),
    signUp: async () => ({
      data: null,
      error: new Error("Supabase not configured"),
    }),
    signInWithIdToken: async () => ({
      data: null,
      error: new Error("Supabase not configured"),
    }),
    signOut: async () => ({ error: new Error("Supabase not configured") }),
    getUser: async () => ({ data: { user: null }, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
    resetPasswordForEmail: async () => ({
      error: new Error("Supabase not configured"),
    }),
    updateUser: async () => ({ error: new Error("Supabase not configured") }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: async () => ({
          data: null,
          error: new Error("Supabase not configured"),
        }),
        then: async () => ({ data: [], error: null }),
      }),
      then: async () => ({ data: [], error: null }),
    }),
    insert: () => ({
      select: () => ({
        single: async () => ({
          data: null,
          error: new Error("Supabase not configured"),
        }),
        then: async () => ({ data: [], error: null }),
      }),
      then: async () => ({ data: [], error: null }),
    }),
    update: () => ({
      eq: () => ({
        select: () => ({
          single: async () => ({
            data: null,
            error: new Error("Supabase not configured"),
          }),
          then: async () => ({ data: [], error: null }),
        }),
        then: async () => ({ data: [], error: null }),
      }),
      then: async () => ({ data: [], error: null }),
    }),
    upsert: () => ({
      select: () => ({
        single: async () => ({
          data: null,
          error: new Error("Supabase not configured"),
        }),
        then: async () => ({ data: [], error: null }),
      }),
      then: async () => ({ data: [], error: null }),
    }),
    delete: () => ({
      eq: async () => ({ error: new Error("Supabase not configured") }),
      then: async () => ({ data: [], error: null }),
    }),
  }),
  channel: () => ({
    on: (type: string, filter?: any, callback?: any) => {
      // Handle different channel types
      if (type === "postgres_changes" && callback) {
        // Mock postgres_changes - call callback immediately for testing
        setTimeout(() => callback(), 100);
      }
      return {
        subscribe: () => ({ unsubscribe: () => {} }),
      };
    },
  }),
});

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
        realtime: {
          params: {
            eventsPerSecond: 10,
          },
        },
      })
    : createMockClient();

// Database types (matching web app schema)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string | null;
          email_verified: string | null;
          name: string | null;
          image: string | null;
          password_hash: string | null;
          locale: string;
          accent: string;
          speed: string;
          my_voice_gender: string | null;
          subscription_tier: string;
          stripe_customer_id: string | null;
          stripe_sub_id: string | null;
          subscription_ends_at: string | null;
          trip_boost_ends_at: string | null;
          iap_store: string | null;
          iap_product_id: string | null;
          referral_code: string | null;
          referred_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["users"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      learning_progress: {
        Row: {
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
        };
        Insert: Omit<
          Database["public"]["Tables"]["learning_progress"]["Row"],
          "id" | "created_at" | "updated_at"
        >;
        Update: Partial<
          Database["public"]["Tables"]["learning_progress"]["Insert"]
        >;
      };
      saved_phrases: {
        Row: {
          id: string;
          user_id: string;
          phrase_key: string;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["saved_phrases"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<
          Database["public"]["Tables"]["saved_phrases"]["Insert"]
        >;
      };
      user_streaks: {
        Row: {
          id: string;
          user_id: string;
          current_streak: number;
          longest_streak: number;
          total_days: number;
          today_phrase_count: number;
          last_active_date: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["user_streaks"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["user_streaks"]["Insert"]>;
      };
      daily_usage: {
        Row: {
          id: string;
          user_id: string;
          date: string;
          pronunciation_count: number;
          ai_conversation_count: number;
          speak_for_me_count: number;
          word_lookup_count: number;
          scene_generate_count: number;
        };
        Insert: Omit<Database["public"]["Tables"]["daily_usage"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["daily_usage"]["Insert"]>;
      };
    };
  };
}

export default supabase;
