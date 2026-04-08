import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  registerForPushNotificationsAsync,
  scheduleDailyReminder,
  cancelAllNotifications,
  sendTestNotification,
  getScheduledNotifications,
} from "../lib/notifications";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

export function NotificationSettings() {
  const t = useT();
  const [isEnabled, setIsEnabled] = useState(false);
  const [dailyReminderEnabled, setDailyReminderEnabled] = useState(true);
  const [streakAlertEnabled, setStreakAlertEnabled] = useState(true);
  const [creditAlertEnabled, setCreditAlertEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState({ hour: 20, minute: 0 });
  const [scheduledCount, setScheduledCount] = useState(0);

  const preferences = useUserStore((state) => state.preferences);
  const updatePreferences = useUserStore((state) => state.updatePreferences);

  useEffect(() => {
    setIsEnabled(preferences.notifications);
    loadScheduledNotifications();
  }, [preferences.notifications]);

  const loadScheduledNotifications = async () => {
    const notifications = await getScheduledNotifications();
    setScheduledCount(notifications.length);
  };

  const handleEnableNotifications = async (value: boolean) => {
    if (value) {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        setIsEnabled(true);
        updatePreferences({ notifications: true });

        // Schedule daily reminder by default
        if (dailyReminderEnabled) {
          await scheduleDailyReminder(reminderTime.hour, reminderTime.minute);
        }

        Alert.alert(t("common.success"), t("notifications.enabledSuccess"));
        loadScheduledNotifications();
      } else {
        Alert.alert(
          t("notifications.permissionDenied"),
          t("notifications.enableInSettings"),
        );
      }
    } else {
      await cancelAllNotifications();
      setIsEnabled(false);
      updatePreferences({ notifications: false });
      Alert.alert(t("common.disabled"), t("notifications.allCancelled"));
      loadScheduledNotifications();
    }
  };

  const handleDailyReminderToggle = async (value: boolean) => {
    setDailyReminderEnabled(value);

    if (value && isEnabled) {
      await scheduleDailyReminder(reminderTime.hour, reminderTime.minute);
      Alert.alert(t("common.enabled"), t("notifications.reminderScheduled"));
      loadScheduledNotifications();
    } else if (!value) {
      await cancelAllNotifications();
      Alert.alert(t("common.disabled"), t("notifications.reminderCancelled"));
      loadScheduledNotifications();
    }
  };

  const handleTestNotification = async () => {
    if (!isEnabled) {
      Alert.alert(t("common.error"), t("notifications.enableFirst"));
      return;
    }

    await sendTestNotification();
    Alert.alert(t("notifications.testSent"), t("notifications.testMessage"));
  };

  const handleChangeTime = () => {
    Alert.alert(
      t("notifications.changeTimeTitle"),
      t("notifications.changeTimeSubtitle"),
      [
        {
          text: t("notifications.time8am"),
          onPress: async () => {
            setReminderTime({ hour: 8, minute: 0 });
            if (dailyReminderEnabled && isEnabled) {
              await scheduleDailyReminder(8, 0);
              loadScheduledNotifications();
            }
          },
        },
        {
          text: t("notifications.time12pm"),
          onPress: async () => {
            setReminderTime({ hour: 12, minute: 0 });
            if (dailyReminderEnabled && isEnabled) {
              await scheduleDailyReminder(12, 0);
              loadScheduledNotifications();
            }
          },
        },
        {
          text: t("notifications.time6pm"),
          onPress: async () => {
            setReminderTime({ hour: 18, minute: 0 });
            if (dailyReminderEnabled && isEnabled) {
              await scheduleDailyReminder(18, 0);
              loadScheduledNotifications();
            }
          },
        },
        {
          text: t("notifications.time8pm"),
          onPress: async () => {
            setReminderTime({ hour: 20, minute: 0 });
            if (dailyReminderEnabled && isEnabled) {
              await scheduleDailyReminder(20, 0);
              loadScheduledNotifications();
            }
          },
        },
        { text: t("common.cancel"), style: "cancel" },
      ],
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="notifications" size={32} color="#FFD600" />
        </View>
        <Text style={styles.headerTitle}>{t("notifications.title")}</Text>
        <Text style={styles.headerSubtitle}>{t("notifications.subtitle")}</Text>
      </View>

      {/* Master Toggle */}
      <View style={styles.section}>
        <View style={styles.masterToggleCard}>
          <View style={styles.masterToggleLeft}>
            <Ionicons name="notifications-outline" size={24} color="#1C1C1E" />
            <View style={styles.masterToggleText}>
              <Text style={styles.masterToggleTitle}>
                {t("notifications.enable")}
              </Text>
              <Text style={styles.masterToggleSubtitle}>
                {isEnabled
                  ? t("notifications.enabled")
                  : t("notifications.disabled")}
              </Text>
            </View>
          </View>
          <Switch
            value={isEnabled}
            onValueChange={handleEnableNotifications}
            trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>

      {/* Notification Types */}
      {isEnabled && (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("notifications.typesTitle")}
            </Text>
            <View style={styles.settingsCard}>
              {/* Daily Reminder */}
              <View style={styles.settingRow}>
                <View style={styles.settingLeft}>
                  <View
                    style={[styles.settingIcon, { backgroundColor: "#E3F2FD" }]}
                  >
                    <Ionicons name="alarm" size={20} color="#2196F3" />
                  </View>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>
                      {t("notifications.dailyReminder")}
                    </Text>
                    <Text style={styles.settingDescription}>
                      {t("notifications.reminderAt").replace(
                        "{time}",
                        `${reminderTime.hour}:${reminderTime.minute < 10 ? "0" : ""}${reminderTime.minute}`,
                      )}
                    </Text>
                  </View>
                </View>
                <Switch
                  value={dailyReminderEnabled}
                  onValueChange={handleDailyReminderToggle}
                  trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                  thumbColor="#FFFFFF"
                />
              </View>

              {dailyReminderEnabled && (
                <TouchableOpacity
                  style={styles.changeTimeButton}
                  onPress={handleChangeTime}
                >
                  <Ionicons name="time-outline" size={16} color="#2196F3" />
                  <Text style={styles.changeTimeText}>
                    {t("notifications.changeTime")}
                  </Text>
                </TouchableOpacity>
              )}

              <View style={styles.settingDivider} />

              {/* Streak Alert */}
              <View style={styles.settingRow}>
                <View style={styles.settingLeft}>
                  <View
                    style={[styles.settingIcon, { backgroundColor: "#FFEBEE" }]}
                  >
                    <Ionicons name="flame" size={20} color="#F44336" />
                  </View>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>
                      {t("notifications.streakAlert")}
                    </Text>
                    <Text style={styles.settingDescription}>
                      {t("notifications.streakDesc")}
                    </Text>
                  </View>
                </View>
                <Switch
                  value={streakAlertEnabled}
                  onValueChange={setStreakAlertEnabled}
                  trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                  thumbColor="#FFFFFF"
                />
              </View>

              <View style={styles.settingDivider} />

              {/* Credit Alert */}
              <View style={styles.settingRow}>
                <View style={styles.settingLeft}>
                  <View
                    style={[styles.settingIcon, { backgroundColor: "#FFF9E6" }]}
                  >
                    <Ionicons name="diamond" size={20} color="#FFD600" />
                  </View>
                  <View style={styles.settingInfo}>
                    <Text style={styles.settingLabel}>
                      {t("notifications.creditAlert")}
                    </Text>
                    <Text style={styles.settingDescription}>
                      {t("notifications.creditDesc")}
                    </Text>
                  </View>
                </View>
                <Switch
                  value={creditAlertEnabled}
                  onValueChange={setCreditAlertEnabled}
                  trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                  thumbColor="#FFFFFF"
                />
              </View>
            </View>
          </View>

          {/* Info */}
          <View style={styles.infoSection}>
            <View style={styles.infoCard}>
              <Ionicons name="information-circle" size={20} color="#2196F3" />
              <Text style={styles.infoText}>
                {scheduledCount === 1
                  ? t("notifications.oneScheduled")
                  : t("notifications.manyScheduled").replace(
                      "{n}",
                      scheduledCount.toString(),
                    )}
              </Text>
            </View>
          </View>

          {/* Test Button */}
          <TouchableOpacity
            style={styles.testButton}
            onPress={handleTestNotification}
          >
            <Ionicons name="flask" size={20} color="#FFFFFF" />
            <Text style={styles.testButtonText}>
              {t("notifications.sendTest")}
            </Text>
          </TouchableOpacity>
        </>
      )}

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
    backgroundColor: "#FFF9E6",
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
  section: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  masterToggleCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  masterToggleLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  masterToggleText: {
    flex: 1,
  },
  masterToggleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  masterToggleSubtitle: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  settingsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  settingDivider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginVertical: 8,
  },
  changeTimeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 52,
    marginTop: -8,
    marginBottom: 8,
  },
  changeTimeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2196F3",
  },
  infoSection: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#E3F2FD",
    padding: 16,
    borderRadius: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#1976D2",
    fontWeight: "600",
  },
  testButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: "#2196F3",
    borderRadius: 12,
  },
  testButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
