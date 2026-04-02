import { speak, stopSpeaking } from "./TTSService";

export interface SosCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  phrases: SosPhrase[];
}

export interface SosPhrase {
  id: string;
  en: string;
  vi: string;
  emergencyLevel: "critical" | "urgent" | "important";
}

export const SOS_CATEGORIES: SosCategory[] = [
  {
    id: "medical",
    name: "Medical Emergency",
    icon: "medical",
    color: "#EF4444",
    phrases: [
      { id: "med-1", en: "I need a doctor!", vi: "Tôi cần gặp bác sĩ!", emergencyLevel: "critical" },
      { id: "med-2", en: "Call an ambulance!", vi: "Gọi xe cấp cứu!", emergencyLevel: "critical" },
      { id: "med-3", en: "I have a medical emergency!", vi: "Tôi đang gặp khẩn cấp y tế!", emergencyLevel: "critical" },
      { id: "med-4", en: "Where is the hospital?", vi: "Bệnh viện ở đâu?", emergencyLevel: "urgent" },
      { id: "med-5", en: "I need medicine!", vi: "Tôi cần thuốc!", emergencyLevel: "urgent" },
      { id: "med-6", en: "I am allergic to...", vi: "Tôi bị dị ứng với...", emergencyLevel: "urgent" },
      { id: "med-7", en: "I have diabetes.", vi: "Tôi bị tiểu đường.", emergencyLevel: "important" },
      { id: "med-8", en: "I have heart problems.", vi: "Tôi có vấn đề về tim.", emergencyLevel: "important" },
    ],
  },
  {
    id: "police",
    name: "Police & Safety",
    icon: "shield",
    color: "#3B82F6",
    phrases: [
      { id: "pol-1", en: "Help! Call the police!", vi: "Cứu! Gọi cảnh sát!", emergencyLevel: "critical" },
      { id: "pol-2", en: "I need help!", vi: "Tôi cần giúp đỡ!", emergencyLevel: "critical" },
      { id: "pol-3", en: "There is a crime happening!", vi: "Đang xảy ra tội phạm!", emergencyLevel: "critical" },
      { id: "pol-4", en: "I lost my passport.", vi: "Tôi làm mất hộ chiếu.", emergencyLevel: "urgent" },
      { id: "pol-5", en: "I was robbed.", vi: "Tôi bị cướp.", emergencyLevel: "urgent" },
      { id: "pol-6", en: "Where is the police station?", vi: "Đồn cảnh sát ở đâu?", emergencyLevel: "important" },
      { id: "pol-7", en: "I need to report an incident.", vi: "Tôi cần báo cáo một sự việc.", emergencyLevel: "important" },
    ],
  },
  {
    id: "fire",
    name: "Fire Emergency",
    icon: "flame",
    color: "#F97316",
    phrases: [
      { id: "fir-1", en: "Fire! Get out!", vi: "Cháy! Thoát ra!", emergencyLevel: "critical" },
      { id: "fir-2", en: "Call the fire department!", vi: "Gọi cứu hỏa!", emergencyLevel: "critical" },
      { id: "fir-3", en: "There is a fire!", vi: "Có cháy!", emergencyLevel: "critical" },
      { id: "fir-4", en: "Where is the fire exit?", vi: "Lối thoát hiểm ở đâu?", emergencyLevel: "urgent" },
      { id: "fir-5", en: "Is there a fire extinguisher?", vi: "Có bình cứu hỏa không?", emergencyLevel: "important" },
    ],
  },
  {
    id: "transport",
    name: "Transport Emergency",
    icon: "car",
    color: "#8B5CF6",
    phrases: [
      { id: "trans-1", en: "I had an accident!", vi: "Tôi gặp tai nạn!", emergencyLevel: "critical" },
      { id: "trans-2", en: "Call a taxi!", vi: "Gọi taxi!", emergencyLevel: "urgent" },
      { id: "trans-3", en: "I need a hospital.", vi: "Tôi cần đến bệnh viện.", emergencyLevel: "urgent" },
      { id: "trans-4", en: "Where is the train station?", vi: "Nhà ga ở đâu?", emergencyLevel: "important" },
      { id: "trans-5", en: "Where is the bus stop?", vi: "Trạm xe buýt ở đâu?", emergencyLevel: "important" },
      { id: "trans-6", en: "My car broke down.", vi: "Xe tôi hỏng.", emergencyLevel: "important" },
    ],
  },
  {
    id: "lost",
    name: "Lost & Confused",
    icon: "map",
    color: "#10B981",
    phrases: [
      { id: "lost-1", en: "I am lost.", vi: "Tôi bị lạc.", emergencyLevel: "urgent" },
      { id: "lost-2", en: "Can you help me find my way?", vi: "Bạn có thể giúp tôi tìm đường không?", emergencyLevel: "urgent" },
      { id: "lost-3", en: "Where am I?", vi: "Tôi đang ở đâu?", emergencyLevel: "urgent" },
      { id: "lost-4", en: "I cannot find my hotel.", vi: "Tôi không tìm được khách sạn.", emergencyLevel: "important" },
      { id: "lost-5", en: "I lost my group.", vi: "Tôi lạc nhóm.", emergencyLevel: "important" },
    ],
  },
  {
    id: "embassy",
    name: "Embassy Help",
    icon: "flag",
    color: "#6366F1",
    phrases: [
      { id: "emb-1", en: "I need to contact my embassy.", vi: "Tôi cần liên hệ đại sứ quán.", emergencyLevel: "urgent" },
      { id: "emb-2", en: "I lost my passport and need help.", vi: "Tôi làm mất hộ chiếu cần giúp đỡ.", emergencyLevel: "urgent" },
      { id: "emb-3", en: "Where is the embassy?", vi: "Đại sứ quán ở đâu?", emergencyLevel: "important" },
      { id: "emb-4", en: "I need emergency travel documents.", vi: "Tôi cần giấy tờ đi lại khẩn cấp.", emergencyLevel: "important" },
    ],
  },
];

export const sosService = {
  getCategories: (): SosCategory[] => SOS_CATEGORIES,

  getCategoryById: (id: string): SosCategory | undefined =>
    SOS_CATEGORIES.find((c) => c.id === id),

  speakPhrase: async (phrase: SosPhrase): Promise<void> => {
    await speak(phrase.en, {
      accent: "en-US",
      speed: "normal",
    });
  },

  speakAllPhrases: async (category: SosCategory): Promise<void> => {
    for (const phrase of category.phrases) {
      await speak(phrase.en, {
        accent: "en-US",
        speed: "slow",
      });
    }
  },

  stopSpeaking: (): void => {
    stopSpeaking();
  },

  getCriticalPhrases: (): SosPhrase[] => {
    return SOS_CATEGORIES.flatMap((c) =>
      c.phrases.filter((p) => p.emergencyLevel === "critical")
    );
  },
};
