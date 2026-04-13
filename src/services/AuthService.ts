import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";
import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import { Platform } from "react-native";

// Google OAuth configuration from environment variables
const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID || "";
const GOOGLE_ANDROID_CLIENT_ID =
  process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID || "";
const GOOGLE_WEB_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID || "";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  image?: string;
  provider: "google" | "apple" | "email";
  token?: string;
}

// Storage keys
const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  TOKEN_EXPIRY: "auth_token_expiry",
  REMEMBER_EMAIL: "remember_me_email",
} as const;

export class AuthService {
  private static authToken: string | null = null;

  static setAuthToken(token: string | null) {
    this.authToken = token;
  }

  static getAuthToken(): string | null {
    return this.authToken;
  }

  // ─── Remember Me ───────────────────────────────────────────
  static async saveRememberEmail(email: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.REMEMBER_EMAIL, email);
  }

  static async loadRememberEmail(): Promise<string | null> {
    return AsyncStorage.getItem(STORAGE_KEYS.REMEMBER_EMAIL);
  }

  static async clearRememberEmail(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.REMEMBER_EMAIL);
  }

  // ─── Token Persistence ─────────────────────────────────────
  private static async persistToken(
    token: string,
    rememberMe: boolean,
  ): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    this.setAuthToken(token);

    // Set expiry: 30 days if rememberMe, 24 hours otherwise
    const expiryMs = rememberMe
      ? 30 * 24 * 60 * 60 * 1000
      : 24 * 60 * 60 * 1000;
    const expiry = (Date.now() + expiryMs).toString();
    await AsyncStorage.setItem(STORAGE_KEYS.TOKEN_EXPIRY, expiry);
  }

  static async isTokenValid(): Promise<boolean> {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) return false;

      const expiry = await AsyncStorage.getItem(STORAGE_KEYS.TOKEN_EXPIRY);
      if (expiry && Date.now() > parseInt(expiry, 10)) {
        await this.signOut();
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  // ─── Helper: map API response → AuthUser ───────────────────
  private static mapUser(
    data: any,
    provider: AuthUser["provider"],
    token: string,
  ): AuthUser {
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      image: data.avatar,
      provider,
      token,
    };
  }

  // ─── Sign In with Email ────────────────────────────────────
  static async signInWithEmail(
    email: string,
    password: string,
    rememberMe: boolean = false,
  ): Promise<AuthUser | null> {
    try {
      const res = await api.post("/api/auth/login", { email, password });

      if (res.data.token && res.data.user) {
        await this.persistToken(res.data.token, rememberMe);

        // Handle remember-me email
        if (rememberMe) {
          await this.saveRememberEmail(email);
        } else {
          await this.clearRememberEmail();
        }

        return this.mapUser(res.data.user, "email", res.data.token);
      }

      return null;
    } catch (error: any) {
      console.error(
        "Email sign-in error:",
        error.response?.data?.message || error.message,
      );
      throw error;
    }
  }

  // ─── Sign Up with Email ────────────────────────────────────
  static async signUpWithEmail(
    email: string,
    password: string,
    name: string,
  ): Promise<AuthUser | null> {
    try {
      const res = await api.post("/api/auth/register", {
        email,
        password,
        name,
      });

      if (res.data.token && res.data.user) {
        await this.persistToken(res.data.token, false);
        return this.mapUser(res.data.user, "email", res.data.token);
      }

      return null;
    } catch (error: any) {
      console.error(
        "Email sign-up error:",
        error.response?.data?.message || error.message,
      );
      throw error;
    }
  }

  // ─── Sign In with Google ───────────────────────────────────
  static async signInWithGoogle(): Promise<AuthUser | null> {
    try {
      const clientId =
        Platform.OS === "ios"
          ? GOOGLE_IOS_CLIENT_ID
          : Platform.OS === "android"
            ? GOOGLE_ANDROID_CLIENT_ID
            : GOOGLE_WEB_CLIENT_ID;

      if (!clientId) {
        throw new Error("Missing Google OAuth client id for current platform");
      }

      const redirectUri = AuthSession.makeRedirectUri();
      const discovery = {
        authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
        tokenEndpoint: "https://oauth2.googleapis.com/token",
        revocationEndpoint: "https://oauth2.googleapis.com/revoke",
      };

      const request = new AuthSession.AuthRequest({
        clientId,
        redirectUri,
        responseType: AuthSession.ResponseType.IdToken,
        scopes: ["openid", "profile", "email"],
      });

      await request.makeAuthUrlAsync(discovery);
      const result = await request.promptAsync(discovery);

      if (result.type === "success") {
        const idToken = result.params?.id_token;
        if (!idToken) {
          throw new Error("Google OAuth response is missing id_token");
        }

        const res = await api.post("/api/auth/google", {
          idToken,
          accessToken: result.params?.access_token,
        });

        if (res.data.token && res.data.user) {
          await this.persistToken(res.data.token, true);
          return this.mapUser(res.data.user, "google", res.data.token);
        }
      }

      return null;
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      console.error("Error details:", error.message, error.stack);
      throw error;
    }
  }

  // ─── Sign In with Apple ────────────────────────────────────
  static async signInWithApple(): Promise<AuthUser | null> {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const res = await api.post("/api/auth/apple", {
          idToken: credential.identityToken,
          user: credential.user,
        });

        if (res.data.token && res.data.user) {
          await this.persistToken(res.data.token, true);
          return this.mapUser(res.data.user, "apple", res.data.token);
        }
      }

      return null;
    } catch (error: any) {
      if (error.code === "ERR_CANCELLED") {
        console.log("Apple sign-in cancelled");
        return null;
      }
      console.error("Apple sign-in error:", error);
      throw error;
    }
  }

  // ─── Sign Out ──────────────────────────────────────────────
  static async signOut(): Promise<boolean> {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.AUTH_TOKEN,
        STORAGE_KEYS.TOKEN_EXPIRY,
      ]);
      this.setAuthToken(null);
      return true;
    } catch (error) {
      console.error("Sign-out error:", error);
      return false;
    }
  }

  // ─── Get Current User (from token) ─────────────────────────
  static async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const isValid = await this.isTokenValid();
      if (!isValid) return null;

      const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) return null;

      this.setAuthToken(token);
      const res = await api.get("/api/auth/me");

      return this.mapUser(res.data, "email", token);
    } catch (error) {
      console.error("Get current user error:", error);
      return null;
    }
  }

  // ─── Password Reset ────────────────────────────────────────

  // Step 0: Validate email exists in database
  static async validateEmailExists(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const res = await api.post("/api/auth/forgot-password/validate-email", {
        email,
      });
      return {
        success: res.data.success,
        message: res.data.message || "Email hợp lệ",
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Email không hợp lệ",
      };
    }
  }

  // Step 1: Request OTP to be sent to email
  static async requestPasswordResetOtp(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const res = await api.post("/api/auth/forgot-password/request", {
        email,
      });
      return {
        success: true,
        message: res.data?.message || "Đã gửi mã xác minh",
      };
    } catch (error: any) {
      console.error("Request OTP error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Không thể gửi mã xác minh",
      };
    }
  }

  // Step 2: Verify OTP and get reset token
  static async verifyPasswordResetOtp(
    email: string,
    otp: string,
  ): Promise<{ success: boolean; resetToken?: string; message: string }> {
    try {
      const res = await api.post("/api/auth/forgot-password/verify", {
        email,
        otp,
      });
      return {
        success: true,
        resetToken: res.data?.resetToken,
        message: res.data?.message || "Xác minh thành công",
      };
    } catch (error: any) {
      console.error("Verify OTP error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Mã xác minh không đúng",
      };
    }
  }

  // Step 3: Resend OTP
  static async resendPasswordResetOtp(
    email: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const res = await api.post("/api/auth/forgot-password/resend", { email });
      return {
        success: true,
        message: res.data?.message || "Đã gửi lại mã xác minh",
      };
    } catch (error: any) {
      console.error("Resend OTP error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Không thể gửi lại mã",
      };
    }
  }

  // Step 4: Reset password with token
  static async resetPasswordWithToken(
    resetToken: string,
    newPassword: string,
  ): Promise<{ success: boolean; message: string }> {
    try {
      const res = await api.post("/api/auth/forgot-password/reset", {
        resetToken,
        newPassword,
      });
      return {
        success: true,
        message: res.data?.message || "Đặt lại mật khẩu thành công",
      };
    } catch (error: any) {
      console.error("Reset password error:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Không thể đặt lại mật khẩu",
      };
    }
  }

  // Legacy method - kept for compatibility
  static async resetPassword(email: string): Promise<boolean> {
    try {
      await api.post("/api/auth/forgot-password", { email });
      return true;
    } catch (error) {
      console.error("Reset password error:", error);
      return false;
    }
  }

  static async updatePassword(newPassword: string): Promise<boolean> {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      if (!token) return false;

      await api.post("/api/auth/reset-password", { password: newPassword });
      return true;
    } catch (error) {
      console.error("Update password error:", error);
      return false;
    }
  }
}

export default AuthService;
