import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

/**
 * Root Layout Component
 *
 * This is the top-level layout that wraps the entire app.
 *
 * Key Features:
 * 1. LinearGradient as the outermost layer - covers entire screen including notch and home indicator
 * 2. SafeAreaProvider - manages safe area insets for all child components
 * 3. StatusBar - configured as translucent with light content
 */
export default function RootLayout() {
  return (
    <LinearGradient
      // Light gradient from white to yellow - TalkBuddy brand colors
      colors={["#f9f9f9", "#ffd200"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      {/* 
        StatusBar Configuration:
        - translucent: allows content to draw behind status bar
        - barStyle: "dark-content" for dark text/icons on light gradient
        - backgroundColor: transparent to show gradient through
      */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* 
        SafeAreaProvider: 
        Provides safe area insets to all child components via useSafeAreaInsets hook.
        This ensures content respects notch, status bar, and home indicator areas.
      */}
      <SafeAreaProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
            animation: "fade",
          }}
        >
          {/* Index screen - handles onboarding/login flow */}
          <Stack.Screen name="index" />

          {/* Auth screens */}
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
          <Stack.Screen name="forgot-password" />

          {/* Main app with tabs */}
          <Stack.Screen name="(tabs)" />

          {/* Other screens */}
          <Stack.Screen name="sync-test" />
        </Stack>
      </SafeAreaProvider>
    </LinearGradient>
  );
}
