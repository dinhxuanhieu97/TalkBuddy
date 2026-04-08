import { Purchases } from "@revenuecat/purchases-capacitor";
import { Capacitor } from "@capacitor/core";

const getApiKey = () => {
  const platform = Capacitor.getPlatform();
  if (platform === "ios") {
    return process.env.VITE_REVENUECAT_IOS_KEY || "";
  }
  return process.env.VITE_REVENUECAT_ANDROID_KEY || "";
};

export const initRevenueCat = async () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("RevenueCat API key not configured");
    return;
  }

  try {
    await Purchases.configure({ apiKey });
    console.log("RevenueCat initialized");
  } catch (error) {
    console.error("Failed to initialize RevenueCat:", error);
  }
};

export const getCustomerInfo = async () => {
  try {
    const info = await Purchases.getCustomerInfo();
    return info;
  } catch (error) {
    console.error("Failed to get customer info:", error);
    return null;
  }
};

export const getOfferings = async () => {
  try {
    const offerings = await Purchases.getOfferings();
    return offerings;
  } catch (error) {
    console.error("Failed to get offerings:", error);
    return null;
  }
};

export const purchasePackage = async (packageId: string) => {
  try {
    const offerings = await Purchases.getOfferings();
    if (!offerings || !offerings.current) {
      console.error("No offerings available");
      return null;
    }

    const pkg = offerings.current.availablePackages.find(
      (p: any) => p.identifier === packageId,
    );

    if (!pkg) {
      console.error(`Package ${packageId} not found`);
      return null;
    }

    const result = await Purchases.purchasePackage({ aPackage: pkg });
    return result.customerInfo;
  } catch (error) {
    console.error("Purchase failed:", error);
    return null;
  }
};

export const checkSubscriptionStatus = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo();
    const entitlements = customerInfo.customerInfo.entitlements.active;

    return {
      isPro: "pro" in entitlements,
      isFamily: "family" in entitlements,
      isFree: Object.keys(entitlements).length === 0,
    };
  } catch (error) {
    console.error("Failed to check subscription:", error);
    return { isPro: false, isFamily: false, isFree: true };
  }
};

export const restorePurchases = async () => {
  try {
    const result = await Purchases.restorePurchases();
    return result;
  } catch (error) {
    console.error("Restore purchases failed:", error);
    return null;
  }
};

export default {
  initRevenueCat,
  getCustomerInfo,
  getOfferings,
  purchasePackage,
  restorePurchases,
};
