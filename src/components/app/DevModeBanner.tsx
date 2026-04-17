import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DevModeBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're in development mode
    const checkDevMode = () => {
      try {
        const isDev = process.env.NODE_ENV === "development";
        if (isDev) {
          setIsVisible(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 10000);
        }
      } catch (error) {
        console.log("Dev mode check failed:", error);
      }
    };

    checkDevMode();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>🔧 Development Mode</Text>
        <Text style={styles.bannerSubtext}>
          Running without backend connection
        </Text>
      </View>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsVisible(false)}
      >
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  banner: {
    flex: 1,
    backgroundColor: "#FF6B35",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  bannerText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  bannerSubtext: {
    color: "#fff",
    fontSize: 10,
    opacity: 0.9,
    marginTop: 2,
  },
  closeButton: {
    marginLeft: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});
