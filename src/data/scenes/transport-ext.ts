import type { PresetScene } from "../scene-types";

// ============================================================
// 交通场景扩展 — Transport Extended Scenes
// 覆盖：公交、火车、地铁、渡轮、自行车、滑板车、停车、收费站、
//       抛锚、加油、充电、邮轮、机场接驳、酒店班车、交通违规、
//       事故、取消行程、评价司机、公路旅行、搭便车、拼车、
//       有轨电车、缆车、游船
// ============================================================

export const TRANSPORT_SCENES_EXT: PresetScene[] = [
  // ==================== 城市公交 ====================
  {
    id: "transport-bus-city",
    tags: ["bus", "公交", "巴士"],
    category: "transport",
    titleZh: "乘坐城市公交",
    titleEn: "Taking a City Bus",
    description: "在城市里乘坐公共汽车，包括问路线、刷卡和确认下车站",
    otherRole: "公交司机",
    otherRoleIcon: "🚌",
    flows: [
      {
        id: "basic",
        titleZh: "乘坐公交基本流程",
        titleEn: "Basic City Bus Ride",
        description: "上车、付费、确认站点、下车的完整流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, does this bus go to downtown?",
            textZh: "请问，这辆公交去市中心吗？",
            casualVersion: "Hey, does this go downtown?",
            culturalNote: "与中文喜欢用“请问”开头不同，英文中“Excuse me”后可以直接提问，不需再加多余的客套话。",
            commonMistake: {
              wrong: "Excuse me, this bus go to downtown?",
              correct: "Excuse me, does this bus go to downtown?",
              explanation: "中文母语者常省略助动词，但英文问句需要助动词“does”。",
            },
            formalityVariants: {
              casual: "Excuse me, this bus go downtown?",
              standard: "Excuse me, does this bus go to downtown?",
              formal: "Pardon me, could you please tell me if this bus is bound for the downtown area?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, this is the number 7. It goes straight through downtown. Hop on.",
            textZh: "是的，这是7路车。直达市中心。上车吧。",
            keyPhrases: [
              { en: "number 7", zh: "7路车" },
              { en: "straight through", zh: "直达" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, number 7 — goes right through downtown. Come on in.", textZh: "对，7路车——直接穿过市中心。上来吧。", actionHint: "更口语化的欢迎", frequency: "common" },
              { textEn: "That's the one. This bus runs all the way downtown. Step right up.", textZh: "就是这辆。这趟车一路到市中心。请上车。", actionHint: "确认并热情招呼", frequency: "common" },
            ],
            casualVersion: "Yeah, this is the 7. Goes straight downtown. Hop on.",
            culturalNote: "“Hop on”是一种非常口语化且友好的表达，意思是“上车吧”，常见于日常交流。",
            formalityVariants: {
              casual: "Yep, 7 bus. Goes downtown. Get on.",
              standard: "Yes, this is the number 7. It goes straight through downtown. Hop on.",
              formal: "Yes, this is bus route number 7. It provides direct service to the downtown area. Please board.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the fare? Do you accept cash?",
            textZh: "车费多少？收现金吗？",
            culturalNote: "很多城市公交不收现金，只能用交通卡或手机支付。上车前最好准备好。",
            casualVersion: "How much is it? Cash okay?",
            commonMistake: {
              wrong: "How much money? You receive cash?",
              correct: "How much is the fare? Do you accept cash?",
              explanation: "“How much money?”听起来不自然，应问“fare”或“cost”。“receive cash”不是地道表达。",
            },
            formalityVariants: {
              casual: "Fare? Cash work?",
              standard: "How much is the fare? Do you accept cash?",
              formal: "What is the fare, please? And do you accept cash payments?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's $2.50. Cash or transit card. I can't make change though, so you'll need exact fare.",
            textZh: "2.50美元。现金或交通卡都行。但我没法找零，所以需要自备零钱。",
            keyPhrases: [
              { en: "transit card", zh: "交通卡" },
              { en: "make change", zh: "找零" },
              { en: "exact fare", zh: "自备零钱" },
            ],
            alternativeExpressions: [
              { textEn: "Two fifty. Cash or card works. Just have the right change — I can't break bills.", textZh: "两块五。现金或卡都行。要有零钱——我没法找。", actionHint: "简洁直接的说法", frequency: "common" },
              { textEn: "Fare's $2.50. You can pay with cash or tap your transit pass. No change given though.", textZh: "车费2.50美元。可以付现或刷交通卡。不过不找零。", actionHint: "略正式的告知", frequency: "occasional" },
            ],
            casualVersion: "It's $2.50. Cash or card. Can't make change though, need exact fare.",
            culturalNote: "美国许多公交车司机不负责找零，乘客需要自备“exact fare”（刚好够的车费）。",
            formalityVariants: {
              casual: "Two-fifty. Cash or card. Gotta have exact change, I can't break bills.",
              standard: "It's $2.50. Cash or transit card. I can't make change though, so you'll need exact fare.",
              formal: "The fare is $2.50. We accept cash or transit cards. However, please be advised that I am unable to provide change, so exact fare is required.",
            },
          },
          {
            speaker: "you",
            textEn: "I have a transit card. Where do I tap it?",
            textZh: "我有交通卡。在哪里刷？",
            casualVersion: "Got a card. Where do I tap it?",
            commonMistake: {
              wrong: "I have card. Where to tap?",
              correct: "I have a transit card. Where do I tap it?",
              explanation: "缺少冠词“a”或“the”。问句结构不完整，需要助动词和主语“do I”。",
            },
            formalityVariants: {
              casual: "I have a card. Where's the tap spot?",
              standard: "I have a transit card. Where do I tap it?",
              formal: "I possess a transit card. Could you please direct me to where I should tap it?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Right there on the reader by the door. You should hear a beep.",
            textZh: "就在门边的读卡器上刷一下。会听到一声哔。",
            keyPhrases: [
              { en: "reader", zh: "读卡器" },
              { en: "beep", zh: "哔声" },
            ],
            alternativeExpressions: [
              { textEn: "Just tap it on that pad next to the door. It'll beep when it goes through.", textZh: "在门旁边那个面板上刷一下。刷过去会响一声。", actionHint: "用tap替代更口语", frequency: "common" },
              { textEn: "See the card reader by the entrance? Hold your card there till you hear the beep.", textZh: "看到入口旁的读卡器了吗？把卡放上去直到听到哔声。", actionHint: "指引式说法", frequency: "occasional" },
            ],
            casualVersion: "Right there, on the reader by the door. Should hear a beep.",
            formalityVariants: {
              casual: "Over there, by the door, on the reader. You'll hear a beep.",
              standard: "Right there on the reader by the door. You should hear a beep.",
              formal: "It is located on the card reader adjacent to the entrance. You should hear an audible confirmation tone.",
            },
          },
          {
            speaker: "you",
            textEn: "Could you let me know when we reach Central Park?",
            textZh: "到中央公园的时候能提醒我一下吗？",
            casualVersion: "Could you tell me when we get to Central Park?",
            commonMistake: {
              wrong: "Could you remind me when to Central Park?",
              correct: "Could you let me know when we reach Central Park?",
              explanation: "“Remind me”不够自然。“Let me know”或“tell me”更常用。缺少主语“we”。",
            },
            formalityVariants: {
              casual: "Lemme know when we hit Central Park?",
              standard: "Could you let me know when we reach Central Park?",
              formal: "Would it be possible for you to inform me when we arrive at Central Park?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure. It's about eight stops from here. I'll call it out.",
            textZh: "好的。从这里大概八站。我会喊的。",
            keyPhrases: [
              { en: "eight stops", zh: "八站" },
              { en: "call it out", zh: "喊出来/报站" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. About eight stops away. I'll let you know when we're there.", textZh: "没问题。大概八站。到了我告诉你。", actionHint: "平实的承诺提醒", frequency: "common" },
              { textEn: "You got it. It's eight stops down the line. I'll shout it out for you.", textZh: "放心。沿线八站。我会帮你喊的。", actionHint: "热情随意的回应", frequency: "occasional" },
            ],
            casualVersion: "Sure. 'Bout eight stops. I'll shout it out.",
            formalityVariants: {
              casual: "Yep. About eight more stops. I'll tell ya.",
              standard: "Sure. It's about eight stops from here. I'll call it out.",
              formal: "Certainly. It is approximately eight stops from our current location. I will announce the stop when we arrive.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Do I exit from the front or the back door?",
            textZh: "谢谢！从前门还是后门下车？",
            culturalNote: "美国公交一般前门上车、后门下车。下车前要拉铃或按按钮。",
            casualVersion: "Thanks! Front or back door to exit?",
            commonMistake: {
              wrong: "Thank you! From front or back door to get off?",
              correct: "Thank you! Do I exit from the front or the back door?",
              explanation: "“From…to get off”是中式表达。“Exit from”或“get off at”更自然。",
            },
            formalityVariants: {
              casual: "Thanks! Front or back exit?",
              standard: "Thank you! Do I exit from the front or the back door?",
              formal: "Thank you. Regarding disembarkation, should I utilize the front or rear exit?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Back door, please. Just pull the cord or press the strip when your stop is next.",
            textZh: "请从后门下。快到站时拉一下绳子或按一下按钮条。",
            keyPhrases: [
              { en: "pull the cord", zh: "拉绳子" },
              { en: "press the strip", zh: "按按钮条" },
            ],
            alternativeExpressions: [
              { textEn: "Use the rear exit. Hit the yellow strip or pull the cord when your stop's coming up.", textZh: "走后面的出口。快到站时按黄色按钮条或拉绳子。", actionHint: "用rear exit替换", frequency: "common" },
              { textEn: "Out the back, please. Just give the cord a tug before your stop so I know to pull over.", textZh: "请从后面出去。到站前拉一下绳子，我就知道要停了。", actionHint: "更随意的叮嘱", frequency: "occasional" },
            ],
            casualVersion: "Back door. Just pull the cord or press the strip when your stop's next.",
            culturalNote: "美国公交车通常通过拉绳或按压车窗边的感应条来通知司机下一站下车。",
            formalityVariants: {
              casual: "Back door. Pull the cord or press the strip before your stop.",
              standard: "Back door, please. Just pull the cord or press the strip when your stop is next.",
              formal: "Please use the rear exit. You may signal your stop by pulling the cord or pressing the illuminated strip when your destination approaches.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "问路换乘",
        titleEn: "Asking About Transfers",
        description: "需要换乘其他公交线路到达目的地",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need to get to the Natural History Museum. Is this the right bus?",
            textZh: "请问，我要去自然历史博物馆。这是对的车吗？",
            casualVersion: "Excuse me, gotta get to the Natural History Museum. Is this the bus?",
            commonMistake: {
              wrong: "Excuse me, I need go to Natural History Museum. Is this correct bus?",
              correct: "Excuse me, I need to get to the Natural History Museum. Is this the right bus?",
              explanation: "“need go to”语法错误，应是“need to get to”。“correct bus”应为“the right bus”。",
            },
            formalityVariants: {
              casual: "Excuse me, Natural History Museum. This the right bus?",
              standard: "Excuse me, I need to get to the Natural History Museum. Is this the right bus?",
              formal: "Pardon me, I am attempting to reach the Natural History Museum. Is this the appropriate bus route?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Not directly. You'll need to transfer to the 15 at Madison Street. I'll let you know when we get there.",
            textZh: "不能直达。你需要在麦迪逊街换乘15路。到了我提醒你。",
            keyPhrases: [
              { en: "transfer to", zh: "换乘" },
              { en: "let you know", zh: "提醒你" },
            ],
            alternativeExpressions: [
              { textEn: "Not this one, but you can switch to the 15 at Madison Street. I'll tell you when we get there.", textZh: "这趟不到，但你可以在麦迪逊街换15路。到了我告诉你。", actionHint: "口语化的转车建议", frequency: "common" },
              { textEn: "You'll need to hop off at Madison and catch the 15 from there. I'll give you a heads-up.", textZh: "你要在麦迪逊下车，从那里搭15路。我会提前提醒你。", actionHint: "用hop off更随意", frequency: "occasional" },
            ],
            casualVersion: "Not direct. Gotta transfer to the 15 at Madison Street. I'll tell ya when we get there.",
            formalityVariants: {
              casual: "Nah, not direct. Change to the 15 at Madison. I'll let you know.",
              standard: "Not directly. You'll need to transfer to the 15 at Madison Street. I'll let you know when we get there.",
              formal: "This route does not directly service that destination. You will need to transfer to the Route 15 bus at Madison Street. I will inform you upon our arrival there.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to pay again when I transfer?",
            textZh: "换乘的时候需要再付一次钱吗？",
            culturalNote: "很多城市有免费换乘（free transfer）政策，通常两小时内有效。",
            casualVersion: "Gotta pay again for the transfer?",
            commonMistake: {
              wrong: "Need pay again when transfer?",
              correct: "Do I need to pay again when I transfer?",
              explanation: "缺少助动词“Do”和主语“I”。“when transfer”应改为“when I transfer”或“for a transfer”。",
            },
            formalityVariants: {
              casual: "Pay again for the transfer?",
              standard: "Do I need to pay again when I transfer?",
              formal: "Will I be required to pay an additional fare when I transfer?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No, your card gives you a free transfer within two hours. Just tap it again on the next bus.",
            textZh: "不用，你的卡两小时内可以免费换乘。上下一辆车时再刷一次就行。",
            keyPhrases: [
              { en: "free transfer", zh: "免费换乘" },
              { en: "within two hours", zh: "两小时内" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, transfers are free if you use your card within two hours. Just swipe it again on the next bus.", textZh: "不用，两小时内用卡换乘免费。上下辆车再刷一次。", actionHint: "用Nope更随意", frequency: "common" },
              { textEn: "No extra charge. Your card covers the transfer as long as it's within a two-hour window.", textZh: "不额外收费。两小时内你的卡包含换乘。", actionHint: "强调不加钱", frequency: "occasional" },
            ],
            casualVersion: "Nah, card gives you a free transfer for two hours. Just tap it again on the next bus.",
            culturalNote: "美国很多城市的交通卡都有免费换乘时限，例如在两小时内可免费换乘一次。",
            formalityVariants: {
              casual: "Nope, your card gives a free two-hour transfer. Just tap it on the next bus.",
              standard: "No, your card gives you a free transfer within two hours. Just tap it again on the next bus.",
              formal: "No, your transit card grants you a complimentary transfer within a two-hour window. Simply tap it again on the subsequent bus.",
            },
          },
          {
            speaker: "you",
            textEn: "How will I know which direction the 15 goes? I don't want to go the wrong way.",
            textZh: "我怎么知道15路是往哪个方向的？我不想坐反了。",
            casualVersion: "How'll I know which way the 15 goes? Don't wanna go wrong way.",
            commonMistake: {
              wrong: "How to know which direction 15 goes? I don't want sit wrong direction.",
              correct: "How will I know which direction the 15 goes? I don't want to go the wrong way.",
              explanation: "“How to know”不自然，应为“How will I know”。“sit wrong direction”是中式表达，应为“go the wrong way”。",
            },
            formalityVariants: {
              casual: "How do I know which way the 15 goes? Don't wanna mess up.",
              standard: "How will I know which direction the 15 goes? I don't want to go the wrong way.",
              formal: "How may I ascertain the correct direction for the Route 15 bus? I wish to avoid traveling in the incorrect direction.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "When you get off, cross the street. The northbound stop is right there. Look for the sign that says 'Museum District.'",
            textZh: "下车后过马路。北行的站就在那里。找写着'博物馆区'的牌子。",
            keyPhrases: [
              { en: "cross the street", zh: "过马路" },
              { en: "northbound", zh: "北行的" },
            ],
            alternativeExpressions: [
              { textEn: "Once you hop off, go across the street. The stop heading north is right there — look for the Museum District sign.", textZh: "下车后走到对面。北行的站就在那——找博物馆区的牌子。", actionHint: "用hop off更口语", frequency: "common" },
              { textEn: "Just cross over when you get off. You'll see the northbound stop with a sign saying Museum District.", textZh: "下车过马路就行。你会看到北行站牌写着博物馆区。", actionHint: "简化指引", frequency: "common" },
            ],
            casualVersion: "Get off, cross the street. Northbound stop's right there. Look for the 'Museum District' sign.",
            formalityVariants: {
              casual: "Cross the street after you get off. Northbound stop's right there. Look for 'Museum District'.",
              standard: "When you get off, cross the street. The northbound stop is right there. Look for the sign that says 'Museum District.'",
              formal: "Upon disembarking, please cross the street. The northbound stop will be directly across. Kindly look for the signage indicating 'Museum District.'",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. How often does the 15 come?",
            textZh: "明白了。15路多久一班？",
            casualVersion: "Got it. How often's the 15 come?",
            commonMistake: {
              wrong: "Got it. 15 bus how often come?",
              correct: "Got it. How often does the 15 come?",
              explanation: "问频率的正确句式是“How often does [subject] come/go”。",
            },
            formalityVariants: {
              casual: "Okay. How often's the 15?",
              standard: "Got it. How often does the 15 come?",
              formal: "Understood. What is the frequency of the Route 15 bus service?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Every 10 minutes during the day. You won't wait long.",
            textZh: "白天每10分钟一班。不会等很久的。",
            keyPhrases: [
              { en: "every 10 minutes", zh: "每10分钟" },
              { en: "during the day", zh: "白天" },
            ],
            alternativeExpressions: [
              { textEn: "It runs about every 10 minutes during the day, so you shouldn't have to wait long.", textZh: "白天大约每10分钟一班，你不用等太久。", actionHint: "稍详细的说法", frequency: "common" },
              { textEn: "Pretty frequent — like every 10 minutes. You'll catch one quick.", textZh: "挺频繁的——大概每10分钟。很快就能等到。", actionHint: "非常随意的语气", frequency: "occasional" },
            ],
            casualVersion: "Every 10 mins during the day. Won't wait long.",
            formalityVariants: {
              casual: "Every ten minutes most of the day. You won't wait much.",
              standard: "Every 10 minutes during the day. You won't wait long.",
              formal: "It operates every 10 minutes throughout the daylight hours. Your waiting time will be minimal.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect, thanks for the help. I really appreciate it.",
            textZh: "太好了，谢谢帮忙。真的很感谢。",
            casualVersion: "Awesome, thanks for the help. Really appreciate it.",
            commonMistake: {
              wrong: "Perfect, thank you for your help. I very appreciate it.",
              correct: "Perfect, thanks for the help. I really appreciate it.",
              explanation: "“Thanks for the help”更口语化。“I very appreciate it”缺少修饰词“really”或动词“do”。",
            },
            formalityVariants: {
              casual: "Cool, thanks for helping. Appreciate it.",
              standard: "Perfect, thanks for the help. I really appreciate it.",
              formal: "Excellent, I am very grateful for your assistance. I genuinely appreciate it.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No problem. Your stop is coming up next — get ready to hop off!",
            textZh: "不客气。你的站快到了——准备下车！",
            keyPhrases: [
              { en: "coming up next", zh: "快到了" },
              { en: "hop off", zh: "下车" },
            ],
            alternativeExpressions: [
              { textEn: "Anytime. Heads up — your stop is next. Get ready to jump off!", textZh: "不客气。注意——你的站下一个就到。准备下车！", actionHint: "用heads up提醒", frequency: "common" },
              { textEn: "Happy to help. We're almost at your stop now — grab your stuff!", textZh: "乐意帮忙。马上就到你的站了——拿好东西！", actionHint: "热情的提醒", frequency: "common" },
            ],
            casualVersion: "No problem. Your stop's next — get ready to hop off!",
            culturalNote: "“Hop off”是“get off”的更轻松、口语化的表达，常用于朋友或服务人员与顾客之间的交流。",
            formalityVariants: {
              casual: "No prob. Your stop's coming up — time to get off!",
              standard: "No problem. Your stop is coming up next — get ready to hop off!",
              formal: "You're most welcome. Your designated stop is the next one — please prepare to disembark.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 城际巴士 ====================
  {
    id: "transport-bus-intercity",
    tags: ["bus", "公交", "巴士"],
    category: "transport",
    titleZh: "乘坐城际巴士",
    titleEn: "Taking an Intercity Bus",
    description: "乘坐长途巴士往返城市之间，购票、登车和途中服务",
    otherRole: "巴士工作人员",
    otherRoleIcon: "🚍",
    flows: [
      {
        id: "basic",
        titleZh: "购票上车",
        titleEn: "Buying Ticket & Boarding",
        description: "在车站购买城际巴士票并登车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need a ticket to Boston for today. What times are available?",
            textZh: "你好，我要一张今天去波士顿的票。有什么时间的？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "We have departures at 10 AM, 1 PM, and 4 PM. One-way or round trip?",
            textZh: "我们有上午10点、下午1点和4点的班次。单程还是往返？",
            keyPhrases: [
              { en: "departures", zh: "班次/出发" },
              { en: "one-way", zh: "单程" },
              { en: "round trip", zh: "往返" },
            ],
            alternativeExpressions: [
              { textEn: "There are buses at 10, 1, and 4. Are you doing one-way or coming back too?", textZh: "10点、1点和4点有车。你买单程还是也回来？", actionHint: "更口语化的问法", frequency: "common" },
              { textEn: "We've got three options today — 10 AM, 1 PM, and 4 PM. Will that be a single or return ticket?", textZh: "今天有三个选择——上午10点、下午1点和4点。要单程还是往返票？", actionHint: "用single替代one-way", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One-way, please. The 1 PM bus. How much is it?",
            textZh: "单程。下午1点的。多少钱？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "That'll be $35. Would you like a window or aisle seat?",
            textZh: "35美元。您要靠窗还是靠过道的座位？",
            keyPhrases: [
              { en: "window", zh: "靠窗" },
              { en: "aisle seat", zh: "靠过道的座位" },
            ],
            alternativeExpressions: [
              { textEn: "That comes to $35. Do you have a preference — window or aisle?", textZh: "35美元。你有偏好吗——靠窗还是靠过道？", actionHint: "用preference更礼貌", frequency: "common" },
              { textEn: "Thirty-five bucks. Window side or aisle side?", textZh: "35块。靠窗还是靠过道？", actionHint: "非常口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Window seat, please. Is there Wi-Fi on the bus?",
            textZh: "靠窗的。车上有Wi-Fi吗？",
            culturalNote: "美国主要城际巴士公司如Greyhound和FlixBus通常提供免费Wi-Fi和充电插座。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, free Wi-Fi and power outlets at every seat. The bus boards at Gate 3 about 15 minutes before departure.",
            textZh: "是的，免费Wi-Fi，每个座位都有电源插座。在3号门登车，发车前15分钟开始。",
            keyPhrases: [
              { en: "power outlets", zh: "电源插座" },
              { en: "boards at Gate 3", zh: "在3号门登车" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, Wi-Fi's free and there's a plug at every seat. Boarding at Gate 3, about 15 minutes before we leave.", textZh: "对，Wi-Fi免费，每个座位有插座。3号门登车，出发前大约15分钟。", actionHint: "用plug替代outlet", frequency: "common" },
              { textEn: "Wi-Fi and charging are both available on board. Head to Gate 3 — boarding starts 15 minutes early.", textZh: "车上有Wi-Fi和充电。去3号门——提前15分钟开始登车。", actionHint: "简洁告知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I bring a suitcase? Is there storage underneath?",
            textZh: "可以带行李箱吗？下面有行李舱吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "One carry-on and one checked bag are included. The driver will load your luggage in the compartment below.",
            textZh: "包含一件随身行李和一件托运行李。司机会帮你把行李放到下面的行李舱。",
            keyPhrases: [
              { en: "carry-on", zh: "随身行李" },
              { en: "checked bag", zh: "托运行李" },
              { en: "compartment", zh: "行李舱" },
            ],
            alternativeExpressions: [
              { textEn: "You get one bag on board and one underneath. The driver handles the luggage below.", textZh: "车上可以带一件，下面放一件。下面的行李司机帮你搬。", actionHint: "简化说明", frequency: "common" },
              { textEn: "One personal item and one suitcase are included. Just hand your big bag to the driver at the curb.", textZh: "包含一件随身物品和一个行李箱。大件行李在路边交给司机就行。", actionHint: "更具体的指引", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. How long is the ride to Boston?",
            textZh: "好的。到波士顿要多久？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "About four and a half hours with one rest stop. Here's your ticket — don't forget to show it when you board.",
            textZh: "大约四个半小时，中间有一次休息站。这是你的票——上车时记得出示。",
            keyPhrases: [
              { en: "rest stop", zh: "休息站" },
              { en: "show it when you board", zh: "上车时出示" },
            ],
            alternativeExpressions: [
              { textEn: "Around four and a half hours. We make one stop along the way. Here's your ticket — have it ready when you get on.", textZh: "大概四个半小时。途中停一次。这是你的票——上车时准备好。", actionHint: "用along the way更自然", frequency: "common" },
              { textEn: "It's roughly a four-and-a-half-hour ride with a quick break. Don't lose this ticket — you'll need it to board.", textZh: "大约四个半小时，中间有个短暂休息。别弄丢票——上车要用。", actionHint: "叮嘱保管好票", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "途中问题处理",
        titleEn: "Handling Issues During the Ride",
        description: "在长途巴士上处理座位、空调、休息站等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think someone is sitting in my assigned seat. I have seat 12A.",
            textZh: "不好意思，好像有人坐了我的座位。我的座位是12A。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Let me check. Sir, could you show me your ticket? This gentleman has seat 12A.",
            textZh: "我看看。先生，能出示一下你的票吗？这位先生的座位是12A。",
            keyPhrases: [
              { en: "assigned seat", zh: "指定座位" },
              { en: "show me your ticket", zh: "出示你的票" },
            ],
            alternativeExpressions: [
              { textEn: "Let me sort this out. Sir, can I see your ticket? This seat belongs to this passenger.", textZh: "我来处理一下。先生，能看看你的票吗？这个座位是这位乘客的。", actionHint: "用sort this out更自然", frequency: "common" },
              { textEn: "Hold on, let me take a look. Could you pull out your ticket, sir? We need to figure out who has 12A.", textZh: "等一下，我看看。先生，能拿出你的票吗？我们得看看谁是12A。", actionHint: "协调语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Also, is it possible to turn down the air conditioning? It's really cold back here.",
            textZh: "还有，能把空调调小一点吗？后面真的很冷。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "I'll adjust it a bit. There's also a personal vent above your seat you can close.",
            textZh: "我调一下。你座位上方也有个人出风口，可以关掉。",
            keyPhrases: [
              { en: "adjust", zh: "调节" },
              { en: "personal vent", zh: "个人出风口" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I'll turn it down. There's also a little air nozzle above you that you can shut off.", textZh: "好，我调小一点。你上方还有个小出风口，可以关掉。", actionHint: "用nozzle替代vent", frequency: "common" },
              { textEn: "No problem. I'll lower the AC. You can also twist the vent above your seat to close it.", textZh: "没问题。我把空调调低。你也可以旋转座位上方的出风口关掉它。", actionHint: "更具体的操作说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When is the next rest stop? I need to use the restroom.",
            textZh: "下一个休息站什么时候到？我要上洗手间。",
            culturalNote: "长途巴士一般每2-3小时停一次。车上通常也有洗手间，但空间很小。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "We'll stop in about 30 minutes at a service plaza. There's also a restroom at the back of the bus if you need it now.",
            textZh: "大概30分钟后会在服务区停。如果现在需要，车尾也有洗手间。",
            keyPhrases: [
              { en: "service plaza", zh: "服务区" },
              { en: "at the back", zh: "在车尾" },
            ],
            alternativeExpressions: [
              { textEn: "About half an hour to the next rest area. There's a bathroom in the back if you can't wait.", textZh: "大约半小时到下一个休息区。等不及的话后面有卫生间。", actionHint: "用half an hour更口语", frequency: "common" },
              { textEn: "We're pulling into a service stop in roughly 30 minutes. Feel free to use the restroom in the rear.", textZh: "大约30分钟后停服务区。后面的洗手间随时可以用。", actionHint: "稍正式的告知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long do we stop at the rest area?",
            textZh: "在休息区停多久？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Fifteen minutes. I'll honk the horn before we leave. Please don't wander too far.",
            textZh: "15分钟。出发前我会按喇叭。请不要走太远。",
            keyPhrases: [
              { en: "honk the horn", zh: "按喇叭" },
              { en: "wander too far", zh: "走太远" },
            ],
            alternativeExpressions: [
              { textEn: "About 15 minutes. Listen for the horn — that means we're leaving. Don't go too far.", textZh: "大约15分钟。听到喇叭就是要走了。别走太远。", actionHint: "先说时间再叮嘱", frequency: "common" },
              { textEn: "We'll be there for 15 minutes. I'll give a honk when it's time to go, so stay close.", textZh: "我们停15分钟。该走了我会按喇叭，所以别走远。", actionHint: "用stay close替代", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are we running on schedule? I have a connecting bus to catch in Boston.",
            textZh: "我们准时吗？我在波士顿还要转车。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "We're about 20 minutes behind due to traffic. I'll try to make up some time on the highway.",
            textZh: "因为交通堵塞，我们晚了大约20分钟。我会在高速上尽量赶回来。",
            keyPhrases: [
              { en: "behind", zh: "落后/晚点" },
              { en: "make up time", zh: "赶回时间" },
            ],
            alternativeExpressions: [
              { textEn: "We're running about 20 minutes late because of traffic. I'll do my best to catch up on the freeway.", textZh: "因为堵车我们晚了大约20分钟。上高速后我尽量赶。", actionHint: "用running late更常见", frequency: "common" },
              { textEn: "Traffic set us back around 20 minutes. Once we hit the highway, I should be able to make up some of that.", textZh: "堵车耽误了大约20分钟。上了高速应该能赶回来一些。", actionHint: "用set us back更地道", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 夜间巴士 ====================
  {
    id: "transport-bus-night",
    tags: ["bus", "公交", "巴士"],
    category: "transport",
    titleZh: "乘坐夜间巴士",
    titleEn: "Taking a Night Bus",
    description: "深夜乘坐公交或长途夜班车，确认路线和安全注意事项",
    otherRole: "夜班司机",
    otherRoleIcon: "🌙",
    flows: [
      {
        id: "basic",
        titleZh: "深夜乘车",
        titleEn: "Late Night Ride",
        description: "深夜确认公交路线和安全到达目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Is this the last bus to Riverside tonight?",
            textZh: "这是今晚去河滨区的最后一班车吗？",
            culturalNote: "深夜公交班次少，一定要确认末班车时间，错过可能只能打车了。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, this is the last one. After this, service doesn't start again until 5 AM.",
            textZh: "是的，这是末班车。之后到早上5点才有车。",
            keyPhrases: [
              { en: "last one", zh: "末班车" },
              { en: "service doesn't start again", zh: "不再有车次" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, you caught the last bus. Nothing else runs till 5 in the morning.", textZh: "对，你赶上末班车了。到早上5点之前没别的车了。", actionHint: "用caught更口语", frequency: "common" },
              { textEn: "This is it — last bus of the night. Next one won't be till 5 AM.", textZh: "就这趟了——今晚最后一班。下一趟要到早上5点。", actionHint: "强调最后一班", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does this bus follow the same route as during the day?",
            textZh: "这辆车和白天走一样的路线吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Mostly, but we skip a few stops after midnight. Where exactly are you heading?",
            textZh: "大部分一样，但午夜后会跳过几个站。你具体要去哪里？",
            keyPhrases: [
              { en: "skip a few stops", zh: "跳过几个站" },
              { en: "after midnight", zh: "午夜后" },
            ],
            alternativeExpressions: [
              { textEn: "Pretty much, but the late-night route drops a few stops. Where do you need to get off?", textZh: "基本一样，但深夜路线少停几站。你要在哪下？", actionHint: "用drops更口语", frequency: "common" },
              { textEn: "It's similar, but we don't hit every stop past midnight. Where are you headed?", textZh: "差不多，但过了午夜不是每站都停。你去哪？", actionHint: "用headed更随意", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to get to Oak Street and 4th Avenue. Do you stop there at night?",
            textZh: "我要去橡树街和第四大道。晚上在那里停吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, that one's still on the route. It'll be about 25 minutes from here.",
            textZh: "停的，那个站还在路线上。从这里大概25分钟。",
            keyPhrases: [
              { en: "still on the route", zh: "还在路线上" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, we still stop there. Should be about 25 minutes from here.", textZh: "停的，那站还停。从这里大概25分钟。", actionHint: "简洁确认", frequency: "common" },
              { textEn: "That stop's still on tonight's route. You're looking at around 25 minutes.", textZh: "那站还在今晚的路线上。大概要25分钟。", actionHint: "稍正式的确认", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is this area safe at night? I'm not from around here.",
            textZh: "这个区域晚上安全吗？我不是本地人。",
            culturalNote: "在陌生城市深夜出行，向司机询问安全情况是很正常的。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's a pretty quiet area. Just stick to well-lit streets and you'll be fine.",
            textZh: "那片区域挺安静的。走有路灯的街就行了。",
            keyPhrases: [
              { en: "well-lit streets", zh: "有路灯的街道" },
              { en: "stick to", zh: "沿着走" },
            ],
            alternativeExpressions: [
              { textEn: "That neighborhood is pretty safe. Just stay on the main streets where there's good lighting.", textZh: "那个小区挺安全的。走有灯光的主路就行。", actionHint: "用main streets更具体", frequency: "common" },
              { textEn: "It's a decent area, nothing to worry about. Keep to the well-lit roads and you'll be fine.", textZh: "那片不错，不用担心。走亮的路就没问题。", actionHint: "安慰语气", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for the tip. Can you announce my stop so I don't miss it?",
            textZh: "谢谢提醒。能报一下我那站吗，怕我错过。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Of course. I'll give you a heads-up one stop before. Just sit near the front so you can hear me.",
            textZh: "当然。到前一站我会提前告诉你。坐前面点好听到我说话。",
            keyPhrases: [
              { en: "heads-up", zh: "提前提醒" },
              { en: "one stop before", zh: "前一站" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. I'll call out your stop. Just sit up front so I can get your attention.", textZh: "没问题。我会报你那站。坐前面点这样我好提醒你。", actionHint: "用call out更自然", frequency: "common" },
              { textEn: "Absolutely. I'll give you a shout the stop before yours. Stay near the front where I can see you.", textZh: "当然。到你前一站我喊你。坐前面我能看到你的地方。", actionHint: "用give a shout更随意", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "夜班长途巴士",
        titleEn: "Overnight Long-Distance Bus",
        description: "乘坐过夜长途巴士，处理座椅调节、行李安全等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, this is the overnight bus to Philadelphia, right? What time do we arrive?",
            textZh: "你好，这是去费城的夜班车对吧？几点到？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "That's right. We depart at 11 PM and arrive around 6 AM. It's about a seven-hour ride.",
            textZh: "没错。晚上11点出发，早上6点左右到。大概七个小时的车程。",
            keyPhrases: [
              { en: "depart", zh: "出发" },
              { en: "arrive around", zh: "大约到达" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, we leave at 11 PM and should get in around 6 in the morning. About seven hours total.", textZh: "对，晚上11点走，早上6点左右到。总共大约七个小时。", actionHint: "用get in替代arrive", frequency: "common" },
              { textEn: "That's right. Departure is 11 PM, arrival roughly 6 AM. It's a seven-hour ride.", textZh: "没错。出发11点，到达大约早上6点。七个小时的车程。", actionHint: "简洁平述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I recline my seat all the way? I'd like to sleep.",
            textZh: "座位可以完全放倒吗？我想睡觉。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, but please check with the person behind you first. The seats recline about 45 degrees.",
            textZh: "可以，但请先问一下后面的人。座位大约能倾斜45度。",
            keyPhrases: [
              { en: "recline", zh: "放倒/倾斜" },
              { en: "45 degrees", zh: "45度" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, just be courteous and ask the person behind you first. The seats go back about 45 degrees.", textZh: "可以，礼貌起见先问后面的人。座位能往后放大约45度。", actionHint: "用courteous强调礼貌", frequency: "common" },
              { textEn: "Go ahead, but give the passenger behind you a heads-up. They lean back pretty far.", textZh: "放吧，但先跟后面乘客说一声。能往后倾很多。", actionHint: "随意的提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it okay to leave my bag in the overhead compartment while I sleep?",
            textZh: "睡觉时把包放在上面的行李架可以吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's fine, but keep valuables with you. I'd suggest keeping your wallet and phone in your pockets.",
            textZh: "没问题，但贵重物品随身带着。建议把钱包和手机放口袋里。",
            keyPhrases: [
              { en: "valuables", zh: "贵重物品" },
              { en: "overhead compartment", zh: "上方行李架" },
            ],
            alternativeExpressions: [
              { textEn: "That's fine, but don't leave anything valuable up there. Keep your wallet and phone on you.", textZh: "没事，但别把值钱的东西放上面。钱包手机随身带。", actionHint: "更直接的叮嘱", frequency: "common" },
              { textEn: "Sure, the overhead bin is fine for bags. Just make sure your important stuff stays in your pockets.", textZh: "行李架放包没问题。重要的东西放口袋里就好。", actionHint: "用bin替代compartment", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will you dim the lights once we're on the highway?",
            textZh: "上了高速后会关灯吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, I'll turn off the main lights in about 20 minutes. There are individual reading lights if you need one.",
            textZh: "会的，大约20分钟后关大灯。如果需要，每个座位都有独立阅读灯。",
            keyPhrases: [
              { en: "dim the lights", zh: "关灯/调暗灯光" },
              { en: "reading lights", zh: "阅读灯" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I'll switch off the overhead lights in about 20 minutes. Each seat has its own reading light if you need it.", textZh: "会的，大约20分钟后关掉顶灯。每个座位有自己的阅读灯。", actionHint: "用overhead lights更具体", frequency: "common" },
              { textEn: "Once we're on the highway, I'll kill the main lights. There's a personal light above your seat you can use.", textZh: "上了高速我就关大灯。你座位上方有个人灯可以用。", actionHint: "用kill更口语", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will you make an announcement before we arrive? I don't want to sleep through my stop.",
            textZh: "到站前会广播吗？我怕睡过站。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Absolutely. I'll turn on the lights and announce the arrival about 15 minutes before we pull in.",
            textZh: "当然。到站前15分钟左右会开灯并广播通知。",
            keyPhrases: [
              { en: "announcement", zh: "广播通知" },
              { en: "pull in", zh: "进站" },
            ],
            alternativeExpressions: [
              { textEn: "For sure. I'll flip the lights on and make an announcement about 15 minutes out.", textZh: "当然。大约还有15分钟时我会开灯并广播。", actionHint: "用flip on更口语", frequency: "common" },
              { textEn: "Don't worry, I'll wake everyone up with a PA announcement before we arrive. Lights come on 15 minutes early.", textZh: "别担心，到站前我会用广播叫醒大家。提前15分钟开灯。", actionHint: "幽默安慰的语气", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 火车购票 ====================
  {
    id: "transport-train-ticket",
    category: "transport",
    titleZh: "购买火车票",
    titleEn: "Buying a Train Ticket",
    description: "在火车站柜台或自助机购买火车票，选择车次和座位类型",
    otherRole: "售票员",
    otherRoleIcon: "🚂",
    flows: [
      {
        id: "basic",
        titleZh: "柜台买票",
        titleEn: "Buying at the Counter",
        description: "在火车站售票窗口购票的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like a ticket to Washington, D.C., please. What's the next available train?",
            textZh: "你好，我要一张去华盛顿的票。最近一班是什么时候？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The next train departs at 2:15 PM. We also have an express at 3:00 PM that gets there an hour faster.",
            textZh: "下一班2:15出发。我们还有3:00的快车，快一个小时到。",
            keyPhrases: [
              { en: "departs at", zh: "出发时间" },
              { en: "express", zh: "快车" },
            ],
            alternativeExpressions: [
              { textEn: "Next one leaves at 2:15. There's also an express at 3 that'll get you there an hour sooner.", textZh: "下一班2:15走。3点还有快车，能早到一个小时。", actionHint: "用leaves替代departs", frequency: "common" },
              { textEn: "We have a 2:15 and a 3:00 express. The express saves you about an hour on the trip.", textZh: "有2:15和3:00快车两个选择。快车能省大约一小时。", actionHint: "列出选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the price difference between the regular and express?",
            textZh: "普通车和快车价格差多少？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The regular is $49 and the express is $79. The express has reserved seating and a café car.",
            textZh: "普通车49美元，快车79美元。快车有预留座位和餐车。",
            keyPhrases: [
              { en: "reserved seating", zh: "预留座位" },
              { en: "café car", zh: "餐车" },
            ],
            alternativeExpressions: [
              { textEn: "Regular is 49 bucks, express is 79. With the express you get an assigned seat and access to the dining car.", textZh: "普通车49块，快车79。快车有固定座位和餐车。", actionHint: "用bucks更口语", frequency: "common" },
              { textEn: "The standard train runs $49. The express is $79 but comes with reserved seats and a café on board.", textZh: "普通车49美元。快车79美元，但有预留座位和车上咖啡吧。", actionHint: "强调快车附加服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the express. Can I get a window seat?",
            textZh: "我要快车。能给我靠窗的座位吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Let me check... Yes, I have a window seat in car 4, seat 7A. Would you like that?",
            textZh: "我查一下……有的，4号车厢7A靠窗座位。要这个吗？",
            keyPhrases: [
              { en: "car 4", zh: "4号车厢" },
            ],
            alternativeExpressions: [
              { textEn: "One moment... I've got a window seat available — car 4, seat 7A. Shall I book that for you?", textZh: "稍等……有一个靠窗座位——4号车厢7A。帮你订吗？", actionHint: "更礼貌的询问", frequency: "common" },
              { textEn: "Let me pull that up... Yep, 7A in car 4 is open by the window. Want that one?", textZh: "我查查……4号车厢7A靠窗有空位。要这个？", actionHint: "用pull up更口语", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's perfect. Do you accept credit cards?",
            textZh: "好的，就这个。可以刷信用卡吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, we accept all major credit cards. Here's your ticket. Your train boards on Platform 5.",
            textZh: "可以，我们接受所有主要信用卡。这是你的票。你的火车在5号站台上车。",
            keyPhrases: [
              { en: "Platform 5", zh: "5号站台" },
              { en: "boards on", zh: "在...上车" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, credit cards are fine. Here's your ticket — head to Platform 5 for boarding.", textZh: "当然，刷卡没问题。这是你的票——去5号站台上车。", actionHint: "简洁告知", frequency: "common" },
              { textEn: "We take all major cards. You're all set — Platform 5. Boarding starts soon.", textZh: "各种主流卡都可以。搞定了——5号站台。马上开始检票。", actionHint: "用all set表示完成", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Which way is Platform 5? And can I grab a coffee before the train leaves?",
            textZh: "5号站台怎么走？上车前还来得及买杯咖啡吗？",
            culturalNote: "美国大火车站（如纽约Penn Station）里面有很多咖啡店和快餐店。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Go down the escalator and turn left. There's a Starbucks right by the platform. Boarding starts 10 minutes before departure, so you have time.",
            textZh: "坐扶梯下去左转。站台旁边就有一家星巴克。开车前10分钟开始检票，你有时间。",
            keyPhrases: [
              { en: "escalator", zh: "扶梯" },
              { en: "boarding starts", zh: "开始检票" },
            ],
            alternativeExpressions: [
              { textEn: "Take the escalator down and hang a left. There's a coffee shop right by the platform. You've got time — they don't board till 10 minutes before.", textZh: "坐扶梯下去左转。站台旁边有咖啡店。你有时间——开车前10分钟才检票。", actionHint: "用hang a left更随意", frequency: "common" },
              { textEn: "Head downstairs on the escalator, then left. Starbucks is right there. Boarding doesn't start for another 10 minutes, so no rush.", textZh: "坐扶梯下楼然后左转。星巴克就在那。还有10分钟才检票，不急。", actionHint: "用no rush安慰", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "自助购票机买票",
        titleEn: "Using the Ticket Machine",
        description: "使用自助售票机购票，寻求旁人帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you help me with this ticket machine? I can't figure out how to select my destination.",
            textZh: "不好意思，能帮我看看这个售票机吗？我不知道怎么选目的地。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure! First, tap 'Buy Ticket' on the screen, then type in your destination city. Where are you going?",
            textZh: "当然！先点屏幕上的'购票'，然后输入目的地城市。你要去哪？",
            keyPhrases: [
              { en: "tap", zh: "点击" },
              { en: "type in", zh: "输入" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! Hit the 'Buy Ticket' button first, then enter where you're going. What's your destination?", textZh: "当然！先按'购票'按钮，然后输入你要去的地方。去哪？", actionHint: "用hit替代tap", frequency: "common" },
              { textEn: "Happy to help! Press 'Buy Ticket' right here, then search for your city. Where are you heading?", textZh: "乐意帮忙！按这里的'购票'，然后搜索城市。你去哪？", actionHint: "热情帮助的语气", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm going to Baltimore. Should I choose 'one-way' or 'round trip'?",
            textZh: "我去巴尔的摩。选'单程'还是'往返'？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "If you're coming back today, round trip is usually cheaper. It saves you about 15 percent.",
            textZh: "如果你今天回来，往返票通常更划算。大概能省15%。",
            keyPhrases: [
              { en: "round trip", zh: "往返" },
              { en: "saves you", zh: "帮你省" },
            ],
            alternativeExpressions: [
              { textEn: "If you're making a same-day return, go with round trip. You'll save a few bucks that way.", textZh: "如果当天往返，选往返票。能省几块钱。", actionHint: "用save a few bucks更口语", frequency: "common" },
              { textEn: "Round trip is the better deal if you're coming back today. It's about 15 percent less than buying two singles.", textZh: "如果今天回来，往返更划算。比买两张单程便宜大约15%。", actionHint: "对比两种买法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. It's asking me about 'peak' and 'off-peak.' What's the difference?",
            textZh: "了解了。它在问我'高峰'和'非高峰'。有什么区别？",
            culturalNote: "美国火车分高峰（通勤时段）和非高峰票价，差价可达50%。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Peak is for rush hour trains — mornings and evenings on weekdays. Off-peak is everything else and it's cheaper.",
            textZh: "高峰是上下班时段的车——工作日早晚。非高峰是其他时间，更便宜。",
            keyPhrases: [
              { en: "rush hour", zh: "高峰时段" },
              { en: "off-peak", zh: "非高峰" },
            ],
            alternativeExpressions: [
              { textEn: "Peak means commuter hours — weekday mornings and evenings. Off-peak is all other times and costs less.", textZh: "高峰就是通勤时段——工作日的早晚。非高峰是其他时间，价格更低。", actionHint: "用commuter hours更精确", frequency: "common" },
              { textEn: "Peak covers rush hour on weekdays. Anything outside of that is off-peak, and it's a lot cheaper.", textZh: "高峰涵盖工作日的上下班时间。其他时段都是非高峰，便宜很多。", actionHint: "强调价差大", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with off-peak then. Can I pay with a debit card here?",
            textZh: "那我选非高峰的。这里可以用借记卡吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yes, it takes debit cards, credit cards, and even contactless payments like Apple Pay.",
            textZh: "可以，借记卡、信用卡都行，也支持Apple Pay这样的无接触支付。",
            keyPhrases: [
              { en: "contactless payments", zh: "无接触支付" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, debit and credit both work. You can even tap your phone if you have Apple Pay or Google Pay.", textZh: "行，借记卡和信用卡都可以。有Apple Pay或Google Pay的话也能刷手机。", actionHint: "补充Google Pay", frequency: "common" },
              { textEn: "It accepts pretty much everything — debit, credit, even contactless like your phone.", textZh: "基本什么都收——借记卡、信用卡，甚至手机无接触支付。", actionHint: "用pretty much everything概括", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it — it printed my ticket. Thank you so much for your help!",
            textZh: "好了——票打出来了。太感谢你帮忙了！",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You're welcome! Your platform number is on the ticket. Have a good trip!",
            textZh: "不客气！站台号在票上。旅途愉快！",
            keyPhrases: [
              { en: "platform number", zh: "站台号" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Check your ticket for the platform. Enjoy your trip!", textZh: "没事！看票上的站台号。旅途愉快！", actionHint: "简洁告别", frequency: "common" },
              { textEn: "Glad I could help! The platform info is printed on the ticket. Safe travels!", textZh: "很高兴能帮上忙！站台信息印在票上。一路平安！", actionHint: "用safe travels告别", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 火车座位 ====================
  {
    id: "transport-train-seat",
    category: "transport",
    titleZh: "火车上找座位",
    titleEn: "Finding Your Train Seat",
    description: "上火车后找座位、放行李和处理座位问题",
    otherRole: "列车员",
    otherRoleIcon: "🧑‍✈️",
    flows: [
      {
        id: "basic",
        titleZh: "找到自己的座位",
        titleEn: "Finding Your Assigned Seat",
        description: "上车后确认车厢和座位号",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for car 6. Am I going the right way?",
            textZh: "请问，我在找6号车厢。方向对吗？",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "You need to go the other way. Car 6 is towards the front of the train. Keep walking through cars 5 and 4.",
            textZh: "你要往另一个方向走。6号车厢在列车前部。穿过5号和4号车厢继续走。",
            keyPhrases: [
              { en: "the other way", zh: "另一个方向" },
              { en: "towards the front", zh: "往前部" },
            ],
            alternativeExpressions: [
              { textEn: "Actually, it's the opposite direction. Car 6 is up front — just keep walking through the next couple of cars.", textZh: "其实反了。6号车厢在前面——穿过前面几节车厢就到了。", actionHint: "用opposite direction更清晰", frequency: "common" },
              { textEn: "You're heading the wrong way. Turn around and walk towards the front of the train. Car 6 is past 4 and 5.", textZh: "你走反了。掉头往列车前部走。6号车厢在4号和5号后面。", actionHint: "直接指出走反了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. My ticket says seat 14B. Are the seat numbers posted above?",
            textZh: "谢谢。我的票上写着14B座。座位号标在上面吗？",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Yes, the seat numbers are on the overhead panel above each row. B seats are on the aisle.",
            textZh: "是的，座位号在每排上方的面板上。B座是靠过道的。",
            keyPhrases: [
              { en: "overhead panel", zh: "上方面板" },
              { en: "on the aisle", zh: "靠过道" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, look up — the numbers are right above each row. B is the aisle seat.", textZh: "是的，抬头看——号码就在每排上方。B是过道座。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "The seat numbers are displayed on the panels above the rows. Since you have a B seat, that's on the aisle side.", textZh: "座位号显示在每排上方的面板上。你的B座在过道那边。", actionHint: "详细解释B座位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where can I put my suitcase? It's too big for the overhead rack.",
            textZh: "我的行李箱放哪里？上面的行李架放不下。",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "There's a luggage area at the end of each car with racks for larger bags. Make sure to keep an eye on it.",
            textZh: "每节车厢尽头有行李区，可以放大件行李。注意看着点。",
            keyPhrases: [
              { en: "luggage area", zh: "行李区" },
              { en: "keep an eye on", zh: "看着/留意" },
            ],
            alternativeExpressions: [
              { textEn: "There are luggage racks at both ends of the car for bigger bags. Just don't leave it unattended.", textZh: "车厢两头都有行李架放大件。别放着不管就好。", actionHint: "用unattended更正式", frequency: "common" },
              { textEn: "Big bags go in the storage area at the end of the car. I'd check on it once in a while.", textZh: "大件放车厢尽头的存放区。隔一会儿看看。", actionHint: "建议偶尔查看", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a power outlet at my seat? I need to charge my phone.",
            textZh: "我座位有电源插座吗？我需要充手机。",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Yes, there should be one between the seats near the floor. If it's not working, try the one across the aisle.",
            textZh: "有的，座位之间靠近地面有一个。如果不好用，试试过道对面的。",
            keyPhrases: [
              { en: "between the seats", zh: "座位之间" },
              { en: "near the floor", zh: "靠近地面" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, check down by your feet — there's an outlet between the seats. If that one's dead, try the other side.", textZh: "看看脚下——座位之间有插座。如果那个没电，试对面的。", actionHint: "用dead形容没电", frequency: "common" },
              { textEn: "There should be one down low between the seats. The ones across the aisle usually work too.", textZh: "座位之间下面应该有一个。过道对面的通常也能用。", actionHint: "提供备选方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — is there a quiet car on this train?",
            textZh: "还有一个问题——这趟车有安静车厢吗？",
            culturalNote: "美国Amtrak火车通常有'quiet car'，不允许大声说话或打电话。",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Yes, car 4 is the quiet car. No phone calls or loud conversations allowed in there.",
            textZh: "有的，4号车厢是安静车厢。那里不允许打电话或大声交谈。",
            keyPhrases: [
              { en: "quiet car", zh: "安静车厢" },
              { en: "no phone calls", zh: "不允许打电话" },
            ],
            alternativeExpressions: [
              { textEn: "Car 4 is the designated quiet car. No talking on the phone or loud conversations in there.", textZh: "4号车厢是指定的安静车厢。里面不能打电话或大声聊天。", actionHint: "用designated更正式", frequency: "common" },
              { textEn: "Yep, car 4. It's the quiet zone — keep voices down, no calls, that kind of thing.", textZh: "对，4号车厢。安静区——说话要轻，不能打电话，就那些规矩。", actionHint: "随意列举规矩", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "座位纠纷",
        titleEn: "Seat Dispute",
        description: "发现有人坐了你的位置或需要换座位",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm sorry, but I think you might be in my seat. My ticket says 8A.",
            textZh: "不好意思，您好像坐了我的位置。我的票上写着8A。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Oh, let me check... I have 8A too. Wait, mine says car 7, not car 6. I'm in the wrong car! So sorry about that.",
            textZh: "哦，我看看……我也是8A。等等，我的写的是7号车厢，不是6号。我走错车厢了！真抱歉。",
            keyPhrases: [
              { en: "wrong car", zh: "走错车厢" },
              { en: "sorry about that", zh: "真抱歉" },
            ],
            alternativeExpressions: [
              { textEn: "Oh gosh, let me look... I have 8A as well. Wait — mine says car 7! I'm in the wrong coach. My bad!", textZh: "天哪，我看看……我也是8A。等等——我的是7号车厢！我走错了。不好意思！", actionHint: "用my bad更口语", frequency: "common" },
              { textEn: "Hmm, I've got 8A too... Oh wait, I'm supposed to be in car 7. Totally my mistake. Sorry about that!", textZh: "嗯，我也是8A……等等，我应该在7号车厢。完全是我的错。抱歉！", actionHint: "用totally my mistake强调", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No worries at all. It happens. The car numbers can be confusing.",
            textZh: "没关系的。很正常。车厢号确实容易搞混。",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Everything sorted here? I can check tickets if there's any confusion about seats.",
            textZh: "这边都解决了吗？如果座位有什么困惑，我可以查票。",
            keyPhrases: [
              { en: "everything sorted", zh: "都解决了" },
              { en: "check tickets", zh: "查票" },
            ],
            alternativeExpressions: [
              { textEn: "All good here? If there's still a mix-up with seats, I can verify your tickets.", textZh: "这边没事了吧？如果座位还有搞混，我可以核实你们的票。", actionHint: "用mix-up更口语", frequency: "common" },
              { textEn: "Is everything worked out? I'm happy to check tickets if you need me to.", textZh: "都搞定了吗？需要的话我可以查票。", actionHint: "用worked out替代sorted", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "All good now, thanks. Actually, would it be possible to switch to a window seat if there are any available?",
            textZh: "都好了，谢谢。其实，如果有空位的话，能换到靠窗的座位吗？",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Let me see what's open. There's a window seat in row 12. Would you like to move there?",
            textZh: "我看看有什么空位。12排有个靠窗的。你要搬过去吗？",
            keyPhrases: [
              { en: "what's open", zh: "有什么空位" },
              { en: "move there", zh: "搬过去" },
            ],
            alternativeExpressions: [
              { textEn: "Let me check for you. Row 12 has a window seat available — would you like to switch?", textZh: "我帮你看看。12排有靠窗的空位——要换过去吗？", actionHint: "用switch替代move", frequency: "common" },
              { textEn: "I'll see what's free. There's a spot by the window in row 12. Want me to move you over?", textZh: "我看看哪有空。12排有个靠窗的位置。要帮你换过去吗？", actionHint: "用spot更随意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. Is it okay if I move my things now?",
            textZh: "太好了。我现在可以搬东西过去吗？",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "Go ahead. Just make sure you take everything with you. I'll update your seat assignment.",
            textZh: "去吧。确保把东西都带上。我来更新你的座位信息。",
            keyPhrases: [
              { en: "go ahead", zh: "去吧" },
              { en: "seat assignment", zh: "座位分配" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, go right ahead. Just grab all your belongings. I'll update the system with your new seat.", textZh: "当然，去吧。把东西都拿上。我在系统里更新你的新座位。", actionHint: "提到系统更新", frequency: "common" },
              { textEn: "No problem, move whenever you're ready. Don't forget anything. I'll note the change on my end.", textZh: "没问题，准备好了就搬。别忘了东西。我这边记录一下。", actionHint: "用note the change更自然", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for the help. I appreciate it.",
            textZh: "谢谢帮忙。很感激。",
          },
          {
            speaker: "them",
            role: "列车员",
            textEn: "My pleasure. If you need anything else during the trip, just press the call button above your seat.",
            textZh: "不客气。旅途中如果还需要什么，按座位上方的呼叫按钮就行。",
            keyPhrases: [
              { en: "call button", zh: "呼叫按钮" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help. If you need anything on the trip, just hit the call button above you.", textZh: "乐意帮忙。旅途中需要什么，按上面的呼叫按钮就行。", actionHint: "用hit替代press", frequency: "common" },
              { textEn: "Anytime. I'll be walking through the car regularly, or you can press the attendant button if you need me.", textZh: "不客气。我会定时巡车，需要我的话也可以按服务按钮。", actionHint: "说明巡车习惯", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 火车延误 ====================
  {
    id: "transport-train-delay",
    category: "transport",
    titleZh: "火车延误",
    titleEn: "Train Delay",
    description: "火车延误或取消时，询问情况、改签或申请退款",
    otherRole: "车站工作人员",
    otherRoleIcon: "🚉",
    flows: [
      {
        id: "basic",
        titleZh: "了解延误情况",
        titleEn: "Inquiring About Delay",
        description: "火车延误后向工作人员了解情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, the departure board says my train is delayed. Do you know how long the delay will be?",
            textZh: "请问，出发屏幕显示我的火车延误了。知道要延误多久吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Which train are you on? Let me check the system for the latest update.",
            textZh: "您坐哪趟车？我查一下系统里的最新信息。",
            keyPhrases: [
              { en: "departure board", zh: "出发屏幕" },
              { en: "latest update", zh: "最新信息" },
            ],
            alternativeExpressions: [
              { textEn: "What train are you booked on? Let me pull up the latest info for you.", textZh: "你订的哪趟车？我帮你查最新信息。", actionHint: "用pull up更口语", frequency: "common" },
              { textEn: "Which service are you taking? I'll check what's going on in the system.", textZh: "你坐的哪趟？我查查系统里什么情况。", actionHint: "用service替代train", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The 3:30 express to Chicago. It was supposed to leave 20 minutes ago.",
            textZh: "3:30去芝加哥的快车。本来20分钟前就该走了。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There's a signal problem on the tracks. Current estimate is a 45-minute delay. We'll make announcements as we get updates.",
            textZh: "轨道上有信号故障。目前预计延误45分钟。有更新的话会广播通知。",
            keyPhrases: [
              { en: "signal problem", zh: "信号故障" },
              { en: "current estimate", zh: "目前预计" },
              { en: "announcements", zh: "广播通知" },
            ],
            alternativeExpressions: [
              { textEn: "There's a signaling issue on the line. We're looking at about a 45-minute delay. We'll keep you posted with announcements.", textZh: "线路上有信号问题。大约延误45分钟。我们会通过广播随时更新。", actionHint: "用keep you posted", frequency: "common" },
              { textEn: "Signals are down on the tracks. Right now they're saying 45 minutes. Stay tuned for updates over the PA.", textZh: "轨道信号出了故障。现在说是45分钟。注意听广播更新。", actionHint: "用stay tuned更随意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I miss my connecting train if this one is 45 minutes late?",
            textZh: "如果晚了45分钟，我的转乘火车会赶不上吗？",
            culturalNote: "如果因为铁路公司原因错过换乘，通常可以免费改签下一班。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "What's your connection? Let me see if we can rebook you on a later train at no extra charge.",
            textZh: "你转乘哪趟车？我看看能不能免费帮你改签到后面的班次。",
            keyPhrases: [
              { en: "connection", zh: "转乘" },
              { en: "rebook", zh: "改签" },
              { en: "no extra charge", zh: "不加钱" },
            ],
            alternativeExpressions: [
              { textEn: "What's your connecting train? I can try to switch you to a later one at no cost.", textZh: "你接哪趟车？我可以尝试免费帮你换到后面的车。", actionHint: "用switch替代rebook", frequency: "common" },
              { textEn: "Tell me about your connection and I'll see if I can get you on another train for free.", textZh: "告诉我你的转乘信息，我看看能不能免费安排你上另一趟。", actionHint: "更热心的语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a connecting train to Milwaukee at 8 PM. If I arrive late, I'll miss it.",
            textZh: "我晚上8点有一趟去密尔沃基的转乘车。到晚了就赶不上了。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I've rebooked you on the 9:30 PM to Milwaukee. No extra cost. Here's your updated ticket.",
            textZh: "我已经帮你改签到晚上9:30去密尔沃基的车了。不加钱。这是你更新的票。",
            keyPhrases: [
              { en: "rebooked", zh: "已改签" },
              { en: "updated ticket", zh: "更新的票" },
            ],
            alternativeExpressions: [
              { textEn: "All done — I've switched you to the 9:30 PM to Milwaukee. No extra charge. Here's your new ticket.", textZh: "搞定了——帮你换到晚上9:30去密尔沃基的车。不加钱。这是新票。", actionHint: "用all done开头", frequency: "common" },
              { textEn: "You're all set on the 9:30 to Milwaukee now. No additional fee. I've printed your updated ticket.", textZh: "你现在改到9:30去密尔沃基了。不用额外费用。更新的票打好了。", actionHint: "用all set确认", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there somewhere I can sit and wait comfortably?",
            textZh: "谢谢。有什么舒服的地方可以坐着等吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The waiting lounge is upstairs. There's also a food court on the ground floor if you're hungry.",
            textZh: "候车室在楼上。如果饿了，一楼还有美食广场。",
            keyPhrases: [
              { en: "waiting lounge", zh: "候车室" },
              { en: "food court", zh: "美食广场" },
            ],
            alternativeExpressions: [
              { textEn: "The lounge is upstairs — nice and comfortable. There's also food downstairs if you're hungry.", textZh: "休息室在楼上——挺舒服的。饿了的话楼下有吃的。", actionHint: "补充舒适描述", frequency: "common" },
              { textEn: "Head upstairs to the passenger lounge. If you need a bite, there's a food court on the ground level.", textZh: "上楼去候客厅。想吃点东西的话，一楼有美食广场。", actionHint: "用bite更口语", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "申请退款或赔偿",
        titleEn: "Requesting a Refund",
        description: "火车严重延误或取消后申请退款或赔偿",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My train was cancelled and I've been waiting for three hours. Can I get a refund?",
            textZh: "我的火车取消了，我已经等了三个小时了。能退款吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I'm sorry for the inconvenience. Yes, you're eligible for a full refund since the train was cancelled. May I see your ticket?",
            textZh: "很抱歉给您带来不便。可以的，火车取消的话您有资格获得全额退款。能看一下您的票吗？",
            keyPhrases: [
              { en: "eligible for", zh: "有资格获得" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              { textEn: "I'm really sorry about that. Since the train was cancelled, you can get a full refund. Can I see your ticket?", textZh: "真的很抱歉。既然火车取消了，可以全额退款。能看看你的票吗？", actionHint: "更直接的道歉", frequency: "common" },
              { textEn: "Sorry for the trouble. A cancelled service means you're entitled to a complete refund. May I have your ticket?", textZh: "给您添麻烦了。取消的班次可以获得全额退款。能给我看看票吗？", actionHint: "用entitled更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my ticket. I paid with a credit card. Will the refund go back to the same card?",
            textZh: "这是我的票。我用信用卡付的。退款会退回同一张卡吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, the refund will be processed back to your credit card within 5 to 7 business days.",
            textZh: "是的，退款会在5到7个工作日内退回您的信用卡。",
            keyPhrases: [
              { en: "processed", zh: "处理" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, it'll go back to the same card. Give it about 5 to 7 business days to show up.", textZh: "会的，退到同一张卡。大概5到7个工作日到账。", actionHint: "用show up更口语", frequency: "common" },
              { textEn: "That's right. The refund hits your card within a week — 5 to 7 working days usually.", textZh: "没错。退款大约一周内到卡——通常5到7个工作日。", actionHint: "用hits更随意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there any compensation for the delay, like a voucher or credit for a future trip?",
            textZh: "延误有什么补偿吗？比如代金券或下次乘车的积分？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "For cancellations, we offer a $25 travel credit on top of the refund. I can add it to your account.",
            textZh: "对于取消的情况，除了退款外还提供25美元的旅行积分。我可以加到您的账户里。",
            keyPhrases: [
              { en: "travel credit", zh: "旅行积分" },
              { en: "on top of", zh: "除...之外" },
            ],
            alternativeExpressions: [
              { textEn: "Since your train was cancelled, you also get a $25 credit for future travel, in addition to the refund. Want me to add it?", textZh: "既然火车取消了，除了退款还有25美元的未来乘车积分。要加上吗？", actionHint: "先说原因再说补偿", frequency: "common" },
              { textEn: "We're offering a $25 voucher on top of the refund for the inconvenience. I can apply it to your account right now.", textZh: "因为不便，退款之外还提供25美元代金券。我现在就可以加到你账户。", actionHint: "用voucher替代credit", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please add it. Also, is there another train I can take today to get to Chicago?",
            textZh: "好的，请加上。另外，今天还有别的车去芝加哥吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "The next available train is at 6:45 PM. I can book you on that one with your refunded ticket value. No additional charge.",
            textZh: "下一趟是6:45 PM的。我可以用退款的金额帮您订这趟，不用额外付费。",
            keyPhrases: [
              { en: "next available", zh: "下一趟可用的" },
              { en: "no additional charge", zh: "不用额外付费" },
            ],
            alternativeExpressions: [
              { textEn: "There's a 6:45 PM train. I can book you on that using your refund, so it won't cost you anything extra.", textZh: "有6:45的车。我可以用你的退款帮你订，不用再花钱。", actionHint: "强调不用额外花钱", frequency: "common" },
              { textEn: "The next one is at 6:45. I'll put you on that and apply your refund — no out-of-pocket cost.", textZh: "下一趟6:45。我把你安排上去用退款抵扣——不用自费。", actionHint: "用out-of-pocket更地道", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Please book it. Can I get a confirmation email?",
            textZh: "可以。请帮我订。能发一封确认邮件吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Done. I've sent a confirmation to your email. You'll board on Platform 3. Again, I'm sorry for the inconvenience.",
            textZh: "好了。确认信已发到您的邮箱。在3号站台上车。再次为不便道歉。",
            alternativeExpressions: [
              { textEn: "All set. Confirmation is on its way to your email. You'll board at Platform 3. Sorry again for the hassle.", textZh: "搞定了。确认邮件已发出。在3号站台上车。再次抱歉给你添麻烦。", actionHint: "用hassle更口语", frequency: "common" },
              { textEn: "You're booked. I've emailed the confirmation. Head to Platform 3 when it's time. Apologies once again.", textZh: "订好了。确认信发到你邮箱了。到时候去3号站台。再次道歉。", actionHint: "简洁告知流程", frequency: "common" },
            ],
            keyPhrases: [
              { en: "confirmation", zh: "确认信" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 地铁导航 ====================
  {
    id: "transport-subway-navigate",
    tags: ["subway", "地铁", "metro", "underground"],
    category: "transport",
    titleZh: "地铁导航",
    titleEn: "Navigating the Subway",
    description: "第一次乘坐地铁时，买票、看线路图和找到正确方向",
    otherRole: "地铁工作人员",
    otherRoleIcon: "🚇",
    flows: [
      {
        id: "basic",
        titleZh: "买票乘地铁",
        titleEn: "Buying a Subway Ticket",
        description: "在地铁站购票并找到正确线路",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm trying to get to Times Square. Which line do I take?",
            textZh: "你好，我要去时代广场。坐哪条线？",
            casualVersion: "Hey, tryna get to Times Square. What line should I take?",
            commonMistake: {
              wrong: "How to go to Times Square?",
              correct: "How do I get to Times Square?",
              explanation: "直接翻译“怎么去”听起来不自然，地道的问法是How do I get to...",
            },
            formalityVariants: {
              casual: "Hey, trying to get to Times Square. Which line?",
              standard: "Hi, I'm trying to get to Times Square. Which line do I take?",
              formal: "Good morning/afternoon. Could you please advise me on the most appropriate subway line to reach Times Square?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Take the 1 train heading downtown. Times Square is about four stops from here.",
            textZh: "坐1号线往市中心方向。时代广场从这里大概四站。",
            keyPhrases: [
              { en: "heading downtown", zh: "往市中心方向" },
              { en: "four stops", zh: "四站" },
            ],
            alternativeExpressions: [
              { textEn: "Hop on the 1 going downtown. Times Square is just four stops away.", textZh: "坐1号线市中心方向。时代广场就四站。", actionHint: "用hop on更随意", frequency: "common" },
              { textEn: "You want the 1 train, downtown direction. It's a quick ride — only four stops.", textZh: "坐1号线，下城方向。很快——只有四站。", actionHint: "强调距离近", frequency: "common" },
            ],
            casualVersion: "Grab the 1 train downtown. Times Square's like four stops away.",
            formalityVariants: {
              casual: "Take the 1 train downtown. Times Square's four stops.",
              standard: "Take the 1 train heading downtown. Times Square is about four stops from here.",
              formal: "You should board the 1 train traveling in the downtown direction. Times Square is approximately four stations from this location.",
            },
          },
          {
            speaker: "you",
            textEn: "How do I buy a ticket? I don't have a metro card.",
            textZh: "怎么买票？我没有地铁卡。",
            culturalNote: "纽约已推出OMNY感应支付，可直接用手机或信用卡刷闸机。",
            casualVersion: "How do I get a ticket? No MetroCard.",
            commonMistake: {
              wrong: "How to buy a ticket?",
              correct: "How do I buy a ticket?",
              explanation: "中文的“怎么买”直接翻译过来缺少助动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "How do I get a ticket? Don't have a MetroCard.",
              standard: "How do I buy a ticket? I don't have a metro card.",
              formal: "Could you please inform me of the procedure for purchasing a ticket, as I do not possess a MetroCard?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You can buy a MetroCard at the machines over there, or just tap your contactless credit card at the turnstile.",
            textZh: "可以在那边的机器买MetroCard，或者直接用感应信用卡在闸机上刷。",
            keyPhrases: [
              { en: "MetroCard", zh: "地铁卡" },
              { en: "turnstile", zh: "闸机" },
              { en: "contactless", zh: "无接触的" },
            ],
            alternativeExpressions: [
              { textEn: "There are vending machines over there for a MetroCard. Or just tap your credit card at the gate — that works too.", textZh: "那边有自动售卡机买MetroCard。或者直接在闸机刷信用卡也行。", actionHint: "用vending machines更清楚", frequency: "common" },
              { textEn: "Easiest way is to tap a contactless card right at the turnstile. Or grab a MetroCard from the machine over there.", textZh: "最简单的方法是在闸机直接刷感应卡。或者去那边机器买张MetroCard。", actionHint: "推荐最简单方式", frequency: "occasional" },
            ],
            casualVersion: "Can get a MetroCard at those machines, or just tap your credit card at the turnstile.",
            culturalNote: "纽约地铁现在很流行用信用卡直接刷闸机，非常方便。",
            formalityVariants: {
              casual: "You can get a MetroCard at the machines, or just tap your credit card.",
              standard: "You can buy a MetroCard at the machines over there, or just tap your contactless credit card at the turnstile.",
              formal: "You have the option to purchase a MetroCard from the vending machines located there, or alternatively, you may simply tap your contactless credit card directly at the turnstile.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll use my credit card. How much is a single ride?",
            textZh: "我用信用卡好了。单程多少钱？",
            casualVersion: "Credit card it is. How much for one ride?",
            commonMistake: {
              wrong: "How much one ride?",
              correct: "How much is a single ride?",
              explanation: "缺少动词“is”，听起来不完整，地道的问法需要动词。",
            },
            formalityVariants: {
              casual: "I'll use my card. How much for one ride?",
              standard: "I'll use my credit card. How much is a single ride?",
              formal: "I shall utilize my credit card. What is the fare for a single journey?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "It's $2.90 per ride. You can transfer for free between subway lines within two hours.",
            textZh: "每次2.90美元。两小时内地铁线之间免费换乘。",
            keyPhrases: [
              { en: "per ride", zh: "每次" },
              { en: "transfer for free", zh: "免费换乘" },
            ],
            alternativeExpressions: [
              { textEn: "A single ride is $2.90. Transfers between lines are free within a two-hour window.", textZh: "单次2.90美元。两小时内换乘地铁线免费。", actionHint: "用single ride更清晰", frequency: "common" },
              { textEn: "It's 2.90 a ride. You can switch between subway lines for free as long as it's within two hours.", textZh: "一趟2.90。两小时内换线免费。", actionHint: "用switch更口语", frequency: "common" },
            ],
            casualVersion: "It's $2.90 a ride. Free transfers between lines for two hours.",
            formalityVariants: {
              casual: "It's $2.90 a ride. Free transfers for two hours.",
              standard: "It's $2.90 per ride. You can transfer for free between subway lines within two hours.",
              formal: "The fare is $2.90 per journey. Complimentary transfers between subway lines are permitted within a two-hour period.",
            },
          },
          {
            speaker: "you",
            textEn: "Which platform do I go to? Uptown or downtown?",
            textZh: "我去哪个站台？上城方向还是下城方向？",
            casualVersion: "Which platform? Uptown or downtown?",
            formalityVariants: {
              casual: "Which platform? Uptown or downtown?",
              standard: "Which platform do I go to? Uptown or downtown?",
              formal: "Could you please direct me to the correct platform? Specifically, should I proceed to the uptown or downtown platform?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Downtown. Go through the turnstile and follow the signs for 'Downtown & Brooklyn.' The platform is down the stairs on the left.",
            textZh: "下城方向。过闸机后跟着'Downtown & Brooklyn'的指示牌走。站台在左边楼梯下。",
            keyPhrases: [
              { en: "follow the signs", zh: "跟着指示牌" },
              { en: "down the stairs", zh: "楼梯下" },
            ],
            alternativeExpressions: [
              { textEn: "Go downtown. Once you're past the turnstile, look for signs saying 'Downtown & Brooklyn.' Head down the stairs on your left.", textZh: "下城方向。过闸机后找'Downtown & Brooklyn'标识。走左边楼梯下去。", actionHint: "用look for替代follow", frequency: "common" },
              { textEn: "You need the downtown side. After the gate, there'll be signs pointing to 'Downtown & Brooklyn' — stairs are on your left.", textZh: "你要下城那边。过了闸机会有指向'Downtown & Brooklyn'的牌子——楼梯在左手边。", actionHint: "分步指引", frequency: "occasional" },
            ],
            casualVersion: "Downtown. Just go through the turnstile, follow signs for 'Downtown & Brooklyn.' Platform's down those stairs on the left.",
            formalityVariants: {
              casual: "Downtown. Through the turnstile, follow 'Downtown & Brooklyn' signs. Platform's down the stairs, left.",
              standard: "Downtown. Go through the turnstile and follow the signs for 'Downtown & Brooklyn.' The platform is down the stairs on the left.",
              formal: "Proceed downtown. After passing through the turnstile, follow the signage indicating 'Downtown & Brooklyn.' The platform is located at the bottom of the stairs to your left.",
            },
          },
          {
            speaker: "you",
            textEn: "How will I know when to get off?",
            textZh: "我怎么知道什么时候该下车？",
            casualVersion: "How'll I know when to get off?",
            commonMistake: {
              wrong: "How I know when get off?",
              correct: "How will I know when to get off?",
              explanation: "中文的“我怎么知道”直接翻译缺少助动词“will”和不定式“to”，听起来不自然。",
            },
            formalityVariants: {
              casual: "How'll I know when to get off?",
              standard: "How will I know when to get off?",
              formal: "Could you please inform me how I will be able to ascertain my destination stop?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "There are announcements and a digital display inside the train. It'll say 'Times Square - 42nd Street.' You can't miss it.",
            textZh: "车内有广播和电子显示屏。会显示'Times Square - 42nd Street'。不会错过的。",
            keyPhrases: [
              { en: "digital display", zh: "电子显示屏" },
              { en: "can't miss it", zh: "不会错过" },
            ],
            alternativeExpressions: [
              { textEn: "They announce each stop and there's a screen showing the station name. When you hear 'Times Square,' that's your stop.", textZh: "每站都会报站，还有屏幕显示站名。听到'Times Square'就是你的站。", actionHint: "强调听到报站", frequency: "common" },
              { textEn: "There's a display on the train and audio announcements. Look for 'Times Square - 42nd St' — it's a big stop, hard to miss.", textZh: "车上有屏幕和语音播报。找'Times Square - 42nd St'——大站，不会错过的。", actionHint: "强调是大站", frequency: "occasional" },
            ],
            casualVersion: "Announcements and a screen inside the train. It'll say 'Times Square - 42nd Street.' Can't miss it.",
            formalityVariants: {
              casual: "There's announcements and a screen inside. It'll show 'Times Square - 42nd Street.' You can't miss it.",
              standard: "There are announcements and a digital display inside the train. It'll say 'Times Square - 42nd Street.' You can't miss it.",
              formal: "Within the train, there are both audio announcements and a digital display. The station will be clearly indicated as 'Times Square - 42nd Street,' making it unmistakable.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "看线路图规划路线",
        titleEn: "Reading the Subway Map",
        description: "看复杂的地铁线路图，找到最佳路线",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking at the map but I can't figure out the fastest way to get to Brooklyn Bridge.",
            textZh: "不好意思，我看了地图但搞不清去布鲁克林大桥最快怎么走。",
            casualVersion: "Hey, lookin' at this map, but can't figure out the quickest way to Brooklyn Bridge.",
            commonMistake: {
              wrong: "I can't figure out how to go to Brooklyn Bridge fastest.",
              correct: "I can't figure out the fastest way to get to Brooklyn Bridge.",
              explanation: "中文直译的语序不自然，用“the fastest way to get to”更符合英语习惯。",
            },
            formalityVariants: {
              casual: "Excuse me, lookin' at the map, but can't figure out the fastest way to Brooklyn Bridge.",
              standard: "Excuse me, I'm looking at the map but I can't figure out the fastest way to get to Brooklyn Bridge.",
              formal: "Pardon me, I am currently examining the map, but I am unable to determine the most expeditious route to the Brooklyn Bridge.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Let me see where we are... Okay, from here, take the 4 or 5 train downtown. It's a direct shot — no transfers needed.",
            textZh: "我看看我们在哪……好的，从这里坐4号或5号线往市中心方向。直达——不用换乘。",
            keyPhrases: [
              { en: "direct shot", zh: "直达" },
              { en: "no transfers", zh: "不用换乘" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, let me see... From here, grab the 4 or 5 downtown. It goes straight there — no switching trains.", textZh: "好，我看看……从这里坐4号或5号往市中心。直达——不用换车。", actionHint: "用grab更随意", frequency: "common" },
              { textEn: "We're right here... Take the 4 or 5 line going downtown. It's a straight shot to Brooklyn Bridge, no transfers.", textZh: "我们在这……坐4或5号线市中心方向。到布鲁克林大桥直达，不换乘。", actionHint: "指着地图说明", frequency: "occasional" },
            ],
            casualVersion: "Lemme check... Okay, from here, hop on the 4 or 5 downtown. Straight shot—no transfers.",
            formalityVariants: {
              casual: "Lemme see... Okay, from here, grab the 4 or 5 downtown. Direct, no transfers.",
              standard: "Let me see where we are... Okay, from here, take the 4 or 5 train downtown. It's a direct shot — no transfers needed.",
              formal: "Allow me to ascertain our current location. Very well, from this point, you may board either the 4 or 5 train heading downtown. This will be a direct route, eliminating the need for any transfers.",
            },
          },
          {
            speaker: "you",
            textEn: "What do the different colors on the map mean? I see blue, red, and green lines.",
            textZh: "地图上不同的颜色代表什么？我看到蓝色、红色和绿色的线。",
            casualVersion: "What're these different colors mean on the map? Blue, red, green lines?",
            commonMistake: {
              wrong: "What different colors mean?",
              correct: "What do the different colors mean?",
              explanation: "疑问句缺少助动词“do”，听起来不正确。",
            },
            formalityVariants: {
              casual: "What do the different map colors mean? Blue, red, green lines?",
              standard: "What do the different colors on the map mean? I see blue, red, and green lines.",
              formal: "Could you please elucidate the significance of the various colors depicted on this map? I observe blue, red, and green lines.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Each color represents a different route. Trains on the same colored line usually share tracks. The number or letter tells you the specific train.",
            textZh: "每种颜色代表不同的路线。同色线路的列车通常共用轨道。数字或字母是具体哪趟车。",
            keyPhrases: [
              { en: "represents", zh: "代表" },
              { en: "share tracks", zh: "共用轨道" },
            ],
            alternativeExpressions: [
              { textEn: "The colors show different routes. Trains with the same color run on the same tracks. The number or letter is the specific train.", textZh: "颜色代表不同路线。同色的车跑同一条轨道。数字或字母是具体的车次。", actionHint: "用show替代represent", frequency: "common" },
              { textEn: "Think of each color as a highway and the numbers and letters as different buses on that highway. Same color, same track.", textZh: "把每种颜色想象成一条高速公路，数字和字母是上面跑的不同公交。同色同轨。", actionHint: "用比喻解释", frequency: "occasional" },
            ],
            casualVersion: "Each color's a different route. Same-colored lines usually share tracks. Number or letter tells you the specific train.",
            formalityVariants: {
              casual: "Colors are different routes. Same-colored lines usually share tracks. Number/letter is the specific train.",
              standard: "Each color represents a different route. Trains on the same colored line usually share tracks. The number or letter tells you the specific train.",
              formal: "Each distinct color corresponds to a separate route. Trains operating on lines of the same color typically utilize shared tracks. The numerical or alphabetical identifier specifies the particular train service.",
            },
          },
          {
            speaker: "you",
            textEn: "I see some stops are shown as white circles and others as filled circles. What's the difference?",
            textZh: "有些站是空心圆，有些是实心圆。有什么区别？",
            casualVersion: "Some stops are white circles, others are filled. What's the diff?",
            commonMistake: {
              wrong: "What's difference?",
              correct: "What's the difference?",
              explanation: "在询问“区别”时，通常需要加上定冠词“the”来指代特定的区别。",
            },
            formalityVariants: {
              casual: "Some stops are white, some are filled. What's the diff?",
              standard: "I see some stops are shown as white circles and others as filled circles. What's the difference?",
              formal: "I have observed that certain stops are indicated by white circles, while others are represented by filled circles. Could you please explain the distinction between these two symbols?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Filled circles are local stops — every train stops there. White circles mean only express trains stop there.",
            textZh: "实心圆是本地站——每趟车都停。空心圆表示只有快车停。",
            keyPhrases: [
              { en: "local stops", zh: "本地站/普通站" },
              { en: "express trains", zh: "快车" },
            ],
            alternativeExpressions: [
              { textEn: "The solid dots are local stops where all trains stop. The hollow ones are express-only — only certain trains stop there.", textZh: "实心点是普通站，所有车都停。空心的是快车专停——只有特定车次停。", actionHint: "用solid dots和hollow解释", frequency: "common" },
              { textEn: "If it's filled in, every train makes that stop. If it's open, only express trains stop there.", textZh: "填充的站每趟车都停。空心的只有快车停。", actionHint: "简化对比", frequency: "common" },
            ],
            casualVersion: "Filled circles are local stops—every train stops. White circles mean only express trains stop.",
            formalityVariants: {
              casual: "Filled circles are local stops—all trains stop. White circles? Only express trains stop.",
              standard: "Filled circles are local stops — every train stops there. White circles mean only express trains stop there.",
              formal: "The filled circles denote local stops, signifying that all trains will halt at these stations. Conversely, white circles indicate express stops, where only express train services will make a stop.",
            },
          },
          {
            speaker: "you",
            textEn: "So should I take the local or the express to Brooklyn Bridge?",
            textZh: "那我去布鲁克林大桥应该坐普通车还是快车？",
            culturalNote: "纽约地铁的express和local区别很大。Express跳过很多站，快但可能坐过站。",
            casualVersion: "So, local or express to Brooklyn Bridge?",
            formalityVariants: {
              casual: "Local or express to Brooklyn Bridge?",
              standard: "So should I take the local or the express to Brooklyn Bridge?",
              formal: "Therefore, would it be more advisable for me to utilize the local or the express service to reach the Brooklyn Bridge?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Either works, but the express will get you there faster. Just make sure you're on the downtown platform, not uptown.",
            textZh: "都行，但快车到得更快。确保你在市中心方向的站台，别坐反了。",
            keyPhrases: [
              { en: "either works", zh: "都行" },
              { en: "make sure", zh: "确保" },
            ],
            alternativeExpressions: [
              { textEn: "Both will get you there, but the express is quicker. Just double-check you're on the downtown platform.", textZh: "都能到，但快车更快。检查一下确认你在下城方向的站台。", actionHint: "用double-check更口语", frequency: "common" },
              { textEn: "You can take either, but I'd go with the express to save time. Make sure you're not on the uptown side.", textZh: "两个都行，但我建议坐快车省时间。别站错到上城那边。", actionHint: "给建议", frequency: "occasional" },
            ],
            casualVersion: "Either's fine, but express is quicker. Just make sure you're on the downtown platform, not uptown.",
            formalityVariants: {
              casual: "Either's fine, express is faster. Just make sure it's the downtown platform, not uptown.",
              standard: "Either works, but the express will get you there faster. Just make sure you're on the downtown platform, not uptown.",
              formal: "Both options are viable, however, the express service will provide a more expeditious journey. Please ensure you are situated on the downtown platform, rather than the uptown platform.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! One more thing — does the subway run 24 hours?",
            textZh: "谢谢！再问一下——地铁24小时运行吗？",
            casualVersion: "Thanks! One more thing, does the subway run 24/7?",
            commonMistake: {
              wrong: "Subway 24 hours?",
              correct: "Does the subway run 24 hours?",
              explanation: "中文的“地铁24小时吗”直接翻译缺少助动词“does”和动词“run”，听起来不自然。",
            },
            formalityVariants: {
              casual: "Thanks! Does the subway run 24/7?",
              standard: "Thanks! One more thing — does the subway run 24 hours?",
              formal: "Thank you. Additionally, I have one more query: does the subway operate on a 24-hour schedule?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "In New York, yes! But late at night, some lines run less frequently — maybe every 15 to 20 minutes.",
            textZh: "在纽约，是的！但深夜有些线路班次少一些——大概15到20分钟一班。",
            keyPhrases: [
              { en: "runs 24 hours", zh: "24小时运行" },
              { en: "less frequently", zh: "班次少" },
            ],
            alternativeExpressions: [
              { textEn: "Here in New York, absolutely. But late at night you might wait a bit longer — trains come every 15 to 20 minutes.", textZh: "在纽约当然。不过深夜可能要多等一会——大概15到20分钟一班。", actionHint: "用might wait更实际", frequency: "common" },
              { textEn: "Yep, the NYC subway never closes! Service is just a little slower after midnight — expect 15 to 20 minutes between trains.", textZh: "对，纽约地铁不关门！就是过了午夜慢一点——两班之间大概15到20分钟。", actionHint: "用never closes强调", frequency: "common" },
            ],
            casualVersion: "In New York, yeah! But late night, some lines are less frequent—like every 15, 20 minutes.",
            culturalNote: "纽约地铁是少数24小时运行的系统之一，很特别。",
            formalityVariants: {
              casual: "In New York, yep! But late at night, some lines are less frequent—maybe every 15-20 min.",
              standard: "In New York, yes! But late at night, some lines run less frequently — maybe every 15 to 20 minutes.",
              formal: "In New York City, it indeed operates continuously. However, during late-night hours, the frequency of service on certain lines may diminish, typically to approximately every 15 to 20 minutes.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 地铁换乘 ====================
  {
    id: "transport-subway-transfer",
    tags: ["subway", "地铁", "metro", "underground"],
    category: "transport",
    titleZh: "地铁换乘",
    titleEn: "Subway Transfer",
    description: "在地铁站换乘不同线路，找对方向和站台",
    otherRole: "地铁乘客",
    otherRoleIcon: "🚇",
    flows: [
      {
        id: "basic",
        titleZh: "基本换乘",
        titleEn: "Basic Transfer",
        description: "在地铁站内从一条线换乘另一条线",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need to transfer to the Blue Line. Is it this way?",
            textZh: "请问，我要换乘蓝线。是这边走吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "The Blue Line? Follow the signs that say 'Transfer' down the corridor. It's about a two-minute walk.",
            textZh: "蓝线？跟着写'Transfer'的指示牌走这条走廊。大概两分钟的路。",
            keyPhrases: [
              { en: "follow the signs", zh: "跟着指示牌" },
              { en: "corridor", zh: "走廊" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, the Blue Line! Just head down this hallway and follow the transfer signs. It's a short walk.", textZh: "哦，蓝线！沿这条走廊走，跟着换乘标识。很近。", actionHint: "用hallway替代corridor", frequency: "common" },
              { textEn: "Blue Line is that way — go through the passageway and look for the 'Transfer' signs. Takes about two minutes.", textZh: "蓝线在那边——穿过通道找'Transfer'标识。大概两分钟。", actionHint: "指方向", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to exit and go through the turnstile again?",
            textZh: "需要出站重新过闸机吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "No, it's an in-station transfer. Just walk through the tunnel and you'll see the Blue Line platform.",
            textZh: "不用，是站内换乘。穿过通道就能看到蓝线站台了。",
            keyPhrases: [
              { en: "in-station transfer", zh: "站内换乘" },
              { en: "tunnel", zh: "通道" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, you can transfer inside the station. Walk through the underground passage and you'll reach the Blue Line platform.", textZh: "不用，站内就能换乘。走地下通道就到蓝线站台了。", actionHint: "用underground passage更清楚", frequency: "common" },
              { textEn: "No need to go outside. It's all connected. Just follow the tunnel and the Blue Line is right there.", textZh: "不需要出去。都是相通的。穿过通道蓝线就在那。", actionHint: "强调不用出站", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to go to the airport. Which direction should I take on the Blue Line?",
            textZh: "我要去机场。蓝线坐哪个方向？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Take it eastbound. The airport is the last stop on that line. You can't go wrong.",
            textZh: "坐东行方向。机场是那条线的终点站。不会坐错的。",
            keyPhrases: [
              { en: "eastbound", zh: "东行方向" },
              { en: "last stop", zh: "终点站" },
            ],
            alternativeExpressions: [
              { textEn: "Go east on the Blue Line. The airport is the end of the line, so you can't miss it.", textZh: "坐蓝线东行。机场是终点站，不会错过的。", actionHint: "用end of the line", frequency: "common" },
              { textEn: "Grab the eastbound train. Just ride it all the way to the end — that's the airport.", textZh: "坐东行的车。一直坐到终点就是机场。", actionHint: "强调坐到底", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How many stops is it to the airport from here?",
            textZh: "从这里到机场有几站？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "About 12 stops. Should take around 35 minutes. The train comes every 8 minutes or so.",
            textZh: "大概12站。大约35分钟。列车大概每8分钟一班。",
            keyPhrases: [
              { en: "every 8 minutes", zh: "每8分钟" },
              { en: "or so", zh: "左右/大约" },
            ],
            alternativeExpressions: [
              { textEn: "It's roughly 12 stops, about 35 minutes total. Trains run every 8 minutes or so.", textZh: "大概12站，总共约35分钟。列车每8分钟左右一班。", actionHint: "用roughly更口语", frequency: "common" },
              { textEn: "Around 12 stops. You're looking at about half an hour. They come pretty frequently — every 8 minutes.", textZh: "大约12站。差不多半小时。车挺频繁的——每8分钟一班。", actionHint: "用half an hour更直观", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Is there a way to check which train is coming next on the platform?",
            textZh: "好的。在站台上能看到下一班是什么车吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, there's an electronic board above the platform showing the next arrivals. It tells you the destination and how many minutes away the train is.",
            textZh: "有的，站台上方有电子屏显示下一班到站信息。会告诉你终点站和几分钟到。",
            keyPhrases: [
              { en: "electronic board", zh: "电子屏" },
              { en: "next arrivals", zh: "下一班到站" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, look at the screen above the platform. It shows which train is coming and how far away it is.", textZh: "有，看站台上方的屏幕。会显示哪趟车要来以及还有多远。", actionHint: "用screen替代board", frequency: "common" },
              { textEn: "There's a countdown display on the platform showing the next trains, their destinations, and minutes till arrival.", textZh: "站台有倒计时显示屏，显示下一班车、终点站和几分钟到达。", actionHint: "用countdown更具体", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "复杂换乘",
        titleEn: "Complex Transfer with Multiple Lines",
        description: "需要换乘多条线路到达目的地",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to get to the convention center. The app says I need two transfers. That sounds complicated.",
            textZh: "我要去会展中心。APP说要换两次车。听起来很复杂。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "It's not as bad as it sounds. First, take the Red Line three stops to Central Station. Then transfer to the Green Line.",
            textZh: "没你想的那么难。先坐红线三站到中央车站。然后换乘绿线。",
            keyPhrases: [
              { en: "not as bad as it sounds", zh: "没你想的那么难" },
              { en: "Central Station", zh: "中央车站" },
            ],
            alternativeExpressions: [
              { textEn: "It's easier than you think. Ride the Red Line three stops to Central, then hop on the Green Line.", textZh: "比你想的简单。坐红线三站到中央站，然后换绿线。", actionHint: "用easier than you think", frequency: "common" },
              { textEn: "Don't worry, it's pretty straightforward. Take the Red Line to Central Station — that's just three stops. From there, switch to the Green.", textZh: "别担心，很简单。坐红线到中央车站——就三站。然后换绿线。", actionHint: "安慰并分步说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "And the second transfer?",
            textZh: "第二次换乘呢？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "At Park Street, switch to the Orange Line heading south. The convention center is two stops from there.",
            textZh: "在公园街站换橙线南行方向。会展中心从那再两站就到了。",
            keyPhrases: [
              { en: "switch to", zh: "换乘" },
              { en: "heading south", zh: "南行方向" },
            ],
            alternativeExpressions: [
              { textEn: "At Park Street, transfer to the Orange Line going south. The convention center is just two more stops.", textZh: "到公园街站换南行的橙线。会展中心就再两站。", actionHint: "用transfer to更标准", frequency: "common" },
              { textEn: "Get off at Park Street and catch the southbound Orange Line. Two stops later, you're at the convention center.", textZh: "在公园街下车，坐南行的橙线。两站后就到会展中心了。", actionHint: "用catch更口语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if I miss the Green Line train? How long will I have to wait?",
            textZh: "如果错过了绿线怎么办？要等多久？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "During rush hour, trains come every 3 to 5 minutes. Off-peak, it might be 8 to 10 minutes.",
            textZh: "高峰期每3到5分钟一班。非高峰时段可能8到10分钟。",
            keyPhrases: [
              { en: "rush hour", zh: "高峰期" },
              { en: "off-peak", zh: "非高峰时段" },
            ],
            alternativeExpressions: [
              { textEn: "In rush hour you'll only wait 3 to 5 minutes. Outside of that, maybe 8 to 10.", textZh: "高峰期只需等3到5分钟。其他时间可能8到10分钟。", actionHint: "用only wait强调快", frequency: "common" },
              { textEn: "Trains are super frequent during peak times — every few minutes. Off-peak it slows down to 8 or 10 minutes.", textZh: "高峰时段车特别频繁——几分钟一班。非高峰会慢到8到10分钟。", actionHint: "用super frequent强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are the transfers clearly marked? I'm worried about getting lost.",
            textZh: "换乘标识清楚吗？我怕迷路。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, just follow the colored signs on the walls. Each line has its own color, so look for green when transferring to the Green Line.",
            textZh: "清楚的，跟着墙上的彩色标识走就行。每条线都有自己的颜色，换绿线就找绿色标识。",
            keyPhrases: [
              { en: "colored signs", zh: "彩色标识" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Each line has color-coded signs on the walls. For the Green Line, just follow the green arrows.", textZh: "当然。每条线墙上都有颜色编码的标识。换绿线就跟着绿色箭头走。", actionHint: "用color-coded更精确", frequency: "common" },
              { textEn: "They're really well marked. Look for the line colors on the walls and floor — green signs for the Green Line.", textZh: "标识很清楚。看墙上和地上的线路颜色——绿线找绿色标识。", actionHint: "提到地面标识", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is there a faster route that has fewer transfers?",
            textZh: "明白了。有没有少换乘的更快的路线？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You could take a bus from here — Route 47 goes straight to the convention center with no transfers. The stop is right outside.",
            textZh: "你可以从这里坐公交——47路直达会展中心，不用换乘。站就在外面。",
            keyPhrases: [
              { en: "goes straight to", zh: "直达" },
              { en: "right outside", zh: "就在外面" },
            ],
            alternativeExpressions: [
              { textEn: "Actually, there's a bus — Route 47 — that goes directly there with no transfers. The bus stop is just outside the station.", textZh: "其实有公交——47路——直达那里，不用换乘。公交站就在车站外面。", actionHint: "用actually引出替代方案", frequency: "common" },
              { textEn: "Here's an easier option: take the 47 bus from right outside. It drops you off right at the convention center.", textZh: "有个更简单的选择：从外面坐47路公交。直接到会展中心门口。", actionHint: "强调更简单", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds much easier. I'll take the bus instead. Thanks for the tip!",
            textZh: "那简单多了。我坐公交好了。谢谢你的建议！",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You're welcome. The bus should come in about 5 minutes. You can use the same transit card.",
            textZh: "不客气。公交大概5分钟就到。可以用同一张交通卡。",
            keyPhrases: [
              { en: "same transit card", zh: "同一张交通卡" },
            ],
            alternativeExpressions: [
              { textEn: "No problem. The bus comes every 5 minutes or so, and your transit card works on buses too.", textZh: "没事。公交大概每5分钟一班，你的交通卡公交也能用。", actionHint: "强调卡通用", frequency: "common" },
              { textEn: "Happy to help. Bus should be here in about 5 minutes. Same card, no extra fare.", textZh: "乐意帮忙。公交大概5分钟到。同一张卡，不用额外付费。", actionHint: "强调不加钱", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 地铁迷路 ====================
  {
    id: "transport-subway-lost",
    tags: ["subway", "地铁", "metro", "underground"],
    category: "transport",
    titleZh: "地铁里迷路",
    titleEn: "Lost in the Subway",
    description: "在地铁站迷路后向人问路找到正确出口或线路",
    otherRole: "热心乘客",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "basic",
        titleZh: "找不到出口",
        titleEn: "Can't Find the Exit",
        description: "在大型地铁站找不到正确出口",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm totally lost. I need to get to the street level but I can't find the exit.",
            textZh: "不好意思，我完全迷路了。我要到地面但找不到出口。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "No worries, this station is huge. Which street are you looking for? There are several exits.",
            textZh: "别担心，这个站很大。你要去哪条街？这里有好几个出口。",
            keyPhrases: [
              { en: "several exits", zh: "好几个出口" },
              { en: "which street", zh: "哪条街" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry, happens all the time — this place is massive. What street are you trying to get to?", textZh: "别急，经常有人迷路——这地方太大了。你要去哪条街？", actionHint: "安慰语气", frequency: "common" },
              { textEn: "It's a confusing station. There are multiple exits. Which street do you need?", textZh: "这站确实容易搞混。有好几个出口。你要去哪条街？", actionHint: "承认复杂性", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to get to Broadway. My hotel is on the corner of Broadway and 34th Street.",
            textZh: "我要到百老汇。我的酒店在百老汇和34街的拐角。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Okay, you want Exit B. Go back this way, past the newsstand, and take the stairs on your right.",
            textZh: "好的，你要走B出口。往回走，经过报刊亭，然后走右边的楼梯。",
            keyPhrases: [
              { en: "Exit B", zh: "B出口" },
              { en: "newsstand", zh: "报刊亭" },
              { en: "on your right", zh: "在你右边" },
            ],
            alternativeExpressions: [
              { textEn: "You need Exit B. Go back the way you came, pass the newsstand, and the stairs to the street are on your right.", textZh: "你要走B出口。原路返回，过了报刊亭，上街的楼梯在右手边。", actionHint: "用go back the way you came", frequency: "common" },
              { textEn: "Head for Exit B — turn around, walk past the news shop, and take the stairs on the right side.", textZh: "往B出口走——转身，经过报刊店，走右边的楼梯。", actionHint: "用news shop替代", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Past the newsstand and then right. Got it. Is there an elevator? I have heavy bags.",
            textZh: "经过报刊亭然后右转。明白了。有电梯吗？我行李很重。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, there's an elevator near Exit A. It's a bit further down, but it goes straight to street level.",
            textZh: "有的，A出口附近有电梯。远一点，但直接到地面。",
            keyPhrases: [
              { en: "elevator", zh: "电梯" },
              { en: "street level", zh: "地面层" },
            ],
            alternativeExpressions: [
              { textEn: "There is one by Exit A. It's a little further, but it'll take you straight up to street level.", textZh: "A出口旁边有一个。远一点，但能直接到地面。", actionHint: "用straight up强调直达", frequency: "common" },
              { textEn: "Yeah, there's an elevator near Exit A. A bit of a walk, but way easier with heavy luggage.", textZh: "有，A出口附近有电梯。走远一点，但拿重行李方便多了。", actionHint: "体贴行李重的情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the elevator then. Will I still end up near Broadway?",
            textZh: "那我坐电梯好了。出来还是在百老汇附近吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, Exit A puts you on the west side of Broadway. Your hotel should be just a block to the right.",
            textZh: "是的，A出口出来在百老汇西侧。你的酒店应该往右走一个路口就到。",
            keyPhrases: [
              { en: "west side", zh: "西侧" },
              { en: "a block", zh: "一个路口" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, Exit A drops you on the west side of Broadway. Your hotel is just one block to the right.", textZh: "对，A出口出来在百老汇西侧。你的酒店就在右边一个路口。", actionHint: "用drops you更口语", frequency: "common" },
              { textEn: "Exit A comes out on Broadway's west side. Once you're up, hang a right and your hotel should be right there.", textZh: "A出口出来在百老汇西边。上去后右转，酒店就在那。", actionHint: "用hang a right更随意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I was going in circles down here.",
            textZh: "太感谢了。我在下面都转圈了。",
            culturalNote: "在大城市的地铁站迷路是很常见的。不要不好意思问路，大多数人都很乐意帮忙。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Ha, we've all been there! Pro tip — download the subway app. It shows you which exit is closest to your destination.",
            textZh: "哈，我们都经历过！小建议——下载地铁APP。它会显示离你目的地最近的出口。",
            keyPhrases: [
              { en: "pro tip", zh: "小建议" },
              { en: "closest to", zh: "离...最近" },
            ],
            alternativeExpressions: [
              { textEn: "Ha, everyone gets lost down here! Quick tip — get the subway app. It tells you which exit to use for where you're going.", textZh: "哈，这里谁都迷路过！小提示——下个地铁APP。它会告诉你该走哪个出口。", actionHint: "用quick tip替代pro tip", frequency: "common" },
              { textEn: "Been there! Here's a trick — Google Maps shows you the best subway exit for your destination. Super handy.", textZh: "我也经历过！教你个技巧——Google Maps会显示去目的地最好的地铁出口。超方便。", actionHint: "推荐Google Maps", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "坐错方向了",
        titleEn: "Took the Wrong Direction",
        description: "发现坐反方向后如何纠正",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Oh no, I think I'm going the wrong way. These station names don't look right.",
            textZh: "糟糕，我好像坐反了。这些站名不太对。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Where are you trying to go? Let me help you figure it out.",
            textZh: "你要去哪？我帮你看看。",
            keyPhrases: [
              { en: "figure it out", zh: "搞清楚" },
            ],
            alternativeExpressions: [
              { textEn: "Where do you need to be? I can help you sort it out.", textZh: "你要到哪？我帮你理一理。", actionHint: "用sort it out替代", frequency: "common" },
              { textEn: "What's your destination? Let me see if I can point you in the right direction.", textZh: "你的目的地是哪？我看能不能帮你指对方向。", actionHint: "用point in right direction", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to go to Union Station, but the stops seem to be getting further away from downtown.",
            textZh: "我要去联合车站，但感觉越坐离市中心越远了。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yeah, you're heading north. You need to go south. Get off at the next stop and cross to the other platform.",
            textZh: "是的，你在往北走。你需要往南。下一站下车，到对面站台去。",
            keyPhrases: [
              { en: "heading north", zh: "往北走" },
              { en: "cross to the other platform", zh: "到对面站台" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, you're going the wrong way — you're heading north and you need south. Jump off at the next stop and switch platforms.", textZh: "对，你坐反了——你在往北，你要往南。下一站下车换站台。", actionHint: "直接说坐反了", frequency: "common" },
              { textEn: "Yeah, this train is going north. You need to get off at the next station and walk across to the southbound side.", textZh: "是的，这车往北走。你需要下一站下车，走到南行那边。", actionHint: "详细说明怎么走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to buy another ticket to go back the other way?",
            textZh: "反方向要重新买票吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "No, just get off and walk to the opposite platform. You don't need to go through the gates again.",
            textZh: "不用，下车走到对面站台就行。不需要重新过闸机。",
            keyPhrases: [
              { en: "opposite platform", zh: "对面站台" },
              { en: "gates", zh: "闸机" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, just hop off and cross over to the other side. No need to tap out and back in.", textZh: "不用，下车走到对面就行。不需要刷出去再刷进来。", actionHint: "用tap out/in更具体", frequency: "common" },
              { textEn: "No extra ticket needed. Get off, walk to the other platform, and catch the next train going south.", textZh: "不用再买票。下车走到对面站台，等下一班南行的车。", actionHint: "强调不用买票", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How many stops is Union Station from the next stop going in the right direction?",
            textZh: "从下一站往正确方向坐，到联合车站有几站？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Let me count... you've gone three stops past where you started, so it'll be about seven stops going back south.",
            textZh: "我算算……你多坐了三站，所以往回南行大概七站。",
            keyPhrases: [
              { en: "gone past", zh: "多坐了/坐过了" },
              { en: "going back", zh: "往回" },
            ],
            alternativeExpressions: [
              { textEn: "Let me think... You're three stops past your starting point, so going back south it'll be around seven stops total.", textZh: "我想想……你多走了三站，所以往回南行总共大概七站。", actionHint: "用let me think开头", frequency: "common" },
              { textEn: "You went three extra stops the wrong way, so heading back south you're looking at about seven stops.", textZh: "你多坐了三站反方向的，所以南行回去大概七站。", actionHint: "用extra stops更清楚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is my stop now, right? I should get off here?",
            textZh: "现在到了对吧？我该下车了？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, get off here. The southbound platform is across the tracks — take the underpass right there.",
            textZh: "对，在这下。南行站台在轨道对面——走那边的地下通道。",
            keyPhrases: [
              { en: "southbound", zh: "南行" },
              { en: "underpass", zh: "地下通道" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, this is it. The southbound side is across the tracks — use the passageway right over there.", textZh: "对，就这站。南行那边在轨道对面——走那边的通道过去。", actionHint: "用passageway替代underpass", frequency: "common" },
              { textEn: "This is your stop. Get off and take the underground walkway to the other platform for southbound trains.", textZh: "就在这下。下车走地下走廊到另一边站台坐南行的车。", actionHint: "用underground walkway更清楚", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you for saving me from going even further the wrong way!",
            textZh: "明白了。谢谢你救了我，不然我还要继续坐反了！",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Happens to everyone. A good trick is to check the final destination shown on the train — that tells you which direction it's going.",
            textZh: "谁都会发生。一个好方法是看车头显示的终点站——那就知道方向了。",
            keyPhrases: [
              { en: "final destination", zh: "终点站" },
              { en: "which direction", zh: "哪个方向" },
            ],
            alternativeExpressions: [
              { textEn: "It happens to the best of us. Next time, check the sign on the front of the train — it shows the last stop, so you'll know the direction.", textZh: "谁都免不了。下次看车头的牌子——上面显示终点站，就知道方向了。", actionHint: "用best of us安慰", frequency: "common" },
              { textEn: "Don't sweat it. Tip for next time: the train always displays where it's going on the front. That tells you the direction.", textZh: "别在意。下次记住：车头总会显示去哪。那就是方向。", actionHint: "给实用小提示", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 渡轮订票 ====================
  {
    id: "transport-ferry-booking",
    category: "transport",
    titleZh: "渡轮订票",
    titleEn: "Booking a Ferry",
    description: "预订渡轮船票，选择舱位和了解航程信息",
    otherRole: "渡轮售票员",
    otherRoleIcon: "⛴️",
    flows: [
      {
        id: "basic",
        titleZh: "购买渡轮票",
        titleEn: "Buying a Ferry Ticket",
        description: "在码头购买渡轮票并了解航程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to book a ferry to Martha's Vineyard for two adults. What times do you have today?",
            textZh: "你好，我想订去玛莎葡萄园岛的渡轮，两个成人。今天有什么时间？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "We have sailings at 9:30 AM, 12:00 PM, and 3:00 PM. The morning one still has plenty of seats.",
            textZh: "我们有9:30、12:00和3:00的航班。早上那班还有很多位子。",
            keyPhrases: [
              { en: "sailings", zh: "航班/班次" },
              { en: "plenty of seats", zh: "很多位子" },
            ],
            alternativeExpressions: [
              { textEn: "We've got boats at 9:30, noon, and 3 o'clock. The morning one is wide open.", textZh: "9:30、中午12点和3点有船。早上那班很空。", actionHint: "用wide open形容空位多", frequency: "common" },
              { textEn: "There are three sailings today — 9:30 AM, 12 PM, and 3 PM. The 9:30 still has lots of availability.", textZh: "今天有三班——上午9:30、中午12点和下午3点。9:30那班还有很多空位。", actionHint: "用availability更正式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take the noon one. How long is the crossing?",
            textZh: "我们坐中午那班。渡海要多久？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The standard ferry takes about 45 minutes. We also have a high-speed ferry that does it in 30 minutes, but it costs more.",
            textZh: "普通渡轮大约45分钟。我们还有高速渡轮，30分钟到，但更贵。",
            keyPhrases: [
              { en: "crossing", zh: "渡海" },
              { en: "high-speed ferry", zh: "高速渡轮" },
            ],
            alternativeExpressions: [
              { textEn: "The regular boat is about 45 minutes. There's a fast ferry too — 30 minutes, but it'll cost you more.", textZh: "普通船大约45分钟。还有快船——30分钟，但贵一些。", actionHint: "用fast ferry更口语", frequency: "common" },
              { textEn: "On the standard ferry, it's a 45-minute ride. If you're in a hurry, the high-speed option gets there in half an hour for a bit more money.", textZh: "普通渡轮要45分钟。如果赶时间，高速船半小时到，多花一点钱。", actionHint: "根据是否赶时间推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll go with the standard one. How much for two adults, round trip?",
            textZh: "坐普通的就好。两个成人往返多少钱？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "That's $38 per person round trip, so $76 total. Would you like to reserve deck seating or indoor seating?",
            textZh: "每人往返38美元，共76美元。你们要预订甲板座位还是室内座位？",
            keyPhrases: [
              { en: "per person", zh: "每人" },
              { en: "deck seating", zh: "甲板座位" },
              { en: "indoor seating", zh: "室内座位" },
            ],
            alternativeExpressions: [
              { textEn: "That's 38 bucks each round trip, $76 for both of you. Would you prefer sitting outside on the deck or inside?", textZh: "每人往返38块，你们俩共76美元。想坐外面甲板还是室内？", actionHint: "用bucks更随意", frequency: "common" },
              { textEn: "Round trip is $38 a person, so $76 total. Do you want open-air seating on the deck or seats inside?", textZh: "往返每人38美元，共76。你们要甲板的露天座位还是室内的？", actionHint: "用open-air更形象", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Deck seating sounds nice. Is it okay if it rains?",
            textZh: "甲板座位不错。下雨怎么办？",
            culturalNote: "海上天气变化快，建议带件外套。甲板上风大，体感温度比陆地低。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "There's a covered section on the deck. But you can always move inside if the weather turns. No reserved seating inside.",
            textZh: "甲板上有遮雨的区域。天气不好随时可以到室内，室内不用预订座位。",
            keyPhrases: [
              { en: "covered section", zh: "遮雨区域" },
              { en: "weather turns", zh: "天气变差" },
            ],
            alternativeExpressions: [
              { textEn: "Part of the deck is covered, so you'll be fine in light rain. If it gets bad, just head inside — indoor seats are first come, first served.", textZh: "甲板部分有顶棚，小雨没问题。天气不好就进去——室内先到先坐。", actionHint: "用first come first served", frequency: "common" },
              { textEn: "There's a sheltered area on deck. You can always go inside if the weather changes — no reservation needed for indoor seats.", textZh: "甲板有遮蔽区域。天气变了随时可以进去——室内座位不需要预订。", actionHint: "用sheltered替代covered", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What time should we arrive at the dock before departure?",
            textZh: "了解了。开船前多久要到码头？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Please be here at least 30 minutes before departure. Boarding closes 10 minutes before sailing time.",
            textZh: "请至少提前30分钟到。登船在开航前10分钟关闭。",
            keyPhrases: [
              { en: "at least 30 minutes", zh: "至少30分钟" },
              { en: "boarding closes", zh: "停止登船" },
            ],
            alternativeExpressions: [
              { textEn: "Try to get here half an hour early. They close the gangway 10 minutes before departure.", textZh: "尽量提前半小时到。开船前10分钟关舷梯。", actionHint: "用half an hour更口语", frequency: "common" },
              { textEn: "Arrive at the dock 30 minutes ahead of time. Last call for boarding is 10 minutes before we sail.", textZh: "提前30分钟到码头。最后登船时间是开航前10分钟。", actionHint: "用last call更形象", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "带车上渡轮",
        titleEn: "Taking a Car on the Ferry",
        description: "开车上渡轮的预订和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I bring my car on the ferry? How much extra does that cost?",
            textZh: "可以带车上渡轮吗？要加多少钱？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, but vehicle reservations sell out fast, especially in summer. A standard car costs $85 one-way in addition to passenger fares.",
            textZh: "可以，但车辆预约很快就满了，尤其是夏天。普通轿车单程85美元，不含乘客票。",
            keyPhrases: [
              { en: "vehicle reservations", zh: "车辆预约" },
              { en: "sell out fast", zh: "很快售罄" },
              { en: "in addition to", zh: "不含/此外还有" },
            ],
            alternativeExpressions: [
              { textEn: "You can, but car spots fill up quick — especially during summer. It's $85 one-way for a standard car, plus your passenger tickets.", textZh: "可以，但车位很快就满了——特别是夏天。普通车单程85美元，另加乘客票。", actionHint: "用car spots更口语", frequency: "common" },
              { textEn: "Yes, but I'd book the car early — vehicle slots go fast in peak season. A regular car is $85 each way, on top of the fare.", textZh: "可以，但建议早订——旺季车位很快没了。普通车每程85美元，另算票价。", actionHint: "建议提前预订", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's steep. Is it better to just rent a car on the island instead?",
            textZh: "好贵。是不是在岛上直接租车更好？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Many people do that. The island also has bike rentals and shuttle buses. You don't really need a car there unless you're staying a while.",
            textZh: "很多人这样做。岛上也有自行车租赁和接驳巴士。除非住很久，否则不太需要车。",
            keyPhrases: [
              { en: "bike rentals", zh: "自行车租赁" },
              { en: "shuttle buses", zh: "接驳巴士" },
            ],
            alternativeExpressions: [
              { textEn: "A lot of folks do that. There are bikes for rent and shuttles on the island. You really only need a car if you're staying a while.", textZh: "很多人这么干。岛上有租赁自行车和接驳车。除非住比较久，否则不需要车。", actionHint: "用folks更随意", frequency: "common" },
              { textEn: "That's actually what most visitors do. The island has bike rentals, buses, and it's easy to get around without a car.", textZh: "大部分游客其实都这样。岛上有自行车、公交，没车也很好逛。", actionHint: "强调岛上交通方便", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good point. If I do bring my car, how early do I need to line up at the dock?",
            textZh: "有道理。如果带车的话，要提前多久到码头排队？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "At least one hour before departure. Cars board first, so you need to be in the vehicle staging area on time.",
            textZh: "至少提前一个小时。车辆先上船，所以要准时到车辆集结区。",
            keyPhrases: [
              { en: "vehicle staging area", zh: "车辆集结区" },
              { en: "board first", zh: "先上船" },
            ],
            alternativeExpressions: [
              { textEn: "Give yourself at least an hour. Cars load before passengers, so be in the car lane on time.", textZh: "至少留一个小时。车比乘客先上船，所以要准时到车辆通道。", actionHint: "用car lane替代staging area", frequency: "common" },
              { textEn: "You'll want to be there a full hour ahead. They load vehicles first, and you need to be waiting in the staging area.", textZh: "最好提前整整一小时到。车辆先装载，你得在集结区等着。", actionHint: "用a full hour强调", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I stay in my car during the crossing, or do I have to go upstairs?",
            textZh: "渡海期间可以待在车里吗？还是必须上楼？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "You must leave the vehicle deck once we sail. It's for safety. You can go to the passenger deck and enjoy the views.",
            textZh: "开船后必须离开车辆甲板。这是出于安全考虑。你可以去乘客甲板看风景。",
            keyPhrases: [
              { en: "vehicle deck", zh: "车辆甲板" },
              { en: "passenger deck", zh: "乘客甲板" },
              { en: "for safety", zh: "出于安全考虑" },
            ],
            alternativeExpressions: [
              { textEn: "No, everyone has to go upstairs once we're sailing. It's a safety requirement. The passenger deck has great views though.", textZh: "不行，开船后所有人都要上楼。这是安全规定。不过乘客甲板风景很好。", actionHint: "用safety requirement", frequency: "common" },
              { textEn: "You can't stay with the car during the trip — that area is off-limits once we depart. Head up to the passenger level and enjoy the scenery.", textZh: "航行中不能待在车里——出发后那个区域禁入。上乘客层欣赏风景吧。", actionHint: "用off-limits更直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. If I cancel the car reservation, do I get a refund?",
            textZh: "明白了。如果取消车辆预约，能退款吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "If you cancel at least 72 hours in advance, you get a full refund. Less than that, there's a $25 cancellation fee.",
            textZh: "提前至少72小时取消可以全额退款。不足72小时有25美元取消费。",
            keyPhrases: [
              { en: "72 hours in advance", zh: "提前72小时" },
              { en: "cancellation fee", zh: "取消费" },
            ],
            alternativeExpressions: [
              { textEn: "Cancel three days ahead and you get your money back in full. Less than that, there's a $25 fee.", textZh: "提前三天取消全额退款。不到三天有25美元手续费。", actionHint: "用three days更直观", frequency: "common" },
              { textEn: "Full refund if you cancel at least 72 hours before. After that, we charge a $25 cancellation penalty.", textZh: "提前至少72小时取消全退。之后收25美元取消罚款。", actionHint: "用penalty更正式", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 渡轮登船 ====================
  {
    id: "transport-ferry-boarding",
    category: "transport",
    titleZh: "渡轮登船",
    titleEn: "Boarding a Ferry",
    description: "在码头登渡轮，找位置和了解船上设施",
    otherRole: "船员",
    otherRoleIcon: "🚢",
    flows: [
      {
        id: "basic",
        titleZh: "登船找座位",
        titleEn: "Boarding & Finding a Seat",
        description: "登船后在渡轮上找座位和了解设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, where should I go after I show my ticket?",
            textZh: "你好，验票后我往哪边走？",
            casualVersion: "Hey, after showing my ticket, where do I head?",
            commonMistake: {
              wrong: "Where I go after I show my ticket?",
              correct: "Where should I go after I show my ticket?",
              explanation: "中文思维直接翻译，省略了疑问词和助动词",
            },
            formalityVariants: {
              casual: "Ticket checked, where next?",
              standard: "Hi, where should I go after I show my ticket?",
              formal: "Good morning/afternoon, could you please direct me to the correct boarding area after my ticket has been presented for verification?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "Head up the gangway and you'll reach the main deck. Indoor seating is to the left, outdoor seating to the right.",
            textZh: "沿舷梯上去就到主甲板了。室内座位在左边，室外在右边。",
            keyPhrases: [
              { en: "gangway", zh: "舷梯" },
              { en: "main deck", zh: "主甲板" },
            ],
            alternativeExpressions: [
              { textEn: "Walk up the ramp to the main deck. Inside seating is on your left, outside on the right.", textZh: "沿坡道上到主甲板。室内座位在左边，室外在右边。", actionHint: "用ramp替代gangway", frequency: "common" },
              { textEn: "Just head up the gangway and you're on the main level. Go left for indoor seats, right for outdoor.", textZh: "沿舷梯上去就到主层。往左是室内座位，往右是室外。", actionHint: "用main level替代deck", frequency: "occasional" },
            ],
            casualVersion: "Just go up the gangway, you'll hit the main deck. Indoors is left, outdoors is right.",
            formalityVariants: {
              casual: "Up the gangway, you're on the main deck. Left for inside, right for outside.",
              standard: "Head up the gangway and you'll reach the main deck. Indoor seating is to the left, outdoor seating to the right.",
              formal: "Kindly ascend the gangway, which will lead you directly to the main deck. For your convenience, indoor seating is situated on the port side, and outdoor seating on the starboard side.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there food or drinks available on board?",
            textZh: "船上有吃的喝的吗？",
            casualVersion: "Got any food or drinks on the ferry?",
            commonMistake: {
              wrong: "Have food or drinks on board?",
              correct: "Is there food or drinks available on board?",
              explanation: "询问'有没有'某个东西，常用'Is there/Are there'句型",
            },
            formalityVariants: {
              casual: "Food/drinks on board?",
              standard: "Is there food or drinks available on board?",
              formal: "May I inquire if food and beverage services are available on this vessel?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "Yes, there's a snack bar on the lower deck. Coffee, sandwiches, and drinks. It opens once we depart.",
            textZh: "有的，下层甲板有小吃吧。咖啡、三明治和饮料。出发后就开了。",
            keyPhrases: [
              { en: "snack bar", zh: "小吃吧" },
              { en: "lower deck", zh: "下层甲板" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, there's a café downstairs with coffee, sandwiches, and drinks. It opens once we set off.", textZh: "有，楼下有个咖啡吧，有咖啡、三明治和饮料。开船后就开了。", actionHint: "用café和set off", frequency: "common" },
              { textEn: "There's a little concession stand on the lower level — snacks, coffee, cold drinks. Opens after departure.", textZh: "下层有个小卖部——零食、咖啡、冷饮。出发后营业。", actionHint: "用concession stand更美式", frequency: "occasional" },
            ],
            casualVersion: "Yeah, snack bar's on the lower deck. Coffee, sandwiches, drinks. Opens after we leave.",
            formalityVariants: {
              casual: "Yup, snack bar downstairs. Coffee, sandwiches, stuff. Opens once we're off.",
              standard: "Yes, there's a snack bar on the lower deck. Coffee, sandwiches, and drinks. It opens once we depart.",
              formal: "Affirmative, a snack bar is located on the lower deck, providing a selection of coffee, sandwiches, and other refreshments. Service will commence following our departure.",
            },
          },
          {
            speaker: "you",
            textEn: "Is it okay to go to the upper deck for the view? Or is that restricted?",
            textZh: "可以去上层甲板看风景吗？还是限制区域？",
            casualVersion: "Can I go up to the upper deck for the view? Or is that off-limits?",
            commonMistake: {
              wrong: "Can I go to upper deck for view? Is it restriction?",
              correct: "Is it okay to go to the upper deck for the view? Or is that restricted?",
              explanation: "Deck 和 view 前需要 'the'；'restricted' 是形容词，'restriction' 是名词",
            },
            formalityVariants: {
              casual: "Upper deck for views? Or is that restricted?",
              standard: "Is it okay to go to the upper deck for the view? Or is that restricted?",
              formal: "Would it be permissible to ascend to the upper deck to observe the scenery, or is that particular area designated as restricted access?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "The upper deck is open to everyone. Best views are from the front. Just hold onto the railing — it can get windy.",
            textZh: "上层甲板对所有人开放。前面风景最好。抓好栏杆——风会很大。",
            keyPhrases: [
              { en: "upper deck", zh: "上层甲板" },
              { en: "hold onto the railing", zh: "抓好栏杆" },
            ],
            alternativeExpressions: [
              { textEn: "The top deck is open to all passengers. Best views are up front, but it gets pretty windy so hang on.", textZh: "顶层甲板所有乘客都能去。前面风景最好，但风很大，抓紧了。", actionHint: "用top deck和hang on", frequency: "common" },
              { textEn: "Go right ahead — the upper deck has amazing views. Head to the bow for the best spot. Just watch for the wind.", textZh: "随便去——上层甲板景色很棒。去船头位置最好。注意风大。", actionHint: "用bow更专业", frequency: "occasional" },
            ],
            casualVersion: "Upper deck's open to everyone. Front has the best views. Just hold on to the railing 'cause it gets windy.",
            formalityVariants: {
              casual: "Everyone can go up top. Front's best for views. Hold the rail, it's windy.",
              standard: "The upper deck is open to everyone. Best views are from the front. Just hold onto the railing — it can get windy.",
              formal: "The upper deck is indeed open for general access. For the optimal viewing experience, I recommend the forward section. Kindly be advised to maintain a firm grip on the railing, as conditions can be quite breezy.",
            },
          },
          {
            speaker: "you",
            textEn: "Where are the restrooms on the ferry?",
            textZh: "渡轮上的洗手间在哪？",
            casualVersion: "Restrooms on the ferry? Where are they?",
            commonMistake: {
              wrong: "Where is restroom?",
              correct: "Where are the restrooms on the ferry?",
              explanation: "通常指代多个卫生间时用复数'restrooms'，且需要冠词'the'",
            },
            formalityVariants: {
              casual: "Where's the bathroom?",
              standard: "Where are the restrooms on the ferry?",
              formal: "Could you please direct me to the nearest lavatory facility on board?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "Restrooms are on both the main and lower decks, near the stairwell. Look for the signs.",
            textZh: "主甲板和下层甲板都有洗手间，在楼梯间附近。看指示牌就行。",
            keyPhrases: [
              { en: "stairwell", zh: "楼梯间" },
            ],
            alternativeExpressions: [
              { textEn: "There are restrooms on both levels, near the stairs. You'll see the signs pointing to them.", textZh: "两层都有洗手间，在楼梯附近。会看到指示牌的。", actionHint: "用both levels简化", frequency: "common" },
              { textEn: "Bathrooms are by the staircase on the main and lower decks. Just follow the signs — they're easy to find.", textZh: "主甲板和下层甲板的楼梯旁都有卫生间。跟着标识走——很好找。", actionHint: "用bathrooms更口语", frequency: "common" },
            ],
            casualVersion: "Restrooms are on both main and lower decks, by the stairwell. Just look for signs.",
            formalityVariants: {
              casual: "Bathrooms are on main and lower, near stairs. Just check for signs.",
              standard: "Restrooms are on both the main and lower decks, near the stairwell. Look for the signs.",
              formal: "The lavatory facilities are situated on both the main and lower decks, in proximity to the stairwell. Kindly refer to the posted signage for guidance.",
            },
          },
          {
            speaker: "you",
            textEn: "How will I know when we're about to arrive? I don't want to miss the announcement.",
            textZh: "快到的时候怎么知道？我不想错过广播。",
            casualVersion: "How'll I know when we're almost there? Don't wanna miss the announcement.",
            commonMistake: {
              wrong: "How I know when we arrive?",
              correct: "How will I know when we're about to arrive?",
              explanation: "缺少助动词 'will' 和 'about to'，以及'the announcement'",
            },
            formalityVariants: {
              casual: "How do I know we're almost there? Don't wanna miss the call.",
              standard: "How will I know when we're about to arrive? I don't want to miss the announcement.",
              formal: "Could you please advise on the method of notification regarding our imminent arrival? I am keen to ensure I do not overlook any announcements in that regard.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "We'll make an announcement about 10 minutes before docking. You'll hear it on the speakers everywhere on the boat.",
            textZh: "靠岸前大约10分钟会广播通知。船上各处都能听到。",
            keyPhrases: [
              { en: "docking", zh: "靠岸" },
              { en: "speakers", zh: "喇叭/扬声器" },
            ],
            alternativeExpressions: [
              { textEn: "We'll announce over the PA about 10 minutes before we dock. You can hear it anywhere on the boat.", textZh: "靠岸前大约10分钟会通过广播系统通知。船上哪里都能听到。", actionHint: "用PA更具体", frequency: "common" },
              { textEn: "There'll be a loudspeaker announcement 10 minutes out. No matter where you are on the ferry, you'll hear it.", textZh: "还有10分钟时会有广播。不管你在船上哪里都能听到。", actionHint: "用loudspeaker更清楚", frequency: "occasional" },
            ],
            casualVersion: "We'll announce it 'bout 10 mins before docking. You'll hear it on all the speakers.",
            formalityVariants: {
              casual: "We'll announce it like 10 mins before. Speakers everywhere, you'll hear it.",
              standard: "We'll make an announcement about 10 minutes before docking. You'll hear it on the speakers everywhere on the boat.",
              formal: "An announcement will be made approximately ten minutes before our scheduled docking. This will be broadcast audibly via the public address system situated across all areas of the vessel.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "渡轮上处理晕船",
        titleEn: "Dealing with Seasickness",
        description: "在渡轮上感到晕船时向船员求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm not feeling well. I think I'm getting seasick. Is there anything you can do?",
            textZh: "不好意思，我不太舒服。好像晕船了。能帮我什么吗？",
            casualVersion: "Hey, not feeling so good. Think I'm getting seasick. Anything you can do?",
            commonMistake: {
              wrong: "I am not comfortable. I think I seasick. Can you help?",
              correct: "I'm not feeling well. I think I'm getting seasick. Is there anything you can do?",
              explanation: "'Not feeling well' 比 'not comfortable' 更常用于表达身体不适；'seasick' 前需加 'am getting'",
            },
            formalityVariants: {
              casual: "Uh, not feeling great. Pretty sure I'm seasick. Can you help?",
              standard: "Excuse me, I'm not feeling well. I think I'm getting seasick. Is there anything you can do?",
              formal: "Pardon me, I am experiencing a degree of discomfort. I suspect I may be developing kinetosis. Would there be any measures you could undertake to alleviate my condition?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "I'm sorry to hear that. Try going out to the deck and looking at the horizon. Fresh air usually helps.",
            textZh: "抱歉听到这个。试试到甲板上看看远方的地平线。新鲜空气通常有帮助。",
            keyPhrases: [
              { en: "seasick", zh: "晕船" },
              { en: "horizon", zh: "地平线" },
              { en: "fresh air", zh: "新鲜空气" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry about that. Step outside and focus on the horizon — the fresh air really helps with seasickness.", textZh: "哎呀，抱歉。出去外面看着地平线——新鲜空气对晕船真的有帮助。", actionHint: "用step outside更具体", frequency: "common" },
              { textEn: "That's not fun. My best advice is to get some air on the deck and stare at a fixed point in the distance.", textZh: "那可不舒服。我最好的建议是到甲板上吹吹风，盯着远处一个固定的点看。", actionHint: "给具体建议", frequency: "occasional" },
            ],
            casualVersion: "Oh, sorry to hear that. Try heading out to the deck, look at the horizon. Fresh air usually helps.",
            formalityVariants: {
              casual: "Aw, bummer. Go on deck, look at the horizon. Fresh air's usually good.",
              standard: "I'm sorry to hear that. Try going out to the deck and looking at the horizon. Fresh air usually helps.",
              formal: "My apologies that you are experiencing this discomfort. I would suggest moving to an outdoor deck and directing your gaze towards the horizon. Exposure to fresh air frequently proves beneficial.",
            },
          },
          {
            speaker: "you",
            textEn: "Do you have any motion sickness medication or ginger candy on board?",
            textZh: "船上有晕船药或者姜糖吗？",
            casualVersion: "Got any motion sickness meds or ginger candy on here?",
            commonMistake: {
              wrong: "You have motion sickness medicine?",
              correct: "Do you have any motion sickness medication or ginger candy on board?",
              explanation: "询问时用 'Do you have' 更自然；'medicine' 通常指药剂，'medication' 更正式，'pills' 或 'meds' 更口语化",
            },
            formalityVariants: {
              casual: "Any meds for seasickness or ginger candy?",
              standard: "Do you have any motion sickness medication or ginger candy on board?",
              formal: "Are there any motion sickness prophylactic agents or ginger-based confectionery items available on this vessel?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "We have some basic first aid supplies including motion sickness pills. Let me get you one. Also, try sipping some water.",
            textZh: "我们有基本急救用品，包括晕船药。我去给你拿。另外，试着小口喝点水。",
            keyPhrases: [
              { en: "motion sickness pills", zh: "晕船药" },
              { en: "first aid supplies", zh: "急救用品" },
              { en: "sipping", zh: "小口喝" },
            ],
            alternativeExpressions: [
              { textEn: "We keep some motion sickness tablets on board. Let me grab one for you. Also, try drinking water slowly — it can help settle your stomach.", textZh: "船上有晕船药片。我去给你拿一片。另外，慢慢喝点水——有助于缓解胃部不适。", actionHint: "用settle your stomach", frequency: "common" },
              { textEn: "I've got some seasickness medicine in the first aid kit. I'll bring it right over. Sip some water in the meantime.", textZh: "急救箱里有晕船药。我马上拿来。先小口喝点水。", actionHint: "用in the meantime", frequency: "common" },
            ],
            casualVersion: "Yeah, got some basic first aid, including seasickness pills. I'll grab you one. Also, try sipping some water.",
            formalityVariants: {
              casual: "Yup, got basic first aid, seasickness pills. I'll get you one. Sip some water too.",
              standard: "We have some basic first aid supplies including motion sickness pills. Let me get you one. Also, try sipping some water.",
              formal: "Indeed, we are equipped with fundamental first aid provisions, which encompass anti-emetic medication for motion sickness. I shall procure one for you promptly. Furthermore, I advise consuming water in small, controlled sips.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there a spot on the boat where the rocking is less noticeable?",
            textZh: "谢谢。船上哪个位置晃动比较不明显？",
            casualVersion: "Thanks. Is there a spot on the boat where it doesn't rock as much?",
            commonMistake: {
              wrong: "Thank you. Where is less shaking place?",
              correct: "Is there a spot on the boat where the rocking is less noticeable?",
              explanation: "船的晃动用 'rocking' 更自然；'less noticeable' 比 'less shaking' 更地道",
            },
            formalityVariants: {
              casual: "Thanks. Any spot on the boat that's less rocky?",
              standard: "Thank you. Is there a spot on the boat where the rocking is less noticeable?",
              formal: "I appreciate that. Could you inform me if there is a specific location on board where the oscillatory motion is minimized?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "The center of the lower deck moves the least. Sit there, stay low, and avoid reading or looking at your phone.",
            textZh: "下层甲板中间晃动最小。坐那里，保持低姿势，不要看书或看手机。",
            keyPhrases: [
              { en: "center of the lower deck", zh: "下层甲板中间" },
              { en: "moves the least", zh: "晃动最小" },
            ],
            alternativeExpressions: [
              { textEn: "Try sitting in the middle of the lower level — it rocks the least there. And put your phone away, that makes it worse.", textZh: "试试坐在下层中间——那里晃得最少。把手机收起来，看手机会更晕。", actionHint: "强调别看手机", frequency: "common" },
              { textEn: "The most stable spot is dead center on the bottom deck. Keep your eyes up and avoid screens.", textZh: "最稳的位置是下层甲板正中间。眼睛看前方，别看屏幕。", actionHint: "用dead center更地道", frequency: "occasional" },
            ],
            casualVersion: "Center of the lower deck moves the least. Sit there, stay low, and don't read or look at your phone.",
            formalityVariants: {
              casual: "Middle of the lower deck moves least. Sit there, keep low, no reading or phone.",
              standard: "The center of the lower deck moves the least. Sit there, stay low, and avoid reading or looking at your phone.",
              formal: "The mid-ship section of the lower deck generally exhibits the least degree of motion. I recommend you position yourself there, maintain a low center of gravity, and abstain from activities such as reading or engaging with portable electronic devices.",
            },
          },
          {
            speaker: "you",
            textEn: "How much longer until we arrive? I'm really struggling here.",
            textZh: "还有多久到？我真的很难受。",
            casualVersion: "How much longer till we get there? I'm really struggling.",
            commonMistake: {
              wrong: "How long arrive? I am very difficult.",
              correct: "How much longer until we arrive? I'm really struggling here.",
              explanation: "'How much longer' 询问持续时间；'struggling' 更准确表达身体不适的艰难处境",
            },
            formalityVariants: {
              casual: "How much longer till we land? I'm really having a hard time.",
              standard: "How much longer until we arrive? I'm really struggling here.",
              formal: "Could you please inform me of the estimated remaining duration until our arrival? I am experiencing considerable distress.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "About 20 more minutes. Hang in there. I'll check on you in a bit. If it gets worse, let me know and we have a first-aid area.",
            textZh: "大约还有20分钟。坚持一下。一会儿我来看你。如果更严重的话告诉我，我们有急救区。",
            keyPhrases: [
              { en: "hang in there", zh: "坚持一下" },
              { en: "first-aid area", zh: "急救区" },
            ],
            alternativeExpressions: [
              { textEn: "Just about 20 more minutes. You're gonna be okay. I'll come check on you soon.", textZh: "差不多再20分钟。你会没事的。我一会儿来看你。", frequency: "common", actionHint: "安慰快到了" },
              { textEn: "We're almost there — maybe 20 minutes. If you feel worse, come find me. We've got a first-aid station.", textZh: "快到了——大概20分钟。更难受的话来找我，我们有急救站。", frequency: "common", actionHint: "快到了，有急救站" },
            ],
            casualVersion: "Just 'bout 20 more mins. Hang in there. I'll check on ya in a bit. If it gets worse, tell me, we got a first-aid area.",
            formalityVariants: {
              casual: "Around 20 mins. Hang tight. I'll pop over soon. If it worsens, let me know, we've got first aid.",
              standard: "About 20 more minutes. Hang in there. I'll check on you in a bit. If it gets worse, let me know and we have a first-aid area.",
              formal: "We anticipate arriving in approximately twenty minutes. Please endeavor to remain composed. I shall return to ascertain your welfare momentarily. Should your symptoms intensify, do not hesitate to notify me, as we maintain a designated area for medical assistance.",
            },
          },
          {
            speaker: "you",
            textEn: "I appreciate it. Next time I'll take the medication before boarding.",
            textZh: "谢谢你。下次我会在上船前就吃药。",
            culturalNote: "晕船药最好提前30分钟到1小时吃才有效。如果你容易晕船，坐船前别吃太饱。",
            casualVersion: "Thanks. Next time, I'm taking the meds before boarding.",
            commonMistake: {
              wrong: "Thank you. Next time I eat medicine before board.",
              correct: "I appreciate it. Next time I'll take the medication before boarding.",
              explanation: "'take medicine' 是正确表达，而不是 'eat medicine'；'before boarding' 是地道用法",
            },
            formalityVariants: {
              casual: "Appreciate it. Next time, meds before getting on.",
              standard: "I appreciate it. Next time I'll take the medication before boarding.",
              formal: "I extend my gratitude. In the future, I shall endeavor to administer the medication prophylactically before embarking upon the vessel.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn: "That's the best plan. Also, wristbands for motion sickness work well for some people. You can buy them at the dock gift shop.",
            textZh: "那最好了。另外，防晕手环对有些人也管用。码头的礼品店可以买到。",
            keyPhrases: [
              { en: "wristbands", zh: "手环" },
              { en: "dock gift shop", zh: "码头礼品店" },
            ],
            alternativeExpressions: [
              { textEn: "Good idea. Oh, and those anti-nausea wristbands actually help too — they sell them at the gift shop on the dock.", textZh: "好主意。对了，防晕手环也挺管用的——码头礼品店有卖。", frequency: "occasional", actionHint: "推荐防晕手环" },
              { textEn: "Smart move. You can also grab some motion sickness bands at the shop by the pier — lots of people swear by them.", textZh: "聪明。你也可以在码头那个店买防晕手环——好多人说很有效。", frequency: "occasional", actionHint: "码头商店有防晕手环" },
            ],
            casualVersion: "Yeah, that's the best plan. Also, motion sickness wristbands work for some folks. You can grab 'em at the dock gift shop.",
            formalityVariants: {
              casual: "Yep, best plan. Also, motion sickness wristbands help some. Get 'em at the gift shop by the dock.",
              standard: "That's the best plan. Also, wristbands for motion sickness work well for some people. You can buy them at the dock gift shop.",
              formal: "That is an eminently sound approach. Furthermore, it is worth noting that accupressure wristbands for motion sickness are often effective for certain individuals. These items may be acquired at the gift shop situated within the terminal.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 自行车租赁 ====================
  {
    id: "transport-bike-rental",
    category: "transport",
    titleZh: "租自行车",
    titleEn: "Renting a Bicycle",
    description: "在旅游地租自行车骑行，了解租金、路线和归还方式",
    otherRole: "租车店员",
    otherRoleIcon: "🚲",
    flows: [
      {
        id: "basic",
        titleZh: "租车流程",
        titleEn: "Basic Bike Rental",
        description: "在自行车租赁店租车的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to rent a bicycle for the day. What are your rates?",
            textZh: "你好，我想租一天自行车。价格怎么样？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "A standard bike is $15 for a half day and $25 for a full day. We also have electric bikes for $40 a day.",
            textZh: "普通自行车半天15美元，全天25美元。电动自行车40美元一天。",
            keyPhrases: [
              { en: "half day", zh: "半天" },
              { en: "full day", zh: "全天" },
              { en: "electric bikes", zh: "电动自行车" },
            ],
            alternativeExpressions: [
              { textEn: "Regular bikes run $15 for half a day, $25 for the whole day. E-bikes are $40 if you want one.", textZh: "普通车半天15，全天25。想要电动的40一天。", actionHint: "随意报价", frequency: "common" },
              { textEn: "It's $25 a day for a standard bike, or $15 if you only need it for a few hours. Electric ones are a bit more — $40.", textZh: "普通车一天25，只骑几个小时的话15。电动的贵一点，40。", actionHint: "先说全天价再补充", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A standard one is fine. Does it come with a lock and a helmet?",
            textZh: "普通的就好。带锁和头盔吗？",
            culturalNote: "很多地方法律要求骑自行车戴头盔。即使不强制，也建议戴上。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, a lock and helmet are included. I'll also give you a map of bike-friendly routes in the area.",
            textZh: "是的，锁和头盔都包含在内。我还会给你一张这片区域的自行车友好路线地图。",
            keyPhrases: [
              { en: "included", zh: "包含在内" },
              { en: "bike-friendly routes", zh: "自行车友好路线" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, lock and helmet come with it. Here's a map of the best cycling routes around here too.", textZh: "对，锁和头盔都有。这是附近最好的骑行路线图。", actionHint: "轻松确认并提供地图", frequency: "common" },
              { textEn: "Everything's included — lock, helmet, the works. I'll throw in a route map so you know where to ride.", textZh: "都包括了——锁、头盔，全套。我再给你张路线图方便骑行。", actionHint: "强调全包并附赠", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Do I need to leave a deposit or show ID?",
            textZh: "好的。需要押金或出示证件吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'll need a credit card on file as a security deposit. We'll charge $25 today and hold $100 on the card until you return the bike.",
            textZh: "需要一张信用卡作为押金。今天扣25美元租金，信用卡预授权100美元直到还车。",
            keyPhrases: [
              { en: "security deposit", zh: "押金" },
              { en: "hold", zh: "预授权" },
            ],
            alternativeExpressions: [
              { textEn: "Just need a credit card for the deposit. We'll charge the rental fee now and put a $100 hold until the bike comes back.", textZh: "刷张信用卡做押金就行。现在扣租金，预留100到还车。", actionHint: "简洁说明流程", frequency: "common" },
              { textEn: "We take a card as security — $25 for the rental today, plus a $100 authorization that gets released when you bring it back.", textZh: "我们会刷卡做担保——今天25的租金，加100的预授权，还车就释放。", actionHint: "详细解释授权机制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What time do I need to return the bike by?",
            textZh: "几点前要还车？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We close at 6 PM. Just bring it back before then. If you're late, it's an extra $5 per hour.",
            textZh: "我们6点关门。之前还就行。晚了的话每小时加5美元。",
            keyPhrases: [
              { en: "close at 6 PM", zh: "6点关门" },
              { en: "extra $5 per hour", zh: "每小时加5美元" },
            ],
            alternativeExpressions: [
              { textEn: "We shut down at six. Get it back by then and you're all set. Late returns are five bucks an hour.", textZh: "六点打烊。之前还就没问题。迟了的话一小时五块。", actionHint: "口语化表达", frequency: "common" },
              { textEn: "Closing time is 6 PM. Any time before that works. After six, there's a $5 per hour late fee.", textZh: "关门时间是下午6点。6点前还都行。过了6点每小时收5美元超时费。", actionHint: "正式说明规则", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you adjust the seat height for me? I think it's a bit too high.",
            textZh: "能帮我调一下座位高度吗？好像有点太高了。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course. Let me lower it for you. Try sitting on it now — your feet should comfortably touch the ground.",
            textZh: "当然。我帮你降低一下。现在坐上去试试——脚应该能舒服地碰到地面。",
            keyPhrases: [
              { en: "adjust the seat height", zh: "调座位高度" },
              { en: "touch the ground", zh: "碰到地面" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing. Let me bring that down a bit. Hop on and see if your feet reach the ground comfortably.", textZh: "没问题。我给你调低点。骑上去看看脚能不能轻松着地。", actionHint: "热情帮忙", frequency: "common" },
              { textEn: "No problem. I'll adjust it right now. You want your toes touching the ground when you're seated — let me know how this feels.", textZh: "好的，我现在就调。坐上去脚尖碰到地面就对了——试试看合适不。", actionHint: "边调边指导", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "共享单车",
        titleEn: "Using Bike Share",
        description: "使用城市共享单车系统",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I want to use one of these shared bikes. How does the system work?",
            textZh: "请问，我想用这些共享单车。怎么操作？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You can either download the app or use the kiosk on the docking station. The app is easier if you have a phone.",
            textZh: "可以下载APP或者用停车桩上的终端。如果有手机的话APP更方便。",
            keyPhrases: [
              { en: "kiosk", zh: "终端" },
              { en: "docking station", zh: "停车桩" },
            ],
            alternativeExpressions: [
              { textEn: "Easiest way is the app on your phone. Otherwise, there's a screen on the dock where you can pay and unlock one.", textZh: "最简单是用手机APP。不然停车桩上有个屏幕可以付费解锁。", actionHint: "推荐APP优先", frequency: "common" },
              { textEn: "Just grab the app — it takes like two minutes to set up. Or if you prefer, the kiosk at the station works too.", textZh: "下载APP就行——两分钟搞定。不想下的话用站点的终端也可以。", actionHint: "强调APP便捷", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have the app. Do I just scan the QR code on the bike?",
            textZh: "我有APP了。直接扫车上的二维码就行吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Exactly. Scan the code, the lock will release, and you're good to go. You'll hear a click when it unlocks.",
            textZh: "没错。扫码后锁会自动打开就可以骑了。解锁时会听到咔嗒一声。",
            keyPhrases: [
              { en: "lock will release", zh: "锁会打开" },
              { en: "good to go", zh: "可以出发了" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, just scan and the lock pops open. You'll hear it click — then you're all set to ride.", textZh: "对，扫一下锁就弹开了。听到咔嗒声就可以骑了。", actionHint: "轻松确认", frequency: "common" },
              { textEn: "That's right. Point your camera at the QR code, wait for the click, and off you go. Super easy.", textZh: "没错。对着二维码扫一下，等咔嗒一声就能走了。超简单。", actionHint: "补充操作细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where do I return it? Does it have to be at this same station?",
            textZh: "在哪还车？必须还到这个站吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No, any docking station in the city. There are hundreds of them. The app shows you the nearest one with available spots.",
            textZh: "不用，城里任何一个停车桩都行。有好几百个。APP会显示最近的有空位的站点。",
            keyPhrases: [
              { en: "any docking station", zh: "任何停车桩" },
              { en: "available spots", zh: "有空位" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, you can drop it off at any station around the city. The app tells you which ones have open slots.", textZh: "不用，城里任何站都能还。APP会告诉你哪些有空位。", actionHint: "简洁回答", frequency: "common" },
              { textEn: "Any dock works — there's tons of them everywhere. Check the app for the closest one that has room.", textZh: "哪个桩都行——到处都是。APP上查最近有空位的就行。", actionHint: "随意回答", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I can't find an open dock to return the bike?",
            textZh: "如果找不到有空位的停车桩怎么办？",
            culturalNote: "共享单车热门区域经常满桩。APP通常可以帮你找附近有空位的站点。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "The app will suggest nearby stations. If all nearby ones are full, some systems give you extra time for free to find another spot.",
            textZh: "APP会推荐附近的站点。如果附近都满了，有些系统会免费延长时间让你找别的站。",
            keyPhrases: [
              { en: "nearby stations", zh: "附近的站点" },
              { en: "extra time", zh: "延长时间" },
            ],
            alternativeExpressions: [
              { textEn: "Check the app — it'll point you to the nearest stations with space. If they're all full, you usually get free extra minutes to find one.", textZh: "看APP——会指引你去有空位的站。都满的话一般会免费给你多几分钟去找。", actionHint: "实用建议", frequency: "common" },
              { textEn: "Don't worry, the app has a map of nearby docks. And if there's no room, most systems won't charge you for the extra time to ride to the next one.", textZh: "别担心，APP有附近停车桩的地图。没位子的话大多系统不会收你去下一个站的时间费。", actionHint: "安慰并解释", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does it cost? Is there a time limit?",
            textZh: "多少钱？有时间限制吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "A single ride is $4.49 for 30 minutes. After that, it's $0.26 per minute. A day pass for unlimited 30-minute rides is $19.",
            textZh: "单次骑行30分钟4.49美元。超出后每分钟0.26美元。日卡不限次30分钟骑行19美元。",
            keyPhrases: [
              { en: "single ride", zh: "单次骑行" },
              { en: "per minute", zh: "每分钟" },
              { en: "day pass", zh: "日卡" },
            ],
            alternativeExpressions: [
              { textEn: "One ride is about four-fifty for half an hour. Goes up after that. If you're riding a lot today, the $19 day pass is a better deal.", textZh: "一趟半小时大概四块五。超了就按时间加。如果今天骑得多，19块的日卡更划算。", actionHint: "推荐日卡", frequency: "common" },
              { textEn: "It's $4.49 per trip for the first 30 minutes, then 26 cents a minute after. Or grab a day pass for $19 — unlimited short rides.", textZh: "每趟前30分钟4.49，之后每分钟26美分。或者买个19块的日卡，不限次短途。", actionHint: "逐项报价", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 滑板车租赁 ====================
  {
    id: "transport-scooter-rental",
    category: "transport",
    titleZh: "租电动滑板车",
    titleEn: "Renting an Electric Scooter",
    description: "使用共享电动滑板车出行，了解操作方法和规则",
    otherRole: "路人",
    otherRoleIcon: "🛴",
    flows: [
      {
        id: "basic",
        titleZh: "使用共享滑板车",
        titleEn: "Using a Shared Scooter",
        description: "解锁和使用共享电动滑板车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I see these electric scooters everywhere. How do I rent one?",
            textZh: "请问，到处都看到这些电动滑板车。怎么租？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You need to download the app — Lime or Bird, whichever brand this is. Then scan the QR code on the handlebar.",
            textZh: "你需要下载APP——Lime或者Bird，看是什么牌子。然后扫车把上的二维码。",
            keyPhrases: [
              { en: "download the app", zh: "下载APP" },
              { en: "QR code", zh: "二维码" },
              { en: "handlebar", zh: "车把" },
            ],
            alternativeExpressions: [
              { textEn: "Get the app first — check the logo on the scooter to see if it's Lime or Bird. Then just scan the code on the handlebars.", textZh: "先下载APP——看车上的标志是Lime还是Bird。然后扫车把上的码就行。", actionHint: "分步指引", frequency: "common" },
              { textEn: "It's all through the app. Look at which brand it is, download that app, and scan the QR code right here on the handle.", textZh: "全通过APP操作。看是什么牌子，下那个APP，扫这里车把上的二维码。", actionHint: "指着车把说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Is it expensive? How do they charge?",
            textZh: "好的。贵吗？怎么收费？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Usually $1 to unlock and then about 30 to 40 cents per minute. A short trip of 10 minutes costs around $4 or $5.",
            textZh: "通常1美元解锁，然后每分钟大概30到40美分。骑10分钟大概4到5美元。",
            keyPhrases: [
              { en: "unlock", zh: "解锁" },
              { en: "per minute", zh: "每分钟" },
            ],
            alternativeExpressions: [
              { textEn: "A buck to start, then like 30 or 40 cents a minute. So a quick 10-minute ride runs you four or five dollars.", textZh: "一块钱起步，然后每分钟三四毛。骑个十分钟大概四五块。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "It's pretty affordable — $1 unlock fee plus around 35 cents per minute. Not too bad for short trips.", textZh: "挺便宜的——1美元解锁费加每分钟大概35美分。短途还行。", actionHint: "评价性价比", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are there rules about where I can ride? Like, can I ride on the sidewalk?",
            textZh: "骑行有什么规定吗？比如能在人行道上骑吗？",
            culturalNote: "很多城市禁止在人行道上骑电动滑板车，必须走自行车道或机动车道。违规可能被罚款。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "In most cities, you're supposed to ride in the bike lane. Sidewalk riding is usually not allowed and you could get fined.",
            textZh: "大多数城市规定要在自行车道上骑。在人行道上骑通常不允许，可能会被罚款。",
            keyPhrases: [
              { en: "bike lane", zh: "自行车道" },
              { en: "get fined", zh: "被罚款" },
            ],
            alternativeExpressions: [
              { textEn: "Stick to the bike lanes. Riding on the sidewalk can get you a ticket in most places around here.", textZh: "走自行车道。在人行道上骑的话大多数地方会被开罚单。", actionHint: "直接提醒", frequency: "common" },
              { textEn: "Yeah, you gotta use the bike lane. Sidewalks are off-limits for scooters — cops will fine you if they catch you.", textZh: "得走自行车道。人行道不让骑滑板车——被警察抓到会罚款。", actionHint: "强调执法风险", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to wear a helmet?",
            textZh: "需要戴头盔吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Legally it depends on the city, but it's strongly recommended. These things can go up to 15 miles per hour.",
            textZh: "法律上取决于城市，但强烈建议戴。这些车最快能到每小时15英里。",
            keyPhrases: [
              { en: "strongly recommended", zh: "强烈建议" },
              { en: "miles per hour", zh: "英里/小时" },
            ],
            alternativeExpressions: [
              { textEn: "Not always required by law, but you really should. They go faster than you think — up to 15 mph.", textZh: "法律不一定要求，但真的建议戴。比你想的快——最快15英里每小时。", actionHint: "真诚建议", frequency: "common" },
              { textEn: "Depends on local rules, but I'd wear one. These scooters hit 15 miles per hour, and a fall at that speed hurts.", textZh: "看当地规定，但我会戴。这些滑板车能到时速15英里，那个速度摔下来很疼。", actionHint: "以自身经验建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where do I leave it when I'm done? Anywhere?",
            textZh: "用完停哪？随便放吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Not anywhere. Park it upright on the sidewalk edge without blocking walkways. The app will show you designated parking zones.",
            textZh: "不是随便放。立着停在人行道边上，不要挡路。APP会显示指定停车区。",
            keyPhrases: [
              { en: "upright", zh: "立着" },
              { en: "designated parking zones", zh: "指定停车区" },
            ],
            alternativeExpressions: [
              { textEn: "Not just anywhere — you have to park in designated spots. The app shows you where. And make sure it's standing up, not on its side.", textZh: "不能随便放——得停在指定地点。APP上看在哪。确保竖着放，别倒了。", actionHint: "强调规范停放", frequency: "common" },
              { textEn: "There are specific parking areas — check the app. Just leave it standing upright and out of people's way.", textZh: "有专门的停车区——看APP。竖着停好别挡路就行。", actionHint: "简洁指导", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "滑板车出问题",
        titleEn: "Scooter Problems",
        description: "租的电动滑板车出现故障或问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I just unlocked this scooter but it won't move. The throttle isn't responding.",
            textZh: "我刚解锁了这辆滑板车但动不了。油门没反应。",
          },
          {
            speaker: "them",
            role: "客服热线",
            textEn: "Sorry about that. First, try kicking off with your foot to start — the motor only activates when you're already moving.",
            textZh: "抱歉。先试试用脚蹬地起步——电机只有在你已经在动的时候才会启动。",
            keyPhrases: [
              { en: "kicking off", zh: "蹬地起步" },
              { en: "throttle", zh: "油门" },
              { en: "motor", zh: "电机" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, that's a common issue. You have to push off with your foot first — the motor doesn't kick in until you're rolling.", textZh: "没事，很常见的问题。得先用脚蹬一下——动起来电机才会启动。", actionHint: "安慰并指导", frequency: "common" },
              { textEn: "These scooters need a push start. Give it a good kick to get moving, then twist the throttle. The motor won't work from a standstill.", textZh: "这些滑板车需要助跑起步。先用力蹬一脚动起来，再拧油门。站着不动电机不会工作。", actionHint: "详细解释原理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I tried that. Still nothing. The screen just shows a battery icon flashing.",
            textZh: "试了。还是不行。屏幕上电池图标一直闪。",
          },
          {
            speaker: "them",
            role: "客服热线",
            textEn: "That means the battery is too low to ride. You'll need to end this trip and find another scooter. We won't charge you for this one.",
            textZh: "那说明电量太低没法骑了。你需要结束这次行程找另一辆。这辆不会收费。",
            keyPhrases: [
              { en: "battery is too low", zh: "电量太低" },
              { en: "end this trip", zh: "结束行程" },
              { en: "won't charge you", zh: "不会收费" },
            ],
            alternativeExpressions: [
              { textEn: "Sounds like the battery's dead on that one. Just end the ride in the app and grab a different scooter. No charge for this one.", textZh: "看来这辆没电了。在APP里结束行程换一辆就行。这辆不收钱。", actionHint: "快速解决方案", frequency: "common" },
              { textEn: "A flashing battery icon means it's out of juice. Close out the trip and try another one nearby — we'll refund the unlock fee.", textZh: "电池图标闪说明没电了。结束行程找附近另一辆——解锁费会退给你。", actionHint: "解释并保证退费", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I end the trip in the app? And will I get my unlock fee back?",
            textZh: "在APP里怎么结束行程？解锁费能退吗？",
          },
          {
            speaker: "them",
            role: "客服热线",
            textEn: "Tap 'End Ride' in the app and select 'Report Issue.' The unlock fee and any charges will be automatically refunded.",
            textZh: "在APP里点'结束骑行'然后选'报告问题'。解锁费和所有费用会自动退还。",
            keyPhrases: [
              { en: "End Ride", zh: "结束骑行" },
              { en: "Report Issue", zh: "报告问题" },
              { en: "automatically refunded", zh: "自动退还" },
            ],
            alternativeExpressions: [
              { textEn: "Hit 'End Ride' and then 'Report Issue' in the app. Your money gets refunded automatically — the whole thing.", textZh: "点结束骑行，然后点报告问题。钱会自动退——全退。", actionHint: "简单直接", frequency: "common" },
              { textEn: "Open the app, end the trip, and file an issue report. Everything you've been charged will be reversed automatically.", textZh: "打开APP，结束行程，提交问题报告。收的费用都会自动退回。", actionHint: "正式流程说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "There's another scooter nearby but the brake lever looks broken. Should I report that too?",
            textZh: "附近还有一辆但刹车把看起来坏了。也需要报告吗？",
          },
          {
            speaker: "them",
            role: "客服热线",
            textEn: "Please do! You can report damaged scooters in the app without unlocking them. It helps us take them out of service.",
            textZh: "请报告！不用解锁就可以在APP里报告损坏的车。这帮助我们把它们下线维修。",
            keyPhrases: [
              { en: "damaged", zh: "损坏的" },
              { en: "out of service", zh: "停用/下线" },
            ],
            alternativeExpressions: [
              { textEn: "Yes, please report it! There's an option in the app to flag damaged scooters — you don't even need to unlock them.", textZh: "请报告！APP里有标记损坏车辆的选项——不用解锁就能报。", actionHint: "感谢并说明操作", frequency: "common" },
              { textEn: "That would be super helpful. Just open the app, tap on that scooter's ID, and hit 'Report Damage.' We'll pull it for repairs.", textZh: "那太有帮助了。打开APP，点那辆车的编号，选报告损坏。我们会回收维修。", actionHint: "详细操作步骤", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I found a good one now. One more question — what if I get a flat tire while riding?",
            textZh: "找到一辆好的了。再问一下——骑的时候爆胎了怎么办？",
          },
          {
            speaker: "them",
            role: "客服热线",
            textEn: "Pull over safely, end the ride, and report the issue. We won't charge you for the remaining time. Don't try to ride on a flat tire.",
            textZh: "安全靠边停下，结束行程，报告问题。不会收剩余时间的费。不要继续骑爆胎的车。",
            keyPhrases: [
              { en: "pull over", zh: "靠边停" },
              { en: "flat tire", zh: "爆胎" },
            ],
            alternativeExpressions: [
              { textEn: "Stop right away somewhere safe, close out the ride, and let us know. We won't charge you. Whatever you do, don't keep riding on a flat.", textZh: "马上找安全的地方停下来，结束行程告诉我们。不会收费。千万别继续骑爆胎的车。", actionHint: "紧急安全提醒", frequency: "common" },
              { textEn: "First thing — get off the road safely. Then end the trip in the app and report the flat. No extra charge, and we'll send someone to collect it.", textZh: "首先安全离开路面。然后在APP里结束行程报告爆胎。不额外收费，我们会派人去收。", actionHint: "分步处理指引", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 停车 ====================
  {
    id: "transport-car-parking",
    category: "transport",
    titleZh: "找停车位",
    titleEn: "Finding Parking",
    description: "在城市里找停车位，了解停车规则和付费方式",
    otherRole: "停车场管理员",
    otherRoleIcon: "🅿️",
    flows: [
      {
        id: "basic",
        titleZh: "路边停车",
        titleEn: "Street Parking",
        description: "在城市街道找停车位并付费",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, can I park on this street? I can't tell what the signs mean.",
            textZh: "请问，这条街可以停车吗？我看不懂这些标志。",
            culturalNote: "美国路边停车标志很复杂，注意看颜色、时间限制和清扫日期，违规拖车很常见。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "This sign means two-hour parking from 8 AM to 6 PM, Monday through Saturday. After 6 and on Sundays, it's free.",
            textZh: "这个标志是周一到周六早8点到晚6点限停两小时。6点以后和周日免费。",
            keyPhrases: [
              { en: "two-hour parking", zh: "限停两小时" },
              { en: "Monday through Saturday", zh: "周一到周六" },
            ],
            alternativeExpressions: [
              { textEn: "So basically, you can park here for up to two hours on weekdays between 8 and 6. Evenings and Sundays are free — no limit.", textZh: "基本上工作日8点到6点可以停两小时。晚上和周日免费，不限时。", actionHint: "用自己的话解释", frequency: "common" },
              { textEn: "It's a two-hour max, Monday to Saturday, during the day. After six o'clock and all day Sunday, park as long as you want.", textZh: "周一到周六白天最多停两小时。6点以后和整个周日随便停多久。", actionHint: "分时段说明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How do I pay? I don't see a parking meter.",
            textZh: "怎么付费？我没看到咪表。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Most meters here are digital now. See that box on the pole? You can pay with coins, card, or the ParkMobile app.",
            textZh: "这里大多数咪表都数字化了。看到杆子上那个盒子吗？可以用硬币、刷卡或ParkMobile APP付费。",
            keyPhrases: [
              { en: "digital", zh: "数字化的" },
              { en: "coins", zh: "硬币" },
            ],
            alternativeExpressions: [
              { textEn: "See that digital meter on the pole? Just tap your card or use the ParkMobile app. Coins work too if you have them.", textZh: "看到杆子上那个电子咪表了吗？刷卡或用ParkMobile APP就行。有硬币也可以。", actionHint: "指向设备说明", frequency: "common" },
              { textEn: "Everything's gone digital around here. That box on the pole takes cards, coins, or the app. The app is honestly the easiest.", textZh: "这里都数字化了。杆子上那个盒子接受刷卡、硬币或APP。说实话APP最方便。", actionHint: "推荐APP方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll use the app. Do I need to display anything on my dashboard?",
            textZh: "我用APP好了。需要在仪表盘上放什么吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No, the app is linked to your license plate. The parking officers check it electronically.",
            textZh: "不用，APP跟你的车牌绑定了。停车管理员会电子查验。",
            keyPhrases: [
              { en: "license plate", zh: "车牌" },
              { en: "parking officers", zh: "停车管理员" },
            ],
            alternativeExpressions: [
              { textEn: "Nope, it's all tied to your plate number. The parking cops scan plates — they'll see you've paid.", textZh: "不用，都跟你的车牌号绑定了。停车巡查员扫车牌就能看到你付了。", actionHint: "简洁解释", frequency: "common" },
              { textEn: "No need to display anything. Your license plate is registered in the app, so enforcement checks it digitally.", textZh: "不需要展示什么。车牌注册在APP里了，执法人员电子查验。", actionHint: "正式说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What happens if I overstay the two hours?",
            textZh: "超过两小时会怎样？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You'll get a parking ticket. In this city, it's usually $65 for an expired meter. And if you're in a tow-away zone, they'll tow your car.",
            textZh: "会收到罚单。这个城市咪表过期通常罚65美元。如果在禁停区，车会被拖走。",
            keyPhrases: [
              { en: "parking ticket", zh: "罚单" },
              { en: "expired meter", zh: "咪表过期" },
              { en: "tow-away zone", zh: "禁停区/拖车区" },
            ],
            alternativeExpressions: [
              { textEn: "You'd get a ticket — around $65 here for overtime parking. And watch out for tow-away zones, or your car might be gone when you come back.", textZh: "会被贴罚单——这边超时停车大概罚65。注意拖车区，不然回来车就没了。", actionHint: "警告后果", frequency: "common" },
              { textEn: "They're pretty strict here. Expired meter is a $65 fine, and in some spots, they'll straight up tow your car.", textZh: "这里查得挺严。咪表过期罚65块，有些地方直接给你拖走。", actionHint: "强调严格执法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Can the app remind me before my time runs out?",
            textZh: "了解了。APP能在时间快到的时候提醒我吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yes, it sends a notification 15 minutes before expiry. You can even extend your time remotely from the app.",
            textZh: "会的，到期前15分钟会发通知。你还可以在APP上远程续时。",
            keyPhrases: [
              { en: "notification", zh: "通知" },
              { en: "extend your time", zh: "续时" },
              { en: "remotely", zh: "远程" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, you'll get a push notification with 15 minutes left. Best part is you can add more time right from your phone.", textZh: "会的，剩15分钟时会收到推送。最方便的是可以直接在手机上加时间。", actionHint: "推荐APP功能", frequency: "common" },
              { textEn: "It alerts you before your time runs out — about 15 minutes before. And you don't even need to go back to the meter to extend it.", textZh: "时间快到前会提醒你——大概提前15分钟。续费都不用跑回咪表那里。", actionHint: "强调便捷性", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "停车场停车",
        titleEn: "Parking Garage",
        description: "在停车场停车，了解收费和取车流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is there space available in this parking garage?",
            textZh: "你好，这个停车场还有位子吗？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn: "Yes, we still have spots on levels 3 and 4. Take a ticket at the gate and follow the signs for open spaces.",
            textZh: "有的，3楼和4楼还有位子。在入口取票，跟着指示找空位。",
            keyPhrases: [
              { en: "levels", zh: "楼层" },
              { en: "take a ticket", zh: "取票" },
              { en: "open spaces", zh: "空位" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, there's still room on the third and fourth floors. Grab a ticket from the machine at the entrance and head up.", textZh: "有的，三楼和四楼还有空位。在入口机器取张票然后上去。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "Plenty of space left on levels 3 and 4. Pull a ticket at the gate — the green lights will show you where to find a spot.", textZh: "3楼4楼还有很多位子。在闸口取票——绿灯会告诉你哪里有空位。", actionHint: "提供额外导航信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does parking cost per hour? And is there a daily maximum?",
            textZh: "每小时停车费多少？有日封顶价吗？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn: "It's $8 per hour with a daily max of $35. If you're here for an event, we have a flat rate of $25 for the evening.",
            textZh: "每小时8美元，日封顶35美元。如果是来看活动的，晚上有25美元的固定价。",
            keyPhrases: [
              { en: "daily max", zh: "日封顶" },
              { en: "flat rate", zh: "固定价" },
            ],
            alternativeExpressions: [
              { textEn: "Eight bucks an hour, tops out at $35 for the day. There's an event rate tonight though — $25 flat.", textZh: "一小时八块，一天最多35。不过今晚有活动价——一口价25。", actionHint: "口语化报价", frequency: "common" },
              { textEn: "Hourly rate is $8, capped at $35 per day. If you're attending an event here, we offer a flat $25 evening rate.", textZh: "小时费率8美元，日封顶35。如果是来参加活动的，我们有晚间一口价25美元。", actionHint: "正式报价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll probably be here for about three hours. Do I pay when I leave?",
            textZh: "我大概停三个小时。离开时付吗？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn: "Yes, pay at the machine near the elevators before you get your car, or at the exit gate. We accept cash and cards.",
            textZh: "是的，取车前在电梯旁的机器付，或者在出口闸付。现金和卡都收。",
            keyPhrases: [
              { en: "pay at the machine", zh: "在机器付费" },
              { en: "exit gate", zh: "出口闸" },
            ],
            alternativeExpressions: [
              { textEn: "You pay when you leave. There's a pay station by the elevators, or just insert your ticket at the exit. Cash and cards both work.", textZh: "走的时候付。电梯旁有自助缴费机，或者在出口插票付也行。现金和卡都可以。", actionHint: "给出两种选择", frequency: "common" },
              { textEn: "Pay before you drive out — use the machines by the elevator or tap your card at the exit gate. Either way works.", textZh: "开走之前付费——用电梯旁的机器或者在出口闸刷卡。都行。", actionHint: "简洁说明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there validation if I'm shopping at the mall attached to this garage?",
            textZh: "如果我在旁边的商场购物，能免停车费吗？",
            culturalNote: "美国很多商场、餐厅会提供parking validation，在店里消费后可以免费或打折停车。",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn: "Yes! If you spend $25 or more at any store, they'll validate your ticket for two hours of free parking. Just ask at the register.",
            textZh: "可以！在任何店消费25美元以上，他们会帮你盖章，免两小时停车费。在收银台说一下就行。",
            keyPhrases: [
              { en: "validate your ticket", zh: "帮你盖章/验证" },
              { en: "at the register", zh: "在收银台" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Spend $25 or more and get your ticket stamped at checkout — that's two hours of parking for free.", textZh: "当然。消费25以上在结账时让他们盖个章——两小时免费停车。", actionHint: "强调优惠", frequency: "common" },
              { textEn: "Sure, we do validation. Any purchase over $25 gets you two free hours. Just hand your ticket to the cashier when you pay.", textZh: "有的，我们做验证。消费超过25美元就有两小时免费停车。付款时把停车票给收银员就行。", actionHint: "确认并说明流程", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. One more thing — I can't remember which level I parked on. Any way to find my car?",
            textZh: "好的。还有——我忘了停在哪层了。有办法找到我的车吗？",
          },
          {
            speaker: "them",
            role: "管理员",
            textEn: "Take a photo of the level sign next time! But for now, check your ticket — it usually prints the level. Or I can look up your plate number in our system.",
            textZh: "下次拍个楼层标志的照片！不过现在看看你的票——通常会打印楼层。或者我在系统里查你的车牌号。",
            keyPhrases: [
              { en: "look up", zh: "查找" },
              { en: "plate number", zh: "车牌号" },
            ],
            alternativeExpressions: [
              { textEn: "Pro tip — snap a pic of the level number next time! For now, your ticket might have it printed on there. Or give me your plate, I'll check.", textZh: "小技巧——下次拍个楼层号的照片！现在看看票上有没有印。或者告诉我车牌我帮你查。", actionHint: "给建议并帮忙", frequency: "common" },
              { textEn: "Happens all the time! Check the ticket — it should show which floor. If not, tell me your license plate and I'll pull it up on the computer.", textZh: "经常有人这样！看看票——应该有楼层信息。没有的话告诉我车牌号我在电脑上查。", actionHint: "表示理解并提供帮助", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 收费站 ====================
  {
    id: "transport-car-toll",
    category: "transport",
    titleZh: "过收费站",
    titleEn: "Paying a Toll",
    description: "驾车经过高速公路或桥梁收费站，了解付费方式",
    otherRole: "收费员",
    otherRoleIcon: "🛣️",
    flows: [
      {
        id: "basic",
        titleZh: "通过收费站",
        titleEn: "Passing Through a Toll",
        description: "在收费站付费通过",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, how much is the toll? I'm heading to the other side of the bridge.",
            textZh: "你好，过桥费多少？我要过桥到对面。",
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "The toll is $7.50 for cars. Do you have an E-ZPass or will you be paying cash?",
            textZh: "小汽车7.50美元。你有E-ZPass电子标签还是付现金？",
            keyPhrases: [
              { en: "toll", zh: "过路费/过桥费" },
              { en: "E-ZPass", zh: "电子标签" },
            ],
            alternativeExpressions: [
              { textEn: "Seven-fifty for a car. Cash or E-ZPass?", textZh: "小汽车七块五。现金还是E-ZPass？", actionHint: "简短收费", frequency: "common" },
              { textEn: "That'll be $7.50. Got an E-ZPass on your windshield, or you paying another way?", textZh: "7块5。挡风玻璃上有E-ZPass吗，还是用其他方式付？", actionHint: "检查是否有标签", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I don't have E-ZPass. I'm in a rental car. Can I pay with a credit card?",
            textZh: "我没有E-ZPass。开的是租的车。能刷信用卡吗？",
            culturalNote: "很多收费站已经不收现金了，只有电子标签和自动拍照收费。租车通常有临时电子标签。",
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "We accept cards at this booth. But heads up — some toll plazas on this highway are cashless. They photograph your plate and bill you later.",
            textZh: "这个窗口可以刷卡。但注意——这条高速上有些收费站是无人的。它们会拍车牌然后寄账单。",
            keyPhrases: [
              { en: "cashless", zh: "无现金的" },
              { en: "photograph your plate", zh: "拍车牌" },
              { en: "bill you later", zh: "事后寄账单" },
            ],
            alternativeExpressions: [
              { textEn: "Cards are fine here. Just be aware, some tolls ahead are all-electronic — no booths. They'll snap your plate and send a bill.", textZh: "这里可以刷卡。提醒一下，前面有些收费站全自动的——没有窗口。会拍车牌寄账单。", actionHint: "友善提醒", frequency: "common" },
              { textEn: "Sure, I can take your card. But watch out further down the highway — there are cashless tolls that just photograph your license plate.", textZh: "可以刷卡。但往前开注意——有些无人收费站只拍车牌。", actionHint: "收费并提醒前方", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will the bill go to the rental company? Or directly to me?",
            textZh: "账单会寄到租车公司还是直接给我？",
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "It'll go to the rental company, and they'll charge your card on file. They may add an administrative fee, so it's cheaper to pay here.",
            textZh: "会寄到租车公司，然后从你预留的卡扣款。他们可能加管理费，所以在这里付更便宜。",
            keyPhrases: [
              { en: "administrative fee", zh: "管理费" },
              { en: "card on file", zh: "预留的卡" },
            ],
            alternativeExpressions: [
              { textEn: "The rental company gets the bill, then charges your card — usually with an extra service fee on top. Better to just pay it now.", textZh: "租车公司收到账单，然后从你卡上扣——通常还加个服务费。现在付更划算。", actionHint: "建议当场付", frequency: "common" },
              { textEn: "If you don't pay here, it goes to the rental agency. They pass it on to you plus a handling charge. So paying now saves you money.", textZh: "这里不付的话会发到租车公司。他们转给你还加手续费。所以现在付省钱。", actionHint: "解释省钱原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Then I'll pay here. Is the toll the same both ways, or only one direction?",
            textZh: "那我在这付。两个方向都收费吗？还是只收一个方向？",
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "This bridge only charges in one direction — coming this way. You won't pay going back.",
            textZh: "这座桥只收一个方向——就是你现在这个方向。回去不收。",
            keyPhrases: [
              { en: "one direction", zh: "单向收费" },
              { en: "going back", zh: "回去" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — the toll is one-way only. You pay now crossing over, but coming back is free.", textZh: "好消息——只收单向的。现在过去付一次，回来免费。", actionHint: "告知好消息", frequency: "common" },
              { textEn: "It's only collected in this direction. The return trip across the bridge is free, so don't worry about that.", textZh: "只有这个方向收费。回程过桥免费，不用担心。", actionHint: "简洁说明", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Here's my card. Do I get a receipt?",
            textZh: "明白了。给你卡。有收据吗？",
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "Here's your receipt. Have a safe drive. The speed limit drops to 45 right after the bridge, so watch out.",
            textZh: "这是收据。开车小心。过桥后限速降到45，注意一下。",
            keyPhrases: [
              { en: "receipt", zh: "收据" },
              { en: "speed limit drops", zh: "限速降低" },
            ],
            alternativeExpressions: [
              { textEn: "There you go — your receipt. Drive safe, and slow down after the bridge. Speed limit goes to 45 and there's often a cop sitting there.", textZh: "给你收据。开车注意，过桥后减速。限速变45，那儿经常有警察蹲点。", actionHint: "友善警告", frequency: "common" },
              { textEn: "All set. Here's your receipt. Just a heads-up — the speed drops to 45 right on the other side of the bridge. Safe travels!", textZh: "好了。收据给你。提醒一下——桥对面限速马上变45。一路平安！", actionHint: "道别并提醒", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "误走收费道",
        titleEn: "Accidental Toll Lane",
        description: "误入E-ZPass专用道或不确定收费的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Oh no, I accidentally drove through the E-ZPass lane and I don't have one. What do I do?",
            textZh: "糟糕，我不小心走了E-ZPass专用道但我没有标签。怎么办？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Don't worry. A camera captured your license plate. You'll receive a bill in the mail within a few weeks.",
            textZh: "别担心。摄像头已经拍了你的车牌。几周内会收到邮寄账单。",
            keyPhrases: [
              { en: "captured your license plate", zh: "拍了你的车牌" },
              { en: "bill in the mail", zh: "邮寄账单" },
            ],
            alternativeExpressions: [
              { textEn: "It's fine, happens all the time. The camera got your plate, and you'll get a bill mailed to you in a couple of weeks.", textZh: "没事，经常有人这样。摄像头拍了你的车牌，过两周会收到邮寄账单。", actionHint: "安慰常见情况", frequency: "common" },
              { textEn: "No big deal. They snapped a photo of your plate automatically. Expect a toll bill in the mail within two to three weeks.", textZh: "没什么大事。它们自动拍了你车牌的照片。两到三周内会收到过路费账单。", actionHint: "淡化焦虑", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will there be an extra penalty for not having E-ZPass?",
            textZh: "没有E-ZPass会有额外罚款吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "The toll amount will be the same, but there's usually a $1.50 processing fee for pay-by-mail. No real penalty.",
            textZh: "过路费金额一样，但邮寄付款通常有1.50美元的手续费。没有真正的罚款。",
            keyPhrases: [
              { en: "processing fee", zh: "手续费" },
              { en: "pay-by-mail", zh: "邮寄付款" },
            ],
            alternativeExpressions: [
              { textEn: "Same toll — just an extra buck-fifty for the processing. It's not a fine or anything, just a small service charge.", textZh: "过路费一样——就多一块五的手续费。不是罚款什么的，就一小笔服务费。", actionHint: "解释不是罚款", frequency: "common" },
              { textEn: "You'll pay the regular toll plus about $1.50 in processing fees. No penalty though — it's just the cost of pay-by-mail.", textZh: "付正常过路费加大约1.50的手续费。没有罚款——就是邮寄付款的费用。", actionHint: "明确费用构成", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I pay it online instead of waiting for the mail?",
            textZh: "能在线付吗？不想等邮件。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, go to our website within 48 hours, enter your plate number, and pay the toll there. That avoids the extra fee.",
            textZh: "可以，48小时内上我们网站，输入车牌号，在线付就行。这样还能免掉手续费。",
            keyPhrases: [
              { en: "within 48 hours", zh: "48小时内" },
              { en: "avoids the extra fee", zh: "免掉手续费" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Just hop on our website in the next 48 hours, punch in your plate, and pay online. No processing fee that way.", textZh: "完全可以。48小时内上我们网站，输入车牌号在线付。这样就不用付手续费。", actionHint: "鼓励在线付", frequency: "common" },
              { textEn: "If you pay through the website within two days, you skip the mail fee entirely. Just search by your plate number.", textZh: "两天内通过网站付的话就完全不用付邮寄费。用车牌号搜就行。", actionHint: "强调省钱", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm driving a rental. Will this cause problems with the rental company?",
            textZh: "我开的是租的车。这会导致租车公司那边出问题吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "If you don't pay within 48 hours, the bill goes to the rental company. They'll charge you the toll plus their own handling fee, usually around $15.",
            textZh: "如果48小时内不付，账单会发到租车公司。他们会收过路费加自己的手续费，通常大约15美元。",
            keyPhrases: [
              { en: "handling fee", zh: "手续费" },
            ],
            alternativeExpressions: [
              { textEn: "After 48 hours it gets sent to the rental company, and trust me, they add their own fee — usually around fifteen bucks on top of the toll.", textZh: "超过48小时就发到租车公司了，相信我，他们会加自己的费用——通常过路费上面再加15块左右。", actionHint: "建议尽快处理", frequency: "common" },
              { textEn: "If you wait too long, the rental company gets billed. They pass it along to you with about a $15 admin charge. Way cheaper to pay now.", textZh: "等太久的话租车公司会收到账单。他们转给你还加大概15块的管理费。现在付便宜多了。", actionHint: "对比费用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay online right away then. What's the website?",
            textZh: "那我马上在线付。网址是什么？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "It's on the signs you passed — tollbypay.com. Enter your plate, select today's date, and you'll see the charge. Easy process.",
            textZh: "你路过的标志上有——tollbypay.com。输入车牌，选今天日期，就能看到费用。很简单。",
            keyPhrases: [
              { en: "signs you passed", zh: "你路过的标志" },
            ],
            alternativeExpressions: [
              { textEn: "The website is tollbypay.com — it was on those big signs on the highway. Just type in your plate and today's date. Takes two minutes.", textZh: "网址是tollbypay.com——高速上那些大标志上写着。输车牌和今天日期就行。两分钟搞定。", actionHint: "引导操作", frequency: "common" },
              { textEn: "Head to tollbypay.com. Pop in your license plate number and the date, and it'll pull up your toll. Super straightforward.", textZh: "上tollbypay.com。输入车牌号和日期，就会显示你的过路费。很直接。", actionHint: "简化说明", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 抛锚 ====================
  {
    id: "transport-car-breakdown",
    category: "transport",
    titleZh: "车辆抛锚",
    titleEn: "Car Breakdown",
    description: "在路上车辆抛锚，呼叫救援和与拖车公司沟通",
    otherRole: "道路救援",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "呼叫道路救援",
        titleEn: "Calling Roadside Assistance",
        description: "车坏在路上打电话求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, my car broke down on the highway. I need roadside assistance. I'm on I-95 heading north near exit 42.",
            textZh: "你好，我的车在高速上抛锚了。我需要道路救援。我在I-95北行方向42出口附近。",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "I'm sorry to hear that. Can you describe what happened? Is the car completely stopped or is the engine still running?",
            textZh: "很抱歉。能描述一下什么情况吗？车完全停了还是发动机还在运转？",
            keyPhrases: [
              { en: "broke down", zh: "抛锚了" },
              { en: "roadside assistance", zh: "道路救援" },
              { en: "engine", zh: "发动机" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry about that. What's going on with the car? Is it completely dead, or is the engine still turning over?", textZh: "哦不，很抱歉。车是什么情况？完全不动了，还是发动机还能转？", actionHint: "关切询问", frequency: "common" },
              { textEn: "That's no fun. Tell me what happened — did it just stop running, or can you still start the engine?", textZh: "那可不好。跟我说说怎么了——是直接熄火了，还是发动机还能启动？", actionHint: "了解具体情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The engine just died. I heard a loud noise and then it stopped. I managed to pull over to the shoulder.",
            textZh: "发动机突然熄火了。听到很大的声音然后就停了。我设法停到了路肩。",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Good that you got to the shoulder safely. Turn on your hazard lights and stay inside the car. We'll send a tow truck to your location.",
            textZh: "好的，安全停到路肩就好。打开双闪灯待在车里。我们会派拖车到你的位置。",
            keyPhrases: [
              { en: "hazard lights", zh: "双闪灯" },
              { en: "shoulder", zh: "路肩" },
              { en: "tow truck", zh: "拖车" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you made it to the shoulder. Keep your hazards on, stay in the vehicle, and we'll get a tow truck out to you.", textZh: "好在你停到路肩了。开着双闪，待在车里，我们派拖车去接你。", actionHint: "确认安全并调度", frequency: "common" },
              { textEn: "Okay, you're safe on the shoulder — that's the important thing. Flashers on, stay put, and I'm dispatching a tow truck now.", textZh: "好，你在路肩上安全了——这最重要。打开双闪，别动，我现在就派拖车。", actionHint: "即时调度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take for the tow truck to arrive?",
            textZh: "拖车大概多久能到？",
            culturalNote: "在美国高速上抛锚，要打开双闪灯和放三角警示牌。尽量待在车内等救援。",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Based on your location, about 30 to 45 minutes. The driver will call you when they're close.",
            textZh: "根据你的位置，大概30到45分钟。司机快到时会打电话给你。",
            keyPhrases: [
              { en: "based on your location", zh: "根据你的位置" },
            ],
            alternativeExpressions: [
              { textEn: "Looking at where you are, I'd say about half an hour to 45 minutes. The tow driver will give you a ring when he's nearby.", textZh: "看你的位置，大概半小时到45分钟。拖车司机快到了会给你打电话。", actionHint: "估算到达时间", frequency: "common" },
              { textEn: "Probably 30 to 45 minutes from now. Hang tight — the driver will call you once they're a few minutes out.", textZh: "大概现在开始30到45分钟。坚持一下——司机还有几分钟就到时会打电话给你。", actionHint: "安抚等待", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is a rental car. Will the rental company cover the towing cost?",
            textZh: "这是租的车。租车公司会承担拖车费吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Most rental companies include basic roadside assistance. I'd suggest calling them too to let them know about the situation.",
            textZh: "大部分租车公司包含基本道路救援。建议你也打电话通知他们。",
            keyPhrases: [
              { en: "include", zh: "包含" },
              { en: "let them know", zh: "通知他们" },
            ],
            alternativeExpressions: [
              { textEn: "Rental cars usually come with roadside assistance included. Give the rental company a call too — they should know what's going on.", textZh: "租的车通常都包含道路救援。也给租车公司打个电话——他们得知道情况。", actionHint: "建议通知租车公司", frequency: "common" },
              { textEn: "You're probably covered through the rental company. But either way, you'll want to call them and report the breakdown.", textZh: "租车公司那边应该是包的。不管怎样，都应该打电话给他们报告抛锚的事。", actionHint: "确认保障并建议报告", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where will the car be towed to? Can I choose the repair shop?",
            textZh: "车会被拖到哪？我能选修理厂吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Since it's a rental, the rental company usually has a preferred shop. Call them and they'll tell the tow driver where to go.",
            textZh: "因为是租的车，租车公司通常有指定的修理厂。打电话给他们，他们会告诉拖车司机去哪。",
            keyPhrases: [
              { en: "preferred shop", zh: "指定的修理厂" },
            ],
            alternativeExpressions: [
              { textEn: "For a rental, the company usually picks the repair shop. Best to call them first — they'll tell us where to tow it.", textZh: "租的车的话，公司通常会指定修理厂。最好先打电话给他们——他们会告诉我们拖去哪。", actionHint: "建议先联系租车公司", frequency: "common" },
              { textEn: "With a rental, you don't get to choose. The rental company has their own shops they work with. Give them a call and they'll direct the tow.", textZh: "租车的话你没法自己选。租车公司有自己合作的店。打电话给他们，他们会指挥拖车。", actionHint: "解释租车流程", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "轮胎爆了",
        titleEn: "Flat Tire on the Road",
        description: "在路上轮胎爆了，寻求帮助或自己更换",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a flat tire on a country road. I'm not sure how to change it. Can you send someone to help?",
            textZh: "你好，我在一条乡间路上轮胎爆了。我不太会换胎。能派人来帮忙吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Of course. Can you tell me your exact location? A street name, nearby landmark, or GPS coordinates?",
            textZh: "当然。能告诉我你的准确位置吗？街道名、附近地标或GPS坐标？",
            keyPhrases: [
              { en: "exact location", zh: "准确位置" },
              { en: "landmark", zh: "地标" },
              { en: "GPS coordinates", zh: "GPS坐标" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, we'll send someone. Where exactly are you? Can you see any road signs, mile markers, or anything nearby?", textZh: "好的，我们派人过去。你到底在哪？能看到路标、里程碑或者附近什么东西吗？", actionHint: "帮助定位", frequency: "common" },
              { textEn: "Absolutely. I just need to know where you are. A cross street, a business nearby, or drop me your GPS pin if you can.", textZh: "没问题。我需要知道你在哪。路口名字、附近的店或者发个GPS定位给我都行。", actionHint: "给出多种定位方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm on Route 7, about two miles past the gas station near Greenfield. I can share my GPS location from my phone.",
            textZh: "我在7号公路上，过了格林菲尔德的加油站大约两英里。我可以用手机分享GPS位置。",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "That helps. Does your car have a spare tire? It's usually in the trunk under the floor panel.",
            textZh: "那就好。你的车有备胎吗？通常在后备箱地板下面。",
            keyPhrases: [
              { en: "spare tire", zh: "备胎" },
              { en: "trunk", zh: "后备箱" },
              { en: "floor panel", zh: "地板面板" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. Check your trunk — there should be a spare tire underneath the floor mat. Most cars come with one.", textZh: "明白了。看看后备箱——地垫下面应该有个备胎。大部分车都有。", actionHint: "引导检查", frequency: "common" },
              { textEn: "Okay, good. First thing — pop the trunk and lift up the panel at the bottom. You'll probably find a spare tire and a jack in there.", textZh: "好的。第一步——打开后备箱，掀起底部的面板。里面应该有备胎和千斤顶。", actionHint: "逐步指引", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I found it, but I've never changed a tire before. Is it complicated?",
            textZh: "找到了，但我从来没换过胎。复杂吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "If you're comfortable trying, I can walk you through it over the phone. Otherwise, our technician will be there in about 40 minutes.",
            textZh: "如果你愿意试的话，我可以在电话里教你。否则我们的技师大约40分钟到。",
            keyPhrases: [
              { en: "walk you through", zh: "指导你" },
              { en: "technician", zh: "技师" },
            ],
            alternativeExpressions: [
              { textEn: "I can talk you through it step by step if you want to give it a try. Or if you'd rather wait, we've got a guy about 40 minutes away.", textZh: "如果你想试的话我可以一步步教你。或者你愿意等的话，我们有个人大概40分钟能到。", actionHint: "给出两个选择", frequency: "common" },
              { textEn: "Up to you — I can guide you through the change right now on the phone, or a tech can be out there in about 40 minutes.", textZh: "看你——我现在就可以在电话里指导你换，或者技师大约40分钟到你那。", actionHint: "尊重选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd rather wait for the technician. Is there a charge for changing a flat tire?",
            textZh: "我还是等技师来好了。换胎要收费吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "It's covered if you have roadside assistance through your insurance or rental agreement. Otherwise, the service call is about $75.",
            textZh: "如果你的保险或租车协议包含道路救援就免费。否则上门服务大约75美元。",
            alternativeExpressions: [
              { textEn: "If your rental or insurance includes roadside assistance, it's free. If not, it'll run you about $75 for the service call.", textZh: "如果你的租车或保险包含道路救援就免费。不包含的话上门服务大概75美元。", actionHint: "区分有无保险", frequency: "common" },
              { textEn: "Depends on your coverage. Roadside assistance customers pay nothing. Without it, the flat fee is around $75.", textZh: "取决于你的保障。有道路救援的不用付钱。没有的话固定费用大约75。", actionHint: "简明费用说明", frequency: "occasional" },
            ],
            keyPhrases: [
              { en: "covered", zh: "涵盖/免费" },
              { en: "service call", zh: "上门服务" },
            ],
          },
          {
            speaker: "you",
            textEn: "My rental company should cover it. Can I drive on the spare tire to the nearest town?",
            textZh: "租车公司应该包含的。用备胎能开到最近的镇上吗？",
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Yes, but spare tires are only meant for short distances — under 50 miles — and keep your speed below 50 mph. Get it replaced as soon as possible.",
            textZh: "可以，但备胎只能短距离使用——不超过50英里——而且速度不要超过50迈。尽快换掉。",
            keyPhrases: [
              { en: "spare tires", zh: "备胎" },
              { en: "short distances", zh: "短距离" },
              { en: "below 50 mph", zh: "50迈以下" },
            ],
            alternativeExpressions: [
              { textEn: "You can drive on it, but only for a short distance — like 50 miles max. And don't go over 50. Get a real tire on there ASAP.", textZh: "能开，但只能短距离——最多50英里。别超50迈。尽快换上正常的轮胎。", actionHint: "强调临时性", frequency: "common" },
              { textEn: "The spare will get you to town, but it's not meant for long drives. Stay under 50 mph and find a tire shop as soon as you can.", textZh: "备胎能让你开到镇上，但不适合长途。速度保持50以下，尽快找个轮胎店。", actionHint: "实用建议", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 加油站 ====================
  {
    id: "transport-car-gas-station",
    category: "transport",
    titleZh: "加油站加油",
    titleEn: "Getting Gas",
    description: "在加油站加油，选择油品和付款",
    otherRole: "加油站员工",
    otherRoleIcon: "⛽",
    flows: [
      {
        id: "basic",
        titleZh: "自助加油",
        titleEn: "Self-Service Gas",
        description: "在自助加油站加油的标准流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this a self-service station? I've never pumped gas in the US before.",
            textZh: "请问，这是自助加油站吗？我以前没在美国加过油。",
            culturalNote: "美国大部分加油站是自助的，只有少数州（如新泽西、俄勒冈）是全服务的。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, it's self-service. You can pay at the pump with a card, or come inside to pay with cash first.",
            textZh: "是的，自助的。你可以在油泵那用卡付，或者先进来用现金付。",
            keyPhrases: [
              { en: "self-service", zh: "自助" },
              { en: "pay at the pump", zh: "在油泵付款" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, self-service. Swipe your card right at the pump, or if you're paying cash, come in first and tell me which pump.", textZh: "对，自助的。直接在油泵刷卡，或者付现金的话先进来告诉我几号泵。", actionHint: "简洁指引", frequency: "common" },
              { textEn: "All self-serve here. Just slide your card at the pump to get started. For cash, come see me inside before you pump.", textZh: "这里都是自助。在泵上刷卡就能开始。现金的话先进来找我。", actionHint: "两种方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll use my card at the pump. Which grade of gas should I use? There are three options.",
            textZh: "我在油泵刷卡好了。用哪个等级的油？有三个选项。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "For most cars, regular unleaded — that's the 87 octane, the cheapest option — is fine. Check your car manual if you're unsure.",
            textZh: "大部分车用普通无铅汽油——就是87号的，最便宜的选项——就行了。不确定的话看车的说明书。",
            keyPhrases: [
              { en: "regular unleaded", zh: "普通无铅汽油" },
              { en: "octane", zh: "辛烷值" },
            ],
            alternativeExpressions: [
              { textEn: "Just go with regular — the 87. That works for most cars. Unless your car specifically says 'premium required,' the cheap stuff is fine.", textZh: "选普通的——87号就行。大多数车都用这个。除非车上特别写了要高级汽油，便宜的就够了。", actionHint: "实用建议", frequency: "common" },
              { textEn: "The first button — regular unleaded, 87 octane. It's the cheapest and it's what most rental cars take.", textZh: "第一个按钮——普通无铅87号。最便宜的，大部分租的车都用这个。", actionHint: "直接指向按钮", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with regular. How do I start? I've inserted my card but the screen is asking for a ZIP code.",
            textZh: "用普通的。怎么开始？我插了卡但屏幕要我输入邮编。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "That's a security check. If you have a US card, enter your billing ZIP code. For foreign cards, try entering 00000 or come inside and I'll run your card.",
            textZh: "那是安全验证。美国卡输账单地址的邮编。外国卡的话试试输00000，或者进来我帮你刷。",
            keyPhrases: [
              { en: "ZIP code", zh: "邮编" },
              { en: "billing", zh: "账单地址" },
              { en: "security check", zh: "安全验证" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's the ZIP code check. For a US card, type in your billing ZIP. Foreign card? Try all zeros. If that doesn't work, bring it inside.", textZh: "哦，那是邮编验证。美国卡输账单地址邮编。外国卡的话试试全输0。不行就拿进来。", actionHint: "逐步解决", frequency: "common" },
              { textEn: "It wants your billing ZIP code for verification. International cards sometimes don't work at the pump — just come in and I'll swipe it for you.", textZh: "它要你的账单邮编做验证。外国卡有时候在泵上不好使——进来我帮你刷。", actionHint: "直接提供替代方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It worked! Now I just pick up the nozzle and squeeze the handle?",
            textZh: "可以了！现在拿起油枪握把手就行了？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "First select your grade — press the 'Regular' button. Then lift the nozzle, insert it in your tank, and squeeze. It'll stop automatically when the tank is full.",
            textZh: "先选油品——按'Regular'按钮。然后拿起油枪，插到油箱口，握住把手。油满了会自动停。",
            keyPhrases: [
              { en: "nozzle", zh: "油枪" },
              { en: "squeeze", zh: "握/按" },
              { en: "stop automatically", zh: "自动停" },
            ],
            alternativeExpressions: [
              { textEn: "Hit the 'Regular' button first, then grab the nozzle, stick it in, and squeeze the handle. It shuts off by itself when it's full.", textZh: "先按Regular按钮，然后拿油枪插进去，握住把手。满了它自己会停。", actionHint: "简单步骤", frequency: "common" },
              { textEn: "Press 'Regular' on the screen, pick up the nozzle, put it into your gas cap opening, and hold the trigger. When the tank is full, it clicks off automatically.", textZh: "屏幕上按Regular，拿起油枪放进油箱口，按住扳机。油箱满了会自动咔嗒停住。", actionHint: "详细操作说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to do anything after filling up? Remove the card again?",
            textZh: "加完油后还需要做什么吗？再拔卡？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Hang up the nozzle, close your gas cap, and the receipt should print automatically. Your card was charged already — no need to remove it again.",
            textZh: "把油枪挂回去，关上油箱盖，收据会自动打印。卡已经扣款了——不用再拔。",
            keyPhrases: [
              { en: "hang up the nozzle", zh: "挂回油枪" },
              { en: "gas cap", zh: "油箱盖" },
            ],
            alternativeExpressions: [
              { textEn: "Just put the nozzle back, cap your tank, and it'll print a receipt. Card's already been charged — you're all done.", textZh: "油枪放回去，盖上油箱盖，它会打收据。卡已经扣了——你搞定了。", actionHint: "确认完成", frequency: "common" },
              { textEn: "Return the nozzle to the pump, screw your gas cap back on, and grab your receipt. The payment already went through on your card.", textZh: "油枪放回泵上，拧好油箱盖，拿收据就行。卡上的付款已经完成了。", actionHint: "逐步完成", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "加油时遇到问题",
        titleEn: "Problems at the Gas Station",
        description: "加油时遇到卡被拒、选错油品等问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My card keeps getting declined at the pump. I don't know why — it works everywhere else.",
            textZh: "我的卡在油泵上一直被拒绝。不知道为什么——其他地方都能用。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "That happens sometimes with foreign cards. Come inside and I'll run it manually. Or you can prepay with cash.",
            textZh: "外国卡有时会这样。进来我手动帮你刷。或者你可以先用现金预付。",
            keyPhrases: [
              { en: "declined", zh: "被拒绝" },
              { en: "run it manually", zh: "手动刷" },
              { en: "prepay", zh: "预付" },
            ],
            alternativeExpressions: [
              { textEn: "Foreign cards can be finicky at the pump. Bring it in and I'll swipe it on our machine. Cash works too.", textZh: "外国卡在泵上有时不好使。拿进来我用我们的机器刷。用现金也行。", actionHint: "解释原因并提供方案", frequency: "common" },
              { textEn: "Yeah, that's common with overseas cards. The pump readers are picky. Come on in — I can process it inside, or take cash.", textZh: "嗯，国外的卡经常这样。泵上的读卡器比较挑。进来吧——我在里面帮你刷，或者收现金。", actionHint: "体谅并帮助", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll pay cash. How much should I prepay if I want a full tank?",
            textZh: "我用现金。要加满的话预付多少？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Depends on your tank size. Most cars take about $40 to $60 to fill up. If you overpay, I'll give you change after.",
            textZh: "取决于你的油箱大小。大部分车加满大概40到60美元。多付了加完油给你退钱。",
            keyPhrases: [
              { en: "fill up", zh: "加满" },
              { en: "give you change", zh: "找你钱" },
            ],
            alternativeExpressions: [
              { textEn: "Hard to say exactly — most cars are somewhere between $40 and $60 to fill. Put down $50 and if there's money left over, come grab your change.", textZh: "不好说准确数——大部分车加满40到60之间。先放50，剩了进来拿找零。", actionHint: "给出建议金额", frequency: "common" },
              { textEn: "A full tank usually runs $40 to $60 depending on the car. Just pay what you think, and I'll refund the difference when you're done.", textZh: "加满通常40到60看什么车。你先付个大概数，加完多退少补。", actionHint: "灵活处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll put $50 on pump number 4. Also, I accidentally selected diesel last time at another station. How do I avoid that?",
            textZh: "4号泵放50美元。还有，上次在别的站不小心选了柴油。怎么避免？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Diesel nozzles are usually green and larger than regular ones. They won't fit easily in a gas car's tank. Always look for the word 'unleaded.'",
            textZh: "柴油的油枪通常是绿色的，比普通的大。不太容易插进汽油车的油箱口。看到写'unleaded'就对了。",
            keyPhrases: [
              { en: "diesel", zh: "柴油" },
              { en: "unleaded", zh: "无铅汽油" },
              { en: "nozzle", zh: "油枪" },
            ],
            alternativeExpressions: [
              { textEn: "Easy tip — diesel is the green handle, and it's bigger. It shouldn't fit in a regular car. Just make sure the pump says 'unleaded' and you're good.", textZh: "简单窍门——柴油的是绿色把手，而且更大。普通车是插不进去的。确保泵上写着unleaded就没错。", actionHint: "教辨别方法", frequency: "common" },
              { textEn: "The diesel pump is green-handled and the nozzle is wider. If it doesn't slide in smoothly, you've probably got the wrong one. Stick with 'unleaded.'", textZh: "柴油泵是绿色手柄的，油嘴更粗。如果插不进去，那就是选错了。认准unleaded。", actionHint: "用物理差异辨别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. The pump stopped but my car doesn't seem full. Is something wrong?",
            textZh: "谢谢提醒。油泵停了但车好像没满。是不是出问题了？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "You prepaid $50, so the pump stopped at $50 even if the tank isn't full. You can come in and add more, or that might be enough.",
            textZh: "你预付了50美元，所以到50美元就停了，即使没满。你可以进来再加，或者可能够了。",
            keyPhrases: [
              { en: "prepaid", zh: "预付的" },
              { en: "add more", zh: "再加" },
            ],
            alternativeExpressions: [
              { textEn: "That's because you only paid for $50 worth. The pump cuts off at that amount. If you need more, come back in and pay again.", textZh: "因为你只付了50块的量。泵到那个金额就停了。还要加的话再进来付一次。", actionHint: "解释原因", frequency: "common" },
              { textEn: "Nothing's wrong — it stopped because you hit your $50 prepay limit. Want to top it off? Come in and I'll put more on.", textZh: "没问题——因为你预付的50用完了所以停了。要加满吗？进来我再给你加。", actionHint: "确认正常并询问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think that's enough for now. Can I also get a car wash here?",
            textZh: "应该够了。这里也能洗车吗？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, the automatic car wash is around the back. It's $12 for a basic wash. I can add it to your receipt.",
            textZh: "有的，自动洗车在后面。基础洗车12美元。我可以加到你的收据上。",
            keyPhrases: [
              { en: "automatic car wash", zh: "自动洗车" },
              { en: "basic wash", zh: "基础洗车" },
            ],
            alternativeExpressions: [
              { textEn: "We do! The car wash is right around the corner. Basic wash is 12 bucks. Want me to ring that up for you?", textZh: "有！洗车就在后面拐角。基础洗车12块。要帮你买吗？", actionHint: "热情推荐", frequency: "common" },
              { textEn: "Sure, there's an automatic wash out back. Starts at $12 for the basic. I'll put a code on your receipt that works at the machine.", textZh: "当然，后面有自动洗车。基础的12块起。我在收据上打个码，那边机器上能用。", actionHint: "说明使用方式", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 电动车充电 ====================
  {
    id: "transport-car-ev-charging",
    category: "transport",
    titleZh: "电动车充电",
    titleEn: "EV Charging",
    description: "在公共充电站给电动车充电，了解充电桩使用方法",
    otherRole: "充电站用户",
    otherRoleIcon: "🔌",
    flows: [
      {
        id: "basic",
        titleZh: "使用公共充电站",
        titleEn: "Using a Public Charging Station",
        description: "在公共充电站充电的基本流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is this charger available? I need to charge my electric car.",
            textZh: "你好，这个充电桩空着吗？我要给电动车充电。",
          },
          {
            speaker: "them",
            role: "其他用户",
            textEn: "Yes, I just unplugged. It's all yours. Are you using the app or the credit card reader on the charger?",
            textZh: "是的，我刚拔了。你用吧。你用APP还是充电桩上的刷卡器？",
            keyPhrases: [
              { en: "unplugged", zh: "拔了/断开了" },
              { en: "credit card reader", zh: "刷卡器" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect timing — I just finished. Go ahead and plug in. Do you have the app, or will you tap your card on the charger?", textZh: "来得正好——我刚充完。接上吧。你有APP还是在充电桩上刷卡？", actionHint: "友善让位", frequency: "common" },
              { textEn: "Yep, it's free now. I'm done. The app is way easier to start a session, but you can also use a credit card right on the machine.", textZh: "对，现在空了。我好了。APP开始充电方便多了，不过也能直接在机器上刷信用卡。", actionHint: "推荐APP", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have the app. But there seem to be different connector types. Which one fits my car?",
            textZh: "我有APP。但好像有不同的接口类型。哪个适合我的车？",
            culturalNote: "美国电动车充电接口主要有CCS、CHAdeMO和Tesla NACS三种。特斯拉充电站通常只限特斯拉使用。",
          },
          {
            speaker: "them",
            role: "其他用户",
            textEn: "What car do you have? Most modern EVs use the CCS connector — that's the bigger plug on the left. Tesla uses NACS but has an adapter.",
            textZh: "你什么车？大部分新款电动车用CCS接口——就是左边那个大插头。特斯拉用NACS但有转接头。",
            keyPhrases: [
              { en: "connector", zh: "接口/插头" },
              { en: "CCS", zh: "CCS接口" },
              { en: "adapter", zh: "转接头" },
            ],
            alternativeExpressions: [
              { textEn: "It depends on the car. Most non-Tesla EVs take CCS — the big one. Teslas use their own plug but some chargers have adapters.", textZh: "看什么车。大部分非特斯拉电动车用CCS——大的那个。特斯拉用自己的接口但有些桩有转接头。", actionHint: "按品牌区分", frequency: "common" },
              { textEn: "Which make is it? The CCS connector works for most EVs — it's the larger plug on this side. If it's a Tesla, you might need the NACS adapter.", textZh: "什么牌子？CCS接口适合大多数电动车——就是这边大的那个。如果是特斯拉可能需要NACS转接头。", actionHint: "指向具体接口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I have a rental — it's a Chevy Bolt. So I need the CCS one?",
            textZh: "我租的——是雪佛兰Bolt。那我用CCS的？",
          },
          {
            speaker: "them",
            role: "其他用户",
            textEn: "Exactly. Open the charging port on the front left of the car, plug in the CCS connector, and the app should start the session.",
            textZh: "没错。打开车左前方的充电口，插上CCS接头，APP应该就会开始充电了。",
            keyPhrases: [
              { en: "charging port", zh: "充电口" },
              { en: "start the session", zh: "开始充电" },
            ],
            alternativeExpressions: [
              { textEn: "That's the one. Pop open the charge door on the front left, connect the CCS plug, and hit 'Start' in the app. Should be good to go.", textZh: "就是那个。打开左前方的充电门，接上CCS插头，在APP里点开始。应该就行了。", actionHint: "手把手教", frequency: "common" },
              { textEn: "Right. The charging port is up front on the left side. Plug in the CCS cable and the app will automatically kick off the charging session.", textZh: "对。充电口在车头左边。插上CCS线，APP会自动启动充电。", actionHint: "简洁指引", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it usually take to charge? I'm at about 20 percent right now.",
            textZh: "充电一般要多久？我现在大概20%。",
          },
          {
            speaker: "them",
            role: "其他用户",
            textEn: "On a fast charger like this, you can get to 80 percent in about 30 to 40 minutes. It slows down a lot after 80 though.",
            textZh: "用这样的快充，充到80%大概30到40分钟。但80%之后会慢很多。",
            keyPhrases: [
              { en: "fast charger", zh: "快充" },
              { en: "slows down", zh: "变慢" },
            ],
            alternativeExpressions: [
              { textEn: "With this fast charger, you're looking at maybe half an hour to get to 80%. After that, it really slows down — not worth waiting for 100.", textZh: "用这个快充，到80%大概半小时。之后真的慢很多——等到100不值得。", actionHint: "建议充到80%就好", frequency: "common" },
              { textEn: "These DC fast chargers are pretty quick — 30 to 40 minutes to 80 percent. Just know that the last 20 percent takes way longer.", textZh: "这些直流快充挺快的——30到40分钟到80%。不过最后20%要久得多。", actionHint: "解释充电曲线", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much does it cost? Is it by the minute or by the kilowatt-hour?",
            textZh: "多少钱？按分钟算还是按千瓦时算？",
          },
          {
            speaker: "them",
            role: "其他用户",
            textEn: "This network charges by the kilowatt-hour — about $0.35 per kWh. So a full charge from 20 to 80 percent might cost around $10 to $15.",
            textZh: "这个充电网络按千瓦时收费——大概每千瓦时0.35美元。从20%充到80%大概10到15美元。",
            keyPhrases: [
              { en: "kilowatt-hour", zh: "千瓦时" },
              { en: "kWh", zh: "千瓦时" },
            ],
            alternativeExpressions: [
              { textEn: "It's about 35 cents per kilowatt-hour on this network. For your car, 20 to 80 percent would probably run you somewhere between ten and fifteen bucks.", textZh: "这个网络大概每千瓦时35美分。你的车从20充到80大概十到十五块。", actionHint: "估算具体费用", frequency: "common" },
              { textEn: "They charge per kWh — around 35 cents. Way cheaper than gas if you think about it. A good charge session usually costs $10 to $15.", textZh: "按千瓦时收费——大概35美分。仔细想想比油便宜多了。正常充一次大概10到15。", actionHint: "对比油价", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "充电站排队和问题",
        titleEn: "Charging Station Queue & Issues",
        description: "充电站排队等候和处理充电问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, are you waiting for this charger? I see your car is finished charging but still plugged in.",
            textZh: "请问，你在等这个充电桩吗？你的车好像充完了但还插着。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Oh, sorry! I didn't get the notification. Let me unplug right now. It shows 95 percent — that's more than enough.",
            textZh: "哦，抱歉！没收到通知。我马上拔。显示95%了——足够了。",
            keyPhrases: [
              { en: "unplug", zh: "拔掉" },
              { en: "notification", zh: "通知" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, my bad! I lost track of time. Give me a sec to unplug — it's at 95 anyway, totally fine.", textZh: "哎呀，不好意思！忘了时间了。等我拔一下——已经95了，完全够了。", actionHint: "道歉并快速处理", frequency: "common" },
              { textEn: "Sorry about that! I stepped away and didn't realize it finished. Let me pull the cable out real quick. All yours.", textZh: "抱歉！我走开了没注意到充完了。我赶紧把线拔了。你用吧。", actionHint: "解释原因并让位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No rush, take your time. By the way, do you know if there's an idle fee if I leave my car plugged in after charging?",
            textZh: "不急，慢慢来。顺便问一下，充完电还占着桩会收占位费吗？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Yes, this network charges a $1 per minute idle fee if you stay connected after the charge is complete. It adds up fast.",
            textZh: "会的，这个充电网络充完电后不拔会收每分钟1美元的占位费。很快就会累积。",
            keyPhrases: [
              { en: "idle fee", zh: "占位费" },
              { en: "adds up fast", zh: "很快累积" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, they charge a buck a minute if you leave it plugged in after it's done. I learned that the hard way — set a timer.", textZh: "对，充完了不拔的话每分钟收一块钱。我是吃过亏才知道的——定个闹钟。", actionHint: "用自身教训提醒", frequency: "common" },
              { textEn: "There's a $1-per-minute idle fee once charging finishes. It's meant to get people to move their cars so others can charge.", textZh: "充完后每分钟1块的占位费。就是为了让人挪车给别人充。", actionHint: "解释收费目的", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I tried to start a session but the charger screen says 'Error — contact support.' What should I do?",
            textZh: "了解了。我试着开始充电但充电桩屏幕显示'错误——联系客服'。怎么办？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Try restarting the session — unplug, wait 10 seconds, and plug in again. If that doesn't work, there should be a phone number on the charger.",
            textZh: "试试重启——拔掉，等10秒，再插上。如果不行，充电桩上应该有客服电话。",
            keyPhrases: [
              { en: "restarting the session", zh: "重启充电" },
              { en: "phone number", zh: "客服电话" },
            ],
            alternativeExpressions: [
              { textEn: "Happens a lot. Pull the plug out, count to ten, and try again. That usually fixes it. If not, call the number on the charger.", textZh: "经常这样。把插头拔了，数到十，再试一次。通常就好了。不行就打充电桩上的电话。", actionHint: "分享经验", frequency: "common" },
              { textEn: "Classic charger glitch. Just disconnect, give it a few seconds, and reconnect. Nine times out of ten that does the trick.", textZh: "充电桩老毛病了。断开，等几秒，再接上。十次有九次能解决。", actionHint: "轻松应对常见问题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It worked on the second try! Is there a coffee shop or anything nearby to wait?",
            textZh: "第二次试就好了！附近有咖啡店什么的可以等吗？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "There's a shopping center about a five-minute walk that way. Most people go there while charging. The app will alert you when it's done.",
            textZh: "那边大约走5分钟有个购物中心。大部分人充电时去那边逛。充完APP会提醒你。",
            keyPhrases: [
              { en: "shopping center", zh: "购物中心" },
              { en: "alert you", zh: "提醒你" },
            ],
            alternativeExpressions: [
              { textEn: "There's a mall just down the street — like a five-minute walk. Perfect for killing time. Your app will ping you when charging is done.", textZh: "前面有个商场——走五分钟。打发时间正好。充完了APP会推送通知你。", actionHint: "推荐去处", frequency: "common" },
              { textEn: "Head that way for the shopping center. Great place to grab a coffee while you wait. The app sends a notification when your car is ready.", textZh: "往那边走有购物中心。等的时候去喝杯咖啡不错。车充好了APP会发通知。", actionHint: "具体建议活动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Should I charge to 100 percent or is 80 percent enough for a 150-mile drive?",
            textZh: "好的。需要充到100%吗？还是80%足够开150英里？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "80 percent is plenty for 150 miles in that car. Plus, charging from 80 to 100 takes almost as long as 20 to 80. Not worth the wait.",
            textZh: "那辆车80%开150英里绰绰有余。而且从80充到100几乎跟20充到80一样久。不值得等。",
            keyPhrases: [
              { en: "plenty", zh: "绰绰有余" },
              { en: "not worth the wait", zh: "不值得等" },
            ],
            alternativeExpressions: [
              { textEn: "80 is more than enough for 150 miles. Going to 100 is a waste of time — the last 20 percent trickles in so slowly.", textZh: "80跑150英里足够了。充到100纯浪费时间——最后20%进得特别慢。", actionHint: "直言不讳", frequency: "common" },
              { textEn: "You'll be totally fine at 80 for that distance. Honestly, waiting for 100 percent at a fast charger is just bad math.", textZh: "80%跑那个距离完全没问题。说实话在快充站等到100%性价比太低了。", actionHint: "从效率角度分析", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 邮轮登船 ====================
  {
    id: "transport-cruise-embark",
    category: "transport",
    titleZh: "邮轮登船",
    titleEn: "Cruise Embarkation",
    description: "在邮轮码头办理登船手续，了解船上设施和安全须知",
    otherRole: "邮轮工作人员",
    otherRoleIcon: "🚢",
    flows: [
      {
        id: "basic",
        titleZh: "办理登船手续",
        titleEn: "Check-in & Boarding",
        description: "在邮轮码头办理登船和了解船上基本信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're here for the Caribbean cruise. Where do we start the check-in process?",
            textZh: "你好，我们来坐加勒比邮轮。从哪里开始办理登船？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Welcome! Do you have your boarding pass and passport ready? Line up at counter B and have your documents out.",
            textZh: "欢迎！登船证和护照准备好了吗？在B柜台排队，把证件准备好。",
            keyPhrases: [
              { en: "boarding pass", zh: "登船证" },
              { en: "counter B", zh: "B柜台" },
              { en: "documents", zh: "证件" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome aboard! Have your boarding pass and passport handy? Head to counter B over there — they'll get you checked in.", textZh: "欢迎登船！登船证和护照带了吗？去那边B柜台——他们会帮你办理。", actionHint: "热情欢迎并指引", frequency: "common" },
              { textEn: "Hi there, welcome! Grab your passport and boarding pass, and join the line at counter B. It moves pretty quick.", textZh: "你好，欢迎！拿好护照和登船证，到B柜台排队。队走得挺快的。", actionHint: "轻松指引", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's everything. We also have two large suitcases. Where do we drop those off?",
            textZh: "都在这里。我们还有两个大行李箱。在哪放？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Leave your luggage with the porters outside. They'll tag it and deliver it to your stateroom. Keep your carry-on bag with you.",
            textZh: "把行李交给外面的搬运工。他们会贴标签送到你的客舱。随身包自己拿着。",
            keyPhrases: [
              { en: "porters", zh: "搬运工" },
              { en: "stateroom", zh: "客舱" },
              { en: "carry-on", zh: "随身行李" },
            ],
            alternativeExpressions: [
              { textEn: "Drop your big bags with the porters right outside the entrance. They'll take care of them and bring them to your cabin. Just keep your day bag.", textZh: "大包放给门口外面的搬运工。他们会负责送到你的客舱。随身的小包自己拿着。", actionHint: "指向门口", frequency: "common" },
              { textEn: "The guys outside will handle your suitcases — they'll tag and deliver everything to your room. Hang on to anything you need for the first few hours.", textZh: "外面的人会处理你的行李箱——贴标签送到你房间。前几个小时需要的东西自己拿着。", actionHint: "提醒留必需品", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When will our luggage arrive at the room? And what deck is our stateroom on?",
            textZh: "行李什么时候送到房间？我们的客舱在哪层甲板？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Luggage usually arrives within a few hours after sailing. Your cabin is on Deck 8, room 8247. Take the elevators to the right.",
            textZh: "行李通常在开船后几小时内送到。你们的客舱在8层甲板，8247房间。坐右边的电梯。",
            keyPhrases: [
              { en: "Deck 8", zh: "8层甲板" },
              { en: "after sailing", zh: "开船后" },
            ],
            alternativeExpressions: [
              { textEn: "Your bags should be at your door within a couple hours of departure. You're in room 8247 on Deck 8 — elevators are just to the right.", textZh: "出发后两小时内行李应该就在门口了。你的房间是8层8247——电梯就在右边。", actionHint: "给出具体信息", frequency: "common" },
              { textEn: "Don't worry about luggage — it'll show up a few hours after we set sail. Head up to Deck 8, cabin 8247. The lifts are that way.", textZh: "行李不用担心——启航后几小时就到。上去8层甲板，8247号。电梯在那边。", actionHint: "安心引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a safety drill we need to attend?",
            textZh: "有安全演习要参加吗？",
            culturalNote: "邮轮出发前都有强制安全演习（muster drill），所有乘客必须参加，不参加可能被拒绝继续航行。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, the muster drill is mandatory. It's at 4 PM on the pool deck. You'll hear an announcement. Bring your cruise card.",
            textZh: "是的，安全演习是强制的。下午4点在泳池甲板。会听到广播通知。带上你的邮轮卡。",
            keyPhrases: [
              { en: "muster drill", zh: "安全演习" },
              { en: "mandatory", zh: "强制的" },
              { en: "cruise card", zh: "邮轮卡" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely — it's required for everyone, no exceptions. Four o'clock at the pool deck. Listen for the horn and grab your cruise card.", textZh: "当然——所有人必须参加，没有例外。四点在泳池甲板。听到喇叭声带上邮轮卡。", actionHint: "强调必须参加", frequency: "common" },
              { textEn: "Yes, and you can't skip it. The safety drill is at 4 PM — they'll announce it over the PA. Have your cruise card ready to scan.", textZh: "是的，不能缺席。安全演习下午4点——会通过广播通知。邮轮卡准备好扫描。", actionHint: "正式告知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "When does the ship depart? Can we explore the ship before then?",
            textZh: "船什么时候出发？出发前可以四处逛逛吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "We sail at 5 PM. Feel free to explore the ship, grab lunch at the buffet on Deck 12, or head to the pool. Enjoy your cruise!",
            textZh: "下午5点出发。随便逛逛船，可以去12层甲板的自助餐吃午饭，或者去泳池。邮轮愉快！",
            keyPhrases: [
              { en: "sail at", zh: "出发时间" },
              { en: "buffet", zh: "自助餐" },
            ],
            alternativeExpressions: [
              { textEn: "Departure is at five. Until then, the ship is yours to explore! The buffet's open on Deck 12 and the pool's already up and running. Have a blast!", textZh: "五点出发。在那之前随便逛！12层自助餐开着，泳池也可以用了。玩得开心！", actionHint: "热情推荐活动", frequency: "common" },
              { textEn: "We set sail at 5 PM sharp. In the meantime, check out the ship — lunch is being served upstairs at the buffet, or take a dip in the pool. Enjoy!", textZh: "下午5点准时出发。趁这段时间逛逛船——楼上自助餐在供应午餐，也可以去泳池。享受！", actionHint: "详细活动建议", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "了解船上消费和服务",
        titleEn: "Onboard Services & Charges",
        description: "了解邮轮上的消费方式和各项服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I noticed we got a cruise card at check-in. Is this how we pay for things on board?",
            textZh: "我注意到登船时发了邮轮卡。船上消费都用这个吗？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, it's your room key, your ID, and your payment card all in one. Everything is charged to the card and settled at the end of the voyage.",
            textZh: "是的，它同时是房卡、身份证和支付卡。所有消费都记在卡上，航程结束时结算。",
            keyPhrases: [
              { en: "room key", zh: "房卡" },
              { en: "settled", zh: "结算" },
              { en: "end of the voyage", zh: "航程结束" },
            ],
            alternativeExpressions: [
              { textEn: "That card does everything — opens your door, proves who you are, and charges all your purchases. You settle up at the end of the trip.", textZh: "那张卡什么都能干——开门、验身份、所有消费都刷它。旅程结束时统一结算。", actionHint: "强调多功能", frequency: "common" },
              { textEn: "Think of it as your cruise wallet. Room key, ID, and credit card rolled into one. All charges go on it and you pay at the end.", textZh: "把它当成你的邮轮钱包。房卡、身份证、信用卡三合一。所有费用都记上面，最后付。", actionHint: "形象比喻", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's included in the cruise fare and what costs extra?",
            textZh: "船票包含什么？哪些要另外收费？",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Meals at the main dining room and buffet are included. Specialty restaurants, alcohol, spa treatments, and shore excursions cost extra.",
            textZh: "主餐厅和自助餐包含在内。特色餐厅、酒类、水疗和岸上观光要另付费。",
            keyPhrases: [
              { en: "included", zh: "包含" },
              { en: "specialty restaurants", zh: "特色餐厅" },
              { en: "shore excursions", zh: "岸上观光" },
            ],
            alternativeExpressions: [
              { textEn: "All your regular meals are covered — the dining room and buffet. Drinks, fancy restaurants, spa stuff, and excursions are pay-as-you-go.", textZh: "正常的餐食都包了——餐厅和自助餐。饮料、高级餐厅、水疗和岸上活动要另付。", actionHint: "区分包含和额外", frequency: "common" },
              { textEn: "Food at the main restaurant and buffet is free — eat as much as you want. Everything else like alcohol, the spa, and port tours are extra charges.", textZh: "主餐厅和自助餐的食物免费——想吃多少吃多少。其他的像酒、水疗和港口游览要额外收费。", actionHint: "强调免费吃", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is Wi-Fi included? I need to check emails occasionally.",
            textZh: "Wi-Fi包含吗？我偶尔需要查邮件。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Wi-Fi packages are extra. Basic is $15 per day for browsing, and premium with streaming is $25 per day. Fair warning — it's slower than on land.",
            textZh: "Wi-Fi套餐另付。基础版每天15美元，含浏览；高级版带流媒体每天25美元。提醒一下——比陆地上慢。",
            keyPhrases: [
              { en: "Wi-Fi packages", zh: "Wi-Fi套餐" },
              { en: "streaming", zh: "流媒体" },
              { en: "slower than on land", zh: "比陆地上慢" },
            ],
            alternativeExpressions: [
              { textEn: "Wi-Fi isn't included, unfortunately. Basic browsing is $15 a day, streaming package is $25. Just a heads-up though — don't expect land speeds.", textZh: "Wi-Fi不包含，可惜。基本浏览每天15，流媒体套餐25。不过提醒一下——别期待陆地上的速度。", actionHint: "实话实说", frequency: "common" },
              { textEn: "You'll need to buy a Wi-Fi plan — $15 for basic, $25 with streaming. It works, but it's satellite internet, so it's not going to be blazing fast.", textZh: "需要买Wi-Fi套餐——基础15，带流媒体25。能用，但是卫星网络，不会特别快。", actionHint: "解释技术限制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about tipping? Is gratuity already added to the bill?",
            textZh: "小费呢？账单已经包含小费了吗？",
            culturalNote: "邮轮通常自动收取每天$16-20的服务费（gratuity），可以在服务台调整。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "A daily gratuity of $18 per person is automatically added to your account. It covers housekeeping, dining staff, and general service. You can adjust it at Guest Services.",
            textZh: "每人每天18美元的服务费会自动加到你的账户。涵盖客房清洁、餐饮服务和一般服务。可以在宾客服务台调整。",
            keyPhrases: [
              { en: "daily gratuity", zh: "每日服务费" },
              { en: "Guest Services", zh: "宾客服务台" },
            ],
            alternativeExpressions: [
              { textEn: "There's an automatic $18 per person per day gratuity. It goes to the crew — housekeeping, waiters, that sort of thing. You can change it at the front desk.", textZh: "每人每天自动加18的服务费。给船员的——客房清洁、服务员这些。可以在前台调。", actionHint: "说明用途", frequency: "common" },
              { textEn: "Tips are built in — $18 a day per guest gets added automatically to your bill. If you want to adjust it up or down, Guest Services on Deck 5 can help.", textZh: "小费已经算进去了——每人每天18自动加到账单。想调高或调低的话5层的宾客服务台可以帮你。", actionHint: "说明可调整", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we set a spending limit on the cruise card so we don't overspend?",
            textZh: "邮轮卡能设消费上限吗？怕花超了。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Yes, visit Guest Services on Deck 5 and they'll set a daily spending cap for you. You can also check your running balance on the TV in your cabin.",
            textZh: "可以，去5层甲板的宾客服务台设一个每日消费上限。也可以在客舱电视上查看累计消费。",
            keyPhrases: [
              { en: "spending cap", zh: "消费上限" },
              { en: "running balance", zh: "累计消费" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. Just go to Guest Services on Deck 5 — they can put a daily limit on your card. And your cabin TV shows your total spending anytime.", textZh: "完全可以。去5层宾客服务台——他们能给你卡设个每日限额。客舱电视随时能看总花费。", actionHint: "肯定并指引", frequency: "common" },
              { textEn: "Good idea! Head down to Deck 5, Guest Services, and ask for a spending limit. You can keep track of charges through the interactive TV in your room too.", textZh: "好想法！去5层宾客服务台要求设消费限额。也可以通过房间里的互动电视追踪消费。", actionHint: "赞同并建议追踪", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 邮轮岸上观光 ====================
  {
    id: "transport-cruise-excursion",
    category: "transport",
    titleZh: "邮轮岸上观光",
    titleEn: "Cruise Shore Excursion",
    description: "参加邮轮岸上观光活动，了解行程安排和注意事项",
    otherRole: "观光导游",
    otherRoleIcon: "🏝️",
    flows: [
      {
        id: "basic",
        titleZh: "预订岸上观光",
        titleEn: "Booking a Shore Excursion",
        description: "在邮轮上预订停靠港口的观光活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're stopping in Cozumel tomorrow and I'd like to book a shore excursion. What options are available?",
            textZh: "你好，明天我们停靠科苏梅尔，我想预订岸上观光。有什么选择？",
          },
          {
            speaker: "them",
            role: "观光台员工",
            textEn: "We have snorkeling tours, ruins visits, beach breaks, and a food and culture walking tour. What interests you most?",
            textZh: "我们有浮潜、遗址参观、海滩休闲和美食文化步行游。你对什么最感兴趣？",
            keyPhrases: [
              { en: "snorkeling", zh: "浮潜" },
              { en: "ruins", zh: "遗址" },
              { en: "shore excursion", zh: "岸上观光" },
            ],
            alternativeExpressions: [
              { textEn: "Lots of options! There's snorkeling, ancient ruins, beach day packages, or a walking food tour. What sounds good to you?", textZh: "选择很多！有浮潜、古代遗址、海滩套餐或美食步行游。你觉得什么好？", actionHint: "热情介绍选项", frequency: "common" },
              { textEn: "For Cozumel, our most popular ones are the snorkel trip and the Mayan ruins tour. We also have beach outings and a local food walk.", textZh: "科苏梅尔最受欢迎的是浮潜和玛雅遗址游。还有海滩郊游和当地美食步行。", actionHint: "推荐热门", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The snorkeling tour sounds fun. How long is it and how much does it cost?",
            textZh: "浮潜听起来不错。多长时间？多少钱？",
          },
          {
            speaker: "them",
            role: "观光台员工",
            textEn: "It's a three-hour tour, $89 per person. Includes equipment, a guide, and a drink. Departs at 9 AM from the pier.",
            textZh: "三小时的行程，每人89美元。包括装备、导游和一杯饮料。早上9点从码头出发。",
            keyPhrases: [
              { en: "includes equipment", zh: "包括装备" },
              { en: "pier", zh: "码头" },
            ],
            alternativeExpressions: [
              { textEn: "Three hours, $89 a head. Everything's provided — snorkel gear, guide, and a complimentary drink. Leaves the pier at 9 AM.", textZh: "三小时，每人89。全部提供——浮潜装备、导游和免费饮料。9点从码头出发。", actionHint: "简明报价", frequency: "common" },
              { textEn: "That one's $89 per person for about three hours. Gear and a guide are included, plus you get a drink. Morning departure at nine.", textZh: "那个每人89，大约三小时。装备和导游包含在内，还送一杯饮料。早上九点出发。", actionHint: "逐项说明包含内容", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What time do we need to be back on the ship?",
            textZh: "几点之前要回到船上？",
            culturalNote: "邮轮不会等迟到的乘客！务必确认'all aboard'时间并提前回来。自己预订的观光有风险。",
          },
          {
            speaker: "them",
            role: "观光台员工",
            textEn: "All aboard is at 4:30 PM. The snorkeling tour gets you back by 12:30, so you'll have the whole afternoon free.",
            textZh: "全部登船时间是下午4:30。浮潜团12:30就回来了，下午都是自由时间。",
            keyPhrases: [
              { en: "all aboard", zh: "全部登船时间" },
              { en: "whole afternoon free", zh: "整个下午自由" },
            ],
            alternativeExpressions: [
              { textEn: "You need to be back on the ship by 4:30. The snorkel trip wraps up around 12:30, so plenty of time to explore on your own after.", textZh: "4:30之前回到船上就行。浮潜大概12:30结束，之后还有很多时间自己逛。", actionHint: "强调充裕时间", frequency: "common" },
              { textEn: "All-aboard time is 4:30 PM. You'll be done snorkeling by half past twelve — that leaves the whole afternoon to do whatever you want.", textZh: "最晚登船时间下午4:30。浮潜十二点半就结束了——整个下午想干什么干什么。", actionHint: "突出自由时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "If I book through the ship, is there a guarantee that the ship won't leave without us?",
            textZh: "如果通过船上预订，能保证船不会丢下我们走吗？",
          },
          {
            speaker: "them",
            role: "观光台员工",
            textEn: "Exactly. Ship-sponsored excursions guarantee the ship will wait if the tour runs late. Independent tours don't have that guarantee.",
            textZh: "没错。船方组织的观光保证如果行程延迟，船会等。自己订的没有这个保证。",
            keyPhrases: [
              { en: "ship-sponsored", zh: "船方组织的" },
              { en: "guarantee", zh: "保证" },
              { en: "independent tours", zh: "自己订的/独立的" },
            ],
            alternativeExpressions: [
              { textEn: "That's the big advantage of booking through us. If our tour runs late, the ship waits. Book on your own, and you're on your own if you're late.", textZh: "这就是通过我们订的最大好处。我们的团迟了，船会等。自己订的话迟了就自负了。", actionHint: "对比优势", frequency: "common" },
              { textEn: "Yes, and that's actually a big deal. Our excursions come with a ship guarantee — they won't leave without you. Third-party tours don't have that safety net.", textZh: "是的，这其实很重要。我们的观光有船方保证——不会丢下你。第三方团没有这个安全保障。", actionHint: "强调重要性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sign us up for the snorkeling then. Two adults. Can we pay with our cruise card?",
            textZh: "那帮我们报名浮潜吧。两个成人。能用邮轮卡付吗？",
          },
          {
            speaker: "them",
            role: "观光台员工",
            textEn: "Absolutely. It'll be charged to your cabin account. Meet at the Explorers Lounge on Deck 4 at 8:30 AM tomorrow for your group.",
            textZh: "当然。费用会记到你的客舱账户。明天早上8:30在4层甲板的探险者休息室集合。",
            keyPhrases: [
              { en: "cabin account", zh: "客舱账户" },
              { en: "Explorers Lounge", zh: "探险者休息室" },
            ],
            alternativeExpressions: [
              { textEn: "Done! The charge goes on your cruise card. Tomorrow morning, 8:30, head to the Explorers Lounge on Deck 4 — that's where your group meets.", textZh: "搞定！费用刷邮轮卡。明早8:30去4层探险者休息室——在那里跟团集合。", actionHint: "确认预订", frequency: "common" },
              { textEn: "You're all set — two adults, snorkeling. Charged to your cabin. The meeting point is Deck 4, Explorers Lounge, at 8:30 AM sharp.", textZh: "安排好了——两位成人浮潜。记在客舱账上。集合地点4层探险者休息室，早上8:30准时。", actionHint: "确认详情", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "岸上自由行",
        titleEn: "Independent Shore Exploration",
        description: "在停靠港口自己游览而不参加船上的团",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd rather explore on our own when we dock tomorrow. What do we need to know?",
            textZh: "我们想明天靠岸后自己逛。需要注意什么？",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "Remember the all-aboard time is 4:30 PM sharp. The ship will NOT wait. Bring your cruise card and a photo ID when you go ashore.",
            textZh: "记住全部登船时间是下午4:30整。船不会等。上岸时带邮轮卡和带照片的证件。",
            keyPhrases: [
              { en: "sharp", zh: "整点/准时" },
              { en: "go ashore", zh: "上岸" },
              { en: "photo ID", zh: "带照片的证件" },
            ],
            alternativeExpressions: [
              { textEn: "Most important thing — be back by 4:30 PM. The ship leaves with or without you. And don't forget your cruise card and ID when you go out.", textZh: "最重要的——4:30之前回来。船不等人的。出去别忘了带邮轮卡和证件。", actionHint: "严肃提醒", frequency: "common" },
              { textEn: "All-aboard is 4:30 on the dot — they are NOT flexible on this. Take your cruise card and a photo ID with you at all times ashore.", textZh: "最晚登船时间4:30一秒不差——这个没有商量余地。上岸全程带好邮轮卡和证件。", actionHint: "强调不可协商", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it safe to walk around on our own? Any areas we should avoid?",
            textZh: "自己走安全吗？有什么地方要避开？",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "The tourist area near the port is quite safe. Stick to well-traveled streets and avoid going too far from the port. We have a map at the desk.",
            textZh: "港口附近的旅游区很安全。走人多的街道，不要离港口太远。我们有地图。",
            keyPhrases: [
              { en: "tourist area", zh: "旅游区" },
              { en: "well-traveled streets", zh: "人多的街道" },
            ],
            alternativeExpressions: [
              { textEn: "The area right around the port is very tourist-friendly and safe. Just stay on the main streets and don't wander too far. Grab a map from us before you go.", textZh: "港口周围的区域对游客很友好，很安全。走主街就好别走太远。出去之前拿张我们的地图。", actionHint: "安心并给建议", frequency: "common" },
              { textEn: "You'll be fine near the port — it's a popular tourist zone. Keep to busy areas, and I'd recommend taking one of our free maps.", textZh: "港口附近没问题——是热门旅游区。待在热闹的地方，建议拿一张我们的免费地图。", actionHint: "推荐地图", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What currency do they use there? Should I exchange money?",
            textZh: "那里用什么货币？需要换钱吗？",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "The local currency is Mexican pesos, but most tourist shops accept US dollars. Credit cards are widely accepted too. I wouldn't exchange too much cash.",
            textZh: "当地货币是墨西哥比索，但大部分旅游店接受美元。信用卡也广泛接受。不建议换太多现金。",
            keyPhrases: [
              { en: "local currency", zh: "当地货币" },
              { en: "widely accepted", zh: "广泛接受" },
            ],
            alternativeExpressions: [
              { textEn: "Pesos are the local money, but dollars work almost everywhere in the tourist zone. Cards are accepted at most places too. No need to exchange a lot.", textZh: "当地用比索，但旅游区几乎到处都收美元。大多数地方也可以刷卡。不用换太多。", actionHint: "实用货币建议", frequency: "common" },
              { textEn: "They use Mexican pesos, but honestly, US dollars and credit cards are fine for anything near the port. Maybe just bring a bit of cash for small vendors.", textZh: "他们用墨西哥比索，但说实话港口附近用美元和信用卡什么都能买。小摊可能带点现金。", actionHint: "区分大小消费场景", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if we want to take a taxi? Are they trustworthy near the port?",
            textZh: "如果想打车呢？港口附近的出租车可靠吗？",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "Use the official taxi stand right outside the port — those are licensed and have fixed rates posted. Avoid random drivers who approach you.",
            textZh: "用港口外面的官方出租车站——那些是持牌的，有公示的固定价格。避免搭理主动过来的司机。",
            keyPhrases: [
              { en: "official taxi stand", zh: "官方出租车站" },
              { en: "licensed", zh: "持牌的" },
              { en: "fixed rates", zh: "固定价格" },
            ],
            alternativeExpressions: [
              { textEn: "There's an official taxi line right when you walk out. They have set prices posted — way safer than the guys trying to grab you on the street.", textZh: "一出去就有官方出租车排队。价格都贴着——比街上拉客的安全多了。", actionHint: "对比安全性", frequency: "common" },
              { textEn: "Stick to the licensed taxi stand outside the port gate. Prices are fixed and displayed. Don't get in a car with anyone who approaches you directly.", textZh: "在港口门外的持牌出租车站坐车。价格固定公示的。别上主动找你的人的车。", actionHint: "安全提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "If something goes wrong and we can't make it back in time, what should we do?",
            textZh: "万一出了状况赶不回来怎么办？",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "Call the emergency number on the back of your cruise card immediately. In the worst case, you'd have to fly to the next port to rejoin the ship at your own expense.",
            textZh: "立刻打邮轮卡背面的紧急电话。最坏的情况，你需要自费飞到下一个港口重新登船。",
            keyPhrases: [
              { en: "emergency number", zh: "紧急电话" },
              { en: "next port", zh: "下一个港口" },
              { en: "at your own expense", zh: "自费" },
            ],
            alternativeExpressions: [
              { textEn: "First thing — call the number on the back of your cruise card right away. Worst case, you'd need to arrange a flight to the next stop and catch the ship there, all on your dime.", textZh: "第一步——立刻打邮轮卡背面的号码。最坏情况得自己买机票飞到下一站追船，费用自理。", actionHint: "强调紧迫性", frequency: "common" },
              { textEn: "Flip your cruise card over and call the emergency line ASAP. If you miss the ship, you'll have to fly to meet it at the next port — and that's on you financially.", textZh: "翻过邮轮卡马上打紧急电话。如果错过了船，得飞到下个港口追上——费用全部自理。", actionHint: "严肃警告后果", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yikes, we'll definitely be back early then. Thanks for the warnings!",
            textZh: "哎呀，那我们一定早点回来。谢谢提醒！",
          },
          {
            speaker: "them",
            role: "信息台员工",
            textEn: "You're welcome. Set an alarm for 3:30 PM to give yourself plenty of time. Have a wonderful day ashore!",
            textZh: "不客气。设个3:30的闹钟给自己留足时间。上岸愉快！",
            keyPhrases: [
              { en: "set an alarm", zh: "设闹钟" },
              { en: "plenty of time", zh: "充足的时间" },
            ],
            alternativeExpressions: [
              { textEn: "Smart move! I'd set a phone alarm for 3:30 just to be safe. That gives you a full hour buffer. Enjoy the day!", textZh: "明智！建议设个3:30的手机闹钟保险一点。这样有整整一小时缓冲。玩得开心！", actionHint: "赞同并祝愿", frequency: "common" },
              { textEn: "Good plan. Put a reminder at 3:30 on your phone so you don't lose track of time. Have a fantastic day exploring!", textZh: "好想法。手机上设个3:30提醒免得玩忘了时间。好好探索！", actionHint: "实用建议加祝福", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 机场接驳 ====================
  {
    id: "transport-airport-transfer",
    category: "transport",
    titleZh: "机场接驳",
    titleEn: "Airport Transfer",
    description: "从机场到市区或酒店的各种交通方式选择和使用",
    otherRole: "接驳服务人员",
    otherRoleIcon: "✈️",
    flows: [
      {
        id: "basic",
        titleZh: "机场大巴/快线",
        titleEn: "Airport Express Bus",
        description: "乘坐机场大巴或快线前往市区",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I get to downtown from here? Is there an airport express bus?",
            textZh: "请问，从这里怎么去市中心？有机场快线吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, the airport express departs every 20 minutes from Terminal 1, lower level, door 4. It goes straight to the central train station.",
            textZh: "有的，机场快线每20分钟一班，从1号航站楼下层4号门出发。直达中央火车站。",
            keyPhrases: [
              { en: "airport express", zh: "机场快线" },
              { en: "lower level", zh: "下层" },
              { en: "central train station", zh: "中央火车站" },
            ],
            alternativeExpressions: [
              { textEn: "There's an express bus that runs every 20 minutes. Go downstairs to the lower level, exit door 4 — takes you right to central station.", textZh: "有快线巴士每20分钟一班。下楼到下层，走4号门——直达中央车站。", actionHint: "指引路线", frequency: "common" },
              { textEn: "Yep! Head to Terminal 1, lower level, door 4. The airport express comes every 20 minutes and goes direct to the main train station downtown.", textZh: "有！去1号航站楼下层4号门。机场快线每20分钟一班，直达市中心的主火车站。", actionHint: "详细路线加目的地", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the ticket and where do I buy it?",
            textZh: "票多少钱？在哪买？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "It's $18 one-way. You can buy it from the machine at the bus stop or use the app. The driver also accepts contactless cards.",
            textZh: "单程18美元。可以在公交站的自助机买，或者用APP。司机也接受感应卡。",
            keyPhrases: [
              { en: "one-way", zh: "单程" },
              { en: "contactless cards", zh: "感应卡" },
            ],
            alternativeExpressions: [
              { textEn: "Eighteen bucks one-way. Buy it at the ticket machine at the stop, through the app, or just tap your card when you board.", textZh: "单程18块。在站台的售票机买、用APP买或者上车时刷感应卡都行。", actionHint: "给出多种购买方式", frequency: "common" },
              { textEn: "$18 for a single ride. The easiest way is to tap a contactless card on the reader when you get on. No need to buy a ticket in advance.", textZh: "单程18美元。最简单的方式是上车时在读卡器上刷感应卡。不用提前买票。", actionHint: "推荐最便捷方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long does it take to get downtown?",
            textZh: "到市中心要多久？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "About 45 minutes to an hour depending on traffic. There are a few stops along the way.",
            textZh: "大概45分钟到1小时，取决于交通。中间有几个停靠站。",
            keyPhrases: [
              { en: "depending on traffic", zh: "取决于交通" },
              { en: "along the way", zh: "沿途" },
            ],
            alternativeExpressions: [
              { textEn: "Usually 45 minutes, but could be up to an hour if traffic is bad. It makes a few stops on the way into town.", textZh: "通常45分钟，堵车的话可能一小时。途中会停几站。", actionHint: "实际估计", frequency: "common" },
              { textEn: "Anywhere from 45 minutes to an hour. There are three or four stops before downtown, so it depends on how many people get on and off.", textZh: "45分钟到1小时不等。到市区前有三四个站，看上下车人多不多。", actionHint: "解释停站影响", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there enough room for my suitcases on the bus?",
            textZh: "公交车上放得下我的行李箱吗？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "Yes, there's a large luggage compartment underneath the bus. The driver will help you load them.",
            textZh: "有的，车底有大的行李舱。司机会帮你放。",
            keyPhrases: [
              { en: "luggage compartment", zh: "行李舱" },
              { en: "load", zh: "装载" },
            ],
            alternativeExpressions: [
              { textEn: "Plenty of room for bags — there's a big storage area under the bus. Just ask the driver and he'll help you stow them.", textZh: "箱子有的是地方——车下面有个大储物区。跟司机说一声他会帮你放。", actionHint: "确认空间充足", frequency: "common" },
              { textEn: "No worries, these buses have huge luggage holds underneath. The driver usually loads them for you when you board.", textZh: "放心，这些大巴下面有很大的行李仓。上车时司机通常会帮你装。", actionHint: "消除顾虑", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "What other options do I have besides the bus? Like a train or shuttle?",
            textZh: "除了大巴还有什么选择？比如火车或穿梭巴士？",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "There's also the airport rail link — faster at 25 minutes but costs $30. Shared shuttles to hotels are about $25 per person. And taxis are around $55 to $70.",
            textZh: "还有机场轨道快线——25分钟更快但30美元。到酒店的拼车穿梭巴士每人大约25美元。出租车大概55到70美元。",
            keyPhrases: [
              { en: "rail link", zh: "轨道快线" },
              { en: "shared shuttles", zh: "拼车穿梭巴士" },
            ],
            alternativeExpressions: [
              { textEn: "If you want faster, the train gets you there in 25 minutes for $30. Shared van shuttles are about $25 per person. Or a cab runs $55 to $70.", textZh: "想快的话火车25分钟到，30块。拼车接驳每人大概25。出租车55到70。", actionHint: "按速度排列选项", frequency: "common" },
              { textEn: "You've also got the rail link — quicker but pricier at $30. Hotel shuttles are about $25 each, and taxis start around $55.", textZh: "还有轨道快线——更快但更贵30块。酒店接驳巴士每人大概25，出租车55起。", actionHint: "对比价格", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the express bus. Thanks for the info!",
            textZh: "我坐快线好了。谢谢！",
          },
          {
            speaker: "them",
            role: "信息台",
            textEn: "You're welcome. Follow the signs to 'Ground Transportation' and you'll find the bus stop right outside.",
            textZh: "不客气。跟着'地面交通'的指示牌走，公交站就在外面。",
            keyPhrases: [
              { en: "Ground Transportation", zh: "地面交通" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Just look for the 'Ground Transportation' signs — they'll lead you right to the bus stop outside.", textZh: "没问题！找写着地面交通的指示牌——会带你到外面的公交站。", actionHint: "简洁指路", frequency: "common" },
              { textEn: "Happy to help. Head toward the 'Ground Transportation' exit — you can't miss the bus stop, it's right outside the doors.", textZh: "乐意帮忙。往地面交通出口走——公交站就在门外面，不会错过的。", actionHint: "自信指路", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "预约接送服务",
        titleEn: "Pre-booked Airport Transfer",
        description: "使用预约的机场接送服务或寻找接机司机",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I pre-booked an airport transfer but I can't find my driver. He was supposed to meet me at arrivals.",
            textZh: "我预约了机场接送但找不到司机。他应该在到达大厅接我的。",
          },
          {
            speaker: "them",
            role: "司机（电话）",
            textEn: "Hi, I'm in the waiting area outside Terminal 2. I'm holding a sign with your name. Are you in Terminal 1 or 2?",
            textZh: "你好，我在2号航站楼外面的等候区。我举着写你名字的牌子。你在1号还是2号航站楼？",
            keyPhrases: [
              { en: "waiting area", zh: "等候区" },
              { en: "holding a sign", zh: "举着牌子" },
            ],
            alternativeExpressions: [
              { textEn: "Hey there! I'm outside Terminal 2 with a sign with your name on it. Which terminal did you land at — 1 or 2?", textZh: "你好！我在2号航站楼外面举着写你名字的牌子。你降落在哪个航站楼——1还是2？", actionHint: "确认位置", frequency: "common" },
              { textEn: "I'm at the pickup zone at Terminal 2, holding your name sign. Can you check which terminal you're in? It should be on the signs around you.", textZh: "我在2号航站楼接客区举着你的名字牌。你看看你在哪个航站楼？周围标志上应该有写。", actionHint: "帮助确认位置", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I'm in Terminal 1. Is there a shuttle between terminals or should I walk?",
            textZh: "哦，我在1号航站楼。航站楼之间有摆渡车还是要走路？",
          },
          {
            speaker: "them",
            role: "司机（电话）",
            textEn: "There's a free inter-terminal shuttle. But don't worry — I'll drive over to Terminal 1. Give me five minutes. Meet me at the pickup zone, lane 3.",
            textZh: "有免费的航站楼间摆渡车。但别担心——我开过去。给我5分钟。在接客区3号车道等我。",
            keyPhrases: [
              { en: "inter-terminal shuttle", zh: "航站楼间摆渡车" },
              { en: "pickup zone", zh: "接客区" },
              { en: "lane 3", zh: "3号车道" },
            ],
            alternativeExpressions: [
              { textEn: "No worries, I'll come to you. Stay at Terminal 1, head to the pickup area, lane 3. I'll be there in about five minutes.", textZh: "没事，我过去找你。在1号航站楼别动，去接客区3号车道。我大概五分钟到。", actionHint: "主动前往", frequency: "common" },
              { textEn: "Stay put — I'll swing over to Terminal 1. Should take me just a few minutes. Wait at the curbside pickup, lane 3.", textZh: "你别动——我开过去1号航站楼。几分钟就到。在路边接客区3号车道等我。", actionHint: "让乘客不要移动", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'm wearing a blue jacket and I have two suitcases. Is the car big enough?",
            textZh: "谢谢。我穿蓝色外套，有两个行李箱。车够大吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "I have a minivan — plenty of space. I'll flash my headlights when I see you. What's the address for your hotel?",
            textZh: "我开的是面包车——空间很大。看到你我会闪大灯。你酒店地址是什么？",
            keyPhrases: [
              { en: "minivan", zh: "面包车" },
              { en: "flash my headlights", zh: "闪大灯" },
            ],
            alternativeExpressions: [
              { textEn: "I'm in a minivan, so there's tons of room for your bags. I'll blink my lights when I spot you. What hotel am I taking you to?", textZh: "我开的面包车，行李箱有的是空间。看到你我闪灯。送你去哪个酒店？", actionHint: "确认目的地", frequency: "common" },
              { textEn: "Don't worry about space — I've got a van. I'll flash the headlights so you know it's me. Where are we headed — what's the hotel?", textZh: "空间不用担心——我开的是面包车。我会闪大灯让你认出我。去哪——什么酒店？", actionHint: "消除顾虑并确认", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's the Marriott on Broad Street. The booking confirmation says the ride is already paid for. Is that right?",
            textZh: "万豪酒店，百老街上的。预订确认上说已经付过了。对吧？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, the transfer was prepaid through the booking company. No additional charge. However, tips are appreciated.",
            textZh: "是的，接送费已经通过预订公司付了。不用额外付费。不过小费随意。",
            keyPhrases: [
              { en: "prepaid", zh: "已预付" },
              { en: "no additional charge", zh: "不用额外付费" },
              { en: "tips are appreciated", zh: "小费随意" },
            ],
            alternativeExpressions: [
              { textEn: "All paid for already through the booking site. You don't owe anything extra. A tip is always welcome but not required.", textZh: "预订网站已经付过了。不用再付什么。小费欢迎但不强制。", actionHint: "确认已付", frequency: "common" },
              { textEn: "Yep, it's all covered in your reservation. No money needed — though if you feel like tipping, that's up to you.", textZh: "对，预订里都包了。不用给钱——小费随意看你。", actionHint: "轻松说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take to get to the hotel?",
            textZh: "到酒店要多久？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "About 35 minutes at this hour. I see you now — I'm the silver minivan right in front of you. Welcome to the city!",
            textZh: "这个时间段大概35分钟。我看到你了——就是你面前的银色面包车。欢迎来到这座城市！",
            keyPhrases: [
              { en: "at this hour", zh: "这个时间段" },
            ],
            alternativeExpressions: [
              { textEn: "Should be about 35 minutes this time of day. Oh, I can see you — silver van, right in front of you! Hop in. Welcome!", textZh: "这个时间大概35分钟。哦，我看到你了——银色面包车，就在你面前！上车吧。欢迎！", actionHint: "热情接客", frequency: "common" },
              { textEn: "Around 35 minutes with this traffic. I'm pulling up right now — see the silver minivan? That's me. Welcome to town!", textZh: "这个交通状况大概35分钟。我正停过来——看到银色面包车了吗？就是我。欢迎来！", actionHint: "实时对接", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 酒店班车 ====================
  {
    id: "transport-hotel-shuttle",
    category: "transport",
    titleZh: "酒店班车",
    titleEn: "Hotel Shuttle",
    description: "使用酒店提供的免费班车往返机场或周边景点",
    otherRole: "酒店前台",
    otherRoleIcon: "🏨",
    flows: [
      {
        id: "basic",
        titleZh: "预约酒店班车",
        titleEn: "Booking the Hotel Shuttle",
        description: "向酒店前台预约免费机场班车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, does the hotel have a shuttle to the airport? I have a flight tomorrow morning.",
            textZh: "你好，酒店有去机场的班车吗？我明天早上有航班。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we offer a complimentary airport shuttle. It runs every 30 minutes from 5 AM to 10 PM. What time is your flight?",
            textZh: "有的，我们提供免费机场班车。早5点到晚10点每30分钟一班。你几点的航班？",
            keyPhrases: [
              { en: "complimentary", zh: "免费的" },
              { en: "runs every 30 minutes", zh: "每30分钟一班" },
            ],
            alternativeExpressions: [
              { textEn: "We do! It's free for hotel guests. Leaves every half hour, starting at 5 AM, last one at 10 PM. When's your flight?", textZh: "有！住客免费。每半小时一班，早5点开始，最后一班晚10点。你几点的航班？", actionHint: "确认并询问", frequency: "common" },
              { textEn: "Absolutely, there's a free shuttle to the airport. It runs from 5 in the morning until 10 at night, every 30 minutes. What time do you need to be there?", textZh: "当然，有免费去机场的班车。早5点到晚10点运行，每30分钟一班。你几点要到那？", actionHint: "详细时间表", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "My flight is at 9 AM. What time should I take the shuttle to give myself enough time?",
            textZh: "我的航班早上9点。坐几点的班车比较充裕？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'd recommend the 6:30 AM shuttle. The ride takes about 20 minutes, which gives you two hours before your flight for check-in and security.",
            textZh: "建议坐6:30的班车。车程大约20分钟，给你两小时办理值机和过安检。",
            keyPhrases: [
              { en: "recommend", zh: "建议" },
              { en: "check-in and security", zh: "值机和安检" },
            ],
            alternativeExpressions: [
              { textEn: "I'd say take the 6:30 one. It's about a 20-minute ride, so you'll be at the airport by 7 — two full hours before your flight.", textZh: "建议坐6:30那班。车程大概20分钟，7点到机场——起飞前整两个小时。", actionHint: "计算到达时间", frequency: "common" },
              { textEn: "The 6:30 shuttle is your best bet. Gets you there around 6:50, leaving plenty of time for check-in, security, and even a coffee.", textZh: "6:30的班车最合适。大概6:50到，有充足时间值机、安检，甚至喝杯咖啡。", actionHint: "强调充裕", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I reserve a spot on the 6:30 shuttle, or is it first come, first served?",
            textZh: "6:30的班车能预约吗？还是先到先上？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We do take reservations. I'll put you down for the 6:30 AM shuttle. Please be in the lobby five minutes early. Name and room number?",
            textZh: "可以预约。我帮你登记6:30的班车。请提前五分钟到大堂。姓名和房间号？",
            keyPhrases: [
              { en: "reservations", zh: "预约" },
              { en: "put you down for", zh: "帮你登记" },
              { en: "lobby", zh: "大堂" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, I can book you a seat. I'll put you on the 6:30 one. Just be downstairs in the lobby by 6:25. What's your name and room?", textZh: "好的，我帮你订个位子。安排6:30那班。6:25之前到大堂就行。你姓名和房间号？", actionHint: "高效登记", frequency: "common" },
              { textEn: "Yes, we take reservations. Let me sign you up for the 6:30 AM departure. Come to the lobby a few minutes before. Name and room number, please?", textZh: "是的，可以预约。我帮你登记早上6:30出发那班。提前几分钟来大堂。姓名和房间号？", actionHint: "正式预约", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Room 412, under the name Chen. Where exactly does the shuttle pick us up?",
            textZh: "412房间，姓陈。班车在哪里接？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The shuttle picks up at the main entrance, right under the covered driveway. Look for the white van with our hotel logo.",
            textZh: "在正门接，就在有顶的车道下面。找白色的带酒店标志的面包车。",
            keyPhrases: [
              { en: "main entrance", zh: "正门" },
              { en: "covered driveway", zh: "有顶的车道" },
            ],
            alternativeExpressions: [
              { textEn: "Right out front — under the canopy at the main entrance. You'll see a white van with the hotel name on the side.", textZh: "就在正前方——正门的雨棚下面。你会看到一辆侧面有酒店名字的白色面包车。", actionHint: "具体描述", frequency: "common" },
              { textEn: "Walk out the front door, stay under the covered area, and the shuttle will pull up there. It's a white van — can't miss the logo.", textZh: "出正门，待在有顶的区域，班车会停那里。白色面包车——酒店标志很明显。", actionHint: "步骤指引", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "And which terminal does it go to? My airline is Delta.",
            textZh: "去哪个航站楼？我坐的是达美航空。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "The driver will drop you at your terminal. Just tell him Delta when you board. He'll take you to the right spot.",
            textZh: "司机会送你到你的航站楼。上车时告诉他达美就行。他会带你到对的地方。",
            keyPhrases: [
              { en: "drop you at", zh: "送你到" },
              { en: "your terminal", zh: "你的航站楼" },
            ],
            alternativeExpressions: [
              { textEn: "Just let the driver know you're flying Delta and he'll drop you at the right terminal. Easy.", textZh: "跟司机说你坐达美的，他会把你送到对的航站楼。很简单。", actionHint: "简单指示", frequency: "common" },
              { textEn: "He makes stops at each terminal. When you get on, say 'Delta' and he'll know exactly where to let you off.", textZh: "他每个航站楼都停。上车时说达美，他就知道在哪让你下了。", actionHint: "解释流程", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "使用酒店景点班车",
        titleEn: "Hotel Attraction Shuttle",
        description: "使用酒店提供的往返景点的班车服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I saw a sign in the lobby about a shuttle to the theme parks. Is that a free service?",
            textZh: "我在大堂看到去主题公园的班车告示。这是免费的吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, we have a free shuttle to the main theme parks. It runs four times a day — morning and afternoon departures both ways.",
            textZh: "是的，我们有免费班车去主要主题公园。每天四班——早上和下午各一班往返。",
            keyPhrases: [
              { en: "theme parks", zh: "主题公园" },
              { en: "four times a day", zh: "每天四班" },
              { en: "both ways", zh: "往返" },
            ],
            alternativeExpressions: [
              { textEn: "We do! Free shuttle to the parks — goes out twice in the morning and brings people back twice in the afternoon.", textZh: "有的！去公园的免费班车——早上去两趟，下午回来两趟。", actionHint: "简化时间表", frequency: "common" },
              { textEn: "Absolutely, complimentary shuttle service to the theme parks. Four departures daily — two going, two coming back.", textZh: "当然，免费主题公园班车服务。每天四班——两班去两班回。", actionHint: "正式确认", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What are the departure times? And do I need to book in advance?",
            textZh: "出发时间是什么？需要提前预约吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Departures to the parks are at 8 AM and 10 AM. Return trips are at 5 PM and 8 PM. No reservation needed, but seats are limited.",
            textZh: "去公园是早上8点和10点。回来是下午5点和晚上8点。不需要预约，但座位有限。",
            keyPhrases: [
              { en: "return trips", zh: "返程" },
              { en: "seats are limited", zh: "座位有限" },
            ],
            alternativeExpressions: [
              { textEn: "Morning shuttles leave at 8 and 10. Return ones are at 5 and 8 in the evening. First come, first served — no booking needed.", textZh: "早上8点和10点出发。回来是下午5点和晚上8点。先到先上——不用预约。", actionHint: "简明时刻表", frequency: "common" },
              { textEn: "Outbound at 8 AM and 10 AM, coming back at 5 PM and 8 PM. You don't need a reservation, but I'd get there early — seats fill up fast.", textZh: "去程8点和10点，回程下午5点和晚上8点。不用预约，但建议早点到——座位很快就满。", actionHint: "建议早到", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the shuttle is full? Is there another way to get to the park?",
            textZh: "如果班车满了怎么办？有别的方式去公园吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You could take a rideshare — it's about $15 from here. Or the public bus route 42 goes there for $2, but it takes longer.",
            textZh: "可以叫网约车——从这里大概15美元。或者42路公交2美元也到，但时间更长。",
            keyPhrases: [
              { en: "rideshare", zh: "网约车" },
              { en: "public bus route", zh: "公交路线" },
            ],
            alternativeExpressions: [
              { textEn: "An Uber or Lyft would be about fifteen bucks from the hotel. There's also bus 42 right outside — only $2, just a slower ride.", textZh: "从酒店叫个Uber或Lyft大概15块。外面也有42路公交——只要2块，就是慢点。", actionHint: "按价格对比", frequency: "common" },
              { textEn: "Your best bet if the shuttle is full is a rideshare — about $15. The budget option is bus 42 for just $2, but it takes a while.", textZh: "班车满了的话最好叫网约车——大概15块。省钱的话坐42路公交只要2块，但要一会儿。", actionHint: "区分预算选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "If we want to leave the park at 3 PM, what are our options since the shuttle doesn't come until 5?",
            textZh: "如果我们想3点离开公园，但班车5点才来，有什么办法？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You'd need to arrange your own transportation for off-schedule times. I recommend scheduling a rideshare from the app — it's the easiest.",
            textZh: "非班车时间需要自己安排交通。建议用APP叫网约车——最方便。",
            keyPhrases: [
              { en: "off-schedule", zh: "非班车时间" },
              { en: "arrange your own transportation", zh: "自己安排交通" },
            ],
            alternativeExpressions: [
              { textEn: "Between shuttle times, you'd have to get yourself back. Just order an Uber or Lyft from the park — takes about five minutes to arrive.", textZh: "班车间隔期间得自己回来。在公园叫个Uber或Lyft就行——大概五分钟就到。", actionHint: "具体替代方案", frequency: "common" },
              { textEn: "The shuttle only runs at set times, so in between you're on your own. A rideshare is the quickest and easiest option.", textZh: "班车只在固定时间运行，中间得自己安排。网约车是最快最方便的选择。", actionHint: "解释并推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Does the shuttle also go to the shopping outlets or downtown? We want to explore a bit.",
            textZh: "班车也去奥特莱斯或市中心吗？我们想逛逛。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "We have a separate shuttle to the outlet mall on Saturdays only. For downtown, the city bus stop is right outside our gate — very convenient.",
            textZh: "只有周六有单独去奥特莱斯的班车。去市中心的话，门口就有公交站——很方便。",
            keyPhrases: [
              { en: "outlet mall", zh: "奥特莱斯" },
              { en: "Saturdays only", zh: "仅限周六" },
              { en: "right outside our gate", zh: "就在门口" },
            ],
            alternativeExpressions: [
              { textEn: "There's an outlet mall shuttle but only on Saturdays. For downtown, super easy — the public bus stops right out front.", textZh: "有去奥特莱斯的班车但只有周六。去市中心很方便——公交车就停在门口。", actionHint: "区分不同目的地", frequency: "common" },
              { textEn: "The outlets have a Saturday-only shuttle. If you're heading downtown, just walk out the front gate — there's a city bus stop right there.", textZh: "奥特莱斯有周六专线班车。想去市中心的话出正门就是——那里就有公交站。", actionHint: "指路", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 交通违规被拦 ====================
  {
    id: "transport-traffic-stop",
    category: "transport",
    titleZh: "被交警拦下",
    titleEn: "Traffic Stop",
    description: "开车时被警察拦下检查，正确应对交通执法",
    otherRole: "交警",
    otherRoleIcon: "👮",
    flows: [
      {
        id: "basic",
        titleZh: "例行检查",
        titleEn: "Routine Traffic Stop",
        description: "被警察拦下的基本应对流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "警察",
            textEn: "Good afternoon. License and registration, please. Do you know why I pulled you over?",
            textZh: "下午好。请出示驾照和车辆登记。你知道为什么拦你吗？",
            keyPhrases: [
              { en: "license and registration", zh: "驾照和车辆登记" },
              { en: "pulled you over", zh: "拦下你" },
            ],
            alternativeExpressions: [
              { textEn: "Afternoon. I need to see your license and registration. Any idea why I stopped you today?", textZh: "下午好。我需要看你的驾照和车辆登记。知道今天为什么拦你吗？", actionHint: "标准开场", frequency: "common" },
              { textEn: "Hi there. Can I get your driver's license and vehicle registration? Do you know the reason for this stop?", textZh: "你好。给我看看驾照和车辆登记好吗？知道为什么被拦下来吗？", actionHint: "较温和的语气", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good afternoon, officer. No, I'm not sure. Here's my license. The car is a rental — the registration should be in the glove box.",
            textZh: "下午好，警官。我不确定。这是我的驾照。车是租的——登记证应该在手套箱里。",
            culturalNote: "被拦下时双手放在方向盘上，不要急着翻找东西。先告诉警察你要做什么再动手。在美国这非常重要。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Go ahead and get the registration. You were going 45 in a 30 zone. Were you aware of the speed limit here?",
            textZh: "好的，拿登记证吧。你在限速30的区域开了45。你知道这里的限速吗？",
            keyPhrases: [
              { en: "speed limit", zh: "限速" },
              { en: "go ahead", zh: "好的/请" },
              { en: "30 zone", zh: "限速30的区域" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, grab the registration. The reason I stopped you — you were doing 45 in a 30. Did you see the speed limit sign back there?", textZh: "好的，拿登记证。拦你的原因——你在限速30的路上开了45。你看到后面的限速牌了吗？", actionHint: "说明原因", frequency: "common" },
              { textEn: "Go ahead and find the registration. I clocked you at 45 miles per hour in a 30 zone. Were you aware this is a reduced speed area?", textZh: "你去找登记证。我测到你在限速30区域开到了时速45英里。你知道这里是减速区吗？", actionHint: "正式告知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm sorry, officer. I didn't notice the sign. I'm not from around here — I'm a tourist.",
            textZh: "抱歉，警官。我没注意到标志。我不是本地人——是游客。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I understand, but the speed limit is posted. I'm going to run your information. Sit tight.",
            textZh: "我理解，但限速是有标示的。我要核查一下你的信息。在车里等着。",
            keyPhrases: [
              { en: "run your information", zh: "核查信息" },
              { en: "sit tight", zh: "在原地等着" },
              { en: "posted", zh: "标示的" },
            ],
            alternativeExpressions: [
              { textEn: "I hear you, but the signs are clearly posted. Let me check your license real quick. Just stay in the car.", textZh: "我理解，但标志牌很清楚。我查一下你的驾照。待在车里。", actionHint: "例行公事", frequency: "common" },
              { textEn: "I appreciate that, but the speed limit signs are there for a reason. I need to run your info — I'll be back in a minute.", textZh: "我理解，但限速牌放在那里是有原因的。我需要核查你的信息——一会儿就回来。", actionHint: "专业处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course, officer. Take your time.",
            textZh: "好的，警官。慢慢来。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Everything checks out. I'm going to give you a warning this time. Please watch your speed in residential areas.",
            textZh: "一切没问题。这次给你一个口头警告。请在住宅区注意车速。",
            keyPhrases: [
              { en: "checks out", zh: "没问题" },
              { en: "warning", zh: "警告" },
              { en: "residential areas", zh: "住宅区" },
            ],
            alternativeExpressions: [
              { textEn: "Your record is clean, so I'm just going to give you a verbal warning today. Slow down in the neighborhoods, alright?", textZh: "你的记录没问题，所以今天就给你口头警告。在居民区慢点开，好吗？", actionHint: "宽容放行", frequency: "common" },
              { textEn: "All good on your end. I'll let you off with a warning this time. Just be mindful of the speed limit in residential zones.", textZh: "你这边都没问题。这次就给你个警告。注意住宅区的限速。", actionHint: "放行并提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you, officer. I'll be more careful. I really appreciate the warning instead of a ticket.",
            textZh: "谢谢，警官。我会更小心的。很感谢给口头警告而不是罚单。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Drive safely. Welcome to our city. If you need directions, feel free to ask any officer.",
            textZh: "开车小心。欢迎来到我们的城市。需要问路的话，随时问任何警察。",
            keyPhrases: [
              { en: "drive safely", zh: "开车小心" },
            ],
            alternativeExpressions: [
              { textEn: "Stay safe out there. Enjoy your visit, and don't hesitate to flag down an officer if you get lost.", textZh: "注意安全。好好玩，迷路了随时拦个警察问。", actionHint: "友善送行", frequency: "common" },
              { textEn: "Be safe and enjoy your time here. We're happy to help with directions anytime — just wave one of us down.", textZh: "注意安全，好好享受。问路随时招手拦我们——很乐意帮忙。", actionHint: "热情欢迎", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "收到罚单",
        titleEn: "Getting a Traffic Ticket",
        description: "被开罚单后了解如何处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "警察",
            textEn: "I clocked you at 52 in a 35 zone. That's significantly over the limit. I'll have to issue a citation.",
            textZh: "我测到你在限速35的区域开到了52。超速很严重。我要开罚单了。",
            keyPhrases: [
              { en: "clocked you", zh: "测到你的速度" },
              { en: "issue a citation", zh: "开罚单" },
              { en: "significantly over", zh: "严重超过" },
            ],
            alternativeExpressions: [
              { textEn: "My radar had you at 52 in a 35 zone. That's 17 over the limit — I'm going to have to write you a ticket for that.", textZh: "我的雷达测到你在限速35的区域开了52。超了17——我得给你开罚单了。", actionHint: "具体数字说明", frequency: "common" },
              { textEn: "You were going 52 where the speed limit is 35. That's well over the limit, so unfortunately I have to issue a citation.", textZh: "你在限速35的地方开了52。超速很多，所以很遗憾我必须开罚单。", actionHint: "表示无奈但必须执行", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand, officer. What do I need to do with the ticket? I'm visiting from overseas.",
            textZh: "我明白了，警官。罚单要怎么处理？我是从国外来的。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "The citation has all the details. You can either pay the fine online, by mail, or appear in court on the date listed if you want to contest it.",
            textZh: "罚单上有所有信息。你可以在线、邮寄缴纳罚款，或者在上面列的日期到法庭申诉。",
            keyPhrases: [
              { en: "citation", zh: "罚单" },
              { en: "pay the fine", zh: "缴纳罚款" },
              { en: "contest it", zh: "申诉" },
              { en: "appear in court", zh: "到法庭" },
            ],
            alternativeExpressions: [
              { textEn: "Everything you need is on the ticket. You can pay online or by mail. If you want to fight it, the court date is printed on there.", textZh: "罚单上都有你需要的信息。可以在线或邮寄缴纳。想申诉的话上面印了法庭日期。", actionHint: "指向罚单说明", frequency: "common" },
              { textEn: "The citation explains everything — payment options, court date, the whole deal. Online is the easiest way to pay if you're not contesting.", textZh: "罚单上都写了——付款方式、法庭日期，全部。不申诉的话在线付最方便。", actionHint: "推荐在线付", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the fine? And what happens if I don't pay it since I'll be leaving the country?",
            textZh: "罚款多少？如果我回国后没交会怎样？",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "The fine amount will be determined by the court — usually $150 to $300 for this speed. Unpaid tickets can cause problems if you rent a car or re-enter the US.",
            textZh: "罚款金额由法庭决定——这个速度通常150到300美元。未缴罚款可能在你下次租车或入境美国时造成麻烦。",
            keyPhrases: [
              { en: "fine amount", zh: "罚款金额" },
              { en: "unpaid tickets", zh: "未缴罚款" },
              { en: "re-enter", zh: "再次入境" },
            ],
            alternativeExpressions: [
              { textEn: "The court sets the fine — for going this much over, expect somewhere between $150 and $300. And if you don't pay, it could flag your record next time you visit.", textZh: "法庭定罚款金额——超这么多的话大概150到300。不交的话下次来美国可能会有记录。", actionHint: "估算金额并警告", frequency: "common" },
              { textEn: "For this speed, fines usually range from $150 to $300. I'd strongly recommend paying it — unpaid violations can create issues with future car rentals and US entry.", textZh: "这个速度罚款通常150到300。强烈建议缴纳——未缴违规可能影响以后租车和入境美国。", actionHint: "建议尽快缴纳", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely pay it. Can I pay it online with a foreign credit card?",
            textZh: "我一定会交的。能用外国信用卡在线支付吗？",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Yes, the court website accepts international credit cards. The website address is on the citation. Pay within 30 days to avoid late fees.",
            textZh: "可以，法院网站接受国际信用卡。网址在罚单上。30天内缴纳以免逾期费。",
            keyPhrases: [
              { en: "within 30 days", zh: "30天内" },
              { en: "late fees", zh: "逾期费" },
            ],
            alternativeExpressions: [
              { textEn: "International cards work on the court website — the URL is printed right on the citation. Just make sure you pay within 30 days.", textZh: "法院网站支持国际信用卡——网址印在罚单上。30天内付就行。", actionHint: "确认支付方式", frequency: "common" },
              { textEn: "The website takes foreign credit cards, no problem. You've got 30 days to pay before they add late penalties. The web address is on your ticket.", textZh: "网站接受外国信用卡，没问题。30天内付款，否则加逾期罚款。网址在你的罚单上。", actionHint: "强调时限", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will the rental car company be notified about this ticket?",
            textZh: "租车公司会被通知这张罚单吗？",
            culturalNote: "美国的交通罚单跟人走不跟车走，但未缴罚款可能通过车牌追溯到租车公司，他们会向你收取管理费。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "The ticket is in your name, not the rental company's. But if you don't pay, the court may contact the registered owner — which is the rental company.",
            textZh: "罚单开在你名下，不是租车公司的。但如果你不交，法院可能会联系车辆登记人——也就是租车公司。",
            keyPhrases: [
              { en: "in your name", zh: "在你名下" },
              { en: "registered owner", zh: "车辆登记人" },
            ],
            alternativeExpressions: [
              { textEn: "It's issued to you personally, not the rental company. But if it goes unpaid, the court tracks the plate back to the rental company, and they'll come after you.", textZh: "罚单是开给你个人的，不是租车公司。但不交的话法院会通过车牌追踪到租车公司，然后他们会找你。", actionHint: "解释追踪流程", frequency: "common" },
              { textEn: "Your name is on the ticket. The rental company won't know about it unless you don't pay — then the court contacts them as the vehicle owner.", textZh: "你的名字在罚单上。租车公司不会知道，除非你不交——那时法院会联系他们作为车辆所有者。", actionHint: "说明不交的后果", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. I'll take care of it right away. Thank you for explaining everything.",
            textZh: "明白了。我马上处理。谢谢您解释这么详细。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "You're welcome. Slow down and enjoy your visit. Sign here — this is not an admission of guilt, just confirmation you received the citation.",
            textZh: "不客气。慢点开，享受旅行。在这里签名——这不是认罪，只是确认收到了罚单。",
            keyPhrases: [
              { en: "admission of guilt", zh: "认罪" },
              { en: "confirmation", zh: "确认" },
            ],
            alternativeExpressions: [
              { textEn: "Just need your signature right here. Signing doesn't mean you're admitting fault — it just says you received the ticket. Drive safe.", textZh: "在这里签个名就行。签名不代表认错——只是确认你收到了罚单。开车注意安全。", actionHint: "解释签名含义", frequency: "common" },
              { textEn: "Sign on this line, please. It's just an acknowledgment that I gave you the citation — not a guilty plea. Take it easy on the roads.", textZh: "请在这行签名。只是确认我给了你罚单——不是认罪。路上慢点开。", actionHint: "正式说明", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 交通事故 ====================
  {
    id: "transport-traffic-accident",
    category: "transport",
    titleZh: "交通事故",
    titleEn: "Traffic Accident",
    description: "发生轻微交通事故后与对方和保险公司沟通",
    otherRole: "事故对方司机",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "轻微碰撞",
        titleEn: "Minor Fender Bender",
        description: "停车场或低速轻微碰撞的处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "对方司机",
            textEn: "Hey! You just backed into my car! Look at this dent on my bumper!",
            textZh: "嘿！你刚倒车撞了我的车！看我保险杠上这个坑！",
            keyPhrases: [
              { en: "backed into", zh: "倒车撞了" },
              { en: "dent", zh: "凹痕" },
              { en: "bumper", zh: "保险杠" },
            ],
            alternativeExpressions: [
              { textEn: "Whoa, whoa! You just hit my car! There's a huge dent right here on the bumper!", textZh: "喂喂！你刚撞了我的车！保险杠上这有个大坑！", actionHint: "激动指出", frequency: "common" },
              { textEn: "Excuse me! You reversed right into my car. Look at the damage to my front bumper — this is bad.", textZh: "哎！你倒车直接撞上我的车了。看看我前保险杠的损坏——这很严重。", actionHint: "严肃指出损坏", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm so sorry! Are you okay? I didn't see your car when I was reversing.",
            textZh: "太对不起了！你没事吧？我倒车时没看到你的车。",
            culturalNote: "发生事故后先确认双方是否安全，然后不要认全责，说'sorry'在美国不等于承认过错。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "I'm fine, but my car isn't. We need to exchange information. Do you have your insurance card?",
            textZh: "我没事，但我的车有事。我们需要交换信息。你有保险卡吗？",
            keyPhrases: [
              { en: "exchange information", zh: "交换信息" },
              { en: "insurance card", zh: "保险卡" },
            ],
            alternativeExpressions: [
              { textEn: "I'm okay, thanks. But look at my car. We need to swap insurance info. Can I see your insurance card?", textZh: "我人没事，谢谢。但看看我的车。我们得互换保险信息。能看看你的保险卡吗？", actionHint: "冷静处理", frequency: "common" },
              { textEn: "Physically I'm fine, but this damage needs to be dealt with. Let's exchange details — your insurance, name, and phone number please.", textZh: "人没事，但这个损坏得处理。我们交换信息吧——你的保险、姓名和电话。", actionHint: "有条理地处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is a rental car. I have the rental agreement here. Let me also take photos of both cars for the insurance.",
            textZh: "这是租的车。我有租车协议。我也拍一下两辆车的照片给保险公司。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "Good idea. Let me get your name, phone number, and the rental company's insurance info. I'll give you mine too.",
            textZh: "好主意。给我你的姓名、电话和租车公司的保险信息。我也给你我的。",
            keyPhrases: [
              { en: "insurance info", zh: "保险信息" },
            ],
            alternativeExpressions: [
              { textEn: "Smart thinking. I need your name, number, and your rental insurance details. Here's my card with all my info.", textZh: "想得周到。我需要你的名字、电话和租车保险信息。这是我的卡片，上面有我的信息。", actionHint: "互换信息", frequency: "common" },
              { textEn: "Good call on the photos. Let's trade info — I'll need your name, phone, and the rental company's insurance. I'll write mine down for you.", textZh: "拍照很明智。我们互换信息吧——需要你的名字、电话和租车公司保险。我把我的写给你。", actionHint: "配合处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's all my information. Should we call the police to file a report?",
            textZh: "这是我所有的信息。需要叫警察做记录吗？",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "For a minor accident like this, we don't need to in most states. But it's a good idea to file one anyway for insurance purposes.",
            textZh: "这种轻微事故大部分州不需要。但为了保险起见还是做个记录好。",
            keyPhrases: [
              { en: "file a report", zh: "做记录/报案" },
              { en: "insurance purposes", zh: "保险目的" },
            ],
            alternativeExpressions: [
              { textEn: "Technically for something this small, police aren't required. But I'd say let's do it anyway — makes the insurance claim smoother.", textZh: "严格来说这么小的事故不用叫警察。但我觉得还是叫吧——保险理赔会更顺利。", actionHint: "建议报警", frequency: "common" },
              { textEn: "Most states don't require a police report for minor fender benders. But having one makes life easier when dealing with insurance.", textZh: "大部分州轻微碰撞不需要警察报告。但有一份处理保险时会方便很多。", actionHint: "解释好处", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I think we should. I'll call the non-emergency police number. Do you know it?",
            textZh: "我觉得应该叫。我打非紧急报警电话。你知道号码吗？",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "Just dial 311. They'll send someone out. In the meantime, let's move our cars out of the way so we don't block traffic.",
            textZh: "打311。他们会派人来。同时我们把车挪一下，别堵路了。",
            keyPhrases: [
              { en: "non-emergency", zh: "非紧急" },
              { en: "move our cars", zh: "挪车" },
              { en: "block traffic", zh: "堵路" },
            ],
            alternativeExpressions: [
              { textEn: "Call 311 — that's the non-emergency line. They'll send an officer. While we wait, let's pull our cars into those spots so we're not in the way.", textZh: "打311——非紧急电话。他们会派警察来。等的时候我们把车停到那些车位去别挡路。", actionHint: "安排处理顺序", frequency: "common" },
              { textEn: "Dial 311 and they'll dispatch someone. First though, let's get our cars to the side before we cause a traffic jam.", textZh: "拨311他们会派人来。不过先把车挪到边上，别造成堵车。", actionHint: "优先处理交通", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "联系保险公司",
        titleEn: "Contacting Insurance",
        description: "事故后联系租车公司和保险理赔",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm calling to report an accident with my rental car. It happened about an hour ago in a parking lot.",
            textZh: "你好，我打电话报告租车事故。大约一小时前在停车场发生的。",
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "I'm sorry to hear that. Is everyone safe? Let me pull up your reservation. What's your rental agreement number?",
            textZh: "很遗憾听到这个。大家都安全吗？我来调出你的预订。租车协议号是什么？",
            keyPhrases: [
              { en: "pull up", zh: "调出" },
              { en: "rental agreement number", zh: "租车协议号" },
            ],
            alternativeExpressions: [
              { textEn: "Oh no, sorry about that. First things first — everyone okay? Good. Let me look up your account. What's the agreement number?", textZh: "哦不，很抱歉。首先——大家都没事吧？好的。我查一下你的账户。协议号是什么？", actionHint: "先确认安全", frequency: "common" },
              { textEn: "I'm sorry that happened. As long as everyone is safe, we can handle the rest. Give me your rental agreement number and I'll pull up your file.", textZh: "很遗憾发生这种事。只要大家都安全其他的都好办。给我租车协议号我来调你的档案。", actionHint: "安慰并开始处理", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Everyone is fine. The agreement number is RA-4892. I bought the collision damage waiver when I rented the car.",
            textZh: "大家都没事。协议号是RA-4892。租车时我买了碰撞损害免赔险。",
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "Good, I see the CDW on your file. That covers damage to the rental vehicle. Can you describe the damage and what happened?",
            textZh: "好的，我看到你文件上的碰撞险了。那包含租赁车辆的损害。能描述一下损坏情况和经过吗？",
            keyPhrases: [
              { en: "collision damage waiver", zh: "碰撞损害免赔险" },
              { en: "CDW", zh: "碰撞险" },
              { en: "covers damage", zh: "包含损害" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — you've got CDW on your rental. That means you're covered for damage to our car. Tell me what happened and how bad the damage is.", textZh: "好消息——你租车时买了碰撞险。所以我们的车的损坏是保的。告诉我怎么发生的和损坏有多严重。", actionHint: "确认保障并了解情况", frequency: "common" },
              { textEn: "I can see you purchased the collision damage waiver — smart move. That takes care of any damage to the rental. Walk me through what happened.", textZh: "我看到你买了碰撞险——明智的选择。租赁车的损坏都包了。跟我说说经过。", actionHint: "肯定选择并了解详情", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I was backing out of a parking spot and hit another car. There's a scratch on my rear bumper and a dent on their front bumper.",
            textZh: "我倒车出停车位时撞到了另一辆车。我的后保险杠有划痕，对方前保险杠有凹痕。",
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "Okay. Did you get the other driver's information and take photos? Also, was a police report filed?",
            textZh: "好的。你拿到对方司机的信息和拍照了吗？报警了吗？",
            alternativeExpressions: [
              { textEn: "Got it. Did you manage to get the other person's insurance and contact info? And did you take any photos of the scene?", textZh: "明白了。你拿到对方的保险和联系方式了吗？现场拍照了吗？", actionHint: "逐项确认", frequency: "common" },
              { textEn: "Alright. I need to know — do you have the other driver's details? Photos of the damage? And was a police report made?", textZh: "好的。我需要知道——你有对方司机的信息吗？损坏的照片？报警了吗？", actionHint: "系统性确认", frequency: "occasional" },
            ],
            keyPhrases: [
              { en: "police report", zh: "警察报告" },
              { en: "other driver's information", zh: "对方司机信息" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I have their name, phone, insurance, and photos. The police came and filed a report. I have the report number.",
            textZh: "有的，我有对方的姓名、电话、保险和照片。警察来做了记录。我有报告编号。",
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "Perfect. You've done everything right. With CDW, you won't be responsible for the repair cost to our vehicle. Please email us the photos and the police report number.",
            textZh: "太好了。你处理得都对。有碰撞险的话，你不需要负责我们车辆的维修费。请把照片和报告编号发邮件给我们。",
            keyPhrases: [
              { en: "won't be responsible", zh: "不需要负责" },
              { en: "repair cost", zh: "维修费" },
            ],
            alternativeExpressions: [
              { textEn: "You handled everything perfectly. Since you have CDW, repairs on our car are on us. Just send us the photos and the report number by email.", textZh: "你处理得很完美。因为有碰撞险，我们车的维修我们负责。照片和报告编号发邮件给我们就行。", actionHint: "肯定处理并说明下一步", frequency: "common" },
              { textEn: "Excellent, that's exactly what we need. The CDW means you're fully covered for our vehicle's damage. Email those photos and the police report number to our claims team.", textZh: "太好了，这正是我们需要的。碰撞险意味着我们车辆的损坏完全有保障。把照片和警察报告编号发给我们的理赔团队。", actionHint: "专业理赔引导", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I need to return this car and get a replacement, or can I keep driving it?",
            textZh: "需要还这辆车换一辆吗？还是可以继续开？",
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "If the car is still drivable, you can keep using it. If not, we'll send a replacement to your location. From your description, it sounds like minor damage — you should be fine to drive.",
            textZh: "如果车还能开，可以继续用。如果不能，我们会送一辆替代车到你的位置。从你的描述来看是轻微损坏——应该可以继续开。",
            keyPhrases: [
              { en: "drivable", zh: "能开的" },
              { en: "replacement", zh: "替代车" },
              { en: "minor damage", zh: "轻微损坏" },
            ],
            alternativeExpressions: [
              { textEn: "As long as it still drives okay, keep using it. If anything feels off, call us and we'll bring a replacement car to you. Sounds like it's just cosmetic damage.", textZh: "只要还能正常开，就继续用。有任何不对劲打电话我们送替换车过去。听起来就是外观损坏。", actionHint: "安心使用或换车", frequency: "common" },
              { textEn: "For minor damage like a scratch and dent, you can keep driving it. We'd only swap it out if it's affecting how the car runs. Sounds like you're good.", textZh: "像划痕和凹痕这种轻微损坏，可以继续开。除非影响到车的运行我们才会换。听起来你没问题。", actionHint: "判断是否需要更换", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 取消网约车 ====================
  {
    id: "transport-ride-cancel",
    category: "transport",
    titleZh: "取消网约车",
    titleEn: "Cancelling a Ride",
    description: "取消已叫的网约车或处理司机取消的情况",
    otherRole: "网约车司机",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic",
        titleZh: "取消并重新叫车",
        titleEn: "Cancel and Re-order",
        description: "取消当前网约车并处理取消费问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to cancel the ride. Something came up and I don't need it anymore. I'm sorry for the inconvenience.",
            textZh: "你好，我要取消行程。有事不需要了。抱歉给你添麻烦。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No problem, just cancel in the app. But heads up — if I've already been driving to you for more than five minutes, there might be a cancellation fee.",
            textZh: "没问题，在APP里取消就行。但提醒一下——如果我已经开了五分钟以上来接你，可能会有取消费。",
            keyPhrases: [
              { en: "cancellation fee", zh: "取消费" },
              { en: "heads up", zh: "提醒" },
            ],
            alternativeExpressions: [
              { textEn: "All good, just hit cancel on the app. Fair warning though — I've been driving your way for a while, so there may be a small fee.", textZh: "没事，在APP上取消就行。不过提醒一下——我已经朝你那边开了一会儿了，可能会有小额费用。", actionHint: "理解但提醒费用", frequency: "common" },
              { textEn: "Sure, go ahead and cancel. Just so you know, after five minutes of me heading to your pickup, the app usually charges a cancellation fee.", textZh: "好的，取消吧。跟你说一下，我往你那开了五分钟以上的话，APP通常会收取消费。", actionHint: "解释规则", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the cancellation fee usually?",
            textZh: "取消费通常多少？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It depends on the app, but usually $5 to $10. If you cancel within two minutes of booking, it's usually free.",
            textZh: "取决于APP，通常5到10美元。预约后两分钟内取消通常免费。",
            keyPhrases: [
              { en: "within two minutes", zh: "两分钟内" },
              { en: "free", zh: "免费" },
            ],
            alternativeExpressions: [
              { textEn: "Varies by app — somewhere between five and ten bucks. But if you cancelled right after booking, like within two minutes, you probably won't be charged.", textZh: "看是什么APP——大概五到十块。但如果下单后马上取消，比如两分钟内，一般不会收费。", actionHint: "说明变量", frequency: "common" },
              { textEn: "Usually five to ten dollars. There's a free cancellation window though — if you cancelled within the first couple of minutes, no charge.", textZh: "通常5到10美元。不过有免费取消窗口——前两分钟内取消不收费。", actionHint: "区分时间窗口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand. Actually, my plans changed again — can I keep the ride but change the destination?",
            textZh: "明白了。其实我计划又变了——能保留这个行程但改目的地吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, you can change the destination in the app. Just tap on 'Where to?' and enter the new address. The fare will be updated automatically.",
            textZh: "可以，在APP里改目的地就行。点'去哪'然后输入新地址。费用会自动更新。",
            keyPhrases: [
              { en: "change the destination", zh: "改目的地" },
              { en: "fare will be updated", zh: "费用会更新" },
            ],
            alternativeExpressions: [
              { textEn: "No problem — just update the destination in the app. Hit 'Edit ride' and type in where you want to go now. Price adjusts automatically.", textZh: "没问题——在APP里更新目的地就行。点编辑行程输入新地址。价格自动调整。", actionHint: "引导操作", frequency: "common" },
              { textEn: "Yeah, the app lets you change it mid-ride. Tap the destination and put in the new address. I'll get the updated route on my end.", textZh: "可以，APP允许中途改。点目的地输入新地址。我这边会收到更新的路线。", actionHint: "说明双方同步", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. The new destination is the airport. Will the price go up a lot?",
            textZh: "好的。新目的地是机场。价格会涨很多吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "The airport is further, so yes, the fare will increase. The app should show you the new estimated price before you confirm.",
            textZh: "机场更远，所以会涨。APP应该会在确认前显示新的预估价格。",
            keyPhrases: [
              { en: "estimated price", zh: "预估价格" },
              { en: "before you confirm", zh: "确认之前" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, the airport is a longer trip so it'll cost more. You'll see the new price pop up in the app before you OK it.", textZh: "对，去机场路程更远所以会更贵。确认之前APP会弹出新价格。", actionHint: "坦诚说明", frequency: "common" },
              { textEn: "It'll definitely be more since the airport is further out. But the app gives you the updated fare upfront — no surprises.", textZh: "肯定会贵一些因为机场更远。但APP会提前给你更新后的价格——没有意外。", actionHint: "强调透明定价", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. How long until you arrive at my pickup location?",
            textZh: "没问题。你还有多久到接人地点？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "About three minutes. I'm just around the corner. Look for a white Toyota Camry, plate number ABC-1234.",
            textZh: "大约三分钟。我就在拐角。找白色丰田凯美瑞，车牌ABC-1234。",
            keyPhrases: [
              { en: "around the corner", zh: "在拐角" },
              { en: "plate number", zh: "车牌" },
            ],
            alternativeExpressions: [
              { textEn: "Almost there — like three minutes out. I'm in a white Camry. Plate is ABC-1234. You'll see me pulling up.", textZh: "快到了——大概三分钟。我开白色凯美瑞。车牌ABC-1234。你会看到我停过来。", actionHint: "即将到达", frequency: "common" },
              { textEn: "I'm right around the corner, be there in about three minutes. White Toyota Camry, license plate ABC-1234 — check the app too, it'll show my location.", textZh: "我就在拐角，大概三分钟到。白色丰田凯美瑞，车牌ABC-1234——也可以看APP上的定位。", actionHint: "提供多种确认方式", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "司机取消了我的行程",
        titleEn: "Driver Cancelled My Ride",
        description: "司机取消了行程后如何处理和重新叫车",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My driver just cancelled on me for the third time. I've been waiting 20 minutes. This is really frustrating.",
            textZh: "司机第三次取消我的行程了。我已经等了20分钟。太让人崩溃了。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm really sorry about that. Multiple cancellations usually happen during peak hours when demand is high. Let me see what I can do.",
            textZh: "真的很抱歉。多次取消通常发生在高峰时段需求量大的时候。我看看能怎么帮你。",
            keyPhrases: [
              { en: "cancelled on me", zh: "取消了我的" },
              { en: "peak hours", zh: "高峰时段" },
              { en: "demand is high", zh: "需求量大" },
            ],
            alternativeExpressions: [
              { textEn: "That's really frustrating, I'm sorry. It tends to happen when there's high demand and not enough drivers. Let me try to help.", textZh: "确实很让人崩溃，很抱歉。需求大司机不够时容易这样。我试试帮你解决。", actionHint: "共情并解决", frequency: "common" },
              { textEn: "I completely understand your frustration. Three cancellations is unacceptable. This is likely a peak-hour issue. Let me look into it.", textZh: "完全理解你的沮丧。三次取消确实不能接受。很可能是高峰时段的问题。我来查查。", actionHint: "认真对待投诉", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a way to guarantee a driver won't cancel? I really need to get to the airport on time.",
            textZh: "有什么办法能保证司机不取消吗？我真的需要准时到机场。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Try requesting a premium ride — those drivers cancel less often. I'm also applying a credit to your account for the inconvenience.",
            textZh: "试试叫高级车型——那些司机取消频率更低。我也会因为不便给你账户加一些积分。",
            keyPhrases: [
              { en: "premium ride", zh: "高级车型" },
              { en: "applying a credit", zh: "加积分" },
            ],
            alternativeExpressions: [
              { textEn: "I'd suggest upgrading to a premium ride — those drivers are less likely to cancel. And I'm putting a credit on your account to make up for the hassle.", textZh: "建议升级到高级车型——那些司机不太会取消。我给你账户加点余额补偿这个麻烦。", actionHint: "建议加补偿", frequency: "common" },
              { textEn: "Here's what I recommend: book a premium car. Higher acceptance rate. I'm also crediting your account for this experience — sorry again.", textZh: "我的建议是叫高级车。接单率更高。我也在给你的账户加补偿——再次抱歉。", actionHint: "方案加补偿", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the credit? And why do drivers keep cancelling? Is it because of my destination?",
            textZh: "积分多少？为什么司机一直取消？是因为我的目的地吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I've added $10 to your account. Some drivers may cancel short trips or trips in heavy traffic. It's against our policy, and repeated cancellers are penalized.",
            textZh: "我加了10美元到你的账户。有些司机可能取消短途或堵车的行程。这违反我们的政策，经常取消的会受到处罚。",
            keyPhrases: [
              { en: "against our policy", zh: "违反政策" },
              { en: "penalized", zh: "受到处罚" },
            ],
            alternativeExpressions: [
              { textEn: "I put $10 credit on your account. Honestly, some drivers cherry-pick rides, which we don't allow. Drivers who keep cancelling get flagged.", textZh: "给你账户加了10块。说实话有些司机挑单，我们不允许这样。经常取消的司机会被标记。", actionHint: "诚实解释", frequency: "common" },
              { textEn: "There's $10 in your account now. Unfortunately, some drivers avoid short or traffic-heavy trips. We take that seriously — repeat offenders face consequences.", textZh: "你账户里现在有10块了。很遗憾有些司机会避开短途或堵车的单。我们很重视这个——屡犯的会有后果。", actionHint: "表明态度", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a scheduled ride option so I can book in advance next time?",
            textZh: "有预约功能吗？下次可以提前订。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, you can schedule rides up to 7 days in advance. It doesn't guarantee the exact pickup time, but it prioritizes matching you with a driver.",
            textZh: "有的，可以提前7天预约。不能保证准确的接车时间，但会优先给你匹配司机。",
            keyPhrases: [
              { en: "schedule rides", zh: "预约行程" },
              { en: "prioritizes matching", zh: "优先匹配" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — the app lets you book rides up to a week ahead. It's not an exact-time guarantee, but it puts you at the front of the line for a driver.", textZh: "当然——APP可以提前一周订。不是精确时间保证，但会让你排在匹配司机的最前面。", actionHint: "解释优先机制", frequency: "common" },
              { textEn: "Yes, there's a scheduled ride feature. You can set it up seven days in advance. The system will start looking for a driver ahead of your pickup time.", textZh: "有的，有预约功能。可以提前七天设定。系统会提前开始为你找司机。", actionHint: "说明工作方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know for next time. For now, I see a new driver accepted. Hopefully this one shows up.",
            textZh: "下次记住。现在有新司机接单了。希望这次能来。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "This driver has a 4.9 rating and is only two minutes away. You should be in good hands. Have a safe trip to the airport!",
            textZh: "这个司机评分4.9，只有两分钟的距离。应该靠谱。去机场一路平安！",
            keyPhrases: [
              { en: "rating", zh: "评分" },
              { en: "in good hands", zh: "靠谱/放心" },
            ],
            alternativeExpressions: [
              { textEn: "Great news — new driver is 4.9 stars and just two minutes out. You're in good shape. Safe travels!", textZh: "好消息——新司机4.9星，两分钟就到。你稳了。一路平安！", actionHint: "积极确认", frequency: "common" },
              { textEn: "Looks like you got a great driver this time — 4.9 rating, almost there. Fingers crossed! Have a great flight.", textZh: "这次匹配到好司机了——4.9分，快到了。希望顺利！祝飞行愉快。", actionHint: "祝福", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 评价网约车 ====================
  {
    id: "transport-ride-rating",
    category: "transport",
    titleZh: "评价网约车体验",
    titleEn: "Rating a Ride",
    description: "网约车结束后评价司机或处理不佳体验",
    otherRole: "网约车司机",
    otherRoleIcon: "⭐",
    flows: [
      {
        id: "basic",
        titleZh: "好评和小费",
        titleEn: "Positive Rating & Tipping",
        description: "给满意的网约车体验好评并给小费",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "That was a great ride, thank you! You really knew the best route to avoid traffic.",
            textZh: "太棒了，谢谢！你真的知道避开堵车的最佳路线。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Thanks! I've been driving this area for years. If you have a moment, I'd really appreciate a five-star rating in the app.",
            textZh: "谢谢！我在这片区域开了好多年了。如果方便的话，希望你能在APP里给个五星评价。",
            keyPhrases: [
              { en: "five-star rating", zh: "五星评价" },
              { en: "appreciate", zh: "感激" },
            ],
            alternativeExpressions: [
              { textEn: "Appreciate it! I know all the shortcuts around here. Hey, if you get a chance, a five-star review would mean a lot to me.", textZh: "谢谢！这附近的捷径我都知道。对了，方便的话给个五星好评对我帮助很大。", actionHint: "感谢并请求评价", frequency: "common" },
              { textEn: "Thank you, glad you enjoyed the ride! Driving this area is my specialty. A five-star rating in the app would really help — if you don't mind.", textZh: "谢谢，很高兴你满意！这一带开车是我的强项。APP里给个五星评价真的很有帮助——如果你不介意的话。", actionHint: "自豪并请求", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely, you deserve it. How does tipping work? Can I tip in the app?",
            textZh: "当然，你值得。小费怎么给？能在APP里给吗？",
            culturalNote: "美国网约车给小费是常见的，通常15-20%。可以在APP里给或直接给现金。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, after you rate the ride, the app will give you an option to add a tip. Cash tips work too if you prefer. Either way, it's really appreciated.",
            textZh: "是的，评价后APP会给你加小费的选项。现金也可以。不管哪种方式都非常感谢。",
            keyPhrases: [
              { en: "add a tip", zh: "加小费" },
              { en: "cash tips", zh: "现金小费" },
            ],
            alternativeExpressions: [
              { textEn: "The tip option comes up right after you give the rating. You can also just hand me cash if that's easier. I appreciate it either way.", textZh: "小费选项在你评分之后会弹出来。直接给我现金也可以。不管哪种都感谢。", actionHint: "说明两种方式", frequency: "common" },
              { textEn: "Once you rate the trip, you'll see a screen to add a tip. Cash works great too — whatever's convenient for you. Really means a lot.", textZh: "给行程评分后会看到加小费的界面。现金也行——你方便就好。真的很感谢。", actionHint: "灵活接受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll tip in the app. Do the drivers see who tipped them? I don't want it to be awkward.",
            textZh: "我在APP里给。司机能看到谁给的小费吗？我不想尴尬。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "We see the tip amount but not until after we've rated you too. So it's completely anonymous in terms of affecting your rating.",
            textZh: "我们能看到小费金额但要在我们也给你评分之后才能看到。所以对你的评分完全没影响。",
            keyPhrases: [
              { en: "anonymous", zh: "匿名的" },
              { en: "affecting your rating", zh: "影响你的评分" },
            ],
            alternativeExpressions: [
              { textEn: "We can see tips, but only after both sides have rated. So tipping or not tipping doesn't change your passenger rating at all.", textZh: "我们能看到小费，但要双方都评了分之后。所以给不给小费完全不影响你的乘客评分。", actionHint: "详细解释机制", frequency: "common" },
              { textEn: "Don't worry — the tip shows up after I've already rated you. So there's zero connection between tipping and your rating.", textZh: "别担心——小费在我给你评分之后才显示。所以小费和你的评分完全没关联。", actionHint: "消除顾虑", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. One more thing — I think I left my water bottle in the back seat. Is there a way to contact you after?",
            textZh: "了解了。还有——我好像把水瓶落在后座了。之后有办法联系你吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Check the app — there's a 'Lost Item' option under the ride history. It'll let you call or message me through the app for 24 hours after the trip.",
            textZh: "查一下APP——行程记录里有'遗失物品'选项。行程结束后24小时内可以通过APP打电话或发消息给我。",
            keyPhrases: [
              { en: "Lost Item", zh: "遗失物品" },
              { en: "ride history", zh: "行程记录" },
            ],
            alternativeExpressions: [
              { textEn: "Go to your ride history in the app and tap 'Lost Item.' You can reach me through there for the next 24 hours.", textZh: "在APP里打开行程记录点遗失物品。接下来24小时可以通过那里联系我。", actionHint: "指导操作", frequency: "common" },
              { textEn: "Open up your trip details and hit the 'Lost Item' button. It'll connect you to me directly. Works for 24 hours after the ride.", textZh: "打开行程详情点遗失物品按钮。会直接连线到我。行程后24小时有效。", actionHint: "简明操作步骤", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll check for it. Thanks again for the smooth ride!",
            textZh: "好的。我查一下。再次感谢平稳的旅程！",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "My pleasure! Enjoy your stay. And don't forget that five-star review — it really helps us out!",
            textZh: "我的荣幸！好好玩。别忘了五星好评——对我们真的很有帮助！",
            keyPhrases: [
              { en: "review", zh: "评价" },
              { en: "helps us out", zh: "对我们有帮助" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Have a great time here. And if you remember, that five-star rating makes a huge difference for us drivers.", textZh: "乐意效劳！好好玩。如果记得的话，五星评价对我们司机影响很大。", actionHint: "再次强调评价", frequency: "common" },
              { textEn: "Anytime! Enjoy your trip. A quick five-star review goes a long way — it helps me get more rides. Take care!", textZh: "随时！享受旅行。点个五星好评很有用——帮我接到更多单。保重！", actionHint: "解释评价意义", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "投诉差评",
        titleEn: "Filing a Complaint",
        description: "对不满意的行程进行投诉和要求退款",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to report a problem with my last ride. The driver took a much longer route than necessary.",
            textZh: "我要投诉上一单行程。司机走了比必要远得多的路线。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I'm sorry about that. I can see your trip history. It does look like the route was longer than the recommended one. Can you tell me more?",
            textZh: "很抱歉。我能看到你的行程记录。路线确实比推荐的长。能告诉我更多吗？",
            keyPhrases: [
              { en: "trip history", zh: "行程记录" },
              { en: "recommended route", zh: "推荐路线" },
              { en: "report a problem", zh: "投诉/报告问题" },
            ],
            alternativeExpressions: [
              { textEn: "I apologize for the experience. Looking at your trip data, the route taken was definitely longer than the optimal one. What exactly happened?", textZh: "为这次体验道歉。看你的行程数据，走的路线确实比最优路线长。具体什么情况？", actionHint: "查看数据确认", frequency: "common" },
              { textEn: "That's not acceptable. I'm pulling up your ride now — and yeah, the route looks significantly longer than it should be. Can you give me more details?", textZh: "这不能接受。我正在调出你的行程——确实，路线比应该走的长很多。能给我更多细节吗？", actionHint: "认真对待", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The trip should have taken 15 minutes but took 35 minutes. I paid almost double what the estimate was.",
            textZh: "行程应该15分钟但用了35分钟。我付了几乎两倍的预估价。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I understand your frustration. I'm going to review the route data. It looks like the driver deviated significantly. I'll adjust your fare to the estimated price.",
            textZh: "我理解你的不满。我来检查路线数据。看起来司机确实偏离了很多。我会把费用调整为预估价格。",
            keyPhrases: [
              { en: "deviated", zh: "偏离" },
              { en: "adjust your fare", zh: "调整费用" },
              { en: "estimated price", zh: "预估价格" },
            ],
            alternativeExpressions: [
              { textEn: "Totally understandable. The data clearly shows the driver went way off the recommended route. I'm correcting the fare to what it should have been.", textZh: "完全理解。数据明确显示司机严重偏离了推荐路线。我把费用改回应该收的金额。", actionHint: "用数据支持", frequency: "common" },
              { textEn: "You have every right to be upset. The GPS data confirms a major detour. I'm adjusting your charge back to the original estimate right now.", textZh: "你完全有理由不满。GPS数据确认了严重绕路。我现在就把费用调回原来的预估价。", actionHint: "即时调整", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Also, the driver was on the phone the entire time and driving aggressively. I didn't feel safe.",
            textZh: "谢谢。另外，司机全程打电话而且开车很猛。我觉得不安全。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "That's a serious safety concern. I'm flagging this driver's account for review. This kind of behavior is not tolerated on our platform.",
            textZh: "这是严重的安全问题。我会标记这个司机的账户进行审查。这种行为在我们平台是不被容忍的。",
            keyPhrases: [
              { en: "safety concern", zh: "安全问题" },
              { en: "flagging", zh: "标记" },
              { en: "not tolerated", zh: "不被容忍" },
            ],
            alternativeExpressions: [
              { textEn: "That's really concerning. I'm escalating this and marking the driver for a safety review. We have zero tolerance for that kind of driving.", textZh: "这非常令人担忧。我要升级处理并标记这个司机进行安全审查。我们对这种驾驶行为零容忍。", actionHint: "严肃对待", frequency: "common" },
              { textEn: "I take that very seriously. Using a phone while driving puts everyone at risk. I'm flagging this driver immediately for investigation.", textZh: "我非常重视这个。开车打电话会危及所有人。我立刻标记这个司机进行调查。", actionHint: "强调安全", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Will I hear back about what action was taken? And can I get a full refund for this trip?",
            textZh: "会告诉我采取了什么措施吗？这单能全额退款吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "We can't share specific actions taken on the driver's account due to privacy, but I've processed a full refund for this trip. It'll appear within 3 to 5 days.",
            textZh: "出于隐私我们不能分享对司机的具体处理，但我已经为这单办理了全额退款。3到5天内到账。",
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "processed", zh: "办理了" },
              { en: "privacy", zh: "隐私" },
            ],
            alternativeExpressions: [
              { textEn: "For privacy reasons I can't tell you exactly what happens to the driver, but your full refund is processed. Should hit your account in 3 to 5 business days.", textZh: "出于隐私原因不能告诉你司机的具体处理结果，但你的全额退款已办理。3到5个工作日内到账。", actionHint: "专业处理", frequency: "common" },
              { textEn: "I wish I could share more, but driver actions are confidential. What I can tell you is you're getting a complete refund — expect it within a few days.", textZh: "我希望能说更多，但对司机的处理是保密的。我能告诉你的是你会获得全额退款——几天内到账。", actionHint: "表达遗憾但确认退款", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate the quick resolution. Will this driver be matched with me again in the future?",
            textZh: "感谢快速解决。以后还会匹配到这个司机吗？",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "I've added this driver to your blocked list, so you won't be matched again. We value your safety and thank you for reporting this.",
            textZh: "我已经把这个司机加到你的屏蔽名单了，不会再匹配到。我们重视你的安全，感谢你的反馈。",
            keyPhrases: [
              { en: "blocked list", zh: "屏蔽名单" },
              { en: "won't be matched", zh: "不会再匹配" },
            ],
            alternativeExpressions: [
              { textEn: "Done — that driver is blocked on your account permanently. You'll never be paired with them again. Thanks for bringing this to our attention.", textZh: "搞定——那个司机在你的账户上永久屏蔽了。再也不会匹配到。感谢你向我们反映。", actionHint: "确认永久屏蔽", frequency: "common" },
              { textEn: "I've blocked the driver from your account. Your safety matters to us, and reports like yours help us keep the platform safe for everyone.", textZh: "我已经在你的账户上屏蔽了这个司机。你的安全对我们很重要，你这样的反馈帮助我们为所有人维护平台安全。", actionHint: "感谢并强调价值", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 公路旅行规划 ====================
  {
    id: "transport-road-trip-plan",
    category: "transport",
    titleZh: "规划公路旅行",
    titleEn: "Planning a Road Trip",
    description: "与朋友或租车公司讨论公路旅行的路线和准备",
    otherRole: "租车公司员工",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "basic",
        titleZh: "租车准备",
        titleEn: "Renting a Car for a Road Trip",
        description: "为公路旅行租车并了解注意事项",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I want to rent a car for a week-long road trip from Los Angeles to San Francisco and back. What do you recommend?",
            textZh: "你好，我想租车从洛杉矶到旧金山来回，一周的公路旅行。推荐什么车？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "For a scenic road trip like that, I'd suggest an SUV or a midsize sedan. The SUV gives you more room for luggage and is great for the coastal highway.",
            textZh: "那种风景公路旅行，我建议SUV或中型轿车。SUV空间大，走沿海公路很棒。",
            keyPhrases: [
              { en: "SUV", zh: "SUV/运动型多用途车" },
              { en: "midsize sedan", zh: "中型轿车" },
              { en: "coastal highway", zh: "沿海公路" },
            ],
            alternativeExpressions: [
              { textEn: "For that kind of trip, I'd go with an SUV. Plenty of space for bags and way more comfortable on those winding coastal roads.", textZh: "这种旅行我推荐SUV。行李空间大，走沿海弯路也更舒服。", actionHint: "直接推荐", frequency: "common" },
              { textEn: "Great trip! You'll want either an SUV for comfort and space, or a midsize sedan if you want to save on gas. Both work well for Highway 1.", textZh: "好行程！你可以选SUV舒适空间大，或者中型轿车省油。跑1号公路都合适。", actionHint: "分析优劣", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the SUV. Is there a mileage limit, or is it unlimited?",
            textZh: "那就SUV。有里程限制吗？还是不限里程？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Our weekly rentals come with unlimited mileage. You'll only pay for gas. The SUV gets about 28 miles per gallon on the highway.",
            textZh: "我们周租是不限里程的。你只需要付油费。这辆SUV高速大约每加仑28英里。",
            keyPhrases: [
              { en: "unlimited mileage", zh: "不限里程" },
              { en: "miles per gallon", zh: "每加仑英里数" },
            ],
            alternativeExpressions: [
              { textEn: "Good news — no mileage limit on weekly rentals. Drive as far as you want. Gas is on you though — this SUV does about 28 mpg on the highway.", textZh: "好消息——周租不限里程。想开多远开多远。油费自理——这辆SUV高速大概28英里每加仑。", actionHint: "强调无限里程", frequency: "common" },
              { textEn: "Weekly packages include unlimited miles, so you won't owe anything extra for distance. The SUV is pretty fuel-efficient too — around 28 miles per gallon.", textZh: "周租套餐包含无限里程，距离不会额外收费。这辆SUV也挺省油——大概每加仑28英里。", actionHint: "综合说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need any special insurance for a long trip? I'm worried about breakdowns in remote areas.",
            textZh: "长途旅行需要特别的保险吗？担心在偏远地区抛锚。",
            culturalNote: "美国公路旅行经过的有些路段手机信号很差。建议提前下载离线地图。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "I recommend adding roadside assistance for $7 a day. It covers towing, flat tires, and lockouts anywhere in the state. Peace of mind on a long trip.",
            textZh: "建议加每天7美元的道路救援。涵盖全州范围内的拖车、爆胎和锁车。长途旅行安心。",
            keyPhrases: [
              { en: "roadside assistance", zh: "道路救援" },
              { en: "lockouts", zh: "锁车/车钥匙锁在车里" },
              { en: "peace of mind", zh: "安心" },
            ],
            alternativeExpressions: [
              { textEn: "For a long trip like yours, I'd definitely add roadside assistance — $7 a day covers towing, flats, locked keys, the whole nine yards.", textZh: "你这种长途旅行，我强烈建议加道路救援——一天7块，涵盖拖车、爆胎、钥匙锁在车里，全包。", actionHint: "强烈推荐", frequency: "common" },
              { textEn: "Roadside assistance is an extra $7 per day but totally worth it on a road trip. If anything goes wrong — flat tire, dead battery, lockout — we've got you covered.", textZh: "道路救援每天多7块但公路旅行绝对值。爆胎、没电、锁车——出什么问题我们都管。", actionHint: "强调值得", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll add that. Can I drop the car off in San Francisco instead of bringing it back here?",
            textZh: "加上。能在旧金山还车而不是开回来吗？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, but there's a one-way drop-off fee of $150. If you bring it back here, there's no extra charge.",
            textZh: "可以，但有150美元的异地还车费。如果开回来没有额外费用。",
            keyPhrases: [
              { en: "one-way drop-off", zh: "异地还车" },
              { en: "no extra charge", zh: "没有额外费用" },
            ],
            alternativeExpressions: [
              { textEn: "You can, but one-way returns have a $150 fee. Bringing it back to this location is free.", textZh: "可以，但异地还车要收150。开回这个店就不收额外费用。", actionHint: "对比费用", frequency: "common" },
              { textEn: "Sure, we allow one-way drop-offs. It's $150 extra though. Round trip back here and there's no surcharge.", textZh: "可以，我们允许异地还车。不过要加150。开回来就没有附加费。", actionHint: "说明政策", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll bring it back then. What's the total cost for one week including insurance?",
            textZh: "那我们开回来好了。一周加保险一共多少？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "The SUV is $385 for the week, plus $49 for roadside assistance, plus $98 for the collision damage waiver. Total comes to $532 before tax.",
            textZh: "SUV一周385美元，道路救援49美元，碰撞险98美元。税前总共532美元。",
            keyPhrases: [
              { en: "before tax", zh: "税前" },
              { en: "total comes to", zh: "总共" },
            ],
            alternativeExpressions: [
              { textEn: "Let me add that up — $385 for the SUV, $49 roadside, $98 collision coverage. That's $532 before tax. Want me to ring it up?", textZh: "我算一下——SUV 385，道路救援49，碰撞险98。税前532。要我开单吗？", actionHint: "逐项加总", frequency: "common" },
              { textEn: "So the breakdown is: $385 rental, $49 roadside assistance, $98 CDW. Comes out to $532 pre-tax for the whole week.", textZh: "费用明细是：租车385，道路救援49，碰撞险98。整个星期税前总计532。", actionHint: "明细报价", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "路线规划讨论",
        titleEn: "Route Planning Discussion",
        description: "与同行者讨论公路旅行的路线选择",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "So, should we take the coastal route on Highway 1, or go through the inland highway? What do you think?",
            textZh: "我们走1号公路沿海路线还是内陆高速？你觉得呢？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Highway 1 is way more scenic — the views are incredible. But it's a lot slower. The inland route saves about four hours.",
            textZh: "1号公路风景好太多了——景色太美了。但慢很多。内陆高速省大约四个小时。",
            keyPhrases: [
              { en: "scenic", zh: "风景好的" },
              { en: "inland route", zh: "内陆路线" },
              { en: "saves about four hours", zh: "省大约四个小时" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely Highway 1 for the views — it's absolutely stunning. Only downside is it adds about four hours compared to the freeway.", textZh: "看风景肯定走1号公路——绝对惊艳。唯一缺点是比高速多大约四个小时。", actionHint: "对比优劣", frequency: "common" },
              { textEn: "The coastal route is gorgeous, no contest. But it's winding and slow. If you're in a hurry, the inland highway is way faster — saves you four hours.", textZh: "沿海路线美得没话说。但弯弯曲曲很慢。赶时间的话内陆高速快多了——省四小时。", actionHint: "根据时间需求建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How about we take the coastal route going up and the faster route coming back? Best of both worlds.",
            textZh: "去的时候走沿海，回来走快的？两全其美。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Love that idea. We should plan our stops too. Big Sur is a must-see, and Hearst Castle is worth a detour.",
            textZh: "好主意。我们也规划一下停靠点。大苏尔必去，赫斯特城堡也值得绕路去看。",
            keyPhrases: [
              { en: "must-see", zh: "必去/必看" },
              { en: "detour", zh: "绕路" },
              { en: "plan our stops", zh: "规划停靠点" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect plan! Let's figure out where to stop along the way. Big Sur is an absolute must, and Hearst Castle is incredible if we have time.", textZh: "完美计划！我们想想沿途在哪停。大苏尔绝对必去，赫斯特城堡有时间的话也很棒。", actionHint: "兴奋规划", frequency: "common" },
              { textEn: "That's the best of both worlds! We definitely need to hit Big Sur going up. And if we detour a bit, Hearst Castle is totally worth it.", textZh: "两全其美！上去的路上一定要停大苏尔。稍微绕一下的话赫斯特城堡绝对值得。", actionHint: "积极响应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do we need hotel reservations along the way, or can we just wing it?",
            textZh: "沿途需要预订酒店吗？还是到了再说？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "In summer, Big Sur and Monterey book up fast. I'd reserve those in advance. The other stops should be easy to find last-minute.",
            textZh: "夏天大苏尔和蒙特雷很快订满。建议提前订那两个。其他站点临时找应该容易。",
            keyPhrases: [
              { en: "book up fast", zh: "很快订满" },
              { en: "reserve in advance", zh: "提前预订" },
              { en: "last-minute", zh: "临时/最后一刻" },
            ],
            alternativeExpressions: [
              { textEn: "Big Sur and Monterey fill up super fast in the summer — definitely book those ahead of time. Everything else, we can wing it.", textZh: "大苏尔和蒙特雷夏天很快满——一定要提前订。其他的我们到了再说。", actionHint: "区分计划和随意", frequency: "common" },
              { textEn: "I'd lock in Big Sur and Monterey now — those sell out. For the rest of the stops, there are always motels and Airbnbs available.", textZh: "大苏尔和蒙特雷现在就订——那些会卖完。其他站点总能找到汽车旅馆和Airbnb。", actionHint: "给出具体建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Should we bring a cooler with snacks and drinks, or just buy things along the way?",
            textZh: "要带个冷藏箱装零食和饮料吗？还是沿路买？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Definitely bring a cooler. Some stretches of Highway 1 have no gas stations or stores for miles. Stock up before we leave.",
            textZh: "一定要带。1号公路有些路段好几英里都没有加油站或商店。出发前备好。",
            keyPhrases: [
              { en: "cooler", zh: "冷藏箱" },
              { en: "stretches", zh: "路段" },
              { en: "stock up", zh: "囤货/备好" },
            ],
            alternativeExpressions: [
              { textEn: "For sure — a cooler is essential. There are long stretches on Highway 1 with absolutely nothing. Load up on snacks and water before we hit the road.", textZh: "必须带——冷藏箱是必备。1号公路有很长路段什么都没有。出发前把零食和水备足。", actionHint: "强调必要性", frequency: "common" },
              { textEn: "100% yes. Parts of that highway are totally remote — no stores for 30 miles in some spots. Pack a cooler and fill it up before we go.", textZh: "百分之百要带。那条公路有些地方特别偏远——有的地方30英里都没有商店。带个冷藏箱出发前装满。", actionHint: "用具体数字说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good call. Let's split the driving — I'll take the morning shifts and you take the afternoons. Deal?",
            textZh: "好想法。轮流开——我开早上的，你开下午的。行吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Deal! Just make sure we're both listed as drivers on the rental agreement, or the insurance won't cover us.",
            textZh: "行！但确保我们俩都列在租车协议的驾驶人上，不然保险不管。",
            keyPhrases: [
              { en: "split the driving", zh: "轮流开车" },
              { en: "listed as drivers", zh: "列为驾驶人" },
              { en: "insurance won't cover", zh: "保险不管" },
            ],
            alternativeExpressions: [
              { textEn: "Sounds fair! One thing though — we both need to be on the rental contract. If I'm not listed, the insurance is void if I'm driving.", textZh: "公平！但是——我们俩都得在租车合同上。如果我没列在上面，我开车时保险就无效了。", actionHint: "提醒重要细节", frequency: "common" },
              { textEn: "Love it, let's do that. But don't forget to add me as an additional driver when you pick up the car — otherwise the insurance doesn't cover me.", textZh: "太好了就这么办。但别忘了提车时把我加为额外驾驶人——不然保险不包我。", actionHint: "具体提醒操作", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 公路旅行休息站 ====================
  {
    id: "transport-road-trip-stop",
    category: "transport",
    titleZh: "公路旅行休息站",
    titleEn: "Road Trip Rest Stop",
    description: "在公路旅行中停靠休息站、加油站或景点",
    otherRole: "休息站员工",
    otherRoleIcon: "🛣️",
    flows: [
      {
        id: "basic",
        titleZh: "在休息站停靠",
        titleEn: "Stopping at a Rest Area",
        description: "在高速公路休息站休息、用餐和提问",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is there a gas station nearby? My tank is getting low.",
            textZh: "请问，附近有加油站吗？我的油快用完了。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "The nearest gas station is at the next exit, about five miles up. There's also one attached to the truck stop two miles south.",
            textZh: "最近的加油站在下一个出口，大概前面5英里。南边2英里的卡车服务区也有一个。",
            keyPhrases: [
              { en: "next exit", zh: "下一个出口" },
              { en: "truck stop", zh: "卡车服务区" },
            ],
            alternativeExpressions: [
              { textEn: "About five miles ahead at the next exit. Or if you go two miles south, there's a big truck stop with gas.", textZh: "前面5英里下个出口就有。或者往南2英里有个大的卡车服务区有加油站。", actionHint: "给出两个方向", frequency: "common" },
              { textEn: "There's one at exit 15, about five miles up the road. Closer option is the truck stop just two miles back that way.", textZh: "15号出口有一个，往前5英里。更近的是往那边回走2英里的卡车服务区。", actionHint: "指向具体出口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Are the restrooms here free to use?",
            textZh: "谢谢。这里的洗手间免费用吗？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, restrooms are free and open 24 hours. They're right inside the building to the left.",
            textZh: "是的，洗手间免费且24小时开放。就在建筑里面左边。",
            keyPhrases: [
              { en: "free and open 24 hours", zh: "免费且24小时开放" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, totally free. Restrooms are inside, on the left. Open 24/7.", textZh: "完全免费。洗手间在里面，左边。全天候开放。", actionHint: "简短回答", frequency: "common" },
              { textEn: "Restrooms are free to use anytime — 24 hours. Walk in the front door and they're right on your left.", textZh: "洗手间随时免费用——24小时。进正门左手边就是。", actionHint: "指引方向", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there somewhere to get coffee and a quick bite to eat?",
            textZh: "有地方可以买杯咖啡和快速吃点东西吗？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "There's a vending machine area and a small food counter with sandwiches, coffee, and snacks. The food counter closes at 8 PM.",
            textZh: "有自动售货机区和一个小食品柜台，有三明治、咖啡和小吃。食品柜台晚上8点关。",
            keyPhrases: [
              { en: "vending machine", zh: "自动售货机" },
              { en: "food counter", zh: "食品柜台" },
            ],
            alternativeExpressions: [
              { textEn: "We have vending machines and a small counter that serves sandwiches and coffee. The counter shuts down at 8, but the vending machines are 24/7.", textZh: "有自动售货机和一个小柜台卖三明治和咖啡。柜台8点关，但售货机24小时都有。", actionHint: "区分营业时间", frequency: "common" },
              { textEn: "There's a food stand inside with hot coffee, sandwiches, and snacks — closes at 8 though. Vending machines are always available.", textZh: "里面有个食品摊有热咖啡、三明治和小吃——不过8点关。自动售货机随时都有。", actionHint: "强调热食选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you have Wi-Fi here? I need to check my map for the next part of our drive.",
            textZh: "这里有Wi-Fi吗？我要查一下接下来的路线。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, free Wi-Fi. The network name is 'RestStop-Free.' It's not super fast, but good enough for maps.",
            textZh: "有的，免费Wi-Fi。网络名是'RestStop-Free'。不是特别快，但查地图够用。",
            keyPhrases: [
              { en: "free Wi-Fi", zh: "免费Wi-Fi" },
              { en: "network name", zh: "网络名" },
            ],
            alternativeExpressions: [
              { textEn: "There's free Wi-Fi — connect to 'RestStop-Free.' Don't expect blazing speed, but it'll get your maps loaded.", textZh: "有免费Wi-Fi——连RestStop-Free。别指望飞快，但加载地图没问题。", actionHint: "管理期望", frequency: "common" },
              { textEn: "Yep, Wi-Fi is free. Look for the network 'RestStop-Free.' It's basic, but fine for checking directions and quick stuff.", textZh: "有，Wi-Fi免费。找RestStop-Free网络。很基本，但查个路线什么的够用。", actionHint: "实话实说", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How far is it to the next rest area? We might need another stop in a few hours.",
            textZh: "下一个休息区有多远？可能过几个小时还要停一次。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "The next rest area is about 60 miles ahead. But there are plenty of gas stations and fast food places at the exits along the way.",
            textZh: "下一个休息区大概前方60英里。但沿途出口有很多加油站和快餐店。",
            keyPhrases: [
              { en: "rest area", zh: "休息区" },
              { en: "along the way", zh: "沿途" },
            ],
            alternativeExpressions: [
              { textEn: "It's about 60 miles to the next official rest stop. But you'll pass several exits with gas and food options before then.", textZh: "下一个正式休息站大约60英里。但在那之前会经过几个有加油站和餐饮的出口。", actionHint: "提供替代选择", frequency: "common" },
              { textEn: "Next rest area is 60 miles up. Don't worry though — there are exits every 10 to 15 miles with gas stations and restaurants.", textZh: "下一个休息区往前60英里。不过别担心——每10到15英里就有出口有加油站和餐厅。", actionHint: "消除担忧", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Is this area safe to take a short nap in the car?",
            textZh: "好的。在这里在车里小睡一会儿安全吗？",
            culturalNote: "美国很多休息站有安保巡逻，短暂休息是允许的。但有些州不允许过夜停车。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, it's well-lit and there's security here. Many travelers take power naps. Just lock your doors and you'll be fine.",
            textZh: "安全的，这里灯光好还有安保。很多旅客会小睡一下。锁好门就没问题。",
            keyPhrases: [
              { en: "well-lit", zh: "灯光好的" },
              { en: "security", zh: "安保" },
              { en: "power naps", zh: "小睡" },
            ],
            alternativeExpressions: [
              { textEn: "Totally safe. Good lighting, security patrols. People nap here all the time. Just keep your doors locked and you're good.", textZh: "完全安全。灯光好，有安保巡逻。人们经常在这儿小睡。锁好门就没事。", actionHint: "安心保证", frequency: "common" },
              { textEn: "This is a well-patrolled rest stop with great lighting. A quick nap is totally fine — just lock up and set an alarm so you don't oversleep.", textZh: "这个休息站有巡逻而且灯光很好。小睡一下完全没问题——锁好门设个闹钟别睡过了。", actionHint: "建议加闹钟", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "路边景点停靠",
        titleEn: "Stopping at a Roadside Attraction",
        description: "路过有趣的路边景点时停下来了解情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, what's this place? The sign says 'World's Largest Ball of Twine.' Should we stop?",
            textZh: "嘿，这是什么地方？牌子上写着'世界上最大的线团'。要停下来看看吗？",
          },
          {
            speaker: "them",
            role: "景点工作人员",
            textEn: "Welcome! It's one of the most famous roadside attractions in America. Admission is free. The twine ball is right inside.",
            textZh: "欢迎！这是美国最有名的路边景点之一。免费参观。线团就在里面。",
            keyPhrases: [
              { en: "roadside attraction", zh: "路边景点" },
              { en: "admission is free", zh: "免费参观" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome! You found one of America's quirkiest roadside attractions. No charge to get in — the giant twine ball is just through those doors.", textZh: "嘿，欢迎！你找到了美国最奇特的路边景点之一。不收费——巨型线团就在那扇门里面。", actionHint: "热情欢迎", frequency: "common" },
              { textEn: "Come on in! Free admission. This place is a classic American road trip stop — people come from all over to see the twine ball.", textZh: "进来吧！免费的。这里是经典的美国公路旅行打卡点——各地的人都来看这个线团。", actionHint: "突出经典地位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fun. How long do people usually spend here?",
            textZh: "好玩。大家一般在这花多久？",
          },
          {
            speaker: "them",
            role: "景点工作人员",
            textEn: "Most people spend about 15 to 20 minutes. Take some photos, check out the gift shop, and you're good to go. A quick fun stop.",
            textZh: "大部分人花15到20分钟。拍几张照，逛逛礼品店，就可以走了。快速有趣的一站。",
            keyPhrases: [
              { en: "gift shop", zh: "礼品店" },
              { en: "good to go", zh: "可以走了" },
            ],
            alternativeExpressions: [
              { textEn: "It's a quick one — most folks are in and out in 15 or 20 minutes. Snap a few pics, grab a souvenir, and you're on your way.", textZh: "很快的——大多数人15到20分钟就逛完了。拍几张照片，买个纪念品，就可以继续上路了。", actionHint: "强调轻松快速", frequency: "common" },
              { textEn: "Fifteen, twenty minutes tops. It's just a fun photo op and there's a cute little gift shop. Perfect road trip pitstop.", textZh: "最多十五二十分钟。就是个拍照的乐趣加一个可爱的小礼品店。完美的公路旅行中转站。", actionHint: "轻松描述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a viewpoint nearby where we can see the landscape? We've been driving through beautiful countryside.",
            textZh: "附近有观景点可以看风景吗？一路开过来乡村风景太美了。",
          },
          {
            speaker: "them",
            role: "景点工作人员",
            textEn: "About three miles north there's a scenic overlook with a great view of the valley. It's well-marked — you can't miss the sign.",
            textZh: "往北大概3英里有个观景台，可以看到山谷的美景。标识很清楚——不会错过的。",
            keyPhrases: [
              { en: "scenic overlook", zh: "观景台" },
              { en: "well-marked", zh: "标识清楚的" },
              { en: "valley", zh: "山谷" },
            ],
            alternativeExpressions: [
              { textEn: "There's a gorgeous overlook just three miles up the road — amazing valley views. Big brown sign, you can't miss it.", textZh: "往前3英里有个超美的观景台——山谷景色一流。大棕色标志，不会错过的。", actionHint: "描述路标", frequency: "common" },
              { textEn: "Oh, definitely check out the scenic viewpoint three miles north of here. The whole valley opens up below you — perfect for photos.", textZh: "哦，一定要去往北3英里的观景点看看。整个山谷在你脚下展开——拍照完美。", actionHint: "热情推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What other interesting stops are between here and San Francisco?",
            textZh: "从这里到旧金山之间还有什么有趣的停靠点？",
          },
          {
            speaker: "them",
            role: "景点工作人员",
            textEn: "If you're taking Route 101, check out the redwood forests about two hours north. You can even drive through a giant tree! It's a must-stop.",
            textZh: "如果你走101号公路，往北大概两小时可以去看红杉林。你甚至可以开车穿过一棵巨树！必停。",
            keyPhrases: [
              { en: "redwood forests", zh: "红杉林" },
              { en: "drive through", zh: "开车穿过" },
              { en: "must-stop", zh: "必停" },
            ],
            alternativeExpressions: [
              { textEn: "The redwoods on Route 101 are absolutely worth the two-hour drive. There's even a tree you can drive right through — it's wild.", textZh: "101号公路上的红杉林绝对值得开两小时去看。有一棵树你可以直接开车穿过——太不可思议了。", actionHint: "兴奋推荐", frequency: "common" },
              { textEn: "Oh, if you're heading up 101, the redwoods are a must. Two hours north. And yes — there's literally a giant tree with a tunnel through it for cars.", textZh: "如果你走101的话，红杉林是必去的。往北两小时。真的有一棵巨树中间挖了条隧道可以开车过去。", actionHint: "强调独特体验", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds amazing! Can we buy a local map or guide book here with more recommendations?",
            textZh: "听起来太棒了！这里能买到有更多推荐的当地地图或指南吗？",
          },
          {
            speaker: "them",
            role: "景点工作人员",
            textEn: "We have a free road trip guide at the counter with all the best stops marked. Grab one before you leave — it's really helpful.",
            textZh: "柜台有免费的公路旅行指南，标了所有最佳停靠点。走之前拿一本——真的很有用。",
            keyPhrases: [
              { en: "road trip guide", zh: "公路旅行指南" },
              { en: "grab one", zh: "拿一本" },
            ],
            alternativeExpressions: [
              { textEn: "Pick up one of our free road trip guides at the front desk — it has all the best stops mapped out. Travelers love it.", textZh: "在前台拿本我们的免费公路旅行指南——上面标了所有最好的停靠点。旅客们都很喜欢。", actionHint: "推荐指南", frequency: "common" },
              { textEn: "There's a free guide book right at the counter over there. All the best viewpoints, restaurants, and attractions are marked. Don't leave without one!", textZh: "那边柜台有免费的指南书。所有最佳观景点、餐厅和景点都标好了。走之前一定拿一本！", actionHint: "热情推荐", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 搭便车 ====================
  {
    id: "transport-hitchhike",
    category: "transport",
    titleZh: "搭便车",
    titleEn: "Hitchhiking",
    description: "在交通不便的地方搭便车，包括礼节和安全注意事项",
    otherRole: "好心司机",
    otherRoleIcon: "🤙",
    flows: [
      {
        id: "basic",
        titleZh: "请求搭便车",
        titleEn: "Asking for a Ride",
        description: "在偏远地区礼貌地请求搭便车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi there! I'm sorry to bother you. My car broke down a few miles back and I have no cell service. Could you possibly give me a ride to the nearest town?",
            textZh: "你好！抱歉打扰。我的车几英里前抛锚了，没有手机信号。能载我到最近的镇上吗？",
            culturalNote: "在美国搭便车要注意安全。选人多的地方，告诉朋友你的位置。有些州搭便车在高速公路上是违法的。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Oh no, that's rough. Where exactly are you trying to get to? I'm heading to Millville, about 15 miles up the road.",
            textZh: "哦不，那太糟了。你要去哪？我去米尔维尔，前面大概15英里。",
            keyPhrases: [
              { en: "heading to", zh: "去/前往" },
              { en: "up the road", zh: "前面的路上" },
            ],
            alternativeExpressions: [
              { textEn: "That's terrible! Where do you need to go? I'm going to Millville — about 15 miles from here. I can give you a lift.", textZh: "太倒霉了！你要去哪？我去米尔维尔——离这大概15英里。我可以载你一程。", actionHint: "主动提供帮助", frequency: "common" },
              { textEn: "Aw man, that's a bad spot to break down. I'm on my way to Millville — 15 miles ahead. Need a ride that far?", textZh: "哎，在这种地方抛锚真不走运。我去米尔维尔——前面15英里。要搭到那里吗？", actionHint: "同情并提议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Millville would be perfect — I just need to find a mechanic or a place with phone service to call for a tow.",
            textZh: "米尔维尔太好了——我只需要找个修理工或者有信号的地方打电话叫拖车。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "There's an auto shop right on Main Street in Millville. Hop in. Just toss your bag in the back seat.",
            textZh: "米尔维尔的主街就有个汽修店。上车吧。把包放后座就行。",
            keyPhrases: [
              { en: "auto shop", zh: "汽修店" },
              { en: "hop in", zh: "上车" },
              { en: "toss", zh: "扔/放" },
            ],
            alternativeExpressions: [
              { textEn: "Lucky for you, there's a mechanic right on the main street in Millville. Jump in — throw your stuff in the back.", textZh: "你运气好，米尔维尔主街上就有个修车的。上来——东西扔后面。", actionHint: "热情邀请", frequency: "common" },
              { textEn: "I know a good auto shop in Millville on Main Street. Get in, I'll take you right there. Your bag can go in the back.", textZh: "米尔维尔主街上有个不错的汽修店我知道。上车吧，我直接带你去。包放后面。", actionHint: "提供具体帮助", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I really appreciate this. I was starting to worry out there with no signal.",
            textZh: "太感谢了。真的很感激。没有信号在那边都开始担心了。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No worries. This area is pretty remote — cell coverage is spotty. What happened to your car?",
            textZh: "没事。这一带挺偏远的——手机信号断断续续的。你车怎么了？",
            keyPhrases: [
              { en: "remote", zh: "偏远的" },
              { en: "spotty", zh: "断断续续的" },
              { en: "cell coverage", zh: "手机信号覆盖" },
            ],
            alternativeExpressions: [
              { textEn: "Don't mention it. Yeah, there's basically no signal out here — super rural. So what went wrong with the car?", textZh: "别客气。是啊，这里基本没信号——太偏了。车是怎么回事？", actionHint: "理解处境并关心", frequency: "common" },
              { textEn: "Happy to help. I know this stretch — phone coverage is terrible. So what's going on with your vehicle?", textZh: "乐意帮忙。我了解这一带——手机信号很差。你的车是什么情况？", actionHint: "表示熟悉并询问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not sure — it just started making a loud noise and then the engine died. Could be the transmission.",
            textZh: "我不确定——突然发出很大的噪音然后发动机就熄火了。可能是变速箱。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sounds like it could be serious. The mechanic in town is good though — he's helped me a few times. Here, let me drop you right at his shop.",
            textZh: "听起来可能挺严重。但镇上的修理工不错——帮过我好几次。来，我直接把你送到他店门口。",
            keyPhrases: [
              { en: "transmission", zh: "变速箱" },
              { en: "drop you at", zh: "送你到" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, that doesn't sound great. But the mechanic in Millville is solid — fixed my truck twice. I'll drop you at his door.", textZh: "嗯，听着不太好。但米尔维尔的修理工很靠谱——帮我修过两次卡车。我送你到他门口。", actionHint: "用亲身经历推荐", frequency: "common" },
              { textEn: "Could be something big. Good news is the local mechanic is really honest and good at his job. Let me take you straight to him.", textZh: "可能是大问题。好消息是当地的修理工很实在手艺也好。我直接带你去找他。", actionHint: "推荐靠谱修理工", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's incredibly kind of you. Can I give you some gas money at least?",
            textZh: "你太好了。我至少给你点油钱？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Don't worry about it. We look out for each other out here. Good luck with the car — hope it's an easy fix!",
            textZh: "不用了。在这里我们互相帮助。祝你车子好运——希望容易修！",
            keyPhrases: [
              { en: "look out for each other", zh: "互相帮助" },
              { en: "easy fix", zh: "容易修" },
            ],
            alternativeExpressions: [
              { textEn: "Nah, keep your money. That's what we do around here — help each other out. Hope the car is a quick fix. Take care!", textZh: "不用不用，把钱收着。这里就是这样——大家互相帮忙。希望车很快修好。保重！", actionHint: "婉拒并祝福", frequency: "common" },
              { textEn: "Not necessary, really. Glad I could help. Hope the mechanic can sort it out fast. Enjoy the rest of your road trip!", textZh: "真不用。很高兴能帮忙。希望修理工能很快搞定。享受接下来的公路旅行！", actionHint: "真诚祝愿", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "便车途中交流",
        titleEn: "Conversation During the Ride",
        description: "搭便车时与司机的社交交流",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "司机",
            textEn: "So where are you from? You don't sound like you're from around here.",
            textZh: "你从哪来的？听口音不像本地人。",
            keyPhrases: [
              { en: "from around here", zh: "本地人" },
            ],
            alternativeExpressions: [
              { textEn: "I can tell you're not local — where you from originally? Just curious.", textZh: "听得出你不是本地人——你老家哪的？就好奇问问。", actionHint: "友善好奇", frequency: "common" },
              { textEn: "If you don't mind me asking, where are you traveling from? Your accent is interesting.", textZh: "如果你不介意的话，你从哪来的？你的口音挺有意思。", actionHint: "礼貌询问", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm from China, actually. I'm on a road trip through the national parks. It's my first time in this part of the country.",
            textZh: "我是中国来的。正在自驾游国家公园。第一次来这个地区。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Oh wow, that's awesome! Which parks have you visited so far? We've got some of the best ones nearby.",
            textZh: "哇，太棒了！目前去了哪些公园？我们附近有好几个最好的。",
            keyPhrases: [
              { en: "national parks", zh: "国家公园" },
            ],
            alternativeExpressions: [
              { textEn: "That's so cool! How many parks have you hit so far? There are some real gems in this area.", textZh: "太酷了！你去了几个公园了？这片区域有几个真正的宝藏。", actionHint: "兴奋交流", frequency: "common" },
              { textEn: "No kidding! A national parks road trip — that's the dream. Which ones have you been to? We're surrounded by great ones here.", textZh: "真的！国家公园公路旅行——这是梦想啊。去了哪些？我们这边就有很多好的。", actionHint: "羡慕并好奇", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I've done Yosemite and Sequoia. Next on the list is Death Valley, then the Grand Canyon.",
            textZh: "去了约塞米蒂和红杉。下一站是死亡谷，然后大峡谷。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Death Valley is incredible but be careful — it's brutally hot this time of year. Make sure you carry extra water and don't hike midday.",
            textZh: "死亡谷太棒了，但要小心——这个季节热得要命。一定要多带水，中午别徒步。",
            keyPhrases: [
              { en: "brutally hot", zh: "热得要命" },
              { en: "extra water", zh: "多带水" },
              { en: "midday", zh: "中午" },
            ],
            alternativeExpressions: [
              { textEn: "Death Valley is amazing, but seriously — the heat is no joke this time of year. Bring way more water than you think you need, and avoid hiking between noon and 4.", textZh: "死亡谷很棒，但说真的——这个季节的热不是开玩笑的。带比你觉得需要的更多的水，中午到4点别徒步。", actionHint: "认真安全提醒", frequency: "common" },
              { textEn: "You'll love Death Valley — it's out of this world. Just watch the heat. Pack tons of water, stay in the shade midday, and you'll be fine.", textZh: "你会爱死亡谷的——简直超凡脱俗。注意高温就好。多带水，中午待在阴凉处就没事。", actionHint: "既推荐又提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for the tip. Are there any hidden gems around here that tourists usually miss?",
            textZh: "谢谢提醒。这附近有什么游客通常会错过的隐藏好去处吗？",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "There's a slot canyon about 30 miles east that most tourists don't know about. No crowds, amazing rock formations. I can write down the directions for you.",
            textZh: "东边大概30英里有个狭缝峡谷，大多数游客不知道。没有人群，岩石形态很壮观。我可以帮你写下路线。",
            keyPhrases: [
              { en: "hidden gems", zh: "隐藏好去处" },
              { en: "slot canyon", zh: "狭缝峡谷" },
              { en: "rock formations", zh: "岩石形态" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, you gotta check out this slot canyon about 30 miles east. Totally off the radar, hardly any people. The rock formations are insane. Let me write down how to get there.", textZh: "你一定要去看东边大概30英里的那个狭缝峡谷。完全不在旅游雷达上，几乎没有人。岩石形态太疯狂了。我写下怎么去。", actionHint: "兴奋分享秘密", frequency: "common" },
              { textEn: "If you like off-the-beaten-path stuff, there's an incredible slot canyon 30 miles east. Locals love it but tourists never find it. Want the directions?", textZh: "如果你喜欢小众路线，东边30英里有个不可思议的狭缝峡谷。当地人很爱去但游客从来找不到。要路线吗？", actionHint: "本地人推荐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be amazing! I love finding places off the beaten path.",
            textZh: "那太好了！我喜欢找人少的地方。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Here we are — Millville. The auto shop is right there on the corner. Best of luck, and enjoy the rest of your trip!",
            textZh: "到了——米尔维尔。汽修店就在拐角那里。祝你好运，享受接下来的旅程！",
            keyPhrases: [
              { en: "off the beaten path", zh: "人少的地方/非热门" },
              { en: "rest of your trip", zh: "接下来的旅程" },
            ],
            alternativeExpressions: [
              { textEn: "And here's Millville! See the auto shop on the corner? That's the one. Good luck with everything, and have an amazing trip!", textZh: "到米尔维尔了！看到拐角的汽修店了吗？就是那家。一切顺利，旅途愉快！", actionHint: "指向目的地", frequency: "common" },
              { textEn: "We made it — Millville. The mechanic's shop is right there. Hope your car gets fixed quick. Safe travels on the rest of your road trip!", textZh: "到了——米尔维尔。修理店就在那。希望你的车快点修好。接下来的公路旅行一路平安！", actionHint: "真诚道别", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 拼车 ====================
  {
    id: "transport-carpool",
    category: "transport",
    titleZh: "拼车出行",
    titleEn: "Carpooling",
    description: "通过拼车平台或朋友拼车出行，分摊费用",
    otherRole: "拼车伙伴",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "加入拼车",
        titleEn: "Joining a Carpool",
        description: "通过APP或告示板找到拼车机会",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw your post on the rideshare board. You're driving to Austin this weekend? I'd love to share the ride.",
            textZh: "你好，我在拼车告示板上看到你的帖子。你这周末去奥斯汀？我想拼车。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Hey! Yes, I'm leaving Saturday morning around 8 AM. I have room for two more passengers. Where exactly in Austin do you need to go?",
            textZh: "嗨！是的，周六早上8点左右走。还能带两个人。你在奥斯汀具体去哪？",
            keyPhrases: [
              { en: "rideshare board", zh: "拼车告示板" },
              { en: "room for two more", zh: "还能带两个" },
            ],
            alternativeExpressions: [
              { textEn: "Hi! Yep, heading out Saturday around 8. Still got two spots open. What part of Austin are you going to?", textZh: "你好！对，周六大概8点出发。还有两个位子。你去奥斯汀哪边？", actionHint: "确认并询问", frequency: "common" },
              { textEn: "Great timing — I've still got space for two people. I'm planning to leave around 8 AM Saturday. Where in Austin do you need to be dropped off?", textZh: "来得正好——还有两个人的空间。我打算周六早上8点左右出发。你在奥斯汀在哪下？", actionHint: "确认时间和目的地", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I need to get to the university area. How much would you like for gas money?",
            textZh: "我要去大学区。油费你想怎么分？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "I usually split gas evenly among everyone in the car. It's about a three-hour drive, so probably $20 to $25 per person.",
            textZh: "我通常车里所有人平分油费。大概三个小时的车程，每人大概20到25美元。",
            keyPhrases: [
              { en: "split gas evenly", zh: "平分油费" },
              { en: "per person", zh: "每人" },
            ],
            alternativeExpressions: [
              { textEn: "I just divide the gas cost equally. For this trip it'll probably be about twenty to twenty-five bucks each.", textZh: "我就是把油费均摊。这趟大概每人二十到二十五。", actionHint: "简洁报价", frequency: "common" },
              { textEn: "Everyone chips in equally for gas. Three-hour drive, so figure $20 to $25 per person depending on gas prices.", textZh: "大家均摊油费。三小时车程，看油价每人大概20到25。", actionHint: "说明计算方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds fair. Can I bring a small suitcase? I'm staying for a few days.",
            textZh: "合理。我能带个小行李箱吗？我要住几天。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Sure, there's trunk space. Just keep it to one bag though — I've got the other passenger's stuff too.",
            textZh: "可以，后备箱有空间。但尽量一个包——另一个乘客也有东西。",
            keyPhrases: [
              { en: "trunk space", zh: "后备箱空间" },
              { en: "keep it to one bag", zh: "限一个包" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, the trunk has room. Try to keep it to one bag if you can — the other rider has luggage too.", textZh: "后备箱有地方。尽量控制一个包——另一个乘客也有行李。", actionHint: "限制行李", frequency: "common" },
              { textEn: "There's space in the back, but I'm fitting two passengers' stuff. One bag should work — nothing huge though.", textZh: "后面有空间，但要放两个乘客的东西。一个包可以——别太大就行。", actionHint: "说明空间限制", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Where should I meet you, and what car are you driving?",
            textZh: "没问题。在哪碰面？你开什么车？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "I'll pick you up at the Walmart parking lot on 5th Street. I drive a blue Honda CR-V. I'll text you when I'm close.",
            textZh: "我在第五街的沃尔玛停车场接你。我开蓝色本田CR-V。快到了我发短信给你。",
            keyPhrases: [
              { en: "pick you up", zh: "接你" },
              { en: "text you", zh: "发短信给你" },
            ],
            alternativeExpressions: [
              { textEn: "Meet me at the Walmart on 5th — parking lot out front. I'm in a blue Honda CR-V. I'll shoot you a text when I'm pulling in.", textZh: "在第五街沃尔玛碰面——前面的停车场。我开蓝色本田CR-V。到了给你发条短信。", actionHint: "安排碰面地点", frequency: "common" },
              { textEn: "Let's meet at the Walmart parking lot on 5th Street, say around 7:45. Blue Honda CR-V — you can't miss it. I'll message you when I'm close.", textZh: "在第五街沃尔玛停车场见，大概7:45。蓝色本田CR-V——很好认。快到了给你发消息。", actionHint: "具体时间地点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. Should I pay you cash or can I send it through an app?",
            textZh: "太好了。给你现金还是通过APP转？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Either works. Venmo or Zelle is easiest. You can pay when we arrive — no rush. See you Saturday!",
            textZh: "都行。Venmo或Zelle最方便。到了再付——不急。周六见！",
            keyPhrases: [
              { en: "Venmo", zh: "Venmo转账" },
              { en: "no rush", zh: "不急" },
            ],
            alternativeExpressions: [
              { textEn: "Cash or app, whatever's easier for you. Venmo or Zelle work great. No need to pay upfront — just settle up when we get there. See ya Saturday!", textZh: "现金或APP，怎么方便怎么来。Venmo或Zelle都行。不用提前付——到了再算。周六见！", actionHint: "灵活付款", frequency: "common" },
              { textEn: "I'm easy — Venmo, Zelle, or cash all work. Pay me whenever, even after we arrive. Looking forward to the drive! Saturday at 8.", textZh: "我随便——Venmo、Zelle或现金都行。什么时候付都行，到了再付也可以。期待这趟！周六8点。", actionHint: "随和告别", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "拼车途中礼仪",
        titleEn: "Carpool Etiquette",
        description: "拼车途中的社交礼仪和协商",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Thanks for driving. Is it okay if I play some music, or do you prefer quiet?",
            textZh: "谢谢开车。我能放点音乐吗？还是你喜欢安静？",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Music is fine! I've got Spotify connected. Feel free to queue up whatever you like. Just keep the volume reasonable.",
            textZh: "放音乐没问题！我连了Spotify。随便点你喜欢的。音量适中就行。",
            keyPhrases: [
              { en: "queue up", zh: "排队播放" },
              { en: "keep the volume reasonable", zh: "音量适中" },
            ],
            alternativeExpressions: [
              { textEn: "Go for it! Spotify's hooked up — play whatever you want. Just not too loud so we can still talk.", textZh: "放吧！Spotify连着呢——随便放。别太大声就行，这样还能聊天。", actionHint: "轻松同意", frequency: "common" },
              { textEn: "Yeah, music would be great! My phone's connected to Bluetooth. Pick whatever you're into — just keep it at a chill volume.", textZh: "放音乐好啊！我手机连着蓝牙。你喜欢什么就放——音量控制一下就好。", actionHint: "欢迎放音乐", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Do you mind if I eat in the car? I brought a sandwich for the road.",
            textZh: "能在车里吃东西吗？我带了个三明治。",
            culturalNote: "拼车时在别人车里吃东西要先问。避免味道重的食物。吃完自己清理垃圾。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Go ahead, just be careful with crumbs. There's a trash bag hanging behind my seat — feel free to use it.",
            textZh: "吃吧，小心碎屑就行。我座位后面挂了个垃圾袋——随便用。",
            keyPhrases: [
              { en: "crumbs", zh: "碎屑" },
              { en: "trash bag", zh: "垃圾袋" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, no problem. Just try not to make a mess. There's a bag for trash behind my seat.", textZh: "没问题。尽量别弄脏就好。我座位后面有个垃圾袋。", actionHint: "大方同意", frequency: "common" },
              { textEn: "Yeah, go for it. I've got a little trash bag right there if you need it. Just don't spill anything on the seat!", textZh: "吃吧。那边有个小垃圾袋你需要就用。别洒在座位上就行！", actionHint: "轻松允许", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Would you like me to help with navigation? I can keep an eye on the GPS.",
            textZh: "需要我帮忙导航吗？我可以看着GPS。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "Actually, that would be great. My phone is in the holder there. If there's traffic ahead, let me know so I can find an alternate route.",
            textZh: "那太好了。我手机在那个支架上。如果前面堵车告诉我，我找别的路。",
            keyPhrases: [
              { en: "phone holder", zh: "手机支架" },
              { en: "alternate route", zh: "别的路线" },
            ],
            alternativeExpressions: [
              { textEn: "That'd be awesome, thanks! The GPS is right there on the dash. Keep an eye out for traffic and give me a heads-up so we can reroute.", textZh: "那太好了，谢谢！GPS就在仪表台上。留意交通状况提前告诉我好改道。", actionHint: "欣然接受帮助", frequency: "common" },
              { textEn: "Yes please! I hate looking at my phone while driving. It's in the mount there — just tell me if you see any slowdowns coming up.", textZh: "拜托了！我讨厌开车看手机。手机在支架上——看到前面有拥堵就告诉我。", actionHint: "说明安全原因", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "There's a rest stop in about 10 miles. Would you like to take a break? I can drive for a while if you need a rest.",
            textZh: "大概10英里后有个休息站。要休息一下吗？如果你累了我可以开一会儿。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "I appreciate the offer, but my insurance only covers me as the driver. Let's stop for a quick coffee break though — I could use one.",
            textZh: "谢谢你提议，但我的保险只覆盖我自己开车。不过停下来喝杯咖啡吧——我正好需要。",
            keyPhrases: [
              { en: "insurance only covers", zh: "保险只覆盖" },
              { en: "coffee break", zh: "咖啡休息" },
              { en: "could use one", zh: "正好需要" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks, but my policy only covers me behind the wheel. A coffee stop sounds perfect though — I'm definitely ready for a break.", textZh: "谢谢，但我的保单只保我自己开车。不过停下来喝个咖啡正好——我确实需要休息一下。", actionHint: "婉拒但接受休息", frequency: "common" },
              { textEn: "That's sweet of you, but the insurance is only in my name. Let's pull over for coffee instead — I need the caffeine.", textZh: "你真好，但保险只写了我的名字。我们停下来喝杯咖啡吧——我需要咖啡因。", actionHint: "解释原因并提议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me buy the coffee — it's the least I can do since you're driving the whole way.",
            textZh: "咖啡我请——你全程开车，这是我至少能做的。",
          },
          {
            speaker: "them",
            role: "车主",
            textEn: "That's really nice of you, thanks! Next time you're heading this way, hit me up. I make this drive almost every month.",
            textZh: "太客气了，谢谢！下次你往这个方向来，找我。我几乎每个月都跑这趟。",
            keyPhrases: [
              { en: "hit me up", zh: "找我/联系我" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, thanks! That's super nice of you. Seriously, if you ever need a ride this way again, just message me. I do this trip all the time.", textZh: "谢谢！你太好了。说真的，下次需要搭这个方向的车就给我发消息。我经常跑这趟。", actionHint: "建立联系", frequency: "common" },
              { textEn: "You don't have to, but I appreciate it! I'm on this route once a month, so if you ever need a ride again, just reach out.", textZh: "不用的，但真的感谢！我每个月都跑这条路，以后再需要搭车随时联系我。", actionHint: "提供未来机会", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 有轨电车 ====================
  {
    id: "transport-tram-ride",
    category: "transport",
    titleZh: "乘坐有轨电车",
    titleEn: "Riding a Tram",
    description: "在城市乘坐有轨电车或轻轨，了解路线和购票",
    otherRole: "有轨电车乘客",
    otherRoleIcon: "🚊",
    flows: [
      {
        id: "basic",
        titleZh: "乘坐有轨电车",
        titleEn: "Taking the Tram",
        description: "在有轨电车站等车、购票和乘坐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, does this tram go to the old town? I want to visit the historic district.",
            textZh: "请问，这辆有轨电车去老城区吗？我想去历史城区。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes! This is the Green Line and it stops right at Old Town Square. It's about six stops from here.",
            textZh: "是的！这是绿线，在老城广场就有站。从这里大概六站。",
            keyPhrases: [
              { en: "Green Line", zh: "绿线" },
              { en: "Old Town Square", zh: "老城广场" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, this is the one! Green Line goes straight to Old Town Square. About six stops — maybe 15 minutes.", textZh: "对，就是这辆！绿线直达老城广场。大概六站——可能15分钟。", actionHint: "确认并估时", frequency: "common" },
              { textEn: "You're in luck — the Green Line takes you right there. Old Town Square is the sixth stop from here.", textZh: "你运气好——绿线直达。老城广场从这里坐六站就到了。", actionHint: "肯定选择", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Where do I buy a ticket? I don't see a machine at this stop.",
            textZh: "在哪买票？这一站我没看到自助机。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "You can buy tickets on board — there's a small machine near the door. Or use the transit app on your phone. Make sure you validate the ticket!",
            textZh: "可以在车上买——门边有个小机器。或者用手机上的公交APP。记得要验票！",
            keyPhrases: [
              { en: "on board", zh: "在车上" },
              { en: "validate", zh: "验票" },
              { en: "transit app", zh: "公交APP" },
            ],
            alternativeExpressions: [
              { textEn: "There's a ticket machine right by the door when you get on. Or just buy through the app — way easier. But don't forget to validate it!", textZh: "上车门边就有售票机。或者用APP买——方便多了。但别忘了验票！", actionHint: "推荐APP并提醒", frequency: "common" },
              { textEn: "You can get a ticket inside the tram near the entrance, or use the transit app. Important thing — you must validate the ticket or it doesn't count.", textZh: "在电车入口附近能买到票，或者用公交APP。重要的是——必须验票，不然不算数。", actionHint: "强调验票重要性", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What do you mean by 'validate'? I just bought the ticket, isn't it already valid?",
            textZh: "'验票'是什么意思？我不是已经买了吗？",
            culturalNote: "很多欧洲和美国城市的公交系统需要在上车后'打票'（validate），就是在打票机上盖时间戳。不打票等于逃票。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "You need to stamp it in the yellow machine on board. It prints the time on it. Inspectors check randomly, and the fine for no validation is $75.",
            textZh: "你需要在车上的黄色机器上打票。它会印上时间。检票员随机查票，没打票罚75美元。",
            keyPhrases: [
              { en: "stamp it", zh: "打票" },
              { en: "inspectors", zh: "检票员" },
              { en: "fine", zh: "罚款" },
            ],
            alternativeExpressions: [
              { textEn: "See the yellow box on the wall? Stick your ticket in and it stamps the date and time. Without that stamp, it's like not having a ticket — $75 fine.", textZh: "看到墙上的黄色盒子了吗？把票插进去它会印上日期和时间。没有那个印章等于没票——罚75美元。", actionHint: "指向打票机", frequency: "common" },
              { textEn: "Put your ticket in the yellow validator as soon as you board. It timestamps it. Inspectors pop on randomly and it's $75 if yours isn't validated.", textZh: "一上车就把票放进黄色验票机。它会打上时间戳。检票员随时会出现，没验票就是75美元罚款。", actionHint: "详细说明后果", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for the warning! How do I know when my stop is coming? Are there announcements?",
            textZh: "谢谢提醒！我怎么知道快到站了？有广播吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, there are announcements and a digital screen showing the next stop. Press the red button to signal you want to get off.",
            textZh: "有广播和电子屏显示下一站。按红色按钮表示你要下车。",
            keyPhrases: [
              { en: "digital screen", zh: "电子屏" },
              { en: "red button", zh: "红色按钮" },
              { en: "signal", zh: "示意/通知" },
            ],
            alternativeExpressions: [
              { textEn: "There's a screen above the door that shows the next stop, plus audio announcements. When your stop is next, hit the red button.", textZh: "门上方有屏幕显示下一站，还有语音播报。到你要下的站之前按红色按钮。", actionHint: "详细说明", frequency: "common" },
              { textEn: "They announce every stop and there's a display screen. Just press any of the red stop buttons when you hear your stop coming up.", textZh: "每站都会广播而且有显示屏。听到快到你的站时按任何一个红色停车按钮。", actionHint: "简化操作", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Which door should I use to exit?",
            textZh: "从哪个门下车？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Any door — just press the green button on the door handle when it lights up. The doors don't open automatically at every stop.",
            textZh: "任何门都行——门把手上的绿色按钮亮了就按。不是每站都会自动开门。",
            keyPhrases: [
              { en: "green button", zh: "绿色按钮" },
              { en: "door handle", zh: "门把手" },
              { en: "don't open automatically", zh: "不会自动开门" },
            ],
            alternativeExpressions: [
              { textEn: "Pick any door. When the green light comes on, press the button on the handle and it'll open. They don't open on their own.", textZh: "哪个门都行。绿灯亮了按把手上的按钮就会开。门不会自己开。", actionHint: "简单指导", frequency: "common" },
              { textEn: "All doors work. Wait for the green button to light up on the handle — that means the tram has stopped and you can press it to open. Not every stop opens automatically.", textZh: "所有门都可以。等把手上绿色按钮亮——说明电车停了可以按开门。不是每站自动开门的。", actionHint: "解释亮灯时机", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "有轨电车日票和路线规划",
        titleEn: "Day Pass & Route Planning",
        description: "购买日票并用有轨电车游览城市多个景点",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I plan to use the tram several times today to visit different attractions. Is there a day pass?",
            textZh: "我今天打算坐好几次有轨电车去不同的景点。有日票吗？",
          },
          {
            speaker: "them",
            role: "售票处员工",
            textEn: "Yes, a day pass is $9 for unlimited rides on all tram and bus lines. Single rides are $2.50 each, so the pass pays for itself after four rides.",
            textZh: "有的，日票9美元可以无限次乘坐所有有轨电车和公交线路。单程每次2.50美元，所以坐四次以上就值了。",
            keyPhrases: [
              { en: "day pass", zh: "日票" },
              { en: "unlimited rides", zh: "无限次乘坐" },
              { en: "pays for itself", zh: "值回票价" },
            ],
            alternativeExpressions: [
              { textEn: "We have a $9 day pass — unlimited tram and bus rides all day. Since singles are $2.50, you break even after four trips. Totally worth it.", textZh: "有9块钱的日票——全天无限次坐电车和公交。单程2.50，四趟就回本了。绝对划算。", actionHint: "推荐并算账", frequency: "common" },
              { textEn: "Absolutely. The day pass is $9 and covers everything — trams, buses, all lines. If you're riding four or more times, it saves money over single tickets.", textZh: "当然。日票9块涵盖所有——电车、公交、所有线路。如果坐四次以上就比单程票省钱。", actionHint: "全面说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the day pass. Can you help me plan my route? I want to visit the museum, the market, and the waterfront.",
            textZh: "我买日票。能帮我规划路线吗？我想去博物馆、市场和海滨。",
          },
          {
            speaker: "them",
            role: "售票处员工",
            textEn: "Sure. Start with the Blue Line to the museum — three stops. Then transfer to the Red Line at Central Station for the market. The waterfront is on the Green Line.",
            textZh: "好的。先坐蓝线去博物馆——三站。然后在中央车站换红线去市场。海滨在绿线上。",
            keyPhrases: [
              { en: "transfer at", zh: "在...换乘" },
              { en: "Blue Line", zh: "蓝线" },
            ],
            alternativeExpressions: [
              { textEn: "Easy! Blue Line first — museum is three stops. Switch to the Red Line at Central for the market. Then hop on the Green Line for the waterfront.", textZh: "简单！先坐蓝线——博物馆三站。在中央站换红线去市场。然后转绿线去海滨。", actionHint: "清晰分步", frequency: "common" },
              { textEn: "Here's the best route: Blue Line to the museum, transfer at Central Station to Red for the market, then Green Line takes you to the waterfront.", textZh: "最佳路线是：蓝线去博物馆，在中央站换红线去市场，然后绿线到海滨。", actionHint: "推荐最佳路线", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a tram map I can take with me?",
            textZh: "有电车地图可以带走吗？",
          },
          {
            speaker: "them",
            role: "售票处员工",
            textEn: "Here's a pocket map. It shows all the lines, stops, and transfer points. The starred stops are the tourist highlights.",
            textZh: "这是口袋地图。显示了所有线路、站点和换乘点。标星的站是旅游亮点。",
            keyPhrases: [
              { en: "pocket map", zh: "口袋地图" },
              { en: "transfer points", zh: "换乘点" },
              { en: "tourist highlights", zh: "旅游亮点" },
            ],
            alternativeExpressions: [
              { textEn: "Take this — it's a pocket-sized map with every line and stop on it. See the stars? Those are the must-see tourist spots.", textZh: "拿着——这是口袋大小的地图上面有所有线路和站点。看到星号了吗？那些是必看的旅游景点。", actionHint: "递地图并解释", frequency: "common" },
              { textEn: "Here, grab this map. All the tram lines, bus routes, and connections are on it. The starred stations are the popular tourist attractions.", textZh: "来，拿这张地图。所有电车线路、公交路线和换乘点都在上面。标星的站是热门旅游景点。", actionHint: "完整介绍地图", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How late does the tram run? I might want to go to the waterfront for dinner in the evening.",
            textZh: "电车运营到几点？晚上可能去海滨吃饭。",
          },
          {
            speaker: "them",
            role: "售票处员工",
            textEn: "Regular service until midnight. After that, there's a night tram every 30 minutes until 5 AM. Your day pass works on those too.",
            textZh: "常规服务到午夜。之后有夜班电车，每30分钟一班到早上5点。日票也可以用。",
            keyPhrases: [
              { en: "night tram", zh: "夜班电车" },
              { en: "until midnight", zh: "到午夜" },
            ],
            alternativeExpressions: [
              { textEn: "Normal schedule goes until midnight. After that, night trams run every half hour through 5 AM. And yes, your day pass covers those too.", textZh: "正常时刻表到午夜。之后夜班电车每半小时一班到早5点。日票也管用。", actionHint: "确认日票有效", frequency: "common" },
              { textEn: "Trams run till midnight on the regular schedule. Overnight there's a night service — every 30 minutes — and it's included with the day pass.", textZh: "电车正常运营到午夜。之后有夜间服务——每30分钟一班——日票也包含。", actionHint: "强调夜间服务", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very convenient. Is the tram system accessible for wheelchairs?",
            textZh: "很方便。有轨电车有无障碍设施吗？",
          },
          {
            speaker: "them",
            role: "售票处员工",
            textEn: "All trams have low-floor boarding and designated wheelchair areas. Press the blue button outside the door — the ramp extends automatically.",
            textZh: "所有电车都有低地板乘降和专用轮椅区。按门外的蓝色按钮——坡道会自动伸出。",
            keyPhrases: [
              { en: "low-floor boarding", zh: "低地板乘降" },
              { en: "wheelchair areas", zh: "轮椅区" },
              { en: "ramp", zh: "坡道" },
            ],
            alternativeExpressions: [
              { textEn: "Fully accessible. Every tram has low floors and wheelchair spaces. There's a blue button outside the door that deploys the ramp.", textZh: "完全无障碍。每辆电车都有低地板和轮椅空间。门外有个蓝色按钮会放下坡道。", actionHint: "确认无障碍", frequency: "common" },
              { textEn: "The system is completely wheelchair-friendly. Low-floor entry on all trams. Just press the blue button outside and the ramp comes out automatically.", textZh: "系统完全适合轮椅使用。所有电车都是低地板入口。按外面的蓝色按钮坡道会自动伸出。", actionHint: "详细说明", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 缆车 ====================
  {
    id: "transport-cable-car",
    category: "transport",
    titleZh: "乘坐缆车",
    titleEn: "Riding a Cable Car",
    description: "乘坐观光缆车或山区缆车，了解安全须知和拍照建议",
    otherRole: "缆车工作人员",
    otherRoleIcon: "🚡",
    flows: [
      {
        id: "basic",
        titleZh: "乘坐缆车观光",
        titleEn: "Sightseeing Cable Car Ride",
        description: "乘坐旅游缆车并了解基本信息",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, how much is a round-trip cable car ticket to the mountain top?",
            textZh: "你好，缆车到山顶往返票多少钱？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Adults are $28 round trip, children under 12 are $15. One-way up is $18 if you plan to hike down.",
            textZh: "成人往返28美元，12岁以下儿童15美元。如果你打算徒步下山，单程上去18美元。",
            keyPhrases: [
              { en: "round trip", zh: "往返" },
              { en: "one-way up", zh: "单程上去" },
              { en: "hike down", zh: "徒步下山" },
            ],
            alternativeExpressions: [
              { textEn: "Round trip is $28 for adults, $15 for kids under 12. If you want to walk down, you can buy a one-way ticket up for $18.", textZh: "成人往返28，12岁以下小孩15。想走下来的话可以买18的单程上行票。", actionHint: "标准报价", frequency: "common" },
              { textEn: "It's $28 return for adults. Kids are $15. We also do a one-way up for $18 — popular with hikers who want to trek back down.", textZh: "成人往返28。儿童15。也有18的单程上——喜欢徒步下山的人经常选这个。", actionHint: "推荐徒步选项", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Round trip for two adults, please. How long does the ride take?",
            textZh: "两个成人往返。缆车多长时间？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The ride up takes about 12 minutes. Cars depart every 15 minutes. The next one leaves in about 5 minutes.",
            textZh: "上去大概12分钟。每15分钟一班。下一班大约5分钟后出发。",
            keyPhrases: [
              { en: "cars depart", zh: "缆车出发" },
              { en: "every 15 minutes", zh: "每15分钟" },
            ],
            alternativeExpressions: [
              { textEn: "About 12 minutes to the top. Cars go up every 15 minutes, and you're just in time — next one's in five minutes.", textZh: "到顶大概12分钟。缆车每15分钟一班，你来得正好——下一班五分钟后。", actionHint: "确认时间", frequency: "common" },
              { textEn: "It's a 12-minute ride. We send a car up every quarter-hour. The next departure is in about five minutes — perfect timing.", textZh: "12分钟的车程。每一刻钟发一班。下一班大约五分钟后——时间刚好。", actionHint: "强调时机好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it safe in windy conditions? It looks a bit breezy today.",
            textZh: "风大的时候安全吗？今天看着有点风。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The cable car operates in winds up to 40 mph. Today is about 20 mph, so we're well within safe limits. We'd shut down if it got too windy.",
            textZh: "缆车在风速40英里/小时以内运营。今天大概20英里/小时，完全在安全范围内。太大风的话我们会停运。",
            keyPhrases: [
              { en: "operates in winds", zh: "在...风速运营" },
              { en: "safe limits", zh: "安全范围" },
              { en: "shut down", zh: "停运" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry — we're rated for up to 40 mph winds. Today's only about 20, so totally fine. If it ever gets unsafe, we stop operations.", textZh: "别担心——我们能承受40英里时速的风。今天才20左右，完全没问题。万一不安全我们会停运。", actionHint: "消除顾虑", frequency: "common" },
              { textEn: "The system is designed for winds up to 40. We're at about half that today — plenty safe. We take weather safety very seriously.", textZh: "系统设计承受风速40。今天大概只有一半——很安全。我们对天气安全非常重视。", actionHint: "专业说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I take photos from inside the cable car?",
            textZh: "缆车里能拍照吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Absolutely! The glass is panoramic, so you'll get great shots from all sides. The best views are on the right side going up.",
            textZh: "当然可以！全景玻璃，四面都能拍到好照片。上行时右侧风景最好。",
            keyPhrases: [
              { en: "panoramic", zh: "全景的" },
              { en: "best views", zh: "最佳风景" },
              { en: "right side", zh: "右侧" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! It's all panoramic glass — photos look amazing from every angle. Pro tip: sit on the right side going up for the best scenery.", textZh: "当然！全是全景玻璃——每个角度拍照都很棒。小窍门：上去时坐右边风景最好。", actionHint: "拍照建议", frequency: "common" },
              { textEn: "Definitely! The views are incredible from inside. Floor-to-ceiling glass all around. Try to grab a spot on the right — that's where the money shot is.", textZh: "一定要拍！里面的景色太棒了。四周落地玻璃。尽量占右边的位子——那是最佳角度。", actionHint: "摄影建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What's at the top? Is there a restaurant or viewing platform?",
            textZh: "山顶有什么？有餐厅或观景台吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "There's a viewing platform with 360-degree views, a café, a gift shop, and hiking trails. Most people spend one to two hours up there.",
            textZh: "有360度的观景台、咖啡厅、礼品店和步行小道。大部分人在上面待一到两个小时。",
            keyPhrases: [
              { en: "360-degree views", zh: "360度风景" },
              { en: "hiking trails", zh: "步行小道" },
            ],
            alternativeExpressions: [
              { textEn: "Plenty to do up top — a 360 viewing deck, a café, gift shop, and some nice hiking trails. People usually spend an hour or two.", textZh: "山顶有很多可做的——360度观景台、咖啡厅、礼品店和不错的步行小道。一般待一两个小时。", actionHint: "列举活动", frequency: "common" },
              { textEn: "At the summit there's an observation platform with views in every direction, plus a café and trails. Plan for one to two hours to enjoy everything.", textZh: "山顶有全方位观景平台，还有咖啡厅和步道。安排一到两小时慢慢享受。", actionHint: "建议停留时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great! When is the last cable car back down? I don't want to get stranded up there.",
            textZh: "好的！最后一班缆车什么时候下来？我不想被困在山上。",
            culturalNote: "一定要记好末班缆车的时间。很多山顶没有其他下山方式，错过缆车可能非常麻烦。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The last car down is at 6:30 PM. Make sure you're in line by 6:15. There are announcements at the top 30 minutes before the last ride.",
            textZh: "最后一班下山是傍晚6:30。确保6:15之前排队。最后一班前30分钟山顶会广播提醒。",
            keyPhrases: [
              { en: "last car down", zh: "最后一班下山" },
              { en: "in line", zh: "排队" },
            ],
            alternativeExpressions: [
              { textEn: "Last ride down is 6:30 — be in line by 6:15 to be safe. They'll announce it at the top half an hour before so you don't forget.", textZh: "最后一班下山6:30——保险起见6:15之前排队。半小时前山顶会广播提醒你别忘了。", actionHint: "强调提前排队", frequency: "common" },
              { textEn: "6:30 PM is the final car down the mountain. I'd get in line by 6:15 at the latest. You'll hear a reminder announcement up top at 6 PM.", textZh: "下午6:30是最后一班下山缆车。最晚6:15排队。6点山顶会有提醒广播。", actionHint: "给出具体时间点", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "旧金山叮当车",
        titleEn: "San Francisco Cable Car",
        description: "乘坐旧金山标志性的叮当车",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Is this where I catch the cable car? There's a really long line.",
            textZh: "这里是坐叮当车的地方吗？队好长。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes, this is the turnaround point at Powell and Market. The line looks long, but it moves fast. Usually about 20 to 30 minutes.",
            textZh: "是的，这是鲍威尔和市场街的调头点。队看着长但走得快。通常20到30分钟。",
            keyPhrases: [
              { en: "turnaround point", zh: "调头点" },
              { en: "moves fast", zh: "走得快" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, Powell and Market — this is where the cable cars turn around. Don't let the line scare you. It moves quicker than it looks — 20, maybe 30 minutes.", textZh: "对，鲍威尔和市场街——叮当车在这调头。别被队伍吓到。比看着走得快——20分钟，最多30。", actionHint: "鼓励排队", frequency: "common" },
              { textEn: "This is the spot! It's the main cable car turnaround. The line is always long but it goes fast. You'll be on in about half an hour.", textZh: "就是这里！叮当车的主要调头点。队总是很长但走得快。大概半小时就能坐上。", actionHint: "管理期望", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is a ride? And can I use the same transit card as the bus?",
            textZh: "一次多少钱？能用和公交一样的交通卡吗？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "It's $8 per ride. The Clipper card works, or you can pay cash to the conductor on board. It's the same price either way.",
            textZh: "每次8美元。Clipper卡可以用，或者在车上给售票员付现金。价格一样。",
            keyPhrases: [
              { en: "conductor", zh: "售票员" },
              { en: "on board", zh: "在车上" },
              { en: "Clipper card", zh: "Clipper交通卡" },
            ],
            alternativeExpressions: [
              { textEn: "Eight bucks a ride. Pay with your Clipper card or give cash to the conductor when you get on. Same price either way.", textZh: "一趟8块。用Clipper卡付或者上车给售票员现金。价格一样。", actionHint: "简洁报价", frequency: "common" },
              { textEn: "A single ride is $8. You can tap your Clipper card or just hand the conductor cash. No difference in price.", textZh: "单程8美元。可以刷Clipper卡或者直接给售票员现金。价格没区别。", actionHint: "说明两种方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I stand on the outside and hang off the side? That's the classic experience, right?",
            textZh: "可以站在外面挂在车边上吗？那是经典体验对吧？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yes! That's the best part. Stand on the running boards and hold the pole tightly. It's perfectly safe — just don't lean out too far.",
            textZh: "可以！那是最棒的部分。站在踏板上抓紧柱子就行。完全安全——就是别探身太远。",
            keyPhrases: [
              { en: "running boards", zh: "踏板" },
              { en: "hold the pole", zh: "抓紧柱子" },
              { en: "lean out", zh: "探身出去" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — that's the whole experience! Grab a spot on the running board and hang on to the pole. Totally safe, just keep your arms inside.", textZh: "当然——那才是完整的体验！在踏板上占个位子抓住柱子。完全安全，手不要伸太远。", actionHint: "鼓励体验", frequency: "common" },
              { textEn: "That's what everyone does! Step onto the running board, grip the brass pole, and enjoy the ride. Just hold on tight when it goes up the hills.", textZh: "大家都这么做！踩上踏板，抓住铜柱子，享受乘坐。上坡的时候抓紧就好。", actionHint: "描述体验", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Which line gives the best views? I want to see Lombard Street and Fisherman's Wharf.",
            textZh: "哪条线风景最好？我想看九曲花街和渔人码头。",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "The Powell-Hyde line is the most scenic. It goes near Lombard Street and ends at Ghirardelli Square, which is walking distance to Fisherman's Wharf.",
            textZh: "鲍威尔-海德线风景最好。经过九曲花街附近，终点在吉拉德利广场，步行就到渔人码头。",
            keyPhrases: [
              { en: "Powell-Hyde line", zh: "鲍威尔-海德线" },
              { en: "walking distance", zh: "步行距离" },
            ],
            alternativeExpressions: [
              { textEn: "Hands down, Powell-Hyde. You'll pass right by Lombard Street and end up at Ghirardelli Square. From there it's a short walk to Fisherman's Wharf.", textZh: "绝对是鲍威尔-海德线。会经过九曲花街然后到吉拉德利广场。从那走一小段就到渔人码头。", actionHint: "强烈推荐", frequency: "common" },
              { textEn: "Take the Powell-Hyde — best views by far. It passes near the famous crooked street and drops you at Ghirardelli Square, just minutes from the wharf.", textZh: "坐鲍威尔-海德线——风景最好。经过著名的弯弯曲曲那条街，终点在吉拉德利广场，几分钟就到码头。", actionHint: "具体描述路线亮点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. How do I signal that I want to get off?",
            textZh: "好的。怎么示意要下车？",
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Just pull the bell cord above you or tell the conductor your stop. They'll let you know when it's time. Enjoy the ride — it's a San Francisco must-do!",
            textZh: "拉一下上面的铃绳或者告诉售票员你在哪站下。他们会到时提醒你。享受乘坐吧——这是旧金山必做体验！",
            keyPhrases: [
              { en: "bell cord", zh: "铃绳" },
              { en: "must-do", zh: "必做体验" },
            ],
            alternativeExpressions: [
              { textEn: "Tug on the bell cord overhead, or just tell the conductor where you're getting off. They're super helpful. Have fun — it's the quintessential SF experience!", textZh: "拉一下头顶的铃绳，或者告诉售票员你在哪下。他们特别热心。玩得开心——这是最地道的旧金山体验！", actionHint: "热情送行", frequency: "common" },
              { textEn: "The cord above your head rings a bell — give it a pull when you're near your stop. Or the conductor will announce it. It's seriously the best way to see the city!", textZh: "头顶的绳一拉会响铃——快到站时拉一下。或者售票员会报站。说真的这是游览这座城市最好的方式！", actionHint: "解释机制并祝福", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 游船 ====================
  {
    id: "transport-boat-tour",
    category: "transport",
    titleZh: "乘坐游船",
    titleEn: "Taking a Boat Tour",
    description: "参加城市游船观光或水上巴士体验",
    otherRole: "游船导游",
    otherRoleIcon: "🛥️",
    flows: [
      {
        id: "basic",
        titleZh: "预订游船观光",
        titleEn: "Booking a Boat Tour",
        description: "在码头预订和乘坐观光游船",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to take a boat tour of the harbor. What options do you have?",
            textZh: "你好，我想坐游船游港口。有什么选择？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "We have a one-hour harbor cruise for $25, a two-hour sunset cruise for $45, and a dinner cruise for $80 that includes a meal.",
            textZh: "我们有一小时港口游25美元、两小时日落游45美元和晚餐游船80美元含一顿饭。",
            keyPhrases: [
              { en: "harbor cruise", zh: "港口游" },
              { en: "sunset cruise", zh: "日落游" },
              { en: "dinner cruise", zh: "晚餐游船" },
            ],
            alternativeExpressions: [
              { textEn: "Three options: a quick one-hour harbor tour for $25, a sunset cruise for $45 — that's two hours — or the dinner cruise at $80 with a full meal.", textZh: "三个选择：一小时快速港口游25块，日落游45——两小时——或者晚餐游船80含全餐。", actionHint: "逐个介绍", frequency: "common" },
              { textEn: "The most popular is our sunset cruise — two hours for $45. We also have a shorter harbor cruise for $25 and a dinner cruise for $80 if you want the full experience.", textZh: "最受欢迎的是日落游——两小时45块。还有短一点的港口游25和完整体验的晚餐游船80。", actionHint: "推荐热门", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The sunset cruise sounds lovely. What time does it depart?",
            textZh: "日落游听起来不错。几点出发？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The sunset cruise departs at 6:30 PM tonight. We recommend arriving 15 minutes early to board and get a good seat on deck.",
            textZh: "日落游今晚6:30出发。建议提前15分钟到以便登船选个好位子。",
            keyPhrases: [
              { en: "departs at", zh: "出发时间" },
              { en: "good seat on deck", zh: "甲板上的好位子" },
            ],
            alternativeExpressions: [
              { textEn: "Tonight's sunset cruise leaves at 6:30. I'd come about 15 minutes early to grab a good spot on the upper deck — those go fast.", textZh: "今晚日落游6:30出发。建议提前15分钟来占上层甲板的好位子——很快就没了。", actionHint: "建议提早", frequency: "common" },
              { textEn: "Departure is at 6:30 PM this evening. Show up around 6:15 so you can board and pick a prime seat before it fills up.", textZh: "今晚6:30出发。6:15左右到这样能上船在满之前挑个好位子。", actionHint: "给出具体到达时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two tickets, please. Is there a bar on board? We'd love to have drinks while watching the sunset.",
            textZh: "两张票。船上有酒吧吗？我们想边看日落边喝饮料。",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes, there's a full bar with cocktails, wine, beer, and soft drinks. Drinks are not included in the ticket price — they're extra.",
            textZh: "有的，有全套酒吧提供鸡尾酒、葡萄酒、啤酒和软饮。饮料不包含在票价里——另收费。",
            keyPhrases: [
              { en: "full bar", zh: "全套酒吧" },
              { en: "not included", zh: "不包含" },
            ],
            alternativeExpressions: [
              { textEn: "There's a bar on board with everything — cocktails, wine, beer, soda. Just note that drinks aren't part of the ticket. They're pay-as-you-go.", textZh: "船上有酒吧什么都有——鸡尾酒、葡萄酒、啤酒、汽水。注意饮料不包含在票里。自己单点。", actionHint: "说明额外费用", frequency: "common" },
              { textEn: "Oh yes, full bar service. Cocktails, wine, you name it. Fair warning though — drinks are separate from the ticket price.", textZh: "有的，全套酒吧服务。鸡尾酒、葡萄酒，应有尽有。提醒一下——饮料跟票价是分开的。", actionHint: "提前说明", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a guided narration during the cruise, or is it just a free ride?",
            textZh: "游船期间有导游讲解吗？还是就自己坐着？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "There's a live guide who narrates the landmarks and history as you go. They also point out the best photo spots.",
            textZh: "有现场导游讲解沿途的地标和历史。他们也会指出最佳拍照地点。",
            keyPhrases: [
              { en: "live guide", zh: "现场导游" },
              { en: "narrates", zh: "讲解" },
              { en: "photo spots", zh: "拍照地点" },
            ],
            alternativeExpressions: [
              { textEn: "We have a real guide on every cruise who talks about the sights and the history. They'll tell you when to get your camera ready for the best shots.", textZh: "每班游船都有真人导游讲解景点和历史。会告诉你什么时候准备好相机拍最佳照片。", actionHint: "强调现场导游", frequency: "common" },
              { textEn: "It's a fully narrated tour — a live guide tells you about all the landmarks and history. They're great at pointing out the perfect photo opportunities.", textZh: "是有完整讲解的旅程——现场导游会介绍所有地标和历史。他们很擅长指出完美拍照时机。", actionHint: "突出讲解质量", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What should we bring? A jacket maybe? Does it get cold on the water?",
            textZh: "需要带什么？外套？水上会冷吗？",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Definitely bring a light jacket — it gets breezy on the water, especially after sunset. There's also indoor seating if you get too cold.",
            textZh: "一定要带件薄外套——水上有风，特别是日落后。如果太冷也有室内座位。",
            keyPhrases: [
              { en: "breezy", zh: "有风的" },
              { en: "indoor seating", zh: "室内座位" },
            ],
            alternativeExpressions: [
              { textEn: "I'd bring a jacket for sure. The wind picks up on the water, and once the sun goes down it gets chilly. We do have indoor seating as a backup.", textZh: "一定带件外套。水上风大，太阳落山后会变凉。不过有室内座位可以避风。", actionHint: "实用建议", frequency: "common" },
              { textEn: "A light layer is a must — it's always windier out on the water than you'd expect. After sunset especially. But there's a warm cabin inside if needed.", textZh: "薄外套是必须的——水上总是比你预想的风大。特别是日落后。不过里面有暖和的船舱。", actionHint: "管理穿衣期望", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "游船上交流",
        titleEn: "On the Boat Tour",
        description: "游船期间向导游提问和了解景点",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "导游",
            textEn: "Welcome aboard, everyone! As we pull away from the dock, look to your left — that's the historic lighthouse built in 1873.",
            textZh: "大家好！欢迎上船！我们离开码头的时候请看左边——那是建于1873年的历史灯塔。",
            keyPhrases: [
              { en: "welcome aboard", zh: "欢迎上船" },
              { en: "pull away from the dock", zh: "离开码头" },
              { en: "lighthouse", zh: "灯塔" },
            ],
            alternativeExpressions: [
              { textEn: "Good evening, everyone, and welcome to the cruise! If you look off to the left as we head out, you'll see the old lighthouse — been standing since 1873.", textZh: "大家晚上好，欢迎来到游船！我们出发时往左边看，你们会看到那座老灯塔——从1873年就矗立在那了。", actionHint: "正式欢迎", frequency: "common" },
              { textEn: "Welcome aboard, folks! First sight as we leave the dock — check out the historic lighthouse on your left. It's been here for over 150 years!", textZh: "大家好！欢迎上船！离开码头第一个景点——看左边的历史灯塔。在这里超过150年了！", actionHint: "兴奋开场", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me, what's that large building on the waterfront? The one with the glass dome?",
            textZh: "请问，海滨那栋大建筑是什么？就是有玻璃穹顶的那个。",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Great eye! That's the Maritime Museum. It was built in 1925 and houses one of the finest nautical collections in the country.",
            textZh: "好眼力！那是海事博物馆。建于1925年，收藏了全国最好的航海藏品之一。",
            keyPhrases: [
              { en: "Maritime Museum", zh: "海事博物馆" },
              { en: "nautical collections", zh: "航海藏品" },
            ],
            alternativeExpressions: [
              { textEn: "Good spot! That's the Maritime Museum — dates back to 1925. They've got one of the best seafaring collections in the country inside.", textZh: "看得好！那是海事博物馆——始建于1925年。里面有全国最好的航海收藏之一。", actionHint: "赞赏并介绍", frequency: "common" },
              { textEn: "Sharp eye! You're looking at the Maritime Museum, built in 1925. If you get a chance to visit, the nautical exhibits are world-class.", textZh: "眼力不错！你看到的是1925年建的海事博物馆。如果有机会去参观，航海展品是世界级的。", actionHint: "推荐参观", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I go to the upper deck for a better view? Or is that restricted?",
            textZh: "可以去上层甲板看更好的风景吗？还是限制区域？",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "The upper deck is open to everyone. It's the best spot for photos. Just be careful with your phone — the wind picks up once we're in open water.",
            textZh: "上层甲板对所有人开放。拍照的最佳位置。注意手机——到开阔水域风会变大。",
            keyPhrases: [
              { en: "open water", zh: "开阔水域" },
              { en: "wind picks up", zh: "风变大" },
            ],
            alternativeExpressions: [
              { textEn: "Go right up! The top deck is open and it's the best for pictures. Just hold on tight to your phone when we get out in the open — it gets windy.", textZh: "上去吧！顶层甲板开放的拍照最好。到了开阔水域风大，手机抓紧。", actionHint: "鼓励去并提醒", frequency: "common" },
              { textEn: "Absolutely, anyone can go up. Best views and photos are from there. One tip — grip your phone tight once we hit open water. The wind is real.", textZh: "当然，谁都可以上去。那里景色和照片最好。一个提醒——到开阔水域手机握紧。风真的大。", actionHint: "实用拍照提醒", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What bridge are we heading towards? It looks incredible from here.",
            textZh: "我们朝哪座桥开过去？从这里看太壮观了。",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "That's the Bay Bridge. We'll pass right under it — great photo opportunity! The span is over 4 miles long, one of the longest in the world.",
            textZh: "那是海湾大桥。我们会从下面经过——拍照好机会！跨度超过4英里，世界上最长的之一。",
            keyPhrases: [
              { en: "pass right under", zh: "从下面经过" },
              { en: "span", zh: "跨度" },
            ],
            alternativeExpressions: [
              { textEn: "That beauty is the Bay Bridge! We're going to go right underneath it — get your cameras ready! Over 4 miles long, one of the world's longest.", textZh: "那个美丽的就是海湾大桥！我们要从正下方经过——准备好相机！超过4英里长，世界上最长的之一。", actionHint: "兴奋介绍", frequency: "common" },
              { textEn: "You're looking at the Bay Bridge — incredible, right? We'll cruise right under it in a moment. Fun fact: it stretches over 4 miles. Perfect photo op coming up!", textZh: "你们看到的是海湾大桥——很壮观吧？我们马上要从下面经过。冷知识：跨度超过4英里。绝佳拍照时机要来了！", actionHint: "添加趣味知识", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Are those sea lions on the rocks over there? This is amazing!",
            textZh: "那边礁石上的是海狮吗？太神奇了！",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Yes! That's a sea lion colony. They've been here since the 1990s. If you listen carefully, you can hear them barking. We'll get closer in a moment.",
            textZh: "是的！那是海狮群。从1990年代就在这了。仔细听的话能听到它们叫。我们一会儿会靠近。",
            keyPhrases: [
              { en: "sea lion colony", zh: "海狮群" },
              { en: "barking", zh: "叫声" },
              { en: "get closer", zh: "靠近" },
            ],
            alternativeExpressions: [
              { textEn: "Great catch! Those are sea lions — they've made this their home since the 90s. Listen — you can hear them. We'll swing by for a closer look.", textZh: "发现得好！那些是海狮——90年代就把这里当家了。听——能听到它们的声音。我们会靠近看看。", actionHint: "生动讲解", frequency: "common" },
              { textEn: "Yep, a whole sea lion colony! Been lounging out there for decades. Can you hear the barking? Hold tight — we're going to get right up close.", textZh: "没错，一整群海狮！在那儿晒了几十年的太阳了。能听到叫声吗？坐稳——我们要靠近了。", actionHint: "增加趣味", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This is the best $45 I've spent on this trip. Thank you for the wonderful narration!",
            textZh: "这是这次旅行花的最值的45美元。感谢精彩的讲解！",
          },
          {
            speaker: "them",
            role: "导游",
            textEn: "Thank you! As we head back to the dock, look to the west for the sunset — it should be spectacular tonight. And don't forget to leave a review online!",
            textZh: "谢谢！回码头的时候看西边的日落——今晚应该很壮观。别忘了在网上留评价！",
            keyPhrases: [
              { en: "head back", zh: "返回" },
              { en: "spectacular", zh: "壮观的" },
              { en: "leave a review", zh: "留评价" },
            ],
            alternativeExpressions: [
              { textEn: "Glad you enjoyed it! Keep your eyes on the west as we cruise back — tonight's sunset is going to be a show. And if you get a chance, drop us a review online!", textZh: "很高兴你喜欢！回去的路上看西边——今晚的日落会很精彩。有空的话在网上给我们留个评价！", actionHint: "热情收场", frequency: "common" },
              { textEn: "Thank you so much! One last treat — watch the western sky as we return. Should be a gorgeous sunset. A review online really helps us — we'd love to hear from you!", textZh: "非常感谢！最后一个亮点——回去时看西边的天空。应该是绝美日落。网上评价对我们帮助很大——很期待你的反馈！", actionHint: "感恩并求评价", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 买车卖车 ====================
  {
    id: 'transport-buy-car',
    category: 'transport',
    titleZh: '买新车',
    titleEn: 'Buying a New Car',
    description: '在汽车经销商处看车、试驾、谈价格并完成购车',
    otherRole: '汽车销售',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '看车和试驾',
        titleEn: 'Browsing & Test Drive',
        description: '到经销商处看车、询问配置、安排试驾',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'m interested in looking at some sedans. Can you show me what you have?', textZh: '你好，我想看看轿车。能带我看看你们有什么吗？', casualVersion: 'Hey, I\'m looking for a sedan. What do you guys have?' },
          { speaker: 'them', role: '销售', textEn: 'Absolutely! We have several models on the lot. Are you looking for something fuel-efficient or more performance-oriented?', textZh: '当然！我们场地上有好几款。您是想要省油的还是偏性能的？', keyPhrases: [{ en: 'on the lot', zh: '在场地上/现车' }, { en: 'fuel-efficient', zh: '省油的' }], alternativeExpressions: [{ textEn: 'Sure thing! We\'ve got a nice selection. Are you more into gas mileage or horsepower?', textZh: '没问题！我们选择不少。您更看重油耗还是马力？', actionHint: '口语化询问偏好', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Something fuel-efficient would be great. What\'s your most popular model?', textZh: '省油的就好。你们最畅销的是哪款？', casualVersion: 'Fuel-efficient for sure. What\'s selling best?' },
          { speaker: 'them', role: '销售', textEn: 'Our best seller is the Civic. Great gas mileage, reliable, and it starts at $26,000. Want to take it for a test drive?', textZh: '我们最畅销的是 Civic。油耗低、可靠，起步价26,000美元。想试驾一下吗？', keyPhrases: [{ en: 'best seller', zh: '最畅销款' }, { en: 'test drive', zh: '试驾' }], alternativeExpressions: [{ textEn: 'The Civic is our top pick — great on gas, super reliable, starting around $26K. Wanna take it for a spin?', textZh: 'Civic 是我们的首选——省油、超可靠，起步价大约2.6万。想去兜一圈吗？', actionHint: '热情推荐', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, I\'d love to test drive it. Do I need to bring anything?', textZh: '好的，我想试驾一下。需要带什么吗？', culturalNote: 'In the US, you typically need a valid driver\'s license to test drive. The dealer will make a copy of it.' },
          { speaker: 'them', role: '销售', textEn: 'Just your driver\'s license. I\'ll grab the keys and we can head out right away.', textZh: '只要您的驾照就行。我去拿钥匙，我们马上就能出发。', keyPhrases: [{ en: 'driver\'s license', zh: '驾照' }, { en: 'head out', zh: '出发' }], alternativeExpressions: [{ textEn: 'All you need is your license. Let me get the keys — we\'ll be on the road in two minutes.', textZh: '只需要您的驾照。我去拿钥匙——两分钟后就上路。', actionHint: '快速安排', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '谈价格和签约',
        titleEn: 'Negotiating & Closing',
        description: '讨论价格、融资方案、完成购车合同',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'I liked the test drive. What kind of deals can you offer me on this one?', textZh: '试驾感觉不错。这辆车你们能给什么优惠？', casualVersion: 'Loved the drive. So what can you do on price?' },
          { speaker: 'them', role: '销售', textEn: 'The sticker price is $28,500, but I can talk to my manager about getting you a better deal. Are you planning to finance or pay in full?', textZh: '标价是28,500美元，但我可以跟经理谈谈给您更好的价格。您打算贷款还是全款？', keyPhrases: [{ en: 'sticker price', zh: '标价' }, { en: 'finance', zh: '贷款/分期' }], alternativeExpressions: [{ textEn: 'It\'s listed at $28,500, but there\'s definitely room to work with. Will you be financing or paying cash?', textZh: '标价28,500，但肯定还有商量余地。您是贷款还是付现？', actionHint: '暗示可议价', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'d like to finance it. What interest rates are you offering right now?', textZh: '我想贷款。你们现在利率是多少？' },
          { speaker: 'them', role: '销售', textEn: 'We have rates starting at 3.9% APR for 60 months with good credit. We can also check with multiple lenders to find you the best rate.', textZh: '信用好的话，60个月起步利率3.9% APR。我们也可以找多家贷方帮您拿最优利率。', keyPhrases: [{ en: 'APR', zh: '年利率' }, { en: 'good credit', zh: '良好的信用' }], alternativeExpressions: [{ textEn: 'With solid credit, you\'re looking at 3.9% over 60 months. We work with several banks so we can shop around for the best deal.', textZh: '信用好的话，60个月利率3.9%。我们跟几家银行合作，可以货比三家。', actionHint: '详细说明贷款方案', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That sounds reasonable. Can you include floor mats and a maintenance package in the deal?', textZh: '听起来还可以。能不能加上脚垫和保养套餐？', casualVersion: 'Not bad. Can you throw in floor mats and free maintenance?' },
          { speaker: 'them', role: '销售', textEn: 'I can definitely throw in the floor mats. For the maintenance package, I\'ll see what I can do. Let me draw up the paperwork and we can go over everything together.', textZh: '脚垫肯定没问题。保养套餐的话我尽量争取。我先把文件准备好，我们一起过一遍。', keyPhrases: [{ en: 'throw in', zh: '附赠/加上' }, { en: 'draw up the paperwork', zh: '准备文件' }], alternativeExpressions: [{ textEn: 'Floor mats — absolutely, those are on us. Maintenance — let me work that in. I\'ll get the contract ready so we can review it.', textZh: '脚垫——当然，我们送。保养——我争取加进去。我把合同准备好我们看一下。', actionHint: '积极促成交易', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-buy-used-car',
    category: 'transport',
    titleZh: '买二手车',
    titleEn: 'Buying a Used Car',
    description: '购买二手车时检查车况、查看车辆历史报告、砍价',
    otherRole: '二手车卖家',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '看车和问车况',
        titleEn: 'Inspecting the Car',
        description: '查看二手车、询问里程和保养记录',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I saw your listing online. Is the car still available?', textZh: '你好，我在网上看到你的车。还在卖吗？', casualVersion: 'Hey, saw your ad. Is the car still up for grabs?' },
          { speaker: 'them', role: '卖家', textEn: 'Yes, it\'s still available! It\'s a 2020 with about 45,000 miles on it. Would you like to come see it?', textZh: '是的，还在卖！2020年的，大概跑了45,000英里。想来看看吗？', keyPhrases: [{ en: 'miles on it', zh: '跑了...英里/里程数' }, { en: 'come see it', zh: '来看看' }], alternativeExpressions: [{ textEn: 'Yep, still got it! It\'s a 2020 model, 45K miles. Want to swing by and check it out?', textZh: '对，还有！2020款，4.5万英里。想过来看看吗？', actionHint: '口语化回复', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Definitely. Has it ever been in any accidents? Do you have the maintenance records?', textZh: '一定要来看。它出过事故吗？有保养记录吗？', casualVersion: 'For sure. Any accidents? Got the service records?' },
          { speaker: 'them', role: '卖家', textEn: 'No accidents at all — clean title. I have all the service records. Oil changes every 5,000 miles, new tires last year.', textZh: '完全没出过事故——干净产权。我有全部保养记录。每5,000英里换机油，去年换了新轮胎。', keyPhrases: [{ en: 'clean title', zh: '干净产权/无事故记录' }, { en: 'service records', zh: '保养记录' }], alternativeExpressions: [{ textEn: 'Zero accidents, clean Carfax. I\'ve kept up with all the maintenance — oil changes on schedule, fresh tires from last year.', textZh: '零事故，Carfax 报告干净。保养都跟上了——按时换油，去年换的新轮胎。', actionHint: '强调车况好', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That\'s good to hear. Why are you selling it?', textZh: '那很好。你为什么要卖呢？', culturalNote: 'Asking why someone is selling their used car is completely normal in the US and helps you gauge if there are hidden issues.' },
          { speaker: 'them', role: '卖家', textEn: 'I\'m upgrading to a bigger vehicle — we just had a baby, so we need more space. The car runs perfectly though.', textZh: '我要换辆大车——我们刚有了宝宝，需要更多空间。不过这车开起来完全没问题。', keyPhrases: [{ en: 'upgrading to', zh: '升级到/换成' }, { en: 'runs perfectly', zh: '跑得很好' }], alternativeExpressions: [{ textEn: 'Growing family, need a bigger ride. This one\'s been great to me — hate to let it go, honestly.', textZh: '家里添人了，需要大车。这车对我来说一直很好——说实话舍不得卖。', actionHint: '表达不舍', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '砍价和过户',
        titleEn: 'Negotiating & Transfer',
        description: '协商价格、安排检测、办理过户手续',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'I like the car, but your asking price is a bit high. Would you consider $15,000?', textZh: '我喜欢这车，但你要价有点高。15,000美元考虑吗？', casualVersion: 'Car looks good, but the price is steep. How about $15K?' },
          { speaker: 'them', role: '卖家', textEn: 'I was hoping to get $17,500. I\'ve put a lot into maintaining it. Could you meet me at $16,000?', textZh: '我希望卖17,500。我在保养上投入了很多。16,000能接受吗？', keyPhrases: [{ en: 'meet me at', zh: '折中到/各让一步到' }, { en: 'put a lot into', zh: '投入了很多' }], alternativeExpressions: [{ textEn: 'Seventeen-five is what I had in mind. How about we split the difference — $16,000?', textZh: '我原本想卖一万七千五。我们各让一步——16,000怎么样？', actionHint: '提议折中', frequency: 'common' }] },
          { speaker: 'you', textEn: 'How about $15,500? I\'d also want to have a mechanic inspect it before we finalize.', textZh: '15,500怎么样？我还想在成交前让技师检查一下。' },
          { speaker: 'them', role: '卖家', textEn: 'I can do $15,500 if your mechanic gives it the green light. You\'re welcome to take it to any shop.', textZh: '如果你的技师检查没问题的话，15,500可以。你可以拿去任何修车店检查。', keyPhrases: [{ en: 'gives it the green light', zh: '检查通过/没问题' }, { en: 'any shop', zh: '任何修车店' }], alternativeExpressions: [{ textEn: 'Tell you what — $15,500 if the inspection checks out. Take it wherever you want, I\'ve got nothing to hide.', textZh: '这样吧——检查没问题就15,500。随便你拿去哪儿查，我没什么好隐瞒的。', actionHint: '自信同意', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Deal. What do we need to do for the title transfer?', textZh: '成交。过户需要怎么办？', casualVersion: 'Deal. So how do we handle the title stuff?' },
          { speaker: 'them', role: '卖家', textEn: 'We\'ll need to sign the title over to you and fill out a bill of sale. Then you take that to the DMV to register it in your name.', textZh: '我们需要把产权签给你，然后填一份买卖合同。然后你拿着去 DMV 登记到你名下。', keyPhrases: [{ en: 'sign the title over', zh: '签转产权' }, { en: 'bill of sale', zh: '买卖合同' }], alternativeExpressions: [{ textEn: 'I\'ll sign the title to you, we\'ll do a bill of sale, and then you just go to the DMV to get it registered. Pretty straightforward.', textZh: '我把产权签给你，我们写一份买卖合同，然后你去 DMV 注册就行。很简单。', actionHint: '简化说明流程', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-sell-car',
    category: 'transport',
    titleZh: '卖车',
    titleEn: 'Selling Your Car',
    description: '向买家展示你的车、回答问题、协商价格',
    otherRole: '买家',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '展示车况',
        titleEn: 'Showing the Car',
        description: '带买家看车、回答关于车况的问题',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Thanks for coming out to see the car. Let me walk you around it.', textZh: '谢谢你来看车。我带你绕一圈看看。', casualVersion: 'Thanks for coming by. Let me show you around.' },
          { speaker: 'them', role: '买家', textEn: 'It looks great in person. How many miles does it have? Any issues I should know about?', textZh: '实车看起来不错。跑了多少英里了？有什么我应该知道的问题吗？', keyPhrases: [{ en: 'in person', zh: '实物/实车' }, { en: 'issues I should know about', zh: '我应该知道的问题' }], alternativeExpressions: [{ textEn: 'Wow, it looks better than the photos. What\'s the mileage, and is there anything wrong with it?', textZh: '哇，比照片好看。里程多少，有什么毛病吗？', actionHint: '直接询问', frequency: 'common' }] },
          { speaker: 'you', textEn: 'It has 52,000 miles. Everything runs great — new brakes last month and the tires are almost new.', textZh: '跑了52,000英里。一切运行良好——上个月刚换了刹车片，轮胎也几乎是新的。', casualVersion: '52K miles. Runs like a charm — new brakes, almost new tires.' },
          { speaker: 'them', role: '买家', textEn: 'Nice. Has it been in any accidents? And do you have the Carfax report?', textZh: '不错。出过事故吗？你有 Carfax 报告吗？', keyPhrases: [{ en: 'Carfax report', zh: 'Carfax 车辆历史报告' }, { en: 'been in any accidents', zh: '出过事故吗' }], alternativeExpressions: [{ textEn: 'Good to know. Any accident history? Can I see a vehicle history report?', textZh: '了解了。有事故记录吗？能看看车辆历史报告吗？', actionHint: '正式询问', frequency: 'common' }] },
          { speaker: 'you', textEn: 'No accidents at all. I have the Carfax right here — completely clean. One owner, that\'s me.', textZh: '完全没有事故。Carfax 我带了——完全干净。一手车，就是我。' },
          { speaker: 'them', role: '买家', textEn: 'That\'s reassuring. Can I take it for a quick test drive around the block?', textZh: '那就放心了。我能绕着街区试驾一下吗？', keyPhrases: [{ en: 'reassuring', zh: '让人放心' }, { en: 'around the block', zh: '绕街区一圈' }], alternativeExpressions: [{ textEn: 'Perfect, that\'s what I like to hear. Mind if I take it for a quick spin?', textZh: '完美，这就是我想听到的。介意我开一圈试试吗？', actionHint: '随意请求试驾', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '协商成交',
        titleEn: 'Closing the Sale',
        description: '和买家谈价格、处理付款方式',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'So what do you think after the test drive? Ready to talk numbers?', textZh: '试驾完感觉怎么样？准备谈价了吗？', casualVersion: 'So, what do you think? Ready to talk price?' },
          { speaker: 'them', role: '买家', textEn: 'I like it a lot. Your asking price is $18,000 — any wiggle room on that?', textZh: '我很喜欢。你要价18,000——有商量的余地吗？', keyPhrases: [{ en: 'wiggle room', zh: '商量余地/让价空间' }, { en: 'asking price', zh: '要价' }], alternativeExpressions: [{ textEn: 'The car drives great. You\'re asking $18K — is that negotiable?', textZh: '车开起来很棒。你要价1.8万——能谈吗？', actionHint: '直接问能否议价', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I could come down a little. What number were you thinking?', textZh: '可以少一点。你想出多少？' },
          { speaker: 'them', role: '买家', textEn: 'How about $16,500? I checked the Kelley Blue Book value and it\'s right in that range.', textZh: '16,500怎么样？我查了 Kelley Blue Book 估值，就在这个范围。', keyPhrases: [{ en: 'Kelley Blue Book', zh: 'Kelley Blue Book（美国权威汽车估值）' }, { en: 'in that range', zh: '在那个范围内' }], alternativeExpressions: [{ textEn: 'I was thinking more like $16,500. That\'s right around what KBB says it\'s worth.', textZh: '我想的是16,500左右。这差不多是 KBB 估的价。', actionHint: '引用权威定价', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Let\'s split the difference — $17,250. That\'s fair for both of us.', textZh: '我们各让一步——17,250。对双方都公平。', casualVersion: 'How about we meet in the middle — $17,250?' },
          { speaker: 'them', role: '买家', textEn: 'Alright, $17,250 works for me. I can pay with a cashier\'s check. When can we do the paperwork?', textZh: '好吧，17,250可以。我用银行本票付。我们什么时候办手续？', keyPhrases: [{ en: 'cashier\'s check', zh: '银行本票' }, { en: 'do the paperwork', zh: '办手续' }], alternativeExpressions: [{ textEn: 'Deal — $17,250. I\'ll bring a certified check. Can we handle the title transfer tomorrow?', textZh: '成交——17,250。我带一张认证支票。明天能办过户吗？', actionHint: '确定付款和时间', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-driving-test',
    category: 'transport',
    titleZh: '考驾照',
    titleEn: 'Taking a Driving Test',
    description: '在 DMV 预约和参加驾照路考',
    otherRole: '考官',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '预约路考',
        titleEn: 'Scheduling the Road Test',
        description: '在 DMV 预约驾照路考',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'d like to schedule a road test for my driver\'s license.', textZh: '你好，我想预约驾照路考。', casualVersion: 'Hey, I need to book a road test.' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Sure. Do you have your learner\'s permit? And have you completed the required practice hours?', textZh: '好的。你有学习许可证吗？完成了要求的练习时间吗？', keyPhrases: [{ en: 'learner\'s permit', zh: '学习许可证' }, { en: 'practice hours', zh: '练习时间' }], alternativeExpressions: [{ textEn: 'Of course. I\'ll need to see your permit first. Have you logged all your practice hours?', textZh: '当然。我先看看你的许可证。练习时间都记录了吗？', actionHint: '确认前置条件', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, here\'s my permit. I\'ve completed all 50 hours of practice.', textZh: '是的，这是我的许可证。我已经完成了全部50小时的练习。', culturalNote: 'Many US states require new drivers to log a specific number of supervised practice hours before taking the road test.' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Great. The earliest available slot is next Wednesday at 10 AM. Does that work for you?', textZh: '好的。最早的空位是下周三上午10点。可以吗？', keyPhrases: [{ en: 'available slot', zh: '空闲时段' }, { en: 'does that work', zh: '可以吗/合适吗' }], alternativeExpressions: [{ textEn: 'Perfect. I\'ve got an opening next Wednesday morning at 10. Would that suit you?', textZh: '好的。下周三上午10点有一个空位。适合你吗？', actionHint: '提供时间选择', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That works. What do I need to bring on the day of the test?', textZh: '可以的。考试那天我需要带什么？' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Bring your permit, proof of insurance, and a vehicle with valid registration. The car must pass a basic safety check.', textZh: '带上你的许可证、保险证明和一辆有有效注册的车。车辆必须通过基本安全检查。', keyPhrases: [{ en: 'proof of insurance', zh: '保险证明' }, { en: 'valid registration', zh: '有效注册' }], alternativeExpressions: [{ textEn: 'You\'ll need your permit, insurance docs, and a registered vehicle. We\'ll do a quick safety inspection on the car before we start.', textZh: '你需要带许可证、保险文件和一辆已注册的车。开始前我们会对车做快速安全检查。', actionHint: '详细列出要求', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '路考过程',
        titleEn: 'During the Road Test',
        description: '路考中听从考官指令、完成各项操作',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Good morning. I\'m here for my 10 o\'clock road test.', textZh: '早上好。我是来参加10点路考的。', casualVersion: 'Morning! I\'m here for my driving test at 10.' },
          { speaker: 'them', role: '考官', textEn: 'Good morning. Let me check your documents first. Alright, everything looks good. Let\'s start with some basic maneuvers. Please pull out of the parking space and turn right at the exit.', textZh: '早上好。先让我检查一下你的证件。好的，一切正常。我们先做一些基本操作。请倒出车位然后在出口右转。', keyPhrases: [{ en: 'maneuvers', zh: '操作/动作' }, { en: 'pull out of', zh: '驶出' }], alternativeExpressions: [{ textEn: 'Morning. Documents, please. OK, all set. We\'ll begin with basic maneuvers — go ahead and pull out, then make a right at the exit.', textZh: '早。请出示证件。好的，没问题。我们从基本操作开始——请驶出车位，在出口处右转。', actionHint: '简洁发出指令', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Got it. Checking mirrors, signaling right, and pulling out now.', textZh: '明白了。检查后视镜，打右转灯，现在驶出。' },
          { speaker: 'them', role: '考官', textEn: 'Good. At the next intersection, I\'d like you to make a left turn. Remember to check for oncoming traffic.', textZh: '好的。在下一个路口，请左转。记得注意对面来车。', keyPhrases: [{ en: 'intersection', zh: '路口/十字路口' }, { en: 'oncoming traffic', zh: '对面来车' }], alternativeExpressions: [{ textEn: 'Nice. Up ahead at the light, take a left. Make sure you yield to oncoming vehicles.', textZh: '不错。前面红绿灯处左转。确保让对面来车先行。', actionHint: '具体指令', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Left turn at the intersection, checking for traffic. Signal on.', textZh: '在路口左转，查看车流。转向灯已开。' },
          { speaker: 'them', role: '考官', textEn: 'Well done. Now I\'d like you to parallel park between those two cars up ahead. Take your time.', textZh: '做得好。现在请在前面那两辆车之间侧方停车。慢慢来。', keyPhrases: [{ en: 'parallel park', zh: '侧方停车' }, { en: 'take your time', zh: '慢慢来/不急' }], alternativeExpressions: [{ textEn: 'Looking good. Next, go ahead and parallel park right there between those two vehicles. No rush.', textZh: '看起来不错。接下来，在那两辆车之间侧方停车。不着急。', actionHint: '鼓励性指令', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-car-insurance',
    category: 'transport',
    titleZh: '买车险',
    titleEn: 'Getting Car Insurance',
    description: '咨询和购买汽车保险、了解不同保障范围',
    otherRole: '保险代理',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '咨询车险报价',
        titleEn: 'Getting a Quote',
        description: '向保险代理咨询车险种类和价格',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I just bought a car and I need to get insurance. Can you help me?', textZh: '你好，我刚买了一辆车，需要买保险。能帮我吗？', casualVersion: 'Hey, I just got a car and need insurance. Can you help?' },
          { speaker: 'them', role: '保险代理', textEn: 'Of course! I can get you a quote right now. What\'s the year, make, and model of your vehicle?', textZh: '当然！我现在就能给你报价。你的车是什么年款、品牌和型号？', keyPhrases: [{ en: 'get you a quote', zh: '给你报价' }, { en: 'year, make, and model', zh: '年款、品牌和型号' }], alternativeExpressions: [{ textEn: 'Absolutely! Let me pull up a quote for you. What kind of car is it — year, make, model?', textZh: '没问题！我给你查个报价。什么车——年款、品牌、型号？', actionHint: '专业快速响应', frequency: 'common' }] },
          { speaker: 'you', textEn: 'It\'s a 2024 Toyota Camry. I\'m a new driver, so I\'m not sure what coverage I need.', textZh: '是2024年丰田凯美瑞。我是新手司机，不太确定需要什么保障。', culturalNote: 'Most US states legally require at least liability insurance. Full coverage includes comprehensive and collision but costs more.' },
          { speaker: 'them', role: '保险代理', textEn: 'No worries, I\'ll walk you through it. At minimum, you need liability coverage — that\'s required by law. But I\'d also recommend comprehensive and collision coverage, especially for a newer car.', textZh: '别担心，我来帮你讲解。最低要求是责任险——这是法律规定的。但我也建议买综合险和碰撞险，尤其是新车。', keyPhrases: [{ en: 'liability coverage', zh: '责任险' }, { en: 'comprehensive and collision', zh: '综合险和碰撞险' }], alternativeExpressions: [{ textEn: 'Don\'t worry, I\'ll break it all down. You legally need liability at least. For a new Camry, I\'d strongly suggest full coverage — comprehensive plus collision.', textZh: '别担心，我一个个解释。法律上至少需要责任险。新凯美瑞的话，我强烈建议全保——综合险加碰撞险。', actionHint: '专业推荐', frequency: 'common' }] },
          { speaker: 'you', textEn: 'What would full coverage cost me per month?', textZh: '全保每月多少钱？' },
          { speaker: 'them', role: '保险代理', textEn: 'Based on your profile, full coverage would be about $180 a month. You can lower that with a higher deductible — say $1,000 instead of $500.', textZh: '根据你的情况，全保大概每月180美元。你可以通过提高免赔额来降低保费——比如1,000美元而不是500美元。', keyPhrases: [{ en: 'deductible', zh: '免赔额' }, { en: 'lower that', zh: '降低保费' }], alternativeExpressions: [{ textEn: 'For your situation, you\'re looking at roughly $180 a month for full coverage. If you bump the deductible up to $1,000, we can bring that down a bit.', textZh: '你的情况大概每月180美元全保。如果把免赔额提到1,000，价格能降一些。', actionHint: '提供省钱建议', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '选择保险方案',
        titleEn: 'Choosing a Plan',
        description: '比较不同保险方案、了解附加保障',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'What other add-ons do you recommend? I want to make sure I\'m well covered.', textZh: '你还推荐什么附加项？我想确保保障全面。', casualVersion: 'What else should I add on? I want good coverage.' },
          { speaker: 'them', role: '保险代理', textEn: 'I\'d suggest uninsured motorist coverage — that protects you if someone without insurance hits you. Roadside assistance is also popular, only about $3 extra a month.', textZh: '我建议加无保险驾驶人保障——如果被没保险的人撞了可以保护你。道路救援也很受欢迎，每月只多3美元左右。', keyPhrases: [{ en: 'uninsured motorist', zh: '无保险驾驶人' }, { en: 'roadside assistance', zh: '道路救援' }], alternativeExpressions: [{ textEn: 'Definitely get uninsured motorist — you\'d be surprised how many people drive without insurance. And roadside assistance is a no-brainer for just a few bucks a month.', textZh: '一定要加无保险驾驶人险——你会惊讶有多少人无保险开车。道路救援每月才几块钱，必须加。', actionHint: '强调必要性', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Good idea. What about rental car coverage if my car is in the shop?', textZh: '好主意。如果我的车在修，有租车保障吗？' },
          { speaker: 'them', role: '保险代理', textEn: 'Yes, rental reimbursement covers a rental car while yours is being repaired after a covered claim. It\'s about $5 a month — definitely worth it.', textZh: '有的，租车报销保障在理赔修车期间为你提供租车费用。大约每月5美元——绝对值得。', keyPhrases: [{ en: 'rental reimbursement', zh: '租车报销' }, { en: 'covered claim', zh: '理赔范围内的事故' }], alternativeExpressions: [{ textEn: 'Absolutely — rental reimbursement kicks in when your car is being fixed after a claim. Just $5 a month. Most people add it.', textZh: '当然——理赔修车时租车报销就生效了。每月才5美元。大多数人都会加。', actionHint: '推荐加购', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Let\'s add both of those. Can you give me the total monthly cost?', textZh: '两个都加上吧。能告诉我每月总费用吗？', casualVersion: 'Throw both of those in. What\'s my total gonna be?' },
          { speaker: 'them', role: '保险代理', textEn: 'With everything included, your monthly premium comes to $195. I can set up autopay so you never miss a payment. Want to go ahead and lock this in?', textZh: '全部加上的话，你的月保费是195美元。我可以设置自动扣款这样你不会忘记缴费。要现在确定吗？', keyPhrases: [{ en: 'monthly premium', zh: '月保费' }, { en: 'lock this in', zh: '确定下来/锁定' }], alternativeExpressions: [{ textEn: 'All in, you\'re at $195 a month. I can put you on autopay right now. Ready to sign up?', textZh: '全部算下来每月195。我现在就能给你设自动扣款。准备签约了吗？', actionHint: '促成签约', frequency: 'common' }] },
        ],
      },
    ],
  },
  // ==================== 长途交通 ====================
  {
    id: 'transport-greyhound-ticket',
    category: 'transport',
    titleZh: '买灰狗巴士票',
    titleEn: 'Buying a Greyhound Ticket',
    description: '在灰狗巴士站购票、确认班次和座位',
    otherRole: '售票员',
    otherRoleIcon: '🚌',
    flows: [
      {
        id: 'basic',
        titleZh: '购买车票',
        titleEn: 'Purchasing a Ticket',
        description: '在柜台买长途巴士票',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I need a ticket to New York. What times do you have available today?', textZh: '你好，我要一张去纽约的票。今天有什么班次？', casualVersion: 'Hey, I need a ticket to New York. What\'s running today?' },
          { speaker: 'them', role: '售票员', textEn: 'We have buses at 11 AM, 2 PM, and 6 PM. The 11 o\'clock is an express — gets you there in four hours. The others make a few stops.', textZh: '我们有上午11点、下午2点和6点的班次。11点的是直达——四小时到。其他的中间有几站。', keyPhrases: [{ en: 'express', zh: '直达/快车' }, { en: 'make a few stops', zh: '中间停几站' }], alternativeExpressions: [{ textEn: 'Departures at 11, 2, and 6 today. The 11 AM is nonstop — four hours flat. The afternoon ones stop along the way.', textZh: '今天11点、2点、6点发车。上午11点的不停站——整四个小时。下午的沿途有停靠。', actionHint: '简洁报时', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'ll take the 11 AM express. How much is it?', textZh: '我买11点的直达。多少钱？', casualVersion: 'The 11 AM express, please. How much?' },
          { speaker: 'them', role: '售票员', textEn: 'One way is $45, round trip is $78. The round trip saves you about twelve bucks. Which would you prefer?', textZh: '单程45美元，往返78美元。往返能省大约12块。你要哪种？', keyPhrases: [{ en: 'one way', zh: '单程' }, { en: 'round trip', zh: '往返' }], alternativeExpressions: [{ textEn: '$45 one way, or $78 round trip — saves you a few dollars. Going one way or coming back too?', textZh: '单程45，往返78——能省几块钱。只去还是也回来？', actionHint: '推荐往返', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Round trip, please. I\'ll be coming back on Sunday.', textZh: '往返票吧。我周日回来。' },
          { speaker: 'them', role: '售票员', textEn: 'Got it. Here\'s your ticket — bus departs from Gate 5. Please be there at least 15 minutes early. You can stow one bag underneath and carry one on.', textZh: '好的。这是你的票——在5号门发车。请至少提前15分钟到。你可以在下面放一个行李，随身带一个。', keyPhrases: [{ en: 'departs from Gate 5', zh: '在5号门发车' }, { en: 'stow one bag underneath', zh: '在下面放一个行李' }], alternativeExpressions: [{ textEn: 'All set. Your bus leaves from Gate 5 — try to get there 15 minutes before. One bag below, one bag on board.', textZh: '搞定了。你的车从5号门出发——尽量提前15分钟到。下面放一个包，上面带一个。', actionHint: '提示注意事项', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '处理改签和延误',
        titleEn: 'Changes & Delays',
        description: '处理巴士改签、退票或延误情况',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Excuse me, my bus was supposed to leave at 2 PM but it\'s delayed. What\'s going on?', textZh: '请问，我的车应该下午2点发车但晚了。怎么回事？', casualVersion: 'Hey, the 2 PM bus is late. What\'s happening?' },
          { speaker: 'them', role: '售票员', textEn: 'I\'m sorry about that. There\'s a mechanical issue with the bus. We\'re expecting a replacement to arrive in about 45 minutes.', textZh: '很抱歉。巴士有机械故障。我们预计替换车大约45分钟后到。', keyPhrases: [{ en: 'mechanical issue', zh: '机械故障' }, { en: 'replacement', zh: '替换车' }], alternativeExpressions: [{ textEn: 'Sorry for the delay — we\'re dealing with a mechanical problem. A backup bus should be here within 45 minutes.', textZh: '抱歉延误了——遇到了机械问题。备用车大约45分钟内到。', actionHint: '解释并给时间', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That\'s a long wait. Can I switch to the 6 PM bus instead?', textZh: '等很久啊。能改到6点的班次吗？' },
          { speaker: 'them', role: '售票员', textEn: 'Absolutely, I can switch you over at no extra charge. The 6 PM bus has plenty of seats available.', textZh: '当然可以，免费改签。6点的车还有很多空位。', keyPhrases: [{ en: 'switch you over', zh: '帮你改签' }, { en: 'no extra charge', zh: '不额外收费' }], alternativeExpressions: [{ textEn: 'Sure, no problem — I\'ll move you to the 6 PM at no cost. Plenty of room on that one.', textZh: '没问题——我免费给你换到6点的。那趟车位子很多。', actionHint: '积极解决', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Actually, can I just get a refund instead? I\'ll find another way.', textZh: '其实，能不能直接退款？我另想办法。', casualVersion: 'You know what, can I just get my money back?' },
          { speaker: 'them', role: '售票员', textEn: 'Since the delay is on our end, you\'re entitled to a full refund. I\'ll process that right now — it\'ll go back to your card within 3-5 business days.', textZh: '因为延误是我们的问题，你有权获得全额退款。我现在就处理——3-5个工作日内退回你的卡。', keyPhrases: [{ en: 'entitled to a full refund', zh: '有权获得全额退款' }, { en: 'business days', zh: '工作日' }], alternativeExpressions: [{ textEn: 'No problem at all. Since it\'s our fault, it\'s a full refund. Give me one second — you\'ll see it back on your card in a few days.', textZh: '完全没问题。因为是我们的问题，全额退款。稍等一下——几天内退回你的卡。', actionHint: '立即处理', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-amtrak-booking',
    category: 'transport',
    titleZh: '预订美铁火车票',
    titleEn: 'Booking Amtrak Tickets',
    description: '预订美铁火车票、选择舱位和座位',
    otherRole: '美铁客服',
    otherRoleIcon: '🚂',
    flows: [
      {
        id: 'basic',
        titleZh: '购票流程',
        titleEn: 'Booking a Train Ticket',
        description: '在美铁车站柜台或电话购票',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'d like to book a train from Boston to Washington D.C. for next Friday.', textZh: '你好，我想预订下周五从波士顿到华盛顿的火车票。', casualVersion: 'Hey, I need a train ticket from Boston to D.C. next Friday.' },
          { speaker: 'them', role: '美铁客服', textEn: 'Sure! We have the Northeast Regional and the Acela Express. The Regional takes about eight hours and starts at $49. The Acela is faster — about six and a half hours — but starts at $120.', textZh: '好的！我们有东北区域号和 Acela 快车。区域号大约8小时，起步价49美元。Acela 更快——大约6个半小时——但起步价120美元。', keyPhrases: [{ en: 'Northeast Regional', zh: '东北区域号' }, { en: 'Acela Express', zh: 'Acela 快车' }], alternativeExpressions: [{ textEn: 'We\'ve got two options — the Regional at $49, about 8 hours, or the Acela for $120, which gets you there in six and a half. Which sounds better?', textZh: '有两个选择——区域号49美元，大约8小时；或者 Acela 120美元，6个半小时到。哪个更合适？', actionHint: '对比两个选项', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'ll take the Acela. Are there different seat classes?', textZh: '我选 Acela。有不同的座位等级吗？', casualVersion: 'Acela sounds good. What seat options do you have?' },
          { speaker: 'them', role: '美铁客服', textEn: 'Yes, we have Business Class and First Class. First Class includes a complimentary meal and access to the lounge. Business is our standard seating with extra legroom.', textZh: '有的，我们有商务舱和头等舱。头等舱包含免费餐食和贵宾休息室使用权。商务舱是标准座位，有额外腿部空间。', keyPhrases: [{ en: 'complimentary meal', zh: '免费餐食' }, { en: 'extra legroom', zh: '额外腿部空间' }], alternativeExpressions: [{ textEn: 'Two classes — Business and First. First gets you free food and lounge access. Business has nice wide seats with good legroom.', textZh: '两个等级——商务和头等。头等有免费食物和休息室。商务有不错的宽座位和好的腿部空间。', actionHint: '简要比较', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Business Class is fine. Can I choose a window seat?', textZh: '商务舱就行。能选靠窗的座位吗？' },
          { speaker: 'them', role: '美铁客服', textEn: 'Amtrak doesn\'t assign specific seats — it\'s open seating in Business. But if you board early, you\'ll have your pick of window seats.', textZh: '美铁不指定座位——商务舱是自由选座。但如果早点上车，你可以随便挑靠窗的位子。', keyPhrases: [{ en: 'open seating', zh: '自由选座' }, { en: 'board early', zh: '早点上车' }], alternativeExpressions: [{ textEn: 'Seats aren\'t assigned — first come, first served. Get there a bit early and you\'ll snag a window seat no problem.', textZh: '座位不指定——先到先得。早到一点就能抢到靠窗的位子。', actionHint: '实用建议', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '车上服务和换乘',
        titleEn: 'Onboard & Transfers',
        description: '在火车上使用服务、处理换乘问题',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Excuse me, is there a dining car on this train? I missed breakfast.', textZh: '请问，这趟车有餐车吗？我错过了早餐。', casualVersion: 'Hey, is there a food car? I\'m starving.' },
          { speaker: 'them', role: '列车员', textEn: 'Yes, the cafe car is in car number 4 — just two cars ahead. They have sandwiches, snacks, and drinks. The cafe closes about 30 minutes before we arrive.', textZh: '有的，咖啡餐车在4号车厢——往前两节。有三明治、零食和饮料。到站前30分钟关闭。', keyPhrases: [{ en: 'cafe car', zh: '咖啡餐车' }, { en: 'two cars ahead', zh: '往前两节车厢' }], alternativeExpressions: [{ textEn: 'Sure! Head up to car 4 — that\'s our cafe. Grab a sandwich or a coffee. Just heads up, they shut down about half an hour before arrival.', textZh: '当然！到4号车厢——那是我们的咖啡厅。可以买三明治或咖啡。提醒一下，到站前半小时关门。', actionHint: '友好指引', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Thanks. Also, I need to transfer in New York. How much time do I have between trains?', textZh: '谢谢。另外，我需要在纽约换乘。两趟车之间有多少时间？' },
          { speaker: 'them', role: '列车员', textEn: 'You\'ll have about 40 minutes at Penn Station. Your connecting train leaves from a different track, so check the departure board when you arrive.', textZh: '你在宾州车站有大约40分钟。你的换乘火车在不同站台发车，到了以后查看出发显示屏。', keyPhrases: [{ en: 'connecting train', zh: '换乘火车' }, { en: 'departure board', zh: '出发显示屏' }], alternativeExpressions: [{ textEn: 'About 40 minutes at Penn Station. Your next train will be on a different platform — just look at the big board for your track number.', textZh: '在宾州车站大约40分钟。下一趟车在不同站台——看大屏幕上你的轨道号就行。', actionHint: '具体指导', frequency: 'common' }] },
          { speaker: 'you', textEn: 'What if we arrive late and I miss my connection?', textZh: '如果我们晚到了，错过换乘怎么办？', casualVersion: 'What happens if we\'re late and I miss my transfer?' },
          { speaker: 'them', role: '列车员', textEn: 'Don\'t worry — if you miss your connection because of our delay, Amtrak will rebook you on the next available train at no extra cost. Just talk to the station agent.', textZh: '别担心——如果因为我们延误你错过了换乘，美铁会免费帮你改签到下一趟车。找车站工作人员就行。', keyPhrases: [{ en: 'rebook you', zh: '帮你改签' }, { en: 'station agent', zh: '车站工作人员' }], alternativeExpressions: [{ textEn: 'No worries. If it\'s our delay, they\'ll put you on the next train free of charge. Just find the help desk at the station.', textZh: '不用担心。如果是我们的延误，他们会免费安排你坐下一班。到车站找服务台就行。', actionHint: '安抚乘客', frequency: 'common' }] },
        ],
      },
    ],
  },
  // ==================== 机场和出行 ====================
  {
    id: 'transport-airport-parking',
    category: 'transport',
    titleZh: '机场停车',
    titleEn: 'Airport Parking',
    description: '在机场停车场找车位、了解费用和接驳班车',
    otherRole: '停车场工作人员',
    otherRoleIcon: '✈️',
    flows: [
      {
        id: 'basic',
        titleZh: '找停车位',
        titleEn: 'Finding a Parking Spot',
        description: '到达机场停车场、询问可用车位和费用',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'m flying out tomorrow morning. Where should I park for long-term?', textZh: '你好，我明天早上飞。长期停车应该停哪里？', casualVersion: 'Hey, where do I park if I\'m leaving my car for a few days?' },
          { speaker: 'them', role: '工作人员', textEn: 'For long-term, you\'ll want Lot C. It\'s $12 a day or $60 a week. There\'s a free shuttle that runs every 10 minutes to the terminal.', textZh: '长期停车的话去C区。每天12美元或每周60美元。有免费接驳车每10分钟一趟到航站楼。', keyPhrases: [{ en: 'long-term', zh: '长期停车' }, { en: 'shuttle', zh: '接驳车' }], alternativeExpressions: [{ textEn: 'Head to Lot C for long-term. Twelve bucks a day, sixty a week. Free shuttle picks you up every 10 minutes.', textZh: '长期停车去C区。每天12块，每周60。免费接驳车每10分钟来接。', actionHint: '简洁告知', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Is there anything cheaper? I\'ll be gone for five days.', textZh: '有更便宜的吗？我要离开五天。', casualVersion: 'Anything cheaper? I\'ll be away five days.' },
          { speaker: 'them', role: '工作人员', textEn: 'We have an economy lot — Lot E — at $8 a day. The shuttle takes a bit longer from there, about 15 minutes. But you\'d save $20 over five days.', textZh: '我们有经济停车区——E区——每天8美元。从那里接驳车要久一点，大约15分钟。但五天能省20美元。', keyPhrases: [{ en: 'economy lot', zh: '经济停车区' }, { en: 'save', zh: '省' }], alternativeExpressions: [{ textEn: 'There\'s the economy lot — Lot E — just $8 a day. Shuttle\'s a little slower, but you\'d save twenty bucks over the five days.', textZh: '有经济停车区——E区——才8美元一天。接驳车慢一点，但五天省20块。', actionHint: '推荐省钱选项', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'ll go with Lot E then. Is my car safe there overnight?', textZh: '那我停E区吧。车停过夜安全吗？' },
          { speaker: 'them', role: '工作人员', textEn: 'Absolutely. All our lots have 24-hour security cameras and patrols. Just don\'t leave any valuables visible in the car.', textZh: '绝对安全。我们所有停车区都有24小时监控和巡逻。只是不要把贵重物品放在车里看得见的地方。', keyPhrases: [{ en: 'security cameras', zh: '监控摄像头' }, { en: 'valuables', zh: '贵重物品' }], alternativeExpressions: [{ textEn: 'Your car will be fine. We\'ve got security cameras and guards around the clock. Just keep valuables out of sight.', textZh: '你的车没问题。我们全天候有监控和保安。贵重物品放好别露出来就行。', actionHint: '安慰安全', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '取车和支付',
        titleEn: 'Retrieving Your Car',
        description: '回来后找车、支付停车费',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Hi, I just landed and I can\'t remember exactly where I parked my car. It\'s in Lot E somewhere.', textZh: '你好，我刚下飞机，不太记得车停在哪了。在E区某个地方。', casualVersion: 'Hey, I can\'t find my car. It\'s somewhere in Lot E.' },
          { speaker: 'them', role: '工作人员', textEn: 'No worries, it happens all the time. Do you remember the row or section? Or I can look it up by your license plate number.', textZh: '没事，经常有这种情况。你记得排号或区域吗？或者我可以用你的车牌号查。', keyPhrases: [{ en: 'row or section', zh: '排号或区域' }, { en: 'license plate', zh: '车牌号' }], alternativeExpressions: [{ textEn: 'Happens to everyone! Can you remember the section? If not, give me your plate number and I\'ll look it up.', textZh: '每个人都遇到过！记得区域吗？不记得的话告诉我车牌号我帮你查。', actionHint: '热心帮助', frequency: 'common' }] },
          { speaker: 'you', textEn: 'My plate number is ABC 1234. It\'s a blue Honda Civic.', textZh: '我的车牌号是 ABC 1234。蓝色本田 Civic。' },
          { speaker: 'them', role: '工作人员', textEn: 'Found it — Section E3, Row 12. I can give you a ride over in the golf cart if you\'d like.', textZh: '找到了——E3区，第12排。如果你愿意的话我可以开高尔夫球车送你过去。', keyPhrases: [{ en: 'Section E3, Row 12', zh: 'E3区第12排' }, { en: 'golf cart', zh: '高尔夫球车' }], alternativeExpressions: [{ textEn: 'Got it — E3, Row 12. Want a lift over there? I can take you in the cart.', textZh: '查到了——E3区12排。要搭车过去吗？我开车送你。', actionHint: '主动提供帮助', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That would be great, thanks. How do I pay for the parking?', textZh: '那太好了，谢谢。停车费怎么付？', casualVersion: 'That\'d be awesome. Where do I pay?' },
          { speaker: 'them', role: '工作人员', textEn: 'You\'ll pay at the exit gate. Just insert your parking ticket and it\'ll show the total. We accept credit cards and cash. Your five days comes to $40.', textZh: '出口闸机那里付。插入停车票就会显示总额。我们接受信用卡和现金。你五天总共40美元。', keyPhrases: [{ en: 'exit gate', zh: '出口闸机' }, { en: 'parking ticket', zh: '停车票' }], alternativeExpressions: [{ textEn: 'Pay when you drive out — stick your ticket in at the gate. Card or cash. Five days at $8 is $40 total.', textZh: '开出去的时候付——在闸机那里插票。卡或现金。五天8块一天共40块。', actionHint: '简单说明', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-motorcycle-rental',
    category: 'transport',
    titleZh: '租摩托车',
    titleEn: 'Renting a Motorcycle',
    description: '在旅游地租摩托车、了解保险和安全须知',
    otherRole: '租赁店员',
    otherRoleIcon: '🏍️',
    flows: [
      {
        id: 'basic',
        titleZh: '咨询和租车',
        titleEn: 'Inquiring & Renting',
        description: '咨询可租车型、价格和基本要求',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'d like to rent a motorcycle for the weekend. What do you have available?', textZh: '你好，我想租一辆摩托车过周末。有什么可选的？', casualVersion: 'Hey, got any bikes available for the weekend?' },
          { speaker: 'them', role: '店员', textEn: 'We have a few options! For cruisers, there\'s a Harley Sportster at $150 a day. For something sportier, we\'ve got a Kawasaki Ninja at $120 a day.', textZh: '我们有几种选择！巡航车的话有哈雷 Sportster，每天150美元。运动型的话有川崎 Ninja，每天120美元。', keyPhrases: [{ en: 'cruiser', zh: '巡航车' }, { en: 'sportier', zh: '更运动型的' }], alternativeExpressions: [{ textEn: 'Sure thing! Harleys start at $150 a day, or if you want something lighter and faster, the Ninja is $120. What\'s your vibe?', textZh: '没问题！哈雷起步150一天，如果想要轻便快速的，Ninja 120。你喜欢哪种风格？', actionHint: '询问偏好', frequency: 'common' }] },
          { speaker: 'you', textEn: 'The Harley sounds fun. Do I need a special license to ride it?', textZh: '哈雷听起来不错。需要特别的驾照吗？', culturalNote: 'In the US, you need a motorcycle endorsement on your driver\'s license or a separate motorcycle license to legally ride.' },
          { speaker: 'them', role: '店员', textEn: 'Yes, you\'ll need a valid motorcycle endorsement on your license. If you have an international driving permit with a motorcycle class, that works too.', textZh: '是的，你的驾照上需要有摩托车认证。如果你有国际驾照带摩托车等级，那也行。', keyPhrases: [{ en: 'motorcycle endorsement', zh: '摩托车认证/摩托车驾照' }, { en: 'international driving permit', zh: '国际驾照' }], alternativeExpressions: [{ textEn: 'You\'ll need a motorcycle license or endorsement. Got an international permit? As long as it covers motorcycles, we\'re good.', textZh: '需要摩托车驾照或认证。有国际驾照吗？只要包含摩托车类别就行。', actionHint: '确认资质', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, I have my motorcycle license. What does the rental include?', textZh: '有的，我有摩托车驾照。租金包含什么？' },
          { speaker: 'them', role: '店员', textEn: 'It includes the bike, a helmet, and basic liability insurance. We recommend adding collision coverage for an extra $25 a day — it covers any damage to the bike.', textZh: '包括摩托车、头盔和基本责任险。我们建议加碰撞险，每天多25美元——涵盖对车的任何损坏。', keyPhrases: [{ en: 'helmet', zh: '头盔' }, { en: 'collision coverage', zh: '碰撞险' }], alternativeExpressions: [{ textEn: 'You get the bike, a helmet, and basic insurance. I\'d really recommend the collision add-on for $25 a day — if you drop the bike, you\'re covered.', textZh: '你会得到车、头盔和基本保险。我真心建议加碰撞险25块一天——如果摔车了你就不用担心。', actionHint: '强调保险重要性', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '安全须知和还车',
        titleEn: 'Safety & Return',
        description: '了解骑行安全规则和还车流程',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Are there any roads I should avoid around here? I\'m not familiar with the area.', textZh: '这附近有什么路需要避开的吗？我不熟悉这个区域。', casualVersion: 'Any roads I should stay off? I don\'t know the area.' },
          { speaker: 'them', role: '店员', textEn: 'Stay off the highway during rush hour — it gets crazy. I\'d recommend the coastal road for a scenic ride. I\'ll mark it on a map for you.', textZh: '高峰期别上高速——太疯狂了。推荐走海岸公路，风景很好。我在地图上帮你标出来。', keyPhrases: [{ en: 'rush hour', zh: '高峰期' }, { en: 'scenic ride', zh: '风景骑行' }], alternativeExpressions: [{ textEn: 'Avoid the interstate during peak hours — total madness. Take the coast road instead, it\'s gorgeous. Let me draw you a route.', textZh: '高峰时段别走州际公路——太疯狂了。走海岸路，特别漂亮。我给你画个路线。', actionHint: '热心推荐路线', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That\'s really helpful. What time do I need to return the bike on Sunday?', textZh: '太有帮助了。周日几点还车？' },
          { speaker: 'them', role: '店员', textEn: 'We close at 6 PM on Sundays. Please return it with a full tank of gas. If you\'re late, there\'s a $50 late fee per hour.', textZh: '周日我们6点关门。请加满油再还。如果迟了，每小时收50美元滞纳金。', keyPhrases: [{ en: 'full tank', zh: '满油' }, { en: 'late fee', zh: '滞纳金' }], alternativeExpressions: [{ textEn: 'Back by 6 PM Sunday. Fill up the tank before you return it. Late returns are $50 an hour, so don\'t be late!', textZh: '周日下午6点之前还。还之前把油加满。迟还每小时50块，别迟到哦！', actionHint: '提醒规则', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Got it. And if something goes wrong on the road, who do I call?', textZh: '明白了。如果路上出了问题，打给谁？', casualVersion: 'What if something goes wrong out there? Who do I call?' },
          { speaker: 'them', role: '店员', textEn: 'Call our 24-hour hotline — the number is on your rental agreement. We\'ll send someone out to help or arrange a tow. Stay safe out there!', textZh: '打我们的24小时热线——号码在你的租赁合同上。我们会派人去帮忙或安排拖车。注意安全！', keyPhrases: [{ en: '24-hour hotline', zh: '24小时热线' }, { en: 'arrange a tow', zh: '安排拖车' }], alternativeExpressions: [{ textEn: 'There\'s a 24/7 number on your paperwork. If anything happens, call us and we\'ll get you sorted — tow, pickup, whatever you need.', textZh: '你的文件上有一个全天候号码。出了任何事打电话给我们，我们帮你搞定——拖车、接人，随便你需要什么。', actionHint: '确保安心', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-moving-truck',
    category: 'transport',
    titleZh: '租搬家卡车',
    titleEn: 'Renting a Moving Truck',
    description: '租 U-Haul 等搬家卡车、了解费用和还车规则',
    otherRole: '租赁店员',
    otherRoleIcon: '🚚',
    flows: [
      {
        id: 'basic',
        titleZh: '咨询和租车',
        titleEn: 'Inquiring & Renting',
        description: '了解卡车大小、价格和租赁流程',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'m moving to a new apartment this weekend. What size truck do I need for a one-bedroom?', textZh: '你好，我这周末搬新公寓。一居室需要多大的卡车？', casualVersion: 'Hey, moving this weekend. What size truck for a one-bedroom?' },
          { speaker: 'them', role: '店员', textEn: 'For a one-bedroom, I\'d recommend our 10-foot truck. It fits a bedroom set, a small living room, and about 20 boxes. That runs $29.95 plus mileage.', textZh: '一居室的话，我推荐10英尺的卡车。能装一套卧室家具、一个小客厅的东西和大约20个箱子。费用是29.95美元加里程费。', keyPhrases: [{ en: '10-foot truck', zh: '10英尺卡车' }, { en: 'plus mileage', zh: '加里程费' }], alternativeExpressions: [{ textEn: 'A 10-footer should do it for a one-bedroom — fits your furniture and about 20 boxes. It\'s $29.95 for the day plus 69 cents a mile.', textZh: '10英尺的就够一居室用了——能装你的家具和大约20个箱子。每天29.95加每英里69美分。', actionHint: '具体报价', frequency: 'common' }] },
          { speaker: 'you', textEn: 'How does the mileage charge work?', textZh: '里程费怎么算？', culturalNote: 'US moving truck rentals like U-Haul typically charge a flat rate per day plus a per-mile fee. Always estimate your trip distance beforehand.' },
          { speaker: 'them', role: '店员', textEn: 'It\'s 69 cents per mile. We\'ll note the mileage when you pick it up and when you return it. Most local moves are under 30 miles, so around $20 extra.', textZh: '每英里69美分。取车和还车时我们会记录里程。大多数本地搬家不超过30英里，所以额外大约20美元。', keyPhrases: [{ en: 'per mile', zh: '每英里' }, { en: 'note the mileage', zh: '记录里程' }], alternativeExpressions: [{ textEn: 'Sixty-nine cents a mile. We check the odometer at pickup and dropoff. For a local move, you\'re probably looking at 20 bucks in mileage.', textZh: '每英里69美分。取车和还车时看里程表。本地搬家的话里程费大概20块。', actionHint: '估算费用', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That sounds reasonable. Do you have one available for Saturday morning?', textZh: '听起来还行。周六上午有车吗？' },
          { speaker: 'them', role: '店员', textEn: 'Let me check... yes, we have a 10-footer available at 8 AM on Saturday. I\'d recommend returning it the same day to avoid a second-day charge.', textZh: '我查一下……有的，周六早上8点有一辆10英尺的。建议当天还车，避免第二天的费用。', keyPhrases: [{ en: 'available at 8 AM', zh: '早上8点有车' }, { en: 'second-day charge', zh: '第二天的费用' }], alternativeExpressions: [{ textEn: 'Yep, got one for Saturday at 8 AM. Try to get it back the same day — otherwise it\'s another $29.95 for the extra day.', textZh: '有，周六早上8点。尽量当天还——不然多一天又是29.95。', actionHint: '提醒还车', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '搬家用品和还车',
        titleEn: 'Supplies & Return',
        description: '购买搬家用品、了解还车流程',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Do you sell moving supplies too? I need boxes and packing tape.', textZh: '你们也卖搬家用品吗？我需要箱子和打包胶带。', casualVersion: 'Got boxes and tape here too?' },
          { speaker: 'them', role: '店员', textEn: 'We sure do! We have small, medium, and large boxes. A moving kit with 10 boxes, tape, and bubble wrap is $39.99 — most people go with that.', textZh: '当然有！我们有小、中、大箱子。搬家套装包含10个箱子、胶带和气泡膜，39.99美元——大多数人选这个。', keyPhrases: [{ en: 'moving kit', zh: '搬家套装' }, { en: 'bubble wrap', zh: '气泡膜' }], alternativeExpressions: [{ textEn: 'Absolutely. We\'ve got a move kit — 10 boxes, tape, and bubble wrap for $39.99. It\'s the most popular option.', textZh: '当然。我们有搬家套装——10个箱子、胶带和气泡膜39.99。最受欢迎的选择。', actionHint: '推荐套装', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'ll take the kit. Now, when I return the truck, does it need to be full of gas?', textZh: '我要一个套装。还车的时候需要加满油吗？' },
          { speaker: 'them', role: '店员', textEn: 'Yes, please return it with the same fuel level as when you picked it up. If it\'s low, we charge $4.50 a gallon to refuel — way more than the pump price.', textZh: '是的，请还车时油量和取车时一样。如果油少了，我们按每加仑4.50美元补油——比加油站贵多了。', keyPhrases: [{ en: 'fuel level', zh: '油量' }, { en: 'pump price', zh: '加油站价格' }], alternativeExpressions: [{ textEn: 'Return it with the same gas level, otherwise we\'ll fill it up at $4.50 a gallon — trust me, you\'ll save money doing it yourself.', textZh: '还车时油量保持不变，不然我们按4.50一加仑补油——相信我，自己加划算多了。', actionHint: '警告高价补油', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Good to know. Can I drop it off after hours if I\'m running late?', textZh: '好的知道了。如果我来不及，能下班后还车吗？', casualVersion: 'Can I drop it off late if I don\'t make it in time?' },
          { speaker: 'them', role: '店员', textEn: 'Yes, we have an after-hours drop-off. Just park it in the marked area, lock it, and drop the keys in the drop box by the front door. We\'ll finalize the charges the next morning.', textZh: '可以，我们有下班后还车服务。把车停在标记区域，锁好，把钥匙投进前门旁的投递箱。我们第二天早上结算。', keyPhrases: [{ en: 'after-hours drop-off', zh: '下班后还车' }, { en: 'drop box', zh: '投递箱' }], alternativeExpressions: [{ textEn: 'Sure — park it in the designated spot, lock up, and pop the keys in the lockbox out front. We\'ll settle everything in the morning.', textZh: '没问题——停在指定位置，锁好车，把钥匙放进门口的锁箱。我们早上结算。', actionHint: '解释流程', frequency: 'common' }] },
        ],
      },
    ],
  },
  // ==================== 车辆手续 ====================
  {
    id: 'transport-car-title-transfer',
    category: 'transport',
    titleZh: '车辆过户',
    titleEn: 'Car Title Transfer',
    description: '在 DMV 办理车辆过户手续',
    otherRole: 'DMV 工作人员',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '过户流程',
        titleEn: 'Transfer Process',
        description: '了解并完成车辆产权过户',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I just bought a used car and I need to transfer the title to my name.', textZh: '你好，我刚买了一辆二手车，需要过户到我名下。', casualVersion: 'Hey, I need to get a car title put in my name.' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Sure. Did the seller sign the title over to you? I\'ll also need a bill of sale and your photo ID.', textZh: '好的。卖家把产权签给你了吗？我还需要买卖合同和你的带照片的身份证件。', keyPhrases: [{ en: 'sign the title over', zh: '签转产权' }, { en: 'bill of sale', zh: '买卖合同' }], alternativeExpressions: [{ textEn: 'OK. Bring me the signed title from the seller, a bill of sale, and your ID. Let me take a look.', textZh: '好的。把卖家签过的产权证、买卖合同和你的身份证给我看看。', actionHint: '列出所需文件', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, I have everything here. How much is the transfer fee?', textZh: '有的，都带了。过户费多少钱？' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'The title transfer fee is $15. You\'ll also need to pay the registration fee, which depends on the vehicle — usually between $75 and $200.', textZh: '产权过户费15美元。你还需要付注册费，根据车辆不同——通常在75到200美元之间。', keyPhrases: [{ en: 'transfer fee', zh: '过户费' }, { en: 'registration fee', zh: '注册费' }], alternativeExpressions: [{ textEn: 'It\'s $15 for the title. Registration varies by vehicle — figure somewhere between $75 and $200 on top of that.', textZh: '产权15块。注册费因车而异——额外大概75到200之间。', actionHint: '说明费用构成', frequency: 'common' }] },
          { speaker: 'you', textEn: 'OK, that\'s fine. How long does the whole process take?', textZh: '好的，没问题。整个过程需要多久？' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Once your paperwork is processed, you\'ll get a temporary registration today. Your new title and plates will arrive by mail in two to four weeks.', textZh: '文件处理完后，今天就能拿到临时注册。新产权证和车牌会在两到四周内寄到。', keyPhrases: [{ en: 'temporary registration', zh: '临时注册' }, { en: 'arrive by mail', zh: '邮寄到达' }], alternativeExpressions: [{ textEn: 'You\'ll walk out with a temp tag today. The permanent title and plates come in the mail — give it two to four weeks.', textZh: '你今天就能带着临时标签走。正式产权和车牌邮寄来——大概两到四周。', actionHint: '说明时间线', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '处理过户问题',
        titleEn: 'Handling Title Issues',
        description: '处理产权上的问题或缺失文件',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'There\'s a problem — the seller forgot to sign one of the lines on the title. Can I still transfer it?', textZh: '有个问题——卖家忘了在产权证上签一个地方。还能过户吗？', casualVersion: 'The seller missed a signature on the title. Can we still do this?' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Unfortunately, no. The title needs to be properly signed by the seller. You\'ll need to get them to sign it and come back, or they can come in with you.', textZh: '很遗憾不行。产权证需要卖家正确签名。你需要让他们签好再来，或者他们跟你一起来。', keyPhrases: [{ en: 'properly signed', zh: '正确签名' }, { en: 'come back', zh: '再来一趟' }], alternativeExpressions: [{ textEn: 'Sorry, we can\'t process it without a complete signature. Have the seller sign it and bring it back, or bring them along next time.', textZh: '抱歉，签名不完整我们无法处理。让卖家签好再拿来，或者下次带他们来。', actionHint: '解释要求', frequency: 'common' }] },
          { speaker: 'you', textEn: 'What if the seller lives in another state? Can they mail the signed title?', textZh: '如果卖家在另一个州呢？他们能把签好的产权证寄过来吗？' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'Yes, they can mail you the signed title. Just make sure they use a secure method like certified mail. Don\'t bring a photocopy — we need the original.', textZh: '可以，他们可以把签好的产权证寄给你。确保用安全的方式比如挂号信。别拿复印件——我们需要原件。', keyPhrases: [{ en: 'certified mail', zh: '挂号信' }, { en: 'original', zh: '原件' }], alternativeExpressions: [{ textEn: 'Sure, they can send it by mail. Use certified or priority mail to be safe. And it has to be the original — no copies.', textZh: '可以，他们可以寄过来。用挂号信或优先邮件比较保险。必须是原件——复印件不行。', actionHint: '强调原件重要性', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Got it. I also noticed there\'s a lien on the title. What does that mean?', textZh: '明白了。我还注意到产权上有留置权。这是什么意思？', casualVersion: 'There\'s a lien on the title. What\'s that about?' },
          { speaker: 'them', role: 'DMV 工作人员', textEn: 'A lien means the seller still owes money on the car. The lien holder — usually a bank — has to release it before we can transfer the title. The seller needs to get a lien release letter.', textZh: '留置权意味着卖家还欠着车的贷款。留置权持有者——通常是银行——必须先解除留置权我们才能过户。卖家需要拿到一封留置权解除信。', keyPhrases: [{ en: 'lien', zh: '留置权' }, { en: 'lien release letter', zh: '留置权解除信' }], alternativeExpressions: [{ textEn: 'That means there\'s still a loan on the vehicle. The bank needs to release the lien first. Tell the seller to get a release letter from their lender before you can proceed.', textZh: '意思是车上还有贷款。银行需要先解除留置权。告诉卖家从他们的贷方拿到解除信才能继续。', actionHint: '详细解释', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-emissions-test',
    category: 'transport',
    titleZh: '车辆尾气检测',
    titleEn: 'Emissions Test',
    description: '带车去做尾气排放检测',
    otherRole: '检测站技师',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '做尾气检测',
        titleEn: 'Getting an Emissions Test',
        description: '到检测站做年度尾气检测',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I need to get my car\'s emissions tested. Is this the right place?', textZh: '你好，我需要做汽车尾气检测。是这里吗？', casualVersion: 'Hey, I need an emissions test. Is this where I do it?' },
          { speaker: 'them', role: '技师', textEn: 'You\'re at the right place! Do you have your vehicle registration? I\'ll also need to see your ID.', textZh: '来对了！你有车辆注册证吗？我还需要看一下你的身份证。', keyPhrases: [{ en: 'vehicle registration', zh: '车辆注册证' }, { en: 'ID', zh: '身份证件' }], alternativeExpressions: [{ textEn: 'Yep, you\'re in the right spot! Just need your registration and ID and we\'ll get you started.', textZh: '对，来对地方了！只需要你的注册证和身份证就能开始。', actionHint: '确认并开始', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Here you go. How long does the test take?', textZh: '给你。检测要多久？' },
          { speaker: 'them', role: '技师', textEn: 'Usually about 15 to 20 minutes. We just hook up the diagnostic tool and check the tailpipe readings. You can wait right here.', textZh: '通常15到20分钟。我们接上诊断工具然后检查排气管读数。你可以在这里等。', keyPhrases: [{ en: 'diagnostic tool', zh: '诊断工具' }, { en: 'tailpipe readings', zh: '排气管读数' }], alternativeExpressions: [{ textEn: 'About 15 to 20 minutes. We plug in the scanner and check your exhaust. Just hang tight over there.', textZh: '大概15到20分钟。我们插上扫描仪检查排气。就在那边等一下。', actionHint: '简单说明', frequency: 'common' }] },
          { speaker: 'you', textEn: 'What happens if my car doesn\'t pass?', textZh: '如果我的车没通过怎么办？', culturalNote: 'Many US states require annual emissions inspections for vehicle registration renewal. Failing the test means you need repairs before you can renew.' },
          { speaker: 'them', role: '技师', textEn: 'If it fails, we\'ll give you a report showing what needs to be fixed. You\'ll have 30 days to get the repairs done and come back for a free retest.', textZh: '如果没通过，我们会给你一份报告显示需要修什么。你有30天时间修好然后回来免费复检。', keyPhrases: [{ en: 'retest', zh: '复检' }, { en: '30 days', zh: '30天' }], alternativeExpressions: [{ textEn: 'You\'ll get a failure report listing the issues. Fix them within 30 days and the retest is on us — no charge.', textZh: '你会拿到一份不合格报告列出问题。30天内修好复检免费。', actionHint: '解释后续流程', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '处理检测不合格',
        titleEn: 'Handling a Failed Test',
        description: '车辆尾气检测不合格后的应对',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'So my car failed the emissions test. Can you tell me what\'s wrong?', textZh: '我的车尾气检测没通过。能告诉我哪里有问题吗？', casualVersion: 'My car failed. What\'s the problem?' },
          { speaker: 'them', role: '技师', textEn: 'Your catalytic converter is running below efficiency. That\'s causing higher emissions. It might just need cleaning, or it might need to be replaced.', textZh: '你的催化转化器效率不够。导致排放偏高。可能只需要清洗，也可能需要更换。', keyPhrases: [{ en: 'catalytic converter', zh: '催化转化器' }, { en: 'running below efficiency', zh: '效率不够' }], alternativeExpressions: [{ textEn: 'It\'s your catalytic converter — it\'s not working as well as it should. Could be a cleaning job or a full replacement.', textZh: '是催化转化器的问题——没有发挥应有的效率。可能清洗一下就行，也可能要整个换。', actionHint: '诊断问题', frequency: 'common' }] },
          { speaker: 'you', textEn: 'How much would a replacement cost? Is it expensive?', textZh: '换一个要多少钱？贵吗？' },
          { speaker: 'them', role: '技师', textEn: 'A new catalytic converter can run anywhere from $300 to $1,500 depending on your car model. But check with your mechanic first — sometimes it\'s a simpler fix like an oxygen sensor.', textZh: '新的催化转化器根据车型大概300到1,500美元不等。但先跟你的修车师傅确认——有时候是更简单的问题比如氧传感器。', keyPhrases: [{ en: 'oxygen sensor', zh: '氧传感器' }, { en: 'run anywhere from', zh: '价格在...范围' }], alternativeExpressions: [{ textEn: 'Could be $300 to $1,500 for the converter itself. But have your mechanic take a look — it might just be a bad O2 sensor, which is way cheaper.', textZh: '转化器本身可能300到1,500。但让你的师傅看看——可能只是氧传感器坏了，便宜多了。', actionHint: '建议先诊断', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Thanks for the advice. Can I still drive the car in the meantime?', textZh: '谢谢建议。这期间我还能开车吗？' },
          { speaker: 'them', role: '技师', textEn: 'Yes, you can still drive it — it\'s safe. But you won\'t be able to renew your registration until it passes. You\'ve got 30 days, so don\'t wait too long.', textZh: '可以，还能开——是安全的。但你不能续车辆注册直到通过检测。你有30天时间，别拖太久。', keyPhrases: [{ en: 'renew your registration', zh: '续注册' }, { en: 'don\'t wait too long', zh: '别拖太久' }], alternativeExpressions: [{ textEn: 'It\'s totally fine to drive. You just can\'t register it until the emissions pass. Thirty days goes fast, so get on it soon.', textZh: '开是完全没问题。就是不能注册直到排放通过。30天过得很快，尽快处理。', actionHint: '提醒时限', frequency: 'common' }] },
        ],
      },
    ],
  },
  // ==================== 路边服务 ====================
  {
    id: 'transport-roadside-assist',
    category: 'transport',
    titleZh: '道路救援',
    titleEn: 'Roadside Assistance',
    description: '车辆抛锚时呼叫道路救援服务',
    otherRole: '救援调度员',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '呼叫救援',
        titleEn: 'Calling for Help',
        description: '车辆抛锚后打电话叫道路救援',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, my car broke down on the highway and I need help. I\'m on Interstate 95 near Exit 12.', textZh: '你好，我的车在高速公路上抛锚了，需要帮助。我在95号州际公路12号出口附近。', casualVersion: 'Hey, my car just died on I-95 near Exit 12. I need help.' },
          { speaker: 'them', role: '调度员', textEn: 'I\'m sorry to hear that. Are you in a safe location? Please tell me — is the car on the shoulder or blocking a lane?', textZh: '很抱歉听到这个。你在安全的地方吗？请告诉我——车在路肩上还是挡着车道？', keyPhrases: [{ en: 'safe location', zh: '安全的地方' }, { en: 'on the shoulder', zh: '在路肩上' }], alternativeExpressions: [{ textEn: 'OK, stay calm. Are you off the road? Is your car on the shoulder or still in traffic?', textZh: '好的，别着急。你离开车道了吗？车在路肩上还是还在车流中？', actionHint: '确认安全', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, I managed to pull over to the shoulder. My hazard lights are on.', textZh: '是的，我把车开到了路肩上。双闪灯开着。', culturalNote: 'In the US, always turn on hazard lights and stay in your car or stand well behind the guardrail when broken down on a highway.' },
          { speaker: 'them', role: '调度员', textEn: 'Good, stay in your vehicle with your seatbelt on. Can you describe what happened? Did the engine just stop, or did you hear anything unusual?', textZh: '好的，待在车里系好安全带。能描述一下发生了什么吗？发动机突然停了，还是听到了什么异常声音？', keyPhrases: [{ en: 'stay in your vehicle', zh: '待在车里' }, { en: 'anything unusual', zh: '异常情况' }], alternativeExpressions: [{ textEn: 'Perfect, just stay put with your belt on. What happened exactly — did the engine cut out, or was there a weird noise?', textZh: '好的，就待在那里系好安全带。具体怎么回事——发动机熄火了，还是有奇怪的声音？', actionHint: '询问详情', frequency: 'common' }] },
          { speaker: 'you', textEn: 'The engine overheated. I saw the temperature gauge go all the way up and then steam started coming from under the hood.', textZh: '发动机过热了。我看到温度表一直往上升，然后引擎盖下面开始冒烟。' },
          { speaker: 'them', role: '调度员', textEn: 'Do not open the hood — it could burn you. I\'m dispatching a tow truck to your location. It should be there in about 25 minutes. Stay safe.', textZh: '不要打开引擎盖——可能会烫伤你。我正在派拖车去你的位置。大约25分钟到。注意安全。', keyPhrases: [{ en: 'dispatching a tow truck', zh: '派拖车' }, { en: 'do not open the hood', zh: '不要打开引擎盖' }], alternativeExpressions: [{ textEn: 'Don\'t touch the hood — way too hot. I\'ve got a tow truck headed your way, ETA about 25 minutes. Hang tight.', textZh: '别碰引擎盖——太烫了。拖车已经在去你那里的路上了，预计25分钟到。坚持一下。', actionHint: '紧急指导', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '与救援人员沟通',
        titleEn: 'Working with the Tow Driver',
        description: '与拖车司机沟通、决定修理方案',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Thanks for getting here so fast. Can you tell what\'s wrong with my car?', textZh: '谢谢这么快就来了。能看出我的车哪里有问题吗？', casualVersion: 'Thanks for coming quick. Any idea what\'s wrong?' },
          { speaker: 'them', role: '拖车司机', textEn: 'Looks like your coolant system failed — I can see the leak underneath. This isn\'t something I can fix here. We\'ll need to tow it to a shop.', textZh: '看起来你的冷却系统坏了——我能看到下面在漏液。这不是我能在这里修的。需要拖到修车店。', keyPhrases: [{ en: 'coolant system', zh: '冷却系统' }, { en: 'tow it to a shop', zh: '拖到修车店' }], alternativeExpressions: [{ textEn: 'Your coolant\'s leaking — see it pooling under there? Can\'t fix this roadside. We need to get it to a garage.', textZh: '你的冷却液漏了——看到下面那一滩吗？路边没法修。得拖到修车厂。', actionHint: '诊断并说明', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Is there a good repair shop nearby that you\'d recommend?', textZh: '附近有你推荐的好修车店吗？' },
          { speaker: 'them', role: '拖车司机', textEn: 'There\'s a great shop about five miles from here — they\'re honest and reasonably priced. I tow cars there all the time. Want me to take it there?', textZh: '这里大约五英里有一家很好的店——他们很诚实价格也合理。我经常拖车去那里。要我拖过去吗？', keyPhrases: [{ en: 'reasonably priced', zh: '价格合理' }, { en: 'honest', zh: '诚实/靠谱' }], alternativeExpressions: [{ textEn: 'I know a solid shop about five miles out — good guys, fair prices. I bring cars there all the time. Sound good?', textZh: '我知道五英里外有家靠谱的店——人好，价格公道。我一直拖车去那儿。行吗？', actionHint: '热心推荐', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yes, please. And can you give me a ride there too? I don\'t have another way to get around.', textZh: '好的，拜托了。你能顺便带我过去吗？我没有别的办法出行。', casualVersion: 'Yeah, take it there. Can I ride with you? I\'m stuck.' },
          { speaker: 'them', role: '拖车司机', textEn: 'Of course, hop in the truck. I\'ll have you and your car there in about 15 minutes. You can sit in the shop\'s waiting area while they look at it.', textZh: '当然，上拖车。大约15分钟我就把你和你的车送到。他们检查的时候你可以在店里的等候区坐着。', keyPhrases: [{ en: 'hop in', zh: '上车' }, { en: 'waiting area', zh: '等候区' }], alternativeExpressions: [{ textEn: 'Sure, climb on in. We\'ll be there in 15. They\'ve got a nice waiting room with coffee — you\'ll be comfortable.', textZh: '没问题，上来吧。15分钟到。他们有个不错的等候室有咖啡——你会很舒服。', actionHint: '友好安排', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-carpool-arrange',
    category: 'transport',
    titleZh: '安排拼车',
    titleEn: 'Arranging a Carpool',
    description: '和同事或邻居安排日常拼车通勤',
    otherRole: '拼车伙伴',
    otherRoleIcon: '🚗',
    flows: [
      {
        id: 'basic',
        titleZh: '提议拼车',
        titleEn: 'Proposing a Carpool',
        description: '向同事提议一起拼车上班',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hey, I noticed we live pretty close to each other. Have you ever thought about carpooling to work?', textZh: '嘿，我发现我们住得挺近的。你想过一起拼车上班吗？', casualVersion: 'Hey, we\'re basically neighbors. Wanna carpool?' },
          { speaker: 'them', role: '同事', textEn: 'Actually, I\'ve been thinking about that! Gas prices are getting crazy. How would it work — would we take turns driving?', textZh: '其实我一直在想这个！油价太疯狂了。怎么安排呢——我们轮流开吗？', keyPhrases: [{ en: 'take turns driving', zh: '轮流开车' }, { en: 'gas prices', zh: '油价' }], alternativeExpressions: [{ textEn: 'I was literally just thinking the same thing! Gas is ridiculous right now. So would we alternate who drives?', textZh: '我正想这个事呢！油价太离谱了。那我们交替开车吗？', actionHint: '积极回应', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Yeah, we could alternate weeks. I drive one week, you drive the next. That way we both save on gas and tolls.', textZh: '对，我们可以每周轮换。我开一周，你开一周。这样我们都能省油费和过路费。', casualVersion: 'Let\'s switch off each week. Save on gas and tolls.' },
          { speaker: 'them', role: '同事', textEn: 'That sounds fair. What time would we need to leave in the morning? I usually head out around 7:30.', textZh: '听起来很公平。早上几点出发呢？我通常7:30左右出门。', keyPhrases: [{ en: 'head out', zh: '出发' }, { en: 'sounds fair', zh: '听起来很公平' }], alternativeExpressions: [{ textEn: 'Works for me. What time should we leave? I\'m usually out the door by 7:30.', textZh: '我没问题。几点走？我通常7:30出门。', actionHint: '确认时间', frequency: 'common' }] },
          { speaker: 'you', textEn: '7:30 works perfectly for me too. Should we also carpool home after work?', textZh: '7:30对我也完全合适。下班后也一起回来吗？' },
          { speaker: 'them', role: '同事', textEn: 'Most days, sure! But some days I might stay late. How about we text each other by 4 PM to confirm the ride home?', textZh: '大部分时间可以！但有些天我可能加班。我们下午4点之前互发短信确认回程怎么样？', keyPhrases: [{ en: 'stay late', zh: '加班/晚走' }, { en: 'confirm the ride', zh: '确认搭车' }], alternativeExpressions: [{ textEn: 'Usually yes, but I sometimes work late. Let\'s just shoot each other a text by 4 to see if we\'re both leaving at the same time.', textZh: '一般可以，但我有时加班。下午4点前发个短信看看是不是同时走。', actionHint: '灵活安排', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '处理拼车细节',
        titleEn: 'Working Out Details',
        description: '讨论费用分摊、迟到规则等细节',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'So about splitting costs — should we just split gas 50/50, or use a more detailed system?', textZh: '关于费用分摊——我们直接对半分油费，还是用更详细的方式？', casualVersion: 'How should we split gas? Just go halfsies?' },
          { speaker: 'them', role: '同事', textEn: 'Since we\'re alternating weeks, I think it\'s easiest if each driver just covers their own gas that week. It should even out over time.', textZh: '既然我们每周轮换，我觉得最简单的方式就是每周谁开车谁出油钱。时间长了就差不多了。', keyPhrases: [{ en: 'even out', zh: '持平/扯平' }, { en: 'covers their own gas', zh: '各自出油钱' }], alternativeExpressions: [{ textEn: 'Let\'s keep it simple — whoever\'s driving that week pays for gas. Over a month or two, it\'ll balance out.', textZh: '简单点——那周谁开车谁付油钱。一两个月下来就平了。', actionHint: '简化方案', frequency: 'common' }] },
          { speaker: 'you', textEn: 'That\'s easy. What if one of us is running late in the morning? How long should the other wait?', textZh: '那就简单了。如果早上有人迟了怎么办？另一个人等多久？' },
          { speaker: 'them', role: '同事', textEn: 'How about a five-minute grace period? If someone\'s going to be more than five minutes late, just send a text and the other person can go ahead.', textZh: '五分钟宽限期怎么样？如果要迟到超过五分钟，发个短信，另一个人就自己走。', keyPhrases: [{ en: 'grace period', zh: '宽限期' }, { en: 'go ahead', zh: '先走' }], alternativeExpressions: [{ textEn: 'Five minutes max. If you\'re running behind, shoot me a text and I\'ll just head out on my own.', textZh: '最多五分钟。如果你要迟了，给我发个短信我就自己走。', actionHint: '设定规则', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Sounds good. And we should probably use the carpool lane too — that\'ll save us even more time.', textZh: '听起来不错。我们也应该走拼车专用道——能省更多时间。', culturalNote: 'HOV (High Occupancy Vehicle) lanes on US highways require at least 2 passengers. Carpooling qualifies, and can significantly reduce commute time.' },
          { speaker: 'them', role: '同事', textEn: 'Definitely! The HOV lane cuts at least 20 minutes off the commute during rush hour. This is going to be a win-win for both of us.', textZh: '当然！HOV 车道在高峰期能省至少20分钟通勤时间。这对我们两个都是双赢。', keyPhrases: [{ en: 'HOV lane', zh: 'HOV 拼车专用道' }, { en: 'win-win', zh: '双赢' }], alternativeExpressions: [{ textEn: 'For sure! The carpool lane saves like 20 minutes in rush hour. This is gonna be awesome for both of us.', textZh: '肯定！拼车道高峰期能省20分钟左右。对我们俩来说太棒了。', actionHint: '积极展望', frequency: 'common' }] },
        ],
      },
    ],
  },
  {
    id: 'transport-gas-station-conv',
    category: 'transport',
    titleZh: '加油站对话',
    titleEn: 'Gas Station Conversation',
    description: '在加油站加油、使用便利店和处理支付',
    otherRole: '加油站收银员',
    otherRoleIcon: '⛽',
    flows: [
      {
        id: 'basic',
        titleZh: '加油和付款',
        titleEn: 'Pumping Gas & Paying',
        description: '在加油站加油、选择油品和支付',
        difficulty: 'basic',
        turns: [
          { speaker: 'you', textEn: 'Hi, I\'d like to pay for gas at pump number 4.', textZh: '你好，我在4号泵加油，想付款。', casualVersion: 'Hey, pump 4 please.' },
          { speaker: 'them', role: '收银员', textEn: 'Sure. How much would you like? Full tank or a specific amount? And are you paying with cash or card?', textZh: '好的。要加多少？加满还是指定金额？用现金还是刷卡？', keyPhrases: [{ en: 'full tank', zh: '加满' }, { en: 'specific amount', zh: '指定金额' }], alternativeExpressions: [{ textEn: 'Pump 4, got it. Fill it up or a set amount? Cash or credit?', textZh: '4号泵，收到。加满还是定额？现金还是信用卡？', actionHint: '快速确认', frequency: 'common' }] },
          { speaker: 'you', textEn: 'I\'ll fill it up with regular. Paying with card.', textZh: '加满普通汽油。刷卡。', culturalNote: 'US gas stations offer three grades: Regular (87), Mid-Grade (89), and Premium (91-93). Most cars use Regular unless specified otherwise.' },
          { speaker: 'them', role: '收银员', textEn: 'You can swipe your card right at the pump. Just select Regular, insert the nozzle, and squeeze the handle. It\'ll stop automatically when it\'s full.', textZh: '你可以直接在油泵那里刷卡。选择普通汽油，插入油枪，按住手柄。加满了会自动停。', keyPhrases: [{ en: 'swipe your card', zh: '刷卡' }, { en: 'nozzle', zh: '油枪' }], alternativeExpressions: [{ textEn: 'Just pay at the pump with your card. Pick Regular, put the nozzle in, and squeeze. It cuts off when it\'s full.', textZh: '直接在油泵上刷卡。选普通，放进油枪，按住。满了自动断。', actionHint: '简洁指导', frequency: 'common' }] },
          { speaker: 'you', textEn: 'It says my card was declined at the pump. Can I pay inside instead?', textZh: '显示我的卡在油泵上被拒了。能在里面付吗？' },
          { speaker: 'them', role: '收银员', textEn: 'Sure, no problem. Some international cards don\'t work at the pump. I can run it here. How much do you want to prepay? I\'d say $60 to be safe.', textZh: '当然，没问题。有些国际卡在油泵上用不了。我这里可以刷。你想预付多少？我建议60美元比较保险。', keyPhrases: [{ en: 'card was declined', zh: '卡被拒了' }, { en: 'prepay', zh: '预付' }], alternativeExpressions: [{ textEn: 'No worries, happens a lot with foreign cards. Swipe it here — how much you want to put on it? Sixty bucks should cover a full tank.', textZh: '没关系，国外的卡经常这样。在这里刷——要放多少？60块应该够加满。', actionHint: '理解并帮助', frequency: 'common' }] },
        ],
      },
      {
        id: 'intermediate',
        titleZh: '便利店和求助',
        titleEn: 'Convenience Store & Help',
        description: '在加油站便利店购物或请求帮助',
        difficulty: 'intermediate',
        turns: [
          { speaker: 'you', textEn: 'Do you have a restroom I can use? And I need to grab a few things from the store.', textZh: '有洗手间可以用吗？我还想在店里买点东西。', casualVersion: 'Where\'s your restroom? And I need to grab some stuff.' },
          { speaker: 'them', role: '收银员', textEn: 'Restroom is in the back, to your left. Take your time shopping — we\'ve got snacks, drinks, and basic travel supplies.', textZh: '洗手间在后面，左手边。慢慢逛——我们有零食、饮料和基本旅行用品。', keyPhrases: [{ en: 'in the back', zh: '在后面' }, { en: 'travel supplies', zh: '旅行用品' }], alternativeExpressions: [{ textEn: 'Bathroom\'s all the way back on the left. Browse around — we\'ve got everything from snacks to phone chargers.', textZh: '厕所在最里面左边。随便逛——从零食到手机充电器什么都有。', actionHint: '指引并推荐', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Thanks. Also, my tire pressure light came on. Do you have an air pump?', textZh: '谢谢。另外，我的胎压灯亮了。你们有打气泵吗？' },
          { speaker: 'them', role: '收银员', textEn: 'Yeah, the air pump is on the side of the building. It\'s $1.50 for five minutes. Most cars need about 32 to 35 PSI — check the sticker inside your driver\'s door.', textZh: '有，打气泵在大楼侧面。五分钟1.50美元。大多数车需要32到35 PSI——看你驾驶门内的贴纸。', keyPhrases: [{ en: 'air pump', zh: '打气泵' }, { en: 'PSI', zh: 'PSI（胎压单位）' }], alternativeExpressions: [{ textEn: 'Air\'s on the right side of the building. Buck fifty for five minutes. Your tire pressure should be around 32 to 35 — there\'s a label on the driver\'s door jamb.', textZh: '打气在大楼右边。五分钟一块五。胎压应该在32到35之间——驾驶门框上有个标签。', actionHint: '详细指导', frequency: 'common' }] },
          { speaker: 'you', textEn: 'Great, thanks. One more thing — do you know if there\'s a good restaurant nearby? I\'m pretty hungry.', textZh: '太好了，谢谢。再问一下——附近有好的餐厅吗？我挺饿的。', casualVersion: 'One more thing — anywhere good to eat around here?' },
          { speaker: 'them', role: '收银员', textEn: 'There\'s a great diner about half a mile up the road on your right. Best burgers in town. Or if you\'re in a hurry, we\'ve got hot dogs and pizza slices ready to go.', textZh: '往前大约半英里右手边有一家很棒的小餐馆。全城最好的汉堡。或者你赶时间的话，我们这里有热狗和披萨片可以直接带走。', keyPhrases: [{ en: 'diner', zh: '小餐馆' }, { en: 'ready to go', zh: '可以直接带走' }], alternativeExpressions: [{ textEn: 'Half a mile up there\'s an awesome diner — killer burgers. Or grab a hot dog or pizza here if you\'re in a rush.', textZh: '往前半英里有家很棒的小餐馆——汉堡超赞。赶时间的话这里有热狗和披萨。', actionHint: '热情推荐', frequency: 'common' }] },
        ],
      },
    ],
  },
];
