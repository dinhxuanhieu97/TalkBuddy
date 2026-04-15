import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, {
  Path,
  G,
  Defs,
  ClipPath,
  Rect,
  Circle,
  Ellipse,
} from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useT } from "../../lib/i18n";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Slide config - stores translation keys
const slideConfigs = [
  { id: 0, type: "bee", gradient: ["#f9f9f9", "#ffd200"] as [string, string] },
  {
    id: 1,
    type: "emoji",
    emoji: "🚨",
    emojiBg: "rgba(28,28,30,0.1)",
    gradient: ["#ffd200", "#f9f9f9"] as [string, string],
    titleKey: "onboarding.slide2.title",
    subtitleKey: "onboarding.slide2.subtitle",
  },
  {
    id: 2,
    type: "emoji",
    emoji: "🗣️",
    emojiBg: "rgba(255,214,0,0.15)",
    gradient: ["#ffd200", "#f9f9f9"] as [string, string],
    titleKey: "onboarding.slide3.title",
    subtitleKey: "onboarding.slide3.subtitle",
  },
  {
    id: 3,
    type: "emoji",
    emoji: "📚",
    emojiBg: "rgba(28,28,30,0.1)",
    gradient: ["#ffd200", "#f9f9f9"] as [string, string],
    titleKey: "onboarding.slide4.title",
    subtitleKey: "onboarding.slide4.subtitle",
  },
];

// Animated Bee SVG Component
function AnimatedBeeIcon() {
  const flyAnim = useRef(new Animated.Value(0)).current;
  const wingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(flyAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(flyAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(wingAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wingAnim, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const translateY = flyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-8, 8],
  });

  const rotate = wingAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-15deg", "15deg"],
  });

  return (
    <Animated.View style={{ transform: [{ translateY }, { rotate }] }}>
      <Svg width={110} height={76} viewBox="0 0 110 76" fill="none">
        <G clipPath="url(#clip0_201_4108)">
          <Path
            d="M1.52588e-05 44.9827L11.9132 51.8522V38.1018L1.52588e-05 44.9827Z"
            fill="#1C1C1E"
          />
          <Path
            d="M41.0117 75.7701C58.015 75.7701 71.7989 61.9862 71.7989 44.9828C71.7989 27.9795 58.015 14.1956 41.0117 14.1956C24.0083 14.1956 10.2244 27.9795 10.2244 44.9828C10.2244 61.9862 24.0083 75.7701 41.0117 75.7701Z"
            fill="#FFD200"
          />
          <Path
            opacity={0.8}
            d="M54.8534 18.6687C54.8534 10.6924 67.2231 4.23364 75.1881 4.23364C83.153 4.23364 89.6231 10.6924 89.6231 18.6687C89.6231 26.6451 83.1644 33.1038 75.1881 33.1038C67.2117 33.1038 54.8534 26.6451 54.8534 18.6687Z"
            fill="#E7F7EF"
          />
          <Path
            d="M50.346 75.7701C67.3493 75.7701 81.1333 61.9862 81.1333 44.9828C81.1333 27.9795 67.3493 14.1956 50.346 14.1956C33.3426 14.1956 19.5587 27.9795 19.5587 44.9828C19.5587 61.9862 33.3426 75.7701 50.346 75.7701Z"
            fill="#1C1C1E"
          />
          <Path
            d="M59.6803 75.7701C76.6836 75.7701 90.4676 61.9862 90.4676 44.9828C90.4676 27.9795 76.6836 14.1956 59.6803 14.1956C42.677 14.1956 28.893 27.9795 28.893 44.9828C28.893 61.9862 42.677 75.7701 59.6803 75.7701Z"
            fill="#FFD200"
          />
          <Path
            d="M65.3813 0.252645L65.3709 0.257233C63.8648 0.91865 63.1802 2.67572 63.8416 4.18175L70.0728 18.3701C70.7342 19.8761 72.4912 20.5608 73.9973 19.8994L74.0077 19.8948C75.5138 19.2334 76.1985 17.4763 75.537 15.9703L69.3058 1.78196C68.6444 0.275927 66.8874 -0.408771 65.3813 0.252645Z"
            fill="#1C1C1E"
          />
          <Path
            d="M69.026 75.7701C86.0294 75.7701 99.8133 61.9862 99.8133 44.9828C99.8133 27.9795 86.0294 14.1956 69.026 14.1956C52.0227 14.1956 38.2388 27.9795 38.2388 44.9828C38.2388 61.9862 52.0227 75.7701 69.026 75.7701Z"
            fill="#1C1C1E"
          />
          <Path
            opacity={0.8}
            d="M57.7632 16.4207C57.7632 24.3971 45.3935 30.8558 37.4286 30.8558C29.4636 30.8558 22.9935 24.3971 22.9935 16.4207C22.9935 8.4443 29.4522 1.9856 37.4286 1.9856C45.405 1.9856 57.7632 8.4443 57.7632 16.4207Z"
            fill="#E7F7EF"
          />
          <Path
            d="M55.3758 3.72847L55.3654 3.73306C53.8594 4.39448 53.1747 6.15155 53.8361 7.65758L60.0673 21.8459C60.7287 23.3519 62.4858 24.0366 63.9918 23.3752L64.0022 23.3706C65.5083 22.7092 66.193 20.9522 65.5315 19.4461L59.3004 5.25779C58.6389 3.75176 56.8819 3.06706 55.3758 3.72847Z"
            fill="#1C1C1E"
          />
          <Path
            d="M78.3603 75.7701C95.3637 75.7701 109.148 61.9862 109.148 44.9828C109.148 27.9795 95.3637 14.1956 78.3603 14.1956C61.357 14.1956 47.5731 27.9795 47.5731 44.9828C47.5731 61.9862 61.357 75.7701 78.3603 75.7701Z"
            fill="#FFD200"
          />
          <Circle cx={69.7449} cy={43.8872} r={3.9483} fill="#EF5454" />
          <Circle cx={97.0518} cy={43.8872} r={3.9483} fill="#EF5454" />
          <Circle cx={75.8499} cy={40.0988} r={6.5157} fill="#FBFFFF" />
          <Circle cx={75.8499} cy={40.0988} r={2.4389} fill="#1C1C1E" />
          <Ellipse
            cx={77.9381}
            cy={38.0106}
            rx={1.3507}
            ry={1.3507}
            fill="#FBFFFF"
          />
          <Circle cx={91.0724} cy={40.0988} r={6.5157} fill="#FBFFFF" />
          <Circle cx={91.0724} cy={40.0988} r={2.4389} fill="#1C1C1E" />
          <Ellipse
            cx={93.1606}
            cy={38.0106}
            rx={1.3507}
            ry={1.3507}
            fill="#FBFFFF"
          />
          <Path
            d="M88.4706 46.0214C88.4706 48.7829 86.2226 51.0194 83.4725 51.0194C80.7224 51.0194 78.4744 48.7714 78.4744 46.0214C78.4744 45.816 78.4859 45.622 78.5087 45.428H77.1622C77.1393 45.622 77.1279 45.816 77.1279 46.0214C77.1279 49.5246 79.9693 52.366 83.4725 52.366C86.9758 52.366 89.8171 49.5246 89.8171 46.0214C89.8171 45.816 89.8057 45.622 89.7829 45.428H88.4364C88.4592 45.622 88.4706 45.816 88.4706 46.0214Z"
            fill="#1C1C1E"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_201_4108">
            <Rect width={109.148} height={75.77} fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </Animated.View>
  );
}

