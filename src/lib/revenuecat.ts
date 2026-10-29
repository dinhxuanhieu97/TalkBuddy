// Payments stub - Stripe integration pending
// To enable subscriptions:
// 1. Install: npm install @stripe/stripe-react-native
// 2. Add VITE_STRIPE_PUBLISHABLE_KEY to .env
// 3. Configure backend with Stripe secret key

export const initPayments = async () => {
  console.warn("Stripe not configured");
};

export const getSubscriptionStatus = async () => {
  return { isPro: false, isFree: true };
};

export const purchaseSubscription = async (_priceId: string) => {
  console.warn("Purchases not available - Stripe not configured");
  return null;
};

export const restorePurchases = async () => {
  return null;
};

export default {
  initPayments,
  getSubscriptionStatus,
  purchaseSubscription,
  restorePurchases,
};
