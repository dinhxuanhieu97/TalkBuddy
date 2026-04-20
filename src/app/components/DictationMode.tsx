/**
 * Dictation Mode — Listen to audio, then quiz on meaning
 * Based on Web App's listening-mode.tsx
 * Flow: Listen (Full/Slow/Word-by-word) → Quiz (choose correct meaning) → Result
 */

import { useState, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { speak, stopSpeaking } from "../../services/TTSService";

interface DictationModeProps {
  phrase: {
    id: string;
    en: string;
    vi: string;
    level: string;
    contextLabel: string;
  };
  onClose: () => void;
}

type DictationStep = "listen" | "quiz" | "result";
type ActivePlay = "full" | "slow" | "word-by-word" | null;

// Distractor phrases for quiz
const DISTRACTORS = [
  "我不明白",
  "请稍等",
  "没关系",
  "我做不到",
  "去哪里",
  "让我看看文件",
  "多少钱?",
  "已经没货了",
  "非常感谢",
  "我需要帮助",
  "对不起，我迷路了",
  "请说慢一点",
];

function generateQuizOptions(correctVi: string) {
  const filtered = DISTRACTORS.filter(
    (d) => d !== correctVi && !correctVi.includes(d) && !d.includes(correctVi),
  );
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, 2);

  const options = [
    { text: correctVi, correct: true },
    { text: picked[0] || "我不明白", correct: false },
    { text: picked[1] || "再见", correct: false },
  ];

  return options.sort(() => Math.random() - 0.5);
}

