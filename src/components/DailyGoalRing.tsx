import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

const DAILY_GOAL_MINUTES = 10;

export function DailyGoalRing() {
  const t = useT();
  const stats = useUserStore((s) => s.stats);

  const todayMinutes = Math.min(
    stats.totalTimeMinutes % 60,
    DAILY_GOAL_MINUTES,
  );
  const progress = Math.min(todayMinutes / DAILY_GOAL_MINUTES, 1);
  const isComplete = progress >= 1;

  // Ring drawing using layered Views
  const SIZE = 120;
  const STROKE = 10;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  // We'll simulate progress ring with rotated views
  const progressDeg = Math.round(progress * 360);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Left: Ring */}
        <View style={styles.ringWrapper}>
          {/* Track circle */}
          <View style={[styles.circle, styles.track]} />
          {/* Progress arc using overflow-hidden trick */}
          {/* Left half */}
          <View style={styles.halfClip}>
            <View
              style={[
                styles.halfArc,
                {
                  borderColor: isComplete ? "#22c55e" : "#FFD600",
                  transform: [{ rotate: `${Math.min(progressDeg, 180)}deg` }],
                },
              ]}
            />
          </View>
          {/* Right half — only shown when > 180 */}
          {progressDeg > 180 && (
            <View style={[styles.halfClip, styles.halfClipRight]}>
              <View
                style={[
                  styles.halfArc,
                  styles.halfArcRight,
                  {
                    borderColor: isComplete ? "#22c55e" : "#FFD600",
                    transform: [{ rotate: `${progressDeg - 180}deg` }],
                  },
                ]}
              />
            </View>
          )}
          {/* Center content */}
          <View style={styles.centerLabel}>
            {isComplete ? (
              <Ionicons name="checkmark-circle" size={28} color="#22c55e" />
            ) : (
              <>
                <Text style={styles.centerValue}>{todayMinutes}</Text>
                <Text style={styles.centerUnit}>/ {DAILY_GOAL_MINUTES}m</Text>
              </>
            )}
          </View>
        </View>

        {/* Right: Text info */}
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Ionicons name="trophy" size={16} color="#FFD600" />
            <Text style={styles.title}>{t("dailyGoal.title")}</Text>
          </View>
          <Text style={styles.desc}>
            {isComplete
              ? t("dailyGoal.completed")
              : t("dailyGoal.remaining").replace(
                  "{minutes}",
                  (DAILY_GOAL_MINUTES - todayMinutes).toString(),
                )}
          </Text>
          {/* Mini stat pills */}
          <View style={styles.pills}>
            <View style={styles.pill}>
              <Ionicons name="flame" size={12} color="#FF6B35" />
              <Text style={styles.pillText}>
                {t("dailyGoal.streak", { n: stats.practiceStreak })}
              </Text>
            </View>
            <View style={[styles.pill, { backgroundColor: "#EEF2FF" }]}>
              <Ionicons name="book" size={12} color="#6366F1" />
              <Text style={[styles.pillText, { color: "#6366F1" }]}>
                {t("dailyGoal.phrases", { n: stats.phrasesLearned })}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const SIZE = 100;
const STROKE = 10;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  ringWrapper: {
    width: SIZE,
    height: SIZE,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circle: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: STROKE,
  },
  track: {
    borderColor: "#F3F3F5",
  },
  halfClip: {
    position: "absolute",
    width: SIZE,
    height: SIZE / 2,
    top: 0,
    overflow: "hidden",
  },
  halfClipRight: {
    top: SIZE / 2,
    transform: [{ rotate: "180deg" }],
  },
  halfArc: {
    position: "absolute",
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: STROKE,
    borderColor: "#FFD600",
    top: 0,
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    transform: [{ rotate: "0deg" }],
  },
  halfArcRight: {
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  centerLabel: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  centerValue: {
    fontSize: 22,
    fontWeight: "800",
    color: "#1C1C1E",
    lineHeight: 26,
  },
  centerUnit: {
    fontSize: 11,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  info: {
    flex: 1,
    gap: 6,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  desc: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
  },
  pills: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FFF8E0",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
  },
  pillText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#FF6B35",
  },
});
