import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useT } from "../../lib/i18n";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const QUICK_PHRASES = [
  { id: "1", key: "sos.phrase.helpEmergency" },
  { id: "2", key: "sos.phrase.needDoctor" },
  { id: "3", key: "sos.phrase.whereIsPolice" },
  { id: "4", key: "sos.phrase.imLost" },
];

export default function TalkBuddyScreen() {
  const t = useT();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: t("sos.welcomeMessage"),
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: t("sos.aiResponse").replace("{text}", text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickPhrase = (phrase: (typeof QUICK_PHRASES)[0]) => {
    sendMessage(t(phrase.key as any));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatarContainer}>
            <Ionicons name="chatbubbles" size={24} color="#FFD600" />
          </View>
          <View>
            <Text style={styles.headerTitle}>{t("sos.title")}</Text>
            <Text style={styles.headerSubtitle}>{t("sos.subtitle")}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.sosButton}>
          <Ionicons name="warning" size={20} color="#FF3B30" />
          <Text style={styles.sosText}>{t("sos.button")}</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageWrapper,
              message.role === "user"
                ? styles.messageWrapperUser
                : styles.messageWrapperAssistant,
            ]}
          >
            <View
              style={[
                styles.messageBubble,
                message.role === "user"
                  ? styles.messageBubbleUser
                  : styles.messageBubbleAssistant,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.role === "user"
                    ? styles.messageTextUser
                    : styles.messageTextAssistant,
                ]}
              >
                {message.content}
              </Text>
              <Text
                style={[
                  styles.messageTime,
                  message.role === "user"
                    ? styles.messageTimeUser
                    : styles.messageTimeAssistant,
                ]}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </View>
          </View>
        ))}

        {isTyping && (
          <View style={styles.messageWrapperAssistant}>
            <View style={styles.messageBubbleAssistant}>
              <View style={styles.typingIndicator}>
                <View style={styles.typingDot} />
                <View style={styles.typingDot} />
                <View style={styles.typingDot} />
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Quick Phrases */}
      <View style={styles.quickPhrasesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.quickPhrases}
        >
          {QUICK_PHRASES.map((phrase) => (
            <TouchableOpacity
              key={phrase.id}
              style={styles.quickPhraseButton}
              onPress={() => sendMessage(t(phrase.key as any))}
            >
              <Text style={styles.quickPhraseText}>{t(phrase.key as any)}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder={t("sos.inputPlaceholder")}
            value={inputText}
            onChangeText={setInputText}
            placeholderTextColor="#9E9E9E"
            multiline
            maxLength={500}
          />
          <TouchableOpacity style={styles.voiceButton}>
            <Ionicons name="mic" size={24} color="#666" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.sendButton,
            !inputText.trim() && styles.sendButtonDisabled,
          ]}
          onPress={() => sendMessage(inputText)}
          disabled={!inputText.trim()}
        >
          <Ionicons name="send" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  sosButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#FFE5E5",
    borderRadius: 16,
  },
  sosText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#FF3B30",
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 16,
    gap: 12,
  },
  messageWrapper: {
    maxWidth: "80%",
  },
  messageWrapperUser: {
    alignSelf: "flex-end",
  },
  messageWrapperAssistant: {
    alignSelf: "flex-start",
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  messageBubbleUser: {
    backgroundColor: "#1C1C1E",
    borderBottomRightRadius: 4,
  },
  messageBubbleAssistant: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 4,
  },
  messageTextUser: {
    color: "#FFFFFF",
  },
  messageTextAssistant: {
    color: "#1C1C1E",
  },
  messageTime: {
    fontSize: 10,
  },
  messageTimeUser: {
    color: "rgba(255,255,255,0.6)",
  },
  messageTimeAssistant: {
    color: "#9E9E9E",
  },
  typingIndicator: {
    flexDirection: "row",
    gap: 4,
    paddingVertical: 4,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#9E9E9E",
  },
  quickPhrasesContainer: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    paddingVertical: 12,
  },
  quickPhrases: {
    paddingHorizontal: 16,
    gap: 8,
  },
  quickPhraseButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#FFD600",
    borderRadius: 20,
    marginRight: 8,
  },
  quickPhraseText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  quickPhraseVi: {
    fontSize: 11,
    color: "#666",
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    gap: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#F3F3F5",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1C1C1E",
    maxHeight: 100,
  },
  voiceButton: {
    padding: 4,
    marginLeft: 8,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1C1C1E",
    alignItems: "center",
    justifyContent: "center",
  },
  sendButtonDisabled: {
    backgroundColor: "#E0E0E0",
  },
});
