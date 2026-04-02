import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.talkbuddy.app",
  appName: "TalkBuddy",
  webDir: "dist",
  server: {
    androidScheme: "https",
    // Live reload: point WebView to Vite dev server
    url: "http://192.168.1.47:5173",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFD600",
      showSpinner: false,
    },
  },
};

export default config;
