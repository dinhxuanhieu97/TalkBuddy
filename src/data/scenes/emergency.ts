import type { PresetScene } from "../scene-types";

// ============================================================
// 紧急场景 — Emergency Scenes
// 覆盖：报警、大使馆求助、意外事故
// ============================================================

export const EMERGENCY_SCENES: PresetScene[] = [
  // ==================== 报警 ====================
  {
    id: "emergency-police",
    category: "emergency",
    titleZh: "报警",
    titleEn: "Calling Police",
    description: "在海外遇到偷窃、迷路等紧急情况，需要报警或向警察求助",
    otherRole: "警察",
    otherRoleIcon: "siren",
    flows: [
      // --- Flow 1: 被偷 ---
      {
        id: "theft",
        titleZh: "被偷",
        titleEn: "Reporting a Theft",
        description: "钱包或手机被偷，到警察局报案并获取报案记录",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need to report a theft. My wallet was stolen.",
            textZh: "打扰一下，我要报案。我的钱包被偷了。",
            culturalNote: "在美国报警打 911，英国打 999，欧洲通用 112。非紧急情况可以直接去警察局。",
            casualVersion: "Hey, I gotta report a theft. My wallet got swiped.",
            commonMistake: {
              wrong: "My wallet was stolen by someone.",
              correct: "My wallet was stolen.",
              explanation: "中文习惯说“被某人偷了”，英文里这种被动句通常不用加“by someone”",
            },
            formalityVariants: {
              casual: "Hey, gotta report a theft. My wallet got stolen.",
              standard: "Excuse me, I need to report a theft. My wallet was stolen.",
              formal: "Officer, I wish to report a theft. My wallet has been stolen.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I'm sorry to hear that. When and where did this happen?",
            textZh: "很遗憾。这是什么时候、在哪里发生的？",
            keyPhrases: [
              { en: "when and where", zh: "什么时候、在哪里" },
              { en: "did this happen", zh: "发生的" },
            ],
            responseTip: "尽量提供准确的时间和地点，越详细越好",
            alternativeExpressions: [
              {
                textEn: "Oh man, that's rough. Do you remember when it happened? Where were you at the time?",
                textZh: "哎，真倒霉。你还记得什么时候发生的吗？当时你在哪？",
                actionHint: "回忆时间和地点",
                frequency: "common",
              },
              {
                textEn: "That's terrible. I need to get some details from you — when did you first notice it was gone?",
                textZh: "太糟糕了。我需要了解一些细节——你什么时候发现丢的？",
                actionHint: "提供发现丢失的时间",
                frequency: "common",
              },
              {
                textEn: "Alright, let's get this sorted out. Walk me through what happened.",
                textZh: "好的，我们来处理。跟我说说经过。",
                actionHint: "详细叙述事情经过",
                frequency: "occasional",
              },
            ],
            casualVersion: "Aw, man, that sucks. When'd this go down? Where?",
            formalityVariants: {
              casual: "Man, that sucks. When'd it happen? Where?",
              standard: "I'm sorry to hear that. When and where did this happen?",
              formal:
                "I'm very sorry to hear that. Could you please specify the approximate time and location of the incident?",
            },
          },
          {
            speaker: "you",
            textEn:
              "It happened about an hour ago, on the subway. I think someone pickpocketed me on the train between Central and Park Street stations.",
            textZh: "大约一小时前，在地铁上。我觉得有人在 Central 站和 Park Street 站之间扒了我的钱包。",
            casualVersion:
              "Like, an hour ago, on the subway. Pretty sure I got pickpocketed on the train, between Central and Park Street.",
            commonMistake: {
              wrong: "I think someone stole my pocket.",
              correct: "I think someone pickpocketed me.",
              explanation: "“pickpocket” 是动词，指扒窃，不是“偷我的口袋”。",
            },
            formalityVariants: {
              casual:
                "Bout an hour ago, on the subway. Got pickpocketed on the train, between Central and Park Street.",
              standard:
                "It happened about an hour ago, on the subway. I think someone pickpocketed me on the train between Central and Park Street stations.",
              formal:
                "The incident occurred approximately one hour ago, on the subway system. I believe I was pickpocketed on the train, specifically between the Central and Park Street stations.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Can you describe what was in the wallet? Any credit cards, cash, or ID?",
            textZh: "能描述一下钱包里有什么吗？信用卡、现金还是证件？",
            keyPhrases: [
              { en: "describe", zh: "描述" },
              { en: "credit cards", zh: "信用卡" },
              { en: "cash", zh: "现金" },
              { en: "ID", zh: "证件" },
            ],
            responseTip: "列出丢失物品，特别是证件和银行卡——这些需要立即挂失",
            alternativeExpressions: [
              {
                textEn: "What all did you have in there? Cards, cash, any kind of ID?",
                textZh: "里面都有什么？卡、现金、什么证件？",
                actionHint: "列出丢失物品",
                frequency: "common",
              },
              {
                textEn: "I need to know exactly what was stolen. Walk me through everything that was in the wallet.",
                textZh: "我需要知道具体丢了什么。把钱包里的东西都说一遍。",
                actionHint: "逐一列出物品",
                frequency: "common",
              },
            ],
            casualVersion: "What was in your wallet? Cards, cash, ID?",
            formalityVariants: {
              casual: "What was in there? Cards, cash, ID?",
              standard: "Can you describe what was in the wallet? Any credit cards, cash, or ID?",
              formal:
                "Could you please provide a description of the contents of your wallet? Specifically, were there any credit cards, cash, or identification documents?",
            },
          },
          {
            speaker: "you",
            textEn:
              "There were two credit cards, about $200 in cash, and my driver's license. I've already called my bank to cancel the cards.",
            textZh: "里面有两张信用卡、大约 200 美元现金和我的驾照。我已经打电话给银行挂失了。",
            culturalNote: "发现被偷后第一步是打电话给银行挂失信用卡，防止被盗刷。",
            casualVersion:
              "Two credit cards, like 200 bucks cash, and my driver's license. Already called the bank to cancel the cards.",
            commonMistake: {
              wrong: "I have called my bank to cancel the cards.",
              correct: "I've already called my bank to cancel the cards.",
              explanation:
                "完成动作且结果对现在有影响，用现在完成时 I've called；如果强调动作已完成，用 I already called 也很自然。",
            },
            formalityVariants: {
              casual: "Two cards, 200 bucks, my license. Already called the bank.",
              standard:
                "There were two credit cards, about $200 in cash, and my driver's license. I've already called my bank to cancel the cards.",
              formal:
                "The contents included two credit cards, approximately $200 in cash, and my driver's license. I have already contacted my bank to report the theft and cancel the cards.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Good that you've already contacted your bank. I'll need your full name, passport number, and where you're staying. I'll file a police report for you.",
            textZh: "您已经联系了银行，这很好。我需要您的全名、护照号码和住址。我会为您开一份报案记录。",
            keyPhrases: [
              { en: "full name", zh: "全名" },
              { en: "passport number", zh: "护照号码" },
              { en: "police report", zh: "报案记录" },
              { en: "file", zh: "提交/开具" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Smart move calling the bank first. Okay, I'm gonna need some info — your full name, passport number, and your local address.",
                textZh: "先打银行电话是聪明的做法。好的，我需要一些信息——你的全名、护照号和本地住址。",
                actionHint: "准备好护照信息",
                frequency: "common",
              },
              {
                textEn: "Good thinking on the bank. Let me get your details so I can write up the report.",
                textZh: "先联系银行想得对。让我记下你的信息好写报告。",
                actionHint: "提供个人信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good you called your bank. Need your full name, passport number, and where you're staying. I'll get that report filed for ya.",
            commonMistake: {
              wrong: "I need your full name, passport number, and your hotel.",
              correct: "I'll need your full name, passport number, and where you're staying.",
              explanation: "“where you're staying” 更自然地表示住宿地点，不必说 “your hotel”。",
            },
            formalityVariants: {
              casual:
                "Good you called the bank. Just need your name, passport, and where you're staying. I'll file the report.",
              standard:
                "Good that you've already contacted your bank. I'll need your full name, passport number, and where you're staying. I'll file a police report for you.",
              formal:
                "It's excellent that you've already taken the initiative to contact your bank. I will require your full name, passport number, and your current accommodation details to officially file this police report.",
            },
          },
          {
            speaker: "you",
            textEn: "My name is Wang Wei. Here's my passport. I'm staying at the Hilton on 5th Avenue.",
            textZh: "我叫王伟。这是我的护照。我住在第五大道的希尔顿酒店。",
            casualVersion: "Wang Wei's the name. Here's my passport. Staying at the Hilton on 5th Ave.",
            commonMistake: {
              wrong: "I live in the Hilton on 5th Avenue.",
              correct: "I'm staying at the Hilton on 5th Avenue.",
              explanation: '住酒店用 "stay"，不是 "live"。 "live" 指长期居住。',
            },
            formalityVariants: {
              casual: "Wang Wei. Passport. Hilton, 5th Ave.",
              standard: "My name is Wang Wei. Here's my passport. I'm staying at the Hilton on 5th Avenue.",
              formal:
                "My name is Wang Wei. This is my passport. I am currently staying at the Hilton located on 5th Avenue.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Thank you. Here's your police report number. You'll need this for your insurance claim and if your embassy requires it. Keep this copy safe.",
            textZh: "谢谢。这是您的报案编号。您的保险理赔和大使馆可能会需要这个。请保管好这份副本。",
            keyPhrases: [
              { en: "police report number", zh: "报案编号" },
              { en: "insurance claim", zh: "保险理赔" },
              { en: "embassy", zh: "大使馆" },
              { en: "keep this copy safe", zh: "保管好这份副本" },
            ],
            responseTip: "一定要保存好报案编号，回国后保险理赔需要用到",
            alternativeExpressions: [
              {
                textEn:
                  "Here you go — this is your report number. Hang onto this, you'll need it for insurance and your embassy.",
                textZh: "给你——这是你的报案编号。留好，保险理赔和大使馆都要用。",
                actionHint: "保存好报案编号",
                frequency: "common",
              },
              {
                textEn:
                  "All done. Here's your case number. Make sure you keep a copy — your insurance company will ask for it.",
                textZh: "办好了。这是你的案件编号。一定保存好——保险公司会要的。",
                actionHint: "拍照留存编号",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks. Here's your report number. You'll need it for insurance and if your embassy asks. Keep it safe.",
            formalityVariants: {
              casual: "Thanks. Report number's here. For insurance, embassy. Keep it safe.",
              standard:
                "Thank you. Here's your police report number. You'll need this for your insurance claim and if your embassy requires it. Keep this copy safe.",
              formal:
                "Thank you. Here is your official police report number. This document will be essential for your insurance claim and should your embassy request it. Please ensure this copy is kept in a secure place.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, officer. Is there any chance of getting my wallet back?",
            textZh: "谢谢警官。有可能找回我的钱包吗？",
            commonMistake: {
              wrong: "Is there any possibility to get my wallet back?",
              correct: "Is there any chance of getting my wallet back?",
              explanation: "Possibility听起来生硬，用chance更自然口语化。",
            },
            casualVersion: "Thanks, officer. Any chance of getting my wallet back?",
            formalityVariants: {
              casual: "Thanks, officer. Wallet back?",
              standard: "Thank you, officer. Is there any chance of getting my wallet back?",
              formal: "Thank you, Officer. Is there any possibility of recovering my wallet?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "To be honest, pickpocket cases are difficult to solve, but we'll do our best. If we recover anything, we'll contact you. In the meantime, be extra careful on public transport.",
            textZh: "说实话，扒窃案很难破，但我们会尽力。如果找到东西，我们会联系您。同时，坐公共交通时要格外小心。",
            keyPhrases: [
              { en: "difficult to solve", zh: "很难破" },
              { en: "recover", zh: "找回" },
              { en: "contact you", zh: "联系您" },
              { en: "be extra careful", zh: "格外小心" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I gotta be straight with you — these cases are really hard to crack. But we'll keep an eye out. Be extra careful on the subway from now on.",
                textZh: "跟你说实话——这类案子很难破。但我们会留意的。以后坐地铁多加小心。",
                actionHint: "理解追回可能性低",
                frequency: "common",
              },
              {
                textEn:
                  "Honestly, the chances of getting your stuff back aren't great with pickpocketing, but we'll try. Stay vigilant out there.",
                textZh: "说实话，扒窃的东西找回来的概率不大，但我们会尽力。出门多留心。",
                actionHint: "做好心理准备",
                frequency: "common",
              },
            ],
            casualVersion:
              "Honestly? Pickpocket cases are tough, but we'll try. If we find anything, we'll call you. Just be super careful on public transport, okay?",
            commonMistake: {
              wrong: "In the meantime, pay attention on public transport.",
              correct: "In the meantime, be extra careful on public transport.",
              explanation: '“pay attention” 是集中注意力，"be careful" 是注意安全，后者更符合语境。',
            },
            formalityVariants: {
              casual:
                "Honestly, pickpocketing's hard to solve, but we'll try. Find anything, we'll call. Just be super careful on public transport.",
              standard:
                "To be honest, pickpocket cases are difficult to solve, but we'll do our best. If we recover anything, we'll contact you. In the meantime, be extra careful on public transport.",
              formal:
                "Candidly, cases involving pickpocketing present significant challenges in resolution; however, we assure you of our utmost effort. Should any items be recovered, we will promptly notify you. In the interim, we strongly advise you to exercise heightened caution when utilizing public transportation.",
            },
          },
        ],
      },

      // --- Flow 2: 迷路求助 ---
      {
        id: "lost",
        titleZh: "迷路求助",
        titleEn: "Lost and Asking for Help",
        description: "在陌生城市迷路，找不到酒店，向警察求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, officer. I'm a tourist and I'm completely lost. I can't find my hotel.",
            textZh: "打扰一下，警官。我是游客，完全迷路了。找不到我的酒店。",
            culturalNote: "在国外迷路时，找穿制服的警察或去商店求助是最安全的做法。手机没电时尤其重要。",
            casualVersion: "Excuse me, officer. I'm a tourist and totally lost. Can't find my hotel.",
            commonMistake: {
              wrong: "I'm very lost.",
              correct: "I'm completely lost.",
              explanation: '“completely/totally lost” 比 "very lost" 更自然地表达“完全迷路”。',
            },
            formalityVariants: {
              casual: "Officer, I'm a tourist, totally lost. Can't find my hotel.",
              standard: "Excuse me, officer. I'm a tourist and I'm completely lost. I can't find my hotel.",
              formal:
                "Excuse me, Officer. I am a tourist and seem to be entirely disoriented. I am unable to locate my hotel.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Don't worry, I can help. Do you know the name and address of your hotel?",
            textZh: "别担心，我可以帮你。你知道酒店的名字和地址吗？",
            keyPhrases: [
              { en: "don't worry", zh: "别担心" },
              { en: "name and address", zh: "名字和地址" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, no worries. I can point you in the right direction. What's the name of your hotel?",
                textZh: "嘿，别急。我能帮你指路。你住哪个酒店？",
                actionHint: "告知酒店名称",
                frequency: "common",
              },
              {
                textEn: "Take it easy, we'll figure it out. Do you have any idea where your hotel is?",
                textZh: "别着急，我们会搞定的。你大概知道酒店在哪吗？",
                actionHint: "提供你知道的信息",
                frequency: "common",
              },
              {
                textEn: "You'll be fine. Got the hotel name? Maybe it's on your booking confirmation?",
                textZh: "没事的。知道酒店名字吗？也许订单确认上有？",
                actionHint: "查看手机上的预订信息",
                frequency: "occasional",
              },
            ],
            casualVersion: "No worries, I can help. Know your hotel's name and address?",
            formalityVariants: {
              casual: "No worries, I can help. Hotel name/address?",
              standard: "Don't worry, I can help. Do you know the name and address of your hotel?",
              formal:
                "Please don't be concerned, I can certainly assist you. Do you happen to recall the name and address of your hotel?",
            },
          },
          {
            speaker: "you",
            textEn:
              "It's called the Grand Hotel, but I don't remember the exact address. My phone is dead so I can't check the map.",
            textZh: "叫 Grand Hotel，但我不记得具体地址了。手机没电了，看不了地图。",
            casualVersion: "It's the Grand Hotel, but I forget the address. Phone's dead, so I can't check the map.",
            commonMistake: {
              wrong: "My phone has no power.",
              correct: "My phone is dead.",
              explanation: '手机没电更常用 "phone is dead" 或 "ran out of battery"。',
            },
            formalityVariants: {
              casual: "Grand Hotel, but forgot the address. Phone's dead, can't check.",
              standard:
                "It's called the Grand Hotel, but I don't remember the exact address. My phone is dead so I can't check the map.",
              formal:
                "The establishment is known as the Grand Hotel, however, I cannot recall the precise address. My mobile phone's battery has depleted, preventing me from accessing the map.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "The Grand Hotel — I know where that is. It's about a 15-minute walk from here. Do you have your hotel key card? The address might be on it.",
            textZh: "Grand Hotel——我知道在哪。从这里步行大约 15 分钟。你有酒店房卡吗？上面可能有地址。",
            keyPhrases: [
              { en: "15-minute walk", zh: "步行15分钟" },
              { en: "key card", zh: "房卡" },
              { en: "address might be on it", zh: "上面可能有地址" },
            ],
            responseTip: "出门前拍一张酒店名片或房卡的照片很有用",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Oh, the Grand Hotel! Yeah, I know it. Not too far — about 15 minutes on foot. You got a key card? The address should be on it.",
                textZh: "哦，Grand Hotel！我知道。不远——走路大概15分钟。你有房卡吗？上面应该有地址。",
                actionHint: "找出房卡查地址",
                frequency: "common",
              },
              {
                textEn:
                  "The Grand Hotel, sure. That's just down the road. Check your key card — the address is usually printed on it.",
                textZh: "Grand Hotel，知道。就在这条路下面。看看你的房卡——一般会印地址。",
                actionHint: "查看房卡背面",
                frequency: "common",
              },
            ],
            casualVersion:
              "Grand Hotel? Yeah, I know it. 'Bout a 15-min walk. Got your key card? Address might be on there.",
            formalityVariants: {
              casual: "Grand Hotel? Know it. 15-min walk. Key card? Address on it?",
              standard:
                "The Grand Hotel — I know where that is. It's about a 15-minute walk from here. Do you have your hotel key card? The address might be on it.",
              formal:
                "Ah, the Grand Hotel. I am familiar with its location. It is approximately a 15-minute walk from our current position. Do you happen to possess your hotel key card? The address is often printed on them.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh yes, here it is! It says 120 Main Street.",
            textZh: "哦对，在这！上面写的是 Main Street 120 号。",
            commonMistake: {
              wrong: "Oh yes, here is it!",
              correct: "Oh yes, here it is!",
              explanation: "Here it is 是固定表达，意为“在这里”。",
            },
            culturalNote: "建议出门前拿一张酒店名片或把酒店地址截图保存，以备不时之需。",
            casualVersion: "Oh yeah, here! Says 120 Main Street.",
            formalityVariants: {
              casual: "Oh, found it! 120 Main Street.",
              standard: "Oh yes, here it is! It says 120 Main Street.",
              formal: "Ah yes, I have located it! It indicates 120 Main Street.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "That's right. Here's how you get there: go straight down this road for two blocks, then turn right at the traffic light. You'll see the hotel on your left.",
            textZh: "没错。这样走：沿这条路直走两个街区，在红绿灯处右转。酒店在你左边。",
            keyPhrases: [
              { en: "go straight", zh: "直走" },
              { en: "two blocks", zh: "两个街区" },
              { en: "turn right", zh: "右转" },
              { en: "traffic light", zh: "红绿灯" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, that's the one. Okay so just keep going straight, two blocks, then hang a right at the light. Hotel's on your left, can't miss it.",
                textZh: "对，就是那个。直走两个街区，到红绿灯右拐。酒店在左边，不会错过的。",
                actionHint: "记住直走右拐",
                frequency: "common",
              },
              {
                textEn:
                  "Easy — straight ahead, past two blocks, right at the traffic light. You'll see it on the left side.",
                textZh: "简单——往前直走，过两个街区，红绿灯右转。在左边就能看到。",
                actionHint: "按指示走",
                frequency: "common",
              },
            ],
            casualVersion: "Yep. Go straight two blocks, then right at the light. Hotel's on your left.",
            culturalNote: "美国常用'block'来指一个街区，不是指红绿灯之间的距离。转弯要说 'turn right/left at the l",
            commonMistake: {
              wrong: "You'll see the hotel on your left hand.",
              correct: "You'll see the hotel on your left.",
              explanation: "“on your left” 已经足够表达“在你左边”，不需要加“hand”。",
            },
            formalityVariants: {
              casual: "Yep. Straight two blocks, right at the light. Hotel's on the left.",
              standard:
                "That's right. Here's how you get there: go straight down this road for two blocks, then turn right at the traffic light. You'll see the hotel on your left.",
              formal:
                "Precisely. To reach your destination: proceed straight along this thoroughfare for two city blocks, then execute a right turn at the forthcoming traffic light. The hotel will be visible on your left-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Straight for two blocks, then right at the light. Got it. Thank you so much!",
            textZh: "直走两个街区，红绿灯右转。明白了。非常感谢！",
            commonMistake: {
              wrong: "I got it.",
              correct: "Got it.",
              explanation: "口语中直接用 Got it! 更自然，表示“明白了”。",
            },
            casualVersion: "Straight two blocks, right at the light. Got it. Thanks a bunch!",
            formalityVariants: {
              casual: "Two blocks straight, right at light. Got it. Thanks!",
              standard: "Straight for two blocks, then right at the light. Got it. Thank you so much!",
              formal:
                "Two blocks straight, then a right turn at the traffic light. Understood. I sincerely appreciate your assistance!",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "You're welcome. And a tip — always keep a photo of your hotel address on your phone, or carry the hotel business card. Stay safe!",
            textZh: "不客气。给你个建议——手机里存一张酒店地址的照片，或者带上酒店名片。注意安全！",
            keyPhrases: [
              { en: "hotel business card", zh: "酒店名片" },
              { en: "stay safe", zh: "注意安全" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem! Pro tip — snap a pic of your hotel's business card next time. Makes life way easier if you get lost again.",
                textZh: "没事！小建议——下次拍一张酒店名片的照片。再迷路就方便多了。",
                actionHint: "以后出门前拍酒店名片",
                frequency: "common",
              },
              {
                textEn:
                  "Glad to help. Next time, grab a hotel business card before you head out. Saves you a lot of trouble.",
                textZh: "乐意帮忙。下次出门前拿张酒店名片。能省不少麻烦。",
                actionHint: "养成带名片的习惯",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. Quick tip — always keep a pic of your hotel address on your phone, or grab a business card. Stay safe!",
            commonMistake: {
              wrong: "And give you a tip.",
              correct: "And a tip —",
              explanation: "“give you a tip” 容易被误解为给小费，用 “a tip” 或 “here's a tip” 更自然地表达“一个建议”。",
            },
            formalityVariants: {
              casual: "No problem. Tip: photo of hotel address on phone, or card. Stay safe!",
              standard:
                "You're welcome. And a tip — always keep a photo of your hotel address on your phone, or carry the hotel business card. Stay safe!",
              formal:
                "You are most welcome. And may I offer a suggestion — it is always prudent to retain either a photograph of your hotel's address on your mobile device or to carry a physical business card from the establishment. Do take care!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 大使馆求助 ====================
  {
    id: "emergency-embassy",
    category: "emergency",
    titleZh: "大使馆求助",
    titleEn: "Embassy Visit",
    description: "护照丢失或需要领事帮助时到大使馆或领事馆求助",
    otherRole: "领事官员",
    otherRoleIcon: "landmark",
    flows: [
      // --- Flow 1: 护照丢失 ---
      {
        id: "lost-passport",
        titleZh: "护照丢失",
        titleEn: "Lost Passport",
        description: "护照丢失或被盗，到大使馆申请紧急旅行证件",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'm a Chinese citizen and I've lost my passport. I need help getting an emergency travel document.",
            textZh: "你好，我是中国公民，护照丢了。我需要申请紧急旅行证件。",
            casualVersion: "Hey, I'm a Chinese citizen, lost my passport. Need an emergency travel document.",
            commonMistake: {
              wrong: "My passport lost.",
              correct: "My passport is lost.",
              explanation: "中文习惯说“护照丢了”，但英文中要加be动词或用主动语态。",
            },
            formalityVariants: {
              casual: "Hey, I'm Chinese, lost my passport. Need an emergency travel document.",
              standard: "Hello, I am a Chinese citizen, and my passport is lost. I need to apply for an emergency travel document.",
              formal: "Good morning/afternoon, I am a Chinese national, and I regret to inform you that my passport has been misplaced. I require assistance in applying for an emergency travel document.",
            },
            culturalNote: "护照丢失后应尽快到最近的中国大使馆或领事馆。出发前记下大使馆地址和电话。",
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "I'm sorry to hear that. First, have you filed a police report? We'll need that to process your application.",
            textZh: "很遗憾。首先，您报警了吗？我们需要报案记录来处理您的申请。",
            casualVersion: "Oh, got it. First off, you report it to the police? We'll need that report to process your application.",
            commonMistake: {
              wrong: "Did you report police?",
              correct: "Did you report it to the police?",
              explanation: "“report”后面通常需要宾语或介词“to”。",
            },
            formalityVariants: {
              casual: "Got it. First, did you report it to the police? We'll need that report for your application.",
              standard: "I understand. First, have you reported it to the police? We will need a police report to process your application.",
              formal: "Understood. My apologies for the inconvenience. May I inquire if a police report has been filed? A formal police report is a prerequisite for processing this application.",
            },
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "process your application", zh: "处理您的申请" },
            ],
            responseTip: "护照丢失后一定要先去当地警察局报案，拿到报案记录再来大使馆",
            alternativeExpressions: [
              {
                textEn:
                  "Sorry about that. Before we get started — did you report it to the police? We can't process anything without a police report.",
                textZh: "很遗憾。在开始之前——你报警了吗？没有报案记录我们没法办。",
                actionHint: "确认已报警",
                frequency: "common",
              },
              {
                textEn:
                  "That's a tough spot. First things first — do you have a police report? That's step one for us.",
                textZh: "这确实麻烦。首先——你有报案记录吗？这是我们办理的第一步。",
                actionHint: "如没报警需先去报警",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here's the police report. I filed it this morning at the downtown police station.",
            textZh: "有的，这是报案记录。我今天早上在市中心警察局报的案。",
            casualVersion: "Yeah, got the report right here. Reported it at the downtown station this morning.",
            commonMistake: {
              wrong: "This is police report.",
              correct: "Here is the police report.",
              explanation: "需要使用冠词“the”或“a”；“This is”后面不能直接加名词。",
            },
            formalityVariants: {
              casual: "Yeah, report's right here. Reported it at the downtown station this morning.",
              standard: "Yes, here is the police report. I reported it to the downtown police station this morning.",
              formal: "Certainly, here is the official police report. I filed it at the downtown precinct earlier this morning.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "Good. I'll need your police report, two passport-sized photos, a copy of your ID — if you have one — and any copy of your original passport. Do you have a photo or scan of your passport saved anywhere?",
            textZh:
              "好的。我需要您的报案记录、两张护照尺寸的照片、身份证复印件（如果有的话），以及原护照的任何复印件。您有保存护照的照片或扫描件吗？",
            casualVersion: "Okay. I'll need your police report, two passport pics, copy of your ID if you got one, and any copies of your old passport. Got any photos or scans of your passport saved?",
            commonMistake: {
              wrong: "I need your police report...",
              correct: "I will need your police report...",
              explanation: "“I need”听起来有些直接，用“I will need”或问句更礼貌。",
            },
            formalityVariants: {
              casual: "Alright. Need your police report, two passport pics, ID copy if you got it, and any old passport copies. Got any scans of your passport?",
              standard: "Good. I will need your police report, two passport-sized photos, a copy of your ID (if you have one), and any copies of your original passport. Do you have photos or scans of your passport saved?",
              formal: "Excellent. I will require your police report, two passport-sized photographs, a photocopy of your identification (should you possess one), and any existing copies of your original passport. Have you retained any digital images or scans of your passport?",
            },
            keyPhrases: [
              { en: "passport-sized photos", zh: "护照尺寸的照片" },
              { en: "copy of your ID", zh: "身份证复印件" },
              { en: "copy of your original passport", zh: "原护照复印件" },
              { en: "photo or scan", zh: "照片或扫描件" },
            ],
            responseTip: "出国前一定要在手机和邮箱里存一份护照首页的照片或扫描件",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Great. Here's what I need from you: the police report, a couple of passport photos, any ID you've got, and if you have a copy of your old passport, that'd really speed things up.",
                textZh:
                  "好的。我需要你准备这些：报案记录、两张证件照、你有的任何身份证件，如果有旧护照的复印件就更快了。",
                actionHint: "准备所有材料",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, let me walk you through what we need — police report, two photos, some form of ID, and any copy of your original passport. Do you have a digital copy saved anywhere?",
                textZh:
                  "好的，我跟你说需要什么——报案记录、两张照片、某种身份证明，以及原护照的任何复印件。你有存电子版吗？",
                actionHint: "检查手机里有没有护照照片",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I have a photo of my passport saved in my email. I can show you on my phone. But I don't have physical photos with me.",
            textZh: "我邮箱里有护照的照片，可以用手机给你看。但没有带纸质照片。",
            casualVersion: "Got a pic of my passport in my email. Can show you on my phone. But no paper photos.",
            commonMistake: {
              wrong: "I have passport photo in email.",
              correct: "I have a photo of my passport in my email.",
              explanation: "英文中通常需要介词“of”来指明照片的内容，或用所有格修饰。",
            },
            formalityVariants: {
              casual: "Got a passport pic in my email. Can show you on my phone. No paper photos, though.",
              standard: "I have a photo of my passport saved in my email. I can show you on my phone. But I don't have paper photos.",
              formal: "I possess a digital image of my passport stored within my email. I am able to present it to you via my mobile device. However, I do not have physical copies of photographs.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "That's fine. We can take your photos here — there's a small fee of $15. The emergency travel document usually takes 1 to 3 working days. When is your flight home?",
            textZh:
              "没关系。我们这里可以拍照——费用 15 美元。紧急旅行证件通常需要 1 到 3 个工作日。您的回程航班是什么时候？",
            casualVersion: "No worries. We can take photos here — costs fifteen bucks. Emergency travel document usually takes one to three biz days. When's your flight back?",
            commonMistake: {
              wrong: "How much is cost?",
              correct: "How much does it cost?",
              explanation: "“cost”作动词时需主语和助动词，作名词时需冠词。",
            },
            formalityVariants: {
              casual: "No problem. We can do photos here – fifteen bucks. Emergency travel doc usually takes 1-3 biz days. When's your flight back?",
              standard: "That's fine. We can take photos here — the cost is $15. An emergency travel document usually takes 1 to 3 business days. What is your return flight date?",
              formal: "That is perfectly acceptable. We are equipped to take the necessary photographs on-site; the fee for this service is $15. An emergency travel document typically requires one to three business days for processing. Could you please provide your scheduled return flight date?",
            },
            keyPhrases: [
              { en: "emergency travel document", zh: "紧急旅行证件" },
              { en: "1 to 3 working days", zh: "1到3个工作日" },
              { en: "small fee", zh: "少量费用" },
              { en: "flight home", zh: "回程航班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries. We do photos here — 15 bucks for two. The emergency document usually takes one to three days. How soon do you need to fly out?",
                textZh: "没关系。我们这里能拍照——两张15块。紧急证件通常一到三天。你什么时候要飞？",
                actionHint: "告知航班时间",
                frequency: "common",
              },
              {
                textEn:
                  "That's okay, we can handle the photos on-site. Small charge of $15. When's your flight home? I wanna make sure we get this done in time.",
                textZh: "没问题，我们这里能拍照。15美元。你回程航班什么时候？我确保来得及。",
                actionHint: "确认时间够不够",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "My flight is in 4 days, so that should be enough time. How much does the emergency travel document cost?",
            textZh: "我的航班在 4 天后，时间应该够。紧急旅行证件多少钱？",
            casualVersion: "Flight's in 4 days, so that should be plenty. How much for the emergency travel document?",
            commonMistake: {
              wrong: "My flight has 4 days.",
              correct: "My flight is in 4 days.",
              explanation: "表示时间距离用“in [时间]”。",
            },
            formalityVariants: {
              casual: "Flight's in 4 days, so that's enough time. How much is the travel document?",
              standard: "My flight is in 4 days, so that should be enough time. How much does the emergency travel document cost?",
              formal: "My scheduled departure is in four days, which I believe should provide sufficient time. Could you inform me of the fee for the emergency travel document?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "The fee is $25 for the emergency travel document. Please fill out this application form. We'll also need your flight itinerary and local contact information. You can pick it up in about 2 days.",
            textZh:
              "紧急旅行证件费用是 25 美元。请填写这份申请表。我们还需要您的航班行程单和当地联系方式。大约 2 天后来取。",
            casualVersion: "It's twenty-five bucks for the emergency travel doc. Fill out this form. We'll also need your flight info and local contact. Can pick it up in 'bout 2 days.",
            commonMistake: {
              wrong: "Please fill this form.",
              correct: "Please fill out this form.",
              explanation: "“fill out”是固定搭配，表示填写表格。",
            },
            formalityVariants: {
              casual: "It's $25 for the travel doc. Fill out this form. We'll also need your flight info and local contact. Pick it up in like 2 days.",
              standard: "The fee is $25 for the emergency travel document. Please fill out this application form. We will also need your flight itinerary and local contact information. You can pick it up in about 2 days.",
              formal: "The charge for the emergency travel document is $25. Kindly complete this application form. We will additionally require your flight itinerary and local contact details. The document should be ready for collection in approximately two business days.",
            },
            keyPhrases: [
              { en: "application form", zh: "申请表" },
              { en: "flight itinerary", zh: "航班行程单" },
              { en: "local contact information", zh: "当地联系方式" },
              { en: "pick it up", zh: "来取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $25 for the document. Fill this out and bring your flight details and a local number where we can reach you. Should be ready in about two days.",
                textZh: "证件费25美元。填好这个表，带上航班信息和一个我们能联系你的本地号码。大约两天能好。",
                actionHint: "填表并留联系方式",
                frequency: "common",
              },
              {
                textEn:
                  "The travel document runs $25. I'll need this form filled out, plus your flight booking and where you're staying. Come back in two days to pick it up.",
                textZh: "旅行证件25美元。需要填好这张表，加上你的航班预订和住址。两天后来取。",
                actionHint: "记住取证时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll fill this out right away. Can I still travel within the country with just this document?",
            textZh: "我马上填。拿着这个证件还能在国内旅行吗？",
            casualVersion: "I'll fill it out right away. Can I still travel domestically with this?",
            commonMistake: {
              wrong: "I immediately fill out.",
              correct: "I will fill it out immediately.",
              explanation: "副词通常放在动词后面或句末，且需要助动词“will”。",
            },
            formalityVariants: {
              casual: "I'll fill it out right away. Can I still travel domestically with this?",
              standard: "I will fill it out immediately. Can I still travel domestically with this document?",
              formal: "I shall complete it without delay. Will this document permit me to travel domestically?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "The emergency travel document is only valid for your return trip home. You should not travel to other countries with it. Also, keep it safe — losing this would be a serious problem. Here's my card if you need any further assistance.",
            textZh:
              "紧急旅行证件只能用于回国。不能用它去其他国家。另外请保管好——再丢失的话问题会很严重。这是我的名片，如果需要进一步帮助可以联系我。",
            casualVersion: "The emergency travel doc's just for getting you back home. Don't travel to other countries with it. And seriously, keep it safe — losing this again would be a huge problem. Here's my card, give me a shout if you need more help.",
            commonMistake: {
              wrong: "This document only for return home.",
              correct: "This document is only for returning home.",
              explanation: "句子结构不完整，缺少be动词，且介词后跟动名词。",
            },
            formalityVariants: {
              casual: "Emergency travel doc's just for getting you home. Don't use it for other countries. And seriously, keep it safe — losing this again would be a huge problem. Here's my card, call if you need more help.",
              standard: "The emergency travel document is only valid for your return trip home. You should not travel to other countries with it. Also, keep it safe — losing this would be a serious problem. Here is my business card, you can contact me if you need further assistance.",
              formal: "Please note that the emergency travel document is exclusively for your repatriation. It is not valid for travel to other nations. Furthermore, it is imperative that you safeguard this document diligently, as its loss would present a significant predicament. Here is my professional card; please do not hesitate to contact me should you require any additional assistance.",
            },
            keyPhrases: [
              { en: "only valid for", zh: "只能用于" },
              { en: "return trip", zh: "回国行程" },
              { en: "keep it safe", zh: "保管好" },
              { en: "further assistance", zh: "进一步帮助" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just so you know — this document only gets you home. You can't travel to other countries with it. And whatever you do, don't lose it. Here's my card if you need anything.",
                textZh: "跟你说明一下——这个证件只能回国用。不能拿它去其他国家。千万别弄丢。这是我的名片有需要就联系。",
                actionHint: "只能用于回国",
                frequency: "common",
              },
              {
                textEn:
                  "Heads up — this is strictly for getting you home, nothing else. Keep it safe because replacing a replacement would be a real headache.",
                textZh: "提醒你——这个只能用来回国，不能做别的。保管好，再丢一次就真的麻烦了。",
                actionHint: "务必妥善保管",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 寻求领事帮助 ---
      {
        id: "assistance",
        titleZh: "寻求领事帮助",
        titleEn: "Requesting Consular Assistance",
        description: "在海外遇到困难，到领事馆寻求一般性帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'm a Chinese citizen visiting here. I'm in a bit of a difficult situation and I was hoping you could help.",
            textZh: "你好，我是来这里旅游的中国公民。我遇到了一些困难，希望你们能帮忙。",
            casualVersion: "Hey, I'm a Chinese citizen here traveling. Hit some trouble, hoping you guys can help.",
            commonMistake: {
              wrong: "I meet some difficulties.",
              correct: "I have encountered some difficulties.",
              explanation: "“meet”用于人，遇到困难常用“encounter”或“run into”。",
            },
            formalityVariants: {
              casual: "Hey, I'm Chinese, here traveling. Got into some trouble, hoping you can help.",
              standard: "Hello, I am a Chinese citizen here for tourism. I have encountered some difficulties and hope you can help me.",
              formal: "Good morning/afternoon. I am a Chinese national visiting as a tourist. I have unfortunately experienced some unforeseen difficulties and would greatly appreciate your assistance.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn: "Of course. Please have a seat and tell me what's going on. Can I see your passport first?",
            textZh: "当然。请坐，告诉我怎么了。先看一下您的护照好吗？",
            casualVersion: "Sure thing. Have a seat and tell me what's up. Can I see your passport first?",
            formalityVariants: {
              casual: "Sure thing. Grab a seat and tell me what's up. Passport first?",
              standard: "Of course. Please have a seat and tell me what is wrong. May I see your passport first?",
              formal: "Certainly. Kindly take a seat and elaborate on the situation. Would you mind presenting your passport for initial review?",
            },
            keyPhrases: [
              { en: "have a seat", zh: "请坐" },
              { en: "what's going on", zh: "怎么了/发生了什么" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Come sit down and walk me through what happened. Mind if I take a look at your passport?",
                textZh: "没问题。坐下来跟我说说怎么了。我看一下你的护照行吗？",
                actionHint: "出示护照并说明情况",
                frequency: "common",
              },
              {
                textEn:
                  "Of course, that's what we're here for. Have a seat. Let me see your passport, and then tell me everything.",
                textZh: "当然，这就是我们的工作。请坐。让我看看护照，然后把事情都跟我说说。",
                actionHint: "准备好护照",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Here's my passport. I was supposed to fly home tomorrow, but the airline canceled my flight and I've run out of money. I can't afford a new ticket or another night at the hotel.",
            textZh:
              "这是我的护照。我本来明天的航班回国，但航空公司取消了航班，我的钱也花完了。买不起新机票，也付不起酒店了。",
            casualVersion: "Here's my passport. My flight was tomorrow, but the airline canceled it, and I'm out of money. Can't afford a new ticket or a hotel.",
            commonMistake: {
              wrong: "My money used up.",
              correct: "I've run out of money.",
              explanation: "“used up”用于物，用完钱常用“run out of money”。",
            },
            formalityVariants: {
              casual: "Passport's here. My flight was tomorrow, but the airline canceled it, and I'm out of money. Can't afford a new ticket or hotel.",
              standard: "Here is my passport. My flight was supposed to be tomorrow, but the airline canceled it, and I've run out of money. I can't afford a new ticket or pay for a hotel.",
              formal: "Here is my passport. My scheduled flight for tomorrow has been canceled by the airline, and I find myself without sufficient funds. Consequently, I am unable to purchase a new ticket or secure accommodation.",
            },
            culturalNote:
              "领事馆可以在公民陷入困境时提供紧急帮助，但通常不会直接给钱，而是协助联系家人或安排紧急贷款。",
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "I understand. First, regarding the canceled flight — the airline is required to rebook you or provide compensation. Have you contacted them? Second, we can help you reach your family so they can transfer funds to you.",
            textZh:
              "我理解。首先关于取消的航班——航空公司有义务帮您改签或提供补偿。您联系他们了吗？其次，我们可以帮您联系家人，让他们给您汇款。",
            casualVersion: "Gotcha. First, 'bout the canceled flight — the airline has to rebook you or pay up. You call 'em? Second, we can help you get in touch with family so they can send you money.",
            commonMistake: {
              wrong: "The airline should rebook you.",
              correct: "The airline is required to rebook you.",
              explanation: "“should”是建议，“is required to”或“has to”是强制性要求。",
            },
            formalityVariants: {
              casual: "Gotcha. First, 'bout the canceled flight — they gotta rebook you or pay up. You call 'em? Second, we can help you get family to send money.",
              standard: "I understand. First, regarding the canceled flight — the airline is required to rebook you or provide compensation. Have you contacted them? Second, we can help you reach your family so they can transfer funds to you.",
              formal: "I comprehend the situation. Firstly, concerning the canceled flight, the airline is legally obligated to either rebook your passage or offer appropriate compensation. Have you established communication with them? Secondly, we can facilitate contact with your family to enable a transfer of funds.",
            },
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "compensation", zh: "补偿" },
              { en: "reach your family", zh: "联系您的家人" },
              { en: "transfer funds", zh: "汇款" },
            ],
            responseTip: "航班取消时，航空公司通常有义务提供改签或补偿，先问清楚权益",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Okay, let's take this one step at a time. The airline has to either rebook you or compensate you — did you talk to them yet? And don't worry about the money, we can help your family send some over.",
                textZh:
                  "好的，一步一步来。航空公司必须给你改签或者赔偿——你跟他们说过了吗？钱的事别担心，我们能帮你家人汇过来。",
                actionHint: "先问航空公司改签",
                frequency: "common",
              },
              {
                textEn:
                  "I see. Two things here — first, the airline owes you a rebooking. Have you pushed back on them? Second, we can help connect you with your family for emergency funds.",
                textZh:
                  "明白了。两件事——第一，航空公司欠你一个改签。你跟他们交涉了吗？第二，我们能帮你联系家人应急汇款。",
                actionHint: "要求航空公司承担责任",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I tried calling the airline but couldn't get through. The wait time was over an hour. And my family doesn't speak English, so they might have trouble sending money internationally.",
            textZh: "我试过打航空公司电话，但打不通。等待时间超过一小时。而且我家人不会说英语，国际汇款可能有困难。",
            casualVersion: "Tried calling the airline, couldn't get through. Waited over an hour. Plus, my family doesn't speak English, so international transfers could be tough.",
            commonMistake: {
              wrong: "I tried call the airline.",
              correct: "I tried calling the airline.",
              explanation: "“try”后面跟动名词表示尝试做某事。",
            },
            formalityVariants: {
              casual: "Tried calling the airline, couldn't get through. Over an hour wait. Plus, my family doesn't speak English, so international transfers might be a pain.",
              standard: "I tried calling the airline but couldn't get through. The waiting time was over an hour. And my family doesn't speak English, so international transfers might be difficult.",
              formal: "I attempted to contact the airline; however, I was unable to connect, with a reported waiting time exceeding one hour. Furthermore, my family members do not speak English, which may present complications for international fund transfers.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "We can help with both. I can call the airline on your behalf to sort out the rebooking. For the money transfer, your family can send it through our emergency assistance program — they just need to visit our office in Beijing or Shanghai. It usually arrives within 24 hours.",
            textZh:
              "这两个我们都可以帮忙。我可以代您打电话给航空公司处理改签。汇款方面，您的家人可以通过我们的紧急援助项目汇款——只需要去北京或上海的办公室。通常 24 小时内到账。",
            casualVersion: "We can totally help with both. I can call the airline for you to get the rebooking handled. For the money, your family can send it through our emergency program — they just gotta go to our office in Beijing or Shanghai. Usually gets there within 24 hours.",
            culturalNote: "告知家人去哪里汇款，中国办事处地点。",
            commonMistake: {
              wrong: "We can help you both.",
              correct: "We can help with both.",
              explanation: "“help”后面跟介词“with”表示帮助解决某事。",
            },
            formalityVariants: {
              casual: "We can help with both. I can call the airline for you to fix the rebooking. For money, family can use our emergency program — just go to our Beijing or Shanghai office. Usually gets there in 24 hours.",
              standard: "We can help with both. I can call the airline on your behalf to sort out the rebooking. For the money transfer, your family can send it through our emergency assistance program — they just need to visit our office in Beijing or Shanghai. It usually arrives within 24 hours.",
              formal: "We are equipped to provide assistance with both matters. I can contact the airline on your behalf to resolve the rebooking issue. Regarding the money transfer, your family is welcome to utilize our emergency assistance program; they simply need to visit our designated offices in Beijing or Shanghai. Funds typically arrive within 24 hours.",
            },
            keyPhrases: [
              { en: "on your behalf", zh: "代您" },
              { en: "sort out", zh: "处理" },
              { en: "emergency assistance program", zh: "紧急援助项目" },
              { en: "within 24 hours", zh: "24小时内" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Leave it to us. I'll ring the airline for you and get the rebooking sorted. For the money, your folks can send it through our emergency program — they just go to our office in Beijing or Shanghai.",
                textZh:
                  "交给我们。我帮你打电话给航空公司搞定改签。汇款方面，你家人可以通过我们的紧急项目汇——去北京或上海的办公室就行。",
                actionHint: "让领事馆代办",
                frequency: "common",
              },
              {
                textEn:
                  "We deal with this kind of thing all the time. I'll handle the airline call, and we have an emergency money transfer service your family can use back home.",
                textZh: "我们经常处理这种事。航空公司电话我来打，我们有紧急汇款服务你家人在国内就能用。",
                actionHint: "联系家人准备汇款",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be incredibly helpful. Can you also recommend a cheap place to stay tonight?",
            textZh: "那太感谢了。你能推荐一个今晚便宜的住处吗？",
            casualVersion: "That'd be super helpful. Can you also recommend a cheap spot to crash tonight?",
            commonMistake: {
              wrong: "Can you also recommend cheap hotel?",
              correct: "Can you also recommend a cheap place to stay?",
              explanation: "“cheap hotel”前面需要冠词“a”。",
            },
            formalityVariants: {
              casual: "That'd be super helpful. Also, can you recommend a cheap place to crash tonight?",
              standard: "That would be incredibly helpful. Can you also recommend a cheap place to stay tonight?",
              formal: "That assistance would be profoundly appreciated. Furthermore, would you be able to recommend any economical accommodation options for this evening?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "Yes, we have a list of budget-friendly hotels nearby. Some offer special rates for citizens in emergency situations. I'll write down the information for you. In the meantime, here's the phone number for our 24-hour emergency hotline in case you need anything else.",
            textZh:
              "可以，我们有附近经济型酒店的清单。有些对紧急情况的公民有特别价格。我把信息写给您。同时，这是我们 24 小时紧急热线电话，如果还需要其他帮助可以打这个。",
            casualVersion: "Yep, got a list of budget hotels nearby. Some even have special rates for folks in emergencies. I'll write that down for ya. Also, here's our 24-hour emergency line, just in case you need anything else.",
            formalityVariants: {
              casual: "Yep, got a list of cheap hotels nearby. Some even have special rates for folks in emergencies. I'll write that down for ya. Here's our 24-hour emergency line too, just in case.",
              standard: "Yes, we have a list of budget-friendly hotels nearby. Some offer special rates for citizens in emergency situations. I will write down the information for you. In the meantime, here is our 24-hour emergency hotline number, should you require any further assistance.",
              formal: "Yes, we do maintain a compilation of budget-friendly hotels within the vicinity. Certain establishments extend preferential rates to citizens experiencing emergency circumstances. I will transcribe this information for you. Concurrently, here is our 24-hour emergency hotline number, should you require any additional support.",
            },
            keyPhrases: [
              { en: "budget-friendly", zh: "经济实惠的" },
              { en: "special rates", zh: "特别价格" },
              { en: "emergency hotline", zh: "紧急热线" },
              { en: "24-hour", zh: "24小时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, we've got some affordable options nearby. A few places give discounts for emergency situations. I'll write it all down for you. And take this — it's our 24-hour hotline number.",
                textZh: "有的，附近有些实惠的选择。有几家紧急情况有折扣。我都写给你。拿着这个——我们的24小时热线电话。",
                actionHint: "记下酒店信息和热线号码",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. I've got a list of cheap hotels around here. Some give emergency rates. Here's the info, and our after-hours number in case you need us tonight.",
                textZh:
                  "当然。我这有附近便宜酒店的清单。有些有紧急价格。给你信息，还有我们的下班时间联系电话以防今晚需要。",
                actionHint: "先找住处安顿下来",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much for all your help. I really appreciate it.",
            textZh: "非常感谢你们的帮助。真的太感谢了。",
            casualVersion: "Thanks a ton for all your help. Really appreciate it.",
            commonMistake: {
              wrong: "Thank you very much your help.",
              correct: "Thank you very much for your help.",
              explanation: "“thank you”后面跟原因需要用介词“for”。",
            },
            formalityVariants: {
              casual: "Thanks a ton for all your help. Really appreciate it.",
              standard: "Thank you so much for all your help. I really appreciate it.",
              formal: "I extend my sincerest gratitude for all of your invaluable assistance. Your support is deeply appreciated.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 意外事故 ====================
  {
    id: "emergency-accident",
    category: "emergency",
    titleZh: "意外事故",
    titleEn: "Accident",
    description: "交通事故或目击事故，需要与警察或对方交涉",
    otherRole: "警察/当事人",
    otherRoleIcon: "shield-alert",
    flows: [
      // --- Flow 1: 交通事故 ---
      {
        id: "car-accident",
        titleZh: "交通事故",
        titleEn: "Minor Car Accident",
        description: "轻微追尾或碰撞，与对方交换信息、等警察处理",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Oh no, are you okay? I'm so sorry — I didn't see you stopping.",
            textZh: "天哪，你没事吧？太对不起了——我没看到你停车。",
            casualVersion: "Oh no, you okay? So sorry — didn't see you stop.",
            commonMistake: {
              wrong: "Are you okay? I am so sorry.",
              correct: "Are you okay? I'm so sorry.",
              explanation: "I am 通常用缩写 I'm 会更自然。",
            },
            formalityVariants: {
              casual: "Oh no, you okay? So sorry, didn't see you stop.",
              standard: "Oh no, are you okay? I'm so sorry, I didn't see you stop.",
              formal: "Oh dear, are you alright? My sincere apologies, I hadn't noticed your vehicle come to a stop.",
            },
            culturalNote:
              "发生事故后，先确认对方是否受伤。在美国，即使是轻微事故也建议报警并交换信息。不要当场认全责。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "I'm fine, but look at my bumper — it's dented. We need to exchange insurance information. Have you called the police?",
            textZh: "我没事，但你看我的保险杠——凹了。我们得交换保险信息。你报警了吗？",
            casualVersion: "I'm fine, but look at my bumper—it's dented. Gotta swap insurance info. You call the cops?",
            commonMistake: {
              wrong: "I am okay, but see my bumper...",
              correct: "I'm okay, but look at my bumper...",
              explanation: "look at 用于看具体物体，see 更偏向于感官。",
            },
            formalityVariants: {
              casual: "I'm fine, but my bumper's dented. Gotta swap info. You call the cops?",
              standard: "I'm okay, but my bumper is dented. We need to exchange insurance information. Did you call the police?",
              formal: "I appear to be unharmed, however, my bumper has sustained a dent. We must exchange insurance particulars. Have you contacted law enforcement?",
            },
            keyPhrases: [
              { en: "bumper", zh: "保险杠" },
              { en: "dented", zh: "凹了" },
              { en: "exchange insurance information", zh: "交换保险信息" },
            ],
            responseTip: "轻微事故要拍照留证据、交换保险信息，有些州法律要求必须报警",
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I'm okay. But dude, look at my car! We gotta swap insurance info. Did you call the cops yet?",
                textZh: "是，我没事。但哥们你看我的车！得交换保险信息。你报警了没？",
                actionHint: "准备交换信息",
                frequency: "common",
              },
              {
                textEn:
                  "I'm alright, but my bumper's all messed up. Let's get each other's insurance details. Have you called the police?",
                textZh: "我还行，但保险杠全毁了。我们互相留保险信息吧。你打警察电话了吗？",
                actionHint: "先拍照再交换信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Not yet. Let me call 911 now. Should we move our cars to the side of the road?",
            textZh: "还没有。我现在打 911。我们要不要把车挪到路边？",
            casualVersion: "Nah. I'll call 911 now. Should we move our cars over?",
            commonMistake: {
              wrong: "I will call 911 now.",
              correct: "Let me call 911 now.",
              explanation: "Let me 或 I'll 更强调立即行动。",
            },
            formalityVariants: {
              casual: "Nah. I'll call 911 now. Move our cars over?",
              standard: "Not yet. Let me call 911 now. Should we move our cars to the side of the road?",
              formal: "Not at this moment. I shall initiate a call to emergency services immediately. Would it be advisable to relocate our vehicles to the roadside?",
            },
            culturalNote: "如果事故轻微且车还能动，美国多数州要求将车移到路边，避免阻碍交通。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "Yes, let's pull over to that parking lot. But first, let me take some photos of the damage and the position of the cars.",
            textZh: "好，我们开到那个停车场吧。但先让我拍几张碰撞位置和车损的照片。",
            culturalNote: "在美国，事故后应先拍照，再移动车辆。",
            casualVersion: "Yeah, let's pull over to that lot. But first, lemme get some pics of the impact and damage.",
            commonMistake: {
              wrong: "Let us pull over to that parking lot.",
              correct: "Let's pull over to that parking lot.",
              explanation: "let's 是 let us 的缩写，更口语化、自然。",
            },
            formalityVariants: {
              casual: "Yeah, let's pull over to that lot. But first, lemme get some pics of the impact and damage.",
              standard: "Yes, let's pull over to that parking lot. But first, let me take a few pictures of the impact spot and the damage.",
              formal: "Affirmative, let us proceed to that parking facility. Prior to that, however, I must document the point of impact and the vehicular damage with photographs.",
            },
            keyPhrases: [
              { en: "pull over", zh: "靠边停" },
              { en: "take photos", zh: "拍照" },
              { en: "damage", zh: "损坏/车损" },
              { en: "position of the cars", zh: "车辆位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, let's get out of the road. Hold on though — I need to snap some pics of the damage first. Don't move your car yet.",
                textZh: "对，咱们先让开路。不过等一下——我先拍几张照片。你的车先别动。",
                actionHint: "先拍照再挪车",
                frequency: "common",
              },
              {
                textEn:
                  "Good idea. But before we move anything, I wanna get pictures of how the cars are positioned. For insurance, you know.",
                textZh: "好主意。但在挪车之前，我想先拍下车的位置。保险要用的嘛。",
                actionHint: "配合对方拍照",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll take photos too. Here's my driver's license and insurance card.",
            textZh: "好主意。我也拍一些。这是我的驾照和保险卡。",
            casualVersion: "Good idea. I'll take some too. Here's my license and insurance.",
            commonMistake: {
              wrong: "Good idea. I also take some.",
              correct: "Good idea. I'll take some too.",
              explanation: "too 表示“也”，also 通常放在动词前。",
            },
            formalityVariants: {
              casual: "Good idea. I'll take some too. Here's my license and insurance.",
              standard: "Good idea. I'll take some too. Here's my driver's license and insurance card.",
              formal: "An excellent suggestion. I shall also capture some images. These are my driver's license and insurance documentation.",
            },
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "Thanks. Here's mine. My name is John Miller, and my insurance is with State Farm. Can I get your phone number in case my insurance company needs to reach you?",
            textZh:
              "谢谢。这是我的。我叫 John Miller，保险公司是 State Farm。能留你的电话吗？我的保险公司可能需要联系你。",
            casualVersion: "Thanks. Here's mine. I'm John Miller, State Farm insurance. Can I grab your number? My insurance might need to call you.",
            commonMistake: {
              wrong: "Can I leave your phone number?",
              correct: "Can I get your phone number?",
              explanation: "get your phone number 表示索取电话号码，leave 是留下。",
            },
            formalityVariants: {
              casual: "Thanks. Here's mine. I'm John Miller, State Farm insurance. Can I grab your number? My insurance might need to call you.",
              standard: "Thanks. Here's mine. My name is John Miller, and my insurance is State Farm. Can I get your phone number? My insurance company might need to contact you.",
              formal: "Thank you. This is my information. I am John Miller, insured by State Farm. May I request your contact number? My insurance provider may require communication with you.",
            },
            keyPhrases: [
              { en: "insurance company", zh: "保险公司" },
              { en: "phone number", zh: "电话号码" },
              { en: "reach you", zh: "联系你" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Here's my stuff. John Miller, insured with State Farm. What's your number? My insurance people might need to get in touch.",
                textZh: "这是我的。John Miller，State Farm 保的险。你电话多少？我保险公司可能要联系你。",
                actionHint: "留下电话号码",
                frequency: "common",
              },
              {
                textEn:
                  "Thanks for that. I'm John, State Farm insurance. Can I get a number to reach you? They'll probably wanna talk to you.",
                textZh: "谢谢。我叫John，State Farm保险。能留个联系方式吗？他们可能会找你。",
                actionHint: "互相留联系方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Sure, it's 555-0123. I'm using a rental car, so let me also get the rental company's insurance information from the glove box.",
            textZh: "好，我的号码是 555-0123。我开的是租的车，让我从杂物箱里找一下租车公司的保险信息。",
            casualVersion: "Yeah, it's 555-0123. It's a rental, lemme find the company's insurance in the glove box.",
            commonMistake: {
              wrong: "I am driving a rent car.",
              correct: "I'm driving a rental car.",
              explanation: "rental car 是惯用表达，指租赁的汽车。",
            },
            formalityVariants: {
              casual: "Yeah, it's 555-0123. It's a rental, lemme find the company's insurance in the glove box.",
              standard: "Sure, it's 555-0123. I'm driving a rental car, let me find the rental company's insurance info from the glove compartment.",
              formal: "Certainly, my number is 555-0123. This vehicle is a rental, I shall retrieve the rental company's insurance documentation from the glove compartment.",
            },
            culturalNote: "租车时一定要确认保险覆盖范围。事故后要第一时间通知租车公司。",
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Good afternoon. I'm Officer Davis. I received a report of a minor accident. Is everyone okay? Can I see both drivers' licenses, registrations, and insurance cards?",
            textZh:
              "下午好。我是 Davis 警官。接到一起轻微事故报告。大家都没事吧？能看一下双方的驾照、行驶证和保险卡吗？",
            casualVersion: "Afternoon. I'm Officer Davis. Got a report of a minor accident. Everyone good? Can I see both your licenses, registrations, and insurance?",
            culturalNote: "美国警察讲话直接，不需要寒暄。",
            commonMistake: {
              wrong: "Good afternoon. I am Officer Davis.",
              correct: "Good afternoon. I'm Officer Davis.",
              explanation: "I'm 比 I am 更自然，尤其在口语中。",
            },
            formalityVariants: {
              casual: "Afternoon. Officer Davis. Got a report of a minor accident. Everyone good? Licenses, registrations, insurance?",
              standard: "Good afternoon. I'm Officer Davis. We received a report of a minor accident. Is everyone okay? May I see both parties' driver's licenses, registrations, and insurance cards?",
              formal: "Good afternoon. I am Officer Davis. We are responding to a report of a minor vehicular incident. Is everyone involved uninjured? I would require viewing both parties' driver's licenses, vehicle registrations, and proof of insurance.",
            },
            keyPhrases: [
              { en: "minor accident", zh: "轻微事故" },
              { en: "driver's license", zh: "驾照" },
              { en: "registration", zh: "行驶证" },
              { en: "insurance card", zh: "保险卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey folks. Officer Davis here. Got a call about a fender bender. Everybody okay? Let me see your IDs, registration, and insurance.",
                textZh: "你们好。Davis警官。接到一个小碰擦的报警。都没事吧？让我看看你们的证件、行驶证和保险。",
                actionHint: "准备好所有证件",
                frequency: "common",
              },
              {
                textEn:
                  "Afternoon. I'm Officer Davis, responding to an accident call. Anyone injured? I'll need licenses and insurance from both parties.",
                textZh: "下午好。我是Davis警官，来处理事故报警的。有人受伤吗？双方的驾照和保险都给我看看。",
                actionHint: "出示所有文件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, everyone is fine. Here are my documents. This is a rental car — here's the rental agreement with the insurance information.",
            textZh: "是的，大家都没事。这是我的证件。这是一辆租来的车——这是租车合同和保险信息。",
            culturalNote: "在美国租车，请务必随身携带租车合同和保险信息。",
            casualVersion: "Yeah, everyone's fine. Here's my stuff. It's a rental — here's the agreement and insurance.",
            commonMistake: {
              wrong: "Here are my documents. This is a rental car, here is the rental agreement and insurance information.",
              correct: "Here are my documents. This is a rental car — here's the rental agreement and insurance info.",
              explanation: "避免重复结构，使用缩写更自然。",
            },
            formalityVariants: {
              casual: "Yeah, everyone's fine. Here's my stuff. It's a rental — here's the agreement and insurance.",
              standard: "Yes, everyone is fine. Here are my documents. This is a rental car — here's the rental agreement and insurance info.",
              formal: "Yes, all individuals are unharmed. These are my required documents. This vehicle is a rental; accordingly, here is the rental agreement and associated insurance details.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Thank you. I'll write up an accident report. You'll each receive a copy with a case number. You'll need that when you file a claim with your insurance company. It should be ready in about 10 minutes.",
            textZh:
              "谢谢。我来写事故报告。你们每人会拿到一份带案件编号的副本。向保险公司理赔时需要用到。大约 10 分钟就好。",
            culturalNote: "事故报告的案件编号对后续保险理赔非常重要。",
            casualVersion: "Thanks. I'll write up the report. You'll each get a copy with a case number for your insurance claim. Should be about 10 minutes.",
            commonMistake: {
              wrong: "I will write up the accident report.",
              correct: "I'll proceed with writing up the accident report.",
              explanation: "I'll 更口语化，强调即将发生的行动。",
            },
            formalityVariants: {
              casual: "Thanks. I'll write up the report. You'll each get a copy with a case number for your insurance claim. Should be about 10 mins.",
              standard: "Thank you. I'll proceed with writing up the accident report. You'll each receive a copy with a case number. You'll need it for your insurance claim. It should be ready in about 10 minutes.",
              formal: "Thank you. I shall now complete the official accident report. Each of you will be provided with a copy, inclusive of a case number, which will be essential for your insurance claim submission. This process will take approximately ten minutes.",
            },
            keyPhrases: [
              { en: "accident report", zh: "事故报告" },
              { en: "case number", zh: "案件编号" },
              { en: "file a claim", zh: "理赔/申请赔偿" },
            ],
            responseTip: "保存好事故报告和案件编号，保险理赔和租车公司都会需要",
            alternativeExpressions: [
              {
                textEn:
                  "Alright, I'm gonna write this up. You'll both get a copy with a case number — you'll need that for your insurance claims. Give me about 10 minutes.",
                textZh: "好的，我来写报告。你们每人会拿到一份带案件编号的——保险理赔要用。给我大约10分钟。",
                actionHint: "等待并保存报告",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, I'll get the report done. Hold tight — should take about 10 minutes. The case number on it is what your insurance company will need.",
                textZh: "好，我去写报告。等一下——大约10分钟。上面的案件编号是保险公司要用的。",
                actionHint: "记下案件编号",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 目击者 ---
      {
        id: "witness",
        titleZh: "目击者",
        titleEn: "Being a Witness",
        description: "目击事故或事件，向警察描述所见情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Excuse me, sir/ma'am. I understand you witnessed the accident that just happened. Would you be willing to give a statement?",
            textZh: "打扰一下。我了解到您目击了刚才的事故。您愿意做一份笔录吗？",
            casualVersion: "Excuse me. Sir/Ma'am. Heard you saw the accident. Would you be willing to give a statement?",
            culturalNote: "警察直接询问，无需客套。",
            commonMistake: {
              wrong: "Are you willing to make a statement?",
              correct: "Would you be willing to provide a statement?",
              explanation: "provide/give a statement 比 make a statement 更常用。",
            },
            formalityVariants: {
              casual: "Excuse me. Sir/Ma'am. Heard you saw the accident. Willing to give a statement?",
              standard: "Excuse me, sir/ma'am. I understand you witnessed the accident. Would you be willing to provide a statement?",
              formal: "Pardon me, sir/madam. I have been informed that you were a witness to the recent incident. Would you be amenable to providing an official statement?",
            },
            keyPhrases: [
              { en: "witnessed", zh: "目击" },
              { en: "give a statement", zh: "做笔录/提供证词" },
            ],
            responseTip: "作为目击者配合警察是公民义务，如实描述所见即可",
            alternativeExpressions: [
              {
                textEn:
                  "Hi there. I heard you saw what happened. Would you mind giving us a quick statement about the accident?",
                textZh: "你好。我听说你看到了发生的事。你介意给我们做个简短的笔录吗？",
                actionHint: "配合做笔录",
                frequency: "common",
              },
              {
                textEn:
                  "Sorry to bother you. Were you here when the accident happened? We could really use a witness account.",
                textZh: "不好意思打扰了。事故发生时你在这里吗？我们很需要目击者的描述。",
                actionHint: "如实描述所见",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, of course. I saw the whole thing. I was standing right there at the crosswalk.",
            textZh: "好的，当然。我全看到了。我当时就站在人行横道那里。",
            casualVersion: "Yeah, for sure. Saw the whole thing. I was standing right there at the crosswalk.",
            commonMistake: {
              wrong: "I saw all the thing.",
              correct: "I saw the whole thing.",
              explanation: "the whole thing 是惯用表达，表示“全部”。",
            },
            formalityVariants: {
              casual: "Yeah, for sure. Saw the whole thing. I was standing right there at the crosswalk.",
              standard: "Yes, of course. I saw the whole thing. I was standing right there at the crosswalk.",
              formal: "Yes, certainly. I observed the entire event unfold. My position was directly at the aforementioned crosswalk.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Can you describe what you saw? Start from the beginning — what happened first?",
            textZh: "能描述一下你看到的吗？从头开始——先发生了什么？",
            casualVersion: "Can you tell me what you saw? Start from the beginning — what happened first?",
            commonMistake: {
              wrong: "Can you say what you saw?",
              correct: "Can you describe what you saw?",
              explanation: "describe 用于详细描绘，say 只是讲。",
            },
            formalityVariants: {
              casual: "Can you tell me what you saw? Start from the beginning — what happened first?",
              standard: "Can you describe what you saw? Start from the beginning — what happened first?",
              formal: "Would you be able to provide a description of your observations? Please commence from the initial occurrences.",
            },
            keyPhrases: [
              { en: "describe", zh: "描述" },
              { en: "from the beginning", zh: "从头开始" },
              { en: "what happened first", zh: "先发生了什么" },
            ],
            alternativeExpressions: [
              {
                textEn: "Walk me through it. What did you see? Start from the top.",
                textZh: "跟我说说。你看到了什么？从头说起。",
                actionHint: "按时间顺序描述",
                frequency: "common",
              },
              {
                textEn: "Tell me everything you remember. What caught your attention first?",
                textZh: "把你记得的都告诉我。最先引起你注意的是什么？",
                actionHint: "描述最先注意到的事",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "The red car was going straight through the intersection when the light was green. Then the blue car ran the red light and hit the red car on the passenger side.",
            textZh: "红色的车在绿灯时正常直行通过路口。然后蓝色的车闯了红灯，撞到了红车的副驾驶一侧。",
            casualVersion: "The red car was just going straight through the intersection, green light. Then the blue car just blew the red and hit the red car on the passenger side.",
            commonMistake: {
              wrong: "The red car was going straight when the green light.",
              correct: "The red car was going straight through the intersection when the light was green.",
              explanation: "表达时间状语从句时，需要完整的谓语动词。",
            },
            formalityVariants: {
              casual: "Red car was just going straight through the intersection, green light. Then the blue car just blew the red and hit the red car on the passenger side.",
              standard: "The red car was going straight through the intersection when the light was green. Then the blue car ran the red light and hit the red car on the passenger side.",
              formal: "The red vehicle was proceeding directly through the intersection under a green signal. Subsequently, the blue vehicle disregarded the red traffic signal and collided with the red vehicle on the passenger side.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "So you're saying the blue car ran the red light? Are you sure about that? Could you estimate how fast the blue car was going?",
            textZh: "所以你说蓝色的车闯了红灯？你确定吗？能估计一下蓝色的车开多快吗？",
            casualVersion: "So you're saying the blue car blew the red? You sure? Can you guess how fast the blue car was going?",
            commonMistake: {
              wrong: "So you say the blue car ran the red light?",
              correct: "So you're saying the blue car ran the red light?",
              explanation: "表达正在进行或强调的动作，用现在进行时更自然。",
            },
            formalityVariants: {
              casual: "So you're saying the blue car blew the red? You sure? Can you guess how fast it was going?",
              standard: "So you're saying the blue car ran the red light? Are you certain? Can you estimate how fast the blue car was going?",
              formal: "Therefore, you assert that the blue vehicle disregarded the red traffic signal? Are you unequivocally certain? Could you provide an estimation of the blue vehicle's speed?",
            },
            keyPhrases: [
              { en: "ran the red light", zh: "闯红灯" },
              { en: "are you sure", zh: "你确定吗" },
              { en: "estimate", zh: "估计" },
              { en: "how fast", zh: "多快" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "The blue car blew through the red? You're positive? Any idea how fast they were going?",
                textZh: "蓝车闯了红灯？你确定？知道他们大概开多快吗？",
                actionHint: "确认自己看到的是否准确",
                frequency: "common",
              },
              {
                textEn:
                  "Just to confirm — you saw the blue car go through a red light? How fast would you say it was moving?",
                textZh: "确认一下——你看到蓝车闯红灯了？你觉得它开多快？",
                actionHint: "给出速度估计",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, I'm sure. The light had been green for the red car for several seconds already. The blue car was going pretty fast — maybe 40 or 50 miles per hour. It didn't slow down at all.",
            textZh: "是的，我确定。红车那边已经绿灯好几秒了。蓝车开得很快——大概时速 40 到 50 英里。完全没减速。",
            casualVersion: "Yeah, I'm certain. The red car's light was green for a few seconds already. Blue car was flying — probably 40-50 mph. Didn't even slow down.",
            commonMistake: {
              wrong: "The red car's light already green for several seconds.",
              correct: "The red car's light had been green for several seconds.",
              explanation: "强调过去持续到某一点的动作或状态，用过去完成进行时。",
            },
            formalityVariants: {
              casual: "Yeah, I'm certain. Red car's light was green for a few seconds already. Blue car was flying — probably 40-50 mph. Didn't even slow down.",
              standard: "Yes, I'm certain. The red car's light had been green for several seconds. The blue car was going very fast - probably 40 to 50 miles per hour. It didn't slow down at all.",
              formal: "Yes, I am unequivocally certain. The traffic signal for the red vehicle had been green for a duration of several seconds. The blue vehicle was operating at a significantly high speed, likely between 40 and 50 miles per hour. It exhibited no deceleration whatsoever.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Thank you, that's very helpful. Did you see anything else? Were the drivers using their phones, or did you notice anything unusual before the crash?",
            textZh: "谢谢，这非常有帮助。还看到其他什么了吗？司机有没有在用手机，或者碰撞前你有没有注意到什么异常？",
            casualVersion: "Thanks, that's super helpful. Anything else you saw? Driver on their phone, or anything weird before the crash?",
            commonMistake: {
              wrong: "Did you see other anything?",
              correct: "Did you see anything else?",
              explanation: "anything else 是常用搭配，表示“其他的任何事物”。",
            },
            formalityVariants: {
              casual: "Thanks, that's super helpful. Anything else you saw? Driver on their phone, or anything weird before the crash?",
              standard: "Thank you, that's very helpful. Did you see anything else? Was the driver on their phone, or did you notice anything unusual before the impact?",
              formal: "Thank you; that information is highly beneficial. Did you observe any additional details? Specifically, was the driver utilizing a mobile device, or did you perceive any anomalies preceding the collision?",
            },
            keyPhrases: [
              { en: "anything else", zh: "其他" },
              { en: "using their phones", zh: "用手机" },
              { en: "anything unusual", zh: "异常" },
              { en: "before the crash", zh: "碰撞前" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's great info, thanks. Anything else you noticed? Were either of them on their phone or anything like that?",
                textZh: "信息很有用，谢谢。还注意到别的吗？他们有人在看手机什么的吗？",
                actionHint: "回忆其他细节",
                frequency: "common",
              },
              {
                textEn:
                  "Really helpful, appreciate it. Before the crash, did anything seem off? Distracted driving, phone use, anything?",
                textZh: "非常有帮助，感谢。碰撞前有没有什么异常？分心驾驶、用手机什么的？",
                actionHint: "描述任何异常行为",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I think the blue car driver might have been looking at his phone, but I'm not 100% sure. I definitely noticed the car didn't try to brake.",
            textZh: "我觉得蓝车司机可能在看手机，但我不是百分百确定。我确实注意到那辆车完全没有刹车。",
            casualVersion: "I think the blue car driver might've been on his phone, but I'm not 100% sure. I definitely noticed the car didn't brake at all.",
            commonMistake: {
              wrong: "I am not 100% sure.",
              correct: "I'm not 100% sure.",
              explanation: "I'm 的缩写更符合口语习惯。",
            },
            formalityVariants: {
              casual: "I think the blue car driver might've been on his phone, but I'm not 100% sure. I definitely noticed the car didn't brake at all.",
              standard: "I think the blue car driver might have been looking at his phone, but I'm not 100% sure. I did notice that the car didn't brake at all.",
              formal: "I suspect the operator of the blue vehicle may have been distracted by a mobile device, though I cannot state that with absolute certainty. I did, however, observe that the vehicle made no attempt to brake whatsoever.",
            },
            culturalNote:
              '做目击证词时，区分 "确定看到的" 和 "觉得可能" 很重要。用 "I think" 和 "I\'m not sure" 表示不确定。',
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "That's fine — just tell us what you're sure about. Can I get your name and phone number? We may need to follow up with you later. Here's my card with the case number if you remember anything else.",
            textZh:
              "没关系——只需要告诉我们你确定的部分。能留下你的姓名和电话吗？我们之后可能需要跟进。这是我的名片和案件编号，如果你想起其他什么可以联系我们。",
            casualVersion: "That's fine — just tell us what you're sure about. Can I grab your name and number? We might need to follow up. Here's my card and the case number, if you remember anything else, call us.",
            commonMistake: {
              wrong: "Can I leave your name and number?",
              correct: "Can I get your name and number?",
              explanation: "索取信息用 get，而不是 leave。",
            },
            formalityVariants: {
              casual: "That's fine — just tell us what you're sure about. Can I grab your name and number? We might need to follow up. Here's my card and the case number, if you remember anything else, call us.",
              standard: "That's alright - just tell us what you're sure about. Can I get your name and number? We might need to follow up later. Here's my card and the case number, in case you remember anything else you can contact us.",
              formal: "That is perfectly acceptable; kindly relay only what you are definitively certain of. May I obtain your full name and contact telephone number? We may require a follow-up consultation at a later juncture. This is my official card and the incident's case number, for your reference should any further details come to mind.",
            },
            keyPhrases: [
              { en: "follow up", zh: "跟进" },
              { en: "case number", zh: "案件编号" },
              { en: "remember anything else", zh: "想起其他什么" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, just stick to what you know for sure. Can I grab your name and a number? We might need to follow up.",
                textZh: "没关系，只说你确定的就好。能留个姓名和电话吗？我们可能需要跟进。",
                actionHint: "留下联系方式",
                frequency: "common",
              },
              {
                textEn:
                  "That's totally fine. We just need facts. Leave me your contact info in case we need to reach out. Here's the case number for your records.",
                textZh: "完全没问题。我们只需要事实。留下联系方式以防我们联系你。这是案件编号给你留底。",
                actionHint: "记下案件编号",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, my name is Wang Wei. Here's my phone number. I hope everyone involved is okay.",
            textZh: "好的，我叫王伟。这是我的电话。希望当事人都没事。",
            casualVersion: "Yeah, I'm Wang Wei. Here's my number. Hope everyone's okay.",
            commonMistake: {
              wrong: "My name is Wang Wei. This is my number.",
              correct: "My name is Wang Wei. Here's my number.",
              explanation: "Here's 是更口语化的介绍方式。",
            },
            formalityVariants: {
              casual: "Yeah, I'm Wang Wei. Here's my number. Hope everyone's okay.",
              standard: "Sure, my name is Wang Wei. Here's my number. I hope everyone involved is okay.",
              formal: "Certainly, my name is Wang Wei. This is my telephone number. I sincerely hope that all individuals involved in the incident are unharmed.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 车辆事故 ====================
  {
    id: "emergency-car",
    category: "emergency",
    titleZh: "车辆事故",
    titleEn: "Car Accident",
    description: "在国外发生交通事故，与对方交换信息、报警、处理保险",
    otherRole: "对方司机/警察",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 事故现场 ---
      {
        id: "accident-scene",
        titleZh: "事故现场",
        titleEn: "At the Accident Scene",
        description: "发生碰撞后在现场确认安全、与对方交涉、等待警察",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Are you okay? Is anyone hurt?",
            textZh: "你没事吧？有人受伤吗？",
            casualVersion: "You okay? Anyone hurt?",
            formalityVariants: {
              casual: "You okay? Anyone hurt?",
              standard: "Are you okay? Is anyone hurt?",
              formal: "Are you both alright? Has anyone sustained any injuries?",
            },
            culturalNote: "事故后第一件事是确认所有人的安全。如果有人受伤，立即拨打 911（美国）。不要随意移动伤者。",
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "I'm fine, just a little shaken. My neck feels a bit stiff, though. What happened? You came out of nowhere!",
            textZh: "我没事，就是有点震惊。不过脖子有点僵。怎么回事？你突然就冲出来了！",
            casualVersion: "I'm fine, just kinda shook up. My neck's stiff though. What happened? You just popped out!",
            culturalNote: "美国人表达情绪会比较直接",
            formalityVariants: {
              casual: "I'm fine, just kinda shook up. My neck's stiff though. What happened? You just popped out!",
              standard: "I'm fine, just a bit shaken up. But my neck feels stiff. What happened? You just came out of nowhere!",
              formal: "I'm alright, thank you, though I am somewhat startled. I'm experiencing some stiffness in my neck. Could you please explain what occurred? It appeared you emerged unexpectedly.",
            },
            keyPhrases: [
              { en: "shaken", zh: "震惊/吓到了" },
              { en: "stiff", zh: "僵硬" },
              { en: "came out of nowhere", zh: "突然冲出来" },
            ],
            alternativeExpressions: [
              {
                textEn: "I think I'm okay. But my back hurts. Did you not see the stop sign?",
                textZh: "我应该没事。但背有点疼。你没看到停车标志吗？",
                actionHint: "不要当场认全责",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'm sorry, let's stay calm. We should call 911 first, especially if your neck hurts. And let's not move the cars until the police arrive.",
            textZh: "对不起，我们先冷静。应该先打 911，特别是你脖子疼。车先不要动，等警察来。",
            casualVersion: "Look, I'm sorry, let's just chill for a sec. Gotta call 911, especially with your neck hurting. Don't move the cars, just wait for the cops.",
            commonMistake: {
              wrong: "Don't move the car, wait the police.",
              correct: "Don't move the cars, wait for the police.",
              explanation: "wait for sb/sth 是正确搭配，不是 wait sb/sth。",
            },
            formalityVariants: {
              casual: "Look, I'm sorry, let's just chill for a sec. Gotta call 911, especially with your neck hurting. Don't move the cars, just wait for the cops.",
              standard: "I'm sorry, let's calm down first. We should call 911, especially since your neck hurts. Don't move the cars, wait for the police.",
              formal: "My apologies. Let us endeavor to remain calm. I believe it would be prudent to contact emergency services at 911, particularly given your reported neck discomfort. We should refrain from moving the vehicles until law enforcement arrives.",
            },
            culturalNote:
              '在美国，不要在事故现场说 "I\'m sorry" 来承认过错。有些州法律规定，道歉不等于认错，但最好谨慎措辞。',
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "Fine. I've called 911. They said an officer will be here in about 10 minutes. Let's take photos of the damage in the meantime. And we need to exchange insurance information.",
            textZh: "好。我已经打了 911。说大约10分钟警察到。我们先拍损坏的照片吧。还得交换保险信息。",
            casualVersion: "Alright. Already called 911. Cops'll be here in like 10 mins. Let's get some pics of the damage first. And gotta swap insurance info.",
            culturalNote: "事故后交换信息是惯例，保护自己",
            commonMistake: {
              wrong: "I already called 911, they say police will come in 10 minutes.",
              correct: "I already called 911. They said the police will be here in about 10 minutes.",
              explanation: "直接引语要用过去时态'said'，in about 10 minutes 更自然。",
            },
            formalityVariants: {
              casual: "Alright. Already called 911. Cops'll be here in like 10 mins. Let's get some pics of the damage first. And gotta swap insurance info.",
              standard: "Fine. I already called 911. They said the police will be here in about 10 minutes. Let's take photos of the damage first. We also need to exchange insurance information.",
              formal: "Understood. I have already contacted 911. They indicated that law enforcement will arrive in approximately ten minutes. I suggest we document the vehicle damage with photographs. Subsequently, we must exchange insurance particulars.",
            },
            keyPhrases: [
              { en: "called 911", zh: "打了911" },
              { en: "officer", zh: "警察" },
              { en: "take photos of the damage", zh: "拍损坏的照片" },
              { en: "exchange insurance information", zh: "交换保险信息" },
            ],
            vocabNotes: {
              officer: {
                meaningInContext: "在这句话里表示：前来处理事故的警察",
                similarUsage: "类似用法：The officer asked for my license and registration.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Okay, I just called 911 — they're sending someone over. Should be here in about 10. Let's take pictures and swap insurance info while we wait.",
                textZh: "好，我刚打了911——他们派人过来了。大约10分钟到。等的时候我们拍照互换保险信息吧。",
                actionHint: "拍照并交换保险信息",
                frequency: "common",
              },
              {
                textEn:
                  "Done, cops are on the way. About 10 minutes. In the meantime, let's document everything — photos, insurance, the whole nine yards.",
                textZh: "打完了，警察在路上了。大约10分钟。这段时间我们把一切记录下来——照片、保险，全套。",
                actionHint: "利用等待时间收集证据",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, absolutely. Here's my driver's license and insurance card. I'm driving a rental car. Here's the rental agreement too.",
            textZh: "是的，当然。这是我的驾照和保险卡。我开的是租来的车。这是租车合同。",
            casualVersion: "Yeah, for sure. Here's my license and insurance. This is a rental. And here's the rental agreement.",
            culturalNote: "驾照和保险卡是必备信息",
            formalityVariants: {
              casual: "Yeah, for sure. Here's my license and insurance. This is a rental. And here's the rental agreement.",
              standard: "Yes, absolutely. Here's my driver's license and insurance card. I'm driving a rental car. Here's the rental agreement.",
              formal: "Indeed. Hereby presented are my driver's license and insurance card. I am operating a rental vehicle; consequently, I also provide the rental agreement.",
            },
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn:
              "Got it. Here's mine. My name is Sarah Thompson, and my insurance is with Allstate. Can you write down my phone number too? It's 555-7890.",
            textZh: "好的。这是我的。我叫 Sarah Thompson，保险公司是 Allstate。也记一下我的电话号码。555-7890。",
            casualVersion: "Okay, got it. Here's mine. Sarah Thompson, Allstate. Grab my number too: 555-7890.",
            culturalNote: "姓名和保险公司是关键信息",
            formalityVariants: {
              casual: "Okay, got it. Here's mine. Sarah Thompson, Allstate. Grab my number too: 555-7890.",
              standard: "Got it. Here's mine. My name is Sarah Thompson, and my insurance company is Allstate. Also, take down my phone number. 555-7890.",
              formal: "Understood. Here is my identification. My name is Sarah Thompson, and my insurance carrier is Allstate. Please also record my contact number: 555-7890.",
            },
            keyPhrases: [
              { en: "driver's license", zh: "驾照" },
              { en: "insurance card", zh: "保险卡" },
              { en: "rental agreement", zh: "租车合同" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's mine too. Sarah Thompson, Allstate insurance. Jot down my number — 555-7890. My insurance company will probably reach out to you.",
                textZh: "这是我的。Sarah Thompson，Allstate保险。记一下我电话——555-7890。我的保险公司可能会联系你。",
                actionHint: "记录对方信息",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, here you go. I'm Sarah, insured through Allstate. Let me give you my cell too in case we need to be in touch.",
                textZh: "好，给你。我叫Sarah，Allstate保的险。也给你我手机号以防需要联系。",
                actionHint: "保存好对方联系方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Good afternoon. I'm Officer Garcia. I can see there's been a collision. Is everyone okay? Has anyone been injured?",
            textZh: "下午好。我是 Garcia 警官。我看到发生了碰撞。大家都还好吗？有人受伤吗？",
            casualVersion: "Afternoon. Officer Garcia. Looks like we got a fender bender. Everyone okay? Anyone hurt?",
            culturalNote: "美国警察通常直入主题，少客套",
            formalityVariants: {
              casual: "Afternoon. Officer Garcia. Looks like we got a fender bender. Everyone okay? Anyone hurt?",
              standard: "Good afternoon. I'm Officer Garcia. I see we have a collision here. Is everyone doing alright? Any injuries?",
              formal: "Good afternoon. I am Officer Garcia. I observe a vehicular collision has occurred. May I inquire as to the well-being of all parties involved? Are there any reported injuries?",
            },
            keyPhrases: [
              { en: "collision", zh: "碰撞" },
              { en: "injured", zh: "受伤" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey there. Officer Garcia. Looks like we've got a fender bender here. Everyone alright? Nobody hurt?",
                textZh: "你们好。Garcia警官。看起来是小碰擦。大家都没事吧？没人受伤吧？",
                actionHint: "告知是否有人受伤",
                frequency: "common",
              },
              {
                textEn:
                  "Afternoon, folks. I'm Officer Garcia responding to the accident. Anybody need medical attention? Let me see IDs and insurance from both of you.",
                textZh: "下午好各位。我是Garcia警官来处理事故的。有人需要医疗救助吗？让我看看双方的证件和保险。",
                actionHint: "出示证件",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'm fine. The other driver says her neck is a bit stiff. We've already exchanged information and taken photos.",
            textZh: "我没事。对方司机说脖子有点僵。我们已经交换了信息、拍了照片。",
            casualVersion: "I'm good. Other driver said their neck's kinda stiff. We already swapped info and got pics.",
            commonMistake: {
              wrong: "I'm fine. Another driver said her neck a bit stiff.",
              correct: "I'm fine. The other driver said their neck is a bit stiff.",
              explanation: "'another' 指随便哪个，'the other' 指特指的另一方。'their' 更中性。",
            },
            formalityVariants: {
              casual: "I'm good. Other driver said their neck's kinda stiff. We already swapped info and got pics.",
              standard: "I'm fine. The other driver said their neck is a bit stiff. We've already exchanged information and taken photos.",
              formal: "I am unharmed. The other motorist has indicated some stiffness in their neck. We have already proceeded with exchanging necessary information and documenting the scene photographically.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Good. Ma'am, if your neck is bothering you, I'd recommend getting checked at a hospital. I'll need both your licenses and insurance information. I'm going to write up an accident report. Can you each tell me what happened from your perspective?",
            textZh:
              "好的。女士，如果脖子不舒服，建议去医院检查。我需要双方的驾照和保险信息。我来写事故报告。你们分别说一下从各自角度看到的经过。",
            casualVersion: "Alright. Ma'am, if your neck's still bothering you, go get it checked. I'm gonna need both your licenses and insurance info. I'll write up the report. Need each of you to tell me your side of the story.",
            commonMistake: {
              wrong: "I need both of your license and insurance.",
              correct: "I'll need both your driver's licenses and insurance information.",
              explanation: "license 需要复数，information 不可数，所以是 insurance information。",
            },
            formalityVariants: {
              casual: "Alright. Ma'am, if your neck's still bothering you, go get it checked. I'm gonna need both your licenses and insurance info. I'll write up the report. Need each of you to tell me your side of the story.",
              standard: "Good. Ma'am, if your neck is bothering you, I advise you to get it checked out at a hospital. I'll need both your driver's licenses and insurance information. I'll be writing up an accident report. I need each of you to tell me what happened from your perspective.",
              formal: "Understood. Madam, should you experience persistent discomfort in your neck, I strongly recommend seeking medical evaluation. I shall require both your driver's licenses and insurance documentation. I will then proceed with completing an official accident report. Each of you will then be requested to provide an account of the incident from your individual perspectives.",
            },
            keyPhrases: [
              { en: "accident report", zh: "事故报告" },
              { en: "perspective", zh: "角度/视角" },
              { en: "getting checked", zh: "去检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I need to hear both sides. Start from the beginning — what were you doing before the accident?",
                textZh: "我需要听双方的说法。从头说——事故前你在做什么？",
                actionHint: "如实描述经过",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I was driving north on Oak Street. I slowed down at the intersection, but I didn't see the other car coming from the right. It happened very fast.",
            textZh: "我当时在橡树街向北行驶。在路口减速了，但没看到右边过来的车。发生得太快了。",
            casualVersion: "I was heading north on Oak. Slowed down at the intersection, but didn't even see the car from the right. It all happened so fast.",
            commonMistake: {
              wrong: "I driving north on Oak Street. I slow down at intersection.",
              correct: "I was driving north on Oak Street. I slowed down at the intersection.",
              explanation: "叙述过去事件要用过去时态，at the intersection 是固定搭配。",
            },
            formalityVariants: {
              casual: "I was heading north on Oak. Slowed down at the intersection, but didn't even see the car from the right. It all happened so fast.",
              standard: "I was driving north on Oak Street. I slowed down at the intersection, but I didn't see the car coming from the right. It happened too fast.",
              formal: "I was proceeding northbound on Oak Street. I initiated a deceleration maneuver upon approaching the intersection; however, I failed to perceive the approaching vehicle from the right. The incident transpired with considerable rapidity.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Thank you. I'll include both accounts in the report. Here's the case number — you'll need it when you contact your insurance company and the rental car agency. The report will be available online in about 3 days. Drive safely.",
            textZh:
              "谢谢。我会把双方的说法都写进报告。这是案件编号——联系保险公司和租车公司时需要用到。报告大约3天后可以在网上查到。注意安全驾驶。",
            casualVersion: "Thanks. I'll get both your stories in the report. Here's your case number - you'll need it for your insurance and rental company. Report should be online in about 3 days. Drive safe.",
            culturalNote: "案件编号很重要，便于追踪",
            commonMistake: {
              wrong: "Here is your case number, you need it contact insurance and rental company.",
              correct: "Here's your case number - you'll need this when contacting your insurance and rental car company.",
              explanation: "need it for/when contacting 更自然，'this' 指代 case number。",
            },
            formalityVariants: {
              casual: "Thanks. I'll get both your stories in the report. Here's your case number - you'll need it for your insurance and rental company. Report should be online in about 3 days. Drive safe.",
              standard: "Thank you. I'll include both accounts in the report. Here's your case number - you'll need this when contacting your insurance and rental car company. The report should be available online in about 3 days. Drive safely.",
              formal: "Thank you. I will incorporate both of your statements into the official report. This is your incident case number, which will be requisite for all communications with your insurance provider and rental car agency. The full report is expected to be accessible online within approximately three days. Please exercise caution while driving.",
            },
            keyPhrases: [
              { en: "case number", zh: "案件编号" },
              { en: "accounts", zh: "说法/陈述" },
              { en: "rental car agency", zh: "租车公司" },
              { en: "available online", zh: "可以在网上查到" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it. I'll put both versions in the report. Here's your case number — keep it for insurance. Report goes online in about 3 days.",
                textZh: "明白了。双方的说法我都会写进报告。这是案件编号——保险用。报告大约3天后可以网上查。",
                actionHint: "保存案件编号",
                frequency: "common",
              },
              {
                textEn:
                  "Alright, I've got everything I need. The report will be filed with this case number. You can download it online in a few days. Drive safe.",
                textZh: "好的，需要的信息都有了。报告会用这个案件编号归档。几天后可以网上下载。安全驾驶。",
                actionHint: "等几天后网上查报告",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 事故后续处理 ---
      {
        id: "post-accident",
        titleZh: "事故后续处理",
        titleEn: "Post-Accident Follow-up",
        description: "事故后联系租车公司和保险公司处理后续",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I need to report a car accident. I'm renting one of your vehicles — the rental agreement number is R-445832.",
            textZh: "你好，我需要报告一起交通事故。我租了你们的车——租车合同号是 R-445832。",
            casualVersion: "Hey, gotta report a car accident. Renting one of your cars, agreement number's R-445832.",
            commonMistake: {
              wrong: "I must report a car accident.",
              correct: "I need to report a car accident.",
              explanation: "need to/have to 更自然地表达“需要”，must 语气太强。",
            },
            formalityVariants: {
              casual: "Hey, gotta report an accident. Rental agreement R-445832.",
              standard: "Hello, I need to report a car accident. My rental agreement number is R-445832.",
              formal:
                "Good morning/afternoon, I am calling to report a vehicle accident. My rental agreement number is R-445832.",
            },
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn:
              "I'm sorry to hear that. Are you safe? Can you tell me what happened? I'll also need the police report number and the location of the vehicle.",
            textZh: "很遗憾听到这个。您安全吗？能告诉我发生了什么吗？我还需要报案编号和车辆位置。",
            commonMistake: {
              wrong: "I am sorry hear that.",
              correct: "I'm sorry to hear that.",
              explanation: "sorry 后接动词通常用不定式 to + 动词。",
            },
            keyPhrases: [
              { en: "police report number", zh: "报案编号" },
              { en: "location of the vehicle", zh: "车辆位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, I hope you're okay. What happened exactly? And I'll need the police report number and where the car is right now.",
                textZh: "天哪，希望你没事。具体怎么回事？另外我需要报案编号和车目前的位置。",
                actionHint: "提供事故详情",
                frequency: "common",
              },
              {
                textEn:
                  "I'm sorry to hear that. First off — are you injured? Then walk me through what happened. I'll also need the case number from the police.",
                textZh: "很遗憾。首先——你受伤了吗？然后跟我说说经过。我还需要警察给的案件编号。",
                actionHint: "先确认安全再说明经过",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry to hear that. You okay? What happened? Also need the police report number and where the car is.",
            formalityVariants: {
              casual: "Oh, sorry. You okay? What happened? Need the police report # and car's location.",
              standard:
                "I'm sorry to hear that. Are you safe? Can you tell me what happened? I'll also need the police report number and the vehicle's location.",
              formal:
                "I'm truly sorry to hear of this incident. May I inquire about your safety? Please provide a brief account of what transpired. Additionally, I will require the police report number and the precise location of the vehicle.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I'm fine. There was a minor collision at an intersection. The police report number is 2026-03-0589. The car is drivable but has a dent on the front bumper and a cracked headlight.",
            textZh:
              "是的，我没事。在一个路口发生了轻微碰撞。报案编号是 2026-03-0589。车还能开，但前保险杠凹了一个坑，还有一个前灯裂了。",
            casualVersion:
              "Yeah, I'm fine. Just a little bump at an intersection. Police report's 2026-03-0589. Car still drives, but the front bumper's dented and a headlight's cracked.",
            commonMistake: {
              wrong: "My car can drive.",
              correct: "The car is drivable.",
              explanation: "drivable/still drives 更自然，'My car can drive' 语法上没错但听起来不地道。",
            },
            formalityVariants: {
              casual:
                "Yeah, I'm good. Small bump at an intersection. Police report is 2026-03-0589. Car drives, but bumper's dented, headlight's cracked.",
              standard:
                "Yes, I'm fine. There was a minor collision at an intersection. The police report number is 2026-03-0589. The car is drivable but has a dent on the front bumper and a cracked headlight.",
              formal:
                "Yes, I am unharmed. A minor collision occurred at an intersection. The police report identification is 2026-03-0589. The vehicle remains operational, however, it sustained a dent to the front bumper and a cracked headlight.",
            },
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn: "Thank you for the details. Did you purchase our collision damage waiver when you rented the car?",
            textZh: "谢谢提供的信息。您租车时买了我们的碰撞损失免责险吗？",
            culturalNote: "租车时务必了解保险选项",
            commonMistake: {
              wrong: "Did you buy our CDW?",
              correct: "Did you purchase our collision damage waiver?",
              explanation: "在不确定对方是否理解缩写时，使用全称更清晰。",
            },
            keyPhrases: [
              { en: "collision damage waiver", zh: "碰撞损失免责险（CDW）" },
              { en: "dent", zh: "凹痕" },
              { en: "cracked headlight", zh: "裂了的前灯" },
              { en: "drivable", zh: "还能开" },
            ],
            vocabNotes: {
              waiver: {
                meaningInContext: "在这句话里表示：租车公司提供的保险，免除你对车辆损坏的赔偿责任",
                similarUsage: "类似用法：The damage waiver costs $15 per day but covers most repairs.",
              },
            },
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Got it. Quick question — did you opt for the collision damage waiver at checkout? That's gonna make a big difference here.",
                textZh: "了解了。问一下——你取车时买了碰撞损失免责险吗？这会有很大区别。",
                actionHint: "回忆是否买了保险",
                frequency: "common",
              },
              {
                textEn:
                  "Okay. Do you remember if you took our damage coverage when you picked up the car? Check your rental agreement if you're not sure.",
                textZh: "好的。你记得取车时有没有买我们的损坏保险？不确定的话看看租车合同。",
                actionHint: "查看租车合同上的保险条款",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks for the info. Buy our collision damage waiver when you rented it?",
            formalityVariants: {
              casual: "Thanks. Get our damage waiver when you rented?",
              standard:
                "Thank you for the details. Did you purchase our collision damage waiver when you rented the car?",
              formal:
                "Thank you for providing those particulars. May I inquire if you opted for our collision damage waiver at the time of rental?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I did. I bought the full coverage option. Does that cover the damage?",
            textZh: "买了。我买的是全险。这些损坏都在覆盖范围内吗？",
            casualVersion: "Yeah, I did. Got the full coverage. Does that cover the damage?",
            commonMistake: {
              wrong: "I bought the full insurance.",
              correct: "I bought the full coverage option.",
              explanation: "在租车语境中，'full coverage' 是更地道的说法，避免直译 'full insurance'。",
            },
            formalityVariants: {
              casual: "Yep, I did. Got full coverage. Is this covered?",
              standard: "Yes, I did. I bought the full coverage option. Does that cover the damage?",
              formal:
                "Yes, I did. I selected the full coverage option. Will that particular coverage extend to these damages?",
            },
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn:
              "With the full collision damage waiver, you won't be responsible for the repair costs. There's a $250 processing fee, but no additional charges for the damage. You can continue using the car if it's safe to drive, or we can arrange a replacement vehicle. Which would you prefer?",
            textZh:
              "有全额碰撞损失免责险的话，您不需要承担维修费用。有250美元的手续费，但不会有额外的损坏赔偿。如果车还能安全驾驶，可以继续使用，或者我们可以安排换一辆车。您选哪种？",
            commonMistake: {
              wrong: "You no need pay for repair cost.",
              correct: "You won't be responsible for repair costs.",
              explanation: "避免直接使用 'no need'，用 'won't be responsible for' 更地道。",
            },
            keyPhrases: [
              { en: "repair costs", zh: "维修费用" },
              { en: "processing fee", zh: "手续费" },
              { en: "replacement vehicle", zh: "替换车辆" },
              { en: "responsible for", zh: "承担/负责" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news — with the full coverage, you're off the hook for repairs. There's a $250 processing fee, but that's it. You can keep driving it or we'll swap it for another one. Up to you.",
                textZh:
                  "好消息——有全险的话，维修费不用你出。有250美元手续费，但就这些。你可以继续开或者我们换一辆。你定。",
                actionHint: "选择继续用还是换车",
                frequency: "common",
              },
              {
                textEn:
                  "Since you've got the full waiver, the damage is on us minus a $250 fee. Want to keep using the car or would you rather get a replacement?",
                textZh: "你有全额免责险，损坏我们承担，就收250美元手续费。继续用这辆还是换一辆？",
                actionHint: "根据车况决定",
                frequency: "common",
              },
            ],
            casualVersion:
              "With the full collision waiver, you're not on the hook for repairs. Just a $250 processing fee, no extra charges for the damage. You can keep using it if it's safe, or we can get you a new car. What do you want to do?",
            formalityVariants: {
              casual:
                "Full waiver means no repair costs for you, just a $250 fee. Keep using it if it's safe, or we can swap it. What's best?",
              standard:
                "With the full collision damage waiver, you won't be responsible for the repair costs. There's a $250 processing fee, but no additional charges for the damage. You can continue using the car if it's safe to drive, or we can arrange a replacement vehicle. Which would you prefer?",
              formal:
                "Given the full collision damage waiver, you will not be liable for the repair expenses. A $250 processing fee will apply, though no additional charges for the damage will be levied. You may continue to operate the vehicle should it be deemed safe, or we can facilitate the arrangement of a replacement. Which option would you prefer to proceed with?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'd prefer a replacement, since the headlight is cracked and driving at night might not be safe. Where can I swap it?",
            textZh: "我想换一辆，因为前灯裂了，晚上开不太安全。去哪里换？",
            casualVersion:
              "I'd rather get a replacement, since the headlight's cracked and driving at night might not be safe. Where can I swap it out?",
            commonMistake: {
              wrong: "I want to change a car.",
              correct: "I'd prefer a replacement.",
              explanation: "'change a car' 不地道，用 'replace' 或 'swap' 更自然。",
            },
            formalityVariants: {
              casual: "Yeah, I'd rather get a new one, headlight's cracked, not safe at night. Where can I swap it?",
              standard:
                "I'd prefer a replacement, since the headlight is cracked and driving at night might not be safe. Where can I swap it?",
              formal:
                "I would prefer a replacement vehicle, as the cracked headlight renders night driving potentially unsafe. Could you please advise on the location for this exchange?",
            },
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn:
              "You can bring it to our downtown branch at 200 Market Street. They're open until 8 PM today. Bring the police report and your rental agreement. They'll have a replacement ready for you. Is there anything else I can help with?",
            textZh:
              "您可以把车开到我们市中心门店，Market Street 200号。今天营业到晚上8点。带上报案记录和租车合同。他们会给您准备好替换车辆。还有其他需要帮忙的吗？",
            commonMistake: {
              wrong: "Bring your police report and rental agreement to downtown branch.",
              correct: "Bring your police report and rental agreement (to our downtown branch).",
              explanation: "中文常省略介词和物主代词，英文需要补齐。",
            },
            keyPhrases: [
              { en: "downtown branch", zh: "市中心门店" },
              { en: "swap", zh: "换/更换" },
              { en: "replacement ready", zh: "替换车准备好" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Head over to our branch on Market Street — number 200. They close at 8 tonight. Bring the police report and rental papers. They'll have a car waiting for you.",
                textZh: "去我们Market Street的门店——200号。今晚8点关门。带上报案记录和租车合同。他们会给你备好车。",
                actionHint: "尽快去换车",
                frequency: "common",
              },
              {
                textEn:
                  "Our nearest location is 200 Market Street downtown, open till 8 PM. Swing by with your documents and they'll sort you out with a new car.",
                textZh: "我们最近的网点在市中心Market Street 200号，8点前营业。带上证件过去，他们会给你安排新车。",
                actionHint: "带齐材料去门店",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just take it to our downtown branch, 200 Market Street. They're open till 8 tonight. Bring the police report and your rental agreement. They'll have a replacement ready. Anything else?",
            formalityVariants: {
              casual:
                "Just take it to our downtown branch, 200 Market Street. Open till 8. Bring the report and agreement. They'll have a new one. Anything else?",
              standard:
                "You can bring it to our downtown branch at 200 Market Street. They're open until 8 PM today. Bring the police report and your rental agreement. They'll have a replacement ready for you. Is there anything else I can help with?",
              formal:
                "You may take the vehicle to our downtown branch, located at 200 Market Street. Their operating hours extend until 8 PM this evening. Please ensure you bring the police report and your rental agreement. A replacement vehicle will be prepared for your collection. Is there anything further I can assist you with?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Should I also file a claim with my own travel insurance, or does the rental waiver cover everything?",
            textZh: "我还需要向自己的旅行保险提交理赔吗，还是租车的免责险就全覆盖了？",
            casualVersion:
              "Do I also need to file with my travel insurance, or does the rental waiver cover everything?",
            commonMistake: {
              wrong: "Should I also report to my travel insurance?",
              correct: "Should I also file a claim with my own travel insurance?",
              explanation: "与保险公司相关，'file a claim' 是地道表达，'report' 不够准确。",
            },
            formalityVariants: {
              casual: "Do I need to hit up my travel insurance too, or does the rental waiver cover it all?",
              standard:
                "Should I also file a claim with my own travel insurance, or does the rental waiver cover everything?",
              formal:
                "Would it be advisable for me to also submit a claim to my personal travel insurance policy, or does the rental waiver provide comprehensive coverage for all aspects?",
            },
          },
          {
            speaker: "them",
            role: "租车公司客服",
            textEn:
              "The waiver covers the vehicle damage. But if you have any personal medical expenses, loss of belongings, or if the other driver files a liability claim against you, your travel insurance would cover that. I'd recommend notifying your travel insurance company as well, just in case.",
            textZh:
              "免责险覆盖车辆损坏。但如果您有个人医疗费用、物品丢失，或者对方司机向您提出责任索赔，您的旅行保险会覆盖这些。建议也通知一下您的旅行保险公司，以防万一。",
            commonMistake: {
              wrong: "Waiver cover car damage, but if you have medical, lost things, travel insurance will cover.",
              correct: "The waiver covers the vehicle damage. But if you have any personal medical expenses, loss of belongings, or if the other driver files a liability claim against you, your travel insurance would cover that.",
              explanation: "动词需要时态和主谓一致，名词也需要修饰或复数。",
            },
            keyPhrases: [
              { en: "personal medical expenses", zh: "个人医疗费用" },
              { en: "loss of belongings", zh: "物品丢失" },
              { en: "liability claim", zh: "责任索赔" },
              { en: "just in case", zh: "以防万一" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The rental waiver takes care of the car itself. But anything medical, lost stuff, or if the other driver comes after you — that's where your travel insurance kicks in. I'd give them a heads up just to be safe.",
                textZh:
                  "租车免责险管的是车本身。但医疗、丢失物品、或者对方司机来找你赔——那就需要你的旅行保险了。建议通知一下保险公司以防万一。",
                actionHint: "也通知旅行保险公司",
                frequency: "common",
              },
              {
                textEn:
                  "The waiver handles vehicle repairs. Personal stuff — medical bills, lost belongings, liability claims — that falls under your travel insurance. Definitely worth notifying them.",
                textZh:
                  "免责险管车辆维修。个人方面——医疗费、丢失物品、责任索赔——属于你的旅行保险范围。一定值得通知他们。",
                actionHint: "两边保险都要报",
                frequency: "common",
              },
            ],
            casualVersion:
              "The waiver covers the car damage. But for personal medical stuff, lost belongings, or if the other guy sues you, your travel insurance covers that. I'd just let your travel insurance company know too, just in case.",
            culturalNote: "美国保险非常复杂，常常需要多方报备，以防万一。",
            formalityVariants: {
              casual:
                "Waiver covers car damage. But for medical, lost stuff, or if the other driver sues, your travel insurance handles that. Just tell them too, for good measure.",
              standard:
                "The waiver covers the vehicle damage. But if you have any personal medical expenses, loss of belongings, or if the other driver files a liability claim against you, your travel insurance would cover that. I'd recommend notifying your travel insurance company as well, just in case.",
              formal:
                "The waiver exclusively covers damage to the vehicle itself. However, should you incur personal medical expenses, experience loss of personal belongings, or face a liability claim initiated by the other party, your personal travel insurance would be the relevant coverage. I would advise informing your travel insurance provider as a precautionary measure.",
            },
          },
          {
            speaker: "you",
            textEn: "That makes sense. I'll do both. Thank you for your help.",
            textZh: "有道理。两边都通知。谢谢你的帮助。",
            casualVersion: "Makes sense. I'll do both. Thanks for the help.",
            commonMistake: {
              wrong: "I will notify both.",
              correct: "I'll do both.",
              explanation: "'do both' 更口语化，也可以说 'notify both'。",
            },
            formalityVariants: {
              casual: "Yep, makes sense. I'll do both. Thanks.",
              standard: "That makes sense. I'll do both. Thank you for your help.",
              formal: "That is clear. I shall proceed with both actions. I appreciate your assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 自然灾害 ====================
  {
    id: "emergency-natural",
    category: "emergency",
    titleZh: "自然灾害",
    titleEn: "Natural Disaster",
    description: "在国外遇到地震、台风等自然灾害，了解疏散和紧急避难",
    otherRole: "救援人员/酒店员工",
    otherRoleIcon: "alert-triangle",
    flows: [
      // --- Flow 1: 地震应对 ---
      {
        id: "earthquake",
        titleZh: "地震应对",
        titleEn: "Earthquake Response",
        description: "在酒店遇到地震，了解如何避险和疏散",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "酒店广播",
            textEn:
              "Attention all guests. An earthquake has been detected. Please take cover under a desk or table immediately. Stay away from windows and heavy furniture. Do not use the elevators.",
            textZh: "各位旅客请注意。检测到地震。请立即躲到桌子下面。远离窗户和重型家具。不要使用电梯。",
            casualVersion: "Everyone! Earthquake detected! Get under a desk/table NOW. Stay clear of windows, heavy stuff. NO elevators.",
            commonMistake: {
              wrong: "Please attention all guests. An earthquake.",
              correct: "Attention all guests. An earthquake has been detected.",
              explanation: "在紧急广播中，Attention all guests 已经足够，不需要加 Please。",
            },
            formalityVariants: {
              casual: "Everyone! Earthquake detected! Get under a desk/table NOW. Stay clear of windows, heavy stuff. NO elevators.",
              standard: "Attention all guests. An earthquake has been detected. Please take cover under a desk or table immediately. Stay away from windows and heavy furniture. Do not use the elevators.",
              formal: "Attention, esteemed guests. We have detected seismic activity. We kindly request that you take immediate shelter under a sturdy desk or table. Please maintain a safe distance from windows and heavy furnishings, and refrain from using the elevators.",
            },
            keyPhrases: [
              { en: "earthquake", zh: "地震" },
              { en: "take cover", zh: "躲避" },
              { en: "stay away from windows", zh: "远离窗户" },
              { en: "do not use the elevators", zh: "不要使用电梯" },
            ],
            vocabNotes: {
              "take cover": {
                meaningInContext: "在这句话里表示：找掩护物躲起来保护自己",
                similarUsage: "类似用法：Take cover under the doorframe if there's no table nearby.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "This is an emergency announcement. We are experiencing an earthquake. Get under a table or desk right now. Stay away from windows. Do not attempt to use elevators.",
                textZh: "紧急通知。正在发生地震。立刻躲到桌子下面。远离窗户。不要尝试使用电梯。",
                actionHint: "立刻找掩护",
                frequency: "common",
              },
              {
                textEn:
                  "Attention — earthquake in progress. Drop, cover, hold on. Avoid windows and heavy objects. Elevators are shut down — use stairs only after shaking stops.",
                textZh: "注意——正在发生地震。蹲下、掩护、抓紧。避开窗户和重物。电梯已关闭——晃动停止后只能走楼梯。",
                actionHint: "执行蹲下掩护抓紧",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Excuse me! Is this a big earthquake? Should we evacuate the building?",
            textZh: "请问！这是大地震吗？我们要撤离建筑吗？",
            casualVersion: "Yo! This a big quake? Gotta get out?",
            culturalNote: "在美国紧急情况时，直接提出问题即可，不必过于客套。",
            commonMistake: {
              wrong: "Is this big earthquake?",
              correct: "Is this a big earthquake?",
              explanation: "earthquake是可数名词，前面需要加不定冠词a。",
            },
            formalityVariants: {
              casual: "Whoa, this a big one? Should we bail?",
              standard: "Excuse me! Is this a big earthquake? Should we evacuate the building?",
              formal: "Pardon me, could you clarify the severity of this seismic event? Is evacuation of the premises necessary at this time?",
            },
          },
          {
            speaker: "them",
            role: "酒店员工",
            textEn:
              "Stay calm. During the shaking, stay where you are — under the table is safest. Drop, cover, and hold on. Once the shaking stops, we'll guide everyone to the emergency exits. Use the stairs, not the elevators.",
            textZh:
              "保持冷静。晃动期间待在原地——桌子下面最安全。蹲下、掩护、抓紧。等晃动停止后，我们会引导大家走紧急出口。走楼梯，不要坐电梯。",
            culturalNote: "美国地震避险口诀",
            casualVersion: "Relax. Shaking? Stay put, under the table's best. Drop, cover, hold on. Once it stops, we'll get you to the exits. Stairs, not elevators.",
            commonMistake: {
              wrong: "Keep calm.",
              correct: "Stay calm.",
              explanation: "在劝人保持冷静时，美式英语中常用 Stay calm。",
            },
            formalityVariants: {
              casual: "Chill. When it's shaking, just stay put, under a table's best. Drop, cover, hold on. After it stops, we'll lead you out. Stairs, no elevators.",
              standard: "Stay calm. During the shaking, stay where you are — under the table is safest. Drop, cover, and hold on. Once the shaking stops, we will guide you to the emergency exits. Use the stairs, not the elevators.",
              formal: "Maintain your composure, please. While the seismic activity persists, remain in your current location; beneath a table or desk offers the highest degree of safety. Implement the 'Drop, Cover, and Hold On' protocol. Following the cessation of the shaking, we will direct all occupants to the designated emergency exits. Stairwells are to be utilized; elevator use is prohibited.",
            },
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "shaking", zh: "晃动" },
              { en: "drop, cover, and hold on", zh: "蹲下、掩护、抓紧" },
              { en: "emergency exits", zh: "紧急出口" },
              { en: "stairs", zh: "楼梯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everyone stay down! Get under something solid. Don't run outside during the shaking!",
                textZh: "大家蹲下！躲到坚固的东西下面。晃动期间不要往外跑！",
                actionHint: "听从指示躲避",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The shaking has stopped. What do we do now? Are there aftershocks?",
            textZh: "不晃了。现在怎么办？还会有余震吗？",
            casualVersion: "Okay, it stopped. Now what? Aftershocks coming?",
            commonMistake: {
              wrong: "What should we do now?",
              correct: "What do we do now?",
              explanation: "在询问接下来的行动时，What do we do now? 更自然和口语化。",
            },
            formalityVariants: {
              casual: "It stopped. So, what next? Any more shaking coming?",
              standard: "The shaking has stopped. What do we do now? Are there aftershocks?",
              formal: "The seismic tremors have ceased. May I inquire as to the next steps? Furthermore, is there a likelihood of subsequent aftershocks?",
            },
          },
          {
            speaker: "them",
            role: "酒店员工",
            textEn:
              "Yes, aftershocks are common after an earthquake. Please follow me to the assembly point in the parking lot. Bring your passport, phone, and shoes. Don't go back for other belongings. Watch out for broken glass and fallen objects.",
            textZh:
              "是的，地震后余震很常见。请跟我走到停车场的集合点。带上护照、手机和鞋子。不要回去拿其他东西。注意碎玻璃和掉落的物品。",
            casualVersion: "Yeah, aftershocks are normal. Follow me to the parking lot assembly point. Grab your passport, phone, shoes. Don't go back for other stuff. Watch for glass and falling things.",
            commonMistake: {
              wrong: "Be careful broken glass.",
              correct: "Watch out for broken glass.",
              explanation: "Watch out for... 是更地道的提醒“小心...”的表达。",
            },
            formalityVariants: {
              casual: "Yep, aftershocks happen. Just follow me to the parking lot. Grab your passport, phone, shoes. Nothing else. Watch your step for glass and falling stuff.",
              standard: "Yes, aftershocks are common after an earthquake. Please follow me to the assembly point in the parking lot. Bring your passport, phone, and shoes. Don't go back for anything else. Watch out for broken glass and falling objects.",
              formal: "Indeed, aftershocks frequently occur subsequent to an earthquake. Kindly proceed with me to the designated assembly point located in the parking lot. Please ensure you have your passport, mobile phone, and footwear. Do not return for any other possessions. Exercise caution regarding shattered glass and dislodged items.",
            },
            keyPhrases: [
              { en: "aftershocks", zh: "余震" },
              { en: "assembly point", zh: "集合点" },
              { en: "broken glass", zh: "碎玻璃" },
              { en: "fallen objects", zh: "掉落的物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There could be aftershocks, so we need to get outside. Follow me to the parking lot — that's our meeting point. Grab your passport and shoes, leave everything else.",
                textZh: "可能有余震，所以我们要出去。跟我到停车场——那是集合点。拿上护照和鞋子，别的都不要。",
                actionHint: "只拿必需品快速撤离",
                frequency: "common",
              },
              {
                textEn:
                  "Aftershocks can hit any time. Everyone follow me — we're heading to the assembly area. Watch your step, there might be broken glass on the floor.",
                textZh: "余震随时可能来。大家跟我走——我们去集合区域。注意脚下，地上可能有碎玻璃。",
                actionHint: "小心行走跟随引导",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How will we know when it's safe to go back inside? And what if the building is damaged?",
            textZh: "怎么知道什么时候可以安全地回去？如果建筑受损了怎么办？",
            casualVersion: "How'll we know when it's cool to go back in? What if the building's messed up?",
            commonMistake: {
              wrong: "What if building damaged?",
              correct: "What if the building is damaged?",
              explanation: "building是可数名词，且特指，需要加定冠词the；damaged前需有be动词。",
            },
            formalityVariants: {
              casual: "When can we go back in? What if the place is trashed?",
              standard: "How will we know when it's safe to go back inside? What if the building is damaged?",
              formal: "Could you advise on the criteria for safely re-entering the premises? What protocols are in place should structural damage to the building be ascertained?",
            },
          },
          {
            speaker: "them",
            role: "酒店员工",
            textEn:
              "The building needs to be inspected before anyone can re-enter. That could take a few hours. If the building is unsafe, we'll arrange transportation to another hotel. In the meantime, we have water and emergency blankets at the assembly point.",
            textZh:
              "建筑需要检查后才能让人进入。可能需要几个小时。如果建筑不安全，我们会安排交通送大家去另一家酒店。同时，集合点有水和应急毯。",
            casualVersion: "They gotta check the building first. Could be hours. If it's not safe, we'll get you to another hotel. Meanwhile, water and blankets are at the assembly point.",
            commonMistake: {
              wrong: "Building need inspect.",
              correct: "The building needs to be inspected.",
              explanation: "The building is特指，且动词inspect需要用被动语态to be inspected。",
            },
            formalityVariants: {
              casual: "They gotta inspect the place before anyone goes back in. Might be hours. If it's busted, we'll get you to a different hotel. We got water and blankets at the assembly point, though.",
              standard: "The building needs to be inspected before anyone can re-enter. That could take a few hours. If the building is unsafe, we will arrange transportation to another hotel. In the meantime, water and emergency blankets are available at the assembly point.",
              formal: "Re-entry into the building is contingent upon a thorough structural inspection, which may require several hours. Should the building be deemed structurally unsound, alternative accommodation will be arranged, including transportation to another hotel. Concurrently, potable water and emergency blankets are provided at the designated assembly point.",
            },
            keyPhrases: [
              { en: "inspected", zh: "检查" },
              { en: "re-enter", zh: "重新进入" },
              { en: "transportation", zh: "交通/运输" },
              { en: "emergency blankets", zh: "应急毯" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nobody goes back in until the building gets checked by inspectors. Could be a few hours. If it's not safe, we'll get you to another hotel. We've got water and blankets here in the meantime.",
                textZh:
                  "在检查人员检查完之前谁也不能回去。可能要几个小时。如果不安全，我们会送你们去另一家酒店。这期间我们有水和毯子。",
                actionHint: "耐心等待检查结果",
                frequency: "common",
              },
              {
                textEn:
                  "We can't let anyone back in until it's been inspected. Sit tight — it'll take a while. If the building's damaged, we'll arrange alternative accommodation.",
                textZh: "检查完之前不能让人进去。耐心等一下——会需要一段时间。如果建筑受损了，我们会安排替代住处。",
                actionHint: "在集合点等待",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there a way to check on local emergency information? I don't have a local SIM card.",
            textZh: "有办法查当地的紧急信息吗？我没有当地的SIM卡。",
            casualVersion: "Any way to check local emergency stuff? Don't got a local SIM.",
            commonMistake: {
              wrong: "I have no local SIM card.",
              correct: "I don't have a local SIM card.",
              explanation: "否定句中用 don't have 更常见和自然。",
            },
            formalityVariants: {
              casual: "How can I check local emergency info? No local SIM.",
              standard: "Is there a way to check on local emergency information? I don't have a local SIM card.",
              formal: "May I inquire about methods for accessing local emergency information, particularly as I do not possess a local SIM card?",
            },
          },
          {
            speaker: "them",
            role: "酒店员工",
            textEn:
              "Our hotel Wi-Fi is still working. You can check the US Geological Survey website for earthquake updates. Also, tune in to local TV or radio. Your country's embassy may have an emergency app too. The most important thing right now is to stay at the assembly point until we get the all-clear.",
            textZh:
              "酒店的Wi-Fi还能用。你可以在美国地质调查局网站上查看地震动态。也可以看当地电视或广播。你们国家的大使馆可能也有紧急App。现在最重要的是留在集合点，直到宣布安全。",
            casualVersion: "Hotel Wi-Fi's still up. Check USGS for quake updates. Or local TV/radio. Your embassy might have an app too. Right now, just stay at the assembly point till they say it's safe.",
            commonMistake: {
              wrong: "Your country embassy.",
              correct: "Your country's embassy.",
              explanation: "表达所属关系时需要用所有格's。",
            },
            formalityVariants: {
              casual: "Wi-Fi's good here. Hit up the USGS site for quake news. Or local TV/radio. Your embassy probably has an emergency app. Just stay here at the assembly point for now, till they give the all clear.",
              standard: "Our hotel Wi-Fi is still working. You can check the US Geological Survey website for earthquake updates. Also, tune in to local TV or radio. Your country's embassy might also have an emergency App. For now, the most important thing is to stay at the assembly point until it's declared safe.",
              formal: "Our hotel's Wi-Fi network remains operational. You may consult the US Geological Survey website for the latest earthquake updates. Additionally, local television and radio broadcasts are valuable sources of information. It is also possible that your nation's embassy maintains an emergency application. Currently, the utmost priority is to remain at the designated assembly point until the situation is officially declared safe.",
            },
            keyPhrases: [
              { en: "US Geological Survey", zh: "美国地质调查局" },
              { en: "earthquake updates", zh: "地震动态" },
              { en: "all-clear", zh: "宣布安全/解除警报" },
              { en: "emergency app", zh: "紧急App" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Wi-Fi's still up. Check USGS for earthquake updates. You can also tune into local news. And definitely call your embassy if the quake was serious. Just stay put until we give the all-clear.",
                textZh:
                  "Wi-Fi还能用。上USGS网站查地震动态。也可以看当地新闻。如果地震严重一定打大使馆电话。在宣布安全之前留在这里。",
                actionHint: "上网了解最新情况",
                frequency: "common",
              },
              {
                textEn:
                  "The Wi-Fi should be working. Google the USGS earthquake page for updates. Your embassy might also have info. Most important thing — don't leave the assembly point until we say it's safe.",
                textZh:
                  "Wi-Fi应该能用。搜USGS地震页面查最新情况。大使馆可能也有信息。最重要的——别离开集合点，等我们说安全了再说。",
                actionHint: "查信息但不要离开",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for keeping us safe. Should I call my embassy to let them know where I am?",
            textZh: "谢谢你保护我们的安全。我需要打电话给大使馆告诉他们我的位置吗？",
            casualVersion: "Thanks for keeping us safe. Should I call my embassy, tell 'em where I am?",
            commonMistake: {
              wrong: "Thanks for safe us.",
              correct: "Thanks for keeping us safe.",
              explanation: "动词safe是形容词，需要用动词形式keeping us safe。",
            },
            formalityVariants: {
              casual: "Appreciate you keeping us safe. Think I should call my embassy, tell 'em my location?",
              standard: "Thank you for keeping us safe. Should I call my embassy to let them know where I am?",
              formal: "I extend my gratitude for ensuring our safety. Would it be advisable for me to contact my embassy to inform them of my current whereabouts?",
            },
          },
          {
            speaker: "them",
            role: "酒店员工",
            textEn:
              "That's a good idea, especially if the earthquake was significant. Your embassy can register your location and help if you need evacuation. Here's the earthquake emergency number for this area: 311 for non-emergency inquiries, and 911 for emergencies. Stay safe.",
            textZh:
              "这是个好主意，特别是如果地震比较严重的话。大使馆可以登记你的位置，需要疏散时也能帮助你。这个地区的地震应急号码是：非紧急咨询拨 311，紧急情况拨 911。注意安全。",
            casualVersion: "Yeah, good idea, 'specially if it was bad. They can track you, help if you gotta evacuate. Numbers for here: 311 for non-emergencies, 911 for emergencies. Be safe.",
            culturalNote: "911是紧急电话，311是非紧急电话，这是美国特有的区分，中国游客可能不了解。",
            commonMistake: {
              wrong: "Emergency number is 311 and 911.",
              correct: "The emergency numbers for this area are: 311 for non-emergencies and 911 for emergencies.",
              explanation: "号码是复数，且需明确区分紧急和非紧急用途。",
            },
            formalityVariants: {
              casual: "Definitely a good call, especially if the quake was gnarly. They can register you, help get you out if needed. Emergency numbers here are 311 for non-urgent stuff, 911 for actual emergencies. Stay safe.",
              standard: "That's a good idea, especially if the earthquake was severe. Your embassy can register your location and assist with evacuation if needed. The emergency numbers for this area are: 311 for non-emergencies and 911 for emergencies. Stay safe.",
              formal: "That is indeed a prudent course of action, particularly if the seismic event was significant. Your embassy is equipped to register your location and provide assistance with evacuation should it become necessary. For your awareness, the local emergency contact numbers are 311 for non-life-threatening inquiries and 911 for immediate emergencies. Please prioritize your safety.",
            },
            keyPhrases: [
              { en: "register your location", zh: "登记你的位置" },
              { en: "evacuation", zh: "疏散/撤离" },
              { en: "non-emergency inquiries", zh: "非紧急咨询" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely call them if it was a big quake. They can log your location and help with evacuation if needed. Here's the local emergency numbers — 311 for non-urgent stuff, 911 for emergencies.",
                textZh:
                  "如果是大地震一定要打。他们能登记你的位置，需要时帮助撤离。当地紧急号码——311非紧急咨询，911紧急情况。",
                actionHint: "联系大使馆登记位置",
                frequency: "common",
              },
              {
                textEn:
                  "That's smart. Your embassy can track where you are and coordinate help. Also note these numbers: 911 for emergencies, 311 for everything else. Take care.",
                textZh: "聪明的做法。大使馆能追踪你的位置并协调帮助。记下这些号码：911紧急情况，311其他事务。保重。",
                actionHint: "记下紧急号码",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 紧急避难 ---
      {
        id: "shelter",
        titleZh: "紧急避难",
        titleEn: "Emergency Shelter",
        description: "自然灾害后需要去紧急避难所，了解基本生存支持",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I'm a tourist and my hotel is damaged from the earthquake. I have nowhere to stay. Is there an emergency shelter nearby?",
            textZh: "打扰一下，我是游客，酒店被地震损坏了。我没有地方住。附近有紧急避难所吗？",
            casualVersion: "Hey, I'm a tourist, my hotel got trashed by the quake. Nowhere to stay. Is there a shelter nearby?",
            commonMistake: {
              wrong: "My hotel was damaged by earthquake.",
              correct: "My hotel was damaged by the earthquake.",
              explanation: "特指这次地震，需要加定冠词the。",
            },
            formalityVariants: {
              casual: "Yo, I'm a tourist, hotel's messed up from the quake. No place to crash. Any shelters around?",
              standard: "Excuse me, I'm a tourist and my hotel was damaged by the earthquake. I don't have anywhere to stay. Is there an emergency shelter nearby?",
              formal: "Pardon me, I am a tourist whose hotel sustained damage from the earthquake. I find myself without accommodation. Could you inform me if there is an emergency shelter in the vicinity?",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "Yes, there's an emergency shelter set up at the community center on 5th Avenue, about a 10-minute walk from here. It's open to everyone — locals and tourists. Do you need any medical attention?",
            textZh:
              "有的，第五大道的社区中心设了一个紧急避难所，从这里步行大约10分钟。对所有人开放——本地人和游客都可以。你需要医疗救助吗？",
            casualVersion: "Yep, shelter's at the community center on Fifth Ave, like a 10-min walk. Open to everyone. Need a doc?",
            culturalNote: "社区中心（community center）在美国是很常见的公共设施。",
            commonMistake: {
              wrong: "Need medical help?",
              correct: "Do you need medical assistance?",
              explanation: "在疑问句中，动词前需要有助动词Do/Did/Are等。",
            },
            formalityVariants: {
              casual: "Yeah, shelter's at the community center, Fifth Ave, like 10 mins walk from here. Everyone's welcome. You hurt?",
              standard: "Yes, there's an emergency shelter set up at the community center on Fifth Avenue, about a 10-minute walk from here. It's open to everyone — locals and tourists alike. Do you need medical assistance?",
              formal: "Affirmative, an emergency shelter has been established at the community center on Fifth Avenue, approximately a ten-minute walk from your current location. It is accessible to all individuals, both residents and visitors. Are you in need of any medical assistance?",
            },
            keyPhrases: [
              { en: "emergency shelter", zh: "紧急避难所" },
              { en: "community center", zh: "社区中心" },
              { en: "open to everyone", zh: "对所有人开放" },
              { en: "medical attention", zh: "医疗救助" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a shelter at the community center on 5th — about a 10-minute walk. Everyone's welcome, tourists included. Are you hurt at all?",
                textZh: "第五大道的社区中心有避难所——走路大约10分钟。所有人都可以去，游客也可以。你有没有受伤？",
                actionHint: "前往避难所",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, they set up a shelter at the 5th Avenue community center. It's not far. You don't need to be a local — they're taking everybody in. Do you need a medic?",
                textZh: "有，他们在第五大道社区中心设了避难所。不远。不用是本地人——什么人都收。你需要医护人员吗？",
                actionHint: "确认是否需要医疗帮助",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "No, I'm not hurt. But I lost my luggage in the hotel — I only have my passport and phone. What can I get at the shelter?",
            textZh: "没有，我没受伤。但行李都在酒店里——我只有护照和手机。避难所能提供什么？",
            casualVersion: "Nah, I'm fine. But all my stuff's still in the hotel – just got my passport and phone. What's the shelter got?",
            commonMistake: {
              wrong: "My luggage still in the hotel.",
              correct: "All my luggage is still in the hotel.",
              explanation: " luggage是不可数名词，不能用复数形式，且需要be动词is。",
            },
            formalityVariants: {
              casual: "Nah, no injuries. But all my bags are still in the hotel — just my passport and phone. What does the shelter offer?",
              standard: "No, I'm not injured. But all my luggage is still in the hotel — I only have my passport and phone. What can the shelter provide?",
              formal: "No, I am not sustaining any injuries. However, all my personal belongings remain in the hotel; I only possess my passport and mobile phone. Could you inform me of the provisions available at the shelter?",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "The shelter provides water, food, cots to sleep on, and basic hygiene supplies. The Red Cross is also there handing out emergency kits with a blanket, toothbrush, and other essentials. There's also a phone charging station.",
            textZh:
              "避难所提供水、食物、行军床和基本卫生用品。红十字会也在那里发放应急包，里面有毯子、牙刷和其他必需品。还有手机充电站。",
            casualVersion: "They got water, food, cots, basic hygiene stuff. Red Cross is giving out kits with blankets, toothbrushes, other essentials. Plus, phone charging stations.",
            commonMistake: {
              wrong: "Shelter provide water, food.",
              correct: "The shelter provides water, food.",
              explanation: "主语是单数shelter，动词provide需要用第三人称单数形式provides。",
            },
            formalityVariants: {
              casual: "They'll hook you up with water, food, cots, basic toiletries. Red Cross has kits with blankets, toothbrushes, all that. And phone chargers.",
              standard: "The shelter provides water, food, cots to sleep on, and basic hygiene supplies. The Red Cross is also there handing out emergency kits with a blanket, toothbrush, and other essentials. There are also phone charging stations.",
              formal: "The emergency shelter offers essential provisions such as potable water, sustenance, sleeping cots, and fundamental hygiene supplies. The Red Cross organization is concurrently distributing emergency kits comprising a blanket, toothbrush, and other vital necessities. Additionally, mobile phone charging stations are available for public use.",
            },
            keyPhrases: [
              { en: "cots", zh: "行军床" },
              { en: "hygiene supplies", zh: "卫生用品" },
              { en: "Red Cross", zh: "红十字会" },
              { en: "emergency kits", zh: "应急包" },
              { en: "charging station", zh: "充电站" },
            ],
            vocabNotes: {
              cots: {
                meaningInContext: "在这句话里表示：避难所里的简易折叠床/行军床",
                similarUsage: "类似用法：They set up 200 cots in the gym for evacuees.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "They've got the basics — water, food, beds, toiletries. The Red Cross is handing out emergency kits too. And there's a spot to charge your phone.",
                textZh: "基本的都有——水、食物、床、洗漱用品。红十字会也在发应急包。还有给手机充电的地方。",
                actionHint: "去领取应急包",
                frequency: "common",
              },
              {
                textEn:
                  "You'll have water, meals, somewhere to sleep, and basic supplies. Red Cross has blankets and emergency kits. There's phone charging available too.",
                textZh: "有水、餐食、睡觉的地方和基本物资。红十字会有毯子和应急包。也能给手机充电。",
                actionHint: "先安顿下来",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "That's a relief. How long can I stay there? And is there someone who can help me contact my embassy?",
            textZh: "那就放心了。可以住多久？有人能帮我联系大使馆吗？",
            casualVersion: "Whew, good to hear. How long can I stay? Can someone help me hit up my embassy?",
            commonMistake: {
              wrong: "That relieve me.",
              correct: "That's a relief.",
              explanation: "That's a relief (松了口气) 是更地道的表达，relieve是动词。",
            },
            formalityVariants: {
              casual: "Oh, that's good. How long can I crash here? Can someone help me reach my embassy?",
              standard: "That's a relief. How long can I stay? Can someone help me contact my embassy?",
              formal: "That is indeed reassuring. Could you please clarify the duration of my permissible stay? Furthermore, would assistance be available for contacting my embassy?",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "You can stay as long as needed — the shelter will be open until the emergency is declared over. There are volunteers who speak multiple languages and can help you contact your embassy. They also have a list of consular contacts for different countries.",
            textZh:
              "需要住多久都可以——避难所会一直开放到紧急状态解除。有会说多种语言的志愿者可以帮你联系大使馆。他们还有各国领事联系方式的名单。",
            casualVersion: "Stay as long as you need — it's open till the emergency's done. Got volunteers who speak different languages, they can help you with your embassy. They also have embassy contact lists.",
            commonMistake: {
              wrong: "As long as need.",
              correct: "As long as needed.",
              explanation: "表达“只要有需要”时，常用as long as needed。",
            },
            formalityVariants: {
              casual: "You can stay here as long as you gotta — it'll be open till they say the emergency's over. We've got multilingual volunteers who can help you reach your embassy. Plus, they have a list of contacts for different countries' consulates.",
              standard: "You can stay as long as needed — the shelter will be open until the emergency is declared over. There are volunteers who speak multiple languages and can help you contact your embassy. They also have a list of consular contacts for different countries.",
              formal: "You are welcome to remain for the necessary duration; the shelter will operate until the official declaration of the emergency's conclusion. Multilingual volunteers are on-site to facilitate communication with your respective embassy. Additionally, they possess a comprehensive directory of consular contacts for various nations.",
            },
            keyPhrases: [
              { en: "as long as needed", zh: "需要多久就多久" },
              { en: "declared over", zh: "宣布结束" },
              { en: "volunteers", zh: "志愿者" },
              { en: "consular contacts", zh: "领事联系方式" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Stay as long as you need to. The shelter's open until this whole thing is over. There are multilingual volunteers who can help you reach your embassy — they've got a contact list for every country.",
                textZh:
                  "需要住多久就住多久。紧急状态结束前避难所一直开放。有会多种语言的志愿者能帮你联系大使馆——他们有各国联系方式的清单。",
                actionHint: "找志愿者帮忙联系大使馆",
                frequency: "common",
              },
              {
                textEn:
                  "No time limit — you can stay until things settle down. There are volunteers here who speak different languages. They can hook you up with your embassy.",
                textZh: "没有时间限制——可以待到事情平息。这里有会说不同语言的志愿者。他们能帮你联系大使馆。",
                actionHint: "利用志愿者资源",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there also Wi-Fi at the shelter? I need to contact my family and change my flight.",
            textZh: "避难所有Wi-Fi吗？我需要联系家人、改航班。",
            casualVersion: "Got Wi-Fi at the shelter too? Gotta call family and change my flight.",
            commonMistake: {
              wrong: "I need contact my family.",
              correct: "I need to contact my family.",
              explanation: "need to do something 是“需要做某事”的正确表达。",
            },
            formalityVariants: {
              casual: "Is there Wi-Fi at the shelter? Need to hit up my family and reschedule my flight.",
              standard: "Is there also Wi-Fi at the shelter? I need to contact my family and change my flight.",
              formal: "May I inquire if Wi-Fi connectivity is available at the shelter? I have an urgent need to contact my family and arrange for changes to my flight itinerary.",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "Yes, there's basic Wi-Fi. It might be slow because many people are using it. For your flight, most airlines offer free rebooking during natural disasters. Call your airline and explain the situation — they usually waive change fees during declared emergencies.",
            textZh:
              "有的，有基础Wi-Fi。可能会慢一些，因为很多人在用。关于航班，大多数航空公司在自然灾害期间提供免费改签。打电话给航空公司说明情况——在宣布紧急状态期间，他们通常会免除改签费用。",
            casualVersion: "Yeah, basic Wi-Fi's there. Might be slow, lotta people on it. For your flight, most airlines let you change for free during disasters. Call 'em, tell 'em what happened — they usually ditch the change fees in an emergency.",
            commonMistake: {
              wrong: "Call airline tell situation.",
              correct: "Call your airline and explain the situation.",
              explanation: "动词之间需要用and连接，且explain the situation是更完整的表达。",
            },
            formalityVariants: {
              casual: "Yep, basic Wi-Fi. Might be kinda slow, everyone's on it. For your flight, most airlines give free changes during natural disasters. Just call them, explain — they usually drop the change fees when it's an emergency.",
              standard: "Yes, there's basic Wi-Fi available. It might be a bit slow since many people are using it. Regarding your flight, most airlines offer free changes during natural disasters. Call your airline and explain the situation — they usually waive change fees during declared emergencies.",
              formal: "Yes, foundational Wi-Fi access is provided. Please anticipate potential slowness due to high user traffic. Pertaining to your flight, many airlines implement fee waivers for itinerary changes during declared natural disasters. I recommend contacting your airline to explain your circumstances; they typically forgo change fees during periods of official emergency.",
            },
            keyPhrases: [
              { en: "free rebooking", zh: "免费改签" },
              { en: "waive change fees", zh: "免除改签费用" },
              { en: "declared emergencies", zh: "宣布的紧急状态" },
            ],
            alternativeExpressions: [
              {
                textEn: "Airlines usually waive fees during disasters. Just call them and reference the earthquake.",
                textZh: "灾害期间航空公司通常免除费用。打电话提到地震就行。",
                actionHint: "联系航空公司说明灾害",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thank you so much. One last thing — is the tap water safe to drink, or should I only drink the bottled water?",
            textZh: "非常感谢。最后一个问题——自来水能喝吗，还是只能喝瓶装水？",
            casualVersion: "Thanks a ton. One more thing — tap water safe to drink, or just the bottled stuff?",
            culturalNote: "中国游客常担心国外自来水是否能直接饮用，灾后尤其如此。",
            commonMistake: {
              wrong: "Tap water safe drink?",
              correct: "Is the tap water safe to drink?",
              explanation: "疑问句需要有be动词is，且safe后面跟to drink。",
            },
            formalityVariants: {
              casual: "Thanks a bunch. Last question — can I drink the tap water, or just the bottled water?",
              standard: "Thank you so much. One last thing — is the tap water safe to drink, or should I only drink the bottled water?",
              formal: "I appreciate your comprehensive assistance. One final inquiry: is the tap water potable, or should I exclusively consume the provided bottled water?",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "After an earthquake, the water supply may be contaminated. Only drink the bottled water we provide until the authorities confirm the tap water is safe. Also, be careful of gas leaks — if you smell gas anywhere, report it to shelter staff immediately.",
            textZh:
              "地震后自来水可能被污染。只喝我们提供的瓶装水，直到当局确认自来水安全。还有，注意燃气泄漏——如果在任何地方闻到燃气味道，立即向避难所工作人员报告。",
            casualVersion: "After a quake, water can be dirty. Just drink our bottled water till authorities say tap water's okay. And watch for gas leaks — if you smell gas, tell staff right away.",
            culturalNote: "地震后自来水可能污染，这是中国游客普遍会有的担忧。",
            commonMistake: {
              wrong: "Smell gas, report staff.",
              correct: "If you smell gas anywhere, report it to shelter staff immediately.",
              explanation: "句式不完整，需要主语、介词和副词来表达清楚。",
            },
            formalityVariants: {
              casual: "Quakes can mess up water. So only drink our bottled water until they say the tap water's fine. And be alert for gas leaks — if you get a whiff of gas, tell someone at the shelter ASAP.",
              standard: "After an earthquake, the water supply may be contaminated. Only drink the bottled water we provide until the authorities confirm the tap water is safe. Also, be careful of gas leaks — if you smell gas anywhere, report it to shelter staff immediately.",
              formal: "Subsequent to a seismic event, the municipal water supply carries a risk of contamination. Therefore, please consume only the bottled water distributed by the shelter until official confirmation of tap water potability is issued by the authorities. Furthermore, remain vigilant for gas leaks; any detection of a gas odor should be reported to shelter personnel without delay.",
            },
            keyPhrases: [
              { en: "contaminated", zh: "被污染的" },
              { en: "authorities", zh: "当局" },
              { en: "gas leaks", zh: "燃气泄漏" },
              { en: "report it", zh: "报告" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't drink the tap water — it could be contaminated from the quake. Stick to the bottled water we're giving out. And watch out for gas leaks — if you smell anything funny, tell us right away.",
                textZh: "不要喝自来水——地震可能污染了。喝我们发的瓶装水。还有注意燃气泄漏——闻到什么异味立刻告诉我们。",
                actionHint: "只喝瓶装水",
                frequency: "common",
              },
              {
                textEn:
                  "Stick to bottled water for now — the pipes might be damaged. We'll let you know when tap water's safe again. Also keep your nose open for gas smells.",
                textZh: "现在只喝瓶装水——水管可能坏了。自来水安全了我们会通知你。还有留意有没有燃气味道。",
                actionHint: "警惕燃气泄漏",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 使馆补办护照 ====================
  {
    id: "emergency-embassy-passport",
    category: "emergency",
    titleZh: "使馆补办护照",
    titleEn: "Embassy Passport Replacement",
    description: "护照丢失需要补办，或在国外遇到法律问题需要领事帮助",
    otherRole: "领事官员",
    otherRoleIcon: "landmark",
    flows: [
      // --- Flow 1: 补办护照 ---
      {
        id: "passport-replacement",
        titleZh: "补办护照",
        titleEn: "Passport Replacement",
        description: "护照丢失或被盗后，到大使馆办理紧急旅行证件或补办护照",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, my passport was stolen yesterday. I've filed a police report. I need to get a replacement as soon as possible — my flight home is in five days.",
            textZh: "你好，我的护照昨天被偷了。我已经报了警。我需要尽快补办——五天后的航班回国。",
            casualVersion:
              "Hey, my passport got stolen yesterday. Filed a police report already. Gotta get a replacement ASAP — my flight home's in five days.",
            commonMistake: {
              wrong: "My passport lost yesterday.",
              correct: "My passport was stolen yesterday.",
              explanation: "护照被偷或丢失要用被动语态，而不是直接说“passport lost”。",
            },
            formalityVariants: {
              casual:
                "Hey, passport got stolen yesterday. Filed a report. Need a replacement ASAP, flight home in five days.",
              standard:
                "Hello, my passport was stolen yesterday. I've filed a police report. I need to get a replacement as soon as possible as my flight home is in five days.",
              formal:
                "Good morning/afternoon, I am reporting a stolen passport from yesterday. A police report has been filed. I urgently require a replacement, as my return flight is scheduled for five days from now.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "I'm sorry about that. You have two options: an emergency travel document, which is faster and valid only for your return trip, or a full passport replacement, which takes longer. Given your timeline, I'd recommend the emergency travel document.",
            textZh:
              "很遗憾。您有两个选择：紧急旅行证件，更快但只能用于回国旅程；或者补办完整护照，时间更长。根据您的时间安排，我建议办紧急旅行证件。",
            commonMistake: {
              wrong: "You have two choices:",
              correct: "You have two options:",
              explanation: "“Option” 在这里比 “choice” 更常用且礼貌。",
            },
            keyPhrases: [
              { en: "emergency travel document", zh: "紧急旅行证件" },
              { en: "full passport replacement", zh: "补办完整护照" },
              { en: "valid only for", zh: "仅用于" },
              { en: "return trip", zh: "回国旅程" },
              { en: "timeline", zh: "时间安排" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can issue a temporary travel document for your trip home, or replace the passport entirely. The temporary one is quicker — about 1-2 days.",
                textZh: "我们可以签发临时旅行证件用于回国，或者完全补办护照。临时的更快——大约1-2天。",
                actionHint: "根据时间选择方案",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry to hear that. So, two options: an emergency travel document, it's quicker and just for your trip home. Or a full passport replacement, but that takes longer. With your flight so soon, I'd say go with the emergency one.",
            formalityVariants: {
              casual:
                "Sorry to hear. Two options: emergency travel doc (quicker, just for trip home) or full passport (takes longer). Given your timing, recommend the emergency one.",
              standard:
                "I'm sorry to hear that. You have two options: an emergency travel document, which is faster and valid only for your return trip, or a full passport replacement, which takes longer. Given your timeline, I would recommend the emergency travel document.",
              formal:
                "My apologies for your unfortunate experience. You have two primary options available: an emergency travel document, which offers a swifter process and is exclusively valid for your return journey, or a comprehensive passport replacement, which entails a longer processing period. Considering your imminent departure, I highly recommend pursuing the emergency travel document.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the emergency travel document. What documents do I need to bring?",
            textZh: "那就办紧急旅行证件。我需要带什么材料？",
            casualVersion: "Okay, I'll take the emergency travel doc. What documents do I gotta bring?",
            commonMistake: {
              wrong: "What materials do I need to bring?",
              correct: "What documents do I need to bring?",
              explanation: "“材料”在英文中更常用“documents”或“paperwork”来表达，而不是“materials”。",
            },
            formalityVariants: {
              casual: "Okay, emergency travel doc. What do I need to bring?",
              standard:
                "I'll proceed with the emergency travel document. Could you please inform me which documents I need to bring?",
              formal:
                "I will opt for the emergency travel document. Kindly advise on the specific documentation required for this process.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "I'll need: the police report, two passport-sized photos, a copy or photo of your lost passport if available, proof of your identity such as a driver's license or national ID, and your return flight booking. The fee is $30.",
            textZh:
              "我需要：报案记录、两张护照尺寸照片、丢失护照的复印件或照片（如果有的话）、身份证明如驾照或身份证，以及回程机票预订单。费用30美元。",
            commonMistake: {
              wrong: "I need your police report...",
              correct: "I will need: your police report...",
              explanation: "“I will need” 比 “I need” 听起来更像要求对方提供材料，而不是自己有所缺失。",
            },
            keyPhrases: [
              { en: "passport-sized photos", zh: "护照尺寸照片" },
              { en: "proof of identity", zh: "身份证明" },
              { en: "return flight booking", zh: "回程机票预订单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's what you'll need: police report, two photos, any ID you have, a copy of your old passport if possible, and your return ticket. It's $30 for the document.",
                textZh:
                  "你需要准备这些：报案记录、两张照片、你有的任何身份证件、旧护照复印件（如果有）、还有返程机票。证件费30美元。",
                actionHint: "逐一准备材料",
                frequency: "common",
              },
              {
                textEn:
                  "Bring me the police report, passport photos, proof of who you are, and your flight booking. If you've got any copy of the stolen passport, even a phone pic, that helps a lot.",
                textZh:
                  "带来报案记录、证件照、身份证明和航班预订单。如果有被偷护照的任何复印件，哪怕手机拍的照片，都很有用。",
                actionHint: "手机照片也可以用",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, so: police report, two passport photos, a copy or photo of your lost passport (if you got one), some ID like a driver's license or national ID, and your flight booking home. It's $30.",
            formalityVariants: {
              casual:
                "Need: police report, two passport photos, lost passport copy/pic (if you have it), ID (driver's license/national ID), and your flight home info. $30 fee.",
              standard:
                "The required items are: your police report, two passport-sized photographs, a copy or photograph of your lost passport if accessible, proof of your identity such as a driver's license or national ID card, and your confirmed return flight booking. The associated fee is $30.",
              formal:
                "To proceed, please provide the following: the official police report, two recent passport-sized photographs, a photocopy or digital image of your misplaced passport (if available), a verifiable form of identification such as a valid driver's license or national identification card, and your confirmed itinerary for the return flight. A fee of $30 will be applied.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I have everything except the photos. I have a scan of my passport on my phone. Can I get the photos taken here?",
            textZh: "除了照片都有。我手机里有护照的扫描件。能在这里拍照吗？",
            casualVersion:
              "Got everything but the photos. I've got a scan of my passport on my phone, though. Can I get the photos done here?",
            commonMistake: {
              wrong: "Can I take photos here?",
              correct: "Can I get the photos taken here?",
              explanation: "在这里“拍照”是指让别人为你拍，所以要用被动语态“get photos taken”。",
            },
            formalityVariants: {
              casual: "Got everything but photos. Passport scan's on my phone. Can I get photos here?",
              standard:
                "I have all the required documents except for the photographs. I do have a digital scan of my passport on my phone. Is it possible to have the photos taken on-site?",
              formal:
                "I possess all the necessary documentation, with the exception of the photographic requirements. I do, however, have a digital rendition of my passport available on my mobile device. Might I inquire if photographic services are available at this location?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "Yes, we have a photo service here — it's $10 for two photos. The phone scan of your passport will work fine for identity verification. Let me process your application now. You can pick up the emergency document tomorrow after 2 PM.",
            textZh:
              "可以，我们这里有拍照服务——两张照片10美元。手机上的护照扫描件用来验证身份没问题。我现在就处理您的申请。明天下午2点之后来取紧急证件。",
            commonMistake: {
              wrong: "It's okay for identity verification.",
              correct: "It's fine for identity verification.",
              explanation: "“Fine” 在这里比 “okay” 更自然地表示“没问题，可以接受”，语气稍强。",
            },
            keyPhrases: [
              { en: "photo service", zh: "拍照服务" },
              { en: "identity verification", zh: "身份验证" },
              { en: "process your application", zh: "处理您的申请" },
              { en: "pick up", zh: "来取" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem — we can do photos right here, 10 bucks. Your phone scan works fine for verifying who you are. I'll start processing this now. Come back tomorrow afternoon to pick it up.",
                textZh:
                  "没问题——我们这里就能拍照，10块钱。手机上的扫描件验证身份够用了。我现在开始处理。明天下午来取。",
                actionHint: "明天下午2点后来取",
                frequency: "common",
              },
              {
                textEn:
                  "We have a photo machine in the lobby — $10 for two shots. The passport scan on your phone is fine for ID purposes. Processing starts now, pickup is tomorrow after 2.",
                textZh: "大厅有拍照机——10美元两张。手机上的护照扫描件用来核实身份没问题。现在开始办，明天2点后来取。",
                actionHint: "大厅可以拍照",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, we got a photo service here — $10 for two. And your passport scan on your phone? Totally fine for ID. I'll get your application started now. You can grab the emergency document tomorrow after 2.",
            formalityVariants: {
              casual:
                "Yep, photo service here, $10 for two. Phone scan's good for ID. I'll process your application. Pick up the document tomorrow after 2.",
              standard:
                "Yes, we do offer a photo service on premises; it is $10 for two photographs. The digital scan of your passport on your phone will be perfectly acceptable for identity verification purposes. I will proceed with processing your application immediately. The emergency document will be available for collection tomorrow after 2 PM.",
              formal:
                "Indeed, we provide on-site photographic services at a cost of $10 for a set of two photographs. The digital rendition of your passport on your mobile device is entirely sufficient for the purpose of identity verification. I shall now commence with the processing of your application. The emergency document may be collected tomorrow, subsequent to 2:00 PM.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That's great. Will I have any problems going through immigration with the emergency document instead of a regular passport?",
            textZh: "太好了。拿紧急证件而不是正式护照过入境检查会有问题吗？",
            casualVersion:
              "Awesome. Any issues going through immigration with this emergency document instead of a regular passport?",
            commonMistake: {
              wrong: "Is there any problem going through immigration?",
              correct: "Will I have any problems going through immigration?",
              explanation: "询问未来是否会有问题，用“will I have”或“will there be”更自然，而非直接用“is there”。",
            },
            formalityVariants: {
              casual:
                "Great. Any problems with immigration using the emergency document instead of a regular passport?",
              standard:
                "That's excellent. Will I encounter any difficulties during immigration clearance when presenting the emergency document instead of a standard passport?",
              formal:
                "That is most satisfactory. I must inquire, will there be any potential complications or impediments during immigration procedures when presenting this emergency travel document in lieu of a conventional passport?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "No, the emergency travel document is internationally recognized. Immigration officers are familiar with it. Just explain that your passport was stolen and show them the police report. I'll also include a cover letter from the embassy that explains the situation.",
            textZh:
              "不会的，紧急旅行证件是国际认可的。入境官员对此很熟悉。跟他们说明护照被偷了，出示报案记录就行。我还会附上一封大使馆的说明信解释情况。",
            commonMistake: {
              wrong: "Don't worry, the emergency travel document is...",
              correct: "No, the emergency travel document is...",
              explanation: "直接用 “No” 回答否定问题更自然，避免 “Don't worry” 可能带来的语气问题。",
            },
            keyPhrases: [
              { en: "internationally recognized", zh: "国际认可的" },
              { en: "immigration officers", zh: "入境官员" },
              { en: "cover letter", zh: "说明信" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll be fine. Immigration sees these all the time. Just show them the police report and the document. I'll throw in a cover letter from us explaining everything.",
                textZh:
                  "不会有问题的。入境官员经常见到这种。出示报案记录和证件就行。我会附上一封大使馆的说明信解释情况。",
                actionHint: "带齐文件过关",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry about that — this document is recognized worldwide. The border officers deal with it all the time. We'll also give you an official letter to smooth things over.",
                textZh: "不用担心——这个证件全世界通用。边检人员经常处理。我们还会给你一封官方信函让一切顺利。",
                actionHint: "有问题出示说明信",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, it's fine. Emergency travel docs are recognized everywhere. Immigration officers know about them. Just tell 'em your passport got stolen and show the police report. I'll even add a cover letter from the embassy explaining everything.",
            formalityVariants: {
              casual:
                "Nah, no problems. Emergency travel docs are recognized internationally. Officers know 'em. Just say your passport was stolen, show the report. I'll add an embassy letter explaining.",
              standard:
                "No, there will be no issues. The emergency travel document is internationally recognized, and immigration officers are well-acquainted with its validity. Simply explain that your passport was stolen and present the police report. Furthermore, I will include a cover letter from the embassy detailing the circumstances.",
              formal:
                "Rest assured, this will not pose any difficulties. The emergency travel document holds international recognition, and immigration officials are thoroughly conversant with its purpose. You need only articulate that your passport was unfortunately stolen and present the official police report. Moreover, I will furnish you with an accompanying cover letter from the embassy to elucidate the situation comprehensively.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Once I get home, how do I apply for a new regular passport?",
            textZh: "谢谢。回国后怎么申请新的正式护照？",
            commonMistake: {
              wrong: "How can I apply for a new regular passport when I get home?",
              correct: "Once I get home, how do I apply for a new regular passport?",
              explanation: "“Once I get home” 放在句首更自然，强调时间状语。",
            },
            casualVersion: "Thanks. So, when I get home, how do I apply for a new regular passport?",
            formalityVariants: {
              casual: "Thanks. How do I get a new passport once I'm home?",
              standard:
                "Thank you. Upon my return home, what is the procedure for applying for a new regular passport?",
              formal:
                "I appreciate your assistance. Could you please outline the necessary steps for applying for a new standard passport once I have returned to my home country?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "When you return home, go to your local passport office with the emergency travel document, the police report, and a new set of photos. The regular replacement process takes about 2 to 4 weeks. Here's my business card — if you run into any issues at the airport, you can call our 24-hour hotline.",
            textZh:
              "回国后带着紧急旅行证件、报案记录和新照片去当地护照办理处。正常补办流程大约2到4周。这是我的名片——如果在机场遇到任何问题，可以拨打我们的24小时热线。",
            commonMistake: {
              wrong: "The process takes 2 to 4 weeks.",
              correct: "The regular replacement process takes about 2 to 4 weeks.",
              explanation: "加上 “about” 表示大概时间，更符合实际情况和口语表达。",
            },
            keyPhrases: [
              { en: "local passport office", zh: "当地护照办理处" },
              { en: "replacement process", zh: "补办流程" },
              { en: "2 to 4 weeks", zh: "2到4周" },
              { en: "24-hour hotline", zh: "24小时热线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Once you're home, take the emergency document, police report, and new photos to the passport office. Normal processing takes 2 to 4 weeks. Here's my card — if anything goes wrong at the airport, call our 24-hour line.",
                textZh:
                  "到家后带着紧急证件、报案记录和新照片去护照办理处。正常流程2到4周。这是我的名片——机场有问题就打我们的24小时热线。",
                actionHint: "回国后尽快补办正式护照",
                frequency: "common",
              },
              {
                textEn:
                  "Back home, head to your local passport office with all these documents. Full replacement takes a few weeks. And keep my card — our hotline is 24/7 if you hit any snags.",
                textZh:
                  "回国后去当地护照办理处带上所有文件。完全补办需要几周。留着我的名片——我们的热线24小时在线，有问题随时打。",
                actionHint: "保留名片以备不时之需",
                frequency: "common",
              },
            ],
            casualVersion:
              "Once you're home, just head to your local passport office with the emergency travel document, the police report, and new photos. The normal replacement takes like 2 to 4 weeks. Here's my card — if anything comes up at the airport, just call our 24/7 hotline.",
            formalityVariants: {
              casual:
                "Back home, go to your local passport office with the emergency document, police report, and new photos. Regular replacement takes 2-4 weeks. Here's my card—if airport issues, call our 24/7 hotline.",
              standard:
                "Upon your return home, please visit your local passport office, bringing the emergency travel document, the police report, and a new set of photographs. The standard passport replacement process typically requires approximately 2 to 4 weeks. Please take my business card; should you encounter any issues at the airport, you may contact our 24-hour hotline.",
              formal:
                "Upon your repatriation, kindly proceed to your local passport issuance office, equipped with the emergency travel document, the official police report, and a fresh set of identification photographs. The standard processing period for a replacement passport generally spans between two to four weeks. Please accept my business card; it contains contact information for our 24-hour assistance hotline, which you may utilize should any unforeseen circumstances arise at the airport.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I really appreciate your help. This has been a stressful experience, but you've made it much easier.",
            textZh: "真的很感谢你的帮助。这件事压力很大，但你让一切变得容易多了。",
            casualVersion:
              "Really appreciate the help. This whole thing's been super stressful, but you made it way easier.",
            commonMistake: {
              wrong: "I thank you very much for your help.",
              correct: "I really appreciate your help.",
              explanation: "“I appreciate”比“I thank you”更常用，加上“really”或“so much”更强调感激之情。",
            },
            formalityVariants: {
              casual: "Thanks so much. This was super stressful, but you made it way easier.",
              standard:
                "I truly appreciate your assistance. This has been a rather stressful experience, but your help has made it significantly more manageable.",
              formal:
                "I extend my sincerest gratitude for your invaluable assistance. While this has undoubtedly been a profoundly stressful experience, your professional and efficient support has rendered the process considerably less burdensome.",
            },
          },
        ],
      },

      // --- Flow 2: 法律协助 ---
      {
        id: "legal-assistance",
        titleZh: "法律协助",
        titleEn: "Legal Assistance",
        description: "在国外遇到法律问题，到大使馆寻求领事协助和法律建议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'm a Chinese citizen and I need legal help. I've been accused of shoplifting at a department store, but I didn't do it. The security guard called the police.",
            textZh: "你好，我是中国公民，需要法律帮助。我被指控在百货商店偷窃，但我没有偷。保安叫了警察。",
            casualVersion:
              "Hey, I'm Chinese, need legal help. Got accused of shoplifting at the department store, but I didn't do it. Security guard called the cops.",
            commonMistake: {
              wrong: "I was accused stealing at a department store.",
              correct: "I've been accused of shoplifting at a department store.",
              explanation: "“accused of” 后接动名词，或直接用 “accused of shoplifting”。",
            },
            formalityVariants: {
              casual:
                "Hey, I'm Chinese, need legal help. Got accused of shoplifting at the department store, but I didn't do it. Security guard called the cops.",
              standard:
                "Hello, I'm a Chinese citizen and I need legal help. I've been accused of shoplifting at a department store, but I didn't do it. The security guard called the police.",
              formal:
                "Good morning/afternoon, I am a Chinese national requiring legal assistance. I have been accused of shoplifting at a retail establishment, a charge which I vehemently deny. The security personnel subsequently contacted law enforcement.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "I understand this must be very stressful. First, have you been arrested or detained, or did they let you go?",
            textZh: "我理解这一定压力很大。首先，你有没有被逮捕或扣留，还是让你走了？",
            commonMistake: {
              wrong: "Do you get arrested or detained?",
              correct: "Have you been arrested or detained?",
              explanation: "“Have you been...” 是正确的现在完成时被动语态，询问过去发生并持续到现在的状态。",
            },
            keyPhrases: [
              { en: "accused of", zh: "被指控" },
              { en: "shoplifting", zh: "商店偷窃" },
              { en: "arrested", zh: "逮捕" },
              { en: "detained", zh: "扣留" },
            ],
            vocabNotes: {
              shoplifting: {
                meaningInContext: "在这句话里表示：在商店里偷东西的行为",
                similarUsage: "类似用法：Shoplifting is a criminal offense even for small items.",
              },
              detained: {
                meaningInContext: "在这句话里表示：被警方暂时限制自由",
                similarUsage: "类似用法：He was detained at the border for questioning.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "I can imagine how stressful this is. Tell me — were you actually arrested? Did they take you in, or did they just let you walk?",
                textZh: "我能想象你的压力。跟我说——你有没有被正式逮捕？他们把你带走了还是让你走了？",
                actionHint: "说明是否被拘留",
                frequency: "common",
              },
              {
                textEn:
                  "That sounds really tough. First things first — did the police arrest you or just question you? Are you free to move around right now?",
                textZh: "听起来真的很难。首先——警察逮捕你了还是只是询问？你现在行动自由吗？",
                actionHint: "确认当前状态",
                frequency: "common",
              },
            ],
            casualVersion: "I get this is super stressful. So, were you arrested or held, or did they just let you go?",
            formalityVariants: {
              casual: "I get this is super stressful. So, were you arrested or held, or did they just let you go?",
              standard:
                "I understand this must be very stressful. First, have you been arrested or detained, or did they let you go?",
              formal:
                "I comprehend that this situation must be exceedingly distressing. To begin, could you please clarify whether you were formally arrested or temporarily detained, or if you were released?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The police took me to the station and questioned me. They let me go but told me I have to appear in court next week. I'm terrified. I've never been in trouble with the law.",
            textZh: "警察把我带到警局询问了。放了我，但说下周要出庭。我吓坏了。我从来没遇过法律麻烦。",
            casualVersion:
              "Cops took me to the station, questioned me. Then they let me go, but said I gotta be in court next week. I'm freaked out. Never been in trouble before.",
            commonMistake: {
              wrong: "I never met legal problems.",
              correct: "I've never been in trouble with the law.",
              explanation: "“遇到法律麻烦” 地道说法是 “be in trouble with the law” 或 “have legal issues”。",
            },
            formalityVariants: {
              casual:
                "Cops took me to the station, questioned me. Then they let me go, but said I gotta be in court next week. I'm freaked out. Never been in trouble before.",
              standard:
                "The police took me to the station and questioned me. They let me go but told me I have to appear in court next week. I'm terrified. I've never been in trouble with the law.",
              formal:
                "Law enforcement officers transported me to the precinct for questioning. Subsequently, I was released, albeit with instructions to appear in court next week. I am quite distressed by this, as I have no prior history of legal infractions.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "Okay, let me explain what we can do. As your consulate, we cannot represent you in court or interfere with local legal proceedings. However, we can provide you with a list of local lawyers who speak Mandarin, ensure you're being treated fairly, and notify your family if you wish.",
            textZh:
              "好的，让我解释我们能做什么。作为领事馆，我们不能在法庭上代表你或干涉当地的法律程序。但是，我们可以提供一份会说普通话的当地律师名单，确保你受到公平对待，以及如果你愿意的话通知你的家人。",
            commonMistake: {
              wrong: "We can't interfere local legal proceedings.",
              correct: "We can't interfere with local legal proceedings.",
              explanation: "“interfere” 后通常跟 “with” 表示干涉某事，是固定搭配。",
            },
            keyPhrases: [
              { en: "represent you in court", zh: "在法庭上代表你" },
              { en: "legal proceedings", zh: "法律程序" },
              { en: "list of local lawyers", zh: "当地律师名单" },
              { en: "treated fairly", zh: "受到公平对待" },
              { en: "notify your family", zh: "通知你的家人" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Here's the deal. We can't go to court for you or interfere with local law — but we can get you a Mandarin-speaking lawyer, make sure you're treated fairly, and contact your family if you want.",
                textZh:
                  "是这样的。我们不能替你上法庭或干涉当地法律——但我们能帮你找会说普通话的律师，确保你受到公平对待，如果你愿意的话联系家人。",
                actionHint: "了解领事馆能帮什么",
                frequency: "common",
              },
              {
                textEn:
                  "Let me be upfront about what we can and can't do. We can't act as your legal defense, but we can connect you with a lawyer, monitor your case, and reach out to your family.",
                textZh:
                  "让我直说我们能做什么不能做什么。我们不能做你的法律辩护，但能帮你联系律师、跟进你的案件、联系你的家人。",
                actionHint: "尽快找律师",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright, let me tell you what we can do. As your consulate, we can't represent you in court or mess with local legal stuff. But we can give you a list of local lawyers who speak Mandarin, make sure you're treated fairly, and tell your family if you want.",
            culturalNote: "领事馆不能干涉他国司法程序",
            formalityVariants: {
              casual:
                "Alright, let me tell you what we can do. As your consulate, we can't represent you in court or mess with local legal stuff. But we can give you a list of local lawyers who speak Mandarin, make sure you're treated fairly, and tell your family if you want.",
              standard:
                "Okay, let me explain what we can do. As your consulate, we cannot represent you in court or interfere with local legal proceedings. However, we can provide you with a list of local lawyers who speak Mandarin, ensure you're being treated fairly, and notify your family if you wish.",
              formal:
                "Certainly, allow me to clarify our capabilities. As your consular representative, we are unable to provide legal representation in court or intervene in domestic legal proceedings. Nevertheless, we are authorized to furnish you with a directory of local legal counsel proficient in Mandarin, ensure equitable treatment, and, should you desire, inform your family.",
            },
          },
          {
            speaker: "you",
            textEn:
              "A lawyer who speaks Mandarin would be really helpful. I don't understand the legal system here at all. How much does a lawyer typically cost?",
            textZh: "一个会说普通话的律师太有帮助了。我完全不了解这里的法律体系。请律师大概多少钱？",
            casualVersion:
              "A lawyer who speaks Mandarin? That'd be super helpful. I totally don't get the legal system here. What's a lawyer usually cost?",
            commonMistake: {
              wrong: "How much is a lawyer usually cost?",
              correct: "How much does a lawyer typically cost?",
              explanation: "“cost” 是动词，前面不能再加 “is”。问价格用 “How much does it cost?”。",
            },
            formalityVariants: {
              casual:
                "A lawyer who speaks Mandarin? That'd be super helpful. I totally don't get the legal system here. What's a lawyer usually cost?",
              standard:
                "A lawyer who speaks Mandarin would be really helpful. I don't understand the legal system here at all. How much does a lawyer typically cost?",
              formal:
                "The availability of legal counsel proficient in Mandarin would be exceptionally beneficial. I confess I possess no comprehension of the local judicial framework. What is the customary fee structure for legal representation?",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "For a misdemeanor shoplifting case, a local attorney typically charges $1,500 to $3,000. If you can't afford a lawyer, you can request a public defender — they're free, appointed by the court. However, public defenders don't usually speak Mandarin. Here are three attorneys from our list who handle criminal cases and speak your language.",
            textZh:
              "轻罪盗窃案，当地律师通常收费1500到3000美元。如果请不起律师，可以申请公设辩护人——免费的，法院指定。但公设辩护人一般不会说普通话。这是我们名单上的三位处理刑事案件且会说中文的律师。",
            keyPhrases: [
              { en: "misdemeanor", zh: "轻罪" },
              { en: "attorney", zh: "律师" },
              { en: "public defender", zh: "公设辩护人" },
              { en: "appointed by the court", zh: "法院指定" },
              { en: "criminal cases", zh: "刑事案件" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For something like this, you're looking at $1,500 to $3,000 for a private attorney. If that's too much, you can get a public defender for free — the court assigns one. Downside is they probably won't speak Mandarin. Here are three lawyers from our list.",
                textZh:
                  "像这种案子，私人律师大概1500到3000美元。如果太贵，可以申请免费的公设辩护人——法院指定的。缺点是一般不会说普通话。这是我们名单上的三位律师。",
                actionHint: "选择合适的律师",
                frequency: "common",
              },
              {
                textEn:
                  "Private lawyers run about one-five to three grand for a misdemeanor. Can't afford it? The court will appoint a public defender at no cost. But they won't speak Chinese. I've got three Mandarin-speaking attorneys I can recommend.",
                textZh:
                  "轻罪的私人律师大概一千五到三千。付不起？法院会免费指定公设辩护人。但他们不会说中文。我有三位会说普通话的律师可以推荐。",
                actionHint: "权衡费用和语言需求",
                frequency: "common",
              },
            ],
            casualVersion:
              "For a misdemeanor shoplifting case, a local attorney usually charges like, fifteen hundred to three thousand bucks. If you can't afford one, you can ask for a public defender – they're free, court appoints 'em. But public defenders usually don't speak Mandarin. Here are three from our list who do criminal cases and speak Chinese.",
            culturalNote: "公设辩护人服务免费，但沟通可能受限",
            commonMistake: {
              wrong: "If you don't have money to hire a lawyer...",
              correct: "If you can't afford a lawyer...",
              explanation: "“afford” 指有能力支付，更地道。",
            },
            formalityVariants: {
              casual:
                "For a misdemeanor shoplifting case, a local attorney usually charges like, fifteen hundred to three thousand bucks. If you can't afford one, you can ask for a public defender – they're free, court appoints 'em. But public defenders usually don't speak Mandarin. Here are three from our list who do criminal cases and speak Chinese.",
              standard:
                "For a misdemeanor shoplifting case, a local attorney typically charges $1,500 to $3,000. If you can't afford a lawyer, you can request a public defender — they're free, appointed by the court. However, public defenders don't usually speak Mandarin. Here are three attorneys from our list who handle criminal cases and speak your language.",
              formal:
                "Regarding a misdemeanor shoplifting charge, the customary fees for a local attorney range from approximately $1,500 to $3,000. Should you be unable to bear this expense, you may petition for a public defender, who is appointed by the court at no charge. It is pertinent to note, however, that public defenders generally do not possess proficiency in Mandarin. I can provide you with three attorneys from our curated list who specialize in criminal law and are fluent in your language.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Can my court appearance be delayed? I was supposed to fly home before the court date.",
            textZh: "谢谢。出庭可以延期吗？我原本在出庭日期之前就要飞回去了。",
            casualVersion: "Thanks. Can I get my court date pushed back? I was supposed to fly home before then.",
            commonMistake: {
              wrong: "Can my court appear be late?",
              correct: "Can my court appearance be delayed?",
              explanation: "“appear” 是动词，不能直接加 “late”；“appearance” 是名词。",
            },
            formalityVariants: {
              casual: "Thanks. Can I get my court date pushed back? I was supposed to fly home before then.",
              standard:
                "Thank you. Can my court appearance be delayed? I was supposed to fly home before the court date.",
              formal:
                "I appreciate that. Is it possible for my court appearance to be postponed? My original travel plans entailed my departure prior to the scheduled court date.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "Your lawyer can request a continuance — that's a postponement of the court date. But you may not be allowed to leave the country until the case is resolved. This is something your attorney needs to discuss with the court. Do not leave the country without the court's permission, or you could face additional charges.",
            textZh:
              "你的律师可以申请延期——就是推迟出庭日期。但在案件解决之前，你可能不被允许出境。这需要你的律师跟法院沟通。未经法院允许不要出境，否则可能面临额外的指控。",
            keyPhrases: [
              { en: "continuance", zh: "延期" },
              { en: "postponement", zh: "推迟" },
              { en: "resolved", zh: "解决" },
              { en: "court's permission", zh: "法院的许可" },
              { en: "additional charges", zh: "额外的指控" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your lawyer can ask for a continuance — basically pushing the court date back. But heads up: you might not be allowed to leave the country until it's settled. Do NOT skip town without the court's okay.",
                textZh:
                  "你的律师可以申请延期——就是推迟出庭日期。但注意：案件解决前你可能不被允许出境。没有法院许可不要离开。",
                actionHint: "不要未经许可出境",
                frequency: "common",
              },
              {
                textEn:
                  "A good lawyer can get the date pushed back, no problem. The thing is, leaving the country before the case wraps up could land you in even bigger trouble. Talk to your lawyer about it.",
                textZh: "好律师推迟日期没问题。但关键是，案件结束前出境可能让你惹上更大的麻烦。跟你的律师商量。",
                actionHint: "听律师的建议",
                frequency: "common",
              },
            ],
            casualVersion:
              "Your lawyer can ask for a continuance – that just means pushing the court date back. But you might not be allowed to leave the country 'til the case is over. Your attorney needs to talk to the court about this. Don't leave without court permission, or you could get more charges.",
            culturalNote: "未经法院允许出境可能导致更严重指控",
            commonMistake: {
              wrong: "You can't leave the country until the case resolve.",
              correct: "You may not be allowed to leave the country until the case is resolved.",
              explanation: "“resolve” 动词需要被动语态 “is resolved”，或用名词 “resolution”。",
            },
            formalityVariants: {
              casual:
                "Your lawyer can ask for a continuance – that just means pushing the court date back. But you might not be allowed to leave the country 'til the case is over. Your attorney needs to talk to the court about this. Don't leave without court permission, or you could get more charges.",
              standard:
                "Your lawyer can request a continuance — that's a postponement of the court date. But you may not be allowed to leave the country until the case is resolved. This is something your attorney needs to discuss with the court. Do not leave the country without the court's permission, or you could face additional charges.",
              formal:
                "Your legal counsel is authorized to file a motion for a continuance, which signifies a postponement of the judicial proceeding. However, it is probable that you will be prohibited from exiting the country until the matter is fully adjudicated. This specific issue must be addressed by your attorney with the presiding court. It is imperative that you do not depart the country without explicit judicial authorization, as doing so may result in additional criminal charges.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I understand. I'll contact one of these lawyers right away. Thank you for explaining everything so clearly.",
            textZh: "明白了。我马上联系其中一位律师。谢谢你解释得这么清楚。",
            casualVersion: "Got it. I'll hit up one of these lawyers ASAP. Thanks for explaining everything so clear.",
            commonMistake: {
              wrong: "Thank you for explaining everything so clear.",
              correct: "Thank you for explaining everything so clearly.",
              explanation: "“clearly” 是副词，修饰动词 “explaining”。",
            },
            formalityVariants: {
              casual: "Got it. I'll hit up one of these lawyers ASAP. Thanks for explaining everything so clear.",
              standard:
                "I understand. I'll contact one of these lawyers right away. Thank you for explaining everything so clearly.",
              formal:
                "I comprehend. I shall endeavor to contact one of these legal professionals expeditiously. I am grateful for your lucid explanation of the situation.",
            },
          },
          {
            speaker: "them",
            role: "领事官员",
            textEn:
              "You're welcome. Remember, we're here to help. If you're detained at any point, you have the right to request consular access — that means contacting us. Call our emergency hotline any time. And don't sign any documents you don't understand without your lawyer present.",
            textZh:
              "不客气。记住，我们在这里帮助你。如果你在任何时候被扣留，你有权要求领事探视——就是联系我们。任何时候都可以拨打我们的紧急热线。不要在没有律师在场的情况下签署任何你不理解的文件。",
            keyPhrases: [
              { en: "consular access", zh: "领事探视" },
              { en: "right to request", zh: "有权要求" },
              { en: "emergency hotline", zh: "紧急热线" },
              { en: "don't sign any documents", zh: "不要签署任何文件" },
              { en: "lawyer present", zh: "律师在场" },
            ],
            culturalNote:
              "在国外遇到法律问题时，不要慌张。你有权联系本国大使馆（领事探视权），有权请律师，有权要求翻译。不要签署你不理解的文件。",
            alternativeExpressions: [
              {
                textEn:
                  "Anytime. If you get picked up by the cops again, tell them you want to contact your consulate — that's your right. And never sign anything without your lawyer there. Here's our emergency number.",
                textZh:
                  "随时找我们。如果再被警察带走，跟他们说你要联系领事馆——这是你的权利。没有律师在场不要签任何东西。这是我们的紧急电话。",
                actionHint: "记住领事探视权",
                frequency: "common",
              },
              {
                textEn:
                  "One last thing — if they detain you, you have the right to consular access. That means calling us. Our hotline is 24/7. And seriously, don't sign a single thing you don't understand.",
                textZh:
                  "最后一件事——如果被扣留，你有领事探视权。就是打电话给我们。我们热线24小时在线。认真说，任何你不理解的东西都不要签字。",
                actionHint: "不懂的文件绝不签字",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. Just remember, we're here to help. If you get detained, you can ask for consular access – meaning, you call us. Our emergency hotline's open anytime. And don't sign anything you don't get without your lawyer there.",
            commonMistake: {
              wrong: "Don't sign any documents you don't understand without your lawyer not here.",
              correct: "Don't sign any documents you don't understand without your lawyer present.",
              explanation: "“without...present” 是地道说法，表示“没有…在场”。",
            },
            formalityVariants: {
              casual:
                "No problem. Just remember, we're here to help. If you get detained, you can ask for consular access – meaning, you call us. Our emergency hotline's open anytime. And don't sign anything you don't get without your lawyer there.",
              standard:
                "You're welcome. Remember, we're here to help. If you're detained at any point, you have the right to request consular access — that means contacting us. Call our emergency hotline any time. And don't sign any documents you don't understand without your lawyer present.",
              formal:
                "You are most welcome. Please bear in mind that our role is to provide assistance. Should you be detained at any juncture, you retain the right to request consular access, which entails contacting our office. Our emergency hotline is operational at all hours. Furthermore, refrain from affixing your signature to any document you do not fully comprehend, particularly without the presence of your legal counsel.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 火灾 ====================
  {
    id: "emergency-fire",
    category: "emergency",
    titleZh: "火灾",
    titleEn: "Fire Emergency",
    description: "遇到火灾警报、紧急疏散和联系消防部门的场景",
    otherRole: "消防员/酒店工作人员",
    otherRoleIcon: "flame",
    flows: [
      // --- Flow 1: 酒店火警疏散 ---
      {
        id: "hotel-fire",
        titleZh: "酒店火警疏散",
        titleEn: "Hotel Fire Alarm Evacuation",
        description: "酒店火警响起，紧急疏散并寻求帮助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "The fire alarm just went off! Is this real or a drill?",
            textZh: "火警刚响了！这是真的还是演习？",
            culturalNote: "听到火警，不要假设是演习。先按真实情况对待，迅速撤离。",
            casualVersion: "Fire alarm just went off! Real or a drill?",
            formalityVariants: {
              casual: "Fire alarm just went off! Real or a drill?",
              standard: "The fire alarm just went off! Is this real or a drill?",
              formal:
                "Excuse me, the fire alarm has just been activated. Could you please confirm if this is a genuine emergency or a scheduled drill?",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "Please treat this as a real emergency! Do not use the elevators. Take the stairwell to your left and proceed to the ground floor. Leave your belongings — your safety comes first.",
            textZh: "请当作真正的紧急情况处理！不要使用电梯。走左边的楼梯间到一楼。不要管行李——你的安全最重要。",
            keyPhrases: [
              { en: "fire alarm", zh: "火警" },
              { en: "do not use the elevators", zh: "不要使用电梯" },
              { en: "stairwell", zh: "楼梯间" },
              { en: "your safety comes first", zh: "你的安全最重要" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "This is NOT a drill! Take the stairs, not the elevator! Head to the ground floor now. Leave your stuff — just go!",
                textZh: "这不是演习！走楼梯，不要坐电梯！立刻下到一楼。别管行李——快走！",
                actionHint: "立刻走楼梯撤离",
                frequency: "common",
              },
              {
                textEn:
                  "Everyone out NOW! Use the emergency stairs on your left. No elevators. Don't stop to pack — your life is more important than your luggage.",
                textZh: "所有人现在出去！走左边的紧急楼梯。不要坐电梯。不要停下来收拾——你的命比行李重要。",
                actionHint: "立即行动不要犹豫",
                frequency: "common",
              },
            ],
            casualVersion:
              "Treat this like a real emergency! No elevators. Take the stairs on your left to the ground floor. Leave your stuff — your safety's number one.",
            formalityVariants: {
              casual:
                "Treat this like a real emergency! No elevators. Take the stairs on your left to the ground floor. Leave your stuff — your safety's number one.",
              standard:
                "Please treat this as a real emergency! Do not use the elevators. Take the stairwell to your left and proceed to the ground floor. Leave your belongings — your safety comes first.",
              formal:
                "We urge you to treat this situation as an actual emergency. For your safety, kindly refrain from using the elevators. Please utilize the stairwell located to your left and evacuate to the ground floor immediately. Your personal belongings can be left behind; your safety is our utmost priority.",
            },
          },
          {
            speaker: "you",
            textEn: "Where is the assembly point? And what about people on higher floors?",
            textZh: "集合点在哪里？高楼层的人怎么办？",
            casualVersion: "Assembly point? And what about folks on higher floors?",
            formalityVariants: {
              casual: "Assembly point? And what about folks on higher floors?",
              standard: "Where is the assembly point? And what about people on higher floors?",
              formal:
                "Could you please inform me of the designated assembly point? Furthermore, what protocols are in place for individuals located on higher floors?",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "The assembly point is in the parking lot across the street — look for the staff in yellow vests. Our team is going floor by floor to make sure everyone gets out. The fire department has been called.",
            textZh:
              "集合点在对面街的停车场——找穿黄色背心的工作人员。我们的团队正在逐层确认每个人都撤出了。消防部门已经叫了。",
            keyPhrases: [
              { en: "assembly point", zh: "集合点" },
              { en: "yellow vests", zh: "黄色背心" },
              { en: "floor by floor", zh: "逐层" },
              { en: "fire department", zh: "消防部门" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Head to the parking lot across the street — you'll see our staff in bright yellow vests. We're checking every floor right now. Fire trucks are on the way.",
                textZh: "去街对面的停车场——你会看到穿亮黄背心的工作人员。我们正在检查每一层。消防车在路上了。",
                actionHint: "到对面停车场集合",
                frequency: "common",
              },
              {
                textEn:
                  "Assembly point is the parking lot on the other side of the street. Look for the yellow vests. Our team is sweeping all the floors. Fire department's been called.",
                textZh: "集合点在街对面的停车场。找穿黄色背心的。我们的团队在清查所有楼层。消防部门已经叫了。",
                actionHint: "跟着黄背心人员",
                frequency: "common",
              },
            ],
            casualVersion:
              "Assembly point's in the parking lot across the street — look for staff in yellow vests. Our team's going floor by floor to make sure everyone's out. Fire department's been called.",
            formalityVariants: {
              casual:
                "Assembly point's in the parking lot across the street — look for staff in yellow vests. Our team's going floor by floor to make sure everyone's out. Fire department's been called.",
              standard:
                "The assembly point is in the parking lot across the street — look for the staff in yellow vests. Our team is going floor by floor to make sure everyone gets out. The fire department has been called.",
              formal:
                "The designated assembly point is situated in the parking lot directly across the street; please identify staff members wearing yellow vests. Our teams are systematically sweeping each floor to ensure a complete evacuation. The fire department has been notified and is en route.",
            },
          },
          {
            speaker: "you",
            textEn: "I can smell smoke coming from the hallway! It's getting hard to see.",
            textZh: "我能闻到走廊传来的烟味！快看不清了。",
            casualVersion: "Smell smoke from the hallway! Can barely see.",
            formalityVariants: {
              casual: "Smell smoke from the hallway! Can barely see.",
              standard: "I can smell smoke coming from the hallway! It's getting hard to see.",
              formal:
                "I detect a significant smoke odor emanating from the hallway. Visibility is becoming severely impaired.",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "Stay low to the ground — the air is cleaner below the smoke. Cover your nose and mouth with a wet cloth if possible. Follow the illuminated exit signs along the floor. Keep moving toward the stairwell.",
            textZh:
              "蹲低——烟雾下方空气更干净。如果可以的话用湿布捂住口鼻。沿着地面的发光出口标志走。继续朝楼梯间移动。",
            keyPhrases: [
              { en: "stay low to the ground", zh: "蹲低/贴地" },
              { en: "wet cloth", zh: "湿布" },
              { en: "illuminated exit signs", zh: "发光出口标志" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Get down low! Crawl if you have to — the smoke rises so the air near the floor is better. Cover your face with something wet. Follow the exit signs on the floor.",
                textZh: "蹲低！必要时爬行——烟往上走所以地面附近空气好一些。用湿的东西捂住脸。跟着地面的出口标志走。",
                actionHint: "贴地行动",
                frequency: "common",
              },
              {
                textEn:
                  "Keep your head below the smoke! If you've got a wet cloth, breathe through it. See those green lights along the floor? Follow them to the exit.",
                textZh: "把头低到烟雾下面！如果有湿布就隔着它呼吸。看到地面上的绿灯了吗？跟着它们走到出口。",
                actionHint: "跟着绿色出口灯",
                frequency: "common",
              },
            ],
            casualVersion:
              "Stay low — air's cleaner under the smoke. Cover your nose/mouth with a wet cloth if you can. Follow the lit exit signs on the floor. Keep moving to the stairs.",
            formalityVariants: {
              casual:
                "Stay low — air's cleaner under the smoke. Cover your nose/mouth with a wet cloth if you can. Follow the lit exit signs on the floor. Keep moving to the stairs.",
              standard:
                "Stay low to the ground — the air is cleaner below the smoke. Cover your nose and mouth with a wet cloth if possible. Follow the illuminated exit signs along the floor. Keep moving toward the stairwell.",
              formal:
                "Please remain low to the ground, as the air quality is superior beneath the smoke layer. Should circumstances allow, cover your nose and mouth with a damp cloth. Orient yourself by following the illuminated exit signs positioned at floor level. Continue your progression towards the designated stairwell.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm out now. My friend is still inside — room 805! She couldn't find the stairs.",
            textZh: "我出来了。我朋友还在里面——805房间！她找不到楼梯。",
            casualVersion: "I'm out. My friend's still inside — room 805! Couldn't find the stairs.",
            formalityVariants: {
              casual: "I'm out. My friend's still inside — room 805! Couldn't find the stairs.",
              standard: "I'm out now. My friend is still inside — room 805! She couldn't find the stairs.",
              formal:
                "I have successfully evacuated. However, my friend remains inside, in room 805. She reportedly experienced difficulty locating the stairwell.",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn:
              "We're aware and our team is sweeping that floor right now. Do NOT go back inside. Give me the room number and your friend's name — we'll radio our crew upstairs. Has she called 911?",
            textZh:
              "我们知道了，我们的队伍正在搜索那一层。不要回去里面。告诉我房间号和你朋友的名字——我们会无线电通知楼上的队员。她打了911吗？",
            keyPhrases: [
              { en: "sweeping that floor", zh: "搜索那一层" },
              { en: "do NOT go back inside", zh: "不要回去里面" },
              { en: "radio our crew", zh: "无线电通知队员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We know about it. Our guys are up there right now. Do NOT go back in — you'll just get in the way. Give me the room number and her name. We'll radio up.",
                textZh:
                  "我们知道了。我们的人正在上面。不要回去——你只会碍事。告诉我房间号和她的名字。我们会无线电通知上面。",
                actionHint: "提供房间号和姓名",
                frequency: "common",
              },
              {
                textEn:
                  "Stay put! Our team is already on that floor. Give me the room number and your friend's name — I'll get it on the radio right now.",
                textZh: "待着别动！我们的队伍已经在那层了。告诉我房间号和你朋友的名字——我马上用无线电通知。",
                actionHint: "不要试图返回救人",
                frequency: "common",
              },
            ],
            casualVersion:
              "We know, and our team's sweeping that floor now. DO NOT go back in. Give me the room number and your friend's name — we'll radio our crew upstairs. Did she call 911?",
            culturalNote: "911是美国紧急电话，用于火警、医疗、警察。",
            formalityVariants: {
              casual:
                "We know, and our team's sweeping that floor now. DO NOT go back in. Give me the room number and your friend's name — we'll radio our crew upstairs. Did she call 911?",
              standard:
                "We're aware and our team is sweeping that floor right now. Do NOT go back inside. Give me the room number and your friend's name — we'll radio our crew upstairs. Has she called 911?",
              formal:
                "We are fully apprised of the situation, and our team is currently conducting a sweep of that specific floor. Under no circumstances should you re-enter the building. Please provide the room number and your friend's name so we can relay this information to our crew upstairs. Has she contacted emergency services via 911?",
            },
          },
          {
            speaker: "you",
            textEn: "Her name is Li Wei, room 805. I'll try calling her now. Thank you — please hurry!",
            textZh: "她叫李伟，805房间。我现在打电话给她。谢谢——请快一点！",
            casualVersion: "Li Wei, room 805. I'll try calling her now. Thanks — please hurry!",
            formalityVariants: {
              casual: "Li Wei, room 805. I'll try calling her now. Thanks — please hurry!",
              standard: "Her name is Li Wei, room 805. I'll try calling her now. Thank you — please hurry!",
              formal:
                "Her name is Li Wei, in room 805. I will attempt to contact her immediately. Thank you for your assistance; a swift response would be greatly appreciated.",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn:
              "We're on it. Tell her to stay in the room with the door closed, put wet towels at the base of the door, and stay near the window. We'll get to her. Stay at the assembly point and we'll update you.",
            textZh:
              "我们正在处理。告诉她待在房间里关上门，用湿毛巾塞在门缝底下，待在窗户边。我们会找到她的。待在集合点，我们会更新情况。",
            keyPhrases: [
              { en: "stay in the room", zh: "待在房间里" },
              { en: "wet towels at the base of the door", zh: "湿毛巾塞门缝" },
              { en: "stay near the window", zh: "待在窗户边" },
            ],
            culturalNote: "如果被困在失火的建筑里无法逃出，关上门、用湿布堵住门缝、到窗户边等待救援是正确的做法。",
            alternativeExpressions: [
              {
                textEn:
                  "Roger that. Tell her: close the door, stuff wet towels under it, and get by the window. We'll be there in minutes. Just stay at the assembly point and we'll keep you posted.",
                textZh:
                  "收到。告诉她：关上门，湿毛巾塞门缝底下，到窗户边。我们几分钟就到。待在集合点我们会通知你进展。",
                actionHint: "打电话告知朋友怎么做",
                frequency: "common",
              },
              {
                textEn:
                  "We're on our way to her. Pass this along: door shut, wet towels at the bottom, stay by the window where we can see her. Do not let her try to leave the room.",
                textZh: "我们正在去找她。转告她：门关好，湿毛巾堵底下，待在窗边让我们能看到她。不要让她试图离开房间。",
                actionHint: "确保朋友不要自行逃跑",
                frequency: "common",
              },
            ],
            casualVersion:
              "We're on it. Tell her to stay in the room, door closed, wet towels at the bottom of the door, and stay by the window. We'll get her. Stay at the assembly point, and we'll update you.",
            formalityVariants: {
              casual:
                "We're on it. Tell her to stay in the room, door closed, wet towels at the bottom of the door, and stay by the window. We'll get her. Stay at the assembly point, and we'll update you.",
              standard:
                "We're on it. Tell her to stay in the room with the door closed, put wet towels at the base of the door, and stay near the window. We'll get to her. Stay at the assembly point and we'll update you.",
              formal:
                "We are actively addressing the situation. Please instruct her to remain within the room, ensuring the door is securely closed, placing wet towels at the base of the door, and positioning herself near the window. We will reach her. Kindly remain at the designated assembly point, and we will provide you with updates.",
            },
          },
        ],
      },

      // --- Flow 2: 报告发现火情 ---
      {
        id: "report-fire",
        titleZh: "报告发现火情",
        titleEn: "Reporting a Fire",
        description: "发现火情，拉响警报并报警",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "911? There's a fire in the building I'm in — the Sunset Apartments on 3rd Street. I can see flames coming from the kitchen of the apartment next door.",
            textZh: "911吗？我所在的楼着火了——第三街的日落公寓。我能看到隔壁公寓厨房有火焰冒出来。",
            casualVersion:
              "911? Fire in my building! Sunset Apts, 3rd Street. Seein' flames from the kitchen next door.",
            commonMistake: {
              wrong: "My building has fire.",
              correct: "There's a fire in my building.",
              explanation: "中式英语常省略'there be'结构，听起来不自然。",
            },
            formalityVariants: {
              casual: "Yo, 911? My building's on fire! Sunset Apts on 3rd. Flames comin' from the kitchen next door.",
              standard:
                "911? There's a fire in the building I'm in—the Sunset Apartments on 3rd Street. I can see flames coming from the kitchen of the apartment next door.",
              formal:
                "Hello, this is 911? I am reporting a fire at my current location, the Sunset Apartments on 3rd Street. I observe flames emanating from the kitchen of the adjacent apartment.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "Fire department is being dispatched. What floor are you on? How big are the flames? Is anyone trapped?",
            textZh: "消防队已经派出。你在几楼？火有多大？有人被困吗？",
            keyPhrases: [
              { en: "dispatched", zh: "已派出" },
              { en: "trapped", zh: "被困" },
              { en: "flames", zh: "火焰" },
            ],
            alternativeExpressions: [
              {
                textEn: "Trucks are on the way. What floor? How bad is the fire? Is anybody stuck in there?",
                textZh: "消防车在路上了。你在几楼？火有多大？有人被困吗？",
                actionHint: "提供楼层和火情信息",
                frequency: "common",
              },
              {
                textEn:
                  "We're sending units now. I need your floor number and a description of the fire. Do you know if anyone is trapped?",
                textZh: "我们正在派人。我需要你的楼层和火情描述。你知道有没有人被困吗？",
                actionHint: "尽量提供详细信息",
                frequency: "common",
              },
            ],
            casualVersion: "Fire dept's on its way. What floor? How big's the fire? Anyone stuck?",
            formalityVariants: {
              casual: "Fire's on the way. What floor you on? How big's the fire? Anyone stuck?",
              standard:
                "Fire department is being dispatched. What floor are you on? How big are the flames? Is anyone trapped?",
              formal:
                "The fire department has been dispatched. Could you please state your current floor? Could you describe the size of the flames? Is there anyone confirmed to be trapped?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm on the 4th floor. The flames are coming out of their window. I don't know if anyone is inside that apartment. I pulled the fire alarm in the hallway.",
            textZh: "我在4楼。火焰从他们的窗户冒出来。我不知道那间公寓里有没有人。我拉了走廊的火警。",
            casualVersion:
              "I'm on 4. Flames are outta their window. Don't know if anyone's inside. Pulled the alarm in the hall.",
            commonMistake: {
              wrong: "Flames come out their window.",
              correct: "The flames are coming out of their window.",
              explanation: "中式英语常省略 be 动词和进行时态，且介词使用不当。",
            },
            formalityVariants: {
              casual:
                "4th floor. Flames are shootin' out their window. No idea if anyone's in there. Hit the fire alarm in the hall.",
              standard:
                "I'm on the 4th floor. The flames are coming out of their window. I don't know if anyone is inside that apartment. I pulled the fire alarm in the hallway.",
              formal:
                "I am currently located on the fourth floor. The flames are visible emanating from their window. I am uncertain if the occupants are present within that apartment. I have activated the fire alarm in the common hallway.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "Good — you did the right thing pulling the alarm. Now leave the building immediately using the stairs. Do not try to fight the fire yourself. Is there heavy smoke in your hallway?",
            textZh: "好的——拉火警做得对。现在立刻走楼梯离开大楼。不要试图自己灭火。你的走廊有浓烟吗？",
            keyPhrases: [
              { en: "pulled the alarm", zh: "拉了火警" },
              { en: "fight the fire", zh: "灭火" },
              { en: "heavy smoke", zh: "浓烟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Smart move pulling the alarm. Now get out of there — take the stairs, not the elevator. Don't try to put it out yourself. Is there a lot of smoke in your hallway?",
                textZh: "拉火警做得对。现在赶紧出去——走楼梯，不要坐电梯。不要试图自己灭火。你的走廊烟大吗？",
                actionHint: "立刻撤离",
                frequency: "common",
              },
              {
                textEn:
                  "Good thinking on the alarm. Your priority now is getting out. Use the stairs. Do NOT try to fight the fire. How's the smoke in your area?",
                textZh: "拉火警想得好。你现在的首要任务是出去。走楼梯。不要试图灭火。你那边烟怎么样？",
                actionHint: "自身安全第一",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good, pulling that alarm was smart. Get out now, use the stairs. Don't try fightin' it. Heavy smoke in your hall?",
            formalityVariants: {
              casual:
                "Good, smart move with the alarm. Now get out, use the stairs. Don't fight it. Heavy smoke in your hall?",
              standard:
                "Good — you did the right thing pulling the alarm. Now leave the building immediately using the stairs. Do not try to fight the fire yourself. Is there heavy smoke in your hallway?",
              formal:
                "Understood — you performed correctly by activating the alarm. Please evacuate the building immediately via the stairwell. Do not attempt to extinguish the fire on your own. Is there a significant amount of smoke present in your hallway?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Some smoke, but I can still see. I'm heading to the stairwell now. My elderly neighbor on this floor has mobility issues — she might need help.",
            textZh: "有一些烟，但还能看清。我正在往楼梯间走。这层有一位老邻居行动不便——她可能需要帮助。",
            casualVersion:
              "A little smoke, but I can still see. Headin' to the stairwell now. My elderly neighbor on this floor has trouble movin' — she might need help.",
            commonMistake: {
              wrong: "My old neighbor has mobility problem.",
              correct: "My elderly neighbor has mobility issues.",
              explanation: "表达“行动不便”时，'mobility issues' 比 'mobility problem' 更自然常用。",
            },
            formalityVariants: {
              casual:
                "Just some smoke, can still see. Going to the stairs now. Old neighbor here can't move well — she might need help.",
              standard:
                "Some smoke, but I can still see. I'm heading to the stairwell now. My elderly neighbor on this floor has mobility issues — she might need help.",
              formal:
                "There is some smoke present, however, visibility remains adequate. I am currently proceeding to the stairwell. My elderly neighbor on this floor is experiencing mobility issues and may require assistance.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "Knock on her door loudly and tell her to evacuate. If she can't move on her own, help her to the stairwell if it's safe. But if there's heavy smoke between you and her, do NOT risk it — tell us her apartment number and our firefighters will get her.",
            textZh:
              "大声敲她的门让她撤离。如果她自己走不了，在安全的情况下帮她到楼梯间。但如果你和她之间有浓烟，不要冒险——告诉我们她的公寓号，消防员会去找她。",
            keyPhrases: [
              { en: "evacuate", zh: "撤离" },
              { en: "mobility issues", zh: "行动不便" },
              { en: "do NOT risk it", zh: "不要冒险" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bang on her door and yell for her to get out. If she needs help, help her to the stairs — but ONLY if the hallway is clear of smoke. If it's smoky between you and her, give us the apartment number and we'll get her.",
                textZh:
                  "使劲敲她的门叫她出来。如果她需要帮助，帮她到楼梯间——但只有在走廊没烟的情况下。如果你和她之间有烟，告诉我们公寓号我们去找她。",
                actionHint: "安全时才帮助邻居",
                frequency: "common",
              },
              {
                textEn:
                  "Pound on her door — make sure she hears you. If it's safe to reach her, help her out. But if there's thick smoke, don't risk it. Tell me her unit number and our crew will handle it.",
                textZh:
                  "用力敲她的门——确保她听到。如果安全能到她那里就帮她出来。但如果烟很浓，不要冒险。告诉我她的门牌号，我们的人会处理。",
                actionHint: "浓烟时不要冒险",
                frequency: "common",
              },
            ],
            casualVersion:
              "Bang on her door, tell her to get out. If she can't move, help her to the stairs if it's safe. But if there's tons of smoke, DON'T risk it — give us her apt number and the fire guys'll get her.",
            formalityVariants: {
              casual:
                "Knock loud, tell her to leave. If she can't move, help her to the stairs if it's safe. But if it's super smoky, NO risks — give us her apt number and the firemen will grab her.",
              standard:
                "Knock on her door loudly and tell her to evacuate. If she can't move on her own, help her to the stairwell if it's safe. But if there's heavy smoke between you and her, do NOT risk it — tell us her apartment number and our firefighters will get her.",
              formal:
                "Please knock on her door with urgency and instruct her to evacuate. Should she be unable to move unassisted, please assist her to the stairwell, provided it is safe to do so. However, if dense smoke is present between your positions, do NOT jeopardize your safety — inform us of her apartment number, and our fire personnel will retrieve her.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I've knocked — she's coming to the door now. We're heading downstairs together. How far away is the fire truck?",
            textZh: "我敲了——她正走到门口。我们一起下楼。消防车还有多远？",
            casualVersion: "Knocked — she's at the door. We're goin' downstairs together. How far's the truck?",
            commonMistake: {
              wrong: "How far the fire truck?",
              correct: "How far away is the fire truck?",
              explanation: "疑问句中 be 动词和主语的倒装是中国学生常犯的错误。",
            },
            formalityVariants: {
              casual: "Knocked, she's comin'. We're goin' down. Where's the truck?",
              standard:
                "I've knocked — she's coming to the door now. We're heading downstairs together. How far away is the fire truck?",
              formal:
                "I have knocked, and she is currently approaching the door. We are now proceeding downstairs together. Could you please advise on the estimated distance or arrival time of the fire truck?",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "Units are about 3 minutes out. Keep moving downstairs and go to a safe distance from the building — at least across the street. Stay on the line with me until you're safely outside.",
            textZh: "大约3分钟到。继续下楼，到离建筑安全距离的地方——至少到街对面。在你安全出去之前保持通话。",
            keyPhrases: [
              { en: "units", zh: "消防队（无线电用语）" },
              { en: "minutes out", zh: "还有几分钟到" },
              { en: "safe distance", zh: "安全距离" },
              { en: "stay on the line", zh: "保持通话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fire trucks are 3 minutes away. Keep going downstairs and get across the street at least. Stay on the phone with me until you're out.",
                textZh: "消防车3分钟到。继续下楼，至少到街对面。出去之前不要挂电话。",
                actionHint: "保持通话直到安全",
                frequency: "common",
              },
              {
                textEn:
                  "Almost there — 3 minutes out. Don't stop moving. Get well away from the building once you're out. I'm staying on the line with you.",
                textZh: "快到了——3分钟。不要停下来。出去后远离建筑。我一直在线。",
                actionHint: "远离建筑不要围观",
                frequency: "common",
              },
            ],
            casualVersion:
              "Units are like 3 min out. Keep goin' downstairs, get far from the building — at least across the street. Stay on the phone 'til you're safe outside.",
            formalityVariants: {
              casual:
                "They're 3 min out. Keep goin' down, get away from the building — across the street, at least. Stay on the line 'til you're out.",
              standard:
                "Units are about 3 minutes out. Keep moving downstairs and go to a safe distance from the building — at least across the street. Stay on the line with me until you're safely outside.",
              formal:
                "Emergency units are approximately three minutes from your location. Please continue your descent via the stairwell and establish a safe distance from the building, ideally across the street. Maintain communication with me until you have successfully evacuated to a secure outdoor position.",
            },
          },
          {
            speaker: "you",
            textEn: "We're outside now. I can see the fire trucks arriving. Thank you for your help.",
            textZh: "我们出来了。我能看到消防车到了。谢谢你的帮助。",
            casualVersion: "We're out. Seein' the fire trucks show up. Thanks for the help.",
            commonMistake: {
              wrong: "Thank you your help.",
              correct: "Thank you for your help.",
              explanation: "'Thank you' 后接受帮助的内容时，需使用介词 'for'。",
            },
            formalityVariants: {
              casual: "We're outside. Fire trucks are here. Thanks.",
              standard: "We're outside now. I can see the fire trucks arriving. Thank you for your help.",
              formal:
                "We have successfully exited the building. I observe the arrival of the fire trucks. I appreciate your assistance.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "You did great. Stay at a safe distance and a firefighter will come talk to you for more information. Don't re-enter the building until the fire department gives the all-clear. You're safe now.",
            textZh:
              "你做得很好。待在安全距离，消防员会来找你了解更多情况。在消防部门宣布安全之前不要回去。你现在安全了。",
            keyPhrases: [
              { en: "all-clear", zh: "解除警报/安全信号" },
              { en: "re-enter", zh: "重新进入" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nice job getting everyone out safely. Stay back and one of our firefighters will come over for a quick debrief. Don't go back in until fire gives the all-clear.",
                textZh:
                  "做得好，所有人都安全出来了。待在远处，消防员会过来简单了解情况。消防部门宣布安全之前不要回去。",
                actionHint: "等消防员来找你",
                frequency: "common",
              },
              {
                textEn:
                  "You handled that really well. Keep your distance from the building. A firefighter will be over to get more details from you. And absolutely do not go back inside.",
                textZh: "你处理得很好。远离建筑。消防员会过来向你了解更多情况。绝对不要回去。",
                actionHint: "配合消防员调查",
                frequency: "common",
              },
            ],
            casualVersion:
              "You did good. Stay back and a firefighter'll come chat with ya for info. Don't go back in 'til the fire dept says it's clear. You're safe.",
            formalityVariants: {
              casual:
                "You did good. Stay away, a firefighter'll talk to you for details. Don't go back in 'til they say it's fine. You're safe.",
              standard:
                "You did great. Stay at a safe distance and a firefighter will come talk to you for more information. Don't re-enter the building until the fire department gives the all-clear. You're safe now.",
              formal:
                "You performed admirably. Please maintain a safe distance, and a firefighter will approach you shortly to gather additional information. Do not re-enter the building until the fire department issues a complete all-clear. Your safety is now assured.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 被骗 ====================
  {
    id: "emergency-scam",
    category: "emergency",
    titleZh: "被骗",
    titleEn: "Tourist Scam & Fraud",
    description: "在海外遭遇旅游诈骗，报案、冻结信用卡和寻求帮助",
    otherRole: "警察/银行客服",
    otherRoleIcon: "shield-alert",
    flows: [
      // --- Flow 1: 发现被骗并报案 ---
      {
        id: "report-scam",
        titleZh: "发现被骗并报案",
        titleEn: "Discovering & Reporting a Scam",
        description: "发现自己被骗了，去警察局报案并收集证据",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Officer, I think I've been scammed. Someone sold me fake concert tickets outside the stadium. I paid $200 cash and when I tried to get in, they said the tickets were counterfeit.",
            textZh:
              "警官，我觉得我被骗了。有人在体育场外卖给我假的演唱会门票。我付了200美元现金，进场时他们说票是假的。",
            casualVersion:
              "Officer, think I got scammed. Someone sold me fake concert tickets outside the stadium. Paid $200 cash, and when I tried to get in, they said the tickets were fake.",
            culturalNote: "在美国报案，直接陈述事实即可，无需过多客套或铺垫。",
            commonMistake: {
              wrong: "I think I was cheated.",
              correct: "I think I've been scammed.",
              explanation: "“cheat”听起来更像小孩子间的小把戏，“scam”更正式指诈骗。",
            },
            formalityVariants: {
              casual:
                "Officer, I think I got scammed. Someone sold me fake concert tickets outside the stadium. Paid $200 cash, and they wouldn't let me in 'cause they were fake.",
              standard:
                "Officer, I believe I've been scammed. Someone sold me counterfeit concert tickets outside the stadium. I paid $200 in cash, and when I attempted to enter, I was informed the tickets were fake.",
              formal:
                "Officer, I wish to report a potential scam. I was sold fraudulent concert tickets outside the stadium, for which I paid $200 cash. Upon attempting entry, I was advised that the tickets were counterfeit.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "I'm sorry that happened. Unfortunately, ticket scams are common around here. Can you describe the person who sold you the tickets? And did you get any kind of receipt?",
            textZh: "很遗憾这种事发生了。这附近假票骗局很常见。你能描述一下卖票给你的人吗？有没有拿到任何收据？",
            keyPhrases: [
              { en: "scammed", zh: "被骗" },
              { en: "counterfeit", zh: "假冒的/伪造的" },
              { en: "ticket scams", zh: "假票骗局" },
              { en: "describe the person", zh: "描述那个人" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's a bummer. Yeah, fake ticket scams are a huge problem around stadiums. Can you tell me what the guy looked like? Got any kind of receipt or text messages?",
                textZh: "太倒霉了。对，体育场附近假票骗局特别多。能告诉我那个人长什么样吗？有没有收据或短信记录？",
                actionHint: "描述骗子外貌特征",
                frequency: "common",
              },
              {
                textEn:
                  "Ugh, we see this all the time around here. What did the seller look like? And do you still have the fake tickets? Those are evidence.",
                textZh: "唉，这附近经常发生这种事。卖票的人长什么样？假票还在吗？那是证据。",
                actionHint: "保留假票作为证据",
                frequency: "common",
              },
            ],
            casualVersion:
              "Man, sorry that happened. Ticket scams are super common here. Can you describe the person? Get any kind of receipt?",
            formalityVariants: {
              casual:
                "Oh, man, sorry about that. Ticket scams happen a lot around here. Can you describe 'em? Any receipt?",
              standard:
                "I'm sorry to hear that. Unfortunately, ticket scams are quite common in this area. Could you please describe the individual who sold you the tickets? Did you receive any form of receipt?",
              formal:
                "My apologies that you've experienced this. Regrettably, instances of ticket fraud are prevalent in this vicinity. Would you be able to provide a description of the individual who facilitated the transaction? Furthermore, did you obtain any documentation of the purchase, such as a receipt?",
            },
          },
          {
            speaker: "you",
            textEn:
              "He was about 5'10, wearing a black jacket and a baseball cap. No receipt — it was a street transaction. I was stupid not to use official channels.",
            textZh: "他大约5尺10寸高，穿黑色夹克戴棒球帽。没有收据——是路边交易。我太蠢了没通过正规渠道买。",
            casualVersion:
              "He was, like, 5'10, black jacket, baseball cap. No receipt — just a street thing. Super dumb of me not to go through official channels.",
            commonMistake: {
              wrong: "I was stupid not to use official road.",
              correct: "I was stupid not to use official channels.",
              explanation: "“channels”指渠道、途径，“road”指路，意思不符。",
            },
            formalityVariants: {
              casual:
                "He was, like, 5'10, black jacket, baseball cap. No receipt, just a street thing. Kicking myself for not using official channels.",
              standard:
                "He was approximately 5'10, wearing a black jacket and a baseball cap. There was no receipt as it was a street transaction. I regret not having used official channels for the purchase.",
              formal:
                "He was estimated to be 5'10 in height, attired in a black jacket and a baseball cap. No receipt was provided, given the informal nature of the street transaction. I acknowledge my oversight in not utilizing official channels for this acquisition.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Don't blame yourself — these scammers are very convincing. I'll file a report for you. This is important for your insurance claim and any potential investigation. Do you have any photos or video? Even a text message exchange would help.",
            textZh:
              "不要自责——这些骗子非常有说服力。我给你做一份报案记录。这对你的保险理赔和可能的调查很重要。你有照片或视频吗？即使是短信交流记录也有帮助。",
            keyPhrases: [
              { en: "file a report", zh: "做报案记录" },
              { en: "scammers", zh: "骗子" },
              { en: "insurance claim", zh: "保险理赔" },
              { en: "investigation", zh: "调查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, don't beat yourself up. These guys are pros. Let me get a report done — you'll need it for insurance. Got any photos, texts, anything like that?",
                textZh: "嘿，别自责。这些人都是老手。我给你做个报案记录——保险理赔要用。有照片、短信什么的吗？",
                actionHint: "提供任何可用证据",
                frequency: "common",
              },
              {
                textEn:
                  "It happens to a lot of people — they're really smooth operators. I'll write up the report. Any evidence at all? Photos, video, messages?",
                textZh: "很多人都上过当——他们太圆滑了。我来写报告。有任何证据吗？照片、视频、消息？",
                actionHint: "回忆并提供所有线索",
                frequency: "common",
              },
            ],
            casualVersion:
              "Don't blame yourself — these scammers are super good. I'll get a report filed for you. It's important for insurance and any investigation. Got any photos or video? Even texts would help.",
            formalityVariants: {
              casual:
                "Seriously, don't blame yourself. These scammers are pros. I'll file the report. Super important for insurance and any investigation. Got any photos, video? Even texts help.",
              standard:
                "Please don't blame yourself; these scammers are highly persuasive. I will proceed with filing a report for you. This documentation is crucial for your insurance claim and any subsequent investigation. Do you possess any photographic or video evidence? Even a text message exchange would be beneficial.",
              formal:
                "I assure you, there is no need for self-reproach; these individuals are highly adept at deception. I will formally file an incident report on your behalf. This report is integral for facilitating your insurance claim and for any potential investigative actions. Could you provide any photographic or video documentation? Furthermore, any form of communication record, such as a text message exchange, would be valuable.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I don't have photos of him, but I still have the fake tickets. Will I be able to get my money back?",
            textZh: "我没有他的照片，但还有假票。我能拿回钱吗？",
            casualVersion: "Don't have photos of him, but I still got the fake tickets. Can I get my money back?",
            commonMistake: {
              wrong: "I can get my money back?",
              correct: "Can I get my money back?",
              explanation: "疑问句语序是“助动词+主语+动词”，不是“主语+助动词+动词”。",
            },
            formalityVariants: {
              casual: "No photos of him, but I still got the fake tickets. So, can I get my money back?",
              standard:
                "I do not have any photos of him, but I still possess the counterfeit tickets. Will I be able to recover my funds?",
              formal:
                "Regrettably, I lack photographic evidence of the individual, however, I do retain possession of the fraudulent tickets. Is there a possibility of recovering the monetary loss?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "I'll be honest — with a cash transaction and no identification, recovery is unlikely. But the report is still important. Keep those fake tickets as evidence. In the future, only buy from official websites or authorized sellers. Here's a copy of the police report with a case number.",
            textZh:
              "说实话——现金交易又没有对方身份信息，追回的可能性不大。但报案记录仍然很重要。把假票当证据保留。以后只从官方网站或授权卖家购买。这是报案记录副本和案件编号。",
            keyPhrases: [
              { en: "recovery is unlikely", zh: "追回的可能性不大" },
              { en: "evidence", zh: "证据" },
              { en: "authorized sellers", zh: "授权卖家" },
              { en: "case number", zh: "案件编号" },
            ],
            culturalNote: "在海外被骗后，即使追回钱的希望不大，也一定要报案。报案记录是保险理赔的关键文件。",
            alternativeExpressions: [
              {
                textEn:
                  "I gotta level with you — cash deals with no ID? Tough to track down. But the report still matters for insurance. Keep the fake tickets and buy from official sources next time. Here's your case number.",
                textZh:
                  "跟你说实话——现金交易又没有对方身份信息？很难追查。但报案记录对保险还是有用。假票保留好，下次从正规渠道买。这是你的案件编号。",
                actionHint: "保留假票用于理赔",
                frequency: "common",
              },
              {
                textEn:
                  "Look, the chances of getting your money back are slim with a street buy. But this report is important for your records. Lesson learned — only go through official channels.",
                textZh:
                  "说实话，路边买的东西想追回钱可能性很小。但报案记录还是很重要的。吃一堑长一智——以后只走正规渠道。",
                actionHint: "接受损失并汲取教训",
                frequency: "common",
              },
            ],
            casualVersion:
              "To be honest, cash transaction, no ID, probably won't get your money back. But the report's still important. Keep those fake tickets as evidence. Next time, only buy from official websites or authorized sellers. Here's your police report and case number.",
            formalityVariants: {
              casual:
                "Honestly, cash transaction, no ID, pretty unlikely to get your money back. But keep the report, it's still important. Hang onto those fake tickets. Next time, only official sites or sellers, okay? Here's the report, case number on it.",
              standard:
                "To be frank, given this was a cash transaction with no identifiable information, monetary recovery is improbable. However, the report remains significant. Please retain those counterfeit tickets as evidence. Moving forward, please ensure all purchases are made solely through official websites or authorized vendors. Here is a copy of the police report, which includes your case number.",
              formal:
                "To be entirely transparent, considering the nature of a cash transaction coupled with the absence of identifiable information, the prospect of financial recovery is regrettably low. Nevertheless, the formal report holds considerable importance. I advise you to retain the fraudulent tickets as tangible evidence. For future acquisitions, I strongly recommend utilizing only official websites or accredited sellers. I am providing you with a copy of the official police report, complete with the assigned case number.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you for the report. I'll be more careful next time.",
            textZh: "谢谢你做记录。我下次会更小心的。",
            casualVersion: "Thanks for the report. I'll be way more careful next time.",
            commonMistake: {
              wrong: "I will more careful next time.",
              correct: "I'll be more careful next time.",
              explanation: "“careful”是形容词，需要动词“be”来构成系表结构。",
            },
            formalityVariants: {
              casual: "Thanks for the report. I'll totally be more careful next time.",
              standard: "Thank you for compiling the report. I will exercise greater caution in the future.",
              formal:
                "I appreciate you taking the time to file this report. I assure you, I will exercise heightened vigilance in future circumstances.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Here are a few tips to avoid scams: never buy from people on the street, check for holograms or QR codes on tickets, and use credit cards when possible — they offer fraud protection. Stay safe out there.",
            textZh:
              "几个防骗建议：不要在路边买东西，检查票上的全息标志或二维码，尽量用信用卡——信用卡有欺诈保护。出门在外注意安全。",
            keyPhrases: [
              { en: "holograms", zh: "全息标志" },
              { en: "fraud protection", zh: "欺诈保护" },
              { en: "stay safe", zh: "注意安全" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Word of advice: don't buy anything on the street, always check for security features on tickets, and pay with a card whenever you can — gives you fraud protection. Watch yourself out there.",
                textZh: "几个建议：别在路边买任何东西，一定检查票的防伪特征，尽量刷卡——有欺诈保护。出门在外小心。",
                actionHint: "记住防骗要点",
                frequency: "common",
              },
              {
                textEn:
                  "Couple tips going forward: stick to official sellers, look for holograms on tickets, and use credit cards — you can dispute charges. Stay safe, and sorry again about what happened.",
                textZh:
                  "以后注意几点：找正规卖家，看票上的全息标志，用信用卡——可以申诉。注意安全，再次为发生的事感到抱歉。",
                actionHint: "以后用信用卡保护自己",
                frequency: "common",
              },
            ],
            casualVersion:
              "Few tips to avoid scams: never buy from randos on the street, check for holograms or QR codes on tickets, and use credit cards if you can — they got fraud protection. Stay safe.",
            formalityVariants: {
              casual:
                "Alright, so a few scam tips: don't ever buy from randos on the street, look for holograms/QR codes on tickets, and use credit cards if you can – they'll protect you. Stay safe!",
              standard:
                "I can offer a few recommendations to help you avoid future scams: always refrain from purchasing from individuals on the street, verify the presence of holograms or QR codes on tickets, and utilize credit cards whenever feasible, as they provide fraud protection. Please remain vigilant.",
              formal:
                "Allow me to offer some preventative measures against future fraudulent activities: it is imperative to refrain from street-side purchases, diligently inspect tickets for authenticating features such as holograms or QR codes, and whenever practicable, leverage credit card payments, as they inherently offer fraud protection mechanisms. I wish you continued safety.",
            },
          },
        ],
      },

      // --- Flow 2: 信用卡被盗刷→冻结 ---
      {
        id: "card-fraud",
        titleZh: "信用卡被盗刷",
        titleEn: "Credit Card Fraud & Blocking",
        description: "发现信用卡被盗刷，联系银行冻结卡并处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I need to report unauthorized charges on my credit card. I just received a text alert showing three transactions I didn't make — totaling $1,500.",
            textZh: "你好，我要报告信用卡上的未授权交易。我刚收到短信提醒显示三笔我没有做过的交易——总共1500美元。",
            casualVersion: "Hey, gotta report some weird charges on my credit card. Just got a text alert for three transactions I didn't make — like, $1500 total.",
            commonMistake: {
              wrong: "I want to report unauthorized charges",
              correct: "I need to report unauthorized charges",
              explanation: "直接说 I want 会显得生硬，用 I need to 或 I'd like to 更自然。",
            },
            formalityVariants: {
              casual: "Hey, gotta report some weird charges on my credit card. Just got a text alert for three transactions I didn't make — like, $1500 total.",
              standard: "Hi, I need to report unauthorized charges on my credit card. I just received a text alert showing three transactions I didn't make — totaling $1500.",
              formal: "Good morning/afternoon, I wish to report a series of unauthorized charges appearing on my credit card statement. I have just received a text notification indicating three transactions that I did not initiate, cumulatively amounting to $1500.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I understand your concern. Let me verify your identity first. Can you confirm your full name, the last four digits of the card, and your date of birth?",
            textZh: "我理解你的担心。我先核实你的身份。请确认你的全名、卡号后四位和出生日期。",
            culturalNote: "在西方，银行或客服要求身份验证是非常普遍的流程，用于保护客户账户安全，不是多此一举。",
            casualVersion: "Gotcha. I get why you're worried. Let's just confirm who you are first. Can you tell me your full name, the last four digits of your card, and your birthday?",
            formalityVariants: {
              casual: "Gotcha. I get why you're worried. Let's just confirm who you are first. Can you tell me your full name, the last four digits of your card, and your birthday?",
              standard: "I understand your concern. Let me verify your identity first. Can you confirm your full name, the last four digits of the card, and your date of birth?",
              formal: "I comprehend your apprehension. Prior to proceeding, I must respectfully request identity verification. Kindly confirm your full name, the terminal four digits of your credit card, and your date of birth.",
            },
            keyPhrases: [
              { en: "unauthorized charges", zh: "未授权交易" },
              { en: "verify your identity", zh: "核实身份" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I totally get it. Before we do anything, I need to confirm who you are. Can you give me your full name, last four of the card, and date of birth?",
                textZh: "完全理解。在做任何操作之前，我需要确认你的身份。告诉我你的全名、卡号后四位和出生日期。",
                actionHint: "提供身份验证信息",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry, we'll take care of this. For security, I need to verify your identity — name, last four digits, and birthday please.",
                textZh: "别担心，我们会处理的。出于安全需要验证身份——请告诉我姓名、卡号后四位和生日。",
                actionHint: "快速验证身份",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Wang Wei, card ending in 4823, born January 15, 1985. Please block the card immediately — I'm afraid there'll be more charges.",
            textZh: "王伟，卡号尾号4823，1985年1月15日生。请立刻冻结卡——我怕还会有更多交易。",
            commonMistake: {
              wrong: "Please block the card immediately – I worry there will be more transactions.",
              correct: "Please block the card immediately – I'm worried there will be more transactions.",
              explanation: "用 'I'm worried' 而不是 'I worry' 更自然。 'I worry' 侧重于习惯性担忧，而 'I'm worried' 侧重于当前状态。",
            },
            casualVersion: "Wang Wei, card 4823, Jan 15, '85. Please block it ASAP — I'm worried about more charges.",
            formalityVariants: {
              casual: "Wang Wei, card 4823, Jan 15, '85. Please block it ASAP — I'm worried about more charges.",
              standard: "Wang Wei, card ending in 4823, born January 15, 1985. Please block the card immediately — I'm afraid there will be more transactions.",
              formal: "My name is Wang Wei, card number concluding with 4823, and my date of birth is January 15, 1985. I respectfully request an immediate freeze on this account, as I am concerned about the potential for additional fraudulent transactions.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I've blocked the card right now — no further transactions can go through. I can see three charges: $800 at an electronics store, $500 at a luxury goods website, and $200 at a gas station. Do you recognize any of these?",
            textZh:
              "我已经冻结卡了——不会再有交易通过了。我看到三笔交易：一家电子产品商店800美元、一个奢侈品网站500美元、一个加油站200美元。你认识其中任何一笔吗？",
            casualVersion: "Card's already frozen — no more charges going through. I'm seeing three transactions: $800 at an electronics store, $500 at a luxury website, and $200 at a gas station. Recognize any of 'em?",
            formalityVariants: {
              casual: "Card's already frozen — no more charges going through. I'm seeing three transactions: $800 at an electronics store, $500 at a luxury website, and $200 at a gas station. Recognize any of 'em?",
              standard: "I've already frozen the card — no more transactions will go through. I see three transactions: $800 at an electronics store, $500 at a luxury goods website, and $200 at a gas station. Do you recognize any of these?",
              formal: "The card has been successfully frozen, thereby preventing any further transactions. I observe three distinct transactions: $800 at an electronics retailer, $500 at a luxury merchandise e-commerce platform, and $200 at a fuel station. Do you acknowledge any of these expenditures?",
            },
            keyPhrases: [
              { en: "blocked the card", zh: "冻结了卡" },
              { en: "no further transactions", zh: "不会再有交易" },
              { en: "do you recognize", zh: "你认识/记得吗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Done — card's frozen. Nothing else can go through. I'm seeing three charges here: 800 at an electronics store, 500 at a luxury site, and 200 at a gas station. Any of those yours?",
                textZh:
                  "搞定——卡冻结了。不会再有交易通过了。我看到三笔：电子产品商店800、奢侈品网站500、加油站200。有你的吗？",
                actionHint: "逐一确认哪些不是自己的",
                frequency: "common",
              },
              {
                textEn:
                  "Card is blocked as of right now. I can see the three suspicious charges. Can you confirm — did you make any purchases at an electronics store, a luxury goods website, or a gas station recently?",
                textZh:
                  "卡现在已经冻结了。我能看到三笔可疑交易。你确认一下——你最近有在电子产品商店、奢侈品网站或加油站消费过吗？",
                actionHint: "确认所有可疑交易",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "None of those are mine. I haven't used the card at any of those places. I think my card number was stolen — maybe from a skimmer or a data breach?",
            textZh: "都不是我的。我没在那些地方用过卡。我觉得卡号被盗了——可能是通过读卡器或者数据泄露？",
            commonMistake: {
              wrong: "None of these are mine.",
              correct: "None of those are mine.",
              explanation: "指代对方提到的事物时，用 'those' 比 'these' 更自然。",
            },
            casualVersion: "Nah, none of those are mine. Haven't used my card there. Think my card number got swiped — probably a skimmer or data breach, right?",
            formalityVariants: {
              casual: "Nah, none of those are mine. Haven't used my card there. Think my card number got swiped — probably a skimmer or data breach, right?",
              standard: "None of those are mine. I haven't used my card at those places. I think my card number was stolen — maybe through a skimmer or a data breach?",
              formal: "I assert that none of these transactions originated from my account. I have not utilized my card at any of the aforementioned establishments. It is my belief that my card number was compromised, possibly via a skimmer device or a data breach.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "We'll open a fraud investigation. All three charges will be disputed and you won't be liable for the fraudulent amount. A new card will be mailed to your address — it should arrive within 5 to 7 business days. Would you like an expedited replacement?",
            textZh:
              "我们会启动欺诈调查。三笔交易都会被申诉，你不用为欺诈金额负责。新卡会邮寄到你的地址——5到7个工作日内到。你需要加急补卡吗？",
            commonMistake: {
              wrong: "You will not be responsible for the fraudulent amounts.",
              correct: "You won't be held responsible for the fraudulent amounts.",
              explanation: "用 'held responsible' 更符合英语表达习惯，意为 '承担责任'。",
            },
            casualVersion: "We'll start a fraud investigation. All three charges will get disputed, and you won't be on the hook for the fake charges. New card's gonna be mailed to your address — should get there in 5 to 7 business days. Need it fast?",
            formalityVariants: {
              casual: "We'll start a fraud investigation. All three charges will get disputed, and you won't be on the hook for the fake charges. New card's gonna be mailed to your address — should get there in 5 to 7 business days. Need it fast?",
              standard: "We'll initiate a fraud investigation. All three transactions will be disputed, and you won't be held responsible for the fraudulent amount. A new card will be mailed to your address — arriving in 5 to 7 business days. Do you need an expedited replacement?",
              formal: "We will commence a formal fraud investigation. All three unauthorized transactions will be formally disputed, and you will not incur liability for the fraudulent sum. A replacement card will be dispatched to your registered address, with an expected delivery timeframe of 5 to 7 business days. Would you require an expedited replacement service?",
            },
            keyPhrases: [
              { en: "fraud investigation", zh: "欺诈调查" },
              { en: "disputed", zh: "申诉/争议" },
              { en: "liable", zh: "负责/承担" },
              { en: "expedited replacement", zh: "加急补卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We'll flag all three as fraud. You won't be on the hook for any of it. We'll get a new card out to you — normally 5 to 7 business days. Want us to rush it?",
                textZh: "三笔都标记为欺诈。你不用承担任何费用。我们会给你寄新卡——通常5到7个工作日。要加急吗？",
                actionHint: "考虑是否需要加急",
                frequency: "common",
              },
              {
                textEn:
                  "I'm opening a fraud case on all three transactions. You're not liable for any of it. New card will be in the mail — want the expedited option?",
                textZh: "三笔交易我都开了欺诈案件。你不需要为任何一笔负责。新卡会邮寄——要加急选项吗？",
                actionHint: "申请加急补卡",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, please expedite it. But I'm traveling abroad right now — can you send it to my hotel address? Or can I pick it up at a local branch?",
            textZh: "是的，请加急。但我现在在国外旅行——能寄到我酒店的地址吗？或者我能在当地分行取吗？",
            commonMistake: {
              wrong: "Can it send to my hotel address?",
              correct: "Can it be sent to my hotel address?",
              explanation: "被动语态 'be sent' 是正确的表达。",
            },
            casualVersion: "Yeah, fast-track it, please. But I'm outta the country right now — can it go to my hotel? Or can I just grab it at a local branch?",
            formalityVariants: {
              casual: "Yeah, fast-track it, please. But I'm outta the country right now — can it go to my hotel? Or can I just grab it at a local branch?",
              standard: "Yes, please expedite it. But I'm traveling abroad right now — can it be sent to my hotel address? Or can I pick it up at a local branch?",
              formal: "Yes, kindly expedite the process. However, I am currently abroad; would it be possible to dispatch it to my hotel address, or may I collect it at a local branch location?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "We can arrange an emergency replacement card to be available at a local branch within 24 hours. I'll also set up a temporary virtual card number you can use for online purchases in the meantime. Is there anything else I can help with?",
            textZh:
              "我们可以安排一张应急补卡24小时内在当地分行领取。同时我给你设置一个临时虚拟卡号，你现在可以用来网上购物。还有其他需要帮忙的吗？",
            casualVersion: "We can totally get you an emergency replacement card at a local branch in 24 hours. I'll also hook you up with a temporary virtual card number for online stuff right now. Anything else I can do?",
            formalityVariants: {
              casual: "We can totally get you an emergency replacement card at a local branch in 24 hours. I'll also hook you up with a temporary virtual card number for online stuff right now. Anything else I can do?",
              standard: "We can arrange an emergency replacement card to be available at a local branch within 24 hours. I'll also set you up with a temporary virtual card number you can use for online purchases now. Is there anything else I can help you with?",
              formal: "We can facilitate the provision of an emergency replacement card for collection at a local branch within a 24-hour timeframe. Additionally, I will establish a temporary virtual card number for your immediate online purchasing needs. Is there any further assistance I may provide?",
            },
            keyPhrases: [
              { en: "emergency replacement card", zh: "应急补卡" },
              { en: "virtual card number", zh: "虚拟卡号" },
              { en: "in the meantime", zh: "在此期间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Tell you what — I can have a replacement card ready at a nearby branch within 24 hours. And I'll set up a virtual card number you can use online right now. Anything else?",
                textZh:
                  "这样吧——我可以24小时内在附近网点准备好替换卡。我再给你设置一个虚拟卡号现在就能网上用。还需要什么？",
                actionHint: "去网点取卡",
                frequency: "common",
              },
              {
                textEn:
                  "Since you're abroad, we can fast-track a new card to your nearest branch — 24 hours. I'll also generate a temporary virtual card for online use in the meantime.",
                textZh: "因为你在国外，我们可以24小时内加急送到最近的网点。同时我给你生成一个临时虚拟卡用于网上购物。",
                actionHint: "两种方式都用上",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's perfect. I also filed a police report — should I send it to you?",
            textZh: "太好了。我也报了警——需要把报案记录发给你们吗？",
            commonMistake: {
              wrong: "I also reported to the police.",
              correct: "I also reported it to the police.",
              explanation: "动词 'reported' 需要一个宾语来指明报告了什么事。",
            },
            casualVersion: "Awesome. I also filed a police report — should I send it to you guys?",
            formalityVariants: {
              casual: "Awesome. I also filed a police report — should I send it to you guys?",
              standard: "That's perfect. I also filed a police report — do I need to send it to you?",
              formal: "That is excellent. I have also submitted a police report; is it necessary for me to forward a copy to your department?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "Yes, please email a copy of the police report to our fraud department — I'll give you the email address. That will strengthen your case. Your reference number for this call is FR-2026-0312. We'll keep you updated by email.",
            textZh:
              "是的，请把报案记录的副本发邮件到我们的欺诈部门——我把邮箱地址给你。这会加强你的案件。这次通话的参考编号是 FR-2026-0312。我们会通过邮件更新进展。",
            commonMistake: {
              wrong: "This will make your case stronger.",
              correct: "This will strengthen your case.",
              explanation: "动词 'strengthen' 表达 '加强' 更简洁自然。",
            },
            casualVersion: "Yep, shoot an email with the police report copy to our fraud department — I'll give you the address. It'll definitely help your case. Reference number for this call is FR-2026-0312. We'll email you updates.",
            formalityVariants: {
              casual: "Yep, shoot an email with the police report copy to our fraud department — I'll give you the address. It'll definitely help your case. Reference number for this call is FR-2026-0312. We'll email you updates.",
              standard: "Yes, please email a copy of the police report to our fraud department — I'll give you the email address. This will strengthen your case. The reference number for this call is FR-2026-0312. We'll send you updates via email.",
              formal: "Affirmative, kindly forward an electronic copy of the police report to our fraud department; I will provide the corresponding email address. This documentation will substantiate your claim. The reference number for this interaction is FR-2026-0312. We will furnish updates to you via electronic mail.",
            },
            keyPhrases: [
              { en: "fraud department", zh: "欺诈部门" },
              { en: "strengthen your case", zh: "加强你的案件" },
              { en: "reference number", zh: "参考编号" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely. Shoot the police report over to our fraud team by email — I'll give you the address. It'll help your case. Your reference number is FR-2026-0312. We'll keep you in the loop.",
                textZh:
                  "当然。把报案记录发邮件到我们欺诈团队——我把地址给你。会对你的案件有帮助。你的参考编号是FR-2026-0312。我们会随时通知你进展。",
                actionHint: "发送报案记录到指定邮箱",
                frequency: "common",
              },
              {
                textEn:
                  "Yes, send it to our fraud department — here's the email. That police report will really strengthen things on our end. Your case number is FR-2026-0312.",
                textZh:
                  "是的，发到我们欺诈部门——邮箱给你。报案记录会大大加强我们这边的处理。你的案件编号是FR-2026-0312。",
                actionHint: "记下参考编号",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 受伤 ====================
  {
    id: "emergency-injury",
    category: "emergency",
    titleZh: "受伤",
    titleEn: "Injury & First Aid",
    description: "在旅途中受伤，寻求急救和医院转运",
    otherRole: "急救人员/路人",
    otherRoleIcon: "plus-circle",
    flows: [
      // --- Flow 1: 户外受伤求助 ---
      {
        id: "outdoor-injury",
        titleZh: "户外受伤求助",
        titleEn: "Outdoor Injury & Help",
        description: "在户外活动中受伤，向路人和急救人员求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Help! I fell while hiking and I think I twisted my ankle badly. I can't put any weight on it.",
            textZh: "救命！我徒步时摔了一跤，好像严重扭到脚踝了。完全不能踩地。",
            casualVersion: "Help! Fell hiking, totally twisted my ankle bad. Can't put any weight on it.",
            commonMistake: {
              wrong: "I can't step on it.",
              correct: "I can't put any weight on it.",
              explanation: "\"step on it\" 指踩踏，\"put weight on it\" 指承重。",
            },
            formalityVariants: {
              casual: "Help! Fell hiking, totally twisted my ankle bad. Can't put any weight on it.",
              standard: "Help! I fell while hiking and I think I twisted my ankle badly. I can't put any weight on it at all.",
              formal: "Excuse me, I require assistance. I sustained an injury to my ankle during a fall while hiking and am unable to bear any weight on it.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Stay still, don't try to walk on it! Let me take a look. Is it your left or right ankle? Can you move your toes?",
            textZh: "别动，不要试着走！让我看看。是左脚还是右脚？脚趾能动吗？",
            casualVersion: "Stay still, don't try walk! Lemme see. Left or right foot? Can you move your toes?",
            commonMistake: {
              wrong: "It is left or right foot?",
              correct: "Is it your left or right foot?",
              explanation: "询问身体部位时常用所有格代词 'your'。",
            },
            formalityVariants: {
              casual: "Stay still, don't try walk! Lemme see. Left or right foot? Can you move your toes?",
              standard: "Stay still, don't try to walk! Let me take a look. Is it your left or right foot? Can you move your toes?",
              formal: "Please remain still and refrain from attempting to walk. Allow me to assess the injury. Could you indicate whether it is your left or right foot, and are you able to articulate your toes?",
            },
            keyPhrases: [
              { en: "twisted my ankle", zh: "扭到脚踝" },
              { en: "put weight on it", zh: "踩地/承重" },
              { en: "stay still", zh: "别动" },
            ],
            alternativeExpressions: [
              {
                textEn: "Whoa, don't move! Let me see. Which ankle is it? Can you wiggle your toes?",
                textZh: "哎，别动！让我看看。哪只脚？脚趾能动吗？",
                actionHint: "保持不动让人检查",
                frequency: "common",
              },
              {
                textEn:
                  "Hold on, don't put any weight on it! Sit down right here. Is it your left or right? How bad is the pain?",
                textZh: "等等，别踩地！就坐这里。左脚还是右脚？有多疼？",
                actionHint: "坐下来描述伤情",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My right ankle. I can move my toes but it's swelling up fast and it really hurts.",
            textZh: "右脚踝。脚趾能动但肿得很快，特别疼。",
            casualVersion: "Right ankle. Can move my toes but it's swelling up fast, super painful.",
            commonMistake: {
              wrong: "It is very painful.",
              correct: "It's really painful.",
              explanation: "'really painful' 比 'very painful' 更口语化，语气更强。",
            },
            formalityVariants: {
              casual: "Right ankle. Can move my toes but it's swelling up fast, super painful.",
              standard: "My right ankle. I can move my toes but it's swelling up fast and it's really painful.",
              formal: "It is my right ankle. I am able to move my toes; however, the ankle is swelling rapidly and is causing considerable pain.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "That's a good sign that your toes can move. I have a first aid kit in my backpack. Let me wrap it with a bandage to stabilize it and reduce the swelling. I'll apply some ice from my cooler too. Do you have anyone with you?",
            textZh:
              "脚趾能动是好迹象。我背包里有急救包。我用绷带帮你包扎固定一下，减少肿胀。我保温袋里有冰也给你敷一下。有人跟你一起吗？",
            casualVersion: "Good sign you can move your toes. Got a first-aid kit in my pack. I'll wrap it to stabilize and reduce swelling. Plus, got ice in my cooler for it. You with anyone?",
            commonMistake: {
              wrong: "I have ice in my cooler.",
              correct: "I've got ice in my cooler.",
              explanation: "'have got' 更自然口语，特别是拥有某物时。",
            },
            formalityVariants: {
              casual: "Good sign you can move your toes. Got a first-aid kit in my pack. I'll wrap it to stabilize and reduce swelling. Plus, got ice in my cooler for it. You with anyone?",
              standard: "That's a good sign that you can move your toes. I have a first-aid kit in my pack. I'll help you wrap it with a bandage to stabilize it and reduce swelling. I also have ice in my cooler that I can put on it. Are you with anyone?",
              formal: "The ability to articulate your toes is a positive indication. I possess a first-aid kit in my rucksack. I shall apply a bandage to your ankle to provide stabilization and mitigate swelling. Additionally, I have ice available in my cooler which I can apply. Are you accompanied by anyone?",
            },
            keyPhrases: [
              { en: "first aid kit", zh: "急救包" },
              { en: "bandage", zh: "绷带" },
              { en: "stabilize", zh: "固定" },
              { en: "swelling", zh: "肿胀" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good, if you can move your toes it's probably not broken. I've got a first aid kit — let me wrap it up and put some ice on it. Are you here alone?",
                textZh: "好，脚趾能动的话应该没骨折。我有急救包——帮你包扎一下敷点冰。你一个人来的吗？",
                actionHint: "配合包扎",
                frequency: "common",
              },
              {
                textEn:
                  "That's good news — probably not a fracture. Hang on, I've got bandages and ice. Let me stabilize that ankle. Anyone else with you today?",
                textZh: "好消息——可能不是骨折。等一下，我有绷带和冰。帮你固定一下脚踝。今天还有别人跟你一起吗？",
                actionHint: "说明同行情况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'm alone. I was supposed to meet friends at the parking lot. Is there cell signal here? I need to call for help.",
            textZh: "我一个人。我本来要在停车场跟朋友会合。这里有信号吗？我需要打电话求助。",
            casualVersion: "I'm alone. Was supposed to meet friends at the parking lot. Got signal here? Need to call for help.",
            commonMistake: {
              wrong: "I need call for help.",
              correct: "I need to call for help.",
              explanation: "'need' 后接动词原形通常需要加 'to'。",
            },
            formalityVariants: {
              casual: "I'm alone. Was supposed to meet friends at the parking lot. Got signal here? Need to call for help.",
              standard: "I'm alone. I was supposed to meet my friends in the parking lot. Is there signal here? I need to call for help.",
              formal: "I am currently unescorted. My original intention was to rendezvous with my companions in the parking area. Is cellular service available at this location? I must contact emergency services.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "The signal is spotty here, but it gets better near the trailhead — about half a mile back. I'll help you get there. Can you lean on me and hop on your good foot? Or I can go get help and come back for you.",
            textZh:
              "这里信号不太好，但在步道入口那边好一些——大约半英里。我帮你过去。你能扶着我用好脚跳着走吗？或者我去找人来帮忙再回来。",
            casualVersion: "Signal's spotty here, but it's better near the trailhead—'bout half a mile back. I can help you get there. Can you hop on one foot with my help? Or should I go find someone?",
            commonMistake: {
              wrong: "I can help you to get there.",
              correct: "I can help you get there.",
              explanation: "'help' 后接动词可省略 'to'，更自然。",
            },
            formalityVariants: {
              casual: "Signal's spotty here, but it's better near the trailhead—'bout half a mile back. I can help you get there. Can you hop on one foot with my help? Or should I go find someone?",
              standard: "The signal is spotty here, but it gets better near the trailhead — about half a mile back. I can help you get there. Can you hop on one foot with my help? Or should I go back and find someone to help?",
              formal: "Cellular reception is intermittent at this location; however, it improves closer to the trailhead, approximately half a mile distant. I am prepared to assist you in reaching that point. Would you be able to hop on one foot with my support, or would you prefer I return to seek additional assistance?",
            },
            keyPhrases: [
              { en: "signal is spotty", zh: "信号不好" },
              { en: "trailhead", zh: "步道入口" },
              { en: "lean on me", zh: "扶着我" },
              { en: "hop on your good foot", zh: "用好脚跳着走" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Reception's pretty bad here. There's better signal near the trailhead, about half a mile back. I can help you hobble over there, or I'll run ahead and bring someone back.",
                textZh: "这里信号很差。步道入口那边好一些，大约半英里。我可以搀你跳过去，或者我跑过去叫人来。",
                actionHint: "选择一起走还是等待救援",
                frequency: "common",
              },
              {
                textEn:
                  "Phone signal's iffy out here. It picks up near the parking area. Can you lean on my shoulder? Or if you'd rather wait, I'll go get help.",
                textZh: "手机信号在这不行。停车场那边好一些。你能扶着我肩膀吗？或者你愿意等的话我去找人帮忙。",
                actionHint: "根据伤情决定",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I think I can hop with your help. Thank you so much. Should I go to a hospital? I'm not sure if it's broken or just sprained.",
            textZh: "我扶着你应该能跳着走。非常感谢。我需要去医院吗？不确定是骨折还是扭伤。",
            casualVersion: "Think I can hop with your help. Thanks a ton. Should I go to a hospital? Not sure if it's a fracture or a sprain.",
            commonMistake: {
              wrong: "Thank you very much.",
              correct: "Thank you so much.",
              explanation: "'Thanks a ton' 是很地道的口语表达，'so much' 也很常用。",
            },
            formalityVariants: {
              casual: "Think I can hop with your help. Thanks a ton. Should I go to a hospital? Not sure if it's a fracture or a sprain.",
              standard: "I think I can hop with your help. Thank you so much. Should I go to a hospital? I'm not sure if it's a fracture or a sprain.",
              formal: "I believe I can manage to hop with your assistance. I extend my sincere gratitude. Is it advisable for me to proceed to a hospital? I am uncertain whether this is a fracture or merely a sprain.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "You should definitely get an X-ray to rule out a fracture. The urgent care center is about 10 minutes from the parking lot. If it's just a sprain, they'll do RICE — rest, ice, compression, elevation. Let's get you moving.",
            textZh:
              "你一定要拍个X光排除骨折。停车场开车大约10分钟有个急诊中心。如果只是扭伤，他们会用RICE方法——休息、冰敷、加压、抬高。我们走吧。",
            casualVersion: "Definitely get an X-ray to rule out a fracture. Urgent care's 'bout 10 mins from the lot. If it's just a sprain, they'll do RICE — Rest, Ice, Compression, Elevation. C'mon, let's go.",
            commonMistake: {
              wrong: "You must get an X-ray.",
              correct: "You should definitely get an X-ray.",
              explanation: "'must' 语气太强，'should definitely' 是强烈建议，更礼貌。",
            },
            formalityVariants: {
              casual: "Definitely get an X-ray to rule out a fracture. Urgent care's 'bout 10 mins from the lot. If it's just a sprain, they'll do RICE — Rest, Ice, Compression, Elevation. C'mon, let's go.",
              standard: "You should definitely get an X-ray to rule out a fracture. The urgent care center is about 10 minutes from the parking lot. If it's just a sprain, they'll use the RICE method — Rest, Ice, Compression, Elevation. Let's go.",
              formal: "It would be prudent to obtain an X-ray to preclude the possibility of a fracture. An urgent care facility is located approximately ten minutes' drive from the parking area. Should it prove to be merely a sprain, they will administer treatment utilizing the RICE protocol—Rest, Ice, Compression, and Elevation. Let us proceed.",
            },
            keyPhrases: [
              { en: "X-ray", zh: "X光" },
              { en: "rule out a fracture", zh: "排除骨折" },
              { en: "sprain", zh: "扭伤" },
              { en: "RICE", zh: "休息、冰敷、加压、抬高" },
            ],
            culturalNote:
              "RICE 是英语中常见的急救缩写：Rest（休息）、Ice（冰敷）、Compression（加压绷带）、Elevation（抬高患处）。是处理扭伤的基本方法。",
            alternativeExpressions: [
              {
                textEn:
                  "I'd get that X-rayed for sure. There's an urgent care place about 10 minutes from the lot. If it's a sprain, they'll tell you RICE — rest, ice, compression, elevation. Come on, let's get moving.",
                textZh:
                  "我建议一定去拍个X光。停车场开车大约10分钟有个急诊中心。如果是扭伤，他们会告诉你RICE——休息、冰敷、加压、抬高。走吧。",
                actionHint: "去急诊中心拍X光",
                frequency: "common",
              },
              {
                textEn:
                  "Better safe than sorry — get an X-ray. There's an urgent care nearby. Even if it's just a bad sprain, they'll fix you up. Let me help you down to the parking lot.",
                textZh: "小心为上——去拍个X光。附近有急诊中心。即使只是严重扭伤，他们也能帮你处理好。我搀你下去停车场。",
                actionHint: "不要硬撑",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "You're a lifesaver. I'm Wang, by the way. Can I get your number in case I want to thank you properly later?",
            textZh: "你真是我的救命恩人。对了我叫王。能留个号码吗，我以后好好谢谢你。",
            casualVersion: "You're a lifesaver, seriously. BTW, I'm Wang. Can I get your number to thank you later?",
            culturalNote: "美国陌生人之间直接说“以后好好谢谢你”不如直接说“I’d like to buy you a coffee/meal”来",
            commonMistake: {
              wrong: "Could I leave your number?",
              correct: "Could I get your number?",
              explanation: "'leave your number' 是你留下自己的号，'get your number' 是拿到对方的号。",
            },
            formalityVariants: {
              casual: "You're a lifesaver, seriously. BTW, I'm Wang. Can I get your number to thank you later?",
              standard: "You're a lifesaver. By the way, my name is Wang. Could I get your number so I can thank you properly later?",
              formal: "You have been an immense help, a true lifesaver. Incidentally, my name is Wang. Might I obtain your contact information to express my gratitude more formally at a later time?",
            },
          },
        ],
      },

      // --- Flow 2: 严重受伤叫救护车 ---
      {
        id: "ambulance",
        titleZh: "叫救护车",
        titleEn: "Calling an Ambulance",
        description: "遇到严重受伤需要叫救护车并描述情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "911? I need an ambulance! My friend fell off a bicycle and hit his head. He's conscious but bleeding a lot from a cut on his forehead.",
            textZh: "911吗？我需要救护车！我朋友从自行车上摔下来撞到头了。他还清醒但额头上的伤口在大量流血。",
            casualVersion: "911? Need an ambulance! My friend fell off his bike, hit his head. He's conscious but his forehead's bleeding a lot.",
            commonMistake: {
              wrong: "He is bleeding heavily in the head.",
              correct: "His forehead is bleeding heavily.",
              explanation: "描述身体部位流血时，通常说 'bleeding from' 或 'part of body is bleeding'。",
            },
            formalityVariants: {
              casual: "911? Need an ambulance! My friend fell off his bike, hit his head. He's conscious but his forehead's bleeding a lot.",
              standard: "911? I need an ambulance! My friend fell off a bicycle and hit his head. He's conscious but the wound on his forehead is bleeding heavily.",
              formal: "911? I require immediate ambulance assistance! My friend has fallen from a bicycle and sustained a head injury. He remains conscious, but there is substantial hemorrhage from a wound on his forehead.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn: "Help is on the way. What's your exact location? Is your friend wearing a helmet?",
            textZh: "救援正在赶来。你的确切位置是什么？你朋友戴了头盔吗？",
            casualVersion: "Help's on the way. What's your exact location? Your friend wear a helmet?",
            commonMistake: {
              wrong: "Your friend wore a helmet?",
              correct: "Did your friend wear a helmet?",
              explanation: "询问过去发生的事情用助动词 'Did' + 动词原形。",
            },
            formalityVariants: {
              casual: "Help's on the way. What's your exact location? Your friend wear a helmet?",
              standard: "Help is on the way. What's your exact location? Did your friend wear a helmet?",
              formal: "Assistance has been dispatched. Could you please provide your precise location? Was your friend wearing a helmet?",
            },
            keyPhrases: [
              { en: "ambulance", zh: "救护车" },
              { en: "conscious", zh: "清醒的" },
              { en: "bleeding", zh: "流血" },
              { en: "exact location", zh: "确切位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ambulance is coming. Where exactly are you? And was your friend wearing a helmet when he fell?",
                textZh: "救护车来了。你们确切在哪？你朋友摔倒时戴头盔了吗？",
                actionHint: "提供准确位置",
                frequency: "common",
              },
              {
                textEn: "We've got units heading your way. I need your precise location. Did he have a helmet on?",
                textZh: "已经派人过去了。我需要你的精确位置。他戴头盔了吗？",
                actionHint: "描述地标帮助定位",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "We're at the corner of Oak Street and Riverside Drive, next to the park entrance. No helmet — he wasn't wearing one.",
            textZh: "我们在Oak街和Riverside大道交叉口，公园入口旁边。没戴头盔——他没戴。",
            casualVersion: "We're at Oak and Riverside, by the park entrance. No helmet—he wasn't wearing one.",
            commonMistake: {
              wrong: "We are at Oak Street and Riverside Avenue intersection.",
              correct: "We're at the intersection of Oak Street and Riverside Avenue.",
              explanation: "交叉路口常用 'at the intersection of X and Y' 表达。",
            },
            formalityVariants: {
              casual: "We're at Oak and Riverside, by the park entrance. No helmet—he wasn't wearing one.",
              standard: "We're at the intersection of Oak Street and Riverside Avenue, next to the park entrance. No helmet—he wasn't wearing one.",
              formal: "We are currently located at the intersection of Oak Street and Riverside Avenue, adjacent to the park's main entrance. He was not wearing a helmet.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "Okay, the ambulance is about 5 minutes away. Keep him still — don't move his neck or head. Apply firm pressure to the wound with a clean cloth to slow the bleeding. Is he responding to questions?",
            textZh:
              "好的，救护车大约5分钟到。让他不要动——不要移动他的脖子或头。用干净的布用力按压伤口止血。他能回答问题吗？",
            casualVersion: "Okay, ambulance 'bout 5 mins out. Keep him still—don't move his neck or head. Apply firm pressure to the wound with a clean cloth to stop the bleeding. Can he answer questions?",
            commonMistake: {
              wrong: "Don't move his neck and head.",
              correct: "Don't move his neck or head.",
              explanation: "强调两者都不能动时用 'or' 更自然，'and' 有时指同时发生。",
            },
            formalityVariants: {
              casual: "Okay, ambulance 'bout 5 mins out. Keep him still—don't move his neck or head. Apply firm pressure to the wound with a clean cloth to stop the bleeding. Can he answer questions?",
              standard: "Okay, the ambulance is about 5 minutes away. Keep him still — don't move his neck or head. Apply firm pressure to the wound with a clean cloth to stop the bleeding. Can he answer questions?",
              formal: "Understood. The ambulance is approximately five minutes from your current position. It is imperative to keep him immobile—do not move his neck or head. Exert firm, direct pressure upon the wound with a clean cloth to control hemorrhage. Is he capable of responding to inquiries?",
            },
            keyPhrases: [
              { en: "keep him still", zh: "让他不要动" },
              { en: "don't move his neck", zh: "不要移动他的脖子" },
              { en: "firm pressure", zh: "用力按压" },
              { en: "responding to questions", zh: "能回答问题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ambulance is about 5 minutes out. Don't let him move, especially his head and neck. Press something clean against the cut to slow the bleeding. Is he talking to you?",
                textZh: "救护车大约5分钟到。别让他动，特别是头和脖子。用干净的东西按压伤口止血。他跟你说话吗？",
                actionHint: "固定头颈并止血",
                frequency: "common",
              },
              {
                textEn:
                  "ETA is about 5 minutes. Keep him completely still. Apply pressure to the wound — use a shirt, a towel, whatever's clean. Can he answer questions?",
                textZh: "预计5分钟到。让他完全不要动。按压伤口——用衬衫、毛巾，什么干净的都行。他能回答问题吗？",
                actionHint: "用手边的东西按压止血",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, he can talk but he seems confused. He asked me the same question twice. I'm pressing a t-shirt against the wound.",
            textZh: "是的，他能说话但看起来有点糊涂。同一个问题问了我两遍。我正用T恤按着伤口。",
            casualVersion: "Yeah, he can talk but seems confused. Asked me the same question twice. I'm pressing on the wound with my T-shirt.",
            commonMistake: {
              wrong: "He asked same question twice.",
              correct: "He asked me the same question twice.",
              explanation: "'the same question' 是固定搭配。",
            },
            formalityVariants: {
              casual: "Yeah, he can talk but seems confused. Asked me the same question twice. I'm pressing on the wound with my T-shirt.",
              standard: "Yes, he can talk but he seems confused. He asked me the same question twice. I'm pressing on the wound with my T-shirt.",
              formal: "Affirmative, he is able to speak, however, he appears disoriented. He reiterated the same question on two occasions. I am currently applying pressure to the wound utilizing my T-shirt.",
            },
          },
          {
            speaker: "them",
            role: "911接线员",
            textEn:
              "The confusion could be a sign of a concussion. That's why it's important he stays still. Keep talking to him — ask him his name, the date, where he is. If he vomits or loses consciousness, let me know immediately. The paramedics are almost there.",
            textZh:
              "糊涂可能是脑震荡的迹象。所以让他不要动很重要。继续跟他说话——问他名字、日期、在哪里。如果他呕吐或失去意识，立刻告诉我。急救员快到了。",
            casualVersion: "Confusion could be a concussion sign. So important to keep him still. Keep talking to him—ask his name, date, where he is. Let me know if he vomits or passes out. Paramedics are almost there.",
            commonMistake: {
              wrong: "The paramedics are coming soon.",
              correct: "The paramedics are almost there.",
              explanation: "'almost there' 是口语中常用表达，表示“快到了”。",
            },
            formalityVariants: {
              casual: "Confusion could be a concussion sign. So important to keep him still. Keep talking to him—ask his name, date, where he is. Let me know if he vomits or passes out. Paramedics are almost there.",
              standard: "The confusion could be a sign of a concussion. That's why it's so important to keep him still. Keep talking to him — ask him his name, the date, where he is. Let me know immediately if he vomits or loses consciousness. The paramedics are almost there.",
              formal: "His disorientation may be indicative of a concussion. Consequently, maintaining his immobility is of paramount importance. Continue to engage him in conversation; inquire about his name, the current date, and his location. Inform me without delay should he experience emesis or loss of consciousness. The emergency medical personnel are imminent.",
            },
            keyPhrases: [
              { en: "concussion", zh: "脑震荡" },
              { en: "loses consciousness", zh: "失去意识" },
              { en: "paramedics", zh: "急救员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Repeating questions is a concussion red flag. That's why he needs to stay put. Keep him talking — ask his name, what day it is, simple stuff. If he throws up or passes out, tell me right away. Almost there.",
                textZh:
                  "重复问问题是脑震荡的警示信号。所以他需要待着不动。一直跟他说话——问名字、今天星期几，简单的问题。如果他呕吐或昏迷，立刻告诉我。快到了。",
                actionHint: "保持与伤者对话",
                frequency: "common",
              },
              {
                textEn:
                  "That confusion is a classic concussion symptom. Don't let him move or fall asleep. Keep asking him basic questions. Paramedics are almost there.",
                textZh: "这种糊涂是典型的脑震荡症状。不要让他动或睡着。一直问他基本问题。急救员快到了。",
                actionHint: "不要让伤者睡着",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "He knows his name but he's not sure what day it is. Oh — I can hear the siren now! They're here.",
            textZh: "他知道自己的名字但不确定今天几号。哦——我听到警笛声了！他们来了。",
            casualVersion: "He knows his name but not sure what date it is. Oh—hear sirens! They're here.",
            commonMistake: {
              wrong: "He is not sure what is today's date.",
              correct: "He's not sure what today's date is.",
              explanation: "间接疑问句的语序是“主语+谓语”，而非疑问句语序。",
            },
            formalityVariants: {
              casual: "He knows his name but not sure what date it is. Oh—hear sirens! They're here.",
              standard: "He knows his name but he's not sure what today's date is. Oh — I hear sirens! They're here.",
              formal: "He is aware of his name; however, he is uncertain of the current date. Oh, I detect the sound of sirens! They have arrived.",
            },
          },
          {
            speaker: "them",
            role: "急救员",
            textEn:
              "We'll take it from here. You did a good job keeping pressure on the wound. Can you tell us what happened — how fast was he going, and did he lose consciousness at any point after the fall?",
            textZh: "交给我们了。你按压伤口做得很好。能告诉我们发生了什么——他当时骑多快，摔倒后有没有失去过意识？",
            casualVersion: "We got this. You did a great job pressing the wound. What happened—how fast was he going, did he pass out after falling?",
            commonMistake: {
              wrong: "You did a good job to apply pressure.",
              correct: "You did a good job applying pressure.",
              explanation: "'do a good job' 后接动名词 'applying' 表示做得好。",
            },
            formalityVariants: {
              casual: "We got this. You did a great job pressing the wound. What happened—how fast was he going, did he pass out after falling?",
              standard: "We'll take it from here. You did a great job applying pressure to the wound. Can you tell us what happened — how fast he was going, and if he lost consciousness after the fall?",
              formal: "We will assume responsibility from this point. Your efforts in applying pressure to the wound were commendable. Could you please provide an account of the incident—specifically, his estimated speed and whether he experienced any loss of consciousness subsequent to the fall?",
            },
            keyPhrases: [
              { en: "we'll take it from here", zh: "交给我们了" },
              { en: "lose consciousness", zh: "失去意识" },
              { en: "at any point", zh: "在任何时候" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We got him. Nice work on the wound — that helped a lot. Quick question: how'd it happen? How fast was he going, and did he black out at all?",
                textZh: "交给我们了。伤口处理得好——帮了大忙。问一下：怎么摔的？他骑多快，有没有昏过去？",
                actionHint: "如实描述事故经过",
                frequency: "common",
              },
              {
                textEn:
                  "Good job. We'll handle it from here. Can you fill me in — what happened, how fast, any loss of consciousness?",
                textZh: "做得好。接下来我们来。跟我说说——怎么回事，速度多快，有没有失去意识？",
                actionHint: "提供事故细节给急救员",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "He was going pretty fast downhill and hit a pothole. He didn't lose consciousness but he seemed dazed right after. He's my travel buddy — can I ride in the ambulance with him?",
            textZh:
              "他下坡时骑得很快，碰到一个坑。没有失去意识但摔倒后看起来很恍惚。他是我的旅伴——我能坐救护车一起去吗？",
            casualVersion: "He was going pretty fast downhill, hit a pothole. Didn't pass out but seemed dazed after. He's my travel buddy—can I ride with him in the ambulance?",
            commonMistake: {
              wrong: "Can I sit the ambulance with him?",
              correct: "Can I ride in the ambulance with him?",
              explanation: "乘坐交通工具用 'ride in'，'sit' 通常指“坐着”这一动作。",
            },
            formalityVariants: {
              casual: "He was going pretty fast downhill, hit a pothole. Didn't pass out but seemed dazed after. He's my travel buddy—can I ride with him in the ambulance?",
              standard: "He was going pretty fast downhill and hit a pothole. He didn't lose consciousness but seemed dazed after the fall. He's my travel companion — can I ride in the ambulance with him?",
              formal: "He was descending rather rapidly and encountered a pothole. He did not lose consciousness but appeared disoriented following the impact. He is my traveling companion; may I accompany him in the ambulance?",
            },
          },
          {
            speaker: "them",
            role: "急救员",
            textEn:
              "Yes, you can ride along. We're taking him to St. Mary's Hospital — it has the best trauma unit nearby. Bring his ID and insurance information if you have it. We'll stabilize him on the way.",
            textZh:
              "可以，你可以一起坐。我们送他去圣玛丽医院——那里有附近最好的创伤科。如果有的话带上他的身份证和保险信息。路上我们会给他做稳定处理。",
            casualVersion: "Yeah, you can ride. We're taking him to St. Mary's—they got the best trauma department around. Grab his ID and insurance info if you have it. We'll stabilize him on the way.",
            commonMistake: {
              wrong: "If you have it, please bring his ID and insurance information.",
              correct: "Please bring his ID and insurance information if you have it.",
              explanation: "条件状语从句后置更符合口语习惯和语流。",
            },
            formalityVariants: {
              casual: "Yeah, you can ride. We're taking him to St. Mary's—they got the best trauma department around. Grab his ID and insurance info if you have it. We'll stabilize him on the way.",
              standard: "Yes, you can ride along. We're taking him to St. Mary's Hospital — they have the best trauma department nearby. Please bring his ID and insurance information if you have it. We'll stabilize him on the way.",
              formal: "Certainly, you may accompany him. We are transporting him to St. Mary's Hospital, which possesses the finest trauma department in this vicinity. Kindly retrieve his identification and insurance documentation, should they be accessible. We will ensure his stabilization en route.",
            },
            keyPhrases: [
              { en: "ride along", zh: "一起坐" },
              { en: "trauma unit", zh: "创伤科" },
              { en: "stabilize", zh: "稳定处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hop in. We're heading to St. Mary's — best trauma center around. If you've got his ID or insurance info, bring it. We'll get him stable on the ride over.",
                textZh:
                  "上来吧。我们去圣玛丽医院——附近最好的创伤中心。如果有他的证件或保险信息就带上。路上我们会给他做稳定处理。",
                actionHint: "带上伤者的证件",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, jump in the back. St. Mary's has the nearest trauma unit. Grab any ID or insurance stuff he's got. We'll take care of him on the way.",
                textZh: "好，坐后面。圣玛丽有最近的创伤科。拿上他的证件或保险信息。路上我们会照顾好他。",
                actionHint: "准备好医院登记需要的材料",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 航班紧急情况 ====================
  {
    id: "emergency-10",
    category: "emergency",
    titleZh: "航班紧急情况",
    titleEn: "Flight Emergency",
    description: "航班取消、严重延误或在机场被困时的紧急应对",
    otherRole: "航空公司工作人员",
    otherRoleIcon: "plane",
    flows: [
      // --- Flow 1: 航班取消+重新安排 ---
      {
        id: "flight-cancelled",
        titleZh: "航班取消",
        titleEn: "Flight Cancellation",
        description: "航班突然被取消，需要紧急重新安排行程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I just received a notification that my flight has been cancelled. What are my options?",
            textZh: "打扰一下，我刚收到通知说我的航班取消了。我有什么选择？",
            culturalNote: "航班取消后第一时间找工作人员或打航空公司电话。同时可以在APP上操作，有时APP改签比排队更快。",
            casualVersion: "Excuse me, just got a notification my flight's canceled. What're my options?",
            commonMistake: {
              wrong: "Excuse me, my flight cancelled, what can I do?",
              correct: "Excuse me, my flight got canceled. What are my options?",
              explanation: "中式英语常省略主语或助动词，或用主动语态代替被动语态。",
            },
            formalityVariants: {
              casual: "Hey, my flight just got canceled. What can I do?",
              standard:
                "Excuse me, I just received a notification that my flight has been cancelled. What are my options?",
              formal:
                "Pardon me, I've just been informed that my scheduled flight has been cancelled. Could you please advise me on the available alternatives?",
            },
          },
          {
            speaker: "them",
            role: "航空公司柜台",
            textEn:
              "I'm sorry about that. Can I see your boarding pass or booking reference? Let me pull up your reservation and see what we can do.",
            textZh: "很抱歉。能看一下您的登机牌或订单号吗？让我调出您的预订看看能怎么安排。",
            commonMistake: {
              wrong: "Sorry. Show me your boarding pass or booking number. I can check what to arrange.",
              correct: "I'm sorry about that. May I see your boarding pass or booking number? Let me pull up your reservation and see what we can arrange.",
              explanation: "直接说 'Show me' 听起来很不礼貌；'I can check' 不如 'see what we can arrange' 自然。",
            },
            keyPhrases: [
              { en: "boarding pass", zh: "登机牌" },
              { en: "booking reference", zh: "订单号/预订参考号" },
              { en: "reservation", zh: "预订" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry for the inconvenience. May I have your confirmation number? I'll check available alternatives.",
                textZh: "给您添麻烦了。能给我您的确认号吗？我查一下有什么替代方案。",
                actionHint: "提供订单信息",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, sorry 'bout that. Can I see your boarding pass or booking ref? Lemme pull up your res and see what we can do.",
            formalityVariants: {
              casual: "Ugh, sorry to hear that. Got your boarding pass or booking number? I'll check what's up.",
              standard:
                "I'm sorry about that. May I see your boarding pass or booking reference? I'll pull up your reservation and explore the options.",
              formal:
                "I sincerely apologize for the inconvenience. Would you please present your boarding pass or booking reference? I will access your reservation and ascertain the available remedies.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Here's my booking confirmation. My original flight was UA 857 to Shanghai, departing at 1 PM. I have a connecting flight in Shanghai that I'll miss if I'm delayed too long.",
            textZh: "这是我的订单确认。原来的航班是 UA 857 去上海，下午1点起飞。如果延误太久我在上海的转机会赶不上。",
            culturalNote: "中国人在这种情况下可能会比较被动，等待工作人员询问。但在美国，直接主动提供信息能更高效地解决问题。",
            casualVersion:
              "Here's my booking. My original was UA 857 to Shanghai, leaving at 1 PM. Got a connecting flight in Shanghai I'll miss if I'm delayed too long.",
            commonMistake: {
              wrong: "My original flight is UA 857, go to Shanghai. I have transfer flight in Shanghai.",
              correct: "My original flight was UA 857 to Shanghai. I have a connecting flight in Shanghai.",
              explanation: "中文习惯用“去”表达方向，“transfer flight”不如“connecting flight”常用。",
            },
            formalityVariants: {
              casual:
                "Here's the booking. Original was UA 857, 1 PM to Shanghai. I've got a connection there I'll miss if I'm stuck too long.",
              standard:
                "Here's my booking confirmation. My original flight was UA 857 to Shanghai, departing at 1 PM. I have a connecting flight in Shanghai that I'll miss if I'm delayed too long.",
              formal:
                "This is my booking confirmation. My original scheduled flight was UA 857, destined for Shanghai, with a scheduled departure at 13:00. I have a subsequent connecting flight from Shanghai, which I am at risk of missing should there be a significant delay.",
            },
          },
          {
            speaker: "them",
            role: "航空公司柜台",
            textEn:
              "I see your itinerary. The cancellation is due to severe weather — it's affecting all afternoon departures. I have two options for you: first, I can rebook you on tomorrow morning's 8 AM flight, same route. Second, I can route you through Tokyo on a flight leaving at 5 PM today.",
            textZh:
              "我看到您的行程了。航班取消是因为恶劣天气——影响了所有下午的航班。我有两个选项：第一，我可以给您改签到明天早上8点的航班，同一路线。第二，今天下午5点有一趟经东京转机的航班。",
            culturalNote: "美国工作人员在解释原因和提供选项时会非常直接和清晰，期望旅客也能理解并做出选择，而不是期待工作人员替他们做决定。",
            keyPhrases: [
              { en: "itinerary", zh: "行程" },
              { en: "severe weather", zh: "恶劣天气" },
              { en: "rebook", zh: "改签" },
              { en: "route you through", zh: "让您经...转机" },
            ],
            vocabNotes: {
              rebook: {
                meaningInContext: "在这句话里表示：重新预订/改签到另一个航班",
                similarUsage: "类似用法：Can you rebook me on an earlier flight?",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Got your booking here. So this cancellation is weather-related — all afternoon flights are grounded. I can get you on tomorrow's 8 AM same route, or there's a 5 PM today going through Tokyo.",
                textZh:
                  "看到你的预订了。这次取消是天气原因——下午的航班都停了。我可以给你安排明天早上8点同一路线，或者今天下午5点经东京转机。",
                actionHint: "权衡两个选项",
                frequency: "common",
              },
              {
                textEn:
                  "I've pulled up your reservation. Bad weather's knocked out all the afternoon departures. Here are your options: 8 AM tomorrow on the same route, or a 5 PM tonight through Tokyo.",
                textZh:
                  "我调出你的预订了。恶劣天气取消了所有下午的航班。你的选择是：明天早上8点同一路线，或者今晚5点经东京。",
                actionHint: "考虑转机时间和行程",
                frequency: "common",
              },
            ],
            casualVersion:
              "Got your itinerary. Cancellation's 'cause of bad weather — hitting all afternoon flights. Two options: rebook you on tomorrow 8 AM, same route. Or, through Tokyo, flight leaving 5 PM today.",
            commonMistake: {
              wrong: "Cancellation is because weather is bad. All afternoon flight impacted.",
              correct: "The cancellation is due to severe weather. It's affecting all afternoon departures.",
              explanation: "“due to”比“because”更正式且常用；“impacted”不如“affecting”地道。",
            },
            formalityVariants: {
              casual:
                "Okay, got your plan. Bad weather caused the cancel — all afternoon flights are messed up. So, two choices: tomorrow's 8 AM, direct. Or, a 5 PM flight today, through Tokyo.",
              standard:
                "I see your itinerary. The cancellation is due to severe weather — it's affecting all afternoon departures. I have two options for you: first, I can rebook you on tomorrow morning's 8 AM flight, same route. Second, I can route you through Tokyo on a flight leaving at 5 PM today.",
              formal:
                "I have reviewed your itinerary. The cancellation is a direct consequence of severe weather conditions, which are impacting all scheduled departures this afternoon. I can offer you two alternatives: firstly, rebooking you on the 8:00 AM flight tomorrow morning, maintaining the original route; or secondly, rerouting you via Tokyo on a flight scheduled to depart at 17:00 today.",
            },
          },
          {
            speaker: "you",
            textEn:
              "If I take tomorrow's flight, will the airline cover my hotel and meals for tonight? And what about my connecting flight — will that be rebooked too?",
            textZh: "如果我坐明天的航班，航空公司会承担今晚的酒店和餐费吗？还有我的转机航班——也会改签吗？",
            culturalNote: "中国人可能不好意思直接询问补偿，觉得不礼貌。但在美国，直接且礼貌地询问自己的权利是很常见的，尤其是在不便的情况下。",
            casualVersion:
              "If I take tomorrow's flight, will you guys cover my hotel and meals tonight? And my connecting flight — will that get rebooked too?",
            commonMistake: {
              wrong: "If I take tomorrow's flight, airline pay my hotel and food?",
              correct: "If I take tomorrow's flight, will the airline cover my hotel and meals?",
              explanation: "中式英语常省略助动词和介词，且“food”不如“meals”正式。",
            },
            formalityVariants: {
              casual:
                "So if I go tomorrow, you'll cover the hotel and food tonight? And my next flight, that'll be rebooked too?",
              standard:
                "If I take tomorrow's flight, will the airline cover my hotel and meals for tonight? And what about my connecting flight — will that be rebooked too?",
              formal:
                "Should I elect to take tomorrow's flight, will the airline assume responsibility for my accommodation and meals this evening? Furthermore, will my connecting flight also be automatically rebooked?",
            },
          },
          {
            speaker: "them",
            role: "航空公司柜台",
            textEn:
              "Since this is a weather cancellation, we're not required to provide hotel compensation, but I can give you a discounted rate at our partner hotel near the airport — $89 per night. I'll also give you meal vouchers worth $30. Your connecting flight will be automatically rebooked.",
            textZh:
              "因为是天气原因取消的，我们不是必须提供酒店补偿，但我可以给您在机场附近的合作酒店拿到优惠价——每晚89美元。我还会给您30美元的餐饮券。您的转机航班会自动改签。",
            keyPhrases: [
              { en: "weather cancellation", zh: "天气原因取消" },
              { en: "compensation", zh: "补偿" },
              { en: "discounted rate", zh: "优惠价" },
              { en: "meal vouchers", zh: "餐饮券" },
              { en: "automatically rebooked", zh: "自动改签" },
            ],
            culturalMeaning:
              "在美国，天气原因的航班取消航空公司通常不需要赔偿住宿。但机械故障或航空公司自身原因取消则必须提供。了解这个区别很重要。",
            alternativeExpressions: [
              {
                textEn:
                  "Because it's weather-related, we're not technically obligated to cover your hotel. But I can hook you up with a partner hotel at $89 a night, plus $30 in meal vouchers. Your connecting flight will be rebooked automatically.",
                textZh:
                  "因为是天气原因，我们技术上不需要承担酒店费用。但我能给你合作酒店每晚89美元的价格，加30美元餐饮券。你的转机航班会自动改签。",
                actionHint: "接受优惠并安排住宿",
                frequency: "common",
              },
              {
                textEn:
                  "Weather cancellations don't come with hotel coverage, unfortunately. What I can do is get you into our airport hotel for $89 and give you meal vouchers. Your connection will be sorted automatically.",
                textZh:
                  "天气取消不含酒店补偿，很遗憾。我能做的是帮你订机场酒店89美元一晚，给你餐饮券。转机航班会自动处理。",
                actionHint: "了解天气取消的权益区别",
                frequency: "common",
              },
            ],
            casualVersion:
              "Since it's a weather cancellation, we don't gotta cover your hotel, but I can get you a discounted rate at our partner hotel near the airport — $89 a night. I'll also give you $30 in meal vouchers. Your connecting flight'll get automatically rebooked.",
            culturalNote: "在美国，因天气原因航班取消，航空公司通常不负责食宿费用。",
            commonMistake: {
              wrong: "Because weather cancellation, we no need provide hotel.",
              correct: "Since this is a weather cancellation, we're not required to provide hotel compensation.",
              explanation: "动词和被动语态的使用，以及“no need”的不当使用。",
            },
            formalityVariants: {
              casual:
                "Look, with weather cancels, we don't have to pay for your hotel. But I can get you a deal at our airport hotel, like $89 a night. Plus, I'll give you 30 bucks in meal vouchers. Your next flight will automatically rebook.",
              standard:
                "Since this is a weather cancellation, we're not required to provide hotel compensation, but I can give you a discounted rate at our partner hotel near the airport — $89 per night. I'll also give you meal vouchers worth $30. Your connecting flight will be automatically rebooked.",
              formal:
                "Due to the nature of this cancellation, which is attributable to adverse weather conditions, we are not contractually obligated to provide hotel compensation. However, I can extend to you a discounted rate of $89 per night at our affiliated hotel near the airport. Additionally, I will issue meal vouchers totaling $30. Your connecting flight will be automatically rebooked into a suitable alternative.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Can I get an upgrade to business class on tomorrow's flight since I'm being inconvenienced? It's worth asking, right?",
            textZh: "明天的航班能给我升级到商务舱吗？毕竟给我造成了不便。值得一问对吧？",
            culturalNote: "航班取消后礼貌地要求升舱是完全可以的。虽然不一定成功，但态度好的情况下有时候可以。",
            casualVersion:
              "Any chance of a business class upgrade on tomorrow's flight since I'm getting screwed? Worth a shot, right?",
            commonMistake: {
              wrong: "Can I get business class upgrade because inconvenient? It is good to ask, right?",
              correct:
                "Can I get an upgrade to business class on tomorrow's flight since I'm being inconvenienced? It's worth asking, right?",
              explanation: "“inconvenient”作形容词，应为“inconvenienced”；“It is worth asking”是固定短语。",
            },
            formalityVariants: {
              casual: "Since this is a hassle, can I get a biz class upgrade for tomorrow? Can't hurt to ask, right?",
              standard:
                "Can I get an upgrade to business class on tomorrow's flight since I'm being inconvenienced? It's worth asking, right?",
              formal:
                "Given the significant inconvenience incurred, would it be possible to request an upgrade to business class for tomorrow's flight? I presume it is permissible to inquire.",
            },
          },
          {
            speaker: "them",
            role: "航空公司柜台",
            textEn:
              "I understand your frustration. Let me check... Business class is full on tomorrow's flight, but I can put you in an exit row with extra legroom at no additional charge. I'll also add 5,000 bonus miles to your account as a goodwill gesture.",
            textZh:
              "理解您的不便。我查一下……明天的商务舱满了，但我可以给您安排一个紧急出口排的位子，有额外腿部空间，不另外收费。我还会往您的账户里加5000里程作为善意补偿。",
            culturalNote: "美国工作人员在无法满足客户要求时，通常会提供替代方案和补偿，以弥补客户的不满，而非直接拒绝。这是一种常见的服务文化。",
            keyPhrases: [
              { en: "exit row", zh: "紧急出口排" },
              { en: "extra legroom", zh: "额外腿部空间" },
              { en: "no additional charge", zh: "不另外收费" },
              { en: "bonus miles", zh: "奖励里程" },
              { en: "goodwill gesture", zh: "善意表示/补偿" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I hear you. Let me see... Business is booked solid, but I can put you in an exit row — extra legroom, no charge. And I'll throw in 5,000 miles for the trouble.",
                textZh:
                  "理解你。我查一下……商务舱满了，但我可以给你安排紧急出口排——额外腿部空间，不收费。再给你5000里程补偿。",
                actionHint: "接受替代方案",
                frequency: "common",
              },
              {
                textEn:
                  "Totally understand. Business is full unfortunately, but what I can do is get you an exit row with extra space, free of charge. Plus I'll add some bonus miles to your account.",
                textZh:
                  "完全理解。商务舱不幸满了，但我能做的是给你紧急出口排多一些空间，免费的。另外往你账户加一些奖励里程。",
                actionHint: "礼貌争取到了补偿",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I get it. Lemme check... Biz class is full tomorrow, but I can get you an exit row with extra legroom, no extra charge. And I'll throw 5,000 bonus miles on your account as a goodwill gesture.",
            commonMistake: {
              wrong: "I understand you are very frustrated. Business class is full, but I give you 5000 miles.",
              correct:
                "I understand your frustration. Business class is full, but I'll add 5,000 bonus miles to your account as a goodwill gesture.",
              explanation: "“I understand your frustration”是常见表达；“add to account”比“give you”更专业。",
            },
            formalityVariants: {
              casual:
                "Totally get it. Uh, biz class is full for tomorrow, sorry. But I can put you in an exit row, more legroom, no extra cost. And I'll toss 5k bonus miles on your account, just 'cause.",
              standard:
                "I understand your frustration. Let me check... Business class is full on tomorrow's flight, but I can put you in an exit row with extra legroom at no additional charge. I'll also add 5,000 bonus miles to your account as a goodwill gesture.",
              formal:
                "I fully comprehend your dissatisfaction. Upon review, business class on tomorrow's flight is currently at maximum capacity. However, I can assign you an exit row seat, which provides additional legroom, at no supplementary cost. Furthermore, as a gesture of goodwill, I will credit 5,000 bonus miles to your account.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That works. Thank you for being helpful. Can you also give me a written confirmation of the rebooking and the reason for cancellation? I might need it for my travel insurance claim.",
            textZh: "可以。谢谢你的帮助。能给我一份改签确认和取消原因的书面证明吗？我可能需要用它来做旅行保险理赔。",
            culturalNote: "在美国，为了旅行保险理赔，书面确认和取消原因是非常重要的凭证。中国人可能不习惯主动索取，但这是保护自己权益的关键一步。",
            casualVersion:
              "Cool, that works. Thanks for the help. Could I also get a written confirmation of the rebooking and the cancellation reason? Might need it for my travel insurance.",
            commonMistake: {
              wrong:
                "Okay. Thank you. Give me a paper about rebooking and cancellation reason? I need it for insurance.",
              correct:
                "That works. Thank you for being helpful. Can you also give me a written confirmation of the rebooking and the reason for cancellation? I might need it for my travel insurance claim.",
              explanation:
                "“That works”比“Okay”更自然；“paper”过于笼统，应用“written confirmation”；“reason for cancellation”是标准表达。",
            },
            formalityVariants: {
              casual:
                "Yeah, that's fine. Thanks for sorting this. Can I get something in writing for the rebooking and why it was canceled? Need it for insurance.",
              standard:
                "That works. Thank you for being helpful. Can you also give me a written confirmation of the rebooking and the reason for cancellation? I might need it for my travel insurance claim.",
              formal:
                "That arrangement is satisfactory. I appreciate your assistance in this matter. Would it be possible to receive a written confirmation detailing both the rebooking and the specific reason for the original cancellation? I may require this documentation for my travel insurance claim.",
            },
          },
          {
            speaker: "them",
            role: "航空公司柜台",
            textEn:
              "Of course. I'll print out the rebooking confirmation, cancellation notice with the reason code, and your meal vouchers. Everything will also be emailed to the address on file. Here's the hotel shuttle information — buses run every 20 minutes from Terminal 2.",
            textZh:
              "当然。我打印改签确认、带原因代码的取消通知和您的餐饮券。所有信息也会发到您档案上的邮箱。这是酒店班车信息——从2号航站楼每20分钟一趟。",
            keyPhrases: [
              { en: "cancellation notice", zh: "取消通知" },
              { en: "reason code", zh: "原因代码" },
              { en: "on file", zh: "档案上的" },
              { en: "hotel shuttle", zh: "酒店班车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. I'll print your rebooking, the cancellation notice with the reason code, and your meal vouchers. It'll all go to your email too. The hotel shuttle runs every 20 minutes from Terminal 2.",
                textZh:
                  "当然。我打印改签确认、带原因代码的取消通知和餐饮券。也会发到你邮箱。酒店班车从2号航站楼每20分钟一趟。",
                actionHint: "拿好所有纸质文件",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing. Let me get all that printed up — rebooking confirmation, cancellation reason, and vouchers. Everything goes to your email as well. Shuttle to the hotel is from Terminal 2, every 20 minutes.",
                textZh:
                  "没问题。我都打印出来——改签确认、取消原因和代金券。所有信息也会发到你邮箱。去酒店的班车在2号航站楼，每20分钟一班。",
                actionHint: "发邮件可以备份",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing. I'll print out the rebooking, cancellation notice with the code, and your meal vouchers. Everything'll also get emailed to the address on file. Here's the hotel shuttle info — buses run every 20 from Terminal 2.",
            commonMistake: {
              wrong:
                "Yes. I will print rebooking confirmation and cancellation notice. Everything email to you. Here hotel shuttle info, 20 minutes one bus.",
              correct:
                "Of course. I'll print out the rebooking confirmation, cancellation notice, and your meal vouchers. Everything will also be emailed to the address on file. Here's the hotel shuttle information — buses run every 20 minutes.",
              explanation: "中式英语常省略主语、助动词，或用不地道的表达如“20 minutes one bus”。",
            },
            formalityVariants: {
              casual:
                "No problem. I'll print the rebooking, the cancel notice with the code, and your meal tickets. It'll all go to your email too. Here's the shuttle info — buses every 20 mins from Terminal 2.",
              standard:
                "Of course. I'll print out the rebooking confirmation, cancellation notice with the reason code, and your meal vouchers. Everything will also be emailed to the address on file. Here's the hotel shuttle information — buses run every 20 minutes from Terminal 2.",
              formal:
                "Certainly. I will proceed to print your rebooking confirmation, the cancellation notice inclusive of the reason code, and your meal vouchers. All relevant documentation will also be transmitted electronically to the email address we have on record. Furthermore, here is the hotel shuttle information: buses depart every twenty minutes from Terminal 2.",
            },
          },
        ],
      },

      // --- Flow 2: 机场滞留过夜 ---
      {
        id: "stranded-airport",
        titleZh: "机场滞留过夜",
        titleEn: "Stranded at Airport Overnight",
        description: "因为各种原因需要在机场过夜",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, all flights are cancelled due to the snowstorm. Is it possible to sleep in the airport tonight? I can't afford a hotel.",
            textZh: "打扰一下，暴风雪导致所有航班取消。今晚能在机场睡吗？我住不起酒店。",
            culturalNote: "在机场过夜可能在中国不算普遍选择，但在美国因天气等不可抗力导致的航班取消，很多人会选择在机场过夜，因为酒店费用可能较高且",
            casualVersion:
              "Hey, all flights are canceled 'cause of the snow. Can I crash here tonight? Can't afford a hotel.",
            commonMistake: {
              wrong: "I can't pay for a hotel.",
              correct: "I can't afford a hotel.",
              explanation: "afford 是“负担得起”的意思，更自然。pay for 通常指付款行为。",
            },
            formalityVariants: {
              casual: "Hey, flights are off 'cause of the snow. Can I sleep here tonight? No hotel money.",
              standard:
                "Excuse me, all flights are cancelled due to the snowstorm. Is it possible to sleep in the airport tonight? I can't afford a hotel.",
              formal:
                "Pardon me, I understand all flights have been cancelled due to the inclement weather. Would it be permissible to remain within the airport premises overnight, as I am unable to secure alternative accommodation?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Yes, the airport will remain open all night for stranded passengers. We're setting up cots in Gate Area C. There are also blankets and bottled water available at the information desk.",
            textZh: "可以，机场会整晚开放给滞留旅客。我们在C登机区放了折叠床。信息台有毛毯和瓶装水。",
            culturalNote: "美国机场在大规模延误或取消时通常会为滞留旅客提供基本帮助，如折叠床、毯子和水。了解这些可以避免恐慌和不必要的支出。",
            commonMistake: {
              wrong: "Yes, airport will open all night for stranded passengers. We put cots in Concourse C. Information desk has blankets and bottled water.",
              correct: "Yes, the airport will remain open all night for stranded passengers. We have cots set up in Concourse C. The information desk has blankets and bottled water.",
              explanation: "'airport will open' 不如 'airport will remain open' 地道。'We put cots' 听起来像一次性动作，不如 'have cots set up' 表达持续状态。",
            },
            keyPhrases: [
              { en: "stranded passengers", zh: "滞留旅客" },
              { en: "cots", zh: "折叠床" },
              { en: "blankets", zh: "毛毯" },
              { en: "information desk", zh: "信息台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The terminal stays open overnight. Security might ask you to move to a specific area. We have some basic supplies at the customer service counter.",
                textZh: "航站楼通宵开放。安保可能会让你去指定区域。我们在客服柜台有一些基本物资。",
                actionHint: "去指定区域找物资",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, airport's open all night for folks stuck here. We're putting cots in Gate C. Info desk's got blankets and water too.",
            formalityVariants: {
              casual:
                "Yeah, airport's staying open for stranded folks. Cots going up in Gate C. Blankets/water at info desk.",
              standard:
                "Yes, the airport will remain open all night for stranded passengers. We're setting up cots in Gate Area C. There are also blankets and bottled water available at the information desk.",
              formal:
                "Yes, the airport will indeed remain operational throughout the night to accommodate passengers who have been unexpectedly delayed. We are currently deploying temporary cots within Gate Area C. Additionally, complimentary blankets and bottled water are accessible at the main information desk.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Are the restaurants and shops still open? And is there anywhere I can charge my phone?",
            textZh: "谢谢。餐厅和商店还开着吗？有什么地方可以给手机充电吗？",
            casualVersion: "Thanks. Restaurants and shops still open? Also, where can I charge my phone?",
            commonMistake: {
              wrong: "Are restaurants and shops still opening?",
              correct: "Are the restaurants and shops still open?",
              explanation: "“开着”用 open 更自然，opening 更多指正在开门的行为。",
            },
            formalityVariants: {
              casual: "Thanks. Restaurants/shops still open? Need to charge my phone too.",
              standard:
                "Thank you. Are the restaurants and shops still open? And is there anywhere I can charge my phone?",
              formal:
                "Thank you for the information. May I inquire if the restaurants and shops are still operating? Furthermore, are there any designated areas available for charging mobile devices?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Most restaurants are closed, but the vending machines are available 24/7. There's also a convenience store near Gate B12 that stays open late. For charging, there are power outlets along the walls in Gate Area C, and free charging stations near the restrooms.",
            textZh:
              "大部分餐厅关了，但自动售货机24小时运作。B12登机口附近有一家便利店会开到很晚。充电的话，C登机区墙边有电源插座，洗手间附近有免费充电站。",
            culturalNote: "美国机场的便利店和充电设施通常会明确指示，工作人员也会提供详细信息，无需担心找不到。注意 vending machine",
            commonMistake: {
              wrong: "Most restaurants closed, but vending machines 24/7. B12 gate near a convenience store will open late. For charging, C concourse wall outlets, and restrooms have free charging stations.",
              correct: "Most restaurants are closed, but the vending machines are available 24/7. There's a convenience store near Gate B12 that will be open late. For charging, Concourse C has wall outlets, and restrooms have free charging stations.",
              explanation: "省略动词和冠词使句子不完整，'B12 gate near a convenience store' 语序不自然。",
            },
            keyPhrases: [
              { en: "vending machines", zh: "自动售货机" },
              { en: "24/7", zh: "24小时全天候" },
              { en: "power outlets", zh: "电源插座" },
              { en: "charging stations", zh: "充电站" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Most food places are shut, but the vending machines run 24/7. There's a little convenience store by Gate B12 that's still open. For charging, you'll find outlets along the walls in Gate C and charging stations by the restrooms.",
                textZh:
                  "大部分餐厅关了，但自动售货机24小时的。B12登机口附近有家小便利店还开着。充电的话，C区墙边有插座，洗手间旁有充电站。",
                actionHint: "去找食物和充电",
                frequency: "common",
              },
              {
                textEn:
                  "Restaurants are mostly closed for the night. Hit up the vending machines or the convenience store near B12. Charging? There are outlets and free stations in Gate Area C.",
                textZh: "餐厅基本都关了。去自动售货机或者B12附近的便利店。充电？C登机区有插座和免费充电站。",
                actionHint: "先给手机充电",
                frequency: "common",
              },
            ],
            casualVersion:
              "Most restaurants are shut, but vending machines are 24/7. There's also a convenience store by Gate B12 that's open late. For charging, you got outlets on the walls in Gate C, and free stations near the bathrooms.",
            formalityVariants: {
              casual:
                "Most restaurants closed, but vending machines 24/7. Convenience store near B12 stays open late. Outlets on walls in Gate C, free charging near bathrooms.",
              standard:
                "Most restaurants are closed, but the vending machines are available 24/7. There's also a convenience store near Gate B12 that stays open late. For charging, there are power outlets along the walls in Gate Area C, and free charging stations near the restrooms.",
              formal:
                "A majority of the dining establishments are currently closed, however, vending machines are operational twenty-four hours a day, seven days a week. Additionally, a convenience store situated near Gate B12 will remain open until a later hour. Regarding device charging, power outlets are accessible along the walls in Gate Area C, and complimentary charging stations are located adjacent to the restrooms.",
            },
          },
          {
            speaker: "you",
            textEn: "Is the Wi-Fi free? I need to contact my family and rebook my flights.",
            textZh: "Wi-Fi 是免费的吗？我需要联系家人和改签航班。",
            casualVersion: "Is Wi-Fi free? Gotta call my family and rebook my flights.",
            commonMistake: {
              wrong: "Is Wi-Fi free to use?",
              correct: "Is the Wi-Fi free?",
              explanation: "询问是否免费直接说 'Is it free?' 或 'Is the Wi-Fi free?' 即可。",
            },
            formalityVariants: {
              casual: "Wi-Fi free? Need to call fam and rebook.",
              standard: "Is the Wi-Fi free? I need to contact my family and rebook my flights.",
              formal:
                "Could you please confirm if the airport's Wi-Fi service is complimentary? I need to reach out to my family and arrange for new flight reservations.",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              'Yes, airport Wi-Fi is free. The network is called "Airport-Free." Connect and accept the terms. Speed should be decent enough for video calls. Oh, and the airline has set up a rebooking desk at Gate C5 — it\'ll be open until midnight and again at 5 AM.',
            textZh:
              '是的，机场Wi-Fi免费。网络名叫"Airport-Free"。连接后接受条款就行。速度应该可以用来视频通话。对了，航空公司在C5登机口设了改签柜台——开到午夜，明早5点重新开。',
            commonMistake: {
              wrong: "Yes, airport Wi-Fi free. Network name is 'Airport_Free_WiFi'.",
              correct: "Yes, airport Wi-Fi is free. The network is called 'Airport_Free_WiFi'.",
              explanation: "缺少动词 'is' 且 'network name is' 不如 'The network is called' 自然。",
            },
            keyPhrases: [
              { en: "accept the terms", zh: "接受条款" },
              { en: "decent enough", zh: "够用的" },
              { en: "rebooking desk", zh: "改签柜台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, Wi-Fi's free — connect to 'Airport-Free' and accept the terms. Should be fast enough for video calls. Oh, and the airline set up a rebooking desk at Gate C5. Open till midnight, back at 5 AM.",
                textZh:
                  "对，Wi-Fi免费——连'Airport-Free'接受条款就行。速度够视频通话用。对了，航空公司在C5登机口设了改签柜台。开到午夜，明早5点重开。",
                actionHint: "连接Wi-Fi联系家人",
                frequency: "common",
              },
              {
                textEn:
                  "Free Wi-Fi, yeah. Network's called 'Airport-Free.' Decent enough to make calls. Also heads up — there's a rebooking counter at C5 if you haven't sorted your flight yet.",
                textZh:
                  "有免费Wi-Fi。网络叫'Airport-Free'。速度够打电话用。另外提醒——C5有改签柜台，如果航班还没搞定的话。",
                actionHint: "趁Wi-Fi改签航班",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, airport Wi-Fi's free. Network's called \\",
            formalityVariants: {
              casual: "Yep, Wi-Fi's free. Name's \\",
              standard: "Yes, airport Wi-Fi is free. The network is called \\",
              formal: "Yes, the airport does provide complimentary Wi-Fi access. The network identifier is \\",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — I have medication in my checked luggage. Is there any way to get it back?",
            textZh: "还有一个问题——我的药在托运行李里。有办法拿回来吗？",
            culturalNote: "在美国，托运行李一旦进入安全区域，通常很难取回。对于药物这类急需物品，需要明确说明紧急性，工作人员可能会尝试帮助，但也需",
            casualVersion: "Oh, one more thing — my meds are in my checked bag. Any way to get 'em back?",
            commonMistake: {
              wrong: "My medicine is in my checked luggage.",
              correct: "I have medication in my checked luggage.",
              explanation: "“medication” 更正式，“meds” 是常用口语，",
            },
            formalityVariants: {
              casual: "Another thing — my meds are in my checked bag. Can I get 'em?",
              standard: "One more thing — I have medication in my checked luggage. Is there any way to get it back?",
              formal:
                "I have one further query: my essential medication is currently located within my checked luggage. Would there be a procedure to retrieve it at this point?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "That's tricky. Once luggage is checked, it's in a secured area. However, if it's essential medication, go to the airline's baggage service office — it's on the lower level near Carousel 3. Explain your situation and they might be able to retrieve it. If not, there's a 24-hour pharmacy just outside the airport. Take the shuttle to Terminal 1, ground level.",
            textZh:
              "这比较麻烦。行李托运后在安全区域。不过如果是必须的药物，去航空公司的行李服务处——在底层3号传送带附近。说明情况他们可能能帮你取回来。如果不行，机场外面有一家24小时药房。坐班车到1号航站楼一层。",
            culturalNote: "美国对待个人药物有严格规定，但如果情况紧急，工作人员通常会提供尽力协助，并给出明确的替代方案（如机场外药店）。",
            commonMistake: {
              wrong: "This is difficult. Luggage after check-in is in secure area. But if must-have medicine, go to airline baggage service — near Carousel 3 downstairs. Explain, they might help you get it back. If not, outside airport a 24-hour pharmacy. Take shuttle to Terminal 1, first floor.",
              correct: "That's difficult. Luggage is in a secure area after check-in. But if it's essential medication, go to the airline's baggage service — near Carousel 3 downstairs. Explain the situation; they might be able to get it for you. If not, there's a 24-hour pharmacy outside the airport. Take the shuttle to Terminal 1, first floor.",
              explanation: "缺少动词和冠词，'must-have medicine' 不如 'essential medication' 自然，且语序和连接词需要更流畅。",
            },
            keyPhrases: [
              { en: "checked luggage", zh: "托运行李" },
              { en: "secured area", zh: "安全区域" },
              { en: "essential medication", zh: "必须的药物" },
              { en: "baggage service office", zh: "行李服务处" },
              { en: "retrieve", zh: "取回" },
              { en: "carousel", zh: "行李传送带" },
            ],
            vocabNotes: {
              carousel: {
                meaningInContext: "在机场里指行李传送带（baggage carousel），旅客在这里等待取托运行李",
                similarUsage: "类似用法：Your luggage will arrive at Carousel 5.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "That's a tough one. Checked bags go to a restricted area. But if it's medication you really need, head to the baggage office on the lower level near Carousel 3 — explain the situation. Otherwise, there's a 24-hour pharmacy outside the airport.",
                textZh:
                  "这个比较麻烦。托运行李在限制区域。但如果是真正需要的药，去底层3号传送带附近的行李办公室——说明情况。不行的话，机场外面有24小时药房。",
                actionHint: "先去行李办公室试试",
                frequency: "common",
              },
              {
                textEn:
                  "Hmm, that's complicated. Your luggage is locked down. If it's essential meds, try the baggage service desk downstairs — they might pull it for you. Worst case, there's a pharmacy outside on the ground level.",
                textZh:
                  "嗯，这个有点麻烦。行李被锁住了。如果是必需的药，去楼下行李服务台试试——他们可能帮你取出来。最坏情况，地面层外面有家药房。",
                actionHint: "说明是必须的药物",
                frequency: "common",
              },
            ],
            casualVersion:
              "That's tough. Once bags are checked, they're in a secure spot. But if it's super important medication, hit up the airline's baggage office – it's downstairs by Carousel 3. Tell 'em what's up, and they might grab it. Otherwise, there's a 24-hour pharmacy right outside the airport. Just grab the shuttle to Terminal 1, ground level.",
            formalityVariants: {
              casual:
                "Tricky. Checked bags are locked down. If it's vital meds, go to airline baggage office, downstairs near Carousel 3. Explain, they might get it. Otherwise, 24-hr pharmacy outside. Shuttle to Terminal 1, ground level.",
              standard:
                "That's tricky. Once luggage is checked, it's in a secured area. However, if it's essential medication, go to the airline's baggage service office — it's on the lower level near Carousel 3. Explain your situation and they might be able to retrieve it. If not, there's a 24-hour pharmacy just outside the airport. Take the shuttle to Terminal 1, ground level.",
              formal:
                "That presents a challenge. Once luggage has been processed and checked, it is then transferred to a secured facility. However, should this be essential medication, I recommend you proceed to the airline's baggage service office, located on the lower level adjacent to Carousel 3. Present your situation, and they may be able to facilitate its retrieval. Should that not be possible, a 24-hour pharmacy is conveniently located just outside the airport perimeter. You may access it by taking the shuttle service to Terminal 1, ground level.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you so much. You've been really helpful. This is a stressful situation but you've made it easier.",
            textZh: "非常感谢。你帮了大忙。虽然情况很紧张但你让事情容易多了。",
            culturalNote: "在经历不便后，对提供帮助的工作人员表达真诚感谢是非常重要的，尤其是在美国服务文化中。一句简单的感谢能有效传达善意。",
            casualVersion:
              "Seriously, thanks a ton. You've been super helpful. This whole thing's a mess, but you made it way easier.",
            commonMistake: {
              wrong: "You give me big help.",
              correct: "You've been really helpful.",
              explanation: "'You've been helpful' 是更自然的表达。",
            },
            formalityVariants: {
              casual: "Thanks a lot. Super helpful. This sucks, but you made it better.",
              standard:
                "Thank you so much. You've been really helpful. This is a stressful situation but you've made it easier.",
              formal:
                "I extend my sincerest gratitude. Your assistance has been invaluable. While this situation is inherently stressful, your guidance has certainly alleviated much of the difficulty.",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Happy to help. I know it's frustrating. If you need anything else during the night, there's always staff at the information desk. Stay warm, and I hope you get on a flight first thing tomorrow!",
            textZh: "乐意帮忙。我知道很烦人。晚上如果需要什么，信息台一直有人。注意保暖，希望你明天一早就能上飞机！",
            culturalNote: "美国服务人员在结束服务时，通常会再次表达理解和祝福，有时还会提供额外的帮助信息。这种人性化的关怀是服务体验的一部分。",
            commonMistake: {
              wrong: "Happy to help. I know it's annoying. Tonight if you need anything, information desk always has people. Pay attention to keep warm, hope you get on plane early tomorrow!",
              correct: "Happy to help. I know it's annoying. If you need anything overnight, the information desk will always have staff. Stay warm, and I hope you get on your flight first thing tomorrow!",
              explanation: "'annoying' 不如 'a pain' 口语化，'always has people' 不如 'is staffed' 或 'will always have staff' 自然。'Pay attention to keep warm' 过于直译。",
            },
            keyPhrases: [
              { en: "first thing tomorrow", zh: "明天一早/第一时间" },
              { en: "stay warm", zh: "注意保暖" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem at all. I know this stinks. Someone's always at the info desk if you need anything tonight. Bundle up and hopefully you'll be on a flight first thing in the morning!",
                textZh:
                  "完全没问题。我知道这很糟糕。晚上有什么需要信息台一直有人。穿暖和点，希望你明天一早就能上飞机！",
                actionHint: "注意保暖休息好",
                frequency: "common",
              },
              {
                textEn:
                  "Glad I could help. It's a rough night but it'll be over soon. The info desk is staffed 24/7 if anything comes up. Get some rest — tomorrow's a new day!",
                textZh:
                  "很高兴能帮上忙。虽然是难熬的一晚但很快就过去了。信息台24小时有人。好好休息——明天又是新的一天！",
                actionHint: "尽量休息养精蓄锐",
                frequency: "common",
              },
            ],
            casualVersion:
              "Glad I could help. Yeah, I know it's a pain. If you need anything else tonight, info desk's always got someone. Stay warm, and hope you catch an early flight tomorrow!",
            formalityVariants: {
              casual:
                "Happy to help. Yeah, it sucks. Need anything else tonight, info desk's open. Stay warm, hope you get out tomorrow!",
              standard:
                "Happy to help. I know it's frustrating. If you need anything else during the night, there's always staff at the information desk. Stay warm, and I hope you get on a flight first thing tomorrow!",
              formal:
                "It was my pleasure to assist. I fully comprehend the exasperation this situation must entail. Should you require any further assistance throughout the night, personnel will remain available at the information desk. Please ensure you remain warm, and I sincerely hope you are able to secure a flight promptly tomorrow morning.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 证件丢失紧急处理 ====================
  {
    id: "emergency-11",
    category: "emergency",
    titleZh: "证件丢失紧急处理",
    titleEn: "Lost Documents Emergency",
    description: "在国外护照、钱包或重要证件全部丢失时的紧急应对流程",
    otherRole: "领事馆/酒店/警察",
    otherRoleIcon: "file-text",
    flows: [
      // --- Flow 1: 所有证件丢失的应急处理 ---
      {
        id: "all-docs-lost",
        titleZh: "所有证件丢失",
        titleEn: "All Documents Lost",
        description: "护照、钱包、手机全部丢失后的紧急自救流程",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need help urgently. My bag was snatched on the street — it had my passport, wallet, phone, and everything. I have nothing left.",
            textZh: "我急需帮助。我的包在街上被抢了——里面有护照、钱包、手机，所有东西。我什么都没了。",
            commonMistake: {
              wrong: "I have nothing.",
              correct: "I have nothing left.",
              explanation: "直接说I have nothing感觉语气太硬，用left表示什么都没剩下更自然。",
            },
            culturalNote:
              "包被抢后保持冷静。第一步找到最近的安全地点（酒店、商店、警察局），然后按顺序处理：报警→联系领事馆→挂失银行卡。",
            casualVersion: "Need help ASAP. My bag got snatched – passport, wallet, phone, everything's gone.",
            formalityVariants: {
              casual: "Need help ASAP. My bag got snatched – passport, wallet, phone, everything's gone.",
              standard:
                "I need help urgently. My bag was snatched on the street — it had my passport, wallet, phone, and everything. I have nothing left.",
              formal:
                "Excuse me, I require immediate assistance. My personal belongings, including my passport, wallet, and mobile phone, were stolen on the street. I am completely without identification or means of communication.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Oh no, I'm so sorry that happened to you. First, are you hurt? Do you need medical attention?",
            textZh: "天哪，太遗憾了。首先，你受伤了吗？需要看医生吗？",
            keyPhrases: [
              { en: "snatched", zh: "被抢" },
              { en: "medical attention", zh: "医疗救助" },
            ],
            responseTip: "先确认自己没有受伤，然后开始按步骤处理",
            alternativeExpressions: [
              {
                textEn: "That's terrible! Are you okay? Did they hurt you?",
                textZh: "太可怕了！你没事吧？他们伤到你了吗？",
                actionHint: "先确认有没有受伤",
                frequency: "common",
              },
              {
                textEn: "Oh my God, how awful. Are you injured at all? Do you need a doctor?",
                textZh: "天哪，太糟了。你有没有受伤？需要看医生吗？",
                actionHint: "评估身体状况",
                frequency: "common",
              },
            ],
            casualVersion: "Oh wow, so sorry. You okay? Need a doctor?",
            formalityVariants: {
              casual: "Oh wow, so sorry. You okay? Need a doctor?",
              standard: "Oh no, I'm so sorry that happened to you. First, are you hurt? Do you need medical attention?",
              formal:
                "Oh dear, I am truly sorry to hear that. My primary concern is your well-being. Are you injured in any way, and do you require medical assistance?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm not hurt, just shaken up. But I don't know what to do. I can't even call anyone — my phone was in the bag.",
            textZh: "我没受伤，只是被吓到了。但我不知道该怎么办。我连电话都打不了——手机在包里。",
            casualVersion:
              "Nah, not hurt, just super shaken. But like, what do I do? Can't even call anyone, phone's gone.",
            commonMistake: {
              wrong: "I am not hurt",
              correct: "I'm not hurt",
              explanation: "口语中用 I'm 更自然，直接说 I am 显得生硬",
            },
            formalityVariants: {
              casual: "Nah, not hurt, just super shaken. But like, what do I do? Can't even call anyone, phone's gone.",
              standard:
                "I'm not hurt, just shaken up. But I don't know what to do. I can't even call anyone — my phone was in the bag.",
              formal:
                "Physically, I am unharmed, although I am quite distraught. However, I am at a loss as to what steps to take, as my mobile phone, which contained my contacts, was stolen with my bag.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Okay, don't worry, we'll help you step by step. First, use our phone to call the police. The number is 911. After that, you'll need to contact your embassy — the Chinese Embassy emergency line is on this card. We keep it for situations like this.",
            textZh:
              "好的，别担心，我们一步一步帮你。首先，用我们的电话报警。号码是911。之后你需要联系大使馆——中国大使馆紧急电话在这张卡片上。我们专门留着应对这种情况的。",
            keyPhrases: [
              { en: "step by step", zh: "一步一步" },
              { en: "embassy", zh: "大使馆" },
              { en: "emergency line", zh: "紧急电话" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me help. Here's our phone — call 911 first to file a report. Then we can call your embassy together.",
                textZh: "我来帮你。这是我们的电话——先打911报案。然后我们一起打大使馆电话。",
                actionHint: "先报警再联系大使馆",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright, don't sweat it, we'll walk you through it. First, use our phone, call the cops. That's 911. Then, you gotta hit up your embassy – emergency line's on this card. We keep it handy.",
            culturalNote: "美国报警直接拨911即可",
            commonMistake: {
              wrong: "call police",
              correct: "call the police",
              explanation: "名词前常加冠词，口语中也一样，说 'call the police' 更自然。",
            },
            formalityVariants: {
              casual:
                "Alright, don't sweat it, we'll walk you through it. First, use our phone, call the cops. That's 911. Then, you gotta hit up your embassy – emergency line's on this card. We keep it handy.",
              standard:
                "Okay, don't worry, we'll help you step by step. First, use our phone to call the police. The number is 911. After that, you'll need to contact your embassy — the Chinese Embassy emergency line is on this card. We keep it for situations like this.",
              formal:
                "Please remain calm; we will guide you through the necessary procedures. Initially, kindly utilize our telephone to contact emergency services by dialing 911. Subsequently, it will be imperative to reach out to your embassy; the emergency contact information for the Chinese Embassy is provided on this card, which we retain for such eventualities.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you so much. [After calling police] The police said they'll send an officer to take my statement. What do I do about my passport?",
            textZh: "太感谢了。[打完警察电话后] 警察说会派人来做笔录。护照怎么办？",
            casualVersion:
              "Thanks a ton. [After calling cops] Cops said an officer's coming to take my statement. What about my passport?",
            commonMistake: {
              wrong: "take statement",
              correct: "take my statement",
              explanation: "口语中动词后常接所有格，听起来更自然",
            },
            formalityVariants: {
              casual:
                "Thanks a ton. [After calling cops] Cops said an officer's coming to take my statement. What about my passport?",
              standard:
                "Thank you so much. [After calling police] The police said they'll send an officer to take my statement. What do I do about my passport?",
              formal:
                "I am most grateful for your assistance. [Following the call to law enforcement] The police indicated they would dispatch an officer to record my statement. Regarding my passport, what is the recommended course of action?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "You'll need to go to the Chinese Embassy or Consulate to get an emergency travel document. It's called a \"travel permit\" or laissez-passer. They can usually issue one within one to three business days. Do you have digital copies of your passport stored anywhere — email, cloud storage?",
            textZh:
              '你需要去中国大使馆或领事馆办理紧急旅行证件。叫做"旅行许可证"。他们通常一到三个工作日内可以签发。你有护照的电子版吗——邮件里、云存储？',
            commonMistake: {
              wrong: "You need to go to Chinese embassy to make an emergency travel document.",
              correct: "You need to go to the Chinese embassy to get an emergency travel document.",
              explanation: "中文“做”文件常译成make，但英语中get/obtain/apply for更自然。",
            },
            keyPhrases: [
              { en: "emergency travel document", zh: "紧急旅行证件" },
              { en: "travel permit", zh: "旅行许可证" },
              { en: "laissez-passer", zh: "通行证" },
              { en: "digital copies", zh: "电子副本" },
              { en: "business days", zh: "工作日" },
            ],
            vocabNotes: {
              "laissez-passer": {
                meaningInContext: "法语词，在外交中指紧急旅行通行证，护照丢失后可以凭此回国",
                similarUsage: "类似用法：The embassy issued a laissez-passer for the stranded citizen.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For the passport, you need to get to the Chinese Embassy. They can issue an emergency travel permit — usually takes one to three days. Do you have any digital copies saved online? Email, Google Drive, anything?",
                textZh:
                  "护照的话需要去中国大使馆。他们能签发紧急旅行许可——通常一到三天。你有在网上存电子版吗？邮箱、Google Drive什么的？",
                actionHint: "检查有没有电子备份",
                frequency: "common",
              },
              {
                textEn:
                  "Next step is the Chinese Embassy — they'll give you a temporary travel document to get home. It's called a laissez-passer. Got any backup copies of your passport anywhere digital?",
                textZh:
                  "下一步去中国大使馆——他们会给你一个回国用的临时旅行证件。叫laissez-passer。你有在哪里存护照的电子备份吗？",
                actionHint: "回忆所有可能存档的地方",
                frequency: "common",
              },
            ],
            casualVersion:
              "You gotta go to the Chinese Embassy or Consulate for an emergency travel doc. It's called a...",
            culturalNote: "紧急旅行证件并非护照，仅供回国使用。",
            formalityVariants: {
              casual: "You gotta go to the Chinese Embassy or Consulate for an emergency travel doc. It's called a...",
              standard:
                "You'll need to go to the Chinese Embassy or Consulate to get an emergency travel document. It's called a \\",
              formal:
                "You will be required to visit the Chinese Embassy or Consulate in order to obtain an emergency travel document. This is formally referred to as a...",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes! I always email myself copies of important documents. If I can borrow a computer, I can access my email.",
            textZh: "有！我总是把重要文件副本发邮件给自己。如果能借用一台电脑，我可以登录邮箱。",
            commonMistake: {
              wrong: "I have! I always send email to myself copies of important documents.",
              correct: "Yes! I always email myself copies of important documents.",
              explanation: "确认时用Yes更自然；email myself是常用表达，不是send email to myself。",
            },
            culturalNote: "出国前一定要把护照、签证、机票、保险单等拍照并发送到自己的邮箱或存到云端。关键时刻能救急。",
            casualVersion:
              "Yeah! I always email myself copies of important docs. If I can just use a computer, I can get into my email.",
            formalityVariants: {
              casual:
                "Yeah! I always email myself copies of important docs. If I can just use a computer, I can get into my email.",
              standard:
                "Yes! I always email myself copies of important documents. If I can borrow a computer, I can access my email.",
              formal:
                "Indeed! I consistently ensure that I email myself copies of all critical documents. Should I be permitted to use a computer, I would be able to access my email account.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Absolutely, you can use our business center computer. Also, since you're our guest, we can verify your identity through your reservation. I'll also lend you a phone charger and a prepaid phone card so you can make calls. And don't worry about tonight's charges — we'll figure it out later.",
            textZh:
              "当然，你可以用我们商务中心的电脑。而且因为你是我们的住客，我们可以通过你的预订信息验证你的身份。我还借你一个充电器和预付费电话卡方便你打电话。今晚的费用先不用担心——我们之后再说。",
            commonMistake: {
              wrong: "I borrow you a charger.",
              correct: "I can lend you a charger.",
              explanation: "英文中“borrow”是“借入”，而“lend”是“借出”。",
            },
            keyPhrases: [
              { en: "business center", zh: "商务中心" },
              { en: "verify your identity", zh: "验证身份" },
              { en: "prepaid phone card", zh: "预付费电话卡" },
              { en: "figure it out later", zh: "之后再说/以后再处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course — our business center has computers you can use. Since you're staying with us, we can confirm who you are through your booking. I'll also lend you a charger and a prepaid phone card. Don't worry about tonight's bill — we'll sort that out later.",
                textZh:
                  "当然——我们商务中心有电脑你可以用。你是我们的住客，我们可以通过预订确认你的身份。我还借你充电器和预付费电话卡。今晚的费用先不用担心——以后再说。",
                actionHint: "先用电脑登录邮箱",
                frequency: "common",
              },
              {
                textEn:
                  "Go ahead and use the computers in our business center. We can verify your identity from the reservation. Here's a phone charger and a calling card. And honestly, don't stress about payment right now.",
                textZh:
                  "去用我们商务中心的电脑吧。我们可以通过预订记录核实你的身份。给你充电器和电话卡。说真的，现在别操心费用的事。",
                actionHint: "善用酒店提供的帮助",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure, use our business center computer. Plus, since you're our guest, we can verify who you are with your reservation. I'll hook you up with a charger and a prepaid phone card so you can make calls. And don't sweat tonight's charges — we'll sort that out later.",
            culturalNote: "美国服务人员倾向于直接提供帮助，无需过多客套。",
            formalityVariants: {
              casual:
                "For sure, use our business center computer. Plus, since you're our guest, we can verify who you are with your reservation. I'll hook you up with a charger and a prepaid phone card so you can make calls. And don't sweat tonight's charges — we'll sort that out later.",
              standard:
                "Absolutely, you can use our business center computer. Also, since you're our guest, we can verify your identity through your reservation. I'll also lend you a phone charger and a prepaid phone card so you can make calls. And don't worry about tonight's charges — we'll figure it out later.",
              formal:
                "Certainly, you are welcome to utilize the computer facilities in our business center. Furthermore, as a valued guest, we can confirm your identity via your existing reservation. I shall also provide you with a phone charger and a prepaid telephone card to facilitate communication. Please do not concern yourself with the charges for this evening; we will address that matter subsequently.",
            },
          },
          {
            speaker: "you",
            textEn:
              "You're a lifesaver. I also need to cancel my credit cards. Can I use the phone to call my bank in China?",
            textZh: "你是救命恩人。我还需要挂失信用卡。能用电话打给中国的银行吗？",
            casualVersion:
              "You're seriously a lifesaver. Gotta cancel my credit cards too. Can I use the phone to call my bank back in China?",
            commonMistake: {
              wrong: "I need cancel my credit cards",
              correct: "I need to cancel my credit cards",
              explanation: "助动词 'need' 后接动词原形时，通常需要加 'to'",
            },
            formalityVariants: {
              casual:
                "You're seriously a lifesaver. Gotta cancel my credit cards too. Can I use the phone to call my bank back in China?",
              standard:
                "You're a lifesaver. I also need to cancel my credit cards. Can I use the phone to call my bank in China?",
              formal:
                "Your assistance is truly invaluable. Additionally, I must arrange to cancel my credit cards. May I utilize the telephone to contact my banking institution in China?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Of course. For international calls, dial 011 then the country code for China, which is 86, then the number. Most major Chinese banks have 24-hour hotlines. Also, do you have anyone here who could lend you cash or send you money through WeChat or Alipay? Western Union is another option — someone back home can wire you money.",
            textZh:
              "当然。国际电话先拨011，然后中国区号86，再拨号码。大部分中国大银行都有24小时热线。还有，你在这边有人能借你现金或者通过微信/支付宝转钱吗？Western Union 也是一个选择——国内的人可以汇钱给你。",
            commonMistake: {
              wrong: "Send you money by WeChat.",
              correct: "Send you money through WeChat.",
              explanation: "英文里通过某种途径用“through”或“via”更自然。",
            },
            keyPhrases: [
              { en: "international calls", zh: "国际电话" },
              { en: "country code", zh: "国家区号" },
              { en: "24-hour hotlines", zh: "24小时热线" },
              { en: "wire you money", zh: "汇钱给你" },
            ],
            localVariants: {
              "en-US": "Dial 011 then 86 for China.",
              "en-GB": "Dial 00 then 86 for China.",
              "en-AU": "Dial 0011 then 86 for China.",
            },
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. For calling China, dial 011-86 then the number. Most big Chinese banks have round-the-clock hotlines. Is there anyone here who could send you money — WeChat, Alipay? Western Union works too if someone back home can wire it.",
                textZh:
                  "当然。打中国电话拨011-86再拨号码。大部分中国大银行都有24小时热线。这边有人能给你转钱吗——微信、支付宝？Western Union也行，国内有人能汇。",
                actionHint: "先挂失银行卡",
                frequency: "common",
              },
              {
                textEn:
                  "Dial 011 then 86 for China. Call your bank first to freeze those cards. For cash, can someone wire you money through WeChat, Alipay, or Western Union?",
                textZh: "拨011再86打中国。先打银行冻结卡。现金方面，有人能通过微信、支付宝或Western Union给你汇钱吗？",
                actionHint: "冻结银行卡是最紧急的",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, totally. For international calls, you dial 011, then China's country code, which is 86, then the number. Most big Chinese banks have 24/7 hotlines. Also, you got anyone here who could spot you some cash or send money via WeChat or Alipay? Western Union's also an option — someone back home can wire you money.",
            culturalNote: "微信和支付宝在中国是主要支付方式，但在美国不常用。Western Union是国际汇款的常见选择。",
            formalityVariants: {
              casual:
                "Yeah, totally. For international calls, you dial 011, then China's country code, which is 86, then the number. Most big Chinese banks have 24/7 hotlines. Also, you got anyone here who could spot you some cash or send money via WeChat or Alipay? Western Union's also an option — someone back home can wire you money.",
              standard:
                "Of course. For international calls, dial 011 then the country code for China, which is 86, then the number. Most major Chinese banks have 24-hour hotlines. Also, do you have anyone here who could lend you cash or send you money through WeChat or Alipay? Western Union is another option — someone back home can wire you money.",
              formal:
                "Certainly. To initiate an international call, please dial 011, followed by the country code for China, which is 86, and then the complete telephone number. It is worth noting that most prominent Chinese banks maintain 24-hour customer service hotlines. Furthermore, do you have any contacts locally who could provide you with cash or transfer funds via platforms such as WeChat or Alipay? Western Union also presents a viable option for receiving wired funds from your home country.",
            },
          },
        ],
      },

      // --- Flow 2: 领事馆办理临时证件 ---
      {
        id: "consulate-temp-docs",
        titleZh: "领事馆办理临时证件",
        titleEn: "Getting Emergency Documents at Consulate",
        description: "去中国领事馆办理紧急旅行证件的详细流程",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, I'm a Chinese citizen and my passport was stolen. I need an emergency travel document to return home.",
            textZh: "你好，我是中国公民，护照被偷了。我需要紧急旅行证件回国。",
            casualVersion:
              "Hey, I'm Chinese, and my passport got swiped. Need an emergency travel doc to head back home.",
            culturalNote: "美国办理业务时通常直接说明目的，不必像中文那样先说“你好，请问”。",
            commonMistake: {
              wrong: "My passport was stolen. I need emergency travel document.",
              correct: "My passport was stolen. I need an emergency travel document.",
              explanation: "中文不说冠词，容易漏掉英文的“a/an/the”。",
            },
            formalityVariants: {
              casual: "Hey, I'm Chinese, passport got stolen. Need an emergency travel doc to go home.",
              standard:
                "Hello, I'm a Chinese citizen, and my passport was stolen. I need an emergency travel document to return home.",
              formal:
                "Good morning/afternoon. I am a Chinese national, and unfortunately, my passport has been stolen. I require an emergency travel document to facilitate my return to China.",
            },
          },
          {
            speaker: "them",
            role: "领事馆工作人员",
            textEn:
              "I'm sorry to hear that. We can help. Do you have a police report? That's the first thing we'll need.",
            textZh: "很遗憾。我们可以帮你。你有报案记录吗？这是我们首先需要的。",
            commonMistake: {
              wrong: "Do you have police report?",
              correct: "Do you have a police report?",
              explanation: "“police report”是可数名词，前面需要加“a”或“the”。",
            },
            keyPhrases: [
              { en: "Chinese citizen", zh: "中国公民" },
              { en: "police report", zh: "报案记录" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We deal with this all the time, don't worry. First thing — do you have a police report? That's the starting point for everything.",
                textZh: "我们经常处理这种事，别担心。第一件事——你有报案记录吗？这是所有办理的起点。",
                actionHint: "出示报案记录",
                frequency: "common",
              },
              {
                textEn:
                  "Sorry to hear that. We can definitely help. Before anything else — have you reported it to the police? We need that on file.",
                textZh: "很遗憾。我们肯定能帮你。但首先——报警了吗？我们需要有记录。",
                actionHint: "没报警的话先去报警",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh man, sorry to hear that. We can totally help. Got a police report? That's kinda the first thing.",
            formalityVariants: {
              casual: "Oh, sorry to hear that. We can help. Got a police report? That's key.",
              standard:
                "I'm sorry to hear that. We can help. Do you have a police report? That's the first thing we'll need.",
              formal:
                "I regret to hear of your situation. We are certainly here to assist you. May I inquire if you possess a police report? That would be our primary requirement.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, here's a copy of the police report. I also have a digital scan of my passport that I saved in my email.",
            textZh: "有的，这是报案记录的副本。我邮箱里还存了护照的电子扫描件。",
            casualVersion:
              "Yep, got the police report right here. And I've got a digital scan of my passport in my email too.",
            commonMistake: {
              wrong: "I have a digital scan of my passport in my email.",
              correct: "I also have a digital scan of my passport that I saved in my email.",
              explanation: '"in my email" 意思模糊，说 "saved in my email" 更清楚。',
            },
            formalityVariants: {
              casual: "Yep, here's the police report. Also got a digital scan of my passport in my email.",
              standard:
                "Yes, here's a copy of the police report. I also have a digital scan of my passport that I saved in my email.",
              formal:
                "Yes, I do. Here is a copy of the police report. Furthermore, I have a digital scan of my passport saved within my email account.",
            },
          },
          {
            speaker: "them",
            role: "领事馆工作人员",
            textEn:
              "Excellent, having a copy makes the process much faster. You'll need to fill out an application form and provide two passport-sized photos. We have a photo booth in the lobby if you need one. The fee for an emergency travel permit is $25.",
            textZh:
              "太好了，有副本流程会快很多。你需要填写一份申请表并提供两张护照尺寸的照片。如果需要的话大厅有自助拍照机。紧急旅行许可证的费用是25美元。",
            commonMistake: {
              wrong: "You need fill in a form.",
              correct: "You need to fill out a form.",
              explanation: "“填表”常用fill out/fill in a form，而非fill a form。",
            },
            keyPhrases: [
              { en: "application form", zh: "申请表" },
              { en: "passport-sized photos", zh: "护照尺寸的照片" },
              { en: "photo booth", zh: "自助拍照机" },
              { en: "emergency travel permit", zh: "紧急旅行许可证" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh great, a copy speeds things up a lot. You'll need to fill out a form, bring two photos — there's a photo machine in the lobby — and the fee is $25.",
                textZh: "太好了，有复印件快很多。你需要填一张表、带两张照片——大厅有自助拍照机——费用25美元。",
                actionHint: "去大厅拍照",
                frequency: "common",
              },
              {
                textEn:
                  "That really helps. Okay — application form, two passport photos, and $25. We've got a photo booth right over there if you need pictures taken.",
                textZh: "这真的有帮助。好——申请表、两张护照照片、25美元。那边就有自助拍照机如果你需要拍照的话。",
                actionHint: "准备照片和费用",
                frequency: "common",
              },
            ],
            casualVersion:
              "Awesome, a copy speeds things up big time. You'll just need to fill out a form and bring two passport photos. There's a photo booth in the lobby if you need it. It's 25 bucks for the emergency travel permit.",
            formalityVariants: {
              casual:
                "Great, a copy makes it way faster. Just fill out the form, two passport photos. Photo booth's in the lobby if you need. Permit's 25 bucks.",
              standard:
                "Excellent, having a copy makes the process much faster. You'll need to fill out an application form and provide two passport-sized photos. We have a photo booth in the lobby if you need one. The fee for an emergency travel permit is $25.",
              formal:
                "That is excellent; possessing a copy will significantly expedite the processing time. You will be required to complete an application form and submit two passport-sized photographs. A photo booth is available in the lobby should you require one. The fee for an emergency travel permit is $25.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I don't have cash — my wallet was stolen too. Can I pay by card or have someone pay for me remotely?",
            textZh: "我没有现金——钱包也被偷了。能刷卡或者让人远程替我付吗？",
            casualVersion:
              "No cash, my wallet got snatched too. Can I pay with a card or have someone pay for me from afar?",
            commonMistake: {
              wrong: "Can I pay by card or let someone pay for me remotely?",
              correct: "Can I pay by card or have someone pay for me remotely?",
              explanation: '"let someone do" 语气更强或有允许意味，"have someone do" 更自然地表达请人帮忙。',
            },
            formalityVariants: {
              casual: "No cash, wallet got stolen too. Card or can someone pay for me remotely?",
              standard:
                "I don't have cash — my wallet was stolen too. Can I pay by card or have someone pay for me remotely?",
              formal:
                "I regret to inform you that I do not possess any cash, as my wallet was also stolen. Would it be possible to pay by credit/debit card, or could an individual pay on my behalf remotely?",
            },
          },
          {
            speaker: "them",
            role: "领事馆工作人员",
            textEn:
              "We accept credit cards and debit cards. If you don't have those, we can process the application and you can pay later — we understand emergency situations. We also accept payment through our consulate's online portal if someone back home can pay for you.",
            textZh:
              "我们接受信用卡和借记卡。如果你没有卡，我们可以先办理申请之后再付款——我们理解紧急情况。我们也接受通过领事馆网上平台付款，家人可以帮你付。",
            commonMistake: {
              wrong: "Family can help you pay.",
              correct: "Family can pay for you.",
              explanation: "“help you pay”是你也付款，而“pay for you”是替你付清。",
            },
            keyPhrases: [
              { en: "debit cards", zh: "借记卡" },
              { en: "process the application", zh: "办理申请" },
              { en: "online portal", zh: "网上平台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry about payment right now. In emergencies, we can waive the fee or arrange payment later.",
                textZh: "现在别担心付款的事。紧急情况下我们可以免费或者安排后付。",
                actionHint: "先办理手续",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, we take cards, credit or debit. No cards? We can still process it, you can pay later — we get it, emergencies happen. Or someone back home can pay through our online portal.",
            formalityVariants: {
              casual:
                "Cards are fine, credit or debit. No cards? We'll still process it, pay later – we get emergencies. Or someone can pay online.",
              standard:
                "We accept credit cards and debit cards. If you don't have those, we can process the application and you can pay later — we understand emergency situations. We also accept payment through our consulate's online portal if someone back home can pay for you.",
              formal:
                "We do accept both credit and debit cards. Should you be unable to provide these, we are prepared to process your application, with payment deferred to a later time, as we fully comprehend the exigencies of emergency situations. Additionally, payment may be submitted via our consulate's secure online portal, should an individual wish to pay on your behalf from your home country.",
            },
          },
          {
            speaker: "you",
            textEn: "How long will it take to get the travel document? My return flight is in four days.",
            textZh: "旅行证件多久能办好？我的返程航班还有四天。",
            casualVersion: "How long till I get the travel doc? My flight back's in four days.",
            commonMistake: {
              wrong: "My return flight has four days.",
              correct: "My return flight is in four days.",
              explanation: '"has four days" 不准确，表达“在…之内”或“还有多久”用 "is in [time]"。',
            },
            formalityVariants: {
              casual: "How long for the travel doc? Flight's in four days.",
              standard: "How long will it take to get the travel document? My return flight is in four days.",
              formal:
                "Could you please inform me of the estimated processing time for the travel document? My return flight is scheduled for four days from now.",
            },
          },
          {
            speaker: "them",
            role: "领事馆工作人员",
            textEn:
              "Standard processing is three business days. For emergency cases like yours, we can do rush processing in 24 hours if you have a confirmed departure within 48 hours. Since your flight is in four days, standard processing should be fine. We'll call you when it's ready. Do you have a local number we can reach?",
            textZh:
              "标准办理是三个工作日。像您这种紧急情况，如果确认48小时内出发，我们可以24小时加急。因为您的航班还有四天，标准办理应该来得及。办好了我们会打电话通知你。你有本地号码吗？",
            commonMistake: {
              wrong: "We will call you when it is ready.",
              correct: "We'll give you a call when it's ready.",
              explanation: "“我们会给你打电话”口语常用give you a call/ring you，而非call you。",
            },
            keyPhrases: [
              { en: "standard processing", zh: "标准办理" },
              { en: "rush processing", zh: "加急办理" },
              { en: "confirmed departure", zh: "确认的出发时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Normally it's three business days. If your flight was within 48 hours, we could rush it to 24 hours. Since you've got four days, standard should be fine. We'll give you a ring when it's ready. Got a local number?",
                textZh:
                  "一般三个工作日。如果你的航班在48小时内，我们可以加急到24小时。你还有四天，标准流程应该来得及。好了我们打电话通知你。有本地号码吗？",
                actionHint: "留下联系电话",
                frequency: "common",
              },
              {
                textEn:
                  "Regular turnaround is three days. We can do 24-hour rush for people flying out within 48 hours. You should be fine with standard. Leave us a number and we'll call you when it's done.",
                textZh:
                  "正常周转时间三天。48小时内出发的可以24小时加急。你标准流程应该没问题。留个号码办好了我们通知你。",
                actionHint: "确认不需要加急",
                frequency: "common",
              },
            ],
            casualVersion:
              "Normal processing takes three business days. For emergencies like yours, we can rush it in 24 hours if you're flying out within 48 hours. Since your flight's in four days, regular processing should be cool. We'll give you a call when it's ready. Got a local number for us?",
            formalityVariants: {
              casual:
                "Three business days usually. Rush processing, 24 hours, if you leave in 48. Your flight's in four days, so standard's good. We'll call when it's ready. Got a local number?",
              standard:
                "Standard processing is three business days. For emergency cases like yours, we can do rush processing in 24 hours if you have a confirmed departure within 48 hours. Since your flight is in four days, standard processing should be fine. We'll call you when it's ready. Do you have a local number we can reach?",
              formal:
                "Standard processing typically requires three business days. For urgent situations such as yours, we can expedite the process to 24 hours, provided you have a confirmed departure scheduled within 48 hours. Given that your flight is in four days, standard processing should be adequate. We will contact you once the document is prepared. Do you have a local contact number at which you can be reached?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm using a temporary phone number from the hotel. Here it is. Is there anything else I should do while waiting?",
            textZh: "我用的是酒店的临时号码。给你。等待期间还有什么需要做的吗？",
            casualVersion: "Got a temp number from the hotel. Here it is. Anything else I should do while I wait?",
            commonMistake: {
              wrong: "I'm using a temporary phone number of the hotel.",
              correct: "I'm using a temporary phone number from the hotel.",
              explanation: '表达“来自哪里”用 "from" 更自然，"of" 通常表示所属关系。',
            },
            formalityVariants: {
              casual: "Temp number from the hotel. Here. Anything else while I wait?",
              standard:
                "I'm using a temporary phone number from the hotel. Here it is. Is there anything else I should do while waiting?",
              formal:
                "I am currently utilizing a temporary phone number provided by the hotel. Here is the number. Are there any other actions I should take during this waiting period?",
            },
          },
          {
            speaker: "them",
            role: "领事馆工作人员",
            textEn:
              "Contact your airline to let them know about your situation — they may need to see the travel permit instead of a passport. Also register with our consulate's emergency notification system so we can reach you if needed. Here's our 24-hour emergency number in case anything else comes up. Is there anything else I can help with today?",
            textZh:
              "联系航空公司告知情况——他们可能需要看旅行许可证而不是护照。也在我们领事馆的紧急通知系统上注册，这样有需要时我们能联系到你。这是我们的24小时紧急电话以防万一。今天还有什么需要帮助的吗？",
            commonMistake: {
              wrong: "Register our consulate's emergency notification system.",
              correct: "Register with our consulate's emergency notification system.",
              explanation: "“register”后面接机构时通常用“with”。",
            },
            keyPhrases: [
              { en: "emergency notification system", zh: "紧急通知系统" },
              { en: "in case anything else comes up", zh: "以防万一" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give your airline a call so they know what's up — they might need to see the travel permit at check-in. Also sign up for our emergency alerts. Here's our 24-hour number. Anything else?",
                textZh:
                  "打电话给航空公司告诉他们情况——值机时可能需要出示旅行许可证。也注册一下我们的紧急通知系统。这是我们的24小时电话。还有其他的吗？",
                actionHint: "提前通知航空公司",
                frequency: "common",
              },
              {
                textEn:
                  "Heads up your airline — they'll want to know you're traveling on a permit, not a passport. Register with our notification system too. And here's our emergency line, just in case.",
                textZh:
                  "通知你的航空公司——他们需要知道你是用许可证而不是护照旅行。也在我们的通知系统上注册。给你紧急电话以防万一。",
                actionHint: "注册紧急通知系统",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hit up your airline, let 'em know what's up — they might wanna see the travel permit instead of your passport. Also, sign up for our emergency alert system so we can get ahold of you if anything happens. Here's our 24-hour emergency number, just in case. Anything else I can do for ya today?",
            formalityVariants: {
              casual:
                "Call your airline, tell 'em what happened – they might need to see the permit. Sign up for our emergency alerts too, so we can reach you. Here's our 24-hour emergency number, just in case. Anything else?",
              standard:
                "Contact your airline to let them know about your situation — they may need to see the travel permit instead of a passport. Also register with our consulate's emergency notification system so we can reach you if needed. Here's our 24-hour emergency number in case anything else comes up. Is there anything else I can help with today?",
              formal:
                "Kindly contact your airline to apprise them of your situation; they may require viewing the travel permit in lieu of a passport. Additionally, please register with our consulate's emergency notification system to ensure we can reach you if necessary. This is our 24-hour emergency contact number, should any further issues arise. Is there anything further I can assist you with today?",
            },
          },
          {
            speaker: "you",
            textEn: "No, this is very helpful. Thank you for everything. I feel much better knowing there's a plan.",
            textZh: "没有了，非常有帮助。感谢你做的一切。知道有了计划我感觉好多了。",
            casualVersion:
              "Nah, this was super helpful. Thanks for everything. Feel way better knowing there's a plan.",
            commonMistake: {
              wrong: "I feel very better.",
              correct: "I feel much better.",
              explanation: '"very" 不能修饰比较级，要用 "much" 或 "way" 修饰比较级。',
            },
            formalityVariants: {
              casual: "Nah, super helpful. Thanks for everything. Feel way better with a plan.",
              standard:
                "No, this is very helpful. Thank you for everything. I feel much better knowing there's a plan.",
              formal:
                "No, that will be all. This information has been exceptionally helpful. I extend my sincere gratitude for all your assistance. I feel considerably more reassured now that a clear plan is in place.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 人身安全威胁 ====================
  {
    id: "emergency-12",
    category: "emergency",
    titleZh: "人身安全威胁",
    titleEn: "Personal Safety Threat",
    description: "在国外遇到跟踪、骚扰或感觉不安全时的应对方式",
    otherRole: "警察/安保/路人",
    otherRoleIcon: "shield",
    flows: [
      // --- Flow 1: 被跟踪/感觉不安全 ---
      {
        id: "being-followed",
        titleZh: "被跟踪",
        titleEn: "Being Followed",
        description: "走在路上感觉被跟踪，向路边商店或警察求助",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I think someone has been following me for the past few blocks. I don't feel safe. Can I stay in your store for a while?",
            textZh: "打扰一下，有个人好像跟了我好几个街区了。我感觉不安全。我能在你的店里待一会儿吗？",
            casualVersion: "Hey, I think someone's been following me for a few blocks. Don't feel safe. Can I chill in your store for a sec?",
            commonMistake: {
              wrong: "Excuse me, someone followed me.",
              correct: "Excuse me, I think someone has been following me.",
              explanation: "\"has been following\" 强调持续动作和对现在的影响。",
            },
            formalityVariants: {
              casual: "Hey, I think someone's been following me for a few blocks. Don't feel safe. Can I stay in your store for a bit?",
              standard: "Excuse me, I think someone has been following me for the past few blocks. I don't feel safe. May I stay in your store for a bit?",
              formal: "Pardon me, I believe I've been followed for several blocks. I'm feeling rather unsafe. Would it be possible for me to remain in your establishment for a short while?",
            },
            culturalNote: "在感觉被跟踪时，立刻走进最近的商店、餐厅或任何有人的公共场所。不要走进小巷或偏僻的地方。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course, come inside. You're safe here. Can you point out who was following you? I can see the street from the window.",
            textZh: "当然，进来。你在这里安全的。能指给我看是谁跟着你吗？我从窗户能看到街上。",
            casualVersion: "Course, come on in. You're safe. Can you point out who it was? I can see the street from here.",
            commonMistake: {
              wrong: "You are safe here.",
              correct: "You're safe here.",
              explanation: "缩略形式更自然，听起来更亲切和安慰。",
            },
            formalityVariants: {
              casual: "Course, come on in. You're safe. Point out who it was? I can see the street from here.",
              standard: "Of course, please come inside. You are safe here. Could you point out who was following you? I can observe the street from the window.",
              formal: "Certainly, please come in. You are quite safe within these premises. Would you be able to indicate the individual who was following you? I have a clear view of the street from this window.",
            },
            keyPhrases: [
              { en: "you're safe here", zh: "你在这里安全" },
              { en: "point out", zh: "指出来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely, stay as long as you need. Should I call the police?",
                textZh: "当然，想待多久都行。要不要我报警？",
                actionHint: "决定是否报警",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It's that man in the dark jacket — he's standing across the street now. He's been behind me since I left the subway station.",
            textZh: "就是那个穿深色夹克的人——他现在站在对面。从我出地铁站就一直跟着我。",
            casualVersion: "It's the dude in the dark jacket — he's just across the street. Been following me since I left the subway.",
            commonMistake: {
              wrong: "He is follow me since I left.",
              correct: "He's been following me ever since I left the subway station.",
              explanation: "强调从过去某时开始一直持续到现在的动作。",
            },
            formalityVariants: {
              casual: "It's the guy in the dark jacket — he's across the street. Been following me since the subway.",
              standard: "It's the man in the dark jacket — he is standing across the street now. He has been following me ever since I left the subway station.",
              formal: "It is the gentleman in the dark jacket—he is currently positioned across the thoroughfare. He has been observing me since my departure from the subway station.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I see him. Let me call 911 right now. Don't worry — this kind of thing has happened before in this neighborhood. The police respond pretty quickly. While we wait, you can sit in the back of the store.",
            textZh: "我看到了。我现在打911。别担心——这种事在这个社区发生过。警察来得挺快的。等的时候你可以坐在店里面。",
            casualVersion: "Yeah, I see him. I'll call 911 right now. Don't sweat it—happens sometimes around here. Cops usually get here fast. Just chill inside while we wait.",
            culturalNote: "美国拨打911是免费且直接联系紧急服务的。",
            commonMistake: {
              wrong: "I call 911 now.",
              correct: "Let me call 911 right now.",
              explanation: "\"Let me\" 表示主动提出和即将采取的行动，更自然。",
            },
            formalityVariants: {
              casual: "Got him. Calling 911 now. Don't worry—happens sometimes. Cops get here fast. Just sit inside while we wait.",
              standard: "I see him. Let me call 911 right now. Do not worry—this kind of incident has occurred in this neighborhood before. The police typically arrive quite quickly. You may sit inside while we wait.",
              formal: "I have located him. I shall contact 911 immediately. Please do not be concerned; such occurrences, while infrequent, have unfortunately taken place in this vicinity previously. Emergency services are generally prompt in their response. You are welcome to remain seated inside during our wait.",
            },
            keyPhrases: [
              { en: "respond quickly", zh: "快速响应" },
              { en: "in the back of the store", zh: "在店里面/后面" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I can see him. I'm dialing 911 now. Don't worry — cops are pretty quick around here. Sit in the back where he can't see you.",
                textZh: "对，我看到了。我在打911了。别担心——这一带警察来得挺快的。坐到里面他看不到你的地方。",
                actionHint: "躲到店里面",
                frequency: "common",
              },
              {
                textEn:
                  "I spot him. Calling the police right now. We've had this before in the neighborhood — they'll be here fast. Come sit behind the shelves.",
                textZh: "我看到他了。现在报警。这个社区以前也发生过这种事——他们会很快来的。来坐到货架后面。",
                actionHint: "在店内等待警察",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'm a tourist — I don't really know this area. I was just walking back to my hotel.",
            textZh: "谢谢。我是游客——不太认识这一带。我只是在走回酒店的路上。",
            casualVersion: "Thanks. I'm just a tourist, don't really know my way around. Just heading back to my hotel.",
            commonMistake: {
              wrong: "I am tourist, don't know here.",
              correct: "I'm a tourist—I don't really know this area.",
              explanation: "\"a tourist\" 需要冠词。\"know this area\" 更自然。",
            },
            formalityVariants: {
              casual: "Thanks. Just a tourist, don't know this area. Was just walking back to my hotel.",
              standard: "Thank you. I am a tourist—I don't really know this area. I was simply walking back to my hotel.",
              formal: "My sincere thanks. I am a tourist and am quite unfamiliar with this particular vicinity. I was merely en route back to my accommodation.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Which hotel are you at? When the police get here, they can escort you back. Some areas around here aren't great for walking alone at night. After 9 PM, I'd always recommend taking a ride-share like Uber or Lyft.",
            textZh:
              "你住哪个酒店？警察来了可以护送你回去。这附近有些地方晚上一个人走不太安全。晚上9点以后，我建议打 Uber 或 Lyft。",
            casualVersion: "What hotel you at? Once the cops get here, they can take you back. Some spots around here aren't safe to walk alone at night. After 9, I'd say grab an Uber or Lyft.",
            culturalNote: "Uber和Lyft是美国最主要的打车软件。",
            commonMistake: {
              wrong: "Police come, they escort you.",
              correct: "When the police get here, they can escort you back.",
              explanation: "\"When...get here\" 表示未来的条件句，更地道。",
            },
            formalityVariants: {
              casual: "What hotel are you at? Cops get here, they can take you back. Some areas aren't safe at night. After 9 PM, just grab an Uber or Lyft.",
              standard: "Which hotel are you staying at? When the police arrive, they can escort you back. Certain areas around here are not safe for walking alone at night. After 9 PM, I recommend using an Uber or Lyft service.",
              formal: "Could you please inform me of your hotel's location? Upon the arrival of law enforcement, they will be able to escort you back. It is advisable to note that some areas in this vicinity are not conducive to solitary nighttime pedestrian travel. Subsequent to 9 PM, I would strongly advise utilizing a ride-sharing service such as Uber or Lyft.",
            },
            keyPhrases: [
              { en: "escort you back", zh: "护送你回去" },
              { en: "walking alone at night", zh: "晚上一个人走" },
              { en: "ride-share", zh: "网约车" },
            ],
            culturalMeaning:
              "在很多欧美城市，某些街区白天安全但晚上不建议步行。了解当地安全区域很重要。问酒店前台「哪些地方晚上最好别去」是明智的做法。",
            alternativeExpressions: [
              {
                textEn:
                  "Where are you staying? The cops can walk you back when they get here. This area's not the safest at night — I'd take an Uber or Lyft after dark.",
                textZh: "你住哪？警察来了可以送你回去。这一带晚上不太安全——天黑以后建议打Uber或Lyft。",
                actionHint: "以后晚上打车出行",
                frequency: "common",
              },
              {
                textEn:
                  "What hotel? Police can give you a ride back. Just so you know, some streets around here get sketchy after 9 PM. Stick to ride-sharing apps at night.",
                textZh: "什么酒店？警察可以送你回去。跟你说一下，这附近有些街道晚上9点后不太安全。晚上用打车软件。",
                actionHint: "了解当地安全状况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Hi, we got a call about someone being followed. Are you the person who reported it? Can you describe what happened?",
            textZh: "你好，我们接到有人被跟踪的报警。是你报的案吗？能描述一下发生了什么吗？",
            casualVersion: "Hey, we got a call about someone getting followed. You the one who reported it? Can you tell us what happened?",
            commonMistake: {
              wrong: "We got call about someone followed.",
              correct: "We got a call about someone being followed.",
              explanation: "\"a call\" 需要冠词。\"being followed\" 是现在进行时的被动语态。",
            },
            formalityVariants: {
              casual: "Hey, we got a call about someone being followed. You report it? Describe what happened?",
              standard: "Hello, we received a report regarding an individual being followed. Are you the person who reported this incident? Would you be able to describe what transpired?",
              formal: "Good evening, we received a dispatch concerning an individual reportedly being followed. Are you the party who initiated this report? Could you kindly provide an account of the events?",
            },
            keyPhrases: [
              { en: "reported it", zh: "报的案" },
              { en: "describe what happened", zh: "描述发生了什么" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Evening. We responded to a call about a person being followed. That you? Walk me through what happened.",
                textZh: "晚上好。我们来处理一个被人跟踪的报警。是你报的吗？跟我说说怎么回事。",
                actionHint: "详细描述经过",
                frequency: "common",
              },
              {
                textEn: "We're here about the following incident. You the one who called? Tell us what's going on.",
                textZh: "我们来处理跟踪事件的。你报的警吗？告诉我们怎么回事。",
                actionHint: "从头描述",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Yes, I noticed a man in a dark jacket following me from the subway station — about six blocks. He kept the same distance behind me and when I crossed the street, he crossed too. I got scared and came into this store.",
            textZh:
              "是的，我注意到一个穿深色夹克的男人从地铁站就跟着我——大约六个街区。他一直保持一样的距离，我过马路他也过。我害怕了就进了这家店。",
            casualVersion: "Yeah, I noticed this guy in a dark jacket following me from the subway — like six blocks. He kept the same distance, and when I crossed, he crossed too. Got scared and came in here.",
            commonMistake: {
              wrong: "I noticed a man follow me from subway.",
              correct: "I noticed a man in a dark jacket following me from the subway station.",
              explanation: "\"in a dark jacket\" 表示穿着。\"following\" 表示持续的动作。",
            },
            formalityVariants: {
              casual: "Yeah, noticed a guy in a dark jacket following me from the subway—six blocks. He kept the same distance, and when I crossed, he crossed too. Got scared, came into this store.",
              standard: "Yes, I observed a man in a dark jacket following me from the subway station—approximately six blocks. He maintained the same distance behind me, and when I crossed the street, he also crossed. I became frightened and entered this store.",
              formal: "Affirmative, I observed an individual attired in a dark jacket who appeared to be following me from the subway station—for a duration of approximately six blocks. He consistently maintained an equidistant position behind me, and when I traversed the street, he similarly proceeded across. I became alarmed and sought refuge within this establishment.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "You did the right thing by going into a public place. We'll check the area. Can you describe the person more — height, approximate age, any distinguishing features? And I'll need your name and contact information for the report.",
            textZh:
              "你走进公共场所是正确的做法。我们会检查这一带。能更详细地描述一下那个人吗——身高、大概年龄、有什么特征？我还需要你的姓名和联系方式做报告。",
            casualVersion: "You totally did the right thing by coming into a public place. We'll check around here. Can you tell us more about the person—like height, age, any distinguishing features? Also need your name and contact for the report.",
            commonMistake: {
              wrong: "You do right thing go into public place.",
              correct: "You did the right thing by going into a public place.",
              explanation: "\"did the right thing\" 是固定搭配，\"by going\" 表示通过什么方式。",
            },
            formalityVariants: {
              casual: "Right move, coming into a public place. We'll check the area. Can you give more details about the person—height, age, features? Also need your name and contact for the report.",
              standard: "You acted appropriately by seeking refuge in a public place. We will conduct a thorough check of this area. Could you please provide a more detailed description of the individual—including height, approximate age, and any distinguishing features? I will also require your name and contact information for the official report.",
              formal: "Your actions in entering a public establishment were entirely commendable. We shall proceed with a comprehensive investigation of this vicinity. Would you be so kind as to furnish a more elaborate description of the individual, encompassing their stature, approximate age, and any identifiable characteristics? Additionally, I will require your full name and contact details for the official incident report.",
            },
            keyPhrases: [
              { en: "the right thing", zh: "正确的做法" },
              { en: "approximate age", zh: "大概年龄" },
              { en: "distinguishing features", zh: "显著特征" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Smart move coming in here. We'll sweep the area. Can you give me a better description — height, age, anything else you noticed? And I'll need your info for the report.",
                textZh:
                  "进来店里是正确的。我们会巡查这一带。能更详细描述一下吗——身高、年龄、其他注意到的？我还需要你的信息做报告。",
                actionHint: "尽量回忆细节",
                frequency: "common",
              },
              {
                textEn:
                  "Going into a store was the right call. My partner's checking the block now. Tell me more about this person — build, age, clothing? I'll also need your name and a way to contact you.",
                textZh:
                  "走进店里是明智的。我搭档正在巡查街区。跟我多说说这个人——体型、年龄、穿着？我还需要你的姓名和联系方式。",
                actionHint: "提供所有能记起的特征",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "He's about 5 foot 10, maybe in his 30s, wearing a dark jacket and jeans. He had a beard. Here's my hotel information and phone number.",
            textZh: "他大概5英尺10（178cm），三十多岁，穿深色夹克和牛仔裤。有胡子。这是我的酒店信息和电话号码。",
            casualVersion: "He's like 5'10, in his 30s, dark jacket and jeans. Got a beard. Here's my hotel info and number.",
            commonMistake: {
              wrong: "He is 5 feet 10, thirty years old.",
              correct: "He's about 5 foot 10 (178cm), in his thirties.",
              explanation: "\"in his thirties\" 表示30多岁，更自然地描述年龄段。",
            },
            formalityVariants: {
              casual: "He's about 5'10, in his 30s, dark jacket, jeans. Has a beard. Here's my hotel info and phone number.",
              standard: "He is approximately 5 feet 10 inches tall (178cm), appears to be in his thirties, and was wearing a dark jacket and jeans. He has a beard. Here is my hotel information and phone number.",
              formal: "He is approximately 178 centimeters (5 feet 10 inches) in height, appears to be in his mid-thirties, and was observed wearing a dark jacket and denim trousers. He possesses a beard. I can provide my hotel details and contact number here.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Thank you. My partner is checking the area now. We'll walk you back to your hotel to make sure you get there safely. For the future — avoid walking alone in unfamiliar areas after dark, keep to well-lit main streets, and share your live location with someone you trust. If you feel threatened again, call 911 immediately.",
            textZh:
              "谢谢。我的搭档正在巡查这一带。我们送你回酒店确保你安全到达。以后注意——天黑后别在不熟悉的地方独自走，走有路灯的大路，把实时位置分享给你信任的人。如果再感到威胁，立刻打911。",
            casualVersion: "Thanks. My partner's checking the area now. We'll take you back to your hotel, make sure you get there safe. For the future, be careful—don't walk alone in new areas after dark, stay on main roads with lights, and share your live location with people you trust. If you ever feel threatened again, call 911 right away.",
            culturalNote: "美国警察在职责范围内会提供护送和安全建议，很常见。",
            commonMistake: {
              wrong: "We take you back hotel.",
              correct: "We'll escort you back to your hotel to ensure you arrive safely.",
              explanation: "\"take you back to your hotel\" 更地道，完整表达目的。",
            },
            formalityVariants: {
              casual: "Thanks. Partner's checking the area. We'll take you back to your hotel, make sure you're safe. Future: be careful—no walking alone in new areas after dark, stick to lit main roads, share live location. Feel threatened again, call 911.",
              standard: "Thank you. My partner is currently investigating the area. We will escort you back to your hotel to ensure your safe arrival. For future reference, please exercise caution—avoid walking alone in unfamiliar areas after nightfall, adhere to well-lit main thoroughfares, and share your real-time location with trusted individuals. Should you ever feel threatened again, contact 911 immediately.",
              formal: "We appreciate your cooperation. My colleague is presently conducting a search of the immediate vicinity. We shall personally escort you to your hotel to guarantee your secure return. Moving forward, I urge you to remain vigilant—refrain from solitary pedestrian travel in unfamiliar districts after dusk, prioritize brightly illuminated primary routes, and enable real-time location sharing with designated contacts. In the event of any future perceived threat, dial 911 without hesitation.",
            },
            keyPhrases: [
              { en: "my partner", zh: "我的搭档" },
              { en: "well-lit main streets", zh: "有路灯的大路" },
              { en: "live location", zh: "实时位置" },
              { en: "feel threatened", zh: "感到威胁" },
            ],
            vocabNotes: {
              "well-lit": {
                meaningInContext: "在这句话里表示：光线充足的、有路灯照明的",
                similarUsage: "类似用法：Park in a well-lit area at night.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for the details. My partner's on it. We'll walk you to your hotel to make sure you're safe. Going forward — avoid dark streets alone, stick to main roads, and share your location with someone. Call 911 if anything feels off.",
                textZh:
                  "谢谢提供信息。我搭档在处理了。我们送你回酒店确保安全。以后注意——不要一个人走暗街，走大路，把位置分享给信任的人。觉得不对就打911。",
                actionHint: "记住安全建议",
                frequency: "common",
              },
              {
                textEn:
                  "Good description. My partner is checking the area. Let's get you back to your hotel safely. Some advice: stay on well-lit streets, don't walk alone after dark, and always share your live location.",
                textZh:
                  "描述得很好。我搭档在巡查了。我们护送你安全回酒店。一些建议：走有灯的街，天黑后不要一个人走，随时分享实时位置。",
                actionHint: "让人知道你的位置",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 街头骚扰应对 ---
      {
        id: "street-harassment",
        titleZh: "街头骚扰",
        titleEn: "Dealing with Street Harassment",
        description: "在街上遇到言语骚扰或强行搭讪",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "骚扰者",
            textEn: "Hey, where are you from? You look lost. Come with me, I'll show you around.",
            textZh: "嘿，你从哪里来？你看起来迷路了。跟我来，我带你逛逛。",
            commonMistake: {
              wrong: "You look lose.",
              correct: "You look lost.",
              explanation: "\"lost\" 是迷路的意思，\"lose\" 是失去。",
            },
            responseTip: "面对陌生人过于热情的搭讪，保持警惕。不需要回应，直接走开是最安全的做法。",
            alternativeExpressions: [
              {
                textEn: "Hey beautiful, you a tourist? Need some help? I know all the best spots around here.",
                textZh: "嘿美女，你是游客？需要帮忙吗？我知道这附近所有好去处。",
                actionHint: "不要回应直接走开",
                frequency: "common",
              },
              {
                textEn: "Yo, where you headed? You look like you need a guide. Lemme show you around, it's free!",
                textZh: "嘿，你去哪？看起来你需要个导游。我带你逛逛，免费的！",
                actionHint: "无视对方继续走",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, where you from? You look lost. C'mon, I'll show ya around.",
            culturalNote: "初次见面问“你从哪来”可能不礼貌",
            formalityVariants: {
              casual: "Hey, where you from? You look lost. C'mon, I'll show ya around.",
              standard: "Hey, where are you from? You look lost. Come with me, I'll show you around.",
              formal: "Excuse me, where are you from? You appear lost. Might I offer to show you around?",
            },
          },
          {
            speaker: "you",
            textEn: "No thanks, I'm fine.",
            textZh: "不用了，我没事。",
            commonMistake: {
              wrong: "No thank, I am fine.",
              correct: "No thanks, I'm fine.",
              explanation: "\"thanks\" 需要加s，\"I'm fine\" 是更自然的口语表达。",
            },
            culturalNote: "简短明确地拒绝即可。不需要解释原因或道歉。如果对方继续纠缠，不要犹豫直接走向人多的地方。",
            casualVersion: "Nah, I'm good.",
            formalityVariants: {
              casual: "Nah, I'm good.",
              standard: "No thanks, I'm fine.",
              formal: "Thank you for the offer, but I am quite alright.",
            },
          },
          {
            speaker: "them",
            role: "骚扰者",
            textEn: "Come on, don't be like that. I'm just being friendly. Let me buy you a drink.",
            textZh: "别这样嘛。我只是友好而已。我请你喝一杯。",
            commonMistake: {
              wrong: "I am just friendly.",
              correct: "I'm just being friendly.",
              explanation: "\"being friendly\" 强调正在表现出的行为或态度。",
            },
            keyPhrases: [
              { en: "don't be like that", zh: "别这样" },
              { en: "just being friendly", zh: "只是友好而已" },
            ],
            culturalMeaning:
              '"I\'m just being friendly" 是骚扰者常用的话术，试图让你觉得是自己反应过度。不要因此感到内疚，你的安全感受最重要。',
            alternativeExpressions: [
              {
                textEn: "Why are you being so rude? I'm trying to be nice. Just one drink, what's the harm?",
                textZh: "你怎么这么不友好？我就是想好好聊聊。就喝一杯，有什么关系？",
                actionHint: "坚定拒绝不要内疚",
                frequency: "common",
              },
              {
                textEn: "Relax, I'm not gonna hurt you. I'm just making conversation. What's wrong with that?",
                textZh: "放松嘛，我不会伤害你的。我只是在聊天。这有什么错？",
                actionHint: "这是常见话术不要动摇",
                frequency: "common",
              },
              {
                textEn: "Aw come on, don't be like that. I was just trying to help you out.",
                textZh: "哎别这样嘛，我只是想帮你忙。",
                actionHint: "不需要解释直接离开",
                frequency: "occasional",
              },
            ],
            casualVersion: "C'mon, don't be like that. I'm just being friendly. Lemme buy ya a drink.",
            culturalNote: "陌生人请喝酒，可能带有非友好意图",
            formalityVariants: {
              casual: "C'mon, don't be like that. I'm just being friendly. Lemme buy ya a drink.",
              standard: "Come on, don't be like that. I'm just being friendly. Let me buy you a drink.",
              formal:
                "Please, do not misunderstand my intentions. I am merely attempting to be cordial. Might I offer to purchase you a beverage?",
            },
          },
          {
            speaker: "you",
            textEn: "I said no. Please leave me alone.",
            textZh: "我说了不用。请别烦我。",
            casualVersion: "I said no. Leave me alone.",
            commonMistake: {
              wrong: "I said no. Please don't disturb me.",
              correct: "I said no. Please leave me alone.",
              explanation: '"Don\'t disturb me" 不够强烈，用 "leave me alone" 更直接表达“别烦我”。',
            },
            formalityVariants: {
              casual: "I said no. Leave me alone.",
              standard: "I said no. Please leave me alone.",
              formal: "I have already declined. I respectfully request that you cease bothering me.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Hey, is everything okay here? Are you alright?",
            textZh: "嘿，这边没事吧？你还好吗？",
            culturalNote: "在公共场合发现有人被骚扰或有危险，主动询问并提供帮助是美国社会常见行为。",
            commonMistake: {
              wrong: "Is everything OK?",
              correct: "Is everything okay here?",
              explanation: "\"here\" 让询问更具体，表达关心。",
            },
            keyPhrases: [
              { en: "is everything okay", zh: "没事吧" },
              { en: "are you alright", zh: "你还好吗" },
            ],
            alternativeExpressions: [
              {
                textEn: "Excuse me — is this person bothering you? I can walk with you if you'd like.",
                textZh: "打扰一下——这个人在骚扰你吗？如果你愿意我可以陪你走。",
                actionHint: "接受路人的帮助",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, everything okay here? You alright?",
            formalityVariants: {
              casual: "Hey, everything okay here? You alright?",
              standard: "Hey, is everything okay here? Are you alright?",
              formal:
                "Excuse me, I couldn't help but notice the situation. Is everything satisfactory here, and are you feeling alright?",
            },
          },
          {
            speaker: "you",
            textEn:
              "This person won't leave me alone. Could you walk with me to the main street? I'd really appreciate it.",
            textZh: "这个人一直缠着我。你能陪我走到大路上吗？真的很感谢。",
            casualVersion:
              "This person won't leave me alone. Could you walk with me to the main street? That'd be great.",
            commonMistake: {
              wrong: "This person doesn't leave me alone.",
              correct: "This person won't leave me alone.",
              explanation: '"won\'t" 表示对方拒绝停止某行为，更准确表达纠缠。',
            },
            formalityVariants: {
              casual: "This person won't leave me alone. Could you walk with me to the main street? That'd be great.",
              standard:
                "This person won't leave me alone. Could you walk with me to the main street? I'd really appreciate it.",
              formal:
                "This individual is persistently bothering me. Would you be so kind as to accompany me to the main street? Your assistance would be greatly valued.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Absolutely. Hey buddy, she asked you to leave her alone. Back off. Come on, let's go — my car is on the main street. I'll make sure you get to where you need to go safely.",
            textZh: "当然。嘿哥们，她叫你别烦她了。退后。来，我们走——我的车在大路上。我确保你安全到达目的地。",
            commonMistake: {
              wrong: "She ask you leave her alone.",
              correct: "She asked you to leave her alone.",
              explanation: "\"asked you to\" 是请求的正确结构。",
            },
            keyPhrases: [
              { en: "back off", zh: "退后/离远点" },
              { en: "get to where you need to go", zh: "安全到达目的地" },
            ],
            vocabNotes: {
              "back off": {
                meaningInContext: "在这句话里表示：走开、退后，是比较强硬的警告用语",
                similarUsage: "类似用法：Back off, you're too close.",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Of course. Hey man, she said no. Walk away. Come on, let's go — I'll make sure you get to safety.",
                textZh: "当然。嘿哥们，她说了不用。走开。走吧——我确保你安全。",
                actionHint: "跟着帮助你的人走",
                frequency: "common",
              },
              {
                textEn:
                  "I'm right here. Back off, dude — she doesn't want to talk to you. Let's go, I'll walk you to the main road.",
                textZh: "我在这。退后，兄弟——她不想跟你说话。我们走，我陪你到大路上。",
                actionHint: "接受好心人的帮助",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally. Hey buddy, she told ya to leave her alone. Back off. C'mon, let's go — my car's on the main street. I'll make sure you get where you need to go safe.",
            culturalNote: "面对骚扰者，直言不讳和强硬的态度是常见且必要的。",
            formalityVariants: {
              casual:
                "Totally. Hey buddy, she told ya to leave her alone. Back off. C'mon, let's go — my car's on the main street. I'll make sure you get where you need to go safe.",
              standard:
                "Absolutely. Hey buddy, she asked you to leave her alone. Back off. Come on, let's go — my car is on the main street. I'll make sure you get to where you need to go safely.",
              formal:
                "Indeed. Sir, this woman has requested that you desist from bothering her. I insist you remove yourself. Let us proceed — my vehicle is located on the main street, and I will ensure your safe transport to your desired destination.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you so much. I didn't know how to handle that situation. Does this happen a lot around here?",
            textZh: "太感谢了。我不知道怎么应对这种情况。这附近经常发生这种事吗？",
            casualVersion: "Thanks so much. Had no idea how to handle that. Does this happen a lot 'round here?",
            commonMistake: {
              wrong: "I didn't know how to deal with that situation.",
              correct: "I didn't know how to handle that situation.",
              explanation: '"handle" 更常用于处理困难或尴尬的局面，比 "deal with" 更贴切。',
            },
            formalityVariants: {
              casual: "Thanks so much. Had no idea how to handle that. Does this happen a lot 'round here?",
              standard:
                "Thank you so much. I didn't know how to handle that situation. Does this happen a lot around here?",
              formal:
                "I am profoundly grateful for your assistance. I was quite uncertain as to how to appropriately manage that predicament. Is such behavior a frequent occurrence in this vicinity?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Unfortunately, it can happen in touristy areas. Here are some tips: always be aware of your surroundings, walk confidently even if you're lost, and don't engage with people who make you uncomfortable. If someone touches you or blocks your path, shout loudly — that usually scares them off. And don't hesitate to call 911.",
            textZh:
              "不幸的是，在旅游区可能会发生。给你几个建议：时刻注意周围环境，即使迷路了也要走得自信，不要和让你不舒服的人搭话。如果有人碰你或挡路，大声喊叫——通常能把他们吓走。别犹豫打911。",
            commonMistake: {
              wrong: "Always aware of your surroundings.",
              correct: "always be aware of your surroundings",
              explanation: "祈使句需要动词原形 \"be\"。",
            },
            keyPhrases: [
              { en: "be aware of your surroundings", zh: "注意周围环境" },
              { en: "walk confidently", zh: "走得自信" },
              { en: "don't engage with", zh: "不要搭话/不要互动" },
              { en: "scares them off", zh: "把他们吓走" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It happens more than you'd think in tourist spots. Stay aware of who's around you, walk like you own the place even if you're lost, and don't engage with anyone making you uncomfortable. Yell if someone gets physical. And 911 is always an option.",
                textZh:
                  "在旅游区比你想象的更常发生。注意周围的人，即使迷路了也要走得自信，不要理会让你不舒服的人。有人动手就大声喊。911随时可以打。",
                actionHint: "记住这些防身技巧",
                frequency: "common",
              },
              {
                textEn:
                  "Sadly yeah, tourist areas can attract creeps. My advice: look confident, don't stop for strangers, and shout loudly if someone grabs you. That usually makes them bolt.",
                textZh:
                  "可惜是的，旅游区容易有骚扰者。我的建议：看起来自信，不要为陌生人停下来，有人抓你就大声喊。通常能把他们吓跑。",
                actionHint: "自信是最好的防护",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, sadly, it can happen in touristy spots. Some tips: always be aware of your surroundings, walk confidently even if you're lost, and don't engage with anyone who makes you uncomfortable. If someone touches you or blocks your path, shout loud — that usually scares 'em off. And don't hesitate to call 911.",
            culturalNote: "遇到危险时，大声呼救和拨打911求助警察是关键。",
            formalityVariants: {
              casual:
                "Yeah, sadly, it can happen in touristy spots. Some tips: always be aware of your surroundings, walk confidently even if you're lost, and don't engage with anyone who makes you uncomfortable. If someone touches you or blocks your path, shout loud — that usually scares 'em off. And don't hesitate to call 911.",
              standard:
                "Unfortunately, it can happen in touristy areas. Here are some tips: always be aware of your surroundings, walk confidently even if you're lost, and don't engage with people who make you uncomfortable. If someone touches you or blocks your path, shout loudly — that usually scares them off. And don't hesitate to call 911.",
              formal:
                "Regrettably, such incidents are not uncommon in areas frequented by tourists. Permit me to offer some guidance: always maintain vigilance regarding your immediate environment, project an air of confidence even if disoriented, and refrain from interacting with individuals who cause you discomfort. Should you be physically accosted or have your path obstructed, a loud vocalization is often effective in deterring aggressors. Furthermore, do not hesitate to contact emergency services by dialing 911.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll remember that. You're very kind for helping me. Can I at least know your name?",
            textZh: "我会记住的。你帮了我真是太好了。能告诉我你的名字吗？",
            casualVersion: "I'll remember that. You're super kind for helping me. Can I at least get your name?",
            commonMistake: {
              wrong: "Can I know your name?",
              correct: "Can I at least know your name?",
              explanation: '"Can I know your name" 在这种语境下略显直接，加 "at least" 更委婉自然。',
            },
            formalityVariants: {
              casual: "I'll remember that. You're super kind for helping me. Can I at least get your name?",
              standard: "I'll remember that. You're very kind for helping me. Can I at least know your name?",
              formal:
                "I shall certainly bear that in mind. Your benevolence in assisting me is deeply appreciated. Might I, at the very least, inquire as to your name?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "I'm Jessica. No need to thank me — I'd want someone to do the same for me. Here, take this — it's a personal safety alarm. You pull the pin and it makes a really loud noise. Keep it on your keychain. Stay safe out there!",
            textZh:
              "我叫 Jessica。不用谢——换成是我也希望有人这样帮我。给你这个——是个人安全报警器。拉开别针会发出很大的声音。挂在钥匙链上。外出注意安全！",
            culturalNote: "赠送个人安全用品是很友善的举动，代表真诚的关心。",
            commonMistake: {
              wrong: "You're welcome—I hope someone do same for me.",
              correct: "You're welcome—I'd hope someone would do the same for me.",
              explanation: "\"I'd hope someone would\" 是完整的条件句，表达期望。",
            },
            keyPhrases: [
              { en: "personal safety alarm", zh: "个人安全报警器" },
              { en: "pull the pin", zh: "拉开别针" },
              { en: "keychain", zh: "钥匙链" },
              { en: "stay safe", zh: "注意安全" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm Jessica. You'd do the same, right? Here, take this personal alarm — pull the pin and it makes a crazy loud noise. Clip it to your keys. Be safe!",
                textZh:
                  "我叫Jessica。换了你也会这样做的对吧？拿着这个个人报警器——拉开别针会发出超大的声音。挂钥匙上。注意安全！",
                actionHint: "随身携带防身物品",
                frequency: "common",
              },
              {
                textEn:
                  "Jessica. Don't mention it — we've all gotta look out for each other. Take this safety alarm, just in case. Stay safe out there!",
                textZh: "Jessica。别客气——大家都要互相照应。拿着这个安全警报器，以防万一。出门注意安全！",
                actionHint: "感谢并记住善意",
                frequency: "common",
              },
            ],
            casualVersion:
              "I'm Jessica. No problem — I'd want someone to do the same for me. Here, take this — it's a personal safety alarm. Pull the pin, and it makes a super loud noise. Keep it on your keychain. Stay safe out there!",
            formalityVariants: {
              casual:
                "I'm Jessica. No problem — I'd want someone to do the same for me. Here, take this — it's a personal safety alarm. Pull the pin, and it makes a super loud noise. Keep it on your keychain. Stay safe out there!",
              standard:
                "I'm Jessica. No need to thank me — I'd want someone to do the same for me. Here, take this — it's a personal safety alarm. You pull the pin and it makes a really loud noise. Keep it on your keychain. Stay safe out there!",
              formal:
                "My name is Jessica. There is no necessity for thanks; I would wish for similar assistance should I find myself in a comparable predicament. Please accept this personal safety alarm. Activating it by pulling the pin will emit a very loud sound. I recommend attaching it to your keychain. Please remain vigilant and safe during your travels.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 火灾报警 ====================
  {
    id: "emergency-911-fire",
    category: "emergency",
    titleZh: "火灾报警",
    titleEn: "Calling 911 for Fire",
    description: "发现火灾时拨打 911 报警，说明地址、被困人员和火势情况",
    otherRole: "911 接线员",
    otherRoleIcon: "flame",
    flows: [
      // --- Flow 1: 基础火灾报警 ---
      {
        id: "fire-basic",
        titleZh: "住宅火灾",
        titleEn: "Residential Fire",
        description: "发现住宅起火，拨打 911 报告火情",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "911, what's your emergency?",
            textZh: "911，请问什么紧急情况？",
            keyPhrases: [
              { en: "what's your emergency", zh: "什么紧急情况" },
              { en: "911", zh: "911 紧急电话" },
            ],
            alternativeExpressions: [
              {
                textEn: "911 emergency, what are you reporting?",
                textZh: "911 紧急服务，您要报告什么？",
                actionHint: "说明紧急情况类型",
                frequency: "common",
              },
            ],
            casualVersion: "911, what's going on?",
            formalityVariants: {
              casual: "911, what's going on?",
              standard: "911, what's your emergency?",
              formal: "911 Emergency Services, how may I assist you?",
            },
          },
          {
            speaker: "you",
            textEn: "There's a fire in my building! I can see smoke coming from the apartment next door.",
            textZh: "我的楼里着火了！我能看到隔壁公寓冒烟。",
            culturalNote: "在美国拨打 911 是免费的，接线员会同时调度消防、警察和急救。中国游客不熟悉这个统一号码。",
            casualVersion: "There's a fire! Smoke's coming from the apartment next to mine!",
            commonMistake: {
              wrong: "My building is on fire! Fire is very big!",
              correct: "There's a fire in my building! I can see smoke coming from next door.",
              explanation: "报警时要冷静描述看到的具体情况（烟/火），而不是用\u201Cvery big\u201D这样模糊的形容。",
            },
            formalityVariants: {
              casual: "Fire! Smoke's pouring out of the apartment next to mine!",
              standard: "There's a fire in my building! I can see smoke coming from the apartment next door.",
              formal: "I'd like to report a fire in my residential building. I can observe smoke emanating from the adjacent apartment.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "What is your address? I'm dispatching the fire department now.",
            textZh: "您的地址是什么？我现在就派消防队过去。",
            keyPhrases: [
              { en: "what is your address", zh: "您的地址是什么" },
              { en: "dispatching", zh: "派遣" },
            ],
            alternativeExpressions: [
              {
                textEn: "I need your exact location. Fire trucks are being sent right now.",
                textZh: "我需要您的确切位置。消防车正在赶来。",
                actionHint: "提供准确地址",
                frequency: "common",
              },
            ],
            casualVersion: "What's the address? I'm sending fire trucks now.",
            formalityVariants: {
              casual: "Where are you? Sending fire trucks now.",
              standard: "What is your address? I'm dispatching the fire department now.",
              formal: "Could you please provide your complete address? I am dispatching fire services to your location immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm at 425 Oak Street, Apartment 3B. It's a four-story building.",
            textZh: "我在橡树街 425 号，3B 公寓。这是一栋四层楼。",
            culturalNote: "美国地址格式是\u201C门牌号 + 街名\u201D，和中文\u201C大到小\u201D顺序相反。提前记住住处地址很重要。",
            casualVersion: "425 Oak Street, Apartment 3B. Four-story building.",
            commonMistake: {
              wrong: "I live in Oak Street number 425.",
              correct: "I'm at 425 Oak Street, Apartment 3B.",
              explanation: "英文地址把门牌号放在街名前面：425 Oak Street，不是 Oak Street number 425。",
            },
            formalityVariants: {
              casual: "425 Oak, Apartment 3B. It's four stories.",
              standard: "I'm at 425 Oak Street, Apartment 3B. It's a four-story building.",
              formal: "My location is 425 Oak Street, Apartment 3B. The building is a four-story residential structure.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Is anyone trapped in the building? Are you in a safe location?",
            textZh: "楼里有没有人被困？您在安全的地方吗？",
            keyPhrases: [
              { en: "anyone trapped", zh: "有人被困" },
              { en: "safe location", zh: "安全的地方" },
            ],
            alternativeExpressions: [
              {
                textEn: "Do you know if there are people still inside? Have you gotten out?",
                textZh: "你知道里面还有人吗？你出来了吗？",
                actionHint: "确认自身安全状态",
                frequency: "common",
              },
            ],
            casualVersion: "Anyone stuck in there? Are you safe?",
            formalityVariants: {
              casual: "Anyone stuck inside? You safe?",
              standard: "Is anyone trapped in the building? Are you in a safe location?",
              formal: "Are there any individuals who may be trapped within the building? Have you evacuated to a safe location?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm outside now. I think my neighbor might still be inside — I knocked but got no answer.",
            textZh: "我已经在外面了。我的邻居可能还在里面——我敲了门但没人应。",
            culturalNote: "逃生时不要乘电梯，走楼梯。到了安全地方再打 911，不要返回建筑物。",
            casualVersion: "I got out. But my neighbor might still be in there — I knocked, no answer.",
            commonMistake: {
              wrong: "I already go outside. My neighbor maybe still inside.",
              correct: "I'm outside now. My neighbor might still be inside.",
              explanation: "描述当前状态用 I'm outside now；推测用 might still be inside，不用 maybe still inside。",
            },
            formalityVariants: {
              casual: "I'm out. My neighbor might still be in there though — no one answered when I knocked.",
              standard: "I'm outside now. I think my neighbor might still be inside — I knocked but got no answer.",
              formal: "I have evacuated the building. However, I believe my neighbor may still be inside. I attempted to alert them by knocking, but received no response.",
            },
          },
        ],
      },
      // --- Flow 2: 中级火灾报警 ---
      {
        id: "fire-intermediate",
        titleZh: "商业场所火灾",
        titleEn: "Commercial Building Fire",
        description: "在商场或办公楼发现火灾，需要详细描述火势和人员情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I need to report a fire at the Westfield Mall on 5th Avenue. There are flames on the second floor near the food court.",
            textZh: "我要报告第五大道 Westfield 商场的火灾。二楼美食广场附近有明火。",
            culturalNote: "美国的\u201Cfirst floor\u201D就是地面层，和中国的\u201C一楼\u201D一样。但英国的\u201Cfirst floor\u201D是中国的二楼。",
            casualVersion: "There's a fire at Westfield Mall on 5th Ave! Flames on the second floor by the food court!",
            commonMistake: {
              wrong: "The mall is fire! Second floor food place is burning!",
              correct: "There's a fire at the Westfield Mall. There are flames on the second floor near the food court.",
              explanation: "不能说 the mall is fire，要说 there's a fire at the mall。fire 是名词，不能直接做形容词。",
            },
            formalityVariants: {
              casual: "Fire at Westfield Mall, 5th Ave! Flames by the food court, second floor!",
              standard: "I need to report a fire at the Westfield Mall on 5th Avenue. There are flames on the second floor near the food court.",
              formal: "I wish to report a fire at the Westfield Mall, located on 5th Avenue. I can observe active flames on the second floor in the vicinity of the food court.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Can you tell me what kind of fire it is? Is it electrical, or do you see open flames spreading?",
            textZh: "能告诉我是什么类型的火吗？是电气火灾，还是明火在蔓延？",
            keyPhrases: [
              { en: "what kind of fire", zh: "什么类型的火" },
              { en: "open flames spreading", zh: "明火在蔓延" },
            ],
            alternativeExpressions: [
              {
                textEn: "Do you know what's burning? Can you tell if it's a grease fire or something electrical?",
                textZh: "你知道什么在烧吗？能看出是油火还是电气火灾吗？",
                actionHint: "描述火源类型",
                frequency: "common",
              },
            ],
            casualVersion: "What's burning? Is it electrical, or are you seeing actual flames?",
            formalityVariants: {
              casual: "What kind of fire is it? Electrical? Open flames?",
              standard: "Can you tell me what kind of fire it is? Is it electrical, or do you see open flames spreading?",
              formal: "Could you describe the nature of the fire? Is it an electrical fire, or are there open flames that appear to be spreading?",
            },
          },
          {
            speaker: "you",
            textEn: "It looks like it started in one of the restaurants — I can see open flames and a lot of black smoke. It's spreading fast.",
            textZh: "看起来是从一家餐厅开始的——我能看到明火和很多黑烟。蔓延得很快。",
            culturalNote: "黑烟通常意味着有塑料或油脂在燃烧，比白烟危险。看到黑烟要立即远离。",
            casualVersion: "Looks like it started in a restaurant. Open flames, tons of black smoke, spreading quick.",
            commonMistake: {
              wrong: "Fire is very big smoke. It becomes more and more.",
              correct: "I can see open flames and a lot of black smoke. It's spreading fast.",
              explanation: "描述火势用 open flames（明火）和 spreading fast（蔓延快），不要用 very big smoke 这样不自然的表达。",
            },
            formalityVariants: {
              casual: "Started in a restaurant I think. Flames, black smoke everywhere, spreading quick.",
              standard: "It looks like it started in one of the restaurants — I can see open flames and a lot of black smoke. It's spreading fast.",
              formal: "The fire appears to have originated from one of the restaurant establishments. I can observe open flames accompanied by significant black smoke. The fire is spreading rapidly.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "How many people are in the building? Is the evacuation in progress?",
            textZh: "楼里有多少人？正在疏散吗？",
            keyPhrases: [
              { en: "how many people", zh: "多少人" },
              { en: "evacuation in progress", zh: "正在疏散" },
            ],
            alternativeExpressions: [
              {
                textEn: "Are people getting out? How crowded is the mall right now?",
                textZh: "人们在撤离吗？商场现在人多吗？",
                actionHint: "描述人员疏散情况",
                frequency: "common",
              },
            ],
            casualVersion: "How many people in there? Are they getting out?",
            formalityVariants: {
              casual: "How many people are in there? They evacuating?",
              standard: "How many people are in the building? Is the evacuation in progress?",
              formal: "Could you estimate the number of occupants currently in the building? Has an evacuation been initiated?",
            },
          },
          {
            speaker: "you",
            textEn: "The fire alarm went off and people are heading toward the exits. There are probably a hundred people still inside.",
            textZh: "火灾报警器响了，人们正在往出口走。里面可能还有一百人左右。",
            culturalNote: "在美国，大型商场都有火灾报警系统和标注的紧急出口（EXIT），跟着 EXIT 标志走就行。",
            casualVersion: "Alarm's going off, people are heading for the exits. Maybe a hundred people still in there.",
            commonMistake: {
              wrong: "Fire bell is ringing. Maybe hundred person inside.",
              correct: "The fire alarm went off. There are probably a hundred people still inside.",
              explanation: "火灾报警器叫 fire alarm，不叫 fire bell。went off 表示\u201C响了\u201D。people 不用加 s。",
            },
            formalityVariants: {
              casual: "Alarm went off. People are heading out. Maybe a hundred still in there.",
              standard: "The fire alarm went off and people are heading toward the exits. There are probably a hundred people still inside.",
              formal: "The fire alarm has been activated and occupants are proceeding toward the exits. I estimate approximately one hundred people may still be inside the building.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Stay clear of the building and help direct people away from the entrance. Fire trucks are three minutes out.",
            textZh: "远离建筑物，帮忙引导人们离开入口。消防车三分钟后到。",
            keyPhrases: [
              { en: "stay clear of", zh: "远离" },
              { en: "three minutes out", zh: "三分钟后到" },
            ],
            alternativeExpressions: [
              {
                textEn: "Don't go back inside. Keep people moving away from the building. Help is almost there.",
                textZh: "不要返回里面。让人们远离建筑物。救援马上到。",
                actionHint: "保持安全距离",
                frequency: "common",
              },
            ],
            casualVersion: "Stay away from the building. Help people move back. Trucks are almost there.",
            formalityVariants: {
              casual: "Stay back, keep people away from the doors. Fire trucks are almost there.",
              standard: "Stay clear of the building and help direct people away from the entrance. Fire trucks are three minutes out.",
              formal: "Please maintain a safe distance from the building and assist in directing individuals away from the entrance. Fire services will arrive in approximately three minutes.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 医疗急救电话 ====================
  {
    id: "emergency-911-medical",
    category: "emergency",
    titleZh: "医疗急救电话",
    titleEn: "Calling 911 for Medical Emergency",
    description: "遇到医疗紧急情况拨打 911，描述症状、提供地址并配合调度员指导",
    otherRole: "911 接线员",
    otherRoleIcon: "heart-pulse",
    flows: [
      // --- Flow 1: 基础医疗急救 ---
      {
        id: "medical-basic",
        titleZh: "有人晕倒",
        titleEn: "Someone Collapsed",
        description: "路人晕倒在地，拨打 911 请求急救",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I need an ambulance! Someone just collapsed on the sidewalk and they're not responding.",
            textZh: "我需要救护车！有人刚在人行道上晕倒了，没有反应。",
            culturalNote: "在美国看到有人倒地，先打 911 再施救。Good Samaritan 法律保护善意施救者不被追责。",
            casualVersion: "I need an ambulance! Someone just dropped on the sidewalk and they're not waking up!",
            commonMistake: {
              wrong: "Please send doctor! One person fainted on road!",
              correct: "I need an ambulance! Someone just collapsed on the sidewalk.",
              explanation: "紧急情况要说 I need an ambulance，不是 send doctor。人行道是 sidewalk，不是 road。",
            },
            formalityVariants: {
              casual: "Ambulance! Someone just collapsed on the sidewalk! They're not responding!",
              standard: "I need an ambulance! Someone just collapsed on the sidewalk and they're not responding.",
              formal: "I require immediate medical assistance. An individual has collapsed on the sidewalk and is unresponsive.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "I'm sending an ambulance. What is your exact location?",
            textZh: "我正在派救护车。您的确切位置是什么？",
            keyPhrases: [
              { en: "sending an ambulance", zh: "派救护车" },
              { en: "exact location", zh: "确切位置" },
            ],
            alternativeExpressions: [
              {
                textEn: "Help is on the way. Where exactly are you right now?",
                textZh: "救援正在来的路上。你现在确切在哪？",
                actionHint: "提供精确位置",
                frequency: "common",
              },
            ],
            casualVersion: "Ambulance is on the way. Where are you exactly?",
            formalityVariants: {
              casual: "Ambulance is coming. Where are you?",
              standard: "I'm sending an ambulance. What is your exact location?",
              formal: "An ambulance has been dispatched. Could you please provide your precise location?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm at the corner of Main Street and 3rd Avenue, right in front of the CVS pharmacy.",
            textZh: "我在 Main Street 和第三大道的路口，就在 CVS 药店门前。",
            culturalNote: "美国报位置常用\u201C两条街的交叉口 + 附近地标\u201D的方式，比门牌号更方便急救人员找到。",
            casualVersion: "Corner of Main and 3rd, right by the CVS.",
            commonMistake: {
              wrong: "I am in the cross of Main Street and 3rd Avenue.",
              correct: "I'm at the corner of Main Street and 3rd Avenue.",
              explanation: "路口用 at the corner of ... and ...，不用 in the cross of。",
            },
            formalityVariants: {
              casual: "Main and 3rd, in front of CVS.",
              standard: "I'm at the corner of Main Street and 3rd Avenue, right in front of the CVS pharmacy.",
              formal: "My location is at the intersection of Main Street and 3rd Avenue, directly in front of the CVS pharmacy.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Is the person breathing? Can you check for a pulse?",
            textZh: "这个人还在呼吸吗？你能摸一下脉搏吗？",
            keyPhrases: [
              { en: "breathing", zh: "呼吸" },
              { en: "check for a pulse", zh: "摸脉搏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Can you tell if they're still breathing? Put two fingers on their neck and see if you feel a pulse.",
                textZh: "你能看出他们还在呼吸吗？把两根手指放在他们脖子上看有没有脉搏。",
                actionHint: "检查生命体征",
                frequency: "common",
              },
            ],
            casualVersion: "Are they breathing? Can you feel a pulse?",
            formalityVariants: {
              casual: "They breathing? Feel for a pulse.",
              standard: "Is the person breathing? Can you check for a pulse?",
              formal: "Is the individual currently breathing? Would you be able to check for a pulse?",
            },
          },
          {
            speaker: "you",
            textEn: "They're breathing, but it's very shallow. I can feel a weak pulse. They're not conscious.",
            textZh: "还在呼吸，但很微弱。我能摸到微弱的脉搏。他们没有意识。",
            culturalNote: "如果不知道怎么检查脉搏，911 接线员会一步步指导你。保持冷静，跟着指示做。",
            casualVersion: "Yeah, they're breathing but barely. Pulse is weak. They're out cold.",
            commonMistake: {
              wrong: "He is breathing but not very much. Heart is beating slow.",
              correct: "They're breathing, but it's very shallow. I can feel a weak pulse.",
              explanation: "呼吸微弱用 shallow breathing，脉搏微弱用 weak pulse。用 they 指代性别不明的人。",
            },
            formalityVariants: {
              casual: "Breathing, barely. Weak pulse. They're totally out.",
              standard: "They're breathing, but it's very shallow. I can feel a weak pulse. They're not conscious.",
              formal: "The individual is breathing, although respiration is very shallow. I can detect a weak pulse. They are currently unconscious.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Keep them on their side and don't move them. Stay on the line — the ambulance will be there in four minutes.",
            textZh: "让他们侧卧，不要移动他们。保持通话——救护车四分钟后到。",
            keyPhrases: [
              { en: "keep them on their side", zh: "让他们侧卧" },
              { en: "stay on the line", zh: "保持通话" },
            ],
            alternativeExpressions: [
              {
                textEn: "Roll them gently onto their side. Don't hang up. Paramedics are almost there.",
                textZh: "轻轻把他们翻到侧面。不要挂电话。急救人员快到了。",
                actionHint: "保持通话等待救援",
                frequency: "common",
              },
            ],
            casualVersion: "Put them on their side, don't move them. Stay with me — ambulance is four minutes out.",
            formalityVariants: {
              casual: "Keep them on their side. Don't move them. Stay on the phone, help's coming.",
              standard: "Keep them on their side and don't move them. Stay on the line — the ambulance will be there in four minutes.",
              formal: "Please position the individual on their side and refrain from moving them further. Please remain on the line — the ambulance will arrive in approximately four minutes.",
            },
          },
        ],
      },
      // --- Flow 2: 中级医疗急救 ---
      {
        id: "medical-intermediate",
        titleZh: "胸痛急救",
        titleEn: "Chest Pain Emergency",
        description: "同伴突然胸痛，拨打 911 并配合接线员做初步处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My friend is having severe chest pain and difficulty breathing. I think he might be having a heart attack.",
            textZh: "我朋友剧烈胸痛，呼吸困难。我觉得他可能是心脏病发作了。",
            culturalNote: "美国急救费用高昂但先救人，保险问题事后处理。永远不要因为费用犹豫打 911。",
            casualVersion: "My friend's got really bad chest pain, can barely breathe. I think it might be a heart attack!",
            commonMistake: {
              wrong: "My friend's heart is attack. He cannot breathe.",
              correct: "My friend might be having a heart attack. He's having difficulty breathing.",
              explanation: "心脏病发作是 having a heart attack，不是 heart is attack。呼吸困难是 difficulty breathing。",
            },
            formalityVariants: {
              casual: "My buddy's got bad chest pain, can't breathe right. Think it's a heart attack!",
              standard: "My friend is having severe chest pain and difficulty breathing. I think he might be having a heart attack.",
              formal: "My companion is experiencing severe chest pain and respiratory difficulty. I believe he may be suffering a cardiac event.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "How old is he? Does he have any known heart conditions or take any medications?",
            textZh: "他多大了？有已知的心脏病史或在服药吗？",
            keyPhrases: [
              { en: "known heart conditions", zh: "已知的心脏病史" },
              { en: "take any medications", zh: "在服药" },
            ],
            alternativeExpressions: [
              {
                textEn: "What's his age? Any history of heart problems? Is he on any meds?",
                textZh: "他几岁？有心脏病史吗？在吃什么药吗？",
                actionHint: "提供病史信息",
                frequency: "common",
              },
            ],
            casualVersion: "How old is he? Any heart problems before? On any meds?",
            formalityVariants: {
              casual: "How old? Any heart issues? Taking any meds?",
              standard: "How old is he? Does he have any known heart conditions or take any medications?",
              formal: "May I ask the patient's age? Does he have any known cardiac conditions or is he currently taking any medications?",
            },
          },
          {
            speaker: "you",
            textEn: "He's 55 years old. He takes blood pressure medication, but I don't know the name. He's sweating a lot and his left arm hurts.",
            textZh: "他 55 岁。他在吃降压药，但我不知道药名。他出了很多汗，左臂疼。",
            culturalNote: "左臂疼痛 + 胸痛 + 大量出汗是典型心脏病发作症状。告诉接线员这些能帮助他们判断。",
            casualVersion: "He's 55. Takes blood pressure meds, dunno which ones. He's sweating like crazy and says his left arm hurts.",
            commonMistake: {
              wrong: "He is 55 age. He eats blood pressure medicine.",
              correct: "He's 55 years old. He takes blood pressure medication.",
              explanation: "年龄说 55 years old，不说 55 age。吃药用 takes medication，不用 eats medicine。",
            },
            formalityVariants: {
              casual: "55. On blood pressure pills, don't know which. Sweating bad, left arm's killing him.",
              standard: "He's 55 years old. He takes blood pressure medication, but I don't know the name. He's sweating a lot and his left arm hurts.",
              formal: "He is 55 years of age. He is currently on blood pressure medication, though I am unable to provide the specific name. He is perspiring heavily and experiencing pain in his left arm.",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "Have him sit down and stay calm. Do you have any aspirin? If so, have him chew one tablet.",
            textZh: "让他坐下来保持冷静。你有阿司匹林吗？如果有，让他嚼一片。",
            keyPhrases: [
              { en: "sit down and stay calm", zh: "坐下来保持冷静" },
              { en: "chew one tablet", zh: "嚼一片" },
            ],
            alternativeExpressions: [
              {
                textEn: "Get him seated. If you've got aspirin, give him one to chew — don't let him swallow it whole.",
                textZh: "让他坐下。如果有阿司匹林，给他嚼一片——别让他整片吞。",
                actionHint: "给患者服用阿司匹林",
                frequency: "common",
              },
            ],
            casualVersion: "Get him to sit. Got any aspirin? Give him one to chew.",
            formalityVariants: {
              casual: "Sit him down. Got aspirin? Have him chew one.",
              standard: "Have him sit down and stay calm. Do you have any aspirin? If so, have him chew one tablet.",
              formal: "Please have him assume a seated position and remain calm. Do you have access to aspirin? If available, please have him chew one tablet rather than swallowing it whole.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, he's sitting down. I found some aspirin in his bag. He's chewing it now. How much longer for the ambulance?",
            textZh: "好的，他坐下了。我在他包里找到了阿司匹林。他正在嚼。救护车还要多久？",
            culturalNote: "阿司匹林能稀释血液，心脏病发作时嚼服（不是吞服）可以争取时间。这是美国急救常识。",
            casualVersion: "He's sitting. Found aspirin in his bag, he's chewing it. How long till the ambulance gets here?",
            commonMistake: {
              wrong: "He is eating the aspirin now. When will ambulance arrive?",
              correct: "He's chewing it now. How much longer for the ambulance?",
              explanation: "嚼药说 chewing，不说 eating。问还要多久用 how much longer，比 when will it arrive 更口语化。",
            },
            formalityVariants: {
              casual: "Done. He's chewing aspirin. How long for the ambulance?",
              standard: "Okay, he's sitting down. I found aspirin in his bag. He's chewing it now. How much longer for the ambulance?",
              formal: "He is now seated and has been given aspirin to chew. Could you provide an estimated time of arrival for the ambulance?",
            },
          },
          {
            speaker: "them",
            role: "911 接线员",
            textEn: "The ambulance is two minutes away. Keep him calm and don't let him lie flat. If he stops breathing, I'll talk you through CPR.",
            textZh: "救护车两分钟后到。让他保持冷静，不要让他平躺。如果他停止呼吸，我会指导你做心肺复苏。",
            keyPhrases: [
              { en: "two minutes away", zh: "两分钟后到" },
              { en: "talk you through CPR", zh: "指导你做心肺复苏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Almost there — two minutes. Keep him sitting up. If anything changes, tell me right away.",
                textZh: "快到了——两分钟。让他坐着。如果有变化，马上告诉我。",
                actionHint: "保持监护和通话",
                frequency: "common",
              },
            ],
            casualVersion: "Two minutes out. Keep him sitting up and calm. If he stops breathing, I'll walk you through CPR.",
            formalityVariants: {
              casual: "Two minutes. Keep him sitting, stay calm. If he stops breathing, I'll guide you through CPR.",
              standard: "The ambulance is two minutes away. Keep him calm and don't let him lie flat. If he stops breathing, I'll talk you through CPR.",
              formal: "The ambulance will arrive in approximately two minutes. Please ensure he remains calm and in an upright position. Should he cease breathing, I will provide you with CPR instructions.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 护照丢失 ====================
  // ==================== 联系大使馆 ====================
  {
    id: "emergency-embassy-contact",
    category: "emergency",
    titleZh: "联系大使馆",
    titleEn: "Contacting the Embassy",
    description: "打电话或到访大使馆预约、咨询紧急服务和非工作时间求助",
    otherRole: "大使馆工作人员",
    otherRoleIcon: "phone",
    flows: [
      // --- Flow 1: 基础 - 电话预约 ---
      {
        id: "embassy-appointment",
        titleZh: "电话预约",
        titleEn: "Making an Appointment",
        description: "打电话给大使馆预约办理护照或领事服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "大使馆工作人员",
            textEn: "Chinese Embassy, Consular Section. How may I help you?",
            textZh: "中国大使馆领事部。有什么可以帮您的？",
            keyPhrases: [
              { en: "Consular Section", zh: "领事部" },
              { en: "how may I help you", zh: "有什么可以帮您的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Thank you for calling the Chinese Embassy. This is the consular services line.",
                textZh: "感谢致电中国大使馆。这里是领事服务热线。",
                actionHint: "说明来电目的",
                frequency: "common",
              },
            ],
            casualVersion: "Chinese Embassy, Consular Section. What can I do for you?",
            formalityVariants: {
              casual: "Chinese Embassy. How can I help?",
              standard: "Chinese Embassy, Consular Section. How may I help you?",
              formal: "Good day. You have reached the Consular Section of the Embassy of the People's Republic of China. How may I be of assistance?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make an appointment to renew my passport. What documents do I need to bring?",
            textZh: "你好，我想预约更换护照。需要带什么材料？",
            culturalNote: "中国大使馆大多数业务都需要网上预约。walk-in 通常只接受紧急情况。",
            casualVersion: "Hi, need to book an appointment for a passport renewal. What do I need to bring?",
            commonMistake: {
              wrong: "I want to change my passport. What things I bring?",
              correct: "I'd like to renew my passport. What documents do I need to bring?",
              explanation: "换护照是 renew，不是 change。需要带什么东西用 what documents do I need to bring。",
            },
            formalityVariants: {
              casual: "Hey, wanna book a passport renewal. What should I bring?",
              standard: "Hi, I'd like to make an appointment to renew my passport. What documents do I need to bring?",
              formal: "Good day. I would like to schedule an appointment for passport renewal. Could you kindly advise me on what documentation I should prepare?",
            },
          },
          {
            speaker: "them",
            role: "大使馆工作人员",
            textEn: "You'll need your current passport, a completed application form, two recent passport photos, and proof of your overseas status. The earliest available appointment is next Thursday.",
            textZh: "你需要带现有护照、填好的申请表、两张近照和海外身份证明。最早的预约时间是下周四。",
            keyPhrases: [
              { en: "completed application form", zh: "填好的申请表" },
              { en: "proof of your overseas status", zh: "海外身份证明" },
            ],
            alternativeExpressions: [
              {
                textEn: "Bring your old passport, the filled-out form, two photos, and something that shows your legal status here — like a visa or green card.",
                textZh: "带旧护照、填好的表格、两张照片，再带个能证明你合法居留的东西——比如签证或绿卡。",
                actionHint: "准备所需材料",
                frequency: "common",
              },
            ],
            casualVersion: "Bring your passport, filled-out form, two photos, and proof you live here. Earliest slot is next Thursday.",
            formalityVariants: {
              casual: "Old passport, the form, two photos, and proof you're living here. Next Thursday's the earliest.",
              standard: "You'll need your current passport, a completed application form, two recent passport photos, and proof of your overseas status. The earliest available appointment is next Thursday.",
              formal: "You will require your current passport, a completed application form, two recent passport-sized photographs, and documentation proving your overseas residency status. The earliest available appointment is next Thursday.",
            },
          },
          {
            speaker: "you",
            textEn: "Next Thursday works for me. Can I book a morning slot? And can I download the application form from your website?",
            textZh: "下周四可以。能预约上午的时段吗？申请表能从你们网站上下载吗？",
            culturalNote: "大使馆网站通常有在线预约系统和表格下载。提前填好表能节省很多时间。",
            casualVersion: "Thursday's good. Can I get a morning time? And is the form on your website?",
            commonMistake: {
              wrong: "Thursday is OK. I want morning time. Form can download from website?",
              correct: "Thursday works for me. Can I book a morning slot? Can I download the form from your website?",
              explanation: "works for me 比 is OK 更地道。预约时段用 book a slot。下载用 can I download。",
            },
            formalityVariants: {
              casual: "Thursday's great. Morning slot? And can I grab the form off your website?",
              standard: "Next Thursday works for me. Can I book a morning slot? And can I download the application form from your website?",
              formal: "Next Thursday would be suitable. Would it be possible to schedule a morning appointment? Additionally, is the application form available for download on your official website?",
            },
          },
          {
            speaker: "them",
            role: "大使馆工作人员",
            textEn: "Yes, I have a 10 AM slot available. And yes, the form is on our website under 'Consular Services.' Anything else I can help with?",
            textZh: "是的，上午 10 点有空位。表格在我们网站\u201C领事服务\u201D栏目下。还有其他需要帮忙的吗？",
            keyPhrases: [
              { en: "slot available", zh: "有空位" },
              { en: "anything else", zh: "还有其他" },
            ],
            alternativeExpressions: [
              {
                textEn: "10 AM is open. The form's on the website — look under Consular Services. Need anything else?",
                textZh: "10 点有空。表格在网站上——找领事服务栏目。还需要别的吗？",
                actionHint: "确认预约或提其他问题",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, 10 AM's open. Form's on the website, Consular Services section. Anything else?",
            formalityVariants: {
              casual: "10 AM works. Form's on the website. Need anything else?",
              standard: "Yes, I have a 10 AM slot available. And yes, the form is on our website under 'Consular Services.' Anything else I can help with?",
              formal: "Indeed, there is a 10 AM appointment slot available. The application form can be found on our official website under the 'Consular Services' section. Is there anything else I may assist you with?",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect. Please book me in for 10 AM next Thursday. Thank you for your help!",
            textZh: "太好了。请帮我预约下周四上午 10 点。谢谢你的帮助！",
            culturalNote: "确认预约后记下日期、时间和需要带的材料。设个手机提醒，别错过。",
            casualVersion: "Awesome, book me in for 10 AM Thursday. Thanks a lot!",
            commonMistake: {
              wrong: "OK please help me book Thursday 10 AM. Thank you help.",
              correct: "Please book me in for 10 AM next Thursday. Thank you for your help!",
              explanation: "book me in for 是固定搭配。thank you for your help 不能省略 for your。",
            },
            formalityVariants: {
              casual: "Great, 10 AM Thursday. Thanks!",
              standard: "That's perfect. Please book me in for 10 AM next Thursday. Thank you for your help!",
              formal: "That would be excellent. Kindly schedule my appointment for 10 AM next Thursday. I greatly appreciate your assistance.",
            },
          },
        ],
      },
      // --- Flow 2: 中级 - 非工作时间紧急求助 ---
      {
        id: "embassy-after-hours",
        titleZh: "非工作时间求助",
        titleEn: "After-Hours Emergency",
        description: "晚上或周末遇到紧急情况拨打大使馆紧急热线",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "值班人员",
            textEn: "Chinese Embassy emergency line. This is the after-hours duty officer. What is your emergency?",
            textZh: "中国大使馆紧急热线。我是非工作时间值班人员。请问什么紧急情况？",
            keyPhrases: [
              { en: "emergency line", zh: "紧急热线" },
              { en: "after-hours duty officer", zh: "非工作时间值班人员" },
            ],
            alternativeExpressions: [
              {
                textEn: "You've reached the Chinese Embassy's 24-hour emergency number. How can I help?",
                textZh: "你拨打了中国大使馆 24 小时紧急电话。有什么需要帮助的？",
                actionHint: "说明紧急情况",
                frequency: "common",
              },
            ],
            casualVersion: "Chinese Embassy emergency line. After-hours duty officer here. What's going on?",
            formalityVariants: {
              casual: "Embassy emergency line. What's the situation?",
              standard: "Chinese Embassy emergency line. This is the after-hours duty officer. What is your emergency?",
              formal: "Thank you for contacting the Chinese Embassy emergency line. I am the after-hours duty officer. How may I assist you with your emergency?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm a Chinese citizen and I've been in a car accident. I'm at the hospital and the police need my passport, but it was damaged in the crash.",
            textZh: "我是中国公民，我出了车祸。我现在在医院，警察需要我的护照，但护照在事故中损坏了。",
            culturalNote: "大使馆 24 小时紧急热线主要处理：人身安全、被拘留、重大事故、自然灾害等紧急情况。",
            casualVersion: "Chinese citizen here, got in a car accident. At the hospital, cops need my passport but it got wrecked in the crash.",
            commonMistake: {
              wrong: "I am Chinese, I have car accident. Police want passport but passport is broken.",
              correct: "I've been in a car accident. The police need my passport, but it was damaged in the crash.",
              explanation: "出车祸用 I've been in a car accident。护照损坏用 damaged，不用 broken。",
            },
            formalityVariants: {
              casual: "Chinese citizen, car accident. At the hospital. Cops want my passport but it's trashed from the crash.",
              standard: "I'm a Chinese citizen and I've been in a car accident. I'm at the hospital and the police need my passport, but it was damaged in the crash.",
              formal: "I am a citizen of China and I have been involved in a motor vehicle accident. I am currently at the hospital. Law enforcement requires my passport for identification purposes; however, it was damaged in the collision.",
            },
          },
          {
            speaker: "them",
            role: "值班人员",
            textEn: "I'm sorry to hear that. Are you injured? Which hospital are you at? I can contact the police on your behalf and arrange emergency identification.",
            textZh: "很遗憾听到这个消息。你受伤了吗？在哪家医院？我可以代你联系警方，安排紧急身份证明。",
            keyPhrases: [
              { en: "on your behalf", zh: "代你" },
              { en: "emergency identification", zh: "紧急身份证明" },
            ],
            alternativeExpressions: [
              {
                textEn: "First, are you okay? Tell me which hospital and I'll reach out to the police for you.",
                textZh: "首先，你还好吗？告诉我哪家医院，我帮你联系警方。",
                actionHint: "提供医院信息",
                frequency: "common",
              },
            ],
            casualVersion: "Oh no. You hurt? What hospital? I'll talk to the cops for you and sort out your ID situation.",
            formalityVariants: {
              casual: "You okay? Which hospital? I'll handle the cops and the ID stuff for you.",
              standard: "I'm sorry to hear that. Are you injured? Which hospital are you at? I can contact the police on your behalf and arrange emergency identification.",
              formal: "I am very sorry to hear about your situation. May I inquire about the extent of your injuries and which medical facility you are at? I shall contact law enforcement on your behalf and arrange for emergency identification documentation.",
            },
          },
          {
            speaker: "you",
            textEn: "I have some minor injuries — nothing serious. I'm at St. Mary's Hospital on Lincoln Avenue. The police officer's name is Officer Davis.",
            textZh: "我有一些轻伤——不严重。我在林肯大道的圣玛丽医院。警察叫 Davis 警官。",
            culturalNote: "给值班人员提供警察的名字和联系方式能帮助他们更快介入处理。",
            casualVersion: "Just some minor stuff, nothing bad. St. Mary's Hospital on Lincoln Ave. Cop's name is Officer Davis.",
            commonMistake: {
              wrong: "I have small hurt. Hospital name is St. Mary. Police name is Davis.",
              correct: "I have some minor injuries. I'm at St. Mary's Hospital. The officer's name is Officer Davis.",
              explanation: "轻伤用 minor injuries。医院名用 I'm at ...。介绍警察用 the officer's name is ...。",
            },
            formalityVariants: {
              casual: "Minor stuff, I'm fine. St. Mary's on Lincoln. The cop is Officer Davis.",
              standard: "I have some minor injuries — nothing serious. I'm at St. Mary's Hospital on Lincoln Avenue. The police officer's name is Officer Davis.",
              formal: "I have sustained minor injuries which are not severe. I am currently at St. Mary's Hospital on Lincoln Avenue. The police officer handling my case is Officer Davis.",
            },
          },
          {
            speaker: "them",
            role: "值班人员",
            textEn: "Okay, I'll contact Officer Davis and verify your identity through our records. I can also send someone to the hospital in the morning to help with paperwork.",
            textZh: "好的，我会联系 Davis 警官，通过我们的记录核实你的身份。明天早上我也可以派人去医院帮你办手续。",
            keyPhrases: [
              { en: "verify your identity", zh: "核实你的身份" },
              { en: "help with paperwork", zh: "帮你办手续" },
            ],
            alternativeExpressions: [
              {
                textEn: "Leave it with me. I'll call the officer and confirm who you are. We'll have someone come by tomorrow to help you out.",
                textZh: "交给我。我会打电话给警官确认你的身份。明天会派人过去帮你。",
                actionHint: "等待大使馆后续联系",
                frequency: "common",
              },
            ],
            casualVersion: "Got it. I'll call Officer Davis and sort out your ID. I'll send someone over in the morning to help with the paperwork.",
            formalityVariants: {
              casual: "On it. I'll call Davis and confirm your identity. Someone will swing by tomorrow to help with the paperwork.",
              standard: "Okay, I'll contact Officer Davis and verify your identity through our records. I can also send someone to the hospital in the morning to help with paperwork.",
              formal: "Understood. I shall contact Officer Davis and verify your identity through our consular records. Additionally, I will arrange for a consular representative to visit the hospital tomorrow morning to assist you with the necessary documentation.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I really appreciate it. Should I call back in the morning, or will someone contact me?",
            textZh: "非常感谢。明天早上我需要回电话，还是会有人联系我？",
            culturalNote: "大使馆紧急热线处理完会给你一个参考号码。记下来方便后续跟进。",
            casualVersion: "Thanks a ton. Should I call back tomorrow, or will you guys reach out to me?",
            commonMistake: {
              wrong: "Thank you very much. Tomorrow I call again or you call me?",
              correct: "Should I call back in the morning, or will someone contact me?",
              explanation: "用 should I ... or will someone ... 的选择疑问句更自然。contact me 比 call me 更正式。",
            },
            formalityVariants: {
              casual: "Thanks! Do I call back tomorrow, or will someone call me?",
              standard: "Thank you so much. Should I call back in the morning, or will someone contact me?",
              formal: "I am most grateful for your assistance. Should I telephone again in the morning, or will a representative contact me directly?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 钱包被偷 ====================
  {
    id: "emergency-stolen-wallet",
    category: "emergency",
    titleZh: "钱包被偷",
    titleEn: "Stolen Wallet",
    description: "钱包被偷后取消银行卡、报警备案和补办身份证件",
    otherRole: "警察 / 银行客服",
    otherRoleIcon: "wallet",
    flows: [
      // --- Flow 1: 基础 - 打电话挂失银行卡 ---
      {
        id: "stolen-wallet-bank",
        titleZh: "银行挂失",
        titleEn: "Canceling Cards",
        description: "钱包被偷后第一时间打电话给银行挂失信用卡和借记卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "银行客服",
            textEn: "Thank you for calling First National Bank. How can I assist you today?",
            textZh: "感谢致电第一国民银行。今天有什么可以帮您的？",
            keyPhrases: [
              { en: "how can I assist you", zh: "有什么可以帮您的" },
              { en: "First National Bank", zh: "第一国民银行" },
            ],
            alternativeExpressions: [
              {
                textEn: "You've reached First National Bank customer service. What can I help you with?",
                textZh: "你拨打了第一国民银行客服。有什么需要帮助的？",
                actionHint: "说明来电目的",
                frequency: "common",
              },
            ],
            casualVersion: "First National Bank, how can I help?",
            formalityVariants: {
              casual: "First National Bank. How can I help?",
              standard: "Thank you for calling First National Bank. How can I assist you today?",
              formal: "Thank you for contacting First National Bank. How may I be of service to you today?",
            },
          },
          {
            speaker: "you",
            textEn: "My wallet was just stolen and I need to cancel my credit card and debit card immediately. This is urgent.",
            textZh: "我的钱包刚被偷了，我需要立即取消信用卡和借记卡。这很紧急。",
            culturalNote: "在美国，银行卡被盗后要第一时间打银行背面的电话号码挂失。通常24小时内的盗刷银行会承担。",
            casualVersion: "My wallet got stolen, need to cancel my cards right now. It's urgent.",
            commonMistake: {
              wrong: "Someone steal my wallet. I want to stop my card.",
              correct: "My wallet was just stolen. I need to cancel my cards immediately.",
              explanation: "挂失银行卡用 cancel my cards，不用 stop my card。被偷用过去式 was stolen。",
            },
            formalityVariants: {
              casual: "Wallet got stolen! Need my cards canceled ASAP!",
              standard: "My wallet was just stolen and I need to cancel my credit card and debit card immediately. This is urgent.",
              formal: "I am calling to report that my wallet has been stolen. I need to request immediate cancellation of both my credit card and debit card as a matter of urgency.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "I understand the urgency. Let me pull up your account. Can you verify your full name and the last four digits of your Social Security number?",
            textZh: "我理解情况紧急。让我调出你的账户。能验证一下你的全名和社会安全号码后四位吗？",
            keyPhrases: [
              { en: "verify your full name", zh: "验证你的全名" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Don't worry, we'll take care of this right away. For security, I need your name and the last four of your SSN.",
                textZh: "别担心，我们马上处理。为了安全，我需要你的名字和社会安全号后四位。",
                actionHint: "提供身份验证信息",
                frequency: "common",
              },
            ],
            casualVersion: "Got it, let me pull up your account. Name and last four of your Social?",
            formalityVariants: {
              casual: "On it. Name and last four of your Social?",
              standard: "I understand the urgency. Let me pull up your account. Can you verify your full name and the last four digits of your Social Security number?",
              formal: "I completely understand the urgency of your situation. Allow me to access your account. For verification purposes, could you please provide your full legal name and the last four digits of your Social Security number?",
            },
          },
          {
            speaker: "you",
            textEn: "My name is Li Wei. I don't have a Social Security number — I'm a Chinese citizen visiting on a tourist visa. My account was opened with my passport number.",
            textZh: "我叫李伟。我没有社会安全号——我是持旅游签证的中国公民。我的账户是用护照号码开的。",
            culturalNote: "外国游客在美国开银行账户通常用护照号。没有 SSN 时要说明，银行有替代验证方式。",
            casualVersion: "Li Wei. No Social — I'm a Chinese citizen on a tourist visa. Used my passport number to open the account.",
            commonMistake: {
              wrong: "I am Li Wei. I don't have Social Security. I am tourist from China.",
              correct: "My name is Li Wei. I don't have a Social Security number — I'm a Chinese citizen visiting on a tourist visa.",
              explanation: "Social Security 要说完整 Social Security number。旅游签证说 visiting on a tourist visa。",
            },
            formalityVariants: {
              casual: "Li Wei. Don't have a Social — I'm Chinese, here on a tourist visa. Account's under my passport number.",
              standard: "My name is Li Wei. I don't have a Social Security number — I'm a Chinese citizen visiting on a tourist visa. My account was opened with my passport number.",
              formal: "My name is Li Wei. I do not possess a Social Security number as I am a Chinese citizen currently visiting on a tourist visa. My account was established using my passport number for identification.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn: "No problem. Can you provide your passport number? I've located your account. Both cards have been frozen. We'll send replacement cards to your address on file.",
            textZh: "没问题。能提供你的护照号码吗？我找到你的账户了。两张卡已经冻结了。我们会把补发的卡寄到你档案上的地址。",
            keyPhrases: [
              { en: "cards have been frozen", zh: "卡已经冻结了" },
              { en: "replacement cards", zh: "补发的卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Got your account. Both cards are now blocked. We'll mail new ones to your address. Any unauthorized charges will be reversed.",
                textZh: "找到你的账户了。两张卡都已经锁了。新卡会寄到你的地址。未授权的消费会被撤销。",
                actionHint: "确认地址是否正确",
                frequency: "common",
              },
            ],
            casualVersion: "Passport number? Found your account. Cards are frozen. New cards will be sent to your address.",
            formalityVariants: {
              casual: "Passport number? Got it. Cards frozen. We'll send new ones to your address.",
              standard: "No problem. Can you provide your passport number? I've located your account. Both cards have been frozen. We'll send replacement cards to your address on file.",
              formal: "Certainly. Could you please provide your passport number? I have located your account. Both cards have been immediately frozen. Replacement cards will be dispatched to the address currently on file.",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, I'm staying at a hotel right now. Can you send them there instead? And have there been any charges on my cards since the theft?",
            textZh: "其实我现在住在酒店。能寄到酒店吗？被偷之后我的卡上有消费记录吗？",
            culturalNote: "被盗后立即查看有无未授权消费很重要。美国银行法规通常保护持卡人免受盗刷损失。",
            casualVersion: "I'm at a hotel right now. Can you send them there? And any charges since it got stolen?",
            commonMistake: {
              wrong: "I live in hotel now. Can send to hotel? Someone use my card after stolen?",
              correct: "I'm staying at a hotel. Can you send them there? Have there been any charges since the theft?",
              explanation: "住酒店用 staying at，不用 live in。询问消费记录用 have there been any charges。",
            },
            formalityVariants: {
              casual: "I'm at a hotel. Can you send them there? Any charges since it was stolen?",
              standard: "Actually, I'm staying at a hotel right now. Can you send them there instead? And have there been any charges on my cards since the theft?",
              formal: "I should mention that I am currently staying at a hotel. Would it be possible to have the replacement cards sent to my hotel address instead? Additionally, could you verify whether any unauthorized transactions have occurred since the theft?",
            },
          },
        ],
      },
      // --- Flow 2: 中级 - 报警并补办证件 ---
      {
        id: "stolen-wallet-police",
        titleZh: "报警补办",
        titleEn: "Police Report and ID Replacement",
        description: "到警察局报案并了解证件补办流程",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Officer, I'd like to report a theft. My wallet was pickpocketed on the bus about an hour ago. It had my passport, all my credit cards, and about $300 in cash.",
            textZh: "警官，我要报案。大约一小时前我在公交车上被扒了钱包。里面有护照、所有信用卡和大约 300 美元现金。",
            culturalNote: "报案时列清所有丢失物品，特别是护照和证件。警察报告是后续补办各种证件的基础。",
            casualVersion: "Officer, need to report a theft. Got pickpocketed on the bus an hour ago. Passport, all my cards, 300 bucks — everything.",
            commonMistake: {
              wrong: "I want report thief. On bus someone take my wallet. Inside have passport and money.",
              correct: "I'd like to report a theft. My wallet was pickpocketed on the bus. It had my passport and about $300.",
              explanation: "report a theft（报盗窃案），不是 report thief（举报小偷）。里面有什么用 it had。",
            },
            formalityVariants: {
              casual: "Hey officer, got pickpocketed on the bus. Lost my wallet — passport, cards, cash, the works.",
              standard: "Officer, I'd like to report a theft. My wallet was pickpocketed on the bus about an hour ago. It had my passport, all my credit cards, and about $300 in cash.",
              formal: "Officer, I would like to file a report regarding a theft. Approximately one hour ago, my wallet was pickpocketed while I was on a public bus. The wallet contained my passport, all of my credit cards, and approximately $300 in cash.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "That's a lot to lose. Have you already contacted your bank to freeze your cards? Let me start the report.",
            textZh: "损失不小。你已经联系银行冻结卡了吗？我来开始做报案记录。",
            keyPhrases: [
              { en: "freeze your cards", zh: "冻结你的卡" },
              { en: "start the report", zh: "开始做报案记录" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's rough. First thing — have you called your bank? Let's get a report going.",
                textZh: "真倒霉。首先——你打银行电话了吗？我们来做报案记录。",
                actionHint: "确认是否已联系银行",
                frequency: "common",
              },
            ],
            casualVersion: "Yikes, that's a lot. Called your bank yet? Let me write this up.",
            formalityVariants: {
              casual: "Ouch. Called the bank? Let me write this up.",
              standard: "That's a lot to lose. Have you already contacted your bank to freeze your cards? Let me start the report.",
              formal: "That is a significant loss. Have you already taken the precaution of contacting your financial institution to freeze your cards? Allow me to commence the incident report.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I called my bank right away. All cards are frozen. But I'm worried about my passport — what should I do about that?",
            textZh: "是的，我马上打了银行电话。所有卡都冻结了。但我很担心护照——这个该怎么办？",
            culturalNote: "护照丢失后需要：1.报警 2.联系大使馆 3.申请紧急旅行证件。没有护照不能上飞机。",
            casualVersion: "Yeah, called the bank right away. Cards are frozen. But what about my passport? What do I do?",
            commonMistake: {
              wrong: "Yes, I call bank immediately. But my passport how to do?",
              correct: "Yes, I called my bank right away. But what should I do about my passport?",
              explanation: "已经做了的事用过去式 called。问怎么办用 what should I do about。",
            },
            formalityVariants: {
              casual: "Yeah, bank's handled, cards frozen. But what about the passport?",
              standard: "Yes, I called my bank right away. All cards are frozen. But I'm worried about my passport — what should I do about that?",
              formal: "Yes, I contacted my bank immediately and all cards have been frozen. However, I am concerned about my passport. Could you advise me on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "You'll need to contact your embassy for a replacement. I'll give you a copy of this police report — you'll need it for the embassy and for your insurance claim.",
            textZh: "你需要联系大使馆补办。我会给你一份报案记录副本——大使馆和保险理赔都会用到。",
            keyPhrases: [
              { en: "contact your embassy", zh: "联系你的大使馆" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              {
                textEn: "Your embassy can issue a temporary passport. Take this report with you — the embassy and your insurance company will both need it.",
                textZh: "大使馆可以发临时护照。带上这份报告——大使馆和保险公司都需要。",
                actionHint: "保管好报案记录",
                frequency: "common",
              },
            ],
            casualVersion: "Hit up your embassy for a new passport. Here's the report — you'll need it for the embassy and insurance.",
            formalityVariants: {
              casual: "Call your embassy for the passport. Take this report — you'll need it.",
              standard: "You'll need to contact your embassy for a replacement. I'll give you a copy of this police report — you'll need it for the embassy and for your insurance claim.",
              formal: "You will need to contact your country's embassy to arrange for a replacement passport. I will provide you with an official copy of this police report, which will be required by both your embassy and your insurance provider.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. One more thing — I have no cash or cards now. Is there an emergency service that can help with temporary funds?",
            textZh: "谢谢。还有一件事——我现在没有现金也没有卡了。有什么紧急服务能帮忙解决临时资金吗？",
            culturalNote: "大使馆可以帮联系家人汇钱、Western Union 转账，也可能提供小额紧急贷款。",
            casualVersion: "Thanks. Also — I'm broke now, no cash, no cards. Is there any emergency help for money?",
            commonMistake: {
              wrong: "I have no money now. Who can give me money?",
              correct: "Is there an emergency service that can help with temporary funds?",
              explanation: "ask for help with temporary funds 比 who can give me money 更恰当。",
            },
            formalityVariants: {
              casual: "Thanks. But I've got zero money on me now. Any emergency services for that?",
              standard: "Thank you. One more thing — I have no cash or cards now. Is there an emergency service that can help with temporary funds?",
              formal: "Thank you, Officer. I have one additional concern — I currently have no access to cash or payment cards. Are there any emergency services available that could assist with temporary financial support?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Your embassy can help arrange emergency funds from family back home. There's also a victim assistance program — here's their card. They can help with immediate needs like food and transportation.",
            textZh: "大使馆可以帮你安排家人从国内汇钱。还有一个受害者援助项目——这是他们的名片。他们能帮解决吃饭和交通等急需。",
            keyPhrases: [
              { en: "emergency funds", zh: "紧急资金" },
              { en: "victim assistance program", zh: "受害者援助项目" },
            ],
            alternativeExpressions: [
              {
                textEn: "Talk to your embassy about getting money wired from home. Also, here's the number for victim services — they help with food, shelter, that kind of thing.",
                textZh: "跟大使馆谈谈从国内汇钱的事。另外，这是受害者服务的电话——他们帮解决吃住。",
                actionHint: "联系援助服务",
                frequency: "common",
              },
            ],
            casualVersion: "Embassy can help get money from your family. Also, here's a card for victim assistance — they help with food and getting around.",
            formalityVariants: {
              casual: "Embassy can wire money from your family. Here's a card for victim help — food, rides, that stuff.",
              standard: "Your embassy can help arrange emergency funds from family back home. There's also a victim assistance program — here's their card. They can help with immediate needs like food and transportation.",
              formal: "Your embassy should be able to facilitate the transfer of emergency funds from your family. Additionally, I would like to refer you to our victim assistance program. Here is their contact information. They can provide immediate assistance with necessities such as food and transportation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 车辆抛锚 ====================
  {
    id: "emergency-car-breakdown",
    category: "emergency",
    titleZh: "车辆抛锚",
    titleEn: "Car Breakdown",
    description: "车辆在路上抛锚，呼叫道路救援、描述位置和确保安全",
    otherRole: "道路救援调度员",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 基础 - 呼叫道路救援 ---
      {
        id: "breakdown-basic",
        titleZh: "呼叫救援",
        titleEn: "Calling Roadside Assistance",
        description: "车辆在高速公路上抛锚，打电话呼叫道路救援",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "道路救援调度员",
            textEn: "AAA Roadside Assistance. What's your situation?",
            textZh: "AAA 道路救援。请问什么情况？",
            keyPhrases: [
              { en: "Roadside Assistance", zh: "道路救援" },
              { en: "what's your situation", zh: "什么情况" },
            ],
            alternativeExpressions: [
              {
                textEn: "AAA, how can we help you today? Are you broken down or in an accident?",
                textZh: "AAA，今天有什么需要帮助的？是车坏了还是出事故了？",
                actionHint: "说明车辆问题",
                frequency: "common",
              },
            ],
            casualVersion: "AAA Roadside. What's going on?",
            formalityVariants: {
              casual: "AAA. What's up?",
              standard: "AAA Roadside Assistance. What's your situation?",
              formal: "Thank you for contacting AAA Roadside Assistance. How may we assist you today?",
            },
          },
          {
            speaker: "you",
            textEn: "My car broke down on the highway. The engine just stopped and I can't restart it. I've pulled over to the shoulder.",
            textZh: "我的车在高速公路上抛锚了。发动机突然熄火了，打不着。我已经把车停到路肩了。",
            culturalNote: "在美国高速公路抛锚，一定要尽量靠到路肩(shoulder)，打开双闪(hazard lights)。AAA是最大的道路救援服务。",
            casualVersion: "Car died on the highway. Engine just quit, won't start. I pulled over to the shoulder.",
            commonMistake: {
              wrong: "My car is broken on highway. Engine stop, cannot open again.",
              correct: "My car broke down on the highway. The engine stopped and I can't restart it.",
              explanation: "车抛锚用 broke down，不是 is broken。启动引擎用 restart，不用 open。",
            },
            formalityVariants: {
              casual: "Car died on the highway. Engine quit, won't start. On the shoulder.",
              standard: "My car broke down on the highway. The engine just stopped and I can't restart it. I've pulled over to the shoulder.",
              formal: "My vehicle has broken down on the highway. The engine ceased functioning and I am unable to restart it. I have managed to pull over onto the shoulder.",
            },
          },
          {
            speaker: "them",
            role: "道路救援调度员",
            textEn: "Okay, can you tell me exactly where you are? What highway and which direction are you heading?",
            textZh: "好的，能告诉我你确切在哪里吗？哪条高速，往哪个方向？",
            keyPhrases: [
              { en: "exactly where you are", zh: "你确切在哪里" },
              { en: "which direction", zh: "哪个方向" },
            ],
            alternativeExpressions: [
              {
                textEn: "What highway are you on? Do you see any mile markers or exit signs nearby?",
                textZh: "你在哪条高速上？附近有里程碑或出口标志吗？",
                actionHint: "描述具体位置",
                frequency: "common",
              },
            ],
            casualVersion: "Where are you exactly? What highway, and which way were you going?",
            formalityVariants: {
              casual: "What highway? Which direction? See any mile markers?",
              standard: "Okay, can you tell me exactly where you are? What highway and which direction are you heading?",
              formal: "Could you please provide your precise location? Specifically, which highway are you on and in which direction were you traveling?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm on Interstate 95 heading north. I just passed Exit 42, so I think I'm around mile marker 43.",
            textZh: "我在 95 号州际公路上往北走。刚过了 42 号出口，应该在 43 英里标附近。",
            culturalNote: "美国高速公路有里程碑(mile marker)标明位置。报位置时说高速编号、方向和里程碑最有效。",
            casualVersion: "I-95 north. Just passed Exit 42, so maybe around mile marker 43.",
            commonMistake: {
              wrong: "I am on highway 95 going to north side. I pass number 42 exit.",
              correct: "I'm on Interstate 95 heading north. I just passed Exit 42.",
              explanation: "高速公路号说 Interstate 95 或 I-95。方向说 heading north，不说 going to north side。",
            },
            formalityVariants: {
              casual: "I-95 north, just past Exit 42. Around mile marker 43.",
              standard: "I'm on Interstate 95 heading north. I just passed Exit 42, so I think I'm around mile marker 43.",
              formal: "I am currently on Interstate 95, traveling in the northbound direction. I recently passed Exit 42, which places me in the vicinity of mile marker 43.",
            },
          },
          {
            speaker: "them",
            role: "道路救援调度员",
            textEn: "Got it. Are you in a safe spot? Make sure your hazard lights are on. A tow truck should reach you in about 30 to 45 minutes.",
            textZh: "收到。你在安全的地方吗？确保打开双闪灯。拖车大约 30 到 45 分钟到。",
            keyPhrases: [
              { en: "hazard lights", zh: "双闪灯" },
              { en: "tow truck", zh: "拖车" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay, I've got your location. Stay in your car with your hazards on. We'll have a truck out to you within the hour.",
                textZh: "好的，我知道你的位置了。待在车里打开双闪。一小时内会有车过去。",
                actionHint: "待在车里等待救援",
                frequency: "common",
              },
            ],
            casualVersion: "Got it. You safe? Hazards on? Tow truck's about 30 to 45 minutes out.",
            formalityVariants: {
              casual: "Got it. Hazards on? Tow truck will be there in 30 to 45.",
              standard: "Got it. Are you in a safe spot? Make sure your hazard lights are on. A tow truck should reach you in about 30 to 45 minutes.",
              formal: "Understood. Are you currently in a safe position? Please ensure your hazard lights are activated. A tow truck will be dispatched and should arrive within approximately 30 to 45 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm on the shoulder with my hazard lights on. It's getting dark though — is there anything else I should do for safety?",
            textZh: "是的，我在路肩上，双闪灯开着。不过天快黑了——为了安全还有什么要做的吗？",
            culturalNote: "天黑后高速公路上更危险。保持在车内、系好安全带、不要站在车后方，等救援到来。",
            casualVersion: "Yep, shoulder, hazards on. Getting dark though — anything else I should do?",
            commonMistake: {
              wrong: "I am on road side. Light is on. But sky is dark. What I should do?",
              correct: "I'm on the shoulder with my hazard lights on. It's getting dark. Is there anything else I should do?",
              explanation: "路肩是 shoulder，不是 road side。双闪灯是 hazard lights。天变暗用 it's getting dark。",
            },
            formalityVariants: {
              casual: "On the shoulder, hazards on. Getting dark — anything else I should do?",
              standard: "Yes, I'm on the shoulder with my hazard lights on. It's getting dark though — is there anything else I should do for safety?",
              formal: "Yes, I have positioned the vehicle on the shoulder and activated the hazard lights. However, visibility is diminishing as it is getting dark. Are there any additional safety precautions I should take?",
            },
          },
        ],
      },
      // --- Flow 2: 中级 - 描述车辆问题 ---
      {
        id: "breakdown-intermediate",
        titleZh: "描述车辆问题",
        titleEn: "Describing the Problem",
        description: "向拖车司机或修理工描述车辆具体故障",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "拖车司机",
            textEn: "Hey there, I'm the tow truck driver. Can you tell me what happened with the car?",
            textZh: "嗨，我是拖车司机。能告诉我车怎么了吗？",
            keyPhrases: [
              { en: "tow truck driver", zh: "拖车司机" },
              { en: "what happened", zh: "怎么了" },
            ],
            alternativeExpressions: [
              {
                textEn: "AAA sent me. Walk me through what happened before the car stopped.",
                textZh: "AAA 派我来的。给我说说车停之前发生了什么。",
                actionHint: "描述故障经过",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, I'm the tow guy. So what went wrong?",
            formalityVariants: {
              casual: "Hey, tow truck's here. What happened?",
              standard: "Hey there, I'm the tow truck driver. Can you tell me what happened with the car?",
              formal: "Good evening. I'm the tow truck operator dispatched to assist you. Could you describe what occurred with your vehicle?",
            },
          },
          {
            speaker: "you",
            textEn: "I was driving normally and the engine started making a knocking sound. Then the temperature gauge went into the red and the engine just died.",
            textZh: "我正常开着，发动机开始发出敲击声。然后温度表到了红区，发动机就熄火了。",
            culturalNote: "如果温度表到红区(overheat)，要立即停车。继续开会严重损坏发动机。",
            casualVersion: "Was driving fine, engine started knocking, temp gauge went red, and the engine just quit.",
            commonMistake: {
              wrong: "Engine make noise, temperature go up very high, then engine close.",
              correct: "The engine started making a knocking sound. The temperature gauge went into the red and the engine died.",
              explanation: "引擎熄火用 died 或 stalled，不用 closed。温度过高说 went into the red。",
            },
            formalityVariants: {
              casual: "Was driving, engine started knocking, temp went red, engine died.",
              standard: "I was driving normally and the engine started making a knocking sound. Then the temperature gauge went into the red and the engine just died.",
              formal: "I was operating the vehicle under normal conditions when the engine began producing a knocking sound. Subsequently, the temperature gauge rose into the critical range and the engine ceased functioning.",
            },
          },
          {
            speaker: "them",
            role: "拖车司机",
            textEn: "Sounds like it overheated, possibly a coolant leak or a bad water pump. When was the last time you checked your coolant level?",
            textZh: "听起来像是过热了，可能是冷却液泄漏或水泵坏了。上次查冷却液是什么时候？",
            keyPhrases: [
              { en: "overheated", zh: "过热" },
              { en: "coolant leak", zh: "冷却液泄漏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Classic overheat symptoms. Could be the radiator, could be the water pump. Pop the hood — let's take a look.",
                textZh: "典型的过热症状。可能是散热器，也可能是水泵。打开引擎盖看看。",
                actionHint: "打开引擎盖检查",
                frequency: "common",
              },
            ],
            casualVersion: "Overheated for sure. Probably a coolant leak or water pump. When'd you last check your coolant?",
            formalityVariants: {
              casual: "Definitely overheated. Coolant leak maybe, or the water pump. When'd you last check coolant?",
              standard: "Sounds like it overheated, possibly a coolant leak or a bad water pump. When was the last time you checked your coolant level?",
              formal: "Based on your description, the vehicle appears to have overheated. The cause could be a coolant leak or a malfunctioning water pump. May I ask when you last inspected the coolant level?",
            },
          },
          {
            speaker: "you",
            textEn: "To be honest, I'm not sure. This is a rental car — I picked it up three days ago. Should I call the rental company?",
            textZh: "说实话，我不确定。这是租的车——三天前取的。我要打电话给租车公司吗？",
            culturalNote: "租车抛锚要先打租车公司电话，他们通常有自己的道路救援服务和换车流程。",
            casualVersion: "Honestly, no clue. It's a rental, got it three days ago. Should I call the rental company?",
            commonMistake: {
              wrong: "I don't know. This car is rent car. I take it three days before.",
              correct: "This is a rental car. I picked it up three days ago.",
              explanation: "租的车叫 rental car。取车用 picked it up。三天前用 three days ago，不是 before。",
            },
            formalityVariants: {
              casual: "No idea. It's a rental, got it three days ago. Should I call them?",
              standard: "To be honest, I'm not sure. This is a rental car — I picked it up three days ago. Should I call the rental company?",
              formal: "I must confess I am unsure. This is a rental vehicle which I collected three days ago. Would you recommend I contact the rental company?",
            },
          },
          {
            speaker: "them",
            role: "拖车司机",
            textEn: "Definitely call them. They'll probably send a replacement car. I'll tow this one to the nearest shop. Do you have the rental agreement with you?",
            textZh: "一定要打。他们可能会送一辆替换车来。我把这辆拖到最近的修理厂。你有租车合同吗？",
            keyPhrases: [
              { en: "replacement car", zh: "替换车" },
              { en: "rental agreement", zh: "租车合同" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, give them a call. They usually swap out the car for you. I'll take this to a shop. Got your rental paperwork?",
                textZh: "对，给他们打电话。通常他们会给你换辆车。我把这辆拖去修。你有租车文件吗？",
                actionHint: "准备租车合同",
                frequency: "common",
              },
            ],
            casualVersion: "For sure, call them. They'll probably swap it out. I'll tow this to a shop. Got the rental paperwork?",
            formalityVariants: {
              casual: "Yeah, call them. They'll swap it. I'll tow this. Got the rental papers?",
              standard: "Definitely call them. They'll probably send a replacement car. I'll tow this one to the nearest shop. Do you have the rental agreement with you?",
              formal: "I would strongly recommend contacting them. They will likely arrange a replacement vehicle for you. I will tow this vehicle to the nearest repair facility. Do you have your rental agreement documentation available?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I have it on my phone. Thank you for coming out so quickly. How long until we get to the repair shop?",
            textZh: "有的，在手机上。谢谢你来这么快。到修理厂要多久？",
            culturalNote: "美国的拖车费和修车费都很贵。租车的话通常由租车公司承担，保留好所有收据。",
            casualVersion: "Yeah, on my phone. Thanks for getting here so fast. How long to the shop?",
            commonMistake: {
              wrong: "I have contract in phone. Thank you come quickly. How long go to repair shop?",
              correct: "I have it on my phone. Thank you for coming so quickly. How long until we get to the repair shop?",
              explanation: "thank you for coming（感谢过来），用 for + 动名词。how long until 表示\u201C还要多久\u201D。",
            },
            formalityVariants: {
              casual: "Got it on my phone. Thanks for the fast response. How far to the shop?",
              standard: "Yes, I have it on my phone. Thank you for coming out so quickly. How long until we get to the repair shop?",
              formal: "Yes, I have the agreement stored on my mobile phone. I appreciate your prompt arrival. Could you estimate how long it will take to reach the repair facility?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 严重过敏反应 ====================
  // ==================== 自然灾害 ====================
  {
    id: "emergency-natural-disaster",
    category: "emergency",
    titleZh: "自然灾害",
    titleEn: "Natural Disaster",
    description: "遇到自然灾害时寻找避难所、了解疏散路线和应对紧急警报",
    otherRole: "酒店前台 / 应急人员",
    otherRoleIcon: "cloud-lightning",
    flows: [
      // --- Flow 1: 基础 - 寻求避难 ---
      {
        id: "disaster-basic",
        titleZh: "龙卷风警报",
        titleEn: "Tornado Warning",
        description: "收到龙卷风警报，在酒店寻找避难所",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I just got an emergency alert on my phone about a tornado warning. Where should I go?",
            textZh: "打扰一下，我手机刚收到龙卷风警报的紧急通知。我该去哪里？",
            culturalNote: "美国手机会自动推送紧急警报(Wireless Emergency Alert)。看到 Tornado Warning 要立即找避难所。",
            casualVersion: "Hey, just got a tornado warning on my phone. Where do I go?",
            commonMistake: {
              wrong: "My phone say tornado coming. Where is safe place?",
              correct: "I just got an emergency alert about a tornado warning. Where should I go?",
              explanation: "紧急通知叫 emergency alert。龙卷风警报叫 tornado warning（比 watch 更紧急）。",
            },
            formalityVariants: {
              casual: "Tornado warning on my phone! Where do I go?",
              standard: "Excuse me, I just got an emergency alert on my phone about a tornado warning. Where should I go?",
              formal: "Pardon me, I have just received an emergency alert regarding a tornado warning. Could you please direct me to the appropriate shelter?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, we're aware. Please head to the basement immediately. Follow the green emergency signs — the shelter is down the stairs at the end of the hallway.",
            textZh: "是的，我们知道了。请立即去地下室。跟着绿色的紧急标志走——避难所在走廊尽头楼梯下面。",
            keyPhrases: [
              { en: "head to the basement", zh: "去地下室" },
              { en: "emergency signs", zh: "紧急标志" },
            ],
            alternativeExpressions: [
              {
                textEn: "We know about the warning. Get to the basement right away. The shelter entrance is at the end of this hallway.",
                textZh: "我们知道警报了。马上去地下室。避难所入口在走廊尽头。",
                actionHint: "跟着标志去地下室",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, we know. Get to the basement — follow the green signs, down the stairs at the end of the hall.",
            formalityVariants: {
              casual: "Yeah, head to the basement. Green signs, end of the hall, down the stairs.",
              standard: "Yes, we're aware. Please head to the basement immediately. Follow the green emergency signs — the shelter is down the stairs at the end of the hallway.",
              formal: "Yes, we have been informed of the warning. Please proceed to the basement without delay. The emergency shelter is located down the staircase at the end of this hallway, clearly indicated by green emergency signage.",
            },
          },
          {
            speaker: "you",
            textEn: "How long do we need to stay down there? And should I bring anything from my room?",
            textZh: "我们要在那里待多久？需要从房间带什么东西吗？",
            culturalNote: "龙卷风警报期间应待在避难所直到警报解除。带上手机、钱包、必要药物和水。",
            casualVersion: "How long do we stay there? Should I grab anything from my room?",
            commonMistake: {
              wrong: "How long time stay there? I need take things from room?",
              correct: "How long do we need to stay? Should I bring anything from my room?",
              explanation: "多久用 how long，不加 time。是否需要带东西用 should I bring anything。",
            },
            formalityVariants: {
              casual: "How long we staying down there? Need to grab anything?",
              standard: "How long do we need to stay down there? And should I bring anything from my room?",
              formal: "How long should we expect to remain in the shelter? And would you recommend bringing any personal belongings from my room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Usually 30 minutes to an hour, until the all-clear is given. Grab your phone, wallet, and any medication. Please hurry — we need everyone downstairs in the next five minutes.",
            textZh: "通常 30 分钟到 1 小时，直到发出解除警报。带上手机、钱包和任何药物。请快一点——五分钟内所有人要到楼下。",
            keyPhrases: [
              { en: "all-clear", zh: "解除警报" },
              { en: "please hurry", zh: "请快一点" },
            ],
            alternativeExpressions: [
              {
                textEn: "Could be half an hour, could be longer. Grab your essentials and get downstairs. Time is critical.",
                textZh: "可能半小时，也可能更久。带上必需品下楼。时间很紧。",
                actionHint: "迅速拿东西下楼",
                frequency: "common",
              },
            ],
            casualVersion: "Half hour to an hour, until they give the all-clear. Grab your phone, wallet, meds. Hurry up — everyone needs to be down there in five minutes.",
            formalityVariants: {
              casual: "30 minutes to an hour. Grab essentials. Need everyone downstairs in five.",
              standard: "Usually 30 minutes to an hour, until the all-clear is given. Grab your phone, wallet, and any medication. Please hurry — we need everyone downstairs in the next five minutes.",
              formal: "Typically between 30 minutes and one hour, until an all-clear notification is issued. I recommend retrieving your phone, wallet, and any essential medication. Please make haste — all guests are required to reach the basement within the next five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm going now. Is there water and food in the shelter? I'm traveling alone and this is my first time dealing with a tornado.",
            textZh: "我马上去。避难所有水和食物吗？我一个人旅行，这是我第一次遇到龙卷风。",
            culturalNote: "中西部(Tornado Alley)龙卷风多发。酒店有义务提供避难设施。不要恐慌，跟着工作人员指示走。",
            casualVersion: "On my way. Is there water and food? First time dealing with a tornado — I'm on my own.",
            commonMistake: {
              wrong: "I go now. Have water and eat in shelter? I am alone travel, first time meet tornado.",
              correct: "I'm going now. Is there water and food in the shelter? This is my first time dealing with a tornado.",
              explanation: "第一次经历用 first time dealing with，不用 first time meet。food 不能替换成 eat。",
            },
            formalityVariants: {
              casual: "Going now. Water and food down there? Never been through a tornado before.",
              standard: "I'm going now. Is there water and food in the shelter? I'm traveling alone and this is my first time dealing with a tornado.",
              formal: "I shall proceed immediately. Are provisions such as water and food available in the shelter? I am traveling alone and this is my first experience with a tornado situation.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, we have water and blankets down there. Don't worry — our staff will be there the whole time. You'll be safe. Just stay away from windows and follow our instructions.",
            textZh: "有的，那里有水和毯子。别担心——我们的工作人员会全程在场。你会安全的。远离窗户，跟着我们的指示走就行。",
            keyPhrases: [
              { en: "stay away from windows", zh: "远离窗户" },
              { en: "follow our instructions", zh: "跟着我们的指示" },
            ],
            alternativeExpressions: [
              {
                textEn: "Water, blankets, first aid — it's all there. Staff will be with you. Just keep away from windows and listen for updates.",
                textZh: "水、毯子、急救箱——都有。工作人员会陪着你。远离窗户，留意最新消息。",
                actionHint: "前往避难所等待",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, water and blankets. Staff'll be there. You'll be fine — just stay away from windows and do what they say.",
            formalityVariants: {
              casual: "Water and blankets, yeah. Staff'll be there. Stay away from windows. You'll be fine.",
              standard: "Yes, we have water and blankets down there. Don't worry — our staff will be there the whole time. You'll be safe. Just stay away from windows and follow our instructions.",
              formal: "Yes, water and blankets have been provided in the shelter. Please rest assured that our staff members will remain present throughout the duration. You will be safe. I would simply advise you to maintain distance from any windows and adhere to our staff's instructions.",
            },
          },
        ],
      },
      // --- Flow 2: 中级 - 疏散 ---
      {
        id: "disaster-intermediate",
        titleZh: "飓风疏散",
        titleEn: "Hurricane Evacuation",
        description: "飓风来临前需要疏散，了解路线和避难中心信息",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I heard there's a mandatory evacuation order because of the hurricane. I'm a tourist and I don't know where to go. Can you help me?",
            textZh: "我听说因为飓风发布了强制疏散令。我是游客，不知道该去哪里。能帮我吗？",
            culturalNote: "mandatory evacuation（强制疏散）意味着必须离开。美国政府会开放避难中心(shelter)并提供免费交通。",
            casualVersion: "Heard there's a mandatory evacuation for the hurricane. I'm a tourist, no idea where to go. Can you help?",
            commonMistake: {
              wrong: "I hear hurricane is coming, government say must leave. I am tourist, don't know go where.",
              correct: "There's a mandatory evacuation order. I'm a tourist and I don't know where to go.",
              explanation: "强制疏散令是 mandatory evacuation order。不知道去哪用 I don't know where to go。",
            },
            formalityVariants: {
              casual: "Hurricane evacuation — I'm a tourist, where do I go?",
              standard: "I heard there's a mandatory evacuation order because of the hurricane. I'm a tourist and I don't know where to go. Can you help me?",
              formal: "I understand a mandatory evacuation order has been issued due to the approaching hurricane. As a tourist unfamiliar with the area, I am unsure of where to proceed. Could you please provide guidance?",
            },
          },
          {
            speaker: "them",
            role: "应急人员",
            textEn: "Yes, this area is in the evacuation zone. There are free shuttle buses running to the community shelter at Lincoln High School, about 15 miles inland. The next bus leaves in 20 minutes.",
            textZh: "是的，这个区域在疏散区内。有免费穿梭巴士去林肯高中的社区避难所，大约 15 英里内陆。下一班 20 分钟后出发。",
            keyPhrases: [
              { en: "evacuation zone", zh: "疏散区" },
              { en: "community shelter", zh: "社区避难所" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're in the mandatory zone. Shuttle buses are taking people to the shelter at Lincoln High. Next one leaves soon.",
                textZh: "你在强制疏散区。穿梭巴士在送人去林肯高中的避难所。下一班马上出发。",
                actionHint: "准备乘坐穿梭巴士",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, you're in the evac zone. Free shuttles to the shelter at Lincoln High — next one in 20 minutes.",
            formalityVariants: {
              casual: "Yeah, this is the evac zone. Free buses to Lincoln High shelter. Next one's in 20.",
              standard: "Yes, this area is in the evacuation zone. There are free shuttle buses running to the community shelter at Lincoln High School, about 15 miles inland. The next bus leaves in 20 minutes.",
              formal: "Indeed, this area falls within the designated evacuation zone. Complimentary shuttle buses are operating to transport residents and visitors to the community shelter established at Lincoln High School, approximately 15 miles inland. The next departure is scheduled in 20 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "What should I bring with me? And how long will we need to stay at the shelter?",
            textZh: "我应该带什么？在避难所要待多久？",
            culturalNote: "疏散时带上重要证件（护照）、药物、手机充电器、换洗衣服和现金。避难所提供基本食物和水。",
            casualVersion: "What should I grab? How long are we stuck at the shelter?",
            commonMistake: {
              wrong: "What I need bring? How long time stay shelter?",
              correct: "What should I bring? How long will we need to stay at the shelter?",
              explanation: "该带什么用 what should I bring。待多久用 how long will we need to stay。",
            },
            formalityVariants: {
              casual: "What do I bring? How long do we stay?",
              standard: "What should I bring with me? And how long will we need to stay at the shelter?",
              formal: "What items would you recommend I bring? And approximately how long should we anticipate remaining at the shelter?",
            },
          },
          {
            speaker: "them",
            role: "应急人员",
            textEn: "Bring your passport, medications, phone charger, some clothes, and cash. The shelter has food, water, and cots. You might be there for one to three days depending on the storm.",
            textZh: "带上护照、药物、手机充电器、一些衣服和现金。避难所有食物、水和折叠床。根据风暴情况，可能要待一到三天。",
            keyPhrases: [
              { en: "medications", zh: "药物" },
              { en: "one to three days", zh: "一到三天" },
            ],
            alternativeExpressions: [
              {
                textEn: "Pack essentials — ID, meds, charger, cash. The shelter provides meals and sleeping arrangements. Could be a day, could be a few.",
                textZh: "带必需品——证件、药、充电器、现金。避难所提供饭和住。可能一天，也可能几天。",
                actionHint: "打包必需品",
                frequency: "common",
              },
            ],
            casualVersion: "Passport, meds, charger, clothes, cash. Shelter's got food, water, and beds. Could be one to three days.",
            formalityVariants: {
              casual: "Grab ID, meds, charger, clothes, cash. They've got food, water, cots. One to three days maybe.",
              standard: "Bring your passport, medications, phone charger, some clothes, and cash. The shelter has food, water, and cots. You might be there for one to three days depending on the storm.",
              formal: "I would recommend bringing your passport, any prescribed medications, a phone charger, a change of clothing, and cash. The shelter is equipped with food provisions, water, and cots for sleeping. The duration of your stay may range from one to three days, depending on the severity of the storm.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there Wi-Fi at the shelter? I need to contact my family back home in China to let them know I'm safe.",
            textZh: "避难所有 Wi-Fi 吗？我需要联系在中国的家人告诉他们我安全。",
            culturalNote: "紧急避难所通常有基本通讯设施。也可以通过红十字会的 Safe and Well 网站报平安。",
            casualVersion: "Is there Wi-Fi? Need to let my family back in China know I'm okay.",
            commonMistake: {
              wrong: "Shelter have Wi-Fi? I need tell my China family I am safe.",
              correct: "Is there Wi-Fi at the shelter? I need to contact my family back home.",
              explanation: "问有没有用 is there。联系家人用 contact my family back home，不需要说 China family。",
            },
            formalityVariants: {
              casual: "Wi-Fi at the shelter? Gotta let my family in China know I'm fine.",
              standard: "Is there Wi-Fi at the shelter? I need to contact my family back home in China to let them know I'm safe.",
              formal: "Will Wi-Fi be available at the shelter? I would need to communicate with my family in China to inform them of my safety.",
            },
          },
          {
            speaker: "them",
            role: "应急人员",
            textEn: "There should be basic Wi-Fi. We also have charging stations. If you can't reach your family, the Red Cross has a registration service so people can look up your status online. Stay safe.",
            textZh: "应该有基础 Wi-Fi。我们还有充电站。如果联系不上家人，红十字会有登记服务，别人可以在网上查你的状态。注意安全。",
            keyPhrases: [
              { en: "charging stations", zh: "充电站" },
              { en: "Red Cross registration service", zh: "红十字会登记服务" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wi-Fi should be available, plus phone charging. The Red Cross also has a safe-and-well registry you can sign up for. Take care.",
                textZh: "Wi-Fi 应该有，还有手机充电。红十字会有个\u201C平安\u201D登记系统你可以注册。保重。",
                actionHint: "利用红十字会报平安",
                frequency: "common",
              },
            ],
            casualVersion: "Should be Wi-Fi and charging stations. Red Cross has a sign-up thing so your family can check your status online. Stay safe.",
            formalityVariants: {
              casual: "Wi-Fi and charging, yeah. Red Cross has a registry so your family can check on you. Be safe.",
              standard: "There should be basic Wi-Fi. We also have charging stations. If you can't reach your family, the Red Cross has a registration service so people can look up your status online. Stay safe.",
              formal: "Basic Wi-Fi connectivity should be available at the shelter, along with charging stations for electronic devices. Should you be unable to reach your family, the American Red Cross operates a registration service that enables individuals to verify your status online. Please take care and stay safe.",
            },
          },
        ],
      },
    ],
  },
];
