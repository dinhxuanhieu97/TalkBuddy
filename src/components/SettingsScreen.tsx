import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  useUserStore,
  VoiceAccent,
  SpeechSpeed,
  VoiceGender,
} from "../stores/userStore";
import { useLocaleStore, useT, LOCALE_OPTIONS } from "../lib/i18n";

const ACCENT_OPTIONS: { value: VoiceAccent; label: string; tag: string }[] = [
  { value: "en-US", label: "American", tag: "US" },
  { value: "en-GB", label: "British", tag: "UK" },
  { value: "en-AU", label: "Australian", tag: "AU" },
];

const SPEED_OPTIONS: { value: SpeechSpeed; label: string; icon: string }[] = [
  { value: "slow", label: "Slow", icon: "🐢" },
  { value: "normal", label: "Normal", icon: "🚶" },
  { value: "fast", label: "Fast", icon: "🚀" },
];

const REMINDER_HOURS = Array.from({ length: 18 }, (_, i) => i + 6);

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const t = useT();
  const { locale, setLocale } = useLocaleStore();
  const preferences = useUserStore((s) => s.preferences);
  const subscription = useUserStore((s) => s.subscription);
  const updatePreferences = useUserStore((s) => s.updatePreferences);

  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderHour, setReminderHour] = useState(20);
  const [showHourPicker, setShowHourPicker] = useState(false);

  const isPro = subscription === "pro" || subscription === "family";

  const handleAccent = useCallback(
    (accent: VoiceAccent) => updatePreferences({ accent }),
    [updatePreferences],
  );

  const handleSpeed = useCallback(
    (speechSpeed: SpeechSpeed) => updatePreferences({ speechSpeed }),
    [updatePreferences],
  );

  const handleVoiceGender = useCallback(
    (voiceGender: VoiceGender) => {
      if (!isPro) {
        Alert.alert(
          "Pro Feature",
          "Voice gender selection is available for Pro subscribers.",
        );
        return;
      }
      updatePreferences({ voiceGender });
    },
    [updatePreferences, isPro],
  );

  const handleLanguage = useCallback(
    (language: string) => {
      setLocale(language as "zh");
      updatePreferences({ language });
    },
    [setLocale, updatePreferences],
  );

  const handleAutoPlay = useCallback(
    (autoPlayAudio: boolean) => updatePreferences({ autoPlayAudio }),
    [updatePreferences],
  );

  const handleDarkMode = useCallback(
    (darkMode: boolean) => updatePreferences({ darkMode }),
    [updatePreferences],
  );

  const handleReminderToggle = useCallback(
    (value: boolean) => {
      setReminderEnabled(value);
      if (value) {
        Alert.alert(
          "Daily Reminder",
          `Reminder set for ${String(reminderHour).padStart(2, "0")}:00 every day.`,
        );
      }
    },
    [reminderHour],
  );

  const handleChangeHour = useCallback(
    (hour: number) => {
      setReminderHour(hour);
      setShowHourPicker(false);
      if (reminderEnabled) {
        Alert.alert(
          "Updated",
          `Reminder updated to ${String(hour).padStart(2, "0")}:00`,
        );
      }
    },
    [reminderEnabled],
  );

  return (
    <View style={styles.wrapper}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* ── VOICE SETTINGS ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="volume-medium" size={18} color="#666" />
            <Text style={styles.sectionTitle}>Voice Settings</Text>
          </View>
          <View style={styles.card}>
            {/* Accent */}
            <Text style={styles.fieldLabel}>{t("settings.accent")}</Text>
            <View style={styles.optionRow}>
              {ACCENT_OPTIONS.map(({ value, label, tag }) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.optionButton,
                    preferences.accent === value && styles.optionButtonActive,
                  ]}
                  onPress={() => handleAccent(value)}
                >
                  <Text
                    style={[
                      styles.optionTag,
                      preferences.accent === value && styles.optionTagActive,
                    ]}
                  >
                    {tag}
                  </Text>
                  <Text
                    style={[
                      styles.optionLabel,
                      preferences.accent === value && styles.optionLabelActive,
                    ]}
                  >
                    {t(`settings.accent${label}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            {/* Speech Speed */}
            <Text style={styles.fieldLabel}>{t("settings.speed")}</Text>
            <View style={styles.optionRow}>
              {SPEED_OPTIONS.map(({ value, label, icon }) => (
                <TouchableOpacity
                  key={value}
                  style={[
                    styles.optionButton,
                    preferences.speechSpeed === value &&
                      styles.optionButtonActive,
                  ]}
                  onPress={() => handleSpeed(value)}
                >
                  <Text style={styles.optionEmoji}>{icon}</Text>
                  <Text
                    style={[
                      styles.optionLabel,
                      preferences.speechSpeed === value &&
                        styles.optionLabelActive,
                    ]}
                  >
                    {t(`settings.speed${label}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            {/* My Voice Gender */}
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>{t("settings.gender")}</Text>
              {!isPro && (
                <View style={styles.proBadge}>
                  <Text style={styles.proBadgeText}>PRO</Text>
                </View>
              )}
            </View>
            <View style={styles.genderRow}>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  styles.genderMale,
                  preferences.voiceGender === "male" && styles.genderMaleActive,
                  !isPro && styles.genderDisabled,
                ]}
                onPress={() => handleVoiceGender("male")}
              >
                <Text style={styles.genderEmoji}>👨</Text>
                <Text
                  style={[
                    styles.genderLabel,
                    preferences.voiceGender === "male" &&
                      styles.genderLabelActive,
                  ]}
                >
                  {t("settings.genderMale")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.genderButton,
                  styles.genderFemale,
                  preferences.voiceGender === "female" &&
                    styles.genderFemaleActive,
                  !isPro && styles.genderDisabled,
                ]}
                onPress={() => handleVoiceGender("female")}
              >
                <Text style={styles.genderEmoji}>👩</Text>
                <Text
                  style={[
                    styles.genderLabel,
                    preferences.voiceGender === "female" &&
                      styles.genderLabelActive,
                  ]}
                >
                  {t("settings.genderFemale")}
                </Text>
              </TouchableOpacity>
            </View>
            {!isPro && (
              <Text style={styles.proHint}>{t("settings.upgradeToPro")}</Text>
            )}
          </View>
        </View>

        {/* ── LANGUAGE ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="globe" size={18} color="#666" />
            <Text style={styles.sectionTitle}>{t("settings.language")}</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.langList}>
              {LOCALE_OPTIONS.map(({ value, labelKey, flag }) => {
                const isActive = locale === value;
                return (
                  <TouchableOpacity
                    key={value}
                    style={[styles.langRow, isActive && styles.langRowActive]}
                    onPress={() => handleLanguage(value)}
                  >
                    <Text style={styles.langFlag}>{flag}</Text>
                    <Text
                      style={[
                        styles.langLabel,
                        isActive && styles.langLabelActive,
                      ]}
                    >
                      {t(labelKey)}
                    </Text>
                    {isActive && (
                      <Ionicons
                        name="checkmark-circle"
                        size={20}
                        color="#FFD600"
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* ── STUDY REMINDER ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons
              name={reminderEnabled ? "notifications" : "notifications-outline"}
              size={18}
              color="#666"
            />
            <Text style={styles.sectionTitle}>{t("settings.reminder")}</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.toggleRow}>
              <View>
                <Text style={styles.toggleLabel}>
                  {t("settings.reminderLabel")}
                </Text>
                <Text style={styles.toggleSub}>
                  {reminderEnabled
                    ? `${t("settings.reminderAt")} ${String(reminderHour).padStart(2, "0")}:00`
                    : t("settings.reminderOff")}
                </Text>
              </View>
              <Switch
                value={reminderEnabled}
                onValueChange={handleReminderToggle}
                trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                thumbColor="#FFFFFF"
              />
            </View>

            {reminderEnabled && (
              <>
                <View style={styles.divider} />
                <TouchableOpacity
                  style={styles.timeRow}
                  onPress={() => setShowHourPicker(!showHourPicker)}
                >
                  <Ionicons name="time-outline" size={20} color="#6366F1" />
                  <Text style={styles.timeLabel}>
                    {String(reminderHour).padStart(2, "0")}:00
                  </Text>
                  <Ionicons
                    name={showHourPicker ? "chevron-up" : "chevron-down"}
                    size={18}
                    color="#9E9E9E"
                  />
                </TouchableOpacity>

                {showHourPicker && (
                  <View style={styles.hourGrid}>
                    {REMINDER_HOURS.map((h) => (
                      <TouchableOpacity
                        key={h}
                        style={[
                          styles.hourCell,
                          reminderHour === h && styles.hourCellActive,
                        ]}
                        onPress={() => handleChangeHour(h)}
                      >
                        <Text
                          style={[
                            styles.hourText,
                            reminderHour === h && styles.hourTextActive,
                          ]}
                        >
                          {String(h).padStart(2, "0")}:00
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </>
            )}
          </View>
        </View>

        {/* ── APP PREFERENCES ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="settings-outline" size={18} color="#666" />
            <Text style={styles.sectionTitle}>{t("settings.preferences")}</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.toggleRow}>
              <View style={styles.toggleLeft}>
                <Ionicons
                  name="play-circle-outline"
                  size={22}
                  color="#6366F1"
                />
                <View>
                  <Text style={styles.toggleLabel}>
                    {t("settings.autoPlayLabel")}
                  </Text>
                  <Text style={styles.toggleSub}>
                    {t("settings.autoPlayDesc")}
                  </Text>
                </View>
              </View>
              <Switch
                value={preferences.autoPlayAudio}
                onValueChange={handleAutoPlay}
                trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.toggleRow}>
              <View style={styles.toggleLeft}>
                <Ionicons name="moon-outline" size={22} color="#6366F1" />
                <View>
                  <Text style={styles.toggleLabel}>
                    {t("settings.darkModeLabel")}
                  </Text>
                  <Text style={styles.toggleSub}>
                    {t("settings.darkModeDesc")}
                  </Text>
                </View>
              </View>
              <Switch
                value={preferences.darkMode}
                onValueChange={handleDarkMode}
                trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  container: {
    flex: 1,
  },
  section: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: "row",
    gap: 8,
  },
  optionButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#F3F3F5",
    borderWidth: 2,
    borderColor: "transparent",
    gap: 4,
  },
  optionButtonActive: {
    backgroundColor: "#FFF9E6",
    borderColor: "#FFD600",
  },
  optionTag: {
    fontSize: 13,
    fontWeight: "700",
    color: "#9E9E9E",
    fontVariant: ["tabular-nums"],
  },
  optionTagActive: {
    color: "#1C1C1E",
  },
  optionEmoji: {
    fontSize: 18,
  },
  optionLabel: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  optionLabelActive: {
    color: "#1C1C1E",
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginVertical: 14,
  },
  proBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#6366F1",
    borderRadius: 8,
  },
  proBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#FFF",
  },
  genderRow: {
    flexDirection: "row",
    gap: 10,
  },
  genderButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  genderMale: {
    backgroundColor: "#EFF6FF",
  },
  genderMaleActive: {
    borderColor: "#3B82F6",
    backgroundColor: "#DBEAFE",
  },
  genderFemale: {
    backgroundColor: "#FDF2F8",
  },
  genderFemaleActive: {
    borderColor: "#EC4899",
    backgroundColor: "#FCE7F3",
  },
  genderDisabled: {
    opacity: 0.45,
  },
  genderEmoji: {
    fontSize: 20,
  },
  genderLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9E9E9E",
  },
  genderLabelActive: {
    color: "#1C1C1E",
  },
  proHint: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 10,
    textAlign: "center",
  },
  langList: {
    gap: 8,
  },
  langRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  langRowActive: {
    backgroundColor: "#FFF9E6",
    borderColor: "#FFD600",
    paddingHorizontal: 10,
  },
  langFlag: {
    fontSize: 22,
  },
  langLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#9E9E9E",
  },
  langLabelActive: {
    color: "#1C1C1E",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  toggleLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  toggleLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  toggleSub: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 8,
  },
  timeLabel: {
    flex: 1,
    fontSize: 22,
    fontWeight: "700",
    color: "#6366F1",
    fontVariant: ["tabular-nums"],
  },
  hourGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  hourCell: {
    width: "22%",
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: "#F3F3F5",
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  hourCellActive: {
    backgroundColor: "#FFF9E6",
    borderColor: "#FFD600",
  },
  hourText: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  hourTextActive: {
    color: "#1C1C1E",
    fontWeight: "700",
  },
});
