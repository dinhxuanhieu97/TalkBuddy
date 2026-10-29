import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LineChart, BarChart } from "react-native-chart-kit";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

const screenWidth = Dimensions.get("window").width;

type TimeRange = "7d" | "30d" | "90d" | "all";

export function AnalyticsDashboard() {
  const t = useT();
  const [selectedRange, setSelectedRange] = useState<TimeRange>("7d");
  const stats = useUserStore((state) => state.stats);

  // Mock data for charts - In production, this would come from API
  const getLearningProgressData = () => {
    const ranges = {
      "7d": {
        labels: [
          t("analytics.mon"),
          t("analytics.tue"),
          t("analytics.wed"),
          t("analytics.thu"),
          t("analytics.fri"),
          t("analytics.sat"),
          t("analytics.sun"),
        ],
        data: [12, 15, 8, 20, 18, 25, 22],
      },
      "30d": {
        labels: [
          t("analytics.week1"),
          t("analytics.week2"),
          t("analytics.week3"),
          t("analytics.week4"),
        ],
        data: [85, 120, 95, 140],
      },
      "90d": {
        labels: [
          t("analytics.month1"),
          t("analytics.month2"),
          t("analytics.month3"),
        ],
        data: [280, 350, 420],
      },
      all: {
        labels: [
          t("analytics.q1"),
          t("analytics.q2"),
          t("analytics.q3"),
          t("analytics.q4"),
        ],
        data: [450, 580, 720, 850],
      },
    };
    return ranges[selectedRange];
  };

  const getStudyTimeData = () => {
    const ranges = {
      "7d": {
        labels: [
          t("analytics.mon"),
          t("analytics.tue"),
          t("analytics.wed"),
          t("analytics.thu"),
          t("analytics.fri"),
          t("analytics.sat"),
          t("analytics.sun"),
        ],
        data: [25, 30, 15, 45, 35, 50, 40],
      },
      "30d": {
        labels: [
          t("analytics.week1"),
          t("analytics.week2"),
          t("analytics.week3"),
          t("analytics.week4"),
        ],
        data: [180, 220, 190, 250],
      },
      "90d": {
        labels: [
          t("analytics.month1"),
          t("analytics.month2"),
          t("analytics.month3"),
        ],
        data: [520, 680, 750],
      },
      all: {
        labels: [
          t("analytics.q1"),
          t("analytics.q2"),
          t("analytics.q3"),
          t("analytics.q4"),
        ],
        data: [1200, 1500, 1800, 2100],
      },
    };
    return ranges[selectedRange];
  };

  const chartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFrom: "#FFF9E6",
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 214, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(28, 28, 30, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "3",
      stroke: "#FFD600",
      fill: "#FFFFFF",
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "#F3F3F5",
      strokeWidth: 1,
    },
  };

  const barChartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFrom: "#E8F5E9",
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(28, 28, 30, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForBackgroundLines: {
      strokeDasharray: "",
      stroke: "#F3F3F5",
      strokeWidth: 1,
    },
  };

  const learningData = getLearningProgressData();
  const studyTimeData = getStudyTimeData();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="analytics" size={32} color="#2196F3" />
        </View>
        <Text style={styles.headerTitle}>{t("analytics.title")}</Text>
        <Text style={styles.headerSubtitle}>{t("analytics.subtitle")}</Text>
      </View>

      {/* Time Range Selector */}
      <View style={styles.timeRangeContainer}>
        {(["7d", "30d", "90d", "all"] as TimeRange[]).map((range) => (
          <TouchableOpacity
            key={range}
            style={[
              styles.timeRangeButton,
              selectedRange === range && styles.timeRangeButtonActive,
            ]}
            onPress={() => setSelectedRange(range)}
          >
            <Text
              style={[
                styles.timeRangeText,
                selectedRange === range && styles.timeRangeTextActive,
              ]}
            >
              {range === "7d" && t("analytics.7days")}
              {range === "30d" && t("analytics.30days")}
              {range === "90d" && t("analytics.90days")}
              {range === "all" && t("analytics.allTime")}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Key Metrics */}
      <View style={styles.metricsContainer}>
        <View style={styles.metricCard}>
          <View style={[styles.metricIcon, { backgroundColor: "#E3F2FD" }]}>
            <Ionicons name="book" size={24} color="#2196F3" />
          </View>
          <Text style={styles.metricValue}>{stats.phrasesLearned}</Text>
          <Text style={styles.metricLabel}>
            {t("analytics.phrasesLearned")}
          </Text>
        </View>

        <View style={styles.metricCard}>
          <View style={[styles.metricIcon, { backgroundColor: "#FFEBEE" }]}>
            <Ionicons name="flame" size={24} color="#F44336" />
          </View>
          <Text style={styles.metricValue}>{stats.practiceStreak}</Text>
          <Text style={styles.metricLabel}>{t("analytics.dayStreak")}</Text>
        </View>

        <View style={styles.metricCard}>
          <View style={[styles.metricIcon, { backgroundColor: "#E8F5E9" }]}>
            <Ionicons name="time" size={24} color="#4CAF50" />
          </View>
          <Text style={styles.metricValue}>
            {Math.floor(stats.totalTimeMinutes / 60)}h
          </Text>
          <Text style={styles.metricLabel}>{t("analytics.studyTime")}</Text>
        </View>
      </View>

      {/* Learning Progress Chart */}
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}>{t("analytics.learningProgress")}</Text>
        <View style={styles.chartCard}>
          <LineChart
            data={{
              labels: learningData.labels,
              datasets: [{ data: learningData.data }],
            }}
            width={screenWidth - 60}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
      </View>

      {/* Study Time Chart */}
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}>{t("analytics.studyTimeChart")}</Text>
        <View style={styles.chartCard}>
          <BarChart
            data={{
              labels: studyTimeData.labels,
              datasets: [{ data: studyTimeData.data }],
            }}
            width={screenWidth - 60}
            height={220}
            chartConfig={barChartConfig}
            style={styles.chart}
            showValuesOnTopOfBars
            yAxisLabel=""
            yAxisSuffix="m"
          />
        </View>
      </View>

      {/* Skills Progress */}
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}>{t("analytics.skillsProgress")}</Text>
        <View style={styles.skillsCard}>
          {/* Vocabulary */}
          <View style={styles.skillRow}>
            <View style={styles.skillHeader}>
              <View style={styles.skillIconContainer}>
                <Ionicons name="book" size={20} color="#2196F3" />
              </View>
              <Text style={styles.skillLabel}>{t("analytics.vocabulary")}</Text>
              <Text style={styles.skillPercentage}>75%</Text>
            </View>
            <View style={styles.skillBarBackground}>
              <View
                style={[
                  styles.skillBarFill,
                  { width: "75%", backgroundColor: "#2196F3" },
                ]}
              />
            </View>
          </View>

          {/* Grammar */}
          <View style={styles.skillRow}>
            <View style={styles.skillHeader}>
              <View style={styles.skillIconContainer}>
                <Ionicons name="create" size={20} color="#9C27B0" />
              </View>
              <Text style={styles.skillLabel}>{t("analytics.grammar")}</Text>
              <Text style={styles.skillPercentage}>60%</Text>
            </View>
            <View style={styles.skillBarBackground}>
              <View
                style={[
                  styles.skillBarFill,
                  { width: "60%", backgroundColor: "#9C27B0" },
                ]}
              />
            </View>
          </View>

          {/* Listening */}
          <View style={styles.skillRow}>
            <View style={styles.skillHeader}>
              <View style={styles.skillIconContainer}>
                <Ionicons name="headset" size={20} color="#4CAF50" />
              </View>
              <Text style={styles.skillLabel}>{t("analytics.listening")}</Text>
              <Text style={styles.skillPercentage}>85%</Text>
            </View>
            <View style={styles.skillBarBackground}>
              <View
                style={[
                  styles.skillBarFill,
                  { width: "85%", backgroundColor: "#4CAF50" },
                ]}
              />
            </View>
          </View>

          {/* Speaking */}
          <View style={styles.skillRow}>
            <View style={styles.skillHeader}>
              <View style={styles.skillIconContainer}>
                <Ionicons name="mic" size={20} color="#FF9800" />
              </View>
              <Text style={styles.skillLabel}>{t("analytics.speaking")}</Text>
              <Text style={styles.skillPercentage}>50%</Text>
            </View>
            <View style={styles.skillBarBackground}>
              <View
                style={[
                  styles.skillBarFill,
                  { width: "50%", backgroundColor: "#FF9800" },
                ]}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.achievementsSection}>
        <Text style={styles.sectionTitle}>{t("analytics.achievements")}</Text>
        <View style={styles.achievementsCard}>
          <View style={styles.achievementRow}>
            <View style={styles.achievementIcon}>
              <Ionicons name="trophy" size={24} color="#FFD600" />
            </View>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>
                {t("analytics.firstWeekComplete")}
              </Text>
              <Text style={styles.achievementDate}>
                {t("analytics.2daysAgo")}
              </Text>
            </View>
          </View>

          <View style={styles.achievementDivider} />

          <View style={styles.achievementRow}>
            <View style={styles.achievementIcon}>
              <Ionicons name="star" size={24} color="#FFD600" />
            </View>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>
                {t("analytics.50Phrases")}
              </Text>
              <Text style={styles.achievementDate}>
                {t("analytics.5daysAgo")}
              </Text>
            </View>
          </View>

          <View style={styles.achievementDivider} />

          <View style={styles.achievementRow}>
            <View style={styles.achievementIcon}>
              <Ionicons name="flame" size={24} color="#F44336" />
            </View>
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>
                {t("analytics.7DayStreak")}
              </Text>
              <Text style={styles.achievementDate}>
                {t("analytics.1weekAgo")}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Study Insights */}
      <View style={styles.insightsSection}>
        <Text style={styles.sectionTitle}>{t("analytics.studyInsights")}</Text>
        <View style={styles.insightCard}>
          <Ionicons name="bulb" size={20} color="#FFD600" />
          <Text style={styles.insightText}>
            {t("analytics.weekendProductive")}
          </Text>
        </View>
        <View style={styles.insightCard}>
          <Ionicons name="trending-up" size={20} color="#4CAF50" />
          <Text style={styles.insightText}>{t("analytics.paceIncreased")}</Text>
        </View>
        <View style={styles.insightCard}>
          <Ionicons name="time" size={20} color="#2196F3" />
          <Text style={styles.insightText}>{t("analytics.avgSession")}</Text>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  timeRangeContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
  },
  timeRangeButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
  },
  timeRangeButtonActive: {
    backgroundColor: "#FFD600",
    borderColor: "#FFD600",
  },
  timeRangeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  timeRangeTextActive: {
    color: "#1C1C1E",
  },
  metricsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  metricCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 11,
    color: "#9E9E9E",
    textAlign: "center",
  },
  chartSection: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  chartCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
  },
  chart: {
    borderRadius: 16,
  },
  skillsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    gap: 20,
  },
  skillRow: {
    gap: 8,
  },
  skillHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  skillIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  skillLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  skillPercentage: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  skillBarBackground: {
    height: 12,
    backgroundColor: "#F3F3F5",
    borderRadius: 6,
    overflow: "hidden",
  },
  skillBarFill: {
    height: "100%",
    borderRadius: 6,
  },
  achievementsSection: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  achievementsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  achievementRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF9E6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  achievementDate: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  achievementDivider: {
    height: 1,
    backgroundColor: "#F3F3F5",
  },
  insightsSection: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  insightCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
