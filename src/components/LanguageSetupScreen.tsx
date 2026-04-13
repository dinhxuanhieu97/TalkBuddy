import { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocaleStore, useT, LOCALE_OPTIONS, type Locale } from "../lib/i18n";
import { useUserStore } from "../stores/userStore";

// Static strings per locale so confirmation popup renders in the TARGET language
// without changing the global locale first
const CONFIRM_STRINGS: Record<
  Locale,
  {
    langName: string;
    title: string;
    subtitle: string;
    confirm: string;
    cancel: string;
  }
> = {
  en: {
    langName: "English",
    title: "Switch App Language?",
    subtitle: "The entire app will display in English.",
    confirm: "Yes, Switch",
    cancel: "Cancel",
  },
  zh: {
    langName: "中文（简体）",
    title: "切换界面语言？",
    subtitle: "整个 App 将以简体中文显示。",
    confirm: "确认切换",
    cancel: "取消",
  },
  vi: {
    langName: "Tiếng Việt",
    title: "Đổi ngôn ngữ ứng dụng?",
    subtitle: "Toàn bộ ứng dụng sẽ hiển thị bằng Tiếng Việt.",
    confirm: "Xác nhận đổi",
    cancel: "Hủy",
  },
};

interface LanguageSetupScreenProps {
  onBack?: () => void;
  onDone?: () => void;
  /** Show in standalone setup mode (onboarding) vs. settings sub-page mode */
  mode?: "setup" | "settings";
}

