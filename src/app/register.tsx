import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { AuthService } from "../services";
import { useT } from "../lib/i18n";
import { useUserStore } from "../stores/userStore";

const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;
const GOOGLE_WEB_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;

GoogleSignin.configure({
  iosClientId: GOOGLE_IOS_CLIENT_ID,
  webClientId: GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true,
});

interface RegisterProps {
  onAuthSuccess?: () => void;
  onGoToLogin?: () => void;
}

interface FieldErrors {
  name?: string;
  email?: string;
  password?: string;
  general?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register({
  onAuthSuccess,
  onGoToLogin,
}: RegisterProps) {
  const t = useT();
  const setUser = useUserStore((state) => state.setUser);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [successMsg, setSuccessMsg] = useState("");

  const validate = (): boolean => {
    const errs: FieldErrors = {};
    if (!name.trim()) errs.name = t("auth.registerErrorNameRequired");
    if (!email.trim()) {
      errs.email = t("auth.registerErrorEmailRequired");
    } else if (!EMAIL_REGEX.test(email)) {
      errs.email = t("auth.registerErrorEmailInvalid");
    }
    if (!password) {
      errs.password = t("auth.registerErrorPasswordRequired");
    } else if (password.length < 6) {
      errs.password = t("auth.registerErrorPasswordMin");
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegister = async () => {
    setSuccessMsg("");
    if (!validate()) return;

    setIsLoading(true);
    setErrors({});
    try {
      const user = await AuthService.signUpWithEmail(email, password, name);

      if (user) {
        // Sign out immediately so user logs in manually
        await AuthService.signOut();
        setSuccessMsg(t("auth.registerSuccess"));
        setTimeout(() => {
          onGoToLogin?.();
        }, 1500);
      } else {
        setErrors({ general: t("auth.registerErrorGeneral") });
      }
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        t("auth.registerErrorGeneral");
      setErrors({ general: message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setIsLoading(true);
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.data?.idToken) {
        const user = await AuthService.signInWithGoogle(
          userInfo.data.idToken,
          userInfo.data.idToken,
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
          Alert.alert(t("common.error"), t("auth.error.googleLoginFailed"));
        }
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("Google sign in cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Google sign in in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert(t("common.error"), t("auth.error.googleLoginFailed"));
      } else {
        console.error("Google sign in error:", error);
        Alert.alert(t("common.error"), t("auth.error.googleLoginFailed"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleRegister = () => {
    Alert.alert(t("common.comingSoon"), t("auth.comingSoon.appleLogin"));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <LinearGradient
        colors={["#f9f9f9", "#ffd200"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>{t("auth.registerTitle")}</Text>
              <Text style={styles.subtitle}>{t("auth.registerSubtitle")}</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* General Error */}
              {errors.general ? (
                <View style={styles.errorBanner}>
                  <Ionicons name="alert-circle" size={18} color="#d32f2f" />
                  <Text style={styles.errorBannerText}>{errors.general}</Text>
                </View>
              ) : null}

              {/* Success Banner */}
              {successMsg ? (
                <View style={styles.successBanner}>
                  <Ionicons name="checkmark-circle" size={18} color="#2e7d32" />
                  <Text style={styles.successBannerText}>{successMsg}</Text>
                </View>
              ) : null}

              {/* Name */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>
                  {t("auth.registerFullNameLabel")}
                </Text>
                <TextInput
                  style={[styles.input, errors.name && styles.inputError]}
                  placeholder={t("auth.registerFullNamePlaceholder")}
                  placeholderTextColor="#999"
                  value={name}
                  onChangeText={(v) => {
                    setName(v);
                    if (errors.name)
                      setErrors((e) => ({ ...e, name: undefined }));
                  }}
                  onFocus={() => setErrors((e) => ({ ...e, name: undefined }))}
                  autoCapitalize="words"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                {errors.name ? (
                  <Text style={styles.fieldError}>{errors.name}</Text>
                ) : null}
              </View>

              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>{t("auth.registerEmailLabel")}</Text>
                <TextInput
                  style={[styles.input, errors.email && styles.inputError]}
                  placeholder={t("auth.registerEmailPlaceholder")}
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
                <Text style={styles.label}>
                  {t("auth.registerPasswordLabel")}
                </Text>
                <View
                  style={[
                    styles.passwordContainer,
                    errors.password && styles.inputError,
                  ]}
                >
                  <TextInput
                    style={styles.passwordInput}
                    placeholder={t("auth.registerPasswordPlaceholder")}
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

              {/* Terms */}
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  {t("auth.registerTerms")}
                  <Text style={styles.termsLink}>
                    {t("auth.registerTermsOfService")}
                  </Text>{" "}
                  <Text style={styles.termsLink}>
                    {t("auth.registerPrivacyPolicy")}
                  </Text>
                </Text>
              </View>

              {/* Register Button */}
              <TouchableOpacity
                onPress={handleRegister}
                style={[
                  styles.registerButton,
                  isLoading && styles.disabledButton,
                ]}
                activeOpacity={0.8}
                disabled={isLoading}
              >
                <Text style={styles.registerButtonText}>
                  {isLoading
                    ? t("auth.registerSigningUp")
                    : t("auth.registerButton")}
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>
                  {t("auth.orContinueWith")}
                </Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Buttons */}
              <View style={styles.socialContainer}>
                {/* Google */}
                <TouchableOpacity
                  onPress={handleGoogleRegister}
                  style={[
                    styles.socialButton,
                    isLoading && styles.disabledButton,
                  ]}
                  activeOpacity={0.8}
                  disabled={isLoading}
                >
                  <Text style={styles.socialIcon}>G</Text>
                  <Text style={styles.socialText}>{t("auth.google")}</Text>
                </TouchableOpacity>

                {/* Apple - only show on iOS */}
                {Platform.OS === "ios" && (
                  <TouchableOpacity
                    onPress={handleAppleRegister}
                    style={[
                      styles.socialButton,
                      isLoading && styles.disabledButton,
                    ]}
                    activeOpacity={0.8}
                    disabled={isLoading}
                  >
                    <Ionicons name="logo-apple" size={20} color="#1c1c1e" />
                    <Text style={styles.socialText}>{t("auth.apple")}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {t("auth.registerHaveAccount")}
              </Text>
              <TouchableOpacity
                onPress={() => onGoToLogin?.()}
                disabled={isLoading}
              >
                <Text style={styles.signInText}>
                  {t("auth.registerSignIn")}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 32,
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
    opacity: 0.6,
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
  successBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#edf7ed",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    gap: 8,
  },
  successBannerText: {
    color: "#2e7d32",
    fontSize: 14,
    fontWeight: "600",
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
  termsContainer: {
    marginBottom: 24,
  },
  termsText: {
    fontSize: 13,
    color: "#1c1c1e",
    opacity: 0.6,
    lineHeight: 20,
  },
  termsLink: {
    fontWeight: "600",
    color: "#1c1c1e",
  },
  registerButton: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  registerButtonText: {
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
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 32,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: "#1c1c1e",
    opacity: 0.6,
  },
  signInText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1c1c1e",
  },
});
