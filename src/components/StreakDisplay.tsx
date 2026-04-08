import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

export function StreakDisplay() {
  const t = useT();
  const stats = useUserStore((s) => s.stats);

  const streak = stats.practiceStreak;
  const isHot = streak >= 7;
  const isOnFire = streak >= 30;

  const streakEmoji = isOnFire ? "🔥🔥" : isHot ? "🔥" : "⚡";
  const streakColor = isOnFire ? "#FF3B30" : isHot ? "#FF6B35" : "#FFD600";
  const bgColor = isOnFire ? "#FFF1F0" : isHot ? "#FFF4EF" : "#FFFBEA";

  const milestones = [3, 7, 14, 30, 60, 100];
  const nextMilestone = milestones.find((m) => m > streak) ?? 100;
  const prevMilestone = milestones.filter((m) => m <= streak).pop() ?? 0;
  const milestoneProgress =
    (streak - prevMilestone) / (nextMilestone - prevMilestone);

  return (
    <View style={styles.container}>
      {/* Main streak card */}
      <View style={[styles.card, { backgroundColor: bgColor }]}>
        {/* Left: Flame + number */}
        <View style={styles.left}>
          <Text style={styles.emoji}>{streakEmoji}</Text>
          <View>
            <Text style={[styles.streakNum, { color: streakColor }]}>
              {streak}
            </Text>
            <Text style={styles.streakLabel}>{t('streak.dayStreak')}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Right: Stats grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statVal}>{stats.phrasesLearned}</Text>
            <Text style={styles.statLbl}>{t('streak.phrases')}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statVal}>
              {Math.floor(stats.totalTimeMinutes / 60)}h
            </Text>
            <Text style={styles.statLbl}>{t('streak.totalTime')}</Text>
          </View>
        </View>
      </View>

      {/* Milestone progress bar */}
      <View style={styles.milestoneCard}>
        <View style={styles.milestoneHeader}>
          <View style={styles.milestoneLeft}>
            <Ionicons name="flag" size={14} color="#6366F1" />
            <Text style={styles.milestoneTitle}>
              {t('streak.nextMilestone', { n: nextMilestone })}
            </Text>
          </View>
          <Text style={styles.milestoneDiff}>
            {t('streak.daysToGo', { n: nextMilestone - streak })}
          </Text>
        </View>
        <View style={styles.barTrack}>
          <View
            style={[
              styles.barFill,
              {
                width: `${Math.round(milestoneProgress * 100)}%`,
                backgroundColor: streakColor,
              },
            ]}
          />
        </View>
        {/* Milestone dots */}
        <View style={styles.milestoneDots}>
          {milestones.slice(0, 5).map((m) => {
            const reached = streak >= m;
            return (
              <View key={m} style={styles.dotItem}>
                <View
                  style={[
                    styles.dot,
                    reached && { backgroundColor: streakColor },
                  ]}
                />
                <Text
                  style={[styles.dotLabel, reached && { color: streakColor }]}
                >
                  {m}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  emoji: {
    fontSize: 36,
  },
  streakNum: {
    fontSize: 36,
    fontWeight: "800",
    lineHeight: 40,
  },
  streakLabel: {
    fontSize: 12,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  divider: {
    width: 1,
    height: 48,
    backgroundColor: "rgba(0,0,0,0.08)",
  },
  statsGrid: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statVal: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  statLbl: {
    fontSize: 11,
    color: "#9E9E9E",
    marginTop: 2,
  },
  milestoneCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  milestoneHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  milestoneLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  milestoneTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  milestoneDiff: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  barTrack: {
    height: 8,
    backgroundColor: "#F3F3F5",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 10,
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  milestoneDots: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dotItem: {
    alignItems: "center",
    gap: 3,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
  },
  dotLabel: {
    fontSize: 10,
    color: "#9E9E9E",
    fontWeight: "500",
  },
});
