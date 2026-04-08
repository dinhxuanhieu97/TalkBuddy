/**
 * Voice Settings Types
 * 
 * Shared types for Voice Settings feature across Web and Mobile
 * Based on Voice_Content_Technology_Stack.md specification
 */

export type VoiceAccent = 'US' | 'UK' | 'AU';
export type VoiceGender = 'Male' | 'Female';
export type VoiceSpeed = 0.75 | 1.0 | 1.25;
export type VoiceSpeedLabel = 'Slow' | 'Normal' | 'Natural';
export type VoiceSource = 'preset' | 'cloned' | 'community';

/**
 * Core Voice Settings interface
 * Matches both Web and Mobile implementations
 */
export interface VoiceSettings {
  accent: VoiceAccent;
  speed: VoiceSpeed;
  speedLabel: VoiceSpeedLabel;
  gender: VoiceGender;
  voiceSource: VoiceSource;
  selectedVoiceId: string;
}

/**
 * Cloned voice information
 */
export interface ClonedVoice {
  id: string;
  name: string;
  status: 'processing' | 'ready' | 'error';
  previewUrl?: string;
  createdAt: string;
  usageCount: number;
  lastUsedAt?: string;
}

/**
 * Extended settings with cloned voices library
 */
export interface VoiceSettingsV2 extends VoiceSettings {
  myClonedVoices?: ClonedVoice[];
  defaultVoiceForAI?: string;
}

/**
 * User voice profile stored in backend
 */
export interface UserVoiceProfile {
  userId: string;
  settings: VoiceSettings;
  lastUsedVoice: string;
  clonedVoices?: ClonedVoice[];
}

/**
 * Voice preset mapping by locale
 */
export type SupportedLocale = 'vi-VN' | 'en-US' | 'zh-CN' | 'zh-TW' | 'zh-HK';

/**
 * Default settings for each locale
 */
export const DEFAULT_VOICE_SETTINGS: Record<SupportedLocale, VoiceSettings> = {
  'vi-VN': {
    accent: 'US',
    speed: 1.0,
    speedLabel: 'Normal',
    gender: 'Female',
    voiceSource: 'preset',
    selectedVoiceId: 'vi-VN-HoaiMyNeural'
  },
  'en-US': {
    accent: 'US',
    speed: 1.0,
    speedLabel: 'Normal',
    gender: 'Female',
    voiceSource: 'preset',
    selectedVoiceId: 'en-US-AvaNeural'
  },
  'zh-CN': {
    accent: 'US',
    speed: 1.0,
    speedLabel: 'Normal',
    gender: 'Female',
    voiceSource: 'preset',
    selectedVoiceId: 'zh-CN-XiaoxiaoNeural'
  },
  'zh-TW': {
    accent: 'US',
    speed: 1.0,
    speedLabel: 'Normal',
    gender: 'Female',
    voiceSource: 'preset',
    selectedVoiceId: 'zh-TW-HsiaoChenNeural'
  },
  'zh-HK': {
    accent: 'US',
    speed: 1.0,
    speedLabel: 'Normal',
    gender: 'Female',
    voiceSource: 'preset',
    selectedVoiceId: 'zh-HK-HiuGaaiNeural'
  }
};

/**
 * Speed mapping to Edge TTS rate parameter
 */
export const SPEED_TO_RATE: Record<VoiceSpeed, string> = {
  0.75: '-25%',   // Slow
  1.0: '+0%',     // Normal
  1.25: '+15%'    // Natural (slightly faster for engagement)
};

/**
 * Accent to voice ID mapping for English
 */
export const ACCENT_VOICE_MAP: Record<VoiceAccent, Record<VoiceGender, string>> = {
  'US': {
    'Female': 'en-US-AvaNeural',
    'Male': 'en-US-AndrewNeural'
  },
  'UK': {
    'Female': 'en-GB-LibbyNeural',
    'Male': 'en-GB-RyanNeural'
  },
  'AU': {
    'Female': 'en-AU-NatashaNeural',
    'Male': 'en-AU-WilliamNeural'
  }
};

/**
 * Voice metadata from TTS service
 */
export interface VoiceInfo {
  id: string;
  name: string;
  gender: string;
  locale: string;
  contentCategories: string[];
  voicePersonalities: string[];
}

/**
 * TTS Synthesize request
 */
export interface TTSSynthesizeRequest {
  text: string;
  voice: string;
  rate?: string;
  pitch?: string;
  volume?: string;
}

/**
 * TTS Synthesize response
 */
export interface TTSSynthesizeResponse {
  audio_url: string;
  audio_id: string;
  duration_ms: number;
  voice: string;
}

/**
 * Voice settings UI props
 */
export interface VoiceSettingsPanelProps {
  settings: VoiceSettings;
  locale: SupportedLocale;
  onSettingsChange: (settings: VoiceSettings) => void;
  onPreview: () => void;
  isLoading?: boolean;
}

/**
 * Storage configuration
 */
export const VOICE_SETTINGS_STORAGE = {
  localStorageKey: 'talkbuddy_voice_settings',
  syncDebounceMs: 500
};
