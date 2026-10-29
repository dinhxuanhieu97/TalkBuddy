import type { PresetScene } from "../scene-types";

// ============================================================
// 酒店场景 — Hotel Scenes
// 覆盖：入住、房间问题、客房服务、退房、投诉、礼宾服务、延住换房
// ============================================================

export const HOTEL_SCENES: PresetScene[] = [
  // ==================== 酒店入住 ====================
  {
    id: "hotel-checkin",
    tags: ["check in", "入住", "hotel", "酒店", "front desk"],
    category: "hotel",
    titleZh: "酒店入住",
    titleEn: "Hotel Check-in",
    description: "到达酒店后的入住流程，包括出示证件、确认预订、了解房间信息等",
    otherRole: "前台接待员",
    otherRoleIcon: "bell",
    flows: [
      // --- Flow 1: 标准入住（有预订，一切顺利）---
      {
        id: "standard",
        titleZh: "标准入住",
        titleEn: "Standard Check-in",
        description: "有预订、一切顺利的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation under the name Wang.",
            textZh: "你好，我有预订，姓王。",
            culturalNote: '"under the name" 是酒店入住的标准说法。也可以说 "under Wang" 或 "booked under Wang"。',
            casualVersion: "Hey, checking in. Last name Wang.",
            commonMistake: {
              wrong: "I have a reservation, my name is Wang.",
              correct: "I have a reservation under the name Wang.",
              explanation: "直接说“我的名字是王”听起来不自然，应使用 under the name。",
            },
            formalityVariants: {
              casual: "Hi, reservation for Wang.",
              standard: "Hi, I have a reservation under the name Wang.",
              formal: "Good evening/afternoon, I have a reservation under the name Wang.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome, Mr. Wang! May I see your passport or ID, please?",
            textZh: "欢迎，王先生！请出示您的护照或身份证。",
            variations: [
              { textEn: "Good evening! Could I have your ID, please?", textZh: "晚上好！能看一下您的证件吗？" },
              {
                textEn: "Hello! I'll need to see a photo ID to check you in.",
                textZh: "你好！我需要看一下带照片的证件才能办理入住。",
              },
            ],
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "ID", zh: "身份证/证件" },
            ],
            responseTip: "这时你需要递上护照或身份证",
            alternativeExpressions: [
              {
                textEn: "Hi there! Can I get your passport or a photo ID?",
                textZh: "你好！能看一下护照或带照片的证件吗？",
                actionHint: "递上证件",
                frequency: "common",
              },
              {
                textEn: "Sure thing! I just need to see some ID real quick.",
                textZh: "好的！我快速看一下证件就行。",
                actionHint: "准备好证件",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome, Mr. Wang! Can I see your passport/ID?",
            commonMistake: {
              wrong: "Show me your passport, please.",
              correct: "May I see your passport, please?",
              explanation: "Show me 太直接，用 May I see 或 Could I see 更礼貌。",
            },
            formalityVariants: {
              casual: "Welcome, Mr. Wang! Can I see your passport or ID?",
              standard: "Welcome, Mr. Wang! May I see your passport or ID, please?",
              formal:
                "Welcome, Mr. Wang. Would you kindly present your passport or a valid form of identification, please?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
            culturalNote: '递东西时说 "Here you go" 或 "Here you are" 都很自然。',
            casualVersion: "Here ya go.",
            commonMistake: {
              wrong: "Give you.",
              correct: "Here you go.",
              explanation: "“给你”不能直译为 Give you，用 Here you go 或 Here it is 更自然。",
            },
            formalityVariants: {
              casual: "Here ya go.",
              standard: "Here you go.",
              formal: "Certainly, here it is.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you. I have a king room for two nights, checking out on March 15th. Is that correct?",
            textZh: "谢谢。您预订的是大床房，住两晚，3月15日退房。对吗？",
            variations: [
              {
                textEn: "I see a reservation for a double room, two nights. Does that look right?",
                textZh: "我看到您预订了双人间，两晚。对吗？",
              },
            ],
            keyPhrases: [
              { en: "king room", zh: "大床房" },
              { en: "checking out", zh: "退房" },
              { en: "two nights", zh: "两晚" },
            ],
            responseTip: "确认你的预订信息是否正确",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Okay, so I've got you down for a king room, two nights, out on the 15th. Sound right?",
                textZh: "好的，您订的是大床房，两晚，15号退房。对吗？",
                actionHint: "核对信息",
                frequency: "common",
              },
              {
                textEn: "Let me confirm — king bed, checking out March 15th. Is that what you booked?",
                textZh: "我确认一下——大床，3月15号退房。是您订的吗？",
                actionHint: "确认预订",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks. King room, two nights, check out March 15th? Right?",
            formalityVariants: {
              casual: "Thanks. King room, two nights, check out March 15th? Right?",
              standard: "Thank you. I have a king room for two nights, checking out on March 15th. Is that correct?",
              formal:
                "Thank you. My records indicate a reservation for a king-sized room for two nights, with a departure date of March 15th. Does that align with your booking details?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's correct.",
            textZh: "对，没错。",
            casualVersion: "Yep, that's right.",
            commonMistake: {
              wrong: "Yes, correct.",
              correct: "Yes, that's correct.",
              explanation: "Yes, correct 听起来不够完整自然，加上 that's 更地道。",
            },
            formalityVariants: {
              casual: "Yep, that's right.",
              standard: "Yes, that's correct.",
              formal: "Yes, that is indeed correct.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Would you like to add breakfast to your stay? It's $18 per person per day.",
            textZh: "您需要加早餐吗？每人每天18美元。",
            culturalNote: "美国酒店早餐通常不包含在房费内，需要额外付费",
            variations: [
              {
                textEn: "We offer a breakfast buffet for $18 per person. Would you like to add that?",
                textZh: "我们提供自助早餐，每人18美元。要加上吗？",
              },
            ],
            keyPhrases: [
              { en: "breakfast", zh: "早餐" },
              { en: "per person per day", zh: "每人每天" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Just so you know, we have a breakfast buffet — it's $18 per person if you're interested.",
                textZh: "跟您说一下，我们有自助早餐——如果有兴趣的话每人18美元。",
                actionHint: "决定是否加早餐",
                frequency: "common",
              },
              {
                textEn: "By the way, would you like to add breakfast? It runs $18 a head.",
                textZh: "对了，要不要加早餐？每人18美元。",
                actionHint: "考虑是否需要",
                frequency: "occasional",
              },
            ],
            casualVersion: "Wanna add breakfast? Eighteen bucks a day, per person.",
            commonMistake: {
              wrong: "Do you want to add breakfast?",
              correct: "Would you like to add breakfast?",
              explanation: "Do you want 语气较直接，用 Would you like 更礼貌。",
            },
            formalityVariants: {
              casual: "Wanna add breakfast? Eighteen bucks a day, per person.",
              standard: "Would you like to add breakfast to your stay? It's $18 per person per day.",
              formal:
                "We offer a breakfast option. Would you be interested in adding it to your reservation? The cost is $18 per person, per day.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. For two people.",
            textZh: "好的，两个人都加。",
            casualVersion: "Sure, for both of us.",
            commonMistake: {
              wrong: "Yes, for two people.",
              correct: "Yes, please. For two people.",
              explanation: "表达同意或请求时，加上 please 会更礼貌。",
            },
            formalityVariants: {
              casual: "Yeah, for two.",
              standard: "Yes, please. For two people.",
              formal: "Yes, that would be excellent. Please include breakfast for two individuals.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Your room is 1208 on the 12th floor. Here are your key cards. The elevator is down the hall on your right.",
            textZh: "您的房间是12楼1208号。这是您的房卡。电梯在走廊右边。",
            keyPhrases: [
              { en: "key cards", zh: "房卡" },
              { en: "elevator", zh: "电梯" },
              { en: "down the hall", zh: "沿走廊走" },
              { en: "on your right", zh: "在您右边" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're all set! Room 1208, twelfth floor. Elevators are just around the corner to your right.",
                textZh: "都办好了！1208房间，12楼。电梯在转角右边。",
                actionHint: "记住房间号和方向",
                frequency: "common",
              },
              {
                textEn: "Here are your keys — you're in 1208. Head down that way and the lifts are on the right.",
                textZh: "这是您的钥匙——1208房间。往那边走，电梯在右边。",
                actionHint: "拿好房卡",
                frequency: "occasional",
              },
            ],
            casualVersion: "Room's 1208, 12th floor. Keys here. Elevator's down the hall, right.",
            formalityVariants: {
              casual: "Room's 1208, 12th floor. Keys here. Elevator's down the hall, right.",
              standard:
                "Your room is 1208 on the 12th floor. Here are your key cards. The elevator is down the hall on your right.",
              formal:
                "Your assigned accommodation is room 1208, located on the twelfth floor. Herein are your key cards. The elevator may be found just down the corridor to your right.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. What time is breakfast?",
            textZh: "谢谢。早餐几点？",
            casualVersion: "Thanks. Breakfast time?",
            commonMistake: {
              wrong: "Breakfast time is what?",
              correct: "What time is breakfast?",
              explanation: "英语疑问句语序是 What time is [subject]?",
            },
            formalityVariants: {
              casual: "Thanks. Breakfast time?",
              standard: "Thank you. What time is breakfast?",
              formal: "Thank you. Could you please inform me of the breakfast service hours?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Breakfast is from 6:30 to 10 AM in the restaurant on the second floor. Checkout is at 11 AM. Is there anything else I can help you with?",
            textZh: "早餐在二楼餐厅，时间是早上6:30到10点。退房时间是上午11点。还有什么需要帮助的吗？",
            keyPhrases: [
              { en: "6:30 to 10", zh: "6:30到10点" },
              { en: "second floor", zh: "二楼" },
              { en: "checkout", zh: "退房" },
              { en: "11 AM", zh: "上午11点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Breakfast runs from 6:30 to 10 — second floor restaurant. Oh, and checkout's at 11. Need anything else?",
                textZh: "早餐6:30到10点——二楼餐厅。对了，退房是11点。还需要什么吗？",
                actionHint: "记住时间信息",
                frequency: "common",
              },
              {
                textEn:
                  "You can grab breakfast downstairs between 6:30 and 10. Just head to the restaurant on 2. Checkout is 11 AM.",
                textZh: "6:30到10点可以去楼下吃早餐，二楼餐厅。退房时间是上午11点。",
                actionHint: "记下早餐和退房时间",
                frequency: "common",
              },
            ],
            casualVersion: "Breakfast: 6:30-10, second floor restaurant. Checkout 11. Anything else?",
            commonMistake: {
              wrong: "Do you have anything else can I help you?",
              correct: "Is there anything else I can help you with?",
              explanation: "疑问句语序错误，且 help you with 是固定搭配。",
            },
            formalityVariants: {
              casual: "Breakfast: 6:30-10, second floor restaurant. Checkout 11. Anything else?",
              standard:
                "Breakfast is from 6:30 to 10 AM in the restaurant on the second floor. Checkout is at 11 AM. Is there anything else I can help you with?",
              formal:
                "Breakfast service is provided from 6:30 AM to 10 AM, located in our second-floor restaurant. The scheduled checkout time is 11 AM. May I assist you with any further inquiries?",
            },
          },
          {
            speaker: "you",
            textEn: "What's the Wi-Fi password?",
            textZh: "Wi-Fi 密码是什么？",
            casualVersion: "Wi-Fi password?",
            commonMistake: {
              wrong: "What is Wi-Fi password?",
              correct: "What's the Wi-Fi password?",
              explanation: "缺乏冠词 the，听起来不自然。",
            },
            formalityVariants: {
              casual: "Wi-Fi password?",
              standard: "What's the Wi-Fi password?",
              formal: "Could you please provide the Wi-Fi password?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: 'The Wi-Fi network is "HotelGuest" and the password is on this card. Enjoy your stay!',
            textZh: 'Wi-Fi 名称是 "HotelGuest"，密码在这张卡上。祝您入住愉快！',
            keyPhrases: [
              { en: "Wi-Fi network", zh: "Wi-Fi网络名称" },
              { en: "password", zh: "密码" },
              { en: "enjoy your stay", zh: "祝您入住愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wi-Fi is 'HotelGuest' — password's right here on this card. Have a great stay!",
                textZh: "Wi-Fi名字是'HotelGuest'——密码在这张卡上。祝您住得愉快！",
                actionHint: "收好Wi-Fi卡",
                frequency: "common",
              },
              {
                textEn: "Here you go — the network name and password are both on this little card. Enjoy!",
                textZh: "给您——网络名和密码都在这张小卡上。享受入住！",
                actionHint: "保管好卡片",
                frequency: "common",
              },
            ],
            casualVersion: "Wi-Fi's 'HotelGuest'.",
            commonMistake: {
              wrong: "Wi-Fi name is...",
              correct: "The Wi-Fi network is...",
              explanation: "更常用 network 而非 name 来指代 Wi-Fi 名称。",
            },
            formalityVariants: {
              casual: "Wi-Fi's 'HotelGuest'.",
              standard: "The Wi-Fi network is 'HotelGuest'.",
              formal: "The Wi-Fi network is designated as 'HotelGuest'.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you very much!",
            textZh: "非常感谢！",
            casualVersion: "Thanks a bunch!",
            formalityVariants: {
              casual: "Thanks a bunch!",
              standard: "Thank you very much!",
              formal: "I sincerely appreciate your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 预订找不到 ---
      {
        id: "no-reservation",
        titleZh: "预订找不到",
        titleEn: "Reservation Not Found",
        description: "前台找不到你的预订，需要提供确认信息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation under the name Wang.",
            textZh: "你好，我有预订，姓王。",
            casualVersion: "Got a reservation under Wang.",
            culturalNote: "在美国直接说“under the name X”即可，无需多余解释。",
            commonMistake: {
              wrong: "My name is Wang and I have a reservation.",
              correct: "I have a reservation under the name Wang.",
              explanation: "“under the name X”是美国常用的表达预订名字的方式。",
            },
            formalityVariants: {
              casual: "Got a reservation for Wang.",
              standard: "Hi, I have a reservation under the name Wang.",
              formal: "Good morning/afternoon, I believe I have a reservation under the surname Wang.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry, I can't find a reservation under that name. Do you have a confirmation number or email?",
            textZh: "抱歉，我查不到这个名字的预订。您有确认号或确认邮件吗？",
            variations: [
              {
                textEn: "Hmm, nothing is coming up under Wang. Could you spell your full name for me?",
                textZh: "嗯，王这个姓查不到。能拼一下您的全名吗？",
              },
              {
                textEn: "I don't see a reservation under that name. Which website did you book through?",
                textZh: "我没查到这个名字的预订。您是在哪个网站订的？",
              },
            ],
            keyPhrases: [
              { en: "can't find", zh: "找不到" },
              { en: "confirmation number", zh: "确认号" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            responseTip: "不要慌，检查你的预订确认邮件",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Hmm, I'm not seeing anything under that name. Got a booking confirmation or reference number?",
                textZh: "嗯，这个名字查不到。有预订确认或参考号吗？",
                actionHint: "找出确认邮件",
                frequency: "common",
              },
              {
                textEn: "Nothing's coming up. Do you remember which platform you booked through?",
                textZh: "查不到呢。您还记得在哪个平台订的吗？",
                actionHint: "回忆预订渠道",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sorry, can't find anything for that name. Got a confirmation number or email?",
            formalityVariants: {
              casual: "Sorry, nothing under that name. Got a confirmation number or email?",
              standard:
                "I'm sorry, I can't find a reservation under that name. Do you have a confirmation number or email?",
              formal:
                "I apologize, but I am unable to locate a reservation under that particular name. Might you have a confirmation number or email address I could reference?",
            },
          },
          {
            speaker: "you",
            textEn: "Let me check... Here's my confirmation email. The booking number is HK-39205.",
            textZh: "让我看看……这是我的确认邮件。订单号是 HK-39205。",
            culturalNote: "出发前截图或打印确认邮件很重要，以防系统查不到。",
            casualVersion: "Let me see... Here's the email. Booking number's HK-39205.",
            commonMistake: {
              wrong: "Here is my confirmation email.",
              correct: "Here's my confirmation email.",
              explanation: "口语中“Here's X”或“Here you go”更自然，表示递交物品。",
            },
            formalityVariants: {
              casual: "Lemme check... Here's the email. Booking number: HK-39205.",
              standard: "Let me check... Here's my confirmation email. The booking number is HK-39205.",
              formal:
                "Please allow me a moment to check... Ah, yes, here is my confirmation email. The booking reference number is HK-39205.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: 'Ah, I found it. It was booked under "Wei Wang." A double room for three nights, correct?',
            textZh: '找到了，是用 "Wei Wang" 订的。双人间住三晚，对吗？',
            culturalNote: "中国人的姓名顺序和美国不同，容易混淆姓和名。",
            keyPhrases: [
              { en: "found it", zh: "找到了" },
              { en: "booked under", zh: "用...的名字订的" },
              { en: "double room", zh: "双人间" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, here we go — it's under 'Wei Wang.' Double room, three nights. That you?",
                textZh: "哦，找到了——是'Wei Wang'订的。双人间住三晚。是您吗？",
                actionHint: "确认是否正确",
                frequency: "common",
              },
              {
                textEn:
                  "Got it! Looks like the booking was made under a different name. Double room for three nights — ring a bell?",
                textZh: "找到了！好像是用另一个名字订的。双人间三晚——对得上吗？",
                actionHint: "确认预订信息",
                frequency: "occasional",
              },
            ],
            casualVersion: "Found it. It's under...",
            formalityVariants: {
              casual: "Ah, found it. Looks like it's under...",
              standard: "Ah, I found it. It was booked under \\",
              formal: "Ah, yes, I have located the reservation. It appears to have been booked under the name...",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's the one. My colleague booked it for me, that's why it's under a different name.",
            textZh: "对，就是这个。是同事帮我订的，所以名字不一样。",
            casualVersion: "Yep, that's it. Colleague booked it, so different name.",
            commonMistake: {
              wrong: "My colleague helped me to book it, therefore the name is different.",
              correct: "My colleague booked it for me, that's why it's under a different name.",
              explanation: "“that's why”是非常地道的口语表达，连接原因和结果。",
            },
            formalityVariants: {
              casual: "Yeah, that's it. Colleague booked it for me, so the name's different.",
              standard: "Yes, that's the one. My colleague booked it for me, that's why it's under a different name.",
              formal:
                "Yes, that is indeed the reservation. My colleague made the booking on my behalf, which explains the discrepancy in the name.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem at all. May I see your passport, please?",
            textZh: "没问题。请出示您的护照。",
            alternativeExpressions: [
              {
                textEn: "No worries! Can I just grab your passport real quick?",
                textZh: "没关系！能快速看一下您的护照吗？",
                actionHint: "递上护照",
                frequency: "common",
              },
              {
                textEn: "That happens a lot. I'll just need your ID to get you checked in.",
                textZh: "这种情况很常见。我看一下证件就能帮您办入住。",
                actionHint: "准备好证件",
                frequency: "common",
              },
            ],
            casualVersion: "No problem. Can I see your passport?",
            formalityVariants: {
              casual: "No prob. Can I see your passport?",
              standard: "No problem at all. May I see your passport, please?",
              formal:
                "Understood. That is perfectly acceptable. May I kindly request to see your passport at this time?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
            casualVersion: "Here.",
            culturalNote: "“Here you go”是递交物品时非常自然的表达。",
            commonMistake: {
              wrong: "Here is it.",
              correct: "Here you go.",
              explanation: "“Here you go”是习惯用法，表示“给你”，比“Here is it”更自然。",
            },
            formalityVariants: {
              casual: "Here.",
              standard: "Here you go.",
              formal: "Certainly, here it is.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you. Your room is ready. Room 805 on the 8th floor. Here are your key cards.",
            textZh: "谢谢。您的房间已经准备好了。8楼805号。给您房卡。",
            keyPhrases: [
              { en: "room is ready", zh: "房间准备好了" },
              { en: "key cards", zh: "房卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "All set! You're in room 805, eighth floor. Here are your keys.",
                textZh: "都办好了！805房间，8楼。给您钥匙。",
                actionHint: "拿好房卡",
                frequency: "common",
              },
              {
                textEn: "Great news — your room's good to go. 805, eighth floor. Two key cards for you.",
                textZh: "好消息——房间准备好了。805，8楼。两张房卡给您。",
                actionHint: "记住房间号",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks. Room's ready. 805, 8th floor. Here's your keys.",
            formalityVariants: {
              casual: "Thanks. Room's ready, 805 on the 8th. Here's your keys.",
              standard: "Thank you. Your room is ready. Room 805 on the 8th floor. Here are your key cards.",
              formal:
                "Thank you. Your accommodations are prepared. You will be in Room 805 on the eighth floor. Please accept these key cards.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Where is the elevator?",
            textZh: "谢谢。电梯在哪里？",
            casualVersion: "Thanks. Where's the elevator?",
            commonMistake: {
              wrong: "Where is elevator?",
              correct: "Where is the elevator?",
              explanation: "在询问特定物品时，通常需要加定冠词“the”。",
            },
            formalityVariants: {
              casual: "Thanks. Where's the elevator?",
              standard: "Thank you. Where is the elevator?",
              formal: "Thank you. Could you please direct me to the elevators?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Go straight ahead and turn left. You'll see the elevators on your right.",
            textZh: "直走然后左转，电梯在您右手边。",
            keyPhrases: [
              { en: "straight ahead", zh: "直走" },
              { en: "turn left", zh: "左转" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just go down the hall and hang a left — elevators are right there.",
                textZh: "沿走廊走，左转——电梯就在那儿。",
                actionHint: "跟着指引走",
                frequency: "common",
              },
              {
                textEn: "Head that way, make a left at the end, and you can't miss 'em.",
                textZh: "往那边走，到头左转，一定能看到。",
                actionHint: "按指示走",
                frequency: "occasional",
              },
            ],
            casualVersion: "Go straight, then left. Elevators'll be on your right.",
            formalityVariants: {
              casual: "Straight ahead, then left. Elevators'll be on your right.",
              standard: "Go straight ahead and turn left. You'll see the elevators on your right.",
              formal: "Proceed straight ahead, then make a left turn. The elevators will be located to your right.",
            },
          },
        ],
      },

      // --- Flow 3: 没有预订，直接入住（Walk-in）---
      {
        id: "walk-in",
        titleZh: "没有预订直接入住",
        titleEn: "Walk-in (No Reservation)",
        description: "没有提前预订，直接到酒店问有没有空房",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't have a reservation. Do you have any rooms available tonight?",
            textZh: "你好，我没有预订。今晚有空房间吗？",
            casualVersion: "Hey, any rooms available for tonight?",
            culturalNote: "在美国，直接提出需求是常见的，无需过多铺垫",
            commonMistake: {
              wrong: "Excuse me, I don't have reservation, do you have room?",
              correct: "Hi, I don't have a reservation. Do you have any rooms available tonight?",
              explanation: "缺少冠词且表达不自然，地道说法更简洁明了",
            },
            formalityVariants: {
              casual: "Hey, no reservation. Got any rooms for tonight?",
              standard: "Hi, I don't have a reservation. Do you have any rooms available tonight?",
              formal:
                "Good evening. I apologize, I do not have a prior reservation. I was wondering if you might have any room availability for this evening?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check... Yes, we have a standard double room at $150 per night and a deluxe king room at $220. Which would you prefer?",
            textZh: "让我查一下……有的，我们有标准双人间150美元一晚，豪华大床房220美元一晚。您想要哪种？",
            variations: [
              {
                textEn: "We have a few options. A city-view room for $180 and a garden-view for $160. How many nights?",
                textZh: "我们有几个选择。城景房180美元，花园景观房160美元。您住几晚？",
              },
            ],
            keyPhrases: [
              { en: "standard double", zh: "标准双人间" },
              { en: "deluxe king", zh: "豪华大床房" },
              { en: "per night", zh: "每晚" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "You're in luck! We've got a standard room for 150 a night and a nicer king room for 220. What works for you?",
                textZh: "您运气不错！标准间每晚150，更好的大床房220。您选哪个？",
                actionHint: "选择房型",
                frequency: "common",
              },
              {
                textEn:
                  "Let me see what we have... Okay, I can do a double at 150 or a king at 220 per night. How many nights are you staying?",
                textZh: "让我看看有什么……好的，双人间150或大床房220每晚。您住几晚？",
                actionHint: "告诉他们住几晚",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check... Yeah, we got a standard double for 150 a night, or a deluxe king for 220. Which one you want?",
            formalityVariants: {
              casual: "Lemme check... Yeah, we got a standard double for 150 and a deluxe king for 220. Which one?",
              standard:
                "Let me check... Yes, we have a standard double room at $150 per night and a deluxe king room at $220. Which would you prefer?",
              formal:
                "Certainly, please allow me a moment to confirm availability. Yes, we do have a standard double room available at $150 per evening, and a deluxe king room for $220. Which option would be more suitable for your needs?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the standard double, please. For two nights.",
            textZh: "我要标准双人间，住两晚。",
            casualVersion: "I'll just grab the standard double, for two nights.",
            commonMistake: {
              wrong: "I want standard double, two nights.",
              correct: "I'll take the standard double, please. For two nights.",
              explanation: "“I want” 听起来不礼貌，应使用 “I'll take” 或 “I'd like”",
            },
            formalityVariants: {
              casual: "I'll just grab the standard double, for two nights.",
              standard: "I'll take the standard double, please. For two nights.",
              formal: "I would prefer the standard double room, please. I anticipate staying for two nights.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure. May I have your passport and a credit card for the deposit?",
            textZh: "好的。请出示您的护照和一张信用卡作为押金。",
            culturalNote: "酒店收取押金很常见，押金是预授权，不会立即扣款。",
            keyPhrases: [
              { en: "credit card", zh: "信用卡" },
              { en: "deposit", zh: "押金" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great choice. I'll just need your passport and a credit card — we take a small deposit.",
                textZh: "好的选择。我需要您的护照和信用卡——我们会收一小笔押金。",
                actionHint: "准备证件和卡",
                frequency: "common",
              },
              {
                textEn: "No problem. Can I get an ID and a card for the security deposit?",
                textZh: "没问题。能给我看一下证件和信用卡吗？要交安全押金。",
                actionHint: "递上证件和卡",
                frequency: "common",
              },
            ],
            casualVersion: "Okay. Can I get your passport and a card for the deposit?",
            formalityVariants: {
              casual: "Okay. Can I get your passport and a card for the deposit?",
              standard: "Certainly. May I have your passport and a credit card for the deposit?",
              formal:
                "Certainly. Could I trouble you for your passport and a credit card for the incidental deposit, please?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. How much is the deposit?",
            textZh: "给您。押金是多少？",
            casualVersion: "Here. How much is the deposit?",
            commonMistake: {
              wrong: "Give you. Deposit how much?",
              correct: "Here you go. How much is the deposit?",
              explanation: "“Give you” 不自然，“Here you go” 更地道。疑问句语序错误",
            },
            formalityVariants: {
              casual: "Here. How much is the deposit?",
              standard: "Here you go. How much is the deposit?",
              formal: "Certainly, here they are. May I inquire about the amount of the required deposit?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The deposit is $100. It will be refunded at checkout if there's no damage. Would you like me to charge everything to this card?",
            textZh: "押金100美元，退房时如无损坏会退还。所有费用都刷这张卡吗？",
            keyPhrases: [
              { en: "refunded", zh: "退还" },
              { en: "at checkout", zh: "退房时" },
              { en: "no damage", zh: "无损坏" },
              { en: "charge", zh: "收费/刷卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's a hundred bucks for the deposit — you'll get it back when you check out, as long as nothing's damaged. Want everything on this card?",
                textZh: "押金100美元——退房时退给您，只要没有损坏。都刷这张卡吗？",
                actionHint: "确认付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "We'll put a $100 hold on your card. It gets released at checkout. Should I put the room charges on the same card?",
                textZh: "您的卡会预授权100美元，退房时释放。房费也刷这张卡吗？",
                actionHint: "确认是否同意",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Deposit's 100 bucks. You'll get it back at checkout if nothing's broken. Wanna put everything on this card?",
            formalityVariants: {
              casual: "Deposit's 100 bucks, you get it back if nothing's damaged. Wanna put everything on this card?",
              standard:
                "The deposit is $100. It will be refunded at checkout if there's no damage. Would you like me to charge everything to this card?",
              formal:
                "The required deposit is $100, which will be fully refunded upon your departure, provided there are no damages. Would you prefer all charges be settled on this credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's fine. Is breakfast included?",
            textZh: "好的。包含早餐吗？",
            casualVersion: "Yeah, that's fine. Breakfast included?",
            commonMistake: {
              wrong: "Include breakfast?",
              correct: "Is breakfast included?",
              explanation: "疑问句语序错误，且缺少动词be",
            },
            formalityVariants: {
              casual: "Yeah, that's fine. Breakfast included?",
              standard: "Yes, that's fine. Is breakfast included?",
              formal: "Yes, that arrangement is acceptable. May I inquire if breakfast is included with the room rate?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Breakfast is not included with this room, but you can add it for $15 per person. Or there's a café next door that's quite popular.",
            textZh: "这个房型不含早餐，但可以加，每人15美元。旁边也有一家很受欢迎的咖啡馆。",
            keyPhrases: [
              { en: "not included", zh: "不包含" },
              { en: "add it", zh: "加上" },
              { en: "café next door", zh: "旁边的咖啡馆" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Breakfast isn't included, but we can add it for 15 bucks a person. There's also a great little café right next door if you'd rather try that.",
                textZh: "不含早餐，但可以加，每人15美元。隔壁还有一家不错的小咖啡馆，也可以试试。",
                actionHint: "决定早餐方案",
                frequency: "common",
              },
              {
                textEn:
                  "This rate doesn't come with breakfast, but honestly the café next door is really good and cheaper too.",
                textZh: "这个价格不含早餐，但说实话隔壁咖啡馆真的很好吃，也更便宜。",
                actionHint: "考虑去隔壁吃",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Breakfast ain't included with this one, but you can add it for 15 bucks a person. Or there's a pretty popular cafe right next door.",
            formalityVariants: {
              casual: "Breakfast ain't included, but you can add it for 15 a person. Or there's a good cafe next door.",
              standard:
                "Breakfast is not included with this room, but you can add it for $15 per person. Or there's a café next door that's quite popular.",
              formal:
                "Breakfast is not complimentary with this particular room type; however, it can be added for an additional $15 per person. Alternatively, there is a rather well-regarded café situated adjacent to our establishment.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll skip the breakfast. Thank you.",
            textZh: "不加早餐了，谢谢。",
            casualVersion: "Nah, I'll pass on breakfast. Thanks.",
            commonMistake: {
              wrong: "I don't need breakfast. Thank you.",
              correct: "I'll skip the breakfast. Thank you.",
              explanation: "“I'll skip” 或 “I'll pass on” 更自然地表达不需要",
            },
            formalityVariants: {
              casual: "Nah, I'll pass on breakfast. Thanks.",
              standard: "I'll skip the breakfast. Thank you.",
              formal: "I believe I will decline the breakfast option at this time. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem. Room 402 on the 4th floor. Here's your key card. Enjoy your stay!",
            textZh: "好的。4楼402号。给您房卡。祝您入住愉快！",
            alternativeExpressions: [
              {
                textEn: "All done! You're in 402, fourth floor. Here's your key — have a good night!",
                textZh: "都办好了！402房间，4楼。给您钥匙——晚安！",
                actionHint: "拿好房卡",
                frequency: "common",
              },
              {
                textEn: "You're all set — room 402. Elevators are just over there. Enjoy!",
                textZh: "搞定了——402房间。电梯就在那边。享受入住！",
                actionHint: "准备上楼",
                frequency: "common",
              },
            ],
            casualVersion: "No worries. Room 402, fourth floor. Here's your key. Enjoy!",
            formalityVariants: {
              casual: "No worries. Room 402, fourth floor. Here's your key. Enjoy!",
              standard: "No problem. Room 402 on the 4th floor. Here's your key card. Enjoy your stay!",
              formal:
                "Certainly. Your room will be 402, located on the fourth floor. Here is your key card. We sincerely hope you have a most pleasant stay with us.",
            },
          },
        ],
      },

      // --- Flow 4: 要求提前入住 ---
      {
        id: "early-checkin",
        titleZh: "提前入住",
        titleEn: "Early Check-in Request",
        description: "到达时间早于标准入住时间，请求提前入住",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation for tonight, but we arrived early. Is early check-in possible?",
            textZh: "你好，我预订了今晚的房间，但我们到早了。可以提前入住吗？",
            culturalNote: "美国酒店普遍下午3点或4点check-in，提前入住通常需要额外付费或根据房态决定。",
            casualVersion: "Hey, got a reservation for tonight, but we're early. Can we check in now?",
            commonMistake: {
              wrong: "I have reservation tonight, but we arrived early.",
              correct: "I have a reservation for tonight, but we arrived early.",
              explanation: "中文常省略冠词和介词，英文需要补齐。",
            },
            formalityVariants: {
              casual: "Hey, got a reservation for tonight, but we're early. Can we check in?",
              standard: "Hi, I have a reservation for tonight, but we arrived early. Is early check-in possible?",
              formal:
                "Good morning/afternoon. I have a reservation confirmed for this evening. We've arrived somewhat ahead of schedule; I was wondering if an early check-in would be feasible?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Check-in is normally at 3 PM. Let me see if your room is ready... I'm sorry, it's still being cleaned. It should be ready by 1 PM.",
            textZh: "正常入住时间是下午3点。让我看看您的房间好了没……抱歉，还在打扫。大概下午1点可以好。",
            variations: [
              {
                textEn:
                  "Our standard check-in time is 3 PM, but let me check... Good news, your room is ready! I can check you in now.",
                textZh: "标准入住时间是下午3点，让我查查……好消息，您的房间已经好了！可以现在入住。",
              },
            ],
            keyPhrases: [
              { en: "check-in", zh: "入住" },
              { en: "3 PM", zh: "下午3点" },
              { en: "still being cleaned", zh: "还在打扫" },
              { en: "ready by", zh: "……之前准备好" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "So check-in's at 3, but let me take a look... Ah, it's not quite ready yet. Should be good by 1 though.",
                textZh: "入住时间是3点，不过让我看看……还没好呢。不过1点应该可以。",
                actionHint: "考虑如何打发时间",
                frequency: "common",
              },
              {
                textEn:
                  "Normally we don't check in till 3, but I'll see... Sorry, they're still cleaning it. Give us till about 1.",
                textZh: "正常3点才能入住，我看看……抱歉，还在打扫。大约1点能好。",
                actionHint: "问能否寄存行李",
                frequency: "common",
              },
            ],
            casualVersion:
              "Normal check-in's 3. Lemme check if your room's ready... Nope, still being cleaned. Should be good by 1.",
            formalityVariants: {
              casual: "Normal check-in's 3. Lemme see if your room's ready... Still cleaning it. Should be good by 1.",
              standard:
                "Check-in is normally at 3 PM. Let me see if your room is ready... I'm sorry, it's still being cleaned. It should be ready by 1 PM.",
              formal:
                "Our standard check-in time is 3 PM. Allow me a moment to verify the status of your room... My apologies, it is currently undergoing preparation. It should be available for occupancy by approximately 1 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "That's fine. Can we leave our luggage here while we wait?",
            textZh: "没关系。我们等的时候可以把行李放在这里吗？",
            casualVersion: "Okay, cool. Can we leave our bags here while we wait?",
            formalityVariants: {
              casual: "Okay, cool. Can we leave our bags here while we wait?",
              standard: "That's fine. Can we leave our luggage here while we wait?",
              formal:
                "Understood. Would it be possible to store our luggage here while we await the room's availability?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course! We have a luggage storage room. Here's your claim tag. Just show it when you pick up your bags.",
            textZh: "当然可以！我们有行李寄存室。这是您的取件牌。取行李时出示就行。",
            keyPhrases: [
              { en: "luggage storage", zh: "行李寄存" },
              { en: "claim tag", zh: "取件牌" },
              { en: "pick up", zh: "取/拿" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, no problem! We'll keep your bags safe. Here's a tag — just hang onto it.",
                textZh: "当然没问题！我们会保管好您的行李。给您一个牌子——收好就行。",
                actionHint: "保管好取件牌",
                frequency: "common",
              },
              {
                textEn: "Absolutely! Just leave your stuff with us. I'll give you a ticket so you can grab them later.",
                textZh: "当然可以！东西放我们这就行。给您一张小票，回来凭票取。",
                actionHint: "记好取件方式",
                frequency: "common",
              },
            ],
            casualVersion: "Absolutely! Got a luggage room. Here's your tag. Just show it when you grab your bags.",
            formalityVariants: {
              casual: "Sure! Got a luggage room. Here's your tag. Just show it when you grab your bags.",
              standard:
                "Of course! We have a luggage storage room. Here's your claim tag. Just show it when you pick up your bags.",
              formal:
                "Certainly! We provide a secure facility for luggage storage. Kindly accept this claim tag; it will be required for retrieval of your belongings.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there a restaurant nearby where we can get lunch?",
            textZh: "谢谢。附近有可以吃午饭的餐厅吗？",
            casualVersion: "Thanks. Any good lunch spots nearby?",
            commonMistake: {
              wrong: "Is there a restaurant nearby to eat lunch?",
              correct: "Is there a restaurant nearby where we can get lunch?",
              explanation: "“to eat” 听起来不自然，用 “get lunch” 或 “for lunch” 更地道。",
            },
            formalityVariants: {
              casual: "Thanks. Any good lunch spots nearby?",
              standard: "Thank you. Is there a restaurant nearby where we can get lunch?",
              formal: "Thank you. Could you recommend a suitable establishment for lunch in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, there's a café on the ground floor, and several restaurants within a 5-minute walk. Here's a map of the area.",
            textZh: "有的，一楼有咖啡厅，步行5分钟内也有好几家餐厅。给您一张附近地图。",
            keyPhrases: [
              { en: "ground floor", zh: "一楼" },
              { en: "within a 5-minute walk", zh: "步行5分钟内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, there are tons of places nearby. We have our own café downstairs, or there's a whole bunch of restaurants just a short walk away.",
                textZh: "附近有很多地方。楼下有我们自己的咖啡厅，走一小段也有一堆餐厅。",
                actionHint: "拿好地图",
                frequency: "common",
              },
              {
                textEn:
                  "Plenty of options! There's food on the ground floor, and I can mark a few good spots on this map for you.",
                textZh: "选择很多！一楼有吃的，我可以在地图上帮您标几个好地方。",
                actionHint: "看看推荐",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, there's a café downstairs, and a few restaurants like, 5 mins walk. Here's a map.",
            formalityVariants: {
              casual: "Yep, café downstairs, and a few places within a 5-min walk. Here's a map.",
              standard:
                "Yes, there's a café on the ground floor, and several restaurants within a 5-minute walk. Here's a map of the area.",
              formal:
                "Indeed. We have a café located on the ground floor, and several dining establishments are accessible within a five-minute walk. Allow me to provide you with a complimentary map of the local area.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very helpful. We'll be back around 1 PM then.",
            textZh: "太有帮助了。那我们大概1点回来。",
            casualVersion: "Super helpful, thanks. We'll be back 'round 1 then.",
            commonMistake: {
              wrong: "That's very help.",
              correct: "That's very helpful.",
              explanation: "“helpful” 是形容词，通常用来描述事物或行为有帮助。",
            },
            formalityVariants: {
              casual: "Super helpful, thanks. We'll be back 'round 1 then.",
              standard: "That's very helpful. We'll be back around 1 PM then.",
              formal: "That is most helpful, thank you. We shall plan to return at approximately 1 PM.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Sounds good. I'll have everything ready for you. If the room is ready sooner, would you like me to send you a text?",
            textZh: "好的，我会把一切准备好。如果房间提前好了，要我发短信通知您吗？",
            keyPhrases: [
              { en: "ready sooner", zh: "提前准备好" },
              { en: "send you a text", zh: "发短信给你" },
            ],
            alternativeExpressions: [
              {
                textEn: "Perfect. I'll get everything sorted. Want me to text you if the room's ready early?",
                textZh: "好的，我来安排一切。如果房间提前好了，要我发短信通知您吗？",
                actionHint: "留下手机号",
                frequency: "common",
              },
              {
                textEn: "No worries, we'll have it all ready. If it's done before 1, I can shoot you a message.",
                textZh: "别担心，我们都会准备好。如果1点前好了，我给您发条消息。",
                actionHint: "提供联系方式",
                frequency: "common",
              },
            ],
            casualVersion: "Sounds good. I'll get everything set. If the room's ready early, wanna me text ya?",
            formalityVariants: {
              casual: "Sounds good. I'll get everything set. If it's ready early, wanna a text?",
              standard:
                "Sounds good. I'll have everything ready for you. If the room is ready sooner, would you like me to send you a text?",
              formal:
                "Excellent. I will ensure all arrangements are prepared for your arrival. Should the room become available prior to the anticipated time, would you appreciate a text message notification?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that would be great. My number is...",
            textZh: "好的，那太好了。我的号码是……",
            casualVersion: "Yeah, that'd be awesome. My number's...",
            formalityVariants: {
              casual: "Yeah, that'd be awesome. My number's...",
              standard: "Yes, that would be great. My number is...",
              formal: "Yes, that would be most appreciated. My contact number is...",
            },
          },
        ],
      },

      // --- Flow 5: 要求升级房间 ---
      {
        id: "upgrade",
        titleZh: "要求升级房间",
        titleEn: "Room Upgrade Request",
        description: "到达后想要升级到更好的房型",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation for a standard room. Is it possible to upgrade to a suite?",
            textZh: "你好，我预订了标准间。能升级到套房吗？",
            casualVersion: "Hey, got a standard room reservation. Can I upgrade to a suite?",
            commonMistake: {
              wrong: "Can I upgrade to suite?",
              correct: "Can I upgrade to a suite?",
              explanation: "“suite” 是可数名词，前面需要冠词 “a”。",
            },
            formalityVariants: {
              casual: "Hey, got a standard room. Can I upgrade to a suite?",
              standard: "Hi, I have a reservation for a standard room. Is it possible to upgrade to a suite?",
              formal: "Good afternoon. I currently have a reservation for a standard room. I was wondering if it would be possible to inquire about upgrading to a suite?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check availability... We do have a junior suite available for an additional $80 per night. Would you be interested?",
            textZh: "让我查一下……我们有小套房，每晚加80美元。您有兴趣吗？",
            casualVersion: "Lemme check... Yeah, got a junior suite for an extra 80 bucks a night. Interested?",
            formalityVariants: {
              casual: "Lemme check... Yep, got a junior suite, extra 80 bucks a night. Interested?",
              standard: "Let me check availability... We do have a junior suite available for an additional $80 per night. Would you be interested?",
              formal: "Certainly, please allow me a moment to verify availability... We do indeed have a junior suite available, which incurs an additional charge of $80 per night. Would that be something you'd be interested in considering?",
            },
            variations: [
              {
                textEn:
                  "I'm sorry, all our suites are fully booked tonight. But I can offer you a deluxe room with a better view for $40 more.",
                textZh: "抱歉，今晚套房都订满了。但我可以给您一间景观更好的豪华间，多40美元。",
              },
            ],
            keyPhrases: [
              { en: "availability", zh: "空房情况" },
              { en: "junior suite", zh: "小套房" },
              { en: "additional", zh: "额外的" },
              { en: "per night", zh: "每晚" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Let me see... Actually, we do have a junior suite open. It'd be an extra 80 a night. Interested?",
                textZh: "让我看看……我们确实有小套房空出来。每晚多80美元。有兴趣吗？",
                actionHint: "考虑是否升级",
                frequency: "common",
              },
              {
                textEn:
                  "Good news — there's a junior suite available if you want to upgrade. It's 80 more per night on top of your current rate.",
                textZh: "好消息——有小套房可以升级。在现有价格上每晚多80美元。",
                actionHint: "问问区别再决定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the difference between the junior suite and my current room?",
            textZh: "小套房和我现在的房间有什么区别？",
            casualVersion: "What's the diff between the junior suite and my room?",
            formalityVariants: {
              casual: "What's the diff between the junior suite and my room?",
              standard: "What's the difference between the junior suite and my current room?",
              formal: "Could you please elaborate on the distinctions between the junior suite and the room I currently have reserved?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The junior suite is about 50% larger, with a separate sitting area, a king-size bed, a bigger bathroom with a bathtub, and a city view.",
            textZh: "小套房大约大50%，有独立客厅区域、特大号床、更大的带浴缸的浴室，还有城市景观。",
            casualVersion: "The junior suite's like, 50% bigger, with a separate sitting area, king bed, bigger bath with a tub, and city view.",
            formalityVariants: {
              casual: "Junior suite's about 50% bigger, separate sitting area, king bed, bigger bath with a tub, city view.",
              standard: "The junior suite is about 50% larger, with a separate sitting area, a king-size bed, a bigger bathroom with a bathtub, and a city view.",
              formal: "The junior suite offers approximately 50% more space, featuring a distinct sitting area, a king-size bed, a more expansive bathroom inclusive of a bathtub, and an advantageous city view.",
            },
            keyPhrases: [
              { en: "50% larger", zh: "大50%" },
              { en: "separate sitting area", zh: "独立客厅" },
              { en: "king-size bed", zh: "特大号床" },
              { en: "bathtub", zh: "浴缸" },
              { en: "city view", zh: "城市景观" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's about half again as big — you get a living area, a king bed, a tub, and a great view of the city.",
                textZh: "大概大一半——有客厅区、大床、浴缸，还有很棒的城市景观。",
                actionHint: "考虑是否值得",
                frequency: "common",
              },
              {
                textEn:
                  "Big difference, actually. Way more space, separate sitting area, bigger bathroom with a soaking tub, plus a killer view.",
                textZh: "区别很大的。空间大很多，有独立客厅，更大的浴室带浴缸，还有绝佳景观。",
                actionHint: "听起来不错就升级",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. I'll take the upgrade.",
            textZh: "听起来不错。我要升级。",
            casualVersion: "Sounds awesome. I'll take it.",
            formalityVariants: {
              casual: "Sounds awesome. I'll take it.",
              standard: "That sounds great. I'll take the upgrade.",
              formal: "That sounds rather appealing. I would be pleased to proceed with the upgrade.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Wonderful! The total for two nights with the upgrade will be $560. I'll charge the difference to your card on file. Here are your new key cards for room 1502.",
            textZh: "太好了！升级后两晚总共560美元。差价会从您的卡里扣。给您1502号房的新房卡。",
            casualVersion: "Awesome! Total for two nights with the upgrade's 560 bucks. I'll just charge the difference to your card. Here's your new keys for 1502.",
            formalityVariants: {
              casual: "Awesome! Total for two nights with the upgrade's 560 bucks. Charge the diff to your card. Here's your new keys for 1502.",
              standard: "Wonderful! The total for two nights with the upgrade will be $560. I'll charge the difference to your card on file. Here are your new key cards for room 1502.",
              formal: "Excellent! The revised total for two nights, inclusive of the upgrade, will be $560. The incremental amount will be charged to the credit card we have on file. Kindly accept your new key cards for room 1502.",
            },
            keyPhrases: [
              { en: "total", zh: "总共" },
              { en: "charge the difference", zh: "扣差价" },
              { en: "card on file", zh: "已登记的卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Awesome! So with the upgrade, two nights comes out to $560. I'll just charge the difference to the card we have. Here are your new keys — room 1502.",
                textZh: "太好了！升级后两晚总共560美元。差价直接扣已登记的卡就行。给您新房卡——1502房。",
                actionHint: "拿好新房卡",
                frequency: "common",
              },
              {
                textEn:
                  "Great choice! Your new total is $560 for two nights. I'll put the extra on your card. You're now in 1502 — here are the keys.",
                textZh: "好选择！两晚新的总价是560美元。多出的部分刷您的卡。现在是1502房——给您钥匙。",
                actionHint: "确认金额",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for the upgrade.",
            textZh: "太好了。谢谢升级。",
            casualVersion: "Perfect, thanks for the upgrade.",
            formalityVariants: {
              casual: "Perfect, thanks for the upgrade.",
              standard: "Perfect. Thank you for the upgrade.",
              formal: "Splendid. My sincere thanks for facilitating this upgrade.",
            },
          },
        ],
      },
      {
        id: "overbooking-upgrade",
        titleZh: "超售应对与补偿",
        titleEn: "Overbooking & Compensation",
        description: "到前台被告知超售没房间、要求解决方案、争取升级或补偿",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking in. I have a reservation under the name Wang for tonight.",
            textZh: "你好，我来入住。我预订了今晚的房间，姓王。",
            casualVersion: "Hey, checking in. Reservation for Wang, tonight.",
            formalityVariants: {
              casual: "Hi, checking in. Wang, one night.",
              standard: "Hi, I have a reservation under Wang for tonight.",
              formal: "Good evening. I have a reservation under the name Wang for this evening.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good evening, Mr./Ms. Wang. I... I'm very sorry, but I need to let you know that we're overbooked tonight. Unfortunately, we don't have your room type available.",
            textZh: "晚上好，王先生/女士。我... 非常抱歉，我需要告诉您，我们今晚超售了。很遗憾，您预订的房型已经没有了。",
            culturalNote: "酒店超售在旺季很常见。你有权要求补偿——免费升级、免费一晚、或打车到替代酒店的费用。",
            keyPhrases: [{ en: "overbooked", zh: "超售" }, { en: "room type", zh: "房型" }],
            alternativeExpressions: [
              { textEn: "I'm really sorry about this, but we have an overbooking situation tonight. Your reserved room is not available.", textZh: "真的很抱歉，但我们今晚出现了超售。您预订的房间没有了。", actionHint: "overbooking situation = 超售情况", frequency: "common" },
              { textEn: "I apologize, Mr./Ms. Wang. Due to unexpected circumstances, we are unable to honor your reservation as originally booked.", textZh: "抱歉，王先生/女士。由于意外情况，我们无法按原来的预订安排。", actionHint: "honor your reservation = 履行预订", frequency: "occasional" },
            ],
            casualVersion: "Hey, Mr./Ms. Wang. So... I'm really sorry, but we're overbooked tonight. We don't have your room available.",
            formalityVariants: {
              casual: "So, bad news — we're overbooked tonight. Your room type's gone. I'm really sorry.",
              standard: "I'm very sorry, but we're overbooked tonight. Your room type is not available.",
              formal: "I must sincerely apologize. Regrettably, we find ourselves in an overbooking situation this evening, and the room type you reserved is no longer available.",
            },
          },
          {
            speaker: "you",
            textEn: "Wait, what? I booked this room two weeks ago. I have a confirmation email right here. What are you going to do about this?",
            textZh: "等等，什么？我两周前就订了。我有确认邮件在这里。你们打算怎么解决？",
            commonMistake: {
              wrong: "This is terrible! I want to speak to your boss!",
              correct: "I have a confirmation. What are you going to do about this?",
              explanation: "虽然有权生气，但先冷静地陈述事实、要求解决方案，通常能得到更好的补偿。",
            },
            casualVersion: "Seriously? I booked this like two weeks ago. Got my confirmation right here. So what now?",
            formalityVariants: {
              casual: "Are you serious? Booked two weeks ago. Got the confirmation. What's the plan?",
              standard: "I booked this two weeks ago and have a confirmation. What can you do about this?",
              formal: "I must say this is quite concerning. I made this reservation two weeks in advance and have documented confirmation. How do you intend to resolve this matter?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I completely understand your frustration, and again, I'm really sorry. Here's what I can offer: we have a suite available on a higher floor — I'd like to upgrade you at no extra charge. It's much larger, with a city view.",
            textZh: "我完全理解您的不满，再次道歉。我能提供的是：我们高楼层有一间套房——我想免费给您升级。房间大很多，有城市景观。",
            keyPhrases: [{ en: "upgrade at no extra charge", zh: "免费升级" }, { en: "suite", zh: "套房" }, { en: "city view", zh: "城市景观" }],
            alternativeExpressions: [
              { textEn: "I totally get it. Let me make it right. We have a deluxe suite available — I can upgrade you for free. It's a bigger room with a great view.", textZh: "我完全理解。让我来弥补。我们有一间豪华套房——可以免费升级。房间更大，景观很好。", actionHint: "make it right = 弥补", frequency: "common" },
            ],
            casualVersion: "I totally get it, and I'm sorry. Look, we've got a suite on a higher floor — I'll bump you up for free. Way bigger, city view.",
            formalityVariants: {
              casual: "Totally get it. Here's what I can do — free upgrade to a suite upstairs. Bigger room, city view.",
              standard: "I understand. We have a suite available. I'd like to upgrade you at no charge — larger room, city view.",
              formal: "I fully comprehend your frustration. As compensation, we have a premium suite available on a higher floor. I would like to offer you a complimentary upgrade. It is considerably more spacious and features a panoramic city view.",
            },
          },
          {
            speaker: "you",
            textEn: "Well, that's something. But honestly, this is really inconvenient. Is there anything else you can offer? Like a complimentary breakfast or a late checkout?",
            textZh: "嗯，还算可以。但说实话，这真的很不方便。还能提供别的吗？比如免费早餐或延迟退房？",
            casualVersion: "Okay, that helps. But this is still pretty annoying. Can you throw in breakfast or a late checkout?",
            formalityVariants: {
              casual: "That's okay I guess. But can you add breakfast or late checkout? This is kinda a hassle.",
              standard: "That's a start. Is there anything else — complimentary breakfast or late checkout?",
              formal: "I appreciate the upgrade; however, given the considerable inconvenience, I wonder if additional compensation might be possible — perhaps complimentary breakfast or an extended checkout time?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. I'll add complimentary breakfast for your stay and a late checkout until 2 PM. I'll also take 20% off tonight's rate. I want to make sure you have a great experience despite this hiccup.",
            textZh: "完全可以。我给您加上住宿期间的免费早餐和下午2点延迟退房。今晚的房费也打八折。我想确保尽管有这个小插曲，您还是有很好的体验。",
            keyPhrases: [{ en: "complimentary breakfast", zh: "免费早餐" }, { en: "late checkout", zh: "延迟退房" }, { en: "take off", zh: "打折/减免" }, { en: "hiccup", zh: "小插曲/小问题" }],
            alternativeExpressions: [
              { textEn: "Of course. Free breakfast, checkout at 2 PM, and I'll knock 20% off the rate. We really want to make this right.", textZh: "当然。免费早餐，2点退房，房费减20%。我们真的想弥补。", actionHint: "knock off = 减免", frequency: "common" },
            ],
            casualVersion: "For sure. Free breakfast, late checkout till 2, and 20% off tonight. Wanna make it up to you.",
            formalityVariants: {
              casual: "Totally. Free breakfast, 2 PM checkout, 20% off. Wanna make it right.",
              standard: "Of course. Complimentary breakfast, 2 PM checkout, and 20% off tonight's rate.",
              formal: "Certainly. I shall include complimentary breakfast throughout your stay, extend your checkout to 2:00 PM, and apply a 20% discount to this evening's rate. We are committed to ensuring your experience is exemplary despite this unfortunate situation.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I appreciate that. Could I get all of that in writing? Just so there's no confusion at checkout.",
            textZh: "好的，我很感激。能把这些都写下来吗？免得退房时有误解。",
            commonMistake: {
              wrong: "Can you write it down?",
              correct: "Could I get that in writing?",
              explanation: "'Get it in writing' 是要求书面确认的标准说法，更正式也更有保障。",
            },
            casualVersion: "That works. Can I get that in writing though? Don't want any mix-ups at checkout.",
            formalityVariants: {
              casual: "Cool, appreciate it. Can I get that in writing? Just in case.",
              standard: "I appreciate that. Could I get all of that in writing?",
              formal: "That is most appreciated. Would it be possible to receive written confirmation of these arrangements to avoid any discrepancies upon checkout?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! I'll print out a summary of everything — the upgrade, breakfast, late checkout, and the discount — and I'll also email it to the address on your reservation. Here are your key cards for suite 2108.",
            textZh: "当然！我会打印一份摘要——升级、早餐、延迟退房和折扣——也会发到您预订留的邮箱。这是2108套房的房卡。",
            keyPhrases: [{ en: "print out a summary", zh: "打印摘要" }, { en: "key cards", zh: "房卡" }],
            alternativeExpressions: [
              { textEn: "Absolutely. Let me print everything and email a copy. Here are your keys — suite 2108. The elevator is to your right.", textZh: "当然。我打印一份同时邮件发一份。给您房卡——2108套房。电梯在你右边。", actionHint: "双重确认", frequency: "common" },
            ],
            casualVersion: "Sure thing! I'll print it out and email it to you. Here's your keys — suite 2108.",
            formalityVariants: {
              casual: "Yep! I'll print it and shoot you an email. Keys for suite 2108 right here.",
              standard: "Of course. I'll print a summary and email it to you. Here are your keys for suite 2108.",
              formal: "Certainly. I shall prepare a printed summary of all arrangements and transmit a copy via email to the address on file. Here are your key cards for suite 2108.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate how you handled this. Have a good evening.",
            textZh: "谢谢。感谢你的处理方式。晚安。",
            casualVersion: "Thanks for handling this. Have a good night.",
            formalityVariants: {
              casual: "Thanks for sorting it out. Night!",
              standard: "Thank you for handling this well. Have a good evening.",
              formal: "I appreciate your professionalism in addressing this matter. I wish you a pleasant evening.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 房间问题 ====================
  {
    id: "hotel-room-issue",
    category: "hotel",
    titleZh: "房间问题",
    titleEn: "Room Issues",
    description: "入住后发现房间有问题，需要联系前台解决",
    otherRole: "前台/客房服务",
    otherRoleIcon: "wrench",
    flows: [
      // --- Flow 1: 设备故障 ---
      {
        id: "equipment",
        titleZh: "设备故障",
        titleEn: "Equipment Malfunction",
        description: "空调、热水器、电视等设备不工作",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, this is room 1208. The air conditioning isn't working.",
            textZh: "你好，我是1208房间。空调坏了。",
            casualVersion: "Hey, room 1208. AC's out.",
            commonMistake: {
              wrong: "Air condition is not working.",
              correct: "The air conditioning isn't working.",
              explanation: "空调的英文常用 'air conditioning' 或 'AC'。",
            },
            formalityVariants: {
              casual: "Hey, room 1208. AC's out.",
              standard: "Hello, this is room 1208. The air conditioning isn't working.",
              formal: "Good evening, this is room 1208. I regret to inform you that the air conditioning unit is currently non-functional.",
            },
            culturalNote: "打酒店内部电话时，先说房间号让对方快速定位。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry to hear that, Mr. Wang. I'll send someone from maintenance to take a look right away. Will you be in your room?",
            textZh: "很抱歉，王先生。我马上派维修人员去看看。您会在房间里吗？",
            casualVersion: "Oh, sorry, Mr. Wang. I'll send someone right up. You gonna be in the room?",
            commonMistake: {
              wrong: "I am very sorry.",
              correct: "I'm very sorry.",
              explanation: "口语中常用缩写 'I'm'，更自然。",
            },
            formalityVariants: {
              casual: "Oh, sorry, Mr. Wang. I'll send someone right up. You gonna be in the room?",
              standard: "I'm very sorry, Mr. Wang. I'll send a technician up right away to take a look. Will you be in the room?",
              formal: "My sincerest apologies, Mr. Wang. I will dispatch a maintenance technician to your room immediately. May I inquire if you will be present in the room?",
            },
            keyPhrases: [
              { en: "maintenance", zh: "维修" },
              { en: "take a look", zh: "看看/检查" },
              { en: "right away", zh: "马上" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no, sorry about that. I'll get maintenance up there ASAP. You gonna be in the room?",
                textZh: "哎呀，抱歉。我尽快让维修过去。您在房间吗？",
                actionHint: "确认在房间等",
                frequency: "common",
              },
              {
                textEn: "That's no good. Let me send someone up right now to check on it. Will you be there?",
                textZh: "那可不行。我马上派人上去看看。您在房间吧？",
                actionHint: "在房间等维修",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll be here. Also, there's no hot water in the shower.",
            textZh: "是的，我在房间。还有，淋浴没有热水。",
            commonMistake: {
              wrong: "Also, no hot water in the shower.",
              correct: "And, on top of that, there's no hot water in the shower.",
              explanation: "美式口语中列举问题时，用 “and” 或 “on top of that” 更自然。",
            },
            casualVersion: "Yeah, I'll be here. Oh, and no hot water in the shower either.",
            formalityVariants: {
              casual: "Yeah, I'll be here. Oh, and no hot water in the shower either.",
              standard: "Yes, I'll be in the room. Also, there's no hot water in the shower.",
              formal: "Yes, I will be present in the room. Furthermore, I must also report a lack of hot water in the shower.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I apologize for the inconvenience. I'll make sure they check both issues. If we can't fix it quickly, we'll move you to another room. Is that okay?",
            textZh: "很抱歉给您带来不便。我会让他们一起检查。如果不能很快修好，我们给您换房间。可以吗？",
            commonMistake: {
              wrong: "Is that acceptable?",
              correct: "Would that be okay?",
              explanation: "询问是否“可以”时，“Would that be okay?”更口语自然。",
            },
            casualVersion: "Sorry 'bout the trouble. I'll have 'em check both. If we can't fix it fast, we'll just move you. Sound good?",
            formalityVariants: {
              casual: "Sorry 'bout the trouble. I'll have 'em check both. If we can't fix it fast, we'll just move you. Sound good?",
              standard: "I apologize for the inconvenience. I'll have them check both issues. If we can't fix it quickly, we'll move you to another room. Would that be acceptable?",
              formal: "I sincerely apologize for this inconvenience. I will ensure both matters are addressed simultaneously. Should a prompt resolution prove unattainable, we will gladly relocate you to an alternative room. Would that arrangement be amenable to you?",
            },
            keyPhrases: [
              { en: "inconvenience", zh: "不便" },
              { en: "fix", zh: "修理" },
              { en: "move you to another room", zh: "给您换房间" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Really sorry about all this. They'll look at both things. If it can't be fixed fast, we'll just switch your room. Sound okay?",
                textZh: "真的很抱歉。两个问题一起看。修不好就给您换房间。可以吗？",
                actionHint: "同意方案",
                frequency: "common",
              },
              {
                textEn:
                  "My apologies. I'll have them check everything. Worst case, we move you to a new room right away.",
                textZh: "非常抱歉。我让他们全部检查。最坏情况马上给您换房。",
                actionHint: "等待处理结果",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be fine. Thank you for handling it so quickly.",
            textZh: "那可以。谢谢这么快处理。",
            commonMistake: {
              wrong: "Thank you for quickly handle it.",
              correct: "Thank you for handling it so quickly.",
              explanation: "“for” 后跟动名词(-ing)形式，副词修饰动词。",
            },
            casualVersion: "Yeah, that works. Thanks for sorting it out fast.",
            formalityVariants: {
              casual: "Yeah, that works. Thanks for sorting it out fast.",
              standard: "That would be fine. Thank you for handling it so quickly.",
              formal: "That arrangement would be perfectly acceptable. I appreciate your prompt attention to this matter.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Someone will be there in about 10 minutes. Is there anything else?",
            textZh: "没问题。大约10分钟后有人到。还有其他需要吗？",
            commonMistake: {
              wrong: "Do you have other needs?",
              correct: "Is there anything else?",
              explanation: "询问“还有别的吗”时，美式口语常用 \"Anything else?\" 或 \"Is there anything else?\"。",
            },
            casualVersion: "No problem. Someone'll be there in like 10. Anything else?",
            formalityVariants: {
              casual: "No problem. Someone'll be there in like 10. Anything else?",
              standard: "Of course. Someone will be there in about 10 minutes. Is there anything else?",
              formal: "Certainly. A technician will arrive at your room within approximately ten minutes. Do you require any further assistance?",
            },
            keyPhrases: [{ en: "about 10 minutes", zh: "大约10分钟" }],
            alternativeExpressions: [
              {
                textEn: "Sure thing. They'll be up in about 10. Anything else I can help with?",
                textZh: "没问题。大约10分钟到。还有别的需要帮忙吗？",
                actionHint: "如有其他问题一并提出",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Expect someone within 10 minutes. Let us know if you need anything else.",
                textZh: "当然。10分钟内会有人到。有其他需要随时说。",
                actionHint: "等待维修人员",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 噪音问题 ---
      {
        id: "noise",
        titleZh: "噪音投诉",
        titleEn: "Noise Complaint",
        description: "隔壁或走廊太吵，影响休息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'm calling from room 1208. The room next door is very noisy. I can hear loud music and it's almost midnight.",
            textZh: "你好，我是1208房间。隔壁非常吵，能听到很大的音乐声，都快半夜了。",
            casualVersion: "Hey, room 1208. My neighbors are super loud, blasting music. It's almost midnight.",
            commonMistake: {
              wrong: "The room next door is very noisy.",
              correct: "The room next door is incredibly noisy.",
              explanation: "‘Incredibly noisy’ 比 'very noisy' 更强调，更能表达不满。",
            },
            formalityVariants: {
              casual: "Hey, room 1208. My neighbors are super loud, blasting music. It's almost midnight.",
              standard: "Hi, I'm from room 1208. The room next door is incredibly noisy, with really loud music. It's almost midnight.",
              formal: "Good evening. This is room 1208. I am contacting you to report an excessive level of noise emanating from the adjacent room, specifically very loud music, particularly concerning given the late hour.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm very sorry about that. I'll contact the guests in that room immediately and ask them to keep it down. If the noise continues, please call us back.",
            textZh: "非常抱歉。我马上联系那个房间的客人，让他们安静下来。如果还是吵，请再打电话给我们。",
            commonMistake: {
              wrong: "I'll let them quiet down.",
              correct: "I'll ask them to quiet down.",
              explanation: "“让他们安静”应是“要求他们安静”，用 \"ask them to\" 更自然。",
            },
            casualVersion: "So sorry. I'll call that room right away, tell 'em to quiet down. If it keeps up, just call us back.",
            formalityVariants: {
              casual: "So sorry. I'll call that room right away, tell 'em to quiet down. If it keeps up, just call us back.",
              standard: "I'm very sorry. I'll contact the guests in that room immediately and ask them to quiet down. Please call us again if they don't stop.",
              formal: "My sincere apologies. I will immediately reach out to the occupants of that room and request that they reduce their noise level. Should the disturbance persist, please do not hesitate to contact us again.",
            },
            keyPhrases: [
              { en: "keep it down", zh: "安静下来/小声点" },
              { en: "noise continues", zh: "还是吵" },
              { en: "call us back", zh: "再打电话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm so sorry. I'll call them right now and ask them to keep it down. Ring us back if it continues.",
                textZh: "太抱歉了。我现在就打电话让他们安静。如果还吵再打给我们。",
                actionHint: "等待看是否安静",
                frequency: "common",
              },
              {
                textEn: "That's unacceptable. Let me reach out to them immediately. Don't hesitate to call again.",
                textZh: "这不能接受。我马上联系他们。别犹豫随时再打来。",
                actionHint: "再观察一下",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If it doesn't stop, could I switch to a different room?",
            textZh: "如果还是不停，能给我换个房间吗？",
            casualVersion: "If it doesn't stop, can I just switch rooms?",
            commonMistake: {
              wrong: "If it doesn't stop, can I change a room?",
              correct: "If it doesn't stop, could I get a different room?",
              explanation: "‘change a room’ 不自然，常用 'switch rooms' 或 'get a different room'。",
            },
            formalityVariants: {
              casual: "If it doesn't stop, can I just switch rooms?",
              standard: "If it doesn't stop, could I get a different room?",
              formal: "Should the disturbance continue, would it be possible for me to be relocated to an alternative room?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely. I'll check which rooms are available on a quieter floor. If needed, we can move you right away and I'll send someone to help with your luggage.",
            textZh: "当然可以。我看看安静楼层有哪些空房。如果需要换，我们马上帮您搬，会派人帮您搬行李。",
            commonMistake: {
              wrong: "send someone to help you move your luggage.",
              correct: "send someone to assist with your luggage.",
              explanation: "\"assist with luggage\" 比 \"help move luggage\" 更地道客气。",
            },
            casualVersion: "Totally. I'll check for empty rooms on a quiet floor. If you gotta move, we'll get you sorted right away, and someone'll help with your bags.",
            formalityVariants: {
              casual: "Totally. I'll check for empty rooms on a quiet floor. If you gotta move, we'll get you sorted right away, and someone'll help with your bags.",
              standard: "Absolutely. I'll check what rooms are available on a quieter floor. If you need to move, we'll help you immediately and send someone to assist with your luggage.",
              formal: "Certainly. I will ascertain the availability of vacant accommodations on a more tranquil floor. Should relocation become necessary, we will facilitate your transfer immediately and dispatch assistance for your luggage.",
            },
            keyPhrases: [
              { en: "quieter floor", zh: "更安静的楼层" },
              { en: "move you", zh: "帮您搬/换房" },
              { en: "help with your luggage", zh: "帮您搬行李" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure. Let me find a quiet room on a different floor. We can move you right away and help with your bags.",
                textZh: "当然。我找个别的楼层安静的房间。马上帮您搬，行李也帮您弄。",
                actionHint: "等待换房安排",
                frequency: "common",
              },
              {
                textEn:
                  "Of course. I'll look into moving you somewhere quieter. We'll send someone up for your luggage.",
                textZh: "没问题。我看看给您换个安静点的房间。会派人帮您搬行李。",
                actionHint: "准备换房",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate it.",
            textZh: "谢谢，太感谢了。",
            commonMistake: {
              wrong: "I very appreciate it.",
              correct: "I appreciate it.",
              explanation: "\"appreciate\" 是动词，不需要 \"very\" 直接修饰，可用 \"really appreciate\"。",
            },
            casualVersion: "Thanks. Appreciate it.",
            formalityVariants: {
              casual: "Thanks. Appreciate it.",
              standard: "Thank you. I appreciate it.",
              formal: "Thank you. Your assistance is greatly appreciated.",
            },
          },
        ],
      },

      // --- Flow 3: 物品不足 ---
      {
        id: "missing-items",
        titleZh: "要求补充物品",
        titleEn: "Requesting Extra Items",
        description: "需要额外的毛巾、枕头、洗漱用品等",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, could I get some extra towels and an extra pillow for room 1208?",
            textZh: "你好，1208房间能多要几条毛巾和一个枕头吗？",
            casualVersion: "Hey, can I get some extra towels and another pillow for room 1208?",
            commonMistake: {
              wrong: "I want extra towels for room 1208.",
              correct: "Could I get some extra towels for room 1208?",
              explanation: "“I want”太直接，用“Could I get”更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, can I grab some extra towels and a pillow for 1208?",
              standard: "Hello, could I get some extra towels and an extra pillow for room 1208?",
              formal:
                "Good evening, I was wondering if it would be possible to request some additional towels and an extra pillow for room number 1208.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Of course! I'll bring them up right away. Would you also like extra toiletries — shampoo, soap, or a toothbrush?",
            textZh: "当然！我马上送上来。您还需要额外的洗漱用品吗？洗发水、香皂或牙刷？",
            commonMistake: {
              wrong: "Do you need any daily necessities?",
              correct: "Do you need any extra toiletries?",
              explanation: "日用品范围太广，'toiletries' 特指洗漱用品。",
            },
            keyPhrases: [
              { en: "bring them up", zh: "送上来" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "shampoo", zh: "洗发水" },
              { en: "toothbrush", zh: "牙刷" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing! I'll have those sent up right away. Need any toiletries too — shampoo, soap, that kind of thing?",
                textZh: "没问题！马上送上来。还需要洗漱用品吗——洗发水、香皂什么的？",
                actionHint: "告诉还需要什么",
                frequency: "common",
              },
              {
                textEn: "Absolutely! On my way up with those. Want me to grab some shampoo or soap while I'm at it?",
                textZh: "当然！我马上带上来。顺便带点洗发水或者香皂要不要？",
                actionHint: "顺便要其他东西",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing! I'll bring 'em right up. Need any extra toiletries too? Like shampoo, soap, or a toothbrush?",
            formalityVariants: {
              casual: "Yep, I'll bring 'em right up. Need any toiletries too? Shampoo, soap, toothbrush?",
              standard:
                "Of course! I'll bring those up right away. Would you also like any extra toiletries — such as shampoo, soap, or a toothbrush?",
              formal:
                "Certainly. I shall bring those items to your room immediately. May I inquire if you would also require any additional toiletries, such as shampoo, soap, or a toothbrush?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, two toothbrushes and some shampoo, please.",
            textZh: "好的，两把牙刷和一些洗发水。",
            commonMistake: {
              wrong: "Yes, two toothbrushes and some shampoo.",
              correct: "Yes, two toothbrushes and some shampoo, please.",
              explanation: "加上 'please' 听起来更礼貌自然。",
            },
            casualVersion: "Yeah, two toothbrushes and some shampoo, please.",
            formalityVariants: {
              casual: "Yeah, two toothbrushes and some shampoo.",
              standard: "Yes, two toothbrushes and some shampoo, please.",
              formal: "Yes, I would appreciate two toothbrushes and some shampoo, please.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No problem. I'll be there in about 5 minutes. Is there anything else you need?",
            textZh: "没问题。大约5分钟到。还需要别的吗？",
            commonMistake: {
              wrong: "Do you have other needs?",
              correct: "Anything else?",
              explanation: "询问“还需要别的吗”时，美式口语常用 \"Anything else?\"。",
            },
            alternativeExpressions: [
              {
                textEn: "Got it. Give me about 5 minutes and I'll be up. Anything else while I'm at it?",
                textZh: "好的。大约5分钟我就上来。还有别的需要吗？",
                actionHint: "趁机提出其他需求",
                frequency: "common",
              },
              {
                textEn: "No worries. I'll be right up — 5 minutes tops. Need anything else?",
                textZh: "没问题。我马上上来——最多5分钟。还有别的吗？",
                actionHint: "想想还缺什么",
                frequency: "common",
              },
            ],
            casualVersion: "No prob. Be there in 'bout 5. Anything else?",
            formalityVariants: {
              casual: "No prob. Be there in like 5. Anything else?",
              standard:
                "No problem at all. I'll be there in approximately 5 minutes. Is there anything else you might need?",
              formal:
                "Certainly. I anticipate being at your room within approximately five minutes. Please inform me if there is anything further you require.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, could I also get a blanket? The room is a bit cold.",
            textZh: "其实，能再要一条毯子吗？房间有点冷。",
            casualVersion: "Actually, can I also get a blanket? Room's kinda cold.",
            commonMistake: {
              wrong: "The room a bit cold.",
              correct: "The room is a bit cold.",
              explanation: "动词be不能省，否则句子不完整。",
            },
            formalityVariants: {
              casual: "Oh, can I get a blanket too? It's a little chilly in here.",
              standard: "Actually, could I also get a blanket? The room is a bit cold.",
              formal: "On second thought, might I also request a blanket? The room is rather cool.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Sure! I'll also check the thermostat in your room when I come up. Sometimes it just needs adjusting.",
            textZh: "好的！我上去的时候也帮您看看温控器。有时候只是需要调一下。",
            commonMistake: {
              wrong: "Sometimes it just needs adjust.",
              correct: "Sometimes it just needs an adjustment.",
              explanation: "“需要调整”是名词 \"adjustment\" 或动名词 \"adjusting\"。",
            },
            keyPhrases: [
              { en: "blanket", zh: "毯子" },
              { en: "thermostat", zh: "温控器" },
              { en: "adjusting", zh: "调整" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! I'll grab a blanket too. And I'll take a look at the AC while I'm there — might just need a quick adjustment.",
                textZh: "当然！毯子也带上。顺便帮您看看空调——可能调一下就好了。",
                actionHint: "等待工作人员上来",
                frequency: "common",
              },
              {
                textEn: "No problem! I'll bring one up. It could be the thermostat — I'll check it when I get there.",
                textZh: "没问题！我带一条上来。可能是温控器的问题——到了帮您看看。",
                actionHint: "在房间等待",
                frequency: "common",
              },
            ],
            casualVersion: "Totally! I'll check the thermostat when I'm up there too. Sometimes it just needs a tweak.",
            formalityVariants: {
              casual: "Yep! I'll check your thermostat when I'm up there too. Might just need adjusting.",
              standard:
                "Certainly. I'll also check the thermostat in your room when I arrive. Occasionally, it merely requires adjustment.",
              formal:
                "Absolutely. I will also take the opportunity to inspect the thermostat in your room upon my arrival. It is sometimes the case that it merely requires adjustment.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great. Thank you so much.",
            textZh: "太好了。非常感谢。",
            commonMistake: {
              wrong: "Good. Thank you very much.",
              correct: "That would be great. Thank you so much.",
              explanation: "‘That would be great’ 是更自然的表达方式，比 'Good' 更贴切。",
            },
            casualVersion: "Awesome. Thanks a bunch.",
            formalityVariants: {
              casual: "Great. Thanks.",
              standard: "That would be most helpful. Thank you very much.",
              formal: "That would be most appreciated. I extend my sincere gratitude.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 客房服务 ====================
  {
    id: "hotel-room-service",
    category: "hotel",
    titleZh: "客房服务",
    titleEn: "Room Service",
    description: "通过电话点餐送到房间，包括点餐和特殊要求",
    otherRole: "客房服务员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 点餐送到房间 ---
      {
        id: "order-food",
        titleZh: "点餐送到房间",
        titleEn: "Ordering Room Service",
        description: "打电话到客房服务部点餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Room service, how may I help you?",
            textZh: "客房服务部，请问有什么可以帮您？",
            keyPhrases: [
              { en: "room service", zh: "客房服务" },
              { en: "how may I help you", zh: "有什么可以帮您" },
            ],
            alternativeExpressions: [
              {
                textEn: "Room service — what can I get for you?",
                textZh: "客房服务——您需要什么？",
                actionHint: "告诉他们你要点什么",
                frequency: "common",
              },
              {
                textEn: "Good evening, room service. How can I help?",
                textZh: "晚上好，客房服务。有什么可以帮您的？",
                actionHint: "说明你想点餐",
                frequency: "common",
              },
            ],
            casualVersion: "Room service, how can I help?",
            formalityVariants: {
              casual: "Room service, how can I help?",
              standard: "Room service, how may I help you?",
              formal: "Room service, good evening. How may I be of assistance?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, this is room 1208. I'd like to order some food, please.",
            textZh: "你好，我是1208房间。我想点些东西吃。",
            casualVersion: "Hey, room 1208. Wanna order some food.",
            commonMistake: {
              wrong: "I want to order food",
              correct: "I'd like to order food",
              explanation: "I want 听起来有点命令，用 I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, room 1208. Wanna order some food.",
              standard: "Hi, this is room 1208. I'd like to order some food, please.",
              formal: "Good evening. This is room 1208. I would like to place an order for room service, please.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Of course! We have a menu in your room, or I can tell you about tonight's specials. What are you in the mood for?",
            textZh: "当然！房间里有菜单，或者我可以告诉您今晚的特色菜。您想吃什么？",
            keyPhrases: [
              { en: "menu", zh: "菜单" },
              { en: "tonight's specials", zh: "今晚特色菜" },
              { en: "in the mood for", zh: "想吃" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! There should be a menu by the TV. Or I can walk you through what's good tonight. What are you feeling?",
                textZh: "当然！电视旁边有菜单。或者我可以跟您说说今晚什么好吃的。您想吃什么？",
                actionHint: "告诉你想吃的类型",
                frequency: "common",
              },
              {
                textEn:
                  "Of course! We've got some great specials tonight. Want to hear about them, or do you already know what you want?",
                textZh: "当然！今晚有几道不错的特色菜。想听听，还是您已经知道要什么了？",
                actionHint: "点菜或者听推荐",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! Menu's in your room, or I can tell you the specials. What're you feelin'?",
            formalityVariants: {
              casual: "Sure! Menu's in your room, or I can tell you the specials. What're you feelin'?",
              standard:
                "Of course! We have a menu in your room, or I can tell you about tonight's specials. What are you in the mood for?",
              formal:
                "Certainly, sir/madam. There is a menu available in your room, or I would be pleased to inform you of our chef's specials for this evening. What type of cuisine are you in the mood for?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like a club sandwich and a Caesar salad. And a pot of green tea, please.",
            textZh: "我要一个总汇三明治和一份凯撒沙拉。再来一壶绿茶。",
            casualVersion: "Lemme get a club sandwich and a Caesar salad. And a green tea pot.",
            commonMistake: {
              wrong: "I want a club sandwich",
              correct: "I'd like a club sandwich",
              explanation: "I want 听起来很直接，用 I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Lemme get a club sandwich, Caesar salad, and a green tea pot.",
              standard: "I'd like a club sandwich and a Caesar salad. And a pot of green tea, please.",
              formal:
                "I would be delighted to order the club sandwich and a Caesar salad. Additionally, I would appreciate a pot of green tea.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Sure. The club sandwich comes with fries or a side salad. Which would you prefer?",
            textZh: "好的。总汇三明治配薯条或配菜沙拉，您选哪个？",
            keyPhrases: [
              { en: "comes with", zh: "搭配/附带" },
              { en: "fries", zh: "薯条" },
              { en: "side salad", zh: "配菜沙拉" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great choice. That comes with fries or a salad on the side — which one works for you?",
                textZh: "好选择。配薯条或者沙拉——您要哪个？",
                actionHint: "选择配菜",
                frequency: "common",
              },
              {
                textEn: "The club sandwich — nice. Do you want fries with that or would you prefer a side salad?",
                textZh: "总汇三明治——不错。要配薯条还是沙拉？",
                actionHint: "告诉配菜选择",
                frequency: "common",
              },
            ],
            casualVersion: "Okay. Club sandwich comes with fries or side salad. Which one?",
            formalityVariants: {
              casual: "Okay. Club sandwich comes with fries or side salad. Which one?",
              standard: "Sure. The club sandwich comes with fries or a side salad. Which would you prefer?",
              formal:
                "Certainly. The club sandwich includes a choice of either french fries or a side salad. Which accompaniment would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn: "Fries, please.",
            textZh: "薯条吧。",
            commonMistake: {
              wrong: "I want fries.",
              correct: "Fries, please.",
              explanation: "直接说I want fries有点生硬，用Fries, please或I'll take fries更自然。",
            },
            casualVersion: "Fries.",
            formalityVariants: {
              casual: "Fries.",
              standard: "Fries, please.",
              formal: "I would prefer the french fries, please.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Got it. That will be about 30 minutes. The total comes to $38 plus a service charge. Shall I charge it to your room?",
            textZh: "好的。大约30分钟送到。一共38美元加服务费。挂房间账吗？",
            culturalNote: "美国服务业小费是惯例，服务费(service charge)不等于小费，如果服务好，可能还需要额外给小费。",
            keyPhrases: [
              { en: "about 30 minutes", zh: "大约30分钟" },
              { en: "service charge", zh: "服务费" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, that'll be about half an hour. Comes to $38 plus the service charge. Want me to put it on your room?",
                textZh: "好的，大约半小时。38美元加服务费。挂房间账吗？",
                actionHint: "确认挂账方式",
                frequency: "common",
              },
              {
                textEn: "Should be about 30 minutes. Your total's $38 plus tip. Shall I bill it to the room?",
                textZh: "大概30分钟。总共38美元加小费。挂房间账吧？",
                actionHint: "同意挂账",
                frequency: "common",
              },
            ],
            casualVersion: "Got it. About 30 minutes. Total's $38 plus service. Want me to charge it to the room?",
            formalityVariants: {
              casual: "Got it. About 30 minutes. Total's $38 plus service. Want me to charge it to the room?",
              standard:
                "Got it. That will be about 30 minutes. The total comes to $38 plus a service charge. Shall I charge it to your room?",
              formal:
                "Understood. Your order should arrive in approximately 30 minutes. The total amount will be $38, in addition to the standard service charge. Would you prefer this to be charged to your room account?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please charge it to the room. Thank you.",
            textZh: "好的，挂房间账。谢谢。",
            casualVersion: "Yeah, charge it to the room. Thanks.",
            formalityVariants: {
              casual: "Yeah, charge it to the room. Thanks.",
              standard: "Yes, please charge it to the room. Thank you.",
              formal: "Yes, kindly charge the amount to my room account. I appreciate your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 有特殊饮食要求 ---
      {
        id: "dietary-needs",
        titleZh: "特殊饮食要求",
        titleEn: "Dietary Requirements",
        description: "过敏、素食、忌口等特殊饮食需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Room service, good evening.",
            textZh: "客房服务，晚上好。",
            casualVersion: "Room service, hey.",
            formalityVariants: {
              casual: "Room service, hey.",
              standard: "Room service, good evening.",
              formal: "Good evening, room service. How may I be of assistance?",
            },
            alternativeExpressions: [
              {
                textEn: "Evening! Room service here. What can I do for you?",
                textZh: "晚上好！客房服务。有什么需要？",
                actionHint: "说明想点餐",
                frequency: "common",
              },
              {
                textEn: "Hi there, room service. Ready to order?",
                textZh: "你好，客房服务。准备点餐了吗？",
                actionHint: "开始点单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Hi, room 1208. I'd like to order dinner, but I have some food allergies. I'm allergic to shellfish and nuts.",
            textZh: "你好，1208房间。我想点晚餐，但我有一些食物过敏。我对贝类和坚果过敏。",
            casualVersion: "Hey, room 1208. Wanna order dinner, but got some food allergies. Shellfish and nuts.",
            commonMistake: {
              wrong: "I am allergic shellfish and nuts.",
              correct: "I'm allergic to shellfish and nuts.",
              explanation: "表达对…过敏要用'allergic to'，不能省略to。",
            },
            formalityVariants: {
              casual: "Yo, 1208. Need dinner, but I'm allergic to shellfish and nuts.",
              standard: "Hi, room 1208. I'd like to order dinner, but I have some food allergies. I'm allergic to shellfish and nuts.",
              formal: "Good evening, this is room 1208. I would like to place a dinner order, but I must inform you that I have specific food allergies to shellfish and nuts.",
            },
            culturalNote: "在国外一定要主动告知过敏信息，餐厅和酒店会非常重视。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Thank you for letting us know. I'll flag that in our system. Let me recommend some safe options. Our grilled chicken with mashed potatoes is nut-free and shellfish-free. We also have a pasta with tomato sauce.",
            textZh: "感谢您告知。我会在系统里标注。推荐一些安全的选择：烤鸡配土豆泥不含坚果和贝类。还有番茄酱意面。",
            casualVersion: "Thanks for the heads-up. I'll note that. For safe bets, there's the grilled chicken with mashed potatoes — no nuts, no shellfish. Or pasta with marinara.",
            formalityVariants: {
              casual: "No problem, got it. I'll write it down. You could do the grilled chicken and mash, totally nut/shellfish-free. Or marinara pasta.",
              standard: "Thank you for letting us know. I'll make a note of that in the system. I can recommend some safe options: the grilled chicken with mashed potatoes is free of nuts and shellfish. We also have a pasta with marinara sauce.",
              formal: "Thank you for providing that important information. I will ensure a detailed note is entered into our system. I can confidently recommend several options: the grilled chicken with mashed potatoes, which is free of both nuts and shellfish. Additionally, we have a pasta dish prepared with marinara sauce.",
            },
            keyPhrases: [
              { en: "food allergies", zh: "食物过敏" },
              { en: "shellfish", zh: "贝类" },
              { en: "nut-free", zh: "不含坚果" },
              { en: "flag that", zh: "标注" },
              { en: "safe options", zh: "安全的选择" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for letting me know! I'll make a note of that. So the grilled chicken is totally safe — no nuts, no shellfish. The pasta's good too.",
                textZh: "谢谢告诉我！我记下了。烤鸡完全安全——没有坚果和贝类。意面也可以。",
                actionHint: "选一道菜",
                frequency: "common",
              },
              {
                textEn:
                  "Good to know. I've flagged your allergies. Let me suggest a couple dishes that are safe for you.",
                textZh: "了解了。我已经标注了您的过敏信息。推荐几道对您安全的菜。",
                actionHint: "听推荐",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The grilled chicken sounds good. Is the sauce made with any nuts?",
            textZh: "烤鸡听起来不错。酱汁里有坚果吗？",
            casualVersion: "Grilled chicken sounds good. Any nuts in the sauce?",
            commonMistake: {
              wrong: "The sauce has nuts?",
              correct: "Is the sauce made with any nuts?",
              explanation: "直接问The sauce has nuts?不太自然，用Is it made with/does it contain更常用。",
            },
            formalityVariants: {
              casual: "Grilled chicken sounds fine. Nuts in the sauce?",
              standard: "The grilled chicken sounds good. Is the sauce made with any nuts?",
              formal: "The grilled chicken sounds appealing. May I inquire if the sauce contains any nuts?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "No, the sauce is a herb butter — completely nut-free. I'll also make a note for the kitchen to use separate utensils to avoid cross-contamination.",
            textZh: "没有，酱汁是香草黄油的——完全不含坚果。我会特别通知厨房用单独的餐具，避免交叉污染。",
            casualVersion: "Nope, it's a herb butter. Totally nut-free. I'll tell the kitchen to use separate stuff for no cross-contamination.",
            formalityVariants: {
              casual: "Nah, it's just herb butter. No nuts. I'll tell them to be careful about cross-contamination.",
              standard: "No, the sauce is a herb butter — completely nut-free. I'll make sure to alert the kitchen to use separate utensils to avoid cross-contamination.",
              formal: "No, the sauce is a herb butter preparation and is entirely nut-free. I will personally ensure the kitchen staff is informed to utilize separate utensils and preparation areas to prevent any risk of cross-contamination.",
            },
            keyPhrases: [
              { en: "herb butter", zh: "香草黄油" },
              { en: "separate utensils", zh: "单独的餐具" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, it's just a herb butter sauce — totally nut-free. And I'll make sure the kitchen uses clean utensils so there's no cross-contamination.",
                textZh: "没有，就是香草黄油酱——完全不含坚果。我还会让厨房用干净餐具，避免交叉污染。",
                actionHint: "放心点餐",
                frequency: "common",
              },
              {
                textEn:
                  "No nuts at all in the sauce. I'll personally let the chef know about your allergies so they take extra care.",
                textZh: "酱汁里完全没有坚果。我会亲自跟厨师说您的过敏情况，让他们特别注意。",
                actionHint: "确认点这道菜",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. I'll go with the grilled chicken. Thank you for being so careful.",
            textZh: "那我就放心了。就要烤鸡吧。谢谢你这么仔细。",
            casualVersion: "Phew, good. I'll do the grilled chicken. Thanks for being so careful.",
            commonMistake: {
              wrong: "I relieve. I want grilled chicken.",
              correct: "That's a relief. I'll take the grilled chicken.",
              explanation: "“我放心了”不是I relieve，而是That's a relief。点餐用I'll take/have更自然。",
            },
            formalityVariants: {
              casual: "Okay, that's good. Grilled chicken it is. Thanks for checking.",
              standard: "That's a relief. I'll take the grilled chicken, then. Thank you for being so thorough.",
              formal: "That is indeed a relief to hear. In that case, I will proceed with the grilled chicken. I greatly appreciate your thoroughness.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店退房 ====================
  {
    id: "hotel-checkout",
    tags: ["check out", "退房"],
    category: "hotel",
    titleZh: "酒店退房",
    titleEn: "Hotel Check-out",
    description: "退房流程，包括费用结算、行李寄存、叫车等",
    otherRole: "前台接待员",
    otherRoleIcon: "bell",
    flows: [
      // --- Flow 1: 标准退房 ---
      {
        id: "standard",
        titleZh: "标准退房",
        titleEn: "Standard Check-out",
        description: "正常退房，结清费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check out. Room 1208.",
            textZh: "你好，我要退房。1208号房。",
            casualVersion: "Hey, checking out. Room 1208.",
            culturalNote: "美国酒店退房常直接说房间号",
            commonMistake: {
              wrong: "I want to check out",
              correct: "I'd like to check out",
              explanation: "直接说'I want'听起来很不礼貌，'I'd like'更客气。",
            },
            formalityVariants: {
              casual: "Hey, checking out. Room 1208.",
              standard: "Hi, I'd like to check out. Room 1208.",
              formal: "Good morning/afternoon, I am ready to check out. My room number is 1208.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course, Mr. Wang. Let me pull up your bill. Your total is $396 — that includes the room, breakfast, and the room service charge from last night.",
            textZh: "好的，王先生。让我调出您的账单。总共396美元——包括房费、早餐和昨晚的客房服务费。",
            keyPhrases: [
              { en: "pull up your bill", zh: "调出账单" },
              { en: "total", zh: "总共" },
              { en: "includes", zh: "包括" },
              { en: "room service charge", zh: "客房服务费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Let me pull up your account... Okay, your total comes to $396. That covers the room, breakfast, and last night's room service.",
                textZh: "没问题。我调一下您的账户……好的，总共396美元。包括房费、早餐和昨晚的客房服务。",
                actionHint: "核对账单",
                frequency: "common",
              },
              {
                textEn:
                  "Of course. Give me a sec... Alright, you're looking at $396 total — room, breakfast, and the room service from last night.",
                textZh: "好的。稍等……总共396美元——房费、早餐和昨晚的客房送餐。",
                actionHint: "检查明细",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing, Mr. Wang. Lemme get your bill. Total's $396 — that's room, breakfast, and last night's room service.",
            formalityVariants: {
              casual:
                "Sure thing, Mr. Wang. Lemme get your bill. Total's $396 — that's room, breakfast, and last night's room service.",
              standard:
                "Of course, Mr. Wang. Let me pull up your bill. Your total is $396 — that includes the room, breakfast, and the room service charge from last night.",
              formal:
                "Certainly, Mr. Wang. I will retrieve your invoice momentarily. Your total balance is $396, which comprises your accommodation, breakfast, and the room service charges from yesterday evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Could I see the itemized bill, please?",
            textZh: "能看一下明细吗？",
            culturalNote: "退房时检查明细（itemized bill）是好习惯，确保没有额外收费。",
            casualVersion: "Can I see the itemized bill?",
            commonMistake: {
              wrong: "I want to see the detail bill.",
              correct: "Could I see the itemized bill, please?",
              explanation: "'detail bill'不是常用说法，'itemized bill'指明细账单。",
            },
            formalityVariants: {
              casual: "Can I see the itemized bill?",
              standard: "Could I see the itemized bill, please?",
              formal: "May I request to review the itemized breakdown of charges, if you please?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Here you go. Room rate: $150 per night for two nights, breakfast: $36, and room service: $38 plus 5% service charge.",
            textZh: "给您。房费每晚150美元住两晚，早餐36美元，客房服务38美元加5%服务费。",
            keyPhrases: [
              { en: "itemized bill", zh: "明细账单" },
              { en: "room rate", zh: "房费" },
              { en: "service charge", zh: "服务费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's the breakdown: two nights at 150 each, breakfast was 36, and room service came to 38 plus the 5% charge.",
                textZh: "明细是这样的：两晚每晚150，早餐36，客房服务38加5%服务费。",
                actionHint: "核对每项费用",
                frequency: "common",
              },
              {
                textEn:
                  "Let me walk you through it — room's $300 for two nights, $36 for breakfast, and $38 plus service charge for room service.",
                textZh: "我给您过一下——两晚房费300，早餐36，客房服务38加服务费。",
                actionHint: "确认金额",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here. Room rate: $150/night for two nights, breakfast: $36, room service: $38 plus 5% service charge.",
            formalityVariants: {
              casual:
                "Here. Room rate: $150/night for two nights, breakfast: $36, room service: $38 plus 5% service charge.",
              standard:
                "Here you go. Room rate: $150 per night for two nights, breakfast: $36, and room service: $38 plus 5% service charge.",
              formal:
                "Certainly, here is the detailed breakdown. The room rate is $150 per night for a total of two nights, breakfast is $36, and room service is $38, to which a 5% service charge has been applied.",
            },
          },
          {
            speaker: "you",
            textEn: "That looks right. I'll pay with the same card.",
            textZh: "没问题。用同一张卡付。",
            casualVersion: "Looks good. Paying with the same card.",
            commonMistake: {
              wrong: "I use same card to pay.",
              correct: "I'll pay with the same card.",
              explanation: "直接翻译中文的说法，不自然。用 'pay with' 更自然。",
            },
            formalityVariants: {
              casual: "Looks good. Paying with the same card.",
              standard: "That looks right. I'll pay with the same card.",
              formal: "The charges appear correct. I would like to proceed with payment using the card on file.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Done. Your deposit of $100 has been refunded. You should see it back on your card in 3-5 business days. Here's your receipt.",
            textZh: "好了。您100美元的押金已退还，3-5个工作日内到账。给您收据。",
            keyPhrases: [
              { en: "deposit", zh: "押金" },
              { en: "refunded", zh: "退还" },
              { en: "business days", zh: "工作日" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All done! Your $100 deposit will go back to your card — usually takes 3 to 5 business days. Here's your receipt.",
                textZh: "都办好了！100美元押金会退回您的卡——一般3到5个工作日。给您收据。",
                actionHint: "收好收据",
                frequency: "common",
              },
              {
                textEn:
                  "You're all set. The hundred-dollar hold on your card will be released within a few business days. Receipt's right here.",
                textZh: "搞定了。卡上预授权的100美元几个工作日内就释放。收据在这。",
                actionHint: "保管好收据",
                frequency: "common",
              },
            ],
            casualVersion:
              "All set. Your $100 deposit's refunded. Should see it on your card in 3-5 business days. Here's your receipt.",
            formalityVariants: {
              casual:
                "All set. Your $100 deposit's refunded. Should see it on your card in 3-5 business days. Here's your receipt.",
              standard:
                "Done. Your deposit of $100 has been refunded. You should see it back on your card in 3-5 business days. Here's your receipt.",
              formal:
                "The transaction is complete. Your $100 deposit has been processed for a refund, and it should reflect on your card within 3-5 business days. Here is your receipt for your records.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Can I leave my luggage here for a few hours? Our flight isn't until 6 PM.",
            textZh: "谢谢。行李可以寄存几个小时吗？我们的航班下午6点才起飞。",
            culturalNote: "寄存行李时通常会用'bellhop'，而不是随便放。",
            casualVersion: "Thanks. Can I leave my bags here for a few hours? Our flight's not 'til 6 PM.",
            commonMistake: {
              wrong: "Can I store my luggage here?",
              correct: "Can I leave my luggage here?",
              explanation: "'store'听起来有点正式或专业，'leave'更口语自然。",
            },
            formalityVariants: {
              casual: "Thanks. Can I leave my bags here for a few hours? Our flight's not 'til 6 PM.",
              standard: "Thank you. Can I leave my luggage here for a few hours? Our flight isn't until 6 PM.",
              formal:
                "Thank you very much. Would it be possible to store my luggage here for several hours? Our departure flight is scheduled for 6:00 PM.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely! Just leave them with the bellhop at the entrance. He'll give you a claim tag. You can pick them up anytime before your flight.",
            textZh: "当然可以！放在门口行李员那里就行。他会给您取件牌。航班前随时来取。",
            culturalNote: "美国酒店的行李员（bellhop）是专门负责行李搬运和寄存的，可以直接找他们。",
            commonMistake: {
              wrong: "Just put them in bellhop",
              correct: "Just leave them with the bellhop",
              explanation: "leave with someone表示交给某人，put in bellhop是错误搭配。",
            },
            keyPhrases: [
              { en: "bellhop", zh: "行李员" },
              { en: "claim tag", zh: "取件牌" },
              { en: "pick them up", zh: "来取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! Just drop your bags with the guy at the door. He'll give you a tag and you can grab them whenever.",
                textZh: "当然！把行李交给门口的人就行。他会给您一个牌子，随时来取。",
                actionHint: "去找行李员",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, no problem. Leave them with the bell staff and they'll hold them for you. Just come back before your flight.",
                textZh: "没问题。放在行李台那里，他们会帮您保管。航班前来取就行。",
                actionHint: "交给行李员",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! Just give 'em to the bellhop by the entrance. He'll give ya a claim tag. Pick 'em up whenever before your flight.",
            formalityVariants: {
              casual:
                "Totally! Just give 'em to the bellhop by the entrance. He'll give ya a claim tag. Pick 'em up whenever before your flight.",
              standard:
                "Absolutely! Just leave them with the bellhop at the entrance. He'll give you a claim tag. You can pick them up anytime before your flight.",
              formal:
                "Certainly, that will not be an issue. Kindly leave your bags with the bellhop stationed at the main entrance, who will provide you with a claim tag. You are welcome to retrieve them at your convenience prior to your flight departure.",
            },
          },
          {
            speaker: "you",
            textEn: "Could you also call a taxi to the airport for about 4 PM?",
            textZh: "能帮我约一辆下午4点去机场的出租车吗？",
            casualVersion: "Also, can you call a cab to the airport 'round 4 PM?",
            commonMistake: {
              wrong: "Can you help me call a taxi?",
              correct: "Could you call a taxi for me?",
              explanation: "英文不说'help me call'，直接说'call a taxi'就好。",
            },
            formalityVariants: {
              casual: "Also, can you call a cab to the airport 'round 4 PM?",
              standard: "Could you also call a taxi to the airport for about 4 PM?",
              formal: "Would it be possible for you to arrange a taxi to the airport for approximately 4:00 PM?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Sure, I'll arrange that. It takes about 40 minutes to the airport. Should I book it for 3:45 to be safe?",
            textZh: "好的，我来安排。到机场大约40分钟。为了保险，订3:45的好吗？",
            keyPhrases: [
              { en: "arrange", zh: "安排" },
              { en: "takes about", zh: "大约需要" },
              { en: "to be safe", zh: "为了保险起见" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem. It's about 40 minutes to the airport, so maybe I should book it for 3:45 just to be safe?",
                textZh: "没问题。到机场大约40分钟，要不订3:45的保险一点？",
                actionHint: "确认时间",
                frequency: "common",
              },
              {
                textEn: "Sure, I'll set that up. With traffic, I'd say book for 3:45 to give yourself a cushion.",
                textZh: "好的，我来安排。考虑到交通，建议3:45出发留点余量。",
                actionHint: "同意提前出发",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I'll set that up. Takes 'bout 40 mins to the airport. Wanna book it for 3:45 to be safe?",
            formalityVariants: {
              casual: "Yeah, I'll set that up. Takes 'bout 40 mins to the airport. Wanna book it for 3:45 to be safe?",
              standard:
                "Sure, I'll arrange that. It takes about 40 minutes to the airport. Should I book it for 3:45 to be safe?",
              formal:
                "Certainly, I will make those arrangements for you. The journey to the airport typically takes approximately 40 minutes. Would you prefer I schedule the taxi for 3:45 PM as a precautionary measure?",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. Thank you for everything. We had a wonderful stay.",
            textZh: "好主意。感谢一切。我们住得很愉快。",
            casualVersion: "Good call. Thanks for everything. Had a great stay.",
            culturalNote: "美国人表达感谢会更直接，不需要像中文一样很委婉",
            commonMistake: {
              wrong: "Thank you for your service.",
              correct: "Thank you for everything.",
              explanation: "'service'太正式，'everything'更口语化，包含所有帮助。",
            },
            formalityVariants: {
              casual: "Good call. Thanks for everything. Had a great stay.",
              standard: "Good idea. Thank you for everything. We had a wonderful stay.",
              formal:
                "That would be most prudent. We sincerely appreciate all of your assistance. Our stay here was truly delightful.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you, Mr. Wang! We hope to see you again. Have a safe flight!",
            textZh: "谢谢您，王先生！希望再次见到您。祝旅途愉快！",
            keyPhrases: [
              { en: "hope to see you again", zh: "希望再见" },
              { en: "safe flight", zh: "旅途愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "It was great having you! Hope you'll come back. Have a safe trip!",
                textZh: "很高兴接待您！希望您再来。旅途平安！",
                actionHint: "道别",
                frequency: "common",
              },
              {
                textEn: "Thanks for staying with us, Mr. Wang! Fly safe and we hope to see you again soon.",
                textZh: "感谢您入住，王先生！一路平安，希望很快再见到您。",
                actionHint: "友好道别",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks, Mr. Wang! Hope to see ya again. Safe flight!",
            formalityVariants: {
              casual: "Thanks, Mr. Wang! Hope to see ya again. Safe flight!",
              standard: "Thank you, Mr. Wang! We hope to see you again. Have a safe flight!",
              formal:
                "Thank you, Mr. Wang. We sincerely appreciate your patronage and hope to have the pleasure of welcoming you back in the future. We wish you a most pleasant and safe journey.",
            },
          },
        ],
      },

      // --- Flow 2: 账单有问题 ---
      {
        id: "billing-dispute",
        titleZh: "账单有争议",
        titleEn: "Billing Dispute",
        description: "账单上有你没有消费的项目",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm checking out from room 1208, but I think there's an error on my bill.",
            textZh: "你好，我要退房，1208号。但我觉得账单有错。",
            casualVersion: "Hi, checking out room 1208, but think there's an error on my bill.",
            commonMistake: {
              wrong: "I want to check out from room 1208, but I think my bill has error.",
              correct: "I'm checking out from room 1208, but I think there's an error on my bill.",
              explanation:
                "“I want to…” 听起来比较生硬，用 “I’m checking out” 更自然；“bill has error” 应该说 “error on my bill”。",
            },
            formalityVariants: {
              casual: "Hey, checking out 1208, think there's a bill error.",
              standard: "Hi, I'm checking out from room 1208, but I think there's an error on my bill.",
              formal:
                "Good morning/afternoon, I am ready to check out of room 1208, and I believe there might be a discrepancy on my final bill.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. Let me take a look. What seems to be the issue?",
            textZh: "抱歉。让我看看。什么问题？",
            keyPhrases: [
              { en: "error on my bill", zh: "账单有错" },
              { en: "what seems to be the issue", zh: "什么问题" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, I'm sorry about that. Let me pull it up. What doesn't look right?",
                textZh: "哦，抱歉。我调出来看看。哪里不对？",
                actionHint: "指出问题项目",
                frequency: "common",
              },
              {
                textEn: "I apologize. Let me take a look at your bill right now. Can you tell me what's wrong?",
                textZh: "抱歉。我马上看一下您的账单。能告诉我什么问题吗？",
                actionHint: "说明账单问题",
                frequency: "common",
              },
            ],
            casualVersion: "Sorry 'bout that. Lemme look. What's the problem?",
            commonMistake: {
              wrong: "Sorry. Let me see. What problem?",
              correct: "I'm sorry to hear that. Let me take a look. What seems to be the issue?",
              explanation: "直接说 “What problem?” 语气生硬，用 “What seems to be the issue?” 更礼貌自然。",
            },
            formalityVariants: {
              casual: "Oh, sorry. Lemme see. What's up?",
              standard: "I'm sorry to hear that. Let me take a look. What seems to be the issue?",
              formal:
                "My apologies for the inconvenience. Please allow me a moment to review this. Could you please elaborate on the nature of the issue?",
            },
          },
          {
            speaker: "you",
            textEn: "There's a minibar charge of $45, but I didn't use the minibar at all.",
            textZh: "这里有一笔45美元的迷你吧消费，但我完全没有用过迷你吧。",
            casualVersion: "Got a $45 minibar charge, but I didn't use it at all.",
            commonMistake: {
              wrong: "There is a minibar charge of $45, but I didn't use minibar.",
              correct: "There's a minibar charge of $45, but I didn't use the minibar at all.",
              explanation: "“minibar” 前需要加冠词 “the”，强调完全没用常用 “at all”。",
            },
            formalityVariants: {
              casual: "There's a $45 minibar charge, but I totally didn't use the minibar.",
              standard: "There's a minibar charge of $45, but I didn't use the minibar at all.",
              formal:
                "I'm noticing a charge of $45 for the minibar on my bill; however, I did not utilize any items from the minibar during my stay.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check with housekeeping... You're right, it appears to be a mistake. The previous guest's charge wasn't cleared. I'll remove that immediately. Your updated total is $351.",
            textZh:
              "让我跟客房部核实一下……您是对的，这似乎是个错误。上一位客人的消费没有清掉。我马上删除。更新后的总额是351美元。",
            keyPhrases: [
              { en: "minibar", zh: "迷你吧" },
              { en: "check with housekeeping", zh: "跟客房部核实" },
              { en: "mistake", zh: "错误" },
              { en: "remove", zh: "删除/去掉" },
              { en: "updated total", zh: "更新后的总额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me look into that... Yeah, you're right, that's from the last guest. My bad. I'll take it off right now. New total is $351.",
                textZh: "我查一下……对，您说得对，是上一位客人的。不好意思。我马上去掉。新的总额是351美元。",
                actionHint: "确认更新后的金额",
                frequency: "common",
              },
              {
                textEn:
                  "I just checked with housekeeping — definitely a mistake on our end. I've removed it. Your updated bill is $351.",
                textZh: "我刚跟客房部确认了——确实是我们的错。已经删掉了。更新后的账单是351美元。",
                actionHint: "核对新账单",
                frequency: "common",
              },
            ],
            casualVersion:
              "Let me check with housekeeping... You're right, looks like a mistake. Previous guest's charge wasn't cleared. I'll remove it. New total's $351.",
            formalityVariants: {
              casual:
                "Okay, checking with housekeeping... Yeah, you're right, my bad. Old guest's charge. I'll take it off. New total's $351.",
              standard:
                "Let me check with housekeeping... You're right, it appears to be a mistake. The previous guest's charge wasn't cleared. I'll remove that immediately. Your updated total is $351.",
              formal:
                "Please allow me to verify this with our housekeeping department... My apologies, you are absolutely correct. It appears there was an oversight with the previous guest's billing. I will process the removal of that charge immediately. Your revised total will be $351.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for fixing that. The rest looks correct.",
            textZh: "谢谢处理。其余的没问题。",
            casualVersion: "Thanks for fixing it. Rest looks good.",
            commonMistake: {
              wrong: "Thank you for your fixing. The rest is correct.",
              correct: "Thank you for fixing that. The rest looks correct.",
              explanation: "“fixing” 作名词时一般不说 “your fixing”；“looks correct” 比 “is correct” 更自然。",
            },
            formalityVariants: {
              casual: "Awesome, thanks. Everything else looks fine.",
              standard: "Thank you for fixing that. The rest looks correct.",
              formal: "I appreciate you resolving that. The remaining charges appear to be accurate.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I apologize for the error. Here's your corrected receipt. Is there anything else I can help with?",
            textZh: "为这个错误道歉。给您更正后的收据。还有什么需要帮忙的吗？",
            keyPhrases: [{ en: "corrected receipt", zh: "更正后的收据" }],
            alternativeExpressions: [
              {
                textEn:
                  "I'm really sorry about the mix-up. Here's the corrected receipt. Anything else I can help with?",
                textZh: "这个搞混了真的很抱歉。给您更正后的收据。还有什么需要帮忙的吗？",
                actionHint: "收好收据",
                frequency: "common",
              },
              {
                textEn:
                  "My apologies for the error. Here's your updated receipt. Please let me know if everything looks good now.",
                textZh: "为这个错误道歉。给您更新的收据。看看现在都对了吗？",
                actionHint: "确认无误",
                frequency: "common",
              },
            ],
            casualVersion: "My bad. Here's your corrected receipt. Anything else?",
            formalityVariants: {
              casual: "Oops, sorry. Here's your new receipt. Need anything else?",
              standard:
                "I apologize for the error. Here's your corrected receipt. Is there anything else I can help with?",
              formal:
                "My sincerest apologies once again for the inconvenience. Here is your revised receipt. Will there be any further assistance I can provide for you today?",
            },
          },
        ],
      },

      // --- Flow 3: 延迟退房 ---
      {
        id: "late-checkout",
        titleZh: "延迟退房",
        titleEn: "Late Check-out Request",
        description: "需要晚于标准时间退房",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. Is it possible to get a late checkout today? Our flight isn't until 8 PM.",
            textZh: "早上好。今天能延迟退房吗？我们的航班晚上8点才起飞。",
            casualVersion: "Morning. Can we get a late checkout today? Our flight's not 'til 8 PM.",
            commonMistake: {
              wrong: "Can I late checkout today? Our flight is 8 PM.",
              correct: "Can I get a late checkout today? Our flight isn't until 8 PM.",
              explanation: "late checkout 是名词，需要动词 get。表示“直到…才”用 until 更自然。",
            },
            formalityVariants: {
              casual: "Hey, can we get a late checkout today? Our flight's not 'til 8 PM.",
              standard: "Good morning. Is it possible to get a late checkout today? Our flight isn't until 8 PM.",
              formal:
                "Good morning. I was wondering if it would be possible to arrange for a late checkout today, as our flight doesn't depart until 8 PM.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check... I can extend your checkout to 2 PM at no extra charge. If you need to stay until 6 PM, there would be a half-day charge of $75.",
            textZh: "让我查一下……可以免费延到下午2点。如果需要到下午6点，要加半天费用75美元。",
            variations: [
              {
                textEn:
                  "I'm sorry, we're fully booked today and can't offer late checkout. But you're welcome to store your luggage with us.",
                textZh: "抱歉，今天满房了，无法延迟退房。但您可以把行李寄存在我们这里。",
              },
            ],
            keyPhrases: [
              { en: "late checkout", zh: "延迟退房" },
              { en: "no extra charge", zh: "免费/不加收" },
              { en: "half-day charge", zh: "半天费用" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Let me see... I can do 2 PM no charge. If you need till 6, that'd be 75 bucks for a half day.",
                textZh: "我看看……2点免费延到。如果要到6点的话，半天75美元。",
                actionHint: "选择退房时间",
                frequency: "common",
              },
              {
                textEn: "Good news — I can push your checkout to 2 for free. Past that, there's a $75 half-day fee.",
                textZh: "好消息——可以免费延到2点。超过的话要加75美元半天费。",
                actionHint: "决定延多久",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check... I can extend you 'til 2 PM, no extra charge. If you need 'til 6 PM, it's a half-day charge, 75 bucks.",
            commonMistake: {
              wrong: "I can extend to 2 PM no charge. If until 6 PM, need pay 75 dollar.",
              correct:
                "I can extend your checkout to 2 PM at no extra charge. If you need to stay until 6 PM, there would be a half-day charge of $75.",
              explanation: "at no extra charge 更自然。需要动词 for 'pay' 或 'charge'。",
            },
            formalityVariants: {
              casual: "Hold on... I can do 2 PM, free. If you need 6 PM, that's $75 extra.",
              standard:
                "Let me check... I can extend your checkout to 2 PM at no extra charge. If you need to stay until 6 PM, there would be a half-day charge of $75.",
              formal:
                "Certainly, please allow me a moment to review our availability. We can extend your checkout to 2 PM without any additional cost. Should you require an extension until 6 PM, a half-day rate of $75 would apply.",
            },
          },
          {
            speaker: "you",
            textEn: "2 PM would be perfect. Thank you.",
            textZh: "下午2点就好。谢谢。",
            casualVersion: "2 PM's perfect. Thanks.",
            formalityVariants: {
              casual: "2 PM works. Thanks!",
              standard: "2 PM would be perfect. Thank you.",
              formal: "That would be ideal, thank you very much.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I've updated your checkout time to 2 PM. Just come down to the front desk whenever you're ready.",
            textZh: "已经更新您的退房时间到下午2点了。准备好了随时来前台。",
            keyPhrases: [
              { en: "updated", zh: "更新了" },
              { en: "whenever you're ready", zh: "您准备好了随时" },
            ],
            alternativeExpressions: [
              {
                textEn: "Done! You're good till 2. Just head down when you're ready to go.",
                textZh: "搞定！2点之前都没问题。准备好了就下来。",
                actionHint: "继续享受房间",
                frequency: "common",
              },
              {
                textEn: "All set — checkout's now at 2 PM. No rush, just swing by the front desk when you're done.",
                textZh: "都安排好了——退房时间改到下午2点了。不着急，好了来前台就行。",
                actionHint: "放心休息",
                frequency: "common",
              },
            ],
            casualVersion: "Updated your checkout to 2 PM. Just head down to the front desk whenever you're ready.",
            formalityVariants: {
              casual: "Your checkout's set for 2 PM. Just come down when you're good to go.",
              standard:
                "I've updated your checkout time to 2 PM. Just come down to the front desk whenever you're ready.",
              formal:
                "Your checkout time has been successfully adjusted to 2 PM. Please feel free to descend to the front desk at your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. One more thing — is there a place to get lunch nearby?",
            textZh: "好的。还有一件事——附近有吃午饭的地方吗？",
            casualVersion: "Cool. Oh, is there anywhere to grab lunch around here?",
            commonMistake: {
              wrong: "Great. One more thing, is there have lunch place nearby?",
              correct: "Great. One more thing — is there a place to get lunch nearby?",
              explanation: "have 不能直接作动词，要用 is there。a place to get lunch 更自然。",
            },
            formalityVariants: {
              casual: "Cool. Hey, got any lunch spots nearby?",
              standard: "Great. One more thing — is there a place to get lunch nearby?",
              formal:
                "Excellent. Additionally, could you recommend any suitable establishments for lunch within the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, there are several restaurants in the mall across the street. I can also order room service for you if you prefer to eat in your room.",
            textZh: "有的，对面商场里有好几家餐厅。如果您想在房间吃，也可以叫客房服务。",
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, there's a mall right across the street with a bunch of restaurants. Or if you want to stay in, we can do room service.",
                textZh: "有啊，对面商场有很多餐厅。或者想待在房间的话可以叫客房服务。",
                actionHint: "选择用餐方式",
                frequency: "common",
              },
              {
                textEn:
                  "Tons of options! The mall across the street has everything. Or I can get room service sent up if you'd rather eat in.",
                textZh: "选择很多！对面商场什么都有。想在房间吃的话也可以叫送餐。",
                actionHint: "决定去哪吃",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, a bunch of restaurants across the street at the mall. Or I can get you room service if you wanna eat in your room.",
            commonMistake: {
              wrong:
                "Yes, have several restaurants across street mall. I can also order room service if you prefer eat in room.",
              correct:
                "Yes, there are several restaurants in the mall across the street. I can also order room service for you if you prefer to eat in your room.",
              explanation:
                "have 不能直接作动词，要用 there are。in the mall across the street 和 eat in your room 更地道。",
            },
            formalityVariants: {
              casual:
                "Yeah, plenty of spots at the mall across the street. Or I can call up room service if you'd rather eat here.",
              standard:
                "Yes, there are several restaurants in the mall across the street. I can also order room service for you if you prefer to eat in your room.",
              formal:
                "Certainly, there are numerous dining establishments located within the shopping mall directly across the street. Alternatively, I would be pleased to arrange room service for you, should you prefer to dine in the comfort of your room.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店投诉 ====================
  {
    id: "hotel-complaint",
    tags: ["complaint", "投诉", "问题"],
    category: "hotel",
    titleZh: "酒店投诉",
    titleEn: "Hotel Complaint",
    description: "对房间卫生、设施、服务等不满意时向酒店投诉",
    otherRole: "前台经理",
    otherRoleIcon: "alert-triangle",
    flows: [
      // --- Flow 1: 卫生/清洁问题 ---
      {
        id: "cleanliness",
        titleZh: "卫生问题投诉",
        titleEn: "Cleanliness Complaint",
        description: "房间卫生不达标，要求处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need to speak with a manager. My room hasn't been cleaned properly.",
            textZh: "我需要找经理。我的房间没有打扫干净。",
            casualVersion: "Gotta talk to a manager. My room's not clean.",
            commonMistake: {
              wrong: "I want to speak with manager.",
              correct: "I need to speak with a manager.",
              explanation: "“I want” 听起来太直接。需要加冠词 “a”。",
            },
            formalityVariants: {
              casual: "Hey, I need a manager. My room's a mess.",
              standard: "I need to speak with a manager. My room hasn't been cleaned properly.",
              formal:
                "Excuse me, I'd like to request to speak with the duty manager regarding the cleanliness of my room.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I'm the duty manager. I'm sorry to hear that. Can you tell me what the issue is?",
            textZh: "我是值班经理。很抱歉听到这个。能告诉我具体是什么问题吗？",
            commonMistake: {
              wrong: "I am sorry for that.",
              correct: "I'm sorry to hear that.",
              explanation: "听到不好的消息时用'sorry to hear that'，直接说'sorry for that'不太自然。",
            },
            keyPhrases: [
              { en: "duty manager", zh: "值班经理" },
              { en: "what the issue is", zh: "具体问题是什么" },
            ],
            vocabNotes: {
              "duty manager": {
                meaningInContext: "在这里指当班负责的经理，可以处理投诉",
                similarUsage: "类似用法：Is there a duty manager available?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I'm the manager on duty. I apologize — please tell me exactly what happened.",
                textZh: "我是当班经理。很抱歉——请告诉我具体发生了什么。",
                actionHint: "详细说明问题",
                frequency: "common",
              },
            ],
            casualVersion: "I'm the manager on duty. Oh, sorry to hear that. What's up?",
            formalityVariants: {
              casual: "Hey, I'm the manager. What's going on?",
              standard: "I'm the duty manager. I'm sorry to hear that. Can you tell me what the issue is?",
              formal:
                "Good morning/afternoon, I am the duty manager. My sincerest apologies to hear of this. Would you be so kind as to elaborate on the nature of the issue?",
            },
          },
          {
            speaker: "you",
            textEn:
              "There are stains on the bedsheets, the bathroom floor is dirty, and I found hair in the bathtub. This is unacceptable for the price we're paying.",
            textZh: "床单上有污渍，浴室地板很脏，浴缸里还有头发。以我们付的价格来说，这是不能接受的。",
            casualVersion:
              "Sheets got stains, bathroom floor's dirty, and there's hair in the tub. Seriously, for what we're paying, that's not okay.",
            commonMistake: {
              wrong: "Bed sheet has stain, bathroom floor very dirty, bathtub have hair.",
              correct:
                "There are stains on the bedsheets, the bathroom floor is dirty, and I found hair in the bathtub.",
              explanation: "需要注意冠词和动词形式，并用完整句子表达。",
            },
            formalityVariants: {
              casual:
                "Sheets are stained, bathroom's grubby, and there's hair in the tub. Can't believe it for this price.",
              standard:
                "There are stains on the bedsheets, the bathroom floor is dirty, and I found hair in the bathtub. This is unacceptable for the price we're paying.",
              formal:
                "Regrettably, I must inform you that the bedsheets exhibit stains, the bathroom floor is unclean, and I discovered hair in the bathtub. This level of service is quite unsatisfactory given the tariff.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "I sincerely apologize. That's absolutely not up to our standards. I'll have housekeeping go to your room immediately with fresh linens and do a deep clean. Would you prefer to wait, or shall I move you to a different room right away?",
            textZh:
              "我真诚地道歉。这完全不符合我们的标准。我马上派客房部去您房间换新床品并做深度清洁。您是等一下，还是我马上给您换个房间？",
            commonMistake: {
              wrong: "That is completely under our standards.",
              correct: "That's completely below our standards.",
              explanation: "表示“低于标准”时用below our standards，而不是under。",
            },
            keyPhrases: [
              { en: "not up to our standards", zh: "不符合标准" },
              { en: "housekeeping", zh: "客房部" },
              { en: "fresh linens", zh: "新床品" },
              { en: "deep clean", zh: "深度清洁" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择等待清洁或要求换房",
            alternativeExpressions: [
              {
                textEn:
                  "I'm so sorry. That's totally unacceptable. I'll send housekeeping right now with clean sheets. Want me to move you to a new room instead?",
                textZh: "太抱歉了。这完全不能接受。我马上派人送干净床单来。还是给您换个房间？",
                actionHint: "选择换房或清洁",
                frequency: "common",
              },
              {
                textEn:
                  "I sincerely apologize — this should never happen. I can get your room deep-cleaned or move you right away. What would you prefer?",
                textZh: "真心道歉——这不该发生。我可以给房间做深度清洁或者马上换房。您选哪个？",
                actionHint: "做出选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "My bad, totally not our standard. I'll get housekeeping up there with new sheets and to deep clean right now. Wanna wait, or should I just switch your room?",
            formalityVariants: {
              casual:
                "Oh man, that's on us. I'll get housekeeping up there ASAP with new stuff and a full clean. You wanna wait, or I can just move you?",
              standard:
                "I sincerely apologize. That's absolutely not up to our standards. I'll have housekeeping go to your room immediately with fresh linens and do a deep clean. Would you prefer to wait, or shall I move you to a different room right away?",
              formal:
                "Please accept my most sincere apologies. This is unequivocally not reflective of our established service standards. I shall dispatch our housekeeping team to your room without delay to provide fresh linens and conduct a thorough cleaning. Alternatively, would you prefer that I arrange for an immediate room change?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'd prefer a different room. And honestly, I think we deserve some compensation for this experience.",
            textZh: "我更想换个房间。而且说实话，我觉得这个经历应该有些补偿。",
            casualVersion: "Yeah, a different room. And, honestly, think we should get something for this whole mess.",
            culturalNote: "索取补偿在美国是很常见的做法，不要觉得不好意思。",
            commonMistake: {
              wrong: "I want another room. I think we should compensate.",
              correct: "I'd prefer a different room. And honestly, I think we deserve some compensation.",
              explanation: "用 “I'd prefer” 更礼貌。“deserve compensation” 是指“获得补偿”。",
            },
            formalityVariants: {
              casual: "Yeah, new room for sure. And frankly, this deserves some kind of perk.",
              standard:
                "I'd prefer a different room. And honestly, I think we deserve some compensation for this experience.",
              formal:
                "I would indeed prefer to be relocated to an alternative room. Furthermore, I believe this unfortunate experience warrants some form of compensatory consideration.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "Absolutely. I'll upgrade you to a superior room at no extra charge, and I'll also apply a 20% discount to your total stay. I'll also send complimentary fruit and drinks to your new room. Again, I'm very sorry.",
            textZh: "当然。我免费给您升级到高级房，并给您整个住宿打八折。还会送免费水果和饮品到新房间。再次深表歉意。",
            commonMistake: {
              wrong: "give you 20% discount",
              correct: "give you 20% off",
              explanation: "表达折扣时，“打X折”用 'X% off' 更地道自然。",
            },
            keyPhrases: [
              { en: "upgrade", zh: "升级" },
              { en: "at no extra charge", zh: "免费" },
              { en: "apply a discount", zh: "打折" },
              { en: "complimentary", zh: "免费赠送的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. I'm upgrading you for free, knocking 20% off your whole stay, and sending up some fruit and drinks. Again, so sorry.",
                textZh: "当然。免费升级，全程八折，再送水果和饮品。再次非常抱歉。",
                actionHint: "接受补偿",
                frequency: "common",
              },
              {
                textEn:
                  "Of course. Free upgrade to a better room, 20% off your total, and complimentary refreshments. I can't apologize enough.",
                textZh: "当然。免费升级到更好的房间，总价打八折，外加免费茶歇。真的非常抱歉。",
                actionHint: "确认补偿方案",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure. I'll bump you to a better room, no extra charge, and knock 20% off your whole stay. Plus, free fruit and drinks to your new spot. So sorry about all this.",
            formalityVariants: {
              casual:
                "Definitely. You're getting a free upgrade, 20% off your bill, and some free goodies to your new room. My bad again.",
              standard:
                "Absolutely. I'll upgrade you to a superior room at no extra charge, and I'll also apply a 20% discount to your total stay. I'll also send complimentary fruit and drinks to your new room. Again, I'm very sorry.",
              formal:
                "Certainly. As a gesture of our apology, I will arrange for a complimentary upgrade to a superior room, alongside a 20% reduction on your entire stay. Furthermore, a selection of complimentary fruit and beverages will be sent to your new accommodation. Once again, I extend my profound apologies.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate you taking this seriously.",
            textZh: "谢谢。感谢你认真对待这件事。",
            casualVersion: "Thanks. Appreciate you actually doing something.",
            commonMistake: {
              wrong: "Thank you. I appreciate your serious.",
              correct: "Thank you. I appreciate you taking this seriously.",
              explanation: "“appreciate” 后接动名词或名词短语，表示“感谢你做了某事”。",
            },
            formalityVariants: {
              casual: "Cool, thanks. Glad you're on top of it.",
              standard: "Thank you. I appreciate you taking this seriously.",
              formal: "Thank you. I genuinely appreciate your prompt and diligent attention to this matter.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "Of course. Your new room is 1502. Here are the key cards. I'll have someone help you with your luggage right away. If there's anything else, please don't hesitate to call me directly.",
            textZh: "当然。您的新房间是1502。给您房卡。我马上派人帮您搬行李。如果还有其他问题，请直接打电话找我。",
            commonMistake: {
              wrong: "Here is the key card.",
              correct: "Here are the key cards.",
              explanation: "酒店通常提供两张房卡，用复数'key cards'更自然。",
            },
            keyPhrases: [
              { en: "don't hesitate", zh: "不要犹豫" },
              { en: "call me directly", zh: "直接打电话找我" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your new room is 1502. Here are the keys. I'm sending someone for your bags now. Call me anytime if you need anything.",
                textZh: "新房间1502。给您钥匙。马上派人搬行李。有什么需要随时找我。",
                actionHint: "拿好新房卡",
                frequency: "common",
              },
              {
                textEn:
                  "All set — room 1502. A porter will be up in a minute for your luggage. And here's my direct line.",
                textZh: "都安排好了——1502房间。行李员马上上来帮您搬。这是我的直线电话。",
                actionHint: "记下经理联系方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. New room's 1502. Here's your keys. I'll get someone to grab your bags ASAP. Anything else, just holler.",
            formalityVariants: {
              casual:
                "No sweat. Room 1502, here's the cards. Someone'll get your stuff. Anything else, just hit me up.",
              standard:
                "Of course. Your new room is 1502. Here are the key cards. I'll have someone help you with your luggage right away. If there's anything else, please don't hesitate to call me directly.",
              formal:
                "It is my pleasure. Your new accommodation is room 1502. Please accept these key cards. I will arrange for immediate assistance with your luggage. Should any further requirements arise, please do not hesitate to contact me personally.",
            },
          },
        ],
      },

      // --- Flow 2: 噪音/环境投诉 ---
      {
        id: "noise-environment",
        titleZh: "噪音与环境投诉",
        titleEn: "Noise & Environment Complaint",
        description: "施工噪音、走廊喧闹或其他环境问题投诉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'm calling from room 908. There's been construction noise outside my window since 7 AM, and nobody warned me about this when I checked in.",
            textZh: "你好，我是908房间。从早上7点开始窗外就有施工噪音，入住时没人告诉我这件事。",
            casualVersion:
              "Hey, calling from 908. Got construction noise outside my window since 7 AM, and nobody warned me when I checked in.",
            culturalNote: "美国投诉通常更直接，不需太多铺垫。",
            commonMistake: {
              wrong: "Nobody told me about this when I check in.",
              correct: "Nobody warned me about this when I checked in.",
              explanation: '"warned" 更强调提醒，"checked in" 是过去式。',
            },
            formalityVariants: {
              casual: "Hi, 908 here. Got construction noise since 7 AM, and no one warned me at check-in.",
              standard:
                "Hello, I'm calling from room 908. There's been construction noise outside my window since 7 AM, and I wasn't informed about this at check-in.",
              formal:
                "Good morning. This is [Your Name] from room 908. I am contacting you regarding persistent construction noise outside my window, which has been ongoing since 7 AM. I must also note that I was not apprised of this situation upon my arrival or during the check-in process.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "I'm very sorry about that. You're right — we should have informed you at check-in. The construction is on the building next door and is scheduled to continue for two more weeks. I understand how disruptive that must be.",
            textZh: "非常抱歉。您说得对——我们应该在入住时告知您。施工在隔壁楼，计划还要持续两周。我理解这有多打扰您。",
            keyPhrases: [
              { en: "construction noise", zh: "施工噪音" },
              { en: "should have informed you", zh: "应该告知您" },
              { en: "disruptive", zh: "打扰的/干扰的" },
            ],
            vocabNotes: {
              disruptive: {
                meaningInContext: "在这里表示「造成干扰的、影响正常生活的」",
                similarUsage: "类似用法：The noise was very disruptive to my work.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "I apologize — that's something we should have mentioned. Unfortunately the work next door is ongoing.",
                textZh: "我道歉——这个我们应该提到的。很不幸隔壁的工程还在进行。",
                actionHint: "可以要求换房或补偿",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, so sorry 'bout that. You're right, should've told ya at check-in. Construction's next door, gonna last two more weeks. Totally get how annoying that is.",
            commonMistake: {
              wrong: "We should inform you at check-in.",
              correct: "You're right — we should have informed you at check-in.",
              explanation: '"should have + past participle" 表示本应做但没做。',
            },
            formalityVariants: {
              casual:
                "My bad, you're right. Should've told you at check-in. That construction's next door, two more weeks. Yeah, I get it, super annoying.",
              standard:
                "I sincerely apologize for that oversight. You are absolutely correct; we should have informed you at check-in. The construction is located on the adjacent building and is projected to continue for an additional two weeks. I fully comprehend how disruptive this must be for you.",
              formal:
                "Please accept my sincerest apologies for this inconvenience. You are entirely correct; we regrettably failed to inform you during the check-in process. The construction in question is situated on the neighboring property and is anticipated to last for another two weeks. I can certainly empathize with the significant disruption this must be causing.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I couldn't sleep at all this morning. I'm here on business and I have important meetings. Can you move me to a quiet room on the other side of the building?",
            textZh: "今天早上根本没法睡觉。我是来出差的，有重要会议。能把我换到楼的另一边安静的房间吗？",
            casualVersion:
              "Couldn't sleep a wink this morning. I'm here for business, got important meetings. Can you move me to a quiet room on the other side?",
            commonMistake: {
              wrong: "Can move me to a quiet room?",
              correct: "Can you move me to a quiet room?",
              explanation: '英文疑问句需要主语 "you"。',
            },
            formalityVariants: {
              casual:
                "Didn't sleep a bit. Business trip, big meetings. Can I switch to a quiet room on the other side?",
              standard:
                "I was unable to sleep at all this morning. I am here on a business trip and have important meetings scheduled. Would it be possible to transfer me to a quieter room on the opposite side of the building?",
              formal:
                "Due to the aforementioned noise, I was completely unable to obtain any rest this morning. As I am currently traveling on business with critical meetings scheduled, I must respectfully request an immediate transfer to a quieter accommodation situated on the opposite aspect of the building.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "Of course. I have a room on the 15th floor facing the park — it's very quiet. I'll also waive tonight's room charge as an apology. Let me arrange the move for you right now.",
            textZh: "当然可以。15楼有一间面向公园的房间——非常安静。我也免除今晚的房费作为补偿。我现在就帮您安排换房。",
            keyPhrases: [
              { en: "facing the park", zh: "面向公园" },
              { en: "waive", zh: "免除" },
              { en: "room charge", zh: "房费" },
              { en: "as an apology", zh: "作为补偿/道歉" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. I've got a quiet room on 15 that faces the park. And I'm waiving tonight's charge — it's on us.",
                textZh: "当然。15楼有间面向公园的安静房间。今晚房费免了——算我们的。",
                actionHint: "接受换房",
                frequency: "common",
              },
              {
                textEn:
                  "I'll move you right now to a park-view room on a high floor. No charge for tonight — that's the least we can do.",
                textZh: "我马上给您换到高层朝公园的房间。今晚不收费——这是我们应该做的。",
                actionHint: "同意方案",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing. Got a room on the 15th facing the park – super quiet. And I'll waive tonight's room charge as an apology. Let me get that move arranged for you now.",
            commonMistake: {
              wrong: "I will cancel tonight's room fee.",
              correct: "I'll waive tonight's room charge.",
              explanation: '"waive" 是专业用词，表示免除费用；"charge" 是费用。',
            },
            formalityVariants: {
              casual:
                "Absolutely. Got a quiet 15th-floor park-view room. Plus, I'll comp tonight's charge. Let's get you moved now.",
              standard:
                "Certainly. I have a suitable room available on the 15th floor, overlooking the park, which is typically very quiet. As a gesture of apology, I will also waive tonight's room charge. Please allow me to arrange your relocation immediately.",
              formal:
                "Most assuredly. I have identified an excellent option for you: a room on the 15th floor with a park view, which I can assure you is exceptionally tranquil. Furthermore, as a sincere expression of our regret for the inconvenience, I shall personally ensure that tonight's room charge is complimentary. I will initiate the transfer process for you at once.",
            },
          },
          {
            speaker: "you",
            textEn: "That would help a lot. What time does the construction usually stop?",
            textZh: "那就太好了。施工一般几点停？",
            casualVersion: "Yeah, that'd help a lot. What time's construction usually stop?",
            commonMistake: {
              wrong: "What time construction stop?",
              correct: "What time does the construction usually stop?",
              explanation: '英文疑问句需要助动词 "does"。',
            },
            formalityVariants: {
              casual: "Awesome, thanks. When does that construction wrap up?",
              standard:
                "That would be very helpful, thank you. Could you please inform me what time the construction typically ceases?",
              formal:
                "That would indeed be most advantageous. May I inquire as to the customary cessation time for the construction activities?",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "The construction runs from 7 AM to 6 PM on weekdays, and there's no work on weekends. Your new room shouldn't be affected at all, but if you notice any noise, please call me right away.",
            textZh:
              "施工时间是工作日早7点到晚6点，周末不施工。您的新房间应该完全不受影响，但如果听到噪音，请马上打电话给我。",
            keyPhrases: [
              { en: "runs from...to", zh: "从……到……" },
              { en: "weekdays", zh: "工作日" },
              { en: "shouldn't be affected", zh: "不应该受影响" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They work 7 to 6, weekdays only. No noise on weekends. Your new room should be totally fine, but call me if it's not.",
                textZh: "工作日7点到6点施工。周末不施工。新房间应该完全没问题，但不行的话打给我。",
                actionHint: "了解施工时间",
                frequency: "common",
              },
              {
                textEn:
                  "Construction's 7 AM to 6 PM on weekdays — nothing on weekends. You shouldn't hear a thing from the new room.",
                textZh: "施工时间是工作日早7到晚6——周末不施工。新房间您应该什么都听不到。",
                actionHint: "安心入住新房",
                frequency: "common",
              },
            ],
            casualVersion:
              "Construction's 7 AM to 6 PM weekdays, nothing on weekends. Your new room shouldn't be affected, but if you hear anything, call me right away.",
            commonMistake: {
              wrong: "Weekend no work.",
              correct: "There's no work on weekends.",
              explanation: '英文常用 "there is/are" 句型表示存在，且需要介词 "on"。',
            },
            formalityVariants: {
              casual:
                "It's 7 to 6 weekdays, no weekends. Your new room should be fine, but seriously, call if you hear anything.",
              standard:
                "The construction schedule is from 7 AM to 6 PM on weekdays, with no work conducted on weekends. Your new room should not be impacted whatsoever, but should you detect any noise, please do not hesitate to contact me immediately.",
              formal:
                "The operational hours for the construction are from 7 AM to 6 PM during the weekdays, with a complete cessation of activities on weekends. I am confident that your new accommodation will remain entirely unaffected; however, if you should perceive any audible disturbances, I urge you to notify me without delay.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for handling this so quickly.",
            textZh: "谢谢你这么快处理。",
            casualVersion: "Thanks for handling this so fast.",
            commonMistake: {
              wrong: "Thank you for handle this.",
              correct: "Thank you for handling this.",
              explanation: '"for" 后跟动词时用动名词形式 (-ing)。',
            },
            formalityVariants: {
              casual: "Cheers, appreciate the quick fix.",
              standard: "I appreciate your prompt resolution of this matter.",
              formal:
                "I extend my sincere gratitude for your exceedingly prompt and efficient resolution of this situation.",
            },
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn:
              "It's the least we can do. I'll have your luggage moved within 15 minutes. Here's my direct number in case you need anything else during your stay.",
            textZh: "这是我们应该做的。15分钟内帮您搬好行李。给您我的直线号码，住宿期间有任何需要随时联系我。",
            keyPhrases: [
              { en: "the least we can do", zh: "这是我们应该做的" },
              { en: "direct number", zh: "直线号码" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's the least we can do. Your bags will be in the new room in 15 minutes. Here's my number — call me for anything.",
                textZh: "这是我们应该做的。15分钟内行李就到新房间。给您我的号码——有事随时打。",
                actionHint: "保存联系方式",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help. I'll have your luggage moved right away. And here — take my card so you can reach me directly.",
                textZh: "很乐意帮忙。行李马上帮您搬。给您我的名片，可以直接联系我。",
                actionHint: "收好名片",
                frequency: "common",
              },
            ],
            casualVersion:
              "Least we can do. I'll get your luggage moved in 15. Here's my direct number if you need anything else.",
            commonMistake: {
              wrong: "If you need something else.",
              correct: "In case you need anything else.",
              explanation: '"in case" 表示以防万一，更自然；"anything" 用于否定或疑问句。',
            },
            formalityVariants: {
              casual: "No problem. Luggage'll be moved in 15. Here's my number if anything else comes up.",
              standard:
                "It is truly the least we can do to ensure your comfort. I will arrange for your luggage to be transferred within 15 minutes. Please take my direct contact number, should you require any further assistance during your stay.",
              formal:
                "It is our utmost priority to ensure your satisfaction, and this is merely a fundamental aspect of our commitment. Your luggage will be relocated to your new room within a quarter of an hour. Kindly retain this direct contact number for any additional requirements or inquiries you may have throughout the remainder of your visit.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 客房服务（点餐/要物品） ====================
  {
    id: "hotel-roomservice",
    category: "hotel",
    titleZh: "客房送餐与物品",
    titleEn: "Room Service & Amenities",
    description: "通过电话叫客房送餐或要求送各种物品到房间",
    otherRole: "客房服务员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 点餐送到房间 ---
      {
        id: "food-order",
        titleZh: "客房点餐",
        titleEn: "Room Service Food Order",
        description: "晚间或清晨在房间点餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to order room service. Is the kitchen still open?",
            textZh: "你好，我想叫客房送餐。厨房还开着吗？",
            casualVersion: "Hey, wanna order room service. Kitchen still open?",
            culturalNote: "美国常用“order”而不是“call for”room service",
            commonMistake: {
              wrong: "I want to order room service.",
              correct: "I'd like to order room service.",
              explanation: '"I want" 听起来太直接，"I\'d like" 更礼貌、自然。',
            },
            formalityVariants: {
              casual: "Hey, wanna get some room service? Kitchen still open?",
              standard: "Hi, I'd like to order room service. Is the kitchen still open?",
              formal:
                "Good evening/morning, I was wondering if I could place a room service order. Could you please confirm if the kitchen is still operational?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Good evening! Our full menu is available until 10 PM. After that, we have a late-night menu until 2 AM. What can I get for you?",
            textZh: "晚上好！完整菜单供应到晚上10点。之后有夜宵菜单到凌晨2点。您想要什么？",
            keyPhrases: [
              { en: "full menu", zh: "完整菜单" },
              { en: "late-night menu", zh: "夜宵菜单" },
              { en: "available until", zh: "供应到" },
            ],
            vocabNotes: {
              available: {
                meaningInContext: "在这里指菜单/食物可以点到某个时间",
                similarUsage: "类似用法：Is this item still available?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Room service is open 24 hours, but the full kitchen closes at 10. What would you like?",
                textZh: "客房服务24小时营业，但正式厨房10点关。您想点什么？",
                actionHint: "告诉他们你想吃什么",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Full menu's good 'til 10. After that, late-night menu 'til 2 AM. What can I getcha?",
            formalityVariants: {
              casual: "Hey! Full menu's good 'til 10. Then late-night 'til 2 AM. What can I getcha?",
              standard:
                "Good evening! Our full menu is available until 10 PM. After that, we have a late-night menu until 2 AM. What can I get for you?",
              formal:
                "Good evening. Our comprehensive menu selection is available until 10 PM. Subsequently, a limited late-night menu is offered until 2 AM. How may I assist you?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like a cheeseburger and a bottle of sparkling water. Oh, and do you have any desserts?",
            textZh: "我要一个芝士汉堡和一瓶气泡水。对了，有甜点吗？",
            casualVersion: "Just a cheeseburger and a sparkling water. Oh, got any desserts?",
            commonMistake: {
              wrong: "I want a cheeseburger and sparkling water.",
              correct: "I'd like a cheeseburger and sparkling water.",
              explanation: '"I want" 在点餐时显得不礼貌，"I\'d like" 更自然。',
            },
            formalityVariants: {
              casual: "Cheeseburger and a sparkling water. Any desserts?",
              standard: "I'd like a cheeseburger and a bottle of sparkling water. Oh, and do you have any desserts?",
              formal:
                "I would appreciate a cheeseburger and a bottle of sparkling water. Furthermore, I was wondering if you offer any dessert options?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Sure! For desserts, we have chocolate lava cake, New York cheesecake, and a fresh fruit platter. Would you like to add one?",
            textZh: "当然！甜点有巧克力熔岩蛋糕、纽约芝士蛋糕和新鲜水果拼盘。要加一个吗？",
            keyPhrases: [
              { en: "chocolate lava cake", zh: "巧克力熔岩蛋糕" },
              { en: "cheesecake", zh: "芝士蛋糕" },
              { en: "fruit platter", zh: "水果拼盘" },
            ],
            alternativeExpressions: [
              {
                textEn: "Definitely! We've got a killer lava cake, cheesecake, or a fruit plate. Want to throw one in?",
                textZh: "当然！我们有超好吃的熔岩蛋糕、芝士蛋糕或者水果盘。要不要来一个？",
                actionHint: "选一个甜点",
                frequency: "common",
              },
              {
                textEn:
                  "We've got some great desserts — chocolate lava cake is the most popular. There's also cheesecake and fruit. Interested?",
                textZh: "甜点很不错——巧克力熔岩蛋糕最受欢迎。还有芝士蛋糕和水果。有兴趣吗？",
                actionHint: "考虑加甜点",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! Desserts are chocolate lava cake, NY cheesecake, and a fruit platter. Wanna add one?",
            formalityVariants: {
              casual: "Yep! We got lava cake, cheesecake, fruit platter. Wanna add one?",
              standard:
                "Sure! For desserts, we have chocolate lava cake, New York cheesecake, and a fresh fruit platter. Would you like to add one?",
              formal:
                "Certainly! Regarding desserts, we currently feature chocolate lava cake, New York cheesecake, and a fresh fruit platter. Would you care to include one with your order?",
            },
          },
          {
            speaker: "you",
            textEn: "The chocolate lava cake sounds amazing. How long will the delivery take?",
            textZh: "巧克力熔岩蛋糕听起来不错。送过来要多久？",
            casualVersion: "Lava cake sounds great. How long for delivery?",
            commonMistake: {
              wrong: "How long delivery takes?",
              correct: "How long will the delivery take?",
              explanation: "询问时间常用 will/is going to take，而不是简单陈述句。",
            },
            formalityVariants: {
              casual: "Lava cake sounds good. How long's delivery?",
              standard: "The chocolate lava cake sounds amazing. How long will the delivery take?",
              formal: "The chocolate lava cake sounds delightful. Could you please provide an estimated delivery time?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "About 25 to 30 minutes. Your order comes to $52 plus a $5 delivery fee and 18% gratuity. Shall I charge it to your room?",
            textZh: "大约25到30分钟。您的订单是52美元加5美元送餐费和18%的服务费。挂房间账吗？",
            keyPhrases: [
              { en: "delivery fee", zh: "送餐费" },
              { en: "gratuity", zh: "服务费/小费" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            vocabNotes: {
              gratuity: {
                meaningInContext: "在酒店客房服务中，gratuity 就是服务费/小费，通常自动加上",
                similarUsage: "类似用法：An 18% gratuity is included.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Give it about 25 to 30 minutes. Total's $52 plus a 5-dollar delivery fee and 18% tip. Put it on the room?",
                textZh: "大概25到30分钟。总共52美元加5美元送餐费和18%小费。挂房间账吗？",
                actionHint: "确认挂账方式",
                frequency: "common",
              },
              {
                textEn:
                  "Should be about half an hour. That'll run you $52 plus delivery and gratuity. Room charge okay?",
                textZh: "大概半小时。52美元加送餐费和服务费。挂房间账可以吗？",
                actionHint: "同意结账",
                frequency: "common",
              },
            ],
            casualVersion:
              "Like 25, 30 minutes. Order's $52, plus $5 delivery, 18% tip. Want me to charge it to your room?",
            culturalNote: "美国服务业小费（gratuity/tip）是常态，通常15-20%",
            formalityVariants: {
              casual: "Around 25-30 mins. It's $52, plus $5 delivery, 18% tip. Charge to room?",
              standard:
                "About 25 to 30 minutes. Your order comes to $52 plus a $5 delivery fee and 18% gratuity. Shall I charge it to your room?",
              formal:
                "The estimated delivery time is approximately 25 to 30 minutes. Your total for the order is $52, in addition to a $5 delivery fee and an 18% gratuity. Would you prefer to charge this to your room account?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, charge it to the room, please. Room 1208.",
            textZh: "好的，挂房间账。1208房间。",
            casualVersion: "Yeah, charge it. Room 1208.",
            commonMistake: {
              wrong: "Charge room 1208.",
              correct: "Charge it to the room, please. Room 1208.",
              explanation: "强调“charge it to the room” 是标准说法，不直接说 charge room。",
            },
            formalityVariants: {
              casual: "Yep, charge it. 1208.",
              standard: "Yes, charge it to the room, please. Room 1208.",
              formal: "Yes, kindly charge the amount to my room, account number 1208.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Got it, Mr. Wang. A cheeseburger, sparkling water, and chocolate lava cake to room 1208. We'll knock when it arrives. Is there anything else?",
            textZh: "好的，王先生。芝士汉堡、气泡水和巧克力熔岩蛋糕送到1208房间。送到时会敲门。还需要别的吗？",
            keyPhrases: [{ en: "we'll knock", zh: "我们会敲门" }],
            alternativeExpressions: [
              {
                textEn:
                  "Perfect. So that's a cheeseburger, sparkling water, and the lava cake to 1208. We'll give you a knock when it's there. All good?",
                textZh: "好的。芝士汉堡、气泡水和熔岩蛋糕送到1208。到了敲门。还有别的吗？",
                actionHint: "确认无误",
                frequency: "common",
              },
              {
                textEn:
                  "All set! Cheeseburger, sparkling water, lava cake — room 1208. Someone will knock when it arrives. Anything else?",
                textZh: "搞定！芝士汉堡、气泡水、熔岩蛋糕——1208房间。到了会敲门。还要别的吗？",
                actionHint: "如果没有就结束",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, Mr. Wang. Cheeseburger, sparkling water, lava cake for 1208. We'll knock when it's there. Anything else?",
            formalityVariants: {
              casual: "Alright, Mr. Wang. Burger, water, lava cake to 1208. We'll knock. Anything else?",
              standard:
                "Got it, Mr. Wang. A cheeseburger, sparkling water, and chocolate lava cake to room 1208. We'll knock when it arrives. Is there anything else?",
              formal:
                "Understood, Mr. Wang. Your order of a cheeseburger, sparkling water, and chocolate lava cake will be delivered to room 1208. We shall knock upon its arrival. May I assist you with anything further?",
            },
          },
          {
            speaker: "you",
            textEn: "That's all. Thank you!",
            textZh: "就这些。谢谢！",
            casualVersion: "That's it. Thanks!",
            commonMistake: {
              wrong: "No more. Thank you!",
              correct: "That's all. Thank you!",
              explanation: '"That\'s all" 是结束对话的自然说法，"no more" 听起来不自然。',
            },
            formalityVariants: {
              casual: "That's it. Thanks!",
              standard: "That's all. Thank you!",
              formal: "That will be all, thank you.",
            },
          },
        ],
      },

      // --- Flow 2: 要求送物品到房间 ---
      {
        id: "amenity-request",
        titleZh: "要求送物品到房间",
        titleEn: "Requesting Amenities",
        description: "要求额外的枕头、毯子、充电器、熨斗等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, this is room 1208. I need a few things sent to my room, please.",
            textZh: "你好，我是1208房间。需要送几样东西到房间。",
            casualVersion: "Hey, room 1208. Need some stuff sent up, please.",
            commonMistake: {
              wrong: "I need a few things",
              correct: "I'd like a few things",
              explanation: "用I need听起来有点生硬，I'd like或Could I get更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, room 1208. Need some things sent up, please.",
              standard: "Hello, this is room 1208. I need a few things sent to my room, please.",
              formal:
                "Good evening, this is room 1208. I would appreciate it if you could arrange for a few items to be delivered to my room at your earliest convenience.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course! What do you need?",
            textZh: "当然！您需要什么？",
            alternativeExpressions: [
              {
                textEn: "Sure thing! What can I bring up for you?",
                textZh: "没问题！需要送什么上来？",
                actionHint: "告诉他们你需要什么",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! What do you need?",
            formalityVariants: {
              casual: "Sure! What do you need?",
              standard: "Of course! What do you need?",
              formal: "Certainly, I'd be happy to assist you. What items are you requesting?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I need an iron and ironing board — I have a business meeting tomorrow. And also an extra blanket; the room is a bit cold.",
            textZh: "我需要一个熨斗和熨衣板——明天有商务会议。还要一条额外的毯子，房间有点冷。",
            casualVersion:
              "Could I get an iron and board? Got a meeting tomorrow. Oh, and an extra blanket too, it's kinda chilly in here.",
            commonMistake: {
              wrong: "I want an iron and ironing board",
              correct: "I need an iron and ironing board",
              explanation: "“I want”听起来比较直接生硬，用“I need”或“I'd like”更礼貌。",
            },
            formalityVariants: {
              casual:
                "Could I get an iron and board? Got a meeting tomorrow. And an extra blanket too, it's kinda chilly in here.",
              standard:
                "I need an iron and ironing board — I have a business meeting tomorrow. And also an extra blanket; the room is a bit cold.",
              formal:
                "I would require an iron and an ironing board, as I have a business engagement tomorrow. Additionally, I find the room somewhat cool and would appreciate an extra blanket.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "No problem. I'll bring those right up. For the cold room, would you like me to send someone to adjust the thermostat, or would you prefer the extra blanket?",
            textZh: "没问题。我马上送上来。房间冷的话，要我派人调一下温控器，还是您就想要额外的毯子？",
            keyPhrases: [
              { en: "iron", zh: "熨斗" },
              { en: "ironing board", zh: "熨衣板" },
              { en: "adjust the thermostat", zh: "调温控器" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! I'll get those up to you. About the cold room — want me to fix the thermostat, or just an extra blanket?",
                textZh: "没问题！我马上送来。房间冷的话——要我修一下温控器，还是多给您一条毯子？",
                actionHint: "选择解决冷的方式",
                frequency: "common",
              },
              {
                textEn:
                  "On my way with those. The room's cold? I can have someone look at the heating, or just grab you a blanket.",
                textZh: "马上送来。房间冷？我可以派人看看暖气，或者直接拿条毯子。",
                actionHint: "告诉需求",
                frequency: "common",
              },
            ],
            casualVersion:
              "No prob. I'll bring 'em right up. About the cold room, wanna adjust the thermostat or just the extra blanket?",
            formalityVariants: {
              casual:
                "No prob. I'll bring 'em right up. About the cold room, wanna adjust the thermostat or just the extra blanket?",
              standard:
                "No problem. I'll bring those right up. For the cold room, would you like me to send someone to adjust the thermostat, or would you prefer the extra blanket?",
              formal:
                "Certainly. I shall bring those items to your room immediately. Regarding the temperature, would you prefer that I dispatch someone to adjust the thermostat, or would the additional blanket suffice?",
            },
          },
          {
            speaker: "you",
            textEn: "Both, actually. And one more thing — do you have a phone charger I could borrow? I forgot mine.",
            textZh: "都要吧。还有一件事——有手机充电器可以借吗？我的忘带了。",
            casualVersion: "Both, actually. Oh, and one more thing — got a phone charger I could borrow? Left mine.",
            commonMistake: {
              wrong: "Do you have charger?",
              correct: "Do you have a charger?",
              explanation: "借东西时，charger前需要加不定冠词'a'。",
            },
            formalityVariants: {
              casual: "Both, actually. Oh, and one more thing — got a phone charger I could borrow? Left mine.",
              standard:
                "Both, actually. And one more thing — do you have a phone charger I could borrow? I forgot mine.",
              formal:
                "I would appreciate both, actually. Furthermore, may I inquire if a mobile phone charger is available for temporary loan? I seem to have misplaced or forgotten my own.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "We have universal chargers available. What type of phone do you have — iPhone or Android?",
            textZh: "我们有万能充电器。您用什么手机——iPhone还是安卓？",
            keyPhrases: [
              { en: "universal charger", zh: "万能充电器" },
              { en: "borrow", zh: "借" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do! We've got chargers for pretty much everything. Is it an iPhone or Android?",
                textZh: "有的！什么手机的充电器我们基本都有。是iPhone还是安卓？",
                actionHint: "说明手机型号",
                frequency: "common",
              },
              {
                textEn: "Sure, we have loaners at the front desk. What kind of phone are you using?",
                textZh: "有，前台有可以借的。您用什么手机？",
                actionHint: "告诉手机类型",
                frequency: "common",
              },
            ],
            casualVersion: "Got universal chargers. What kinda phone you got — iPhone or Android?",
            formalityVariants: {
              casual: "Got universal chargers. What kinda phone you got — iPhone or Android?",
              standard: "We have universal chargers available. What type of phone do you have — iPhone or Android?",
              formal:
                "We do indeed have universal charging devices available. Could you please specify your phone model, whether it is an iPhone or an Android device?",
            },
          },
          {
            speaker: "you",
            textEn: "iPhone, please.",
            textZh: "iPhone的，谢谢。",
            commonMistake: {
              wrong: "My phone is iPhone.",
              correct: "iPhone, please.",
              explanation: "直接回答型号更简洁自然，不需要完整的句子。",
            },
            casualVersion: "iPhone.",
            formalityVariants: {
              casual: "iPhone.",
              standard: "iPhone, please.",
              formal: "An iPhone charger, if you would be so kind.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Got it. I'll bring the iron and ironing board, an extra blanket, and a Lightning charger. Everything should be there within 10 minutes. There's no charge for any of these.",
            textZh: "好的。我带熨斗、熨衣板、额外的毯子和Lightning充电器过来。10分钟内全部送到。这些都不收费。",
            culturalNote: "美国酒店通常免费提供这些物品，小费通常是额外支付给送物品的服务员。",
            keyPhrases: [
              { en: "no charge", zh: "不收费" },
              { en: "within 10 minutes", zh: "10分钟内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Perfect. Iron, ironing board, blanket, and a Lightning cable — all coming up. Should be there in about 10. No charge for any of it.",
                textZh: "好的。熨斗、熨衣板、毯子和Lightning线——都带来。大约10分钟。全部免费。",
                actionHint: "在房间等待",
                frequency: "common",
              },
              {
                textEn: "All right, I've got everything on the list. I'll be up in 10 minutes. It's all complimentary.",
                textZh: "好的，清单上的都有了。10分钟内到。全部免费。",
                actionHint: "等待送达",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gotcha. I'll bring the iron, board, extra blanket, and a Lightning charger. Should be there in 10 mins. And no charge for any of it.",
            formalityVariants: {
              casual:
                "Gotcha. I'll bring the iron, board, extra blanket, and a Lightning charger. Should be there in 10 mins. And no charge for any of it.",
              standard:
                "Got it. I'll bring the iron and ironing board, an extra blanket, and a Lightning charger. Everything should be there within 10 minutes. There's no charge for any of these.",
              formal:
                "Understood. I will personally deliver the iron and ironing board, an additional blanket, and a Lightning charger to your room. You can expect these items to arrive within the next ten minutes. Please note there will be no additional fee for any of these amenities.",
            },
          },
          {
            speaker: "you",
            textEn: "That's great. Thank you so much for the help.",
            textZh: "太好了。非常感谢帮忙。",
            casualVersion: "Awesome, thanks a ton!",
            commonMistake: {
              wrong: "Thank you for your help.",
              correct: "Thank you so much for the help.",
              explanation: "“Thank you so much”比“Thank you”更强调感谢，表达更强的感激之情。",
            },
            formalityVariants: {
              casual: "Awesome, thanks a ton!",
              standard: "That's great. Thank you so much for the help.",
              formal: "That is most satisfactory. I am truly grateful for your prompt and excellent assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 礼宾服务 ====================
  {
    id: "hotel-concierge",
    category: "hotel",
    titleZh: "礼宾服务",
    titleEn: "Concierge Service",
    description: "向酒店礼宾咨询当地推荐、预订餐厅、安排旅游等",
    otherRole: "礼宾员",
    otherRoleIcon: "map-pin",
    flows: [
      // --- Flow 1: 当地推荐 ---
      {
        id: "local-recommendations",
        titleZh: "当地推荐",
        titleEn: "Local Recommendations",
        description: "请礼宾推荐附近的餐厅、景点和活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, we're looking for a good local restaurant for dinner tonight. Nothing too touristy. Do you have any recommendations?",
            textZh: "你好，我们今晚想找一家好的本地餐厅吃晚餐。不要太游客化的。有什么推荐吗？",
            casualVersion: "Hey, lookin' for a good local spot for dinner tonight. Nothin' too touristy. Got any recs?",
            commonMistake: {
              wrong: "Hi, we want to find a local restaurant for dinner tonight.",
              correct: "Hi, we're looking for a good local restaurant for dinner tonight.",
              explanation:
                '"want to" 在请求时听起来比较直接生硬，用 "looking for" 或 "would like to find" 更委婉礼貌。',
            },
            formalityVariants: {
              casual: "Hey, lookin' for a good local spot for dinner tonight. Nothin' too touristy. Got any recs?",
              standard:
                "Hi, we're looking for a good local restaurant for dinner tonight. Nothing too touristy. Do you have any recommendations?",
              formal:
                "Good evening. We are seeking a recommendation for a highly-regarded local restaurant for this evening's dinner, preferably one that is not frequented by tourists. Might you have any suggestions?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "Great choice wanting something local! There's an excellent seafood restaurant called \"The Catch\" about a 10-minute walk from here. It's very popular with locals. Do you have any dietary restrictions?",
            textZh: '想找本地的太好了！步行10分钟有一家很棒的海鲜餐厅叫 "The Catch"。很受当地人欢迎。您有什么忌口吗？',
            commonMistake: {
              wrong: "Want local is too good!",
              correct: "Great choice wanting something local!",
              explanation: "中文的“太好了”直译过来不够自然，这里表达认同和赞赏，用Great choice更地道。",
            },
            keyPhrases: [
              { en: "touristy", zh: "游客化的" },
              { en: "popular with locals", zh: "受当地人欢迎" },
              { en: "dietary restrictions", zh: "忌口/饮食限制" },
            ],
            vocabNotes: {
              touristy: {
                meaningInContext: "在这里指专门为游客服务的、不那么正宗的",
                similarUsage: "类似用法：This area is too touristy for my taste.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I know just the place! There's a hidden gem two blocks away that locals love.",
                textZh: "我正好知道一个地方！两条街外有个当地人喜欢的宝藏餐厅。",
                actionHint: "可以追问具体什么菜",
                frequency: "common",
              },
            ],
            casualVersion: "Awesome you wanna go local! There's this killer seafood spot, like, 10 mins walk...",
            formalityVariants: {
              casual: "Awesome you wanna go local! There's this killer seafood spot, like, 10 mins walk...",
              standard: "Great choice wanting something local! There's an excellent seafood restaurant called \\",
              formal:
                "That's an excellent preference for local cuisine. May I suggest an outstanding seafood establishment located within a ten-minute stroll, known as \\",
            },
          },
          {
            speaker: "you",
            textEn: "No restrictions. Can you make a reservation for two at 7 PM?",
            textZh: "没有忌口。能帮我订两位晚上7点的吗？",
            casualVersion: "Nah, no restrictions. Can ya book two for 7?",
            commonMistake: {
              wrong: "No taboos.",
              correct: "No restrictions.",
              explanation: '"No restrictions" 是表达没有忌口或特别要求的自然方式，"taboos" 听起来很奇怪。',
            },
            formalityVariants: {
              casual: "Nah, no restrictions. Can ya book two for 7?",
              standard: "No restrictions. Can you make a reservation for two at 7 PM?",
              formal:
                "There are no dietary restrictions. Would it be possible for you to secure a reservation for two individuals at 7:00 PM?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "Let me call them right now... Done! You're confirmed for 7 PM, table for two. I'll write down the address and directions for you. It's a lovely evening walk along the river.",
            textZh: "我现在打电话订……好了！确认7点，两位。我给您写下地址和路线。沿着河边走过去，晚上很舒服。",
            commonMistake: {
              wrong: "I finished the call! You are set for 7 PM.",
              correct: "Done! You're all set for 7 PM.",
              explanation: "“Done!”更简洁、地道，表示事情已办妥。“All set”是口语中常用短语。",
            },
            keyPhrases: [
              { en: "confirmed", zh: "确认了" },
              { en: "table for two", zh: "两人桌" },
              { en: "directions", zh: "路线/方向" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just called — you're booked for 7, party of two. I'll jot down the address. It's a nice walk along the river.",
                textZh: "刚打完电话——7点两位已订好。我给您写下地址。沿河走过去很舒服。",
                actionHint: "拿好地址",
                frequency: "common",
              },
              {
                textEn:
                  "All set! 7 PM, table for two. Let me write down how to get there — it's about a 10-minute walk.",
                textZh: "搞定！7点两人桌。我写一下怎么走——大约10分钟路程。",
                actionHint: "看看路线",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme call 'em now... Done! You're all set for 7, two people. I'll jot down the address and how to get there. It's a nice walk by the river in the evening.",
            formalityVariants: {
              casual:
                "Lemme call 'em now... Done! You're all set for 7, two people. I'll jot down the address and how to get there. It's a nice walk by the river in the evening.",
              standard:
                "Let me call them right now... Done! You're confirmed for 7 PM, table for two. I'll write down the address and directions for you. It's a lovely evening walk along the river.",
              formal:
                "Allow me to contact the establishment immediately... It is complete. Your reservation for two at 7:00 PM has been confirmed. I shall provide you with the address and detailed directions. The walk along the river in the evening is quite pleasant.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Also, what are the must-see attractions around here? We have two full days.",
            textZh: "谢谢！另外，这附近有什么必去的景点？我们有整整两天。",
            casualVersion: "Thanks! So, what are the must-sees around here? Got two full days.",
            commonMistake: {
              wrong: "What attractions must see?",
              correct: "What are the must-see attractions?",
              explanation: '"must-see" 是一个形容词，表示“必看的”，通常放在名词前。',
            },
            formalityVariants: {
              casual: "Thanks! So, what are the must-sees around here? Got two full days.",
              standard: "Thank you! Also, what are the must-see attractions around here? We have two full days.",
              formal:
                "Thank you very much. Furthermore, could you advise on the essential attractions in this vicinity? We have two full days available for exploration.",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "For two days, I'd recommend: Day 1, visit the old town and the art museum — they're both within walking distance. Day 2, take a day trip to the national park. I can arrange a private car or you can join a group tour for about $60 per person.",
            textZh:
              "两天的话，我推荐：第一天逛老城区和艺术博物馆——步行都能到。第二天去国家公园一日游。我可以安排专车，或者参加团队游，每人大约60美元。",
            commonMistake: {
              wrong: "I suggest: Day one visit Old Town. Day two go National Park.",
              correct: "I'd recommend: Day one, explore the Old Town. Day two, a full-day trip to the National Park.",
              explanation: "“I'd recommend”更委婉、礼貌。直接说“I suggest”有时会显得生硬。",
            },
            keyPhrases: [
              { en: "must-see attractions", zh: "必去景点" },
              { en: "within walking distance", zh: "步行可到" },
              { en: "day trip", zh: "一日游" },
              { en: "private car", zh: "专车" },
              { en: "group tour", zh: "团队游" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two days? Perfect. Day one, check out the old town and the art museum — both walkable. Day two, do a day trip to the national park. I can set up a car or a group tour.",
                textZh:
                  "两天？太好了。第一天逛老城区和艺术博物馆——都能走到。第二天去国家公园一日游。我可以安排专车或者团游。",
                actionHint: "选择出行方式",
                frequency: "common",
              },
              {
                textEn:
                  "For two full days, I'd say hit the old town and museum first — they're close by. Then the park is a must for day two. Group tours run about 60 bucks.",
                textZh: "两整天的话，先去老城区和博物馆——就在附近。第二天必须去公园。团游大概60美元。",
                actionHint: "考虑行程安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "For two days, I'd say: Day 1, check out the old town and art museum — totally walkable. Day 2, do a day trip to the national park. Can set up a private car, or you can do a group tour for like 60 bucks a person.",
            formalityVariants: {
              casual:
                "For two days, I'd say: Day 1, check out the old town and art museum — totally walkable. Day 2, do a day trip to the national park. Can set up a private car, or you can do a group tour for like 60 bucks a person.",
              standard:
                "For two days, I'd recommend: Day 1, visit the old town and the art museum — they're both within walking distance. Day 2, take a day trip to the national park. I can arrange a private car or you can join a group tour for about $60 per person.",
              formal:
                "Should you have two days available, my recommendations are as follows: On Day 1, I suggest visiting the historic old town and the art museum, both of which are conveniently located within walking distance. For Day 2, a day excursion to the national park would be highly suitable. I am able to arrange either a private chauffeured vehicle or enrollment in a group tour, which is approximately $60 per individual.",
            },
          },
          {
            speaker: "you",
            textEn: "The group tour sounds good. Can you book that for us for the day after tomorrow?",
            textZh: "团队游听起来不错。能帮我们订后天的吗？",
            casualVersion: "Group tour sounds good. Can you book it for us for the day after tomorrow?",
            commonMistake: {
              wrong: "Can you book for us the day after tomorrow?",
              correct: "Can you book that for us for the day after tomorrow?",
              explanation: '时间状语 "for the day after tomorrow" 通常放在句末，或者动词 "book" 的宾语之后。',
            },
            formalityVariants: {
              casual: "Group tour sounds good. Can you book it for us for the day after tomorrow?",
              standard: "The group tour sounds good. Can you book that for us for the day after tomorrow?",
              formal:
                "The group tour option appears satisfactory. Would you be so kind as to reserve that for us for the day after tomorrow?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "Absolutely. The tour departs from the hotel lobby at 8 AM and returns around 5 PM. It includes lunch and park entrance fees. I'll book two spots for you. Payment can be made at the front desk or I can charge it to your room.",
            textZh:
              "当然。旅行团早上8点从酒店大堂出发，大约下午5点回来。包含午餐和公园门票。我帮您订两个名额。可以在前台付款或挂房间账。",
            commonMistake: {
              wrong: "No problem. The tour starts 8 AM.",
              correct: "Absolutely. The tour departs from the hotel lobby at 8 AM.",
              explanation: "“Absolutely”比“No problem”更显专业和热情。Depart from更正式和常用。",
            },
            keyPhrases: [
              { en: "departs from", zh: "从……出发" },
              { en: "lobby", zh: "大堂" },
              { en: "entrance fees", zh: "门票" },
              { en: "book spots", zh: "订名额" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The tour leaves from the lobby at 8 and gets back around 5. Lunch and tickets are included. I'll put you down for two. Room charge or pay at the desk?",
                textZh: "旅行团8点大堂出发，5点左右回来。包午餐和门票。我给您订两位。挂房间账还是前台付？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "It's an 8 AM departure, back by 5. Everything's included — lunch, park entry, the whole deal. Shall I book two?",
                textZh: "早上8点出发，5点回来。全包——午餐、门票什么都有。帮您订两个？",
                actionHint: "确认预订",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. Tour leaves from the lobby at 8 AM, back 'round 5 PM. Lunch and park fees are included. I'll get you two spots. You can pay at the front desk or I can just charge it to your room.",
            formalityVariants: {
              casual:
                "Yep. Tour leaves from the lobby at 8 AM, back 'round 5 PM. Lunch and park fees are included. I'll get you two spots. You can pay at the front desk or I can just charge it to your room.",
              standard:
                "Absolutely. The tour departs from the hotel lobby at 8 AM and returns around 5 PM. It includes lunch and park entrance fees. I'll book two spots for you. Payment can be made at the front desk or I can charge it to your room.",
              formal:
                "Certainly. The excursion will commence from the hotel lobby at 8:00 AM and is scheduled to return approximately at 5:00 PM. This comprehensive package includes both lunch and all park entrance fees. I will proceed to reserve two places for you. Settlement can be arranged at the front desk, or alternatively, I can apply the charge directly to your room account.",
            },
          },
          {
            speaker: "you",
            textEn: "Charge it to the room, please. You've been incredibly helpful!",
            textZh: "挂房间账吧。你帮了大忙！",
            casualVersion: "Just charge it to the room, please. You've been a huge help!",
            commonMistake: {
              wrong: "Please charge it on the room.",
              correct: "Charge it to the room, please.",
              explanation: '英文中“挂账到房间”的固定表达是 "charge it to the room"。',
            },
            formalityVariants: {
              casual: "Just charge it to the room, please. You've been a huge help!",
              standard: "Charge it to the room, please. You've been incredibly helpful!",
              formal: "Kindly charge this to our room account. Your assistance has been exceptionally valuable.",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "My pleasure! Here's my card — if you need anything during your stay, restaurant reservations, tickets, transportation — just ask. Enjoy your dinner tonight!",
            textZh: "我的荣幸！给您我的名片——住宿期间需要订餐厅、买票、交通什么的，随时找我。今晚好好享受晚餐！",
            culturalNote: "“My pleasure”是礼貌回应“Thank you”的常用语，比“You're welcome”更显服务周到。",
            keyPhrases: [
              { en: "my pleasure", zh: "我的荣幸" },
              { en: "transportation", zh: "交通" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's what I'm here for! Here's my card — need a restaurant, tickets, a ride, whatever — just come find me. Enjoy tonight!",
                textZh: "这就是我的工作嘛！给您名片——订餐厅、买票、叫车什么的，来找我就行。今晚好好玩！",
                actionHint: "收好名片",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help! Don't hesitate to come back if you need anything else. Have an amazing evening!",
                textZh: "很高兴帮到您！有什么需要随时来找我。祝您今晚愉快！",
                actionHint: "道谢离开",
                frequency: "common",
              },
            ],
            casualVersion:
              "My pleasure! Here's my card — if you need anything while you're here, like restaurant reservations, tickets, rides — just ask. Enjoy dinner tonight!",
            commonMistake: {
              wrong: "It's my pleasure!",
              correct: "My pleasure!",
              explanation: '"My pleasure!" 是更简洁自然的表达方式，常用于回应感谢。',
            },
            formalityVariants: {
              casual:
                "My pleasure! Here's my card — if you need anything while you're here, like restaurant reservations, tickets, rides — just ask. Enjoy dinner tonight!",
              standard:
                "My pleasure! Here's my card — if you need anything during your stay, restaurant reservations, tickets, transportation — just ask. Enjoy your dinner tonight!",
              formal:
                "The pleasure is entirely mine. Please accept my business card — should you require any assistance whatsoever during your stay, be it for dining arrangements, ticketing, or transportation, do not hesitate to contact me. I trust you will thoroughly enjoy your dinner this evening.",
            },
          },
        ],
      },

      // --- Flow 2: 预订活动和票务 ---
      {
        id: "booking-tours",
        titleZh: "预订活动与票务",
        titleEn: "Booking Tours & Tickets",
        description: "通过礼宾预订当地活动、演出门票、交通等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. I heard there's a famous jazz club nearby. Can you help us get tickets for tonight?",
            textZh: "早上好。我听说附近有一家有名的爵士俱乐部。能帮我们买今晚的票吗？",
            casualVersion: "Morning. Heard there's a famous jazz club around. Can you help us get tickets for tonight?",
            culturalNote: "直接说重点即可，不必过于客套，Good morning足矣",
            commonMistake: {
              wrong: "Can you help us buy tickets for tonight?",
              correct: "Can you help us get tickets for tonight?",
              explanation: '"get tickets" 更自然，"buy tickets" 在请求帮助时稍显生硬。',
            },
            formalityVariants: {
              casual: "Morning. Heard there's a famous jazz club around. Can you help us get tickets for tonight?",
              standard:
                "Good morning. I heard there's a famous jazz club nearby. Can you help us get tickets for tonight?",
              formal:
                "Good morning. I was informed there is a renowned jazz club in the vicinity. Would it be possible for you to assist us in acquiring tickets for this evening?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "You must be thinking of Blue Note! It's excellent. Tonight's show features a Grammy-nominated singer. Tickets are $45 per person. Shall I try to get you seats? Saturday nights fill up fast.",
            textZh:
              "您说的一定是Blue Note！非常棒。今晚的演出有一位格莱美提名歌手。门票每人45美元。需要我帮您订座吗？周六晚上很快就满了。",
            commonMistake: {
              wrong: "You are thinking of Blue Note!",
              correct: "You must be thinking of Blue Note!",
              explanation: "“You must be thinking of…”表达猜测或推断，更自然。直接说“You are thinking of”听起来有点生硬。",
            },
            keyPhrases: [
              { en: "Grammy-nominated", zh: "格莱美提名的" },
              { en: "fill up fast", zh: "很快满了" },
            ],
            vocabNotes: {
              "fill up": {
                meaningInContext: "在这里指座位很快被订满",
                similarUsage: "类似用法：The hotel fills up during holiday season.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The Blue Note is fantastic! Tonight is a special performance. Let me check if there are still seats.",
                textZh: "Blue Note非常棒！今晚有特别演出。我查查还有没有座位。",
                actionHint: "等他们确认",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, you mean Blue Note! Yeah, it's great. Tonight's got a Grammy-nominated singer. Tickets are 45 bucks a person. Want me to try and get you seats? Saturdays fill up quick.",
            formalityVariants: {
              casual:
                "Oh, you mean Blue Note! Yeah, it's great. Tonight's got a Grammy-nominated singer. Tickets are 45 bucks a person. Want me to try and get you seats? Saturdays fill up quick.",
              standard:
                "You must be thinking of Blue Note! It's excellent. Tonight's show features a Grammy-nominated singer. Tickets are $45 per person. Shall I try to get you seats? Saturday nights fill up fast.",
              formal:
                "Ah, you are likely referring to the esteemed Blue Note. It is indeed an exceptional venue. This evening's performance will feature a Grammy-nominated vocalist. Tickets are priced at $45 per individual. Would you like me to endeavor to secure seats for you? Saturday evenings are typically in high demand.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! For two people. What time does the show start?",
            textZh: "好的，帮我订！两个人。演出几点开始？",
            casualVersion: "Yeah, totally! For two. What time's the show start?",
            commonMistake: {
              wrong: "Yes, please! Two people. What time start?",
              correct: "Yes, please! For two people. What time does the show start?",
              explanation: "句子需有主语和助动词，不能直接问 “What time start?”",
            },
            formalityVariants: {
              casual: "Yeah, totally! For two. What time's the show start?",
              standard: "Yes, please! For two people. What time does the show start?",
              formal:
                "Yes, that would be excellent, thank you. For two individuals, please. Could you inform me of the show's commencement time?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "The show starts at 9 PM, but I'd recommend arriving by 8:30 to get good seats — it's general admission. I can arrange a taxi for 8:15.",
            textZh: "演出9点开始，但建议8:30到，这样能坐好位置——是自由入座。我可以安排8:15的出租车。",
            commonMistake: {
              wrong: "I suggest you arrive 8:30.",
              correct: "I recommend arriving by 8:30.",
              explanation: "“I recommend arriving by...”更地道和委婉，提供建议时常用。直接说“I suggest you”可能听起来像命令。",
            },
            keyPhrases: [
              { en: "general admission", zh: "自由入座" },
              { en: "recommend arriving by", zh: "建议……之前到" },
              { en: "arrange a taxi", zh: "安排出租车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It kicks off at 9, but get there by 8:30 for a good spot — it's first come, first served. I'll have a cab ready at 8:15.",
                textZh: "9点开始，但8:30到能占好位——先到先得。我让出租车8:15来。",
                actionHint: "确认时间安排",
                frequency: "common",
              },
              {
                textEn:
                  "Show's at 9. I'd say get there around 8:30 though — no assigned seats. Want me to book a taxi for you?",
                textZh: "演出9点。建议8:30左右到——没有固定座位。要我帮您叫车吗？",
                actionHint: "考虑交通",
                frequency: "common",
              },
            ],
            casualVersion:
              "Show starts at 9, but I'd say get there by 8:30 for good seats — it's general admission. Can set up a cab for 8:15.",
            formalityVariants: {
              casual:
                "Show starts at 9, but I'd say get there by 8:30 for good seats — it's general admission. Can set up a cab for 8:15.",
              standard:
                "The show starts at 9 PM, but I'd recommend arriving by 8:30 to get good seats — it's general admission. I can arrange a taxi for 8:15.",
              formal:
                "The performance commences at 9 PM. However, I would advise arriving no later than 8:30 to secure optimal seating, as it is general admission. I can facilitate a taxi arrangement for 8:15.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Is there a dress code?",
            textZh: "太好了。有着装要求吗？",
            casualVersion: "Sounds perfect. Dress code?",
            commonMistake: {
              wrong: "That would be perfect. Is there dress code?",
              correct: "That would be perfect. Is there a dress code?",
              explanation: '"dress code" 作可数名词时需加冠词 "a"。',
            },
            formalityVariants: {
              casual: "Sounds perfect. Dress code?",
              standard: "That would be perfect. Is there a dress code?",
              formal: "That would be entirely suitable. Might I inquire if there is a particular dress code required?",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "Smart casual is fine. No shorts or flip-flops. It's a classy venue but not overly formal. I'll also book a table at a nearby Italian restaurant for before the show — say, 7 PM? That way you can have dinner first.",
            textZh:
              "商务休闲装就行。不要短裤和人字拖。场地很有格调但不会太正式。我还可以帮您在附近的意大利餐厅订个桌，演出前吃——比如7点？这样可以先吃晚餐。",
            commonMistake: {
              wrong: "Smart casual is okay. No shorts.",
              correct: "Smart casual is fine. No shorts or flip-flops.",
              explanation: "“fine”在口语中表示“没问题”更常见。“flip-flops”指人字拖。",
            },
            keyPhrases: [
              { en: "smart casual", zh: "商务休闲（着装风格）" },
              { en: "dress code", zh: "着装要求" },
              { en: "classy venue", zh: "有格调的场所" },
              { en: "flip-flops", zh: "人字拖" },
            ],
            culturalNote: "Smart casual 指介于正装和休闲之间的着装，一般指有领衬衫配长裤和皮鞋。",
            alternativeExpressions: [
              {
                textEn:
                  "Just dress nice-casual — no shorts or sandals. It's a cool place but nothing too fancy. Oh, and want me to book dinner nearby beforehand? Say 7?",
                textZh:
                  "穿休闲正装就行——别穿短裤和凉鞋。地方很酷但不用太正式。对了，要我先帮您订个附近的晚餐吗？比如7点？",
                actionHint: "考虑晚餐安排",
                frequency: "common",
              },
              {
                textEn:
                  "Smart casual is all you need. Nice pants, collared shirt, that kind of thing. I can also set up dinner before the show if you'd like.",
                textZh: "穿商务休闲就行。好裤子、有领衬衫那种。演出前要不要我帮您安排个晚餐？",
                actionHint: "决定是否加晚餐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Smart casual's cool. No shorts, no flip-flops. It's classy, but not super formal. I can also snag a table at a nearby Italian place before the show — like, 7? That way you can eat first.",
            formalityVariants: {
              casual:
                "Smart casual's cool. No shorts, no flip-flops. It's classy, but not super formal. I can also snag a table at a nearby Italian place before the show — like, 7? That way you can eat first.",
              standard:
                "Smart casual is fine. No shorts or flip-flops. It's a classy venue but not overly formal. I'll also book a table at a nearby Italian restaurant for before the show — say, 7 PM? That way you can have dinner first.",
              formal:
                "Smart casual attire would be perfectly acceptable. However, we do recommend avoiding shorts or flip-flops. It is an elegant establishment, though not excessively formal. Furthermore, I could reserve a table at a reputable Italian restaurant nearby for prior to the performance, perhaps at 7 PM? This would allow you to enjoy dinner beforehand.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a wonderful idea. You really know how to plan an evening!",
            textZh: "太棒的主意了。你真会安排！",
            casualVersion: "Oh, that's an awesome idea. You really know how to plan an evening!",
            culturalNote: "赞美concierge的服务很常见",
            commonMistake: {
              wrong: "That's a wonderful idea. You are good at planning!",
              correct: "That's a wonderful idea. You really know how to plan an evening!",
              explanation: '"good at planning" 听起来像在评价能力，"know how to plan" 更自然。',
            },
            formalityVariants: {
              casual: "Oh, that's an awesome idea. You really know how to plan an evening!",
              standard: "That's a wonderful idea. You really know how to plan an evening!",
              formal:
                "That is truly a splendid suggestion. Your expertise in arranging an enjoyable evening is highly commendable.",
            },
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn:
              "That's what I'm here for! So to confirm: dinner at 7 PM at Trattoria Roma, taxi at 8:15, and two tickets for the 9 PM show at Blue Note. Everything charged to your room. Have a wonderful evening!",
            textZh:
              "这就是我的工作！确认一下：7点在Trattoria Roma吃晚餐，8:15出租车，9点Blue Note两张票。全部挂房间账。祝您有个美好的夜晚！",
            culturalNote: "“That's what I'm here for!”或“That's my job!”是谦虚且专业的表达，表示很乐意服",
            commonMistake: {
              wrong: "This is my job! Confirm everything.",
              correct: "That's what I'm here for! To confirm:",
              explanation: "“That's what I'm here for!”更地道，表达服务员的职责和热情。直接说“This is my job”可能过于生硬。",
            },
            keyPhrases: [
              { en: "to confirm", zh: "确认一下" },
              { en: "charged to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me recap: dinner at 7, cab at 8:15, show at 9. All on the room. You're going to have an amazing night!",
                textZh: "我总结一下：7点晚餐，8:15出租车，9点演出。全挂房间账。今晚一定很棒！",
                actionHint: "确认无误出发",
                frequency: "common",
              },
              {
                textEn:
                  "So to sum up — Trattoria Roma at 7, taxi at quarter past 8, Blue Note at 9. Everything goes on your room. Enjoy!",
                textZh: "总结一下——7点Trattoria Roma，8:15出租车，9点Blue Note。全部挂房间账。玩得开心！",
                actionHint: "准备出门",
                frequency: "common",
              },
            ],
            casualVersion:
              "Exactly! So just to confirm: dinner at 7 at Trattoria Roma, cab at 8:15, two tickets for the 9 PM show at Blue Note. All charged to your room. Have a great night!",
            formalityVariants: {
              casual:
                "Exactly! So just to confirm: dinner at 7 at Trattoria Roma, cab at 8:15, two tickets for the 9 PM show at Blue Note. All charged to your room. Have a great night!",
              standard:
                "That's what I'm here for! So to confirm: dinner at 7 PM at Trattoria Roma, taxi at 8:15, and two tickets for the 9 PM show at Blue Note. Everything charged to your room. Have a wonderful evening!",
              formal:
                "Indeed, that is precisely my role! To confirm the arrangements: dinner reservation at 7 PM at Trattoria Roma, a taxi scheduled for 8:15, and two tickets for the 9 PM performance at Blue Note. All expenditures will be charged to your room folio. I wish you a most delightful evening!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 延住/换房 ====================
  {
    id: "hotel-extension",
    category: "hotel",
    titleZh: "延住与换房",
    titleEn: "Stay Extension & Room Change",
    description: "延长住宿天数或要求换到不同的房间",
    otherRole: "前台接待员",
    otherRoleIcon: "bell",
    flows: [
      // --- Flow 1: 延长住宿 ---
      {
        id: "extend-stay",
        titleZh: "延长住宿",
        titleEn: "Extending Your Stay",
        description: "需要多住几天，询问是否有空房",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I was originally checking out tomorrow, but I'd like to extend my stay by two more nights. Is that possible?",
            textZh: "你好，我原本明天退房，但想再多住两晚。可以吗？",
            casualVersion: "Hey, I was s'posed to check out tomorrow, but can I stay two more nights?",
            commonMistake: {
              wrong: "I want to extend my stay.",
              correct: "I'd like to extend my stay.",
              explanation: '"I want to" 听起来生硬，用 "I\'d like to" 更礼貌。',
            },
            formalityVariants: {
              casual: "Hey, I was checking out tomorrow, but I wanna stay two more nights. Can I?",
              standard:
                "Hi, I was originally checking out tomorrow, but I'd like to extend my stay by two more nights. Is that possible?",
              formal:
                "Good morning/afternoon. I was scheduled to check out tomorrow, but I was wondering if it would be possible to extend my stay for an additional two nights?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Let me check availability... Yes, your current room is available for two more nights. Would you like to keep the same room?",
            textZh: "让我查一下空房情况……可以的，您现在的房间还能再住两晚。您想继续住这间吗？",
            keyPhrases: [
              { en: "extend my stay", zh: "延长住宿" },
              { en: "check availability", zh: "查空房" },
              { en: "keep the same room", zh: "继续住这间" },
            ],
            vocabNotes: {
              extend: {
                meaningInContext: "在这里指延长住宿时间",
                similarUsage: "类似用法：Can I extend my visa?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Let me see... Good news, we can accommodate you for two more nights in your current room.",
                textZh: "我看看……好消息，您的房间可以再住两晚。",
                actionHint: "确认延住",
                frequency: "common",
              },
              {
                textEn: "I'm afraid your room is booked from tomorrow, but I can offer you a different room.",
                textZh: "抱歉您的房间明天起已经被订了，但我可以给您安排另一间。",
                actionHint: "考虑接受换房",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme check... Yep, your room's free for two more nights. Wanna keep it?",
            formalityVariants: {
              casual: "Lemme check... Yep, your room's good for two more nights. Wanna keep it?",
              standard:
                "Let me check availability... Yes, your current room is available for two more nights. Would you like to keep the same room?",
              formal:
                "Certainly, please allow me a moment to verify availability. ... Yes, I can confirm that your current accommodation is indeed available for an additional two nights. Would you prefer to retain this room?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'd like to stay in the same room. Will the rate be the same?",
            textZh: "好的，我想继续住这间。价格一样吗？",
            casualVersion: "Yeah, I'll keep this room. Is the rate the same?",
            commonMistake: {
              wrong: "The price same?",
              correct: "Will the rate be the same?",
              explanation: "问句需要有主谓结构，不能直接说“price same?”。",
            },
            formalityVariants: {
              casual: "Yeah, I'll keep this room. Is the rate the same?",
              standard: "Yes, I'd like to stay in the same room. Will the rate be the same?",
              formal:
                "Yes, I would prefer to remain in the same room, if possible. Could you please confirm if the nightly rate will remain consistent?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The rate for walk-in extensions is $165 per night, which is slightly higher than your original booking rate of $150. However, since you're extending your stay, I can offer you a 10% loyalty discount — that brings it to $148.50 per night.",
            textZh:
              "延住的价格是每晚165美元，比您原来的预订价150美元稍高。不过因为您是延住，我可以给您九折优惠——每晚148.50美元。",
            keyPhrases: [
              { en: "walk-in extensions", zh: "现场延住" },
              { en: "original booking rate", zh: "原始预订价" },
              { en: "loyalty discount", zh: "忠诚/老客折扣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The walk-in rate is 165 a night — a bit more than your booking price. But since you're extending, I can give you 10% off, so it's actually $148.50.",
                textZh: "现场价每晚165——比您的预订价稍高。不过延住的话我可以给您打九折，实际148.50。",
                actionHint: "考虑是否接受",
                frequency: "common",
              },
              {
                textEn:
                  "Normally it'd be 165, but I'll throw in a loyalty discount — brings it down to 148.50, even less than your original rate.",
                textZh: "正常是165，但我给您一个老客折扣——降到148.50，比您原来的价格还低。",
                actionHint: "很划算可以接受",
                frequency: "common",
              },
            ],
            casualVersion:
              "Walk-in extension is $165, so a bit more than your $150. But since you're extending, I can give you a 10% loyalty discount. That makes it $148.50 a night.",
            culturalNote: "美国酒店提供折扣通常会主动告知，无需特别要求",
            formalityVariants: {
              casual:
                "So, extending normally costs $165, a bit more than your $150. But I can give you a 10% loyalty discount for staying longer, making it $148.50 a night.",
              standard:
                "The rate for walk-in extensions is $165 per night, which is slightly higher than your original booking rate of $150. However, since you're extending your stay, I can offer you a 10% loyalty discount — that brings it to $148.50 per night.",
              formal:
                "Certainly. The standard rate for extended stays booked at the front desk is $165 per night, which is a slight increase from your original reservation rate of $150. However, as a valued guest extending your visit, I am authorized to apply a 10% loyalty discount, reducing the nightly rate to $148.50.",
            },
          },
          {
            speaker: "you",
            textEn: "That's even better than my original rate! I'll take it. Do I need to pay now?",
            textZh: "比原来还便宜！我要了。需要现在付吗？",
            casualVersion: "Wow, better than before! I'll take it. Gotta pay now?",
            commonMistake: {
              wrong: "Need I pay now?",
              correct: "Do I need to pay now?",
              explanation: '"Need" 作动词时，疑问句需要借助 "do"。',
            },
            formalityVariants: {
              casual: "Oh, even cheaper! Yeah, I'll take it. Do I pay now?",
              standard: "That's even better than my original rate! I'll take it. Do I need to pay now?",
              formal:
                "That is an excellent offer, even more favorable than my initial rate. I would be pleased to accept. Regarding payment, is it required at this moment, or can it be settled at a later time?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You can settle everything at checkout. I'll update your reservation to check out on March 17th instead. Your key cards will continue to work. Shall I extend the breakfast as well?",
            textZh: "退房时一起结就行。我更新您的预订，退房日期改为3月17日。房卡继续有效。早餐也需要延续吗？",
            keyPhrases: [
              { en: "settle everything at checkout", zh: "退房时一起结算" },
              { en: "update your reservation", zh: "更新预订" },
              { en: "continue to work", zh: "继续有效" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can pay everything when you check out. I'll change your checkout to the 17th. Your keys still work. Want breakfast for the extra days too?",
                textZh: "退房时一起付就行。我把退房日期改到17号。钥匙还能用。额外的几天也要早餐吗？",
                actionHint: "决定是否加早餐",
                frequency: "common",
              },
              {
                textEn:
                  "No need to pay now — it all goes on the final bill. I'm updating your reservation through the 17th. Cards will keep working. Breakfast too?",
                textZh: "现在不用付——都算在最后的账单里。我更新预订到17号。房卡继续有效。早餐也续上？",
                actionHint: "确认早餐",
                frequency: "common",
              },
            ],
            casualVersion:
              "You can pay when you check out. I'll change your reservation to March 17th. Your keys'll still work. Wanna keep the breakfast too?",
            formalityVariants: {
              casual:
                "You can just pay when you leave. I'll change your checkout to the 17th. Your keys are fine. Want me to add breakfast for the new dates?",
              standard:
                "You can settle everything at checkout. I'll update your reservation to check out on March 17th instead. Your key cards will continue to work. Shall I extend the breakfast as well?",
              formal:
                "There is no need to make a payment at this time; all charges can be settled conveniently at the time of your departure. I will proceed with updating your reservation to reflect a new checkout date of March 17th. Please be assured that your current key cards will remain active. Would you also like for me to extend your breakfast inclusion for the additional nights?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please keep the breakfast. Thank you for making this so easy.",
            textZh: "好的，早餐继续保留。谢谢你让这一切这么简单。",
            casualVersion: "Yep, keep the breakfast. Thanks for making it so easy!",
            commonMistake: {
              wrong: "Thank you for make it easy.",
              correct: "Thank you for making this so easy.",
              explanation: '"for" 后面接动名词（-ing 形式）。',
            },
            formalityVariants: {
              casual: "Yeah, breakfast too. Thanks, you made that super easy.",
              standard: "Yes, please keep the breakfast. Thank you for making this so easy.",
              formal:
                "Yes, please do include the breakfast for the additional nights. I truly appreciate your efficiency and assistance in facilitating this process so smoothly.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "My pleasure! Your new checkout date is March 17th at 11 AM. If you need anything else during your extended stay, just let us know.",
            textZh: "不客气！新的退房日期是3月17日上午11点。延住期间有任何需要随时告诉我们。",
            keyPhrases: [
              { en: "new checkout date", zh: "新的退房日期" },
              { en: "extended stay", zh: "延住期间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're all set! New checkout is March 17th at 11. If you need anything the next couple days, just let us know.",
                textZh: "都搞定了！新退房日期是3月17号11点。接下来几天有什么需要随时说。",
                actionHint: "继续享受住宿",
                frequency: "common",
              },
              {
                textEn:
                  "Done! Checkout is now the 17th. Enjoy the extra time and don't hesitate to reach out if you need anything.",
                textZh: "好了！退房改到17号了。好好享受多出来的时间，有事随时联系。",
                actionHint: "放心住下",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem! You're checking out March 17th, 11 AM. Anything else you need while you're here, just ask.",
            formalityVariants: {
              casual: "Anytime! Your checkout's the 17th, 11 AM. If you need anything else, just tell us.",
              standard:
                "My pleasure! Your new checkout date is March 17th at 11 AM. If you need anything else during your extended stay, just let us know.",
              formal:
                "It was my pleasure to assist you. Your updated checkout date is confirmed for March 17th at 11 AM. Please do not hesitate to contact us should you require any further assistance during your extended visit.",
            },
          },
        ],
      },

      // --- Flow 2: 要求换房 ---
      {
        id: "room-change",
        titleZh: "要求换房",
        titleEn: "Requesting a Room Change",
        description: "对当前房间不满意，要求换到其他房间",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Good morning. I'd like to change my room if possible. The room I'm in faces the street and the traffic noise is quite loud, especially in the morning.",
            textZh: "早上好。如果可以的话，我想换个房间。我现在的房间朝街，车流噪音很大，尤其是早上。",
            casualVersion:
              "Hey, can I switch rooms? My current one's on the street side, super noisy, especially mornings.",
            commonMistake: {
              wrong: "I want to change my room.",
              correct: "I'd like to change my room.",
              explanation: '"I want" 听起来太生硬，用 "I\'d like" 更礼貌。',
            },
            formalityVariants: {
              casual:
                "Hey, can I switch rooms? This one's facing the street and it's really loud, especially in the morning.",
              standard:
                "Good morning. I'd like to change my room if possible. The room I'm in faces the street and the traffic noise is quite loud, especially in the morning.",
              formal:
                "Good morning. I was wondering if it might be possible to request a room change. My current accommodation, unfortunately, overlooks the street, and the vehicular traffic noise is rather disruptive, particularly during the early hours.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry about the noise. Let me see what's available... I have a room on the 15th floor facing the courtyard. It's much quieter. Same room type — would that work for you?",
            textZh: "很抱歉噪音问题。让我看看有什么空房……15楼有一间朝庭院的。安静很多。同样的房型——可以吗？",
            keyPhrases: [
              { en: "facing the courtyard", zh: "朝庭院的" },
              { en: "same room type", zh: "同样的房型" },
              { en: "traffic noise", zh: "车流噪音" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I understand. We have a quieter room available on a higher floor. Want me to check the details?",
                textZh: "我理解。高层有一间更安静的空房。要我查查具体信息吗？",
                actionHint: "确认是否接受",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry 'bout the noise. Lemme check... Got a room, 15th floor, courtyard view. Way quieter. Same type. Sound good?",
            formalityVariants: {
              casual:
                "Oh, sorry about that noise. Let me see... Got a room on the 15th, facing the courtyard. Much quieter. Same room type. Is that okay?",
              standard:
                "I'm sorry about the noise. Let me see what's available... I have a room on the 15th floor facing the courtyard. It's much quieter. Same room type — would that work for you?",
              formal:
                "I sincerely apologize for the disturbance caused by the noise. Please allow me a moment to ascertain availability. I can offer you a room on the fifteenth floor with a courtyard exposure, which should provide a considerably more tranquil environment. It is the same room category. Would that option be suitable for your needs?",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Will there be any extra charge for the room change?",
            textZh: "听起来很好。换房需要额外收费吗？",
            casualVersion: "Perfect! Any extra charge for switching rooms?",
            commonMistake: {
              wrong: "Need to pay more money?",
              correct: "Will there be any extra charge?",
              explanation: '"Need to pay more" 过于直接，用 "extra charge" 更委婉礼貌。',
            },
            formalityVariants: {
              casual: "Sounds good! Any extra cost for the switch?",
              standard: "That sounds perfect. Will there be any extra charge for the room change?",
              formal:
                "That sounds entirely satisfactory. May I inquire if there would be any additional fees associated with this room change?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "No extra charge at all since it's the same room type. If you'd like, I could also show you a corner room with a better view for an additional $25 per night.",
            textZh: "同样的房型完全不加收。如果您想看看，还有一间转角房景观更好，每晚多25美元。",
            keyPhrases: [
              { en: "no extra charge", zh: "不额外收费" },
              { en: "corner room", zh: "转角房" },
              { en: "better view", zh: "更好的景观" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Same room type, so no extra cost. But if you want, there's a corner room with a nicer view for 25 more a night.",
                textZh: "同样房型不加钱。不过如果您想要的话，有个转角房景观更好，每晚多25。",
                actionHint: "考虑是否升级",
                frequency: "common",
              },
              {
                textEn:
                  "No charge for the switch since it's the same type. There is a corner room available too — better view, $25 extra per night.",
                textZh: "同房型换房不加收。还有一间转角房——景观更好，每晚多25美元。",
                actionHint: "做出选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nope, no extra charge, same room type. If you wanna, I can show you a corner room, better view, for an extra $25 a night.",
            formalityVariants: {
              casual:
                "Nah, no extra charge for the same type. Could show you a corner room, better view, for $25 more a night though, if you're interested.",
              standard:
                "No extra charge at all since it's the same room type. If you'd like, I could also show you a corner room with a better view for an additional $25 per night.",
              formal:
                "There will be no supplementary charges whatsoever, as it is the identical room category. However, should you be interested, I could also present a corner room offering an enhanced vista for an additional twenty-five dollars per evening.",
            },
          },
          {
            speaker: "you",
            textEn: "The courtyard room is fine. When can I move?",
            textZh: "朝庭院那间就行。什么时候可以搬？",
            casualVersion: "Courtyard room's fine. When can I move my stuff?",
            commonMistake: {
              wrong: "The courtyard room okay.",
              correct: "The courtyard room is fine.",
              explanation: '"okay" 缺乏动词，听起来不自然，需要加上 "is"。',
            },
            formalityVariants: {
              casual: "Yeah, courtyard room's good. When can I move?",
              standard: "The courtyard room is fine. When can I move?",
              formal: "The courtyard room will be perfectly acceptable. When would it be possible for me to relocate?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The room is ready now. I'll prepare new key cards for you. Would you like help moving your luggage, or would you prefer to do it yourself?",
            textZh: "房间现在就好了。我给您做新房卡。需要帮您搬行李吗，还是您自己来？",
            keyPhrases: [
              { en: "ready now", zh: "现在就好了" },
              { en: "prepare new key cards", zh: "做新房卡" },
              { en: "help moving", zh: "帮忙搬" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's ready to go right now. I'll make you new keys. Need help with your bags, or you good on your own?",
                textZh: "现在就能搬。我做新钥匙。行李需要帮忙搬吗，还是自己来？",
                actionHint: "决定是否需要帮忙",
                frequency: "common",
              },
              {
                textEn:
                  "Good news — the room's all set. Let me get you new key cards. Want me to send someone up for your luggage?",
                textZh: "好消息——房间都准备好了。我给您做新房卡。要不要派人帮您搬行李？",
                actionHint: "要求帮忙搬行李",
                frequency: "common",
              },
            ],
            casualVersion:
              "Room's ready. I'll get your new keys. Need help with your bags, or wanna move 'em yourself?",
            formalityVariants: {
              casual: "It's ready. I'll make new keys. Need help with your bags or you got it?",
              standard:
                "The room is ready now. I'll prepare new key cards for you. Would you like help moving your luggage, or would you prefer to do it yourself?",
              formal:
                "The room is prepared and available for your immediate occupancy. I shall proceed to issue new key cards for you. May I inquire if you would appreciate assistance with transporting your luggage, or if you would prefer to manage it yourself?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd appreciate help with the luggage. I have two suitcases and a backpack.",
            textZh: "帮忙搬就太好了。我有两个箱子和一个背包。",
            casualVersion: "Yeah, help with the bags would be great. Got two suitcases and a backpack.",
            commonMistake: {
              wrong: "I appreciate help.",
              correct: "I'd appreciate help.",
              explanation: '"I appreciate" 是陈述事实，"I\'d appreciate" 是提出委婉请求。',
            },
            formalityVariants: {
              casual: "Yeah, help with the bags would be great. Got two suitcases and a backpack.",
              standard: "I'd appreciate help with the luggage. I have two suitcases and a backpack.",
              formal:
                "I would certainly be most grateful for assistance with the luggage. I have two large suitcases and a backpack.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'll send a porter to your room in 5 minutes. Your new room is 1518. Here are your key cards. The old ones have been deactivated. Is there anything else?",
            textZh: "5分钟内派行李员去您房间。新房间是1518。给您新房卡。旧卡已经停用了。还有其他需要吗？",
            keyPhrases: [
              { en: "porter", zh: "行李员" },
              { en: "deactivated", zh: "停用了" },
            ],
            vocabNotes: {
              porter: {
                meaningInContext: "在酒店里，porter 指帮客人搬行李的服务员",
                similarUsage: "类似用法：The porter will carry your bags.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "I'll have someone up in 5 to help with your bags. You're moving to 1518. Here are the new keys — the old ones won't work anymore.",
                textZh: "5分钟内有人来帮您搬行李。新房间1518。给您新钥匙——旧的已经失效了。",
                actionHint: "拿好新房卡",
                frequency: "common",
              },
              {
                textEn:
                  "A porter will be right up. New room is 1518 — here are your keys. I've deactivated the old ones. Anything else?",
                textZh: "行李员马上来。新房间1518——给您钥匙。旧卡已停用。还有别的吗？",
                actionHint: "准备搬家",
                frequency: "common",
              },
            ],
            casualVersion:
              "I'll send someone up for your bags in 5. New room's 1518. Here are your new keys, old ones are dead. Anything else?",
            formalityVariants: {
              casual:
                "Someone will be up for your bags in 5. New room's 1518. Here's your new keys, old ones are off. Anything else?",
              standard:
                "I'll send a porter to your room in 5 minutes. Your new room is 1518. Here are your key cards. The old ones have been deactivated. Is there anything else?",
              formal:
                "I shall dispatch a porter to your current room within approximately five minutes. Your new room assignment is 1518. Please accept these new key cards; your previous ones have been deactivated. Is there anything further I may assist you with?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for being so accommodating.",
            textZh: "没有了。谢谢你这么配合。",
            casualVersion: "Nah, that's it. Thanks for being so helpful.",
            commonMistake: {
              wrong: "No, all.",
              correct: "No, that's everything.",
              explanation: '"all" 听起来不完整，"that\'s everything" 是更自然的结束语。',
            },
            formalityVariants: {
              casual: "Nope, that's all. Thanks for the help.",
              standard: "No, that's everything. Thank you for being so accommodating.",
              formal:
                "No, that will be all, thank you. I genuinely appreciate your exceptional assistance and accommodation.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "It's our pleasure. We want to make sure you're comfortable. Enjoy your new room, and please let us know if there's anything else we can do!",
            textZh: "这是我们应该做的。我们希望确保您住得舒适。好好享受新房间，有任何需要随时告诉我们！",
            keyPhrases: [
              { en: "accommodating", zh: "配合的/通融的" },
              { en: "make sure you're comfortable", zh: "确保您住得舒适" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Happy to help! We want you to be comfortable. Enjoy the new room and let us know if you need anything!",
                textZh: "很乐意帮忙！希望您住得舒服。好好享受新房间，有事随时找我们！",
                actionHint: "搬入新房间",
                frequency: "common",
              },
              {
                textEn:
                  "Of course! Your comfort is our priority. Hope you love the new room — just give us a shout if you need anything.",
                textZh: "当然！您的舒适是我们的首要任务。希望您喜欢新房间——有事喊一声就行。",
                actionHint: "安心入住",
                frequency: "common",
              },
            ],
            casualVersion:
              "Our pleasure. Just want you comfy. Enjoy the new room, and let us know if you need anything else!",
            formalityVariants: {
              casual: "No problem. We just want you comfy. Enjoy the room, and let us know if you need anything!",
              standard:
                "It's our pleasure. We want to make sure you're comfortable. Enjoy your new room, and please let us know if there's anything else we can do!",
              formal:
                "The pleasure is entirely ours. We are committed to ensuring your utmost comfort during your stay. We hope you thoroughly enjoy your new accommodations, and please do not hesitate to contact us should you require any further assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店SPA ====================
  {
    id: "hotel-spa",
    category: "hotel",
    titleZh: "酒店SPA",
    titleEn: "Hotel Spa",
    description: "预约酒店SPA服务，了解按摩类型和套餐",
    otherRole: "SPA前台/理疗师",
    otherRoleIcon: "spa",
    flows: [
      {
        id: "book-spa",
        titleZh: "预约SPA",
        titleEn: "Booking Spa Service",
        description: "咨询SPA服务类型、预约时间、了解注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a spa treatment. What services do you offer?",
            textZh: "你好，我想预约SPA。你们有什么服务？",
            casualVersion: "Hey, what kind of spa treatments do you have?",
            commonMistake: {
              wrong: "Hi, I want to book a spa treatment. What services do you have?",
              correct: "Hi, I'd like to book a spa treatment. What services do you offer?",
              explanation: "I want 听起来太直接，用 I'd like to 更礼貌。'do you offer' 比 'do you have' 更自然。",
            },
            formalityVariants: {
              casual: "Hey, wanna book a spa. What kinda services you got?",
              standard: "Hi, I'd like to book a spa treatment. What services do you offer?",
              formal:
                "Good morning/afternoon. I am interested in scheduling a spa treatment. Could you please inform me of the range of services you provide?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn:
              "Welcome! We offer a variety of treatments. Our most popular options are the Swedish massage, deep tissue massage, hot stone therapy, and aromatherapy. We also have facials, body scrubs, and couples' packages.",
            textZh:
              "欢迎！我们提供多种项目。最受欢迎的有瑞典式按摩、深层组织按摩、热石疗法和芳香疗法。我们还有面部护理、身体磨砂和情侣套餐。",
            keyPhrases: [
              { en: "Swedish massage", zh: "瑞典式按摩" },
              { en: "deep tissue massage", zh: "深层组织按摩" },
              { en: "hot stone therapy", zh: "热石疗法" },
              { en: "aromatherapy", zh: "芳香疗法" },
              { en: "facials", zh: "面部护理" },
              { en: "body scrubs", zh: "身体磨砂" },
              { en: "couples' packages", zh: "情侣套餐" },
            ],
            vocabNotes: {
              "deep tissue": {
                meaningInContext: "在这句话里表示：针对深层肌肉的按摩手法，力度较大，适合肌肉紧张",
                similarUsage: "类似用法：I need a deep tissue massage for my back.（我背部需要深层按摩）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We have everything from relaxation massages to therapeutic treatments. Would you like to see our menu?",
                textZh: "从放松按摩到理疗项目我们都有。要看看我们的菜单吗？",
                actionHint: "要求看菜单",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! We've got a bunch of treatments. Our most popular ones are Swedish, deep tissue, hot stone, and aromatherapy. We also do facials, body scrubs, and couples' stuff.",
            formalityVariants: {
              casual:
                "Hey there! We've got tons of treatments. Our most popular? Swedish, deep tissue, hot stone, and aromatherapy. Plus, facials, body scrubs, and couples' packages.",
              standard:
                "Welcome! We offer a variety of treatments. Our most popular options are the Swedish massage, deep tissue massage, hot stone therapy, and aromatherapy. We also have facials, body scrubs, and couples' packages.",
              formal:
                "Welcome. We provide a comprehensive selection of therapeutic treatments. Our most frequently requested services include Swedish massage, deep tissue massage, hot stone therapy, and aromatherapy. Additionally, we offer facial treatments, body exfoliation, and specialized couples' packages.",
            },
          },
          {
            speaker: "you",
            textEn: "What's the difference between Swedish and deep tissue massage?",
            textZh: "瑞典式按摩和深层按摩有什么区别？",
            casualVersion: "So, what's the deal with Swedish versus deep tissue?",
            commonMistake: {
              wrong: "What's different between Swedish and deep tissue massage?",
              correct: "What's the difference between Swedish and deep tissue massage?",
              explanation: '询问区别时，常用 "What\'s the difference between A and B?" 句式，不要用 "different"。',
            },
            formalityVariants: {
              casual: "Yeah, what's the difference between Swedish and deep tissue?",
              standard: "What's the difference between Swedish and deep tissue massage?",
              formal:
                "Could you please elaborate on the distinctions between the Swedish massage and the deep tissue massage treatments?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn:
              "Swedish massage uses long, flowing strokes and lighter pressure — it's great for relaxation. Deep tissue focuses on specific muscle groups with firmer pressure to release tension and knots. If you've been traveling and feel stiff, I'd recommend the deep tissue.",
            textZh:
              "瑞典式按摩用长的、流畅的推法，力度较轻——非常适合放松。深层按摩针对特定肌肉群，力度更大，可以释放紧张和结节。如果您旅途后感觉僵硬，我推荐深层按摩。",
            keyPhrases: [
              { en: "long, flowing strokes", zh: "流畅的推法" },
              { en: "lighter pressure", zh: "较轻力度" },
              { en: "firmer pressure", zh: "更大力度" },
              { en: "tension and knots", zh: "紧张和结节" },
              { en: "stiff", zh: "僵硬的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Swedish is gentle and relaxing — long smooth strokes. Deep tissue really digs into tight spots. If you're stiff from traveling, go with deep tissue.",
                textZh: "瑞典式轻柔放松——长而流畅的手法。深层按摩深入紧绷的地方。旅途后觉得僵就选深层。",
                actionHint: "选择按摩类型",
                frequency: "common",
              },
              {
                textEn:
                  "Think of Swedish as pure relaxation, deep tissue as therapeutic. After a long trip, most guests prefer deep tissue.",
                textZh: "瑞典式就是纯放松，深层是理疗性的。长途旅行后大多数客人选深层。",
                actionHint: "根据需求选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, so Swedish is kinda light, good for chillin'. Deep tissue, that's more firm, really gets into those tight spots. If you're stiff from travel, definitely go deep tissue.",
            formalityVariants: {
              casual:
                "Basically, Swedish is light, for relaxing. Deep tissue is stronger, for really getting out those knots. If you're sore from traveling, deep tissue is probably what you want.",
              standard:
                "Swedish massage uses long, flowing strokes and lighter pressure — it's great for relaxation. Deep tissue focuses on specific muscle groups with firmer pressure to release tension and knots. If you've been traveling and feel stiff, I'd recommend the deep tissue.",
              formal:
                "The Swedish massage employs extended, fluid strokes with a lighter application of pressure, which is ideal for promoting general relaxation. In contrast, deep tissue massage targets specific muscular areas with a more sustained, firmer pressure to alleviate chronic tension and muscular adhesions. Should you be experiencing stiffness from travel, the deep tissue massage would be my recommendation.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the deep tissue massage. How long are the sessions?",
            textZh: "我选深层按摩吧。做多长时间？",
            casualVersion: "I'll do the deep tissue. How long do they run?",
            commonMistake: {
              wrong: "I'll go with the deep tissue massage. How long time?",
              correct: "I'll go with the deep tissue massage. How long are the sessions?",
              explanation: "询问时间长度直接用 \"How long?\"，不加 \"time\"。'sessions' 比 'massages' 更正式。",
            },
            formalityVariants: {
              casual: "Yeah, I'll take the deep tissue. How long are they?",
              standard: "I'll go with the deep tissue massage. How long are the sessions?",
              formal:
                "I have decided on the deep tissue massage. Could you please inform me of the duration options for the sessions?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn:
              "We have 60-minute and 90-minute sessions. The 60-minute is $120 and the 90-minute is $170. Hotel guests receive a 15% discount.",
            textZh: "有60分钟和90分钟的。60分钟120美元，90分钟170美元。住店客人享受八五折优惠。",
            keyPhrases: [
              { en: "sessions", zh: "疗程" },
              { en: "hotel guests", zh: "住店客人" },
              { en: "discount", zh: "折扣" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do 60 or 90 minutes. 60's $120, 90's $170. As a hotel guest, you get 15% off.",
                textZh: "有60分钟和90分钟。60分钟120，90分钟170。住店客人打八五折。",
                actionHint: "选择时长",
                frequency: "common",
              },
              {
                textEn: "One hour or an hour and a half. With the hotel guest discount, it's a pretty good deal.",
                textZh: "一小时或一个半小时。住店客人有折扣，挺划算的。",
                actionHint: "算算折扣后价格",
                frequency: "common",
              },
            ],
            casualVersion:
              "We've got 60 or 90 minute sessions. It's $120 for 60, and $170 for 90. Hotel guests get 15% off.",
            formalityVariants: {
              casual:
                "You can choose between 60 or 90 minutes. It's $120 for an hour, $170 for an hour and a half. Hotel guests get 15% off.",
              standard:
                "We have 60-minute and 90-minute sessions. The 60-minute is $120 and the 90-minute is $170. Hotel guests receive a 15% discount.",
              formal:
                "We offer sessions in two durations: sixty minutes, priced at $120, and ninety minutes, priced at $170. Additionally, hotel guests are entitled to a fifteen percent discount on all services.",
            },
          },
          {
            speaker: "you",
            textEn: "The 90-minute deep tissue with the hotel discount, please. Do you have anything available today?",
            textZh: "90分钟深层按摩，用住店折扣。今天有空位吗？",
            casualVersion: "I'll take the 90-minute deep tissue with the hotel discount. Anything open today?",
            commonMistake: {
              wrong: "The 90-minute deep tissue with the hotel discount, please. Do you have free today?",
              correct:
                "The 90-minute deep tissue with the hotel discount, please. Do you have anything available today?",
              explanation: "询问是否有空位或预约，常用 'available' 或 'openings'，'free' 不自然。",
            },
            formalityVariants: {
              casual: "Okay, 90-minute deep tissue with my hotel discount. Got any openings today?",
              standard:
                "The 90-minute deep tissue with the hotel discount, please. Do you have anything available today?",
              formal:
                "I would like to book the ninety-minute deep tissue massage, utilizing the hotel guest discount, please. Do you have any appointments available for today?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn:
              "Let me check... We have an opening at 3 PM and another at 5:30 PM. Which would you prefer? Also, do you have a preference for a male or female therapist?",
            textZh: "让我看看……下午3点和5:30有空位。您选哪个？另外，您对理疗师有性别偏好吗？",
            keyPhrases: [
              { en: "opening", zh: "空位/空档" },
              { en: "therapist", zh: "理疗师" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me check the schedule... We've got 3 PM or 5:30. Which works better? And do you have a preference for male or female therapist?",
                textZh: "我看看排程……3点或5:30有空。哪个方便？对理疗师性别有偏好吗？",
                actionHint: "选择时间",
                frequency: "common",
              },
              {
                textEn: "We have two slots open today — 3 and 5:30. Any preference on the therapist?",
                textZh: "今天有两个空位——3点和5:30。对理疗师有要求吗？",
                actionHint: "确认时间和偏好",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check... Looks like 3 PM and 5:30 are open. Which works for you? And, any preference on a guy or girl therapist?",
            culturalNote: "询问理疗师性别在西方很常见，无需避讳。",
            formalityVariants: {
              casual:
                "Checking now... We've got 3 PM or 5:30 PM. What time works best? And, do you care if it's a male or female therapist?",
              standard:
                "Let me check... We have an opening at 3 PM and another at 5:30 PM. Which would you prefer? Also, do you have a preference for a male or female therapist?",
              formal:
                "Allow me to review our schedule... We currently have availability at 3:00 PM and 5:30 PM. Which of these times would be more suitable for you? Furthermore, do you have any particular preference regarding the gender of your therapist?",
            },
          },
          {
            speaker: "you",
            textEn: "3 PM works. No preference on the therapist. Should I arrive early?",
            textZh: "3点可以。理疗师无所谓。我需要提前到吗？",
            casualVersion: "3 PM's good. Don't care about the therapist. Need to come early?",
            commonMistake: {
              wrong: "3 PM works. I don't mind the therapist. Should I arrive early?",
              correct: "3 PM works. No preference on the therapist. Should I arrive early?",
              explanation: '"I don\'t mind" 指不介意，"No preference" 指无偏好，表达更准确。',
            },
            formalityVariants: {
              casual: "Yeah, 3 PM is fine. No preference for the therapist. Do I need to get there ahead of time?",
              standard: "3 PM works. No preference on the therapist. Should I arrive early?",
              formal:
                "3:00 PM would be suitable. I do not have a preference regarding the therapist's gender. Should I plan to arrive prior to my scheduled appointment?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn:
              "Please arrive 15 minutes early to change and relax in our lounge area. We provide robes, slippers, and lockers. You can also use the sauna and steam room before your treatment — they're included. Would you like to charge it to your room?",
            textZh:
              "请提前15分钟到，换衣服并在我们的休息区放松。我们提供浴袍、拖鞋和储物柜。按摩前您也可以使用桑拿和蒸汽房——都包含在内。要挂房间账吗？",
            culturalNote: "小费可挂账，但通常挂账后再给现金",
            keyPhrases: [
              { en: "robes", zh: "浴袍" },
              { en: "slippers", zh: "拖鞋" },
              { en: "lockers", zh: "储物柜" },
              { en: "sauna", zh: "桑拿" },
              { en: "steam room", zh: "蒸汽房" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Come 15 minutes early so you can change and relax. We've got robes, slippers, lockers — plus the sauna and steam room are free before your appointment. Room charge?",
                textZh: "提前15分钟来换衣服放松。浴袍、拖鞋、储物柜都有——按摩前桑拿和蒸汽房免费用。挂房间账吗？",
                actionHint: "确认付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "Get here a bit early — you can use the sauna and steam room before your treatment, it's included. Everything's provided. Should I put it on your room?",
                textZh: "早点来——按摩前可以用桑拿和蒸汽房，都包含在内。东西都有。挂房间账吗？",
                actionHint: "提前到享受设施",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just get here 15 mins early to change and chill in our lounge. We've got robes, slippers, lockers. Plus, feel free to hit the sauna and steam room before your treatment — it's all included. Wanna charge it to your room?",
            formalityVariants: {
              casual:
                "Try to get here about 15 minutes beforehand so you can change and relax. Robes, slippers, lockers are all here. You can even use the sauna and steam room, it's included. Should I put it on your room tab?",
              standard:
                "Please arrive 15 minutes early to change and relax in our lounge area. We provide robes, slippers, and lockers. You can also use the sauna and steam room before your treatment — they're included. Would you like to charge it to your room?",
              formal:
                "We kindly request that you arrive fifteen minutes prior to your appointment time to allow for changing and to enjoy our relaxation lounge. We will provide robes, slippers, and secure lockers. Additionally, access to our sauna and steam room facilities is complimentary before your treatment. Would you prefer to charge this service to your room account?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please charge it to room 1208. Thank you!",
            textZh: "好的，挂1208房间。谢谢！",
            commonMistake: {
              wrong: "Please charge 1208 room",
              correct: "Please charge it to room 1208",
              explanation: "房间号前不加'the'，且'to room'是固定搭配。",
            },
            casualVersion: "Yeah, just put it on room 1208. Thanks!",
            formalityVariants: {
              casual: "Yep, room 1208. Thanks!",
              standard: "Yes, please charge it to room 1208. Thank you!",
              formal: "Yes, kindly charge the amount to room number 1208. Thank you very much.",
            },
          },
        ],
      },
      {
        id: "during-spa",
        titleZh: "SPA过程中沟通",
        titleEn: "During Spa Treatment",
        description: "在SPA过程中与理疗师沟通力度、不适等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "理疗师",
            textEn:
              "Welcome. I'm Lisa, and I'll be your therapist today. Before we start, do you have any injuries, allergies, or areas you'd like me to focus on?",
            textZh: "欢迎。我是Lisa，今天由我为您服务。开始之前，您有任何伤病、过敏或者需要重点关注的部位吗？",
            keyPhrases: [
              { en: "injuries", zh: "伤病" },
              { en: "allergies", zh: "过敏" },
              { en: "focus on", zh: "重点关注" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hi! I'm Lisa, your therapist. Before we get started — any injuries or allergies I should know about? Any areas that need extra attention?",
                textZh: "你好！我是Lisa，今天给您做。开始之前——有什么伤病或过敏需要告诉我吗？哪里需要重点按？",
                actionHint: "说明身体状况",
                frequency: "common",
              },
              {
                textEn: "Welcome! I'll be taking care of you today. Any problem areas or things I should avoid?",
                textZh: "欢迎！今天由我为您服务。有什么问题部位或者需要避开的地方吗？",
                actionHint: "告知注意事项",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey there. I'm Lisa, your therapist today. Before we get going, any injuries, allergies, or spots you want me to hit?",
            formalityVariants: {
              casual:
                "Hey there. I'm Lisa, your therapist today. Before we get going, any injuries, allergies, or spots you want me to hit?",
              standard:
                "Welcome. I'm Lisa, and I'll be your therapist today. Before we start, do you have any injuries, allergies, or areas you'd like me to focus on?",
              formal:
                "Good afternoon/morning. My name is Lisa, and it will be my pleasure to be your therapist for this session. To ensure your comfort and well-being, could you please inform me if you have any pre-existing injuries, allergies, or specific areas requiring particular attention?",
            },
          },
          {
            speaker: "you",
            textEn: "My shoulders and lower back are really tight from the flight. Could you focus on those areas?",
            textZh: "我肩膀和腰因为坐飞机非常紧。能重点按那些部位吗？",
            casualVersion: "My shoulders and lower back are super tight from the flight. Can you focus there?",
            commonMistake: {
              wrong: "My shoulders and lower back are very tight because of the flight. Can you focus on those areas?",
              correct: "My shoulders and lower back are really tight from the flight. Could you focus on those areas?",
              explanation: "\"from the flight\" 比 \"because of the flight\" 更自然。",
            },
            formalityVariants: {
              casual: "My shoulders and lower back are super tight from the flight. Can you focus there?",
              standard: "My shoulders and lower back are really tight from the flight. Could you focus on those areas?",
              formal: "My shoulders and lower back are quite tense, likely due to the flight. I would greatly appreciate it if you could concentrate on those particular areas.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn:
              "Absolutely. I'll spend extra time on your shoulders and lower back. I'll start with medium pressure — please let me know anytime if you'd like more or less pressure. Are you allergic to any essential oils?",
            textZh:
              "没问题。我会在肩膀和腰部多花时间。我先用中等力度开始——过程中随时告诉我您想要大一点还是小一点的力度。您对精油过敏吗？",
            casualVersion: "Totally. I'll hit your shoulders and lower back extra. I'll start medium — just tell me if you want more or less pressure. Any essential oil allergies?",
            formalityVariants: {
              casual: "Totally. I'll hit your shoulders and lower back extra. I'll start medium — just tell me if you want more or less pressure. Any essential oil allergies?",
              standard: "Absolutely. I'll spend extra time on your shoulders and lower back. I'll start with medium pressure — please let me know anytime if you'd like more or less pressure. Are you allergic to any essential oils?",
              formal: "Certainly. I will allocate additional time to address your shoulders and lower back. I shall begin with a medium pressure, and kindly inform me at any point if you prefer a different intensity. Furthermore, do you have any sensitivities or allergies to essential oils?",
            },
            keyPhrases: [
              { en: "medium pressure", zh: "中等力度" },
              { en: "more or less pressure", zh: "大一点或小一点的力度" },
              { en: "essential oils", zh: "精油" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it. I'll focus on your shoulders and lower back. I'll start medium and you tell me if you want it harder or softer. Any allergies to oils?",
                textZh: "明白。我重点按肩膀和腰。先中等力度，您觉得要重一点或轻一点告诉我。对精油过敏吗？",
                actionHint: "如实反馈",
                frequency: "common",
              },
              {
                textEn:
                  "No problem, extra time on those areas. I'll start with a moderate pressure — just speak up anytime. Are essential oils okay?",
                textZh: "没问题，那些部位多花时间。我从中等力度开始——随时说。精油可以吗？",
                actionHint: "告知偏好",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. Go ahead.",
            textZh: "不过敏。请开始吧。",
            casualVersion: "Nah, no allergies. Go for it.",
            commonMistake: {
              wrong: "I have no allergies. Please begin.",
              correct: "No allergies. Go ahead.",
              explanation: "\"Go ahead\" 比 \"Please begin\" 更自然地表示“可以开始了”。",
            },
            formalityVariants: {
              casual: "Nope, no allergies. Go for it.",
              standard: "No allergies. Go ahead.",
              formal: "I do not have any known allergies. You may proceed.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "How's the pressure? Is this comfortable for you?",
            textZh: "力度怎么样？您觉得舒服吗？",
            casualVersion: "How's the pressure? Comfy?",
            formalityVariants: {
              casual: "How's the pressure? Comfy?",
              standard: "How's the pressure? Is this comfortable for you?",
              formal: "How is the pressure currently feeling? Are you experiencing an optimal level of comfort?",
            },
            alternativeExpressions: [
              {
                textEn: "Is this pressure okay, or would you like me to go deeper?",
                textZh: "力度可以吗，还是想要再深一点？",
                actionHint: "如实反馈力度",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you go a bit harder on the shoulders? That spot is really knotted up.",
            textZh: "肩膀能再用力一点吗？那个位置真的很多结。",
            casualVersion: "Can you go a bit harder on my shoulders? That spot's super knotted.",
            commonMistake: {
              wrong: "Can you use more strength on my shoulders? That place is very tight.",
              correct: "Could you go a bit harder on the shoulders? That spot is really knotted up.",
              explanation: "\"go harder\" 比 \"use more strength\" 更地道; \"spot\" 更自然。",
            },
            formalityVariants: {
              casual: "Can you go a bit harder on my shoulders? That spot's super knotted.",
              standard: "Could you go a bit harder on the shoulders? That spot is really knotted up.",
              formal: "Would it be possible to apply a bit more pressure to the shoulder area? I find that particular spot to be quite tense and knotted.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn:
              "Sure, I'll apply more pressure there. You have a lot of tension built up. I'll work on these knots gradually. Just breathe deeply and try to relax. Let me know if it becomes too intense.",
            textZh: "好的，那里我加大力度。您积累了很多紧张。我会慢慢处理这些结节。深呼吸尽量放松。如果太疼了告诉我。",
            casualVersion: "Okay, I'll hit it harder there. Got a lot of tension, huh? I'll work out those knots slowly. Just breathe deep, try to chill. Tell me if it gets too much.",
            formalityVariants: {
              casual: "Okay, I'll hit it harder there. Got a lot of tension, huh? I'll work out those knots slowly. Just breathe deep, try to chill. Tell me if it gets too much.",
              standard: "Sure, I'll apply more pressure there. You have a lot of tension built up. I'll work on these knots gradually. Just breathe deeply and try to relax. Let me know if it becomes too intense.",
              formal: "Certainly, I will increase the pressure in that specific area. It appears you have accumulated a significant amount of tension. I will systematically address these muscular knots. Please focus on deep breathing and strive for relaxation. Kindly inform me if the intensity becomes excessive.",
            },
            keyPhrases: [
              { en: "tension built up", zh: "积累的紧张" },
              { en: "work on these knots", zh: "处理结节" },
              { en: "too intense", zh: "太强烈/太疼" },
            ],
            vocabNotes: {
              knots: {
                meaningInContext: "在这句话里表示：肌肉紧绷形成的硬结（不是绳子的结）",
                similarUsage: "类似用法：I have knots all over my neck.（我脖子到处都是硬结）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Going deeper now. You've got a lot of tightness here. I'll work through these knots slowly. Just breathe and let me know if it's too much.",
                textZh: "加大力度了。这里很紧。我慢慢处理这些硬结。深呼吸，太疼了告诉我。",
                actionHint: "配合深呼吸",
                frequency: "common",
              },
              {
                textEn:
                  "More pressure coming. There are some serious knots in there. Take slow deep breaths and tell me if it gets too intense.",
                textZh: "力度加大了。这里结节很严重。慢慢深呼吸，太强烈了告诉我。",
                actionHint: "放松配合",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. It hurts a little but in a good way.",
            textZh: "刚刚好。有点疼但是那种舒服的疼。",
            casualVersion: "Yeah, that's perfect. Kinda hurts, but like, in a good way.",
            formalityVariants: {
              casual: "Yeah, that's perfect. Kinda hurts, but like, in a good way.",
              standard: "That's perfect. It hurts a little but in a good way.",
              formal: "That level is ideal. I am experiencing some discomfort, but it is a beneficial and therapeutic sensation.",
            },
            culturalNote: '"Hurts in a good way" 是做按摩时的常见说法，表示力度到位。',
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn:
              "That's a good sign — it means the tension is releasing. We're about done. Take your time getting up. There's water on the side table. Make sure to drink plenty of water today to flush out the toxins.",
            textZh: "这是好兆头——说明紧张在释放。我们差不多结束了。慢慢起来。旁边桌上有水。今天要多喝水排毒。",
            culturalNote: "按摩后多喝水排毒是常见建议",
            casualVersion: "Good sign — tension's releasing. We're pretty much done. Take your time getting up. Water's on the side table. Drink lots of water today to flush those toxins.",
            formalityVariants: {
              casual: "Good sign — tension's releasing. We're pretty much done. Take your time getting up. Water's on the side table. Drink lots of water today to flush those toxins.",
              standard: "That's a good sign — it means the tension is releasing. We're about done. Take your time getting up. There's water on the side table. Make sure to drink plenty of water today to flush out the toxins.",
              formal: "That is indeed a positive indication, suggesting that the accumulated tension is effectively being released. Our session is nearing its conclusion. Please rise at your own pace. There is bottled water conveniently located on the adjacent table. It is highly recommended that you consume ample water throughout the day to aid in the detoxification process.",
            },
            keyPhrases: [
              { en: "tension is releasing", zh: "紧张在释放" },
              { en: "take your time", zh: "慢慢来" },
              { en: "flush out the toxins", zh: "排毒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That means it's working! We're all done. No rush getting up. Drink lots of water today — it helps flush everything out.",
                textZh: "说明有效果！我们做完了。不用急着起来。今天多喝水——帮助排毒。",
                actionHint: "慢慢起来多喝水",
                frequency: "common",
              },
              {
                textEn:
                  "That's a good sign. Alright, we're finished. Take it slow getting up and make sure to stay hydrated today.",
                textZh: "这是好兆头。好了，我们结束了。慢慢起来，今天记得多喝水。",
                actionHint: "缓慢起身",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That was amazing. Thank you, Lisa. Should I leave the tip at the front desk?",
            textZh: "太棒了。谢谢你，Lisa。小费在前台留吗？",
            casualVersion: "That was amazing! Thanks, Lisa. Should I just leave the tip at the front desk?",
            commonMistake: {
              wrong: "That was very good. Thank you, Lisa. The tip should I leave at the front desk?",
              correct: "That was amazing. Thank you, Lisa. Should I leave the tip at the front desk?",
              explanation: "问句语序应为 \"Should I do X\"； \"amazing\" 比 \"very good\" 更自然表达赞美。",
            },
            formalityVariants: {
              casual: "That was amazing! Thanks, Lisa. Should I just leave the tip at the front desk?",
              standard: "That was amazing. Thank you, Lisa. Should I leave the tip at the front desk?",
              formal: "That was an absolutely exceptional experience. Thank you sincerely, Lisa. Regarding gratuity, would it be appropriate to leave it at the reception desk?",
            },
            culturalNote: "在美国做SPA通常需要给理疗师15-20%的小费。可以现金或加在账单上。",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn:
              "Thank you! Yes, you can leave it at the front desk or add it when you sign the bill. I'm glad you enjoyed it. If you feel sore tomorrow, that's completely normal — it will pass by the next day.",
            textZh:
              "谢谢！是的，可以在前台留或者签账时加上。很高兴您享受了。如果明天感觉酸痛，那完全正常——后天就会好。",
            casualVersion: "Thanks! Yeah, you can leave it at the front desk or just add it when you sign. Glad you liked it! If you're sore tomorrow, totally normal — be gone by the day after.",
            formalityVariants: {
              casual: "Thanks! Yeah, you can leave it at the front desk or just add it when you sign. Glad you liked it! If you're sore tomorrow, totally normal — be gone by the day after.",
              standard: "Thank you! Yes, you can leave it at the front desk or add it when you sign the bill. I'm glad you enjoyed it. If you feel sore tomorrow, that's completely normal — it will pass by the next day.",
              formal: "Thank you kindly! Indeed, you may leave the gratuity at the front reception desk, or alternatively, you may include it when finalizing your bill. I am genuinely pleased that you found the experience enjoyable. Should you experience any muscular soreness tomorrow, please be assured that this is an entirely normal response and typically subsides within approximately 48 hours.",
            },
            keyPhrases: [
              { en: "sign the bill", zh: "签账" },
              { en: "feel sore", zh: "感觉酸痛" },
              { en: "completely normal", zh: "完全正常" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thank you! You can add a tip when you sign at the front. Don't worry if you're a bit sore tomorrow — totally normal after deep tissue.",
                textZh: "谢谢！前台签单时可以加小费。明天要是有点酸别担心——深层按摩后完全正常。",
                actionHint: "去前台签账",
                frequency: "common",
              },
              {
                textEn:
                  "My pleasure! Tip can go on the bill at the desk. If you feel achy tomorrow, that's just the muscles letting go — it'll pass.",
                textZh: "不客气！小费可以加到前台的账单上。明天要是觉得酸，那是肌肉在放松——很快就好。",
                actionHint: "了解按摩后反应",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "spa-preferences-and-feedback",
        titleZh: "SPA偏好与反馈",
        titleEn: "Spa Preferences & Feedback",
        description: "选择按摩类型、沟通力度偏好、过敏提醒、给小费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Welcome! Do you have a preference for the type of massage? We offer Swedish, deep tissue, hot stone, and aromatherapy.",
            textZh: "欢迎！您对按摩类型有偏好吗？我们有瑞典式、深层组织、热石和香薰按摩。",
            keyPhrases: [
              { en: "Swedish", zh: "瑞典式按摩" },
              { en: "deep tissue", zh: "深层组织按摩" },
              { en: "hot stone", zh: "热石按摩" },
              { en: "aromatherapy", zh: "香薰按摩" },
            ],
            alternativeExpressions: [
              { textEn: "Hi there! What kind of massage are you in the mood for? We've got Swedish, deep tissue, hot stone, and aromatherapy.", textZh: "你好！想做什么类型的按摩？我们有瑞典式、深层、热石和香薰。", actionHint: "in the mood for = 想要", frequency: "common" },
              { textEn: "Welcome! Any particular massage type you prefer? We have four options — Swedish, deep tissue, hot stone, or aromatherapy.", textZh: "欢迎！有偏好的按摩类型吗？我们有四种——瑞典式、深层、热石或香薰。", actionHint: "列出选项", frequency: "occasional" },
            ],
            casualVersion: "Hey! What kinda massage you looking for? We got Swedish, deep tissue, hot stone, and aromatherapy.",
            formalityVariants: {
              casual: "Hey! What kinda massage you want? Swedish, deep tissue, hot stone, or aromatherapy.",
              standard: "Welcome! Do you have a preference for the type of massage? We offer Swedish, deep tissue, hot stone, and aromatherapy.",
              formal: "Welcome. Might you have a particular preference regarding the type of massage? Our offerings include Swedish, deep tissue, hot stone, and aromatherapy treatments.",
            },
          },
          {
            speaker: "you",
            textEn: "Um, what's the difference between Swedish and deep tissue? I'm not really sure which one is best for me.",
            textZh: "嗯，瑞典式和深层有什么区别？我不太确定哪个适合我。",
            casualVersion: "So what's the diff between Swedish and deep tissue? Not sure which one to pick.",
            formalityVariants: {
              casual: "What's the diff between Swedish and deep tissue? Not sure which to pick.",
              standard: "What's the difference between Swedish and deep tissue? I'm not sure which one is best for me.",
              formal: "Could you explain the distinction between the Swedish and deep tissue massage? I am uncertain which would be most suitable for my needs.",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Great question! Swedish is more gentle and relaxing — it's great if you just want to unwind. Deep tissue uses more pressure and targets knots and chronic tension. If you've been sitting on a plane for a long time, I'd actually recommend the deep tissue.",
            textZh: "好问题！瑞典式比较轻柔放松——如果你只是想放松一下就很好。深层组织力度更大，针对结节和长期紧张。如果你坐了很久的飞机，其实我推荐深层组织。",
            keyPhrases: [
              { en: "unwind", zh: "放松身心" },
              { en: "chronic tension", zh: "长期紧张" },
              { en: "targets knots", zh: "针对结节" },
            ],
            alternativeExpressions: [
              { textEn: "So Swedish is lighter, more relaxing. Deep tissue goes deeper into the muscles — great for tight spots. After a long flight, deep tissue is usually the way to go.", textZh: "瑞典式比较轻，更放松。深层是深入肌肉的——适合紧绷的地方。长途飞行后，通常选深层比较好。", actionHint: "the way to go = 最佳选择", frequency: "common" },
            ],
            casualVersion: "Swedish's lighter, more chill. Deep tissue really gets in there — great for knots. After a long flight? I'd go deep tissue.",
            formalityVariants: {
              casual: "Swedish's lighter and super relaxing. Deep tissue goes harder — targets knots and tight spots. After a flight? Go deep tissue.",
              standard: "Swedish is more gentle and relaxing. Deep tissue uses more pressure and targets knots. After a long flight, I'd recommend deep tissue.",
              formal: "The Swedish massage employs lighter strokes focused on overall relaxation. The deep tissue technique utilizes firmer pressure to address muscular knots and chronic tension. Given extended travel, I would recommend the deep tissue option.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll go with the deep tissue then. Oh, one thing — I'm allergic to lavender. Is that going to be an issue?",
            textZh: "好的，那我选深层组织。哦对了——我对薰衣草过敏。这会有问题吗？",
            culturalNote: "提前告知过敏是非常重要的。SPA 很多精油含薰衣草，直接说 'I'm allergic to...' 就行。",
            casualVersion: "Deep tissue then. Oh — I'm allergic to lavender though. That gonna be a problem?",
            formalityVariants: {
              casual: "Deep tissue. Oh wait — I'm allergic to lavender. That an issue?",
              standard: "I'll go with deep tissue. One thing — I'm allergic to lavender. Is that going to be an issue?",
              formal: "I shall opt for the deep tissue massage. However, I should mention that I have an allergy to lavender. Will that present any difficulty?",
            },
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Not at all! I'll make a note of that and let your therapist know. We'll use a hypoallergenic oil instead. Your therapist today is Mike — he'll take great care of you.",
            textZh: "完全没问题！我记下来告诉你的理疗师。我们会用低敏精油代替。今天给你做的理疗师是Mike——他会好好照顾你的。",
            keyPhrases: [{ en: "hypoallergenic", zh: "低敏的" }, { en: "make a note", zh: "记下来" }],
            alternativeExpressions: [
              { textEn: "No problem at all! I'll flag that for your therapist. We have fragrance-free options. Mike will be your therapist — you're in good hands.", textZh: "完全没问题！我跟理疗师说一下。我们有无香型的选择。Mike是你的理疗师——放心交给他。", actionHint: "in good hands = 交给可靠的人", frequency: "common" },
            ],
            casualVersion: "No worries! I'll let your therapist know. We'll swap to a scent-free oil. Mike's got you today — he's awesome.",
            formalityVariants: {
              casual: "No prob! I'll tell Mike. We'll use something scent-free. He's awesome, you'll love it.",
              standard: "Not at all! I'll note that and inform your therapist. We'll use hypoallergenic oil. Mike is your therapist today.",
              formal: "That will not be an issue whatsoever. I shall document your allergy and inform your therapist accordingly. We will substitute a hypoallergenic oil. Your therapist today will be Mike, who is one of our most experienced professionals.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "Hi, I'm Mike. I understand you'd like deep tissue and you're allergic to lavender — all noted. How's the pressure right now? I'm going to start on your back.",
            textZh: "你好，我是Mike。你要做深层组织，对薰衣草过敏——都记下了。现在力度怎么样？我先从背部开始。",
            casualVersion: "Hey, Mike here. Deep tissue, no lavender — got it. How's this pressure? Starting on your back.",
            formalityVariants: {
              casual: "Hey! Mike. Deep tissue, no lavender, got it. Pressure good? Starting on your back.",
              standard: "Hi, I'm Mike. Deep tissue, allergic to lavender — all noted. How's the pressure? Starting on your back.",
              formal: "Good afternoon, I am Mike, your therapist. I have been informed of your preference for deep tissue and your lavender allergy. I will begin with the back. Please advise if the pressure is comfortable.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, could you go a little lighter? That's a bit too intense for me.",
            textZh: "其实能轻一点吗？对我来说有点太强了。",
            culturalNote: "美国做 spa/massage 小费标准是 15-20%。如果对力度不满意，随时说 'Could you go lighter/deeper?' 完全正常。",
            commonMistake: {
              wrong: "Please use less power.",
              correct: "Could you go a little lighter?",
              explanation: "'go lighter/deeper' 是按摩时调节力度的地道说法，不说 'use less power'。",
            },
            casualVersion: "Can you go a bit lighter? That's kinda intense.",
            formalityVariants: {
              casual: "Bit lighter? That's a lot.",
              standard: "Could you go a little lighter? That's a bit too intense.",
              formal: "Would it be possible to apply slightly less pressure? The current intensity is a bit much for my comfort.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "Of course. How's that? Better?",
            textZh: "当然。这样呢？好点了吗？",
            alternativeExpressions: [
              { textEn: "Sure thing. Is this pressure more comfortable?", textZh: "没问题。这个力度舒服些吗？", actionHint: "确认新力度", frequency: "common" },
              { textEn: "No problem. Let me know if this feels right.", textZh: "没问题。这样可以的话告诉我。", actionHint: "等待反馈", frequency: "occasional" },
            ],
            casualVersion: "Sure. How's that?",
            formalityVariants: {
              casual: "Got it. Better?",
              standard: "Of course. How's that? Better?",
              formal: "Certainly. Is this level of pressure more agreeable?",
            },
          },
          {
            speaker: "you",
            textEn: "Yeah, that's perfect. Thank you.",
            textZh: "嗯，这样刚好。谢谢。",
            casualVersion: "Yeah, perfect. Thanks.",
            formalityVariants: {
              casual: "Yep, perfect.",
              standard: "That's perfect. Thank you.",
              formal: "Yes, that is ideal. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "All done! Take your time getting up. How did that feel overall?",
            textZh: "做好了！慢慢起来。整体感觉怎么样？",
            alternativeExpressions: [
              { textEn: "We're all finished. No rush getting up. How was everything?", textZh: "做完了。不着急起来。感觉怎么样？", actionHint: "询问感受", frequency: "common" },
            ],
            casualVersion: "Done! Take your time. How'd it feel?",
            formalityVariants: {
              casual: "All done! No rush. How was it?",
              standard: "All done. Take your time getting up. How did it feel overall?",
              formal: "The session is complete. Please take your time rising. How was the overall experience?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 游泳池/健身房 ====================
  {
    id: "hotel-pool",
    category: "hotel",
    titleZh: "游泳池/健身房",
    titleEn: "Pool & Gym",
    description: "使用酒店泳池和健身房，了解开放时间和设施",
    otherRole: "泳池/健身房工作人员",
    otherRoleIcon: "swim",
    flows: [
      {
        id: "pool-basics",
        titleZh: "使用游泳池",
        titleEn: "Using the Pool",
        description: "了解泳池开放时间、规则、借用毛巾等",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what are the pool hours?",
            textZh: "你好，游泳池几点开放？",
            casualVersion: "When's the pool open?",
            commonMistake: {
              wrong: "Swimming pool when open?",
              correct: "Hi, what are the pool hours?",
              explanation: "中式英语常直译词序，或省略助动词和完整问句结构。",
            },
            formalityVariants: {
              casual: "Hey, pool hours?",
              standard: "Hi, what are the pool hours?",
              formal: "Excuse me, could you please tell me the operating hours for the swimming pool?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The pool is open from 7 AM to 10 PM daily. The hot tub closes at 9 PM. Please note that the pool area is for hotel guests only — you'll need your room key to access it.",
            textZh:
              "游泳池每天早上7点到晚上10点开放。热水浴缸晚上9点关闭。请注意泳池区域仅限住店客人使用——您需要房卡进入。",
            formalityVariants: {
              casual: "Pool's open 7 AM to 10 PM every day. Hot tub closes at 9. Heads up, it's just for hotel guests, so you'll need your room key.",
              standard: "The pool is open from 7 AM to 10 PM daily. The hot tub closes at 9 PM. Please note that the pool area is for hotel guests only—you will need your room key for access.",
              formal: "The swimming pool operates daily from 7 AM until 10 PM. Kindly be advised that the hot tub will close at 9 PM. Access to the pool facilities is restricted to registered hotel guests, and your room key will be required for entry.",
            },
            keyPhrases: [
              { en: "pool hours", zh: "泳池开放时间" },
              { en: "hot tub", zh: "热水浴缸/按摩浴缸" },
              { en: "room key", zh: "房卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Pool's open 7 to 10. You just need to swipe your key card at the gate.",
                textZh: "泳池7点到10点开放。在门口刷一下房卡就行。",
                actionHint: "带好房卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Pool's open 7 AM to 10 PM every day. Hot tub closes an hour earlier, at 9. Oh, and it's just for hotel guests – gotta use your room key to get in.",
          },
          {
            speaker: "you",
            textEn: "Do you provide pool towels, or should I bring the ones from my room?",
            textZh: "你们提供泳池毛巾吗，还是我自己从房间带？",
            casualVersion: "You guys got pool towels, or should I just grab mine from the room?",
            culturalNote: "中国酒店不一定提供专用泳巾，自带房间毛巾很常见。",
            commonMistake: {
              wrong: "Do you have pool towels, or I take room towels?",
              correct: "Do you provide pool towels, or should I bring the ones from my room?",
              explanation: "中式英语常省略主语和助动词，或直译“带”。",
            },
            formalityVariants: {
              casual: "Got pool towels, or should I just use my room ones?",
              standard: "Do you provide pool towels, or should I bring the ones from my room?",
              formal:
                "Excuse me, I was wondering if the hotel provides specific towels for the pool area, or if I should utilize the towels from my guest room.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We have pool towels available at the towel station by the pool. Just leave your used towels in the bin when you're done. Please don't take the room towels to the pool — the pool towels are thicker and more absorbent.",
            textZh:
              "泳池旁边的毛巾站有泳池专用毛巾。用完放到回收箱里就行。请不要把房间毛巾带到泳池——泳池毛巾更厚更吸水。",
            formalityVariants: {
              casual: "Yep, we got pool towels at the station. Just put the used ones in the bin. Don't use your room towels, these are specially made.",
              standard: "We have pool towels available at the towel station by the pool. Kindly leave your used towels in the designated bin. Please do not bring room towels to the pool area, as our pool towels are thicker and more absorbent.",
              formal: "Certainly, pool towels are provided and can be found at the towel station adjacent to the swimming pool. We kindly request that you deposit all used towels into the designated receptacle. Please refrain from bringing guest room towels to the pool, as our specialized pool towels offer superior thickness and absorbency.",
            },
            keyPhrases: [
              { en: "towel station", zh: "毛巾站" },
              { en: "bin", zh: "回收箱" },
              { en: "absorbent", zh: "吸水的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pool towels are right by the pool — just grab one from the stand. Toss the used ones in the basket when you're done. Please don't bring room towels down.",
                textZh: "泳池毛巾就在泳池旁边——从架子上拿就行。用完放篮子里。请不要把房间毛巾带下来。",
                actionHint: "去拿泳池毛巾",
                frequency: "common",
              },
              {
                textEn:
                  "We've got towels poolside — no need to bring your own. Just leave them in the return bin after.",
                textZh: "泳池边有毛巾——不用自己带。用完放回收箱里就行。",
                actionHint: "直接去泳池",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, pool towels are over at the towel station by the pool. Just toss 'em in the bin when you're finished. Don't use your room towels, though – pool ones are way thicker, way better.",
          },
          {
            speaker: "you",
            textEn: "Is there a lifeguard on duty?",
            textZh: "有救生员值班吗？",
            casualVersion: "Lifeguard on duty?",
            commonMistake: {
              wrong: "Have lifeguard?",
              correct: "Is there a lifeguard on duty?",
              explanation: "中式英语常省略冠词，或不习惯用“on duty”。",
            },
            formalityVariants: {
              casual: "Lifeguard on?",
              standard: "Is there a lifeguard on duty?",
              formal: "May I inquire if there is a lifeguard present and on duty at this time?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "A lifeguard is on duty from 9 AM to 6 PM. Outside those hours, you swim at your own risk. We also ask that children under 12 be accompanied by an adult at all times.",
            textZh: "救生员值班时间是上午9点到下午6点。其他时间游泳需自行负责。我们还要求12岁以下儿童必须有成人陪同。",
            formalityVariants: {
              casual: "Lifeguard's on duty 9 AM to 6 PM. Any other time, you swim at your own risk. And kids under 12 always need an adult with 'em.",
              standard: "A lifeguard is on duty from 9 AM to 6 PM. Outside those hours, you swim at your own risk. We also ask that children under 12 be accompanied by an adult at all times.",
              formal: "Our lifeguard is on duty daily from 9 AM until 6 PM. Please be advised that outside of these hours, swimming is at your own risk. Furthermore, we require that all children under the age of 12 be accompanied by a supervising adult at all times.",
            },
            keyPhrases: [
              { en: "lifeguard", zh: "救生员" },
              { en: "on duty", zh: "值班" },
              { en: "at your own risk", zh: "自行负责" },
              { en: "accompanied by an adult", zh: "有成人陪同" },
            ],
            vocabNotes: {
              "at your own risk": {
                meaningInContext: "在这句话里表示：如果出了事，酒店不承担责任，您自己负责安全",
                similarUsage: "类似用法：Use the equipment at your own risk.（使用设备风险自担）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "There's a lifeguard from 9 to 6. After that, swim at your own risk. Kids under 12 need an adult with them.",
                textZh: "9点到6点有救生员。之后游泳自己负责。12岁以下小孩必须有大人陪。",
                actionHint: "注意安全时段",
                frequency: "common",
              },
              {
                textEn:
                  "Lifeguard's on from 9 AM to 6 PM. After hours there's no supervision, so just be careful. And kids need a parent around.",
                textZh: "救生员上午9到下午6在。之后没人看着，注意安全。小朋友需要家长在旁边。",
                actionHint: "了解安全规定",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lifeguard's here 9 to 6. Any other time, you're swimming at your own risk. And heads up, kids under 12 always need an adult with 'em.",
            culturalNote: "美国对儿童安全更重视，未成年人必须有成人陪同是常见规定。",
          },
          {
            speaker: "you",
            textEn: "Can I order food and drinks by the pool?",
            textZh: "可以在泳池边点餐和饮料吗？",
            casualVersion: "Can I get food and drinks out here by the pool?",
            commonMistake: {
              wrong: "Can I order food and drink in the pool?",
              correct: "Can I order food and drinks by the pool?",
              explanation: "在池边用by the pool或at the pool，不是in the pool。",
            },
            formalityVariants: {
              casual: "Can I get food/drinks by the pool?",
              standard: "Can I order food and drinks by the pool?",
              formal: "Is it possible to order food and beverages for service at the poolside?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes! Our poolside bar is open from 11 AM to 8 PM. You can order cocktails, snacks, and light meals. Just flag down one of the servers or pick up the phone on the deck to order. Everything can be charged to your room.",
            textZh:
              "可以！泳池边的酒吧上午11点到晚上8点营业。可以点鸡尾酒、小吃和简餐。招呼服务员或者拿起露台上的电话就可以点单。所有消费可以挂房间账。",
            formalityVariants: {
              casual: "Yeah! Poolside bar's open 11 AM to 8 PM. You can get cocktails, snacks, light meals. Just wave a server over or grab the phone on the deck. All can be charged to your room.",
              standard: "Yes! Our poolside bar is open from 11 AM to 8 PM. You can order cocktails, snacks, and light meals. Just flag down one of the servers or pick up the phone on the deck to order. Everything can be charged to your room.",
              formal: "Certainly! Our poolside bar operates from 11 AM to 8 PM. We offer a selection of cocktails, light meals, and snacks. You may place an order by signaling one of our servers or by utilizing the direct phone line provided on the deck. All charges can be conveniently billed to your guest room.",
            },
            keyPhrases: [
              { en: "poolside bar", zh: "泳池边酒吧" },
              { en: "flag down", zh: "招呼/拦住" },
              { en: "deck", zh: "露台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep! The pool bar is open 11 to 8. Just wave down a server or grab the phone on the deck. Everything goes on your room.",
                textZh: "可以！泳池酒吧11点到8点营业。招呼服务员或者用露台上的电话。都可以挂房间账。",
                actionHint: "到了直接点",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely! There's a poolside bar with drinks, snacks, and light bites. You can charge it all to your room.",
                textZh: "当然！泳池边有酒吧，有饮品、小吃和简餐。全部可以挂房间账。",
                actionHint: "享受泳池服务",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! Pool bar's open 11 to 8. Grab cocktails, snacks, light meals. Just wave down a server or use the phone on the deck. And yeah, it all goes on your room tab.",
            culturalNote: "在西方国家，用“flag down”表示招手示意；“charge to your room”指挂账。",
          },
          {
            speaker: "you",
            textEn: "Sounds great. One last question — are there lounge chairs available, or do I need to reserve one?",
            textZh: "听起来不错。最后一个问题——有躺椅可以用吗，还是需要预约？",
            casualVersion: "Cool. Last thing – are there lounge chairs, or gotta book 'em?",
            commonMistake: {
              wrong: "Are there lounge chairs, or I need reserve?",
              correct: "Are there lounge chairs available, or do I need to reserve one?",
              explanation: "需补足主语“I”和助动词“do”，使句子更自然。",
            },
            formalityVariants: {
              casual: "Awesome. Quick question – lounge chairs, can I just grab one or do I need to reserve it?",
              standard:
                "Sounds great. One last question — are there lounge chairs available, or do I need to reserve one?",
              formal:
                "That sounds wonderful. I have one final inquiry: are the lounge chairs generally available for immediate use, or is it necessary to make a prior reservation?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Lounge chairs are first-come, first-served. On weekends it can get busy, so I'd recommend going early if you want a good spot. We also have private cabanas you can rent for $50 a day — they come with extra shade, a mini-fridge, and complimentary fruit.",
            textZh:
              "躺椅先到先得。周末比较热门，如果想要好位置建议早去。我们还有私人凉棚可以租，每天50美元——有遮阳、迷你冰箱和免费水果。",
            formalityVariants: {
              casual: "Chairs are first-come, first-served. Weekends are usually packed, so get here early for the best spots. We also have cabanas for rent, 50 bucks a day – they come with shade, a mini-fridge, and free fruit.",
              standard: "Lounge chairs are first-come, first-served. On weekends it can get busy, so I recommend arriving early for prime spots. We also offer private cabanas for rent at $50 per day, which include shade, a mini-fridge, and complimentary fruit.",
              formal: "Lounge chairs are available on a first-come, first-served basis. During peak times, particularly on weekends, we advise arriving earlier to secure preferred seating. Additionally, we provide private cabanas for rent at $50 per day, which include shaded areas, a mini-refrigerator, and complimentary fresh fruit.",
            },
            keyPhrases: [
              { en: "first-come, first-served", zh: "先到先得" },
              { en: "cabanas", zh: "凉棚/池畔小屋" },
              { en: "complimentary", zh: "免费的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Chairs are first come, first served — weekends get busy so go early. We also rent cabanas for 50 bucks a day if you want some privacy.",
                textZh: "躺椅先到先得——周末人多建议早去。也可以租凉棚，每天50美元，比较私密。",
                actionHint: "考虑租凉棚",
                frequency: "common",
              },
              {
                textEn:
                  "Just grab any open chair. On weekends they go fast. If you want a VIP setup, we have cabanas with shade and a mini-fridge for $50.",
                textZh: "有空的椅子直接坐就行。周末抢得快。想要VIP待遇的话有凉棚，带遮阳和冰箱，50美元。",
                actionHint: "早点去占位子",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lounge chairs are first-come, first-served. Gets pretty packed on weekends, so hit it early if you want a good spot. We also got private cabanas for fifty bucks a day – they come with more shade, a mini-fridge, and free fruit.",
            culturalNote: "“First-come, first-served”是先到先得。“Cabana”指私人泳池小屋，常需付费租用。",
          },
        ],
      },
      {
        id: "gym-use",
        titleZh: "使用健身房",
        titleEn: "Using the Gym",
        description: "了解健身房设施、器材使用、课程预约",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Where is the fitness center, and what equipment do you have?",
            textZh: "健身中心在哪里？有什么器材？",
            commonMistake: {
              wrong: "Where is the gym, and what equipment do you have?",
              correct: "Where is the fitness center, and what equipment do you have?",
              explanation: "酒店多用fitness center，gym更日常口语化，但有时不太正式。",
            },
            casualVersion: "Where's the gym, and what equipment do ya have?",
            formalityVariants: {
              casual: "Where's the gym at, and what kinda equipment you got?",
              standard: "Where is the fitness center located, and what equipment do you have?",
              formal:
                "Could you please direct me to the fitness center, and could you also provide a list of the available equipment?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The fitness center is on the 3rd floor, Room 302. It's open 24 hours. We have treadmills, ellipticals, stationary bikes, free weights, and a cable machine. There's also a yoga mat area.",
            textZh:
              "健身中心在3楼302室。24小时开放。有跑步机、椭圆机、固定自行车、自由重量器材和缆绳机。还有瑜伽垫区域。",
            casualVersion: "Gym's on the 3rd floor, 302. Open 24/7. Got treadmills, ellipticals, bikes, free weights, cable machine. Plus a yoga mat area.",
            formalityVariants: {
              casual: "It's on the third floor, room 302. Open all day, every day. Got your basic treadmills, ellipticals, bikes, free weights, cable machine, and a yoga spot.",
              standard: "The fitness center is located on the 3rd floor, Room 302, and operates 24 hours a day. We offer treadmills, ellipticals, stationary bikes, free weights, a cable machine, and a designated yoga mat area.",
              formal: "The fitness center is situated on the third floor, specifically in Room 302, and is accessible at all hours. Our facilities include treadmills, elliptical machines, stationary bicycles, free weights, a cable machine, and a dedicated area for yoga mats.",
            },
            keyPhrases: [
              { en: "fitness center", zh: "健身中心" },
              { en: "treadmills", zh: "跑步机" },
              { en: "ellipticals", zh: "椭圆机" },
              { en: "stationary bikes", zh: "固定自行车" },
              { en: "free weights", zh: "自由重量器材" },
              { en: "cable machine", zh: "缆绳机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Third floor, room 302. It's open 24/7. We've got treadmills, bikes, ellipticals, free weights, cables — the works. There's a yoga area too.",
                textZh: "3楼302室。24小时开放。跑步机、自行车、椭圆机、自由重量、缆绳机——什么都有。也有瑜伽区。",
                actionHint: "记住位置",
                frequency: "common",
              },
              {
                textEn:
                  "It's right on the 3rd floor, open around the clock. Pretty well equipped — cardio machines, weights, and a stretching area.",
                textZh: "就在3楼，全天开放。设备很齐全——有氧器材、重量训练和拉伸区。",
                actionHint: "去看看",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you offer any fitness classes?",
            textZh: "你们有健身课程吗？",
            casualVersion: "Got any fitness classes?",
            formalityVariants: {
              casual: "Any fitness classes?",
              standard: "Do you offer any fitness classes?",
              formal: "Are there any fitness classes available for guests?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We have morning yoga at 7 AM on weekdays and a HIIT class at 6 PM on Tuesdays and Thursdays. Both are complimentary for hotel guests. You can sign up at the front desk or through the hotel app.",
            textZh:
              "工作日早上7点有晨间瑜伽，周二和周四下午6点有HIIT课程。住店客人都是免费的。可以在前台或酒店App上报名。",
            casualVersion: "Got morning yoga at 7 AM on weekdays, HIIT class at 6 PM Tuesdays and Thursdays. Both free for guests. Sign up at the front desk or on the app.",
            formalityVariants: {
              casual: "Yeah, morning yoga at 7 AM on weekdays, HIIT at 6 PM Tues/Thurs. Both free for guests. Just sign up at the front desk or the app.",
              standard: "We offer morning yoga at 7 AM on weekdays and a HIIT class at 6 PM on Tuesdays and Thursdays. Both classes are complimentary for hotel guests. Registration is available at the front desk or via the hotel application.",
              formal: "Certainly, we provide morning yoga sessions at 7 AM on weekdays and a High-Intensity Interval Training (HIIT) class at 6 PM on Tuesdays and Thursdays. Both offerings are complimentary to our esteemed hotel guests. Reservations may be made at the front desk or conveniently through the official hotel application.",
            },
            keyPhrases: [
              { en: "fitness classes", zh: "健身课程" },
              { en: "HIIT class", zh: "HIIT课程（高强度间歇训练）" },
              { en: "sign up", zh: "报名" },
            ],
            vocabNotes: {
              HIIT: {
                meaningInContext:
                  "在这句话里表示：High-Intensity Interval Training，高强度间歇训练，短时间内交替进行高强度运动和休息",
                similarUsage:
                  "类似用法：The HIIT class is only 30 minutes but very intense.（HIIT课只有30分钟但强度很大）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We do yoga every weekday morning at 7 and HIIT on Tuesdays and Thursdays at 6 PM. Both free for guests. Just sign up at the desk or on the app.",
                textZh: "工作日每天早上7点有瑜伽，周二周四下午6点有HIIT。住客都免费。前台或App报名。",
                actionHint: "选择感兴趣的课",
                frequency: "common",
              },
              {
                textEn:
                  "There's morning yoga at 7 on weekdays and a HIIT class twice a week. Totally free for hotel guests. Want to sign up?",
                textZh: "工作日早上7点有晨间瑜伽，一周两次HIIT课。住店客人完全免费。要报名吗？",
                actionHint: "决定是否参加",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'd like to sign up for the yoga class tomorrow morning. Also, is there a personal trainer available?",
            textZh: "我想报名明天早上的瑜伽课。另外，有私人教练吗？",
            casualVersion: "Wanna sign up for yoga tomorrow morning. And, uh, got a personal trainer?",
            commonMistake: {
              wrong: "I want sign up for the yoga class tomorrow morning. Also, have you personal trainer?",
              correct: "I'd like to sign up for the yoga class tomorrow morning. Also, is there a personal trainer available?",
              explanation: "\"want to\" 比 \"I'd like to\" 生硬。\"have you\" 听起来不自然，应是 \"is there a\" 或 \"do you have a\"。",
            },
            formalityVariants: {
              casual: "Can I sign up for yoga tomorrow morning? Also, any personal trainers?",
              standard: "I'd like to sign up for the yoga class tomorrow morning. Additionally, are there personal trainers available?",
              formal: "I would appreciate it if I could register for the yoga class scheduled for tomorrow morning. Furthermore, I inquire as to the availability of a personal trainer.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I've put you down for tomorrow's yoga. As for personal training, yes, we have two certified trainers on staff. A one-hour session is $80. Would you like me to book one?",
            textZh: "已经帮您报了明天的瑜伽。私人教练方面，我们有两位持证教练。一小时80美元。要帮您预约吗？",
            casualVersion: "Gotcha for tomorrow's yoga. Personal training? Yeah, got two certified trainers. $80 for an hour. Wanna book one?",
            formalityVariants: {
              casual: "Okay, you're in for yoga tomorrow. Trainers? Yeah, got two certified ones. $80 an hour. Want to set one up?",
              standard: "You are confirmed for tomorrow's yoga class. Regarding personal training, yes, we have two certified trainers on staff. A one-hour session costs $80. Would you like me to arrange a booking for you?",
              formal: "You have been successfully registered for tomorrow morning's yoga session. With respect to personal training, we indeed employ two certified trainers. A one-hour session is priced at $80. May I proceed with a booking for you?",
            },
            keyPhrases: [
              { en: "put you down for", zh: "帮您报名" },
              { en: "personal training", zh: "私人教练" },
              { en: "certified trainers", zh: "持证教练" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Done — you're signed up for yoga tomorrow. And yes, we have personal trainers. It's 80 bucks for an hour. Want me to book one?",
                textZh: "好了——帮您报了明天的瑜伽。私人教练也有，一小时80美元。要预约吗？",
                actionHint: "考虑是否请教练",
                frequency: "common",
              },
              {
                textEn:
                  "You're all set for tomorrow's yoga. As for a trainer, we've got two on staff — $80 an hour. Interested?",
                textZh: "明天瑜伽报好了。教练的话我们有两位——每小时80美元。有兴趣吗？",
                actionHint: "决定是否需要",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Not this time, but thanks. Do I need to bring my own workout clothes and shoes?",
            textZh: "这次不用了，谢谢。我需要自己带运动衣和鞋子吗？",
            casualVersion: "Nah, not this time, but thanks. Gotta bring my own workout clothes and shoes?",
            formalityVariants: {
              casual: "Nah, not today, thanks though. Do I gotta bring my own gear?",
              standard: "Not at this time, thank you. Do I need to provide my own workout clothes and shoes?",
              formal: "I shall decline at this juncture, but I extend my gratitude. Am I required to furnish my own athletic attire and footwear?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, please wear athletic shoes and appropriate workout clothing. We do provide fresh towels, water bottles, and earphones if you need them. There are also changing rooms with showers and complimentary toiletries.",
            textZh: "是的，请穿运动鞋和合适的运动服。我们提供干净毛巾、水瓶和耳机。也有带淋浴的更衣室和免费洗漱用品。",
            casualVersion: "Yeah, wear athletic shoes and appropriate workout clothes. We got fresh towels, water bottles, and earphones if ya need 'em. Plus changing rooms with showers and free toiletries.",
            formalityVariants: {
              casual: "Yep, just wear your athletic shoes and proper workout gear. We've got towels, water, and earphones if you need 'em. Changing rooms too, with showers and free stuff.",
              standard: "Yes, kindly ensure you wear athletic shoes and appropriate workout clothing. We supply fresh towels, water bottles, and earphones upon request. Additionally, changing rooms are available, equipped with showers and complimentary toiletries.",
              formal: "Indeed, we request that you wear athletic footwear and suitable workout attire. We are pleased to provide fresh towels, bottled water, and earphones should you require them. Furthermore, changing facilities are available, complete with showers and complimentary toiletries.",
            },
            keyPhrases: [
              { en: "athletic shoes", zh: "运动鞋" },
              { en: "changing rooms", zh: "更衣室" },
              { en: "toiletries", zh: "洗漱用品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your workout clothes and sneakers. We've got towels, water, and earbuds if you need them. There are showers and changing rooms too.",
                textZh: "带运动服和运动鞋来就行。毛巾、水和耳机我们都有。也有淋浴和更衣室。",
                actionHint: "带好运动装备",
                frequency: "common",
              },
              {
                textEn:
                  "Just wear something comfortable and proper shoes. Everything else is provided — towels, water bottles, even earphones.",
                textZh: "穿舒适的衣服和合适的鞋就行。其他都有——毛巾、水瓶，甚至耳机。",
                actionHint: "准备好就去",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Are there any rules I should be aware of?",
            textZh: "太好了。有什么规定我需要注意的吗？",
            casualVersion: "Cool. Any rules I should know?",
            commonMistake: {
              wrong: "Perfect. Are there any rules I need know?",
              correct: "Perfect. Are there any rules I should be aware of?",
              explanation: "\"need know\" 语法不正确，应为 \"need to know\" 或 \"should know/be aware of\"。",
            },
            formalityVariants: {
              casual: "Alright, cool. Any rules I gotta know?",
              standard: "Excellent. Are there any rules or guidelines I should be aware of?",
              formal: "Splendid. Are there any specific regulations or guidelines of which I ought to be apprised?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Just a few: please wipe down equipment after use, re-rack your weights, and keep the volume low on personal devices. During late hours, from 10 PM to 6 AM, we ask guests to be mindful of noise since rooms are nearby.",
            textZh:
              "几条：用完器材请擦拭，重量器材放回原处，个人设备请保持低音量。深夜时段（晚上10点到早上6点），请注意噪音，因为旁边就是客房。",
            casualVersion: "Just a few: wipe down equipment after, put your weights back, and keep device volume low. Late hours, 10 PM to 6 AM, try to keep it down since rooms are close.",
            formalityVariants: {
              casual: "Just a couple: wipe down machines, put weights back, and keep your music quiet. After 10 PM until 6 AM, please be extra quiet 'cause rooms are right next door.",
              standard: "Just a few key points: kindly wipe down equipment after use, ensure you re-rack your weights, and maintain a low volume on personal devices. During late hours, specifically from 10 PM to 6 AM, we respectfully request guests to be mindful of noise levels due to the proximity of guest rooms.",
              formal: "Certainly, a few regulations to note: we kindly request that all patrons wipe down equipment following use, return all free weights to their designated racks, and ensure personal electronic devices are used at a subdued volume. During the late hours, from 10 PM to 6 AM, we particularly implore guests to exercise discretion regarding noise, given the immediate vicinity of our accommodations.",
            },
            keyPhrases: [
              { en: "wipe down", zh: "擦拭" },
              { en: "re-rack your weights", zh: "把重量器材放回" },
              { en: "mindful of noise", zh: "注意噪音" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just the basics: wipe the machines after use, put your weights back, and keep it quiet after 10 PM since the rooms are close by.",
                textZh: "就是基本的：用完器材擦一下，器材放回去，10点后保持安静因为旁边就是客房。",
                actionHint: "遵守规定",
                frequency: "common",
              },
              {
                textEn:
                  "Pretty standard stuff — clean up after yourself, rack your weights, and go easy on the noise late at night.",
                textZh: "很基本的——用完收拾好，器材放回原处，深夜注意音量就行。",
                actionHint: "记住规则",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 商务中心 ====================
  {
    id: "hotel-business",
    category: "hotel",
    titleZh: "商务中心",
    titleEn: "Business Center",
    description: "使用酒店商务中心打印、预订会议室、安排电话会议",
    otherRole: "商务中心工作人员",
    otherRoleIcon: "briefcase",
    flows: [
      {
        id: "printing-services",
        titleZh: "打印和办公",
        titleEn: "Printing & Office Services",
        description: "打印文件、使用电脑、复印传真等",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to print some documents. Where is the business center?",
            textZh: "你好，我需要打印一些文件。商务中心在哪里？",
            casualVersion: "Hey, gotta print some stuff. Where's the business center?",
            commonMistake: {
              wrong: "I want to print some documents.",
              correct: "I need to print some documents.",
              explanation: '"I want" 听起来比较直接，不如 "I need" 或 "I\'d like" 礼貌或自然。',
            },
            formalityVariants: {
              casual: "Hey, gotta print some stuff. Where's the business center?",
              standard: "Hi, I need to print some documents. Where is the business center?",
              formal:
                "Good morning/afternoon, I require assistance with printing documents. Could you please direct me to the business center?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The business center is on the lobby level, just past the elevators on the right. It's open 24 hours. For printing, you can use our computers there or send files to our printer via email.",
            textZh:
              "商务中心在大堂层，过了电梯右边就是。24小时开放。打印的话，您可以用那里的电脑，也可以通过邮件把文件发送到我们的打印机。",
            keyPhrases: [
              { en: "business center", zh: "商务中心" },
              { en: "lobby level", zh: "大堂层" },
              { en: "send files via email", zh: "通过邮件发送文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just head to the business center next to the lobby. You can print wirelessly from your phone or laptop.",
                textZh: "去大堂旁边的商务中心就行。可以从手机或笔记本无线打印。",
                actionHint: "带好设备去商务中心",
                frequency: "common",
              },
            ],
            casualVersion:
              "Business center's on the lobby level, right past the elevators. Open 24/7. You can use their computers or just email your files to the printer.",
            formalityVariants: {
              casual:
                "Business center's on the lobby level, right past the elevators. Open 24/7. You can use their computers or just email your files to the printer.",
              standard:
                "The business center is on the lobby level, just past the elevators on the right. It's open 24 hours. For printing, you can use our computers there or send files to our printer via email.",
              formal:
                "Certainly, the business center is located on the lobby level, directly past the elevators on your right. It operates continuously, 24 hours a day. Regarding printing services, you may utilize the computers provided within the center, or alternatively, forward your documents to our printer via email.",
            },
          },
          {
            speaker: "you",
            textEn: "How much does printing cost? I need about 20 pages in color.",
            textZh: "打印多少钱？我需要打大概20页彩色的。",
            casualVersion: "What's printing cost? Need like 20 color pages.",
            commonMistake: {
              wrong: "How much is printing?",
              correct: "How much does printing cost?",
              explanation: '询问服务费用时，用 "How much does it cost?" 更地道。',
            },
            formalityVariants: {
              casual: "What's printing cost? Need like 20 color pages.",
              standard: "How much does printing cost? I need about 20 pages in color.",
              formal:
                "Could you please inform me of the cost for printing services? I anticipate requiring approximately 20 pages in color.",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Black and white is 25 cents per page, and color is 75 cents per page. So 20 color pages would be $15. We can also do double-sided printing to save paper if you'd like.",
            textZh: "黑白每页25美分，彩色每页75美分。所以20页彩色是15美元。如果您需要的话，也可以双面打印节省纸张。",
            keyPhrases: [
              { en: "per page", zh: "每页" },
              { en: "double-sided", zh: "双面" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Black and white is 25 cents a page, color is 75 cents. So 20 color pages would run you $15. Want double-sided to save paper?",
                textZh: "黑白每页25美分，彩色75美分。20页彩色就是15美元。要双面打印省纸吗？",
                actionHint: "选择打印方式",
                frequency: "common",
              },
              {
                textEn:
                  "Color printing is 75 cents per page. For 20 pages that'd be 15 dollars. We can do double-sided if you'd like.",
                textZh: "彩色打印每页75美分。20页就是15美元。需要的话可以双面打印。",
                actionHint: "确认打印数量",
                frequency: "common",
              },
            ],
            casualVersion:
              "B&W's 25 cents a page, color's 75. So 20 color pages'll run ya fifteen bucks. We can do double-sided too, if you wanna save paper.",
            formalityVariants: {
              casual:
                "B&W's 25 cents a page, color's 75. So 20 color pages'll run ya fifteen bucks. We can do double-sided too, if you wanna save paper.",
              standard:
                "Black and white is 25 cents per page, and color is 75 cents per page. So 20 color pages would be $15. We can also do double-sided printing to save paper if you'd like.",
              formal:
                "Black and white printing is priced at 25 cents per page, and color printing is 75 cents per page. Therefore, 20 color pages would amount to $15. Additionally, we offer double-sided printing as an option, should you wish to conserve paper.",
            },
          },
          {
            speaker: "you",
            textEn: "Single-sided is fine. Can I email the file? What's the printer email address?",
            textZh: "单面就好。可以发邮件吗？打印机的邮箱地址是什么？",
            casualVersion: "Single-sided's fine. Can I just email the file? What's the email for the printer?",
            commonMistake: {
              wrong: "The single-sided is fine.",
              correct: "Single-sided is fine.",
              explanation: '"Single-sided" 作为描述已经足够，不需要加 "the"。',
            },
            formalityVariants: {
              casual: "Single-sided's fine. Can I just email the file? What's the email for the printer?",
              standard: "Single-sided is fine. Can I email the file? What's the printer email address?",
              formal:
                "Single-sided printing will be acceptable. May I inquire if it is possible to email the file? And could you please provide the email address for the printer?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Sure, send your file to print@hotel-grand.com. Include your name and room number in the subject line. I'll have it ready for you in about 10 minutes. You can pick it up here at the front desk.",
            textZh:
              "可以，把文件发到 print@hotel-grand.com。主题里写上您的姓名和房间号。大概10分钟后就好了。可以到前台来取。",
            keyPhrases: [
              { en: "subject line", zh: "主题/标题栏" },
              { en: "pick it up", zh: "来取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just email it to print@hotel-grand.com — put your name and room number in the subject. Should be ready in about 10 minutes.",
                textZh: "发到print@hotel-grand.com就行——主题写上姓名和房间号。大约10分钟好。",
                actionHint: "发送邮件",
                frequency: "common",
              },
              {
                textEn:
                  "Send the file to our printer email and I'll have it printed for you. Come grab it in about 10 minutes.",
                textZh: "把文件发到我们的打印邮箱，我帮您打出来。大约10分钟来取。",
                actionHint: "记住邮箱地址",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, send it to print@hotel-grand.com. Put your name and room number in the subject. I'll have it ready in about 10. You can grab it here at the front desk.",
            formalityVariants: {
              casual:
                "Yeah, send it to print@hotel-grand.com. Put your name and room number in the subject. I'll have it ready in about 10. You can grab it here at the front desk.",
              standard:
                "Sure, send your file to print@hotel-grand.com. Include your name and room number in the subject line. I'll have it ready for you in about 10 minutes. You can pick it up here at the front desk.",
              formal:
                "Certainly, kindly forward your file to print@hotel-grand.com. Please ensure your name and room number are specified in the subject line. I will prepare it for you within approximately 10 minutes. You may retrieve it at the front desk.",
            },
          },
          {
            speaker: "you",
            textEn: "Do you also have a scanner and a fax machine?",
            textZh: "你们还有扫描仪和传真机吗？",
            casualVersion: "Got a scanner and fax machine too?",
            commonMistake: {
              wrong: "Do you have scanner and fax machine?",
              correct: "Do you have a scanner and a fax machine?",
              explanation: '在英语中，可数名词单数前通常需要冠词 "a"。',
            },
            formalityVariants: {
              casual: "Got a scanner and fax machine too?",
              standard: "Do you also have a scanner and a fax machine?",
              formal: "May I inquire if you also provide a scanner and a fax machine?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Yes, we have both. Scanning is free — you can scan to email or USB. Faxing is $2 per page for domestic and $5 per page for international. There's also a paper shredder if you need to dispose of sensitive documents.",
            textZh:
              "都有。扫描免费——可以扫描到邮箱或U盘。传真国内每页2美元，国际每页5美元。还有碎纸机，如果需要销毁敏感文件的话。",
            keyPhrases: [
              { en: "scanner", zh: "扫描仪" },
              { en: "fax machine", zh: "传真机" },
              { en: "paper shredder", zh: "碎纸机" },
              { en: "sensitive documents", zh: "敏感文件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we've got both. Scanning's free — to email or USB. Faxing is 2 bucks domestic, 5 international. There's a shredder too if you need it.",
                textZh: "都有。扫描免费——可以发邮箱或存U盘。传真国内2美元，国际5美元。也有碎纸机。",
                actionHint: "按需使用",
                frequency: "common",
              },
              {
                textEn:
                  "Scanner and fax, both available. Scanning won't cost you anything. Faxing is a couple bucks per page.",
                textZh: "扫描仪和传真机都有。扫描免费。传真每页几美元。",
                actionHint: "了解收费",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we got both. Scanning's free — you can scan to email or a USB stick. Faxing's two bucks a page for domestic, five for international. Plus, there's a shredder if you need to toss sensitive stuff.",
            formalityVariants: {
              casual:
                "Yeah, we got both. Scanning's free — you can scan to email or a USB stick. Faxing's two bucks a page for domestic, five for international. Plus, there's a shredder if you need to toss sensitive stuff.",
              standard:
                "Yes, we have both. Scanning is free — you can scan to email or USB. Faxing is $2 per page for domestic and $5 per page for international. There's also a paper shredder if you need to dispose of sensitive documents.",
              formal:
                "Yes, both services are available. Scanning is complimentary, with options to scan to email or a USB device. Faxing is priced at $2 per page for domestic transmissions and $5 per page for international transmissions. Furthermore, a paper shredder is provided for the secure disposal of sensitive documents.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Can I also borrow a laptop charger? I left mine in the room and I need to work down here.",
            textZh: "好的。能借一个笔记本充电器吗？我把充电器忘在房间了，想在这里工作。",
            casualVersion:
              "Awesome. Can I borrow a laptop charger too? Left mine in the room and gotta work down here.",
            commonMistake: {
              wrong: "I left my charger in the room.",
              correct: "I left mine in the room.",
              explanation: '用 "mine" 可以简洁地指代 "my charger"，避免重复。',
            },
            formalityVariants: {
              casual: "Awesome. Can I borrow a laptop charger too? Left mine in the room and gotta work down here.",
              standard:
                "Great. Can I also borrow a laptop charger? I left mine in the room and I need to work down here.",
              formal:
                "Excellent. Might I also inquire about borrowing a laptop charger? I seem to have inadvertently left my own in my room, and I require one to work here.",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "We have universal laptop chargers and phone chargers you can borrow. Just leave your room number with us. We also have power strips and adapters available for international plugs.",
            textZh: "我们有通用笔记本充电器和手机充电器可以借。留下房间号就行。我们还有排插和国际插头适配器。",
            keyPhrases: [
              { en: "universal charger", zh: "通用充电器" },
              { en: "power strips", zh: "排插" },
              { en: "adapters", zh: "适配器" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we've got chargers and power strips you can borrow. Just leave your room number. We have international adapters too.",
                textZh: "有的，充电器和排插都可以借。留下房间号就行。也有国际适配器。",
                actionHint: "借用充电器",
                frequency: "common",
              },
              {
                textEn:
                  "We have loaners for laptops and phones. Just tell me your room number. Need an international plug adapter too?",
                textZh: "笔记本和手机充电器都可以借。告诉我房间号就行。还需要国际插头适配器吗？",
                actionHint: "说明需求",
                frequency: "common",
              },
            ],
            casualVersion:
              "We've got universal laptop and phone chargers you can borrow. Just give us your room number. We also have power strips and adapters for international plugs.",
            formalityVariants: {
              casual:
                "We've got universal laptop and phone chargers you can borrow. Just give us your room number. We also have power strips and adapters for international plugs.",
              standard:
                "We have universal laptop chargers and phone chargers you can borrow. Just leave your room number with us. We also have power strips and adapters available for international plugs.",
              formal:
                "We do indeed provide universal laptop and phone chargers for temporary use. Kindly furnish us with your room number for record-keeping. Furthermore, we offer power strips and adapters for international plug configurations.",
            },
          },
        ],
      },
      {
        id: "meeting-rooms",
        titleZh: "会议室预订",
        titleEn: "Meeting Room Booking",
        description: "预订会议室、安排视频会议设备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to book a meeting room for tomorrow afternoon. Do you have any available?",
            textZh: "我需要预订明天下午的会议室。有空的吗？",
            casualVersion: "Need to book a meeting room for tomorrow afternoon. Got any open?",
            commonMistake: {
              wrong: "Do you have available?",
              correct: "Are there any available?",
              explanation: "直接问“Do you have available?”听起来不够自然，用 “Are there any available?” 更常见。",
            },
            formalityVariants: {
              casual: "Need a meeting room tomorrow afternoon. Got anything open?",
              standard: "I need to book a meeting room for tomorrow afternoon. Do you have any available?",
              formal: "I would like to reserve a conference room for tomorrow afternoon. Are there any availabilities?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Let me check. We have three meeting rooms. The small one seats 4, the medium seats 8, and the large one seats 20. How many attendees are you expecting?",
            textZh: "让我查一下。我们有三间会议室。小的坐4人，中的坐8人，大的坐20人。您预计几位与会者？",
            casualVersion: "Lemme check. Got three rooms: small fits 4, medium 8, large 20. How many people you expecting?",
            formalityVariants: {
              casual: "Hang on, I'll check. We've got three rooms: small (4 people), medium (8), large (20). How many folks are you expecting?",
              standard: "Let me check. We have three meeting rooms. The small one seats 4, the medium seats 8, and the large one seats 20. How many attendees are you expecting?",
              formal: "Allow me a moment to verify. We offer three distinct conference rooms: our small room accommodates four individuals, the medium room is suitable for eight, and the large room can host up to twenty. May I inquire as to the estimated number of attendees for your event?",
            },
            keyPhrases: [
              { en: "meeting rooms", zh: "会议室" },
              { en: "seats", zh: "可坐（几人）" },
              { en: "attendees", zh: "与会者" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got three rooms — small fits 4, medium fits 8, large fits 20. How many people are you expecting?",
                textZh: "我们有三间——小的坐4人，中的坐8人，大的坐20人。您大概几个人？",
                actionHint: "说明人数",
                frequency: "common",
              },
              {
                textEn: "Let me check... We have rooms for 4, 8, or 20 people. What size do you need?",
                textZh: "我看看……有4人、8人和20人的会议室。您需要多大的？",
                actionHint: "选择合适大小",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Just 3 people in person, but I also need to set up a video conference with our overseas team.",
            textZh: "现场3个人，但我还需要和海外团队开视频会议。",
            casualVersion: "Just 3 in person, but also gotta set up a video call with the overseas team.",
            commonMistake: {
              wrong: "Only 3 people in person.",
              correct: "Just 3 people in person.",
              explanation: "在人数不多时，用 \"just\" 比 \"only\" 更自然。",
            },
            formalityVariants: {
              casual: "Only 3 here, but I also need to do a video call with the team abroad.",
              standard: "Just 3 people in person, but I also need to set up a video conference with our overseas team.",
              formal: "There will be three individuals present physically; however, I will also require facilities to conduct a video conference with our international team.",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "The small meeting room would work perfectly. It's equipped with a 55-inch display, a webcam, speaker system, and high-speed WiFi. It supports Zoom, Teams, and Google Meet. The rate is $50 per hour or $180 for a half day.",
            textZh:
              "小会议室就很合适。配有55英寸显示屏、摄像头、音响系统和高速WiFi。支持Zoom、Teams和Google Meet。费用是每小时50美元或半天180美元。",
            casualVersion: "Small room's perfect. Got a 55-inch screen, webcam, speakers, fast WiFi. Works with Zoom, Teams, Google Meet. $50 an hour, or $180 for half a day.",
            formalityVariants: {
              casual: "Yeah, small room's ideal. Comes with a 55-inch screen, camera, speakers, and good WiFi. Plus it's compatible with Zoom, Teams, and Google Meet. It's $50 an hour, or $180 for a half-day.",
              standard: "The small meeting room would work perfectly. It's equipped with a 55-inch display, a webcam, speaker system, and high-speed WiFi. It supports Zoom, Teams, and Google Meet. The rate is $50 per hour or $180 for a half day.",
              formal: "The small meeting room would be entirely suitable for your requirements. It is comprehensively equipped with a 55-inch display, a high-definition webcam, an integrated speaker system, and high-speed wireless internet access. Furthermore, it offers full compatibility with Zoom, Microsoft Teams, and Google Meet. The pricing structure is $50 per hour, or a discounted rate of $180 for a half-day booking.",
            },
            keyPhrases: [
              { en: "equipped with", zh: "配备" },
              { en: "speaker system", zh: "音响系统" },
              { en: "high-speed WiFi", zh: "高速WiFi" },
              { en: "per hour", zh: "每小时" },
              { en: "half day", zh: "半天" },
            ],
            vocabNotes: {
              "equipped with": {
                meaningInContext: "在这句话里表示：房间里已经安装/配备了这些设备",
                similarUsage: "类似用法：The room is equipped with a projector.（房间配有投影仪）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The small room should work. It's got a big screen, webcam, speakers, and fast WiFi. Supports Zoom, Teams, whatever you use. $50 an hour or $180 for half a day.",
                textZh: "小会议室就够了。有大屏幕、摄像头、音响和快速WiFi。支持Zoom、Teams什么的。每小时50或半天180。",
                actionHint: "选择计费方式",
                frequency: "common",
              },
              {
                textEn:
                  "Small room's perfect for 3 people plus video. Everything's set up for virtual meetings. It's 50 an hour or 180 for a half day.",
                textZh: "小会议室3个人加视频刚好。虚拟会议设备都有。每小时50或半天180。",
                actionHint: "确认预订",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the half-day rate. Can I also get coffee and water set up for the meeting?",
            textZh: "我选半天的。可以帮会议准备咖啡和水吗？",
            casualVersion: "I'll do the half-day. Can I get coffee and water for the meeting too?",
            commonMistake: {
              wrong: "I choose the half-day rate.",
              correct: "I'll take the half-day rate.",
              explanation: "在选择服务时，用 \"I'll take\" 或 \"I'll go with\" 更自然。",
            },
            formalityVariants: {
              casual: "Half-day works. Could you also get coffee and water ready for the meeting?",
              standard: "I'll take the half-day rate. Can I also get coffee and water set up for the meeting?",
              formal: "I would prefer to proceed with the half-day rate. Furthermore, may I request that coffee and water be provided for the meeting participants?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Absolutely. Our standard refreshment package includes coffee, tea, water, and pastries for $8 per person. We can also arrange lunch if your meeting runs through midday. Would you like me to send you the catering menu?",
            textZh:
              "当然可以。我们的标准茶歇套餐包括咖啡、茶、水和糕点，每人8美元。如果会议开到中午，我们也可以安排午餐。要我发餐饮菜单给您吗？",
            casualVersion: "Yep. Standard package is coffee, tea, water, pastries for $8 a head. Can do lunch too if you're going through midday. Wanna see the catering menu?",
            formalityVariants: {
              casual: "No problem. Our basic package has coffee, tea, water, and pastries for $8 each. We can also sort out lunch if the meeting goes past noon. Want me to send over the menu?",
              standard: "Absolutely. Our standard refreshment package includes coffee, tea, water, and pastries for $8 per person. We can also arrange lunch if your meeting runs through midday. Would you like me to send you the catering menu?",
              formal: "Certainly. Our standard refreshment package, priced at $8 per attendee, comprises coffee, an assortment of teas, bottled water, and a selection of pastries. Should your meeting extend into the midday period, we are also able to arrange lunch provisions. Would you be interested in receiving our catering menu for review?",
            },
            keyPhrases: [
              { en: "refreshment package", zh: "茶歇套餐" },
              { en: "pastries", zh: "糕点" },
              { en: "catering menu", zh: "餐饮菜单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! We can set up coffee, tea, water, and pastries for 8 bucks a person. If the meeting goes through lunch, I can get food brought in too.",
                textZh: "当然！可以准备咖啡、茶、水和糕点，每人8美元。如果会开到中午也可以安排午餐。",
                actionHint: "选择茶歇或午餐",
                frequency: "common",
              },
              {
                textEn:
                  "Of course. The refreshment package is $8 per head — coffee, tea, snacks. Want me to send over the lunch menu as well?",
                textZh: "没问题。茶歇套餐每人8美元——咖啡、茶、点心。要我发午餐菜单吗？",
                actionHint: "决定是否需要午餐",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes please, send it to my email. Also, will there be a technician available in case we have issues with the video setup?",
            textZh: "好的，发到我邮箱。另外，如果视频设备有问题，有技术人员吗？",
            casualVersion: "Yeah, send it to my email. And, will there be a tech around if we have trouble with the video?",
            commonMistake: {
              wrong: "If we have issues with the video setup, will there be a technician?",
              correct: "Will there be a technician available in case we have issues with the video setup?",
              explanation: "用 \"in case...\" 或 \"if...\" 跟着疑问句更自然。",
            },
            formalityVariants: {
              casual: "Yeah, email it over. Also, is there a tech on hand if the video stuff acts up?",
              standard: "Yes please, send it to my email. Also, will there be a technician available in case we have issues with the video setup?",
              formal: "Yes, kindly forward that to my email address. Furthermore, will a technical support specialist be available should we encounter any difficulties with the video conferencing equipment?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Our IT support is available from 8 AM to 6 PM. I'd recommend arriving 15 minutes early to test the equipment. If you run into any issues, just dial extension 300 and someone will come right away.",
            textZh:
              "我们的IT支持工作时间是早上8点到下午6点。建议提前15分钟到，测试一下设备。如果遇到问题，拨分机300，会有人马上来。",
            casualVersion: "IT support's here from 8 to 6. Recommend showing up 15 mins early to test the gear. If anything's up, just dial 300 and someone'll be right there.",
            formalityVariants: {
              casual: "IT's around 8 AM to 6 PM. I'd say get here 15 minutes early to test things out. If there's any trouble, just call 300 and we'll send someone over ASAP.",
              standard: "Our IT support is available from 8 AM to 6 PM. I'd recommend arriving 15 minutes early to test the equipment. If you run into any issues, just dial extension 300 and someone will come right away.",
              formal: "Our dedicated IT support team operates from 8 AM to 6 PM. I would advise an arrival time 15 minutes prior to your meeting to allow for a thorough equipment test. Should you encounter any operational difficulties, please dial extension 300, and assistance will be dispatched immediately.",
            },
            keyPhrases: [
              { en: "IT support", zh: "IT支持/技术支持" },
              { en: "test the equipment", zh: "测试设备" },
              { en: "dial extension", zh: "拨分机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Our tech team is available 8 to 6. I'd get there 15 minutes early to test things out. If anything goes wrong, just dial 300.",
                textZh: "技术团队8点到6点在。建议提前15分钟去测试设备。有问题拨300就行。",
                actionHint: "记住分机号",
                frequency: "common",
              },
              {
                textEn:
                  "IT support's on hand from 8 AM to 6 PM. Come early to make sure everything works. Extension 300 if you need help.",
                textZh: "IT支持早8到晚6在岗。早点来确保一切正常。需要帮忙拨分机300。",
                actionHint: "提前测试",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get the meeting room bill charged to my company's corporate account?",
            textZh: "会议室费用可以走公司的企业账户吗？",
            casualVersion: "Can I just charge the meeting room to my company's account?",
            commonMistake: {
              wrong: "Can I get the meeting room bill charged on my company's corporate account?",
              correct: "Can I get the meeting room bill charged to my company's corporate account?",
              explanation: "费用通常是 \"charged to\" 一个账户，而不是 \"on\" 一个账户。",
            },
            formalityVariants: {
              casual: "Can I charge the room to my company's account?",
              standard: "Can I get the meeting room bill charged to my company's corporate account?",
              formal: "Would it be possible to have the charges for the meeting room allocated directly to my company's corporate account?",
            },
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn:
              "Yes, if your company has a corporate account with us, we can bill it directly. Otherwise, I can provide a separate invoice with a detailed breakdown for your expense report. Just let me know what you need.",
            textZh:
              "可以，如果您公司在我们这里有企业账户，可以直接挂账。否则我可以提供一张单独的发票，附详细明细，方便您报销。您需要哪种方式？",
            casualVersion: "Yeah, if your company's got an account with us, we can bill 'em directly. Otherwise, I can get you a separate invoice with all the details for your expense report. Just tell me what you need.",
            formalityVariants: {
              casual: "Sure, if your company has an account here, we'll just bill them. If not, I can give you a separate invoice with all the info for your expenses. Just tell me what's best.",
              standard: "Yes, if your company has a corporate account with us, we can bill it directly. Otherwise, I can provide a separate invoice with a detailed breakdown for your expense report. Just let me know what you need.",
              formal: "Certainly, if your company maintains an established corporate account with our organization, we are able to process the billing directly. Alternatively, I can furnish a separate itemized invoice detailing all expenditures for the purpose of your expense report. Please advise on your preferred method.",
            },
            keyPhrases: [
              { en: "corporate account", zh: "企业账户" },
              { en: "invoice", zh: "发票" },
              { en: "detailed breakdown", zh: "详细明细" },
              { en: "expense report", zh: "报销单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If your company has an account with us, I can bill it directly. Otherwise, I'll give you a separate invoice with a full breakdown for your expense report.",
                textZh: "如果公司有我们的账户可以直接挂账。不然我给您开张单独发票，附详细明细方便报销。",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "We can do corporate billing if your company is set up with us. If not, I'll make sure you get a proper invoice for reimbursement.",
                textZh: "公司在我们这有账户的话可以直接走企业账。没有的话我给您开正式发票报销用。",
                actionHint: "确认公司账户",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 酒店停车 ====================
  {
    id: "hotel-parking",
    category: "hotel",
    titleZh: "酒店停车",
    titleEn: "Hotel Parking",
    description: "酒店代客泊车、自助停车和电动车充电服务",
    otherRole: "泊车服务员/前台",
    otherRoleIcon: "car",
    flows: [
      {
        id: "valet-parking",
        titleZh: "代客泊车",
        titleEn: "Valet Parking",
        description: "使用酒店的代客泊车服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Welcome to the Grand Hotel! Will you be using our valet parking service today?",
            textZh: "欢迎来到格兰酒店！今天要使用代客泊车服务吗？",
            keyPhrases: [{ en: "valet parking", zh: "代客泊车" }],
            alternativeExpressions: [
              {
                textEn: "Good evening! Valet or self-park today?",
                textZh: "晚上好！代客泊车还是自助停车？",
                actionHint: "选择停车方式",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome to the Grand Hotel! Goin' for valet today?",
            formalityVariants: {
              casual: "Hey, welcome! Valet today?",
              standard: "Welcome to the Grand Hotel! Will you be using our valet parking service today?",
              formal:
                "A warm welcome to the Grand Hotel. May I inquire if you will be utilizing our esteemed valet parking service this afternoon?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. How much is valet parking?",
            textZh: "是的。代客泊车多少钱？",
            casualVersion: "Yeah, how much is valet?",
            commonMistake: {
              wrong: "Yes, please. Valet parking how much money?",
              correct: "Yes, please. How much is valet parking?",
              explanation: "“how much money” 是中式说法，英语习惯直接问 “how much” 即可。",
            },
            formalityVariants: {
              casual: "Yeah, how much is valet?",
              standard: "Yes, please. How much is valet parking?",
              formal: "Yes, I would. Could you kindly inform me of the cost for the valet parking service?",
            },
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn:
              "Valet parking is $40 per night for hotel guests, with unlimited in-and-out privileges. I'll give you a claim ticket — just bring it to the front desk or call us when you need your car.",
            textZh:
              "住店客人代客泊车每晚40美元，不限进出次数。我给您一张取车凭证——需要取车时拿着凭证去前台或打电话给我们。",
            commonMistake: {
              wrong: "Valet parking is 40 dollars one night.",
              correct: "Valet parking is $40 per night.",
              explanation: "“一晚”常用“per night”而非“one night”。",
            },
            keyPhrases: [
              { en: "per night", zh: "每晚" },
              { en: "in-and-out privileges", zh: "不限进出" },
              { en: "claim ticket", zh: "取车凭证" },
            ],
            vocabNotes: {
              "claim ticket": {
                meaningInContext: "在这句话里表示：取车用的凭证小票，类似寄存凭证",
                similarUsage:
                  "类似用法：Don't lose the claim ticket or it'll take longer to find your car.（别弄丢取车票，不然找车要更久）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "It's $40 a night. You can come and go as much as you want. Here's your ticket — hang onto it.",
                textZh: "每晚40美元。随便进出。这是您的凭证——收好。",
                actionHint: "保管好取车凭证",
                frequency: "common",
              },
              {
                textEn: "For hotel guests it's 40 bucks a night, unlimited in and out. I'll hand you a claim ticket.",
                textZh: "住客每晚40美元，不限进出次数。我给您一张取车票。",
                actionHint: "拿好取车票",
                frequency: "common",
              },
            ],
            casualVersion:
              "Valet's 40 bucks a night for hotel guests, unlimited in-and-out. Here's your ticket—just bring it to the front desk or call when you need your car.",
            formalityVariants: {
              casual:
                "Valet's 40 a night for guests, unlimited in-and-out. Here's your ticket, bring it to the desk or call when you need your car.",
              standard:
                "Valet parking is $40 per night for hotel guests, with unlimited in-and-out privileges. I'll give you a claim ticket — just bring it to the front desk or call us when you need your car.",
              formal:
                "For our esteemed hotel guests, the valet parking service is offered at $40 per evening, inclusive of unlimited in-and-out access. I shall provide you with a claim ticket; kindly present it to the front desk or contact us when you require your vehicle.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. I have some bags in the trunk — can you help me with those first?",
            textZh: "好的。后备箱里有一些袋子——能先帮我拿出来吗？",
            casualVersion: "Sounds good. Got some bags in the trunk—can you help me with 'em first?",
            commonMistake: {
              wrong: "Sounds good. I have some bags in the trunk. Can you help me first?",
              correct: "Sounds good. I have some bags in the trunk — can you help me with those first?",
              explanation: "帮助某人做某事要用 “help someone with something”。",
            },
            formalityVariants: {
              casual: "Cool. Got bags in the trunk, can you help me with 'em first?",
              standard: "Sounds good. I have some bags in the trunk — can you help me with those first?",
              formal:
                "That sounds perfectly acceptable. I have several pieces of luggage in the vehicle's trunk; might I impose upon you to assist me with them initially?",
            },
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn:
              "Of course! Let me pop the trunk... I'll get a luggage cart. We'll bring everything to the front desk for you. Is there anything valuable you'd like to keep with you?",
            textZh: "当然！让我打开后备箱……我去拿行李推车。我们会把所有东西送到前台。有什么贵重物品需要自己随身带吗？",
            alternativeExpressions: [
              {
                textEn: "Sure thing! Trunk's open... let me grab a cart. Anything you wanna keep with you?",
                textZh: "没问题！后备箱开了……我去拿推车。有什么您想自己拿着的吗？",
                actionHint: "告诉对方随身带的东西",
                frequency: "common",
              },
              {
                textEn:
                  "Got it! I'll wheel everything inside for you. Just let me know if there's anything fragile in there.",
                textZh: "收到！我帮您全推进去。告诉我里面有没有易碎的东西。",
                actionHint: "指出贵重物品自己带",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "pop the trunk", zh: "打开后备箱" },
              { en: "luggage cart", zh: "行李推车" },
              { en: "valuable", zh: "贵重物品" },
            ],
            casualVersion:
              "Sure! Lemme pop the trunk... I'll grab a cart. We'll bring everything to the front desk. Anything valuable you wanna keep with you?",
            formalityVariants: {
              casual:
                "Yep! I'll pop the trunk and grab a cart. We'll take everything to the desk. Anything valuable you want to hold onto?",
              standard:
                "Of course! Let me pop the trunk... I'll get a luggage cart. We'll bring everything to the front desk for you. Is there anything valuable you'd like to keep with you?",
              formal:
                "Certainly, my pleasure! Allow me to open the trunk. I shall then retrieve a luggage cart. We will ensure all items are delivered to the front desk for your convenience. May I inquire if there are any valuables you wish to retain in your personal possession?",
            },
          },
          {
            speaker: "you",
            textEn: "Just my laptop bag, I'll take that. How long does it take to get my car when I need it?",
            textZh: "就电脑包，我自己拿。需要用车的话多久能取到？",
            casualVersion: "Just my laptop bag, I'll grab that. How long's it take to get my car when I need it?",
            commonMistake: {
              wrong: "Just my laptop bag, I will take it. My car how long to get when I need it?",
              correct: "Just my laptop bag, I'll take that. How long does it take to get my car when I need it?",
              explanation: "“take that” 更自然。问时间用 “how long does it take”。",
            },
            formalityVariants: {
              casual: "Just my laptop bag, I'll take it. How long for my car when I need it?",
              standard: "Just my laptop bag, I'll take that. How long does it take to get my car when I need it?",
              formal:
                "Only my laptop bag, which I shall carry personally. Approximately how much time is required to retrieve my vehicle upon request?",
            },
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn:
              "Usually about 10 to 15 minutes. If you know in advance, you can call us 15 minutes beforehand and we'll have it waiting for you at the entrance. Here's your claim ticket and the valet phone number.",
            textZh:
              "通常10到15分钟。如果提前知道的话，可以提前15分钟打电话给我们，车会在入口等您。这是您的取车凭证和泊车服务电话。",
            alternativeExpressions: [
              {
                textEn: "Give us about 10 minutes. Pro tip — call ahead and your car will be ready when you walk out.",
                textZh: "给我们大约10分钟。小窍门——提前打电话，出来车就准备好了。",
                actionHint: "保管好取车凭证和电话",
                frequency: "common",
              },
              {
                textEn:
                  "Anywhere from 10 to 15. Give us a heads-up and we'll have it pulled around before you come down.",
                textZh: "大概10到15分钟。提前通知我们，下来之前车就停好了。",
                actionHint: "记住泊车服务电话",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "in advance", zh: "提前" },
              { en: "beforehand", zh: "事先" },
            ],
            casualVersion:
              "Usually 'bout 10-15. If you know ahead of time, just call us 15 mins before and we'll have it waiting at the entrance. Here's your ticket and the valet's number.",
            formalityVariants: {
              casual:
                "About 10-15 mins. If you know you'll need it, call 15 mins early and we'll have it ready. Here's your ticket and the number.",
              standard:
                "Usually about 10 to 15 minutes. If you know in advance, you can call us 15 minutes beforehand and we'll have it waiting for you at the entrance. Here's your claim ticket and the valet phone number.",
              formal:
                "Typically, the retrieval process requires approximately 10 to 15 minutes. Should you anticipate your departure, a prior notification of 15 minutes would allow us to ensure your vehicle is awaiting you at the main entrance. Please accept this claim ticket and the dedicated valet service contact number.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Should I tip now or when I pick up the car?",
            textZh: "好的，谢谢。小费现在给还是取车时给？",
            commonMistake: {
              wrong: "Should I give tip now or when I pick up the car?",
              correct: "Should I tip now or when I pick up the car?",
              explanation: "“give tip” 是中式英语，直接用 “tip” 作动词更自然。",
            },
            culturalNote: "在美国，代客泊车通常给2-5美元小费。可以取车时给，也可以存取各给一次。",
            casualVersion: "Cool, thanks. Should I tip now or when I grab the car?",
            formalityVariants: {
              casual: "Cool, thanks. Tip now or when I pick up the car?",
              standard: "Great, thank you. Should I tip now or when I pick up the car?",
              formal:
                "Excellent, thank you. Would it be more appropriate to offer the gratuity at this moment, or upon the retrieval of my vehicle?",
            },
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Either is fine! Most guests tip when they pick up the car. Thank you for asking. Enjoy your stay!",
            textZh: "都行！大多数客人取车时给。感谢您的询问。祝您住得愉快！",
            alternativeExpressions: [
              {
                textEn: "Totally up to you! Most folks tip on pickup. Have a great stay!",
                textZh: "完全看您！大部分人取车时给。祝住得开心！",
                actionHint: "取车时记得准备小费",
                frequency: "common",
              },
              {
                textEn: "Either way works. No pressure at all. Welcome to the hotel!",
                textZh: "怎么都行。完全没压力。欢迎入住！",
                actionHint: "不必纠结，取车时给即可",
                frequency: "common",
              },
            ],
            casualVersion:
              "Either's fine! Most people tip when they get their car. Thanks for askin'. Enjoy your stay!",
            commonMistake: {
              wrong: "Anytime is fine.",
              correct: "Either is fine!",
              explanation: "回答两者选一时，用 “Either is fine” 或 “Either one is fine” 最准确。",
            },
            formalityVariants: {
              casual: "Either way works! Most tip when they pick up. Thanks for asking! Enjoy!",
              standard:
                "Either is fine! Most guests tip when they pick up the car. Thank you for asking. Enjoy your stay!",
              formal:
                "Both options are perfectly acceptable. Typically, the majority of our guests prefer to provide their gratuity upon the collection of their vehicle. I appreciate your inquiry. We wish you a most enjoyable stay with us!",
            },
          },
        ],
      },
      {
        id: "self-park-ev",
        titleZh: "自助停车和电动车充电",
        titleEn: "Self-Parking & EV Charging",
        description: "自助停车场、电动车充电桩使用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd prefer to park myself. Where is the self-parking garage?",
            textZh: "我想自己停车。自助停车场在哪里？",
            casualVersion: "Wanna park myself. Where's the self-parking garage?",
            commonMistake: {
              wrong: "I want to park myself.",
              correct: "I'd prefer to park myself.",
              explanation: "直接说 “I want” 听起来不够礼貌，尤其在提出请求时。“I'd prefer” 更委婉。",
            },
            formalityVariants: {
              casual: "Wanna park myself. Where's the garage?",
              standard: "I'd prefer to park myself. Where is the self-parking garage?",
              formal:
                "I would prefer to utilize self-parking facilities. Could you kindly direct me to the self-parking garage?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The self-parking garage is behind the hotel. Take the first right after the main entrance. Self-parking is $25 per night, compared to $40 for valet. You'll use your room key to access the garage.",
            textZh:
              "自助停车场在酒店后面。过了正门第一个右转。自助停车每晚25美元，相比代客泊车的40美元。用房卡进出停车场。",
            commonMistake: {
              wrong: "Self-parking is 25 dollars one night.",
              correct: "Self-parking is $25 per night.",
              explanation: "“一晚”常用“per night”而非“one night”。",
            },
            casualVersion: "Self-parking garage is behind the hotel. First right after the entrance. It's $25 a night, valet's $40. You use your room key to get in and out.",
            formalityVariants: {
              casual: "Self-parking's behind the hotel. First right past the entrance. $25 a night, valet's $40. Use your room key.",
              standard: "The self-parking garage is behind the hotel. Take the first right after the main entrance. Self-parking is $25 per night, compared to $40 for valet. You can use your room key card to enter and exit the parking lot.",
              formal: "The self-parking facility is situated directly behind the hotel structure. Kindly take the initial right turn subsequent to the main entrance. Self-parking is offered at $25 per night, in contrast to the $40 charge for valet services. Your room key card will grant you access to the garage.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Self-park is around back — take a right past the front door. $25 a night. Just swipe your room key.",
                textZh: "自助停车在后面——过了正门右转。每晚25美元。刷房卡进入。",
                actionHint: "记住停车场位置和费用",
                frequency: "common",
              },
              {
                textEn:
                  "The garage is right behind the building. $25 versus $40 for valet. Your room key gets you in and out.",
                textZh: "车库就在楼后面。25美元，代客泊车40。房卡可以进出。",
                actionHint: "用房卡进出停车场",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "self-parking garage", zh: "自助停车场" },
              { en: "compared to", zh: "相比" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have an electric car. Do you have EV charging stations?",
            textZh: "我开的是电动车。你们有电动车充电桩吗？",
            commonMistake: {
              wrong: "I am electric car. Do you have charging piles?",
              correct: "I have an electric car. Do you have EV charging stations?",
              explanation: "“I have an electric car” 更自然。“charging station” 是更地道的说法。",
            },
            casualVersion: "Got an electric car. Ya got EV chargers?",
            formalityVariants: {
              casual: "Got an EV. Chargers?",
              standard: "I have an electric car. Do you have EV charging stations?",
              formal: "I operate an electric vehicle. Do you provide electric vehicle charging stations on the premises?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, we have 6 EV charging stations on Level B1 of the parking garage. They're Tesla and CCS compatible. Charging is complimentary for hotel guests — just plug in and it starts automatically when it detects your car.",
            textZh:
              "有，停车场B1层有6个电动车充电桩。兼容特斯拉和CCS接口。住店客人免费充电——插上就行，检测到车辆后自动开始充电。",
            commonMistake: {
              wrong: "We have 6 EV charge stations.",
              correct: "We have 6 EV charging stations.",
              explanation: "“充电站”是“charging stations”，不是“charge stations”。",
            },
            casualVersion: "Yeah, we got 6 EV chargers on B1 of the garage. They work with Tesla and CCS. Free for guests — just plug it in, and it charges automatically.",
            formalityVariants: {
              casual: "Yep, 6 EV chargers on B1. Tesla/CCS compatible. Free for guests, just plug in.",
              standard: "Yes, we have 6 EV charging stations on Level B1 of the parking garage. They are compatible with Tesla and CCS connectors. Charging is free for hotel guests – just plug in, and it will automatically start charging once the vehicle is detected.",
              formal: "Indeed, we provide six electric vehicle charging stations located on Level B1 of our parking garage. These stations are compatible with both Tesla and CCS connectors. Complimentary charging is available for our esteemed hotel guests; simply plug in, and the charging process will commence automatically upon vehicle detection.",
            },
            keyPhrases: [
              { en: "EV charging stations", zh: "电动车充电桩" },
              { en: "compatible", zh: "兼容的" },
              { en: "plug in", zh: "插上" },
              { en: "automatically", zh: "自动" },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got Level 2 chargers in the garage. They're free for guests. Just use any open station.",
                textZh: "车库里有二级充电桩。住客免费。找空的充电位用就行。",
                actionHint: "去B1层找空充电位",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if all the charging spots are taken?",
            textZh: "如果充电位都满了怎么办？",
            commonMistake: {
              wrong: "All charging spots are taken, what to do?",
              correct: "What if all the charging spots are taken?",
              explanation: "疑问句结构，不能省去“what if”或“what should I do if”。",
            },
            casualVersion: "What if all the chargers are taken?",
            formalityVariants: {
              casual: "What if they're all taken?",
              standard: "What if all the charging spots are taken?",
              formal: "In the event that all charging stations are currently occupied, what is the protocol?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You can put your name on the waiting list at the front desk. We'll text you when a spot opens up. There's also a public charging station about half a mile from the hotel on Oak Street, if you need a charge urgently.",
            textZh:
              "可以在前台登记等候名单。有空位时我们会发短信通知您。如果急需充电，酒店半英里外的橡树街也有一个公共充电站。",
            commonMistake: {
              wrong: "You can register your name on the waiting list.",
              correct: "You can put your name on the waiting list.",
              explanation: "“登记”在英文中常用“put your name on”而非“register your name on”。",
            },
            casualVersion: "You can put your name on the waitlist at the front desk. We'll text ya when a spot opens up. If you really need a charge, there's a public station on Oak Street, half a mile away.",
            formalityVariants: {
              casual: "Put your name on the list at the desk. We'll text you when it's free. Need one fast? Public station on Oak Street, half-mile out.",
              standard: "You can put your name on the waiting list at the front desk. We will send you a text message when a spot becomes available. If you urgently need to charge, there is also a public charging station on Oak Street, half a mile from the hotel.",
              formal: "You may register your name on the waiting list at the front desk. We will notify you via text message once a charging station becomes available. For immediate charging requirements, a public charging facility is located on Oak Street, approximately half a mile from the hotel.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Just leave your name at the desk and we'll text you when one frees up. There's also a public charger down the block if you're in a rush.",
                textZh: "在前台留个名字，空了发短信通知您。着急的话附近也有公共充电桩。",
                actionHint: "在前台登记等候",
                frequency: "common",
              },
              {
                textEn:
                  "We can add you to the waitlist. Usually doesn't take too long. Worst case, there's a public charger about half a mile away.",
                textZh: "我们可以把您加到等候名单。通常不用等太久。最坏情况半英里外有公共充电桩。",
                actionHint: "登记等候或去附近充电",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "waiting list", zh: "等候名单" },
              { en: "text you", zh: "发短信通知" },
              { en: "public charging station", zh: "公共充电站" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to fully charge using your chargers?",
            textZh: "用你们的充电桩充满需要多久？",
            commonMistake: {
              wrong: "How long to full charge?",
              correct: "How long does it take to fully charge?",
              explanation: "询问时间需要完整的句型“How long does it take to...”。",
            },
            casualVersion: "How long to fully charge using your chargers?",
            formalityVariants: {
              casual: "How long to full charge?",
              standard: "How long does it take to fully charge using your chargers?",
              formal: "What is the estimated duration required for a complete charge utilizing your charging apparatus?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Our Level 2 chargers add about 25 to 30 miles of range per hour. So for a full charge from low battery, you're looking at about 8 to 10 hours — perfect for an overnight charge. If you need faster charging, there's a DC fast charger at the shopping mall 2 miles away.",
            textZh:
              "我们的二级充电桩每小时大约增加25到30英里续航。所以从低电量充满大概需要8到10小时——非常适合过夜充电。如果需要快充，两英里外的购物中心有直流快充桩。",
            commonMistake: {
              wrong: "Our chargers add 25 to 30 miles every hour.",
              correct: "Our Level 2 chargers add about 25 to 30 miles of range per hour.",
              explanation: "“每小时”用“per hour”更地道，表达续航增加用“range”。",
            },
            casualVersion: "Our Level 2s add about 25-30 miles an hour. So a full charge from low is like 8-10 hours – perfect for overnight. Need a fast charge? There are DC fast chargers at the mall two miles away.",
            formalityVariants: {
              casual: "Our Level 2s give 25-30 miles/hour. So full charge from low is 8-10 hours, good for overnight. Fast charge? Mall's got DC fast chargers, two miles out.",
              standard: "Our Level 2 chargers add about 25 to 30 miles of range per hour. So for a full charge from low battery, you'll need about 8 to 10 hours – perfect for overnight charging. If you need a fast charge, there are DC fast chargers at the shopping mall two miles away.",
              formal: "Our Level 2 charging units provide an approximate range addition of 25 to 30 miles per hour. Therefore, a complete charge from a low battery state would typically require 8 to 10 hours, which is ideal for overnight charging. Should you require rapid charging, DC fast charging stations are available at the shopping mall located two miles distant.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "You'll get about 25-30 miles per hour. Plug in at night, full by morning. Need something faster? There's a DC fast charger at the mall nearby.",
                textZh: "每小时大约25-30英里。晚上插上早上就满了。要更快的？附近商场有快充。",
                actionHint: "适合过夜充电",
                frequency: "common",
              },
              {
                textEn:
                  "They're Level 2, so figure 8 to 10 hours for a full charge. Perfect for overnight. There's a fast charger a couple miles away if you need it.",
                textZh: "二级充电桩，充满大约8到10小时。过夜正好。几英里外有快充。",
                actionHint: "插上过夜即可",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "range per hour", zh: "每小时续航里程" },
              { en: "overnight charge", zh: "过夜充电" },
              { en: "DC fast charger", zh: "直流快充桩" },
            ],
            vocabNotes: {
              "Level 2 chargers": {
                meaningInContext: "在这句话里表示：二级充电桩，功率中等（约7-19kW），适合在酒店或家里过夜充电",
                similarUsage: "类似用法：Most home chargers are Level 2.（大多数家用充电桩是二级的）",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Overnight charging works for me. One more question — is the parking garage secure?",
            textZh: "过夜充电对我来说可以。再问一个——停车场安全吗？",
            commonMistake: {
              wrong: "Parking garage safe?",
              correct: "Is the parking garage secure?",
              explanation: "疑问句需要完整的动词和主语，表达“安全”用“secure”更专业。",
            },
            casualVersion: "Overnight charging's fine. Quick question — is the garage secure?",
            formalityVariants: {
              casual: "Overnight's good. Garage secure?",
              standard: "Overnight charging works for me. One more question — is the parking garage secure?",
              formal: "Overnight charging is entirely suitable for my needs. I have one further inquiry: is the parking garage secured?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely. The garage has 24-hour security cameras, a security guard on patrol, and key-card-only access. It's well lit and we've never had any incidents. Your car will be perfectly safe.",
            textZh:
              "绝对安全。车库有24小时监控摄像头、保安巡逻和刷卡进出。灯光充足，从未发生过任何事故。您的车会非常安全。",
            commonMistake: {
              wrong: "The garage has 24-hour security camera.",
              correct: "The garage has 24-hour security cameras.",
              explanation: "“摄像头”是可数名词，有多个时需用复数形式“cameras”。",
            },
            casualVersion: "Totally. Garage has 24/7 cameras, a guard patrolling, and you need a key card to get in. It's well-lit, and we've never had issues. Your car'll be super safe.",
            formalityVariants: {
              casual: "Yep. 24/7 cameras, guard, key-card access. Well-lit, no issues. Your car's safe.",
              standard: "Absolutely. The garage has 24-hour security cameras, a security guard on patrol, and key-card-only access. It's well-lit, and we've never had any incidents. Your car will be very safe.",
              formal: "Indeed. The parking garage is equipped with 24-hour surveillance cameras, regular patrols by a security guard, and restricted key-card access. Furthermore, it is brightly illuminated, and we have experienced no incidents of security breaches. Your vehicle will be entirely secure.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, really safe. Cameras everywhere, guards on patrol, keycard only. Never had any issues.",
                textZh: "放心，非常安全。到处摄像头，保安巡逻，刷卡进出。没出过问题。",
                actionHint: "可以放心停车",
                frequency: "common",
              },
              {
                textEn: "Very secure — gated, well-lit, monitored 24/7. Your car will be totally fine.",
                textZh: "非常安全——有门禁，灯光充足，全天监控。车完全没问题。",
                actionHint: "放心停车充电",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "security cameras", zh: "监控摄像头" },
              { en: "on patrol", zh: "巡逻中" },
              { en: "key-card-only access", zh: "刷卡进出" },
              { en: "well lit", zh: "灯光充足" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 洗衣服务 ====================
  {
    id: "hotel-13",
    category: "hotel",
    titleZh: "洗衣服务",
    titleEn: "Laundry Service",
    description: "使用酒店洗衣服务，包括普通洗涤、快洗和干洗",
    otherRole: "客房服务员",
    otherRoleIcon: "shirt",
    flows: [
      // --- Flow 1: 普通洗衣服务 ---
      {
        id: "standard-laundry",
        titleZh: "普通洗衣",
        titleEn: "Standard Laundry",
        description: "使用酒店普通洗衣服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to use the laundry service. How does it work?",
            textZh: "你好，我想用洗衣服务。怎么操作？",
            casualVersion: "Hey, how do I get some laundry done?",
            culturalNote: "美国服务行业对话通常开门见山，无需过多寒暄。直接说目的即可。",
            commonMistake: {
              wrong: "Hi, I want to use the laundry service. How to operate?",
              correct: "Hi, I'd like to use the laundry service. How does it work?",
              explanation:
                "“I want to…” 语气生硬，用 “I'd like to…” 更礼貌。“How to operate” 是中式英语，地道说法是 “How does it work？” 或 “How do I use it？”",
            },
            formalityVariants: {
              casual: "Hey, wanna use the laundry. How's it work?",
              standard: "Hi, I'd like to use the laundry service. How does it work?",
              formal:
                "Good morning/afternoon, I am interested in utilizing your laundry service. Could you please explain the process?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Of course! You'll find a laundry bag and a laundry list in your closet. Just fill out the form, put your clothes in the bag, and leave it on your bed or call us to pick it up.",
            textZh: "当然！您的衣柜里有洗衣袋和洗衣单。填好单子，把衣服放进袋子里，放在床上或者打电话让我们来取。",
            keyPhrases: [
              { en: "laundry bag", zh: "洗衣袋" },
              { en: "laundry list", zh: "洗衣单" },
              { en: "fill out the form", zh: "填写表格" },
              { en: "pick it up", zh: "来取" },
            ],
            vocabNotes: {
              "laundry list": {
                meaningInContext: "在这里指洗衣清单/表格，列出衣物种类和数量供你勾选",
                similarUsage: "类似用法：Please check off each item on the laundry list.（请在洗衣单上逐项勾选）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "There's a laundry form in the wardrobe. Fill it in, bag your clothes, and we'll collect them.",
                textZh: "衣柜里有洗衣表。填好，把衣服装袋，我们会来收。",
                actionHint: "找到衣柜里的洗衣袋和表格",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure! There's a laundry bag and list in your closet. Just fill it out, put your clothes in the bag, and leave it on your bed or give us a call to pick it up.",
            formalityVariants: {
              casual:
                "Sure thing! Bag and list are in your closet. Fill it out, pop your clothes in, and leave it on the bed or call us to grab it.",
              standard:
                "Of course! You'll find a laundry bag and a laundry list in your closet. Just fill out the form, put your clothes in the bag, and leave it on your bed or call us to pick it up.",
              formal:
                "Certainly! You will find a laundry bag and an accompanying laundry list conveniently located in your closet. Kindly complete the form, place your garments within the bag, and either leave it on your bed for collection or contact us to arrange a pickup.",
            },
          },
          {
            speaker: "you",
            textEn: "How much does it cost to wash a shirt and a pair of pants?",
            textZh: "洗一件衬衫和一条裤子多少钱？",
            casualVersion: "What's it cost for a shirt and pants?",
            commonMistake: {
              wrong: "How much is a shirt and a pair of pants?",
              correct: "How much does it cost to wash a shirt and a pair of pants?",
              explanation: "直接说“多少钱”听起来像在问物品本身的价格，而不是服务的价格。应加上动词“to wash/clean”。",
            },
            formalityVariants: {
              casual: "How much for a shirt and pants to be washed?",
              standard: "How much does it cost to wash a shirt and a pair of pants?",
              formal: "Could you please inform me of the cost for laundering one shirt and one pair of trousers?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "A shirt is $6 for regular wash, and pants are $8. Dry cleaning is a bit more — $10 for a shirt and $14 for pants. The price list is on the laundry form.",
            textZh: "衬衫普通洗6美元，裤子8美元。干洗贵一点——衬衫10美元，裤子14美元。价格表在洗衣单上。",
            keyPhrases: [
              { en: "regular wash", zh: "普通洗涤" },
              { en: "dry cleaning", zh: "干洗" },
              { en: "price list", zh: "价格表" },
            ],
            vocabNotes: {
              "dry cleaning": {
                meaningInContext: "在这里指用化学溶剂而非水清洗衣物的方式，适合丝绸、羊毛等面料",
                similarUsage: "类似用法：This suit needs to be dry cleaned.（这套西装需要干洗）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Shirts are 6 bucks to wash, pants are 8. Dry cleaning runs a little more — 10 and 14. It's all on the price sheet.",
                textZh: "衬衫洗6块，裤子8块。干洗贵一点——10块和14块。价格表上都有。",
                actionHint: "看洗衣单上的价格表",
                frequency: "common",
              },
              {
                textEn: "Regular wash is $6 for a shirt, $8 for pants. Want dry cleaning instead? That's $10 and $14.",
                textZh: "普通洗衬衫6美元，裤子8美元。要干洗的话，10和14美元。",
                actionHint: "选择普通洗还是干洗",
                frequency: "common",
              },
            ],
            casualVersion:
              "A shirt's $6 for regular wash, and pants are $8. Dry cleaning's a bit more — $10 for a shirt, $14 for pants. Price list's on the laundry form.",
            formalityVariants: {
              casual:
                "Shirts are $6 for regular, pants $8. Dry cleaning's higher — $10 for a shirt, $14 for pants. Prices are on the form.",
              standard:
                "A shirt is $6 for regular wash, and pants are $8. Dry cleaning is a bit more — $10 for a shirt and $14 for pants. The price list is on the laundry form.",
              formal:
                "For regular laundering service, a shirt is priced at $6, and trousers are $8. Dry cleaning incurs a slightly higher charge: $10 for a shirt and $14 for trousers. The complete price list is detailed on the laundry form.",
            },
          },
          {
            speaker: "you",
            textEn: "When will I get them back?",
            textZh: "什么时候能拿回来？",
            commonMistake: {
              wrong: "When can I take them back?",
              correct: "When will I get them back?",
              explanation: "中文的“拿回来”不能直接翻译成“take back”，get back更自然。",
            },
            casualVersion: "When'll I get 'em back?",
            formalityVariants: {
              casual: "When do I get 'em?",
              standard: "When will I get them back?",
              formal: "By what time may I anticipate the return of my items?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Regular service is next-day delivery by 6 PM. If you need it sooner, we have express service — same-day return within 4 hours for an extra 50% charge.",
            textZh: "普通服务是第二天下午6点前送回。如果您急用，我们有加急服务——加收50%费用，4小时内当天送回。",
            keyPhrases: [
              { en: "next-day delivery", zh: "次日送达" },
              { en: "express service", zh: "加急服务" },
              { en: "same-day return", zh: "当天送回" },
              { en: "extra charge", zh: "额外收费" },
            ],
            isBranchPoint: true,
            responseTip: "根据你的需要选择普通还是加急服务",
            alternativeExpressions: [
              {
                textEn:
                  "Standard turnaround is 24 hours. Rush service costs 50% more but you'll have everything back in 4 hours.",
                textZh: "标准周转时间24小时。加急服务多收50%但4小时就能拿回。",
                actionHint: "选择普通或加急",
                frequency: "common",
              },
            ],
            casualVersion:
              "Regular service is next-day by 6 PM. Need it sooner? We got express — same-day, 4 hours, extra 50% charge.",
            formalityVariants: {
              casual:
                "Regular's next-day, 6 PM. If you're in a rush, express gets 'em back in 4 hours, but it's 50% more.",
              standard:
                "Regular service is next-day delivery by 6 PM. If you need it sooner, we have express service — same-day return within 4 hours for an extra 50% charge.",
              formal:
                "Our standard service provides delivery by 6 PM on the following day. Should you require your items more promptly, we offer an express service guaranteeing same-day return within four hours, subject to an additional 50% surcharge.",
            },
          },
          {
            speaker: "you",
            textEn: "I need the express service for two shirts. I have a dinner meeting tonight.",
            textZh: "两件衬衫要加急。我今晚有晚宴。",
            casualVersion: "Need express for two shirts. Got a dinner tonight.",
            commonMistake: {
              wrong: "I need express service two shirts. I have dinner meeting tonight.",
              correct: "I need the express service for two shirts. I have a dinner meeting tonight.",
              explanation: "表达“两件衬衫”时应有介词“for”。“dinner meeting”前通常需要冠词“a”。",
            },
            formalityVariants: {
              casual: "Gonna need express for two shirts. Got a dinner tonight.",
              standard: "I need the express service for two shirts. I have a dinner meeting tonight.",
              formal:
                "I require the express service for two shirts, as I have a dinner meeting scheduled for this evening.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "No problem. I'll mark those as express. They'll be ready by 5 PM. Would you like them pressed as well? Pressing is included with the express service.",
            textZh: "没问题。我标注为加急。下午5点前送回。需要熨烫吗？加急服务包含熨烫。",
            commonMistake: {
              wrong: "No problem. I will mark them express. Back by 5 PM. Need iron? Express service include iron.",
              correct: "No problem. I'll mark them as express. They'll be back by 5 PM. Do you need them pressed? Express service includes pressing.",
              explanation: "英文中“熨烫”用press，iron是动词，作名词通常是熨斗。",
            },
            keyPhrases: [
              { en: "pressed", zh: "熨烫" },
              { en: "included", zh: "包含在内" },
            ],
            vocabNotes: {
              pressed: {
                meaningInContext: "在这里表示用熨斗把衣服熨平整，也叫 ironed",
                similarUsage:
                  "类似用法：Can you have this suit pressed before tomorrow?（能在明天前把这套西装熨好吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure, I'll rush those. You'll have them back by 5. Want them ironed too? It's free with express.",
                textZh: "好的，给您加急。5点前送回。要熨吗？加急免费包含。",
                actionHint: "可以免费加熨烫",
                frequency: "common",
              },
              {
                textEn:
                  "Done — marked as express. Back by 5 PM. Pressing comes with the rush service, so we'll iron them too unless you say no.",
                textZh: "好了——标记加急。下午5点前送回。加急包含熨烫，除非您不需要。",
                actionHint: "默认包含熨烫",
                frequency: "common",
              },
            ],
            casualVersion:
              "No prob. I'll mark 'em express. They'll be ready by 5 PM. Want 'em pressed too? Pressing's included with express.",
            formalityVariants: {
              casual:
                "Alright, I'll put 'em down as express. They'll be good by 5 PM. And pressed? That's part of the express service.",
              standard:
                "No problem. I'll mark those as express. They'll be ready by 5 PM. Would you like them pressed as well? Pressing is included with the express service.",
              formal:
                "Certainly. I will designate these items for express service. They will be prepared and returned by 5 PM. Would you also like them pressed? Pressing is complimentary with our express service.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please press them. Will they be delivered to my room?",
            textZh: "好的，请熨一下。会送到房间吗？",
            commonMistake: {
              wrong: "Yes, please iron them. Will them be sent to my room?",
              correct: "Yes, please press them. Will they be delivered to my room?",
              explanation: "熨衣服用 press，送东西用 deliver。them 是宾格，不能做主语。",
            },
            casualVersion: "Yeah, please press 'em. They'll be brought to my room?",
            formalityVariants: {
              casual: "Yep, press 'em. Delivered to my room, right?",
              standard: "Yes, please press them. Will they be delivered to my room?",
              formal: "Yes, kindly proceed with pressing them. Will the items be delivered directly to my room?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Yes, we'll deliver them on hangers to your room. If you're not in, we'll leave them in your closet. The charge will be added to your room bill.",
            textZh: "是的，我们会用衣架把衣服送到您房间。如果您不在，我们会挂在衣柜里。费用会加到房费账单上。",
            keyPhrases: [
              { en: "on hangers", zh: "用衣架挂着" },
              { en: "room bill", zh: "房费账单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we'll bring them up on hangers. If you're out, we'll just hang them in your closet. Goes on your room tab.",
                textZh: "会的，用衣架送上去。如果您不在，就挂衣柜里。费用记到房账上。",
                actionHint: "不在房间也没关系",
                frequency: "common",
              },
              {
                textEn:
                  "We'll drop them off at your room, all pressed and ready to go. Charges get added to your bill automatically.",
                textZh: "我们会送到您房间，熨好随时能穿。费用自动加到账单上。",
                actionHint: "费用会自动记账",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yup, we'll deliver 'em on hangers to your room. If you're out, we'll hang 'em in your closet. Charge goes to your room bill.",
            formalityVariants: {
              casual:
                "Yeah, on hangers to your room. If you're not there, we'll put 'em in your closet. Bill goes to your room.",
              standard:
                "Yes, we'll deliver them on hangers to your room. If you're not in, we'll leave them in your closet. The charge will be added to your room bill.",
              formal:
                "Yes, indeed. We will deliver them to your room on hangers. Should you be unavailable, we will place them in your closet. The corresponding charges will be applied to your room bill.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you very much.",
            textZh: "好的，非常感谢。",
            commonMistake: {
              wrong: "Very thank you.",
              correct: "Thank you very much.",
              explanation: "“非常感谢”地道表达是Thank you very much，不要直译。",
            },
            casualVersion: "Awesome, thanks so much.",
            formalityVariants: {
              casual: "Perfect, thanks!",
              standard: "Perfect, thank you very much.",
              formal: "That is perfectly acceptable, thank you for your excellent assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 衣物损坏/丢失 ---
      {
        id: "laundry-issue",
        titleZh: "洗衣问题处理",
        titleEn: "Laundry Issue",
        description: "洗衣服务出现衣物损坏或丢失等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I got my laundry back but there's a problem. One of my shirts has a stain that wasn't there before, and a button is missing.",
            textZh: "不好意思，我拿到洗好的衣服了，但有个问题。一件衬衫上多了一个污渍，还少了一颗扣子。",
            casualVersion:
              "Hey, I got my laundry back but there's a problem. My shirt's got a stain it didn't have before, and a button's missing.",
            commonMistake: {
              wrong: "Excuse me, my laundry has a problem.",
              correct: "Excuse me, I got my laundry back but there's a problem.",
              explanation: "直接翻译“有问题”听起来生硬，用“there's a problem”更自然。",
            },
            formalityVariants: {
              casual:
                "Hey, got my laundry back, but there's an issue. My shirt's got a new stain, and a button's missing.",
              standard:
                "Excuse me, I've received my laundry, but I've noticed a problem. One of my shirts has a new stain and a missing button.",
              formal:
                "Pardon me, I've just collected my laundry, and I regret to inform you that there appears to be an issue. Specifically, one of my shirts has acquired a stain that was not present previously, and a button is now missing.",
            },
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn: "I'm very sorry about that, sir. Let me take a look. Could you show me which shirt it is?",
            textZh: "非常抱歉，先生。让我看看。能给我看是哪件衬衫吗？",
            alternativeExpressions: [
              {
                textEn: "Oh no, I apologize. Can I see the damage? I'll get this sorted out right away.",
                textZh: "哎呀，很抱歉。我能看看损坏情况吗？我马上处理。",
                actionHint: "把有问题的衣服给对方看",
                frequency: "common",
              },
            ],
            casualVersion: "Oh, sorry 'bout that, sir. Lemme see. Which shirt is it?",
            commonMistake: {
              wrong: "Let me see it.",
              correct: "Let me take a look. Could you show me which shirt it is?",
              explanation: "直接说“让我看看”可能不够礼貌和具体，说明看什么更好。",
            },
            formalityVariants: {
              casual: "Oh, my bad, sir. Lemme check it out. Which one is it?",
              standard:
                "I'm very sorry about that, sir. Please allow me to examine it. Could you indicate which shirt you are referring to?",
              formal:
                "My sincerest apologies regarding this matter, sir. If you would permit me, I'd like to inspect the garment. Could you please specify which shirt is in question?",
            },
          },
          {
            speaker: "you",
            textEn:
              "This one. See the stain here on the collar? And this button was definitely there when I sent it down.",
            textZh: "这件。看到领子这里的污渍了吗？而且这颗扣子送下去的时候肯定在的。",
            casualVersion:
              "This one. See the stain on the collar? And that button was for sure there when I sent it down.",
            commonMistake: {
              wrong: "This button was surely there.",
              correct: "This button was definitely there when I sent it down.",
              explanation: '"surely" 在口语中不如 "definitely" 或 "for sure" 常用和自然。',
            },
            formalityVariants: {
              casual:
                "Yeah, this one. Check out the stain here on the collar? Button was totally there when I gave it to you.",
              standard:
                "It's this one. Can you see the stain here on the collar? And I assure you, this button was present when I sent the garment for cleaning.",
              formal:
                "This is the garment in question. Observe the discoloration here on the collar. Furthermore, I can confirm that this particular button was unequivocally present when the item was submitted for laundering.",
            },
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn:
              "I can clearly see the issue. I sincerely apologize. We'll re-clean the shirt to remove the stain, and we'll replace the button as well. If the stain can't be removed, we'll compensate you for the full value of the shirt.",
            textZh:
              "我看到问题了。真诚道歉。我们会重新清洗去除污渍，也会把扣子补上。如果污渍去不掉，我们会按衬衫全价赔偿您。",
            keyPhrases: [
              { en: "re-clean", zh: "重新清洗" },
              { en: "replace the button", zh: "补扣子" },
              { en: "compensate", zh: "赔偿" },
              { en: "full value", zh: "全价" },
            ],
            vocabNotes: {
              compensate: {
                meaningInContext: "在这里表示因为损坏而给予金钱赔偿",
                similarUsage:
                  "类似用法：The airline compensated us for the lost luggage.（航空公司赔偿了我们丢失的行李）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh I see it. I'm really sorry about that. We'll redo the cleaning and sew the button back on. If the stain won't come out, we'll pay you back for the shirt.",
                textZh: "我看到了。真的很抱歉。我们会重新洗并把扣子缝回去。如果污渍去不掉，我们赔您衬衫的钱。",
                actionHint: "说明衬衫的价值",
                frequency: "common",
              },
              {
                textEn:
                  "That's on us. Let us try to fix it — reclean and replace the button. If it's not fixable, full reimbursement, no questions asked.",
                textZh: "这是我们的问题。让我们修复——重新洗并补扣子。修不好的话全额赔偿，没二话。",
                actionHint: "可以提出赔偿要求",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I see it. So sorry. We'll re-clean it to get that stain out, and we'll replace the button too. If the stain won't come out, we'll just pay you for the whole shirt.",
            commonMistake: {
              wrong: "We will clean it again.",
              correct: "We'll re-clean the shirt to remove the stain.",
              explanation: '"re-clean" 是更地道和专业的表达，指再次清洗。',
            },
            formalityVariants: {
              casual:
                "Yep, totally see it. My bad. We'll try to get that stain out, and fix the button. If it doesn't come out, we'll cover the full cost of the shirt.",
              standard:
                "I can clearly observe the issue. I sincerely apologize for this oversight. We will undertake a re-cleaning of the shirt to address the stain, and we will also replace the missing button. Should the stain prove irremovable, we will provide full compensation for the garment's value.",
              formal:
                "I acknowledge the issue you've presented and extend my sincerest apologies for any inconvenience this may have caused. Our procedure will involve an immediate re-laundering of the shirt to eliminate the stain, concurrently with the replacement of the missing button. Furthermore, in the event that the stain cannot be satisfactorily removed, we commit to providing full monetary compensation equivalent to the shirt's original value.",
            },
          },
          {
            speaker: "you",
            textEn:
              "This is a brand-name shirt and it cost me over $100. I'd appreciate it if you could try to fix it first.",
            textZh: "这是名牌衬衫，花了100多美元。希望你们能先试着修复。",
            casualVersion:
              "It's a pretty expensive brand-name shirt, over a hundred bucks. I'd rather you just try to fix it first.",
            commonMistake: {
              wrong: "It is brand shirt.",
              correct: "This is a brand-name shirt.",
              explanation: '"brand-name" 是一个复合形容词，形容品牌的；或者说 "a branded shirt"。',
            },
            formalityVariants: {
              casual: "Look, it's a hundred-dollar shirt. Can you just try to fix it first?",
              standard:
                "This is a brand-name shirt that cost me over $100. I would appreciate it if you could prioritize attempting to repair it first.",
              formal:
                "I must inform you that this is a premium, brand-name garment valued at over one hundred dollars. Therefore, I would be most grateful if you would endeavor to repair it prior to considering other options.",
            },
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn:
              "Absolutely. I'll personally make sure our best team handles it. We'll have it back to you within 3 hours. I'll also waive all laundry charges on your bill as a gesture of goodwill.",
            textZh: "当然。我会亲自确保我们最好的团队处理。3小时内送回给您。我也会免除您账单上所有的洗衣费用作为诚意。",
            culturalNote: "美国服务业非常注重客户满意度，遇到问题通常会主动提供补偿或免费服务以示歉意和挽留客户。",
            keyPhrases: [
              { en: "personally make sure", zh: "亲自确保" },
              { en: "waive all charges", zh: "免除所有费用" },
              { en: "gesture of goodwill", zh: "善意的表示" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll take care of it myself. Give us 3 hours. And I'm comping your entire laundry bill — it's the least we can do.",
                textZh: "我亲自处理。给我们3小时。所有洗衣费用我全免——这是我们该做的。",
                actionHint: "同意给对方修复机会",
                frequency: "common",
              },
              {
                textEn:
                  "Leave it with me — our top person will handle it. Should have it back in 3 hours. All laundry charges are on us.",
                textZh: "交给我——我们最好的人来处理。3小时内送回。所有洗衣费用我们承担。",
                actionHint: "等待修复结果",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. I'll make sure our best guys handle it. You'll get it back in 3 hours. Plus, I'll take off all the laundry charges from your bill.",
            commonMistake: {
              wrong: "I will waive all laundry cost.",
              correct: "I'll also waive all laundry charges on your bill.",
              explanation: '对于服务费，通常用 "charges" 或 "fees"，而不是 "cost"。',
            },
            formalityVariants: {
              casual:
                "You got it. I'll personally see our best crew handles this. Back to you in 3 hours, max. And I'll zero out your laundry charges.",
              standard:
                "Absolutely. I will personally ensure that our most skilled team attends to this. We guarantee its return to you within three hours. Furthermore, as a gesture of goodwill, I will waive all laundry charges on your current bill.",
              formal:
                "Most certainly. I shall personally oversee that this matter is entrusted to our most proficient team. We commit to returning the item to you within a three-hour timeframe. Additionally, as a token of our regret and commitment to excellent service, I will personally arrange for all laundry charges to be removed from your account.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Okay, I'll give you a chance to fix it. But if the stain is still there, I'll need full compensation.",
            textZh: "好吧，给你们一次机会修复。但如果污渍还在，我需要全额赔偿。",
            casualVersion:
              "Alright, I'll let you try to fix it. But if that stain's still there, I'm gonna need full compensation.",
            commonMistake: {
              wrong: "I will ask full compensation.",
              correct: "I'll need full compensation.",
              explanation: '"ask for" 或 "need" 更自然，"ask" 单用时语气较弱或过于直接。',
            },
            formalityVariants: {
              casual: "Fine, you get one shot to fix it. Stain's still there though, I want the full compensation.",
              standard:
                "Very well, I will grant you the opportunity to rectify the issue. However, if the stain persists, I will require full compensation.",
              formal:
                "Understood. I shall afford you the opportunity to resolve this matter. Nevertheless, should the stain remain visible, I will respectfully request full monetary compensation.",
            },
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn:
              "That's completely fair. I'll bring it back myself and if you're not satisfied, we'll process the compensation immediately. Here's my card — please contact me directly if you have any concerns.",
            textZh: "完全合理。我会亲自送回来，如果您不满意，我们马上处理赔偿。这是我的名片——有任何问题请直接联系我。",
            keyPhrases: [
              { en: "process the compensation", zh: "处理赔偿" },
              { en: "contact me directly", zh: "直接联系我" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Totally fair. I'll personally bring it back. If you're not happy, we'll sort out the compensation right then and there. Here's my direct number.",
                textZh: "完全合理。我亲自送回。如果您不满意，当场处理赔偿。这是我的直线电话。",
                actionHint: "保留对方联系方式",
                frequency: "common",
              },
              {
                textEn:
                  "Understood. I'll handle it personally and bring it back to you. Worst case, we reimburse the full amount on the spot. Here's my card.",
                textZh: "明白。我亲自处理送回。最坏情况当场全额赔偿。这是我的名片。",
                actionHint: "收好名片以备后用",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally fair. I'll bring it back myself, and if you're not happy, we'll just process the compensation right away. Here's my card — hit me up if anything comes up.",
            culturalNote: "在美国，服务人员递名片通常代表着可以直接联系到负责任的人，或者级别较高，而不是普通员工。",
            commonMistake: {
              wrong: "If you have any problem, please contact me.",
              correct: "if you have any concerns.",
              explanation: '"concerns" 比 "problems" 更委婉和客气，表达的是顾虑或担忧。',
            },
            formalityVariants: {
              casual:
                "Fair enough. I'll personally bring it back, and if you're not satisfied, we'll sort out the compensation ASAP. Here's my number — just call me if you need anything.",
              standard:
                "That's entirely reasonable. I will personally return the item to you, and if you are not satisfied, we will process the compensation without delay. Here is my business card; please do not hesitate to contact me directly should any concerns arise.",
              formal:
                "Your position is entirely understandable and justified. I will personally oversee the return of the item, and in the event that it does not meet your complete satisfaction, we shall expedite the compensation process immediately. Kindly accept my business card; please feel free to reach out to me directly if you should have any further questions or concerns.",
            },
          },
        ],
      },

      // --- Flow 3: 自助洗衣 ---
      {
        id: "self-laundry",
        titleZh: "自助洗衣房",
        titleEn: "Self-Service Laundry",
        description: "使用酒店自助洗衣设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Does the hotel have a self-service laundry room?",
            textZh: "酒店有自助洗衣房吗？",
            commonMistake: {
              wrong: "Does the hotel have self-service laundry room?",
              correct: "Does the hotel have a self-service laundry room?",
              explanation: "可数名词room前需要加冠词a。",
            },
            casualVersion: "Hotel got a self-service laundry room?",
            formalityVariants: {
              casual: "Hotel got a self-service laundry room?",
              standard: "Does the hotel have a self-service laundry room?",
              formal: "May I inquire if the hotel provides a self-service laundry facility?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, we do. It's on the 3rd floor, room 302. It's open 24 hours. You'll need quarters for the machines — $2.50 per wash and $2 per dry cycle.",
            textZh: "有的。在3楼302室。24小时开放。机器需要投硬币——洗衣每次2.5美元，烘干每次2美元。",
            commonMistake: {
              wrong: "Yes, we have. It is 3rd floor, room 302. Open 24 hours. Machines need throw coins – wash $2.5, dry $2.",
              correct: "Yes, we do. It's on the 3rd floor, room 302. It's open 24 hours. The machines take coins — $2.50 per wash, $2 per dry.",
              explanation: "回答有没有用 do/don't。楼层前用 on，房间号前无需介词。24小时开放用 open 24 hours。投币用 take coins。",
            },
            casualVersion: "Yeah, we do. It's on the 3rd floor, room 302. Open 24/7. Machines take coins—$2.50 for wash, $2 for dry.",
            formalityVariants: {
              casual: "Yeah, we do. It's on the 3rd floor, room 302. Open 24/7. Machines take coins—$2.50 for wash, $2 for dry.",
              standard: "Yes, we do. It's on the 3rd floor in room 302. It's open 24 hours. The machines require coins — $2.50 per wash, $2 per dry.",
              formal: "Yes, we do. Our self-service laundry facility is located on the third floor in room 302. It operates 24 hours a day. The machines accept coins, with washing cycles priced at $2.50 and drying cycles at $2.",
            },
            keyPhrases: [
              { en: "self-service laundry", zh: "自助洗衣" },
              { en: "quarters", zh: "25分硬币" },
              { en: "wash", zh: "洗涤" },
              { en: "dry cycle", zh: "烘干周期" },
            ],
            vocabNotes: {
              quarters: {
                meaningInContext: "在这里指美国25美分硬币，很多自助洗衣机只收这种硬币",
                similarUsage: "类似用法：Do you have change for quarters?（你有零钱换25分硬币吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure — there's a coin-op laundry on the third floor. It's always open. Washers are $2.50, dryers $2.",
                textZh: "有的——三楼有投币洗衣房。全天开放。洗衣机2.5美元，烘干机2美元。",
                actionHint: "准备硬币去三楼",
                frequency: "common",
              },
            ],
            localVariants: {
              "en-US": "You'll need quarters for the machines.",
              "en-GB": "The machines take pound coins.",
              "en-AU": "The machines take dollar coins.",
            },
          },
          {
            speaker: "you",
            textEn: "I don't have any quarters. Where can I get change?",
            textZh: "我没有硬币。哪里可以换？",
            commonMistake: {
              wrong: "I don't have coins. Where can I change?",
              correct: "I don't have coins. Where can I get some?",
              explanation: "“换硬币”的“换”不是change，而是get some/break a bill。",
            },
            casualVersion: "Don't got coins. Where can I get some?",
            formalityVariants: {
              casual: "Don't got coins. Where can I get some?",
              standard: "I don't have coins. Where can I get some?",
              formal: "I do not possess any coins. Could you please advise where I might obtain some?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "There's a change machine right next to the laundry room. It takes $1, $5, and $10 bills. I can also give you some quarters here at the front desk if you'd like.",
            textZh: "洗衣房旁边有换币机。接受1美元、5美元和10美元纸币。您也可以在前台这里跟我换硬币。",
            commonMistake: {
              wrong: "There is change machine next to laundry room. It accept 1 dollar, 5 dollar and 10 dollar paper money. You also can change coins from me here at front desk.",
              correct: "There's a change machine next to the laundry room. It accepts $1, $5, and $10 bills. You can also get change from me here at the front desk.",
              explanation: "换币机是 change machine，纸币是 bills。动词 accept 加 s。跟某人换零钱用 get change from someone。",
            },
            casualVersion: "There's a change machine right next to the laundry room. Takes $1s, $5s, and $10s. Or, you can just get change from me here at the front desk.",
            formalityVariants: {
              casual: "There's a change machine right next to the laundry room. Takes $1s, $5s, and $10s. Or, you can just get change from me here at the front desk.",
              standard: "There's a change machine right next to the laundry room. It accepts $1, $5, and $10 bills. You can also get change from me here at the front desk.",
              formal: "There is a change machine situated adjacent to the laundry room, which accepts $1, $5, and $10 denominations. Alternatively, I would be pleased to provide you with change here at the front desk.",
            },
            keyPhrases: [
              { en: "change machine", zh: "换币机" },
              { en: "bills", zh: "纸币" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a bill changer right outside the laundry room. Or I can break a bill for you right here if you want.",
                textZh: "洗衣房外面有换币机。或者我现在就帮您换零钱也行。",
                actionHint: "在前台或换币机换硬币",
                frequency: "common",
              },
              {
                textEn:
                  "We've got a coin machine next door to the laundry. Takes ones, fives, and tens. I can also make change for you here.",
                textZh: "洗衣房隔壁有投币机。接受1美元、5美元和10美元。我这里也可以换。",
                actionHint: "选择换币方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get $10 in quarters, please? Also, is detergent provided?",
            textZh: "请给我换10美元的硬币。另外，提供洗衣液吗？",
            commonMistake: {
              wrong: "Can I change $10 quarters, please? Also, have detergent?",
              correct: "Can I get $10 in quarters, please? Also, is detergent provided?",
              explanation: "“换10美元的quarter”用 get $10 in quarters。询问“有没有”物品用 is/are X provided? 或 Do you have X?。",
            },
            casualVersion: "Can I get $10 in quarters, please? Also, is detergent provided?",
            formalityVariants: {
              casual: "Can I get $10 in quarters, please? Also, is detergent provided?",
              standard: "Can I get $10 in quarters, please? Also, is detergent provided?",
              formal: "Could I please receive $10 worth of quarters? Additionally, is laundry detergent provided?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Here's $10 in quarters. There's a vending machine in the laundry room that sells single-use detergent pods for $1.50 each. We also have fabric softener and dryer sheets available.",
            textZh: "给您10美元的硬币。洗衣房里有自动贩卖机，卖单次用洗衣凝珠，每个1.5美元。还有柔顺剂和烘干纸。",
            commonMistake: {
              wrong: "Here is your $10 coins. In laundry room, have vending machine sell one-time use detergent pods, $1.5 each. Also fabric softener and dryer paper.",
              correct: "Here's your $10 in quarters. In the laundry room, there's a vending machine with single-use detergent pods for $1.50 each. Fabric softener and dryer sheets are also available.",
              explanation: "“10美元硬币”要说 $10 in quarters。有贩卖机用 there's a vending machine with/selling。烘干纸是 dryer sheets。",
            },
            casualVersion: "Here's your $10 in quarters. Laundry room's got a vending machine for single-use pods, $1.50 each. Also has fabric softener and dryer sheets.",
            formalityVariants: {
              casual: "Here's your $10 in quarters. Laundry room's got a vending machine for single-use pods, $1.50 each. Also has fabric softener and dryer sheets.",
              standard: "Here's your $10 in quarters. The laundry room has a vending machine that sells single-use detergent pods for $1.50 each. It also offers fabric softener and dryer sheets.",
              formal: "Certainly, here is your $10 in quarters. Within the laundry room, there is a vending machine offering single-use detergent pods for $1.50 each. Fabric softener and dryer sheets are also available for purchase.",
            },
            keyPhrases: [
              { en: "detergent pods", zh: "洗衣凝珠" },
              { en: "fabric softener", zh: "柔顺剂" },
              { en: "dryer sheets", zh: "烘干纸/防静电纸" },
            ],
            vocabNotes: {
              "dryer sheets": {
                meaningInContext: "在这里指烘干时放入的薄纸片，能防止静电并增添香味",
                similarUsage: "类似用法：Toss a dryer sheet in with the clothes.（往衣服里扔一张烘干纸）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here you go. There's a little vending machine in there for detergent — a buck fifty a pod. They've got softener and dryer sheets too.",
                textZh: "给您。洗衣房里有个小贩卖机卖洗衣液——每个一块五。还有柔顺剂和烘干纸。",
                actionHint: "去贩卖机买洗衣凝珠",
                frequency: "common",
              },
              {
                textEn:
                  "Ten bucks in quarters, there you go. Soap pods are in the vending machine by the washers — $1.50 each.",
                textZh: "十美元硬币给您。洗衣凝珠在洗衣机旁边的贩卖机里——每个1.5美元。",
                actionHint: "在贩卖机买洗涤用品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. How long does a full wash and dry cycle take?",
            textZh: "好的。洗加烘干一共需要多长时间？",
            commonMistake: {
              wrong: "How long need a full wash and dry cycle?",
              correct: "How long does a full wash and dry cycle take?",
              explanation: "询问时长用 How long does X take? 而不是 need。",
            },
            casualVersion: "Cool. How long for a full wash and dry?",
            formalityVariants: {
              casual: "Cool. How long for a full wash and dry?",
              standard: "Great. How long does a full wash and dry cycle take?",
              formal: "Understood. Approximately how long does a complete wash and dry cycle require?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "A wash cycle is about 35 minutes, and drying takes about 45 minutes to an hour depending on the load. So roughly an hour and a half total. There are chairs and a TV in the laundry room if you want to wait.",
            textZh:
              "洗涤大约35分钟，烘干根据衣物量大约45分钟到1小时。所以总共大约一个半小时。洗衣房里有椅子和电视，如果您想在那里等的话。",
            casualVersion: "Wash is like 35 mins, drying's about 45 to an hour depending on the load. So, roughly an hour and a half total. There's chairs and a TV in there if you wanna wait.",
            formalityVariants: {
              casual: "Wash is like 35 mins, drying's about 45 to an hour depending on the load. So, roughly an hour and a half total. There's chairs and a TV in there if you wanna wait.",
              standard: "A wash cycle is about 35 minutes, and drying takes about 45 minutes to an hour depending on the load. So roughly an hour and a half total. There are chairs and a TV in the laundry room if you want to wait.",
              formal: "A wash cycle typically lasts approximately 35 minutes, with drying requiring between 45 minutes to an hour, contingent upon the size of the load. Therefore, the total estimated time is roughly one and a half hours. Seating and a television are provided in the laundry room should you wish to wait.",
            },
            keyPhrases: [
              { en: "wash cycle", zh: "洗涤周期" },
              { en: "depending on the load", zh: "取决于衣物量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "About 35 minutes to wash, then 45 to an hour to dry. So plan on about an hour and a half. There's a TV in there if you wanna hang out.",
                textZh: "洗大约35分钟，烘干45分钟到1小时。大概一个半小时。里面有电视可以看。",
                actionHint: "可以在洗衣房等",
                frequency: "common",
              },
              {
                textEn:
                  "Wash takes about half an hour, dryer about 45 minutes. You can chill in the laundry room — there are chairs and a TV.",
                textZh: "洗大约半小时，烘干大约45分钟。可以在洗衣房等——有椅子和电视。",
                actionHint: "带手机或书打发时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that's really helpful!",
            textZh: "谢谢，这很有帮助！",
            commonMistake: {
              wrong: "Thank you, that's much helpful!",
              correct: "Thank you, that's very helpful!",
              explanation: "“很有帮助”用 very helpful，而不是 much helpful。",
            },
            casualVersion: "Thanks, that's super helpful!",
            formalityVariants: {
              casual: "Thanks, that's super helpful!",
              standard: "Thank you, that's very helpful!",
              formal: "Thank you; that information is most helpful.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 失物招领 ====================
  {
    id: "hotel-14",
    category: "hotel",
    titleZh: "失物招领",
    titleEn: "Lost & Found",
    description: "在酒店丢失物品后向前台询问和找回",
    otherRole: "前台接待员",
    otherRoleIcon: "search",
    flows: [
      // --- Flow 1: 在房间丢了东西 ---
      {
        id: "lost-in-room",
        titleZh: "房间内丢失物品",
        titleEn: "Item Lost in Room",
        description: "退房后发现有东西忘在房间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I checked out this morning from room 712, but I think I left my phone charger in the room. Is there any way to get it back?",
            textZh: "你好，我今天早上从712房退的房，但我好像把充电器忘在房间了。有办法找回来吗？",
            casualVersion:
              "Hey, checked out this morning from 712. Think I left my phone charger in the room. Any way to get it back?",
            commonMistake: {
              wrong: "I think I lost my phone charger in the room.",
              correct: "I think I left my phone charger in the room.",
              explanation: "“Lost”指找不到，而“left”指忘记在某处，含义不同。",
            },
            formalityVariants: {
              casual:
                "Hey, I checked out of 712 this morning. Pretty sure I left my phone charger in there. Can I get it back?",
              standard:
                "Hi, I checked out this morning from room 712, but I think I left my phone charger in the room. Is there any way to get it back?",
              formal:
                "Good morning. I vacated room 712 earlier today, and I believe I may have inadvertently left my mobile phone charger in the room. I was wondering if it would be possible to retrieve it?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry to hear that. Let me check with housekeeping to see if they found anything in room 712. Can you describe the charger for me?",
            textZh: "很遗憾听到这个。让我联系客房部看看他们在712房有没有找到。能描述一下充电器吗？",
            commonMistake: {
              wrong: "I'm sorry to hear that. Let me contact house-keeping and check if they found it.",
              correct: "I'm sorry to hear that. Let me contact Housekeeping and see if they found anything in room 712.",
              explanation: "Housekeeping 在美国是专有名词，直接大写。'see if they found'比'check if they found'更自然。",
            },
            keyPhrases: [
              { en: "check with housekeeping", zh: "联系客房部确认" },
              { en: "describe", zh: "描述" },
            ],
            vocabNotes: {
              housekeeping: {
                meaningInContext: "在这里指酒店负责客房清洁和整理的部门",
                similarUsage: "类似用法：Housekeeping hasn't cleaned the room yet.（客房部还没打扫房间）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Oh no! Let me radio housekeeping and ask if they've come across it. What does it look like?",
                textZh: "哎呀！让我用对讲机联系客房部问问。是什么样的？",
                actionHint: "详细描述你丢失的物品",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry to hear that. Lemme check with housekeeping if they found anything in 712. Can you describe the charger?",
            formalityVariants: {
              casual: "Ah, too bad. I'll ask housekeeping if they found anything in 712. What's it look like?",
              standard:
                "I'm sorry to hear that. Let me check with housekeeping to see if they found anything in room 712. Can you describe the charger for me?",
              formal:
                "I regret to hear that. Allow me to inquire with our housekeeping department regarding any items found in room 712. Could you please provide a description of the charger?",
            },
          },
          {
            speaker: "you",
            textEn: "It's a white Apple USB-C charger with a braided cable. I think I left it plugged in by the desk.",
            textZh: "是一个白色的苹果USB-C充电器，编织线材质的。我记得插在书桌旁边了。",
            casualVersion: "It's a white Apple USB-C charger, braided cable. Think I left it plugged in by the desk.",
            commonMistake: {
              wrong: "It's a white Apple USB-C charger with a braided line.",
              correct: "It's a white Apple USB-C charger with a braided cable.",
              explanation: "“线”在英语中常用“cable”或“cord”来指代电器线材。",
            },
            formalityVariants: {
              casual: "White Apple USB-C charger, braided cable. I probably left it plugged in near the desk.",
              standard:
                "It's a white Apple USB-C charger with a braided cable. I think I left it plugged in by the desk.",
              formal:
                "It is a white Apple-brand USB-C charger, specifically one with a braided cable. I recall leaving it plugged into an outlet near the desk.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Good news! Housekeeping found a white charger in room 712. It matches your description. I have it right here. Could you verify it's yours?",
            textZh: "好消息！客房部在712房找到了一个白色充电器。跟您描述的一样。就在这里。您确认一下是不是您的？",
            commonMistake: {
              wrong: "Could you confirm it is yours?",
              correct: "Could you verify it's yours?",
              explanation: "verify (核实) 比 confirm (确认) 更贴切，尤其是在服务场景中，用于物品归属。",
            },
            keyPhrases: [
              { en: "matches your description", zh: "跟您描述的一样" },
              { en: "verify", zh: "确认/核实" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're in luck! They found a white charger in your old room. Looks like a match — is this yours?",
                textZh: "您运气不错！他们在您之前的房间找到了白色充电器。看着像——是您的吗？",
                actionHint: "确认是否是自己的",
                frequency: "common",
              },
              {
                textEn:
                  "Great news — housekeeping picked up a charger from 712. Apple USB-C, braided cable. Sound right?",
                textZh: "好消息——客房部从712捡到了一个充电器。苹果USB-C，编织线。对吗？",
                actionHint: "确认物品特征",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good news! Housekeeping found a white charger in 712. Matches your description. Got it right here. Can you verify it's yours?",
            formalityVariants: {
              casual:
                "Alright, good news! Housekeeping found a white charger in 712. Looks like yours. Here it is. Is this it?",
              standard:
                "Good news! Housekeeping found a white charger in room 712. It matches your description. I have it right here. Could you verify it's yours?",
              formal:
                "Excellent news! Our housekeeping staff located a white charger in room 712. It corresponds precisely with the description you provided. I have it here for your inspection. Would you be able to confirm its ownership?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine! Thank you so much. I was worried I'd have to buy a new one.",
            textZh: "对，是我的！太感谢了。我还担心得买个新的。",
            commonMistake: {
              wrong: "Yes, that is mine! Thank you so much. I was worried I had to buy a new one.",
              correct: "Yes, that's mine! Thank you so much. I was worried I'd have to buy a new one.",
              explanation: "口语中用缩写 'that's' 更自然。'I'd have to' 比 'I had to' 更符合语气。",
            },
            casualVersion: "Yep, that's mine! Thanks a ton. Was worried I'd have to buy a new one.",
            formalityVariants: {
              casual: "Oh yeah, that's it! Thanks a bunch. Was really thinking I'd need a new one.",
              standard: "Yes, that's mine! Thank you so much. I was worried I'd have to buy a new one.",
              formal:
                "Indeed, that is my charger! I am incredibly grateful for your assistance. I was genuinely concerned that I would have to purchase a replacement.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You're welcome! Just for our records, could you sign this lost-and-found claim form? It just confirms you've picked up the item.",
            textZh: "不客气！为了记录需要，能签一下这个失物认领表吗？只是确认您已经取回物品。",
            culturalNote: "美国酒店取回失物通常需要签字，作为酒店的记录留存。",
            commonMistake: {
              wrong: "You are welcome! Can you sign this lost and found form for the record?",
              correct: "You're welcome! For our records, could you please sign this lost and found form?",
              explanation: "You're welcome 更自然。for our records 通常放在句首或句中，更口语。",
            },
            keyPhrases: [
              { en: "lost-and-found", zh: "失物招领" },
              { en: "claim form", zh: "认领表" },
              { en: "for our records", zh: "为了记录" },
            ],
            vocabNotes: {
              "lost-and-found": {
                meaningInContext: "在这里指酒店的失物招领服务/处，专门保管客人遗失的物品",
                similarUsage:
                  "类似用法：You should check the lost-and-found at the airport.（你应该去机场的失物招领处看看）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "No problem! Just sign here — it's just a quick form saying you got your stuff back.",
                textZh: "没问题！这里签个名——就是个简单表格确认您拿回了东西。",
                actionHint: "签字确认取回物品",
                frequency: "common",
              },
              {
                textEn: "Glad we found it! Mind signing this real quick? Just confirms you picked it up.",
                textZh: "很高兴找到了！能快速签一下吗？就是确认您取回了。",
                actionHint: "签认领表",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem! Just for our records, can you sign this lost-and-found form? Just confirms you picked up the item.",
            formalityVariants: {
              casual:
                "Anytime! Just for our paperwork, can you sign this lost-and-found thing? It just says you got your item back.",
              standard:
                "You're welcome! Just for our records, could you sign this lost-and-found claim form? It just confirms you've picked up the item.",
              formal:
                "It was our pleasure. For administrative purposes, we kindly request your signature on this lost-and-found claim form. It merely serves as confirmation that you have successfully retrieved your item.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, no problem. You guys are very efficient!",
            textZh: "没问题。你们真的很高效！",
            commonMistake: {
              wrong: "Sure, no problem. You guys are very high efficiency!",
              correct: "Sure, no problem. You guys are very efficient!",
              explanation: "'high efficiency' 是中式英语，应直接用形容词 'efficient'。",
            },
            casualVersion: "Yeah, no problem. You guys are super efficient!",
            formalityVariants: {
              casual: "Sure, sounds good. You guys are super fast!",
              standard: "Sure, no problem. You guys are very efficient!",
              formal: "Certainly, I'd be happy to. Your team's efficiency is truly commendable!",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Thank you! We always do a thorough check of rooms after checkout. If you ever leave something behind, just call us within 30 days and we'll hold it for you.",
            textZh: "谢谢！我们退房后都会仔细检查房间。如果以后忘了什么东西，30天内打电话给我们就行，我们会帮您保管。",
            culturalNote: "许多美国酒店会有类似30天内免费保管遗失物品的政策。",
            commonMistake: {
              wrong: "Thank you! We always do a thorough check of rooms after checkout. If you ever leave something behind, just call us within 30 days and we will keep it for you.",
              correct: "Thank you! We always do a thorough check of rooms after checkout. If you ever leave something behind, just call us within 30 days and we'll hold onto it for you.",
              explanation: "口语中常用 'we'll' 替代 'we will'。'hold onto it' 比 'keep it' 更自然地表达暂时保管。",
            },
            keyPhrases: [
              { en: "thorough check", zh: "仔细检查" },
              { en: "hold it for you", zh: "帮您保管" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Happy to help! We always sweep the rooms after checkout. If you leave anything behind in the future, give us a ring within 30 days.",
                textZh: "乐意帮忙！退房后我们都会清查房间。以后落了东西，30天内给我们打电话就行。",
                actionHint: "记住30天内都可以找回",
                frequency: "common",
              },
              {
                textEn:
                  "That's what we're here for! We keep lost items for 30 days, so there's always time to call us back.",
                textZh: "这是我们的工作！遗失物品我们保管30天，随时可以打电话来取。",
                actionHint: "记住失物保管期限",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks! We always do a thorough check after checkout. If you leave something, just call us within 30 days, we'll hold it.",
            formalityVariants: {
              casual:
                "Thanks! We always double-check rooms after folks leave. If you forget something again, just call within 30 days, and we'll keep it for you.",
              standard:
                "Thank you! We always do a thorough check of rooms after checkout. If you ever leave something behind, just call us within 30 days and we'll hold it for you.",
              formal:
                "Thank you for your kind words! We maintain a policy of conducting a thorough inspection of all rooms subsequent to guest departure. Should you inadvertently leave any belongings in the future, please do not hesitate to contact us within 30 days, and we will gladly retain them for your collection.",
            },
          },
        ],
      },

      // --- Flow 2: 在酒店公共区域丢东西 ---
      {
        id: "lost-in-public-area",
        titleZh: "公共区域丢失物品",
        titleEn: "Item Lost in Public Area",
        description: "在酒店餐厅、泳池等公共区域丢失物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I think I lost my sunglasses somewhere in the hotel. I had them at the pool this afternoon but now I can't find them.",
            textZh: "我好像把太阳镜丢在酒店某处了。今天下午在泳池还有，现在找不到了。",
            casualVersion:
              "Think I lost my sunglasses somewhere in the hotel. Had 'em at the pool this afternoon but can't find 'em now.",
            commonMistake: {
              wrong: "I lost my sunglasses",
              correct: "I think I lost my sunglasses",
              explanation: "直接说“我丢了”听起来过于肯定，用“I think I lost”更委婉",
            },
            formalityVariants: {
              casual: "Think I lost my shades in the hotel. Had 'em at the pool this afternoon, can't find 'em now.",
              standard:
                "I think I lost my sunglasses somewhere in the hotel. I had them at the pool this afternoon but now I can't find them.",
              formal:
                "Excuse me, I believe I may have misplaced my sunglasses within the hotel premises. I distinctly recall having them at the pool this afternoon, but they are currently unaccounted for.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry to hear that. Let me check our lost-and-found log. Can you tell me what they look like and approximately what time you were at the pool?",
            textZh: "很遗憾。让我查一下失物登记。能告诉我太阳镜什么样的，大约几点在泳池吗？",
            commonMistake: {
              wrong: "I'm sorry to hear that. Let me check the lost property log. Can you tell me what your sunglasses are like, and about what time were you at the pool?",
              correct: "I'm sorry to hear that. Let me check our lost and found log. Could you tell me what kind of sunglasses they are, and approximately what time you were at the pool?",
              explanation: "'lost and found' 是固定搭配。'what kind of' 比 'what... are like' 更地道。",
            },
            keyPhrases: [
              { en: "lost-and-found log", zh: "失物登记" },
              { en: "approximately", zh: "大约" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me look through our lost items. What brand are they, and when were you at the pool?",
                textZh: "让我查一下遗失物品。什么品牌的？几点在泳池的？",
                actionHint: "尽量详细地描述物品",
                frequency: "common",
              },
            ],
            casualVersion:
              "Aw, sorry to hear that. Lemme check our lost-and-found. What'd they look like and 'bout what time were you at the pool?",
            formalityVariants: {
              casual:
                "Oh, sorry 'bout that. Lemme check our lost-and-found. What'd they look like? And 'bout what time were you at the pool?",
              standard:
                "I'm sorry to hear that. Let me check our lost-and-found log. Can you tell me what they look like and approximately what time you were at the pool?",
              formal:
                "I regret to hear of your predicament. Allow me to consult our lost-and-found registry. Could you please provide a description of the sunglasses and an approximate timeframe of your presence at the pool facility?",
            },
          },
          {
            speaker: "you",
            textEn:
              "They're Ray-Ban Wayfarers, black frame with dark lenses. I was at the pool from about 2 to 4 PM. I might have left them on the lounge chair.",
            textZh: "是雷朋Wayfarer，黑色镜框，深色镜片。我大约下午2点到4点在泳池。可能忘在躺椅上了。",
            casualVersion:
              "They're Ray-Ban Wayfarers, black frame, dark lenses. Was at the pool 'round 2 to 4 PM. Might've left 'em on a lounge chair.",
            commonMistake: {
              wrong: "It is Ray-Ban Wayfarers",
              correct: "They're Ray-Ban Wayfarers",
              explanation: "描述复数物品（太阳镜）用 'They are' 而非 'It is'",
            },
            formalityVariants: {
              casual:
                "Ray-Ban Wayfarers, black frame, dark lenses. Was at the pool 'round 2 to 4 PM. Probably left 'em on a lounge chair.",
              standard:
                "They're Ray-Ban Wayfarers, black frame with dark lenses. I was at the pool from about 2 to 4 PM. I might have left them on the lounge chair.",
              formal:
                "They are Ray-Ban Wayfarer model sunglasses, featuring a black frame with dark tinted lenses. I utilized the pool facilities approximately between 2 and 4 PM. It is plausible that I inadvertently left them on a lounge chair.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I don't see anything matching that description in our log yet, but the pool area staff may not have turned it in yet. Let me call the pool attendant right now. Could you wait just a moment?",
            textZh:
              "登记里暂时没有找到符合描述的物品，但泳池工作人员可能还没交上来。我现在打电话给泳池服务员。请稍等一下好吗？",
            commonMistake: {
              wrong: "I didn't find anything matched the description in the log temporarily, but the pool staff might not have given it to us yet. I will call the pool attendant now. Could you please wait for a moment?",
              correct: "I don't see anything matching that description in the log just yet, but the pool staff might not have turned it in. I'll call the pool attendant now. Could you please hold on for a moment?",
              explanation: "'I don't see' 比 'I didn't find' 更自然。'turn it in' 指交上来。'hold on' 更口语。",
            },
            keyPhrases: [
              { en: "matching that description", zh: "符合描述的" },
              { en: "turned it in", zh: "上交/交上来" },
              { en: "pool attendant", zh: "泳池服务员" },
            ],
            vocabNotes: {
              "turned it in": {
                meaningInContext: "在这里表示把找到的东西上交给前台或失物招领处",
                similarUsage: "类似用法：Someone turned in a wallet at the front desk.（有人在前台上交了一个钱包）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hmm, nothing in the system yet. The pool guys might not have logged it. Hang on — let me give them a quick call.",
                textZh: "嗯，系统里还没有。泳池那边可能还没登记。等一下——我给他们打个电话。",
                actionHint: "稍等前台联系泳池",
                frequency: "common",
              },
              {
                textEn:
                  "I don't see it in lost-and-found yet, but that doesn't mean it's gone. Let me check with the pool staff real quick.",
                textZh: "失物招领里还没看到，但不代表没了。让我跟泳池员工确认一下。",
                actionHint: "耐心等候",
                frequency: "common",
              },
            ],
            casualVersion:
              "Don't see anything like that in the log yet, but pool staff might not've turned 'em in. Lemme call the pool attendant. Can you hold on a sec?",
            formalityVariants: {
              casual:
                "Nothing in the log yet, but pool staff probably hasn't turned 'em in. Lemme call the attendant. Can you hold on a sec?",
              standard:
                "I don't see anything matching that description in our log yet, but the pool area staff may not have turned it in yet. Let me call the pool attendant right now. Could you wait just a moment?",
              formal:
                "I do not currently observe an entry corresponding to that description in our log. However, it is possible the pool area staff has not yet registered the item. I shall contact the pool attendant momentarily. Would you be so kind as to wait for a brief period?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll wait.",
            textZh: "好的，我等一下。",
            commonMistake: {
              wrong: "Sure, I wait.",
              correct: "Sure, I'll wait.",
              explanation: "将来时态 'I'll wait' 更符合语境，表示接下来的动作。",
            },
            casualVersion: "Yeah, I'll wait.",
            formalityVariants: {
              casual: "Yeah, I'll wait.",
              standard: "Sure, I'll wait.",
              formal: "Certainly, I shall wait.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Great news — the pool attendant found a pair of black Ray-Bans on one of the lounge chairs. He's bringing them over now. Should be here in about 2 minutes.",
            textZh: "好消息——泳池服务员在一张躺椅上找到了一副黑色雷朋。他正拿过来。大约2分钟到。",
            commonMistake: {
              wrong: "Great news! The pool attendant found a pair of black Ray-Bans on one of the lounge chairs. He is coming with it. About 2 minutes.",
              correct: "Great news! The pool attendant found a pair of black Ray-Bans on one of the lounge chairs. He's bringing them over now. About 2 minutes.",
              explanation: "'bringing them over' 比 'coming with it' 更地道。'them' 指太阳镜。",
            },
            keyPhrases: [{ en: "bringing them over", zh: "拿过来" }],
            alternativeExpressions: [
              {
                textEn:
                  "Good news! The pool guy found black Ray-Bans on a lounge chair. He's on his way over — couple minutes.",
                textZh: "好消息！泳池员工在躺椅上找到了黑色雷朋。他正过来——两分钟。",
                actionHint: "等待确认是否是自己的",
                frequency: "common",
              },
              {
                textEn: "Found them! A pair of black sunglasses were on one of the chairs. He'll be here any second.",
                textZh: "找到了！一副黑色太阳镜在一张椅子上。他马上就到。",
                actionHint: "准备确认太阳镜",
                frequency: "common",
              },
            ],
            casualVersion:
              "Great news! Pool attendant found some black Ray-Bans on a lounge chair. He's bringing 'em over now. Should be here in like 2 mins.",
            formalityVariants: {
              casual:
                "Good news! Attendant found your black Ray-Bans on a lounge chair. He's bringing 'em over now, be here in like 2 mins.",
              standard:
                "Great news — the pool attendant found a pair of black Ray-Bans on one of the lounge chairs. He's bringing them over now. Should be here in about 2 minutes.",
              formal:
                "Excellent news! The pool attendant has successfully located a pair of black Ray-Ban sunglasses on a lounge chair. He is currently en route to deliver them. They should arrive within approximately two minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that's wonderful! I'm so relieved. Should I leave a tip for the person who found them?",
            textZh: "太好了！我松了一口气。要不要给找到的人小费？",
            culturalNote: "在美国酒店，虽然不强制，但给找到失物的员工小费（$5-10）是很常见的表示感谢的方式。",
            casualVersion: "Oh, awesome! So relieved. Should I tip the person who found 'em?",
            commonMistake: {
              wrong: "Should I give tip?",
              correct: "Should I leave a tip?",
              explanation: "“小费”作为可数名词，前面需要加冠词a/the，或用动词leave a tip",
            },
            formalityVariants: {
              casual: "Oh, awesome! So relieved. Should I tip the person who found 'em?",
              standard: "Oh, that's wonderful! I'm so relieved. Should I leave a tip for the person who found them?",
              formal:
                "Oh, that is truly splendid! I am immensely relieved. Would it be appropriate to offer a gratuity to the individual who located them?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "That's entirely up to you, but I'm sure he'd appreciate it. Here he is now — are these your sunglasses?",
            textZh: "完全看您自己，但他肯定会感激的。他来了——这是您的太阳镜吗？",
            culturalNote: "在美国，对提供额外帮助的服务人员（比如特意送回失物）给予小费是常见的感谢方式。",
            commonMistake: {
              wrong: "That is totally up to you, but he will certainly appreciate it. Here he comes—is this your sunglasses?",
              correct: "That's entirely up to you, but he'd certainly appreciate it. Here he comes—are these your sunglasses?",
              explanation: "口语中用 'That's' 和 'he'd' 更自然。'sunglasses' 是复数名词，需用 'these' 和 'are'。",
            },
            keyPhrases: [{ en: "entirely up to you", zh: "完全看您自己" }],
            literalMeaning:
              '"entirely up to you" 字面意思是「完全取决于你」，实际在服务场景中是一种礼貌的方式，暗示可以给但不强制。',
            alternativeExpressions: [
              {
                textEn:
                  "That's totally your call. I'm sure he'd love it though. Oh here he comes — these look like yours?",
                textZh: "完全看您。不过他肯定会很高兴。来了——这像是您的吗？",
                actionHint: "确认太阳镜是否是自己的",
                frequency: "common",
              },
              {
                textEn: "Up to you! He's here now — take a look, are these the ones?",
                textZh: "随您！他来了——看看，是这副吗？",
                actionHint: "查看是否是自己的太阳镜",
                frequency: "common",
              },
            ],
            casualVersion: "Totally up to you, but I'm sure he'd appreciate it. Here he is — these your sunglasses?",
            formalityVariants: {
              casual: "Up to you, but I'm sure he'd appreciate it. Here he is — these your shades?",
              standard:
                "That's entirely up to you, but I'm sure he'd appreciate it. Here he is now — are these your sunglasses?",
              formal:
                "That decision rests entirely with you, sir/madam, though I am confident he would be grateful for the gesture. Ah, here he arrives — may I confirm if these are indeed your sunglasses?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes! These are mine. Thank you so much — here's a little something for your trouble.",
            textZh: "是的！是我的。太感谢了——给你一点小意思。",
            culturalNote: '"a little something for your trouble" 是给小费时非常自然的说法。',
            casualVersion: "Yep! These are mine. Thanks a ton — here's a little something for your trouble.",
            commonMistake: {
              wrong: "Here is little something for your trouble.",
              correct: "Here's a little something for your trouble.",
              explanation: "“little something”是固定短语，表示“一点点心意”，需要冠词a。",
            },
            formalityVariants: {
              casual: "Yep! These are mine. Thanks a ton — here's a little something for your trouble.",
              standard: "Yes! These are mine. Thank you so much — here's a little something for your trouble.",
              formal:
                "Indeed! These are precisely what I was seeking. I extend my sincere gratitude — please accept this small token of appreciation for your efforts.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 叫醒服务 ====================
  {
    id: "hotel-15",
    category: "hotel",
    titleZh: "叫醒服务",
    titleEn: "Wake-up Call & Morning Requests",
    description: "设置叫醒电话和早间服务请求",
    otherRole: "前台接待员",
    otherRoleIcon: "alarm-clock",
    flows: [
      // --- Flow 1: 设置叫醒电话 ---
      {
        id: "wake-up-call",
        titleZh: "设置叫醒电话",
        titleEn: "Setting a Wake-up Call",
        description: "通过前台设置早晨叫醒电话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, could I get a wake-up call tomorrow morning?",
            textZh: "你好，能帮我设置明天早上的叫醒电话吗？",
            casualVersion: "Hey, can you set up a wake-up call for me?",
            commonMistake: {
              wrong: "Can you give me a wake-up call tomorrow morning?",
              correct: "Could I get a wake-up call tomorrow morning?",
              explanation: "直接说“give me”听起来有些命令或生硬，“could I get”更礼貌自然。",
            },
            formalityVariants: {
              casual: "Hey, can I get a wake-up call tomorrow?",
              standard: "Hi, could I get a wake-up call tomorrow morning?",
              formal: "Good evening, I would like to request a wake-up call for tomorrow morning, please.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! What time would you like the call?",
            textZh: "当然！您想几点叫醒？",
            alternativeExpressions: [
              {
                textEn: "Sure thing! What time do you need to be up?",
                textZh: "没问题！您几点需要起床？",
                actionHint: "告诉对方你要几点叫醒",
                frequency: "common",
              },
            ],
            casualVersion: "Sure thing! What time ya want it?",
            formalityVariants: {
              casual: "Sure thing! What time you want it?",
              standard: "Of course! What time would you like the call?",
              formal: "Certainly, sir/madam. At what time would you prefer to receive your wake-up call?",
            },
          },
          {
            speaker: "you",
            textEn: "5:30 AM, please. I have an early flight to catch.",
            textZh: "早上5:30。我要赶早班飞机。",
            casualVersion: "5:30 AM, please. Gotta catch an early flight.",
            commonMistake: {
              wrong: "I need to catch early flight.",
              correct: "I have an early flight to catch.",
              explanation: "英文中，动词catch前常加 'an' 或 'the'，用 'have a flight to catch' 更地道。",
            },
            formalityVariants: {
              casual: "5:30 AM, please. Gotta catch an early flight.",
              standard: "5:30 AM, please. I have an early flight to catch.",
              formal: "I would appreciate the call at 5:30 AM, as I have an early flight departure.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "5:30 AM, got it. Would you like a backup call as well? Some guests like a second call 10 minutes later just in case.",
            textZh: "早上5:30，好的。需要备用叫醒吗？有些客人喜欢10分钟后再打一次以防万一。",
            keyPhrases: [
              { en: "backup call", zh: "备用叫醒" },
              { en: "just in case", zh: "以防万一" },
            ],
            vocabNotes: {
              "backup call": {
                meaningInContext: "在这里表示第二次叫醒电话，防止第一次没醒",
                similarUsage: "类似用法：I set a backup alarm on my phone.（我在手机上设了备用闹钟）",
              },
            },
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "5:30, done. Want a second call 10 minutes later? A lot of people do that for early flights.",
                textZh: "5:30，搞定。要不要10分钟后再打一次？很多赶早班飞机的人都这样。",
                actionHint: "考虑是否需要备用叫醒",
                frequency: "common",
              },
              {
                textEn: "Got it — 5:30 AM. I can also set a backup at 5:40 if you want. Better safe than sorry, right?",
                textZh: "收到——早上5:30。如果需要，5:40还可以再打一次。保险起见嘛。",
                actionHint: "决定是否加备用叫醒",
                frequency: "common",
              },
            ],
            casualVersion:
              "5:30 AM, got it. Wanna backup call too? Some folks like a second one 10 min later, just in case.",
            formalityVariants: {
              casual:
                "5:30 AM, got it. Wanna backup call too? Some folks like a second one 10 min later, just in case.",
              standard:
                "5:30 AM, got it. Would you like a backup call as well? Some guests like a second call 10 minutes later just in case.",
              formal:
                "Understood, 5:30 AM. May I inquire if you would prefer a secondary wake-up call as well? Some of our guests find a second call 10 minutes thereafter to be beneficial as a precautionary measure.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. A backup call at 5:40 would be great. I'm a heavy sleeper.",
            textZh: "好的。5:40再打一次。我睡得很沉。",
            culturalNote: '"heavy sleeper" 形容睡觉很沉、不容易醒的人，反义词是 "light sleeper"（浅眠的人）。',
            casualVersion: "Yeah, definitely. 5:40 for the backup would be awesome. I sleep like a log.",
            commonMistake: {
              wrong: "I am heavy sleeper.",
              correct: "I'm a heavy sleeper.",
              explanation: "形容词 'heavy' 和名词 'sleeper' 组成短语时，'sleeper' 前需加不定冠词 'a'。",
            },
            formalityVariants: {
              casual: "Yeah, definitely. 5:40 for the backup would be awesome. I sleep like a log.",
              standard: "Yes, please. A backup call at 5:40 would be great. I'm a heavy sleeper.",
              formal:
                "Yes, that would be advisable. A secondary call at 5:40 AM would be most helpful, as I tend to sleep quite soundly.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "No problem — 5:30 and 5:40 AM. I've noted both. Would you also like us to arrange an early checkout or call a taxi for you?",
            textZh: "没问题——5:30和5:40。都记下了。需要我们安排提前退房或帮您叫出租车吗？",
            keyPhrases: [
              { en: "early checkout", zh: "提前退房" },
              { en: "arrange", zh: "安排" },
            ],
            isBranchPoint: true,
            responseTip: "可以趁机安排好明早的退房和交通",
            alternativeExpressions: [
              {
                textEn: "All set — 5:30 and 5:40. Need anything else for the morning? Taxi? Early checkout?",
                textZh: "搞定——5:30和5:40。早上还需要别的吗？出租车？提前退房？",
                actionHint: "可以顺便安排交通",
                frequency: "common",
              },
              {
                textEn: "Both calls are locked in. Want us to book a cab or set up express checkout while we're at it?",
                textZh: "两次叫醒都定好了。要不要顺便订出租车或快速退房？",
                actionHint: "一起安排好明早的事",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries — 5:30 and 5:40 AM. Got 'em down. Need us to set up an early checkout or grab a cab for ya?",
            formalityVariants: {
              casual:
                "No worries — 5:30 and 5:40 AM. Got 'em down. Need us to set up an early checkout or grab a cab for ya?",
              standard:
                "No problem — 5:30 and 5:40 AM. I've noted both. Would you also like us to arrange an early checkout or call a taxi for you?",
              formal:
                "Certainly, the 5:30 AM and 5:40 AM calls have been duly noted. Additionally, would you require assistance with an expedited checkout or the arrangement of a taxi service?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, yes. Could you have a taxi ready at 6:15? I need to be at the airport by 7.",
            textZh: "好的。能帮我6:15准备好出租车吗？我7点要到机场。",
            casualVersion: "Actually, yeah. Can you get a taxi for 6:15? Gotta be at the airport by 7.",
            commonMistake: {
              wrong: "I need to go to airport at 7.",
              correct: "I need to be at the airport by 7.",
              explanation: "“be at the airport”表示到达和停留在机场，“by 7”表示不晚于7点。",
            },
            formalityVariants: {
              casual: "Actually, yeah. Can you get a taxi for 6:15? Gotta be at the airport by 7.",
              standard: "Actually, yes. Could you have a taxi ready at 6:15? I need to be at the airport by 7.",
              formal:
                "Indeed, that would be beneficial. Would it be possible to arrange for a taxi to be ready at 6:15 AM? I am required to be at the airport by 7:00 AM.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "A taxi at 6:15 AM to the airport. I'll book that for you. You can do an express checkout — just drop your key cards in the box by the front desk and we'll email you the final bill. That saves time in the morning.",
            textZh:
              "早上6:15到机场的出租车。我帮您预订。您可以快速退房——把房卡投进前台旁边的盒子里，我们会邮件发送最终账单。这样早上能省时间。",
            keyPhrases: [
              { en: "express checkout", zh: "快速退房" },
              { en: "drop your key cards", zh: "投入房卡" },
              { en: "final bill", zh: "最终账单" },
            ],
            vocabNotes: {
              "express checkout": {
                meaningInContext: "在这里表示简化的退房流程，不用排队在前台办理，只需放下房卡即可",
                similarUsage:
                  "类似用法：Most hotels offer express checkout via the TV or app.（大多数酒店都提供通过电视或APP快速退房）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Taxi's booked for 6:15. For checkout, just drop your keys in the drop box by the desk and we'll email you the receipt. Easy peasy.",
                textZh: "出租车订好6:15。退房的话，把房卡扔进前台旁边的投放箱就行，我们邮件发收据。超简单。",
                actionHint: "记住快速退房流程",
                frequency: "common",
              },
              {
                textEn:
                  "All set — cab at 6:15. You can do express checkout: leave your key cards at the desk, and your bill goes straight to your email.",
                textZh: "搞定——6:15出租车。可以快速退房：房卡留在前台，账单直接发邮件。",
                actionHint: "了解快速退房步骤",
                frequency: "common",
              },
            ],
            casualVersion:
              "Taxi for 6:15 AM to the airport. Got it booked. You can just do an express checkout — toss your key cards in the box up front and we'll shoot you the bill later. Saves time.",
            formalityVariants: {
              casual:
                "Taxi for 6:15 AM to the airport. Got it booked. You can just do an express checkout — toss your key cards in the box up front and we'll shoot you the bill later. Saves time.",
              standard:
                "A taxi at 6:15 AM to the airport. I'll book that for you. You can do an express checkout — just drop your key cards in the box by the front desk and we'll email you the final bill. That saves time in the morning.",
              formal:
                "Very well, a taxi will be reserved for you at 6:15 AM for transport to the airport. For your convenience, we offer an express checkout service; simply deposit your key cards into the designated box at the reception, and your final invoice will be promptly emailed to you. This streamlines your departure process.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very convenient. So I just leave the key cards and go?",
            textZh: "很方便。就是把房卡留下直接走？",
            commonMistake: {
              wrong: "Is that just leave the room card and go?",
              correct: "So I just leave the room card and go?",
              explanation: "中文直译时容易漏掉问句开头的'So'或'Do I'，显得不自然。",
            },
            casualVersion: "Oh, nice. So I just leave the keys and bounce?",
            formalityVariants: {
              casual: "Oh, nice. So I just leave the keys and bounce?",
              standard: "That's very convenient. So I just leave the key cards and go?",
              formal:
                "That is exceedingly convenient. Am I correct in understanding that I merely need to deposit the key cards upon my departure?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Exactly. Just make sure to check your room one last time for any belongings. We'll process everything and send the receipt to your email on file. Have a safe flight tomorrow!",
            textZh:
              "没错。只要记得最后检查一下房间有没有遗留物品。我们会处理好一切，收据发到您登记的邮箱。祝明天一路平安！",
            keyPhrases: [
              { en: "belongings", zh: "随身物品" },
              { en: "on file", zh: "登记在案的" },
              { en: "have a safe flight", zh: "一路平安" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep — just do a quick sweep of the room, drop the keys, and you're good to go. We'll email your receipt. Safe travels!",
                textZh: "对——快速检查一下房间，放下房卡就可以走了。收据我们邮件发。一路顺风！",
                actionHint: "离开前检查房间",
                frequency: "common",
              },
              {
                textEn:
                  "That's it! Just check you haven't left anything behind. Receipt goes to your email. Have a great flight!",
                textZh: "就这样！检查一下有没有忘拿的东西。收据发邮件。祝飞行愉快！",
                actionHint: "最后检查一遍房间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. Just double-check your room for anything you might've left. We'll handle everything else and send the receipt to your email. Have a good flight tomorrow!",
            formalityVariants: {
              casual:
                "Yep. Just double-check your room for anything you might've left. We'll handle everything else and send the receipt to your email. Have a good flight tomorrow!",
              standard:
                "Exactly. Just make sure to check your room one last time for any belongings. We'll process everything and send the receipt to your email on file. Have a safe flight tomorrow!",
              formal:
                "Precisely. Kindly ensure a thorough final inspection of your room for any personal effects. We will proceed with processing your departure and forward the receipt to your registered email address. We wish you a pleasant journey tomorrow.",
            },
          },
        ],
      },

      // --- Flow 2: 早餐送房间 ---
      {
        id: "morning-breakfast",
        titleZh: "早餐送到房间",
        titleEn: "In-Room Breakfast Order",
        description: "前一天晚上预订早餐送到房间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'd like to order breakfast to be delivered to my room tomorrow morning. Is that possible?",
            textZh: "你好，我想预订明天早上把早餐送到房间。可以吗？",
            casualVersion: "Hey, can I get breakfast delivered to my room tomorrow morning?",
            commonMistake: {
              wrong: "I want to order breakfast.",
              correct: "I'd like to order breakfast.",
              explanation: "I want听起来比较直接生硬，I'd like to更礼貌委婉。",
            },
            formalityVariants: {
              casual: "Hey, can I get breakfast delivered to my room tomorrow morning?",
              standard:
                "Hello, I'd like to order breakfast to be delivered to my room tomorrow morning. Is that possible?",
              formal:
                "Good evening, I was wondering if it would be possible to arrange for breakfast to be delivered to my room tomorrow morning?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Absolutely! We have a breakfast menu you can order from. What time would you like it delivered?",
            textZh: "当然可以！我们有早餐菜单供您选择。您想几点送到？",
            alternativeExpressions: [
              {
                textEn:
                  "Sure! There's a room service breakfast menu on the door hanger in your room. Just fill it out and hang it on your door tonight.",
                textZh: "可以！房间里门把手上有房间服务早餐菜单。填好今晚挂在门上就行。",
                actionHint: "可以用门把手挂牌点餐",
                frequency: "common",
              },
            ],
            casualVersion: "Totally! We've got a breakfast menu. What time d'you want it delivered?",
            formalityVariants: {
              casual: "Totally! We've got a breakfast menu. What time d'you want it delivered?",
              standard:
                "Absolutely! We have a breakfast menu you can order from. What time would you like it delivered?",
              formal:
                "Certainly, sir/ma'am. We do offer an extensive breakfast menu. At what time would you prefer the delivery?",
            },
          },
          {
            speaker: "you",
            textEn: "Around 7 AM. What do you recommend?",
            textZh: "大约7点。你推荐什么？",
            casualVersion: "Around 7. What do you recommend?",
            commonMistake: {
              wrong: "What you recommend?",
              correct: "What do you recommend?",
              explanation: "疑问句中通常需要助动词 'do/does'。",
            },
            formalityVariants: {
              casual: "Around 7. What do you recommend?",
              standard: "Around 7 AM. What do you recommend?",
              formal:
                "Approximately 7:00 AM would be ideal. Could you perhaps offer some recommendations from the menu?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Our most popular option is the American breakfast — two eggs any style, bacon or sausage, toast, and fresh orange juice. It's $22. We also have a lighter continental breakfast with pastries, fruit, yogurt, and coffee for $16.",
            textZh:
              "最受欢迎的是美式早餐——两个蛋任选做法、培根或香肠、吐司和鲜榨橙汁。22美元。还有轻食欧陆早餐，有糕点、水果、酸奶和咖啡，16美元。",
            keyPhrases: [
              { en: "eggs any style", zh: "蛋任选做法" },
              { en: "American breakfast", zh: "美式早餐" },
              { en: "continental breakfast", zh: "欧陆式早餐" },
              { en: "pastries", zh: "糕点" },
            ],
            vocabNotes: {
              "eggs any style": {
                meaningInContext:
                  "在这里表示鸡蛋可以选择任意烹饪方式：scrambled（炒蛋）、sunny side up（单面煎）、over easy（双面半熟）等",
                similarUsage: "类似用法：How would you like your eggs?（您的蛋要怎么做？）",
              },
              "continental breakfast": {
                meaningInContext: "在这里指欧陆式早餐，通常是冷食为主的简单早餐（糕点、水果、咖啡），不含热菜",
                similarUsage: "类似用法：The room rate includes a continental breakfast.（房费包含欧陆早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Our bestseller is the American — eggs however you like, bacon or sausage, toast, and OJ. $22. Or the continental for $16 if you want something lighter.",
                textZh: "最畅销的是美式——鸡蛋随便做法、培根或香肠、吐司和橙汁。22美元。想清淡点，欧陆16美元。",
                actionHint: "选择早餐套餐",
                frequency: "common",
              },
              {
                textEn:
                  "The full American is super popular — $22. Comes with eggs, meat, toast, juice. Or $16 for a lighter continental.",
                textZh: "全套美式很受欢迎——22美元。有蛋、肉、吐司、果汁。清淡版欧陆16美元。",
                actionHint: "选美式或欧陆早餐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Our most popular's the American breakfast—two eggs, bacon or sausage, toast, OJ. $22. Or a lighter continental with pastries, fruit, yogurt, coffee for $16.",
            formalityVariants: {
              casual:
                "Our most popular's the American breakfast—two eggs, bacon or sausage, toast, OJ. $22. Or a lighter continental with pastries, fruit, yogurt, coffee for $16.",
              standard:
                "Our most popular option is the American breakfast — two eggs any style, bacon or sausage, toast, and fresh orange juice. It's $22. We also have a lighter continental breakfast with pastries, fruit, yogurt, and coffee for $16.",
              formal:
                "Our signature and most frequently chosen option is the traditional American breakfast, which includes two eggs prepared to your preference, a choice of bacon or sausage, toast, and freshly squeezed orange juice, priced at $22. Alternatively, we offer a more modest continental breakfast featuring a selection of pastries, fresh fruit, yogurt, and coffee for $16.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have the American breakfast with scrambled eggs and bacon. And a pot of hot coffee, please.",
            textZh: "我要美式早餐，炒蛋加培根。再来一壶热咖啡。",
            casualVersion: "I'll do the American breakfast, scrambled eggs and bacon. And a pot of hot coffee.",
            commonMistake: {
              wrong: "I want American breakfast.",
              correct: "I'll have the American breakfast.",
              explanation: "I'll have 更自然礼貌地表示“我点这个”。",
            },
            formalityVariants: {
              casual: "I'll do the American breakfast, scrambled eggs and bacon. And a pot of hot coffee.",
              standard:
                "I'll have the American breakfast with scrambled eggs and bacon. And a pot of hot coffee, please.",
              formal:
                "I would be delighted to have the American breakfast, specifically with scrambled eggs and bacon. Additionally, I would appreciate a pot of hot coffee.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "American breakfast, scrambled eggs, bacon, and a pot of coffee. Would you like milk or cream with your coffee? And any food allergies I should note?",
            textZh: "美式早餐，炒蛋，培根，一壶咖啡。咖啡要配牛奶还是奶油？有什么食物过敏需要注意吗？",
            keyPhrases: [
              { en: "food allergies", zh: "食物过敏" },
              { en: "cream", zh: "奶油" },
            ],
            responseTip: "告知是否有过敏或饮食限制",
            alternativeExpressions: [
              {
                textEn:
                  "So that's scrambled eggs, bacon, and coffee. Milk or cream? Oh, and any allergies I should flag for the kitchen?",
                textZh: "那就是炒蛋、培根和咖啡。要牛奶还是奶油？对了，有过敏需要跟厨房说吗？",
                actionHint: "告知过敏信息",
                frequency: "common",
              },
              {
                textEn:
                  "Got it — American with scrambled and bacon, plus coffee. Anything you can't eat? Allergies, dietary stuff?",
                textZh: "收到——美式炒蛋培根加咖啡。有什么不能吃的吗？过敏或忌口？",
                actionHint: "说明饮食限制",
                frequency: "common",
              },
            ],
            casualVersion:
              "American breakfast, scrambled eggs, bacon, and coffee. Milk or cream with that? Any allergies I should know about?",
            formalityVariants: {
              casual:
                "American breakfast, scrambled eggs, bacon, and coffee. Milk or cream with that? Any allergies I should know about?",
              standard:
                "American breakfast, scrambled eggs, bacon, and a pot of coffee. Would you like milk or cream with your coffee? And any food allergies I should note?",
              formal:
                "So, to confirm: the American breakfast with scrambled eggs and bacon, along with a pot of coffee. Regarding your coffee, would you prefer milk or cream? Also, do you have any dietary restrictions or food allergies that we should be aware of?",
            },
          },
          {
            speaker: "you",
            textEn: "Just milk, please. No allergies. How will I know when it's at my door?",
            textZh: "牛奶就好。没有过敏。怎么知道送到门口了？",
            casualVersion: "Just milk. No allergies. How'll I know when it's at my door?",
            commonMistake: {
              wrong: "How know it at my door?",
              correct: "How will I know when it's at my door?",
              explanation: "疑问句通常需要主谓结构完整，动词时态正确。",
            },
            formalityVariants: {
              casual: "Just milk. No allergies. How'll I know when it's at my door?",
              standard: "Just milk, please. No allergies. How will I know when it's at my door?",
              formal:
                "Just milk, thank you. I have no allergies. Could you please explain the procedure for how I will be notified upon its arrival at my door?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "We'll knock on your door and announce room service. If you'd prefer not to be disturbed, we can leave the tray outside your door and send you a text. Which would you prefer?",
            textZh: "我们会敲门并说客房服务。如果您不想被打扰，我们可以把餐盘放在门外然后发短信通知您。您更喜欢哪种？",
            keyPhrases: [
              { en: "announce room service", zh: "报说客房服务" },
              { en: "leave the tray", zh: "把餐盘放下" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "We'll give your door a knock and call out 'room service.' Or if you'd rather not be woken up, we can just leave it outside and text you.",
                textZh: "我们会敲门喊'客房服务'。如果不想被吵醒，也可以放门外发短信通知。",
                actionHint: "选择送餐方式",
                frequency: "common",
              },
              {
                textEn:
                  "We'll knock. But if you don't want to be disturbed, we can set it outside your door and shoot you a text.",
                textZh: "我们会敲门。不过如果不想被打扰，可以放在门外给您发短信。",
                actionHint: "告诉对方你的偏好",
                frequency: "common",
              },
            ],
            casualVersion:
              "We'll knock and say 'room service'. If you don't wanna be bothered, we can leave it outside and text you. Which d'you prefer?",
            formalityVariants: {
              casual:
                "We'll knock and say 'room service'. If you don't wanna be bothered, we can leave it outside and text you. Which d'you prefer?",
              standard:
                "We'll knock on your door and announce room service. If you'd prefer not to be disturbed, we can leave the tray outside your door and send you a text. Which would you prefer?",
              formal:
                "Our standard procedure is to knock on your door and audibly announce 'Room Service'. However, should you prefer not to be disturbed, we can alternatively leave the tray discreetly outside your door and send you a text message notification. Which of these options would be more suitable for you?",
            },
          },
          {
            speaker: "you",
            textEn: "Please knock — I'll be up by then. Can I just charge it to the room?",
            textZh: "请敲门——到时候我会起来的。可以记到房费上吗？",
            culturalNote: '"charge it to the room" 是酒店常用的说法，意思是把费用挂到房间账单上，退房时一起结算。',
            casualVersion: "Yeah, just knock — I'll be up. Can I just charge it to the room?",
            commonMistake: {
              wrong: "Can charge it to room?",
              correct: "Can I just charge it to the room?",
              explanation: "疑问句需要主语，且房间前通常需要定冠词 'the'。",
            },
            formalityVariants: {
              casual: "Yeah, just knock — I'll be up. Can I just charge it to the room?",
              standard: "Please knock — I'll be up by then. Can I just charge it to the room?",
              formal:
                "Kindly proceed with knocking; I will certainly be awake by that hour. Furthermore, may I inquire if it is possible to charge this expense directly to my room?",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Of course, it'll be charged to your room. So that's an American breakfast at 7 AM tomorrow for room... what's your room number?",
            textZh: "当然，记到房费上。那就是明早7点的美式早餐，您的房间号是？",
            alternativeExpressions: [
              {
                textEn: "Sure, we'll put it on the room tab. American breakfast at 7 — and what room are you in?",
                textZh: "好的，挂房费。7点美式早餐——您住几号房？",
                actionHint: "告诉对方房间号",
                frequency: "common",
              },
              {
                textEn: "No problem, room charge it is. So 7 AM, American breakfast. Which room number?",
                textZh: "没问题，记房费。那就7点美式早餐。房间号多少？",
                actionHint: "说出房间号",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, it'll go on your room bill. So that's American breakfast, 7 AM tomorrow for room... what's your room number?",
            formalityVariants: {
              casual:
                "Yeah, it'll go on your room bill. So that's American breakfast, 7 AM tomorrow for room... what's your room number?",
              standard:
                "Of course, it'll be charged to your room. So that's an American breakfast at 7 AM tomorrow for room... what's your room number?",
              formal:
                "Certainly, the charge will be applied directly to your room account. To confirm, that will be an American breakfast delivered at 7:00 AM tomorrow morning to room number... Could you please provide your room number?",
            },
          },
          {
            speaker: "you",
            textEn: "Room 815.",
            textZh: "815房。",
            casualVersion: "815.",
            formalityVariants: {
              casual: "815.",
              standard: "Room 815.",
              formal: "My room number is 815.",
            },
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn:
              "Room 815, American breakfast at 7 AM. All set! Enjoy your evening, and we'll see you in the morning.",
            textZh: "815房，早上7点美式早餐。搞定！祝您晚上愉快，明早见。",
            keyPhrases: [{ en: "all set", zh: "搞定了/都安排好了" }],
            literalMeaning: '"all set" 字面意思是「全部设置好了」，实际口语中表示「一切就绪、搞定了」。',
            alternativeExpressions: [
              {
                textEn: "815, 7 AM, American breakfast — you're all good! Have a lovely evening.",
                textZh: "815房，7点，美式早餐——没问题了！祝您晚上愉快。",
                actionHint: "确认无误后挂电话",
                frequency: "common",
              },
              {
                textEn: "Got it — breakfast at 7 for room 815. We'll knock when it's there. Good night!",
                textZh: "收到——815房7点早餐。到了我们会敲门。晚安！",
                actionHint: "安心休息等明早送餐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Room 815, American breakfast, 7 AM. You're all set! Enjoy your night, see ya in the morning.",
            formalityVariants: {
              casual: "Room 815, American breakfast, 7 AM. You're all set! Enjoy your night, see ya in the morning.",
              standard:
                "Room 815, American breakfast at 7 AM. All set! Enjoy your evening, and we'll see you in the morning.",
              formal:
                "Confirmation received: Room 815, American breakfast at 7:00 AM. Everything is arranged. We wish you a pleasant evening, and we look forward to serving you in the morning.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店餐厅用餐 ====================
  {
    id: "hotel-16",
    category: "hotel",
    titleZh: "酒店餐厅用餐",
    titleEn: "Hotel Restaurant Dining",
    description: "在酒店餐厅用餐，包括预订、点餐和特殊要求",
    otherRole: "餐厅服务员",
    otherRoleIcon: "utensils",
    flows: [
      // --- Flow 1: 预订和用餐 ---
      {
        id: "restaurant-reservation",
        titleZh: "餐厅预订与用餐",
        titleEn: "Restaurant Reservation & Dining",
        description: "在酒店餐厅预订位置并用餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to reserve a table for two at the hotel restaurant for tonight.",
            textZh: "你好，我想在酒店餐厅预订今晚两个人的位子。",
            casualVersion: "Hi, wanna book a table for two at the hotel restaurant tonight.",
            commonMistake: {
              wrong: "I want to reserve a table",
              correct: "I'd like to reserve a table",
              explanation: '在英文中，"I want" 听起来比较直接和不礼貌，"I\'d like to" 更委婉客气。',
            },
            formalityVariants: {
              casual: "Hey, wanna book a table for two at the hotel restaurant tonight?",
              standard: "Hi, I'd like to reserve a table for two at the hotel restaurant for tonight.",
              formal:
                "Good morning/afternoon, I would like to inquire about reserving a table for two this evening at your esteemed hotel restaurant.",
            },
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "Certainly! What time would you prefer? We have availability at 6:30 and 8 PM.",
            textZh: "当然！您想几点？6:30和晚上8点有空位。",
            commonMistake: {
              wrong: "What time do you want?",
              correct: "What time would you prefer?",
              explanation: "直接问 '你想要什么时间' 听起来不如 '您倾向于什么时间' 礼貌。",
            },
            keyPhrases: [
              { en: "reserve a table", zh: "预订位子" },
              { en: "availability", zh: "空位/可用时段" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! We're a bit busy tonight. I can do 6:30 or 8. Which works better for you?",
                textZh: "好的！今晚比较忙。6:30或8点可以。哪个更合适？",
                actionHint: "选择用餐时间",
                frequency: "common",
              },
            ],
            casualVersion: "Sure! What time works for ya? We've got 6:30 and 8.",
            formalityVariants: {
              casual: "Sure! What time works for ya? We've got 6:30 and 8.",
              standard: "Certainly! What time would you prefer? We have availability at 6:30 and 8 PM.",
              formal:
                "Indeed! May I ask what time would be most convenient for your reservation? We currently have openings at 6:30 PM and 8:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "8 PM works. Could we get a table by the window if possible?",
            textZh: "8点可以。能安排靠窗的位子吗？",
            casualVersion: "8's good. Can we get a window table?",
            commonMistake: {
              wrong: "8 PM is good. Can get a table by the window?",
              correct: "8 PM works. Could we get a table by the window if possible?",
              explanation: "表达同意用 'works' 更自然。请求时需有主语 'we'，并使用 'could' 或 'can we'。",
            },
            formalityVariants: {
              casual: "8 works. Can we get a window table?",
              standard: "8 PM works. Could we get a table by the window if possible?",
              formal:
                "8:00 PM would be perfectly suitable. We would greatly appreciate it if a window table could be accommodated, should one be available.",
            },
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "I'll do my best to reserve a window table for you. It's under what name?",
            textZh: "我尽量给您留靠窗的桌子。请问订哪个名字？",
            commonMistake: {
              wrong: "I will try to reserve a window table for you. What name?",
              correct: "I'll do my best to get you a window table. Under what name should I make the reservation?",
              explanation: "直接说“什么名字？”在英文中不礼貌，应说“用哪个名字预订？”",
            },
            keyPhrases: [
              { en: "window table", zh: "靠窗的桌子" },
              { en: "under what name", zh: "订哪个名字" },
            ],
            alternativeExpressions: [
              {
                textEn: "I can't promise a window spot, but I'll see what I can do. What name should I put it under?",
                textZh: "靠窗不一定能保证，但我尽量安排。订什么名字？",
                actionHint: "提供姓名和房间号",
                frequency: "common",
              },
              {
                textEn: "We'll try our best for the window. And the reservation name?",
                textZh: "靠窗的位子我们尽量安排。预订名字是？",
                actionHint: "报上姓名",
                frequency: "common",
              },
            ],
            casualVersion: "I'll try for a window table. Name for the res?",
            formalityVariants: {
              casual: "I'll try my best for a window table. What name?",
              standard: "I'll do my best to reserve a window table for you. It's under what name?",
              formal:
                "I will certainly endeavor to secure a window table for your reservation. And under what name should I place this booking?",
            },
          },
          {
            speaker: "you",
            textEn: "Wang, room 815. We're hotel guests.",
            textZh: "王，815房。我们是住店客人。",
            commonMistake: {
              wrong: "Wang, room 815. We are hotel guests.",
              correct: "Wang, room 815. We're staying here.",
              explanation: "“We are hotel guests”听起来有些生硬，不如“We're staying here”自然。",
            },
            casualVersion: "Wang, room 815. We're staying here.",
            formalityVariants: {
              casual: "Wang, 815. We're guests.",
              standard: "Wang, room 815. We're hotel guests.",
              formal: "The name is Wang, and our room number is 815. We are currently guests of the hotel.",
            },
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn:
              "Perfect, Mr. Wang. As a hotel guest, you'll receive a 15% discount on food and beverages. We'll see you at 8!",
            textZh: "好的，王先生。作为住店客人，您可享受餐饮八五折优惠。8点见！",
            commonMistake: {
              wrong: "You can get 15% discount for dining.",
              correct: "You'll receive a 15% discount on dining.",
              explanation: "“can get”听起来口语化且不正式，用“will receive”更标准。",
            },
            keyPhrases: [{ en: "discount on food and beverages", zh: "餐饮折扣" }],
            vocabNotes: {
              beverages: {
                meaningInContext: "在这里泛指所有饮料，包括酒精和非酒精饮品",
                similarUsage: "类似用法：The price includes food and beverages.（价格包含餐饮）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Great, Mr. Wang! Since you're staying with us, you get 15% off dining. See you at 8!",
                textZh: "好的，王先生！因为您是住店客人，用餐享八五折。8点见！",
                actionHint: "记住有折扣优惠",
                frequency: "common",
              },
              {
                textEn:
                  "All booked! Hotel guests get a nice 15% discount on food and drinks. We'll have your table ready at 8.",
                textZh: "订好了！住店客人餐饮享八五折。8点桌子给您留好。",
                actionHint: "8点准时去餐厅",
                frequency: "common",
              },
            ],
            casualVersion: "Great, Mr. Wang. Since you're a guest, you get 15% off food and drinks. See ya at 8!",
            formalityVariants: {
              casual: "Awesome, Mr. Wang. Guests get 15% off food/drinks. See ya at 8!",
              standard:
                "Perfect, Mr. Wang. As a hotel guest, you'll receive a 15% discount on food and beverages. We'll see you at 8!",
              formal:
                "Excellent, Mr. Wang. I'm pleased to inform you that as a valued hotel guest, you are eligible for a 15% discount on all food and beverage purchases. We very much look forward to welcoming you at 8:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. By the way, do you have any vegetarian options? My wife doesn't eat meat.",
            textZh: "好的。顺便问一下，有素食选择吗？我太太不吃肉。",
            casualVersion: "Cool. Oh, d'you guys have vegetarian stuff? Wife doesn't eat meat.",
            commonMistake: {
              wrong: "My wife no eat meat.",
              correct: "My wife doesn't eat meat.",
              explanation: "中文习惯说“不吃”，但英文的否定句动词前要加助动词do/does。",
            },
            formalityVariants: {
              casual: "Cool. Any vegetarian options? Wife's vegetarian.",
              standard: "Great. By the way, do you have any vegetarian options? My wife doesn't eat meat.",
              formal:
                "That's wonderful. I was also wondering, do you offer any vegetarian options? My wife observes a vegetarian diet.",
            },
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn:
              "Absolutely! We have a separate vegetarian menu with about 8 dishes. We can also modify most of our regular dishes to be vegetarian. Just let your server know when you're seated.",
            textZh: "当然有！我们有单独的素食菜单，大约8道菜。大部分常规菜品也可以改成素食版。入座后告诉服务员就行。",
            commonMistake: {
              wrong: "Tell your server when you sit down.",
              correct: "Just let your server know when you're seated.",
              explanation: "“sit down”在语境中更常指动作本身，而“be seated”指就座状态。",
            },
            keyPhrases: [
              { en: "vegetarian menu", zh: "素食菜单" },
              { en: "modify", zh: "修改/调整" },
              { en: "server", zh: "服务员" },
            ],
            localVariants: {
              "en-US": "Just let your server know.",
              "en-GB": "Just let your waiter know.",
              "en-AU": "Just tell your waiter when you sit down.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh, definitely! We've got a whole veggie menu. And most dishes on the regular menu can be made vegetarian too — just ask your waiter.",
                textZh: "当然有！我们有完整的素食菜单。普通菜单上大部分菜也能做素食版——跟服务员说就行。",
                actionHint: "到时候向服务员确认",
                frequency: "common",
              },
              {
                textEn:
                  "Plenty of veggie options! There's a dedicated menu. Your server can also customize most items — just let them know.",
                textZh: "素食选择很多！有专门的菜单。服务员也能帮您调整大部分菜品——告诉他们就好。",
                actionHint: "入座后跟服务员沟通",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! We've got a whole vegetarian menu, like 8 dishes. Plus, we can make most regular stuff vegetarian. Just tell your server when you get there.",
            formalityVariants: {
              casual: "Yep! We have a vegetarian menu, plus we can make most things veggie. Just tell your server.",
              standard:
                "Absolutely! We have a separate vegetarian menu with about 8 dishes. We can also modify most of our regular dishes to be vegetarian. Just let your server know when you're seated.",
              formal:
                "Most certainly! We do provide a distinct vegetarian menu featuring approximately eight different dishes. Furthermore, we are often able to adapt many of our standard offerings to suit vegetarian preferences. Kindly inform your server of your requirements once you are seated.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Can the bill be charged to our room?",
            textZh: "太好了。账单可以记到房费上吗？",
            casualVersion: "Awesome. Can we put the bill on our room?",
            commonMistake: {
              wrong: "Can the bill charge to our room?",
              correct: "Can the bill be charged to our room?",
              explanation: "账单是被“记账”到房间，所以需要使用被动语态 'be charged'。",
            },
            formalityVariants: {
              casual: "Great. Can we charge it to the room?",
              standard: "Perfect. Can the bill be charged to our room?",
              formal: "Excellent. Would it be possible to have the charges applied directly to our room account?",
            },
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn:
              "Yes, absolutely. Just show your room key card to the server and they'll add it to your room bill. See you tonight!",
            textZh: "当然可以。出示您的房卡给服务员就行，会挂到房费上。今晚见！",
            commonMistake: {
              wrong: "Show your room card to the server, and they will put it on your room.",
              correct: "Show your room key card to the server and they will charge it to your room.",
              explanation: "“room card”不如“room key card”具体，且“put it on your room”不如“charge it to your room”地道。",
            },
            keyPhrases: [
              { en: "room key card", zh: "房卡" },
              { en: "add it to your room bill", zh: "挂到房费上" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! Just hand your key card to the waiter and it goes straight to your room tab. See you at 8!",
                textZh: "当然！把房卡给服务员就直接挂房费了。8点见！",
                actionHint: "记得带房卡去餐厅",
                frequency: "common",
              },
              {
                textEn: "Yep, just charge it to the room with your key card. Easy peasy. See you tonight!",
                textZh: "可以的，用房卡直接挂房费就行。很简单。今晚见！",
                actionHint: "带好房卡",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, totally. Just flash your room key to the server and they'll put it on your bill. See ya tonight!",
            formalityVariants: {
              casual: "Yep, totally. Just show your key to the server, they'll add it to your bill. See ya!",
              standard:
                "Yes, absolutely. Just show your room key card to the server and they'll add it to your room bill. See you tonight!",
              formal:
                "Yes, indeed. Simply present your room key card to your server, and they will ensure the charges are properly posted to your room account. We anticipate your arrival this evening!",
            },
          },
        ],
      },

      // --- Flow 2: 点菜和特殊饮食 ---
      {
        id: "ordering-food",
        titleZh: "餐厅点菜",
        titleEn: "Ordering at the Restaurant",
        description: "在酒店餐厅点菜并说明饮食偏好",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good evening! Welcome to the Skyview Restaurant. Here are your menus. Can I start you off with something to drink?",
            textZh: "晚上好！欢迎来到Skyview餐厅。这是菜单。先点些喝的吗？",
            culturalNote: "美国服务生打招呼很直接，不需要'请问'之类的客套语",
            commonMistake: {
              wrong: "Do you want something to drink first?",
              correct: "Can I start you off with something to drink?",
              explanation: "“do you want”可能听起来不够礼貌，用“Can I start you off with”更委婉。",
            },
            keyPhrases: [{ en: "start you off", zh: "先开始/先来点" }],
            vocabNotes: {
              "start you off": {
                meaningInContext: "在这里是餐厅服务员的常用说法，意思是「先给您来点什么」，通常指先点饮料",
                similarUsage: "类似用法：Can I start you off with some water?（先给您来杯水？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Evening! What can I get you to drink while you look at the menu?",
                textZh: "晚上好！看菜单的时候先喝点什么？",
                actionHint: "先点饮品",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Welcome to Skyview. Menus for you. Can I get you guys a drink to start?",
            formalityVariants: {
              casual: "Hey! Welcome to Skyview. Menus. Can I get you guys a drink to start?",
              standard:
                "Good evening! Welcome to the Skyview Restaurant. Here are your menus. Can I start you off with something to drink?",
              formal:
                "Good evening, and a warm welcome to the Skyview Restaurant. Here are your menus. May I begin by offering you something from our beverage selection?",
            },
          },
          {
            speaker: "you",
            textEn: "Could I see the wine list? And a sparkling water for her, please.",
            textZh: "能看看酒单吗？给她来杯气泡水。",
            casualVersion: "Can I get the wine list? And a sparkling water for her.",
            commonMistake: {
              wrong: "I want to see the wine list.",
              correct: "Could I see the wine list?",
              explanation: "I want 在英语中听起来直接且不礼貌，用 Could I see 或 I'd like to see 更委婉客气。",
            },
            formalityVariants: {
              casual: "Can I get the wine list? And a sparkling water for her.",
              standard: "Could I see the wine list? And a sparkling water for her, please.",
              formal: "Excuse me, may I request the wine list? And a sparkling water for my companion, if you please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's the wine list. We have a lovely house Chardonnay and a Cabernet Sauvignon that pairs well with our steak. The sparkling water — would you prefer Perrier or San Pellegrino?",
            textZh: "这是酒单。我们有很好的招牌霞多丽和一款赤霞珠，配牛排很合适。气泡水——您要巴黎水还是圣培露？",
            culturalNote: "点饮料时服务生会询问具体品牌，直接说品牌名即可",
            commonMistake: {
              wrong: "This is wine list. Which sparkling water do you want, Perrier or San Pellegrino?",
              correct: "Here's the wine list. Would you prefer Perrier or San Pellegrino for the sparkling water?",
              explanation: "“This is wine list”不自然，应说“Here's the wine list”。“Which do you want”不够礼貌，用“would you prefer”更好。",
            },
            keyPhrases: [
              { en: "wine list", zh: "酒单" },
              { en: "house wine", zh: "招牌/店选酒" },
              { en: "pairs well with", zh: "跟...很搭配" },
            ],
            vocabNotes: {
              "pairs well with": {
                meaningInContext: "在这里表示某种酒和某道菜搭配起来味道很好",
                similarUsage: "类似用法：This white wine pairs well with seafood.（这款白葡萄酒跟海鲜很搭）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here you go. Our house Chardonnay is very popular, and the Cab Sav goes perfectly with steak. Sparkling water — Perrier or Pellegrino?",
                textZh: "给您。我们的招牌霞多丽很受欢迎，赤霞珠配牛排绝了。气泡水——巴黎水还是圣培露？",
                actionHint: "选择红酒和气泡水品牌",
                frequency: "common",
              },
              {
                textEn:
                  "I'd personally recommend the Cabernet if you're having steak — it's a great match. For the sparkling water, we have Perrier and San Pellegrino.",
                textZh: "如果吃牛排的话我个人推荐赤霞珠——非常搭。气泡水有巴黎水和圣培露。",
                actionHint: "参考服务员推荐点酒",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Here's the wine list. We got a good house Chardonnay, and a Cab that goes with our steak. Sparkling water, Perrier or San P?",
            formalityVariants: {
              casual:
                "Here's the wine list. We got a nice house Chardonnay and a Cab that's good with steak. For sparkling, Perrier or San P?",
              standard:
                "Here's the wine list. We have a lovely house Chardonnay and a Cabernet Sauvignon that pairs well with our steak. The sparkling water — would you prefer Perrier or San Pellegrino?",
              formal:
                "Certainly, here is our wine list. May I recommend our exquisite house Chardonnay or our Cabernet Sauvignon, which is an excellent complement to our steak dishes. Regarding the sparkling water, do you have a preference between Perrier and San Pellegrino?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try a glass of the Cabernet. Perrier for her. We're ready to order food too.",
            textZh: "我要一杯赤霞珠。她要巴黎水。我们也准备好点菜了。",
            casualVersion: "I'll do a glass of the Cab. Perrier for her. We're good to order food now.",
            commonMistake: {
              wrong: "I want a glass of the Cabernet.",
              correct: "I'll try a glass of the Cabernet.",
              explanation: "I want 听起来太直接，用 I'll try/have 更自然客气。",
            },
            formalityVariants: {
              casual: "I'll do a glass of the Cab. Perrier for her. We're ready to order food now.",
              standard: "I'll try a glass of the Cabernet. Perrier for her. We're ready to order food too.",
              formal:
                "I'll have a glass of the Cabernet, please. And for my companion, Perrier. We are also prepared to place our food order.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Go ahead!",
            textZh: "请说！",
            culturalNote: "此处的Go ahead不是让顾客'走开'，是'请继续/请点餐'的意思",
            commonMistake: {
              wrong: "Please say!",
              correct: "Go ahead!",
              explanation: "“Please say!”是直译，不符合英文表达习惯。“Go ahead!”更自然。",
            },
            alternativeExpressions: [
              { textEn: "Sure, what'll it be?", textZh: "好的，要什么？", actionHint: "开始点菜", frequency: "common" },
              {
                textEn: "Fire away! I'm ready when you are.",
                textZh: "说吧！准备好了。",
                actionHint: "告诉服务员你要点的菜",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, shoot!",
            formalityVariants: {
              casual: "Yep, go ahead!",
              standard: "Go ahead!",
              formal: "Please proceed with your order.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll have the ribeye steak, medium rare. And she'd like the mushroom risotto from the vegetarian menu. Also, she has a nut allergy — could you double-check that there are no nuts in the risotto?",
            textZh: "我要肋眼牛排，五分熟。她要素食菜单上的蘑菇烩饭。另外她对坚果过敏——能帮忙确认烩饭里没有坚果吗？",
            casualVersion:
              "I'll do the ribeye, medium rare. She wants the mushroom risotto off the vegetarian menu. Oh, and she's got a nut allergy—can you just make sure there are no nuts in that risotto?",
            culturalNote: "在美国提及食物过敏（如坚果过敏）是非常重要且严肃的。餐厅会非常重视并采取预防措施。",
            commonMistake: {
              wrong: "She has nut allergy. Can you confirm no nuts in the risotto?",
              correct: "She has a nut allergy — could you double-check that there are no nuts in the risotto?",
              explanation:
                "英文中过敏要说 'a nut allergy' 或 'an allergy to nuts'，并且 'double-check' 比 'confirm' 在口语中更自然。",
            },
            formalityVariants: {
              casual:
                "I'll do the ribeye, medium rare. She wants the mushroom risotto off the vegetarian menu. Btw, she's got a nut allergy, so can you make sure there aren't any nuts in that?",
              standard:
                "I'll have the ribeye steak, medium rare. And she'd like the mushroom risotto from the vegetarian menu. Also, she has a nut allergy — could you double-check that there are no nuts in the risotto?",
              formal:
                "For myself, I would appreciate the ribeye steak, prepared medium rare. My companion would prefer the mushroom risotto from your vegetarian selection. Furthermore, she has a severe nut allergy, so I would be grateful if you could verify with the kitchen that the risotto contains no nuts whatsoever.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The ribeye medium rare, and the mushroom risotto. I'll check with the kitchen about the nuts right away. The risotto usually has pine nuts on top, but we can absolutely leave those off. Would you like any appetizers or a salad to start?",
            textZh:
              "肋眼五分熟，蘑菇烩饭。我马上跟厨房确认坚果的事。烩饭上面通常有松子，但完全可以去掉。要先来点开胃菜或沙拉吗？",
            commonMistake: {
              wrong: "I will confirm about nuts. Do you want some appetizer?",
              correct: "I'll confirm with the kitchen about the nuts right away. Would you like to start with any appetizers?",
              explanation: "“confirm about nuts”不自然，应说“confirm about the nuts”。“Do you want some”不够礼貌，用“would you like to start with any”更委婉。",
            },
            keyPhrases: [
              { en: "check with the kitchen", zh: "跟厨房确认" },
              { en: "pine nuts", zh: "松子" },
              { en: "leave those off", zh: "去掉/不加" },
              { en: "appetizers", zh: "开胃菜" },
            ],
            responseTip: "服务员主动帮你确认过敏源，这是好餐厅的标准做法",
            alternativeExpressions: [
              {
                textEn:
                  "Ribeye medium rare, mushroom risotto. Good news — I'll have the kitchen skip the pine nuts. Want any starters while you wait?",
                textZh: "肋眼五分熟，蘑菇烩饭。好消息——我让厨房不放松子。等菜的时候要来点前菜吗？",
                actionHint: "决定是否加前菜",
                frequency: "common",
              },
              {
                textEn:
                  "Got it. I'll flag the nut allergy with the chef personally. The risotto normally has pine nuts but we'll leave those out. Anything else to start?",
                textZh: "收到。我会亲自跟厨师说过敏的事。烩饭通常有松子但我们会去掉。还要点别的吗？",
                actionHint: "感谢服务员并回复",
                frequency: "common",
              },
            ],
            casualVersion:
              "Ribeye, medium rare, and mushroom risotto. I'll ask the kitchen about the nuts now. Usually has pine nuts, but we can totally skip 'em. Anything for appetizers or a salad?",
            formalityVariants: {
              casual:
                "Ribeye, medium rare, mushroom risotto. Got it. I'll ask about the nuts right away. Usually has pine nuts, but we can totally leave 'em off. Any apps or salad to start?",
              standard:
                "The ribeye medium rare, and the mushroom risotto. I'll check with the kitchen about the nuts right away. The risotto usually has pine nuts on top, but we can absolutely leave those off. Would you like any appetizers or a salad to start?",
              formal:
                "Understood: the ribeye prepared medium rare, and the mushroom risotto. I will consult with the kitchen regarding the nut allergy immediately. Please be advised that the risotto typically features pine nuts as a garnish, which we can certainly omit. Might you be interested in any appetizers or a starter salad?",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for catching that. No appetizers — just the main courses.",
            textZh: "谢谢你注意到了。不要开胃菜——就主菜就好。",
            commonMistake: {
              wrong: "No appetizers - only main courses.",
              correct: "No appetizers — just the main courses.",
              explanation: "“only”在这里略显生硬，用“just”更自然。",
            },
            culturalNote: '"Thank you for catching that" 是感谢对方注意到某个重要细节的自然说法。',
            casualVersion: "Thanks for catching that. No apps, just mains.",
            formalityVariants: {
              casual: "Thanks for catching that. No apps, just mains for us.",
              standard: "Thank you for catching that. No appetizers — just the main courses.",
              formal:
                "We appreciate your diligence in addressing that. We will decline appetizers and proceed directly to the main courses.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "No problem at all — food allergies are something we take very seriously. Your food should be ready in about 20 minutes. Enjoy your wine in the meantime!",
            textZh: "完全没问题——食物过敏我们非常重视。菜大约20分钟好。先享用红酒吧！",
            commonMistake: {
              wrong: "No problem. Food allergies we care very much. Your food will be ready in about 20 minutes.",
              correct: "No problem at all — food allergies are something we take very seriously. Your food should be ready in about 20 minutes.",
              explanation: "“we care very much”不地道，应说“we take very seriously”。“will be ready”不如“should be ready”委婉有弹性。",
            },
            keyPhrases: [
              { en: "take seriously", zh: "非常重视" },
              { en: "in the meantime", zh: "在此期间/同时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're super careful with allergies here. Should be about 20 minutes. Sit back and enjoy your drinks!",
                textZh: "我们对过敏非常小心。大约20分钟。坐下来享用饮品吧！",
                actionHint: "等餐期间享用红酒",
                frequency: "common",
              },
              {
                textEn: "Allergies are no joke — we've got you covered. Food will be out in about 20. Cheers!",
                textZh: "过敏可不是开玩笑的——我们会照顾好的。菜大约20分钟出。干杯！",
                actionHint: "放心等菜",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No worries — we're super serious about food allergies. Food'll be ready in 'bout 20. Enjoy your wine 'til then!",
            formalityVariants: {
              casual:
                "No worries — we take food allergies super seriously. Your food'll be out in 'bout 20. Enjoy your wine 'til then!",
              standard:
                "No problem at all — food allergies are something we take very seriously. Your food should be ready in about 20 minutes. Enjoy your wine in the meantime!",
              formal:
                "It is absolutely no trouble at all; we treat food allergies with the utmost seriousness. Your meal should be prepared and served within approximately 20 minutes. Please enjoy your wine during this brief waiting period.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 安全与紧急情况 ====================
  {
    id: "hotel-17",
    category: "hotel",
    titleZh: "安全与紧急情况",
    titleEn: "Safety & Emergencies",
    description: "酒店中遇到紧急情况如火灾警报、身体不适、保险柜使用等",
    otherRole: "前台/安保人员",
    otherRoleIcon: "shield",
    flows: [
      // --- Flow 1: 火灾警报 ---
      {
        id: "fire-alarm",
        titleZh: "火灾警报响了",
        titleEn: "Fire Alarm",
        description: "酒店火灾警报响起时的应对",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The fire alarm just went off! What should we do? Is this a drill?",
            textZh: "火灾警报响了！我们该怎么办？是演习吗？",
            casualVersion: "Fire alarm just went off! What do we do? Is this a drill?",
            commonMistake: {
              wrong: "The fire alarm just rang! What should we do? Is this a drill?",
              correct: "The fire alarm just went off! What should we do? Is this a drill?",
              explanation: "“went off” 是警报器响了的常用表达，用“rang”会听起来不自然。",
            },
            formalityVariants: {
              casual: "Fire alarm! What do we do? Drill?",
              standard: "The fire alarm just went off! What should we do? Is this a drill?",
              formal:
                "Pardon me, the fire alarm appears to have activated. Could you please advise on the appropriate course of action? Is this a scheduled drill?",
            },
          },
          {
            speaker: "them",
            role: "酒店广播",
            textEn:
              "Attention all guests. The fire alarm has been activated. Please remain calm and proceed to the nearest emergency exit. Do not use the elevators. Follow the illuminated exit signs to the stairwell and make your way to the assembly point in the parking lot.",
            textZh:
              "各位客人请注意。火灾警报已启动。请保持冷静，前往最近的紧急出口。请勿使用电梯。沿着发光的出口标志走到楼梯间，前往停车场的集合点。",
            commonMistake: {
              wrong: "Please keep calm and go to the nearest exit.",
              correct: "Please remain calm and proceed to the nearest emergency exit.",
              explanation: "“Proceed to” 更正式和规范，强调行动的指导性。",
            },
            keyPhrases: [
              { en: "fire alarm", zh: "火灾警报" },
              { en: "emergency exit", zh: "紧急出口" },
              { en: "do not use the elevators", zh: "请勿使用电梯" },
              { en: "stairwell", zh: "楼梯间" },
              { en: "assembly point", zh: "集合点" },
            ],
            vocabNotes: {
              "assembly point": {
                meaningInContext: "在这里指紧急疏散时所有人集合等待的安全地点",
                similarUsage:
                  "类似用法：The assembly point is marked on the evacuation map behind your door.（集合点标在门后的疏散图上）",
              },
            },
            responseTip: "马上执行：穿好衣服鞋子，拿上护照和手机，不坐电梯，走楼梯下去",
            alternativeExpressions: [
              {
                textEn:
                  "Fire alarm — please leave your room now. Take the stairs, not the elevator. Meet outside in the parking lot.",
                textZh: "火灾警报——请立即离开房间。走楼梯，不坐电梯。在外面停车场集合。",
                actionHint: "立即带上必需品离开",
                frequency: "common",
              },
              {
                textEn:
                  "Everyone evacuate immediately. Use the stairwells only. Proceed to the assembly point outside.",
                textZh: "所有人立即疏散。只走楼梯间。前往外面的集合点。",
                actionHint: "马上走楼梯下去",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, listen up, fire alarm's on. Stay cool, head for the nearest exit. No elevators. Follow the green signs to the stairs, then out to the parking lot assembly point.",
            formalityVariants: {
              casual:
                "Alright everyone, fire alarm's active. Stay calm, go to the closest exit. No elevators! Follow the lighted signs to the stairs, then meet at the parking lot.",
              standard:
                "Attention all guests. The fire alarm has been activated. Please remain calm and proceed to the nearest emergency exit. Do not use the elevators. Follow the illuminated exit signs to the stairwell and make your way to the assembly point in the parking lot.",
              formal:
                "Distinguished guests, your attention please. The fire alarm system has been engaged. We kindly request that you maintain composure and calmly evacuate the premises utilizing the closest emergency exit. Elevator usage is strictly prohibited. Please observe the illuminated exit signage to guide you to the nearest stairwell, from which you should proceed directly to the designated assembly point located in the parking facility.",
            },
          },
          {
            speaker: "you",
            textEn: "Excuse me, where is the nearest stairwell? I'm on the 10th floor.",
            textZh: "请问最近的楼梯间在哪？我在10楼。",
            casualVersion: "Hey, where's the closest stairs? I'm on 10.",
            commonMistake: {
              wrong: "Excuse me, which is the nearest stairwell? I am in 10th floor.",
              correct: "Excuse me, where is the nearest stairwell? I'm on the 10th floor.",
              explanation: "询问地点用“where is”更自然。描述楼层用“on the... floor”而不是“in... floor”。",
            },
            formalityVariants: {
              casual: "Hey, where's the closest stairs? I'm on 10.",
              standard: "Excuse me, where is the nearest stairwell? I'm on the 10th floor.",
              formal:
                "Pardon me, could you please direct me to the nearest emergency stairwell? I am presently located on the tenth floor.",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "Turn left out of your room and go to the end of the hallway. The emergency stairwell is on your right — look for the green exit sign above the door. Don't go back for your belongings. Just get out now.",
            textZh: "出房间左转走到走廊尽头。紧急楼梯间在右边——找门上方的绿色出口标志。不要回去拿东西。现在马上出去。",
            keyPhrases: [
              { en: "end of the hallway", zh: "走廊尽头" },
              { en: "green exit sign", zh: "绿色出口标志" },
              { en: "don't go back", zh: "不要回去" },
            ],
            alternativeExpressions: [
              {
                textEn: "Follow the exit signs on the ceiling — stairwell is at the end of the corridor. Please hurry.",
                textZh: "跟着天花板上的出口标志走——楼梯间在走廊尽头。请快走。",
                actionHint: "跟着绿色出口标志快走",
                frequency: "common",
              },
            ],
            casualVersion:
              "Left outta your room, go to the end of the hall. Stairwell's on your right – green exit sign above the door. Don't go back for your stuff. Just get out!",
            commonMistake: {
              wrong:
                "Turn left from your room and walk to the end of the hallway. The emergency stairwell is in your right. Don't go back for your things. You just get out now.",
              correct:
                "Turn left out of your room and go to the end of the hallway. The emergency stairwell is on your right — look for the green exit sign above the door. Don't go back for your belongings. Just get out now.",
              explanation: "“out of”更口语化。“on your right”比“in your right”自然。“belongings”指随身物品。",
            },
            formalityVariants: {
              casual:
                "Left outta your room, end of the hall. Stairs are on your right – green sign. Leave your stuff. Just go!",
              standard:
                "Turn left out of your room and go to the end of the hallway. The emergency stairwell is on your right — look for the green exit sign above the door. Don't go back for your belongings. Just get out now.",
              formal:
                "Upon exiting your room, please proceed to the left and continue to the terminus of the hallway. The emergency stairwell will be located on your right-hand side, identifiable by the illuminated green exit sign above the entrance. It is imperative that you do not return for any personal possessions. Immediate evacuation is required.",
            },
          },
          {
            speaker: "you",
            textEn: "My wife has trouble walking. Is there any assistance available?",
            textZh: "我太太行走不便。有什么帮助吗？",
            casualVersion: "My wife has trouble walking. Can she get some help?",
            commonMistake: {
              wrong: "My wife walking is difficult. Do you have any assistance?",
              correct: "My wife has trouble walking. Is there any assistance available?",
              explanation: "“has trouble walking”是固定表达。“Is there any... available?”询问是否有提供。",
            },
            formalityVariants: {
              casual: "My wife can barely walk. Any help for her?",
              standard: "My wife has trouble walking. Is there any assistance available?",
              formal:
                "My spouse experiences difficulty with mobility. Might there be any form of assistance or support that could be provided?",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "There's an evacuation chair at the stairwell entrance. I'll come with you and help. We're trained for this. Let's go now — take my arm if you need support.",
            textZh: "楼梯间入口有疏散椅。我跟你们一起去帮忙。我们受过这方面的训练。现在走吧——需要的话扶着我。",
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry — there's a special chair at the stairwell for this. I'll help you both down. Let's go now.",
                textZh: "别担心——楼梯间有专用椅子。我帮你们下去。现在走。",
                actionHint: "跟着安保人员走",
                frequency: "common",
              },
              {
                textEn:
                  "We've got evac chairs right there. I'm trained for this — I'll get her down safely. Follow me.",
                textZh: "疏散椅就在那里。我受过训练——保证安全送她下去。跟我走。",
                actionHint: "配合安保人员行动",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "evacuation chair", zh: "疏散椅" },
              { en: "trained for this", zh: "受过训练" },
            ],
            vocabNotes: {
              "evacuation chair": {
                meaningInContext: "在这里指专门设计用于紧急疏散时帮助行动不便者下楼梯的特殊椅子",
                similarUsage: "类似用法：Every stairwell should have an evacuation chair.（每个楼梯间都应该有疏散椅）",
              },
            },
            casualVersion:
              "There's an evac chair at the stairs. I'll come help. We're trained. C'mon, let's go – grab my arm if you need it.",
            commonMistake: {
              wrong:
                "There's an evacuation chair at the stairwell entrance. I'll come with you and help. We're trained this. Let's go now — hold my arm if you need support.",
              correct:
                "There's an evacuation chair at the stairwell entrance. I'll come with you and help. We're trained for this. Let's go now — take my arm if you need support.",
              explanation: "“trained for this”是固定搭配，指为此事受过训练。“take my arm”更自然。",
            },
            formalityVariants: {
              casual:
                "Evac chair's at the stairs. I'll come help. We know what to do. Let's go – grab my arm if you need it.",
              standard:
                "There's an evacuation chair at the stairwell entrance. I'll come with you and help. We're trained for this. Let's go now — take my arm if you need support.",
              formal:
                "An evacuation chair is located at the stairwell entrance. I shall accompany you and provide assistance. We are thoroughly trained for such contingencies. We must depart immediately; please feel free to take my arm should you require support.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. How will we know when it's safe to go back?",
            textZh: "太感谢了。怎么知道什么时候可以回去？",
            casualVersion: "Thanks a lot. How'll we know when it's safe to go back?",
            commonMistake: {
              wrong: "Thank you so much. How to know when we can go back safely?",
              correct: "Thank you so much. How will we know when it's safe to go back?",
              explanation: "“How will we know”是正确的疑问句形式。“it's safe to go back”是自然表达。",
            },
            formalityVariants: {
              casual: "Thanks! How do we know when we can go back inside?",
              standard: "Thank you so much. How will we know when it's safe to go back?",
              formal:
                "I extend my sincere gratitude. Could you please inform us of the procedure for determining when it is safe to re-enter the premises?",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "Wait at the assembly point until the fire department gives the all-clear. A hotel manager will make an announcement. It usually takes 20 to 30 minutes. Don't re-enter the building until you hear the all-clear.",
            textZh:
              "在集合点等待直到消防部门宣布安全。酒店经理会广播通知。通常需要20到30分钟。没听到解除警报前不要回到建筑里。",
            keyPhrases: [
              { en: "fire department", zh: "消防部门" },
              { en: "all-clear", zh: "解除警报/安全信号" },
              { en: "re-enter the building", zh: "重新进入建筑" },
            ],
            culturalMeaning: '"all-clear" 是紧急情况结束后的标准用语，来自军事术语，表示危险已经过去，可以恢复正常。',
            alternativeExpressions: [
              {
                textEn:
                  "Just hang tight at the meeting point. The fire department has to clear the building first. Usually takes 20-30 minutes. Don't go back in until they say so.",
                textZh: "在集合点等着就行。消防部门要先检查建筑。通常20-30分钟。他们说可以了才能回去。",
                actionHint: "在集合点耐心等待",
                frequency: "common",
              },
              {
                textEn:
                  "Stay put until you hear the all-clear. A manager will announce when it's safe. Should be about half an hour.",
                textZh: "原地待着直到听到解除警报。经理会通知什么时候安全。大约半小时。",
                actionHint: "等待官方解除警报",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just wait at the assembly point till the fire department gives the all-clear. Hotel manager'll announce it. Usually like 20-30 mins. Don't go back in till you hear the all-clear.",
            culturalNote: "“all-clear”是解除警报的常用表达，通常指危险已解除。",
            commonMistake: {
              wrong:
                "Wait at the assembly point until the fire department says it is safe. Hotel manager will announce. It usually takes 20 to 30 minutes. Don't re-enter the building until you hear the all-clear.",
              correct:
                "Wait at the assembly point until the fire department gives the all-clear. A hotel manager will make an announcement. It usually takes 20 to 30 minutes. Don't re-enter the building until you hear the all-clear.",
              explanation: "“gives the all-clear”是解除警报的习语。“make an announcement”是标准搭配。",
            },
            formalityVariants: {
              casual:
                "Hang out at the assembly point 'til the fire department says it's cool. Manager will tell you. About 20-30 mins. Don't go back in 'til you hear the 'all-clear'.",
              standard:
                "Wait at the assembly point until the fire department gives the all-clear. A hotel manager will make an announcement. It usually takes 20 to 30 minutes. Don't re-enter the building until you hear the all-clear.",
              formal:
                "Kindly remain at the designated assembly point until the fire department has officially issued the 'all-clear' signal. A formal announcement will be made by a hotel manager. This process typically requires an interval of 20 to 30 minutes. Please refrain from re-entering the building prior to receiving the confirmed 'all-clear' notification.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you for your help.",
            textZh: "明白了。谢谢你的帮助。",
            casualVersion: "Got it. Thanks for the help.",
            commonMistake: {
              wrong: "I understand it. Thank you for helping me.",
              correct: "Got it. Thank you for your help.",
              explanation: "“Got it”是表示理解的常用口语。“Thank you for your help”更简洁自然。",
            },
            formalityVariants: {
              casual: "Got it. Thanks for your help.",
              standard: "Got it. Thank you for your help.",
              formal: "Understood. I deeply appreciate your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 身体不适 ---
      {
        id: "medical-help",
        titleZh: "身体不适求助",
        titleEn: "Medical Assistance",
        description: "在酒店突然身体不适，请求帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, front desk? I'm in room 603. My husband is feeling very dizzy and he has a fever. Do you have a doctor on call?",
            textZh: "你好，前台吗？我是603房。我丈夫头很晕还发烧了。你们有值班医生吗？",
            casualVersion: "Hey, front desk? Room 603. My husband's super dizzy and has a fever. Got a doc on call?",
            commonMistake: {
              wrong: "My husband is very dizzy and has a fever.",
              correct: "My husband is feeling very dizzy and he has a fever.",
              explanation: "直接说“is dizzy”比“is very dizzy”更自然，“feeling”用于描述主观感受。",
            },
            formalityVariants: {
              casual: "Hey, front desk? Room 603. Husband's super dizzy, fever. Got a doctor on call?",
              standard:
                "Hello, front desk? I'm in room 603. My husband is feeling very dizzy and has a fever. Do you have a doctor on call?",
              formal:
                "Good evening, front desk. This is room 603. My husband is experiencing severe dizziness and has developed a fever. I was wondering if you have a physician available or on call.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry to hear that. We don't have an in-house doctor, but we have a partnership with a 24-hour medical service that can send a doctor to your room. Would you like me to call them? It usually takes about 20 minutes.",
            textZh:
              "很遗憾听到这个。我们没有驻店医生，但我们和一个24小时医疗服务机构合作，可以派医生到房间。需要我联系他们吗？通常大约20分钟到。",
            commonMistake: {
              wrong: "We don't have a resident doctor.",
              correct: "We don't have an in-house doctor.",
              explanation: "“in-house doctor” 指酒店或公司内部的医生，更地道。",
            },
            keyPhrases: [
              { en: "doctor on call", zh: "值班医生" },
              { en: "in-house doctor", zh: "驻店医生" },
              { en: "medical service", zh: "医疗服务" },
            ],
            vocabNotes: {
              "on call": {
                meaningInContext: "在这里表示「随叫随到的、值班待命的」",
                similarUsage: "类似用法：The IT technician is on call 24/7.（IT技术员24小时待命）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Oh no! We can get a doctor sent to your room. Want me to arrange it? Takes about 20 minutes.",
                textZh: "哎呀！我们可以派医生到房间。需要我安排吗？大约20分钟。",
                actionHint: "同意让前台联系医疗服务",
                frequency: "common",
              },
            ],
            isBranchPoint: true,
            responseTip: "如果情况紧急，直接要求叫救护车",
            casualVersion:
              "Oh, sorry to hear. No in-house doc, but we partner with a 24-hour medical service. They can send one up to your room. Want me to call 'em? Takes about 20 mins.",
            formalityVariants: {
              casual:
                "Bummer. No doc here, but we work with a 24-hour service. They can send someone up. Wanna call 'em? Takes 20.",
              standard:
                "I'm sorry to hear that. We don't have an in-house doctor, but we partner with a 24-hour medical service that can send a doctor to your room. Would you like me to call them? It usually takes about 20 minutes.",
              formal:
                "My apologies to hear of your husband's discomfort. While we do not retain an in-house physician, we maintain an affiliation with a 24-hour medical service capable of dispatching a doctor to your accommodations. Shall I arrange for them to attend to you? The estimated arrival time is approximately 20 minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, please call them right away. Also, do you have any basic medicine like fever reducers or pain relievers?",
            textZh: "好的，请马上联系。另外你们有退烧药或止痛药之类的基本药品吗？",
            casualVersion: "Yeah, call 'em ASAP. Also, got any basic meds? Like for fever or pain?",
            commonMistake: {
              wrong: "Yes, please call them immediately.",
              correct: "Yes, please call them right away.",
              explanation: "“Right away”比“immediately”更口语化、自然。",
            },
            formalityVariants: {
              casual: "Yeah, call 'em now. Got any basic meds, like Tylenol?",
              standard:
                "Yes, please call them right away. Also, do you have any basic medicine like fever reducers or pain relievers?",
              formal:
                "Yes, kindly contact them without delay. Furthermore, do you happen to have any fundamental over-the-counter medications such as fever reducers or analgesics available?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm calling the medical service now. Unfortunately, we're not allowed to provide medication directly. But there's a pharmacy on the ground floor of the building next door — it's open until 10 PM. I can also send up some cold water, extra towels, and a thermometer if that helps.",
            textZh:
              "我正在联系医疗服务。很遗憾，我们不能直接提供药品。但隔壁大楼一楼有药店——营业到晚上10点。我也可以送冰水、额外毛巾和体温计到房间。",
            commonMistake: {
              wrong: "We cannot give medicine directly.",
              correct: "We cannot directly provide medication.",
              explanation: "“directly provide medication” 是更规范和专业的表达。",
            },
            alternativeExpressions: [
              {
                textEn:
                  "I'm on it. We can't give out meds, but there's a pharmacy next door open till 10. Want me to send up ice water and a thermometer?",
                textZh: "我在联系。我们不能提供药品，但隔壁药店开到10点。要送冰水和体温计上来吗？",
                actionHint: "同意送物品并考虑去药店",
                frequency: "common",
              },
              {
                textEn:
                  "Calling them right now. Sorry, we can't hand out medicine. There's a drugstore around the corner though. I'll send up towels and cold water.",
                textZh: "正在打电话。抱歉不能给药。拐角有药店。我先送毛巾和冰水上去。",
                actionHint: "让人去附近药店买药",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "fever reducers", zh: "退烧药" },
              { en: "pain relievers", zh: "止痛药" },
              { en: "pharmacy", zh: "药店" },
              { en: "thermometer", zh: "体温计" },
            ],
            casualVersion:
              "Calling 'em now. Can't give out meds directly, sorry. But there's a pharmacy downstairs in the building next door – open 'til 10 PM. Can send up cold water, extra towels, and a thermometer if you want.",
            culturalNote: "美国酒店不提供药品，需自行购买或看医生",
            formalityVariants: {
              casual:
                "Calling 'em. Can't give meds, but pharmacy next door's open 'til 10. Can send up water, towels, thermometer.",
              standard:
                "I'm calling the medical service now. Unfortunately, we're not allowed to provide medication directly. But there's a pharmacy on the ground floor of the building next door — it's open until 10 PM. I can also send up some cold water, extra towels, and a thermometer if that helps.",
              formal:
                "I am initiating contact with the medical service presently. Regrettably, hotel policy prohibits us from dispensing medication directly. However, there is a pharmacy located on the ground floor of the adjacent building, which operates until 10 PM. I can, however, arrange for cold water, additional towels, and a thermometer to be delivered to your room if that would be beneficial.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, please send those up. How much will the doctor visit cost? Does our travel insurance cover this?",
            textZh: "好的，请送上来。看医生要多少钱？我们的旅行保险能报销吗？",
            casualVersion:
              "Yeah, send those up. How much is the doc visit gonna cost? And does our travel insurance cover it?",
            commonMistake: {
              wrong: "How much is the doctor visit?",
              correct: "How much will the doctor visit cost?",
              explanation: "“Cost”是更准确的动词，直接问“is”听起来更像在问医生本人。",
            },
            formalityVariants: {
              casual: "Yeah, send 'em up. What's the doctor's visit cost? Insurance cover it?",
              standard:
                "Yes, please send those up. How much will the doctor visit cost? Does our travel insurance cover this?",
              formal:
                "Yes, kindly have those items sent up. Could you please inform me of the estimated cost for the doctor's visit? Additionally, would our travel insurance policy provide coverage for this expense?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The house call is typically around $150 to $200, depending on the treatment. They accept most international insurance and major credit cards. Make sure to get an itemized receipt from the doctor — you'll need it for your insurance claim.",
            textZh:
              "上门看诊通常150到200美元左右，取决于治疗内容。他们接受大多数国际保险和主要信用卡。记得向医生要逐项收据——报销时需要。",
            culturalNote: "美国报销医疗费通常需要详细的逐项收据。",
            commonMistake: {
              wrong: "a detailed receipt",
              correct: "an itemized receipt",
              explanation: "“itemized receipt” 指列明所有项目细节的收据，报销常用。",
            },
            keyPhrases: [
              { en: "house call", zh: "上门出诊" },
              { en: "itemized receipt", zh: "逐项收据/明细收据" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            vocabNotes: {
              "house call": {
                meaningInContext: "在这里指医生到酒店房间出诊，而非你去诊所",
                similarUsage: "类似用法：Doctors rarely make house calls anymore.（医生现在很少上门出诊了）",
              },
              "itemized receipt": {
                meaningInContext: "在这里指列出每一项收费明细的收据，保险公司通常需要这种收据才能理赔",
                similarUsage: "类似用法：Can I get an itemized receipt for my expenses?（能给我一份费用明细收据吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "It usually runs $150 to $200. They take most insurance and credit cards. Just make sure you get a detailed receipt — you'll need it to file a claim.",
                textZh: "通常150到200美元。大多数保险和信用卡都收。记得要明细收据——报销要用。",
                actionHint: "记得向医生要明细收据",
                frequency: "common",
              },
              {
                textEn:
                  "Expect somewhere around $150-200. They take insurance. Big tip: ask for an itemized bill so you can claim it back later.",
                textZh: "大概150-200美元。接受保险。重要提醒：要逐项账单，之后可以报销。",
                actionHint: "保存好所有收据",
                frequency: "common",
              },
            ],
            casualVersion:
              "House call's usually around $150-$200, depends on what they do. They take most international insurance and major credit cards. Just make sure to get an itemized receipt from the doc – you'll need it for your insurance.",
            formalityVariants: {
              casual:
                "House call's like $150-$200, varies. They take most international insurance/credit cards. Get an itemized receipt for insurance.",
              standard:
                "The house call is typically around $150 to $200, depending on the treatment. They accept most international insurance and major credit cards. Make sure to get an itemized receipt from the doctor — you'll need it for your insurance claim.",
              formal:
                "The physician's house call service generally ranges from $150 to $200, contingent upon the specific medical services rendered. They do honor the majority of international insurance policies and all major credit cards. It is imperative that you obtain an itemized receipt from the attending physician, as this document will be required for your insurance reimbursement claim.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll make sure to get the receipt. If his condition gets worse, should I call 911?",
            textZh: "好的。我会记得要收据。如果他情况恶化，要打911吗？",
            casualVersion: "Got it. I'll get that receipt. If he gets worse, should I call 911?",
            commonMistake: {
              wrong: "If his condition become worse, should I call 911?",
              correct: "If his condition gets worse, should I call 911?",
              explanation: "“Get worse”是更自然的口语表达，表示状态变化。",
            },
            formalityVariants: {
              casual: "Okay, I'll grab the receipt. If he gets worse, 911?",
              standard:
                "Good to know. I'll make sure to get the receipt. If his condition gets worse, should I call 911?",
              formal:
                "Understood. I will ensure to obtain the necessary receipt. Should his condition deteriorate further, would it be advisable to contact 911?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "If it becomes urgent — chest pain, difficulty breathing, or loss of consciousness — yes, call 911 immediately. You can also press the emergency button on your room phone. We'll have someone up there within a minute. The nearest hospital is City General, about 10 minutes by ambulance.",
            textZh:
              "如果变紧急——胸痛、呼吸困难或失去意识——直接打911。您也可以按房间电话上的紧急按钮，一分钟内会有人上去。最近的医院是City General，救护车大约10分钟。",
            commonMistake: {
              wrong: "trouble to breathe",
              correct: "difficulty breathing",
              explanation: "“difficulty breathing” 和 “loss of consciousness” 是医学上更准确的描述。",
            },
            keyPhrases: [
              { en: "chest pain", zh: "胸痛" },
              { en: "difficulty breathing", zh: "呼吸困难" },
              { en: "loss of consciousness", zh: "失去意识" },
              { en: "emergency button", zh: "紧急按钮" },
              { en: "ambulance", zh: "救护车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If things get serious — trouble breathing, chest pain — dial 911 right away. Or just hit the red button on the room phone and we'll be up in a minute.",
                textZh: "如果情况变严重——呼吸困难、胸痛——马上拨911。或者按房间电话上的红色按钮，我们一分钟内上去。",
                actionHint: "记住紧急联系方式",
                frequency: "common",
              },
              {
                textEn:
                  "For anything life-threatening, call 911 — don't wait. The closest ER is City General, about 10 minutes out. We can also have someone at your door in under a minute.",
                textZh:
                  "有生命危险的情况直接打911——别等。最近的急诊是City General，大约10分钟。我们也能不到一分钟到你门口。",
                actionHint: "牢记紧急情况处理流程",
                frequency: "common",
              },
            ],
            casualVersion:
              "If it gets urgent — like chest pain, can't breathe, or passes out — yeah, call 911 right away. Or hit the emergency button on your room phone. We'll have someone up there in a minute. Nearest hospital's City General, like 10 mins by ambulance.",
            culturalNote: "美国911仅限于危及生命的紧急情况",
            formalityVariants: {
              casual:
                "Urgent? Chest pain, can't breathe, out cold? Call 911 ASAP. Or emergency button on the phone. We'll be up in a minute. City General's 10 mins by ambulance.",
              standard:
                "If it becomes urgent — chest pain, difficulty breathing, or loss of consciousness — yes, call 911 immediately. You can also press the emergency button on your room phone. We'll have someone up there within a minute. The nearest hospital is City General, about 10 minutes by ambulance.",
              formal:
                "Should the situation escalate to an urgent level — specifically, in cases of chest pain, severe difficulty breathing, or a loss of consciousness — then yes, please contact 911 without hesitation. Alternatively, you may utilize the emergency button located on your in-room telephone, and a staff member will attend to you within approximately one minute. The closest medical facility is City General Hospital, an estimated ten-minute ambulance ride.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for being so thorough. I really appreciate the help.",
            textZh: "谢谢你这么周到。非常感谢你的帮助。",
            commonMistake: {
              wrong: "Thank you for being so complete.",
              correct: "Thank you for being so thorough.",
              explanation: "“thorough” 指周到、全面，在此表达感谢对方考虑周全。",
            },
            casualVersion: "Thanks for being so thorough. Really appreciate the help.",
            formalityVariants: {
              casual: "Thanks for being so thorough. Really appreciate it.",
              standard: "Thank you for being so thorough. I really appreciate the help.",
              formal: "I genuinely appreciate your comprehensive assistance and thorough explanation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 酒店接送服务 ====================
  {
    id: "hotel-18",
    category: "hotel",
    titleZh: "酒店接送服务",
    titleEn: "Hotel Shuttle & Transport",
    description: "使用酒店提供的免费班车或付费接送服务往返机场和景点",
    otherRole: "前台/司机",
    otherRoleIcon: "bus",
    flows: [
      // --- Flow 1: 机场班车 ---
      {
        id: "airport-shuttle",
        titleZh: "机场班车",
        titleEn: "Airport Shuttle",
        description: "使用酒店免费机场班车服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Does the hotel have an airport shuttle?",
            textZh: "酒店有机场班车吗？",
            commonMistake: {
              wrong: "Hotel has airport shuttle?",
              correct: "Does the hotel have an airport shuttle?",
              explanation: "英文疑问句需要助动词，不能直接主谓宾。",
            },
            casualVersion: "Hotel got an airport shuttle?",
            formalityVariants: {
              casual: "Hotel got an airport shuttle?",
              standard: "Does the hotel have an airport shuttle?",
              formal: "Excuse me, I was wondering if the hotel provides an airport shuttle service.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, we offer a complimentary airport shuttle. It runs every 30 minutes from 5 AM to 11 PM. The pickup point is at the main entrance.",
            textZh: "有的，我们提供免费机场班车。每30分钟一班，早上5点到晚上11点运行。上车点在正门。",
            keyPhrases: [
              { en: "complimentary shuttle", zh: "免费班车" },
              { en: "runs every 30 minutes", zh: "每30分钟一班" },
              { en: "pickup point", zh: "上车点" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这里表示「免费的」，酒店常用这个词代替 free，听起来更正式",
                similarUsage:
                  "类似用法：We offer complimentary breakfast for all guests.（我们为所有客人提供免费早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We have a free shuttle to the airport. It leaves every half hour. Just wait out front.",
                textZh: "我们有免费机场班车。每半小时出发。在前面等就行。",
                actionHint: "确认你的航班时间来选班次",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, we got a free airport shuttle. Runs every 30 mins, 5 AM to 11 PM. Pickup's at the main entrance.",
            formalityVariants: {
              casual:
                "Yep, we got a free airport shuttle. Runs every 30 mins, 5 AM to 11 PM. Pickup's at the main entrance.",
              standard:
                "Yes, we offer a complimentary airport shuttle. It runs every 30 minutes from 5 AM to 11 PM. The pickup point is at the main entrance.",
              formal:
                "Yes, we do provide a complimentary airport shuttle service. It operates on a 30-minute schedule, commencing at 5 AM and concluding at 11 PM daily. The designated pickup location is at the main entrance of the hotel.",
            },
          },
          {
            speaker: "you",
            textEn: "My flight is at 2 PM. What time should I take the shuttle?",
            textZh: "我的航班下午2点。应该坐几点的班车？",
            casualVersion: "My flight's at 2 PM. What time should I get the shuttle?",
            commonMistake: {
              wrong: "My flight 2 PM. What time shuttle?",
              correct: "My flight's at 2 PM. What time should I take the shuttle?",
              explanation: "中式英语常省略冠词、介词和动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "Flight's at 2 PM. What time should I get the shuttle?",
              standard: "My flight is at 2 PM. What time should I take the shuttle?",
              formal:
                "My flight is scheduled for 2 PM. Could you please advise what time I should ideally depart on the shuttle?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "For a 2 PM domestic flight, I'd recommend the 10:30 AM shuttle. It takes about 30 minutes to get to the airport, and you'll want to be there at least 2 hours before your flight. For international flights, I'd suggest getting there 3 hours early.",
            textZh:
              "如果是下午2点的国内航班，我建议坐10:30的班车。到机场大约30分钟，最好提前至少2小时到。如果是国际航班，建议提前3小时。",
            keyPhrases: [
              { en: "domestic flight", zh: "国内航班" },
              { en: "international flight", zh: "国际航班" },
              { en: "at least 2 hours before", zh: "至少提前2小时" },
            ],
            responseTip: "告诉对方你的航班是国内还是国际",
            alternativeExpressions: [
              {
                textEn:
                  "I'd say take the 10:30 shuttle. It's about half an hour to the airport, and you want a good buffer. Is it domestic or international?",
                textZh: "我建议坐10:30的班车。到机场大约半小时，要留够缓冲时间。是国内还是国际航班？",
                actionHint: "说明航班类型",
                frequency: "common",
              },
              {
                textEn:
                  "For a 2 o'clock flight, 10:30 should work for domestic. If it's international, I'd go earlier — maybe the 9:30 or 10.",
                textZh: "2点的航班，国内坐10:30就行。如果是国际的，建议早点走——9:30或10点的。",
                actionHint: "根据航班类型选时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "For a 2 PM domestic, I'd say the 10:30 AM shuttle. Takes 'bout 30 mins to the airport, and you'll wanna be there at least 2 hours before. International flights, better get there 3 hours early.",
            formalityVariants: {
              casual:
                "For a 2 PM domestic, I'd say the 10:30 AM shuttle. Takes 'bout 30 mins to the airport, and you'll wanna be there at least 2 hours before. International flights, better get there 3 hours early.",
              standard:
                "For a 2 PM domestic flight, I'd recommend the 10:30 AM shuttle. It takes about 30 minutes to get to the airport, and you'll want to be there at least 2 hours before your flight. For international flights, I'd suggest getting there 3 hours early.",
              formal:
                "For a domestic flight departing at 2 PM, I would advise utilizing the 10:30 AM shuttle. The estimated travel time to the airport is approximately 30 minutes, and it is recommended to arrive at least two hours prior to your scheduled departure. For international flights, an arrival of three hours in advance is generally recommended.",
            },
          },
          {
            speaker: "you",
            textEn: "It's an international flight, so I'll take the 9:30 shuttle. Do I need to reserve a spot?",
            textZh: "是国际航班，那我坐9:30的。需要提前预约吗？",
            casualVersion: "It's international, so I'll grab the 9:30 shuttle. Gotta reserve a spot?",
            commonMistake: {
              wrong: "It's international. I take 9:30. Need reserve?",
              correct: "It's an international flight, so I'll take the 9:30 shuttle. Do I need to reserve a spot?",
              explanation: "中式英语常省略主语、冠词、助动词，听起来不完整且生硬。",
            },
            formalityVariants: {
              casual: "It's international, so I'll grab the 9:30 shuttle. Gotta reserve a spot?",
              standard: "It's an international flight, so I'll take the 9:30 shuttle. Do I need to reserve a spot?",
              formal:
                "As it is an international flight, I will plan to take the 9:30 shuttle. Is a reservation required for this service?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, I'd recommend reserving a spot, especially during peak hours. I can book you on the 9:30 shuttle right now. How many passengers?",
            textZh: "是的，特别是高峰时段，建议提前预约。我现在就帮您订9:30的班车。几位乘客？",
            keyPhrases: [
              { en: "reserve a spot", zh: "预约位置" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "book you on", zh: "帮您预订" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely book ahead — mornings can be busy. I'll put you on the 9:30 right now. How many people?",
                textZh: "一定要提前订——早上很忙的。我现在就给您订9:30的。几位？",
                actionHint: "告诉对方人数",
                frequency: "common",
              },
              {
                textEn: "Yeah, best to reserve. Let me lock in two spots on the 9:30. Just you, or are there others?",
                textZh: "是的，最好预订。我给您锁定9:30的位子。就您还是还有其他人？",
                actionHint: "说明乘客人数",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, definitely recommend reserving, especially at peak times. Can book you on the 9:30 right now. How many people?",
            formalityVariants: {
              casual:
                "Yeah, definitely recommend reserving, especially at peak times. Can book you on the 9:30 right now. How many people?",
              standard:
                "Yes, I'd recommend reserving a spot, especially during peak hours. I can book you on the 9:30 shuttle right now. How many passengers?",
              formal:
                "Yes, I would strongly advise reserving a spot, particularly during peak operating hours. I would be pleased to book your reservation on the 9:30 AM shuttle immediately. May I inquire as to the number of passengers?",
            },
          },
          {
            speaker: "you",
            textEn: "Two passengers with four large suitcases. Is there enough space?",
            textZh: "两位乘客，四个大行李箱。空间够吗？",
            casualVersion: "Two people, four big suitcases. Enough space?",
            commonMistake: {
              wrong: "Two people, four big luggage. Enough space?",
              correct: "Two passengers with four large suitcases. Is there enough space?",
              explanation: "“luggage”是不可数名词，不能说“four luggages”。",
            },
            formalityVariants: {
              casual: "Two people, four big suitcases. Enough space?",
              standard: "Two passengers with four large suitcases. Is there enough space?",
              formal:
                "We will have two passengers, along with four large suitcases. Will there be sufficient space available?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "That should be fine. The shuttle is a large van with plenty of luggage space. I've booked two seats for you on the 9:30 AM shuttle. Please be at the main entrance by 9:20 so the driver can load your bags.",
            textZh:
              "没问题。班车是大型厢型车，行李空间充足。已帮您预订9:30班车两个座位。请9:20到正门，方便司机装行李。",
            keyPhrases: [
              { en: "large van", zh: "大型厢型车" },
              { en: "luggage space", zh: "行李空间" },
              { en: "load your bags", zh: "装行李" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, there's plenty of room for bags. You're booked for 9:30 — just be out front by 9:20.",
                textZh: "别担心，行李空间很充裕。9:30已订好——9:20到正门就行。",
                actionHint: "记住9:20到正门",
                frequency: "common",
              },
              {
                textEn:
                  "Four big suitcases? No problem — the van's huge. Two seats, 9:30 AM. Try to get to the entrance about 10 minutes early.",
                textZh: "四个大行李箱？没问题——车很大。两个座位，9:30。尽量提前10分钟到入口。",
                actionHint: "提前到达上车点",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, that's fine. It's a big van, lots of luggage space. Got you two seats on the 9:30 AM shuttle. Just be at the main entrance by 9:20 so the driver can load your bags.",
            formalityVariants: {
              casual:
                "Yeah, that's fine. It's a big van, lots of luggage space. Got you two seats on the 9:30 AM shuttle. Just be at the main entrance by 9:20 so the driver can load your bags.",
              standard:
                "That should be fine. The shuttle is a large van with plenty of luggage space. I've booked two seats for you on the 9:30 AM shuttle. Please be at the main entrance by 9:20 so the driver can load your bags.",
              formal:
                "That will be perfectly acceptable. The shuttle vehicle is a spacious van, equipped with ample luggage capacity. I have confirmed your reservation for two seats on the 9:30 AM shuttle. Kindly proceed to the main entrance by 9:20 AM to allow the driver sufficient time to load your belongings.",
            },
          },
          {
            speaker: "you",
            textEn: "Does the shuttle drop off at all terminals or just the main one?",
            textZh: "班车在所有航站楼停还是只在主航站楼？",
            casualVersion: "Shuttle drop off at all terminals, or just the main one?",
            commonMistake: {
              wrong: "Shuttle drop all terminal or main one?",
              correct: "Does the shuttle drop off at all terminals or just the main one?",
              explanation: "缺少助动词、介词和冠词，表达不完整。",
            },
            formalityVariants: {
              casual: "Shuttle drop off at all terminals, or just the main one?",
              standard: "Does the shuttle drop off at all terminals or just the main one?",
              formal:
                "Could you please clarify if the shuttle service provides drop-offs at all terminals, or exclusively at the main terminal?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The shuttle stops at Terminal 1 and Terminal 3. Which terminal is your airline at? I can make sure the driver drops you off at the right one.",
            textZh: "班车在1号和3号航站楼停靠。您的航空公司在哪个航站楼？我可以让司机在正确的航站楼放您下来。",
            keyPhrases: [
              { en: "terminal", zh: "航站楼" },
              { en: "drops you off", zh: "送您下车" },
            ],
            vocabNotes: {
              "drops you off": {
                meaningInContext: "在这里表示把乘客送到目的地并让其下车",
                similarUsage: "类似用法：Can you drop me off at the corner?（能在拐角让我下车吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We stop at T1 and T3. Which airline are you flying? I'll tell the driver where to drop you.",
                textZh: "我们停T1和T3。您坐哪家航空公司？我告诉司机在哪里放您下来。",
                actionHint: "说出航空公司或航站楼",
                frequency: "common",
              },
              {
                textEn: "The shuttle hits Terminal 1 first, then Terminal 3. Do you know which one you need?",
                textZh: "班车先到1号航站楼，然后3号。您知道需要哪个吗？",
                actionHint: "查看机票确认航站楼",
                frequency: "common",
              },
            ],
            casualVersion:
              "Stops at Terminal 1 and 3. Which terminal's your airline? I can tell the driver to drop you at the right one.",
            formalityVariants: {
              casual:
                "Stops at Terminal 1 and 3. Which terminal's your airline? I can tell the driver to drop you at the right one.",
              standard:
                "The shuttle stops at Terminal 1 and Terminal 3. Which terminal is your airline at? I can make sure the driver drops you off at the right one.",
              formal:
                "The shuttle service provides stops at both Terminal 1 and Terminal 3. Could you please inform me which terminal your airline operates from, so I can ensure the driver delivers you to the correct location?",
            },
          },
          {
            speaker: "you",
            textEn: "Terminal 3, please. Thank you for arranging everything.",
            textZh: "3号航站楼。谢谢你帮我安排好一切。",
            casualVersion: "Terminal 3. Thanks for getting everything sorted.",
            commonMistake: {
              wrong: "Terminal 3. Thank you arrange everything.",
              correct: "Terminal 3, please. Thank you for arranging everything.",
              explanation: '"arrange"作为动词需要宾语，或使用动名词形式“arranging”。',
            },
            formalityVariants: {
              casual: "Terminal 3. Thanks for getting everything sorted.",
              standard: "Terminal 3, please. Thank you for arranging everything.",
              formal:
                "Terminal 3, if you please. I sincerely appreciate your assistance in making all the necessary arrangements.",
            },
          },
        ],
      },

      // --- Flow 2: 付费专车接送 ---
      {
        id: "private-transfer",
        titleZh: "预订专车接送",
        titleEn: "Private Car Transfer",
        description: "预订酒店付费专车前往景点或市区",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd like to visit the city center tomorrow. Does the hotel offer private car service?",
            textZh: "我们明天想去市中心。酒店有专车服务吗？",
            casualVersion: "Wanna hit the city center tomorrow. Got a private car service here?",
            commonMistake: {
              wrong: "We want to visit the city center tomorrow.",
              correct: "We'd like to visit the city center tomorrow.",
              explanation: '"I want to"听起来生硬，"We\'d like to"更礼貌自然。',
            },
            formalityVariants: {
              casual: "Wanna hit the city center tomorrow. Got private car service?",
              standard: "We'd like to visit the city center tomorrow. Does the hotel offer private car service?",
              formal:
                "Good evening/morning, we are interested in visiting the city center tomorrow. Could you please inform us if the hotel provides a private car service?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, we have a private car service. We offer one-way transfers and also half-day or full-day charters. A one-way trip to the city center is $45. A half-day charter with a driver for up to 5 hours is $180.",
            textZh:
              "有的，我们有专车服务。提供单程接送和半天或全天包车。去市中心单程45美元。半天包车带司机最多5小时180美元。",
            keyPhrases: [
              { en: "one-way transfer", zh: "单程接送" },
              { en: "half-day charter", zh: "半天包车" },
              { en: "full-day charter", zh: "全天包车" },
            ],
            vocabNotes: {
              charter: {
                meaningInContext: "在这里表示包租车辆和司机，按时间计费而非按距离",
                similarUsage: "类似用法：We chartered a boat for the afternoon.（我们下午包了一条船）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We can arrange a private car for you. Did you want a drop-off, or do you need the car for the whole day?",
                textZh: "我们可以安排专车。您是要送一趟，还是需要全天用车？",
                actionHint: "根据行程选择单程还是包车",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we totally got private cars. Do one-ways, half-day, or full-day charters. City center's 45 bucks one-way. Half-day with a driver, up to 5 hours, that's 180.",
            formalityVariants: {
              casual:
                "Yep, got private car service. One-ways, half or full-day charters. City center's $45 one-way. Half-day, up to 5 hrs with a driver, is $180.",
              standard:
                "Yes, we have a private car service. We offer one-way transfers and also half-day or full-day charters. A one-way trip to the city center is $45. A half-day charter with a driver for up to 5 hours is $180.",
              formal:
                "Yes, certainly, we do provide a private car service. Our offerings include both one-way transfers and comprehensive half-day or full-day charter options. A single transfer to the city center is priced at $45. For a half-day charter, inclusive of a driver for up to five hours, the cost is $180.",
            },
          },
          {
            speaker: "you",
            textEn: "A half-day charter sounds good. We want to visit a few places. Does the driver speak English?",
            textZh: "半天包车不错。我们想去几个地方。司机会说英语吗？",
            casualVersion: "Half-day charter sounds good. Wanna hit a few spots. Does the driver speak English?",
            commonMistake: {
              wrong: "Does the driver can speak English?",
              correct: "Does the driver speak English?",
              explanation: '"Does"是助动词，后面动词用原形，不加"can"。',
            },
            formalityVariants: {
              casual: "Half-day charter sounds good. Wanna hit a few spots. Driver speak English?",
              standard: "A half-day charter sounds good. We want to visit a few places. Does the driver speak English?",
              formal:
                "A half-day charter option sounds highly suitable. We anticipate visiting multiple destinations. Could you please confirm if the driver is proficient in English?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "All our drivers speak basic English. If you'd like a driver who can also serve as a tour guide, that's an additional $30, but it's well worth it — they know all the best spots and can help with translations.",
            textZh:
              "我们所有司机都会基本英语。如果您想要一个同时能当导游的司机，需要额外加30美元，但很值得——他们知道所有好地方，还能帮忙翻译。",
            keyPhrases: [
              { en: "tour guide", zh: "导游" },
              { en: "additional", zh: "额外的" },
              { en: "well worth it", zh: "很值得" },
              { en: "translations", zh: "翻译" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They all speak some English. For 30 bucks more, you can get a driver who doubles as a guide — totally worth it if you want local tips.",
                textZh: "他们都会一些英语。多加30美元可以有一个兼职导游的司机——想了解当地推荐的话很值得。",
                actionHint: "考虑是否要导游司机",
                frequency: "common",
              },
              {
                textEn:
                  "Our drivers handle basic English fine. But if you want someone who really knows the city and can translate, add $30 for a driver-guide.",
                textZh: "我们的司机基本英语没问题。但如果想找个真正熟悉城市又能翻译的，加30美元要个导游司机。",
                actionHint: "决定是否升级服务",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "All our drivers speak basic English. If you want a driver who's also a tour guide, that's an extra 30 bucks, but it's totally worth it — they know all the cool spots and can help translate.",
            formalityVariants: {
              casual:
                "All drivers speak basic English. Want one who's also a guide? That's an extra 30 bucks, totally worth it – they know the cool spots and can translate.",
              standard:
                "All our drivers speak basic English. If you'd like a driver who can also serve as a tour guide, that's an additional $30, but it's well worth it — they know all the best spots and can help with translations.",
              formal:
                "Indeed, all of our drivers possess basic English communication skills. Should you desire a driver who can also function as a comprehensive tour guide, there is an additional charge of $30. We highly recommend this option, as these drivers are exceptionally knowledgeable about local attractions and proficient in translation assistance.",
            },
          },
          {
            speaker: "you",
            textEn: "We'll take the driver-guide option. What time can we leave?",
            textZh: "我们要有导游功能的司机。几点可以出发？",
            casualVersion: "We'll do the driver-guide thing. What time can we head out?",
            commonMistake: {
              wrong: "What time we can leave?",
              correct: "What time can we leave?",
              explanation: "疑问句中，助动词（can）应放在主语（we）之前。",
            },
            formalityVariants: {
              casual: "We'll do the driver-guide thing. What time can we head out?",
              standard: "We'll take the driver-guide option. What time can we leave?",
              formal:
                "We would like to proceed with the driver-guide option. At your earliest convenience, please advise us of the earliest available departure time.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Any time you'd like! Just let me know your preferred departure time and I'll have the car ready at the entrance. I'd suggest leaving by 9 AM to beat the traffic.",
            textZh: "随时都行！告诉我您想几点出发，我会安排车在入口等候。建议9点前出发，避开高峰。",
            keyPhrases: [
              { en: "departure time", zh: "出发时间" },
              { en: "beat the traffic", zh: "避开高峰/错峰出行" },
            ],
            vocabNotes: {
              "beat the traffic": {
                meaningInContext: "在这里表示在交通拥堵之前出发，避开高峰期",
                similarUsage: "类似用法：Let's leave early to beat the rush hour.（我们早点走避开早高峰）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Whenever works for you! Just give me a time and the car will be waiting. I'd say head out by 9 to avoid traffic.",
                textZh: "您方便的时间就行！告诉我时间，车会等着。我建议9点出发避开堵车。",
                actionHint: "定好出发时间",
                frequency: "common",
              },
              {
                textEn:
                  "Totally up to you. My advice? Leave by 9 — the roads get crazy after that. I'll have the car out front.",
                textZh: "完全看您。我的建议？9点前走——之后路上会很堵。我让车在门口等。",
                actionHint: "接受建议早点出发",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Whenever! Just tell me when you wanna go and I'll have the car ready out front. I'd say leave by 9 AM to skip traffic.",
            culturalNote: "“out front”在口语中很自然地表示“在门口/外面”。",
            formalityVariants: {
              casual:
                "Whenever! Just tell me when you wanna go and I'll have the car ready out front. I'd say leave by 9 AM to skip traffic.",
              standard:
                "Any time you'd like! Just let me know your preferred departure time and I'll have the car ready at the entrance. I'd suggest leaving by 9 AM to beat the traffic.",
              formal:
                "You may depart at your convenience. Kindly inform me of your preferred departure time, and I will ensure the vehicle is prepared at the main entrance. For optimal travel, I recommend departing no later than 9:00 AM to avoid peak traffic conditions.",
            },
          },
          {
            speaker: "you",
            textEn: "9 AM works. Do we pay the driver directly or charge it to the room?",
            textZh: "9点可以。是直接付给司机还是挂房费？",
            casualVersion: "9 AM's good. Pay the driver direct or put it on the room?",
            commonMistake: {
              wrong: "Pay the driver directly or charge to the room?",
              correct: "Do we pay the driver directly or charge it to the room?",
              explanation: '"charge" 后常跟宾语"it"指费用。',
            },
            formalityVariants: {
              casual: "9 AM's good. Pay the driver direct or put it on the room?",
              standard: "9 AM works. Do we pay the driver directly or charge it to the room?",
              formal:
                "9:00 AM is perfectly acceptable. Regarding payment, would it be preferable to settle the amount directly with the driver, or may we have the charges posted to our room account?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Either way works. Most guests prefer to charge it to their room. I'll arrange a sedan for two passengers at 9 AM with a driver-guide. The total is $210 — $180 for the charter plus $30 for the guide service. Fuel and tolls are included.",
            textZh:
              "都可以。大多数客人选择挂房费。我安排明早9点一辆轿车，两位乘客，配导游司机。总共210美元——包车180美元加导游服务30美元。油费和过路费已包含。",
            keyPhrases: [
              { en: "sedan", zh: "轿车" },
              { en: "fuel and tolls", zh: "油费和过路费" },
              { en: "included", zh: "已包含" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can pay the driver or put it on your room — up to you. It comes to $210 all in. Gas and tolls are covered.",
                textZh: "可以付给司机也可以挂房费——随您。一共210美元全包。油费和过路费已含。",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "Most people just charge it to the room. So that's a car at 9 with a guide — $210 total, everything included.",
                textZh: "大多数人挂房费。那就9点一辆车配导游——总共210美元，全包了。",
                actionHint: "确认费用和安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "Either way's fine. Most people just charge it to their room. I'll set up a sedan for two for 9 AM with that driver-guide. Total's 210 bucks — 180 for the car, 30 for the guide. Gas and tolls are covered.",
            formalityVariants: {
              casual:
                "Either way's fine. Most people charge it to their room. I'll set up a sedan for two at 9 AM with the driver-guide. Total's $210—$180 for the car, $30 for the guide. Gas and tolls covered.",
              standard:
                "Either way works. Most guests prefer to charge it to their room. I'll arrange a sedan for two passengers at 9 AM with a driver-guide. The total is $210 — $180 for the charter plus $30 for the guide service. Fuel and tolls are included.",
              formal:
                "Both payment methods are entirely acceptable. However, the majority of our guests typically opt to charge the service to their room account. I will proceed with arranging a sedan for two passengers, scheduled for 9:00 AM, inclusive of the driver-guide service. The comprehensive total will be $210, comprising $180 for the charter and an additional $30 for the specialized guide service. Please note that all fuel costs and applicable tolls are included in this quotation.",
            },
          },
          {
            speaker: "you",
            textEn: "Please charge it to room 815. Thank you for setting this up.",
            textZh: "请挂到815房。谢谢你帮忙安排。",
            casualVersion: "Yeah, just put it on room 815. Thanks for setting it up.",
            commonMistake: {
              wrong: "Charge to room 815.",
              correct: "Please charge it to room 815.",
              explanation: '"charge to" 前常需要宾语，指所要挂账的费用。',
            },
            formalityVariants: {
              casual: "Yeah, just put it on room 815. Thanks for setting it up.",
              standard: "Please charge it to room 815. Thank you for setting this up.",
              formal:
                "Kindly charge the total amount to room 815. We appreciate your assistance in arranging these services.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 包裹与快递 ====================
  {
    id: "hotel-19",
    category: "hotel",
    titleZh: "包裹与快递",
    titleEn: "Packages & Deliveries",
    description: "在酒店收取快递包裹或寄送物品",
    otherRole: "前台接待员",
    otherRoleIcon: "package",
    flows: [
      // --- Flow 1: 收取快递包裹 ---
      {
        id: "receive-package",
        titleZh: "收取快递",
        titleEn: "Receiving a Package",
        description: "在酒店等待并取回网购快递",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'm expecting a package to be delivered here. It should arrive today. Can the hotel receive it for me?",
            textZh: "你好，我有一个快递要寄到酒店。应该今天到。酒店能帮我签收吗？",
            casualVersion: "Hey, expecting a package today. Can you guys get it for me?",
            culturalNote: "在美国，酒店代收快递是常见服务，直接说明目的即可。",
            commonMistake: {
              wrong: "Can hotel receive it for me?",
              correct: "Can the hotel receive it for me?",
              explanation: '中文里没有冠词，中国人常漏掉英文的 "the" 或 "a"。',
            },
            formalityVariants: {
              casual: "Hey, I've got a package coming today. Can you guys sign for it?",
              standard: "Hi, I'm expecting a package to be delivered here today. Can the hotel receive it for me?",
              formal:
                "Good morning/afternoon, I am expecting a delivery today. Would it be possible for the hotel to accept it on my behalf?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course! We accept packages for our guests all the time. What's the name on the delivery and which carrier is it coming through?",
            textZh: "当然！我们经常帮客人收快递。快递上的收件人姓名是什么？是哪家快递公司？",
            keyPhrases: [
              { en: "accept packages", zh: "签收包裹" },
              { en: "carrier", zh: "快递公司/承运商" },
            ],
            vocabNotes: {
              carrier: {
                meaningInContext: "在这里指快递/物流公司，如 FedEx、UPS、Amazon 等",
                similarUsage: "类似用法：Which carrier did you ship it with?（你用哪家快递寄的？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "No problem! We hold packages at the front desk. What name should we look for on the label?",
                textZh: "没问题！我们在前台保管包裹。标签上的名字是什么？",
                actionHint: "提供包裹上的收件人姓名和订单号",
                frequency: "common",
              },
            ],
            casualVersion: "Totally! We do that all the time. What name's on it and which company's bringing it?",
            commonMistake: {
              wrong: "What's the name on delivery?",
              correct: "What's the name on the delivery?",
              explanation: '中文里没有冠词，中国人常漏掉英文的 "the"。',
            },
            formalityVariants: {
              casual: "Sure thing! We handle packages constantly. What name and carrier?",
              standard:
                "Certainly! We frequently accept packages for our guests. Could you please provide the name on the delivery and the carrier?",
              formal:
                "Absolutely. We routinely manage package deliveries for our esteemed guests. May I inquire about the recipient's name as it appears on the delivery, and which shipping carrier is handling it?",
            },
          },
          {
            speaker: "you",
            textEn:
              "It's under Wei Wang, room 815. It's an Amazon delivery. I ordered some cold medicine because my wife isn't feeling well.",
            textZh: "收件人是Wei Wang，815房。是Amazon快递。我给太太买了些感冒药因为她不舒服。",
            culturalNote: "在美国，解释买感冒药这类个人事务并非必要，直接说收件信息即可。过度解释可能显得不自然。",
            casualVersion:
              "Wei Wang, room 815. It's Amazon. Got some cold medicine for my wife, she's not feeling great.",
            commonMistake: {
              wrong: "My wife not feel well.",
              correct: "My wife isn't feeling well.",
              explanation: '句子需要动词，中国人常省略 "be" 动词。',
            },
            formalityVariants: {
              casual: "Wei Wang, room 815. Amazon delivery. My wife's not feeling well, so I ordered some cold meds.",
              standard:
                "The name is Wei Wang, for room 815. It's an Amazon delivery. I ordered some cold medicine as my wife isn't feeling well.",
              formal:
                "The package is addressed to Wei Wang, for room 815. It is being delivered by Amazon. I have purchased some cold medicine, as my wife is currently indisposed.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Got it — Wei Wang, room 815, Amazon delivery. We'll sign for it when it arrives and give you a call or send a text to let you know. Would you like us to bring it up to your room, or will you pick it up at the front desk?",
            textZh:
              "好的——Wei Wang，815房，Amazon快递。到了我们会签收并打电话或发短信通知您。要我们送到房间还是您来前台取？",
            keyPhrases: [
              { en: "sign for it", zh: "签收" },
              { en: "bring it up", zh: "送上去" },
              { en: "pick it up", zh: "来取" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Wei Wang, 815, Amazon — got it. We'll grab it for you and let you know. Want us to send it up, or come get it yourself?",
                textZh: "Wei Wang，815房，Amazon——记下了。我们帮您收，到了通知您。送上去还是自己来取？",
                actionHint: "选择送到房间还是自取",
                frequency: "common",
              },
              {
                textEn:
                  "All noted. We'll sign for it and shoot you a text. Should we deliver it to your room or hold it at the desk?",
                textZh: "都记好了。我们签收后给您发短信。送到房间还是放前台？",
                actionHint: "告诉前台你的偏好",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, Wei Wang, 815, Amazon. We'll sign for it and call/text you. Wanna us to bring it up or you grab it from the front desk?",
            commonMistake: {
              wrong: "You pick up at front desk?",
              correct: "Will you pick it up at the front desk?",
              explanation: '提问时中国人常省略助动词 "will" 或 "do"。',
            },
            formalityVariants: {
              casual:
                "Gotcha – Wei Wang, 815, Amazon. We'll sign, then call/text. Want it brought up or you'll get it at the desk?",
              standard:
                "Understood — Wei Wang, room 815, Amazon delivery. We will sign for it upon arrival and notify you via call or text. Would you prefer us to deliver it to your room, or will you collect it at the front desk?",
              formal:
                "Excellent. We have noted the details: Wei Wang, room 815, Amazon delivery. We shall accept the package upon its arrival and promptly inform you by telephone or text message. Would you prefer the package be delivered to your room, or will you be collecting it from the reception desk?",
            },
          },
          {
            speaker: "you",
            textEn: "Could you have someone bring it up? I don't want to leave my wife alone right now.",
            textZh: "能让人送上来吗？我现在不想让太太一个人待着。",
            culturalNote: "和上文类似，说明个人理由 (不想让太太独处) 在美国并非必要，但也可接受。直接说 'Could you bring it",
            casualVersion: "Could you guys send someone up with it? Don't wanna leave my wife alone right now.",
            commonMistake: {
              wrong: "Let someone bring it up?",
              correct: "Could you have someone bring it up?",
              explanation: '"let" 指允许，"have" 指安排某人做某事。',
            },
            formalityVariants: {
              casual: "Yeah, can someone bring it up? Don't wanna leave my wife.",
              standard:
                "Could you please arrange for someone to bring it up? I'd prefer not to leave my wife alone at the moment.",
              formal:
                "Yes, if it's not too much trouble, would it be possible to have someone deliver it to our room? I am reluctant to leave my wife unattended at this time.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course. As soon as it arrives, we'll have a bellman bring it right up to room 815. Is there anything else we can do? We also have a small shop in the lobby with basic medicines and snacks if you need anything sooner.",
            textZh:
              "当然。一到我们就让行李员送到815房。还有什么需要帮忙的吗？大堂也有小商店卖基本药品和零食，如果您急需的话。",
            keyPhrases: [
              { en: "bellman", zh: "行李员" },
              { en: "lobby shop", zh: "大堂商店" },
            ],
            vocabNotes: {
              bellman: {
                meaningInContext: "在这里指酒店的行李员/门童，负责帮客人搬运行李和跑腿",
                similarUsage: "类似用法：Ask the bellman to help with your bags.（让行李员帮你拿行李）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely — we'll bring it up the second it gets here. Oh, and there's a little shop in the lobby if you need anything right now.",
                textZh: "当然——一到就送上去。对了，大堂有个小商店，如果现在就需要什么可以去看看。",
                actionHint: "考虑是否先去大堂商店",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing, we'll send it straight to 815. In the meantime, our lobby shop has some basic meds and snacks if that helps.",
                textZh: "没问题，直接送到815。在这期间，大堂商店有一些基本药品和零食可以先应急。",
                actionHint: "先去大堂商店买急需物品",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing. Soon as it gets here, a bellman'll bring it right up to 815. Anything else we can help with? We got a little shop in the lobby too, for meds and snacks if you need 'em fast.",
            commonMistake: {
              wrong: "We have small shop in lobby.",
              correct: "We also have a small shop in the lobby.",
              explanation: '中文里没有冠词，中国人常漏掉英文的 "a" 和 "the"。',
            },
            formalityVariants: {
              casual:
                "No problem. Bellman'll bring it right up to 815 ASAP. Anything else? We got a lobby shop with meds/snacks if you need stuff quick.",
              standard:
                "Certainly. Upon its arrival, we will have a bellman promptly deliver it to room 815. Is there anything else we can assist you with? We also have a small shop in the lobby that offers basic medicines and snacks, should you require anything immediately.",
              formal:
                "Undoubtedly. As soon as the package is received, we shall dispatch a bellman to deliver it directly to room 815. Please let us know if there is anything further we can do to assist you. Additionally, for your convenience, a modest sundry shop is located in our lobby, stocking essential medications and refreshments, should your needs be more immediate.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very kind of you. I think we'll be okay once the medicine arrives. Thank you!",
            textZh: "你真好。药到了应该就没问题了。谢谢！",
            casualVersion: "That's super nice of you. We should be good once the medicine gets here. Thanks!",
            culturalNote: "“你真好” (You are so kind) 在英文中听起来可能过于直接或个人化，在酒店服务场景下使用“That's ",
            commonMistake: {
              wrong: "We will okay.",
              correct: "We'll be okay.",
              explanation: '"okay" 是形容词，前面需要 "be" 动词。',
            },
            formalityVariants: {
              casual: "That's real nice. We'll be fine once the meds show up. Thanks!",
              standard: "That's very kind of you. I believe we'll be fine once the medicine arrives. Thank you!",
              formal:
                "That is exceedingly thoughtful of you. I anticipate that we will be perfectly comfortable once the prescribed medicine has been delivered. My sincere thanks.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You're welcome. I hope your wife feels better soon. Don't hesitate to call if you need anything else.",
            textZh: "不客气。希望您太太早日康复。有任何需要随时打电话。",
            keyPhrases: [
              { en: "feels better soon", zh: "早日康复" },
              { en: "don't hesitate to call", zh: "随时打电话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Happy to help! I really hope she's feeling better soon. Just ring us if you need anything at all.",
                textZh: "很高兴能帮上忙！真心希望她快点好起来。有任何需要打电话就行。",
                actionHint: "有需要随时联系前台",
                frequency: "common",
              },
              {
                textEn: "No problem at all. Wishing her a quick recovery. We're here 24/7 if you need us.",
                textZh: "完全没问题。祝她早日康复。我们24小时都在，需要就来找我们。",
                actionHint: "记住前台全天候服务",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. Hope your wife feels better fast. Just give us a shout if you need anything else.",
            commonMistake: {
              wrong: "Hope your wife soon better.",
              correct: "I hope your wife feels better soon.",
              explanation: '缺少主语 "I" 和动词 "feels"，以及 "soon" 的位置不正确。',
            },
            formalityVariants: {
              casual: "You bet. Hope she's feeling better quick. Holler if you need anything.",
              standard:
                "You're most welcome. I sincerely hope your wife experiences a swift recovery. Please do not hesitate to contact us if you require any further assistance.",
              formal:
                "The pleasure is entirely ours. I extend my earnest wishes for your wife's speedy and complete recovery. Furthermore, please feel free to contact us at any time should you require any additional support or services.",
            },
          },
        ],
      },

      // --- Flow 2: 寄送包裹 ---
      {
        id: "send-package",
        titleZh: "寄送包裹",
        titleEn: "Sending a Package",
        description: "通过酒店寄送包裹回国或到其他地点",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I bought too many souvenirs and my suitcase is full. Can I ship a package from the hotel?",
            textZh: "我买了太多纪念品，行李箱装满了。能从酒店寄包裹吗？",
            culturalNote: "在美国，直接陈述问题（“Can I ship a package...?”）即可，不需要先解释原因（“买了太多纪念品..",
            casualVersion: "Bought too many souvenirs, suitcase is packed. Can I ship a package from here?",
            commonMistake: {
              wrong: "My suitcase full.",
              correct: "My suitcase is full.",
              explanation: "中文常省略主语和系动词，英文不能省，尤其在陈述句中。",
            },
            formalityVariants: {
              casual: "Got too many souvenirs, suitcase is stuffed. Can I ship something out of here?",
              standard: "I've bought too many souvenirs and my suitcase is full. Can I ship a package from the hotel?",
              formal:
                "Excuse me, I've accumulated a considerable number of souvenirs, and my luggage is at maximum capacity. Would it be possible to arrange for package shipment services from this establishment?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely. We have a business center that handles shipping. We can ship via FedEx, UPS, or USPS. Where would you like to send it?",
            textZh: "完全可以。我们的商务中心可以处理寄件。可以通过FedEx、UPS或USPS寄送。您要寄到哪里？",
            culturalNote: "美国常用快递公司：FedEx, UPS, USPS. 了解各自特点有助于选择.",
            commonMistake: {
              wrong: "Where do you want to send?",
              correct: "Where would you like to send it?",
              explanation: "少了 'it'，听起来不完整，且 'Where do you want...?' 不如 'Where would you like...?' 礼貌。",
            },
            keyPhrases: [
              { en: "handles shipping", zh: "处理寄件" },
              { en: "ship via", zh: "通过...寄送" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Our concierge can help you pack and ship. Are you sending it domestically or internationally?",
                textZh: "可以！礼宾部可以帮您打包和寄送。是国内还是国际？",
                actionHint: "说明寄送目的地",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, totally. Got a business center here that does shipping. Can go FedEx, UPS, USPS. Where's it going?",
            formalityVariants: {
              casual: "Yep, no problem. Our business center handles shipping — FedEx, UPS, USPS. Where to?",
              standard:
                "Absolutely. We have a business center that handles shipping. We can ship via FedEx, UPS, or USPS. Where would you like to send it?",
              formal:
                "Certainly. Our establishment provides a dedicated business center equipped to manage all shipping requirements. We offer services through FedEx, UPS, or USPS. May I inquire as to your intended destination for the package?",
            },
          },
          {
            speaker: "you",
            textEn: "I need to ship it to China. How much would it cost and how long would it take?",
            textZh: "我要寄到中国。多少钱，要多久？",
            culturalNote: "国际快递费用通常较高，时间也较长。需申报物品清单和价值。",
            casualVersion: "Gotta send it to China. What's the cost and how long?",
            commonMistake: {
              wrong: "How much money? How long time?",
              correct: "How much would it cost? How long would it take?",
              explanation: "中文“多少钱”、“多长时间”直接翻译常漏掉动词或听起来不自然。",
            },
            formalityVariants: {
              casual: "China. Cost and time?",
              standard: "I need to ship it to China. How much would it cost and how long would it take?",
              formal:
                "My intention is to ship this package to China. Could you please provide an estimate of the associated costs and the projected delivery timeframe?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "For international shipping to China, FedEx Express takes about 3 to 5 business days and costs around $80 to $120 depending on weight and size. USPS Priority Mail International is cheaper — about $40 to $60 — but takes 6 to 10 business days. Which would you prefer?",
            textZh:
              "寄到中国的国际快递，FedEx快递大约3到5个工作日，费用根据重量和尺寸大约80到120美元。USPS国际优先邮件便宜些——大约40到60美元——但需要6到10个工作日。您选哪个？",
            culturalNote: "详细解释不同快递公司的速度和价格，这是美国服务业常见的做法，确保客户充分了解选项。",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "depending on weight and size", zh: "取决于重量和尺寸" },
              { en: "Priority Mail International", zh: "国际优先邮件" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "China? Sure. FedEx is faster — 3 to 5 days, around $80-120. USPS is budget-friendly at $40-60 but takes about a week or two. What's your preference?",
                textZh:
                  "寄中国？没问题。FedEx快一些——3到5天，大约80-120美元。USPS实惠些40-60美元但要一两周。您选哪个？",
                actionHint: "根据预算和时间选快递",
                frequency: "common",
              },
              {
                textEn:
                  "For China you've got two options — fast and pricier with FedEx, or cheaper but slower with USPS. Depends how soon you need it there.",
                textZh: "寄中国有两个选择——FedEx快但贵些，USPS便宜但慢些。看您多快需要到。",
                actionHint: "权衡速度和价格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay, China shipping. FedEx Express is like 3-5 days, $80-$120, depends on size. USPS Priority is cheaper, $40-$60, but takes longer, 6-10 days. Which one you want?",
            formalityVariants: {
              casual:
                "China shipping: FedEx is 3-5 days, $80-120. USPS Priority is cheaper, $40-60, but 6-10 days. Your pick?",
              standard:
                "For international shipping to China, FedEx Express takes about 3 to 5 business days and costs around $80 to $120 depending on weight and size. USPS Priority Mail International is cheaper — about $40 to $60 — but takes 6 to 10 business days. Which would you prefer?",
              formal:
                "Regarding international shipments destined for China, FedEx Express typically requires approximately 3 to 5 business days for delivery, with costs ranging from $80 to $120, contingent upon the item's weight and dimensions. Alternatively, USPS Priority Mail International offers a more economical option, priced between $40 and $60, though with a longer transit time of 6 to 10 business days. Please indicate your preferred service.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll go with USPS since it's not urgent. Do you have boxes I can use? And is there anything I can't send?",
            textZh: "选USPS吧，不着急。有箱子可以用吗？有什么不能寄的吗？",
            culturalNote: "国际寄送禁运物品列表很长，需特别注意液体、电池、食品、药品。",
            casualVersion: "USPS is fine, not urgent. Got boxes I can use? Anything I can't send?",
            commonMistake: {
              wrong: "I choose USPS.",
              correct: "I'll go with USPS.",
              explanation: "中文说“我选”，英文口语常用 'I'll go with' 更自然。",
            },
            formalityVariants: {
              casual: "USPS works, no rush. Got boxes? Any forbidden stuff?",
              standard:
                "I'll go with USPS since it's not urgent. Do you have boxes I can use? And is there anything I can't send?",
              formal:
                "I shall opt for USPS, as expedited delivery is not a critical requirement. Furthermore, do you provide packaging boxes for customer use, and are there any specific items that are prohibited from shipment?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "We have shipping boxes in a few sizes — small, medium, and large. They're $3 to $8 depending on size. As for restrictions, you can't send liquids over 500ml, batteries, or any food items like fresh fruit or meat. Sealed, packaged snacks are usually fine though.",
            textZh:
              "我们有几种尺寸的快递箱——小、中、大。根据尺寸3到8美元。关于限制，不能寄500毫升以上的液体、电池或新鲜水果、肉类等食品。密封包装的零食一般没问题。",
            culturalNote: "在解释禁运品时，会直接列举常见例子（如电池、液体、生鲜），帮助客户理解。",
            commonMistake: {
              wrong: "Can't send liquid, battery, fresh food.",
              correct: "You cannot ship liquids over 500ml, batteries, or fresh foods like fruits or meat.",
              explanation: "直接说“不能寄XX”不够完整，英文需要主语和更完整的句子结构。",
            },
            keyPhrases: [
              { en: "shipping boxes", zh: "快递箱" },
              { en: "restrictions", zh: "限制" },
              { en: "liquids", zh: "液体" },
              { en: "sealed, packaged snacks", zh: "密封包装的零食" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got boxes — small, medium, large. A few bucks each. Just no big liquids, batteries, or fresh food. Packaged snacks are okay though.",
                textZh: "有箱子——小中大号。几美元一个。不能寄大瓶液体、电池或生鲜食品。包装零食可以。",
                actionHint: "选择合适尺寸的箱子",
                frequency: "common",
              },
              {
                textEn:
                  "Boxes are $3 to $8 depending on size. Main restrictions: no liquids over 500ml, no batteries, no fresh food. Sealed snacks are generally fine.",
                textZh: "箱子3到8美元看尺寸。主要限制：500毫升以上液体不行，电池不行，生鲜不行。密封零食一般可以。",
                actionHint: "确认物品是否可以寄",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we got shipping boxes: small, medium, large. $3-$8. Restrictions? No liquids over 500ml, no batteries, no fresh food like fruit or meat. But sealed snacks are usually cool.",
            formalityVariants: {
              casual:
                "Yep, we've got small, medium, large boxes, $3-$8. No liquids >500ml, batteries, or fresh food. Sealed snacks usually okay.",
              standard:
                "We have shipping boxes in a few sizes — small, medium, and large. They're $3 to $8 depending on size. As for restrictions, you can't send liquids over 500ml, batteries, or any food items like fresh fruit or meat. Sealed, packaged snacks are usually fine though.",
              formal:
                "We offer shipping boxes in various dimensions: small, medium, and large, priced between $3 and $8 based on their size. Regarding shipping restrictions, please be advised that liquids exceeding 500ml, batteries, and perishable food items such as fresh fruit or meat are prohibited. However, commercially sealed and packaged snack items are generally permissible.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Good to know. It's mostly clothes and some chocolate. I'll need a medium box. Can you help me fill out the customs form?",
            textZh: "好的。主要是衣服和一些巧克力。我需要一个中号箱子。能帮我填海关申报单吗？",
            culturalNote: "美国海关申报单需英文填写，物品名称和价值要准确。酒店通常可协助。",
            casualVersion:
              "Got it. Mostly clothes and chocolate. Need a medium box. Can you help with the customs form?",
            commonMistake: {
              wrong: "I need medium box.",
              correct: "I'll need a medium box.",
              explanation: "英文可数名词单数前通常需要冠词 'a/an' 或 'the'。",
            },
            formalityVariants: {
              casual: "Okay. Just clothes and chocolate. Medium box, please. Help me with the customs form?",
              standard:
                "Good to know. It's mostly clothes and some chocolate. I'll need a medium box. Can you help me fill out the customs form?",
              formal:
                "That is helpful information. The contents primarily consist of apparel and some confectionary items. I will require a medium-sized box. Would you be so kind as to assist me in completing the customs declaration form?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course. I'll help you with the customs declaration form. You'll need to list each item, its value, and the country of origin. For chocolate, just mark it as 'food/confectionery.' I'll get you the box and packing tape as well.",
            textZh:
              "当然。我帮您填海关申报单。您需要列出每件物品、价值和原产国。巧克力写「食品/糖果」就行。我也给您拿箱子和封箱胶带。",
            culturalNote: "在美国，酒店前台或商务中心员工会提供指导，甚至协助填写复杂的表格，这体现了良好的客户服务。",
            commonMistake: {
              wrong: "I help you write customs form.",
              correct: "I'll assist you with the customs form.",
              explanation: "“I help you write”听起来不自然，用 'assist you with' 更地道。",
            },
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报单" },
              { en: "country of origin", zh: "原产国" },
              { en: "packing tape", zh: "封箱胶带" },
            ],
            vocabNotes: {
              "customs declaration form": {
                meaningInContext: "在这里指国际邮寄时必须填写的表格，申报包裹内容和价值，供海关检查",
                similarUsage:
                  "类似用法：Make sure you declare the value accurately on the customs form.（确保在海关表上准确申报价值）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure! I'll walk you through the customs form. Just list what's inside, how much it's worth, and where it's from. I'll grab you a box and tape too.",
                textZh: "没问题！我带您填海关表。把里面的东西列出来，写上价值和产地就行。箱子和胶带我也给您拿。",
                actionHint: "准备好物品清单和估价",
                frequency: "common",
              },
              {
                textEn:
                  "No problem — the customs form looks complicated but it's pretty simple. Items, values, origin. Chocolate goes under 'confectionery.' I'll set you up with a box.",
                textZh: "没问题——海关表看着复杂但其实很简单。物品、价值、产地。巧克力写在「糖果」类。我给您准备箱子。",
                actionHint: "按指引填写表格",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sure thing. I'll help with the customs form. Just gotta list each item, its value, and where it came from. Chocolate? Just put 'food/confectionery.' I'll grab the box and tape too.",
            formalityVariants: {
              casual:
                "Totally. I'll walk you through the customs form. List items, value, origin. Chocolate? Just 'food/confectionery.' I'll get your box and tape.",
              standard:
                "Of course. I'll help you with the customs declaration form. You'll need to list each item, its value, and the country of origin. For chocolate, just mark it as 'food/confectionery.' I'll get you the box and packing tape as well.",
              formal:
                "Certainly. I would be pleased to assist you with the completion of the customs declaration form. You will be required to enumerate each item, its declared value, and its country of origin. For chocolate, kindly categorize it as 'food/confectionery.' I will also retrieve the appropriate box and packing tape for you.",
            },
          },
          {
            speaker: "you",
            textEn: "You're a lifesaver. I'll bring everything down to the business center in 20 minutes.",
            textZh: "你帮了大忙了。我20分钟后把东西拿到商务中心。",
            culturalNote:
              '"You\'re a lifesaver" 是常用的感谢表达，字面意思是「你是救命恩人」，实际表示「你帮了大忙」。',
            casualVersion: "You're the best. I'll bring everything down to the business center in like 20.",
            commonMistake: {
              wrong: "I will bring down everything.",
              correct: "I'll bring everything down.",
              explanation: "当动词短语的宾语是代词时，通常放在动词和介词之间。",
            },
            formalityVariants: {
              casual: "Thanks a ton. I'll be down with everything in about 20.",
              standard: "You're a lifesaver. I'll bring everything down to the business center in 20 minutes.",
              formal:
                "I genuinely appreciate your assistance. I shall bring all my items to the business center in approximately 20 minutes.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 房卡问题 ====================
  {
    id: "hotel-20",
    category: "hotel",
    titleZh: "房卡问题",
    titleEn: "Key Card Issues",
    description: "房卡失灵、丢失、被锁在门外等情况的处理",
    otherRole: "前台接待员",
    otherRoleIcon: "key",
    flows: [
      // --- Flow 1: 房卡失灵 ---
      {
        id: "card-malfunction",
        titleZh: "房卡失灵",
        titleEn: "Key Card Not Working",
        description: "房卡无法打开房门",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my key card isn't working. I've tried it several times but the light stays red.",
            textZh: "你好，我的房卡不好使了。试了好几次，灯一直是红的。",
            casualVersion: "Hey, my key card's not working. Tried it a bunch, light's still red.",
            commonMistake: {
              wrong: "My key card cannot work.",
              correct: "My key card isn't working.",
              explanation: '表达物品不能正常运作时，"cannot work" 不如 "isn\'t working" 自然。',
            },
            formalityVariants: {
              casual: "Key card's not working. Tried it a few times, light's red.",
              standard:
                "Excuse me, my key card isn't working. I've tried it multiple times, but the light remains red.",
              formal:
                "Good evening/morning, I apologize, but it appears my room key card is not functioning. I have attempted to use it on several occasions, yet the indicator light consistently displays red.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "I'm sorry about that. Key cards can get demagnetized if they're kept near phones or other electronics. Let me reprogram it for you. What's your room number?",
            textZh: "很抱歉。房卡如果放在手机或其他电子设备旁边可能会消磁。我帮您重新编程。您的房间号是？",
            commonMistake: {
              wrong: "I am very sorry. Key cards if put beside cell phones may demagnetize. I help you re-program. Your room number is?",
              correct: "I'm sorry about that. Key cards can become demagnetized if they're kept near cell phones or other electronic devices. I can re-program it for you. What is your room number?",
              explanation: "表达歉意常用 I'm sorry about that 或 My apologies。句子结构需更自然。",
            },
            keyPhrases: [
              { en: "demagnetized", zh: "消磁" },
              { en: "reprogram", zh: "重新编程" },
            ],
            vocabNotes: {
              demagnetized: {
                meaningInContext: "在这里表示房卡的磁条信息被手机等设备的磁场破坏，导致无法读取",
                similarUsage:
                  "类似用法：Keep your credit card away from magnets or it'll get demagnetized.（别把信用卡放在磁铁旁边，会消磁）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "That happens sometimes. Cards lose their programming near phones. Let me make you a fresh one — room number?",
                textZh: "有时会这样。卡放在手机旁边会失效。我给您做张新的——房间号多少？",
                actionHint: "提供房间号和身份信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry 'bout that. Key cards sometimes demagnetize if they're near phones. Lemme just reprogram it. What's your room number?",
            formalityVariants: {
              casual: "Sorry 'bout that. Cards demagnetize near phones. I'll reprogram it. Room number?",
              standard:
                "I apologize for the inconvenience. Key cards can become demagnetized if stored in close proximity to mobile phones or other electronic devices. Allow me to reprogram it for you. May I have your room number, please?",
              formal:
                "My sincerest apologies for this inconvenience. Key cards are susceptible to demagnetization when exposed to electromagnetic fields from devices such as mobile phones. I would be pleased to reprogram it for you immediately. Kindly provide your room number.",
            },
          },
          {
            speaker: "you",
            textEn: "Room 815. I think I had it in my pocket with my phone — that's probably what happened.",
            textZh: "815房。我好像把它和手机放在同一个口袋里了——可能就是这个原因。",
            commonMistake: {
              wrong: "Room 815. I think I had it in my pocket with my phone — that is why.",
              correct: "Room 815. I think I had it in my pocket with my phone — that might be why.",
              explanation: "表达“这可能是原因”时，用“might be why”更自然，表示不确定性。",
            },
            casualVersion: "Room 815. Yeah, think I had it in my pocket with my phone — prob'ly what happened.",
            formalityVariants: {
              casual: "815. Yep, had it with my phone. That's probably it.",
              standard: "It's Room 815. I believe I had it in my pocket alongside my phone — that's likely the cause.",
              formal:
                "My room number is 815. I suspect I inadvertently placed it in the same pocket as my mobile phone, which would account for the demagnetization.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "That'll do it. May I see your ID just to verify? It's standard procedure when we reissue key cards.",
            textZh: "那就对了。能看一下您的证件核实一下吗？重新发卡时需要核实身份，这是标准流程。",
            commonMistake: {
              wrong: "This is standard procedure.",
              correct: "It's standard procedure.",
              explanation: "描述一种普遍做法时，常用 “It's standard procedure” 而非 “This is standard procedure”。",
            },
            keyPhrases: [
              { en: "verify", zh: "核实" },
              { en: "standard procedure", zh: "标准流程" },
              { en: "reissue", zh: "重新发放" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, that'll do it. Can I just see some ID before I make a new one? Policy thing.",
                textZh: "对，就是这个原因。做新卡前能看一下证件吗？规定要求。",
                actionHint: "出示证件",
                frequency: "common",
              },
              {
                textEn: "Phones and cards don't mix well! Quick ID check and I'll get you a fresh key.",
                textZh: "手机和卡放一起不太好！快速看一下证件就给您做新卡。",
                actionHint: "递上护照或证件",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, that'll do it. Can I see your ID, just to verify? Standard procedure for new key cards.",
            culturalNote: "美国酒店要求出示ID核实身份很常见，习惯就好",
            formalityVariants: {
              casual: "Yep, that's why. Need to see your ID, just to check. Standard for new cards.",
              standard:
                "That would certainly be the reason. May I request to see your identification for verification purposes? It is our standard procedure when reissuing key cards.",
              formal:
                "Indeed, that would explain it. For security protocols, may I kindly request to view your identification to verify your identity? This is a mandatory procedure for the reissuance of room keys.",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my passport.",
            textZh: "给您我的护照。",
            casualVersion: "Here ya go, my passport.",
            commonMistake: {
              wrong: "Give you my passport.",
              correct: "Here's my passport.",
              explanation: '递交物品时，直接说 "Here\'s..." 或 "Here you go" 比 "Give you..." 更自然。',
            },
            formalityVariants: {
              casual: "Here ya go, my passport.",
              standard: "Here is my passport.",
              formal: "Certainly, here is my passport for your review.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Thank you, Mr. Wang. Here are two new key cards. A tip to keep them working — put them in a separate pocket or in the card sleeve we provide, away from your phone and wallet.",
            textZh: "谢谢，王先生。给您两张新房卡。小建议——把房卡放在单独的口袋或我们提供的卡套里，远离手机和钱包。",
            commonMistake: {
              wrong: "A small suggestion to keep them working...",
              correct: "A tip to keep them working...",
              explanation: "“小建议”更常用“A tip”或“Here’s a tip”。",
            },
            keyPhrases: [
              { en: "card sleeve", zh: "卡套" },
              { en: "separate pocket", zh: "单独的口袋" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All done — two fresh cards for you. Pro tip: keep them away from your phone. Use this little sleeve we give you.",
                textZh: "搞定——两张新卡给您。小窍门：别跟手机放一起。用我们给的这个小卡套。",
                actionHint: "用卡套保护房卡",
                frequency: "common",
              },
              {
                textEn:
                  "Here you go, Mr. Wang — two new keys. Just a heads-up, try not to keep them near anything magnetic.",
                textZh: "给您，王先生——两张新钥匙。提醒一下，尽量别放在有磁性的东西旁边。",
                actionHint: "注意房卡存放方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks, Mr. Wang. Here's your two new key cards. Quick tip to keep 'em working — stick 'em in a separate pocket or the sleeve we give ya, away from your phone and wallet.",
            formalityVariants: {
              casual: "Thanks, Mr. Wang. Here's your cards. Just keep 'em separate from your phone/wallet.",
              standard:
                "Thank you, Mr. Wang. Here are your two new key cards. A helpful suggestion for maintaining their functionality is to store them in a separate pocket or within the provided card sleeve, away from your mobile phone and wallet.",
              formal:
                "Thank you, Mr. Wang. I have prepared two new key cards for you. A recommendation to ensure their continued functionality would be to store them in a distinct compartment or utilizing the protective sleeve we offer, ensuring they are kept at a distance from your mobile telephone and any electronic wallet devices.",
            },
          },
          {
            speaker: "you",
            textEn: "Good tip. I'll keep them separate this time. Thanks!",
            textZh: "好建议。这次我分开放。谢谢！",
            commonMistake: {
              wrong: "I will separate them this time.",
              correct: "I'll make sure to keep them separate this time.",
              explanation: "表达“分开存放”时，用“keep them separate”更自然。",
            },
            casualVersion: "Good tip. I'll keep 'em separate this time. Thanks!",
            formalityVariants: {
              casual: "Yeah, good call. I'll keep 'em apart. Thanks!",
              standard: "That's a good tip. I will certainly keep them separate this time. Thank you!",
              formal:
                "That is an excellent suggestion. I shall endeavor to keep them separated on this occasion. My thanks to you.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "You're welcome! If it happens again, just come down or call the front desk and we'll sort it out right away.",
            textZh: "不客气！如果再出问题，下来找我们或打电话，我们马上处理。",
            keyPhrases: [{ en: "sort it out", zh: "处理好/解决" }],
            literalMeaning: '"sort it out" 字面意思是「把它整理出来」，实际口语中表示「解决问题、处理好」。',
            alternativeExpressions: [
              {
                textEn: "Anytime! If it acts up again, just give us a ring and we'll fix it in no time.",
                textZh: "随时来！如果又出问题，打个电话我们马上搞定。",
                actionHint: "记住前台电话",
                frequency: "common",
              },
              {
                textEn: "No problem! It's a quick fix. Just pop down or call if it happens again.",
                textZh: "没问题！很快就能解决。再出问题下来或打电话就行。",
                actionHint: "有问题直接找前台",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! Happens again, just come down or call the front desk, we'll fix it right up.",
            commonMistake: {
              wrong: "You are welcome!",
              correct: "You're welcome!",
              explanation: '口语中 "You\'re welcome" 更常见和自然，避免过于生硬的完整形式。',
            },
            formalityVariants: {
              casual: "No prob! If it acts up again, just hit us up at the front desk, we'll get it sorted.",
              standard:
                "You're most welcome! Should this issue recur, please do not hesitate to visit or contact the front desk, and we will resolve it for you immediately.",
              formal:
                "It was my pleasure. Should you encounter this situation again, please kindly return to the front desk or contact us via telephone, and we shall attend to it with the utmost immediacy.",
            },
          },
        ],
      },

      // --- Flow 2: 被锁在门外 ---
      {
        id: "locked-out",
        titleZh: "被锁在门外",
        titleEn: "Locked Out of Room",
        description: "房卡忘在房间里或丢失，无法进入房间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm locked out of my room. I left my key card inside when the door closed behind me.",
            textZh: "不好意思，我被锁在门外了。门关上时房卡忘在里面了。",
            culturalNote: "“I'm locked out”是很自然的表达，别说成“I'm locked outside”",
            casualVersion: "Hey, locked myself out. My key card's inside; door shut right behind me.",
            commonMistake: {
              wrong: "Sorry, I'm locked out. I left my key card inside.",
              correct: "Excuse me, I'm locked out. I left my key card inside.",
              explanation: '"Sorry" 通常用于表示歉意，"Excuse me" 用于引起注意或轻微打扰。',
            },
            formalityVariants: {
              casual: "Hey, locked myself out. Key card's inside.",
              standard: "Excuse me, I'm locked out of my room. I left my key card inside.",
              formal:
                "Good morning/afternoon, I apologize, but I appear to have locked myself out of my room. My key card was unfortunately left inside when the door secured.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Don't worry, that happens more often than you'd think! Can I see some identification and confirm your room number?",
            textZh: "别担心，这种情况比您想的常见！能看一下证件并确认房间号吗？",
            commonMistake: {
              wrong: "Don't worry, this situation is more common than you think!",
              correct: "Don't worry, this happens more often than you think!",
              explanation: "“这种情况很常见”更自然表达为 “this happens often” 或 “this is common。”",
            },
            alternativeExpressions: [
              {
                textEn: "No worries at all — happens all the time. What room are you in? Do you have any ID on you?",
                textZh: "完全没关系——经常发生的。您住几号房？身上有证件吗？",
                actionHint: "提供房间号和任何身份证明",
                frequency: "common",
              },
            ],
            casualVersion: "No worries, happens all the time! Just need some ID and your room number.",
            formalityVariants: {
              casual: "Happens all the time! Just need your ID and room number.",
              standard:
                "Don't worry, that happens frequently. Could I see some identification and confirm your room number, please?",
              formal:
                "Please don't be concerned; this is a rather common occurrence. May I respectfully request a form of identification and your room number for verification?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm in room 815. Unfortunately, my passport is also inside the room. I only have my phone with me. I can show you my booking confirmation email.",
            textZh: "我住815房。不巧护照也在房间里。身上只有手机。我可以给你看预订确认邮件。",
            casualVersion:
              "Room 815. Uh oh, my passport's in there too. Just got my phone. But I can show you my booking confirmation email.",
            commonMistake: {
              wrong: "I only have phone with me.",
              correct: "I only have my phone with me.",
              explanation: '"phone" 是可数名词，前面需要加 "my" 或 "a"。',
            },
            formalityVariants: {
              casual: "815. Passport's inside too, just my phone. But I can show you the booking email.",
              standard:
                "My room number is 815. Unfortunately, my passport is also in the room. I only have my phone with me, but I can show you my booking confirmation email.",
              formal:
                "My apologies, but my room is 815, and regrettably, my passport is currently inaccessible within the room as well. I only have my mobile device on my person; however, I would be pleased to present my booking confirmation email as an alternative.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "That's okay — the booking confirmation will work. Let me pull up your reservation to cross-check... Yes, that matches. I'll have someone come up with you to open the door. For security, we can't just hand out a new key without verifying your identity.",
            textZh:
              "没关系——预订确认可以。让我调出您的预订记录核对一下……对上了。我派人跟您上去开门。出于安全考虑，我们不能不核实身份就发新房卡。",
            commonMistake: {
              wrong: "Let me check your reservation.",
              correct: "Let me pull up your reservation to cross-reference...",
              explanation: "“查阅预订信息”更常用“pull up your reservation”；“核对”是“cross-reference”。",
            },
            keyPhrases: [
              { en: "booking confirmation", zh: "预订确认" },
              { en: "pull up your reservation", zh: "调出预订记录" },
              { en: "cross-check", zh: "交叉核对" },
              { en: "for security", zh: "出于安全考虑" },
            ],
            vocabNotes: {
              "cross-check": {
                meaningInContext: "在这里表示用另一个信息来源来核实/验证你的身份",
                similarUsage: "类似用法：Let me cross-check the dates with the system.（让我用系统核对一下日期）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The confirmation email works fine. Let me check... Yep, all good. I'll send someone up to let you in. We just can't give out keys without proper ID — hope you understand.",
                textZh:
                  "确认邮件可以。我查一下……没问题，都对上了。我派人上去帮您开门。没有正式证件不能发钥匙——希望您理解。",
                actionHint: "等工作人员带你去开门",
                frequency: "common",
              },
              {
                textEn:
                  "That'll do! Let me match it against our system... Perfect, confirmed. Someone will come up and open the door for you.",
                textZh: "可以！让我跟系统核对一下……很好，确认了。会有人上去帮您开门。",
                actionHint: "跟着工作人员上楼",
                frequency: "common",
              },
            ],
            casualVersion:
              "No worries, booking confirmation's fine. Let me just pull up your reservation to double-check... Okay, that works. I'll get someone to head up with you to open the door. We can't just give out a new key without checking who you are, for security.",
            formalityVariants: {
              casual:
                "Booking confirmation's fine. Let me just double-check your reservation... Yep, matches. I'll send someone up with you to open it. Can't give out keys without ID, you know, security.",
              standard:
                "That's perfectly fine—the booking confirmation will suffice. Allow me to retrieve your reservation details for cross-referencing... Yes, that correlates. I will dispatch a member of our staff to accompany you to your room to facilitate entry. Due to security protocols, we are unable to issue a new key without proper identity verification.",
              formal:
                "That is entirely acceptable; the booking confirmation will serve our purpose. Kindly allow me a moment to access your reservation details for thorough cross-referencing... Indeed, the information corresponds. I shall arrange for a security team member to accompany you to your room to grant access. Please understand that for paramount security reasons, we are unable to furnish a replacement key card without comprehensive identity verification.",
            },
          },
          {
            speaker: "you",
            textEn: "I understand. Thank you for being thorough — I appreciate the security.",
            textZh: "理解。感谢你这么仔细——我很感谢这种安全措施。",
            casualVersion: "Got it. Thanks for being so careful – I actually appreciate the security.",
            commonMistake: {
              wrong: "I understand it. Thank you for thorough.",
              correct: "I understand. Thank you for being thorough.",
              explanation: '"understand" 后不需加 "it"；"thorough" 是形容词，"for" 后跟动名词 "being thorough"。',
            },
            formalityVariants: {
              casual: "Got it. Thanks for being careful; I like the security.",
              standard:
                "I understand completely. Thank you for your thoroughness; I appreciate the emphasis on security.",
              formal:
                "I fully comprehend the necessity. My sincere thanks for your meticulous approach; I genuinely value the rigorous security measures.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Our security team member will meet you at your room in about 2 minutes. They'll open the door and then I'd suggest coming back down to get a fresh key card once you have your passport. That way we have proper verification on record.",
            textZh:
              "安保人员大约2分钟后在您房间门口等您。他们会开门，然后建议您拿到护照后下来重新办一张房卡。这样我们的记录里有正式的身份验证。",
            commonMistake: {
              wrong: "Our security staff will meet you... We recommend you to come back down...",
              correct: "Our security team member will meet you... We recommend you come back down...",
              explanation: "“安保人员”常用“security team member”。“recommend”后接动词原型，不加“to”。",
            },
            keyPhrases: [
              { en: "security team", zh: "安保团队" },
              { en: "fresh key card", zh: "新房卡" },
              { en: "proper verification", zh: "正式的身份验证" },
              { en: "on record", zh: "在记录里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Someone from security will be at your door in 2 minutes. Once you're in, just come down with your passport and I'll make you a new key.",
                textZh: "安保人员2分钟内到您门口。进去后拿上护照下来，我给您做张新卡。",
                actionHint: "等安保人员来开门",
                frequency: "common",
              },
              {
                textEn:
                  "I'm sending someone up now — they'll have you in your room in no time. Then swing by with your ID so I can issue a proper new key.",
                textZh: "我现在就派人上去——很快就能进房间了。然后带着证件过来，我给您办正式的新钥匙。",
                actionHint: "进房间后记得下来办新卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Security'll meet you at your room in like 2 mins. They'll open it, then I'd say come back down for a fresh key once you've got your passport. Just so we have good verification on file.",
            formalityVariants: {
              casual:
                "Security'll be at your room in a couple mins. They'll open it, then just come back down for a new key once you get your passport. Gotta have that on file.",
              standard:
                "Our security team member will meet you at your room in approximately two minutes. They will grant you access, and I would then suggest you return to the front desk for a new key card once you have retrieved your passport, ensuring proper verification is recorded.",
              formal:
                "A member of our esteemed security team will rendezvous with you at your room location within approximately two minutes. They will facilitate your entry, and thereafter, I would highly recommend that you return to the front desk to procure a replacement key card once your passport has been retrieved, thereby establishing comprehensive verification on record.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Will do. I'll come right back down with my passport. This won't happen again — I'll be more careful!",
            textZh: "好的。我拿到护照马上下来。不会再发生了——我会更小心的！",
            casualVersion:
              "Okay, will do. I'll head right back down with my passport. Totally won't happen again, promise I'll be more careful!",
            commonMistake: {
              wrong: "I will do. I'll come down.",
              correct: "Will do. I'll come down.",
              explanation: '"Will do" 是口语中表示同意并会照办的简洁说法。',
            },
            formalityVariants: {
              casual: "Got it. I'll be right back down with my passport. Won't happen again, I'll be way more careful!",
              standard:
                "Understood. I will return immediately with my passport. I assure you this will not recur; I will exercise greater caution.",
              formal:
                "Affirmative. I shall promptly return to the front desk upon retrieval of my passport. Please accept my assurance that this oversight will not be repeated; I shall endeavor to be considerably more vigilant.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "No worries at all! It really does happen to everyone. A good trick is to always tap your pocket for your key card before you let the door close.",
            textZh: "完全不用担心！真的每个人都会遇到。一个好方法是关门前先拍拍口袋确认房卡在身上。",
            commonMistake: {
              wrong: "It happens to everybody. A good method is to...",
              correct: "It really does happen to everyone. A good trick is to...",
              explanation: "“每个人都会发生”用“everyone”更自然；“好方法”可用“good trick”。",
            },
            keyPhrases: [{ en: "tap your pocket", zh: "拍拍口袋" }],
            culturalMeaning: '"It really does happen to everyone" 是安慰别人的常用说法，让人不觉得尴尬。',
            alternativeExpressions: [
              {
                textEn:
                  "Honestly, you wouldn't believe how often this happens. Little trick: do a quick pocket check before the door shuts!",
                textZh: "说实话，你不知道这种事有多常见。小技巧：门关之前快速摸一下口袋！",
                actionHint: "养成出门检查的习惯",
                frequency: "common",
              },
              {
                textEn:
                  "Don't even worry about it — I see this ten times a day. Just pat your pockets every time you walk out!",
                textZh: "完全别在意——我每天都遇到十几次。以后每次出门拍拍口袋就行！",
                actionHint: "记住这个小窍门",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Seriously, don't sweat it! Happens to everybody. A good trick is just to tap your pocket for your key before the door shuts.",
            formalityVariants: {
              casual:
                "Seriously, don't worry! Happens to everyone. Good trick: tap your pocket for your key before the door shuts.",
              standard:
                "Please don't worry at all! This is a very common occurrence for everyone. A helpful tip is to always pat your pocket for your key card before allowing the door to fully close.",
              formal:
                "There is absolutely no need for concern whatsoever. This particular situation is, in fact, quite universal. A prudent preventative measure I might suggest is to habitually check your person for your key card prior to permitting the door to fully latch.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 网络与技术支持 ====================
  {
    id: "hotel-21",
    category: "hotel",
    titleZh: "网络与技术支持",
    titleEn: "Wi-Fi & Tech Support",
    description: "解决酒店Wi-Fi连接问题和使用电视、电子设备等技术问题",
    otherRole: "前台/技术支持",
    otherRoleIcon: "wifi",
    flows: [
      // --- Flow 1: Wi-Fi连不上 ---
      {
        id: "wifi-issues",
        titleZh: "Wi-Fi连接问题",
        titleEn: "Wi-Fi Connection Problems",
        description: "酒店Wi-Fi连不上或很慢",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm having trouble connecting to the Wi-Fi. I can see the network but it won't let me log in.",
            textZh: "你好，我连不上Wi-Fi。能看到网络但登录不了。",
            culturalNote: "美国办理服务时通常直接说问题，而不会像中文那样先用“你好，请问”来客套。",
            casualVersion: "Hey, my Wi-Fi's not connecting. See the network, but can't log in.",
            commonMistake: {
              wrong: "I have a problem to connect to the Wi-Fi.",
              correct: "I'm having trouble connecting to the Wi-Fi.",
              explanation: "“have problem to do sth”是中式英语，应说“have problem doing sth”。",
            },
            formalityVariants: {
              casual: "Hey, my Wi-Fi's messed up. See it but can't log in.",
              standard:
                "Hi, I'm having trouble connecting to the Wi-Fi. I can see the network but it won't let me log in.",
              formal:
                "Good evening/afternoon. I seem to be encountering some difficulty connecting to the wireless internet. While the network is visible, I am unable to complete the login process.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              'I\'m sorry about that. Let me walk you through it. First, connect to the network called "HotelGuest." Then open your browser — a login page should pop up automatically. Enter your room number and last name to log in.',
            textZh:
              '很抱歉。我帮您操作一下。首先连接名为"HotelGuest"的网络。然后打开浏览器——登录页面应该会自动弹出。输入房间号和姓来登录。',
            commonMistake: {
              wrong: "I'll help you operate it.",
              correct: "I'll help you with that.",
              explanation: "“operate”通常指操作机器，这里指协助。用“help you with that”更自然。",
            },
            keyPhrases: [
              { en: "walk you through it", zh: "一步步指导你" },
              { en: "login page", zh: "登录页面" },
              { en: "pop up automatically", zh: "自动弹出" },
            ],
            vocabNotes: {
              "walk you through it": {
                meaningInContext: "在这里表示一步一步带你操作，手把手指导",
                similarUsage: "类似用法：Let me walk you through the check-in process.（让我带你一步步走入住流程）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "No problem! Are you getting the captive portal? That's the page that asks for your room number. If not, try typing 1.1.1.1 in your browser.",
                textZh: "没问题！有没有弹出认证页面？就是要求输入房间号的那个。没有的话，在浏览器输入1.1.1.1试试。",
                actionHint: "按照指引操作连接Wi-Fi",
                frequency: "occasional",
              },
            ],
            casualVersion: "Oh, sorry about that. I'll walk you through it. First, connect to \\",
            formalityVariants: {
              casual: "My bad. I'll show ya. Connect to \\",
              standard: "I'm sorry about that. Let me walk you through it. First, connect to the network called \\",
              formal:
                "My apologies for the inconvenience. Allow me to assist you with the connection process. To begin, kindly connect to the network designated as \\",
            },
          },
          {
            speaker: "you",
            textEn: "The login page isn't showing up. I just get a \"can't connect\" error.",
            textZh: '登录页面没弹出来。只显示"无法连接"的错误。',
            casualVersion: "Login page isn't popping up. Just getting a \\",
            commonMistake: {
              wrong: "The login page doesn't show.",
              correct: "The login page isn't showing up.",
              explanation: "描述页面出现通常用“show up”或“appear”，“doesn't show”不自然。",
            },
            formalityVariants: {
              casual: "No login page. Just seeing a \\",
              standard: "The login page isn't showing up. I just get a \\",
              formal: "The expected login page is not appearing. Instead, I am merely receiving a \\",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              'Try this: forget the network on your device, then reconnect. If the login page still doesn\'t appear, open your browser and type in "wifi.hotel.com" — that should force the login page to load. Also, make sure your VPN is turned off, as that can interfere with the connection.',
            textZh:
              '试试这样：在设备上忘记网络，然后重新连接。如果登录页面还不出来，打开浏览器输入"wifi.hotel.com"——应该能强制加载登录页面。另外确保VPN关了，VPN可能会干扰连接。',
            commonMistake: {
              wrong: "Delete the network on your device.",
              correct: "Forget the network on your device.",
              explanation: "“forget network”是系统术语，不能直译为“delete”。",
            },
            keyPhrases: [
              { en: "forget the network", zh: "忘记网络" },
              { en: "force the login page", zh: "强制加载登录页面" },
              { en: "VPN", zh: "VPN/虚拟专用网络" },
              { en: "interfere with", zh: "干扰" },
            ],
            responseTip: "按步骤操作试试",
            alternativeExpressions: [
              {
                textEn:
                  "Okay, try forgetting the network and reconnecting. Still no luck? Type wifi.hotel.com in your browser. Oh, and turn off any VPN you might have running.",
                textZh: "好，试试忘记网络然后重连。还不行？在浏览器输入wifi.hotel.com。对了，把VPN关掉。",
                actionHint: "按步骤操作",
                frequency: "common",
              },
              {
                textEn:
                  "Classic fix: go to your Wi-Fi settings, forget the network, then join again. If the portal doesn't show, type in our URL manually. And check if VPN is on — that messes things up.",
                textZh:
                  "经典解决办法：去Wi-Fi设置，忘记网络，再重新加入。认证页面不出来就手动输入网址。还有看看VPN是不是开着——会影响连接。",
                actionHint: "逐步排查问题",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Try this: forget the network on your device, then reconnect. If the login page still doesn't pop up, open your browser and type in \\",
            formalityVariants: {
              casual:
                "Okay, try forgetting the network, then reconnect. If no login page, just open your browser and type \\",
              standard:
                "Try this: forget the network on your device, then reconnect. If the login page still doesn't appear, open your browser and type in \\",
              formal:
                "Please attempt the following procedure: Disconnect from the network on your device and then re-establish the connection. Should the login page persist in not appearing, kindly open your web browser and manually input \\",
            },
          },
          {
            speaker: "you",
            textEn:
              "That worked! I'm connected now. But the speed seems really slow. I need to join a video conference later.",
            textZh: "成功了！连上了。但速度好像很慢。我一会儿要开视频会议。",
            casualVersion: "It worked! I'm connected. But it's super slow. Gotta join a video conference later.",
            commonMistake: {
              wrong: "I have a video conference later.",
              correct: "I need to join a video conference later.",
              explanation: "“have a conference”可能听起来像你拥有一个会议，而“join a conference”指参加会议。",
            },
            formalityVariants: {
              casual: "Awesome, it's working! Connected. But man, it's slow. Got a video call later.",
              standard:
                "That worked! I'm connected now. But the speed seems really slow. I need to join a video conference later.",
              formal:
                "Excellent, the connection has been established. However, I am observing that the internet speed is considerably slow. I have a scheduled video conference to attend shortly.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The standard Wi-Fi is shared among all guests, so it can be slow during peak hours. We offer a premium Wi-Fi package for $15 per day that gives you a dedicated high-speed connection — it's much better for video calls and streaming.",
            textZh:
              "标准Wi-Fi是所有客人共享的，高峰时段可能会慢。我们提供每天15美元的高级Wi-Fi套餐，专用高速连接——视频通话和流媒体效果好很多。",
            commonMistake: {
              wrong: "during high-peak time.",
              correct: "during peak hours.",
              explanation: "“peak hours”是常用短语，不需加“high”。",
            },
            keyPhrases: [
              { en: "shared among all guests", zh: "所有客人共享" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "premium Wi-Fi", zh: "高级Wi-Fi" },
              { en: "dedicated high-speed connection", zh: "专用高速连接" },
              { en: "streaming", zh: "流媒体" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Basic Wi-Fi can get congested. For $15 a day, you get our business-grade connection — way faster. Great for Zoom calls.",
                textZh: "基础Wi-Fi可能会拥堵。每天15美元可以用我们的商务级网络——快很多。开Zoom很合适。",
                actionHint: "根据需要选择是否升级",
                frequency: "common",
              },
            ],
            casualVersion:
              "Standard Wi-Fi's shared, so it gets slow at busy times. We've got a premium package, 15 bucks a day, dedicated high-speed — way better for video calls and streaming.",
            formalityVariants: {
              casual:
                "Regular Wi-Fi's shared, so it lags when it's busy. We've got a premium, 15 bucks, faster — way better for video and streaming.",
              standard:
                "The standard Wi-Fi is shared among all guests, so it can be slow during peak hours. We offer a premium Wi-Fi package for $15 per day that gives you a dedicated high-speed connection — it's much better for video calls and streaming.",
              formal:
                "The complimentary standard Wi-Fi service is a shared resource among all hotel guests, and as such, performance may be attenuated during periods of high demand. We do provide an enhanced premium Wi-Fi package, available for $15 daily, which offers a dedicated high-speed connection, significantly more suitable for bandwidth-intensive applications such as video conferencing and media streaming.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the premium package. Can you add it to my room?",
            textZh: "我要高级套餐。能挂到房费上吗？",
            casualVersion: "Yeah, I'll take the premium. Can you just add it to my room bill?",
            culturalNote: "酒店里“挂到房费上”常用“charge to my room”或“add to my room”。",
            commonMistake: {
              wrong: "Can you add it to my room fee?",
              correct: "Can you add it to my room?",
              explanation: "“room fee”是中式英语，应说“add it to my room”或“charge it to my room”。",
            },
            formalityVariants: {
              casual: "Yep, I'll get the premium. Put it on my room, please.",
              standard: "I'll take the premium package. Can you add it to my room?",
              formal:
                "I would like to proceed with the premium package. Could you please charge this to my room account?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Done! I've activated the premium Wi-Fi for room 815. You'll need to disconnect and reconnect — this time select \"HotelPremium\" as your network. Use the same room number and last name to log in. The speed should be night and day compared to the basic network.",
            textZh:
              '好了！已经为815房激活高级Wi-Fi。您需要断开重新连接——这次选"HotelPremium"网络。用同样的房间号和姓登录。速度跟基础网络比会天差地别。',
            commonMistake: {
              wrong: "I have opened the premium Wi-Fi for room 815.",
              correct: "I've activated the premium Wi-Fi for room 815.",
              explanation: "“activate”更专业，服务开通通常用“activate”而非“open”。",
            },
            keyPhrases: [
              { en: "activated", zh: "激活" },
              { en: "disconnect and reconnect", zh: "断开重新连接" },
              { en: "night and day", zh: "天差地别" },
            ],
            vocabNotes: {
              "night and day": {
                meaningInContext: "在这里表示两者差距非常大，就像白天和黑夜一样",
                similarUsage:
                  "类似用法：The difference between the two hotels was night and day.（两家酒店差距天壤之别）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "You're all set! Just switch to the 'HotelPremium' network and log in the same way. You'll notice a huge difference.",
                textZh: "搞定了！切换到'HotelPremium'网络用同样方式登录就行。您会发现速度完全不一样。",
                actionHint: "切换到新网络",
                frequency: "common",
              },
              {
                textEn:
                  "Premium Wi-Fi is live for your room. Disconnect, then look for 'HotelPremium' — same login. It's way faster, trust me.",
                textZh: "高级Wi-Fi已经给您房间开通了。断开连接，找'HotelPremium'——同样登录方式。快很多，相信我。",
                actionHint: "断开当前网络重新连接",
                frequency: "common",
              },
            ],
            casualVersion: "Done! Activated the premium Wi-Fi for 815. Just disconnect and reconnect — select \\",
            formalityVariants: {
              casual: "Got it! Premium Wi-Fi's on for 815. Just disconnect, reconnect, pick \\",
              standard:
                "Done! I've activated the premium Wi-Fi for room 815. You'll need to disconnect and reconnect — this time select \\",
              formal:
                "The premium Wi-Fi service for room 815 has now been activated. You will need to disconnect and then re-establish your connection, specifically selecting the \\",
            },
          },
          {
            speaker: "you",
            textEn: "Much faster now. Thank you for the help!",
            textZh: "现在快多了。谢谢帮忙！",
            casualVersion: "Way faster now. Thanks for the help!",
            commonMistake: {
              wrong: "Thanks for help!",
              correct: "Thank you for the help!",
              explanation: "“help”作为不可数名词，前面常加“the”或“your”。",
            },
            formalityVariants: {
              casual: "Oh, way faster! Thanks!",
              standard: "Much faster now. Thank you for the help!",
              formal: "The connection speed has significantly improved. I appreciate your assistance with this matter.",
            },
          },
        ],
      },

      // --- Flow 2: 电视和设备问题 ---
      {
        id: "tv-tech",
        titleZh: "电视与设备问题",
        titleEn: "TV & Device Issues",
        description: "酒店电视不会用或需要连接自己的设备",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I can't figure out how to use the TV. I want to watch Netflix on my own account. Is that possible?",
            textZh: "我搞不懂怎么用电视。我想用自己的账号看Netflix。可以吗？",
            casualVersion: "Can't figure out this TV. Wanna watch Netflix on my account. Is that possible?",
            commonMistake: {
              wrong: "I want to watch Netflix on my own account.",
              correct: "I'd like to watch Netflix on my own account.",
              explanation: "I want 听起来比较直接生硬，I'd like to 更礼貌委婉。",
            },
            formalityVariants: {
              casual: "Can't figure out this TV. Wanna watch Netflix on my account. Possible?",
              standard:
                "I can't figure out how to use the TV. I'd like to watch Netflix on my own account. Is that possible?",
              formal:
                "Excuse me, I'm having a bit of difficulty operating the television. I was hoping to access Netflix using my personal account. Would that be an option?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, absolutely! Our smart TVs support Netflix, YouTube, and other streaming apps. Press the Home button on the remote, then select the Netflix app. You can log in with your personal account. Just remember to log out before you check out!",
            textZh:
              "当然可以！我们的智能电视支持Netflix、YouTube和其他流媒体应用。按遥控器上的Home键，然后选Netflix应用。用您的个人账号登录就行。只是退房前记得退出登录！",
            commonMistake: {
              wrong: "Remember to exit your account before you check out.",
              correct: "Remember to log out before you check out!",
              explanation: "“log out”是更地道的说法，而不是“exit account”。",
            },
            culturalNote: "记得退房前登出个人账户，保护隐私",
            keyPhrases: [
              { en: "smart TV", zh: "智能电视" },
              { en: "streaming apps", zh: "流媒体应用" },
              { en: "Home button", zh: "Home键/主页键" },
              { en: "log out", zh: "退出登录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Hit the Home button on the remote and you'll see Netflix right there. Sign in with your account. Don't forget to sign out when you leave!",
                textZh: "可以！按遥控器Home键就能看到Netflix。用你的账号登录。走的时候别忘了退出！",
                actionHint: "找遥控器按Home键",
                frequency: "common",
              },
            ],
            responseTip: "退房前记得退出所有个人账号",
            casualVersion:
              "Yeah, for sure! Our smart TVs got Netflix, YouTube, other streaming apps. Just hit the Home button on the remote, then pick Netflix. Log in with your own account. Just remember to log out before you leave!",
            formalityVariants: {
              casual:
                "Totally! Our TVs have Netflix, YouTube, all that. Just hit Home, pick Netflix. Log in, but don't forget to log out before you leave!",
              standard:
                "Yes, absolutely! Our smart TVs support Netflix, YouTube, and other streaming apps. Press the Home button on the remote, then select the Netflix app. You can log in with your personal account. Just remember to log out before you check out!",
              formal:
                "Certainly, sir/madam. Our smart televisions are equipped to support Netflix, YouTube, and various other streaming applications. Please press the Home button on your remote control, and then navigate to and select the Netflix application. You are welcome to log in using your personal account credentials. We kindly request that you remember to log out prior to your departure.",
            },
          },
          {
            speaker: "you",
            textEn: "I found the remote, but there are so many buttons. Which one is the Home button?",
            textZh: "遥控器找到了，但按钮太多了。哪个是Home键？",
            commonMistake: {
              wrong: "Which one is Home button?",
              correct: "Which one is the Home button?",
              explanation: "中文没有冠词，常被省略，但在英文中 'the' 是必需的。",
            },
            casualVersion: "Got the remote, but too many buttons. Which one's 'Home'?",
            formalityVariants: {
              casual: "Found the remote, but wow, a lot of buttons. Home button?",
              standard: "I found the remote, but there are so many buttons. Which one is the Home button?",
              formal:
                "I've located the remote control, however, there appear to be a multitude of buttons. Could you please specify which one functions as the Home button?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "It's the button with a little house icon, usually in the center of the remote. If you're having trouble, I can also send someone up to help you set it up. Or you can use the Chromecast feature — cast from your phone to the TV by pressing the cast icon in any streaming app.",
            textZh:
              "是中间那个有小房子图标的按钮。如果还有困难，我可以派人上去帮您设置。您也可以用Chromecast功能——在任何流媒体应用里按投屏图标就能从手机投到电视上。",
            commonMistake: {
              wrong: "I can dispatch someone up to help you.",
              correct: "I can send someone up to help you.",
              explanation: "“dispatch”过于正式，用“send someone up”更自然。",
            },
            keyPhrases: [
              { en: "house icon", zh: "房子图标" },
              { en: "Chromecast", zh: "投屏功能" },
              { en: "cast from your phone", zh: "从手机投屏" },
              { en: "cast icon", zh: "投屏图标" },
            ],
            vocabNotes: {
              cast: {
                meaningInContext: "在这里表示将手机或平板上的内容无线投放到电视屏幕上",
                similarUsage:
                  "类似用法：I'll cast the presentation to the conference room TV.（我把演示文稿投到会议室电视上）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Look for the little house button right in the middle of the remote. Or if that's tricky, you can just cast from your phone — way easier.",
                textZh: "找遥控器正中间的小房子按钮。嫌麻烦的话直接从手机投屏——更简单。",
                actionHint: "试试两种方法",
                frequency: "common",
              },
              {
                textEn:
                  "It's the home button — has a little house on it. But honestly, Chromecast might be easier. Just tap the cast icon in Netflix on your phone.",
                textZh: "就是Home键——上面有个小房子。不过说实话，投屏可能更方便。在手机Netflix里点投屏图标就行。",
                actionHint: "选择更方便的方式操作",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's the one with a little house, usually in the middle. If you're still stuck, I can send someone up to help. Or, just use Chromecast — you can cast from your phone to the TV, just hit the cast icon in any app.",
            formalityVariants: {
              casual:
                "Little house icon, usually middle of the remote. Still stuck, I can send someone up. Or, just use Chromecast — cast from your phone, hit the cast icon.",
              standard:
                "It's the button with a little house icon, usually in the center of the remote. If you're having trouble, I can also send someone up to help you set it up. Or you can use the Chromecast feature — cast from your phone to the TV by pressing the cast icon in any streaming app.",
              formal:
                "It is typically the button adorned with a small house icon, often centrally located on the remote control. Should you continue to experience difficulty, I can certainly arrange for a staff member to assist you with the setup. Alternatively, you may utilize the Chromecast feature, which allows you to cast content directly from your mobile device to the television by selecting the cast icon within any streaming application.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, Chromecast would be easier. How do I connect to it?",
            textZh: "投屏更方便。怎么连？",
            casualVersion: "Oh, Chromecast's way easier. How do I connect?",
            commonMistake: {
              wrong: "How to connect it?",
              correct: "How do I connect to it?",
              explanation: '英文疑问句通常需要助动词和主语，如 "do I"。',
            },
            formalityVariants: {
              casual: "Chromecast's easier. How do I connect?",
              standard: "Oh, Chromecast would be easier. How do I connect to it?",
              formal:
                "Ah, utilizing Chromecast sounds like a more straightforward option. Could you please provide instructions on how to connect to it?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              'Make sure your phone is connected to the hotel Wi-Fi. Then open the app you want to watch — like Netflix or YouTube — and tap the cast icon in the top right corner. Select "Room 815 TV" from the device list. It should connect in a few seconds.',
            textZh:
              '确保手机连着酒店Wi-Fi。然后打开要看的应用——比如Netflix或YouTube——点右上角的投屏图标。从设备列表选"Room 815 TV"。几秒钟就能连上。',
            commonMistake: {
              wrong: "click the cast icon",
              correct: "tap the cast icon",
              explanation: "在手机或触摸屏上操作，用“tap”更地道，而非“click”。",
            },
            keyPhrases: [
              { en: "device list", zh: "设备列表" },
              { en: "top right corner", zh: "右上角" },
              { en: "connect in a few seconds", zh: "几秒钟就能连上" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "First, make sure you're on the hotel Wi-Fi. Then just open Netflix, hit the cast button, and pick your room's TV. Super quick.",
                textZh: "首先确保连着酒店Wi-Fi。然后打开Netflix，点投屏按钮，选你房间的电视。很快就好。",
                actionHint: "按步骤操作投屏",
                frequency: "common",
              },
              {
                textEn:
                  "As long as your phone's on the same Wi-Fi, you just tap the little rectangle icon in the app and choose 'Room 815 TV.' Takes a couple seconds.",
                textZh: "只要手机连着同一个Wi-Fi，在应用里点小方块图标然后选'Room 815 TV'就行。几秒钟的事。",
                actionHint: "确保手机连接酒店Wi-Fi",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just make sure your phone's on the hotel Wi-Fi. Then open whatever app you wanna watch — like Netflix or YouTube — and tap the cast icon up in the top right. Select \\",
            formalityVariants: {
              casual:
                "Phone on hotel Wi-Fi. Open the app — Netflix, YouTube, whatever — tap the cast icon top right. Select \\",
              standard:
                "Make sure your phone is connected to the hotel Wi-Fi. Then open the app you want to watch — like Netflix or YouTube — and tap the cast icon in the top right corner. Select \\",
              formal:
                "Please ensure your mobile device is connected to the hotel's Wi-Fi network. Subsequently, launch your desired streaming application — such as Netflix or YouTube — and locate the cast icon, typically situated in the top right corner. From there, you will select \\",
            },
          },
          {
            speaker: "you",
            textEn:
              "It's working! One more thing — is there an HDMI port? I might want to connect my laptop for work tomorrow.",
            textZh: "成功了！再问一个——有HDMI接口吗？明天可能要连笔记本电脑办公。",
            casualVersion:
              "It's working! And hey, one more thing — got an HDMI port? Might wanna hook up my laptop for work tomorrow.",
            commonMistake: {
              wrong: "Have HDMI port?",
              correct: "Is there an HDMI port?",
              explanation: '"Have"不能直接用来询问“是否存在”，需用"Is there"或"Do you have"。',
            },
            formalityVariants: {
              casual: "It's working! Also, HDMI port? Might need to connect my laptop for work.",
              standard:
                "It's working! One more thing — is there an HDMI port? I might want to connect my laptop for work tomorrow.",
              formal:
                "Excellent, it's functioning correctly! I have one further inquiry: Is an HDMI port available on the television? I may need to connect my laptop for professional purposes tomorrow.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, there's an HDMI port on the side panel of the TV. If you don't have an HDMI cable, we can lend you one from the front desk — just call us and we'll send it up. Switch the TV input to HDMI using the Source button on the remote.",
            textZh:
              "有的，电视侧面板上有HDMI接口。如果您没有HDMI线，可以找前台借——打电话来我们送上去。用遥控器上的Source键把电视输入切换到HDMI。",
            commonMistake: {
              wrong: "Use the Source button to change the TV input to HDMI.",
              correct: "Use the Source button on the remote to switch the TV input to HDMI.",
              explanation: "在电视输入切换上，“switch”比“change”更常用。",
            },
            keyPhrases: [
              { en: "HDMI port", zh: "HDMI接口" },
              { en: "side panel", zh: "侧面板" },
              { en: "lend you one", zh: "借给您一根" },
              { en: "switch the input", zh: "切换输入源" },
              { en: "Source button", zh: "Source键/信号源键" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep! HDMI port is on the side of the TV. Need a cable? We've got loaners at the desk. Just hit the Source button to switch input.",
                textZh: "有！HDMI口在电视侧面。需要线吗？前台有借的。按Source键切换输入就行。",
                actionHint: "需要的话找前台借线",
                frequency: "common",
              },
              {
                textEn:
                  "There's one on the left side of the TV. If you don't have a cable, call us and we'll send one right up. Use the Source button to switch to HDMI.",
                textZh: "电视左侧有一个。没线的话打电话来，我们马上送上去。用Source键切到HDMI。",
                actionHint: "明天需要时打电话借线",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, there's one on the side of the TV. If you don't have an HDMI cable, we can lend you one from the front desk — just call and we'll send it up. Switch the TV input to HDMI with the 'Source' button on the remote.",
            formalityVariants: {
              casual:
                "Yeah, HDMI port's on the side. Need a cable? Call us, we'll send one up. Use the 'Source' button to switch to HDMI.",
              standard:
                "Yes, there's an HDMI port on the side panel of the TV. If you don't have an HDMI cable, we can lend you one from the front desk — just call us and we'll send it up. Switch the TV input to HDMI using the Source button on the remote.",
              formal:
                "Yes, there is indeed an HDMI port located on the side panel of the television. Should you require an HDMI cable, we would be pleased to lend you one from the front desk; simply contact us, and we will arrange for its delivery to your room. To utilize it, please switch the television input to HDMI using the 'Source' button on your remote control.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, that covers everything. Thank you for being so patient!",
            textZh: "太好了，都解决了。谢谢你这么耐心！",
            culturalNote: "在北美，表扬服务人员的耐心是一种很常见的礼貌表达。",
            commonMistake: {
              wrong: "Thank you for your patient!",
              correct: "Thank you for your patience!",
              explanation: "Patient是形容词，patience才是名词，表示耐心。",
            },
            casualVersion: "Awesome, that's everything. Thanks for being so patient!",
            formalityVariants: {
              casual: "Great, that's all. Thanks for your patience!",
              standard: "Perfect, that covers everything. Thank you for being so patient!",
              formal:
                "Excellent, that addresses all my inquiries. I sincerely appreciate your patience and thorough assistance!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 行李寄存 ====================
  {
    id: "hotel-22",
    category: "hotel",
    titleZh: "行李寄存",
    titleEn: "Luggage Storage",
    description: "入住前或退房后寄存行李，以及行李搬运服务",
    otherRole: "行李员/前台",
    otherRoleIcon: "luggage",
    flows: [
      // --- Flow 1: 退房后寄存行李 ---
      {
        id: "store-after-checkout",
        titleZh: "退房后寄存",
        titleEn: "Storage After Checkout",
        description: "退房后还想在城市逛逛，先把行李寄存在酒店",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm checking out now, but my flight isn't until 9 PM. Can I leave my luggage here for the day?",
            textZh: "我现在退房，但航班是晚上9点。能把行李寄存在这里一天吗？",
            casualVersion: "Checking out now, but my flight's not 'til 9 PM. Can I leave my bags here for the day?",
            culturalNote: "美国酒店退房后免费寄存行李是常见服务。",
            commonMistake: {
              wrong: "My flight is at 9 PM. Can I deposit my luggage here for the day?",
              correct: "My flight isn't until 9 PM. Can I leave my luggage here for the day?",
              explanation: "“at 9 PM”强调时间点，“isn't until 9 PM”强调还要等很久。deposit不用于行李，用leave更自然。",
            },
            formalityVariants: {
              casual: "Checking out, but my flight's not 'til 9 PM. Can I leave my bags here?",
              standard:
                "I'm checking out now, but my flight isn't until 9 PM. May I leave my luggage here for the day?",
              formal:
                "Good morning/afternoon, I am checking out at this time, however, my flight does not depart until 9 PM this evening. Would it be possible to store my luggage here for the remainder of the day?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Of course! We offer complimentary luggage storage for checked-out guests. You can pick it up anytime before midnight. How many pieces do you have?",
            textZh: "当然！我们为退房客人提供免费行李寄存。午夜前随时来取。您有几件行李？",
            keyPhrases: [
              { en: "luggage storage", zh: "行李寄存" },
              { en: "checked-out guests", zh: "已退房客人" },
              { en: "pick it up anytime", zh: "随时来取" },
              { en: "pieces", zh: "件（行李计量单位）" },
            ],
            vocabNotes: {
              pieces: {
                meaningInContext: '在这里用作行李的计量单位，"two pieces" 就是两件行李',
                similarUsage: "类似用法：How many pieces of luggage are you checking in?（你要托运几件行李？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure — we'll keep your bags in our luggage room. No charge. Just grab them whenever you're ready to head out.",
                textZh: "可以——我们把您的包放在行李间。免费的。准备走的时候来拿就行。",
                actionHint: "告诉对方行李数量",
                frequency: "common",
              },
            ],
            casualVersion:
              "Absolutely! Free luggage storage for checked-out guests. Pick it up anytime before midnight. How many bags you got?",
            formalityVariants: {
              casual:
                "Sure thing! Free luggage storage for guests who've checked out. Grab it anytime before midnight. How many bags?",
              standard:
                "Of course! We offer complimentary luggage storage for checked-out guests. You can pick it up anytime before midnight. How many pieces do you have?",
              formal:
                "Certainly, sir/madam. We are pleased to offer complimentary luggage storage for our valued guests who have already checked out. You are welcome to retrieve your items at your convenience, any time prior to midnight. May I inquire as to the number of pieces you wish to store?",
            },
          },
          {
            speaker: "you",
            textEn: "Two large suitcases and a backpack. Is the storage area secure?",
            textZh: "两个大行李箱和一个背包。存放区安全吗？",
            casualVersion: "Two big suitcases and a backpack. Is the storage area safe?",
            commonMistake: {
              wrong: "Is the storage area safety?",
              correct: "Is the storage area secure?",
              explanation: "safety是名词，此处需要形容词secure或safe修饰。",
            },
            formalityVariants: {
              casual: "Two big bags and a backpack. Is it safe?",
              standard: "Two large suitcases and a backpack. Is the storage area secure?",
              formal:
                "I have two large suitcases and one backpack. May I inquire about the security measures in place for the storage area?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Absolutely. Our luggage room is locked and only staff have access. We'll give you a luggage claim tag — you'll need it to pick up your bags. Please don't leave any valuables like cash, jewelry, or electronics in your luggage, though. We recommend keeping those with you.",
            textZh:
              "绝对安全。行李间是锁着的，只有工作人员能进入。我们给您行李认领牌——取行李时需要。不过请不要在行李里留现金、珠宝或电子设备等贵重物品。建议随身携带。",
            keyPhrases: [
              { en: "luggage claim tag", zh: "行李认领牌" },
              { en: "valuables", zh: "贵重物品" },
              { en: "keep those with you", zh: "随身携带" },
            ],
            vocabNotes: {
              "claim tag": {
                meaningInContext: "在这里指用于取回行李的小标牌/凭证，上面有编号，类似机场的行李牌",
                similarUsage:
                  "类似用法：Hold on to your claim tag — you'll need it to pick up your luggage.（保管好认领牌——取行李要用）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Totally secure — it's a locked room, staff only. Here's your claim ticket. Just keep your valuables on you, like wallet and electronics.",
                textZh: "非常安全——锁着的房间，只有员工能进。给您取件票。贵重物品随身带着就好，比如钱包和电子产品。",
                actionHint: "拿好取件票，贵重物品随身带",
                frequency: "common",
              },
              {
                textEn:
                  "Very secure. We'll tag everything and give you a receipt to pick them up. Just a heads-up — take any cash or jewelry with you.",
                textZh: "非常安全。我们给所有行李贴标签并给您取件凭证。提醒一下——现金和首饰带在身上。",
                actionHint: "保管好凭证",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, totally secure. Luggage room's locked, only staff can get in. We'll give you a tag you'll need to get 'em back. Just don't leave any valuables like cash, jewelry, or electronics in your bags. Better keep those on you.",
            formalityVariants: {
              casual:
                "Totally secure. Locked room, staff access only. Here's your tag, you'll need it. Just no valuables like cash or electronics in your bags. Keep those with you.",
              standard:
                "Absolutely. Our luggage room is locked and only staff have access. We'll provide you with a luggage claim tag, which you will need to present when retrieving your bags. However, we strongly advise against leaving any valuables such as cash, jewelry, or electronics in your luggage. We recommend keeping those items with you.",
              formal:
                "You may rest assured of its security. Our dedicated luggage room remains locked at all times, with access restricted solely to authorized staff members. We will issue you a unique luggage claim tag, which is essential for the retrieval of your belongings. Please be advised, however, that for your peace of mind, we highly recommend retaining possession of any valuables, including but not limited to cash, jewelry, or electronic devices, rather than leaving them in stored luggage.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. I'll keep my laptop and camera with me. What if I come back after midnight?",
            textZh: "明白。电脑和相机我随身带。如果午夜后才回来怎么办？",
            casualVersion: "Gotcha. I'll keep my laptop and camera. What if I'm back after midnight?",
            commonMistake: {
              wrong: "What if I come back after 12 o'clock in the night?",
              correct: "What if I come back after midnight?",
              explanation: "“midnight”是午夜的专用词，更简洁地道。",
            },
            formalityVariants: {
              casual: "Got it. I'll keep my laptop and camera. What if I'm back after midnight?",
              standard: "Understood. I will keep my laptop and camera with me. What if I return after midnight?",
              formal:
                "Thank you for the clarification. I will ensure my laptop and camera remain with me. Could you please advise on the procedure should I return for my luggage after midnight?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "The front desk is staffed 24 hours, so you can actually pick up your luggage at any time. I said midnight as a general guideline, but we won't turn you away. Just show your claim tag and ID to the night shift staff.",
            textZh:
              "前台24小时有人，所以其实随时都能取行李。我说午夜是一般建议，不会把您拒之门外。出示认领牌和证件给夜班工作人员就行。",
            keyPhrases: [
              { en: "staffed 24 hours", zh: "24小时有人值班" },
              { en: "night shift", zh: "夜班" },
              { en: "turn you away", zh: "拒之门外" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're here around the clock, so don't stress about timing. Come whenever — just bring your tag and ID.",
                textZh: "我们全天候都在，时间不用担心。什么时候来都行——带上认领牌和证件就好。",
                actionHint: "放心安排行程",
                frequency: "common",
              },
              {
                textEn:
                  "Honestly, come back whenever works for you. We won't close up on you. Just have your claim ticket handy.",
                textZh: "说实话，什么时候方便什么时候来。我们不会关门不让你取。带好取件票就行。",
                actionHint: "灵活安排取行李时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Front desk is 24/7, so you can grab your bags whenever. Midnight's just a guideline, we won't turn ya away. Just show your tag and ID to the night staff.",
            formalityVariants: {
              casual:
                "Front desk is 24/7, so you can pick up your bags anytime. Midnight's just a general idea, we won't turn you away. Show your tag and ID to the night staff.",
              standard:
                "The front desk is staffed 24 hours a day, so you can actually pick up your luggage at any time. I mentioned midnight as a general guideline, but we will not turn you away. Simply show your claim tag and identification to the night shift staff.",
              formal:
                "Please be aware that our front desk operates continuously, 24 hours a day, allowing you to retrieve your luggage at your convenience, irrespective of the time. My previous mention of midnight was merely a general guideline; rest assured, we are always available to assist you. Kindly present your luggage claim tag and a form of identification to the night shift staff upon your return.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's a relief. I'll probably be back around 7 PM to pick everything up and then head to the airport.",
            textZh: "那就放心了。我大概晚上7点回来取行李然后去机场。",
            casualVersion:
              "Good to hear. I'll probably be back around 7 PM to grab my stuff, then head to the airport.",
            commonMistake: {
              wrong: "I will pick up all my things.",
              correct: "I'll pick everything up.",
              explanation: "“all my things”听起来比较生硬，用“everything”或“my stuff”更自然。",
            },
            formalityVariants: {
              casual: "Good. I'll be back 'round 7 PM to grab my stuff, then off to the airport.",
              standard:
                "That's a relief. I'll probably be back around 7 PM to pick everything up and then head to the airport.",
              formal:
                "That is reassuring. I anticipate returning around 7 PM to retrieve my belongings, after which I will proceed to the airport.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Sounds like a plan. Would you like us to arrange a taxi to the airport for around 7:15? That way the car will be waiting when you get your bags.",
            textZh: "好的。要不要帮您安排7:15左右去机场的出租车？这样您取完行李车就在等了。",
            keyPhrases: [
              { en: "sounds like a plan", zh: "好主意/就这么办" },
              { en: "arrange a taxi", zh: "安排出租车" },
            ],
            literalMeaning: '"Sounds like a plan" 字面意思是「听起来像个计划」，实际表示「好主意、就这么办吧」。',
            alternativeExpressions: [
              {
                textEn:
                  "Perfect. Want us to book you a cab to the airport at 7:15? It'll be ready and waiting when you pick up your stuff.",
                textZh: "好的。要不要帮您订7:15去机场的出租车？取行李的时候车就等着了。",
                actionHint: "决定是否需要出租车",
                frequency: "common",
              },
              {
                textEn:
                  "Great plan! How about I line up a taxi for 7:15? That way you can grab your bags and head straight out.",
                textZh: "好主意！我帮您安排7:15的出租车怎么样？这样您拿了行李就能直接出发。",
                actionHint: "同意安排出租车",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sounds good. Want us to book a taxi to the airport for around 7:15? That way, the car'll be waiting when you get your bags.",
            formalityVariants: {
              casual:
                "Sounds good. Want us to book a taxi to the airport for around 7:15? Car'll be waiting when you grab your bags.",
              standard:
                "Sounds like a plan. Would you like us to arrange a taxi to the airport for around 7:15? That way the car will be waiting when you retrieve your bags.",
              formal:
                "That sounds like an excellent plan. Would you be amenable to us arranging a taxi service to the airport for approximately 7:15 PM? This would ensure the vehicle is readily available upon your collection of your luggage.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Yes, please book a taxi for 7:15. You've been so helpful!",
            textZh: "太好了。帮我订7:15的出租车。你帮了大忙！",
            casualVersion: "Perfect! Yeah, book the taxi for 7:15. You've been super helpful!",
            commonMistake: {
              wrong: "You are so helpful!",
              correct: "You've been so helpful!",
              explanation: "“You've been”强调从过去到现在一直提供的帮助，比“You are”更自然。",
            },
            formalityVariants: {
              casual: "Awesome! Yeah, book the taxi for 7:15. You've been a lifesaver!",
              standard: "That would be perfect. Yes, please book a taxi for 7:15. You've been so helpful!",
              formal:
                "That would be absolutely splendid. Yes, kindly proceed with booking a taxi for 7:15 PM. I truly appreciate your exceptional assistance!",
            },
          },
        ],
      },

      // --- Flow 2: 提前到达寄存行李 ---
      {
        id: "early-arrival-storage",
        titleZh: "提前到达寄存",
        titleEn: "Early Arrival Luggage Storage",
        description: "比入住时间早到酒店，需要先寄存行李",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, we just arrived but I know check-in isn't until 3 PM. Can we leave our bags here and come back later?",
            textZh: "你好，我们到了但我知道下午3点才能入住。能先把行李放这里晚点再来吗？",
            casualVersion:
              "Hey, we just got here but I know check-in's not 'til 3. Can we just leave our bags here and grab 'em later?",
            commonMistake: {
              wrong: "I know check-in time isn't until 3 PM.",
              correct: "I know check-in isn't until 3 PM.",
              explanation: "“check-in”本身就可以指办理入住的时间或过程。",
            },
            formalityVariants: {
              casual: "Hey, we just got here, I know check-in's not 'til 3. Can we leave our bags and come back?",
              standard:
                "Hi, we've just arrived, but I understand check-in isn't until 3 PM. Would it be possible to leave our luggage here and pick it up later?",
              formal:
                "Good morning/afternoon, we've just arrived at the hotel. I'm aware that the official check-in time is 3 PM. Would it be permissible to temporarily store our luggage with you until we return later?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Welcome! Yes, absolutely — you can store your luggage with us while you explore the city. Let me also check if your room is ready early. Sometimes rooms open up before 3 PM.",
            textZh:
              "欢迎！完全可以——您可以把行李放我们这里然后去逛城市。我也帮您看看房间有没有提前准备好。有时3点前就有空房了。",
            keyPhrases: [
              { en: "store your luggage", zh: "寄存行李" },
              { en: "explore the city", zh: "逛城市" },
              { en: "open up", zh: "空出来" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! We'll tag your bags and keep them safe. Let me see if I can get you in early...",
                textZh: "没问题！我们给行李贴标签保管好。我看看能不能让您提前入住……",
                actionHint: "等前台查系统看有没有提前入住的可能",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! Yeah, totally — you can totally leave your bags here while you go explore. I'll also check if your room's ready early. Sometimes they are before 3.",
            formalityVariants: {
              casual:
                "Welcome! Yeah, totally, leave your bags here while you explore. I'll check if your room's ready early too, sometimes they are.",
              standard:
                "Welcome! Yes, absolutely — you can store your luggage with us while you explore the city. Let me also check if your room is ready early. Sometimes rooms open up before 3 PM.",
              formal:
                "Welcome to our establishment! We would be delighted to assist you with storing your luggage while you enjoy the city. Furthermore, I will promptly inquire if your assigned room is available for an early check-in, as occasionally rooms are prepared prior to the standard 3 PM time.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be amazing. We took a red-eye flight and we're pretty exhausted.",
            textZh: "那太好了。我们坐了红眼航班，挺累的。",
            culturalNote: '"red-eye flight" 指深夜起飞、凌晨到达的航班，因为乘客到达时通常眼睛发红（睡眠不足）而得名。',
            casualVersion: "Oh, that'd be awesome. We took a red-eye, so we're super tired.",
            commonMistake: {
              wrong: "We took red-eye flight and we are very tired.",
              correct: "We took a red-eye flight and we're pretty exhausted.",
              explanation: "“red-eye flight”是习惯用语，表示夜间航班。 “pretty”是常见的口语副词。",
            },
            formalityVariants: {
              casual: "Oh, that'd be great. We flew a red-eye, so we're super tired.",
              standard: "That would be amazing. We took a red-eye flight and we're pretty exhausted.",
              formal:
                "That would be truly wonderful. We have just completed an overnight red-eye flight and are rather fatigued.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Good news — your room is actually ready! I can check you in right now. It's a bit early, but since the room was cleaned this morning, there's no need to wait. No extra charge for early check-in.",
            textZh:
              "好消息——您的房间其实已经准备好了！我现在就能办入住。虽然早了一点，但房间今早已经打扫过了，不用等。提前入住不额外收费。",
            keyPhrases: [
              { en: "early check-in", zh: "提前入住" },
              { en: "no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're in luck — the room's all set! Let me check you in now. No extra fee or anything.",
                textZh: "运气不错——房间已经好了！我现在就帮您入住。没有额外费用。",
                actionHint: "办理入住手续",
                frequency: "common",
              },
              {
                textEn:
                  "Great news! Your room got cleaned early, so I can get you in right away. No charge for the early check-in.",
                textZh: "好消息！您的房间提前打扫好了，可以马上入住。提前入住不加钱。",
                actionHint: "递上证件办理入住",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good news — your room's actually ready! I can check you in right now. It's a bit early, but since it was cleaned this morning, no need to wait. No extra charge for early check-in.",
            formalityVariants: {
              casual:
                "Good news! Your room's actually ready. I can check you in now. It's early, but it was cleaned this morning, so no need to wait. No charge for early check-in.",
              standard:
                "Good news — your room is actually ready! I can check you in right now. It's a bit early, but since the room was cleaned this morning, there's no need to wait. No extra charge for early check-in.",
              formal:
                "Excellent news! Your room is indeed available. I can proceed with your check-in immediately. While it is somewhat ahead of schedule, the room was serviced this morning, thus rendering any further waiting unnecessary. There will be no additional charge for this early check-in.",
            },
          },
          {
            speaker: "you",
            textEn: "Really? That's wonderful! We're so grateful. Can someone help us with the bags?",
            textZh: "真的吗？太棒了！太感谢了。能帮我们搬行李吗？",
            casualVersion: "Seriously? That's awesome! We really appreciate it. Can someone help us with our bags?",
            commonMistake: {
              wrong: "Can someone help us carry the bags?",
              correct: "Can someone help us with the bags?",
              explanation: "“help with something” 是更自然的表达，指帮忙处理某物。",
            },
            formalityVariants: {
              casual: "Really? That's awesome! Thanks so much. Can someone help us with the bags?",
              standard: "Really? That's wonderful! We're so grateful. Can someone help us with the bags?",
              formal:
                "Is that so? That is truly splendid! We are extremely appreciative. Would it be possible to request assistance with our luggage?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! I'll call a bellman right away. How many bags do you have?",
            textZh: "当然！我马上叫行李员。您有几件行李？",
            alternativeExpressions: [
              {
                textEn: "Absolutely! Let me get someone to help. How much luggage are we looking at?",
                textZh: "当然！我找人来帮忙。一共多少件行李？",
                actionHint: "告诉对方行李数量",
                frequency: "common",
              },
              {
                textEn: "Sure! I'll have a bellman over in a sec. How many pieces?",
                textZh: "好的！行李员马上就来。几件？",
                actionHint: "说明行李件数",
                frequency: "common",
              },
            ],
            casualVersion: "Totally! I'll call a bellman right away. How many bags ya got?",
            formalityVariants: {
              casual: "Sure thing! I'll call a bellman now. How many bags?",
              standard: "Of course! I'll call a bellman right away. How many bags do you have?",
              formal:
                "Certainly! I shall summon a bellman immediately. May I inquire as to the number of luggage pieces you have?",
            },
          },
          {
            speaker: "you",
            textEn: "Two big suitcases, two carry-ons, and a stroller. It's a lot, sorry!",
            textZh: "两个大行李箱、两个登机箱和一辆婴儿车。东西有点多，不好意思！",
            casualVersion: "Two big suitcases, two carry-ons, and a stroller. Yeah, it's a lot, sorry 'bout that!",
            commonMistake: {
              wrong: "Two big suitcase, two carry-on, and stroller. It's a lot, sorry!",
              correct: "Two big suitcases, two carry-ons, and a stroller. It's a lot, sorry!",
              explanation: "多个名词需要复数形式，单数可数名词前需要冠词。",
            },
            formalityVariants: {
              casual: "Two big suitcases, two carry-ons, plus a stroller. Yeah, it's a lot, sorry!",
              standard: "Two big suitcases, two carry-ons, and a stroller. It's a lot, sorry!",
              formal:
                "We have two large suitcases, two carry-on bags, and a stroller. I apologize for the considerable quantity.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "No need to apologize — that's what we're here for! Our bellman will bring a luggage cart. He'll take everything up to your room on the 8th floor. Just follow him to the elevator. Also, we have a baby crib available if you need one for the little one.",
            textZh:
              "不用道歉——这就是我们的工作！行李员会推行李车来。他会把所有东西送到您8楼的房间。跟他走去电梯就行。另外如果宝宝需要，我们有婴儿床可以用。",
            keyPhrases: [
              { en: "luggage cart", zh: "行李车" },
              { en: "carry-on", zh: "登机箱/随身行李" },
              { en: "stroller", zh: "婴儿车" },
              { en: "baby crib", zh: "婴儿床" },
            ],
            vocabNotes: {
              stroller: {
                meaningInContext: "在这里指可折叠的婴儿推车",
                similarUsage:
                  "类似用法：You can bring your stroller right up to the gate at the airport.（在机场你可以把婴儿车推到登机口）",
              },
            },
            localVariants: {
              "en-US": "stroller",
              "en-GB": "pushchair / buggy",
              "en-AU": "pram",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't be sorry! That's totally normal. We'll get a cart and have it all upstairs in no time. Oh, and we've got cribs if your little one needs one.",
                textZh: "别不好意思！这很正常。我们推车来，一会儿就全搬上去。对了，如果宝宝需要，我们有婴儿床。",
                actionHint: "可以顺便要婴儿床",
                frequency: "common",
              },
              {
                textEn:
                  "No worries at all — we handle big loads every day! The bellman will take care of everything. Need a crib for the baby too?",
                textZh: "完全没关系——我们每天都搬很多！行李员会全搞定。宝宝需要婴儿床吗？",
                actionHint: "告诉对方是否需要婴儿床",
                frequency: "common",
              },
            ],
            casualVersion:
              "No need to apologize — that's what we do! Our bellman'll bring a luggage cart. He'll take everything up to your room on the 8th. Just follow him to the elevator. Oh, and we have a baby crib if you need one for the little one.",
            commonMistake: {
              wrong: "No need to apologize - this is our job!",
              correct: "No need to apologize — that's what we're here for!",
              explanation: "“that's what we're here for” 更自然地表达“这是我们应该做的”。",
            },
            formalityVariants: {
              casual:
                "No apologies needed — that's our job! Bellman'll get a cart and take everything up to your room on 8. Just follow him. Oh, and we have a baby crib if you need it.",
              standard:
                "No need to apologize — that's what we're here for! Our bellman will bring a luggage cart. He'll take everything up to your room on the 8th floor. Just follow him to the elevator. Also, we have a baby crib available if you need one for the little one.",
              formal:
                "Please do not apologize; assisting our guests is precisely our function. Our bellman will arrive with a luggage cart and transport all items to your room on the eighth floor. Kindly follow him to the elevator. Additionally, a baby crib is available should you require one for your child.",
            },
          },
          {
            speaker: "you",
            textEn: "A crib would be great, thank you! You've made our arrival so smooth.",
            textZh: "婴儿床太好了，谢谢！你们让我们的到达过程很顺利。",
            casualVersion: "A crib'd be great, thanks! You guys made our arrival super smooth.",
            commonMistake: {
              wrong: "You make our arrival very smooth.",
              correct: "You've made our arrival so smooth.",
              explanation: "需要完成时态 “you've made”；“so smooth” 比 “very smooth” 更口语化。",
            },
            formalityVariants: {
              casual: "A crib'd be awesome, thanks! You guys made our arrival super smooth.",
              standard: "A crib would be great, thank you! You've made our arrival so smooth.",
              formal:
                "A baby crib would be most appreciated, thank you very much. You have indeed made our arrival exceptionally seamless.",
            },
          },
        ],
      },

      // --- Flow 3: 行李搬运和小费 ---
      {
        id: "bellman-tips",
        titleZh: "行李搬运与小费",
        titleEn: "Bellman Service & Tipping",
        description: "行李员搬运行李和给小费的礼仪",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "行李员",
            textEn: "Good afternoon! I'm here to help with your luggage. Which bags are yours?",
            textZh: "下午好！我来帮您搬行李。哪些是您的包？",
            alternativeExpressions: [
              {
                textEn: "Hi there! Let me get those bags for you. How many do you have?",
                textZh: "你好！我来帮你拿包。一共几件？",
                actionHint: "指出你的行李",
                frequency: "common",
              },
            ],
            casualVersion: "Hey there! Need help with your bags? Which ones are yours?",
            formalityVariants: {
              casual: "Hey! Need help with your bags? Which ones?",
              standard: "Good afternoon! I'm here to help with your luggage. Which bags are yours?",
              formal:
                "Good afternoon, sir/ma'am. I'm the bellman; I'd be pleased to assist you with your luggage. Could you please indicate which bags are yours?",
            },
          },
          {
            speaker: "you",
            textEn:
              "These three — the two big suitcases and this small one. Be careful with the small one, it has fragile items inside.",
            textZh: "这三件——两个大箱子和这个小的。小的请小心，里面有易碎物品。",
            casualVersion:
              "These three – the two big ones and this little one. Be careful with the small one, it's got fragile stuff.",
            commonMistake: {
              wrong: "Be careful the small one",
              correct: "Be careful with the small one",
              explanation: "中文里“小心”后面常直接跟名词，但英文里“be careful”后通常需要加“with”来指明小心对待的事物。",
            },
            formalityVariants: {
              casual: "These three—the two big, this small. Small one's fragile, be careful.",
              standard:
                "These three — the two big suitcases and this small one. Be careful with the small one, it has fragile items inside.",
              formal:
                "Certainly, these three pieces comprise my luggage: the two larger cases and this smaller one. I would appreciate particular care with the smaller bag, as it contains delicate items.",
            },
          },
          {
            speaker: "them",
            role: "行李员",
            textEn:
              "I'll be very careful with it. I'll put it on top of the cart so nothing presses against it. Your room is 815, right? Follow me to the elevator.",
            textZh: "我会很小心的。我放在行李车上面，这样不会被压到。您是815房对吗？跟我走去电梯。",
            keyPhrases: [
              { en: "on top of the cart", zh: "放在行李车上面" },
              { en: "presses against it", zh: "压到它" },
              { en: "fragile items", zh: "易碎物品" },
            ],
            alternativeExpressions: [
              {
                textEn: "No worries, I'll keep that one on top so nothing squishes it. Room 815? Right this way.",
                textZh: "放心，这个我放最上面不会被压。815房？这边走。",
                actionHint: "跟着行李员走",
                frequency: "common",
              },
              {
                textEn: "Absolutely, I'll be extra gentle with that one. Follow me — elevator's just over here.",
                textZh: "当然，那个我会特别轻拿。跟我来——电梯就在那边。",
                actionHint: "跟行李员去电梯",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got it. I'll put it on top so nothing squishes it. Room 815, right? Let's head to the elevator.",
            formalityVariants: {
              casual: "No worries, I'll put it on top. Room 815, right? This way to the elevator.",
              standard:
                "I'll be very careful with it. I'll put it on top of the cart so nothing presses against it. Your room is 815, right? Follow me to the elevator.",
              formal:
                "Rest assured, I shall handle it with the utmost care, placing it securely atop the cart to prevent any pressure. Your room number is indeed 815, correct? Please follow me, and I will escort you to the elevator.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you. Is there anything I should know about the room? Any tips for making the most of our stay?",
            textZh: "谢谢。关于房间有什么需要知道的吗？有什么建议让我们住得更好？",
            casualVersion: "Thanks. Anything I should know 'bout the room? Any tips to make our stay great?",
            commonMistake: {
              wrong: "What should I know about the room?",
              correct: "Is there anything I should know about the room?",
              explanation:
                "直接问句“What should I know...”听起来可能有点生硬。用 “Is there anything...” 这种疑问句更委婉自然。",
            },
            formalityVariants: {
              casual: "Thanks. Anything special 'bout the room? Any tips?",
              standard:
                "Thank you. Is there anything I should know about the room? Any tips for making the most of our stay?",
              formal:
                "Thank you. Might there be any pertinent information regarding the room that I should be aware of? Perhaps you have some recommendations for optimizing our experience during our stay?",
            },
          },
          {
            speaker: "them",
            role: "行李员",
            textEn:
              "Here we are — room 815. Let me show you around quickly. The thermostat is here by the door. The safe is in the closet — you set your own code. The minibar has free water bottles. And my personal tip — the rooftop bar has the best sunset view in the city. It's open from 5 to midnight.",
            textZh:
              "到了——815房。我快速带您看看。温控器在门边。保险箱在衣柜里——自己设密码。迷你吧里的瓶装水是免费的。我个人建议——楼顶酒吧有全城最好的日落景观。营业时间下午5点到午夜。",
            keyPhrases: [
              { en: "thermostat", zh: "温控器" },
              { en: "safe", zh: "保险箱" },
              { en: "set your own code", zh: "自己设密码" },
              { en: "minibar", zh: "迷你吧" },
              { en: "rooftop bar", zh: "楼顶酒吧" },
            ],
            vocabNotes: {
              thermostat: {
                meaningInContext: "在这里指酒店房间墙上控制室内温度（空调/暖气）的面板",
                similarUsage:
                  "类似用法：Can you turn the thermostat down? It's too warm.（能把温控调低一点吗？太热了）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here's your room! Quick tour — AC controls by the door, safe in the closet, free water in the minibar. And check out the rooftop bar for sunset — it's amazing.",
                textZh:
                  "您的房间到了！快速介绍——空调在门边，保险箱在衣柜里，迷你吧里水免费。还有楼顶酒吧看日落——特别棒。",
                actionHint: "记住房间设施位置",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome to 815! Thermostat's right here, safe's in the wardrobe. Oh and a heads-up — the rooftop bar has killer sunset views. Opens at 5.",
                textZh: "欢迎来到815！温控在这里，保险箱在衣柜里。对了提醒一下——楼顶酒吧日落景观超棒。5点开门。",
                actionHint: "记住行李员的推荐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here we are—815. Quick tour. Thermostat's here. Safe's in the closet—you set the code. Free water in the minibar. And my tip—rooftop bar's got the best sunset view. Open 5 to midnight.",
            formalityVariants: {
              casual:
                "Here we are—815. Quick run-through. Thermostat, safe in closet (you set the code), free water in mini-bar. My tip: rooftop bar has best sunset view, 5 to midnight.",
              standard:
                "Here we are — room 815. Let me show you around quickly. The thermostat is here by the door. The safe is in the closet — you set your own code. The minibar has free water bottles. And my personal tip — the rooftop bar has the best sunset view in the city. It's open from 5 to midnight.",
              formal:
                "We have arrived at your destination, room 815. Allow me to provide a brief orientation. The thermostat is conveniently located by the door. The in-room safe is situated within the closet, for which you may personally set the security code. Complimentary bottled water is provided in the minibar. Furthermore, my personal recommendation would be the rooftop bar, which offers the most spectacular sunset vista in the city, operational from 5 PM until midnight.",
            },
          },
          {
            speaker: "you",
            textEn: "That's great advice! Here, this is for you.",
            textZh: "好建议！给你，这是给你的。",
            commonMistake: {
              wrong: "This is for you.",
              correct: "Here, this is for you.",
              explanation: "直接说 'This is for you' 听起来像在给一个随便的东西。加上 'Here' 更自然，表示递东西。中国人习惯直接说‘给你的’，翻译成英文容易出此错。",
            },
            culturalNote:
              '在美国酒店，给行李员小费是普遍做法。一般每件行李$2-5，如果行李多或者行李员特别帮忙则给更多。递钱时说 "This is for you" 是最自然的方式。',
            casualVersion: "Awesome advice! Here, this is for you.",
            formalityVariants: {
              casual: "Awesome tip! Here you go.",
              standard: "That's great advice! Here, this is for you.",
              formal: "That is excellent counsel, thank you. Please accept this as a token of my appreciation.",
            },
          },
          {
            speaker: "them",
            role: "行李员",
            textEn:
              "Thank you so much, that's very generous! If you need anything during your stay — extra pillows, restaurant recommendations, directions — just call the front desk and ask for the bell team. We're here to make your stay perfect.",
            textZh:
              "非常感谢，太慷慨了！住宿期间有任何需要——额外枕头、餐厅推荐、问路——打前台电话找行李组就行。我们会让您住得完美。",
            keyPhrases: [
              { en: "that's very generous", zh: "太慷慨了" },
              { en: "bell team", zh: "行李组/礼宾组" },
              { en: "restaurant recommendations", zh: "餐厅推荐" },
            ],
            culturalMeaning:
              '行李员说 "That\'s very generous" 是收到小费后的标准感谢用语，不论金额多少，这是一种礼貌回应。',
            alternativeExpressions: [
              {
                textEn:
                  "Wow, thank you! That's really kind. Seriously, anything you need — just ring down to the front desk.",
                textZh: "哇，谢谢！太好了。真的，有任何需要——打电话到前台就行。",
                actionHint: "记住可以找行李组帮忙",
                frequency: "common",
              },
              {
                textEn: "I appreciate it! Don't hesitate to call us if you need anything at all. Enjoy your stay!",
                textZh: "太感谢了！有任何需要千万别客气。祝您住得愉快！",
                actionHint: "入住期间有事找前台行李组",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks a ton, super generous! Anything you need—more pillows, food recs, directions—just call the front desk for the bell team. We'll make your stay perfect.",
            formalityVariants: {
              casual:
                "Oh, thanks a bunch, you're too kind! Anything you need—pillows, food ideas, directions—just call the front desk, ask for bell team. We got you.",
              standard:
                "Thank you so much, that's very generous! If you need anything during your stay — extra pillows, restaurant recommendations, directions — just call the front desk and ask for the bell team. We're here to make your stay perfect.",
              formal:
                "Thank you kindly; your generosity is most appreciated. Should you require any assistance during your occupancy – be it additional pillows, dining suggestions, or navigational guidance – please do not hesitate to contact the front desk and request the bell team. We are at your disposal to ensure a truly impeccable stay.",
            },
          },
          {
            speaker: "you",
            textEn: "Will do. Thanks again!",
            textZh: "好的。再次感谢！",
            commonMistake: {
              wrong: "I will do.",
              correct: "Will do.",
              explanation: "美国口语中 'I will do.' 通常简化为 'Will do.'，更自然。",
            },
            casualVersion: "Will do. Thanks again!",
            formalityVariants: {
              casual: "Got it. Thanks!",
              standard: "Will do. Thanks again!",
              formal: "I certainly will. Thank you once more.",
            },
          },
        ],
      },
    ],
  },
];
