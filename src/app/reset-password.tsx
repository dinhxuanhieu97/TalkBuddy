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

interface ResetPasswordProps {
  email: string;
  resetToken: string;
  onGoToSuccess?: () => void;
  onGoBack?: () => void;
}

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export default function ResetPassword({
  email,
  resetToken,
  onGoToSuccess,
  onGoBack,
}: ResetPasswordProps) {
  const t = useT();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const validate = (): boolean => {
    if (!newPassword) {
      setError(t("auth.resetPasswordErrorEmpty"));
      return false;
    }
    if (!PASSWORD_REGEX.test(newPassword)) {
      setError(t("auth.resetPasswordErrorWeak"));
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError(t("auth.resetPasswordErrorMismatch"));
      return false;
    }
    return true;
  };

  const handleReset = async () => {
    if (!validate()) return;

    setIsLoading(true);
    setError("");
    try {
      const result = await AuthService.resetPasswordWithToken(
        resetToken,
        newPassword,
      );

      if (result.success) {
        onGoToSuccess?.();
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
              <View style={styles.iconContainer}>
                <Ionicons name="lock-open-outline" size={32} color="#1c1c1e" />
              </View>
              <Text style={styles.title}>{t("auth.resetPasswordTitle")}</Text>
              <Text style={styles.subtitle}>
                {t("auth.resetPasswordSubtitle")}
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
              <Text style={styles.label}>
                {t("auth.resetPasswordNewLabel")}
              </Text>
              <View
                style={[styles.inputWrapper, error ? styles.inputError : null]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#999"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={t("auth.resetPasswordNewPlaceholder")}
                  placeholderTextColor="#999"
                  value={newPassword}
                  onChangeText={(v) => {
                    setNewPassword(v);
                    if (error) setError("");
                  }}
                  onFocus={() => setError("")}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {t("auth.resetPasswordConfirmLabel")}
              </Text>
              <View
                style={[styles.inputWrapper, error ? styles.inputError : null]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#999"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={t("auth.resetPasswordConfirmPlaceholder")}
                  placeholderTextColor="#999"
                  value={confirmPassword}
                  onChangeText={(v) => {
                    setConfirmPassword(v);
                    if (error) setError("");
                  }}
                  onFocus={() => setError("")}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeButton}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-off-outline" : "eye-outline"
                    }
                    size={20}
                    color="#999"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.requirements}>
              <Text style={styles.requirementsTitle}>
                {t("auth.resetPasswordRequirements")}
              </Text>
              <Text style={styles.requirementItem}>
                • {t("auth.resetPasswordReqMinLength")}
              </Text>
              <Text style={styles.requirementItem}>
                • {t("auth.resetPasswordReqUppercase")}
              </Text>
              <Text style={styles.requirementItem}>
                • {t("auth.resetPasswordReqLowercase")}
              </Text>
              <Text style={styles.requirementItem}>
                • {t("auth.resetPasswordReqNumber")}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleReset}
              style={[
                styles.resetButton,
                (isLoading || !newPassword || !confirmPassword) &&
                  styles.disabledButton,
              ]}
              activeOpacity={0.8}
              disabled={isLoading || !newPassword || !confirmPassword}
            >
              <Text style={styles.resetButtonText}>
                {isLoading
                  ? t("auth.resetPasswordProcessing")
                  : t("auth.resetPasswordButton")}
              </Text>
            </TouchableOpacity>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
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
    marginBottom: 20,
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
  eyeButton: {
    padding: 16,
  },
  requirements: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  requirementsTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    marginBottom: 8,
  },
  requirementItem: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
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
});
