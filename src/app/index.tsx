import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Onboarding from "./components/Onboarding";
import Login from "./login";
import Register from "./register";
import ForgotPassword from "./forgot-password";
import VerifyOtp from "./verify-otp";
import ResetPassword from "./reset-password";
import ResetPasswordSuccess from "./reset-password-success";
import MainApp from "./components/MainApp";
import { configureAudio } from "../services/TTSService";
import { useLocaleStore } from "../lib/i18n";
import { AuthService } from "../services";
import { useUserStore } from "../stores/userStore";
import { setOnAuthExpired } from "../services/api";
import googleService from "@/services/googleSignIn";

type AppStep =
  | "loading"
  | "onboarding"
  | "login"
  | "register"
  | "forgotPassword"
  | "verifyOtp"
  | "resetPassword"
  | "resetPasswordSuccess"
  | "mainApp";

export default function Index() {
  const [step, setStep] = useState<AppStep>("loading");
  const [resetEmail, setResetEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const setLocale = useLocaleStore((s) => s.setLocale);
  const setUser = useUserStore((s) => s.setUser);
  const resetUser = useUserStore((s) => s.reset);

  // Register global 401 handler — redirect to login on token expiry
  useEffect(() => {
    setOnAuthExpired(() => {
      resetUser();
      setStep("login");
      googleService.configure();
    });
  }, []);

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

      const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");

      if (!hasSeenOnboarding) {
        setStep("onboarding");
        return;
      }

      // Auto-login: check if token is still valid
      const tokenValid = await AuthService.isTokenValid();
      if (tokenValid) {
        try {
          const user = await AuthService.getCurrentUser();
          if (user) {
            setUser({
              id: user.id,
              email: user.email,
              name: user.name,
              avatar: user.image,
              token: user.token,
            });
            setStep("mainApp");
            return;
          }
        } catch (_) {
          // Token invalid on server side, fall through to login
        }
      }

      setStep("login");
    } catch (error) {
      console.log("Error initializing app:", error);
      setStep("login");
    }
  };

  const handleOnboardingDone = () => {
    setStep("login");
  };

  const handleAuthSuccess = () => {
    setStep("mainApp");
  };

  const handleLogout = () => {
    resetUser();
    setStep("login");
  };

  const handleResetOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("hasSeenOnboarding");
    } catch (_) {}
    setStep("onboarding");
  };

  if (step === "loading") {
    return <View style={{ flex: 1, backgroundColor: "#FFD600" }} />;
  }

  if (step === "onboarding") {
    return <Onboarding onDone={handleOnboardingDone} />;
  }

  if (step === "register") {
    return (
      <Register
        onAuthSuccess={handleAuthSuccess}
        onGoToLogin={() => setStep("login")}
      />
    );
  }

  if (step === "forgotPassword") {
    return (
      <ForgotPassword
        onGoToLogin={() => setStep("login")}
        onGoToVerifyOtp={(email) => {
          setResetEmail(email);
          setStep("verifyOtp");
        }}
        onBack={() => setStep("login")}
      />
    );
  }

  if (step === "verifyOtp") {
    return (
      <VerifyOtp
        email={resetEmail}
        onGoToResetPassword={(email, token) => {
          setResetEmail(email);
          setResetToken(token);
          setStep("resetPassword");
        }}
        onGoBack={() => setStep("forgotPassword")}
        onGoToLogin={() => setStep("login")}
      />
    );
  }

  if (step === "resetPassword") {
    return (
      <ResetPassword
        email={resetEmail}
        resetToken={resetToken}
        onGoToSuccess={() => setStep("resetPasswordSuccess")}
        onGoBack={() => setStep("verifyOtp")}
      />
    );
  }

  if (step === "resetPasswordSuccess") {
    return (
      <ResetPasswordSuccess
        onGoToLogin={() => {
          setResetEmail("");
          setResetToken("");
          setStep("login");
        }}
      />
    );
  }

  if (step === "mainApp") {
    return (
      <MainApp
        onLogout={handleLogout}
        onResetOnboarding={handleResetOnboarding}
      />
    );
  }

  return (
    <Login
      onAuthSuccess={handleAuthSuccess}
      onGoToRegister={() => setStep("register")}
      onGoToForgotPassword={() => setStep("forgotPassword")}
    />
  );
}
