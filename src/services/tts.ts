/**
 * TTS Service Client
 *
 * Unified client for TTS API calls
 * Supports both streaming and file-based synthesis
 */

import {
  TTSSynthesizeRequest,
  TTSSynthesizeResponse,
  VoiceInfo,
  SPEED_TO_RATE,
  VoiceSpeed,
} from "../types/voice";

const TTS_URL = process.env.EXPO_PUBLIC_TTS_URL || "http://localhost:8001";
const TTS_API_KEY =
  process.env.EXPO_PUBLIC_TTS_API_KEY || "tts_service_secret_key";

class TTSServiceClient {
  private baseUrl: string;
  private apiKey: string;
  private audioCache: Map<string, ArrayBuffer> = new Map();

  constructor(baseUrl: string = TTS_URL, apiKey: string = TTS_API_KEY) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
   * Synthesize text to speech (returns audio file URL)
   */
  async synthesize(
    text: string,
    voice: string,
    speed: VoiceSpeed = 1.0,
    pitch: string = "+0Hz",
  ): Promise<TTSSynthesizeResponse> {
    const request: TTSSynthesizeRequest = {
      text,
      voice,
      rate: SPEED_TO_RATE[speed],
      pitch,
      volume: "+0%",
    };

    const response = await fetch(`${this.baseUrl}/api/v1/tts/synthesize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`TTS synthesis failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Stream audio directly (for real-time playback)
   */
  async streamAudio(
    text: string,
    voice: string,
    speed: VoiceSpeed = 1.0,
  ): Promise<ReadableStream<Uint8Array>> {
    const request: TTSSynthesizeRequest = {
      text,
      voice,
      rate: SPEED_TO_RATE[speed],
    };

    const response = await fetch(`${this.baseUrl}/api/v1/tts/stream`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.apiKey,
      },
      body: JSON.stringify(request),
    });

    if (!response.ok || !response.body) {
      throw new Error(`TTS streaming failed: ${response.statusText}`);
    }

    return response.body;
  }

  /**
   * Get available voices
   */
  async getVoices(language?: string): Promise<VoiceInfo[]> {
    const url = new URL(`${this.baseUrl}/api/v1/tts/voices`);
    if (language) {
      url.searchParams.append("language", language);
    }

    const response = await fetch(url.toString(), {
      headers: {
        "X-API-Key": this.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch voices: ${response.statusText}`);
    }

    const data = await response.json();
    return data.voices;
  }

  /**
   * Get recommended voices for a locale
   */
  async getRecommendedVoices(language: string): Promise<string[]> {
    const url = new URL(`${this.baseUrl}/api/v1/tts/voices/recommended`);
    url.searchParams.append("language", language);

    const response = await fetch(url.toString(), {
      headers: {
        "X-API-Key": this.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch recommended voices: ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data.voices;
  }

  /**
   * Download audio file by ID
   */
  async downloadAudio(audioId: string): Promise<ArrayBuffer> {
    // Check cache first
    if (this.audioCache.has(audioId)) {
      return this.audioCache.get(audioId)!;
    }

    const response = await fetch(
      `${this.baseUrl}/api/v1/tts/audio/${audioId}`,
      {
        headers: {
          "X-API-Key": this.apiKey,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to download audio: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    this.audioCache.set(audioId, buffer);
    return buffer;
  }

  /**
   * Clear audio cache
   */
  clearCache(): void {
    this.audioCache.clear();
  }

  /**
   * Get base URL for building audio URLs
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const ttsClient = new TTSServiceClient();

// Export class for custom instances
export { TTSServiceClient };
