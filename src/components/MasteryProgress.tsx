import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useT } from "../lib/i18n";
import { useUserStore } from "../stores/userStore";
import { useSavedPhrasesStore } from "../stores/savedPhrasesStore";

interface MasteryLevel {
  labelKey: string;
  color: string;
  bg: string;
  icon: keyof typeof import("@expo/vector-icons").Ionicons.glyphMap;
  minScore: number;
}

const MASTERY_LEVELS: MasteryLevel[] = [
  {
    labelKey: "mastery.level.beginner",
    color: "#EF4444",
    bg: "#FEF2F2",
    icon: "seedling" as any,
    minScore: 0,
  },
  {
    labelKey: "mastery.level.learning",
    color: "#F97316",
    bg: "#FFF7ED",
    icon: "book-outline" as any,
    minScore: 25,
  },
  {
    labelKey: "mastery.level.familiar",
    color: "#EAB308",
    bg: "#FEFCE8",
    icon: "star-half" as any,
    minScore: 50,
  },
  {
    labelKey: "mastery.level.proficient",
    color: "#22C55E",
    bg: "#F0FDF4",
    icon: "checkmark-circle" as any,
    minScore: 75,
  },
  {
    labelKey: "mastery.level.mastered",
    color: "#3B82F6",
    bg: "#EFF6FF",
    icon: "trophy" as any,
    minScore: 90,
  },
];

function getMasteryLevel(score: number): MasteryLevel {
  return (
    [...MASTERY_LEVELS].reverse().find((l) => score >= l.minScore) ??
    MASTERY_LEVELS[0]
  );
}

export function MasteryProgress() {
  const t = useT();
  const stats = useUserStore((s) => s.stats);
  const { phrases } = useSavedPhrasesStore();

  const total = stats.phrasesLearned;
  // Simulate mastery distribution based on saved phrases & stats
  const mastered = Math.floor(total * 0.2);
  const proficient = Math.floor(total * 0.25);
  const familiar = Math.floor(total * 0.25);
  const learning = Math.floor(total * 0.2);
  const beginner = total - mastered - proficient - familiar - learning;

  const avgScore =
    total > 0
      ? Math.round(
          (mastered * 95 +
            proficient * 80 +
            familiar * 60 +
            learning * 35 +
            beginner * 10) /
            total,
        )
      : 0;

  const currentLevel = getMasteryLevel(avgScore);

  const distribution = [
    { level: MASTERY_LEVELS[4], count: mastered },
    { level: MASTERY_LEVELS[3], count: proficient },
    { level: MASTERY_LEVELS[2], count: familiar },
    { level: MASTERY_LEVELS[1], count: learning },
    { level: MASTERY_LEVELS[0], count: beginner },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="bar-chart" size={16} color="#6366F1" />
            <Text style={styles.title}>{t("mastery.title")}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: currentLevel.bg }]}>
            <Text style={[styles.badgeText, { color: currentLevel.color }]}>
              {t(currentLevel.labelKey as any)}
            </Text>
          </View>
        </View>

        {/* Score ring simplified */}
        <View style={styles.scoreRow}>
          <View
            style={[styles.scoreCircle, { borderColor: currentLevel.color }]}
          >
            <Text style={[styles.scoreNum, { color: currentLevel.color }]}>
              {avgScore}
            </Text>
            <Text style={styles.scoreLabel}>/ 100</Text>
          </View>

          <View style={styles.scoreInfo}>
            <Text style={styles.scoreDesc}>
              {avgScore >= 90
                ? t("mastery.excellent")
                : avgScore >= 75
                  ? t("mastery.great")
                  : avgScore >= 50
                    ? t("mastery.solid")
                    : avgScore >= 25
                      ? t("mastery.practice")
                      : t("mastery.started")}
            </Text>
            <Text style={styles.totalPhrasesText}>
              {t("mastery.phrasesTotal", { n: total })}
            </Text>
          </View>
        </View>

        {/* Stacked bar */}
        {total > 0 && (
          <>
            <View style={styles.stackedBar}>
              {distribution
                .filter((d) => d.count > 0)
                .map((d, i) => (
                  <View
                    key={i}
                    style={[
                      styles.barSegment,
                      {
                        flex: d.count,
                        backgroundColor: d.level.color,
                        borderTopLeftRadius: i === 0 ? 6 : 0,
                        borderBottomLeftRadius: i === 0 ? 6 : 0,
                        borderTopRightRadius:
                          i ===
                          distribution.filter((x) => x.count > 0).length - 1
                            ? 6
                            : 0,
                        borderBottomRightRadius:
                          i ===
                          distribution.filter((x) => x.count > 0).length - 1
                            ? 6
                            : 0,
                      },
                    ]}
                  />
                ))}
            </View>

            {/* Legend */}
            <View style={styles.legend}>
              {distribution
                .filter((d) => d.count > 0)
                .map((d, i) => (
                  <View key={i} style={styles.legendItem}>
                    <View
                      style={[
                        styles.legendDot,
                        { backgroundColor: d.level.color },
                      ]}
                    />
                    <Text style={styles.legendText}>
                      {t(d.level.labelKey as any)} {d.count}
                    </Text>
                  </View>
                ))}
            </View>
          </>
        )}

        {total === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="book-outline" size={32} color="#E0E0E0" />
            <Text style={styles.emptyText}>{t("mastery.startLearning")}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    gap: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  scoreCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  scoreNum: {
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 26,
  },
  scoreLabel: {
    fontSize: 10,
    color: "#9E9E9E",
  },
  scoreInfo: {
    flex: 1,
    gap: 4,
  },
  scoreDesc: {
    fontSize: 13,
    color: "#444",
    lineHeight: 18,
  },
  totalPhrasesText: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  stackedBar: {
    height: 12,
    flexDirection: "row",
    borderRadius: 6,
    overflow: "hidden",
    gap: 2,
  },
  barSegment: {
    height: "100%",
  },
  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 11,
    color: "#666",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 16,
    gap: 8,
  },
  emptyText: {
    fontSize: 13,
    color: "#9E9E9E",
  },
});
