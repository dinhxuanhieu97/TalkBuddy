import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const isDebug = process.env.VITE_DEBUG === "true";
const API_BASE_URL = isDebug
  ? "http://localhost:5277"
  : process.env.VITE_API_URL || "https://servicetalkbuddy.mysixbox.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };

// Callback invoked when auth token expires (401) — set by app root to trigger logout
let _onAuthExpired: (() => void) | null = null;
export function setOnAuthExpired(cb: () => void) {
  _onAuthExpired = cb;
}

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("auth_token");
      await AsyncStorage.removeItem("remember_me_email");
      _onAuthExpired?.();
    }
    return Promise.reject(error);
  },
);

const getAuthToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("auth_token");
};

const setAuthToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem("auth_token", token);
};

const clearAuthToken = async (): Promise<void> => {
  await AsyncStorage.removeItem("auth_token");
};

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  bio?: string;
  location?: string;
  language: string;
  subscription: string;
  subscriptionExpiry?: string;
  credits: number;
  familyId?: string;
  isAdmin: boolean;
  stats: UserStats;
}

export interface UserStats {
  phrasesLearned: number;
  practiceStreak: number;
  totalTimeMinutes: number;
  lastActiveDate: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Context {
  id: string;
  name: string;
  icon: string;
  emoji: string;
  sceneCount: number;
}

export interface Phrase {
  id: string;
  en: string;
  vi: string;
  level: string;
  contextLabel: string;
}

export interface SavedPhrase {
  id: string;
  phraseId: string;
  en: string;
  vi: string;
  level: string;
  contextLabel: string;
  savedAt: string;
}

// Auth API
export const authApi = {
  register: async (
    email: string,
    password: string,
    name: string,
  ): Promise<AuthResponse> => {
    const res = await api.post("/api/auth/register", { email, password, name });
    await setAuthToken(res.data.token);
    return res.data;
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await api.post("/api/auth/login", { email, password });
    await setAuthToken(res.data.token);
    return res.data;
  },

  logout: async (): Promise<void> => {
    await clearAuthToken();
  },

  getCurrentUser: async (): Promise<User> => {
    const res = await api.get("/api/auth/me");
    return res.data;
  },
};

// User API
export const userApi = {
  updateStats: async (data: {
    PhrasesLearned?: number;
    PracticeStreak?: number;
    TotalTimeMinutes?: number;
  }): Promise<UserStats> => {
    const res = await api.put("/api/user/stats", data);
    return res.data;
  },

  updateProfile: async (data: {
    name?: string;
    avatar?: string;
    phone?: string;
    bio?: string;
    location?: string;
    language?: string;
  }): Promise<User> => {
    const res = await api.put("/api/user/profile", data);
    return res.data;
  },

  addCredits: async (amount: number): Promise<void> => {
    await api.post("/api/user/credits/add", amount);
  },

  deductCredits: async (amount: number): Promise<void> => {
    await api.post("/api/user/credits/deduct", amount);
  },
};

// Phrase API
export const phraseApi = {
  getContexts: async (): Promise<Context[]> => {
    const res = await api.get("/api/phrase/contexts");
    return res.data;
  },

  getPhrasesByContext: async (contextId: string): Promise<Phrase[]> => {
    const res = await api.get(`/api/phrase/context/${contextId}`);
    return res.data;
  },

  getSavedPhrases: async (): Promise<SavedPhrase[]> => {
    const res = await api.get("/api/phrase/saved");
    return res.data;
  },

  savePhrase: async (
    phrase: Omit<SavedPhrase, "id" | "savedAt">,
  ): Promise<SavedPhrase> => {
    const res = await api.post("/api/phrase/save", phrase);
    return res.data;
  },

  unsavePhrase: async (phraseId: string): Promise<void> => {
    await api.delete(`/api/phrase/unsave/${phraseId}`);
  },
};

export { getAuthToken, setAuthToken, clearAuthToken };
