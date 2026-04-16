import { speak, stopSpeaking } from "./TTSService";
import { getAuthToken } from "./api";

const API_URL = process.env.EXPO_PUBLIC_API_URL
  ? `${process.env.EXPO_PUBLIC_API_URL}/api`
  : "http://localhost:5277/api";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  replyZh?: string;
  hint?: string;
  hintEn?: string;
  correction?: string | null;
  betterWay?: string | null;
  encouragement?: string | null;
  phase?: string;
  turnCount?: number;
}

export interface ConversationContext {
  sceneId?: string;
  sceneTitle?: string;
  otherRole?: string;
  mode: "free" | "guided" | "listening";
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const SCENE_CATEGORIES = [
  { id: "airport", name: "Airport", icon: "✈️" },
  { id: "hotel", name: "Hotel", icon: "🏨" },
  { id: "restaurant", name: "Restaurant", icon: "🍽️" },
  { id: "shopping", name: "Shopping", icon: "🛍️" },
  { id: "transport", name: "Transport", icon: "🚕" },
  { id: "entertainment", name: "Entertainment", icon: "🎭" },
  { id: "medical", name: "Medical", icon: "🏥" },
  { id: "emergency", name: "Emergency", icon: "🆘" },
  { id: "social", name: "Social", icon: "👋" },
  { id: "banking", name: "Banking", icon: "🏦" },
  { id: "accommodation", name: "Accommodation", icon: "🏠" },
  { id: "daily-life", name: "Daily Life", icon: "☕" },
  { id: "foundation", name: "Foundation", icon: "📚" },
];

const SIMPLE_PROMPTS: Record<string, { role: string; context: string }> = {
  airport: {
    role: "airport staff",
    context:
      "You are at an airport helping a traveler with check-in, boarding passes, and flight information.",
  },
  hotel: {
    role: "hotel receptionist",
    context:
      "You are at a hotel front desk helping a guest with check-in, room keys, and hotel services.",
  },
  restaurant: {
    role: "restaurant server",
    context:
      "You are at a restaurant taking orders, recommending dishes, and serving food.",
  },
  shopping: {
    role: "shop assistant",
    context:
      "You are at a store helping a customer find products, check prices, and complete purchases.",
  },
  transport: {
    role: "taxi driver",
    context:
      "You are a taxi driver helping a passenger with directions and destination.",
  },
  medical: {
    role: "doctor",
    context:
      "You are a doctor at a clinic helping a patient with medical concerns.",
  },
  emergency: {
    role: "emergency operator",
    context:
      "You are an emergency operator helping someone in a crisis situation.",
  },
  banking: {
    role: "bank teller",
    context:
      "You are at a bank helping a customer with transactions and account services.",
  },
  social: {
    role: "local person",
    context: "You are having a casual conversation with a traveler.",
  },
  default: {
    role: "service provider",
    context: "You are helping a traveler with their needs.",
  },
};

export const aiConversationService = {
  startConversation: async (
    categoryId: string,
    mode: "free" | "guided" | "listening",
    difficulty: "beginner" | "intermediate" | "advanced",
  ): Promise<ChatMessage | null> => {
    const prompt = SIMPLE_PROMPTS[categoryId] || SIMPLE_PROMPTS.default;

    const difficultyInstructions = {
      beginner: "Use simple words and short sentences. Speak slowly.",
      intermediate: "Use natural English at a moderate pace with some idioms.",
      advanced: "Use native-level English with idioms and complex sentences.",
    };

    const systemPrompt = `# IDENTITY
You are a real ${prompt.role}. You are NOT an AI. Stay in character.

# SCENE
${prompt.context}

# RULES
1. Always respond in JSON format:
{
  "reply": "Your English reply",
  "replyZh": "Chinese translation",
  "hint": "Hint for user (Chinese)",
  "hintEn": "Suggested reply (English)",
  "correction": "If user made errors, explain in Chinese. null if correct.",
  "phase": "opening|middle|closing|completed",
  "turnCount": 1
}

2. ${difficultyInstructions[difficulty]}
3. Keep replies short (1-3 sentences).
4. Never mention you are an AI.
5. Be helpful and patient.`;

    try {
      const token = await getAuthToken();
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: "Start the conversation. You speak first.",
            },
          ],
          sceneContext: prompt.context,
          mode,
          difficulty,
        }),
      });

      if (!res.ok) {
        console.error("Chat API error:", res.status);
        return null;
      }

      const data = await res.json();
      if (data.success && data.data) {
        return {
          role: "assistant",
          content: data.data.reply,
          replyZh: data.data.replyZh,
          hint: data.data.hint,
          hintEn: data.data.hintEn,
          correction: data.data.correction,
          phase: data.data.phase,
          turnCount: data.data.turnCount,
        };
      }
      return null;
    } catch (error) {
      console.error("AI Conversation error:", error);
      return null;
    }
  },

  sendMessage: async (
    messages: ChatMessage[],
    categoryId: string,
    mode: "free" | "guided" | "listening",
    difficulty: "beginner" | "intermediate" | "advanced",
  ): Promise<ChatMessage | null> => {
    const prompt = SIMPLE_PROMPTS[categoryId] || SIMPLE_PROMPTS.default;

    const difficultyInstructions = {
      beginner: "Use simple words and short sentences.",
      intermediate: "Use natural English with some idioms.",
      advanced: "Use native-level English with idioms.",
    };

    const systemPrompt = `# IDENTITY
You are a real ${prompt.role}. NOT an AI.

# SCENE
${prompt.context}

# RULES
1. JSON response:
{
  "reply": "Your reply",
  "replyZh": "Chinese translation",
  "correction": "Error correction or null",
  "phase": "opening|middle|closing|completed",
  "turnCount": <number>
}

2. ${difficultyInstructions[difficulty]}
3. Keep replies short.
4. Stay in character.`;

    try {
      const token = await getAuthToken();
      const apiMessages = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          messages: apiMessages,
          sceneContext: prompt.context,
          mode,
          difficulty,
        }),
      });

      if (!res.ok) return null;

      const data = await res.json();
      if (data.success && data.data) {
        return {
          role: "assistant",
          content: data.data.reply,
          replyZh: data.data.replyZh,
          correction: data.data.correction,
          phase: data.data.phase,
          turnCount: data.data.turnCount,
        };
      }
      return null;
    } catch (error) {
      console.error("AI send message error:", error);
      return null;
    }
  },

  speakMessage: async (
    text: string,
    speed: "slow" | "normal" | "fast" = "normal",
  ): Promise<void> => {
    await speak(text, { accent: "en-US", speed });
  },

  stopSpeaking: (): void => {
    stopSpeaking();
  },

  getCategories: () => SCENE_CATEGORIES,

  getCategoryById: (id: string) => SCENE_CATEGORIES.find((c) => c.id === id),
};
