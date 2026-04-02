import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SubscriptionTier = "free" | "pro" | "family";
export type VoiceAccent = "en-US" | "en-GB" | "en-AU";
export type SpeechSpeed = "slow" | "normal" | "fast";
export type VoiceGender = "male" | "female";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  location?: string;
  language?: string;
  token?: string;
}

export interface UserStats {
  phrasesLearned: number;
  practiceStreak: number;
  totalTimeMinutes: number;
  lastActiveDate: string;
}

export interface UserPreferences {
  notifications: boolean;
  darkMode: boolean;
  autoPlayAudio: boolean;
  language: string;
  ttsVoice: string;
  accent: VoiceAccent;
  speechSpeed: SpeechSpeed;
  voiceGender: VoiceGender;
}

export interface FamilyMember {
  id: string;
  email: string;
  name: string;
  role: "admin" | "member";
  creditsUsed: number;
  joinedAt: string;
}

export interface UserState {
  // User Info
  user: User | null;
  subscription: SubscriptionTier;
  subscriptionExpiry: string | null;

  // Credits
  credits: number;

  // Stats
  stats: UserStats;

  // Preferences
  preferences: UserPreferences;

  // Family Plan
  familyId: string | null;
  familyMembers: FamilyMember[];
  isAdmin: boolean;

  // Actions
  setUser: (user: User | null) => void;
  setSubscription: (tier: SubscriptionTier, expiry?: string) => void;
  setCredits: (credits: number) => void;
  addCredits: (amount: number) => void;
  deductCredits: (amount: number) => boolean;
  updateStats: (stats: Partial<UserStats>) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  setFamily: (
    familyId: string,
    members: FamilyMember[],
    isAdmin: boolean,
  ) => void;
  leaveFamily: () => void;
  reset: () => void;
}

const initialState = {
  user: null,
  subscription: "free" as SubscriptionTier,
  subscriptionExpiry: null,
  credits: 0,
  stats: {
    phrasesLearned: 0,
    practiceStreak: 0,
    totalTimeMinutes: 0,
    lastActiveDate: new Date().toISOString(),
  },
  preferences: {
    notifications: true,
    darkMode: false,
    autoPlayAudio: true,
    language: "en",
    ttsVoice: "en-US-Standard-A",
    accent: "en-US" as VoiceAccent,
    speechSpeed: "normal" as SpeechSpeed,
    voiceGender: "female" as VoiceGender,
  },
  familyId: null,
  familyMembers: [],
  isAdmin: false,
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setUser: (user) => set({ user }),

      setSubscription: (tier, expiry) =>
        set({ subscription: tier, subscriptionExpiry: expiry || null }),

      setCredits: (credits) => set({ credits }),

      addCredits: (amount) =>
        set((state) => ({ credits: state.credits + amount })),

      deductCredits: (amount) => {
        const currentCredits = get().credits;
        if (currentCredits >= amount) {
          set({ credits: currentCredits - amount });
          return true;
        }
        return false;
      },

      updateStats: (newStats) =>
        set((state) => ({
          stats: { ...state.stats, ...newStats },
        })),

      updatePreferences: (newPrefs) =>
        set((state) => ({
          preferences: { ...state.preferences, ...newPrefs },
        })),

      setFamily: (familyId, members, isAdmin) =>
        set({ familyId, familyMembers: members, isAdmin }),

      leaveFamily: () =>
        set({ familyId: null, familyMembers: [], isAdmin: false }),

      reset: () => set(initialState),
    }),
    {
      name: "talkbuddy-user-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        subscription: state.subscription,
        subscriptionExpiry: state.subscriptionExpiry,
        credits: state.credits,
        stats: state.stats,
        preferences: state.preferences,
        familyId: state.familyId,
        familyMembers: state.familyMembers,
        isAdmin: state.isAdmin,
      }),
    },
  ),
);
