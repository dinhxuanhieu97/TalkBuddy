import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://localhost:5277/api";

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
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Registration failed");
    }
    const data = await res.json();
    await setAuthToken(data.token);
    return data;
  },

  login: async (email: string, password: string): Promise<AuthResponse> => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Login failed");
    }
    const data = await res.json();
    await setAuthToken(data.token);
    return data;
  },

  logout: async (): Promise<void> => {
    await clearAuthToken();
  },

  getCurrentUser: async (): Promise<User> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to get user");
    return await res.json();
  },
};

// User API
export const userApi = {
  updateStats: async (data: {
    PhrasesLearned?: number;
    PracticeStreak?: number;
    TotalTimeMinutes?: number;
  }): Promise<UserStats> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/user/stats`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update stats");
    return await res.json();
  },

  updateProfile: async (data: {
    name?: string;
    avatar?: string;
    phone?: string;
    bio?: string;
    location?: string;
    language?: string;
  }): Promise<User> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to update profile");
    return await res.json();
  },

  addCredits: async (amount: number): Promise<void> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/user/credits/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(amount),
    });
    if (!res.ok) throw new Error("Failed to add credits");
  },

  deductCredits: async (amount: number): Promise<void> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/user/credits/deduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(amount),
    });
    if (!res.ok) throw new Error("Failed to deduct credits");
  },
};

// Phrase API
export const phraseApi = {
  getContexts: async (): Promise<Context[]> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/phrase/contexts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to get contexts");
    return await res.json();
  },

  getPhrasesByContext: async (contextId: string): Promise<Phrase[]> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/phrase/context/${contextId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to get phrases");
    return await res.json();
  },

  getSavedPhrases: async (): Promise<SavedPhrase[]> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/phrase/saved`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to get saved phrases");
    return await res.json();
  },

  savePhrase: async (
    phrase: Omit<SavedPhrase, "id" | "savedAt">,
  ): Promise<SavedPhrase> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/phrase/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(phrase),
    });
    if (!res.ok) throw new Error("Failed to save phrase");
    return await res.json();
  },

  unsavePhrase: async (phraseId: string): Promise<void> => {
    const token = await getAuthToken();
    const res = await fetch(`${API_URL}/phrase/unsave/${phraseId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to unsave phrase");
  },
};

export { getAuthToken, setAuthToken, clearAuthToken };
