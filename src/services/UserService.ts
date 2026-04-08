import { supabase, Database } from "../lib/supabase";

export type User = Database["public"]["Tables"]["users"]["Row"];
export type UserInsert = Database["public"]["Tables"]["users"]["Insert"];
export type UserUpdate = Database["public"]["Tables"]["users"]["Update"];

export class UserService {
  // Get user by ID
  static async getUser(userId: string): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  // Create or update user (upsert)
  static async upsertUser(
    userData: UserInsert & { id: string },
  ): Promise<User | null> {
    try {
      const { data, error } = await supabase
        .from("users")
        .upsert({
          id: userData.id,
          email: userData.email,
          name: userData.name,
          image: userData.image,
          locale: userData.locale || "zh",
          accent: userData.accent || "en-US",
          speed: userData.speed || "normal",
          subscription_tier: userData.subscription_tier || "free",
          stripe_customer_id: userData.stripe_customer_id,
          stripe_sub_id: userData.stripe_sub_id,
          subscription_ends_at: userData.subscription_ends_at,
          iap_store: userData.iap_store,
          iap_product_id: userData.iap_product_id,
          referral_code: userData.referral_code,
          referred_by: userData.referred_by,
        })
        .select()
        .single();

      if (error) {
        console.error("Database error:", error);
        // If Supabase is not configured, return mock user
        if (error.message === "Supabase not configured") {
          return {
            id: userData.id,
            email: userData.email,
            email_verified: null,
            name: userData.name,
            image: userData.image,
            password_hash: null,
            locale: userData.locale || "zh",
            accent: userData.accent || "en-US",
            speed: userData.speed || "normal",
            my_voice_gender: null,
            subscription_tier: userData.subscription_tier || "free",
            stripe_customer_id: userData.stripe_customer_id,
            stripe_sub_id: userData.stripe_sub_id,
            subscription_ends_at: userData.subscription_ends_at,
            trip_boost_ends_at: userData.trip_boost_ends_at,
            iap_store: userData.iap_store,
            iap_product_id: userData.iap_product_id,
            referral_code: userData.referral_code,
            referred_by: userData.referred_by,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
        }
        throw error;
      }
      return data;
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
      const { data, error } = await supabase
        .from("users")
        .update(updates)
        .eq("id", userId)
        .select()
        .single();

      if (error) throw error;
      return data;
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
  static async deleteUser(userId: string): Promise<boolean> {
    try {
      const { error } = await supabase.from("users").delete().eq("id", userId);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error("Error deleting user:", error);
      return false;
    }
  }

  // Real-time subscription to user changes
  static subscribeToUser(userId: string, callback: (user: User) => void) {
    return supabase
      .channel(`user_${userId}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "users",
          filter: `id=eq.${userId}`,
        },
        (payload) => {
          callback(payload.new as User);
        },
      )
      .subscribe();
  }
}

export default UserService;
