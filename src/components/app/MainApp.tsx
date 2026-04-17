import { useState, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
// TODO: Install expo-haptics
// import * as Haptics from "expo-haptics";
import LearnScreen from "./LearnScreen";
import ProfileScreen from "./ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useT, type LocaleKeys } from "../../lib/i18n";

type Tab = "learn" | "me";

const tabs: {
  id: Tab;
  labelKey: LocaleKeys;
  iconName: keyof typeof Ionicons.glyphMap;
}[] = [
  {
    id: "learn",
    labelKey: "nav.learn",
    iconName: "book-outline",
  },
  // Hidden for production: SOS and Practice tabs
  // {
  //   id: "sos",
  //   labelKey: "nav.sos",
  //   iconName: "warning-outline",
  // },
  // {
  //   id: "practice",
  //   labelKey: "nav.practice",
  //   iconName: "chatbubble-outline",
  // },
  {
    id: "me",
    labelKey: "nav.me",
    iconName: "person-circle-outline",
  },
];

interface MainAppProps {
  onLogout?: () => void;
  onResetOnboarding?: () => void;
}

export default function MainApp({ onLogout, onResetOnboarding }: MainAppProps) {
  const t = useT();
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  // Animated values for each tab
  const animatedValues = useRef(tabs.map(() => new Animated.Value(0))).current;

  const handleTabPress = (index: number, tabId: Tab) => {
    // Haptic feedback (enable after installing expo-haptics)
    // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Animate all tabs
    animatedValues.forEach((animValue, i) => {
      Animated.spring(animValue, {
        toValue: i === index ? 1 : 0,
        friction: 8,
        tension: 100,
        useNativeDriver: true,
      }).start();
    });

    setActiveTab(tabId);
  };

  // Initialize animation
  useState(() => {
    animatedValues[0].setValue(1);
  });

  return (
    <View style={styles.container}>
      {/* Screen Content */}
      <View style={styles.screenContainer}>
        {activeTab === "learn" && (
          <LearnScreen onNavigateToProfile={() => setActiveTab("me")} />
        )}
        {/* {activeTab === "sos" && <TalkBuddyScreen />}
        {activeTab === "practice" && <PracticeScreen />} */}
        {activeTab === "me" && (
          <ProfileScreen
            onLogout={onLogout}
            onResetOnboarding={onResetOnboarding}
            onNavigateToLearn={() => setActiveTab("learn")}
          />
        )}
      </View>

      {/* Bottom Nav with Toggle Animation */}
      <View style={styles.bottomNav}>
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          // Interpolate animation values
          const scale = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.85, 1],
          });

          const backgroundOpacity = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          });

          const iconColor = isActive ? "#1C1C1E" : "#9E9E9E";
          const labelColor = isActive ? "#1C1C1E" : "#9E9E9E";

          return (
            <Pressable
              key={tab.id}
              onPress={() => handleTabPress(index, tab.id)}
              style={styles.tabButton}
              android_ripple={{
                color: "rgba(255, 214, 0, 0.2)",
                borderless: true,
              }}
            >
              <Animated.View
                style={[
                  styles.tabContent,
                  {
                    transform: [{ scale }],
                  },
                ]}
              >
                {/* Active Pill Background */}
                <Animated.View
                  style={[
                    styles.activePillBackground,
                    {
                      opacity: backgroundOpacity,
                    },
                  ]}
                />

                {/* Icon on top */}
                <View style={styles.iconContainer}>
                  <Ionicons name={tab.iconName} size={24} color={iconColor} />
                </View>

                {/* Label below */}
                <Text style={[styles.tabLabel, { color: labelColor }]}>
                  {t(tab.labelKey)}
                </Text>
              </Animated.View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  screenContainer: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    position: "relative",
    minWidth: 64,
  },
  activePillBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFD600",
    borderRadius: 16,
  },
  iconContainer: {
    marginBottom: 4,
    zIndex: 1,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.3,
    zIndex: 1,
  },
});
