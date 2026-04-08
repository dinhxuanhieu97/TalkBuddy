import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./components/Onboarding";
import Login from "./login";
import { LanguageSetupScreen } from "../components/LanguageSetupScreen";
import { configureAudio } from "../services/TTSService";
import { useLocaleStore } from "../lib/i18n";

type AppStep = "loading" | "onboarding" | "languageSetup" | "login";

export default function Index() {
  const [step, setStep] = useState<AppStep>("loading");
  const setLocale = useLocaleStore((s) => s.setLocale);

  useEffect(() => {
    configureAudio();
    initApp();
  }, []);

  const initApp = async () => {
    try {
      // Hydrate locale from AsyncStorage before anything renders
      const savedLocale = await AsyncStorage.getItem(
        "talkbuddy-locale-storage",
      );
      if (savedLocale) {
        try {
          const parsed = JSON.parse(savedLocale);
          if (parsed?.state?.locale) {
            setLocale(parsed.state.locale);
          }
        } catch (_) {}
      }

      const [hasSeenOnboarding, hasSetupLanguage] = await Promise.all([
        AsyncStorage.getItem("hasSeenOnboarding"),
        AsyncStorage.getItem("hasSetupLanguage"),
      ]);

      if (!hasSeenOnboarding) {
        setStep("onboarding");
      } else if (!hasSetupLanguage) {
        setStep("languageSetup");
      } else {
        setStep("login");
      }
    } catch (error) {
      console.log("Error initializing app:", error);
      setStep("login");
    }
  };

  const handleOnboardingDone = () => {
    setStep("languageSetup");
  };

  const handleLanguageSetupDone = async () => {
    try {
      await AsyncStorage.setItem("hasSetupLanguage", "true");
    } catch (_) {}
    setStep("login");
  };

  if (step === "loading") {
    return <View style={{ flex: 1, backgroundColor: "#FFD600" }} />;
  }

  if (step === "onboarding") {
    return <Onboarding onDone={handleOnboardingDone} />;
  }

  if (step === "languageSetup") {
    return (
      <LanguageSetupScreen mode="setup" onDone={handleLanguageSetupDone} />
    );
  }

  return <Login />;
}
