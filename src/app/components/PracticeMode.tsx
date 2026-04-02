/**
 * Practice Mode — Read phrase with 3 playback speeds
 * Based on Web App's phrase-reader.tsx
 * Flow: View phrase → Play (Full/Slow/Word-by-word) → Click words to hear
 */

import { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { speak, stopSpeaking } from "../../services/TTSService";

interface PracticeModeProps {
  phrase: {
    id: string;
    en: string;
    vi: string;
    level: string;
    contextLabel: string;
  };
  onClose: () => void;
}

type PlayMode = "full" | "slow" | "word-by-word" | null;

export default function PracticeMode({ phrase, onClose }: PracticeModeProps) {
  const [activePlay, setActivePlay] = useState<PlayMode>(null);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const words = phrase.en.split(/\s+/).filter(Boolean);

  const handleStop = useCallback(() => {
    void stopSpeaking();
    setIsPlaying(false);
    setActivePlay(null);
    setActiveWordIndex(-1);
  }, []);

  const handlePlayFull = useCallback(async () => {
    if (isPlaying) {
      handleStop();
      return;
    }
    try {
      setIsPlaying(true);
      setActivePlay("full");
      await speak(phrase.en, { accent: "en-US", speed: "normal" });
    } catch {
      // ignore
    } finally {
      setIsPlaying(false);
      setActivePlay(null);
    }
  }, [phrase.en, isPlaying, handleStop]);

  const handlePlaySlow = useCallback(async () => {
    if (isPlaying) {
      handleStop();
      return;
    }
    try {
      setIsPlaying(true);
      setActivePlay("slow");
      await speak(phrase.en, { accent: "en-US", speed: "slow" });
    } catch {
      // ignore
    } finally {
      setIsPlaying(false);
      setActivePlay(null);
    }
  }, [phrase.en, isPlaying, handleStop]);

  const handlePlayWordByWord = useCallback(async () => {
    if (isPlaying) {
      handleStop();
      return;
    }
    setIsPlaying(true);
    setActivePlay("word-by-word");

    for (let i = 0; i < words.length; i++) {
      setActiveWordIndex(i);
      const cleanWord = words[i].replace(/[.,!?;:'"()]/g, "");
      try {
        await speak(cleanWord, { accent: "en-US", speed: "slow" });
        await new Promise((r) => setTimeout(r, 300));
      } catch {
        break;
      }
    }

    setActiveWordIndex(-1);
    setIsPlaying(false);
    setActivePlay(null);
  }, [words, isPlaying, handleStop]);

  const handleWordTap = useCallback(async (word: string) => {
    const cleanWord = word.replace(/[.,!?;:'"()]/g, "");
    await speak(cleanWord, { accent: "en-US", speed: "slow" });
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Practice</Text>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#1C1C1E" />
        </TouchableOpacity>
      </View>

      {/* Level badge */}
      <View style={styles.badgeRow}>
        <View
          style={[
            styles.badge,
            phrase.level === "Advanced"
              ? styles.badgeAdvanced
              : styles.badgeBasic,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              phrase.level === "Advanced"
                ? styles.badgeTextAdvanced
                : styles.badgeTextBasic,
            ]}
          >
            {phrase.level}
          </Text>
        </View>
        <Text style={styles.contextLabel}>{phrase.contextLabel}</Text>
      </View>

      {/* English phrase with tappable words */}
      <View style={styles.phraseContainer}>
        <View style={styles.wordsRow}>
          {words.map((word, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => handleWordTap(word)}
              style={[
                styles.wordButton,
                activeWordIndex === i && styles.wordButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.wordText,
                  activeWordIndex === i && styles.wordTextActive,
                ]}
              >
                {word}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.tipText}>Tap any word to hear it</Text>
      </View>

      {/* Chinese translation */}
      <View style={styles.translationContainer}>
        <Text style={styles.translationText}>{phrase.vi}</Text>
      </View>

      {/* 3-speed playback controls */}
      <View style={styles.playbackBar}>
        <TouchableOpacity
          onPress={handlePlayFull}
          style={[
            styles.playButton,
            activePlay === "full" && styles.playButtonActive,
          ]}
        >
          <Ionicons
            name="volume-high"
            size={18}
            color={activePlay === "full" ? "#FFFFFF" : "#666"}
          />
          <Text
            style={[
              styles.playButtonText,
              activePlay === "full" && styles.playButtonTextActive,
            ]}
          >
            Full
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePlaySlow}
          style={[
            styles.playButton,
            activePlay === "slow" && styles.playButtonActive,
          ]}
        >
          <Ionicons
            name="speedometer-outline"
            size={18}
            color={activePlay === "slow" ? "#FFFFFF" : "#666"}
          />
          <Text
            style={[
              styles.playButtonText,
              activePlay === "slow" && styles.playButtonTextActive,
            ]}
          >
            Slow
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePlayWordByWord}
          style={[
            styles.playButton,
            activePlay === "word-by-word" && styles.playButtonActive,
          ]}
        >
          <Ionicons
            name="play-skip-forward"
            size={18}
            color={activePlay === "word-by-word" ? "#FFFFFF" : "#666"}
          />
          <Text
            style={[
              styles.playButtonText,
              activePlay === "word-by-word" && styles.playButtonTextActive,
            ]}
          >
            Word
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  closeButton: {
    padding: 4,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeBasic: {
    backgroundColor: "#E8F5E9",
  },
  badgeAdvanced: {
    backgroundColor: "#FFF3E0",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  badgeTextBasic: {
    color: "#2E7D32",
  },
  badgeTextAdvanced: {
    color: "#E65100",
  },
  contextLabel: {
    fontSize: 13,
    color: "#9E9E9E",
  },
  phraseContainer: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  wordsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  wordButton: {
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  wordButtonActive: {
    backgroundColor: "#FFD600",
  },
  wordText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  wordTextActive: {
    color: "#1C1C1E",
  },
  tipText: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 10,
    fontStyle: "italic",
  },
  translationContainer: {
    backgroundColor: "#FFF8E1",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  translationText: {
    fontSize: 16,
    color: "#5D4037",
    lineHeight: 22,
  },
  playbackBar: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  playButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
  },
  playButtonActive: {
    backgroundColor: "#FFD600",
  },
  playButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
  },
  playButtonTextActive: {
    color: "#FFFFFF",
  },
});
