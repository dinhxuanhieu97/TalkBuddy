import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

interface CreditBalanceProps {
  onPress?: () => void;
}

export function CreditBalance({ onPress }: CreditBalanceProps) {
  const t = useT();
  const credits = useUserStore((state) => state.credits);
  const subscription = useUserStore((state) => state.subscription);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Ionicons name="diamond" size={24} color="#FFD600" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{t("credits.label")}</Text>
        <Text style={styles.value}>
          {t("credits.points", { n: credits.toLocaleString() })}
        </Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{subscription.toUpperCase()}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#9E9E9E" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: "#9E9E9E",
    marginBottom: 2,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#FFD600",
    borderRadius: 8,
    marginRight: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1C1C1E",
  },
});
