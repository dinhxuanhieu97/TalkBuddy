/**
 * Voice Settings Hook
 *
 * React hook for managing voice settings with:
 * - AsyncStorage persistence
 * - Debounced backend sync
 * - Cross-platform consistency
 */

import { useState, useEffect, useRef, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  VoiceSettings,
  SupportedLocale,
  DEFAULT_VOICE_SETTINGS,
  ACCENT_VOICE_MAP,
  VOICE_SETTINGS_STORAGE,
  VoiceAccent,
  VoiceGender,
  VoiceSpeed,
  VoiceSpeedLabel,
} from "../types/voice";

// Speed options
const SPEED_OPTIONS: { value: VoiceSpeed; label: VoiceSpeedLabel }[] = [
  { value: 0.75, label: "Slow" },
  { value: 1.0, label: "Normal" },
  { value: 1.25, label: "Natural" },
];

interface UseVoiceSettingsReturn {
  settings: VoiceSettings;
  isLoading: boolean;
  error: string | null;

  // Actions
  setAccent: (accent: VoiceAccent) => void;
  setSpeed: (speed: VoiceSpeed) => void;
  setGender: (gender: VoiceGender) => void;
  resetToDefaults: () => void;

  // Helpers
  getCurrentVoiceId: () => string;
  validateSettings: () => boolean;
}

/**
 * Hook for managing voice settings
 */
export function useVoiceSettings(
  locale: SupportedLocale = "en-US",
): UseVoiceSettingsReturn {
  const [settings, setSettings] = useState<VoiceSettings>(
    DEFAULT_VOICE_SETTINGS[locale],
  );

  // Load from AsyncStorage on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem(
          VOICE_SETTINGS_STORAGE.localStorageKey,
        );
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.accent && parsed.speed && parsed.gender) {
            setSettings({ ...DEFAULT_VOICE_SETTINGS[locale], ...parsed });
          }
        }
      } catch (error) {
        console.error("Failed to load voice settings:", error);
      }
    };
    loadSettings();
  }, [locale]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const syncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Save to AsyncStorage when settings change
  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem(
          VOICE_SETTINGS_STORAGE.localStorageKey,
          JSON.stringify(settings),
        );
      } catch (error) {
        console.error("Failed to save voice settings:", error);
      }
    };
    saveSettings();
  }, [settings]);

  // Debounced sync to backend
  useEffect(() => {
    // Clear existing timeout
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    // Set new timeout for backend sync
    syncTimeoutRef.current = setTimeout(async () => {
      try {
        await syncToBackend(settings);
      } catch (err) {
        console.error("Failed to sync voice settings:", err);
        // Don't show error to user, localStorage is primary
      }
    }, VOICE_SETTINGS_STORAGE.syncDebounceMs);

    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, [settings]);

  /**
   * Sync settings to backend
   */
  const syncToBackend = async (voiceSettings: VoiceSettings): Promise<void> => {
    // Use hardcoded fallback for React Native compatibility
    const apiUrl = process.env.VITE_API_URL || "http://192.168.1.47:3001";
    const token = await AsyncStorage.getItem("auth_token");

    if (!token) return;

    const response = await fetch(`${apiUrl}/api/user/voice-settings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(voiceSettings),
    });

    if (!response.ok) {
      throw new Error("Failed to sync voice settings");
    }
  };

  /**
   * Update accent and auto-select appropriate voice
   */
  const setAccent = useCallback((accent: VoiceAccent) => {
    setSettings((prev) => {
      const voiceId = ACCENT_VOICE_MAP[accent][prev.gender];
      return {
        ...prev,
        accent,
        selectedVoiceId: voiceId,
      };
    });
  }, []);

  /**
   * Update speed
   */
  const setSpeed = useCallback((speed: VoiceSpeed) => {
    const speedLabel =
      SPEED_OPTIONS.find((s) => s.value === speed)?.label || "Normal";
    setSettings((prev) => ({
      ...prev,
      speed,
      speedLabel,
    }));
  }, []);

  /**
   * Update gender and auto-select appropriate voice
   */
  const setGender = useCallback((gender: VoiceGender) => {
    setSettings((prev) => {
      const voiceId = ACCENT_VOICE_MAP[prev.accent][gender];
      return {
        ...prev,
        gender,
        selectedVoiceId: voiceId,
      };
    });
  }, []);

  /**
   * Reset to defaults for current locale
   */
  const resetToDefaults = useCallback(() => {
    setSettings(DEFAULT_VOICE_SETTINGS[locale]);
  }, [locale]);

  /**
   * Get current voice ID based on settings
   */
  const getCurrentVoiceId = useCallback((): string => {
    // For English, use accent + gender mapping
    if (locale.startsWith("en")) {
      return ACCENT_VOICE_MAP[settings.accent][settings.gender];
    }
    // For other languages, use default from settings
    return settings.selectedVoiceId;
  }, [settings, locale]);

  /**
   * Validate current settings
   */
  const validateSettings = useCallback((): boolean => {
    return !!(
      settings.accent &&
      settings.speed &&
      settings.gender &&
      settings.selectedVoiceId
    );
  }, [settings]);

  return {
    settings,
    isLoading,
    error,
    setAccent,
    setSpeed,
    setGender,
    resetToDefaults,
    getCurrentVoiceId,
    validateSettings,
  };
}

/**
 * Helper to get preview text by locale
 */
export function getPreviewText(locale: SupportedLocale): string {
  const previewTexts: Record<SupportedLocale, string> = {
    "vi-VN": "Xin chào, tôi là trợ lý học ngôn ngữ của bạn.",
    "en-US": "Hello, I am your language learning assistant.",
    "zh-CN": "你好，我是你的语言学习助手。",
    "zh-TW": "你好，我是你的語言學習助手。",
    "zh-HK": "你好，我係你嘅語言學習助手。",
  };
  return previewTexts[locale];
}

/**
 * Speed options for UI
 */
export { SPEED_OPTIONS };
