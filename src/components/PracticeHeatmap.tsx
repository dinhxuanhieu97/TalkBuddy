import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useT, type LocaleKeys } from "../lib/i18n";
import { useUserStore } from "../stores/userStore";

const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const WEEKS_TO_SHOW = 10;
const TOTAL_CELLS = WEEKS_TO_SHOW * 7;

const DAY_KEYS: LocaleKeys[] = [
  "heatmap.mon",
  "heatmap.tue",
  "heatmap.wed",
  "heatmap.thu",
  "heatmap.fri",
  "heatmap.sat",
  "heatmap.sun",
];

function generateHeatmapData(streak: number, lastActiveDate: string) {
  const today = new Date();
  const data: { date: Date; level: 0 | 1 | 2 | 3 }[] = [];

  for (let i = TOTAL_CELLS - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const daysAgo = i;
    let level: 0 | 1 | 2 | 3 = 0;

    // Simulate activity based on streak
    if (daysAgo === 0) {
      level = streak > 0 ? 3 : 0;
    } else if (daysAgo < streak) {
      // Within current streak: randomise between 2-3
      level = Math.random() > 0.3 ? 3 : 2;
    } else if (daysAgo < streak + 14) {
      // Before streak: sparse
      level = Math.random() > 0.6 ? 1 : 0;
    }

    data.push({ date, level });
  }

  return data;
}

function getLevelColor(level: 0 | 1 | 2 | 3) {
  switch (level) {
    case 3:
      return "#FFD600";
    case 2:
      return "#FFE566";
    case 1:
      return "#FFF3B0";
    default:
      return "#F3F3F5";
  }
}

function formatMonth(date: Date) {
  return date.toLocaleString("default", { month: "short" });
}

export function PracticeHeatmap() {
  const t = useT();
  const stats = useUserStore((s) => s.stats);
  const data = generateHeatmapData(stats.practiceStreak, stats.lastActiveDate);

  // Group into weeks (columns)
  const weeks: (typeof data)[] = [];
  for (let w = 0; w < WEEKS_TO_SHOW; w++) {
    weeks.push(data.slice(w * 7, w * 7 + 7));
  }

  // Month labels — show when month changes
  const monthLabels: { week: number; label: string }[] = [];
  weeks.forEach((week, wi) => {
    const firstDay = week[0]?.date;
    if (!firstDay) return;
    const prevWeekFirst = wi > 0 ? weeks[wi - 1][0]?.date : null;
    if (!prevWeekFirst || firstDay.getMonth() !== prevWeekFirst.getMonth()) {
      monthLabels.push({ week: wi, label: formatMonth(firstDay) });
    }
  });

  const activeDays = data.filter((d) => d.level > 0).length;
  const totalDays = data.length;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="calendar" size={16} color="#6366F1" />
            <Text style={styles.title}>{t("heatmap.title")}</Text>
          </View>
          <Text style={styles.subtitle}>
            {t("heatmap.daysActive", { active: activeDays, total: totalDays })}
          </Text>
        </View>

        {/* Month labels */}
        <View style={styles.monthRow}>
          <View style={styles.dayLabelCol} />
          {weeks.map((_, wi) => {
            const label = monthLabels.find((m) => m.week === wi);
            return (
              <View key={wi} style={styles.weekCol}>
                {label ? (
                  <Text style={styles.monthLabel}>{label.label}</Text>
                ) : (
                  <Text style={styles.monthLabel}> </Text>
                )}
              </View>
            );
          })}
        </View>

        {/* Heatmap grid */}
        <View style={styles.gridRow}>
          {/* Day of week labels */}
          <View style={styles.dayLabelCol}>
            {DAY_KEYS.map((d, i) => (
              <Text key={i} style={styles.dayLabel}>
                {i % 2 === 0 ? t(d) : " "}
              </Text>
            ))}
          </View>

          {/* Weeks */}
          {weeks.map((week, wi) => (
            <View key={wi} style={styles.weekCol}>
              {week.map((cell, di) => (
                <View
                  key={di}
                  style={[
                    styles.cell,
                    { backgroundColor: getLevelColor(cell.level) },
                  ]}
                />
              ))}
            </View>
          ))}
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          <Text style={styles.legendLabel}>{t("heatmap.less")}</Text>
          {([0, 1, 2, 3] as const).map((level) => (
            <View
              key={level}
              style={[
                styles.legendCell,
                { backgroundColor: getLevelColor(level) },
              ]}
            />
          ))}
          <Text style={styles.legendLabel}>{t("heatmap.more")}</Text>
        </View>
      </View>
    </View>
  );
}

const CELL_SIZE = 13;
const CELL_GAP = 3;

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
    gap: 12,
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
  subtitle: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  monthRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  gridRow: {
    flexDirection: "row",
  },
  dayLabelCol: {
    width: 28,
    gap: CELL_GAP,
  },
  dayLabel: {
    fontSize: 9,
    color: "#9E9E9E",
    height: CELL_SIZE,
    lineHeight: CELL_SIZE,
  },
  weekCol: {
    width: CELL_SIZE,
    gap: CELL_GAP,
    marginRight: CELL_GAP,
  },
  monthLabel: {
    fontSize: 9,
    color: "#9E9E9E",
    textAlign: "left",
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: 3,
  },
  legend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "flex-end",
  },
  legendLabel: {
    fontSize: 10,
    color: "#9E9E9E",
  },
  legendCell: {
    width: 11,
    height: 11,
    borderRadius: 2,
  },
});
