/**
 * Voice Preview Hook
 *
 * Hook for previewing voice settings with audio playback
 * Uses expo-av for React Native audio playback
 */

import { useState, useCallback, useRef } from "react";
import { Audio } from "expo-av";
import { ttsClient } from "../services/tts";
import { VoiceSettings, SupportedLocale, SPEED_TO_RATE } from "../types/voice";
import { getPreviewText } from "./useVoiceSettings";

interface UseVoicePreviewReturn {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  playPreview: (
    settings: VoiceSettings,
    locale: SupportedLocale,
  ) => Promise<void>;
  stopPreview: () => void;
}

export function useVoicePreview(): UseVoicePreviewReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);

  /**
   * Play voice preview using expo-av
   */
  const playPreview = useCallback(
    async (settings: VoiceSettings, locale: SupportedLocale): Promise<void> => {
      // Stop any existing playback
      await stopPreviewAsync();

      setIsLoading(true);
      setError(null);

      try {
        // Set audio mode for playback
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
        });

        const text = getPreviewText(locale);
        const voice = settings.selectedVoiceId;

        // Use file-based synthesis (more reliable on mobile)
        const response = await ttsClient.synthesize(
          text,
          voice,
          settings.speed,
        );

        // Build the audio URL from the TTS service
        const audioUrl = `${ttsClient.getBaseUrl()}/api/v1/tts/audio/${response.audio_id}`;

        // Create and play sound using expo-av
        const { sound } = await Audio.Sound.createAsync(
          { uri: audioUrl },
          { shouldPlay: true },
          (status) => {
            if (status.isLoaded && status.didJustFinish) {
              setIsPlaying(false);
              sound.unloadAsync();
              soundRef.current = null;
            }
          },
        );

        soundRef.current = sound;
        setIsPlaying(true);
      } catch (err) {
        console.error("Voice preview error:", err);
        setError(err instanceof Error ? err.message : "Failed to play preview");
        setIsPlaying(false);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  /**
   * Stop preview playback (async)
   */
  const stopPreviewAsync = useCallback(async (): Promise<void> => {
    if (soundRef.current) {
      try {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
      } catch {
        // Ignore errors during cleanup
      }
      soundRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  /**
   * Stop preview playback (sync wrapper)
   */
  const stopPreview = useCallback((): void => {
    stopPreviewAsync();
  }, [stopPreviewAsync]);

  return {
    isPlaying,
    isLoading,
    error,
    playPreview,
    stopPreview,
  };
}
