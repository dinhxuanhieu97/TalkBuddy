// ============================================================
// Site-wide constants — single source of truth
// ============================================================

export const SITE_URL = "https://talkbuddy.wayjet.io";
export const SITE_NAME = "TalkBuddy-场景学英语，即学即用～";
export const SITE_DESCRIPTION_ZH =
  "AI 驱动的出境场景英语学习 App。650+ 真实场景，出国前装一个，到了就能说。";
export const SITE_DESCRIPTION_EN =
  "AI-powered English learning for travelers. 650+ real-world scenarios. Install before you go, speak when you arrive.";
export const CONTACT_EMAIL = "hello@talkbuddy.wayjet.io";

/** Server-safe category labels (no React hooks, safe for server components) */
export const CATEGORY_LABELS: Record<string, { zh: string; en: string }> = {
  airport: { zh: "机场", en: "Airport" },
  hotel: { zh: "酒店", en: "Hotel" },
  restaurant: { zh: "餐厅", en: "Restaurant" },
  shopping: { zh: "购物", en: "Shopping" },
  transport: { zh: "交通", en: "Transport" },
  medical: { zh: "就医", en: "Medical" },
  social: { zh: "社交", en: "Social" },
  emergency: { zh: "紧急", en: "Emergency" },
  entertainment: { zh: "娱乐", en: "Entertainment" },
  banking: { zh: "银行通讯", en: "Banking & Telecom" },
  accommodation: { zh: "住宿", en: "Accommodation" },
  "daily-life": { zh: "日常生活", en: "Daily Life" },
  foundation: { zh: "基础", en: "Foundation" },
};

/** Category SEO slugs and descriptions for meta tags */
export const CATEGORY_SEO: Record<
  string,
  {
    slugEn: string;
    descZh: string;
    descEn: string;
    questionEn: string;
    questionZh: string;
  }
> = {
  airport: {
    slugEn: "airport",
    descZh:
      "机场值机、安检、登机、转机等场景英语对话，帮你轻松应对机场各环节。",
    descEn:
      "Essential English phrases for airport check-in, security, boarding, and transfers.",
    questionEn: "What English do you need at the airport?",
    questionZh: "在机场需要哪些英语？",
  },
  hotel: {
    slugEn: "hotel",
    descZh: "酒店入住、退房、客房服务等场景英语，让你住得安心。",
    descEn:
      "Hotel English for check-in, checkout, room service, and common requests.",
    questionEn: "How to communicate in English at a hotel?",
    questionZh: "酒店场景需要哪些英语？",
  },
  restaurant: {
    slugEn: "restaurant",
    descZh: "餐厅点餐、询问菜品、买单等场景英语，享受海外美食无障碍。",
    descEn:
      "Restaurant English for ordering food, asking about dishes, and paying the bill.",
    questionEn: "How to order food in English at a restaurant?",
    questionZh: "在国外餐厅怎么用英语点餐？",
  },
  shopping: {
    slugEn: "shopping",
    descZh: "购物砍价、退换货、询问尺码等场景英语，买买买不再尴尬。",
    descEn: "Shopping English for bargaining, returns, sizing, and payment.",
    questionEn: "What English phrases do you need for shopping abroad?",
    questionZh: "出国购物需要哪些英语？",
  },
  transport: {
    slugEn: "transport",
    descZh: "打车、公交、地铁、问路等交通场景英语，出行畅通无阻。",
    descEn:
      "Transport English for taxis, rideshares, buses, subways, and asking for directions.",
    questionEn: "How to use English for transportation abroad?",
    questionZh: "出国交通场景怎么用英语？",
  },
  medical: {
    slugEn: "medical",
    descZh: "看病、买药、描述症状等就医场景英语，健康问题不慌张。",
    descEn:
      "Medical English for doctor visits, pharmacies, and describing symptoms.",
    questionEn: "How to describe medical symptoms in English?",
    questionZh: "在国外看病怎么用英语？",
  },
  social: {
    slugEn: "social",
    descZh: "自我介绍、闲聊、社交礼仪等场景英语，轻松交朋友。",
    descEn:
      "Social English for introductions, small talk, and cultural etiquette.",
    questionEn: "How to make small talk in English?",
    questionZh: "怎么用英语社交聊天？",
  },
  emergency: {
    slugEn: "emergency",
    descZh: "报警、求助、丢失物品等紧急场景英语，关键时刻救命。",
    descEn:
      "Emergency English for calling police, asking for help, and reporting lost items.",
    questionEn: "What English phrases do you need in an emergency abroad?",
    questionZh: "国外遇到紧急情况怎么用英语求助？",
  },
  entertainment: {
    slugEn: "entertainment",
    descZh: "买票、预订、景点游览等娱乐场景英语，玩得尽兴。",
    descEn:
      "Entertainment English for tickets, reservations, attractions, and events.",
    questionEn: "How to buy tickets and enjoy entertainment in English?",
    questionZh: "国外娱乐场景怎么用英语？",
  },
  banking: {
    slugEn: "banking",
    descZh: "换汇、开户、ATM 操作等银行通讯场景英语。",
    descEn:
      "Banking English for currency exchange, accounts, ATMs, and telecom services.",
    questionEn: "How to handle banking and telecom in English abroad?",
    questionZh: "在国外怎么用英语办理银行业务？",
  },
  accommodation: {
    slugEn: "accommodation",
    descZh: "民宿、青旅、Airbnb 等住宿场景英语。",
    descEn:
      "Accommodation English for Airbnb, hostels, and alternative lodging.",
    questionEn: "How to communicate with Airbnb hosts in English?",
    questionZh: "住民宿怎么用英语沟通？",
  },
  "daily-life": {
    slugEn: "daily-life",
    descZh: "洗衣、快递、日常购物等生活场景英语。",
    descEn:
      "Daily life English for laundry, deliveries, groceries, and routine tasks.",
    questionEn: "What English do you need for daily life abroad?",
    questionZh: "在国外日常生活需要哪些英语？",
  },
  foundation: {
    slugEn: "foundation",
    descZh: "问候、感谢、道歉等基础礼貌用语，出国必备。",
    descEn:
      "Foundation English: greetings, thanks, apologies, and essential polite phrases.",
    questionEn: "What are the most essential English phrases for travelers?",
    questionZh: "出国最基础的英语有哪些？",
  },
};
