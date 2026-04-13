import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  sosService,
  type SosCategory,
  type SosPhrase,
} from "../../services/sosService";

export default function SosScreen() {
  const [selectedCategory, setSelectedCategory] = useState<SosCategory | null>(
    null,
  );
  const [playingPhrase, setPlayingPhrase] = useState<string | null>(null);

  const categories = sosService.getCategories();

  const handlePlayPhrase = async (phrase: SosPhrase) => {
    setPlayingPhrase(phrase.id);
    try {
      await sosService.speakPhrase(phrase);
    } finally {
      setPlayingPhrase(null);
    }
  };

  const handleStopSpeaking = () => {
    sosService.stopSpeaking();
    setPlayingPhrase(null);
  };

  const getEmergencyColor = (level: string) => {
    switch (level) {
      case "critical":
        return "#EF4444";
      case "urgent":
        return "#F97316";
      case "important":
        return "#3B82F6";
      default:
        return "#6B7280";
    }
  };

  const renderCategoryGrid = () => (
    <View style={styles.grid}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={[styles.categoryCard, { borderLeftColor: cat.color }]}
          onPress={() => setSelectedCategory(cat)}
        >
          <Ionicons name={cat.icon as any} size={28} color={cat.color} />
          <Text style={styles.categoryName}>{cat.name}</Text>
          <Text style={styles.categoryCount}>{cat.phrases.length} phrases</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderCategoryDetail = () => {
    if (!selectedCategory) return null;

    return (
      <View style={styles.detailContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedCategory(null)}
        >
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View
          style={[
            styles.detailHeader,
            { backgroundColor: selectedCategory.color + "20" },
          ]}
        >
          <Ionicons
            name={selectedCategory.icon as any}
            size={40}
            color={selectedCategory.color}
          />
          <Text style={[styles.detailTitle, { color: selectedCategory.color }]}>
            {selectedCategory.name}
          </Text>
          <Text style={styles.detailCount}>
            {selectedCategory.phrases.length} emergency phrases
          </Text>
        </View>

        <ScrollView style={styles.phraseList}>
          {selectedCategory.phrases.map((phrase) => (
            <View
              key={phrase.id}
              style={[
                styles.phraseCard,
                { borderLeftColor: getEmergencyColor(phrase.emergencyLevel) },
              ]}
            >
              <View style={styles.phraseContent}>
                <Text style={styles.phraseEn}>{phrase.en}</Text>
                <Text style={styles.phraseVi}>{phrase.vi}</Text>
                <View style={styles.phraseMeta}>
                  <View
                    style={[
                      styles.emergencyBadge,
                      {
                        backgroundColor:
                          getEmergencyColor(phrase.emergencyLevel) + "20",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.emergencyText,
                        { color: getEmergencyColor(phrase.emergencyLevel) },
                      ]}
                    >
                      {phrase.emergencyLevel.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() =>
                  playingPhrase === phrase.id
                    ? handleStopSpeaking()
                    : handlePlayPhrase(phrase)
                }
              >
                <Ionicons
                  name={playingPhrase === phrase.id ? "stop" : "volume-high"}
                  size={24}
                  color={selectedCategory.color}
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.playAllButton}
          onPress={() => sosService.speakAllPhrases(selectedCategory)}
        >
          <Ionicons name="play-circle" size={24} color="white" />
          <Text style={styles.playAllText}>Play All Phrases</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F9FAFB" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>🚨 SOS Buddy</Text>
        <Text style={styles.headerSubtitle}>
          Quick emergency phrases for travelers
        </Text>
      </View>

      {selectedCategory ? renderCategoryDetail() : renderCategoryGrid()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: "#F9FAFB",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 12,
    gap: 12,
  },
  categoryCard: {
    width: "47%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 12,
  },
  categoryCount: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  detailContainer: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: "#1C1C1E",
    marginLeft: 8,
  },
  detailHeader: {
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 12,
  },
  detailCount: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  phraseList: {
    flex: 1,
  },
  phraseCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  phraseContent: {
    flex: 1,
  },
  phraseEn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  phraseVi: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },
  phraseMeta: {
    flexDirection: "row",
    marginTop: 8,
  },
  emergencyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  emergencyText: {
    fontSize: 10,
    fontWeight: "700",
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  playAllButton: {
    flexDirection: "row",
    backgroundColor: "#EF4444",
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 8,
  },
  playAllText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
