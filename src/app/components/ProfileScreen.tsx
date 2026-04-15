import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Switch,
  Modal,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useT } from "../../lib/i18n";
import { AuthService } from "../../services/AuthService";
import { CreditBalance } from "../../components/CreditBalance";
import { CreditShop } from "../../components/CreditShop";
import { SubscriptionPlans } from "../../components/SubscriptionPlans";
import { FamilyManager } from "../../components/FamilyManager";
import { NotificationSettings } from "../../components/NotificationSettings";
import { AnalyticsDashboard } from "../../components/AnalyticsDashboard";
import { EditProfileSimple } from "../../components/EditProfileSimple";
import { DailyGoalRing } from "../../components/DailyGoalRing";
import { StreakDisplay } from "../../components/StreakDisplay";
import { MasteryProgress } from "../../components/MasteryProgress";
import { PracticeHeatmap } from "../../components/PracticeHeatmap";
import { QuickAccessCards } from "../../components/QuickAccessCards";
import { InviteFriends } from "../../components/InviteFriends";
import { SettingsScreen } from "../../components/SettingsScreen";
import { LanguageSetupScreen } from "../../components/LanguageSetupScreen";
import { TestFamilyButton } from "./TestFamilyButton";
import { useUserStore } from "../../stores/userStore";
import { useSavedPhrasesStore } from "../../stores/savedPhrasesStore";
import { speak, stopSpeaking } from "../../services/TTSService";
import PracticeMode from "./PracticeMode";
import DictationMode from "./DictationMode";
import ShadowMode from "./ShadowMode";
import { VoiceSettingsScreen } from "../components/VoiceSettings/VoiceSettingsScreen";

type SettingItem = {
  id: string;
  icon: string;
  label: string;
  value?: string;
  type: "navigation" | "toggle" | "info";
  isEnabled?: boolean;
};

interface ProfileScreenProps {
  onLogout?: () => void;
  onResetOnboarding?: () => void;
}

