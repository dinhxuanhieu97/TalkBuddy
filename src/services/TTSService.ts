/**
 * TTS Service for Mobile App
 * Primary: Backend API (Google Cloud TTS) → Expo AV playback
 * Fallback: expo-speech (device built-in)
 */

import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type VoiceAccent = "en-US" | "en-GB" | "en-AU";
export type SpeechSpeed = "slow" | "normal" | "fast";

const API_URL = "http://localhost:5277/api";
const TTS_CACHE_PREFIX = "talkbuddy_tts_";

const SPEED_RATE_MAP: Record<SpeechSpeed, number> = {
  slow: 0.5,
  normal: 0.9,
  fast: 1.2,
};

let currentSound: Audio.Sound | null = null;

/** Get JWT token from storage */
async function getToken(): Promise<string | null> {
  return await AsyncStorage.getItem("auth_token");
}

/** Cache key for audio */
function cacheKey(text: string, accent: string, speed: string): string {
  return `${TTS_CACHE_PREFIX}${accent}_${speed}_${text.slice(0, 80)}`;
}

/** Get cached audio base64 */
async function getCachedAudio(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

/** Save audio base64 to cache */
async function cacheAudio(key: string, base64: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, base64);
  } catch {
    // Ignore cache errors
  }
}

/** Play base64 audio using Expo AV - returns Promise that resolves when done */
async function playBase64Audio(base64: string, format: string): Promise<void> {
  // Stop any currently playing audio
  if (currentSound) {
    try {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    } catch {}
    currentSound = null;
  }

  const uri = `data:audio/${format};base64,${base64}`;

  const { sound } = await Audio.Sound.createAsync(
    { uri },
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
 * Speak text - tries backend Google Cloud TTS first, falls back to expo-speech
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
    // L1: Check cache
    const key = cacheKey(text, accent, speed);
    const cached = await getCachedAudio(key);

    if (cached) {
      await playBase64Audio(cached, "mp3");
      onDone?.();
      return;
    }

    // L2: Call backend TTS API
    const token = await getToken();
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(`${API_URL}/tts/speak`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text, accent, speed }),
    });

    if (!res.ok) throw new Error(`TTS API error: ${res.status}`);

    const data = await res.json();
    if (!data.success || !data.data?.audio)
      throw new Error("Invalid TTS response");

    // Cache for reuse
    cacheAudio(key, data.data.audio);

    await playBase64Audio(data.data.audio, data.data.format ?? "mp3");
    onDone?.();
  } catch (err) {
    console.warn("[TTS] Backend failed, falling back to expo-speech:", err);
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