export function LanguageSetupScreen({
  onBack,
  onDone,
  mode = "settings",
}: LanguageSetupScreenProps) {
  const t = useT();
  const { locale, setLocale } = useLocaleStore();
  const updatePreferences = useUserStore((s) => s.updatePreferences);

  const [saving, setSaving] = useState(false);
  // pendingLocale = the language the user tapped but hasn't confirmed yet
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);

  const confirmStrings = pendingLocale ? CONFIRM_STRINGS[pendingLocale] : null;
  const pendingOption = pendingLocale
    ? LOCALE_OPTIONS.find((o) => o.value === pendingLocale)
    : null;

  const handleLangCardPress = useCallback(
    (value: Locale) => {
      if (value === locale) return; // already active, no need to confirm
      setPendingLocale(value);
    },
    [locale],
  );

  const handleConfirm = useCallback(() => {
    if (!pendingLocale) return;
    setLocale(pendingLocale);
    updatePreferences({ language: pendingLocale });
    setPendingLocale(null);
  }, [pendingLocale, setLocale, updatePreferences]);

  const handleCancelConfirm = useCallback(() => {
    setPendingLocale(null);
  }, []);

  const handleSaveName = useCallback(() => {
    setSaving(true);
    setSaving(false);
    onDone?.();
  }, [onDone]);

  const isSetupMode = mode === "setup";

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        {onBack ? (
          <TouchableOpacity
            onPress={onBack}
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
        <Text style={styles.headerTitle}>
          {isSetupMode ? t("setup.title") : t("settings.language")}
        </Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {isSetupMode && (
          <Text style={styles.subtitle}>{t("setup.subtitle")}</Text>
        )}

        {/* ── App Language ──────────────────────────────────────── */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>
            {t("setup.preferredLanguage")}
          </Text>
          <Text style={styles.fieldHint}>
            {t("setup.preferredLanguageHint")}
          </Text>

          <View style={styles.languageList}>
            {LOCALE_OPTIONS.map(({ value, labelKey, descKey, flag }) => {
              const isActive = locale === value;
              return (
                <TouchableOpacity
                  key={value}
                  style={[styles.langCard, isActive && styles.langCardActive]}
                  onPress={() => handleLangCardPress(value)}
                  activeOpacity={0.7}
                >
                  <View style={styles.langLeft}>
                    <Text style={styles.langFlag}>{flag}</Text>
                    <View style={styles.langText}>
                      <Text
                        style={[
                          styles.langName,
                          isActive && styles.langNameActive,
                        ]}
                      >
                        {t(labelKey)}
                      </Text>
                      <Text style={styles.langDesc}>{t(descKey)}</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.radioOuter,
                      isActive && styles.radioOuterActive,
                    ]}
                  >
                    {isActive && <View style={styles.radioInner} />}
                  </View>
                </TouchableOpacity>
              );
            })}

            {/* Coming soon teaser */}
            <View style={styles.comingSoonCard}>
              <Ionicons name="globe-outline" size={20} color="#C4C4C6" />
              <Text style={styles.comingSoonText}>{t("lang.comingSoon")}</Text>
              <View style={styles.comingSoonBadge}>
                <Text style={styles.comingSoonBadgeText}>Soon</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* CTA Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.saveButton, saving && styles.saveButtonDisabled]}
          onPress={handleSaveName}
          disabled={saving}
          activeOpacity={0.85}
        >
          <Text style={styles.saveButtonText}>
            {saving
              ? t("common.loading")
              : isSetupMode
                ? t("setup.letsGo")
                : t("common.save")}
          </Text>
          {!saving && (
            <Ionicons
              name={isSetupMode ? "arrow-forward" : "checkmark"}
              size={20}
              color="#1C1C1E"
            />
          )}
        </TouchableOpacity>

        {isSetupMode && onDone && (
          <TouchableOpacity style={styles.skipButton} onPress={onDone}>
            <Text style={styles.skipText}>{t("setup.skip")}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* ── Language Change Confirmation Bottom Sheet ── */}
      <Modal
        visible={pendingLocale !== null}
        transparent
        animationType="slide"
        onRequestClose={handleCancelConfirm}
      >
        <Pressable style={styles.sheetOverlay} onPress={handleCancelConfirm}>
          <Pressable style={styles.sheetContainer} onPress={() => {}}>
            {/* Handle bar */}
            <View style={styles.sheetHandle} />

            {/* Language preview */}
            {pendingOption && confirmStrings && (
              <>
                <View style={styles.sheetLangPreview}>
                  <Text style={styles.sheetFlag}>{pendingOption.flag}</Text>
                  <View>
                    {/* Name shown in the TARGET language */}
                    <Text style={styles.sheetLangName}>
                      {CONFIRM_STRINGS[pendingOption.value].langName}
                    </Text>
                    <Text style={styles.sheetLangTag}>
                      {pendingOption.flag} {pendingOption.value.toUpperCase()}
                    </Text>
                  </View>
                </View>

                <Text style={styles.sheetTitle}>{confirmStrings.title}</Text>
                <Text style={styles.sheetSubtitle}>
                  {confirmStrings.subtitle}
                </Text>

                <View style={styles.sheetActions}>
                  <TouchableOpacity
                    style={styles.sheetCancelBtn}
                    onPress={handleCancelConfirm}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.sheetCancelText}>
                      {confirmStrings.cancel}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.sheetConfirmBtn}
                    onPress={handleConfirm}
                    activeOpacity={0.85}
                  >
                    <Ionicons name="checkmark" size={18} color="#1C1C1E" />
                    <Text style={styles.sheetConfirmText}>
                      {confirmStrings.confirm}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Pressable>
        </Pressable>
      </Modal>
    </KeyboardAvoidingView>
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
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#6E6E73",
    marginBottom: 28,
    lineHeight: 22,
  },
  section: {
    marginBottom: 28,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  fieldHint: {
    fontSize: 12,
    color: "#9E9E9E",
    marginBottom: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    paddingHorizontal: 14,
    height: 52,
    marginBottom: 6,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1C1C1E",
  },
  clearButton: {
    padding: 4,
  },
  languageList: {
    gap: 10,
  },
  langCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  langCardActive: {
    borderColor: "#FFD600",
    backgroundColor: "#FFFDE7",
  },
  langLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },
  langFlag: {
    fontSize: 28,
  },
  langText: {
    flex: 1,
  },
  langName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6E6E73",
    marginBottom: 2,
  },
  langNameActive: {
    color: "#1C1C1E",
  },
  langDesc: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#C4C4C6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterActive: {
    borderColor: "#FFD600",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#FFD600",
  },
  comingSoonCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F3F3F5",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
  },
  comingSoonText: {
    flex: 1,
    fontSize: 14,
    color: "#9E9E9E",
  },
  comingSoonBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
  },
  comingSoonBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#9E9E9E",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 40 : 24,
    paddingTop: 16,
    backgroundColor: "#F9F9F9",
    gap: 10,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: 54,
    backgroundColor: "#FFD600",
    borderRadius: 16,
    shadowColor: "#FFD600",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  skipButton: {
    alignItems: "center",
    paddingVertical: 10,
  },
  skipText: {
    fontSize: 15,
    color: "#9E9E9E",
  },

  // ── Confirmation Bottom Sheet ──────────────────────────────────
  sheetOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  sheetContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 44 : 28,
    paddingTop: 12,
  },
  sheetHandle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#E0E0E0",
    alignSelf: "center",
    marginBottom: 20,
  },
  sheetLangPreview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#F9F9F9",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  sheetFlag: {
    fontSize: 40,
  },
  sheetLangName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  sheetLangTag: {
    fontSize: 12,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 8,
    textAlign: "center",
  },
  sheetSubtitle: {
    fontSize: 14,
    color: "#6E6E73",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 28,
  },
  sheetActions: {
    flexDirection: "row",
    gap: 12,
  },
  sheetCancelBtn: {
    flex: 1,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#F3F3F5",
    borderWidth: 1.5,
    borderColor: "#E0E0E0",
  },
  sheetCancelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6E6E73",
  },
  sheetConfirmBtn: {
    flex: 2,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 14,
    backgroundColor: "#FFD600",
    shadowColor: "#FFD600",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  sheetConfirmText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
  },
});
