import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore, FamilyMember } from "../stores/userStore";
import { useT } from "../lib/i18n";

export function FamilyManager() {
  const t = useT();
  const [inviteEmail, setInviteEmail] = useState("");
  const [isInviting, setIsInviting] = useState(false);

  const familyId = useUserStore((state) => state.familyId);
  const familyMembers = useUserStore((state) => state.familyMembers);
  const isAdmin = useUserStore((state) => state.isAdmin);
  const credits = useUserStore((state) => state.credits);
  const setFamily = useUserStore((state) => state.setFamily);
  const leaveFamily = useUserStore((state) => state.leaveFamily);

  const handleInviteMember = async () => {
    if (!inviteEmail.trim()) {
      Alert.alert(t("common.error"), t("family.enterEmail"));
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inviteEmail)) {
      Alert.alert(t("common.error"), t("family.validEmail"));
      return;
    }

    setIsInviting(true);

    // TODO: Call API to send invitation
    // For now, simulate invitation
    setTimeout(() => {
      Alert.alert(
        t("family.invitationSent"),
        t("family.invitationMessage").replace("{email}", inviteEmail),
        [
          {
            text: t("common.ok"),
            onPress: () => {
              setInviteEmail("");
              setIsInviting(false);
            },
          },
        ],
      );
    }, 1000);
  };

  const handleRemoveMember = (member: FamilyMember) => {
    if (!isAdmin) {
      Alert.alert(t("common.error"), t("family.adminOnly"));
      return;
    }

    Alert.alert(
      t("family.removeMember"),
      t("family.removeMessage").replace("{name}", member.name),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("common.remove"),
          style: "destructive",
          onPress: () => {
            // TODO: Call API to remove member
            const updatedMembers = familyMembers.filter(
              (m) => m.id !== member.id,
            );
            setFamily(familyId!, updatedMembers, isAdmin);
            Alert.alert(
              t("common.success"),
              t("family.memberRemoved").replace("{name}", member.name),
            );
          },
        },
      ],
    );
  };

  const handleLeaveFamily = () => {
    Alert.alert(t("family.leaveTitle"), t("family.leaveMessage"), [
      { text: t("common.cancel"), style: "cancel" },
      {
        text: t("family.leave"),
        style: "destructive",
        onPress: () => {
          leaveFamily();
          Alert.alert(t("common.success"), t("family.leftSuccess"));
        },
      },
    ]);
  };

  const totalCreditsUsed = familyMembers.reduce(
    (sum, member) => sum + member.creditsUsed,
    0,
  );
  const maxMembers = 5;
  const currentMembers = familyMembers.length;

  if (!familyId) {
    return (
      <View style={styles.container}>
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <Ionicons name="people-outline" size={64} color="#9E9E9E" />
          </View>
          <Text style={styles.emptyTitle}>{t("family.noPlan")}</Text>
          <Text style={styles.emptySubtitle}>
            {t("family.upgradeSubtitle")}
          </Text>
          <TouchableOpacity style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>
              {t("family.upgradeButton")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="people" size={32} color="#34C759" />
        </View>
        <Text style={styles.headerTitle}>{t("profile.familyPlan")}</Text>
        <Text style={styles.headerSubtitle}>
          {t("family.memberCount")
            .replace("{current}", currentMembers.toString())
            .replace("{max}", maxMembers.toString())}
        </Text>
      </View>

      {/* Shared Credits Pool */}
      <View style={styles.creditsCard}>
        <View style={styles.creditsHeader}>
          <View style={styles.creditsIcon}>
            <Ionicons name="diamond" size={24} color="#FFD600" />
          </View>
          <View style={styles.creditsInfo}>
            <Text style={styles.creditsLabel}>{t("family.sharedPool")}</Text>
            <Text style={styles.creditsValue}>
              {t("credits.points", { n: credits.toLocaleString() })}
            </Text>
          </View>
        </View>
        <View style={styles.creditsStats}>
          <View style={styles.creditsStat}>
            <Text style={styles.creditsStatLabel}>{t("family.totalUsed")}</Text>
            <Text style={styles.creditsStatValue}>
              {totalCreditsUsed.toLocaleString()}
            </Text>
          </View>
          <View style={styles.creditsStatDivider} />
          <View style={styles.creditsStat}>
            <Text style={styles.creditsStatLabel}>{t("family.available")}</Text>
            <Text style={styles.creditsStatValue}>
              {credits.toLocaleString()}
            </Text>
          </View>
        </View>
      </View>

      {/* Invite Member (Admin only) */}
      {isAdmin && currentMembers < maxMembers && (
        <View style={styles.inviteSection}>
          <Text style={styles.sectionTitle}>{t("family.inviteMember")}</Text>
          <View style={styles.inviteCard}>
            <TextInput
              style={styles.inviteInput}
              placeholder={t("family.emailPlaceholder")}
              placeholderTextColor="#9E9E9E"
              value={inviteEmail}
              onChangeText={setInviteEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={[
                styles.inviteButton,
                isInviting && styles.inviteButtonDisabled,
              ]}
              onPress={handleInviteMember}
              disabled={isInviting}
            >
              <Ionicons name="send" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.inviteHint}>{t("family.inviteHint")}</Text>
        </View>
      )}

      {/* Members List */}
      <View style={styles.membersSection}>
        <Text style={styles.sectionTitle}>{t("family.members")}</Text>
        <View style={styles.membersCard}>
          {familyMembers.map((member, index) => (
            <View key={member.id}>
              <View style={styles.memberRow}>
                <View style={styles.memberAvatar}>
                  <Ionicons
                    name={
                      member.role === "admin" ? "shield-checkmark" : "person"
                    }
                    size={24}
                    color={member.role === "admin" ? "#FFD600" : "#9E9E9E"}
                  />
                </View>
                <View style={styles.memberInfo}>
                  <View style={styles.memberNameRow}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    {member.role === "admin" && (
                      <View style={styles.adminBadge}>
                        <Text style={styles.adminBadgeText}>
                          {t("family.admin")}
                        </Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.memberEmail}>{member.email}</Text>
                  <Text style={styles.memberCredits}>
                    {t("family.creditsUsed", {
                      n: member.creditsUsed.toLocaleString(),
                    })}
                  </Text>
                </View>
                {isAdmin && member.role !== "admin" && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveMember(member)}
                  >
                    <Ionicons name="close-circle" size={24} color="#FF3B30" />
                  </TouchableOpacity>
                )}
              </View>
              {index < familyMembers.length - 1 && (
                <View style={styles.memberDivider} />
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Usage Breakdown */}
      <View style={styles.usageSection}>
        <Text style={styles.sectionTitle}>{t("family.creditUsage")}</Text>
        <View style={styles.usageCard}>
          {familyMembers.map((member) => {
            const percentage =
              totalCreditsUsed > 0
                ? (member.creditsUsed / totalCreditsUsed) * 100
                : 0;

            return (
              <View key={member.id} style={styles.usageRow}>
                <View style={styles.usageInfo}>
                  <Text style={styles.usageName}>{member.name}</Text>
                  <Text style={styles.usageCredits}>
                    {t("credits.points", {
                      n: member.creditsUsed.toLocaleString(),
                    })}
                  </Text>
                </View>
                <View style={styles.usageBarContainer}>
                  <View style={styles.usageBarBackground}>
                    <View
                      style={[styles.usageBarFill, { width: `${percentage}%` }]}
                    />
                  </View>
                  <Text style={styles.usagePercentage}>
                    {percentage.toFixed(0)}%
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Leave Family (Non-admin) */}
      {!isAdmin && (
        <TouchableOpacity
          style={styles.leaveButton}
          onPress={handleLeaveFamily}
        >
          <Ionicons name="exit-outline" size={20} color="#FF3B30" />
          <Text style={styles.leaveButtonText}>{t("family.leaveTitle")}</Text>
        </TouchableOpacity>
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
    backgroundColor: "#E8F5E9",
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
  creditsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  creditsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  creditsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFF9E6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  creditsInfo: {
    flex: 1,
  },
  creditsLabel: {
    fontSize: 12,
    color: "#9E9E9E",
    marginBottom: 4,
  },
  creditsValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  creditsStats: {
    flexDirection: "row",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#F3F3F5",
  },
  creditsStat: {
    flex: 1,
    alignItems: "center",
  },
  creditsStatLabel: {
    fontSize: 12,
    color: "#9E9E9E",
    marginBottom: 4,
  },
  creditsStatValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  creditsStatDivider: {
    width: 1,
    backgroundColor: "#F3F3F5",
  },
  inviteSection: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  inviteCard: {
    flexDirection: "row",
    gap: 12,
  },
  inviteInput: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1C1C1E",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inviteButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#34C759",
    alignItems: "center",
    justifyContent: "center",
  },
  inviteButtonDisabled: {
    opacity: 0.5,
  },
  inviteHint: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 8,
  },
  membersSection: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  membersCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  memberRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  memberInfo: {
    flex: 1,
  },
  memberNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  adminBadge: {
    backgroundColor: "#FFD600",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  adminBadgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  memberEmail: {
    fontSize: 14,
    color: "#9E9E9E",
    marginBottom: 4,
  },
  memberCredits: {
    fontSize: 12,
    color: "#666",
  },
  removeButton: {
    padding: 8,
  },
  memberDivider: {
    height: 1,
    backgroundColor: "#F3F3F5",
    marginLeft: 60,
  },
  usageSection: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  usageCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    gap: 16,
  },
  usageRow: {
    gap: 8,
  },
  usageInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  usageName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  usageCredits: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  usageBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  usageBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#F3F3F5",
    borderRadius: 4,
    overflow: "hidden",
  },
  usageBarFill: {
    height: "100%",
    backgroundColor: "#34C759",
    borderRadius: 4,
  },
  usagePercentage: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    width: 40,
    textAlign: "right",
  },
  leaveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  leaveButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF3B30",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingTop: 100,
  },
  emptyIcon: {
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#9E9E9E",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  upgradeButton: {
    backgroundColor: "#34C759",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
  },
  upgradeButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
