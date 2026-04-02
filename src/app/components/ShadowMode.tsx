/**
 * Shadow Mode — Listen to original, record yourself, compare
 * Based on Web App's shadowing-mode.tsx
 * Flow: Listen → Record → Compare (playback original vs recording) → Self-score
 * Note: Recording uses expo-av for React Native audio recording
 */

import { useState, useCallback, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { speak, stopSpeaking } from "../../services/TTSService";

interface ShadowModeProps {
  phrase: {
    id: string;
    en: string;
    vi: string;
    level: string;
    contextLabel: string;
  };
  onClose: () => void;
}

type ShadowStep = "listen" | "record" | "compare";

export default function ShadowMode({ phrase, onClose }: ShadowModeProps) {
  const [step, setStep] = useState<ShadowStep>("listen");
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [recordingUri, setRecordingUri] = useState<string | null>(null);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [listenCount, setListenCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [selfScore, setSelfScore] = useState<number | null>(null);
  const [micError, setMicError] = useState<string | null>(null);

  const recordingRef = useRef<Audio.Recording | null>(null);
  const soundRef = useRef<Audio.Sound | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (recordingRef.current) {
        recordingRef.current.stopAndUnloadAsync().catch(() => {});
      }
      if (soundRef.current) {
        soundRef.current.unloadAsync().catch(() => {});
      }
    };
  }, []);

  // --- Listen to original ---
  const handlePlayOriginal = useCallback(async () => {
    if (isPlayingOriginal) {
      await stopSpeaking();
      setIsPlayingOriginal(false);
      return;
    }
    setIsPlayingOriginal(true);
    setListenCount((c) => c + 1);
    try {
      await speak(phrase.en, { accent: "en-US", speed: "normal" });
    } catch {
      // ignore
    }
    setIsPlayingOriginal(false);
    if (step === "listen") setStep("record");
  }, [phrase.en, step, isPlayingOriginal]);

  const handlePlaySlow = useCallback(async () => {
    if (isPlayingOriginal) {
      await stopSpeaking();
      setIsPlayingOriginal(false);
      return;
    }
    setIsPlayingOriginal(true);
    try {
      await speak(phrase.en, { accent: "en-US", speed: "slow" });
    } catch {
      // ignore
    }
    setIsPlayingOriginal(false);
  }, [phrase.en, isPlayingOriginal]);

  // --- Recording ---
  const startRecording = useCallback(async () => {
    setMicError(null);
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (!permission.granted) {
        setMicError("Microphone permission denied");
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
      );

      recordingRef.current = recording;
      setIsRecording(true);
      setRecordingDuration(0);

      timerRef.current = setInterval(() => {
        setRecordingDuration((d) => d + 1);
      }, 1000);
    } catch (err) {
      setMicError("Failed to start recording");
    }
  }, []);

  const stopRecording = useCallback(async () => {
    if (!recordingRef.current) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    try {
      await recordingRef.current.stopAndUnloadAsync();
      const uri = recordingRef.current.getURI();
      setRecordingUri(uri);
      recordingRef.current = null;
      setIsRecording(false);
      setStep("compare");

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
      });
    } catch {
      setIsRecording(false);
    }
  }, []);

  // --- Playback recording ---
  const playRecording = useCallback(async () => {
    if (!recordingUri) return;

    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: recordingUri },
        { shouldPlay: true },
      );
      soundRef.current = sound;
      setIsPlayingRecording(true);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlayingRecording(false);
          sound.unloadAsync();
          soundRef.current = null;
        }
      });
    } catch {
      setIsPlayingRecording(false);
    }
  }, [recordingUri]);

  const stopPlayback = useCallback(async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync();
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    setIsPlayingRecording(false);
  }, []);

  // --- Self scoring ---
  const handleSelfScore = useCallback((score: number) => {
    setSelfScore(score);
  }, []);

  // --- Retry ---
  const handleRetry = useCallback(() => {
    void stopSpeaking();
    if (soundRef.current) {
      soundRef.current.unloadAsync().catch(() => {});
      soundRef.current = null;
    }
    setStep("listen");
    setRecordingUri(null);
    setIsRecording(false);
    setRecordingDuration(0);
    setSelfScore(null);
    setShowText(false);
    setListenCount(0);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="mic" size={20} color="#E65100" />
          <Text style={styles.title}>Shadow</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => setShowText(!showText)}
            style={[
              styles.showTextButton,
              showText && styles.showTextButtonActive,
            ]}
          >
            <Text
              style={[
                styles.showTextButtonText,
                showText && styles.showTextButtonTextActive,
              ]}
            >
              {showText ? "Hide text" : "Show text"}
            </Text>
          </TouchableOpacity>
          <View style={styles.stepBadge}>
            <Text style={styles.stepBadgeText}>
              Step {step === "listen" ? "1" : step === "record" ? "2" : "3"}/3
            </Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Show text toggle */}
      {showText && (
        <View style={styles.textReveal}>
          <Text style={styles.textRevealEn}>{phrase.en}</Text>
          <Text style={styles.textRevealVi}>{phrase.vi}</Text>
        </View>
      )}

      {/* Step 1: Listen */}
      <View style={[styles.stepBox, step === "listen" && styles.stepBoxActive]}>
        <View style={styles.stepHeader}>
          <View
            style={[
              styles.stepNumber,
              listenCount > 0
                ? styles.stepNumberDone
                : step === "listen"
                  ? styles.stepNumberCurrent
                  : styles.stepNumberDefault,
            ]}
          >
            <Text style={styles.stepNumberText}>
              {listenCount > 0 ? "✓" : "1"}
            </Text>
          </View>
          <Text style={styles.stepTitle}>Listen to the original</Text>
        </View>
        <TouchableOpacity
          onPress={handlePlayOriginal}
          style={[
            styles.actionButton,
            step === "listen"
              ? styles.actionButtonPrimary
              : styles.actionButtonSecondary,
          ]}
          disabled={isRecording}
        >
          <Ionicons
            name="volume-high"
            size={18}
            color={step === "listen" ? "#FFF" : "#666"}
          />
          <Text
            style={[
              styles.actionButtonText,
              step === "listen"
                ? styles.actionButtonTextPrimary
                : styles.actionButtonTextSecondary,
            ]}
          >
            {isPlayingOriginal
              ? "Playing..."
              : listenCount === 0
                ? "Click to listen"
                : `Listen again (${listenCount})`}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Step 2: Record */}
      <View style={[styles.stepBox, step === "record" && styles.stepBoxActive]}>
        <View style={styles.stepHeader}>
          <View
            style={[
              styles.stepNumber,
              recordingUri
                ? styles.stepNumberDone
                : step === "record"
                  ? styles.stepNumberCurrent
                  : styles.stepNumberDefault,
            ]}
          >
            <Text style={styles.stepNumberText}>
              {recordingUri ? "✓" : "2"}
            </Text>
          </View>
          <Text style={styles.stepTitle}>Record yourself</Text>
        </View>

        {micError && <Text style={styles.micError}>{micError}</Text>}

        {isRecording ? (
          <View>
            <View style={styles.recordingIndicator}>
              <View style={styles.recordingDot} />
              <Text style={styles.recordingTime}>
                {formatTime(recordingDuration)}
              </Text>
            </View>
            <TouchableOpacity
              onPress={stopRecording}
              style={styles.stopRecordButton}
            >
              <Ionicons name="stop" size={18} color="#FFF" />
              <Text style={styles.stopRecordText}>Stop recording</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={startRecording}
            disabled={step === "listen" && listenCount === 0}
            style={[
              styles.actionButton,
              step === "record"
                ? styles.actionButtonPrimary
                : styles.actionButtonSecondary,
              step === "listen" &&
                listenCount === 0 &&
                styles.actionButtonDisabled,
            ]}
          >
            <Ionicons
              name="mic"
              size={18}
              color={step === "record" ? "#FFF" : "#666"}
            />
            <Text
              style={[
                styles.actionButtonText,
                step === "record"
                  ? styles.actionButtonTextPrimary
                  : styles.actionButtonTextSecondary,
              ]}
            >
              {recordingUri ? "Re-record" : "Start recording"}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Step 3: Compare & Score */}
      {step === "compare" && recordingUri && (
        <View style={[styles.stepBox, styles.stepBoxActive]}>
          <View style={styles.stepHeader}>
            <View style={[styles.stepNumber, styles.stepNumberCurrent]}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <Text style={styles.stepTitle}>Compare & rate yourself</Text>
          </View>

          {/* Compare buttons */}
          <View style={styles.compareRow}>
            <TouchableOpacity
              onPress={handlePlayOriginal}
              disabled={isPlayingRecording}
              style={[
                styles.compareButton,
                isPlayingOriginal && styles.compareButtonActive,
              ]}
            >
              <Ionicons
                name="volume-high"
                size={16}
                color={isPlayingOriginal ? "#FFF" : "#E65100"}
              />
              <Text
                style={[
                  styles.compareButtonText,
                  isPlayingOriginal && styles.compareButtonTextActive,
                ]}
              >
                {isPlayingOriginal ? "Playing..." : "Original"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={isPlayingRecording ? stopPlayback : playRecording}
              disabled={isPlayingOriginal}
              style={[
                styles.compareButton,
                isPlayingRecording && styles.compareButtonActive,
              ]}
            >
              <Ionicons
                name={isPlayingRecording ? "stop" : "play"}
                size={16}
                color={isPlayingRecording ? "#FFF" : "#E65100"}
              />
              <Text
                style={[
                  styles.compareButtonText,
                  isPlayingRecording && styles.compareButtonTextActive,
                ]}
              >
                {isPlayingRecording ? "Stop" : "My recording"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Self assessment */}
          {selfScore === null ? (
            <View style={styles.selfAssessment}>
              <Text style={styles.selfAssessTitle}>How did you do?</Text>
              <View style={styles.scoreButtons}>
                <TouchableOpacity
                  onPress={() => handleSelfScore(30)}
                  style={[styles.scoreButton, styles.scoreButtonRed]}
                >
                  <Text style={styles.scoreButtonTextRed}>Need work</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleSelfScore(60)}
                  style={[styles.scoreButton, styles.scoreButtonAmber]}
                >
                  <Text style={styles.scoreButtonTextAmber}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleSelfScore(90)}
                  style={[styles.scoreButton, styles.scoreButtonGreen]}
                >
                  <Text style={styles.scoreButtonTextGreen}>Great!</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={[
                styles.scoreResult,
                selfScore >= 80
                  ? styles.scoreResultGreen
                  : selfScore >= 50
                    ? styles.scoreResultAmber
                    : styles.scoreResultRed,
              ]}
            >
              <Text style={styles.scoreResultPoints}>{selfScore} pts</Text>
              <Text style={styles.scoreResultFeedback}>
                {selfScore >= 80
                  ? "Great job! Keep it up!"
                  : selfScore >= 50
                    ? "Good effort! Practice more"
                    : "Don't give up! Try again"}
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Bottom actions */}
      <View style={styles.bottomActions}>
        <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
          <Ionicons name="refresh" size={16} color="#666" />
          <Text style={styles.retryText}>Restart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlaySlow} style={styles.slowButton}>
          <Ionicons name="speedometer-outline" size={16} color="#E65100" />
          <Text style={styles.slowText}>Slow play</Text>
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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  showTextButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "#F0F0F0",
  },
  showTextButtonActive: {
    backgroundColor: "#FFF3E0",
  },
  showTextButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  showTextButtonTextActive: {
    color: "#E65100",
  },
  stepBadge: {
    backgroundColor: "#FFF3E0",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  stepBadgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#E65100",
  },
  closeButton: {
    padding: 4,
  },
  textReveal: {
    backgroundColor: "#F8F9FA",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  textRevealEn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  textRevealVi: {
    fontSize: 14,
    color: "#666",
  },
  stepBox: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    backgroundColor: "#F8F9FA",
  },
  stepBoxActive: {
    backgroundColor: "#FFF3E0",
    borderWidth: 1,
    borderColor: "#FFCC80",
  },
  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  stepNumber: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumberDefault: {
    backgroundColor: "#E0E0E0",
  },
  stepNumberCurrent: {
    backgroundColor: "#E65100",
  },
  stepNumberDone: {
    backgroundColor: "#4CAF50",
  },
  stepNumberText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FFF",
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 10,
  },
  actionButtonPrimary: {
    backgroundColor: "#E65100",
  },
  actionButtonSecondary: {
    backgroundColor: "#EEEEEE",
  },
  actionButtonDisabled: {
    backgroundColor: "#E0E0E0",
    opacity: 0.5,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  actionButtonTextPrimary: {
    color: "#FFF",
  },
  actionButtonTextSecondary: {
    color: "#666",
  },
  micError: {
    fontSize: 13,
    color: "#C62828",
    marginBottom: 8,
  },
  recordingIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 16,
  },
  recordingDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#EF5350",
  },
  recordingTime: {
    fontSize: 20,
    fontWeight: "600",
    fontVariant: ["tabular-nums"],
    color: "#C62828",
  },
  stopRecordButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#C62828",
    paddingVertical: 12,
    borderRadius: 10,
  },
  stopRecordText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFF",
  },
  compareRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  },
  compareButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#FFCC80",
  },
  compareButtonActive: {
    backgroundColor: "#E65100",
    borderColor: "#E65100",
  },
  compareButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#E65100",
  },
  compareButtonTextActive: {
    color: "#FFF",
  },
  selfAssessment: {
    alignItems: "center",
    paddingTop: 4,
  },
  selfAssessTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  scoreButtons: {
    flexDirection: "row",
    gap: 8,
    width: "100%",
  },
  scoreButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  scoreButtonRed: {
    backgroundColor: "#FFEBEE",
  },
  scoreButtonAmber: {
    backgroundColor: "#FFF8E1",
  },
  scoreButtonGreen: {
    backgroundColor: "#E8F5E9",
  },
  scoreButtonTextRed: {
    fontSize: 13,
    fontWeight: "600",
    color: "#C62828",
  },
  scoreButtonTextAmber: {
    fontSize: 13,
    fontWeight: "600",
    color: "#F57F17",
  },
  scoreButtonTextGreen: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
  },
  scoreResult: {
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  scoreResultGreen: {
    backgroundColor: "#E8F5E9",
  },
  scoreResultAmber: {
    backgroundColor: "#FFF8E1",
  },
  scoreResultRed: {
    backgroundColor: "#FFEBEE",
  },
  scoreResultPoints: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  scoreResultFeedback: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  bottomActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  retryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#F0F0F0",
    paddingVertical: 11,
    borderRadius: 10,
  },
  retryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  slowButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#FFF3E0",
    paddingVertical: 11,
    borderRadius: 10,
  },
  slowText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#E65100",
  },
});
