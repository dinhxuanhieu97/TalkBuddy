import type { PresetScene } from "../scene-types";

// ============================================================
// 机场场景 — Airport Scenes
// 覆盖：值机、安检、入境海关、行李问题、登机、转机、免税店、贵宾室、航班延误、海关申报
// ============================================================

export const AIRPORT_SCENES: PresetScene[] = [
  // ==================== 机场值机 ====================
  {
    id: "airport-checkin",
    tags: ["check in", "值机", "登机", "boarding pass"],
    category: "airport",
    titleZh: "机场值机",
    titleEn: "Airport Check-in",
    description: "到达机场后办理值机手续，包括选座、托运行李等",
    otherRole: "值机柜台工作人员",
    otherRoleIcon: "plane",
    flows: [
      {
        id: "standard",
        titleZh: "标准值机",
        titleEn: "Standard Check-in",
        description: "有机票、正常托运行李、选座",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check in for my flight to Tokyo.",
            textZh: "你好，我想办理去东京的航班值机。",
            casualVersion: "Hey, checking in for the Tokyo flight.",
            culturalNote: "在美国办理登机，直接说目的即可，无需像中文一样加上客套的“你好，我想...”",
            commonMistake: {
              wrong: "Hi, I want to check in for my flight to Tokyo.",
              correct: "Hi, I'd like to check in for my flight to Tokyo.",
              explanation: "“I want to...” 听起来太直接甚至有点粗鲁，用 “I'd like to...” 更礼貌、自然。",
            },
            formalityVariants: {
              casual: "Hey, checking in for Tokyo.",
              standard: "Hi, I'd like to check in for my flight to Tokyo.",
              formal: "Good morning/afternoon, I would like to check in for my flight to Tokyo, please.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure! May I see your passport and booking confirmation?",
            textZh: "好的！请出示您的护照和订票确认。",
            commonMistake: {
              wrong: "Can I see your passport?",
              correct: "May I see your passport?",
              explanation: "Can I...听起来像询问能力，May I...更礼貌，表达请求",
            },
            variations: [
              {
                textEn: "Of course. Passport, please. And do you have your booking reference?",
                textZh: "当然。请出示护照。有订票号码吗？",
              },
            ],
            keyPhrases: [
              { en: "passport", zh: "护照" },
              { en: "booking confirmation", zh: "订票确认" },
              { en: "booking reference", zh: "订票号码" },
            ],
            alternativeExpressions: [
              {
                textEn: "Can I get your passport and confirmation number?",
                textZh: "能给我您的护照和确认号吗？",
                actionHint: "递上护照和确认信息",
                frequency: "common",
              },
              {
                textEn: "Passport and booking details, please.",
                textZh: "请出示护照和订票信息。",
                actionHint: "简短要求出示证件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! Can I see your passport and confirmation?",
            formalityVariants: {
              casual: "Sure! Can I see your passport and confirmation?",
              standard: "Sure! May I see your passport and booking confirmation?",
              formal: "Certainly, may I please see your passport and booking confirmation?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
            culturalNote: "中国人在递东西时通常会说“给你”，但美国人常用“Here you go”或“Here you are”。",
            commonMistake: {
              wrong: "Give you.",
              correct: "Here you go.",
              explanation: "直接说 'Give you' 不自然，'Here you go' 是地道表达。",
            },
            casualVersion: "Here ya go.",
            formalityVariants: {
              casual: "Here ya go.",
              standard: "Here you go.",
              formal: "Here you are.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Thank you. Do you have a seating preference? Window, middle, or aisle?",
            textZh: "谢谢。您有座位偏好吗？靠窗、中间还是靠过道？",
            commonMistake: {
              wrong: "Do you want window, middle or aisle?",
              correct: "Window, middle, or aisle?",
              explanation: "直接说选项更简洁自然，避免'Do you want...'的直白",
            },
            keyPhrases: [
              { en: "seating preference", zh: "座位偏好" },
              { en: "window", zh: "靠窗" },
              { en: "middle", zh: "中间" },
              { en: "aisle", zh: "靠过道" },
            ],
            alternativeExpressions: [
              {
                textEn: "Any preference on seating — window or aisle?",
                textZh: "座位有偏好吗——靠窗还是过道？",
                actionHint: "说出座位偏好",
                frequency: "common",
              },
              {
                textEn: "Would you like a window seat or an aisle?",
                textZh: "您想要靠窗还是靠过道的座位？",
                actionHint: "二选一即可",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks. Seat preference? Window, middle, or aisle?",
            formalityVariants: {
              casual: "Thanks. Seat preference? Window, middle, or aisle?",
              standard: "Thank you. Do you have a seating preference? Window, middle, or aisle?",
              formal:
                "Thank you. Regarding your seating, do you have a specific preference among a window, middle, or aisle seat?",
            },
          },
          {
            speaker: "you",
            textEn: "A window seat, please.",
            textZh: "靠窗的，谢谢。",
            casualVersion: "Window, please.",
            commonMistake: {
              wrong: "I want window seat",
              correct: "A window seat, please.",
              explanation: "直接说“我想要...”不够礼貌，用 “A... please” 或 “I'd like a...” 更自然。",
            },
            formalityVariants: {
              casual: "Window, please.",
              standard: "A window seat, please.",
              formal: "I would prefer a window seat, if available, please.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "I have a window seat in row 23. How many bags are you checking in?",
            textZh: "23排有一个靠窗座位。您有几件行李要托运？",
            commonMistake: {
              wrong: "How many bags do you want to check?",
              correct: "How many bags are you checking in?",
              explanation: "'Are you checking in'更地道，'do you want to check'有点生硬",
            },
            keyPhrases: [
              { en: "row", zh: "排" },
              { en: "checking in", zh: "托运" },
              { en: "how many bags", zh: "几件行李" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're in 23A, window. Any bags to check?",
                textZh: "您在23A靠窗。有行李要托运吗？",
                actionHint: "告知行李数量",
                frequency: "common",
              },
              {
                textEn: "Row 23 by the window. How many pieces of luggage are you checking?",
                textZh: "23排靠窗。您要托运几件行李？",
                actionHint: "回答行李件数",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got you a window seat in 23. How many bags you checking?",
            formalityVariants: {
              casual: "Got you a window seat in 23. How many bags you checking?",
              standard: "I have a window seat in row 23. How many bags are you checking in?",
              formal:
                "I have assigned you a window seat in row 23. May I inquire as to the number of bags you will be checking in?",
            },
          },
          {
            speaker: "you",
            textEn: "Just one suitcase.",
            textZh: "就一个箱子。",
            casualVersion: "Just one suitcase.",
            commonMistake: {
              wrong: "One suitcase only.",
              correct: "Just one suitcase.",
              explanation: "中文习惯说“只一个”，英文用 'Just one...' 更自然。",
            },
            formalityVariants: {
              casual: "One suitcase.",
              standard: "Just one suitcase.",
              formal: "I will be checking one suitcase.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Please place it on the scale... That's 22 kilos, within the limit. Here's your boarding pass. Gate B12, boarding starts at 2:30 PM.",
            textZh: "请放到秤上……22公斤，没有超重。给您登机牌。B12登机口，下午2:30开始登机。",
            commonMistake: {
              wrong: "This is your boarding pass.",
              correct: "Here's your boarding pass.",
              explanation: "Here's...更简洁自然，'This is...'有时听起来像在解释什么",
            },
            keyPhrases: [
              { en: "scale", zh: "秤" },
              { en: "within the limit", zh: "没有超重" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "gate", zh: "登机口" },
              { en: "boarding starts", zh: "开始登机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pop it on the belt... 22 kilos, you're good. Here's your boarding pass — Gate B12, boards at 2:30.",
                textZh: "放上传送带……22公斤，没问题。给您登机牌——B12登机口，2:30登机。",
                actionHint: "记住登机口和时间",
                frequency: "common",
              },
              {
                textEn: "Let me weigh that... All good, under the limit. Your gate is B12, boarding at half past two.",
                textZh: "我称一下……没问题，没超重。您的登机口是B12，两点半登机。",
                actionHint: "留意登机时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Put it on the scale... 22 kilos, good. Here's your boarding pass. Gate B12, boarding at 2:30.",
            formalityVariants: {
              casual: "Put it on the scale... 22 kilos, good. Here's your boarding pass. Gate B12, boarding at 2:30.",
              standard:
                "Please place it on the scale... That's 22 kilos, within the limit. Here's your boarding pass. Gate B12, boarding starts at 2:30 PM.",
              formal:
                "Kindly place your item on the scale. Excellent, that's 22 kilograms, which is within the permissible limit. Here is your boarding pass. You will depart from Gate B12, and boarding will commence promptly at 2:30 PM.",
            },
          },
          {
            speaker: "you",
            textEn: "Is my flight on time?",
            textZh: "航班准点吗？",
            casualVersion: "The flight still on time?",
            commonMistake: {
              wrong: "My flight is on time?",
              correct: "Is my flight on time?",
              explanation: "中文直译的疑问句常不改变语序，英文疑问句通常需要倒装。",
            },
            formalityVariants: {
              casual: "Flight on time?",
              standard: "Is my flight on time?",
              formal: "Could you please confirm if my flight is scheduled to depart on time?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Yes, it's on schedule. Have a nice flight!",
            textZh: "是的，准点。祝您旅途愉快！",
            commonMistake: {
              wrong: "It is on time. Wish you a good trip!",
              correct: "Yes, it's on time. Have a pleasant journey!",
              explanation: "Wish you...不自然，Have a...更常用；Journey比trip更正式",
            },
            keyPhrases: [
              { en: "on schedule", zh: "准点" },
              { en: "have a nice flight", zh: "旅途愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, right on time. Have a great trip!",
                textZh: "是的，准点。祝旅途愉快！",
                actionHint: "准备去登机口",
                frequency: "common",
              },
              {
                textEn: "Everything's on time. Safe travels!",
                textZh: "一切准时。一路平安！",
                actionHint: "可以出发了",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, on schedule. Have a good flight!",
            formalityVariants: {
              casual: "Yep, on schedule. Have a good flight!",
              standard: "Yes, it's on schedule. Have a nice flight!",
              formal: "Yes, it is currently on schedule. We wish you a pleasant flight!",
            },
          },
        ],
      },

      // --- Flow 2: 行李超重 ---
      {
        id: "overweight",
        titleZh: "行李超重",
        titleEn: "Overweight Luggage",
        description: "托运行李超过重量限制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to check in for flight AA208 to Los Angeles.",
            textZh: "你好，我要办理去洛杉矶的 AA208 航班值机。",
            casualVersion: "Hey, checking in for AA208 to LA.",
            culturalNote: "在美国办理登机，直接说目的即可，无需像中文一样加上客套的“你好，我想...”",
            commonMistake: {
              wrong: "Hi, I want to check in for flight AA208 to Los Angeles.",
              correct: "Hi, I'd like to check in for flight AA208 to Los Angeles.",
              explanation: "“I want to...” 听起来太直接甚至有点粗鲁，用 “I'd like to...” 更礼貌、自然。",
            },
            formalityVariants: {
              casual: "Hey, checking in for AA208 to LA.",
              standard: "Hi, I'd like to check in for flight AA208 to Los Angeles.",
              formal: "Good morning/afternoon, I would like to check in for flight AA208, departing for Los Angeles.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Passport, please... Thank you. How many bags to check?",
            textZh: "请出示护照……谢谢。几件行李要托运？",
            culturalNote: "中国人可能觉得直接要求看护照有点生硬，但这是美国机场的常见对话。",
            commonMistake: {
              wrong: "How many bags do you have?",
              correct: "How many bags to check?",
              explanation: "明确地问'to check'更具体，直接问'do you have'可能引起误解",
            },
            alternativeExpressions: [
              {
                textEn: "Can I see your passport? Great. Any bags to check in today?",
                textZh: "能看一下护照吗？好的。今天有行李要托运吗？",
                actionHint: "回答行李数量",
                frequency: "common",
              },
              {
                textEn: "Passport, please... All right. How many bags are you checking?",
                textZh: "护照请给我……好的。您要托运几件行李？",
                actionHint: "告知行李件数",
                frequency: "occasional",
              },
            ],
            casualVersion: "Passport, please... Thanks. How many bags you checking?",
            formalityVariants: {
              casual: "Passport, please... Thanks. How many bags you checking?",
              standard: "Passport, please... Thank you. How many bags to check?",
              formal:
                "May I see your passport, please? Thank you. And how many pieces of luggage will you be checking today?",
            },
          },
          {
            speaker: "you",
            textEn: "Two suitcases.",
            textZh: "两个箱子。",
            casualVersion: "Two suitcases.",
            commonMistake: {
              wrong: "I have two suitcases.",
              correct: "Two suitcases.",
              explanation: "简单回答时，通常不需要完整的句子结构，直接说数量和物品即可。",
            },
            formalityVariants: {
              casual: "Two suitcases.",
              standard: "Two suitcases.",
              formal: "I have two suitcases.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Please put the first one on the scale... This one is 28 kilos. I'm afraid the limit is 23 kilos. You'll need to remove about 5 kilos, or there's an excess baggage fee of $75.",
            textZh:
              "请把第一个放到秤上……这个28公斤。很抱歉，限重23公斤。您需要拿掉大约5公斤，或者交75美元的超重行李费。",
            commonMistake: {
              wrong: "This one is too heavy.",
              correct: "This one is 28 kilos.",
              explanation: "直接说具体重量更专业和客观，避免主观的'too heavy'",
            },
            keyPhrases: [
              { en: "the limit is", zh: "限重是" },
              { en: "remove", zh: "拿掉" },
              { en: "excess baggage fee", zh: "超重行李费" },
            ],
            isBranchPoint: true,
            responseTip: "可以选择拿出一些东西，或者付超重费",
            alternativeExpressions: [
              {
                textEn:
                  "Hmm, this one's 28 kilos — 5 over the limit. You can either take some stuff out or pay the $75 overweight fee.",
                textZh: "嗯，这个28公斤——超了5公斤。您可以拿些东西出来，或者交75美元的超重费。",
                actionHint: "决定减重还是付费",
                frequency: "common",
              },
              {
                textEn:
                  "It's overweight, I'm afraid. 28 kilos against a 23-kilo limit. There's a $75 charge, or you can repack.",
                textZh: "恐怕超重了。28公斤，限重23公斤。可以付75美元，或者重新整理行李。",
                actionHint: "选择付费或重新打包",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "First one on the scale... This one's 28. Limit's 23. Gotta take out like 5 kilos, or it's a $75 fee.",
            formalityVariants: {
              casual:
                "First one on the scale... This one's 28. Limit's 23. Gotta take out like 5 kilos, or it's a $75 fee.",
              standard:
                "Please put the first one on the scale... This one is 28 kilos. I'm afraid the limit is 23 kilos. You'll need to remove about 5 kilos, or there's an excess baggage fee of $75.",
              formal:
                "Kindly place the first item on the scale. I see this piece weighs 28 kilograms. Unfortunately, the weight limit is 23 kilograms. You will need to either remove approximately 5 kilograms of items, or there will be an excess baggage charge of $75.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll move some things to my carry-on. Can I open it here?",
            textZh: "我把一些东西移到手提行李里。可以在这里打开吗？",
            casualVersion: "I'll move some stuff to my carry-on. Can I open it here?",
            commonMistake: {
              wrong: "I can open it here?",
              correct: "Can I open it here?",
              explanation: "中文直译的疑问句常不改变语序，英文疑问句通常需要倒装。",
            },
            formalityVariants: {
              casual: "I'll move some stuff to my carry-on. Can I open it here?",
              standard: "I'll move some things to my carry-on. Can I open it here?",
              formal: "I will transfer some items to my carry-on bag. May I proceed to open it at this location?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure, go ahead. Just step to the side so other passengers can pass.",
            textZh: "可以。请到旁边去，这样其他旅客可以通过。",
            commonMistake: {
              wrong: "You can open it here.",
              correct: "Sure, go ahead.",
              explanation: "'Go ahead'更自然地表示允许，'You can'显得有些生硬",
            },
            keyPhrases: [
              { en: "carry-on", zh: "手提行李" },
              { en: "step to the side", zh: "到旁边" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem. Just move over there so we can keep the line moving.",
                textZh: "没问题。请到那边去，这样队伍可以继续。",
                actionHint: "到旁边整理行李",
                frequency: "common",
              },
              {
                textEn: "Of course. Use the repacking area right behind you.",
                textZh: "当然可以。用您身后的重新打包区域。",
                actionHint: "找到打包区域",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, go for it. Just step aside so others can pass.",
            formalityVariants: {
              casual: "Yeah, go for it. Just step aside so others can pass.",
              standard: "Sure, go ahead. Just step to the side so other passengers can pass.",
              formal:
                "Certainly, please do. Kindly step slightly to the side to ensure other passengers have sufficient room to proceed.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'm done. Can you weigh it again?",
            textZh: "好了。能再称一下吗？",
            commonMistake: {
              wrong: "I finish. Can you weigh again?",
              correct: "Okay, I'm done. Can you weigh it again?",
              explanation: "中国人常说'I finish'，但'I'm done'更地道，也更礼貌",
            },
            casualVersion: "Okay, done. Can you weigh it again?",
            formalityVariants: {
              casual: "Okay, done. Can you weigh it again?",
              standard: "Okay, I'm done. Can you weigh it again?",
              formal: "Alright, I have finished. Would you be able to re-weigh it, please?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Let's see... 22.5 kilos. That's fine now. And the second bag?",
            textZh: "看看……22.5公斤。这下没问题了。第二个箱子呢？",
            commonMistake: {
              wrong: "Look... 22.5 kilos.",
              correct: "Let's see... 22.5 kilos.",
              explanation: "'Let's see'是口语中表示'让我看看'的自然说法，'Look'则太直接",
            },
            alternativeExpressions: [
              {
                textEn: "22.5 — perfect, that's under. Let's do the other one.",
                textZh: "22.5——没问题，没超。我们称另一个吧。",
                actionHint: "把第二个箱子放上去",
                frequency: "common",
              },
              {
                textEn: "That's within the limit now. Can I see your second bag?",
                textZh: "现在没超重了。第二个箱子给我看看？",
                actionHint: "准备第二个箱子",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme see... 22.5 kilos. That's good. Second bag?",
            formalityVariants: {
              casual: "Lemme see... 22.5 kilos. That's good. Second bag?",
              standard: "Let's see... 22.5 kilos. That's fine now. And the second bag?",
              formal:
                "Let me check... 22.5 kilograms. That is now within the acceptable limit. What about the second piece of luggage?",
            },
          },
          {
            speaker: "you",
            textEn: "This one should be lighter.",
            textZh: "这个应该轻一些。",
            commonMistake: {
              wrong: "This one should be more light.",
              correct: "This one should be lighter.",
              explanation: "比较级应使用'lighter'而非'more light'",
            },
            casualVersion: "This one should be lighter.",
            formalityVariants: {
              casual: "This one should be lighter.",
              standard: "This one should be lighter.",
              formal: "This particular item should weigh less.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "18 kilos, no problem. Here's your boarding pass. Gate C5, boarding at 4:15. Please note, your second bag has a separate tag — make sure to claim both at baggage carousel.",
            textZh: "18公斤，没问题。给您登机牌。C5登机口，4:15登机。注意，第二个箱子有单独的标签——到达时两个都要取。",
            culturalNote: "在美国，托运两个行李箱通常每个都有独立的行李标签，取行李时要留意是否会分成两次出来。",
            commonMistake: {
              wrong: "I can collect both at arrival?",
              correct: "you'll need to collect both upon arrival.",
              explanation: "You'll need to...是告知性语气，'I can...'是疑问句，表达不明确",
            },
            keyPhrases: [
              { en: "separate tag", zh: "单独标签" },
              { en: "claim", zh: "领取" },
              { en: "baggage carousel", zh: "行李转盘" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All good — 18 kilos. Here's your pass. Gate C5, boards at 4:15. Don't forget you have two bags to pick up at the carousel.",
                textZh: "没问题——18公斤。给您登机牌。C5登机口，4:15登机。别忘了在转盘上取两件行李。",
                actionHint: "记住取两件行李",
                frequency: "common",
              },
              {
                textEn:
                  "That one's fine. You're all checked in. Both bags are tagged separately, so grab them both when you land.",
                textZh: "这个没问题。您都办好了。两个箱子分别贴了标签，落地时都要取。",
                actionHint: "注意两个行李标签",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "18 kilos, no prob. Here's your boarding pass. Gate C5, boarding at 4:15. Heads up, second bag's got a separate tag — grab both at the carousel.",
            formalityVariants: {
              casual:
                "18 kilos, no prob. Here's your boarding pass. Gate C5, boarding at 4:15. Heads up, second bag's got a separate tag — grab both at the carousel.",
              standard:
                "18 kilos, no problem. Here's your boarding pass. Gate C5, boarding at 4:15. Please note, your second bag has a separate tag — make sure to claim both at baggage carousel.",
              formal:
                "That's 18 kilograms, which is perfectly acceptable. Here is your boarding pass. You will depart from Gate C5, with boarding commencing at 4:15 PM. Please be advised that your second bag has been issued a separate identification tag; kindly ensure you retrieve both items from the baggage carousel upon arrival.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 过安检 ====================
  {
    id: "airport-security",
    tags: ["security", "安检", "TSA"],
    category: "airport",
    titleZh: "过安检",
    titleEn: "Security Check",
    description: "通过机场安检，包括物品检查、身体检查等",
    otherRole: "安检人员",
    otherRoleIcon: "shield",
    flows: [
      {
        id: "standard",
        titleZh: "标准安检",
        titleEn: "Standard Security Screening",
        description: "正常过安检的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "安检",
            textEn:
              "Please place your bag on the belt and remove any laptops, liquids, and large electronics from your bag.",
            textZh: "请把包放到传送带上，把笔记本电脑、液体和大型电子设备拿出来。",
            commonMistake: {
              wrong: "Please put the bag on the conveyor belt.",
              correct: "Please place your bag on the belt.",
              explanation: "在美国安检，直接说belt就行，不用说conveyor belt。",
            },
            keyPhrases: [
              { en: "belt", zh: "传送带" },
              { en: "remove", zh: "拿出来" },
              { en: "laptops", zh: "笔记本电脑" },
              { en: "liquids", zh: "液体" },
              { en: "electronics", zh: "电子设备" },
            ],
            alternativeExpressions: [
              {
                textEn: "Bag on the belt, please. Laptops and liquids out in a separate tray.",
                textZh: "包放传送带上。笔记本和液体单独放托盘里。",
                actionHint: "分开放电子设备和液体",
                frequency: "common",
              },
              {
                textEn: "Everything in the bin. Take out your laptop, any bottles, and large electronics.",
                textZh: "所有东西放箱子里。把笔记本、瓶子和大型电子设备拿出来。",
                actionHint: "按要求分类放置",
                frequency: "occasional",
              },
            ],
            casualVersion: "Bag on the belt, and take out laptops, liquids, big electronics.",
            formalityVariants: {
              casual: "Bag on the belt, laptops, liquids, big electronics out.",
              standard:
                "Please place your bag on the belt and remove any laptops, liquids, and large electronics from your bag.",
              formal:
                "Kindly place your carry-on luggage onto the conveyor belt and ensure all laptops, liquids, and significant electronic devices are removed for screening.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to take off my shoes?",
            textZh: "需要脱鞋吗？",
            formalityVariants: {
              casual: "Gotta take off my shoes?",
              standard: "Do I need to take off my shoes?",
              formal: "Am I required to remove my footwear?",
            },
            casualVersion: "Gotta take off my shoes?",
            commonMistake: {
              wrong: "Do I need take off my shoes?",
              correct: "Do I need to take off my shoes?",
              explanation: "问句中动词不定式前常漏掉“to”。",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Yes, please remove your shoes and belt and place them in a tray.",
            textZh: "是的，请脱鞋和解下腰带，放在托盘里。",
            commonMistake: {
              wrong: "Yes, please take off your shoes and belt, put in a tray.",
              correct: "Yes, please remove your shoes and belt and place them in a tray.",
              explanation: "'put in a tray' 语法不完整，要加them。",
            },
            keyPhrases: [
              { en: "remove your shoes", zh: "脱鞋" },
              { en: "belt", zh: "腰带" },
              { en: "tray", zh: "托盘" },
            ],
            culturalNote: "在美国 TSA 安检通常要求脱鞋，其他国家不一定。",
            alternativeExpressions: [
              {
                textEn: "Shoes and belt off, please. Put them in the bin.",
                textZh: "请脱鞋解腰带，放进箱子里。",
                actionHint: "脱鞋解腰带放托盘",
                frequency: "common",
              },
              {
                textEn: "Take your shoes off and your belt too. Everything goes in the tray.",
                textZh: "鞋子脱掉，腰带也解下来。全部放托盘里。",
                actionHint: "照做即可",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, shoes and belt off, put 'em in a tray.",
            formalityVariants: {
              casual: "Yep, shoes, belt in a tray.",
              standard: "Yes, please remove your shoes and belt and place them in a tray.",
              formal:
                "Yes, please remove your footwear and any belts you may be wearing, placing them into a provided tray for screening.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I keep my jacket on?",
            textZh: "可以不脱外套吗？",
            formalityVariants: {
              casual: "Can I keep my jacket on?",
              standard: "Can I keep my jacket on?",
              formal: "Am I permitted to retain my jacket?",
            },
            casualVersion: "Jacket on okay?",
            commonMistake: {
              wrong: "Can I not take off my jacket?",
              correct: "Can I keep my jacket on?",
              explanation: "中式英语的否定疑问句，地道说法是用keep on或肯定疑问句。",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Please remove your jacket as well. Now step through the scanner, please.",
            textZh: "请把外套也脱掉。现在请走过扫描仪。",
            commonMistake: {
              wrong: "Please take off your jacket too. Now walk through the scanner.",
              correct: "Please remove your jacket as well. Now step through the scanner, please.",
              explanation: "\"step through\" 更常用于通过安检门。",
            },
            keyPhrases: [
              { en: "scanner", zh: "扫描仪" },
              { en: "step through", zh: "走过去" },
            ],
            alternativeExpressions: [
              {
                textEn: "Jacket off too, please. Go ahead and walk through.",
                textZh: "外套也脱掉。请走过去。",
                actionHint: "脱外套后走过扫描仪",
                frequency: "common",
              },
              {
                textEn: "Your jacket needs to go in the tray as well. Then step through when the light's green.",
                textZh: "外套也要放托盘里。绿灯亮了就走过去。",
                actionHint: "等绿灯再走",
                frequency: "occasional",
              },
            ],
            casualVersion: "Jacket off too. Go through the scanner now.",
            formalityVariants: {
              casual: "Jacket off too. Go through the scanner.",
              standard: "Please remove your jacket as well. Now step through the scanner, please.",
              formal: "Kindly remove your jacket, please. You may now proceed through the security scanner.",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "You're good. Please collect your belongings from the belt.",
            textZh: "通过了。请在传送带上取回您的物品。",
            commonMistake: {
              wrong: "You are passed. Please take your things from the belt.",
              correct: "You're clear. Please collect your belongings from the belt.",
              explanation: "\"通过了\"应说\"You're clear/good to go\"。",
            },
            keyPhrases: [
              { en: "you're good", zh: "通过了" },
              { en: "collect your belongings", zh: "取回物品" },
            ],
            alternativeExpressions: [
              {
                textEn: "All clear. Grab your stuff from the belt.",
                textZh: "没问题。从传送带上拿走您的东西。",
                actionHint: "取回物品",
                frequency: "common",
              },
              {
                textEn: "You're all set. Don't forget your items on the other side.",
                textZh: "您可以走了。别忘了另一边的物品。",
                actionHint: "记得拿回所有东西",
                frequency: "occasional",
              },
            ],
            casualVersion: "You're good. Grab your stuff from the belt.",
            formalityVariants: {
              casual: "You're all set. Grab your stuff off the belt.",
              standard: "You're good. Please collect your belongings from the belt.",
              formal: "You are cleared to proceed. Please retrieve your personal belongings from the conveyor belt.",
            },
          },
        ],
      },

      // --- Flow 2: 包里有违禁品 ---
      {
        id: "prohibited-item",
        titleZh: "违禁品被扣",
        titleEn: "Prohibited Item Found",
        description: "安检发现包里有不允许携带的物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "安检",
            textEn: "Excuse me, is this your bag? I need to check it. We found something in the scan.",
            textZh: "请问这是您的包吗？我需要检查一下。扫描发现了东西。",
            commonMistake: {
              wrong: "Excuse me, this is your bag? I need to check it. We found something in scan.",
              correct: "Excuse me, is this your bag? I need to check it. We found something in the scan.",
              explanation: "问句要加is，scan前要加the。",
            },
            keyPhrases: [
              { en: "check it", zh: "检查" },
              { en: "found something", zh: "发现了东西" },
              { en: "scan", zh: "扫描" },
            ],
            alternativeExpressions: [
              {
                textEn: "Is this bag yours? We need to take a closer look — something flagged on the X-ray.",
                textZh: "这个包是您的吗？我们需要仔细看看——X光上有东西。",
                actionHint: "确认是自己的包",
                frequency: "common",
              },
              {
                textEn: "Whose bag is this? We spotted something and need to do a manual check.",
                textZh: "这是谁的包？我们发现了东西，需要手动检查。",
                actionHint: "确认并配合检查",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey, this your bag? Gotta check it. Something came up on the scan.",
            formalityVariants: {
              casual: "Hey, this your bag? Gotta check it. Something came up on the scan.",
              standard: "Excuse me, is this your bag? I need to check it. We found something in the scan.",
              formal:
                "Pardon me, sir/madam, is this your luggage? I will need to conduct a secondary inspection. Our scanning equipment detected an item of interest.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine. What's the problem?",
            textZh: "是的，是我的。有什么问题？",
            casualVersion: "Yeah, that's mine. What's up?",
            commonMistake: {
              wrong: "Yes, it is mine. What is problem?",
              correct: "Yes, that's mine. What's the problem?",
              explanation: "中式英语常省略冠词，并用 it is 而非 that's。",
            },
            formalityVariants: {
              casual: "Yeah, that's mine. What's up?",
              standard: "Yes, that's mine. What's the problem?",
              formal: "Yes, that is indeed my bag. May I inquire what the issue is?",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn:
              "You have a water bottle that's more than 100ml. Liquids over 100ml are not allowed through security. You'll need to either drink it, pour it out, or dispose of it.",
            textZh: "您有一瓶水超过100毫升。超过100毫升的液体不能过安检。您可以喝掉、倒掉或扔掉。",
            culturalNote: "美国机场安检对液体有严格限制，100ml是常见规则。",
            commonMistake: {
              wrong: "You have a water bottle over 100ml. Exceed 100ml liquid cannot pass security.",
              correct: "You have a water bottle that's over 100ml. Liquids over 100ml can't go through security.",
              explanation: "\"超过100毫升的液体\"更自然地表达为 \"liquids over 100ml\"。",
            },
            keyPhrases: [
              { en: "100ml", zh: "100毫升" },
              { en: "not allowed", zh: "不允许" },
              { en: "drink it", zh: "喝掉" },
              { en: "pour it out", zh: "倒掉" },
              { en: "dispose of", zh: "扔掉/处理掉" },
            ],
            alternativeExpressions: [
              {
                textEn: "This water bottle can't go through. You can finish it here or toss it in the bin over there.",
                textZh: "这瓶水不能过安检。您可以在这里喝完或扔到那边的垃圾桶里。",
                actionHint: "喝掉或扔掉",
                frequency: "common",
              },
              {
                textEn:
                  "Liquids over 100ml aren't permitted. There's a disposal bin right here if you want to throw it away.",
                textZh: "超过100毫升的液体不允许带过去。这里有处理桶，可以扔掉。",
                actionHint: "扔到处理桶里",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got a water bottle over 100ml. Can't take liquids over that through security. Gotta drink it, pour it out, or toss it.",
            formalityVariants: {
              casual:
                "Got a water bottle over 100ml. Can't take liquids over that through security. Gotta drink it, pour it out, or toss it.",
              standard:
                "You have a water bottle that's more than 100ml. Liquids over 100ml are not allowed through security. You'll need to either drink it, pour it out, or dispose of it.",
              formal:
                "Sir/Madam, you are in possession of a liquid container exceeding 100 milliliters. Our regulations prohibit liquids in excess of 100 milliliters from passing through the security checkpoint. Your options are to consume the liquid, empty the container, or discard the item.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I forgot about that. I'll throw it away. Sorry about that.",
            textZh: "哦，我忘了。我扔掉吧。抱歉。",
            casualVersion: "Oh, totally forgot. I'll just toss it. My bad.",
            commonMistake: {
              wrong: "Oh, I forgot. I throw it. Sorry.",
              correct: "Oh, I forgot about that. I'll throw it away. Sorry about that.",
              explanation: '忘记用 "forgot about that" 更完整，"throw it away" 是固定搭配。',
            },
            formalityVariants: {
              casual: "Oh, totally forgot. I'll just toss it. My bad.",
              standard: "Oh, I forgot about that. I'll throw it away. Sorry about that.",
              formal:
                "My apologies, I had overlooked that regulation. I will dispose of it immediately. Please excuse the oversight.",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn:
              "No problem. There are water fountains past security where you can refill a bottle. You're all set now.",
            textZh: "没关系。安检后面有饮水机，可以重新装水。您可以走了。",
            culturalNote: "美国机场有许多饮水机，通常免费，可自带瓶子反复灌装。",
            commonMistake: {
              wrong: "No problem. After security there are water fountains you can refill a bottle. You can leave.",
              correct: "No problem. There are water fountains past security where you can refill a bottle. You're good to go.",
              explanation: "'After security' 更自然地表达为 'past security' 或 'after you pass security'。",
            },
            keyPhrases: [
              { en: "water fountains", zh: "饮水机" },
              { en: "past security", zh: "过了安检之后" },
              { en: "refill", zh: "重新装/加满" },
              { en: "all set", zh: "可以了/好了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries. You can get water on the other side — there are fountains everywhere past the checkpoint.",
                textZh: "没关系。过了安检那边到处有饮水机，可以重新接水。",
                actionHint: "过安检后再接水",
                frequency: "common",
              },
              {
                textEn: "That's fine. You'll find water stations after security. Have a good flight.",
                textZh: "没事。过安检后有饮水站。祝您旅途愉快。",
                actionHint: "安检后找饮水站",
                frequency: "occasional",
              },
            ],
            casualVersion: "No worries. Got water fountains past security if you wanna refill. You're good.",
            formalityVariants: {
              casual: "No worries. Got water fountains past security if you wanna refill. You're good.",
              standard:
                "No problem. There are water fountains past security where you can refill a bottle. You're all set now.",
              formal:
                "It's quite alright. There are water replenishment stations available beyond the security checkpoint should you wish to refill your bottle. You are cleared to proceed.",
            },
          },
        ],
      },

      // --- Flow 3: 携带药物 ---
      {
        id: "medication",
        titleZh: "携带药物过安检",
        titleEn: "Traveling with Medication",
        description: "随身携带需要的药物通过安检",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have prescription medication in my bag. Do I need to declare it?",
            textZh: "请问，我包里有处方药。需要申报吗？",
            casualVersion: "Hey, I got prescription meds in my bag. Gotta declare 'em?",
            culturalNote: "美国无需主动申报，除非被问及或有特殊物品。",
            commonMistake: {
              wrong: "I have medicine. Need declare it?",
              correct: "I have prescription medication. Do I need to declare it?",
              explanation: "\"Medication\" 更正式，\"prescription\" 表明是处方药。",
            },
            formalityVariants: {
              casual: "Hey, I got prescription meds in my bag. Gotta declare 'em?",
              standard: "Excuse me, I have prescription medication in my bag. Do I need to declare it?",
              formal: "Pardon me, I carry prescription medication within my luggage. Is it necessary to declare these items?",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn:
              "Prescription medication is fine to carry on. Just keep it in its original packaging with the pharmacy label. If it's a liquid medication over 100ml, please let us know before screening.",
            textZh:
              "处方药可以随身携带。请放在原包装里，保留药房标签。如果是超过100毫升的液体药物，请在检查前告知我们。",
            culturalNote: "美国对处方药携带规定宽松，但原包装和药店标签很重要。",
            commonMistake: {
              wrong: "Prescription medication can carry on. Just put it in original package with pharmacy label. If it is liquid medicine over 100ml, please tell us before check.",
              correct: "Prescription medication is fine to carry on. Just keep it in its original packaging with the pharmacy label. If it's a liquid medication over 100ml, please inform us before inspection.",
              explanation: "\"可以随身携带\"用 \"fine to carry on\" 更自然；\"原包装\"用 \"its original packaging\"。",
            },
            casualVersion: "Prescription meds are cool to carry on. Just keep 'em in their original packaging with the pharmacy label. If it's liquid meds over 100ml, let us know before screening.",
            formalityVariants: {
              casual: "Prescription meds are cool to carry on. Just keep 'em in their original packaging with the pharmacy label. If it's liquid meds over 100ml, let us know before screening.",
              standard: "Prescription medication is fine to carry on. Just keep it in its original packaging with the pharmacy label. If it's a liquid medication over 100ml, please let us know before screening.",
              formal: "Prescription medication is permissible in your carry-on luggage. Kindly ensure it remains in its original packaging, complete with the pharmacy label. Should the medication be in liquid form and exceed 100 milliliters, please inform us prior to the screening process.",
            },
            keyPhrases: [
              { en: "prescription medication", zh: "处方药" },
              { en: "carry on", zh: "随身携带" },
              { en: "original packaging", zh: "原包装" },
              { en: "pharmacy label", zh: "药房标签" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's totally fine. Just make sure it's in the original bottle with the label on it.",
                textZh: "完全没问题。只要确保放在有标签的原装瓶里就行。",
                actionHint: "保留原包装",
                frequency: "common",
              },
              {
                textEn:
                  "You can bring prescription meds on board. Keep them labeled. If any are liquid over 100ml, declare them before screening.",
                textZh: "处方药可以带上飞机。保留标签。如果有超过100毫升的液体药物，检查前说一声。",
                actionHint: "液体药物要提前告知",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I also have insulin needles. They're in a medical kit.",
            textZh: "我还有胰岛素注射针。在医疗包里。",
            culturalNote: "美国机场对医疗针头有特殊规定，通常需要医生证明，但会允许携带。",
            casualVersion: "Got insulin needles too. They're in a medical kit.",
            commonMistake: {
              wrong: "I have insulin needle.",
              correct: "I have insulin needles.",
              explanation: "英文可数名词单复数很重要，\"needles\" 是复数。",
            },
            formalityVariants: {
              casual: "Got insulin needles too. They're in a medical kit.",
              standard: "I also have insulin needles. They're in a medical kit.",
              formal: "Additionally, I possess insulin needles. They are contained within a designated medical kit.",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn:
              "That's fine. Medical supplies including needles are allowed as long as you have a doctor's letter or prescription. Can I see it?",
            textZh: "没问题。医疗用品包括针头都可以，只要有医生证明或处方。能看一下吗？",
            culturalNote: "美国安检对医疗用品的医生证明接受度高，但确保是英文或有翻译。",
            commonMistake: {
              wrong: "No problem. Medical supplies include needles are fine, if you have doctor's note or prescription. Can I see it?",
              correct: "That's fine. Medical supplies, including needles, are fine, as long as you have a doctor's note or prescription. Can I see it?",
              explanation: "'包括针头'应用 'including needles'，主语是'medical supplies'，谓语动词是 'are'。",
            },
            casualVersion: "No problem. Medical stuff, including needles, is cool, long as you got a doctor's note or prescription. Can I see it?",
            formalityVariants: {
              casual: "No problem. Medical stuff, including needles, is cool, long as you got a doctor's note or prescription. Can I see it?",
              standard: "That's fine. Medical supplies including needles are allowed as long as you have a doctor's letter or prescription. Can I see it?",
              formal: "That is acceptable. Medical supplies, including hypodermic needles, are permitted provided you can present a physician's letter or a valid prescription. May I review the documentation?",
            },
            keyPhrases: [
              { en: "medical supplies", zh: "医疗用品" },
              { en: "needles", zh: "针头" },
              { en: "doctor's letter", zh: "医生证明" },
              { en: "prescription", zh: "处方" },
            ],
            alternativeExpressions: [
              {
                textEn: "Needles are okay if you've got a prescription or doctor's note. May I take a look?",
                textZh: "有处方或医生证明的话针头没问题。我看一下可以吗？",
                actionHint: "出示医生证明",
                frequency: "common",
              },
              {
                textEn:
                  "Medical needles are permitted with proper documentation. Do you have something from your doctor?",
                textZh: "有正规文件的医疗针头是允许的。您有医生出具的文件吗？",
                actionHint: "准备好医疗文件",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my doctor's letter. It's in English and Chinese.",
            textZh: "这是我的医生证明。有英文和中文两个版本。",
            casualVersion: "Here's my doctor's letter. Got it in English and Chinese.",
            commonMistake: {
              wrong: "Here is my doctor letter.",
              correct: "Here's my doctor's letter.",
              explanation: "\"doctor's\" 表所属关系，名词所有格。",
            },
            formalityVariants: {
              casual: "Here's my doctor's letter. Got it in English and Chinese.",
              standard: "Here's my doctor's letter. It's in English and Chinese.",
              formal: "Here is my physician's letter. It is provided in both English and Chinese.",
            },
            culturalNote: "出国时如果携带药物，建议准备英文版的医生证明。",
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "Thank you. Everything looks good. You can proceed. Have a safe trip.",
            textZh: "谢谢。一切没问题。您可以走了。旅途平安。",
            culturalNote: "安检人员礼貌地祝愿旅客旅途愉快，这是常见的服务用语。",
            commonMistake: {
              wrong: "Thank you. Everything ok. You can go. Have a safe trip.",
              correct: "Thank you. Everything looks good. You can proceed. Have a safe trip.",
              explanation: "\"Everything looks good\" 更自然。\"You can proceed\" 比 \"you can go\" 更常用。",
            },
            casualVersion: "Thanks. Looks good. You're all set. Have a good trip.",
            formalityVariants: {
              casual: "Thanks. Looks good. You're all set. Have a good trip.",
              standard: "Thank you. Everything looks good. You can proceed. Have a safe trip.",
              formal: "Thank you. All documentation appears to be in order. You may now proceed. We wish you a pleasant and safe journey.",
            },
            alternativeExpressions: [
              {
                textEn: "All good. You're free to go. Safe travels!",
                textZh: "没问题。您可以走了。一路平安！",
                actionHint: "通过安检",
                frequency: "common",
              },
              {
                textEn: "Everything checks out. Go ahead, and have a nice flight.",
                textZh: "都没问题。请走吧，祝旅途愉快。",
                actionHint: "前往登机口",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "additional-screening",
        titleZh: "额外安检",
        titleEn: "Additional Screening",
        description: "被随机选中额外检查、打开行李解释物品、配合安检放行",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "安检",
            textEn: "Sir/Ma'am, you've been selected for additional screening. Please step over here.",
            textZh: "先生/女士，您被选中做额外检查。请到这边来。",
            culturalNote: "被选中额外检查不代表你有问题，很多是随机的。保持冷静配合，不要开玩笑说任何关于武器或炸弹的话。",
            keyPhrases: [{ en: "additional screening", zh: "额外检查" }, { en: "step over here", zh: "到这边来" }],
            alternativeExpressions: [
              { textEn: "Excuse me, you've been randomly selected for a secondary check. Could you come this way?", textZh: "不好意思，您被随机选中做二次检查。能到这边来吗？", actionHint: "randomly selected = 随机选中", frequency: "common" },
              { textEn: "We need to do a quick additional screening. Please follow me.", textZh: "我们需要做一次快速的额外检查。请跟我来。", actionHint: "语气平和", frequency: "occasional" },
            ],
            casualVersion: "Hey, you've been selected for extra screening. Step over here, please.",
            formalityVariants: {
              casual: "Hey, you've been picked for extra screening. Come this way.",
              standard: "You've been selected for additional screening. Please step over here.",
              formal: "Pardon the inconvenience. You have been selected for supplementary screening. Would you kindly step to this area?",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, okay. Sure. Is there a problem with my bag?",
            textZh: "哦，好的。当然。我的包有问题吗？",
            commonMistake: {
              wrong: "Why? What did I do wrong?",
              correct: "Sure. Is there a problem with my bag?",
              explanation: "不要质问 'Why' 或显得紧张。简单配合就好，问 'Is there a problem?' 是正常的。",
            },
            casualVersion: "Oh, okay. No problem. Something up with my bag?",
            formalityVariants: {
              casual: "Oh sure, no problem. Something wrong with my bag?",
              standard: "Okay, sure. Is there a problem with my bag?",
              formal: "Certainly. May I ask if there is an issue with my luggage?",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "It's just a random check, nothing to worry about. I'll need to take a look inside your carry-on. Could you open it for me, please?",
            textZh: "只是随机检查，不用担心。我需要看一下你的手提行李。能帮我打开吗？",
            keyPhrases: [{ en: "random check", zh: "随机检查" }, { en: "carry-on", zh: "手提行李" }],
            alternativeExpressions: [
              { textEn: "Don't worry, it's routine. Mind opening your bag so I can take a look?", textZh: "别担心，这是例行程序。能打开包让我看看吗？", actionHint: "routine = 例行的", frequency: "common" },
              { textEn: "This is just standard procedure. I need to inspect the contents of your bag.", textZh: "这只是标准程序。我需要检查你包里的东西。", actionHint: "standard procedure = 标准程序", frequency: "occasional" },
            ],
            casualVersion: "Just random, no worries. Can you pop open your carry-on for me?",
            formalityVariants: {
              casual: "Just random, no biggie. Open your bag for me?",
              standard: "It's a random check. Could you open your carry-on for me?",
              formal: "This is purely a random selection. I will need to examine the contents of your carry-on luggage. Would you kindly open it?",
            },
          },
          {
            speaker: "you",
            textEn: "Of course. Here you go. Sorry, what was that? Should I take everything out?",
            textZh: "当然。给你。抱歉，你说什么？要全部拿出来吗？",
            casualVersion: "Sure, here. Wait — did you say take everything out?",
            formalityVariants: {
              casual: "Sure. Wait, you want everything out?",
              standard: "Of course. Sorry, should I take everything out?",
              formal: "Certainly. My apologies — would you prefer that I remove all items from the bag?",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "No, that's fine. I'll go through it. What's this right here? This container with the dark liquid.",
            textZh: "不用，没关系。我来翻。这个是什么？这个装深色液体的容器。",
            keyPhrases: [{ en: "go through it", zh: "翻看/检查" }, { en: "container", zh: "容器" }],
            alternativeExpressions: [
              { textEn: "No need. I'll check it myself. Can you tell me what this is? This jar with the brown stuff.", textZh: "不用。我自己检查。能告诉我这是什么吗？这个装棕色东西的罐子。", actionHint: "指向可疑物品", frequency: "common" },
            ],
            casualVersion: "Nah, I got it. What's this here? Dark liquid in this bottle.",
            formalityVariants: {
              casual: "Nah, I'll do it. What's this? This dark liquid thing.",
              standard: "No, I'll go through it. What's this container with the dark liquid?",
              formal: "That will not be necessary. I shall examine the contents. Could you please identify this container with the dark-colored liquid?",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that's a traditional Chinese medicine — it's an herbal remedy. Um, like a health supplement. It's for my stomach.",
            textZh: "哦，那是传统中药——是草药制剂。嗯，就像保健品。是给胃用的。",
            commonMistake: {
              wrong: "It's Chinese medicine.",
              correct: "It's a traditional herbal remedy, like a health supplement.",
              explanation: "只说 'Chinese medicine' 对方可能不理解。用 'herbal remedy' 或 'health supplement' 解释更清楚。",
            },
            casualVersion: "Oh that? It's like a Chinese herbal thing — a health supplement for my stomach.",
            formalityVariants: {
              casual: "That's a Chinese herbal thing. Like a supplement. For my stomach.",
              standard: "It's a traditional Chinese herbal remedy — a health supplement for my stomach.",
              formal: "That is a traditional Chinese herbal remedy. It functions as a health supplement, specifically for digestive purposes.",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "I see. And this wrapped package here?",
            textZh: "明白了。那这个包装好的东西呢？",
            alternativeExpressions: [
              { textEn: "Got it. What about this item? The one that's wrapped up.", textZh: "明白。这个东西呢？包起来的这个。", actionHint: "继续检查", frequency: "common" },
            ],
            casualVersion: "Okay. And what's this wrapped thing?",
            formalityVariants: {
              casual: "Got it. What's this wrapped one?",
              standard: "I see. And this wrapped package?",
              formal: "Understood. And could you explain this wrapped item?",
            },
          },
          {
            speaker: "you",
            textEn: "That's a gift for my friend — it's a silk scarf. Would you like me to open it?",
            textZh: "那是给朋友的礼物——是一条丝巾。需要我打开给你看吗？",
            casualVersion: "Gift for a friend — silk scarf. Want me to open it?",
            formalityVariants: {
              casual: "Gift for my friend. Silk scarf. Want me to unwrap it?",
              standard: "It's a gift for my friend — a silk scarf. Would you like me to open it?",
              formal: "That is a gift intended for a friend of mine. It is a silk scarf. Shall I unwrap it for your inspection?",
            },
          },
          {
            speaker: "them",
            role: "安检",
            textEn: "No, that won't be necessary. Everything looks fine. Sorry for the inconvenience. You're all set — have a safe flight.",
            textZh: "不用了。一切没问题。抱歉给您添麻烦了。您可以走了——祝旅途平安。",
            keyPhrases: [{ en: "you're all set", zh: "你可以走了" }, { en: "sorry for the inconvenience", zh: "抱歉添麻烦了" }],
            alternativeExpressions: [
              { textEn: "All good. Appreciate your patience. You're free to go — safe travels!", textZh: "没问题。感谢您的耐心。您可以走了——一路平安！", actionHint: "appreciate your patience = 感谢耐心", frequency: "common" },
              { textEn: "Everything checks out. Thank you for your cooperation. Enjoy your flight.", textZh: "一切正常。感谢您的配合。祝旅途愉快。", actionHint: "正式感谢", frequency: "occasional" },
            ],
            casualVersion: "Looks good. Sorry 'bout that. You're good to go — safe flight!",
            formalityVariants: {
              casual: "All good. Sorry about that. You're good — safe flight!",
              standard: "Everything's fine. Sorry for the inconvenience. You're all set — have a safe flight.",
              formal: "All items have been satisfactorily cleared. I apologize for any inconvenience caused. You may proceed to your gate. I wish you a safe and pleasant journey.",
            },
          },
          {
            speaker: "you",
            textEn: "No problem at all. Thank you. Have a good day.",
            textZh: "完全没问题。谢谢。祝您愉快。",
            casualVersion: "All good. Thanks! Have a good one.",
            formalityVariants: {
              casual: "No worries. Thanks! Have a good one.",
              standard: "No problem at all. Thank you. Have a good day.",
              formal: "Not at all. Thank you for your diligence. I hope you have a pleasant day.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 入境海关 ====================
  {
    id: "airport-immigration",
    tags: ["immigration", "入境", "passport", "护照"],
    category: "airport",
    titleZh: "入境海关",
    titleEn: "Immigration & Customs",
    description: "到达目的地国家后的入境审查，包括海关问答",
    otherRole: "海关官员",
    otherRoleIcon: "passport",
    flows: [
      {
        id: "tourism",
        titleZh: "旅游入境",
        titleEn: "Tourist Entry",
        description: "以旅游目的入境的标准问答",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "Next, please. Passport.",
            textZh: "下一位。护照。",
            culturalNote: "美国入境官通常很直接，无需额外客套。",
            keyPhrases: [
              { en: "next", zh: "下一位" },
              { en: "passport", zh: "护照" },
            ],
            responseTip: "海关官员通常话很简短，不要紧张",
            alternativeExpressions: [
              {
                textEn: "Step forward. Passport, please.",
                textZh: "上前来。护照请给我。",
                actionHint: "递上护照",
                frequency: "common",
              },
              {
                textEn: "Next. Documents, please.",
                textZh: "下一位。请出示证件。",
                actionHint: "递上护照和相关文件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Next. Passport.",
            formalityVariants: {
              casual: "Next. Passport.",
              standard: "Next, please. Passport.",
              formal: "Next person, please. May I see your passport?",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go.",
            textZh: "给您。",
            casualVersion: "Here ya go.",
            commonMistake: {
              wrong: "Give you.",
              correct: "Here you go.",
              explanation: "中文“给你”直译不自然，英文常用“Here you go/it is”",
            },
            formalityVariants: {
              casual: "Here ya go.",
              standard: "Here you go.",
              formal: "Here is my passport.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "What's the purpose of your visit?",
            textZh: "您来访的目的是什么？",
            culturalNote: "边检官通常说话简短直接，无需客套。",
            commonMistake: {
              wrong: "What is your purpose?",
              correct: "What is the purpose of your visit?",
              explanation: "直接说“你的目的”不够自然，需加 visit。",
            },
            variations: [
              { textEn: "Why are you visiting the United States?", textZh: "您为什么来美国？" },
              { textEn: "Business or pleasure?", textZh: "出差还是旅游？" },
            ],
            keyPhrases: [
              { en: "purpose of your visit", zh: "来访目的" },
              { en: "business or pleasure", zh: "出差还是旅游" },
            ],
            alternativeExpressions: [
              {
                textEn: "What brings you here today?",
                textZh: "您今天来这里做什么？",
                actionHint: "说明来访目的",
                frequency: "common",
              },
              {
                textEn: "What are you here for?",
                textZh: "您来做什么的？",
                actionHint: "简要说明目的",
                frequency: "occasional",
              },
            ],
            casualVersion: "Purpose of visit?",
            formalityVariants: {
              casual: "Purpose of visit?",
              standard: "What's the purpose of your visit?",
              formal: "Could you please state the purpose of your visit?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm here for tourism. I'll be traveling around the West Coast for two weeks.",
            textZh: "我来旅游的。会在西海岸旅行两周。",
            casualVersion: "Just visiting. Doing a West Coast road trip.",
            commonMistake: {
              wrong: "I am tourism.",
              correct: "I'm here for tourism.",
              explanation: '表达目的时，用 "here for" 或 "traveling for" 更自然。',
            },
            formalityVariants: {
              casual: "Just here for tourism. Gonna travel the West Coast for two weeks.",
              standard: "I'm here for tourism. I'll be traveling around the West Coast for two weeks.",
              formal:
                "My purpose of visit is tourism. I plan to travel along the West Coast for a duration of two weeks.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Where will you be staying?",
            textZh: "您住哪里？",
            commonMistake: {
              wrong: "Where live?",
              correct: "Where will you be staying?",
              explanation: "中文的“住哪里”直接翻译过来不自然，需用 be staying。",
            },
            variations: [
              { textEn: "What's your hotel address?", textZh: "酒店地址是什么？" },
              { textEn: "Do you have a hotel reservation?", textZh: "有酒店预订吗？" },
            ],
            alternativeExpressions: [
              {
                textEn: "Where are you staying while you're here?",
                textZh: "您在这期间住在哪里？",
                actionHint: "说出酒店名称或地址",
                frequency: "common",
              },
              {
                textEn: "Do you have an address for where you'll be?",
                textZh: "您有住处的地址吗？",
                actionHint: "提供住宿地址",
                frequency: "occasional",
              },
            ],
            casualVersion: "Where you staying?",
            formalityVariants: {
              casual: "Where you staying?",
              standard: "Where will you be staying?",
              formal: "Could you please provide your accommodation details?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm staying at the Marriott in San Francisco for the first three nights, then driving down to Los Angeles.",
            textZh: "前三晚住旧金山的万豪酒店，然后开车去洛杉矶。",
            commonMistake: {
              wrong: "I will stay at Marriott in San Francisco for the first three nights.",
              correct: "I'll be staying at the Marriott in San Francisco for the first three nights.",
              explanation: "“be staying at” 更自然，表示已经安排好的行程。",
            },
            casualVersion: "Staying at the Marriott in SF for three nights, then heading to LA.",
            formalityVariants: {
              casual: "Staying at the Marriott in SF for three nights, then heading to LA.",
              standard:
                "I'm staying at the Marriott in San Francisco for the first three nights, then driving down to Los Angeles.",
              formal:
                "I will be accommodated at the Marriott Hotel in San Francisco for the initial three nights, following which I will proceed to Los Angeles.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Do you have a return ticket?",
            textZh: "有回程机票吗？",
            commonMistake: {
              wrong: "Have return ticket?",
              correct: "Do you have a return ticket?",
              explanation: "问句需要助动词 do。",
            },
            keyPhrases: [{ en: "return ticket", zh: "回程机票" }],
            alternativeExpressions: [
              {
                textEn: "Can I see your return flight booking?",
                textZh: "能看一下您的回程航班预订吗？",
                actionHint: "出示回程机票",
                frequency: "common",
              },
              {
                textEn: "When are you flying back? Do you have a ticket?",
                textZh: "您什么时候飞回去？有机票吗？",
                actionHint: "告知回程日期并出示机票",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got a return ticket?",
            formalityVariants: {
              casual: "Got a return ticket?",
              standard: "Do you have a return ticket?",
              formal: "Do you possess a confirmed return itinerary?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's my return ticket. I'm flying back on March 25th.",
            textZh: "有，这是我的回程机票。3月25日飞回去。",
            commonMistake: {
              wrong: "Yes, I have it. It's March 25th.",
              correct: "Yes, here is my return ticket. I'm flying back on March 25th.",
              explanation: "直接给出机票并说明日期，更清晰。",
            },
            casualVersion: "Yep, here's the return. Flying back March 25th.",
            formalityVariants: {
              casual: "Yep, here's the return. Flying back March 25th.",
              standard: "Yes, here's my return ticket. I'm flying back on March 25th.",
              formal: "Yes, I do. My return itinerary indicates a departure on March 25th.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Are you bringing any food, plants, or agricultural products?",
            textZh: "您有携带任何食品、植物或农产品吗？",
            culturalNote: "美国海关对携带食物、植物和农产品有严格规定。",
            commonMistake: {
              wrong: "Do you have food, plants, or farm product?",
              correct: "Are you bringing any food, plants, or agricultural products?",
              explanation: "product 需用复数 products，且用 agricultural 更正式。",
            },
            keyPhrases: [
              { en: "food", zh: "食品" },
              { en: "plants", zh: "植物" },
              { en: "agricultural products", zh: "农产品" },
            ],
            alternativeExpressions: [
              {
                textEn: "Do you have any food items, fruits, or seeds with you?",
                textZh: "您身上有食品、水果或种子吗？",
                actionHint: "如实回答",
                frequency: "common",
              },
              {
                textEn: "Anything to declare — food, plants, animal products?",
                textZh: "有需要申报的吗——食品、植物、动物产品？",
                actionHint: "如实申报",
                frequency: "occasional",
              },
            ],
            casualVersion: "Any food, plants, or farm stuff?",
            formalityVariants: {
              casual: "Got any food, plants, or farm stuff?",
              standard: "Are you bringing any food, plants, or agricultural products?",
              formal:
                "Are you currently in possession of any food items, botanical specimens, or agricultural products?",
            },
          },
          {
            speaker: "you",
            textEn: "No, I have nothing to declare.",
            textZh: "没有，我没有需要申报的。",
            casualVersion: "Nope, nothing to declare.",
            commonMistake: {
              wrong: "I have no declare.",
              correct: "I have nothing to declare.",
              explanation: '"nothing to declare" 是固定短语，不能直接说 "no declare"。',
            },
            formalityVariants: {
              casual: "Nope, nothing to declare.",
              standard: "No, I have nothing to declare.",
              formal: "No, I do not have any items requiring declaration.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Alright, welcome to the United States. Enjoy your trip.",
            textZh: "好的，欢迎来到美国。祝旅途愉快。",
            keyPhrases: [
              { en: "welcome to", zh: "欢迎来到" },
              { en: "enjoy your trip", zh: "旅途愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everything looks fine. Welcome, and have a great stay.",
                textZh: "一切没问题。欢迎，祝您在这里过得愉快。",
                actionHint: "通过海关",
                frequency: "common",
              },
              {
                textEn: "You're all set. Enjoy your time in the States.",
                textZh: "您可以走了。在美国玩得开心。",
                actionHint: "取回护照离开",
                frequency: "occasional",
              },
            ],
            casualVersion: "Alright, welcome to the US. Enjoy the trip.",
            formalityVariants: {
              casual: "Alright, welcome to the US. Enjoy the trip.",
              standard: "Alright, welcome to the United States. Enjoy your trip.",
              formal: "Very well. Welcome to the United States. We hope you have an enjoyable journey.",
            },
          },
        ],
      },

      // --- Flow 2: 被多问问题 ---
      {
        id: "extra-questions",
        titleZh: "被追问更多",
        titleEn: "Additional Questioning",
        description: "海关官员问了更多问题，需要提供更多信息",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn: "What do you do for a living?",
            textZh: "您是做什么工作的？",
            commonMistake: {
              wrong: "What is your job?",
              correct: "What do you do for a living?",
              explanation: "“What do you do for a living?” 是更自然的询问工作方式。",
            },
            keyPhrases: [{ en: "do for a living", zh: "做什么工作" }],
            alternativeExpressions: [
              {
                textEn: "What's your occupation?",
                textZh: "您的职业是什么？",
                actionHint: "告知职业",
                frequency: "common",
              },
              {
                textEn: "And what kind of work do you do?",
                textZh: "您做什么工作？",
                actionHint: "简要说明工作",
                frequency: "common",
              },
            ],
            casualVersion: "What do you do?",
            formalityVariants: {
              casual: "What do you do?",
              standard: "What do you do for a living?",
              formal: "Could you please state your occupation?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm a marketing manager at a technology company in Shanghai.",
            textZh: "我在上海一家科技公司做市场经理。",
            casualVersion: "I'm a marketing manager at a tech company in Shanghai.",
            commonMistake: {
              wrong: "I am marketing manager",
              correct: "I'm a marketing manager",
              explanation: "职业前需要冠词'a'或'an'。",
            },
            formalityVariants: {
              casual: "I'm a marketing manager at a tech company in Shanghai.",
              standard: "I am a marketing manager at a technology company in Shanghai.",
              formal: "My occupation is a marketing manager at a technology corporation based in Shanghai.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "How much money are you carrying with you?",
            textZh: "您身上带了多少现金？",
            commonMistake: {
              wrong: "How much cash do you carry?",
              correct: "How much money are you carrying with you?",
              explanation: "“are carrying” 指当前状态，“carry” 泛指携带习惯。",
            },
            keyPhrases: [
              { en: "how much money", zh: "多少钱" },
              { en: "carrying", zh: "携带" },
            ],
            culturalNote: "美国入境携带超过 $10,000 现金需要申报。",
            alternativeExpressions: [
              {
                textEn: "How much cash do you have on you?",
                textZh: "您身上有多少现金？",
                actionHint: "如实回答金额",
                frequency: "common",
              },
              {
                textEn: "Are you carrying more than ten thousand dollars in cash or equivalents?",
                textZh: "您携带的现金或等价物超过一万美元吗？",
                actionHint: "如实回答",
                frequency: "occasional",
              },
            ],
            casualVersion: "How much cash you got on you?",
            formalityVariants: {
              casual: "How much cash you got?",
              standard: "How much money are you carrying with you?",
              formal: "Could you please declare the total amount of currency you are currently possessing?",
            },
          },
          {
            speaker: "you",
            textEn: "About $2,000 in cash, and I have credit cards.",
            textZh: "大约2000美元现金，还有信用卡。",
            casualVersion: "About $2K in cash, plus credit cards.",
            commonMistake: {
              wrong: "About 2000 dollars cash",
              correct: "About $2,000 in cash",
              explanation: "表达“现金”时常会用到“in cash”。",
            },
            formalityVariants: {
              casual: "Got about $2K cash, plus cards.",
              standard: "About $2,000 in cash, and I have credit cards.",
              formal:
                "I am carrying approximately two thousand U.S. dollars in cash, and I also possess various credit cards.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Have you been to the United States before?",
            textZh: "您以前来过美国吗？",
            commonMistake: {
              wrong: "Did you come to the United States before?",
              correct: "Have you been to the United States before?",
              explanation: "“Have you been to...” 是询问过去经历的正确时态。",
            },
            alternativeExpressions: [
              {
                textEn: "Is this your first time in the U.S.?",
                textZh: "这是您第一次来美国吗？",
                actionHint: "回答是否来过",
                frequency: "common",
              },
              {
                textEn: "Have you visited the States before?",
                textZh: "您以前来过美国吗？",
                actionHint: "如实回答",
                frequency: "common",
              },
            ],
            casualVersion: "Been to the U.S. before?",
            formalityVariants: {
              casual: "Been to the U.S. before?",
              standard: "Have you been to the United States before?",
              formal: "Is this your first visit to the United States, or have you traveled here previously?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I visited New York two years ago for a vacation.",
            textZh: "来过，两年前去纽约度假。",
            casualVersion: "Yeah, went to New York a couple years back for vacation.",
            commonMistake: {
              wrong: "I visited New York two years ago vacation.",
              correct: "I visited New York two years ago for a vacation.",
              explanation: '度假常用"for a vacation"或"on vacation"。',
            },
            formalityVariants: {
              casual: "Yeah, went to NYC a couple years back for vacation.",
              standard: "Yes, I visited New York two years ago for a vacation.",
              formal: "Affirmative, I traveled to New York approximately two years prior for leisure purposes.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn: "Okay, you're all set. Go ahead.",
            textZh: "好的，没问题了。请过去吧。",
            keyPhrases: [
              { en: "all set", zh: "没问题了" },
              { en: "go ahead", zh: "过去吧" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everything checks out. You can go through.",
                textZh: "都没问题。您可以过去了。",
                actionHint: "通过海关",
                frequency: "common",
              },
              {
                textEn: "You're good. Welcome.",
                textZh: "没问题了。欢迎。",
                actionHint: "取回护照离开",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, you're good. Head on through.",
            formalityVariants: {
              casual: "Alright, you're good. Head on through.",
              standard: "Okay, you're all set. Go ahead.",
              formal: "Very well, all necessary procedures have been completed. You may proceed.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 行李问题 ====================
  {
    id: "airport-luggage",
    category: "airport",
    titleZh: "行李问题",
    titleEn: "Luggage Issues",
    description: "行李丢失、损坏或延误的处理",
    otherRole: "行李服务台",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "lost",
        titleZh: "行李没到",
        titleEn: "Lost Luggage",
        description: "在行李转盘等了很久但行李没出来",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I've been waiting at the baggage carousel for 40 minutes, but my luggage hasn't arrived.",
            textZh: "请问，我在行李转盘等了40分钟了，但行李还没出来。",
            culturalNote: "中国人在提出请求前常用“请问”表示礼貌，但在美国更常直接说“Excuse me”后陈述目的。",
            casualVersion: "Hey, I've been at the carousel for like 40 minutes, and my bag's still not here.",
            commonMistake: {
              wrong: "Excuse me, I am waiting for 40 minutes...",
              correct: "Excuse me, I've been waiting for 40 minutes...",
              explanation: "表示持续了一段时间的动作要用现在完成进行时，而不是现在进行时。",
            },
            formalityVariants: {
              casual: "Hey, been waiting at the carousel for 40 mins, but no bag yet.",
              standard:
                "Excuse me, I've been waiting at the baggage carousel for 40 minutes, but my luggage hasn't arrived.",
              formal:
                "Pardon me, I have been awaiting my luggage at the baggage carousel for approximately 40 minutes, and it has not yet appeared.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I'm sorry about that. May I see your baggage claim tag? It should be attached to your boarding pass.",
            textZh: "很抱歉。能看一下您的行李票吗？应该贴在登机牌上的。",
            culturalNote: "直接说“sorry about that”更自然",
            commonMistake: {
              wrong: "I am sorry.",
              correct: "I'm so sorry to hear that.",
              explanation: "“I am sorry”听起来不够真诚，用“I'm sorry to hear that”更能表达同情。",
            },
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李票" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "attached to", zh: "贴在……上" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry to hear that. Can I see your luggage receipt? It's the sticker on your boarding pass.",
                textZh: "很遗憾。能看一下您的行李收据吗？就是登机牌上的那个贴纸。",
                actionHint: "找到登机牌上的行李贴纸",
                frequency: "common",
              },
              {
                textEn: "Let me help you with that. Do you have your claim tag handy?",
                textZh: "我来帮您处理。您的行李票方便拿出来吗？",
                actionHint: "出示行李票",
                frequency: "occasional",
              },
            ],
            casualVersion: "Oh, sorry 'bout that. Can I see your bag tag? Should be on your boarding pass.",
            formalityVariants: {
              casual: "Sorry 'bout that. Can I see your bag tag? It's usually on your boarding pass.",
              standard:
                "I'm sorry about that. May I see your baggage claim tag? It should be attached to your boarding pass.",
              formal:
                "My apologies for the inconvenience. Would you please present your baggage claim tag? It is typically affixed to your boarding pass.",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my baggage claim tag.",
            textZh: "这是我的行李票。",
            casualVersion: "Here's my bag tag.",
            commonMistake: {
              wrong: "This is my baggage claim tag.",
              correct: "Here's my baggage claim tag.",
              explanation: "递东西时用 Here's/Here you go 比 This is 更自然。",
            },
            formalityVariants: {
              casual: "Here's my bag tag.",
              standard: "Here's my baggage claim tag.",
              formal: "Here it is, my baggage claim tag.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Thank you. Let me track it in our system... It looks like your bag was left behind in Beijing and will arrive on the next flight at 10 PM tonight.",
            textZh: "谢谢。让我在系统里查一下……看起来您的行李留在北京了，会搭今晚10点的下一班飞机过来。",
            commonMistake: {
              wrong: "Your bag was left in Beijing.",
              correct: "Your bag was left behind in Beijing.",
              explanation: "“left behind”比“left in”更常用于描述物品被意外遗漏或留下。",
            },
            keyPhrases: [
              { en: "track it", zh: "追踪" },
              { en: "left behind", zh: "留在/落在" },
              { en: "next flight", zh: "下一班飞机" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Let me look it up... It seems your bag didn't make the connection. It's on its way and should arrive tonight.",
                textZh: "我查一下……您的行李好像没赶上转机。正在运来，今晚应该能到。",
                actionHint: "了解行李到达时间",
                frequency: "common",
              },
              {
                textEn:
                  "I'm checking now... Your luggage is still at the origin airport. It'll be on the next available flight.",
                textZh: "我在查……您的行李还在出发机场。会搭最近的航班过来。",
                actionHint: "询问具体到达时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Thanks. Lemme track it... Looks like your bag got left in Beijing, should be on the next flight, 10 PM tonight.",
            formalityVariants: {
              casual:
                "Thanks. Lemme check... Looks like your bag got left in Beijing, comes on the 10 PM flight tonight.",
              standard:
                "Thank you. Let me track it in our system... It looks like your bag was left behind in Beijing and will arrive on the next flight at 10 PM tonight.",
              formal:
                "Thank you. Allow me to ascertain its status within our system... It appears your luggage was inadvertently delayed in Beijing and is scheduled to arrive on the subsequent flight this evening at 10 PM.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's frustrating. I need my clothes and medication. Can you deliver it to my hotel once it arrives?",
            textZh: "太郁闷了。我需要衣服和药。到了之后能送到我酒店吗？",
            casualVersion:
              "Ugh, that's so annoying. I need my clothes and meds. Can you just send it to my hotel when it gets here?",
            commonMistake: {
              wrong: "I need clothes and medicine.",
              correct: "I need my clothes and medication.",
              explanation: '"Clothes" 通常用复数。"Medication" 更正式，"meds" 更口语化。',
            },
            formalityVariants: {
              casual:
                "Ugh, that's annoying. I need my clothes and meds. Can you send it to my hotel when it gets here?",
              standard:
                "That's frustrating. I need my clothes and medication. Can you deliver it to my hotel once it arrives?",
              formal:
                "That is quite frustrating. I have an immediate need for my attire and prescribed medication. Would it be possible for you to arrange delivery to my hotel upon its arrival?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Absolutely. We'll deliver it to your hotel free of charge. Please fill out this form with your hotel address and phone number. We'll also give you a toiletry kit for tonight.",
            textZh:
              "当然可以。我们会免费送到您的酒店。请填写这张表格，写上酒店地址和电话。我们也会给您一个洗漱包应急。",
            commonMistake: {
              wrong: "We will send to your hotel.",
              correct: "We'll deliver it to your hotel free of charge.",
              explanation: "常用“deliver it to”和“free of charge”，而“send to”听起来不完整且“for free”稍显随意。",
            },
            keyPhrases: [
              { en: "deliver", zh: "送/配送" },
              { en: "free of charge", zh: "免费" },
              { en: "fill out this form", zh: "填写表格" },
              { en: "toiletry kit", zh: "洗漱包" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we can have it sent to your hotel at no cost. Just write down the address here. And here's an overnight kit.",
                textZh: "当然，我们可以免费送到您的酒店。把地址写在这里就行。这是应急洗漱包。",
                actionHint: "填写酒店地址",
                frequency: "common",
              },
              {
                textEn:
                  "We'll courier it to you once it arrives. No charge. Fill in your details on this form, and take this amenity kit for tonight.",
                textZh: "行李到了我们会快递给您。不收费。在这张表上填写您的信息，今晚先用这个应急包。",
                actionHint: "填表并拿洗漱包",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally. We'll get it to your hotel, no charge. Just fill out this form with your hotel address and number. We'll also give you a little toiletry kit for tonight.",
            formalityVariants: {
              casual:
                "Sure thing. We'll get it to your hotel, no charge. Just fill out this form with your hotel info. And we'll give you a little toiletry kit too.",
              standard:
                "Absolutely. We'll deliver it to your hotel free of charge. Please fill out this form with your hotel address and phone number. We'll also give you a toiletry kit for tonight.",
              formal:
                "Certainly. We will arrange complimentary delivery to your hotel. Kindly complete this form with your hotel's address and contact number. Additionally, we will provide a complimentary toiletry kit for your immediate needs this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. What if the bag is damaged or something is missing?",
            textZh: "谢谢。如果行李损坏了或少了东西怎么办？",
            casualVersion: "Thanks. What if my bag's damaged or stuff's missing?",
            commonMistake: {
              wrong: "What if my bag damaged or something lost?",
              correct: "What if the bag is damaged or something is missing?",
              explanation: '需要动词 "is" 构成被动语态或描述状态。"Missing" 表示丢失的，"lost" 强调失去的动作。',
            },
            formalityVariants: {
              casual: "Thanks. What if the bag's damaged or stuff's gone?",
              standard: "Thank you. What if the bag is damaged or something is missing?",
              formal:
                "Thank you. In the event that the luggage is damaged or any contents are missing, what is the protocol?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "If there's any damage or missing items, please report it within 7 days at this same counter or call this number. Here's your reference number for tracking.",
            textZh: "如果有损坏或丢失，请在7天内到这个柜台或打这个电话报告。给您一个追踪参考号。",
            commonMistake: {
              wrong: "If have damage or lost.",
              correct: "If there's any damage or loss.",
              explanation: "英文需要主谓结构，常用“there is”表达“有”，且“loss”是名词，对应“damaged”。",
            },
            keyPhrases: [
              { en: "report", zh: "报告" },
              { en: "within 7 days", zh: "7天内" },
              { en: "reference number", zh: "参考号" },
              { en: "tracking", zh: "追踪" },
            ],
            alternativeExpressions: [
              {
                textEn: "If anything's damaged or missing, you have 7 days to file a claim. Here's your case number.",
                textZh: "如果有损坏或丢失，您有7天时间提交索赔。这是您的案件编号。",
                actionHint: "保留好案件编号",
                frequency: "common",
              },
              {
                textEn:
                  "Check your bag when it arrives. Any issues, come back here or call us within a week. Keep this reference number.",
                textZh: "行李到了检查一下。有问题一周内回来或打电话给我们。保留好这个参考号。",
                actionHint: "记得检查行李并保留参考号",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "If there's any damage or stuff missing, report it within 7 days at this counter or call this number. Here's your tracking number.",
            formalityVariants: {
              casual:
                "Any damage or missing stuff, report it within 7 days here or call this number. Here's your tracking ref.",
              standard:
                "If there's any damage or missing items, please report it within 7 days at this same counter or call this number. Here's your reference number for tracking.",
              formal:
                "Should you discover any damage or missing articles, kindly report it within seven days either at this counter or by contacting this telephone number. You will find your reference number for tracking purposes here.",
            },
          },
        ],
      },

      // --- Flow 2: 行李损坏 ---
      {
        id: "damaged",
        titleZh: "行李损坏",
        titleEn: "Damaged Luggage",
        description: "取到行李后发现损坏",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My suitcase is damaged. The wheel is broken and there's a big scratch on the side.",
            textZh: "我的行李箱坏了。轮子断了，侧面有一道大划痕。",
            casualVersion: "My suitcase is busted. Wheel's broken, and there's a huge scratch on the side.",
            commonMistake: {
              wrong: "My suitcase damaged. Wheel broken, big scratch on side.",
              correct: "My suitcase is damaged. The wheel is broken and there's a big scratch on the side.",
              explanation: "句子需要有主谓结构。描述具体部件损坏需要冠词。",
            },
            formalityVariants: {
              casual: "My suitcase is busted. Wheel's broken, and there's a big scratch on it.",
              standard: "My suitcase is damaged. The wheel is broken and there's a big scratch on the side.",
              formal:
                "My suitcase has incurred damage. Specifically, a wheel is broken, and there is a significant scratch visible on its side.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn: "I'm sorry to see that. May I take a look? And I'll need your boarding pass and baggage tag.",
            textZh: "很抱歉。我看一下？我还需要您的登机牌和行李票。",
            commonMistake: {
              wrong: "I am sorry.",
              correct: "I'm sorry to hear that.",
              explanation: "“I am sorry”听起来不够真诚，用“I'm sorry to hear that”更能表达同情。",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, that's unfortunate. Let me see the damage. Can I have your boarding pass and luggage tag?",
                textZh: "哦，真不好意思。让我看看损坏情况。能给我您的登机牌和行李牌吗？",
                actionHint: "出示登机牌和行李牌",
                frequency: "common",
              },
              {
                textEn: "Sorry about that. I'll need to inspect it. Please have your documents ready.",
                textZh: "很抱歉。我需要检查一下。请准备好您的证件。",
                actionHint: "准备好相关文件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Oh, sorry to hear that. Lemme see. I'll also need your boarding pass and bag tag.",
            formalityVariants: {
              casual: "Ugh, sorry about that. Can I see it? Need your boarding pass and bag tag too.",
              standard: "I'm sorry to see that. May I take a look? And I'll need your boarding pass and baggage tag.",
              formal:
                "I regret to learn of this. May I examine it? Additionally, I will require your boarding pass and baggage tag.",
            },
          },
          {
            speaker: "you",
            textEn: "Here they are. The suitcase was new — I just bought it last week.",
            textZh: "给您。这箱子是新的——上周刚买的。",
            casualVersion: "Here you go. It was brand new — just got it last week.",
            commonMistake: {
              wrong: "Here is them. The suitcase new, I just buy it last week.",
              correct: "Here they are. The suitcase was new — I just bought it last week.",
              explanation: '指代复数用 "they are"。句子需有动词。"buy" 的过去式是 "bought"。',
            },
            formalityVariants: {
              casual: "Here. It was new — just got it last week.",
              standard: "Here they are. The suitcase was new — I just bought it last week.",
              formal: "Here you will find them. This suitcase was newly acquired; I purchased it only last week.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I understand your frustration. I'll file a damage report. The airline will either repair your bag, replace it, or compensate you. Do you have the purchase receipt?",
            textZh: "我理解您的心情。我来填一份损坏报告。航空公司会修理、更换或赔偿。您有购买收据吗？",
            commonMistake: {
              wrong: "Do you have purchase receipt?",
              correct: "Do you have a purchase receipt?",
              explanation: "“purchase receipt”是可数名词，前面需要加不定冠词“a”。",
            },
            keyPhrases: [
              { en: "damage report", zh: "损坏报告" },
              { en: "repair", zh: "修理" },
              { en: "replace", zh: "更换" },
              { en: "compensate", zh: "赔偿" },
              { en: "purchase receipt", zh: "购买收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm sorry about this. Let me open a claim for you. They'll fix it, replace it, or reimburse you. Got the receipt?",
                textZh: "很抱歉。我帮您开一个索赔。会修理、换新或报销。有收据吗？",
                actionHint: "找到购买收据",
                frequency: "common",
              },
              {
                textEn:
                  "We'll get this sorted. I'm filing a damage claim now. Do you happen to have proof of purchase?",
                textZh: "我们会处理好的。我正在填写损坏索赔。您有购买凭证吗？",
                actionHint: "出示购买凭证",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I get why you're frustrated. I'll fill out a damage report. The airline will fix your bag, replace it, or pay you back. Got the receipt?",
            formalityVariants: {
              casual:
                "Yeah, I get it. I'll write up a damage report. They'll fix it, replace it, or pay you. You got the receipt?",
              standard:
                "I understand your frustration. I'll file a damage report. The airline will either repair your bag, replace it, or compensate you. Do you have the purchase receipt?",
              formal:
                "I empathize with your current frustration. I shall proceed with filing a formal damage report. The airline will consequently offer repair, replacement, or monetary compensation. Do you possess the original purchase receipt?",
            },
          },
          {
            speaker: "you",
            textEn: "I have it on my phone. Can I show you a screenshot?",
            textZh: "在手机里。可以给你看截图吗？",
            casualVersion: "It's on my phone. Can I just show you a screenshot?",
            commonMistake: {
              wrong: "My phone has it. Can show you screenshot?",
              correct: "I have it on my phone. Can I show you a screenshot?",
              explanation: '表达物品在手机里用 "on my phone"。问句通常需要主语和助动词，截图前要加冠词 "a"。',
            },
            formalityVariants: {
              casual: "It's on my phone. Can I just show you a pic?",
              standard: "I have it on my phone. Can I show you a screenshot?",
              formal: "It is stored on my mobile device. May I present a screenshot to you?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Yes, that works. I'll also need to take photos of the damage. The airline's team will contact you within 5 business days with a resolution.",
            textZh: "可以的。我还需要拍几张损坏的照片。航空公司的团队会在5个工作日内联系您处理。",
            commonMistake: {
              wrong: "Our team will contact you in 5 working days.",
              correct: "Our airline team will contact you within 5 business days to follow up.",
              explanation: "“business days”比“working days”在正式语境中更常用，且“to follow up”说明联系目的是进行后续处理。",
            },
            keyPhrases: [
              { en: "take photos", zh: "拍照" },
              { en: "5 business days", zh: "5个工作日" },
              { en: "resolution", zh: "处理方案" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's fine. Let me photograph the damage for our records. Someone will get back to you within a week.",
                textZh: "可以。让我拍几张损坏照片存档。一周内会有人联系您。",
                actionHint: "配合拍照",
                frequency: "common",
              },
              {
                textEn:
                  "A screenshot works. I'll snap some pictures too. Expect a call from our claims team in 5 working days.",
                textZh: "截图可以。我也拍几张照片。理赔团队5个工作日内会联系您。",
                actionHint: "等待理赔联系",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, that's fine. I'll also need to snap some pics of the damage. The airline team will hit you up within 5 business days with a solution.",
            formalityVariants: {
              casual:
                "Yeah, that's good. I gotta get some pics of the damage too. The airline will get in touch in about 5 business days with what they can do.",
              standard:
                "Yes, that works. I'll also need to take photos of the damage. The airline's team will contact you within 5 business days with a resolution.",
              formal:
                "Yes, that will suffice. I will also be required to photograph the damage for documentation. The airline's dedicated team will then contact you within five business days to provide a resolution.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 登机 / 转机 ====================
  {
    id: "airport-boarding",
    category: "airport",
    titleZh: "登机与转机",
    titleEn: "Boarding & Connection",
    description: "找登机口、登机、转机等",
    otherRole: "登机口工作人员",
    otherRoleIcon: "ticket",
    flows: [
      {
        id: "find-gate",
        titleZh: "找登机口",
        titleEn: "Finding the Gate",
        description: "到达机场后找到正确的登机口",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, which way is Gate B12?",
            textZh: "请问，B12登机口怎么走？",
            culturalNote: "美国问路可以更直接，不一定需要像中文的“请问”那样过于客套。",
            casualVersion: "Excuse me, which way's Gate B12?",
            commonMistake: {
              wrong: "How to go to Gate B12?",
              correct: "Which way is Gate B12?",
              explanation: "直接翻译“怎么走”听起来不自然，用“which way”或“how do I get to”更地道。",
            },
            formalityVariants: {
              casual: "Hey, where's Gate B12?",
              standard: "Excuse me, which way is Gate B12?",
              formal: "Excuse me, could you please direct me to Gate B12?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Go through that corridor, past the duty-free shops, and turn right. Gate B12 is at the end of the terminal.",
            textZh: "沿那条通道走，经过免税店，然后右转。B12在航站楼尽头。",
            keyPhrases: [
              { en: "corridor", zh: "通道" },
              { en: "duty-free shops", zh: "免税店" },
              { en: "turn right", zh: "右转" },
              { en: "end of the terminal", zh: "航站楼尽头" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Head straight down this way, past the shops, then hang a right. B12 is all the way at the end.",
                textZh: "沿着这条路一直走，过了商店右转。B12在最里面。",
                actionHint: "跟着指引走",
                frequency: "common",
              },
              {
                textEn: "Just follow the signs for B gates. It's about a 10-minute walk down that hall.",
                textZh: "跟着B区登机口的指示牌走就行。沿着那条走廊大约走10分钟。",
                actionHint: "看B区指示牌",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Just go through that corridor, past the duty-free, then right. B12's at the end of the terminal.",
            formalityVariants: {
              casual: "Head down that corridor, past the duty-free, then make a right. B12's all the way down.",
              standard:
                "Go through that corridor, past the duty-free shops, and turn right. Gate B12 is at the end of the terminal.",
              formal:
                "Certainly. Please proceed through that corridor, past the duty-free shops, and then make a right turn. Gate B12 will be located at the very end of the terminal.",
            },
          },
          {
            speaker: "you",
            textEn: "How long does it take to walk there?",
            textZh: "走过去要多久？",
            casualVersion: "How long to walk there?",
            commonMistake: {
              wrong: "How long need to walk there?",
              correct: "How long does it take to walk there?",
              explanation: "询问时间长度时，用 “How long does it take?” 是标准句式。",
            },
            formalityVariants: {
              casual: "How long's the walk?",
              standard: "How long does it take to walk there?",
              formal: "Approximately how much time would it take to walk to that location?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "About 10 minutes. You have plenty of time — boarding doesn't start for another hour.",
            textZh: "大约10分钟。您时间充裕——还有一个小时才开始登机。",
            keyPhrases: [
              { en: "plenty of time", zh: "时间充裕" },
              { en: "boarding doesn't start", zh: "还没开始登机" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's a 10-minute walk. No rush — you've got an hour before they start boarding.",
                textZh: "走10分钟。不着急——还有一个小时才登机。",
                actionHint: "不用着急",
                frequency: "common",
              },
              {
                textEn: "Maybe 10 minutes on foot. You've got loads of time, don't worry.",
                textZh: "走路大概10分钟。时间很充裕，别担心。",
                actionHint: "可以慢慢走",
                frequency: "occasional",
              },
            ],
            casualVersion: "Like 10 minutes. You've got tons of time — boarding doesn't start for another hour.",
            formalityVariants: {
              casual: "Only 'bout 10. You're fine — boarding ain't for another hour.",
              standard: "About 10 minutes. You have plenty of time — boarding doesn't start for another hour.",
              formal:
                "It should take approximately 10 minutes. You have ample time, as boarding will not commence for another hour.",
            },
          },
        ],
      },

      // --- Flow 2: 转机赶时间 ---
      {
        id: "tight-connection",
        titleZh: "转机赶时间",
        titleEn: "Tight Connection",
        description: "转机时间紧迫，需要求助",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I have a connecting flight to London that boards in 20 minutes. I just landed and I'm at Terminal 1 — my next gate is in Terminal 3. Can I make it?",
            textZh:
              "请问，我有一班转机去伦敦的航班，20分钟后登机。我刚落地在1号航站楼——下一个登机口在3号航站楼。来得及吗？",
            casualVersion:
              "Hey, got a connecting flight to London, boarding in 20. Just landed at T1, next gate's in T3. Can I make it?",
            culturalNote: "美国人更习惯直接陈述问题，尤其是在紧急情况下，无需过多客套。",
            commonMistake: {
              wrong: "I have a flight connect to London",
              correct: "I have a connecting flight to London",
              explanation: "Connecting flight 是固定表达，指转机航班。",
            },
            formalityVariants: {
              casual: "Got a London connection, boarding in 20. Landed at T1, next gate's T3. Can I make it?",
              standard:
                "Excuse me, I have a connecting flight to London that boards in 20 minutes. I just landed and I'm at Terminal 1 — my next gate is in Terminal 3. Can I make it?",
              formal:
                "Pardon me, I have a connecting flight to London scheduled for boarding in 20 minutes. I have just arrived at Terminal 1, and my subsequent gate is located in Terminal 3. Is it feasible for me to reach it in time?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "That's tight. You'll need to take the shuttle train between terminals — it runs every 3 minutes. Follow the signs to \"Terminal Transfer.\" I'll call ahead to let them know you're coming.",
            textZh:
              '时间很紧。您需要坐航站楼之间的摆渡列车——每3分钟一班。跟着 "航站楼转乘" 的标志走。我提前通知那边您在赶来。',
            keyPhrases: [
              { en: "connecting flight", zh: "转机航班" },
              { en: "shuttle train", zh: "摆渡列车" },
              { en: "terminal transfer", zh: "航站楼转乘" },
              { en: "call ahead", zh: "提前通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's cutting it close. Take the people mover to Terminal 3 — it's every few minutes. I'll radio the gate for you.",
                textZh: "时间很赶。坐旅客捷运去3号航站楼——几分钟一班。我帮您通知登机口。",
                actionHint: "赶紧去坐旅客捷运",
                frequency: "common",
              },
              {
                textEn:
                  "You'll need to hurry. The inter-terminal train is your best bet. I'll let the gate know you're on your way.",
                textZh: "您得抓紧。坐航站楼间的列车最快。我通知登机口您在赶来。",
                actionHint: "快速找到列车站台",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "It's tight. Gotta take the shuttle train between terminals — runs every 3 mins. Follow signs to...",
            formalityVariants: {
              casual: "It's tight. Take the shuttle train, runs every 3. Follow signs...",
              standard:
                "That's tight. You'll need to take the shuttle train between terminals — it runs every 3 minutes. Follow the signs to...",
              formal:
                "That is indeed a rather tight connection. You will need to utilize the inter-terminal shuttle train service, which operates with a frequency of every three minutes. Please follow the directional signage to...",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Do I need to go through security again?",
            textZh: "谢谢！需要重新过安检吗？",
            casualVersion: "Thanks! Security again?",
            commonMistake: {
              wrong: "Need re-pass security?",
              correct: "Do I need to go through security again?",
              explanation: "Go through security 是固定表达，指通过安检。",
            },
            formalityVariants: {
              casual: "Thanks! Security again?",
              standard: "Thank you! Do I need to go through security again?",
              formal: "Thank you. Will I be required to clear security once more?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "No, the shuttle connects airside — no security needed. Just go straight to your gate. Gate C22, Terminal 3.",
            textZh: "不用，摆渡列车在隔离区内——不需要再过安检。直接去您的登机口。3号航站楼C22。",
            culturalNote: "Airside (隔离区内)指机场安检后的区域，乘客无需再次安检。",
            keyPhrases: [
              { en: "airside", zh: "隔离区内" },
              { en: "no security needed", zh: "不需要过安检" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nope, it's all within the secure zone. No need to go through screening again. Head straight to C22.",
                textZh: "不用，都在安全区域内。不需要重新过安检。直接去C22。",
                actionHint: "直奔登机口",
                frequency: "common",
              },
              {
                textEn: "No security check needed — the train stays airside. Just get to Gate C22 in Terminal 3.",
                textZh: "不需要再过安检——列车在隔离区内运行。去3号航站楼C22登机口就行。",
                actionHint: "记住C22登机口",
                frequency: "occasional",
              },
            ],
            casualVersion: "Nah, shuttle's airside – no security. Just head straight to your gate. C22, T3.",
            formalityVariants: {
              casual: "Nope, shuttle's airside, no security. Just go straight to your gate. C22, T3.",
              standard:
                "No, the shuttle connects airside — no security needed. Just go straight to your gate. Gate C22, Terminal 3.",
              formal:
                "No, that will not be necessary. The shuttle service operates airside, thus bypassing any additional security checkpoints. Please proceed directly to your designated gate: Gate C22 in Terminal 3.",
            },
          },
          {
            speaker: "you",
            textEn: "What about my checked bag? Will it be transferred automatically?",
            textZh: "我的托运行李呢？会自动转运吗？",
            casualVersion: "My checked bag? Auto-transferred?",
            commonMistake: {
              wrong: "My baggage checked?",
              correct: "My checked bag?",
              explanation: "Checked bag/luggage是托运行李的常用说法，不要直译。",
            },
            formalityVariants: {
              casual: "What about my bag? Auto-transferred?",
              standard: "What about my checked bag? Will it be transferred automatically?",
              formal: "Regarding my checked baggage, will it be automatically transferred to the connecting flight?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, your luggage will be transferred automatically to your London flight. Don't worry about that. Just hurry to the gate!",
            textZh: "会的，您的行李会自动转到伦敦的航班上。不用担心。赶快去登机口吧！",
            keyPhrases: [
              { en: "transferred automatically", zh: "自动转运" },
              { en: "hurry to the gate", zh: "赶快去登机口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your bags are tagged through to London, so they'll be moved automatically. Just focus on getting to the gate!",
                textZh: "您的行李已经直挂到伦敦了，会自动转运的。先赶去登机口吧！",
                actionHint: "不用管行李，赶紧走",
                frequency: "common",
              },
              {
                textEn: "Don't worry about your luggage — it's handled. Go, go, go!",
                textZh: "行李不用担心——会处理好的。快走快走！",
                actionHint: "抓紧时间赶路",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, luggage transfers automatically to your London flight. Don't sweat that. Just hustle to the gate!",
            formalityVariants: {
              casual: "Yeah, your luggage'll transfer automatically to London. Don't worry, just hustle to the gate!",
              standard:
                "Yes, your luggage will be transferred automatically to your London flight. Don't worry about that. Just hurry to the gate!",
              formal:
                "Yes, your baggage will be automatically transferred to your connecting flight to London. You needn't be concerned about that. Please proceed to the gate with urgency.",
            },
          },
        ],
      },

      // --- Flow 3: 航班延误/取消 ---
      {
        id: "delay-cancel",
        titleZh: "航班延误或取消",
        titleEn: "Flight Delay or Cancellation",
        description: "航班延误或取消后的应对",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "广播",
            textEn:
              "Attention passengers on flight UA892 to San Francisco: your flight has been delayed by approximately 3 hours due to weather conditions. The new departure time is 8:30 PM. We apologize for the inconvenience.",
            textZh:
              "乘坐UA892次航班前往旧金山的旅客请注意：由于天气原因，您的航班延误约3小时。新的起飞时间是晚上8:30。为此给您带来的不便深表歉意。",
            keyPhrases: [
              { en: "delayed", zh: "延误" },
              { en: "approximately 3 hours", zh: "大约3小时" },
              { en: "weather conditions", zh: "天气原因" },
              { en: "new departure time", zh: "新的起飞时间" },
              { en: "apologize for the inconvenience", zh: "为不便道歉" },
            ],
            responseTip: "可以去服务台问问是否有补偿或其他安排",
            alternativeExpressions: [
              {
                textEn:
                  "Ladies and gentlemen, flight UA892 to San Francisco is delayed about 3 hours. New departure: 8:30 PM. Sorry for the delay.",
                textZh: "各位旅客，UA892次旧金山航班延误约3小时。新起飞时间：晚上8:30。为延误致歉。",
                actionHint: "去服务台了解详情",
                frequency: "common",
              },
              {
                textEn:
                  "We regret to inform you that flight UA892 has been pushed back to 8:30 PM due to weather. We apologize for any inconvenience.",
                textZh: "很遗憾通知您，UA892航班因天气推迟到晚上8:30。为给您造成的不便深表歉意。",
                actionHint: "注意新的起飞时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hey folks on UA892 to SF, just a heads up. Your flight's delayed 'bout 3 hours because of the weather. New departure time is 8:30 PM. Our apologies for the wait.",
            commonMistake: {
              wrong: "Your flight has been delayed around 3 hours",
              correct: "Your flight has been delayed by approximately 3 hours",
              explanation: "'by approximately' 是更准确、地道的表达，尤其在正式通知中。",
            },
            formalityVariants: {
              casual: "Hey UA892 to SF, quick heads up. Flight's delayed ~3 hours, weather. New time's 8:30 PM. Sorry!",
              standard:
                "Attention passengers on flight UA892 to San Francisco: your flight has been delayed by approximately 3 hours due to weather conditions. The new departure time is 8:30 PM. We apologize for the inconvenience.",
              formal:
                "Ladies and gentlemen, your attention please. Flight UA892 to San Francisco has experienced an unfortunate delay of approximately 3 hours, attributed to prevailing weather conditions. The revised departure time is 8:30 PM. We sincerely apologize for any disruption this may cause to your travel plans.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Excuse me, my flight to San Francisco has been delayed. I have a connecting flight at SFO that I'll definitely miss now. What are my options?",
            textZh: "请问，我去旧金山的航班延误了。在旧金山还有转机航班，现在肯定赶不上了。我有什么选择？",
            casualVersion:
              "Hey, my flight to SF's delayed. Got a connecting flight at SFO I'll totally miss. What can I do?",
            commonMistake: {
              wrong: "I have connecting flight at SFO",
              correct: "I have a connecting flight at SFO",
              explanation: "在“connecting flight”前需要加上不定冠词 'a'。",
            },
            formalityVariants: {
              casual: "My SF flight's delayed. Got a connection at SFO I'll miss. What're my options?",
              standard:
                "Excuse me, my flight to San Francisco has been delayed. I have a connecting flight at SFO that I'll definitely miss now. What are my options?",
              formal:
                "Excuse me, my flight to San Francisco has experienced a delay. I have a connecting flight from SFO that I am now certain to miss. Could you please inform me of the available options?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "I understand. Let me look at alternatives for you. I can rebook you on a different route through Denver that would still get you to your final destination tonight. Or I can book you on tomorrow morning's direct flight.",
            textZh:
              "我理解。让我帮您看看替代方案。可以帮您改签经丹佛的另一条路线，今晚还能到目的地。或者帮您订明天早上的直飞航班。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "different route", zh: "另一条路线" },
              { en: "final destination", zh: "最终目的地" },
              { en: "direct flight", zh: "直飞航班" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Let me see what I can do. There's a connecting flight through Dallas tonight, or a nonstop tomorrow morning. Which works better?",
                textZh: "我看看能怎么办。今晚有经达拉斯的转机航班，或者明早有直飞。哪个更方便？",
                actionHint: "选择今晚还是明天",
                frequency: "common",
              },
              {
                textEn:
                  "I've got two options: a reroute tonight via another city, or a direct flight first thing tomorrow. What would you prefer?",
                textZh: "有两个方案：今晚绕路经另一个城市，或者明天一早直飞。您选哪个？",
                actionHint: "根据时间需求选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got it. Lemme check alternatives. I could rebook you on a different route through Denver, still get you there tonight. Or book you on tomorrow morning's direct.",
            commonMistake: {
              wrong: "I can rebook you on another route",
              correct: "I can rebook you on a different route",
              explanation: "'a different route' 更自然，'another route' 也可以但稍显生硬。",
            },
            formalityVariants: {
              casual:
                "Gotcha. Lemme find some options. Could put you on a Denver route, still get you there tonight. Or tomorrow morning's direct flight.",
              standard:
                "I understand. Let me look at alternatives for you. I can rebook you on a different route through Denver that would still get you to your final destination tonight. Or I can book you on tomorrow morning's direct flight.",
              formal:
                "I understand your situation completely. Allow me to explore alternative arrangements for you. I can rebook you on an alternative itinerary via Denver, which would still ensure your arrival at your final destination this evening. Alternatively, I can secure you a reservation on tomorrow morning's direct flight.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd prefer the tomorrow morning flight. Will the airline provide a hotel for tonight?",
            textZh: "我选明天早上的航班。航空公司今晚会安排酒店吗？",
            casualVersion: "I'll take the morning flight tomorrow. Does the airline cover a hotel for tonight?",
            commonMistake: {
              wrong: "Will airline provide hotel for tonight?",
              correct: "Will the airline provide a hotel for tonight?",
              explanation: "“airline”和“hotel”前都需要冠词 'the' 和 'a'。",
            },
            formalityVariants: {
              casual: "Yeah, tomorrow morning's flight. Will they put me up in a hotel tonight?",
              standard: "I'd prefer the tomorrow morning flight. Will the airline provide a hotel for tonight?",
              formal:
                "I would prefer the flight scheduled for tomorrow morning. Furthermore, will the airline be providing accommodation for tonight?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Yes, since the delay is on our end, we'll provide a hotel voucher and meal vouchers. Here are your new tickets and the hotel information. The shuttle to the hotel leaves from Door 3.",
            textZh:
              "是的，因为延误是我们的原因，我们会提供酒店和餐食券。给您新机票和酒店信息。去酒店的班车在3号门出发。",
            keyPhrases: [
              { en: "hotel voucher", zh: "酒店券" },
              { en: "meal vouchers", zh: "餐食券" },
              { en: "on our end", zh: "我们的原因" },
              { en: "shuttle", zh: "班车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. Since it's our fault, we'll cover a hotel and meals. Here's everything you need. Hotel shuttle is at Door 3.",
                textZh: "当然。因为是我们的责任，酒店和餐食我们承担。这是您需要的所有东西。酒店班车在3号门。",
                actionHint: "拿好所有凭证",
                frequency: "common",
              },
              {
                textEn:
                  "We'll put you up for the night and give you meal vouchers. The hotel bus picks up outside Door 3.",
                textZh: "我们会安排您今晚的住宿并提供餐食券。酒店巴士在3号门外接人。",
                actionHint: "去3号门找酒店班车",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, since it's our fault, we'll give you hotel and meal vouchers. Here's your new tickets and hotel info. Shuttle to the hotel's from Door 3.",
            formalityVariants: {
              casual:
                "Yep, it's our bad, so we'll get you hotel and meal vouchers. Here's your new tickets and the hotel info. Shuttle for the hotel's out of Door 3.",
              standard:
                "Yes, since the delay is on our end, we'll provide a hotel voucher and meal vouchers. Here are your new tickets and the hotel information. The shuttle to the hotel leaves from Door 3.",
              formal:
                "Yes, as the delay is attributable to circumstances on our part, we will indeed provide you with a hotel voucher and meal vouchers. Please find your revised tickets and the comprehensive hotel information here. The complimentary shuttle service to the hotel departs from Gate 3.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Will my checked luggage be transferred to the new flight?",
            textZh: "谢谢。我的托运行李会转到新航班上吗？",
            casualVersion: "Thanks. Will my checked bag go on the new flight?",
            commonMistake: {
              wrong: "Will my checked luggage transfer to new flight?",
              correct: "Will my checked luggage be transferred to the new flight?",
              explanation: "需要被动语态 'be transferred' 和冠词 'the'，且 'luggage' 是不可数名词。",
            },
            formalityVariants: {
              casual: "Cheers. Will my bag get transferred to the new flight?",
              standard: "Thank you. Will my checked luggage be transferred to the new flight?",
              formal:
                "Thank you. Regarding my checked luggage, will it be automatically transferred to the newly scheduled flight?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Yes, we'll take care of that. Your luggage will be on tomorrow's flight. Here's the new baggage reference number.",
            textZh: "会的，我们会处理。您的行李会在明天的航班上。这是新的行李参考号。",
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry, your bags will be moved to tomorrow's flight automatically. Here's the updated tracking number.",
                textZh: "别担心，您的行李会自动转到明天的航班。这是更新后的追踪号码。",
                actionHint: "保留好追踪号码",
                frequency: "common",
              },
              {
                textEn:
                  "We'll handle the luggage transfer. Everything will be on your new flight. Keep this reference number handy.",
                textZh: "行李转运我们来处理。都会在您的新航班上。请保留好这个参考号。",
                actionHint: "记下参考号",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got it. Your luggage'll be on tomorrow's flight. Here's the new baggage reference number.",
            formalityVariants: {
              casual: "Yep, we'll handle it. Your bag'll be on tomorrow's flight. Here's the new baggage number.",
              standard:
                "Yes, we'll take care of that. Your luggage will be on tomorrow's flight. Here's the new baggage reference number.",
              formal:
                "Yes, that will be arranged. Your luggage will be transferred to tomorrow's flight. Please find the new baggage reference number here.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 转机 ====================
  {
    id: "airport-transfer",
    category: "airport",
    titleZh: "转机",
    titleEn: "Connecting Flights",
    description: "在中转机场转机，包括找到下一个航站楼、中转等待、行李转运等",
    otherRole: "中转服务台工作人员",
    otherRoleIcon: "repeat",
    flows: [
      {
        id: "standard-transfer",
        titleZh: "标准转机",
        titleEn: "Standard Connection",
        description: "正常的国际转机流程，时间充裕",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I have a connecting flight to Sydney. Where do I go for international transfers?",
            textZh: "请问，我有一班转机去悉尼的航班。国际转机在哪里？",
            casualVersion: "Hey, I've got a connection to Sydney. Where's international transfers?",
            culturalNote: "美国问路常省略'请问'，直接说事即可",
            commonMistake: {
              wrong: "I have a transfer flight to Sydney.",
              correct: "I have a connecting flight to Sydney.",
              explanation: "connecting flight 是更地道的说法，transfer flight 较少用",
            },
            formalityVariants: {
              casual: "Hey, I've got a connection to Sydney. Where's international transfers?",
              standard: "Excuse me, I have a connecting flight to Sydney. Where do I go for international transfers?",
              formal:
                "Pardon me, I have an international connecting flight to Sydney. Could you please direct me to the international transfer area?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "Follow the signs for \"International Transfers.\" You'll need to go through security screening again, then head to Terminal 2. What's your flight number?",
            textZh: '跟着 "国际转机" 的标志走。您需要重新过安检，然后去2号航站楼。您的航班号是什么？',
            keyPhrases: [
              { en: "international transfers", zh: "国际转机" },
              { en: "security screening", zh: "安检" },
              { en: "terminal", zh: "航站楼" },
            ],
            vocabNotes: {
              transfers: {
                meaningInContext: "在这里指转机通道，不是一般的「转移」",
                similarUsage: "类似用法：Transfer desk（转机服务台）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Just follow the 'Connections' signs — they'll take you to the transfer area.",
                textZh: "跟着「中转」标志走——会带你到转机区域。",
                actionHint: "跟着标志走",
                frequency: "common",
              },
              {
                textEn: "Head to the transit hall. It's straight ahead, past passport control.",
                textZh: "去中转大厅。一直走，过了护照检查就到。",
                actionHint: "直走到中转大厅",
                frequency: "occasional",
              },
            ],
            casualVersion: "Just follow the signs for transfers.",
            formalityVariants: {
              casual: "Just follow the signs for transfers.",
              standard: "Please follow the signs for international transfers.",
              formal: "Kindly follow the directional signage indicating 'International Transfers'.",
            },
          },
          {
            speaker: "you",
            textEn: "It's QF108. How much time do I have?",
            textZh: "航班号是QF108。我还有多少时间？",
            casualVersion: "QF108. How much time I got?",
            commonMistake: {
              wrong: "How many time do I have?",
              correct: "How much time do I have?",
              explanation: "time是不可数名词，用much修饰",
            },
            formalityVariants: {
              casual: "QF108. How much time I got?",
              standard: "It's QF108. How much time do I have?",
              formal: "The flight number is QF108. Could you please inform me of the remaining time?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "That flight boards at 3:45 PM, so you have about two hours. Plenty of time. Gate D15 in Terminal 2.",
            textZh: "那班飞机下午3:45登机，所以您还有大约两个小时。时间很充裕。2号航站楼D15登机口。",
            keyPhrases: [
              { en: "boards at", zh: "……登机" },
              { en: "plenty of time", zh: "时间充裕" },
            ],
            alternativeExpressions: [
              {
                textEn: "Boarding is at 3:45, so you've got a good two hours. No rush. It's Gate D15.",
                textZh: "3:45登机，所以您有整整两个小时。不着急。D15登机口。",
                actionHint: "不用着急",
                frequency: "common",
              },
              {
                textEn:
                  "You're fine on time — your flight doesn't board for another two hours. Head to D15 in Terminal 2.",
                textZh: "时间没问题——还有两个小时才登机。去2号航站楼D15就行。",
                actionHint: "慢慢走过去",
                frequency: "occasional",
              },
            ],
            casualVersion: "Boards at 3:45, so you got like, two hours. Plenty of time. Gate D15, Terminal 2.",
            formalityVariants: {
              casual: "Boards 3:45, so you got a couple hours. Plenty of time. D15, Terminal 2.",
              standard:
                "That flight boards at 3:45 PM, so you have approximately two hours. Plenty of time. Gate D15 in Terminal 2.",
              formal:
                "The boarding time for that flight is 3:45 PM, providing you with approximately two hours. This should be ample time. Your departure gate is D15, located in Terminal 2.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to pick up my luggage and check it in again?",
            textZh: "需要取行李重新托运吗？",
            casualVersion: "Gotta grab my bags and check 'em again?",
            commonMistake: {
              wrong: "Do I need to take out my luggage and check it again?",
              correct: "Do I need to pick up my luggage and check it in again?",
              explanation: "pick up luggage 是取行李的正确说法",
            },
            formalityVariants: {
              casual: "Need to grab my bags and re-check?",
              standard: "Do I need to pick up my luggage and check it in again?",
              formal: "Will I be required to retrieve my luggage and re-check it for the onward journey?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "No, your luggage has been checked through to Sydney. You can verify on your baggage tag — it should show SYD as the final destination.",
            textZh: "不用，您的行李已经直挂到悉尼了。您可以看行李票确认——上面应该显示SYD作为最终目的地。",
            keyPhrases: [
              { en: "checked through", zh: "直挂（行李）" },
              { en: "baggage tag", zh: "行李票" },
              { en: "final destination", zh: "最终目的地" },
            ],
            vocabNotes: {
              "checked through": {
                meaningInContext: "在这里指行李直接托运到最终目的地，中途不需要取出",
                similarUsage: "类似用法：Is my bag checked through to London?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Nope, your bags go straight to Sydney. Check your tag — it should say SYD.",
                textZh: "不用，您的行李直接到悉尼。看一下行李牌——上面应该写着SYD。",
                actionHint: "确认行李牌上写着SYD",
                frequency: "common",
              },
              {
                textEn: "Your luggage is tagged all the way to Sydney, so no need to pick it up here.",
                textZh: "您的行李已经直挂到悉尼了，不需要在这里提取。",
                actionHint: "不用管行李",
                frequency: "occasional",
              },
            ],
            casualVersion: "Nah, your luggage is checked through to Sydney. Just check your tag — should say SYD.",
            commonMistake: {
              wrong: "Your luggage has been straight to Sydney.",
              correct: "Your luggage has been checked through to Sydney.",
              explanation: "'checked through' 是行李直挂的专业说法",
            },
            formalityVariants: {
              casual: "Nope, your bags are checked through to Sydney. Just look at your tag, it'll show SYD.",
              standard:
                "No, your luggage has been checked through to Sydney. You can verify this on your baggage tag — it should indicate SYD as the final destination.",
              formal:
                "No, your baggage has been routed directly to Sydney. For verification, you may consult your baggage tag, which should display SYD as the ultimate destination.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Is there anywhere to eat near Gate D15?",
            textZh: "太好了。D15登机口附近有吃东西的地方吗？",
            commonMistake: {
              wrong: "Is there any place to eat?",
              correct: "Is there anywhere to eat?",
              explanation: "Chinese speakers might use 'any place' as a direct translation; 'anywhere' is more natural.",
            },
            casualVersion: "Cool. Any food spots near D15?",
            formalityVariants: {
              casual: "Cool. Any food near D15?",
              standard: "Great. Is there anywhere to eat near Gate D15?",
              formal: "Excellent. Are there any dining facilities located in the vicinity of Gate D15?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "Yes, there are several restaurants and a food court near Gate D. You'll also find a currency exchange and some shops along the way.",
            textZh: "有的，D区登机口附近有好几家餐厅和美食广场。沿路还有货币兑换和一些商店。",
            keyPhrases: [
              { en: "food court", zh: "美食广场" },
              { en: "currency exchange", zh: "货币兑换" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a bunch of places to eat near the D gates — a food court plus a couple of sit-down restaurants.",
                textZh: "D区登机口附近有很多吃的地方——美食广场和几家正餐餐厅。",
                actionHint: "去D区找餐厅",
                frequency: "common",
              },
              {
                textEn:
                  "Plenty of dining options around Gate D. There's also a money exchange and some shops on the way.",
                textZh: "D登机口附近有很多餐饮选择。路上还有货币兑换和一些商店。",
                actionHint: "沿路留意商店",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, there's a few restaurants and a food court near Gate D. Plus a currency exchange and shops on the way.",
            formalityVariants: {
              casual:
                "Yep, plenty of restaurants and a food court around Gate D. Also currency exchange and shops nearby.",
              standard:
                "Yes, there are several restaurants and a food court near Gate D. You'll also find a currency exchange and some shops along the way.",
              formal:
                "Affirmative. There are multiple restaurants and a food court situated near Gate D. Additionally, a currency exchange and various retail establishments are available en route.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. One more question — is there free Wi-Fi in the terminal?",
            textZh: "谢谢。再问一下——航站楼有免费Wi-Fi吗？",
            casualVersion: "Thanks. Got free Wi-Fi here?",
            commonMistake: {
              wrong: "Is there free Wi-Fi in the airport?",
              correct: "Is there free Wi-Fi in the terminal?",
              explanation: "terminal特指航站楼，比airport更准确",
            },
            formalityVariants: {
              casual: "Thanks. Got free Wi-Fi here?",
              standard: "Thank you. One more question — is there free Wi-Fi in the terminal?",
              formal:
                "Thank you for your assistance. I have one further inquiry — is complimentary Wi-Fi access available within the terminal?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              'Yes, connect to "Airport-Free-WiFi" and accept the terms. You get 2 hours free, then you can buy more if needed.',
            textZh: '有，连接 "Airport-Free-WiFi"，同意条款就行。免费用2小时，之后可以购买延长。',
            keyPhrases: [
              { en: "connect to", zh: "连接" },
              { en: "accept the terms", zh: "同意条款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, the WiFi is free for two hours. Just look for 'Airport-Free-WiFi' and agree to the terms.",
                textZh: "有，WiFi免费两小时。找'Airport-Free-WiFi'然后同意条款就行。",
                actionHint: "连接WiFi",
                frequency: "common",
              },
              {
                textEn: "There's complimentary WiFi — search for the airport network and sign in through the browser.",
                textZh: "有免费WiFi——搜索机场网络然后通过浏览器登录。",
                actionHint: "用浏览器登录",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, just connect to [network name].",
            formalityVariants: {
              casual: "Yep, connect to [network name].",
              standard: "Yes, you can connect to [network name].",
              formal: "Yes, please connect to the [network name] network.",
            },
          },
        ],
      },

      // --- Flow 2: 转机时间紧 + 航站楼变更 ---
      {
        id: "terminal-change",
        titleZh: "航站楼变更赶转机",
        titleEn: "Terminal Change & Tight Connection",
        description: "登机口变更导致需要换航站楼，时间紧迫",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I just got a notification that my connecting flight gate changed from B8 to E22. Is that a different terminal?",
            textZh: "我刚收到通知，转机航班登机口从B8换到了E22。那是不同的航站楼吗？",
            casualVersion:
              "Just got a notification, connecting flight gate changed from B8 to E22. Different terminal?",
            commonMistake: {
              wrong: "I just received a notice that my connecting flight gate changed...",
              correct: "I just got a notification that my connecting flight gate changed...",
              explanation: "“receive a notice” 过于书面化，用 “get a notification” 更自然口语。",
            },
            formalityVariants: {
              casual: "Just got a notification, connecting flight gate changed from B8 to E22. Different terminal?",
              standard:
                "I just got a notification that my connecting flight gate changed from B8 to E22. Is that a different terminal?",
              formal:
                "Excuse me, I've just received a notification indicating a gate change for my connecting flight, from B8 to E22. Could you please confirm if this entails a different terminal?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "Yes, Gate E is in Terminal 3. You're currently in Terminal 1. You'll need to take the inter-terminal shuttle. How much time do you have before boarding?",
            textZh: "是的，E区在3号航站楼。您现在在1号航站楼。需要坐航站楼间的摆渡车。您离登机还有多少时间？",
            keyPhrases: [
              { en: "inter-terminal shuttle", zh: "航站楼间摆渡车" },
              { en: "gate changed", zh: "登机口变更" },
            ],
            alternativeExpressions: [
              {
                textEn: "E gates are in a different terminal. You'll need the SkyTrain to get there.",
                textZh: "E区登机口在另一个航站楼。你需要坐天际列车过去。",
                actionHint: "找天际列车/摆渡车",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, E's in Terminal 3. You're in Terminal 1. Gotta take the shuttle. How much time 'til boarding?",
            formalityVariants: {
              casual:
                "Yeah, E's in Terminal 3. You're in Terminal 1. Gotta take the shuttle. How much time 'til boarding?",
              standard:
                "Yes, Gate E is in Terminal 3. You're currently in Terminal 1. You'll need to take the inter-terminal shuttle. How much time do you have before boarding?",
              formal:
                "Yes, that is correct. Gate E is located within Terminal 3, whereas your current location is Terminal 1. You will be required to utilize the inter-terminal shuttle service. May I inquire how much time you have remaining prior to your scheduled boarding?",
            },
          },
          {
            speaker: "you",
            textEn: "Only about 40 minutes. Will I make it?",
            textZh: "只有大约40分钟。来得及吗？",
            casualVersion: "Only like 40 mins. Can I make it?",
            commonMistake: {
              wrong: "Only 40 minutes. Arrive in time?",
              correct: "Only about 40 minutes. Will I make it?",
              explanation: "直接问 “Arrive in time?” 不自然，用 “Will I make it?” 更口语化。",
            },
            formalityVariants: {
              casual: "Only like 40 mins. Can I make it?",
              standard: "Only about 40 minutes. Will I make it?",
              formal:
                "I have approximately 40 minutes remaining. Do you anticipate that I will be able to reach my gate in time?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "It'll be close, but doable. The shuttle takes about 10 minutes. You won't need to go through security again since it's all airside. Go to the shuttle platform — it's just around the corner, follow the blue signs.",
            textZh:
              "会很紧，但来得及。摆渡车大约10分钟。不需要重新过安检，都在隔离区内。去摆渡车站台——就在拐角，跟着蓝色标志走。",
            keyPhrases: [
              { en: "doable", zh: "可以做到的" },
              { en: "airside", zh: "隔离区内" },
              { en: "shuttle platform", zh: "摆渡车站台" },
            ],
            vocabNotes: {
              doable: {
                meaningInContext: "在这里表示「虽然紧但可以做到」",
                similarUsage: "类似用法：That deadline is tight but doable.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "It's tight but you can make it. The shuttle's about 10 minutes. No security to go through — just head to the platform around the corner.",
                textZh: "时间紧但来得及。摆渡车大约10分钟。不用过安检——拐角就是站台。",
                actionHint: "立刻去找摆渡车",
                frequency: "common",
              },
              {
                textEn:
                  "You should be fine if you go now. Take the transfer shuttle — follow the blue signs. It's all airside, so no screening.",
                textZh: "现在走应该来得及。坐转运摆渡车——跟着蓝色标志走。都在隔离区内，不用过安检。",
                actionHint: "跟着蓝色标志走",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "It'll be tight, but you can do it. Shuttle's like 10 mins. No need for security again, it's all airside. Shuttle platform's just 'round the corner, follow blue signs.",
            formalityVariants: {
              casual:
                "It'll be tight, but you can do it. Shuttle's like 10 mins. No need for security again, it's all airside. Shuttle platform's just 'round the corner, follow blue signs.",
              standard:
                "It'll be close, but doable. The shuttle takes about 10 minutes. You won't need to go through security again since it's all airside. Go to the shuttle platform — it's just around the corner, follow the blue signs.",
              formal:
                "It will be a narrow window, however, it is achievable. The inter-terminal shuttle typically takes approximately 10 minutes. You will not be required to undergo security screening again, as your transfer will remain airside. Please proceed to the shuttle platform, which is located directly around the corner; kindly follow the blue directional signage.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I let them know at the gate that I'm on my way?",
            textZh: "需要通知登机口我正在赶来吗？",
            casualVersion: "Should I tell 'em at the gate I'm coming?",
            commonMistake: {
              wrong: "Need I tell them at gate I'm coming?",
              correct: "Should I let them know at the gate that I'm on my way?",
              explanation: '英文通常不直接用 "Need I..." 问句，更常用 "Should I...". ',
            },
            formalityVariants: {
              casual: "Should I tell 'em at the gate I'm coming?",
              standard: "Should I let them know at the gate that I'm on my way?",
              formal: "Would it be advisable for me to inform the gate staff of my impending arrival?",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn:
              "I'll call Gate E22 and let them know you're in transit. They'll hold the door for a few extra minutes. Just go as quickly as you can.",
            textZh: "我打电话通知E22登机口您正在赶来。他们会多等几分钟。您尽快赶过去。",
            keyPhrases: [
              { en: "in transit", zh: "正在转机途中" },
              { en: "hold the door", zh: "等一下/延迟关门" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'll ring the gate and tell them to wait for you. Just get there as fast as you can.",
                textZh: "我给登机口打电话让他们等您。您尽快赶过去。",
                actionHint: "加快脚步",
                frequency: "common",
              },
              {
                textEn: "Let me notify E22 that you're on your way. They'll keep the gate open a bit longer. Hurry!",
                textZh: "我通知E22您在赶来。他们会多开一会儿门。快走！",
                actionHint: "赶紧出发",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll call E22, let 'em know you're coming. They'll hold the door a few extra mins. Just hustle.",
            culturalNote: "美国人有时会用'hold the door'来表示稍等一下，并不是真的物理上抓住门",
            formalityVariants: {
              casual: "I'll call E22, let 'em know you're coming. They'll hold the door a few extra mins. Just hustle.",
              standard:
                "I'll call Gate E22 and let them know you're in transit. They'll hold the door for a few extra minutes. Just go as quickly as you can.",
              formal:
                "I will contact Gate E22 directly to inform them of your transit status. They will endeavor to delay departure for a few additional minutes. Please proceed with all due haste.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I really appreciate the help.",
            textZh: "太感谢了。真的很感激你的帮助。",
            casualVersion: "Thanks a ton. Really appreciate the help.",
            commonMistake: {
              wrong: "Thank you very much. I very appreciate your help.",
              correct: "Thank you so much. I really appreciate the help.",
              explanation: '"very appreciate" 语法错误，应为 "really appreciate" 或 "appreciate very much"。',
            },
            formalityVariants: {
              casual: "Thanks a ton. Really appreciate the help.",
              standard: "Thank you so much. I really appreciate the help.",
              formal: "I extend my sincere gratitude for your assistance. Your support is deeply appreciated.",
            },
          },
          {
            speaker: "them",
            role: "中转服务",
            textEn: "No problem at all. Good luck, and have a safe flight!",
            textZh: "不客气。祝好运，旅途平安！",
            alternativeExpressions: [
              {
                textEn: "Happy to help! Run along now — safe travels!",
                textZh: "很高兴能帮到您！快走吧——一路平安！",
                actionHint: "赶紧出发",
                frequency: "common",
              },
              {
                textEn: "Anytime. Hope you make it. Have a great trip!",
                textZh: "不客气。希望您赶得上。祝旅途愉快！",
                actionHint: "加油赶路",
                frequency: "occasional",
              },
            ],
            casualVersion: "No prob. Good luck, safe flight!",
            formalityVariants: {
              casual: "No prob. Good luck, safe flight!",
              standard: "No problem at all. Good luck, and have a safe flight!",
              formal: "You are most welcome. I wish you the best of luck and a pleasant journey.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 免税店购物 ====================
  {
    id: "airport-dutyfree",
    category: "airport",
    titleZh: "免税店购物",
    titleEn: "Duty-Free Shopping",
    description: "在机场免税店购物，包括询价、退税、购买限制等",
    otherRole: "免税店店员",
    otherRoleIcon: "shopping-bag",
    flows: [
      {
        id: "standard-shopping",
        titleZh: "标准免税购物",
        titleEn: "Standard Duty-Free Shopping",
        description: "在免税店正常购物、询问价格和折扣",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for a bottle of whisky as a gift. What do you recommend?",
            textZh: "你好，我想买一瓶威士忌送人。有什么推荐的吗？",
            culturalNote: "美国购物时直接说需求即可，无需过多客套词。",
            casualVersion: "Hey, lookin' for a whisky bottle for a gift. What d'ya got?",
            commonMistake: {
              wrong: "I'm looking for a whisky bottle as a present.",
              correct: "I'm looking for a bottle of whisky as a gift.",
              explanation: "在英语中，'gift'更常用于送礼的物品，'present'通常是泛指礼物。",
            },
            formalityVariants: {
              casual: "Hey, I need a whisky for a gift. Any recommendations?",
              standard: "Hi, I'm looking for a bottle of whisky as a gift. What do you recommend?",
              formal:
                "Good morning/afternoon. I am seeking a suitable bottle of whisky to purchase as a gift. Could you please offer some recommendations?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We have some great options! This Johnnie Walker Blue Label is very popular as a gift. It's $180, which is about 30% cheaper than regular retail.",
            textZh: "我们有很多不错的选择！这款尊尼获加蓝牌很受欢迎，很适合送礼。180美元，比正常零售价便宜大约30%。",
            commonMistake: {
              wrong: "It is 180 dollars, cheaper 30%.",
              correct: "It's $180, which is about 30% cheaper than the normal retail price.",
              explanation: "表达价格和折扣时，句式和介词常用'which is'或'about'，更自然。",
            },
            keyPhrases: [
              { en: "duty-free", zh: "免税" },
              { en: "regular retail", zh: "正常零售价" },
              { en: "popular as a gift", zh: "很适合送礼" },
            ],
            vocabNotes: {
              retail: {
                meaningInContext: "在这里指普通商店的零售价格，与免税价对比",
                similarUsage: "类似用法：The retail price is $250.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "This single malt is our best seller for gifts. Great value at duty-free prices.",
                textZh: "这款单一麦芽是我们最畅销的礼品酒。免税价很划算。",
                actionHint: "可以问具体价格",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lots of good stuff! This Johnnie Walker Blue Label's super popular for gifts. It's 180 bucks, like 30% less than regular stores.",
            formalityVariants: {
              casual: "Plenty of good choices! Blue Label's a hot gift item, $180, 30% off retail.",
              standard:
                "We have some great options! This Johnnie Walker Blue Label is very popular as a gift. It's $180, which is about 30% cheaper than regular retail.",
              formal:
                "Certainly, we offer a selection of excellent choices. The Johnnie Walker Blue Label, for instance, is highly regarded as a gift. It is currently priced at $180, representing approximately a 30% reduction from its standard retail price.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds good. Is there a limit on how much alcohol I can bring into the country?",
            textZh: "听起来不错。入境能带多少酒有限制吗？",
            casualVersion: "Sounds good. Is there a limit on how much booze I can bring in?",
            commonMistake: {
              wrong: "How much alcohol can I bring?",
              correct: "How much alcohol can I bring into the country?",
              explanation: "缺少'into the country'可能导致误解，不知道是带到哪里。",
            },
            formalityVariants: {
              casual: "Okay, so how much alcohol can I bring in?",
              standard: "That sounds good. Is there a limit on how much alcohol I can bring into the country?",
              formal:
                "That is an appealing option. Could you please inform me if there are any restrictions regarding the quantity of alcohol I am permitted to import into the country?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "It depends on your destination. For most countries, you can bring 1-2 liters duty-free. Where are you flying to?",
            textZh: "取决于您的目的地。大多数国家可以免税带1到2升。您飞去哪里？",
            commonMistake: {
              wrong: "Where do you fly?",
              correct: "Where are you flying to?",
              explanation: "表达目的地时用'flying to'，或更简洁地用'where are you going'",
            },
            keyPhrases: [
              { en: "limit", zh: "限制" },
              { en: "depends on your destination", zh: "取决于目的地" },
              { en: "1-2 liters duty-free", zh: "1到2升免税额度" },
            ],
            alternativeExpressions: [
              {
                textEn: "That varies by country. Most places allow 1 to 2 liters. Where are you headed?",
                textZh: "各国不一样。大多数地方允许带1到2升。您去哪里？",
                actionHint: "告知目的地",
                frequency: "common",
              },
              {
                textEn: "Every country has different allowances. What's your destination? I can check for you.",
                textZh: "每个国家的限额不同。您的目的地是哪里？我帮您查一下。",
                actionHint: "说出目的地国家",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Depends where you're goin'. Most places, you can take 1-2 liters duty-free. Where's your flight to?",
            formalityVariants: {
              casual: "Depends on your destination. Usually 1-2 liters duty-free. Where you headed?",
              standard:
                "It depends on your destination. For most countries, you can bring 1-2 liters duty-free. Where are you flying to?",
              formal:
                "The allowance is contingent upon your final destination. Typically, for the majority of countries, a duty-free allowance of 1 to 2 liters is permitted. May I inquire as to your intended destination?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm flying back to China.",
            textZh: "我飞回中国。",
            casualVersion: "Back to China.",
            commonMistake: {
              wrong: "I fly back to China.",
              correct: "I'm flying back to China.",
              explanation: "中国人常用一般现在时表达计划，但英语通常用现在进行时表示近期的计划或安排。",
            },
            formalityVariants: {
              casual: "Going back to China.",
              standard: "I'm flying back to China.",
              formal: "My destination is China.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "For China, the duty-free allowance is 1,500 ml of alcohol. This bottle is 750 ml, so you could actually buy two bottles if you'd like.",
            textZh: "去中国的话，免税酒精额度是1500毫升。这瓶750毫升，所以您可以买两瓶。",
            commonMistake: {
              wrong: "The duty-free limit is 1500 ml.",
              correct: "The duty-free allowance is 1,500 ml of alcohol.",
              explanation: "'allowance'比'limit'更常用，且需明确是针对'alcohol'。",
            },
            keyPhrases: [
              { en: "duty-free allowance", zh: "免税额度" },
              { en: "ml", zh: "毫升" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "China allows up to 1,500 ml of alcohol duty-free. This one's 750 ml, so you've got room for another.",
                textZh: "中国允许免税带1500毫升酒。这瓶750毫升，还可以再买一瓶。",
                actionHint: "考虑是否再买一瓶",
                frequency: "common",
              },
              {
                textEn: "The limit for China is 1.5 liters of spirits. You could grab two of these and still be under.",
                textZh: "去中国的限额是1.5升烈酒。买两瓶也不超。",
                actionHint: "可以考虑多买一瓶",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For China, you can do 1,500 ml duty-free. This bottle's 750, so you could totally get two if you want.",
            formalityVariants: {
              casual: "China's limit is 1,500 ml. This is 750, so two bottles is fine.",
              standard:
                "For China, the duty-free allowance is 1,500 ml of alcohol. This bottle is 750 ml, so you could actually buy two bottles if you'd like.",
              formal:
                "Regarding China, the permissible duty-free allowance for alcohol is 1,500 milliliters. As this particular bottle contains 750 milliliters, you are indeed eligible to purchase two bottles should you wish to do so.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll just take one. Can I pay with Chinese yuan?",
            textZh: "就买一瓶吧。可以用人民币付吗？",
            culturalNote: "中国旅客常误以为全球免税店都接受人民币。实际上，美元、欧元或当地货币及信用卡是主流。",
            casualVersion: "Just one's good. Can I pay in yuan?",
            commonMistake: {
              wrong: "Can I use Chinese yuan to pay?",
              correct: "Can I pay with Chinese yuan?",
              explanation: "'pay with'或'pay in'是更自然地表达支付方式的短语。",
            },
            formalityVariants: {
              casual: "Just one. Yuan okay to pay with?",
              standard: "I'll just take one. Can I pay with Chinese yuan?",
              formal:
                "I will proceed with the purchase of a single bottle. May I inquire if payment in Chinese yuan is an accepted option?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We accept US dollars, euros, and major credit cards. We don't accept yuan, unfortunately. Would you like to pay by card?",
            textZh: "我们接受美元、欧元和主要信用卡。很抱歉不接受人民币。您用信用卡付吗？",
            commonMistake: {
              wrong: "We don't accept Chinese Yuan.",
              correct: "We don't accept RMB, I'm afraid.",
              explanation: "RMB是人民币常用缩写；'I'm afraid'让语气更委婉礼貌。",
            },
            keyPhrases: [
              { en: "accept", zh: "接受" },
              { en: "major credit cards", zh: "主要信用卡" },
              { en: "pay by card", zh: "刷卡付" },
            ],
            alternativeExpressions: [
              {
                textEn: "We take dollars, euros, Visa, Mastercard — sorry, no yuan though. Card okay?",
                textZh: "我们收美元、欧元、Visa、Mastercard——抱歉，不收人民币。刷卡可以吗？",
                actionHint: "用信用卡付款",
                frequency: "common",
              },
              {
                textEn: "Cash in dollars or euros, or any major credit card. Unfortunately we can't take Chinese yuan.",
                textZh: "美元或欧元现金，或主要信用卡都可以。很遗憾不能收人民币。",
                actionHint: "选择付款方式",
                frequency: "occasional",
              },
            ],
            casualVersion: "We take US dollars, euros, major credit cards. No yuan, sorry. Wanna pay with a card?",
            formalityVariants: {
              casual: "Dollars, euros, major cards work. No yuan, sorry. Card okay?",
              standard:
                "We accept US dollars, euros, and major credit cards. We don't accept yuan, unfortunately. Would you like to pay by card?",
              formal:
                "Our accepted forms of payment include United States dollars, euros, and all major credit cards. Regrettably, we are unable to process transactions in Chinese yuan. Would you prefer to complete the payment using a credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'll use my Visa card.",
            textZh: "好的，用Visa卡。",
            commonMistake: {
              wrong: "I pay with Visa card.",
              correct: "Yes, I'll pay with my Visa card.",
              explanation: "英文中常用'I'll pay with...'，并加上'my'听起来更自然。",
            },
            casualVersion: "Yeah, my Visa.",
            formalityVariants: {
              casual: "Yep, Visa.",
              standard: "Yes, I'll use my Visa card.",
              formal: "Yes, I shall use my Visa credit card.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Here's your receipt. Keep it in case customs asks for it. The bottle will be sealed in a duty-free bag — please don't open it until you've passed customs at your destination.",
            textZh: "给您收据。留好以防海关检查。酒会密封在免税袋里——请到达目的地过完海关再打开。",
            commonMistake: {
              wrong: "Give you receipt. Don't open the bag before customs.",
              correct: "Here's your receipt. Keep it in case customs checks. The liquor will be sealed in a duty-free bag — please don't open it until after you clear customs at your destination.",
              explanation: "美式英语常用'Here's'或'Here is'。'in case customs checks'更自然。'clear customs'是常用短语。",
            },
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "customs", zh: "海关" },
              { en: "sealed", zh: "密封" },
              { en: "duty-free bag", zh: "免税袋" },
            ],
            culturalNote: "免税品的密封袋在到达目的地海关前不要打开，否则可能被征税。",
            alternativeExpressions: [
              {
                textEn:
                  "Here you go. Hold on to the receipt for customs. Don't break the seal on the bag until after you clear customs.",
                textZh: "给您。收据留着过海关用。过完海关之前不要拆开密封袋。",
                actionHint: "保留收据不拆袋",
                frequency: "common",
              },
              {
                textEn:
                  "All done! Receipt's in the bag. Remember, keep it sealed until you've gone through customs at your destination.",
                textZh: "好了！收据在袋子里。记住，到目的地过完海关之前保持密封。",
                actionHint: "到目的地再拆",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Here's your receipt. Hold onto it in case customs asks. The bottle's sealed in a duty-free bag – don't open it 'til you're past customs at your destination.",
            formalityVariants: {
              casual: "Receipt here. Keep it for customs. Bottle's sealed – don't open 'til you're through customs.",
              standard:
                "Here's your receipt. Keep it in case customs asks for it. The bottle will be sealed in a duty-free bag — please don't open it until you've passed customs at your destination.",
              formal:
                "Please take your receipt. It is advisable to retain it in the event that customs officials require it. The bottle will be securely sealed within a duty-free bag; kindly refrain from opening it until you have successfully cleared customs at your arrival destination.",
            },
          },
        ],
      },

      // --- Flow 2: 退税流程 ---
      {
        id: "tax-refund",
        titleZh: "退税流程",
        titleEn: "Tax Refund Process",
        description: "在机场办理离境退税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the tax refund counter? I have some purchases I'd like to get a refund on.",
            textZh: "请问，退税柜台在哪里？我有一些购物想退税。",
            culturalNote: "美国大部分州没有购物退税，欧洲和亚洲国家才有。中国人常误以为所有国家都有。",
            casualVersion: "Hey, where's the tax refund counter? Gotta get refunds for some stuff I bought.",
            commonMistake: {
              wrong: "Excuse me, where is the tax refund counter? I want to get tax refund for some purchases.",
              correct: "Excuse me, where is the tax refund counter? I'd like to get a refund on some purchases.",
              explanation: '直接说 "I want" 听起来不礼貌，"I\'d like to" 更委婉客气。',
            },
            formalityVariants: {
              casual: "Hey, where's the tax refund counter? Need to get refunds for some stuff.",
              standard:
                "Excuse me, where is the tax refund counter? I have some purchases I'd like to get a refund on.",
              formal:
                "Pardon me, could you please direct me to the tax refund counter? I have several items for which I wish to claim a tax refund.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The tax refund counter is near Gate A, before you go through security. Make sure you have your receipts, the tax refund forms from the stores, and your passport ready.",
            textZh: "退税柜台在A区登机口附近，过安检之前。请准备好您的购物收据、商店给的退税表和护照。",
            keyPhrases: [
              { en: "tax refund counter", zh: "退税柜台" },
              { en: "tax refund forms", zh: "退税表" },
              { en: "receipts", zh: "收据" },
            ],
            vocabNotes: {
              "tax refund": {
                meaningInContext: "在这里指外国游客离境时可以退还购物时所付的增值税",
                similarUsage: "类似用法：Can I get a tax refund on this?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "You'll find the VAT refund desk on the departure level. Don't forget your Global Blue forms.",
                textZh: "增值税退税台在出发层。别忘了带Global Blue的退税单。",
                actionHint: "找出发层的退税柜台",
                frequency: "common",
              },
            ],
            casualVersion:
              "Tax refund's by Gate A, before security. Just have your receipts, tax forms from the shops, and passport ready.",
            commonMistake: {
              wrong: "Prepare your receipts, tax refund forms from stores and your passport.",
              correct:
                "Make sure you have your receipts, the tax refund forms from the stores, and your passport ready.",
              explanation: '"have X ready" 是更地道的表达，表示准备就绪。',
            },
            formalityVariants: {
              casual: "It's by Gate A, before security. Just have your receipts, forms, and passport ready.",
              standard:
                "The tax refund counter is near Gate A, before you go through security. Make sure you have your receipts, the tax refund forms from the stores, and your passport ready.",
              formal:
                "The tax refund facility is situated adjacent to Gate A, prior to the security checkpoint. Kindly ensure you have your purchase receipts, the requisite tax refund forms provided by the retailers, and your passport prepared for presentation.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to show the items I bought to the customs officer?",
            textZh: "需要给海关人员看我买的东西吗？",
            casualVersion: "Gotta show the stuff I bought to customs?",
            commonMistake: {
              wrong: "Do I need to show my items the customs officer?",
              correct: "Do I need to show the items I bought to the customs officer?",
              explanation: '"show something to someone" 是正确搭配，不能省略 "to"。',
            },
            formalityVariants: {
              casual: "Do I need to show my stuff to customs?",
              standard: "Do I need to show the items I bought to the customs officer?",
              formal: "Is it necessary for me to present the purchased articles to the customs official?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sometimes yes. The customs officer may ask to see the items, especially high-value purchases. So keep them accessible — don't pack them in your checked luggage before getting the stamp.",
            textZh:
              "有时需要。海关人员可能会要求看商品，尤其是高价值的购买。所以放在容易拿到的地方——盖章之前不要放进托运行李里。",
            culturalNote: "退税的商品常需向海关出示，务必随身携带而非托运，以免无法完成退税。",
            keyPhrases: [
              { en: "customs officer", zh: "海关人员" },
              { en: "high-value purchases", zh: "高价值购买" },
              { en: "accessible", zh: "容易拿到的" },
              { en: "stamp", zh: "盖章" },
            ],
            responseTip: "退税前确保商品方便取出展示",
            alternativeExpressions: [
              {
                textEn:
                  "They might want to see the goods, especially the expensive stuff. Keep everything handy until you get the stamp.",
                textZh: "他们可能想看看商品，特别是贵的东西。盖章之前都放在手边。",
                actionHint: "贵重物品放手边",
                frequency: "common",
              },
              {
                textEn:
                  "It depends — for big purchases they usually check. Don't put anything in your suitcase before the refund is processed.",
                textZh: "看情况——大额购物他们通常会检查。退税处理之前不要把东西放进箱子里。",
                actionHint: "退税前别装箱",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, sometimes. Customs might wanna see 'em, 'specially expensive stuff. So keep 'em handy – don't put 'em in your checked bag before you get the stamp.",
            commonMistake: {
              wrong: "Keep them easy to take out. Don't put them into your checked luggage.",
              correct: "Keep them accessible — don't pack them in your checked luggage before getting the stamp.",
              explanation: '"accessible" 更简洁地道，"pack in" 是指将东西打包放入。',
            },
            formalityVariants: {
              casual:
                "Yeah, sometimes. Customs might wanna see 'em, 'specially expensive stuff. Keep 'em handy, don't pack 'em in your checked bag before the stamp.",
              standard:
                "Sometimes yes. The customs officer may ask to see the items, especially high-value purchases. So keep them accessible — don't pack them in your checked luggage before getting the stamp.",
              formal:
                "Indeed, that is occasionally required. Customs officials reserve the right to inspect the items, particularly those of significant value. Therefore, it is advisable to keep them readily accessible and refrain from placing them in your checked baggage prior to obtaining the official stamp.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Can I get the refund in cash or only on my credit card?",
            textZh: "明白了。退税可以拿现金还是只能退到信用卡？",
            casualVersion: "Okay, so cash or just credit card for the refund?",
            commonMistake: {
              wrong: "Can I get the refund by cash or by credit card?",
              correct: "Can I get the refund in cash or only on my credit card?",
              explanation: '表达方式是 "in cash" 和 "on my credit card"。',
            },
            formalityVariants: {
              casual: "Got it. Cash or just card for the refund?",
              standard: "Got it. Can I get the refund in cash or only on my credit card?",
              formal:
                "Understood. Is it possible to receive the refund in cash, or is the only option a credit card reimbursement?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "You can choose either cash or card refund. Cash is immediate but there's usually a processing fee. Card refund takes 2-4 weeks but no fee. Most people prefer the card refund.",
            textZh:
              "现金和信用卡都可以。现金是即时的但通常有手续费。退到卡上要2到4周但没有手续费。大多数人选择退到卡上。",
            culturalNote: "西方国家退税到信用卡更普遍，现金常有手续费，中国游客可能更偏好现金。",
            keyPhrases: [
              { en: "processing fee", zh: "手续费" },
              { en: "immediate", zh: "即时的" },
              { en: "card refund", zh: "退到卡上" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Cash or card — your call. Cash is instant but they take a small fee. Card takes a few weeks but it's fee-free.",
                textZh: "现金或刷卡——您选。现金立刻拿到但有小额手续费。退到卡上要几周但没手续费。",
                actionHint: "选择退款方式",
                frequency: "common",
              },
              {
                textEn:
                  "You've got two options: cash now with a handling charge, or to your credit card in about 2 to 4 weeks with no charge.",
                textZh: "有两种选择：现在拿现金但有手续费，或者2到4周退到信用卡上不收费。",
                actionHint: "权衡手续费和时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You can do cash or card. Cash is instant, but there's usually a fee. Card takes 2-4 weeks, no fee though. Most folks go with the card.",
            commonMistake: {
              wrong: "Cash is immediate but has processing fee. Card refund takes 2-4 weeks but no fees.",
              correct:
                "Cash is immediate but there's usually a processing fee. Card refund takes 2-4 weeks but no fee.",
              explanation: '"a processing fee" 是可数名词，"no fee" 是正确用法。',
            },
            formalityVariants: {
              casual:
                "Cash or card, your call. Cash is instant but has a fee. Card takes 2-4 weeks, no fee. Most just do card.",
              standard:
                "You can choose either cash or card refund. Cash is immediate but there's usually a processing fee. Card refund takes 2-4 weeks but no fee. Most people prefer the card refund.",
              formal:
                "You have the option to select either a cash refund or a credit card refund. While the cash option provides immediate disbursement, it typically incurs a processing charge. The credit card refund, conversely, requires a processing period of two to four weeks but is free of charge. The majority of individuals tend to favor the credit card refund.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do the card refund then. How much will I get back approximately?",
            textZh: "那我选退到卡上。大概能退多少？",
            casualVersion: "Okay, card refund then. 'Bout how much am I getting back?",
            commonMistake: {
              wrong: "Then I'll do the card refund. How much money can I get back approximately?",
              correct: "I'll do the card refund then. How much will I get back approximately?",
              explanation: '"then" 放在句末更自然。"how much will I get back" 更简洁地道。',
            },
            formalityVariants: {
              casual: "Card refund then. So, how much am I getting back?",
              standard: "I'll do the card refund then. How much will I get back approximately?",
              formal:
                "I will proceed with the credit card refund option. Could you please provide an approximate estimate of the amount I will receive?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The VAT rate here is 20%, but the actual refund is usually around 12-14% after the service fee. Based on your receipts, you should get back about €85.",
            textZh: "这里的增值税率是20%，但扣除服务费后实际退税通常在12-14%左右。根据您的收据，大概能退85欧元。",
            keyPhrases: [
              { en: "VAT rate", zh: "增值税率" },
              { en: "service fee", zh: "服务费" },
              { en: "get back", zh: "退回" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "VAT is 20%, but after the service charge you'll get roughly 12-14% back. That's about €85 for you.",
                textZh: "增值税20%，扣掉服务费实际退大约12-14%。您大概能退85欧元。",
                actionHint: "了解退税金额",
                frequency: "common",
              },
              {
                textEn:
                  "You won't get the full 20% back — there's a handling fee. Expect around €85 based on what you spent.",
                textZh: "不会退满20%——有手续费。根据您的消费，预计退大约85欧元。",
                actionHint: "注意实际退款比税率低",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "VAT's 20%, but you usually get like 12-14% back after the fee. From your receipts, you're looking at 'bout €85.",
            commonMistake: {
              wrong:
                "VAT is 20%, but actual refund is 12-14% after deducting service fee. According to your receipts, you should get back about €85.",
              correct:
                "The VAT rate here is 20%, but the actual refund is usually around 12-14% after the service fee. Based on your receipts, you should get back about €85.",
              explanation: '"VAT rate" 更准确。"after the service fee" 是常见表达。"Based on" 更常用语口语。',
            },
            formalityVariants: {
              casual:
                "VAT's 20%, but after the fee, you get like 12-14%. Looks like 'bout €85 for you based on receipts.",
              standard:
                "The VAT rate here is 20%, but the actual refund is usually around 12-14% after the service fee. Based on your receipts, you should get back about €85.",
              formal:
                "The Value Added Tax rate in this jurisdiction is 20%; however, the effective refund amount typically ranges between 12-14% subsequent to the deduction of the service charge. Pursuant to your submitted receipts, you are estimated to receive approximately €85.",
            },
          },
          {
            speaker: "you",
            textEn: "That's helpful. Thank you for explaining everything.",
            textZh: "很有帮助。谢谢你解释这些。",
            casualVersion: "That's super helpful. Thanks for explaining everything.",
            commonMistake: {
              wrong: "That's helpful. Thank you for your explanation.",
              correct: "That's helpful. Thank you for explaining everything.",
              explanation: '"Thank you for explaining everything" 更自然地表达感谢。',
            },
            formalityVariants: {
              casual: "Super helpful. Thanks for explaining.",
              standard: "That's helpful. Thank you for explaining everything.",
              formal: "That information is most beneficial. I am truly grateful for your thorough explanation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 机场贵宾室 ====================
  {
    id: "airport-lounge",
    category: "airport",
    titleZh: "机场贵宾室",
    titleEn: "Airport Lounge",
    description: "进入机场贵宾休息室，包括资格确认、设施使用等",
    otherRole: "贵宾室前台",
    otherRoleIcon: "star",
    flows: [
      {
        id: "lounge-access",
        titleZh: "进入贵宾室",
        titleEn: "Lounge Access",
        description: "用信用卡权益或付费进入贵宾室",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to use the lounge. I have a Priority Pass card.",
            textZh: "你好，我想用贵宾室。我有Priority Pass卡。",
            culturalNote: "在美国，表达需求时直接说 I'd like to do sth 即可，无需过多客套。",
            casualVersion: "Hey, wanna use the lounge. Got my Priority Pass.",
            commonMistake: {
              wrong: "I want to use the lounge.",
              correct: "I'd like to use the lounge.",
              explanation: '用 "I\'d like to" 比 "I want to" 听起来更礼貌，更自然。',
            },
            formalityVariants: {
              casual: "Hey, wanna use the lounge. Got my Priority Pass.",
              standard: "Hi, I'd like to use the lounge. I have a Priority Pass card.",
              formal:
                "Good morning/afternoon, I would like to inquire about accessing the lounge. I possess a Priority Pass membership card.",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn: "Welcome! May I see your Priority Pass card and your boarding pass, please?",
            textZh: "欢迎！请出示您的Priority Pass卡和登机牌。",
            commonMistake: {
              wrong: "Show me your Priority Pass card and boarding pass.",
              correct: "May I see your Priority Pass card and your boarding pass, please?",
              explanation: "“Show me” 太直接，不礼貌。用 “May I see” 或 “Can I see” 更委婉。",
            },
            keyPhrases: [
              { en: "Priority Pass", zh: "优先通行卡" },
              { en: "boarding pass", zh: "登机牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course. I'll need your lounge membership card and today's boarding pass.",
                textZh: "当然。我需要您的休息室会员卡和今天的登机牌。",
                actionHint: "出示两张卡",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome! Can I see your Priority Pass and boarding pass?",
            formalityVariants: {
              casual: "Welcome! Can I see your Priority Pass and boarding pass?",
              standard: "Welcome! May I see your Priority Pass card and your boarding pass, please?",
              formal:
                "Welcome. Could you kindly present your Priority Pass membership card and your boarding pass for verification?",
            },
          },
          {
            speaker: "you",
            textEn: "Here they are. Can I bring a guest with me?",
            textZh: "给您。我能带一位客人一起进来吗？",
            casualVersion: "Here. Can I bring a guest?",
            commonMistake: {
              wrong: "Can I bring a guest in with me?",
              correct: "Can I bring a guest with me?",
              explanation: '"bring a guest with me" 已经足够表达，不需加 "in"。',
            },
            formalityVariants: {
              casual: "Here. Can I bring a guest?",
              standard: "Here they are. Can I bring a guest with me?",
              formal:
                "Certainly, here are the requested documents. May I inquire if it is permissible to bring a guest with me?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "Your Priority Pass allows one complimentary guest. Additional guests are $35 each. Would you like to bring someone in?",
            textZh: "您的Priority Pass可以免费带一位客人。额外的客人每位35美元。您要带人进来吗？",
            commonMistake: {
              wrong: "Your Priority Pass can take one free guest.",
              correct: "Your Priority Pass allows one complimentary guest.",
              explanation: "“can take” 表达不自然，用 “allows” 或 “covers” 更地道。",
            },
            keyPhrases: [
              { en: "complimentary guest", zh: "免费客人名额" },
              { en: "additional guests", zh: "额外的客人" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这里表示「免费赠送的」，不是「赞美的」",
                similarUsage: "类似用法：Complimentary breakfast（免费早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Your pass includes one free guest. After that, it's $35 per person. Want to bring anyone?",
                textZh: "您的卡包含一位免费客人。之后每人35美元。要带人进来吗？",
                actionHint: "告知是否有同行人",
                frequency: "common",
              },
              {
                textEn: "One guest comes free with your membership. Extra guests are $35 a head.",
                textZh: "会员可以免费带一位客人。额外的每位35美元。",
                actionHint: "确认带几位客人",
                frequency: "occasional",
              },
            ],
            casualVersion: "Your Priority Pass gets you one free guest. Extras are $35 each. Wanna bring anyone in?",
            formalityVariants: {
              casual: "Your Priority Pass gets you one free guest. Extras are $35 each. Wanna bring anyone in?",
              standard:
                "Your Priority Pass allows one complimentary guest. Additional guests are $35 each. Would you like to bring someone in?",
              formal:
                "Your Priority Pass membership includes provision for one complimentary guest. Any supplementary guests will incur a charge of $35 per individual. Would you care to bring an additional person?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, my wife is with me. So she's free, right?",
            textZh: "是的，我太太在一起。她是免费的对吧？",
            casualVersion: "Yeah, wife's with me. So she's free, right?",
            commonMistake: {
              wrong: "My wife is with me. So she is free?",
              correct: "So she's free, right?",
              explanation: '"right?" 是一种常见的确认方式，使问句更自然。',
            },
            formalityVariants: {
              casual: "Yeah, wife's with me. So she's free, right?",
              standard: "Yes, my wife is with me. So she's free, right?",
              formal:
                "Indeed. My wife is accompanying me. Therefore, she would be admitted without charge, is that correct?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "That's correct. I just need her boarding pass as well. You're all set. The lounge closes at 10 PM tonight.",
            textZh: "是的。我也需要她的登机牌。好了，都办好了。贵宾室今晚10点关闭。",
            commonMistake: {
              wrong: "Yes. I also need her boarding pass. All done. The lounge closes at 10 PM tonight.",
              correct: "That's correct. I also need her boarding pass. All set. The lounge closes at 10 PM tonight.",
              explanation: "“All done” 用于表示工作完成，但 “All set” 更自然地表示“手续办好了”。",
            },
            keyPhrases: [
              { en: "you're all set", zh: "都办好了" },
              { en: "closes at", zh: "……关闭" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, she's covered. Just need her boarding pass too. Enjoy the lounge — we close at 10 tonight.",
                textZh: "是的，她包含在内。她的登机牌也给我看一下。好好享受贵宾室——今晚10点关门。",
                actionHint: "出示同伴的登机牌",
                frequency: "common",
              },
              {
                textEn:
                  "That's right, one guest is included. Her boarding pass, please. The lounge is open until 10 PM.",
                textZh: "没错，一位客人是免费的。请出示她的登机牌。贵宾室开放到晚上10点。",
                actionHint: "给出同伴登机牌",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, that's right. Just need her boarding pass too. You're good. Lounge closes at 10 tonight.",
            formalityVariants: {
              casual: "Yep, that's right. Just need her boarding pass too. You're good. Lounge closes at 10 tonight.",
              standard:
                "That's correct. I just need her boarding pass as well. You're all set. The lounge closes at 10 PM tonight.",
              formal:
                "That is entirely correct. I will require her boarding pass for verification purposes. All procedures are now complete. Please be advised that the lounge will cease operations at 22:00 hours this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "What facilities does the lounge have?",
            textZh: "贵宾室有什么设施？",
            casualVersion: "What facilities they got here?",
            commonMistake: {
              wrong: "What facilities the lounge has?",
              correct: "What facilities does the lounge have?",
              explanation: '疑问句需要助动词 "does" 来构成。',
            },
            formalityVariants: {
              casual: "What facilities they got here?",
              standard: "What facilities does the lounge have?",
              formal: "Could you please inform me of the amenities available within the lounge?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "We have a buffet area with hot and cold food, a bar with complimentary drinks, shower rooms, a quiet zone for resting, and high-speed Wi-Fi. The shower rooms are first-come, first-served.",
            textZh: "我们有自助餐区，有冷热食物，酒吧有免费饮品，还有淋浴间、安静休息区和高速Wi-Fi。淋浴间是先到先得。",
            commonMistake: {
              wrong: "We have buffet area, bar with free drinks, shower rooms, quiet zone for rest, and high-speed Wi-Fi.",
              correct: "We have a buffet area with hot and cold food, a bar with complimentary drinks, shower rooms, a quiet zone for resting, and high-speed Wi-Fi.",
              explanation: "列举设施时，要用冠词 “a/an”；“free drinks” 改为 “complimentary drinks” 更正式。“for resting” 比 “for rest” 更自然。",
            },
            keyPhrases: [
              { en: "buffet", zh: "自助餐" },
              { en: "complimentary drinks", zh: "免费饮品" },
              { en: "shower rooms", zh: "淋浴间" },
              { en: "quiet zone", zh: "安静休息区" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a food spread, an open bar, showers, a nap area, and free WiFi. Showers are first come, first served.",
                textZh: "有自助餐、开放酒吧、淋浴间、休息区和免费WiFi。淋浴先到先得。",
                actionHint: "自由使用设施",
                frequency: "common",
              },
              {
                textEn:
                  "Help yourself to food and drinks at the bar. We also have shower facilities and a quiet area if you need to rest.",
                textZh: "自助餐和吧台饮品随便用。我们还有淋浴设施和安静休息区，需要休息的话可以用。",
                actionHint: "随意使用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got a buffet, hot and cold food, free drinks at the bar, showers, a quiet spot to chill, and fast Wi-Fi. Showers are first-come, first-served.",
            formalityVariants: {
              casual:
                "Got a buffet, hot and cold food, free drinks at the bar, showers, a quiet spot to chill, and fast Wi-Fi. Showers are first-come, first-served.",
              standard:
                "We have a buffet area with hot and cold food, a bar with complimentary drinks, shower rooms, a quiet zone for resting, and high-speed Wi-Fi. The shower rooms are first-come, first-served.",
              formal:
                "Our lounge provides a comprehensive range of amenities, including a buffet service offering both hot and cold selections, a full bar with complimentary beverages, private shower facilities, a designated quiet zone for relaxation, and high-speed wireless internet access. Please note that shower rooms are allocated on a first-come, first-served basis.",
            },
          },
          {
            speaker: "you",
            textEn: "Will you make an announcement when my flight starts boarding?",
            textZh: "我的航班开始登机时会广播通知吗？",
            culturalNote: "美国机场通常不广播航班登机信息，需自行关注屏幕或手机通知。",
            casualVersion: "You guys announce when my flight boards?",
            commonMistake: {
              wrong: "Will have announcement when my flight start boarding?",
              correct: "Will you make an announcement when my flight starts boarding?",
              explanation: '问句需要主语 "you" 和正确的动词形式 "starts boarding"。',
            },
            formalityVariants: {
              casual: "You guys announce when my flight boards?",
              standard: "Will you make an announcement when my flight starts boarding?",
              formal: "Could you please confirm if an announcement will be made when my flight commences boarding?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "We don't announce specific flights, but there are departure screens throughout the lounge. I'd recommend setting an alarm on your phone. Your gate is about a 10-minute walk from here.",
            textZh:
              "我们不会广播具体航班，但贵宾室里到处有航班信息屏。建议您在手机上设个闹钟。从这里走到您的登机口大约10分钟。",
            culturalNote: "美国机场通常不广播登机，需自己留意屏幕和登机时间。",
            commonMistake: {
              wrong: "We don't announce specific flights, but flight info screens are everywhere in the lounge.",
              correct: "We don't make announcements for specific flights, but there are flight information screens throughout the lounge.",
              explanation: "“announce specific flights” 更自然；“everywhere” 改为 “throughout” 更合适。",
            },
            keyPhrases: [
              { en: "departure screens", zh: "航班信息屏" },
              { en: "setting an alarm", zh: "设闹钟" },
              { en: "10-minute walk", zh: "步行10分钟" },
            ],
            responseTip: "记得自己留意登机时间，贵宾室一般不会提醒具体航班",
            alternativeExpressions: [
              {
                textEn:
                  "We don't do flight announcements here, but check the monitors. Set a reminder — it's a 10-minute walk to your gate.",
                textZh: "我们这里不广播航班信息，但可以看屏幕。设个提醒——走到您的登机口要10分钟。",
                actionHint: "设手机提醒",
                frequency: "common",
              },
              {
                textEn:
                  "No individual boarding calls, but the screens are updated live. I'd leave yourself at least 15 minutes to get to the gate.",
                textZh: "没有单独的登机广播，但屏幕实时更新。建议至少提前15分钟出发去登机口。",
                actionHint: "提前15分钟出发",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, we don't announce specific flights. But there are screens everywhere. Just set an alarm on your phone. Gate's like 10 min walk from here.",
            formalityVariants: {
              casual:
                "Nah, we don't announce specific flights. But there are screens everywhere. Just set an alarm on your phone. Gate's like 10 min walk from here.",
              standard:
                "We don't announce specific flights, but there are departure screens throughout the lounge. I'd recommend setting an alarm on your phone. Your gate is about a 10-minute walk from here.",
              formal:
                "We do not provide specific flight announcements. However, departure information screens are conveniently located throughout the lounge. I would advise setting a personal reminder on your mobile device. Your boarding gate is approximately a ten-minute walk from this location.",
            },
          },
        ],
      },

      // --- Flow 2: 付费进入 + 使用设施 ---
      {
        id: "paid-access",
        titleZh: "付费使用贵宾室",
        titleEn: "Paid Lounge Access",
        description: "没有会员卡，付费进入贵宾室",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I don't have a membership card, but I'd like to use the lounge. Is there a walk-in option?",
            textZh: "你好，我没有会员卡，但想用贵宾室。可以现场付费进入吗？",
            casualVersion: "Hey, no card, but can I just use the lounge? Like, can I pay to get in?",
            commonMistake: {
              wrong: "I don't have membership card, but I want to use lounge. Can pay to enter?",
              correct: "Hi, I don't have a membership card, but I'd like to use the lounge. Is there a walk-in option?",
              explanation: '"want to" 听起来不礼貌；“walk-in option” 是常用表达。',
            },
            formalityVariants: {
              casual: "Hey, no membership, can I just pay to use the lounge?",
              standard:
                "Hi, I don't have a membership card, but I'd like to use the lounge. Is there a walk-in option?",
              formal:
                "Good morning/afternoon, I do not possess a membership card, however, I am interested in utilizing the lounge facilities. Do you offer an option for non-members to access the lounge, such as a day pass?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "Yes, we offer day passes. It's $55 per person for unlimited access until your departure. That includes food, drinks, Wi-Fi, and shower facilities.",
            textZh: "可以的，我们提供日通行证。每人55美元，离开前无限使用。包括餐饮、Wi-Fi和淋浴设施。",
            commonMistake: {
              wrong: "Yes, we have day passes. It is $55 per person, unlimited use before leaving.",
              correct: "Yes, we offer day passes. It's $55 per person for unlimited use until you leave.",
              explanation: "“offer day passes” 更地道；“unlimited use until you leave” 更完整自然。",
            },
            keyPhrases: [
              { en: "day passes", zh: "日通行证" },
              { en: "unlimited access", zh: "无限使用" },
              { en: "until your departure", zh: "直到您离开" },
            ],
            vocabNotes: {
              "day passes": {
                meaningInContext: "在这里指一次性付费使用贵宾室的通行证",
                similarUsage: "类似用法：Can I buy a day pass for the gym?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Walk-ins are welcome. It's $55 at the door, which covers everything.",
                textZh: "欢迎直接进入。门口付55美元，什么都包含。",
                actionHint: "可以直接付费进入",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, we got day passes. Fifty-five bucks a head, and you can use everything 'til your flight. Food, drinks, Wi-Fi, showers, all included.",
            formalityVariants: {
              casual:
                "Yeah, day passes are $55 each. You get everything – food, drinks, Wi-Fi, showers – 'til your flight leaves.",
              standard:
                "Yes, we offer day passes. It's $55 per person for unlimited access until your departure. That includes food, drinks, Wi-Fi, and shower facilities.",
              formal:
                "Indeed, we do provide day passes. The fee is $55 per individual, granting comprehensive access to all amenities until your scheduled departure. This encompasses complimentary food and beverages, Wi-Fi connectivity, and access to our shower facilities.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That sounds reasonable. My flight is delayed by 4 hours, so I could really use a comfortable place to wait. I'll take a day pass.",
            textZh: "价格还可以。我的航班延误4小时，确实需要一个舒适的地方等。我买一张日通行证。",
            casualVersion:
              "Sounds good. My flight's delayed, like, four hours, so yeah, I really need somewhere comfy to chill. I'll get a pass.",
            commonMistake: {
              wrong: "Price is okay. My flight delay 4 hours, I need comfortable place wait. I want day pass.",
              correct:
                "That sounds reasonable. My flight is delayed by 4 hours, so I could really use a comfortable place to wait. I'll take a day pass.",
              explanation: '语序不自然，"I\'ll take" 比 "I want" 更自然地表示决定购买。',
            },
            formalityVariants: {
              casual: "Sounds fair. My flight's super delayed, so I definitely need somewhere comfy. I'll take one.",
              standard:
                "That sounds reasonable. My flight is delayed by 4 hours, so I could really use a comfortable place to wait. I'll take a day pass.",
              formal:
                "That pricing seems quite acceptable. Given that my flight has been delayed by four hours, I would greatly appreciate a comfortable environment in which to wait. I will proceed with purchasing a day pass.",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "I understand — delays can be tiring. Here's your pass. Would you like to reserve a shower slot? We have some availability in about 30 minutes.",
            textZh: "理解——延误确实很累。给您通行证。想预约淋浴吗？大约30分钟后有空位。",
            commonMistake: {
              wrong: "I understand - delays are tiring. Here is your pass. Do you want to book a shower?",
              correct: "I understand — delays can be tiring. Here's your pass. Would you like to reserve a shower?",
              explanation: "“can be tiring” 比 “are tiring” 语气更缓和，更自然。 “reserve a shower” 更正式和常见。",
            },
            keyPhrases: [
              { en: "reserve", zh: "预约" },
              { en: "shower slot", zh: "淋浴时段" },
              { en: "availability", zh: "空位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Delays are rough. Here's your day pass. Want me to book a shower for you? One opens up in about half an hour.",
                textZh: "延误确实折腾人。给您日通行证。要帮您预约淋浴吗？大概半小时后有空位。",
                actionHint: "考虑是否需要淋浴",
                frequency: "common",
              },
              {
                textEn:
                  "Sorry about your delay. Welcome in. We have a shower available in 30 minutes if you're interested.",
                textZh: "抱歉您航班延误了。欢迎进来。30分钟后有淋浴空位，需要的话可以预约。",
                actionHint: "要的话告知前台",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, totally get it — delays suck. Here's your pass. Wanna book a shower? Got a slot open in, like, half an hour.",
            formalityVariants: {
              casual:
                "Totally get it, delays are a pain. Here's your pass. Want to book a shower? Got one free in about 30.",
              standard:
                "I understand — delays can be tiring. Here's your pass. Would you like to reserve a shower slot? We have some availability in about 30 minutes.",
              formal:
                "I certainly empathize with the inconvenience of delays. Here is your pass. May I inquire if you would be interested in reserving a shower appointment? We currently have availability approximately 30 minutes from now.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please reserve one for me. Are towels provided?",
            textZh: "好的，帮我预约一个。提供毛巾吗？",
            casualVersion: "Yeah, go ahead and book it. You guys got towels, right?",
            commonMistake: {
              wrong: "Yes, please help me reserve one. Do you provide towels?",
              correct: "Yes, please reserve one for me. Are towels provided?",
              explanation: '"Help me reserve" 可以简化为 "reserve one for me"。问设施时 "Are X provided?" 更常用。',
            },
            formalityVariants: {
              casual: "Yeah, go ahead and reserve it. Got towels?",
              standard: "Yes, please reserve one for me. Are towels provided?",
              formal:
                "Certainly, I would appreciate it if you could reserve one for me. May I also inquire if towels are provided with the shower facilities?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "Yes, we provide towels, toiletries, a hair dryer — everything you need. I'll put you down for 2:30 PM. We'll call your name when it's ready.",
            textZh: "是的，我们提供毛巾、洗漱用品、吹风机——所有您需要的。帮您约2:30。准备好了会叫您的名字。",
            commonMistake: {
              wrong: "Yes, we provide towels, toiletries, hair dryer - everything you need. I book you for 2:30. We call your name when it's ready.",
              correct: "Yes, we provide towels, toiletries, a hair dryer — everything you need. I'll put you down for 2:30. We'll call your name when it's ready.",
              explanation: "需要使用冠词 “a hair dryer”；“I'll put you down for” 更自然地表示“我给你安排预约”。",
            },
            keyPhrases: [
              { en: "toiletries", zh: "洗漱用品" },
              { en: "hair dryer", zh: "吹风机" },
              { en: "put you down for", zh: "帮您登记/预约" },
            ],
            alternativeExpressions: [
              {
                textEn: "Towels, shampoo, everything's included. I've got you booked at 2:30. We'll come find you.",
                textZh: "毛巾、洗发水，什么都有。帮您预约了2:30。到时候来找您。",
                actionHint: "等候叫号",
                frequency: "common",
              },
              {
                textEn: "All amenities are provided. You're down for the 2:30 slot. Just listen for your name.",
                textZh: "所有用品都提供。您预约了2:30的时段。留意叫您名字。",
                actionHint: "注意听名字",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, got towels, toiletries, hair dryer, the whole nine yards. I'll put you down for two-thirty. We'll holler when it's ready.",
            formalityVariants: {
              casual:
                "Yep, we got all that – towels, toiletries, hair dryer. You're set for 2:30. We'll buzz you when it's good to go.",
              standard:
                "Yes, we provide towels, toiletries, a hair dryer — everything you need. I'll put you down for 2:30 PM. We'll call your name when it's ready.",
              formal:
                "Yes, we furnish all necessary amenities, including towels, a complete set of toiletries, and a hair dryer. I will schedule your appointment for 2:30 PM. We will announce your name when the facility is prepared for your use.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a place to charge my phone and laptop?",
            textZh: "有给手机和笔记本充电的地方吗？",
            casualVersion: "Can I charge my phone and laptop anywhere?",
            commonMistake: {
              wrong: "Have place to charge my phone and laptop?",
              correct: "Is there a place to charge my phone and laptop?",
              explanation: '缺少谓语动词和主语，"Is there a place" 是地道表达。',
            },
            formalityVariants: {
              casual: "Can I charge my stuff anywhere?",
              standard: "Is there a place to charge my phone and laptop?",
              formal:
                "Are there designated areas available for charging electronic devices, such as my phone and laptop?",
            },
          },
          {
            speaker: "them",
            role: "贵宾室前台",
            textEn:
              "Yes, there are charging stations at every seat, and we have universal adapters available at the front desk if you need one. Just ask.",
            textZh: "有的，每个座位都有充电口，前台也有万能转换插头，需要的话来借就行。",
            commonMistake: {
              wrong: "Yes, every seat has charging ports, and we have universal adapters at the front desk if you need.",
              correct: "Yes, there are charging stations at every seat, and we have universal adapters available at the front desk if you need one.",
              explanation: "“charging ports” 和 “charging stations” 都可以，但 “charging stations” 更侧重于设施。 “if you need one” 完整比 “if you need” 更自然。",
            },
            keyPhrases: [
              { en: "charging stations", zh: "充电口" },
              { en: "universal adapters", zh: "万能转换插头" },
            ],
            alternativeExpressions: [
              {
                textEn: "Every seat has USB and power outlets. Need an adapter? We've got those at the desk.",
                textZh: "每个座位都有USB和电源插座。需要转换插头吗？前台有。",
                actionHint: "找座位充电",
                frequency: "common",
              },
              {
                textEn: "Charging points are built into every workstation. We also lend out adapters if you need one.",
                textZh: "每个工位都有内置充电口。需要的话我们也借转换插头。",
                actionHint: "如需适配器来前台借",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, every seat's got chargers. And if you need an adapter, just ask at the front desk.",
            formalityVariants: {
              casual: "Yep, chargers at every seat. Need an adapter? Just ask at the front desk.",
              standard:
                "Yes, there are charging stations at every seat, and we have universal adapters available at the front desk if you need one. Just ask.",
              formal:
                "Yes, charging stations are conveniently located at each seating area. Furthermore, should you require a universal adapter, they are available upon request at the front desk.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you so much.",
            textZh: "太好了。非常感谢。",
            casualVersion: "Awesome. Thanks a bunch.",
            formalityVariants: {
              casual: "Cool. Thanks!",
              standard: "Perfect. Thank you so much.",
              formal: "Excellent. I am most grateful for your assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 航班延误 ====================
  {
    id: "airport-delay",
    category: "airport",
    titleZh: "航班延误",
    titleEn: "Flight Delay",
    description: "航班延误后的应对，包括改签、补偿、住宿安排等",
    otherRole: "航空公司服务台",
    otherRoleIcon: "clock",
    flows: [
      {
        id: "short-delay",
        titleZh: "短时延误",
        titleEn: "Short Delay",
        description: "航班延误1-3小时，了解情况并等待",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, the departure board says my flight to Vancouver is delayed. Can you tell me what's going on?",
            textZh: "请问，信息屏显示我去温哥华的航班延误了。能告诉我怎么回事吗？",
            casualVersion: "Hey, board says my Vancouver flight's delayed. What's up?",
            culturalNote: "直接询问原因，不用过多寒暄。",
            commonMistake: {
              wrong: "Can you tell me what the reason is?",
              correct: "Can you tell me what's going on?",
              explanation: "询问原因时，'what's going on' 更自然地表示“出了什么事”。",
            },
            formalityVariants: {
              casual: "Hey, my flight to Vancouver's delayed. What's up?",
              standard: "Excuse me, the departure board says my flight to Vancouver is delayed. Can you tell me what's going on?",
              formal: "Pardon me, I've noticed on the departure screen that my flight to Vancouver has been delayed. Could you please provide some information regarding the situation?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Yes, flight AC889 is delayed due to a mechanical issue. The maintenance team is working on it. We're expecting a 2-hour delay, with a new departure time of 5:30 PM.",
            textZh: "是的，AC889航班因为机械故障延误了。维修团队正在处理。预计延误2小时，新的起飞时间是下午5:30。",
            casualVersion: "Yeah, AC889's delayed 'cause of a mechanical problem. Maint team's on it. Looking like a 2-hour delay, new takeoff at 5:30 PM.",
            commonMistake: {
              wrong: "It's because mechanical issue.",
              correct: "It's due to a mechanical issue.",
              explanation: "due to 或 because of 后面跟名词时，通常需要冠词。",
            },
            formalityVariants: {
              casual: "Yep, AC889's delayed, mechanical issue. Maint's on it. Expecting 2 hours, new time 5:30 PM.",
              standard: "Yes, flight AC889 is delayed due to a mechanical issue. The maintenance team is currently working on it. We expect a 2-hour delay, with a new departure time of 5:30 PM.",
              formal: "Indeed, flight AC889 has incurred a delay resulting from a mechanical issue. Our maintenance team is actively engaged in resolving this. We anticipate a two-hour delay, revising the departure time to 5:30 PM.",
            },
            keyPhrases: [
              { en: "mechanical issue", zh: "机械故障" },
              { en: "maintenance team", zh: "维修团队" },
              { en: "new departure time", zh: "新的起飞时间" },
            ],
            vocabNotes: {
              "mechanical issue": {
                meaningInContext: "在这里指飞机设备出了问题，需要维修",
                similarUsage: "类似用法：The car has a mechanical problem.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "There's a technical problem with the aircraft. Engineers are looking into it.",
                textZh: "飞机有技术问题。工程师在检查。",
                actionHint: "等待更新",
                frequency: "common",
              },
              {
                textEn: "We're experiencing a delay due to an equipment issue. Estimated delay is two hours.",
                textZh: "由于设备问题我们出现了延误。预计延误两小时。",
                actionHint: "注意新的起飞时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will there be any updates? How will I know if the time changes again?",
            textZh: "会有更新通知吗？如果时间又变了我怎么知道？",
            casualVersion: "Any updates? How'll I know if it changes again?",
            commonMistake: {
              wrong: "How can I know if time changes again?",
              correct: "How will I know if the time changes again?",
              explanation: "未来发生的事情用 will I know 更自然，time 前加 the。",
            },
            formalityVariants: {
              casual: "Any updates? How'll I know if it changes?",
              standard: "Will there be any updates? How will I know if the time changes again?",
              formal: "Will further updates be provided? And how will I be informed should the departure time be revised once more?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "We'll make announcements at the gate and update the departure board. If you have our airline app, you'll get push notifications too. I'd recommend staying near the gate area.",
            textZh:
              "我们会在登机口广播并更新信息屏。如果您有我们航空公司的App，也会收到推送通知。建议您留在登机口附近。",
            casualVersion: "We'll announce at the gate, update screens. If you got our app, you'll get push notifs. Best to stay near the gate.",
            commonMistake: {
              wrong: "You will receive push notification.",
              correct: "You will receive push notifications.",
              explanation: "指代一类通知时用复数 notifications 更准确。",
            },
            formalityVariants: {
              casual: "We'll announce at the gate, update screens. App users get push notifs. Stay near the gate.",
              standard: "We will make announcements at the gate and update the information screens. If you have our airline's app, you will also receive push notifications. We recommend you stay near the gate.",
              formal: "We shall provide announcements at the boarding gate and ensure the information screens are updated. Should you possess our airline's mobile application, you will also receive direct push notifications. We advise remaining in the vicinity of the boarding gate.",
            },
            keyPhrases: [
              { en: "announcements", zh: "广播" },
              { en: "departure board", zh: "信息屏" },
              { en: "push notifications", zh: "推送通知" },
              { en: "near the gate area", zh: "登机口附近" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Keep an eye on the screens and listen for announcements. Download our app for live updates. Best to stay close to the gate.",
                textZh: "留意屏幕和广播。下载我们的App可以看实时更新。最好留在登机口附近。",
                actionHint: "下载App看更新",
                frequency: "common",
              },
              {
                textEn: "We'll keep you posted via the boards and PA system. Don't wander too far from the gate.",
                textZh: "我们会通过信息屏和广播系统通知您。别走太远离开登机口。",
                actionHint: "留在登机口附近",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the airline providing any meal vouchers for the delay?",
            textZh: "航空公司会提供餐食券吗？",
            casualVersion: "Airline giving out meal vouchers for this delay?",
            commonMistake: {
              wrong: "Does airline give meal vouchers for delay?",
              correct: "Is the airline providing any meal vouchers for the delay?",
              explanation: "通常用 is providing 表示当前正在发生或持续的情况。airline 前加 the。",
            },
            formalityVariants: {
              casual: "Are they giving out meal vouchers for the delay?",
              standard: "Is the airline providing any meal vouchers for the delay?",
              formal: "Might the airline be issuing any meal vouchers in consideration of this delay?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "For delays over 2 hours, we provide a $15 meal voucher. Here's yours — you can use it at any restaurant in the terminal.",
            textZh: "延误超过2小时我们提供15美元的餐食券。给您——航站楼内任何餐厅都可以用。",
            casualVersion: "If it's over 2 hours, you get a $15 meal voucher. Here ya go – works at any terminal restaurant.",
            commonMistake: {
              wrong: "This voucher can use at any restaurant.",
              correct: "This voucher is valid at any restaurant.",
              explanation: "Voucher 是被使用，应为被动语态或用 valid。",
            },
            formalityVariants: {
              casual: "Over 2 hours, you get a $15 meal voucher. Here you go – good at any terminal restaurant.",
              standard: "For delays exceeding two hours, we provide a $15 meal voucher. Here you go – it is valid at any restaurant within the terminal.",
              formal: "Should the delay extend beyond two hours, we are authorized to issue a $15 meal voucher. Kindly accept this – it is redeemable at any restaurant located within the terminal facility.",
            },
            keyPhrases: [
              { en: "meal voucher", zh: "餐食券" },
              { en: "delays over 2 hours", zh: "延误超过2小时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Since it's been over 2 hours, here's a $15 food voucher. It works at any place in the terminal.",
                textZh: "因为已经超过2小时了，给您一张15美元的餐食券。航站楼里的餐厅都能用。",
                actionHint: "拿去吃点东西",
                frequency: "common",
              },
              {
                textEn: "We're handing out meal vouchers for the delay — $15, good at any eatery here.",
                textZh: "我们在发延误的餐食券——15美元，这里任何餐饮店都可以用。",
                actionHint: "找餐厅使用",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I have a hotel reservation tonight — should I call them to let them know I'll be late?",
            textZh: "谢谢。我今晚有酒店预订——需要通知他们我会晚到吗？",
            casualVersion: "Thanks. Got a hotel tonight — should I call 'em to say I'll be late?",
            commonMistake: {
              wrong: "Should I call them to inform I will be late?",
              correct: "Should I call them to let them know I'll be arriving late?",
              explanation: "动词 inform 后面需要宾语 'them' 或 'that' 从句。let them know 更口语自然。",
            },
            formalityVariants: {
              casual: "Thanks. Got a hotel booked tonight — should I call 'em to say I'll be late?",
              standard: "Thank you. I have a hotel reservation tonight — should I call them to let them know I'll be arriving late?",
              formal: "Thank you for your assistance. I hold a hotel reservation for this evening; would it be advisable for me to contact them to apprise them of my anticipated late arrival?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "That would be a good idea, especially if you have a late check-in. Most hotels will hold your room, but it's better to confirm. We apologize again for the inconvenience.",
            textZh: "这是个好主意，尤其如果您是晚到入住。大多数酒店会保留房间，但最好确认一下。再次为不便道歉。",
            casualVersion: "Yeah, good idea, 'specially if you got a late check-in. Most hotels'll hold your room, but always best to confirm. Sorry again for the trouble.",
            commonMistake: {
              wrong: "It's always better to confirm.",
              correct: "It's always best to confirm.",
              explanation: "It's always best to confirm 是常用表达，表示强烈建议。",
            },
            formalityVariants: {
              casual: "Yeah, good idea, 'specially if you got a late check-in. Most hotels'll hold your room, but best to confirm. Sorry for the trouble.",
              standard: "That would be a good idea, especially if you have a late check-in. Most hotels will hold your room, but it's always best to confirm. We apologize again for the inconvenience.",
              formal: "That would indeed be prudent, particularly if your check-in time is scheduled for a later hour. While the majority of hotels will retain your reservation, it is always advisable to confirm. We extend our sincerest apologies once more for any inconvenience this may have caused.",
            },
            keyPhrases: [
              { en: "hold your room", zh: "保留房间" },
              { en: "late check-in", zh: "晚到入住" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, definitely give them a heads up. They'll usually keep the room, but best to call ahead. Sorry again.",
                textZh: "是的，最好提前通知他们。通常会保留房间，但打个电话确认最好。再次抱歉。",
                actionHint: "提前打电话通知酒店",
                frequency: "common",
              },
              {
                textEn:
                  "Good thinking. Most hotels hold late arrivals, but a quick call won't hurt. Apologies for the trouble.",
                textZh: "想得周到。大多数酒店会等晚到的客人，但打个电话更保险。抱歉给您添麻烦了。",
                actionHint: "联系酒店确认",
                frequency: "occasional",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 长时延误/改签 ---
      {
        id: "rebooking",
        titleZh: "改签与补偿",
        titleEn: "Rebooking & Compensation",
        description: "航班长时间延误或取消，需要改签并争取补偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "My flight has been delayed for over 5 hours now, and they just announced another 2-hour delay. I need to get to New York tonight. What can you do?",
            textZh: "我的航班已经延误超过5小时了，刚又宣布再延误2小时。我今晚必须到纽约。你能怎么处理？",
            casualVersion: "Flight's been delayed over 5 hours now, and they just announced another 2. Gotta get to New York tonight. What can you do?",
            commonMistake: {
              wrong: "I must get to New York tonight.",
              correct: "I need to get to New York tonight.",
              explanation: "I need to 和 I have to 更常用于表达迫切的个人需求，'must' 语气更强硬或表示规定。",
            },
            formalityVariants: {
              casual: "My flight's been delayed 5+ hours, another 2 just announced. I gotta get to NYC tonight. What can you do?",
              standard: "My flight has been delayed for over 5 hours now, and they just announced another 2-hour delay. I need to get to New York tonight. What can you do?",
              formal: "My flight has now experienced a delay exceeding five hours, with an additional two-hour delay just announced. It is imperative that I reach New York this evening. What options might you be able to provide?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "I completely understand your frustration. Let me check alternative flights for you. I can see there's a seat available on a Delta flight departing at 8 PM — that would get you to JFK by 11:30 PM. Shall I rebook you?",
            textZh:
              "完全理解您的心情。让我帮您查替代航班。我看到达美航空晚上8点有一个座位——到纽约JFK是晚上11:30。帮您改签吗？",
            casualVersion: "Totally get your frustration. Let me check other flights. Looks like there's a seat on Delta at 8 PM, gets to JFK at 11:30 PM. Wanna rebook?",
            commonMistake: {
              wrong: "I see there has a seat on Delta.",
              correct: "I can see there's a seat on Delta.",
              explanation: "表达存在用 there is/are，而不是 there has。",
            },
            formalityVariants: {
              casual: "I get it, you're frustrated. Let me check other flights. See a Delta seat at 8 PM, JFK 11:30 PM. Rebook you?",
              standard: "I completely understand your frustration. Let me check alternative flights for you. I can see there's a seat on Delta at 8 PM – arriving JFK 11:30 PM. Shall I rebook you?",
              formal: "I fully comprehend your frustration regarding this matter. Kindly allow me to investigate alternative flight arrangements on your behalf. I note the availability of a seat on a Delta flight departing at 8:00 PM, scheduled to arrive at JFK at 11:30 PM. Would you like me to process this rebooking for you?",
            },
            keyPhrases: [
              { en: "alternative flights", zh: "替代航班" },
              { en: "rebook", zh: "改签" },
              { en: "frustration", zh: "沮丧/不满" },
            ],
            vocabNotes: {
              rebook: {
                meaningInContext: "在这里指把原来的机票改到另一个航班上",
                similarUsage: "类似用法：Can I rebook my hotel for a different date?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I can put you on another carrier's flight tonight. There's one leaving at 8 PM.",
                textZh: "我可以帮您转到另一家航空公司今晚的航班。有一班8点起飞。",
                actionHint: "确认是否接受改签",
                frequency: "common",
              },
            ],
            isBranchPoint: true,
          },
          {
            speaker: "you",
            textEn: "Yes, please rebook me on that flight. Also, am I entitled to any compensation for this delay?",
            textZh: "好的，帮我改签到那班。另外，这次延误我有权获得补偿吗？",
            casualVersion: "Yeah, put me on that flight. Also, do I get any compensation for this delay?",
            commonMistake: {
              wrong: "Do I have right to compensation?",
              correct: "Am I entitled to any compensation?",
              explanation: "entitled to compensation 是固定搭配，get compensation 更口语。",
            },
            formalityVariants: {
              casual: "Yeah, rebook me on that. Also, do I get compensation for this?",
              standard: "Yes, please rebook me on that flight. Also, am I entitled to any compensation for this delay?",
              formal: "Yes, kindly proceed with rebooking me on that particular flight. Furthermore, am I eligible for any form of compensation attributable to this delay?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Since the delay is due to a mechanical issue — which is within the airline's control — you are entitled to compensation. I can issue you a $200 travel voucher now, or you can file a formal claim for cash compensation through our website.",
            textZh:
              "因为延误是机械故障造成的——属于航空公司的责任——您有权获得补偿。我现在可以给您200美元的旅行代金券，或者您可以通过我们的网站提交正式的现金赔偿申请。",
            casualVersion: "Yeah, since the delay's a mechanical issue – that's on us – you're due compensation. I can give you a $200 travel voucher right now, or you can do a cash claim on our site.",
            commonMistake: {
              wrong: "I can offer you 200 dollars travel voucher.",
              correct: "I can offer you a $200 travel voucher.",
              explanation: "金额修饰名词时通常需要冠词 'a'，'travel voucher' 是可数名词，需冠词。",
            },
            formalityVariants: {
              casual: "Since it's a mechanical issue – our fault – you're due compensation. I can give you a $200 travel voucher now, or you can do a cash claim online.",
              standard: "Since the delay is due to a mechanical issue — which is within the airline's control — you are entitled to compensation. I can offer you a $200 travel voucher now, or you can submit a formal cash claim through our website.",
              formal: "As the delay stems from a mechanical issue — which falls within the airline's operational purview — you are indeed entitled to compensation. I am authorized to provide you with a $200 travel voucher at this moment, alternatively, you may elect to submit a formal claim for monetary compensation via our official website.",
            },
            keyPhrases: [
              { en: "entitled to compensation", zh: "有权获得补偿" },
              { en: "within the airline's control", zh: "航空公司的责任" },
              { en: "travel voucher", zh: "旅行代金券" },
              { en: "file a formal claim", zh: "提交正式申请" },
              { en: "cash compensation", zh: "现金赔偿" },
            ],
            culturalNote: "在美国，航空公司对因自身原因造成的延误有赔偿义务。在欧盟，EC 261法规对旅客保护更强。",
            alternativeExpressions: [
              {
                textEn:
                  "Because it's a mechanical problem — our responsibility — you're eligible for compensation. I can give you a $200 voucher now, or you can claim cash online.",
                textZh:
                  "因为是机械问题——我们的责任——您有资格获得赔偿。我可以现在给您200美元代金券，或者您在网上申请现金。",
                actionHint: "选择代金券或现金",
                frequency: "common",
              },
              {
                textEn:
                  "You do qualify for compensation since it's on us. Would you like a travel credit right now or to submit a claim for cash?",
                textZh: "因为是我们的原因，您确实有权获得补偿。您想现在拿旅行积分还是提交现金索赔？",
                actionHint: "决定补偿方式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd prefer the cash compensation. How do I file the claim?",
            textZh: "我更想要现金赔偿。怎么提交申请？",
            casualVersion: "I'd rather have the cash. How do I claim it?",
            commonMistake: {
              wrong: "How to submit a claim?",
              correct: "How do I submit a claim?",
              explanation: "疑问句需要主语和助动词，How do I... 是正确结构。",
            },
            formalityVariants: {
              casual: "I'd prefer cash. How do I claim it?",
              standard: "I'd prefer the cash compensation. How do I submit a claim?",
              formal: "I would prefer the monetary compensation. What is the procedure for submitting a claim?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              'Go to our website, under "Customer Support," then "Delay Compensation." You\'ll need your booking reference, the original flight number, and today\'s date. Claims are usually processed within 30 days.',
            textZh:
              '去我们网站，找 "客户支持" 下的 "延误赔偿"。需要您的订票号、原航班号和今天的日期。申请通常30天内处理。',
            casualVersion: "Go to our site, under 'Customer Service,' find 'Delay Compensation Claim Form.'",
            commonMistake: {
              wrong: "Go to our website, 'Customer Service' menu, 'Delay Compensation Claim Form'.",
              correct: "Go to our website, under 'Customer Service' you'll find 'Delay Compensation Claim Form'.",
              explanation: "需要介词 'under' 和连接词 'you'll find' 使句子结构完整。",
            },
            formalityVariants: {
              casual: "Check our site, 'Customer Service' section, 'Delay Comp Claim Form'.",
              standard: "Go to our website, under 'Customer Service' you'll find 'Delay Compensation Claim Form'.",
              formal: "Please navigate to our official website; within the 'Customer Service' section, you will locate the 'Delay Compensation Claim Form'.",
            },
            keyPhrases: [
              { en: "booking reference", zh: "订票号" },
              { en: "processed within 30 days", zh: "30天内处理" },
              { en: "delay compensation", zh: "延误赔偿" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just visit our site, go to Support, then Compensation. Have your booking number and flight details handy. Takes about a month to process.",
                textZh: "去我们网站，点支持，再点赔偿。准备好订票号和航班信息。大概一个月处理。",
                actionHint: "记下网站路径",
                frequency: "common",
              },
              {
                textEn:
                  "File your claim online under Delay Compensation. You'll need your confirmation code and today's flight info. It usually takes 30 days.",
                textZh: "在网上的延误赔偿栏目提交申请。需要确认码和今天的航班信息。通常30天处理。",
                actionHint: "保留好航班信息",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about my checked luggage? Will it be moved to the new flight?",
            textZh: "我的托运行李呢？会转到新航班上吗？",
            casualVersion: "What about my checked bags? Will they move 'em to the new flight?",
            commonMistake: {
              wrong: "My checked luggage? Will it transfer to new flight?",
              correct: "What about my checked luggage? Will it be moved to the new flight?",
              explanation: "行李是被转运，需被动语态 'be moved'。新航班前加 'the'。",
            },
            formalityVariants: {
              casual: "My checked bags? They moving 'em to the new flight?",
              standard: "What about my checked luggage? Will it be moved to the new flight?",
              formal: "Regarding my checked luggage, what arrangements will be made? Will it be transferred to the revised flight?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Yes, I've already arranged for your luggage to be transferred to the Delta flight. Here's your new boarding pass and updated baggage tag number. Gate F9, boarding at 7:30 PM.",
            textZh:
              "是的，我已经安排把您的行李转到达美航班了。给您新的登机牌和更新的行李标签号。F9登机口，7:30开始登机。",
            casualVersion: "Yeah, already got your bags transferred to the Delta flight. Here's your new boarding pass and baggage tag number. Gate F9, boarding at 7:30.",
            commonMistake: {
              wrong: "I already arranged your bags to transfer to Delta flight.",
              correct: "I've already arranged for your bags to be transferred to the Delta flight.",
              explanation: "Arrange for something to be done 是正确结构，行李是被转运。",
            },
            formalityVariants: {
              casual: "Yep, got your bags moved to Delta already. Here's your new boarding pass and baggage tag. Gate F9, boarding 7:30.",
              standard: "Yes, I've already arranged for your bags to be transferred to the Delta flight. Here's your new boarding pass and updated baggage tag number. Gate F9, boarding starts at 7:30.",
              formal: "Yes, I have already made the necessary arrangements for your luggage to be transferred to the Delta flight. Kindly accept your new boarding pass and the updated baggage tag number. Boarding for Gate F9 will commence at 7:30.",
            },
            keyPhrases: [
              { en: "transferred", zh: "转运" },
              { en: "updated baggage tag", zh: "更新的行李标签" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All taken care of. Your bags are being moved to the Delta flight. Here's your new pass — Gate F9, boards at 7:30.",
                textZh: "都安排好了。您的行李正在转到达美航班。给您新登机牌——F9登机口，7:30登机。",
                actionHint: "记住新的登机口和时间",
                frequency: "common",
              },
              {
                textEn:
                  "Your luggage is already being transferred. New boarding pass here, updated tag number too. Head to F9 by 7:30.",
                textZh: "您的行李已经在转运了。新登机牌在这里，行李标签号也更新了。7:30前到F9。",
                actionHint: "保管好新登机牌",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for taking care of this. I appreciate your help.",
            textZh: "谢谢你处理这些。非常感谢你的帮助。",
            casualVersion: "Thanks for taking care of this. Really appreciate the help.",
            commonMistake: {
              wrong: "Thank you for your help.",
              correct: "Thank you for taking care of this.",
              explanation: "表示感谢对方处理了具体问题时，'taking care of this' 更具体恰当。",
            },
            formalityVariants: {
              casual: "Thanks for handling this. Appreciate it.",
              standard: "Thank you for taking care of this. I appreciate your help.",
              formal: "I am truly grateful for your attention to this matter. Your assistance has been most valuable.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 海关申报 ====================
  {
    id: "airport-customs-declare",
    tags: ["customs", "海关", "declare"],
    category: "airport",
    titleZh: "海关申报",
    titleEn: "Customs Declaration",
    description: "入境时填写海关申报表、申报携带物品，包括超额物品和食品",
    otherRole: "海关官员",
    otherRoleIcon: "clipboard",
    flows: [
      {
        id: "standard-declaration",
        titleZh: "标准申报",
        titleEn: "Standard Declaration",
        description: "正常填写申报表，没有需要特别申报的物品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do I need to fill out a customs declaration form?",
            textZh: "请问，我需要填写海关申报表吗？",
            casualVersion: "Hey, gotta fill out a customs form?",
            commonMistake: {
              wrong: "Do I need fill customs declaration form?",
              correct: "Do I need to fill out a customs declaration form?",
              explanation: '英语疑问句中动词不定式常漏掉 "to"，且名词前定冠词易漏。',
            },
            formalityVariants: {
              casual: "Hey, do I need to fill out one of these customs forms?",
              standard: "Excuse me, do I need to fill out a customs declaration form?",
              formal: "Pardon me, could you please clarify if I am required to complete a customs declaration form?",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "Yes, every arriving passenger needs to complete one. Here's the form. Fill in your personal information, flight details, and list any items you need to declare.",
            textZh: "是的，每位入境旅客都需要填写。给您表格。填写个人信息、航班信息，列出需要申报的物品。",
            commonMistake: {
              wrong: "Yes, everyone needs one. Here.",
              correct: "Yes, every arriving passenger needs to complete one. Here you go.",
              explanation: "直接说“Here”通常不够自然，要加上“Here you go”或“Here it is”",
            },
            keyPhrases: [
              { en: "customs declaration form", zh: "海关申报表" },
              { en: "arriving passenger", zh: "入境旅客" },
              { en: "declare", zh: "申报" },
            ],
            vocabNotes: {
              declare: {
                meaningInContext: "在海关语境中指「申报」，就是告诉海关你带了什么东西",
                similarUsage: "类似用法：Nothing to declare.（没有需要申报的）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "You'll need to fill out a declaration card. Just mark 'yes' or 'no' for each question.",
                textZh: "您需要填一张申报卡。每个问题勾「是」或「否」。",
                actionHint: "照着表格逐项填写",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, everyone coming in has to. Here, take this. Just put your info, flight stuff, and anything you gotta declare.",
            formalityVariants: {
              casual:
                "Yup, everyone arriving needs one. Here's the form. Just fill in your personal stuff, flight info, and anything you have to declare.",
              standard:
                "Yes, every arriving passenger needs to complete one. Here's the form. Fill in your personal information, flight details, and list any items you need to declare.",
              formal:
                "Affirmative, all incoming passengers are required to complete this document. Please find the form attached. Kindly provide your personal particulars, flight itinerary, and enumerate any declarable items.",
            },
          },
          {
            speaker: "you",
            textEn: "What counts as items I need to declare? I have some gifts and personal electronics.",
            textZh: "什么算需要申报的？我有一些礼物和个人电子产品。",
            casualVersion: "So, what exactly counts as declare-able? Got some gifts and my electronics.",
            commonMistake: {
              wrong: "What is items I need declare? I have gifts and personal electronics.",
              correct: "What counts as items I need to declare? I have some gifts and personal electronics.",
              explanation: '中式英语常省略动词短语 "counts as" 和动词不定式 "to"，且名词前冠词易漏。',
            },
            formalityVariants: {
              casual: "What do I actually need to declare? I've got some gifts and my personal electronics.",
              standard: "What counts as items I need to declare? I have some gifts and personal electronics.",
              formal:
                "Could you please specify which categories of items are considered declarable? I currently possess a few gifts and my personal electronic devices.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "You need to declare: goods over the duty-free allowance, food and agricultural products, more than $10,000 in cash, and any restricted items. Personal electronics for your own use are usually fine.",
            textZh:
              "需要申报的有：超过免税额度的商品、食品和农产品、超过1万美元的现金、以及任何限制物品。自用的个人电子产品通常没问题。",
            commonMistake: {
              wrong: "You need declare: goods over the allowance, food and farm products.",
              correct: "You need to declare: goods over the duty-free allowance, food and agricultural products.",
              explanation: "“need to declare”更自然；“agricultural”是农产品更准确的说法",
            },
            keyPhrases: [
              { en: "duty-free allowance", zh: "免税额度" },
              { en: "agricultural products", zh: "农产品" },
              { en: "restricted items", zh: "限制物品" },
              { en: "personal use", zh: "自用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Anything over the allowance, any food or plants, large amounts of cash, or restricted goods. Your personal laptop and phone are fine.",
                textZh: "超过额度的东西、食品或植物、大额现金或限制物品都要申报。个人笔记本和手机没问题。",
                actionHint: "对照清单检查",
                frequency: "common",
              },
              {
                textEn:
                  "If you're carrying food, more than $10,000 in cash, or expensive goods over the limit, mark them on the form. Personal gadgets don't count.",
                textZh: "如果带了食品、超过1万美元现金或超限的贵重商品，在表格上标注。个人电子设备不算。",
                actionHint: "在表格上标注",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Gotta declare: stuff over the duty-free limit, food, farm products, over ten grand cash, and anything restricted. Your personal electronics are usually okay though.",
            formalityVariants: {
              casual:
                "You gotta declare: stuff over the duty-free limit, food/farm products, over $10,000 cash, and any restricted items. Your own electronics are usually fine.",
              standard:
                "You need to declare: goods over the duty-free allowance, food and agricultural products, more than $10,000 in cash, and any restricted items. Personal electronics for your own use are usually fine.",
              formal:
                "You are required to declare the following: merchandise exceeding the duty-free exemption, all food and agricultural commodities, currency in excess of ten thousand US dollars, and any prohibited or restricted articles. Personal electronic devices intended for individual use are typically exempt.",
            },
          },
          {
            speaker: "you",
            textEn: "I have about $500 worth of gifts — mostly tea and snacks for friends. Do I need to declare those?",
            textZh: "我有大约500美元的礼物——主要是给朋友的茶叶和零食。需要申报吗？",
            casualVersion: "Got like $500 in gifts — mainly tea and snacks for friends. Gotta declare 'em?",
            commonMistake: {
              wrong: "I have 500 dollars gifts. Mostly tea and snacks. Need I declare them?",
              correct:
                "I have about $500 worth of gifts — mostly tea and snacks for friends. Do I need to declare those?",
              explanation: '中式英语常省略 "worth of" 和 "for friends"，且疑问句式不自然，漏掉助动词。',
            },
            formalityVariants: {
              casual: "I've got maybe $500 in gifts — mostly tea and snacks for buddies. Do I gotta declare 'em?",
              standard:
                "I have about $500 worth of gifts — mostly tea and snacks for friends. Do I need to declare those?",
              formal:
                "I am in possession of gifts valued at approximately five hundred US dollars, primarily consisting of tea and snack items intended for acquaintances. Am I obligated to declare these?",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "The tea is fine, but food items including snacks should be declared — even if they're within the allowance. Just check 'yes' on the food section of the form. It doesn't necessarily mean you'll be taxed; they just need to inspect it.",
            textZh:
              "茶叶没问题，但食品包括零食应该申报——即使在额度内。在表格的食品栏勾「是」就行。不一定会被征税，只是需要检查。",
            commonMistake: {
              wrong: "The tea is fine, but food including snacks should declare.",
              correct: "The tea is fine, but food items including snacks should be declared.",
              explanation: "“should be declared”是被动语态，是正确的表达方式",
            },
            keyPhrases: [
              { en: "check 'yes'", zh: "勾「是」" },
              { en: "food section", zh: "食品栏" },
              { en: "inspect", zh: "检查" },
              { en: "taxed", zh: "征税" },
            ],
            responseTip: "食品类即使在额度内也建议主动申报，态度诚实更好",
            alternativeExpressions: [
              {
                textEn:
                  "Tea's no problem. The snacks — you should declare those. Tick 'yes' for food. They'll just take a quick look, won't necessarily charge you.",
                textZh: "茶叶没问题。零食的话应该申报。食品栏勾「是」。他们只是看一下，不一定征税。",
                actionHint: "食品栏勾是",
                frequency: "common",
              },
              {
                textEn:
                  "Declare any food items, even small snacks. It's better to be upfront — they may just wave you through after a quick inspection.",
                textZh: "任何食品都要申报，哪怕是小零食。主动申报更好——检查一下可能就放行了。",
                actionHint: "诚实申报最安全",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Tea's good, but any food, snacks included, gotta declare 'em — even if it's under the limit. Just tick 'yes' on the food part. Doesn't mean you'll pay tax; they just wanna look at it.",
            culturalNote: "美国海关对食品申报非常严格。哪怕是看起来无害的零食，也建议申报，不然可能被罚款。",
            formalityVariants: {
              casual:
                "Tea's okay, but food stuff, like snacks, you gotta declare — even if it's under the allowance. Just check 'yes' in the food section. Doesn't mean tax; they just need to see it.",
              standard:
                "The tea is fine, but food items including snacks should be declared — even if they're within the allowance. Just check 'yes' on the food section of the form. It doesn't necessarily mean you'll be taxed; they just need to inspect it.",
              formal:
                "The tea is permissible, however, all food items, including snack provisions, are required to be declared, irrespective of their adherence to the duty-free allowance. Kindly indicate 'yes' in the designated food section of the declaration form. This action does not inherently imply taxation; rather, it facilitates necessary inspection.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. I've filled everything out. Which line do I go to?",
            textZh: "明白了。我都填好了。我去哪条通道？",
            casualVersion: "Okay, filled it all out. Which line now?",
            commonMistake: {
              wrong: "I got. I filled everything. Which line I go?",
              correct: "Got it. I've filled everything out. Which line do I go to?",
              explanation: "中式英语常省略动词后的宾语、助动词和介词。",
            },
            formalityVariants: {
              casual: "Alright, I'm all done filling it out. Where do I go?",
              standard: "Got it. I've filled everything out. Which line do I go to?",
              formal:
                "Understood. I have completed the form in its entirety. Could you please direct me to the appropriate queue?",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              'Since you have items to declare, please go to the red channel — "Goods to Declare." The green channel is for passengers with nothing to declare.',
            textZh: "因为您有需要申报的物品，请走红色通道——「有物品申报」。绿色通道是给没有申报物品的旅客的。",
            keyPhrases: [
              { en: "red channel", zh: "红色通道" },
              { en: "green channel", zh: "绿色通道" },
              { en: "goods to declare", zh: "有物品申报" },
              { en: "nothing to declare", zh: "无申报物品" },
            ],
            culturalNote:
              "大部分国际机场海关都分红绿两个通道：红色是有物品需要申报的，绿色是没有的。走错通道如果被查到会有麻烦。",
            alternativeExpressions: [
              {
                textEn:
                  "Take the red lane on the right — that's for declarations. The green lane is only if you have nothing to declare.",
                textZh: "走右边的红色通道——那是申报用的。绿色通道只适合没东西要申报的人。",
                actionHint: "走红色通道",
                frequency: "common",
              },
              {
                textEn: "You'll want the 'Declare' line — the red one. Green is for those with nothing to report.",
                textZh: "您要走「申报」的那条线——红色的。绿色是给没东西要报的人的。",
                actionHint: "找红色标志的通道",
                frequency: "occasional",
              },
            ],
            casualVersion: "Since you got stuff to declare, head to the red channel.",
            commonMistake: {
              wrong: "Because you have items declare, go red channel.",
              correct: "Since you have items to declare, please go to the red channel.",
              explanation: '英语中动词不定式常漏掉 "to"，且名词前定冠词易漏。',
            },
            formalityVariants: {
              casual: "Got stuff to declare? Go to the red channel.",
              standard: "Since you have items to declare, please proceed to the red channel.",
              formal: "As you possess declarable items, kindly proceed to the designated red channel.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for your help.",
            textZh: "谢谢你的帮助。",
            commonMistake: {
              wrong: "Thanks your help.",
              correct: "Thank you for your help.",
              explanation: "“Thanks your help” 是中式英语，缺少介词 for。",
            },
            casualVersion: "Thanks for the help.",
            formalityVariants: {
              casual: "Thanks for your help.",
              standard: "Thank you for your help.",
              formal: "I appreciate your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 超额物品申报 ---
      {
        id: "excess-declaration",
        titleZh: "超额物品申报",
        titleEn: "Declaring Excess Items",
        description: "携带超过免税额度的物品需要缴税",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "海关",
            textEn:
              "Welcome. Please hand me your customs form and passport. I see you've declared goods valued at $2,500. Can you show me what you have?",
            textZh: "欢迎。请把海关申报表和护照给我。我看到您申报了价值2500美元的物品。能给我看看是什么吗？",
            commonMistake: {
              wrong: "Welcome. Give me your customs form and passport. I see you declare $2500 goods.",
              correct: "Welcome. Please hand me your customs form and passport. I see you declared $2500 worth of items.",
              explanation: "“Hand me”比“Give me”更礼貌；“declared”是过去式；“worth of items”更自然",
            },
            keyPhrases: [
              { en: "customs form", zh: "海关申报表" },
              { en: "declared goods", zh: "申报的物品" },
              { en: "valued at", zh: "价值" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Form and passport, please. You've marked 'yes' for goods over the allowance. Let's have a look.",
                textZh: "表格和护照请给我。您在超额物品那里勾了「是」。我们看一下。",
                actionHint: "准备好展示你带的东西",
                frequency: "common",
              },
            ],
            casualVersion: "Welcome. Forms and passport, please. See you declared $2,500 in goods. What've you got?",
            formalityVariants: {
              casual: "Hey, forms and passport, please. See you declared $2,500. What's all that?",
              standard:
                "Welcome. Could you please provide your customs form and passport? I notice you've declared items valued at $2,500. May I see them?",
              formal:
                "Good morning/afternoon. Kindly present your customs declaration form and passport. I observe that you have declared goods with an aggregate value of two thousand five hundred dollars. Would you be so kind as to display these items for inspection?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure. I bought a designer handbag for $1,800 and two bottles of perfume totaling $700.",
            textZh: "好的。我买了一个名牌手提包1800美元，两瓶香水共700美元。",
            casualVersion:
              "Yeah, sure. Got a designer bag for eighteen hundred, and two perfumes, seven hundred total.",
            commonMistake: {
              wrong: "two bottles of perfume total $700",
              correct: "two bottles of perfume totaling $700",
              explanation: "动词 'total' 需要 ing 形式，或者用 'in total' 表示总计。",
            },
            formalityVariants: {
              casual: "Yeah, a designer bag for 1800 and two perfumes for 700.",
              standard:
                "Certainly. I purchased a designer handbag for $1,800 and two bottles of perfume, which came to $700.",
              formal:
                "Yes, certainly. I acquired a designer handbag valued at one thousand eight hundred dollars, and two bottles of perfume, which collectively amounted to seven hundred dollars.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "Do you have the purchase receipts? The duty-free personal allowance is $800. You're over by $1,700, so there will be a duty charge on the excess amount.",
            textZh: "有购物收据吗？个人免税额度是800美元。您超出了1700美元，超出部分需要缴关税。",
            commonMistake: {
              wrong: "Do you have receipts? Personal allowance is $800. You over $1700.",
              correct: "Do you have the purchase receipts? The personal allowance is $800. You've exceeded it by $1700.",
              explanation: "需要加冠词“the”，且“exceeded it by”或“are over by”更地道。",
            },
            culturalNote: "中国免税额度较高，旅客可能对美国免税额度认知不足。",
            keyPhrases: [
              { en: "purchase receipts", zh: "购物收据" },
              { en: "personal allowance", zh: "个人免税额度" },
              { en: "over by", zh: "超出了" },
              { en: "duty charge", zh: "关税" },
              { en: "excess amount", zh: "超出部分" },
            ],
            vocabNotes: {
              duty: {
                meaningInContext: "在海关语境中，duty 指关税/进口税，不是「责任」",
                similarUsage: "类似用法：How much duty do I owe?",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Got receipts? The allowance is $800, and you're $1,700 over. You'll owe duty on the extra.",
                textZh: "有收据吗？免税额度是800美元，您超了1700美元。超出部分要交关税。",
                actionHint: "出示收据",
                frequency: "common",
              },
              {
                textEn:
                  "I'll need to see the receipts. The personal exemption is $800 — anything above that is subject to duty.",
                textZh: "我需要看一下收据。个人免税额是800美元——超出的部分要交关税。",
                actionHint: "准备好所有收据",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got the receipts? Personal allowance is 800 bucks. You're 1700 over, so there's gonna be duty on that extra amount.",
            formalityVariants: {
              casual: "Receipts? Allowance is 800. You're 1700 over, so you'll pay duty on that.",
              standard:
                "Do you possess the purchase receipts? The individual duty-free allowance is $800. As you've exceeded this by $1,700, a duty charge will apply to the surplus.",
              formal:
                "Could you please present the purchase receipts? The stipulated personal duty-free exemption is eight hundred dollars. Given that your declared items exceed this by one thousand seven hundred dollars, a customs duty will be levied on the aforementioned excess amount.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here are the receipts. How much will the duty be?",
            textZh: "有，给您收据。关税要多少？",
            casualVersion: "Yep, here ya go. How much is the duty?",
            commonMistake: {
              wrong: "How much is duty fee?",
              correct: "How much will the duty be?",
              explanation: "'duty' 通常是不可数名词，不需加 'fee'，直接说 'duty' 即可。",
            },
            formalityVariants: {
              casual: "Yeah, here are the receipts. What's the duty?",
              standard: "Yes, I have them right here. What will the customs duty amount to?",
              formal:
                "Yes, I do. Here are the requisite receipts. Could you please inform me of the precise amount of the customs duty?",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "The duty rate for these items is 10%. On $1,700 that's $170. You can pay by credit card or cash at the payment window over there.",
            textZh: "这些物品的税率是10%。1700美元的关税是170美元。您可以在那边的缴费窗口用信用卡或现金支付。",
            commonMistake: {
              wrong: "The duty rate is 10%. $1700 is $170. You can pay over there.",
              correct: "The duty rate for these items is 10%. On $1,700 that will be $170.",
              explanation: "陈述金额关系时，“that will be”或“that comes to”更自然，而非简单并列。",
            },
            keyPhrases: [
              { en: "duty rate", zh: "税率" },
              { en: "payment window", zh: "缴费窗口" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's a 10% duty — comes out to $170. You can pay at the counter over there, cash or card.",
                textZh: "税率10%——算下来170美元。在那边的柜台付，现金或刷卡都行。",
                actionHint: "去缴费窗口付款",
                frequency: "common",
              },
              {
                textEn: "The rate is 10%, so $170 total. Head to the cashier window on your left to settle up.",
                textZh: "税率10%，一共170美元。去左边的收银窗口结算。",
                actionHint: "找收银窗口",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Duty's 10% for these. So for 1700, that's 170 bucks. You can pay with card or cash at the window.",
            formalityVariants: {
              casual: "It's 10% duty, so 170 bucks. Pay with card or cash at the window.",
              standard:
                "The applicable duty rate for these particular items is 10%. Therefore, on the $1,700 excess, the charge will be $170. Payment can be made by credit card or cash at the designated payment window located yonder.",
              formal:
                "The prescribed customs duty rate for these specific articles is ten percent. Consequently, for the one thousand seven hundred dollar excess, the total payable amount will be one hundred seventy dollars. You may remit payment via credit card or cash at the dedicated payment facility situated at that location.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I pay by credit card?",
            textZh: "可以刷信用卡吗？",
            casualVersion: "Can I pay with card?",
            commonMistake: {
              wrong: "Can I swipe card?",
              correct: "Can I pay by credit card?",
              explanation: "'swipe card' 比较过时，用 'pay by credit card' 或 'use a credit card' 更自然。",
            },
            formalityVariants: {
              casual: "Card okay?",
              standard: "Is it possible for me to make payment using a credit card?",
              formal: "Would it be permissible for me to settle this amount using a credit card?",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "Yes. After payment, you'll receive a duty receipt. Keep it as proof of payment. If you have any issues later, this receipt is your documentation.",
            textZh: "可以。缴费后会给您一张关税收据。保留好作为缴费证明。如果以后有任何问题，这张收据就是凭证。",
            commonMistake: {
              wrong: "Yes. After payment, you will have a duty receipt. Keep it as proof.",
              correct: "Yes. After payment, you will be given a duty receipt. Keep it as proof of payment.",
              explanation: "“be given”是被动语态，语气更自然；“proof of payment”更具体。",
            },
            keyPhrases: [
              { en: "duty receipt", zh: "关税收据" },
              { en: "proof of payment", zh: "缴费证明" },
              { en: "documentation", zh: "凭证" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, card's fine. They'll give you a receipt — hang on to it as proof you've paid the duty.",
                textZh: "当然，刷卡没问题。他们会给您收据——留好，作为已交关税的证明。",
                actionHint: "保管好收据",
                frequency: "common",
              },
              {
                textEn:
                  "After you pay, keep the duty receipt safe. It's your proof in case of any questions down the line.",
                textZh: "付完款后把关税收据收好。以后有任何疑问这就是凭证。",
                actionHint: "妥善保存收据",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah. You'll get a duty receipt after paying. Keep it for proof. If there are any issues later, this is your doc.",
            formalityVariants: {
              casual: "Yep. You'll get a receipt. Keep it as proof. If there's trouble later, that's your doc.",
              standard:
                "Yes, absolutely. Upon completion of payment, you will be issued a duty receipt. Please retain this as proof of payment. Should any complications arise in the future, this receipt will serve as your official documentation.",
              formal:
                "Yes, that will be perfectly acceptable. Subsequent to the successful remittance of payment, you shall be provided with an official customs duty receipt. It is imperative that you retain this document as conclusive proof of payment. In the event of any future discrepancies or inquiries, this receipt will constitute your essential documentation.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. Thank you for explaining the process.",
            textZh: "明白了。谢谢你解释流程。",
            casualVersion: "Got it. Thanks for explaining.",
            commonMistake: {
              wrong: "I understand. Thank you for your explanation.",
              correct: "Understood. Thank you for explaining the process.",
              explanation: "'Understood' 更简洁口语化，'explain the process' 比 'your explanation' 更自然。",
            },
            formalityVariants: {
              casual: "Got it. Thanks for the info.",
              standard: "I understand. I appreciate you explaining the process to me.",
              formal:
                "I fully comprehend. My sincere gratitude for providing such a clear elucidation of the procedure.",
            },
          },
          {
            speaker: "them",
            role: "海关",
            textEn:
              "You're welcome. After payment, you can proceed through the exit. Welcome to the country, and enjoy your stay.",
            textZh: "不客气。缴费后就可以从出口出去了。欢迎来到我们国家，祝您旅途愉快。",
            commonMistake: {
              wrong: "You are welcome.",
              correct: "You're welcome.",
              explanation: "“You are welcome” 过于正式，口语中常用缩写 “You're welcome”。",
            },
            keyPhrases: [{ en: "proceed through the exit", zh: "从出口出去" }],
            alternativeExpressions: [
              {
                textEn: "Once you've paid, head straight to the exit. Welcome, and have a great visit!",
                textZh: "付完款直接去出口就行。欢迎，祝您玩得愉快！",
                actionHint: "付款后从出口离开",
                frequency: "common",
              },
              {
                textEn: "All done after payment. The exit is just ahead. Enjoy your time here!",
                textZh: "付完款就好了。出口就在前面。祝您在这里过得开心！",
                actionHint: "走出口离开",
                frequency: "occasional",
              },
            ],
            casualVersion: "No problem. After paying, you can head to the exit. Welcome to the US, enjoy your trip.",
            formalityVariants: {
              casual: "No prob. Pay, then head to the exit. Welcome, enjoy your stay.",
              standard:
                "You're very welcome. Following payment, you are free to proceed to the exit. Welcome to the country, and we hope you thoroughly enjoy your visit.",
              formal:
                "It is my pleasure. Subsequent to the completion of your payment, you may kindly proceed towards the designated exit. We extend a warm welcome to our nation, and sincerely hope you have a most pleasant and fulfilling sojourn.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 机场WiFi和充电 ====================
  {
    id: "airport-wifi",
    category: "airport",
    titleZh: "机场WiFi和充电",
    titleEn: "Airport WiFi & Charging",
    description: "在机场寻找WiFi连接、充电站和电源适配器",
    otherRole: "机场工作人员/旅客",
    otherRoleIcon: "wifi",
    flows: [
      {
        id: "find-wifi",
        titleZh: "连接WiFi",
        titleEn: "Finding WiFi",
        description: "询问机场WiFi、获取密码、解决连接问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is there free WiFi in the airport?",
            textZh: "请问，机场有免费WiFi吗？",
            culturalNote: "美国人提问时倾向更直接，不需要像中文那样总是用“请问”开头。",
            casualVersion: "Hey, is there WiFi here?",
            commonMistake: {
              wrong: "Do you have free WiFi in the airport?",
              correct: "Is there free WiFi in the airport?",
              explanation: "“Is there...” 是询问某地是否有某物的自然表达，比“Do you have...”更常见。",
            },
            formalityVariants: {
              casual: "Hey, got any free WiFi here?",
              standard: "Excuse me, is there free WiFi in the airport?",
              formal:
                "Pardon me, could you inform me if complimentary wireless internet access is available within the airport premises?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, we have complimentary WiFi. The network name is 'Airport_Free'. You'll need to accept the terms on the login page.",
            textZh: "有的，我们有免费WiFi。网络名称是'Airport_Free'。您需要在登录页面上接受条款。",
            keyPhrases: [
              { en: "complimentary WiFi", zh: "免费WiFi" },
              { en: "network name", zh: "网络名称" },
              { en: "login page", zh: "登录页面" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这句话里表示：免费提供的（机场/酒店常用的正式说法）",
                similarUsage: "类似用法：Complimentary breakfast is included.（含免费早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Sure, just connect to 'Airport_Guest' — no password needed, but there's a splash page.",
                textZh: "可以，连接'Airport_Guest'就行——不需要密码，但有个启动页面。",
                actionHint: "直接连接即可",
                frequency: "common",
              },
              {
                textEn: "Yes, free WiFi for 2 hours. After that, you can purchase premium access.",
                textZh: "有的，免费WiFi两小时。之后可以购买高级上网。",
                actionHint: "注意时间限制",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we got free WiFi. Network's 'Airport_Free'. Just gotta accept the terms on the login page.",
            commonMistake: {
              wrong: "You need agree the terms on the login page.",
              correct: "You'll need to accept the terms on the login page.",
              explanation: "“accept the terms” 是固定搭配，表示同意条款。动词后面通常需要加“to”或者直接是名词。",
            },
            formalityVariants: {
              casual: "Yup, free WiFi. 'Airport_Free' is the network. Just click to accept the terms when you log in.",
              standard:
                "Yes, we have complimentary WiFi. The network name is 'Airport_Free'. You'll need to accept the terms on the login page.",
              formal:
                "Indeed, we do provide complimentary wireless internet access. The designated network is 'Airport_Free'. Kindly note that you will be required to accept the terms and conditions on the login portal.",
            },
          },
          {
            speaker: "you",
            textEn: "I connected but it's really slow. Is there a faster option?",
            textZh: "我连上了但是非常慢。有更快的选择吗？",
            casualVersion: "I connected, but it's super slow. Anything faster?",
            commonMistake: {
              wrong: "I connected, but very slow. Have faster choice?",
              correct: "I connected but it's really slow. Is there a faster option?",
              explanation: "句子需主谓宾完整。“very slow” 前应有“it's”。“faster option” 是更地道的说法。",
            },
            formalityVariants: {
              casual: "It's connected, but super slow. Got anything quicker?",
              standard: "I connected but it's really slow. Is there a faster option?",
              formal:
                "I have successfully established a connection; however, the speed is rather unsatisfactory. Are there any more expeditious options available?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "You can upgrade to our premium WiFi for $8. It's much faster and more reliable. You can pay through the portal page.",
            textZh: "您可以升级到高级WiFi，8美元。速度快很多也更稳定。可以通过门户页面付款。",
            keyPhrases: [
              { en: "upgrade", zh: "升级" },
              { en: "premium WiFi", zh: "高级WiFi" },
              { en: "portal page", zh: "门户页面" },
              { en: "reliable", zh: "稳定的" },
            ],
            vocabNotes: {
              portal: {
                meaningInContext: "在这句话里表示：WiFi登录的网页入口",
                similarUsage: "类似用法：Go to the WiFi portal to sign in.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "For $8 you can get the fast WiFi. Way better than the free one. Just pay on the login page.",
                textZh: "8美元可以用快速WiFi。比免费的好很多。在登录页面上付就行。",
                actionHint: "在登录页面升级",
                frequency: "common",
              },
              {
                textEn: "There's a paid option — $8 for high-speed access. You can upgrade right from your browser.",
                textZh: "有付费选项——8美元高速上网。直接在浏览器里升级就行。",
                actionHint: "浏览器中付费升级",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You can get our premium WiFi for eight bucks. Way faster, more reliable. Just pay on the portal page.",
            commonMistake: {
              wrong: "You can pay on the portal page.",
              correct: "You can pay through the portal page.",
              explanation: "“pay through” 指通过某个平台或系统进行支付，比“on”更常用。",
            },
            formalityVariants: {
              casual: "Upgrade to premium WiFi for eight bucks. It's way faster and solid. Pay on the portal page.",
              standard:
                "You can upgrade to our premium WiFi for $8. It's much faster and more reliable. You can pay through the portal page.",
              formal:
                "You have the option to upgrade to our premium wireless internet service for a fee of eight dollars. This service offers significantly enhanced speed and reliability. Payment can be processed conveniently via the portal page.",
            },
          },
          {
            speaker: "you",
            textEn: "Where can I find a charging station? My phone is almost dead.",
            textZh: "请问哪里有充电站？我手机快没电了。",
            casualVersion: "Know where I can charge my phone? It's dying.",
            commonMistake: {
              wrong: "My phone has no power soon.",
              correct: "My phone is almost dead.",
              explanation: "“almost dead” 是表示手机快没电的自然口语表达，更地道。",
            },
            formalityVariants: {
              casual: "Hey, where's a charging station? My phone's dying.",
              standard: "Where can I find a charging station? My phone is almost dead.",
              formal:
                "Could you direct me to the nearest charging station, please? My mobile device's battery is critically low.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "There are charging stations near Gate 15 and also in the food court area. They have USB ports and regular outlets.",
            textZh: "15号登机口附近和美食广场区域都有充电站。有USB接口和普通插座。",
            keyPhrases: [
              { en: "charging stations", zh: "充电站" },
              { en: "USB ports", zh: "USB接口" },
              { en: "regular outlets", zh: "普通插座" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's a charging bar right by the bookstore. It has wireless charging pads too.",
                textZh: "书店旁边有个充电吧。也有无线充电板。",
                actionHint: "找书店附近",
                frequency: "common",
              },
            ],
            casualVersion:
              "Charging stations are near Gate 15 and in the food court. They've got USBs and regular plugs.",
            commonMistake: {
              wrong: "They have USB ports and common outlets.",
              correct: "They have USB ports and regular outlets.",
              explanation: "“regular outlets” 是指标准电源插座的常用说法，更自然。",
            },
            formalityVariants: {
              casual:
                "You'll find charging stations near Gate 15 and in the food court. Both USB and regular plugs are available.",
              standard:
                "There are charging stations near Gate 15 and also in the food court area. They have USB ports and regular outlets.",
              formal:
                "Charging stations are conveniently located adjacent to Gate 15 and within the food court vicinity. These stations are equipped with both USB ports and standard electrical outlets.",
            },
          },
          {
            speaker: "you",
            textEn: "Do you sell power adapters? I forgot mine and I need a US plug.",
            textZh: "你们卖电源适配器吗？我忘带了，需要美国插头。",
            casualVersion: "Y'all sell power adapters? Forgot mine, need a US plug.",
            commonMistake: {
              wrong: "I forgot to bring mine.",
              correct: "I forgot mine.",
              explanation: "“I forgot mine” 已经足够表达“我忘了带我的”意思，更自然简洁。",
            },
            formalityVariants: {
              casual: "Got any power adapters? Left mine at home, need a US plug.",
              standard: "Do you sell power adapters? I forgot mine and I need a US plug.",
              formal:
                "Are power adapters available for purchase here? I inadvertently neglected to pack my own and require a US-standard plug.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, the electronics store in Terminal 2 sells universal adapters. They're about $15. It's right past the security checkpoint on the left.",
            textZh: "有，2号航站楼的电子产品店有卖万能适配器。大概15美元。过了安检左边就是。",
            keyPhrases: [
              { en: "universal adapter", zh: "万能适配器" },
              { en: "security checkpoint", zh: "安检" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a tech shop in Terminal 2 that has adapters. Around $15. It's on your left after security.",
                textZh: "2号航站楼有个电子产品店有卖适配器。大约15美元。过安检后左手边。",
                actionHint: "去2号航站楼找电子店",
                frequency: "common",
              },
              {
                textEn:
                  "The convenience store near Gate 6 sells travel adapters. They're a bit pricey but handy in a pinch.",
                textZh: "6号登机口附近的便利店卖旅行适配器。有点贵但急用时很方便。",
                actionHint: "就近在便利店买",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, the electronics store in Terminal 2's got universal adapters. Like fifteen bucks. It's just past security, on your left.",
            commonMistake: {
              wrong: "It's past the security checkpoint at the left side.",
              correct: "It's right past the security checkpoint on the left.",
              explanation: "“right past” 强调紧接着，“on the left” 是地道说法，而非“at the left side”。",
            },
            formalityVariants: {
              casual:
                "Yup, electronics store in T2 sells universal adapters, 'bout 15 bucks. It's right after security, left side.",
              standard:
                "Yes, the electronics store in Terminal 2 sells universal adapters. They're about $15. It's right past the security checkpoint on the left.",
              formal:
                "Indeed, the electronics retailer located in Terminal 2 offers universal power adapters, typically priced at approximately fifteen dollars. You will find it immediately following the security checkpoint, positioned to your left.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great, thanks. One more thing — are there any quiet areas with outlets where I can work on my laptop?",
            textZh: "太好了，谢谢。再问一下——有没有安静的、有插座的地方可以用笔记本电脑办公？",
            casualVersion: "Awesome, thanks. Oh, one more thing – any quiet spots with outlets for my laptop?",
            commonMistake: {
              wrong: "One more question — are there any quiet areas with outlets where I can use my laptop to work?",
              correct: "One more thing — are there any quiet areas with outlets where I can work on my laptop?",
              explanation: "“work on my laptop” 是更地道的表达，表示使用笔记本电脑进行工作，更简洁。",
            },
            formalityVariants: {
              casual: "Cool, thanks. Hey, one more thing — any quiet places with plugs to work on my laptop?",
              standard:
                "Great, thanks. One more thing — are there any quiet areas with outlets where I can work on my laptop?",
              formal:
                "Excellent, thank you. I have one further inquiry: are there any designated quiet zones equipped with power outlets where I might utilize my laptop for work?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "There's a business lounge area near Gate 22 with desks, outlets, and free WiFi. It's open to all passengers. The airline lounges also have workstations, but those require membership or a day pass.",
            textZh:
              "22号登机口附近有一个商务休息区，有桌子、插座和免费WiFi。所有旅客都可以使用。航空公司贵宾室也有工作台，但需要会员资格或日通行证。",
            keyPhrases: [
              { en: "business lounge area", zh: "商务休息区" },
              { en: "workstations", zh: "工作台" },
              { en: "day pass", zh: "日通行证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Gate 22 area has a free work zone with desks and power. If you want something quieter, the paid lounges have workspaces too.",
                textZh: "22号登机口区域有免费工作区，有桌子和电源。想安静一点的话，付费贵宾室也有工作区。",
                actionHint: "去22号登机口附近",
                frequency: "common",
              },
              {
                textEn:
                  "There are some quiet spots with desks and outlets by Gate 22 — free for everyone. Or try the airline lounge for $55.",
                textZh: "22号登机口附近有些安静的地方有桌子和插座——所有人免费用。或者花55美元去航空公司贵宾室。",
                actionHint: "自由选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "There's a business lounge near Gate 22 with desks, outlets, and free WiFi. Anyone can use it. Airline lounges also have workstations, but you need a membership or a day pass for those.",
            commonMistake: {
              wrong: "It's all passengers can use.",
              correct: "It's open to all passengers.",
              explanation: "“open to all passengers” 是常用且自然的表达，指对所有旅客开放。",
            },
            formalityVariants: {
              casual:
                "Near Gate 22, there's a business lounge with desks, outlets, and free WiFi, open to everyone. Airline lounges have workstations too, but you gotta be a member or get a day pass.",
              standard:
                "There's a business lounge area near Gate 22 with desks, outlets, and free WiFi. It's open to all passengers. The airline lounges also have workstations, but those require membership or a day pass.",
              formal:
                "You will find a business lounge area conveniently situated near Gate 22, which is equipped with desks, power outlets, and complimentary wireless internet access, accessible to all passengers. Additionally, airline lounges also provide workstations; however, access to these facilities typically necessitates either a membership or the purchase of a day pass.",
            },
          },
        ],
      },
      {
        id: "connection-issues",
        titleZh: "WiFi连接问题",
        titleEn: "WiFi Connection Issues",
        description: "WiFi连不上、需要技术帮助、找不到充电设备",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I can't seem to connect to the airport WiFi. The login page won't load.",
            textZh: "你好，我好像连不上机场WiFi。登录页面打不开。",
            casualVersion: "Hey, can't get on the airport WiFi. Login page just won't load.",
            commonMistake: {
              wrong: "I cannot connect to WiFi.",
              correct: "I can't seem to connect to the airport WiFi.",
              explanation: '"can\'t seem to" 表述更委婉，更地道。直接说 "can\'t" 略生硬。',
            },
            formalityVariants: {
              casual: "Hey, can't get on the airport WiFi. Login page won't load.",
              standard: "Hi, I can't seem to connect to the airport WiFi. The login page won't load.",
              formal:
                "Good morning/afternoon, I am experiencing difficulty connecting to the airport's wireless network. The authentication portal appears unresponsive.",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "That happens sometimes. Try forgetting the network and reconnecting. Also, make sure your browser isn't blocking pop-ups — the login page sometimes opens as a pop-up.",
            textZh:
              "这种情况偶尔会发生。试试忘记网络重新连接。另外确保浏览器没有屏蔽弹窗——登录页面有时候以弹窗形式打开。",
            casualVersion: "Yeah, sometimes that happens. Try forgetting the network and reconnecting. Also, make sure your browser's not blocking pop-ups—the login page can pop up like that.",
            formalityVariants: {
              casual: "Sometimes that happens. Forget/reconnect the network. Browser not blocking pop-ups—login page can pop up.",
              standard: "That happens sometimes. Try forgetting the network and reconnecting. Also, make sure your browser isn't blocking pop-ups—the login page sometimes opens as a pop-up.",
              formal: "This does occur on occasion. Kindly attempt to forget the network and then reconnect. Furthermore, please ensure that your browser's pop-up blocker is not enabled, as the login page may sometimes appear as a pop-up window.",
            },
            keyPhrases: [
              { en: "forgetting the network", zh: "忘记网络" },
              { en: "reconnecting", zh: "重新连接" },
              { en: "blocking pop-ups", zh: "屏蔽弹窗" },
            ],
            vocabNotes: {
              "forgetting the network": {
                meaningInContext: "在这句话里表示：在手机设置里删除已保存的WiFi网络，然后重新搜索连接",
                similarUsage: "类似用法：Go to Settings and forget this network.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Try opening a new browser tab and going to any website — it should redirect you to the login page.",
                textZh: "试试打开新的浏览器标签页，访问任何网站——应该会自动跳转到登录页面。",
                actionHint: "打开新标签页",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I tried that, but it still won't work. Is there an IT help desk somewhere?",
            textZh: "我试了，但还是不行。机场有IT服务台吗？",
            casualVersion: "Tried that, still not working. Is there like, an IT desk at the airport?",
            commonMistake: {
              wrong: "I tried that, but it is still not working.",
              correct: "I tried that, but it still won't work.",
              explanation: "表达“仍然不奏效/解决不了问题”时，won't work 比 not working 更地道。",
            },
            formalityVariants: {
              casual: "Tried it, still no go. Any IT desk here?",
              standard: "I tried that, but it still won't work. Is there an IT service desk at the airport?",
              formal: "I attempted that, but unfortunately, it did not resolve the issue. Is there a technical support desk available at the airport?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "There's a tech support kiosk near the information desk on the departures level. They can help you troubleshoot. Alternatively, you could try using your phone as a hotspot if you have a local SIM card.",
            textZh:
              "出发层信息台旁边有一个技术支持亭。他们可以帮您排查问题。或者如果您有本地SIM卡，可以试试用手机开热点。",
            casualVersion: "There's a tech support kiosk right by the info desk on the departures level. They can help you out. Or, if you got a local SIM, you could just hotspot off your phone.",
            commonMistake: {
              wrong: "They can help you solve the problem.",
              correct: "They can help you troubleshoot.",
              explanation: "解决技术问题或故障用 troubleshoot 更专业和地道，而不是 solve the problem。",
            },
            formalityVariants: {
              casual: "Tech support kiosk by info desk, departures level. They'll help. Or, if you have a local SIM, just hotspot off your phone.",
              standard: "There's a tech support kiosk next to the information desk on the departures level. They can help you troubleshoot. Or if you have a local SIM card, you could try using your phone as a hotspot.",
              formal: "There is a technical support kiosk located adjacent to the information desk on the departures level, where they can assist you with troubleshooting. Alternatively, if you possess a local SIM card, you could consider utilizing your mobile device as a personal hotspot.",
            },
            keyPhrases: [
              { en: "tech support kiosk", zh: "技术支持亭" },
              { en: "troubleshoot", zh: "排查问题" },
              { en: "hotspot", zh: "热点" },
              { en: "local SIM card", zh: "本地SIM卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's an IT help desk by the info counter upstairs. Or you could tether from your phone if you've got data.",
                textZh: "楼上信息台旁边有IT服务台。或者如果您手机有流量，可以开热点。",
                actionHint: "去IT服务台或开热点",
                frequency: "common",
              },
              {
                textEn:
                  "Try the tech help booth on the departures floor. If that doesn't work, a local SIM with data might be your best bet.",
                textZh: "去出发层的技术帮助亭试试。不行的话，买张本地SIM卡可能最靠谱。",
                actionHint: "找技术帮助亭",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, where can I buy a local SIM card? That might be easier.",
            textZh: "对了，哪里可以买本地SIM卡？那可能更方便。",
            commonMistake: {
              wrong: "Where can I buy local SIM card?",
              correct: "Where can I buy a local SIM card?",
              explanation: "\"SIM card\" 是可数名词，需要冠词 \"a\"。",
            },
            casualVersion: "Actually, where can I get a local SIM? Might be easier.",
            formalityVariants: {
              casual: "Actually, where can I get a local SIM? Easier, maybe.",
              standard: "Actually, where can I buy a local SIM card? That might be easier.",
              formal: "Actually, could you inform me where I might purchase a local SIM card? That could potentially be a simpler solution.",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "There are SIM card vending machines in the arrivals hall. You can also buy one at the convenience store near Gate 8. They offer prepaid plans starting from $10 for 3 days of data.",
            textZh: "到达大厅有SIM卡自动售卖机。8号登机口附近的便利店也可以买到。有预付费套餐，10美元起，包含3天流量。",
            casualVersion: "SIM card vending machines are in arrivals. You can also grab one at the convenience store by Gate 8. They got prepaid plans, starting at ten bucks for three days of data.",
            commonMistake: {
              wrong: "They have prepaid plans starting from $10 for 3 days of data.",
              correct: "They offer prepaid plans starting from $10 for 3 days of data.",
              explanation: "提供套餐用 offer 更准确，have 更侧重“拥有”。",
            },
            formalityVariants: {
              casual: "Arrivals has SIM card machines. Convenience store by Gate 8 also sells 'em. Prepaid plans start at ten bucks for three days of data.",
              standard: "There are SIM card vending machines in the arrivals hall. You can also buy one at the convenience store near Gate 8. They offer prepaid plans starting from $10 for 3 days of data.",
              formal: "SIM card vending machines are available in the arrivals hall. Alternatively, you may purchase one at the convenience store located near Gate 8. They provide prepaid plans commencing from $10 for three days of data usage.",
            },
            keyPhrases: [
              { en: "vending machines", zh: "自动售卖机" },
              { en: "prepaid plans", zh: "预付费套餐" },
              { en: "3 days of data", zh: "3天流量" },
            ],
            alternativeExpressions: [
              {
                textEn: "The phone carrier counters are right after customs. They can set up a SIM for you.",
                textZh: "运营商柜台就在过海关之后。他们可以帮你装SIM卡。",
                actionHint: "过海关后找运营商柜台",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "All the charging stations seem to be full. Is there anywhere else I can charge my phone?",
            textZh: "充电站好像都满了。还有别的地方可以充电吗？",
            commonMistake: {
              wrong: "All charging stations full.",
              correct: "All the charging stations seem to be full.",
              explanation: "句子不完整，缺少谓语动词或主语。\"seem to be\" 更自然。",
            },
            casualVersion: "All the charging stations look full. Anywhere else I can charge my phone?",
            formalityVariants: {
              casual: "Charging stations all look full. Other spots to charge?",
              standard: "All the charging stations seem to be full. Is there anywhere else I can charge my phone?",
              formal: "It appears that all the charging stations are currently occupied. Are there any alternative locations where I might charge my mobile device?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Some of the seating areas near the gates have power outlets built into the armrests. Also, the airline lounge on the third floor has plenty of outlets. If you're desperate, some restaurants will let you charge while you eat.",
            textZh:
              "有些登机口附近的座位区扶手上有内置电源插座。三楼的航空公司贵宾室也有很多插座。如果实在急的话，有些餐厅可以让你边吃边充电。",
            casualVersion: "Some seating by the gates got outlets in the armrests. Also, the airline lounge on the third floor's got tons of outlets. If you're super desperate, some restaurants might let you charge while you eat.",
            formalityVariants: {
              casual: "Some gate seats have armrest outlets. Third floor lounge has tons. Super desperate, some restaurants might let you charge while you eat.",
              standard: "Some of the seating areas near the gates have power outlets built into the armrests. Also, the airline lounge on the third floor has plenty of outlets. If you're really desperate, some restaurants might let you charge while you eat.",
              formal: "Certain seating areas near the gates feature power outlets integrated into the armrests. Additionally, the airline lounge on the third floor provides a considerable number of outlets. Should you be in urgent need, some restaurants may permit you to charge your device while dining.",
            },
            keyPhrases: [
              { en: "power outlets", zh: "电源插座" },
              { en: "built into the armrests", zh: "内置在扶手上" },
              { en: "desperate", zh: "急迫的" },
            ],
            vocabNotes: {
              desperate: {
                meaningInContext: "在这句话里表示：非常急迫、急需充电的状态（口语中常用，不是真的绝望）",
                similarUsage: "类似用法：I'm desperate for a cup of coffee.（我太想喝杯咖啡了）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Check the seats near the gates — some have outlets in the armrests. Otherwise, any café will usually let you plug in.",
                textZh: "看看登机口附近的座位——有些扶手上有插座。不然去咖啡厅一般也能充。",
                actionHint: "找有插座的座位",
                frequency: "common",
              },
              {
                textEn:
                  "There are hidden outlets in some of the gate seating areas. You might also try the food court — lots of outlets there.",
                textZh: "有些登机口座位区有隐藏的插座。也可以去美食广场——那里插座很多。",
                actionHint: "去美食广场找插座",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have a portable charger I could borrow?",
            textZh: "有可以借的移动电源吗？",
            casualVersion: "Got a portable charger I could borrow?",
            commonMistake: {
              wrong: "Do you have a power bank?",
              correct: "Do you have a portable charger?",
              explanation: "Power bank 是中式英语，美国人一般说 portable charger 或 portable battery。",
            },
            formalityVariants: {
              casual: "Got a portable charger to borrow?",
              standard: "Do you have a portable charger I could borrow?",
              formal: "I was wondering if it would be possible to borrow a portable charger?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "We actually have a power bank rental service! You can pick one up at the kiosk by Gate 12 using your credit card. It's $2 per hour, and you can return it at any kiosk in the airport.",
            textZh:
              "我们有移动电源租借服务！在12号登机口的终端机用信用卡就可以租借。每小时2美元，在机场任何一个终端机都可以归还。",
            casualVersion: "We actually got a power bank rental service! You can grab one at the kiosk by Gate 12 with your credit card. It's two bucks an hour, and you can drop it off at any kiosk here.",
            formalityVariants: {
              casual: "We actually have a power bank rental! Grab one at the kiosk by Gate 12 with your card. Two bucks an hour, drop it at any kiosk.",
              standard: "We actually have a power bank rental service! You can pick one up at the kiosk by Gate 12 using your credit card. It's $2 per hour, and you can return it at any kiosk in the airport.",
              formal: "We do in fact offer a portable power bank rental service. You may retrieve one from the kiosk located near Gate 12, utilizing your credit card for payment. The cost is $2 per hour, and it can be returned to any designated kiosk within the airport.",
            },
            keyPhrases: [
              { en: "power bank rental", zh: "移动电源租借" },
              { en: "kiosk", zh: "终端机/自助服务亭" },
              { en: "per hour", zh: "每小时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You can rent a portable charger from the station near Gate 12. Swipe your card, grab one, and drop it off at any station when you're done.",
                textZh: "可以在12号登机口附近的站点租移动电源。刷卡取走，用完在任何站点归还就行。",
                actionHint: "去12号登机口租",
                frequency: "common",
              },
              {
                textEn:
                  "There are power bank kiosks around the terminal — $2 an hour. Just scan your card and take one.",
                textZh: "航站楼各处都有移动电源租借机——每小时2美元。刷卡就能取。",
                actionHint: "找最近的租借机",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 接机 ====================
  {
    id: "airport-meetgreet",
    category: "airport",
    titleZh: "接机",
    titleEn: "Meeting & Greeting at Arrivals",
    description: "在到达大厅接人，包括举牌、找到对方、安排地面交通",
    otherRole: "到达旅客/司机",
    otherRoleIcon: "car",
    flows: [
      {
        id: "picking-up",
        titleZh: "接人标准流程",
        titleEn: "Picking Someone Up",
        description: "在到达大厅等待、找到对方、安排交通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the arrivals hall? I'm picking someone up.",
            textZh: "请问到达大厅在哪里？我来接人的。",
            casualVersion: "Hey, where's arrivals? I'm meeting someone.",
            culturalNote: "问路时直接说重点即可，不必过于客套",
            commonMistake: {
              wrong: "Excuse me, where is arrival hall?",
              correct: "Excuse me, where is the arrivals hall?",
              explanation: "“arrivals hall”是特指的地点，前面需要加the。",
            },
            formalityVariants: {
              casual: "Hey, where's arrivals? Picking someone up.",
              standard: "Excuse me, where is the arrivals hall? I'm picking someone up.",
              formal: "Pardon me, could you please direct me to the arrivals hall? I am here to meet a passenger.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "The arrivals hall is on the ground floor. Take the escalator down one level. Passengers come out through the doors on the left.",
            textZh: "到达大厅在一楼。坐自动扶梯下一层。旅客从左边的门出来。",
            keyPhrases: [
              { en: "arrivals hall", zh: "到达大厅" },
              { en: "ground floor", zh: "一楼" },
              { en: "escalator", zh: "自动扶梯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just follow the signs for 'Arrivals' — it's straight ahead and then downstairs.",
                textZh: "跟着'到达'的标志走——一直走然后下楼。",
                actionHint: "跟着标志走",
                frequency: "common",
              },
            ],
            casualVersion:
              "Arrivals is downstairs, ground floor. Just take the escalator down. They'll come out the doors on the left.",
            commonMistake: {
              wrong: "Take escalator down one level.",
              correct: "Take the escalator down one level.",
              explanation: "特指的自动扶梯，前面需要加the。",
            },
            formalityVariants: {
              casual: "It's downstairs, ground floor. Escalator down one level. People come out the doors on the left.",
              standard:
                "The arrivals hall is on the ground floor. Take the escalator down one level. Passengers come out through the doors on the left.",
              formal:
                "The arrivals hall is located on the ground floor. Kindly proceed by taking the escalator down one level. Disembarking passengers will exit through the doors situated on the left.",
            },
          },
          {
            speaker: "you",
            textEn: "Hi! Are you Mr. Chen? I'm from Sunshine Tours. I'm here to pick you up.",
            textZh: "你好！您是陈先生吗？我是阳光旅行社的。我来接您。",
            culturalNote: "美国习惯直呼其名，初次见面可用Mr./Ms.姓",
            casualVersion: "Hey, Mr. Chen? I'm from Sunshine Tours, here to pick you up.",
            commonMistake: {
              wrong: "Are you Mr. Chen? I am Sunshine Tours.",
              correct: "Are you Mr. Chen? I'm from Sunshine Tours.",
              explanation: "表示“来自”某个机构，需要用“from”。",
            },
            formalityVariants: {
              casual: "Hey, Mr. Chen? From Sunshine Tours, here to pick you up.",
              standard: "Hi! Are you Mr. Chen? I'm from Sunshine Tours. I'm here to pick you up.",
              formal:
                "Good day, sir. May I confirm if you are Mr. Chen? My name is [Your Name], and I represent Sunshine Tours. I am here to provide your pickup service.",
            },
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "Yes, that's me! Nice to meet you. Thank you for coming.",
            textZh: "是的，是我！很高兴见到你。谢谢你来接我。",
            alternativeExpressions: [
              {
                textEn: "That's me! Great to finally meet you in person. Thanks for picking me up.",
                textZh: "是我！终于见到本人了。谢谢来接我。",
                actionHint: "友好打招呼",
                frequency: "common",
              },
              {
                textEn: "Hi, yes! I'm Mr. Chen. So glad you're here. I was just looking around for you.",
                textZh: "你好，是的！我是陈先生。太好了你来了。我刚在找你呢。",
                actionHint: "热情回应",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yep, that's me! Good to meet ya. Thanks for coming.",
            commonMistake: {
              wrong: "Yes, I am! Nice to meet you. Thank you for coming me.",
              correct: "Yes, that's me! Nice to meet you. Thank you for coming.",
              explanation: "“Thank you for coming”是完整表达，无需加宾语。",
            },
            formalityVariants: {
              casual: "Yep, that's me! Good to meet ya. Thanks for coming.",
              standard: "Yes, that's me! Nice to meet you. Thank you for coming.",
              formal:
                "Indeed, that would be myself. It is a pleasure to make your acquaintance. Thank you for your punctuality.",
            },
          },
          {
            speaker: "you",
            textEn: "Welcome! How was your flight? Let me help you with your luggage.",
            textZh: "欢迎！飞行怎么样？让我帮您拿行李。",
            culturalNote: '"How was your flight?" 是接机时的标准问候语，表示关心。',
            casualVersion: "Welcome! How was the flight? Can I grab your bag?",
            commonMistake: {
              wrong: "How your flight?",
              correct: "How was your flight?",
              explanation: "询问过去的事情，需要系动词was。",
            },
            formalityVariants: {
              casual: "Welcome! How was the flight? Can I grab your bag?",
              standard: "Welcome! How was your flight? Let me help you with your luggage.",
              formal: "Welcome! I trust you had a pleasant flight. Allow me to assist you with your baggage.",
            },
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "It was long but smooth. I just have this suitcase and a carry-on. Where's the car?",
            textZh: "很长但是很顺利。我就这一个箱子和一个随身行李。车在哪里？",
            keyPhrases: [
              { en: "smooth", zh: "顺利的" },
              { en: "carry-on", zh: "随身行李" },
            ],
            alternativeExpressions: [
              {
                textEn: "Not bad, actually. No turbulence. I've got one bag and a backpack. Ready to go!",
                textZh: "其实还好。没有颠簸。我有一个箱子和一个背包。可以走了！",
                actionHint: "帮忙拿行李",
                frequency: "common",
              },
              {
                textEn: "Pretty good, just a bit tired. These are all my bags. Shall we head out?",
                textZh: "还不错，就是有点累。这些是我所有的行李。我们走吧？",
                actionHint: "准备出发",
                frequency: "occasional",
              },
            ],
            casualVersion: "Long but smooth. Just this suitcase and my carry-on. Car's at?",
            commonMistake: {
              wrong: "It was long but smooth. I just have this suitcase and carry-on.",
              correct: "It was long but smooth. I just have this suitcase and a carry-on.",
              explanation: "“carry-on”是可数名词，首次提及需加不定冠词。",
            },
            formalityVariants: {
              casual: "Long but smooth. Just this suitcase and my carry-on. Car's at?",
              standard: "It was long but smooth. I just have this suitcase and a carry-on. Where's the car?",
              formal:
                "The journey was extended, yet uneventful. I have only this suitcase and a piece of carry-on luggage. Could you please indicate the location of the vehicle?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The car is parked in the short-term parking lot, about a five-minute walk. Or we can take the shuttle to the parking area.",
            textZh: "车停在短期停车场，走路大概五分钟。或者我们可以坐摆渡车去停车区。",
            casualVersion: "Car's in short-term parking, like five minutes walk. Or we can hop the shuttle to the lot.",
            commonMistake: {
              wrong: "The car is parked in short-term parking lot.",
              correct: "The car is parked in the short-term parking lot.",
              explanation: "“short-term parking lot”是特指的地点，前面需要加the。",
            },
            formalityVariants: {
              casual: "Car's in short-term parking, 'bout a five-minute walk. Or we can just grab the shuttle.",
              standard:
                "The car is parked in the short-term parking lot, about a five-minute walk. Or we can take the shuttle to the parking area.",
              formal:
                "The vehicle is situated in the short-term parking facility, which is approximately a five-minute walk. Alternatively, we may utilize the shuttle service to reach the designated parking area.",
            },
          },
          {
            speaker: "them",
            role: "旅客",
            textEn:
              "Let's walk. I need to stretch my legs after that long flight. By the way, how far is the hotel from here?",
            textZh: "我们走吧。坐了那么久的飞机，我需要活动一下腿。对了，酒店离这里多远？",
            keyPhrases: [
              { en: "stretch my legs", zh: "活动腿/伸展" },
              { en: "how far", zh: "多远" },
            ],
            vocabNotes: {
              "stretch my legs": {
                meaningInContext: "在这句话里表示：久坐后起来走走、活动一下",
                similarUsage: "类似用法：Let's stop and stretch our legs.（我们停下来活动一下吧）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Walking sounds great — been sitting for 14 hours! How long is the drive to the hotel?",
                textZh: "走走好——坐了14个小时了！开车去酒店要多久？",
                actionHint: "一起步行去车场",
                frequency: "common",
              },
              {
                textEn: "I'd rather walk, thanks. I could use some fresh air. Is the hotel far from the airport?",
                textZh: "我想走路，谢谢。想呼吸点新鲜空气。酒店离机场远吗？",
                actionHint: "聊着天走过去",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Let's just walk. Gotta stretch my legs after that flight. Oh, how far's the hotel from here?",
            commonMistake: {
              wrong: "I need stretch my legs.",
              correct: "I need to stretch my legs.",
              explanation: "“need to do something”是固定搭配。",
            },
            formalityVariants: {
              casual: "Yeah, let's walk. Need to stretch my legs after that flight. Btw, how far's the hotel?",
              standard:
                "Let's walk. I need to stretch my legs after that long flight. By the way, how far is the hotel from here?",
              formal:
                "I prefer to walk. I find it necessary to stretch my legs after such an extended flight. Incidentally, what is the approximate distance to the hotel from this location?",
            },
          },
          {
            speaker: "you",
            textEn:
              "About 30 minutes with normal traffic. I'll take the highway to avoid the city center. There's bottled water in the car if you're thirsty.",
            textZh: "正常路况大约30分钟。我走高速避开市中心。车里有瓶装水，渴了可以喝。",
            casualVersion:
              "Like 30 mins with normal traffic. I'll take the highway, avoid downtown. Got bottled water in the car if you're thirsty.",
            culturalNote: "美国人习惯为客人提供瓶装水，体现周到与礼貌",
            commonMistake: {
              wrong: "About 30 minutes with normal traffic. I will take highway.",
              correct: "About 30 minutes with normal traffic. I'll take the highway.",
              explanation: "特指的高速公路，前面需要加the。",
            },
            formalityVariants: {
              casual:
                "Roughly 30 with no traffic issues. I'll stick to the highway, bypass downtown. Water in the car if you're parched.",
              standard:
                "About 30 minutes with normal traffic. I'll take the highway to avoid the city center. There's bottled water in the car if you're thirsty.",
              formal:
                "The journey should take approximately 30 minutes under typical traffic conditions. I will utilize the highway route to circumvent the city center. Should you require refreshment, bottled water is available in the vehicle.",
            },
          },
          {
            speaker: "them",
            role: "旅客",
            textEn: "Perfect. Thank you so much. You're very helpful.",
            textZh: "太好了。非常感谢。你很周到。",
            alternativeExpressions: [
              {
                textEn: "Sounds great. Thanks a lot — you've been really kind.",
                textZh: "听起来不错。非常感谢——你真的很贴心。",
                actionHint: "表示感谢",
                frequency: "common",
              },
              {
                textEn: "Wonderful. I really appreciate everything. Let's go!",
                textZh: "太好了。真的很感激。我们走吧！",
                actionHint: "准备出发",
                frequency: "occasional",
              },
            ],
            casualVersion: "Awesome. Thanks a bunch. You're super helpful.",
            commonMistake: {
              wrong: "Very good. Thank you so much. You very helpful.",
              correct: "Perfect. Thank you so much. You're very helpful.",
              explanation: "句子需要主谓结构，be动词不能省略。",
            },
            formalityVariants: {
              casual: "Great. Thanks a bunch. You're super helpful.",
              standard: "Perfect. Thank you so much. You're very helpful.",
              formal: "That is excellent. My sincere thanks for your assistance. You have been most accommodating.",
            },
          },
        ],
      },
      {
        id: "ground-transport",
        titleZh: "安排地面交通",
        titleEn: "Arranging Ground Transportation",
        description: "在到达大厅找出租车、网约车、机场大巴",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where can I find the taxi stand?",
            textZh: "请问出租车候车点在哪里？",
            culturalNote: "美国问路时不需要说“请问”，直接问即可，或用Excuse me",
            casualVersion: "Hey, where's the taxi stand?",
            commonMistake: {
              wrong: "Excuse me, where is taxi stand?",
              correct: "Excuse me, where can I find the taxi stand?",
              explanation: "直接问句没有 Can I find 听起来有点生硬，加“the”更自然。",
            },
            formalityVariants: {
              casual: "Hey, where's the taxi stand?",
              standard: "Excuse me, where can I find the taxi stand?",
              formal: "Pardon me, could you please direct me to the taxi stand?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "The taxi stand is just outside Door 3. Turn right when you exit the arrivals hall. There's usually a queue, and dispatchers will assign you a cab.",
            textZh: "出租车候车点在3号门外面。出到达大厅右转。通常会排队，调度员会给您分配出租车。",
            culturalNote: "美国机场打车需到官方候车点，不能随意招手。拒绝搭讪司机。",
            commonMistake: {
              wrong: "There is usually a queue, and the dispatcher will assign a taxi to you.",
              correct: "There's usually a line, and a dispatcher will assign you a taxi.",
              explanation: "line更常用，'assign a taxi to you' 更自然",
            },
            casualVersion: "Taxi stand's right outside Door 3. Just turn right after you leave arrivals. Usually a line, and they'll get you a cab.",
            formalityVariants: {
              casual: "It's right outside Door 3. Hang a right when you leave arrivals. There's usually a line, and they'll get you a cab.",
              standard: "The taxi stand is just outside Door 3. Turn right when you exit the arrivals hall. There's usually a queue, and dispatchers will assign you a cab.",
              formal: "The designated taxi stand is located directly outside of Door 3. Upon exiting the arrivals hall, please proceed to your right. There is typically a queue, and a dispatcher will facilitate your assignment to a taxi.",
            },
            keyPhrases: [
              { en: "taxi stand", zh: "出租车候车点" },
              { en: "queue", zh: "排队" },
              { en: "dispatchers", zh: "调度员" },
            ],
            alternativeExpressions: [
              {
                textEn: "Taxis are curbside at the lower level. Just follow the signs.",
                textZh: "出租车在下层路边。跟着标志走就行。",
                actionHint: "去下层路边",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does a taxi to downtown usually cost?",
            textZh: "打车去市中心一般多少钱？",
            casualVersion: "What's a cab to downtown usually run?",
            commonMistake: {
              wrong: "How much a taxi to downtown cost?",
              correct: "How much does a taxi to downtown usually cost?",
              explanation: "询问价格时，动词助词“does”不能省略。",
            },
            formalityVariants: {
              casual: "What's a cab to downtown usually run?",
              standard: "How much does a taxi to downtown usually cost?",
              formal: "Could you please provide an estimate of the typical fare for a taxi journey to the downtown area?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "It's usually between $35 and $50 depending on traffic. Some taxis have a flat rate to the city center. Make sure to use the metered taxis from the official stand — don't accept rides from people who approach you inside the terminal.",
            textZh:
              "一般35到50美元，取决于路况。有些出租车去市中心有固定价格。一定要在正规候车点坐打表的出租车——不要接受在航站楼里主动搭讪的人。",
            commonMistake: {
              wrong: "It usually costs 35 to 50 US dollars, depending on traffic.",
              correct: "It usually runs 35 to 50 dollars, depending on traffic.",
              explanation: "'runs' 更口语化，dollars省略US",
            },
            casualVersion: "Usually, it's like $35 to $50, traffic dependent. Some cabs got flat rates. Just make sure you get a metered one from the official stand – don't ever take rides from randos inside.",
            formalityVariants: {
              casual: "Yeah, like 35 to 50 bucks, depends on traffic. Some cabs have flat rates. Just use the metered ones from the official stand, and don't get in a car with anyone who comes up to you inside.",
              standard: "It's usually between $35 and $50 depending on traffic. Some taxis have a flat rate to the city center. Make sure to use the metered taxis from the official stand — don't accept rides from people who approach you inside the terminal.",
              formal: "The estimated fare typically ranges from $35 to $50, contingent upon traffic conditions. Certain taxi services may offer a fixed rate to the city center. It is imperative to utilize only metered taxis from the authorized stand and to decline any solicitations for transport from individuals within the terminal building.",
            },
            keyPhrases: [
              { en: "flat rate", zh: "固定价格" },
              { en: "metered taxis", zh: "打表出租车" },
              { en: "official stand", zh: "正规候车点" },
            ],
            culturalNote: "在很多国际机场，航站楼里主动搭讪的'黑车'可能会漫天要价，一定要去正规候车点。",
            vocabNotes: {
              "flat rate": {
                meaningInContext: "在这句话里表示：不按里程计费，而是一口价的固定费用",
                similarUsage: "类似用法：Is there a flat rate to the airport?（去机场有固定价格吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Anywhere from $35 to $50, depends on traffic. Stick to the official taxi line — avoid anyone who approaches you inside.",
                textZh: "大概35到50美元，取决于交通。坚持去正规出租车排队处——不要理航站楼里主动拉客的人。",
                actionHint: "去正规候车点",
                frequency: "common",
              },
              {
                textEn:
                  "A cab to downtown runs about 40 bucks. Some offer a fixed fare. Always use the licensed taxis outside.",
                textZh: "打车去市中心大概40美元左右。有些有固定价。一定坐外面的正规出租车。",
                actionHint: "坐正规出租车",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about ride-sharing? Can I use Uber or Lyft here?",
            textZh: "网约车呢？这里可以用Uber或Lyft吗？",
            culturalNote: "Uber和Lyft是美国最常见的打车软件，类似滴滴。",
            casualVersion: "What about ride-shares? Uber or Lyft work here?",
            commonMistake: {
              wrong: "What about ride-sharing? Can I use Uber or Lyft?",
              correct: "What about ride-sharing? Can I use Uber or Lyft here?",
              explanation: "在问能否使用某项服务时，加上“here”能使句意更完整清晰。",
            },
            formalityVariants: {
              casual: "How about ride-shares? Uber or Lyft work here?",
              standard: "What about ride-sharing? Can I use Uber or Lyft here?",
              formal: "Regarding transportation alternatives, are ride-sharing services such as Uber or Lyft available for use from this location?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes, both Uber and Lyft pick up from the ride-share zone on Level 1. Just open the app, request a ride, and follow the directions to the pickup point. It's usually marked with purple signs.",
            textZh:
              "可以，Uber和Lyft都在1层的网约车专区上车。打开App叫车，然后按指引去上车点就行。通常有紫色标志标识。",
            commonMistake: {
              wrong: "It is usually marked with purple signs.",
              correct: "It's usually marked by purple signs.",
              explanation: "'marked by' 比 'marked with' 更常用。",
            },
            casualVersion: "Yep, Uber and Lyft pick up on Level 1, in the ride-share zone. Just open the app, call one, and follow directions to the pickup spot. Purple signs usually mark it.",
            culturalNote: "美国机场的网约车有固定上车点，按APP指引前往即可，无需在路边等候。",
            formalityVariants: {
              casual: "Yeah, Uber and Lyft pick up on Level 1, in the ride-share zone. Just use the app, request a ride, then follow the directions to the spot. Look for purple signs.",
              standard: "Yes, both Uber and Lyft pick up from the ride-share zone on Level 1. Just open the app, request a ride, and follow the directions to the pickup point. It's usually marked with purple signs.",
              formal: "Indeed, both Uber and Lyft services operate from the designated ride-share zone located on Level 1. You may initiate a request via their respective mobile applications and follow the provided in-app directions to the designated pickup point, which is typically identified by purple signage.",
            },
            keyPhrases: [
              { en: "ride-share zone", zh: "网约车专区" },
              { en: "pickup point", zh: "上车点" },
              { en: "request a ride", zh: "叫车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Uber and Lyft both work here. The pickup is on the ground level — just follow the rideshare signs.",
                textZh: "Uber和Lyft这里都能用。上车点在地面层——跟着网约车的标志走。",
                actionHint: "去地面层找上车点",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, order through the app and head to Level 1. Look for the purple signs — that's the pickup area.",
                textZh: "可以，在App上叫车然后去1层。找紫色标志——那就是上车区。",
                actionHint: "App叫车后去紫色标志处",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there an airport shuttle or express train to the city?",
            textZh: "有机场大巴或者快线地铁去市区吗？",
            casualVersion: "Got an airport shuttle or express train to the city?",
            commonMistake: {
              wrong: "Is there airport shuttle or express train to the city?",
              correct: "Is there an airport shuttle or express train to the city?",
              explanation: "在可数名词前，冠词“an”不能省略。",
            },
            formalityVariants: {
              casual: "Any airport shuttle or express train to the city?",
              standard: "Is there an airport shuttle or express train to the city?",
              formal: "Are there any airport shuttle services or express train options available for transport to the city center?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes! The airport express train runs every 15 minutes and goes straight to Central Station. It's $12 one way. The station is connected to Terminal 1 on the basement level. There are also shuttle buses to major hotels — the stop is outside Door 5.",
            textZh:
              "有！机场快线每15分钟一班，直达中央车站。单程12美元。车站连接1号航站楼地下层。还有去各大酒店的摆渡巴士——站点在5号门外。",
            culturalNote: "美国公共交通票价无折扣，儿童票有优惠。学生票一般指大学生。",
            commonMistake: {
              wrong: "It costs 12 US dollars for a single trip.",
              correct: "It's 12 dollars one way.",
              explanation: "dollar更常用，'one way' 比 'single trip' 更口语化。",
            },
            casualVersion: "Yep! Express train runs every 15 mins, straight to Central Station. Twelve bucks one way. Station's connected to Terminal 1, basement level. Shuttles to hotels too – stop's outside Door 5.",
            formalityVariants: {
              casual: "Yeah! Express train runs every 15, goes right to Central. 12 bucks one way. Station's linked to Terminal 1 in the basement. Hotel shuttles too, outside Door 5.",
              standard: "Yes! The airport express train runs every 15 minutes and goes straight to Central Station. It's $12 one way. The station is connected to Terminal 1 on the basement level. There are also shuttle buses to major hotels — the stop is outside Door 5.",
              formal: "Yes, there is an airport express train service operating every 15 minutes, providing direct transport to Central Station. The fare is $12 for a one-way journey. The train station is conveniently connected to Terminal 1 on the basement level. Additionally, shuttle bus services to major hotels are available, with their designated stop located outside Door 5.",
            },
            keyPhrases: [
              { en: "airport express train", zh: "机场快线" },
              { en: "one way", zh: "单程" },
              { en: "Central Station", zh: "中央车站" },
              { en: "shuttle buses", zh: "摆渡巴士" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The cheapest option is the city bus — Line 47 stops right outside. Takes about an hour though.",
                textZh: "最便宜的是市区公交——47路就在外面。不过大概要一小时。",
                actionHint: "适合不赶时间的情况",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the express train. Where can I buy a ticket?",
            textZh: "我坐快线吧。在哪里买票？",
            casualVersion: "I'll just take the express. Where do I get a ticket?",
            commonMistake: {
              wrong: "Where I can buy a ticket?",
              correct: "Where can I buy a ticket?",
              explanation: "疑问句中“can”应该放在主语“I”前面。",
            },
            formalityVariants: {
              casual: "Okay, I'll take the express. Where do I get a ticket?",
              standard: "I'll take the express train. Where can I buy a ticket?",
              formal: "I will opt for the express train. Could you please inform me of the location where I may purchase a ticket?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "There are ticket machines at the station entrance. They accept cash and credit cards. You can also buy tickets through the transit app on your phone. Just scan the QR code at the gate.",
            textZh: "车站入口有自动售票机。可以用现金和信用卡。也可以用手机上的交通App购票。在闸机口扫二维码就行。",
            culturalNote: "美国多数公共交通系统接受信用卡/借记卡，有些有App购票。",
            commonMistake: {
              wrong: "You can also buy tickets by the transit app on your phone.",
              correct: "You can also buy tickets through the transit app on your phone.",
              explanation: "通过App购票用 'through' 更准确",
            },
            casualVersion: "Ticket machines are at the station entrance. Cash and card's fine. Or just use the transit app on your phone – scan the QR at the gate.",
            formalityVariants: {
              casual: "Ticket machines are at the entrance. Cash or card works. Or just get tickets on your phone's transit app; scan the QR at the gate.",
              standard: "There are ticket machines at the station entrance. They accept cash and credit cards. You can also buy tickets through the transit app on your phone. Just scan the QR code at the gate.",
              formal: "Ticket vending machines are conveniently located at the station entrance, which accommodate both cash and major credit card payments. Alternatively, tickets may be purchased via the official transit application on your mobile device, by scanning the provided QR code at the fare gate.",
            },
            keyPhrases: [
              { en: "ticket machines", zh: "自动售票机" },
              { en: "transit app", zh: "交通App" },
              { en: "QR code", zh: "二维码" },
              { en: "gate", zh: "闸机口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Buy a ticket at the machines by the entrance — they take cards and cash. Or use the app and tap through.",
                textZh: "在入口的机器上买票——可以刷卡或付现金。或者用App购票直接刷码进站。",
                actionHint: "去入口买票",
                frequency: "common",
              },
              {
                textEn:
                  "Tickets are available at the kiosks or on your phone. Just download the transit app and scan at the turnstile.",
                textZh: "可以在自助机或手机上买票。下载交通App然后在闸机口扫码就行。",
                actionHint: "下载交通App",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 无障碍服务 ====================
  {
    id: "airport-wheelchair",
    category: "airport",
    titleZh: "无障碍服务",
    titleEn: "Accessibility Services",
    description: "在机场请求轮椅协助、优先登机和特殊需求服务",
    otherRole: "机场服务人员",
    otherRoleIcon: "accessibility",
    flows: [
      {
        id: "wheelchair-assist",
        titleZh: "轮椅协助",
        titleEn: "Wheelchair Assistance",
        description: "请求轮椅服务，从值机到登机的全程协助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I requested wheelchair assistance when I booked my ticket. Where should I go?",
            textZh: "你好，我订票时申请了轮椅协助。我应该去哪里？",
            casualVersion: "Hey, I asked for wheelchair help when I booked. Where do I go?",
            formalityVariants: {
              casual: "Hey, I asked for wheelchair help when I booked. Where do I go?",
              standard: "Hi, I requested wheelchair assistance when I booked my ticket. Where should I go?",
              formal:
                "Good morning/afternoon, I previously requested wheelchair assistance when making my reservation. Could you please direct me to the appropriate location?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Welcome! Yes, I can see the request on your booking. Please have a seat here, and I'll call our assistance team. They'll be with you in about 5 minutes.",
            textZh: "欢迎！是的，我在您的订单上看到了申请。请在这里坐下，我联系协助团队。他们大约5分钟后来。",
            commonMistake: {
              wrong: "I connect the assistance team",
              correct: "I'll contact the assistance team",
              explanation: "动词'联系'在英语中通常用 'contact' 而不是 'connect'",
            },
            keyPhrases: [
              { en: "wheelchair assistance", zh: "轮椅协助" },
              { en: "assistance team", zh: "协助团队" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I see your special assistance request. Let me arrange a wheelchair and an attendant for you right away.",
                textZh: "我看到您的特殊协助申请了。我马上为您安排轮椅和陪同人员。",
                actionHint: "等待安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, it's in your booking. Have a seat here, and I'll call the team. They'll be here in like 5.",
            formalityVariants: {
              casual: "Yep, it's in your booking. Have a seat here, and I'll call the team. They'll be here in like 5.",
              standard:
                "Welcome! Yes, I can see the request on your booking. Please have a seat here, and I'll call our assistance team. They'll be with you in about 5 minutes.",
              formal:
                "Certainly, I've confirmed the wheelchair assistance request on your reservation. Please make yourself comfortable here while I contact our assistance team. They should be with you within approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Will someone help me through security and to the gate?",
            textZh: "谢谢。会有人帮我过安检并送到登机口吗？",
            casualVersion: "Thanks. Someone gonna help me through security and to the gate?",
            commonMistake: {
              wrong: "Someone help me through security?",
              correct: "Will someone help me through security?",
              explanation: "中式英语常省略助动词，听起来不自然，需补上。",
            },
            formalityVariants: {
              casual: "Thanks. Someone gonna help me through security and to the gate?",
              standard: "Thank you. Will someone help me through security and to the gate?",
              formal:
                "I appreciate that. Will I be assisted through the security checkpoint and escorted directly to my boarding gate?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Absolutely. Our attendant will accompany you through check-in, security, and all the way to your gate. You'll also get priority boarding, so you can board before other passengers.",
            textZh:
              "当然。我们的陪同人员会全程陪您办理值机、过安检，一直送到登机口。您还享有优先登机，可以在其他旅客之前登机。",
            commonMistake: {
              wrong: "Our attendant will help you check-in, security",
              correct: "Our attendant will accompany you through check-in, security",
              explanation: "accompany through 更自然，help you check-in 语法有误",
            },
            keyPhrases: [
              { en: "attendant", zh: "陪同人员" },
              { en: "accompany", zh: "陪同" },
              { en: "priority boarding", zh: "优先登机" },
            ],
            vocabNotes: {
              "priority boarding": {
                meaningInContext: "在这句话里表示：比普通旅客更早登机的特殊安排",
                similarUsage:
                  "类似用法：Families with small children get priority boarding.（带小孩的家庭可以优先登机）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yes, someone will be with you the whole way — check-in, security, right to the gate. And you'll board first.",
                textZh: "是的，全程都会有人陪着您——值机、安检，一直到登机口。而且您会最先登机。",
                actionHint: "等陪同人员到来",
                frequency: "common",
              },
              {
                textEn:
                  "We'll have an assistant escort you from here to your seat on the plane. You also get to board early.",
                textZh: "我们会安排助理从这里一路送您到飞机上的座位。您还可以提前登机。",
                actionHint: "安心等待协助",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "For sure. Our attendant'll take you through check-in, security, and right to your gate. You'll also get to board first, before everyone else.",
            formalityVariants: {
              casual:
                "For sure. Our attendant'll take you through check-in, security, and right to your gate. You'll also get to board first, before everyone else.",
              standard:
                "Absolutely. Our attendant will accompany you through check-in, security, and all the way to your gate. You'll also get priority boarding, so you can board before other passengers.",
              formal:
                "Certainly. Our dedicated attendant will personally escort you through the check-in process, security screening, and directly to your designated boarding gate. Furthermore, you will receive the benefit of priority boarding, allowing you to embark prior to general passenger boarding.",
            },
          },
          {
            speaker: "you",
            textEn: "That's wonderful. My companion is traveling with me — can they come along?",
            textZh: "太好了。我有一个同行人——他们可以一起走吗？",
            casualVersion: "Oh, great. My friend's with me — can they come too?",
            commonMistake: {
              wrong: "My companion go with me?",
              correct: "Can my companion go with me?",
              explanation: "提问时省略助动词听起来像命令或陈述，不自然。",
            },
            formalityVariants: {
              casual: "Oh, great. My friend's with me — can they come too?",
              standard: "That's wonderful. My companion is traveling with me — can they come along?",
              formal:
                "That is excellent news. My travel companion is accompanying me – would it be permissible for them to remain with us throughout the process?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Of course. Your companion can stay with you throughout the process. They'll board with you during the priority boarding call.",
            textZh: "当然可以。您的同行人可以全程陪同。优先登机时他们会和您一起登机。",
            commonMistake: {
              wrong: "Your companion can whole process with you",
              correct: "Your companion can stay with you throughout the process",
              explanation: "throughout the process 表达更地道，stay with you 更准确",
            },
            keyPhrases: [
              { en: "companion", zh: "同行人" },
              { en: "boarding call", zh: "登机广播" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely. They can come with you the entire way and board the plane with you early.",
                textZh: "当然可以。他们可以全程陪着您，和您一起提前登机。",
                actionHint: "同行人一起走",
                frequency: "common",
              },
              {
                textEn:
                  "No problem. Your travel partner is welcome to stay by your side. They'll get early boarding too.",
                textZh: "没问题。您的旅伴可以一直陪在您身边。他们也可以提前登机。",
                actionHint: "同伴享受同等待遇",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally. Your friend can stay with you the whole time. They'll board with you when they call priority.",
            formalityVariants: {
              casual:
                "Totally. Your friend can stay with you the whole time. They'll board with you when they call priority.",
              standard:
                "Of course. Your companion can stay with you throughout the process. They'll board with you during the priority boarding call.",
              formal:
                "Certainly. Your companion is welcome to remain with you for the entirety of the process. They will also be invited to board alongside you during the priority boarding announcement.",
            },
          },
          {
            speaker: "you",
            textEn: "When we arrive, will there be assistance at the destination airport too?",
            textZh: "到达后，目的地机场也有协助服务吗？",
            commonMistake: {
              wrong: "When arrive, will there be assistance",
              correct: "When we arrive, will there be assistance",
              explanation: "英语口语中很少省略主语，'we'在这里是必要的",
            },
            casualVersion: "When we land, will there be help at the destination airport too?",
            formalityVariants: {
              casual: "When we land, will there be help at the destination airport too?",
              standard: "When we arrive, will there be assistance at the destination airport too?",
              formal: "Upon our arrival, will similar assistance be provided at the destination airport as well?",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "Yes, the airline will arrange wheelchair assistance at your destination. Someone will meet you at the aircraft door and help you through immigration, baggage claim, and to the arrivals area.",
            textZh:
              "是的，航空公司会在目的地安排轮椅协助。有人会在机舱门口接您，帮您过入境检查、取行李，一直到到达区域。",
            commonMistake: {
              wrong: "help you pass immigration, get baggage",
              correct: "help you through immigration, baggage claim",
              explanation: "through immigration 和 baggage claim 是标准用法，更自然",
            },
            keyPhrases: [
              { en: "aircraft door", zh: "机舱门口" },
              { en: "immigration", zh: "入境检查" },
              { en: "baggage claim", zh: "行李提取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. There'll be someone waiting for you when you land. They'll help with everything — passport control, luggage, the whole thing.",
                textZh: "当然。您落地时会有人等着您。他们会帮忙处理一切——护照检查、行李，全程。",
                actionHint: "落地后有人接应",
                frequency: "common",
              },
              {
                textEn:
                  "It's all arranged on the other end. An attendant will meet you at the plane door and take you all the way out.",
                textZh: "那边都安排好了。陪同人员会在机舱门口接您，一路送您出去。",
                actionHint: "不用担心到达后的安排",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, the airline'll set up wheelchair help at your destination. Someone'll meet you at the plane door and get you through immigration, baggage, and to arrivals.",
            formalityVariants: {
              casual:
                "Yep, the airline'll set up wheelchair help at your destination. Someone'll meet you at the plane door and get you through immigration, baggage, and to arrivals.",
              standard:
                "Yes, the airline will arrange wheelchair assistance at your destination. Someone will meet you at the aircraft door and help you through immigration, baggage claim, and to the arrivals area.",
              formal:
                "Affirmative. The airline will indeed coordinate wheelchair assistance services for you upon arrival at your destination. A representative will meet you directly at the aircraft door and provide full assistance through immigration procedures, baggage retrieval, and onward to the general arrivals concourse.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very reassuring. Thank you so much for your help.",
            textZh: "这让我很放心。非常感谢你的帮助。",
            commonMistake: {
              wrong: "It makes me no worry",
              correct: "That's very reassuring",
              explanation: "reassuring 更地道，makes me no worry 不符合英语表达习惯",
            },
            casualVersion: "That's super good to know. Thanks a ton for your help.",
            formalityVariants: {
              casual: "That's super good to know. Thanks a ton for your help.",
              standard: "That's very reassuring. Thank you so much for your help.",
              formal: "I find that immensely reassuring. My sincere gratitude for your comprehensive assistance.",
            },
          },
          {
            speaker: "them",
            role: "服务台",
            textEn:
              "You're welcome! It's our pleasure. Here's your attendant now — his name is Mark. He'll take great care of you. Have a wonderful trip!",
            textZh: "不客气！这是我们应该做的。您的陪同人员来了——他叫Mark。他会好好照顾您的。祝旅途愉快！",
            commonMistake: {
              wrong: "It's our should do",
              correct: "It's our pleasure / It's our duty",
              explanation: "“这是我们应该做的”地道表达是 It's our pleasure",
            },
            keyPhrases: [{ en: "take great care of you", zh: "好好照顾您" }],
            alternativeExpressions: [
              {
                textEn: "My pleasure! Here comes your assistant — Mark. You're in good hands. Enjoy your flight!",
                textZh: "不客气！您的助理来了——Mark。放心交给他。祝飞行愉快！",
                actionHint: "跟着Mark走",
                frequency: "common",
              },
              {
                textEn: "Happy to help! This is Mark — he'll be with you from here. Have a safe journey!",
                textZh: "很高兴能帮到您！这位是Mark——从这里开始他会陪着您。一路平安！",
                actionHint: "和Mark一起出发",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem! My pleasure. Here's your attendant, Mark. He'll take good care of ya. Have a great trip!",
            formalityVariants: {
              casual:
                "No problem! My pleasure. Here's your attendant, Mark. He'll take good care of ya. Have a great trip!",
              standard:
                "You're welcome! It's our pleasure. Here's your attendant now — his name is Mark. He'll take great care of you. Have a wonderful trip!",
              formal:
                "You are most welcome. It has been our distinct pleasure to assist you. May I introduce your attendant, Mark, who will ensure your comfort and care. We wish you an excellent and pleasant journey.",
            },
          },
        ],
      },
      {
        id: "special-needs",
        titleZh: "特殊需求沟通",
        titleEn: "Communicating Special Needs",
        description: "与航空公司沟通特殊设备、药物、服务犬等需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to bring my oxygen concentrator on the flight. Is that allowed?",
            textZh: "我需要带制氧机上飞机。可以吗？",
            casualVersion: "Gotta bring my oxygen concentrator on the flight. Is that cool?",
            commonMistake: {
              wrong: "I need to bring my oxygen concentrator on the flight. Allowed?",
              correct: "I need to bring my oxygen concentrator on the flight. Is that allowed?",
              explanation: "询问许可时，be动词和主语不可省略，需要'Is that allowed?'。",
            },
            formalityVariants: {
              casual: "Gotta bring my oxygen concentrator on the flight. Can I?",
              standard: "I need to bring my oxygen concentrator on the flight. Is that allowed?",
              formal: "I need to bring my oxygen concentrator with me during the flight. Would this be permissible?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Portable oxygen concentrators are allowed on board, but we need advance notice and a doctor's certificate. Do you have the medical documentation with you?",
            textZh: "便携式制氧机可以带上飞机，但我们需要提前通知和医生证明。您带了医疗文件吗？",
            casualVersion: "POCs are cool on board, but we need a heads-up and a doctor's note. Got your medical docs?",
            commonMistake: {
              wrong: "we need before tell and doctor proof",
              correct: "we need advance notice and a doctor's certificate",
              explanation: "advance notice 和 doctor's certificate 是标准且地道的说法",
            },
            formalityVariants: {
              casual: "POCs are fine on the plane, but we need a heads-up and a doctor's note. Got your docs?",
              standard: "Portable oxygen concentrators are allowed on board, but we need advance notice and a doctor's certificate. Do you have your medical documents?",
              formal: "Portable oxygen concentrators are indeed permitted on board; however, prior notification and a valid physician's certificate are mandatory. Do you have your requisite medical documentation with you?",
            },
            keyPhrases: [
              { en: "oxygen concentrator", zh: "制氧机" },
              { en: "advance notice", zh: "提前通知" },
              { en: "doctor's certificate", zh: "医生证明" },
              { en: "medical documentation", zh: "医疗文件" },
            ],
            vocabNotes: {
              "portable oxygen concentrator": {
                meaningInContext: "在这句话里表示：便携式制氧设备，可以在飞机上使用的医疗器械",
                similarUsage: "类似用法：FAA-approved portable oxygen concentrator（FAA批准的便携制氧机）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yes, POCs are permitted. We just need a doctor's note and advance notice. Do you have the paperwork?",
                textZh: "可以，便携制氧机是允许的。我们只需要医生证明和提前通知。您有文件吗？",
                actionHint: "出示医生证明",
                frequency: "common",
              },
              {
                textEn:
                  "That's fine — you can bring it on the plane. I'll just need to see your medical certificate and confirm the device model.",
                textZh: "没问题——可以带上飞机。我需要看一下您的医疗证明并确认设备型号。",
                actionHint: "准备医疗证明和设备信息",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have my doctor's letter right here. It says I need continuous oxygen during the flight.",
            textZh: "有，我的医生信在这里。上面写的是飞行过程中需要持续供氧。",
            casualVersion: "Yep, got my doctor's letter right here. Says I need oxygen non-stop for the flight.",
            commonMistake: {
              wrong: "My doctor letter here. It says I need oxygen continuously",
              correct: "I have my doctor's letter here. It says I need continuous oxygen",
              explanation: "doctor's letter 是正确所有格，continuous oxygen 是更自然的说法",
            },
            formalityVariants: {
              casual: "Yeah, my doctor's letter's here. It says I need continuous oxygen for the flight.",
              standard: "Yes, I have my doctor's letter here. It says I need continuous oxygen during the flight.",
              formal: "Yes, I possess my physician's letter here. It stipulates my requirement for continuous oxygen provision throughout the duration of the flight.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Let me review that... This looks good. I'll add a note to your booking. Please make sure the device is fully charged — you'll need enough battery for 150% of the flight duration.",
            textZh: "让我看一下……没问题。我在您的订单上备注一下。请确保设备充满电——电量需要足够飞行时间的150%。",
            casualVersion: "Lemme check that... Looks good. I'll add a note to your booking. Just make sure it's fully charged — gotta have enough for 150% of the flight time.",
            commonMistake: {
              wrong: "I note on your booking. Ensure equipment full charge",
              correct: "I'll make a note on your booking. Please ensure the device is fully charged",
              explanation: "make a note 更地道，fully charged 是正确表达",
            },
            formalityVariants: {
              casual: "Okay, checking it... Looks good. I'll add it to your booking. Just be sure it's fully charged — need 150% of flight time.",
              standard: "Let me review that... This looks good. I'll make a note on your booking. Please ensure the device is fully charged – 150% of the flight duration is required.",
              formal: "Allow me to review this documentation... This appears to be in order. I shall append a notation to your reservation. Kindly ensure the device is fully charged, as a battery life equivalent to 150% of the total flight duration is mandated.",
            },
            keyPhrases: [
              { en: "fully charged", zh: "充满电" },
              { en: "battery", zh: "电池/电量" },
              { en: "flight duration", zh: "飞行时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Looks good. I'm noting it on your reservation. Just make sure the battery covers at least one and a half times the flight time.",
                textZh: "没问题。我在您的预订上备注了。确保电池能撑飞行时间的至少一倍半。",
                actionHint: "检查电池电量",
                frequency: "common",
              },
              {
                textEn:
                  "Everything's in order. I'll flag it in the system. The device needs to hold a charge for 150% of the trip, okay?",
                textZh: "都没问题。我在系统里标注一下。设备需要能撑住飞行时间的150%，好吗？",
                actionHint: "确保电量充足",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I also have a service dog. I have all the paperwork for her.",
            textZh: "我还有一只服务犬。她的文件我都有。",
            casualVersion: "Got a service dog too. All her paperwork's with me.",
            culturalNote: "中国对服务犬的认知和规定与美国不同，美国对残疾人服务犬有严格法律保护。",
            commonMistake: {
              wrong: "I have all her papers",
              correct: "I have all the paperwork for her",
              explanation: "paperwork 是指'文件'更自然地道的说法",
            },
            formalityVariants: {
              casual: "Got a service dog too. Her paperwork's all here.",
              standard: "I also have a service dog. I have all the paperwork for her.",
              formal: "Additionally, I am accompanied by a service dog. I possess all the necessary documentation for her.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Service dogs are welcome in the cabin at no extra charge. I'll need to see the service animal documentation. Your dog will sit in the floor space in front of your seat. We'll make sure you have a bulkhead seat for extra room.",
            textZh:
              "服务犬可以免费带入客舱。我需要看一下服务犬的文件。您的狗会坐在座位前面的地板空间。我们会给您安排前排座位，空间更大。",
            casualVersion: "Service dogs are cool in the cabin, no extra charge. Just need to see their docs. Your dog'll sit on the floor in front of your seat. We'll give you a front-row seat for more room.",
            culturalNote: "美国法律规定服务犬可免费入客舱，中国宠物进客舱极其少见。",
            commonMistake: {
              wrong: "Service dogs can free go to cabin",
              correct: "Service dogs are welcome in the cabin at no extra charge",
              explanation: "at no extra charge 是地道说法，free go to cabin 不自然",
            },
            formalityVariants: {
              casual: "Service dogs can fly in the cabin for free. Just need to see their papers. Your dog sits on the floor by your feet. We'll get you a front seat for more room.",
              standard: "Service dogs are welcome in the cabin at no extra charge. I'll need to see the service dog's documents. Your dog will sit in the floor space in front of your seat. We'll assign you a front-row seat with more space.",
              formal: "Service dogs are permitted within the aircraft cabin without any additional fee. I will require to review the service dog's documentation. Your dog will be situated within the floor space directly in front of your assigned seat. We shall endeavor to allocate you a front-row seat, which offers additional space.",
            },
            keyPhrases: [
              { en: "service dog", zh: "服务犬" },
              { en: "cabin", zh: "客舱" },
              { en: "no extra charge", zh: "免费/无额外费用" },
              { en: "bulkhead seat", zh: "前排座位（隔板后的座位）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Trained service animals can fly in the cabin. Just keep your dog harnessed and under your seat.",
                textZh: "训练有素的服务动物可以在客舱飞行。请保持您的狗系着牵引带并待在座位下面。",
                actionHint: "准备好牵引带",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here are her vaccination records and service animal certificate. She's very well-trained.",
            textZh: "这是她的疫苗接种记录和服务犬证书。她训练得很好。",
            casualVersion: "Here's her vaccine records and service animal cert. She's really well-trained.",
            commonMistake: {
              wrong: "Here is her vaccine papers and service animal proof",
              correct: "Here are her vaccination records and service animal certificate",
              explanation: "vaccination records 和 service animal certificate 是标准用语",
            },
            formalityVariants: {
              casual: "Got her vaccine records and service animal cert right here. She's super well-behaved.",
              standard: "Here are her vaccination records and service animal certificate. She's very well-trained.",
              formal: "Herein are her comprehensive vaccination records and her official service animal certification. She is exceptionally well-trained.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Everything looks in order. I've noted all your special requirements. You'll have pre-boarding privileges, so you and your companion can settle in before other passengers. Is there anything else you need?",
            textZh:
              "一切都没问题。我已经记录了您所有的特殊需求。您有提前登机的权利，可以在其他旅客之前和同行人一起安顿好。还需要什么吗？",
            casualVersion: "Looks good. Got all your special needs noted now. You can pre-board and get settled with your companion before everyone else. Anything else?",
            commonMistake: {
              wrong: "Everything is order. I already recorded all your special needs.",
              correct: "Everything looks in order. I have now noted all your special requirements.",
              explanation: "looks in order 更自然；noted/recorded 是动词，不是已经完成",
            },
            formalityVariants: {
              casual: "All good. Got all your special needs down. You can pre-board with your companion before anyone else. Need anything else?",
              standard: "Everything looks in order. I have now noted all your special requirements. You are entitled to pre-board, settling in with your companion before other passengers. Is there anything else you need?",
              formal: "All documentation and requests appear to be entirely in order. I have comprehensively documented all of your specified requirements. You are duly entitled to avail yourself of pre-boarding, enabling you and your companion to settle prior to general passenger embarkation. Is there any further assistance I may provide?",
            },
            keyPhrases: [
              { en: "in order", zh: "没问题/齐全" },
              { en: "pre-boarding privileges", zh: "提前登机权利" },
              { en: "settle in", zh: "安顿好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All your documents check out. I've logged everything. You'll board early so you have time to get comfortable. Anything else?",
                textZh: "您的文件都没问题。我都记录好了。您会提前登机，有时间安顿。还有别的需要吗？",
                actionHint: "提出其他需求",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect, all noted. You and your companion will pre-board. Let me know if there's anything else I can do.",
                textZh: "好的，都记下了。您和同行人会提前登机。还有什么我能帮的告诉我。",
                actionHint: "如有其他需求现在说",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Could I request an aisle seat? It's easier for me to get in and out.",
            textZh: "能帮我安排过道座位吗？方便我进出。",
            casualVersion: "Can I get an aisle seat? Easier to get in and out.",
            commonMistake: {
              wrong: "Can arrange me aisle seat? Convenient I in out.",
              correct: "Could I request an aisle seat? It would be easier for me to get in and out.",
              explanation: "更礼貌的请求用语，并且 get in and out 才是自然表达",
            },
            formalityVariants: {
              casual: "Can I get an aisle seat? It's just easier to move around.",
              standard: "Could I request an aisle seat? It would be easier for me to get in and out.",
              formal: "Would it be possible to request an aisle seat? This would facilitate ease of access and egress for me.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Of course. I've assigned you seat 4C — it's a bulkhead aisle seat with extra legroom. The cabin crew will also be informed of your needs so they can assist you during the flight.",
            textZh:
              "当然可以。我给您分配了4C座位——是前排过道座位，腿部空间更大。机组人员也会被告知您的需求，飞行过程中可以协助您。",
            casualVersion: "Sure. You got seat 4C — that's a front-row aisle with more legroom. Crew'll know your needs too, so they can help you during the flight.",
            commonMistake: {
              wrong: "I give you seat 4C. Cabin crew will know your needs.",
              correct: "I've assigned you seat 4C. The cabin crew will also be informed of your needs.",
              explanation: "assigned 更正式地道；be informed of 更符合语境",
            },
            formalityVariants: {
              casual: "Yep. You're in 4C — front-row aisle, good legroom. Crew'll know what you need and can help you out on the flight.",
              standard: "Of course. I've assigned you seat 4C – it's a front-row aisle seat with extra legroom. The cabin crew will also be informed of your needs, and they can assist you during the flight.",
              formal: "Certainly. I have allocated you seat 4C, which is a front-row aisle seat providing enhanced legroom. The cabin crew will additionally be apprised of your requirements to provide any necessary assistance throughout the flight.",
            },
            keyPhrases: [
              { en: "aisle seat", zh: "过道座位" },
              { en: "extra legroom", zh: "更大腿部空间" },
              { en: "cabin crew", zh: "机组人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Done — you're in 4C, aisle with lots of legroom. The flight attendants will know about your needs too.",
                textZh: "好了——您在4C，过道座位，腿部空间很大。空乘人员也会了解您的需求。",
                actionHint: "记住座位号4C",
                frequency: "common",
              },
              {
                textEn:
                  "I've put you in a front-row aisle seat for easy access. The crew on board will be briefed about your requirements.",
                textZh: "我给您安排了前排过道座位，方便进出。机上的机组人员会了解您的需求。",
                actionHint: "前排过道方便进出",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 带宠物飞 ====================
  {
    id: "airport-pet",
    category: "airport",
    titleZh: "带宠物飞",
    titleEn: "Traveling with Pets",
    description: "带宠物乘飞机出行，包括航空箱要求、检疫规定等",
    otherRole: "航空公司柜台/检疫人员",
    otherRoleIcon: "paw",
    flows: [
      {
        id: "pet-cabin",
        titleZh: "宠物带入客舱",
        titleEn: "Pet in Cabin",
        description: "小型宠物随身携带进客舱的流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm traveling with my small dog. I booked a pet-in-cabin ticket. What do I need to do?",
            textZh: "你好，我带了一只小狗。我订了宠物客舱票。需要怎么办？",
            casualVersion: "Hey, I'm flying with my dog. Got a pet-in-cabin ticket. What's next?",
            culturalNote: "美国服务沟通直接，不必说客套话。",
            commonMistake: {
              wrong: "I have a small dog to travel with.",
              correct: "I'm traveling with my small dog.",
              explanation: "中文语序直译不自然，英语习惯用'traveling with'。",
            },
            formalityVariants: {
              casual: "Hey, flying with my dog. Got the pet ticket. What's the drill?",
              standard: "Hi, I'm traveling with my small dog. I booked a pet-in-cabin ticket. What do I need to do?",
              formal:
                "Good morning/afternoon. I have a pet-in-cabin booking for my small dog. Could you please guide me through the check-in process?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Welcome! I'll need to see your pet's health certificate and vaccination records. The certificate must be issued within 10 days of travel. Do you have those?",
            textZh: "欢迎！我需要看一下您宠物的健康证明和疫苗记录。健康证明必须是出行前10天内开具的。您有吗？",
            commonMistake: {
              wrong: "I need to see your pet's health certificate and vaccination records. Have you?",
              correct: "I need to see your pet's health certificate and vaccination records. Do you have them?",
              explanation: "直接问'Have you?'在英语中不自然，'Do you have them?'更礼貌。",
            },
            keyPhrases: [
              { en: "health certificate", zh: "健康证明" },
              { en: "vaccination records", zh: "疫苗记录" },
              { en: "issued within 10 days", zh: "10天内开具" },
            ],
            alternativeExpressions: [
              {
                textEn: "I need your pet's vet paperwork — health cert and proof of rabies vaccination.",
                textZh: "我需要您宠物的兽医文件——健康证和狂犬病疫苗证明。",
                actionHint: "准备好兽医文件",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! Need to see your pet's health cert and vax records. Cert's gotta be within 10 days of travel. Got 'em?",
            formalityVariants: {
              casual:
                "Alright, let's see your pet's health certificate and shot records. That cert needs to be from the last 10 days, okay? Got 'em handy?",
              standard:
                "Welcome! I'll need to see your pet's health certificate and vaccination records. The certificate must be issued within 10 days of travel. Do you have those?",
              formal:
                "Welcome. I will require viewing your pet's health certificate and vaccination documentation. Please note, the health certificate must be dated within 10 days of your travel. Do you have these documents available?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here they are. My vet prepared everything last week.",
            textZh: "有，在这里。我的兽医上周把所有东西都准备好了。",
            casualVersion: "Yep, here ya go. My vet got it all ready last week.",
            commonMistake: {
              wrong: "Yes, these are here.",
              correct: "Yes, here they are.",
              explanation: "递交物品时用'here they are'更自然。",
            },
            formalityVariants: {
              casual: "Yep, got 'em right here. Vet hooked me up last week.",
              standard: "Yes, here they are. My vet prepared everything last week.",
              formal: "Yes, I have them right here. My veterinarian completed all necessary preparations last week.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Great, these look good. Now, let me check your carrier. It needs to fit under the seat in front of you. The maximum dimensions are 18 by 11 by 11 inches. Can your dog stand up and turn around inside?",
            textZh:
              "很好，这些没问题。现在让我检查一下您的航空箱。它需要能放在您前面座位下面。最大尺寸是18×11×11英寸。您的狗能在里面站起来和转身吗？",
            commonMistake: {
              wrong: "Can your dog stand up and turn around in it?",
              correct: "Can your dog stand up and turn around inside?",
              explanation: "'inside' 更自然地表示在容器内部，'in it' 也可以，但不如 'inside' 流畅。",
            },
            keyPhrases: [
              { en: "carrier", zh: "航空箱/宠物包" },
              { en: "fit under the seat", zh: "放在座位下面" },
              { en: "maximum dimensions", zh: "最大尺寸" },
              { en: "stand up and turn around", zh: "站起来和转身" },
            ],
            vocabNotes: {
              carrier: {
                meaningInContext: "在这句话里表示：宠物航空箱或宠物旅行包，不是一般的'携带者'",
                similarUsage: "类似用法：Is this carrier airline-approved?（这个航空箱是航空公司认可的吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Paperwork looks fine. Now I need to see the carrier — it has to fit under the seat. Can your dog move around comfortably inside?",
                textZh: "文件没问题。现在我要看一下航空箱——必须能放在座位下面。您的狗在里面能舒服地活动吗？",
                actionHint: "展示航空箱",
                frequency: "common",
              },
              {
                textEn:
                  "Documents are all good. Let me measure the carrier real quick — the size limit is 18 by 11 by 11 inches.",
                textZh: "证件都没问题。让我快速量一下航空箱——尺寸限制是18×11×11英寸。",
                actionHint: "等待测量",
                frequency: "common",
              },
            ],
            casualVersion:
              "Cool, these are good. Lemme check your carrier now. It's gotta fit under the seat in front. Max dimensions are 18 by 11 by 11. Can your dog stand and turn around in it?",
            formalityVariants: {
              casual:
                "Alright, looks good. Now, your carrier. Needs to fit under the seat, ya know? Max is 18x11x11. Dog comfortable in there? Can they stand and turn?",
              standard:
                "Great, these look good. Now, let me check your carrier. It needs to fit under the seat in front of you. The maximum dimensions are 18 by 11 by 11 inches. Can your dog stand up and turn around inside?",
              formal:
                "Excellent, these documents appear to be in order. Now, if you'll permit me to inspect your pet carrier. It is required to fit beneath the seat in front of you, with maximum dimensions of 18 by 11 by 11 inches. May I confirm that your dog can stand upright and turn around comfortably within it?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I bought an airline-approved carrier. She fits comfortably. How much is the pet fee?",
            textZh: "是的，我买了航空公司认可的航空箱。她在里面很舒服。宠物费多少钱？",
            casualVersion: "Yeah, got an airline-approved one. She's comfy. What's the pet fee?",
            commonMistake: {
              wrong: "Pet fee is how much?",
              correct: "How much is the pet fee?",
              explanation: "疑问句语序错误，'how much'开头的问句要倒装。",
            },
            formalityVariants: {
              casual: "Yup, got the right carrier. She's good. How much for the fee?",
              standard: "Yes, I bought an airline-approved carrier. She fits comfortably. How much is the pet fee?",
              formal:
                "Yes, I have procured an airline-approved carrier, and she is quite comfortable within it. May I inquire about the pet fee?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "The in-cabin pet fee is $125 each way. I'll add that to your booking. Your pet counts as your personal item, so you can still bring a carry-on bag.",
            textZh:
              "客舱宠物费是单程125美元。我加到您的订单上。您的宠物算作您的个人物品，所以您仍然可以带一个随身行李。",
            commonMistake: {
              wrong: "Your pet counts as your personal item, so you also can bring a carry-on.",
              correct: "Your pet counts as your personal item, so you can still bring a carry-on.",
              explanation: "'also' 和 'still' 在表达“除了宠物还能带”时语意不同，'still' 更准确。",
            },
            keyPhrases: [
              { en: "pet fee", zh: "宠物费" },
              { en: "each way", zh: "单程" },
              { en: "personal item", zh: "个人物品" },
              { en: "carry-on bag", zh: "随身行李" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $125 per leg for in-cabin pets. Your dog counts as your personal item, but you still get a carry-on.",
                textZh: "客舱宠物每段125美元。您的狗算个人物品，但您仍然可以带一件随身行李。",
                actionHint: "确认费用",
                frequency: "common",
              },
              {
                textEn:
                  "The fee is a hundred and twenty-five dollars one way. I'll add it to your ticket. Don't worry, you can still bring a carry-on bag.",
                textZh: "费用是单程125美元。我加到您的机票上。别担心，您仍然可以带一件随身行李。",
                actionHint: "确认行李规则",
                frequency: "common",
              },
            ],
            casualVersion:
              "Pet fee's 125 bucks each way. I'll add that. Your pet's your personal item, so you can still bring a carry-on.",
            formalityVariants: {
              casual:
                "It's 125 bucks each way for the pet fee. I'll get that on your booking. Your pet is your personal item, so a carry-on is fine.",
              standard:
                "The in-cabin pet fee is $125 each way. I'll add that to your booking. Your pet counts as your personal item, so you can still bring a carry-on bag.",
              formal:
                "The fee for in-cabin pet travel is $125 per direction. I will proceed to add this to your reservation. Your pet is designated as your personal item, thereby still permitting you to bring a carry-on bag.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Any tips for going through security with a pet?",
            textZh: "明白了。带宠物过安检有什么建议吗？",
            casualVersion: "Got it. Any tips for security with her?",
            commonMistake: {
              wrong: "Understood. Have any tips for security?",
              correct: "Got it. Any tips for going through security with a pet?",
              explanation: "直接说'have any tips'语气略生硬，用'any tips for...'更自然。",
            },
            formalityVariants: {
              casual: "Okay, got it. Security tips with a pet?",
              standard: "Got it. Any tips for going through security with a pet?",
              formal:
                "Understood. Do you have any recommendations or advice for navigating security checkpoints with a pet?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "At security, you'll need to take your dog out of the carrier and carry her through the metal detector. The carrier goes through the X-ray machine separately. Make sure she has a collar and leash on so she can't run away.",
            textZh:
              "过安检时，您需要把狗从航空箱里取出来，抱着她过金属探测器。航空箱单独过X光机。确保她戴着项圈和牵引绳，以免跑掉。",
            commonMistake: {
              wrong: "You need take out your dog from the carrier.",
              correct: "You'll need to remove your dog from the carrier.",
              explanation: "'need to do something' 是正确的用法，'take out of' 是正确的短语。",
            },
            keyPhrases: [
              { en: "metal detector", zh: "金属探测器" },
              { en: "X-ray machine", zh: "X光机" },
              { en: "collar and leash", zh: "项圈和牵引绳" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll carry your dog through the metal detector yourself. The carrier goes on the belt separately. Keep a leash on her so she doesn't bolt.",
                textZh: "您要自己抱着狗过金属探测器。航空箱单独放传送带上。给她系好牵引绳以防跑掉。",
                actionHint: "提前系好牵引绳",
                frequency: "common",
              },
              {
                textEn:
                  "At the checkpoint, take her out of the carrier and hold her. The carrier gets X-rayed on its own.",
                textZh: "过安检时，把她从航空箱里抱出来。航空箱单独过X光。",
                actionHint: "准备过安检",
                frequency: "common",
              },
            ],
            casualVersion:
              "At security, you'll gotta take your dog outta the carrier and carry her through the metal detector. Carrier goes through X-ray solo. Just make sure she's got her collar and leash on so she doesn't bolt.",
            formalityVariants: {
              casual:
                "For security, you gotta take the dog out and carry her through the metal detector. Carrier goes through the X-ray by itself. Just make sure she's leashed and collared so she doesn't get away.",
              standard:
                "At security, you'll need to take your dog out of the carrier and carry her through the metal detector. The carrier goes through the X-ray machine separately. Make sure she has a collar and leash on so she can't run away.",
              formal:
                "Upon reaching the security checkpoint, you will be required to remove your dog from its carrier and carry her through the metal detector. The carrier itself will need to pass through the X-ray machine independently. Please ensure your dog is equipped with a collar and leash to prevent any possibility of escape.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks for all the information. Is there a pet relief area in the terminal?",
            textZh: "谢谢你提供的所有信息。航站楼里有宠物如厕区吗？",
            casualVersion: "Thanks for the info. Pet relief area in the terminal?",
            commonMistake: {
              wrong: "Thank you for all information.",
              correct: "Thanks for all the information.",
              explanation: "表达'所有信息'时，'all'后面常接'the'或物主代词。",
            },
            formalityVariants: {
              casual: "Appreciate the info. Got a pet relief area around here?",
              standard: "Thanks for all the information. Is there a pet relief area in the terminal?",
              formal:
                "Thank you for providing all of this helpful information. May I inquire if there is a designated pet relief area within the terminal?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Yes! There's a pet relief area near Gate 20 — it's an enclosed space with artificial turf and waste bags. There's also one before security if you need it now.",
            textZh:
              "有！20号登机口附近有一个宠物如厕区——是一个封闭的空间，有人工草坪和清洁袋。安检前也有一个，如果您现在需要的话。",
            commonMistake: {
              wrong: "There is a pet relief area near Gate 20. It's a closed space.",
              correct: "There's a pet relief area near Gate 20 — it's an enclosed space.",
              explanation: "'closed' 通常指关闭、不开放；'enclosed' 指围起来的、有边界的空间。",
            },
            keyPhrases: [
              { en: "pet relief area", zh: "宠物如厕区" },
              { en: "artificial turf", zh: "人工草坪" },
              { en: "waste bags", zh: "清洁袋" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's one near Gate 20 — fenced area with fake grass and poop bags. There's another one before security too.",
                textZh: "20号登机口附近有一个——围起来的区域，有人工草坪和清洁袋。安检前也有一个。",
                actionHint: "带宠物去如厕区",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, the pet relief station is by Gate 20. It's indoors with turf and all the supplies you need.",
                textZh: "有的，宠物如厕站在20号登机口旁边。室内的，有草坪和所有需要的用品。",
                actionHint: "记住位置",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep! Pet relief area by Gate 20 – it's enclosed with fake grass and waste bags. There's also one before security if you need it now.",
            formalityVariants: {
              casual:
                "Yeah! Pet relief's over by Gate 20 – turf, waste bags, all that. Plus, there's one before security if you need it right away.",
              standard:
                "Yes! There's a pet relief area near Gate 20 — it's an enclosed space with artificial turf and waste bags. There's also one before security if you need it now.",
              formal:
                "Yes, indeed! There is a designated pet relief area located near Gate 20. It is an enclosed space equipped with artificial turf and complimentary waste bags. Furthermore, an additional pet relief facility is available prior to passing through security, should you require it at this time.",
            },
          },
        ],
      },
      {
        id: "pet-quarantine",
        titleZh: "宠物检疫",
        titleEn: "Pet Quarantine & Requirements",
        description: "入境时宠物检疫流程、所需文件",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm arriving with my cat from overseas. What's the quarantine process?",
            textZh: "我从国外带猫入境。检疫流程是怎样的？",
            casualVersion: "Coming in with my cat from overseas. What's the quarantine process?",
            commonMistake: {
              wrong: "I'm arriving with my cat from foreign country. What's the quarantine process?",
              correct: "I'm arriving with my cat from overseas. What's the quarantine process?",
              explanation: "“Foreign country”听起来不自然，用“overseas”或“from abroad”更地道。",
            },
            formalityVariants: {
              casual: "Got my cat with me from overseas. What's the quarantine thing like?",
              standard: "I'm arriving with my cat from overseas. What's the quarantine process?",
              formal:
                "Good morning/afternoon. I'm arriving with my feline companion from an international location. Could you please outline the quarantine procedures?",
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn:
              "Welcome. I'll need to see your pet's import permit, rabies vaccination certificate, and the health certificate from your country of origin. All documents need to be in English or officially translated.",
            textZh:
              "欢迎。我需要看您宠物的进口许可证、狂犬病疫苗证书和出发国的健康证明。所有文件需要英文或官方翻译件。",
            casualVersion: "Welcome. Need to see your pet's import permit, rabies shot certificate, and health certificate from your country. Everything's gotta be in English or officially translated.",
            commonMistake: {
              wrong: "All documents must be English.",
              correct: "All documents need to be in English.",
              explanation: "表达文件语言时，通常用“in English”，而不是“be English”。",
            },
            formalityVariants: {
              casual: "Hey there. Just need to check your pet's import permit, rabies certificate, and health certificate from where you came from. And yeah, all that needs to be in English or translated.",
              standard: "Welcome. I'll need to see your pet's import permit, rabies vaccination certificate, and the health certificate from your country of origin. All documents need to be in English or officially translated.",
              formal: "Welcome. To proceed, I will require your pet's official import permit, a valid rabies vaccination certificate, and the health certificate issued by your country of origin. Please ensure all documentation is provided in English or accompanied by an official translation.",
            },
            keyPhrases: [
              { en: "import permit", zh: "进口许可证" },
              { en: "rabies vaccination", zh: "狂犬病疫苗" },
              { en: "country of origin", zh: "出发国" },
              { en: "officially translated", zh: "官方翻译" },
            ],
            vocabNotes: {
              rabies: {
                meaningInContext: "在这句话里表示：狂犬病，宠物出入境必须接种的疫苗",
                similarUsage: "类似用法：Is the rabies shot up to date?（狂犬病疫苗是最新的吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Hi there. I'll need your pet's vaccination records, health certificate, and import permit. Everything should be in English.",
                textZh: "你好。我需要看宠物的疫苗记录、健康证明和进口许可证。都要英文的。",
                actionHint: "递交文件",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome. Please have your pet's paperwork ready — rabies cert, health cert, and the import permit.",
                textZh: "欢迎。请准备好宠物的文件——狂犬病证书、健康证明和进口许可证。",
                actionHint: "准备好所有证件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Here are all the documents. My cat had her rabies shot six months ago and the microchip was implanted before that.",
            textZh: "所有文件在这里。我的猫六个月前打了狂犬疫苗，芯片在那之前就植入了。",
            casualVersion: "Got all the documents right here. My cat got her rabies shot six months ago, and the microchip was in before that.",
            commonMistake: {
              wrong: "Here are all the documents. My cat hit the rabies vaccine six months ago.",
              correct: "Here are all the documents. My cat had her rabies shot six months ago.",
              explanation: "“Hit the vaccine”不地道，说“had her shot”或“got the vaccine”更自然。",
            },
            formalityVariants: {
              casual: "Got everything here. My cat had her rabies shot six months back, and the chip went in even earlier.",
              standard: "Here are all the documents. My cat had her rabies shot six months ago and the microchip was implanted before that.",
              formal: "Here are the requested documents. My cat received her rabies vaccination approximately six months prior, and the microchip implantation preceded that date.",
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn:
              "Let me verify the microchip number... Yes, it matches the records. Good news — since your cat is coming from a rabies-free country with valid vaccination, there's no quarantine period required. We just need to do a quick visual inspection.",
            textZh:
              "让我核对一下芯片号码……是的，和记录一致。好消息——因为您的猫来自无狂犬病国家且疫苗有效，不需要隔离期。我们只需要做一个简单的外观检查。",
            casualVersion: "Lemme just check the microchip number... Yep, matches up. Good news — since your cat's from a rabies-free country and has a valid vaccine, no quarantine needed. Just a quick look-over.",
            commonMistake: {
              wrong: "No quarantine period is need.",
              correct: "There's no quarantine period required.",
              explanation: "“Need”作动词时需主语，或用被动语态“is needed”或“required”。",
            },
            formalityVariants: {
              casual: "Lemme quickly check the microchip... Yep, looks good. Great news — no quarantine needed since your cat's from a rabies-free spot and is vaccinated. Just a quick visual check.",
              standard: "Let me verify the microchip number... Yes, it matches the records. Good news — since your cat is coming from a rabies-free country with valid vaccination, there's no quarantine period required. We just need to do a quick visual inspection.",
              formal: "Allow me to verify the microchip number... Indeed, it corresponds with our records. Excellent news — given that your cat originates from a rabies-free country and possesses valid vaccination, a quarantine period will not be necessary. A brief visual inspection will suffice.",
            },
            keyPhrases: [
              { en: "microchip number", zh: "芯片号码" },
              { en: "rabies-free country", zh: "无狂犬病国家" },
              { en: "quarantine period", zh: "隔离期" },
              { en: "visual inspection", zh: "外观检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everything checks out. No quarantine needed since the paperwork is complete. I just need to examine the animal briefly.",
                textZh: "一切都符合。文件齐全，不需要隔离。我只需要简单检查一下动物。",
                actionHint: "让检疫官检查宠物",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief! What if there had been a quarantine requirement?",
            textZh: "太好了！如果需要隔离的话会怎样？",
            casualVersion: "Oh, that's a relief! What if I had to quarantine her?",
            commonMistake: {
              wrong: "What if need quarantine?",
              correct: "What if there had been a quarantine requirement?",
              explanation: "省略主语和助动词不自然，“What if”后通常接完整句子，或更口语化的“What if we needed to quarantine？”",
            },
            formalityVariants: {
              casual: "Whew, good to hear! What if she had to be quarantined, though?",
              standard: "That's a relief! What if there had been a quarantine requirement?",
              formal: "That is indeed a considerable relief! However, I am curious as to what the protocol would have been had a quarantine period been mandated.",
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn:
              "Depending on the country of origin and vaccination status, quarantine can range from 10 days to 6 months. The pet would stay at our quarantine facility, and you'd be responsible for the boarding fees — usually around $20 per day.",
            textZh:
              "根据出发国和疫苗状态，隔离期从10天到6个月不等。宠物会住在我们的检疫设施里，寄养费用由您承担——通常每天20美元左右。",
            casualVersion: "Depends on where the pet's from and if they're vaccinated, but quarantine could be anywhere from 10 days to half a year. The pet'd stay at our facility, and you'd pay for boarding — usually 'bout 20 bucks a day.",
            commonMistake: {
              wrong: "You'd be responsible for the boarding rent fee.",
              correct: "You'd be responsible for the boarding fees.",
              explanation: "动物寄养费叫“boarding fees”，不叫“rent fee”。",
            },
            formalityVariants: {
              casual: "Well, depends on the country and their shots, but quarantine could be from 10 days to 6 months. Your pet would stay at our place, and you'd cover the boarding — usually like 20 bucks a day.",
              standard: "Depending on the country of origin and vaccination status, quarantine can range from 10 days to 6 months. The pet would stay at our quarantine facility, and you'd be responsible for the boarding fees — usually around $20 per day.",
              formal: "The duration of quarantine is contingent upon the country of origin and the pet's vaccination status, potentially ranging from ten days to six months. Your pet would be accommodated at our designated quarantine facility, and you would be responsible for the associated boarding fees, which are typically around $20 per diem.",
            },
            keyPhrases: [
              { en: "quarantine facility", zh: "检疫设施" },
              { en: "boarding fees", zh: "寄养费用" },
              { en: "vaccination status", zh: "疫苗状态" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It depends on where you're coming from. Quarantine could be 10 days to 6 months. The daily boarding fee is about $20.",
                textZh: "取决于您从哪里来。隔离期可能是10天到6个月。每天寄养费大约20美元。",
                actionHint: "了解隔离费用",
                frequency: "common",
              },
              {
                textEn:
                  "Without proper vaccination, quarantine can last weeks or even months. Your pet stays at our facility and you pay the daily rate.",
                textZh: "疫苗不齐的话，隔离可能持续几周甚至几个月。宠物住在我们的设施里，按天收费。",
                actionHint: "确保疫苗齐全",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. Is there anything else I need to do before leaving the airport with my cat?",
            textZh: "明白了。在带猫离开机场之前还需要做什么吗？",
            casualVersion: "Got it. Anything else I gotta do before I leave the airport with her?",
            commonMistake: {
              wrong: "I see. Do I still need do anything before leave airport with my cat?",
              correct: "I see. Is there anything else I need to do before leaving the airport with my cat?",
              explanation: "“Still need do anything”语法不通，“before leave airport”动词形式不对。",
            },
            formalityVariants: {
              casual: "Okay, got it. Anything else I need to handle before taking my cat out of here?",
              standard: "I see. Is there anything else I need to do before leaving the airport with my cat?",
              formal: "Understood. Are there any further requirements or procedures I must complete prior to exiting the airport premises with my cat?",
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn:
              "I'll stamp your import permit and give you a clearance form. Keep these documents safe — you may need them for your return trip or if you visit a vet here. Also, make sure to register your pet with the local animal services within 30 days.",
            textZh:
              "我会在您的进口许可证上盖章，并给您一张放行单。请保管好这些文件——回程或在这里看兽医时可能需要。另外，请在30天内在当地动物服务部门登记您的宠物。",
            culturalNote: "美国宠物需在当地登记",
            casualVersion: "I'll stamp your permit and give you a clearance form. Keep 'em safe — might need 'em for your trip back or if you see a vet here. Oh, and register your pet with local animal services within 30 days.",
            commonMistake: {
              wrong: "Save these documents safe.",
              correct: "Keep these documents safe.",
              explanation: "保存文件用“keep safe”，“save”更常用于存储电子文件或储蓄。",
            },
            formalityVariants: {
              casual: "I'll just stamp your permit and hand you a clearance form. Hang onto 'em — you might need 'em later for going back or seeing a vet. Also, make sure to register your pet with local animal services within 30 days.",
              standard: "I'll stamp your import permit and give you a clearance form. Keep these documents safe — you may need them for your return trip or if you visit a vet here. Also, make sure to register your pet with the local animal services within 30 days.",
              formal: "I will stamp your import permit and provide you with a clearance form. Please retain these documents securely, as they may be required for your return journey or during future veterinary visits. Additionally, kindly ensure your pet is registered with the local animal services within a 30-day period.",
            },
            keyPhrases: [
              { en: "clearance form", zh: "放行单" },
              { en: "return trip", zh: "回程" },
              { en: "register your pet", zh: "登记宠物" },
              { en: "local animal services", zh: "当地动物服务部门" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's your stamped permit and clearance form. Hold on to these — you'll need them later. And don't forget to register with animal services within 30 days.",
                textZh: "这是盖好章的许可证和放行单。保管好——之后会用到。30天内别忘了到动物服务部门登记。",
                actionHint: "保管好文件",
                frequency: "common",
              },
              {
                textEn:
                  "All done. Keep these documents for your return trip. Also, register your cat locally within a month.",
                textZh: "都办好了。回程时需要这些文件。另外，一个月内在当地登记您的猫。",
                actionHint: "记住登记期限",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will do. Thank you for making this process so smooth.",
            textZh: "好的。谢谢你让流程这么顺利。",
            casualVersion: "Will do. Thanks for making this whole thing so smooth.",
            commonMistake: {
              wrong: "I will do. Thank you for make this process so smooth.",
              correct: "Will do. Thank you for making this process so smooth.",
              explanation: "“Will do”是地道口语，表达“我会照做”。“make”后接动名词“making”。",
            },
            formalityVariants: {
              casual: "Yeah, will do. Appreciate you making this so easy.",
              standard: "Will do. Thank you for making this process so smooth.",
              formal: "I shall. Thank you for facilitating such a seamless process.",
            },
          },
          {
            speaker: "them",
            role: "检疫官",
            textEn:
              "You're welcome! Your cat seems very calm — she's a good traveler. Welcome to the country, and enjoy your stay!",
            textZh: "不客气！您的猫看起来很淡定——是个好旅行者。欢迎来到我们国家，祝您旅途愉快！",
            casualVersion: "No problem! Your cat's super chill — she's a good traveler. Welcome to the country, enjoy your stay!",
            commonMistake: {
              wrong: "Your cat seems very calm — she's good at travel.",
              correct: "Your cat seems very calm — she's a good traveler.",
              explanation: "形容动物擅长旅行，用“a good traveler”更地道，而不是“good at travel”。",
            },
            formalityVariants: {
              casual: "No prob! Your cat's really chill — good traveler. Welcome to the US, enjoy!",
              standard: "You're welcome! Your cat seems very calm — she's a good traveler. Welcome to the country, and enjoy your stay!",
              formal: "You are most welcome! Your feline companion appears remarkably serene, indicative of a seasoned traveler. Welcome to our country, and we wish you a most pleasant stay.",
            },
            alternativeExpressions: [
              {
                textEn: "Happy to help! She's such a well-behaved kitty. Welcome, and have a wonderful time!",
                textZh: "很高兴帮到您！她真乖。欢迎，祝玩得开心！",
                actionHint: "顺利通关",
                frequency: "common",
              },
              {
                textEn: "No problem at all. Your cat is a pro traveler! Enjoy your stay and take good care of her.",
                textZh: "没问题。您的猫是旅行达人！祝旅途愉快，好好照顾她。",
                actionHint: "带猫出发",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 行李超重 ====================
  {
    id: "airport-overweight",
    category: "airport",
    titleZh: "行李超重",
    titleEn: "Overweight Luggage",
    description: "在值机柜台处理行李超重问题，包括重新打包、额外费用等",
    otherRole: "值机柜台工作人员",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "pay-excess",
        titleZh: "支付超重费",
        titleEn: "Paying Excess Baggage Fee",
        description: "行李超重后选择支付额外费用",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Let me weigh your bag... I'm sorry, but your suitcase is 28 kilos. The limit is 23 kilos, so it's 5 kilos over.",
            textZh: "让我称一下您的行李……抱歉，您的箱子是28公斤。限重23公斤，超了5公斤。",
            commonMistake: {
              wrong: "Your baggage is 28 kilos.",
              correct: "Your suitcase is 28 kilos.",
              explanation: "行李通常用suitcase或bag。Baggage是集合名词，不能直接说'a baggage'或'baggages'，更自然地用'your bag'或'your suitcase'。",
            },
            keyPhrases: [
              { en: "weigh your bag", zh: "称行李" },
              { en: "the limit", zh: "限重" },
              { en: "over", zh: "超重" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hmm, this bag is coming in at 28 kilos — that's 5 over the weight allowance.",
                textZh: "嗯，这个包28公斤——超过行李限重5公斤。",
                actionHint: "准备处理超重",
                frequency: "common",
              },
            ],
            casualVersion:
              "Let's get that on the scale... Oh, looks like your bag's 28 kilos. Limit's 23, so you're 5 over.",
            formalityVariants: {
              casual: "Okay, let's weigh that... Looks like your bag's 28 kilos. Limit's 23, so that's 5 over.",
              standard:
                "Please place your bag on the scale... I'm sorry, but your suitcase weighs 28 kilograms. The allowed limit is 23 kilograms, meaning it is 5 kilograms over.",
              formal:
                "Kindly place your baggage on the scale. My apologies, however, your suitcase measures at 28 kilograms. The regulated allowance is 23 kilograms, resulting in an excess of 5 kilograms.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh no. How much is the excess baggage fee?",
            textZh: "糟糕。超重行李费多少钱？",
            casualVersion: "Ugh, seriously? What's the fee for that?",
            commonMistake: {
              wrong: "How much is it?",
              correct: "How much is the excess baggage fee?",
              explanation: "直接问“多少钱”不够具体，在特定情境下要说清费用类型。",
            },
            formalityVariants: {
              casual: "Ugh, seriously? What's the fee for that?",
              standard: "Oh no. How much is the excess baggage fee?",
              formal: "Oh dear. Could you please inform me of the charge for the excess baggage?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "The excess fee is $15 per kilo, so that would be $75 for the 5 kilos over. Alternatively, you could rearrange some items into a carry-on if you have one.",
            textZh: "超重费是每公斤15美元，5公斤超重就是75美元。或者您可以把一些东西移到随身行李里，如果您有的话。",
            commonMistake: {
              wrong: "The excess fee is 15 dollars every kilo.",
              correct: "The excess fee is $15 per kilo.",
              explanation: "“每”用'per'更自然，'every kilo'听起来不地道。",
            },
            keyPhrases: [
              { en: "excess fee", zh: "超重费" },
              { en: "per kilo", zh: "每公斤" },
              { en: "rearrange", zh: "重新整理" },
            ],
            vocabNotes: {
              "excess baggage": {
                meaningInContext: "在这句话里表示：超出航空公司允许重量的行李部分",
                similarUsage: "类似用法：Is there a charge for excess baggage?（超重行李要收费吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "That's $15 for each extra kilo, so $75 total. Or you could shift some stuff into your carry-on to bring the weight down.",
                textZh: "每超一公斤15美元，一共75美元。或者可以把一些东西挪到随身行李里减重。",
                actionHint: "考虑重新打包",
                frequency: "common",
              },
              {
                textEn:
                  "The overweight charge comes to $75. If you have a carry-on with room, you could move some items and save the fee.",
                textZh: "超重费一共75美元。如果随身行李还有空间，可以移些东西过去，省下这笔费用。",
                actionHint: "评估随身行李空间",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's $15 a kilo, so that's $75 for the 5 kilos. Or, you could move some stuff to a carry-on if you've got one.",
            formalityVariants: {
              casual:
                "It's $15 a kilo, so that's $75 for the 5 over. Or, you could shift some things into a carry-on, if you've got one.",
              standard:
                "The excess fee is $15 per kilogram, making it $75 for the 5 kilograms over. Alternatively, you could rearrange some items into a carry-on if you have one.",
              formal:
                "The charge for excess baggage is $15 per kilogram, which would amount to $75 for the additional 5 kilograms. As an alternative, you may consider transferring some contents into a carry-on bag, should you possess one.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's quite expensive. Is there any way to reduce the fee? Maybe I could check a second bag instead?",
            textZh: "这太贵了。有办法减少费用吗？也许我可以改成托运第二件行李？",
            casualVersion: "Whoa, that's a lot. Any way to get that cheaper? Like, could I just check another bag?",
            commonMistake: {
              wrong: "Can I reduce the fee?",
              correct: "Is there any way to reduce the fee?",
              explanation: "直接翻译“怎么减少费用”听起来生硬，用“Is there any way”更自然。",
            },
            formalityVariants: {
              casual: "Wow, that's pricey. Any way to make it cheaper? Could I just check another bag?",
              standard:
                "That's quite expensive. Is there any way to reduce the fee? Perhaps I could check a second bag instead?",
              formal:
                "That sum is rather substantial. Might there be an alternative method to mitigate this charge? For instance, would checking an additional piece of luggage be an option?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Actually, checking a second bag is $50, which would be cheaper if you can split the weight. Your second bag would need to be under 23 kilos. Do you have another bag you could use?",
            textZh:
              "其实，托运第二件行李是50美元，如果您能分散重量的话会更便宜。第二件行李需要23公斤以内。您有其他袋子可以用吗？",
            commonMistake: {
              wrong: "Checking a second bag is 50 dollars.",
              correct: "Checking a second bag is $50.",
              explanation: "直接说“是50美元”用'is $50'更口语化、自然，而非'is 50 dollars'。",
            },
            keyPhrases: [
              { en: "second bag", zh: "第二件行李" },
              { en: "split the weight", zh: "分散重量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A second checked bag is only $50 — cheaper than the overweight fee if you can split the weight.",
                textZh: "托运第二件行李只要50美元——如果能分散重量的话比超重费便宜。",
                actionHint: "考虑托运第二件",
                frequency: "common",
              },
              {
                textEn:
                  "Another option: check a second bag for $50. As long as each bag is under 23 kilos, you're good.",
                textZh: "另一个方案：再托运一件50美元。只要每件不超过23公斤就行。",
                actionHint: "找另一个包装",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, a second bag's $50, which is cheaper if you can split it. Just needs to be under 23 kilos. Got another bag you could use?",
            formalityVariants: {
              casual:
                "Actually, a second bag's $50, so that'd be cheaper if you can split the weight. Your second bag just needs to be under 23 kilos. Got another bag?",
              standard:
                "Actually, checking a second bag is $50, which would be cheaper if you can split the weight. Your second bag would need to be under 23 kilograms. Do you have another bag you could use?",
              formal:
                "In point of fact, checking an additional piece of luggage incurs a fee of $50, which would be a more economical option should you be able to distribute the weight. This secondary bag would also be subject to the 23-kilogram limit. Do you happen to have another bag available for this purpose?",
            },
          },
          {
            speaker: "you",
            textEn: "Hmm, I don't have another bag. I'll just pay the $75. Can I pay by credit card?",
            textZh: "嗯，我没有其他袋子了。那我付75美元吧。可以刷信用卡吗？",
            casualVersion: "Nah, don't have another bag. I'll just pay the $75 then. Can I use a card?",
            commonMistake: {
              wrong: "Can I use credit card?",
              correct: "Can I pay by credit card?",
              explanation: "询问支付方式时，“Can I pay by...”更完整和礼貌。",
            },
            formalityVariants: {
              casual: "Nah, don't have another bag. Guess I'll just pay the $75. Card okay?",
              standard: "Hmm, I don't have another bag. I'll just pay the $75. Can I pay by credit card?",
              formal:
                "Regrettably, I do not possess an additional bag. I suppose I shall proceed with paying the $75. May I settle the payment using a credit card?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Yes, credit card is fine. I'll process the payment now... All done. Here's your receipt. Your bag is checked through to your final destination.",
            textZh: "可以的，刷信用卡就行。我现在处理付款……好了。这是您的收据。您的行李已经直挂到最终目的地了。",
            commonMistake: {
              wrong: "I will handle the payment now.",
              correct: "I'll process the payment now.",
              explanation: "“处理付款”用'process payment'或'take your payment'更地道，'handle the payment'略显生硬。",
            },
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "checked through", zh: "直挂" },
              { en: "final destination", zh: "最终目的地" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Payment's done. Here's your receipt. Your bag will go straight through to your final stop — no need to pick it up in between.",
                textZh: "付款完成。这是收据。行李会直挂到终点站——中间不用取。",
                actionHint: "保管好收据",
                frequency: "common",
              },
              {
                textEn: "All set — $75 charged to your card. Your luggage is tagged through to your destination.",
                textZh: "搞定了——75美元已刷卡。您的行李已经标记直挂到目的地。",
                actionHint: "确认行李标签",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, card's good. Processing it now... Alright, all set. Here's your receipt. Your bag's checked all the way through.",
            formalityVariants: {
              casual:
                "Yeah, card works. I'm processing it... Done. Here's your receipt. Bag's checked straight through.",
              standard:
                "Yes, a credit card payment is perfectly acceptable. I will process the payment now... All done. Here is your receipt. Your bag is checked through to your final destination.",
              formal:
                "Certainly, a credit card payment is acceptable. I shall process the transaction momentarily... The payment is complete. Here is your receipt. Your luggage has been checked directly to your ultimate destination.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. For next time, what's the best way to avoid overweight fees?",
            textZh: "谢谢。下次怎样才能避免超重费呢？",
            casualVersion: "Thanks. So, for next time, how do I avoid these overweight fees?",
            commonMistake: {
              wrong: "How to avoid overweight fees?",
              correct: "What's the best way to avoid overweight fees?",
              explanation: "“How to”开头过于直接，用“What's the best way to”更自然客气。",
            },
            formalityVariants: {
              casual: "Thanks. So, for next time, how do I avoid these fees?",
              standard: "Thank you. For next time, what's the best way to avoid overweight fees?",
              formal:
                "Thank you. Regarding future travel, what would be the most effective method to preclude incurring overweight baggage charges?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "I'd recommend weighing your bag at home before you leave. You can buy a portable luggage scale for about $10 — it's a great investment. Also, wearing your heaviest shoes and jacket on the plane can save a couple of kilos!",
            textZh:
              "建议您出发前在家称一下行李。买一个便携行李秤大概10美元——很划算。另外，把最重的鞋子和外套穿上飞机可以省几公斤！",
            commonMistake: {
              wrong: "Weighing luggage at home is suggested.",
              correct: "I recommend weighing your luggage at home.",
              explanation: "用主动语态'I recommend...'更直接、自然，而非被动语态。",
            },
            keyPhrases: [
              { en: "portable luggage scale", zh: "便携行李秤" },
              { en: "investment", zh: "值得的投资" },
            ],
            culturalNote: "穿最重的衣物上飞机是很多资深旅行者的常用技巧，可以有效减轻行李重量。",
            alternativeExpressions: [
              {
                textEn:
                  "My tip? Weigh your bag at home. A portable scale is like ten bucks and saves you a lot of hassle.",
                textZh: "我的建议？在家称好行李。便携秤才10美元左右，省很多麻烦。",
                actionHint: "买个便携秤",
                frequency: "common",
              },
              {
                textEn:
                  "Best advice — get a luggage scale and weigh before you leave. And wear your heaviest stuff on the plane!",
                textZh: "最好的建议——买个行李秤，出发前称一下。最重的衣服穿上飞机！",
                actionHint: "穿重衣服上飞机",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just weigh your bag at home before you go. You can snag a portable scale for like $10 – totally worth it. Plus, wear your heaviest shoes and jacket on the plane, saves a few kilos!",
            formalityVariants: {
              casual:
                "Honestly, just weigh your bag at home first. A portable scale's like ten bucks – super useful. And yeah, wear your heaviest stuff on the plane to save weight!",
              standard:
                "I'd recommend weighing your bag at home before you leave. You can buy a portable luggage scale for about $10 — it's a great investment. Also, wearing your heaviest shoes and jacket on the plane can save a couple of kilos!",
              formal:
                "My recommendation would be to ascertain the weight of your luggage at home prior to your departure. A portable luggage scale is available for approximately $10, which represents a sound investment. Furthermore, wearing your most substantial footwear and outerwear during your flight can strategically reduce a few kilograms from your checked baggage.",
            },
          },
        ],
      },
      {
        id: "repack-negotiate",
        titleZh: "重新打包和协商",
        titleEn: "Repacking & Negotiating",
        description: "在机场重新整理行李、与工作人员协商减少费用",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "柜台",
            textEn: "Your bag is 32 kilos — that's 9 kilos over the limit. The excess fee would be $135.",
            textZh: "您的行李是32公斤——超了9公斤。超重费是135美元。",
            commonMistake: {
              wrong: "Your bag has 32 kilos.",
              correct: "Your bag is 32 kilos.",
              explanation: "表达重量直接用'is + 数字'，'has'不用于表示物品重量。",
            },
            alternativeExpressions: [
              {
                textEn: "Ooh, this one's heavy — 32 kilos. That's 9 over. The fee would be $135.",
                textZh: "哎呀，这个有点重——32公斤。超了9公斤。费用是135美元。",
                actionHint: "考虑重新打包",
                frequency: "common",
              },
              {
                textEn:
                  "Your suitcase is coming in at 32 kilos, which is 9 over the limit. That'll cost $135 in excess fees.",
                textZh: "您的箱子称出来是32公斤，超了9公斤。超重费135美元。",
                actionHint: "评估选项",
                frequency: "common",
              },
            ],
            casualVersion: "Your bag's 32 kilos — so that's 9 over the limit. Excess fee's $135.",
            formalityVariants: {
              casual: "Bag's 32 kilos, 9 over. Excess fee is $135.",
              standard: "Your bag is 32 kilos — that's 9 kilos over the limit. The excess fee would be $135.",
              formal:
                "Your baggage currently weighs 32 kilograms, which exceeds the allowable limit by 9 kilograms. Consequently, there will be an excess baggage fee of $135.",
            },
          },
          {
            speaker: "you",
            textEn: "That's way too much! Can I take some things out right here and repack?",
            textZh: "太贵了！我能在这里取出一些东西重新打包吗？",
            casualVersion: "Whoa, that's a lot! Can I just take some stuff out here and repack?",
            commonMistake: {
              wrong: "Too expensive! Can I take out some things here and pack again?",
              correct: "That's way too much! Can I take some things out right here and repack?",
              explanation: "\"too much\"更自然地表达费用过高；\"repack\"比\"pack again\"更地道。",
            },
            formalityVariants: {
              casual: "Whoa, that's a lot! Can I just take stuff out here and repack?",
              standard: "That's way too much! Can I take some things out right here and repack?",
              formal: "That cost seems rather prohibitive. Would it be possible for me to remove some items and repack my baggage at this location?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Of course, there's a repacking area right behind you with a table and a scale. Take your time — just come back to the counter when you're ready.",
            textZh: "当然可以，您身后有一个重新打包的区域，有桌子和秤。慢慢来——打包好了再回柜台。",
            commonMistake: {
              wrong: "There is a repacking area behind you.",
              correct: "There's a repacking area behind you.",
              explanation: "口语中'there is'常用缩写'there's'，听起来更自然。",
            },
            casualVersion: "Yeah, totally. Repacking area's right behind you, got a table and a scale. No rush, just head back here when you're done.",
            formalityVariants: {
              casual: "Sure, repacking area's behind you, table and scale. Take your time, come back when you're ready.",
              standard: "Of course, there's a repacking area right behind you with a table and a scale. Take your time — just come back to the counter when you're ready.",
              formal: "Certainly, we have a designated repacking area directly behind you, equipped with a table and a scale for your convenience. Please feel free to take as much time as you require; simply return to the counter once you are prepared.",
            },
            keyPhrases: [
              { en: "repacking area", zh: "重新打包区域" },
              { en: "take your time", zh: "慢慢来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, you can step aside and reorganize. There's a baggage scale over there for you to use.",
                textZh: "当然，您可以到旁边整理一下。那边有个行李秤可以用。",
                actionHint: "先去旁边整理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I've moved some things to my carry-on. Can you weigh it again?",
            textZh: "好了，我把一些东西移到随身行李了。能再称一次吗？",
            casualVersion: "Alright, moved some stuff to my carry-on. Can you re-weigh it?",
            commonMistake: {
              wrong: "Okay, I moved some things to my carry-on. Can you weight it again?",
              correct: "Okay, I've moved some things to my carry-on. Can you weigh it again?",
              explanation: "\"weigh\"是动词“称重”，\"weight\"是名词“重量”。",
            },
            formalityVariants: {
              casual: "Alright, moved some stuff to my carry-on. Can you re-weigh it?",
              standard: "Okay, I've moved some things to my carry-on. Can you weigh it again?",
              formal: "Very well, I have transferred a portion of the items to my carry-on baggage. May I trouble you to weigh it once more?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Let's see... 25 kilos now. That's still 2 kilos over. The fee would be $30. Or if you can remove just a little more, you'd be under the limit.",
            textZh: "看看……现在25公斤。还是超了2公斤。费用是30美元。或者如果您能再拿出一点点，就不超了。",
            commonMistake: {
              wrong: "Still 2 kilos more.",
              correct: "Still 2 kilos over.",
              explanation: "超重用'over'比'more'更准确、地道。",
            },
            casualVersion: "Lemme see... 25 kilos now. Still 2 over, so that's $30. Or, if you can just take out a little more, you'd be good.",
            formalityVariants: {
              casual: "Okay, 25 kilos now. Still 2 over, so that's $30. Or, just a little more out and you're good.",
              standard: "Let's see... 25 kilos now. That's still 2 kilos over. The fee would be $30. Or if you can remove just a little more, you'd be under the limit.",
              formal: "Upon re-weighing, it is now 25 kilograms. This remains 2 kilograms over the allowed limit, resulting in a fee of $30. Alternatively, if you are able to remove a small additional quantity, your baggage would then fall within the permissible weight allowance.",
            },
            keyPhrases: [{ en: "under the limit", zh: "不超重" }],
            alternativeExpressions: [
              {
                textEn:
                  "It's 25 now — still 2 kilos over. That's $30. If you can take out just a bit more, you'd be in the clear.",
                textZh: "现在25公斤——还是超了2公斤。30美元。如果能再拿出一点点就不超了。",
                actionHint: "再减一点",
                frequency: "common",
              },
              {
                textEn: "Better! Down to 25 kilos, but that's still 2 over. Two more kilos and you're good to go.",
                textZh: "好多了！降到25公斤了，但还是超2公斤。再减2公斤就过关了。",
                actionHint: "尝试再减重",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I really can't take anything more out. Is there any flexibility on 2 kilos? Some airlines let 1 or 2 kilos slide...",
            textZh: "我真的拿不出更多了。2公斤能通融一下吗？有些航空公司1-2公斤可以放过去的……",
            casualVersion: "Seriously, I can't take anything else out. Can you guys cut me some slack on two kilos? Some airlines totally let 1-2 kilos slide.",
            culturalNote: "“cut some slack” 这种表达在中国文化中比较少见。",
            commonMistake: {
              wrong: "I really cannot take out more things. Can you be flexible for 2 kilos?",
              correct: "I really can't take anything more out. Is there any flexibility on 2 kilos?",
              explanation: "\"take anything more out\"更自然。\"flexibility on X\"或\"cut some slack\"更地道。",
            },
            formalityVariants: {
              casual: "Seriously, can't take anything else out. Any chance you can let two kilos slide? Some airlines do.",
              standard: "I really can't take anything more out. Is there any flexibility on 2 kilos? Some airlines let 1 or 2 kilos slide...",
              formal: "I genuinely cannot remove any further items. Would there be any discretion available for a 2-kilogram variance? I understand some carriers occasionally permit a slight overweight.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "I understand. Let me check with my supervisor... Okay, since it's only 2 kilos over and you've already repacked, we can let it go this time. But please try to stay within the limit for your return flight.",
            textZh:
              "我理解。让我问一下主管……好的，因为只超了2公斤而且您已经重新打包了，这次我们可以通融。但是回程的时候请尽量控制在限重以内。",
            commonMistake: {
              wrong: "We can give you an exception this time.",
              correct: "We can make an exception this time.",
              explanation: "“破例”常用'make an exception'，而不是'give an exception'。",
            },
            casualVersion: "Gotcha. Let me just ask my supervisor... Alright, since it's only 2 kilos over and you already repacked, we can let it slide this time. Just try to keep it under for your flight back.",
            formalityVariants: {
              casual: "Understand. Let me ask my boss... Okay, since it's just 2 over and you repacked, we'll let it slide. Just hit the limit for your flight back.",
              standard: "I understand. Let me check with my supervisor... Okay, since it's only 2 kilos over and you've already repacked, we can let it go this time. But please try to stay within the limit for your return flight.",
              formal: "I understand your predicament. Kindly allow me a moment to consult with my supervisor... Very well, given that it is only 2 kilograms over the allowance and you have already undertaken repacking efforts, we are able to make an exception on this occasion. However, we do request your diligent adherence to the stipulated weight limit for your return journey.",
            },
            keyPhrases: [
              { en: "check with my supervisor", zh: "问一下主管" },
              { en: "let it go", zh: "通融/放过" },
              { en: "return flight", zh: "回程航班" },
            ],
            culturalNote: "并非所有航空公司都会通融，低成本航空公司尤其严格。但礼貌地询问有时候会有帮助。",
            vocabNotes: {
              "let it go": {
                meaningInContext: "在这句话里表示：放过、不追究（不是动画片《冰雪奇缘》那个'放手'）",
                similarUsage: "类似用法：I'll let it slide this time.（这次就算了）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Let me check with my manager... Okay, since you've already repacked, we'll waive the fee this time.",
                textZh: "让我问一下经理……好的，既然您已经重新打包了，这次我们免掉这笔费用。",
                actionHint: "下次注意限重",
                frequency: "common",
              },
              {
                textEn:
                  "Hold on, I'll ask my supervisor... Good news — we can let the 2 kilos slide. Just keep it under the limit next time.",
                textZh: "稍等，我问一下主管……好消息——2公斤就放过了。下次尽量控制在限重以内。",
                actionHint: "表示感谢",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! I really appreciate it. I'll definitely pack lighter next time.",
            textZh: "非常感谢！太感激了。下次一定少装点。",
            casualVersion: "Oh my gosh, thank you! Really appreciate it. I'll totally pack way lighter next time.",
            commonMistake: {
              wrong: "Thank you very much! I very appreciate it. I will certainly pack light next time.",
              correct: "Thank you so much! I really appreciate it. I'll definitely pack lighter next time.",
              explanation: "\"very appreciate\"不正确，用\"really appreciate\"。\"pack lighter\"表示程度上的减轻。",
            },
            formalityVariants: {
              casual: "Oh my gosh, thanks! Really appreciate it. Definitely packing lighter next time.",
              standard: "Thank you so much! I really appreciate it. I'll definitely pack lighter next time.",
              formal: "My sincerest thanks to you! I genuinely appreciate your understanding and assistance. I assure you I will make every effort to pack more judiciously on future occasions.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "No problem. One more tip — if you're a frequent flyer or have a credit card with airline benefits, you might get a higher baggage allowance. Something to look into!",
            textZh:
              "没问题。再给您一个建议——如果您是常旅客或有航空公司联名信用卡，可能会有更高的行李限额。可以了解一下！",
            commonMistake: {
              wrong: "If you are frequent flyer, you might have higher allowance.",
              correct: "If you're a frequent flyer, you might have a higher allowance.",
              explanation: "“常旅客”用'frequent flyer'，并且'a frequent flyer'更完整。'allowance'前需要冠词'a'。",
            },
            casualVersion: "No prob. And hey, quick tip: if you're a frequent flyer or got a credit card with airline perks, you could get more baggage allowance. Worth checking out!",
            formalityVariants: {
              casual: "No problem. Quick tip: frequent flyer or airline credit card might get you more baggage. Check it out!",
              standard: "No problem. One more tip — if you're a frequent flyer or have a credit card with airline benefits, you might get a higher baggage allowance. Something to look into!",
              formal: "You are most welcome. I might also offer a suggestion: should you be a frequent flyer or possess a credit card affording airline-specific benefits, you may be entitled to a more generous baggage allowance. This could be a worthwhile avenue for investigation.",
            },
            keyPhrases: [
              { en: "frequent flyer", zh: "常旅客" },
              { en: "baggage allowance", zh: "行李限额" },
              { en: "airline benefits", zh: "航空公司权益" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One more thing — if you have a frequent flyer card or an airline credit card, you might get extra baggage allowance.",
                textZh: "再提一下——如果有常旅客卡或航空联名信用卡，可能有额外行李限额。",
                actionHint: "查看会员权益",
                frequency: "common",
              },
              {
                textEn:
                  "For next time, check if your loyalty program gives you extra weight. Some cards add an extra bag or more kilos.",
                textZh: "下次可以查一下您的会员计划有没有额外重量。有些卡可以多带一件或多几公斤。",
                actionHint: "了解会员福利",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great tip, I'll look into that. Thanks again!",
            textZh: "好建议，我回去了解一下。再次感谢！",
            commonMistake: {
              wrong: "Good tip, I will check it. Thanks again!",
              correct: "Great tip, I'll look into that. Thanks again!",
              explanation: "'Good tip'稍显平淡，'Great tip'更热情。'check it'通常指核对，'look into that'指了解、调查，更符合语境。",
            },
            casualVersion: "Oh, awesome tip, I'll totally check that out. Thanks again!",
            formalityVariants: {
              casual: "Awesome tip, I'll check it out. Thanks again!",
              standard: "Great tip, I'll look into that. Thanks again!",
              formal: "That is an excellent suggestion; I shall certainly investigate that option. Thank you once more!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 货币兑换 ====================
  {
    id: "airport-16",
    category: "airport",
    titleZh: "货币兑换",
    titleEn: "Currency Exchange",
    description: "在机场兑换外币，了解汇率和手续费",
    otherRole: "货币兑换柜台工作人员",
    otherRoleIcon: "banknote",
    flows: [
      {
        id: "basic-exchange",
        titleZh: "基本兑换",
        titleEn: "Basic Currency Exchange",
        description: "用人民币兑换美元或其他外币",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to exchange some Chinese yuan for US dollars.",
            textZh: "你好，我想把人民币换成美元。",
            culturalNote: "美国办理业务时通常用I'd like to，比I want to更礼貌自然。",
            casualVersion: "Hey, can I change some yuan to dollars?",
            commonMistake: {
              wrong: "I want to exchange some Chinese yuan for US dollars.",
              correct: "I'd like to exchange some Chinese yuan for US dollars.",
              explanation: "I want to 听起来不礼貌，用 I'd like to 更得体。",
            },
            formalityVariants: {
              casual: "Hi, looking to swap some Chinese yuan for US dollars.",
              standard: "Hi, I'd like to exchange some Chinese yuan for US dollars.",
              formal:
                "Good morning/afternoon, I would like to inquire about exchanging some Chinese Yuan for United States Dollars.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure. How much would you like to exchange?",
            textZh: "好的。您想兑换多少？",
            keyPhrases: [
              { en: "exchange", zh: "兑换" },
              { en: "how much", zh: "多少" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course. What amount are you looking to convert?",
                textZh: "当然可以。您想兑换多少金额？",
                actionHint: "告诉对方你想换的金额",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. How much you wanna exchange?",
            formalityVariants: {
              casual: "Sure. How much you wanna exchange?",
              standard: "Sure. How much would you like to exchange?",
              formal: "Certainly. May I ask what amount you are intending to exchange?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like to exchange 5,000 yuan. What's the current exchange rate?",
            textZh: "我想换5000元人民币。现在汇率是多少？",
            culturalNote: "直接说“我想换5000元”听起来会有些生硬，用I'd like to更自然。",
            commonMistake: {
              wrong: "I want to exchange 5000 RMB. How much is the exchange rate now?",
              correct: "I'd like to exchange 5,000 RMB. What's the exchange rate right now?",
              explanation: "“I want to”不如“I'd like to”礼貌自然，汇率用“what's”更地道。",
            },
            casualVersion: "Wanna exchange 5,000 yuan. What's the rate?",
            formalityVariants: {
              casual: "Wanna exchange 5,000 yuan. What's the rate?",
              standard: "I'd like to exchange 5,000 yuan. What's the current exchange rate?",
              formal:
                "I would like to exchange 5,000 Chinese Yuan. Could you please inform me of the current exchange rate?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Today's rate is 1 US dollar to 7.15 yuan. So 5,000 yuan would give you approximately 699 dollars. There's also a 2% service fee.",
            textZh: "今天的汇率是1美元兑7.15元人民币。5000元大概能换699美元。另外还有2%的手续费。",
            commonMistake: {
              wrong: "Today's exchange rate is 1 USD to 7.15 RMB. 5000 RMB is about 699 USD. Also has 2% handling fee.",
              correct: "Today's rate is 1 USD to 7.15 RMB. 5,000 RMB comes out to about 699 USD. There's also a 2% service fee.",
              explanation: "“handling fee”不如“service fee”或“transaction fee”常用。表达金额用“comes out to”更自然。",
            },
            keyPhrases: [
              { en: "exchange rate", zh: "汇率" },
              { en: "approximately", zh: "大约" },
              { en: "service fee", zh: "手续费" },
            ],
            vocabNotes: {
              "service fee": {
                meaningInContext: "在这句话里表示：兑换货币时收取的手续费，通常是兑换金额的百分比",
                similarUsage: "类似用法：Is there a service fee for using this ATM?（用这台ATM机有手续费吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "The buy rate for dollars is 7.15 yuan. After our commission, you'd get about 685 dollars.",
                textZh: "美元买入价是7.15元。扣除佣金后，您大概能拿到685美元。",
                actionHint: "注意佣金后的实际金额",
                frequency: "common",
              },
            ],
            casualVersion:
              "Rate's 1 US dollar to 7.15 yuan. So 5,000 yuan gets ya 'bout 699 bucks. Plus a 2% service fee.",
            formalityVariants: {
              casual: "Rate's 1 US dollar to 7.15 yuan. So 5,000 yuan gets ya 'bout 699 bucks. Plus a 2% service fee.",
              standard:
                "Today's rate is 1 US dollar to 7.15 yuan. So 5,000 yuan would give you approximately 699 dollars. There's also a 2% service fee.",
              formal:
                "The current exchange rate for today is one United States Dollar to 7.15 Chinese Yuan. Therefore, an exchange of 5,000 Yuan would yield approximately 699 United States Dollars. Additionally, there is a 2% service charge.",
            },
          },
          {
            speaker: "you",
            textEn: "That's a bit high. Is the rate better at the ATM machines?",
            textZh: "有点高。ATM机的汇率会更好吗？",
            commonMistake: {
              wrong: "That's a little high. ATM machine's exchange rate will be better?",
              correct: "That's a bit high. Will ATM rates be better?",
              explanation: "“A little high”没问题，但“a bit high”更常见。“ATM machine”可简化为“ATM”。",
            },
            casualVersion: "Hmm, that's kinda high. ATMs got better rates?",
            formalityVariants: {
              casual: "Hmm, that's kinda high. ATMs got better rates?",
              standard: "That's a bit high. Is the rate better at the ATM machines?",
              formal:
                "That rate seems somewhat elevated. Would the exchange rate be more favorable if I were to utilize an automated teller machine?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "ATMs usually offer a slightly better rate, but your bank may charge a foreign transaction fee. It depends on your card. Our advantage is you get cash immediately with no bank fees.",
            textZh:
              "ATM通常汇率稍好一些，但您的银行可能会收取境外交易手续费。取决于您的银行卡。我们的优势是现场拿现金，没有银行手续费。",
            keyPhrases: [
              { en: "foreign transaction fee", zh: "境外交易手续费" },
              { en: "depends on your card", zh: "取决于您的银行卡" },
            ],
            vocabNotes: {
              "foreign transaction fee": {
                meaningInContext: "在这句话里表示：在国外使用银行卡时，银行额外收取的手续费",
                similarUsage:
                  "类似用法：My credit card has no foreign transaction fees.（我的信用卡没有境外交易手续费）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The ATM rate is a bit better, but your bank might hit you with a transaction fee. With us, what you see is what you get.",
                textZh: "ATM汇率好一点，但银行可能会收手续费。在我们这里，看到多少就是多少。",
                actionHint: "权衡利弊",
                frequency: "common",
              },
              {
                textEn:
                  "It depends. ATMs give a better rate but banks often add their own fees. Here you get your cash right away, no hidden charges.",
                textZh: "看情况。ATM汇率好但银行经常加自己的手续费。这里现场拿现金，没有隐藏费用。",
                actionHint: "决定在哪换",
                frequency: "common",
              },
            ],
            casualVersion:
              "ATMs usually a bit better, but your bank might hit you with a foreign transaction fee. Depends on your card. We're good 'cause you get cash now, no bank fees.",
            formalityVariants: {
              casual:
                "ATMs usually a bit better, but your bank might hit you with a foreign transaction fee. Depends on your card. We're good 'cause you get cash now, no bank fees.",
              standard:
                "ATMs usually offer a slightly better rate, but your bank may charge a foreign transaction fee. It depends on your card. Our advantage is you get cash immediately with no bank fees.",
              formal:
                "Automated Teller Machines typically provide a marginally more advantageous exchange rate; however, your banking institution may impose a foreign transaction fee. This is contingent upon your specific card. Our primary benefit is the immediate disbursement of cash without any additional bank charges.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll go ahead and exchange the 5,000 yuan. Can I get it in smaller bills?",
            textZh: "好吧，那就换5000元。能给我小面额的钞票吗？",
            commonMistake: {
              wrong: "Okay, I will change 5000 yuan. Can give me small face value bills?",
              correct: "Okay, I'll go ahead and exchange 5,000 yuan. Can I get some smaller denominations?",
              explanation: "“I will change”不如“I'll go ahead and exchange”自然。“small face value bills”应说“smaller denominations”或“smaller bills”。",
            },
            casualVersion: "Alright, I'll just do the 5,000 yuan then. Can I get smaller bills?",
            formalityVariants: {
              casual: "Alright, I'll just do the 5,000 yuan then. Can I get smaller bills?",
              standard: "Okay, I'll go ahead and exchange the 5,000 yuan. Can I get it in smaller bills?",
              formal:
                "Very well, I will proceed with exchanging the 5,000 Chinese Yuan. Would it be possible to receive the funds in smaller denominations?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn: "Sure. I can give you a mix of twenties and fifties. Would that work?",
            textZh: "可以。我可以给您20和50面额的混合。可以吗？",
            keyPhrases: [
              { en: "smaller bills", zh: "小面额钞票" },
              { en: "twenties and fifties", zh: "20和50面额" },
            ],
            localVariants: {
              "en-US": "I can break it into twenties and fifties.",
              "en-GB": "I can give you a mix of twenties and fifties.",
              "en-AU": "I can sort you out with twenties and fifties.",
            },
            alternativeExpressions: [
              {
                textEn: "Of course. How about a mix of twenties and fifties? That should be easy to spend.",
                textZh: "当然可以。20和50面额的混合怎么样？花起来方便。",
                actionHint: "确认面额",
                frequency: "common",
              },
              {
                textEn: "No problem — I'll break it into smaller notes. Twenties and fifties okay?",
                textZh: "没问题——我给您换成小面额。20和50的可以吗？",
                actionHint: "同意面额搭配",
                frequency: "common",
              },
            ],
            casualVersion: "Yep. Can give you a mix of twenties and fifties. That work for ya?",
            formalityVariants: {
              casual: "Yep. Can give you a mix of twenties and fifties. That work for ya?",
              standard: "Sure. I can give you a mix of twenties and fifties. Would that work?",
              formal:
                "Certainly. I am able to provide you with a combination of twenty and fifty dollar denominations. Would that arrangement be satisfactory?",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect. Can I also get a receipt?",
            textZh: "很好。能给我一张收据吗？",
            commonMistake: {
              wrong: "That's great. Can give me a receipt?",
              correct: "That's great. Can I get a receipt?",
              explanation: "请求某物时，“Can I get...”比“Can give me...”更地道。",
            },
            casualVersion: "Perfect. Can I get a receipt too?",
            formalityVariants: {
              casual: "Perfect. Can I get a receipt too?",
              standard: "That's perfect. Can I also get a receipt?",
              formal: "That is perfectly acceptable. May I also request a receipt for this transaction?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Of course. Here's your 685 dollars and the receipt. Please count it before you leave the counter. Keep the receipt — you may need it for customs or if you want to exchange back.",
            textZh:
              "当然。这是您的685美元和收据。请在离开柜台前数一下。保留好收据——过海关时可能需要，或者您想换回来的时候也需要。",
            commonMistake: {
              wrong: "Of course. Here is your 685 USD and receipt. Please count it before leaving the counter. Keep the receipt good.",
              correct: "Of course. Here's your $685 and receipt. Please count it before leaving the counter. Do keep the receipt handy.",
              explanation: "“Here is”常缩写成“Here's”。“Keep the receipt good”不如“Keep the receipt handy”或“Hold onto your receipt”自然。",
            },
            keyPhrases: [
              { en: "count it", zh: "数一下" },
              { en: "keep the receipt", zh: "保留好收据" },
              { en: "exchange back", zh: "换回来" },
            ],
            culturalNote: "兑换外币后一定要当场清点，并保留收据。有些国家入境时海关会询问携带现金金额。",
            alternativeExpressions: [
              {
                textEn:
                  "Here's your $685 and the receipt. Please count it before you leave. Keep the receipt — you might need it at customs.",
                textZh: "这是您的685美元和收据。离开前请数一下。收据留好——过海关可能需要。",
                actionHint: "当场清点",
                frequency: "common",
              },
              {
                textEn:
                  "There you go — six eighty-five. Always count it at the counter. And hold on to that receipt in case you want to convert back later.",
                textZh: "给您——685美元。一定在柜台数清楚。收据留好，万一以后要换回来会用到。",
                actionHint: "数钱并保管收据",
                frequency: "common",
              },
            ],
            casualVersion:
              "Course. Here's your 685 bucks and the receipt. Count it before you leave. Keep it – might need it for customs or if you wanna exchange back.",
            formalityVariants: {
              casual:
                "Course. Here's your 685 bucks and the receipt. Count it before you leave. Keep it – might need it for customs or if you wanna exchange back.",
              standard:
                "Of course. Here's your 685 dollars and the receipt. Please count it before you leave the counter. Keep the receipt — you may need it for customs or if you want to exchange back.",
              formal:
                "Certainly. Here are your 685 United States Dollars and the corresponding receipt. Kindly ensure you verify the amount prior to departing the counter. Please retain the receipt, as it may be required for customs purposes or for any future re-exchange transactions.",
            },
          },
        ],
      },
      {
        id: "rate-negotiation",
        titleZh: "汇率比较与协商",
        titleEn: "Comparing Rates",
        description: "比较不同兑换点的汇率，尝试获取更好的价格",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what's your exchange rate for Japanese yen? I'm flying to Tokyo.",
            textZh: "你好，日元的汇率是多少？我要去东京。",
            culturalNote: "问询汇率时，直接说“What's the rate for JPY?”比加上“你好”更自然。",
            casualVersion: "Hey, what's your exchange rate for yen? Headin' to Tokyo.",
            commonMistake: {
              wrong: "What is your exchange rate?",
              correct: "What's your exchange rate?",
              explanation: "“What is” 在口语中通常缩略为 “What's”，听起来更自然。",
            },
            formalityVariants: {
              casual: "Hey, what's the yen rate? I'm going to Tokyo.",
              standard: "Hi, what's your exchange rate for Japanese yen? I'm flying to Tokyo.",
              formal:
                "Good morning/afternoon, could you please provide me with the current exchange rate for Japanese yen? I am traveling to Tokyo.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "For Japanese yen, the rate today is 1 yuan to 20.5 yen. The minimum exchange amount is 1,000 yuan.",
            textZh: "日元的话，今天汇率是1元人民币兑20.5日元。最低兑换金额是1000元人民币。",
            commonMistake: {
              wrong: "For Japanese yen, today's rate is 1 RMB to 20.5 yen. Minimum exchange amount is 1000 RMB.",
              correct: "For Japanese yen, the rate today is 1 RMB to 20.5 yen. The minimum exchange is 1,000 RMB.",
              explanation: "“Minimum exchange amount”可简化为“minimum exchange”。",
            },
            casualVersion: "For yen, today's rate's 1 yuan to 20.5 yen. Gotta exchange at least 1,000 yuan.",
            formalityVariants: {
              casual: "Yen's 1 to 20.5 today. Min exchange is 1,000 yuan.",
              standard: "For Japanese yen, the rate today is 1 yuan to 20.5 yen. The minimum exchange amount is 1,000 yuan.",
              formal: "Regarding Japanese yen, the current exchange rate for today is 1 Chinese yuan to 20.5 Japanese yen. Please note, there is a minimum exchange requirement of 1,000 Chinese yuan.",
            },
            keyPhrases: [
              { en: "rate", zh: "汇率" },
              { en: "minimum exchange amount", zh: "最低兑换金额" },
            ],
            alternativeExpressions: [
              {
                textEn: "For yen, we're doing 20.5 to the yuan today. The minimum amount to exchange is 1,000 yuan.",
                textZh: "日元今天是1元兑20.5。最低兑换金额1000元。",
                actionHint: "了解汇率",
                frequency: "common",
              },
              {
                textEn: "Today's yen rate is 20.5. You'll need to exchange at least 1,000 yuan.",
                textZh: "今天的日元汇率是20.5。至少要换1000元人民币。",
                actionHint: "确认起兑金额",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I checked online and the market rate is about 21.2 yen per yuan. Your rate seems quite different.",
            textZh: "我网上查了，市场汇率大约是1元兑21.2日元。你们的汇率差距有点大。",
            casualVersion: "I checked online, market rate's like 21.2 yen per yuan. Your rate seems way off.",
            commonMistake: {
              wrong: "Your rate has big difference.",
              correct: "Your rate seems quite different.",
              explanation: "“have big difference” 不自然，应说 “has a big difference” 或 “is quite different”。",
            },
            formalityVariants: {
              casual: "Online, it's 21.2 yen per yuan. Yours is way different.",
              standard: "I checked online and the market rate is about 21.2 yen per yuan. Your rate seems quite different.",
              formal: "I've reviewed the online market rate, which indicates approximately 21.2 yen per yuan. There appears to be a notable disparity with your quoted rate.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "The market rate is the mid-market rate — what banks trade at. We include a spread to cover our costs. But I can tell you, our rates are competitive compared to other exchange counters in the airport.",
            textZh:
              "市场汇率是中间价——银行之间的交易价。我们包含了点差来覆盖成本。但我可以告诉您，和机场其他兑换柜台比，我们的汇率是有竞争力的。",
            commonMistake: {
              wrong: "Our rates are competitive than other exchange counters",
              correct: "Our rates are competitive compared to other exchange counters",
              explanation: "“competitive than” 是错误用法，应使用 “competitive compared to” 或 “more competitive than”",
            },
            culturalNote: "解释汇率中的“点差 (spread)”和“中间价 (mid-market rate)”是常见金融概念，对不熟悉的人来说可",
            casualVersion: "Market rate's just the mid-market — what banks use. We add a spread to cover costs. But seriously, our rates are pretty good compared to other places here at the airport.",
            formalityVariants: {
              casual: "The market rate's what banks get. We add a bit for costs. But we're competitive with other airport places.",
              standard: "The market rate is the mid-market rate — what banks trade at. We include a spread to cover our costs. But I can tell you, our rates are competitive compared to other exchange counters in the airport.",
              formal: "The market rate indeed represents the interbank mid-market rate. Our operational model necessitates the inclusion of a spread to offset overheads. Nevertheless, I assure you, our rates are highly competitive when benchmarked against other currency exchange providers within this airport.",
            },
            keyPhrases: [
              { en: "mid-market rate", zh: "中间价" },
              { en: "spread", zh: "点差" },
              { en: "competitive", zh: "有竞争力的" },
            ],
            vocabNotes: {
              spread: {
                meaningInContext: "在这句话里表示：买入价和卖出价之间的差额，也就是兑换商的利润空间",
                similarUsage: "类似用法：The bid-ask spread is about 2%.（买卖价差大约2%）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The online rate doesn't include fees. We add a margin, but we're still one of the cheapest at this airport.",
                textZh: "网上的汇率不含手续费。我们加了一个差价，但在这个机场我们算最便宜的之一。",
                actionHint: "对比其他柜台",
                frequency: "common",
              },
              {
                textEn:
                  "There's always a markup at exchange counters — that's how we operate. But you'll find our spread is fair compared to others here.",
                textZh: "兑换柜台都有加价——这是经营方式。但跟机场其他家比，我们的点差算合理的。",
                actionHint: "接受或比较",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "If I exchange a larger amount, say 10,000 yuan, can you offer a better rate?",
            textZh: "如果我换大额的，比如10000元，能给更好的汇率吗？",
            casualVersion: "If I swap a bigger amount, like 10,000 yuan, can I get a better rate?",
            commonMistake: {
              wrong: "Can you give me better rate?",
              correct: "Can you offer a better rate?",
              explanation: "英语中名词前常需冠词，此处 “better rate” 需要加 “a”。",
            },
            formalityVariants: {
              casual: "For a bigger amount, like 10k yuan, can you do a better rate?",
              standard: "If I exchange a larger amount, say 10,000 yuan, can you offer a better rate?",
              formal: "Should I exchange a more substantial sum, for instance, 10,000 Chinese yuan, would it be possible to avail a more favorable exchange rate?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "For amounts over 8,000 yuan, we can offer a preferred rate of 20.8 yen per yuan. That would give you 208,000 yen for 10,000 yuan.",
            textZh: "超过8000元的话，我们可以给您优惠汇率，1元兑20.8日元。10000元可以换208,000日元。",
            casualVersion: "Yeah, for over 8,000 yuan, we can do a better rate: 20.8 yen per yuan. So, 10,000 yuan gets ya 208,000 yen.",
            formalityVariants: {
              casual: "Over 8k yuan, we'll give you 20.8 yen per yuan. So 10k gets you 208k yen.",
              standard: "For amounts over 8,000 yuan, we can offer a preferred rate of 20.8 yen per yuan. That would give you 208,000 yen for 10,000 yuan.",
              formal: "Certainly. For transactions exceeding 8,000 Chinese yuan, we are pleased to extend a preferred rate of 20.8 Japanese yen per Chinese yuan. This would result in an acquisition of 208,000 Japanese yen for an exchange of 10,000 Chinese yuan.",
            },
            keyPhrases: [
              { en: "preferred rate", zh: "优惠汇率" },
              { en: "amounts over", zh: "超过…的金额" },
            ],
            alternativeExpressions: [
              {
                textEn: "For larger amounts we have a VIP rate. Let me check what I can do for you.",
                textZh: "大额兑换有VIP汇率。让我看看能给您什么价格。",
                actionHint: "等待对方查询",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's better. Actually, do I even need that much cash? Can I use my credit card for most things in Tokyo?",
            textZh: "那好多了。不过我真的需要那么多现金吗？在东京大部分消费可以刷信用卡吗？",
            culturalNote: "日本人较多使用现金，特别是小店，所以兑换足量现金很重要",
            casualVersion: "Okay, that's better. But wait, do I even need all that cash? Can I just use my card for most stuff in Tokyo?",
            commonMistake: {
              wrong: "I need so much cash?",
              correct: "Do I need that much cash?",
              explanation: "疑问句需要助动词 “do” 或 “am/is/are” 等，直接翻译中文会省略。",
            },
            formalityVariants: {
              casual: "Better. But do I even need that much cash? Can I use my card for most stuff in Tokyo?",
              standard: "That's better. Actually, do I even need that much cash? Can I use my credit card for most things in Tokyo?",
              formal: "That is certainly an improved offer. However, I must inquire if such a substantial amount of cash is genuinely necessary. To what extent can credit cards be utilized for transactions in Tokyo?",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Major stores and restaurants accept credit cards, but many smaller shops, ramen places, and vending machines are still cash-only in Japan. I'd suggest having at least 50,000 yen in cash for a week-long trip.",
            textZh:
              "大商场和餐厅可以刷卡，但日本很多小店、拉面店和自动售货机还是只收现金。建议一周的行程至少带50,000日元现金。",
            commonMistake: {
              wrong: "Many small shops, ramen places, and vending machines are still only cash in Japan. I suggest you bring at least 50,000 yen cash for a week trip.",
              correct: "Many smaller shops, ramen places, and vending machines are still cash-only in Japan. I'd suggest bringing at least 50,000 yen cash for a week-long trip.",
              explanation: "“Still only cash”不如“still cash-only”地道。“suggest you bring”用“I'd suggest bringing”更客气自然。",
            },
            casualVersion: "Big stores and restaurants take cards, but lots of small shops, ramen spots, and vending machines in Japan are still cash-only. I'd say have at least 50k yen cash for a week trip.",
            formalityVariants: {
              casual: "Cards work at big places, but smaller shops, ramen, vending machines are cash only in Japan. Take 50k yen cash for a week.",
              standard: "Major stores and restaurants accept credit cards, but many smaller shops, ramen places, and vending machines are still cash-only in Japan. I'd suggest having at least 50,000 yen in cash for a week-long trip.",
              formal: "While major retail establishments and dining venues readily accept credit cards, it is important to note that numerous smaller shops, particularly ramen establishments, and many vending machines throughout Japan continue to operate exclusively on a cash basis. I would advise carrying a minimum of 50,000 Japanese yen in cash for a week-long itinerary.",
            },
            keyPhrases: [
              { en: "cash-only", zh: "只收现金" },
              { en: "at least", zh: "至少" },
            ],
            culturalNote:
              "日本虽然在推进无现金支付，但很多地方尤其是传统小店、神社、部分出租车仍然只收现金。多带些现金是明智的。",
            alternativeExpressions: [
              {
                textEn:
                  "Big stores take cards, but a lot of smaller places in Japan are cash-only. I'd suggest bringing at least 50,000 yen for a week.",
                textZh: "大店可以刷卡，但日本很多小地方只收现金。建议一周至少带50,000日元。",
                actionHint: "评估现金需求",
                frequency: "common",
              },
              {
                textEn:
                  "Japan is still pretty cash-heavy. For a week, you'll want at least fifty thousand yen on hand.",
                textZh: "日本还是很依赖现金。一周的话，手头至少要有五万日元。",
                actionHint: "多换些现金",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll exchange 5,000 yuan then, and use my card for the rest.",
            textZh: "了解了。那我换5000元吧，其他用卡付。",
            casualVersion: "Got it. I'll just swap 5,000 yuan then, and put the rest on my card.",
            commonMistake: {
              wrong: "I will exchange 5,000 yuan.",
              correct: "I'll exchange 5,000 yuan.",
              explanation: "口语中 “I will” 常用缩略形式 “I'll”，听起来更自然流畅。",
            },
            formalityVariants: {
              casual: "Okay, I'll just swap 5k yuan, use my card for the rest.",
              standard: "Good to know. I'll exchange 5,000 yuan then, and use my card for the rest.",
              formal: "Thank you for that clarification. In that case, I will proceed with exchanging 5,000 Chinese yuan and utilize my credit card for any remaining expenditures.",
            },
          },
          {
            speaker: "them",
            role: "柜台",
            textEn:
              "Smart choice. Here's 103,000 yen and your receipt. One tip — when paying by card abroad, always choose to be charged in the local currency, not your home currency. You'll get a better rate that way.",
            textZh:
              "明智的选择。这是103,000日元和收据。一个小建议——在国外刷卡时，永远选择用当地货币结算，不要选人民币。这样汇率更划算。",
            commonMistake: {
              wrong: "Smart choice. Here is 103,000 yen and receipt. A small advice — when swiping cards abroad, always choose to settle in local currency, don't choose RMB. This way the exchange rate is more cost-effective.",
              correct: "Smart choice. Here's your 103,000 yen and receipt. A quick tip — when using your card abroad, always choose to pay in local currency, not RMB. You'll get a better exchange rate that way.",
              explanation: "“A small advice”应为“a small piece of advice”或“a quick tip”。“swiping cards”不如“using your card”常见。“more cost-effective”口语中常说“better exchange rate”。",
            },
            casualVersion: "Smart move. Here's your 103,000 yen and the receipt. Quick tip—when you pay with a card overseas, always choose local currency, not yuan. You'll get a better rate.",
            formalityVariants: {
              casual: "Good call. Here's your yen and receipt. Quick tip: always pay in local currency abroad, not yuan, for a better rate.",
              standard: "Smart choice. Here's 103,000 yen and your receipt. One tip — when paying by card abroad, always choose to be charged in the local currency, not your home currency. You'll get a better rate that way.",
              formal: "An astute decision. Here is your 103,000 Japanese yen along with the corresponding receipt. May I offer a piece of advice: when conducting card transactions internationally, it is invariably more advantageous to select settlement in the local currency rather than your home currency. This practice typically yields a more favorable exchange rate.",
            },
            keyPhrases: [
              { en: "charged in the local currency", zh: "用当地货币结算" },
              { en: "home currency", zh: "本国货币" },
            ],
            culturalNote:
              "刷卡时选择当地货币（如日元）而不是人民币结算，通常汇率更好。选人民币结算看似方便，但商户会加收高额汇率差。",
            vocabNotes: {
              "charged in the local currency": {
                meaningInContext: "在这句话里表示：刷卡时选择以当地货币计价扣款，而不是自动转换成你本国货币",
                similarUsage: "类似用法：Would you like to be charged in euros or dollars?（您想用欧元还是美元结算？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Good call. Here's your yen and receipt. Quick tip — when using your card in Japan, always pay in yen, not yuan. Better exchange rate.",
                textZh: "明智的选择。这是日元和收据。小建议——在日本刷卡时，永远选日元结算，不要选人民币。汇率更好。",
                actionHint: "记住刷卡技巧",
                frequency: "common",
              },
              {
                textEn:
                  "Here you go — 103,000 yen. A little advice for your trip: if a card machine asks about currency, always pick the local one.",
                textZh: "给您——103,000日元。旅途小建议：如果刷卡机问货币选择，永远选当地货币。",
                actionHint: "选择当地货币",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场交通 ====================
  {
    id: "airport-17",
    category: "airport",
    titleZh: "机场交通",
    titleEn: "Airport Ground Transportation",
    description: "在机场搭乘出租车、网约车、机场大巴等地面交通",
    otherRole: "出租车调度员/司机",
    otherRoleIcon: "car",
    flows: [
      {
        id: "taxi-ride",
        titleZh: "打出租车",
        titleEn: "Taking a Taxi",
        description: "在机场排队打出租车前往酒店",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where is the taxi stand?",
            textZh: "请问出租车站在哪里？",
            culturalNote: "中国人在问路时常说“请问”，但在美国可以直接问问题，用“Excuse me”作为礼貌的开头就足够了。",
            commonMistake: {
              wrong: "Please ask, where is the taxi stand?",
              correct: "Excuse me, where is the taxi stand?",
              explanation: "“Please ask”是中式英语的直译，不符合英文习惯，用“Excuse me”即可。",
            },
            formalityVariants: {
              casual: "Hey, where's the taxi stand?",
              standard: "Excuse me, where is the taxi stand?",
              formal: "Pardon me, could you kindly direct me to the nearest taxi stand?",
            },
            casualVersion: "Hey, where do I get a taxi?",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Follow the signs for 'Ground Transportation.' Take the escalator down one level and exit through Door 3. The taxi queue is right outside.",
            textZh: "跟着'地面交通'的标识走。乘扶梯下一层，从3号门出去。出租车排队处就在外面。",
            casualVersion: "Just follow the 'Taxi' signs.",
            formalityVariants: {
              casual: "Just follow the 'Taxi' signs.",
              standard: "Please follow the signs for 'Taxi' or 'Ground Transportation.'",
              formal: "Kindly proceed by following the signage indicating 'Taxi Services' or 'Ground Transportation.'",
            },
            keyPhrases: [
              { en: "ground transportation", zh: "地面交通" },
              { en: "escalator", zh: "扶梯" },
              { en: "taxi queue", zh: "出租车排队处" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head to the arrivals level. Taxis are outside Exit B.",
                textZh: "到到达层。出租车在B出口外面。",
                actionHint: "找到达层B出口",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I need to go to the Hilton Hotel downtown. How much will it cost?",
            textZh: "你好，我要去市中心的希尔顿酒店。大概多少钱？",
            culturalNote: "美国习惯把目的地和询问价格结合起来，而不是只问价格。说“我要去...”比“我想去...”更自然。",
            casualVersion: "Hey, downtown Hilton. How much?",
            commonMistake: {
              wrong: "Hi, I want to go to Hilton Hotel downtown. How much money?",
              correct: "Hi, I need to go to the Hilton Hotel downtown. How much will it cost?",
              explanation: "“I want”听起来比较直接，用“I need”更自然；“How much money”不地道，应说“How much will it cost”。",
            },
            formalityVariants: {
              casual: "Hey, downtown Hilton. What's the damage?",
              standard: "Hi, I need to go to the Hilton Hotel downtown. How much will it cost?",
              formal: "Good day. I require transportation to the Hilton Hotel, located downtown. Could you please provide an estimate for the fare?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Downtown is about 30 minutes from here with no traffic. It'll be around $45 to $55, depending on the route. It's metered, so you'll pay what the meter shows.",
            textZh: "不堵车的话到市中心大约30分钟。大概45到55美元，看走哪条路。打表的，按表上的付。",
            culturalNote: "美国出租车通常是打表的（metered），价格根据时间和距离计算，不堵车通常比堵车便宜。固定费率（flat rate）是",
            commonMistake: {
              wrong: "How much money?",
              correct: "How much will it cost?",
              explanation: "直接问“How much money?”在英语中听起来不太礼貌，用“How much will it cost/be?”更自然。",
            },
            casualVersion: "Like 30 mins to downtown if no traffic. Usually around 45-55 bucks, depends. Just pay what's on the meter.",
            formalityVariants: {
              casual: "Downtown's like 30 minutes without traffic. Expect around 45-55 bucks, depends on the route. Metered fare.",
              standard: "Downtown is about 30 minutes from here with no traffic. It typically ranges from $45 to $55, depending on the route. It's a metered fare, so you'll pay what's displayed on the meter.",
              formal: "The journey to the downtown area will take approximately 30 minutes under normal traffic conditions. The fare generally ranges from $45 to $55, subject to the chosen route. Payment will be based on the taxi meter's reading.",
            },
            keyPhrases: [
              { en: "with no traffic", zh: "不堵车的话" },
              { en: "metered", zh: "打表的" },
              { en: "depending on the route", zh: "看走哪条路" },
            ],
            vocabNotes: {
              metered: {
                meaningInContext: "在这句话里表示：出租车按计价器计费，不是议价",
                similarUsage: "类似用法：Make sure the taxi is metered.（确保出租车打表）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "The Hilton downtown? About a half hour, maybe $45 to $55. It's all on the meter.",
                textZh: "市中心希尔顿？大概半小时，45到55美元。都按表走。",
                actionHint: "确认价格范围",
                frequency: "common",
              },
              {
                textEn: "That's roughly 30 minutes if traffic's good. The fare runs about fifty bucks, give or take.",
                textZh: "交通顺畅的话大约30分钟。车费大概50美元上下。",
                actionHint: "了解大概费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a flat rate to downtown?",
            textZh: "到市中心有固定价格吗？",
            culturalNote: "在美国机场，前往市中心等固定区域有时会有固定费率（flat rate），而非完全按里程计费。主动询问可以避免争议。",
            commonMistake: {
              wrong: "Is there a fixed price to downtown?",
              correct: "Is there a flat rate to downtown?",
              explanation: "Flat rate 是美国用于固定价格的常用表达，fixed price 听起来不地道。",
            },
            casualVersion: "Flat rate to downtown?",
            formalityVariants: {
              casual: "Flat rate for downtown?",
              standard: "Is there a flat rate to downtown?",
              formal: "Might I inquire if there is a fixed-rate option available for transportation to the downtown area?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "There is a flat rate option of $50 to the downtown area. No surprises, no matter what the traffic is like. Would you prefer that?",
            textZh: "到市区有50美元的固定价格。不管交通状况如何，价格不变。您选固定价吗？",
            culturalNote: "“No surprises”是美国人强调价格透明和避免额外费用的常用表达。这对于不熟悉当地交通计费的游客很有用。",
            casualVersion: "Yeah, there's a $50 flat rate to downtown. No surprises, traffic doesn't matter. Wanna do that?",
            formalityVariants: {
              casual: "Yep, $50 flat rate for downtown. No hidden fees, traffic doesn't change it. You want that?",
              standard: "There is a flat rate option of $50 to the downtown area. No surprises, no matter what the traffic is like. Would you prefer that?",
              formal: "Indeed, we do offer a fixed fare of $50 for the downtown vicinity. This rate is comprehensive and unaffected by traffic conditions. Would you be inclined to select this option?",
            },
            keyPhrases: [
              { en: "flat rate", zh: "固定价格" },
              { en: "no surprises", zh: "没有意外费用" },
            ],
            literalMeaning: "'No surprises' 字面意思是'没有惊喜'，在这里表示价格透明不会有额外费用。",
            alternativeExpressions: [
              {
                textEn: "Yeah, there's a fixed fare of $50 to downtown. Same price no matter the traffic.",
                textZh: "有的，到市区固定50美元。不管堵不堵车都一样。",
                actionHint: "选择固定价",
                frequency: "common",
              },
              {
                textEn: "We can do a flat fifty to the downtown area. That way you know exactly what you're paying.",
                textZh: "可以固定50美元到市区。这样您就知道确切要付多少了。",
                actionHint: "确认接受固定价",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, the flat rate sounds good. Can I pay by credit card?",
            textZh: "好的，固定价格挺好。可以刷卡吗？",
            culturalNote: "在美国，信用卡支付非常普及，包括出租车。询问“Can I pay by credit card?”比“Can I swi",
            casualVersion: "Yeah, flat rate's good. Card okay?",
            commonMistake: {
              wrong: "Flat rate good. Can I use credit card?",
              correct: "The flat rate sounds good. Can I pay by credit card?",
              explanation: "“Sounds good”是更自然的表达。使用“pay by”或“use a” credit card 更地道。",
            },
            formalityVariants: {
              casual: "Yep, flat rate's fine. Can I pay with plastic?",
              standard: "Yes, the flat rate sounds good. Can I pay by credit card?",
              formal: "Yes, the fixed fare is acceptable. May I inquire if payment via credit card is an option?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, we accept all major credit cards. Let me help you with your luggage. Hop in!",
            textZh: "可以，我们接受所有主流信用卡。我帮您放行李。请上车！",
            culturalNote: "“Hop in!”是美国人在叫人上车时非常常见且友好的口语表达，听起来很自然，无需拘束。",
            commonMistake: {
              wrong: "Please get on the car!",
              correct: "Hop in!",
              explanation: "Hop in 是更自然的口语表达，get on the car 听起来像指示孩子。",
            },
            casualVersion: "Yep, all cards. I'll get your bags. Jump in!",
            formalityVariants: {
              casual: "Sure, all major cards. Lemme grab your bags. Get in!",
              standard: "Yes, we accept all major credit cards. Let me help you with your luggage. Hop in!",
              formal: "Certainly, we honor all primary credit cards. Allow me to assist you with your baggage. Please enter the vehicle.",
            },
            keyPhrases: [
              { en: "major credit cards", zh: "主流信用卡" },
              { en: "hop in", zh: "上车" },
            ],
            localVariants: {
              "en-US": "Hop in!",
              "en-GB": "Jump in!",
              "en-AU": "Jump in, mate!",
            },
            literalMeaning: "'Hop in' 字面意思是'跳进来'，实际就是'请上车'的口语说法。",
            alternativeExpressions: [
              {
                textEn: "Sure, Visa, Mastercard, Amex — we take them all. Let me grab your bags. Get in!",
                textZh: "当然，Visa、万事达、美运通——都可以。我帮你拿行李。上车吧！",
                actionHint: "上车出发",
                frequency: "common",
              },
              {
                textEn: "Card is fine. Pop in, I'll put your luggage in the trunk.",
                textZh: "刷卡没问题。上车吧，我帮你把行李放后备箱。",
                actionHint: "上车",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Could you take the highway? I'm in a bit of a rush.",
            textZh: "谢谢。能走高速吗？我有点赶时间。",
            culturalNote: "美国的高速公路（highway）通常意味着速度更快，但往往伴随着过路费（toll）。提前询问可以帮助司机选择路线。",
            casualVersion: "Thanks. Highway? Kinda in a rush.",
            commonMistake: {
              wrong: "Thanks. Could you take highway? I am hurry.",
              correct: "Thanks. Could you take the highway? I'm in a hurry.",
              explanation: "“highway”前需要加“the”。“in a hurry”是固定搭配，表示“着急”。",
            },
            formalityVariants: {
              casual: "Cheers. Highway okay? Need to get there quick.",
              standard: "Thanks. Could you take the highway? I'm a bit in a hurry.",
              formal: "Thank you. Would it be possible to utilize the highway? I am somewhat pressed for time.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, the highway is faster but there's a $5 toll. Is that okay?",
            textZh: "可以，走高速更快但有5美元过路费。没问题吧？",
            culturalNote: "美国许多高速公路都有过路费（tolls）。司机通常会提前告知并询问乘客是否接受。",
            commonMistake: {
              wrong: "It has 5 dollars toll.",
              correct: "There's a $5 toll.",
              explanation: "用 there is/are 表达存在更自然，而非直接翻译“有”。",
            },
            casualVersion: "Yeah, highway's faster, but there's a $5 toll. That cool?",
            formalityVariants: {
              casual: "Yeah, faster on the highway, but there's a $5 toll. Good with that?",
              standard: "Sure, the highway is faster but there's a $5 toll. Is that okay?",
              formal: "Certainly, the highway route offers greater expediency; however, it incurs a $5 toll. Is this acceptable?",
            },
            keyPhrases: [
              { en: "toll", zh: "过路费" },
              { en: "in a rush", zh: "赶时间" },
            ],
            vocabNotes: {
              toll: {
                meaningInContext: "在这句话里表示：高速公路过路费，由乘客支付",
                similarUsage: "类似用法：Is the toll included in the fare?（过路费包含在车费里吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "No problem. The expressway has a $5 toll on top of the fare, but it'll save us 10 minutes.",
                textZh: "没问题。高速公路有5美元过路费加在车费上，但能省10分钟。",
                actionHint: "同意走高速",
                frequency: "common",
              },
              {
                textEn: "I can take the freeway — quicker but there's a five-dollar toll. You okay with that?",
                textZh: "我可以走高速——更快但有5美元过路费。可以吗？",
                actionHint: "确认同意",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Also, do you have a phone charger in the car by any chance?",
            textZh: "没问题。对了，车上有手机充电器吗？",
            casualVersion: "That's fine. Oh, got a phone charger?",
            commonMistake: {
              wrong: "That's fine. Do you have phone charger?",
              correct: "That's fine. Do you have a phone charger?",
              explanation: "“charger”是可数名词，前面需要加不定冠词“a”。",
            },
            formalityVariants: {
              casual: "No problem. Hey, got a phone charger in here?",
              standard: "That's fine. By the way, do you have a phone charger in the car?",
              formal: "That is perfectly acceptable. Additionally, might I inquire if there is a mobile phone charging device available in the vehicle?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Yeah, there's a USB cable right there in the back. Help yourself. We should be at the hotel in about 25 minutes.",
            textZh: "有，后面那里有USB线。随便用。大约25分钟到酒店。",
            culturalNote: "“Feel free to use it”是美国人常用的客气说法，表示欢迎使用，没有限制。",
            commonMistake: {
              wrong: "You can use it casually.",
              correct: "Feel free to use it.",
              explanation: "随便用 翻译成 casually 不自然，用 feel free to... 更地道。",
            },
            casualVersion: "Yep, USB cable in the back. Help yourself. About 25 to the hotel.",
            formalityVariants: {
              casual: "Uh-huh, USB's back there. Go for it. Like 25 mins to the hotel.",
              standard: "Yeah, there's a USB cable in the back. Feel free to use it. About 25 minutes to the hotel.",
              formal: "Yes, there is indeed a USB charging cable located in the rear compartment. Please feel free to utilize it. We anticipate arriving at the hotel in approximately 25 minutes.",
            },
            keyPhrases: [{ en: "help yourself", zh: "随便用" }],
            literalMeaning: "'Help yourself' 字面意思是'帮你自己'，实际表示'随便用/自己来'，是热情友好的说法。",
            alternativeExpressions: [
              {
                textEn: "There's a charger in the back seat — feel free to use it. We'll be there in about 25.",
                textZh: "后座有充电线——随便用。大约25分钟到。",
                actionHint: "充电",
                frequency: "common",
              },
              {
                textEn: "Yep, USB cable right there. Go ahead. Should be at your hotel in 25 minutes or so.",
                textZh: "有的，USB线就在那。自己用。大约25分钟到酒店。",
                actionHint: "插上充电",
                frequency: "common",
              },
            ],
          },
        ],
      },
      {
        id: "rideshare",
        titleZh: "网约车",
        titleEn: "Ride-share Pickup",
        description: "使用Uber/Lyft等网约车从机场出发",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I ordered an Uber but I can't find the pickup point. Can you help?",
            textZh: "你好，我叫了Uber但找不到上车点。能帮帮我吗？",
            casualVersion: "Hey, ordered an Uber, can't find the pickup. Can you help?",
            commonMistake: {
              wrong: "I ordered Uber but can't find pickup spot. Help me?",
              correct: "I ordered an Uber but I can't find the pickup spot. Can you help me?",
              explanation: "“Uber”前要加“an”，表示一次行程。“pickup spot”前需要加“the”，表示特指上车点。",
            },
            formalityVariants: {
              casual: "Hey, got an Uber but lost the pickup. Help a brother out?",
              standard: "Hi, I ordered an Uber but I can't find the pickup spot. Can you help me?",
              formal: "Excuse me, I have arranged for an Uber ride but I am currently unable to locate the designated pickup area. Would you be able to offer some assistance?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Ride-share pickups are on Level 1 of the parking garage. Go through the walkway on your left and follow the purple signs. There are designated spots labeled with letters — your app should tell you which one.",
            textZh:
              "网约车上车点在停车场1层。从您左边的通道走过去，跟着紫色标识。有用字母标记的指定上车点——您的APP会告诉您是哪个。",
            culturalNote: "美国机场通常有严格的网约车（ride-share）上下客规定，常设在停车场特定楼层或区域，需留意指示牌。",
            commonMistake: {
              wrong: "Level 1 of parking garage means the first floor.",
              correct: "Level 1 of the parking garage.",
              explanation: "在美式英语中，停车场层数通常用 Level 1, 2, 3 来表示，而不是 first floor, second floor。",
            },
            casualVersion: "Ride-share pickups are Level 1, parking garage. Go left through the walkway, follow purple signs. Spots are lettered, app'll tell ya which one.",
            formalityVariants: {
              casual: "Ride-shares are on Level 1, parking garage. Just go left through the walkway, purple signs. Spots are lettered, your app will say which.",
              standard: "Ride-share pickups are on Level 1 of the parking garage. Go through the walkway on your left and follow the purple signs. There are designated spots labeled with letters — your app should tell you which one.",
              formal: "The designated ride-share pickup points are situated on Level 1 of the parking facility. Please proceed via the walkway to your left and observe the purple directional signage. There are clearly marked zones, identified by letters, and your application will specify the appropriate location.",
            },
            keyPhrases: [
              { en: "ride-share pickups", zh: "网约车上车点" },
              { en: "parking garage", zh: "停车场" },
              { en: "designated spots", zh: "指定上车点" },
            ],
            vocabNotes: {
              designated: {
                meaningInContext: "在这句话里表示：专门指定的、划定的（上车区域）",
                similarUsage: "类似用法：Please wait in the designated area.（请在指定区域等候）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Uber and Lyft pick up in the parking structure, Level 1. Follow the purple signs from here.",
                textZh: "Uber和Lyft在停车楼1层上车。从这里跟着紫色标识走。",
                actionHint: "找紫色标识",
                frequency: "common",
              },
              {
                textEn:
                  "The ride-share zone is in the garage — go left, one level down. Look for your spot letter in the app.",
                textZh: "网约车区域在车库——左转，下一层。在APP上看你的上车点字母。",
                actionHint: "查看APP上车点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I see. My app says Spot C. Is the driver allowed to come to the terminal?",
            textZh: "明白了。我的APP显示C点。司机可以到航站楼这边来吗？",
            culturalNote: "美国机场对网约车和出租车的运营区域有明确划分，网约车司机通常不能在航站楼路边接客。",
            casualVersion: "Got it. App says Spot C. Driver allowed at terminal?",
            commonMistake: {
              wrong: "I see. My app says Spot C. Driver can come to the terminal?",
              correct: "I see. My app says Spot C. Is the driver allowed to come to the terminal?",
              explanation: "询问“是否被允许”用“Is ... allowed to...”更准确，而不是简单地用“Can...”",
            },
            formalityVariants: {
              casual: "Okay. App says C. Can the driver come right to the terminal?",
              standard: "I see. My app says Spot C. Is the driver allowed to come to the terminal?",
              formal: "Understood. My application indicates Spot C. May I inquire if the driver is permitted to pick up passengers directly at the terminal?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "No, ride-share drivers can't pick up at the terminal curb — that's only for taxis and hotel shuttles. You'll need to walk to the garage. It's about a 3-minute walk.",
            textZh:
              "不可以，网约车司机不能在航站楼路边接人——那里只允许出租车和酒店接驳车。您需要走到停车场。大约走3分钟。",
            commonMistake: {
              wrong: "Ride-share drivers cannot pick up people on the roadside of the terminal.",
              correct: "Ride-share drivers can't pick up curbside at the terminal.",
              explanation: "Curbside 是描述路边停车和上下客的特定地点，比 roadside 更准确。",
            },
            casualVersion: "Nah, ride-share drivers can't pick up at the terminal curb – that's just for taxis/shuttles. Gotta walk to the garage. Like 3 minutes.",
            culturalNote: "美国许多机场对网约车（如Uber/Lyft）有严格的接客区域规定，通常不能在航站楼路边直接上车。",
            formalityVariants: {
              casual: "Nope, ride-shares can't do curbside terminal pickup – that's only for cabs and hotel shuttles. You gotta walk to the garage. Takes about 3 mins.",
              standard: "No, ride-share drivers can't pick up curbside at the terminal—that's only for taxis and hotel shuttles. You need to walk to the parking garage. It's about a 3-minute walk.",
              formal: "No, ride-share operators are not permitted to collect passengers curbside at the terminal; that privilege is reserved exclusively for licensed taxis and hotel shuttles. You will need to proceed to the parking garage. The walk is approximately three minutes.",
            },
            keyPhrases: [
              { en: "terminal curb", zh: "航站楼路边" },
              { en: "hotel shuttles", zh: "酒店接驳车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry, no — Uber and Lyft can't come to the terminal. You have to go to the designated area in the garage. It's a short walk.",
                textZh: "抱歉，不行——Uber和Lyft不能到航站楼。要走到车库的指定区域。很近的。",
                actionHint: "走到停车场",
                frequency: "common",
              },
              {
                textEn:
                  "Ride-shares aren't allowed to pull up at the curb. Only taxis and hotel shuttles can. The pickup is about 3 minutes away on foot.",
                textZh: "网约车不能在路边停车。只有出租车和酒店接驳车可以。上车点步行约3分钟。",
                actionHint: "步行到上车点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I found Spot C but my driver isn't here yet. The app says 4 minutes.",
            textZh: "我找到C点了，但司机还没到。APP显示还要4分钟。",
            culturalNote: "美国机场通常很大，走路到指定上车点很正常。司机未到前，乘客应在指定地点等待，并通过APP沟通。",
            commonMistake: {
              wrong: "My driver still not here.",
              correct: "My driver isn't here yet.",
              explanation: "Still not here 听起来不自然，用 isn't here yet 更地道。",
            },
            casualVersion: "Found Spot C, but driver's not here yet. App says 4 more mins.",
            formalityVariants: {
              casual: "Okay, I'm at Spot C, but my driver's not here. App says another 4 mins.",
              standard: "I found Spot C but my driver isn't here yet. The app says 4 more minutes.",
              formal: "I have successfully located Spot C; however, my driver has not yet arrived. The application indicates an additional four-minute waiting period.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Hi, are you heading to the Marriott on 5th Avenue? I'm in a silver Toyota Camry. I can see you — I'm pulling up now.",
            textZh: "你好，你是去第五大道的万豪酒店吗？我是银色丰田凯美瑞。我看到你了——我正在靠过来。",
            culturalNote: "网约车司机接客时，通常会通过姓名、目的地和车型颜色来确认乘客，确保乘客上对车。",
            casualVersion: "Hey, Marriott on 5th? I'm the silver Camry. See ya, pulling up.",
            commonMistake: {
              wrong: "Hi, are you heading to Marriott on 5th Avenue? I am silver Toyota Camry. I see you, I am coming.",
              correct: "Hi, are you heading to the Marriott on 5th Avenue? I'm in a silver Toyota Camry. I see you — I'm pulling up now.",
              explanation: "酒店前需加“the”。表示驾驶或乘坐某车用“in a...”或“driving a...”，而不是“I am...”。“pulling up”表示车辆正在靠近。",
            },
            formalityVariants: {
              casual: "Yo, Marriott, 5th Ave? Silver Camry. Got you, pulling up now.",
              standard: "Hi, are you heading to the Marriott on 5th Avenue? I'm in a silver Toyota Camry. I see you — I'm pulling up now.",
              formal: "Good day. Are you indeed destined for the Marriott hotel on 5th Avenue? I am operating a silver Toyota Camry. I have identified your location and am approaching presently.",
            },
            keyPhrases: [{ en: "pulling up", zh: "靠过来/停过来" }],
            alternativeExpressions: [
              {
                textEn: "Hey! I'm your Uber. White Honda Civic, just around the corner.",
                textZh: "嗨！我是你的Uber司机。白色本田思域，就在拐角处。",
                actionHint: "确认车辆信息后上车",
                frequency: "common",
              },
            ],
            vocabNotes: {
              "pulling up": {
                meaningInContext: "在这句话里表示：正在把车开过来/停过来",
                similarUsage: "类似用法：I'll pull up right in front of the door.（我把车停到门口）",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's me! Is it okay if I put my suitcase in the trunk?",
            textZh: "对，是我！我可以把箱子放后备箱吗？",
            culturalNote: "在搭乘出租车或网约车时，询问是否可以将行李放入后备箱是礼貌的做法，而非直接放置。",
            casualVersion: "Yep, that's me! Can I toss my bags in the trunk?",
            commonMistake: {
              wrong: "Yes, that's me! Can I put my luggage in trunk?",
              correct: "Yes, that's me! Can I put my bags in the trunk?",
              explanation: "“luggage”是不可数名词，用“bags”更常见。指特定车的后备箱时，“trunk”前需加“the”。",
            },
            formalityVariants: {
              casual: "Yeah, that's me! Bags in the trunk?",
              standard: "Yes, that's me! Can I put my bags in the trunk?",
              formal: "Indeed, that is correct! May I place my luggage in the vehicle's trunk compartment?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Sure, let me pop it open for you... All set. Buckle up! The GPS says 35 minutes to your hotel, but traffic looks light.",
            textZh: "当然，我帮你打开……好了。系好安全带！GPS显示到酒店35分钟，不过路上车不多。",
            culturalNote: "“Buckle up!”是美国司机常用的口语，表示“系好安全带”，非常自然和直接。",
            commonMistake: {
              wrong: "Tie your seatbelt!",
              correct: "Buckle up!",
              explanation: "Buckle up! 是系安全带最常见的口语，tie your seatbelt 不自然。",
            },
            casualVersion: "Yep, I'll pop it open... Alright. Buckle up! GPS says 35 to the hotel, but traffic's light.",
            formalityVariants: {
              casual: "Sure thing, I'll pop the trunk... Good to go. Buckle up! GPS says 35 to the hotel, but looks clear.",
              standard: "Sure, let me pop it open for you... All set. Buckle up! The GPS says 35 minutes to your hotel, but traffic looks light.",
              formal: "Certainly, allow me to open the trunk for your convenience. Your luggage is now secured. Please fasten your seatbelt. The GPS estimates a 35-minute journey to your hotel, though current traffic conditions appear favorable.",
            },
            keyPhrases: [
              { en: "pop it open", zh: "打开（后备箱）" },
              { en: "buckle up", zh: "系好安全带" },
              { en: "traffic looks light", zh: "路上车不多" },
            ],
            localVariants: {
              "en-US": "Let me pop the trunk.",
              "en-GB": "Let me open the boot.",
              "en-AU": "I'll pop the boot for ya.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Trunk's open — toss your bag in. Seat belt on! GPS says 35 minutes, looks like smooth sailing.",
                textZh: "后备箱开了——把包放进去。系上安全带！GPS显示35分钟，看起来一路畅通。",
                actionHint: "系好安全带出发",
                frequency: "common",
              },
              {
                textEn: "Let me get the trunk for you... All good. Buckle up and we'll be there in about half an hour.",
                textZh: "我来开后备箱……好了。系好安全带，大约半小时到。",
                actionHint: "准备出发",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场餐饮 ====================
  {
    id: "airport-18",
    category: "airport",
    titleZh: "机场餐饮",
    titleEn: "Airport Dining",
    description: "在机场餐厅或快餐店点餐、询问餐食选项",
    otherRole: "餐厅服务员/收银员",
    otherRoleIcon: "utensils",
    flows: [
      {
        id: "quick-meal",
        titleZh: "快速用餐",
        titleEn: "Quick Meal at Food Court",
        description: "在美食广场快速点餐和用餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, what do you recommend for a quick meal? My flight boards in 40 minutes.",
            textZh: "你好，有什么推荐的快餐吗？我的航班40分钟后登机。",
            casualVersion: "Hey, what's good for a quick bite? My flight boards in 40.",
            commonMistake: {
              wrong: "What quick meal do you recommend?",
              correct: "What do you recommend for a quick meal?",
              explanation: "中式英语的常见语序问题，'for a quick meal' 是修饰'recommend'的介词短语。",
            },
            formalityVariants: {
              casual: "Hey, what's quick to eat? Gotta board in 40.",
              standard: "Hi, what do you recommend for a quick meal? My flight boards in 40 minutes.",
              formal:
                "Good morning/afternoon, could you please recommend something suitable for a quick meal? I have a flight boarding in approximately 40 minutes.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Our burgers and sandwiches are the fastest — ready in about 5 minutes. The pasta takes a bit longer, around 10 to 12 minutes.",
            textZh: "汉堡和三明治最快——大约5分钟就好。意面要久一点，大约10到12分钟。",
            commonMistake: {
              wrong: "Our burgers and sandwiches are fast, about 5 minutes ready. The pasta needs 10 to 12 minutes.",
              correct: "Our burgers and sandwiches are the fastest — ready in about 5 minutes. The pasta takes a bit longer, around 10 to 12 minutes.",
              explanation: "自然地表达“X时间就好”通常用 \"ready in X minutes\" 或 \"takes about X minutes\"。",
            },
            keyPhrases: [
              { en: "ready in about 5 minutes", zh: "大约5分钟就好" },
              { en: "takes a bit longer", zh: "要久一点" },
            ],
            alternativeExpressions: [
              {
                textEn: "If you're short on time, I'd go with the grab-and-go section over there.",
                textZh: "如果赶时间，建议去那边的即取即走区。",
                actionHint: "看看即取区的选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "Burgers and sandwiches are quickest, ready in like 5. Pasta's a bit longer, 'bout 10, 12 mins.",
            formalityVariants: {
              casual: "Burgers and sandwiches are super fast, like 5 minutes. Pasta's more like 10, 12.",
              standard:
                "Our burgers and sandwiches are the fastest — ready in about 5 minutes. The pasta takes a bit longer, around 10 to 12 minutes.",
              formal:
                "Our burgers and sandwiches are the most expedient options, typically prepared within five minutes. The pasta dishes require a slightly longer preparation time, approximately ten to twelve minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have a chicken sandwich and a coffee, please. For here.",
            textZh: "要一个鸡肉三明治和一杯咖啡。在这吃。",
            casualVersion: "Gimme a chicken sandwich and a coffee. Eating here.",
            culturalNote: "在美国快餐店，点餐时常用'For here'或'To go'说明堂食或外带。",
            commonMistake: {
              wrong: "I want a chicken sandwich and a coffee.",
              correct: "I'll have a chicken sandwich and a coffee.",
              explanation: "'I want' 在美国听起来很生硬且不礼貌，用 'I'll have' 或 'Can I get' 更自然。",
            },
            formalityVariants: {
              casual: "Chicken sandwich and a coffee, please. Eating here.",
              standard: "I'll have a chicken sandwich and a coffee, please. For here.",
              formal: "I would like to order a chicken sandwich and a coffee, please. I will be dining in.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "What size coffee? Small, medium, or large? And would you like it hot or iced?",
            textZh: "咖啡要什么杯型？小杯、中杯还是大杯？要热的还是冰的？",
            commonMistake: {
              wrong: "What cup size coffee? Hot or ice coffee?",
              correct: "What size coffee? Small, medium, or large? And would you like it hot or iced?",
              explanation: "询问杯型用 \"what size\"，冰咖啡是 \"iced coffee\" 而不是 \"ice coffee\"。",
            },
            keyPhrases: [
              { en: "what size", zh: "什么杯型" },
              { en: "for here", zh: "在这吃/堂食" },
            ],
            alternativeExpressions: [
              {
                textEn: "Small, medium, or large? Hot or iced?",
                textZh: "小杯、中杯还是大杯？热的还是冰的？",
                actionHint: "选择杯型和温度",
                frequency: "common",
              },
              {
                textEn: "What size would you like that coffee? And do you want it hot?",
                textZh: "咖啡要什么大小？要热的吗？",
                actionHint: "告诉对方偏好",
                frequency: "common",
              },
            ],
            casualVersion: "Coffee size? Small, medium, large? Hot or iced?",
            formalityVariants: {
              casual: "Size? Small, medium, large? Hot or iced?",
              standard: "What size coffee? Small, medium, or large? And would you like it hot or iced?",
              formal:
                "Which size coffee would you prefer? We offer small, medium, and large. Additionally, would you prefer it hot or iced?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Medium hot coffee, please. Oh, and do you have any vegetarian options? My friend doesn't eat meat.",
            textZh: "中杯热咖啡。对了，有素食选项吗？我朋友不吃肉。",
            casualVersion: "Medium hot coffee, please. Oh, and any veggie options? My friend's vegetarian.",
            commonMistake: {
              wrong: "Do you have vegetarian choices?",
              correct: "Do you have any vegetarian options?",
              explanation: "询问食物种类时，'options'比'choices'更常用和自然。",
            },
            formalityVariants: {
              casual: "Medium hot coffee. Got any veggie stuff? My friend's vegetarian.",
              standard:
                "Medium hot coffee, please. Oh, and do you have any vegetarian options? My friend doesn't eat meat.",
              formal:
                "A medium hot coffee, please. Furthermore, I was wondering if you offer any vegetarian selections, as my friend adheres to a vegetarian diet.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Sure! We have a garden salad, a veggie wrap, and a mushroom soup. The veggie wrap is really popular.",
            textZh: "有的！我们有田园沙拉、蔬菜卷饼和蘑菇汤。蔬菜卷饼很受欢迎。",
            commonMistake: {
              wrong: "Yes! We have garden salad, veggie wrap, and mushroom soup. Veggie wrap is very welcomed.",
              correct: "Sure! We have a garden salad, a veggie wrap, and a mushroom soup. The veggie wrap is really popular.",
              explanation: "形容食物受欢迎用 \"popular\" 或 \"a hit\"，而不是 \"welcomed\"。",
            },
            keyPhrases: [
              { en: "vegetarian options", zh: "素食选项" },
              { en: "veggie wrap", zh: "蔬菜卷饼" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do! There's a garden salad, veggie wrap, and mushroom soup. The wrap is a bestseller.",
                textZh: "有的！有田园沙拉、蔬菜卷饼和蘑菇汤。卷饼是畅销款。",
                actionHint: "帮朋友点菜",
                frequency: "common",
              },
              {
                textEn: "Yep, a few options — salad, veggie wrap, or soup. All meat-free.",
                textZh: "有好几种——沙拉、蔬菜卷饼或汤。都不含肉。",
                actionHint: "选一个素食",
                frequency: "common",
              },
            ],
            casualVersion: "Yep! Got a garden salad, veggie wrap, and mushroom soup. Veggie wrap's super popular.",
            formalityVariants: {
              casual: "Yeah! We've got a garden salad, veggie wrap, mushroom soup. Veggie wrap's pretty popular.",
              standard:
                "Sure! We have a garden salad, a veggie wrap, and a mushroom soup. The veggie wrap is really popular.",
              formal:
                "Certainly! Our vegetarian offerings include a garden salad, a veggie wrap, and a mushroom soup. The veggie wrap is particularly well-received.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, add a veggie wrap too. How much is everything?",
            textZh: "好，再加一个蔬菜卷饼。一共多少钱？",
            casualVersion: "Awesome, I'll take a veggie wrap too. What's the total?",
            commonMistake: {
              wrong: "How much is all?",
              correct: "How much is everything?",
              explanation: "'How much is all?' 是中式说法，应为 'How much is everything?' 或 'What's the total?'。",
            },
            formalityVariants: {
              casual: "Cool, throw in a veggie wrap. What's the damage?",
              standard: "Great, add a veggie wrap too. How much is everything?",
              formal: "Excellent, please add a veggie wrap as well. Could you inform me of the total cost?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "That's $8.50 for the chicken sandwich, $4.50 for the coffee, and $9 for the veggie wrap. Your total is $22 before tax. Would you like to add a tip?",
            textZh: "鸡肉三明治8.50美元，咖啡4.50美元，蔬菜卷饼9美元。税前一共22美元。要加小费吗？",
            commonMistake: {
              wrong: "Chicken sandwich $8.50, coffee $4.50, veggie wrap $9. Total $22. Do you want to add tip?",
              correct: "That's $8.50 for the chicken sandwich, $4.50 for the coffee, and $9 for the veggie wrap. That's $22 total before tax. Would you like to add a tip?",
              explanation: "准确表述含税前总价用 \"total before tax\"。询问小费通常用 \"Would you like to add a tip?\"",
            },
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "add a tip", zh: "加小费" },
            ],
            culturalNote:
              "在美国快餐店，点餐付款时屏幕可能会弹出小费选项。快餐类通常不强制给小费，但有些人会选择给15-20%。",
            alternativeExpressions: [
              {
                textEn: "Alright, that's $22 plus tax. The screen will ask if you'd like to leave a tip.",
                textZh: "好的，22美元加税。屏幕会问您是否要留小费。",
                actionHint: "选择小费金额",
                frequency: "common",
              },
              {
                textEn: "Your total comes to $22 before tax. Would you like to add a gratuity?",
                textZh: "税前一共22美元。要加小费吗？",
                actionHint: "决定是否给小费",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Chicken sandwich is $8.50, coffee's $4.50, veggie wrap's $9. Total's $22 before tax. Wanna add a tip?",
            formalityVariants: {
              casual: "So, $8.50 for the sandwich, $4.50 for coffee, $9 for the wrap. Comes to $22 pre-tax. Tip?",
              standard:
                "That's $8.50 for the chicken sandwich, $4.50 for the coffee, and $9 for the veggie wrap. Your total is $22 before tax. Would you like to add a tip?",
              formal:
                "The chicken sandwich is $8.50, the coffee is $4.50, and the veggie wrap is $9.00. Your subtotal is $22.00, exclusive of tax. Would you care to add a gratuity?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll add 15%. Can I pay with Apple Pay?",
            textZh: "加15%小费。可以用Apple Pay吗？",
            casualVersion: "Yeah, 15%. Can I use Apple Pay?",
            culturalNote: "即使在快餐店，美国小费文化也很普遍，通常在支付时选择小费比例。",
            commonMistake: {
              wrong: "Can I use Apple Pay to pay?",
              correct: "Can I pay with Apple Pay?",
              explanation: "表达支付方式时，用 'pay with [method]' 或 'use [method]' 即可，避免冗余。",
            },
            formalityVariants: {
              casual: "15%. Apple Pay okay?",
              standard: "I'll add 15%. Can I pay with Apple Pay?",
              formal: "I would like to add a 15% gratuity. May I use Apple Pay for the payment?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Yes, just tap your phone on the reader... Perfect, payment went through. Your order number is 47. We'll call your number when it's ready.",
            textZh: "可以，把手机靠近读卡器……好了，付款成功。您的单号是47。做好了我们会叫号。",
            commonMistake: {
              wrong: "Yes, just tap your phone. Payment done. Your order number 47. We will call your number when it is ready.",
              correct: "Yes, just tap your phone on the reader... Perfect, payment went through. Your order number is 47. We'll call your number when it's ready.",
              explanation: "付款成功常用 \"payment went through\"。指明具体某个号准备好用 \"call your number\"。",
            },
            keyPhrases: [
              { en: "tap your phone", zh: "把手机靠近" },
              { en: "reader", zh: "读卡器" },
              { en: "order number", zh: "单号" },
              { en: "call your number", zh: "叫号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just hold your phone over the terminal... Done! You're number 47. We'll shout it out when it's ready.",
                textZh: "把手机放在终端上方……好了！您是47号。做好了会喊号。",
                actionHint: "等叫号取餐",
                frequency: "common",
              },
              {
                textEn: "Tap right here... Payment received. Your number is 47, pick up at the counter when called.",
                textZh: "在这里刷一下……付款成功。您的号是47，叫号后到柜台取。",
                actionHint: "注意叫号",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, just tap your phone on the reader... Cool, payment's good. Order number 47. We'll call you when it's ready.",
            formalityVariants: {
              casual: "Sure, just tap it... Got it, payment successful. Order 47. We'll call when it's done.",
              standard:
                "Yes, just tap your phone on the reader... Perfect, payment went through. Your order number is 47. We'll call your number when it's ready.",
              formal:
                "Certainly, please tap your mobile device onto the reader... Excellent, the payment has been successfully processed. Your order number is 47. We will announce your number once your order is prepared.",
            },
          },
        ],
      },
      {
        id: "dietary-needs",
        titleZh: "特殊饮食需求",
        titleEn: "Dietary Restrictions",
        description: "有过敏、宗教饮食或特殊饮食需求时点餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a nut allergy. Can you tell me which items on the menu are nut-free?",
            textZh: "你好，我对坚果过敏。能告诉我菜单上哪些是不含坚果的吗？",
            casualVersion: "Hey, got a nut allergy. Can you tell me what on the menu's nut-free?",
            commonMistake: {
              wrong: "Can you tell me which dishes are no nuts?",
              correct: "Can you tell me which dishes are nut-free?",
              explanation: "“No nuts” 说法不自然，通常用 “nut-free” 或 “free of nuts”.",
            },
            formalityVariants: {
              casual: "Hey, I'm allergic to nuts. What on the menu is nut-free?",
              standard: "Hi, I have a nut allergy. Could you tell me which items on the menu are nut-free?",
              formal:
                "Good morning/afternoon, I have a severe nut allergy. Could you please advise me on which menu selections are free of nuts?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course. Let me check for you. The grilled chicken, the Caesar salad without croutons, and the tomato soup are all nut-free. I should mention that our kitchen does handle nuts, so there's a small risk of cross-contamination.",
            textZh:
              "当然。让我帮您查一下。烤鸡、不加面包丁的凯撒沙拉和番茄汤都不含坚果。不过我要说明，我们的厨房会处理坚果，所以有少量交叉污染的风险。",
            casualVersion: "Sure. Let me see. Grilled chicken, Caesar salad (no croutons), and tomato soup are all nut-free. Just know our kitchen handles nuts, so there's a slight cross-contamination risk.",
            commonMistake: {
              wrong: "Yes. Let me check for you. Grilled chicken, Caesar salad without croutons, tomato soup are all no nut. But our kitchen deals with nuts, so there is little cross risk.",
              correct: "Of course. Let me check for you. The grilled chicken, the Caesar salad without croutons, and the tomato soup are all nut-free. I should mention that our kitchen does handle nuts, so there is a slight risk of cross-contamination.",
              explanation: "形容不含坚果用 \"nut-free\"。\"处理坚果\" 用 \"handle nuts\" 更地道。\"交叉污染\" 是 \"cross-contamination\"。",
            },
            formalityVariants: {
              casual: "Sure. Let me see. Grilled chicken, Caesar salad (no croutons), tomato soup are nut-free. Heads up, kitchen handles nuts, so slight cross-contamination risk.",
              standard: "Of course. Let me check for you. The grilled chicken, the Caesar salad without croutons, and the tomato soup are all nut-free. I should mention that our kitchen does handle nuts, so there is a slight risk of cross-contamination.",
              formal: "Certainly. Allow me to verify that for you. The grilled chicken, the Caesar salad (provided without croutons), and the tomato soup are all confirmed to be nut-free. However, I must inform you that our kitchen processes nuts, and therefore, a minimal risk of cross-contamination does exist.",
            },
            keyPhrases: [
              { en: "nut allergy", zh: "坚果过敏" },
              { en: "nut-free", zh: "不含坚果" },
              { en: "cross-contamination", zh: "交叉污染" },
            ],
            vocabNotes: {
              "cross-contamination": {
                meaningInContext: "在这句话里表示：厨房处理坚果食材时，少量坚果成分可能意外接触到其他食物",
                similarUsage:
                  "类似用法：This product is made in a facility that also processes peanuts.（本产品在同时加工花生的工厂生产）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Let me look that up... The chicken and tomato soup are both nut-free. Just so you know, we can't guarantee zero cross-contact.",
                textZh: "我查一下……烤鸡和番茄汤都不含坚果。不过提醒您，我们无法保证完全没有交叉接触。",
                actionHint: "评估过敏风险",
                frequency: "common",
              },
              {
                textEn:
                  "A few items are safe — grilled chicken, soup, and salad without croutons. But our kitchen does use nuts in other dishes.",
                textZh: "有几样是安全的——烤鸡、汤和不加面包丁的沙拉。但我们厨房其他菜品会用到坚果。",
                actionHint: "选择安全菜品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thanks for letting me know. Is the allergy severe enough to worry about cross-contamination? I'll go with the grilled chicken. Can I also ask — does the dressing contain any dairy?",
            textZh: "谢谢告知。交叉污染的程度我需要担心吗？那我要烤鸡。另外想问——酱汁里含乳制品吗？",
            casualVersion: "Thanks for the heads-up. Is the allergy bad enough to worry about cross-contamination? I'll get the grilled chicken. Quick thing—any dairy in the dressing?",
            commonMistake: {
              wrong: "Thanks for telling me. Is the allergy so serious that I need to worry about cross-contamination? I will have grilled chicken. Also want to ask—does sauce contain dairy?",
              correct: "Thanks for letting me know. Is the allergy severe enough to worry about cross-contamination? I'll have the grilled chicken. And quick question—does the dressing contain dairy?",
              explanation: "表达“告知我”用 \"letting me know\"。询问过敏程度用 \"severe enough to worry about\"。询问是否含乳制品用 \"contain dairy\"。",
            },
            formalityVariants: {
              casual: "Thanks for the heads-up. Is it bad enough to worry about cross-contamination? I'll get the grilled chicken. Quick thing—any dairy in the dressing?",
              standard: "Thanks for letting me know. Is the allergy severe enough to worry about cross-contamination? I'll have the grilled chicken. And quick question—does the dressing contain dairy?",
              formal: "Thank you for that information. Would you advise whether the allergy is sufficiently severe to warrant concern regarding cross-contamination? I will proceed with the grilled chicken. Also, may I inquire if the dressing contains any dairy products?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The house dressing does contain dairy. We have an olive oil and lemon dressing that's dairy-free. I can also serve it on the side so you can control the amount.",
            textZh:
              "本店的酱汁含乳制品。我们有橄榄油柠檬酱汁是不含乳制品的。我也可以把酱汁放在旁边，这样您可以控制用量。",
            casualVersion: "Our house dressing has dairy. But we got an olive oil and lemon one that's dairy-free. Or I can put it on the side, so you can control how much.",
            commonMistake: {
              wrong: "Our house dressing has dairy. We have an olive oil lemon dressing which is no dairy. I can put the dressing at side, so you can control.",
              correct: "The house dressing does contain dairy. We have an olive oil and lemon dressing that is dairy-free. I can also put the dressing on the side, so you can control the amount.",
              explanation: "“不含乳制品” 用 \"dairy-free\"。\"放在旁边\" 用 \"on the side\"。",
            },
            formalityVariants: {
              casual: "House dressing has dairy. But we got an olive oil and lemon one that's dairy-free. Or I can put it on the side, you control how much.",
              standard: "The house dressing does contain dairy. We have an olive oil and lemon dressing that is dairy-free. I can also put the dressing on the side, so you can control the amount.",
              formal: "The house dressing does indeed contain dairy. However, we offer an olive oil and lemon dressing that is dairy-free. Additionally, I can serve the dressing on the side, allowing you to regulate the quantity.",
            },
            keyPhrases: [
              { en: "dairy-free", zh: "不含乳制品" },
              { en: "on the side", zh: "放在旁边" },
              { en: "control the amount", zh: "控制用量" },
            ],
            vocabNotes: {
              "on the side": {
                meaningInContext: "在这句话里表示：酱汁单独放在旁边，不直接浇在食物上",
                similarUsage: "类似用法：Can I get the sauce on the side?（酱汁能放旁边吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "The regular dressing has dairy, but we have a lemon vinaigrette that's dairy-free. Want it on the side?",
                textZh: "普通酱汁含乳制品，但有一款柠檬油醋汁不含。要放旁边吗？",
                actionHint: "选无乳酱汁",
                frequency: "common",
              },
              {
                textEn: "That one has milk in it. I can swap it for olive oil and lemon — no dairy at all.",
                textZh: "那款含牛奶。我可以换成橄榄油柠檬汁——完全不含乳制品。",
                actionHint: "换酱汁",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "The olive oil dressing sounds good. On the side, please. Also, is there a halal option? My colleague needs halal food.",
            textZh: "橄榄油酱汁挺好。放旁边吧。另外，有清真餐吗？我同事需要吃清真的。",
            casualVersion: "Olive oil dressing sounds good. On the side, please. Also, got any halal? My colleague needs halal.",
            commonMistake: {
              wrong: "Olive oil dressing good. Put on side, please. Also, do you have halal? My colleague needs halal food.",
              correct: "The olive oil dressing sounds good. On the side, please. Also, is there a halal option? My colleague needs halal food.",
              explanation: "“听起来不错” 用 \"sounds good\"。\"放在旁边\" 用 \"on the side\"。\"清真餐\" 通常说 \"halal option\" 或 \"halal food\"。",
            },
            formalityVariants: {
              casual: "Olive oil dressing sounds good. On the side. Also, any halal? My colleague needs it.",
              standard: "The olive oil dressing sounds good. On the side, please. Also, is there a halal option? My colleague needs halal food.",
              formal: "The olive oil dressing sounds satisfactory. Kindly serve it on the side, please. Furthermore, do you offer any halal options, as my colleague requires halal-certified cuisine?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "We don't have halal certification, but the seafood dishes and vegetarian options would work. There's also a halal restaurant on the other side of the food court — it's called 'Saffron Kitchen.'",
            textZh: "我们没有清真认证，但海鲜和素食可以选择。美食广场另一边也有一家清真餐厅——叫'藏红花厨房'。",
            casualVersion: "We're not halal-certified, but seafood and veggie stuff's an option. Plus, there's a halal spot across the food court called...",
            commonMistake: {
              wrong: "We don't have halal certificated, but seafood and vegetarian options can choose. There is also a halal restaurant on the other side food court, called...",
              correct: "We don't have halal certification, but seafood and vegetarian options are available. There's also a halal restaurant on the other side of the food court called...",
              explanation: "“清真认证” 用 \"halal certification\"。提供选择用 \"options are available\"。",
            },
            formalityVariants: {
              casual: "Not halal-certified here, but seafood and veggie stuff's an option. There's a halal spot across the food court called...",
              standard: "We don't have halal certification, but seafood and vegetarian options are available. There's also a halal restaurant on the other side of the food court called...",
              formal: "We do not possess halal certification, however, we do offer seafood and vegetarian options. Additionally, there is a halal-certified restaurant situated on the opposite side of the food court by the name of...",
            },
            keyPhrases: [
              { en: "halal certification", zh: "清真认证" },
              { en: "the other side of the food court", zh: "美食广场另一边" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're not halal-certified, but the seafood and veggie dishes are fine. There's also a halal place across the food court.",
                textZh: "我们没有清真认证，但海鲜和素菜没问题。美食广场对面也有一家清真餐厅。",
                actionHint: "推荐清真餐厅",
                frequency: "common",
              },
              {
                textEn:
                  "Our kitchen isn't halal, sorry. But there's Saffron Kitchen on the other end — they're fully halal.",
                textZh: "我们厨房不是清真的，抱歉。不过另一头有家'藏红花厨房'——完全清真。",
                actionHint: "去另一家餐厅",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, I'll let them know. Can I also get a bottle of water?",
            textZh: "谢谢，我告诉他。再来一瓶水。",
            casualVersion: "Thanks, I'll let him know. Grab me a water too.",
            commonMistake: {
              wrong: "Thanks, I tell him. And again a bottle of water.",
              correct: "Thanks, I'll tell him. And I'll have a bottle of water.",
              explanation: "“我会告诉他” 用 \"I'll tell him\"。\"再来一瓶水\" 用 \"I'll have a bottle of water\" 或 \"Can I get another water?\"",
            },
            formalityVariants: {
              casual: "Thanks, I'll let him know. Grab me a water too.",
              standard: "Thanks, I'll tell him. And I'll have a bottle of water.",
              formal: "Thank you, I shall relay that information to him. Additionally, I would like a bottle of water.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Still or sparkling?",
            textZh: "纯净水还是气泡水？",
            casualVersion: "Still or sparkling?",
            commonMistake: {
              wrong: "Clean water or bubble water?",
              correct: "Still or sparkling?",
              explanation: "瓶装的“纯净水”或“矿泉水”是 \"still water\"，而“气泡水”是 \"sparkling water\"。",
            },
            formalityVariants: {
              casual: "Still or sparkling?",
              standard: "Still or sparkling?",
              formal: "Would you prefer still or sparkling water?",
            },
            keyPhrases: [
              { en: "still", zh: "纯净水/不带气的" },
              { en: "sparkling", zh: "气泡水/带气的" },
            ],
            culturalMeaning:
              "在欧美餐厅点水时，服务员通常会问'still or sparkling'。Still water是不带气的纯净水，sparkling是带气泡的。如果你想要免费自来水可以说'tap water please'。",
            alternativeExpressions: [
              {
                textEn: "Flat or fizzy?",
                textZh: "不带气的还是带气的？",
                actionHint: "选择水的类型",
                frequency: "common",
              },
              {
                textEn: "Would you like still water or sparkling? We also have flavored water.",
                textZh: "要纯净水还是气泡水？我们也有调味水。",
                actionHint: "选择一种",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Still water, please. Actually, can I just get tap water? Is that free?",
            textZh: "纯净水。等等，我要自来水行吗？免费的吗？",
            casualVersion: "Still water, please. Wait, can I just get tap water? Is that free?",
            culturalNote: "在美国餐馆，自来水通常免费且可饮用，点餐时直接要求即可。",
            commonMistake: {
              wrong: "Still water. Wait, can I want tap water? Is it free?",
              correct: "Still water, please. Actually, can I just get tap water? Is that free?",
              explanation: "美国餐馆自来水通常免费。\"can I get tap water\" 是地道说法。\"Is that free?\" 更自然。",
            },
            formalityVariants: {
              casual: "Still water. Wait, can I just get tap water? Is that free?",
              standard: "Still water, please. Actually, can I just get tap water? Is that free?",
              formal: "Still water, if you please. Actually, may I simply request tap water? Is there a charge for it?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely, tap water is free. I'll bring a glass with your meal. Your grilled chicken with olive oil dressing on the side will be ready in about 8 minutes.",
            textZh: "当然，自来水是免费的。我会跟您的餐一起送过来。您的烤鸡配橄榄油酱汁（放旁边）大约8分钟好。",
            casualVersion: "Yep, tap water's free. I'll bring it with your food. Grilled chicken with olive oil dressing (on the side) should be ready in, like, 8 mins.",
            commonMistake: {
              wrong: "Of course, tap water is free. I will give it with your meal. Your grilled chicken with olive oil dressing (on side) about 8 minutes ready.",
              correct: "Absolutely, tap water is free. I'll bring it over with your meal. Your grilled chicken with olive oil dressing (on the side) will be ready in about 8 minutes.",
              explanation: "“送过来” 用 \"bring it over\"。\"准备好\" 用 \"will be ready in X minutes\"。\"在旁边\" 用 \"on the side\"。",
            },
            formalityVariants: {
              casual: "Yep, tap water's free. I'll bring it with your food. Grilled chicken with olive oil dressing (on the side) should be ready in, like, 8 mins.",
              standard: "Absolutely, tap water is free. I'll bring it over with your meal. Your grilled chicken with olive oil dressing (on the side) will be ready in about 8 minutes.",
              formal: "Certainly, tap water is complimentary. I shall bring it to you with your meal. Your grilled chicken, accompanied by olive oil dressing served on the side, will be prepared in approximately 8 minutes.",
            },
            keyPhrases: [{ en: "tap water", zh: "自来水" }],
            alternativeExpressions: [
              {
                textEn: "Sure, tap water is no problem — it's free. I'll bring it with your food.",
                textZh: "当然，自来水没问题——免费的。跟您的餐一起端过来。",
                actionHint: "等餐到齐",
                frequency: "common",
              },
              {
                textEn: "Of course! No charge for tap water. Your order will be out in about 8 minutes.",
                textZh: "当然可以！自来水免费。您的餐大约8分钟好。",
                actionHint: "稍等片刻",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 遗失物品 ====================
  {
    id: "airport-19",
    category: "airport",
    titleZh: "遗失物品",
    titleEn: "Lost Items at Airport",
    description: "在机场丢失物品后寻找帮助，包括失物招领处",
    otherRole: "机场工作人员/失物招领处",
    otherRoleIcon: "search",
    flows: [
      {
        id: "lost-on-plane",
        titleZh: "飞机上遗失物品",
        titleEn: "Item Left on Plane",
        description: "下机后发现物品遗留在飞机上",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think I left my jacket on the plane. I just got off flight UA 852.",
            textZh: "打扰了，我好像把外套落在飞机上了。我刚下UA 852航班。",
            casualVersion: "Hey, I left my jacket on the plane — UA 852.",
            commonMistake: {
              wrong: "Excuse me, I think I left my jacket in the plane.",
              correct: "Excuse me, I think I left my jacket on the plane.",
              explanation: "物品留在交通工具上，用 'on the plane/bus/train' 更常见、地道，而非 'in the plane'。",
            },
            formalityVariants: {
              casual: "Hey, I think I left my jacket on the plane. Just got off UA 852.",
              standard: "Excuse me, I think I left my jacket on the plane. I just got off flight UA 852.",
              formal:
                "Pardon me, I believe I may have inadvertently left my jacket on the aircraft. I was a passenger on flight UA 852, which has just arrived.",
            },
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "I'm sorry to hear that. Which seat were you in? And can you describe the jacket?",
            textZh: "很抱歉听到这个。您坐在哪个座位？能描述一下外套吗？",
            commonMistake: {
              wrong: "Can you describe the jacket?",
              correct: "Could you describe the jacket for me?",
              explanation: "“can you” 直接问可能听起来不够礼貌，加 “please” 或换成 “could you” 更柔和",
            },
            keyPhrases: [
              { en: "which seat", zh: "哪个座位" },
              { en: "describe", zh: "描述" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh no. Do you remember your seat number? What does the jacket look like?",
                textZh: "哦不。您记得座位号吗？外套什么样的？",
                actionHint: "回忆座位号和物品外观",
                frequency: "common",
              },
            ],
            casualVersion: "Ah, shoot, sorry to hear that. What seat were you in? And can you describe the jacket?",
            formalityVariants: {
              casual: "Oh, sorry to hear that. Seat number? Describe the jacket?",
              standard: "I'm sorry to hear that. Which seat were you in? And can you describe the jacket?",
              formal:
                "I'm genuinely sorry to learn of this. Could you please provide your seat number, and a detailed description of the jacket?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I was in seat 14A, window seat. It's a black North Face down jacket. I put it in the overhead bin.",
            textZh: "我坐在14A，靠窗。是一件黑色北面羽绒服。放在头顶行李架上了。",
            casualVersion: "14A, window seat. Black North Face down jacket. Put it in the overhead bin.",
            commonMistake: {
              wrong: "I put it on the overhead bin.",
              correct: "I put it in the overhead bin.",
              explanation: "'in the overhead bin' 指在行李舱内部，'on' 则表示在其表面。",
            },
            formalityVariants: {
              casual: "14A, window. It's a black North Face down jacket, I put it in the overhead.",
              standard:
                "I was in seat 14A, window seat. It's a black North Face down jacket. I put it in the overhead bin.",
              formal:
                "My assigned seat was 14A, a window seat. It is a black North Face brand down jacket, which I placed in the overhead compartment.",
            },
          },
          {
            speaker: "them",
            role: "地勤",
            textEn:
              "Okay, the aircraft is still at the gate. Let me radio the crew to check. Can you wait here for a few minutes?",
            textZh: "好的，飞机还在廊桥。我用对讲机联系机组人员去看看。您在这里等几分钟好吗？",
            commonMistake: {
              wrong: "Can you wait here for a few minutes?",
              correct: "Would you mind waiting here for a few minutes?",
              explanation: "直接的 “Can you” 有时不够礼貌，加 “please” 或换种说法更好",
            },
            keyPhrases: [
              { en: "at the gate", zh: "在廊桥/登机口" },
              { en: "radio the crew", zh: "用对讲机联系机组" },
            ],
            vocabNotes: {
              radio: {
                meaningInContext: "在这句话里表示：用对讲机/无线电联系（动词用法，不是收音机）",
                similarUsage: "类似用法：I'll radio security to let you through.（我用对讲机联系安保放你过去）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "The plane hasn't left the gate yet. Let me call the cabin crew. Give me a couple of minutes.",
                textZh: "飞机还没离开廊桥。我联系一下客舱机组。给我几分钟。",
                actionHint: "原地等待",
                frequency: "common",
              },
              {
                textEn:
                  "Good timing — the aircraft is still here. I'll have someone check right away. Can you hang tight?",
                textZh: "来得正好——飞机还在。我马上让人去查。您稍等一下？",
                actionHint: "耐心等候",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, plane's still at the gate. Lemme radio the crew to check. Can you wait here a sec?",
            formalityVariants: {
              casual: "Alright, the plane's still there. I'll call the crew. Can you wait?",
              standard:
                "Okay, the aircraft is still at the gate. Let me radio the crew to check. Can you wait here for a few minutes?",
              formal:
                "Understood. The aircraft remains at the gate. I will contact the crew via radio to conduct a search. Would you mind waiting here for a few moments?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, of course. Thank you so much.",
            textZh: "好的，当然。非常感谢。",
            commonMistake: {
              wrong: "Very thank.",
              correct: "Thank you so much.",
              explanation: "中文的“非常感谢”直译成英文时，不常用“Very thank”，而多用“Thank you so much”或“Thanks a lot”。",
            },
            casualVersion: "Yeah, for sure. Thanks a bunch.",
            formalityVariants: {
              casual: "Yeah, totally. Thanks!",
              standard: "Yes, of course. Thank you so much.",
              formal: "Yes, absolutely. I am most grateful for your assistance.",
            },
          },
          {
            speaker: "them",
            role: "地勤",
            textEn: "Good news! They found a black down jacket in the overhead bin above row 14. Is this yours?",
            textZh: "好消息！他们在14排上方的行李架找到了一件黑色羽绒服。是您的吗？",
            commonMistake: {
              wrong: "It is yours?",
              correct: "Is this yours?",
              explanation: "询问物品是否属于某人时，自然的说法是“Is this yours?”而不是“It is yours?”。",
            },
            keyPhrases: [
              { en: "good news", zh: "好消息" },
              { en: "overhead bin", zh: "头顶行李架" },
            ],
            alternativeExpressions: [
              {
                textEn: "They found it! A black down jacket in the bin above row 14. Does that sound right?",
                textZh: "找到了！14排上方行李架里的一件黑色羽绒服。是这件吗？",
                actionHint: "确认物品",
                frequency: "common",
              },
              {
                textEn: "We got lucky — the crew found a jacket matching your description. Here it is.",
                textZh: "运气不错——机组找到了跟您描述一致的外套。在这里。",
                actionHint: "核对物品",
                frequency: "common",
              },
            ],
            casualVersion: "Good news! They found a black down jacket in the overhead bin above row 14. Is it yours?",
            formalityVariants: {
              casual: "Good news! Found a black down jacket in the overhead above row 14. Yours?",
              standard: "Good news! They found a black down jacket in the overhead bin above row 14. Is this yours?",
              formal:
                "I have positive news. A black down jacket was located in the overhead compartment above row 14. Can you confirm if this item belongs to you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's mine! Thank you so much. What if it hadn't been found? Where would I go?",
            textZh: "是的，是我的！太感谢了。如果没找到的话，我该去哪里？",
            casualVersion: "Yeah, that's it! OMG, thank you! What if it hadn't been found? Like, where would I go?",
            commonMistake: {
              wrong: "What if it not found?",
              correct: "What if it hadn't been found?",
              explanation: "表达假设已发生但结果相反的情况，需用虚拟语气完成时，即 'hadn't been found'。",
            },
            formalityVariants: {
              casual: "Yes, that's mine! So thankful! What if they hadn't found it? Where would I even go?",
              standard: "Yes, that's mine! Thank you so much. What if it hadn't been found? Where would I go?",
              formal:
                "Yes, that is indeed my jacket! Thank you immensely. May I inquire about the procedure should it not have been located? Where would I have needed to proceed?",
            },
          },
          {
            speaker: "them",
            role: "地勤",
            textEn:
              "You would file a lost item report at the airline's baggage service counter, or you can do it online through the airline's website. They usually keep found items for 30 days. You'd need your flight details and a description of the item.",
            textZh:
              "您可以在航空公司的行李服务柜台提交遗失物品报告，或者在航空公司网站上在线提交。他们通常保留找到的物品30天。您需要提供航班信息和物品描述。",
            commonMistake: {
              wrong: "You will need to provide flight information.",
              correct: "You'd need to provide flight information.",
              explanation: "在假设情境中，用“You'd need to”更自然，表示“你将需要”或“你应该”，比“You will need to”更委婉。",
            },
            keyPhrases: [
              { en: "file a lost item report", zh: "提交遗失物品报告" },
              { en: "baggage service counter", zh: "行李服务柜台" },
              { en: "found items", zh: "找到的物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'd go to the baggage office and fill out a lost item form. You can also do it on the airline's website.",
                textZh: "去行李服务处填一份遗失物品表格。也可以在航空公司网站上提交。",
                actionHint: "记住行李服务处位置",
                frequency: "common",
              },
              {
                textEn:
                  "Head to the airline's service desk or report it online. They keep found items for about 30 days.",
                textZh: "去航空公司服务台或在网上报告。找到的物品保留大约30天。",
                actionHint: "尽快提交报告",
                frequency: "common",
              },
            ],
            casualVersion:
              "You'd file a lost item report at the airline's baggage counter, or online. They usually keep stuff for 30 days. You'd need your flight info and a description.",
            formalityVariants: {
              casual:
                "You'd just file a lost item report at baggage claim or online. They hold stuff for 30 days. Need flight details and a description.",
              standard:
                "You would file a lost item report at the airline's baggage service counter, or you can do it online through the airline's website. They usually keep found items for 30 days. You'd need your flight details and a description of the item.",
              formal:
                "In such a scenario, you would typically need to file a lost item report at the designated airline's baggage service counter, or alternatively, submit one online via the airline's official website. Found items are generally retained for a period of 30 days. You would be required to provide your flight details and a comprehensive description of the item.",
            },
          },
        ],
      },
      {
        id: "lost-in-terminal",
        titleZh: "航站楼丢失物品",
        titleEn: "Lost Item in Terminal",
        description: "在候机区或安检处丢失物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I think I left my laptop bag at the security checkpoint. I'm really worried.",
            textZh: "你好，我好像把笔记本电脑包落在安检处了。我非常着急。",
            culturalNote: "表达着急不能说 'I'm very urgent'",
            casualVersion: "Hey, think I left my laptop bag at security. I'm totally panicking.",
            commonMistake: {
              wrong: "I very worried.",
              correct: "I'm really worried.",
              explanation: "中文习惯说“我很担心”，直译过来“I very worried”不自然，需要加动词be。",
            },
            formalityVariants: {
              casual: "Hey, I think I left my laptop bag at security. I'm freaking out a bit.",
              standard: "Hi, I think I left my laptop bag at the security checkpoint. I'm really worried.",
              formal:
                "Excuse me, I believe I may have inadvertently left my laptop bag at the security checkpoint. I am quite concerned.",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Don't worry, items left at security are collected quite quickly. When did you go through security? And which checkpoint?",
            textZh: "别担心，安检处遗留的物品会很快被收走。您是什么时候过的安检？哪个安检口？",
            commonMistake: {
              wrong: "No need worry, items left at security.",
              correct: "Don't worry, items left at security.",
              explanation: "“不用担心”最自然的英文表达是“Don't worry”或“No worries”，而不是直译的“No need worry”。",
            },
            casualVersion: "No worries, stuff left at security gets picked up pretty fast. When'd you go through? And which one?",
            formalityVariants: {
              casual: "Don't sweat it, items left at security get collected quickly. When'd you go through? Which checkpoint?",
              standard: "Don't worry, items left at security are collected quite quickly. When did you go through security? And which checkpoint?",
              formal: "Please don't be concerned, as items left at security are typically collected rather promptly. Could you please specify when you proceeded through security, and which checkpoint you utilized?",
            },
            keyPhrases: [
              { en: "security checkpoint", zh: "安检口" },
              { en: "collected", zh: "被收走" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That happens more often than you'd think. Security usually sets those aside right away. Do you remember which lane you went through?",
                textZh: "这种情况比你想的常见。安检通常会马上把这些东西放到一边。你记得走的哪条通道吗？",
                actionHint: "回忆安检通道",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "About 30 minutes ago, at Checkpoint B. It's a gray backpack with a laptop inside.",
            textZh: "大约30分钟前，在B安检口。是一个灰色背包，里面有一台笔记本电脑。",
            commonMistake: {
              wrong: "It is a gray backpack, inside has a laptop.",
              correct: "It's a gray backpack with a laptop inside.",
              explanation: "描述物品时，常用“It's a [color] [item] with [contents] inside”的结构，而非直译的“inside has”。",
            },
            casualVersion: "Like 30 mins ago, Checkpoint B. It's a gray backpack, laptop inside.",
            formalityVariants: {
              casual: "About half an hour ago, at B. Gray backpack, laptop's in it.",
              standard: "About 30 minutes ago, at Checkpoint B. It's a gray backpack with a laptop inside.",
              formal: "Approximately 30 minutes ago, at Checkpoint B. It is a gray backpack, and it contains a laptop.",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Let me call security for you... They do have a gray backpack. You'll need to go back to the security area and show your ID to claim it. Go back through the corridor on the right — they won't make you go through security again.",
            textZh:
              "我帮您打电话给安检……他们确实有一个灰色背包。您需要回到安检区出示证件领取。从右边走廊回去——不用再过安检。",
            commonMistake: {
              wrong: "You no need to go through security again.",
              correct: "You won't have to go through security again.",
              explanation: "表达“不需要再次做某事”时，“You won't have to”比“You no need to”更自然和地道。",
            },
            casualVersion: "Lemme call security for ya... Yep, they got a gray backpack. Gotta go back to the security area and show your ID to claim it. Just head back through that corridor on the right — no need to go through security again.",
            formalityVariants: {
              casual: "I'll call security for you... They've got a gray backpack. You'll need to go back to security and show ID. Just use the corridor on the right – no re-screening.",
              standard: "Let me call security for you... They do have a gray backpack. You'll need to go back to the security area and show your ID to claim it. Go back through the corridor on the right — they won't make you go through security again.",
              formal: "Allow me to contact security on your behalf... They confirm possession of a gray backpack. You will be required to return to the security area and present valid identification to claim your item. Please utilize the corridor to your right for access – you will not be required to undergo re-screening.",
            },
            keyPhrases: [
              { en: "show your ID", zh: "出示证件" },
              { en: "claim it", zh: "认领" },
              { en: "go back through", zh: "从…回去" },
            ],
            vocabNotes: {
              claim: {
                meaningInContext: "在这句话里表示：认领、取回（自己的物品）",
                similarUsage: "类似用法：You can claim your baggage at Carousel 3.（您可以在3号转盘取行李）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Good news — security has your bag. Head back to Checkpoint B with your ID and they'll hand it over.",
                textZh: "好消息——安检那边有您的包。拿着证件回B安检口就能领回来。",
                actionHint: "带好证件去领取",
                frequency: "common",
              },
              {
                textEn:
                  "They've got a gray backpack matching your description. Just go back through that hallway and show your passport.",
                textZh: "他们有一个跟您描述一致的灰色背包。从那边走廊回去出示护照就行。",
                actionHint: "走右边走廊",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, what a relief! What if I had already left the airport? How would I get it back?",
            textZh: "太好了，松了一口气！如果我已经离开机场了怎么办？怎么拿回来？",
            casualVersion: "Phew, what a relief! What if I'd already left the airport? How would I get it?",
            commonMistake: {
              wrong: "How can I get it back?",
              correct: "How would I get it back?",
              explanation: "这里是虚拟语气，表示“如果已经离开了机场，那该怎么拿回来”，用would更准确自然。",
            },
            formalityVariants: {
              casual: "Oh, thank god! What if I'd already left? How'd I get it back?",
              standard: "Oh, what a relief! What if I had already left the airport? How would I get it back?",
              formal: "That is indeed a great relief. May I inquire what the procedure would be if I had already departed the airport? How would I arrange for its return?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "You'd contact the airport's lost and found department. Here's the phone number and website. You can file a claim online with a description and your contact details. If they find a match, they can ship it to you for a fee.",
            textZh:
              "您可以联系机场的失物招领部门。这是电话号码和网站。可以在网上提交认领申请，填写物品描述和联系方式。如果匹配到了，他们可以付费寄给您。",
            commonMistake: {
              wrong: "Here is phone number and website.",
              correct: "Here's the phone number and website.",
              explanation: "介绍电话号码和网站时，通常会说“Here's the [item]”并加上定冠词“the”，使得表达更完整和自然。",
            },
            casualVersion: "You'd hit up the airport's lost and found. Here's the number and website. You can file a claim online, describe it, give your deets. If they find a match, they can ship it to ya for a fee.",
            formalityVariants: {
              casual: "You'd contact the airport's lost and found. Got the number and site. You can file a claim online with details. If they find it, they can ship it to you for a fee.",
              standard: "You'd contact the airport's lost and found department. Here's the phone number and website. You can file a claim online with a description and your contact details. If they find a match, they can ship it to you for a fee.",
              formal: "You would need to contact the airport's designated lost and found department. I can provide you with the relevant telephone number and website. You may initiate a claim online by submitting a detailed description and your contact particulars. Should a match be identified, arrangements can be made for it to be shipped to your location, subject to an applicable fee.",
            },
            keyPhrases: [
              { en: "lost and found", zh: "失物招领" },
              { en: "file a claim", zh: "提交认领申请" },
              { en: "ship it to you", zh: "寄给您" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can also check the airport's lost property page online. They update it daily.",
                textZh: "您也可以查看机场网站上的失物招领页面。他们每天更新。",
                actionHint: "记下网站地址",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's very helpful. One more question — is there any way to track my belongings in the airport, like with AirTag?",
            textZh: "太有用了。再问一下——有没有办法在机场追踪我的物品，比如用AirTag？",
            casualVersion: "Super helpful. Quick question — any way to track my stuff in the airport, like with an AirTag?",
            commonMistake: {
              wrong: "Is there any method to track my belongings?",
              correct: "Is there any way to track my belongings?",
              explanation: "“method”通常指特定、系统的办法，而“way”更口语化，泛指任何一种方式。在此情境下，“way”更自然。",
            },
            formalityVariants: {
              casual: "Good to know. One more thing – can I track my stuff in the airport, like with AirTag?",
              standard: "That's very helpful. One more question — is there any way to track my belongings in the airport, like with AirTag?",
              formal: "That information is most valuable. I have one further query – is there a method by which one could track their belongings within the airport premises, perhaps utilizing a device such as an AirTag?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes, if you have an AirTag or similar tracker on your bag, you can use it to locate it within the airport. That's actually a great travel tip — put a tracker in your important bags. It makes situations like this much easier.",
            textZh:
              "有的，如果您的包上有AirTag或类似追踪器，可以用它在机场内定位。这其实是个很好的旅行建议——在重要的包里放个追踪器。遇到这种情况就容易多了。",
            commonMistake: {
              wrong: "It makes situations like this much easy.",
              correct: "It makes situations like this much easier.",
              explanation: "在比较“容易”的程度上，需要使用形容词的比较级“easier”，而非原级“easy”。",
            },
            casualVersion: "Yeah, if you've got an AirTag or something like that on your bag, you can totally use it to find it within the airport. That's actually a brilliant travel hack – stick a tracker in your important bags. Makes situations like this way less of a headache.",
            formalityVariants: {
              casual: "Yep, if you have an AirTag or similar tracker, you can use it to find your bag. That's a great tip – put a tracker in important bags. Makes things easier.",
              standard: "Yes, if you have an AirTag or similar tracker on your bag, you can use it to locate it within the airport. That's actually a great travel tip — put a tracker in your important bags. It makes situations like this much easier.",
              formal: "Indeed, if your bag is equipped with an AirTag or a comparable tracking device, you may utilize it to ascertain its location within the airport. This is, in fact, an excellent recommendation for travelers – placing a tracker in your essential luggage. It significantly simplifies such situations.",
            },
            keyPhrases: [
              { en: "tracker", zh: "追踪器" },
              { en: "locate", zh: "定位" },
            ],
            alternativeExpressions: [
              {
                textEn: "If you have an AirTag in it, you can track it on your phone. Great travel hack, by the way.",
                textZh: "如果里面有AirTag，可以用手机追踪。顺便说，这是个很好的旅行技巧。",
                actionHint: "以后放追踪器",
                frequency: "common",
              },
              {
                textEn:
                  "A tracker like AirTag would show you exactly where it is in the airport. Highly recommend putting one in your bags.",
                textZh: "AirTag之类的追踪器能精确显示它在机场的位置。强烈建议在包里放一个。",
                actionHint: "购买追踪器",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely do that next time. Thanks for your help!",
            textZh: "下次一定会的。谢谢帮忙！",
            casualVersion: "Oh, I'm totally doing that next time. Appreciate the help!",
            commonMistake: {
              wrong: "Thanks your help!",
              correct: "Thanks for your help!",
              explanation: "Thanks后面通常接for，构成“Thanks for [名词]”或“Thanks for [动名词]”。",
            },
            formalityVariants: {
              casual: "For sure, next time. Thanks!",
              standard: "I'll definitely do that next time. Thanks for your help!",
              formal: "I shall certainly implement that strategy for future travel. Thank you sincerely for your assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 机场药店/身体不适 ====================
  {
    id: "airport-20",
    category: "airport",
    titleZh: "身体不适与机场药店",
    titleEn: "Feeling Unwell & Airport Pharmacy",
    description: "在机场感到身体不适，寻找医疗帮助或购买药品",
    otherRole: "药店店员/医疗站工作人员",
    otherRoleIcon: "heart-pulse",
    flows: [
      {
        id: "buy-medicine",
        titleZh: "购买药品",
        titleEn: "Buying Medicine",
        description: "在机场药店购买常用药品",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a terrible headache. Do you have any painkillers?",
            textZh: "你好，我头疼得厉害。有止痛药吗？",
            commonMistake: {
              wrong: "I have a big headache.",
              correct: "I have a terrible/bad/severe headache.",
              explanation: "中文里说“大头疼”很常见，但英文通常用 terrible/bad/severe。",
            },
            casualVersion: "Hey, got anything for a headache?",
            formalityVariants: {
              casual: "Hey, got anything for a killer headache?",
              standard: "Hi, I have a terrible headache. Do you have any painkillers?",
              formal:
                "Good morning/afternoon. I'm experiencing a severe headache. Do you happen to carry any pain relief medication?",
            },
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn: "Yes, we have ibuprofen and acetaminophen. Do you have any allergies to medications?",
            textZh: "有的，我们有布洛芬和对乙酰氨基酚。您对药物有过敏吗？",
            commonMistake: {
              wrong: "Do you have any medicine allergy?",
              correct: "Do you have any allergies to medications?",
              explanation: "“allergies”用复数，并加上“to medications”更地道。",
            },
            keyPhrases: [
              { en: "ibuprofen", zh: "布洛芬" },
              { en: "acetaminophen", zh: "对乙酰氨基酚（扑热息痛）" },
              { en: "allergies to medications", zh: "药物过敏" },
            ],
            vocabNotes: {
              acetaminophen: {
                meaningInContext:
                  "在这句话里表示：一种常见止痛退烧药，美国叫acetaminophen（品牌名Tylenol），英国叫paracetamol",
                similarUsage: "类似用法：Take two acetaminophen every 6 hours.（每6小时吃两片对乙酰氨基酚）",
              },
            },
            localVariants: {
              "en-US": "We have Tylenol and Advil.",
              "en-GB": "We have paracetamol and ibuprofen.",
              "en-AU": "We've got Panadol and Nurofen.",
            },
            alternativeExpressions: [
              {
                textEn: "Sure, we carry Tylenol and Advil. Are you allergic to anything?",
                textZh: "有的，我们有泰诺和布洛芬。您有药物过敏吗？",
                actionHint: "告知过敏情况",
                frequency: "common",
              },
              {
                textEn: "We've got a few options for headaches. Any medication allergies I should know about?",
                textZh: "头痛药有几种选择。有药物过敏需要注意的吗？",
                actionHint: "确认无过敏",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, we got ibuprofen and acetaminophen. Any allergies?",
            formalityVariants: {
              casual: "Yup, got ibuprofen, acetaminophen. Any allergies?",
              standard: "Yes, we have ibuprofen and acetaminophen. Do you have any allergies to medications?",
              formal:
                "Yes, we stock both ibuprofen and acetaminophen. May I inquire if you have any known allergies to pharmaceutical products?",
            },
          },
          {
            speaker: "you",
            textEn: "No allergies. Which one do you recommend?",
            textZh: "没有过敏。你推荐哪个？",
            casualVersion: "Nah, no allergies. Which one's best?",
            commonMistake: {
              wrong: "No allergy.",
              correct: "No allergies.",
              explanation: "“Allergy”作可数名词，常用复数形式表示没有各类过敏情况。",
            },
            formalityVariants: {
              casual: "Nope, no allergies. Which one d'you recommend?",
              standard: "No allergies. Which one do you recommend?",
              formal: "I have no known allergies. Could you please advise which of these you would recommend?",
            },
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn:
              "For a regular headache, acetaminophen is gentler on the stomach. Take two tablets with water. If it's also body aches or inflammation, ibuprofen works better.",
            textZh: "普通头疼的话，对乙酰氨基酚对胃比较温和。配水吃两片。如果还有身体酸痛或发炎，布洛芬效果更好。",
            commonMistake: {
              wrong: "Take two pieces with water.",
              correct: "Take two tablets with water.",
              explanation: "药片用 \"tablets\"，不是 \"pieces\"。",
            },
            keyPhrases: [
              { en: "gentler on the stomach", zh: "对胃比较温和" },
              { en: "tablets", zh: "药片" },
              { en: "inflammation", zh: "发炎" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tylenol is easier on your stomach. Advil is better if there's swelling or body pain.",
                textZh: "泰诺对胃更温和。如果有肿胀或全身疼痛的话，布洛芬更好。",
                actionHint: "根据症状选药",
                frequency: "common",
              },
              {
                textEn: "For just a headache, go with acetaminophen. Two pills with plenty of water.",
                textZh: "只是头疼的话，选对乙酰氨基酚。两片加大量水。",
                actionHint: "按说明服用",
                frequency: "common",
              },
            ],
            casualVersion:
              "For a normal headache, acetaminophen's easier on your stomach. Just two pills with water. If you've got body aches or inflammation too, ibuprofen's better.",
            formalityVariants: {
              casual:
                "Normal headache? Acetaminophen's easier on your stomach. Two pills with water. Body aches or inflammation? Ibuprofen's better.",
              standard:
                "For a regular headache, acetaminophen is gentler on the stomach. Take two tablets with water. If it's also body aches or inflammation, ibuprofen works better.",
              formal:
                "For a general headache, acetaminophen is typically milder on the gastric system. Please take two tablets with water. Should you also be experiencing body aches or inflammation, ibuprofen would be a more effective option.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the acetaminophen. I also need some motion sickness pills for the flight.",
            textZh: "我要对乙酰氨基酚。我还需要一些晕机药。",
            casualVersion: "I'll grab the acetaminophen. And I need some motion sickness stuff for the flight too.",
            commonMistake: {
              wrong: "I need some anti-dizzy medicine.",
              correct: "I need some motion sickness pills.",
              explanation: "“Motion sickness”是晕机/晕车/晕船的通用说法，“anti-dizzy”不常用。",
            },
            formalityVariants: {
              casual: "I'll take the acetaminophen. Oh, and I need motion sickness pills for the flight.",
              standard: "I'll take the acetaminophen. I also need some motion sickness pills for the flight.",
              formal:
                "I will take the acetaminophen. Additionally, I require some medication for motion sickness for my upcoming flight.",
            },
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn:
              "We have Dramamine — it works well for air sickness. Fair warning, it may make you drowsy. If you want a non-drowsy option, we have meclizine.",
            textZh: "我们有茶苯海明——对晕机很有效。提醒一下，可能会让你犯困。如果要不犯困的，我们有美克洛嗪。",
            commonMistake: {
              wrong: "It can make you sleep.",
              correct: "It may make you drowsy.",
              explanation: "“drowsy” 是困倦的，“sleep” 是睡觉，这里指副作用。",
            },
            keyPhrases: [
              { en: "motion sickness", zh: "晕车/晕机" },
              { en: "drowsy", zh: "犯困的" },
              { en: "non-drowsy", zh: "不犯困的" },
            ],
            vocabNotes: {
              drowsy: {
                meaningInContext: "在这句话里表示：吃了药之后容易犯困、想睡觉的副作用",
                similarUsage:
                  "类似用法：Don't drive after taking this medicine — it makes you drowsy.（吃了这个药不要开车——会犯困）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For motion sickness, Dramamine is the go-to, but heads up — it'll make you sleepy. Want the non-drowsy version instead?",
                textZh: "晕机的话，茶苯海明最常用，但提前说——会让你犯困。要不犯困的版本吗？",
                actionHint: "选择不犯困版本",
                frequency: "common",
              },
              {
                textEn:
                  "We carry both regular and non-drowsy anti-nausea meds. The non-drowsy one won't knock you out.",
                textZh: "普通版和不犯困版的止吐药都有。不犯困版不会让你昏昏沉沉。",
                actionHint: "根据需要选择",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We've got Dramamine — good for air sickness. Heads up, it might make ya sleepy. If you want something non-drowsy, we have meclizine.",
            formalityVariants: {
              casual:
                "Got Dramamine — good for air sickness. Just a heads up, it can make you sleepy. For non-drowsy, we have meclizine.",
              standard:
                "We have Dramamine — it works well for air sickness. Fair warning, it may make you drowsy. If you want a non-drowsy option, we have meclizine.",
              formal:
                "We stock Dramamine, which is effective for air sickness. Please be advised that it may induce drowsiness. As an alternative, we also offer meclizine, which is a non-drowsy option.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the non-drowsy one. How much for both?",
            textZh: "要不犯困的。两样一共多少钱？",
            commonMistake: {
              wrong: "How much for two things?",
              correct: "How much for both?",
              explanation: "“两样” 在英文里自然表达是 “both”。",
            },
            casualVersion: "I'll go with the non-drowsy. How much for everything?",
            formalityVariants: {
              casual: "Gimme the non-drowsy. What's the total?",
              standard: "I'll take the non-drowsy one. How much for both?",
              formal: "I will choose the non-drowsy option. What is the combined cost for both items?",
            },
          },
          {
            speaker: "them",
            role: "药店店员",
            textEn:
              "The acetaminophen is $6.99 and the meclizine is $8.50. Total is $15.49. Take the motion sickness pill about 30 minutes before your flight for best results.",
            textZh: "对乙酰氨基酚6.99美元，美克洛嗪8.50美元。一共15.49美元。晕机药最好在起飞前30分钟吃，效果最好。",
            commonMistake: {
              wrong: "Best effect.",
              correct: "Best results.",
              explanation: "“best results” 更自然地表达“效果最好”。",
            },
            keyPhrases: [
              { en: "30 minutes before", zh: "提前30分钟" },
              { en: "best results", zh: "效果最好" },
            ],
            alternativeExpressions: [
              {
                textEn: "That comes to $15.49 total. Take the motion sickness pill half an hour before boarding.",
                textZh: "一共15.49美元。晕机药登机前半小时吃。",
                actionHint: "记住服药时间",
                frequency: "common",
              },
              {
                textEn: "Fifteen-forty-nine altogether. Pro tip — pop the anti-nausea pill 30 minutes before takeoff.",
                textZh: "一共15块49。小建议——起飞前30分钟吃止吐药。",
                actionHint: "提前吃药",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Acetaminophen's $6.99, meclizine's $8.50. Comes to $15.49. Take the motion sickness pill, like, 30 mins before your flight for it to work best.",
            formalityVariants: {
              casual:
                "Acetaminophen's $6.99, meclizine's $8.50. Total $15.49. Pop the motion sickness pill 30 mins pre-flight for best effect.",
              standard:
                "The acetaminophen is $6.99 and the meclizine is $8.50. Total is $15.49. Take the motion sickness pill about 30 minutes before your flight for best results.",
              formal:
                "The acetaminophen is priced at $6.99, and the meclizine is $8.50, bringing your total to $15.49. For optimal efficacy, please administer the motion sickness medication approximately 30 minutes prior to your flight.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Thanks for the advice!",
            textZh: "知道了。谢谢建议！",
            casualVersion: "Got it. Thanks for the tips!",
            commonMistake: {
              wrong: "Thank you for your suggestion.",
              correct: "Thanks for the advice!",
              explanation: "“advice”指建议、忠告，“suggestion”多指提议，此处“advice”更贴切。",
            },
            formalityVariants: {
              casual: "Got it. Thanks for the tips!",
              standard: "Got it. Thanks for the advice!",
              formal: "Understood. I appreciate your valuable advice.",
            },
          },
        ],
      },
      {
        id: "medical-help",
        titleZh: "寻求医疗帮助",
        titleEn: "Getting Medical Assistance",
        description: "在机场突然不舒服需要医疗帮助",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I'm not feeling well. I feel dizzy and nauseous. Is there a medical clinic in the airport?",
            textZh: "打扰了，我不太舒服。头晕还想吐。机场有医务室吗？",
            casualVersion: "Excuse me, not feeling great. Super dizzy and nauseous. Is there a clinic here?",
            culturalNote: "美国直接说明情况即可，不需过度客套",
            commonMistake: {
              wrong: "I'm not feeling good.",
              correct: "I'm not feeling well.",
              explanation: "Good 指心情或表现，well 指身体状态。这里指身体不适。",
            },
            formalityVariants: {
              casual: "Hey, not feeling great. Dizzy and nauseous. Any clinic around?",
              standard:
                "Excuse me, I'm not feeling well. I feel dizzy and nauseous. Is there a medical clinic in the airport?",
              formal:
                "Pardon me, I'm experiencing some discomfort. I feel quite dizzy and nauseous. Could you please direct me to the nearest medical clinic within the airport?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "There's a first aid station on this level, near Gate 20. Would you like me to call for a wheelchair, or can you walk? Do you need me to call the paramedics?",
            textZh: "这层楼有急救站，在20号登机口附近。需要我叫轮椅还是您能走过去？需要我叫急救人员吗？",
            casualVersion: "There's a first aid station on this floor, by Gate 20. Need a wheelchair, or can you walk? Want me to call a paramedic?",
            commonMistake: {
              wrong: "Do you need a wheelchair or can you yourself walk?",
              correct: "Do you need a wheelchair, or can you walk?",
              explanation: "“yourself” 多余，直接说 “can you walk” 即可。",
            },
            formalityVariants: {
              casual: "First aid station's on this floor, near Gate 20. Need a wheelchair or can you walk? Want me to call a paramedic?",
              standard: "There's a first aid station on this level, near Gate 20. Do you need a wheelchair, or can you walk? Should I call a paramedic?",
              formal: "There is a first aid station located on this level, adjacent to Gate 20. Do you require a wheelchair, or are you able to proceed on foot? Would you like me to summon a paramedic?",
            },
            keyPhrases: [
              { en: "first aid station", zh: "急救站" },
              { en: "wheelchair", zh: "轮椅" },
              { en: "paramedics", zh: "急救人员" },
            ],
            alternativeExpressions: [
              {
                textEn: "Are you alright? Let me get you some water first. There's a medical room just down the hall.",
                textZh: "您还好吗？我先给您拿点水。走廊那边就有医务室。",
                actionHint: "先坐下休息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I can walk, but slowly. I think it might be from not eating and the long flight.",
            textZh: "我能走，但慢一点。我觉得可能是没吃东西加上长途飞行的关系。",
            casualVersion: "I can walk, just slowly. Think it's 'cause I haven't eaten and the long flight.",
            commonMistake: {
              wrong: "I think it is because of not eating.",
              correct: "I think it might be from not eating.",
              explanation: "“from not eating” 更自然，“because of not eating” 稍显生硬。",
            },
            formalityVariants: {
              casual: "Can walk, but slow. Probably just from not eating and the long flight.",
              standard: "I can walk, but slowly. I think it might be from not eating and the long flight.",
              formal: "I am capable of walking, albeit slowly. I suspect my condition may be attributable to not having eaten and the prolonged duration of the flight.",
            },
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn:
              "Hello, I'm the on-duty nurse. Can you tell me your symptoms? When did you last eat? Do you have any medical conditions I should know about?",
            textZh: "你好，我是值班护士。能告诉我您的症状吗？上次吃东西是什么时候？有什么病史需要我了解的吗？",
            casualVersion: "Hi, I'm the nurse. What's going on? When'd you last eat? Any medical history I should know?",
            commonMistake: {
              wrong: "What is your medical history?",
              correct: "Do you have any medical history I should be aware of?",
              explanation: "询问病史时用 “Do you have any medical history I should be aware of?” 更委婉。",
            },
            formalityVariants: {
              casual: "Hi, nurse here. Symptoms? Last meal? Any medical history I need to know?",
              standard: "Hello, I'm the nurse on duty. Can you tell me your symptoms? When did you last eat? Do you have any medical history I should be aware of?",
              formal: "Good morning/afternoon, I am the nurse on duty. Could you please describe your symptoms? When was your last meal? Are there any pertinent aspects of your medical history of which I should be made aware?",
            },
            keyPhrases: [
              { en: "on-duty nurse", zh: "值班护士" },
              { en: "symptoms", zh: "症状" },
              { en: "medical conditions", zh: "病史/基础疾病" },
            ],
            vocabNotes: {
              "medical conditions": {
                meaningInContext: "在这句话里表示：已有的疾病或健康问题，如高血压、糖尿病等",
                similarUsage: "类似用法：Do you have any pre-existing medical conditions?（您有什么既往病史吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Hi there. Take a seat. What's going on? Any allergies or conditions I should be aware of?",
                textZh: "你好，请坐。怎么了？有过敏或病史需要我知道的吗？",
                actionHint: "如实告知",
                frequency: "common",
              },
              {
                textEn: "I'm the nurse on call. Tell me how you're feeling and when you last had food or water.",
                textZh: "我是值班护士。告诉我您现在的感觉，以及上次吃喝是什么时候。",
                actionHint: "描述症状",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I feel dizzy, a bit nauseous, and my ears are ringing. I haven't eaten in about 10 hours. No serious medical conditions, but I have low blood pressure.",
            textZh: "我头晕，有点恶心，耳鸣。大约10小时没吃东西了。没有严重的病史，但有低血压。",
            casualVersion: "Dizzy, bit nauseous, ears ringing. Haven't eaten in, like, 10 hours. No major medical stuff, but I do have low blood pressure.",
            commonMistake: {
              wrong: "I have low blood pressure, but no serious medical history.",
              correct: "No serious medical history, but I have low blood pressure.",
              explanation: "通常会先说“没有严重病史”，再补充“但有……”。",
            },
            formalityVariants: {
              casual: "Dizzy, nauseous, ears ringing. Haven't eaten in 10 hours. No major medical history, but got low blood pressure.",
              standard: "I feel dizzy, a bit nauseous, and my ears are ringing. I haven't eaten for about 10 hours. No serious medical history, but I have low blood pressure.",
              formal: "I am experiencing dizziness, mild nausea, and tinnitus. I have not consumed food for approximately ten hours. While I have no significant medical history, I do have a condition of hypotension.",
            },
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn:
              "It sounds like it could be dehydration and low blood sugar from the long flight. Let me check your blood pressure and give you some water with electrolytes. Please lie down here.",
            textZh: "听起来可能是长途飞行导致的脱水和低血糖。我先量一下血压，给您喝点电解质水。请躺在这里。",
            casualVersion: "Sounds like dehydration and low blood sugar from that long flight. Let me check your blood pressure and get you some electrolyte water. Just lie down here.",
            commonMistake: {
              wrong: "It sounds like dehydration and low blood sugar problem.",
              correct: "It sounds like it could be dehydration and low blood sugar.",
              explanation: "“dehydration and low blood sugar” 本身就暗示了问题，不需要加 “problem”。",
            },
            formalityVariants: {
              casual: "Sounds like dehydration and low blood sugar from the flight. Lemme check your blood pressure, get you some electrolyte water. Lie down here.",
              standard: "It sounds like it could be dehydration and low blood sugar from the long flight. Let me check your blood pressure and give you some water with electrolytes. Please lie down here.",
              formal: "It appears your symptoms may be indicative of dehydration and hypoglycemia, likely exacerbated by the prolonged flight. I shall proceed to check your blood pressure and provide you with electrolyte-enriched water. Kindly recline here.",
            },
            keyPhrases: [
              { en: "dehydration", zh: "脱水" },
              { en: "low blood sugar", zh: "低血糖" },
              { en: "blood pressure", zh: "血压" },
              { en: "electrolytes", zh: "电解质" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're probably dehydrated and your blood sugar is low. Let me take your vitals and get you something to drink.",
                textZh: "您可能脱水了，血糖也低。让我测一下生命体征，再给您拿点喝的。",
                actionHint: "配合检查",
                frequency: "common",
              },
              {
                textEn:
                  "Long flights can do that — dehydration and not eating. Lie down, I'll check your BP and get you an electrolyte drink.",
                textZh: "长途飞行容易这样——脱水又没吃东西。躺下，我量个血压，给您拿电解质饮料。",
                actionHint: "躺下休息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. My connecting flight is in 3 hours. Will I be okay to fly?",
            textZh: "好的。我转机航班还有3小时。我能上飞机吗？",
            casualVersion: "Okay. Got a connecting flight in 3 hours. Can I still fly?",
            commonMistake: {
              wrong: "Can I fly?",
              correct: "Will I be okay to fly?",
              explanation: "询问身体状况是否允许飞行，用 “Will I be okay to fly?” 更合适。",
            },
            formalityVariants: {
              casual: "Okay. Connecting flight's in 3 hours. Can I still fly?",
              standard: "Okay. My connecting flight is in 3 hours. Will I be okay to fly?",
              formal: "Understood. My connecting flight departs in three hours. Will I be cleared for travel?",
            },
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn:
              "Let's see how you feel after resting and hydrating. Your blood pressure is a bit low but not dangerous. If you don't improve in an hour, I'd recommend seeing the airport doctor. They can give you a fit-to-fly certificate if needed.",
            textZh:
              "休息补水后看看感觉怎么样。您的血压有点低但不危险。如果一小时后没有好转，建议您去看机场医生。如果需要的话，他们可以开一个适飞证明。",
            casualVersion: "Let's see how you feel after some rest and water. Your blood pressure's a bit low, but it's not dangerous. If you're not feeling better in an hour, I'd say see the airport doctor. They can give you a 'fit to fly' certificate if you need one.",
            culturalNote: "“适飞证明” 在国际旅行中很重要，尤其身体不适后航空公司可能要求。",
            commonMistake: {
              wrong: "They can open a 'fit to fly' certificate.",
              correct: "They can issue a 'fit to fly' certificate.",
              explanation: "“开证明”用 “issue a certificate” 更准确。",
            },
            formalityVariants: {
              casual: "We'll see how you feel after some rest and water. BP's a little low, but nothing crazy. Not better in an hour? Go see the airport doctor. They can give you a 'fit to fly' cert if you need it.",
              standard: "Let's see how you feel after resting and rehydrating. Your blood pressure is a bit low, but not dangerously so. If you're not feeling better in an hour, I'd recommend seeing the airport doctor. They can issue a 'fit to fly' certificate if needed.",
              formal: "We shall monitor your condition following a period of rest and rehydration. Your blood pressure is marginally low, yet not at a critical level. Should your symptoms not improve within the hour, I would advise consulting with the airport physician. They are authorized to issue a 'fit to fly' certificate if deemed necessary.",
            },
            keyPhrases: [
              { en: "hydrating", zh: "补水" },
              { en: "fit-to-fly certificate", zh: "适飞证明" },
            ],
            vocabNotes: {
              "fit-to-fly certificate": {
                meaningInContext: "在这句话里表示：医生出具的证明你身体状况允许乘坐飞机的文件",
                similarUsage:
                  "类似用法：The airline may require a fit-to-fly letter from your doctor.（航空公司可能要求提供医生的适飞证明）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Rest here and drink some fluids. If you're not better in an hour, I'll refer you to the doctor on site.",
                textZh: "在这休息一下，多喝点水。如果一小时后没好转，我给您转诊机场医生。",
                actionHint: "先休息观察",
                frequency: "common",
              },
              {
                textEn: "Your BP is slightly low. Lie down, hydrate, and we'll reassess in an hour.",
                textZh: "您血压略低。先躺下补水，一小时后再看看情况。",
                actionHint: "配合休息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. If I need to see the doctor, will there be a charge?",
            textZh: "谢谢。如果需要看医生，要收费吗？",
            casualVersion: "Thanks. If I see the doctor, does it cost money?",
            commonMistake: {
              wrong: "If I see the doctor, will it pay money?",
              correct: "If I see the doctor, will there be a charge?",
              explanation: "“pay money” 用于主动付款，询问费用用 “charge” 或 “cost money” 更自然。",
            },
            formalityVariants: {
              casual: "Thanks. Doctor visit cost money?",
              standard: "Thank you. If I need to see the doctor, will there be a charge?",
              formal: "Thank you. Should I require a consultation with the physician, will there be an associated fee?",
            },
          },
          {
            speaker: "them",
            role: "医务人员",
            textEn:
              "The first aid station visit is free. If you see the doctor, there's a consultation fee of about $50 to $80. Most travel insurance covers this — do you have travel insurance? Keep your receipt for reimbursement.",
            textZh:
              "急救站就诊免费。看医生的话，问诊费大约50到80美元。大多数旅行保险可以报销——您有旅行保险吗？保留收据用于报销。",
            casualVersion: "First aid station's free. Doctor visit? That's about $50-$80. Most travel insurance covers it – you got any? Keep your receipt for getting your money back.",
            commonMistake: {
              wrong: "Keep your receipt for return money.",
              correct: "Keep your receipt for reimbursement.",
              explanation: "“reimbursement” 是报销，“return money” 听起来像退货。",
            },
            formalityVariants: {
              casual: "First aid's free. Doctor's a $50-$80 consultation fee. Travel insurance usually covers it – you got some? Keep the receipt for reimbursement.",
              standard: "The first aid station visit is free. If you see the doctor, there's a consultation fee of approximately $50 to $80. Most travel insurance covers it — do you have travel insurance? Keep your receipt for reimbursement.",
              formal: "A visit to the first aid station incurs no charge. However, a consultation with the physician typically carries a fee of approximately $50 to $80. The majority of travel insurance policies cover such expenses; do you possess travel insurance? Please retain your receipt for reimbursement purposes.",
            },
            keyPhrases: [
              { en: "consultation fee", zh: "问诊费" },
              { en: "travel insurance", zh: "旅行保险" },
              { en: "reimbursement", zh: "报销" },
            ],
            culturalNote: "出国旅行一定要买旅行保险。机场医疗费用很贵，有保险可以报销。保留所有医疗相关收据。",
            alternativeExpressions: [
              {
                textEn:
                  "This visit is on the house. A doctor's appointment runs about $50 to $80 — do you have insurance to cover it?",
                textZh: "这次就诊免费。看医生大约50到80美元——你有保险可以报销吗？",
                actionHint: "查看保险单",
                frequency: "common",
              },
              {
                textEn:
                  "No charge for the first aid station. The doctor is extra but most travel policies cover it. Hang on to the receipt.",
                textZh: "急救站不收费。看医生要另外付费，但大多数旅行险可以报。收据留好。",
                actionHint: "保留收据",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 落地签 ====================
  {
    id: "airport-21",
    category: "airport",
    titleZh: "落地签",
    titleEn: "Visa on Arrival",
    description: "在目的地机场办理落地签证，包括填表和缴费",
    otherRole: "签证柜台官员",
    otherRoleIcon: "stamp",
    flows: [
      {
        id: "standard-voa",
        titleZh: "标准落地签办理",
        titleEn: "Standard Visa on Arrival",
        description: "正常办理落地签，填写表格和缴费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'm a Chinese passport holder. I'd like to apply for a visa on arrival.",
            textZh: "你好，我持中国护照。我想办理落地签。",
            culturalNote: "美国办理登机或入关时不需要说'请问'或'我想'，直接说目的即可。中国人常习惯性客套。",
            casualVersion: "Hey, I got a Chinese passport. Wanna apply for a visa on arrival.",
            commonMistake: {
              wrong: "I want to apply for a visa on arrival.",
              correct: "I'd like to apply for a visa on arrival.",
              explanation: "I want to 听起来生硬，用 I'd like to 更礼貌和委婉。",
            },
            formalityVariants: {
              casual: "Hi, I'm Chinese, here for a visa on arrival.",
              standard: "Hello, I'm a Chinese passport holder. I'd like to apply for a visa on arrival.",
              formal:
                "Good day. I am a holder of a Chinese passport and wish to inquire about the process for obtaining a visa upon arrival.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "Welcome. Please fill out this arrival card and visa application form. Do you have a passport photo and your return ticket?",
            textZh: "欢迎。请填写这张入境卡和签证申请表。您有护照照片和回程机票吗？",
            commonMistake: {
              wrong: "Do you have passport photo?",
              correct: "Do you have a passport photo?",
              explanation: "可数名词单数形式前需要冠词a/an。",
            },
            keyPhrases: [
              { en: "arrival card", zh: "入境卡" },
              { en: "visa application form", zh: "签证申请表" },
              { en: "passport photo", zh: "护照照片" },
              { en: "return ticket", zh: "回程机票" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, Chinese nationals are eligible for visa on arrival. I'll need your passport, a photo, proof of onward travel, and the $30 fee.",
                textZh: "可以，中国公民可以办落地签。我需要您的护照、一张照片、离境行程证明和30美元费用。",
                actionHint: "准备好所有材料",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome. Gotta fill out this arrival card and visa form. Got a passport pic and return ticket?",
            formalityVariants: {
              casual: "Welcome. Fill out these forms. Got a photo and return ticket?",
              standard:
                "Welcome. Please fill out this arrival card and visa application form. Do you have a passport photo and your return ticket?",
              formal:
                "Welcome. Kindly complete both the arrival card and the visa application form. May I also inquire if you possess a passport photograph and your confirmed return itinerary?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have my passport and return ticket. But I forgot to bring a passport photo. Is there a photo booth nearby?",
            textZh: "我有护照和回程机票。但忘了带护照照片。附近有拍照的地方吗？",
            casualVersion:
              "Got my passport and return ticket. But totally forgot a passport photo. Is there a photo booth around here?",
            commonMistake: {
              wrong: "But I forgot to bring passport photo.",
              correct: "But I forgot to bring a passport photo.",
              explanation: "“passport photo” 在这里是可数名词，前面需要不定冠词 “a”。",
            },
            formalityVariants: {
              casual: "Got my passport and return ticket, but no photo. Photo booth nearby?",
              standard:
                "I have my passport and return ticket. But I forgot to bring a passport photo. Is there a photo booth nearby?",
              formal:
                "I possess my passport and my return ticket. However, I regret to inform you that I have overlooked bringing a passport photograph. Is there a facility for obtaining one in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "There's a photo booth right over there, next to the immigration forms counter. It costs $5 for four photos. You only need one for the visa.",
            textZh: "那边有个快照亭，就在入境表格柜台旁边。5美元四张照片。签证只需要一张。",
            commonMistake: {
              wrong: "There has a photo booth",
              correct: "There's a photo booth",
              explanation: "表示“有”或“存在”时，通常用there is/are，而不是there has。",
            },
            keyPhrases: [
              { en: "photo booth", zh: "快照亭" },
              { en: "immigration forms counter", zh: "入境表格柜台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, there's a photo machine right over there. $5 for four pictures — you just need one.",
                textZh: "没关系，那边有拍照机。5美元四张——只需要一张。",
                actionHint: "先去拍照",
                frequency: "common",
              },
              {
                textEn: "There's a booth next to the forms counter where you can get a passport photo in two minutes.",
                textZh: "表格柜台旁边有个快照亭，两分钟就能拍好护照照片。",
                actionHint: "去快照亭",
                frequency: "common",
              },
            ],
            casualVersion:
              "Photo booth's right over there, by the immigration forms. Five bucks for four pics. You only need one for the visa.",
            formalityVariants: {
              casual: "Photo booth's right there, by the forms. $5 for four pics, but you only need one for the visa.",
              standard:
                "There's a photo booth right over there, next to the immigration forms counter. It costs $5 for four photos. You only need one for the visa.",
              formal:
                "You will find a photo booth situated directly adjacent to the immigration forms counter. The cost is five dollars for a set of four photographs; however, only one is required for the visa application.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks, I'll go take a photo first. What's the visa fee, and how can I pay?",
            textZh: "谢谢，我先去拍照。签证费多少，怎么付？",
            casualVersion: "Thanks, I'll go get a photo first. What's the visa fee, and how do I pay?",
            commonMistake: {
              wrong: "How to pay?",
              correct: "How can I pay?",
              explanation: "直接说 “How to pay?” 不自然，通常说 “How can I pay?” 或 “How do I pay?”。",
            },
            formalityVariants: {
              casual: "Thanks, gonna get a pic first. How much is the visa, and how do I pay?",
              standard: "Thanks, I'll go take a photo first. What's the visa fee, and how can I pay?",
              formal:
                "Thank you. I shall proceed to obtain a photograph first. Could you please inform me of the visa application fee and the acceptable methods of payment?",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "The visa fee is $30 for a 30-day single entry. We accept US dollars, euros, or local currency. Credit cards are also accepted but there's a $2 processing fee.",
            textZh: "签证费30美元，30天单次入境。我们接受美元、欧元或当地货币。也接受信用卡但有2美元手续费。",
            culturalNote: "在美国，商家对信用卡支付收取额外手续费很常见，不像中国主要由商家承担。",
            commonMistake: {
              wrong: "Credit card also accept but have $2 fee.",
              correct: "Credit cards are also accepted but there's a $2 processing fee.",
              explanation: "“接受”是动词，需要be动词和过去分词构成被动语态。表存在用there is。",
            },
            keyPhrases: [
              { en: "single entry", zh: "单次入境" },
              { en: "processing fee", zh: "手续费" },
            ],
            vocabNotes: {
              "single entry": {
                meaningInContext: "在这句话里表示：签证只允许入境一次，出境后不能再用同一签证重新入境",
                similarUsage:
                  "类似用法：A multiple entry visa lets you enter the country several times.（多次入境签证允许你多次进入该国）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "It's $30 for a 30-day visa, single entry. You can pay in dollars, euros, or the local currency. Card works too, but there's a small surcharge.",
                textZh: "30天单次入境签证30美元。美元、欧元或当地货币都可以。刷卡也行，但有小额附加费。",
                actionHint: "准备现金更划算",
                frequency: "common",
              },
              {
                textEn: "Thirty dollars gets you 30 days. Cash is preferred — cards have a two-dollar extra fee.",
                textZh: "30美元30天。最好付现金——刷卡多收2美元。",
                actionHint: "用现金支付",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's $30 for a 30-day single entry visa. We take US dollars, euros, or local cash. Credit cards too, but there's a $2 fee.",
            formalityVariants: {
              casual: "Visa's $30 for 30 days, single entry. We take USD, Euros, local cash, or cards (+$2 fee).",
              standard:
                "The visa fee is $30 for a 30-day single entry. We accept US dollars, euros, or local currency. Credit cards are also accepted but there's a $2 processing fee.",
              formal:
                "The visa fee is thirty US dollars for a thirty-day single entry. We are able to accept payment in United States Dollars, Euros, or the local currency. Credit card payments are also accommodated, though a two-dollar processing fee applies.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay in US dollars. Here's my form, photo, passport, and $30.",
            textZh: "我用美元付。这是我的表格、照片、护照和30美元。",
            commonMistake: {
              wrong: "I pay US dollars. Here my forms, photo, passport and $30.",
              correct: "I'll pay with US dollars. Here are my forms, photo, passport, and $30.",
              explanation: "中文常省略助词，但英文 'I pay' 语气生硬，'I'll pay with' 或 'I'm paying with' 更自然。'Here are' 更自然。",
            },
            casualVersion: "I'll pay with US dollars. Here's my stuff: form, photo, passport, and $30.",
            formalityVariants: {
              casual: "Paying in USD. Here's my form, photo, passport, and $30.",
              standard: "I'll pay in US dollars. Here's my form, photo, passport, and $30.",
              formal:
                "I shall make payment in United States Dollars. Herein presented are my completed form, photograph, passport, and the thirty-dollar fee.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn: "Thank you. Let me process this... Where are you staying during your visit?",
            textZh: "谢谢。让我处理一下……您在这里住哪里？",
            commonMistake: {
              wrong: "Where do you stay?",
              correct: "Where are you staying?",
              explanation: "询问当前或未来计划的居住地点，常用进行时态。",
            },
            keyPhrases: [
              { en: "process this", zh: "处理" },
              { en: "where are you staying", zh: "住在哪里" },
            ],
            alternativeExpressions: [
              {
                textEn: "One moment while I enter your information... Where will you be staying?",
                textZh: "稍等，我录入您的信息……您住在哪里？",
                actionHint: "告知住宿地址",
                frequency: "common",
              },
              {
                textEn: "Let me run this through the system... What's your accommodation address here?",
                textZh: "让我在系统里处理一下……您在这边的住宿地址是什么？",
                actionHint: "提供酒店信息",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks. Lemme process this... Where you staying?",
            formalityVariants: {
              casual: "Thanks. Lemme handle this... Where you staying?",
              standard: "Thank you. Let me process this... Where are you staying during your visit?",
              formal:
                "Thank you. Allow me a moment to process these documents. May I inquire as to your accommodation arrangements during your stay?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm staying at the Grand Palace Hotel for 7 nights. I have the hotel confirmation here.",
            textZh: "我住在Grand Palace酒店，住7晚。酒店确认单在这里。",
            casualVersion: "Staying at the Grand Palace Hotel for 7 nights. Got the confirmation right here.",
            commonMistake: {
              wrong: "I'm staying at Grand Palace Hotel for 7 nights.",
              correct: "I'm staying at the Grand Palace Hotel for 7 nights.",
              explanation: "酒店名称前通常需要加冠词 “the”。表示短期入住用 “staying” 而非 “living”。",
            },
            formalityVariants: {
              casual: "Grand Palace Hotel, 7 nights. Confirmation's here.",
              standard: "I'm staying at the Grand Palace Hotel for 7 nights. I have the hotel confirmation here.",
              formal:
                "My accommodation will be at the Grand Palace Hotel for a duration of seven nights. I have the hotel confirmation documentation available here.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "Everything looks good. Here's your passport with the visa sticker. Your visa is valid for 30 days from today. Please don't overstay — there are fines for overstaying. Enjoy your trip!",
            textZh:
              "一切没问题。这是您的护照，已经贴好签证贴纸了。签证从今天起30天有效。请不要逾期停留——逾期会有罚款。祝旅途愉快！",
            commonMistake: {
              wrong: "This is your passport with visa.",
              correct: "Here's your passport with the visa sticker.",
              explanation: "递交物品时，口语常用“Here's...”。",
            },
            keyPhrases: [
              { en: "visa sticker", zh: "签证贴纸" },
              { en: "valid for 30 days", zh: "30天有效" },
              { en: "overstay", zh: "逾期停留" },
              { en: "fines", zh: "罚款" },
            ],
            culturalNote:
              "签证逾期停留（overstay）是严重违规行为，会导致罚款甚至影响以后的签证申请。一定要在签证有效期内离境。",
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — your visa is stamped. You have 30 days starting today. Make sure you leave before it expires.",
                textZh: "给您——签证盖好了。从今天起30天。确保到期前离境。",
                actionHint: "记住到期日",
                frequency: "common",
              },
              {
                textEn:
                  "All done. Your 30-day visa starts now. Just a reminder — overstaying can result in fines or a ban. Enjoy your visit!",
                textZh: "办好了。30天签证从现在开始。提醒一下——逾期停留会被罚款或禁止入境。祝旅途愉快！",
                actionHint: "设置提醒",
                frequency: "common",
              },
            ],
            casualVersion:
              "Looks good. Here's your passport with the visa. It's good for 30 days from today. Don't overstay, they fine you. Enjoy your trip!",
            formalityVariants: {
              casual:
                "All good. Here's your passport with the visa. Good for 30 days from today. Don't overstay, they'll fine ya. Enjoy!",
              standard:
                "Everything looks good. Here's your passport with the visa sticker. Your visa is valid for 30 days from today. Please don't overstay — there are fines for overstaying. Enjoy your trip!",
              formal:
                "All documentation appears to be in order. Here is your passport, complete with the affixed visa sticker. Your visa is valid for a period of thirty days commencing from today's date. I must advise you not to exceed this duration, as penalties are imposed for overstaying. I wish you a pleasant journey.",
            },
          },
        ],
      },
      {
        id: "voa-problems",
        titleZh: "落地签遇到问题",
        titleEn: "Visa on Arrival Issues",
        description: "办理落地签时遇到材料不全或被拒等问题",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I'd like to get a visa on arrival. Here are my documents.",
            textZh: "你好，我想办理落地签。这是我的材料。",
            casualVersion: "Hey, need a visa on arrival. Got my docs right here.",
            culturalNote: "直接说需求，无需过多客套。中国人有时会习惯性先说“请问”。",
            commonMistake: {
              wrong: "I want to get a visa on arrival.",
              correct: "I'd like to get a visa on arrival.",
              explanation: "“I want”听起来比较生硬，用“I'd like”更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, visa on arrival. Docs here.",
              standard: "Hello, I'd like to get a visa on arrival. Here are my documents.",
              formal:
                "Good morning/afternoon, I am here to apply for a visa on arrival. I have prepared all necessary documentation.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "I see you have your passport and the form, but I don't see proof of a return or onward ticket. We require evidence that you plan to leave within the visa period.",
            textZh: "我看到您有护照和表格，但没有回程或后续行程的机票证明。我们需要您提供在签证有效期内离境的证据。",
            culturalNote: "美国边检很重视行程目的，回程票是重要证据，证明你会离开。",
            commonMistake: {
              wrong: "I see you have your passport and the form, but I don't have your return ticket.",
              correct: "I see you have your passport and the form, but I don't see proof of your return ticket.",
              explanation: "中文'没有'常泛指，英文'I don't have'易混淆，用'I don't see'更合适。",
            },
            casualVersion: "Got your passport and form, but no proof of a return or onward ticket. We need evidence you're leaving within the visa period.",
            formalityVariants: {
              casual: "Okay, passport and form are good, but I don't see a return or onward ticket. We need proof you'll leave on time.",
              standard: "I see you have your passport and the form, but I don't see proof of a return or onward ticket. We require evidence that you plan to leave within the visa period.",
              formal: "Your passport and completed application form are present; however, I note the absence of a confirmed return or onward travel itinerary. Our regulations mandate documentation verifying your departure from the country prior to the expiration of your visa.",
            },
            keyPhrases: [
              { en: "proof of a return or onward ticket", zh: "回程或后续行程机票证明" },
              { en: "evidence", zh: "证据/证明" },
              { en: "visa period", zh: "签证有效期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I notice you don't have a return or onward flight booked. We need to see proof you'll leave within the visa period.",
                textZh: "我注意到您没有订回程或后续行程的机票。我们需要看到您在签证期内离境的证明。",
                actionHint: "准备离境证明",
                frequency: "common",
              },
              {
                textEn: "Do you have a return ticket or any proof of onward travel? It's required for the visa.",
                textZh: "有回程票或后续行程的证明吗？办签证需要这个。",
                actionHint: "出示行程证明",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I haven't booked my return flight yet because my plans are flexible. Is there any other way?",
            textZh: "我还没订回程机票，因为行程比较灵活。有其他办法吗？",
            culturalNote: "许多中国游客倾向于弹性行程，不会提前订好回程票。但一些国家落地签要求有离境机票。",
            casualVersion: "Haven't booked my return yet, plans are flexible. Any other way?",
            commonMistake: {
              wrong: "My plans are free.",
              correct: "My plans are flexible.",
              explanation: "“free”指空闲，“flexible”指可变通、有弹性，更符合行程安排的语境。",
            },
            formalityVariants: {
              casual: "Haven't booked my return flight, 'cause my plans are flexible. What else can I do?",
              standard: "I haven't booked my return flight yet because my plans are flexible. Is there any other way?",
              formal: "I regret to inform you that I have not yet secured my return travel arrangements, as my itinerary is subject to change. Are there alternative arrangements I could make to satisfy this requirement?",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "You could book a refundable ticket right now on your phone and show me the confirmation. Or you could show a bus or train ticket to a neighboring country. We just need proof you intend to leave.",
            textZh:
              "您可以现在用手机订一张可退票的机票，给我看确认信息。或者出示去邻国的巴士或火车票也行。我们只需要您打算离境的证明。",
            commonMistake: {
              wrong: "We just need your intention of leaving proof.",
              correct: "We just need proof you intend to leave.",
              explanation: "“证明你打算离开”是更自然的表达方式，而不是直译“离开意图的证明”。",
            },
            casualVersion: "Just book a refundable ticket on your phone, show me the confirmation. Or a bus/train ticket to a neighboring country works. Just need proof you're leaving.",
            formalityVariants: {
              casual: "Just book a refundable ticket on your phone, show me the confirmation. Or a bus/train ticket to a nearby country. We just need proof you're gonna leave.",
              standard: "You could book a refundable ticket right now on your phone and show me the confirmation. Or you could show a bus or train ticket to a neighboring country. We just need proof you intend to leave.",
              formal: "You have the option to secure a fully refundable flight reservation instantly via your mobile device and present the confirmation. Alternatively, documented proof of onward travel, such as a bus or train ticket to an adjacent nation, would also suffice. Our primary requirement is verifiable assurance of your intended departure.",
            },
            keyPhrases: [
              { en: "refundable ticket", zh: "可退票的机票" },
              { en: "confirmation", zh: "确认信息" },
              { en: "intend to leave", zh: "打算离境" },
            ],
            vocabNotes: {
              refundable: {
                meaningInContext: "在这句话里表示：可以退款的机票，即使之后不坐也能拿回钱",
                similarUsage: "类似用法：Is this ticket refundable or non-refundable?（这张票可以退吗？）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "You can book a flight on your phone right now — even a refundable one works. Show me the confirmation and we're good.",
                textZh: "您现在就可以在手机上订一张机票——可退票的也行。给我看确认信息就可以了。",
                actionHint: "现场订票",
                frequency: "common",
              },
              {
                textEn: "Any outbound ticket will do — plane, bus, or train. Just something showing you plan to leave.",
                textZh: "任何离境票都行——飞机、巴士或火车。只要能证明您有离开的计划。",
                actionHint: "准备任意离境凭证",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Good idea. Let me book one on my phone... Okay, here's a confirmation for a flight out in 25 days.",
            textZh: "好主意。我用手机订一张……好了，这是25天后的一个离境航班确认。",
            casualVersion: "Good idea. Lemme book one on my phone... Okay, here's the confirmation for a flight out in 25 days.",
            commonMistake: {
              wrong: "I will book one on my phone.",
              correct: "Let me book one on my phone.",
              explanation: "“Let me”更自然地表示“让我来做某事”，比直接说“I will”更口语化。",
            },
            formalityVariants: {
              casual: "Smart. Lemme book one real quick... Alright, flight out in 25 days confirmed, here it is.",
              standard: "Good idea. Let me book one on my phone... Okay, here's a confirmation for a flight out in 25 days.",
              formal: "That is an excellent suggestion. Please allow me a moment to complete a booking via my mobile device... I have secured a confirmed reservation for a flight departing in 25 days, which I present for your review.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "That works. One more thing — I also need proof of sufficient funds. Can you show a bank statement or credit card with enough limit for your stay?",
            textZh: "可以了。还有一件事——我还需要资金证明。能出示银行流水或额度足够的信用卡吗？",
            commonMistake: {
              wrong: "enough limit",
              correct: "sufficient funds / enough balance / enough credit",
              explanation: "“limit”通常指额度上限，而非“足够的资金”。应直接说“足够的资金”或“足够的余额/信用额度”。",
            },
            culturalNote: "美国边检会检查游客是否有足够财力支持行程，防止非法滞留或打黑工。",
            casualVersion: "That works. Oh, one more thing — need proof you have enough money. Can you show a bank statement or a credit card with a good limit for your stay?",
            formalityVariants: {
              casual: "Okay, that's good. One more thing—I need proof you got enough cash. Bank statement or credit card with a decent limit for your trip?",
              standard: "That works. One more thing — I also need proof of sufficient funds. Can you show a bank statement or credit card with enough limit for your stay?",
              formal: "That indeed satisfies the requirement. Furthermore, I must also request documentation demonstrating proof of sufficient financial resources. Would you be able to provide a recent bank statement or a credit card indicating an adequate credit limit to cover your expenses during your intended period of stay?",
            },
            keyPhrases: [
              { en: "sufficient funds", zh: "充足的资金" },
              { en: "bank statement", zh: "银行流水" },
              { en: "credit card limit", zh: "信用卡额度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I also need to verify you have enough money for your stay. A bank statement or credit card will do.",
                textZh: "我还需要确认您有足够的旅行资金。银行流水或信用卡都可以。",
                actionHint: "出示资金证明",
                frequency: "common",
              },
              {
                textEn:
                  "One more requirement — proof of funds. Can you show me a recent bank balance or a credit card?",
                textZh: "还有一个要求——资金证明。能给我看一下最近的银行余额或信用卡吗？",
                actionHint: "打开银行APP",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my bank app showing my balance. Is a screenshot okay?",
            textZh: "这是我银行APP显示的余额。截图可以吗？",
            casualVersion: "Here's my bank app, shows my balance. Screenshot cool?",
            commonMistake: {
              wrong: "Screenshot is okay?",
              correct: "Is a screenshot okay?",
              explanation: "问句语序应为“Is + 主语 + (a) + 宾语”，且“screenshot”前需加冠词“a”。",
            },
            formalityVariants: {
              casual: "My bank app, shows my balance. Is a screenshot fine?",
              standard: "Here's my bank app showing my balance. Is a screenshot okay?",
              formal: "I can present my banking application displaying my current account balance. Would a digital screenshot of this information be acceptable?",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "A screenshot on your phone is fine. Let me see... That's acceptable. Let me process your visa now. It will take about 10 minutes.",
            textZh: "手机截图可以。让我看看……可以的。现在帮您办签证。大约需要10分钟。",
            commonMistake: {
              wrong: "That's fine. I will do your visa now.",
              correct: "That'll work. I'll process your visa now.",
              explanation: "“That'll work”更自然地表示“可行、没问题”。“process”比“do”更专业。",
            },
            casualVersion: "Yeah, phone screenshot's fine. Lemme see... Yep, that works. I'll process your visa now. Should take like 10 minutes.",
            formalityVariants: {
              casual: "Yep, phone screenshot's good. Lemme see... Okay, that's fine. I'll get your visa processed now. Prob'ly 10 mins.",
              standard: "A screenshot on your phone is fine. Let me see... That's acceptable. Let me process your visa now. It will take about 10 minutes.",
              formal: "A screenshot presented on your mobile device is perfectly acceptable. Kindly allow me to review it... Yes, this fulfills the requirement. I shall now proceed with processing your visa application. This procedure typically requires approximately ten minutes.",
            },
            keyPhrases: [
              { en: "acceptable", zh: "可以接受的" },
              { en: "process your visa", zh: "办理签证" },
            ],
            alternativeExpressions: [
              {
                textEn: "The screenshot works fine. That's sufficient. Give me about 10 minutes to process everything.",
                textZh: "截图可以。够了。给我大约10分钟处理一下。",
                actionHint: "耐心等待",
                frequency: "common",
              },
              {
                textEn: "That'll do. Let me get your visa sorted — shouldn't take more than 10 minutes.",
                textZh: "可以了。让我帮您办签证——不超过10分钟。",
                actionHint: "等候办理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for being patient with me. I'll be better prepared next time.",
            textZh: "谢谢您的耐心。下次我会准备得更充分。",
            casualVersion: "Thanks for being patient. I'll be more prepared next time.",
            commonMistake: {
              wrong: "Thank you for your patient.",
              correct: "Thank you for your patience.",
              explanation: "“patience”是名词“耐心”，“patient”是形容词“有耐心的”或名词“病人”。",
            },
            formalityVariants: {
              casual: "Thanks for your patience. Next time I'll be more prepared.",
              standard: "Thank you for being patient with me. I'll be better prepared next time.",
              formal: "I sincerely appreciate your patience and understanding in this matter. I assure you I will endeavor to be more thoroughly prepared for any future interactions.",
            },
          },
          {
            speaker: "them",
            role: "签证官",
            textEn:
              "No problem at all. For future reference, the requirements are listed on our immigration website. It's always good to have everything ready before you arrive. Here's your visa — welcome!",
            textZh: "没关系。以后可以参考我们移民局网站上列出的要求。到达前把一切准备好总是好的。这是您的签证——欢迎！",
            commonMistake: {
              wrong: "Always prepare everything before arrival.",
              correct: "It's always good to have everything ready before arrival.",
              explanation: "“It's good to have... ready”是更地道且礼貌的建议方式。",
            },
            casualVersion: "No worries. For next time, check our immigration website for requirements. Always good to have everything ready before you get here. Here's your visa — welcome!",
            formalityVariants: {
              casual: "No problem. Next time, check our website for what you need. Always best to have everything ready before you show up. Here's your visa — welcome!",
              standard: "No problem at all. For future reference, the requirements are listed on our immigration website. It's always good to have everything ready before you arrive. Here's your visa — welcome!",
              formal: "It was no trouble at all. For your future convenience, please note that all specific requirements are comprehensively detailed on our official immigration website. It is consistently advisable to ensure all necessary documentation is prepared prior to your arrival. Here is your processed visa – welcome to the country!",
            },
            keyPhrases: [
              { en: "for future reference", zh: "以后可以参考" },
              { en: "requirements", zh: "要求" },
              { en: "immigration website", zh: "移民局网站" },
            ],
            literalMeaning: "'For future reference' 字面意思是'供将来参考'，实际是委婉提醒你下次提前了解相关信息。",
            alternativeExpressions: [
              {
                textEn:
                  "All good! Next time, check our website beforehand — all the requirements are listed there. Here's your visa, welcome!",
                textZh: "都办好了！下次提前看看我们网站——所有要求都列在上面。这是您的签证，欢迎！",
                actionHint: "收好签证",
                frequency: "common",
              },
              {
                textEn:
                  "No problem at all. Tip for next time — everything you need is on our immigration website. Enjoy your stay!",
                textZh: "没关系。下次的小建议——所有需要的信息都在我们移民局网站上。祝旅途愉快！",
                actionHint: "记住网站地址",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场酒店接驳 ====================
  {
    id: "airport-22",
    category: "airport",
    titleZh: "机场酒店接驳",
    titleEn: "Airport Hotel Shuttle",
    description: "乘坐机场酒店接驳车或找到酒店接驳服务",
    otherRole: "酒店前台/接驳车司机",
    otherRoleIcon: "bus",
    flows: [
      {
        id: "find-shuttle",
        titleZh: "寻找接驳车",
        titleEn: "Finding the Hotel Shuttle",
        description: "在机场找到预订酒店的免费接驳车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm looking for the shuttle bus to the Airport Marriott. Where can I find it?",
            textZh: "你好，我在找去机场万豪酒店的接驳车。在哪里坐？",
            casualVersion: "Hey, where's the Marriott shuttle?",
            commonMistake: {
              wrong: "Where is the shuttle bus to the Airport Marriott?",
              correct: "Hi, I'm looking for the shuttle bus to the Airport Marriott. Where can I find it?",
              explanation: "“I'm looking for...” 比直接问“Where is...”更自然和客气。",
            },
            formalityVariants: {
              casual: "Hey, looking for the Marriott shuttle. Where's it at?",
              standard: "Hi, I'm looking for the shuttle bus to the Airport Marriott. Where can I find it?",
              formal:
                "Excuse me, could you please direct me to the shuttle service for the Airport Marriott? I'm trying to locate its pick-up point.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Hotel shuttles pick up outside Door 4 on the arrivals level. Look for the blue and red hotel shuttle signs. The Marriott shuttle runs every 15 minutes.",
            textZh: "酒店接驳车在到达层4号门外面上车。找蓝红色的酒店接驳车标识。万豪接驳车每15分钟一班。",
            keyPhrases: [
              { en: "hotel shuttles", zh: "酒店接驳车" },
              { en: "arrivals level", zh: "到达层" },
              { en: "runs every 15 minutes", zh: "每15分钟一班" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head to the ground transportation area, outer curb. Hotel shuttles are in Zone C.",
                textZh: "去地面交通区域，外侧路边。酒店接驳车在C区。",
                actionHint: "找C区",
                frequency: "common",
              },
            ],
            casualVersion:
              "Shuttles pick up outside Door 4 on arrivals. Just look for those blue and red signs. Marriott shuttle runs every 15.",
            formalityVariants: {
              casual:
                "Shuttles pick up outside Door 4 on arrivals. Look for the blue/red signs. Marriott shuttle's every 15 min.",
              standard:
                "Hotel shuttles pick up outside Door 4 on the arrivals level. Look for the blue and red hotel shuttle signs. The Marriott shuttle runs every 15 minutes.",
              formal:
                "The hotel shuttle services operate from outside Door 4, situated on the arrivals level. Please observe the designated blue and red hotel shuttle signage. The Marriott shuttle service is available every 15 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "I've been waiting for 20 minutes but the shuttle hasn't come. Should I call the hotel?",
            textZh: "我已经等了20分钟了但车还没来。要不要打电话给酒店？",
            casualVersion: "Been waiting 20 mins, shuttle's still not here. Should I call the hotel?",
            commonMistake: {
              wrong: "I waited for 20 minutes but the shuttle didn't come.",
              correct: "I've been waiting for 20 minutes but the shuttle hasn't come.",
              explanation: "“I've been waiting”表示持续状态，更符合语境。",
            },
            formalityVariants: {
              casual: "Waited 20 mins, no shuttle. Call the hotel?",
              standard: "I've been waiting for 20 minutes but the shuttle hasn't come. Should I call the hotel?",
              formal:
                "I have been waiting for approximately twenty minutes, and the shuttle has not yet arrived. Would it be advisable for me to contact the hotel directly?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, that's a good idea. The hotel's phone number should be on your booking confirmation. You can also use the courtesy phone on the wall over there — just press the Marriott button and it'll connect you directly.",
            textZh:
              "对，好主意。酒店电话号码应该在您的预订确认上。您也可以用那边墙上的免费电话——按万豪的按钮就能直接接通。",
            keyPhrases: [
              { en: "courtesy phone", zh: "免费电话" },
              { en: "booking confirmation", zh: "预订确认" },
              { en: "connect you directly", zh: "直接接通" },
            ],
            vocabNotes: {
              "courtesy phone": {
                meaningInContext: "在这句话里表示：机场提供的免费电话，可以直接拨打合作酒店，不需要投币",
                similarUsage: "类似用法：Use the courtesy phone to call for your ride.（用免费电话叫车）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Try calling the hotel — there's a free courtesy phone on the wall. Just hit the Marriott button.",
                textZh: "试试打电话给酒店——墙上有免费电话。按万豪的按钮就行。",
                actionHint: "用免费电话",
                frequency: "common",
              },
              {
                textEn:
                  "You can ring the hotel directly from the house phone over there. It's free and connects automatically.",
                textZh: "可以用那边的内线电话直接打给酒店。免费的，自动接通。",
                actionHint: "去打电话",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, good idea. Number's probably on your booking confirmation. Or just use that courtesy phone on the wall – hit the Marriott button, it'll connect ya.",
            culturalNote: "“courtesy phone”这种免费直拨电话在中国不常见。",
            formalityVariants: {
              casual: "Yeah, good idea. Number's on your booking. Or use the courtesy phone, just hit Marriott.",
              standard:
                "Yes, that's a good idea. The hotel's phone number should be on your booking confirmation. You can also use the courtesy phone on the wall over there — just press the Marriott button and it'll connect you directly.",
              formal:
                "Indeed, that would be a prudent course of action. The hotel's contact information should be readily available on your booking confirmation. Alternatively, you may utilize the courtesy phone located on the adjacent wall; simply select the Marriott option to be connected directly.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Hello, this is a guest checking in tonight. I'm at the airport but the shuttle hasn't arrived. Can you send one?",
            textZh: "你好，我是今晚入住的客人。我在机场但接驳车还没到。能派一辆吗？",
            casualVersion: "Hey, I'm checking in tonight. At the airport, but no shuttle yet. Can you send one?",
            commonMistake: {
              wrong: "I am guest checking in tonight. Shuttle not arrived. Can you send shuttle?",
              correct:
                "Hello, this is a guest checking in tonight. I'm at the airport but the shuttle hasn't arrived. Can you send one?",
              explanation: "缺少冠词和谓语，听起来不完整和不礼貌。",
            },
            formalityVariants: {
              casual: "Hi, checking in tonight. Airport, no shuttle. Send one?",
              standard:
                "Hello, this is a guest checking in tonight. I'm at the airport but the shuttle hasn't arrived. Can you send one?",
              formal:
                "Good evening. I am a guest with a reservation for tonight's stay. I am currently situated at the airport, however, the designated shuttle service has not yet arrived. Would it be possible to dispatch a shuttle?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "I'm sorry about that! The shuttle had a slight delay. It should be there in about 8 minutes. The driver's name is Mike, and the van is white with our logo. Are you at Door 4?",
            textZh: "非常抱歉！接驳车有点延迟。大约8分钟后到。司机叫Mike，白色面包车有我们的标志。您在4号门吗？",
            keyPhrases: [
              { en: "slight delay", zh: "有点延迟" },
              { en: "van", zh: "面包车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So sorry about the wait! The shuttle is running a few minutes late. It'll be there in about 8 minutes. Look for a white van with our logo.",
                textZh: "非常抱歉让您久等！接驳车晚了几分钟。大约8分钟到。找白色有我们标志的面包车。",
                actionHint: "留意白色面包车",
                frequency: "common",
              },
              {
                textEn:
                  "My apologies — the shuttle got held up in traffic. Mike is on his way, should be about 8 minutes. Are you at Door 4?",
                textZh: "抱歉——接驳车堵车了。司机Mike正在赶来，大约8分钟。您在4号门吗？",
                actionHint: "确认等候位置",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, my bad! Shuttle got a slight delay. Be there in 'bout 8 mins. Driver's Mike, white van with our logo. You at Door 4?",
            formalityVariants: {
              casual:
                "My apologies! Shuttle's delayed. 'Bout 8 mins. Mike's the driver, white van, our logo. At Door 4?",
              standard:
                "I'm sorry about that! The shuttle had a slight delay. It should be there in about 8 minutes. The driver's name is Mike, and the van is white with our logo. Are you at Door 4?",
              formal:
                "My sincerest apologies for the inconvenience! The shuttle service has experienced a minor delay. It is estimated to arrive within approximately eight minutes. The driver's name is Mike, and the vehicle is a white van prominently featuring our corporate logo. May I confirm if you are currently located at Door 4?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm at Door 4. I have two large suitcases — is there enough room?",
            textZh: "对，我在4号门。我有两个大箱子——车上放得下吗？",
            casualVersion: "Yeah, at Door 4. Got two big suitcases – enough room?",
            commonMistake: {
              wrong: "Yes, I'm at Door 4. I have two big luggages. Is there enough place?",
              correct: "Yes, I'm at Door 4. I have two large suitcases — is there enough room?",
              explanation: "“Luggage”是不可数名词，要用“suitcases”。“Enough room”比“enough place”更自然。",
            },
            formalityVariants: {
              casual: "Yep, Door 4. Got two big bags – room for 'em?",
              standard: "Yes, I'm at Door 4. I have two large suitcases — is there enough room?",
              formal:
                "Yes, I am indeed positioned at Door 4. I am accompanying two sizable suitcases — will there be sufficient space for them on the shuttle?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Absolutely, the shuttle can handle luggage for up to 12 guests. Mike will help you load your bags. Is there anything else I can help you with?",
            textZh: "没问题，接驳车能装12位客人的行李。Mike会帮您搬行李。还有其他需要帮忙的吗？",
            alternativeExpressions: [
              {
                textEn:
                  "Plenty of room for your bags. The driver will help you load everything. Anything else I can do for you?",
                textZh: "行李空间很充足。司机会帮您装。还有什么需要帮忙的吗？",
                actionHint: "等车来",
                frequency: "common",
              },
              {
                textEn:
                  "No problem at all, the van has lots of space. Mike will take care of your luggage when he arrives.",
                textZh: "完全没问题，面包车空间很大。Mike到了会帮您处理行李的。",
                actionHint: "等司机到",
                frequency: "common",
              },
            ],
            casualVersion: "Totally, shuttle can fit bags for like 12 people. Mike'll help load 'em up. Anything else?",
            formalityVariants: {
              casual: "Yup, shuttle fits bags for 12. Mike'll help. Anything else?",
              standard:
                "Absolutely, the shuttle can handle luggage for up to 12 guests. Mike will help you load your bags. Is there anything else I can help you with?",
              formal:
                "Certainly, the shuttle is equipped to accommodate luggage for up to twelve guests. Mike will be assisting you with the loading of your bags. Is there anything further I may assist you with at this time?",
            },
          },
          {
            speaker: "you",
            textEn: "Can I check in early? My flight just landed but check-in time isn't until 3 PM.",
            textZh: "能提前办理入住吗？我刚落地但入住时间要到下午3点。",
            casualVersion: "Can I check in early? Just landed, but check-in's not till 3.",
            commonMistake: {
              wrong: "Can I early check in? My flight just landing, but check-in time 3 PM.",
              correct: "Can I check in early? My flight just landed but check-in time isn't until 3 PM.",
              explanation: "“early”修饰“check in”，放在动词后。“landed”是过去式。",
            },
            formalityVariants: {
              casual: "Early check-in possible? Just landed, check-in's 3pm.",
              standard: "Can I check in early? My flight just landed but check-in time isn't until 3 PM.",
              formal:
                "I was wondering if an early check-in might be possible? My flight has just arrived, however, the official check-in time is not until 3:00 PM.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Let me check... Great news, your room is actually ready now! We can check you in as soon as you arrive. We also have a luggage storage room if you ever need to leave bags before or after checkout.",
            textZh:
              "我查一下……好消息，您的房间已经准备好了！到了就可以办入住。如果需要的话，我们也有行李寄存室，退房前后都可以寄存行李。",
            keyPhrases: [
              { en: "check in early", zh: "提前入住" },
              { en: "luggage storage room", zh: "行李寄存室" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news — your room is ready! You can check in as soon as you get here. We also offer luggage storage if you need it.",
                textZh: "好消息——房间已经好了！到了就可以办入住。如果需要的话我们也提供行李寄存。",
                actionHint: "到了直接入住",
                frequency: "common",
              },
              {
                textEn: "Lucky you, the room is available now! Come on in and we'll get you settled right away.",
                textZh: "您运气好，房间现在就可以用！过来我们马上给您办入住。",
                actionHint: "直接入住",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme check... Good news, your room's actually ready! We can check ya in soon as you get here. Plus, we got a luggage storage if you ever need to leave bags before or after checkout.",
            formalityVariants: {
              casual:
                "Lemme check... Good news, room's ready! Check you in soon as you're here. Also, luggage storage if you need it.",
              standard:
                "Let me check... Great news, your room is actually ready now! We can check you in as soon as you arrive. We also have a luggage storage room if you ever need to leave bags before or after checkout.",
              formal:
                "Allow me a moment to verify... Excellent news, your room is indeed prepared for occupancy at this moment! We will be able to process your check-in immediately upon your arrival. Furthermore, for your convenience, we also offer a secure luggage storage facility should you require it before or after your designated check-out time.",
            },
          },
        ],
      },
      {
        id: "airport-hotel-overnight",
        titleZh: "中转住宿",
        titleEn: "Transit Hotel Stay",
        description: "长时间转机需要在机场酒店过夜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a 14-hour layover. Are there any hotels inside the airport or nearby?",
            textZh: "你好，我有14小时的转机等待。机场里面或附近有酒店吗？",
            casualVersion: "Hey, got a 14-hour layover. Any hotels in the airport or close by?",
            commonMistake: {
              wrong: "I have 14 hours layover.",
              correct: "I have a 14-hour layover.",
              explanation: "“14-hour” 作形容词修饰 “layover”，中间用连字符，且hour用单数。",
            },
            formalityVariants: {
              casual: "Hey, I've got a 14-hour layover. Any hotels around the airport?",
              standard: "Hi, I have a 14-hour layover. Are there any hotels inside the airport or nearby?",
              formal:
                "Good morning/afternoon, I'm experiencing a 14-hour layover. Could you please inform me if there are any hotel accommodations available within or in close proximity to the airport?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "There's a transit hotel inside the terminal — you don't need to clear immigration. It's on the mezzanine level between Gates 30 and 35. There are also sleep pods near Gate 25 if you just want a nap.",
            textZh:
              "航站楼里面有一个中转酒店——不用过入境检查。在30到35号登机口之间的夹层。25号登机口附近也有休息舱，如果您只想小睡一下的话。",
            casualVersion: "There's a transit hotel in the terminal – no need to go through immigration. It's on the mezzanine between Gates 30 and 35. Plus, sleep pods near Gate 25 if you just wanna nap.",
            formalityVariants: {
              casual: "Yeah, there's a transit hotel right in the terminal, so you skip immigration. It's on the mezzanine, between Gates 30 and 35. And if you just need a quick nap, there are sleep pods near Gate 25.",
              standard: "There's a transit hotel inside the terminal — you don't need to clear immigration. It's on the mezzanine level between Gates 30 and 35. There are also sleep pods near Gate 25 if you just want a nap.",
              formal: "Certainly, we offer a transit hotel situated within the terminal building, which does not necessitate passing through immigration. You will find it on the mezzanine level, positioned between Gates 30 and 35. Additionally, for shorter rest periods, sleep pods are available near Gate 25.",
            },
            keyPhrases: [
              { en: "transit hotel", zh: "中转酒店" },
              { en: "clear immigration", zh: "过入境检查" },
              { en: "mezzanine level", zh: "夹层" },
              { en: "sleep pods", zh: "休息舱" },
            ],
            vocabNotes: {
              "clear immigration": {
                meaningInContext: "在这句话里表示：通过入境检查离开机场管控区域（中转酒店在管控区内，不需要出关）",
                similarUsage:
                  "类似用法：You'll need to clear immigration and customs before leaving the airport.（离开机场前需要通过入境和海关检查）",
              },
              "sleep pods": {
                meaningInContext: "在这句话里表示：机场提供的小型休息舱/胶囊舱，按小时计费",
                similarUsage:
                  "类似用法：The sleep pods are great for short naps between flights.（休息舱很适合两班飞机之间小睡一下）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "There's a hotel right here in the terminal — no need to go through immigration. Or if you just want a quick nap, there are sleep pods near Gate 25.",
                textZh: "航站楼里就有酒店——不用出关。或者如果只想小睡一下，25号登机口附近有休息舱。",
                actionHint: "选择休息方式",
                frequency: "common",
              },
              {
                textEn:
                  "You can stay at the transit hotel on the mezzanine floor — it's airside, so no passport control needed.",
                textZh: "可以住夹层的中转酒店——在隔离区内，不用过护照检查。",
                actionHint: "去夹层找酒店",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much are the sleep pods? And the transit hotel?",
            textZh: "休息舱多少钱？中转酒店呢？",
            casualVersion: "What's the price for the sleep pods? And the hotel?",
            commonMistake: {
              wrong: "How much money sleep pods?",
              correct: "How much are the sleep pods?",
              explanation: "问价格时需用 “How much is/are...” 搭配名词。",
            },
            formalityVariants: {
              casual: "So, what's the deal with the sleep pods? And the hotel?",
              standard: "How much are the sleep pods? And the transit hotel?",
              formal: "Could you please inform me of the rates for both the sleep pods and the transit hotel?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "The sleep pods are $15 per hour, minimum 2 hours. The transit hotel has rooms starting at $80 for 6 hours, or $120 for an overnight stay. Both include WiFi. The hotel also has showers, which is nice after a long flight.",
            textZh:
              "休息舱每小时15美元，最少2小时。中转酒店的房间6小时起价80美元，过夜120美元。都包含WiFi。酒店还有淋浴，长途飞行后很舒服。",
            casualVersion: "Sleep pods are $15 an hour, 2-hour minimum. Hotel rooms start at $80 for 6 hours, or $120 for an overnight. Both come with WiFi. And the hotel's got showers, which is great after a long flight.",
            formalityVariants: {
              casual: "Okay, so sleep pods are fifteen bucks an hour, two-hour minimum. The hotel's eighty for six hours, or one-twenty overnight. Both have WiFi. And the hotel's got showers, which is awesome after a long trip.",
              standard: "The sleep pods are $15 per hour, minimum 2 hours. The transit hotel has rooms starting at $80 for 6 hours, or $120 for an overnight stay. Both include WiFi. The hotel also has showers, which is nice after a long flight.",
              formal: "Certainly, the sleep pods are priced at $15 per hour, with a minimum booking duration of two hours. The transit hotel offers rooms beginning at $80 for a six-hour period, or $120 for an overnight stay. Both options include complimentary WiFi access. Furthermore, the hotel provides shower facilities, which many guests find beneficial following extended flights.",
            },
            keyPhrases: [
              { en: "per hour", zh: "每小时" },
              { en: "minimum", zh: "最少" },
              { en: "overnight stay", zh: "过夜" },
              { en: "showers", zh: "淋浴" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sleep pods are $15 an hour, minimum two hours. The transit hotel starts at $80 for 6 hours. Both have WiFi and the hotel has showers.",
                textZh: "休息舱每小时15美元，最少两小时。中转酒店6小时起80美元。都有WiFi，酒店还有淋浴。",
                actionHint: "比较两个选项",
                frequency: "common",
              },
              {
                textEn:
                  "The pods are cheaper for a quick rest. If you want a proper bed and a shower, the transit hotel is $80 for 6 hours.",
                textZh: "休息舱短暂休息更便宜。想要正经床和淋浴的话，中转酒店6小时80美元。",
                actionHint: "根据需求选择",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the transit hotel for 6 hours. Can I book it right now?",
            textZh: "那我住中转酒店，6小时。现在就能订吗？",
            casualVersion: "I'll do the transit hotel for 6 hours. Can I book it now?",
            commonMistake: {
              wrong: "I will choose the transit hotel.",
              correct: "I'll take the transit hotel.",
              explanation: "“take” 或 “go with” 在这种语境下更自然，表示选择。",
            },
            formalityVariants: {
              casual: "Okay, I'll go with the transit hotel for six hours. Can I get that booked now?",
              standard: "I'll take the transit hotel for 6 hours. Can I book it right now?",
              formal: "I would like to reserve the transit hotel for a duration of six hours. Is it possible to complete the booking at this moment?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "You can book directly at the hotel counter upstairs. Take the elevator behind me to the mezzanine level. They usually have availability, but it gets busy during peak hours. I'd suggest going now.",
            textZh:
              "可以直接到楼上酒店前台订。乘我后面的电梯到夹层。通常都有空房，但高峰时段会比较满。建议您现在就去。",
            casualVersion: "Just book it at the hotel counter upstairs. Elevator behind me, up to the mezzanine. They usually have rooms, but it gets packed during peak hours. You should probably go now.",
            formalityVariants: {
              casual: "Just head upstairs to the hotel counter to book. The elevator's right behind me, takes you to the mezzanine. They usually have space, but it can get super busy during peak times, so probably best to go now.",
              standard: "You can book directly at the hotel counter upstairs. Take the elevator behind me to the mezzanine level. They usually have availability, but it gets busy during peak hours. I'd suggest going now.",
              formal: "You may proceed directly to the hotel counter located upstairs for your booking. Kindly utilize the elevator behind me to access the mezzanine level. While availability is generally good, please note that it tends to become quite busy during peak operational hours. Therefore, I recommend heading there promptly.",
            },
            keyPhrases: [
              { en: "book directly", zh: "直接预订" },
              { en: "availability", zh: "空房" },
              { en: "peak hours", zh: "高峰时段" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just go straight to the hotel front desk upstairs. They usually have rooms, but it gets busy late at night.",
                textZh: "直接去楼上酒店前台就行。通常都有房间，但深夜会比较忙。",
                actionHint: "尽快去订",
                frequency: "common",
              },
              {
                textEn: "Head up to the mezzanine and book at the counter. I'd go now before it fills up.",
                textZh: "上夹层去前台订。建议现在就去，免得满了。",
                actionHint: "抓紧时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Will they wake me up in time for my connecting flight?",
            textZh: "好的。他们会叫醒我赶上转机航班吗？",
            casualVersion: "Cool. Will they wake me for my connecting flight?",
            commonMistake: {
              wrong: "They will wake me up?",
              correct: "Will they wake me up?",
              explanation: "疑问句需要倒装，动词 “will” 提前。",
            },
            formalityVariants: {
              casual: "Awesome. Can they give me a wake-up call for my next flight?",
              standard: "Great. Will they wake me up in time for my connecting flight?",
              formal: "Excellent. Do they provide a wake-up service to ensure I am alert for my connecting flight?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes, they offer a wake-up call service. Just tell them your flight time at check-in. They'll call your room 2 hours before departure. Also, make sure to set your own alarm as a backup!",
            textZh:
              "会的，他们有叫醒服务。入住时告诉他们您的航班时间就行。他们会在起飞前2小时打电话到房间。另外，自己也设个闹钟作为备用！",
            casualVersion: "Yeah, they do wake-up calls. Just give 'em your flight time when you check in. They'll call your room 2 hours before you leave. Oh, and set your own alarm too, just in case!",
            formalityVariants: {
              casual: "Yep, they totally do wake-up calls. Just let them know your flight time when you check in. They'll call your room two hours before your flight takes off. And, hey, definitely set your own alarm as a backup!",
              standard: "Yes, they offer a wake-up call service. Just tell them your flight time at check-in. They'll call your room 2 hours before departure. Also, make sure to set your own alarm as a backup!",
              formal: "Yes, they do indeed provide a wake-up call service. Kindly inform them of your flight departure time upon check-in, and they will call your room approximately two hours prior to your flight. Additionally, it is highly advisable to set a personal alarm as a precautionary measure.",
            },
            keyPhrases: [
              { en: "wake-up call", zh: "叫醒服务" },
              { en: "set your own alarm", zh: "自己设闹钟" },
              { en: "backup", zh: "备用" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "They do wake-up calls. Just tell them your flight time when you check in. And set your phone alarm too, just in case!",
                textZh: "他们有叫醒服务。入住时告诉他们航班时间就行。手机闹钟也设一个，以防万一！",
                actionHint: "双重保险",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely — they'll ring your room before your flight. But I always recommend setting a personal alarm as backup.",
                textZh: "当然——他们会在航班前打电话到房间。但我总是建议自己再设个闹钟备用。",
                actionHint: "自己也设闹钟",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good advice. Thanks so much for your help!",
            textZh: "好建议。非常感谢！",
            casualVersion: "Good call. Thanks a bunch for the help!",
            commonMistake: {
              wrong: "Thank you for your help very much.",
              correct: "Thanks so much for your help!",
              explanation: "“very much” 通常放在动词后或句末，“so much” 语气更自然。",
            },
            formalityVariants: {
              casual: "Oh, good thinking. Appreciate the help!",
              standard: "Good advice. Thanks so much for your help!",
              formal: "That is excellent advice. I genuinely appreciate all of your assistance!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 投诉/服务问题 ====================
  {
    id: "airport-23",
    category: "airport",
    titleZh: "航空公司投诉",
    titleEn: "Airline Complaints",
    description: "对航班服务、座位安排或其他问题进行投诉",
    otherRole: "航空公司客服/值班经理",
    otherRoleIcon: "message-circle",
    flows: [
      {
        id: "seat-issue",
        titleZh: "座位问题",
        titleEn: "Seat Assignment Issue",
        description: "预选的座位被更改，需要投诉解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I specifically booked a window seat but my boarding pass shows a middle seat. I even paid extra for the seat selection.",
            textZh: "打扰了，我明明订的靠窗座位，但登机牌上显示的是中间座位。我还额外付了选座费。",
            casualVersion:
              "Hey, 'scuse me, I booked a window seat, but my boarding pass says middle. Even paid extra for it.",
            culturalNote: "美国办理业务时通常直接说明来意，无需过多客套。",
            commonMistake: {
              wrong: "Excuse me, I booked window seat.",
              correct: "Excuse me, I booked a window seat.",
              explanation: "中文里不会强调一个座位，但英文里需要冠词。",
            },
            formalityVariants: {
              casual:
                "Hey, 'scuse me, I booked a window seat, but my boarding pass says middle. Even paid extra for it.",
              standard:
                "Excuse me, I specifically booked a window seat but my boarding pass shows a middle seat. I even paid extra for the seat selection.",
              formal:
                "Pardon me, I had specifically reserved a window seat, however, my current boarding pass indicates a middle seat. Furthermore, I incurred an additional charge for this seat selection.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I'm sorry about that. Let me look into your booking. Can I see your boarding pass and the receipt for the seat selection?",
            textZh: "非常抱歉。让我查一下您的预订。能看一下您的登机牌和选座费收据吗？",
            keyPhrases: [
              { en: "look into", zh: "查一下" },
              { en: "seat selection", zh: "选座" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "That shouldn't have happened. Can I pull up your reservation? What's your booking reference?",
                textZh: "这不应该发生。我可以调出您的预订吗？订单号是多少？",
                actionHint: "准备好订单号",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry 'bout that. Lemme check your booking. Can I see your boarding pass and the seat selection receipt?",
            commonMistake: {
              wrong: "Let me check your booking. Can I see your boarding pass and your seat selection receipt?",
              correct:
                "Let me look into your booking. Can I see your boarding pass and the receipt for the seat selection?",
              explanation: "英文避免重复使用所有格，第二次提到时用 'the' 即可。",
            },
            formalityVariants: {
              casual:
                "Oh, sorry 'bout that. Lemme check your booking. Can I see your boarding pass and the seat selection receipt?",
              standard:
                "I'm sorry about that. Let me look into your booking. Can I see your boarding pass and the receipt for the seat selection?",
              formal:
                "My apologies for this inconvenience. Allow me to investigate your reservation. May I please see your boarding pass and the documentation for your seat selection fee?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Here's my confirmation email showing seat 22A — a window seat. And here's the $35 charge on my credit card statement.",
            textZh: "这是我的确认邮件，显示22A——靠窗座位。这是信用卡账单上35美元的扣款。",
            casualVersion:
              "Here's my confirmation email, shows 22A, window seat. And here's the $35 on my credit card statement.",
            commonMistake: {
              wrong: "This is my confirmation email.",
              correct: "Here's my confirmation email.",
              explanation: '展示东西时用 "Here\'s" 比 "This is" 更自然。',
            },
            formalityVariants: {
              casual:
                "Here's my confirmation email, shows 22A, window seat. And here's the $35 on my credit card statement.",
              standard:
                "Here's my confirmation email showing seat 22A — a window seat. And here's the $35 charge on my credit card statement.",
              formal:
                "I have my confirmation email here, which clearly indicates seat 22A, a window seat. Additionally, here is the $35 charge reflected on my credit card statement.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "I see. It looks like there was an aircraft change this morning, and the seat map was reconfigured. That's why your original seat assignment was lost. I apologize for the inconvenience.",
            textZh:
              "我看到了。看起来今天早上换了飞机型号，座位图被重新配置了。所以您原来的座位分配丢失了。对此给您带来的不便深表歉意。",
            commonMistake: {
              wrong: "I understand.",
              correct: "I see.",
              explanation: "在对话中，I see比I understand更自然地表示“我明白了”。",
            },
            keyPhrases: [
              { en: "aircraft change", zh: "换了飞机型号" },
              { en: "reconfigured", zh: "重新配置" },
              { en: "seat assignment", zh: "座位分配" },
            ],
            vocabNotes: {
              "aircraft change": {
                meaningInContext: "在这句话里表示：航空公司因维护或调度原因更换了执飞飞机，可能导致座位重新安排",
                similarUsage:
                  "类似用法：Due to an aircraft change, all seat assignments have been updated.（由于换机型，所有座位分配已更新）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "It looks like the plane was swapped this morning, so all the seats got reshuffled. I'm sorry about that.",
                textZh: "看起来今早换了飞机，所有座位都被重新分配了。非常抱歉。",
                actionHint: "要求重新安排座位",
                frequency: "common",
              },
              {
                textEn:
                  "There was an equipment change and your original seat doesn't exist on this aircraft. My apologies.",
                textZh: "因为更换机型，您原来的座位在这架飞机上不存在了。非常抱歉。",
                actionHint: "要求解决方案",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got it. Looks like they swapped planes this morning, and the seat map got messed up. That's why your original seat disappeared. My bad, sorry for the hassle.",
            formalityVariants: {
              casual:
                "Got it. Looks like they swapped planes this morning, and the seat map got messed up. That's why your original seat disappeared. My bad, sorry for the hassle.",
              standard:
                "I see. It looks like there was an aircraft change this morning, and the seat map was reconfigured. That's why your original seat assignment was lost. I apologize for the inconvenience.",
              formal:
                "I understand. It appears there was an unscheduled aircraft substitution earlier today, resulting in a reconfiguration of the seating arrangement. Consequently, your original seat assignment was forfeited. I sincerely apologize for any inconvenience this may have caused.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I understand things happen, but I'd like to get a window seat. And I expect a refund for the seat selection fee since it wasn't honored.",
            textZh: "我理解会有意外，但我想要一个靠窗座位。而且既然选座没有兑现，我希望退还选座费。",
            casualVersion:
              "Yeah, I get that, stuff happens. But I still want a window seat. And I expect my money back for the seat fee since it wasn't honored.",
            commonMistake: {
              wrong: "I understand things happen, but I want a window seat.",
              correct: "I understand things happen, but I'd like to get a window seat.",
              explanation: '"I want" 听起来过于直接，"I\'d like" 更礼貌客气。',
            },
            formalityVariants: {
              casual:
                "Yeah, I get that, stuff happens. But I still want a window seat. And I expect my money back for the seat fee since it wasn't honored.",
              standard:
                "I understand things happen, but I'd like to get a window seat. And I expect a refund for the seat selection fee since it wasn't honored.",
              formal:
                "While I acknowledge that unforeseen circumstances can arise, I specifically request to be seated in a window seat. Furthermore, I anticipate a full refund for the seat selection fee, as the service was not rendered as agreed.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Absolutely, that's fair. Let me check available window seats... I can move you to 18A. It's actually a better seat — more legroom near the emergency exit. And I'll process a full refund of the $35 seat fee right now.",
            textZh:
              "完全合理。让我查一下可用的靠窗座位……我可以给您安排18A。其实是更好的位置——靠近紧急出口，腿部空间更大。我现在就处理35美元选座费的全额退款。",
            commonMistake: {
              wrong: "Okay.",
              correct: "Absolutely, that's completely fair.",
              explanation: "“Okay”有点敷衍，用Absolutely/fair更显理解与同意。",
            },
            keyPhrases: [
              { en: "legroom", zh: "腿部空间" },
              { en: "emergency exit", zh: "紧急出口" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I've got a window seat for you — 18A, exit row with extra legroom. And I'll waive the seat fee entirely.",
                textZh: "给您找了一个靠窗位——18A，紧急出口排，腿部空间更大。选座费全免。",
                actionHint: "接受新座位",
                frequency: "common",
              },
              {
                textEn: "Good news — 18A is open. It's actually an upgrade. I'll refund the $35 right away.",
                textZh: "好消息——18A有空。其实算是升级了。35美元马上退给您。",
                actionHint: "确认退款",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, totally fair. Lemme check for window seats... I can put you in 18A. It's actually better – more legroom by the exit. And I'll refund that $35 seat fee right away.",
            formalityVariants: {
              casual:
                "Yeah, totally fair. Lemme check for window seats... I can put you in 18A. It's actually better – more legroom by the exit. And I'll refund that $35 seat fee right away.",
              standard:
                "Absolutely, that's fair. Let me check available window seats... I can move you to 18A. It's actually a better seat — more legroom near the emergency exit. And I'll process a full refund of the $35 seat fee right now.",
              formal:
                "Certainly, your request is entirely reasonable. Allow me to ascertain the availability of window seats... I can reassign you to seat 18A, which is, in fact, a superior seat offering additional legroom adjacent to an emergency exit. Concurrently, I will initiate the full refund of the $35 seat selection fee immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great. How long will the refund take?",
            textZh: "听起来很好。退款要多久？",
            casualVersion: "Sounds good. How long for the refund?",
            commonMistake: {
              wrong: "How many days for refund?",
              correct: "How long will the refund take?",
              explanation: '询问时间长度用 "how long" 而不是 "how many days"。',
            },
            formalityVariants: {
              casual: "Sounds good. How long for the refund?",
              standard: "That sounds great. How long will the refund take?",
              formal:
                "That is excellent news. Could you please inform me of the estimated timeframe for the refund processing?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "The refund will appear on your credit card within 5 to 7 business days. Here's your updated boarding pass with seat 18A. Is there anything else I can help with?",
            textZh: "退款会在5到7个工作日内到您的信用卡。这是更新后的登机牌，座位18A。还有其他需要帮忙的吗？",
            commonMistake: {
              wrong: "The refund will arrive.",
              correct: "The refund will appear on your credit card.",
              explanation: "退款通常说“出现在卡上”或“处理到卡上”，arrive较少用。",
            },
            keyPhrases: [
              { en: "business days", zh: "工作日" },
              { en: "updated boarding pass", zh: "更新后的登机牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "You should see the refund within a week. Here's your new boarding pass — 18A, window seat.",
                textZh: "一周内应该能看到退款。这是您新的登机牌——18A，靠窗。",
                actionHint: "确认新登机牌",
                frequency: "common",
              },
              {
                textEn: "The money will be back on your card in about 5 business days. All sorted — anything else?",
                textZh: "钱大约5个工作日退回到卡上。都搞定了——还有其他事吗？",
                actionHint: "问题已解决",
                frequency: "common",
              },
            ],
            casualVersion:
              "Refund'll show up on your card in 5 to 7 biz days. Here's your new boarding pass, 18A. Anything else?",
            formalityVariants: {
              casual:
                "Refund'll show up on your card in 5 to 7 biz days. Here's your new boarding pass, 18A. Anything else?",
              standard:
                "The refund will appear on your credit card within 5 to 7 business days. Here's your updated boarding pass with seat 18A. Is there anything else I can help with?",
              formal:
                "The refund should be reflected on your credit card statement within approximately 5 to 7 business days. Here is your revised boarding pass, indicating seat 18A. May I be of further assistance?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's everything. Thank you for resolving this so quickly.",
            textZh: "没有了，就这些。谢谢这么快解决。",
            casualVersion: "Nah, that's it. Thanks for sorting this out fast.",
            commonMistake: {
              wrong: "No, all. Thank you solve this so quickly.",
              correct: "No, that's everything. Thank you for resolving this so quickly.",
              explanation: '"that\'s all" 或 "that\'s everything" 更自然。动词 "resolve" 比 "solve" 更正式恰当。',
            },
            formalityVariants: {
              casual: "Nah, that's it. Thanks for sorting this out fast.",
              standard: "No, that's everything. Thank you for resolving this so quickly.",
              formal: "No, that will be all. I genuinely appreciate your prompt resolution of this matter.",
            },
          },
        ],
      },
      {
        id: "service-complaint",
        titleZh: "服务投诉",
        titleEn: "Filing a Formal Complaint",
        description: "对航空公司服务不满进行正式投诉",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "I'd like to file a formal complaint. My flight was delayed by 6 hours and we were given almost no information during the wait.",
            textZh: "我要进行正式投诉。我的航班延误了6小时，等待期间几乎没有任何信息通知。",
            casualVersion: "Wanna file a complaint. My flight was 6 hours late, and we got hardly any info waiting.",
            commonMistake: {
              wrong: "I want to file a formal complaint.",
              correct: "I'd like to file a formal complaint.",
              explanation: "“I want” 听起来很生硬，用 “I'd like to” 更礼貌。",
            },
            formalityVariants: {
              casual: "Wanna complain. My flight was super late, 6 hours, and we got no info.",
              standard:
                "I'd like to file a formal complaint. My flight was delayed by 6 hours, and we received almost no information during the wait.",
              formal:
                "Excuse me, I need to formally register a complaint. My flight experienced a delay of six hours, and we were provided with minimal, if any, updates throughout the waiting period.",
            },
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn:
              "I'm very sorry about your experience. I understand how frustrating that must be. Could you give me your flight details so I can look into what happened?",
            textZh: "非常抱歉您的遭遇。我理解这一定很让人沮丧。能给我您的航班信息让我了解一下情况吗？",
            commonMistake: {
              wrong: "I know that you must be frustrated.",
              correct: "I understand how frustrating that must have been.",
              explanation: "“I understand how...” 是一种更礼貌、更体恤的表达方式，避免直接假设对方感受。",
            },
            casualVersion: "Ugh, so sorry to hear that. I get how frustrating that must've been. Can I get your flight info so I can look into it?",
            formalityVariants: {
              casual: "Ugh, so sorry to hear that. I get how frustrating that must've been. Can I get your flight info so I can look into it?",
              standard: "I'm very sorry to hear that you experienced this. I understand how frustrating that must have been. Could you please provide me with your flight information so I can look into the details?",
              formal: "Please accept my sincerest apologies for your experience. I fully comprehend how distressing such an situation must be. Would you kindly provide me with your flight information so I may thoroughly investigate the matter?",
            },
            keyPhrases: [
              { en: "file a formal complaint", zh: "进行正式投诉" },
              { en: "frustrating", zh: "令人沮丧的" },
              { en: "look into", zh: "了解/调查" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm really sorry to hear that. Let me pull up your flight info and see what went wrong.",
                textZh: "非常抱歉听到这件事。让我调出您的航班信息看看出了什么问题。",
                actionHint: "提供航班信息",
                frequency: "common",
              },
              {
                textEn:
                  "That sounds terrible. Can you walk me through what happened? I want to make sure we address this properly.",
                textZh: "听起来太糟糕了。能跟我说说经过吗？我想确保妥善处理这件事。",
                actionHint: "描述事情经过",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Flight BA 295, yesterday from London. The delay was due to a mechanical issue. No meal vouchers were offered, and the staff couldn't tell us when the flight would depart.",
            textZh: "BA 295航班，昨天从伦敦起飞的。延误是因为机械故障。没有提供餐券，工作人员也说不清什么时候起飞。",
            casualVersion: "Flight BA 295, yesterday from London. Delay was mechanical. No meal vouchers, and staff couldn't say when we'd leave.",
            commonMistake: {
              wrong: "Flight BA 295, yesterday from London. The delay is because of mechanical problem. No meal tickets were offered, and the staff also can't say when will take off.",
              correct: "Flight BA 295, yesterday from London. The delay was due to a mechanical issue. No meal vouchers were offered, and the staff couldn't say when we would take off.",
              explanation: "时态和语态错误，且 'meal ticket' 通常说 'meal voucher'。'can't say' 更自然。",
            },
            formalityVariants: {
              casual: "Flight BA 295, yesterday from London. Delay was mechanical. No meal vouchers, and staff couldn't say when we'd leave.",
              standard: "It was Flight BA 295, yesterday from London. The delay was due to a mechanical issue. No meal vouchers were offered, and the staff couldn't provide a clear estimated time of departure.",
              formal: "The flight in question was BA 295, departing from London yesterday. The delay was attributed to a mechanical issue. Furthermore, no meal vouchers were distributed, and the staff were unable to provide a definitive estimated time of departure.",
            },
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn:
              "I see. Under our policy, for delays over 4 hours due to mechanical issues, passengers are entitled to meal vouchers and, if overnight, hotel accommodation. It sounds like that wasn't properly communicated. I sincerely apologize.",
            textZh:
              "我了解了。根据我们的政策，因机械故障延误超过4小时，旅客有权获得餐券，如果过夜的话还有酒店住宿。看来当时没有正确告知。我真诚地道歉。",
            commonMistake: {
              wrong: "You should have received meal vouchers.",
              correct: "It sounds like that wasn't communicated properly.",
              explanation: "避免听起来像指责对方没做对，而是强调信息传达不到位。",
            },
            casualVersion: "Got it. Our policy for 4+ hour mechanical delays says passengers get meal vouchers, and hotels if it's overnight. Sounds like that wasn't communicated properly. My sincere apologies.",
            formalityVariants: {
              casual: "Got it. Our policy for 4+ hour mechanical delays says passengers get meal vouchers, and hotels if it's overnight. Sounds like that wasn't communicated properly. My sincere apologies.",
              standard: "I see. Under our policy, for delays exceeding 4 hours due to mechanical issues, passengers are entitled to meal vouchers and, if overnight, hotel accommodation. It sounds like that wasn't properly communicated at the time. I sincerely apologize.",
              formal: "I understand. Pursuant to our company policy, for delays surpassing four hours stemming from mechanical issues, passengers are entitled to receive meal vouchers and, in cases requiring an overnight stay, hotel accommodations. It appears this information was not appropriately conveyed to you at the time. Please accept my most profound apologies.",
            },
            keyPhrases: [
              { en: "entitled to", zh: "有权获得" },
              { en: "meal vouchers", zh: "餐券" },
              { en: "hotel accommodation", zh: "酒店住宿" },
              { en: "communicated", zh: "告知/通知" },
            ],
            vocabNotes: {
              "entitled to": {
                meaningInContext: "在这句话里表示：根据规定/政策应该享有的权利",
                similarUsage:
                  "类似用法：You're entitled to a full refund under consumer protection law.（根据消费者保护法你有权获得全额退款）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For a mechanical delay over 4 hours, you should've received meal vouchers and possibly a hotel. That clearly didn't happen and I'm sorry.",
                textZh: "因机械故障延误超过4小时，您本应收到餐券，可能还有酒店住宿。显然没有做到，非常抱歉。",
                actionHint: "了解应有权益",
                frequency: "common",
              },
              {
                textEn:
                  "Our policy is clear — meal vouchers and accommodation for delays this long. You were let down and I apologize.",
                textZh: "我们的政策很明确——这么长的延误应提供餐券和住宿。我们辜负了您，非常抱歉。",
                actionHint: "要求补偿",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I ended up spending $60 on food at the airport. What kind of compensation can I get?",
            textZh: "我最后在机场花了60美元吃饭。我能得到什么补偿？",
            commonMistake: {
              wrong: "What compensation I can get?",
              correct: "What kind of compensation can I get?",
              explanation: "问句语序应为 “can I get”，且缺少 “kind of” 使表达不完整。",
            },
            casualVersion: "Ended up spending sixty bucks on food at the airport. What kind of compensation can I get?",
            formalityVariants: {
              casual: "Ended up spending sixty bucks on food at the airport. What kind of compensation can I get?",
              standard: "I ended up spending $60 on food at the airport. What kind of compensation can I get?",
              formal: "Consequently, I expended $60 on food purchases at the airport. What form of compensation might I be eligible to receive?",
            },
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn:
              "I can reimburse you for the $60 in food expenses right now if you have the receipts. Additionally, I'd like to offer you a $200 travel voucher for a future flight as a goodwill gesture. We can also credit 5,000 bonus miles to your loyalty account.",
            textZh:
              "如果您有收据，我现在就可以报销60美元的餐费。另外，作为善意补偿，我想提供一张200美元的旅行代金券用于下次乘机。我们还可以往您的常旅客账户里加5000额外里程。",
            commonMistake: {
              wrong: "I will give you a voucher.",
              correct: "I'd like to offer you a $200 travel voucher.",
              explanation: "用I'd like to offer听起来更礼貌，是主动提供帮助而非命令。",
            },
            casualVersion: "I can pay you back for the $60 food if you have receipts. Plus, as a goodwill gesture, I want to offer you a $200 travel voucher for future flights. And we can add 5,000 extra miles to your frequent flyer account.",
            formalityVariants: {
              casual: "I can pay you back for the $60 food if you have receipts. Plus, as a goodwill gesture, I want to offer you a $200 travel voucher for future flights. And we can add 5,000 extra miles to your frequent flyer account.",
              standard: "I can reimburse you for the $60 in food expenses right now if you have the receipts. Additionally, I would like to offer a $200 travel voucher as a gesture of goodwill for future travel. We can also credit 5,000 additional miles to your frequent flyer account.",
              formal: "I am authorized to reimburse you for the $60 in food expenses immediately, provided you have the corresponding receipts. Furthermore, as a gesture of goodwill, I would like to extend a $200 travel voucher for your future flights. We can also credit an additional 5,000 miles to your frequent flyer account.",
            },
            keyPhrases: [
              { en: "reimburse", zh: "报销" },
              { en: "travel voucher", zh: "旅行代金券" },
              { en: "goodwill gesture", zh: "善意补偿" },
              { en: "bonus miles", zh: "额外里程" },
              { en: "loyalty account", zh: "常旅客账户" },
            ],
            culturalMeaning:
              "'Goodwill gesture' 表面是'善意表示'，实际上是航空公司在不完全承认责任的情况下给予的补偿。接受后通常意味着放弃进一步追究。",
            alternativeExpressions: [
              {
                textEn:
                  "Show me the receipts and I'll process the reimbursement today. On top of that, I can offer a $200 flight credit.",
                textZh: "给我看收据，今天就处理报销。另外还可以给您200美元的航班抵扣。",
                actionHint: "出示收据",
                frequency: "common",
              },
              {
                textEn: "We'll cover your out-of-pocket expenses and throw in some bonus miles as well.",
                textZh: "我们会报销您的自费开支，再额外赠送一些里程。",
                actionHint: "了解补偿方案",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I appreciate the offer. I do have the food receipts. Can I also get a written confirmation of the complaint for my records?",
            textZh: "感谢提议。我有餐费收据。能给我一份投诉的书面确认吗？留个记录。",
            commonMistake: {
              wrong: "Can I get a written confirmation of the complaint to record?",
              correct: "Can I also get a written confirmation of the complaint for my records?",
              explanation: "“to record” 说法不地道，应使用 “for my records” (作为存档)。",
            },
            casualVersion: "Appreciate that. I do have the food receipts. Can I also get a written complaint confirmation for my records?",
            formalityVariants: {
              casual: "Appreciate that. I do have the food receipts. Can I also get a written complaint confirmation for my records?",
              standard: "I appreciate the offer. I do have the food receipts. Can I also get a written confirmation of the complaint for my records?",
              formal: "I am grateful for your generous offer. I do possess the food receipts. May I also request a written confirmation of this complaint for my personal records?",
            },
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn:
              "Of course. I'll email you a formal acknowledgment with a case reference number. You can use it to follow up online or by phone. The reimbursement will go to the credit card on file, and the travel voucher code will be in the email as well.",
            textZh:
              "当然。我会发一封正式确认邮件给您，附有案例编号。您可以用它在线或打电话跟进。报销会退到档案中的信用卡上，旅行代金券代码也会在邮件里。",
            commonMistake: {
              wrong: "Okay, I will send you an email.",
              correct: "Of course. I will send you a formal confirmation email with a case number...",
              explanation: "“Of course”更显乐意提供帮助，并详细说明会发送什么以及如何使用，更专业。",
            },
            casualVersion: "Totally. I'll send you an official email with a case number. You can use that to follow up online or by phone. Reimbursement will go to the card on file, and the travel voucher code will be in the email too.",
            formalityVariants: {
              casual: "Totally. I'll send you an official email with a case number. You can use that to follow up online or by phone. Reimbursement will go to the card on file, and the travel voucher code will be in the email too.",
              standard: "Of course. I will send you an official confirmation email with a case number. You can use it to follow up online or by phone. The reimbursement will be credited to the credit card on file, and the travel voucher code will also be included in the email.",
              formal: "Certainly. I will dispatch an official confirmation email to you, which will include a unique case number. This number can be utilized for subsequent follow-up inquiries, either online or via telephone. The reimbursement will be processed to the credit card associated with your file, and the travel voucher code will also be detailed within the email.",
            },
            keyPhrases: [
              { en: "formal acknowledgment", zh: "正式确认" },
              { en: "case reference number", zh: "案例编号" },
              { en: "follow up", zh: "跟进" },
              { en: "on file", zh: "档案中的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll send you an email confirmation with a reference number. You can follow up anytime using that number.",
                textZh: "我会发一封确认邮件给您，附带编号。随时可以用这个编号跟进。",
                actionHint: "保存确认邮件",
                frequency: "common",
              },
              {
                textEn: "You'll get everything in writing — the case number, the refund details, and the voucher code.",
                textZh: "所有内容都会给您书面确认——案例号、退款详情和代金券代码。",
                actionHint: "检查邮件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you for handling this professionally. I hope the communication improves for other passengers in the future.",
            textZh: "谢谢您专业的处理。希望以后其他乘客的信息通知能改善。",
            commonMistake: {
              wrong: "Hope the communication will improve for other passengers in the future.",
              correct: "I hope the communication improves for other passengers in the future.",
              explanation: "“hope that” 后面常省略 “will” 以表达愿望而非单纯预测。",
            },
            casualVersion: "Thanks for handling this professionally. Hope communication gets better for other passengers later.",
            formalityVariants: {
              casual: "Thanks for handling this professionally. Hope communication gets better for other passengers later.",
              standard: "Thank you for handling this professionally. I hope the communication improves for other passengers in the future.",
              formal: "I wish to express my gratitude for your professional handling of this matter. I sincerely hope that communication protocols for other passengers will see significant improvement moving forward.",
            },
          },
          {
            speaker: "them",
            role: "值班经理",
            textEn:
              "Your feedback is valuable and I'll make sure it's passed on to the operations team. Thank you for your patience, and again, I'm sorry for the experience. Have a safe journey.",
            textZh: "您的反馈非常宝贵，我会确保转达给运营团队。感谢您的耐心，再次为这次的经历道歉。祝旅途平安。",
            commonMistake: {
              wrong: "I will tell my boss.",
              correct: "I will make sure it's escalated to the operations team.",
              explanation: "使用“escalated to the operations team”更专业，表示会正式向上级部门反映。",
            },
            casualVersion: "Your feedback's super valuable, and I'll make sure to pass it to the operations team. Thanks for your patience, and again, sorry for the experience. Have a safe trip.",
            formalityVariants: {
              casual: "Your feedback's super valuable, and I'll make sure to pass it to the operations team. Thanks for your patience, and again, sorry for the experience. Have a safe trip.",
              standard: "Your feedback is valuable and I will ensure it is relayed to the operations team. Thank you for your patience, and once again, I apologize for this experience. Have a safe journey.",
              formal: "Your feedback is exceptionally valuable, and I assure you that I will relay it directly to the operations team. I thank you for your patience, and reiterate my apologies for the inconvenience you experienced. I wish you a safe and pleasant onward journey.",
            },
            keyPhrases: [
              { en: "feedback is valuable", zh: "反馈很宝贵" },
              { en: "passed on to", zh: "转达给" },
              { en: "operations team", zh: "运营团队" },
            ],
            alternativeExpressions: [
              {
                textEn: "I appreciate you telling us. I'll make sure the right people hear about this. Safe travels.",
                textZh: "感谢您告诉我们。我会确保相关负责人了解此事。一路平安。",
                actionHint: "问题已反馈",
                frequency: "common",
              },
              {
                textEn:
                  "Your comments will go directly to our management team. Thank you for your patience, and have a good trip.",
                textZh: "您的意见会直接转给管理团队。感谢您的耐心，祝旅途愉快。",
                actionHint: "投诉处理完毕",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 行李损坏 ====================
  {
    id: "airport-24",
    category: "airport",
    titleZh: "行李损坏",
    titleEn: "Damaged Luggage",
    description: "到达后发现托运行李损坏，向航空公司索赔",
    otherRole: "行李服务柜台工作人员",
    otherRoleIcon: "luggage",
    flows: [
      {
        id: "report-damage",
        titleZh: "报告行李损坏",
        titleEn: "Reporting Damaged Luggage",
        description: "在行李服务柜台报告行李损坏并开始索赔流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I just picked up my suitcase from the carousel and it's badly damaged. The wheel is broken off and there's a big crack on the side.",
            textZh: "你好，我刚从行李转盘取了箱子，损坏很严重。一个轮子掉了，侧面还有一条大裂缝。",
            casualVersion:
              "Hey, just grabbed my bag from the carousel and it's trashed. Wheel's busted off, big crack on the side.",
            commonMistake: {
              wrong: "My suitcase is broken very serious.",
              correct: "My suitcase is badly damaged.",
              explanation: "中式英语常直译“很严重”，地道表达用“badly damaged”或“severely damaged”。",
            },
            formalityVariants: {
              casual:
                "Hey, just grabbed my bag from the carousel and it's trashed. Wheel's busted, big crack on the side.",
              standard:
                "Hi, I just picked up my suitcase from the carousel and it's badly damaged. The wheel is broken off and there's a big crack on the side.",
              formal:
                "Good morning/afternoon. I've just collected my luggage from the baggage carousel, and regrettably, it appears to be extensively damaged. Specifically, one of the wheels is detached, and there is a significant crack on the side.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I'm sorry to see that. Can I have your baggage claim tag and boarding pass? I'll need to file a damage report. Was the suitcase in good condition before the flight?",
            textZh:
              "很抱歉看到这种情况。能给我您的行李提取标签和登机牌吗？我需要填写一份损坏报告。箱子在飞行前状况良好吗？",
            commonMistake: {
              wrong: "Can give me your baggage tag?",
              correct: "Can I have your baggage tag?",
              explanation: "中文省略主语很常见，但英文不能省。",
            },
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李提取标签" },
              { en: "damage report", zh: "损坏报告" },
              { en: "in good condition", zh: "状况良好" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, that's unfortunate. Let me document the damage. Do you have your luggage tag?",
                textZh: "哦，这太不幸了。我来记录一下损坏情况。您有行李标签吗？",
                actionHint: "准备行李标签",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry about that. Your baggage tag and boarding pass, please? Gotta file a report. Was the bag okay before?",
            formalityVariants: {
              casual:
                "Sorry to hear that. Can I get your tag and pass? Need to file a report. Was the bag fine before?",
              standard:
                "I'm sorry to see that. Can I have your baggage claim tag and boarding pass? I'll need to file a damage report. Was the suitcase in good condition before the flight?",
              formal:
                "I sincerely apologize for this inconvenience. May I please request your baggage claim tag and boarding pass? I will proceed with initiating a damage report. Could you kindly confirm the condition of the suitcase prior to your flight's departure?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, here they are. The suitcase was brand new — I bought it last week. I'm really upset about this.",
            textZh: "给你。箱子是全新的——上周刚买的。我真的很难过。",
            casualVersion: "Yeah, here ya go. It was brand new – just got it last week. Super bummed about this.",
            commonMistake: {
              wrong: "I am very sad about this.",
              correct: "I'm really upset about this.",
              explanation: "“sad”通常指情感上的悲伤，对物品损坏用“upset”或“disappointed”更合适。",
            },
            formalityVariants: {
              casual: "Yep, here. It was brand new, just got it last week. I'm so bummed.",
              standard:
                "Yes, here they are. The suitcase was brand new — I bought it last week. I'm really upset about this.",
              formal:
                "Certainly, here are the requested documents. The suitcase was, in fact, brand new, having been purchased just last week. I am quite distressed by this unfortunate incident.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I completely understand. Let me take some photos of the damage for our records. Can you also tell me the brand, model, and approximate value of the suitcase?",
            textZh: "我完全理解。让我拍几张损坏的照片留档。您能告诉我箱子的品牌、型号和大概价值吗？",
            commonMistake: {
              wrong: "Can you also tell me the brand, model, and approximately value of the suitcase?",
              correct: "Can you also tell me the brand, model, and approximate value of the suitcase?",
              explanation: "'approximately' 是副词；'approximate' 是形容词。",
            },
            keyPhrases: [
              { en: "take photos", zh: "拍照" },
              { en: "for our records", zh: "留档" },
              { en: "approximate value", zh: "大概价值" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'll need to photograph the damage. Can you also tell me what the bag is worth?",
                textZh: "我需要拍一下损坏情况。您能告诉我这个箱子值多少钱吗？",
                actionHint: "准备箱子价格信息",
                frequency: "common",
              },
              {
                textEn: "Let me document this. What brand is it and roughly how much did you pay?",
                textZh: "让我记录一下。什么牌子的，大概花了多少钱？",
                actionHint: "说明品牌和价格",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally get it. Lemme just snap some pics for our files. Also, can you tell me the brand, model, and roughly what the bag's worth?",
            formalityVariants: {
              casual:
                "Yeah, I get it. I'll just take some photos for our records. Can you tell me the brand, model, and roughly how much it cost?",
              standard:
                "I completely understand. Let me take some photos of the damage for our records. Can you also tell me the brand, model, and approximate value of the suitcase?",
              formal:
                "I fully empathize with your situation. I will now proceed to document the damage with photographs for our internal records. Furthermore, could you please provide the brand, model, and estimated monetary value of the suitcase?",
            },
          },
          {
            speaker: "you",
            textEn: "It's a Samsonite Spinner, 28-inch. I paid about $280 for it. I have the receipt on my phone.",
            textZh: "是新秀丽的万向轮箱子，28寸。花了大约280美元。手机里有收据。",
            casualVersion:
              "Samsonite Spinner, 28-inch. Paid like 280 bucks for it. Got the receipt right here on my phone.",
            commonMistake: {
              wrong: "It's Samsonite Spinner.",
              correct: "It's a Samsonite Spinner.",
              explanation: "英文在提到一个具体但未特指的单数名词时，需要使用不定冠词 'a' 或 'an'。",
            },
            formalityVariants: {
              casual: "It's a Samsonite Spinner, 28-inch. Cost me around $280. Receipt's on my phone.",
              standard: "It's a Samsonite Spinner, 28-inch. I paid about $280 for it. I have the receipt on my phone.",
              formal:
                "It is a Samsonite Spinner model, 28-inch. The purchase price was approximately $280. I possess the digital receipt on my mobile device.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Perfect, having the receipt will speed up the claim process. You have a few options: we can repair the suitcase at an authorized service center, replace it with a comparable one, or provide monetary compensation. Which would you prefer?",
            textZh:
              "太好了，有收据会加快理赔流程。您有几个选择：我们可以在授权维修中心维修箱子，换一个同等品质的新箱子，或者提供现金赔偿。您选哪个？",
            commonMistake: {
              wrong: "Which one do you choose?",
              correct: "Which would you prefer?",
              explanation: "'choose' 意为选择，口语中 'prefer' 更自然。",
            },
            keyPhrases: [
              { en: "claim process", zh: "理赔流程" },
              { en: "authorized service center", zh: "授权维修中心" },
              { en: "monetary compensation", zh: "现金赔偿" },
              { en: "comparable", zh: "同等品质的" },
            ],
            vocabNotes: {
              comparable: {
                meaningInContext: "在这句话里表示：品质、价格相当的替代品",
                similarUsage:
                  "类似用法：They offered a comparable hotel when ours was overbooked.（酒店超订时给了我们一个同档次的替代酒店）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Great, the receipt helps a lot. So we can either fix it, swap it for a similar one, or just reimburse you. What works best for you?",
                textZh: "太好了，有收据就方便多了。我们可以修、换一个差不多的，或者直接退钱给您。您觉得哪种好？",
                actionHint: "选择理赔方式",
                frequency: "common",
              },
              {
                textEn:
                  "That'll make things easier. Your options are: get it repaired, get a replacement of equal value, or take cash compensation. Up to you.",
                textZh: "这样就好办了。您可以选择维修、换一个同等价值的新箱子，或者拿现金赔偿。您决定。",
                actionHint: "了解三种赔偿方案后做选择",
                frequency: "common",
              },
            ],
            casualVersion:
              "Awesome, that receipt'll make this claim go way faster. So, you've got options: we can fix it at a service center, get you a new comparable one, or just give you money. What's your pick?",
            formalityVariants: {
              casual:
                "Great, receipt helps speed things up. You can get it repaired, replaced with something similar, or get some money. What works for you?",
              standard:
                "Perfect, having the receipt will speed up the claim process. You have a few options: we can repair the suitcase at an authorized service center, replace it with a comparable one, or provide monetary compensation. Which would you prefer?",
              formal:
                "Excellent, the presence of the receipt will significantly expedite the claims resolution process. You are presented with several options: we can arrange for the suitcase to be repaired at an authorized service center, provide a replacement of comparable quality, or offer a financial reimbursement. Which of these alternatives would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'd prefer a replacement if possible. But I'm traveling and I need a suitcase right now. What can you do?",
            textZh: "如果可以的话我想换一个新的。但我在旅行中，现在就需要箱子。怎么办？",
            casualVersion:
              "I'd rather get a new one, if that's an option. But I'm on a trip and literally need a suitcase, like, right now. What can you even do?",
            commonMistake: {
              wrong: "I want change a new one.",
              correct: "I'd prefer a replacement.",
              explanation: "“change”多指更换旧物，换新物品通常用“get a new one”或“replace”。",
            },
            formalityVariants: {
              casual: "I'd rather get a new one, if possible. But I'm traveling and need a bag ASAP. What can you do?",
              standard:
                "I'd prefer a replacement if possible. But I'm traveling and I need a suitcase right now. What can you do?",
              formal:
                "Ideally, I would prefer a replacement. However, given that I am currently traveling and require a functional suitcase immediately, what immediate solutions can you offer?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I can give you a temporary suitcase right now to use during your trip. When you return, bring it back and we'll have your replacement ready. Here's your claim reference number — you can track the status online.",
            textZh:
              "我可以现在给您一个临时箱子，旅行期间先用着。回来的时候还回来，我们会准备好您的替换箱子。这是您的理赔编号——可以在网上查看进度。",
            commonMistake: {
              wrong: "When you return, return it back and we...",
              correct: "When you return, bring it back and we...",
              explanation: "'return back' 冗余；带回某物用 'bring it back'。",
            },
            keyPhrases: [
              { en: "temporary suitcase", zh: "临时箱子" },
              { en: "claim reference number", zh: "理赔编号" },
              { en: "track the status", zh: "查看进度" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can lend you a bag for now. Bring it back when your new one is ready. Here's your case number.",
                textZh: "我们可以先借您一个箱子。新箱子准备好后拿回来就行。这是您的案例号。",
                actionHint: "记住归还临时箱子",
                frequency: "common",
              },
              {
                textEn: "Take this loaner suitcase for your trip. Your replacement will be waiting when you return.",
                textZh: "先用这个借用箱旅行。回来时替换箱会准备好。",
                actionHint: "回程时换箱子",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I can hook you up with a loaner bag for your trip right now. Bring it back when you're done, and we'll have your new one ready. Here's your claim number – check the status whenever online.",
            formalityVariants: {
              casual:
                "I can lend you a temporary bag for your trip now. Bring it back when you return, and we'll have your replacement. Here's your claim number to track online.",
              standard:
                "I can give you a temporary suitcase right now to use during your trip. When you return, bring it back and we'll have your replacement ready. Here's your claim reference number — you can track the status online.",
              formal:
                "We can provide you with a complimentary temporary suitcase for immediate use throughout your journey. Upon your return, kindly revert it, and your replacement item will be prepared. Please find enclosed your claim reference number, which enables you to monitor the status online.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That works. Also, some items inside got damaged too — my perfume bottle broke and stained my clothes. Can I claim that as well?",
            textZh: "可以。另外，里面的东西也损坏了——香水瓶碎了，弄脏了衣服。这些也能索赔吗？",
            casualVersion:
              "Works for me. Oh, also, stuff inside got trashed too — my perfume broke and totally stained my clothes. Can I claim that too?",
            commonMistake: {
              wrong: "My perfume bottle broke, dirty my clothes.",
              correct: "My perfume bottle broke and stained my clothes.",
              explanation: "“dirty”是动词，弄脏衣服用“stained”更准确，且需要连接词“and”。",
            },
            formalityVariants: {
              casual:
                "Sounds good. Also, stuff inside got damaged too – perfume broke, stained my clothes. Can I claim that?",
              standard:
                "That works. Also, some items inside got damaged too — my perfume bottle broke and stained my clothes. Can I claim that as well?",
              formal:
                "That arrangement is satisfactory. Additionally, some of the contents within the luggage sustained damage as well – specifically, my perfume bottle fractured and subsequently stained my apparel. Is it possible to include these items in the claim?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Yes, you can include contents damage in your claim. You'll need to list the damaged items and provide photos. I should mention that fragile items and valuables have limited coverage — typically up to $300 per passenger. Submit everything within 7 days.",
            textZh:
              "可以，您可以在索赔中包括内容物损坏。您需要列出损坏的物品并提供照片。我要说明，易碎物品和贵重物品的赔偿有上限——通常每位旅客最多300美元。请在7天内提交所有材料。",
            commonMistake: {
              wrong: "You need list damaged items and give photos.",
              correct: "You will need to list the damaged items and provide photos.",
              explanation: "英文需要补全介词和冠词；'provide' 比 'give' 更正式。",
            },
            keyPhrases: [
              { en: "contents damage", zh: "内容物损坏" },
              { en: "fragile items", zh: "易碎物品" },
              { en: "limited coverage", zh: "有限的赔偿范围" },
              { en: "submit within 7 days", zh: "7天内提交" },
            ],
            culturalNote:
              "行李损坏索赔有时间限制，通常7天内必须提交。建议在机场就完成报告，并拍照留证。贵重物品最好随身携带。",
            alternativeExpressions: [
              {
                textEn: "You can add those to your claim. Take photos of everything damaged and submit within a week.",
                textZh: "可以一起索赔。把所有损坏的东西拍照，一周内提交。",
                actionHint: "拍照留证",
                frequency: "common",
              },
              {
                textEn:
                  "Yes, contents damage is covered too, but fragile items have a cap. Get your receipts and photos together within 7 days.",
                textZh: "是的，内容物损坏也可以赔，但易碎品有上限。7天内准备好收据和照片。",
                actionHint: "整理索赔材料",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, you can add that stuff to your claim. Just list out what's damaged and get some pics. Heads up though, fragile or valuable stuff only gets limited coverage – usually up to 300 bucks per person. Get it all in within a week.",
            formalityVariants: {
              casual:
                "Yeah, you can include that. List the damaged items and show photos. Keep in mind, fragile and valuable items have limited coverage, usually $300 per person. Submit everything in 7 days.",
              standard:
                "Yes, you can include contents damage in your claim. You'll need to list the damaged items and provide photos. I should mention that fragile items and valuables have limited coverage — typically up to $300 per passenger. Submit everything within 7 days.",
              formal:
                "Yes, you are indeed able to include the damage to the contents of your luggage within your claim. This will necessitate a comprehensive listing of the damaged articles and supporting photographic evidence. Please be advised that fragile and valuable items are subject to limited coverage, generally capped at $300 per passenger. All requisite documentation must be submitted within a seven-day period.",
            },
          },
        ],
      },
      {
        id: "lost-luggage",
        titleZh: "行李未到达",
        titleEn: "Luggage Not Arriving",
        description: "到达后在行李转盘找不到自己的行李",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, my luggage didn't come out on the carousel. Everyone else has already left and my bag isn't there.",
            textZh: "打扰了，我的行李没有出现在转盘上。其他人都已经走了，我的包还是没有。",
            casualVersion:
              "Hey, my luggage didn't show up on the carousel. Everyone's gone, and my bag's still not here.",
            commonMistake: {
              wrong: "My luggage didn't appear on the carousel.",
              correct: "My luggage didn't come out on the carousel.",
              explanation: '"appear" 在口语中听起来不太自然，用 "come out" 更地道。',
            },
            formalityVariants: {
              casual: "Hey, my bag didn't show up on the carousel. Everyone's gone, and it's still not here.",
              standard:
                "Excuse me, my luggage didn't come out on the carousel. Everyone else has already left and my bag isn't there.",
              formal:
                "Pardon me, but I seem to be experiencing an issue with my baggage. My checked luggage did not appear on the carousel, and it seems to be the only item remaining.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I'm sorry about that. It happens sometimes, especially with connecting flights. Can I see your baggage claim tag? And which flight were you on?",
            textZh: "很抱歉。这种情况偶尔会发生，尤其是转机航班。能看一下您的行李提取标签吗？您坐的哪个航班？",
            commonMistake: {
              wrong: "What flight are you?",
              correct: "What flight were you on?",
              explanation: "询问航班号时，介词 'on' 更地道。",
            },
            casualVersion: "Oh, sorry 'bout that. Happens sometimes, 'specially with connecting flights. Can I see your claim tag? What flight were you on?",
            formalityVariants: {
              casual: "Sorry about that. Happens sometimes, 'specially with connecting flights. Got your claim tag? Which flight was it?",
              standard: "I'm sorry about that. It happens sometimes, especially with connecting flights. Can I see your baggage claim tag? And which flight were you on?",
              formal: "I sincerely apologize for this inconvenience. These situations do occur occasionally, particularly with connecting itineraries. May I please see your baggage claim tag, and could you confirm your flight number?",
            },
            keyPhrases: [
              { en: "baggage claim tag", zh: "行李提取标签" },
              { en: "connecting flights", zh: "转机航班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's not uncommon, especially with tight connections. Let me look it up — can I see your claim tag?",
                textZh: "这种情况不少见，尤其是紧凑转机。我查一下——行李标签给我看看？",
                actionHint: "找到行李标签",
                frequency: "common",
              },
              {
                textEn: "Don't worry, we can track it. Do you have your baggage receipt from check-in?",
                textZh: "别担心，我们可以追踪。您有值机时的行李凭条吗？",
                actionHint: "准备行李凭条",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I was on Delta 472 from Atlanta. I had a tight connection in Chicago. Here's my claim tag.",
            textZh: "我坐的是从亚特兰大来的达美472。在芝加哥转机时间很紧。这是我的行李标签。",
            casualVersion: "Delta 472 outta Atlanta. Had a super tight connection in Chicago. Here's my tag.",
            commonMistake: {
              wrong: "I had a very short transfer time in Chicago.",
              correct: "I had a tight connection in Chicago.",
              explanation: "\"tight connection\" 是指转机时间很短的常用表达，比 \"short transfer time\" 更自然。",
            },
            formalityVariants: {
              casual: "Delta 472 from Atlanta. Had a super tight connection in Chicago. Here's the tag.",
              standard: "I was on Delta 472 from Atlanta. I had a tight connection in Chicago. Here's my claim tag.",
              formal: "My flight was Delta 472, originating from Atlanta. I experienced a very brief connection time in Chicago. This is my baggage claim tag.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "Let me trace your bag in the system... I can see it was scanned in Chicago but didn't make it onto your connecting flight. It's currently on the next flight arriving at 9:45 PM tonight.",
            textZh:
              "让我在系统里追踪您的行李……我能看到它在芝加哥被扫描了，但没赶上您的转机航班。目前在下一班航班上，今晚9:45到达。",
            commonMistake: {
              wrong: "missed connecting flight. Currently on next flight, arrive at 9:45 tonight.",
              correct: "missed your connecting flight. It's currently on the next flight, arriving at 9:45 tonight.",
              explanation: "英文需要冠词 'the' 和代词 'your'；动词 'arrive' 需要主语。",
            },
            casualVersion: "Lemme trace your bag... Looks like it was scanned in Chicago, but didn't make your connecting flight. It's on the next one, landing at 9:45 PM tonight.",
            formalityVariants: {
              casual: "Okay, tracing your bag... It was scanned in Chicago, but missed your connecting flight. It's on the next one, due at 9:45 PM tonight.",
              standard: "Let me trace your bag in the system... I can see it was scanned in Chicago but didn't make it onto your connecting flight. It's currently on the next flight arriving at 9:45 PM tonight.",
              formal: "Allow me to access our system to track your luggage... I can confirm it was scanned in Chicago, however, it did not get loaded onto your connecting flight. It has been re-routed and is scheduled to arrive on the next flight at 9:45 PM this evening.",
            },
            keyPhrases: [
              { en: "trace your bag", zh: "追踪您的行李" },
              { en: "scanned", zh: "被扫描" },
              { en: "didn't make it onto", zh: "没赶上" },
            ],
            vocabNotes: {
              trace: {
                meaningInContext: "在这句话里表示：通过系统追踪行李的位置和去向",
                similarUsage:
                  "类似用法：We can trace your package using the tracking number.（我们可以用追踪号查你的包裹）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Your bag got left behind in Chicago. It's being put on the next available flight.",
                textZh: "您的行李被留在芝加哥了。正在安排放上下一班可用的航班。",
                actionHint: "等待进一步安排",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Oh no. I have a business meeting tomorrow morning and all my formal clothes are in that suitcase. What can I do?",
            textZh: "糟糕。我明天早上有商务会议，正装都在那个箱子里。怎么办？",
            casualVersion: "Ugh, no way! Got a business meeting tomorrow morning, and all my formal clothes are in that suitcase. What do I do now?",
            commonMistake: {
              wrong: "Oh no. I have business meeting tomorrow morning and all my formal clothes in that suitcase. How to do?",
              correct: "Oh no. I have a business meeting tomorrow morning and all my formal clothes are in that suitcase. What can I do?",
              explanation: "\"how to do\" 是中式英语，应说 \"What can I do?\"；注意 \"a business meeting\" 和 \"are in\"。",
            },
            formalityVariants: {
              casual: "Ugh, no! Got a meeting tomorrow, and all my business clothes are in there. What now?",
              standard: "Oh no. I have a business meeting tomorrow morning and all my formal clothes are in that suitcase. What can I do?",
              formal: "Oh dear. This is rather inconvenient. I have a critical business meeting scheduled for tomorrow morning, and all of my professional attire is unfortunately in that particular piece of luggage. What recourse do I have?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I understand the urgency. First, I'll arrange for the bag to be delivered to your hotel as soon as it arrives — free of charge. Second, you're entitled to purchase essential items like toiletries and basic clothing. Keep the receipts and we'll reimburse up to $150.",
            textZh:
              "我理解事态紧急。第一，行李一到就免费送到您的酒店。第二，您有权购买必需品，如洗漱用品和基本衣物。保留收据，我们最多报销150美元。",
            commonMistake: {
              wrong: "First, luggage will be delivered to your hotel. Second, you can buy necessities. Keep receipt, we compensate $150 maximum.",
              correct: "First, your luggage will be delivered to your hotel free of charge as soon as it arrives. Second, you are entitled to purchase essential items like toiletries and basic clothing. Keep your receipts, and we will reimburse up to $150.",
              explanation: "英文需要补全主语和动词；'be entitled to' 更准确表达“有权”。",
            },
            casualVersion: "I get it, it's urgent. First, I'll get the bag delivered to your hotel ASAP once it lands—no charge. Second, you can buy essentials like toiletries and some basic clothes. Just keep the receipts, and we'll cover up to $150.",
            formalityVariants: {
              casual: "I get why it's urgent. So, first, we'll send the bag to your hotel right when it gets here, on us. Second, you can grab some essentials, like toiletries or a change of clothes. Just save your receipts, and we'll reimburse you up to $150.",
              standard: "I understand the urgency. First, I'll arrange for the bag to be delivered to your hotel as soon as it arrives — free of charge. Second, you're entitled to purchase essential items like toiletries and basic clothing. Keep the receipts and we'll reimburse up to $150.",
              formal: "I certainly appreciate the exigency of your situation. Firstly, I will ensure that your baggage is promptly delivered to your hotel upon its arrival, at no cost to you. Secondly, you are authorized to acquire necessary personal items such as toiletries and fundamental apparel. Please retain all receipts, as we will provide reimbursement up to a maximum of $150.",
            },
            keyPhrases: [
              { en: "delivered to your hotel", zh: "送到您的酒店" },
              { en: "free of charge", zh: "免费" },
              { en: "essential items", zh: "必需品" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "reimburse up to", zh: "最多报销" },
            ],
            vocabNotes: {
              toiletries: {
                meaningInContext: "在这句话里表示：洗漱用品，如牙刷、牙膏、洗发水、除臭剂等",
                similarUsage:
                  "类似用法：The hotel provides complimentary toiletries in the bathroom.（酒店浴室提供免费洗漱用品）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We'll have it couriered to your hotel tonight at no cost. In the meantime, you can buy basics — save the receipts and we'll cover up to $150.",
                textZh: "今晚免费快递到您酒店。同时您可以先买些必需品——保留收据，我们报销最多150美元。",
                actionHint: "保留购物收据",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry, we'll deliver it straight to your hotel once it lands. You're also covered for emergency purchases.",
                textZh: "别担心，行李一落地就直送您酒店。紧急购物也可以报销。",
                actionHint: "先买急用品",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. What's the delivery address? I'm staying at the Hyatt Regency downtown.",
            textZh: "这很有帮助。送到哪个地址？我住市中心的凯悦酒店。",
            casualVersion: "Okay, that helps. So, where should it be delivered? I'm at the Hyatt Regency downtown.",
            commonMistake: {
              wrong: "That's helpful. Delivery address? I staying at Hyatt Regency downtown.",
              correct: "That's helpful. What's the delivery address? I'm staying at the Hyatt Regency downtown.",
              explanation: "\"What's the delivery address?\" 是完整问句；\"I'm staying\" 需要主语和动词。",
            },
            formalityVariants: {
              casual: "Great, thanks. Where should it go? I'm at the Hyatt Regency downtown.",
              standard: "That's helpful. What's the delivery address? I'm staying at the Hyatt Regency downtown.",
              formal: "That is most considerate. May I inquire about the delivery address? I am presently accommodated at the Hyatt Regency downtown.",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "I've noted the Hyatt Regency. Here's your delayed baggage report with a file reference number. You can track your bag's status with this number on our website or app. We'll also send you text updates. What's a good number to reach you?",
            textZh:
              "我记下了凯悦酒店。这是您的行李延误报告，上面有档案编号。用这个编号可以在我们网站或APP上查行李状态。我们也会发短信更新。留一个联系电话？",
            commonMistake: {
              wrong: "I got Hyatt. This is your report, use number check bag status. Give contact phone?",
              correct: "I've noted the Hyatt hotel. This is your delayed baggage report, which includes a file number. You can use this number to check your bag's status on our website or app. We will also send you text updates. May I have a contact phone number?",
              explanation: "英文需要补全冠词和动词；询问电话要礼貌。",
            },
            casualVersion: "Got the Hyatt Regency. Here's your report, has a reference number. You can track your bag online or on the app with it. We'll text you updates too. What's a good number for you?",
            formalityVariants: {
              casual: "Okay, Hyatt Regency noted. Here's your report, it's got a reference number. You can track your bag with that online or on the app. We'll send you texts too. What's your best number?",
              standard: "I've noted the Hyatt Regency. Here's your delayed baggage report with a file reference number. You can track your bag's status with this number on our website or app. We'll also send you text updates. What's a good number to reach you?",
              formal: "I have made a record of the Hyatt Regency. Please accept this delayed baggage report, which includes a unique file reference number. This number will allow you to monitor the status of your luggage via our website or mobile application. Additionally, we will provide you with text message updates. Could you kindly provide a contact number where you can be reached?",
            },
            keyPhrases: [
              { en: "delayed baggage report", zh: "行李延误报告" },
              { en: "file reference number", zh: "档案编号" },
              { en: "text updates", zh: "短信更新" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's your reference number. You can check the status on our app. We'll text you when the bag arrives.",
                textZh: "这是您的编号。可以在我们APP上查进度。行李到了会给您发短信。",
                actionHint: "保存编号",
                frequency: "common",
              },
              {
                textEn:
                  "I've logged everything. Use this case number to track your bag online. What's the best number to text you at?",
                textZh: "都登记好了。用这个案例号在线追踪行李。发短信用哪个号码？",
                actionHint: "留联系方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My US number is 555-0123. If the bag doesn't arrive by tomorrow, what happens?",
            textZh: "我的美国号码是555-0123。如果明天还没到呢？",
            casualVersion: "My US number's 555-0123. If the bag's not here by tomorrow, then what?",
            commonMistake: {
              wrong: "My US number is 555-0123. If bag not arrive tomorrow, what?",
              correct: "My US number is 555-0123. If the bag doesn't arrive by tomorrow, what happens?",
              explanation: "\"if\" 后面句子完整，\"doesn't arrive\" 比 \"not arrive\" 更地道，\"what happens\" 是常用问法。",
            },
            formalityVariants: {
              casual: "It's 555-0123 for my US number. If the bag's not here by tomorrow, then what's the plan?",
              standard: "My US number is 555-0123. If the bag doesn't arrive by tomorrow, what happens?",
              formal: "My contact number in the US is 555-0123. Should the luggage not arrive by tomorrow, what would be the subsequent procedure?",
            },
          },
          {
            speaker: "them",
            role: "行李服务",
            textEn:
              "If it doesn't arrive within 24 hours, you can increase your essential purchase allowance to $300. If it's not found within 21 days, it's officially classified as lost and you'd be eligible for full compensation based on the bag's value and contents.",
            textZh:
              "如果24小时内没到，您的必需品购买额度可以提高到300美元。如果21天内找不到，就正式归类为丢失，您可以根据箱子和内容物价值获得全额赔偿。",
            commonMistake: {
              wrong: "If it not arrive within 24 hours, your allowance up to $300. If not find within 21 days, it's lost, you get full compensation.",
              correct: "If it doesn't arrive within 24 hours, your allowance for essential purchases will be increased to $300. If it cannot be located within 21 days, it will be officially classified as lost, and you will receive full compensation based on the declared value of the suitcase and its contents.",
              explanation: "英文需要助动词和完整句式；'allowance for essential purchases' 更具体。",
            },
            casualVersion: "If it doesn't show up in 24 hours, you can bump up your essential allowance to $300. If it's still lost after 21 days, then it's officially considered lost, and you'd get full compensation based on the bag's value and what's inside.",
            formalityVariants: {
              casual: "If it's not here in 24 hours, you can raise your essential purchase limit to $300. If it's still missing after 21 days, it's officially lost, and you'd get full compensation for its value and contents.",
              standard: "If it doesn't arrive within 24 hours, you can increase your essential purchase allowance to $300. If it's not found within 21 days, it's officially classified as lost and you'd be eligible for full compensation based on the bag's value and contents.",
              formal: "Should the item not arrive within 24 hours, your allocation for essential purchases will be increased to $300. If the luggage remains unfound after 21 days, it will then be officially designated as lost, entitling you to full compensation determined by the declared value and contents of the bag.",
            },
            keyPhrases: [
              { en: "purchase allowance", zh: "购买额度" },
              { en: "classified as lost", zh: "归类为丢失" },
              { en: "eligible for full compensation", zh: "可获得全额赔偿" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If it doesn't show up in 24 hours, we bump the allowance to $300. After 21 days it's considered lost and you get full compensation.",
                textZh: "如果24小时内没到，额度提高到300美元。21天后算正式丢失，可以获得全额赔偿。",
                actionHint: "了解赔偿流程",
                frequency: "common",
              },
              {
                textEn:
                  "Give it a day. If still nothing, we raise the spending limit and start a formal lost baggage claim.",
                textZh: "等一天看看。如果还没有，我们提高消费额度并启动正式的行李丢失索赔。",
                actionHint: "先等消息",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场巴士/地铁 ====================
  {
    id: "airport-25",
    category: "airport",
    titleZh: "机场公共交通",
    titleEn: "Airport Public Transit",
    description: "搭乘机场巴士、地铁或轻轨前往市区",
    otherRole: "售票员/乘客",
    otherRoleIcon: "train",
    flows: [
      {
        id: "airport-train",
        titleZh: "机场快线",
        titleEn: "Airport Express Train",
        description: "乘坐机场快线或地铁前往市区",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I get to downtown by train? Is there an airport express?",
            textZh: "请问，怎么坐火车到市区？有机场快线吗？",
            culturalNote: "美国人问路通常更直接，不一定用'请问'这么客套。",
            casualVersion: "Hey, is there a train to downtown?",
            commonMistake: {
              wrong: "How to go downtown by train?",
              correct: "How do I get to downtown by train?",
              explanation: "直接翻译'怎么走'容易变成'How to go'，更自然的问法是'How do I get to...'",
            },
            formalityVariants: {
              casual: "Hey, how do I get downtown by train? Got an airport express?",
              standard: "Excuse me, how do I get to downtown by train? Is there an airport express?",
              formal:
                "Pardon me, could you please advise on how to reach downtown by train? Is there an airport express service available?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes! The Airport Express goes directly to Central Station downtown. It takes about 25 minutes with no stops. Trains leave every 10 minutes from Platform 2, one level below.",
            textZh: "有！机场快线直达市中心的中央车站。大约25分钟不停站。每10分钟一班，在下面一层的2号站台。",
            keyPhrases: [
              { en: "Airport Express", zh: "机场快线" },
              { en: "Central Station", zh: "中央车站" },
              { en: "no stops", zh: "不停站/直达" },
              { en: "platform", zh: "站台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The express train to the city center is just downstairs. Follow the signs to the train station.",
                textZh: "去市中心的快线就在楼下。跟着标识到火车站。",
                actionHint: "找火车站标识",
                frequency: "common",
              },
              {
                textEn: "Take the Blue Line to downtown. It runs every 12 minutes.",
                textZh: "坐蓝线到市区。每12分钟一班。",
                actionHint: "找蓝线标识",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah! Airport Express goes straight to Central Station downtown. Takes about 25 min, no stops. Trains leave every 10 from Platform 2, one level down.",
            formalityVariants: {
              casual:
                "Yeah! Express goes straight to Central, 25 mins, no stops. Every 10 mins from Platform 2, one level down.",
              standard:
                "Yes! The Airport Express goes directly to Central Station downtown. It takes about 25 minutes with no stops. Trains leave every 10 minutes from Platform 2, one level below.",
              formal:
                "Certainly. The Airport Express offers direct service to Central Station in the downtown area. The journey is approximately 25 minutes non-stop. Trains depart every 10 minutes from Platform 2, located one level below this concourse.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is a ticket? And where do I buy one?",
            textZh: "票多少钱？在哪里买？",
            casualVersion: "How much for a ticket? And where can I get one?",
            commonMistake: {
              wrong: "How much is one ticket? Where to buy?",
              correct: "How much is a ticket? And where do I buy one?",
              explanation: "中文'一张票'常直译'one ticket'，而英文更常用'a ticket'。'Where to buy'不够自然。",
            },
            formalityVariants: {
              casual: "What's a ticket cost? Where can I buy it?",
              standard: "How much is a ticket? And where do I buy one?",
              formal: "Could you please inform me of the ticket price, and where I may purchase one?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "A single ride is $12. You can buy tickets at the vending machines downstairs — they accept cash, credit cards, and contactless payment. You can also use a transit card if you have one.",
            textZh: "单程12美元。可以在楼下自动售票机买——接受现金、信用卡和非接触式支付。如果有交通卡也可以用。",
            keyPhrases: [
              { en: "single ride", zh: "单程" },
              { en: "vending machines", zh: "自动售票机" },
              { en: "contactless payment", zh: "非接触式支付" },
              { en: "transit card", zh: "交通卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tickets are $12 one way. The machines downstairs take cards and cash.",
                textZh: "单程12美元。楼下售票机可以刷卡或付现。",
                actionHint: "去楼下买票",
                frequency: "common",
              },
              {
                textEn:
                  "A one-way ticket is twelve bucks. You can grab one at the kiosk or just tap your bank card at the gate.",
                textZh: "单程票12块。在自助机上买，或者直接在闸机刷银行卡。",
                actionHint: "可以直接刷卡进站",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Single ride's $12. You can get tickets at the machines downstairs—they take cash, card, and tap-to-pay. Or use a transit card if you got one.",
            formalityVariants: {
              casual:
                "Single ride is $12. Machines downstairs take cash, card, contactless. Use your transit card if you have it.",
              standard:
                "A single ride is $12. You can buy tickets at the vending machines downstairs — they accept cash, credit cards, and contactless payment. You can also use a transit card if you have one.",
              formal:
                "A single journey costs $12. Tickets can be purchased from the automated vending machines situated on the lower level, which accept cash, major credit cards, and contactless payment methods. Additionally, a transit card may be utilized if available.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a day pass or multi-ride discount? I'll be using transit a lot this week.",
            textZh: "有日票或多次乘车优惠吗？这周我会经常坐公共交通。",
            casualVersion: "Any day pass or multi-ride discount? Gonna use transit a lot this week.",
            commonMistake: {
              wrong: "Is there day ticket or many times ride discount?",
              correct: "Is there a day pass or multi-ride discount?",
              explanation: "中文'日票'直译易出错，'day pass'是地道说法。'many times ride'不自然。",
            },
            formalityVariants: {
              casual: "Got a day pass or multi-ride deal? I'll be on transit tons this week.",
              standard: "Is there a day pass or multi-ride discount? I'll be using transit a lot this week.",
              formal:
                "Are there any day passes or multi-ride discounts available? I anticipate frequent use of public transit throughout the week.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "There's a 7-day unlimited transit pass for $35 — it covers the Airport Express, all subway lines, and city buses. That's a great deal if you're here for a week. You can buy it at the ticket counter or the vending machine.",
            textZh:
              "有7天不限次交通通票，35美元——包含机场快线、所有地铁线和市内巴士。如果待一周的话非常划算。可以在售票窗口或自动售票机买。",
            keyPhrases: [
              { en: "unlimited transit pass", zh: "不限次交通通票" },
              { en: "subway lines", zh: "地铁线" },
              { en: "great deal", zh: "很划算" },
            ],
            vocabNotes: {
              unlimited: {
                meaningInContext: "在这句话里表示：不限次数的，在有效期内可以无限次乘坐",
                similarUsage: "类似用法：This plan includes unlimited data.（这个套餐包含不限量流量）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Get the weekly pass — $35 and it covers everything: trains, subway, buses.",
                textZh: "买周票吧——35美元，火车、地铁、巴士全包。",
                actionHint: "考虑周票更划算",
                frequency: "common",
              },
              {
                textEn:
                  "If you're staying a week, the all-access pass is your best bet. Thirty-five dollars, unlimited rides.",
                textZh: "如果待一周的话，全通票最划算。35美元，不限次。",
                actionHint: "直接买通票",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "There's a 7-day unlimited pass for $35—covers the Express, all subway lines, and city buses. That's a great deal if you're here for a week. Get it at the counter or machine.",
            formalityVariants: {
              casual:
                "There's a 7-day unlimited for $35 – covers the Express, subway, and city buses. Good deal if you're here a week. Grab it at the counter or machine.",
              standard:
                "There's a 7-day unlimited transit pass for $35 — it covers the Airport Express, all subway lines, and city buses. That's a great deal if you're here for a week. You can buy it at the ticket counter or the vending machine.",
              formal:
                "We offer a 7-day unlimited transit pass for $35, which includes access to the Airport Express, all subway lines, and city bus services. This would be a highly cost-effective option if your stay extends for a week. It is available for purchase at the ticket counter or through the vending machines.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll get the 7-day pass. Can I use it starting today?",
            textZh: "我买7天通票。今天就可以开始用吗？",
            casualVersion: "I'll grab the 7-day pass. Can I start it today?",
            commonMistake: {
              wrong: "I will buy 7-day pass. Can I use it today start?",
              correct: "I'll get the 7-day pass. Can I use it starting today?",
              explanation: "中文习惯把时间放在动词后，英文'starting today'或'start today'更自然。",
            },
            formalityVariants: {
              casual: "I'll take the 7-day pass. Can I activate it today?",
              standard: "I'll get the 7-day pass. Can I use it starting today?",
              formal:
                "I would like to purchase the 7-day pass. May I inquire if it can be activated for use commencing today?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, it activates the first time you tap it at a gate. So it'll start today and be valid through next week. Just tap it on the yellow reader when you enter and exit the station.",
            textZh: "可以，第一次在闸机上刷的时候激活。所以今天开始，到下周有效。进出站时在黄色读卡器上刷一下就行。",
            keyPhrases: [
              { en: "activates", zh: "激活" },
              { en: "tap", zh: "刷（卡）" },
              { en: "yellow reader", zh: "黄色读卡器" },
              { en: "enter and exit", zh: "进出站" },
            ],
            alternativeExpressions: [
              {
                textEn: "It starts counting from your first tap. Just hold it against the sensor at the gates.",
                textZh: "从第一次刷卡开始计算。进出站时在感应器上刷一下。",
                actionHint: "记住在闸机刷卡",
                frequency: "common",
              },
              {
                textEn: "The pass kicks in when you first use it. Remember to tap in and tap out every ride.",
                textZh: "第一次使用时生效。每次乘车记得进出站都刷。",
                actionHint: "进出都要刷卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, it activates first time you tap it at a gate. So it'll start today, good through next week. Just tap it on the yellow reader when you come in and out.",
            formalityVariants: {
              casual:
                "Yeah, it activates on the first tap at a gate. So, starts today, good through next week. Just tap it on the yellow reader at entry and exit.",
              standard:
                "Yes, it activates the first time you tap it at a gate. So it'll start today and be valid through next week. Just tap it on the yellow reader when you enter and exit the station.",
              formal:
                "Certainly. The pass will be activated upon its initial tap at a turnstile gate. Therefore, it will commence today and remain valid until the end of next week. Kindly tap the pass on the yellow reader upon both entering and exiting the station.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One last question — can I bring my large suitcase on the train?",
            textZh: "好的。最后一个问题——大箱子能带上火车吗？",
            casualVersion: "Cool. Last thing—can I bring my big suitcase on the train?",
            commonMistake: {
              wrong: "My big suitcase can I take on the train?",
              correct: "Can I bring my large suitcase on the train?",
              explanation: "中文'我的大箱子可以带上火车吗'直译易导致语序错误，英文需用'can I bring...'",
            },
            formalityVariants: {
              casual: "Okay, last question—can I bring my big bag on?",
              standard: "Perfect. One last question — can I bring my large suitcase on the train?",
              formal: "Excellent. I have one final inquiry: Am I permitted to bring my large suitcase onto the train?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Absolutely. The Airport Express has luggage racks in every car. Try to board the first or last car — they're usually less crowded. And keep an eye on your bags at all times!",
            textZh:
              "当然可以。机场快线每节车厢都有行李架。尽量上第一节或最后一节车厢——通常人少一些。随时看好您的行李！",
            keyPhrases: [
              { en: "luggage racks", zh: "行李架" },
              { en: "less crowded", zh: "人少一些" },
              { en: "keep an eye on", zh: "看好/留意" },
            ],
            literalMeaning: "'Keep an eye on' 字面意思是'放一只眼睛在…上面'，实际表示'注意/看好'你的东西。",
            alternativeExpressions: [
              {
                textEn: "Sure, there's plenty of room. Each car has overhead racks and floor space for big bags.",
                textZh: "当然可以，空间很充裕。每节车厢上面有行李架，地上也有放大件的地方。",
                actionHint: "上车后找行李架",
                frequency: "common",
              },
              {
                textEn: "No problem at all. The airport train is designed for travelers with luggage.",
                textZh: "完全没问题。机场快线就是为带行李的旅客设计的。",
                actionHint: "放心带大件行李",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally. Express has luggage racks in every car. Try the first or last car—usually emptier. Just keep an eye on your stuff!",
            culturalNote: "乘坐公共交通时请随时看管好个人行李物品",
            formalityVariants: {
              casual:
                "Definitely. Express trains have racks in every car. First or last car's usually less crowded. Just watch your bags!",
              standard:
                "Absolutely. The Airport Express has luggage racks in every car. Try to board the first or last car — they're usually less crowded. And keep an eye on your bags at all times!",
              formal:
                "Indeed. The Airport Express carriages are equipped with designated luggage racks. We recommend boarding either the first or last car, as these tend to be less congested. Please ensure you keep your belongings supervised at all times.",
            },
          },
        ],
      },
      {
        id: "airport-bus",
        titleZh: "机场巴士",
        titleEn: "Airport Bus / Shuttle",
        description: "搭乘机场巴士前往市区或其他目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to get to the convention center. Is the airport bus cheaper than the train?",
            textZh: "你好，我要去会展中心。机场巴士比火车便宜吗？",
            casualVersion: "Hey, gotta get to the convention center. Is the airport bus cheaper than the train?",
            culturalNote: "初次打招呼时，通常直接说'Hi'或'Hello'即可，无需额外寒暄。",
            commonMistake: {
              wrong: "I need go to the convention center.",
              correct: "I need to get to the convention center.",
              explanation: "表达“去哪里”用“get to”更自然，或者“go to”前加不定式“to”。",
            },
            formalityVariants: {
              casual: "Hey, need to hit up the convention center. Is the bus cheaper than the train?",
              standard: "Hi, I need to get to the convention center. Is the airport bus cheaper than the train?",
              formal:
                "Good morning/afternoon, I require transportation to the convention center. Could you please inform me if the airport bus is more economical than the train service?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, the airport bus is $6 compared to $12 for the express train. But it takes about 45 minutes because it makes several stops. Route A3 goes right past the convention center.",
            textZh: "是的，机场巴士6美元，快线火车12美元。但要大约45分钟，因为有好几站。A3路线正好经过会展中心。",
            casualVersion: "Yeah, bus is six bucks, train's twelve. But it's like 45 minutes, makes a bunch of stops. Route A3 goes right by the convention center.",
            formalityVariants: {
              casual: "Yeah, bus is $6, train's $12. But it's 'bout 45 mins, makes stops. Route A3 goes right by the convention center.",
              standard: "Yes, the airport bus is $6 compared to $12 for the express train. But it takes about 45 minutes because it makes several stops. Route A3 goes right past the convention center.",
              formal: "Indeed, the airport bus fare is $6, in contrast to the express train's $12. However, the bus journey is approximately 45 minutes due to multiple scheduled stops. Route A3 serves the convention center directly.",
            },
            keyPhrases: [
              { en: "compared to", zh: "相比" },
              { en: "makes several stops", zh: "有好几站" },
              { en: "route", zh: "路线" },
            ],
            alternativeExpressions: [
              {
                textEn: "The shuttle to downtown is half the price of the train but takes twice as long.",
                textZh: "去市区的大巴是火车一半的价格，但时间是两倍。",
                actionHint: "权衡价格和时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "45 minutes is fine. Where do I catch Route A3?",
            textZh: "45分钟没问题。A3路在哪里坐？",
            casualVersion: "45 minutes is cool. Where do I grab Route A3?",
            formalityVariants: {
              casual: "45 mins is cool. Where do I grab A3?",
              standard: "45 minutes is fine. Where do I catch Route A3?",
              formal: "45 minutes is an acceptable duration. Could you please direct me to the boarding point for Route A3?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Go out Exit 5 and turn right. The bus stops are labeled with route numbers. A3 is the third stop. The next bus arrives in about 8 minutes. You can buy a ticket from me now or tap your card on the bus.",
            textZh:
              "从5号出口出去右转。公交站有路线编号标识。A3是第三个站。下一班大约8分钟后到。可以现在在我这买票，也可以上车刷卡。",
            casualVersion: "Head out Exit 5, then turn right. Bus stops have route numbers. A3's the third stop. Next bus in 'bout 8 mins. You can buy a ticket from me now, or just tap your card when you get on.",
            formalityVariants: {
              casual: "Exit 5, turn right. Stops have route numbers. A3's third stop. Next bus in like 8 mins. Buy ticket from me now, or tap your card on the bus.",
              standard: "Go out Exit 5 and turn right. The bus stops are labeled with route numbers. A3 is the third stop. The next bus arrives in about 8 minutes. You can buy a ticket from me now or tap your card on the bus.",
              formal: "Please exit via Exit 5 and proceed to turn right. The bus stops are clearly marked with their respective route numbers. Route A3 is located at the third stop. The next bus is expected to arrive in approximately 8 minutes. You may purchase a ticket from me at this moment, or alternatively, utilize contactless payment directly on the bus.",
            },
            keyPhrases: [
              { en: "bus stops", zh: "公交站" },
              { en: "labeled with route numbers", zh: "有路线编号标识" },
              { en: "tap your card", zh: "刷卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Exit 5, turn right. Bus bays are numbered — A3 is the third one. Next bus is in about 8 minutes.",
                textZh: "5号出口右转。站台有编号——A3是第三个。下一班大约8分钟。",
                actionHint: "找5号出口",
                frequency: "common",
              },
              {
                textEn: "The A3 bus leaves from the third bay outside Exit 5. You can pay on the bus with a tap card.",
                textZh: "A3路从5号出口外第三个站台发车。可以上车刷卡。",
                actionHint: "出门找站台",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll buy it now. How will I know when to get off? I'm not familiar with the area.",
            textZh: "我现在买票。我怎么知道什么时候下车？我对这里不熟。",
            commonMistake: {
              wrong: "How can I know when to get off?",
              correct: "How will I know when to get off?",
              explanation: "询问未来事件发生时是否能获得信息，用'will'更自然。",
            },
            casualVersion: "I'll grab a ticket now. How will I know when to get off? I don't know the area.",
            formalityVariants: {
              casual: "I'll get a ticket now. How'll I know when to get off? Not from 'round here.",
              standard: "I'll buy a ticket now. How will I know when to get off? I'm not familiar with the area.",
              formal: "I would like to purchase a ticket at this time. Could you please advise me on how I will recognize my stop for disembarkation? I am unfamiliar with this locality.",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The bus has electronic signs and audio announcements for each stop — in English and the local language. The convention center is the 6th stop. You can also use Google Maps to track your location in real time.",
            textZh:
              "巴士有电子显示屏和语音播报每一站——有英语和当地语言。会展中心是第6站。你也可以用谷歌地图实时追踪位置。",
            casualVersion: "Bus has electronic signs and audio for every stop – in English and local language. Convention center's the 6th stop. Can also just use Google Maps to track where you are.",
            formalityVariants: {
              casual: "Buses have signs and audio announcements for stops, in English and local language. Convention center's the 6th stop. You can use Google Maps to see where you are.",
              standard: "The bus has electronic signs and audio announcements for each stop — in English and the local language. The convention center is the 6th stop. You can also use Google Maps to track your location in real time.",
              formal: "The bus is equipped with electronic signage and audible announcements detailing each stop, provided in both English and the local language. The convention center is designated as the sixth stop. Furthermore, you may utilize Google Maps for real-time location tracking.",
            },
            keyPhrases: [
              { en: "electronic signs", zh: "电子显示屏" },
              { en: "audio announcements", zh: "语音播报" },
              { en: "track your location", zh: "追踪位置" },
            ],
            alternativeExpressions: [
              {
                textEn: "There are announcements in English for every stop. The convention center is stop number six.",
                textZh: "每站都有英文报站。会展中心是第六站。",
                actionHint: "注意听报站",
                frequency: "common",
              },
              {
                textEn: "Each stop is announced on the display and over the speaker. You won't miss it.",
                textZh: "每站都有屏幕显示和广播，不会坐过站的。",
                actionHint: "留意屏幕和广播",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there space for luggage on the bus?",
            textZh: "巴士上有放行李的地方吗？",
            commonMistake: {
              wrong: "Is there a place for luggage on the bus?",
              correct: "Is there space for luggage on the bus?",
              explanation: "描述容量或区域用'space'更恰当，'place'不常用。",
            },
            casualVersion: "Got space for luggage on the bus?",
            formalityVariants: {
              casual: "Any room for luggage on the bus?",
              standard: "Is there space for luggage on the bus?",
              formal: "Is there designated space available for luggage on board the bus?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "There's a luggage compartment underneath the bus. The driver will help you load it. Just make sure to grab it when you get off — the driver will open the compartment at every stop.",
            textZh: "巴士下面有行李舱。司机会帮你放进去。下车时记得拿——司机每站都会打开行李舱。",
            casualVersion: "Yeah, there's a luggage compartment under the bus. Driver'll help you with it. Just remember to grab it when you get off – driver opens it at every stop.",
            formalityVariants: {
              casual: "Yeah, luggage compartment's under the bus. Driver'll help. Just remember to get it when you get off – he opens it every stop.",
              standard: "There's a luggage compartment underneath the bus. The driver will help you put it in. Remember to grab it when you get off — the driver opens the compartment at every stop.",
              formal: "Yes, there is a dedicated luggage compartment situated beneath the bus. The driver will assist you with stowing your belongings. Kindly remember to retrieve your luggage upon disembarkation, as the driver will access the compartment at each stop.",
            },
            keyPhrases: [
              { en: "luggage compartment", zh: "行李舱" },
              { en: "underneath", zh: "下面" },
              { en: "grab it", zh: "拿好/取出" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can stow your bags underneath. The driver opens it at every stop, so don't forget yours.",
                textZh: "大件行李放下面行李舱。每站司机都会打开，别忘了拿。",
                actionHint: "下车前记得取行李",
                frequency: "common",
              },
              {
                textEn: "Large bags go in the storage area below. Just let the driver know which stop is yours.",
                textZh: "大件行李放下层储物区。告诉司机你在哪站下就好。",
                actionHint: "提前告知司机",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Does the bus have WiFi? I need to send some emails on the way.",
            textZh: "好的。巴士有WiFi吗？路上要发几封邮件。",
            commonMistake: {
              wrong: "Does the bus have WIFI?",
              correct: "Does the bus have Wi-Fi?",
              explanation: "Wi-Fi是专有名词，通常写成Wi-Fi或WiFi，而非全大写。",
            },
            casualVersion: "Cool. Bus got WiFi? Gotta send some emails on the way.",
            formalityVariants: {
              casual: "Cool. WiFi on the bus? Gotta send some emails.",
              standard: "Great. Does the bus have WiFi? I need to send some emails on the way.",
              formal: "Excellent. Is wireless internet access available on the bus? I need to address some emails during the journey.",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, there's free WiFi on the bus. The network name is 'AirportBus-Free.' It's decent for emails and messaging but might be slow for video calls. Here's your ticket — enjoy the ride!",
            textZh:
              "有的，巴士上有免费WiFi。网络名称是'AirportBus-Free'。发邮件和消息没问题，但视频通话可能会慢。这是您的票——祝乘车愉快！",
            casualVersion: "Yep, free WiFi on the bus. Network name's [WiFi name].",
            formalityVariants: {
              casual: "Yeah, free WiFi. Network name's [WiFi name].",
              standard: "Yes, there's free WiFi on the bus. The network name is [WiFi name].",
              formal: "Affirmative, complimentary wireless internet access is provided on board. The network name is [WiFi name].",
            },
            keyPhrases: [
              { en: "decent", zh: "还不错/够用的" },
              { en: "messaging", zh: "发消息" },
            ],
            vocabNotes: {
              decent: {
                meaningInContext: "在这句话里表示：还过得去、够用的（不算特别好但能满足基本需求）",
                similarUsage: "类似用法：The hotel was decent for the price.（这个价位来说酒店还不错）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Yeah, the bus has complimentary WiFi. Good enough for browsing and email.",
                textZh: "有的，巴士有免费WiFi。浏览网页和收发邮件没问题。",
                actionHint: "连WiFi办公",
                frequency: "common",
              },
              {
                textEn: "There's WiFi on board. The password is on the sticker above your seat.",
                textZh: "车上有WiFi。密码贴在座位上方。",
                actionHint: "找WiFi密码",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
];