export default function ProfileScreen({
  onLogout,
  onResetOnboarding,
}: ProfileScreenProps) {
  const t = useT();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showCreditShop, setShowCreditShop] = useState(false);
  const [showSubscriptionPlans, setShowSubscriptionPlans] = useState(false);
  const [showFamilyManager, setShowFamilyManager] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] =
    useState(false);
  const [showAnalyticsDashboard, setShowAnalyticsDashboard] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showMySaved, setShowMySaved] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const [showLanguageSetup, setShowLanguageSetup] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showDeleteAccountConfirm, setShowDeleteAccountConfirm] =
    useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [expandedSavedId, setExpandedSavedId] = useState<string | null>(null);
  const [activeSavedPractice, setActiveSavedPractice] = useState<{
    mode: "practice" | "dictation" | "shadow";
    phraseId: string;
  } | null>(null);

  const { phrases: savedPhrases, removePhrase } = useSavedPhrasesStore();

  // Handle logout - show confirmation modal
  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    setShowLogoutConfirm(false);
    setIsLoggingOut(true);
    try {
      await AuthService.signOut();
      await AsyncStorage.clear();
      onLogout?.();
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert(t("common.error"), t("auth.logoutError"));
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Get user data from Zustand store
  const user = useUserStore((state) => state.user);
  const stats = useUserStore((state) => state.stats);
  const subscription = useUserStore((state) => state.subscription);
  const familyId = useUserStore((state) => state.familyId);

  // User profile data
  const userName = user?.name || t("profile.defaultName");
  const userEmail = user?.email || t("profile.defaultEmail");
  const userAvatar = user?.avatar;

  const profileStats = [
    {
      label: t("profile.phrasesLearned"),
      value: stats.phrasesLearned.toString(),
      icon: "book",
    },
    {
      label: t("profile.practiceStreak"),
      value: t("profile.days", { n: stats.practiceStreak }),
      icon: "flame",
    },
    {
      label: t("profile.totalTime"),
      value: `${Math.floor(stats.totalTimeMinutes / 60)}.${stats.totalTimeMinutes % 60} ${t("profile.hours", { n: "" })}`,
      icon: "time",
    },
  ];

  const settingsSections = [
    {
      title: t("profile.section.account"),
      items: [
        {
          id: "profile",
          icon: "person",
          label: t("profile.editProfile"),
          type: "navigation" as const,
        },
        {
          id: "analytics",
          icon: "analytics",
          label: t("profile.analytics"),
          value: t("common.view"),
          type: "navigation" as const,
        },
        {
          id: "subscription",
          icon: "card",
          label: t("profile.subscription"),
          value: `${subscription.charAt(0).toUpperCase() + subscription.slice(1)} ${t("common.plan")}`,
          type: "navigation" as const,
        },
        ...(subscription === "family" || familyId
          ? [
              {
                id: "family",
                icon: "people",
                label: t("profile.familyPlan"),
                value: familyId ? t("common.manage") : t("common.join"),
                type: "navigation" as const,
              },
            ]
          : []),
      ],
    },
    {
      title: t("profile.section.preferences"),
      items: [
        {
          id: "voice",
          icon: "mic",
          label: t("profile.voiceSettings"),
          value: t("profile.voiceSettingsValue"),
          type: "navigation" as const,
        },
        {
          id: "settings",
          icon: "settings",
          label: t("profile.settings"),
          type: "navigation" as const,
        },
        {
          id: "language",
          icon: "language",
          label: t("profile.appLanguage"),
          value: t("profile.appLanguageValue"),
          type: "navigation" as const,
        },
        {
          id: "notifications",
          icon: "notifications",
          label: t("profile.notifications"),
          type: "toggle" as const,
          isEnabled: notifications,
        },
      ],
    },
    {
      title: t("profile.section.learning"),
      items: [
        {
          id: "history",
          icon: "time",
          label: t("profile.learningHistory"),
          type: "navigation" as const,
        },
        {
          id: "goals",
          icon: "trophy",
          label: t("profile.dailyGoals"),
          value: t("profile.dailyGoalsValue"),
          type: "navigation" as const,
        },
      ],
    },
    {
      title: t("profile.section.support"),
      items: [
        {
          id: "resetOnboarding",
          icon: "refresh-circle",
          label: t("profile.resetOnboarding"),
          type: "navigation" as const,
        },
        {
          id: "help",
          icon: "help-circle",
          label: t("profile.helpCenter"),
          type: "navigation" as const,
        },
        {
          id: "feedback",
          icon: "chatbubble",
          label: t("profile.sendFeedback"),
          type: "navigation" as const,
        },
        {
          id: "about",
          icon: "information-circle",
          label: t("profile.about"),
          type: "navigation" as const,
        },
        {
          id: "privacy",
          icon: "shield",
          label: t("profile.privacyPolicy"),
          type: "navigation" as const,
        },
        {
          id: "terms",
          icon: "document-text",
          label: t("profile.termsOfService"),
          type: "navigation" as const,
        },
      ],
    },
  ];

  const handleToggle = (id: string, value: boolean) => {
    switch (id) {
      case "notifications":
        setNotifications(value);
        break;
      case "darkMode":
        setDarkMode(value);
        break;
      case "autoPlay":
        setAutoPlay(value);
        break;
    }
  };

  const handleNavigation = (id: string) => {
    switch (id) {
      case "profile":
        setShowEditProfile(true);
        break;
      case "analytics":
        setShowAnalyticsDashboard(true);
        break;
      case "subscription":
        setShowSubscriptionPlans(true);
        break;
      case "family":
        setShowFamilyManager(true);
        break;
      case "saved":
        setShowMySaved(true);
        break;
      case "settings":
        setShowSettings(true);
        break;
      case "voice":
        setShowVoiceSettings(true);
        break;
      case "language":
        setShowLanguageSetup(true);
        break;
      case "notifications":
        setShowNotificationSettings(true);
        break;
      case "resetOnboarding":
        handleResetOnboarding();
        break;
      case "history":
        setShowAnalyticsDashboard(true);
        break;
      case "goals":
        // Daily goals - show settings modal
        setShowSettings(true);
        break;
      case "help":
        // Open help center URL
        setShowAbout(true);
        break;
      case "feedback":
        // Open feedback form
        setShowFeedback(true);
        break;
      case "about":
        // Show about modal
        setShowAbout(true);
        break;
      case "privacy":
        WebBrowser.openBrowserAsync("https://wayjetai.com/privacy-policy/");
        break;
      case "terms":
        WebBrowser.openBrowserAsync("https://wayjetai.com/terms-of-use/");
        break;
      default:
        break;
    }
  };

  const handleResetOnboarding = () => {
    setShowResetConfirm(true);
  };

  const confirmDeleteAccount = async () => {
    setShowDeleteAccountConfirm(false);
    setIsDeletingAccount(true);
    try {
      const success = await AuthService.deleteAccount();
      if (success) {
        await AsyncStorage.clear();
        onLogout?.();
      } else {
        Alert.alert(t("common.error"), t("profile.deleteAccountError"));
      }
    } catch (error) {
      console.error("Delete account error:", error);
      Alert.alert(t("common.error"), t("profile.deleteAccountError"));
    } finally {
      setIsDeletingAccount(false);
    }
  };

  const confirmResetOnboarding = async () => {
    setShowResetConfirm(false);
    try {
      await AsyncStorage.removeItem("hasSeenOnboarding");
      onResetOnboarding?.();
    } catch (error) {
      console.log("Error resetting onboarding:", error);
      Alert.alert(t("common.error"), t("profile.resetError"));
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header with Yellow Background - Same as Practice tab */}
        <View style={styles.headerYellow}>
          <Text style={styles.headerTitle}>{t("profile.title")}</Text>
          <View style={styles.headerBadge}>
            <Ionicons name="school" size={20} color="#1C1C1E" />
          </View>
        </View>

        {/* User Info Card */}
        <View style={styles.userInfoCard}>
          {/* Left: Clickable Avatar */}
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={() => setShowAvatarModal(true)}
            activeOpacity={0.8}
          >
            {userAvatar ? (
              <Image source={{ uri: userAvatar }} style={styles.avatarImage} />
            ) : (
              <Ionicons name="person" size={40} color="#FFD600" />
            )}
            <View style={styles.avatarOverlay}>
              <Ionicons name="expand" size={16} color="#FFF" />
            </View>
          </TouchableOpacity>

          {/* Right: User Info */}
          <View style={styles.userInfo}>
            {/* Nickname with Edit Icon */}
            <View style={styles.nameRow}>
              <Text style={styles.userName}>{userName}</Text>
              <TouchableOpacity
                onPress={() => setShowEditProfile(true)}
                style={styles.editIcon}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons name="pencil" size={18} color="#9E9E9E" />
              </TouchableOpacity>
            </View>

            {/* Email */}
            <Text style={styles.userEmail}>{userEmail}</Text>
          </View>
        </View>

        {/* Credit Balance */}
        <CreditBalance onPress={() => setShowCreditShop(true)} />

        {/* ── NEW FEATURES ── */}

        {/* 1. Daily Goal Ring */}
        <DailyGoalRing />

        {/* 2. Streak Display */}
        <StreakDisplay />

        {/* 3. Mastery Progress */}
        <MasteryProgress />

        {/* 4. Practice Heatmap */}
        <PracticeHeatmap />

        {/* 5. Quick Access Cards */}
        <QuickAccessCards
          onNavigate={(screen) => {
            if (screen === "saved") setShowMySaved(true);
          }}
        />

        {/* 6. Invite Friends / Referral */}
        <InviteFriends />

        {/* ── SETTINGS ── */}
        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.settingsCard}>
              {section.items.map((item, itemIndex) => (
                <View key={item.id}>
                  <TouchableOpacity
                    style={styles.settingItem}
                    onPress={() =>
                      item.type === "navigation" && handleNavigation(item.id)
                    }
                    disabled={item.type === "toggle"}
                  >
                    <View style={styles.settingLeft}>
                      <View style={styles.settingIconContainer}>
                        <Ionicons
                          name={item.icon as any}
                          size={20}
                          color="#666"
                        />
                      </View>
                      <Text style={styles.settingLabel}>{item.label}</Text>
                    </View>
                    <View style={styles.settingRight}>
                      {item.type === "navigation" && !!item.value && (
                        <Text style={styles.settingValue}>{item.value}</Text>
                      )}
                      {item.type === "toggle" && (
                        <Switch
                          value={item.isEnabled}
                          onValueChange={(value) =>
                            handleToggle(item.id, value)
                          }
                          trackColor={{ false: "#E0E0E0", true: "#FFD600" }}
                          thumbColor="#FFFFFF"
                        />
                      )}
                      {item.type === "navigation" && (
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          color="#9E9E9E"
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                  {itemIndex < section.items.length - 1 && (
                    <View style={styles.divider} />
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* Upgrade Banner */}
        <View style={styles.upgradeCard}>
          <View style={styles.upgradeContent}>
            <View style={styles.upgradeIcon}>
              <Ionicons name="star" size={24} color="#FFD600" />
            </View>
            <View style={styles.upgradeText}>
              <Text style={styles.upgradeTitle}>
                {t("profile.upgradeTitle")}
              </Text>
              <Text style={styles.upgradeSubtitle}>
                {t("profile.upgradeSubtitle")}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.upgradeButton}
            onPress={() => setShowSubscriptionPlans(true)}
          >
            <Text style={styles.upgradeButtonText}>
              {t("profile.upgradeButton")}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          disabled={isLoggingOut}
        >
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>
            {isLoggingOut ? t("common.loading") : t("auth.logout")}
          </Text>
        </TouchableOpacity>

        {/* Delete Account */}
        <TouchableOpacity
          style={styles.deleteAccountButton}
          onPress={() => setShowDeleteAccountConfirm(true)}
          disabled={isDeletingAccount}
        >
          <Ionicons name="trash-outline" size={20} color="#FF3B30" />
          <Text style={styles.deleteAccountText}>
            {isDeletingAccount
              ? t("common.loading")
              : t("profile.deleteAccount")}
          </Text>
        </TouchableOpacity>

        {/* Version */}
        <Text style={styles.versionText}>
          {t("profile.versionText", { version: "1.0.0" })}
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Credit Shop Modal */}
      <Modal
        visible={showCreditShop}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowCreditShop(false)}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowCreditShop(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <CreditShop />
        </View>
      </Modal>

      {/* Subscription Plans Modal */}
      <Modal
        visible={showSubscriptionPlans}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowSubscriptionPlans(false)}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowSubscriptionPlans(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <SubscriptionPlans />
        </View>
      </Modal>

      {/* Family Manager Modal */}
      <Modal
        visible={showFamilyManager}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowFamilyManager(false)}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowFamilyManager(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <FamilyManager />
        </View>
      </Modal>

      {/* Notification Settings Modal */}
      <Modal
        visible={showNotificationSettings}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowNotificationSettings(false)}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => setShowNotificationSettings(false)}
            >
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <NotificationSettings />
        </View>
      </Modal>

      {/* Settings Modal */}
      <Modal
        visible={showSettings}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowSettings(false)}
      >
        <SettingsScreen onBack={() => setShowSettings(false)} />
      </Modal>

      {/* Voice Settings Modal */}
      <Modal
        visible={showVoiceSettings}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowVoiceSettings(false)}
      >
        <VoiceSettingsScreen
          locale="en-US"
          onBack={() => setShowVoiceSettings(false)}
        />
      </Modal>

      {/* Language & Name Setup Modal */}
      <Modal
        visible={showLanguageSetup}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowLanguageSetup(false)}
      >
        <LanguageSetupScreen
          mode="settings"
          onBack={() => setShowLanguageSetup(false)}
          onDone={() => setShowLanguageSetup(false)}
        />
      </Modal>

      {/* Analytics Dashboard Modal */}
      <Modal
        visible={showAnalyticsDashboard}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowAnalyticsDashboard(false)}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowAnalyticsDashboard(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <AnalyticsDashboard />
        </View>
      </Modal>

      {/* My Saved Modal */}
      <Modal
        visible={showMySaved}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowMySaved(false)}
      >
        <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
          <View
            style={[
              styles.modalHeader,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#1C1C1E" }}>
              {t("profile.mySaved")}
            </Text>
            <TouchableOpacity onPress={() => setShowMySaved(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, padding: 20 }}>
            {savedPhrases.length === 0 ? (
              <View style={{ alignItems: "center", paddingTop: 60 }}>
                <Ionicons name="bookmark-outline" size={48} color="#CCC" />
                <Text style={{ fontSize: 16, color: "#999", marginTop: 12 }}>
                  {t("profile.noSaved")}
                </Text>
                <Text style={{ fontSize: 14, color: "#BBB", marginTop: 4 }}>
                  {t("profile.noSavedHint")}
                </Text>
              </View>
            ) : (
              savedPhrases.map((phrase) => (
                <View
                  key={phrase.id}
                  style={{
                    backgroundColor: "#FFF",
                    borderRadius: 12,
                    marginBottom: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 1,
                    overflow: "hidden",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setActiveSavedPractice(null);
                      setExpandedSavedId(
                        expandedSavedId === phrase.id ? null : phrase.id,
                      );
                    }}
                    style={{ padding: 16 }}
                    activeOpacity={0.7}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <View style={{ flex: 1, marginRight: 12 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 6,
                            marginBottom: 6,
                          }}
                        >
                          <View
                            style={{
                              backgroundColor:
                                phrase.level === "Advanced"
                                  ? "#FFF3E0"
                                  : "#E3F2FD",
                              paddingHorizontal: 8,
                              paddingVertical: 2,
                              borderRadius: 4,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 10,
                                fontWeight: "600",
                                color:
                                  phrase.level === "Advanced"
                                    ? "#E65100"
                                    : "#1976D2",
                              }}
                            >
                              {phrase.level}
                            </Text>
                          </View>
                          <Text style={{ fontSize: 10, color: "#9E9E9E" }}>
                            {phrase.contextLabel}
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: "#1C1C1E",
                            marginBottom: 4,
                          }}
                        >
                          {phrase.en}
                        </Text>
                        <Text style={{ fontSize: 14, color: "#666" }}>
                          {phrase.vi}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row", gap: 4 }}>
                        <TouchableOpacity
                          onPress={(e) => {
                            e.stopPropagation();
                            speak(phrase.en, {
                              accent: "en-US",
                              speed: "normal",
                            });
                          }}
                          style={{ padding: 8 }}
                        >
                          <Ionicons
                            name="volume-medium"
                            size={20}
                            color="#9E9E9E"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={(e) => {
                            e.stopPropagation();
                            removePhrase(phrase.id);
                          }}
                          style={{ padding: 8 }}
                        >
                          <Ionicons name="bookmark" size={20} color="#FFD600" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>

                  {expandedSavedId === phrase.id && (
                    <View
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: "#F0F0F0",
                        padding: 12,
                      }}
                    >
                      {activeSavedPractice?.phraseId === phrase.id ? (
                        activeSavedPractice.mode === "practice" ? (
                          <PracticeMode
                            phrase={phrase}
                            onClose={() => setActiveSavedPractice(null)}
                          />
                        ) : activeSavedPractice.mode === "dictation" ? (
                          <DictationMode
                            phrase={phrase}
                            onClose={() => setActiveSavedPractice(null)}
                          />
                        ) : (
                          <ShadowMode
                            phrase={phrase}
                            onClose={() => setActiveSavedPractice(null)}
                          />
                        )
                      ) : (
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 8,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              setActiveSavedPractice({
                                mode: "practice",
                                phraseId: phrase.id,
                              })
                            }
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 6,
                              paddingVertical: 10,
                              backgroundColor: "#E8F5E9",
                              borderRadius: 8,
                            }}
                          >
                            <Ionicons
                              name="book-outline"
                              size={16}
                              color="#2E7D32"
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: "#2E7D32",
                              }}
                            >
                              {t("profile.practiceMode.practice")}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              setActiveSavedPractice({
                                mode: "dictation",
                                phraseId: phrase.id,
                              })
                            }
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 6,
                              paddingVertical: 10,
                              backgroundColor: "#F3E5F5",
                              borderRadius: 8,
                            }}
                          >
                            <Ionicons
                              name="ear-outline"
                              size={16}
                              color="#7B1FA2"
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: "#7B1FA2",
                              }}
                            >
                              {t("profile.practiceMode.dictation")}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              setActiveSavedPractice({
                                mode: "shadow",
                                phraseId: phrase.id,
                              })
                            }
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 6,
                              paddingVertical: 10,
                              backgroundColor: "#FFF3E0",
                              borderRadius: 8,
                            }}
                          >
                            <Ionicons name="mic" size={16} color="#E65100" />
                            <Text
                              style={{
                                fontSize: 12,
                                fontWeight: "600",
                                color: "#E65100",
                              }}
                            >
                              {t("profile.practiceMode.shadow")}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              ))
            )}
            <View style={{ height: 40 }} />
          </ScrollView>
        </View>
      </Modal>

      {/* Edit Profile Modal */}
      <Modal
        visible={showEditProfile}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={() => setShowEditProfile(false)}
      >
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setShowEditProfile(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <EditProfileSimple />
        </View>
      </Modal>

      {/* Avatar Fullscreen Modal */}
      <Modal
        visible={showAvatarModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowAvatarModal(false)}
      >
        <View style={avatarModalStyles.overlay}>
          <TouchableOpacity
            style={avatarModalStyles.closeArea}
            onPress={() => setShowAvatarModal(false)}
          />
          <View style={avatarModalStyles.avatarContainer}>
            {userAvatar ? (
              <Image
                source={{ uri: userAvatar }}
                style={avatarModalStyles.avatarImage}
                resizeMode="cover"
              />
            ) : (
              <View style={avatarModalStyles.placeholder}>
                <Ionicons name="person" size={120} color="#FFD600" />
              </View>
            )}
          </View>
          <TouchableOpacity
            style={avatarModalStyles.closeButton}
            onPress={() => setShowAvatarModal(false)}
          >
            <Ionicons name="close-circle" size={40} color="#FFF" />
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Reset Onboarding Confirmation Modal */}
      <Modal
        visible={showResetConfirm}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowResetConfirm(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 16,
              padding: 24,
              width: "85%",
              maxWidth: 320,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#1C1C1E",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              {t("profile.resetTitle")}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 24,
                textAlign: "center",
                lineHeight: 22,
              }}
            >
              {t("profile.resetMessage")}
            </Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#F5F5F7",
                }}
                onPress={() => setShowResetConfirm(false)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#1C1C1E",
                    textAlign: "center",
                  }}
                >
                  {t("common.cancel")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#FF3B30",
                }}
                onPress={confirmResetOnboarding}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#FFF",
                    textAlign: "center",
                  }}
                >
                  {t("profile.reset")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal
        visible={showLogoutConfirm}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowLogoutConfirm(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 16,
              padding: 24,
              width: "85%",
              maxWidth: 320,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#1C1C1E",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              {t("auth.logout")}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 24,
                textAlign: "center",
                lineHeight: 22,
              }}
            >
              {t("auth.logoutConfirm")}
            </Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#F5F5F7",
                }}
                onPress={() => setShowLogoutConfirm(false)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#1C1C1E",
                    textAlign: "center",
                  }}
                >
                  {t("common.cancel")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#FF3B30",
                }}
                onPress={confirmLogout}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#FFF",
                    textAlign: "center",
                  }}
                >
                  {t("auth.logout")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* About Modal */}
      <Modal
        visible={showAbout}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowAbout(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 16,
              padding: 24,
              width: "85%",
              maxWidth: 320,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "700",
                color: "#1C1C1E",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              {t("profile.appName")}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 8,
                textAlign: "center",
              }}
            >
              {t("profile.version", { version: "1.0.0" })}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#999",
                marginBottom: 20,
                textAlign: "center",
                lineHeight: 20,
              }}
            >
              {t("profile.aboutDescription")}
            </Text>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#EEE",
                paddingTop: 16,
                marginBottom: 8,
              }}
            >
              <TouchableOpacity
                style={{ paddingVertical: 12, alignItems: "center" }}
                onPress={() => setShowAbout(false)}
              >
                <Text style={{ fontSize: 16, color: "#007AFF" }}>
                  {t("common.close")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Feedback Modal */}
      <Modal
        visible={showFeedback}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowFeedback(false)}
      >
        <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
          <View
            style={[
              styles.modalHeader,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#1C1C1E" }}>
              {t("profile.sendFeedback")}
            </Text>
            <TouchableOpacity onPress={() => setShowFeedback(false)}>
              <Ionicons name="close" size={28} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ flex: 1, padding: 20 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#666",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              {t("profile.feedbackIntro")}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#007AFF",
                paddingVertical: 14,
                borderRadius: 12,
                alignItems: "center",
              }}
              onPress={() => {
                // Would open email app - for now just close
                setShowFeedback(false);
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600", color: "#FFF" }}>
                {t("profile.supportEmail")}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                color: "#999",
                marginTop: 20,
                textAlign: "center",
              }}
            >
              {t("profile.feedbackThanks")}
            </Text>
          </ScrollView>
        </View>
      </Modal>

      {/* Delete Account Confirmation Modal */}
      <Modal
        visible={showDeleteAccountConfirm}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowDeleteAccountConfirm(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFF",
              borderRadius: 16,
              padding: 24,
              width: "85%",
              maxWidth: 320,
            }}
          >
            <View style={{ alignItems: "center", marginBottom: 16 }}>
              <Ionicons name="warning" size={40} color="#FF3B30" />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#1C1C1E",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              {t("profile.deleteAccountTitle")}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666",
                marginBottom: 24,
                textAlign: "center",
                lineHeight: 20,
              }}
            >
              {t("profile.deleteAccountMessage")}
            </Text>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#F5F5F7",
                }}
                onPress={() => setShowDeleteAccountConfirm(false)}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#1C1C1E",
                    textAlign: "center",
                  }}
                >
                  {t("common.cancel")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  paddingVertical: 14,
                  borderRadius: 12,
                  backgroundColor: "#FF3B30",
                }}
                onPress={confirmDeleteAccount}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#FFF",
                    textAlign: "center",
                  }}
                >
                  {t("profile.deleteAccountConfirm")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  headerYellow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#FFD600",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  headerBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF9E6",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfoCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    gap: 16,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 28,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  editIcon: {
    padding: 4,
  },
  userName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  userEmail: {
    fontSize: 14,
    color: "#9E9E9E",
    marginTop: 2,
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1E",
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: "#9E9E9E",
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#9E9E9E",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  settingsCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  settingIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: "#1C1C1E",
    flex: 1,
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginLeft: 60,
  },
  upgradeCard: {
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 20,
    backgroundColor: "#1C1C1E",
    borderRadius: 16,
  },
  upgradeContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  upgradeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(255, 214, 0, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  upgradeText: {
    flex: 1,
  },
  upgradeTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  upgradeSubtitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.7)",
    lineHeight: 18,
  },
  upgradeButton: {
    paddingVertical: 14,
    backgroundColor: "#FFD600",
    borderRadius: 12,
    alignItems: "center",
  },
  upgradeButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
  },
  deleteAccountButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#FFE0E0",
  },
  deleteAccountText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
  },
  versionText: {
    fontSize: 12,
    color: "#9E9E9E",
    textAlign: "center",
    marginBottom: 8,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
});

// Avatar Modal Styles
const avatarModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeArea: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  avatarContainer: {
    width: 280,
    height: 280,
    borderRadius: 140,
    overflow: "hidden",
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  avatarImage: {
    width: 280,
    height: 280,
    borderRadius: 140,
  },
  placeholder: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    bottom: 60,
    zIndex: 20,
  },
});
