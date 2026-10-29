/**
 * TTS Service for Mobile App
 * Primary: Microsoft Edge TTS via talkbuddy_tts service
 * Fallback: expo-speech (device built-in)
 */

import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ttsClient } from "./tts";
import {
  VoiceSpeed,
  SPEED_TO_RATE,
  VOICE_SETTINGS_STORAGE,
  VoiceSettings,
  DEFAULT_VOICE_SETTINGS,
} from "../types/voice";

export type VoiceAccent = "en-US" | "en-GB" | "en-AU";
export type SpeechSpeed = "slow" | "normal" | "fast";

const TTS_CACHE_PREFIX = "talkbuddy_tts_url_";

// Map SpeechSpeed to VoiceSpeed
const SPEED_MAP: Record<SpeechSpeed, VoiceSpeed> = {
  slow: 0.75,
  normal: 1.0,
  fast: 1.25,
};

// Default voice IDs for each accent
const DEFAULT_VOICES: Record<VoiceAccent, string> = {
  "en-US": "en-US-AvaNeural",
  "en-GB": "en-GB-LibbyNeural",
  "en-AU": "en-AU-NatashaNeural",
};

const SPEED_RATE_MAP: Record<SpeechSpeed, number> = {
  slow: 0.5,
  normal: 1,
  fast: 1.25,
};

let currentSound: Audio.Sound | null = null;

/** Cache key for audio */
function cacheKey(text: string, accent: string, speed: string): string {
  return `${TTS_CACHE_PREFIX}${accent}_${speed}_${text.slice(0, 80)}`;
}

/** Load saved voice settings from AsyncStorage */
async function getSavedVoiceSettings(): Promise<VoiceSettings | null> {
  try {
    const saved = await AsyncStorage.getItem(
      VOICE_SETTINGS_STORAGE.localStorageKey,
    );
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.selectedVoiceId && parsed.speed) {
        return parsed as VoiceSettings;
      }
    }
  } catch (error) {
    console.warn("[TTS] Failed to load voice settings:", error);
  }
  return null;
}

/** Get cached audio URL */
async function getCachedAudioUrl(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Save audio URL to cache */
async function cacheAudioUrl(key: string, url: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, url);
  } catch {
    // Ignore cache errors
  }
}

/** Play audio from URL using Expo AV - returns Promise that resolves when done */
async function playAudioFromUrl(url: string): Promise<void> {
  // Stop any currently playing audio
  if (currentSound) {
    try {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    } catch {}
    currentSound = null;
  }

  const { sound } = await Audio.Sound.createAsync(
    { uri: url },
    { shouldPlay: true },
  );

  currentSound = sound;

  return new Promise((resolve) => {
    sound.setOnPlaybackStatusUpdate((status) => {
      if (!status.isLoaded) return;
      if (status.didJustFinish) {
        sound.unloadAsync().catch(() => {});
        currentSound = null;
        resolve();
      }
    });

    // Safety timeout: max 30s
    setTimeout(() => {
      sound.unloadAsync().catch(() => {});
      currentSound = null;
      resolve();
    }, 30_000);
  });
}

/** Fallback: expo-speech (device built-in TTS) */
async function speakFallback(
  text: string,
  accent: VoiceAccent,
  speed: SpeechSpeed,
): Promise<void> {
  return new Promise((resolve) => {
    Speech.stop();
    Speech.speak(text, {
      language: accent,
      rate: SPEED_RATE_MAP[speed],
      pitch: 1.0,
      onDone: () => resolve(),
      onError: () => resolve(),
    });
  });
}

/**
 * Speak text - uses Microsoft Edge TTS via talkbuddy_tts service
 */
export async function speak(
  text: string,
  options: {
    accent?: VoiceAccent;
    speed?: SpeechSpeed;
    onDone?: () => void;
    onError?: (error: Error) => void;
  } = {},
): Promise<void> {
  const { accent = "en-US", speed = "normal", onDone, onError } = options;

  try {
    // Load saved voice settings from AsyncStorage
    const savedSettings = await getSavedVoiceSettings();

    // Use saved settings or fallback to options/defaults
    const voiceId =
      savedSettings?.selectedVoiceId ||
      DEFAULT_VOICES[accent] ||
      DEFAULT_VOICES["en-US"];
    const voiceSpeed = savedSettings?.speed || SPEED_MAP[speed];

    // L1: Check cached URL
    const key = cacheKey(text, voiceId, String(voiceSpeed));
    const cachedUrl = await getCachedAudioUrl(key);

    if (cachedUrl) {
      await playAudioFromUrl(cachedUrl);
      onDone?.();
      return;
    }

    // L2: Use Microsoft Edge TTS via ttsClient
    const response = await ttsClient.synthesize(text, voiceId, voiceSpeed);

    // Build audio URL
    const audioUrl = `${ttsClient.getBaseUrl()}/api/v1/tts/audio/${response.audio_id}`;

    // Cache URL for reuse
    cacheAudioUrl(key, audioUrl);

    await playAudioFromUrl(audioUrl);
    onDone?.();
  } catch (err) {
    console.warn("[TTS] Edge TTS failed, falling back to expo-speech:", err);
    try {
      await speakFallback(text, accent, speed);
      onDone?.();
    } catch (fallbackErr) {
      const error = new Error("TTS failed");
      onError?.(error);
    }
  }
}

/**
 * Stop any ongoing speech
 */
export async function stopSpeaking(): Promise<void> {
  if (currentSound) {
    try {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    } catch {}
    currentSound = null;
  }
  Speech.stop();
}

/**
 * Check if speech is currently playing
 */
export async function isSpeaking(): Promise<boolean> {
  if (currentSound) {
    const status = await currentSound.getStatusAsync();
    return status.isLoaded && (status as any).isPlaying;
  }
  return await Speech.isSpeakingAsync();
}

/**
 * Configure audio session for playback
 */
export async function configureAudio(): Promise<void> {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  } catch (err) {
    console.warn("[TTS] Audio config failed:", err);
  }
}
