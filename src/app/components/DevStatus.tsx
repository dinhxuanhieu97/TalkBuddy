import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DevStatus() {
  const [config, setConfig] = useState({
    hasGoogleAuth: false,
    isDevelopment: true,
  });

  useEffect(() => {
    const checkConfig = () => {
      const googleClientId =
        process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID ||
        process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID ||
        "";

      setConfig({
        hasGoogleAuth: !!googleClientId,
        isDevelopment: process.env.NODE_ENV === "development",
      });
    };

    checkConfig();
  }, []);

  if (!config.isDevelopment) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.statusCard}>
        <Text style={styles.title}>🔧 Development Status</Text>

        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Google Auth:</Text>
          <Text
            style={[
              styles.statusValue,
              config.hasGoogleAuth ? styles.success : styles.error,
            ]}
          >
            {config.hasGoogleAuth ? "✅ Configured" : "❌ Not configured"}
          </Text>
        </View>

        {!config.hasGoogleAuth && (
          <View style={styles.tipContainer}>
            <Text style={styles.tipTitle}>Google Setup:</Text>
            <Text style={styles.tipText}>
              Add EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID to .env
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  statusCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statusLabel: {
    fontSize: 14,
    color: "#1c1c1e",
    fontWeight: "500",
  },
  statusValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  success: {
    color: "#34C759",
  },
  error: {
    color: "#FF3B30",
  },
  tipContainer: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#FFF3CD",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#FF9500",
  },
  tipTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 4,
  },
  tipText: {
    fontSize: 12,
    color: "#1c1c1e",
    lineHeight: 18,
  },
});
