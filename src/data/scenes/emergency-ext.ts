import type { PresetScene } from "../scene-types";

// ============================================================
// 紧急场景扩展 — Emergency Extended Scenes
// 覆盖：911报警、盗窃、护照丢失、车祸、地震、火灾、走失同伴、
//       被跟踪、食物中毒、过敏反应、中暑、溺水、自然灾害、航班取消、
//       信用卡盗刷、酒店入侵、抛锚、迷路、诈骗、暴风雪、手机丢失、
//       行李被偷、儿童走失、动物咬伤、签证过期
// ============================================================

export const EMERGENCY_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 拨打911报警 ====================
  {
    id: "emergency-call-911",
    category: "emergency",
    titleZh: "拨打911报警",
    titleEn: "Calling 911",
    description: "在美国遇到紧急情况时拨打911，向接线员描述情况并请求帮助",
    otherRole: "911接线员",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "basic",
        titleZh: "拨打911基本流程",
        titleEn: "Basic 911 Call",
        description: "描述紧急情况、提供位置、等待救援",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "911, what's your emergency?",
            textZh: "911，请问有什么紧急情况？",
            keyPhrases: [{ en: "what's your emergency", zh: "什么紧急情况" }],
            alternativeExpressions: [
              {
                textEn: "911, what are you reporting?",
                textZh: "911，您要报告什么？",
                actionHint: "接线员可能用不同方式问你发生了什么",
                frequency: "occasional",
              },
              {
                textEn: "This is 911, go ahead.",
                textZh: "这里是911，请说。",
                actionHint: "简洁的开场白，直接说你的紧急情况",
                frequency: "common",
              },
              {
                textEn: "911 emergency, what do you need?",
                textZh: "911紧急服务，您需要什么？",
                actionHint: "直接问你需要什么帮助",
                frequency: "occasional",
              },
            ],
            casualVersion: "911, what's your emergency?",
            formalityVariants: {
              casual: "911, what's up?",
              standard: "911, what's your emergency?",
              formal: "911, what is the nature of your emergency?",
            },
          },
          {
            speaker: "you",
            textEn: "I need help. Someone is injured on the street. We need an ambulance.",
            textZh: "我需要帮助。有人在街上受伤了。我们需要一辆救护车。",
            culturalNote: "拨打911后保持冷静，先说最关键的信息：需要什么帮助（警察/救护车/消防）。",
            casualVersion: "Help! Someone's hurt on the street. Need an ambulance.",
            commonMistake: {
              wrong: "Someone is hurt on the street.",
              correct: "Someone is injured on the street.",
              explanation: "`injured`更正式且适合紧急情况，`hurt`更日常。",
            },
            formalityVariants: {
              casual: "Help! Someone's hurt on the street. Gotta get an ambulance.",
              standard: "I need help. Someone is injured on the street. We need an ambulance.",
              formal:
                "I require immediate assistance. There is an individual who has sustained injuries on the public thoroughfare, and an ambulance is critically needed.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Okay, stay calm. Can you tell me your exact location?",
            textZh: "好的，请保持冷静。能告诉我您的确切位置吗？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "exact location", zh: "确切位置" },
            ],
            alternativeExpressions: [
              {
                textEn: "All right, try to stay calm for me. Where are you right now?",
                textZh: "好的，尽量保持冷静。你现在在哪？",
                actionHint: "接线员会安抚你并要位置信息",
                frequency: "common",
              },
              {
                textEn: "Okay, I need you to take a breath. What's your address?",
                textZh: "好的，深呼吸。你的地址是什么？",
                actionHint: "可能直接问地址而不是位置",
                frequency: "occasional",
              },
            ],
            casualVersion: "Alright, calm down. What's your exact location?",
            commonMistake: {
              wrong: "Where are you?",
              correct: "Can you tell me your exact location?",
              explanation: "911对话需清晰准确，`exact location`强调精确性。",
            },
            formalityVariants: {
              casual: "Alright, calm down. What's your exact location?",
              standard: "Okay, stay calm. Can you tell me your exact location?",
              formal: "Understood. Please remain composed. Could you please provide your precise location?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm at the corner of 5th Avenue and 42nd Street, near a coffee shop.",
            textZh: "我在第五大道和42街的交叉口，一家咖啡店附近。",
            culturalNote: "提供位置时，用路口名称、附近标志性建筑或店铺来描述最有效。",
            casualVersion: "Corner of 5th and 42nd, by a coffee shop.",
            commonMistake: {
              wrong: "I am at 5th Avenue and 42nd Street corner.",
              correct: "I'm at the corner of 5th Avenue and 42nd Street.",
              explanation: "`at the corner of` 是固定搭配，表示“在……的拐角处”。",
            },
            formalityVariants: {
              casual: "Corner of 5th and 42nd, by a coffee shop.",
              standard: "I'm at the corner of 5th Avenue and 42nd Street, near a coffee shop.",
              formal:
                "My current position is at the intersection of 5th Avenue and 42nd Street, proximate to a coffee establishment.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "An ambulance is on its way. Is the person conscious? Are they breathing?",
            textZh: "救护车正在赶来。伤者有意识吗？还在呼吸吗？",
            keyPhrases: [
              { en: "on its way", zh: "正在赶来" },
              { en: "conscious", zh: "有意识的" },
              { en: "breathing", zh: "呼吸" },
            ],
            alternativeExpressions: [
              {
                textEn: "Help is on the way. Is the person awake? Can you tell if they're breathing?",
                textZh: "救援正在来的路上。那个人醒着吗？能看出来在呼吸吗？",
                actionHint: "awake 和 conscious 意思差不多",
                frequency: "common",
              },
              {
                textEn: "We've dispatched an ambulance. Are they responsive?",
                textZh: "我们已经派了救护车。他们有反应吗？",
                actionHint: "responsive 意思是有回应、有反应",
                frequency: "occasional",
              },
            ],
            casualVersion: "Ambulance is coming. Conscious? Breathing?",
            culturalNote: "911接线员会非常直接地询问生命体征，不必讲客套。",
            commonMistake: {
              wrong: "Is the person conscious or not? Is he still breathing?",
              correct: "Is the person conscious? Are they breathing?",
              explanation: "911问询追求效率和清晰，`or not`多余，`they`是性别中立称呼。",
            },
            formalityVariants: {
              casual: "Ambulance is coming. Conscious? Breathing?",
              standard: "An ambulance is on its way. Is the person conscious? Are they breathing?",
              formal:
                "An emergency medical vehicle has been dispatched. Could you confirm if the individual is conscious? Are they exhibiting respiration?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, they're conscious but bleeding from the head. They seem dizzy.",
            textZh: "是的，他们有意识但头部在流血。看起来很头晕。",
            casualVersion: "Yeah, they're conscious, but head's bleeding. Look dizzy.",
            culturalNote: "当不确定性别时，使用`they/them`作单数代词是常见且礼貌的。",
            commonMistake: {
              wrong: "Yes, he's conscious but his head is bleeding. He seems dizzy.",
              correct: "Yes, they're conscious but bleeding from the head. They seem dizzy.",
              explanation: "`they`在此处是性别中立用法，`bleeding from the head`是标准表达。",
            },
            formalityVariants: {
              casual: "Yeah, they're conscious, but head's bleeding. Look dizzy.",
              standard: "Yes, they're conscious but bleeding from the head. They seem dizzy.",
              formal:
                "Affirmative, the individual is conscious, however, they are experiencing cranial hemorrhage and appear to be exhibiting symptoms of disorientation.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn:
              "Apply gentle pressure with a clean cloth to stop the bleeding. Don't move them. Help will be there in about 5 minutes.",
            textZh: "用干净的布轻轻按压止血。不要移动伤者。救援大约5分钟后到达。",
            keyPhrases: [
              { en: "apply pressure", zh: "按压" },
              { en: "don't move them", zh: "不要移动伤者" },
            ],
            alternativeExpressions: [
              {
                textEn: "Press down on the wound with a clean rag. Keep them still. EMS should be there in five.",
                textZh: "用干净的布按住伤口。让他们别动。急救人员大约五分钟到。",
                actionHint: "EMS = Emergency Medical Services 急救服务",
                frequency: "common",
              },
              {
                textEn:
                  "Hold something against the cut to slow the bleeding. Don't let them get up. We're almost there.",
                textZh: "拿东西顶住伤口减缓出血。别让他们起来。我们快到了。",
                actionHint: "hold something against 就是用力按住的意思",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Just put gentle pressure with a clean cloth to stop the bleed. Don't move 'em. Help's like 5 mins away.",
            commonMistake: {
              wrong: "Use a clean cloth to stop blood.",
              correct: "Apply gentle pressure with a clean cloth to stop the bleeding.",
              explanation: "`the bleeding`指正在发生的流血行为，比`blood`更准确。",
            },
            formalityVariants: {
              casual:
                "Just put gentle pressure with a clean cloth to stop the bleed. Don't move 'em. Help's like 5 mins away.",
              standard:
                "Apply gentle pressure with a clean cloth to stop the bleeding. Don't move them. Help will be there in about 5 minutes.",
              formal:
                "Please apply gentle, sustained pressure utilizing a clean dressing to mitigate the hemorrhage. It is imperative that the individual not be repositioned. Emergency services are estimated to arrive within approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I'll stay with them. Thank you.",
            textZh: "好的，我会留在他们身边。谢谢。",
            casualVersion: "Alright, I'll stick with 'em. Thanks.",
            commonMistake: {
              wrong: "Okay, I will stay them.",
              correct: "Okay, I'll stay with them.",
              explanation: "`stay with someone`表示“陪伴某人”，`stay`动词后直接跟人是错误的。",
            },
            formalityVariants: {
              casual: "Alright, I'll stick with 'em. Thanks.",
              standard: "Okay, I'll stay with them. Thank you.",
              formal: "Understood. I shall remain by their side. I express my gratitude.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 2. 报告盗窃 ====================
  {
    id: "emergency-report-theft",
    category: "emergency",
    titleZh: "报告盗窃",
    titleEn: "Reporting Theft",
    description: "向警察报告财物被盗，描述物品和事发经过",
    otherRole: "警察",
    otherRoleIcon: "👮",
    flows: [
      {
        id: "basic",
        titleZh: "报告盗窃基本流程",
        titleEn: "Basic Theft Report",
        description: "去警局报案、描述被盗物品、获取报案号",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'd like to report a theft. My bag was stolen.",
            textZh: "打扰了，我想报告一起盗窃案。我的包被偷了。",
            culturalNote: "在国外报案时一定要拿到police report（报案记录），保险理赔和补办证件都需要。",
            casualVersion: "Hey, uh, wanna report a theft. My bag got stolen.",
            commonMistake: {
              wrong: "Excuse me, I want to report a theft.",
              correct: "Excuse me, I'd like to report a theft.",
              explanation: "“I want to”在正式场合听起来很生硬，用“I'd like to”更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, my bag got stolen, need to report it.",
              standard: "Excuse me, I'd like to report a theft. My bag was stolen.",
              formal:
                "Pardon me, I wish to file a report regarding a theft. My personal bag has unfortunately been stolen.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I'm sorry to hear that. When and where did it happen?",
            textZh: "很遗憾听到这个消息。是什么时候在哪里发生的？",
            commonMistake: {
              wrong: "I feel sorry to hear that.",
              correct: "I'm sorry to hear that.",
              explanation: "I'm sorry 表达遗憾，I feel sorry 更像同情或抱歉。",
            },
            keyPhrases: [{ en: "when and where", zh: "什么时候在哪里" }],
            alternativeExpressions: [
              {
                textEn: "That's terrible. Can you tell me what happened? Where were you?",
                textZh: "太糟糕了。能告诉我发生了什么吗？你当时在哪？",
                actionHint: "警察可能先表示同情再问细节",
                frequency: "common",
              },
              {
                textEn: "Okay, walk me through it. When did you notice it was gone?",
                textZh: "好的，跟我说说经过。你什么时候发现东西不见的？",
                actionHint: "walk me through it 就是让你从头说",
                frequency: "occasional",
              },
            ],
            casualVersion: "Aw, damn. When'd that happen and where?",
            formalityVariants: {
              casual: "Oh, that sucks. When'd it happen, where?",
              standard: "I'm sorry to hear that. When and where did it happen?",
              formal:
                "I regret to learn of this incident. Could you please specify the time and location of its occurrence?",
            },
          },
          {
            speaker: "you",
            textEn: "About an hour ago, at the subway station on Broadway. Someone grabbed my backpack and ran.",
            textZh: "大约一小时前，在百老汇的地铁站。有人抢了我的背包就跑了。",
            casualVersion:
              "Like, an hour ago, at the Broadway subway station. Dude just grabbed my backpack and took off.",
            commonMistake: {
              wrong: "Someone robbed my backpack.",
              correct: "Someone grabbed my backpack.",
              explanation: "Rob指抢劫某人或某地，steal/grab指偷走某物。",
            },
            formalityVariants: {
              casual: "Hour ago, Broadway subway. Guy just snatched my backpack and ran.",
              standard: "About an hour ago, at the subway station on Broadway. Someone grabbed my backpack and ran.",
              formal:
                "Approximately one hour prior, at the Broadway subway station. An individual seized my backpack and subsequently fled the scene.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Can you describe the suspect? And what was in the bag?",
            textZh: "能描述一下嫌疑人吗？包里有什么？",
            commonMistake: {
              wrong: "What in the bag?",
              correct: "What was in the bag?",
              explanation: "问句中 be 动词不能省略。",
            },
            keyPhrases: [
              { en: "describe the suspect", zh: "描述嫌疑人" },
              { en: "what was in the bag", zh: "包里有什么" },
            ],
            alternativeExpressions: [
              {
                textEn: "Did you get a look at the person? What was inside your bag?",
                textZh: "你看清那个人了吗？包里面有什么？",
                actionHint: "get a look at 就是看到、看清",
                frequency: "common",
              },
              {
                textEn: "Do you remember what they looked like? And what'd you have in there?",
                textZh: "你记得他们长什么样吗？里面装了些什么？",
                actionHint: "what'd you have 是口语化说法",
                frequency: "common",
              },
            ],
            casualVersion: "Got a description of the guy? And what was in the bag?",
            formalityVariants: {
              casual: "Description of the suspect? What was in the bag?",
              standard: "Can you describe the suspect? And what was in the bag?",
              formal:
                "Could you provide a description of the perpetrator? Furthermore, what items were contained within the bag?",
            },
          },
          {
            speaker: "you",
            textEn: "A young man in a black hoodie. My bag had my wallet, phone, and passport inside.",
            textZh: "一个穿黑色连帽衫的年轻男子。包里有我的钱包、手机和护照。",
            casualVersion: "Young guy, black hoodie. Bag had my wallet, phone, passport.",
            commonMistake: {
              wrong: "My bag had my wallet, my phone, and my passport.",
              correct: "My bag had my wallet, phone, and passport inside.",
              explanation: "列举物品时，第一个“my”已经足够，后面不必重复。",
            },
            formalityVariants: {
              casual: "Young dude, black hoodie. Wallet, phone, passport, all in the bag.",
              standard: "A young man in a black hoodie. My bag had my wallet, phone, and passport inside.",
              formal:
                "The individual was a young male, observed wearing a black hooded garment. The contents of my bag included my wallet, mobile telephone, and passport.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "I'll file a police report for you. You'll need the report number for your insurance claim and to replace your passport at the embassy.",
            textZh: "我会帮您立案。您需要报案号来申请保险理赔和去大使馆补办护照。",
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "report number", zh: "报案号" },
              { en: "insurance claim", zh: "保险理赔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll get a report started. You're gonna need the case number for your insurance and for the embassy.",
                textZh: "我来立案。你需要案件号来做保险理赔和去大使馆。",
                actionHint: "case number 和 report number 一个意思",
                frequency: "common",
              },
              {
                textEn:
                  "Let me write this up for you. Hang onto the report number — you'll need it for insurance and getting a new passport.",
                textZh: "让我给你记录下来。保留好报案号——保险理赔和补办护照都要用。",
                actionHint: "write this up 就是做记录",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll get a police report for ya. You'll need the number for insurance and to get a new passport at the embassy.",
            culturalNote: "在美国，报案号是处理后续事宜的关键凭证",
            commonMistake: {
              wrong: "You'll need the report number for your insurance and replace your passport.",
              correct: "You'll need the report number for your insurance claim and to replace your passport.",
              explanation: "“for”后接名词或动名词，“to”后接动词原形。",
            },
            formalityVariants: {
              casual: "I'll do up a report for you. You'll need the number for insurance and getting a new passport.",
              standard:
                "I'll file a police report for you. You'll need the report number for your insurance claim and to replace your passport at the embassy.",
              formal:
                "I will formally initiate a police report on your behalf. The resultant report number will be essential for your insurance claim and for the replacement of your passport at the embassy.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. How long does it usually take to get the report?",
            textZh: "谢谢。通常多久能拿到报案记录？",
            casualVersion: "Thanks. How long 'til I get the report?",
            commonMistake: {
              wrong: "How long usually can I get the report?",
              correct: "How long does it usually take to get the report?",
              explanation: "询问时间通常用“How long does it take to...”句型。",
            },
            formalityVariants: {
              casual: "Thanks. How quick can I get that report?",
              standard: "Thank you. How long does it usually take to get the report?",
              formal:
                "I appreciate your assistance. What is the approximate timeframe for the acquisition of the official report?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "You can pick it up tomorrow, or I can email you a copy. Just leave your contact information here.",
            textZh: "您明天可以来取，或者我可以通过电子邮件发给您。请在这里留下联系方式。",
            keyPhrases: [
              { en: "pick it up", zh: "来取" },
              { en: "email you a copy", zh: "邮件发给您副本" },
              { en: "contact information", zh: "联系方式" },
            ],
            alternativeExpressions: [
              {
                textEn: "Come back tomorrow to grab it, or I can shoot you a copy by email. Just leave me your info.",
                textZh: "明天过来拿，或者我邮件发一份给你。留个联系方式就行。",
                actionHint: "shoot you a copy 是非常口语的说法，意思是发一份给你",
                frequency: "common",
              },
              {
                textEn: "It'll be ready by tomorrow. Want me to email it to you? Drop your email here.",
                textZh: "明天就好了。要我发邮件给你吗？把邮箱写在这。",
                actionHint: "drop your email 就是留下邮箱",
                frequency: "occasional",
              },
            ],
            casualVersion: "Can grab it tomorrow, or I can just email you a copy. Leave your contact info here.",
            commonMistake: {
              wrong: "You can pick up it tomorrow.",
              correct: "You can pick it up tomorrow.",
              explanation: "代词作宾语时，应放在短语动词（如 pick up）的中间。",
            },
            formalityVariants: {
              casual: "Pick it up tomorrow, or I can send it by email. Just leave your info.",
              standard:
                "You can pick it up tomorrow, or I can email you a copy. Just leave your contact information here.",
              formal:
                "You may collect the report personally tomorrow, or alternatively, I can forward an electronic copy via email. Kindly provide your contact information at this location.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 3. 护照丢失 ====================
  {
    id: "emergency-lost-passport",
    category: "emergency",
    titleZh: "护照丢失（大使馆）",
    titleEn: "Lost Passport at Embassy",
    description: "护照丢失后前往大使馆申请补办临时旅行证件",
    otherRole: "使馆工作人员",
    otherRoleIcon: "🏛️",
    flows: [
      {
        id: "basic",
        titleZh: "补办护照基本流程",
        titleEn: "Passport Replacement Process",
        description: "到大使馆说明情况、填表、申请临时证件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello, I've lost my passport and I need to apply for an emergency travel document.",
            textZh: "您好，我的护照丢了，我需要申请紧急旅行证件。",
            culturalNote: "护照丢失后第一步是报警拿到police report，然后再去大使馆。",
            casualVersion: "Hey, lost my passport, need an emergency travel doc.",
            commonMistake: {
              wrong: "My passport lost.",
              correct: "I've lost my passport.",
              explanation: "中式英语常遗漏主语或be动词，或混淆主动被动。",
            },
            formalityVariants: {
              casual: "Hey, lost my passport. Need an emergency travel doc.",
              standard: "Hello, I've lost my passport and I need to apply for an emergency travel document.",
              formal:
                "Good morning/afternoon, I regret to inform you that I have misplaced my passport and require assistance in applying for an emergency travel document.",
            },
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "I'm sorry to hear that. Do you have a police report for the lost passport?",
            textZh: "很遗憾。您有护照丢失的报案记录吗？",
            commonMistake: {
              wrong: "You have police report?",
              correct: "Do you have a police report?",
              explanation: "中式英语常省略助动词，听起来不自然。",
            },
            keyPhrases: [
              { en: "police report", zh: "报案记录" },
              { en: "lost passport", zh: "护照丢失" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's unfortunate. Did you file a report with the police?",
                textZh: "真不幸。你报警了吗？",
                actionHint: "file a report 就是报案",
                frequency: "common",
              },
              {
                textEn: "Okay. Have you reported it to the local authorities yet?",
                textZh: "好的。你跟当地警方报过案了吗？",
                actionHint: "local authorities 指当地执法部门",
                frequency: "occasional",
              },
            ],
            casualVersion: "Aw, bummer. Got a police report for the lost passport?",
            formalityVariants: {
              casual: "Oh, sorry about that. Got a police report for the lost passport?",
              standard: "I'm sorry to hear that. Do you have a police report for the lost passport?",
              formal:
                "I sincerely apologize for the inconvenience you've experienced. May I inquire if you possess a police report concerning the aforementioned lost passport?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, here's the police report. I filed it yesterday.",
            textZh: "有的，这是报案记录。我昨天报的案。",
            casualVersion: "Yep, here's the report. Filed it yesterday.",
            commonMistake: {
              wrong: "I reported it yesterday.",
              correct: "I filed it yesterday.",
              explanation: '“报案”用"file a police report"或"file it"更地道。',
            },
            formalityVariants: {
              casual: "Yeah, here's the report. Filed it yesterday.",
              standard: "Yes, here's the police report. I filed it yesterday.",
              formal: "Certainly, here is the police report. I submitted it yesterday.",
            },
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn: "Good. Do you have any other form of ID? A photocopy of your passport or a driver's license?",
            textZh: "好的。您还有其他身份证明吗？护照复印件或驾照？",
            commonMistake: {
              wrong: "Do you have other ID?",
              correct: "Do you have any other ID?",
              explanation: "问句中常用any，表示“任何其他”。",
            },
            keyPhrases: [
              { en: "form of ID", zh: "身份证明" },
              { en: "photocopy", zh: "复印件" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great. Do you have any backup ID on you? A copy of your passport, maybe a license?",
                textZh: "好的。身上有其他证件吗？护照复印件，或者驾照？",
                actionHint: "backup ID 就是备用的身份证件",
                frequency: "common",
              },
              {
                textEn: "Do you happen to have anything else with your photo on it? Even a digital copy works.",
                textZh: "你有其他带照片的证件吗？电子版也行。",
                actionHint: "anything with your photo on it 指任何有照片的证件",
                frequency: "occasional",
              },
            ],
            casualVersion: "Okay. Got any other ID? Like a passport copy or a driver's license?",
            formalityVariants: {
              casual: "Alright. Got any other ID? Passport copy or driver's license?",
              standard: "Good. Do you have any other form of ID? A photocopy of your passport or a driver's license?",
              formal:
                "Excellent. Do you possess any alternative forms of identification? Perhaps a photocopy of your passport or a valid driver's license?",
            },
          },
          {
            speaker: "you",
            textEn: "I have a photo of my passport on my phone, and I also have my national ID card.",
            textZh: "我手机上有护照的照片，还有我的身份证。",
            culturalNote: "出国前一定要把护照信息页拍照保存在手机和云端，丢失时非常有用。",
            casualVersion: "Got a pic of my passport on my phone, and my national ID too.",
            commonMistake: {
              wrong: "I have my passport photo on my phone.",
              correct: "I have a photo of my passport on my phone.",
              explanation: "“护照照片”通常指办理护照用的证件照。“护照的照片”指护照本身的照片。",
            },
            formalityVariants: {
              casual: "Yeah, I've got a passport pic on my phone and my national ID.",
              standard: "I have a photo of my passport on my phone, and I also have my national ID card.",
              formal:
                "I possess a digital image of my passport stored on my mobile device, and I also have my national identification card.",
            },
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn:
              "That will work. Please fill out this application form. We can issue an emergency travel certificate, which will take about 3 business days.",
            textZh: "可以用这些。请填写这张申请表。我们可以签发紧急旅行证，大约需要3个工作日。",
            commonMistake: {
              wrong: "It needs 3 business days.",
              correct: "It will take about 3 business days.",
              explanation: "\"It needs\" 听起来不自然，用 \"It will take\" 更地道。",
            },
            keyPhrases: [
              { en: "application form", zh: "申请表" },
              { en: "emergency travel certificate", zh: "紧急旅行证" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Those will do. Go ahead and fill out this form. We can get you a temporary travel document — usually takes about 3 working days.",
                textZh: "这些可以用。填一下这张表。我们可以给你出临时旅行证件——一般需要3个工作日。",
                actionHint: "those will do 表示这些够用了",
                frequency: "common",
              },
              {
                textEn: "That works. Here's the paperwork. We'll issue an emergency passport, give it about 3 days.",
                textZh: "可以。这是要填的文件。我们会出紧急护照，大约3天。",
                actionHint: "paperwork 指需要填的各种表格文件",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "That'll do. Just fill out this form. We can get you an emergency travel cert, should take about 3 business days.",
            formalityVariants: {
              casual:
                "That's fine. Fill out this form. We can get you an emergency travel cert, takes 'bout 3 biz days.",
              standard:
                "That will work. Please fill out this application form. We can issue an emergency travel certificate, which will take about 3 business days.",
              formal:
                "Those documents will suffice. Kindly complete this application form. We are able to issue an emergency travel certificate, the processing of which typically requires approximately three business days.",
            },
          },
          {
            speaker: "you",
            textEn: "My flight is in two days. Is there any way to expedite it?",
            textZh: "我的航班是后天的。有办法加急吗？",
            culturalNote: "在美国，请求加急服务是常见且被接受的，有时需要额外付费。",
            casualVersion: "Flight's in two days. Can you rush it?",
            commonMistake: {
              wrong: "Can I make it faster?",
              correct: "Is there any way to expedite it?",
              explanation: '“加速”用"expedite"或"rush"更专业/地道。',
            },
            formalityVariants: {
              casual: "My flight's in two days. Can you rush it?",
              standard: "My flight is in two days. Is there any way to expedite it?",
              formal:
                "My scheduled departure is in two days. Would it be possible to expedite the processing of this application?",
            },
          },
          {
            speaker: "them",
            role: "使馆工作人员",
            textEn:
              "We can try to expedite it. There's an additional fee of $50. Bring two passport photos and come back tomorrow morning.",
            textZh: "我们可以尝试加急处理。需要额外支付50美元。带两张护照照片明天早上来。",
            culturalNote: "政府服务加急通常需要额外付费。",
            commonMistake: {
              wrong: "Need pay extra $50.",
              correct: "There's an additional fee of $50.",
              explanation: "英语通常会用更完整的句式来表达费用，而不是直接说 \"need pay\"。",
            },
            keyPhrases: [
              { en: "expedite", zh: "加急" },
              { en: "additional fee", zh: "额外费用" },
              { en: "passport photos", zh: "护照照片" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We can try to rush it. There's a $50 fee. Bring two photos and come back first thing tomorrow.",
                textZh: "我们可以试试加急。要50美元。带两张照片明天一早来。",
                actionHint: "rush it 就是加急处理",
                frequency: "common",
              },
              {
                textEn:
                  "We might be able to fast-track it for an extra 50 bucks. Come in tomorrow morning with your photos.",
                textZh: "也许能加急处理，多付50块。明早带上照片过来。",
                actionHint: "fast-track 就是走快速通道，50 bucks 就是50美元",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We can try to rush it. It's an extra 50 bucks. Bring two passport pics and come back tomorrow morning.",
            formalityVariants: {
              casual: "We can try to rush it. Extra $50 fee. Bring two passport pics and come back tomorrow AM.",
              standard:
                "We can try to expedite it. There's an additional fee of $50. Bring two passport photos and come back tomorrow morning.",
              formal:
                "We can endeavor to expedite the process. Please note, however, that an additional fee of fifty dollars will apply. Kindly ensure you bring two passport-sized photographs and return tomorrow morning.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 4. 车祸处理 ====================
  {
    id: "emergency-car-accident",
    category: "emergency",
    titleZh: "车祸处理",
    titleEn: "Car Accident",
    description: "在国外发生交通事故后与对方司机和警察沟通",
    otherRole: "对方司机/警察",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "车祸处理基本流程",
        titleEn: "Basic Car Accident Procedure",
        description: "确认安全、交换信息、报警、等待处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Are you okay? Is anyone hurt?",
            textZh: "你没事吧？有人受伤吗？",
            culturalNote: "车祸后第一件事是确认所有人的安全，然后报警。不要擅自离开现场。",
            casualVersion: "You okay? Anyone hurt?",
            formalityVariants: {
              casual: "You okay? Anyone hurt?",
              standard: "Are you okay? Is anyone hurt?",
              formal: "Are you both alright? Has anyone sustained any injuries?",
            },
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "I'm fine, just shaken up. My car has some damage though. Let's exchange insurance information.",
            textZh: "我没事，只是有点惊吓。不过我的车有些损坏。我们交换一下保险信息吧。",
            commonMistake: {
              wrong: "I'm okay, just a bit shocked. My car has damage. Let's exchange insurance information.",
              correct: "I'm okay, just a bit shaken. My car has some damage though. Shall we exchange insurance information?",
              explanation: "“Shocked”在车祸语境中通常指更严重的情绪创伤，用“shaken”更自然。“Has damage”不如“has some damage”地道。",
            },
            keyPhrases: [
              { en: "shaken up", zh: "受到惊吓" },
              { en: "exchange insurance information", zh: "交换保险信息" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, I'm okay, just a bit rattled. Car's got a dent though. Let's swap insurance info.",
                textZh: "嗯，我没事，就是吓了一跳。车凹了一块。我们交换一下保险信息吧。",
                actionHint: "rattled 和 shaken up 一个意思，swap 就是交换",
                frequency: "common",
              },
              {
                textEn: "I'm all right, no injuries. But look at this damage. We need to trade info for insurance.",
                textZh: "我没受伤。但你看这损坏。我们得交换信息走保险。",
                actionHint: "trade info 就是交换信息",
                frequency: "common",
              },
            ],
            casualVersion: "I'm fine, just shaken. Car's got some damage though. Let's swap insurance info.",
            formalityVariants: {
              casual: "I'm fine, just shaken. Car's got some damage though. Let's swap insurance info.",
              standard:
                "I'm fine, just shaken up. My car has some damage though. Let's exchange insurance information.",
              formal:
                "I am fine, thank you, merely a bit shaken. However, my vehicle has sustained some damage. Perhaps we should proceed with exchanging our insurance particulars.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, of course. Should we call the police to file a report?",
            textZh: "好的，当然。我们需要报警做记录吗？",
            casualVersion: "Yeah, totally. Should we call the cops for a report?",
            culturalNote: "美国轻微事故不一定报警，保险公司有时不要求",
            commonMistake: {
              wrong: "Should we call the police to make a report?",
              correct: "Should we call the police to file a report?",
              explanation: "make a report 听起来不自然，file a report 是固定搭配",
            },
            formalityVariants: {
              casual: "Yeah, totally. Should we call the cops for a report?",
              standard: "Yes, of course. Should we call the police to file a report?",
              formal:
                "Yes, certainly. Would it be prudent for us to contact law enforcement to officially document this incident?",
            },
          },
          {
            speaker: "them",
            role: "对方司机",
            textEn: "Yes, for insurance purposes we should. I'll call 911. Can you take some photos of the damage?",
            textZh: "是的，为了保险理赔我们应该报警。我来打911。你能拍一些损坏的照片吗？",
            culturalNote: "在美国，即使是小事故，通常也会报警做记录以备保险理赔。",
            commonMistake: {
              wrong: "Yes, for insurance we should call police. I'll call 911. Can you take photos of damage?",
              correct: "Yes, for insurance purposes we should. I'll call 911. Can you take some photos of the damage?",
              explanation: "在紧急情况下直接说“call 911”更自然。加“some”让表达更地道。",
            },
            keyPhrases: [
              { en: "insurance purposes", zh: "保险目的" },
              { en: "photos of the damage", zh: "损坏照片" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, we should for the insurance. I'll dial 911. Can you snap some pictures of the cars?",
                textZh: "是的，保险需要。我打911。你能拍几张车的照片吗？",
                actionHint: "snap pictures 就是拍照片",
                frequency: "common",
              },
              {
                textEn:
                  "Definitely, the insurance company will want a report. Let me call it in. Get some photos while we wait.",
                textZh: "当然，保险公司会要报告的。我来打电话报警。等的时候你拍几张照片。",
                actionHint: "call it in 就是打电话报案",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, for insurance we should. I'll call 911. Can you snap some pics of the damage?",
            formalityVariants: {
              casual: "Yeah, for insurance we should. I'll call 911. Can you snap some pics of the damage?",
              standard: "Yes, for insurance purposes we should. I'll call 911. Can you take some photos of the damage?",
              formal:
                "Indeed, for insurance documentation, it would be advisable. I shall contact 911. Would you be able to photograph the damage for our records?",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my rental car insurance card and my driver's license.",
            textZh: "这是我的租车保险卡和驾照。",
            culturalNote: "在美国租车时务必买全险（full coverage），否则出事故个人承担会非常高。",
            casualVersion: "Here's my rental insurance card, and my license.",
            commonMistake: {
              wrong: "Here is my car rental insurance card.",
              correct: "Here's my rental car insurance card.",
              explanation: "英文中'租车保险卡'的词序是rental car insurance card",
            },
            formalityVariants: {
              casual: "Here's my rental insurance card, and my license.",
              standard: "Here's my rental car insurance card and my driver's license.",
              formal: "Kindly take these: my rental vehicle insurance card and my driver's operating license.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "I need both drivers' licenses, insurance cards, and vehicle registrations. Can you each describe what happened?",
            textZh: "我需要双方的驾照、保险卡和车辆登记。你们各自描述一下发生了什么？",
            culturalNote: "美国事故后警察会要求双方描述，确保公正。",
            keyPhrases: [
              { en: "driver's license", zh: "驾照" },
              { en: "vehicle registration", zh: "车辆登记" },
              { en: "describe what happened", zh: "描述发生了什么" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm gonna need IDs, insurance cards, and registrations from both of you. Who wants to go first — what happened?",
                textZh: "两位的证件、保险卡和车辆登记都给我。谁先说——怎么回事？",
                actionHint: "IDs 泛指各种身份证件",
                frequency: "common",
              },
              {
                textEn: "Licenses and insurance please, both parties. Now tell me your side of the story.",
                textZh: "双方的驾照和保险请出示。现在跟我说说你这边的情况。",
                actionHint: "your side of the story 就是你的说法",
                frequency: "common",
              },
            ],
            casualVersion:
              "Need both your licenses, insurance cards, and registrations. Can you guys describe what happened?",
            commonMistake: {
              wrong: "I need your two drivers' licenses.",
              correct: "I need both drivers' licenses.",
              explanation: "表达'双方的驾照'时，用 both drivers' licenses 更自然",
            },
            formalityVariants: {
              casual:
                "Need both your licenses, insurance cards, and registrations. Can you guys describe what happened?",
              standard:
                "I need both drivers' licenses, insurance cards, and vehicle registrations. Can you each describe what happened?",
              formal:
                "I require the driver's license, insurance card, and vehicle registration from each party involved. Could you please provide a description of the incident?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I was driving straight and the other car turned left into my lane. I tried to brake but couldn't avoid it.",
            textZh: "我在直行，对方车辆左转进入了我的车道。我试着刹车但没能避开。",
            casualVersion:
              "I was going straight, and the other car turned left right into my lane. I tried braking but couldn't avoid it.",
            commonMistake: {
              wrong: "I was driving straight, another car turned left.",
              correct: "I was driving straight and the other car turned left into my lane.",
              explanation: "需要指明'转入我的车道'，通常用 into my lane",
            },
            formalityVariants: {
              casual:
                "I was going straight, and the other car turned left right into my lane. I tried braking but couldn't avoid it.",
              standard:
                "I was driving straight and the other car turned left into my lane. I tried to brake but couldn't avoid it.",
              formal:
                "I was proceeding in a straight direction when the opposing vehicle executed a left turn directly into my lane. Despite my efforts to apply the brakes, I was unable to prevent the collision.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "I'll write up the accident report. You'll both receive a copy. Contact your insurance companies to start the claim process.",
            textZh: "我会写事故报告。你们各拿一份。联系你们的保险公司开始理赔流程。",
            keyPhrases: [
              { en: "accident report", zh: "事故报告" },
              { en: "claim process", zh: "理赔流程" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll get the paperwork done. You'll each get a copy. Call your insurance companies to file a claim.",
                textZh: "我来处理文件。你们各一份。打给你们的保险公司报案理赔。",
                actionHint: "file a claim 就是提交理赔申请",
                frequency: "common",
              },
              {
                textEn:
                  "All right, I'm writing up the report. Both of you reach out to your insurance to get the ball rolling.",
                textZh: "好了，我写报告。你们两个联系保险公司开始走流程。",
                actionHint: "get the ball rolling 意思是开始推进",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I'll write up the accident report. You'll both get a copy. Call your insurance to start the claim.",
            commonMistake: {
              wrong: "You will get a copy each.",
              correct: "You'll both receive a copy.",
              explanation: "表达'各拿一份'，用 both receive a copy 更自然",
            },
            formalityVariants: {
              casual:
                "I'll write up the accident report. You'll both get a copy. Call your insurance to start the claim.",
              standard:
                "I'll write up the accident report. You'll both receive a copy. Contact your insurance companies to start the claim process.",
              formal:
                "I will proceed to complete the official accident report. Each of you will be provided with a copy. Subsequently, please initiate contact with your respective insurance providers to commence the claims procedure.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 5. 地震避难 ====================
  {
    id: "emergency-earthquake",
    category: "emergency",
    titleZh: "地震避难",
    titleEn: "Earthquake Safety",
    description: "地震发生时寻求帮助、找到避难所、获取安全信息",
    otherRole: "酒店工作人员/救援人员",
    otherRoleIcon: "🏗️",
    flows: [
      {
        id: "basic",
        titleZh: "地震避难基本流程",
        titleEn: "Basic Earthquake Safety",
        description: "地震中求助、前往避难所、确认安全",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "What's happening? The building is shaking! Where should I go?",
            textZh: "怎么回事？大楼在摇！我应该去哪里？",
            commonMistake: {
              wrong: "What happened? The building is shaking!",
              correct: "What's happening? The building's shaking!",
              explanation: "表达正在发生的事应用现在进行时 'What's happening?'",
            },
            culturalNote: "地震时记住口诀：Drop（趴下）、Cover（掩护）、Hold on（抓紧）。",
            casualVersion: "What's goin' on? Building's shakin'! Where do I go?",
            formalityVariants: {
              casual: "What's going on? Building's shakin'! Where do I go?",
              standard: "What's happening? The building is shaking! Where should I go?",
              formal:
                "Excuse me, could you inform me as to what is occurring? The structure appears to be experiencing significant tremors, and I am unsure where I should proceed for safety.",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "It's an earthquake! Get under a table or doorframe. Stay away from windows. Don't use the elevators!",
            textZh: "地震了！躲到桌子下面或门框旁。远离窗户。不要用电梯！",
            commonMistake: {
              wrong: "Don't use elevator!",
              correct: "Don't use the elevator!",
              explanation: "习惯上，电梯前需要加定冠词 'the'。",
            },
            keyPhrases: [
              { en: "get under a table", zh: "躲到桌子下" },
              { en: "stay away from windows", zh: "远离窗户" },
              { en: "don't use the elevators", zh: "不要用电梯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Earthquake! Drop and get under something solid! Keep away from the glass! No elevators!",
                textZh: "地震了！蹲下躲到结实的东西下面！远离玻璃！不要坐电梯！",
                actionHint: "drop 就是赶紧蹲下",
                frequency: "common",
              },
              {
                textEn:
                  "Take cover now! Get under the desk! Don't go near the windows and whatever you do, don't take the elevator!",
                textZh: "赶紧找掩护！躲到桌子下面！别靠近窗户，千万别坐电梯！",
                actionHint: "take cover 就是找掩护",
                frequency: "common",
              },
            ],
            casualVersion: "Earthquake! Get under a table or doorframe. Clear of windows. No elevators!",
            formalityVariants: {
              casual: "Earthquake! Under a table or doorframe. Clear of windows. No elevators!",
              standard:
                "It's an earthquake! Get under a table or doorframe. Stay away from windows. Don't use the elevators!",
              formal:
                "We are experiencing an earthquake. Please seek immediate shelter under a sturdy table or within a doorframe. It is imperative that you maintain distance from all windows and refrain from using the elevators.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there an evacuation plan? Where is the emergency exit?",
            textZh: "有疏散计划吗？紧急出口在哪？",
            commonMistake: {
              wrong: "Do you have evacuation plan?",
              correct: "Is there an evacuation plan?",
              explanation: "询问是否有某个东西时，常用 'Is there...?' 或 'Are there...?'",
            },
            casualVersion: "Evac plan? Where's the emergency exit?",
            formalityVariants: {
              casual: "Evac plan? Emergency exit, where?",
              standard: "Is there an evacuation plan? Where is the emergency exit?",
              formal:
                "Could you please inform me if there is an established evacuation plan, and could you also indicate the location of the nearest emergency exit?",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "Once the shaking stops, follow the green exit signs. Take the stairs to the ground floor. The assembly point is in the parking lot across the street.",
            textZh: "等摇晃停止后，跟着绿色出口标志走。走楼梯到一楼。集合点在街对面的停车场。",
            keyPhrases: [
              { en: "exit signs", zh: "出口标志" },
              { en: "take the stairs", zh: "走楼梯" },
              { en: "assembly point", zh: "集合点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "When the shaking stops, follow the signs to the stairway. Head down to the first floor. We're meeting in the parking lot out front.",
                textZh: "摇晃停了以后，跟着标志走楼梯。下到一楼。我们在前面停车场集合。",
                actionHint: "out front 就是在前面",
                frequency: "common",
              },
              {
                textEn:
                  "Wait till it stops, then use the stairs — not the elevator. Everyone meets at the lot across the street.",
                textZh: "等停了再走楼梯——不要坐电梯。所有人在街对面的停车场集合。",
                actionHint: "lot 就是 parking lot 停车场的简称",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Once it stops shakin', follow the green exit signs. Stairs down to the ground floor. Assembly point's the parking lot across the street.",
            commonMistake: {
              wrong: "Go stairs to the ground floor.",
              correct: "Take the stairs to the ground floor.",
              explanation: "“Go stairs” 不自然，应使用 “take the stairs” 更地道。",
            },
            formalityVariants: {
              casual: "Shakin' stops, follow green signs. Stairs to ground. Assembly's parking lot across street.",
              standard:
                "Once the shaking stops, follow the green exit signs. Take the stairs to the ground floor. The assembly point is in the parking lot across the street.",
              formal:
                "Following the cessation of tremors, please proceed by observing the illuminated green exit signage. Utilize the stairwells to descend to the ground level. The designated assembly point is situated in the parking facility directly opposite this building.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there an emergency shelter nearby? I don't think it's safe to go back to my room.",
            textZh: "附近有紧急避难所吗？我觉得回房间不安全。",
            casualVersion: "Emergency shelter nearby? Don't think it's safe goin' back to my room.",
            commonMistake: {
              wrong: "I think it is not safe to go back to my room.",
              correct: "I don't think it's safe to go back to my room.",
              explanation: "“I don't think...” 比 “I think... not” 更自然地表达否定意见。",
            },
            formalityVariants: {
              casual: "Shelter nearby? Not safe going back to my room.",
              standard: "Is there an emergency shelter nearby? I don't think it's safe to go back to my room.",
              formal:
                "Could you please advise if there is an emergency shelter located in the vicinity? I believe it would be prudent to refrain from returning to my accommodation at this time.",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "There's a shelter set up at the community center two blocks from here. Bring your ID and any medications you need. Water and blankets are provided.",
            textZh: "两个街区外的社区中心设了避难所。带上您的证件和需要的药物。那里提供水和毯子。",
            commonMistake: {
              wrong: "Water and blankets have there.",
              correct: "Water and blankets are provided there.",
              explanation: "表示提供某物时，常用 'are provided' 而非 'have'。",
            },
            keyPhrases: [
              { en: "shelter", zh: "避难所" },
              { en: "community center", zh: "社区中心" },
              { en: "medications", zh: "药物" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, they set up a relief center at the community hall a couple blocks away. Grab your ID and any meds you need. They've got water and blankets.",
                textZh: "对，两个街区外的社区活动中心设了救助点。带上证件和需要的药。那边有水和毯子。",
                actionHint: "relief center 就是救助中心，meds 就是药",
                frequency: "common",
              },
              {
                textEn:
                  "There's a safe spot at the rec center down the road. Bring essentials — your ID, medicine. They'll have supplies for you.",
                textZh: "沿路往前有个活动中心是安全点。带上必需品——证件、药。那边有物资供应。",
                actionHint: "rec center 是 recreation center 的缩写",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Shelter's at the community center, two blocks from here. Grab your ID, any meds. They've got water and blankets.",
            formalityVariants: {
              casual: "Shelter's at the community center, two blocks. Grab ID, meds. Water, blankets there.",
              standard:
                "There's a shelter set up at the community center two blocks from here. Bring your ID and any medications you need. Water and blankets are provided.",
              formal:
                "An emergency shelter has been established at the community center, approximately two blocks from your current location. Please ensure you bring your identification and any necessary personal medications. Essential provisions such as water and blankets will be supplied.",
            },
          },
          {
            speaker: "you",
            textEn: "Are aftershocks expected? Should I stay outdoors?",
            textZh: "还会有余震吗？我应该待在室外吗？",
            commonMistake: {
              wrong: "Will have aftershocks?",
              correct: "Are aftershocks expected?",
              explanation: "询问可能性常用 'are expected' 而非 'will have'。",
            },
            casualVersion: "Gonna be aftershocks? Should I stay outside?",
            formalityVariants: {
              casual: "Aftershocks? Stay outside?",
              standard: "Are aftershocks expected? Should I stay outdoors?",
              formal:
                "Is there an expectation of aftershocks? Furthermore, would it be advisable for me to remain outdoors?",
            },
          },
          {
            speaker: "them",
            role: "救援人员",
            textEn:
              "Yes, aftershocks are likely. Stay in open areas away from buildings. Check local alerts on your phone for updates.",
            textZh: "是的，可能会有余震。待在远离建筑物的开阔区域。查看手机上的本地警报了解最新情况。",
            keyPhrases: [
              { en: "aftershocks", zh: "余震" },
              { en: "open areas", zh: "开阔区域" },
              { en: "local alerts", zh: "本地警报" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure, expect more tremors. Stay out in the open, away from any structures. Keep an eye on your phone for updates.",
                textZh: "肯定的，还会有震感。待在空旷地方，远离建筑。注意手机上的更新。",
                actionHint: "tremors 就是余震/震感",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, there'll probably be more shaking. Don't go back inside. Check the news on your phone for the latest.",
                textZh: "是的，可能还会震。不要回室内。看手机上的新闻了解最新情况。",
                actionHint: "more shaking 直白地说还会震",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, aftershocks are likely. Stay in open areas, away from buildings. Check your phone for updates.",
            commonMistake: {
              wrong: "Check your phone's local alerts.",
              correct: "Check local alerts on your phone for updates.",
              explanation: "“在手机上查看警报”更自然，而非“查看手机的警报”。",
            },
            formalityVariants: {
              casual:
                "Yeah, aftershocks likely. Stay in open areas, away from buildings. Check your phone for updates.",
              standard:
                "Yes, aftershocks are likely. Stay in open areas away from buildings. Check local alerts on your phone for updates.",
              formal:
                "Indeed, aftershocks are highly probable. Kindly remain in open areas, maintaining a safe distance from any structures. For the latest information, please consult local alerts accessible via your mobile device.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 6. 火灾逃生 ====================
  {
    id: "emergency-fire-evacuation",
    category: "emergency",
    titleZh: "火灾逃生",
    titleEn: "Fire Evacuation",
    description: "建筑物火灾时的疏散和求助",
    otherRole: "消防员/酒店工作人员",
    otherRoleIcon: "🚒",
    flows: [
      {
        id: "basic",
        titleZh: "火灾逃生基本流程",
        titleEn: "Basic Fire Evacuation",
        description: "发现火灾、疏散、向消防员求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Fire! I can smell smoke in the hallway! What should I do?",
            textZh: "着火了！走廊里闻到烟味了！我应该怎么办？",
            culturalNote: "酒店入住时先确认最近的逃生通道位置，这是非常重要的安全习惯。",
            casualVersion: "Fire! Smell smoke in the hall! What do I do?",
            commonMistake: {
              wrong: "What to do?",
              correct: "What should I do?",
              explanation:
                "直接问“怎么办”在英文中不自然，需要补全主谓。通常会说 'What should I do?' 或 'What do I do?'",
            },
            formalityVariants: {
              casual: "Fire! Smell smoke in the hall! What do I do?!",
              standard: "Fire! I can smell smoke in the hallway! What should I do?",
              formal:
                "Excuse me, I've detected the presence of smoke in the hallway. Could you please advise me on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "酒店工作人员",
            textEn:
              "Stay low to the ground and cover your mouth with a wet cloth. Don't open the door if it's hot. Use the emergency stairwell at the end of the hall.",
            textZh: "弯腰低行，用湿布捂住嘴。如果门是热的不要开门。走走廊尽头的紧急楼梯。",
            keyPhrases: [
              { en: "stay low", zh: "弯腰低行" },
              { en: "wet cloth", zh: "湿布" },
              { en: "emergency stairwell", zh: "紧急楼梯" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Get low to the floor and cover your nose and mouth! Feel the door first — if it's hot, don't open it. Use the fire stairs at the end of the hallway.",
                textZh: "趴低！捂住口鼻！先摸一下门——如果烫就别开。走走廊尽头的消防楼梯。",
                actionHint: "feel the door 就是用手背试探门是否烫",
                frequency: "common",
              },
              {
                textEn:
                  "Crawl if you have to! Grab a wet towel for your face. Head for the staircase on the far end — don't touch the elevator!",
                textZh: "必要时爬着走！拿条湿毛巾捂脸。往最远端的楼梯走——别碰电梯！",
                actionHint: "crawl 就是爬行，far end 就是最远的那端",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Stay low, cover your mouth with something wet. Don't open the door if it's hot. Use the emergency stairs at the end of the hall.",
            commonMistake: {
              wrong: "Keep your body low to the ground.",
              correct: "Stay low to the ground.",
              explanation: "'Stay low' 是常用表达，更简洁自然，在紧急情况时指令也更清晰。",
            },
            formalityVariants: {
              casual:
                "Stay low, cover your mouth with a wet cloth. Don't open the door if it's hot. Emergency stairs at the end of the hall.",
              standard:
                "Stay low to the ground and cover your mouth with a wet cloth. Do not open the door if it feels hot. Use the emergency stairwell at the end of the hall.",
              formal:
                "It is imperative that you remain close to the ground and cover your mouth with a damp cloth. Under no circumstances should you attempt to open the door if it exhibits warmth. Please utilize the emergency stairwell located at the furthest end of the corridor.",
            },
          },
          {
            speaker: "you",
            textEn: "My friend is still in room 508. Can someone help them?",
            textZh: "我朋友还在508房间。有人能帮帮他们吗？",
            casualVersion: "My friend's still in 508. Can someone help 'em?",
            commonMistake: {
              wrong: "My friend is still in room 508. Who can help him?",
              correct: "My friend is still in room 508. Can someone help them?",
              explanation: "用 'them' 作为单数代词，指代性别不明的朋友，很自然。避免假设性别。",
            },
            formalityVariants: {
              casual: "My friend's still in 508. Can someone help 'em?",
              standard: "My friend is still in room 508. Can someone please assist them?",
              formal:
                "I must inform you that my friend remains in room 508. Would it be possible for someone to provide them with assistance?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn:
              "We're checking every floor. What room number did you say? We'll send a team up. Please move to the assembly area outside.",
            textZh: "我们在逐层检查。你说哪个房间号？我们会派一组人上去。请你到外面的集合区域。",
            keyPhrases: [
              { en: "checking every floor", zh: "逐层检查" },
              { en: "assembly area", zh: "集合区域" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're going floor by floor. What room? We'll get someone up there. You need to get outside to the meeting point.",
                textZh: "我们在逐层搜索。哪个房间？我们会派人上去。你需要到外面的集合点。",
                actionHint: "floor by floor 就是逐层",
                frequency: "common",
              },
              {
                textEn:
                  "We're sweeping the building. Which room number? I'll send a crew. Head to the staging area outside now.",
                textZh: "我们在搜索整栋楼。几号房间？我派一组人去。你现在去外面的临时集合区。",
                actionHint: "sweeping 指全面搜索，staging area 是临时集合区",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We're checking every floor. What room number? We'll send a team. Get to the assembly area outside.",
            commonMistake: {
              wrong: "What room number you said?",
              correct: "What room number did you say?",
              explanation: "提问时需要助动词 'did' 和动词原形 'say'。直接翻译中文可能省略助动词。",
            },
            formalityVariants: {
              casual:
                "We're checking every floor. Room number again? We'll send a team. Go to the assembly area outside.",
              standard:
                "We are checking every floor. Could you please confirm the room number? We will dispatch a team immediately. Kindly proceed to the designated assembly area outdoors.",
              formal:
                "We are currently conducting thorough checks on all floors. Would you be so kind as to reiterate the specific room number? We shall deploy a team to that location without delay. Your cooperation in moving to the designated assembly point outside is greatly appreciated.",
            },
          },
          {
            speaker: "you",
            textEn: "Room 508, fifth floor. They might not have heard the alarm. Please hurry.",
            textZh: "508房间，五楼。他们可能没听到警报。请快一点。",
            casualVersion: "508, fifth floor. They might've missed the alarm. Hurry, please.",
            commonMistake: {
              wrong: "They maybe didn't hear the alarm.",
              correct: "They might not have heard the alarm.",
              explanation: "'maybe' 通常用于句首或动词前，'might not have + 过去分词' 是表达过去可能性的正确结构。",
            },
            formalityVariants: {
              casual: "508, fifth floor. They might've missed the alarm. Hurry, please.",
              standard:
                "Room 508, fifth floor. It is possible they did not hear the alarm. I urge you to please expedite.",
              formal:
                "The precise location is Room 508, on the fifth floor. There is a possibility that they did not perceive the alarm. I implore you to act with the utmost urgency.",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn:
              "We're on it. Please wait at the assembly point and check in with the hotel manager. They're taking a headcount.",
            textZh: "我们马上去。请在集合点等候，和酒店经理确认签到。他们在清点人数。",
            keyPhrases: [
              { en: "we're on it", zh: "我们马上处理" },
              { en: "check in", zh: "签到确认" },
              { en: "headcount", zh: "清点人数" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Copy that, we're heading up. Go to the meeting point and find the hotel manager — they're counting heads.",
                textZh: "收到，我们上去。去集合点找酒店经理——他们在清点人数。",
                actionHint: "copy that 是收到的意思，counting heads 就是清点人数",
                frequency: "common",
              },
              {
                textEn:
                  "On it. Get yourself to safety outside. The manager is doing a roll call at the gathering spot.",
                textZh: "马上去。你先到外面安全的地方。经理在集合点做点名。",
                actionHint: "roll call 就是点名",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "We're on it. Just wait at the assembly point, check in with the manager. They're doing a headcount.",
            commonMistake: {
              wrong: "Please wait at the assembly point and sign in with the hotel manager.",
              correct: "Please wait at the assembly point and check in with the hotel manager.",
              explanation: "'check in with someone' 在口语中表示与某人报到/确认，而非狭义的 'sign in' 登记。",
            },
            formalityVariants: {
              casual: "We're on it. Wait at the assembly point, check in with the manager. They're doing a headcount.",
              standard:
                "We are addressing the situation. Please wait at the designated assembly point and register your presence with the hotel manager. They are currently conducting a headcount.",
              formal:
                "Rest assured, we are actively addressing this matter. Kindly proceed to the designated assembly point and report your presence to the hotel manager. They are in the process of conducting an accurate headcount of all individuals.",
            },
          },
          {
            speaker: "you",
            textEn: "All my belongings are still in the room. When can I go back?",
            textZh: "我的东西都还在房间里。什么时候能回去？",
            casualVersion: "All my stuff's still in the room. When can I go back?",
            commonMistake: {
              wrong: "All my stuffs are still in the room.",
              correct: "All my belongings are still in the room.",
              explanation: "'stuff' 是不可数名词，不能加 's'。用 'belongings' (可数复数) 或 'stuff' (不可数) 都可以。",
            },
            formalityVariants: {
              casual: "My stuff's still in the room. When can I go back?",
              standard: "All of my personal belongings remain in the room. When will I be permitted to return?",
              formal:
                "I regret to inform you that all of my personal effects are still located within my assigned room. Could you please advise me as to when it would be permissible for me to re-enter?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn:
              "We need to secure the building first. It could be a few hours. The hotel will provide temporary accommodations if needed.",
            textZh: "我们需要先确保建筑安全。可能需要几个小时。如果需要，酒店会提供临时住所。",
            keyPhrases: [
              { en: "secure the building", zh: "确保建筑安全" },
              { en: "temporary accommodations", zh: "临时住所" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We gotta clear the building first. Could be a couple hours. The hotel will put you up somewhere if needed.",
                textZh: "我们得先清查整栋楼。可能需要几个小时。如果需要酒店会给你安排地方住。",
                actionHint: "put you up 就是给你安排住处",
                frequency: "common",
              },
              {
                textEn:
                  "Can't let anyone back in till we've made sure it's safe. Might be a while. The hotel should arrange a room for you.",
                textZh: "确认安全前不能让任何人回去。可能要等一阵。酒店应该会给你安排房间。",
                actionHint: "might be a while 就是可能要等一段时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Gotta secure the building first. Might be a few hours. Hotel'll give us temporary places if needed.",
            commonMistake: {
              wrong: "The hotel will provide temporary living if needed.",
              correct: "The hotel will provide temporary accommodations if needed.",
              explanation: "'accommodations' 指住宿或住处，",
            },
            formalityVariants: {
              casual: "Gotta secure the building first. Could be hours. Hotel'll give us temporary spots if needed.",
              standard:
                "We must first ensure the building's safety and security. This process may require several hours. The hotel is prepared to offer temporary accommodations should they be necessary.",
              formal:
                "Our foremost priority is to ascertain the complete security of the premises. This critical process may necessitate a duration of several hours. Be advised that the hotel management stands ready to provide suitable temporary accommodations, should such provisions become requisite.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 7. 寻找走失同伴 ====================
  {
    id: "emergency-lost-companion",
    category: "emergency",
    titleZh: "寻找走失同伴",
    titleEn: "Finding Lost Companion",
    description: "在旅游景点或人群中与同伴走散后寻求帮助",
    otherRole: "工作人员/保安",
    otherRoleIcon: "🔍",
    flows: [
      {
        id: "basic",
        titleZh: "寻找走失同伴基本流程",
        titleEn: "Basic Lost Companion Search",
        description: "向工作人员描述同伴、请求广播寻人",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've been separated from my travel companion. Can you help me?",
            textZh: "打扰了，我和我的旅伴走散了。能帮帮我吗？",
            culturalNote: "出门前约定一个走散后的集合点（如入口处），并确保手机充满电。",
            casualVersion: "Hey, my travel buddy and I got separated. Can you help me out?",
            commonMistake: {
              wrong: "I separated with my companion.",
              correct: "I've been separated from my companion.",
              explanation: "“I separated with” 听起来是你主动分开，而 “I've been separated from” 表达的是被动走散。",
            },
            formalityVariants: {
              casual: "Hey, lost my friend/buddy. Can you help me out?",
              standard: "Excuse me, I've been separated from my travel companion. Can you help me?",
              formal:
                "Pardon me, I seem to have become separated from my travel companion. Might you be able to offer assistance?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Of course. Can you describe your companion? What are they wearing?",
            textZh: "当然可以。能描述一下您的同伴吗？他们穿什么衣服？",
            commonMistake: {
              wrong: "Of course. How your companion look like?",
              correct: "Of course. What does your companion look like?",
              explanation: "中式英语的直译，缺少助动词且词序错误。",
            },
            keyPhrases: [
              { en: "describe your companion", zh: "描述您的同伴" },
              { en: "what are they wearing", zh: "穿什么衣服" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, I can help. What do they look like? What do they have on?",
                textZh: "当然，我能帮忙。他们长什么样？穿了什么？",
                actionHint: "what do they have on 就是穿了什么衣服",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Tell me about them — height, hair, clothes?",
                textZh: "没问题。跟我说说——身高、头发、衣服？",
                actionHint: "直接问外貌特征",
                frequency: "common",
              },
            ],
            casualVersion: "Sure. Describe 'em for me. What're they wearing?",
            formalityVariants: {
              casual: "Sure. Describe 'em for me. What's he/she wearing?",
              standard: "Of course. Can you describe your companion? What are they wearing?",
              formal: "Certainly. Could you please provide a description of your companion, including their attire?",
            },
          },
          {
            speaker: "you",
            textEn:
              "She's a Chinese woman, about 5 foot 4, wearing a red jacket and carrying a black purse. Her name is Li Wei.",
            textZh: "她是一位中国女性，大约1米63，穿红色夹克，背黑色手提包。她叫李薇。",
            casualVersion: "She's Chinese, like 5'4\", red jacket, black purse. Name's Li Wei.",
            culturalNote: "美国常用英尺英寸来描述身高，5尺4寸大约是1米63。这很自然。",
            commonMistake: {
              wrong: "She is one meter sixty-three tall.",
              correct: "She's about 5 foot 4.",
              explanation: "美国常用英尺英寸报身高，说“one meter sixty-three”不自然。",
            },
            formalityVariants: {
              casual: "Chinese woman, 'bout 5'4\", red jacket, black purse. Name's Li Wei.",
              standard:
                "She's a Chinese woman, about 5 foot 4, wearing a red jacket and carrying a black purse. Her name is Li Wei.",
              formal:
                "She is an East Asian female, approximately one hundred sixty-three centimeters (or five feet four inches) in height, attired in a red jacket and carrying a black handbag. Her name is Li Wei.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "I can make an announcement over the PA system. Where should she go to meet you?",
            textZh: "我可以通过广播系统播报。她应该去哪里和你碰面？",
            commonMistake: {
              wrong: "I can broadcast. Where she meet you?",
              correct: "I can make an announcement. Where should she meet you?",
              explanation: "Broadcast一般指广播电台。缺少助动词'should'。",
            },
            keyPhrases: [
              { en: "announcement", zh: "广播通知" },
              { en: "PA system", zh: "广播系统" },
            ],
            alternativeExpressions: [
              {
                textEn: "I can page them on the loudspeaker. Where do you want them to meet you?",
                textZh: "我可以用广播呼叫他们。你想让他们去哪找你？",
                actionHint: "page 就是通过广播呼叫某人",
                frequency: "common",
              },
              {
                textEn: "Let me put out a call over the speakers. Where should they head to find you?",
                textZh: "我用广播通知一下。他们应该去哪找你？",
                actionHint: "put out a call 就是广播通知",
                frequency: "occasional",
              },
            ],
            casualVersion: "I can announce it over the loudspeaker. Where should she meet up with you?",
            formalityVariants: {
              casual: "I can announce it over the loudspeaker. Where should she meet up with you?",
              standard: "I can make an announcement over the PA system. Where should she go to meet you?",
              formal:
                "I am able to initiate an announcement over the public address system. Could you please specify the designated meeting point for her to rejoin you?",
            },
          },
          {
            speaker: "you",
            textEn: "Can she come to the information desk at the main entrance?",
            textZh: "她能来正门的咨询台吗？",
            casualVersion: "Have her come to the info desk at the main entrance?",
            commonMistake: {
              wrong: "Can she come here?",
              correct: "Can she come to the information desk at the main entrance?",
              explanation: "“这里”太模糊，需要明确告知具体地点。",
            },
            formalityVariants: {
              casual: "Have her come to the info desk at the main entrance?",
              standard: "Can she come to the information desk at the main entrance?",
              formal: "Would it be possible for her to report to the information desk located at the primary entrance?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Sure. I'll announce it now. In the meantime, does your companion have a phone? Maybe try calling or texting them.",
            textZh: "好的。我现在就广播。同时，您的同伴有手机吗？可以试着打电话或发短信。",
            commonMistake: {
              wrong: "I will make announcement now.",
              correct: "I'll make the announcement now.",
              explanation: "缺少冠词 \"the\" 和 \"an\"，\"will make\" 听起来不如 \"I'll make\" 自然。",
            },
            keyPhrases: [
              { en: "in the meantime", zh: "同时" },
              { en: "try calling", zh: "试着打电话" },
            ],
            alternativeExpressions: [
              {
                textEn: "Done, it's going out now. Have you tried ringing their phone? Maybe shoot them a text too.",
                textZh: "好了，正在广播。你试过打他们电话吗？也可以发个短信。",
                actionHint: "ringing their phone 就是打电话，shoot them a text 就是发短信",
                frequency: "common",
              },
              {
                textEn: "I'll make the announcement. While we wait, give their cell a try — call or text.",
                textZh: "我来广播。等的时候你打一下他们手机——打电话或发短信。",
                actionHint: "give their cell a try 就是试着打他们手机",
                frequency: "occasional",
              },
            ],
            casualVersion: "Alright. I'll announce it now. Got their phone on ya? Maybe try calling or texting.",
            formalityVariants: {
              casual: "Alright. I'll announce it now. Got their phone on ya? Maybe try calling or texting.",
              standard:
                "Sure. I'll announce it now. In the meantime, does your companion have a phone? Maybe try calling or texting them.",
              formal:
                "Certainly. I will proceed with the announcement presently. In the interim, does your companion possess a mobile device? You might consider attempting to contact them via call or text message.",
            },
          },
          {
            speaker: "you",
            textEn: "Her phone might be out of battery. That's why I came to you for help.",
            textZh: "她的手机可能没电了。所以我才来找你帮忙。",
            casualVersion: "Her phone's probably dead, that's why I came to you.",
            commonMistake: {
              wrong: "Her phone has no battery.",
              correct: "Her phone might be out of battery.",
              explanation: "“没电了”用 “out of battery” 或 “dead” 更自然，不说 “no battery” 或 “no electricity”。",
            },
            formalityVariants: {
              casual: "Her phone's probably dead, that's why I came to you.",
              standard: "Her phone might be out of battery. That's why I came to you for help.",
              formal:
                "It is possible her mobile device has lost its charge, which is precisely why I sought your assistance.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "No problem. I've made the announcement. Please wait here. If she doesn't come within 30 minutes, we can contact security to do a search.",
            textZh: "没问题。我已经广播了。请在这里等候。如果30分钟内她没来，我们可以联系保安搜寻。",
            commonMistake: {
              wrong: "I already announcement.",
              correct: "I've already made the announcement.",
              explanation: "\"announcement\" 是名词，需要动词 \"made\" 和冠词 \"the\"。",
            },
            keyPhrases: [
              { en: "wait here", zh: "在这里等候" },
              { en: "contact security", zh: "联系保安" },
              { en: "do a search", zh: "搜寻" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "All done. Hang tight here. If she doesn't show up in half an hour, we'll get security involved to help look for her.",
                textZh: "广播好了。在这等着。如果半小时她还没来，我们让保安帮忙找。",
                actionHint: "hang tight 就是等一下别走",
                frequency: "common",
              },
              {
                textEn: "The announcement went out. Sit tight. If there's no sign of her in 30, I'll radio security.",
                textZh: "广播发了。稍等。如果30分钟还没消息，我联系保安。",
                actionHint: "sit tight 就是耐心等待，radio 做动词是用对讲机联系",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem. I've put out the announcement. Just wait here. If she's not here in 30 minutes, we can call security to help find her.",
            formalityVariants: {
              casual:
                "No problem. I've put out the announcement. Just wait here. If she's not here in 30 minutes, we can call security to help find her.",
              standard:
                "No problem. I've made the announcement. Please wait here. If she doesn't come within 30 minutes, we can contact security to do a search.",
              formal:
                "Not at all. I have already broadcast the announcement. Kindly remain at this location. Should she not arrive within a thirty-minute timeframe, we can then escalate the matter by contacting security personnel to initiate a search.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 8. 被跟踪求助 ====================
  {
    id: "emergency-being-followed",
    category: "emergency",
    titleZh: "被跟踪求助",
    titleEn: "Being Followed",
    description: "感觉被人跟踪时向路人或商店寻求帮助",
    otherRole: "商店店员/路人",
    otherRoleIcon: "⚠️",
    flows: [
      {
        id: "basic",
        titleZh: "被跟踪求助基本流程",
        titleEn: "Basic Help When Being Followed",
        description: "进入商店求助、请求报警",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Please help me. I think someone has been following me for the last few blocks.",
            textZh: "请帮帮我。我觉得有人已经跟踪我好几条街了。",
            culturalNote: "如果感觉被跟踪，走进最近的商店或人多的地方，不要走偏僻小巷。",
            casualVersion: "Help! Someone's been following me for blocks.",
            commonMistake: {
              wrong: "Please help me, I feel someone follow me.",
              correct: "Please help me. I think someone has been following me.",
              explanation: "中式英文，be-ing表示持续，feel多用于身体感觉，think用于想法。",
            },
            formalityVariants: {
              casual: "Help! Someone's been following me for blocks.",
              standard: "Please help me. I think someone has been following me for the last few blocks.",
              formal: "Excuse me, I require assistance. I believe I have been followed for several blocks now.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Come inside, you're safe here. Can you point out who's following you?",
            textZh: "进来吧，你在这里是安全的。能指出谁在跟踪你吗？",
            commonMistake: {
              wrong: "Come inside, you are safe here. Can you point out who is follow you?",
              correct: "Come inside, you're safe here. Can you point out who's following you?",
              explanation: "中式英语常省略'is/are'或用错时态。'you are'和'who is follow'是常见错误。",
            },
            keyPhrases: [
              { en: "you're safe here", zh: "你在这里是安全的" },
              { en: "point out", zh: "指出" },
            ],
            alternativeExpressions: [
              {
                textEn: "Get in here, you're okay now. Which one is it? Can you show me?",
                textZh: "进来吧，你现在没事了。是哪个人？能指给我看吗？",
                actionHint: "which one is it 就是哪一个人",
                frequency: "common",
              },
              {
                textEn: "Come on in, don't worry. Do you see them? Where are they?",
                textZh: "快进来，别担心。你能看到他们吗？在哪？",
                actionHint: "对方可能直接问跟踪者在哪",
                frequency: "common",
              },
            ],
            casualVersion: "Come in, you're safe. Can you point 'em out?",
            formalityVariants: {
              casual: "Come in, you're safe. Can you point 'em out?",
              standard: "Come inside, you're safe here. Can you point out who's following you?",
              formal:
                "Please step inside; you are secure here. Would you be able to identify the individual who is following you?",
            },
          },
          {
            speaker: "you",
            textEn: "It's the man in the gray coat standing across the street. He's been behind me since the subway.",
            textZh: "就是街对面穿灰色外套的男人。他从地铁站就一直跟在我后面。",
            casualVersion: "That guy in the gray coat, across the street. He's been behind me since the subway.",
            commonMistake: {
              wrong: "It's the man wearing gray coat in across the street.",
              correct: "It's the man in the gray coat across the street.",
              explanation: "“wear”是动词，描述着装用“in a/the [color] [clothing item]”。",
            },
            formalityVariants: {
              casual: "That guy in the gray coat, across the street. He's been behind me since the subway.",
              standard:
                "It's the man in the gray coat standing across the street. He's been behind me since the subway.",
              formal:
                "It is the gentleman in the gray coat positioned directly across the street. He has been following me since my departure from the subway station.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I see him. I'm going to call the police right now. Stay inside and don't leave alone. Would you like some water?",
            textZh: "我看到他了。我现在就报警。待在店里，不要一个人出去。你要喝点水吗？",
            commonMistake: {
              wrong: "I will call the police now.",
              correct: "I'll call the police right now.",
              explanation: "中文里“现在”可以直接说，但英文“right now”更强调立刻。",
            },
            keyPhrases: [
              { en: "call the police", zh: "报警" },
              { en: "stay inside", zh: "待在店里" },
              { en: "don't leave alone", zh: "不要一个人出去" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I see the guy. I'm dialing the cops now. Don't go out there by yourself. Want some water or anything?",
                textZh: "嗯，我看到那个人了。我现在就打电话叫警察。别一个人出去。要喝水吗？",
                actionHint: "dialing the cops 就是打电话报警的口语说法",
                frequency: "common",
              },
              {
                textEn:
                  "I've got eyes on him. Let me get the police on the line. Stay right here, okay? You need anything?",
                textZh: "我盯着他呢。我来打电话叫警察。就待在这，好吗？你需要什么吗？",
                actionHint: "I've got eyes on him 就是我看到他了/在盯着",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got him. Calling cops now. Stay put, don't leave alone. Want some water?",
            formalityVariants: {
              casual: "Got him. Calling cops now. Stay put, don't leave alone. Want some water?",
              standard:
                "I see him. I'm going to call the police right now. Stay inside and don't leave alone. Would you like some water?",
              formal:
                "I have located him. I shall contact law enforcement immediately. Please remain indoors and do not venture out unsupervised. May I offer you some water?",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. Can I use your phone? Mine is almost dead.",
            textZh: "太感谢了。我能用一下你的电话吗？我的手机快没电了。",
            casualVersion: "Thanks a lot. Can I use your phone? Mine's almost dead.",
            commonMistake: {
              wrong: "My phone is no power.",
              correct: "My phone is almost dead.",
              explanation: '英文说手机快没电了通常用 "dead" 或 "dying"。',
            },
            formalityVariants: {
              casual: "Thanks a lot. Can I use your phone? Mine's almost dead.",
              standard: "Thank you so much. Can I use your phone? Mine is almost dead.",
              formal:
                "I am deeply grateful. May I kindly request to use your telephone? My own device's battery is critically low.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course. The police said they'll send someone over in about 10 minutes. You can wait here as long as you need.",
            textZh: "当然可以。警察说大约10分钟派人过来。你需要在这里等多久都可以。",
            commonMistake: {
              wrong: "Police said...",
              correct: "The police said...",
              explanation: "“Police”在英文中通常需要加定冠词“the”。",
            },
            keyPhrases: [
              { en: "send someone over", zh: "派人过来" },
              { en: "as long as you need", zh: "需要多久都可以" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing. Cops said they'll be here in about 10. Hang out as long as you want.",
                textZh: "没问题。警察说大约10分钟到。你想待多久都行。",
                actionHint: "cops 就是警察的口语说法",
                frequency: "common",
              },
              {
                textEn: "Of course. The police are sending a unit, about 10 minutes out. Feel free to stay.",
                textZh: "当然可以。警察正在派人，大约10分钟。随便待。",
                actionHint: "sending a unit 就是派一组警员",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure. Cops said someone'll be here in like 10. Wait as long as you need.",
            formalityVariants: {
              casual: "Sure. Cops said someone'll be here in like 10. Wait as long as you need.",
              standard:
                "Of course. The police said they'll send someone over in about 10 minutes. You can wait here as long as you need.",
              formal:
                "Certainly. Law enforcement has indicated they will dispatch an officer within approximately ten minutes. You are welcome to remain here for as long as you require.",
            },
          },
          {
            speaker: "you",
            textEn: "I really appreciate your help. I was so scared.",
            textZh: "真的非常感谢你的帮助。我刚才很害怕。",
            casualVersion: "Seriously, thanks for your help. I was so freaked out.",
            commonMistake: {
              wrong: "I really thank for your help.",
              correct: "I really appreciate your help.",
              explanation: '"appreciate" 后直接接名词或代词，"thank" 后接人。',
            },
            formalityVariants: {
              casual: "Seriously, thanks for your help. I was so freaked out.",
              standard: "I really appreciate your help. I was so scared.",
              formal: "I am profoundly grateful for your assistance. I confess I was quite distressed.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Don't worry about it. When the police arrive, they'll want a description. In the future, you can also use your phone to share your live location with a friend.",
            textZh: "别客气。警察到了会要你描述情况。以后你也可以用手机和朋友分享实时位置。",
            commonMistake: {
              wrong: "Police will ask you to describe.",
              correct: "The police will ask you for a description.",
              explanation: "“description”是名词，通常用“ask for a description”或“ask you to describe something”。",
            },
            keyPhrases: [
              { en: "description", zh: "描述" },
              { en: "share your live location", zh: "分享实时位置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's all good. The cops will ask you what the person looked like. Next time, share your location with someone on your phone in real time.",
                textZh: "没事的。警察会让你描述那个人的样子。下次用手机实时分享你的位置给朋友。",
                actionHint: "it's all good 就是没事/别担心",
                frequency: "common",
              },
              {
                textEn:
                  "No worries. When the officers get here, they'll need details. Pro tip: use location sharing on your phone when you're out alone.",
                textZh: "别客气。警察来了会要你提供细节。小建议：一个人出门时用手机分享位置。",
                actionHint: "pro tip 就是实用小建议",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No worries. Cops'll want a description when they get here. Next time, share your live location with a friend.",
            culturalNote: "在美国警方对案件的描述非常重视，包括嫌疑人的外貌特征，是协助警方破案的重要信息。",
            formalityVariants: {
              casual:
                "No worries. Cops'll want a description when they get here. Next time, share your live location with a friend.",
              standard:
                "Don't worry about it. When the police arrive, they'll want a description. In the future, you can also use your phone to share your live location with a friend.",
              formal:
                "Please do not be concerned. Upon the arrival of law enforcement, they will require a detailed description. Moving forward, I recommend utilizing your mobile device to share your real-time location with a trusted acquaintance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 9. 食物中毒 ====================
  {
    id: "emergency-food-poisoning",
    category: "emergency",
    titleZh: "食物中毒",
    titleEn: "Food Poisoning",
    description: "食物中毒后在国外就医，描述症状和求助",
    otherRole: "医生/护士",
    otherRoleIcon: "🤢",
    flows: [
      {
        id: "basic",
        titleZh: "食物中毒就医流程",
        titleEn: "Seeking Medical Help for Food Poisoning",
        description: "描述症状、回答医生问题、获取治疗",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I think I have food poisoning. I've been vomiting and having diarrhea since last night.",
            textZh: "我觉得我食物中毒了。从昨晚开始一直在呕吐和腹泻。",
            casualVersion: "Pretty sure I got food poisoning. Been throwing up and having diarrhea since last night.",
            commonMistake: {
              wrong: "I feel I have food poisoning.",
              correct: "I think I have food poisoning.",
              explanation: "\"feel\"更侧重身体感觉，\"think\"更侧重想法。",
            },
            formalityVariants: {
              casual: "Think I got food poisoning. Been throwing up and having diarrhea since last night.",
              standard: "I think I have food poisoning. I've been throwing up and having diarrhea since last night.",
              formal: "I suspect I may be experiencing food poisoning. I have been experiencing vomiting and diarrhea since yesterday evening.",
            },
            culturalNote: "就医时直接说症状即可，不用不好意思。医生需要准确信息来治疗。",
          },
          {
            speaker: "them",
            role: "医生",
            textEn: "I'm sorry to hear that. What did you eat before the symptoms started? Do you have a fever?",
            textZh: "很遗憾。症状开始前你吃了什么？有没有发烧？",
            casualVersion: "Oh, shoot. What'd you eat before this started? Got a fever?",
            commonMistake: {
              wrong: "Do you have fever?",
              correct: "Do you have a fever?",
              explanation: "\"fever\"是可数名词，前面需要加不定冠词\"a\"。",
            },
            formalityVariants: {
              casual: "Man, that sucks. What'd you eat before you got sick? Got a fever?",
              standard: "I'm sorry to hear that. What did you eat before the symptoms started? Do you have a fever?",
              formal: "I'm very sorry to hear you're unwell. Could you please describe what you consumed prior to the onset of your symptoms? Are you currently experiencing a fever?",
            },
            keyPhrases: [
              { en: "symptoms started", zh: "症状开始" },
              { en: "fever", zh: "发烧" },
            ],
            alternativeExpressions: [
              {
                textEn: "That sounds rough. What'd you eat before you started feeling sick? Running a temperature?",
                textZh: "听起来很难受。你感觉不舒服之前吃了什么？有没有发烧？",
                actionHint: "running a temperature 就是发烧的口语说法",
                frequency: "common",
              },
              {
                textEn: "Okay, talk me through what you had to eat. Any fever? When did it start?",
                textZh: "好的，跟我说说你吃了什么。发烧吗？什么时候开始的？",
                actionHint: "talk me through 就是详细说给我听",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I had seafood at a restaurant yesterday afternoon. I've been feeling dizzy and I have stomach cramps.",
            textZh: "昨天下午我在餐厅吃了海鲜。一直感觉头晕，胃也痉挛。",
            casualVersion: "Ate seafood at a restaurant yesterday afternoon. Been dizzy and my stomach's been cramping too.",
            commonMistake: {
              wrong: "My stomach is pain.",
              correct: "I have stomach pain. / My stomach hurts.",
              explanation: "\"pain\"是名词，不能直接作谓语，或用\"hurt\"动词。",
            },
            formalityVariants: {
              casual: "Had seafood yesterday afternoon. Been dizzy and my stomach's cramping.",
              standard: "I had seafood at a restaurant yesterday afternoon. I've also been feeling dizzy and have stomach cramps.",
              formal: "I consumed seafood at a restaurant yesterday afternoon. Additionally, I have been experiencing dizziness and abdominal cramping.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "It sounds like food poisoning. I'm going to start you on an IV drip for dehydration and give you some anti-nausea medication.",
            textZh: "听起来像食物中毒。我会先给你打点滴防脱水，再给你一些止吐药。",
            casualVersion: "Sounds like food poisoning. I'll get you hooked up to an IV for the dehydration and give you some anti-nausea meds.",
            commonMistake: {
              wrong: "I will give you an IV.",
              correct: "I'll give you an IV drip. / I'll put you on an IV.",
              explanation: "\"give an IV drip\"或\"put on an IV\"更自然，表示打点滴。",
            },
            formalityVariants: {
              casual: "Yeah, sounds like food poisoning. I'll get you on an IV for dehydration and some meds for the nausea.",
              standard: "It sounds like food poisoning. I'll give you an IV drip for dehydration and some anti-nausea medication.",
              formal: "Based on your symptoms, it appears to be food poisoning. I will administer an intravenous drip for rehydration and provide antiemetic medication.",
            },
            keyPhrases: [
              { en: "IV drip", zh: "打点滴" },
              { en: "dehydration", zh: "脱水" },
              { en: "anti-nausea medication", zh: "止吐药" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, classic food poisoning. Let's get you on some fluids through an IV and something to stop the nausea.",
                textZh: "嗯，典型的食物中毒。先给你挂上点滴补水，再给你一些止吐的药。",
                actionHint: "get you on some fluids 就是给你补液",
                frequency: "common",
              },
              {
                textEn:
                  "That's definitely food poisoning. I'm hooking you up to an IV for hydration and giving you something for the vomiting.",
                textZh: "这确实是食物中毒。我给你接上点滴补水，再给你开点止吐药。",
                actionHint: "hooking you up to an IV 就是接上点滴",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Do I need to stay in the hospital? I have travel insurance — here's my card.",
            textZh: "我需要住院吗？我有旅行保险——这是我的保险卡。",
            culturalNote: "在美国看病，尤其在急诊时，最好主动出示保险卡。",
            casualVersion: "Gotta stay in the hospital? Got travel insurance — here's my card.",
            commonMistake: {
              wrong: "Here is my insurance card.",
              correct: "Here's my insurance card.",
              explanation: "口语中\"Here's\"比\"Here is\"更常用、更自然。",
            },
            formalityVariants: {
              casual: "Do I have to stay here? Got my travel insurance card right here.",
              standard: "Do I need to stay in the hospital? I have travel insurance — here's my card.",
              formal: "Will hospitalization be necessary? I possess travel insurance; my policy card is attached.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Probably not, but I want to keep you here for a few hours for observation. Drink clear fluids and avoid solid food for 24 hours.",
            textZh: "可能不需要，但我想留你观察几个小时。喝清流质，24小时内不要吃固体食物。",
            casualVersion: "Probably not, but I wanna keep an eye on you for a few hours. Just drink clear stuff and no solid food for 24 hours.",
            commonMistake: {
              wrong: "Drink clear liquid.",
              correct: "Drink clear fluids.",
              explanation: "医疗语境中，\"fluid\"更常用作液体（如生理盐水、果汁等）的统称。",
            },
            formalityVariants: {
              casual: "Nah, probably not, but I wanna watch you for a bit. Clear liquids only, no solids for 24 hours.",
              standard: "Probably not, but I want to keep you here for a few hours for observation. Drink clear fluids and avoid solid food for 24 hours.",
              formal: "Hospitalization is likely unnecessary; however, I would prefer to keep you under observation for several hours. Please consume only clear liquids and refrain from solid food intake for the next 24 hours.",
            },
            keyPhrases: [
              { en: "observation", zh: "观察" },
              { en: "clear fluids", zh: "清流质" },
              { en: "solid food", zh: "固体食物" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Probably not, but I want to keep an eye on you for a few hours. Stick to liquids — water, broth, that kind of thing. No real food for a day.",
                textZh: "应该不用，但我想观察你几个小时。只喝流质——水、清汤那些。一天内不要吃固体食物。",
                actionHint: "keep an eye on you 就是观察你",
                frequency: "common",
              },
              {
                textEn:
                  "You should be fine, but let's watch you for a bit. Sip water and clear stuff only. Hold off on eating anything solid for 24 hours.",
                textZh: "你应该没事，但让我们观察一下。只小口喝水和清流质。24小时内别吃固体。",
                actionHint: "hold off on 就是暂时不要做某事",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "When will I feel better? I have a flight the day after tomorrow.",
            textZh: "什么时候会好一些？我后天有航班。",
            casualVersion: "When am I gonna feel better? Got a flight the day after tomorrow.",
            commonMistake: {
              wrong: "I have flight the day after tomorrow.",
              correct: "I have a flight the day after tomorrow.",
              explanation: "\"flight\"是可数名词，前面需要加不定冠词\"a\"。",
            },
            formalityVariants: {
              casual: "When'll I feel better? Gotta flight the day after tomorrow.",
              standard: "When will I feel better? I have a flight the day after tomorrow.",
              formal: "When might I anticipate an improvement in my condition? I have a scheduled flight the day after tomorrow.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Most food poisoning clears up within 48 hours. Rest, stay hydrated, and take the medication I prescribe. You should be fine to fly.",
            textZh: "大多数食物中毒48小时内会好转。休息、多喝水、按我开的药吃。你应该可以坐飞机。",
            casualVersion: "Usually, food poisoning clears up in 48 hours. Just rest up, drink plenty of fluids, and take your meds. You should be good to fly.",
            commonMistake: {
              wrong: "Take the medicine I open.",
              correct: "Take the medication I prescribe.",
              explanation: "“开药”对应的英文是“prescribe medication”，而不是“open medicine”。",
            },
            formalityVariants: {
              casual: "Most food poisoning's gone in 48. Rest, fluids, take your meds. You'll be good to fly.",
              standard: "Most food poisoning clears up within 48 hours. Rest, stay hydrated, and take the medication I prescribe. You should be fine to fly.",
              formal: "The majority of food poisoning cases typically resolve within 48 hours. Please ensure adequate rest, maintain hydration, and adhere to the prescribed medication regimen. You should be medically cleared for air travel.",
            },
            keyPhrases: [
              { en: "clears up", zh: "好转" },
              { en: "stay hydrated", zh: "多喝水" },
              { en: "prescribe", zh: "开处方" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You should bounce back within a couple days. Get lots of rest, keep drinking water, and take the meds I give you. Flying should be no problem.",
                textZh: "你应该两天内就能恢复。多休息，多喝水，吃我给你开的药。坐飞机没问题。",
                actionHint: "bounce back 就是恢复",
                frequency: "common",
              },
              {
                textEn:
                  "These things usually run their course in 48 hours. Take it easy, hydrate, and follow the prescription. You'll be good to fly.",
                textZh: "这种情况通常48小时会自行好转。放松、补水、按处方吃药。坐飞机没问题的。",
                actionHint: "run their course 就是自然发展直到结束",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 10. 过敏反应 ====================
  {
    id: "emergency-allergic-reaction",
    category: "emergency",
    titleZh: "过敏反应",
    titleEn: "Allergic Reaction",
    description: "突发严重过敏反应时紧急求助",
    otherRole: "急诊医生/同行者",
    otherRoleIcon: "💊",
    flows: [
      {
        id: "basic",
        titleZh: "过敏反应紧急处理",
        titleEn: "Emergency Allergic Reaction",
        description: "描述过敏症状、使用EpiPen、急诊就医",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I'm having an allergic reaction. My throat is swelling and I can't breathe well. I'm allergic to peanuts.",
            textZh: "我过敏发作了。我的喉咙在肿，呼吸困难。我对花生过敏。",
            culturalNote: "如果你有严重过敏史，随身携带EpiPen（肾上腺素笔）和过敏卡片是救命的习惯。",
            casualVersion: "Got an allergic reaction. My throat's swelling, can't breathe well. Peanuts.",
            commonMistake: {
              wrong: "My throat swells and I can't breathe well.",
              correct: "My throat is swelling and I can't breathe well.",
              explanation: "描述进行中的身体症状要用现在进行时。",
            },
            formalityVariants: {
              casual: "Got an allergic reaction. Throat's swelling, can't breathe. Peanuts.",
              standard:
                "I'm having an allergic reaction. My throat is swelling and I can't breathe well. I'm allergic to peanuts.",
              formal:
                "I appear to be experiencing an allergic reaction. My throat is constricting, and I am finding it difficult to breathe. My allergy is to peanuts.",
            },
          },
          {
            speaker: "them",
            role: "同行者",
            textEn: "Oh no! Do you have an EpiPen? Where is it? I'm calling 911 right now!",
            textZh: "天哪！你有肾上腺素笔吗？在哪里？我现在就打911！",
            culturalNote: "美国紧急求助直拨911，不需加区号",
            commonMistake: {
              wrong: "I call 911 now.",
              correct: "I'm calling 911 right now!",
              explanation: "表达正在进行的动作，用现在进行时更自然。",
            },
            keyPhrases: [
              { en: "EpiPen", zh: "肾上腺素笔" },
              { en: "calling 911", zh: "打911" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh God! You got your Epi? Where is it? I'm calling for help right now!",
                textZh: "天哪！你有肾上腺素笔吗？在哪？我现在就打电话叫救护车！",
                actionHint: "Epi 是 EpiPen 的简称",
                frequency: "common",
              },
              {
                textEn: "Okay okay, do you have your allergy shot? Tell me where it is! I'm getting 911 on the phone!",
                textZh: "好好，你有过敏针吗？告诉我在哪！我在打911！",
                actionHint: "allergy shot 在这里指 EpiPen",
                frequency: "occasional",
              },
            ],
            casualVersion: "Oh no! Got an EpiPen? Where is it? Calling 911 now!",
            formalityVariants: {
              casual: "Oh no! EpiPen? Where? Calling 911!",
              standard: "Oh no! Do you have an EpiPen? Where is it? I'm calling 911 right now!",
              formal:
                "Oh dear! Do you possess an EpiPen? Could you indicate its location? I am contacting emergency services immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "It's in my bag, the side pocket. The blue case. Please inject it into my outer thigh.",
            textZh: "在我包里，侧袋。蓝色盒子。请打在我的大腿外侧。",
            casualVersion: "Bag, side pocket. Blue case. Inject it in my outer thigh, please.",
            commonMistake: {
              wrong: "It's in my bag, side pocket. Blue case. Please inject to my outer thigh.",
              correct: "It's in my bag, the side pocket. The blue case. Please inject it into my outer thigh.",
              explanation: '"Inject" 通常后面接"it/them" (要注射的物品) 和 "into" (位置)。',
            },
            formalityVariants: {
              casual: "Bag, side pocket. Blue case. Outer thigh.",
              standard: "It's in my bag, the side pocket. The blue case. Please inject it into my outer thigh.",
              formal:
                "You will find it within my bag, specifically in the side pocket. It is enclosed in a blue case. Kindly administer the injection into my outer thigh.",
            },
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn: "You're at the ER now. The EpiPen helped, but we need to monitor you. What exactly did you eat?",
            textZh: "你已经到急诊室了。肾上腺素笔起了作用，但我们需要观察你。你到底吃了什么？",
            keyPhrases: [
              { en: "ER", zh: "急诊室" },
              { en: "monitor you", zh: "观察你" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're in the emergency room. The Epi kicked in, which is good, but we still need to watch you. What did you eat exactly?",
                textZh: "你在急诊室了。肾上腺素起效了，这是好事，但我们还需要观察。你到底吃了什么？",
                actionHint: "kicked in 就是（药物）起效了",
                frequency: "common",
              },
              {
                textEn:
                  "Good news, the EpiPen did its job. But you're staying here so we can keep tabs on you. Tell me what you consumed.",
                textZh: "好消息，肾上腺素笔起作用了。但你要留在这里我们好观察。告诉我你吃了什么。",
                actionHint: "keep tabs on you 就是持续观察你",
                frequency: "occasional",
              },
            ],
            casualVersion: "You're in the ER. EpiPen helped, but we gotta monitor you. What'd you eat?",
            commonMistake: {
              wrong: "What exactly you ate?",
              correct: "What exactly did you eat?",
              explanation: "疑问句语序，助动词'did'要放在主语前面。",
            },
            formalityVariants: {
              casual: "In the ER now. EpiPen worked, but we gotta watch you. What'd you eat?",
              standard:
                "You're at the ER now. The EpiPen helped, but we need to monitor you. What exactly did you eat?",
              formal:
                "You have arrived at the emergency room. The EpiPen has proven effective, however, we must continue to observe your condition. Could you please specify precisely what you consumed?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I ordered a salad at the restaurant. I told them no peanuts, but I think there was peanut oil in the dressing.",
            textZh: "我在餐厅点了沙拉。我说了不要花生，但我觉得沙拉酱里有花生油。",
            casualVersion: "Ordered a salad. Told 'em no peanuts, but I think the dressing had peanut oil.",
            commonMistake: {
              wrong: "I told them don't have peanuts.",
              correct: "I told them no peanuts.",
              explanation: "'told someone no [item]' 是表示拒绝某物更自然的说法。",
            },
            formalityVariants: {
              casual: "Got a salad. Said no peanuts, but dressing probably had peanut oil.",
              standard:
                "I ordered a salad at the restaurant. I told them no peanuts, but I think there was peanut oil in the dressing.",
              formal:
                "I had ordered a salad at the establishment. I specifically requested the exclusion of peanuts, however, I suspect the dressing contained peanut oil.",
            },
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn:
              "That can happen. We're giving you antihistamines and steroids through the IV. We need to observe you for at least 4 hours in case of a secondary reaction.",
            textZh: "这种情况会发生。我们正在通过点滴给你抗组胺药和类固醇。至少要观察4小时以防二次反应。",
            commonMistake: {
              wrong: "We are giving you drugs.",
              correct: "We're giving you antihistamines and steroids.",
              explanation: "在医疗语境中，'drugs'常指非法药物，用'meds'或具体药物名称更合适。",
            },
            keyPhrases: [
              { en: "antihistamines", zh: "抗组胺药" },
              { en: "steroids", zh: "类固醇" },
              { en: "secondary reaction", zh: "二次反应" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It happens. We're pushing some allergy meds and steroids through your IV. You need to stay for at least 4 hours — sometimes the reaction comes back.",
                textZh: "这种事会发生。我们正在通过点滴给你抗过敏药和类固醇。你至少要留4个小时——有时反应会反复。",
                actionHint: "pushing meds 是医疗口语，指通过IV给药",
                frequency: "common",
              },
              {
                textEn:
                  "Not uncommon with hidden allergens. I'm giving you antihistamines and a steroid drip. We watch you 4 hours minimum in case it flares up again.",
                textZh: "隐藏的过敏原导致这种事不少见。我给你抗组胺药和类固醇点滴。至少观察4小时以防再发作。",
                actionHint: "flares up 就是突然发作/加重",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, that happens. We're giving you antihistamines and steroids through an IV. Gotta watch you for at least 4 hours for a secondary reaction.",
            formalityVariants: {
              casual:
                "Yup, that happens. Getting you antihistamines, steroids via IV. Gotta watch you for 4 hours for any secondary reaction.",
              standard:
                "That can happen. We're giving you antihistamines and steroids through the IV. We need to observe you for at least 4 hours in case of a secondary reaction.",
              formal:
                "Indeed, such occurrences are not uncommon. We are currently administering antihistamines and corticosteroids intravenously. It is imperative that we monitor you for a minimum of four hours to preclude any potential secondary reactions.",
            },
          },
          {
            speaker: "you",
            textEn: "Will I be okay? Do I need to be admitted?",
            textZh: "我会没事吧？需要住院吗？",
            casualVersion: "I'll be okay? Need to be admitted?",
            commonMistake: {
              wrong: "Will I okay?",
              correct: "Will I be okay?",
              explanation: "'okay' 是形容词，前面需要系动词'be'。",
            },
            formalityVariants: {
              casual: "I'll be okay? Admitted?",
              standard: "Will I be okay? Do I need to be admitted?",
              formal: "Will my condition stabilize? Is hospital admission requisite?",
            },
          },
          {
            speaker: "them",
            role: "急诊医生",
            textEn:
              "You're responding well. You likely won't need to be admitted. I'll prescribe a new EpiPen and some antihistamines. Always carry your allergy card when eating out abroad.",
            textZh:
              "你恢复得不错。可能不需要住院。我会给你开新的肾上腺素笔和一些抗组胺药。在国外吃饭一定要随身带过敏卡。",
            culturalNote: "在美国有严重过敏症的人通常会随身携带过敏卡或佩戴过敏手环，标明过敏原，方便紧急情况下的救治。",
            keyPhrases: [
              { en: "responding well", zh: "恢复得不错" },
              { en: "allergy card", zh: "过敏卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're doing great. Probably won't need to admit you. I'll write you a script for a new EpiPen and antihistamines. Make sure you always have your allergy info on you when eating out.",
                textZh:
                  "你恢复得很好。应该不需要住院。我给你开新的肾上腺素笔和抗组胺药的处方。在外面吃饭一定要随身带过敏信息。",
                actionHint: "write you a script 就是给你开处方",
                frequency: "common",
              },
              {
                textEn:
                  "Looking good. You can probably go home. I'll get you a new Epi and some Benadryl to carry. And seriously, get an allergy card — it could save your life.",
                textZh:
                  "看起来不错。你大概可以回去了。我给你配新的肾上腺素笔和苯海拉明随身带。说真的，弄一张过敏卡——能救命。",
                actionHint: "Benadryl 是常见的抗过敏药品牌名",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You're responding well. Probably won't need admitting. I'll prescribe a new EpiPen and some antihistamines. Always carry your allergy card when eating out abroad.",
            commonMistake: {
              wrong: "Always bring your allergy card.",
              correct: "Always carry your allergy card.",
              explanation: "'carry' 指随身携带，'bring' 指带来某个地方，语境不同。",
            },
            formalityVariants: {
              casual:
                "You're doing good. Won't need to stay. I'll write you a new EpiPen and antihistamines. Keep that allergy card on you when eating out overseas.",
              standard:
                "You're responding well. You likely won't need to be admitted. I'll prescribe a new EpiPen and some antihistamines. Always carry your allergy card when eating out abroad.",
              formal:
                "Your response to treatment is favorable. It is unlikely that hospital admission will be required. I will issue prescriptions for a replacement EpiPen and a course of antihistamines. It is strongly advised to always retain your allergy identification card when dining internationally.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 11. 中暑 ====================
  {
    id: "emergency-heat-stroke",
    category: "emergency",
    titleZh: "中暑",
    titleEn: "Heat Stroke",
    description: "在炎热天气中出现中暑症状时寻求帮助",
    otherRole: "急救人员/路人",
    otherRoleIcon: "☀️",
    flows: [
      {
        id: "basic",
        titleZh: "中暑急救流程",
        titleEn: "Heat Stroke First Aid",
        description: "识别中暑症状、求助、降温处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I don't feel well. I'm very dizzy and my skin feels really hot. I think it might be heat stroke.",
            textZh: "我感觉不太好。很头晕，皮肤摸起来很烫。我觉得可能是中暑了。",
            culturalNote: "中暑很危险，核心体温过高可能致命。如果看到有人皮肤发红发烫、意识模糊，立即拨打急救电话。",
            casualVersion:
              "Ugh, I don't feel so good. Super dizzy and my skin's like, burning up. Think it's heat stroke.",
            commonMistake: {
              wrong: "I feel not good.",
              correct: "I don't feel well.",
              explanation:
                "中文的“感觉不好”常被直译为“feel not good”，而地道的表达是“don't feel well”或“not feeling well”。",
            },
            formalityVariants: {
              casual: "Ugh, not feeling good. Super dizzy, skin's burning. Think it's heat stroke.",
              standard:
                "I don't feel well. I'm very dizzy and my skin feels really hot. I think it might be heat stroke.",
              formal:
                "I'm not feeling entirely well. I'm experiencing significant dizziness, and my skin feels remarkably warm to the touch. I suspect I may be suffering from heat stroke.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Let's get you into the shade right away. Here, sit down on this bench. I'll get you some water.",
            textZh: "我们赶紧到阴凉处。来，坐在这个长椅上。我去给你拿水。",
            keyPhrases: [
              { en: "into the shade", zh: "到阴凉处" },
              { en: "sit down", zh: "坐下" },
            ],
            alternativeExpressions: [
              {
                textEn: "Come over here, out of the sun. Sit down, take it easy. I'll grab you some water.",
                textZh: "过来这边，别晒太阳了。坐下，放松。我去给你拿水。",
                actionHint: "out of the sun 就是别晒了",
                frequency: "common",
              },
              {
                textEn:
                  "Whoa, you don't look good. Let's get you somewhere cool. Here, have a seat. I'll find you something to drink.",
                textZh: "哎，你脸色不好。我们找个凉快的地方。来，坐这。我给你找点喝的。",
                actionHint: "you don't look good 就是你看起来不太好",
                frequency: "common",
              },
            ],
            casualVersion:
              "C'mon, let's get you in the shade, like, now. Sit here on this bench. I'll grab some water.",
            formalityVariants: {
              casual: "Quick, let's get you to the shade. Sit here. I'll grab some water.",
              standard:
                "Let's get you into the shade right away. Here, sit down on this bench. I'll get you some water.",
              formal:
                "We should move you into a shaded area immediately. Please, have a seat on this bench. I will retrieve some water for you.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I feel like I might faint. I've been walking in the sun for hours.",
            textZh: "谢谢。我感觉可能要晕倒了。我在太阳下走了好几个小时。",
            formalityVariants: {
              casual: "Thanks. Feel like I'm gonna pass out. Been walking in the sun for hours.",
              standard: "Thank you. I feel like I might faint. I've been walking in the sun for hours.",
              formal: "Thank you. I'm experiencing presyncopal symptoms. I have been exposed to direct sunlight for an extended period.",
            },
            casualVersion: "Thanks. Seriously, I feel like I'm gonna pass out. Been walking in the sun for hours.",
            commonMistake: {
              wrong: "I feel I might faint.",
              correct: "I feel like I might faint.",
              explanation: "表达“我感觉我可能会…”时，常用“I feel like I might…”而不是省略“like”。",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn:
              "Your body temperature is very high. We need to cool you down. I'm placing cold packs on your neck and armpits. Drink this water slowly.",
            textZh: "你的体温非常高。我们需要给你降温。我把冰袋放在你的脖子和腋下。慢慢喝水。",
            keyPhrases: [
              { en: "cool you down", zh: "给你降温" },
              { en: "cold packs", zh: "冰袋" },
              { en: "drink slowly", zh: "慢慢喝" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your temp is way up. We gotta bring it down. I'm putting ice packs on your neck and underarms. Take small sips of water.",
                textZh: "你体温太高了。我们得降下来。我把冰袋放在你脖子和腋下。小口小口喝水。",
                actionHint: "your temp is way up 就是你体温太高了",
                frequency: "common",
              },
              {
                textEn:
                  "You're burning up. Let me get some cold compresses on you — neck, armpits. Don't chug the water, just sip it.",
                textZh: "你烧得厉害。我给你敷冷敷——脖子、腋下。别大口灌水，小口喝。",
                actionHint: "burning up 就是发烧很严重，chug 就是大口猛灌",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You're really hot. Gotta cool you down. I'm putting cold packs on your neck and armpits. Sip this water, slow.",
            formalityVariants: {
              casual: "You're super hot. Gotta cool you down. Cold packs on your neck/armpits. Sip this water, slow.",
              standard:
                "Your body temperature is very high. We need to cool you down. I'm placing cold packs on your neck and armpits. Drink this water slowly.",
              formal:
                "Your core body temperature is notably elevated. It is imperative that we initiate cooling measures. I am applying cold packs to your cervical and axillary regions. Please consume this water gradually.",
            },
          },
          {
            speaker: "you",
            textEn: "I feel nauseous. Is heat stroke serious?",
            textZh: "我想吐。中暑严重吗？",
            casualVersion: "Ugh, I feel sick to my stomach. Is heat stroke like, really serious?",
            commonMistake: {
              wrong: "I feel disgusting.",
              correct: "I feel nauseous.",
              explanation: "“disgusting”形容事物令人恶心，而不是自己感觉恶心想吐。",
            },
            formalityVariants: {
              casual: "Ugh, I feel sick. Is heat stroke serious?",
              standard: "I feel nauseous. Is heat stroke serious?",
              formal: "I am experiencing nausea. Is heat stroke considered a grave condition?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn:
              "Heat stroke can be serious if untreated. We should take you to the hospital to be safe. Are you traveling alone?",
            textZh: "中暑如果不治疗会很严重。为安全起见我们应该送你去医院。你是一个人旅行吗？",
            commonMistake: {
              wrong: "You are alone traveling?",
              correct: "Are you traveling alone?",
              explanation: "疑问句中 be 动词在前。",
            },
            keyPhrases: [
              { en: "untreated", zh: "不治疗" },
              { en: "to be safe", zh: "为安全起见" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, heat stroke is no joke. We should get you to a hospital just in case. Are you here by yourself?",
                textZh: "是的，中暑可不能开玩笑。为了保险我们应该送你去医院。你是自己来的吗？",
                actionHint: "no joke 就是很严重不能当儿戏",
                frequency: "common",
              },
              {
                textEn:
                  "It can get dangerous fast if we don't treat it. I think you need to go to the ER. You traveling solo?",
                textZh: "不处理的话会很快变危险。我觉得你需要去急诊。你一个人旅行的吗？",
                actionHint: "traveling solo 就是一个人旅行",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, heat stroke can be serious if you don't treat it. We should probably get you to a hospital, just to be safe. You traveling by yourself?",
            formalityVariants: {
              casual:
                "Heat stroke's serious if you don't treat it. We should hit the hospital, just in case. You alone?",
              standard:
                "Heat stroke can be serious if untreated. We should take you to the hospital to be safe. Are you traveling alone?",
              formal:
                "Heat stroke poses a significant health risk if not promptly addressed. For precautionary measures, we ought to transport you to a medical facility. Might I inquire if you are traveling unaccompanied?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm with a friend but they went to get food. Can you call them? Their number is on my phone.",
            textZh: "我和朋友一起的，但他们去买吃的了。能帮我打电话给他们吗？号码在我手机里。",
            formalityVariants: {
              casual: "I'm with friends, but they're getting food. Could you call them? Number's in my phone.",
              standard: "I'm with friends, but they went to get food. Can you call them for me? Their number's in my phone.",
              formal: "I am accompanied by friends, however, they have temporarily left to procure refreshments. Would you be able to contact them on my behalf? Their contact information is stored on my mobile device.",
            },
            casualVersion:
              "Nah, I'm with a friend, but they just went to grab some food. Can you give 'em a call? Their number's on my phone.",
            commonMistake: {
              wrong: "Their number in my phone.",
              correct: "Their number is on my phone.",
              explanation: "电话号码存在手机里，通常用介词“on”而不是“in”。",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn:
              "Sure, I'll call them. For now, keep sipping water and stay out of the sun. Try to avoid being outside during peak hours — between 11 AM and 3 PM.",
            textZh: "好的，我帮你打。现在继续小口喝水，不要晒太阳。尽量避免在上午11点到下午3点的高温时段待在户外。",
            culturalNote: "美国人提供帮助时通常很直接，不需要客套",
            commonMistake: {
              wrong: "Sure, I call them for you.",
              correct: "Sure, I'll call them for you.",
              explanation: "将来时'will'常被省略，导致语法错误。",
            },
            keyPhrases: [
              { en: "sipping water", zh: "小口喝水" },
              { en: "peak hours", zh: "高温时段" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll give them a ring. Keep drinking, little sips. And stay out of the sun — especially between 11 and 3, that's when it's the worst.",
                textZh: "我帮你打。继续喝水，小口喝。别晒太阳——尤其是11点到3点，那是最热的时候。",
                actionHint: "give them a ring 就是给他们打电话",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, I'll call them for you. Keep hydrating. And next time, avoid being outdoors midday — that's when the heat really hits.",
                textZh: "好的，我帮你打。继续补水。下次别在正午出门——那时候热得最厉害。",
                actionHint: "midday 就是正午",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, I'll call 'em. Just keep sipping water and stay outta the sun for now. And try not to be outside during the hottest part of the day — like, 11 to 3.",
            formalityVariants: {
              casual: "Okay, I'll call 'em. Keep sipping water, stay outta the sun. Try to avoid 11-3 outside.",
              standard:
                "Sure, I'll call them. For now, keep sipping water and stay out of the sun. Try to avoid being outside during peak hours — between 11 AM and 3 PM.",
              formal:
                "Certainly, I will contact them. In the interim, please continue to hydrate yourself by sipping water and remain shielded from direct sunlight. Furthermore, it is advisable to refrain from outdoor activities during the peak solar intensity period, specifically between 11 AM and 3 PM.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 12. 溺水救援 ====================
  {
    id: "emergency-drowning",
    category: "emergency",
    titleZh: "溺水救援",
    titleEn: "Drowning Emergency",
    description: "在海滩或泳池发现有人溺水时呼救",
    otherRole: "救生员",
    otherRoleIcon: "🏊",
    flows: [
      {
        id: "basic",
        titleZh: "溺水求助基本流程",
        titleEn: "Basic Drowning Emergency",
        description: "发现险情、呼救、配合救生员",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Help! Someone is drowning out there! They're struggling in the water!",
            textZh: "救命！有人在那边溺水了！他们在水里挣扎！",
            commonMistake: {
              wrong: "Help! Someone drowns out there! They struggle in the water!",
              correct: "Help! Someone is drowning out there! They're struggling in the water!",
              explanation: "中文常混淆一般现在时和现在进行时。溺水是正在发生的动作，需用进行时态。",
            },
            culturalNote: "溺水者通常无法大声呼救。如果看到有人在水中头部上下浮沉、双臂拍打水面，立即呼叫救生员。",
            casualVersion: "Help! Someone's drowning out there! They're struggling!",
            formalityVariants: {
              casual: "Help! Someone's drowning out there! Struggling in the water!",
              standard: "Help! Someone is drowning out there! They're struggling in the water!",
              formal:
                "Excuse me, I require assistance! It appears someone is in distress and drowning. They are struggling significantly in the water.",
            },
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "I see them! Everyone, clear the water! Call 911! Can you throw that life ring toward them?",
            textZh: "我看到了！所有人出水！打911！你能把那个救生圈扔向他们吗？",
            culturalNote: "紧急情况打911，而不是其他号码",
            commonMistake: {
              wrong: "I see them! All people clear the water! Dial 911! Can you throw that life ring to them?",
              correct: "I see them! Everyone, clear the water! Call 911! Can you throw that life ring toward them?",
              explanation: "“All people” 不如 “everyone” 自然；“dial 911” 很少用；“throw to” 侧重最终到达，此处 “toward” 更精确。",
            },
            keyPhrases: [
              { en: "clear the water", zh: "出水/离开水域" },
              { en: "life ring", zh: "救生圈" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I got it! Everybody out of the water now! Someone call 911! Toss that life preserver out there!",
                textZh: "我看到了！所有人现在出水！快打911！把那个救生设备扔过去！",
                actionHint: "life preserver 和 life ring 一个意思",
                frequency: "common",
              },
              {
                textEn: "I see them! Everyone get out! Get me that floaty ring — and somebody dial 911!",
                textZh: "我看到了！所有人出来！把那个浮圈给我——谁来打911！",
                actionHint: "floaty ring 是救生圈的非正式说法",
                frequency: "occasional",
              },
            ],
            casualVersion: "See 'em! Everyone, out the water! Call 911! Can you toss that life ring to 'em?",
            formalityVariants: {
              casual: "Got 'em! Everyone, out the water! Call 911! Toss that life ring to 'em?",
              standard: "I see them! Everyone, clear the water! Call 911! Can you throw that life ring toward them?",
              formal:
                "I have located the individual. All patrons, please exit the water immediately. Contact emergency services at 911. Would you be able to deploy the life ring in their direction?",
            },
          },
          {
            speaker: "you",
            textEn: "I threw it but it didn't reach them. They're too far out. Should I swim to help?",
            textZh: "我扔了但够不到他们。他们太远了。我需要游过去帮忙吗？",
            commonMistake: {
              wrong: "I threw it but I cannot reach them. They are too far. I need to swim to help?",
              correct: "I threw it but I couldn't reach them. They're too far. Should I swim over to help?",
              explanation: "“cannot” 语气生硬，用 “couldn't” 更自然；“swim to help” 不如 “swim over to help” 自然。",
            },
            casualVersion: "Threw it but didn't reach. Too far out. Should I swim to help?",
            culturalNote: "美国人不会轻易下水救人，会寻求专业帮助，且提醒不要冒险",
            formalityVariants: {
              casual: "Threw it, didn't reach. Too far. Should I swim out?",
              standard: "I threw it but it didn't reach them. They're too far out. Should I swim to help?",
              formal:
                "I attempted to throw the life ring, however, it did not reach the individual. They are positioned at too great a distance. Would it be advisable for me to enter the water to provide assistance?",
            },
          },
          {
            speaker: "them",
            role: "救生员",
            textEn:
              "No! Do NOT go in the water. A drowning person can pull you under. I'm going in with a rescue board. Keep watching them and point so I can see where they are.",
            textZh: "不要！不要下水。溺水的人可能把你拖下去。我带救援板下去。你继续盯着他们并指给我看位置。",
            commonMistake: {
              wrong: "No! Do NOT go in the water. A drowning man can pull you down. I take the rescue board. You keep seeing them and point me position.",
              correct: "No! Do NOT go in the water. A drowning person can pull you under. I'm taking the rescue board. You keep watching them and point out their location to me.",
              explanation: "“drowning man” 具有性别歧视；“pull you down” 不如 “pull you under” 地道；“seeing them” 和 “point me position” 表达不自然。",
            },
            keyPhrases: [
              { en: "do not go in", zh: "不要下水" },
              { en: "pull you under", zh: "把你拖下去" },
              { en: "rescue board", zh: "救援板" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Stay on the beach! Don't jump in — they'll drag you down! I'm going with my board. Keep pointing at them so I don't lose sight!",
                textZh: "待在岸上！别跳下去——他们会把你拽下去的！我带板子下去。一直指着他们别让我看丢了！",
                actionHint: "drag you down 就是把你拽下去",
                frequency: "common",
              },
              {
                textEn:
                  "Do NOT swim out there! A panicking swimmer will take you both under. I'm heading in now. Keep your eyes on them and show me where!",
                textZh: "不要游过去！惊慌的溺水者会把你们俩都拽下水。我现在下去。盯紧他们指给我看！",
                actionHint: "panicking swimmer 指惊慌的溺水者",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No! Don't go in. Drowning person'll pull you under. I'm going in with the board. Keep watching 'em, point so I can see 'em.",
            formalityVariants: {
              casual:
                "Nope! Don't go in. They'll pull you under. I'm heading in with the board. Keep an eye on 'em, point 'em out.",
              standard:
                "No! Do NOT go in the water. A drowning person can pull you under. I'm going in with a rescue board. Keep watching them and point so I can see where they are.",
              formal:
                "Absolutely not. You must refrain from entering the water. An individual who is drowning can inadvertently endanger a rescuer. I will be entering the water with a rescue board. Please continue to observe their position and indicate it visually so I may locate them effectively.",
            },
          },
          {
            speaker: "you",
            textEn: "They're over there, about 30 meters out, to the left of that buoy!",
            textZh: "他们在那边，大约30米远，在那个浮标左边！",
            commonMistake: {
              wrong: "They are over there, about 30 meters, in that buoy left side!",
              correct: "They're over there, about 30 meters out, to the left of that buoy!",
              explanation: "“in that buoy left side” 是典型的中式英语，应为 “to the left of that buoy”。",
            },
            casualVersion: "Over there, 'bout 30 meters out, left of that buoy!",
            formalityVariants: {
              casual: "Over there, 'bout 30 out, left of the buoy!",
              standard: "They're over there, about 30 meters out, to the left of that buoy!",
              formal:
                "They are located in that direction, approximately 30 meters offshore, specifically to the left of the aforementioned buoy.",
            },
          },
          {
            speaker: "them",
            role: "救生员",
            textEn: "Got them! They're breathing. Help me pull them onto the beach. Has anyone called 911?",
            textZh: "抓到了！他们还在呼吸。帮我把他们拉上沙滩。有人打911了吗？",
            commonMistake: {
              wrong: "Got them! They still breathe. Help me pull them to sand. Someone called 911 yet?",
              correct: "Got them! They're still breathing. Help me pull them onto the sand. Has anyone called 911?",
              explanation: "“still breathe” 应为进行时态 “still breathing”；“pull to sand” 表达不完整，应为 “pull onto the sand”；问句时态有误。",
            },
            keyPhrases: [
              { en: "breathing", zh: "在呼吸" },
              { en: "pull them onto the beach", zh: "拉上沙滩" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I've got them! They're alive, still breathing. Help me get them out of the water. Did someone get 911?",
                textZh: "我抓到了！还活着，还在呼吸。帮我把他们弄出水。有人打911了吗？",
                actionHint: "I've got them 就是我抓住他们了",
                frequency: "common",
              },
              {
                textEn:
                  "Okay I got them, they're breathing. Give me a hand pulling them to shore. Anybody call for an ambulance?",
                textZh: "好了我抓住了，在呼吸。帮我把他们拉到岸上。有人叫救护车了吗？",
                actionHint: "give me a hand 就是帮帮忙",
                frequency: "common",
              },
            ],
            casualVersion: "Got 'em! They're breathing. Help me pull 'em onto the beach. Anyone call 911?",
            formalityVariants: {
              casual: "Got 'em! Breathing. Help me pull 'em onto the beach. Anyone call 911?",
              standard: "Got them! They're breathing. Help me pull them onto the beach. Has anyone called 911?",
              formal:
                "I have secured them! They are breathing. Please assist me in bringing them to the beach. Has emergency services been contacted?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, someone called. An ambulance is on the way. What else can I do?",
            textZh: "是的，有人打了。救护车在来的路上。我还能做什么？",
            commonMistake: {
              wrong: "Yes, someone called. Ambulance is coming. What other things can I do?",
              correct: "Yes, someone called. An ambulance is on the way. What else can I do?",
              explanation: "“Ambulance is coming” 不如 “on the way” 自然地道；“other things” 不如 “else” 简洁。",
            },
            casualVersion: "Yeah, someone called. Ambulance is on the way. What else can I do?",
            formalityVariants: {
              casual: "Yeah, someone called. Ambulance is coming. What else?",
              standard: "Yes, someone called. An ambulance is on the way. What else can I do?",
              formal:
                "Yes, the emergency services have been notified. An ambulance is currently en route. What further assistance can I provide?",
            },
          },
          {
            speaker: "them",
            role: "救生员",
            textEn:
              "Help keep them on their side in case they vomit. Keep them warm with a towel. The paramedics will take it from here.",
            textZh: "帮忙让他们侧躺以防呕吐。用毛巾给他们保暖。急救人员到了会接手。",
            commonMistake: {
              wrong: "Help keep them lay on their side in case they vomit. Keep them warm with a towel. The paramedics will manage it from here.",
              correct: "Help keep them on their side in case they vomit. Keep them warm with a towel. The paramedics will take it from here.",
              explanation: "“lay on their side” 不如 “on their side” 自然；“manage it” 不如 “take it from here” 地道。",
            },
            keyPhrases: [
              { en: "on their side", zh: "侧躺" },
              { en: "keep them warm", zh: "保暖" },
              { en: "paramedics", zh: "急救人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Roll them onto their side so they don't choke if they throw up. Cover them with something warm. The EMTs are almost here.",
                textZh: "把他们翻成侧躺，万一吐了不会呛到。找东西给他们盖上保暖。急救人员快到了。",
                actionHint: "EMTs = Emergency Medical Technicians 急救技术员",
                frequency: "common",
              },
              {
                textEn:
                  "Turn them on their side — recovery position. Wrap a towel around them. First responders will handle the rest.",
                textZh: "让他们侧躺——恢复体位。用毛巾裹住他们。急救人员到了会处理其余的。",
                actionHint: "recovery position 是医学上的恢复体位",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Help keep 'em on their side in case they puke. Keep 'em warm with a towel. Paramedics'll take it from here.",
            formalityVariants: {
              casual:
                "Help keep 'em on their side in case they puke. Towel to keep 'em warm. Paramedics'll handle the rest.",
              standard:
                "Help keep them on their side in case they vomit. Keep them warm with a towel. The paramedics will take it from here.",
              formal:
                "Please ensure they remain on their side, as a precaution against potential emesis. Maintain their body temperature by covering them with a towel. The arriving paramedics will assume full responsibility for their care upon arrival.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 13. 自然灾害警报 ====================
  {
    id: "emergency-natural-disaster-warning",
    category: "emergency",
    titleZh: "自然灾害警报",
    titleEn: "Natural Disaster Warning",
    description: "收到飓风/龙卷风等自然灾害预警时了解避险信息",
    otherRole: "酒店前台/广播",
    otherRoleIcon: "🌪️",
    flows: [
      {
        id: "basic",
        titleZh: "自然灾害应对流程",
        titleEn: "Responding to Natural Disaster Warning",
        description: "理解警报、准备物资、前往安全区域",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just got an emergency alert on my phone about a hurricane. What should I do?",
            textZh: "我刚在手机上收到关于飓风的紧急警报。我应该怎么办？",
            culturalNote: "美国的紧急警报系统（EAS）会直接推送到手机，即使没有SIM卡也能收到。收到后立即关注。",
            casualVersion: "Just got a hurricane alert on my phone. What should I do?",
            commonMistake: {
              wrong: "What I should do?",
              correct: "What should I do?",
              explanation: "疑问句中助动词(should)需放在主语(I)之前。",
            },
            formalityVariants: {
              casual: "Got a hurricane alert. What now?",
              standard: "I just got an emergency alert on my phone about a hurricane. What should I do?",
              formal:
                "Pardon me, I've just received an emergency alert on my mobile device regarding an approaching hurricane. Could you please advise on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "A hurricane warning has been issued. The hotel is preparing. We recommend staying indoors. We have an emergency shelter in the basement.",
            textZh: "已经发布了飓风警告。酒店正在准备。我们建议留在室内。地下室有紧急避难所。",
            keyPhrases: [
              { en: "hurricane warning", zh: "飓风警告" },
              { en: "staying indoors", zh: "留在室内" },
              { en: "emergency shelter", zh: "紧急避难所" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's a hurricane headed our way. We're getting ready. Best to stay inside. We've got a safe room downstairs.",
                textZh: "是的，有飓风要来了。我们在准备。最好留在室内。楼下有安全房间。",
                actionHint: "headed our way 就是向我们这边来了",
                frequency: "common",
              },
              {
                textEn:
                  "We got the alert too. The hotel's on it. Don't go outside. We have a designated shelter area in the basement — head there if it gets bad.",
                textZh: "我们也收到了警报。酒店正在准备。别出去。地下室有指定的避难区域——情况严重了就去那里。",
                actionHint: "designated 就是指定的",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hurricane warning's out. Hotel's getting ready. Best to stay inside. There's a shelter in the basement.",
            commonMistake: {
              wrong: "We recommend to stay indoors.",
              correct: "We recommend staying indoors.",
              explanation: '"recommend"后接动名词(gerund)或that从句，不直接接不定式。',
            },
            formalityVariants: {
              casual: "Heads up, hurricane warning. Stay inside. Shelter's in the basement.",
              standard:
                "A hurricane warning has been issued. The hotel is preparing. We recommend staying indoors. We have an emergency shelter in the basement.",
              formal:
                "Please be advised that a hurricane warning has been officially issued. The hotel management is undertaking all necessary preparations. We strongly advise all guests to remain indoors for their safety. An emergency shelter is available for your use in the basement level.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I stock up on water and food? How long will it last?",
            textZh: "需要囤水和食物吗？会持续多久？",
            casualVersion: "Gotta stock up on water and food? For how long?",
            commonMistake: {
              wrong: "Need to store water and food?",
              correct: "Should I stock up on water and food?",
              explanation: '"stock up on"是囤积的常用动词短语，"store"通常指存放。',
            },
            formalityVariants: {
              casual: "Need to get water and food? How long will this thing last?",
              standard: "Should I stock up on water and food? How long will it last?",
              formal:
                "Is it advisable for me to procure additional water and food supplies? Furthermore, could you provide an estimate of the expected duration of this situation?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "The storm is expected to hit tonight and last about 12 hours. We're providing water and snacks in the shelter. Fill your bathtub with water as a backup.",
            textZh: "暴风预计今晚到达，持续约12个小时。我们在避难所提供水和零食。把浴缸装满水以备不时之需。",
            keyPhrases: [
              { en: "expected to hit", zh: "预计到达" },
              { en: "fill your bathtub", zh: "把浴缸装满水" },
              { en: "as a backup", zh: "以备不时之需" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It should roll in tonight and last about 12 hours. We'll have supplies in the shelter. Oh, and fill up your tub with water just in case.",
                textZh: "今晚应该就到了，持续大约12个小时。避难所里有物资。对了，把浴缸装满水以防万一。",
                actionHint: "roll in 就是（暴风雨）到来",
                frequency: "common",
              },
              {
                textEn:
                  "They're saying it'll make landfall tonight, 12-hour storm. There'll be water and food downstairs. Pro tip — fill your bath, you might lose water pressure.",
                textZh: "他们说今晚登陆，12小时的暴风。楼下会有水和食物。提示一下——把浴缸灌满，可能会断水。",
                actionHint: "make landfall 就是（飓风）登陆",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Storm's hitting tonight, 'bout 12 hours. We'll have water and snacks in the shelter. Also, fill your tub with water, just in case.",
            culturalNote: "将浴缸装满水以备不时之需，这是美国应对停水的一种常见做法，中文语境较少提及。",
            commonMistake: {
              wrong: "Fill your bathtub with water as backup.",
              correct: "Fill your bathtub with water as a backup.",
              explanation: '"as a backup"是习语，需要冠词"a"。',
            },
            formalityVariants: {
              casual:
                "Storm tonight, 'round 12 hours. We got water/snacks in the shelter. Fill your tub too, just in case.",
              standard:
                "The storm is expected to hit tonight and last about 12 hours. We're providing water and snacks in the shelter. Fill your bathtub with water as a backup.",
              formal:
                "The impending storm is projected to commence this evening and persist for approximately 12 hours. Complimentary water and snacks will be available within the designated shelter. We also advise guests to fill their bathtubs with water as a supplemental emergency supply.",
            },
          },
          {
            speaker: "you",
            textEn: "What about my flight tomorrow? Will the airport be open?",
            textZh: "我明天的航班怎么办？机场会开吗？",
            casualVersion: "My flight tomorrow? Airport gonna be open?",
            commonMistake: {
              wrong: "How about my flight tomorrow?",
              correct: "What about my flight tomorrow?",
              explanation: '"What about"在此处更自然地引出对航班的担忧。',
            },
            formalityVariants: {
              casual: "My flight tomorrow? Airport open?",
              standard: "What about my flight tomorrow? Will the airport be open?",
              formal:
                "Regarding my scheduled flight for tomorrow, could you please advise on the operational status of the airport?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "The airport will likely be closed through tomorrow. Check with your airline — most will rebook you for free due to the weather. We can extend your stay at no extra charge.",
            textZh: "机场明天很可能关闭。联系你的航空公司——大多数会因天气免费改签。我们可以免费延长你的住宿。",
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "at no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The airport's probably gonna be shut down tomorrow. Call your airline — they should put you on another flight for free. We'll let you stay an extra night, no charge.",
                textZh: "机场明天可能关闭。打电话给航空公司——他们应该会免费给你换航班。我们让你多住一晚，不收费。",
                actionHint: "shut down 就是关闭",
                frequency: "common",
              },
              {
                textEn:
                  "Flights are almost certainly cancelled through tomorrow. Most airlines waive the rebooking fee for weather. And don't worry about the room — stay as long as you need.",
                textZh: "航班明天几乎肯定取消。大多数航空公司天气原因免改签费。房间别担心——想住多久住多久。",
                actionHint: "waive the fee 就是免除费用",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Airport'll probably be closed all day tomorrow. Call your airline – they'll probably rebook you for free 'cause of the weather. We can extend your stay, no charge.",
            commonMistake: {
              wrong: "Most airline will rebook you.",
              correct: "Most will rebook you.",
              explanation: '"Most"作代词指代航空公司时，可直接使用；若作形容词，"most airlines"更完整。',
            },
            formalityVariants: {
              casual:
                "Airport's probably closed tomorrow. Call your airline, they'll fix you up for free. We can extend your room for free too.",
              standard:
                "The airport will likely be closed through tomorrow. Check with your airline — most will rebook you for free due to the weather. We can extend your stay at no extra charge.",
              formal:
                "It is highly probable that the airport will remain non-operational throughout tomorrow. We recommend contacting your airline directly, as most carriers will facilitate complimentary rebooking in light of the weather conditions. Furthermore, we are prepared to extend your accommodation without any additional charges.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll head to the shelter. What should I bring with me?",
            textZh: "谢谢。我去避难所。需要带什么？",
            casualVersion: "Thanks. Heading to the shelter. What should I bring?",
            commonMistake: {
              wrong: "What I should bring?",
              correct: "What should I bring (with me)?",
              explanation: "疑问句中助动词(should)需放在主语(I)之前。",
            },
            formalityVariants: {
              casual: "Thanks. Going to the shelter. What do I need to grab?",
              standard: "Thank you. I'll head to the shelter. What should I bring with me?",
              formal:
                "Thank you kindly. I shall proceed to the designated shelter. May I inquire as to which personal items I ought to bring?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Bring your passport, phone and charger, any medications, and a change of clothes. We'll announce when it's safe to return to your room.",
            textZh: "带上护照、手机和充电器、药物，还有换洗衣服。我们会通知什么时候可以安全回房间。",
            keyPhrases: [
              { en: "phone and charger", zh: "手机和充电器" },
              { en: "change of clothes", zh: "换洗衣服" },
              { en: "announce when it's safe", zh: "通知安全时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Grab your ID, phone, charger, meds, and maybe a change of clothes. We'll let you know when it's all clear.",
                textZh: "带上证件、手机、充电器、药物，还有换洗衣服。安全了我们会通知你。",
                actionHint: "all clear 就是安全了/没事了",
                frequency: "common",
              },
              {
                textEn:
                  "Take the essentials — passport, phone, charger, any pills you take, and something to change into. We'll make an announcement when you can go back up.",
                textZh: "带上必需品——护照、手机、充电器、药、换洗的衣服。能回房间时我们会广播。",
                actionHint: "something to change into 就是换穿的衣服",
                frequency: "common",
              },
            ],
            casualVersion:
              "Grab your passport, phone, charger, meds, and a change of clothes. We'll let you know when it's safe to go back to your room.",
            commonMistake: {
              wrong: "Bring your passport, phone and charger, medicine, and change clothes.",
              correct: "Bring your passport, phone and charger, any medications, and a change of clothes.",
              explanation: '"medications"指个人药物；"a change of clothes"是固定短语，指一套换洗衣服。',
            },
            formalityVariants: {
              casual:
                "Get your passport, phone, charger, meds, and some spare clothes. We'll tell you when it's cool to go back.",
              standard:
                "Bring your passport, phone and charger, any medications, and a change of clothes. We'll announce when it's safe to return to your room.",
              formal:
                "Please ensure you bring your passport, mobile phone and its charging device, any necessary personal medications, and a change of attire. We will issue an announcement when conditions are deemed safe for you to return to your respective rooms.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 14. 航班取消滞留 ====================
  {
    id: "emergency-stranded-flight",
    category: "emergency",
    titleZh: "航班取消滞留",
    titleEn: "Stranded Due to Flight Cancellation",
    description: "航班突然取消后在机场处理改签、住宿和赔偿",
    otherRole: "航空公司柜台人员",
    otherRoleIcon: "✈️",
    flows: [
      {
        id: "basic",
        titleZh: "航班取消应对流程",
        titleEn: "Handling Flight Cancellation",
        description: "了解情况、改签、申请住宿和餐食补偿",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "My flight has been cancelled. What are my options? I need to get to London by tomorrow.",
            textZh: "我的航班被取消了。我有什么选择？我需要明天到伦敦。",
            culturalNote: "航班取消时保留登机牌和取消通知，这些是后续索赔的凭证。",
            casualVersion: "My flight got cancelled. What're my options? Gotta get to London by tomorrow.",
            commonMistake: {
              wrong: "My flight cancelled. What's my options?",
              correct: "My flight has been cancelled. What are my options?",
              explanation:
                "描述事件结果时，常用完成时或被动语态；口语中 “got cancelled”也很常见。'options'是复数，应搭配'are'。",
            },
            formalityVariants: {
              casual: "Flight's cancelled. What can I do? Need to be in London tomorrow.",
              standard: "My flight has been cancelled. What are my options? I need to get to London by tomorrow.",
              formal:
                "Excuse me, my flight to London has been cancelled. Could you please inform me of my available options? It is imperative that I reach London by tomorrow.",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "I apologize for the inconvenience. The cancellation is due to severe weather. I can rebook you on tomorrow's 7 AM flight or route you through Frankfurt tonight.",
            textZh:
              "给您带来不便深感抱歉。取消是因为恶劣天气。我可以帮您改签明天早上7点的航班，或者今晚经法兰克福转机。",
            culturalNote: "因天气取消航班通常不赔偿酒店或餐食。",
            commonMistake: {
              wrong: "I am sorry for the inconvenience.",
              correct: "I apologize for the inconvenience.",
              explanation: "直接说'I apologize'更自然，'I am sorry'显得比较口语化或不正式。",
            },
            keyPhrases: [
              { en: "rebook", zh: "改签" },
              { en: "route you through", zh: "经...转机" },
              { en: "severe weather", zh: "恶劣天气" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry about that. It's the weather. I can put you on the 7 AM tomorrow or get you there tonight with a layover in Frankfurt.",
                textZh: "很抱歉。天气原因。我可以给你安排明早7点的，或者今晚经法兰克福转一下到那边。",
                actionHint: "layover 就是转机停留",
                frequency: "common",
              },
              {
                textEn:
                  "I apologize. Bad weather grounded the flight. Your options are a direct tomorrow at 7 or connecting through Frankfurt tonight.",
                textZh: "很抱歉。恶劣天气导致停飞。你的选择是明天7点的直飞或者今晚经法兰克福转机。",
                actionHint: "grounded the flight 就是航班停飞了",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sorry about the hassle. Bad weather cancelled it. I can put you on tomorrow's 7 AM or send you through Frankfurt tonight.",
            formalityVariants: {
              casual: "Oops, sorry about that. Bad weather. Can get you on the 7 AM tomorrow or via Frankfurt tonight.",
              standard:
                "I apologize for the inconvenience. The cancellation is due to severe weather. I can rebook you on tomorrow's 7 AM flight or route you through Frankfurt tonight.",
              formal:
                "Please accept our sincerest apologies for this unforeseen inconvenience. The cancellation is a direct result of severe weather conditions. We can offer you rebooking on the 7 AM flight tomorrow morning, or alternatively, a routing through Frankfurt this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the 7 AM flight. Can I get a hotel and meal voucher since I have to stay overnight?",
            textZh: "我选明早7点的航班。既然要过夜，可以提供酒店和餐食券吗？",
            casualVersion:
              "Yeah, I'll take the 7 AM. Can I get a hotel and a meal voucher since I'm stuck here overnight?",
            culturalNote: "美国服务业索取补偿很常见，语气可以更直接。",
            commonMistake: {
              wrong: "Can you give me a hotel and meal voucher?",
              correct: "Can I get a hotel and meal voucher?",
              explanation: "用 “Can I get...” 比 “Can you give me...” 听起来更客气自然。",
            },
            formalityVariants: {
              casual: "I'll do the 7 AM. Can I get a hotel/meal voucher since I'm staying overnight?",
              standard: "I'll take the 7 AM flight. Can I get a hotel and meal voucher since I have to stay overnight?",
              formal:
                "I will accept the 7 AM flight option. Given the necessity of an overnight stay, would it be possible to arrange for a hotel and meal voucher?",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Since it's a weather-related cancellation, we can offer you a discounted hotel rate through our partner. Here's a $15 meal voucher for the airport restaurants.",
            textZh: "因为是天气原因取消，我们可以通过合作酒店提供优惠价格。这是一张15美元的机场餐厅餐食券。",
            commonMistake: {
              wrong: "Because of weather cancellation, we can offer...",
              correct: "Since it's a weather-related cancellation, we can offer...",
              explanation: "'Because of'通常引导句子的一部分，而'Since'引导原因从句更自然。",
            },
            keyPhrases: [
              { en: "discounted hotel rate", zh: "优惠酒店价格" },
              { en: "meal voucher", zh: "餐食券" },
              { en: "weather-related", zh: "天气原因" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Since it's weather, we can't comp the hotel, but we've got a deal with a nearby one. Here's a $15 food voucher for the terminal.",
                textZh: "因为是天气原因，我们不能免费提供酒店，但附近有合作酒店打折。这是15美元的航站楼餐食券。",
                actionHint: "comp 就是免费提供/报销",
                frequency: "common",
              },
              {
                textEn:
                  "For weather cancellations, we can hook you up with a discounted room nearby. And take this meal coupon — 15 bucks, good at any restaurant here.",
                textZh: "天气取消的话，我们可以给你安排附近的优惠房间。拿这个餐券——15美元，这里任何餐厅都能用。",
                actionHint: "hook you up with 就是给你安排/帮你搞到",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Since it's weather, we can get you a discounted hotel with our partners. And here's a $15 meal voucher for the airport.",
            culturalNote: "美国航空公司通常不为天气原因的延误提供免费住宿，只有折扣。",
            formalityVariants: {
              casual: "Weather delay, so we can give you a discounted hotel. Here's a $15 meal voucher.",
              standard:
                "Since it's a weather-related cancellation, we can offer you a discounted hotel rate through our partner. Here's a $15 meal voucher for the airport restaurants.",
              formal:
                "As this cancellation is attributed to weather-related factors, we are able to provide you with a discounted hotel rate through our affiliated partners. Additionally, please accept this $15 meal voucher, valid at all airport dining establishments.",
            },
          },
          {
            speaker: "you",
            textEn: "My checked luggage is already on the plane. Can I get it back?",
            textZh: "我的托运行李已经在飞机上了。能取回来吗？",
            culturalNote: "登机后行李通常无法取出，会随你的新航班转运。",
            casualVersion: "My checked bags are already on the plane. Can I get 'em back?",
            commonMistake: {
              wrong: "My checked luggage is on the plane already.",
              correct: "My checked luggage is already on the plane.",
              explanation: "'already'在句中位置灵活，但修饰动词时通常放在动词前或句末。",
            },
            formalityVariants: {
              casual: "My bags are on the plane. Can I get them?",
              standard: "My checked luggage is already on the plane. Can I get it back?",
              formal:
                "My checked luggage has already been loaded onto the aircraft. Is it possible for me to retrieve it?",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Your luggage will be transferred to tomorrow's flight automatically. If you need toiletries, we can provide a comfort kit.",
            textZh: "您的行李会自动转到明天的航班。如果您需要洗漱用品，我们可以提供便利包。",
            commonMistake: {
              wrong: "Your luggage will be transferred to tomorrow flight.",
              correct: "Your luggage will be transferred to tomorrow's flight.",
              explanation: "表示'明天的航班'要用所有格'tomorrow's'。",
            },
            keyPhrases: [
              { en: "transferred automatically", zh: "自动转运" },
              { en: "toiletries", zh: "洗漱用品" },
              { en: "comfort kit", zh: "便利包" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry about your bags — they'll go on tomorrow's flight. Need a toothbrush or anything? We've got an overnight kit for you.",
                textZh: "别担心行李——会上明天的航班。需要牙刷什么的吗？我们有过夜便利包给你。",
                actionHint: "overnight kit 就是过夜用品包",
                frequency: "common",
              },
              {
                textEn:
                  "Your luggage will be moved to the new flight automatically. If you need basics for the night, I can grab you an amenity bag.",
                textZh: "你的行李会自动转到新航班。如果你需要过夜的基本用品，我给你拿一个便利袋。",
                actionHint: "amenity bag 就是便利包/洗漱包",
                frequency: "occasional",
              },
            ],
            casualVersion: "Your bags'll automatically go on tomorrow's flight. Need toiletries? We got comfort kits.",
            formalityVariants: {
              casual: "Bags'll go on tomorrow's flight automatically. Need toiletries? We have comfort kits.",
              standard:
                "Your luggage will be transferred to tomorrow's flight automatically. If you need toiletries, we can provide a comfort kit.",
              formal:
                "Your luggage will be automatically transferred to your rebooked flight scheduled for tomorrow. Should you require any personal hygiene items, we are pleased to offer a complimentary comfort kit.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. And can I get a written confirmation of the cancellation for my travel insurance?",
            textZh: "好的，麻烦了。另外能给我一份航班取消的书面确认吗？我需要用来申请旅行保险。",
            culturalNote: "美国保险公司要求正式书面文件，不是口头告知。",
            casualVersion:
              "Yeah, please. And can I get something in writing about the cancellation for my travel insurance?",
            commonMistake: {
              wrong: "I need a written confirmation for my travel insurance.",
              correct: "Can I get a written confirmation for my travel insurance?",
              explanation: "用 “Can I get...” 比 “I need...” 语气更委婉客气。",
            },
            formalityVariants: {
              casual: "Yes, please. Also, can I get a written note for my travel insurance?",
              standard:
                "Yes, please. And can I get a written confirmation of the cancellation for my travel insurance?",
              formal:
                "Yes, that would be appreciated. Furthermore, would it be possible to obtain a written confirmation of the flight cancellation for documentation purposes with my travel insurance provider?",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Absolutely. Here's your new boarding pass, the cancellation letter, and the comfort kit. Gate information will be updated on the screens tomorrow morning.",
            textZh: "当然可以。这是您的新登机牌、取消证明和便利包。明天早上屏幕上会更新登机口信息。",
            commonMistake: {
              wrong: "Gate information will update on the screens.",
              correct: "Gate information will be updated on the screens.",
              explanation: "'Gate information'是被更新，需要用被动语态'will be updated'。",
            },
            keyPhrases: [
              { en: "cancellation letter", zh: "取消证明" },
              { en: "boarding pass", zh: "登机牌" },
              { en: "gate information", zh: "登机口信息" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Here's your new pass, the letter confirming the cancellation, and your toiletry bag. Check the boards in the morning for your gate.",
                textZh: "当然。这是你的新登机牌、取消确认函和洗漱包。明早看显示屏查登机口。",
                actionHint: "check the boards 就是看信息显示屏",
                frequency: "common",
              },
              {
                textEn:
                  "You got it. New boarding pass, cancellation documentation for your insurance, plus the comfort kit. Gate number will be posted tomorrow.",
                textZh: "给你。新登机牌、保险用的取消证明，加上便利包。登机口明天会公布。",
                actionHint: "you got it 就是没问题/给你",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep. Here's your new boarding pass, the cancellation letter, and the comfort kit. Gate info'll be on the screens tomorrow morning.",
            formalityVariants: {
              casual:
                "Sure thing. Here's your new boarding pass, the letter, and the kit. Gate info on screens tomorrow.",
              standard:
                "Absolutely. Here's your new boarding pass, the cancellation letter, and the comfort kit. Gate information will be updated on the screens tomorrow morning.",
              formal:
                "Certainly. Please accept your new boarding pass, the official cancellation letter, and the complimentary comfort kit. Updated gate information will be displayed on the monitors tomorrow morning.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 15. 信用卡被盗刷 ====================
  {
    id: "emergency-credit-card-fraud",
    category: "emergency",
    titleZh: "信用卡被盗刷",
    titleEn: "Credit Card Fraud",
    description: "发现信用卡被盗刷后紧急挂失和处理",
    otherRole: "银行客服",
    otherRoleIcon: "💳",
    flows: [
      {
        id: "basic",
        titleZh: "信用卡盗刷处理流程",
        titleEn: "Handling Credit Card Fraud",
        description: "发现异常交易、挂失、申请临时卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need to report unauthorized transactions on my credit card. Several charges I didn't make just appeared.",
            textZh: "我需要报告信用卡上的未授权交易。出现了几笔我没消费的账单。",
            culturalNote: "发现盗刷后立即打银行卡背面的客服电话。很多银行有24小时中文服务热线。",
            casualVersion:
              "Gotta report some unauthorized charges on my card. A bunch of stuff I didn't buy just popped up.",
            commonMistake: {
              wrong: "I need report unauthorized transactions.",
              correct: "I need to report unauthorized transactions.",
              explanation: "中式英语常省略不定式to，使句子不完整。",
            },
            formalityVariants: {
              casual: "Gotta report some weird charges on my card. Stuff I didn't buy just showed up.",
              standard:
                "I need to report unauthorized transactions on my credit card. Several charges I didn't make just appeared.",
              formal:
                "Good morning/afternoon. I wish to report a series of unauthorized transactions that have recently appeared on my credit card statement.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I'll help you with that. Can you verify your name, card number, and the last four digits of your Social Security number?",
            textZh: "我来帮您处理。请验证您的姓名、卡号和社会安全号后四位。",
            commonMistake: {
              wrong: "Please verify your name, card number, and the last four digits of your Social Security Number, please.",
              correct: "Please verify your name, card number, and the last four digits of your Social Security Number.",
              explanation: "中文常说“请…，请”，英文一个please就够了",
            },
            keyPhrases: [
              { en: "verify", zh: "验证" },
              { en: "unauthorized transactions", zh: "未授权交易" },
              { en: "last four digits", zh: "后四位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me pull up your account. Can I get your full name and the last four of your card?",
                textZh: "我来调出你的账户。告诉我你的全名和卡号后四位？",
                actionHint: "pull up your account 就是调出你的账户",
                frequency: "common",
              },
              {
                textEn:
                  "I can help with that. For security, I need to confirm your identity. Name on the card, card number, and last four of your SSN?",
                textZh: "我能帮你处理。出于安全需要确认你的身份。持卡人姓名、卡号和社安号后四位？",
                actionHint: "SSN = Social Security Number 社会安全号",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, I can help. Just need your name, card number, and the last four of your SSN.",
            culturalNote: "SSN是美国居民身份验证常用方式",
            formalityVariants: {
              casual: "Sure, I can help. Just need your name, card number, and the last four of your SSN.",
              standard:
                "I'll help you with that. Could you please verify your name, card number, and the last four digits of your Social Security number?",
              formal:
                "Certainly, I can assist you. To proceed, I will require verification of your full name, your complete card number, and the final four digits of your Social Security Number.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm an international visitor. I don't have a Social Security number. I can give you my passport number instead.",
            textZh: "我是外国游客。我没有社会安全号。可以给您护照号码吗？",
            commonMistake: {
              wrong: "I am foreign visitor. I don't have Social Security Number. Can I give you my passport number?",
              correct: "I'm a foreign visitor. I don't have a Social Security Number. Can I give you my passport number?",
              explanation: "“a foreign visitor” 和 “a Social Security Number” 需要冠词",
            },
            casualVersion: "I'm just visiting, so no SSN. Can I give you my passport number?",
            culturalNote: "国际旅客常无SSN，护照号是替代方案",
            formalityVariants: {
              casual: "I'm just visiting, so no SSN. Can I give you my passport number?",
              standard:
                "I'm an international visitor, so I don't have a Social Security number. I can provide my passport number instead.",
              formal:
                "As an international visitor, I do not possess a Social Security Number. Would it be acceptable to provide my passport number as an alternative identification?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "That's fine. I can see three charges from last night — $200, $350, and $180 — all from online stores. Do you recognize any of these?",
            textZh: "没问题。我看到昨晚有三笔消费——200美元、350美元和180美元——都来自网上商店。你认得这些吗？",
            commonMistake: {
              wrong: "That's fine. I see three transactions last night from online stores. Do you recognize any of these?",
              correct: "That's fine. I see three transactions from last night—$200, $350, and $180—all from online stores. Do you recognize any of these?",
              explanation: "账单金额最好先说，再提来源，更清晰",
            },
            keyPhrases: [
              { en: "charges", zh: "消费/交易" },
              { en: "do you recognize", zh: "你认得吗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, I'm looking at your account. There are three transactions from last night — 200, 350, and 180 — all online purchases. Any of those ring a bell?",
                textZh: "好的，我在看你的账户。昨晚有三笔交易——200、350和180——都是网购。有印象吗？",
                actionHint: "ring a bell 就是有印象/听起来熟悉",
                frequency: "common",
              },
              {
                textEn:
                  "I see some suspicious activity — three online charges totaling 730 bucks from last night. Does any of that sound familiar?",
                textZh: "我看到一些可疑活动——昨晚三笔网购消费共730美元。听起来熟悉吗？",
                actionHint: "suspicious activity 就是可疑活动",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "No problem. See three charges from last night—$200, $350, and $180—all from online stores. Recognize any of 'em?",
            formalityVariants: {
              casual: "No prob. See three charges from last night—$200, $350, $180—all online. Recognize any of 'em?",
              standard:
                "That's fine. I can see three charges from last night — $200, $350, and $180 — all from online stores. Do you recognize any of these?",
              formal:
                "Thank you. I observe three transactions from last evening — for $200, $350, and $180 respectively — all originating from online retailers. Could you confirm if you recognize any of these specific charges?",
            },
          },
          {
            speaker: "you",
            textEn: "No, none of those are mine. I think my card was skimmed at an ATM yesterday.",
            textZh: "不，都不是我的。我觉得昨天在ATM机上卡被复制了。",
            culturalNote: "skimmed是信用卡信息被盗取，在ATM上很常见",
            casualVersion: "Nah, none of those are mine. My card probably got skimmed at an ATM yesterday.",
            commonMistake: {
              wrong: "My card was copied at an ATM yesterday.",
              correct: "My card was skimmed at an ATM yesterday.",
              explanation: "信用卡信息被盗用叫'skimmed'，而非'copied'。",
            },
            formalityVariants: {
              casual: "Nah, none of those are mine. Card probably got skimmed at an ATM yesterday.",
              standard: "No, none of those are mine. I believe my card was skimmed at an ATM yesterday.",
              formal:
                "No, I do not recognize any of those transactions. I suspect my card may have been compromised, possibly through skimming, at an ATM yesterday.",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I've frozen your card immediately. The fraudulent charges will be reversed within 5 to 10 business days. I can send a replacement card — where are you staying?",
            textZh: "我已经立即冻结了您的卡。欺诈交易将在5到10个工作日内撤销。我可以寄一张替代卡——您住在哪里？",
            culturalNote: "美国银行服务通常会提及'工作日'（business days），指的是周一到周五。",
            commonMistake: {
              wrong: "I've immediately frozen your card. The fraudulent transactions will be reversed within 5 to 10 working days. I can send a replacement card—where are you staying?",
              correct: "I've immediately frozen your card. The fraudulent transactions will be reversed within 5 to 10 business days. I can send a replacement card—where are you staying?",
              explanation: "在美国，更常用 'business days' 而不是 'working days'",
            },
            keyPhrases: [
              { en: "frozen your card", zh: "冻结卡" },
              { en: "reversed", zh: "撤销" },
              { en: "replacement card", zh: "替代卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I've locked the card right away. Those charges will be refunded in 5 to 10 business days. Want me to ship a new card? Where should I send it?",
                textZh: "我已经立刻锁卡了。那些交易会在5到10个工作日内退款。需要我寄一张新卡吗？寄到哪？",
                actionHint: "locked the card 就是锁卡/冻结卡",
                frequency: "common",
              },
              {
                textEn:
                  "Done, your card's been shut off. We'll reverse those transactions within a week or two. I can get a replacement out to you — what's your current address?",
                textZh: "好了，你的卡已经停了。我们会在一两周内撤销那些交易。我可以给你寄张新卡——你现在的地址是？",
                actionHint: "shut off 就是停用/关闭",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Froze your card right away. Fraudulent charges'll be reversed in 5 to 10 business days. I can send a new card — where you staying?",
            formalityVariants: {
              casual:
                "Card's frozen. Fraud charges reversed in 5-10 business days. Need a new card — where you staying?",
              standard:
                "I have immediately frozen your card. The fraudulent charges will be reversed within 5 to 10 business days. I can send a replacement card — where are you currently staying?",
              formal:
                "I have promptly frozen your account. The unauthorized charges will be reversed within a timeframe of 5 to 10 business days. I can arrange for a replacement card to be issued; may I inquire as to your current lodging?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm traveling and leaving in three days. Can I get a temporary card or use mobile pay?",
            textZh: "我在旅行，三天后就走了。能给我临时卡或者用手机支付吗？",
            culturalNote: "中国银行通常不提供实体临时卡；手机支付更普遍但银行卡支持范围受限。",
            casualVersion:
              "I'm traveling and leaving in three days. Can I get a temporary card or just use mobile pay?",
            commonMistake: {
              wrong: "Can I get temporary card?",
              correct: "Can I get a temporary card?",
              explanation: "中式英语常省略不定冠词，使名词短语不完整。",
            },
            formalityVariants: {
              casual: "I'm traveling, leaving in three days. Can I get a temp card or just mobile pay?",
              standard:
                "I'm currently traveling and will be departing in three days. Is it possible to obtain a temporary card or utilize mobile payment options?",
              formal:
                "I am currently on a trip and am scheduled to depart within three days. Would it be possible to arrange for a temporary card, or alternatively, to enable mobile payment functionality?",
            },
          },
          {
            speaker: "them",
            role: "银行客服",
            textEn:
              "I can set up instant virtual card access on your banking app. You can use it with Apple Pay or Google Pay immediately. Also, file a fraud dispute at our website for the full refund.",
            textZh:
              "我可以在您的银行APP上设置即时虚拟卡。您可以立即用Apple Pay或Google Pay使用。另外，在我们网站提交欺诈争议以获得全额退款。",
            keyPhrases: [
              { en: "virtual card", zh: "虚拟卡" },
              { en: "fraud dispute", zh: "欺诈争议" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I can set you up with a digital card on your app right now. Works with Apple Pay and Google Pay instantly. And make sure to file a dispute online to get your money back.",
                textZh:
                  "我可以现在在你的APP上给你设一张数字卡。Apple Pay和Google Pay马上就能用。然后记得在网上提交争议申请拿回钱。",
                actionHint: "set you up with 就是给你设置/配置",
                frequency: "common",
              },
              {
                textEn:
                  "Here's what we can do — I'll activate a virtual card through your mobile banking. You can tap to pay right away. Just log into our site later and file the fraud claim for your refund.",
                textZh:
                  "这样吧——我通过你的手机银行激活一张虚拟卡。你马上就能刷。回头登录我们网站提交欺诈理赔申请退款。",
                actionHint: "tap to pay 就是刷卡/感应支付",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I can set you up with an instant virtual card on your banking app. You can use it with Apple Pay or Google Pay right away. And, file a fraud dispute on our website for the full refund.",
            culturalNote: "美国银行卡盗刷退款常需线上提交'fraud dispute'而非口头告知。",
            commonMistake: {
              wrong: "You can use it by Apple Pay.",
              correct: "You can use it with Apple Pay.",
              explanation: "表达使用支付工具通常用'with'而不是'by'。",
            },
            formalityVariants: {
              casual:
                "Can set you up with a virtual card on your banking app. Use it with Apple Pay or Google Pay right away. Just file a fraud dispute online for the refund.",
              standard:
                "I can enable instant virtual card access on your banking application. You will then be able to use it immediately with Apple Pay or Google Pay. Additionally, please file a fraud dispute on our website to ensure a full refund.",
              formal:
                "I am able to configure immediate virtual card access directly within your banking application. This will allow for instant utilization with services such as Apple Pay or Google Pay. Furthermore, kindly initiate a formal fraud dispute via our official website to secure a full reimbursement.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 16. 酒店房间入侵 ====================
  {
    id: "emergency-hotel-intrusion",
    category: "emergency",
    titleZh: "酒店房间入侵",
    titleEn: "Hotel Room Intrusion",
    description: "发现有人未经允许进入酒店房间时的应对",
    otherRole: "酒店安保/前台",
    otherRoleIcon: "🚪",
    flows: [
      {
        id: "basic",
        titleZh: "房间入侵应对流程",
        titleEn: "Handling Hotel Room Intrusion",
        description: "发现异常、通知前台、报警处理",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I just came back to my room and the door was open. I think someone has been in my room. Some of my things are missing.",
            textZh: "我刚回到房间发现门是开着的。我觉得有人进过我的房间。有些东西不见了。",
            culturalNote: "如果发现房间门开着，不要进去，有人可能还在里面。在走廊打电话通知前台。",
            casualVersion:
              "Just got back to my room, door was open. Think someone's been in here. Some of my stuff's missing.",
            commonMistake: {
              wrong: "Some of my things are lost.",
              correct: "Some of my things are missing.",
              explanation: "中文的“丢失”在英文中常用 missing，lost 通常指自己找不到或遗失。",
            },
            formalityVariants: {
              casual: "Just got back, door's open. Think someone was in here, some stuff's missing.",
              standard:
                "I just came back to my room and the door was open. I think someone has been in my room. Some of my things are missing.",
              formal:
                "I've just returned to my room to find the door ajar. I suspect there may have been an unauthorized entry, and I've noticed some items are no longer present.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "I'm sending security to your room immediately. Please don't touch anything. Are you safe? Is there anyone still in the room?",
            textZh: "我立即派安保去您的房间。请不要触碰任何东西。您安全吗？房间里还有人吗？",
            culturalNote: "美国酒店紧急情况沟通直接，不客套",
            keyPhrases: [
              { en: "sending security", zh: "派安保" },
              { en: "don't touch anything", zh: "不要触碰任何东西" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm getting security up there right now. Leave everything as is. Are you okay? Is anyone still in the room?",
                textZh: "我现在就让安保上去。什么都别动。你没事吧？房间里还有人吗？",
                actionHint: "leave everything as is 就是什么都别动",
                frequency: "common",
              },
              {
                textEn:
                  "Stay right there, I'm sending someone up. Don't go in and don't move anything. Is it safe where you are?",
                textZh: "就待在那，我派人上去。别进去也别动任何东西。你在的地方安全吗？",
                actionHint: "stay right there 就是就待在原地别动",
                frequency: "common",
              },
            ],
            casualVersion: "Sending security up right now. Don't touch anything. You good? Anyone still in there?",
            commonMistake: {
              wrong: "Are you safe?",
              correct: "Are you okay/safe?",
              explanation: "直接说 Are you safe? 略显生硬，日常口语中常用 Are you okay/alright? 更自然。",
            },
            formalityVariants: {
              casual: "Sending security right up. Don't touch anything. You good? Anyone still in there?",
              standard:
                "I'm sending security to your room immediately. Please don't touch anything. Are you safe? Is there anyone still in the room?",
              formal:
                "I am dispatching security personnel to your room immediately. Please refrain from touching anything. Could you confirm your safety? Is anyone else currently present in the room?",
            },
          },
          {
            speaker: "you",
            textEn: "I didn't go inside yet. I'm standing in the hallway. My laptop and some cash are missing.",
            textZh: "我还没进去。我站在走廊里。我的笔记本电脑和一些现金不见了。",
            casualVersion: "Haven't gone inside. I'm just out in the hall. My laptop and some cash are gone.",
            commonMistake: {
              wrong: "I didn't go inside yet.",
              correct: "I haven't gone inside yet.",
              explanation: "表示“还没做某事”通常用现在完成时 haven't + 过去分词，而不是过去时 didn't + 动词原形。",
            },
            formalityVariants: {
              casual: "Nope, haven't gone in. I'm out in the hall. My laptop and some cash are gone.",
              standard: "I didn't go inside yet. I'm standing in the hallway. My laptop and some cash are missing.",
              formal:
                "I have not entered the room. I am currently situated in the hallway. My laptop and a quantity of cash are unaccounted for.",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "I've checked the room — no one is inside. We'll review the security camera footage. I need to call the police. Can you list everything that's missing?",
            textZh: "我已经检查了房间——里面没人。我们会查看监控录像。我需要报警。你能列出丢失的物品吗？",
            culturalNote: "美国警察出警率高，会认真处理盗窃案",
            keyPhrases: [
              { en: "security camera footage", zh: "监控录像" },
              { en: "list everything that's missing", zh: "列出丢失物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Room's clear, nobody in there. We'll pull up the camera recordings. I'm calling the cops. What's gone? Make me a list.",
                textZh: "房间安全了，没人。我们会调监控录像。我打电话报警。丢了什么？给我列个清单。",
                actionHint: "room's clear 就是房间安全了/清查完毕",
                frequency: "common",
              },
              {
                textEn:
                  "All clear inside. Let me get the CCTV footage and get the police involved. Can you go through your stuff and tell me exactly what's missing?",
                textZh: "里面没人了。我来调监控录像并报警。你能检查一下你的东西，告诉我具体丢了什么吗？",
                actionHint: "CCTV 就是闭路电视/监控",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Checked the room — no one's here. We'll check the cameras. Gotta call the cops. What's all missing?",
            commonMistake: {
              wrong: "I already checked the room.",
              correct: "I've checked the room.",
              explanation: "表示已经完成某事，且对现在有影响，用现在完成时 I've checked 更地道。",
            },
            formalityVariants: {
              casual: "Checked the room, it's clear. We'll look at the footage. Gotta call the cops. What's all gone?",
              standard:
                "I've checked the room — no one is inside. We'll review the security camera footage. I need to call the police. Can you list everything that's missing?",
              formal:
                "I have confirmed the room is unoccupied. We will review the security camera footage. I need to contact law enforcement. Could you provide a comprehensive list of all missing items?",
            },
          },
          {
            speaker: "you",
            textEn:
              "A laptop, about $300 in cash, and a gold necklace. I want to file a complaint and get compensation.",
            textZh: "一台笔记本电脑、大约300美元现金和一条金项链。我要投诉并要求赔偿。",
            culturalNote: "美国服务业投诉常说'I want to file a complaint'，直截了当",
            casualVersion: "A laptop, like 300 bucks, and a gold necklace. I wanna complain and get paid back.",
            commonMistake: {
              wrong: "I want to complain and ask for compensation.",
              correct: "I want to file a complaint and get compensation.",
              explanation:
                "ask for compensation 也可以，但 get compensation 更自然，file a complaint 比 complain 更正式且常用。",
            },
            formalityVariants: {
              casual: "A laptop, about 300 bucks, and a gold necklace. I wanna file a complaint and get compensated.",
              standard:
                "A laptop, about $300 in cash, and a gold necklace. I want to file a complaint and get compensation.",
              formal:
                "A laptop computer, approximately $300 in cash, and a gold necklace. I wish to formally lodge a complaint and seek appropriate compensation.",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "The police are on their way. We'll move you to a new room on a secured floor. The hotel manager will discuss compensation with you.",
            textZh: "警察正在赶来。我们会把您转到安全楼层的新房间。酒店经理会和您讨论赔偿事宜。",
            culturalNote: "美国酒店重视顾客安全和满意度，会主动提供补救措施",
            keyPhrases: [
              { en: "secured floor", zh: "安全楼层" },
              { en: "compensation", zh: "赔偿" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Cops are coming. We're moving you to a different room on a safer floor. Our manager will talk to you about making this right.",
                textZh: "警察要来了。我们给你换到更安全楼层的另一个房间。经理会跟你谈赔偿。",
                actionHint: "making this right 就是补偿/纠正这件事",
                frequency: "common",
              },
              {
                textEn:
                  "Police are en route. Let's get you to a new room upstairs with better security. The hotel will work with you on compensation.",
                textZh: "警察在路上了。我们给你换楼上安保更好的新房间。酒店会和你协商赔偿。",
                actionHint: "en route 就是在路上",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Cops are coming. We'll get you a new room on a safe floor. Manager'll talk compensation with you.",
            commonMistake: {
              wrong: "The police is on the way.",
              correct: "The police are on their way.",
              explanation: "police 是集体名词，通常看作复数，所以用 are 而不是 is。",
            },
            formalityVariants: {
              casual:
                "Cops are en route. We'll get you a new room on a secure floor. The manager will talk compensation with you.",
              standard:
                "The police are on their way. We'll move you to a new room on a secured floor. The hotel manager will discuss compensation with you.",
              formal:
                "Law enforcement personnel are currently en route. We will relocate you to a new room on a secured floor. The hotel manager will subsequently engage with you to discuss compensation arrangements.",
            },
          },
          {
            speaker: "you",
            textEn: "I also need a police report for my insurance claim. Can you make sure I get one?",
            textZh: "我还需要报案记录来申请保险。能确保我拿到吗？",
            culturalNote: "美国保险理赔需警局报告作证明",
            casualVersion: "Also need a police report for my insurance. Can you make sure I get one?",
            commonMistake: {
              wrong: "I also need police report for my insurance claim.",
              correct: "I also need a police report for my insurance claim.",
              explanation: "police report 是可数名词，首次提及或不特指时需加不定冠词 a。",
            },
            formalityVariants: {
              casual: "Yeah, and I need a police report for insurance. Can you make sure I get it?",
              standard: "I also need a police report for my insurance claim. Can you make sure I get one?",
              formal:
                "I also require a police report for my insurance claim. Could you please ensure that I receive one?",
            },
          },
          {
            speaker: "them",
            role: "安保人员",
            textEn:
              "Absolutely. The police will provide you with a report number. We'll also provide a written incident report from the hotel. I'm very sorry this happened.",
            textZh: "当然。警察会给您报案号。我们也会提供酒店的书面事故报告。非常抱歉发生了这种事。",
            culturalNote: "美国服务业强调‘Customer is King’，会积极道歉并提供帮助",
            keyPhrases: [
              { en: "report number", zh: "报案号" },
              { en: "incident report", zh: "事故报告" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course. The cops will give you a case number. We'll write up our own report too. I'm really sorry about all this.",
                textZh: "当然。警察会给你案件号。我们也会写一份自己的报告。真的很抱歉发生这种事。",
                actionHint: "case number 就是案件号",
                frequency: "common",
              },
              {
                textEn:
                  "For sure. You'll get a police report number plus a written statement from us. I sincerely apologize for this happening at our hotel.",
                textZh: "当然。你会拿到报案号加上我们的书面声明。这种事发生在我们酒店我深表歉意。",
                actionHint: "written statement 就是书面声明/报告",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally. Cops'll give you a report number. We'll give you a written incident report too. So sorry this happened.",
            commonMistake: {
              wrong: "I'm very sorry for this.",
              correct: "I'm very sorry this happened.",
              explanation: "sorry this happened 比 sorry for this 更完整和地道，强调对事件发生的遗憾。",
            },
            formalityVariants: {
              casual:
                "For sure. Police'll give you the report number. We'll give you our written report too. Really sorry this happened.",
              standard:
                "Absolutely. The police will provide you with a report number. We'll also provide a written incident report from the hotel. I'm very sorry this happened.",
              formal:
                "Absolutely. The police department will furnish you with a report number. Additionally, we will provide a written incident report from the hotel. I am genuinely very sorry that this occurred.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 17. 路上抛锚 ====================
  {
    id: "emergency-vehicle-breakdown",
    category: "emergency",
    titleZh: "路上抛锚",
    titleEn: "Vehicle Breakdown",
    description: "在高速公路或偏僻路段车辆抛锚后寻求道路救援",
    otherRole: "道路救援人员",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "basic",
        titleZh: "车辆抛锚求助流程",
        titleEn: "Basic Vehicle Breakdown Assistance",
        description: "确保安全、呼叫救援、描述问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hello, my car broke down on the highway. I'm on I-95, about 5 miles south of exit 42. I need roadside assistance.",
            textZh: "你好，我的车在高速上抛锚了。我在I-95公路上，42号出口以南大约5英里。我需要道路救援。",
            culturalNote: "在美国高速抛锚，先把车停到路肩并开双闪灯。如果有三角警示牌放在车后方50米处。",
            casualVersion:
              "Hey, car broke down on the highway. I'm on I-95, like 5 miles south of exit 42. Need roadside assistance.",
            commonMistake: {
              wrong: "My car is broken on the highway.",
              correct: "My car broke down on the highway.",
              explanation: "“broke down”是汽车抛锚的常用短语，更具体。",
            },
            formalityVariants: {
              casual:
                "Hey, car broke down on the highway. I'm on I-95, 'bout 5 miles south of exit 42. Need roadside assistance.",
              standard:
                "Hello, my car broke down on the highway. I'm on I-95, about 5 miles south of exit 42. I need roadside assistance.",
              formal:
                "Good morning/afternoon. I'm calling to report a vehicle breakdown. I am currently located on Interstate 95, approximately 5 miles south of Exit 42, and require immediate roadside assistance.",
            },
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn: "I've got your location. What seems to be the problem? Is your car still running?",
            textZh: "我找到您的位置了。车出了什么问题？还能启动吗？",
            commonMistake: {
              wrong: "What is the problem with the car?",
              correct: "What seems to be the problem with the car?",
              explanation: "直接问 'What is the problem' 有点生硬和指责意味，'What seems to be the problem' 更委婉客气。",
            },
            keyPhrases: [
              { en: "location", zh: "位置" },
              { en: "still running", zh: "还能启动" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay, got you on the map. What's going on with the car? Does it still start?",
                textZh: "好的，在地图上找到你了。车怎么了？还能发动吗？",
                actionHint: "got you on the map 就是在地图上定位到你了",
                frequency: "common",
              },
              {
                textEn:
                  "All right, we've pinpointed your location. Can you tell me what happened? Is the engine turning over?",
                textZh: "好的，我们锁定了你的位置。能告诉我怎么回事吗？引擎能转吗？",
                actionHint: "turning over 指引擎能不能启动",
                frequency: "occasional",
              },
            ],
            casualVersion: "Got your location. What's the problem? Car still running?",
            formalityVariants: {
              casual: "Got your location. What's the problem? Car still running?",
              standard: "I've got your location. What seems to be the problem? Is your car still running?",
              formal:
                "Thank you. I have confirmed your location. Could you please describe the nature of the issue? Is the vehicle currently operational?",
            },
          },
          {
            speaker: "you",
            textEn:
              "The engine just died and won't restart. There's a warning light on the dashboard. I think it might be the battery or the engine overheated.",
            textZh: "引擎突然熄火了，无法重启。仪表盘上有警示灯亮着。我觉得可能是电池没电或者发动机过热。",
            casualVersion:
              "Engine just died, won't restart. Got a warning light on the dash. Think it's the battery or maybe overheated.",
            commonMistake: {
              wrong: "The engine is dead, can't start again. There is a red light on the panel.",
              correct: "The engine just died and won't restart. There's a warning light on the dashboard.",
              explanation: "“died”是常用说法，“won't restart”更自然，“dashboard”指仪表盘。",
            },
            formalityVariants: {
              casual:
                "Engine just died, won't restart. Got a warning light on the dash. Think it's the battery or maybe overheated.",
              standard:
                "The engine just died and won't restart. There's a warning light on the dashboard. I think it might be the battery or the engine overheated.",
              formal:
                "The vehicle's engine has ceased functioning and cannot be restarted. There is an illuminated warning indicator on the dashboard. I suspect a potential battery issue or an engine overheating condition.",
            },
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn:
              "Are you in a safe spot? Off the road and out of traffic? I'm dispatching a tow truck. It should be there in about 30 minutes.",
            textZh: "您在安全的地方吗？是否在道路旁边远离车流？我正在派拖车过去。大约30分钟到。",
            commonMistake: {
              wrong: "Are you safe?",
              correct: "Are you in a safe spot?",
              explanation: "询问安全地点时，\"safe spot\" 比 \"safe\" 更具体常用。",
            },
            keyPhrases: [
              { en: "safe spot", zh: "安全的地方" },
              { en: "tow truck", zh: "拖车" },
              { en: "dispatching", zh: "派遣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Are you pulled over safely? Out of the lane of traffic? I've got a tow headed your way, about 30 minutes.",
                textZh: "你安全停到路边了吗？不在车道上了吧？拖车正在去你那，大约30分钟。",
                actionHint: "headed your way 就是正在去你那边",
                frequency: "common",
              },
              {
                textEn:
                  "First things first — are you off the road and safe? I'm sending a wrecker out. Sit tight, about half an hour.",
                textZh: "首先——你在路边安全的地方吗？我正在派拖车。等一下，大约半小时。",
                actionHint: "wrecker 就是拖车的另一种说法",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You in a safe spot? Off the road, outta traffic? Sending a tow truck. Should be there in like 30 minutes.",
            formalityVariants: {
              casual:
                "You in a safe spot? Off the road, outta traffic? Sending a tow truck. Should be there in like 30 minutes.",
              standard:
                "Are you in a safe spot? Off the road and out of traffic? I'm dispatching a tow truck. It should be there in about 30 minutes.",
              formal:
                "Are you currently situated in a secure location, clear of the roadway and vehicular traffic? I am dispatching a tow truck to your coordinates. The estimated time of arrival is approximately 30 minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I pulled over to the shoulder. My hazard lights are on. This is a rental car — do I need to call the rental company too?",
            textZh: "是的，我停在路肩了。双闪灯开着。这是租的车——我需要打电话给租车公司吗？",
            casualVersion: "Yeah, pulled over to the shoulder. Hazards are on. It's a rental — gotta call them too?",
            commonMistake: {
              wrong: "Yes, I parked on the side of the road. My double flash lights are on. This is a rent car...",
              correct: "Yes, I pulled over to the shoulder. My hazard lights are on. This is a rental car...",
              explanation: "“pulled over to the shoulder”指靠边停车，“hazard lights”是双闪灯，“rental car”更地道。",
            },
            formalityVariants: {
              casual: "Yeah, pulled over to the shoulder. Hazards are on. It's a rental — gotta call them too?",
              standard:
                "Yes, I pulled over to the shoulder. My hazard lights are on. This is a rental car — do I need to call the rental company too?",
              formal:
                "Yes, I have moved the vehicle to the roadside shoulder. My hazard lights are activated. This is a rental vehicle; am I required to contact the rental company as well?",
            },
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn:
              "Yes, you should notify the rental company. Their number should be on the rental agreement. The tow truck will take the car to the nearest garage. Do you need a ride somewhere?",
            textZh:
              "是的，您应该通知租车公司。电话号码在租车协议上。拖车会把车送到最近的修车厂。您需要搭便车去什么地方吗？",
            keyPhrases: [
              { en: "rental agreement", zh: "租车协议" },
              { en: "nearest garage", zh: "最近的修车厂" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Definitely give the rental place a heads-up. Their number should be in the paperwork. We'll tow it to the closest mechanic. Need a lift anywhere?",
                textZh: "一定要提前通知租车那边。电话号码在文件里。我们会拖到最近的修理厂。需要送你去哪吗？",
                actionHint: "give them a heads-up 就是提前通知，lift 就是搭便车",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, call the rental company — check your contract for the number. The tow truck will drop the car at a shop nearby. Do you need us to take you somewhere?",
                textZh: "对，打给租车公司——合同上有电话号码。拖车会把车送到附近的修理店。需要我们送你去什么地方吗？",
                actionHint: "drop the car 就是把车送到/放到",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, gotta notify the rental company. Their number's on the agreement. Tow truck'll take the car to the nearest garage. Need a ride somewhere?",
            commonMistake: {
              wrong: "Yes, you should tell the rental company. Their number is on the rental contract.",
              correct: "Yes, you should notify the rental company. Their number should be on the rental agreement.",
              explanation: "“notify”更正式且常用，“rental agreement”是租赁协议的常用说法。",
            },
            formalityVariants: {
              casual:
                "Yeah, gotta notify the rental company. Their number's on the agreement. Tow truck'll take the car to the nearest garage. Need a ride somewhere?",
              standard:
                "Yes, you should notify the rental company. Their number should be on the rental agreement. The tow truck will take the car to the nearest garage. Do you need a ride somewhere?",
              formal:
                "Yes, it is advisable to inform the rental company. Their contact information should be accessible on your rental agreement. The tow truck will transport the vehicle to the nearest authorized service center. Do you require transportation to an alternative location?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, can you drop me off at the nearest hotel? I'll need to sort this out with the rental company.",
            textZh: "好的，能把我送到最近的酒店吗？我需要和租车公司处理这件事。",
            casualVersion: "Yeah, can you drop me at the nearest hotel? Gotta sort this out with the rental company.",
            commonMistake: {
              wrong: "Yes, can you send me to the nearest hotel? I need to deal with this with the rental company.",
              correct:
                "Yes, can you drop me off at the nearest hotel? I'll need to sort this out with the rental company.",
              explanation: "“drop me off”是送某人到某地，“sort this out”指处理、解决问题，更自然。",
            },
            formalityVariants: {
              casual: "Yeah, can you drop me at the nearest hotel? Gotta sort this out with the rental company.",
              standard:
                "Yes, can you drop me off at the nearest hotel? I'll need to sort this out with the rental company.",
              formal:
                "Yes, would it be possible to be transported to the nearest hotel establishment? I will then need to resolve this matter with the rental company.",
            },
          },
          {
            speaker: "them",
            role: "道路救援",
            textEn:
              "No problem. The driver will take you wherever you need. Make sure to keep all receipts — the rental company's insurance should cover the towing and repairs.",
            textZh: "没问题。司机会送您去任何需要去的地方。确保保留所有收据——租车公司的保险应该能报销拖车和维修费用。",
            keyPhrases: [
              { en: "keep all receipts", zh: "保留所有收据" },
              { en: "cover the towing", zh: "报销拖车费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries, the driver will give you a ride wherever. Just hang onto every receipt — the rental insurance should pay for everything.",
                textZh: "没问题，司机会送你去任何地方。把每张收据都留好——租车保险应该能全额报销。",
                actionHint: "hang onto 就是保留/别丢掉",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, we'll drop you off. Save all your receipts — towing, repairs, taxi, whatever. The rental company's insurance should cover it.",
                textZh: "当然，我们送你。保留所有收据——拖车、维修、出租车，什么都留着。租车公司的保险应该能报销。",
                actionHint: "drop you off 就是送你到某地",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem. Driver'll take you wherever. Make sure to keep all receipts — rental company's insurance should cover the towing and repairs.",
            commonMistake: {
              wrong:
                "No problem. The driver will send you wherever you need. Keep all receipts — the rental company's insurance should pay for the towing and repairs.",
              correct:
                "No problem. The driver will take you wherever you need. Make sure to keep all receipts — the rental company's insurance should cover the towing and repairs.",
              explanation: "“cover”指保险公司报销费用，比“pay for”更地道。",
            },
            formalityVariants: {
              casual:
                "No problem. Driver'll take you wherever. Make sure to keep all receipts — rental company's insurance should cover the towing and repairs.",
              standard:
                "No problem. The driver will take you wherever you need. Make sure to keep all receipts — the rental company's insurance should cover the towing and repairs.",
              formal:
                "Certainly. The driver will transport you to your desired destination. Please ensure you retain all receipts, as the rental company's insurance policy should cover the costs associated with both towing and repairs.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 18. 迷路求助 ====================
  {
    id: "emergency-lost-directions",
    category: "emergency",
    titleZh: "迷路求助",
    titleEn: "Lost and Asking for Directions",
    description: "在陌生城市迷路后向路人或商店求助方向",
    otherRole: "路人/店员",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "basic",
        titleZh: "迷路求助基本流程",
        titleEn: "Basic Directions Assistance",
        description: "描述目的地、理解方向指引、到达安全区域",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I'm completely lost. I'm trying to get back to my hotel — the Marriott on 6th Street. Can you help me?",
            textZh: "打扰了，我完全迷路了。我想回我的酒店——第六街的万豪。能帮帮我吗？",
            culturalNote: "迷路时保持冷静，走到有人的主要街道或商店。保存酒店地址的截图以防没有网络。",
            casualVersion: "Excuse me, totally lost. Trying to get back to the Marriott on 6th. Can you help?",
            commonMistake: {
              wrong: "I am completely lost. I want to return to my hotel.",
              correct: "I'm completely lost. I'm trying to get back to my hotel.",
              explanation: '"I want to return" 语气生硬，"I\'m trying to get back" 更自然客气。',
            },
            formalityVariants: {
              casual: "Hey, I'm totally lost. Need to get back to the Marriott on 6th. Can you help me out?",
              standard:
                "Excuse me, I'm completely lost. I'm trying to get back to my hotel — the Marriott on 6th Street. Can you help me?",
              formal:
                "Pardon me, I seem to be rather disoriented. I am attempting to locate my accommodations, the Marriott situated on 6th Street. Would you be so kind as to offer some assistance?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Sure! You're actually not far. Walk two blocks that way, then turn right at the traffic light. You'll see it on the left.",
            textZh: "当然！你其实不远。往那个方向走两个街区，在红绿灯右转。就在左手边能看到了。",
            keyPhrases: [
              { en: "two blocks", zh: "两个街区" },
              { en: "turn right", zh: "右转" },
              { en: "traffic light", zh: "红绿灯" },
              { en: "on the left", zh: "在左手边" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, you're close! Just go straight down this way, take a right at the light, and it'll be right there on your left.",
                textZh: "哦你很近的！沿着这边直走，在红绿灯右转，就在你左边。",
                actionHint: "right there 就是就在那儿",
                frequency: "common",
              },
              {
                textEn:
                  "The Marriott? You're like two minutes away. Head that direction, hang a right at the stoplight. Can't miss it.",
                textZh: "万豪？你就两分钟的路。往那个方向走，在红绿灯右拐。不会错过的。",
                actionHint: "hang a right 就是右转的口语说法，can't miss it 就是不会错过",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah! You're actually close. Go two blocks that way, then right at the light. You'll see it on your left.",
            culturalNote: "美国常说'blocks'指街区，不是'street'",
            commonMistake: {
              wrong: "You are not far away. Walk two streets that way.",
              correct: "You're actually not far. Walk two blocks that way.",
              explanation: '"blocks"指“街区”，是距离单位，"streets"指街道本身。',
            },
            formalityVariants: {
              casual:
                "Yeah, you're pretty close. Just go two blocks that way, then right at the light. It'll be on your left.",
              standard:
                "Sure! You're actually not far. Walk two blocks that way, then turn right at the traffic light. You'll see it on the left.",
              formal:
                "Certainly. You are, in fact, quite nearby. Proceed two city blocks in that direction, then execute a right turn at the forthcoming traffic signal. The establishment will be visible on your left-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Two blocks that way and then right? My phone died so I can't use GPS. Is it walking distance?",
            textZh: "往那边两个街区然后右转？我手机没电了所以不能用GPS。走路能到吗？",
            casualVersion: "Two blocks and then right? My phone's dead, can't use GPS. Can I walk there?",
            commonMistake: {
              wrong: "Is it possible to walk there?",
              correct: "Is it walking distance?",
              explanation: '"Is it walking distance?" 是问走路能否到达最自然的方式。',
            },
            formalityVariants: {
              casual: "So, two blocks that way, then right? My phone's dead, no GPS. Is it walkable?",
              standard: "Two blocks that way and then right? My phone died so I can't use GPS. Is it walking distance?",
              formal:
                "To confirm, two blocks in that direction, followed by a right turn? My mobile device has ceased functioning, precluding GPS navigation. Is the destination within reasonable pedestrian proximity?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yes, it's about a 10-minute walk. If you reach the park, you've gone too far. The hotel is before the park, across from a pharmacy.",
            textZh: "是的，大约走10分钟。如果到了公园就走过了。酒店在公园前面，药店对面。",
            keyPhrases: [
              { en: "10-minute walk", zh: "走10分钟" },
              { en: "gone too far", zh: "走过了" },
              { en: "across from", zh: "对面" },
              { en: "pharmacy", zh: "药店" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, totally walkable. Like 10 minutes. If you hit the park, you went past it. It's right across the street from a drugstore.",
                textZh: "是的，完全走得到。大概10分钟。如果到了公园就走过了。就在一家药店的对面。",
                actionHint: "totally walkable 就是完全可以走到，drugstore 就是药店",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, it's walking distance. Maybe 10 minutes tops. Look for a pharmacy — the hotel's right opposite. Don't go as far as the park.",
                textZh: "当然，走路就到。最多10分钟。找一家药店——酒店就在正对面。不要走到公园那么远。",
                actionHint: "10 minutes tops 就是最多10分钟",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, like 10 mins walk. If you hit the park, you've gone too far. It's before the park, across from a pharmacy.",
            commonMistake: {
              wrong: "It's about 10 minutes by walking.",
              correct: "It's about a 10-minute walk.",
              explanation: '"a 10-minute walk" 是更地道、简洁的表达方式。',
            },
            formalityVariants: {
              casual:
                "Yep, 'bout a 10-minute walk. If you hit the park, you've overshot it. Hotel's before that, across from a pharmacy.",
              standard:
                "Yes, it's about a 10-minute walk. If you reach the park, you've gone too far. The hotel is before the park, across from a pharmacy.",
              formal:
                "Affirmative, the distance constitutes approximately a ten-minute pedestrian journey. Should you arrive at the park, you will have proceeded beyond your destination. The hotel is situated prior to the park, directly opposite a pharmacy.",
            },
          },
          {
            speaker: "you",
            textEn: "Is this neighborhood safe to walk around at night?",
            textZh: "这个街区晚上走路安全吗？",
            casualVersion: "Is this area safe to walk around at night?",
            culturalNote: "美国治安是旅游重点，可直接询问安全问题",
            commonMistake: {
              wrong: "Is this neighborhood safe when walking at night?",
              correct: "Is this neighborhood safe to walk around at night?",
              explanation: '"to walk around at night" 是更自然的表达方式。',
            },
            formalityVariants: {
              casual: "This area safe to walk at night?",
              standard: "Is this neighborhood safe to walk around at night?",
              formal:
                "May I inquire as to the safety of traversing this particular neighborhood on foot during the nocturnal hours?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "This area is generally safe, but stick to the main streets with the lights. Avoid the alleys. You'll be fine if you keep walking on this road.",
            textZh: "这个区域一般来说安全，但尽量走有灯的主街。避开小巷。沿着这条路走就没问题。",
            keyPhrases: [
              { en: "stick to the main streets", zh: "走主街" },
              { en: "avoid the alleys", zh: "避开小巷" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's pretty safe around here. Just stay on the well-lit streets and don't cut through any alleys. You'll be fine.",
                textZh: "这附近挺安全的。就走灯亮的街道，别抄小路。你不会有事的。",
                actionHint: "well-lit 就是灯光明亮的，cut through 就是抄近路穿过",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, this neighborhood's okay. Keep to the big roads where there's people and lights. Don't wander into the side streets.",
                textZh: "嗯，这个街区还行。走有人有灯的大路。别逛到小巷子里去。",
                actionHint: "keep to 就是走/待在",
                frequency: "common",
              },
            ],
            casualVersion:
              "This area's mostly safe, but stick to the main lit streets. Stay outta the alleys. You'll be fine just staying on this road.",
            commonMistake: {
              wrong: "This area is safe in general.",
              correct: "This area is generally safe.",
              explanation: '"generally safe" 是更常用、自然的表达。',
            },
            formalityVariants: {
              casual:
                "It's mostly safe here, just stay on the main lit streets. Skip the alleys. You'll be good if you just stick to this road.",
              standard:
                "This area is generally safe, but stick to the main streets with the lights. Avoid the alleys. You'll be fine if you keep walking on this road.",
              formal:
                "This vicinity is considered generally secure; however, it is advisable to confine your movements to the principal thoroughfares that are adequately illuminated. Please eschew traversing any alleyways. Your well-being will be assured provided you continue upon this present road.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you so much. One more thing — is there a convenience store nearby where I can charge my phone?",
            textZh: "太感谢了。再问一下——附近有便利店可以给手机充电吗？",
            casualVersion: "Thanks a lot. Also, any convenience stores nearby where I can charge my phone?",
            culturalNote: "美国便利店充电不普遍，常需购买产品或问询",
            commonMistake: {
              wrong: "Is there a convenience store where I can charge my phone nearby?",
              correct: "Is there a convenience store nearby where I can charge my phone?",
              explanation: '"nearby" 修饰便利店，位置更自然。',
            },
            formalityVariants: {
              casual: "Thanks! Quick question – any convenience stores around to charge my phone?",
              standard:
                "Thank you so much. One more thing — is there a convenience store nearby where I can charge my phone?",
              formal:
                "My sincere gratitude. I have one further inquiry, if I may: is there a convenience store in the immediate vicinity that provides facilities for charging a mobile telephone?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "There's a 7-Eleven right on the next corner. They usually have a charging station. Good luck getting back!",
            textZh: "下一个路口就有一家7-11。他们通常有充电站。祝你顺利回去！",
            keyPhrases: [
              { en: "on the next corner", zh: "下一个路口" },
              { en: "charging station", zh: "充电站" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, there's a 7-Eleven just around the corner. Pretty sure they have a spot to charge your phone. Take care!",
                textZh: "有的，拐角就有一家7-11。应该有地方给手机充电。保重！",
                actionHint: "just around the corner 就是拐角就到了",
                frequency: "common",
              },
              {
                textEn:
                  "There's a convenience store a block up — they've got outlets. You can probably plug in there. Good luck!",
                textZh: "前面一个街区有便利店——有插座。你应该能在那充电。祝好运！",
                actionHint: "outlets 就是电源插座",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "There's a 7-Eleven on the next corner. They usually got charging stations. Good luck getting back!",
            commonMistake: {
              wrong: "Next corner has a 7-Eleven.",
              correct: "There's a 7-Eleven right on the next corner.",
              explanation: '"There\'s a..." 是更自然的介绍有某个地方的句式。',
            },
            formalityVariants: {
              casual: "7-Eleven's right on the next corner. They usually have charging stations. Good luck!",
              standard:
                "There's a 7-Eleven right on the next corner. They usually have a charging station. Good luck getting back!",
              formal:
                "A 7-Eleven establishment is located immediately around the forthcoming intersection. They typically provide a facility for electronic device charging. I wish you a safe return.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 19. 遭遇诈骗 ====================
  {
    id: "emergency-scam-encounter",
    category: "emergency",
    titleZh: "遭遇诈骗",
    titleEn: "Scam Encounter",
    description: "在国外遭遇旅游诈骗后识别和处理",
    otherRole: "骗子/警察",
    otherRoleIcon: "🎭",
    flows: [
      {
        id: "basic",
        titleZh: "识别和应对诈骗",
        titleEn: "Identifying and Handling a Scam",
        description: "被推销骗局套路后拒绝、离开并报案",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "陌生人",
            textEn:
              "Hey friend! I found this gold ring on the ground. It must be worth a lot! You can have it — I just need some money for food.",
            textZh: "嘿朋友！我在地上捡到这个金戒指。肯定很值钱！给你——我只需要一些钱买吃的。",
            culturalNote: "骗子常用的搭讪方式，利用小恩小惠引诱。",
            keyPhrases: [
              { en: "gold ring", zh: "金戒指" },
              { en: "worth a lot", zh: "很值钱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Excuse me! Look what I just found! A gold ring, right here on the ground. Must be worth something. Here, take it — just help me out with some cash for a meal.",
                textZh: "打扰了！看我刚捡到什么！一个金戒指，就在地上。肯定值点钱。给你——帮我个忙出点钱吃饭就行。",
                actionHint: "help me out 就是帮帮忙，这是骗局套路",
                frequency: "common",
              },
              {
                textEn:
                  "Hey! You dropped this! Oh wait, it's gold! Tell you what, you keep it, just spot me a few bucks for food.",
                textZh: "嘿！你掉了这个！哦等等，是金的！这样吧，你留着，借我几块钱吃饭。",
                actionHint: "spot me 就是借我点钱，这也是骗术开场",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Hey friend! Found this gold ring on the ground. Must be worth a lot! You can have it — just need some cash for food.",
            commonMistake: {
              wrong: "It should be very valuable!",
              correct: "It must be worth a lot!",
              explanation: '"should" (应该) 听起来像推测，"must" (肯定) 更强调确定性。',
            },
            formalityVariants: {
              casual: "Hey buddy! Found this gold ring, looks valuable! You can have it, just need some food money.",
              standard:
                "Hey friend! I found this gold ring on the ground. It must be worth a lot! You can have it — I just need some money for food.",
              formal:
                "Excuse me, sir/madam. I've discovered this gold ring. It appears to be quite valuable. You may have it; I simply require some funds for sustenance.",
            },
          },
          {
            speaker: "you",
            textEn: "No, thank you. I'm not interested. Please leave me alone.",
            textZh: "不，谢谢。我不感兴趣。请别打扰我。",
            culturalNote: "这是经典的'金戒指骗局'，在欧美旅游景点很常见。坚定拒绝，不要接任何东西。",
            casualVersion: "Nah, thanks. Not interested. Leave me alone.",
            commonMistake: {
              wrong: "I don't interest.",
              correct: "I'm not interested.",
              explanation: '"interest" 作动词时通常指"使...感兴趣"，"不感兴趣"用 be interested。',
            },
            formalityVariants: {
              casual: "Nah, thanks. Not interested. Just leave me be.",
              standard: "No, thank you. I'm not interested. Please leave me alone.",
              formal: "Thank you, but I'm not interested. I would appreciate it if you would leave me alone.",
            },
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn:
              "Come on, just $20. This ring is real gold! You're being rude. In our culture, you can't refuse a gift.",
            textZh: "来嘛，就20美元。这个戒指是真金的！你这样很没礼貌。在我们文化里，不能拒绝礼物。",
            keyPhrases: [
              { en: "being rude", zh: "没礼貌" },
              { en: "can't refuse a gift", zh: "不能拒绝礼物" },
            ],
            alternativeExpressions: [
              {
                textEn: "Aw come on, it's real gold! Just $20! Why you gotta be like that? I'm just trying to be nice!",
                textZh: "哎，这是真金的！就20块！你干嘛这样？我只是想做好事！",
                actionHint: "why you gotta be like that 就是你干嘛这样，是施压手段",
                frequency: "common",
              },
              {
                textEn:
                  "Look, I found it fair and square. Just give me a little something for it. You can't say no to a gift, man!",
                textZh: "你看，我光明正大捡到的。给我点什么就行。你不能拒绝礼物的，兄弟！",
                actionHint: "fair and square 就是光明正大的，这是继续施压",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "C'mon, just twenty bucks. This ring's real gold! You're being rude. In our culture, you can't refuse a gift.",
            culturalNote: "骗子利用文化差异或礼节进行道德绑架。",
            commonMistake: {
              wrong: "You are rude.",
              correct: "You're being rude.",
              explanation: '"be + ing" 强调的是此刻正在发生的行为，而 "are" 是普遍性的描述。',
            },
            formalityVariants: {
              casual: "C'mon, only twenty. It's real gold! You're kinda rude. Can't refuse a gift in our culture.",
              standard:
                "Come on, just $20. This ring is real gold! You're being rude. In our culture, you can't refuse a gift.",
              formal:
                "Sir/Madam, it's merely $20. This ring is composed of genuine gold! Your conduct is impolite. Within our cultural traditions, it is considered improper to decline a gift.",
            },
          },
          {
            speaker: "you",
            textEn: "I said no. This is a scam. I'm going to call the police if you don't stop.",
            textZh: "我说了不。这是骗局。如果你不停下来我就报警了。",
            culturalNote: "直接表示“报警”在美国是很严肃的警告，通常会有效震慑骗子。",
            casualVersion: "I said no! This is a scam. I'm calling the cops if you don't stop.",
            commonMistake: {
              wrong: "I will call the police.",
              correct: "I'm going to call the police.",
              explanation: '"I\'m going to" 表明已有计划或即刻的意图，比 "will" 更强调。',
            },
            formalityVariants: {
              casual: "Nope, I said no. This is a scam. I'm calling the cops if you don't back off.",
              standard: "I said no. This is a scam. I'm going to call the police if you don't stop.",
              formal:
                "I have already refused. This is clearly a fraudulent attempt. I will be compelled to contact law enforcement if you do not cease immediately.",
            },
          },
          {
            speaker: "them",
            textEn: "Fine, fine! Take it easy, no problem!",
            textZh: "好好好！别紧张，没事没事！",
            culturalNote: "“Take it easy”在这里是安抚对方、息事宁人的意思。",
            alternativeExpressions: [
              {
                textEn: "Okay okay, relax! I was just being friendly! Forget about it!",
                textZh: "好好好，放松！我就是友好一下！算了算了！",
                actionHint: "骗子被识破后通常假装自己无辜",
                frequency: "common",
              },
              {
                textEn: "Whoa, chill out! No need to get the cops involved. I'm going, I'm going!",
                textZh: "哎，别激动！不用报警。我走我走！",
                actionHint: "chill out 就是别激动/冷静",
                frequency: "common",
              },
            ],
            casualVersion: "Fine, fine! Easy, easy, no prob!",
            commonMistake: {
              wrong: "Don't be nervous!",
              correct: "Take it easy!",
              explanation: '"Take it easy" 是地道口语，意为"别紧张/放松点"，不宜直译。',
            },
            formalityVariants: {
              casual: "Alright, alright! Relax, no biggie!",
              standard: "Fine, fine! Take it easy, no problem!",
              formal: "Very well, very well. Please remain calm; there is no issue.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Officer, I was just approached by a scammer near the Eiffel Tower. He tried to sell me a fake gold ring.",
            textZh: "警官，我刚才在埃菲尔铁塔附近被一个骗子搭讪了。他试图卖给我一个假金戒指。",
            culturalNote: "在美国，报警时要清晰简洁地说明事件和地点。",
            casualVersion:
              "Officer, just got approached by a scammer near the Eiffel Tower. He tried selling me a fake gold ring.",
            commonMistake: {
              wrong: "A scammer talked to me.",
              correct: "I was approached by a scammer.",
              explanation: '"approach" 更正式且地道，表示主动搭讪，"talk to" 稍显平淡。',
            },
            formalityVariants: {
              casual: "Officer, some scammer just hit me up by the Eiffel Tower. Tried to sell me a fake gold ring.",
              standard:
                "Officer, I was just approached by a scammer near the Eiffel Tower. He tried to sell me a fake gold ring.",
              formal:
                "Officer, I wish to report an incident. I was just accosted by an individual attempting a fraudulent transaction involving a counterfeit gold ring near the Eiffel Tower.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Unfortunately, this is a very common scam in tourist areas. Did you give them any money?",
            textZh: "很遗憾，这是旅游区非常常见的骗局。你给了他们钱吗？",
            culturalNote: "警察对游客区常见的诈骗往往会表现出无奈。",
            keyPhrases: [
              { en: "common scam", zh: "常见骗局" },
              { en: "tourist areas", zh: "旅游区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, we see this all the time around here. The ring trick is one of the oldest scams. Did they get any money out of you?",
                textZh: "是的，这种事在这附近天天发生。金戒指骗术是最老的骗局之一。他们从你这骗到钱了吗？",
                actionHint: "get money out of you 就是从你这骗到钱",
                frequency: "common",
              },
              {
                textEn: "That's a well-known hustle in this part of town. You didn't hand over any cash, did you?",
                textZh: "这是这一带出了名的骗术。你没给钱吧？",
                actionHint: "hustle 就是骗术/骗局",
                frequency: "occasional",
              },
            ],
            casualVersion: "Unfortunately, this is a super common scam in tourist spots. You give 'em any money?",
            commonMistake: {
              wrong: "This is a very ordinary scam.",
              correct: "This is a very common scam.",
              explanation: '"common" (常见的) 更适合描述某种现象的普遍性，"ordinary" (普通的) 常指一般事物。',
            },
            formalityVariants: {
              casual: "Yeah, this is a super common scam in tourist spots. Give 'em any cash?",
              standard: "Unfortunately, this is a very common scam in tourist areas. Did you give them any money?",
              formal:
                "Regrettably, this particular fraudulent scheme is quite prevalent in areas frequented by tourists. Did you provide them with any funds?",
            },
          },
          {
            speaker: "you",
            textEn:
              "No, I recognized it as a scam and refused. But I wanted to report it in case they target other tourists.",
            textZh: "没有，我认出是骗局就拒绝了。但我想报告一下以防他们骗其他游客。",
            culturalNote: "主动举报诈骗行为是积极的公民举动，值得鼓励。",
            casualVersion:
              "Nah, I recognized it as a scam and said no. Just wanted to report it in case they target other tourists.",
            commonMistake: {
              wrong: "I want to report it if they target other tourists.",
              correct: "I wanted to report it in case they target other tourists.",
              explanation: '"in case" 表示"以防万一"，强调预防性，"if" 仅表示条件。',
            },
            formalityVariants: {
              casual: "Nah, saw it was a scam and bailed. Just wanted to report it so they don't hit up others.",
              standard:
                "No, I recognized it as a scam and refused. But I wanted to report it in case they target other tourists.",
              formal:
                "No, I identified it as a fraudulent attempt and declined their overtures. However, I felt it important to report the incident to prevent them from targeting other unsuspecting tourists.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Good for you. We're aware of this group. Be careful of other scams too — fake petitions, friendship bracelets, and people offering 'free' photos. Never hand over your phone or wallet to strangers.",
            textZh:
              "你做得对。我们知道这个团伙。还要小心其他骗局——假请愿书、友谊手环，还有人要给你拍'免费'照片。永远不要把手机或钱包给陌生人。",
            culturalNote: "美国警察在执勤时通常会比较直接，告知游客需要注意的事项。",
            keyPhrases: [
              { en: "fake petitions", zh: "假请愿书" },
              { en: "friendship bracelets", zh: "友谊手环" },
              { en: "never hand over", zh: "永远不要交给" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Smart move. We know about these guys. Watch out for other tricks too — clipboard scams, people tying bracelets on your wrist, or offering free photos. Keep your stuff close.",
                textZh:
                  "做得好。我们知道这些人。还要小心其他套路——拿夹板的签名骗局、往你手腕上系手链的、要给你拍免费照的。看好你的东西。",
                actionHint: "clipboard scams 就是拿签名板的骗局",
                frequency: "common",
              },
              {
                textEn:
                  "You did the right thing. Be aware there are other scams too — people with petitions, bracelet sellers who demand payment, 'free' photo ops. Don't give your phone to anyone.",
                textZh: "你做得对。注意还有其他骗局——拿请愿书的、强卖手环要钱的、'免费'合影。别把手机给任何人。",
                actionHint: "demand payment 就是强行要钱",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good for you. We know about this group. Watch out for other scams too — fake petitions, friendship bracelets, and folks offering 'free' pics. Never hand over your phone or wallet to strangers.",
            commonMistake: {
              wrong: "Pay attention to other scams.",
              correct: "Be careful of other scams.",
              explanation: '"Be careful of" 指警惕或提防危险，"pay attention to" 只是留意。',
            },
            formalityVariants: {
              casual:
                "Atta boy/girl. We know these guys. Watch out for other scams too — fake petitions, bracelets, and 'free' pics. Don't ever give your phone or wallet to randos.",
              standard:
                "Good for you. We're aware of this group. Be careful of other scams too — fake petitions, friendship bracelets, and people offering 'free' photos. Never hand over your phone or wallet to strangers.",
              formal:
                "Commendable indeed. We are familiar with this particular group. Please exercise caution regarding other common scams as well, such as fraudulent petitions, coercive friendship bracelet schemes, and individuals purporting to offer complimentary photographs. Under no circumstances should you entrust your personal belongings, such as your phone or wallet, to unfamiliar individuals.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 20. 暴风雪被困 ====================
  {
    id: "emergency-blizzard-stranded",
    category: "emergency",
    titleZh: "暴风雪被困",
    titleEn: "Blizzard Stranded",
    description: "在暴风雪中被困在车里或路上时求助",
    otherRole: "救援人员/酒店前台",
    otherRoleIcon: "❄️",
    flows: [
      {
        id: "basic",
        titleZh: "暴风雪被困求助流程",
        titleEn: "Blizzard Emergency Assistance",
        description: "被困后呼叫救援、保暖、等待帮助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I'm stuck in my car on Route 80. The road is completely blocked by snow. I can't see anything and I'm running low on gas.",
            textZh: "我被困在80号公路上的车里了。路完全被雪堵住了。什么都看不见，而且油快没了。",
            culturalNote: "暴风雪被困在车内时：保持引擎间歇运行取暖，确保排气管没被雪堵住以防一氧化碳中毒。",
            casualVersion:
              "Stuck in my car on Route 80. Road's totally blocked by snow. Can't see anything and I'm low on gas.",
            commonMistake: {
              wrong: "My car stuck on Route 80. Road blocked by snow. Gas not much.",
              correct:
                "I'm stuck in my car on Route 80. The road is completely blocked by snow. I'm running low on gas.",
              explanation: '"My car stuck" 语法错误，"gas not much" 不自然，地道表达是 "I\'m running low on gas"。',
            },
            formalityVariants: {
              casual:
                "Stuck in my car on Route 80. Road's totally blocked by snow, can't see anything, and I'm low on gas.",
              standard:
                "I'm stuck in my car on Route 80. The road is completely blocked by snow. I can't see anything and I'm running low on gas.",
              formal:
                "I regret to inform you that I am currently stranded in my vehicle on Route 80. The roadway is impassable due to heavy snowfall, visibility is zero, and my fuel level is critically low.",
            },
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn:
              "I understand your situation. What's your exact location? Do you have mile markers or any landmarks nearby?",
            textZh: "我了解您的情况。您的确切位置在哪里？附近有里程标或地标吗？",
            commonMistake: {
              wrong: "Your exact location is what?",
              correct: "What's your exact location?",
              explanation: "美式口语中，询问位置用 'What's your exact location?' 或 'Where exactly are you?' 更自然，语序更流畅。",
            },
            keyPhrases: [
              { en: "mile markers", zh: "里程标" },
              { en: "landmarks", zh: "地标" },
            ],
            alternativeExpressions: [
              {
                textEn: "Copy that. Can you give me a more specific location? Any mile markers or signs you can see?",
                textZh: "收到。能给我更具体的位置吗？能看到什么里程标或路牌吗？",
                actionHint: "copy that 在无线电通信中就是收到",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, hang tight. Do you know exactly where you are? Look around for a highway marker or an exit sign.",
                textZh: "好的，稳住。你知道确切在哪吗？看看周围有没有高速标志或出口牌。",
                actionHint: "hang tight 就是稳住/等一下",
                frequency: "common",
              },
            ],
            casualVersion: "Got it. Where exactly are you? Any mile markers or landmarks close by?",
            formalityVariants: {
              casual: "Okay, got it. Where are you exactly? Any mile markers or landmarks around?",
              standard:
                "I understand your situation. What's your exact location? Do you have mile markers or any landmarks nearby?",
              formal:
                "I comprehend the gravity of your situation. Could you please provide your precise location? Are there any identifiable mile markers or prominent landmarks in your vicinity?",
            },
          },
          {
            speaker: "you",
            textEn: "I passed mile marker 47 about ten minutes ago. There are other cars stuck here too.",
            textZh: "大约十分钟前我经过了47号里程标。这里还有其他车也被困了。",
            casualVersion: "Passed mile marker 47 like ten minutes ago. Other cars are stuck here too.",
            commonMistake: {
              wrong: "I passed mile marker 47 about ten minutes before. Here are also other cars stuck.",
              correct: "I passed mile marker 47 about ten minutes ago. There are other cars stuck here too.",
              explanation:
                '"before" 不用于表示从现在算起多久以前，应是 "ago"。"Here are" 这种表达不自然，应是 "There are"。',
            },
            formalityVariants: {
              casual: "Passed mile marker 47 'bout ten minutes back. Lots of other cars stuck here too.",
              standard: "I passed mile marker 47 about ten minutes ago. There are other cars stuck here too.",
              formal:
                "Approximately ten minutes prior, I traversed mile marker 47. It appears several other vehicles are also immobilized at this location.",
            },
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn:
              "We've dispatched snowplows and emergency vehicles to your area. It may take 1 to 2 hours. Stay in your vehicle. Run the engine for heat, but crack a window slightly to avoid carbon monoxide poisoning.",
            textZh:
              "我们已经派铲雪车和应急车辆去你那个区域了。可能需要1到2小时。待在车里。开引擎取暖，但要把车窗留一点缝隙以防一氧化碳中毒。",
            culturalNote: "美国非常重视安全，即使求暖也要防一氧化碳中毒。",
            keyPhrases: [
              { en: "snowplows", zh: "铲雪车" },
              { en: "stay in your vehicle", zh: "待在车里" },
              { en: "crack a window", zh: "留一点缝隙" },
              { en: "carbon monoxide", zh: "一氧化碳" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got plows and rescue teams heading your way. Could be an hour or two. Don't leave the car. Keep the engine running for heat but open the window a crack so you don't get CO poisoning.",
                textZh:
                  "铲雪车和救援队正在去你那。可能要一两个小时。别离开车。开引擎取暖但把窗户开条缝别一氧化碳中毒。",
                actionHint: "CO = carbon monoxide 一氧化碳",
                frequency: "common",
              },
              {
                textEn:
                  "Help is on the way but it'll take a while, maybe 1-2 hours. Stay put. If you run the heater, keep a window cracked — exhaust fumes can kill you in a snowbank.",
                textZh: "救援在路上了但需要一段时间，大概1-2小时。待着别动。开暖气的话留个窗缝——被雪埋的车尾气能致命。",
                actionHint: "stay put 就是待着别动",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Sent snowplows and emergency vehicles your way. Might take an hour or two. Stay in your car. Run the engine for heat, but crack a window a bit for carbon monoxide.",
            commonMistake: {
              wrong:
                "We sent snowplows and emergency cars. It needs 1 to 2 hours. Open a little window to avoid carbon monoxide poison.",
              correct:
                "We've dispatched snowplows and emergency vehicles. It may take 1 to 2 hours. Crack a window slightly to avoid carbon monoxide poisoning.",
              explanation:
                '"It needs" 表达不自然，应是 "It takes"。"open a little window" 不如 "crack a window" 地道。"poison" 是名词，中毒是 "poisoning"。',
            },
            formalityVariants: {
              casual:
                "We've got snowplows and emergency vehicles heading your way. Could be 1-2 hours. Stay put in your car. Run the engine for heat, but just crack a window a tiny bit for the carbon monoxide.",
              standard:
                "We've dispatched snowplows and emergency vehicles to your area. It may take 1 to 2 hours. Stay in your vehicle. Run the engine for heat, but crack a window slightly to avoid carbon monoxide poisoning.",
              formal:
                "We have initiated the dispatch of snowplows and emergency response units to your vicinity. Please anticipate an arrival time of approximately one to two hours. It is imperative that you remain within your vehicle. You may operate the engine for warmth, however, ensure a window is slightly ajar to mitigate the risk of carbon monoxide inhalation.",
            },
          },
          {
            speaker: "you",
            textEn: "I have about a quarter tank of gas left. I don't have blankets but I have a heavy coat.",
            textZh: "油箱大概还有四分之一。没有毯子，但有一件厚外套。",
            casualVersion: "Got about a quarter tank of gas left. No blankets, but I got a heavy coat.",
            commonMistake: {
              wrong: "I have quarter tank gas left. No blanket, but I have a heavy coat.",
              correct: "I have about a quarter tank of gas left. I don't have blankets but I have a heavy coat.",
              explanation:
                '"quarter tank gas" 语法不完整，应是 "a quarter tank of gas"。"blanket" 泛指没有毯子时用复数 "blankets"。',
            },
            formalityVariants: {
              casual: "Got like a quarter tank of gas left. No blankets, but I do have a thick coat.",
              standard: "I have about a quarter tank of gas left. I don't have blankets but I have a heavy coat.",
              formal:
                "My fuel gauge indicates approximately one-quarter of a tank remaining. Regrettably, I lack blankets, however, I am equipped with a substantial winter coat.",
            },
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn:
              "Run the engine for 10 minutes every hour to conserve fuel. Put on all your layers. If you have floor mats, you can use those for extra insulation. We'll update you by phone.",
            textZh:
              "每小时开10分钟引擎以节省燃油。穿上所有的衣服。如果有脚垫，可以用来额外保暖。我们会电话通知你最新情况。",
            keyPhrases: [
              { en: "conserve fuel", zh: "节省燃油" },
              { en: "layers", zh: "层（衣服）" },
              { en: "insulation", zh: "保暖/隔热" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Don't run the engine non-stop — 10 on, 50 off, to save gas. Bundle up with everything you've got. Floor mats can help keep heat in. We'll call you with updates.",
                textZh:
                  "别一直开引擎——开10分钟停50分钟，省油。把所有东西都裹上。脚垫可以帮忙保暖。我们有情况电话通知你。",
                actionHint: "bundle up 就是裹紧/穿厚点",
                frequency: "common",
              },
              {
                textEn:
                  "To stretch your fuel, only run the engine 10 minutes per hour. Layer up and use anything you can find for warmth. I'll keep you posted by phone.",
                textZh: "为了省油，每小时只开10分钟引擎。多穿几层，用你能找到的任何东西保暖。我电话通知你最新情况。",
                actionHint: "keep you posted 就是随时通知你",
                frequency: "common",
              },
            ],
            casualVersion:
              "Run the engine ten mins every hour to save gas. Put on all your layers. Got floor mats? Use 'em for extra warmth. We'll call you with updates.",
            commonMistake: {
              wrong:
                "Every hour run engine 10 minutes to save gas. Wear all your clothes. If you have floor mats, use them to keep warm. We will call you update.",
              correct:
                "Run the engine for 10 minutes every hour to conserve fuel. Put on all your layers. If you have floor mats, you can use those for extra insulation. We'll update you by phone.",
              explanation:
                '祈使句通常以动词开头，时间状语放句尾。 "wear" 指穿着，"put on" 指穿上。"keep warm" 可以，但 "insulation" 更专业。 "call you update" 语法不完整，应为 "update you by phone"。',
            },
            formalityVariants: {
              casual:
                "Run the engine ten minutes each hour to save fuel. Pile on all your clothes. If you've got floor mats, use 'em for extra warmth. We'll just call you with updates.",
              standard:
                "Run the engine for 10 minutes every hour to conserve fuel. Put on all your layers. If you have floor mats, you can use those for extra insulation. We'll update you by phone.",
              formal:
                "To optimize fuel conservation, operate the engine for ten-minute intervals each hour. Don all available layers of clothing. Should you possess floor mats, they may be utilized to provide additional thermal insulation. We will provide updates via telephone.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. My phone battery is at 20%. How will I know when help arrives?",
            textZh: "谢谢。我手机电量只剩20%了。怎么知道救援到了？",
            casualVersion: "Thanks. Phone battery's at 20%. How'll I know when help gets here?",
            commonMistake: {
              wrong: "Thank you. My phone battery 20%. How know help arrives?",
              correct: "Thank you. My phone battery is at 20%. How will I know when help arrives?",
              explanation: '"battery 20%" 语法不完整，应加 "is at"。疑问句语序 "How will I know"。',
            },
            formalityVariants: {
              casual: "Thanks. Phone's at 20%. How'll I know when help gets here?",
              standard: "Thank you. My phone battery is at 20%. How will I know when help arrives?",
              formal:
                "Thank you. My mobile phone's battery life is presently at 20%. What will be the indicator of the arrival of assistance?",
            },
          },
          {
            speaker: "them",
            role: "救援调度",
            textEn:
              "Turn off all non-essential apps to save battery. You'll hear the snowplows. If emergency vehicles arrive, they'll have flashing lights and loudspeakers. Hang in there.",
            textZh:
              "关掉所有不必要的APP以节省电量。你会听到铲雪车的声音。如果应急车辆到了，会有闪光灯和扩音器。坚持住。",
            keyPhrases: [
              { en: "save battery", zh: "节省电量" },
              { en: "flashing lights", zh: "闪光灯" },
              { en: "hang in there", zh: "坚持住" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Kill all the apps you don't need to save juice. You'll hear the plows coming. Emergency vehicles will have lights and sirens. Stay strong, we're coming.",
                textZh: "把不需要的APP都关了省电。你会听到铲雪车来的声音。应急车辆会有灯和警笛。坚持住，我们在赶来。",
                actionHint: "save juice 口语里指省电",
                frequency: "common",
              },
              {
                textEn:
                  "Turn your phone on low-power mode. When we get close, you'll see the lights. Just hold on, help is coming.",
                textZh: "把手机调到低电量模式。我们到附近时你会看到灯光。再撑一下，救援在路上了。",
                actionHint: "hold on 就是再撑一下",
                frequency: "common",
              },
            ],
            casualVersion:
              "Shut down all non-essential apps to save battery. You'll hear the snowplows. If emergency vehicles show up, they'll have flashing lights and loudspeakers. Just hang in there.",
            commonMistake: {
              wrong:
                "Close all not important apps to save battery. You will hear snowplows. If emergency cars arrive, they will have flashing lights and loudspeakers. Hang on.",
              correct:
                "Turn off all non-essential apps to save battery. You'll hear the snowplows. If emergency vehicles arrive, they'll have flashing lights and loudspeakers. Hang in there.",
              explanation:
                '"not important" 不如 "non-essential" 地道。"cars" 不如 "vehicles" 正式。"hang on" 多指抓紧或稍等，"hang in there" 指坚持住。',
            },
            formalityVariants: {
              casual:
                "Kill all the apps you don't need to save your battery. You'll hear the snowplows coming. If emergency vehicles show up, they'll have flashing lights and speakers. Just hang tight.",
              standard:
                "Turn off all non-essential apps to save battery. You'll hear the snowplows. If emergency vehicles arrive, they'll have flashing lights and loudspeakers. Hang in there.",
              formal:
                "Deactivate all non-essential applications to conserve battery life. The approach of snowplows will be audibly apparent. Should emergency response vehicles arrive, they will be identifiable by flashing lights and activated loudspeakers. Please maintain your resolve.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 21. 手机丢失 ====================
  {
    id: "emergency-lost-phone",
    category: "emergency",
    titleZh: "手机丢失",
    titleEn: "Lost Phone",
    description: "在国外手机丢失后寻找、锁定和处理",
    otherRole: "商店店员/酒店前台",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic",
        titleZh: "手机丢失处理流程",
        titleEn: "Handling a Lost Phone",
        description: "回忆丢失地点、借用电话、远程锁定",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I think I lost my phone. Can I use your phone to call my number? Maybe someone picked it up.",
            textZh: "我觉得我手机丢了。能用一下你的电话打我号码吗？也许有人捡到了。",
            culturalNote: "出国前开启Find My iPhone/Find My Device功能，可以远程锁定和定位手机。",
            casualVersion: "Think I lost my phone. Can I use yours to call my number? Maybe someone picked it up.",
            commonMistake: {
              wrong: "My phone lost.",
              correct: "I lost my phone.",
              explanation: "“Lost”是动词，需要主语，表示“我”弄丢了手机。",
            },
            formalityVariants: {
              casual: "Think I lost my phone. Can I use yours to call my number? Maybe someone picked it up.",
              standard: "I think I lost my phone. Can I use your phone to call my number? Maybe someone picked it up.",
              formal:
                "Pardon me, but I seem to have misplaced my phone. Would it be possible to use your phone to dial my number? Perhaps someone has found it.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, go ahead. Do you remember where you last had it?",
            textZh: "当然，请用。你记得最后在哪用过手机吗？",
            keyPhrases: [
              { en: "go ahead", zh: "请用" },
              { en: "where you last had it", zh: "最后在哪用过" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, no problem, here you go. Any idea where you might've left it?",
                textZh: "没问题，给你。知道可能落在哪了吗？",
                actionHint: "might've = might have 可能",
                frequency: "common",
              },
              {
                textEn: "Of course, use mine. Think back — when's the last time you had it in your hand?",
                textZh: "当然，用我的。想想——你最后一次拿着手机是什么时候？",
                actionHint: "think back 就是回想一下",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, go for it. Remember where you last had it?",
            commonMistake: {
              wrong: "Sure, use it.",
              correct: "Sure, go ahead.",
              explanation: "“Go ahead”在这里更自然地表示“请便”、“请用”。",
            },
            formalityVariants: {
              casual: "Yeah, go for it. Remember where you last had it?",
              standard: "Sure, go ahead. Do you remember where you last had it?",
              formal: "Certainly, please do. Could you recall the last location you had it?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I think I left it in the taxi about 30 minutes ago. No one is answering. Can I use your computer to track my phone online?",
            textZh: "我觉得大约30分钟前落在出租车里了。没有人接。能用一下你的电脑在线定位我的手机吗？",
            casualVersion:
              "Left it in the taxi 'bout 30 mins ago. No one's answering. Can I use your computer to track it online?",
            commonMistake: {
              wrong: "Nobody answer.",
              correct: "No one is answering.",
              explanation: "描述正在发生的事情，需要用现在进行时，动词be不能省略，且主谓要一致。",
            },
            formalityVariants: {
              casual:
                "Left it in the taxi 'bout 30 mins ago. No one's answering. Can I use your computer to track it online?",
              standard:
                "I think I left it in the taxi about 30 minutes ago. No one is answering. Can I use your computer to track my phone online?",
              formal:
                "I believe I may have left it in a taxi approximately 30 minutes ago. There is currently no answer. May I have permission to use your computer to track its location online?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Of course. You can use this computer. Do you know your Apple ID or Google account to access Find My Phone?",
            textZh: "当然可以。你可以用这台电脑。你知道你的Apple ID或Google账号来登录查找手机吗？",
            keyPhrases: [
              { en: "Find My Phone", zh: "查找手机" },
              { en: "Apple ID", zh: "Apple ID" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, hop on this computer. Can you log into iCloud or your Google account to track it?",
                textZh: "当然，用这台电脑。你能登录iCloud或Google账号来定位吗？",
                actionHint: "hop on 就是用一下",
                frequency: "common",
              },
              {
                textEn: "Go ahead, use the computer. Do you know how to get into Find My iPhone or Find My Device?",
                textZh: "请用电脑。你知道怎么进'查找我的iPhone'或'查找我的设备'吗？",
                actionHint: "get into 就是登录/进入",
                frequency: "common",
              },
            ],
            casualVersion: "Course. Just use this one. Got your Apple ID or Google account for Find My Phone?",
            commonMistake: {
              wrong: "Do you know your Apple ID or Google account to log in Find My Phone?",
              correct: "Do you know your Apple ID or Google account to access Find My Phone?",
              explanation: "“Access”更准确地表达了“登录并使用”的功能。",
            },
            formalityVariants: {
              casual: "Course. Just use this one. Got your Apple ID or Google account for Find My Phone?",
              standard:
                "Of course. You can use this computer. Do you know your Apple ID or Google account to access Find My Phone?",
              formal:
                "Certainly. This computer is available for your use. Are you familiar with your Apple ID or Google account credentials to access the Find My Phone service?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Yes, I can log in. It shows my phone is moving — it's still in the taxi. Can I send a message to the screen with a phone number to call back?",
            textZh: "是的，我能登录。显示我的手机在移动——还在出租车上。我能发送一条消息到屏幕上附上回电号码吗？",
            casualVersion:
              "Yep, I can log in. It's moving — still in the taxi. Can I send a message to the screen with a number to call?",
            commonMistake: {
              wrong: "It shows my phone moving.",
              correct: "It shows my phone is moving.",
              explanation: "描述手机正在移动的状态，需要使用现在进行时，动词be不能省略。",
            },
            formalityVariants: {
              casual:
                "Yep, I can log in. It's moving — still in the taxi. Can I send a message to the screen with a number to call?",
              standard:
                "Yes, I can log in. It shows my phone is moving — it's still in the taxi. Can I send a message to the screen with a phone number to call back?",
              formal:
                "Yes, I am able to log in. The system indicates my phone is currently in motion, suggesting it remains within the taxi. Would it be possible to display a message on the screen, including a contact number for a return call?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, do that. Also, do you remember the taxi company? You might be able to call their lost and found department.",
            textZh: "好的，就这么做。还有，你记得是哪家出租车公司吗？你也许可以打电话给他们的失物招领部门。",
            keyPhrases: [
              { en: "taxi company", zh: "出租车公司" },
              { en: "lost and found", zh: "失物招领" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good idea, send a message to the screen. Also, which cab company was it? They usually have a lost and found you can call.",
                textZh: "好主意，往屏幕上发条消息。还有，是哪家出租车公司？他们一般有失物招领可以打电话。",
                actionHint: "which cab company 就是哪家出租车公司",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, do that for sure. Hey, do you remember the cab's name or number? You could try their lost property line.",
                textZh: "对，一定要这么做。对了，你记得出租车的名字或编号吗？你可以打他们的失物招领电话。",
                actionHint: "lost property line 就是失物招领热线",
                frequency: "occasional",
              },
            ],
            casualVersion: "Yeah, do that. You remember the taxi company? Might be able to call their lost and found.",
            culturalNote: "美国很多机构设有“失物招领处”",
            commonMistake: {
              wrong: "You maybe can call their lost and found department.",
              correct: "You might be able to call their lost and found department.",
              explanation: "“Might be able to”语气更委婉，更地道，“maybe can”不常用。",
            },
            formalityVariants: {
              casual: "Yeah, do that. You remember the taxi company? Might be able to call their lost and found.",
              standard:
                "Yes, do that. Also, do you remember the taxi company? You might be able to call their lost and found department.",
              formal:
                "Indeed, please proceed with that. Additionally, do you recall the specific taxi company? You may be able to contact their designated lost and found department.",
            },
          },
          {
            speaker: "you",
            textEn: "It was a yellow cab. I have the receipt with the driver's number on it! Let me call them.",
            textZh: "是一辆黄色出租车。我有收据上面有司机的号码！让我打给他们。",
            casualVersion: "It was a yellow cab. Got the receipt with the driver's number on it! Lemme call 'em.",
            commonMistake: {
              wrong: "I have the receipt, above it has the driver's number.",
              correct: "I have the receipt with the driver's number on it!",
              explanation: "表达“收据上有号码”时，用“with... on it”更自然、地道。",
            },
            formalityVariants: {
              casual: "It was a yellow cab. Got the receipt with the driver's number on it! Lemme call 'em.",
              standard: "It was a yellow cab. I have the receipt with the driver's number on it! Let me call them.",
              formal:
                "It appears to have been a yellow cab. Fortuitously, I possess the receipt which includes the driver's contact number. I shall proceed to contact them immediately.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Great thinking! If you can't get it back, make sure to remotely lock your phone and change your banking passwords from a secure device.",
            textZh: "聪明！如果找不回来的话，一定要远程锁定手机并在安全的设备上修改银行密码。",
            keyPhrases: [
              { en: "remotely lock", zh: "远程锁定" },
              { en: "change your passwords", zh: "修改密码" },
              { en: "secure device", zh: "安全的设备" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nice, hope you get it back! If not, make sure to wipe it remotely and change all your passwords — especially banking stuff.",
                textZh: "好的，希望你能找回来！要是找不到，一定要远程擦除数据并改掉所有密码——尤其是银行相关的。",
                actionHint: "wipe it 就是擦除数据",
                frequency: "common",
              },
              {
                textEn:
                  "Fingers crossed! Worst case, lock it from iCloud or Google, and go change your bank passwords on a safe computer ASAP.",
                textZh: "祝好运！最坏的情况，从iCloud或Google锁定手机，然后尽快在安全的电脑上改银行密码。",
                actionHint: "fingers crossed 就是祝好运，ASAP = As Soon As Possible 尽快",
                frequency: "common",
              },
            ],
            casualVersion:
              "Smart thinking! If you can't get it back, make sure to remotely lock your phone and change those banking passwords from a secure device.",
            commonMistake: {
              wrong:
                "If you can't find it back, make sure to remotely lock your phone and change your bank passwords in a safe device.",
              correct:
                "If you can't get it back, make sure to remotely lock your phone and change your banking passwords from a secure device.",
              explanation: "“Get back”意思更广；“banking passwords”更地道；“from a secure device”表示操作来源。",
            },
            formalityVariants: {
              casual:
                "Smart thinking! If you can't get it back, make sure to remotely lock your phone and change those banking passwords from a secure device.",
              standard:
                "Great thinking! If you can't get it back, make sure to remotely lock your phone and change your banking passwords from a secure device.",
              formal:
                "That's an excellent thought! Should you be unable to retrieve it, please ensure you remotely lock your device and update any banking passwords from a secure and trusted platform.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 22. 行李被偷 ====================
  {
    id: "emergency-luggage-stolen",
    category: "emergency",
    titleZh: "行李被偷",
    titleEn: "Luggage Stolen",
    description: "旅行中行李被盗后报警和处理后续事宜",
    otherRole: "警察/酒店前台",
    otherRoleIcon: "🧳",
    flows: [
      {
        id: "basic",
        titleZh: "行李被偷处理流程",
        titleEn: "Handling Stolen Luggage",
        description: "发现行李被盗、报警、联系保险",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Someone stole my suitcase from the hotel lobby while I was checking in. I had all my clothes and medications in it.",
            textZh: "我在办理入住时有人从酒店大厅偷走了我的行李箱。里面有我所有的衣服和药物。",
            culturalNote: "在公共场所永远把行李放在视线范围内。办理入住时把行李箱放在身边或两腿之间。",
            casualVersion:
              "Someone took my suitcase from the lobby when I was checking in. Had all my clothes and meds in it.",
            commonMistake: {
              wrong: "Someone stole my luggage from the hotel lobby when I checked in.",
              correct: "Someone stole my suitcase from the hotel lobby while I was checking in.",
              explanation:
                '"When"强调一个时间点，"while"强调一个持续过程。"Luggage"是总称不可数，"suitcase"指具体箱子。',
            },
            formalityVariants: {
              casual:
                "Someone took my suitcase from the lobby when I was checking in. All my clothes and meds were in it.",
              standard:
                "Someone stole my suitcase from the hotel lobby while I was checking in. I had all my clothes and medications in it.",
              formal:
                "My suitcase was unfortunately stolen from the hotel lobby during the check-in process. It contained all of my apparel and necessary medications.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm so sorry! Let me check the security cameras immediately. Can you describe your suitcase?",
            textZh: "非常抱歉！让我立即查看监控录像。能描述一下你的行李箱吗？",
            keyPhrases: [
              { en: "security cameras", zh: "监控录像" },
              { en: "describe your suitcase", zh: "描述你的行李箱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, that's awful. Let me pull up the security footage right now. What does your bag look like?",
                textZh: "天哪，太糟糕了。我马上调监控。你的行李长什么样？",
                actionHint: "pull up the footage 就是调出监控画面",
                frequency: "common",
              },
              {
                textEn: "I'm really sorry. I'll check the cameras. Can you tell me what kind of suitcase it was?",
                textZh: "非常抱歉。我去查监控。能告诉我是什么样的行李箱吗？",
                actionHint: "what kind of 就是什么样的",
                frequency: "common",
              },
            ],
            casualVersion: "Oh no, I'm so sorry! Let me check the cameras right away. Can you describe your bag?",
            commonMistake: {
              wrong: "Can you describe your luggage?",
              correct: "Can you describe your suitcase?",
              explanation: '"Luggage"是总称不可数名词，"suitcase"指一个具体的箱子。',
            },
            formalityVariants: {
              casual: "Oh no, I'm so sorry! Let me check the cameras right away. Can you describe your bag?",
              standard: "I'm so sorry! Let me check the security cameras immediately. Can you describe your suitcase?",
              formal:
                "My sincerest apologies. I will access the security camera footage without delay. Could you please provide a description of your luggage?",
            },
          },
          {
            speaker: "you",
            textEn: "It's a large black Samsonite with a red luggage tag. It has my name on it — Li Wei.",
            textZh: "是一个黑色的大号新秀丽，上面有红色行李牌。上面写着我的名字——李薇。",
            commonMistake: {
              wrong: "It is a large black Samsonite, have a red luggage tag. My name Li Wei is on it.",
              correct: "It's a large black Samsonite with a red luggage tag. My name, Li Wei, is on it.",
              explanation: "描述物品特征用'with'更自然；名字在标签上用'is on it'。",
            },
            casualVersion: "It's a big black Samsonite, red tag. Has my name on it - Li Wei.",
            formalityVariants: {
              casual: "Big black Samsonite, red tag. My name's on it - Li Wei.",
              standard: "It's a large black Samsonite with a red luggage tag. It has my name on it — Li Wei.",
              formal:
                "It is a substantial black Samsonite brand suitcase, adorned with a red luggage tag. My name, Li Wei, is inscribed upon it.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "I see it on the camera. Someone took it about 10 minutes ago and walked out the side entrance. I'm calling the police now.",
            textZh: "我在监控上看到了。大约10分钟前有人拿走了它，从侧门出去了。我现在就报警。",
            commonMistake: {
              wrong: "I will call police now.",
              correct: "I'll call the police now.",
              explanation: "口语常用'I'll'缩写；'the police'是固定搭配。",
            },
            keyPhrases: [
              { en: "side entrance", zh: "侧门" },
              { en: "calling the police", zh: "报警" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it on camera. Somebody grabbed it about 10 minutes ago and went out the side door. I'm calling the cops right now.",
                textZh: "监控拍到了。大约10分钟前有人拿了它从侧门出去了。我现在就叫警察。",
                actionHint: "got it on camera 就是监控拍到了",
                frequency: "common",
              },
              {
                textEn:
                  "I can see it on the video — taken about 10 minutes ago, they left through the side exit. Let me get the police on the line.",
                textZh: "我在视频上看到了——大约10分钟前被拿走的，从侧面出口走了。我来报警。",
                actionHint: "get the police on the line 就是打电话叫警察",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got it on camera. Someone took it like 10 mins ago, walked out the side entrance. Calling the cops now.",
            formalityVariants: {
              casual:
                "Got it on camera. Someone took it like 10 mins ago, walked out the side entrance. Calling the cops now.",
              standard:
                "I see it on the camera. Someone took it about 10 minutes ago and walked out the side entrance. I'm calling the police now.",
              formal:
                "I have located the item on the security footage. An individual removed it approximately ten minutes prior and exited via the side entrance. I am now contacting law enforcement.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "We have the camera footage. Can you provide a list of the items in the suitcase and their approximate value?",
            textZh: "我们有监控画面。你能提供行李箱里物品的清单和大概价值吗？",
            keyPhrases: [
              { en: "camera footage", zh: "监控画面" },
              { en: "list of items", zh: "物品清单" },
              { en: "approximate value", zh: "大概价值" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got the video. I'm gonna need you to write down everything that was in the bag and how much it's all worth, roughly.",
                textZh: "我们有视频了。我需要你写下行李里所有的东西以及大概值多少钱。",
                actionHint: "how much it's all worth 就是总共值多少",
                frequency: "common",
              },
              {
                textEn:
                  "Good, the cameras caught it. Can you give me a rundown of what was inside and the total value?",
                textZh: "好的，监控拍到了。你能列一下里面有什么以及总价值吗？",
                actionHint: "a rundown 就是一个简要清单",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Got the camera footage. Can you list what was in the suitcase and how much it was all worth?",
            commonMistake: {
              wrong: "Can you provide a list of the things in the suitcase and their price?",
              correct: "Can you provide a list of the items in the suitcase and their approximate value?",
              explanation: '"Things"太泛，"items"更专业。"price"指商品价格，"value"指物品价值。',
            },
            formalityVariants: {
              casual: "Got the camera footage. Can you list what was in the suitcase and how much it was all worth?",
              standard:
                "We have the camera footage. Can you provide a list of the items in the suitcase and their approximate value?",
              formal:
                "The security camera footage has been secured. Would you please furnish a detailed inventory of the suitcase's contents, along with their estimated monetary value?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Clothes worth about $500, prescription medication, toiletries, and a tablet. The total value is probably around $1,500.",
            textZh: "大约500美元的衣服、处方药、洗漱用品和一台平板电脑。总价值大概1500美元。",
            commonMistake: {
              wrong: "Clothes worth about $500, prescription medicine, toiletries, and a tablet. The total value is probably around $1,500.",
              correct: "Clothes worth about $500, prescription medication, toiletries, and a tablet. The total value is probably around $1,500.",
              explanation: "'Medication'比'medicine'更正式，通常指药物总称。",
            },
            casualVersion: "Clothes, like $500 worth, meds, toiletries, and a tablet. Total's probably around $1,500.",
            formalityVariants: {
              casual: "Clothes, like $500 worth, meds, toiletries, and a tablet. Total's probably around $1,500.",
              standard:
                "Clothes worth about $500, prescription medication, toiletries, and a tablet. The total value is probably around $1,500.",
              formal:
                "The contents included approximately $500 worth of clothing, prescription medication, various toiletries, and a tablet device. The estimated cumulative value is roughly $1,500.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn:
              "Here's your police report number. For prescription medication, go to a local pharmacy with your prescription information — they may be able to issue an emergency supply.",
            textZh: "这是您的报案号。关于处方药，去当地药房带上处方信息——他们可能可以开紧急供应的药。",
            culturalNote: "美国药房配药必须有医生处方，非紧急情况不会随意提供药物。",
            keyPhrases: [
              { en: "police report number", zh: "报案号" },
              { en: "prescription medication", zh: "处方药" },
              { en: "emergency supply", zh: "紧急供应" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's your case number. For the meds, hit up a pharmacy nearby with whatever prescription info you have — they can usually hook you up with enough to get by.",
                textZh: "这是你的案件号。药的话，去附近的药店带上你有的处方信息——他们一般能给你应急的量。",
                actionHint: "hit up 就是去找/去某处，hook you up with 就是给你提供",
                frequency: "common",
              },
              {
                textEn:
                  "Got your report number right here. If you need your medication, any local pharmacy should be able to give you a short-term supply — just bring your prescription details.",
                textZh: "报案号在这。如果需要药，当地任何药店应该都能给你短期供应——带上处方信息就行。",
                actionHint: "short-term supply 就是短期供应量",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here's your police report number. For meds, just go to a local pharmacy with your prescription info — they might be able to give you an emergency supply.",
            commonMistake: {
              wrong: "Here is your report number. For medicine, you go to a local pharmacy with your prescription.",
              correct:
                "Here's your police report number. For prescription medication, go to a local pharmacy with your prescription information — they may be able to issue an emergency supply.",
              explanation: '"Medicine"指药物总称，"medication"特指用于治疗的药。"prescription information"更完整准确。',
            },
            formalityVariants: {
              casual:
                "Here's your police report number. For meds, just go to a local pharmacy with your prescription info — they might be able to give you an emergency supply.",
              standard:
                "Here's your police report number. For prescription medication, go to a local pharmacy with your prescription information — they may be able to issue an emergency supply.",
              formal:
                "Kindly note, this is your official police report number. Regarding your prescription medication, please proceed to a local pharmacy with your complete prescription documentation; they may be authorized to provide an emergency dispensation.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you. I'll contact my travel insurance company with the report. Can the hotel help me with some basic toiletries for tonight?",
            textZh: "谢谢。我会带着报案记录联系旅行保险公司。酒店今晚能提供一些基本洗漱用品吗？",
            casualVersion:
              "Thanks. I'll hit up my travel insurance with the report. Can the hotel hook me up with some basic toiletries for tonight?",
            commonMistake: {
              wrong: "Thank you. I will contact my travel insurance. Can the hotel give me some toiletries?",
              correct:
                "Thank you. I'll contact my travel insurance company with the report. Can the hotel help me with some basic toiletries for tonight?",
              explanation: '"Travel insurance company"更完整。"give me"直接，"help me with"或"provide"更委婉礼貌。',
            },
            formalityVariants: {
              casual:
                "Thanks. I'll hit up my travel insurance with the report. Can the hotel hook me up with some basic toiletries for tonight?",
              standard:
                "Thank you. I'll contact my travel insurance company with the report. Can the hotel help me with some basic toiletries for tonight?",
              formal:
                "I appreciate your assistance. I shall proceed to contact my travel insurance provider, furnishing them with this report. Might the hotel be able to provide some essential toiletries for this evening?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 23. 儿童走失 ====================
  {
    id: "emergency-lost-child",
    category: "emergency",
    titleZh: "儿童走失",
    titleEn: "Lost Child",
    description: "在公共场所孩子走失后紧急求助",
    otherRole: "商场保安/工作人员",
    otherRoleIcon: "👶",
    flows: [
      {
        id: "basic",
        titleZh: "儿童走失紧急求助",
        titleEn: "Emergency Lost Child Search",
        description: "向保安报告、描述孩子、启动搜寻",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Please help! I can't find my child! She's only 5 years old. We were just in the toy section and she disappeared!",
            textZh: "请帮帮忙！我找不到我的孩子了！她才5岁。我们刚才在玩具区她就不见了！",
            culturalNote: "在国外带孩子出行，给孩子口袋里放一张卡片写上你的电话号码和酒店地址（中英文）。",
            casualVersion: "Help! Can't find my kid! She's only 5. We were just in toys, she's gone!",
            commonMistake: {
              wrong: "My child disappeared.",
              correct: "My child is lost.",
              explanation: "disappeared 略显戏剧化，lost 或 missing 更直接表达走失。",
            },
            formalityVariants: {
              casual: "Oh my god, I can't find my kid! She's only 5, just in the toy section, and she's gone!",
              standard:
                "Please help! I can't find my child! She's only 5 years old. We were just in the toy section and she disappeared!",
              formal:
                "Excuse me, I urgently require assistance. My 5-year-old daughter is missing. She was last seen in the toy section.",
            },
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn: "Stay calm. We'll find her. What does she look like? What is she wearing?",
            textZh: "保持冷静。我们会找到她的。她长什么样？穿什么衣服？",
            keyPhrases: [
              { en: "stay calm", zh: "保持冷静" },
              { en: "what does she look like", zh: "她长什么样" },
            ],
            alternativeExpressions: [
              {
                textEn: "Take a breath, we'll help you. Can you describe her? What's she got on?",
                textZh: "深呼吸，我们会帮你。能描述一下她吗？穿了什么？",
                actionHint: "what's she got on 就是穿了什么衣服",
                frequency: "common",
              },
              {
                textEn:
                  "Don't panic, this happens all the time and we always find them. Tell me what she looks like and what she's wearing.",
                textZh: "别慌，这种事经常发生我们总能找到。告诉我她长什么样穿什么衣服。",
                actionHint: "don't panic 就是别慌",
                frequency: "common",
              },
            ],
            casualVersion: "Stay calm. We'll find her. What's she look like? What's she got on?",
            commonMistake: {
              wrong: "What clothes she wears?",
              correct: "What is she wearing?",
              explanation: "动词时态和介词使用不当。",
            },
            formalityVariants: {
              casual: "Okay, relax. We'll get her back. What's she look like? What's she wearing?",
              standard: "Stay calm. We'll find her. What does she look like? What is she wearing?",
              formal:
                "Please remain calm. We will locate her. Could you please describe her appearance and what she is wearing?",
            },
          },
          {
            speaker: "you",
            textEn:
              "She's Asian, has short black hair, and is wearing a pink dress with white shoes. Her name is Mimi. She speaks mostly Chinese.",
            textZh: "她是亚裔，短黑发，穿粉色连衣裙和白色鞋子。她叫咪咪。她主要说中文。",
            casualVersion:
              "She's Asian, short black hair. Pink dress, white shoes. Name's Mimi. Mostly speaks Chinese.",
            commonMistake: {
              wrong: "She only speaks Chinese.",
              correct: "She speaks mostly Chinese.",
              explanation: "mostly 更准确，only 可能不完全符合事实。",
            },
            formalityVariants: {
              casual:
                "She's Asian, got short black hair. Pink dress, white shoes. Her name's Mimi, and she mainly speaks Chinese.",
              standard:
                "She's Asian, has short black hair, and is wearing a pink dress with white shoes. Her name is Mimi. She speaks mostly Chinese.",
              formal:
                "She is of East Asian descent, with short black hair, and is dressed in a pink dress and white shoes. Her name is Mimi, and her primary language is Chinese.",
            },
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn:
              "I'm initiating a Code Adam right now. All exits will be monitored. No one matching that description will be allowed to leave. We'll also make an announcement over the speakers.",
            textZh: "我现在启动Code Adam程序。所有出口将被监控。符合该描述的人不允许离开。我们也会通过广播通知。",
            keyPhrases: [
              { en: "Code Adam", zh: "儿童走失应急程序" },
              { en: "all exits monitored", zh: "所有出口被监控" },
              { en: "announcement", zh: "广播通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm locking down the exits right now. Nobody leaves without being checked. We'll put out an announcement on the PA. This is standard procedure — we'll find her.",
                textZh: "我现在封锁所有出口。任何人离开都要检查。我们会在广播里通知。这是标准程序——我们会找到她的。",
                actionHint: "locking down 就是封锁",
                frequency: "common",
              },
              {
                textEn:
                  "Activating our missing child protocol. All doors are being watched. I'm getting on the speakers now.",
                textZh: "启动儿童走失应急程序。所有门口都有人看着。我现在就去广播。",
                actionHint: "missing child protocol 就是儿童走失应急程序",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay, starting a Code Adam. All exits are being watched. No one fitting her description leaves. We'll announce it too.",
            culturalNote: "Code Adam是北美零售店、商场等场所寻找走失儿童的紧急程序。",
            commonMistake: {
              wrong: "People like her description not allowed to leave.",
              correct: "No one matching that description will be allowed to leave.",
              explanation: "语法不准确，应使用更完整的句式和被动语态。",
            },
            formalityVariants: {
              casual:
                "Alright, initiating a Code Adam. We're monitoring all exits, so no one matching her description can leave. We'll also make an announcement.",
              standard:
                "I'm initiating a Code Adam right now. All exits will be monitored. No one matching that description will be allowed to leave. We'll also make an announcement over the speakers.",
              formal:
                "We are now activating the Code Adam protocol. All building exits will be secured and monitored. Individuals matching the description will be prevented from departing. Additionally, an announcement will be made over the public address system.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Oh thank God. She doesn't speak much English. She might be scared and hiding. She loves the toy aisle and the candy section.",
            textZh: "谢天谢地。她英语说得不多。她可能害怕在躲起来。她喜欢玩具区和糖果区。",
            casualVersion:
              "Oh, thank God. She barely speaks English. She's probably scared, maybe hiding. Loves the toy aisle, and candy.",
            commonMistake: {
              wrong: "She cannot speak much English.",
              correct: "She doesn't speak much English.",
              explanation: "cannot speak 有时听起来过于绝对，doesn't speak much 更自然。",
            },
            formalityVariants: {
              casual:
                "Thank goodness. She doesn't speak much English. She might be scared and trying to hide. She loves the toy section and the candy.",
              standard:
                "Oh thank God. She doesn't speak much English. She might be scared and hiding. She loves the toy aisle and the candy section.",
              formal:
                "I'm relieved to hear that. She has limited English proficiency. It's possible she's frightened and has sought a hiding spot. Her preferred areas are typically the toy aisle and the confectionery section.",
            },
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn:
              "We'll check those areas first. My team is spreading out now. We do this regularly and we almost always find the child within minutes. Stay here at the service desk.",
            textZh:
              "我们会先检查那些区域。我的团队现在正在分散搜索。我们经常做这种搜索，几乎总能在几分钟内找到孩子。请留在服务台这里。",
            keyPhrases: [
              { en: "spreading out", zh: "分散搜索" },
              { en: "within minutes", zh: "几分钟内" },
              { en: "service desk", zh: "服务台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're heading there first. My guys are fanning out across the store. Don't worry, we deal with this a lot — kids usually turn up real quick. Stay right here.",
                textZh:
                  "我们先去那些区域。我的人正在全店分散搜索。别担心，我们经常处理这种事——小孩通常很快就找到。就待在这。",
                actionHint: "fanning out 就是分散开来，turn up 就是出现/找到",
                frequency: "common",
              },
              {
                textEn:
                  "Those will be the first spots we check. The team's on it. In our experience, we almost always find kids within a few minutes. Wait here at the front.",
                textZh: "那些地方我们先查。团队已经行动了。根据我们的经验，几乎总能在几分钟内找到孩子。在前台这等着。",
                actionHint: "the team's on it 就是团队在处理了",
                frequency: "common",
              },
            ],
            casualVersion:
              "We'll hit those spots first. Team's spreading out now. We do this all the time, usually find 'em in minutes. Just stay here at the desk.",
            commonMistake: {
              wrong: "We almost always find the child in a few minutes.",
              correct: "We almost always find the child within minutes.",
              explanation: "within minutes 更强调在时间限制内，听起来更紧急和专业。",
            },
            formalityVariants: {
              casual:
                "We're checking those areas first. My team's already spreading out. We do this a lot, usually find kids in minutes. Just stay here at the service desk.",
              standard:
                "We'll check those areas first. My team is spreading out now. We do this regularly and we almost always find the child within minutes. Stay here at the service desk.",
              formal:
                "We will prioritize searching those particular areas. My team is currently deploying to cover the vicinity. We have extensive experience with such incidents and typically locate the child within a matter of minutes. Please remain at the service desk.",
            },
          },
          {
            speaker: "them",
            role: "商场保安",
            textEn:
              "Good news! We found her in the candy aisle. She's with one of our staff members. She's safe and just a little scared.",
            textZh: "好消息！我们在糖果区找到她了。她和我们一位工作人员在一起。她很安全，只是有点害怕。",
            keyPhrases: [
              { en: "good news", zh: "好消息" },
              { en: "safe", zh: "安全" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We got her! She was in the candy aisle the whole time. One of our team is with her. She's fine, just a little scared.",
                textZh: "找到了！她一直在糖果区。我们一个同事陪着她。她没事，就是有点害怕。",
                actionHint: "we got her 就是找到她了",
                frequency: "common",
              },
              {
                textEn:
                  "Great news — she's been found! She was hanging out near the candy. She's safe and sound, just a little shaken up.",
                textZh: "好消息——找到她了！她在糖果区附近。安然无恙，就是有点受惊。",
                actionHint: "safe and sound 就是安然无恙",
                frequency: "common",
              },
            ],
            casualVersion:
              "Good news! Found her in the candy aisle. She's with one of our staff. Safe, just a little scared.",
            commonMistake: {
              wrong: "We found her at the candy aisle.",
              correct: "We found her in the candy aisle.",
              explanation: "in the aisle 是正确的介词使用方式。",
            },
            formalityVariants: {
              casual:
                "Great news! We found her in the candy aisle. She's with a staff member. She's safe, just a bit spooked.",
              standard:
                "Good news! We found her in the candy aisle. She's with one of our staff members. She's safe and just a little scared.",
              formal:
                "Excellent news! We have located your daughter in the candy aisle. She is currently in the care of one of our staff members. She is safe and appears to be only slightly distressed.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Oh, thank you so much! I was so worried. I'll put a tracking tag on her from now on. Thank you for your quick help.",
            textZh: "太感谢你们了！我刚才太担心了。以后我会给她装一个追踪标签。谢谢你们的快速帮助。",
            casualVersion:
              "Oh, thank you so much! Was so worried. Totally putting a tracking tag on her from now on. Thanks for the quick help.",
            commonMistake: {
              wrong: "I will give her a tracking tag from now.",
              correct: "I'll put a tracking tag on her from now on.",
              explanation: "from now on 是固定搭配，表示“从现在开始”。",
            },
            formalityVariants: {
              casual:
                "Oh my gosh, thank you! I was so scared. Definitely getting her a tracking tag from now on. Thanks for acting so fast.",
              standard:
                "Oh, thank you so much! I was so worried. I'll put a tracking tag on her from now on. Thank you for your quick help.",
              formal:
                "Oh, my profound thanks to you all! I was incredibly worried. I will certainly be implementing a tracking device for her moving forward. I am most grateful for your swift and effective assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 24. 动物咬伤 ====================
  {
    id: "emergency-animal-bite",
    category: "emergency",
    titleZh: "动物咬伤",
    titleEn: "Animal Bite",
    description: "在国外被动物咬伤后就医处理",
    otherRole: "医生/急诊护士",
    otherRoleIcon: "🐕",
    flows: [
      {
        id: "basic",
        titleZh: "动物咬伤就医流程",
        titleEn: "Medical Treatment for Animal Bite",
        description: "处理伤口、就医、注射疫苗",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I was bitten by a stray dog while walking on the street. My hand is bleeding. I need to see a doctor.",
            textZh: "我在街上走路时被一只流浪狗咬了。我的手在流血。我需要看医生。",
            culturalNote: "被动物咬伤后首先用清水和肥皂冲洗伤口至少15分钟，然后尽快就医。",
            casualVersion: "Got bit by a stray dog on the street. My hand's bleeding. Need to see a doctor.",
            commonMistake: {
              wrong: "I need to see doctor.",
              correct: "I need to see a doctor.",
              explanation: "看医生时需要加不定冠词a，强调一个医生。",
            },
            formalityVariants: {
              casual: "Got bit by a stray dog on the street. My hand's bleeding. Need to see a doctor.",
              standard:
                "I was bitten by a stray dog while walking on the street. My hand is bleeding. I need to see a doctor.",
              formal:
                "Excuse me, I've been bitten by a stray dog and my hand is bleeding. I require immediate medical attention.",
            },
          },
          {
            speaker: "them",
            role: "急诊护士",
            textEn: "Let me see the wound. When did this happen? Did the dog seem aggressive or sick?",
            textZh: "让我看看伤口。什么时候发生的？那只狗看起来有攻击性或者生病了吗？",
            keyPhrases: [
              { en: "wound", zh: "伤口" },
              { en: "aggressive", zh: "有攻击性" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me take a look at that. How long ago did this happen? Did the dog look sick or aggressive?",
                textZh: "让我看看。多久前发生的？那只狗看起来生病了或者有攻击性吗？",
                actionHint: "take a look 就是看一下",
                frequency: "common",
              },
              {
                textEn:
                  "Okay, show me the bite. When did it happen? Was the dog acting weird — like foaming or agitated?",
                textZh: "好的，让我看看咬伤。什么时候的事？那只狗行为异常吗——比如口吐白沫或者很躁动？",
                actionHint: "foaming 就是口吐白沫，agitated 就是躁动不安",
                frequency: "occasional",
              },
            ],
            casualVersion: "Lemme see the wound. When'd it happen? Dog seem aggressive or sick?",
            formalityVariants: {
              casual: "Lemme see the wound. When'd it happen? Dog seem aggressive or sick?",
              standard: "Let me see the wound. When did this happen? Did the dog seem aggressive or sick?",
              formal:
                "May I examine the wound? Could you please indicate when this incident occurred? And did the animal exhibit any aggressive or sickly behaviors?",
            },
          },
          {
            speaker: "you",
            textEn:
              "About an hour ago. The dog was acting strangely — it was drooling a lot. I washed the wound with soap and water right away.",
            textZh: "大约一小时前。那只狗行为很奇怪——口水流得很多。我马上用肥皂和水冲洗了伤口。",
            casualVersion:
              "Like an hour ago. Dog was acting weird, drooling a bunch. Washed it with soap and water ASAP.",
            commonMistake: {
              wrong: "It was mouth watering a lot.",
              correct: "It was drooling a lot.",
              explanation: "“口水流很多”用drool更自然，mouth water常指食物引起的“流口水”。",
            },
            formalityVariants: {
              casual: "Like an hour ago. Dog was acting weird, drooling a bunch. Washed it with soap and water ASAP.",
              standard:
                "About an hour ago. The dog was acting strangely — it was drooling a lot. I washed the wound with soap and water right away.",
              formal:
                "Approximately one hour ago. The animal exhibited unusual behavior; specifically, it was excessively drooling. I immediately cleansed the wound with soap and water.",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Good that you washed it. Given the dog's behavior, we need to start a rabies vaccination series. Have you ever been vaccinated for rabies before?",
            textZh: "你冲洗得很好。根据狗的行为，我们需要开始狂犬病疫苗接种。你以前接种过狂犬病疫苗吗？",
            commonMistake: {
              wrong: "Have you had rabies vaccine?",
              correct: "Have you ever been vaccinated against rabies?",
              explanation: "询问是否接种过疫苗时，用 'ever been vaccinated against' 更自然。",
            },
            keyPhrases: [
              { en: "rabies vaccination", zh: "狂犬病疫苗" },
              { en: "vaccination series", zh: "系列接种" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Smart that you cleaned it right away. With the way the dog was acting, we should definitely get you started on rabies shots. Have you had those before?",
                textZh: "你马上清洗了很聪明。根据那只狗的表现，我们肯定要给你打狂犬病疫苗。你以前打过吗？",
                actionHint: "rabies shots 就是狂犬病疫苗",
                frequency: "common",
              },
              {
                textEn:
                  "You did the right thing washing it. Given the symptoms you described, I'm gonna recommend the rabies vaccine series. Ever been vaccinated for rabies?",
                textZh: "你冲洗得对。根据你描述的狗的症状，我建议做狂犬病疫苗系列接种。接种过狂犬病疫苗吗？",
                actionHint: "I'm gonna recommend 就是我建议",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Good you washed it. With how the dog acted, we gotta start you on rabies shots. Ever had rabies vaccine before?",
            formalityVariants: {
              casual:
                "Good you washed it. With how the dog acted, we gotta start you on rabies shots. Ever had rabies vaccine before?",
              standard:
                "Good that you washed it. Given the dog's behavior, we need to start a rabies vaccination series. Have you ever been vaccinated for rabies before?",
              formal:
                "It is commendable that you thoroughly cleansed the wound. Given the canine's exhibited behavior, we must initiate a course of rabies vaccinations. Have you previously received a rabies immunization?",
            },
          },
          {
            speaker: "you",
            textEn: "No, never. Is rabies common here? Will the vaccination hurt?",
            textZh: "没有，从来没有。这里狂犬病常见吗？打疫苗疼吗？",
            casualVersion: "Nah, never. Is rabies a big deal around here? Will the shot hurt?",
            commonMistake: {
              wrong: "Is rabies often here?",
              correct: "Is rabies common here?",
              explanation: "表达疾病是否常见用common或prevalent，不直接用often。",
            },
            formalityVariants: {
              casual: "Nah, never. Is rabies a big deal around here? Will the shot hurt?",
              standard: "No, never. Is rabies common here? Will the vaccination hurt?",
              formal: "No, I have not. Is rabies prevalent in this region? Will the immunization procedure be painful?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "In some areas, yes. The vaccine is given as a series of four shots in the arm over two weeks. It's not very painful. We'll also give you a tetanus booster and clean the wound thoroughly.",
            textZh:
              "在某些地区是的。疫苗需要在两周内分四针打在手臂上。不会很疼。我们还会给你打破伤风加强针并彻底清洁伤口。",
            commonMistake: {
              wrong: "It is not hurt too bad.",
              correct: "It won't hurt too bad.",
              explanation: "中文习惯说“不怎么疼”，但英文不说'is not hurt'，而是用won't hurt或'it won't be too painful'。",
            },
            keyPhrases: [
              { en: "four shots", zh: "四针" },
              { en: "tetanus booster", zh: "破伤风加强针" },
              { en: "clean the wound", zh: "清洁伤口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It can be, yeah. It's a series of four injections in your arm over about two weeks. Not that bad. We'll also update your tetanus and properly clean up the bite.",
                textZh: "某些地方确实常见。需要两周内在手臂上打四针。没那么疼。我们还会补打破伤风和好好清理咬伤。",
                actionHint: "not that bad 就是没那么糟/没那么疼",
                frequency: "common",
              },
              {
                textEn:
                  "In this region, yes. The rabies vaccine is four doses spread over two weeks, just in the upper arm. Plus we'll do a tetanus shot and get that wound properly cleaned.",
                textZh: "在这个地区是的。狂犬疫苗两周内打四针，打在上臂。另外给你打破伤风针并好好清洗伤口。",
                actionHint: "four doses 就是四剂/四针",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, in some spots. You get four shots in the arm over two weeks. It's not too bad. We'll also give you a tetanus booster and clean up the wound good.",
            formalityVariants: {
              casual:
                "Yeah, in some spots. You get four shots in the arm over two weeks. It's not too bad. We'll also give you a tetanus booster and clean up the wound good.",
              standard:
                "In some areas, yes. The vaccine is given as a series of four shots in the arm over two weeks. It's not very painful. We'll also give you a tetanus booster and clean the wound thoroughly.",
              formal:
                "Affirmative, in certain geographical regions. The vaccine regimen involves four injections administered intramuscularly into the arm over a two-week period. The discomfort associated with the injections is minimal. Additionally, we will administer a tetanus booster and thoroughly debride the wound.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm leaving the country in a week. Can I get the remaining shots in another country?",
            textZh: "我一周后就离开这个国家了。能在其他国家打剩下的针吗？",
            casualVersion: "I'm outta the country in a week. Can I get the rest of the shots somewhere else?",
            commonMistake: {
              wrong: "Can I take the remaining shots in another country?",
              correct: "Can I get the remaining shots in another country?",
              explanation: "打针用get/receive a shot，不用take/play。",
            },
            formalityVariants: {
              casual: "I'm outta the country in a week. Can I get the rest of the shots somewhere else?",
              standard: "I'm leaving the country in a week. Can I get the remaining shots in another country?",
              formal:
                "I will be departing the country in one week. Is it permissible for me to receive the subsequent immunizations in a different nation?",
            },
          },
          {
            speaker: "them",
            role: "医生",
            textEn:
              "Yes, any hospital or clinic can continue the vaccination schedule. I'll give you documentation showing which shots you've received and when the next ones are due.",
            textZh: "可以的，任何医院或诊所都可以继续接种。我会给你文件记录你已经打了哪些针以及下一针的时间。",
            commonMistake: {
              wrong: "I will give you document.",
              correct: "I will give you the documentation.",
              explanation: "“document” 是可数名词，需用复数或不可数 “documentation”。",
            },
            keyPhrases: [
              { en: "vaccination schedule", zh: "接种计划" },
              { en: "documentation", zh: "文件记录" },
              { en: "when the next ones are due", zh: "下一针的时间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely, any hospital abroad can pick up where we left off. I'll write everything down for you — which shots you got and when the rest are due.",
                textZh: "当然可以，国外任何医院都能接着打。我会把一切都写下来——打了哪些针、剩下的什么时候打。",
                actionHint: "pick up where we left off 就是接着继续",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, no problem. You can continue the shots anywhere. I'll give you paperwork with all the dates — what you've had and what's still needed.",
                textZh: "当然，没问题。在哪都能继续打。我给你出文件记录所有日期——打了什么还需要打什么。",
                actionHint: "paperwork 就是书面文件/记录",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, any hospital or clinic can keep going with the shots. I'll give you papers showing what you've had and when the next ones are.",
            formalityVariants: {
              casual:
                "Yep, any hospital or clinic can keep going with the shots. I'll give you papers showing what you've had and when the next ones are.",
              standard:
                "Yes, any hospital or clinic can continue the vaccination schedule. I'll give you documentation showing which shots you've received and when the next ones are due.",
              formal:
                "Yes, any medical facility or clinic will be able to continue the immunization regimen. I will provide you with official documentation detailing the vaccinations administered and the schedule for subsequent doses.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 25. 签证过期 ====================
  {
    id: "emergency-visa-expired",
    category: "emergency",
    titleZh: "签证过期",
    titleEn: "Visa Expired",
    description: "发现签证过期后去移民局或律师处处理",
    otherRole: "移民官员/律师",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic",
        titleZh: "签证过期处理流程",
        titleEn: "Handling Expired Visa",
        description: "发现签证过期、咨询处理方案、申请延期",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just realized my visa expired three days ago. I didn't notice it. What should I do?",
            textZh: "我刚发现我的签证三天前就过期了。我没注意到。我该怎么办？",
            culturalNote: "签证过期即使只有一天，在很多国家都属于违法。尽快主动处理比被发现要好得多。",
            casualVersion: "Just realized my visa expired three days ago. Didn't even notice. What do I do?",
            commonMistake: {
              wrong: "My visa is expired three days ago.",
              correct: "My visa expired three days ago.",
              explanation: "过去时动词+时间点+ago，不加is。",
            },
            formalityVariants: {
              casual: "OMG, my visa expired three days ago! I totally missed it. What should I do?",
              standard: "I just realized my visa expired three days ago. I didn't notice it. What should I do?",
              formal:
                "I have just come to realize that my visa officially expired three days prior. Unfortunately, I did not become aware of this until now. Could you please advise me on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn:
              "Overstaying your visa is a serious matter. How long have you been in the country, and when is your return flight?",
            textZh: "签证逾期是很严重的事情。您在这个国家待了多久了，回程航班是什么时候？",
            culturalNote: "“serious matter”是一种警告，不必过分解读为严厉指责",
            keyPhrases: [
              { en: "overstaying your visa", zh: "签证逾期" },
              { en: "serious matter", zh: "严重的事情" },
              { en: "return flight", zh: "回程航班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Being past your visa date is a big deal. How long have you been here and when are you flying out?",
                textZh: "签证过期是大事。你在这里待了多久了？什么时候飞走？",
                actionHint: "past your visa date 就是签证过期了",
                frequency: "common",
              },
              {
                textEn:
                  "That's an overstay, which we take seriously. When did you arrive, and do you have a ticket home?",
                textZh: "这是逾期居留，我们很重视。你什么时候到的？有回程机票吗？",
                actionHint: "overstay 就是逾期居留",
                frequency: "common",
              },
            ],
            casualVersion: "Overstaying your visa's a big deal. How long you been here, and when's your flight back?",
            commonMistake: {
              wrong: "How long you stay in the country?",
              correct: "How long have you been in the country?",
              explanation: "询问持续时间用现在完成进行时have been。",
            },
            formalityVariants: {
              casual:
                "Dude, overstaying your visa's pretty serious. How long you been in the country, and when's your flight home?",
              standard:
                "Overstaying your visa is a serious matter. How long have you been in the country, and when is your return flight?",
              formal:
                "Please understand that exceeding the authorized duration of your visa is considered a significant issue. Could you kindly inform me of your total period of stay within the country, and the scheduled date of your return flight?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I've been here for 35 days on a 30-day visa. My return flight is in 5 days. I'm very sorry — it was an honest mistake.",
            textZh: "我30天签证已经待了35天。我的回程航班在5天后。非常抱歉——这是无心之过。",
            culturalNote: "在美国文化中，即使是无心之过，也应立即承认并承担责任。不必过度谦卑。",
            casualVersion: "Been here 35 days on a 30-day visa. Flight's in 5. So sorry, totally an honest mistake.",
            commonMistake: {
              wrong: "My flight will be in 5 days.",
              correct: "My return flight is in 5 days.",
              explanation: "提及已安排的未来事件，用现在时而非将来时。",
            },
            formalityVariants: {
              casual:
                "Yeah, I've been here 35 days on a 30-day visa. My flight's in 5. Really, really sorry, it was a total honest mistake.",
              standard:
                "I've been here for 35 days on a 30-day visa. My return flight is in 5 days. I'm very sorry — it was an honest mistake.",
              formal:
                "I have currently resided here for 35 days, exceeding the 30-day validity of my visa. My scheduled departure is in 5 days. I sincerely apologize; this was a genuine oversight on my part.",
            },
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn:
              "You'll need to apply for a visa extension or pay an overstay fine. With a short overstay and a booked return flight, we can usually process this without major penalties.",
            textZh:
              "您需要申请签证延期或支付逾期罚款。逾期时间短且有预订的回程航班，我们通常可以在没有严重处罚的情况下处理。",
            culturalNote: "这种情况下，美国官员通常会直接给出解决方案，而不是责备",
            keyPhrases: [
              { en: "visa extension", zh: "签证延期" },
              { en: "overstay fine", zh: "逾期罚款" },
              { en: "without major penalties", zh: "没有严重处罚" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll need to either extend your visa or pay the overstay penalty. Since you're only a few days over and you've got a flight booked, it shouldn't be too bad.",
                textZh: "你需要延签或者交逾期罚款。因为只超了几天而且已经订了回程航班，应该不会太严重。",
                actionHint: "a few days over 就是超了几天",
                frequency: "common",
              },
              {
                textEn:
                  "Look, for a short overstay like this with a return ticket, we can usually sort it out with a fine and an extension. No deportation or anything like that.",
                textZh: "听着，像你这样短期逾期又有回程机票的，我们通常交罚款加延期就能解决。不会被驱逐出境什么的。",
                actionHint: "sort it out 就是解决/处理好",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You'll gotta apply for an extension or pay an overstay fine. Since it's a short overstay and you've got a booked flight, we can usually handle this without big penalties.",
            commonMistake: {
              wrong: "We usually can process this.",
              correct: "We can usually process this.",
              explanation: "情态动词(can)后接副词(usually)。",
            },
            formalityVariants: {
              casual:
                "Okay, you'll need to either apply for an extension or pay a fine for overstaying. But since it's a short overstay and you have a flight booked, we can probably get this sorted without huge issues.",
              standard:
                "You'll need to apply for a visa extension or pay an overstay fine. With a short overstay and a booked return flight, we can usually process this without major penalties.",
              formal:
                "You will be required to submit an application for a visa extension or remit an overstay penalty fee. Given the brief duration of your overstay and the presence of a confirmed return flight, we can typically manage this situation without incurring significant sanctions.",
            },
          },
          {
            speaker: "you",
            textEn: "What do I need to bring? And how much is the fine?",
            textZh: "我需要带什么？罚款多少？",
            casualVersion: "What do I gotta bring? How much is the fine?",
            commonMistake: {
              wrong: "What things I need to bring?",
              correct: "What do I need to bring?",
              explanation: "疑问句需要助动词do/does/did。",
            },
            formalityVariants: {
              casual: "Okay, what do I gotta bring? And what's the fine gonna be?",
              standard: "What do I need to bring? And how much is the fine?",
              formal:
                "Could you please advise me on the necessary documentation or items I should bring? Additionally, what is the exact amount of the applicable fine?",
            },
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn:
              "Bring your passport, return ticket, proof of accommodation, and $200 for the overstay fine. Fill out this extension application form.",
            textZh: "带上护照、回程机票、住宿证明和200美元的逾期罚款。填写这张延期申请表。",
            keyPhrases: [
              { en: "proof of accommodation", zh: "住宿证明" },
              { en: "extension application", zh: "延期申请" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll need your passport, flight ticket, hotel booking or proof of where you're staying, and 200 bucks for the fine. Here, fill this out.",
                textZh: "你需要护照、机票、酒店预订或住宿证明，还有200美元罚款。来，填这个。",
                actionHint: "200 bucks 就是200美元",
                frequency: "common",
              },
              {
                textEn:
                  "Bring everything — passport, return ticket, something showing where you're staying, plus the $200 penalty. And complete this extension form for me.",
                textZh: "什么都带上——护照、回程机票、住宿证明，加上200美元罚金。然后帮我填这张延期表。",
                actionHint: "penalty 就是罚金",
                frequency: "common",
              },
            ],
            casualVersion:
              "Bring your passport, flight back, proof of where you're staying, and two hundred bucks for the fine. Fill out this extension form.",
            culturalNote: "美国常用bucks代替dollars",
            commonMistake: {
              wrong: "You need fill out this form.",
              correct: "Fill out this extension application form.",
              explanation: "“to fill out”是动词不定式，需要“to”。",
            },
            formalityVariants: {
              casual:
                "Just bring your passport, flight ticket, proof of where you've been staying, and two hundred bucks for the fine. Then fill out this extension form.",
              standard:
                "Bring your passport, return ticket, proof of accommodation, and $200 for the overstay fine. Fill out this extension application form.",
              formal:
                "Kindly provide your passport, a copy of your return airline ticket, documentation verifying your accommodation, and a payment of $200 for the overstay penalty. Please also complete this extension application form.",
            },
          },
          {
            speaker: "you",
            textEn: "Will this affect my future travel? Can I still come back to this country?",
            textZh: "这会影响我以后的旅行吗？我还能再来这个国家吗？",
            culturalNote: "中国人尤其在意政府记录和未来入境。这个问题是很自然的担忧。",
            casualVersion: "This gonna mess with my future travel? Can I even come back here?",
            commonMistake: {
              wrong: "Will this affect my future travel in the future?",
              correct: "Will this affect my future travel?",
              explanation: "“future travel”已包含未来含义，无需重复。",
            },
            formalityVariants: {
              casual: "So, is this gonna mess up my future travel plans? Will I still be allowed to come back here?",
              standard: "Will this affect my future travel? Can I still come back to this country?",
              formal:
                "Will this particular incident have any implications for my future international travel? Specifically, will I retain eligibility to re-enter this country?",
            },
          },
          {
            speaker: "them",
            role: "移民官员",
            textEn:
              "A short overstay with proper resolution usually doesn't result in a ban. Pay the fine, get the extension stamp, and you'll have a record but no ban. Next time, set a reminder a week before your visa expires.",
            textZh:
              "短期逾期且妥善处理通常不会导致禁令。交罚款、拿到延期章，会有记录但不会被禁入。下次签证到期前一周设个提醒。",
            culturalNote: "美国官员强调“proper resolution”的重要性，避免过度担忧。",
            keyPhrases: [
              { en: "proper resolution", zh: "妥善处理" },
              { en: "ban", zh: "禁令" },
              { en: "extension stamp", zh: "延期章" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For something this minor, you won't get banned as long as you take care of it. Pay up, get the stamp, and you're good. Just set a reminder next time.",
                textZh: "这么轻微的情况，只要你处理好就不会被禁入。交罚款，拿到章，就没事了。下次记得设提醒。",
                actionHint: "pay up 就是交钱/付款",
                frequency: "common",
              },
              {
                textEn:
                  "A few days over with a clean record? Usually no ban. Clear the fine, get your extension, and you'll have a note on file but nothing serious. Be more careful with dates next time.",
                textZh: "超了几天而且记录清白？通常不会被禁入。交罚款，拿延期，会有记录但不严重。下次注意日期。",
                actionHint: "a note on file 就是档案里会有一条记录",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "A short overstay that's handled right usually won't get you banned. Pay the fine, get the stamp, and you'll have a record but no ban. Next time, just set a reminder a week before your visa's up.",
            commonMistake: {
              wrong: "You will have a record but no ban.",
              correct: "you'll have a record but no ban.",
              explanation: "口语中常用'll代替will，更自然。",
            },
            formalityVariants: {
              casual:
                "If it's a short overstay and you fix it, you usually won't get banned. Just pay the fine, get your stamp, and you'll have a record, but no ban. Seriously, next time, put a reminder in your phone a week before your visa's up.",
              standard:
                "A short overstay with proper resolution usually doesn't result in a ban. Pay the fine, get the extension stamp, and you'll have a record but no ban. Next time, set a reminder a week before your visa expires.",
              formal:
                "Typically, a brief overstay that is promptly and appropriately resolved does not lead to a formal prohibition. Upon payment of the fine and acquisition of the extension stamp, an administrative record will be maintained, but a travel ban will not be imposed. For future reference, it is advisable to establish a reminder approximately one week prior to your visa's expiration date.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 26. 噎住急救 ====================
  {
    id: "emergency-choking",
    category: "emergency",
    titleZh: "噎住急救",
    titleEn: "Choking Emergency",
    description: "在餐厅或聚会中发现有人噎住，寻求帮助并配合急救",
    otherRole: "急救人员",
    otherRoleIcon: "🩺",
    flows: [
      {
        id: "basic",
        titleZh: "噎住急救基本流程",
        titleEn: "Basic Choking Emergency",
        description: "发现噎住、呼救、配合海姆立克急救",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Help! This person is choking! They can't breathe! Does anyone know the Heimlich maneuver?",
            textZh: "救命！这个人噎住了！他们无法呼吸！有人会海姆立克急救法吗？",
            commonMistake: {
              wrong: "Help! This person is choke! They can't breath!",
              correct: "Help! This person is choking! They can't breathe!",
              explanation: "choking 用进行时表示正在发生；breathe 是动词，breath 是名词。",
            },
            culturalNote: "在美国餐厅，噎住是常见紧急情况。很多服务员受过海姆立克急救训练，大声呼救通常能得到帮助。",
            casualVersion: "Help! Someone's choking! Can't breathe! Anyone know the Heimlich?",
            formalityVariants: {
              casual: "Help! They're choking! Can't breathe! Anyone know the Heimlich?",
              standard: "Help! This person is choking! They can't breathe! Does anyone know the Heimlich maneuver?",
              formal: "Please, I need immediate assistance! This individual is choking and unable to breathe. Is anyone trained in the Heimlich maneuver?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "I'm trained in first aid. Stand back, everyone. Are they coughing at all, or completely silent?",
            textZh: "我受过急救训练。大家退后。他们还能咳嗽吗，还是完全没声音了？",
            keyPhrases: [
              { en: "trained in first aid", zh: "受过急救训练" },
              { en: "stand back", zh: "退后" },
            ],
            alternativeExpressions: [
              {
                textEn: "I know CPR and first aid. Give me room. Can they cough or make any sound?",
                textZh: "我会心肺复苏和急救。让开。他们能咳嗽或发出声音吗？",
                actionHint: "give me room 就是让开、腾出空间",
                frequency: "common",
              },
            ],
            casualVersion: "I know first aid. Back up, everyone. Can they cough at all or are they totally silent?",
            formalityVariants: {
              casual: "I know first aid. Back up. Can they cough or not?",
              standard: "I'm trained in first aid. Stand back, everyone. Are they coughing at all, or completely silent?",
              formal: "I am certified in first aid procedures. Please step back, everyone. Is the individual producing any cough, or have they become completely silent?",
            },
          },
          {
            speaker: "you",
            textEn: "They're completely silent. Their face is turning blue. Please hurry!",
            textZh: "完全没声音了。脸已经发紫了。请快点！",
            commonMistake: {
              wrong: "Their face is becoming blue.",
              correct: "Their face is turning blue.",
              explanation: "描述颜色变化用 turning，不用 becoming。turning blue 是固定搭配。",
            },
            culturalNote: "脸色发紫（turning blue）是严重气道阻塞的信号，说明需要立即进行腹部冲击法。",
            casualVersion: "Totally silent. Face is turning blue. Hurry!",
            formalityVariants: {
              casual: "No sound at all. Going blue. Please hurry!",
              standard: "They're completely silent. Their face is turning blue. Please hurry!",
              formal: "The individual is entirely silent and their complexion is becoming cyanotic. I urge you to act with the utmost urgency.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Okay, that's a complete blockage. I'm going to perform abdominal thrusts. Someone call 911. Stand behind me and be ready to catch them if they collapse.",
            textZh: "好的，这是完全堵塞。我要做腹部冲击。有人打911。站在我身后，如果他们倒下要准备接住。",
            keyPhrases: [
              { en: "abdominal thrusts", zh: "腹部冲击（海姆立克急救法）" },
              { en: "complete blockage", zh: "完全堵塞" },
            ],
            alternativeExpressions: [
              {
                textEn: "Full blockage. I'll do the Heimlich. Call 911 now. Be ready to help if they pass out.",
                textZh: "完全堵住了。我来做海姆立克。现在打911。如果他们晕过去准备帮忙。",
                actionHint: "pass out 就是晕过去",
                frequency: "common",
              },
            ],
            casualVersion: "Full blockage. Doing abdominal thrusts now. Someone call 911. Stand behind me, catch 'em if they go down.",
            formalityVariants: {
              casual: "Full blockage. Doing the Heimlich now. Call 911. Catch 'em if they drop.",
              standard: "Okay, that's a complete blockage. I'm going to perform abdominal thrusts. Someone call 911. Stand behind me and be ready to catch them if they collapse.",
              formal: "This is a complete airway obstruction. I will now perform abdominal thrusts. Please have someone contact emergency services immediately. Position yourself behind me and be prepared to support the individual should they lose consciousness.",
            },
          },
          {
            speaker: "you",
            textEn: "It worked! They coughed something up! Are they going to be okay? Should we still go to the hospital?",
            textZh: "有效了！他们咳出东西了！他们会没事吗？还需要去医院吗？",
            commonMistake: {
              wrong: "They coughed out something!",
              correct: "They coughed something up!",
              explanation: "cough up 是固定短语动词，表示咳出来。不用 cough out。",
            },
            culturalNote: "即使异物被咳出，美国医疗建议仍然要去急诊检查，因为腹部冲击可能导致内伤。",
            casualVersion: "It worked! They coughed it up! They gonna be okay? Still need the hospital?",
            formalityVariants: {
              casual: "It worked! Coughed it up! They gonna be alright? Still need the ER?",
              standard: "It worked! They coughed something up! Are they going to be okay? Should we still go to the hospital?",
              formal: "The procedure was successful. The individual has expectorated the obstruction. Will they recover fully? Would it still be advisable to seek medical evaluation at the hospital?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Yes, they should definitely get checked out. Abdominal thrusts can cause internal bruising. Keep them calm and sitting upright until the ambulance arrives.",
            textZh: "是的，一定要去检查。腹部冲击可能导致内部淤伤。让他们保持冷静，坐直，等救护车来。",
            keyPhrases: [
              { en: "get checked out", zh: "去检查一下" },
              { en: "sitting upright", zh: "坐直" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely, they need to be seen by a doctor. The thrusts can bruise ribs or organs. Keep them seated and calm till paramedics get here.",
                textZh: "当然要看医生。冲击可能伤到肋骨或器官。让他们坐着保持冷静，等急救人员到。",
                actionHint: "paramedics 就是急救人员/医护人员",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, gotta get checked out. Thrusts can bruise stuff inside. Keep 'em calm and sitting up till the ambulance gets here.",
            formalityVariants: {
              casual: "For sure, gotta see a doc. Can bruise stuff inside. Keep 'em calm and sitting up.",
              standard: "Yes, they should definitely get checked out. Abdominal thrusts can cause internal bruising. Keep them calm and sitting upright until the ambulance arrives.",
              formal: "Indeed, medical evaluation is strongly recommended. Abdominal thrusts may result in internal contusions. Please ensure the individual remains calm and in an upright seated position until emergency medical personnel arrive.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "噎住急救进阶流程",
        titleEn: "Intermediate Choking Emergency",
        description: "判断堵塞程度、指导旁人配合、处理后续情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think this child is choking on something. She was eating grapes and suddenly stopped making any sound.",
            textZh: "打扰一下，我觉得这个孩子被什么东西噎住了。她在吃葡萄，突然就不出声了。",
            commonMistake: {
              wrong: "She was eating grape and suddenly stopped to make sound.",
              correct: "She was eating grapes and suddenly stopped making any sound.",
              explanation: "grape 要用复数 grapes；stopped making 表示停止发出声音，不是 stopped to make。",
            },
            culturalNote: "葡萄是儿童噎住的高发食物。在美国，给幼儿吃葡萄要切成四分之一。看到幼儿安静且无法咳嗽要立刻行动。",
            casualVersion: "Hey, I think this kid is choking. She was eating grapes and just went silent.",
            formalityVariants: {
              casual: "Hey, this kid might be choking. Was eating grapes and went totally quiet.",
              standard: "Excuse me, I think this child is choking on something. She was eating grapes and suddenly stopped making any sound.",
              formal: "Pardon me, I believe this child may be experiencing an airway obstruction. She was consuming grapes when she abruptly ceased producing any sound.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "How old is she? For small children, we use back blows and chest thrusts instead of the Heimlich. Hold her face-down on your forearm.",
            textZh: "她多大了？对小孩子，我们用背部拍击和胸部冲击而不是海姆立克。让她脸朝下趴在你的前臂上。",
            keyPhrases: [
              { en: "back blows", zh: "背部拍击" },
              { en: "chest thrusts", zh: "胸部冲击" },
            ],
            alternativeExpressions: [
              {
                textEn: "What's her age? Kids need back slaps and chest pushes, not the Heimlich. Lay her face-down across your arm.",
                textZh: "她几岁？小孩需要拍背和推胸，不能做海姆立克。让她脸朝下横在你的手臂上。",
                actionHint: "back slaps 是 back blows 的非正式说法",
                frequency: "common",
              },
            ],
            casualVersion: "How old? For little kids, it's back blows and chest thrusts, not the Heimlich. Hold her face-down on your arm.",
            formalityVariants: {
              casual: "How old? Little kids get back blows and chest thrusts. Hold her face-down on your arm.",
              standard: "How old is she? For small children, we use back blows and chest thrusts instead of the Heimlich. Hold her face-down on your forearm.",
              formal: "May I ask the child's age? For pediatric patients, the appropriate intervention involves back blows and chest thrusts rather than abdominal thrusts. Please position her face-down along your forearm.",
            },
          },
          {
            speaker: "you",
            textEn: "She's about three years old. Okay, I'm holding her face-down. What do I do next? How hard do I hit her back?",
            textZh: "她大概三岁。好的，我让她脸朝下了。接下来怎么做？拍背要多用力？",
            commonMistake: {
              wrong: "How strong should I hit her back?",
              correct: "How hard do I hit her back?",
              explanation: "描述力度用 how hard，不用 how strong。strong 描述人的力量，hard 描述动作的力度。",
            },
            culturalNote: "在美国，如果不是自己的孩子，对幼儿施救前最好先向家长确认或在家长在场时进行。",
            casualVersion: "She's like three. Got her face-down. What next? How hard on the back?",
            formalityVariants: {
              casual: "About three. Got her face-down. Now what? How hard?",
              standard: "She's about three years old. Okay, I'm holding her face-down. What do I do next? How hard do I hit her back?",
              formal: "The child is approximately three years of age. I have positioned her face-down as instructed. What is the next step? With what degree of force should I administer the back blows?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Give five firm back blows between her shoulder blades with the heel of your hand. Support her head. If that doesn't work, flip her over and do five chest thrusts with two fingers.",
            textZh: "用手掌根部在她肩胛骨之间用力拍五下。托住她的头。如果没用，翻过来用两根手指做五次胸部冲击。",
            keyPhrases: [
              { en: "shoulder blades", zh: "肩胛骨" },
              { en: "heel of your hand", zh: "手掌根部" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hit her five times between the shoulders with the flat of your palm. Keep her head steady. If nothing comes out, turn her over and press her chest five times with two fingers.",
                textZh: "用手掌在她两肩之间拍五下。稳住她的头。如果没有东西出来，翻过来用两根手指按胸五下。",
                actionHint: "the flat of your palm 就是手掌平面",
                frequency: "common",
              },
            ],
            casualVersion: "Five hard back blows between the shoulders with the heel of your hand. Hold her head. If that doesn't do it, flip her and do five chest thrusts with two fingers.",
            formalityVariants: {
              casual: "Five solid hits between the shoulders, palm heel. Hold her head. No luck? Flip and five chest pushes with two fingers.",
              standard: "Give five firm back blows between her shoulder blades with the heel of your hand. Support her head. If that doesn't work, flip her over and do five chest thrusts with two fingers.",
              formal: "Administer five firm back blows between the scapulae using the heel of your hand, while supporting her cranium. Should that prove ineffective, reposition her supine and perform five chest compressions using two fingers.",
            },
          },
          {
            speaker: "you",
            textEn: "She coughed it out after the third back blow! She's crying now. Is crying a good sign? What should I watch for?",
            textZh: "拍了第三下她就咳出来了！她现在在哭。哭是好兆头吗？我应该注意什么？",
            commonMistake: {
              wrong: "She coughed it after third back blow.",
              correct: "She coughed it out after the third back blow.",
              explanation: "cough out 是固定搭配，不能省略 out；序数词前要加 the。",
            },
            culturalNote: "孩子哭其实是好信号，说明气道已经通了。如果噎住后不哭不出声反而更危险。",
            casualVersion: "Got it out on the third hit! She's crying. That good? What do I look for now?",
            formalityVariants: {
              casual: "She got it out! Crying now. That good? What should I watch for?",
              standard: "She coughed it out after the third back blow! She's crying now. Is crying a good sign? What should I watch for?",
              formal: "The obstruction was expelled following the third back blow. The child is now crying. Would crying be considered a positive indicator? What symptoms should I monitor for going forward?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Crying is great — it means her airway is clear. Watch for any wheezing, difficulty swallowing, or drooling over the next few hours. Take her to a pediatrician today just to be safe.",
            textZh: "哭是好事——说明气道通了。接下来几个小时注意有没有喘鸣、吞咽困难或流口水。今天带她去看儿科医生以防万一。",
            keyPhrases: [
              { en: "airway is clear", zh: "气道通畅" },
              { en: "pediatrician", zh: "儿科医生" },
            ],
            alternativeExpressions: [
              {
                textEn: "Crying is actually a good thing — means she can breathe. Keep an eye out for wheezing or trouble swallowing. Get her to a kids' doctor today just in case.",
                textZh: "哭其实是好事——说明她能呼吸了。留意有没有喘息或吞咽困难。今天带她去看儿科以防万一。",
                actionHint: "kids' doctor 就是儿科医生的口语说法",
                frequency: "common",
              },
            ],
            casualVersion: "Crying's good — airway's clear. Watch for wheezing, trouble swallowing, or drooling. Get her to a pediatrician today to be safe.",
            formalityVariants: {
              casual: "Crying's good. Means she's breathing. Watch for wheezing or swallowing issues. See a kids' doc today.",
              standard: "Crying is great — it means her airway is clear. Watch for any wheezing, difficulty swallowing, or drooling over the next few hours. Take her to a pediatrician today just to be safe.",
              formal: "The crying is a positive indicator, confirming that the airway has been successfully cleared. Please monitor for any signs of wheezing, dysphagia, or excessive salivation over the subsequent hours. I would recommend consulting a pediatrician today as a precautionary measure.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 27. 中暑急救 ====================
  {
    id: "emergency-heatstroke",
    category: "emergency",
    titleZh: "中暑急救",
    titleEn: "Heatstroke Emergency",
    description: "在户外高温环境中发现有人中暑，寻求帮助并配合降温急救",
    otherRole: "急救人员",
    otherRoleIcon: "🩺",
    flows: [
      {
        id: "basic",
        titleZh: "中暑急救基本流程",
        titleEn: "Basic Heatstroke Emergency",
        description: "发现中暑症状、呼救、配合降温措施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, my friend just collapsed. I think it's heatstroke — he's been in the sun all day and he's burning up.",
            textZh: "打扰了，我的朋友刚倒下了。我觉得是中暑——他在太阳下待了一天，浑身发烫。",
            commonMistake: {
              wrong: "He has sun stroke — he is very hot.",
              correct: "I think it's heatstroke — he's burning up.",
              explanation: "heatstroke 是一个词不是 sun stroke（虽然 sunstroke 存在但更少用）；burning up 比 very hot 更形象。",
            },
            culturalNote: "美国的国家公园和户外景区经常有游客中暑。一旦体温超过 104°F (40°C) 就是紧急情况，需要立即降温。",
            casualVersion: "Hey, my friend just dropped. Think it's heatstroke — been in the sun all day and he's burning up.",
            formalityVariants: {
              casual: "My friend just dropped. Heatstroke I think — been out in the sun all day, burning up.",
              standard: "Excuse me, my friend just collapsed. I think it's heatstroke — he's been in the sun all day and he's burning up.",
              formal: "Pardon me, my companion has just collapsed. I suspect he may be experiencing heatstroke, as he has been exposed to direct sunlight throughout the day and his body temperature appears dangerously elevated.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Let's get him into the shade immediately. Is he conscious? Has he been drinking any water today?",
            textZh: "我们马上把他移到阴凉处。他有意识吗？他今天喝水了吗？",
            keyPhrases: [
              { en: "get him into the shade", zh: "把他移到阴凉处" },
              { en: "conscious", zh: "有意识的/清醒的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Move him out of the sun right now. Is he awake? Has he had any fluids?",
                textZh: "马上把他从太阳下移开。他醒着吗？他摄入液体了吗？",
                actionHint: "fluids 在医疗语境指液体/水分",
                frequency: "common",
              },
            ],
            casualVersion: "Get him outta the sun. Is he conscious? He drink any water today?",
            formalityVariants: {
              casual: "Get him outta the sun now. He awake? Had any water?",
              standard: "Let's get him into the shade immediately. Is he conscious? Has he been drinking any water today?",
              formal: "We need to relocate him to a shaded area without delay. Is the individual conscious? Has he been consuming any fluids throughout the day?",
            },
          },
          {
            speaker: "you",
            textEn: "He's mumbling but not making sense. I don't think he's had much water. His skin is really hot and dry — he's not sweating at all.",
            textZh: "他在嘟囔但说不清楚。我觉得他没怎么喝水。他的皮肤又烫又干——完全没出汗。",
            commonMistake: {
              wrong: "He speaks but no meaning. His skin is very hot and no sweat.",
              correct: "He's mumbling but not making sense. His skin is really hot and dry — he's not sweating at all.",
              explanation: "mumbling 表示含糊不清地说；not making sense 表示说的话没有意义；not sweating at all 比 no sweat 更准确。",
            },
            culturalNote: "皮肤热且干燥、不出汗是严重中暑的典型症状。正常中暑还会出汗，不出汗说明身体调节机制已经失效。",
            casualVersion: "He's mumbling, not making sense. Don't think he drank much. Skin's hot and dry — zero sweat.",
            formalityVariants: {
              casual: "He's mumbling nonsense. Barely drank anything. Skin's super hot and dry, not sweating.",
              standard: "He's mumbling but not making sense. I don't think he's had much water. His skin is really hot and dry — he's not sweating at all.",
              formal: "He appears to be uttering incoherent statements. I do not believe he has consumed adequate fluids. His skin is extremely hot and dry, and he exhibits no perspiration whatsoever.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "That's serious — no sweating means his body can't cool itself. Pour water over him, especially his neck and armpits. Fan him if you can. I'm calling 911.",
            textZh: "这很严重——不出汗说明身体已经无法自行降温。往他身上浇水，特别是脖子和腋下。如果可以帮他扇风。我打911。",
            keyPhrases: [
              { en: "cool itself", zh: "自行降温" },
              { en: "armpits", zh: "腋下" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's bad — when you stop sweating, your cooling system has shut down. Dump water on his neck and groin area. I'll call 911 right now.",
                textZh: "这很糟——停止出汗意味着降温系统已经关闭了。把水浇在他的脖子和腹股沟区域。我马上打911。",
                actionHint: "cooling system has shut down 是把身体比作机器",
                frequency: "common",
              },
            ],
            casualVersion: "Not good — no sweat means his body can't cool down. Dump water on him, neck and pits. Fan him. I'm calling 911.",
            formalityVariants: {
              casual: "That's bad. No sweat means he can't cool off. Pour water on his neck and pits. I'll call 911.",
              standard: "That's serious — no sweating means his body can't cool itself. Pour water over him, especially his neck and armpits. Fan him if you can. I'm calling 911.",
              formal: "This is a critical situation. The absence of perspiration indicates that his thermoregulatory system has ceased functioning. Please apply water to his body, particularly the cervical region and axillae. Provide manual ventilation if possible. I will contact emergency services immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm pouring water on him now. Should I give him water to drink? How long until the ambulance gets here?",
            textZh: "我正在往他身上浇水。需要给他喝水吗？救护车多久能到？",
            commonMistake: {
              wrong: "Should I let him drink water?",
              correct: "Should I give him water to drink?",
              explanation: "let him drink 暗示他主动想喝而你在阻止；give him water to drink 更准确表达给予。",
            },
            culturalNote: "不要给意识不清的人喝水，他们可能呛到导致更危险的情况。",
            casualVersion: "Pouring water on him. Should he drink some too? How long for the ambulance?",
            formalityVariants: {
              casual: "Water's on him. Should he drink? How long till the ambulance?",
              standard: "I'm pouring water on him now. Should I give him water to drink? How long until the ambulance gets here?",
              formal: "I am currently applying water externally. Would it be advisable to administer oral fluids? What is the estimated response time for the emergency medical services?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Do NOT give him water to drink — he's not fully conscious and could choke. Just keep pouring water on him and fanning. The ambulance should be here in five to ten minutes.",
            textZh: "不要给他喝水——他意识不完全清醒，可能会呛到。继续浇水和扇风就好。救护车五到十分钟就到。",
            keyPhrases: [
              { en: "not fully conscious", zh: "意识不完全清醒" },
              { en: "could choke", zh: "可能会呛到" },
            ],
            alternativeExpressions: [
              {
                textEn: "No water by mouth — he's out of it and could aspirate. Keep cooling him down. EMS is on the way, about five to ten minutes out.",
                textZh: "不要用嘴喝水——他神志不清可能会误吸。继续给他降温。急救服务已经在路上了，大约五到十分钟。",
                actionHint: "aspirate 医学术语指液体误入气管",
                frequency: "common",
              },
            ],
            casualVersion: "Don't let him drink — he's out of it and could choke. Keep pouring water and fanning. Ambulance'll be here in five to ten.",
            formalityVariants: {
              casual: "No drinking — he could choke. Keep cooling him. Ambulance should be here in five to ten.",
              standard: "Do NOT give him water to drink — he's not fully conscious and could choke. Just keep pouring water on him and fanning. The ambulance should be here in five to ten minutes.",
              formal: "Under no circumstances should oral fluids be administered. The individual is not fully conscious and there is a significant aspiration risk. Please continue external cooling measures. Emergency medical services should arrive within five to ten minutes.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "中暑急救进阶流程",
        titleEn: "Intermediate Heatstroke Emergency",
        description: "区分中暑和热衰竭、详细描述症状、与急救员配合处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm feeling really dizzy and nauseous. I've been hiking for hours and I think I might have heat exhaustion. What's the difference between that and heatstroke?",
            textZh: "我觉得很头晕恶心。我已经徒步好几个小时了，我觉得我可能是热衰竭。热衰竭和中暑有什么区别？",
            commonMistake: {
              wrong: "I feel dizzy and want to vomit. What is different between heat exhaustion and heatstroke?",
              correct: "I'm feeling really dizzy and nauseous. What's the difference between heat exhaustion and heatstroke?",
              explanation: "nauseous 比 want to vomit 更地道；what's the difference between 是固定句型。",
            },
            culturalNote: "美国国家公园每年都有大量中暑病例。了解热衰竭和中暑的区别很重要，前者可以自行处理，后者必须送医。",
            casualVersion: "Super dizzy and nauseous. Been hiking for hours. Think it might be heat exhaustion. How's that different from heatstroke?",
            formalityVariants: {
              casual: "Feeling super dizzy, kinda nauseous. Been hiking forever. Heat exhaustion maybe? What's the diff from heatstroke?",
              standard: "I'm feeling really dizzy and nauseous. I've been hiking for hours and I think I might have heat exhaustion. What's the difference between that and heatstroke?",
              formal: "I am experiencing significant dizziness and nausea after several hours of hiking. I suspect I may be suffering from heat exhaustion. Could you explain the distinction between heat exhaustion and heatstroke?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Are you sweating? With heat exhaustion, you sweat heavily. With heatstroke, you stop sweating and your skin gets hot and dry. Let me check your temperature.",
            textZh: "你出汗了吗？热衰竭会大量出汗。中暑会停止出汗，皮肤变得又热又干。让我量一下体温。",
            keyPhrases: [
              { en: "heat exhaustion", zh: "热衰竭" },
              { en: "sweat heavily", zh: "大量出汗" },
            ],
            alternativeExpressions: [
              {
                textEn: "The big difference is sweating. Exhaustion means you're pouring sweat. Heatstroke means you've stopped sweating and you're dry. Let me take your temp.",
                textZh: "最大的区别是出汗。衰竭意味着你在猛出汗。中暑意味着你停止出汗了，皮肤是干的。让我测一下你的体温。",
                actionHint: "take your temp 就是量体温的简写",
                frequency: "common",
              },
            ],
            casualVersion: "You sweating? Heat exhaustion = lots of sweat. Heatstroke = no sweat, skin's hot and dry. Lemme check your temp.",
            formalityVariants: {
              casual: "Sweating? Exhaustion means lots of sweat. Heatstroke means no sweat, dry skin. Let me take your temp.",
              standard: "Are you sweating? With heat exhaustion, you sweat heavily. With heatstroke, you stop sweating and your skin gets hot and dry. Let me check your temperature.",
              formal: "May I inquire whether you are perspiring? Heat exhaustion is characterized by profuse sweating, whereas heatstroke presents with cessation of perspiration and hot, dry integument. Allow me to assess your core temperature.",
            },
          },
          {
            speaker: "you",
            textEn: "Yeah, I'm sweating like crazy. My shirt is soaked through. I also have a bad headache and my legs feel really weak.",
            textZh: "是的，我出汗出得特别厉害。衬衫都湿透了。我还有严重的头痛，腿感觉很软。",
            commonMistake: {
              wrong: "I sweat very much. My head hurts badly and my legs are very soft.",
              correct: "I'm sweating like crazy. I have a bad headache and my legs feel really weak.",
              explanation: "sweating like crazy 更口语化；legs feel weak 比 legs are soft 准确，soft 不形容腿部无力。",
            },
            culturalNote: "美国人形容大量出汗常说 sweating like crazy 或 sweating bullets，很少说 sweating a lot。",
            casualVersion: "Sweating buckets. Shirt's drenched. Killer headache and my legs are jelly.",
            formalityVariants: {
              casual: "Sweating buckets. Shirt's soaked. Head is pounding and legs feel like jelly.",
              standard: "Yeah, I'm sweating like crazy. My shirt is soaked through. I also have a bad headache and my legs feel really weak.",
              formal: "Yes, I am perspiring profusely. My clothing is completely saturated. Additionally, I am experiencing a severe headache and considerable weakness in my lower extremities.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Good news — heavy sweating means it's likely heat exhaustion, not heatstroke. Move to shade, sip cool water slowly, and put wet towels on your forehead and neck. Don't gulp the water.",
            textZh: "好消息——大量出汗说明很可能是热衰竭而不是中暑。到阴凉处，慢慢小口喝凉水，把湿毛巾放在额头和脖子上。不要大口灌水。",
            keyPhrases: [
              { en: "sip cool water slowly", zh: "慢慢小口喝凉水" },
              { en: "don't gulp", zh: "不要大口灌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Looks like heat exhaustion, which is manageable. Get out of the sun, take small sips of water, and cool down with wet cloths on your neck and head. No chugging.",
                textZh: "看起来是热衰竭，可以处理。离开太阳，小口喝水，用湿布放在脖子和头上降温。不要猛灌。",
                actionHint: "chugging 是猛灌/大口喝的意思",
                frequency: "common",
              },
            ],
            casualVersion: "Heavy sweating — probably heat exhaustion, not stroke. Get in the shade, sip water slow, wet towels on forehead and neck. Don't chug.",
            formalityVariants: {
              casual: "Sweating heavy? That's heat exhaustion, way better than stroke. Shade, sip water, wet towels. Don't chug.",
              standard: "Good news — heavy sweating means it's likely heat exhaustion, not heatstroke. Move to shade, sip cool water slowly, and put wet towels on your forehead and neck. Don't gulp the water.",
              formal: "The profuse perspiration suggests this is heat exhaustion rather than heatstroke, which is a more favorable prognosis. Please relocate to a shaded area, consume cool water in small measured sips, and apply damp cloths to your forehead and cervical region. Avoid rapid ingestion of fluids.",
            },
          },
          {
            speaker: "you",
            textEn: "How long should I rest before trying to walk again? We still need to get back to the trailhead and it's about two miles.",
            textZh: "我应该休息多久才能再走？我们还要回到步道入口，大概还有两英里。",
            commonMistake: {
              wrong: "How long should I rest before I try to walk again? We need to go back to the trail entrance.",
              correct: "How long should I rest before trying to walk again? We need to get back to the trailhead.",
              explanation: "trailhead 是步道入口的专用词，不说 trail entrance；before trying 比 before I try 更简洁自然。",
            },
            culturalNote: "trailhead 是美国徒步常用词，指步道的起点/入口处，通常有停车场和信息牌。",
            casualVersion: "How long should I rest? Still gotta hike two miles back to the trailhead.",
            formalityVariants: {
              casual: "How long till I can walk? Still two miles to the trailhead.",
              standard: "How long should I rest before trying to walk again? We still need to get back to the trailhead and it's about two miles.",
              formal: "What would be the recommended duration of rest before I attempt to resume walking? We still need to return to the trailhead, which is approximately two miles distant.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Rest at least thirty minutes and drink a full bottle of water before you move. If you still feel dizzy or nauseous after that, don't push it — call for a park ranger to help you out.",
            textZh: "至少休息三十分钟，喝完一整瓶水再走。如果之后还是头晕恶心，别硬撑——叫公园巡护员来帮你出去。",
            keyPhrases: [
              { en: "don't push it", zh: "不要硬撑" },
              { en: "park ranger", zh: "公园巡护员" },
            ],
            alternativeExpressions: [
              {
                textEn: "Take at least a half hour and finish a bottle of water. If you're still feeling off, don't risk it — flag down a ranger or call the park office for assistance.",
                textZh: "至少歇半个小时，喝完一瓶水。如果还是觉得不对劲，别冒险——找个巡护员或打公园办公室电话求助。",
                actionHint: "flag down 就是拦住/招手叫住",
                frequency: "common",
              },
            ],
            casualVersion: "Rest thirty minutes minimum, drink a whole bottle of water. Still dizzy after? Don't push it — get a ranger to help you back.",
            formalityVariants: {
              casual: "Half hour minimum, full bottle of water. Still feeling bad? Don't push it. Get a ranger.",
              standard: "Rest at least thirty minutes and drink a full bottle of water before you move. If you still feel dizzy or nauseous after that, don't push it — call for a park ranger to help you out.",
              formal: "I recommend a rest period of no fewer than thirty minutes and the consumption of a complete bottle of water prior to any physical exertion. Should symptoms of dizziness or nausea persist thereafter, I would strongly advise against continuing. Please contact a park ranger to arrange assisted evacuation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 28. 蛇咬伤 ====================
  {
    id: "emergency-snake-bite",
    category: "emergency",
    titleZh: "蛇咬伤",
    titleEn: "Snake Bite Emergency",
    description: "在户外被蛇咬伤后寻求帮助和急救指导",
    otherRole: "急救人员",
    otherRoleIcon: "🩺",
    flows: [
      {
        id: "basic",
        titleZh: "蛇咬伤基本急救",
        titleEn: "Basic Snake Bite Emergency",
        description: "报告蛇咬伤、描述蛇的外观、接受急救指导",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I just got bitten by a snake! It was on the trail. I didn't get a good look but it had a triangular head.",
            textZh: "我刚被蛇咬了！在步道上。我没看清但它有三角形的头。",
            commonMistake: {
              wrong: "A snake bited me! It has a triangle head.",
              correct: "I just got bitten by a snake! It had a triangular head.",
              explanation: "bite 的过去分词是 bitten 不是 bited；triangular 是形容词形式，不是 triangle head。",
            },
            culturalNote: "三角形头是毒蛇的特征之一。在美国，常见毒蛇包括响尾蛇、铜头蛇和水蝮蛇。看到蛇不要试图抓或杀它。",
            casualVersion: "Got bit by a snake on the trail! Didn't see it well but it had a triangular head.",
            formalityVariants: {
              casual: "Snake just bit me on the trail! Had a triangular head I think.",
              standard: "I just got bitten by a snake! It was on the trail. I didn't get a good look but it had a triangular head.",
              formal: "I have just sustained a snake bite while on the trail. I was unable to observe the snake clearly, however I noted that it possessed a distinctly triangular-shaped head.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Don't panic. Where exactly were you bitten? Try not to move the affected limb. A triangular head could mean it's venomous. Did you see any patterns or colors?",
            textZh: "不要慌。你具体哪里被咬了？尽量不要动受伤的肢体。三角形头可能意味着是毒蛇。你有没有看到花纹或颜色？",
            keyPhrases: [
              { en: "affected limb", zh: "受伤的肢体" },
              { en: "venomous", zh: "有毒的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Stay calm. Show me where it bit you. Keep that arm or leg still. Triangular head usually means venomous. Any colors or markings you can remember?",
                textZh: "保持冷静。让我看看哪里被咬了。那条胳膊或腿别动。三角形头通常意味着有毒。还记得什么颜色或标记吗？",
                actionHint: "markings 就是蛇身上的花纹/标记",
                frequency: "common",
              },
            ],
            casualVersion: "Calm down. Where'd it bite you? Don't move that limb. Triangular head might mean venomous. See any colors or patterns?",
            formalityVariants: {
              casual: "Easy, easy. Where'd it get you? Keep that still. Triangular head could be venomous. See any markings?",
              standard: "Don't panic. Where exactly were you bitten? Try not to move the affected limb. A triangular head could mean it's venomous. Did you see any patterns or colors?",
              formal: "Please remain calm. Can you indicate the precise location of the bite? I would advise minimizing movement of the affected extremity. A triangular head morphology may indicate a venomous species. Were you able to observe any distinguishing patterns or coloration?",
            },
          },
          {
            speaker: "you",
            textEn: "It bit my right ankle. It's starting to swell and it really hurts. The snake was brownish with dark diamond-shaped markings.",
            textZh: "咬了我的右脚踝。开始肿了，非常疼。那条蛇是棕色的，有深色菱形花纹。",
            commonMistake: {
              wrong: "My right ankle is bitten. It begins to swell. The snake was brown and had dark diamond marks.",
              correct: "It bit my right ankle. It's starting to swell and it really hurts. The snake had dark diamond-shaped markings.",
              explanation: "主动语态 It bit my ankle 更自然；starting to swell 比 begins to swell 更口语；diamond-shaped 是复合形容词。",
            },
            culturalNote: "菱形花纹的棕色蛇很可能是响尾蛇（rattlesnake）。响尾蛇是北美最常见的毒蛇，咬伤后需要尽快注射抗蛇毒血清。",
            casualVersion: "Right ankle. Swelling up and hurts like hell. Snake was brownish with dark diamond shapes.",
            formalityVariants: {
              casual: "Got my right ankle. Swelling bad, hurts a ton. Brown snake with dark diamond shapes.",
              standard: "It bit my right ankle. It's starting to swell and it really hurts. The snake was brownish with dark diamond-shaped markings.",
              formal: "The bite is located on my right ankle. The area is beginning to exhibit swelling and considerable pain. The serpent appeared brownish in coloration with distinct dark diamond-shaped markings along its body.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "That sounds like a rattlesnake. Keep your ankle below your heart and stay as still as possible. Do NOT try to suck out the venom. I'm calling for an emergency evacuation.",
            textZh: "听起来像是响尾蛇。让你的脚踝保持在心脏以下位置，尽量不要动。不要试图吸出毒液。我呼叫紧急转运。",
            keyPhrases: [
              { en: "below your heart", zh: "心脏以下位置" },
              { en: "suck out the venom", zh: "吸出毒液" },
            ],
            alternativeExpressions: [
              {
                textEn: "Probably a rattlesnake. Keep the bite below heart level and don't move around. Never try to suck the venom out — that's a myth. Getting help now.",
                textZh: "可能是响尾蛇。让咬伤部位低于心脏，不要走动。绝对不要试图吸毒液——那是谣言。马上叫人帮忙。",
                actionHint: "that's a myth 意思是那是一个广泛流传但错误的说法",
                frequency: "common",
              },
            ],
            casualVersion: "Sounds like a rattler. Keep your ankle low, below your heart. Stay still. Don't suck the venom — that doesn't work. Calling for help now.",
            formalityVariants: {
              casual: "Rattlesnake probably. Ankle below your heart, don't move. Do NOT suck the venom. Calling for evac.",
              standard: "That sounds like a rattlesnake. Keep your ankle below your heart and stay as still as possible. Do NOT try to suck out the venom. I'm calling for an emergency evacuation.",
              formal: "Based on your description, the snake appears to be a rattlesnake. Please maintain the bitten extremity in a dependent position below cardiac level and minimize all movement. Under no circumstances should you attempt to extract the venom by suction. I am initiating an emergency medical evacuation.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I put a tourniquet on it? My friend has a belt we could use. The swelling is getting worse.",
            textZh: "需要绑止血带吗？我朋友有根皮带可以用。肿得越来越厉害了。",
            commonMistake: {
              wrong: "Should I tie a tourniquet? The swelling is more and more.",
              correct: "Should I put a tourniquet on it? The swelling is getting worse.",
              explanation: "put a tourniquet on 是固定搭配；getting worse 比 more and more 更自然。",
            },
            culturalNote: "蛇咬伤不应使用止血带，这是常见误区。止血带会阻断血液循环，可能导致组织坏死。",
            casualVersion: "Tourniquet? My buddy has a belt. Swelling's getting worse.",
            formalityVariants: {
              casual: "Should I tourniquet it? Got a belt. Swelling's worse.",
              standard: "Should I put a tourniquet on it? My friend has a belt we could use. The swelling is getting worse.",
              formal: "Would it be appropriate to apply a tourniquet? My companion has a belt that could serve this purpose. I should note that the edema appears to be progressively worsening.",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Absolutely not — a tourniquet can cause more damage than the bite. Just keep the area still, remove any jewelry near the bite, and try to stay calm. Your heart rate affects how fast venom spreads.",
            textZh: "绝对不要——止血带可能比蛇咬本身造成更大伤害。保持伤口不动，取下咬伤附近的首饰，尽量保持冷静。心率会影响毒液扩散速度。",
            keyPhrases: [
              { en: "cause more damage", zh: "造成更大伤害" },
              { en: "heart rate affects how fast venom spreads", zh: "心率影响毒液扩散速度" },
            ],
            alternativeExpressions: [
              {
                textEn: "No, no tourniquet! That makes things worse. Remove any rings or bracelets near the bite and keep completely still. Staying calm actually slows the venom down.",
                textZh: "不，不要用止血带！那会更糟。取下咬伤附近的戒指或手镯，完全不要动。保持冷静其实能减慢毒液扩散。",
                actionHint: "slows the venom down 就是减慢毒液扩散",
                frequency: "common",
              },
            ],
            casualVersion: "No way — tourniquet makes it worse. Keep it still, take off any jewelry near the bite, and stay calm. Your heart rate makes venom spread faster.",
            formalityVariants: {
              casual: "Nope, no tourniquet. Makes it worse. Take off rings near the bite, stay still, stay calm. Heart rate speeds up the venom.",
              standard: "Absolutely not — a tourniquet can cause more damage than the bite. Just keep the area still, remove any jewelry near the bite, and try to stay calm. Your heart rate affects how fast venom spreads.",
              formal: "A tourniquet is absolutely contraindicated in this situation, as it may cause more tissue damage than the envenomation itself. Please immobilize the affected area, remove any constrictive jewelry in proximity to the wound, and endeavor to remain calm. An elevated heart rate will accelerate the systemic distribution of the venom.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "蛇咬伤进阶处理",
        titleEn: "Intermediate Snake Bite Emergency",
        description: "详细描述症状变化、与急救团队沟通、了解后续治疗",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The paramedics are here but the swelling has spread up to my calf. I'm starting to feel tingling in my fingers too. Is that from the venom?",
            textZh: "急救人员到了但肿胀已经蔓延到小腿了。我手指也开始发麻了。这是毒液引起的吗？",
            commonMistake: {
              wrong: "The swelling has spread to my leg. My fingers are numb.",
              correct: "The swelling has spread up to my calf. I'm starting to feel tingling in my fingers.",
              explanation: "calf 比 leg 更具体；tingling（刺麻感）和 numb（完全没知觉）是不同症状。",
            },
            culturalNote: "paramedics 是美国急救人员的常用称呼，他们会携带急救设备到现场。与医院的 ER doctor 不同。",
            casualVersion: "Paramedics are here but the swelling's up to my calf now. Fingers are tingling too. Is that the venom?",
            formalityVariants: {
              casual: "Medics are here but swelling's up to my calf. Fingers tingling. Venom doing that?",
              standard: "The paramedics are here but the swelling has spread up to my calf. I'm starting to feel tingling in my fingers too. Is that from the venom?",
              formal: "The emergency medical technicians have arrived, however the edema has progressed to my calf region. I am also beginning to experience paresthesia in my fingers. Is this symptomatic of the envenomation?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Tingling can be a sign of venom spreading, yes. We're going to start an IV and get you to the ER. They'll have antivenom there. Can you tell me roughly how long ago you were bitten?",
            textZh: "发麻可能是毒液扩散的信号，是的。我们要开始输液然后送你去急诊。那里有抗蛇毒血清。你能告诉我大概多久前被咬的吗？",
            keyPhrases: [
              { en: "start an IV", zh: "开始输液/静脉注射" },
              { en: "antivenom", zh: "抗蛇毒血清" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, tingling means the venom might be moving through your system. We'll set up an IV line and transport you. The hospital has the antivenin. How long has it been since the bite?",
                textZh: "对，发麻说明毒液可能在你体内扩散。我们会建立静脉通路然后转运你。医院有抗毒血清。被咬多久了？",
                actionHint: "antivenin 和 antivenom 是同一个东西",
                frequency: "common",
              },
            ],
            casualVersion: "Tingling could be venom, yeah. Starting an IV, getting you to the ER. They've got antivenom. How long ago were you bitten?",
            formalityVariants: {
              casual: "Yeah, tingling's probably the venom. IV going in, then we're heading to the ER for antivenom. When'd you get bit?",
              standard: "Tingling can be a sign of venom spreading, yes. We're going to start an IV and get you to the ER. They'll have antivenom there. Can you tell me roughly how long ago you were bitten?",
              formal: "The paresthesia you are experiencing may indeed indicate systemic venom dissemination. We will establish intravenous access and arrange immediate transport to the emergency department, where antivenom therapy will be available. Could you provide an approximate time elapsed since the envenomation occurred?",
            },
          },
          {
            speaker: "you",
            textEn: "About forty-five minutes ago, maybe an hour. Will the antivenom definitely work? I'm really scared. How much is it going to cost?",
            textZh: "大概四十五分钟前，可能一个小时。抗蛇毒血清一定有效吗？我真的很害怕。费用大概多少？",
            commonMistake: {
              wrong: "About forty-five minutes before. Will the antivenom surely work?",
              correct: "About forty-five minutes ago, maybe an hour. Will the antivenom definitely work?",
              explanation: "ago 不是 before（before 需要参考时间点）；definitely 比 surely 在口语中更常用。",
            },
            culturalNote: "美国蛇咬伤治疗费用极其昂贵，一瓶抗蛇毒血清可能需要数千美元，总治疗费可能超过十万美元。很多美国人对此非常焦虑。",
            casualVersion: "Like forty-five minutes? Maybe an hour. Will antivenom for sure work? I'm freaking out. And how much is this gonna cost?",
            formalityVariants: {
              casual: "Forty-five minutes? Hour maybe? Will the antivenom work for sure? Kinda freaking out. And what's this gonna cost?",
              standard: "About forty-five minutes ago, maybe an hour. Will the antivenom definitely work? I'm really scared. How much is it going to cost?",
              formal: "Approximately forty-five minutes to one hour has elapsed. Can you assure me that the antivenom treatment will be effective? I am quite apprehensive. Additionally, could you provide an estimate of the anticipated medical expenses?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Antivenom is very effective, especially within the first few hours. You're going to be okay. As for cost, the ER social worker can help with billing — focus on getting better right now.",
            textZh: "抗蛇毒血清非常有效，特别是在头几个小时内。你会没事的。费用方面，急诊的社工可以帮你处理账单——现在先专注好起来。",
            keyPhrases: [
              { en: "within the first few hours", zh: "在头几个小时内" },
              { en: "social worker", zh: "社工" },
            ],
            alternativeExpressions: [
              {
                textEn: "Antivenom works really well if given early, and we're within that window. You'll be fine. Don't worry about the bill now — the hospital has financial counselors who can help.",
                textZh: "如果早期使用抗蛇毒血清效果很好，我们还在最佳时间窗内。你会没事的。现在别担心账单——医院有财务顾问可以帮忙。",
                actionHint: "financial counselors 是帮助处理医疗费用的顾问",
                frequency: "common",
              },
            ],
            casualVersion: "Antivenom works great, especially this early. You'll be fine. Don't stress about cost right now — ER social worker can handle that.",
            formalityVariants: {
              casual: "Antivenom's super effective, especially early. You'll be fine. Worry about the bill later — social worker can help.",
              standard: "Antivenom is very effective, especially within the first few hours. You're going to be okay. As for cost, the ER social worker can help with billing — focus on getting better right now.",
              formal: "Antivenom therapy demonstrates excellent efficacy, particularly when administered within the initial hours following envenomation. Your prognosis is quite favorable. Regarding financial concerns, the emergency department's social services department can assist with billing arrangements. I would encourage you to prioritize your recovery at this time.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, thank you. One more thing — should I take a photo of the bite for the doctors? And will I need to stay in the hospital overnight?",
            textZh: "好的，谢谢。再问一下——我需要给伤口拍照给医生看吗？需要住院过夜吗？",
            commonMistake: {
              wrong: "Should I take photo of the bite? Will I need to stay in hospital at night?",
              correct: "Should I take a photo of the bite? Will I need to stay in the hospital overnight?",
              explanation: "take a photo 需要冠词 a；stay in the hospital 需要 the；overnight 是一个词，不是 at night。",
            },
            culturalNote: "在美国，医生建议给蛇咬伤拍照记录肿胀进展，这有助于判断毒液扩散程度和决定抗蛇毒血清用量。",
            casualVersion: "Thanks. Should I snap a pic of the bite for the docs? And am I staying the night?",
            formalityVariants: {
              casual: "Thanks. Should I photo the bite for the docs? Am I staying overnight?",
              standard: "Okay, thank you. One more thing — should I take a photo of the bite for the doctors? And will I need to stay in the hospital overnight?",
              formal: "Thank you for your assistance. May I ask one additional question — would it be beneficial to photograph the bite wound for the attending physicians? Furthermore, should I anticipate an overnight hospitalization?",
            },
          },
          {
            speaker: "them",
            role: "急救人员",
            textEn: "Great idea — take a photo now and another one every thirty minutes so the doctors can track the swelling. And yes, plan on at least one night. They need to monitor you for delayed reactions to both the venom and the antivenom.",
            textZh: "好主意——现在拍一张，然后每三十分钟拍一张，这样医生可以追踪肿胀情况。是的，至少要住一晚。他们需要监测你对毒液和抗蛇毒血清的延迟反应。",
            keyPhrases: [
              { en: "track the swelling", zh: "追踪肿胀情况" },
              { en: "delayed reactions", zh: "延迟反应" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes, photograph it and keep taking pictures every half hour — helps doctors see how fast it's progressing. And you'll be staying at least overnight for observation, in case of allergic reactions to the antivenom.",
                textZh: "是的，拍照并且每半小时继续拍——帮助医生看扩散速度。你至少要留院观察一晚，以防对抗蛇毒血清产生过敏反应。",
                actionHint: "for observation 就是留院观察",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, snap a pic now and every half hour. Helps docs track swelling. And yeah, at least one night — gotta watch for delayed reactions to the venom and antivenom.",
            formalityVariants: {
              casual: "Good call — photo now, then every half hour. Docs need to track swelling. Plan on at least one night. They watch for delayed reactions.",
              standard: "Great idea — take a photo now and another one every thirty minutes so the doctors can track the swelling. And yes, plan on at least one night. They need to monitor you for delayed reactions to both the venom and the antivenom.",
              formal: "That is an excellent suggestion. Please capture an image now and subsequently at thirty-minute intervals, enabling the medical team to monitor the progression of edema. Regarding hospitalization, you should anticipate a minimum overnight stay, as continuous monitoring for delayed reactions to both the venom and the antivenom therapy is medically necessary.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 29. 停电应对 ====================
  {
    id: "emergency-power-outage",
    category: "emergency",
    titleZh: "停电应对",
    titleEn: "Power Outage Emergency",
    description: "在酒店或住处遭遇停电，向前台或物业寻求帮助",
    otherRole: "酒店前台",
    otherRoleIcon: "🏨",
    flows: [
      {
        id: "basic",
        titleZh: "停电求助基本流程",
        titleEn: "Basic Power Outage Response",
        description: "报告停电、了解情况、获取应急物资",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, the power just went out in my room. Everything is completely dark. Is this a building-wide outage or just my room?",
            textZh: "你好，我房间刚停电了。完全黑了。这是整栋楼停电还是只有我的房间？",
            commonMistake: {
              wrong: "The electricity is cut in my room. Is it the whole building or only my room?",
              correct: "The power just went out in my room. Is this a building-wide outage or just my room?",
              explanation: "power went out 是停电的自然说法，不说 electricity is cut；building-wide outage 是标准表达。",
            },
            culturalNote: "美国酒店遇到停电时，首先打电话或去前台询问。大多数酒店有应急发电机，但可能只覆盖走廊照明和电梯。",
            casualVersion: "Hey, power's out in my room. Pitch black. Is it the whole building or just me?",
            formalityVariants: {
              casual: "Power's out in my room. Total dark. Whole building or just me?",
              standard: "Hi, the power just went out in my room. Everything is completely dark. Is this a building-wide outage or just my room?",
              formal: "Good evening. I wish to report that the electrical power has ceased in my room. It is entirely dark. Could you kindly advise whether this is a facility-wide power outage or an issue isolated to my room?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I'm sorry about that. It's a neighborhood outage — the whole block lost power. Our backup generator covers the hallways and elevators. We're not sure how long it'll last.",
            textZh: "很抱歉。是整个街区停电了——整条街都断电了。我们的备用发电机覆盖走廊和电梯。我们不确定会持续多久。",
            keyPhrases: [
              { en: "neighborhood outage", zh: "街区停电" },
              { en: "backup generator", zh: "备用发电机" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sorry for the inconvenience. It's actually an area-wide outage, not just our building. Emergency lighting is on in the hallways. No ETA on when it'll be restored.",
                textZh: "给您带来不便很抱歉。其实是整个区域停电，不只是我们楼。走廊的应急灯已经亮了。什么时候恢复还没有消息。",
                actionHint: "ETA 就是 estimated time of arrival/预计时间",
                frequency: "common",
              },
            ],
            casualVersion: "Sorry about that. Whole neighborhood's out — not just us. Backup generator's got the hallways and elevators. No idea how long though.",
            formalityVariants: {
              casual: "Sorry, whole block's out. Generator's running for hallways and elevators. Don't know how long.",
              standard: "I'm sorry about that. It's a neighborhood outage — the whole block lost power. Our backup generator covers the hallways and elevators. We're not sure how long it'll last.",
              formal: "I sincerely apologize for the inconvenience. This is a neighborhood-wide power outage affecting the entire block. Our backup generator is currently supplying power to the corridors and elevator systems. Unfortunately, we do not have an estimated restoration time at this point.",
            },
          },
          {
            speaker: "you",
            textEn: "Do you have any flashlights I can borrow? Also, will my phone still charge if I go to the lobby? I need my alarm for an early flight.",
            textZh: "有手电筒可以借吗？另外如果我去大堂的话手机能充电吗？我明天早班飞机需要闹钟。",
            commonMistake: {
              wrong: "Do you have torch I can borrow? I need alarm for my early flight.",
              correct: "Do you have any flashlights I can borrow? I need my alarm for an early flight.",
              explanation: "美式英语说 flashlight 不说 torch（英式）；需要冠词 any 和 my。",
            },
            culturalNote: "美国说 flashlight，英国说 torch。旅行时手机充电是实际需求，大多数酒店大堂有备用电源可以充电。",
            casualVersion: "Got any flashlights? Can I charge my phone in the lobby? Need my alarm for an early flight.",
            formalityVariants: {
              casual: "Any flashlights? Can I charge my phone downstairs? Got an early flight.",
              standard: "Do you have any flashlights I can borrow? Also, will my phone still charge if I go to the lobby? I need my alarm for an early flight.",
              formal: "Would you happen to have any flashlights available for guests? Additionally, is there electrical power in the lobby area where I might charge my phone? I have an early morning flight and require my phone alarm.",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Yes, we have flashlights at the front desk. And the lobby has power from the generator — there are charging stations by the seating area. We can also arrange a wake-up call for you.",
            textZh: "有的，前台有手电筒。大堂有发电机供电——座位区旁边有充电站。我们也可以帮您安排叫早服务。",
            keyPhrases: [
              { en: "charging stations", zh: "充电站" },
              { en: "wake-up call", zh: "叫早服务" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, I'll grab you a flashlight. The lobby's on generator power, so there are outlets you can use. Want me to set up a wake-up call just in case?",
                textZh: "好的，我给您拿个手电筒。大堂是发电机供电，有插座可以用。需要我帮您设个叫早服务以防万一吗？",
                actionHint: "outlets 就是电源插座",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, got flashlights here. Lobby's got power from the generator — charging spots by the seats. We can do a wake-up call too.",
            formalityVariants: {
              casual: "Yeah, got flashlights. Lobby has power — charging spots by the seats. Want a wake-up call?",
              standard: "Yes, we have flashlights at the front desk. And the lobby has power from the generator — there are charging stations by the seating area. We can also arrange a wake-up call for you.",
              formal: "Certainly, we have flashlights available at the reception desk for guest use. The lobby area is supplied with generator power, and charging stations are conveniently located adjacent to the seating area. Additionally, we would be happy to arrange a complimentary wake-up call at your preferred time.",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great — please set a wake-up call for 5 AM. Also, is it safe to use the elevator right now, or should I take the stairs?",
            textZh: "那太好了——请帮我设早上5点叫早。另外，现在坐电梯安全吗，还是应该走楼梯？",
            commonMistake: {
              wrong: "Please set alarm for 5 AM. Is it safe to take elevator now?",
              correct: "Please set a wake-up call for 5 AM. Is it safe to use the elevator right now?",
              explanation: "酒店叫早是 wake-up call 不是 alarm；use the elevator 比 take elevator 更标准，需要冠词 the。",
            },
            culturalNote: "停电期间很多人会担心电梯安全。即使有备用电源，电梯可能会运行较慢或在停电恢复时短暂停止。",
            casualVersion: "Awesome — wake-up call at 5 AM please. Is the elevator safe or should I do stairs?",
            formalityVariants: {
              casual: "Cool, 5 AM wake-up call. Elevator safe or should I take the stairs?",
              standard: "That would be great — please set a wake-up call for 5 AM. Also, is it safe to use the elevator right now, or should I take the stairs?",
              formal: "That would be most appreciated. Could you please arrange a wake-up call for 5:00 AM? Additionally, I would like to inquire whether it is safe to utilize the elevator during the current outage, or would you recommend using the stairwell?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Wake-up call is set for 5 AM. The elevator is running on backup power, but I'd recommend the stairs just to be safe. If the generator runs out, you don't want to be stuck between floors.",
            textZh: "叫早设好了，早上5点。电梯在用备用电源运行，但为了安全我建议走楼梯。如果发电机没油了，你不会想被困在两层楼之间。",
            keyPhrases: [
              { en: "stuck between floors", zh: "被困在两层楼之间" },
              { en: "running on backup power", zh: "用备用电源运行" },
            ],
            alternativeExpressions: [
              {
                textEn: "All set for 5 AM. The elevator works but it's on generator power. I'd play it safe and take the stairs. Last thing you need is getting trapped in an elevator.",
                textZh: "5点设好了。电梯能用但是靠发电机供电。我建议保险起见走楼梯。你最不需要的就是被困在电梯里。",
                actionHint: "play it safe 就是保险起见",
                frequency: "common",
              },
            ],
            casualVersion: "5 AM, done. Elevator's on backup — works but I'd take the stairs to be safe. Don't wanna get stuck between floors.",
            formalityVariants: {
              casual: "5 AM set. Elevator's on backup but I'd do stairs. Don't wanna get stuck.",
              standard: "Wake-up call is set for 5 AM. The elevator is running on backup power, but I'd recommend the stairs just to be safe. If the generator runs out, you don't want to be stuck between floors.",
              formal: "Your wake-up call has been confirmed for 5:00 AM. While the elevator is currently operational on backup power, I would recommend utilizing the stairwell as a precaution. In the event that the generator fuel supply is depleted, being trapped between floors would be a most unfortunate situation.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "停电应对进阶流程",
        titleEn: "Intermediate Power Outage Response",
        description: "长时间停电、食物保存、寻求替代方案",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "It's been three hours now and the power is still out. My room is getting really hot without the AC. Are there any rooms with power, or can I get a fan or something?",
            textZh: "已经三个小时了，还是没来电。没空调房间越来越热了。有没有有电的房间，或者能给我一个风扇什么的？",
            commonMistake: {
              wrong: "Already three hours no electricity. My room is very hot without air condition.",
              correct: "It's been three hours and the power is still out. My room is getting really hot without the AC.",
              explanation: "It's been... 表示持续时间；air condition 不对，应该是 AC 或 air conditioning。",
            },
            culturalNote: "美国很多地区夏天极其炎热，没有空调可能导致中暑。酒店有义务为客人提供替代方案。",
            casualVersion: "Three hours now, still no power. Room's getting crazy hot without AC. Got any rooms with power or maybe a fan?",
            formalityVariants: {
              casual: "Three hours, still out. Room's boiling without AC. Any rooms with power? Or a fan at least?",
              standard: "It's been three hours now and the power is still out. My room is getting really hot without the AC. Are there any rooms with power, or can I get a fan or something?",
              formal: "The outage has persisted for three hours now and my room temperature is becoming increasingly uncomfortable without air conditioning. Are there any rooms in the facility that currently have power, or could you provide a portable fan or alternative cooling solution?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "I understand your frustration. Unfortunately, no guest rooms have power right now. We do have battery-powered fans we can lend you. Also, the pool area is open if you'd like to cool off. We're working with the power company — they're estimating two more hours.",
            textZh: "我理解您的不满。不幸的是，目前没有客房有电。我们有电池供电的风扇可以借给您。另外泳池区是开放的，如果您想凉快一下。我们正在和电力公司联系——他们预计还要两个小时。",
            keyPhrases: [
              { en: "battery-powered fans", zh: "电池供电的风扇" },
              { en: "working with the power company", zh: "和电力公司联系" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm sorry about this. No rooms have power yet. We've got some portable fans you can use, and the pool is open for cooling off. The utility company says about two more hours.",
                textZh: "很抱歉。还没有房间有电。我们有便携式风扇可以使用，泳池也开放可以降温。电力公司说大约还要两个小时。",
                actionHint: "utility company 就是公用事业公司/电力公司",
                frequency: "common",
              },
            ],
            casualVersion: "Totally get it. No guest rooms have power. We've got battery fans though. Pool's open if you wanna cool off. Power company says about two more hours.",
            formalityVariants: {
              casual: "Yeah, sorry. No rooms have power. Got battery fans. Pool's open. Power company says two more hours.",
              standard: "I understand your frustration. Unfortunately, no guest rooms have power right now. We do have battery-powered fans we can lend you. Also, the pool area is open if you'd like to cool off. We're working with the power company — they're estimating two more hours.",
              formal: "I completely understand your concern and apologize for the ongoing inconvenience. Regrettably, electrical power has not been restored to any guest rooms at this time. We can provide you with battery-operated fans for temporary relief. The pool facilities remain accessible should you wish to cool down. We are in active communication with the utility provider, who estimates approximately two additional hours for full restoration.",
            },
          },
          {
            speaker: "you",
            textEn: "Two more hours? I have medication in my mini-fridge that needs to stay cold. Is there somewhere I can store it? And will we get any compensation for tonight?",
            textZh: "还要两个小时？我的小冰箱里有需要保持低温的药物。有地方可以存放吗？今晚会有补偿吗？",
            commonMistake: {
              wrong: "I have medicine in refrigerator that must keep cold. Can we get compensate?",
              correct: "I have medication in my mini-fridge that needs to stay cold. Will we get any compensation?",
              explanation: "medication 比 medicine 更正式；mini-fridge 是酒店小冰箱；compensation 是名词，compensate 是动词。",
            },
            culturalNote: "在美国，酒店因停电等不可控因素影响入住体验时，通常会提供折扣、免费住一晚或积分补偿。主动询问是合理的。",
            casualVersion: "Two more hours? Got meds in the mini-fridge that need to stay cold. Anywhere to store them? And are we getting compensated for tonight?",
            formalityVariants: {
              casual: "Two more hours? My meds are in the mini-fridge and need to stay cold. Anywhere safe? And what about comp for tonight?",
              standard: "Two more hours? I have medication in my mini-fridge that needs to stay cold. Is there somewhere I can store it? And will we get any compensation for tonight?",
              formal: "Two additional hours is rather concerning. I have temperature-sensitive medication in my in-room refrigerator that requires cold storage. Could you arrange an alternative refrigeration solution? Furthermore, given the significant impact on our stay, will the hotel be offering any form of compensation?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "Absolutely — bring your medication down and we'll put it in our kitchen cooler. As for compensation, I can offer you a full refund for tonight or a free night on your next stay. Which would you prefer?",
            textZh: "当然——把您的药物拿下来，我们放到厨房冷藏里。关于补偿，我可以给您今晚全额退款或者下次入住免费住一晚。您更喜欢哪个？",
            keyPhrases: [
              { en: "kitchen cooler", zh: "厨房冷藏" },
              { en: "full refund", zh: "全额退款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course. Bring your meds to the front desk, we'll keep them in our walk-in fridge. For tonight, I can do a full refund or comp your next night. Your call.",
                textZh: "当然。把您的药拿到前台，我们放在步入式冷藏室里。今晚我可以全额退款或者赠送下次住宿。您来选。",
                actionHint: "walk-in fridge 是大型步入式冷藏室；your call 就是你来决定",
                frequency: "common",
              },
            ],
            casualVersion: "For sure — bring the meds down, we'll stick 'em in the kitchen cooler. And I can do a full refund tonight or a free night next time. Up to you.",
            formalityVariants: {
              casual: "Totally. Bring the meds, we'll keep 'em cold. Full refund for tonight or free night next time. Your pick.",
              standard: "Absolutely — bring your medication down and we'll put it in our kitchen cooler. As for compensation, I can offer you a full refund for tonight or a free night on your next stay. Which would you prefer?",
              formal: "Certainly. Please bring your medication to the reception, and we will ensure it is stored in our commercial refrigeration unit. Regarding compensation, I am authorized to offer either a complete refund for this evening's accommodation or a complimentary night on a future reservation. Which option would be most suitable for you?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the refund, please. One last question — if the power isn't back by morning, how will I know? And is checkout still at 11?",
            textZh: "我选退款。最后一个问题——如果早上电还没来，我怎么知道？退房还是11点吗？",
            commonMistake: {
              wrong: "I take the refund. If power doesn't come back by morning, how do I know?",
              correct: "I'll take the refund. If the power isn't back by morning, how will I know?",
              explanation: "I'll take 表示做出选择；isn't back 比 doesn't come back 更简洁；how will I know 用将来时更合理。",
            },
            culturalNote: "美国酒店标准退房时间通常是上午11点。停电等特殊情况下可以要求延迟退房。",
            casualVersion: "Refund please. Last thing — if power's not back by morning, how'll I know? Still 11 for checkout?",
            formalityVariants: {
              casual: "Refund's good. If power's still out in the morning, how will I know? Checkout still at 11?",
              standard: "I'll take the refund, please. One last question — if the power isn't back by morning, how will I know? And is checkout still at 11?",
              formal: "I shall opt for the refund, thank you. I have one final inquiry — in the event that power has not been restored by morning, how will guests be informed? And may I confirm that the checkout time remains at 11:00 AM?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn: "We'll slip a note under your door with an update. If power is restored overnight, you'll notice your lights coming back on. And yes, checkout is still at 11, but we can extend to noon given the circumstances. Have a good night.",
            textZh: "我们会从门缝塞一张更新通知给您。如果半夜来电了，您会注意到灯亮起来。退房还是11点，但考虑到情况我们可以延长到中午。祝您晚安。",
            keyPhrases: [
              { en: "slip a note under your door", zh: "从门缝塞一张纸条" },
              { en: "extend to noon", zh: "延长到中午" },
            ],
            alternativeExpressions: [
              {
                textEn: "We'll leave a message under your door. When the power comes back, the lights and AC will kick in, so you'll know. Checkout's 11 but we'll push it to noon because of all this. Rest well.",
                textZh: "我们会在门下留张信息。来电后灯和空调会自动开，您会知道的。退房是11点但因为这些情况我们推到中午。好好休息。",
                actionHint: "kick in 就是（设备）自动启动",
                frequency: "common",
              },
            ],
            casualVersion: "We'll slide a note under your door. If power comes back at night, your lights'll come on. Checkout's 11 but we'll push it to noon. Sleep well.",
            formalityVariants: {
              casual: "We'll put a note under your door. Lights'll come on when power's back. Checkout's 11 but noon's fine given everything. Night.",
              standard: "We'll slip a note under your door with an update. If power is restored overnight, you'll notice your lights coming back on. And yes, checkout is still at 11, but we can extend to noon given the circumstances. Have a good night.",
              formal: "We will deliver a written status update beneath your door. Should power be restored during the night, you will observe the illumination and climate control systems reactivating. The standard checkout time of 11:00 AM remains in effect, however in light of the circumstances, we are pleased to extend this to 12:00 noon. I wish you a restful evening.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 30. 煤气泄漏 ====================
  {
    id: "emergency-gas-leak",
    category: "emergency",
    titleZh: "煤气泄漏",
    titleEn: "Gas Leak Emergency",
    description: "在住处闻到煤气味，紧急联系消防和邻居撤离",
    otherRole: "消防员",
    otherRoleIcon: "🧑‍🚒",
    flows: [
      {
        id: "basic",
        titleZh: "煤气泄漏基本应对",
        titleEn: "Basic Gas Leak Response",
        description: "发现煤气味、报警、撤离",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I smell gas in my apartment! It's really strong. I think there's a gas leak. What should I do?",
            textZh: "我公寓里闻到煤气味了！非常浓。我觉得是煤气泄漏。我该怎么办？",
            commonMistake: {
              wrong: "I smell gas in my apartment! It smells very heavy.",
              correct: "I smell gas in my apartment! It's really strong.",
              explanation: "形容气味浓用 strong 不用 heavy。heavy 用于描述重量或沉闷，不用于气味。",
            },
            culturalNote: "美国天然气（natural gas）本身无味，但供气公司会添加硫化物使其有臭鸡蛋味（rotten egg smell），方便检测泄漏。",
            casualVersion: "I smell gas in my place! Super strong. Think there's a leak. What do I do?",
            formalityVariants: {
              casual: "Smelling gas in my place, really strong. Gas leak? What do I do?",
              standard: "I smell gas in my apartment! It's really strong. I think there's a gas leak. What should I do?",
              formal: "I wish to report that I am detecting a very strong odor of natural gas in my apartment. I believe there may be a gas leak. Could you please advise on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "Get out of the apartment immediately. Do NOT turn on or off any light switches — a spark could cause an explosion. Don't use your phone inside either. Go outside and call 911.",
            textZh: "立刻离开公寓。不要开或关任何电灯开关——火花可能引起爆炸。也不要在室内用手机。到外面再打911。",
            keyPhrases: [
              { en: "light switches", zh: "电灯开关" },
              { en: "spark could cause an explosion", zh: "火花可能引起爆炸" },
            ],
            alternativeExpressions: [
              {
                textEn: "Leave now. Don't flip any switches or use electronics — any spark could set it off. Get outside, then call 911 from there.",
                textZh: "现在就走。不要碰开关或使用电子设备——任何火花都可能引爆。到外面再打911。",
                actionHint: "set it off 就是引爆/引发",
                frequency: "common",
              },
            ],
            casualVersion: "Get out now. Don't touch any light switches — spark could blow the place. No phone inside. Get out, then call 911.",
            formalityVariants: {
              casual: "Get out now. No switches, no phone inside. Spark could blow up. Call 911 outside.",
              standard: "Get out of the apartment immediately. Do NOT turn on or off any light switches — a spark could cause an explosion. Don't use your phone inside either. Go outside and call 911.",
              formal: "Please evacuate the premises immediately. It is critical that you refrain from operating any electrical switches, as an electrical spark could potentially trigger an explosion. Additionally, please do not utilize your mobile phone within the building. Once you have reached a safe distance outside, contact emergency services at 911.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm outside now. I called 911. Should I warn my neighbors? Some of them might still be inside and don't know about the leak.",
            textZh: "我已经到外面了。打了911了。需要通知邻居吗？有些人可能还在里面不知道泄漏的事。",
            commonMistake: {
              wrong: "Should I tell my neighbors? Some of them maybe still inside.",
              correct: "Should I warn my neighbors? Some of them might still be inside.",
              explanation: "warn 比 tell 更适合紧急情况；might 比 maybe 在句中做助动词更正确。",
            },
            culturalNote: "在美国，帮助邻居撤离是很常见的做法，但不要冒险回到危险区域。可以在外面大声呼喊或按门铃提醒。",
            casualVersion: "I'm out. Called 911. Should I warn the neighbors? Some might still be inside.",
            formalityVariants: {
              casual: "I'm outside, called 911. Warn the neighbors? Some might still be in there.",
              standard: "I'm outside now. I called 911. Should I warn my neighbors? Some of them might still be inside and don't know about the leak.",
              formal: "I have successfully evacuated and contacted emergency services. Should I alert the neighboring residents? Several individuals may remain inside the building unaware of the gas leak.",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "Yes, alert your neighbors but do NOT go back inside the building. Knock on doors from the outside if you can, or yell from the hallway. We're on our way — should be there in about five minutes.",
            textZh: "是的，提醒邻居但不要回到楼里。如果可以从外面敲门，或者在走廊喊。我们在路上了——大约五分钟到。",
            keyPhrases: [
              { en: "do NOT go back inside", zh: "不要回到里面" },
              { en: "on our way", zh: "在路上了" },
            ],
            alternativeExpressions: [
              {
                textEn: "Definitely warn them, but stay out of the building yourself. Bang on doors if it's safe to reach them, or shout from outside. We'll be there in five.",
                textZh: "一定要提醒他们，但你自己不要进楼。如果能安全到达就使劲敲门，或者在外面喊。我们五分钟到。",
                actionHint: "bang on doors 就是使劲敲门",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, warn 'em but don't go back in. Knock on doors from outside or yell. We're five minutes out.",
            formalityVariants: {
              casual: "Yeah, warn 'em but stay out. Bang on doors or yell. Five minutes out.",
              standard: "Yes, alert your neighbors but do NOT go back inside the building. Knock on doors from the outside if you can, or yell from the hallway. We're on our way — should be there in about five minutes.",
              formal: "Yes, please do alert the other residents. However, it is imperative that you do not re-enter the building under any circumstances. If possible, knock on exterior doors or call out from a safe distance. Our unit has been dispatched and should arrive within approximately five minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "The fire truck is here. How long will this take to fix? Is it safe to sleep here tonight, or should I find somewhere else to stay?",
            textZh: "消防车到了。修好要多久？今晚在这里睡安全吗，还是应该找别的地方住？",
            commonMistake: {
              wrong: "The fire car is here. Can I sleep here tonight safely?",
              correct: "The fire truck is here. Is it safe to sleep here tonight?",
              explanation: "消防车是 fire truck 不是 fire car；Is it safe to... 是标准句型。",
            },
            culturalNote: "煤气泄漏后通常需要专业检测才能确认安全。消防员会用检测仪测量燃气浓度。",
            casualVersion: "Fire truck's here. How long to fix? Can I crash here tonight or do I need to find another place?",
            formalityVariants: {
              casual: "Fire truck's here. How long? Safe to sleep here or should I find somewhere else?",
              standard: "The fire truck is here. How long will this take to fix? Is it safe to sleep here tonight, or should I find somewhere else to stay?",
              formal: "The fire department has arrived. Could you estimate the duration of the repair? Will it be safe to occupy the premises tonight, or should I arrange alternative accommodation?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "We need to ventilate the building and find the source. Could take an hour or two. We'll test the air quality before letting anyone back in. If levels are still high, you'll need to stay elsewhere tonight. Do you have somewhere to go?",
            textZh: "我们需要给楼通风并找到泄漏源。可能要一两个小时。在让任何人回去之前我们会检测空气质量。如果浓度还是高的话，今晚你需要住别处。你有地方去吗？",
            keyPhrases: [
              { en: "ventilate the building", zh: "给楼通风" },
              { en: "test the air quality", zh: "检测空气质量" },
            ],
            alternativeExpressions: [
              {
                textEn: "Gotta air the place out and track down the leak. Might be a couple hours. We'll check the air before anyone goes back in. If it's still not safe, you'll have to crash somewhere else. Got a backup plan?",
                textZh: "得先通风并追踪泄漏点。可能要几个小时。我们会在任何人回去前检查空气。如果还不安全，你得住别的地方。有备选方案吗？",
                actionHint: "track down the leak 就是追踪找到泄漏源",
                frequency: "common",
              },
            ],
            casualVersion: "Gotta ventilate and find the leak. Hour or two. We'll test the air before you go back in. If it's still bad, you'll need to stay somewhere else. Got somewhere to go?",
            formalityVariants: {
              casual: "Need to air it out and find the leak. Hour or two. We'll test before you go back. Might need to stay somewhere else. Got a plan?",
              standard: "We need to ventilate the building and find the source. Could take an hour or two. We'll test the air quality before letting anyone back in. If levels are still high, you'll need to stay elsewhere tonight. Do you have somewhere to go?",
              formal: "Our procedure requires thorough ventilation of the building and identification of the leak source, which may require one to two hours. Air quality testing will be conducted prior to authorizing re-entry. Should gas concentrations remain elevated, overnight occupancy will not be permitted. Do you have alternative accommodations available?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "煤气泄漏进阶应对",
        titleEn: "Intermediate Gas Leak Response",
        description: "与消防员详细沟通、了解泄漏原因、处理后续问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "The firefighters checked and said the leak is coming from my stove connection. They shut off the gas valve. What do I need to do to get it fixed?",
            textZh: "消防员检查后说泄漏来自我的灶台连接处。他们关了煤气阀门。我需要怎么修？",
            commonMistake: {
              wrong: "The leak is from my stove connection. They closed the gas.",
              correct: "The leak is coming from my stove connection. They shut off the gas valve.",
              explanation: "shut off 是关闭阀门的标准说法，不是 close；gas valve 是煤气阀门。",
            },
            culturalNote: "在美国，只有持证的水暖工（licensed plumber）或燃气技师可以修理燃气管道。自行修理是违法的且非常危险。",
            casualVersion: "Firefighters said leak's from my stove connection. Shut off the gas valve. What now?",
            formalityVariants: {
              casual: "They said it's the stove connection. Gas valve's off. What do I do now?",
              standard: "The firefighters checked and said the leak is coming from my stove connection. They shut off the gas valve. What do I need to do to get it fixed?",
              formal: "The fire department has determined that the gas leak originated from the stove connection, and they have shut off the gas valve. Could you advise on the necessary steps to arrange proper repair?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "You'll need to call a licensed plumber or your gas company to fix the connection. Don't turn the gas back on yourself — that's illegal and dangerous. The gas company can usually come out same-day for leak repairs.",
            textZh: "你需要找持证水暖工或者燃气公司来修理连接处。不要自己开煤气——那是违法的而且很危险。燃气公司通常可以当天来修泄漏。",
            keyPhrases: [
              { en: "licensed plumber", zh: "持证水暖工" },
              { en: "same-day", zh: "当天" },
            ],
            alternativeExpressions: [
              {
                textEn: "Contact your gas utility or a certified technician. Never turn the gas on yourself — only a professional should do that. Most gas companies offer emergency same-day service.",
                textZh: "联系你的燃气公司或持证技师。绝对不要自己开煤气——只有专业人员才能做。大多数燃气公司提供当天紧急服务。",
                actionHint: "gas utility 就是燃气公用事业公司",
                frequency: "common",
              },
            ],
            casualVersion: "Call a licensed plumber or the gas company. Don't turn the gas on yourself — it's illegal. Gas company can usually come out the same day.",
            formalityVariants: {
              casual: "Get a licensed plumber or call the gas company. Don't touch the valve yourself. They usually do same-day for leaks.",
              standard: "You'll need to call a licensed plumber or your gas company to fix the connection. Don't turn the gas back on yourself — that's illegal and dangerous. The gas company can usually come out same-day for leak repairs.",
              formal: "You will need to engage a licensed plumbing professional or contact your gas utility provider to repair the connection. Please do not attempt to restore the gas supply independently, as this is both a legal violation and a safety hazard. Most gas utility companies provide same-day dispatch for leak-related repairs.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm renting this apartment. Should my landlord be responsible for the repair cost? And should I report this to anyone besides the gas company?",
            textZh: "我是租的这套公寓。房东应该承担维修费用吗？除了燃气公司我还需要向谁报告？",
            commonMistake: {
              wrong: "I am renting this house. Should the house owner pay for repair?",
              correct: "I'm renting this apartment. Should my landlord be responsible for the repair cost?",
              explanation: "landlord 是房东的标准词；be responsible for 比 pay for 更正式；apartment 比 house 在这里更准确。",
            },
            culturalNote: "在美国大多数州，燃气管道维修属于房东责任。租客应该书面通知房东，并保留所有记录以备维权。",
            casualVersion: "I'm renting. Should my landlord pay for the fix? Do I need to report this to anyone else?",
            formalityVariants: {
              casual: "I rent. Landlord's problem right? Who else should I tell?",
              standard: "I'm renting this apartment. Should my landlord be responsible for the repair cost? And should I report this to anyone besides the gas company?",
              formal: "As a tenant of this apartment, I would like to clarify whether the repair costs fall under my landlord's responsibility. Additionally, are there any other parties or authorities I should notify regarding this incident beyond the gas utility provider?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "Yes, in most states the landlord is responsible for gas line repairs. Document everything — take photos, save our incident report number, and notify your landlord in writing. You may also want to contact your renter's insurance.",
            textZh: "是的，大多数州房东负责燃气管道维修。记录一切——拍照、保存我们的事故报告编号，并书面通知你的房东。你可能还需要联系你的租客保险。",
            keyPhrases: [
              { en: "incident report number", zh: "事故报告编号" },
              { en: "renter's insurance", zh: "租客保险" },
            ],
            alternativeExpressions: [
              {
                textEn: "Landlord's responsibility in most places. Take pictures of everything, keep our report number, and send your landlord a written notice. If you have renter's insurance, file a claim for any damages or temporary housing costs.",
                textZh: "大多数地方是房东的责任。所有东西都拍照，保留我们的报告编号，给房东发书面通知。如果有租客保险，可以申请理赔损失或临时住房费用。",
                actionHint: "file a claim 就是提出索赔申请",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, landlord's on the hook for gas repairs. Document everything — photos, our report number, written notice to the landlord. Call your renter's insurance too.",
            formalityVariants: {
              casual: "Landlord's gotta cover gas repairs. Photos, report number, written notice. Call renter's insurance.",
              standard: "Yes, in most states the landlord is responsible for gas line repairs. Document everything — take photos, save our incident report number, and notify your landlord in writing. You may also want to contact your renter's insurance.",
              formal: "In the majority of jurisdictions, gas line maintenance and repair fall within the landlord's legal obligations. I recommend thorough documentation: photograph the affected area, retain our incident report reference number, and provide written notification to your landlord. It would also be prudent to contact your renter's insurance provider regarding potential coverage.",
            },
          },
          {
            speaker: "you",
            textEn: "How can I prevent this from happening again? Is there a gas detector I should install, like a smoke detector but for gas?",
            textZh: "怎样防止再次发生？有没有像烟雾探测器一样的煤气探测器可以装？",
            commonMistake: {
              wrong: "How to prevent this happen again? Is there gas alarm like smoke alarm?",
              correct: "How can I prevent this from happening again? Is there a gas detector I should install?",
              explanation: "prevent...from happening 是固定结构；detector 比 alarm 更准确形容探测设备。",
            },
            culturalNote: "美国法律要求住宅安装烟雾探测器和一氧化碳探测器。天然气探测器不是法定要求但强烈建议安装。",
            casualVersion: "How do I keep this from happening again? Is there like a gas detector I can put up?",
            formalityVariants: {
              casual: "How do I stop this from happening again? Gas detector or something?",
              standard: "How can I prevent this from happening again? Is there a gas detector I should install, like a smoke detector but for gas?",
              formal: "What preventive measures would you recommend to avoid a recurrence? Is there a natural gas detection device that I should consider installing, analogous to a smoke detector?",
            },
          },
          {
            speaker: "them",
            role: "消防员",
            textEn: "Great question. Get a natural gas detector and a carbon monoxide detector — they're different things. Place the gas detector near the floor since natural gas is heavier than air. Test them monthly, just like your smoke detectors. About twenty bucks each at any hardware store.",
            textZh: "好问题。买一个天然气探测器和一个一氧化碳探测器——它们是不同的东西。把煤气探测器放在靠近地面的地方，因为天然气比空气重。每月测试一次，就像烟雾探测器一样。在任何五金店大约各二十美元。",
            keyPhrases: [
              { en: "carbon monoxide detector", zh: "一氧化碳探测器" },
              { en: "heavier than air", zh: "比空气重" },
            ],
            alternativeExpressions: [
              {
                textEn: "Pick up both a gas detector and a CO detector — people mix them up but they're separate. Gas detector goes low near the ground. Check 'em every month. You can grab both at Home Depot for about forty bucks total.",
                textZh: "买一个煤气探测器和一个CO探测器——人们经常搞混但它们是不同的。煤气探测器放低处靠近地面。每月检查。在Home Depot两个加起来大约四十美元。",
                actionHint: "CO detector 就是一氧化碳探测器的简称",
                frequency: "common",
              },
            ],
            casualVersion: "Get a gas detector and a CO detector — two different things. Gas detector goes near the floor 'cause gas is heavy. Test 'em monthly. About twenty bucks each at any hardware store.",
            formalityVariants: {
              casual: "Grab a gas detector and CO detector. Different things. Gas one goes near the floor. Test monthly. Twenty bucks each at the hardware store.",
              standard: "Great question. Get a natural gas detector and a carbon monoxide detector — they're different things. Place the gas detector near the floor since natural gas is heavier than air. Test them monthly, just like your smoke detectors. About twenty bucks each at any hardware store.",
              formal: "Excellent question. I recommend acquiring both a natural gas detector and a carbon monoxide detector, as these serve distinct functions. The natural gas detector should be positioned near floor level, as natural gas has a higher density than ambient air. Monthly testing is recommended, consistent with smoke detector maintenance protocols. Both devices are available at standard hardware retailers for approximately twenty dollars each.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 31. 电梯被困 ====================
  {
    id: "emergency-elevator-stuck",
    category: "emergency",
    titleZh: "电梯被困",
    titleEn: "Stuck in Elevator",
    description: "被困在电梯里，通过对讲机或手机向外界求助",
    otherRole: "大楼保安",
    otherRoleIcon: "👮",
    flows: [
      {
        id: "basic",
        titleZh: "电梯被困基本求助",
        titleEn: "Basic Elevator Emergency",
        description: "通过紧急按钮联系大楼人员、等待救援",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hello? Can anyone hear me? I'm stuck in the elevator! It stopped between floors and the doors won't open.",
            textZh: "喂？有人能听到吗？我被困在电梯里了！电梯停在两层之间，门打不开。",
            commonMistake: {
              wrong: "Hello? I am stuck in the lift! It stopped and the door cannot open.",
              correct: "Hello? I'm stuck in the elevator! It stopped between floors and the doors won't open.",
              explanation: "美式英语用 elevator 不用 lift；doors（复数，电梯有内外两道门）；won't 比 cannot 更自然。",
            },
            culturalNote: "美国电梯里通常有紧急电话按钮或对讲机，按下后会直接连接到大楼管理处或电梯维修公司。保持冷静很重要。",
            casualVersion: "Hello? Anyone there? I'm stuck in the elevator! Stopped between floors, doors won't budge.",
            formalityVariants: {
              casual: "Hey! Stuck in the elevator! Between floors, doors won't open!",
              standard: "Hello? Can anyone hear me? I'm stuck in the elevator! It stopped between floors and the doors won't open.",
              formal: "Hello, can anyone hear me? I appear to be trapped in the elevator. It has come to a stop between floors and the doors are not responding.",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "I can hear you. This is building security. Which elevator are you in — the one on the left or the right when you face them from the lobby?",
            textZh: "我能听到你。这里是大楼保安。你在哪部电梯里——从大堂面对电梯的话是左边还是右边的？",
            keyPhrases: [
              { en: "building security", zh: "大楼保安" },
              { en: "which elevator", zh: "哪部电梯" },
            ],
            alternativeExpressions: [
              {
                textEn: "I hear you, this is security. Do you know which elevator you're in? There should be a number or letter on the panel inside.",
                textZh: "我听到了，这是保安。你知道你在哪部电梯里吗？面板上应该有编号或字母。",
                actionHint: "panel 就是电梯里的按钮面板",
                frequency: "common",
              },
            ],
            casualVersion: "I hear you. Building security here. Which elevator? Left or right from the lobby?",
            formalityVariants: {
              casual: "Hear you. Security here. Which elevator — left or right?",
              standard: "I can hear you. This is building security. Which elevator are you in — the one on the left or the right when you face them from the lobby?",
              formal: "I can hear you clearly. This is building security speaking. Could you identify which elevator you are in? When facing the elevator bank from the lobby, is it the unit on the left or the right side?",
            },
          },
          {
            speaker: "you",
            textEn: "I think it's the one on the right. I was going up to the tenth floor. There's a sign inside that says elevator B. How long will it take to get me out?",
            textZh: "我觉得是右边那部。我要去十楼。里面有个牌子写着电梯B。多久能把我弄出来？",
            commonMistake: {
              wrong: "I think it is right one. I was going to tenth floor. How long time to get me out?",
              correct: "I think it's the one on the right. I was going up to the tenth floor. How long will it take to get me out?",
              explanation: "the one on the right 不是 right one；需要 up to 表示上楼；How long will it take 是标准句型。",
            },
            culturalNote: "被困电梯时不要试图自行扒开门或从顶部逃出，这是最危险的行为。等待专业人员是最安全的。",
            casualVersion: "Think it's the right one. Was heading to the tenth floor. Sign says elevator B. How long to get me out?",
            formalityVariants: {
              casual: "Right side I think. Going to ten. Sign says elevator B. How long?",
              standard: "I think it's the one on the right. I was going up to the tenth floor. There's a sign inside that says elevator B. How long will it take to get me out?",
              formal: "I believe it is the elevator on the right side, designated as Elevator B according to the interior signage. I was ascending to the tenth floor. Could you estimate how long the extraction process will take?",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "Got it — Elevator B. I've called the elevator repair company and they're sending a technician. Should be about twenty to thirty minutes. Are you okay in there? Do you have any medical conditions I should know about?",
            textZh: "明白了——电梯B。我已经打电话给电梯维修公司了，他们正在派技术人员来。大约二十到三十分钟。你在里面还好吗？你有什么我需要知道的健康状况吗？",
            keyPhrases: [
              { en: "elevator repair company", zh: "电梯维修公司" },
              { en: "medical conditions", zh: "健康状况/病史" },
            ],
            alternativeExpressions: [
              {
                textEn: "Elevator B, copy. Tech's on the way, should be here in twenty to thirty. How are you holding up? Any health issues — claustrophobia, heart problems, anything like that?",
                textZh: "电梯B，收到。技术员在路上了，大约二十到三十分钟。你还撑得住吗？有什么健康问题——幽闭恐惧症、心脏问题之类的？",
                actionHint: "how are you holding up 就是你还撑得住吗/你还好吗",
                frequency: "common",
              },
            ],
            casualVersion: "Elevator B, got it. Called the repair guys — tech should be here in twenty to thirty. You okay? Any health stuff I should know about?",
            formalityVariants: {
              casual: "Elevator B. Repair crew's coming, twenty to thirty minutes. You alright? Any health issues?",
              standard: "Got it — Elevator B. I've called the elevator repair company and they're sending a technician. Should be about twenty to thirty minutes. Are you okay in there? Do you have any medical conditions I should know about?",
              formal: "Understood, Elevator B. I have contacted the elevator maintenance company and a certified technician has been dispatched. The estimated arrival time is approximately twenty to thirty minutes. Are you currently in stable condition? Do you have any pre-existing medical conditions that I should be aware of?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm okay for now, just a little anxious. It's getting warm in here though. Is there any way to get some air circulating? And my phone battery is at fifteen percent.",
            textZh: "我现在还好，就是有点焦虑。不过里面越来越热了。有办法让空气流通吗？我手机电量只有百分之十五了。",
            commonMistake: {
              wrong: "I am okay but anxious. It is becoming hot. Is there way to make air flow?",
              correct: "I'm okay, just a little anxious. It's getting warm. Is there any way to get some air circulating?",
              explanation: "get air circulating 比 make air flow 更自然；a little anxious 比 anxious 语气更轻。",
            },
            culturalNote: "电梯被困时保持冷静非常重要。电梯不是密封的，不会缺氧，但温度可能上升。保持沟通可以缓解焦虑。",
            casualVersion: "I'm alright, kinda anxious though. Getting warm in here. Any way to get some air? Phone's at fifteen percent.",
            formalityVariants: {
              casual: "Fine, just nervous. Getting hot. Can you get some air in here? Phone's almost dead.",
              standard: "I'm okay for now, just a little anxious. It's getting warm in here though. Is there any way to get some air circulating? And my phone battery is at fifteen percent.",
              formal: "I am managing adequately at present, though I am experiencing some anxiety. The temperature inside the cabin appears to be rising. Is there any mechanism to improve air circulation? I should also note that my phone battery has depleted to approximately fifteen percent.",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "The elevator has ventilation — you won't run out of air. Try to stay calm and conserve your phone battery. I'll stay on the intercom with you the whole time. The technician just checked in — he's about ten minutes away now.",
            textZh: "电梯有通风——你不会缺氧的。尽量保持冷静，省着用手机电量。我会一直通过对讲机陪着你。技术员刚联系了——大约还有十分钟到。",
            keyPhrases: [
              { en: "ventilation", zh: "通风" },
              { en: "conserve your phone battery", zh: "省着用手机电量" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's built-in ventilation, so you'll be fine on air. Save your phone battery — turn off unnecessary apps. I'm not going anywhere, I'll be right here on the intercom. Repair guy's about ten minutes out.",
                textZh: "有内置通风，所以空气没问题。省手机电——关掉不必要的app。我哪儿也不去，会一直在对讲机这头。修理工大约十分钟到。",
                actionHint: "I'm not going anywhere 表示我会一直在这里",
                frequency: "common",
              },
            ],
            casualVersion: "Elevator's got ventilation, you won't run out of air. Save your phone battery. I'm staying on the intercom with you. Tech's ten minutes out.",
            formalityVariants: {
              casual: "Got ventilation, won't run out of air. Save your phone. I'll stay on the intercom. Tech's ten minutes away.",
              standard: "The elevator has ventilation — you won't run out of air. Try to stay calm and conserve your phone battery. I'll stay on the intercom with you the whole time. The technician just checked in — he's about ten minutes away now.",
              formal: "Please be assured that the elevator cabin is equipped with a ventilation system, so there is no risk of oxygen depletion. I recommend remaining calm and conserving your mobile phone battery. I will maintain continuous communication with you via the intercom system. The technician has confirmed he is approximately ten minutes from arrival.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "电梯被困进阶应对",
        titleEn: "Intermediate Elevator Emergency",
        description: "多人被困、有人恐慌、需要协调沟通",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "There are four of us stuck in here and one woman is starting to hyperventilate. She says she has claustrophobia. Can you talk us through how to help her calm down?",
            textZh: "我们四个人被困在这里，有一位女士开始呼吸急促。她说她有幽闭恐惧症。你能告诉我们怎么帮她冷静下来吗？",
            commonMistake: {
              wrong: "One woman is breathing very fast. She has close space fear.",
              correct: "One woman is starting to hyperventilate. She has claustrophobia.",
              explanation: "hyperventilate 是过度换气/呼吸急促的医学术语；claustrophobia 是幽闭恐惧症。",
            },
            culturalNote: "幽闭恐惧症（claustrophobia）在美国是被广泛认知的心理状况。不要说对方小题大做，要认真对待并帮助。",
            casualVersion: "Four of us in here and one lady's hyperventilating. Says she's claustrophobic. How do we help her?",
            formalityVariants: {
              casual: "Four of us stuck. One lady's freaking out, claustrophobic. How do we calm her down?",
              standard: "There are four of us stuck in here and one woman is starting to hyperventilate. She says she has claustrophobia. Can you talk us through how to help her calm down?",
              formal: "There are four individuals trapped in this elevator, and one woman appears to be hyperventilating due to claustrophobia. Could you please guide us through the appropriate steps to assist her in regaining composure?",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "Have her sit down on the floor and breathe with her — in through the nose for four counts, hold for four, out through the mouth for four. Give her space if possible. Talk to her calmly and remind her help is on the way.",
            textZh: "让她坐到地上，跟她一起呼吸——用鼻子吸气数四下，憋住四下，用嘴呼气四下。如果可以的话给她一些空间。平静地跟她说话，提醒她救援在路上了。",
            keyPhrases: [
              { en: "breathe with her", zh: "跟她一起呼吸" },
              { en: "in through the nose", zh: "用鼻子吸气" },
            ],
            alternativeExpressions: [
              {
                textEn: "Get her seated. Do box breathing together — four seconds in, four hold, four out. Everyone else back up and give her room. Keep talking to her, keep her focused on your voice.",
                textZh: "让她坐下。一起做方块呼吸——吸四秒，憋四秒，呼四秒。其他人退后给她空间。一直跟她说话，让她集中注意力在你的声音上。",
                actionHint: "box breathing 是一种4-4-4-4节奏的冷静呼吸法",
                frequency: "common",
              },
            ],
            casualVersion: "Sit her down. Breathe with her — nose in four counts, hold four, mouth out four. Give her space. Talk calm, tell her help's coming.",
            formalityVariants: {
              casual: "Get her on the floor. Breathe together — four in, four hold, four out. Give her room. Talk calmly.",
              standard: "Have her sit down on the floor and breathe with her — in through the nose for four counts, hold for four, out through the mouth for four. Give her space if possible. Talk to her calmly and remind her help is on the way.",
              formal: "Please assist her into a seated position on the floor. Guide her through a controlled breathing exercise: inhale through the nasal passage for a count of four, maintain the breath for four counts, then exhale through the mouth for four counts. If space permits, provide her with adequate personal space. Maintain calm verbal communication and reassure her that assistance is en route.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, she's sitting down now and trying the breathing. One more problem — there's a delivery guy in here with a cart full of food and it's making the elevator smell really strong. Is there any way to speed this up?",
            textZh: "好的，她已经坐下来在试着做呼吸了。还有个问题——里面有个送货的推着一车食物，电梯里的味道非常重。有没有办法加快速度？",
            commonMistake: {
              wrong: "There is a delivery man with food car and the smell is very big.",
              correct: "There's a delivery guy with a cart full of food and it's making the elevator smell really strong.",
              explanation: "delivery guy 比 delivery man 更口语化；cart 是推车不是 car；smell strong 不是 smell big。",
            },
            culturalNote: "在美国，被困电梯时保持礼貌沟通很重要。即使情况不舒服，也要尊重其他被困者。",
            casualVersion: "She's sitting, trying the breathing. But there's a delivery dude with a food cart in here and it stinks. Can you speed things up?",
            formalityVariants: {
              casual: "She's trying the breathing. Also there's a delivery guy with food in here, smells super strong. Can you hurry this up?",
              standard: "Okay, she's sitting down now and trying the breathing. One more problem — there's a delivery guy in here with a cart full of food and it's making the elevator smell really strong. Is there any way to speed this up?",
              formal: "She has been seated and is attempting the breathing exercise. However, there is an additional complicating factor: a delivery person is present with a cart of food items, which is producing a strong odor within the confined space. Is there any possibility of expediting the rescue process?",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "I understand it's uncomfortable in there. The tech is in the building now working on the mechanical room. I'm told it should be less than ten minutes. Hang in there — you're almost out.",
            textZh: "我理解你们很不舒服。技术员已经在楼里了，正在机械室工作。据说不到十分钟了。再坚持一下——马上就出来了。",
            keyPhrases: [
              { en: "mechanical room", zh: "机械室/电梯机房" },
              { en: "hang in there", zh: "再坚持一下" },
            ],
            alternativeExpressions: [
              {
                textEn: "I know it's rough. Good news — the tech just arrived and is working on it from the machine room. Should be under ten minutes. Almost there, guys.",
                textZh: "我知道很难熬。好消息——技术员刚到了，正在机房操作。应该不到十分钟。快了，各位。",
                actionHint: "almost there 就是快到了/快完了",
                frequency: "common",
              },
            ],
            casualVersion: "I know, not fun in there. Tech's in the building, working on it in the mechanical room. Under ten minutes. Hang tight.",
            formalityVariants: {
              casual: "Know it sucks. Tech's here, working on it. Under ten. Hang tight.",
              standard: "I understand it's uncomfortable in there. The tech is in the building now working on the mechanical room. I'm told it should be less than ten minutes. Hang in there — you're almost out.",
              formal: "I appreciate your patience and understand the discomfort you are experiencing. The certified technician has arrived on-site and is currently working from the mechanical room. I am informed that the estimated resolution time is under ten minutes. Please continue to remain calm — your release is imminent.",
            },
          },
          {
            speaker: "you",
            textEn: "It's moving again! The doors just opened. Everyone is getting out. Is it safe to use this elevator now, or should we take a different one?",
            textZh: "动了！门刚打开了。所有人都在出来。这部电梯现在能安全使用吗，还是应该换一部？",
            commonMistake: {
              wrong: "The elevator is moving! The door opened. Can we use this elevator safely now?",
              correct: "It's moving again! The doors just opened. Is it safe to use this elevator now?",
              explanation: "doors 用复数；Is it safe to use 是更自然的问法。",
            },
            culturalNote: "电梯故障修复后通常需要专业检查才能确认安全。不要急着重新使用刚故障过的电梯。",
            casualVersion: "It's moving! Doors opened, everyone's getting out. Can we use this elevator or should we take a different one?",
            formalityVariants: {
              casual: "Moving! Doors open, everyone's out. Safe to use or take a different one?",
              standard: "It's moving again! The doors just opened. Everyone is getting out. Is it safe to use this elevator now, or should we take a different one?",
              formal: "The elevator has resumed operation and the doors have opened. All occupants are exiting. Is this elevator now certified as safe for use, or would you recommend utilizing an alternative unit?",
            },
          },
          {
            speaker: "them",
            role: "大楼保安",
            textEn: "Glad you're all out safe. We're going to take Elevator B out of service for a full inspection. Please use Elevator A for now. If you'd like to file an incident report, stop by the security desk in the lobby. Is there anything else you need?",
            textZh: "很高兴你们都安全出来了。我们会把电梯B停用进行全面检查。现在请使用电梯A。如果你想填写事故报告，请到大堂的保安台。还需要什么吗？",
            keyPhrases: [
              { en: "take out of service", zh: "停用" },
              { en: "file an incident report", zh: "填写事故报告" },
            ],
            alternativeExpressions: [
              {
                textEn: "Everyone okay? We're shutting down Elevator B for a full check. Use Elevator A for now. Come by the security desk if you want to fill out a report. Need anything?",
                textZh: "大家都没事吧？我们要关闭电梯B做全面检查。暂时用电梯A。如果要填报告可以来保安台。还需要什么？",
                actionHint: "shutting down 就是关闭/停运",
                frequency: "common",
              },
            ],
            casualVersion: "Glad you're out. Elevator B's going out of service for inspection. Use Elevator A. Wanna file a report, come to the security desk. Need anything else?",
            formalityVariants: {
              casual: "Good, everyone's out. Elevator B's shut down for now. Use A. Want to file a report, hit up the security desk. Anything else?",
              standard: "Glad you're all out safe. We're going to take Elevator B out of service for a full inspection. Please use Elevator A for now. If you'd like to file an incident report, stop by the security desk in the lobby. Is there anything else you need?",
              formal: "I am relieved that all occupants have been safely evacuated. Elevator B will be taken out of service immediately for a comprehensive inspection. In the interim, please utilize Elevator A. Should you wish to file a formal incident report, our security desk in the lobby is at your service. Is there any additional assistance I can provide?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 32. 绑架威胁/安全求助 ====================
  {
    id: "emergency-kidnapping-threat",
    category: "emergency",
    titleZh: "绑架威胁/安全求助",
    titleEn: "Kidnapping Threat / Safety Emergency",
    description: "感到人身安全受到威胁时，向路人或警察隐蔽求助",
    otherRole: "警察",
    otherRoleIcon: "👮",
    flows: [
      {
        id: "basic",
        titleZh: "安全威胁基本求助",
        titleEn: "Basic Safety Emergency",
        description: "感到被跟踪或控制时，向警察或路人求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Officer, I need help. Someone is following me and I don't feel safe. They've been behind me for the last three blocks.",
            textZh: "警官，我需要帮助。有人在跟踪我，我感觉不安全。他们已经跟了我三个街区了。",
            commonMistake: {
              wrong: "Police, someone follows me. I am not safe. They follow me three blocks.",
              correct: "Officer, I need help. Someone is following me. They've been behind me for the last three blocks.",
              explanation: "称呼警察用 Officer 更礼貌；is following 表示正在进行；have been...for 表示持续了多久。",
            },
            culturalNote: "在美国，如果感到被跟踪，走到最近的公共场所（商店、餐厅、警察局）并大声说出你需要帮助。不要回家，以免暴露住址。",
            casualVersion: "Officer, help — someone's following me. Don't feel safe. They've been on me for three blocks.",
            formalityVariants: {
              casual: "Officer, someone's tailing me. Three blocks now. I don't feel safe.",
              standard: "Officer, I need help. Someone is following me and I don't feel safe. They've been behind me for the last three blocks.",
              formal: "Excuse me, Officer. I require assistance. An individual appears to be following me and I feel my personal safety is at risk. They have been trailing me for approximately three city blocks.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "You did the right thing coming to me. Can you point out who it is without being obvious? Don't turn around — describe them to me. What do they look like?",
            textZh: "你来找我做得对。你能不要太明显地指出是谁吗？不要回头——跟我描述一下。他们长什么样？",
            keyPhrases: [
              { en: "without being obvious", zh: "不要太明显" },
              { en: "describe them to me", zh: "跟我描述一下" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good call approaching me. Don't look back. Just tell me what they look like — height, clothing, anything you noticed. I'll take a casual look.",
                textZh: "找我是对的。不要回头看。告诉我他们长什么样——身高、穿着，你注意到的任何东西。我随意看一下。",
                actionHint: "take a casual look 就是装作不经意地看一眼",
                frequency: "common",
              },
            ],
            casualVersion: "Good that you came to me. Don't turn around. What do they look like? Describe 'em without being obvious.",
            formalityVariants: {
              casual: "Smart move. Don't look back. What do they look like?",
              standard: "You did the right thing coming to me. Can you point out who it is without being obvious? Don't turn around — describe them to me. What do they look like?",
              formal: "You made the correct decision in approaching me. Without making it apparent, could you identify the individual in question? Please refrain from turning around. Instead, provide me with a physical description — their appearance, attire, and any distinguishing features.",
            },
          },
          {
            speaker: "you",
            textEn: "It's a man in a dark hoodie, about six feet tall. He's across the street now, pretending to look at his phone. He keeps stopping when I stop.",
            textZh: "是一个穿深色连帽衫的男人，大约六英尺高。他现在在马路对面，假装在看手机。我一停他也停。",
            commonMistake: {
              wrong: "He is a man wearing dark hat clothes, about 180 centimeters. He pretends to see phone.",
              correct: "It's a man in a dark hoodie, about six feet tall. He's pretending to look at his phone.",
              explanation: "hoodie 是连帽衫；美国用英尺不用厘米；look at 比 see 更合适；pretending 用进行时。",
            },
            culturalNote: "美国人描述身高通常用英尺和英寸（如 six feet, five-ten），不用厘米。报警时要记住嫌疑人的衣着和体型特征。",
            casualVersion: "Guy in a dark hoodie, like six feet. He's across the street acting like he's on his phone. Stops every time I stop.",
            formalityVariants: {
              casual: "Dark hoodie, about six feet. Across the street, on his phone. Stops when I stop.",
              standard: "It's a man in a dark hoodie, about six feet tall. He's across the street now, pretending to look at his phone. He keeps stopping when I stop.",
              formal: "The individual is male, approximately six feet in height, wearing a dark-colored hooded sweatshirt. He is currently positioned across the street and appears to be feigning interest in his mobile phone. I have observed that he ceases walking whenever I do.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "I see him. Stay right here with me. I'm going to call for backup and then approach him. Do you recognize him at all? Has anything like this happened before?",
            textZh: "我看到他了。你留在我身边。我要叫增援然后过去找他。你认识他吗？以前发生过类似的事吗？",
            keyPhrases: [
              { en: "call for backup", zh: "叫增援" },
              { en: "approach him", zh: "过去找他/接近他" },
            ],
            alternativeExpressions: [
              {
                textEn: "I've got eyes on him. Don't move from this spot. I'm radioing for another officer, then I'll go talk to him. Have you ever seen this person before?",
                textZh: "我盯住他了。你别离开这里。我用对讲机叫另一个警察来，然后我去和他谈。你以前见过这个人吗？",
                actionHint: "got eyes on him 就是已经看到他/在监视他",
                frequency: "common",
              },
            ],
            casualVersion: "I see him. Stay with me. Calling backup, then I'll go talk to him. Know him? This happened before?",
            formalityVariants: {
              casual: "See him. Stay here. Calling backup. Know the guy? Happened before?",
              standard: "I see him. Stay right here with me. I'm going to call for backup and then approach him. Do you recognize him at all? Has anything like this happened before?",
              formal: "I have visual confirmation of the individual. Please remain in my immediate vicinity. I will request additional units and then proceed to make contact with the subject. Do you have any prior recognition of this person? Has a similar incident occurred previously?",
            },
          },
          {
            speaker: "you",
            textEn: "No, I've never seen him before. I'm traveling here alone and I'm staying at a hotel nearby. I'm worried he might know where I'm staying.",
            textZh: "不，我从没见过他。我一个人在这里旅行，住在附近的酒店。我担心他可能知道我住哪。",
            commonMistake: {
              wrong: "I never see him before. I travel here alone. I worry he knows my hotel.",
              correct: "I've never seen him before. I'm traveling here alone. I'm worried he might know where I'm staying.",
              explanation: "have never seen 是现在完成时；I'm traveling 进行时表示当前状态；might know 表示可能性。",
            },
            culturalNote: "独自旅行时遇到跟踪，不要直接回酒店。去一个公共场所或者警察局，确认安全后再返回住处。",
            casualVersion: "Never seen him. I'm here alone, staying at a hotel nearby. Worried he might know where I'm staying.",
            formalityVariants: {
              casual: "No idea who he is. Traveling solo, hotel's nearby. Scared he knows where I'm staying.",
              standard: "No, I've never seen him before. I'm traveling here alone and I'm staying at a hotel nearby. I'm worried he might know where I'm staying.",
              formal: "No, I have no prior acquaintance with this individual. I am traveling alone in this area and am accommodated at a hotel in the vicinity. I have concerns that this person may be aware of my lodging location.",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "My partner is going to talk to him now. I'll walk you back to your hotel myself and make sure no one follows. Here's my card — if you see him again, call me directly. And call 911 right away if you ever feel unsafe.",
            textZh: "我的搭档现在去和他谈。我亲自送你回酒店，确保没人跟踪。这是我的名片——如果你再看到他，直接打给我。任何时候感到不安全就立刻打911。",
            keyPhrases: [
              { en: "walk you back", zh: "送你回去" },
              { en: "call me directly", zh: "直接打给我" },
            ],
            alternativeExpressions: [
              {
                textEn: "My partner's handling him now. I'll escort you to your hotel — nobody's following you on my watch. Take my card. See him again? Call me. Feel unsafe? 911, no hesitation.",
                textZh: "我搭档在处理他了。我护送你回酒店——有我在没人能跟着你。拿着我的名片。再看到他？打我电话。觉得不安全？直接打911，不要犹豫。",
                actionHint: "on my watch 就是在我看管/保护下",
                frequency: "common",
              },
            ],
            casualVersion: "Partner's on him. I'll walk you to your hotel, make sure you're safe. Here's my card — see him again, call me. Feel unsafe anytime, call 911.",
            formalityVariants: {
              casual: "Partner's got him. I'll walk you back, make sure nobody follows. My card. See him again, call me. Unsafe? 911.",
              standard: "My partner is going to talk to him now. I'll walk you back to your hotel myself and make sure no one follows. Here's my card — if you see him again, call me directly. And call 911 right away if you ever feel unsafe.",
              formal: "My partner will now initiate contact with the individual. I will personally escort you to your hotel and ensure that no one follows. Please accept my business card. Should you observe this person again, contact me directly at the number provided. Furthermore, please do not hesitate to call 911 immediately whenever you perceive a threat to your safety.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "安全威胁进阶应对",
        titleEn: "Intermediate Safety Emergency",
        description: "在受控制的情况下隐蔽求助、使用暗号",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, can I use your bathroom? Actually... I need to tell you something. There's a man outside waiting for me and I don't want to go with him. I think I'm in danger.",
            textZh: "你好，我能用一下洗手间吗？其实...我有件事要告诉你。外面有个男人在等我，我不想跟他走。我觉得我有危险。",
            commonMistake: {
              wrong: "Can I use toilet? Actually there is a man outside and I am in dangerous.",
              correct: "Can I use your bathroom? There's a man outside waiting for me. I think I'm in danger.",
              explanation: "美式英语用 bathroom 不用 toilet（更直接）；in danger 不是 in dangerous。",
            },
            culturalNote: "美国很多餐厅和酒吧有暗号求助系统。比如点一杯 angel shot 表示需要帮助。如果没有暗号，可以直接告诉服务员你感到不安全。",
            casualVersion: "Hey, can I use the bathroom? Actually... I need to tell you something. There's a guy outside and I don't wanna go with him. I think I'm in danger.",
            formalityVariants: {
              casual: "Can I use the restroom? Actually... the guy outside? I don't wanna go with him. I think I'm in danger.",
              standard: "Hi, can I use your bathroom? Actually... I need to tell you something. There's a man outside waiting for me and I don't want to go with him. I think I'm in danger.",
              formal: "Good evening, might I use your restroom facilities? In truth, I need to confide something. There is a man outside who is waiting for me, and I do not wish to accompany him. I believe I may be in danger.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're safe in here. I'm not going to let anything happen to you. Can you tell me more? Is he someone you know? Should I call the police right now?",
            textZh: "你在这里是安全的。我不会让任何事发生在你身上。你能多说一些吗？他是你认识的人吗？我现在要报警吗？",
            keyPhrases: [
              { en: "you're safe in here", zh: "你在这里是安全的" },
              { en: "call the police", zh: "报警" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, you're okay now. Nothing's gonna happen to you here. Tell me what's going on. Do you know this guy? Want me to call 911?",
                textZh: "嘿，你现在没事了。在这里不会有事的。告诉我怎么了。你认识这个人吗？要我打911吗？",
                actionHint: "nothing's gonna happen to you 就是不会有事的",
                frequency: "common",
              },
            ],
            casualVersion: "You're safe here. Nothing's happening to you. Who is he? Want me to call the cops?",
            formalityVariants: {
              casual: "You're safe. Not letting anything happen. Who's the guy? Want me to call the cops?",
              standard: "You're safe in here. I'm not going to let anything happen to you. Can you tell me more? Is he someone you know? Should I call the police right now?",
              formal: "Please be assured that you are safe within this establishment. I will not allow any harm to come to you. Could you provide me with more details about the situation? Is this individual known to you? Shall I contact law enforcement immediately?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please call the police. He's someone I met online. He was supposed to be a tour guide but he took my passport and won't give it back. He's been controlling where I go all day.",
            textZh: "是的，请报警。他是我在网上认识的人。他本来应该是个导游但他拿了我的护照不还给我。他一整天都在控制我去哪。",
            commonMistake: {
              wrong: "He should be a tour guide but he took my passport and not give back. He controls where I go.",
              correct: "He was supposed to be a tour guide but he took my passport and won't give it back. He's been controlling where I go.",
              explanation: "was supposed to 表示本来应该是；won't give it back 表示拒绝归还；has been controlling 强调持续控制。",
            },
            culturalNote: "护照被扣是人口贩卖的常见手段。在美国，如果有人扣押你的护照并控制你的行动，这是联邦犯罪。任何人都可以帮你报警。",
            casualVersion: "Please, call the police. Met him online. Supposed to be my tour guide but he took my passport and won't give it back. He's been controlling everything I do all day.",
            formalityVariants: {
              casual: "Yeah, call the cops. Met him online, was supposed to be a guide. Took my passport, won't give it back. Controlling me all day.",
              standard: "Yes, please call the police. He's someone I met online. He was supposed to be a tour guide but he took my passport and won't give it back. He's been controlling where I go all day.",
              formal: "Yes, please contact law enforcement immediately. This individual is someone I connected with online. He presented himself as a tour guide, however he has confiscated my passport and refuses to return it. He has been exerting control over my movements throughout the entire day.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I'm calling 911 right now. That's extremely serious — taking someone's passport and controlling their movement is a crime. Stay away from the windows. Would you like some water? The police will be here very soon.",
            textZh: "我现在就打911。这非常严重——拿走别人的护照并控制行动是犯罪。离窗户远一点。要喝点水吗？警察很快就到。",
            keyPhrases: [
              { en: "controlling their movement is a crime", zh: "控制行动是犯罪" },
              { en: "stay away from the windows", zh: "离窗户远一点" },
            ],
            alternativeExpressions: [
              {
                textEn: "Calling 911 now. What he's doing is illegal — holding your passport, telling you where to go. Move to the back of the store. Cops'll be here fast. Can I get you anything?",
                textZh: "现在就打911。他做的是违法的——扣你的护照、告诉你去哪。到店后面去。警察会很快到。需要什么吗？",
                actionHint: "move to the back 就是到后面去",
                frequency: "common",
              },
            ],
            casualVersion: "Calling 911 now. That's dead serious — taking your passport and controlling you is a crime. Get away from the windows. Want water? Cops'll be here fast.",
            formalityVariants: {
              casual: "Calling 911. Super serious. Taking passports and controlling people is a crime. Away from windows. Want some water?",
              standard: "I'm calling 911 right now. That's extremely serious — taking someone's passport and controlling their movement is a crime. Stay away from the windows. Would you like some water? The police will be here very soon.",
              formal: "I am contacting 911 immediately. This situation is extremely grave. Confiscating an individual's passport and restricting their freedom of movement constitutes a criminal offense. Please position yourself away from any windows for safety. May I offer you some water? Law enforcement should arrive very shortly.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. I was so scared to ask for help. What will happen when the police get here? Will they help me get my passport back?",
            textZh: "非常感谢你。我之前很害怕求助。警察来了之后会怎样？他们会帮我拿回护照吗？",
            commonMistake: {
              wrong: "I was very scared to ask help. Will police help me take back passport?",
              correct: "I was so scared to ask for help. Will they help me get my passport back?",
              explanation: "ask for help 需要 for；get my passport back 是拿回的自然说法，不是 take back passport。",
            },
            culturalNote: "在美国向陌生人求助是被鼓励的行为。很多商店和酒吧的员工受过培训，知道如何帮助处于危险中的人。",
            casualVersion: "Thank you, thank you. Was so scared to ask. What happens when the police come? Can they get my passport back?",
            formalityVariants: {
              casual: "Thanks so much. Was terrified to ask. What happens with the cops? They'll get my passport back?",
              standard: "Thank you so much. I was so scared to ask for help. What will happen when the police get here? Will they help me get my passport back?",
              formal: "I cannot express my gratitude sufficiently. I was extremely apprehensive about seeking assistance. Could you explain what will transpire upon the arrival of the police? Will they be able to facilitate the recovery of my passport?",
            },
          },
          {
            speaker: "them",
            role: "警察",
            textEn: "Ma'am, I'm Officer Davis. You're safe now. We've detained the individual outside. We will recover your passport. You're the victim here — you've done nothing wrong. Can I take your statement? And do you have your country's embassy contact? They can issue a replacement passport if needed.",
            textZh: "女士，我是Davis警官。你现在安全了。我们已经拘留了外面那个人。我们会拿回你的护照。你是受害者——你没有做错任何事。我可以做一份笔录吗？你有你们国家大使馆的联系方式吗？如果需要的话他们可以签发替代护照。",
            keyPhrases: [
              { en: "detained the individual", zh: "拘留了那个人" },
              { en: "take your statement", zh: "做笔录" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're safe, ma'am. We've got the suspect in custody. We'll get your passport back. You didn't do anything wrong — you're a victim. I need to get your account of what happened. Also, do you have your embassy's number? They can help with documents.",
                textZh: "你安全了，女士。嫌疑人已经被拘留了。我们会拿回你的护照。你没有做错——你是受害者。我需要了解事情经过。你有大使馆的电话吗？他们可以帮处理证件。",
                actionHint: "in custody 就是被拘留",
                frequency: "common",
              },
            ],
            casualVersion: "You're safe now, ma'am. We got the guy. Getting your passport back. You did nothing wrong. Let me take your statement. Got your embassy's contact? They can help with passport replacement.",
            formalityVariants: {
              casual: "You're safe. Got the guy. Getting your passport. You did nothing wrong. Need your statement. Got embassy contact?",
              standard: "Ma'am, I'm Officer Davis. You're safe now. We've detained the individual outside. We will recover your passport. You're the victim here — you've done nothing wrong. Can I take your statement? And do you have your country's embassy contact? They can issue a replacement passport if needed.",
              formal: "Ma'am, I am Officer Davis of the local police department. You are now in a secure environment. The individual in question has been detained by my colleagues outside the premises. Your passport will be recovered. I want to assure you that you are the victim in this situation and bear no fault whatsoever. May I take a formal statement regarding the incident? Additionally, do you have contact information for your country's embassy or consulate? They are able to issue emergency travel documents should it become necessary.",
            },
          },
        ],
      },
    ],
  },
];
