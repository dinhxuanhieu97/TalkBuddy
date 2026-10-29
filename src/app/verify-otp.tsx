import { useState, useEffect, useRef } from "react";
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

interface VerifyOtpProps {
  email: string;
  onGoToResetPassword?: (email: string, resetToken: string) => void;
  onGoBack?: () => void;
  onGoToLogin?: () => void;
}

const OTP_LENGTH = 6;

export default function VerifyOtp({
  email,
  onGoToResetPassword,
  onGoBack,
  onGoToLogin,
}: VerifyOtpProps) {
  const t = useT();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    if (!domain) return email;
    const maskedLocal =
      local.length > 2
        ? local[0] + "*".repeat(local.length - 2) + local[local.length - 1]
        : local;
    return `${maskedLocal}@${domain}`;
  };

  const handleVerify = async () => {
    if (otp.length !== OTP_LENGTH) {
      setError(t("auth.verifyOtpErrorEmpty"));
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const result = await AuthService.verifyPasswordResetOtp(email, otp);

      if (result.success && result.resetToken) {
        onGoToResetPassword?.(email, result.resetToken);
      } else {
        setError(result.message);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || t("auth.verifyOtpErrorWrong"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    setIsLoading(true);
    setError("");
    try {
      const result = await AuthService.resendPasswordResetOtp(email);
      if (result.success) {
        setResendCooldown(60);
        setOtp("");
      } else {
        setError(result.message);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || t("auth.error.loginFailed"));
    } finally {
      setIsLoading(false);
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
              onPress={() => onGoBack?.()}
            >
              <Ionicons name="chevron-back" size={24} color="#1c1c1e" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{t("auth.verifyOtpTitle")}</Text>
              <Text style={styles.subtitle}>
                {t("auth.verifyOtpSubtitle", { email: maskEmail(email) })}
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

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t("auth.verifyOtpLabel")}</Text>
              <View
                style={[styles.inputWrapper, error ? styles.inputError : null]}
              >
                <TextInput
                  ref={inputRef}
                  style={styles.otpInput}
                  placeholder={t("auth.verifyOtpPlaceholder")}
                  placeholderTextColor="#999"
                  value={otp}
                  onChangeText={(v) => {
                    const numeric = v
                      .replace(/[^0-9]/g, "")
                      .slice(0, OTP_LENGTH);
                    setOtp(numeric);
                    if (error) setError("");
                  }}
                  onFocus={() => setError("")}
                  keyboardType="number-pad"
                  maxLength={OTP_LENGTH}
                  autoFocus
                  editable={!isLoading}
                />
              </View>
              {error ? <Text style={styles.fieldError}>{error}</Text> : null}
            </View>

            <TouchableOpacity
              onPress={handleVerify}
              style={[
                styles.verifyButton,
                (isLoading || otp.length !== OTP_LENGTH) &&
                  styles.disabledButton,
              ]}
              activeOpacity={0.8}
              disabled={isLoading || otp.length !== OTP_LENGTH}
            >
              <Text style={styles.verifyButtonText}>
                {isLoading
                  ? t("auth.verifyOtpVerifying")
                  : t("auth.verifyOtpButton")}
              </Text>
            </TouchableOpacity>

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                {t("auth.verifyOtpResend").split(" ")[0]}{" "}
              </Text>
              <TouchableOpacity
                onPress={handleResend}
                disabled={resendCooldown > 0 || isLoading}
              >
                <Text
                  style={[
                    styles.resendLink,
                    (resendCooldown > 0 || isLoading) && styles.resendDisabled,
                  ]}
                >
                  {resendCooldown > 0
                    ? t("auth.verifyOtpResendAfter", {
                        seconds: resendCooldown.toString(),
                      })
                    : t("auth.verifyOtpResend")}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                {t("auth.verifyOtpBackToLogin")}
              </Text>
              <TouchableOpacity onPress={() => onGoToLogin?.()}>
                <Text style={styles.signInText}>
                  {t("auth.verifyOtpSignIn")}
                </Text>
              </TouchableOpacity>
            </View>
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
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
  emailText: {
    fontWeight: "600",
    color: "#1c1c1e",
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
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  inputError: {
    borderColor: "#d32f2f",
    borderWidth: 1.5,
  },
  otpInput: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 8,
    color: "#1c1c1e",
  },
  fieldError: {
    position: "absolute",
    bottom: -18,
    left: 4,
    color: "#d32f2f",
    fontSize: 12,
  },
  verifyButton: {
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
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  resendText: {
    color: "#666",
    fontSize: 14,
  },
  resendLink: {
    color: "#1c1c1e",
    fontSize: 14,
    fontWeight: "600",
  },
  resendDisabled: {
    opacity: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "rgba(28,28,30,0.1)",
  },
  footerText: {
    color: "#666",
    fontSize: 14,
  },
  signInText: {
    color: "#1c1c1e",
    fontSize: 14,
    fontWeight: "600",
  },
});
