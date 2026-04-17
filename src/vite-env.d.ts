/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_WEB_API_URL: string;
  readonly VITE_WEB_API_KEY: string;
  readonly VITE_ENABLE_AI_CHAT: string;
  readonly VITE_ENABLE_PRACTICE_MODE: string;
  readonly VITE_ANALYTICS_ID: string;
  readonly VITE_REVENUECAT_IOS_KEY: string;
  readonly VITE_REVENUECAT_ANDROID_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ProcessEnv {
  readonly EXPO_PUBLIC_API_URL: string;
  readonly EXPO_PUBLIC_WEB_API_URL: string;
  readonly EXPO_PUBLIC_WEB_API_KEY: string;
  readonly EXPO_PUBLIC_DEBUG: string;
  readonly EXPO_PUBLIC_TTS_URL: string;
  readonly EXPO_PUBLIC_TTS_API_KEY: string;
  readonly EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: string;
  readonly EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID: string;
  readonly EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: string;
  readonly EXPO_PUBLIC_DEFAULT_VOICE_SPEED: string;
  readonly EXPO_PUBLIC_DEFAULT_VOICE_GENDER: string;
  readonly EXPO_PUBLIC_DEFAULT_VOICE_ACCENT: string;
  readonly EXPO_PUBLIC_ENABLE_AI_CHAT: string;
  readonly EXPO_PUBLIC_ENABLE_PRACTICE_MODE: string;
  readonly EXPO_PUBLIC_ENABLE_TTS: string;
  readonly EXPO_PUBLIC_ENABLE_VOICE_CLONING: string;
  readonly EXPO_PUBLIC_ANALYTICS_ID: string;
  readonly EXPO_PUBLIC_REVENUECAT_IOS_KEY: string;
  readonly EXPO_PUBLIC_REVENUECAT_ANDROID_KEY: string;
}