export default function DictationMode({ phrase, onClose }: DictationModeProps) {
  const [step, setStep] = useState<DictationStep>("listen");
  const [playCount, setPlayCount] = useState(0);
  const [activePlay, setActivePlay] = useState<ActivePlay>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const quizOptions = useMemo(
    () => generateQuizOptions(phrase.vi),
    [phrase.vi],
  );
  const words = phrase.en.split(/\s+/).filter(Boolean);

  const handleStop = useCallback(() => {
    void stopSpeaking();
    setIsPlaying(false);
    setActivePlay(null);
  }, []);

  const handlePlayFull = useCallback(async () => {
    if (isPlaying) {
      handleStop();
      return;
    }
    try {
      setIsPlaying(true);
      setActivePlay("full");
      setPlayCount((c) => c + 1);
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
      setPlayCount((c) => c + 1);
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
    setPlayCount((c) => c + 1);

    for (const word of words) {
      const cleanWord = word.replace(/[.,!?;:'"()]/g, "");
      try {
        await speak(cleanWord, { accent: "en-US", speed: "slow" });
        await new Promise((r) => setTimeout(r, 300));
      } catch {
        break;
      }
    }

    setIsPlaying(false);
    setActivePlay(null);
  }, [words, isPlaying, handleStop]);

  const handleAnswer = useCallback(
    (answerIndex: number, isCorrect: boolean) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(answerIndex);
      const calculatedScore = isCorrect ? 100 : 40;
      setScore(calculatedScore);
      setTimeout(() => {
        setStep("result");
      }, 1200);
    },
    [selectedAnswer],
  );

  const handleRetry = useCallback(() => {
    setStep("listen");
    setPlayCount(0);
    setSelectedAnswer(null);
    setScore(0);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="ear-outline" size={20} color="#7B1FA2" />
          <Text style={styles.title}>Dictation</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.stepBadge}>
            <Text style={styles.stepText}>
              Step {step === "listen" ? "1" : step === "quiz" ? "2" : "3"}/3
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Step 1: Listen */}
      {step === "listen" && (
        <View>
          <View style={[styles.stepContainer, styles.stepActive]}>
            <View style={styles.stepHeader}>
              <View style={[styles.stepNumber, styles.stepNumberActive]}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepTitle}>Listen carefully</Text>
            </View>

            {/* 3-speed playback */}
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
                  size={16}
                  color={activePlay === "full" ? "#FFF" : "#666"}
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
                  size={16}
                  color={activePlay === "slow" ? "#FFF" : "#666"}
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
                  size={16}
                  color={activePlay === "word-by-word" ? "#FFF" : "#666"}
                />
                <Text
                  style={[
                    styles.playButtonText,
                    activePlay === "word-by-word" &&
                      styles.playButtonTextActive,
                  ]}
                >
                  Word
                </Text>
              </TouchableOpacity>
            </View>

            {playCount > 0 && (
              <Text style={styles.listenCount}>
                Listened {playCount} time{playCount > 1 ? "s" : ""}
              </Text>
            )}
          </View>

          {/* Start quiz button */}
          <TouchableOpacity
            onPress={() => setStep("quiz")}
            disabled={playCount < 1}
            style={[
              styles.quizButton,
              playCount < 1 && styles.quizButtonDisabled,
            ]}
          >
            <Ionicons
              name="help-circle"
              size={18}
              color={playCount < 1 ? "#CCC" : "#FFF"}
            />
            <Text
              style={[
                styles.quizButtonText,
                playCount < 1 && styles.quizButtonTextDisabled,
              ]}
            >
              {playCount < 1
                ? "Listen first to unlock quiz"
                : "Test your understanding"}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Step 2: Quiz */}
      {step === "quiz" && (
        <View>
          <View style={styles.quizHeader}>
            <Text style={styles.quizTitle}>What does this mean?</Text>
            <TouchableOpacity
              onPress={handlePlayFull}
              style={styles.replayButton}
            >
              <Ionicons name="volume-high" size={16} color="#7B1FA2" />
              <Text style={styles.replayText}>Listen again</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsContainer}>
            {quizOptions.map((option, i) => {
              const isSelected = selectedAnswer === i;
              const showFeedback = selectedAnswer !== null;

              let optionStyle = styles.optionDefault;
              let textStyle = styles.optionTextDefault;

              if (showFeedback) {
                if (option.correct) {
                  optionStyle = styles.optionCorrect;
                  textStyle = styles.optionTextCorrect;
                } else if (isSelected && !option.correct) {
                  optionStyle = styles.optionWrong;
                  textStyle = styles.optionTextWrong;
                } else {
                  optionStyle = styles.optionDimmed;
                  textStyle = styles.optionTextDimmed;
                }
              }

              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => handleAnswer(i, option.correct)}
                  disabled={selectedAnswer !== null}
                  style={[styles.optionButton, optionStyle]}
                >
                  {showFeedback && option.correct && (
                    <Ionicons
                      name="checkmark-circle"
                      size={18}
                      color="#2E7D32"
                    />
                  )}
                  {showFeedback && isSelected && !option.correct && (
                    <Ionicons name="close-circle" size={18} color="#C62828" />
                  )}
                  <Text style={[styles.optionText, textStyle]}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {selectedAnswer !== null && (
            <Text
              style={[
                styles.feedbackText,
                quizOptions[selectedAnswer]?.correct
                  ? styles.feedbackCorrect
                  : styles.feedbackWrong,
              ]}
            >
              {quizOptions[selectedAnswer]?.correct
                ? "Correct!"
                : "Not quite right"}
            </Text>
          )}
        </View>
      )}

      {/* Step 3: Result */}
      {step === "result" && (
        <View>
          <View
            style={[
              styles.resultBanner,
              score >= 80 ? styles.resultGood : styles.resultNeedWork,
            ]}
          >
            <Text style={styles.resultEmoji}>{score >= 80 ? "🎉" : "💪"}</Text>
            <Text
              style={[
                styles.resultTitle,
                score >= 80
                  ? styles.resultTitleGood
                  : styles.resultTitleNeedWork,
              ]}
            >
              {score >= 80 ? "Excellent!" : "Keep practicing!"}
            </Text>
            <Text
              style={[
                styles.resultSubtitle,
                score >= 80 ? styles.resultSubGood : styles.resultSubNeedWork,
              ]}
            >
              {score >= 80
                ? "You understood the phrase correctly"
                : "Try listening a few more times"}
            </Text>
          </View>

          {/* Show full content */}
          <View style={styles.answerCard}>
            <Text style={styles.answerEn}>{phrase.en}</Text>
            <Text style={styles.answerVi}>{phrase.vi}</Text>
          </View>

          <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
            <Ionicons name="refresh" size={16} color="#666" />
            <Text style={styles.retryText}>Practice again</Text>
          </TouchableOpacity>
        </View>
      )}
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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  stepBadge: {
    backgroundColor: "#F3E5F5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stepText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7B1FA2",
  },
  closeButton: {
    padding: 4,
  },
  stepContainer: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  stepActive: {
    backgroundColor: "#F3E5F5",
    borderWidth: 1,
    borderColor: "#CE93D8",
  },
  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E0E0E0",
  },
  stepNumberActive: {
    backgroundColor: "#7B1FA2",
  },
  stepNumberText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  playbackBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 3,
    gap: 3,
  },
  playButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 9,
    borderRadius: 8,
  },
  playButtonActive: {
    backgroundColor: "#7B1FA2",
  },
  playButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#666",
  },
  playButtonTextActive: {
    color: "#FFFFFF",
  },
  listenCount: {
    fontSize: 12,
    color: "#7B1FA2",
    textAlign: "center",
    marginTop: 10,
  },
  quizButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#7B1FA2",
    paddingVertical: 14,
    borderRadius: 12,
  },
  quizButtonDisabled: {
    backgroundColor: "#E0E0E0",
  },
  quizButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  quizButtonTextDisabled: {
    color: "#999",
  },
  quizHeader: {
    alignItems: "center",
    marginBottom: 16,
  },
  quizTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 10,
  },
  replayButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F3E5F5",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  replayText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#7B1FA2",
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  optionDefault: {
    borderColor: "#E0E0E0",
    backgroundColor: "#FAFAFA",
  },
  optionCorrect: {
    borderColor: "#66BB6A",
    backgroundColor: "#E8F5E9",
  },
  optionWrong: {
    borderColor: "#EF5350",
    backgroundColor: "#FFEBEE",
  },
  optionDimmed: {
    borderColor: "#E0E0E0",
    backgroundColor: "#FAFAFA",
    opacity: 0.5,
  },
  optionText: {
    fontSize: 15,
    flex: 1,
  },
  optionTextDefault: {
    color: "#1C1C1E",
  },
  optionTextCorrect: {
    color: "#2E7D32",
    fontWeight: "600",
  },
  optionTextWrong: {
    color: "#C62828",
  },
  optionTextDimmed: {
    color: "#999",
  },
  feedbackText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 12,
  },
  feedbackCorrect: {
    color: "#2E7D32",
  },
  feedbackWrong: {
    color: "#C62828",
  },
  resultBanner: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  resultGood: {
    backgroundColor: "#E8F5E9",
  },
  resultNeedWork: {
    backgroundColor: "#FFF3E0",
  },
  resultEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  resultTitleGood: {
    color: "#2E7D32",
  },
  resultTitleNeedWork: {
    color: "#E65100",
  },
  resultSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  resultSubGood: {
    color: "#388E3C",
  },
  resultSubNeedWork: {
    color: "#F57C00",
  },
  answerCard: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  answerEn: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 6,
  },
  answerVi: {
    fontSize: 15,
    color: "#666",
  },
  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#F0F0F0",
    paddingVertical: 12,
    borderRadius: 10,
  },
  retryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
});
