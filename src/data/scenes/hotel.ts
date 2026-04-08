import type { PresetScene } from "../scene-types";

// ============================================================
// 酒店场景 — Hotel Scenes
// 覆盖：入住、房间问题、客房服务、退房、投诉、礼宾服务、延住换房
// ============================================================

export const HOTEL_SCENES: PresetScene[] = [
  // ==================== 酒店入住 ====================
  {
    id: "hotel-checkin",
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
            culturalNote: "\"under the name\" 是酒店入住的标准说法。也可以说 \"under Wang\" 或 \"booked under Wang\"。",
            casualVersion: "Hey, checking in. Last name Wang.",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome, Mr. Wang! May I see your passport or ID, please?",
            textZh: "欢迎，王先生！请出示您的护照或身份证。",
            variations: [
              { textEn: "Good evening! Could I have your ID, please?", textZh: "晚上好！能看一下您的证件吗？" },
              { textEn: "Hello! I'll need to see a photo ID to check you in.", textZh: "你好！我需要看一下带照片的证件才能办理入住。" },
            ],
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "ID", zh: "身份证/证件" },
            ],
            responseTip: "这时你需要递上护照或身份证",
            alternativeExpressions: [
              { textEn: "Hi there! Can I get your passport or a photo ID?", textZh: "你好！能看一下护照或带照片的证件吗？", actionHint: "递上证件", frequency: "common" },
              { textEn: "Sure thing! I just need to see some ID real quick.", textZh: "好的！我快速看一下证件就行。", actionHint: "准备好证件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
            culturalNote: "递东西时说 \"Here you go\" 或 \"Here you are\" 都很自然。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you. I have a king room for two nights, checking out on March 15th. Is that correct?",
            textZh: "谢谢。您预订的是大床房，住两晚，3月15日退房。对吗？",
            variations: [
              { textEn: "I see a reservation for a double room, two nights. Does that look right?", textZh: "我看到您预订了双人间，两晚。对吗？" },
            ],
            keyPhrases: [
              { en: "king room", zh: "大床房" },
              { en: "checking out", zh: "退房" },
              { en: "two nights", zh: "两晚" },
            ],
            responseTip: "确认你的预订信息是否正确",
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Okay, so I've got you down for a king room, two nights, out on the 15th. Sound right?", textZh: "好的，您订的是大床房，两晚，15号退房。对吗？", actionHint: "核对信息", frequency: "common" },
              { textEn: "Let me confirm — king bed, checking out March 15th. Is that what you booked?", textZh: "我确认一下——大床，3月15号退房。是您订的吗？", actionHint: "确认预订", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's correct.",
            textZh: "对，没错。",
            casualVersion: "Yep, that's right.",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Would you like to add breakfast to your stay? It's $18 per person per day.",
            textZh: "您需要加早餐吗？每人每天18美元。",
            variations: [
              { textEn: "We offer a breakfast buffet for $18 per person. Would you like to add that?", textZh: "我们提供自助早餐，每人18美元。要加上吗？" },
            ],
            keyPhrases: [
              { en: "breakfast", zh: "早餐" },
              { en: "per person per day", zh: "每人每天" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Just so you know, we have a breakfast buffet — it's $18 per person if you're interested.", textZh: "跟您说一下，我们有自助早餐——如果有兴趣的话每人18美元。", actionHint: "决定是否加早餐", frequency: "common" },
              { textEn: "By the way, would you like to add breakfast? It runs $18 a head.", textZh: "对了，要不要加早餐？每人18美元。", actionHint: "考虑是否需要", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. For two people.",
            textZh: "好的，两个人都加。",
            casualVersion: "Sure, for both of us.",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Your room is 1208 on the 12th floor. Here are your key cards. The elevator is down the hall on your right.",
            textZh: "您的房间是12楼1208号。这是您的房卡。电梯在走廊右边。",
            keyPhrases: [
              { en: "key cards", zh: "房卡" },
              { en: "elevator", zh: "电梯" },
              { en: "down the hall", zh: "沿走廊走" },
              { en: "on your right", zh: "在您右边" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! Room 1208, twelfth floor. Elevators are just around the corner to your right.", textZh: "都办好了！1208房间，12楼。电梯在转角右边。", actionHint: "记住房间号和方向", frequency: "common" },
              { textEn: "Here are your keys — you're in 1208. Head down that way and the lifts are on the right.", textZh: "这是您的钥匙——1208房间。往那边走，电梯在右边。", actionHint: "拿好房卡", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. What time is breakfast?",
            textZh: "谢谢。早餐几点？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Breakfast is from 6:30 to 10 AM in the restaurant on the second floor. Checkout is at 11 AM. Is there anything else I can help you with?",
            textZh: "早餐在二楼餐厅，时间是早上6:30到10点。退房时间是上午11点。还有什么需要帮助的吗？",
            keyPhrases: [
              { en: "6:30 to 10", zh: "6:30到10点" },
              { en: "second floor", zh: "二楼" },
              { en: "checkout", zh: "退房" },
              { en: "11 AM", zh: "上午11点" },
            ],
            alternativeExpressions: [
              { textEn: "Breakfast runs from 6:30 to 10 — second floor restaurant. Oh, and checkout's at 11. Need anything else?", textZh: "早餐6:30到10点——二楼餐厅。对了，退房是11点。还需要什么吗？", actionHint: "记住时间信息", frequency: "common" },
              { textEn: "You can grab breakfast downstairs between 6:30 and 10. Just head to the restaurant on 2. Checkout is 11 AM.", textZh: "6:30到10点可以去楼下吃早餐，二楼餐厅。退房时间是上午11点。", actionHint: "记下早餐和退房时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the Wi-Fi password?",
            textZh: "Wi-Fi 密码是什么？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The Wi-Fi network is \"HotelGuest\" and the password is on this card. Enjoy your stay!",
            textZh: "Wi-Fi 名称是 \"HotelGuest\"，密码在这张卡上。祝您入住愉快！",
            keyPhrases: [
              { en: "Wi-Fi network", zh: "Wi-Fi网络名称" },
              { en: "password", zh: "密码" },
              { en: "enjoy your stay", zh: "祝您入住愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Wi-Fi is 'HotelGuest' — password's right here on this card. Have a great stay!", textZh: "Wi-Fi名字是'HotelGuest'——密码在这张卡上。祝您住得愉快！", actionHint: "收好Wi-Fi卡", frequency: "common" },
              { textEn: "Here you go — the network name and password are both on this little card. Enjoy!", textZh: "给您——网络名和密码都在这张小卡上。享受入住！", actionHint: "保管好卡片", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you very much!",
            textZh: "非常感谢！",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry, I can't find a reservation under that name. Do you have a confirmation number or email?",
            textZh: "抱歉，我查不到这个名字的预订。您有确认号或确认邮件吗？",
            variations: [
              { textEn: "Hmm, nothing is coming up under Wang. Could you spell your full name for me?", textZh: "嗯，王这个姓查不到。能拼一下您的全名吗？" },
              { textEn: "I don't see a reservation under that name. Which website did you book through?", textZh: "我没查到这个名字的预订。您是在哪个网站订的？" },
            ],
            keyPhrases: [
              { en: "can't find", zh: "找不到" },
              { en: "confirmation number", zh: "确认号" },
              { en: "confirmation email", zh: "确认邮件" },
            ],
            responseTip: "不要慌，检查你的预订确认邮件",
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Hmm, I'm not seeing anything under that name. Got a booking confirmation or reference number?", textZh: "嗯，这个名字查不到。有预订确认或参考号吗？", actionHint: "找出确认邮件", frequency: "common" },
              { textEn: "Nothing's coming up. Do you remember which platform you booked through?", textZh: "查不到呢。您还记得在哪个平台订的吗？", actionHint: "回忆预订渠道", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me check... Here's my confirmation email. The booking number is HK-39205.",
            textZh: "让我看看……这是我的确认邮件。订单号是 HK-39205。",
            culturalNote: "出发前截图或打印确认邮件很重要，以防系统查不到。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Ah, I found it. It was booked under \"Wei Wang.\" A double room for three nights, correct?",
            textZh: "找到了，是用 \"Wei Wang\" 订的。双人间住三晚，对吗？",
            keyPhrases: [
              { en: "found it", zh: "找到了" },
              { en: "booked under", zh: "用...的名字订的" },
              { en: "double room", zh: "双人间" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, here we go — it's under 'Wei Wang.' Double room, three nights. That you?", textZh: "哦，找到了——是'Wei Wang'订的。双人间住三晚。是您吗？", actionHint: "确认是否正确", frequency: "common" },
              { textEn: "Got it! Looks like the booking was made under a different name. Double room for three nights — ring a bell?", textZh: "找到了！好像是用另一个名字订的。双人间三晚——对得上吗？", actionHint: "确认预订信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's the one. My colleague booked it for me, that's why it's under a different name.",
            textZh: "对，就是这个。是同事帮我订的，所以名字不一样。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem at all. May I see your passport, please?",
            textZh: "没问题。请出示您的护照。",
            alternativeExpressions: [
              { textEn: "No worries! Can I just grab your passport real quick?", textZh: "没关系！能快速看一下您的护照吗？", actionHint: "递上护照", frequency: "common" },
              { textEn: "That happens a lot. I'll just need your ID to get you checked in.", textZh: "这种情况很常见。我看一下证件就能帮您办入住。", actionHint: "准备好证件", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
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
              { textEn: "All set! You're in room 805, eighth floor. Here are your keys.", textZh: "都办好了！805房间，8楼。给您钥匙。", actionHint: "拿好房卡", frequency: "common" },
              { textEn: "Great news — your room's good to go. 805, eighth floor. Two key cards for you.", textZh: "好消息——房间准备好了。805，8楼。两张房卡给您。", actionHint: "记住房间号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Where is the elevator?",
            textZh: "谢谢。电梯在哪里？",
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
              { textEn: "Just go down the hall and hang a left — elevators are right there.", textZh: "沿走廊走，左转——电梯就在那儿。", actionHint: "跟着指引走", frequency: "common" },
              { textEn: "Head that way, make a left at the end, and you can't miss 'em.", textZh: "往那边走，到头左转，一定能看到。", actionHint: "按指示走", frequency: "occasional" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Yes, we have a standard double room at $150 per night and a deluxe king room at $220. Which would you prefer?",
            textZh: "让我查一下……有的，我们有标准双人间150美元一晚，豪华大床房220美元一晚。您想要哪种？",
            variations: [
              { textEn: "We have a few options. A city-view room for $180 and a garden-view for $160. How many nights?", textZh: "我们有几个选择。城景房180美元，花园景观房160美元。您住几晚？" },
            ],
            keyPhrases: [
              { en: "standard double", zh: "标准双人间" },
              { en: "deluxe king", zh: "豪华大床房" },
              { en: "per night", zh: "每晚" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "You're in luck! We've got a standard room for 150 a night and a nicer king room for 220. What works for you?", textZh: "您运气不错！标准间每晚150，更好的大床房220。您选哪个？", actionHint: "选择房型", frequency: "common" },
              { textEn: "Let me see what we have... Okay, I can do a double at 150 or a king at 220 per night. How many nights are you staying?", textZh: "让我看看有什么……好的，双人间150或大床房220每晚。您住几晚？", actionHint: "告诉他们住几晚", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the standard double, please. For two nights.",
            textZh: "我要标准双人间，住两晚。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure. May I have your passport and a credit card for the deposit?",
            textZh: "好的。请出示您的护照和一张信用卡作为押金。",
            keyPhrases: [
              { en: "credit card", zh: "信用卡" },
              { en: "deposit", zh: "押金" },
            ],
            alternativeExpressions: [
              { textEn: "Great choice. I'll just need your passport and a credit card — we take a small deposit.", textZh: "好的选择。我需要您的护照和信用卡——我们会收一小笔押金。", actionHint: "准备证件和卡", frequency: "common" },
              { textEn: "No problem. Can I get an ID and a card for the security deposit?", textZh: "没问题。能给我看一下证件和信用卡吗？要交安全押金。", actionHint: "递上证件和卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. How much is the deposit?",
            textZh: "给您。押金是多少？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The deposit is $100. It will be refunded at checkout if there's no damage. Would you like me to charge everything to this card?",
            textZh: "押金100美元，退房时如无损坏会退还。所有费用都刷这张卡吗？",
            keyPhrases: [
              { en: "refunded", zh: "退还" },
              { en: "at checkout", zh: "退房时" },
              { en: "no damage", zh: "无损坏" },
              { en: "charge", zh: "收费/刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "It's a hundred bucks for the deposit — you'll get it back when you check out, as long as nothing's damaged. Want everything on this card?", textZh: "押金100美元——退房时退给您，只要没有损坏。都刷这张卡吗？", actionHint: "确认付款方式", frequency: "common" },
              { textEn: "We'll put a $100 hold on your card. It gets released at checkout. Should I put the room charges on the same card?", textZh: "您的卡会预授权100美元，退房时释放。房费也刷这张卡吗？", actionHint: "确认是否同意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's fine. Is breakfast included?",
            textZh: "好的。包含早餐吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Breakfast is not included with this room, but you can add it for $15 per person. Or there's a café next door that's quite popular.",
            textZh: "这个房型不含早餐，但可以加，每人15美元。旁边也有一家很受欢迎的咖啡馆。",
            keyPhrases: [
              { en: "not included", zh: "不包含" },
              { en: "add it", zh: "加上" },
              { en: "café next door", zh: "旁边的咖啡馆" },
            ],
            alternativeExpressions: [
              { textEn: "Breakfast isn't included, but we can add it for 15 bucks a person. There's also a great little café right next door if you'd rather try that.", textZh: "不含早餐，但可以加，每人15美元。隔壁还有一家不错的小咖啡馆，也可以试试。", actionHint: "决定早餐方案", frequency: "common" },
              { textEn: "This rate doesn't come with breakfast, but honestly the café next door is really good and cheaper too.", textZh: "这个价格不含早餐，但说实话隔壁咖啡馆真的很好吃，也更便宜。", actionHint: "考虑去隔壁吃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll skip the breakfast. Thank you.",
            textZh: "不加早餐了，谢谢。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem. Room 402 on the 4th floor. Here's your key card. Enjoy your stay!",
            textZh: "好的。4楼402号。给您房卡。祝您入住愉快！",
            alternativeExpressions: [
              { textEn: "All done! You're in 402, fourth floor. Here's your key — have a good night!", textZh: "都办好了！402房间，4楼。给您钥匙——晚安！", actionHint: "拿好房卡", frequency: "common" },
              { textEn: "You're all set — room 402. Elevators are just over there. Enjoy!", textZh: "搞定了——402房间。电梯就在那边。享受入住！", actionHint: "准备上楼", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Check-in is normally at 3 PM. Let me see if your room is ready... I'm sorry, it's still being cleaned. It should be ready by 1 PM.",
            textZh: "正常入住时间是下午3点。让我看看您的房间好了没……抱歉，还在打扫。大概下午1点可以好。",
            variations: [
              { textEn: "Our standard check-in time is 3 PM, but let me check... Good news, your room is ready! I can check you in now.", textZh: "标准入住时间是下午3点，让我查查……好消息，您的房间已经好了！可以现在入住。" },
            ],
            keyPhrases: [
              { en: "check-in", zh: "入住" },
              { en: "3 PM", zh: "下午3点" },
              { en: "still being cleaned", zh: "还在打扫" },
              { en: "ready by", zh: "……之前准备好" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "So check-in's at 3, but let me take a look... Ah, it's not quite ready yet. Should be good by 1 though.", textZh: "入住时间是3点，不过让我看看……还没好呢。不过1点应该可以。", actionHint: "考虑如何打发时间", frequency: "common" },
              { textEn: "Normally we don't check in till 3, but I'll see... Sorry, they're still cleaning it. Give us till about 1.", textZh: "正常3点才能入住，我看看……抱歉，还在打扫。大约1点能好。", actionHint: "问能否寄存行李", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Can we leave our luggage here while we wait?",
            textZh: "没关系。我们等的时候可以把行李放在这里吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! We have a luggage storage room. Here's your claim tag. Just show it when you pick up your bags.",
            textZh: "当然可以！我们有行李寄存室。这是您的取件牌。取行李时出示就行。",
            keyPhrases: [
              { en: "luggage storage", zh: "行李寄存" },
              { en: "claim tag", zh: "取件牌" },
              { en: "pick up", zh: "取/拿" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no problem! We'll keep your bags safe. Here's a tag — just hang onto it.", textZh: "当然没问题！我们会保管好您的行李。给您一个牌子——收好就行。", actionHint: "保管好取件牌", frequency: "common" },
              { textEn: "Absolutely! Just leave your stuff with us. I'll give you a ticket so you can grab them later.", textZh: "当然可以！东西放我们这就行。给您一张小票，回来凭票取。", actionHint: "记好取件方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there a restaurant nearby where we can get lunch?",
            textZh: "谢谢。附近有可以吃午饭的餐厅吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's a café on the ground floor, and several restaurants within a 5-minute walk. Here's a map of the area.",
            textZh: "有的，一楼有咖啡厅，步行5分钟内也有好几家餐厅。给您一张附近地图。",
            keyPhrases: [
              { en: "ground floor", zh: "一楼" },
              { en: "within a 5-minute walk", zh: "步行5分钟内" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, there are tons of places nearby. We have our own café downstairs, or there's a whole bunch of restaurants just a short walk away.", textZh: "附近有很多地方。楼下有我们自己的咖啡厅，走一小段也有一堆餐厅。", actionHint: "拿好地图", frequency: "common" },
              { textEn: "Plenty of options! There's food on the ground floor, and I can mark a few good spots on this map for you.", textZh: "选择很多！一楼有吃的，我可以在地图上帮您标几个好地方。", actionHint: "看看推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very helpful. We'll be back around 1 PM then.",
            textZh: "太有帮助了。那我们大概1点回来。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sounds good. I'll have everything ready for you. If the room is ready sooner, would you like me to send you a text?",
            textZh: "好的，我会把一切准备好。如果房间提前好了，要我发短信通知您吗？",
            keyPhrases: [
              { en: "ready sooner", zh: "提前准备好" },
              { en: "send you a text", zh: "发短信给你" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. I'll get everything sorted. Want me to text you if the room's ready early?", textZh: "好的，我来安排一切。如果房间提前好了，要我发短信通知您吗？", actionHint: "留下手机号", frequency: "common" },
              { textEn: "No worries, we'll have it all ready. If it's done before 1, I can shoot you a message.", textZh: "别担心，我们都会准备好。如果1点前好了，我给您发条消息。", actionHint: "提供联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that would be great. My number is...",
            textZh: "好的，那太好了。我的号码是……",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check availability... We do have a junior suite available for an additional $80 per night. Would you be interested?",
            textZh: "让我查一下……我们有小套房，每晚加80美元。您有兴趣吗？",
            variations: [
              { textEn: "I'm sorry, all our suites are fully booked tonight. But I can offer you a deluxe room with a better view for $40 more.", textZh: "抱歉，今晚套房都订满了。但我可以给您一间景观更好的豪华间，多40美元。" },
            ],
            keyPhrases: [
              { en: "availability", zh: "空房情况" },
              { en: "junior suite", zh: "小套房" },
              { en: "additional", zh: "额外的" },
              { en: "per night", zh: "每晚" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Let me see... Actually, we do have a junior suite open. It'd be an extra 80 a night. Interested?", textZh: "让我看看……我们确实有小套房空出来。每晚多80美元。有兴趣吗？", actionHint: "考虑是否升级", frequency: "common" },
              { textEn: "Good news — there's a junior suite available if you want to upgrade. It's 80 more per night on top of your current rate.", textZh: "好消息——有小套房可以升级。在现有价格上每晚多80美元。", actionHint: "问问区别再决定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the difference between the junior suite and my current room?",
            textZh: "小套房和我现在的房间有什么区别？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The junior suite is about 50% larger, with a separate sitting area, a king-size bed, a bigger bathroom with a bathtub, and a city view.",
            textZh: "小套房大约大50%，有独立客厅区域、特大号床、更大的带浴缸的浴室，还有城市景观。",
            keyPhrases: [
              { en: "50% larger", zh: "大50%" },
              { en: "separate sitting area", zh: "独立客厅" },
              { en: "king-size bed", zh: "特大号床" },
              { en: "bathtub", zh: "浴缸" },
              { en: "city view", zh: "城市景观" },
            ],
            alternativeExpressions: [
              { textEn: "It's about half again as big — you get a living area, a king bed, a tub, and a great view of the city.", textZh: "大概大一半——有客厅区、大床、浴缸，还有很棒的城市景观。", actionHint: "考虑是否值得", frequency: "common" },
              { textEn: "Big difference, actually. Way more space, separate sitting area, bigger bathroom with a soaking tub, plus a killer view.", textZh: "区别很大的。空间大很多，有独立客厅，更大的浴室带浴缸，还有绝佳景观。", actionHint: "听起来不错就升级", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great. I'll take the upgrade.",
            textZh: "听起来不错。我要升级。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Wonderful! The total for two nights with the upgrade will be $560. I'll charge the difference to your card on file. Here are your new key cards for room 1502.",
            textZh: "太好了！升级后两晚总共560美元。差价会从您的卡里扣。给您1502号房的新房卡。",
            keyPhrases: [
              { en: "total", zh: "总共" },
              { en: "charge the difference", zh: "扣差价" },
              { en: "card on file", zh: "已登记的卡" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome! So with the upgrade, two nights comes out to $560. I'll just charge the difference to the card we have. Here are your new keys — room 1502.", textZh: "太好了！升级后两晚总共560美元。差价直接扣已登记的卡就行。给您新房卡——1502房。", actionHint: "拿好新房卡", frequency: "common" },
              { textEn: "Great choice! Your new total is $560 for two nights. I'll put the extra on your card. You're now in 1502 — here are the keys.", textZh: "好选择！两晚新的总价是560美元。多出的部分刷您的卡。现在是1502房——给您钥匙。", actionHint: "确认金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you for the upgrade.",
            textZh: "太好了。谢谢升级。",
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
            culturalNote: "打酒店内部电话时，先说房间号让对方快速定位。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that, Mr. Wang. I'll send someone from maintenance to take a look right away. Will you be in your room?",
            textZh: "很抱歉，王先生。我马上派维修人员去看看。您会在房间里吗？",
            keyPhrases: [
              { en: "maintenance", zh: "维修" },
              { en: "take a look", zh: "看看/检查" },
              { en: "right away", zh: "马上" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry about that. I'll get maintenance up there ASAP. You gonna be in the room?", textZh: "哎呀，抱歉。我尽快让维修过去。您在房间吗？", actionHint: "确认在房间等", frequency: "common" },
              { textEn: "That's no good. Let me send someone up right now to check on it. Will you be there?", textZh: "那可不行。我马上派人上去看看。您在房间吧？", actionHint: "在房间等维修", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'll be here. Also, there's no hot water in the shower.",
            textZh: "是的，我在房间。还有，淋浴没有热水。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I apologize for the inconvenience. I'll make sure they check both issues. If we can't fix it quickly, we'll move you to another room. Is that okay?",
            textZh: "很抱歉给您带来不便。我会让他们一起检查。如果不能很快修好，我们给您换房间。可以吗？",
            keyPhrases: [
              { en: "inconvenience", zh: "不便" },
              { en: "fix", zh: "修理" },
              { en: "move you to another room", zh: "给您换房间" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Really sorry about all this. They'll look at both things. If it can't be fixed fast, we'll just switch your room. Sound okay?", textZh: "真的很抱歉。两个问题一起看。修不好就给您换房间。可以吗？", actionHint: "同意方案", frequency: "common" },
              { textEn: "My apologies. I'll have them check everything. Worst case, we move you to a new room right away.", textZh: "非常抱歉。我让他们全部检查。最坏情况马上给您换房。", actionHint: "等待处理结果", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be fine. Thank you for handling it so quickly.",
            textZh: "那可以。谢谢这么快处理。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. Someone will be there in about 10 minutes. Is there anything else?",
            textZh: "没问题。大约10分钟后有人到。还有其他需要吗？",
            keyPhrases: [
              { en: "about 10 minutes", zh: "大约10分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. They'll be up in about 10. Anything else I can help with?", textZh: "没问题。大约10分钟到。还有别的需要帮忙吗？", actionHint: "如有其他问题一并提出", frequency: "common" },
              { textEn: "Absolutely. Expect someone within 10 minutes. Let us know if you need anything else.", textZh: "当然。10分钟内会有人到。有其他需要随时说。", actionHint: "等待维修人员", frequency: "common" },
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
            textEn: "Hi, I'm calling from room 1208. The room next door is very noisy. I can hear loud music and it's almost midnight.",
            textZh: "你好，我是1208房间。隔壁非常吵，能听到很大的音乐声，都快半夜了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm very sorry about that. I'll contact the guests in that room immediately and ask them to keep it down. If the noise continues, please call us back.",
            textZh: "非常抱歉。我马上联系那个房间的客人，让他们安静下来。如果还是吵，请再打电话给我们。",
            keyPhrases: [
              { en: "keep it down", zh: "安静下来/小声点" },
              { en: "noise continues", zh: "还是吵" },
              { en: "call us back", zh: "再打电话" },
            ],
            alternativeExpressions: [
              { textEn: "I'm so sorry. I'll call them right now and ask them to keep it down. Ring us back if it continues.", textZh: "太抱歉了。我现在就打电话让他们安静。如果还吵再打给我们。", actionHint: "等待看是否安静", frequency: "common" },
              { textEn: "That's unacceptable. Let me reach out to them immediately. Don't hesitate to call again.", textZh: "这不能接受。我马上联系他们。别犹豫随时再打来。", actionHint: "再观察一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "If it doesn't stop, could I switch to a different room?",
            textZh: "如果还是不停，能给我换个房间吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. I'll check which rooms are available on a quieter floor. If needed, we can move you right away and I'll send someone to help with your luggage.",
            textZh: "当然可以。我看看安静楼层有哪些空房。如果需要换，我们马上帮您搬，会派人帮您搬行李。",
            keyPhrases: [
              { en: "quieter floor", zh: "更安静的楼层" },
              { en: "move you", zh: "帮您搬/换房" },
              { en: "help with your luggage", zh: "帮您搬行李" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. Let me find a quiet room on a different floor. We can move you right away and help with your bags.", textZh: "当然。我找个别的楼层安静的房间。马上帮您搬，行李也帮您弄。", actionHint: "等待换房安排", frequency: "common" },
              { textEn: "Of course. I'll look into moving you somewhere quieter. We'll send someone up for your luggage.", textZh: "没问题。我看看给您换个安静点的房间。会派人帮您搬行李。", actionHint: "准备换房", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate it.",
            textZh: "谢谢，太感谢了。",
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
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course! I'll bring them up right away. Would you also like extra toiletries — shampoo, soap, or a toothbrush?",
            textZh: "当然！我马上送上来。您还需要额外的洗漱用品吗？洗发水、香皂或牙刷？",
            keyPhrases: [
              { en: "bring them up", zh: "送上来" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "shampoo", zh: "洗发水" },
              { en: "toothbrush", zh: "牙刷" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! I'll have those sent up right away. Need any toiletries too — shampoo, soap, that kind of thing?", textZh: "没问题！马上送上来。还需要洗漱用品吗——洗发水、香皂什么的？", actionHint: "告诉还需要什么", frequency: "common" },
              { textEn: "Absolutely! On my way up with those. Want me to grab some shampoo or soap while I'm at it?", textZh: "当然！我马上带上来。顺便带点洗发水或者香皂要不要？", actionHint: "顺便要其他东西", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, two toothbrushes and some shampoo, please.",
            textZh: "好的，两把牙刷和一些洗发水。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No problem. I'll be there in about 5 minutes. Is there anything else you need?",
            textZh: "没问题。大约5分钟到。还需要别的吗？",
            alternativeExpressions: [
              { textEn: "Got it. Give me about 5 minutes and I'll be up. Anything else while I'm at it?", textZh: "好的。大约5分钟我就上来。还有别的需要吗？", actionHint: "趁机提出其他需求", frequency: "common" },
              { textEn: "No worries. I'll be right up — 5 minutes tops. Need anything else?", textZh: "没问题。我马上上来——最多5分钟。还有别的吗？", actionHint: "想想还缺什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, could I also get a blanket? The room is a bit cold.",
            textZh: "其实，能再要一条毯子吗？房间有点冷。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Sure! I'll also check the thermostat in your room when I come up. Sometimes it just needs adjusting.",
            textZh: "好的！我上去的时候也帮您看看温控器。有时候只是需要调一下。",
            keyPhrases: [
              { en: "blanket", zh: "毯子" },
              { en: "thermostat", zh: "温控器" },
              { en: "adjusting", zh: "调整" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! I'll grab a blanket too. And I'll take a look at the AC while I'm there — might just need a quick adjustment.", textZh: "当然！毯子也带上。顺便帮您看看空调——可能调一下就好了。", actionHint: "等待工作人员上来", frequency: "common" },
              { textEn: "No problem! I'll bring one up. It could be the thermostat — I'll check it when I get there.", textZh: "没问题！我带一条上来。可能是温控器的问题——到了帮您看看。", actionHint: "在房间等待", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. Thank you so much.",
            textZh: "太好了。非常感谢。",
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
              { textEn: "Room service — what can I get for you?", textZh: "客房服务——您需要什么？", actionHint: "告诉他们你要点什么", frequency: "common" },
              { textEn: "Good evening, room service. How can I help?", textZh: "晚上好，客房服务。有什么可以帮您的？", actionHint: "说明你想点餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, this is room 1208. I'd like to order some food, please.",
            textZh: "你好，我是1208房间。我想点些东西吃。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course! We have a menu in your room, or I can tell you about tonight's specials. What are you in the mood for?",
            textZh: "当然！房间里有菜单，或者我可以告诉您今晚的特色菜。您想吃什么？",
            keyPhrases: [
              { en: "menu", zh: "菜单" },
              { en: "tonight's specials", zh: "今晚特色菜" },
              { en: "in the mood for", zh: "想吃" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! There should be a menu by the TV. Or I can walk you through what's good tonight. What are you feeling?", textZh: "当然！电视旁边有菜单。或者我可以跟您说说今晚什么好吃的。您想吃什么？", actionHint: "告诉你想吃的类型", frequency: "common" },
              { textEn: "Of course! We've got some great specials tonight. Want to hear about them, or do you already know what you want?", textZh: "当然！今晚有几道不错的特色菜。想听听，还是您已经知道要什么了？", actionHint: "点菜或者听推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like a club sandwich and a Caesar salad. And a pot of green tea, please.",
            textZh: "我要一个总汇三明治和一份凯撒沙拉。再来一壶绿茶。",
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
              { textEn: "Great choice. That comes with fries or a salad on the side — which one works for you?", textZh: "好选择。配薯条或者沙拉——您要哪个？", actionHint: "选择配菜", frequency: "common" },
              { textEn: "The club sandwich — nice. Do you want fries with that or would you prefer a side salad?", textZh: "总汇三明治——不错。要配薯条还是沙拉？", actionHint: "告诉配菜选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Fries, please.",
            textZh: "薯条吧。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Got it. That will be about 30 minutes. The total comes to $38 plus a service charge. Shall I charge it to your room?",
            textZh: "好的。大约30分钟送到。一共38美元加服务费。挂房间账吗？",
            keyPhrases: [
              { en: "about 30 minutes", zh: "大约30分钟" },
              { en: "service charge", zh: "服务费" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, that'll be about half an hour. Comes to $38 plus the service charge. Want me to put it on your room?", textZh: "好的，大约半小时。38美元加服务费。挂房间账吗？", actionHint: "确认挂账方式", frequency: "common" },
              { textEn: "Should be about 30 minutes. Your total's $38 plus tip. Shall I bill it to the room?", textZh: "大概30分钟。总共38美元加小费。挂房间账吧？", actionHint: "同意挂账", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please charge it to the room. Thank you.",
            textZh: "好的，挂房间账。谢谢。",
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
            alternativeExpressions: [
              { textEn: "Evening! Room service here. What can I do for you?", textZh: "晚上好！客房服务。有什么需要？", actionHint: "说明想点餐", frequency: "common" },
              { textEn: "Hi there, room service. Ready to order?", textZh: "你好，客房服务。准备点餐了吗？", actionHint: "开始点单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, room 1208. I'd like to order dinner, but I have some food allergies. I'm allergic to shellfish and nuts.",
            textZh: "你好，1208房间。我想点晚餐，但我有一些食物过敏。我对贝类和坚果过敏。",
            culturalNote: "在国外一定要主动告知过敏信息，餐厅和酒店会非常重视。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Thank you for letting us know. I'll flag that in our system. Let me recommend some safe options. Our grilled chicken with mashed potatoes is nut-free and shellfish-free. We also have a pasta with tomato sauce.",
            textZh: "感谢您告知。我会在系统里标注。推荐一些安全的选择：烤鸡配土豆泥不含坚果和贝类。还有番茄酱意面。",
            keyPhrases: [
              { en: "food allergies", zh: "食物过敏" },
              { en: "shellfish", zh: "贝类" },
              { en: "nut-free", zh: "不含坚果" },
              { en: "flag that", zh: "标注" },
              { en: "safe options", zh: "安全的选择" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks for letting me know! I'll make a note of that. So the grilled chicken is totally safe — no nuts, no shellfish. The pasta's good too.", textZh: "谢谢告诉我！我记下了。烤鸡完全安全——没有坚果和贝类。意面也可以。", actionHint: "选一道菜", frequency: "common" },
              { textEn: "Good to know. I've flagged your allergies. Let me suggest a couple dishes that are safe for you.", textZh: "了解了。我已经标注了您的过敏信息。推荐几道对您安全的菜。", actionHint: "听推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The grilled chicken sounds good. Is the sauce made with any nuts?",
            textZh: "烤鸡听起来不错。酱汁里有坚果吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No, the sauce is a herb butter — completely nut-free. I'll also make a note for the kitchen to use separate utensils to avoid cross-contamination.",
            textZh: "没有，酱汁是香草黄油的——完全不含坚果。我会特别通知厨房用单独的餐具，避免交叉污染。",
            keyPhrases: [
              { en: "herb butter", zh: "香草黄油" },
              { en: "separate utensils", zh: "单独的餐具" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, it's just a herb butter sauce — totally nut-free. And I'll make sure the kitchen uses clean utensils so there's no cross-contamination.", textZh: "没有，就是香草黄油酱——完全不含坚果。我还会让厨房用干净餐具，避免交叉污染。", actionHint: "放心点餐", frequency: "common" },
              { textEn: "No nuts at all in the sauce. I'll personally let the chef know about your allergies so they take extra care.", textZh: "酱汁里完全没有坚果。我会亲自跟厨师说您的过敏情况，让他们特别注意。", actionHint: "确认点这道菜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. I'll go with the grilled chicken. Thank you for being so careful.",
            textZh: "那我就放心了。就要烤鸡吧。谢谢你这么仔细。",
          },
        ],
      },
    ],
  },

  // ==================== 酒店退房 ====================
  {
    id: "hotel-checkout",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course, Mr. Wang. Let me pull up your bill. Your total is $396 — that includes the room, breakfast, and the room service charge from last night.",
            textZh: "好的，王先生。让我调出您的账单。总共396美元——包括房费、早餐和昨晚的客房服务费。",
            keyPhrases: [
              { en: "pull up your bill", zh: "调出账单" },
              { en: "total", zh: "总共" },
              { en: "includes", zh: "包括" },
              { en: "room service charge", zh: "客房服务费" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Let me pull up your account... Okay, your total comes to $396. That covers the room, breakfast, and last night's room service.", textZh: "没问题。我调一下您的账户……好的，总共396美元。包括房费、早餐和昨晚的客房服务。", actionHint: "核对账单", frequency: "common" },
              { textEn: "Of course. Give me a sec... Alright, you're looking at $396 total — room, breakfast, and the room service from last night.", textZh: "好的。稍等……总共396美元——房费、早餐和昨晚的客房送餐。", actionHint: "检查明细", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could I see the itemized bill, please?",
            textZh: "能看一下明细吗？",
            culturalNote: "退房时检查明细（itemized bill）是好习惯，确保没有额外收费。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Here you go. Room rate: $150 per night for two nights, breakfast: $36, and room service: $38 plus 5% service charge.",
            textZh: "给您。房费每晚150美元住两晚，早餐36美元，客房服务38美元加5%服务费。",
            keyPhrases: [
              { en: "itemized bill", zh: "明细账单" },
              { en: "room rate", zh: "房费" },
              { en: "service charge", zh: "服务费" },
            ],
            alternativeExpressions: [
              { textEn: "Here's the breakdown: two nights at 150 each, breakfast was 36, and room service came to 38 plus the 5% charge.", textZh: "明细是这样的：两晚每晚150，早餐36，客房服务38加5%服务费。", actionHint: "核对每项费用", frequency: "common" },
              { textEn: "Let me walk you through it — room's $300 for two nights, $36 for breakfast, and $38 plus service charge for room service.", textZh: "我给您过一下——两晚房费300，早餐36，客房服务38加服务费。", actionHint: "确认金额", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks right. I'll pay with the same card.",
            textZh: "没问题。用同一张卡付。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Done. Your deposit of $100 has been refunded. You should see it back on your card in 3-5 business days. Here's your receipt.",
            textZh: "好了。您100美元的押金已退还，3-5个工作日内到账。给您收据。",
            keyPhrases: [
              { en: "deposit", zh: "押金" },
              { en: "refunded", zh: "退还" },
              { en: "business days", zh: "工作日" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              { textEn: "All done! Your $100 deposit will go back to your card — usually takes 3 to 5 business days. Here's your receipt.", textZh: "都办好了！100美元押金会退回您的卡——一般3到5个工作日。给您收据。", actionHint: "收好收据", frequency: "common" },
              { textEn: "You're all set. The hundred-dollar hold on your card will be released within a few business days. Receipt's right here.", textZh: "搞定了。卡上预授权的100美元几个工作日内就释放。收据在这。", actionHint: "保管好收据", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Can I leave my luggage here for a few hours? Our flight isn't until 6 PM.",
            textZh: "谢谢。行李可以寄存几个小时吗？我们的航班下午6点才起飞。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely! Just leave them with the bellhop at the entrance. He'll give you a claim tag. You can pick them up anytime before your flight.",
            textZh: "当然可以！放在门口行李员那里就行。他会给您取件牌。航班前随时来取。",
            keyPhrases: [
              { en: "bellhop", zh: "行李员" },
              { en: "claim tag", zh: "取件牌" },
              { en: "pick them up", zh: "来取" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Just drop your bags with the guy at the door. He'll give you a tag and you can grab them whenever.", textZh: "当然！把行李交给门口的人就行。他会给您一个牌子，随时来取。", actionHint: "去找行李员", frequency: "common" },
              { textEn: "Sure, no problem. Leave them with the bell staff and they'll hold them for you. Just come back before your flight.", textZh: "没问题。放在行李台那里，他们会帮您保管。航班前来取就行。", actionHint: "交给行李员", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you also call a taxi to the airport for about 4 PM?",
            textZh: "能帮我约一辆下午4点去机场的出租车吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure, I'll arrange that. It takes about 40 minutes to the airport. Should I book it for 3:45 to be safe?",
            textZh: "好的，我来安排。到机场大约40分钟。为了保险，订3:45的好吗？",
            keyPhrases: [
              { en: "arrange", zh: "安排" },
              { en: "takes about", zh: "大约需要" },
              { en: "to be safe", zh: "为了保险起见" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. It's about 40 minutes to the airport, so maybe I should book it for 3:45 just to be safe?", textZh: "没问题。到机场大约40分钟，要不订3:45的保险一点？", actionHint: "确认时间", frequency: "common" },
              { textEn: "Sure, I'll set that up. With traffic, I'd say book for 3:45 to give yourself a cushion.", textZh: "好的，我来安排。考虑到交通，建议3:45出发留点余量。", actionHint: "同意提前出发", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Thank you for everything. We had a wonderful stay.",
            textZh: "好主意。感谢一切。我们住得很愉快。",
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
              { textEn: "It was great having you! Hope you'll come back. Have a safe trip!", textZh: "很高兴接待您！希望您再来。旅途平安！", actionHint: "道别", frequency: "common" },
              { textEn: "Thanks for staying with us, Mr. Wang! Fly safe and we hope to see you again soon.", textZh: "感谢您入住，王先生！一路平安，希望很快再见到您。", actionHint: "友好道别", frequency: "common" },
            ],
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
              { textEn: "Oh, I'm sorry about that. Let me pull it up. What doesn't look right?", textZh: "哦，抱歉。我调出来看看。哪里不对？", actionHint: "指出问题项目", frequency: "common" },
              { textEn: "I apologize. Let me take a look at your bill right now. Can you tell me what's wrong?", textZh: "抱歉。我马上看一下您的账单。能告诉我什么问题吗？", actionHint: "说明账单问题", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "There's a minibar charge of $45, but I didn't use the minibar at all.",
            textZh: "这里有一笔45美元的迷你吧消费，但我完全没有用过迷你吧。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check with housekeeping... You're right, it appears to be a mistake. The previous guest's charge wasn't cleared. I'll remove that immediately. Your updated total is $351.",
            textZh: "让我跟客房部核实一下……您是对的，这似乎是个错误。上一位客人的消费没有清掉。我马上删除。更新后的总额是351美元。",
            keyPhrases: [
              { en: "minibar", zh: "迷你吧" },
              { en: "check with housekeeping", zh: "跟客房部核实" },
              { en: "mistake", zh: "错误" },
              { en: "remove", zh: "删除/去掉" },
              { en: "updated total", zh: "更新后的总额" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look into that... Yeah, you're right, that's from the last guest. My bad. I'll take it off right now. New total is $351.", textZh: "我查一下……对，您说得对，是上一位客人的。不好意思。我马上去掉。新的总额是351美元。", actionHint: "确认更新后的金额", frequency: "common" },
              { textEn: "I just checked with housekeeping — definitely a mistake on our end. I've removed it. Your updated bill is $351.", textZh: "我刚跟客房部确认了——确实是我们的错。已经删掉了。更新后的账单是351美元。", actionHint: "核对新账单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for fixing that. The rest looks correct.",
            textZh: "谢谢处理。其余的没问题。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I apologize for the error. Here's your corrected receipt. Is there anything else I can help with?",
            textZh: "为这个错误道歉。给您更正后的收据。还有什么需要帮忙的吗？",
            keyPhrases: [
              { en: "corrected receipt", zh: "更正后的收据" },
            ],
            alternativeExpressions: [
              { textEn: "I'm really sorry about the mix-up. Here's the corrected receipt. Anything else I can help with?", textZh: "这个搞混了真的很抱歉。给您更正后的收据。还有什么需要帮忙的吗？", actionHint: "收好收据", frequency: "common" },
              { textEn: "My apologies for the error. Here's your updated receipt. Please let me know if everything looks good now.", textZh: "为这个错误道歉。给您更新的收据。看看现在都对了吗？", actionHint: "确认无误", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... I can extend your checkout to 2 PM at no extra charge. If you need to stay until 6 PM, there would be a half-day charge of $75.",
            textZh: "让我查一下……可以免费延到下午2点。如果需要到下午6点，要加半天费用75美元。",
            variations: [
              { textEn: "I'm sorry, we're fully booked today and can't offer late checkout. But you're welcome to store your luggage with us.", textZh: "抱歉，今天满房了，无法延迟退房。但您可以把行李寄存在我们这里。" },
            ],
            keyPhrases: [
              { en: "late checkout", zh: "延迟退房" },
              { en: "no extra charge", zh: "免费/不加收" },
              { en: "half-day charge", zh: "半天费用" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Let me see... I can do 2 PM no charge. If you need till 6, that'd be 75 bucks for a half day.", textZh: "我看看……2点免费延到。如果要到6点的话，半天75美元。", actionHint: "选择退房时间", frequency: "common" },
              { textEn: "Good news — I can push your checkout to 2 for free. Past that, there's a $75 half-day fee.", textZh: "好消息——可以免费延到2点。超过的话要加75美元半天费。", actionHint: "决定延多久", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "2 PM would be perfect. Thank you.",
            textZh: "下午2点就好。谢谢。",
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
              { textEn: "Done! You're good till 2. Just head down when you're ready to go.", textZh: "搞定！2点之前都没问题。准备好了就下来。", actionHint: "继续享受房间", frequency: "common" },
              { textEn: "All set — checkout's now at 2 PM. No rush, just swing by the front desk when you're done.", textZh: "都安排好了——退房时间改到下午2点了。不着急，好了来前台就行。", actionHint: "放心休息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more thing — is there a place to get lunch nearby?",
            textZh: "好的。还有一件事——附近有吃午饭的地方吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there are several restaurants in the mall across the street. I can also order room service for you if you prefer to eat in your room.",
            textZh: "有的，对面商场里有好几家餐厅。如果您想在房间吃，也可以叫客房服务。",
            alternativeExpressions: [
              { textEn: "Oh yeah, there's a mall right across the street with a bunch of restaurants. Or if you want to stay in, we can do room service.", textZh: "有啊，对面商场有很多餐厅。或者想待在房间的话可以叫客房服务。", actionHint: "选择用餐方式", frequency: "common" },
              { textEn: "Tons of options! The mall across the street has everything. Or I can get room service sent up if you'd rather eat in.", textZh: "选择很多！对面商场什么都有。想在房间吃的话也可以叫送餐。", actionHint: "决定去哪吃", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 酒店投诉 ====================
  {
    id: "hotel-complaint",
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
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I'm the duty manager. I'm sorry to hear that. Can you tell me what the issue is?",
            textZh: "我是值班经理。很抱歉听到这个。能告诉我具体是什么问题吗？",
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
              { textEn: "I'm the manager on duty. I apologize — please tell me exactly what happened.", textZh: "我是当班经理。很抱歉——请告诉我具体发生了什么。", actionHint: "详细说明问题", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "There are stains on the bedsheets, the bathroom floor is dirty, and I found hair in the bathtub. This is unacceptable for the price we're paying.",
            textZh: "床单上有污渍，浴室地板很脏，浴缸里还有头发。以我们付的价格来说，这是不能接受的。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I sincerely apologize. That's absolutely not up to our standards. I'll have housekeeping go to your room immediately with fresh linens and do a deep clean. Would you prefer to wait, or shall I move you to a different room right away?",
            textZh: "我真诚地道歉。这完全不符合我们的标准。我马上派客房部去您房间换新床品并做深度清洁。您是等一下，还是我马上给您换个房间？",
            keyPhrases: [
              { en: "not up to our standards", zh: "不符合标准" },
              { en: "housekeeping", zh: "客房部" },
              { en: "fresh linens", zh: "新床品" },
              { en: "deep clean", zh: "深度清洁" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择等待清洁或要求换房",
            alternativeExpressions: [
              { textEn: "I'm so sorry. That's totally unacceptable. I'll send housekeeping right now with clean sheets. Want me to move you to a new room instead?", textZh: "太抱歉了。这完全不能接受。我马上派人送干净床单来。还是给您换个房间？", actionHint: "选择换房或清洁", frequency: "common" },
              { textEn: "I sincerely apologize — this should never happen. I can get your room deep-cleaned or move you right away. What would you prefer?", textZh: "真心道歉——这不该发生。我可以给房间做深度清洁或者马上换房。您选哪个？", actionHint: "做出选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer a different room. And honestly, I think we deserve some compensation for this experience.",
            textZh: "我更想换个房间。而且说实话，我觉得这个经历应该有些补偿。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Absolutely. I'll upgrade you to a superior room at no extra charge, and I'll also apply a 20% discount to your total stay. I'll also send complimentary fruit and drinks to your new room. Again, I'm very sorry.",
            textZh: "当然。我免费给您升级到高级房，并给您整个住宿打八折。还会送免费水果和饮品到新房间。再次深表歉意。",
            keyPhrases: [
              { en: "upgrade", zh: "升级" },
              { en: "at no extra charge", zh: "免费" },
              { en: "apply a discount", zh: "打折" },
              { en: "complimentary", zh: "免费赠送的" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I'm upgrading you for free, knocking 20% off your whole stay, and sending up some fruit and drinks. Again, so sorry.", textZh: "当然。免费升级，全程八折，再送水果和饮品。再次非常抱歉。", actionHint: "接受补偿", frequency: "common" },
              { textEn: "Of course. Free upgrade to a better room, 20% off your total, and complimentary refreshments. I can't apologize enough.", textZh: "当然。免费升级到更好的房间，总价打八折，外加免费茶歇。真的非常抱歉。", actionHint: "确认补偿方案", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate you taking this seriously.",
            textZh: "谢谢。感谢你认真对待这件事。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Of course. Your new room is 1502. Here are the key cards. I'll have someone help you with your luggage right away. If there's anything else, please don't hesitate to call me directly.",
            textZh: "当然。您的新房间是1502。给您房卡。我马上派人帮您搬行李。如果还有其他问题，请直接打电话找我。",
            keyPhrases: [
              { en: "don't hesitate", zh: "不要犹豫" },
              { en: "call me directly", zh: "直接打电话找我" },
            ],
            alternativeExpressions: [
              { textEn: "Your new room is 1502. Here are the keys. I'm sending someone for your bags now. Call me anytime if you need anything.", textZh: "新房间1502。给您钥匙。马上派人搬行李。有什么需要随时找我。", actionHint: "拿好新房卡", frequency: "common" },
              { textEn: "All set — room 1502. A porter will be up in a minute for your luggage. And here's my direct line.", textZh: "都安排好了——1502房间。行李员马上上来帮您搬。这是我的直线电话。", actionHint: "记下经理联系方式", frequency: "common" },
            ],
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
            textEn: "Hello, I'm calling from room 908. There's been construction noise outside my window since 7 AM, and nobody warned me about this when I checked in.",
            textZh: "你好，我是908房间。从早上7点开始窗外就有施工噪音，入住时没人告诉我这件事。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "I'm very sorry about that. You're right — we should have informed you at check-in. The construction is on the building next door and is scheduled to continue for two more weeks. I understand how disruptive that must be.",
            textZh: "非常抱歉。您说得对——我们应该在入住时告知您。施工在隔壁楼，计划还要持续两周。我理解这有多打扰您。",
            keyPhrases: [
              { en: "construction noise", zh: "施工噪音" },
              { en: "should have informed you", zh: "应该告知您" },
              { en: "disruptive", zh: "打扰的/干扰的" },
            ],
            vocabNotes: {
              "disruptive": {
                meaningInContext: "在这里表示「造成干扰的、影响正常生活的」",
                similarUsage: "类似用法：The noise was very disruptive to my work.",
              },
            },
            alternativeExpressions: [
              { textEn: "I apologize — that's something we should have mentioned. Unfortunately the work next door is ongoing.", textZh: "我道歉——这个我们应该提到的。很不幸隔壁的工程还在进行。", actionHint: "可以要求换房或补偿", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I couldn't sleep at all this morning. I'm here on business and I have important meetings. Can you move me to a quiet room on the other side of the building?",
            textZh: "今天早上根本没法睡觉。我是来出差的，有重要会议。能把我换到楼的另一边安静的房间吗？",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "Of course. I have a room on the 15th floor facing the park — it's very quiet. I'll also waive tonight's room charge as an apology. Let me arrange the move for you right now.",
            textZh: "当然可以。15楼有一间面向公园的房间——非常安静。我也免除今晚的房费作为补偿。我现在就帮您安排换房。",
            keyPhrases: [
              { en: "facing the park", zh: "面向公园" },
              { en: "waive", zh: "免除" },
              { en: "room charge", zh: "房费" },
              { en: "as an apology", zh: "作为补偿/道歉" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. I've got a quiet room on 15 that faces the park. And I'm waiving tonight's charge — it's on us.", textZh: "当然。15楼有间面向公园的安静房间。今晚房费免了——算我们的。", actionHint: "接受换房", frequency: "common" },
              { textEn: "I'll move you right now to a park-view room on a high floor. No charge for tonight — that's the least we can do.", textZh: "我马上给您换到高层朝公园的房间。今晚不收费——这是我们应该做的。", actionHint: "同意方案", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would help a lot. What time does the construction usually stop?",
            textZh: "那就太好了。施工一般几点停？",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "The construction runs from 7 AM to 6 PM on weekdays, and there's no work on weekends. Your new room shouldn't be affected at all, but if you notice any noise, please call me right away.",
            textZh: "施工时间是工作日早7点到晚6点，周末不施工。您的新房间应该完全不受影响，但如果听到噪音，请马上打电话给我。",
            keyPhrases: [
              { en: "runs from...to", zh: "从……到……" },
              { en: "weekdays", zh: "工作日" },
              { en: "shouldn't be affected", zh: "不应该受影响" },
            ],
            alternativeExpressions: [
              { textEn: "They work 7 to 6, weekdays only. No noise on weekends. Your new room should be totally fine, but call me if it's not.", textZh: "工作日7点到6点施工。周末不施工。新房间应该完全没问题，但不行的话打给我。", actionHint: "了解施工时间", frequency: "common" },
              { textEn: "Construction's 7 AM to 6 PM on weekdays — nothing on weekends. You shouldn't hear a thing from the new room.", textZh: "施工时间是工作日早7到晚6——周末不施工。新房间您应该什么都听不到。", actionHint: "安心入住新房", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for handling this so quickly.",
            textZh: "谢谢你这么快处理。",
          },
          {
            speaker: "them",
            role: "前台经理",
            textEn: "It's the least we can do. I'll have your luggage moved within 15 minutes. Here's my direct number in case you need anything else during your stay.",
            textZh: "这是我们应该做的。15分钟内帮您搬好行李。给您我的直线号码，住宿期间有任何需要随时联系我。",
            keyPhrases: [
              { en: "the least we can do", zh: "这是我们应该做的" },
              { en: "direct number", zh: "直线号码" },
            ],
            alternativeExpressions: [
              { textEn: "It's the least we can do. Your bags will be in the new room in 15 minutes. Here's my number — call me for anything.", textZh: "这是我们应该做的。15分钟内行李就到新房间。给您我的号码——有事随时打。", actionHint: "保存联系方式", frequency: "common" },
              { textEn: "Happy to help. I'll have your luggage moved right away. And here — take my card so you can reach me directly.", textZh: "很乐意帮忙。行李马上帮您搬。给您我的名片，可以直接联系我。", actionHint: "收好名片", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Good evening! Our full menu is available until 10 PM. After that, we have a late-night menu until 2 AM. What can I get for you?",
            textZh: "晚上好！完整菜单供应到晚上10点。之后有夜宵菜单到凌晨2点。您想要什么？",
            keyPhrases: [
              { en: "full menu", zh: "完整菜单" },
              { en: "late-night menu", zh: "夜宵菜单" },
              { en: "available until", zh: "供应到" },
            ],
            vocabNotes: {
              "available": {
                meaningInContext: "在这里指菜单/食物可以点到某个时间",
                similarUsage: "类似用法：Is this item still available?",
              },
            },
            alternativeExpressions: [
              { textEn: "Room service is open 24 hours, but the full kitchen closes at 10. What would you like?", textZh: "客房服务24小时营业，但正式厨房10点关。您想点什么？", actionHint: "告诉他们你想吃什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like a cheeseburger and a bottle of sparkling water. Oh, and do you have any desserts?",
            textZh: "我要一个芝士汉堡和一瓶气泡水。对了，有甜点吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Sure! For desserts, we have chocolate lava cake, New York cheesecake, and a fresh fruit platter. Would you like to add one?",
            textZh: "当然！甜点有巧克力熔岩蛋糕、纽约芝士蛋糕和新鲜水果拼盘。要加一个吗？",
            keyPhrases: [
              { en: "chocolate lava cake", zh: "巧克力熔岩蛋糕" },
              { en: "cheesecake", zh: "芝士蛋糕" },
              { en: "fruit platter", zh: "水果拼盘" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! We've got a killer lava cake, cheesecake, or a fruit plate. Want to throw one in?", textZh: "当然！我们有超好吃的熔岩蛋糕、芝士蛋糕或者水果盘。要不要来一个？", actionHint: "选一个甜点", frequency: "common" },
              { textEn: "We've got some great desserts — chocolate lava cake is the most popular. There's also cheesecake and fruit. Interested?", textZh: "甜点很不错——巧克力熔岩蛋糕最受欢迎。还有芝士蛋糕和水果。有兴趣吗？", actionHint: "考虑加甜点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The chocolate lava cake sounds amazing. How long will the delivery take?",
            textZh: "巧克力熔岩蛋糕听起来不错。送过来要多久？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "About 25 to 30 minutes. Your order comes to $52 plus a $5 delivery fee and 18% gratuity. Shall I charge it to your room?",
            textZh: "大约25到30分钟。您的订单是52美元加5美元送餐费和18%的服务费。挂房间账吗？",
            keyPhrases: [
              { en: "delivery fee", zh: "送餐费" },
              { en: "gratuity", zh: "服务费/小费" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            vocabNotes: {
              "gratuity": {
                meaningInContext: "在酒店客房服务中，gratuity 就是服务费/小费，通常自动加上",
                similarUsage: "类似用法：An 18% gratuity is included.",
              },
            },
            alternativeExpressions: [
              { textEn: "Give it about 25 to 30 minutes. Total's $52 plus a 5-dollar delivery fee and 18% tip. Put it on the room?", textZh: "大概25到30分钟。总共52美元加5美元送餐费和18%小费。挂房间账吗？", actionHint: "确认挂账方式", frequency: "common" },
              { textEn: "Should be about half an hour. That'll run you $52 plus delivery and gratuity. Room charge okay?", textZh: "大概半小时。52美元加送餐费和服务费。挂房间账可以吗？", actionHint: "同意结账", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, charge it to the room, please. Room 1208.",
            textZh: "好的，挂房间账。1208房间。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Got it, Mr. Wang. A cheeseburger, sparkling water, and chocolate lava cake to room 1208. We'll knock when it arrives. Is there anything else?",
            textZh: "好的，王先生。芝士汉堡、气泡水和巧克力熔岩蛋糕送到1208房间。送到时会敲门。还需要别的吗？",
            keyPhrases: [
              { en: "we'll knock", zh: "我们会敲门" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. So that's a cheeseburger, sparkling water, and the lava cake to 1208. We'll give you a knock when it's there. All good?", textZh: "好的。芝士汉堡、气泡水和熔岩蛋糕送到1208。到了敲门。还有别的吗？", actionHint: "确认无误", frequency: "common" },
              { textEn: "All set! Cheeseburger, sparkling water, lava cake — room 1208. Someone will knock when it arrives. Anything else?", textZh: "搞定！芝士汉堡、气泡水、熔岩蛋糕——1208房间。到了会敲门。还要别的吗？", actionHint: "如果没有就结束", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all. Thank you!",
            textZh: "就这些。谢谢！",
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
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course! What do you need?",
            textZh: "当然！您需要什么？",
            alternativeExpressions: [
              { textEn: "Sure thing! What can I bring up for you?", textZh: "没问题！需要送什么上来？", actionHint: "告诉他们你需要什么", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need an iron and ironing board — I have a business meeting tomorrow. And also an extra blanket; the room is a bit cold.",
            textZh: "我需要一个熨斗和熨衣板——明天有商务会议。还要一条额外的毯子，房间有点冷。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No problem. I'll bring those right up. For the cold room, would you like me to send someone to adjust the thermostat, or would you prefer the extra blanket?",
            textZh: "没问题。我马上送上来。房间冷的话，要我派人调一下温控器，还是您就想要额外的毯子？",
            keyPhrases: [
              { en: "iron", zh: "熨斗" },
              { en: "ironing board", zh: "熨衣板" },
              { en: "adjust the thermostat", zh: "调温控器" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! I'll get those up to you. About the cold room — want me to fix the thermostat, or just an extra blanket?", textZh: "没问题！我马上送来。房间冷的话——要我修一下温控器，还是多给您一条毯子？", actionHint: "选择解决冷的方式", frequency: "common" },
              { textEn: "On my way with those. The room's cold? I can have someone look at the heating, or just grab you a blanket.", textZh: "马上送来。房间冷？我可以派人看看暖气，或者直接拿条毯子。", actionHint: "告诉需求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Both, actually. And one more thing — do you have a phone charger I could borrow? I forgot mine.",
            textZh: "都要吧。还有一件事——有手机充电器可以借吗？我的忘带了。",
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
              { textEn: "We do! We've got chargers for pretty much everything. Is it an iPhone or Android?", textZh: "有的！什么手机的充电器我们基本都有。是iPhone还是安卓？", actionHint: "说明手机型号", frequency: "common" },
              { textEn: "Sure, we have loaners at the front desk. What kind of phone are you using?", textZh: "有，前台有可以借的。您用什么手机？", actionHint: "告诉手机类型", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "iPhone, please.",
            textZh: "iPhone的，谢谢。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Got it. I'll bring the iron and ironing board, an extra blanket, and a Lightning charger. Everything should be there within 10 minutes. There's no charge for any of these.",
            textZh: "好的。我带熨斗、熨衣板、额外的毯子和Lightning充电器过来。10分钟内全部送到。这些都不收费。",
            keyPhrases: [
              { en: "no charge", zh: "不收费" },
              { en: "within 10 minutes", zh: "10分钟内" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect. Iron, ironing board, blanket, and a Lightning cable — all coming up. Should be there in about 10. No charge for any of it.", textZh: "好的。熨斗、熨衣板、毯子和Lightning线——都带来。大约10分钟。全部免费。", actionHint: "在房间等待", frequency: "common" },
              { textEn: "All right, I've got everything on the list. I'll be up in 10 minutes. It's all complimentary.", textZh: "好的，清单上的都有了。10分钟内到。全部免费。", actionHint: "等待送达", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. Thank you so much for the help.",
            textZh: "太好了。非常感谢帮忙。",
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
            textEn: "Hi, we're looking for a good local restaurant for dinner tonight. Nothing too touristy. Do you have any recommendations?",
            textZh: "你好，我们今晚想找一家好的本地餐厅吃晚餐。不要太游客化的。有什么推荐吗？",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "Great choice wanting something local! There's an excellent seafood restaurant called \"The Catch\" about a 10-minute walk from here. It's very popular with locals. Do you have any dietary restrictions?",
            textZh: "想找本地的太好了！步行10分钟有一家很棒的海鲜餐厅叫 \"The Catch\"。很受当地人欢迎。您有什么忌口吗？",
            keyPhrases: [
              { en: "touristy", zh: "游客化的" },
              { en: "popular with locals", zh: "受当地人欢迎" },
              { en: "dietary restrictions", zh: "忌口/饮食限制" },
            ],
            vocabNotes: {
              "touristy": {
                meaningInContext: "在这里指专门为游客服务的、不那么正宗的",
                similarUsage: "类似用法：This area is too touristy for my taste.",
              },
            },
            alternativeExpressions: [
              { textEn: "I know just the place! There's a hidden gem two blocks away that locals love.", textZh: "我正好知道一个地方！两条街外有个当地人喜欢的宝藏餐厅。", actionHint: "可以追问具体什么菜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No restrictions. Can you make a reservation for two at 7 PM?",
            textZh: "没有忌口。能帮我订两位晚上7点的吗？",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "Let me call them right now... Done! You're confirmed for 7 PM, table for two. I'll write down the address and directions for you. It's a lovely evening walk along the river.",
            textZh: "我现在打电话订……好了！确认7点，两位。我给您写下地址和路线。沿着河边走过去，晚上很舒服。",
            keyPhrases: [
              { en: "confirmed", zh: "确认了" },
              { en: "table for two", zh: "两人桌" },
              { en: "directions", zh: "路线/方向" },
            ],
            alternativeExpressions: [
              { textEn: "Just called — you're booked for 7, party of two. I'll jot down the address. It's a nice walk along the river.", textZh: "刚打完电话——7点两位已订好。我给您写下地址。沿河走过去很舒服。", actionHint: "拿好地址", frequency: "common" },
              { textEn: "All set! 7 PM, table for two. Let me write down how to get there — it's about a 10-minute walk.", textZh: "搞定！7点两人桌。我写一下怎么走——大约10分钟路程。", actionHint: "看看路线", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Also, what are the must-see attractions around here? We have two full days.",
            textZh: "谢谢！另外，这附近有什么必去的景点？我们有整整两天。",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "For two days, I'd recommend: Day 1, visit the old town and the art museum — they're both within walking distance. Day 2, take a day trip to the national park. I can arrange a private car or you can join a group tour for about $60 per person.",
            textZh: "两天的话，我推荐：第一天逛老城区和艺术博物馆——步行都能到。第二天去国家公园一日游。我可以安排专车，或者参加团队游，每人大约60美元。",
            keyPhrases: [
              { en: "must-see attractions", zh: "必去景点" },
              { en: "within walking distance", zh: "步行可到" },
              { en: "day trip", zh: "一日游" },
              { en: "private car", zh: "专车" },
              { en: "group tour", zh: "团队游" },
            ],
            alternativeExpressions: [
              { textEn: "Two days? Perfect. Day one, check out the old town and the art museum — both walkable. Day two, do a day trip to the national park. I can set up a car or a group tour.", textZh: "两天？太好了。第一天逛老城区和艺术博物馆——都能走到。第二天去国家公园一日游。我可以安排专车或者团游。", actionHint: "选择出行方式", frequency: "common" },
              { textEn: "For two full days, I'd say hit the old town and museum first — they're close by. Then the park is a must for day two. Group tours run about 60 bucks.", textZh: "两整天的话，先去老城区和博物馆——就在附近。第二天必须去公园。团游大概60美元。", actionHint: "考虑行程安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The group tour sounds good. Can you book that for us for the day after tomorrow?",
            textZh: "团队游听起来不错。能帮我们订后天的吗？",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "Absolutely. The tour departs from the hotel lobby at 8 AM and returns around 5 PM. It includes lunch and park entrance fees. I'll book two spots for you. Payment can be made at the front desk or I can charge it to your room.",
            textZh: "当然。旅行团早上8点从酒店大堂出发，大约下午5点回来。包含午餐和公园门票。我帮您订两个名额。可以在前台付款或挂房间账。",
            keyPhrases: [
              { en: "departs from", zh: "从……出发" },
              { en: "lobby", zh: "大堂" },
              { en: "entrance fees", zh: "门票" },
              { en: "book spots", zh: "订名额" },
            ],
            alternativeExpressions: [
              { textEn: "The tour leaves from the lobby at 8 and gets back around 5. Lunch and tickets are included. I'll put you down for two. Room charge or pay at the desk?", textZh: "旅行团8点大堂出发，5点左右回来。包午餐和门票。我给您订两位。挂房间账还是前台付？", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "It's an 8 AM departure, back by 5. Everything's included — lunch, park entry, the whole deal. Shall I book two?", textZh: "早上8点出发，5点回来。全包——午餐、门票什么都有。帮您订两个？", actionHint: "确认预订", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Charge it to the room, please. You've been incredibly helpful!",
            textZh: "挂房间账吧。你帮了大忙！",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "My pleasure! Here's my card — if you need anything during your stay, restaurant reservations, tickets, transportation — just ask. Enjoy your dinner tonight!",
            textZh: "我的荣幸！给您我的名片——住宿期间需要订餐厅、买票、交通什么的，随时找我。今晚好好享受晚餐！",
            keyPhrases: [
              { en: "my pleasure", zh: "我的荣幸" },
              { en: "transportation", zh: "交通" },
            ],
            alternativeExpressions: [
              { textEn: "That's what I'm here for! Here's my card — need a restaurant, tickets, a ride, whatever — just come find me. Enjoy tonight!", textZh: "这就是我的工作嘛！给您名片——订餐厅、买票、叫车什么的，来找我就行。今晚好好玩！", actionHint: "收好名片", frequency: "common" },
              { textEn: "Happy to help! Don't hesitate to come back if you need anything else. Have an amazing evening!", textZh: "很高兴帮到您！有什么需要随时来找我。祝您今晚愉快！", actionHint: "道谢离开", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "You must be thinking of Blue Note! It's excellent. Tonight's show features a Grammy-nominated singer. Tickets are $45 per person. Shall I try to get you seats? Saturday nights fill up fast.",
            textZh: "您说的一定是Blue Note！非常棒。今晚的演出有一位格莱美提名歌手。门票每人45美元。需要我帮您订座吗？周六晚上很快就满了。",
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
              { textEn: "The Blue Note is fantastic! Tonight is a special performance. Let me check if there are still seats.", textZh: "Blue Note非常棒！今晚有特别演出。我查查还有没有座位。", actionHint: "等他们确认", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please! For two people. What time does the show start?",
            textZh: "好的，帮我订！两个人。演出几点开始？",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "The show starts at 9 PM, but I'd recommend arriving by 8:30 to get good seats — it's general admission. I can arrange a taxi for 8:15.",
            textZh: "演出9点开始，但建议8:30到，这样能坐好位置——是自由入座。我可以安排8:15的出租车。",
            keyPhrases: [
              { en: "general admission", zh: "自由入座" },
              { en: "recommend arriving by", zh: "建议……之前到" },
              { en: "arrange a taxi", zh: "安排出租车" },
            ],
            alternativeExpressions: [
              { textEn: "It kicks off at 9, but get there by 8:30 for a good spot — it's first come, first served. I'll have a cab ready at 8:15.", textZh: "9点开始，但8:30到能占好位——先到先得。我让出租车8:15来。", actionHint: "确认时间安排", frequency: "common" },
              { textEn: "Show's at 9. I'd say get there around 8:30 though — no assigned seats. Want me to book a taxi for you?", textZh: "演出9点。建议8:30左右到——没有固定座位。要我帮您叫车吗？", actionHint: "考虑交通", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Is there a dress code?",
            textZh: "太好了。有着装要求吗？",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "Smart casual is fine. No shorts or flip-flops. It's a classy venue but not overly formal. I'll also book a table at a nearby Italian restaurant for before the show — say, 7 PM? That way you can have dinner first.",
            textZh: "商务休闲装就行。不要短裤和人字拖。场地很有格调但不会太正式。我还可以帮您在附近的意大利餐厅订个桌，演出前吃——比如7点？这样可以先吃晚餐。",
            keyPhrases: [
              { en: "smart casual", zh: "商务休闲（着装风格）" },
              { en: "dress code", zh: "着装要求" },
              { en: "classy venue", zh: "有格调的场所" },
              { en: "flip-flops", zh: "人字拖" },
            ],
            culturalNote: "Smart casual 指介于正装和休闲之间的着装，一般指有领衬衫配长裤和皮鞋。",
            alternativeExpressions: [
              { textEn: "Just dress nice-casual — no shorts or sandals. It's a cool place but nothing too fancy. Oh, and want me to book dinner nearby beforehand? Say 7?", textZh: "穿休闲正装就行——别穿短裤和凉鞋。地方很酷但不用太正式。对了，要我先帮您订个附近的晚餐吗？比如7点？", actionHint: "考虑晚餐安排", frequency: "common" },
              { textEn: "Smart casual is all you need. Nice pants, collared shirt, that kind of thing. I can also set up dinner before the show if you'd like.", textZh: "穿商务休闲就行。好裤子、有领衬衫那种。演出前要不要我帮您安排个晚餐？", actionHint: "决定是否加晚餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a wonderful idea. You really know how to plan an evening!",
            textZh: "太棒的主意了。你真会安排！",
          },
          {
            speaker: "them",
            role: "礼宾",
            textEn: "That's what I'm here for! So to confirm: dinner at 7 PM at Trattoria Roma, taxi at 8:15, and two tickets for the 9 PM show at Blue Note. Everything charged to your room. Have a wonderful evening!",
            textZh: "这就是我的工作！确认一下：7点在Trattoria Roma吃晚餐，8:15出租车，9点Blue Note两张票。全部挂房间账。祝您有个美好的夜晚！",
            keyPhrases: [
              { en: "to confirm", zh: "确认一下" },
              { en: "charged to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              { textEn: "Let me recap: dinner at 7, cab at 8:15, show at 9. All on the room. You're going to have an amazing night!", textZh: "我总结一下：7点晚餐，8:15出租车，9点演出。全挂房间账。今晚一定很棒！", actionHint: "确认无误出发", frequency: "common" },
              { textEn: "So to sum up — Trattoria Roma at 7, taxi at quarter past 8, Blue Note at 9. Everything goes on your room. Enjoy!", textZh: "总结一下——7点Trattoria Roma，8:15出租车，9点Blue Note。全部挂房间账。玩得开心！", actionHint: "准备出门", frequency: "common" },
            ],
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
            textEn: "Hi, I was originally checking out tomorrow, but I'd like to extend my stay by two more nights. Is that possible?",
            textZh: "你好，我原本明天退房，但想再多住两晚。可以吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check availability... Yes, your current room is available for two more nights. Would you like to keep the same room?",
            textZh: "让我查一下空房情况……可以的，您现在的房间还能再住两晚。您想继续住这间吗？",
            keyPhrases: [
              { en: "extend my stay", zh: "延长住宿" },
              { en: "check availability", zh: "查空房" },
              { en: "keep the same room", zh: "继续住这间" },
            ],
            vocabNotes: {
              "extend": {
                meaningInContext: "在这里指延长住宿时间",
                similarUsage: "类似用法：Can I extend my visa?",
              },
            },
            alternativeExpressions: [
              { textEn: "Let me see... Good news, we can accommodate you for two more nights in your current room.", textZh: "我看看……好消息，您的房间可以再住两晚。", actionHint: "确认延住", frequency: "common" },
              { textEn: "I'm afraid your room is booked from tomorrow, but I can offer you a different room.", textZh: "抱歉您的房间明天起已经被订了，但我可以给您安排另一间。", actionHint: "考虑接受换房", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd like to stay in the same room. Will the rate be the same?",
            textZh: "好的，我想继续住这间。价格一样吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The rate for walk-in extensions is $165 per night, which is slightly higher than your original booking rate of $150. However, since you're extending your stay, I can offer you a 10% loyalty discount — that brings it to $148.50 per night.",
            textZh: "延住的价格是每晚165美元，比您原来的预订价150美元稍高。不过因为您是延住，我可以给您九折优惠——每晚148.50美元。",
            keyPhrases: [
              { en: "walk-in extensions", zh: "现场延住" },
              { en: "original booking rate", zh: "原始预订价" },
              { en: "loyalty discount", zh: "忠诚/老客折扣" },
            ],
            alternativeExpressions: [
              { textEn: "The walk-in rate is 165 a night — a bit more than your booking price. But since you're extending, I can give you 10% off, so it's actually $148.50.", textZh: "现场价每晚165——比您的预订价稍高。不过延住的话我可以给您打九折，实际148.50。", actionHint: "考虑是否接受", frequency: "common" },
              { textEn: "Normally it'd be 165, but I'll throw in a loyalty discount — brings it down to 148.50, even less than your original rate.", textZh: "正常是165，但我给您一个老客折扣——降到148.50，比您原来的价格还低。", actionHint: "很划算可以接受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's even better than my original rate! I'll take it. Do I need to pay now?",
            textZh: "比原来还便宜！我要了。需要现在付吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You can settle everything at checkout. I'll update your reservation to check out on March 17th instead. Your key cards will continue to work. Shall I extend the breakfast as well?",
            textZh: "退房时一起结就行。我更新您的预订，退房日期改为3月17日。房卡继续有效。早餐也需要延续吗？",
            keyPhrases: [
              { en: "settle everything at checkout", zh: "退房时一起结算" },
              { en: "update your reservation", zh: "更新预订" },
              { en: "continue to work", zh: "继续有效" },
            ],
            alternativeExpressions: [
              { textEn: "You can pay everything when you check out. I'll change your checkout to the 17th. Your keys still work. Want breakfast for the extra days too?", textZh: "退房时一起付就行。我把退房日期改到17号。钥匙还能用。额外的几天也要早餐吗？", actionHint: "决定是否加早餐", frequency: "common" },
              { textEn: "No need to pay now — it all goes on the final bill. I'm updating your reservation through the 17th. Cards will keep working. Breakfast too?", textZh: "现在不用付——都算在最后的账单里。我更新预订到17号。房卡继续有效。早餐也续上？", actionHint: "确认早餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please keep the breakfast. Thank you for making this so easy.",
            textZh: "好的，早餐继续保留。谢谢你让这一切这么简单。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "My pleasure! Your new checkout date is March 17th at 11 AM. If you need anything else during your extended stay, just let us know.",
            textZh: "不客气！新的退房日期是3月17日上午11点。延住期间有任何需要随时告诉我们。",
            keyPhrases: [
              { en: "new checkout date", zh: "新的退房日期" },
              { en: "extended stay", zh: "延住期间" },
            ],
            alternativeExpressions: [
              { textEn: "You're all set! New checkout is March 17th at 11. If you need anything the next couple days, just let us know.", textZh: "都搞定了！新退房日期是3月17号11点。接下来几天有什么需要随时说。", actionHint: "继续享受住宿", frequency: "common" },
              { textEn: "Done! Checkout is now the 17th. Enjoy the extra time and don't hesitate to reach out if you need anything.", textZh: "好了！退房改到17号了。好好享受多出来的时间，有事随时联系。", actionHint: "放心住下", frequency: "common" },
            ],
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
            textEn: "Good morning. I'd like to change my room if possible. The room I'm in faces the street and the traffic noise is quite loud, especially in the morning.",
            textZh: "早上好。如果可以的话，我想换个房间。我现在的房间朝街，车流噪音很大，尤其是早上。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about the noise. Let me see what's available... I have a room on the 15th floor facing the courtyard. It's much quieter. Same room type — would that work for you?",
            textZh: "很抱歉噪音问题。让我看看有什么空房……15楼有一间朝庭院的。安静很多。同样的房型——可以吗？",
            keyPhrases: [
              { en: "facing the courtyard", zh: "朝庭院的" },
              { en: "same room type", zh: "同样的房型" },
              { en: "traffic noise", zh: "车流噪音" },
            ],
            alternativeExpressions: [
              { textEn: "I understand. We have a quieter room available on a higher floor. Want me to check the details?", textZh: "我理解。高层有一间更安静的空房。要我查查具体信息吗？", actionHint: "确认是否接受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. Will there be any extra charge for the room change?",
            textZh: "听起来很好。换房需要额外收费吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No extra charge at all since it's the same room type. If you'd like, I could also show you a corner room with a better view for an additional $25 per night.",
            textZh: "同样的房型完全不加收。如果您想看看，还有一间转角房景观更好，每晚多25美元。",
            keyPhrases: [
              { en: "no extra charge", zh: "不额外收费" },
              { en: "corner room", zh: "转角房" },
              { en: "better view", zh: "更好的景观" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Same room type, so no extra cost. But if you want, there's a corner room with a nicer view for 25 more a night.", textZh: "同样房型不加钱。不过如果您想要的话，有个转角房景观更好，每晚多25。", actionHint: "考虑是否升级", frequency: "common" },
              { textEn: "No charge for the switch since it's the same type. There is a corner room available too — better view, $25 extra per night.", textZh: "同房型换房不加收。还有一间转角房——景观更好，每晚多25美元。", actionHint: "做出选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The courtyard room is fine. When can I move?",
            textZh: "朝庭院那间就行。什么时候可以搬？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The room is ready now. I'll prepare new key cards for you. Would you like help moving your luggage, or would you prefer to do it yourself?",
            textZh: "房间现在就好了。我给您做新房卡。需要帮您搬行李吗，还是您自己来？",
            keyPhrases: [
              { en: "ready now", zh: "现在就好了" },
              { en: "prepare new key cards", zh: "做新房卡" },
              { en: "help moving", zh: "帮忙搬" },
            ],
            alternativeExpressions: [
              { textEn: "It's ready to go right now. I'll make you new keys. Need help with your bags, or you good on your own?", textZh: "现在就能搬。我做新钥匙。行李需要帮忙搬吗，还是自己来？", actionHint: "决定是否需要帮忙", frequency: "common" },
              { textEn: "Good news — the room's all set. Let me get you new key cards. Want me to send someone up for your luggage?", textZh: "好消息——房间都准备好了。我给您做新房卡。要不要派人帮您搬行李？", actionHint: "要求帮忙搬行李", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd appreciate help with the luggage. I have two suitcases and a backpack.",
            textZh: "帮忙搬就太好了。我有两个箱子和一个背包。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll send a porter to your room in 5 minutes. Your new room is 1518. Here are your key cards. The old ones have been deactivated. Is there anything else?",
            textZh: "5分钟内派行李员去您房间。新房间是1518。给您新房卡。旧卡已经停用了。还有其他需要吗？",
            keyPhrases: [
              { en: "porter", zh: "行李员" },
              { en: "deactivated", zh: "停用了" },
            ],
            vocabNotes: {
              "porter": {
                meaningInContext: "在酒店里，porter 指帮客人搬行李的服务员",
                similarUsage: "类似用法：The porter will carry your bags.",
              },
            },
            alternativeExpressions: [
              { textEn: "I'll have someone up in 5 to help with your bags. You're moving to 1518. Here are the new keys — the old ones won't work anymore.", textZh: "5分钟内有人来帮您搬行李。新房间1518。给您新钥匙——旧的已经失效了。", actionHint: "拿好新房卡", frequency: "common" },
              { textEn: "A porter will be right up. New room is 1518 — here are your keys. I've deactivated the old ones. Anything else?", textZh: "行李员马上来。新房间1518——给您钥匙。旧卡已停用。还有别的吗？", actionHint: "准备搬家", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for being so accommodating.",
            textZh: "没有了。谢谢你这么配合。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It's our pleasure. We want to make sure you're comfortable. Enjoy your new room, and please let us know if there's anything else we can do!",
            textZh: "这是我们应该做的。我们希望确保您住得舒适。好好享受新房间，有任何需要随时告诉我们！",
            keyPhrases: [
              { en: "accommodating", zh: "配合的/通融的" },
              { en: "make sure you're comfortable", zh: "确保您住得舒适" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! We want you to be comfortable. Enjoy the new room and let us know if you need anything!", textZh: "很乐意帮忙！希望您住得舒服。好好享受新房间，有事随时找我们！", actionHint: "搬入新房间", frequency: "common" },
              { textEn: "Of course! Your comfort is our priority. Hope you love the new room — just give us a shout if you need anything.", textZh: "当然！您的舒适是我们的首要任务。希望您喜欢新房间——有事喊一声就行。", actionHint: "安心入住", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Welcome! We offer a variety of treatments. Our most popular options are the Swedish massage, deep tissue massage, hot stone therapy, and aromatherapy. We also have facials, body scrubs, and couples' packages.",
            textZh: "欢迎！我们提供多种项目。最受欢迎的有瑞典式按摩、深层组织按摩、热石疗法和芳香疗法。我们还有面部护理、身体磨砂和情侣套餐。",
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
              { textEn: "We have everything from relaxation massages to therapeutic treatments. Would you like to see our menu?", textZh: "从放松按摩到理疗项目我们都有。要看看我们的菜单吗？", actionHint: "要求看菜单", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the difference between Swedish and deep tissue massage?",
            textZh: "瑞典式按摩和深层按摩有什么区别？",
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Swedish massage uses long, flowing strokes and lighter pressure — it's great for relaxation. Deep tissue focuses on specific muscle groups with firmer pressure to release tension and knots. If you've been traveling and feel stiff, I'd recommend the deep tissue.",
            textZh: "瑞典式按摩用长的、流畅的推法，力度较轻——非常适合放松。深层按摩针对特定肌肉群，力度更大，可以释放紧张和结节。如果您旅途后感觉僵硬，我推荐深层按摩。",
            keyPhrases: [
              { en: "long, flowing strokes", zh: "流畅的推法" },
              { en: "lighter pressure", zh: "较轻力度" },
              { en: "firmer pressure", zh: "更大力度" },
              { en: "tension and knots", zh: "紧张和结节" },
              { en: "stiff", zh: "僵硬的" },
            ],
            alternativeExpressions: [
              { textEn: "Swedish is gentle and relaxing — long smooth strokes. Deep tissue really digs into tight spots. If you're stiff from traveling, go with deep tissue.", textZh: "瑞典式轻柔放松——长而流畅的手法。深层按摩深入紧绷的地方。旅途后觉得僵就选深层。", actionHint: "选择按摩类型", frequency: "common" },
              { textEn: "Think of Swedish as pure relaxation, deep tissue as therapeutic. After a long trip, most guests prefer deep tissue.", textZh: "瑞典式就是纯放松，深层是理疗性的。长途旅行后大多数客人选深层。", actionHint: "根据需求选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the deep tissue massage. How long are the sessions?",
            textZh: "我选深层按摩吧。做多长时间？",
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "We have 60-minute and 90-minute sessions. The 60-minute is $120 and the 90-minute is $170. Hotel guests receive a 15% discount.",
            textZh: "有60分钟和90分钟的。60分钟120美元，90分钟170美元。住店客人享受八五折优惠。",
            keyPhrases: [
              { en: "sessions", zh: "疗程" },
              { en: "hotel guests", zh: "住店客人" },
              { en: "discount", zh: "折扣" },
            ],
            alternativeExpressions: [
              { textEn: "We do 60 or 90 minutes. 60's $120, 90's $170. As a hotel guest, you get 15% off.", textZh: "有60分钟和90分钟。60分钟120，90分钟170。住店客人打八五折。", actionHint: "选择时长", frequency: "common" },
              { textEn: "One hour or an hour and a half. With the hotel guest discount, it's a pretty good deal.", textZh: "一小时或一个半小时。住店客人有折扣，挺划算的。", actionHint: "算算折扣后价格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "The 90-minute deep tissue with the hotel discount, please. Do you have anything available today?",
            textZh: "90分钟深层按摩，用住店折扣。今天有空位吗？",
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Let me check... We have an opening at 3 PM and another at 5:30 PM. Which would you prefer? Also, do you have a preference for a male or female therapist?",
            textZh: "让我看看……下午3点和5:30有空位。您选哪个？另外，您对理疗师有性别偏好吗？",
            keyPhrases: [
              { en: "opening", zh: "空位/空档" },
              { en: "therapist", zh: "理疗师" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check the schedule... We've got 3 PM or 5:30. Which works better? And do you have a preference for male or female therapist?", textZh: "我看看排程……3点或5:30有空。哪个方便？对理疗师性别有偏好吗？", actionHint: "选择时间", frequency: "common" },
              { textEn: "We have two slots open today — 3 and 5:30. Any preference on the therapist?", textZh: "今天有两个空位——3点和5:30。对理疗师有要求吗？", actionHint: "确认时间和偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "3 PM works. No preference on the therapist. Should I arrive early?",
            textZh: "3点可以。理疗师无所谓。我需要提前到吗？",
          },
          {
            speaker: "them",
            role: "SPA前台",
            textEn: "Please arrive 15 minutes early to change and relax in our lounge area. We provide robes, slippers, and lockers. You can also use the sauna and steam room before your treatment — they're included. Would you like to charge it to your room?",
            textZh: "请提前15分钟到，换衣服并在我们的休息区放松。我们提供浴袍、拖鞋和储物柜。按摩前您也可以使用桑拿和蒸汽房——都包含在内。要挂房间账吗？",
            keyPhrases: [
              { en: "robes", zh: "浴袍" },
              { en: "slippers", zh: "拖鞋" },
              { en: "lockers", zh: "储物柜" },
              { en: "sauna", zh: "桑拿" },
              { en: "steam room", zh: "蒸汽房" },
              { en: "charge it to your room", zh: "挂房间账" },
            ],
            alternativeExpressions: [
              { textEn: "Come 15 minutes early so you can change and relax. We've got robes, slippers, lockers — plus the sauna and steam room are free before your appointment. Room charge?", textZh: "提前15分钟来换衣服放松。浴袍、拖鞋、储物柜都有——按摩前桑拿和蒸汽房免费用。挂房间账吗？", actionHint: "确认付款方式", frequency: "common" },
              { textEn: "Get here a bit early — you can use the sauna and steam room before your treatment, it's included. Everything's provided. Should I put it on your room?", textZh: "早点来——按摩前可以用桑拿和蒸汽房，都包含在内。东西都有。挂房间账吗？", actionHint: "提前到享受设施", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please charge it to room 1208. Thank you!",
            textZh: "好的，挂1208房间。谢谢！",
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
            textEn: "Welcome. I'm Lisa, and I'll be your therapist today. Before we start, do you have any injuries, allergies, or areas you'd like me to focus on?",
            textZh: "欢迎。我是Lisa，今天由我为您服务。开始之前，您有任何伤病、过敏或者需要重点关注的部位吗？",
            keyPhrases: [
              { en: "injuries", zh: "伤病" },
              { en: "allergies", zh: "过敏" },
              { en: "focus on", zh: "重点关注" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! I'm Lisa, your therapist. Before we get started — any injuries or allergies I should know about? Any areas that need extra attention?", textZh: "你好！我是Lisa，今天给您做。开始之前——有什么伤病或过敏需要告诉我吗？哪里需要重点按？", actionHint: "说明身体状况", frequency: "common" },
              { textEn: "Welcome! I'll be taking care of you today. Any problem areas or things I should avoid?", textZh: "欢迎！今天由我为您服务。有什么问题部位或者需要避开的地方吗？", actionHint: "告知注意事项", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My shoulders and lower back are really tight from the flight. Could you focus on those areas?",
            textZh: "我肩膀和腰因为坐飞机非常紧。能重点按那些部位吗？",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "Absolutely. I'll spend extra time on your shoulders and lower back. I'll start with medium pressure — please let me know anytime if you'd like more or less pressure. Are you allergic to any essential oils?",
            textZh: "没问题。我会在肩膀和腰部多花时间。我先用中等力度开始——过程中随时告诉我您想要大一点还是小一点的力度。您对精油过敏吗？",
            keyPhrases: [
              { en: "medium pressure", zh: "中等力度" },
              { en: "more or less pressure", zh: "大一点或小一点的力度" },
              { en: "essential oils", zh: "精油" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. I'll focus on your shoulders and lower back. I'll start medium and you tell me if you want it harder or softer. Any allergies to oils?", textZh: "明白。我重点按肩膀和腰。先中等力度，您觉得要重一点或轻一点告诉我。对精油过敏吗？", actionHint: "如实反馈", frequency: "common" },
              { textEn: "No problem, extra time on those areas. I'll start with a moderate pressure — just speak up anytime. Are essential oils okay?", textZh: "没问题，那些部位多花时间。我从中等力度开始——随时说。精油可以吗？", actionHint: "告知偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No allergies. Go ahead.",
            textZh: "不过敏。请开始吧。",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "How's the pressure? Is this comfortable for you?",
            textZh: "力度怎么样？您觉得舒服吗？",
            alternativeExpressions: [
              { textEn: "Is this pressure okay, or would you like me to go deeper?", textZh: "力度可以吗，还是想要再深一点？", actionHint: "如实反馈力度", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you go a bit harder on the shoulders? That spot is really knotted up.",
            textZh: "肩膀能再用力一点吗？那个位置真的很多结。",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "Sure, I'll apply more pressure there. You have a lot of tension built up. I'll work on these knots gradually. Just breathe deeply and try to relax. Let me know if it becomes too intense.",
            textZh: "好的，那里我加大力度。您积累了很多紧张。我会慢慢处理这些结节。深呼吸尽量放松。如果太疼了告诉我。",
            keyPhrases: [
              { en: "tension built up", zh: "积累的紧张" },
              { en: "work on these knots", zh: "处理结节" },
              { en: "too intense", zh: "太强烈/太疼" },
            ],
            vocabNotes: {
              "knots": {
                meaningInContext: "在这句话里表示：肌肉紧绷形成的硬结（不是绳子的结）",
                similarUsage: "类似用法：I have knots all over my neck.（我脖子到处都是硬结）",
              },
            },
            alternativeExpressions: [
              { textEn: "Going deeper now. You've got a lot of tightness here. I'll work through these knots slowly. Just breathe and let me know if it's too much.", textZh: "加大力度了。这里很紧。我慢慢处理这些硬结。深呼吸，太疼了告诉我。", actionHint: "配合深呼吸", frequency: "common" },
              { textEn: "More pressure coming. There are some serious knots in there. Take slow deep breaths and tell me if it gets too intense.", textZh: "力度加大了。这里结节很严重。慢慢深呼吸，太强烈了告诉我。", actionHint: "放松配合", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. It hurts a little but in a good way.",
            textZh: "刚刚好。有点疼但是那种舒服的疼。",
            culturalNote: "\"Hurts in a good way\" 是做按摩时的常见说法，表示力度到位。",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "That's a good sign — it means the tension is releasing. We're about done. Take your time getting up. There's water on the side table. Make sure to drink plenty of water today to flush out the toxins.",
            textZh: "这是好兆头——说明紧张在释放。我们差不多结束了。慢慢起来。旁边桌上有水。今天要多喝水排毒。",
            keyPhrases: [
              { en: "tension is releasing", zh: "紧张在释放" },
              { en: "take your time", zh: "慢慢来" },
              { en: "flush out the toxins", zh: "排毒" },
            ],
            alternativeExpressions: [
              { textEn: "That means it's working! We're all done. No rush getting up. Drink lots of water today — it helps flush everything out.", textZh: "说明有效果！我们做完了。不用急着起来。今天多喝水——帮助排毒。", actionHint: "慢慢起来多喝水", frequency: "common" },
              { textEn: "That's a good sign. Alright, we're finished. Take it slow getting up and make sure to stay hydrated today.", textZh: "这是好兆头。好了，我们结束了。慢慢起来，今天记得多喝水。", actionHint: "缓慢起身", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That was amazing. Thank you, Lisa. Should I leave the tip at the front desk?",
            textZh: "太棒了。谢谢你，Lisa。小费在前台留吗？",
            culturalNote: "在美国做SPA通常需要给理疗师15-20%的小费。可以现金或加在账单上。",
          },
          {
            speaker: "them",
            role: "理疗师",
            textEn: "Thank you! Yes, you can leave it at the front desk or add it when you sign the bill. I'm glad you enjoyed it. If you feel sore tomorrow, that's completely normal — it will pass by the next day.",
            textZh: "谢谢！是的，可以在前台留或者签账时加上。很高兴您享受了。如果明天感觉酸痛，那完全正常——后天就会好。",
            keyPhrases: [
              { en: "sign the bill", zh: "签账" },
              { en: "feel sore", zh: "感觉酸痛" },
              { en: "completely normal", zh: "完全正常" },
            ],
            alternativeExpressions: [
              { textEn: "Thank you! You can add a tip when you sign at the front. Don't worry if you're a bit sore tomorrow — totally normal after deep tissue.", textZh: "谢谢！前台签单时可以加小费。明天要是有点酸别担心——深层按摩后完全正常。", actionHint: "去前台签账", frequency: "common" },
              { textEn: "My pleasure! Tip can go on the bill at the desk. If you feel achy tomorrow, that's just the muscles letting go — it'll pass.", textZh: "不客气！小费可以加到前台的账单上。明天要是觉得酸，那是肌肉在放松——很快就好。", actionHint: "了解按摩后反应", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The pool is open from 7 AM to 10 PM daily. The hot tub closes at 9 PM. Please note that the pool area is for hotel guests only — you'll need your room key to access it.",
            textZh: "游泳池每天早上7点到晚上10点开放。热水浴缸晚上9点关闭。请注意泳池区域仅限住店客人使用——您需要房卡进入。",
            keyPhrases: [
              { en: "pool hours", zh: "泳池开放时间" },
              { en: "hot tub", zh: "热水浴缸/按摩浴缸" },
              { en: "room key", zh: "房卡" },
            ],
            alternativeExpressions: [
              { textEn: "Pool's open 7 to 10. You just need to swipe your key card at the gate.", textZh: "泳池7点到10点开放。在门口刷一下房卡就行。", actionHint: "带好房卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you provide pool towels, or should I bring the ones from my room?",
            textZh: "你们提供泳池毛巾吗，还是我自己从房间带？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have pool towels available at the towel station by the pool. Just leave your used towels in the bin when you're done. Please don't take the room towels to the pool — the pool towels are thicker and more absorbent.",
            textZh: "泳池旁边的毛巾站有泳池专用毛巾。用完放到回收箱里就行。请不要把房间毛巾带到泳池——泳池毛巾更厚更吸水。",
            keyPhrases: [
              { en: "towel station", zh: "毛巾站" },
              { en: "bin", zh: "回收箱" },
              { en: "absorbent", zh: "吸水的" },
            ],
            alternativeExpressions: [
              { textEn: "Pool towels are right by the pool — just grab one from the stand. Toss the used ones in the basket when you're done. Please don't bring room towels down.", textZh: "泳池毛巾就在泳池旁边——从架子上拿就行。用完放篮子里。请不要把房间毛巾带下来。", actionHint: "去拿泳池毛巾", frequency: "common" },
              { textEn: "We've got towels poolside — no need to bring your own. Just leave them in the return bin after.", textZh: "泳池边有毛巾——不用自己带。用完放回收箱里就行。", actionHint: "直接去泳池", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a lifeguard on duty?",
            textZh: "有救生员值班吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A lifeguard is on duty from 9 AM to 6 PM. Outside those hours, you swim at your own risk. We also ask that children under 12 be accompanied by an adult at all times.",
            textZh: "救生员值班时间是上午9点到下午6点。其他时间游泳需自行负责。我们还要求12岁以下儿童必须有成人陪同。",
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
              { textEn: "There's a lifeguard from 9 to 6. After that, swim at your own risk. Kids under 12 need an adult with them.", textZh: "9点到6点有救生员。之后游泳自己负责。12岁以下小孩必须有大人陪。", actionHint: "注意安全时段", frequency: "common" },
              { textEn: "Lifeguard's on from 9 AM to 6 PM. After hours there's no supervision, so just be careful. And kids need a parent around.", textZh: "救生员上午9到下午6在。之后没人看着，注意安全。小朋友需要家长在旁边。", actionHint: "了解安全规定", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I order food and drinks by the pool?",
            textZh: "可以在泳池边点餐和饮料吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes! Our poolside bar is open from 11 AM to 8 PM. You can order cocktails, snacks, and light meals. Just flag down one of the servers or pick up the phone on the deck to order. Everything can be charged to your room.",
            textZh: "可以！泳池边的酒吧上午11点到晚上8点营业。可以点鸡尾酒、小吃和简餐。招呼服务员或者拿起露台上的电话就可以点单。所有消费可以挂房间账。",
            keyPhrases: [
              { en: "poolside bar", zh: "泳池边酒吧" },
              { en: "flag down", zh: "招呼/拦住" },
              { en: "deck", zh: "露台" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! The pool bar is open 11 to 8. Just wave down a server or grab the phone on the deck. Everything goes on your room.", textZh: "可以！泳池酒吧11点到8点营业。招呼服务员或者用露台上的电话。都可以挂房间账。", actionHint: "到了直接点", frequency: "common" },
              { textEn: "Absolutely! There's a poolside bar with drinks, snacks, and light bites. You can charge it all to your room.", textZh: "当然！泳池边有酒吧，有饮品、小吃和简餐。全部可以挂房间账。", actionHint: "享受泳池服务", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. One last question — are there lounge chairs available, or do I need to reserve one?",
            textZh: "听起来不错。最后一个问题——有躺椅可以用吗，还是需要预约？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Lounge chairs are first-come, first-served. On weekends it can get busy, so I'd recommend going early if you want a good spot. We also have private cabanas you can rent for $50 a day — they come with extra shade, a mini-fridge, and complimentary fruit.",
            textZh: "躺椅先到先得。周末比较热门，如果想要好位置建议早去。我们还有私人凉棚可以租，每天50美元——有遮阳、迷你冰箱和免费水果。",
            keyPhrases: [
              { en: "first-come, first-served", zh: "先到先得" },
              { en: "cabanas", zh: "凉棚/池畔小屋" },
              { en: "complimentary", zh: "免费的" },
            ],
            alternativeExpressions: [
              { textEn: "Chairs are first come, first served — weekends get busy so go early. We also rent cabanas for 50 bucks a day if you want some privacy.", textZh: "躺椅先到先得——周末人多建议早去。也可以租凉棚，每天50美元，比较私密。", actionHint: "考虑租凉棚", frequency: "common" },
              { textEn: "Just grab any open chair. On weekends they go fast. If you want a VIP setup, we have cabanas with shade and a mini-fridge for $50.", textZh: "有空的椅子直接坐就行。周末抢得快。想要VIP待遇的话有凉棚，带遮阳和冰箱，50美元。", actionHint: "早点去占位子", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The fitness center is on the 3rd floor, Room 302. It's open 24 hours. We have treadmills, ellipticals, stationary bikes, free weights, and a cable machine. There's also a yoga mat area.",
            textZh: "健身中心在3楼302室。24小时开放。有跑步机、椭圆机、固定自行车、自由重量器材和缆绳机。还有瑜伽垫区域。",
            keyPhrases: [
              { en: "fitness center", zh: "健身中心" },
              { en: "treadmills", zh: "跑步机" },
              { en: "ellipticals", zh: "椭圆机" },
              { en: "stationary bikes", zh: "固定自行车" },
              { en: "free weights", zh: "自由重量器材" },
              { en: "cable machine", zh: "缆绳机" },
            ],
            alternativeExpressions: [
              { textEn: "Third floor, room 302. It's open 24/7. We've got treadmills, bikes, ellipticals, free weights, cables — the works. There's a yoga area too.", textZh: "3楼302室。24小时开放。跑步机、自行车、椭圆机、自由重量、缆绳机——什么都有。也有瑜伽区。", actionHint: "记住位置", frequency: "common" },
              { textEn: "It's right on the 3rd floor, open around the clock. Pretty well equipped — cardio machines, weights, and a stretching area.", textZh: "就在3楼，全天开放。设备很齐全——有氧器材、重量训练和拉伸区。", actionHint: "去看看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you offer any fitness classes?",
            textZh: "你们有健身课程吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have morning yoga at 7 AM on weekdays and a HIIT class at 6 PM on Tuesdays and Thursdays. Both are complimentary for hotel guests. You can sign up at the front desk or through the hotel app.",
            textZh: "工作日早上7点有晨间瑜伽，周二和周四下午6点有HIIT课程。住店客人都是免费的。可以在前台或酒店App上报名。",
            keyPhrases: [
              { en: "fitness classes", zh: "健身课程" },
              { en: "HIIT class", zh: "HIIT课程（高强度间歇训练）" },
              { en: "sign up", zh: "报名" },
            ],
            vocabNotes: {
              "HIIT": {
                meaningInContext: "在这句话里表示：High-Intensity Interval Training，高强度间歇训练，短时间内交替进行高强度运动和休息",
                similarUsage: "类似用法：The HIIT class is only 30 minutes but very intense.（HIIT课只有30分钟但强度很大）",
              },
            },
            alternativeExpressions: [
              { textEn: "We do yoga every weekday morning at 7 and HIIT on Tuesdays and Thursdays at 6 PM. Both free for guests. Just sign up at the desk or on the app.", textZh: "工作日每天早上7点有瑜伽，周二周四下午6点有HIIT。住客都免费。前台或App报名。", actionHint: "选择感兴趣的课", frequency: "common" },
              { textEn: "There's morning yoga at 7 on weekdays and a HIIT class twice a week. Totally free for hotel guests. Want to sign up?", textZh: "工作日早上7点有晨间瑜伽，一周两次HIIT课。住店客人完全免费。要报名吗？", actionHint: "决定是否参加", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like to sign up for the yoga class tomorrow morning. Also, is there a personal trainer available?",
            textZh: "我想报名明天早上的瑜伽课。另外，有私人教练吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I've put you down for tomorrow's yoga. As for personal training, yes, we have two certified trainers on staff. A one-hour session is $80. Would you like me to book one?",
            textZh: "已经帮您报了明天的瑜伽。私人教练方面，我们有两位持证教练。一小时80美元。要帮您预约吗？",
            keyPhrases: [
              { en: "put you down for", zh: "帮您报名" },
              { en: "personal training", zh: "私人教练" },
              { en: "certified trainers", zh: "持证教练" },
            ],
            alternativeExpressions: [
              { textEn: "Done — you're signed up for yoga tomorrow. And yes, we have personal trainers. It's 80 bucks for an hour. Want me to book one?", textZh: "好了——帮您报了明天的瑜伽。私人教练也有，一小时80美元。要预约吗？", actionHint: "考虑是否请教练", frequency: "common" },
              { textEn: "You're all set for tomorrow's yoga. As for a trainer, we've got two on staff — $80 an hour. Interested?", textZh: "明天瑜伽报好了。教练的话我们有两位——每小时80美元。有兴趣吗？", actionHint: "决定是否需要", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not this time, but thanks. Do I need to bring my own workout clothes and shoes?",
            textZh: "这次不用了，谢谢。我需要自己带运动衣和鞋子吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, please wear athletic shoes and appropriate workout clothing. We do provide fresh towels, water bottles, and earphones if you need them. There are also changing rooms with showers and complimentary toiletries.",
            textZh: "是的，请穿运动鞋和合适的运动服。我们提供干净毛巾、水瓶和耳机。也有带淋浴的更衣室和免费洗漱用品。",
            keyPhrases: [
              { en: "athletic shoes", zh: "运动鞋" },
              { en: "changing rooms", zh: "更衣室" },
              { en: "toiletries", zh: "洗漱用品" },
            ],
            alternativeExpressions: [
              { textEn: "Bring your workout clothes and sneakers. We've got towels, water, and earbuds if you need them. There are showers and changing rooms too.", textZh: "带运动服和运动鞋来就行。毛巾、水和耳机我们都有。也有淋浴和更衣室。", actionHint: "带好运动装备", frequency: "common" },
              { textEn: "Just wear something comfortable and proper shoes. Everything else is provided — towels, water bottles, even earphones.", textZh: "穿舒适的衣服和合适的鞋就行。其他都有——毛巾、水瓶，甚至耳机。", actionHint: "准备好就去", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Are there any rules I should be aware of?",
            textZh: "太好了。有什么规定我需要注意的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Just a few: please wipe down equipment after use, re-rack your weights, and keep the volume low on personal devices. During late hours, from 10 PM to 6 AM, we ask guests to be mindful of noise since rooms are nearby.",
            textZh: "几条：用完器材请擦拭，重量器材放回原处，个人设备请保持低音量。深夜时段（晚上10点到早上6点），请注意噪音，因为旁边就是客房。",
            keyPhrases: [
              { en: "wipe down", zh: "擦拭" },
              { en: "re-rack your weights", zh: "把重量器材放回" },
              { en: "mindful of noise", zh: "注意噪音" },
            ],
            alternativeExpressions: [
              { textEn: "Just the basics: wipe the machines after use, put your weights back, and keep it quiet after 10 PM since the rooms are close by.", textZh: "就是基本的：用完器材擦一下，器材放回去，10点后保持安静因为旁边就是客房。", actionHint: "遵守规定", frequency: "common" },
              { textEn: "Pretty standard stuff — clean up after yourself, rack your weights, and go easy on the noise late at night.", textZh: "很基本的——用完收拾好，器材放回原处，深夜注意音量就行。", actionHint: "记住规则", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The business center is on the lobby level, just past the elevators on the right. It's open 24 hours. For printing, you can use our computers there or send files to our printer via email.",
            textZh: "商务中心在大堂层，过了电梯右边就是。24小时开放。打印的话，您可以用那里的电脑，也可以通过邮件把文件发送到我们的打印机。",
            keyPhrases: [
              { en: "business center", zh: "商务中心" },
              { en: "lobby level", zh: "大堂层" },
              { en: "send files via email", zh: "通过邮件发送文件" },
            ],
            alternativeExpressions: [
              { textEn: "Just head to the business center next to the lobby. You can print wirelessly from your phone or laptop.", textZh: "去大堂旁边的商务中心就行。可以从手机或笔记本无线打印。", actionHint: "带好设备去商务中心", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does printing cost? I need about 20 pages in color.",
            textZh: "打印多少钱？我需要打大概20页彩色的。",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Black and white is 25 cents per page, and color is 75 cents per page. So 20 color pages would be $15. We can also do double-sided printing to save paper if you'd like.",
            textZh: "黑白每页25美分，彩色每页75美分。所以20页彩色是15美元。如果您需要的话，也可以双面打印节省纸张。",
            keyPhrases: [
              { en: "per page", zh: "每页" },
              { en: "double-sided", zh: "双面" },
            ],
            alternativeExpressions: [
              { textEn: "Black and white is 25 cents a page, color is 75 cents. So 20 color pages would run you $15. Want double-sided to save paper?", textZh: "黑白每页25美分，彩色75美分。20页彩色就是15美元。要双面打印省纸吗？", actionHint: "选择打印方式", frequency: "common" },
              { textEn: "Color printing is 75 cents per page. For 20 pages that'd be 15 dollars. We can do double-sided if you'd like.", textZh: "彩色打印每页75美分。20页就是15美元。需要的话可以双面打印。", actionHint: "确认打印数量", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Single-sided is fine. Can I email the file? What's the printer email address?",
            textZh: "单面就好。可以发邮件吗？打印机的邮箱地址是什么？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Sure, send your file to print@hotel-grand.com. Include your name and room number in the subject line. I'll have it ready for you in about 10 minutes. You can pick it up here at the front desk.",
            textZh: "可以，把文件发到 print@hotel-grand.com。主题里写上您的姓名和房间号。大概10分钟后就好了。可以到前台来取。",
            keyPhrases: [
              { en: "subject line", zh: "主题/标题栏" },
              { en: "pick it up", zh: "来取" },
            ],
            alternativeExpressions: [
              { textEn: "Just email it to print@hotel-grand.com — put your name and room number in the subject. Should be ready in about 10 minutes.", textZh: "发到print@hotel-grand.com就行——主题写上姓名和房间号。大约10分钟好。", actionHint: "发送邮件", frequency: "common" },
              { textEn: "Send the file to our printer email and I'll have it printed for you. Come grab it in about 10 minutes.", textZh: "把文件发到我们的打印邮箱，我帮您打出来。大约10分钟来取。", actionHint: "记住邮箱地址", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you also have a scanner and a fax machine?",
            textZh: "你们还有扫描仪和传真机吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Yes, we have both. Scanning is free — you can scan to email or USB. Faxing is $2 per page for domestic and $5 per page for international. There's also a paper shredder if you need to dispose of sensitive documents.",
            textZh: "都有。扫描免费——可以扫描到邮箱或U盘。传真国内每页2美元，国际每页5美元。还有碎纸机，如果需要销毁敏感文件的话。",
            keyPhrases: [
              { en: "scanner", zh: "扫描仪" },
              { en: "fax machine", zh: "传真机" },
              { en: "paper shredder", zh: "碎纸机" },
              { en: "sensitive documents", zh: "敏感文件" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we've got both. Scanning's free — to email or USB. Faxing is 2 bucks domestic, 5 international. There's a shredder too if you need it.", textZh: "都有。扫描免费——可以发邮箱或存U盘。传真国内2美元，国际5美元。也有碎纸机。", actionHint: "按需使用", frequency: "common" },
              { textEn: "Scanner and fax, both available. Scanning won't cost you anything. Faxing is a couple bucks per page.", textZh: "扫描仪和传真机都有。扫描免费。传真每页几美元。", actionHint: "了解收费", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Can I also borrow a laptop charger? I left mine in the room and I need to work down here.",
            textZh: "好的。能借一个笔记本充电器吗？我把充电器忘在房间了，想在这里工作。",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "We have universal laptop chargers and phone chargers you can borrow. Just leave your room number with us. We also have power strips and adapters available for international plugs.",
            textZh: "我们有通用笔记本充电器和手机充电器可以借。留下房间号就行。我们还有排插和国际插头适配器。",
            keyPhrases: [
              { en: "universal charger", zh: "通用充电器" },
              { en: "power strips", zh: "排插" },
              { en: "adapters", zh: "适配器" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we've got chargers and power strips you can borrow. Just leave your room number. We have international adapters too.", textZh: "有的，充电器和排插都可以借。留下房间号就行。也有国际适配器。", actionHint: "借用充电器", frequency: "common" },
              { textEn: "We have loaners for laptops and phones. Just tell me your room number. Need an international plug adapter too?", textZh: "笔记本和手机充电器都可以借。告诉我房间号就行。还需要国际插头适配器吗？", actionHint: "说明需求", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Let me check. We have three meeting rooms. The small one seats 4, the medium seats 8, and the large one seats 20. How many attendees are you expecting?",
            textZh: "让我查一下。我们有三间会议室。小的坐4人，中的坐8人，大的坐20人。您预计几位与会者？",
            keyPhrases: [
              { en: "meeting rooms", zh: "会议室" },
              { en: "seats", zh: "可坐（几人）" },
              { en: "attendees", zh: "与会者" },
            ],
            alternativeExpressions: [
              { textEn: "We've got three rooms — small fits 4, medium fits 8, large fits 20. How many people are you expecting?", textZh: "我们有三间——小的坐4人，中的坐8人，大的坐20人。您大概几个人？", actionHint: "说明人数", frequency: "common" },
              { textEn: "Let me check... We have rooms for 4, 8, or 20 people. What size do you need?", textZh: "我看看……有4人、8人和20人的会议室。您需要多大的？", actionHint: "选择合适大小", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just 3 people in person, but I also need to set up a video conference with our overseas team.",
            textZh: "现场3个人，但我还需要和海外团队开视频会议。",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "The small meeting room would work perfectly. It's equipped with a 55-inch display, a webcam, speaker system, and high-speed WiFi. It supports Zoom, Teams, and Google Meet. The rate is $50 per hour or $180 for a half day.",
            textZh: "小会议室就很合适。配有55英寸显示屏、摄像头、音响系统和高速WiFi。支持Zoom、Teams和Google Meet。费用是每小时50美元或半天180美元。",
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
              { textEn: "The small room should work. It's got a big screen, webcam, speakers, and fast WiFi. Supports Zoom, Teams, whatever you use. $50 an hour or $180 for half a day.", textZh: "小会议室就够了。有大屏幕、摄像头、音响和快速WiFi。支持Zoom、Teams什么的。每小时50或半天180。", actionHint: "选择计费方式", frequency: "common" },
              { textEn: "Small room's perfect for 3 people plus video. Everything's set up for virtual meetings. It's 50 an hour or 180 for a half day.", textZh: "小会议室3个人加视频刚好。虚拟会议设备都有。每小时50或半天180。", actionHint: "确认预订", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the half-day rate. Can I also get coffee and water set up for the meeting?",
            textZh: "我选半天的。可以帮会议准备咖啡和水吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Absolutely. Our standard refreshment package includes coffee, tea, water, and pastries for $8 per person. We can also arrange lunch if your meeting runs through midday. Would you like me to send you the catering menu?",
            textZh: "当然可以。我们的标准茶歇套餐包括咖啡、茶、水和糕点，每人8美元。如果会议开到中午，我们也可以安排午餐。要我发餐饮菜单给您吗？",
            keyPhrases: [
              { en: "refreshment package", zh: "茶歇套餐" },
              { en: "pastries", zh: "糕点" },
              { en: "catering menu", zh: "餐饮菜单" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We can set up coffee, tea, water, and pastries for 8 bucks a person. If the meeting goes through lunch, I can get food brought in too.", textZh: "当然！可以准备咖啡、茶、水和糕点，每人8美元。如果会开到中午也可以安排午餐。", actionHint: "选择茶歇或午餐", frequency: "common" },
              { textEn: "Of course. The refreshment package is $8 per head — coffee, tea, snacks. Want me to send over the lunch menu as well?", textZh: "没问题。茶歇套餐每人8美元——咖啡、茶、点心。要我发午餐菜单吗？", actionHint: "决定是否需要午餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes please, send it to my email. Also, will there be a technician available in case we have issues with the video setup?",
            textZh: "好的，发到我邮箱。另外，如果视频设备有问题，有技术人员吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Our IT support is available from 8 AM to 6 PM. I'd recommend arriving 15 minutes early to test the equipment. If you run into any issues, just dial extension 300 and someone will come right away.",
            textZh: "我们的IT支持工作时间是早上8点到下午6点。建议提前15分钟到，测试一下设备。如果遇到问题，拨分机300，会有人马上来。",
            keyPhrases: [
              { en: "IT support", zh: "IT支持/技术支持" },
              { en: "test the equipment", zh: "测试设备" },
              { en: "dial extension", zh: "拨分机" },
            ],
            alternativeExpressions: [
              { textEn: "Our tech team is available 8 to 6. I'd get there 15 minutes early to test things out. If anything goes wrong, just dial 300.", textZh: "技术团队8点到6点在。建议提前15分钟去测试设备。有问题拨300就行。", actionHint: "记住分机号", frequency: "common" },
              { textEn: "IT support's on hand from 8 AM to 6 PM. Come early to make sure everything works. Extension 300 if you need help.", textZh: "IT支持早8到晚6在岗。早点来确保一切正常。需要帮忙拨分机300。", actionHint: "提前测试", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get the meeting room bill charged to my company's corporate account?",
            textZh: "会议室费用可以走公司的企业账户吗？",
          },
          {
            speaker: "them",
            role: "商务中心",
            textEn: "Yes, if your company has a corporate account with us, we can bill it directly. Otherwise, I can provide a separate invoice with a detailed breakdown for your expense report. Just let me know what you need.",
            textZh: "可以，如果您公司在我们这里有企业账户，可以直接挂账。否则我可以提供一张单独的发票，附详细明细，方便您报销。您需要哪种方式？",
            keyPhrases: [
              { en: "corporate account", zh: "企业账户" },
              { en: "invoice", zh: "发票" },
              { en: "detailed breakdown", zh: "详细明细" },
              { en: "expense report", zh: "报销单" },
            ],
            alternativeExpressions: [
              { textEn: "If your company has an account with us, I can bill it directly. Otherwise, I'll give you a separate invoice with a full breakdown for your expense report.", textZh: "如果公司有我们的账户可以直接挂账。不然我给您开张单独发票，附详细明细方便报销。", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "We can do corporate billing if your company is set up with us. If not, I'll make sure you get a proper invoice for reimbursement.", textZh: "公司在我们这有账户的话可以直接走企业账。没有的话我给您开正式发票报销用。", actionHint: "确认公司账户", frequency: "common" },
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
            keyPhrases: [
              { en: "valet parking", zh: "代客泊车" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening! Valet or self-park today?", textZh: "晚上好！代客泊车还是自助停车？", actionHint: "选择停车方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. How much is valet parking?",
            textZh: "是的。代客泊车多少钱？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Valet parking is $40 per night for hotel guests, with unlimited in-and-out privileges. I'll give you a claim ticket — just bring it to the front desk or call us when you need your car.",
            textZh: "住店客人代客泊车每晚40美元，不限进出次数。我给您一张取车凭证——需要取车时拿着凭证去前台或打电话给我们。",
            keyPhrases: [
              { en: "per night", zh: "每晚" },
              { en: "in-and-out privileges", zh: "不限进出" },
              { en: "claim ticket", zh: "取车凭证" },
            ],
            vocabNotes: {
              "claim ticket": {
                meaningInContext: "在这句话里表示：取车用的凭证小票，类似寄存凭证",
                similarUsage: "类似用法：Don't lose the claim ticket or it'll take longer to find your car.（别弄丢取车票，不然找车要更久）",
              },
            },
            alternativeExpressions: [
              { textEn: "It's $40 a night. You can come and go as much as you want. Here's your ticket — hang onto it.", textZh: "每晚40美元。随便进出。这是您的凭证——收好。", actionHint: "保管好取车凭证", frequency: "common" },
              { textEn: "For hotel guests it's 40 bucks a night, unlimited in and out. I'll hand you a claim ticket.", textZh: "住客每晚40美元，不限进出次数。我给您一张取车票。", actionHint: "拿好取车票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. I have some bags in the trunk — can you help me with those first?",
            textZh: "好的。后备箱里有一些袋子——能先帮我拿出来吗？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Of course! Let me pop the trunk... I'll get a luggage cart. We'll bring everything to the front desk for you. Is there anything valuable you'd like to keep with you?",
            textZh: "当然！让我打开后备箱……我去拿行李推车。我们会把所有东西送到前台。有什么贵重物品需要自己随身带吗？",
            alternativeExpressions: [
              { textEn: "Sure thing! Trunk's open... let me grab a cart. Anything you wanna keep with you?", textZh: "没问题！后备箱开了……我去拿推车。有什么您想自己拿着的吗？", actionHint: "告诉对方随身带的东西", frequency: "common" },
              { textEn: "Got it! I'll wheel everything inside for you. Just let me know if there's anything fragile in there.", textZh: "收到！我帮您全推进去。告诉我里面有没有易碎的东西。", actionHint: "指出贵重物品自己带", frequency: "common" },
            ],
            keyPhrases: [
              { en: "pop the trunk", zh: "打开后备箱" },
              { en: "luggage cart", zh: "行李推车" },
              { en: "valuable", zh: "贵重物品" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just my laptop bag, I'll take that. How long does it take to get my car when I need it?",
            textZh: "就电脑包，我自己拿。需要用车的话多久能取到？",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Usually about 10 to 15 minutes. If you know in advance, you can call us 15 minutes beforehand and we'll have it waiting for you at the entrance. Here's your claim ticket and the valet phone number.",
            textZh: "通常10到15分钟。如果提前知道的话，可以提前15分钟打电话给我们，车会在入口等您。这是您的取车凭证和泊车服务电话。",
            alternativeExpressions: [
              { textEn: "Give us about 10 minutes. Pro tip — call ahead and your car will be ready when you walk out.", textZh: "给我们大约10分钟。小窍门——提前打电话，出来车就准备好了。", actionHint: "保管好取车凭证和电话", frequency: "common" },
              { textEn: "Anywhere from 10 to 15. Give us a heads-up and we'll have it pulled around before you come down.", textZh: "大概10到15分钟。提前通知我们，下来之前车就停好了。", actionHint: "记住泊车服务电话", frequency: "common" },
            ],
            keyPhrases: [
              { en: "in advance", zh: "提前" },
              { en: "beforehand", zh: "事先" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you. Should I tip now or when I pick up the car?",
            textZh: "好的，谢谢。小费现在给还是取车时给？",
            culturalNote: "在美国，代客泊车通常给2-5美元小费。可以取车时给，也可以存取各给一次。",
          },
          {
            speaker: "them",
            role: "泊车员",
            textEn: "Either is fine! Most guests tip when they pick up the car. Thank you for asking. Enjoy your stay!",
            textZh: "都行！大多数客人取车时给。感谢您的询问。祝您住得愉快！",
            alternativeExpressions: [
              { textEn: "Totally up to you! Most folks tip on pickup. Have a great stay!", textZh: "完全看您！大部分人取车时给。祝住得开心！", actionHint: "取车时记得准备小费", frequency: "common" },
              { textEn: "Either way works. No pressure at all. Welcome to the hotel!", textZh: "怎么都行。完全没压力。欢迎入住！", actionHint: "不必纠结，取车时给即可", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The self-parking garage is behind the hotel. Take the first right after the main entrance. Self-parking is $25 per night, compared to $40 for valet. You'll use your room key to access the garage.",
            textZh: "自助停车场在酒店后面。过了正门第一个右转。自助停车每晚25美元，相比代客泊车的40美元。用房卡进出停车场。",
            alternativeExpressions: [
              { textEn: "Self-park is around back — take a right past the front door. $25 a night. Just swipe your room key.", textZh: "自助停车在后面——过了正门右转。每晚25美元。刷房卡进入。", actionHint: "记住停车场位置和费用", frequency: "common" },
              { textEn: "The garage is right behind the building. $25 versus $40 for valet. Your room key gets you in and out.", textZh: "车库就在楼后面。25美元，代客泊车40。房卡可以进出。", actionHint: "用房卡进出停车场", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we have 6 EV charging stations on Level B1 of the parking garage. They're Tesla and CCS compatible. Charging is complimentary for hotel guests — just plug in and it starts automatically when it detects your car.",
            textZh: "有，停车场B1层有6个电动车充电桩。兼容特斯拉和CCS接口。住店客人免费充电——插上就行，检测到车辆后自动开始充电。",
            keyPhrases: [
              { en: "EV charging stations", zh: "电动车充电桩" },
              { en: "compatible", zh: "兼容的" },
              { en: "plug in", zh: "插上" },
              { en: "automatically", zh: "自动" },
            ],
            alternativeExpressions: [
              { textEn: "We've got Level 2 chargers in the garage. They're free for guests. Just use any open station.", textZh: "车库里有二级充电桩。住客免费。找空的充电位用就行。", actionHint: "去B1层找空充电位", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if all the charging spots are taken?",
            textZh: "如果充电位都满了怎么办？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You can put your name on the waiting list at the front desk. We'll text you when a spot opens up. There's also a public charging station about half a mile from the hotel on Oak Street, if you need a charge urgently.",
            textZh: "可以在前台登记等候名单。有空位时我们会发短信通知您。如果急需充电，酒店半英里外的橡树街也有一个公共充电站。",
            alternativeExpressions: [
              { textEn: "Just leave your name at the desk and we'll text you when one frees up. There's also a public charger down the block if you're in a rush.", textZh: "在前台留个名字，空了发短信通知您。着急的话附近也有公共充电桩。", actionHint: "在前台登记等候", frequency: "common" },
              { textEn: "We can add you to the waitlist. Usually doesn't take too long. Worst case, there's a public charger about half a mile away.", textZh: "我们可以把您加到等候名单。通常不用等太久。最坏情况半英里外有公共充电桩。", actionHint: "登记等候或去附近充电", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our Level 2 chargers add about 25 to 30 miles of range per hour. So for a full charge from low battery, you're looking at about 8 to 10 hours — perfect for an overnight charge. If you need faster charging, there's a DC fast charger at the shopping mall 2 miles away.",
            textZh: "我们的二级充电桩每小时大约增加25到30英里续航。所以从低电量充满大概需要8到10小时——非常适合过夜充电。如果需要快充，两英里外的购物中心有直流快充桩。",
            alternativeExpressions: [
              { textEn: "You'll get about 25-30 miles per hour. Plug in at night, full by morning. Need something faster? There's a DC fast charger at the mall nearby.", textZh: "每小时大约25-30英里。晚上插上早上就满了。要更快的？附近商场有快充。", actionHint: "适合过夜充电", frequency: "common" },
              { textEn: "They're Level 2, so figure 8 to 10 hours for a full charge. Perfect for overnight. There's a fast charger a couple miles away if you need it.", textZh: "二级充电桩，充满大约8到10小时。过夜正好。几英里外有快充。", actionHint: "插上过夜即可", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. The garage has 24-hour security cameras, a security guard on patrol, and key-card-only access. It's well lit and we've never had any incidents. Your car will be perfectly safe.",
            textZh: "绝对安全。车库有24小时监控摄像头、保安巡逻和刷卡进出。灯光充足，从未发生过任何事故。您的车会非常安全。",
            alternativeExpressions: [
              { textEn: "Oh yeah, really safe. Cameras everywhere, guards on patrol, keycard only. Never had any issues.", textZh: "放心，非常安全。到处摄像头，保安巡逻，刷卡进出。没出过问题。", actionHint: "可以放心停车", frequency: "common" },
              { textEn: "Very secure — gated, well-lit, monitored 24/7. Your car will be totally fine.", textZh: "非常安全——有门禁，灯光充足，全天监控。车完全没问题。", actionHint: "放心停车充电", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course! You'll find a laundry bag and a laundry list in your closet. Just fill out the form, put your clothes in the bag, and leave it on your bed or call us to pick it up.",
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
              { textEn: "There's a laundry form in the wardrobe. Fill it in, bag your clothes, and we'll collect them.", textZh: "衣柜里有洗衣表。填好，把衣服装袋，我们会来收。", actionHint: "找到衣柜里的洗衣袋和表格", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does it cost to wash a shirt and a pair of pants?",
            textZh: "洗一件衬衫和一条裤子多少钱？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "A shirt is $6 for regular wash, and pants are $8. Dry cleaning is a bit more — $10 for a shirt and $14 for pants. The price list is on the laundry form.",
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
              { textEn: "Shirts are 6 bucks to wash, pants are 8. Dry cleaning runs a little more — 10 and 14. It's all on the price sheet.", textZh: "衬衫洗6块，裤子8块。干洗贵一点——10块和14块。价格表上都有。", actionHint: "看洗衣单上的价格表", frequency: "common" },
              { textEn: "Regular wash is $6 for a shirt, $8 for pants. Want dry cleaning instead? That's $10 and $14.", textZh: "普通洗衬衫6美元，裤子8美元。要干洗的话，10和14美元。", actionHint: "选择普通洗还是干洗", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "When will I get them back?",
            textZh: "什么时候能拿回来？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Regular service is next-day delivery by 6 PM. If you need it sooner, we have express service — same-day return within 4 hours for an extra 50% charge.",
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
              { textEn: "Standard turnaround is 24 hours. Rush service costs 50% more but you'll have everything back in 4 hours.", textZh: "标准周转时间24小时。加急服务多收50%但4小时就能拿回。", actionHint: "选择普通或加急", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need the express service for two shirts. I have a dinner meeting tonight.",
            textZh: "两件衬衫要加急。我今晚有晚宴。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "No problem. I'll mark those as express. They'll be ready by 5 PM. Would you like them pressed as well? Pressing is included with the express service.",
            textZh: "没问题。我标注为加急。下午5点前送回。需要熨烫吗？加急服务包含熨烫。",
            keyPhrases: [
              { en: "pressed", zh: "熨烫" },
              { en: "included", zh: "包含在内" },
            ],
            vocabNotes: {
              pressed: {
                meaningInContext: "在这里表示用熨斗把衣服熨平整，也叫 ironed",
                similarUsage: "类似用法：Can you have this suit pressed before tomorrow?（能在明天前把这套西装熨好吗？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sure, I'll rush those. You'll have them back by 5. Want them ironed too? It's free with express.", textZh: "好的，给您加急。5点前送回。要熨吗？加急免费包含。", actionHint: "可以免费加熨烫", frequency: "common" },
              { textEn: "Done — marked as express. Back by 5 PM. Pressing comes with the rush service, so we'll iron them too unless you say no.", textZh: "好了——标记加急。下午5点前送回。加急包含熨烫，除非您不需要。", actionHint: "默认包含熨烫", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please press them. Will they be delivered to my room?",
            textZh: "好的，请熨一下。会送到房间吗？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Yes, we'll deliver them on hangers to your room. If you're not in, we'll leave them in your closet. The charge will be added to your room bill.",
            textZh: "是的，我们会用衣架把衣服送到您房间。如果您不在，我们会挂在衣柜里。费用会加到房费账单上。",
            keyPhrases: [
              { en: "on hangers", zh: "用衣架挂着" },
              { en: "room bill", zh: "房费账单" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we'll bring them up on hangers. If you're out, we'll just hang them in your closet. Goes on your room tab.", textZh: "会的，用衣架送上去。如果您不在，就挂衣柜里。费用记到房账上。", actionHint: "不在房间也没关系", frequency: "common" },
              { textEn: "We'll drop them off at your room, all pressed and ready to go. Charges get added to your bill automatically.", textZh: "我们会送到您房间，熨好随时能穿。费用自动加到账单上。", actionHint: "费用会自动记账", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thank you very much.",
            textZh: "好的，非常感谢。",
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
            textEn: "Excuse me, I got my laundry back but there's a problem. One of my shirts has a stain that wasn't there before, and a button is missing.",
            textZh: "不好意思，我拿到洗好的衣服了，但有个问题。一件衬衫上多了一个污渍，还少了一颗扣子。",
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn: "I'm very sorry about that, sir. Let me take a look. Could you show me which shirt it is?",
            textZh: "非常抱歉，先生。让我看看。能给我看是哪件衬衫吗？",
            alternativeExpressions: [
              { textEn: "Oh no, I apologize. Can I see the damage? I'll get this sorted out right away.", textZh: "哎呀，很抱歉。我能看看损坏情况吗？我马上处理。", actionHint: "把有问题的衣服给对方看", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This one. See the stain here on the collar? And this button was definitely there when I sent it down.",
            textZh: "这件。看到领子这里的污渍了吗？而且这颗扣子送下去的时候肯定在的。",
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn: "I can clearly see the issue. I sincerely apologize. We'll re-clean the shirt to remove the stain, and we'll replace the button as well. If the stain can't be removed, we'll compensate you for the full value of the shirt.",
            textZh: "我看到问题了。真诚道歉。我们会重新清洗去除污渍，也会把扣子补上。如果污渍去不掉，我们会按衬衫全价赔偿您。",
            keyPhrases: [
              { en: "re-clean", zh: "重新清洗" },
              { en: "replace the button", zh: "补扣子" },
              { en: "compensate", zh: "赔偿" },
              { en: "full value", zh: "全价" },
            ],
            vocabNotes: {
              compensate: {
                meaningInContext: "在这里表示因为损坏而给予金钱赔偿",
                similarUsage: "类似用法：The airline compensated us for the lost luggage.（航空公司赔偿了我们丢失的行李）",
              },
            },
            alternativeExpressions: [
              { textEn: "Oh I see it. I'm really sorry about that. We'll redo the cleaning and sew the button back on. If the stain won't come out, we'll pay you back for the shirt.", textZh: "我看到了。真的很抱歉。我们会重新洗并把扣子缝回去。如果污渍去不掉，我们赔您衬衫的钱。", actionHint: "说明衬衫的价值", frequency: "common" },
              { textEn: "That's on us. Let us try to fix it — reclean and replace the button. If it's not fixable, full reimbursement, no questions asked.", textZh: "这是我们的问题。让我们修复——重新洗并补扣子。修不好的话全额赔偿，没二话。", actionHint: "可以提出赔偿要求", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is a brand-name shirt and it cost me over $100. I'd appreciate it if you could try to fix it first.",
            textZh: "这是名牌衬衫，花了100多美元。希望你们能先试着修复。",
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn: "Absolutely. I'll personally make sure our best team handles it. We'll have it back to you within 3 hours. I'll also waive all laundry charges on your bill as a gesture of goodwill.",
            textZh: "当然。我会亲自确保我们最好的团队处理。3小时内送回给您。我也会免除您账单上所有的洗衣费用作为诚意。",
            keyPhrases: [
              { en: "personally make sure", zh: "亲自确保" },
              { en: "waive all charges", zh: "免除所有费用" },
              { en: "gesture of goodwill", zh: "善意的表示" },
            ],
            alternativeExpressions: [
              { textEn: "I'll take care of it myself. Give us 3 hours. And I'm comping your entire laundry bill — it's the least we can do.", textZh: "我亲自处理。给我们3小时。所有洗衣费用我全免——这是我们该做的。", actionHint: "同意给对方修复机会", frequency: "common" },
              { textEn: "Leave it with me — our top person will handle it. Should have it back in 3 hours. All laundry charges are on us.", textZh: "交给我——我们最好的人来处理。3小时内送回。所有洗衣费用我们承担。", actionHint: "等待修复结果", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll give you a chance to fix it. But if the stain is still there, I'll need full compensation.",
            textZh: "好吧，给你们一次机会修复。但如果污渍还在，我需要全额赔偿。",
          },
          {
            speaker: "them",
            role: "客房服务主管",
            textEn: "That's completely fair. I'll bring it back myself and if you're not satisfied, we'll process the compensation immediately. Here's my card — please contact me directly if you have any concerns.",
            textZh: "完全合理。我会亲自送回来，如果您不满意，我们马上处理赔偿。这是我的名片——有任何问题请直接联系我。",
            keyPhrases: [
              { en: "process the compensation", zh: "处理赔偿" },
              { en: "contact me directly", zh: "直接联系我" },
            ],
            alternativeExpressions: [
              { textEn: "Totally fair. I'll personally bring it back. If you're not happy, we'll sort out the compensation right then and there. Here's my direct number.", textZh: "完全合理。我亲自送回。如果您不满意，当场处理赔偿。这是我的直线电话。", actionHint: "保留对方联系方式", frequency: "common" },
              { textEn: "Understood. I'll handle it personally and bring it back to you. Worst case, we reimburse the full amount on the spot. Here's my card.", textZh: "明白。我亲自处理送回。最坏情况当场全额赔偿。这是我的名片。", actionHint: "收好名片以备后用", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we do. It's on the 3rd floor, room 302. It's open 24 hours. You'll need quarters for the machines — $2.50 per wash and $2 per dry cycle.",
            textZh: "有的。在3楼302室。24小时开放。机器需要投硬币——洗衣每次2.5美元，烘干每次2美元。",
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
              { textEn: "Sure — there's a coin-op laundry on the third floor. It's always open. Washers are $2.50, dryers $2.", textZh: "有的——三楼有投币洗衣房。全天开放。洗衣机2.5美元，烘干机2美元。", actionHint: "准备硬币去三楼", frequency: "common" },
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "There's a change machine right next to the laundry room. It takes $1, $5, and $10 bills. I can also give you some quarters here at the front desk if you'd like.",
            textZh: "洗衣房旁边有换币机。接受1美元、5美元和10美元纸币。您也可以在前台这里跟我换硬币。",
            keyPhrases: [
              { en: "change machine", zh: "换币机" },
              { en: "bills", zh: "纸币" },
            ],
            alternativeExpressions: [
              { textEn: "There's a bill changer right outside the laundry room. Or I can break a bill for you right here if you want.", textZh: "洗衣房外面有换币机。或者我现在就帮您换零钱也行。", actionHint: "在前台或换币机换硬币", frequency: "common" },
              { textEn: "We've got a coin machine next door to the laundry. Takes ones, fives, and tens. I can also make change for you here.", textZh: "洗衣房隔壁有投币机。接受1美元、5美元和10美元。我这里也可以换。", actionHint: "选择换币方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get $10 in quarters, please? Also, is detergent provided?",
            textZh: "请给我换10美元的硬币。另外，提供洗衣液吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Here's $10 in quarters. There's a vending machine in the laundry room that sells single-use detergent pods for $1.50 each. We also have fabric softener and dryer sheets available.",
            textZh: "给您10美元的硬币。洗衣房里有自动贩卖机，卖单次用洗衣凝珠，每个1.5美元。还有柔顺剂和烘干纸。",
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
              { textEn: "Here you go. There's a little vending machine in there for detergent — a buck fifty a pod. They've got softener and dryer sheets too.", textZh: "给您。洗衣房里有个小贩卖机卖洗衣液——每个一块五。还有柔顺剂和烘干纸。", actionHint: "去贩卖机买洗衣凝珠", frequency: "common" },
              { textEn: "Ten bucks in quarters, there you go. Soap pods are in the vending machine by the washers — $1.50 each.", textZh: "十美元硬币给您。洗衣凝珠在洗衣机旁边的贩卖机里——每个1.5美元。", actionHint: "在贩卖机买洗涤用品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. How long does a full wash and dry cycle take?",
            textZh: "好的。洗加烘干一共需要多长时间？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A wash cycle is about 35 minutes, and drying takes about 45 minutes to an hour depending on the load. So roughly an hour and a half total. There are chairs and a TV in the laundry room if you want to wait.",
            textZh: "洗涤大约35分钟，烘干根据衣物量大约45分钟到1小时。所以总共大约一个半小时。洗衣房里有椅子和电视，如果您想在那里等的话。",
            keyPhrases: [
              { en: "wash cycle", zh: "洗涤周期" },
              { en: "depending on the load", zh: "取决于衣物量" },
            ],
            alternativeExpressions: [
              { textEn: "About 35 minutes to wash, then 45 to an hour to dry. So plan on about an hour and a half. There's a TV in there if you wanna hang out.", textZh: "洗大约35分钟，烘干45分钟到1小时。大概一个半小时。里面有电视可以看。", actionHint: "可以在洗衣房等", frequency: "common" },
              { textEn: "Wash takes about half an hour, dryer about 45 minutes. You can chill in the laundry room — there are chairs and a TV.", textZh: "洗大约半小时，烘干大约45分钟。可以在洗衣房等——有椅子和电视。", actionHint: "带手机或书打发时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, that's really helpful!",
            textZh: "谢谢，这很有帮助！",
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
            textEn: "Hi, I checked out this morning from room 712, but I think I left my phone charger in the room. Is there any way to get it back?",
            textZh: "你好，我今天早上从712房退的房，但我好像把充电器忘在房间了。有办法找回来吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. Let me check with housekeeping to see if they found anything in room 712. Can you describe the charger for me?",
            textZh: "很遗憾听到这个。让我联系客房部看看他们在712房有没有找到。能描述一下充电器吗？",
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
              { textEn: "Oh no! Let me radio housekeeping and ask if they've come across it. What does it look like?", textZh: "哎呀！让我用对讲机联系客房部问问。是什么样的？", actionHint: "详细描述你丢失的物品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a white Apple USB-C charger with a braided cable. I think I left it plugged in by the desk.",
            textZh: "是一个白色的苹果USB-C充电器，编织线材质的。我记得插在书桌旁边了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good news! Housekeeping found a white charger in room 712. It matches your description. I have it right here. Could you verify it's yours?",
            textZh: "好消息！客房部在712房找到了一个白色充电器。跟您描述的一样。就在这里。您确认一下是不是您的？",
            keyPhrases: [
              { en: "matches your description", zh: "跟您描述的一样" },
              { en: "verify", zh: "确认/核实" },
            ],
            alternativeExpressions: [
              { textEn: "You're in luck! They found a white charger in your old room. Looks like a match — is this yours?", textZh: "您运气不错！他们在您之前的房间找到了白色充电器。看着像——是您的吗？", actionHint: "确认是否是自己的", frequency: "common" },
              { textEn: "Great news — housekeeping picked up a charger from 712. Apple USB-C, braided cable. Sound right?", textZh: "好消息——客房部从712捡到了一个充电器。苹果USB-C，编织线。对吗？", actionHint: "确认物品特征", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine! Thank you so much. I was worried I'd have to buy a new one.",
            textZh: "对，是我的！太感谢了。我还担心得买个新的。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're welcome! Just for our records, could you sign this lost-and-found claim form? It just confirms you've picked up the item.",
            textZh: "不客气！为了记录需要，能签一下这个失物认领表吗？只是确认您已经取回物品。",
            keyPhrases: [
              { en: "lost-and-found", zh: "失物招领" },
              { en: "claim form", zh: "认领表" },
              { en: "for our records", zh: "为了记录" },
            ],
            vocabNotes: {
              "lost-and-found": {
                meaningInContext: "在这里指酒店的失物招领服务/处，专门保管客人遗失的物品",
                similarUsage: "类似用法：You should check the lost-and-found at the airport.（你应该去机场的失物招领处看看）",
              },
            },
            alternativeExpressions: [
              { textEn: "No problem! Just sign here — it's just a quick form saying you got your stuff back.", textZh: "没问题！这里签个名——就是个简单表格确认您拿回了东西。", actionHint: "签字确认取回物品", frequency: "common" },
              { textEn: "Glad we found it! Mind signing this real quick? Just confirms you picked it up.", textZh: "很高兴找到了！能快速签一下吗？就是确认您取回了。", actionHint: "签认领表", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, no problem. You guys are very efficient!",
            textZh: "没问题。你们真的很高效！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you! We always do a thorough check of rooms after checkout. If you ever leave something behind, just call us within 30 days and we'll hold it for you.",
            textZh: "谢谢！我们退房后都会仔细检查房间。如果以后忘了什么东西，30天内打电话给我们就行，我们会帮您保管。",
            keyPhrases: [
              { en: "thorough check", zh: "仔细检查" },
              { en: "hold it for you", zh: "帮您保管" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! We always sweep the rooms after checkout. If you leave anything behind in the future, give us a ring within 30 days.", textZh: "乐意帮忙！退房后我们都会清查房间。以后落了东西，30天内给我们打电话就行。", actionHint: "记住30天内都可以找回", frequency: "common" },
              { textEn: "That's what we're here for! We keep lost items for 30 days, so there's always time to call us back.", textZh: "这是我们的工作！遗失物品我们保管30天，随时可以打电话来取。", actionHint: "记住失物保管期限", frequency: "common" },
            ],
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
            textEn: "I think I lost my sunglasses somewhere in the hotel. I had them at the pool this afternoon but now I can't find them.",
            textZh: "我好像把太阳镜丢在酒店某处了。今天下午在泳池还有，现在找不到了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. Let me check our lost-and-found log. Can you tell me what they look like and approximately what time you were at the pool?",
            textZh: "很遗憾。让我查一下失物登记。能告诉我太阳镜什么样的，大约几点在泳池吗？",
            keyPhrases: [
              { en: "lost-and-found log", zh: "失物登记" },
              { en: "approximately", zh: "大约" },
            ],
            alternativeExpressions: [
              { textEn: "Let me look through our lost items. What brand are they, and when were you at the pool?", textZh: "让我查一下遗失物品。什么品牌的？几点在泳池的？", actionHint: "尽量详细地描述物品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're Ray-Ban Wayfarers, black frame with dark lenses. I was at the pool from about 2 to 4 PM. I might have left them on the lounge chair.",
            textZh: "是雷朋Wayfarer，黑色镜框，深色镜片。我大约下午2点到4点在泳池。可能忘在躺椅上了。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I don't see anything matching that description in our log yet, but the pool area staff may not have turned it in yet. Let me call the pool attendant right now. Could you wait just a moment?",
            textZh: "登记里暂时没有找到符合描述的物品，但泳池工作人员可能还没交上来。我现在打电话给泳池服务员。请稍等一下好吗？",
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
              { textEn: "Hmm, nothing in the system yet. The pool guys might not have logged it. Hang on — let me give them a quick call.", textZh: "嗯，系统里还没有。泳池那边可能还没登记。等一下——我给他们打个电话。", actionHint: "稍等前台联系泳池", frequency: "common" },
              { textEn: "I don't see it in lost-and-found yet, but that doesn't mean it's gone. Let me check with the pool staff real quick.", textZh: "失物招领里还没看到，但不代表没了。让我跟泳池员工确认一下。", actionHint: "耐心等候", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll wait.",
            textZh: "好的，我等一下。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Great news — the pool attendant found a pair of black Ray-Bans on one of the lounge chairs. He's bringing them over now. Should be here in about 2 minutes.",
            textZh: "好消息——泳池服务员在一张躺椅上找到了一副黑色雷朋。他正拿过来。大约2分钟到。",
            keyPhrases: [
              { en: "bringing them over", zh: "拿过来" },
            ],
            alternativeExpressions: [
              { textEn: "Good news! The pool guy found black Ray-Bans on a lounge chair. He's on his way over — couple minutes.", textZh: "好消息！泳池员工在躺椅上找到了黑色雷朋。他正过来——两分钟。", actionHint: "等待确认是否是自己的", frequency: "common" },
              { textEn: "Found them! A pair of black sunglasses were on one of the chairs. He'll be here any second.", textZh: "找到了！一副黑色太阳镜在一张椅子上。他马上就到。", actionHint: "准备确认太阳镜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that's wonderful! I'm so relieved. Should I leave a tip for the person who found them?",
            textZh: "太好了！我松了一口气。要不要给找到的人小费？",
            culturalNote: "在美国酒店，虽然不强制，但给找到失物的员工小费（$5-10）是很常见的表示感谢的方式。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's entirely up to you, but I'm sure he'd appreciate it. Here he is now — are these your sunglasses?",
            textZh: "完全看您自己，但他肯定会感激的。他来了——这是您的太阳镜吗？",
            keyPhrases: [
              { en: "entirely up to you", zh: "完全看您自己" },
            ],
            literalMeaning: "\"entirely up to you\" 字面意思是「完全取决于你」，实际在服务场景中是一种礼貌的方式，暗示可以给但不强制。",
            alternativeExpressions: [
              { textEn: "That's totally your call. I'm sure he'd love it though. Oh here he comes — these look like yours?", textZh: "完全看您。不过他肯定会很高兴。来了——这像是您的吗？", actionHint: "确认太阳镜是否是自己的", frequency: "common" },
              { textEn: "Up to you! He's here now — take a look, are these the ones?", textZh: "随您！他来了——看看，是这副吗？", actionHint: "查看是否是自己的太阳镜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! These are mine. Thank you so much — here's a little something for your trouble.",
            textZh: "是的！是我的。太感谢了——给你一点小意思。",
            culturalNote: "\"a little something for your trouble\" 是给小费时非常自然的说法。",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! What time would you like the call?",
            textZh: "当然！您想几点叫醒？",
            alternativeExpressions: [
              { textEn: "Sure thing! What time do you need to be up?", textZh: "没问题！您几点需要起床？", actionHint: "告诉对方你要几点叫醒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "5:30 AM, please. I have an early flight to catch.",
            textZh: "早上5:30。我要赶早班飞机。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "5:30 AM, got it. Would you like a backup call as well? Some guests like a second call 10 minutes later just in case.",
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
              { textEn: "5:30, done. Want a second call 10 minutes later? A lot of people do that for early flights.", textZh: "5:30，搞定。要不要10分钟后再打一次？很多赶早班飞机的人都这样。", actionHint: "考虑是否需要备用叫醒", frequency: "common" },
              { textEn: "Got it — 5:30 AM. I can also set a backup at 5:40 if you want. Better safe than sorry, right?", textZh: "收到——早上5:30。如果需要，5:40还可以再打一次。保险起见嘛。", actionHint: "决定是否加备用叫醒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. A backup call at 5:40 would be great. I'm a heavy sleeper.",
            textZh: "好的。5:40再打一次。我睡得很沉。",
            culturalNote: "\"heavy sleeper\" 形容睡觉很沉、不容易醒的人，反义词是 \"light sleeper\"（浅眠的人）。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No problem — 5:30 and 5:40 AM. I've noted both. Would you also like us to arrange an early checkout or call a taxi for you?",
            textZh: "没问题——5:30和5:40。都记下了。需要我们安排提前退房或帮您叫出租车吗？",
            keyPhrases: [
              { en: "early checkout", zh: "提前退房" },
              { en: "arrange", zh: "安排" },
            ],
            isBranchPoint: true,
            responseTip: "可以趁机安排好明早的退房和交通",
            alternativeExpressions: [
              { textEn: "All set — 5:30 and 5:40. Need anything else for the morning? Taxi? Early checkout?", textZh: "搞定——5:30和5:40。早上还需要别的吗？出租车？提前退房？", actionHint: "可以顺便安排交通", frequency: "common" },
              { textEn: "Both calls are locked in. Want us to book a cab or set up express checkout while we're at it?", textZh: "两次叫醒都定好了。要不要顺便订出租车或快速退房？", actionHint: "一起安排好明早的事", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, yes. Could you have a taxi ready at 6:15? I need to be at the airport by 7.",
            textZh: "好的。能帮我6:15准备好出租车吗？我7点要到机场。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "A taxi at 6:15 AM to the airport. I'll book that for you. You can do an express checkout — just drop your key cards in the box by the front desk and we'll email you the final bill. That saves time in the morning.",
            textZh: "早上6:15到机场的出租车。我帮您预订。您可以快速退房——把房卡投进前台旁边的盒子里，我们会邮件发送最终账单。这样早上能省时间。",
            keyPhrases: [
              { en: "express checkout", zh: "快速退房" },
              { en: "drop your key cards", zh: "投入房卡" },
              { en: "final bill", zh: "最终账单" },
            ],
            vocabNotes: {
              "express checkout": {
                meaningInContext: "在这里表示简化的退房流程，不用排队在前台办理，只需放下房卡即可",
                similarUsage: "类似用法：Most hotels offer express checkout via the TV or app.（大多数酒店都提供通过电视或APP快速退房）",
              },
            },
            alternativeExpressions: [
              { textEn: "Taxi's booked for 6:15. For checkout, just drop your keys in the drop box by the desk and we'll email you the receipt. Easy peasy.", textZh: "出租车订好6:15。退房的话，把房卡扔进前台旁边的投放箱就行，我们邮件发收据。超简单。", actionHint: "记住快速退房流程", frequency: "common" },
              { textEn: "All set — cab at 6:15. You can do express checkout: leave your key cards at the desk, and your bill goes straight to your email.", textZh: "搞定——6:15出租车。可以快速退房：房卡留在前台，账单直接发邮件。", actionHint: "了解快速退房步骤", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very convenient. So I just leave the key cards and go?",
            textZh: "很方便。就是把房卡留下直接走？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Exactly. Just make sure to check your room one last time for any belongings. We'll process everything and send the receipt to your email on file. Have a safe flight tomorrow!",
            textZh: "没错。只要记得最后检查一下房间有没有遗留物品。我们会处理好一切，收据发到您登记的邮箱。祝明天一路平安！",
            keyPhrases: [
              { en: "belongings", zh: "随身物品" },
              { en: "on file", zh: "登记在案的" },
              { en: "have a safe flight", zh: "一路平安" },
            ],
            alternativeExpressions: [
              { textEn: "Yep — just do a quick sweep of the room, drop the keys, and you're good to go. We'll email your receipt. Safe travels!", textZh: "对——快速检查一下房间，放下房卡就可以走了。收据我们邮件发。一路顺风！", actionHint: "离开前检查房间", frequency: "common" },
              { textEn: "That's it! Just check you haven't left anything behind. Receipt goes to your email. Have a great flight!", textZh: "就这样！检查一下有没有忘拿的东西。收据发邮件。祝飞行愉快！", actionHint: "最后检查一遍房间", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Absolutely! We have a breakfast menu you can order from. What time would you like it delivered?",
            textZh: "当然可以！我们有早餐菜单供您选择。您想几点送到？",
            alternativeExpressions: [
              { textEn: "Sure! There's a room service breakfast menu on the door hanger in your room. Just fill it out and hang it on your door tonight.", textZh: "可以！房间里门把手上有房间服务早餐菜单。填好今晚挂在门上就行。", actionHint: "可以用门把手挂牌点餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around 7 AM. What do you recommend?",
            textZh: "大约7点。你推荐什么？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Our most popular option is the American breakfast — two eggs any style, bacon or sausage, toast, and fresh orange juice. It's $22. We also have a lighter continental breakfast with pastries, fruit, yogurt, and coffee for $16.",
            textZh: "最受欢迎的是美式早餐——两个蛋任选做法、培根或香肠、吐司和鲜榨橙汁。22美元。还有轻食欧陆早餐，有糕点、水果、酸奶和咖啡，16美元。",
            keyPhrases: [
              { en: "eggs any style", zh: "蛋任选做法" },
              { en: "American breakfast", zh: "美式早餐" },
              { en: "continental breakfast", zh: "欧陆式早餐" },
              { en: "pastries", zh: "糕点" },
            ],
            vocabNotes: {
              "eggs any style": {
                meaningInContext: "在这里表示鸡蛋可以选择任意烹饪方式：scrambled（炒蛋）、sunny side up（单面煎）、over easy（双面半熟）等",
                similarUsage: "类似用法：How would you like your eggs?（您的蛋要怎么做？）",
              },
              "continental breakfast": {
                meaningInContext: "在这里指欧陆式早餐，通常是冷食为主的简单早餐（糕点、水果、咖啡），不含热菜",
                similarUsage: "类似用法：The room rate includes a continental breakfast.（房费包含欧陆早餐）",
              },
            },
            alternativeExpressions: [
              { textEn: "Our bestseller is the American — eggs however you like, bacon or sausage, toast, and OJ. $22. Or the continental for $16 if you want something lighter.", textZh: "最畅销的是美式——鸡蛋随便做法、培根或香肠、吐司和橙汁。22美元。想清淡点，欧陆16美元。", actionHint: "选择早餐套餐", frequency: "common" },
              { textEn: "The full American is super popular — $22. Comes with eggs, meat, toast, juice. Or $16 for a lighter continental.", textZh: "全套美式很受欢迎——22美元。有蛋、肉、吐司、果汁。清淡版欧陆16美元。", actionHint: "选美式或欧陆早餐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the American breakfast with scrambled eggs and bacon. And a pot of hot coffee, please.",
            textZh: "我要美式早餐，炒蛋加培根。再来一壶热咖啡。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "American breakfast, scrambled eggs, bacon, and a pot of coffee. Would you like milk or cream with your coffee? And any food allergies I should note?",
            textZh: "美式早餐，炒蛋，培根，一壶咖啡。咖啡要配牛奶还是奶油？有什么食物过敏需要注意吗？",
            keyPhrases: [
              { en: "food allergies", zh: "食物过敏" },
              { en: "cream", zh: "奶油" },
            ],
            responseTip: "告知是否有过敏或饮食限制",
            alternativeExpressions: [
              { textEn: "So that's scrambled eggs, bacon, and coffee. Milk or cream? Oh, and any allergies I should flag for the kitchen?", textZh: "那就是炒蛋、培根和咖啡。要牛奶还是奶油？对了，有过敏需要跟厨房说吗？", actionHint: "告知过敏信息", frequency: "common" },
              { textEn: "Got it — American with scrambled and bacon, plus coffee. Anything you can't eat? Allergies, dietary stuff?", textZh: "收到——美式炒蛋培根加咖啡。有什么不能吃的吗？过敏或忌口？", actionHint: "说明饮食限制", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Just milk, please. No allergies. How will I know when it's at my door?",
            textZh: "牛奶就好。没有过敏。怎么知道送到门口了？",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "We'll knock on your door and announce room service. If you'd prefer not to be disturbed, we can leave the tray outside your door and send you a text. Which would you prefer?",
            textZh: "我们会敲门并说客房服务。如果您不想被打扰，我们可以把餐盘放在门外然后发短信通知您。您更喜欢哪种？",
            keyPhrases: [
              { en: "announce room service", zh: "报说客房服务" },
              { en: "leave the tray", zh: "把餐盘放下" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "We'll give your door a knock and call out 'room service.' Or if you'd rather not be woken up, we can just leave it outside and text you.", textZh: "我们会敲门喊'客房服务'。如果不想被吵醒，也可以放门外发短信通知。", actionHint: "选择送餐方式", frequency: "common" },
              { textEn: "We'll knock. But if you don't want to be disturbed, we can set it outside your door and shoot you a text.", textZh: "我们会敲门。不过如果不想被打扰，可以放在门外给您发短信。", actionHint: "告诉对方你的偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Please knock — I'll be up by then. Can I just charge it to the room?",
            textZh: "请敲门——到时候我会起来的。可以记到房费上吗？",
            culturalNote: "\"charge it to the room\" 是酒店常用的说法，意思是把费用挂到房间账单上，退房时一起结算。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Of course, it'll be charged to your room. So that's an American breakfast at 7 AM tomorrow for room... what's your room number?",
            textZh: "当然，记到房费上。那就是明早7点的美式早餐，您的房间号是？",
            alternativeExpressions: [
              { textEn: "Sure, we'll put it on the room tab. American breakfast at 7 — and what room are you in?", textZh: "好的，挂房费。7点美式早餐——您住几号房？", actionHint: "告诉对方房间号", frequency: "common" },
              { textEn: "No problem, room charge it is. So 7 AM, American breakfast. Which room number?", textZh: "没问题，记房费。那就7点美式早餐。房间号多少？", actionHint: "说出房间号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 815.",
            textZh: "815房。",
          },
          {
            speaker: "them",
            role: "客房服务",
            textEn: "Room 815, American breakfast at 7 AM. All set! Enjoy your evening, and we'll see you in the morning.",
            textZh: "815房，早上7点美式早餐。搞定！祝您晚上愉快，明早见。",
            keyPhrases: [
              { en: "all set", zh: "搞定了/都安排好了" },
            ],
            literalMeaning: "\"all set\" 字面意思是「全部设置好了」，实际口语中表示「一切就绪、搞定了」。",
            alternativeExpressions: [
              { textEn: "815, 7 AM, American breakfast — you're all good! Have a lovely evening.", textZh: "815房，7点，美式早餐——没问题了！祝您晚上愉快。", actionHint: "确认无误后挂电话", frequency: "common" },
              { textEn: "Got it — breakfast at 7 for room 815. We'll knock when it's there. Good night!", textZh: "收到——815房7点早餐。到了我们会敲门。晚安！", actionHint: "安心休息等明早送餐", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "Certainly! What time would you prefer? We have availability at 6:30 and 8 PM.",
            textZh: "当然！您想几点？6:30和晚上8点有空位。",
            keyPhrases: [
              { en: "reserve a table", zh: "预订位子" },
              { en: "availability", zh: "空位/可用时段" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! We're a bit busy tonight. I can do 6:30 or 8. Which works better for you?", textZh: "好的！今晚比较忙。6:30或8点可以。哪个更合适？", actionHint: "选择用餐时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "8 PM works. Could we get a table by the window if possible?",
            textZh: "8点可以。能安排靠窗的位子吗？",
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "I'll do my best to reserve a window table for you. It's under what name?",
            textZh: "我尽量给您留靠窗的桌子。请问订哪个名字？",
            keyPhrases: [
              { en: "window table", zh: "靠窗的桌子" },
              { en: "under what name", zh: "订哪个名字" },
            ],
            alternativeExpressions: [
              { textEn: "I can't promise a window spot, but I'll see what I can do. What name should I put it under?", textZh: "靠窗不一定能保证，但我尽量安排。订什么名字？", actionHint: "提供姓名和房间号", frequency: "common" },
              { textEn: "We'll try our best for the window. And the reservation name?", textZh: "靠窗的位子我们尽量安排。预订名字是？", actionHint: "报上姓名", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Wang, room 815. We're hotel guests.",
            textZh: "王，815房。我们是住店客人。",
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "Perfect, Mr. Wang. As a hotel guest, you'll receive a 15% discount on food and beverages. We'll see you at 8!",
            textZh: "好的，王先生。作为住店客人，您可享受餐饮八五折优惠。8点见！",
            keyPhrases: [
              { en: "discount on food and beverages", zh: "餐饮折扣" },
            ],
            vocabNotes: {
              beverages: {
                meaningInContext: "在这里泛指所有饮料，包括酒精和非酒精饮品",
                similarUsage: "类似用法：The price includes food and beverages.（价格包含餐饮）",
              },
            },
            alternativeExpressions: [
              { textEn: "Great, Mr. Wang! Since you're staying with us, you get 15% off dining. See you at 8!", textZh: "好的，王先生！因为您是住店客人，用餐享八五折。8点见！", actionHint: "记住有折扣优惠", frequency: "common" },
              { textEn: "All booked! Hotel guests get a nice 15% discount on food and drinks. We'll have your table ready at 8.", textZh: "订好了！住店客人餐饮享八五折。8点桌子给您留好。", actionHint: "8点准时去餐厅", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. By the way, do you have any vegetarian options? My wife doesn't eat meat.",
            textZh: "好的。顺便问一下，有素食选择吗？我太太不吃肉。",
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "Absolutely! We have a separate vegetarian menu with about 8 dishes. We can also modify most of our regular dishes to be vegetarian. Just let your server know when you're seated.",
            textZh: "当然有！我们有单独的素食菜单，大约8道菜。大部分常规菜品也可以改成素食版。入座后告诉服务员就行。",
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
              { textEn: "Oh, definitely! We've got a whole veggie menu. And most dishes on the regular menu can be made vegetarian too — just ask your waiter.", textZh: "当然有！我们有完整的素食菜单。普通菜单上大部分菜也能做素食版——跟服务员说就行。", actionHint: "到时候向服务员确认", frequency: "common" },
              { textEn: "Plenty of veggie options! There's a dedicated menu. Your server can also customize most items — just let them know.", textZh: "素食选择很多！有专门的菜单。服务员也能帮您调整大部分菜品——告诉他们就好。", actionHint: "入座后跟服务员沟通", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can the bill be charged to our room?",
            textZh: "太好了。账单可以记到房费上吗？",
          },
          {
            speaker: "them",
            role: "餐厅领位",
            textEn: "Yes, absolutely. Just show your room key card to the server and they'll add it to your room bill. See you tonight!",
            textZh: "当然可以。出示您的房卡给服务员就行，会挂到房费上。今晚见！",
            keyPhrases: [
              { en: "room key card", zh: "房卡" },
              { en: "add it to your room bill", zh: "挂到房费上" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Just hand your key card to the waiter and it goes straight to your room tab. See you at 8!", textZh: "当然！把房卡给服务员就直接挂房费了。8点见！", actionHint: "记得带房卡去餐厅", frequency: "common" },
              { textEn: "Yep, just charge it to the room with your key card. Easy peasy. See you tonight!", textZh: "可以的，用房卡直接挂房费就行。很简单。今晚见！", actionHint: "带好房卡", frequency: "occasional" },
            ],
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
            textEn: "Good evening! Welcome to the Skyview Restaurant. Here are your menus. Can I start you off with something to drink?",
            textZh: "晚上好！欢迎来到Skyview餐厅。这是菜单。先点些喝的吗？",
            keyPhrases: [
              { en: "start you off", zh: "先开始/先来点" },
            ],
            vocabNotes: {
              "start you off": {
                meaningInContext: "在这里是餐厅服务员的常用说法，意思是「先给您来点什么」，通常指先点饮料",
                similarUsage: "类似用法：Can I start you off with some water?（先给您来杯水？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Evening! What can I get you to drink while you look at the menu?", textZh: "晚上好！看菜单的时候先喝点什么？", actionHint: "先点饮品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could I see the wine list? And a sparkling water for her, please.",
            textZh: "能看看酒单吗？给她来杯气泡水。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's the wine list. We have a lovely house Chardonnay and a Cabernet Sauvignon that pairs well with our steak. The sparkling water — would you prefer Perrier or San Pellegrino?",
            textZh: "这是酒单。我们有很好的招牌霞多丽和一款赤霞珠，配牛排很合适。气泡水——您要巴黎水还是圣培露？",
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
              { textEn: "Here you go. Our house Chardonnay is very popular, and the Cab Sav goes perfectly with steak. Sparkling water — Perrier or Pellegrino?", textZh: "给您。我们的招牌霞多丽很受欢迎，赤霞珠配牛排绝了。气泡水——巴黎水还是圣培露？", actionHint: "选择红酒和气泡水品牌", frequency: "common" },
              { textEn: "I'd personally recommend the Cabernet if you're having steak — it's a great match. For the sparkling water, we have Perrier and San Pellegrino.", textZh: "如果吃牛排的话我个人推荐赤霞珠——非常搭。气泡水有巴黎水和圣培露。", actionHint: "参考服务员推荐点酒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try a glass of the Cabernet. Perrier for her. We're ready to order food too.",
            textZh: "我要一杯赤霞珠。她要巴黎水。我们也准备好点菜了。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Go ahead!",
            textZh: "请说！",
            alternativeExpressions: [
              { textEn: "Sure, what'll it be?", textZh: "好的，要什么？", actionHint: "开始点菜", frequency: "common" },
              { textEn: "Fire away! I'm ready when you are.", textZh: "说吧！准备好了。", actionHint: "告诉服务员你要点的菜", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the ribeye steak, medium rare. And she'd like the mushroom risotto from the vegetarian menu. Also, she has a nut allergy — could you double-check that there are no nuts in the risotto?",
            textZh: "我要肋眼牛排，五分熟。她要素食菜单上的蘑菇烩饭。另外她对坚果过敏——能帮忙确认烩饭里没有坚果吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "The ribeye medium rare, and the mushroom risotto. I'll check with the kitchen about the nuts right away. The risotto usually has pine nuts on top, but we can absolutely leave those off. Would you like any appetizers or a salad to start?",
            textZh: "肋眼五分熟，蘑菇烩饭。我马上跟厨房确认坚果的事。烩饭上面通常有松子，但完全可以去掉。要先来点开胃菜或沙拉吗？",
            keyPhrases: [
              { en: "check with the kitchen", zh: "跟厨房确认" },
              { en: "pine nuts", zh: "松子" },
              { en: "leave those off", zh: "去掉/不加" },
              { en: "appetizers", zh: "开胃菜" },
            ],
            responseTip: "服务员主动帮你确认过敏源，这是好餐厅的标准做法",
            alternativeExpressions: [
              { textEn: "Ribeye medium rare, mushroom risotto. Good news — I'll have the kitchen skip the pine nuts. Want any starters while you wait?", textZh: "肋眼五分熟，蘑菇烩饭。好消息——我让厨房不放松子。等菜的时候要来点前菜吗？", actionHint: "决定是否加前菜", frequency: "common" },
              { textEn: "Got it. I'll flag the nut allergy with the chef personally. The risotto normally has pine nuts but we'll leave those out. Anything else to start?", textZh: "收到。我会亲自跟厨师说过敏的事。烩饭通常有松子但我们会去掉。还要点别的吗？", actionHint: "感谢服务员并回复", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for catching that. No appetizers — just the main courses.",
            textZh: "谢谢你注意到了。不要开胃菜——就主菜就好。",
            culturalNote: "\"Thank you for catching that\" 是感谢对方注意到某个重要细节的自然说法。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "No problem at all — food allergies are something we take very seriously. Your food should be ready in about 20 minutes. Enjoy your wine in the meantime!",
            textZh: "完全没问题——食物过敏我们非常重视。菜大约20分钟好。先享用红酒吧！",
            keyPhrases: [
              { en: "take seriously", zh: "非常重视" },
              { en: "in the meantime", zh: "在此期间/同时" },
            ],
            alternativeExpressions: [
              { textEn: "We're super careful with allergies here. Should be about 20 minutes. Sit back and enjoy your drinks!", textZh: "我们对过敏非常小心。大约20分钟。坐下来享用饮品吧！", actionHint: "等餐期间享用红酒", frequency: "common" },
              { textEn: "Allergies are no joke — we've got you covered. Food will be out in about 20. Cheers!", textZh: "过敏可不是开玩笑的——我们会照顾好的。菜大约20分钟出。干杯！", actionHint: "放心等菜", frequency: "occasional" },
            ],
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
          },
          {
            speaker: "them",
            role: "酒店广播",
            textEn: "Attention all guests. The fire alarm has been activated. Please remain calm and proceed to the nearest emergency exit. Do not use the elevators. Follow the illuminated exit signs to the stairwell and make your way to the assembly point in the parking lot.",
            textZh: "各位客人请注意。火灾警报已启动。请保持冷静，前往最近的紧急出口。请勿使用电梯。沿着发光的出口标志走到楼梯间，前往停车场的集合点。",
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
                similarUsage: "类似用法：The assembly point is marked on the evacuation map behind your door.（集合点标在门后的疏散图上）",
              },
            },
            responseTip: "马上执行：穿好衣服鞋子，拿上护照和手机，不坐电梯，走楼梯下去",
            alternativeExpressions: [
              { textEn: "Fire alarm — please leave your room now. Take the stairs, not the elevator. Meet outside in the parking lot.", textZh: "火灾警报——请立即离开房间。走楼梯，不坐电梯。在外面停车场集合。", actionHint: "立即带上必需品离开", frequency: "common" },
              { textEn: "Everyone evacuate immediately. Use the stairwells only. Proceed to the assembly point outside.", textZh: "所有人立即疏散。只走楼梯间。前往外面的集合点。", actionHint: "马上走楼梯下去", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me, where is the nearest stairwell? I'm on the 10th floor.",
            textZh: "请问最近的楼梯间在哪？我在10楼。",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "Turn left out of your room and go to the end of the hallway. The emergency stairwell is on your right — look for the green exit sign above the door. Don't go back for your belongings. Just get out now.",
            textZh: "出房间左转走到走廊尽头。紧急楼梯间在右边——找门上方的绿色出口标志。不要回去拿东西。现在马上出去。",
            keyPhrases: [
              { en: "end of the hallway", zh: "走廊尽头" },
              { en: "green exit sign", zh: "绿色出口标志" },
              { en: "don't go back", zh: "不要回去" },
            ],
            alternativeExpressions: [
              { textEn: "Follow the exit signs on the ceiling — stairwell is at the end of the corridor. Please hurry.", textZh: "跟着天花板上的出口标志走——楼梯间在走廊尽头。请快走。", actionHint: "跟着绿色出口标志快走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My wife has trouble walking. Is there any assistance available?",
            textZh: "我太太行走不便。有什么帮助吗？",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "There's an evacuation chair at the stairwell entrance. I'll come with you and help. We're trained for this. Let's go now — take my arm if you need support.",
            textZh: "楼梯间入口有疏散椅。我跟你们一起去帮忙。我们受过这方面的训练。现在走吧——需要的话扶着我。",
            alternativeExpressions: [
              { textEn: "Don't worry — there's a special chair at the stairwell for this. I'll help you both down. Let's go now.", textZh: "别担心——楼梯间有专用椅子。我帮你们下去。现在走。", actionHint: "跟着安保人员走", frequency: "common" },
              { textEn: "We've got evac chairs right there. I'm trained for this — I'll get her down safely. Follow me.", textZh: "疏散椅就在那里。我受过训练——保证安全送她下去。跟我走。", actionHint: "配合安保人员行动", frequency: "common" },
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
          },
          {
            speaker: "you",
            textEn: "Thank you so much. How will we know when it's safe to go back?",
            textZh: "太感谢了。怎么知道什么时候可以回去？",
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn: "Wait at the assembly point until the fire department gives the all-clear. A hotel manager will make an announcement. It usually takes 20 to 30 minutes. Don't re-enter the building until you hear the all-clear.",
            textZh: "在集合点等待直到消防部门宣布安全。酒店经理会广播通知。通常需要20到30分钟。没听到解除警报前不要回到建筑里。",
            keyPhrases: [
              { en: "fire department", zh: "消防部门" },
              { en: "all-clear", zh: "解除警报/安全信号" },
              { en: "re-enter the building", zh: "重新进入建筑" },
            ],
            culturalMeaning: "\"all-clear\" 是紧急情况结束后的标准用语，来自军事术语，表示危险已经过去，可以恢复正常。",
            alternativeExpressions: [
              { textEn: "Just hang tight at the meeting point. The fire department has to clear the building first. Usually takes 20-30 minutes. Don't go back in until they say so.", textZh: "在集合点等着就行。消防部门要先检查建筑。通常20-30分钟。他们说可以了才能回去。", actionHint: "在集合点耐心等待", frequency: "common" },
              { textEn: "Stay put until you hear the all-clear. A manager will announce when it's safe. Should be about half an hour.", textZh: "原地待着直到听到解除警报。经理会通知什么时候安全。大约半小时。", actionHint: "等待官方解除警报", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you for your help.",
            textZh: "明白了。谢谢你的帮助。",
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
            textEn: "Hello, front desk? I'm in room 603. My husband is feeling very dizzy and he has a fever. Do you have a doctor on call?",
            textZh: "你好，前台吗？我是603房。我丈夫头很晕还发烧了。你们有值班医生吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry to hear that. We don't have an in-house doctor, but we have a partnership with a 24-hour medical service that can send a doctor to your room. Would you like me to call them? It usually takes about 20 minutes.",
            textZh: "很遗憾听到这个。我们没有驻店医生，但我们和一个24小时医疗服务机构合作，可以派医生到房间。需要我联系他们吗？通常大约20分钟到。",
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
              { textEn: "Oh no! We can get a doctor sent to your room. Want me to arrange it? Takes about 20 minutes.", textZh: "哎呀！我们可以派医生到房间。需要我安排吗？大约20分钟。", actionHint: "同意让前台联系医疗服务", frequency: "common" },
            ],
            isBranchPoint: true,
            responseTip: "如果情况紧急，直接要求叫救护车",
          },
          {
            speaker: "you",
            textEn: "Yes, please call them right away. Also, do you have any basic medicine like fever reducers or pain relievers?",
            textZh: "好的，请马上联系。另外你们有退烧药或止痛药之类的基本药品吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm calling the medical service now. Unfortunately, we're not allowed to provide medication directly. But there's a pharmacy on the ground floor of the building next door — it's open until 10 PM. I can also send up some cold water, extra towels, and a thermometer if that helps.",
            textZh: "我正在联系医疗服务。很遗憾，我们不能直接提供药品。但隔壁大楼一楼有药店——营业到晚上10点。我也可以送冰水、额外毛巾和体温计到房间。",
            alternativeExpressions: [
              { textEn: "I'm on it. We can't give out meds, but there's a pharmacy next door open till 10. Want me to send up ice water and a thermometer?", textZh: "我在联系。我们不能提供药品，但隔壁药店开到10点。要送冰水和体温计上来吗？", actionHint: "同意送物品并考虑去药店", frequency: "common" },
              { textEn: "Calling them right now. Sorry, we can't hand out medicine. There's a drugstore around the corner though. I'll send up towels and cold water.", textZh: "正在打电话。抱歉不能给药。拐角有药店。我先送毛巾和冰水上去。", actionHint: "让人去附近药店买药", frequency: "common" },
            ],
            keyPhrases: [
              { en: "fever reducers", zh: "退烧药" },
              { en: "pain relievers", zh: "止痛药" },
              { en: "pharmacy", zh: "药店" },
              { en: "thermometer", zh: "体温计" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please send those up. How much will the doctor visit cost? Does our travel insurance cover this?",
            textZh: "好的，请送上来。看医生要多少钱？我们的旅行保险能报销吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The house call is typically around $150 to $200, depending on the treatment. They accept most international insurance and major credit cards. Make sure to get an itemized receipt from the doctor — you'll need it for your insurance claim.",
            textZh: "上门看诊通常150到200美元左右，取决于治疗内容。他们接受大多数国际保险和主要信用卡。记得向医生要逐项收据——报销时需要。",
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
              { textEn: "It usually runs $150 to $200. They take most insurance and credit cards. Just make sure you get a detailed receipt — you'll need it to file a claim.", textZh: "通常150到200美元。大多数保险和信用卡都收。记得要明细收据——报销要用。", actionHint: "记得向医生要明细收据", frequency: "common" },
              { textEn: "Expect somewhere around $150-200. They take insurance. Big tip: ask for an itemized bill so you can claim it back later.", textZh: "大概150-200美元。接受保险。重要提醒：要逐项账单，之后可以报销。", actionHint: "保存好所有收据", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll make sure to get the receipt. If his condition gets worse, should I call 911?",
            textZh: "好的。我会记得要收据。如果他情况恶化，要打911吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "If it becomes urgent — chest pain, difficulty breathing, or loss of consciousness — yes, call 911 immediately. You can also press the emergency button on your room phone. We'll have someone up there within a minute. The nearest hospital is City General, about 10 minutes by ambulance.",
            textZh: "如果变紧急——胸痛、呼吸困难或失去意识——直接打911。您也可以按房间电话上的紧急按钮，一分钟内会有人上去。最近的医院是City General，救护车大约10分钟。",
            keyPhrases: [
              { en: "chest pain", zh: "胸痛" },
              { en: "difficulty breathing", zh: "呼吸困难" },
              { en: "loss of consciousness", zh: "失去意识" },
              { en: "emergency button", zh: "紧急按钮" },
              { en: "ambulance", zh: "救护车" },
            ],
            alternativeExpressions: [
              { textEn: "If things get serious — trouble breathing, chest pain — dial 911 right away. Or just hit the red button on the room phone and we'll be up in a minute.", textZh: "如果情况变严重——呼吸困难、胸痛——马上拨911。或者按房间电话上的红色按钮，我们一分钟内上去。", actionHint: "记住紧急联系方式", frequency: "common" },
              { textEn: "For anything life-threatening, call 911 — don't wait. The closest ER is City General, about 10 minutes out. We can also have someone at your door in under a minute.", textZh: "有生命危险的情况直接打911——别等。最近的急诊是City General，大约10分钟。我们也能不到一分钟到你门口。", actionHint: "牢记紧急情况处理流程", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being so thorough. I really appreciate the help.",
            textZh: "谢谢你这么周到。非常感谢你的帮助。",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we offer a complimentary airport shuttle. It runs every 30 minutes from 5 AM to 11 PM. The pickup point is at the main entrance.",
            textZh: "有的，我们提供免费机场班车。每30分钟一班，早上5点到晚上11点运行。上车点在正门。",
            keyPhrases: [
              { en: "complimentary shuttle", zh: "免费班车" },
              { en: "runs every 30 minutes", zh: "每30分钟一班" },
              { en: "pickup point", zh: "上车点" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这里表示「免费的」，酒店常用这个词代替 free，听起来更正式",
                similarUsage: "类似用法：We offer complimentary breakfast for all guests.（我们为所有客人提供免费早餐）",
              },
            },
            alternativeExpressions: [
              { textEn: "We have a free shuttle to the airport. It leaves every half hour. Just wait out front.", textZh: "我们有免费机场班车。每半小时出发。在前面等就行。", actionHint: "确认你的航班时间来选班次", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My flight is at 2 PM. What time should I take the shuttle?",
            textZh: "我的航班下午2点。应该坐几点的班车？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "For a 2 PM domestic flight, I'd recommend the 10:30 AM shuttle. It takes about 30 minutes to get to the airport, and you'll want to be there at least 2 hours before your flight. For international flights, I'd suggest getting there 3 hours early.",
            textZh: "如果是下午2点的国内航班，我建议坐10:30的班车。到机场大约30分钟，最好提前至少2小时到。如果是国际航班，建议提前3小时。",
            keyPhrases: [
              { en: "domestic flight", zh: "国内航班" },
              { en: "international flight", zh: "国际航班" },
              { en: "at least 2 hours before", zh: "至少提前2小时" },
            ],
            responseTip: "告诉对方你的航班是国内还是国际",
            alternativeExpressions: [
              { textEn: "I'd say take the 10:30 shuttle. It's about half an hour to the airport, and you want a good buffer. Is it domestic or international?", textZh: "我建议坐10:30的班车。到机场大约半小时，要留够缓冲时间。是国内还是国际航班？", actionHint: "说明航班类型", frequency: "common" },
              { textEn: "For a 2 o'clock flight, 10:30 should work for domestic. If it's international, I'd go earlier — maybe the 9:30 or 10.", textZh: "2点的航班，国内坐10:30就行。如果是国际的，建议早点走——9:30或10点的。", actionHint: "根据航班类型选时间", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's an international flight, so I'll take the 9:30 shuttle. Do I need to reserve a spot?",
            textZh: "是国际航班，那我坐9:30的。需要提前预约吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, I'd recommend reserving a spot, especially during peak hours. I can book you on the 9:30 shuttle right now. How many passengers?",
            textZh: "是的，特别是高峰时段，建议提前预约。我现在就帮您订9:30的班车。几位乘客？",
            keyPhrases: [
              { en: "reserve a spot", zh: "预约位置" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "book you on", zh: "帮您预订" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely book ahead — mornings can be busy. I'll put you on the 9:30 right now. How many people?", textZh: "一定要提前订——早上很忙的。我现在就给您订9:30的。几位？", actionHint: "告诉对方人数", frequency: "common" },
              { textEn: "Yeah, best to reserve. Let me lock in two spots on the 9:30. Just you, or are there others?", textZh: "是的，最好预订。我给您锁定9:30的位子。就您还是还有其他人？", actionHint: "说明乘客人数", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two passengers with four large suitcases. Is there enough space?",
            textZh: "两位乘客，四个大行李箱。空间够吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That should be fine. The shuttle is a large van with plenty of luggage space. I've booked two seats for you on the 9:30 AM shuttle. Please be at the main entrance by 9:20 so the driver can load your bags.",
            textZh: "没问题。班车是大型厢型车，行李空间充足。已帮您预订9:30班车两个座位。请9:20到正门，方便司机装行李。",
            keyPhrases: [
              { en: "large van", zh: "大型厢型车" },
              { en: "luggage space", zh: "行李空间" },
              { en: "load your bags", zh: "装行李" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, there's plenty of room for bags. You're booked for 9:30 — just be out front by 9:20.", textZh: "别担心，行李空间很充裕。9:30已订好——9:20到正门就行。", actionHint: "记住9:20到正门", frequency: "common" },
              { textEn: "Four big suitcases? No problem — the van's huge. Two seats, 9:30 AM. Try to get to the entrance about 10 minutes early.", textZh: "四个大行李箱？没问题——车很大。两个座位，9:30。尽量提前10分钟到入口。", actionHint: "提前到达上车点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does the shuttle drop off at all terminals or just the main one?",
            textZh: "班车在所有航站楼停还是只在主航站楼？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The shuttle stops at Terminal 1 and Terminal 3. Which terminal is your airline at? I can make sure the driver drops you off at the right one.",
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
              { textEn: "We stop at T1 and T3. Which airline are you flying? I'll tell the driver where to drop you.", textZh: "我们停T1和T3。您坐哪家航空公司？我告诉司机在哪里放您下来。", actionHint: "说出航空公司或航站楼", frequency: "common" },
              { textEn: "The shuttle hits Terminal 1 first, then Terminal 3. Do you know which one you need?", textZh: "班车先到1号航站楼，然后3号。您知道需要哪个吗？", actionHint: "查看机票确认航站楼", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Terminal 3, please. Thank you for arranging everything.",
            textZh: "3号航站楼。谢谢你帮我安排好一切。",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we have a private car service. We offer one-way transfers and also half-day or full-day charters. A one-way trip to the city center is $45. A half-day charter with a driver for up to 5 hours is $180.",
            textZh: "有的，我们有专车服务。提供单程接送和半天或全天包车。去市中心单程45美元。半天包车带司机最多5小时180美元。",
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
              { textEn: "We can arrange a private car for you. Did you want a drop-off, or do you need the car for the whole day?", textZh: "我们可以安排专车。您是要送一趟，还是需要全天用车？", actionHint: "根据行程选择单程还是包车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A half-day charter sounds good. We want to visit a few places. Does the driver speak English?",
            textZh: "半天包车不错。我们想去几个地方。司机会说英语吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "All our drivers speak basic English. If you'd like a driver who can also serve as a tour guide, that's an additional $30, but it's well worth it — they know all the best spots and can help with translations.",
            textZh: "我们所有司机都会基本英语。如果您想要一个同时能当导游的司机，需要额外加30美元，但很值得——他们知道所有好地方，还能帮忙翻译。",
            keyPhrases: [
              { en: "tour guide", zh: "导游" },
              { en: "additional", zh: "额外的" },
              { en: "well worth it", zh: "很值得" },
              { en: "translations", zh: "翻译" },
            ],
            alternativeExpressions: [
              { textEn: "They all speak some English. For 30 bucks more, you can get a driver who doubles as a guide — totally worth it if you want local tips.", textZh: "他们都会一些英语。多加30美元可以有一个兼职导游的司机——想了解当地推荐的话很值得。", actionHint: "考虑是否要导游司机", frequency: "common" },
              { textEn: "Our drivers handle basic English fine. But if you want someone who really knows the city and can translate, add $30 for a driver-guide.", textZh: "我们的司机基本英语没问题。但如果想找个真正熟悉城市又能翻译的，加30美元要个导游司机。", actionHint: "决定是否升级服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the driver-guide option. What time can we leave?",
            textZh: "我们要有导游功能的司机。几点可以出发？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Any time you'd like! Just let me know your preferred departure time and I'll have the car ready at the entrance. I'd suggest leaving by 9 AM to beat the traffic.",
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
              { textEn: "Whenever works for you! Just give me a time and the car will be waiting. I'd say head out by 9 to avoid traffic.", textZh: "您方便的时间就行！告诉我时间，车会等着。我建议9点出发避开堵车。", actionHint: "定好出发时间", frequency: "common" },
              { textEn: "Totally up to you. My advice? Leave by 9 — the roads get crazy after that. I'll have the car out front.", textZh: "完全看您。我的建议？9点前走——之后路上会很堵。我让车在门口等。", actionHint: "接受建议早点出发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "9 AM works. Do we pay the driver directly or charge it to the room?",
            textZh: "9点可以。是直接付给司机还是挂房费？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Either way works. Most guests prefer to charge it to their room. I'll arrange a sedan for two passengers at 9 AM with a driver-guide. The total is $210 — $180 for the charter plus $30 for the guide service. Fuel and tolls are included.",
            textZh: "都可以。大多数客人选择挂房费。我安排明早9点一辆轿车，两位乘客，配导游司机。总共210美元——包车180美元加导游服务30美元。油费和过路费已包含。",
            keyPhrases: [
              { en: "sedan", zh: "轿车" },
              { en: "fuel and tolls", zh: "油费和过路费" },
              { en: "included", zh: "已包含" },
            ],
            alternativeExpressions: [
              { textEn: "You can pay the driver or put it on your room — up to you. It comes to $210 all in. Gas and tolls are covered.", textZh: "可以付给司机也可以挂房费——随您。一共210美元全包。油费和过路费已含。", actionHint: "选择付款方式", frequency: "common" },
              { textEn: "Most people just charge it to the room. So that's a car at 9 with a guide — $210 total, everything included.", textZh: "大多数人挂房费。那就9点一辆车配导游——总共210美元，全包了。", actionHint: "确认费用和安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Please charge it to room 815. Thank you for setting this up.",
            textZh: "请挂到815房。谢谢你帮忙安排。",
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
            textEn: "Hi, I'm expecting a package to be delivered here. It should arrive today. Can the hotel receive it for me?",
            textZh: "你好，我有一个快递要寄到酒店。应该今天到。酒店能帮我签收吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! We accept packages for our guests all the time. What's the name on the delivery and which carrier is it coming through?",
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
              { textEn: "No problem! We hold packages at the front desk. What name should we look for on the label?", textZh: "没问题！我们在前台保管包裹。标签上的名字是什么？", actionHint: "提供包裹上的收件人姓名和订单号", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's under Wei Wang, room 815. It's an Amazon delivery. I ordered some cold medicine because my wife isn't feeling well.",
            textZh: "收件人是Wei Wang，815房。是Amazon快递。我给太太买了些感冒药因为她不舒服。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Got it — Wei Wang, room 815, Amazon delivery. We'll sign for it when it arrives and give you a call or send a text to let you know. Would you like us to bring it up to your room, or will you pick it up at the front desk?",
            textZh: "好的——Wei Wang，815房，Amazon快递。到了我们会签收并打电话或发短信通知您。要我们送到房间还是您来前台取？",
            keyPhrases: [
              { en: "sign for it", zh: "签收" },
              { en: "bring it up", zh: "送上去" },
              { en: "pick it up", zh: "来取" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Wei Wang, 815, Amazon — got it. We'll grab it for you and let you know. Want us to send it up, or come get it yourself?", textZh: "Wei Wang，815房，Amazon——记下了。我们帮您收，到了通知您。送上去还是自己来取？", actionHint: "选择送到房间还是自取", frequency: "common" },
              { textEn: "All noted. We'll sign for it and shoot you a text. Should we deliver it to your room or hold it at the desk?", textZh: "都记好了。我们签收后给您发短信。送到房间还是放前台？", actionHint: "告诉前台你的偏好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Could you have someone bring it up? I don't want to leave my wife alone right now.",
            textZh: "能让人送上来吗？我现在不想让太太一个人待着。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. As soon as it arrives, we'll have a bellman bring it right up to room 815. Is there anything else we can do? We also have a small shop in the lobby with basic medicines and snacks if you need anything sooner.",
            textZh: "当然。一到我们就让行李员送到815房。还有什么需要帮忙的吗？大堂也有小商店卖基本药品和零食，如果您急需的话。",
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
              { textEn: "Absolutely — we'll bring it up the second it gets here. Oh, and there's a little shop in the lobby if you need anything right now.", textZh: "当然——一到就送上去。对了，大堂有个小商店，如果现在就需要什么可以去看看。", actionHint: "考虑是否先去大堂商店", frequency: "common" },
              { textEn: "Sure thing, we'll send it straight to 815. In the meantime, our lobby shop has some basic meds and snacks if that helps.", textZh: "没问题，直接送到815。在这期间，大堂商店有一些基本药品和零食可以先应急。", actionHint: "先去大堂商店买急需物品", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very kind of you. I think we'll be okay once the medicine arrives. Thank you!",
            textZh: "你真好。药到了应该就没问题了。谢谢！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're welcome. I hope your wife feels better soon. Don't hesitate to call if you need anything else.",
            textZh: "不客气。希望您太太早日康复。有任何需要随时打电话。",
            keyPhrases: [
              { en: "feels better soon", zh: "早日康复" },
              { en: "don't hesitate to call", zh: "随时打电话" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! I really hope she's feeling better soon. Just ring us if you need anything at all.", textZh: "很高兴能帮上忙！真心希望她快点好起来。有任何需要打电话就行。", actionHint: "有需要随时联系前台", frequency: "common" },
              { textEn: "No problem at all. Wishing her a quick recovery. We're here 24/7 if you need us.", textZh: "完全没问题。祝她早日康复。我们24小时都在，需要就来找我们。", actionHint: "记住前台全天候服务", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. We have a business center that handles shipping. We can ship via FedEx, UPS, or USPS. Where would you like to send it?",
            textZh: "完全可以。我们的商务中心可以处理寄件。可以通过FedEx、UPS或USPS寄送。您要寄到哪里？",
            keyPhrases: [
              { en: "handles shipping", zh: "处理寄件" },
              { en: "ship via", zh: "通过...寄送" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Our concierge can help you pack and ship. Are you sending it domestically or internationally?", textZh: "可以！礼宾部可以帮您打包和寄送。是国内还是国际？", actionHint: "说明寄送目的地", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to ship it to China. How much would it cost and how long would it take?",
            textZh: "我要寄到中国。多少钱，要多久？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "For international shipping to China, FedEx Express takes about 3 to 5 business days and costs around $80 to $120 depending on weight and size. USPS Priority Mail International is cheaper — about $40 to $60 — but takes 6 to 10 business days. Which would you prefer?",
            textZh: "寄到中国的国际快递，FedEx快递大约3到5个工作日，费用根据重量和尺寸大约80到120美元。USPS国际优先邮件便宜些——大约40到60美元——但需要6到10个工作日。您选哪个？",
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "depending on weight and size", zh: "取决于重量和尺寸" },
              { en: "Priority Mail International", zh: "国际优先邮件" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "China? Sure. FedEx is faster — 3 to 5 days, around $80-120. USPS is budget-friendly at $40-60 but takes about a week or two. What's your preference?", textZh: "寄中国？没问题。FedEx快一些——3到5天，大约80-120美元。USPS实惠些40-60美元但要一两周。您选哪个？", actionHint: "根据预算和时间选快递", frequency: "common" },
              { textEn: "For China you've got two options — fast and pricier with FedEx, or cheaper but slower with USPS. Depends how soon you need it there.", textZh: "寄中国有两个选择——FedEx快但贵些，USPS便宜但慢些。看您多快需要到。", actionHint: "权衡速度和价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with USPS since it's not urgent. Do you have boxes I can use? And is there anything I can't send?",
            textZh: "选USPS吧，不着急。有箱子可以用吗？有什么不能寄的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have shipping boxes in a few sizes — small, medium, and large. They're $3 to $8 depending on size. As for restrictions, you can't send liquids over 500ml, batteries, or any food items like fresh fruit or meat. Sealed, packaged snacks are usually fine though.",
            textZh: "我们有几种尺寸的快递箱——小、中、大。根据尺寸3到8美元。关于限制，不能寄500毫升以上的液体、电池或新鲜水果、肉类等食品。密封包装的零食一般没问题。",
            keyPhrases: [
              { en: "shipping boxes", zh: "快递箱" },
              { en: "restrictions", zh: "限制" },
              { en: "liquids", zh: "液体" },
              { en: "sealed, packaged snacks", zh: "密封包装的零食" },
            ],
            alternativeExpressions: [
              { textEn: "We've got boxes — small, medium, large. A few bucks each. Just no big liquids, batteries, or fresh food. Packaged snacks are okay though.", textZh: "有箱子——小中大号。几美元一个。不能寄大瓶液体、电池或生鲜食品。包装零食可以。", actionHint: "选择合适尺寸的箱子", frequency: "common" },
              { textEn: "Boxes are $3 to $8 depending on size. Main restrictions: no liquids over 500ml, no batteries, no fresh food. Sealed snacks are generally fine.", textZh: "箱子3到8美元看尺寸。主要限制：500毫升以上液体不行，电池不行，生鲜不行。密封零食一般可以。", actionHint: "确认物品是否可以寄", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. It's mostly clothes and some chocolate. I'll need a medium box. Can you help me fill out the customs form?",
            textZh: "好的。主要是衣服和一些巧克力。我需要一个中号箱子。能帮我填海关申报单吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. I'll help you with the customs declaration form. You'll need to list each item, its value, and the country of origin. For chocolate, just mark it as 'food/confectionery.' I'll get you the box and packing tape as well.",
            textZh: "当然。我帮您填海关申报单。您需要列出每件物品、价值和原产国。巧克力写「食品/糖果」就行。我也给您拿箱子和封箱胶带。",
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报单" },
              { en: "country of origin", zh: "原产国" },
              { en: "packing tape", zh: "封箱胶带" },
            ],
            vocabNotes: {
              "customs declaration form": {
                meaningInContext: "在这里指国际邮寄时必须填写的表格，申报包裹内容和价值，供海关检查",
                similarUsage: "类似用法：Make sure you declare the value accurately on the customs form.（确保在海关表上准确申报价值）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sure! I'll walk you through the customs form. Just list what's inside, how much it's worth, and where it's from. I'll grab you a box and tape too.", textZh: "没问题！我带您填海关表。把里面的东西列出来，写上价值和产地就行。箱子和胶带我也给您拿。", actionHint: "准备好物品清单和估价", frequency: "common" },
              { textEn: "No problem — the customs form looks complicated but it's pretty simple. Items, values, origin. Chocolate goes under 'confectionery.' I'll set you up with a box.", textZh: "没问题——海关表看着复杂但其实很简单。物品、价值、产地。巧克力写在「糖果」类。我给您准备箱子。", actionHint: "按指引填写表格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're a lifesaver. I'll bring everything down to the business center in 20 minutes.",
            textZh: "你帮了大忙了。我20分钟后把东西拿到商务中心。",
            culturalNote: "\"You're a lifesaver\" 是常用的感谢表达，字面意思是「你是救命恩人」，实际表示「你帮了大忙」。",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about that. Key cards can get demagnetized if they're kept near phones or other electronics. Let me reprogram it for you. What's your room number?",
            textZh: "很抱歉。房卡如果放在手机或其他电子设备旁边可能会消磁。我帮您重新编程。您的房间号是？",
            keyPhrases: [
              { en: "demagnetized", zh: "消磁" },
              { en: "reprogram", zh: "重新编程" },
            ],
            vocabNotes: {
              demagnetized: {
                meaningInContext: "在这里表示房卡的磁条信息被手机等设备的磁场破坏，导致无法读取",
                similarUsage: "类似用法：Keep your credit card away from magnets or it'll get demagnetized.（别把信用卡放在磁铁旁边，会消磁）",
              },
            },
            alternativeExpressions: [
              { textEn: "That happens sometimes. Cards lose their programming near phones. Let me make you a fresh one — room number?", textZh: "有时会这样。卡放在手机旁边会失效。我给您做张新的——房间号多少？", actionHint: "提供房间号和身份信息", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 815. I think I had it in my pocket with my phone — that's probably what happened.",
            textZh: "815房。我好像把它和手机放在同一个口袋里了——可能就是这个原因。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That'll do it. May I see your ID just to verify? It's standard procedure when we reissue key cards.",
            textZh: "那就对了。能看一下您的证件核实一下吗？重新发卡时需要核实身份，这是标准流程。",
            keyPhrases: [
              { en: "verify", zh: "核实" },
              { en: "standard procedure", zh: "标准流程" },
              { en: "reissue", zh: "重新发放" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, that'll do it. Can I just see some ID before I make a new one? Policy thing.", textZh: "对，就是这个原因。做新卡前能看一下证件吗？规定要求。", actionHint: "出示证件", frequency: "common" },
              { textEn: "Phones and cards don't mix well! Quick ID check and I'll get you a fresh key.", textZh: "手机和卡放一起不太好！快速看一下证件就给您做新卡。", actionHint: "递上护照或证件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my passport.",
            textZh: "给您我的护照。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Thank you, Mr. Wang. Here are two new key cards. A tip to keep them working — put them in a separate pocket or in the card sleeve we provide, away from your phone and wallet.",
            textZh: "谢谢，王先生。给您两张新房卡。小建议——把房卡放在单独的口袋或我们提供的卡套里，远离手机和钱包。",
            keyPhrases: [
              { en: "card sleeve", zh: "卡套" },
              { en: "separate pocket", zh: "单独的口袋" },
            ],
            alternativeExpressions: [
              { textEn: "All done — two fresh cards for you. Pro tip: keep them away from your phone. Use this little sleeve we give you.", textZh: "搞定——两张新卡给您。小窍门：别跟手机放一起。用我们给的这个小卡套。", actionHint: "用卡套保护房卡", frequency: "common" },
              { textEn: "Here you go, Mr. Wang — two new keys. Just a heads-up, try not to keep them near anything magnetic.", textZh: "给您，王先生——两张新钥匙。提醒一下，尽量别放在有磁性的东西旁边。", actionHint: "注意房卡存放方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good tip. I'll keep them separate this time. Thanks!",
            textZh: "好建议。这次我分开放。谢谢！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're welcome! If it happens again, just come down or call the front desk and we'll sort it out right away.",
            textZh: "不客气！如果再出问题，下来找我们或打电话，我们马上处理。",
            keyPhrases: [
              { en: "sort it out", zh: "处理好/解决" },
            ],
            literalMeaning: "\"sort it out\" 字面意思是「把它整理出来」，实际口语中表示「解决问题、处理好」。",
            alternativeExpressions: [
              { textEn: "Anytime! If it acts up again, just give us a ring and we'll fix it in no time.", textZh: "随时来！如果又出问题，打个电话我们马上搞定。", actionHint: "记住前台电话", frequency: "common" },
              { textEn: "No problem! It's a quick fix. Just pop down or call if it happens again.", textZh: "没问题！很快就能解决。再出问题下来或打电话就行。", actionHint: "有问题直接找前台", frequency: "common" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Don't worry, that happens more often than you'd think! Can I see some identification and confirm your room number?",
            textZh: "别担心，这种情况比您想的常见！能看一下证件并确认房间号吗？",
            alternativeExpressions: [
              { textEn: "No worries at all — happens all the time. What room are you in? Do you have any ID on you?", textZh: "完全没关系——经常发生的。您住几号房？身上有证件吗？", actionHint: "提供房间号和任何身份证明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm in room 815. Unfortunately, my passport is also inside the room. I only have my phone with me. I can show you my booking confirmation email.",
            textZh: "我住815房。不巧护照也在房间里。身上只有手机。我可以给你看预订确认邮件。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "That's okay — the booking confirmation will work. Let me pull up your reservation to cross-check... Yes, that matches. I'll have someone come up with you to open the door. For security, we can't just hand out a new key without verifying your identity.",
            textZh: "没关系——预订确认可以。让我调出您的预订记录核对一下……对上了。我派人跟您上去开门。出于安全考虑，我们不能不核实身份就发新房卡。",
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
              { textEn: "The confirmation email works fine. Let me check... Yep, all good. I'll send someone up to let you in. We just can't give out keys without proper ID — hope you understand.", textZh: "确认邮件可以。我查一下……没问题，都对上了。我派人上去帮您开门。没有正式证件不能发钥匙——希望您理解。", actionHint: "等工作人员带你去开门", frequency: "common" },
              { textEn: "That'll do! Let me match it against our system... Perfect, confirmed. Someone will come up and open the door for you.", textZh: "可以！让我跟系统核对一下……很好，确认了。会有人上去帮您开门。", actionHint: "跟着工作人员上楼", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. Thank you for being thorough — I appreciate the security.",
            textZh: "理解。感谢你这么仔细——我很感谢这种安全措施。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Our security team member will meet you at your room in about 2 minutes. They'll open the door and then I'd suggest coming back down to get a fresh key card once you have your passport. That way we have proper verification on record.",
            textZh: "安保人员大约2分钟后在您房间门口等您。他们会开门，然后建议您拿到护照后下来重新办一张房卡。这样我们的记录里有正式的身份验证。",
            keyPhrases: [
              { en: "security team", zh: "安保团队" },
              { en: "fresh key card", zh: "新房卡" },
              { en: "proper verification", zh: "正式的身份验证" },
              { en: "on record", zh: "在记录里" },
            ],
            alternativeExpressions: [
              { textEn: "Someone from security will be at your door in 2 minutes. Once you're in, just come down with your passport and I'll make you a new key.", textZh: "安保人员2分钟内到您门口。进去后拿上护照下来，我给您做张新卡。", actionHint: "等安保人员来开门", frequency: "common" },
              { textEn: "I'm sending someone up now — they'll have you in your room in no time. Then swing by with your ID so I can issue a proper new key.", textZh: "我现在就派人上去——很快就能进房间了。然后带着证件过来，我给您办正式的新钥匙。", actionHint: "进房间后记得下来办新卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. I'll come right back down with my passport. This won't happen again — I'll be more careful!",
            textZh: "好的。我拿到护照马上下来。不会再发生了——我会更小心的！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No worries at all! It really does happen to everyone. A good trick is to always tap your pocket for your key card before you let the door close.",
            textZh: "完全不用担心！真的每个人都会遇到。一个好方法是关门前先拍拍口袋确认房卡在身上。",
            keyPhrases: [
              { en: "tap your pocket", zh: "拍拍口袋" },
            ],
            culturalMeaning: "\"It really does happen to everyone\" 是安慰别人的常用说法，让人不觉得尴尬。",
            alternativeExpressions: [
              { textEn: "Honestly, you wouldn't believe how often this happens. Little trick: do a quick pocket check before the door shuts!", textZh: "说实话，你不知道这种事有多常见。小技巧：门关之前快速摸一下口袋！", actionHint: "养成出门检查的习惯", frequency: "common" },
              { textEn: "Don't even worry about it — I see this ten times a day. Just pat your pockets every time you walk out!", textZh: "完全别在意——我每天都遇到十几次。以后每次出门拍拍口袋就行！", actionHint: "记住这个小窍门", frequency: "occasional" },
            ],
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'm sorry about that. Let me walk you through it. First, connect to the network called \"HotelGuest.\" Then open your browser — a login page should pop up automatically. Enter your room number and last name to log in.",
            textZh: "很抱歉。我帮您操作一下。首先连接名为\"HotelGuest\"的网络。然后打开浏览器——登录页面应该会自动弹出。输入房间号和姓来登录。",
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
              { textEn: "No problem! Are you getting the captive portal? That's the page that asks for your room number. If not, try typing 1.1.1.1 in your browser.", textZh: "没问题！有没有弹出认证页面？就是要求输入房间号的那个。没有的话，在浏览器输入1.1.1.1试试。", actionHint: "按照指引操作连接Wi-Fi", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The login page isn't showing up. I just get a \"can't connect\" error.",
            textZh: "登录页面没弹出来。只显示\"无法连接\"的错误。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Try this: forget the network on your device, then reconnect. If the login page still doesn't appear, open your browser and type in \"wifi.hotel.com\" — that should force the login page to load. Also, make sure your VPN is turned off, as that can interfere with the connection.",
            textZh: "试试这样：在设备上忘记网络，然后重新连接。如果登录页面还不出来，打开浏览器输入\"wifi.hotel.com\"——应该能强制加载登录页面。另外确保VPN关了，VPN可能会干扰连接。",
            keyPhrases: [
              { en: "forget the network", zh: "忘记网络" },
              { en: "force the login page", zh: "强制加载登录页面" },
              { en: "VPN", zh: "VPN/虚拟专用网络" },
              { en: "interfere with", zh: "干扰" },
            ],
            responseTip: "按步骤操作试试",
            alternativeExpressions: [
              { textEn: "Okay, try forgetting the network and reconnecting. Still no luck? Type wifi.hotel.com in your browser. Oh, and turn off any VPN you might have running.", textZh: "好，试试忘记网络然后重连。还不行？在浏览器输入wifi.hotel.com。对了，把VPN关掉。", actionHint: "按步骤操作", frequency: "common" },
              { textEn: "Classic fix: go to your Wi-Fi settings, forget the network, then join again. If the portal doesn't show, type in our URL manually. And check if VPN is on — that messes things up.", textZh: "经典解决办法：去Wi-Fi设置，忘记网络，再重新加入。认证页面不出来就手动输入网址。还有看看VPN是不是开着——会影响连接。", actionHint: "逐步排查问题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That worked! I'm connected now. But the speed seems really slow. I need to join a video conference later.",
            textZh: "成功了！连上了。但速度好像很慢。我一会儿要开视频会议。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The standard Wi-Fi is shared among all guests, so it can be slow during peak hours. We offer a premium Wi-Fi package for $15 per day that gives you a dedicated high-speed connection — it's much better for video calls and streaming.",
            textZh: "标准Wi-Fi是所有客人共享的，高峰时段可能会慢。我们提供每天15美元的高级Wi-Fi套餐，专用高速连接——视频通话和流媒体效果好很多。",
            keyPhrases: [
              { en: "shared among all guests", zh: "所有客人共享" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "premium Wi-Fi", zh: "高级Wi-Fi" },
              { en: "dedicated high-speed connection", zh: "专用高速连接" },
              { en: "streaming", zh: "流媒体" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              { textEn: "Basic Wi-Fi can get congested. For $15 a day, you get our business-grade connection — way faster. Great for Zoom calls.", textZh: "基础Wi-Fi可能会拥堵。每天15美元可以用我们的商务级网络——快很多。开Zoom很合适。", actionHint: "根据需要选择是否升级", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the premium package. Can you add it to my room?",
            textZh: "我要高级套餐。能挂到房费上吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Done! I've activated the premium Wi-Fi for room 815. You'll need to disconnect and reconnect — this time select \"HotelPremium\" as your network. Use the same room number and last name to log in. The speed should be night and day compared to the basic network.",
            textZh: "好了！已经为815房激活高级Wi-Fi。您需要断开重新连接——这次选\"HotelPremium\"网络。用同样的房间号和姓登录。速度跟基础网络比会天差地别。",
            keyPhrases: [
              { en: "activated", zh: "激活" },
              { en: "disconnect and reconnect", zh: "断开重新连接" },
              { en: "night and day", zh: "天差地别" },
            ],
            vocabNotes: {
              "night and day": {
                meaningInContext: "在这里表示两者差距非常大，就像白天和黑夜一样",
                similarUsage: "类似用法：The difference between the two hotels was night and day.（两家酒店差距天壤之别）",
              },
            },
            alternativeExpressions: [
              { textEn: "You're all set! Just switch to the 'HotelPremium' network and log in the same way. You'll notice a huge difference.", textZh: "搞定了！切换到'HotelPremium'网络用同样方式登录就行。您会发现速度完全不一样。", actionHint: "切换到新网络", frequency: "common" },
              { textEn: "Premium Wi-Fi is live for your room. Disconnect, then look for 'HotelPremium' — same login. It's way faster, trust me.", textZh: "高级Wi-Fi已经给您房间开通了。断开连接，找'HotelPremium'——同样登录方式。快很多，相信我。", actionHint: "断开当前网络重新连接", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Much faster now. Thank you for the help!",
            textZh: "现在快多了。谢谢帮忙！",
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
            textEn: "I can't figure out how to use the TV. I want to watch Netflix on my own account. Is that possible?",
            textZh: "我搞不懂怎么用电视。我想用自己的账号看Netflix。可以吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, absolutely! Our smart TVs support Netflix, YouTube, and other streaming apps. Press the Home button on the remote, then select the Netflix app. You can log in with your personal account. Just remember to log out before you check out!",
            textZh: "当然可以！我们的智能电视支持Netflix、YouTube和其他流媒体应用。按遥控器上的Home键，然后选Netflix应用。用您的个人账号登录就行。只是退房前记得退出登录！",
            keyPhrases: [
              { en: "smart TV", zh: "智能电视" },
              { en: "streaming apps", zh: "流媒体应用" },
              { en: "Home button", zh: "Home键/主页键" },
              { en: "log out", zh: "退出登录" },
            ],
            alternativeExpressions: [
              { textEn: "Sure! Hit the Home button on the remote and you'll see Netflix right there. Sign in with your account. Don't forget to sign out when you leave!", textZh: "可以！按遥控器Home键就能看到Netflix。用你的账号登录。走的时候别忘了退出！", actionHint: "找遥控器按Home键", frequency: "common" },
            ],
            responseTip: "退房前记得退出所有个人账号",
          },
          {
            speaker: "you",
            textEn: "I found the remote, but there are so many buttons. Which one is the Home button?",
            textZh: "遥控器找到了，但按钮太多了。哪个是Home键？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "It's the button with a little house icon, usually in the center of the remote. If you're having trouble, I can also send someone up to help you set it up. Or you can use the Chromecast feature — cast from your phone to the TV by pressing the cast icon in any streaming app.",
            textZh: "是中间那个有小房子图标的按钮。如果还有困难，我可以派人上去帮您设置。您也可以用Chromecast功能——在任何流媒体应用里按投屏图标就能从手机投到电视上。",
            keyPhrases: [
              { en: "house icon", zh: "房子图标" },
              { en: "Chromecast", zh: "投屏功能" },
              { en: "cast from your phone", zh: "从手机投屏" },
              { en: "cast icon", zh: "投屏图标" },
            ],
            vocabNotes: {
              cast: {
                meaningInContext: "在这里表示将手机或平板上的内容无线投放到电视屏幕上",
                similarUsage: "类似用法：I'll cast the presentation to the conference room TV.（我把演示文稿投到会议室电视上）",
              },
            },
            alternativeExpressions: [
              { textEn: "Look for the little house button right in the middle of the remote. Or if that's tricky, you can just cast from your phone — way easier.", textZh: "找遥控器正中间的小房子按钮。嫌麻烦的话直接从手机投屏——更简单。", actionHint: "试试两种方法", frequency: "common" },
              { textEn: "It's the home button — has a little house on it. But honestly, Chromecast might be easier. Just tap the cast icon in Netflix on your phone.", textZh: "就是Home键——上面有个小房子。不过说实话，投屏可能更方便。在手机Netflix里点投屏图标就行。", actionHint: "选择更方便的方式操作", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, Chromecast would be easier. How do I connect to it?",
            textZh: "投屏更方便。怎么连？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Make sure your phone is connected to the hotel Wi-Fi. Then open the app you want to watch — like Netflix or YouTube — and tap the cast icon in the top right corner. Select \"Room 815 TV\" from the device list. It should connect in a few seconds.",
            textZh: "确保手机连着酒店Wi-Fi。然后打开要看的应用——比如Netflix或YouTube——点右上角的投屏图标。从设备列表选\"Room 815 TV\"。几秒钟就能连上。",
            keyPhrases: [
              { en: "device list", zh: "设备列表" },
              { en: "top right corner", zh: "右上角" },
              { en: "connect in a few seconds", zh: "几秒钟就能连上" },
            ],
            alternativeExpressions: [
              { textEn: "First, make sure you're on the hotel Wi-Fi. Then just open Netflix, hit the cast button, and pick your room's TV. Super quick.", textZh: "首先确保连着酒店Wi-Fi。然后打开Netflix，点投屏按钮，选你房间的电视。很快就好。", actionHint: "按步骤操作投屏", frequency: "common" },
              { textEn: "As long as your phone's on the same Wi-Fi, you just tap the little rectangle icon in the app and choose 'Room 815 TV.' Takes a couple seconds.", textZh: "只要手机连着同一个Wi-Fi，在应用里点小方块图标然后选'Room 815 TV'就行。几秒钟的事。", actionHint: "确保手机连接酒店Wi-Fi", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's working! One more thing — is there an HDMI port? I might want to connect my laptop for work tomorrow.",
            textZh: "成功了！再问一个——有HDMI接口吗？明天可能要连笔记本电脑办公。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, there's an HDMI port on the side panel of the TV. If you don't have an HDMI cable, we can lend you one from the front desk — just call us and we'll send it up. Switch the TV input to HDMI using the Source button on the remote.",
            textZh: "有的，电视侧面板上有HDMI接口。如果您没有HDMI线，可以找前台借——打电话来我们送上去。用遥控器上的Source键把电视输入切换到HDMI。",
            keyPhrases: [
              { en: "HDMI port", zh: "HDMI接口" },
              { en: "side panel", zh: "侧面板" },
              { en: "lend you one", zh: "借给您一根" },
              { en: "switch the input", zh: "切换输入源" },
              { en: "Source button", zh: "Source键/信号源键" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! HDMI port is on the side of the TV. Need a cable? We've got loaners at the desk. Just hit the Source button to switch input.", textZh: "有！HDMI口在电视侧面。需要线吗？前台有借的。按Source键切换输入就行。", actionHint: "需要的话找前台借线", frequency: "common" },
              { textEn: "There's one on the left side of the TV. If you don't have a cable, call us and we'll send one right up. Use the Source button to switch to HDMI.", textZh: "电视左侧有一个。没线的话打电话来，我们马上送上去。用Source键切到HDMI。", actionHint: "明天需要时打电话借线", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, that covers everything. Thank you for being so patient!",
            textZh: "太好了，都解决了。谢谢你这么耐心！",
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
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! We offer complimentary luggage storage for checked-out guests. You can pick it up anytime before midnight. How many pieces do you have?",
            textZh: "当然！我们为退房客人提供免费行李寄存。午夜前随时来取。您有几件行李？",
            keyPhrases: [
              { en: "luggage storage", zh: "行李寄存" },
              { en: "checked-out guests", zh: "已退房客人" },
              { en: "pick it up anytime", zh: "随时来取" },
              { en: "pieces", zh: "件（行李计量单位）" },
            ],
            vocabNotes: {
              pieces: {
                meaningInContext: "在这里用作行李的计量单位，\"two pieces\" 就是两件行李",
                similarUsage: "类似用法：How many pieces of luggage are you checking in?（你要托运几件行李？）",
              },
            },
            alternativeExpressions: [
              { textEn: "Sure — we'll keep your bags in our luggage room. No charge. Just grab them whenever you're ready to head out.", textZh: "可以——我们把您的包放在行李间。免费的。准备走的时候来拿就行。", actionHint: "告诉对方行李数量", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two large suitcases and a backpack. Is the storage area secure?",
            textZh: "两个大行李箱和一个背包。存放区安全吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Absolutely. Our luggage room is locked and only staff have access. We'll give you a luggage claim tag — you'll need it to pick up your bags. Please don't leave any valuables like cash, jewelry, or electronics in your luggage, though. We recommend keeping those with you.",
            textZh: "绝对安全。行李间是锁着的，只有工作人员能进入。我们给您行李认领牌——取行李时需要。不过请不要在行李里留现金、珠宝或电子设备等贵重物品。建议随身携带。",
            keyPhrases: [
              { en: "luggage claim tag", zh: "行李认领牌" },
              { en: "valuables", zh: "贵重物品" },
              { en: "keep those with you", zh: "随身携带" },
            ],
            vocabNotes: {
              "claim tag": {
                meaningInContext: "在这里指用于取回行李的小标牌/凭证，上面有编号，类似机场的行李牌",
                similarUsage: "类似用法：Hold on to your claim tag — you'll need it to pick up your luggage.（保管好认领牌——取行李要用）",
              },
            },
            alternativeExpressions: [
              { textEn: "Totally secure — it's a locked room, staff only. Here's your claim ticket. Just keep your valuables on you, like wallet and electronics.", textZh: "非常安全——锁着的房间，只有员工能进。给您取件票。贵重物品随身带着就好，比如钱包和电子产品。", actionHint: "拿好取件票，贵重物品随身带", frequency: "common" },
              { textEn: "Very secure. We'll tag everything and give you a receipt to pick them up. Just a heads-up — take any cash or jewelry with you.", textZh: "非常安全。我们给所有行李贴标签并给您取件凭证。提醒一下——现金和首饰带在身上。", actionHint: "保管好凭证", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. I'll keep my laptop and camera with me. What if I come back after midnight?",
            textZh: "明白。电脑和相机我随身带。如果午夜后才回来怎么办？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The front desk is staffed 24 hours, so you can actually pick up your luggage at any time. I said midnight as a general guideline, but we won't turn you away. Just show your claim tag and ID to the night shift staff.",
            textZh: "前台24小时有人，所以其实随时都能取行李。我说午夜是一般建议，不会把您拒之门外。出示认领牌和证件给夜班工作人员就行。",
            keyPhrases: [
              { en: "staffed 24 hours", zh: "24小时有人值班" },
              { en: "night shift", zh: "夜班" },
              { en: "turn you away", zh: "拒之门外" },
            ],
            alternativeExpressions: [
              { textEn: "We're here around the clock, so don't stress about timing. Come whenever — just bring your tag and ID.", textZh: "我们全天候都在，时间不用担心。什么时候来都行——带上认领牌和证件就好。", actionHint: "放心安排行程", frequency: "common" },
              { textEn: "Honestly, come back whenever works for you. We won't close up on you. Just have your claim ticket handy.", textZh: "说实话，什么时候方便什么时候来。我们不会关门不让你取。带好取件票就行。", actionHint: "灵活安排取行李时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. I'll probably be back around 7 PM to pick everything up and then head to the airport.",
            textZh: "那就放心了。我大概晚上7点回来取行李然后去机场。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sounds like a plan. Would you like us to arrange a taxi to the airport for around 7:15? That way the car will be waiting when you get your bags.",
            textZh: "好的。要不要帮您安排7:15左右去机场的出租车？这样您取完行李车就在等了。",
            keyPhrases: [
              { en: "sounds like a plan", zh: "好主意/就这么办" },
              { en: "arrange a taxi", zh: "安排出租车" },
            ],
            literalMeaning: "\"Sounds like a plan\" 字面意思是「听起来像个计划」，实际表示「好主意、就这么办吧」。",
            alternativeExpressions: [
              { textEn: "Perfect. Want us to book you a cab to the airport at 7:15? It'll be ready and waiting when you pick up your stuff.", textZh: "好的。要不要帮您订7:15去机场的出租车？取行李的时候车就等着了。", actionHint: "决定是否需要出租车", frequency: "common" },
              { textEn: "Great plan! How about I line up a taxi for 7:15? That way you can grab your bags and head straight out.", textZh: "好主意！我帮您安排7:15的出租车怎么样？这样您拿了行李就能直接出发。", actionHint: "同意安排出租车", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be perfect. Yes, please book a taxi for 7:15. You've been so helpful!",
            textZh: "太好了。帮我订7:15的出租车。你帮了大忙！",
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
            textEn: "Hi, we just arrived but I know check-in isn't until 3 PM. Can we leave our bags here and come back later?",
            textZh: "你好，我们到了但我知道下午3点才能入住。能先把行李放这里晚点再来吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Welcome! Yes, absolutely — you can store your luggage with us while you explore the city. Let me also check if your room is ready early. Sometimes rooms open up before 3 PM.",
            textZh: "欢迎！完全可以——您可以把行李放我们这里然后去逛城市。我也帮您看看房间有没有提前准备好。有时3点前就有空房了。",
            keyPhrases: [
              { en: "store your luggage", zh: "寄存行李" },
              { en: "explore the city", zh: "逛城市" },
              { en: "open up", zh: "空出来" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! We'll tag your bags and keep them safe. Let me see if I can get you in early...", textZh: "没问题！我们给行李贴标签保管好。我看看能不能让您提前入住……", actionHint: "等前台查系统看有没有提前入住的可能", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be amazing. We took a red-eye flight and we're pretty exhausted.",
            textZh: "那太好了。我们坐了红眼航班，挺累的。",
            culturalNote: "\"red-eye flight\" 指深夜起飞、凌晨到达的航班，因为乘客到达时通常眼睛发红（睡眠不足）而得名。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Good news — your room is actually ready! I can check you in right now. It's a bit early, but since the room was cleaned this morning, there's no need to wait. No extra charge for early check-in.",
            textZh: "好消息——您的房间其实已经准备好了！我现在就能办入住。虽然早了一点，但房间今早已经打扫过了，不用等。提前入住不额外收费。",
            keyPhrases: [
              { en: "early check-in", zh: "提前入住" },
              { en: "no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              { textEn: "You're in luck — the room's all set! Let me check you in now. No extra fee or anything.", textZh: "运气不错——房间已经好了！我现在就帮您入住。没有额外费用。", actionHint: "办理入住手续", frequency: "common" },
              { textEn: "Great news! Your room got cleaned early, so I can get you in right away. No charge for the early check-in.", textZh: "好消息！您的房间提前打扫好了，可以马上入住。提前入住不加钱。", actionHint: "递上证件办理入住", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Really? That's wonderful! We're so grateful. Can someone help us with the bags?",
            textZh: "真的吗？太棒了！太感谢了。能帮我们搬行李吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course! I'll call a bellman right away. How many bags do you have?",
            textZh: "当然！我马上叫行李员。您有几件行李？",
            alternativeExpressions: [
              { textEn: "Absolutely! Let me get someone to help. How much luggage are we looking at?", textZh: "当然！我找人来帮忙。一共多少件行李？", actionHint: "告诉对方行李数量", frequency: "common" },
              { textEn: "Sure! I'll have a bellman over in a sec. How many pieces?", textZh: "好的！行李员马上就来。几件？", actionHint: "说明行李件数", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two big suitcases, two carry-ons, and a stroller. It's a lot, sorry!",
            textZh: "两个大行李箱、两个登机箱和一辆婴儿车。东西有点多，不好意思！",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "No need to apologize — that's what we're here for! Our bellman will bring a luggage cart. He'll take everything up to your room on the 8th floor. Just follow him to the elevator. Also, we have a baby crib available if you need one for the little one.",
            textZh: "不用道歉——这就是我们的工作！行李员会推行李车来。他会把所有东西送到您8楼的房间。跟他走去电梯就行。另外如果宝宝需要，我们有婴儿床可以用。",
            keyPhrases: [
              { en: "luggage cart", zh: "行李车" },
              { en: "carry-on", zh: "登机箱/随身行李" },
              { en: "stroller", zh: "婴儿车" },
              { en: "baby crib", zh: "婴儿床" },
            ],
            vocabNotes: {
              stroller: {
                meaningInContext: "在这里指可折叠的婴儿推车",
                similarUsage: "类似用法：You can bring your stroller right up to the gate at the airport.（在机场你可以把婴儿车推到登机口）",
              },
            },
            localVariants: {
              "en-US": "stroller",
              "en-GB": "pushchair / buggy",
              "en-AU": "pram",
            },
            alternativeExpressions: [
              { textEn: "Don't be sorry! That's totally normal. We'll get a cart and have it all upstairs in no time. Oh, and we've got cribs if your little one needs one.", textZh: "别不好意思！这很正常。我们推车来，一会儿就全搬上去。对了，如果宝宝需要，我们有婴儿床。", actionHint: "可以顺便要婴儿床", frequency: "common" },
              { textEn: "No worries at all — we handle big loads every day! The bellman will take care of everything. Need a crib for the baby too?", textZh: "完全没关系——我们每天都搬很多！行李员会全搞定。宝宝需要婴儿床吗？", actionHint: "告诉对方是否需要婴儿床", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A crib would be great, thank you! You've made our arrival so smooth.",
            textZh: "婴儿床太好了，谢谢！你们让我们的到达过程很顺利。",
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
              { textEn: "Hi there! Let me get those bags for you. How many do you have?", textZh: "你好！我来帮你拿包。一共几件？", actionHint: "指出你的行李", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "These three — the two big suitcases and this small one. Be careful with the small one, it has fragile items inside.",
            textZh: "这三件——两个大箱子和这个小的。小的请小心，里面有易碎物品。",
          },
          {
            speaker: "them",
            role: "行李员",
            textEn: "I'll be very careful with it. I'll put it on top of the cart so nothing presses against it. Your room is 815, right? Follow me to the elevator.",
            textZh: "我会很小心的。我放在行李车上面，这样不会被压到。您是815房对吗？跟我走去电梯。",
            keyPhrases: [
              { en: "on top of the cart", zh: "放在行李车上面" },
              { en: "presses against it", zh: "压到它" },
              { en: "fragile items", zh: "易碎物品" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, I'll keep that one on top so nothing squishes it. Room 815? Right this way.", textZh: "放心，这个我放最上面不会被压。815房？这边走。", actionHint: "跟着行李员走", frequency: "common" },
              { textEn: "Absolutely, I'll be extra gentle with that one. Follow me — elevator's just over here.", textZh: "当然，那个我会特别轻拿。跟我来——电梯就在那边。", actionHint: "跟行李员去电梯", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there anything I should know about the room? Any tips for making the most of our stay?",
            textZh: "谢谢。关于房间有什么需要知道的吗？有什么建议让我们住得更好？",
          },
          {
            speaker: "them",
            role: "行李员",
            textEn: "Here we are — room 815. Let me show you around quickly. The thermostat is here by the door. The safe is in the closet — you set your own code. The minibar has free water bottles. And my personal tip — the rooftop bar has the best sunset view in the city. It's open from 5 to midnight.",
            textZh: "到了——815房。我快速带您看看。温控器在门边。保险箱在衣柜里——自己设密码。迷你吧里的瓶装水是免费的。我个人建议——楼顶酒吧有全城最好的日落景观。营业时间下午5点到午夜。",
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
                similarUsage: "类似用法：Can you turn the thermostat down? It's too warm.（能把温控调低一点吗？太热了）",
              },
            },
            alternativeExpressions: [
              { textEn: "Here's your room! Quick tour — AC controls by the door, safe in the closet, free water in the minibar. And check out the rooftop bar for sunset — it's amazing.", textZh: "您的房间到了！快速介绍——空调在门边，保险箱在衣柜里，迷你吧里水免费。还有楼顶酒吧看日落——特别棒。", actionHint: "记住房间设施位置", frequency: "common" },
              { textEn: "Welcome to 815! Thermostat's right here, safe's in the wardrobe. Oh and a heads-up — the rooftop bar has killer sunset views. Opens at 5.", textZh: "欢迎来到815！温控在这里，保险箱在衣柜里。对了提醒一下——楼顶酒吧日落景观超棒。5点开门。", actionHint: "记住行李员的推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great advice! Here, this is for you.",
            textZh: "好建议！给你，这是给你的。",
            culturalNote: "在美国酒店，给行李员小费是普遍做法。一般每件行李$2-5，如果行李多或者行李员特别帮忙则给更多。递钱时说 \"This is for you\" 是最自然的方式。",
          },
          {
            speaker: "them",
            role: "行李员",
            textEn: "Thank you so much, that's very generous! If you need anything during your stay — extra pillows, restaurant recommendations, directions — just call the front desk and ask for the bell team. We're here to make your stay perfect.",
            textZh: "非常感谢，太慷慨了！住宿期间有任何需要——额外枕头、餐厅推荐、问路——打前台电话找行李组就行。我们会让您住得完美。",
            keyPhrases: [
              { en: "that's very generous", zh: "太慷慨了" },
              { en: "bell team", zh: "行李组/礼宾组" },
              { en: "restaurant recommendations", zh: "餐厅推荐" },
            ],
            culturalMeaning: "行李员说 \"That's very generous\" 是收到小费后的标准感谢用语，不论金额多少，这是一种礼貌回应。",
            alternativeExpressions: [
              { textEn: "Wow, thank you! That's really kind. Seriously, anything you need — just ring down to the front desk.", textZh: "哇，谢谢！太好了。真的，有任何需要——打电话到前台就行。", actionHint: "记住可以找行李组帮忙", frequency: "common" },
              { textEn: "I appreciate it! Don't hesitate to call us if you need anything at all. Enjoy your stay!", textZh: "太感谢了！有任何需要千万别客气。祝您住得愉快！", actionHint: "入住期间有事找前台行李组", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thanks again!",
            textZh: "好的。再次感谢！",
          },
        ],
      },
    ],
  },
];
