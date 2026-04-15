import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Clipboard,
  Alert,
  Share,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "https://talkbuddy.wayjet.io";
const REFERRAL_REWARD_DAYS = {
  inviterTrialDays: 7,
  inviteeTrialDays: 3,
};

interface ReferralStats {
  activatedCount: number;
  paidCount: number;
  totalBonusDays: number;
  maxBonusDays: number;
}

export function InviteFriends() {
  const t = useT();
  const user = useUserStore((state) => state.user);
  const [code, setCode] = useState<string | null>(null);
  const [stats, setStats] = useState<ReferralStats | null>(null);
  const [copyCodeStatus, setCopyCodeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [copyLinkStatus, setCopyLinkStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [loading, setLoading] = useState(false);
  const [applyCode, setApplyCode] = useState("");
  const [applyError, setApplyError] = useState("");
  const [applySuccess, setApplySuccess] = useState(false);
  const [applyTrialDays, setApplyTrialDays] = useState(0);

  // Fetch user's referral code and stats
  const fetchReferralData = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/referral`, {
        headers: {
          Authorization: `Bearer ${user?.token || ""}`,
        },
      });
      if (!res.ok) return;
      const json = await res.json();
      if (json.success) {
        setCode(json.data.code);
        setStats({
          activatedCount: json.data.activatedCount,
          paidCount: json.data.paidCount,
          totalBonusDays: json.data.totalBonusDays,
          maxBonusDays: json.data.maxBonusDays,
        });
      }
    } catch {
      // Silently fail - referral is not critical
    }
  }, [user?.token]);

  useEffect(() => {
    fetchReferralData();
  }, [fetchReferralData]);

  // Generate code locally if API fails - minimum 8 characters
  const generateLocalCode = useCallback(() => {
    if (!code && user?.id) {
      // Generate code from user ID: TB + at least 6 chars = minimum 8 characters total
      const shortId = user.id.slice(-6).toUpperCase();
      // Pad with random chars if less than 6 chars
      const paddedId =
        shortId.length >= 6
          ? shortId
          : shortId + "X".repeat(6 - shortId.length);
      return `TB${paddedId}`;
    }
    return code;
  }, [code, user?.id]);

  // Copy referral code to clipboard
  const handleCopyCode = useCallback(async () => {
    const codeToCopy = code || generateLocalCode();
    if (!codeToCopy) return;
    try {
      await Clipboard.setString(codeToCopy);
      setCopyCodeStatus("success");
      setTimeout(() => setCopyCodeStatus("idle"), 2000);
    } catch {
      setCopyCodeStatus("error");
      setTimeout(() => setCopyCodeStatus("idle"), 2000);
    }
  }, [code, generateLocalCode]);

  // Copy referral link to clipboard
  const handleCopyLink = useCallback(async () => {
    const codeToShare = code || generateLocalCode();
    if (!codeToShare) return;
    try {
      const shareUrl = `https://talkbuddy.wayjet.io/ref/${codeToShare}`;
      await Clipboard.setString(shareUrl);
      setCopyLinkStatus("success");
      setTimeout(() => setCopyLinkStatus("idle"), 2000);
    } catch {
      setCopyLinkStatus("error");
      setTimeout(() => setCopyLinkStatus("idle"), 2000);
    }
  }, [code, generateLocalCode]);

  // Share referral link
  const handleShare = useCallback(async () => {
    const codeToShare = code || generateLocalCode();
    if (!codeToShare) return;
    const shareUrl = `https://talkbuddy.wayjet.io/ref/${codeToShare}`;
    const shareMessage = `🎉 使用我的邀请码 "${codeToShare}" 注册 TalkBuddy，获得 ${REFERRAL_REWARD_DAYS.inviteeTrialDays} 天免费 Pro！\n\n${shareUrl}`;
    try {
      // Try native Share API first (works on native apps)
      await Share.share({
        message: shareMessage,
        title: t("invite.shareTitle"),
      });
    } catch {
      // Fallback for web: copy to clipboard
      try {
        await Clipboard.setString(shareUrl);
        Alert.alert(
          t("common.success"),
          t("profile.linkCopied") || "Link copied to clipboard!",
        );
      } catch {
        Alert.alert(
          t("common.error"),
          t("profile.shareError") || "Failed to share",
        );
      }
    }
  }, [code, generateLocalCode]);

  // Apply someone else's referral code
  const handleApply = useCallback(async () => {
    if (!applyCode.trim()) return;
    setLoading(true);
    setApplyError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/referral`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token || ""}`,
        },
        body: JSON.stringify({ code: applyCode.trim().toUpperCase() }),
      });
      const json = await res.json();
      if (json.success) {
        setApplySuccess(true);
        setApplyTrialDays(
          json.data.trialDays || REFERRAL_REWARD_DAYS.inviteeTrialDays,
        );
        setApplyCode("");
      } else {
        setApplyError(json.error?.message || t("invite.applyError"));
      }
    } catch {
      setApplyError(t("common.networkError"));
    } finally {
      setLoading(false);
    }
  }, [applyCode, user?.token]);

  const displayCode = code || generateLocalCode();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="people" size={20} color="#6366F1" />
          <Text style={styles.title}>{t("invite.title")}</Text>
        </View>

        <Text style={styles.subtitle}>{t("invite.subtitle")}</Text>

        {/* My Referral Code */}
        <View style={styles.codeSection}>
          <Text style={styles.codeLabel}>{t("invite.myCode")}</Text>
          <View style={styles.codeRow}>
            <View style={styles.codeBox}>
              <Text style={styles.codeText}>
                {displayCode || t("common.loading")}
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.actionButton,
                copyCodeStatus === "success" && styles.actionButtonSuccess,
                copyCodeStatus === "error" && styles.actionButtonError,
              ]}
              onPress={handleCopyCode}
              disabled={!displayCode || copyCodeStatus !== "idle"}
            >
              <Ionicons
                name={
                  copyCodeStatus === "success"
                    ? "checkmark"
                    : copyCodeStatus === "error"
                      ? "close"
                      : "copy-outline"
                }
                size={20}
                color={
                  copyCodeStatus === "success"
                    ? "#22C55E"
                    : copyCodeStatus === "error"
                      ? "#FF3B30"
                      : "#1C1C1E"
                }
              />
            </TouchableOpacity>
          </View>

          {/* Copy Link Row */}
          <View style={styles.linkRow}>
            <TouchableOpacity
              style={[
                styles.linkButton,
                copyLinkStatus === "success" && styles.linkButtonSuccess,
                copyLinkStatus === "error" && styles.linkButtonError,
              ]}
              onPress={handleCopyLink}
              disabled={!displayCode || copyLinkStatus !== "idle"}
            >
              <Ionicons
                name={
                  copyLinkStatus === "success"
                    ? "checkmark-circle"
                    : copyLinkStatus === "error"
                      ? "alert-circle"
                      : "link"
                }
                size={18}
                color={
                  copyLinkStatus === "success"
                    ? "#22C55E"
                    : copyLinkStatus === "error"
                      ? "#FF3B30"
                      : "#6366F1"
                }
              />
              <Text
                style={[
                  styles.linkButtonText,
                  copyLinkStatus === "success" && styles.linkButtonTextSuccess,
                  copyLinkStatus === "error" && styles.linkButtonTextError,
                ]}
              >
                {copyLinkStatus === "success"
                  ? t("invite.copied")
                  : copyLinkStatus === "error"
                    ? t("invite.copyFailed")
                    : t("invite.copyLink")}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.shareButtonSmall}
              onPress={handleShare}
              disabled={!displayCode}
            >
              <Ionicons name="share-outline" size={20} color="#1C1C1E" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        {stats && (stats.activatedCount > 0 || stats.paidCount > 0) && (
          <View style={styles.statsCard}>
            <View style={styles.statRow}>
              <View style={styles.statItem}>
                <Ionicons name="person-add" size={16} color="#6366F1" />
                <Text style={styles.statText}>
                  {t("invite.friends", { n: stats.activatedCount })}
                </Text>
              </View>
              {stats.paidCount > 0 && (
                <View style={styles.statItem}>
                  <Text style={[styles.statText, { color: "#22C55E" }]}>
                    {t("invite.upgraded", { n: stats.paidCount })}
                  </Text>
                </View>
              )}
            </View>
            {stats.totalBonusDays > 0 && (
              <View style={styles.bonusRow}>
                <Ionicons name="gift" size={16} color="#22C55E" />
                <Text style={styles.bonusText}>
                  {t("invite.earned", { n: stats.totalBonusDays })}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Apply Code Section */}
        {!applySuccess && (
          <View style={styles.applySection}>
            <View style={styles.divider} />
            <Text style={styles.applyLabel}>{t("invite.applyCode")}</Text>
            <View style={styles.applyRow}>
              <TextInput
                style={styles.applyInput}
                value={applyCode}
                onChangeText={setApplyCode}
                placeholder={t("invite.applyCodePlaceholder")}
                maxLength={20}
                autoCapitalize="characters"
                editable={!loading}
              />
              <TouchableOpacity
                style={[
                  styles.applyButton,
                  (!applyCode.trim() || loading) && styles.applyButtonDisabled,
                ]}
                onPress={handleApply}
                disabled={!applyCode.trim() || loading}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#FFF" />
                ) : (
                  <Text style={styles.applyButtonText}>
                    {t("invite.apply")}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {applyError ? (
              <Text style={styles.errorText}>{applyError}</Text>
            ) : null}
          </View>
        )}

        {/* Success Message */}
        {applySuccess && (
          <View style={styles.successCard}>
            <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
            <Text style={styles.successText}>
              {t("invite.applySuccess").replace(
                "{n}",
                applyTrialDays.toString(),
              )}
            </Text>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    lineHeight: 18,
    marginBottom: 16,
  },
  codeSection: {
    gap: 6,
  },
  codeLabel: {
    fontSize: 12,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  codeRow: {
    flexDirection: "row",
    gap: 8,
  },
  codeBox: {
    flex: 1,
    backgroundColor: "#F3F3F5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  codeText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
    letterSpacing: 1,
    fontVariant: ["tabular-nums"],
  },
  actionButton: {
    width: 48,
    height: 48,
    backgroundColor: "#F3F3F5",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonSuccess: {
    backgroundColor: "#F0FDF4",
  },
  actionButtonError: {
    backgroundColor: "#FEF2F2",
  },
  linkRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  linkButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 44,
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
  },
  linkButtonSuccess: {
    backgroundColor: "#F0FDF4",
  },
  linkButtonError: {
    backgroundColor: "#FEF2F2",
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6366F1",
  },
  linkButtonTextSuccess: {
    color: "#22C55E",
  },
  linkButtonTextError: {
    color: "#FF3B30",
  },
  shareButtonSmall: {
    width: 44,
    height: 44,
    backgroundColor: "#FFD600",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  shareButton: {
    width: 48,
    height: 48,
    backgroundColor: "#FFD600",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  statsCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    gap: 8,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    fontSize: 13,
    color: "#6366F1",
    fontWeight: "500",
  },
  bonusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#DDD6FE",
  },
  bonusText: {
    fontSize: 13,
    color: "#22C55E",
    fontWeight: "600",
  },
  applySection: {
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginBottom: 16,
  },
  applyLabel: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
  },
  applyRow: {
    flexDirection: "row",
    gap: 8,
  },
  applyInput: {
    flex: 1,
    height: 48,
    backgroundColor: "#F3F3F5",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#1C1C1E",
    fontWeight: "500",
  },
  applyButton: {
    height: 48,
    paddingHorizontal: 20,
    backgroundColor: "#6366F1",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  applyButtonDisabled: {
    backgroundColor: "#C7C7CC",
  },
  applyButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFF",
  },
  errorText: {
    fontSize: 12,
    color: "#FF3B30",
    marginTop: 6,
  },
  successCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
  },
  successText: {
    fontSize: 13,
    color: "#166534",
    fontWeight: "500",
    flex: 1,
  },
});
