import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useT } from "../lib/i18n";

interface ResetPasswordSuccessProps {
  onGoToLogin?: () => void;
}

export default function ResetPasswordSuccess({
  onGoToLogin,
}: ResetPasswordSuccessProps) {
  const t = useT();
  return (
    <LinearGradient
      colors={["#FFD200", "#F9F9F9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#22c55e" />
        </View>

        <Text style={styles.title}>{t("auth.resetPasswordSuccessTitle")}</Text>

        <Text style={styles.subtitle}>
          {t("auth.resetPasswordSuccessSubtitle")}
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => onGoToLogin?.()}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>
            {t("auth.resetPasswordSuccessButton")}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c1c1e",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 48,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
    textAlign: "center",
  },
});
