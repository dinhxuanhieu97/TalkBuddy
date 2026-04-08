import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { UserService, LearningService } from "../services";
import { LearningProgress, UserStreak } from "../services/LearningService";

export default function SyncTest() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addResult = (message: string) => {
    setTestResults((prev) => [
      ...prev,
      `${new Date().toLocaleTimeString()}: ${message}`,
    ]);
  };

  const runTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    addResult("🧪 Starting Supabase sync tests...");

    try {
      // Test 1: User Service
      addResult("📝 Testing User Service...");

      const testUserId = "test-user-" + Date.now();
      const testUser = {
        id: testUserId,
        email: "test@example.com",
        name: "Test User",
        locale: "zh",
        accent: "en-US",
        speed: "normal",
        subscription_tier: "free",
      };

      // Create user
      const createdUser = await UserService.upsertUser(testUser);
      if (createdUser) {
        addResult("✅ User created successfully");
      } else {
        addResult("❌ Failed to create user");
      }

      // Get user
      const fetchedUser = await UserService.getUser(testUserId);
      if (fetchedUser) {
        addResult("✅ User fetched successfully");
      } else {
        addResult("❌ Failed to fetch user");
      }

      // Update user settings
      const updatedUser = await UserService.updateUserSettings(testUserId, {
        locale: "en",
        accent: "en-GB",
      });
      if (updatedUser) {
        addResult("✅ User settings updated");
      } else {
        addResult("❌ Failed to update user settings");
      }

      // Test 2: Learning Service
      addResult("📚 Testing Learning Service...");

      // Update streak
      const streak = await LearningService.updateStreak(testUserId);
      if (streak) {
        addResult(`✅ Streak updated: ${streak.current_streak} days`);
      } else {
        addResult("❌ Failed to update streak");
      }

      // Practice session
      const progress = await LearningService.practiceSession(
        testUserId,
        "test-phrase-1",
        {
          dictation_score: 85,
          shadowing_score: 90,
          listening_score: 88,
        },
      );
      if (progress) {
        addResult(
          `✅ Practice session completed. Mastery: ${progress.mastery}%`,
        );
      } else {
        addResult("❌ Failed practice session");
      }

      // Save phrase
      const saved = await LearningService.savePhrase(
        testUserId,
        "test-phrase-1",
      );
      if (saved) {
        addResult("✅ Phrase saved");
      } else {
        addResult("❌ Failed to save phrase");
      }

      // Get saved phrases
      const savedPhrases = await LearningService.getSavedPhrases(testUserId);
      addResult(`✅ Saved phrases: ${savedPhrases.length}`);

      // Update daily usage
      const usage = await LearningService.updateDailyUsage(testUserId, {
        pronunciation_count: 5,
        ai_conversation_count: 2,
      });
      if (usage) {
        addResult(`✅ Daily usage updated`);
      } else {
        addResult("❌ Failed to update daily usage");
      }

      // Test 3: Real-time subscriptions
      addResult("🔄 Testing real-time subscriptions...");

      const progressSubscription = LearningService.subscribeToProgress(
        testUserId,
        (progressData: LearningProgress[]) => {
          addResult(
            `📡 Real-time progress update: ${progressData.length} items`,
          );
        },
      );

      const streakSubscription = LearningService.subscribeToStreak(
        testUserId,
        (streakData: UserStreak | null) => {
          addResult(
            `📡 Real-time streak update: ${streakData?.current_streak || 0} days`,
          );
        },
      );

      // Cleanup
      setTimeout(() => {
        progressSubscription.unsubscribe();
        streakSubscription.unsubscribe();
        addResult("🔌 Subscriptions cleaned up");
      }, 2000);

      addResult("🎉 All tests completed!");
    } catch (error) {
      addResult(`❌ Test failed: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supabase Sync Test</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={runTests}
          disabled={isRunning}
        >
          <Text style={styles.primaryButtonText}>
            {isRunning ? "Running Tests..." : "Run All Tests"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={clearResults}
        >
          <Text style={styles.secondaryButtonText}>Clear Results</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Test Results:</Text>
        <ScrollView style={styles.scrollView}>
          {testResults.map((result, index) => (
            <Text key={index} style={styles.resultText}>
              {result}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#1c1c1e",
  },
  secondaryButton: {
    backgroundColor: "#e5e5e7",
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  resultsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 12,
  },
  scrollView: {
    flex: 1,
  },
  resultText: {
    fontSize: 12,
    color: "#1c1c1e",
    marginBottom: 4,
    fontFamily: "monospace",
  },
});
