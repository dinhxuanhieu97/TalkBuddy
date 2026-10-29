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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AuthService } from "../services";
import { useT } from "../lib/i18n";

interface ForgotPasswordProps {
  onGoToLogin?: () => void;
  onGoToVerifyOtp?: (email: string) => void;
  onBack?: () => void;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ForgotPassword({
  onGoToLogin,
  onGoToVerifyOtp,
  onBack,
}: ForgotPasswordProps) {
  const t = useT();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const isValidEmail = email.trim() && EMAIL_REGEX.test(email);

  const validate = (): boolean => {
    if (!email.trim()) {
      setError(t("auth.forgotPasswordErrorEmpty"));
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      setError(t("auth.forgotPasswordErrorInvalid"));
      return false;
    }
    return true;
  };

  const handleEmailChange = (v: string) => {
    setEmail(v);
    setSuccessMsg("");
    if (emailTouched) {
      if (!v.trim()) {
        setError(t("auth.forgotPasswordErrorEmpty"));
      } else if (!EMAIL_REGEX.test(v)) {
        setError(t("auth.forgotPasswordErrorInvalid"));
      } else {
        setError("");
      }
    }
  };

  const handleBlur = () => {
    setEmailTouched(true);
    if (!email.trim()) {
      setError(t("auth.forgotPasswordErrorEmpty"));
    } else if (!EMAIL_REGEX.test(email)) {
      setError(t("auth.forgotPasswordErrorInvalid"));
    }
  };

  const handleResetPassword = async () => {
    setSuccessMsg("");
    if (!validate()) return;

    setIsLoading(true);
    setIsValidating(true);
    setError("");

    try {
      // First validate email exists in database
      const validateResult = await AuthService.validateEmailExists(email);

      if (!validateResult.success) {
        setError(validateResult.message);
        setIsLoading(false);
        setIsValidating(false);
        return;
      }

      // Email exists, proceed to request OTP
      const result = await AuthService.requestPasswordResetOtp(email);

      if (result.success) {
        setSuccessMsg(t("auth.forgotPasswordSuccess"));
        setTimeout(() => {
          onGoToVerifyOtp?.(email);
        }, 1500);
      } else {
        setError(result.message);
      }
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        t("auth.error.loginFailed");
      setError(message);
    } finally {
      setIsLoading(false);
      setIsValidating(false);
    }
  };

  return (
    <LinearGradient
      colors={["#FFD200", "#F9F9F9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => onBack?.()}
            >
              <Ionicons name="chevron-back" size={24} color="#1c1c1e" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="lock-closed-outline"
                  size={32}
                  color="#1c1c1e"
                />
              </View>
              <Text style={styles.title}>{t("auth.forgotPasswordTitle")}</Text>
              <Text style={styles.subtitle}>
                {t("auth.forgotPasswordSubtitle")}
              </Text>
            </View>
          </View>

          <View style={styles.form}>
            {error ? (
              <View style={styles.errorBanner}>
                <Ionicons name="alert-circle" size={18} color="#d32f2f" />
                <Text style={styles.errorBannerText}>{error}</Text>
              </View>
            ) : null}

            {successMsg ? (
              <View style={styles.successBanner}>
                <Ionicons name="checkmark-circle" size={18} color="#2e7d32" />
                <Text style={styles.successBannerText}>{successMsg}</Text>
              </View>
            ) : null}

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {t("auth.forgotPasswordEmailLabel")}
              </Text>
              <View
                style={[
                  styles.inputWrapper,
                  error ? styles.inputError : null,
                  successMsg ? styles.inputSuccess : null,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={error ? "#d32f2f" : successMsg ? "#22c55e" : "#999"}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={t("auth.forgotPasswordEmailPlaceholder")}
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={handleEmailChange}
                  onBlur={handleBlur}
                  onFocus={() => {
                    setError("");
                    setEmailTouched(true);
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                {successMsg ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color="#22c55e"
                    style={styles.inputIcon}
                  />
                ) : null}
              </View>
              {error ? <Text style={styles.fieldError}>{error}</Text> : null}
            </View>

            <TouchableOpacity
              onPress={handleResetPassword}
              style={[
                styles.resetButton,
                (!isValidEmail || isLoading) && styles.disabledButton,
              ]}
              activeOpacity={0.8}
              disabled={!isValidEmail || isLoading}
            >
              <Text style={styles.resetButtonText}>
                {isLoading
                  ? t("auth.forgotPasswordSending")
                  : t("auth.forgotPasswordSendCode")}
              </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {t("auth.forgotPasswordRememberPassword")}
              </Text>
              <TouchableOpacity onPress={() => onGoToLogin?.()}>
                <Text style={styles.signInText}>
                  {t("auth.forgotPasswordSignIn")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.helpContainer}>
            <Ionicons
              name="information-circle-outline"
              size={16}
              color="#666"
            />
            <Text style={styles.helpText}>{t("auth.forgotPasswordHelp")}</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titleContainer: {
    alignItems: "center",
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  form: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 24,
    position: "relative",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  inputError: {
    borderColor: "#d32f2f",
    borderWidth: 1.5,
  },
  inputSuccess: {
    borderColor: "#22c55e",
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
  inputIcon: {
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1c1c1e",
  },
  resetButton: {
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
  resetButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 24,
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: "rgba(28,28,30,0.1)",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
  },
  signInText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  helpContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    gap: 8,
  },
  helpText: {
    flex: 1,
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
});
