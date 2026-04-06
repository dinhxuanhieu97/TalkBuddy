import { defineConfig, loadEnv } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// Packages that contain JSX in .js files and need Babel transformation
const jsxNodeModules = [
  "@expo/vector-icons",
  "react-native-vector-icons",
  "expo-router",
  "expo-linear-gradient",
  "expo-av",
  "expo-asset",
  "expo-constants",
  "expo-font",
  "expo-modules-core",
  "expo-status-bar",
  "expo-splash-screen",
  "react-native-safe-area-context",
  "react-native-screens",
  "react-native-gesture-handler",
  "react-native-reanimated",
  "@react-navigation",
];

const jsxIncludeRegex = new RegExp(
  `node_modules/(${jsxNodeModules.map((p) => p.replace("/", "\\/")).join("|")})/.*\\.js$`,
);

export default defineConfig(({ mode }) => {
  // Load .env variables properly (Vite doesn't put them in process.env by default)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react({
        include: [/\.[jt]sx?$/, jsxIncludeRegex],
      }),
      tailwindcss(),
    ],
    define: {
      "process.env": JSON.stringify({
        NODE_ENV: "development",
        EXPO_OS: "web",
        VITE_API_URL: env.VITE_API_URL || "http://localhost:5277",
        VITE_SUPABASE_URL: env.VITE_SUPABASE_URL || "",
        VITE_SUPABASE_ANON_KEY: env.VITE_SUPABASE_ANON_KEY || "",
        VITE_GOOGLE_IOS_CLIENT_ID: env.VITE_GOOGLE_IOS_CLIENT_ID || "",
        VITE_GOOGLE_ANDROID_CLIENT_ID: env.VITE_GOOGLE_ANDROID_CLIENT_ID || "",
      }),
      global: "globalThis",
      __DEV__: JSON.stringify(true),
      __BUNDLE_START_TIME__: JSON.stringify(Date.now()),
      "window.__EXPO_ROUTER_HYDRATE__": JSON.stringify(true),
    },
    server: {
      host: true,
      port: 5173,
      hmr: {
        overlay: false,
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "react-native": "react-native-web",
      },
      extensions: [
        ".web.tsx",
        ".web.ts",
        ".web.jsx",
        ".web.js",
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
      ],
    },
    assetsInclude: ["**/*.svg", "**/*.csv"],
    optimizeDeps: {
      include: [
        "expo-modules-core",
        "lucide-react",
        "@expo/vector-icons",
        "expo-router",
        "expo-linear-gradient",
        "expo-status-bar",
        "react-native-safe-area-context",
      ],
      rolldownOptions: {
        moduleTypes: {
          ".js": "jsx",
        },
        resolve: {
          extensions: [
            ".web.js",
            ".web.ts",
            ".web.tsx",
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
          ],
        },
      },
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        moduleTypes: {
          ".js": "jsx",
        },
        external: ["expo-modules-core"],
      },
    },
  };
});
