import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useT } from "../../lib/i18n";
import {
  aiConversationService,
  type ChatMessage,
  type ConversationContext,
} from "../../services/aiConversationService";

export default function AiConversationScreen() {
  const t = useT();
  const [view, setView] = useState<"categories" | "conversation">("categories");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mode, setMode] = useState<"free" | "guided" | "listening">("free");
  const [difficulty, setDifficulty] = useState<
    "beginner" | "intermediate" | "advanced"
  >("beginner");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const categories = aiConversationService.getCategories();

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const handleStartConversation = async () => {
    if (!selectedCategory) return;

    setLoading(true);
    setMessages([]);
    setTurnCount(0);

    const response = await aiConversationService.startConversation(
      selectedCategory,
      mode,
      difficulty,
    );

    if (response) {
      setMessages([response]);
      setTurnCount(response.turnCount || 1);
    }

    setLoading(false);
    setView("conversation");
  };

  const handleSendMessage = async () => {
    if (!input.trim() || !selectedCategory || loading) return;

    const userMessage: ChatMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const response = await aiConversationService.sendMessage(
      newMessages,
      selectedCategory,
      mode,
      difficulty,
    );

    if (response) {
      setMessages([...newMessages, response]);
      setTurnCount(response.turnCount || turnCount + 1);
    }

    setLoading(false);
  };

  const handleReset = () => {
    setView("categories");
    setSelectedCategory(null);
    setMessages([]);
    setTurnCount(0);
  };

  const renderCategoryGrid = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t("aiConversation.title")}</Text>
        <Text style={styles.headerSubtitle}>
          {t("aiConversation.subtitle")}
        </Text>
      </View>

      <View style={styles.modeSelector}>
        {(["free", "guided", "listening"] as const).map((m) => (
          <TouchableOpacity
            key={m}
            style={[styles.modeButton, mode === m && styles.modeButtonActive]}
            onPress={() => setMode(m)}
          >
            <Text
              style={[styles.modeText, mode === m && styles.modeTextActive]}
            >
              {t(`aiConversation.mode.${m}`)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.difficultySelector}>
        {(["beginner", "intermediate", "advanced"] as const).map((d) => (
          <TouchableOpacity
            key={d}
            style={[
              styles.difficultyButton,
              difficulty === d && styles.difficultyButtonActive,
            ]}
            onPress={() => setDifficulty(d)}
          >
            <Text
              style={[
                styles.difficultyText,
                difficulty === d && styles.difficultyTextActive,
              ]}
            >
              {t(`aiConversation.difficulty.${d}`)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>
        {t("aiConversation.chooseScenario")}
      </Text>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryCard,
              selectedCategory === item.id && styles.categoryCardSelected,
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={[
          styles.startButton,
          !selectedCategory && styles.startButtonDisabled,
        ]}
        onPress={handleStartConversation}
        disabled={!selectedCategory}
      >
        <Ionicons name="chatbubbles" size={24} color="white" />
        <Text style={styles.startButtonText}>
          {t("aiConversation.startPractice")}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderConversation = () => (
    <SafeAreaView style={styles.conversationContainer}>
      <View style={styles.conversationHeader}>
        <TouchableOpacity onPress={handleReset} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#1C1C1E" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={styles.headerInfoTitle}>
            {categories.find((c) => c.id === selectedCategory)?.name ||
              t("aiConversation.conversation")}
          </Text>
          <Text style={styles.headerInfoSubtitle}>
            {t("aiConversation.turnInfo", {
              turn: turnCount,
              mode: t(`aiConversation.mode.${mode}`),
              difficulty: t(`aiConversation.difficulty.${difficulty}`),
            })}
          </Text>
        </View>
        <TouchableOpacity onPress={handleReset} style={styles.newChatButton}>
          <Ionicons name="refresh" size={24} color="#6366F1" />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.messageList}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.role === "user" ? styles.userBubble : styles.assistantBubble,
            ]}
          >
            {item.role === "assistant" && (
              <Text style={styles.assistantLabel}>
                {t("aiConversation.ai")}
              </Text>
            )}
            <Text
              style={[
                styles.messageText,
                item.role === "user" ? styles.userText : styles.assistantText,
              ]}
            >
              {item.content}
            </Text>
            {item.replyZh && (
              <Text style={styles.translationText}>{item.replyZh}</Text>
            )}
            {item.correction && (
              <View style={styles.correctionBox}>
                <Ionicons name="pencil" size={14} color="#F59E0B" />
                <Text style={styles.correctionText}>{item.correction}</Text>
              </View>
            )}
            {item.role === "assistant" && (
              <TouchableOpacity
                style={styles.speakButton}
                onPress={() => aiConversationService.speakMessage(item.content)}
              >
                <Ionicons name="volume-high" size={18} color="#6366F1" />
              </TouchableOpacity>
            )}
          </View>
        )}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{t("aiConversation.thinking")}</Text>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type your message..."
            placeholderTextColor="#9CA3AF"
            multiline
            maxLength={500}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              !input.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSendMessage}
            disabled={!input.trim() || loading}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

  return view === "categories" ? renderCategoryGrid() : renderConversation();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  header: {
    padding: 20,
    paddingTop: 10,
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
  modeSelector: {
    flexDirection: "row",
    marginHorizontal: 16,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    padding: 4,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  modeButtonActive: {
    backgroundColor: "white",
  },
  modeText: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "500",
  },
  modeTextActive: {
    color: "#6366F1",
  },
  difficultySelector: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 12,
    gap: 8,
  },
  difficultyButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
  },
  difficultyButtonActive: {
    backgroundColor: "#6366F1",
    borderColor: "#6366F1",
  },
  difficultyText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "500",
  },
  difficultyTextActive: {
    color: "white",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  categoryList: {
    paddingHorizontal: 12,
    paddingBottom: 100,
  },
  categoryCard: {
    flex: 1,
    margin: 4,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  categoryCardSelected: {
    borderColor: "#6366F1",
    backgroundColor: "#EEF2FF",
  },
  categoryIcon: {
    fontSize: 32,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginTop: 8,
  },
  startButton: {
    position: "absolute",
    bottom: 24,
    left: 20,
    right: 20,
    backgroundColor: "#6366F1",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  startButtonDisabled: {
    backgroundColor: "#9CA3AF",
  },
  startButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  conversationContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  conversationHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButton: {
    padding: 4,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  headerInfoTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  headerInfoSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  newChatButton: {
    padding: 8,
  },
  messageList: {
    padding: 16,
    paddingBottom: 8,
  },
  messageBubble: {
    maxWidth: "80%",
    marginBottom: 12,
    padding: 14,
    borderRadius: 16,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#6366F1",
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    alignSelf: "flex-start",
    backgroundColor: "white",
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  assistantLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6366F1",
    marginBottom: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
  },
  userText: {
    color: "white",
  },
  assistantText: {
    color: "#1C1C1E",
  },
  translationText: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
    fontStyle: "italic",
  },
  correctionBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
    padding: 8,
    backgroundColor: "#FEF3C7",
    borderRadius: 8,
    gap: 6,
  },
  correctionText: {
    flex: 1,
    fontSize: 12,
    color: "#92400E",
  },
  speakButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 6,
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
  },
  loadingContainer: {
    padding: 12,
    alignItems: "center",
  },
  loadingText: {
    fontSize: 13,
    color: "#6B7280",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    alignItems: "flex-end",
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100,
    color: "#1C1C1E",
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#6366F1",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#9CA3AF",
  },
});
