import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.talkbuddy.app",
  appName: "TalkBuddy",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "http://192.168.1.89:5173",
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#FFD600",
      showSpinner: false,
    },
    GoogleSignIn: {
      scopes: ["profile", "email"],
      serverClientId:
        "108942595833-pgbud7gpkatf252ghm14mjej01jbkkh9.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
