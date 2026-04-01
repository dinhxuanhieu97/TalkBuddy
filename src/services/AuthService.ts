import { supabase } from "../lib/supabase";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { Platform } from "react-native";

// Configure Google OAuth
WebBrowser.maybeCompleteAuthSession();

// Google OAuth configuration
const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  provider: "google" | "apple" | "email";
}

export class AuthService {
  // Google Sign-In
  static async signInWithGoogle(): Promise<AuthUser | null> {
    try {
      const clientId = this.getGoogleClientId();

      if (!clientId) {
        throw new Error("Google Client ID not configured");
      }

      const request = new AuthSession.AuthRequest({
        clientId,
        scopes: ["openid", "profile", "email"],
        redirectUri: AuthSession.makeRedirectUri({
          scheme: undefined, // Use default scheme
          path: "auth",
        }),
        responseType: AuthSession.ResponseType.Token,
        extraParams: {
          access_type: "offline",
          prompt: "consent",
        },
      });

      const result = await request.promptAsync(discovery);

      if (result.type === "success") {
        // Get user info from Google
        const userInfo = await this.getGoogleUserInfo(
          result.params.access_token,
        );

        if (userInfo) {
          // Sign in to Supabase with Google
          const { data, error } = await supabase.auth.signInWithIdToken({
            provider: "google",
            token: result.params.id_token,
          });

          if (error) {
            console.error("Supabase auth error:", error);
            // If Supabase is not configured, still return user data for testing
            if (error.message === "Supabase not configured") {
              const authUser: AuthUser = {
                id: "mock-user-" + Date.now(),
                email: userInfo.email,
                name: userInfo.name,
                image: userInfo.picture,
                provider: "google",
              };
              return authUser;
            }
            throw error;
          }

          // Create/update user profile
          const authUser: AuthUser = {
            id: data.user?.id || "",
            email: userInfo.email,
            name: userInfo.name,
            image: userInfo.picture,
            provider: "google",
          };

          await this.syncUserProfile(authUser);

          return authUser;
        }
      }

      return null;
    } catch (error) {
      console.error("Google sign-in error:", error);
      return null;
    }
  }

  // Get Google user info
  private static async getGoogleUserInfo(accessToken: string): Promise<any> {
    try {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching Google user info:", error);
      return null;
    }
  }

  // Get Google Client ID based on platform
  private static getGoogleClientId(): string {
    const clientId =
      Platform.OS === "ios"
        ? process.env.VITE_GOOGLE_IOS_CLIENT_ID
        : process.env.VITE_GOOGLE_ANDROID_CLIENT_ID;

    return clientId || "";
  }

  // Email/Password Sign-In
  static async signInWithEmail(
    email: string,
    password: string,
  ): Promise<AuthUser | null> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log("Email sign-in error:", error.message);
        // If Supabase is not configured, create mock user for testing
        if (error.message === "Supabase not configured") {
          console.log("Creating mock user for development...");
          const authUser: AuthUser = {
            id: "dev-user-" + Date.now(),
            email: email,
            name: email.split("@")[0],
            provider: "email",
          };
          console.log("Mock user created:", authUser);
          return authUser;
        }
        throw error;
      }

      if (data.user) {
        const authUser: AuthUser = {
          id: data.user.id,
          email: data.user.email || "",
          name: data.user.user_metadata?.name || "",
          image: data.user.user_metadata?.avatar_url,
          provider: "email",
        };

        await this.syncUserProfile(authUser);

        return authUser;
      }

      return null;
    } catch (error) {
      console.error("Email sign-in error:", error);
      return null;
    }
  }

  // Email/Password Sign-Up
  static async signUpWithEmail(
    email: string,
    password: string,
    name: string,
  ): Promise<AuthUser | null> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (error) {
        console.error("Email sign-up error:", error);
        // If Supabase is not configured, create mock user for testing
        if (error.message === "Supabase not configured") {
          const authUser: AuthUser = {
            id: "mock-user-" + Date.now(),
            email: email,
            name: name,
            provider: "email",
          };
          return authUser;
        }
        throw error;
      }

      if (data.user) {
        const authUser: AuthUser = {
          id: data.user.id,
          email: data.user.email || "",
          name: name,
          image: data.user.user_metadata?.avatar_url,
          provider: "email",
        };

        await this.syncUserProfile(authUser);

        return authUser;
      }

      return null;
    } catch (error) {
      console.error("Email sign-up error:", error);
      return null;
    }
  }

  // Sign Out
  static async signOut(): Promise<boolean> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error("Sign-out error:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Sign-out error:", error);
      return false;
    }
  }

  // Get current user
  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const provider = user.app_metadata?.provider || "email";
        return {
          id: user.id,
          email: user.email || "",
          name: user.user_metadata?.name || "",
          image: user.user_metadata?.avatar_url,
          provider: provider as "google" | "apple" | "email",
        };
      }

      return null;
    } catch (error) {
      console.error("Get current user error:", error);
      return null;
    }
  }

  // Listen to auth state changes
  static onAuthStateChange(callback: (user: AuthUser | null) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const provider = session.user.app_metadata?.provider || "email";
        const authUser: AuthUser = {
          id: session.user.id,
          email: session.user.email || "",
          name: session.user.user_metadata?.name || "",
          image: session.user.user_metadata?.avatar_url,
          provider: provider as "google" | "apple" | "email",
        };
        callback(authUser);
      } else {
        callback(null);
      }
    });
  }

  // Sync user profile with database
  private static async syncUserProfile(authUser: AuthUser): Promise<void> {
    try {
      // Import UserService here to avoid circular dependencies
      const { UserService } = await import("./UserService");

      await UserService.upsertUser({
        id: authUser.id,
        email: authUser.email,
        name: authUser.name,
        image: authUser.image,
        locale: "zh", // Default locale
        accent: "en-US", // Default accent
        speed: "normal", // Default speed
        subscription_tier: "free", // Default subscription
      });
    } catch (error) {
      console.error("Error syncing user profile:", error);
      // Don't throw error - allow app to continue even if sync fails
    }
  }

  // Reset password
  static async resetPassword(email: string): Promise<boolean> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        console.error("Reset password error:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Reset password error:", error);
      return false;
    }
  }

  // Update password
  static async updatePassword(newPassword: string): Promise<boolean> {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error("Update password error:", error);
        return false;
      }

      return true;
    } catch (error) {
      console.error("Update password error:", error);
      return false;
    }
  }
}

export default AuthService;
