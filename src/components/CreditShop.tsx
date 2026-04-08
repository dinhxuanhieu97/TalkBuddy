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
import { useT } from "../lib/i18n";

interface CreditPack {
  id: string;
  name: string;
  credits: number;
  price: number;
  currency: string;
  unitPrice: number;
  popular?: boolean;
}

const CREDIT_PACKS: CreditPack[] = [
  {
    id: "starter",
    name: "Starter Pack",
    credits: 50,
    price: 0.99,
    currency: "USD",
    unitPrice: 0.02,
  },
  {
    id: "standard",
    name: "Standard Pack",
    credits: 200,
    price: 3.59,
    currency: "USD",
    unitPrice: 0.018,
    popular: true,
  },
  {
    id: "value",
    name: "Value Pack",
    credits: 500,
    price: 7.99,
    currency: "USD",
    unitPrice: 0.016,
  },
  {
    id: "premium",
    name: "Premium Pack",
    credits: 1000,
    price: 14.99,
    currency: "USD",
    unitPrice: 0.015,
  },
];

export function CreditShop() {
  const t = useT();
  const addCredits = useUserStore((state) => state.addCredits);
  const currentCredits = useUserStore((state) => state.credits);

  const handlePurchase = (pack: CreditPack) => {
    // TODO: Integrate with actual payment system (Stripe/RevenueCat)
    Alert.alert(
      t("credits.purchaseTitle"),
      t("credits.purchaseMessage")
        .replace("{credits}", pack.credits.toString())
        .replace("{price}", pack.price.toFixed(2)),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("credits.buy"),
          onPress: () => {
            // Simulate successful purchase
            addCredits(pack.credits);
            Alert.alert(
              t("credits.success"),
              t("credits.added").replace("{n}", pack.credits.toString()),
            );
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="diamond" size={32} color="#FFD600" />
        </View>
        <Text style={styles.headerTitle}>{t("credits.buyTitle")}</Text>
        <Text style={styles.headerSubtitle}>
          {t("credits.currentBalance").replace(
            "{n}",
            currentCredits.toLocaleString(),
          )}
        </Text>
      </View>

      {/* Credit Packs */}
      <ScrollView
        style={styles.packsContainer}
        showsVerticalScrollIndicator={false}
      >
        {CREDIT_PACKS.map((pack) => (
          <TouchableOpacity
            key={pack.id}
            style={[styles.packCard, pack.popular && styles.packCardPopular]}
            onPress={() => handlePurchase(pack)}
            activeOpacity={0.7}
          >
            {pack.popular && (
              <View style={styles.popularBadge}>
                <Ionicons name="star" size={12} color="#FFD600" />
                <Text style={styles.popularText}>{t("credits.popular")}</Text>
              </View>
            )}

            <View style={styles.packHeader}>
              <Text style={styles.packName}>{pack.name}</Text>
              <View style={styles.creditsContainer}>
                <Ionicons name="diamond" size={20} color="#FFD600" />
                <Text style={styles.creditsAmount}>{pack.credits}</Text>
              </View>
            </View>

            <View style={styles.packDetails}>
              <Text style={styles.unitPrice}>
                {t("credits.perCredit").replace(
                  "{price}",
                  pack.unitPrice.toFixed(3),
                )}
              </Text>
              <Text style={styles.savings}>
                {pack.id === "starter"
                  ? t("credits.bestForTrying")
                  : pack.id === "standard"
                    ? t("credits.save10")
                    : pack.id === "value"
                      ? t("credits.save20")
                      : t("credits.save25")}
              </Text>
            </View>

            <View style={styles.packFooter}>
              <Text style={styles.price}>
                ${pack.price.toFixed(2)} {pack.currency}
              </Text>
              <View style={styles.buyButton}>
                <Text style={styles.buyButtonText}>{t("credits.buyNow")}</Text>
                <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <Ionicons name="checkmark-circle" size={20} color="#34C759" />
          <Text style={styles.infoText}>{t("credits.neverExpire")}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="checkmark-circle" size={20} color="#34C759" />
          <Text style={styles.infoText}>{t("credits.useForAI")}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="checkmark-circle" size={20} color="#34C759" />
          <Text style={styles.infoText}>{t("credits.securePayment")}</Text>
        </View>
      </View>
    </View>
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
    backgroundColor: "#1C1C1E",
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
  packsContainer: {
    flex: 1,
    padding: 20,
  },
  packCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  packCardPopular: {
    borderColor: "#FFD600",
    borderWidth: 2,
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
  packHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  packName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#FFF9E6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  creditsAmount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  packDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F3F5",
  },
  unitPrice: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  savings: {
    fontSize: 12,
    fontWeight: "600",
    color: "#34C759",
  },
  packFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  buyButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#1C1C1E",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buyButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  infoSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
  },
});
