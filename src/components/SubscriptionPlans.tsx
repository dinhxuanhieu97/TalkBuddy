import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "../stores/userStore";
import { purchaseSubscription, restorePurchases } from "../lib/revenuecat";
import { useT } from "../lib/i18n";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  popular?: boolean;
  color: string;
}

export function SubscriptionPlans() {
  const t = useT();
  const subscription = useUserStore((state) => state.subscription);
  const setSubscription = useUserStore((state) => state.setSubscription);

  const PLANS: SubscriptionPlan[] = [
    {
      id: "free",
      name: t("subscription.planFree"),
      price: { monthly: 0, yearly: 0 },
      features: [
        t("subscription.featureLimitedPhrases"),
        t("subscription.featureBasicDifficulty"),
        t("subscription.featureNoAI"),
        t("subscription.featureNoSync"),
        t("subscription.featureSavedPhrases30"),
      ],
      color: "#9E9E9E",
    },
    {
      id: "pro",
      name: t("subscription.planPro"),
      price: { monthly: 2.99, yearly: 22.99 },
      features: [
        t("subscription.featureAllPhrases"),
        t("subscription.featureIntermediateDifficulty"),
        t("subscription.featureAI"),
        t("subscription.featureSync"),
        t("subscription.featureSavedPhrases500"),
        t("subscription.featureAdFree"),
      ],
      popular: true,
      color: "#FFD600",
    },
    {
      id: "family",
      name: t("subscription.planFamily"),
      price: { monthly: 6.99, yearly: 52.99 },
      features: [
        t("subscription.featureProAll"),
        t("subscription.featureFamilyMembers"),
        t("subscription.featureSharedCredits"),
        t("subscription.featureAnalytics"),
        t("subscription.featureRoleVoices"),
        t("subscription.featureUnlimitedSaved"),
      ],
      color: "#34C759",
    },
  ];

  const handleSubscribe = async (planId: string, isYearly: boolean) => {
    if (planId === "free") {
      setSubscription("free");
      Alert.alert(t("subscription.success"), t("subscription.success"));
      return;
    }

    const packageId = isYearly ? `${planId}_yearly` : `${planId}_monthly`;

    Alert.alert(
      t("subscription.monthly"),
      t("subscription.subscribe", { planId: planId.toUpperCase() }),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("subscription.monthly"),
          onPress: async () => {
            const result = await purchaseSubscription(packageId);
            if (result) {
              setSubscription(planId as any);
              Alert.alert(
                t("subscription.success"),
                t("subscription.subscribed", { planId: planId.toUpperCase() }),
              );
            } else {
              Alert.alert(t("common.error"), t("subscription.error"));
            }
          },
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("subscription.choosePlan")}</Text>
        <Text style={styles.headerSubtitle}>
          {t("subscription.unlockFeatures")}
        </Text>
      </View>

      {/* Plans */}
      <View style={styles.plansContainer}>
        {PLANS.map((plan) => {
          const isCurrentPlan = subscription === plan.id;

          return (
            <View
              key={plan.id}
              style={[
                styles.planCard,
                plan.popular && styles.planCardPopular,
                isCurrentPlan && styles.planCardActive,
              ]}
            >
              {plan.popular && (
                <View style={styles.popularBadge}>
                  <Ionicons name="star" size={12} color="#FFD600" />
                  <Text style={styles.popularText}>
                    {t("subscription.mostPopular")}
                  </Text>
                </View>
              )}

              {isCurrentPlan && (
                <View style={styles.currentBadge}>
                  <Ionicons name="checkmark-circle" size={16} color="#34C759" />
                  <Text style={styles.currentText}>
                    {t("subscription.currentPlan")}
                  </Text>
                </View>
              )}

              {/* Plan Header */}
              <View style={styles.planHeader}>
                <View
                  style={[styles.planIcon, { backgroundColor: plan.color }]}
                >
                  <Ionicons
                    name={
                      plan.id === "free"
                        ? "gift"
                        : plan.id === "pro"
                          ? "star"
                          : "people"
                    }
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
                <Text style={styles.planName}>{plan.name}</Text>
              </View>

              {/* Pricing */}
              <View style={styles.pricingContainer}>
                <View style={styles.priceRow}>
                  <Text style={styles.priceAmount}>
                    ${plan.price.monthly.toFixed(2)}
                  </Text>
                  <Text style={styles.pricePeriod}>
                    {t("subscription.month")}
                  </Text>
                </View>
                {plan.price.yearly > 0 && (
                  <Text style={styles.yearlyPrice}>
                    {t("subscription.yearlyPrice", {
                      price: plan.price.yearly.toFixed(2),
                    })}
                  </Text>
                )}
              </View>

              {/* Features */}
              <View style={styles.featuresContainer}>
                {plan.features.map((feature, index) => (
                  <View key={index} style={styles.featureRow}>
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color={plan.color}
                    />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>

              {/* Action Buttons */}
              {!isCurrentPlan && (
                <View style={styles.actionButtons}>
                  {plan.id !== "free" && (
                    <>
                      <TouchableOpacity
                        style={[
                          styles.subscribeButton,
                          { backgroundColor: plan.color },
                        ]}
                        onPress={() => handleSubscribe(plan.id, false)}
                      >
                        <Text style={styles.subscribeButtonText}>
                          {t("subscription.monthly")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.subscribeButton,
                          styles.subscribeButtonOutline,
                          { borderColor: plan.color },
                        ]}
                        onPress={() => handleSubscribe(plan.id, true)}
                      >
                        <Text
                          style={[
                            styles.subscribeButtonText,
                            { color: plan.color },
                          ]}
                        >
                          {t("subscription.yearly")}
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                  {plan.id === "free" && subscription !== "free" && (
                    <TouchableOpacity
                      style={[
                        styles.subscribeButton,
                        styles.subscribeButtonOutline,
                      ]}
                      onPress={() => handleSubscribe("free", false)}
                    >
                      <Text
                        style={[
                          styles.subscribeButtonText,
                          { color: "#9E9E9E" },
                        ]}
                      >
                        {t("subscription.downgrade")}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </View>

      {/* Info */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>{t("subscription.infoTitle")}</Text>
        <Text style={styles.infoText}>
          • {t("subscription.autoRenew")}
          {"\n"}• {t("subscription.cancelAnytime")}
          {"\n"}• {t("subscription.creditsNeverExpire")}
          {"\n"}• {t("subscription.familyShared")}
        </Text>
      </View>

      {/* Restore Purchases */}
      <TouchableOpacity
        style={styles.restoreButton}
        onPress={async () => {
          Alert.alert(t("subscription.restore"), t("subscription.restoring"));
          const result = await restorePurchases();
          if (result) {
            setSubscription("pro");
            Alert.alert(t("subscription.success"), t("subscription.restored"));
          } else {
            Alert.alert(
              t("subscription.noPurchases"),
              t("subscription.noPurchasesDesc"),
            );
          }
        }}
      >
        <Text style={styles.restoreButtonText}>
          {t("subscription.restorePurchases")}
        </Text>
      </TouchableOpacity>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9E9E9E",
    textAlign: "center",
    paddingHorizontal: 40,
  },
  plansContainer: {
    padding: 20,
    gap: 16,
  },
  planCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  planCardPopular: {
    borderColor: "#FFD600",
  },
  planCardActive: {
    borderColor: "#34C759",
    backgroundColor: "#F0FFF4",
  },
  popularBadge: {
    position: "absolute",
    top: -10,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#FFD600",
  },
  currentBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  currentText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#34C759",
  },
  planHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  planIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  planName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  pricingContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F3F5",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 4,
  },
  priceAmount: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  pricePeriod: {
    fontSize: 16,
    color: "#9E9E9E",
    marginLeft: 4,
  },
  yearlyPrice: {
    fontSize: 12,
    color: "#34C759",
    fontWeight: "600",
  },
  featuresContainer: {
    gap: 12,
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  featureText: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  subscribeButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  subscribeButtonOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
  },
  subscribeButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  infoSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
  restoreButton: {
    backgroundColor: "#34C759",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 40,
  },
  restoreButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
