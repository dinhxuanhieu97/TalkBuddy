import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSavedPhrasesStore } from "../stores/savedPhrasesStore";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

interface QuickAccessCardsProps {
  onNavigate: (screen: "saved" | "vocab" | "plan") => void;
}

export function QuickAccessCards({ onNavigate }: QuickAccessCardsProps) {
  const t = useT();
  const { phrases } = useSavedPhrasesStore();
  const stats = useUserStore((s) => s.stats);

  const allCards = [
    {
      id: "saved" as const,
      icon: "bookmark" as const,
      iconColor: "#F59E0B",
      bg: "#FFFBEB",
      label: t("quickAccess.saved"),
      desc: t("quickAccess.savedDesc"),
      badge: phrases.length,
    },
    {
      id: "vocab" as const,
      icon: "library" as const,
      iconColor: "#8B5CF6",
      bg: "#F5F3FF",
      label: t("quickAccess.vocabulary"),
      desc: t("quickAccess.vocabDesc"),
      badge: stats.phrasesLearned,
    },
    {
      id: "plan" as const,
      icon: "calendar" as const,
      iconColor: "#10B981",
      bg: "#ECFDF5",
      label: t("quickAccess.plan"),
      desc: t("quickAccess.planDesc"),
      badge: null,
    },
  ];

  // Only show saved card - vocab and plan hidden (not implemented yet)
  const cards = allCards.filter((c) => c.id === "saved");

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{t("quickAccess.title")}</Text>
      <View style={styles.card}>
        {cards.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => onNavigate(item.id)}
              activeOpacity={0.7}
            >
              {/* Icon */}
              <View style={[styles.iconWrap, { backgroundColor: item.bg }]}>
                <Ionicons name={item.icon} size={20} color={item.iconColor} />
              </View>

              {/* Text */}
              <View style={styles.textWrap}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
              </View>

              {/* Right */}
              <View style={styles.right}>
                {item.badge !== null && item.badge > 0 && (
                  <View style={styles.badgePill}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                )}
                <Ionicons name="chevron-forward" size={18} color="#C7C7CC" />
              </View>
            </TouchableOpacity>

            {index < cards.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9E9E9E",
    letterSpacing: 0.6,
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  textWrap: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  desc: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  badgePill: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    minWidth: 24,
    alignItems: "center",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginLeft: 68,
  },
});
