import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthService } from "../services";
import { useT } from "../lib/i18n";

export default function Login() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const t = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t("common.error"), t("auth.error.fillAllFields"));
      return;
    }

    setIsLoading(true);
    try {
      const user = await AuthService.signInWithEmail(email, password);

      if (user) {
        router.replace("/(tabs)");
      } else {
        Alert.alert(t("common.error"), t("auth.error.invalidCredentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(t("common.error"), t("auth.error.loginFailed"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await AuthService.signInWithGoogle();

      if (user) {
        router.replace("/(tabs)");
      } else {
        Alert.alert(t("common.error"), t("auth.error.loginFailed"));
      }
    } catch (error) {
      console.error("Google login error:", error);
      Alert.alert(t("common.error"), t("auth.error.googleLoginFailed"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleLogin = () => {
    console.log("Apple Login");
    Alert.alert(t("common.comingSoon"), t("auth.comingSoon.appleLogin"));
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 20 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{t("auth.welcomeBack")}</Text>
          <Text style={styles.subtitle}>{t("auth.signInSubtitle")}</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t("auth.email")}</Text>
            <TextInput
              style={styles.input}
              placeholder={t("auth.emailPlaceholder")}
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t("auth.password")}</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder={t("auth.passwordPlaceholder")}
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                editable={!isLoading}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeButton}
                disabled={isLoading}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
            <Text style={styles.forgotText}>
              {t("auth.forgotPasswordQuestion")}
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            style={[styles.loginButton, isLoading && styles.disabledButton]}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? t("auth.signingIn") : t("auth.signIn")}
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{t("auth.orContinueWith")}</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialContainer}>
            {/* Google */}
            <TouchableOpacity
              onPress={handleGoogleLogin}
              style={[styles.socialButton, isLoading && styles.disabledButton]}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              <Text style={styles.socialIcon}>G</Text>
              <Text style={styles.socialText}>{t("auth.google")}</Text>
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity
              onPress={handleAppleLogin}
              style={[styles.socialButton, isLoading && styles.disabledButton]}
              activeOpacity={0.8}
              disabled={isLoading}
            >
              <Ionicons name="logo-apple" size={20} color="#1c1c1e" />
              <Text style={styles.socialText}>{t("auth.apple")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t("auth.noAccountQuestion")} </Text>
          <TouchableOpacity
            onPress={() => router.push("/register")}
            disabled={isLoading}
          >
            <Text style={styles.signUpText}>{t("auth.signUp")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  header: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#1c1c1e",
    opacity: 0.7,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1c1c1e",
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1c1c1e",
  },
  eyeButton: {
    padding: 16,
  },
  forgotText: {
    fontSize: 14,
    color: "#1c1c1e",
    fontWeight: "500",
    opacity: 0.7,
    textAlign: "right",
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(28,28,30,0.1)",
  },
  dividerText: {
    fontSize: 14,
    color: "#1c1c1e",
    opacity: 0.5,
    marginHorizontal: 16,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
    gap: 8,
  },
  socialIcon: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#1c1c1e",
    opacity: 0.6,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1c1c1e",
  },
});