interface OnboardingProps {
  onDone?: () => void;
}

export default function Onboarding({ onDone }: OnboardingProps) {
  const t = useT();
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  const finishOnboarding = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
    } catch (error) {
      console.log("Error saving onboarding status:", error);
    }
    if (onDone) {
      onDone();
    } else {
      router.replace("/");
    }
  };

  const handleNext = async () => {
    if (current < slideConfigs.length - 1) {
      setCurrent(current + 1);
    } else {
      await finishOnboarding();
    }
  };

  const handleSkip = async () => {
    await finishOnboarding();
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const slide = slideConfigs[current];

  return (
    <LinearGradient
      colors={slide.gradient}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Content Area with Tap Gesture */}
      <View style={styles.contentContainer}>
        {/* Tap left area to go previous (disabled for first slide) */}
        {current > 0 && (
          <TouchableWithoutFeedback onPress={handlePrev}>
            <View style={[styles.tapArea, styles.tapAreaLeft]} />
          </TouchableWithoutFeedback>
        )}

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Slide 1: Bee + TalkBuddy */}
          {slide.type === "bee" && (
            <View style={styles.beeSlide}>
              <AnimatedBeeIcon />
              <View style={styles.talkbuddyContainer}>
                <View style={styles.talkbuddyTextContainer}>
                  <Text style={styles.talkbuddyText}>TalkBuddy</Text>
                  <Text style={styles.talkbuddySubtext}>
                    - 场景学英语，即学即用～
                  </Text>
                </View>
              </View>
            </View>
          )}

          {/* Slides 2-4: Emoji + Text */}
          {slide.type === "emoji" && (
            <View style={styles.emojiSlide}>
              <View
                style={[
                  styles.emojiContainer,
                  { backgroundColor: slide.emojiBg },
                ]}
              >
                <Text style={styles.emoji}>{slide.emoji}</Text>
              </View>
              <Text style={styles.title}>
                {slide.titleKey ? t(slide.titleKey) : ""}
              </Text>
              <Text style={styles.subtitle}>
                {slide.subtitleKey ? t(slide.subtitleKey) : ""}
              </Text>
            </View>
          )}
        </View>

        {/* Tap right area to go next */}
        <TouchableWithoutFeedback onPress={handleNext}>
          <View style={[styles.tapArea, styles.tapAreaRight]} />
        </TouchableWithoutFeedback>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Dots */}
        <View style={styles.dotsContainer}>
          {slideConfigs.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  width: i === current ? 28 : 8,
                  opacity: i === current ? 1 : 0.25,
                },
              ]}
            />
          ))}
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={styles.continueButton}
          activeOpacity={0.8}
        >
          <Text style={styles.continueText}>
            {current < slideConfigs.length - 1
              ? t("onboarding.continue")
              : t("onboarding.getStarted")}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  skipButton: {
    padding: 8,
  },
  skipText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1c1c1e",
    opacity: 0.5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
  },
  tapArea: {
    width: SCREEN_WIDTH * 0.25,
    position: "absolute",
    top: 0,
    bottom: 100,
    zIndex: 10,
  },
  tapAreaLeft: {
    left: 0,
  },
  tapAreaRight: {
    right: 0,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  beeSlide: {
    alignItems: "center",
    justifyContent: "center",
  },
  talkbuddyContainer: {
    marginTop: 26,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  talkbuddyTextContainer: {
    alignItems: "center",
  },
  talkbuddyText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  talkbuddySubtext: {
    fontSize: 20,
    fontWeight: "500",
    color: "#1c1c1e",
    marginTop: 4,
  },
  emojiSlide: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  emojiContainer: {
    width: 112,
    height: 112,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  emoji: {
    fontSize: 56,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: "#1c1c1e",
    textAlign: "center",
    opacity: 0.7,
    maxWidth: 300,
  },
  bottomContainer: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 32,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1c1c1e",
  },
  continueButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c1c1e",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  continueText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ffd200",
    letterSpacing: 0,
  },
});
