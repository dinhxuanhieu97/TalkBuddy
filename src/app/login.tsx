import { useState, useEffect } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthService } from "../services";
import { useT } from "../lib/i18n";
import { useUserStore } from "../stores/userStore";

interface LoginProps {
  onAuthSuccess?: () => void;
  onGoToRegister?: () => void;
  onGoToForgotPassword?: () => void;
}

interface LoginErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function Login({
  onAuthSuccess,
  onGoToRegister,
  onGoToForgotPassword,
}: LoginProps) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const setUser = useUserStore((state) => state.setUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});

  // Load saved email on mount (Remember Me)
  useEffect(() => {
    (async () => {
      const savedEmail = await AuthService.loadRememberEmail();
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    })();
  }, []);

  const validate = (): boolean => {
    const errs: LoginErrors = {};
    if (!email.trim()) errs.email = t("auth.error.fillAllFields");
    if (!password) errs.password = t("auth.error.fillAllFields");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setIsLoading(true);
    setErrors({});
    try {
      const user = await AuthService.signInWithEmail(
        email,
        password,
        rememberMe,
      );

      if (user) {
        setUser({
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.image,
          token: user.token,
        });
        onAuthSuccess?.();
      } else {
        setErrors({ general: t("auth.error.invalidCredentials") });
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        t("auth.error.loginFailed");
      setErrors({ general: message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await AuthService.signInWithGoogle();

      if (user) {
        setUser({
          id: user.id,
          email: user.email,
          name: user.name,
          avatar: user.image,
          token: user.token,
        });
        onAuthSuccess?.();
      } else {
        Alert.alert(t("common.error"), t("auth.error.loginFailed"));
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message || t("auth.error.googleLoginFailed");
      Alert.alert(t("common.error"), message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleLogin = async () => {
    setIsLoading(true);
    try {
      const user = await AuthService.signInWithApple();
      if (user) {
        setUser(user);
        onAuthSuccess?.();
      }
    } catch (error: any) {
      setErrors({ general: error.message || t("auth.error.loginFailed") });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    onGoToForgotPassword?.();
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
          {/* General Error Banner */}
          {errors.general ? (
            <View style={styles.errorBanner}>
              <Ionicons name="alert-circle" size={18} color="#d32f2f" />
              <Text style={styles.errorBannerText}>{errors.general}</Text>
            </View>
          ) : null}

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t("auth.email")}</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder={t("auth.emailPlaceholder")}
              placeholderTextColor="#999"
              value={email}
              onChangeText={(v) => {
                setEmail(v);
                if (errors.email)
                  setErrors((e) => ({ ...e, email: undefined }));
              }}
              onFocus={() => setErrors((e) => ({ ...e, email: undefined }))}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
            {errors.email ? (
              <Text style={styles.fieldError}>{errors.email}</Text>
            ) : null}
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{t("auth.password")}</Text>
            <View
              style={[
                styles.passwordContainer,
                errors.password && styles.inputError,
              ]}
            >
              <TextInput
                style={styles.passwordInput}
                placeholder={t("auth.passwordPlaceholder")}
                placeholderTextColor="#999"
                value={password}
                onChangeText={(v) => {
                  setPassword(v);
                  if (errors.password)
                    setErrors((e) => ({ ...e, password: undefined }));
                }}
                onFocus={() =>
                  setErrors((e) => ({ ...e, password: undefined }))
                }
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
            {errors.password ? (
              <Text style={styles.fieldError}>{errors.password}</Text>
            ) : null}
          </View>

          {/* Remember Me + Forgot Password Row */}
          <View style={styles.rememberForgotRow}>
            <TouchableOpacity
              style={styles.rememberMeRow}
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
              disabled={isLoading}
            >
              <View
                style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
              >
                {rememberMe && (
                  <Ionicons name="checkmark" size={14} color="#fff" />
                )}
              </View>
              <Text style={styles.rememberMeText}>
                {t("auth.rememberMe") || "Remember me"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleForgotPassword}
              disabled={isLoading}
            >
              <Text style={styles.forgotText}>
                {t("auth.forgotPasswordQuestion")}
              </Text>
            </TouchableOpacity>
          </View>

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
            onPress={() => onGoToRegister?.()}
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
    backgroundColor: "#FFD600",
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
    position: "relative",
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
  inputError: {
    borderColor: "#d32f2f",
    borderWidth: 1.5,
  },
  fieldError: {
    position: "absolute",
    bottom: -18,
    left: 4,
    color: "#d32f2f",
    fontSize: 12,
  },
  errorBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdecea",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  errorBannerText: {
    color: "#d32f2f",
    fontSize: 14,
    flex: 1,
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
  rememberForgotRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  rememberMeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "rgba(28,28,30,0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#1c1c1e",
    borderColor: "#1c1c1e",
  },
  rememberMeText: {
    fontSize: 14,
    color: "#1c1c1e",
    fontWeight: "500",
    opacity: 0.7,
  },
  forgotText: {
    fontSize: 14,
    color: "#1c1c1e",
    fontWeight: "500",
    opacity: 0.7,
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
