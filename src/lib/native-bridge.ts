import { Capacitor } from "@capacitor/core";
import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";
import { StatusBar, Style } from "@capacitor/status-bar";

export const isNativePlatform = () => {
  return Capacitor.isNativePlatform();
};

export const isAndroid = () => {
  return Capacitor.getPlatform() === "android";
};

export const isIOS = () => {
  return Capacitor.getPlatform() === "ios";
};

export const triggerHaptic = async (
  style: "light" | "medium" | "heavy" = "medium",
) => {
  if (!Capacitor.isNativePlatform()) return;

  const styleMap = {
    light: ImpactStyle.Light,
    medium: ImpactStyle.Medium,
    heavy: ImpactStyle.Heavy,
  };

  try {
    await Haptics.impact({ style: styleMap[style] });
  } catch (error) {
    console.warn("Haptics not available:", error);
  }
};

export const triggerNotificationHaptic = async (
  type: "success" | "warning" | "error" = "success",
) => {
  if (!Capacitor.isNativePlatform()) return;

  const typeMap = {
    success: NotificationType.Success,
    warning: NotificationType.Warning,
    error: NotificationType.Error,
  };

  try {
    await Haptics.notification({ type: typeMap[type] });
  } catch (error) {
    console.warn("Haptics not available:", error);
  }
};

export const setStatusBarStyle = async (dark: boolean = false) => {
  if (!Capacitor.isNativePlatform()) return;

  try {
    await StatusBar.setStyle({
      style: dark ? Style.Dark : Style.Light,
    });
  } catch (error) {
    console.warn("StatusBar not available:", error);
  }
};

export const hideStatusBar = async () => {
  if (!Capacitor.isNativePlatform()) return;

  try {
    await StatusBar.hide();
  } catch (error) {
    console.warn("StatusBar not available:", error);
  }
};

export const showStatusBar = async () => {
  if (!Capacitor.isNativePlatform()) return;

  try {
    await StatusBar.show();
  } catch (error) {
    console.warn("StatusBar not available:", error);
  }
};

export default {
  isNativePlatform,
  isAndroid,
  isIOS,
  triggerHaptic,
  triggerNotificationHaptic,
  setStatusBarStyle,
  hideStatusBar,
  showStatusBar,
};
