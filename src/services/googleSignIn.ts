import { Platform } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

export interface GoogleUser {
  idToken: string;
  serverAuthCode: string;
  scopes: string[];
  user: {
    id: string;
    name: string;
    givenName: string;
    familyName: string;
    email: string;
    photo: string;
  };
}

class GoogleService {
  private isConfigured = false;

  configure() {
    if (this.isConfigured) return;

    // iOS và Android cần Web Client ID khác nhau
    const webClientId =
      Platform.OS === "ios"
        ? process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID +
          ".apps.googleusercontent.com"
        : process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID;

    GoogleSignin.configure({
      webClientId,
      iosClientId:
        process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID +
        ".apps.googleusercontent.com",
      offlineAccess: true,
      hostedDomain: "",
      forceCodeForRefreshToken: true,
    });

    this.isConfigured = true;
  }

  async signIn(): Promise<GoogleUser> {
    try {
      this.configure();

      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (response.type === "cancelled") {
        throw new Error("Sign-in cancelled");
      }

      const userInfo = response?.data;

      return {
        idToken: userInfo.idToken || "",
        serverAuthCode: userInfo.serverAuthCode || "",
        scopes: userInfo.scopes || [],
        user: {
          id: userInfo.user.id,
          name: userInfo.user.name || "",
          givenName: userInfo.user.givenName || "",
          familyName: userInfo.user.familyName || "",
          email: userInfo.user.email,
          photo: userInfo.user.photo || "",
        },
      };
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error("Sign-in cancelled");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        throw new Error("Sign-in already in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error("Google Play Services not available");
      } else {
        throw new Error(`Sign-in error: ${error.message}`);
      }
    }
  }

  async signOut(): Promise<void> {
    try {
      await GoogleSignin.signOut();
    } catch (error: any) {
      throw new Error(`Sign-out error: ${error.message}`);
    }
  }

  async isSignedIn(): Promise<boolean> {
    try {
      return GoogleSignin.hasPreviousSignIn();
    } catch (error: any) {
      console.error("Error checking sign-in state:", error);
      return false;
    }
  }

  async getCurrentUser(): Promise<GoogleUser | null> {
    try {
      const isSignedIn = await this.isSignedIn();
      if (!isSignedIn) return null;

      const userInfo = GoogleSignin.getCurrentUser();
      if (!userInfo) return null;

      return {
        idToken: userInfo.idToken || "",
        serverAuthCode: userInfo.serverAuthCode || "",
        scopes: userInfo.scopes || [],
        user: {
          id: userInfo.user.id,
          name: userInfo.user.name || "",
          givenName: userInfo.user.givenName || "",
          familyName: userInfo.user.familyName || "",
          email: userInfo.user.email,
          photo: userInfo.user.photo || "",
        },
      };
    } catch (error: any) {
      console.error("Lỗi lấy thông tin người dùng:", error);
      return null;
    }
  }

  async revokeAccess(): Promise<void> {
    try {
      await GoogleSignin.revokeAccess();
    } catch (error: any) {
      throw new Error(`Revoke access error: ${error.message}`);
    }
  }

  async getTokens(): Promise<{ idToken: string; accessToken: string }> {
    try {
      return await GoogleSignin.getTokens();
    } catch (error: any) {
      throw new Error(`Token retrieval error: ${error.message}`);
    }
  }
}

export const googleService = new GoogleService();
export default googleService;
