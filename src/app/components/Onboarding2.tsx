import { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  PanResponder,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useT } from "../../lib/i18n";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Combined slides from Onboarding + Onboarding2
const slides = (t: ReturnType<typeof useT>) => [
  // Onboarding 1 - Bee animation
  {
    id: 0,
    type: "bee",
    title: t("onboarding.forTravelers"),
    subtitle: t("onboarding.forTravelersSubtitle"),
  },
  // Onboarding 2 - Emoji style
  {
    id: 1,
    type: "emoji",
    emoji: "🚨",
    title: t("onboarding.translateForEveryone"),
    subtitle: t("onboarding.translateForEveryoneSubtitle"),
  },
  // Onboarding 3 - Speak like a local
  {
    id: 2,
    type: "emoji",
    emoji: "🗣️",
    title: t("onboarding.speakLikeLocal"),
    subtitle: t("onboarding.speakLikeLocalSubtitle"),
  },
  // Onboarding 4 - Track progress
  {
    id: 3,
    type: "emoji",
    emoji: "📚",
    title: t("onboarding.trackProgress"),
    subtitle: t("onboarding.trackProgressSubtitle"),
  },
];

export default function Onboarding2() {
  const router = useRouter();
  const t = useT();
  const [current, setCurrent] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleNext = async () => {
    if (current < slides(t).length - 1) {
      setCurrent(current + 1);
    } else {
      try {
        await AsyncStorage.setItem("hasSeenOnboarding", "true");
      } catch (error) {
        console.log("Error saving onboarding status:", error);
      }
      router.replace("/");
    }
  };

  const handleSkip = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
    } catch (error) {
      console.log("Error saving onboarding status:", error);
    }
    router.replace("/");
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  // PanResponder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderGrant: () => {
        translateX.setOffset(0);
      },
      onPanResponderMove: (_, gestureState) => {
        translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        translateX.stopAnimation();

        if (gestureState.dx < -30 && current < slides(t).length - 1) {
          // Swipe left - go to next immediately
          handleNext();
        } else if (gestureState.dx > 30 && current > 0) {
          // Swipe right - go to previous immediately
          handlePrev();
        } else {
          // Return to original position with animation
          Animated.spring(translateX, {
            toValue: 0,
            friction: 8,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const slide = slides(t)[current];

  return (
    <LinearGradient
      colors={["#f9f9f9", "#ffd200"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>{t("onboarding.skip")}</Text>
        </TouchableOpacity>
      </View>

      {/* Content Area with Swipe */}
      <Animated.View
        style={[styles.contentContainer, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        {/* Bee Animation Slide */}
        {slide.type === "bee" && (
          <View style={styles.slideContent}>
            <View style={styles.beeContainer}>
              <AnimatedBeeIcon />
            </View>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.subtitle}>{slide.subtitle}</Text>
          </View>
        )}

        {/* Emoji Slides */}
        {slide.type === "emoji" && (
          <View style={styles.slideContent}>
            <View style={styles.emojiContainer}>
              <Text style={styles.emoji}>{slide.emoji}</Text>
            </View>
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.subtitle}>{slide.subtitle}</Text>
          </View>
        )}
      </Animated.View>

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        {/* Dots */}
        <View style={styles.dotsContainer}>
          {slides(t).map((_, i) => (
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
            {current < slides(t).length - 1
              ? t("common.continue")
              : t("common.getStarted")}
            {current < slides(t).length - 1 ? " →" : ""}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Animated Bee SVG Component
function AnimatedBeeIcon() {
  const flyAnim = useRef(new Animated.Value(0)).current;
  const wingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Flying animation (up/down)
    Animated.loop(
      Animated.sequence([
        Animated.timing(flyAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(flyAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Wing flapping animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(wingAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(wingAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [flyAnim, wingAnim]);

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
      <View style={styles.beeSvgContainer}>
        <Text style={styles.beeEmoji}>🐝</Text>
      </View>
    </Animated.View>
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
    justifyContent: "center",
  },
  slideContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  beeContainer: {
    width: 110,
    height: 76,
    marginBottom: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  beeSvgContainer: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  beeEmoji: {
    fontSize: 64,
  },
  emojiContainer: {
    width: 112,
    height: 112,
    borderRadius: 24,
    backgroundColor: "rgba(28,28,30,0.1)",
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
    fontSize: 14,
    lineHeight: 21,
    color: "#1c1c1e",
    textAlign: "center",
    opacity: 0.7,
    maxWidth: 300,
  },
  bottomContainer: {
    paddingHorizontal: 32,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
  },
});
