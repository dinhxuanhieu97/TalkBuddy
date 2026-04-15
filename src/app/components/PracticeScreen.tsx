import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useT } from "../../lib/i18n";

type Exercise = {
  id: string;
  type: "listening" | "speaking" | "reading" | "writing";
  question: string;
  answer: string;
  options?: string[];
};

const EXERCISES: Exercise[] = [
  {
    id: "1",
    type: "listening",
    question: "Listen and choose the correct translation",
    answer: "Xin chào",
    options: ["Xin chào", "Cảm ơn", "Tạm biệt", "Xin lỗi"],
  },
  {
    id: "2",
    type: "reading",
    question: "What does 'Cảm ơn' mean?",
    answer: "Thank you",
    options: ["Hello", "Thank you", "Goodbye", "Sorry"],
  },
  {
    id: "3",
    type: "writing",
    question: "How do you say 'Goodbye' in Vietnamese?",
    answer: "Tạm biệt",
  },
  {
    id: "4",
    type: "speaking",
    question: "Pronounce: 'Xin lỗi'",
    answer: "Xin lỗi",
  },
];

export default function PracticeScreen() {
  const t = useT();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [userInput, setUserInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedExercises, setCompletedExercises] = useState(0);

  const currentExercise = EXERCISES[currentExerciseIndex];
  const isCorrect =
    showResult &&
    (selectedAnswer === currentExercise.answer ||
      userInput.toLowerCase().trim() === currentExercise.answer.toLowerCase());

  const handleSubmit = () => {
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }
    setCompletedExercises(completedExercises + 1);
  };

  const handleNext = () => {
    if (currentExerciseIndex < EXERCISES.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setSelectedAnswer(null);
      setUserInput("");
      setShowResult(false);
    } else {
      // Reset to start
      setCurrentExerciseIndex(0);
      setSelectedAnswer(null);
      setUserInput("");
      setShowResult(false);
      setCompletedExercises(0);
      setScore(0);
    }
  };

  const getExerciseIcon = (type: Exercise["type"]) => {
    switch (type) {
      case "listening":
        return "ear";
      case "speaking":
        return "mic";
      case "reading":
        return "book";
      case "writing":
        return "create";
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("practice.title")}</Text>
        <View style={styles.scoreContainer}>
          <Ionicons name="trophy" size={20} color="#FFD600" />
          <Text style={styles.scoreText}>
            {score}/{completedExercises}
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentExerciseIndex + 1) / EXERCISES.length) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>
          {currentExerciseIndex + 1} / {EXERCISES.length}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Exercise Card */}
        <View style={styles.exerciseCard}>
          <View style={styles.exerciseHeader}>
            <View style={styles.exerciseTypeContainer}>
              <Ionicons
                name={getExerciseIcon(currentExercise.type) as any}
                size={24}
                color="#1C1C1E"
              />
              <Text style={styles.exerciseType}>
                {t(`practice.type.${currentExercise.type}`)}
              </Text>
            </View>
          </View>

          <Text style={styles.question}>{currentExercise.question}</Text>

          {/* Options for multiple choice */}
          {currentExercise.options && (
            <View style={styles.optionsContainer}>
              {currentExercise.options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedAnswer === option && styles.optionButtonSelected,
                    showResult &&
                      option === currentExercise.answer &&
                      styles.optionButtonCorrect,
                    showResult &&
                      selectedAnswer === option &&
                      option !== currentExercise.answer &&
                      styles.optionButtonWrong,
                  ]}
                  onPress={() => !showResult && setSelectedAnswer(option)}
                  disabled={showResult}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedAnswer === option && styles.optionTextSelected,
                      showResult &&
                        option === currentExercise.answer &&
                        styles.optionTextCorrect,
                    ]}
                  >
                    {option}
                  </Text>
                  {showResult && option === currentExercise.answer && (
                    <Ionicons
                      name="checkmark-circle"
                      size={20}
                      color="#34C759"
                    />
                  )}
                  {showResult &&
                    selectedAnswer === option &&
                    option !== currentExercise.answer && (
                      <Ionicons name="close-circle" size={20} color="#FF3B30" />
                    )}
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Text input for writing exercises */}
          {!currentExercise.options && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder={t("practice.inputPlaceholder")}
                value={userInput}
                onChangeText={setUserInput}
                editable={!showResult}
                placeholderTextColor="#9E9E9E"
              />
              {currentExercise.type === "speaking" && (
                <TouchableOpacity style={styles.micButton}>
                  <Ionicons name="mic" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              )}
            </View>
          )}

          {/* Result */}
          {showResult && (
            <View
              style={[
                styles.resultContainer,
                isCorrect ? styles.resultCorrect : styles.resultWrong,
              ]}
            >
              <Ionicons
                name={isCorrect ? "checkmark-circle" : "close-circle"}
                size={24}
                color={isCorrect ? "#34C759" : "#FF3B30"}
              />
              <Text
                style={[
                  styles.resultText,
                  isCorrect ? styles.resultTextCorrect : styles.resultTextWrong,
                ]}
              >
                {isCorrect
                  ? t("practice.result.correct")
                  : t("practice.result.incorrect").replace(
                      "{answer}",
                      currentExercise.answer,
                    )}
              </Text>
            </View>
          )}

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            {!showResult ? (
              <TouchableOpacity
                style={[
                  styles.submitButton,
                  !selectedAnswer &&
                    !userInput.trim() &&
                    styles.submitButtonDisabled,
                ]}
                onPress={handleSubmit}
                disabled={!selectedAnswer && !userInput.trim()}
              >
                <Text style={styles.submitButtonText}>
                  {t("practice.checkAnswer")}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>
                  {currentExerciseIndex < EXERCISES.length - 1
                    ? t("practice.nextExercise")
                    : t("practice.restart")}
                </Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Tips */}
        <View style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="bulb" size={20} color="#FFD600" />
            <Text style={styles.tipsTitle}>{t("practice.tipTitle")}</Text>
          </View>
          <Text style={styles.tipsText}>{t("practice.tipContent")}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: "#FFD600",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#FFF9E6",
    borderRadius: 16,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#FFD600",
  },
  progressText: {
    fontSize: 12,
    color: "#9E9E9E",
    textAlign: "center",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  exerciseHeader: {
    marginBottom: 20,
  },
  exerciseTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#F3F3F5",
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  exerciseType: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  question: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 24,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#F3F3F5",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  optionButtonSelected: {
    borderColor: "#1C1C1E",
    backgroundColor: "#FFFFFF",
  },
  optionButtonCorrect: {
    borderColor: "#34C759",
    backgroundColor: "#E8F5E9",
  },
  optionButtonWrong: {
    borderColor: "#FF3B30",
    backgroundColor: "#FFEBEE",
  },
  optionText: {
    fontSize: 16,
    color: "#1C1C1E",
    flex: 1,
  },
  optionTextSelected: {
    fontWeight: "600",
  },
  optionTextCorrect: {
    color: "#34C759",
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#F3F3F5",
    borderRadius: 12,
    fontSize: 16,
    color: "#1C1C1E",
    borderWidth: 2,
    borderColor: "transparent",
  },
  micButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  resultCorrect: {
    backgroundColor: "#E8F5E9",
  },
  resultWrong: {
    backgroundColor: "#FFEBEE",
  },
  resultText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
  },
  resultTextCorrect: {
    color: "#34C759",
  },
  resultTextWrong: {
    color: "#FF3B30",
  },
  actionButtons: {
    gap: 12,
  },
  submitButton: {
    paddingVertical: 16,
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#E0E0E0",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  nextButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    backgroundColor: "#34C759",
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  tipsCard: {
    backgroundColor: "#FFF9E6",
    borderRadius: 12,
    padding: 16,
  },
  tipsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  tipsText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
