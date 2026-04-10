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
