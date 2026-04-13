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
import { purchaseSubscription } from "../lib/revenuecat";

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

const PLANS: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    features: [
      "First 3 phrases per category",
      "Basic difficulty only",
      "No AI features",
      "No cloud sync",
      "30 saved phrases",
    ],
    color: "#9E9E9E",
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 2.99, yearly: 22.99 },
    features: [
      "All 650+ phrases",
      "Basic + Intermediate",
      "AI features (with credits)",
      "Cloud sync",
      "500 saved phrases",
      "Ad-free experience",
    ],
    popular: true,
    color: "#FFD600",
  },
  {
    id: "family",
    name: "Family",
    price: { monthly: 6.99, yearly: 52.99 },
    features: [
      "Everything in Pro",
      "Up to 5 family members",
      "Shared credit pool",
      "Advanced analytics",
      "Role-based voices",
      "Unlimited saved phrases",
    ],
    color: "#34C759",
  },
];

export function SubscriptionPlans() {
  const subscription = useUserStore((state) => state.subscription);
  const setSubscription = useUserStore((state) => state.setSubscription);

  const handleSubscribe = async (planId: string, isYearly: boolean) => {
    if (planId === "free") {
      setSubscription("free");
      Alert.alert("Success", "Switched to Free plan");
      return;
    }

    const packageId = isYearly ? `${planId}_yearly` : `${planId}_monthly`;

    Alert.alert("Subscribe", `Subscribe to ${planId.toUpperCase()} plan?`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "Subscribe",
        onPress: async () => {
          const result = await purchaseSubscription(packageId);
          if (result) {
            setSubscription(planId as any);
            Alert.alert(
              "Success!",
              `You are now subscribed to ${planId.toUpperCase()}`,
            );
          } else {
            Alert.alert("Error", "Failed to process subscription");
          }
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose Your Plan</Text>
        <Text style={styles.headerSubtitle}>
          Unlock premium features and AI-powered learning
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
                  <Text style={styles.popularText}>MOST POPULAR</Text>
                </View>
              )}

              {isCurrentPlan && (
                <View style={styles.currentBadge}>
                  <Ionicons name="checkmark-circle" size={16} color="#34C759" />
                  <Text style={styles.currentText}>Current Plan</Text>
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
                  <Text style={styles.pricePeriod}>/month</Text>
                </View>
                {plan.price.yearly > 0 && (
                  <Text style={styles.yearlyPrice}>
                    or ${plan.price.yearly.toFixed(2)}/year (Save{" "}
                    {Math.round(
                      ((plan.price.monthly * 12 - plan.price.yearly) /
                        (plan.price.monthly * 12)) *
                        100,
                    )}
                    %)
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
                        <Text style={styles.subscribeButtonText}>Monthly</Text>
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
                          Yearly
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
                        Downgrade
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
        <Text style={styles.infoTitle}>Subscription Details</Text>
        <Text style={styles.infoText}>
          • Subscriptions auto-renew unless canceled{"\n"}• Cancel anytime from
          your account settings{"\n"}• Credits are separate and never expire
          {"\n"}• Family plan shares credits among members
        </Text>
      </View>
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
});
