import type { MicroInteractionGroup } from "./scene-types";

// ============================================================
// 微交互 — 高频 3 秒对话场景
// 覆盖出境旅行中最常遇到的"一句话交互"
// ============================================================

export const MICRO_INTERACTIONS: MicroInteractionGroup[] = [
  // ==================== 1. 付款场景 ====================
  {
    id: "micro-payment",
    titleZh: "付款时会听到的话",
    titleEn: "What You'll Hear at Checkout",
    icon: "💳",
    items: [
      {
        textEn: "Cash or card?",
        textZh: "现金还是刷卡？",
        responseEn: "Card, please.",
        responseZh: "刷卡。",
        note: "最常见的收银问题，几乎每次购物都会遇到",
      },
      {
        textEn: "Would you like a receipt?",
        textZh: "需要小票吗？",
        responseEn: "Yes, please.",
        responseZh: "要的，谢谢。",
      },
      {
        textEn: "Do you have exact change?",
        textZh: "有零钱吗？",
        responseEn: "Sorry, I only have this.",
        responseZh: "抱歉，我只有这个。",
        note: "用现金支付时经常会被问到",
      },
      {
        textEn: "Insert or tap your card.",
        textZh: "请插卡或刷卡。",
        note: "自助结账或POS机前常听到",
      },
      {
        textEn: "Enter your PIN, please.",
        textZh: "请输入密码。",
        note: "PIN 指银行卡密码",
      },
      {
        textEn: "Sign here, please.",
        textZh: "请在这里签名。",
      },
      {
        textEn: "Your total is twenty-three fifty.",
        textZh: "一共23.50。",
        note: "\"twenty-three fifty\" = $23.50，口语中省略 dollars",
      },
      {
        textEn: "Do you need a bag?",
        textZh: "需要袋子吗？",
        responseEn: "Yes, please.",
        responseZh: "需要，谢谢。",
        note: "很多国家购物袋需要另付费",
      },
      {
        textEn: "Would you like to add a tip?",
        textZh: "需要加小费吗？",
        responseEn: "Sure, fifteen percent.",
        responseZh: "好的，15%。",
        note: "在美国餐厅和咖啡店很常见",
      },
    ],
  },

  // ==================== 2. 问路/方向 ====================
  {
    id: "micro-directions",
    titleZh: "问路时的快速对话",
    titleEn: "Asking for Directions",
    icon: "🧭",
    items: [
      {
        textEn: "Excuse me, where's the restroom?",
        textZh: "请问洗手间在哪？",
        responseEn: "Down the hall, on your left.",
        responseZh: "走廊尽头，左手边。",
      },
      {
        textEn: "Is it far from here?",
        textZh: "离这里远吗？",
        responseEn: "It's about a five-minute walk.",
        responseZh: "走路大约五分钟。",
      },
      {
        textEn: "Which way to the exit?",
        textZh: "出口怎么走？",
        responseEn: "Go straight and turn right.",
        responseZh: "直走然后右转。",
      },
      {
        textEn: "Can you show me on the map?",
        textZh: "能在地图上指给我看吗？",
        note: "拿着手机地图问路时非常实用",
      },
      {
        textEn: "Is this the right way to the station?",
        textZh: "去车站是走这个方向吗？",
        responseEn: "Yes, keep going for two blocks.",
        responseZh: "是的，继续走两个街区。",
      },
      {
        textEn: "Excuse me, I'm lost.",
        textZh: "不好意思，我迷路了。",
        note: "开口求助的最简单说法",
      },
      {
        textEn: "Where's the nearest ATM?",
        textZh: "最近的取款机在哪？",
        responseEn: "There's one inside the convenience store.",
        responseZh: "便利店里面有一个。",
      },
      {
        textEn: "How do I get to the airport from here?",
        textZh: "从这里怎么去机场？",
        responseEn: "Take the subway, Line 2.",
        responseZh: "坐地铁2号线。",
      },
    ],
  },

  // ==================== 3. 餐厅点餐 ====================
  {
    id: "micro-ordering",
    titleZh: "点餐时的高频对话",
    titleEn: "Ordering Food & Drinks",
    icon: "🍽️",
    items: [
      {
        textEn: "Are you ready to order?",
        textZh: "可以点餐了吗？",
        responseEn: "Yes, I'll have the chicken.",
        responseZh: "好的，我要鸡肉。",
      },
      {
        textEn: "For here or to go?",
        textZh: "堂食还是外带？",
        responseEn: "For here, please.",
        responseZh: "堂食。",
        note: "快餐店必问，英式英语说 eat in or take away",
      },
      {
        textEn: "Anything else?",
        textZh: "还要别的吗？",
        responseEn: "That's all, thanks.",
        responseZh: "就这些，谢谢。",
      },
      {
        textEn: "How would you like your steak?",
        textZh: "牛排要几分熟？",
        responseEn: "Medium, please.",
        responseZh: "五分熟。",
        note: "rare=三分, medium rare=四分, medium=五分, medium well=七分, well done=全熟",
      },
      {
        textEn: "Still or sparkling?",
        textZh: "要普通水还是气泡水？",
        responseEn: "Still, please.",
        responseZh: "普通水。",
        note: "在欧洲点水时经常被问到",
      },
      {
        textEn: "Would you like to see the dessert menu?",
        textZh: "要看甜品菜单吗？",
        responseEn: "Sure, why not!",
        responseZh: "好啊！",
      },
      {
        textEn: "Can I get you anything to drink?",
        textZh: "要喝点什么吗？",
        responseEn: "Just water, please.",
        responseZh: "水就好。",
      },
      {
        textEn: "Do you have any allergies?",
        textZh: "有什么过敏的吗？",
        responseEn: "I'm allergic to nuts.",
        responseZh: "我对坚果过敏。",
        note: "过敏信息一定要说清楚，这关系到安全",
      },
      {
        textEn: "Can I get the check, please?",
        textZh: "可以买单吗？",
        note: "英式说 bill，美式说 check",
      },
    ],
  },

  // ==================== 4. 交通出行 ====================
  {
    id: "micro-transport",
    titleZh: "交通出行高频用语",
    titleEn: "Getting Around",
    icon: "🚕",
    items: [
      {
        textEn: "Where to?",
        textZh: "去哪？",
        responseEn: "To the Hilton Hotel, please.",
        responseZh: "去希尔顿酒店。",
        note: "出租车司机上车后第一句话",
      },
      {
        textEn: "Can you pull over here?",
        textZh: "可以在这里停吗？",
        note: "让出租车靠边停车",
      },
      {
        textEn: "Keep the change.",
        textZh: "不用找了。",
        note: "出租车付现金时的小费表达",
      },
      {
        textEn: "Is this seat taken?",
        textZh: "这个位子有人吗？",
        responseEn: "No, go ahead.",
        responseZh: "没有，请坐。",
      },
      {
        textEn: "Does this bus go to downtown?",
        textZh: "这趟车去市中心吗？",
        responseEn: "Yes, it does. Get off at the third stop.",
        responseZh: "是的。第三站下车。",
      },
      {
        textEn: "One ticket to Central Station, please.",
        textZh: "一张到中央车站的票。",
      },
      {
        textEn: "Which platform?",
        textZh: "在哪个站台？",
        responseEn: "Platform 3.",
        responseZh: "3号站台。",
      },
      {
        textEn: "How many stops to the airport?",
        textZh: "到机场还有几站？",
        responseEn: "Three more stops.",
        responseZh: "还有三站。",
      },
      {
        textEn: "Excuse me, you're in my seat.",
        textZh: "不好意思，这是我的座位。",
        responseEn: "Oh sorry, let me move.",
        responseZh: "哦抱歉，我换一下。",
        note: "高铁或飞机上对号入座时可能用到",
      },
    ],
  },

  // ==================== 5. 酒店住宿 ====================
  {
    id: "micro-hotel",
    titleZh: "住宿时的常用短对话",
    titleEn: "Hotel Quick Phrases",
    icon: "🏨",
    items: [
      {
        textEn: "I have a reservation under the name...",
        textZh: "我有预订，名字是……",
        note: "入住时的标准开场白",
      },
      {
        textEn: "What time is checkout?",
        textZh: "几点退房？",
        responseEn: "Checkout is at 11 AM.",
        responseZh: "11点退房。",
      },
      {
        textEn: "Could I get a wake-up call at 7?",
        textZh: "能7点叫我起床吗？",
        responseEn: "Of course. We'll call your room at 7.",
        responseZh: "当然，7点会打电话到您房间。",
      },
      {
        textEn: "The Wi-Fi password, please?",
        textZh: "Wi-Fi密码是什么？",
        responseEn: "It's on the card in your room.",
        responseZh: "在房间里的卡片上。",
      },
      {
        textEn: "Can I have extra towels?",
        textZh: "能多给几条毛巾吗？",
        responseEn: "Sure, I'll send them up.",
        responseZh: "好的，马上送到。",
      },
      {
        textEn: "Is breakfast included?",
        textZh: "包含早餐吗？",
        responseEn: "Yes, breakfast is served from 7 to 10.",
        responseZh: "是的，早餐时间7到10点。",
      },
      {
        textEn: "Can I store my luggage after checkout?",
        textZh: "退房后能寄存行李吗？",
        responseEn: "Absolutely. We have a luggage room.",
        responseZh: "当然可以。我们有行李寄存处。",
      },
      {
        textEn: "The air conditioning isn't working.",
        textZh: "空调坏了。",
        responseEn: "I'm sorry. I'll send someone right away.",
        responseZh: "抱歉，我马上派人过去。",
      },
    ],
  },

  // ==================== 6. 社交礼仪 ====================
  {
    id: "micro-social",
    titleZh: "打招呼和闲聊用语",
    titleEn: "Greetings & Small Talk",
    icon: "👋",
    items: [
      {
        textEn: "How's it going?",
        textZh: "怎么样？/最近好吗？",
        responseEn: "Good, thanks! How about you?",
        responseZh: "挺好的！你呢？",
        note: "这是打招呼，不是真的问你过得怎样",
      },
      {
        textEn: "Nice to meet you.",
        textZh: "很高兴认识你。",
        responseEn: "Nice to meet you too!",
        responseZh: "我也很高兴认识你！",
      },
      {
        textEn: "Where are you from?",
        textZh: "你从哪里来？",
        responseEn: "I'm from China.",
        responseZh: "我来自中国。",
      },
      {
        textEn: "What do you do?",
        textZh: "你做什么工作？",
        responseEn: "I work in marketing.",
        responseZh: "我做市场营销。",
        note: "\"What do you do\" = 问职业，不是问你在干什么",
      },
      {
        textEn: "Have a good one!",
        textZh: "祝你愉快！",
        responseEn: "You too!",
        responseZh: "你也是！",
        note: "美式日常告别语，比 goodbye 更自然",
      },
      {
        textEn: "Take care!",
        textZh: "保重！",
        responseEn: "Thanks, you too!",
        responseZh: "谢谢，你也是！",
      },
      {
        textEn: "Sorry, what was your name again?",
        textZh: "不好意思，你叫什么来着？",
        note: "忘记别人名字时的礼貌说法",
      },
      {
        textEn: "It was nice talking to you.",
        textZh: "和你聊天很开心。",
        responseEn: "Same here! See you around.",
        responseZh: "我也是！下次见。",
      },
      {
        textEn: "Could you say that again?",
        textZh: "能再说一遍吗？",
        note: "没听清时最礼貌的说法",
      },
    ],
  },

  // ==================== 7. 购物砍价 ====================
  {
    id: "micro-shopping",
    titleZh: "购物时的实用短语",
    titleEn: "Shopping Quick Phrases",
    icon: "🛍️",
    items: [
      {
        textEn: "Can I try this on?",
        textZh: "我能试穿一下吗？",
        responseEn: "Sure, the fitting room is over there.",
        responseZh: "当然，试衣间在那边。",
      },
      {
        textEn: "Do you have this in a different size?",
        textZh: "有其他尺码吗？",
        responseEn: "What size do you need?",
        responseZh: "您需要什么尺码？",
      },
      {
        textEn: "How much is this?",
        textZh: "这个多少钱？",
      },
      {
        textEn: "Is there a discount?",
        textZh: "有折扣吗？",
        responseEn: "It's 20% off today.",
        responseZh: "今天打八折。",
        note: "20% off = 打八折（100% - 20% = 80%）",
      },
      {
        textEn: "Can I return this if it doesn't fit?",
        textZh: "不合适能退吗？",
        responseEn: "Yes, within 30 days with the receipt.",
        responseZh: "可以，30天内带小票退。",
      },
      {
        textEn: "I'm just looking, thanks.",
        textZh: "我随便看看，谢谢。",
        note: "店员问 \"Can I help you?\" 时，不想被打扰的标准回答",
      },
      {
        textEn: "Do you have this in blue?",
        textZh: "有蓝色的吗？",
        responseEn: "Let me check... Yes, here you go.",
        responseZh: "我看看……有的，给您。",
      },
      {
        textEn: "Can I get a tax refund?",
        textZh: "能退税吗？",
        responseEn: "Yes, you'll need to fill out this form.",
        responseZh: "可以，需要填这张表。",
        note: "在欧洲和日韩购物时常用",
      },
    ],
  },

  // ==================== 8. 紧急求助 ====================
  {
    id: "micro-emergency",
    titleZh: "紧急情况求助用语",
    titleEn: "Emergency Phrases",
    icon: "🆘",
    items: [
      {
        textEn: "I need help!",
        textZh: "我需要帮助！",
      },
      {
        textEn: "Please call an ambulance.",
        textZh: "请叫救护车。",
        note: "紧急医疗情况时的第一句话",
      },
      {
        textEn: "I've lost my passport.",
        textZh: "我的护照丢了。",
        responseEn: "You should contact your embassy.",
        responseZh: "你应该联系你的大使馆。",
      },
      {
        textEn: "Someone stole my wallet.",
        textZh: "有人偷了我的钱包。",
        responseEn: "Let's go to the police station.",
        responseZh: "我们去警察局。",
      },
      {
        textEn: "I don't feel well.",
        textZh: "我不舒服。",
        responseEn: "Do you need to see a doctor?",
        responseZh: "需要看医生吗？",
      },
      {
        textEn: "Where's the nearest hospital?",
        textZh: "最近的医院在哪？",
      },
      {
        textEn: "I'm allergic to this. It's an emergency.",
        textZh: "我对这个过敏，这是紧急情况。",
        note: "严重过敏反应时，务必明确告知是紧急情况",
      },
      {
        textEn: "Can you call the police?",
        textZh: "能帮我报警吗？",
      },
      {
        textEn: "I need to contact my embassy.",
        textZh: "我需要联系大使馆。",
        note: "护照丢失、被拘留、重大事故时的关键求助",
      },
    ],
  },
];
