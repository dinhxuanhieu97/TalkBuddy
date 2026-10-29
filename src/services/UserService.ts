import AsyncStorage from "@react-native-async-storage/async-storage";

export interface User {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
  locale: string;
  accent: string;
  speed: string;
  subscription_tier: string;
}

export type UserInsert = Partial<User>;
export type UserUpdate = Partial<User>;

const USER_STORAGE_KEY = "talkbuddy_user";

export class UserService {
  // Get user from local storage
  static async getUser(userId: string): Promise<User | null> {
    try {
      const data = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (data) {
        const user = JSON.parse(data);
        return user.id === userId ? user : null;
      }
      return null;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  // Create or update user (local storage)
  static async upsertUser(
    userData: UserInsert & { id: string },
  ): Promise<User | null> {
    try {
      const user: User = {
        id: userData.id,
        email: userData.email || null,
        name: userData.name || null,
        image: userData.image || null,
        locale: userData.locale || "zh",
        accent: userData.accent || "en-US",
        speed: userData.speed || "normal",
        subscription_tier: userData.subscription_tier || "free",
      };
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      return user;
    } catch (error) {
      console.error("Error upserting user:", error);
      return null;
    }
  }
  // Update user profile
  static async updateUser(
    userId: string,
    updates: UserUpdate,
  ): Promise<User | null> {
    try {
      const data = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (data) {
        const user = JSON.parse(data);
        if (user.id === userId) {
          const updatedUser = { ...user, ...updates };
          await AsyncStorage.setItem(
            USER_STORAGE_KEY,
            JSON.stringify(updatedUser),
          );
          return updatedUser;
        }
      }
      return null;
    } catch (error) {
      console.error("Error updating user:", error);
      return null;
    }
  }

  // Update user settings
  static async updateUserSettings(
    userId: string,
    settings: {
      locale?: string;
      accent?: string;
      speed?: string;
      my_voice_gender?: string;
    },
  ): Promise<User | null> {
    return this.updateUser(userId, settings);
  }

  // Update subscription
  static async updateSubscription(
    userId: string,
    subscription: {
      subscription_tier?: string;
      stripe_customer_id?: string;
      stripe_sub_id?: string;
      subscription_ends_at?: string;
      iap_store?: string;
      iap_product_id?: string;
    },
  ): Promise<User | null> {
    return this.updateUser(userId, subscription);
  }

  // Delete user
  static async deleteUser(_userId: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      return true;
    } catch (error) {
      console.error("Error deleting user:", error);
      return false;
    }
  }

  // Real-time subscription - disabled for local storage
  static subscribeToUser(_userId: string, _callback: (user: User) => void) {
    return { unsubscribe: () => {} };
  }
}

export default UserService;
