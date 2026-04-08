import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Request notification permissions
export async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FFD600",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      console.warn("Failed to get push token for push notification!");
      return null;
    }

    // Get push token for production
    // token = (await Notifications.getExpoPushTokenAsync()).data;
  } else {
    console.warn("Must use physical device for Push Notifications");
  }

  return token;
}

// Schedule daily reminder notification
export async function scheduleDailyReminder(
  hour: number = 20,
  minute: number = 0,
) {
  // Cancel existing daily reminders
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule new daily reminder
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Time to practice! 📚",
      body: "Keep your streak alive - just 5 minutes today!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data: { type: "daily_reminder" },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
      hour,
      minute,
      repeats: true,
    },
  });

  console.log(
    `Daily reminder scheduled for ${hour}:${minute < 10 ? "0" : ""}${minute}`,
  );
}

// Schedule streak alert (when user is about to lose streak)
export async function scheduleStreakAlert(streakDays: number) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `🔥 ${streakDays}-day streak at risk!`,
      body: "Don't break your streak! Practice now to keep it going.",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.MAX,
      data: { type: "streak_alert", streakDays },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 60 * 60 * 20, // 20 hours from now
      repeats: false,
    },
  });
}

// Schedule credit low warning
export async function scheduleCreditLowWarning(credits: number) {
  if (credits <= 50 && credits > 0) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "💎 Credits running low",
        body: `You have ${credits} credits left. Buy more to continue using AI features.`,
        sound: true,
        data: { type: "credit_low", credits },
      },
      trigger: null, // Send immediately
    });
  }
}

// Schedule achievement notification
export async function scheduleAchievementNotification(
  achievement: string,
  description: string,
) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `🎉 Achievement Unlocked!`,
      body: `${achievement}: ${description}`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data: { type: "achievement", achievement },
    },
    trigger: null, // Send immediately
  });
}

// Cancel all scheduled notifications
export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log("All notifications cancelled");
}

// Get all scheduled notifications
export async function getScheduledNotifications() {
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  return notifications;
}

// Send test notification
export async function sendTestNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "🧪 Test Notification",
      body: "This is a test notification from TalkBuddy!",
      sound: true,
      data: { type: "test" },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
      repeats: false,
    },
  });
}

// Notification event listeners
export function addNotificationReceivedListener(
  callback: (notification: Notifications.Notification) => void,
) {
  return Notifications.addNotificationReceivedListener(callback);
}

export function addNotificationResponseReceivedListener(
  callback: (response: Notifications.NotificationResponse) => void,
) {
  return Notifications.addNotificationResponseReceivedListener(callback);
}
