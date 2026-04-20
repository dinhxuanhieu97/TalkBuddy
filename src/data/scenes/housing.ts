import type { PresetScene } from "../scene-types";

// ============================================================
// 租房住房场景 — Housing Scenes
// 覆盖：看房、签约、搬入搬出、报修、交租、室友、转租、水电网等
// ============================================================

export const HOUSING_SCENES: PresetScene[] = [
  // ==================== 1. 看公寓 ====================
  {
    id: "housing-apartment-tour",
    category: "housing",
    titleZh: "看公寓",
    titleEn: "Apartment Tour",
    description: "跟着经纪人看出租公寓，了解户型、设施、租金和周边环境",
    otherRole: "经纪人",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "apartment-tour-basic",
        titleZh: "基础看房",
        titleEn: "Basic Apartment Viewing",
        description: "第一次看公寓，了解基本信息和设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "经纪人",
            textEn: "Welcome! This is a one-bedroom apartment on the third floor. Let me show you around.",
            textZh: "欢迎！这是三楼的一居室公寓。我带你看看。",
            casualVersion: "Hey, welcome! So, this is a one-bed, third floor. C'mon, let me show ya.",
            formalityVariants: {
              casual: "Hey, welcome! This is the one-bed on the third floor. Let's go, I'll show you around.",
              standard: "Welcome! This is a one-bedroom apartment on the third floor. Let me show you around.",
              formal: "Welcome to the property. This is indeed a one-bedroom residence, located on the third level. I would be delighted to provide you with a comprehensive tour.",
            },
            keyPhrases: [
              { en: "one-bedroom", zh: "一居室" },
              { en: "show you around", zh: "带你看看" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, come on in! So this is the one-bed unit on the third floor. Let me give you the tour.",
                textZh: "嘿，进来吧！这就是三楼的一居室。我带你转转。",
                actionHint: "one-bed unit = 一居室单元",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks! How much is the monthly rent?",
            textZh: "谢谢！月租多少？",
            commonMistake: {
              wrong: "How much is monthly rent?",
              correct: "How much is the monthly rent?",
              explanation: "询问租金时，通常用 'the monthly rent' 或 'rent per month'。",
            },
            formalityVariants: {
              casual: "Thanks! So, what's the rent per month?",
              standard: "Thanks! How much is the monthly rent?",
              formal: "Thank you. Could you please inform me of the monthly rental fee?",
            },
            casualVersion: "Thanks! What's the rent on this one?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "The rent is $1,800 a month, and that includes water and trash pickup. Electricity and internet are separate.",
            textZh: "月租1800美元，包含水费和垃圾清运。电费和网费另算。",
            casualVersion: "Rent's 1800 a month, covers water, trash. Electric, internet's extra though.",
            formalityVariants: {
              casual: "It's 1800 a month, water and trash included. You pay for electricity and internet.",
              standard: "The rent is $1,800 a month, and that includes water and trash pickup. Electricity and internet are separate.",
              formal: "The current rental rate is $1,800 per month, which encompasses water utility and refuse collection services. Kindly note that electricity and internet services are billed independently.",
            },
            keyPhrases: [
              { en: "includes water and trash", zh: "包含水费和垃圾清运" },
              { en: "separate", zh: "另算" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's eighteen hundred a month. Water and garbage are covered, but you'd handle electric and internet on your own.",
                textZh: "一个月一千八。水费和垃圾费包了，但电和网你自己搞。",
                actionHint: "covered = 包含在内；on your own = 自己负责",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds reasonable. Is there in-unit laundry?",
            textZh: "听起来还行。有室内洗衣设备吗？",
            commonMistake: {
              wrong: "Does it have laundry machine inside?",
              correct: "Does it have in-unit laundry?",
              explanation: "in-unit laundry 是指公寓内的洗衣设备，更地道。",
            },
            formalityVariants: {
              casual: "Sounds good. Is there laundry in the apartment?",
              standard: "That sounds reasonable. Is there in-unit laundry?",
              formal: "That does sound reasonable. May I inquire if in-unit laundry facilities are provided?",
            },
            casualVersion: "Not bad. Does it come with a washer and dryer?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "There's no in-unit laundry, but there's a shared laundry room on the ground floor. It's coin-operated — a dollar fifty per load.",
            textZh: "没有室内洗衣设备，但一楼有公共洗衣房。投币使用，每次一块五。",
            casualVersion: "Nah, no in-unit. But there's a communal laundry on the first floor. Coin-op, buck fifty a load.",
            formalityVariants: {
              casual: "No, there's no in-unit laundry. But we have a shared laundry room downstairs on the first floor. It's coin-op, $1.50 a cycle.",
              standard: "There are no in-unit laundry facilities, but there's a communal laundry room on the first floor. It's coin-operated, $1.50 per load.",
              formal: "Unfortunately, in-unit laundry facilities are not provided within this specific unit. However, a communal laundry room is conveniently located on the first floor. It operates on a coin system, with each cycle costing $1.50.",
            },
            keyPhrases: [
              { en: "shared laundry room", zh: "公共洗衣房" },
              { en: "coin-operated", zh: "投币式" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No washer-dryer in the unit, sorry. But there's a laundry room downstairs — you just need quarters.",
                textZh: "房间里没有洗烘机，抱歉。但楼下有洗衣房——你只需要硬币。",
                actionHint: "quarters = 25美分硬币，美国洗衣机常用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay. Can I see the kitchen and bathroom?",
            textZh: "好的。我能看看厨房和卫生间吗？",
            commonMistake: {
              wrong: "Can I look kitchen and bathroom?",
              correct: "Can I see the kitchen and bathroom?",
              explanation: "看某个具体物品时，通常需要 'see/look at + the + 名词'。",
            },
            formalityVariants: {
              casual: "Alright. Can we take a look at the kitchen and bathroom?",
              standard: "Okay. Can I see the kitchen and bathroom?",
              formal: "Certainly. Would it be possible to view the kitchen and bathroom areas now?",
            },
            casualVersion: "Sure. Mind if I check out the kitchen and bathroom?",
          },
        ],
      },
      {
        id: "apartment-tour-details",
        titleZh: "深入了解",
        titleEn: "Detailed Inquiry",
        description: "进一步询问租约条款、停车和宠物政策",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "经纪人",
            textEn: "So, do you have any questions about the lease terms?",
            textZh: "那么，你对租约条款有什么问题吗？",
            commonMistake: {
              wrong: "Do you have any questions about lease terms?",
              correct: "Do you have any questions about the lease terms?",
              explanation: "通常不说'lease terms'而说'the lease terms'或'the lease'，更自然。",
            },
            keyPhrases: [
              { en: "lease terms", zh: "租约条款" },
              { en: "questions", zh: "问题" },
            ],
            alternativeExpressions: [
              {
                textEn: "Any questions about the lease or anything like that?",
                textZh: "关于租约之类的有什么问题吗？",
                actionHint: "or anything like that = 或者类似的事情",
                frequency: "common",
              },
            ],
            casualVersion: "So, got any questions about the lease?",
            formalityVariants: {
              casual: "Got any questions about the lease?",
              standard: "So, do you have any questions about the lease terms?",
              formal: "Do you have any further questions regarding the lease agreement?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, is the lease for 12 months? And is there a penalty for breaking it early?",
            textZh: "有的，租约是12个月的吗？提前终止有违约金吗？",
            commonMistake: {
              wrong: "Yes, is the lease 12 months? Is there penalty for breaking it early?",
              correct: "Yes, is the lease for 12 months? And is there a penalty for breaking it early?",
              explanation: "中文里租期常说“12个月租约”，但英文习惯用“for”。penalty可数。",
            },
            formalityVariants: {
              casual: "Yeah, is it a 12-month lease? Any penalty for breaking it early?",
              standard: "Yes, is the lease for 12 months? And is there a penalty for breaking it early?",
              formal: "Yes, I was wondering if the lease term is 12 months? Additionally, are there any penalties associated with early termination?",
            },
            casualVersion: "Yeah — is it a 12-month lease? What happens if I need to break it early?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "It's a 12-month lease. If you break it early, you'd owe two months' rent as a penalty. We do allow subletting with the landlord's approval.",
            textZh: "是12个月的租约。如果提前终止，需要支付两个月租金作为违约金。经房东同意后可以转租。",
            culturalNote: "美国租房通常有固定租期，提前解约有违约金，转租需房东同意。",
            casualVersion: "It's a 12-month lease. Break it early, you'll owe two months' rent as a penalty. We allow subletting, with landlord's OK.",
            formalityVariants: {
              casual: "It's a 12-month lease. Break it early, you'll pay two months' rent as a penalty. Subletting's cool, with the landlord's OK.",
              standard: "It's a 12-month lease. If you break it early, you'd owe two months' rent as a penalty. We do allow subletting with the landlord's approval.",
              formal: "The lease term is 12 months. Should you choose to terminate the agreement prematurely, a penalty equivalent to two months' rent would be incurred. Subletting is permitted, contingent upon the landlord's express approval.",
            },
            keyPhrases: [
              { en: "break it early", zh: "提前终止" },
              { en: "subletting", zh: "转租" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, it's a year lease. Early termination is two months' rent. But you can sublet if the landlord signs off on it.",
                textZh: "对，一年的租约。提前解约要付两个月租金。但房东批准的话你可以转租。",
                actionHint: "signs off on it = 批准同意",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Is there parking available?",
            textZh: "了解了。有停车位吗？",
            commonMistake: {
              wrong: "Good to know. Have parking space?",
              correct: "Good to know. Is there parking available?",
              explanation: "询问是否有停车位时，英文里常用 \"parking available\" 或 \"is there parking\"。",
            },
            formalityVariants: {
              casual: "Got it. Any parking?",
              standard: "Good to know. Is there parking available?",
              formal: "Understood. May I inquire about the availability of parking?",
            },
            casualVersion: "Got it. What about parking?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "There's a parking garage underneath the building. It's an extra $150 a month for a reserved spot. Street parking is free but hard to find.",
            textZh: "楼下有停车库。固定车位每月加收150美元。路边停车免费但很难找到。",
            casualVersion: "There's a garage downstairs. Reserved spot's an extra $150 a month. Street parking's free but tough to find.",
            formalityVariants: {
              casual: "Garage downstairs. Reserved spot's an extra $150/month. Street parking's free, but good luck finding one.",
              standard: "There's a parking garage underneath the building. It's an extra $150 a month for a reserved spot. Street parking is free but hard to find.",
              formal: "A parking garage is located beneath the building. A reserved parking space is available for an additional $150 per month. Complimentary street parking is an option, though availability can be quite limited.",
            },
            keyPhrases: [
              { en: "parking garage", zh: "停车库" },
              { en: "reserved spot", zh: "固定车位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's underground parking — it's a hundred fifty extra a month for your own spot. You can try street parking but good luck with that.",
                textZh: "有地下停车场——一个月多一百五就有你自己的车位。你可以试试路边停车，不过祝你好运。",
                actionHint: "good luck with that = 很难找（带点幽默）",
                frequency: "common",
              },
            ],
            culturalNote: "美国很多城市路边停车需要看标志牌，不同时段有不同规则，违规会被贴罚单或拖车。",
          },
          {
            speaker: "you",
            textEn: "One more thing — are pets allowed? I have a small dog.",
            textZh: "还有一个问题——允许养宠物吗？我有一只小狗。",
            culturalNote: "美国许多公寓对宠物有严格规定，通常需额外费用或不允许大型犬种。",
            commonMistake: {
              wrong: "One more thing - can I raise pets? I have a small dog.",
              correct: "One more thing — are pets allowed? I have a small dog.",
              explanation: "询问是否允许养宠物，常用 \"are pets allowed?\" 而非直译“我能养宠物吗？”。",
            },
            formalityVariants: {
              casual: "Oh, one more thing – can I have pets? I got a small dog.",
              standard: "One more thing — are pets allowed? I have a small dog.",
              formal: "I have one final question, if I may. Are pets permitted on the premises? Specifically, I own a small dog.",
            },
            casualVersion: "Oh, and are you guys pet-friendly? I've got a little dog.",
          },
        ],
      },
    ],
  },

  // ==================== 2. 签租约 ====================
  {
    id: "housing-lease-signing",
    category: "housing",
    titleZh: "签租约",
    titleEn: "Lease Signing",
    description: "与房东确认租约细节并签署合同",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "lease-signing-basic",
        titleZh: "基础签约",
        titleEn: "Basic Lease Signing",
        description: "确认租约基本条款并签字",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Thanks for coming in. I have the lease ready for you to review and sign. Let me go over the key points.",
            textZh: "谢谢你来。租约准备好了，你可以审阅后签字。我跟你过一下重点。",
            culturalNote: "美国房东通常开门见山，直接说事。",
            commonMistake: {
              wrong: "I let you know the key points.",
              correct: "Let me go over the key points.",
              explanation: "“let sb. do sth.”通常表示允许，不如“go over”或“cover”准确。",
            },
            keyPhrases: [
              { en: "lease ready", zh: "租约准备好了" },
              { en: "go over the key points", zh: "过一下重点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, glad you could make it. So the lease is all drawn up — let me walk you through the main stuff before you sign.",
                textZh: "嘿，你能来太好了。租约都拟好了——签字前我带你过一下主要内容。",
                actionHint: "drawn up = 拟好了；walk you through = 带你过一遍",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks for coming. Got the lease ready for ya to look over and sign. I'll just go through the main stuff.",
            formalityVariants: {
              casual:
                "Thanks for coming. Got the lease ready for ya to look over and sign. I'll just go through the main stuff.",
              standard:
                "Thanks for coming in. I have the lease ready for you to review and sign. Let me go over the key points.",
              formal:
                "Thank you for joining me. The lease agreement is prepared for your review and signature. I will now outline the essential provisions.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'd like to read through it carefully first.",
            textZh: "好的，我想先仔细看一遍。",
            casualVersion: "Yeah, let me read through it real quick first.",
            commonMistake: {
              wrong: "I want to read it carefully first.",
              correct: "I'd like to read through it carefully first.",
              explanation: "“I want” 听起来太直接，用 “I'd like” 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Yeah, lemme just read it over carefully first.",
              standard: "Sure, I'd like to read through it carefully first.",
              formal: "Certainly, I would prefer to review the document thoroughly beforehand.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Of course, take your time. The move-in date is March 1st. Rent is due on the first of each month, and there's a five-day grace period.",
            textZh: "当然，慢慢看。入住日期是3月1日。每月1号交租，有5天宽限期。",
            commonMistake: {
              wrong: "Rent pay on the first of each month.",
              correct: "Rent is due on the first of each month.",
              explanation: "租金是被付的，需用被动语态 'is due' 或 'is to be paid'。",
            },
            keyPhrases: [
              { en: "move-in date", zh: "入住日期" },
              { en: "grace period", zh: "宽限期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No rush. So the start date is March 1st, rent's due on the first, and you've got five days before it's considered late.",
                textZh: "不着急。起始日期是3月1日，每月1号交租，5天之内都不算迟交。",
                actionHint: "considered late = 被视为逾期",
                frequency: "common",
              },
            ],
            casualVersion:
              "No rush, take your time. Move-in's March 1st. Rent's due on the first, got a five-day grace period.",
            formalityVariants: {
              casual:
                "No rush, take your time. Move-in's March 1st. Rent's due on the first, got a five-day grace period.",
              standard:
                "Of course, take your time. The move-in date is March 1st. Rent is due on the first of each month, and there's a five-day grace period.",
              formal:
                "Certainly, please take all the time you require. The occupancy date is designated as March 1st. Rental payments are due on the first day of each calendar month, with a five-day grace period extended thereafter.",
            },
          },
          {
            speaker: "you",
            textEn: "What happens if I pay late?",
            textZh: "如果逾期交租会怎样？",
            commonMistake: {
              wrong: "If I pay late, what happens?",
              correct: "What happens if I pay late?",
              explanation: "英文疑问句通常是 “What happens if...”，而不是 “If... what happens?”",
            },
            casualVersion: "And what if I'm a few days late on rent?",
            formalityVariants: {
              casual: "What happens if I'm late with rent?",
              standard: "What happens if I pay late?",
              formal: "Could you please elaborate on the consequences of a late payment?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "After the grace period, there's a $50 late fee. If rent is more than 30 days late, I can start the eviction process.",
            textZh: "过了宽限期，有50美元的滞纳金。如果超过30天未交，我可以启动驱逐程序。",
            commonMistake: {
              wrong: "There is $50 late fee after grace period.",
              correct: "There's a $50 late fee after the grace period.",
              explanation: "“a late fee”是一个名词短语，通常需要冠词“a”。",
            },
            culturalNote: "“eviction proceedings”（驱逐程序）是严肃的法律术语，租客需了解其后果。",
            keyPhrases: [
              { en: "late fee", zh: "滞纳金" },
              { en: "eviction process", zh: "驱逐程序" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's a fifty-dollar late fee after those five days. And if it goes past 30 days, then we're looking at eviction, which neither of us wants.",
                textZh: "5天之后有50美元滞纳金。超过30天的话就要走驱逐流程了，咱们都不希望那样。",
                actionHint: "we're looking at = 我们将面临",
                frequency: "common",
              },
            ],
            casualVersion:
              "Once the grace period's up, it's a $50 late fee. If rent's over 30 days late, I can start eviction.",
            formalityVariants: {
              casual:
                "Once the grace period's up, it's a $50 late fee. If rent's over 30 days late, I can start eviction.",
              standard:
                "After the grace period, there's a $50 late fee. If rent is more than 30 days late, I can start the eviction process.",
              formal:
                "Subsequent to the conclusion of the grace period, a late fee of $50 will be assessed. Should the rental payment extend beyond 30 days past its due date, I reserve the right to initiate eviction proceedings.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. Everything looks good. Where do I sign?",
            textZh: "明白了。都没问题。在哪里签字？",
            commonMistake: {
              wrong: "All things good. Where sign?",
              correct: "Everything looks good. Where do I sign?",
              explanation: "英文句子通常需要主语和谓语，不能像中文一样省略。",
            },
            casualVersion: "Makes sense. Looks good to me — where do I sign?",
            formalityVariants: {
              casual: "Got it. Looks good. Where do I sign?",
              standard: "Understood. Everything looks good. Where do I sign?",
              formal: "I comprehend. All terms appear satisfactory. Kindly indicate where my signature is required.",
            },
          },
        ],
      },
      {
        id: "lease-signing-negotiate",
        titleZh: "条款协商",
        titleEn: "Negotiating Lease Terms",
        description: "对租约中的某些条款提出异议并协商",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn: "So here's the lease. As we discussed, it's a 12-month term with rent at $2,200 per month.",
            textZh: "这是租约。如之前讨论的，12个月，月租2200美元。",
            commonMistake: {
              wrong: "This is the lease.",
              correct: "Here's the lease.",
              explanation: "指向物品时用 'Here's' 更自然地呈递，而不是 'This is'。",
            },
            keyPhrases: [
              { en: "12-month term", zh: "12个月期限" },
              { en: "as we discussed", zh: "如之前讨论的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, here's the lease agreement. Twelve months at twenty-two hundred a month, just like we talked about.",
                textZh: "好的，这是租约。十二个月，月租两千二，跟我们之前说的一样。",
                actionHint: "twenty-two hundred = 2200美元",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, so here's the lease. Like we talked about, it's 12 months, rent's $2,200 a month.",
            formalityVariants: {
              casual: "So, lease here. 12 months, $2,200 a month, like we said.",
              standard: "So here's the lease. As we discussed, it's a 12-month term with rent at $2,200 per month.",
              formal:
                "Please review the lease agreement. As previously established, it outlines a 12-month tenancy with a monthly rental rate of $2,200.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I noticed the lease says no modifications to the apartment at all. Can I at least hang pictures on the walls?",
            textZh: "我注意到租约说完全不能改动公寓。我至少可以在墙上挂画吗？",
            commonMistake: {
              wrong: "I noticed the lease said no modifications.",
              correct: "I noticed the lease says no modifications.",
              explanation: "文件条款是持续有效的状态，用一般现在时 'says'。",
            },
            formalityVariants: {
              casual: "Lease says no changes at all. Can I at least hang pictures?",
              standard: "I noticed the lease says no modifications to the apartment at all. Can I at least hang pictures on the walls?",
              formal: "I observed that the lease agreement stipulates no modifications whatsoever to the apartment. Would it be permissible to hang pictures on the walls?",
            },
            casualVersion: "One thing — it says no modifications. Am I allowed to at least put up some pictures?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Small nail holes for pictures are fine — just fill them in when you move out. No painting the walls or making any structural changes though.",
            textZh: "挂画的小钉孔没问题——搬走时填补好就行。但不能粉刷墙壁或做任何结构改动。",
            commonMistake: {
              wrong: "Small nail holes is fine for pictures.",
              correct: "Small nail holes for pictures are fine.",
              explanation: "“Small nail holes”是复数主语，谓语动词应为“are”。",
            },
            casualVersion: "Small picture nail holes are cool — just patch 'em up when you leave. But no painting or structural changes.",
            formalityVariants: {
              casual: "Small nail holes for pictures are fine — just patch 'em when you leave. No painting or big structural changes though.",
              standard: "Small nail holes for pictures are fine — just fill them in when you move out. No painting the walls or making any structural changes though.",
              formal: "Minor nail holes for the purpose of hanging pictures are acceptable, provided they are properly repaired upon vacating the premises. However, repainting the walls or implementing any structural alterations is strictly prohibited.",
            },
            keyPhrases: [
              { en: "nail holes", zh: "钉孔" },
              { en: "fill them in", zh: "填补" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, hanging stuff is totally fine. Just patch the holes before you leave. No repainting though.",
                textZh: "哦当然可以，挂东西完全没问题。走之前把洞补上就行。不过不能重新粉刷。",
                actionHint: "patch the holes = 补洞",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Also, I see that the lease requires 60 days' notice before moving out. Is there any flexibility on that?",
            textZh: "另外，我看到租约要求搬出前60天通知。这个有商量的余地吗？",
            commonMistake: {
              wrong: "Is there any discussion space for that?",
              correct: "Is there any flexibility on that?",
              explanation: "“商量的余地” 在英文中常表达为 “flexibility” 或 “negotiate”.",
            },
            formalityVariants: {
              casual: "Also, lease says 60 days' notice. Can we wiggle on that?",
              standard: "Also, I see that the lease requires 60 days' notice before moving out. Is there any flexibility on that?",
              formal: "Furthermore, I note that the lease agreement mandates a 60-day notice period prior to vacating. Is there any potential for adjustment regarding this term?",
            },
            casualVersion: "And the 60-day notice thing — any way to make that 30 days?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I can do 45 days, but not 30. I need enough time to find a new tenant. We can amend that in the lease.",
            textZh: "可以改成45天，但不能30天。我需要足够时间找新租客。我们可以在租约里修改。",
            commonMistake: {
              wrong: "I need enough time to find new tenant.",
              correct: "I need enough time to find a new tenant.",
              explanation: "“new tenant”是可数名词，首次提及通常需要不定冠词“a”。",
            },
            casualVersion: "I can do 45 days, but no to 30. Need time to find a new tenant. We can change that in the lease.",
            formalityVariants: {
              casual: "45 days is doable, but not 30. Need time to find a new tenant. We can just change it in the lease.",
              standard: "I can do 45 days, but not 30. I need enough time to find a new tenant. We can amend that in the lease.",
              formal: "I am able to accommodate a 45-day notice period, however, 30 days would not suffice as I require adequate time to secure a new tenant. We can make that amendment within the lease agreement.",
            },
            keyPhrases: [
              { en: "amend", zh: "修改" },
              { en: "find a new tenant", zh: "找新租客" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'll meet you in the middle — 45 days. That gives me time to list the place. I'll make a note on the lease.",
                textZh: "我们折中一下——45天。这样我有时间挂出去。我在租约上注明。",
                actionHint: "meet you in the middle = 折中；list the place = 把房子挂出去",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国租房合同通常可以协商部分条款，但核心条款如租金和租期一般较难改动。修改后双方需在合同上签字确认。",
          },
          {
            speaker: "you",
            textEn: "That works for me. Let's go with 45 days. I'm ready to sign.",
            textZh: "可以接受。就45天吧。我准备签字了。",
            commonMistake: {
              wrong: "It works for me. Let's 45 days.",
              correct: "That works for me. Let's go with 45 days.",
              explanation: "‘Let's go with 45 days’ 更完整自然，‘Let's 45 days’ 语法不通。",
            },
            formalityVariants: {
              casual: "Cool, 45 days it is. Ready to sign.",
              standard: "That works for me. Let's make it 45 days then. I'm ready to sign.",
              formal: "That is acceptable to me. Let us proceed with the 45-day notice period. I am now prepared to sign the agreement.",
            },
            casualVersion: "Deal. 45 days it is. Let's get this signed.",
          },
        ],
      },
    ],
  },

  // ==================== 3. 付押金 ====================
  {
    id: "housing-deposit-payment",
    category: "housing",
    titleZh: "付押金",
    titleEn: "Deposit Payment",
    description: "与房东确认押金金额、支付方式以及退还条件",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "deposit-basic",
        titleZh: "基础押金支付",
        titleEn: "Basic Deposit Payment",
        description: "了解押金金额和支付方式",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn: "Before you move in, I'll need a security deposit equal to one month's rent. That's $1,800.",
            textZh: "在你入住之前，我需要收取相当于一个月租金的押金，也就是1800美元。",
            keyPhrases: [
              { en: "security deposit", zh: "押金" },
              { en: "equal to one month's rent", zh: "相当于一个月租金" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So the deposit is one month's rent — eighteen hundred bucks. I'll need that before move-in day.",
                textZh: "押金是一个月的租金——一千八百块。搬入之前我需要收到。",
                actionHint: "bucks = 美元（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Before you move in, I'll need a security deposit, like one month's rent. That's eighteen hundred bucks.",
            formalityVariants: {
              casual: "Before you move in, I'll need a security deposit, 'bout a month's rent. So, $1,800.",
              standard:
                "Before you move in, I'll require a security deposit equivalent to one month's rent, totaling $1,800.",
              formal:
                "Prior to your occupancy, a security deposit equivalent to one month's rental fee, specifically $1,800, will be required.",
            },
          },
          {
            speaker: "you",
            textEn: "How would you like me to pay? Do you accept personal checks?",
            textZh: "你希望怎么付？接受个人支票吗？",
            casualVersion: "How do you want me to pay? Check okay?",
            commonMistake: {
              wrong: "How you want me to pay? Personal check okay?",
              correct: "How would you like me to pay? Do you accept personal checks?",
              explanation: "中式英语常省略助动词或把句子过于简化，听起来生硬。",
            },
            formalityVariants: {
              casual: "How d'you want me to pay? Personal checks good?",
              standard: "How would you like me to pay? Do you accept personal checks?",
              formal: "What is your preferred method of payment? Are personal checks an acceptable form of tender?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I prefer a cashier's check or a money order for the deposit. Personal checks take too long to clear.",
            textZh: "押金我更倾向于收银行本票或汇票。个人支票到账太慢了。",
            commonMistake: {
              wrong: "I prefer cashier check or money order.",
              correct: "I prefer a cashier's check or money order.",
              explanation: "'cashier's check' 是专有名词，需要所有格's，并且是可数名词前要加'a'。",
            },
            keyPhrases: [
              { en: "cashier's check", zh: "银行本票" },
              { en: "money order", zh: "汇票" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For the deposit, I'll need a certified check or money order. Personal checks bounce sometimes, so I don't accept those for deposits.",
                textZh: "押金的话，我需要保付支票或汇票。个人支票有时会跳票，所以押金我不收。",
                actionHint: "bounce = 跳票（支票被退回）",
                frequency: "common",
              },
            ],
            casualVersion:
              "For the deposit, I'd rather get a cashier's check or money order. Personal checks just take too long to clear, you know?",
            culturalNote: "美国支票系统与中国不同，个人支票到账慢，银行本票安全快捷。",
            formalityVariants: {
              casual:
                "For the deposit, I'd prefer a cashier's check or money order. Personal checks just take too long.",
              standard:
                "For the deposit, I prefer a cashier's check or a money order. Personal checks typically require a longer clearing period.",
              formal:
                "Regarding the security deposit, my preference is for a cashier's check or a money order, as personal checks often entail an extended clearing process.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. When will I get the deposit back after I move out?",
            textZh: "明白了。搬走后押金什么时候退还？",
            casualVersion: "Sure. And when do I get it back after I leave?",
            commonMistake: {
              wrong: "I got it. When I move out, when return deposit?",
              correct: "Got it. When will I get the deposit back after I move out?",
              explanation: "中式英语常省略主语、助动词，语序混乱。",
            },
            formalityVariants: {
              casual: "Got it. When do I get my deposit back when I leave?",
              standard: "Understood. When can I expect the return of my deposit after I vacate the premises?",
              formal:
                "I comprehend. Could you please specify the timeframe for the reimbursement of the security deposit subsequent to my departure?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "By law, I have to return your deposit within 30 days of move-out, minus any deductions for damages beyond normal wear and tear.",
            textZh: "按法律规定，我必须在你搬出后30天内退还押金，扣除超出正常损耗的损坏费用。",
            commonMistake: {
              wrong: "I have to return your deposit in 30 days.",
              correct: "I have to return your deposit within 30 days.",
              explanation: "\"in 30 days\" 指30天后才退，\"within 30 days\" 指30天内退。",
            },
            keyPhrases: [
              { en: "within 30 days", zh: "30天内" },
              { en: "normal wear and tear", zh: "正常损耗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll get it back within a month after you move out, as long as there's no major damage. Normal stuff like scuffed floors doesn't count.",
                textZh: "搬出后一个月内退还，只要没有大的损坏。地板刮痕之类的正常磨损不算。",
                actionHint: "scuffed floors = 有刮痕的地板",
                frequency: "common",
              },
            ],
            culturalNote: "美国各州对押金退还有不同的法律规定，通常为14-30天。房东必须提供书面的扣款明细。",
            casualVersion:
              "Legally, I gotta get your deposit back within 30 days after you move out. That's minus any deductions for damages that aren't just normal wear and tear.",
            formalityVariants: {
              casual:
                "Legally, I gotta return your deposit within 30 days of you moving out, after any deductions for real damage.",
              standard:
                "Per legal requirements, your deposit will be returned within 30 days of your move-out date, less any deductions for damages exceeding normal wear and tear.",
              formal:
                "In accordance with legal statutes, your security deposit shall be remitted within a 30-day period following your vacating the premises, subject to any justifiable deductions for damages beyond standard depreciation.",
            },
          },
          {
            speaker: "you",
            textEn: "Will I receive an itemized list if anything is deducted?",
            textZh: "如果有扣款，会收到逐项清单吗？",
            casualVersion: "And you'll give me a breakdown if you take anything out, right?",
            commonMistake: {
              wrong: "If deduction, give me list?",
              correct: "Will I receive an itemized list if anything is deducted?",
              explanation: "中式英语常省略主语、助动词，语序也可能混乱。",
            },
            formalityVariants: {
              casual: "If there are deductions, will I get a list of what they're for?",
              standard: "Will I be provided with an itemized list should any deductions be made?",
              formal: "In the event of any deductions, will a comprehensive, itemized statement be furnished to me?",
            },
          },
        ],
      },
      {
        id: "deposit-dispute",
        titleZh: "押金争议",
        titleEn: "Deposit Dispute",
        description: "对押金扣款提出异议",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I've reviewed the apartment after your move-out. I'll be deducting $400 from your deposit for carpet cleaning and a damaged cabinet.",
            textZh: "你搬走后我检查了公寓。我要从押金中扣除400美元，用于地毯清洁和损坏的橱柜。",
            commonMistake: {
              wrong: "I will deduct $400 for carpet cleaning.",
              correct: "I am deducting $400 for carpet cleaning.",
              explanation: "正在进行的扣款用现在进行时更自然。",
            },
            keyPhrases: [
              { en: "deducting", zh: "扣除" },
              { en: "carpet cleaning", zh: "地毯清洁" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So I checked the place out and I'm gonna have to take $400 off the deposit — the carpet needs professional cleaning and one of the cabinets is busted.",
                textZh: "我检查了房子，要从押金里扣400美元——地毯需要专业清洁，还有一个橱柜坏了。",
                actionHint: "busted = 坏了（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey, checked the apartment after you left. Deducting $400 from your deposit for carpet cleaning and a busted cabinet.",
            formalityVariants: {
              casual:
                "Hey, I checked the place after you moved out. Taking $400 from your deposit for the carpet and the busted cabinet.",
              standard:
                "I've reviewed the apartment after your move-out. I'll be deducting $400 from your deposit for carpet cleaning and a damaged cabinet.",
              formal:
                "Following your departure, I conducted a thorough inspection of the apartment. Kindly be advised that a deduction of $400 will be made from your security deposit to cover professional carpet cleaning and the repair of a damaged cabinet.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I disagree with the carpet cleaning charge. The carpet was already stained when I moved in. I have photos from the move-in inspection.",
            textZh: "我不同意地毯清洁的扣款。我搬入时地毯就已经有污渍了。我有搬入检查时拍的照片。",
            culturalNote: "在美国，搬入时拍照记录房屋状况是保护自己押金的重要手段。",
            commonMistake: {
              wrong: "I disagree the charge.",
              correct: "I disagree with the charge.",
              explanation: "Disagree后面常跟介词with，表示不同意某事或某人。",
            },
            formalityVariants: {
              casual: "Nah, I'm not paying for the carpet. It was already stained when I got here. Got pics from when I moved in.",
              standard: "I disagree with the carpet cleaning charge. The carpet was already stained when I moved in. I have photos from the move-in inspection.",
              formal: "I must respectfully dispute the charge for carpet cleaning. The carpet exhibited pre-existing stains at the commencement of my tenancy, and I possess photographic evidence from the move-in inspection to substantiate this claim.",
            },
            casualVersion: "Hold on — the carpet was already messed up when I moved in. I've got photos to prove it.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Can you send me those photos? If the stains were pre-existing, I'll remove that charge.",
            textZh: "你能把照片发给我吗？如果污渍是之前就有的，我会取消这项扣费。",
            casualVersion: "Can you send those over? If they were already there, I'll take that charge off.",
            commonMistake: {
              wrong: "If the stains were before existing, I will cancel that charge.",
              correct: "If the stains were pre-existing, I'll remove that charge.",
              explanation: "“pre-existing”比“before existing”更地道，表示“预先存在的”，而“remove”扣款很常用。",
            },
            formalityVariants: {
              casual: "Hey, send those pics over. If they were already there, I'll take that charge off.",
              standard: "Can you send me those photos? If the stains were pre-existing, I'll remove that charge.",
              formal: "Could you please forward those photographs to me? Should the stains indeed have been pre-existing, I will, of course, waive that particular charge.",
            },
            keyPhrases: [
              { en: "pre-existing", zh: "之前就有的" },
              { en: "remove that charge", zh: "取消这项扣费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, okay. Let me see the pics. If the stains were already there, that's fair — I won't charge you for it.",
                textZh: "哦，好的。让我看看照片。如果污渍本来就在，那算了——不收你这笔钱。",
                actionHint: "that's fair = 那合理",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll email them to you today. As for the cabinet, can you show me the repair estimate?",
            textZh: "我今天就发邮件给你。至于橱柜，能给我看看维修报价吗？",
            commonMistake: {
              wrong: "I will email you today. About the cabinet, can you show me the repair price?",
              correct: "I'll email them to you today. As for the cabinet, can you show me the repair estimate?",
              explanation: "Email them to you 更完整。“As for”比“About”更正式，“estimate”指维修报价单，比“price”更准确。",
            },
            formalityVariants: {
              casual: "Yeah, I'll email 'em today. What about the cabinet? Can I see the repair quote?",
              standard: "I'll email them to you today. As for the cabinet, can you show me the repair estimate?",
              formal: "I will send those via email to you today. Regarding the cabinet, would you be so kind as to provide me with the repair estimate?",
            },
            casualVersion: "I'll send them over today. And for the cabinet, do you have a quote for the repair?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn: "Sure, I'll forward the contractor's estimate. It came to $200 for the cabinet door replacement.",
            textZh: "当然，我把承包商的报价转给你。更换柜门200美元。",
            casualVersion: "Yep, I'll send over the contractor's quote. It was $200 to swap out the cabinet door.",
            commonMistake: {
              wrong: "Sure, I will forward the contractor's estimate. It is $200 for change the cabinet door.",
              correct: "Sure, I'll forward the contractor's estimate. It came to $200 for the cabinet door replacement.",
              explanation: "“came to”表示总计，更自然；“replacement”比“change the door”更专业和地道。",
            },
            formalityVariants: {
              casual: "Yep, I'll send over the contractor's quote. It was $200 to swap out the cabinet door.",
              standard: "Sure, I'll forward the contractor's estimate. It came to $200 for the cabinet door replacement.",
              formal: "Certainly, I shall forward the contractor's estimate. The cost for the cabinet door replacement amounted to $200.",
            },
            keyPhrases: [
              { en: "contractor's estimate", zh: "承包商的报价" },
              { en: "replacement", zh: "更换" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, no problem. The guy quoted me two hundred for a new cabinet door. I'll send you the invoice.",
                textZh: "好，没问题。师傅报价两百块换一个新柜门。我把账单发给你。",
                actionHint: "the guy quoted me = 师傅给我的报价",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, that sounds fair. Please send the deposit balance by check to my new address.",
            textZh: "好的，这个合理。请把剩余押金寄支票到我的新地址。",
            culturalNote: "在美国，退还押金通过支票（check）是常见做法，虽然电子支付越来越普及，但仍需接受支票的可能性。",
            commonMistake: {
              wrong: "Okay, that is fair. Please return the left deposit by check to my new address.",
              correct: "Okay, that sounds fair. Please send the deposit balance by check to my new address.",
              explanation: "“That sounds fair”更口语自然，表示听起来合理；“balance”指余额，比“left deposit”更地道。",
            },
            formalityVariants: {
              casual: "Alright, that works. Just send the rest of the deposit by check to my new place.",
              standard: "Okay, that sounds fair. Please send the deposit balance by check to my new address.",
              formal: "Very well, I find that acceptable. Kindly remit the remaining deposit balance via check to my updated mailing address.",
            },
            casualVersion: "Alright, that's fair. Just mail the rest to my new place.",
          },
        ],
      },
    ],
  },

  // ==================== 4. 搬入检查 ====================
  {
    id: "housing-move-in",
    category: "housing",
    titleZh: "搬入检查",
    titleEn: "Move-in Inspection",
    description: "搬入新公寓时与房东一起检查房屋状况，记录现有问题",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "move-in-basic",
        titleZh: "基础搬入",
        titleEn: "Basic Move-in",
        description: "与房东一起做搬入检查，记录房屋现状",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Let's do a walk-through together before you move your stuff in. We'll note any existing damage on this checklist.",
            textZh: "在你搬东西进来之前，我们一起检查一下。我们会在这张清单上记录现有的损坏。",
            commonMistake: {
              wrong: "Let us inspect the unit together.",
              correct: "Let's inspect the unit together.",
              explanation: "“Let's” 是 “Let us” 的缩写，口语中常用 “Let's” 来提建议或邀请，更自然。",
            },
            keyPhrases: [
              { en: "walk-through", zh: "逐项检查" },
              { en: "existing damage", zh: "现有的损坏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Before you bring anything in, let's go room by room and write down anything that's already messed up. That way you won't get charged for it later.",
                textZh: "在你搬东西进来之前，我们一个房间一个房间看，把已有的问题写下来。这样以后就不会算你的。",
                actionHint: "messed up = 有问题的；get charged for it = 被收费",
                frequency: "common",
              },
            ],
            culturalNote:
              "搬入检查（move-in inspection）非常重要。一定要拍照留证据，记录所有现有损坏，防止搬出时被扣押金。",
            casualVersion:
              "Wanna do a quick walk-through before you move your stuff in? We'll note any existing damage on this checklist.",
            formalityVariants: {
              casual:
                "Wanna do a quick walk-through before you move your stuff in? We'll just note any existing damage on this checklist.",
              standard:
                "Let's do a walk-through together before you move your items in. We'll note any existing damage on this checklist.",
              formal:
                "Perhaps we could conduct a comprehensive walk-through prior to your moving in. We will meticulously document any pre-existing damage on the provided checklist.",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. I notice there's a crack in the bathroom tile. Can we note that down?",
            textZh: "好主意。我注意到卫生间瓷砖有条裂缝。我们能记录下来吗？",
            casualVersion:
              "Sounds good. Oh, there's a crack in the bathroom tile — let's make sure we write that down.",
            commonMistake: {
              wrong: "Can we record it?",
              correct: "Can we note that down?",
              explanation: "“note that down”是记录事项的常用说法，比直接翻译“记录”更自然。",
            },
            formalityVariants: {
              casual: "Good idea. Hey, I see a crack in the bathroom tile. Can we put that down?",
              standard: "Good idea. I notice there's a crack in the bathroom tile. Can we note that down?",
              formal:
                "That's an excellent suggestion. I've observed a crack in the bathroom tile. May we document that for our records?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Yes, I see it. I'll mark that on the checklist. Go ahead and take a photo of it too, just for your records.",
            textZh: "是的，我看到了。我会在清单上标记。你也拍张照片，做个记录。",
            commonMistake: {
              wrong: "You should take a photo also.",
              correct: "You should take a picture too.",
              explanation: "“Also” 通常用于句首或动词前，“too” 和 “as well” 更适合句末。",
            },
            keyPhrases: [
              { en: "mark that on the checklist", zh: "在清单上标记" },
              { en: "for your records", zh: "做个记录" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, got it. I'll put it on the form. You should snap a pic too — always good to have proof.",
                textZh: "好的，记下了。我写到表上。你也拍一张——有证据总是好的。",
                actionHint: "snap a pic = 拍张照片",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I see it. I'll mark that on the checklist. Go on and snap a pic too, just for your records.",
            formalityVariants: {
              casual:
                "Yeah, I see it. I'll mark that on the checklist. Go on and snap a pic too, just for your records.",
              standard:
                "Yes, I see it. I'll mark that on the checklist. Please also take a photo of it, just for your records.",
              formal:
                "Indeed, I observe it. I shall document that on the checklist. Furthermore, I recommend taking a photograph for your personal records.",
            },
          },
          {
            speaker: "you",
            textEn: "The stove burner on the left doesn't seem to work. Can you check it?",
            textZh: "左边的炉灶好像不工作了。你能检查一下吗？",
            casualVersion: "Hey, this left burner isn't working. Can you take a look?",
            commonMistake: {
              wrong: "The stove burner on the left is broken.",
              correct: "The stove burner on the left doesn't seem to work.",
              explanation: "用“doesn't seem to work”比“is broken”更委婉，避免直接指责。",
            },
            formalityVariants: {
              casual: "Left stove burner's not working, looks like. Can you take a look?",
              standard: "The stove burner on the left doesn't seem to be functional. Could you please check it?",
              formal:
                "I've observed that the stove burner situated on the left appears to be non-functional. Would you be so kind as to inspect it?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Let me try it. You're right, it's not igniting. I'll have a repairman come fix it before you fully move in.",
            textZh: "我试试。你说得对，点不着火。我会让维修工在你完全搬入之前来修好。",
            commonMistake: {
              wrong: "You are right.",
              correct: "You're right.",
              explanation: "口语中 “You're right” 比 “You are right” 更自然流畅。",
            },
            keyPhrases: [
              { en: "not igniting", zh: "点不着火" },
              { en: "repairman", zh: "维修工" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh yeah, that one's dead. I'll get someone out here to fix it — should be done by the time you're all moved in.",
                textZh: "哦对，这个坏了。我找人来修——你搬完之前应该能修好。",
                actionHint: "that one's dead = 那个坏了；get someone out here = 叫人过来",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme try. Yep, you're right, it's not igniting. I'll get a repair guy out here to fix it before you move all your stuff in.",
            formalityVariants: {
              casual:
                "Lemme try. Yep, you're right, it's not igniting. I'll get a repair guy out here to fix it before you move all your stuff in.",
              standard:
                "Allow me to test it. You are correct; it is not igniting. I will arrange for a repair technician to address this issue prior to your complete move-in.",
              formal:
                "Permit me to attempt an activation. You are entirely correct; it is failing to ignite. I shall promptly dispatch a qualified technician to rectify this issue before your full occupancy.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks. Everything else looks fine. Should we both sign the checklist now?",
            textZh: "谢谢。其他都没问题。我们现在都签字确认清单吗？",
            casualVersion: "Cool, rest looks good. Should we sign off on this?",
            commonMistake: {
              wrong: "Should we sign the checklist now?",
              correct: "Should we both sign the checklist now?",
              explanation: "强调“我们双方”共同签字，更明确，避免歧义。",
            },
            formalityVariants: {
              casual: "Cool, everything else looks good. Wanna sign the checklist?",
              standard:
                "Thank you. Everything else appears to be in order. Should we proceed with signing the checklist now?",
              formal:
                "My thanks. All other aspects appear to be satisfactory. Would it be appropriate for us to affix our signatures to the checklist at this juncture?",
            },
          },
        ],
      },
      {
        id: "move-in-keys",
        titleZh: "钥匙与门禁",
        titleEn: "Keys and Access",
        description: "拿钥匙、了解门禁系统和大楼规则",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Here are your keys. This silver one is for the front door, the gold one is for the mailbox, and this fob is for the building entrance.",
            textZh: "这是你的钥匙。银色的是大门钥匙，金色的是信箱钥匙，这个感应卡是楼栋入口用的。",
            commonMistake: {
              wrong: "This silver key is for front door, the gold key is for mailbox.",
              correct: "This silver one is for the front door, the gold one is for the mailbox.",
              explanation: "英语中提及特定物品时常需加定冠词 “the”。",
            },
            keyPhrases: [
              { en: "fob", zh: "感应卡/门禁卡" },
              { en: "mailbox", zh: "信箱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, so you've got three things — the silver key is the apartment, the gold one opens your mailbox downstairs, and this little fob gets you into the building.",
                textZh: "好，你有三样东西——银色钥匙是公寓的，金色的开楼下信箱，这个小感应卡是进楼用的。",
                actionHint: "gets you into = 让你进入",
                frequency: "common",
              },
            ],
            casualVersion:
              "Here's your keys. Silver's for the front door, gold's for the mailbox, and this fob's for the building entrance.",
            formalityVariants: {
              casual:
                "Here's your keys. Silver's for the front door, gold's for the mailbox, and this fob's for the building entrance.",
              standard:
                "Here are your keys. This silver one is for the front door, the gold one is for the mailbox, and this fob is for the building entrance.",
              formal:
                "Allow me to present your keys. This silver key grants access to the front door, the gold key is for your mailbox, and this access fob is for the main building entrance.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a spare key in case I get locked out?",
            textZh: "有备用钥匙吗？万一我被锁在外面。",
            commonMistake: {
              wrong: "Have spare key?",
              correct: "Is there a spare key?",
              explanation: "疑问句通常需要助动词和主语，并注意冠词使用。",
            },
            formalityVariants: {
              casual: "Got a spare key if I lock myself out?",
              standard: "Is there a spare key in case I get locked out?",
              formal: "Are there any provisions for a spare key in the event that I inadvertently lock myself out?",
            },
            casualVersion: "Do you have a spare? You know, in case I lock myself out.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I keep one spare set in my office. If you get locked out, call me and I can let you in. There's also a locksmith the building uses — their number is on the bulletin board in the lobby.",
            textZh:
              "我在办公室有一套备用钥匙。如果你被锁在外面，打电话给我，我可以帮你开门。大楼还有合作的锁匠——电话在大厅的公告板上。",
            casualVersion: "I keep a spare set at my office. If you get locked out, just call me, I can let you in. Also, there's a locksmith the building works with – their number's on the bulletin board in the lobby.",
            commonMistake: {
              wrong: "If you are locked out, call me.",
              correct: "If you get locked out, call me.",
              explanation: "“get locked out” 是更地道的表达 “被锁在外面” 的方式。",
            },
            formalityVariants: {
              casual: "Got a spare set at my office. Locked out? Just call, I'll let you in. Plus, there's a building locksmith, number's on the lobby board.",
              standard: "I keep one spare set in my office. If you get locked out, call me and I can let you in. There's also a partnered locksmith for the building – their number is on the bulletin board in the lobby.",
              formal: "I maintain a duplicate set of keys in my office. Should you find yourself locked out, please contact me directly, and I will grant you access. Additionally, the building has an affiliated locksmith service; their contact information is posted on the bulletin board in the main lobby.",
            },
            keyPhrases: [
              { en: "spare set", zh: "备用钥匙" },
              { en: "locksmith", zh: "锁匠" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I've got a backup set. Just give me a ring if you're locked out. There's also a locksmith number posted in the lobby if it's after hours.",
                textZh: "有的，我有备用钥匙。被锁了给我打电话就行。如果是非工作时间，大厅里贴了锁匠的电话。",
                actionHint: "give me a ring = 给我打电话；after hours = 非工作时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What are the quiet hours in the building?",
            textZh: "了解了。大楼的安静时间是什么时候？",
            culturalNote: "美国公寓对噪音有严格规定",
            commonMistake: {
              wrong: "When is the quiet time?",
              correct: "What are the quiet hours?",
              explanation: "对于一段固定时间的规定，常用 “quiet hours” 而非 “quiet time”。",
            },
            formalityVariants: {
              casual: "Got it. What are the quiet times here?",
              standard: "Good to know. What are the quiet hours in the building?",
              formal: "That's helpful information. Could you please inform me of the designated quiet hours for the building?",
            },
            casualVersion: "Got it. And when are quiet hours?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Quiet hours are from 10 PM to 8 AM. No loud music, no running the washing machine, and please don't move furniture during those hours.",
            textZh: "安静时间是晚上10点到早上8点。不能放大声音乐，不能开洗衣机，也请不要在这段时间搬家具。",
            casualVersion: "Quiet hours are 10 PM to 8 AM. No loud music, no running the washer, and definitely no moving furniture around then.",
            commonMistake: {
              wrong: "Don't loud music, don't run washing machine.",
              correct: "No loud music, no running the washing machine.",
              explanation: "英语中表示禁止时，常用 “No + noun/gerund” 结构，或 “Don't + verb”。",
            },
            formalityVariants: {
              casual: "Quiet times are 10 PM to 8 AM. No loud music, no washer, and definitely no moving stuff then.",
              standard: "Quiet hours are from 10 PM to 8 AM. No loud music, no running the washing machine, and please don't move furniture during this time.",
              formal: "The designated quiet hours are observed from 10:00 PM to 8:00 AM. During this period, the playing of loud music, operation of laundry appliances, and movement of furniture are strictly prohibited.",
            },
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "no loud music", zh: "不能放大声音乐" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's 10 to 8 for quiet time. Basically keep it down — no blasting music, no laundry, no dragging furniture around.",
                textZh: "安静时间是10点到8点。基本上就是保持安静——不要放大声音乐、不要洗衣服、不要拖家具。",
                actionHint: "keep it down = 保持安静；blasting music = 放很大声的音乐",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Is there anything else I should know about the building rules?",
            textZh: "没问题。关于大楼规定还有什么需要了解的吗？",
            commonMistake: {
              wrong: "Anything else I should know building rules?",
              correct: "Anything else I should know about the building rules?",
              explanation: "询问“关于”某事时需要介词 “about” 和定冠词 “the”。",
            },
            formalityVariants: {
              casual: "Alright, got it. Anything else I should know about the rules here?",
              standard: "No problem. Is there anything else I should know about the building rules?",
              formal: "Understood. Are there any additional regulations or guidelines pertaining to the building that I should be aware of?",
            },
            casualVersion: "Sure thing. Anything else I should know about the building?",
          },
        ],
      },
    ],
  },

  // ==================== 5. 报修 ====================
  {
    id: "housing-maintenance-request",
    category: "housing",
    titleZh: "报修",
    titleEn: "Maintenance Request",
    description: "向维修人员报告公寓内的设施故障并安排维修",
    otherRole: "维修人员",
    otherRoleIcon: "🔧",
    flows: [
      {
        id: "maintenance-basic",
        titleZh: "基础报修",
        titleEn: "Basic Maintenance Request",
        description: "报告水管漏水等常见问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm in apartment 4B. The kitchen faucet has been leaking nonstop since yesterday.",
            textZh: "你好，我住4B公寓。厨房水龙头从昨天开始一直漏水。",
            casualVersion: "Hey, it's the tenant in 4B. My kitchen faucet won't stop dripping.",
            commonMistake: {
              wrong: "I live in 4B apartment.",
              correct: "I'm in apartment 4B.",
              explanation: "I'm in apartment 4B 是更自然的表达方式，直接说明你在哪个单元。",
            },
            formalityVariants: {
              casual: "Hey, I'm in 4B. Kitchen faucet's been leaking since yesterday.",
              standard: "Hi, I'm in apartment 4B. The kitchen faucet has been leaking nonstop since yesterday.",
              formal:
                "Good morning/afternoon. My name is [Your Name], and I reside in apartment 4B. I am contacting you to report a persistent leak from the kitchen faucet, which commenced yesterday.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn:
              "Okay, I can come take a look. Is it a steady drip or more of a spray? And is it the hot or cold side?",
            textZh: "好的，我可以过来看看。是持续滴水还是喷水？是热水还是冷水那边？",
            commonMistake: {
              wrong: "Is it hot or cold water side?",
              correct: "Is it the hot or cold side?",
              explanation: "“Hot/cold side”是常用表达，指水龙头控制热水或冷水的那一部分。",
            },
            keyPhrases: [
              { en: "steady drip", zh: "持续滴水" },
              { en: "hot or cold side", zh: "热水还是冷水那边" },
            ],
            alternativeExpressions: [
              {
                textEn: "Got it. Is it just dripping or is it actually running? And which handle — hot or cold?",
                textZh: "知道了。是滴水还是在流水？哪个把手——热水还是冷水？",
                actionHint: "running = 水一直在流",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, I can come check. Drip or spray? Hot or cold side?",
            formalityVariants: {
              casual: "Alright, I'll check it out. Is it a drip or spray? Hot or cold?",
              standard:
                "Okay, I can come take a look. Is it a steady drip or more of a spray? And is it the hot or cold side?",
              formal:
                "Certainly, I can arrange to inspect the issue. Could you please clarify if the leakage is a consistent drip or a spray? Additionally, please specify if it is emanating from the hot or cold water supply.",
            },
          },
          {
            speaker: "you",
            textEn: "It's a steady drip from the cold water handle. It won't stop even when I tighten it.",
            textZh: "冷水把手那边持续滴水。即使我拧紧了也停不了。",
            casualVersion: "It's the cold side, just keeps dripping no matter how hard I turn it.",
            commonMistake: {
              wrong: "It's a drip from cold water handle.",
              correct: "It's a steady drip from the cold water handle.",
              explanation: "Cold water handle 前需要加定冠词 the，指明是哪个把手。",
            },
            formalityVariants: {
              casual: "Just a steady drip from the cold handle. Can't stop it even when I tighten it.",
              standard: "It's a steady drip from the cold water handle. It won't stop even when I tighten it.",
              formal:
                "The issue is a consistent drip originating from the cold water handle. Despite my attempts to tighten it, the leakage persists.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn:
              "Sounds like the washer needs replacing. I can be there tomorrow between 9 and 11 AM. Does that work for you?",
            textZh: "听起来是垫圈需要更换。我明天上午9点到11点之间可以过来。你方便吗？",
            commonMistake: {
              wrong: "Is it convenient for you?",
              correct: "Does that work for you?",
              explanation: "“Does that work for you?”是问时间是否合适的地道表达。",
            },
            keyPhrases: [
              { en: "washer needs replacing", zh: "垫圈需要更换" },
              { en: "does that work for you", zh: "你方便吗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Probably just a worn-out washer. I can swing by tomorrow morning, say between 9 and 11. That cool?",
                textZh: "可能就是垫圈磨损了。我明天上午过来，大概9到11点之间。可以吗？",
                actionHint: "swing by = 顺路过来；that cool = 可以吗",
                frequency: "common",
              },
            ],
            casualVersion: "Sounds like a washer needs replacing. I can be there tomorrow, 9 to 11 AM. Good for you?",
            formalityVariants: {
              casual: "Washer needs replacing, sounds like. I can do tomorrow, 9-11 AM. That work?",
              standard:
                "Sounds like the washer needs replacing. I can be there tomorrow between 9 and 11 AM. Does that work for you?",
              formal:
                "It appears the washer likely requires replacement. I am available to attend to this matter tomorrow, between 9:00 AM and 11:00 AM. Would that timeframe be suitable for your schedule?",
            },
          },
          {
            speaker: "you",
            textEn: "Tomorrow morning works. Do I need to be home, or can I leave the door unlocked?",
            textZh: "明天上午可以。我需要在家吗，还是可以不锁门？",
            casualVersion: "Morning works. Do I need to be here, or can you let yourself in?",
            commonMistake: {
              wrong: "Can I leave the door not lock?",
              correct: "Can I leave the door unlocked?",
              explanation: "用形容词 unlocked 更自然，表示门处于未上锁的状态。",
            },
            formalityVariants: {
              casual: "Tomorrow morning's fine. Gotta be home, or can I just leave it unlocked?",
              standard: "Tomorrow morning works. Do I need to be home, or can I leave the door unlocked?",
              formal:
                "Tomorrow morning would be acceptable. Is my presence required, or would it be permissible for me to simply leave the door unlocked?",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn: "You don't have to be there. I have a master key. I'll leave a note on the counter when I'm done.",
            textZh: "你不用在。我有万能钥匙。修好后我会在台面上留个条。",
            commonMistake: {
              wrong: "I have a universal key.",
              correct: "I have a master key.",
              explanation: "“Master key”是用于公寓或酒店的万能钥匙的常用说法。",
            },
            keyPhrases: [
              { en: "master key", zh: "万能钥匙" },
              { en: "leave a note", zh: "留个条" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nah, you're good. I've got a key. I'll just pop in, fix it, and leave you a note so you know it's done.",
                textZh: "不用，没事。我有钥匙。我进去修好，留个条告诉你修完了。",
                actionHint: "you're good = 没问题；pop in = 进来一下",
                frequency: "common",
              },
            ],
            casualVersion: "Nah, don't gotta be there. Got a master key. I'll just leave a note when I'm done.",
            formalityVariants: {
              casual: "Nope, you're good. I've got a key. I'll leave a note.",
              standard:
                "You don't have to be there. I have a master key. I'll leave a note on the counter when I'm done.",
              formal:
                "Your presence is not required. I possess a master key for access. I will ensure a note is left on the counter upon completion of the repair.",
            },
          },
        ],
      },
      {
        id: "maintenance-urgent",
        titleZh: "紧急报修",
        titleEn: "Urgent Maintenance",
        description: "处理紧急情况如水管爆裂",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This is an emergency! A pipe burst under the bathroom sink and water is flooding the floor.",
            textZh: "紧急情况！卫生间洗手台下面的水管爆了，水淹了一地。",
            casualVersion: "Hey, I've got a burst pipe under the bathroom sink — water's everywhere!",
            commonMistake: {
              wrong: "The pipe exploded under the bathroom sink.",
              correct: "A pipe burst under the bathroom sink.",
              explanation: "Exploded 过于夸张，burst 是水管破裂的常用词。",
            },
            formalityVariants: {
              casual: "Emergency! Pipe burst under the bathroom sink, water's flooding the floor.",
              standard: "This is an emergency! A pipe burst under the bathroom sink and water is flooding the floor.",
              formal:
                "Excuse me, I'm calling to report an urgent matter. A water pipe has burst beneath the bathroom sink, and there is significant water leakage onto the floor.",
            },
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn:
              "Okay, stay calm. First, turn off the shut-off valve under the sink — it's the knob on the pipe. Turn it clockwise to close it.",
            textZh: "好的，别慌。首先，关掉洗手台下面的截止阀——就是管子上的旋钮。顺时针拧关掉。",
            casualVersion: "Alright, chill. First, turn off the shut-off valve under the sink — it's the knob on the pipe. Clockwise to close it.",
            commonMistake: {
              wrong: "turn off the switch on the pipe",
              correct: "turn off the shut-off valve under the sink — it's the knob on the pipe",
              explanation: "“Shut-off valve”或“knob”是控制水流的关键部件的专业名称。",
            },
            formalityVariants: {
              casual: "Alright, chill. First, turn off the shut-off valve under the sink — the knob on the pipe. Clockwise to close.",
              standard: "Okay, stay calm. First, turn off the shut-off valve under the sink — it's the knob on the pipe. Turn it clockwise to close.",
              formal: "Understood. Please remain calm. Initially, locate and close the shut-off valve positioned beneath the sink. This is the rotational knob situated on the pipe. Rotate it clockwise to cease the water flow.",
            },
            keyPhrases: [
              { en: "shut-off valve", zh: "截止阀" },
              { en: "clockwise", zh: "顺时针" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, don't panic. There should be a valve right under the sink on the pipe — twist it to the right to shut the water off.",
                textZh: "好的，别慌。管子上应该有个阀门——往右拧就能关水了。",
                actionHint: "twist it to the right = 往右拧 = 顺时针",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I found it and turned it off. The water stopped, but the floor is soaked.",
            textZh: "好的，我找到了，关掉了。水停了，但地上全是水。",
            commonMistake: {
              wrong: "The floor is full of water.",
              correct: "The floor is soaked.",
              explanation: "“Soaked”更自然地描述地板被水完全浸湿的状态。",
            },
            formalityVariants: {
              casual: "Okay, found it, turned it off. Water stopped, but floor's soaked.",
              standard: "Okay, I found it and turned it off. The water stopped, but the floor is soaked.",
              formal: "Understood. I have successfully located and deactivated the valve. The water flow has ceased, however, the floor surface remains thoroughly saturated.",
            },
            casualVersion: "Got it, water's off now. But the floor is totally soaked.",
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn:
              "Good job. Use towels to soak up as much water as you can. I'm on my way — I'll be there in about 20 minutes.",
            textZh: "做得好。用毛巾尽量吸干水。我正赶过来——大概20分钟到。",
            casualVersion: "Nice. Grab some towels, soak up what you can. I'm on my way — be there in like 20.",
            commonMistake: {
              wrong: "I'm coming now.",
              correct: "I'm on my way.",
              explanation: "“I'm on my way”是表示正在前往某地的地道说法。",
            },
            formalityVariants: {
              casual: "Nice. Grab some towels, soak up what you can. I'm on my way — be there in like 20.",
              standard: "Good job. Use towels to soak up as much water as you can. I'm on my way — I'll be there in about 20 minutes.",
              formal: "Excellent work. Please utilize towels to absorb as much of the standing water as possible. I am currently en route and anticipate my arrival within approximately 20 minutes.",
            },
            keyPhrases: [
              { en: "soak up", zh: "吸干" },
              { en: "on my way", zh: "正赶过来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nice, you got it. Grab some towels and try to mop up what you can. I'm heading over now — give me like 20 minutes.",
                textZh: "好的，搞定了。拿些毛巾把水擦干。我现在过来——大约20分钟。",
                actionHint: "mop up = 擦干净",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Will this be covered by the landlord, or do I have to pay for the repair?",
            textZh: "这个费用是房东承担，还是我需要付维修费？",
            culturalNote: "在美国，房东负责公寓结构问题，个人物品损坏需租客保险。",
            commonMistake: {
              wrong: "Who will pay for the repair?",
              correct: "Will this be covered by the landlord, or do I have to pay for the repair?",
              explanation: "“Be covered by”是保险或责任承担的常用表达。",
            },
            formalityVariants: {
              casual: "Does the landlord cover this, or do I pay for the fix?",
              standard: "Will this be covered by the landlord, or do I have to pay for the repair?",
              formal: "I would appreciate clarification regarding liability for this repair. Will the cost be borne by the landlord, or am I responsible for the expenditure?",
            },
            casualVersion: "Am I on the hook for this, or is it the landlord's problem?",
          },
          {
            speaker: "them",
            role: "维修人员",
            textEn:
              "Pipe bursts are the landlord's responsibility. You won't be charged for the repair. If there's water damage to your personal belongings, that would go through your renter's insurance.",
            textZh: "水管爆裂是房东的责任。维修费不会找你收。如果你的个人物品有水损，那要走你的租客保险。",
            culturalNote: "美国租房合同通常会注明房东和租客的责任，以及是否需要租客保险",
            casualVersion: "Landlord's fault for pipe bursts. You won't pay for the fix. Personal stuff got water damaged? That's what renter's insurance is for.",
            commonMistake: {
              wrong: "If your personal items have water damage, that's what your home insurance is for.",
              correct: "If your personal items have water damage, that's what your renter's insurance is for.",
              explanation: "“Renter's insurance”是租客专用的保险，和“home insurance”不同。",
            },
            formalityVariants: {
              casual: "Landlord's fault for pipe bursts. You won't pay for the fix. Personal stuff got water damaged? That's what renter's insurance is for.",
              standard: "Pipe bursts are the landlord's responsibility. You won't be charged for the repair. If your personal items have water damage, that's what your renter's insurance is for.",
              formal: "Incidents involving burst pipes are typically the responsibility of the landlord. Therefore, you will not incur any charges for this repair. However, should your personal belongings sustain water damage, such claims would generally fall under your renter's insurance policy.",
            },
            keyPhrases: [
              { en: "landlord's responsibility", zh: "房东的责任" },
              { en: "renter's insurance", zh: "租客保险" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's on the landlord, don't worry. But if any of your stuff got damaged, you'd want to file a claim with your renter's insurance.",
                textZh: "那是房东的事，别担心。但如果你的东西被泡坏了，你得找租客保险理赔。",
                actionHint: "that's on the landlord = 那是房东负责的；file a claim = 提交理赔",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 交房租 ====================
  {
    id: "housing-rent-payment",
    category: "housing",
    titleZh: "交房租",
    titleEn: "Rent Payment",
    description: "与房东讨论房租支付方式、时间和相关问题",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "rent-payment-basic",
        titleZh: "基础交租",
        titleEn: "Basic Rent Payment",
        description: "了解交租方式和流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I wanted to ask about how to pay rent. Do you use any online payment platform?",
            textZh: "你好，我想问一下怎么交房租。你用网上支付平台吗？",
            culturalNote: "在美国租房，支付方式多样，除了支票或银行转账，Zelle等在线平台也日益普遍。",
            casualVersion: "Hey, how do you want me to pay rent? Venmo? Zelle?",
            commonMistake: {
              wrong: "Hi, I want to ask how to pay rent. Do you use online payment platform?",
              correct: "Hi, I wanted to ask about how to pay rent. Do you use any online payment platform?",
              explanation: "“want”不如“wanted to”礼貌；“online payment platform”前需加冠词。",
            },
            formalityVariants: {
              casual: "Hey, quick question about rent. You use any online payment apps?",
              standard: "Hi, I wanted to ask about how to pay rent. Do you use any online payment platform?",
              formal:
                "Good morning/afternoon. I would like to inquire about the preferred method for rent payment. Do you utilize any online payment platforms?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I use Zelle for rent payments. Just send it to my email address by the first of each month. You'll get a confirmation once it goes through.",
            textZh: "我用Zelle收租。每月1号之前发到我的邮箱就行。转账成功后你会收到确认。",
            keyPhrases: [
              { en: "Zelle", zh: "一种银行间转账工具" },
              { en: "by the first of each month", zh: "每月1号之前" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, just Zelle me the rent to my email before the first. Super easy — your bank probably has it built in.",
                textZh: "用Zelle转到我邮箱就行，每月1号之前。很简单——你的银行App里应该就有。",
                actionHint: "Zelle me = 用Zelle转给我",
                frequency: "common",
              },
            ],
            casualVersion:
              "I use Zelle for rent. Just Zelle it to my email by the first. You'll get a confirmation once it goes through.",
            culturalNote: "Zelle在美国很常用，像支付宝，但仅限银行账户间转账。",
            commonMistake: {
              wrong: "Just send it on my email by the first of each month.",
              correct: "Just send it to my email address by the first of each month.",
              explanation: "“send to email”表示发送到邮箱，“by the first”指1号之前。",
            },
            formalityVariants: {
              casual:
                "Zelle's what I use for rent. Just send it to my email by the first, and you'll get a confirmation.",
              standard:
                "I use Zelle for rent payments. Just send it to my email address by the first of each month. You'll get a confirmation once it goes through.",
              formal:
                "My preferred method for rent payments is Zelle. Please remit the payment to my email address by the first of each month. A confirmation will be issued upon successful transaction.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Can I set up automatic monthly payments?",
            textZh: "明白了。我能设置自动每月付款吗？",
            casualVersion: "Can I just set it up as auto-pay?",
            commonMistake: {
              wrong: "Got it. Can I set up fixed monthly payments?",
              correct: "Got it. Can I set up automatic monthly payments?",
              explanation: "“automatic”或“recurring”更自然，“fixed”强调金额固定。",
            },
            formalityVariants: {
              casual: "Gotcha. Can I set up auto payments each month?",
              standard: "Got it. Can I set up automatic monthly payments?",
              formal: "Understood. Would it be possible to arrange for automatic monthly payments?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Sure, you can set up recurring payments through your bank. Just make sure it's scheduled to arrive by the first, not sent on the first.",
            textZh: "当然可以，你可以在银行设置定期付款。只要确保是在1号之前到账，而不是1号才发出。",
            keyPhrases: [
              { en: "recurring payments", zh: "定期付款" },
              { en: "scheduled to arrive", zh: "安排到账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, auto-pay is fine. Just set it up a few days early so it actually hits by the first. Sometimes transfers take a day or two.",
                textZh: "好的，自动付款可以。提前几天设置，确保1号之前到账。有时转账需要一两天。",
                actionHint: "hits = 到账",
                frequency: "common",
              },
            ],
            culturalNote: "美国房租通常月初交，租约上写的due date是到账日期，不是发出日期。建议提前2-3天转账。",
            casualVersion:
              "Yeah, totally. Set up recurring payments via your bank. Just make sure it HITS my account by the first, don't send it ON the first.",
            commonMistake: {
              wrong: "Just make sure it's scheduled to arrive on the first, not sent on the first.",
              correct: "Just make sure it's scheduled to arrive by the first, not sent on the first.",
              explanation: "“by the first”强调1号或1号之前到账，“on the first”是指1号当天。",
            },
            formalityVariants: {
              casual:
                "Yep, you can do recurring payments through your bank. Just gotta make sure it gets to me by the first, not just sent *on* the first.",
              standard:
                "Sure, you can set up recurring payments through your bank. Just make sure it's scheduled to arrive by the first, not sent on the first.",
              formal:
                "Certainly, you may establish recurring payments through your banking institution. Please ensure the payment is scheduled to be received by the first of the month, rather than merely dispatched on that date.",
            },
          },
          {
            speaker: "you",
            textEn: "Will I receive a receipt each month?",
            textZh: "我每月会收到收据吗？",
            casualVersion: "Do you send receipts?",
            commonMistake: {
              wrong: "Will I receive an invoice each month?",
              correct: "Will I receive a receipt each month?",
              explanation: "“receipt”是收据，用于证明已付款；“invoice”是发票/账单，要求付款。",
            },
            formalityVariants: {
              casual: "Do I get a receipt monthly?",
              standard: "Will I receive a receipt each month?",
              formal: "Will I be provided with a monthly receipt?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I don't send paper receipts, but the Zelle transaction history serves as your proof of payment. If you need a formal receipt, just let me know and I'll email one.",
            textZh: "我不发纸质收据，但Zelle的交易记录就是你的付款证明。如果需要正式收据，告诉我一声，我发邮件给你。",
            keyPhrases: [
              { en: "proof of payment", zh: "付款证明" },
              { en: "formal receipt", zh: "正式收据" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The Zelle records should work as proof. But if you ever need a written receipt, just shoot me a text and I'll send one over.",
                textZh: "Zelle记录就可以当证明用。但如果你需要书面收据，发个短信给我，我给你发一份。",
                actionHint: "shoot me a text = 给我发条短信",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, no paper receipts. Zelle history's your proof. If you *really* need a formal one, just holler, I'll email it.",
            culturalNote: "美国数字支付常见电子记录作凭证，纸质收据不普遍。",
            commonMistake: {
              wrong: "the Zelle transaction history is your payment proof.",
              correct: "the Zelle transaction history serves as your proof of payment.",
              explanation: "“proof of payment”是固定搭配；“serves as”表达“充当，作为”更地道。",
            },
            formalityVariants: {
              casual:
                "No paper receipts. Your Zelle history is your proof. If you need a proper one, just tell me, I'll email it over.",
              standard:
                "I don't send paper receipts, but the Zelle transaction history serves as your proof of payment. If you need a formal receipt, just let me know and I'll email one.",
              formal:
                "Physical receipts are not issued; however, the Zelle transaction history functions as your official proof of payment. Should you require a formal receipt, please inform me, and I will promptly provide one via email.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. I'll set up the Zelle payment today. Thanks for explaining everything.",
            textZh: "好的。我今天就设置Zelle付款。谢谢你解释这些。",
            casualVersion: "Cool, I'll set it up today. Thanks!",
            commonMistake: {
              wrong: "Perfect. I'll set up the Zelle payment today. Thanks for your explanation.",
              correct: "Perfect. I'll set up the Zelle payment today. Thanks for explaining everything.",
              explanation: "“explaining everything”更自然口语，“your explanation”稍显正式。",
            },
            formalityVariants: {
              casual: "Awesome. I'll get that Zelle payment set up today. Thanks for running through all that.",
              standard: "Perfect. I'll set up the Zelle payment today. Thanks for explaining everything.",
              formal:
                "Excellent. I will arrange for the Zelle payment today. Thank you for thoroughly explaining the process.",
            },
          },
        ],
      },
      {
        id: "rent-payment-issue",
        titleZh: "租金问题",
        titleEn: "Rent Payment Issue",
        description: "处理租金迟交或涨价的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I'm really sorry, but I might be a few days late on rent this month. I'm waiting on a paycheck that's delayed.",
            textZh: "非常抱歉，这个月房租可能要晚几天。我在等一笔延迟的薪水。",
            culturalNote: "在美国，如果你可能会晚交房租，务必提前和房东沟通，而不是拖到最后一刻。",
            casualVersion: "Hey, heads up — rent might be a few days late. My paycheck got held up.",
            commonMistake: {
              wrong: "I'm waiting for a delayed paycheck.",
              correct: "I'm waiting on a paycheck that's delayed.",
              explanation: "“等待某物”用“wait on”更自然，尤其指等待某个特定结果。",
            },
            formalityVariants: {
              casual: "Super sorry, but rent's gonna be a few days late this month. My paycheck's delayed.",
              standard:
                "I'm really sorry, but I might be a few days late on rent this month. I'm waiting on a paycheck that's delayed.",
              formal:
                "I sincerely apologize, but I anticipate a slight delay in my rent payment this month. I am awaiting a payment that has been unexpectedly postponed.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I appreciate you letting me know in advance. How many days are we talking about? Remember, there's a five-day grace period.",
            textZh: "感谢你提前告诉我。大概几天？别忘了有5天宽限期。",
            culturalNote: "美国租房通常有几天宽限期（grace period），在此期间交租不会产生滞纳金。",
            casualVersion: "Appreciate you telling me upfront. How many days we talking? Don't forget there's a 5-day grace period.",
            formalityVariants: {
              casual: "Thanks for the heads-up. How many days? Remember, there's a 5-day grace period.",
              standard: "I appreciate you letting me know in advance. How many days are we talking about? Remember, there is a 5-day grace period.",
              formal: "I appreciate your proactive communication regarding this matter. Could you please specify the anticipated delay? Kindly recall that there is a five-day grace period for payment.",
            },
            keyPhrases: [
              { en: "in advance", zh: "提前" },
              { en: "grace period", zh: "宽限期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Thanks for the heads-up. How late are we talking? You've got five days before there's a late fee, so if it's within that, you're fine.",
                textZh: "谢谢提醒。大概晚多久？5天内没有滞纳金，如果在那之前就没事。",
                actionHint: "thanks for the heads-up = 谢谢提前告知",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It should be within the grace period — probably by the 3rd or 4th. I promise it won't happen again.",
            textZh: "应该在宽限期内——大概3号或4号。我保证不会再发生了。",
            commonMistake: {
              wrong: "It will not happen again.",
              correct: "I promise it won't happen again.",
              explanation: "直接说 'It will not happen again' 听起来过于生硬且像承诺机器，用 'I promise' 更自然。",
            },
            formalityVariants: {
              casual: "Should be within the grace period — probably by the 3rd or 4th. Promise it won't happen again.",
              standard: "It should be within the grace period — probably by the 3rd or 4th. I promise it won't happen again.",
              formal: "It should fall within the established grace period, likely by the 3rd or 4th. I assure you this will not recur.",
            },
            casualVersion: "Should be by the 3rd or 4th. Won't happen again, promise.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "That's fine then, no late fee. Just try to keep it consistent going forward. I rely on rent coming in on time for the mortgage.",
            textZh: "那没关系，不收滞纳金。以后尽量保持按时交。我也得靠租金按时还贷款。",
            culturalNote: "房东经常依赖租金支付房贷，所以按时交租对双方都很重要。",
            commonMistake: {
              wrong: "I rely rent coming in on time for the mortgage.",
              correct: "I rely on rent coming in on time for the mortgage.",
              explanation: "“Rely on” 是固定搭配，表示“依赖于”。",
            },
            casualVersion: "That's fine then, no late fee. Just try to keep it on time moving forward. I rely on rent for my mortgage too.",
            formalityVariants: {
              casual: "That's okay, no late fee then. Just try to be on time next time. I need the rent for my mortgage too.",
              standard: "That's fine then, so no late fee. Please try to maintain timely payments going forward. I also rely on the rent for my mortgage payments.",
              formal: "In that case, a late fee will not be applied. However, I kindly request that future payments be submitted promptly. I too depend on rental income to meet my mortgage obligations.",
            },
            keyPhrases: [
              { en: "no late fee", zh: "不收滞纳金" },
              { en: "mortgage", zh: "贷款/房贷" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No worries this time. Just try to stay on track — I've got a mortgage to cover, so I need it to be predictable.",
                textZh: "这次没关系。以后尽量按时——我有房贷要还，需要稳定的收入。",
                actionHint: "stay on track = 按计划来",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely. By the way, I heard there might be a rent increase. Is that true?",
            textZh: "当然。对了，我听说可能要涨租？是真的吗？",
            commonMistake: {
              wrong: "I heard rent will increase?",
              correct: "I heard there might be a rent increase. Is that true?",
              explanation: "直接问 'Rent will increase?' 太直接，用 'might be' 或 'is that true?' 听起来更委婉。",
            },
            formalityVariants: {
              casual: "BTW, heard rent might go up. True?",
              standard: "Absolutely. By the way, I heard there might be a rent increase. Is that true?",
              formal: "Certainly. On another note, I've received information suggesting a potential rent increase. Could you confirm if this is accurate?",
            },
            casualVersion: "For sure. Oh, and is it true rent's going up?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "When your lease renews, there will be a 3% increase. Property taxes went up, so I have to adjust. I'll give you 60 days' written notice before any change.",
            textZh: "租约续签时会涨3%。房产税涨了，我不得不调整。在任何变动之前我会提前60天书面通知你。",
            commonMistake: {
              wrong: "Property tax increased.",
              correct: "Property taxes went up.",
              explanation: "“went up”口语中更自然，表示“上涨”；“increased”略显正式。",
            },
            casualVersion: "When your lease renews, there'll be a 3% increase. Property taxes went up, so gotta adjust. I'll give you 60 days' written notice before any changes.",
            culturalNote: "在美国，房东涨租通常需要提前提供书面通知（通常是30天或60天），并不能随意涨价。",
            formalityVariants: {
              casual: "Your lease renewal will come with a 3% increase. Property taxes went up, so I had to adjust. I'll send you 60 days' written notice before any changes.",
              standard: "When your lease renews, there will be a 3% increase. Property taxes went up, so I have to adjust. I will provide you with 60 days' written notice before any changes take effect.",
              formal: "Upon the renewal of your lease, a three percent increase will be implemented. This adjustment is necessitated by an increase in property taxes. I will furnish you with sixty days' written notification prior to the enactment of any changes.",
            },
            keyPhrases: [
              { en: "rent increase", zh: "租金上涨" },
              { en: "written notice", zh: "书面通知" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, when your lease is up for renewal, it'll go up about 3%. Taxes went up on my end. But don't worry — I'll let you know well ahead of time.",
                textZh: "是的，续约的时候会涨大概3%。我这边税涨了。但别担心——我会提前很久通知你。",
                actionHint: "up for renewal = 到了续约的时候；well ahead of time = 提前很久",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 7. 噪音投诉 ====================
  {
    id: "housing-neighbor-noise",
    category: "housing",
    titleZh: "噪音投诉",
    titleEn: "Noise Complaint",
    description: "与邻居沟通噪音问题，友好地提出投诉",
    otherRole: "邻居",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "noise-basic",
        titleZh: "友好沟通",
        titleEn: "Friendly Request",
        description: "礼貌地与邻居沟通噪音问题",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I'm your neighbor from next door. I'm sorry to bother you, but I was wondering if you could keep the music down a bit? I can hear it through the walls.",
            textZh: "你好，我是隔壁的邻居。不好意思打扰了，能不能把音乐声调小一点？我隔着墙都能听到。",
            culturalNote: "与邻居沟通直入主题即可，无需过多客套",
            casualVersion:
              "Hey, I'm next door. Sorry to bug you, but could you turn the music down a little? It's pretty loud through the wall.",
            commonMistake: {
              wrong: "Can you turn down the music?",
              correct: "I was wondering if you could keep the music down a bit?",
              explanation: "I was wondering if... 更委婉客气，而 Can you... 可能显得有点直接。",
            },
            formalityVariants: {
              casual:
                "Hey, neighbor. Sorry to bug ya, but could you maybe turn the music down a little? I can totally hear it through the walls.",
              standard:
                "Hi, I'm your neighbor from next door. I'm sorry to bother you, but I was wondering if you could keep the music down a bit? I can hear it through the walls.",
              formal:
                "Good evening. My apologies for the interruption, but as your adjacent resident, I must request that you consider lowering the volume of your music. The sound unfortunately permeates the shared walls.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh, I'm so sorry! I had no idea it was that loud. I'll turn it down right now.",
            textZh: "哦，太抱歉了！我不知道声音那么大。我现在就调小。",
            commonMistake: {
              wrong: "I am so sorry, I will turn it down now.",
              correct: "Oh, I'm so sorry! I'll turn it down right now.",
              explanation: "“I'll” 比 “I will” 更自然， “right now” 强调立刻行动。",
            },
            keyPhrases: [
              { en: "had no idea", zh: "不知道" },
              { en: "turn it down", zh: "调小" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh man, my bad! I didn't realize it was coming through the walls. Let me lower it.",
                textZh: "哦天，我的错！我不知道隔墙能听到。我调小声。",
                actionHint: "my bad = 我的错（很常用的口语道歉）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, shoot, my bad! Didn't realize it was blasting. I'll totally turn it down, like, right now.",
            formalityVariants: {
              casual: "Oops, my bad! Didn't realize it was so loud. Turning it down now.",
              standard: "Oh, I'm so sorry! I had no idea it was that loud. I'll turn it down right now.",
              formal:
                "My sincerest apologies! I was entirely unaware of the volume. I shall rectify the situation immediately.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you, I really appreciate it. The walls are pretty thin in this building.",
            textZh: "谢谢，非常感谢。这栋楼的墙壁隔音不太好。",
            commonMistake: {
              wrong: "Thank you very much. The walls are not thick in this building.",
              correct: "Thank you, I really appreciate it. The walls are pretty thin in this building.",
              explanation: "“thin” 是描述隔音差更自然的表达， “not thick” 听起来不地道。",
            },
            casualVersion: "Thanks so much. Yeah, these walls are paper thin.",
            formalityVariants: {
              casual: "Thanks, really appreciate it. Walls in this place are super thin.",
              standard: "Thank you, I really appreciate it. The walls are pretty thin in this building.",
              formal:
                "I truly appreciate your understanding and cooperation. It appears the structural design of this edifice results in rather poor sound insulation.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn:
              "Yeah, I've noticed that too. I'll try to use headphones in the evenings from now on. What time do you usually go to bed?",
            textZh: "是的，我也注意到了。以后晚上我尽量用耳机。你一般几点睡？",
            commonMistake: {
              wrong: "What time do you usually sleep?",
              correct: "What time do you usually go to bed?",
              explanation: "“go to bed” 是问睡觉时间的自然表达， “sleep” 听起来像问什么时候处于睡眠状态。",
            },
            keyPhrases: [
              { en: "use headphones", zh: "用耳机" },
              { en: "from now on", zh: "从现在起" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Tell me about it — I can hear stuff from your side too sometimes. I'll switch to headphones at night. What time's your bedtime usually?",
                textZh: "就是说啊——我有时也能听到你那边的声音。晚上我改用耳机。你一般几点睡觉？",
                actionHint: "tell me about it = 可不是嘛（表示同感）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, for sure, same here. I'll just use headphones at night then. So, what time d'you usually hit the hay?",
            formalityVariants: {
              casual: "Totally, I've noticed. I'll just stick to headphones at night. What time do you crash?",
              standard:
                "Yeah, I've noticed that too. I'll try to use headphones in the evenings from now on. What time do you usually go to bed?",
              formal:
                "Indeed, I have observed the same. I will endeavor to utilize headphones during the evening hours henceforth. May I inquire as to your typical bedtime?",
            },
          },
          {
            speaker: "you",
            textEn: "Usually around 10:30. I have to get up early for work.",
            textZh: "通常10点半左右。我得早起上班。",
            casualVersion: "Around 10:30. Gotta be up early for work.",
            commonMistake: {
              wrong: "I need get up early for work.",
              correct: "I have to get up early for work.",
              explanation: "“need”后接动词原形时通常需要加“to”；表示义务用“have to”更地道。",
            },
            formalityVariants: {
              casual: "Like, 10:30ish. Gotta be up early for work.",
              standard: "Usually around 10:30. I have to get up early for work.",
              formal: "My usual bedtime is approximately 10:30 PM, as my work schedule necessitates an early start.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn:
              "Got it. I'll make sure to keep it quiet after 10. And if it's ever too loud again, just knock on the wall or text me. Here's my number.",
            textZh: "明白了。10点以后我保证安静。如果以后还是太吵，你就敲敲墙或者发短信给我。这是我的号码。",
            keyPhrases: [
              { en: "knock on the wall", zh: "敲墙" },
              { en: "text me", zh: "发短信给我" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem, I'll keep it down after 10. Seriously, if I'm ever too loud, just bang on the wall — I won't take it personally. Or here, take my number.",
                textZh: "没问题，10点以后我安静。说真的，如果我太吵，直接敲墙——我不会介意的。或者加我号码。",
                actionHint: "bang on the wall = 使劲敲墙；won't take it personally = 不会介意",
                frequency: "common",
              },
            ],
            culturalNote:
              "在美国，邻里之间的噪音问题通常先友好沟通。如果多次沟通无效，才考虑向物业或房东投诉。直接报警一般是最后手段。",
            casualVersion:
              "Gotcha. I'll keep it down after 10, promise. And seriously, if it ever gets too loud, just bang on the wall or shoot me a text. Here's my number.",
            commonMistake: {
              wrong: "If it too loud again, just knock the wall or send message to me.",
              correct: "And if it's ever too loud again, just knock on the wall or text me.",
              explanation: "“too loud”前需“is”，“ever”表“任何时候”，“knock on the wall”是固定搭配，“text me”更自然。",
            },
            formalityVariants: {
              casual:
                "Gotcha. I'll keep it down after 10. Seriously, if it gets loud, just bang on the wall or text me. My number's here.",
              standard:
                "Got it. I'll make sure to keep it quiet after 10. And if it's ever too loud again, just knock on the wall or text me. Here's my number.",
              formal:
                "Understood. I will ensure quietude after 10 PM. Should the volume ever become excessive again, please feel free to signal me by knocking on the wall or by sending a text message. My contact number is as follows.",
            },
          },
        ],
      },
      {
        id: "noise-escalation",
        titleZh: "问题升级",
        titleEn: "Escalating the Issue",
        description: "多次沟通无效后的进一步处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Look, this is the third time this week. It's past midnight and the music is blasting again. I've asked you nicely before.",
            textZh: "听着，这是这周第三次了。都过了午夜了，音乐又开得很大声。我之前已经好好跟你说过了。",
            culturalNote: "美国邻里矛盾升级时可能联系公寓管理方或警察",
            casualVersion:
              "Dude, this is the third time this week. It's after midnight and I can't sleep with all that noise.",
            commonMistake: {
              wrong: "Your music is too loud.",
              correct: "The music is blasting again.",
              explanation: "直接说“你的音乐太吵”可能显得不够委婉，说“音乐又开得很大声”更专注于问题本身。",
            },
            formalityVariants: {
              casual: "Look, third time this week. Past midnight, music's blasting again. I've asked nicely before.",
              standard:
                "Look, this is the third time this week. It's past midnight and the music is blasting again. I've asked you nicely before.",
              formal:
                "Excuse me, but this marks the third occasion this week. It is well past midnight, and the music volume is excessive once more. I have previously made polite requests regarding this matter.",
            },
          },
          {
            speaker: "them",
            role: "邻居",
            textEn:
              "I'm sorry, I have friends over. We got a little carried away. Give us 10 minutes and we'll quiet down.",
            textZh: "抱歉，有朋友来了。我们有点忘乎所以了。给我们10分钟，马上安静。",
            casualVersion: "Oops, sorry. Had some friends over. Got a bit carried away. Give us 10, we'll quiet down right away.",
            commonMistake: {
              wrong: "I'm sorry, friends came to visit.",
              correct: "I'm sorry, friends came over.",
              explanation: "“came over” 更自然地表达了朋友来家里做客。",
            },
            formalityVariants: {
              casual: "Oops, sorry. Had friends over. Got a bit carried away. Give us 10, we'll quiet down right away.",
              standard: "I'm sorry, friends came over. We got a little carried away. Give us 10 minutes, we'll quiet down immediately.",
              formal: "My apologies. I had guests, and we regrettably became somewhat exuberant. Kindly allow us ten minutes to restore tranquility.",
            },
            keyPhrases: [
              { en: "got carried away", zh: "忘乎所以了" },
              { en: "quiet down", zh: "安静下来" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, sorry about that. We're wrapping up — everyone's about to leave. It'll be quiet in a few.",
                textZh: "是，不好意思。我们要结束了——大家马上走。一会儿就安静了。",
                actionHint: "wrapping up = 要结束了；in a few = 一会儿",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I really hope so. If this keeps happening, I'll have to talk to the building manager about it.",
            textZh: "我真心希望如此。如果再这样下去，我不得不找物业经理反映了。",
            commonMistake: {
              wrong: "If this keeps happening, I will find the manager.",
              correct: "If this keeps happening, I'll have to involve the building manager.",
              explanation: "“involve” 更委婉地表达寻求帮助， “building manager” 是具体职位。",
            },
            formalityVariants: {
              casual: "Hope so. If this keeps up, I'll have to get the building manager involved.",
              standard: "I really hope so. If this keeps happening, I'll have to involve the building manager.",
              formal: "I sincerely hope this will be the case. Should this situation persist, I will regrettably be compelled to notify the building management.",
            },
            casualVersion: "I hope so. I'm gonna have to go to the building manager if this keeps up.",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "You're right, and I'm sorry. It won't happen again. We'll take it somewhere else next time.",
            textZh: "你说得对，抱歉。不会再发生了。下次我们去别的地方聚。",
            casualVersion: "You're right, my bad. Won't happen again. Next time we'll go somewhere else.",
            commonMistake: {
              wrong: "You are right. It will not happen again.",
              correct: "You're right, I apologize. It won't happen again.",
              explanation: "“won't” 比 “will not” 更自然，口语中常用 “my bad” 或 “I apologize”。",
            },
            formalityVariants: {
              casual: "You're right, my bad. Won't happen again. Next time we'll go somewhere else.",
              standard: "You're right, I apologize. It won't happen again. Next time we'll go somewhere else.",
              formal: "Indeed, you are correct, and I offer my sincerest apologies. I can assure you this will not recur. We will arrange to socialize at an alternative venue in the future.",
            },
            keyPhrases: [
              { en: "won't happen again", zh: "不会再发生了" },
              { en: "take it somewhere else", zh: "换个地方" },
            ],
            alternativeExpressions: [
              {
                textEn: "Fair enough, my bad. I'll keep it down from now on. If we wanna hang, we'll go out instead.",
                textZh: "说得对，我的错。以后会注意的。想聚会的话我们出去。",
                actionHint: "fair enough = 说得对/合理；wanna hang = 想聚会",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I don't want this to be awkward between us. I just need to sleep.",
            textZh: "谢谢。我不想因此搞得我们之间尴尬。我只是需要睡觉。",
            culturalNote: "美国人倾向于在冲突后表达保持友好关系的愿望",
            commonMistake: {
              wrong: "I don't want to make our relationship bad.",
              correct: "I don't want this to be awkward between us.",
              explanation: "“awkward” 更准确地描述了这种不舒服的社交气氛。",
            },
            formalityVariants: {
              casual: "Thanks. Don't want things weird between us. Just need some sleep.",
              standard: "Thank you. I don't want this to be awkward between us. I just need to get some sleep.",
              formal: "Thank you. It is my hope that this incident does not create any lasting discomfort between us. My primary concern is simply obtaining adequate rest.",
            },
            casualVersion: "Thanks. Nothing personal — I just really need my sleep.",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "No hard feelings. I totally get it. I'd be annoyed too. We're good.",
            textZh: "没事，我完全理解。换了我也会烦。我们没问题。",
            casualVersion: "No hard feelings. Totally get it. I'd be annoyed too. We're good.",
            culturalNote: "“No hard feelings” 表达了不记仇，是常用习语。",
            commonMistake: {
              wrong: "No bad feelings.",
              correct: "No hard feelings.",
              explanation: "“no hard feelings” 是固定表达，意为不记仇，没有芥蒂。",
            },
            formalityVariants: {
              casual: "No hard feelings. Totally get it. I'd be annoyed too. We're good.",
              standard: "No hard feelings. I totally get it. I'd be annoyed too. We're cool.",
              formal: "There are no hard feelings on my part. I fully comprehend your position; I would undoubtedly share your irritation under similar circumstances. We are entirely amiable.",
            },
            keyPhrases: [
              { en: "no hard feelings", zh: "不会介意的" },
              { en: "we're good", zh: "我们没事" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're cool, don't worry about it. I get it — I'd be banging on the wall too if I were you. Sorry again.",
                textZh: "没事的，别担心。我理解——换了我也会敲墙的。再次抱歉。",
                actionHint: "we're cool = 我们没事（口语）",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 8. 退租搬离 ====================
  {
    id: "housing-move-out",
    category: "housing",
    titleZh: "退租搬离",
    titleEn: "Move-out",
    description: "通知房东搬离、完成退租检查并讨论押金退还",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "move-out-basic",
        titleZh: "基础退租",
        titleEn: "Basic Move-out",
        description: "通知房东搬离并了解退租流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I wanted to let you know that I won't be renewing my lease. My last day will be June 30th.",
            textZh: "你好，我想通知你我不会续租了。最后一天是6月30日。",
            culturalNote: "美国租赁通常需提前通知，且措辞会比较直接，无需过多铺垫。",
            casualVersion: "Hey, just giving you a heads-up — I'm moving out at the end of June.",
            commonMistake: {
              wrong: "I will not renew my lease.",
              correct: "I wanted to let you know that I won't be renewing my lease.",
              explanation: "“I wanted to” 比 “I will” 或 “I want to tell you” 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey, just letting you know I won't be renewing my lease. Last day's June 30th.",
              standard:
                "Hi, I wanted to let you know that I won't be renewing my lease. My last day will be June 30th.",
              formal:
                "Good morning/afternoon, I am writing to inform you that I will not be renewing my lease agreement. My tenancy will conclude on June 30th.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Thanks for letting me know. I'll need that in writing — just a quick email is fine. And we'll need to schedule a move-out inspection.",
            textZh: "谢谢通知。我需要书面通知——发个邮件就行。然后我们需要安排退租检查。",
            keyPhrases: [
              { en: "in writing", zh: "书面的" },
              { en: "move-out inspection", zh: "退租检查" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, got it. Can you shoot me an email to make it official? And let's set up a walk-through for your last day.",
                textZh: "好的，知道了。能发个邮件正式通知一下吗？然后你最后一天我们做个检查。",
                actionHint: "make it official = 正式化；walk-through = 逐项检查",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks for the heads-up. Just shoot me an email, that's fine. We'll also need to set up a move-out inspection.",
            culturalNote: "在美国，退租等重要通知需书面形式以留记录，口头无效。",
            commonMistake: {
              wrong: "I need a written notice.",
              correct: "I'll need that in writing.",
              explanation: "“in writing” 是指“书面形式”，比“written notice”更常用。",
            },
            formalityVariants: {
              casual:
                "Got it, thanks. Just shoot me an email, that works. We'll also need to set up a move-out inspection.",
              standard:
                "Thanks for letting me know. I'll need that in writing — just a quick email is fine. And we'll need to schedule a move-out inspection.",
              formal:
                "Thank you for the notification. I will require formal written confirmation, an email will suffice. Additionally, we will need to arrange a comprehensive move-out inspection.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll send that today. What do I need to do before I move out?",
            textZh: "好的，我今天就发。搬走之前我需要做什么？",
            casualVersion: "Will do. What do I need to take care of before I go?",
            commonMistake: {
              wrong: "What I need to do before moving out?",
              correct: "What do I need to do before I move out?",
              explanation: "疑问句需要助动词 “do/does/did”，注意语序。",
            },
            formalityVariants: {
              casual: "Okay, I'll send it today. What all should I do before I leave?",
              standard: "Sure, I'll send that today. What do I need to do before I move out?",
              formal:
                "Certainly, I will send that email today. Could you please outline the necessary procedures or requirements for my departure?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Clean the apartment thoroughly, fill any nail holes in the walls, and make sure all your belongings are out. Leave the keys on the kitchen counter.",
            textZh: "把公寓彻底打扫干净，墙上的钉孔填补好，确保所有个人物品都搬走。钥匙留在厨房台面上。",
            keyPhrases: [
              { en: "clean thoroughly", zh: "彻底打扫" },
              { en: "fill any nail holes", zh: "填补钉孔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just give the place a good cleaning, patch up any holes, and clear everything out. Drop the keys on the counter on your way out.",
                textZh: "好好打扫一下，补好洞，把东西都搬走。走的时候把钥匙放在台面上。",
                actionHint: "give it a good cleaning = 好好打扫一下；on your way out = 走的时候",
                frequency: "common",
              },
            ],
            casualVersion:
              "Clean the place really well, patch up any nail holes, and get all your stuff out. Just leave the keys on the kitchen counter.",
            culturalNote: "美国退租时通常要求修补墙上所有钉孔，以防押金被扣。",
            commonMistake: {
              wrong: "Clean the apartment very clean.",
              correct: "Clean the apartment thoroughly.",
              explanation: "“thoroughly” 指彻底地；“belongings” 比 “things” 更正式，指个人物品。",
            },
            formalityVariants: {
              casual:
                "Just give the place a good clean, patch up any nail holes, and clear out all your stuff. Leave the keys on the kitchen counter.",
              standard:
                "Clean the apartment thoroughly, fill any nail holes in the walls, and make sure all your belongings are out. Leave the keys on the kitchen counter.",
              formal:
                "Please ensure the apartment is thoroughly cleaned, all nail holes in the walls are filled, and all personal possessions have been removed. Kindly leave the keys on the kitchen counter upon vacating.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I also cancel the utilities, or will you take care of that?",
            textZh: "水电煤我也需要取消吗，还是你来处理？",
            culturalNote: "在美国，通常租客负责取消或转移自己的电力和网络服务。水和垃圾费则视合同而定。",
            casualVersion: "Do I need to cancel utilities, or is that on you?",
            commonMistake: {
              wrong: "I cancel the utilities?",
              correct: "Should I also cancel the utilities?",
              explanation: "问句语序要正确， “cancel” 比 “turn off” 更指终止服务。",
            },
            formalityVariants: {
              casual: "Do I need to cancel utilities too, or will you handle them?",
              standard: "Should I also cancel the utilities, or will you take care of that?",
              formal: "Am I responsible for canceling the utility services, or will you be managing that process?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "You'll need to call the electric company and the internet provider to cancel or transfer service. Water and trash are included in my account, so I'll handle those.",
            textZh: "你需要打电话给电力公司和网络供应商取消或转移服务。水费和垃圾费在我的账户下，我来处理。",
            keyPhrases: [
              { en: "cancel or transfer", zh: "取消或转移" },
              { en: "handle those", zh: "来处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Electric and internet are in your name, so you gotta cancel those. Water and trash are on me — I'll take care of it.",
                textZh: "电费和网费是你的名字，所以你得取消。水费和垃圾费是我的——我来搞定。",
                actionHint: "in your name = 在你名下；on me = 我负责",
                frequency: "common",
              },
            ],
            casualVersion:
              "You gotta call the electric and internet companies to cancel or transfer service. Water and trash are on my account, so I'll deal with those.",
            culturalNote: "美国租房水电费分摊方式多样，常有租客负责电网，房东负责水垃圾。",
            commonMistake: {
              wrong: "You need to call the electricity company and network company.",
              correct: "You'll need to call the electric company and the internet provider.",
              explanation: "“electric company” 和 “internet provider” 是更地道的说法。",
            },
            formalityVariants: {
              casual:
                "Just call the electric and internet guys to switch or stop service. Water and trash are covered by me, so I'll take care of 'em.",
              standard:
                "You'll need to call the electric company and the internet provider to cancel or transfer service. Water and trash are included in my account, so I'll handle those.",
              formal:
                "Kindly contact the electric company and your internet service provider to either cancel or transfer your accounts. The water and trash services are registered under my account, which I will manage directly.",
            },
          },
        ],
      },
      {
        id: "move-out-inspection",
        titleZh: "退租检查",
        titleEn: "Move-out Inspection",
        description: "与房东一起做退租检查",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Alright, let's walk through the apartment. I'll compare the condition now to the move-in checklist we did together.",
            textZh: "好的，我们来检查公寓。我会把现在的状况和我们当时一起做的搬入清单对比。",
            culturalNote: "美国租房时，房东和租客通常会共同完成一份“入住清单”，记录公寓状况，退租时以此为依据检查。",
            commonMistake: {
              wrong: "We compare with the move-in list.",
              correct: "I'll compare its current condition with the move-in checklist.",
              explanation: "直接说“比较清单”不自然，需要明确比较的是什么，以及是“和清单对比”。",
            },
            keyPhrases: [
              { en: "walk through", zh: "逐项检查" },
              { en: "move-in checklist", zh: "搬入清单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Okay, let me go room by room and check everything against the original move-in report.",
                textZh: "好，让我一个房间一个房间检查，跟原来的搬入报告对比。",
                actionHint: "check against = 对照检查",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, let's just walk through the place. I'll compare how it looks now to that move-in checklist we did.",
            formalityVariants: {
              casual: "Alright, let's just go through the apartment. I'll compare it to that move-in checklist.",
              standard:
                "Alright, let's walk through the apartment. I'll compare the condition now to the move-in checklist we did together.",
              formal:
                "Very well, let us proceed with the inspection of the premises. I will be comparing its current state with the initial move-in checklist.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I cleaned everything and patched the nail holes. The only thing is a small stain on the living room carpet that wouldn't come out.",
            textZh: "我都打扫了，钉孔也补好了。唯一的问题是客厅地毯上有个小污渍怎么也去不掉。",
            commonMistake: {
              wrong: "A small stain can't clean out.",
              correct: "A small stain... that wouldn't come out.",
              explanation: "“clean out”是清理内部，指污渍“洗不掉”用“come out”更自然。",
            },
            formalityVariants: {
              casual: "I cleaned and patched everything. Just this one small stain on the living room carpet I couldn't get out.",
              standard: "I cleaned everything and patched the nail holes. The only thing is a small stain on the living room carpet that wouldn't come out.",
              formal: "I have completed all cleaning and patched the nail holes. The only issue remaining is a small, unremovable stain on the living room carpet.",
            },
            casualVersion:
              "Everything's cleaned up and holes are patched. There's just this one carpet stain I couldn't get out.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Let me see. It's pretty small — I'll count that as normal wear and tear. The rest of the apartment looks good.",
            textZh: "我看看。挺小的——我算作正常磨损吧。公寓其他地方看起来都不错。",
            casualVersion: "Lemme see. Eh, it's pretty tiny – I'll just chalk that up to normal wear and tear. Rest of the place looks good.",
            culturalNote: "美国法律通常区分“正常磨损”（normal wear and tear）和“损坏”（damage）。房东不能因为正常磨损",
            commonMistake: {
              wrong: "It is normal wear and tear.",
              correct: "I'll count it as normal wear and tear.",
              explanation: "描述房东“接受”某物为正常磨损时，用“count/consider it as”或“classify it as”更自然。",
            },
            formalityVariants: {
              casual: "Let me look. It's minor, I'll call it normal wear and tear. The apartment's otherwise great.",
              standard: "Let me see. It's pretty small - I'll count it as normal wear and tear. The rest of the apartment looks good.",
              formal: "Allow me to observe. It is quite minor, and I will categorize it as normal wear and tear. The remainder of the apartment appears to be in excellent condition.",
            },
            keyPhrases: [
              { en: "wear and tear", zh: "正常磨损" },
              { en: "looks good", zh: "看起来不错" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hmm, that's minor. I'm not gonna ding you for that — it's just normal use. Place looks great otherwise.",
                textZh: "嗯，很小。我不会为这个扣你钱的——正常使用。其他地方都很好。",
                actionHint: "ding you for that = 为此扣你钱",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thanks. So when can I expect to receive my deposit back?",
            textZh: "太好了，谢谢。那押金大概什么时候能拿回来？",
            commonMistake: {
              wrong: "When I can get my deposit back?",
              correct: "So when can I expect to receive my deposit back?",
              explanation: "缺少“expect to receive”显得不礼貌，且表达不完整。英文问句需要倒装。",
            },
            formalityVariants: {
              casual: "Awesome, thanks. So, when's my deposit coming back?",
              standard: "Great, thanks. So when can I expect to receive my deposit back?",
              formal: "Excellent, thank you. Could you please inform me of the estimated timeframe for the return of my security deposit?",
            },
            casualVersion: "Awesome. So when do I get my deposit back?",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I'll mail you a check within two weeks. Based on today's inspection, you should get the full deposit back — no deductions.",
            textZh: "两周内我会寄支票给你。根据今天的检查，你应该能拿回全额押金——不扣任何费用。",
            casualVersion: "I'll shoot you a check within two weeks. Based on today's walk-through, you should get your full deposit back – no deductions.",
            culturalNote: "在美国，退还押金通常通过邮寄支票，且有法定时限（各州不同，通常14-30天）。",
            commonMistake: {
              wrong: "You will get full deposit, no reduce.",
              correct: "You should get your full deposit back – no deductions.",
              explanation: "“reduce”是减少，这里用“deductions”（扣除）更准确。且需用“get back”表示“拿回”。",
            },
            formalityVariants: {
              casual: "I'll mail a check within a couple weeks. Looks like you'll get your full deposit back, no money taken out.",
              standard: "I'll mail you a check within two weeks. Based on today's inspection, you should get your full deposit back – no deductions.",
              formal: "I will process and mail a check to you within two weeks. Based on the findings of today's inspection, you are expected to receive your full security deposit, without any deductions.",
            },
            keyPhrases: [
              { en: "full deposit", zh: "全额押金" },
              { en: "no deductions", zh: "不扣费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You'll get a check in the mail within a couple of weeks. Everything looks clean, so you're getting the whole thing back.",
                textZh: "两周内你会收到寄来的支票。一切都很干净，全额退还。",
                actionHint: "the whole thing = 全额",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate that. Here are all the keys. It's been a great place to live.",
            textZh: "谢谢。这是所有的钥匙。住在这里很愉快。",
            commonMistake: {
              wrong: "It was happy to live here.",
              correct: "It was a pleasure living here.",
              explanation: "“It was happy to live here”不地道。表达“住得愉快”常用“It was a pleasure living here”或“I enjoyed living here”。",
            },
            formalityVariants: {
              casual: "Thanks! Here's all the keys. It was good living here.",
              standard: "I appreciate that. Here are all the keys. It was a pleasure living here.",
              formal: "I truly appreciate that. Here are all the keys. It has been a pleasure residing in this property.",
            },
            casualVersion: "Thanks! Here are the keys. It's been a great spot.",
          },
        ],
      },
    ],
  },

  // ==================== 9. 看独栋房 ====================
  {
    id: "housing-house-tour",
    category: "housing",
    titleZh: "看独栋房",
    titleEn: "House Tour",
    description: "跟着经纪人看独栋出租房，了解院子、车库和周边社区",
    otherRole: "经纪人",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "house-tour-basic",
        titleZh: "基础看房",
        titleEn: "Basic House Tour",
        description: "参观独栋房的主要区域",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Welcome to the property! This is a three-bedroom, two-bath house with a two-car garage. Let's start with the front yard.",
            textZh: "欢迎来看这套房子！这是一栋三室两卫的房子，带双车位车库。我们从前院开始看。",
            casualVersion: "Hey, welcome to the place! It's a 3-bed, 2-bath with a two-car garage. Let's start with the front yard.",
            culturalNote: "美国看房时直入主题，无需客套。",
            formalityVariants: {
              casual: "Hey, welcome to the place! It's a 3-bed, 2-bath with a two-car garage. Let's start with the front.",
              standard: "Welcome to the property! This is a three-bedroom, two-bathroom house with a two-car garage. Let's begin with the front yard.",
              formal: "Good afternoon and welcome to the property. This residence features three bedrooms, two bathrooms, and a two-car garage. Shall we commence our tour with the front yard?",
            },
            keyPhrases: [
              { en: "three-bedroom, two-bath", zh: "三室两卫" },
              { en: "two-car garage", zh: "双车位车库" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here we are! It's a 3-bed, 2-bath with a two-car garage. Nice curb appeal, right? Come on in.",
                textZh: "到了！三室两卫，双车库。外观不错吧？请进。",
                actionHint: "curb appeal = 从路边看过去的外观吸引力",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It looks great from the outside. How big is the backyard?",
            textZh: "从外面看很棒。后院有多大？",
            commonMistake: {
              wrong: "How big is backyard?",
              correct: "How big is the backyard?",
              explanation: "中文没有冠词，'the'常被忽略。指特定后院需加定冠词。",
            },
            casualVersion: "Nice! How big's the backyard?",
            formalityVariants: {
              casual: "Looks good from outside. Backyard size?",
              standard: "It looks great from the outside. How big is the backyard?",
              formal:
                "It presents very well from the exterior. Could you tell me about the dimensions of the backyard?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "The backyard is about a quarter acre — fully fenced. There's a patio area that's perfect for barbecues and a small tool shed in the corner.",
            textZh: "后院大约四分之一英亩——全围栏。有一个露台区域，很适合烧烤，角落里有个小工具棚。",
            culturalNote: "美国常用英亩(acre)做土地面积单位，1英亩约4047平方米。",
            keyPhrases: [
              { en: "fully fenced", zh: "全围栏" },
              { en: "patio", zh: "露台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Pretty good size — quarter acre, all fenced in. You've got a patio for grilling and a little shed out back for storage.",
                textZh: "面积不小——四分之一英亩，全围起来了。有个露台可以烤肉，后面还有个小棚子放东西。",
                actionHint: "fenced in = 用围栏围起来；grilling = 烧烤",
                frequency: "common",
              },
            ],
            casualVersion:
              "Backyard's about a quarter acre, fully fenced. Got a patio, perfect for BBQs, and a small tool shed tucked in the corner.",
            formalityVariants: {
              casual:
                "Backyard's about a quarter acre, fully fenced. Has a patio, good for BBQs, and a small tool shed in the corner.",
              standard:
                "The backyard is approximately a quarter acre and is fully fenced. There's also a patio area, ideal for barbecues, and a small tool shed in the corner.",
              formal:
                "The rear garden spans approximately one-quarter of an acre and is fully enclosed. It features a designated patio area, which is ideally suited for outdoor grilling, and a compact storage shed is situated in the corner.",
            },
          },
          {
            speaker: "you",
            textEn: "That's nice. Am I responsible for the yard maintenance?",
            textZh: "不错。我需要负责院子的维护吗？",
            culturalNote: "在美国租独栋房，院子维护通常由租客负责",
            casualVersion: "Cool. Do I have to take care of the lawn and everything?",
            commonMistake: {
              wrong: "I am responsible for the yard maintenance?",
              correct: "Am I responsible for the yard maintenance?",
              explanation: "中文思维常省略疑问词，直接用肯定句升调提问，英文中需要变语序。",
            },
            formalityVariants: {
              casual: "Cool. Am I doing the yard work?",
              standard: "That's good to know. Am I responsible for the yard maintenance?",
              formal: "That's excellent. May I inquire as to who is typically responsible for the upkeep of the yard?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Yes, lawn mowing and basic yard upkeep are the tenant's responsibility. But major things like tree removal or fence repair are on the landlord.",
            textZh: "是的，修剪草坪和基本的院子维护是租客的责任。但大的事情如砍树或修围栏是房东负责。",
            keyPhrases: [
              { en: "lawn mowing", zh: "修剪草坪" },
              { en: "tenant's responsibility", zh: "租客的责任" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, mowing the lawn and keeping the yard tidy is on you. But if a tree falls or the fence breaks, the landlord covers that.",
                textZh: "是的，修剪草坪和保持院子整洁是你的事。但如果树倒了或围栏坏了，房东负责。",
                actionHint: "on you = 你的责任；covers that = 负责那个",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国租独栋房通常租客负责草坪维护，有些社区（HOA）对草坪有严格要求，草太长可能会收到罚款通知。",
            casualVersion:
              "Yeah, tenant's gotta do the lawn mowing and basic yard stuff. Big stuff like tree removal or fence repair, that's on the landlord.",
            commonMistake: {
              wrong: "major things are landlord's responsibility.",
              correct: "major things are on the landlord.",
              explanation: '"on someone" 表示是某人的责任，更地道。',
            },
            formalityVariants: {
              casual:
                "Yup, tenant handles the mowing and regular yard stuff. Big fixes, like trees or fence, that's landlord's job.",
              standard:
                "Yes, lawn mowing and basic yard upkeep are the tenant's responsibility. However, major issues such as tree removal or fence repair fall to the landlord.",
              formal:
                "Indeed, the tenant is responsible for routine tasks such as lawn mowing and general yard maintenance. However, significant expenditures, including tree removal or fence repair, are borne by the landlord.",
            },
          },
          {
            speaker: "you",
            textEn: "How's the neighborhood? Is it safe around here?",
            textZh: "这附近的社区怎么样？安全吗？",
            commonMistake: {
              wrong: "How about neighborhood here? Safe?",
              correct: "How's the neighborhood around here? Is it safe?",
              explanation: "'How about' 后面应接名词短语。'Is it safe?'是完整问句。",
            },
            casualVersion: "What's the neighborhood like? Pretty safe?",
            formalityVariants: {
              casual: "Neighborhood good? Safe?",
              standard: "How is the neighborhood? Is it generally safe here?",
              formal:
                "Could you please describe the general characteristics of the neighborhood? Specifically, I'm interested in the safety and security of the area.",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "It's a very family-friendly area. Low crime rate, good schools nearby, and there's a park just two blocks down the street.",
            textZh: "这是一个非常适合家庭的区域。犯罪率低，附近有好学校，两个街区外就有公园。",
            commonMistake: {
              wrong: "Crime is low.",
              correct: "Low crime rate.",
              explanation: "Low crime rate 是更地道的表达。",
            },
            keyPhrases: [
              { en: "family-friendly", zh: "适合家庭的" },
              { en: "low crime rate", zh: "犯罪率低" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great neighborhood — super safe, lots of families. There's a park right around the corner and the schools are solid.",
                textZh: "社区很好——很安全，很多家庭。拐角就有公园，学校也不错。",
                actionHint: "solid = 不错的/靠谱的",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's super family-friendly. Low crime, good schools close by, and a park just two blocks down the road.",
            formalityVariants: {
              casual: "Super family-friendly. Low crime, good schools nearby, park two blocks down.",
              standard:
                "It's a very family-friendly area. There's a low crime rate, excellent schools in the vicinity, and a public park situated just two blocks down the street.",
              formal:
                "This is widely regarded as a highly desirable, family-oriented community. It boasts a notably low crime rate, offers access to reputable local schools, and a public park is conveniently located just two blocks away.",
            },
          },
        ],
      },
      {
        id: "house-tour-interior",
        titleZh: "室内详细",
        titleEn: "Interior Details",
        description: "深入了解室内设施和状况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Now let me show you the kitchen. It was recently updated with granite countertops and stainless steel appliances.",
            textZh: "现在让我带你看厨房。最近刚翻新了花岗岩台面和不锈钢电器。",
            commonMistake: {
              wrong: "stone table",
              correct: "granite countertops",
              explanation: "countertops 指厨房台面，不是普通的桌子。",
            },
            keyPhrases: [
              { en: "granite countertops", zh: "花岗岩台面" },
              { en: "stainless steel appliances", zh: "不锈钢电器" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's the kitchen — just redone. New granite counters, all stainless appliances. Pretty modern.",
                textZh: "这是厨房——刚翻新过。新的花岗岩台面，全不锈钢电器。挺现代的。",
                actionHint: "just redone = 刚翻新过",
                frequency: "common",
              },
            ],
            casualVersion: "Okay, so, kitchen. Just got updated, granite counters, stainless steel appliances.",
            formalityVariants: {
              casual: "Okay, so, kitchen. Just got updated, granite counters, stainless steel appliances.",
              standard:
                "Now let me show you the kitchen. It was recently updated with granite countertops and stainless steel appliances.",
              formal:
                "Allow me to direct your attention to the kitchen. It has been recently updated with premium granite countertops and state-of-the-art stainless steel appliances.",
            },
          },
          {
            speaker: "you",
            textEn: "Very nice. What about heating and cooling? Is there central air?",
            textZh: "很不错。供暖和制冷呢？有中央空调吗？",
            culturalNote: "美国很多独栋房有中央空调，租房时通常会关注",
            commonMistake: {
              wrong: "How about heating and cooling?",
              correct: "What about heating and cooling?",
              explanation: "“How about”常用于提议或征求意见，询问具体信息用“What about”更自然。",
            },
            formalityVariants: {
              casual: "Nice. So, heating/cooling? Got central air?",
              standard: "Very nice. What about heating and cooling? Is there central air?",
              formal: "That's quite impressive. Regarding the climate control systems, is central air conditioning available?",
            },
            casualVersion: "Looks great. Is there central AC?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Yes, there's central air conditioning and a gas furnace for heating. The HVAC system was replaced two years ago, so it's very efficient.",
            textZh: "有的，有中央空调，供暖是燃气炉。暖通系统两年前刚换过，所以非常高效。",
            commonMistake: {
              wrong: "gas heating",
              correct: "gas furnace",
              explanation: "furnace 是指锅炉/炉子，专指供暖设备。",
            },
            casualVersion: "Yeah, central air and gas furnace for heat. HVAC's only two years old, so it's super efficient.",
            formalityVariants: {
              casual: "Yeah, central air and gas furnace for heat. HVAC's only two years old, so it's super efficient.",
              standard: "Yes, there's central air conditioning and a gas furnace for heating. The HVAC system was replaced two years ago, so it's very efficient.",
              formal: "Indeed, the property is equipped with central air conditioning and a gas furnace for heating. The entire HVAC system was upgraded just two years prior, ensuring optimal energy efficiency.",
            },
            keyPhrases: [
              { en: "central air conditioning", zh: "中央空调" },
              { en: "gas furnace", zh: "燃气炉" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, full central air and a gas furnace. The whole HVAC is only two years old, so your energy bills should be pretty low.",
                textZh: "有的，全屋中央空调和燃气炉。整个暖通系统才两年，所以能源费应该挺低的。",
                actionHint: "energy bills = 能源费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great. I noticed the basement — is it finished or unfinished?",
            textZh: "很好。我注意到有地下室——是装修过的还是毛坯？",
            culturalNote: "美国独栋房很多有地下室，通常分为finished（装修好）、unfinished（毛坯）和partially finis",
            commonMistake: {
              wrong: "I noticed basement – is it finished or raw?",
              correct: "I noticed there's a basement – is it finished or unfinished?",
              explanation: "'raw' 不用于形容地下室。'unfinished' 才是正确用词。",
            },
            formalityVariants: {
              casual: "Oh, cool. Saw the basement — finished or not?",
              standard: "That's great. I noticed the basement — is it finished or unfinished?",
              formal: "That's excellent. I observed a basement area — could you please confirm if it is finished or remains unfinished?",
            },
            casualVersion: "Nice. What about the basement — is it finished?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "It's partially finished. Half of it is a rec room with carpet and the other half is unfinished storage space with the washer and dryer hookups.",
            textZh: "半装修的。一半是铺了地毯的娱乐室，另一半是未装修的储物空间，有洗衣机和烘干机的接口。",
            culturalNote: "北美房屋地下室功能多样，需区分装修程度",
            commonMistake: {
              wrong: "place for washer and dryer",
              correct: "washer and dryer hookups",
              explanation: "hookups 指接口/接头，特指水、电、气等连接点。",
            },
            casualVersion: "It's partial. Like, half's a carpeted rec room, other half's unfinished storage, got the washer/dryer hookups there.",
            formalityVariants: {
              casual: "It's partial. Like, half's a carpeted rec room, other half's unfinished storage, got the washer/dryer hookups there.",
              standard: "It's partially finished. Half of it is a rec room with carpet and the other half is unfinished storage space with the washer and dryer hookups.",
              formal: "It is partially finished. One half comprises a recreational room featuring carpeting, while the remaining half serves as unfinished storage space, equipped with washer and dryer hookups.",
            },
            keyPhrases: [
              { en: "partially finished", zh: "半装修的" },
              { en: "hookups", zh: "接口/接线" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's half and half. One side is a finished rec room — carpet, walls, the works. The other side is raw space with the laundry hookups.",
                textZh: "一半一半。一边是装修好的娱乐室——有地毯、墙面，全套。另一边是毛坯，有洗衣设备接口。",
                actionHint: "the works = 全套设施；raw space = 毛坯空间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a nice bonus. What's the monthly rent, and does it include lawn care?",
            textZh: "这是个不错的加分项。月租多少？包含草坪维护吗？",
            commonMistake: {
              wrong: "How much rent for month? Include lawn care?",
              correct: "How much is the rent per month? Does it include lawn care?",
              explanation: "'How much is the rent' 是固定句式。'include' 作为动词需助动词 'does'。",
            },
            formalityVariants: {
              casual: "Sweet. So, rent? Includes lawn care?",
              standard: "That's a nice bonus. What's the monthly rent, and does it include lawn care?",
              formal: "That's a significant advantage. Could you please provide the monthly rental amount, and confirm if lawn care services are included?",
            },
            casualVersion: "Sweet. What's the rent, and is lawn care included?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "The rent is $2,500 per month. Lawn care is not included, but the landlord does handle snow removal in the winter.",
            textZh: "月租2500美元。草坪维护不包含，但房东负责冬天的除雪。",
            culturalNote: "美国下雪地区，房东负责除雪是常见条款。",
            commonMistake: {
              wrong: "landlord does snow removal",
              correct: "landlord handles snow removal",
              explanation: "handle 更地道，表示负责/处理某事。",
            },
            casualVersion: "Rent's twenty-five hundred a month. No lawn care, but landlord handles snow in winter.",
            formalityVariants: {
              casual: "Rent's twenty-five hundred a month. No lawn care, but landlord handles snow in winter.",
              standard: "The rent is $2,500 per month. Lawn care is not included, but the landlord does handle snow removal in the winter.",
              formal: "The monthly rental rate is $2,500. Please note that lawn care is not encompassed within the rental agreement; however, the landlord assumes responsibility for snow removal during the winter months.",
            },
            keyPhrases: [
              { en: "lawn care", zh: "草坪维护" },
              { en: "snow removal", zh: "除雪" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Twenty-five hundred a month. You'd handle the lawn yourself, but the landlord takes care of plowing and shoveling when it snows.",
                textZh: "一个月两千五。草坪你自己弄，但下雪的时候房东负责铲雪。",
                actionHint: "plowing and shoveling = 铲雪（plowing用铲雪机，shoveling用铲子）",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 10. 开放日看房 ====================
  {
    id: "housing-open-house",
    category: "housing",
    titleZh: "开放日看房",
    titleEn: "Open House",
    description: "参加公寓或房屋的开放日看房活动",
    otherRole: "经纪人",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "open-house-basic",
        titleZh: "基础看房",
        titleEn: "Basic Open House Visit",
        description: "第一次参加开放日看房",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Hi there! Welcome to the open house. Please sign in on the sheet and feel free to look around. I'm here if you have any questions.",
            textZh: "你好！欢迎参加开放日看房。请在登记表上签名，随意参观。有问题随时问我。",
            keyPhrases: [
              { en: "open house", zh: "开放日看房" },
              { en: "sign in", zh: "签名登记" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey, welcome! Just put your name down on the list over there and take your time walking through. Holler if you need anything.",
                textZh: "嘿，欢迎！在那边的表上写下你的名字，慢慢看。需要什么叫我。",
                actionHint: "holler = 喊一声（口语）",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey! Welcome to the open house. Just sign in here and look around. Lemme know if you got any questions.",
            formalityVariants: {
              casual:
                "Hey! Welcome to the open house. Just sign in here and look around. Lemme know if you got questions.",
              standard:
                "Hi there! Welcome to the open house. Please sign in on the sheet and feel free to look around. I'm here if you have any questions.",
              formal:
                "Good afternoon, and welcome to our open house. We kindly request that you sign our guest register upon entry, and then you are welcome to tour the property at your leisure. I will be available to answer any questions you may have.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! I saw the listing online. Can you tell me when this unit is available?",
            textZh: "谢谢！我在网上看到的房源。请问这个单元什么时候可以入住？",
            casualVersion: "Thanks! Saw it online. When's it available?",
            commonMistake: {
              wrong: "When this unit can move in?",
              correct: "When is this unit available?",
              explanation: "直接翻译导致语序错误且不自然，'move in'通常指人入住。",
            },
            formalityVariants: {
              casual: "Thanks! Saw it online. When's it available?",
              standard: "Thanks! I saw the listing online. Can you tell me when this unit is available?",
              formal:
                "Thank you. I viewed the listing online and would appreciate it if you could inform me of this unit's availability date.",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "It's available starting April 1st. We're looking for someone who can commit to at least a 12-month lease.",
            textZh: "4月1日可以入住。我们在找能签至少12个月租约的人。",
            commonMistake: {
              wrong: "It can be moved in on April 1st.",
              correct: "It's available April 1st.",
              explanation: "直接说 \"can be moved in\" 不自然，用 \"available\" 更地道。",
            },
            keyPhrases: [
              { en: "available starting", zh: "从...开始可入住" },
              { en: "commit to", zh: "承诺/签" },
            ],
            alternativeExpressions: [
              {
                textEn: "Move-in date is April 1st. We need at least a year commitment on the lease.",
                textZh: "入住日期是4月1日。租约至少需要签一年。",
                actionHint: "commitment = 承诺",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国开放日看房（open house）通常在周末，可以不预约直接去看。但热门房源竞争激烈，需要尽快提交申请。",
            casualVersion: "It's open April 1st. We need someone for at least a year lease, though.",
            formalityVariants: {
              casual: "It's open April 1st. We're looking for someone to sign for at least a year, though.",
              standard:
                "It's available starting April 1st. We're looking for someone who can commit to at least a 12-month lease.",
              formal:
                "The unit will be available for occupancy commencing April 1st. We are seeking a tenant who is prepared to commit to a minimum 12-month lease agreement.",
            },
          },
          {
            speaker: "you",
            textEn: "That works for me. How many people have applied so far?",
            textZh: "时间合适。到目前为止有多少人申请了？",
            commonMistake: {
              wrong: "How many people applied already?",
              correct: "How many people have applied so far?",
              explanation: "\"so far\" 强调“到目前为止”，与中文语境更匹配。",
            },
            casualVersion: "Perfect timing. Has anyone else applied yet?",
            formalityVariants: {
              casual: "Perfect. So, how many people have applied?",
              standard: "That works for me. How many people have applied so far?",
              formal: "That timeframe is acceptable. Could you please inform me of the current number of applicants?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "We've had quite a bit of interest. I'd recommend submitting your application as soon as possible. We review them on a first-come, first-served basis.",
            textZh: "有不少人感兴趣。我建议你尽快提交申请。我们是按先到先审核的方式处理。",
            culturalNote: "first-come, first-served 是美国租赁常见做法。",
            keyPhrases: [
              { en: "quite a bit of interest", zh: "不少人感兴趣" },
              { en: "first-come, first-served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's been a lot of traffic today. If you're serious about it, I'd get your application in ASAP. It's first come, first served.",
                textZh: "今天来了很多人。如果你认真考虑，建议尽快交申请。先到先得。",
                actionHint: "a lot of traffic = 很多人来看（traffic这里指人流量）",
                frequency: "common",
              },
            ],
            casualVersion: "Lots of interest. You should apply ASAP. It's first-come, first-served.",
            commonMistake: {
              wrong: "We are first come, first served.",
              correct: "We review them on a first-come, first-served basis.",
              explanation: "First-come, first-served形容的是处理方式，不是人，不能直接说'We are...'",
            },
            formalityVariants: {
              casual: "Lots of interest. Apply ASAP, it's first-come, first-served.",
              standard:
                "We've had quite a bit of interest. I'd recommend submitting your application as soon as possible. We review them on a first-come, first-served basis.",
              formal:
                "There has been significant interest in this property. I would strongly advise submitting your application at your earliest convenience, as we process them strictly in the order they are received.",
            },
          },
          {
            speaker: "you",
            textEn: "What do I need for the application? Just my ID and proof of income?",
            textZh: "申请需要什么材料？身份证和收入证明就行了吗？",
            culturalNote: "美国申请租房通常要信用记录和社会安全号。",
            casualVersion: "What do you need from me? ID and pay stubs?",
            commonMistake: {
              wrong: "What materials do I need for the application?",
              correct: "What do I need for the application?",
              explanation: "“materials”在英语中听起来有点书面化，用“what do I need”更自然。",
            },
            formalityVariants: {
              casual: "What do I need to apply? Just ID and proof of income?",
              standard: "What do I need for the application? Just my ID and proof of income?",
              formal:
                "Could you please specify the required documentation for the application, specifically regarding identification and proof of income?",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "You'll need a government-issued ID, proof of income like pay stubs or a bank statement, and we'll run a credit check. There's a $50 application fee.",
            textZh: "需要政府签发的身份证件、收入证明如工资单或银行流水，我们还会做信用审查。申请费50美元。",
            culturalNote: "credit check 对中国租客来说可能较新。",
            keyPhrases: [
              { en: "credit check", zh: "信用审查" },
              { en: "application fee", zh: "申请费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring your ID, last two pay stubs, and there's a fifty-dollar app fee for the background and credit check.",
                textZh: "带上身份证、最近两张工资单，还有50美元申请费用于背景和信用审查。",
                actionHint: "app fee = application fee 申请费；background check = 背景调查",
                frequency: "common",
              },
            ],
            casualVersion:
              "You'll need a government ID, proof of income—like pay stubs or a bank statement—and we do a credit check. There's a fifty dollar application fee.",
            commonMistake: {
              wrong: "We will check your credit.",
              correct: "We'll run a credit check.",
              explanation: "'run a credit check'是固定搭配，更自然地表达“查信用”。",
            },
            formalityVariants: {
              casual:
                "You'll need a government ID, proof of income (like pay stubs or bank statements), and we do a credit check. Oh, and it's a $50 application fee.",
              standard:
                "You'll need a government-issued ID, proof of income like pay stubs or a bank statement, and we'll run a credit check. There's a $50 application fee.",
              formal:
                "The application requires a government-issued identification document, evidence of income such as recent pay stubs or a bank statement, and a comprehensive credit assessment will be conducted. Please note there is an application fee of $50.",
            },
          },
        ],
      },
      {
        id: "open-house-compare",
        titleZh: "对比选择",
        titleEn: "Comparing Options",
        description: "看了多个房源后对比询问",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I've seen a few places today. What makes this one stand out compared to other rentals in the area?",
            textZh: "我今天看了几个地方了。跟这附近其他出租房比，这个有什么突出的？",
            commonMistake: {
              wrong: "What is special about this unit compared to others?",
              correct: "What makes this unit stand out compared to other rentals in the area?",
              explanation: "\"stand out\" 比 \"special\" 更强调“突出、与众不同”，在比较中更地道。",
            },
            casualVersion: "I've been to a few open houses today. Why should I pick this one?",
            formalityVariants: {
              casual: "Seen a few spots today. What makes this one stand out from the other places 'round here?",
              standard:
                "I've seen a few places today. What makes this one stand out compared to other rentals in the area?",
              formal:
                "Having viewed several properties today, I'm curious as to what distinct advantages this particular unit offers in comparison to other available rentals within the vicinity.",
            },
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "Great question. This building has in-unit laundry, which is rare for this price range. Plus, the landlord just renovated the kitchen and bathroom last year.",
            textZh: "好问题。这栋楼有室内洗衣设备，在这个价位很少见。而且房东去年刚翻新了厨房和卫生间。",
            casualVersion: "Good question. This place has in-unit laundry, pretty rare at this price. Landlord just redid the kitchen and bath last year too.",
            culturalNote: "in-unit laundry 在美国公寓中是很大的优势。",
            formalityVariants: {
              casual: "Good question. In-unit laundry, rare for this price. Landlord updated kitchen/bath last year.",
              standard: "Great question. This building has in-unit laundry, which is rare for this price range. Plus, the landlord just renovated the kitchen and bathroom last year.",
              formal: "That's an excellent question. This particular unit features in-unit laundry facilities, which is quite uncommon for properties within this price range. Furthermore, the landlord completed a full renovation of the kitchen and bathroom just last year.",
            },
            keyPhrases: [
              { en: "in-unit laundry", zh: "室内洗衣设备" },
              { en: "renovated", zh: "翻新" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Honestly? The washer-dryer in the unit is a big deal for this price point. And the kitchen and bath were just redone, so everything's brand new.",
                textZh: "说实话？这个价位有室内洗烘机很难得。而且厨房和卫生间刚装修过，一切都是全新的。",
                actionHint: "a big deal = 很重要的事；brand new = 全新的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The place down the street is $200 cheaper. Is there any room for negotiation on the rent?",
            textZh: "街对面那个便宜200美元。租金有谈的空间吗？",
            culturalNote: "美国租金通常不议价，除非市场需求低或合同期长。",
            commonMistake: {
              wrong: "Is there space to negotiate on the rent?",
              correct: "Is there any room for negotiation on the rent?",
              explanation: "\"room for negotiation\" 是固定表达，指“有协商余地”。",
            },
            formalityVariants: {
              casual: "That spot down the street's $200 less. Can we haggle on the rent at all?",
              standard: "The place down the street is $200 cheaper. Is there any room for negotiation on the rent?",
              formal: "I've noted that a comparable property nearby is listed for $200 less per month. Would there be any possibility of negotiating the rental price for this unit?",
            },
            casualVersion: "The one down the street is two hundred less. Any wiggle room on the price?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "The rent is pretty firm, but the landlord might consider a small discount if you sign an 18-month lease instead of 12.",
            textZh: "租金基本上没得谈，但如果你签18个月而不是12个月，房东可能会考虑一点折扣。",
            casualVersion: "Rent's pretty firm, but landlord might give a small discount if you do an 18-month lease instead of 12.",
            commonMistake: {
              wrong: "The rent is firm.",
              correct: "The rent is pretty firm.",
              explanation: "\"pretty firm\" 比 \"firm\" 更委婉自然，表示“基本没有商量余地”。",
            },
            formalityVariants: {
              casual: "Rent's firm, but landlord might cut a deal for an 18-month lease.",
              standard: "The rent is pretty firm, but the landlord might consider a small discount if you sign an 18-month lease instead of 12.",
              formal: "The listed rental price is largely non-negotiable; however, the landlord may be amenable to a modest concession if a longer lease term, specifically 18 months, is secured instead of the standard 12-month agreement.",
            },
            keyPhrases: [
              { en: "pretty firm", zh: "基本没得谈" },
              { en: "small discount", zh: "一点折扣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Not much room to negotiate on the monthly rent, to be honest. But if you're willing to do a longer lease — say 18 months — the landlord might knock a bit off.",
                textZh: "月租没什么谈的空间，说实话。但如果你愿意签长一点——比如18个月——房东可能会减一点。",
                actionHint: "knock a bit off = 减一点价",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll think about it. Is there a deadline to apply?",
            textZh: "我考虑一下。有申请截止日期吗？",
            commonMistake: {
              wrong: "I will consider it.",
              correct: "I'll think about it.",
              explanation: "\"I'll think about it\" 比 \"I will consider it\" 在口语中更自然。",
            },
            formalityVariants: {
              casual: "Gotta think about it. Deadline?",
              standard: "I'll think about it. Is there an application deadline?",
              formal: "I will certainly give that some consideration. Is there a specific deadline for submitting applications?",
            },
            casualVersion: "Let me think it over. When's the deadline to apply?",
          },
          {
            speaker: "them",
            role: "经纪人",
            textEn:
              "No hard deadline, but like I said, it's first come first served. This unit probably won't last more than a week given the demand.",
            textZh: "没有硬性截止日期，但像我说的，先到先得。以目前的需求来看，这个单元可能一周内就没了。",
            casualVersion: "No strict deadline, but like I said, it's first-come, first-served. Could be gone in a week with how many people are interested.",
            culturalNote: "强调“先到先得”和房源紧张是常见的销售策略。",
            formalityVariants: {
              casual: "No hard deadline, but FCFS. Could be gone in a week.",
              standard: "No hard deadline, but like I said, it's first-come, first-served. With the current demand, this unit could be gone within a week.",
              formal: "There isn't a definitive application deadline; however, as previously mentioned, applications are processed on a first-come, first-served basis. Given the current level of interest, this unit may no longer be available within a week.",
            },
            keyPhrases: [
              { en: "no hard deadline", zh: "没有硬性截止日期" },
              { en: "won't last", zh: "不会剩多久" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's no official cutoff, but I wouldn't wait too long. Places like this go fast — I'd give it a few days, tops.",
                textZh: "没有正式截止时间，但我不会等太久。这样的房子很快就没了——最多几天。",
                actionHint: "tops = 最多",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll make a decision by tomorrow. Can I take some photos before I leave?",
            textZh: "好的，我明天之前做决定。走之前我能拍几张照片吗？",
            culturalNote: "在国外看房，通常礼貌上需要先问能否拍照。",
            commonMistake: {
              wrong: "I will make decision by tomorrow.",
              correct: "I'll decide by tomorrow.",
              explanation: "\"make decision\" 应为 \"make a decision\" 或直接用动词 \"decide\"。",
            },
            formalityVariants: {
              casual: "Alright, I'll decide by tomorrow. Can I snap some pics before I head out?",
              standard: "Okay, I'll decide by tomorrow. Can I take some photos before I leave?",
              formal: "Understood. I will finalize my decision by tomorrow. May I kindly request permission to take a few photographs before my departure?",
            },
            casualVersion: "Alright, I'll decide by tomorrow. Mind if I snap some pictures?",
          },
        ],
      },
    ],
  },

  // ==================== 11. 面试室友 ====================
  {
    id: "housing-roommate-interview",
    category: "housing",
    titleZh: "面试室友",
    titleEn: "Roommate Interview",
    description: "与潜在室友互相了解生活习惯和期望",
    otherRole: "室友",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "roommate-basic",
        titleZh: "基础了解",
        titleEn: "Getting to Know Each Other",
        description: "互相了解基本信息和生活习惯",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "室友",
            textEn: "Hey, nice to meet you! So, tell me a little about yourself. What do you do for work?",
            textZh: "嘿，很高兴认识你！跟我说说你的情况吧。你做什么工作？",
            commonMistake: {
              wrong: "What do you do what work?",
              correct: "What do you do for work?",
              explanation: "中文习惯问“做什么工作”，但英文不会说“do what work”，直接问“What do you do?” 或 “What do you do for work?”。",
            },
            culturalNote: "美国面试室友时，问工作是常见开场白",
            keyPhrases: [
              { en: "tell me about yourself", zh: "说说你的情况" },
              { en: "what do you do", zh: "你做什么工作" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey! Good to meet you. So what's your deal — what do you do for a living?",
                textZh: "嘿！见到你很高兴。你是做什么的？",
                actionHint: "what's your deal = 你是什么情况",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, nice to meet ya! So, tell me a bit about yourself. What d'you do?",
            formalityVariants: {
              casual: "Hey, nice to meet ya! So, what d'you do?",
              standard: "Hey, nice to meet you! So, tell me a little about yourself. What do you do for work?",
              formal: "Good to meet you. May I ask what your profession is?",
            },
          },
          {
            speaker: "you",
            textEn: "Nice to meet you too! I work in software engineering. I usually work from home a few days a week.",
            textZh: "我也很高兴认识你！我做软件工程。我通常每周有几天在家办公。",
            casualVersion: "Nice to meet you! I'm a software engineer — I work from home a couple days a week.",
            commonMistake: {
              wrong: "I am software engineer.",
              correct: "I work in software engineering.",
              explanation: '描述职业时，英文通常需要冠词或用"work in"结构。',
            },
            formalityVariants: {
              casual: "You too! I'm in software. WFH a few days a week.",
              standard:
                "Nice to meet you too! I work in software engineering. I usually work from home a few days a week.",
              formal:
                "It's a pleasure to meet you as well. My profession is software engineering, and I typically telecommute for several days each week.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn:
              "Cool, I work from home sometimes too. Are you a morning person or a night owl? I'm usually up pretty early.",
            textZh: "不错，我有时也在家办公。你是早起型还是夜猫子？我通常起得很早。",
            culturalNote: "“morning person”和“night owl”是形容作息的常用口语表达。",
            commonMistake: {
              wrong: "Are you morning person or night owl?",
              correct: "Are you a morning person or a night owl?",
              explanation: "习惯性漏掉冠词 'a'。",
            },
            keyPhrases: [
              { en: "morning person", zh: "早起型的人" },
              { en: "night owl", zh: "夜猫子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nice. So are you an early bird or do you stay up late? I'm usually up by 6.",
                textZh: "不错。那你是早起的还是熬夜的？我通常6点就起了。",
                actionHint: "early bird = 早起的人",
                frequency: "common",
              },
            ],
            casualVersion: "Cool, I WFH sometimes too. Morning person or night owl? I'm usually up pretty early.",
            formalityVariants: {
              casual: "Cool, I WFH sometimes too. Morning person or night owl? I'm usually up early.",
              standard:
                "Cool, I work from home sometimes too. Are you a morning person or a night owl? I'm usually up pretty early.",
              formal:
                "That's good to know; I also work remotely on occasion. Could you tell me if you are more inclined to be an early riser or a night owl? I typically wake quite early.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm more of a night owl, honestly. But I'm quiet — I usually just read or watch things with headphones on.",
            textZh: "说实话，我比较偏夜猫子型。但我很安静——通常就是看书或戴耳机看东西。",
            commonMistake: {
              wrong: "I'm quiet, usually just read or watch things.",
              correct: "I'm quiet — usually just reading or watching things with headphones on.",
              explanation: "动词ing形式作伴随状语，表示持续状态。",
            },
            casualVersion: "I'm a night owl, but I'm super quiet. I just read or binge stuff with headphones.",
            formalityVariants: {
              casual: "More of a night owl, tbh. But I'm quiet — just read or watch stuff with headphones.",
              standard:
                "I'm more of a night owl, honestly. But I'm quiet — I usually just read or watch things with headphones on.",
              formal:
                "To be candid, I identify more as a night owl. However, I maintain a quiet environment, typically engaging in reading or watching content with headphones.",
            },
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "That works. How about cleaning — are you pretty tidy? I like to keep the common areas clean.",
            textZh: "那没问题。关于清洁呢——你爱干净吗？我喜欢保持公共区域整洁。",
            commonMistake: {
              wrong: "Are you clean?",
              correct: "Are you pretty tidy?",
              explanation: "Clean 指人自身干净，tidy 指房间整洁。",
            },
            keyPhrases: [
              { en: "pretty tidy", zh: "比较爱干净" },
              { en: "common areas", zh: "公共区域" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Cool. What about cleanliness — are you a clean freak or more laid-back about it? I'm somewhere in the middle.",
                textZh: "好的。卫生方面呢——你是洁癖还是比较随意？我介于两者之间。",
                actionHint: "clean freak = 洁癖；laid-back = 随意",
                frequency: "common",
              },
            ],
            casualVersion: "That works. So, how about cleaning — pretty tidy? I like to keep common areas clean.",
            formalityVariants: {
              casual: "Sounds good. Cleaning — pretty tidy? I like common areas clean.",
              standard: "That works. How about cleaning — are you pretty tidy? I like to keep the common areas clean.",
              formal:
                "That is acceptable. Regarding cleanliness, would you describe yourself as quite tidy? My preference is to maintain the common areas in a clean state.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'm tidy. I always clean up after myself in the kitchen. I think shared spaces should be everyone's responsibility.",
            textZh: "我很爱干净。我在厨房用完后总是会收拾。我觉得公共空间应该是大家共同的责任。",
            casualVersion: "Yeah, I'm clean. I always do my dishes and stuff. Shared spaces should be a team effort.",
            commonMistake: {
              wrong: "I am tidy. I always clean myself in the kitchen.",
              correct: "I'm tidy. I always clean up after myself in the kitchen.",
              explanation: '"clean up after oneself" 指整理自己弄乱的地方。',
            },
            formalityVariants: {
              casual: "Yeah, I'm tidy. Always clean up my kitchen mess. Shared spaces are everyone's job.",
              standard:
                "I'm tidy. I always clean up after myself in the kitchen. I think shared spaces should be everyone's responsibility.",
              formal:
                "Yes, I am quite tidy. I consistently ensure that I clean up after myself in the kitchen. I hold the view that maintaining shared spaces is a collective responsibility.",
            },
          },
        ],
      },
      {
        id: "roommate-details",
        titleZh: "细节确认",
        titleEn: "Discussing Details",
        description: "讨论房租分摊、访客政策等具体事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "室友",
            textEn:
              "Let's talk about the practical stuff. Rent is $2,400 total — we'd split it evenly, so $1,200 each. Utilities are split 50-50 too.",
            textZh: "我们来谈谈实际的事情。总租金2400美元——我们平分，每人1200。水电费也五五分。",
            commonMistake: {
              wrong: "Utilities also split fifty-fifty.",
              correct: "Utilities also split 50/50.",
              explanation: "需动词be或be动词短语来构成被动语态。",
            },
            keyPhrases: [
              { en: "split evenly", zh: "平分" },
              { en: "50-50", zh: "五五分" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So the rent's twenty-four hundred. Straight down the middle — twelve hundred each. Same deal with utilities.",
                textZh: "租金两千四。对半分——每人一千二。水电费也一样。",
                actionHint: "straight down the middle = 正好对半分",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, so practical stuff. Rent's 2,400 total — we'd split it, 1,200 each. Utilities, too, 50-50.",
            formalityVariants: {
              casual:
                "Okay, so practical stuff. Rent's 2,400 total — we'd split it, 1,200 each. Utilities, too, 50-50.",
              standard:
                "Let's discuss the practical arrangements. The total rent is $2,400, which we would split evenly, making it $1,200 per person. Utilities would also be split 50-50.",
              formal:
                "Regarding the financial particulars, the monthly rent totals $2,400, which we would equally apportion at $1,200 per individual. Furthermore, utility expenses would be divided on a fifty-fifty basis as well.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds fair. What about guests? Is it okay to have friends over occasionally?",
            textZh: "听起来公平。关于客人呢？偶尔有朋友来可以吗？",
            commonMistake: {
              wrong: "What about guest?",
              correct: "What about guests?",
              explanation: "通常指多个客人，需用复数。",
            },
            formalityVariants: {
              casual: "Fair enough. Guests? Can I have friends over sometimes?",
              standard: "Sounds fair. What about guests? Is it okay to have friends over occasionally?",
              formal: "That sounds equitable. Regarding visitors, would it be permissible to host friends on an occasional basis?",
            },
            casualVersion: "Fair enough. Cool if I have friends over sometimes?",
          },
          {
            speaker: "them",
            role: "室友",
            textEn:
              "Totally fine! I just ask for a heads-up if someone's staying overnight, and no parties on weeknights. Weekends are fair game though.",
            textZh: "完全没问题！只是如果有人过夜请提前说一声，工作日晚上不要开派对。周末随意。",
            casualVersion: "Totally fine! Just a heads-up if someone sleeps over, and no parties on weeknights. Weekends, anything goes.",
            culturalNote: "美国年轻人常说'heads-up'表示提前通知",
            commonMistake: {
              wrong: "I just ask you to tell me ahead if someone stays overnight.",
              correct: "I just ask for a heads-up if someone stays overnight.",
              explanation: "'Heads-up' 意为提前通知，更地道。",
            },
            formalityVariants: {
              casual: "Yeah, no problem! Just let me know if someone's staying the night. No weeknight parties, but weekends are open.",
              standard: "Totally fine! I just ask for a heads-up if someone stays overnight, and no parties on weeknights. Weekends are fair game.",
              formal: "That is perfectly acceptable. My only request is advance notice if an overnight guest is anticipated, and no social gatherings or parties should be hosted on weekday evenings. Weekends, however, are flexible.",
            },
            keyPhrases: [
              { en: "heads-up", zh: "提前说一声" },
              { en: "fair game", zh: "可以的/没问题" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, no problem at all. Just let me know if someone's crashing here overnight. And keep it chill on weeknights — weekends, do your thing.",
                textZh: "完全没问题。如果有人留宿就告诉我一声。工作日晚上安静点——周末随你。",
                actionHint: "crashing here = 留宿（口语）；do your thing = 随你",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's very reasonable. Do you have any deal-breakers I should know about?",
            textZh: "很合理。你有什么底线是我应该知道的吗？",
            culturalNote: "Dealbreaker 是美国常用表达，指不可妥协的条件",
            commonMistake: {
              wrong: "Do you have any bottom line I should know?",
              correct: "Do you have any dealbreakers I should be aware of?",
              explanation: "'Bottom line'通常指最终底价，'dealbreaker' 指无法妥协的条件。",
            },
            formalityVariants: {
              casual: "Makes sense. Any dealbreakers for you?",
              standard: "That's reasonable. Do you have any dealbreakers I should be aware of?",
              formal: "That is quite understandable. Do you have any non-negotiable conditions or specific preferences that I should be informed of?",
            },
            casualVersion: "Makes sense. Any deal-breakers I should know?",
          },
          {
            speaker: "them",
            role: "室友",
            textEn:
              "No smoking inside — that's a big one for me. And I'd prefer no pets, mainly because my allergies are pretty bad.",
            textZh: "室内不能吸烟——这是我的底线。另外最好不要养宠物，主要是我过敏比较严重。",
            culturalNote: "在美国室内吸烟非常不常见，通常不允许。",
            casualVersion: "No smoking inside — that's a big one for me. And probably no pets, I've got pretty bad allergies.",
            commonMistake: {
              wrong: "No smoke inside.",
              correct: "No smoking inside.",
              explanation: "表示禁止某种行为时，常用动名词形式。",
            },
            formalityVariants: {
              casual: "No smoking inside, that's my big rule. And probably no pets, bad allergies.",
              standard: "No smoking inside — that's my main dealbreaker. Also, preferably no pets, mainly because I have pretty bad allergies.",
              formal: "Smoking is not permitted indoors; that is my primary non-negotiable condition. Additionally, I would prefer no pets, as I suffer from rather severe allergies.",
            },
            keyPhrases: [
              { en: "deal-breakers", zh: "底线/不能接受的事" },
              { en: "allergies", zh: "过敏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Two things — no smoking in the apartment, and no pets. I've got bad allergies, so that's non-negotiable for me.",
                textZh: "两件事——公寓里不能抽烟，不能养宠物。我过敏很严重，这个没得商量。",
                actionHint: "non-negotiable = 没得商量的",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem at all — I don't smoke and I don't have any pets. I think we'd be a good match.",
            textZh: "完全没问题——我不抽烟也没有宠物。我觉得我们很合适。",
            commonMistake: {
              wrong: "I don't smoke and no pets.",
              correct: "I don't smoke and I don't have any pets.",
              explanation: "需完整句子，'no pets'省略了主语和动词。",
            },
            formalityVariants: {
              casual: "No sweat — no smoking, no pets here. I think we'd get along great.",
              standard: "No problem at all — I don't smoke and I don't have any pets. I think we'd be a great match.",
              formal: "That presents no issue whatsoever, as I neither smoke nor possess any pets. I believe our compatibility would be excellent.",
            },
            casualVersion: "Works for me — I don't smoke or have pets. I think we'd get along great.",
          },
          {
            speaker: "them",
            role: "室友",
            textEn: "I think so too! When would you be looking to move in? The room is available from next month.",
            textZh: "我也这么觉得！你打算什么时候搬进来？房间下个月就可以入住了。",
            casualVersion: "I think so too! When are you looking to move in? Room's open next month.",
            commonMistake: {
              wrong: "When you move in?",
              correct: "When would you be looking to move in?",
              explanation: "询问计划时需助动词或be动词。",
            },
            formalityVariants: {
              casual: "Me too! So, when are you thinking of moving in? Room's available starting next month.",
              standard: "I think so too! When would you be looking to move in? The room is available from next month.",
              formal: "I concur entirely! May I inquire as to your anticipated move-in date? The room will become available for occupancy commencing next month.",
            },
            keyPhrases: [
              { en: "move in", zh: "搬进来" },
              { en: "available from", zh: "从...开始可以入住" },
            ],
            alternativeExpressions: [
              {
                textEn: "Same here! So when are you thinking of moving in? The room's free starting next month.",
                textZh: "我也是！那你打算什么时候搬来？房间下个月开始空出来。",
                actionHint: "free = 空闲的/可用的",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 12. 转租 ====================
  {
    id: "housing-subletting",
    category: "housing",
    titleZh: "转租",
    titleEn: "Subletting",
    description: "与转租方讨论转租条件和流程",
    otherRole: "转租方",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "subletting-basic",
        titleZh: "基础转租",
        titleEn: "Basic Subletting",
        description: "了解转租的基本信息和条件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw your listing for a sublet. Is the room still available?",
            textZh: "你好，我看到你发的转租信息。房间还有吗？",
            casualVersion: "Hey, is the sublet still up for grabs?",
            commonMistake: {
              wrong: "Is the room still exist?",
              correct: "Is the room still available?",
              explanation: "Exist 是指“存在”，available 是指“是否可供使用”。",
            },
            formalityVariants: {
              casual: "Hey, saw your sublet post. Room still open?",
              standard: "Hi, I saw your listing for a sublet. Is the room still available?",
              formal:
                "Good morning/afternoon, I am contacting you regarding your sublet advertisement. May I inquire if the room is still being offered?",
            },
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Yes, it's still available! I'm subletting my room from June through August while I'm away for the summer. Rent is $1,100 a month, everything included.",
            textZh: "有的，还在！我夏天不在，所以6月到8月转租我的房间。月租1100美元，全包。",
            commonMistake: {
              wrong: "Rent is $1100, all included.",
              correct: "Rent is $1100, all-inclusive.",
              explanation: "all-inclusive是更地道的表达，指费用全包。",
            },
            keyPhrases: [
              { en: "subletting", zh: "转租" },
              { en: "everything included", zh: "全包" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, it's still open! I'm going away for the summer, so I need someone from June to August. Eleven hundred a month, all-in — utilities, internet, everything.",
                textZh: "对，还没租出去！我夏天出去，所以6月到8月需要人住。一个月一千一，全包——水电、网络、所有的。",
                actionHint: "all-in = 全部包含",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, it's still open! Subletting my room June-August 'cause I'm gone for summer. $1100/month, everything included.",
            formalityVariants: {
              casual:
                "Yep, it's still available! I'm subletting my room from June to August for the summer. Rent's $1100 a month, all inclusive.",
              standard:
                "Yes, it's still available! I'm subletting my room from June through August while I'm away for the summer. Rent is $1,100 a month, everything included.",
              formal:
                "Yes, it remains available. I am offering my room for sublet from June through August, as I will be away for the summer. The monthly rental fee is $1,100, which is all-inclusive.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That sounds good. Does the landlord know about the sublet? I want to make sure it's all above board.",
            textZh: "听起来不错。房东知道转租的事吗？我想确保一切都是合法的。",
            casualVersion: "Cool. Does your landlord know about this? I just wanna make sure it's legit.",
            commonMistake: {
              wrong: "Does landlord know it's legal?",
              correct: "Does the landlord know about the sublet? I want to make sure it's all above board.",
              explanation: "“All above board” 是指光明正大、合乎规矩。用“legal”听起来有点生硬。",
            },
            formalityVariants: {
              casual: "Sounds good. Does the landlord know? Just wanna make sure it's legit.",
              standard:
                "That sounds good. Does the landlord know about the sublet? I want to make sure it's all above board.",
              formal:
                "That sounds satisfactory. Is the landlord aware of the subletting arrangement? I wish to ensure that all necessary permissions and protocols are in place.",
            },
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Yes, I already got written approval from the landlord. I can show you the email. You'd sign a sublet agreement with me, not a new lease.",
            textZh: "是的，我已经拿到了房东的书面同意。我可以给你看邮件。你跟我签转租协议，不是新的租约。",
            keyPhrases: [
              { en: "written approval", zh: "书面同意" },
              { en: "sublet agreement", zh: "转租协议" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, landlord's cool with it — I've got it in writing. You'd be signing a sublet agreement with me directly.",
                textZh: "对，房东同意了——我有书面证明。你直接跟我签转租协议。",
                actionHint: "cool with it = 同意/没问题",
                frequency: "common",
              },
            ],
            culturalNote: "在美国，未经房东书面同意的转租可能违反租约，导致被驱逐。务必确认转租已获房东批准。",
            casualVersion:
              "Yeah, got written approval from them already. Can show you the email. You'd sign a sublet agreement with me, not a new lease.",
            commonMistake: {
              wrong: "You just sign a contract with me, not a new lease.",
              correct: "You'd sign a sublet agreement with me, not a new lease.",
              explanation: "“sublet agreement”是转租专用合同，比“contract”更具体和准确。",
            },
            formalityVariants: {
              casual:
                "Yep, already got written approval from the landlord. Happy to show you the email. You'll sign a sublet agreement with me, not a new lease.",
              standard:
                "Yes, I already got written approval from the landlord. I can show you the email. You'd sign a sublet agreement with me, not a new lease.",
              formal:
                "Yes, I have already secured written authorization from the landlord. I would be pleased to provide you with the email documentation. You would be entering into a sublet agreement with me, rather than initiating a new primary lease.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Can I come see the room this weekend?",
            textZh: "太好了。这周末我能来看看房间吗？",
            casualVersion: "Awesome. Can I swing by this weekend to check it out?",
            commonMistake: {
              wrong: "Can I come to see the room this weekend?",
              correct: "Can I come see the room this weekend?",
              explanation: "口语中“come see”更自然，不需要加“to”。",
            },
            formalityVariants: {
              casual: "Cool. Can I check out the room this weekend?",
              standard: "Great. Can I come see the room this weekend?",
              formal: "Excellent. Would it be possible for me to view the room this weekend?",
            },
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Sure! Saturday afternoon works best for me. I'll also introduce you to the other roommate so you can meet each other.",
            textZh: "当然！周六下午最合适。我还会介绍你认识另一个室友，你们可以见见。",
            commonMistake: {
              wrong: "I will let you meet the other roommate.",
              correct: "I'll introduce you to the other roommate so you two can meet.",
              explanation: "“introduce you to... so you can meet”是更自然的表达。",
            },
            keyPhrases: [
              { en: "works best", zh: "最合适" },
              { en: "introduce you to", zh: "介绍你认识" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, come by Saturday afternoon. I'll have my roommate around too so you guys can say hi.",
                textZh: "好的，周六下午过来。我室友也在，你们可以打个招呼。",
                actionHint: "come by = 过来；say hi = 打个招呼",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure! Sat afternoon's best for me. I'll also introduce you to the other roommate so you guys can meet.",
            formalityVariants: {
              casual:
                "Yep! Saturday afternoon works best for me. I'll also introduce you to the other roommate so you guys can meet.",
              standard:
                "Sure! Saturday afternoon works best for me. I'll also introduce you to the other roommate so you can meet each other.",
              formal:
                "Certainly. Saturday afternoon would be the most convenient time for me. I will also facilitate an introduction to the other resident, allowing you to become acquainted.",
            },
          },
        ],
      },
      {
        id: "subletting-terms",
        titleZh: "转租条款",
        titleEn: "Sublet Terms",
        description: "讨论转租的具体条款和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Before we finalize, let me go over a few things. You'll be responsible for keeping my furniture in good condition. I'm leaving everything as is.",
            textZh: "在我们确定之前，有几件事说一下。你需要保证我的家具完好。我所有东西都留着不动。",
            commonMistake: {
              wrong: "I'm leaving all my belongings as it is.",
              correct: "I'm leaving all my belongings as is.",
              explanation: "“as is”是地道口语，指“保持原样”。",
            },
            keyPhrases: [
              { en: "finalize", zh: "确定" },
              { en: "as is", zh: "按现状/原样" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A couple things before we lock this in. The room comes fully furnished — all my stuff stays. Just take care of it.",
                textZh: "确定之前说几件事。房间是全家具的——我的东西都留着。你帮忙照看好就行。",
                actionHint: "lock this in = 确定下来",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, before we nail this down, just a few things. You gotta keep my furniture good. Everything's staying as is.",
            formalityVariants: {
              casual:
                "Alright, before we wrap this up, just a few things. Gotta keep my furniture good. Leaving everything as is.",
              standard:
                "Before we finalize, let me go over a few things. You'll be responsible for keeping my furniture in good condition. I'm leaving everything as is.",
              formal:
                "Prior to finalizing our agreement, I would like to review several points. You will be responsible for ensuring the furniture remains in excellent condition, as it will be provided to you in its current state.",
            },
          },
          {
            speaker: "you",
            textEn: "No problem. Do I need to pay a deposit to you as well?",
            textZh: "没问题。我也需要付你押金吗？",
            commonMistake: {
              wrong: "Do I need to pay deposit to you?",
              correct: "Do I need to pay a deposit to you as well?",
              explanation: "“deposit”是可数名词，前面加“a”更自然。",
            },
            formalityVariants: {
              casual: "No prob. Gotta pay you a deposit too?",
              standard: "No problem. Do I need to pay a deposit to you as well?",
              formal: "Understood. Will a security deposit also be required from me?",
            },
            casualVersion: "Sure. Do you want a deposit too?",
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Yes, I'm asking for a half-month deposit — $550. You'll get it back when I return and we check that everything's in order.",
            textZh: "是的，我收半个月的押金——550美元。我回来后检查一切正常就退还。",
            casualVersion: "Yeah, I'll get half a month's rent for the deposit – $550. I'll give it back once I'm back and everything's good.",
            commonMistake: {
              wrong: "I'll return it once I'm back and everything is normal.",
              correct: "I'll return it once I'm back and everything checks out.",
              explanation: "“checks out”是地道口语，指“检查后没问题”。",
            },
            formalityVariants: {
              casual: "Yeah, I'll get half a month's rent for the deposit – $550. I'll give it back once I'm back and everything's good.",
              standard: "Yes, I'll collect half a month's rent as a deposit – $550. I'll return it once I'm back and everything checks out.",
              formal: "Indeed, I will require a security deposit equivalent to half a month's rent, totaling $550. This amount will be reimbursed upon my return and satisfactory inspection of the premises.",
            },
            keyPhrases: [
              { en: "half-month deposit", zh: "半个月押金" },
              { en: "in order", zh: "一切正常" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, just a half-month — five fifty. When I get back and everything looks good, you'll get it right back.",
                textZh: "对，半个月就行——五百五。我回来看一切没问题就退给你。",
                actionHint: "looks good = 看起来没问题",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Fair enough. Who do I contact if something breaks or there's an emergency?",
            textZh: "可以。如果东西坏了或有紧急情况，我联系谁？",
            commonMistake: {
              wrong: "Who do I contact if something is broken?",
              correct: "Who do I contact if something breaks or there's an emergency?",
              explanation: "“something breaks”是更自然的口语表达，指物品损坏。",
            },
            formalityVariants: {
              casual: "Fair enough. Who do I hit up if something breaks or there's an emergency?",
              standard: "Fair enough. Who do I contact if something breaks or there's an emergency?",
              formal: "Understood. In the event of a malfunction or an emergency, whom should I contact?",
            },
            casualVersion: "Makes sense. Who do I call if something goes wrong?",
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "For maintenance issues, contact the building manager directly — I'll give you his number. For anything else, just reach out to me. I'll have phone service abroad.",
            textZh: "维修问题直接联系物业经理——我把他的电话给你。其他事情联系我就行。我在国外也有电话服务。",
            casualVersion: "Maintenance stuff, hit up the building manager directly — I'll give you his number. For anything else, just hit me up. I'll have phone service overseas too.",
            commonMistake: {
              wrong: "Contact the property management manager directly.",
              correct: "Contact the building manager directly.",
              explanation: "“building manager”或“property manager”是更地道的说法。",
            },
            formalityVariants: {
              casual: "Maintenance stuff, hit up the building manager directly — I'll give you his number. For anything else, just hit me up. I'll have phone service overseas too.",
              standard: "For maintenance issues, contact the building manager directly — I'll give you his number. For other things, just contact me. I'll have phone service overseas too.",
              formal: "Regarding maintenance concerns, please contact the building manager directly; I will provide you with their contact information. For all other matters, you may reach out to me, as I will have active phone service during my time abroad.",
            },
            keyPhrases: [
              { en: "building manager", zh: "物业经理" },
              { en: "reach out to me", zh: "联系我" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If anything breaks, go straight to the super — I'll text you his info. For anything else, message me. I'll be reachable.",
                textZh: "东西坏了直接找管理员——我短信发你他的信息。其他的事给我发消息。我随时能联系到。",
                actionHint: "the super = superintendent 管理员/物业主管",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can you send me the sublet agreement so I can review it before signing?",
            textZh: "好的。你能把转租协议发给我吗？签字前我先看看。",
            commonMistake: {
              wrong: "Can you send me the sublet agreement so I can see it before signing?",
              correct: "Can you send me the sublet agreement so I can review it before signing?",
              explanation: "“review”更适合指审阅文件。",
            },
            formalityVariants: {
              casual: "Sounds good. Can you shoot me the sublet agreement so I can check it out before signing?",
              standard: "Sounds good. Can you send me the sublet agreement so I can review it before signing?",
              formal: "Understood. Would you be able to forward the sublease agreement to me for my perusal prior to execution?",
            },
            casualVersion: "Great. Can you send over the agreement so I can look it over?",
          },
          {
            speaker: "them",
            role: "转租方",
            textEn:
              "Sure, I'll email it to you tonight. Take your time reading it. If you have any questions or want to change anything, just let me know.",
            textZh: "好的，今晚发邮件给你。慢慢看。有问题或想改什么就告诉我。",
            casualVersion: "Yep, I'll shoot it over tonight. Take your time with it. Lemme know if you got questions or wanna change anything.",
            commonMistake: {
              wrong: "See it slowly.",
              correct: "Take your time to look it over.",
              explanation: "“take your time to look it over”是更地道的表达，指“慢慢看”。",
            },
            formalityVariants: {
              casual: "Yep, I'll shoot it over tonight. Take your time with it. Lemme know if you got questions or wanna change anything.",
              standard: "Sure, I'll email it to you tonight. Take your time to look it over. Let me know if you have any questions or want to change anything.",
              formal: "Certainly, I will send it to you via email this evening. Please take your time to review it thoroughly. Do not hesitate to contact me should you have any questions or require any modifications.",
            },
            keyPhrases: [
              { en: "take your time", zh: "慢慢看" },
              { en: "change anything", zh: "改什么" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I'll shoot it over tonight. No rush — read through it and hit me up if anything looks off.",
                textZh: "好，今晚发给你。不着急——看完有什么不对的跟我说。",
                actionHint: "shoot it over = 发过去；looks off = 看起来不对",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 开通水电网 ====================
  {
    id: "housing-utility-setup",
    category: "housing",
    titleZh: "开通水电网",
    titleEn: "Utility Setup",
    description: "打电话给水电网公司开通新家的各项服务",
    otherRole: "客服",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "utility-basic",
        titleZh: "基础开通",
        titleEn: "Basic Utility Setup",
        description: "开通电力和网络服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just moved into a new apartment and I need to set up electricity service at my address.",
            textZh: "你好，我刚搬进新公寓，需要在我的地址开通电力服务。",
            culturalNote: "在美国，直接说明来意即可，无需过多客套。",
            casualVersion: "Hey, I just moved in and need to get the power turned on.",
            commonMistake: {
              wrong: "I need open electricity service",
              correct: "I need to set up electricity service",
              explanation: "“Open service” 不是地道表达，用 “set up” 更常用。",
            },
            formalityVariants: {
              casual: "Hey, just moved in. Gotta set up electricity at my place.",
              standard: "Hi, I just moved into a new apartment and I need to set up electricity service at my address.",
              formal:
                "Good morning/afternoon, I've recently relocated to a new residence and require assistance with establishing electrical service at my new address.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Sure, I can help you with that. Can I have your full name, new address, and the date you'd like service to start?",
            textZh: "好的，我可以帮您。请提供您的全名、新地址和您希望开通服务的日期。",
            keyPhrases: [
              { en: "set up service", zh: "开通服务" },
              { en: "date you'd like service to start", zh: "希望开通服务的日期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem! I just need your name, the address where you want service, and when you want it turned on.",
                textZh: "没问题！我只需要您的名字、需要开通服务的地址，以及想什么时候开通。",
                actionHint: "turned on = 开通/打开",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, can help with that. Need your full name, new address, and when you want service to start.",
            commonMistake: {
              wrong: "Give me your full name",
              correct: "Can I have your full name",
              explanation: "“Give me” 听起来太生硬，用 “Can I have” 更礼貌。",
            },
            formalityVariants: {
              casual: "Sure, I can help. What's your name, new address, and start date?",
              standard:
                "Sure, I can help you with that. Can I have your full name, new address, and the date you'd like service to start?",
              formal:
                "Certainly, I can assist you with that. May I please have your complete name, the full new address, and your preferred service activation date?",
            },
          },
          {
            speaker: "you",
            textEn: "My name is Li Wei. The address is 456 Oak Street, Apartment 3A. I'd like it starting this Friday.",
            textZh: "我叫李维。地址是橡树街456号，3A公寓。我希望这周五开通。",
            casualVersion: "It's Li Wei, 456 Oak Street, Apt 3A. This Friday if possible.",
            commonMistake: {
              wrong: "I want to start it this Friday.",
              correct: "I'd like it starting this Friday.",
              explanation: "“I'd like” 比 “I want” 听起来更礼貌、更自然。",
            },
            formalityVariants: {
              casual: "Li Wei, 456 Oak St, Apt 3A. Start it this Friday.",
              standard:
                "My name is Li Wei. The address is 456 Oak Street, Apartment 3A. I'd like it starting this Friday.",
              formal:
                "My name is Li Wei. The address is 456 Oak Street, Apartment 3A. I would prefer the service to commence this Friday.",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "Got it. We can have your electricity turned on by Friday. There's a $75 connection fee for new accounts. Would you like that charged to a credit card?",
            textZh: "好的。我们可以在周五之前开通您的电力。新账户有75美元的开通费。您要用信用卡支付吗？",
            keyPhrases: [
              { en: "connection fee", zh: "开通费" },
              { en: "new accounts", zh: "新账户" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Alright, we can get you set up by Friday. There's a seventy-five-dollar activation fee for new customers. Credit card okay?",
                textZh: "好的，周五之前给您开通。新客户有75美元激活费。刷信用卡可以吗？",
                actionHint: "activation fee = 激活费 = 开通费",
                frequency: "common",
              },
            ],
            casualVersion:
              "Okay, we can get your power on by Friday. There's a $75 hookup fee for new accounts. Wanna put that on a credit card?",
            commonMistake: {
              wrong: "You want to use credit card to pay?",
              correct: "Would you like that charged to a credit card?",
              explanation: "“Charged to a credit card” 是询问是否用信用卡支付的地道说法。",
            },
            formalityVariants: {
              casual: "Got it. Power'll be on by Friday. $75 hookup fee. Credit card for that?",
              standard:
                "Got it. We can have your electricity turned on by Friday. There's a $75 connection fee for new accounts. Would you like that charged to a credit card?",
              formal:
                "Understood. We can ensure your electricity is activated by Friday. Please note there is a $75 connection fee for all new accounts. Would you prefer to charge this to a credit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's fine. Also, do I need a deposit since I'm a new customer?",
            textZh: "可以。另外，因为我是新客户，需要交押金吗？",
            casualVersion: "Sure. Do new customers need to put down a deposit?",
            commonMistake: {
              wrong: "Do I need pay deposit?",
              correct: "Do I need a deposit?",
              explanation: "“deposit” 作名词时通常需要冠词 “a”。",
            },
            formalityVariants: {
              casual: "Yeah, that's fine. And, like, do I need a deposit 'cause I'm new?",
              standard: "Yes, that's fine. Also, do I need a deposit since I'm a new customer?",
              formal: "Yes, that will be acceptable. Furthermore, as a new customer, is a security deposit required?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "We'll run a credit check. If your credit score is above 650, no deposit is needed. Otherwise, it's a $200 deposit that's refundable after 12 months of on-time payments.",
            textZh:
              "我们会做信用检查。如果您的信用分在650以上，不需要押金。否则需要200美元押金，连续12个月按时缴费后可退还。",
            keyPhrases: [
              { en: "credit score", zh: "信用分" },
              { en: "refundable", zh: "可退还的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It depends on your credit. If it's decent — above 650 — you're good, no deposit. If not, it's two hundred, but you'll get it back after a year of paying on time.",
                textZh: "取决于你的信用。如果还不错——650以上——就不用押金。如果不够，要交200，但按时交费一年后退还。",
                actionHint: "decent = 还不错的；you're good = 没问题",
                frequency: "common",
              },
            ],
            casualVersion:
              "We'll do a credit check. If your score's over 650, no deposit needed. Otherwise, it's a $200 deposit, which you get back after 12 months of on-time payments.",
            culturalNote:
              "美国社会非常依赖信用分数（credit score），它影响租房、贷款、水电开通等。保持良好信用至关重要。",
            commonMistake: {
              wrong: "We will check your credit. / credit score 650 above.",
              correct: "We'll run a credit check. / credit score is above 650.",
              explanation: "“run a credit check” 是更地道的表达。“above 650” 比 “650 above” 自然。",
            },
            formalityVariants: {
              casual:
                "We'll check your credit. Score over 650, you're good on deposit. Otherwise, it's $200, refundable after a year of on-time payments.",
              standard:
                "We'll run a credit check. If your credit score is above 650, no deposit is needed. Otherwise, it's a $200 deposit that's refundable after 12 months of on-time payments.",
              formal:
                "We will conduct a credit evaluation. Should your credit score exceed 650, no security deposit will be required. Otherwise, a $200 deposit will be mandated, which is fully refundable subsequent to 12 consecutive months of timely payments.",
            },
          },
        ],
      },
      {
        id: "utility-internet",
        titleZh: "网络开通",
        titleEn: "Internet Setup",
        description: "选择和开通家庭网络服务",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to set up internet at my new apartment. What plans do you have available?",
            textZh: "你好，我需要在新公寓开通网络。你们有什么套餐？",
            casualVersion: "Hey, I need internet set up. What plans do you guys have?",
            culturalNote: "在美国咨询服务时，通常无需过多客套，直接说明需求即可，开门见山。",
            commonMistake: {
              wrong: "Hi, I want to set up internet.",
              correct: "Hi, I'd like to set up internet.",
              explanation: "“I want to” 听起来太直接，用 “I'd like to” 更礼貌，是常用表达。",
            },
            formalityVariants: {
              casual: "Hey, gotta get internet for my new place. What plans ya got?",
              standard: "Hi, I need to set up internet at my new apartment. What plans do you have available?",
              formal:
                "Good morning/afternoon, I am looking to establish internet service at my new residence. Could you please inform me of the service plans you currently offer?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "We have three plans. Basic is 100 Mbps for $49.99 a month, Standard is 300 Mbps for $69.99, and Premium is gigabit speed for $89.99.",
            textZh:
              "我们有三个套餐。基础版100Mbps每月49.99美元，标准版300Mbps每月69.99美元，高级版千兆速度每月89.99美元。",
            casualVersion: "We got three plans. Basic's 100 Mbps for $49.99, Standard's 300 Mbps for $69.99, and Premium's gigabit for $89.99.",
            formalityVariants: {
              casual: "Three plans: Basic 100 ($49.99), Standard 300 ($69.99), Premium gigabit ($89.99).",
              standard: "We have three plans. Basic is 100 Mbps for $49.99 a month, Standard is 300 Mbps for $69.99, and Premium is gigabit speed for $89.99.",
              formal: "We offer three distinct plans. The Basic plan provides 100 Mbps for $49.99 monthly, the Standard plan offers 300 Mbps for $69.99, and the Premium plan delivers gigabit speeds for $89.99.",
            },
            keyPhrases: [
              { en: "Mbps", zh: "兆比特每秒" },
              { en: "gigabit", zh: "千兆" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! We've got Basic at a hundred megs for fifty bucks, Standard at 300 for seventy, and the top tier is a full gig for ninety a month.",
                textZh: "好的！基础版100兆50块，标准版300兆70块，最高级别千兆一个月90块。",
                actionHint: "megs = megabits 兆; bucks = 美元; gig = gigabit 千兆",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I work from home and do video calls. Which plan would you recommend?",
            textZh: "我在家办公，经常视频通话。你推荐哪个套餐？",
            commonMistake: {
              wrong: "I work from home and do video calls. Which plan you recommend?",
              correct: "I work from home and do video calls. Which plan would you recommend?",
              explanation: "在 'Which plan would you recommend?' 中，'would you' 通常不省略。",
            },
            formalityVariants: {
              casual: "Work from home, video calls. Which plan d'ya recommend?",
              standard: "I work from home and do video calls. Which plan would you recommend?",
              formal: "Given that I work remotely and frequently engage in video conferencing, which plan would you advise?",
            },
            casualVersion: "I work from home with lots of video calls. Which one should I go with?",
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "For remote work with video conferencing, I'd recommend at least the Standard plan. It comes with a free modem, and installation is included.",
            textZh: "远程办公加视频会议的话，我推荐至少选标准版。附送免费调制解调器，安装也包含在内。",
            casualVersion: "For remote work with video calls, I'd say go with at least the Standard. Comes with a free modem, installation's included too.",
            commonMistake: {
              wrong: "I recommend you choose Standard plan.",
              correct: "I recommend the Standard plan / I recommend you choose the Standard plan.",
              explanation: "动词 recommend 后面直接跟名词或从句，不加 you。",
            },
            formalityVariants: {
              casual: "Remote work, video calls? Standard's probably best. Free modem, installation's covered.",
              standard: "For remote work with video conferencing, I would recommend at least the Standard plan. It comes with a complimentary modem, and installation is also included.",
              formal: "For your requirements of remote work and video conferencing, I would highly advise opting for at least the Standard plan. This plan includes a complimentary modem, and professional installation is also part of the package.",
            },
            keyPhrases: [
              { en: "remote work", zh: "远程办公" },
              { en: "modem", zh: "调制解调器" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For WFH with video calls, Standard should be plenty. You get a free modem and we'll send a tech out to set everything up — no extra charge.",
                textZh: "在家办公加视频通话，标准版就够了。送你一个调制解调器，我们会派技术人员上门安装——不另收费。",
                actionHint: "WFH = work from home; tech = technician 技术人员",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds good. When is the earliest you can send someone to install it?",
            textZh: "听起来不错。最早什么时候能派人来安装？",
            commonMistake: {
              wrong: "Sounds good. When earliest can send someone to install it?",
              correct: "Sounds good. When is the earliest you can send someone to install it?",
              explanation: "在疑问句中，'is the earliest' 和 'you can' 通常不省略。",
            },
            formalityVariants: {
              casual: "Sounds good. Earliest you can send someone to install?",
              standard: "Sounds good. When is the earliest you can send someone to install it?",
              formal: "That sounds satisfactory. May I inquire about the earliest available date for a technician to perform the installation?",
            },
            casualVersion: "I'll go with Standard. When's the soonest you can get someone out here?",
          },
          {
            speaker: "them",
            role: "客服",
            textEn:
              "The earliest available slot is this Thursday between 1 and 3 PM. The technician will need about 45 minutes to set everything up.",
            textZh: "最早的空闲时段是本周四下午1点到3点。技术人员大约需要45分钟完成安装。",
            casualVersion: "Earliest slot's this Thursday, between 1 and 3 PM. Tech'll need 'bout 45 minutes to get everything set up.",
            commonMistake: {
              wrong: "The earliest time is this Thursday between 1 and 3 PM.",
              correct: "The earliest available slot is this Thursday between 1 and 3 PM.",
              explanation: "表示预约时段，'slot' 比 'time' 更常用和地道。",
            },
            formalityVariants: {
              casual: "Thursday, 1-3 PM, is the soonest. Tech'll take 45 mins to set up.",
              standard: "The earliest available slot is this Thursday between 1 and 3 PM. The technician will need about 45 minutes to set everything up.",
              formal: "The earliest appointment availability is this Thursday, within the timeframe of 1 to 3 PM. The technician will require approximately 45 minutes to complete the full setup procedure.",
            },
            keyPhrases: [
              { en: "available slot", zh: "空闲时段" },
              { en: "technician", zh: "技术人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got an opening Thursday afternoon, 1 to 3. The install takes about 45 minutes — someone needs to be there to let us in.",
                textZh: "周四下午1到3点有空档。安装大约45分钟——需要有人在家让我们进去。",
                actionHint: "opening = 空档",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thursday works. Is there a contract, or is it month-to-month?",
            textZh: "周四可以。有合同吗，还是按月付？",
            culturalNote: "美国许多服务（如手机、网络）都有合同或无合同（按月付费）两种选择。",
            commonMistake: {
              wrong: "Thursday is good. Is there contract, or is it month-to-month?",
              correct: "Thursday works. Is there a contract, or is it month-to-month?",
              explanation: "'Thursday works' 更自然地表达时间合适。'a contract' 需要不定冠词。",
            },
            formalityVariants: {
              casual: "Thursday's fine. Contract or month-to-month?",
              standard: "Thursday works. Is there a contract, or is it month-to-month?",
              formal: "Thursday would be suitable. I'd like to inquire if this service entails a contractual agreement, or if it operates on a month-to-month basis.",
            },
            casualVersion: "Thursday's fine. Is it a contract or can I cancel anytime?",
          },
        ],
      },
    ],
  },

  // ==================== 14. 家具配送 ====================
  {
    id: "housing-furniture-delivery",
    category: "housing",
    titleZh: "家具配送",
    titleEn: "Furniture Delivery",
    description: "与配送员沟通家具送货、搬运和安装事宜",
    otherRole: "配送员",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "furniture-basic",
        titleZh: "基础配送",
        titleEn: "Basic Delivery",
        description: "接收家具配送和确认物品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Hi, we have a delivery for this address — a sofa and a bookshelf. Can you confirm you're the one who placed the order?",
            textZh: "你好，我们有一个送到这个地址的配送——一个沙发和一个书架。你能确认是你下的单吗？",
            commonMistake: {
              wrong: "Is this your order?",
              correct: "Is this yours?",
              explanation: "\"your order\"稍显生硬，\"yours\"或\"Did you order this\"更自然。",
            },
            keyPhrases: [
              { en: "delivery", zh: "配送" },
              { en: "placed the order", zh: "下的单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey there, got a sofa and bookshelf for this address. You the one who ordered these?",
                textZh: "嘿，这个地址有一个沙发和书架的配送。是你下的单吗？",
                actionHint: "got = 有（口语中常代替have）",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, got a delivery for this address—a sofa and a bookshelf. You the one who ordered?",
            formalityVariants: {
              casual: "Hey, got a delivery for here – sofa, bookshelf. You order 'em?",
              standard:
                "Hi, we have a delivery for this address — a sofa and a bookshelf. Can you confirm you're the one who placed the order?",
              formal:
                "Good morning/afternoon, we have a scheduled delivery for this address, consisting of one sofa and one bookshelf. Could you please confirm that you are the intended recipient and original purchaser?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, that's me! I ordered them online last week. Where should I sign?",
            textZh: "是的，是我！上周在网上订的。在哪里签收？",
            casualVersion: "Yep, that's me! Where do I sign?",
            commonMistake: {
              wrong: "Where should I sign for?",
              correct: "Where should I sign?",
              explanation: "中文常说“签收”，直译成“sign for”在英文中听起来不自然。直接用“sign”即可。",
            },
            formalityVariants: {
              casual: "Yup, that's me! Ordered online last week. Where do I sign?",
              standard: "Yes, that's me! I ordered them online last week. Where should I sign?",
              formal:
                "Yes, that is correct; I placed the order online last week. Could you please direct me to where I need to sign?",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Just sign here on the tablet. Before you do, I'd recommend checking the items for any damage. Once you sign, you're confirming everything is in good condition.",
            textZh: "在平板电脑上这里签字。签字前，建议你检查一下物品有没有损坏。签字后就表示确认一切完好。",
            commonMistake: {
              wrong: "I suggest you check",
              correct: "I'd recommend you check",
              explanation: "\"I'd recommend\" 比 \"I suggest\" 听起来更客气。",
            },
            keyPhrases: [
              { en: "checking for damage", zh: "检查有没有损坏" },
              { en: "in good condition", zh: "完好的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sign on the screen here. But give everything a quick look first — once you sign off, that's you saying it's all good.",
                textZh: "在屏幕上签字。但先快速看一下——签了字就等于说没问题。",
                actionHint: "sign off = 签字确认；that's you saying = 就等于你说",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just sign here on the tablet. But seriously, check 'em first for damage. Once you sign, you're saying everything's good.",
            formalityVariants: {
              casual: "Just sign the tablet here. But check for damage first. Once you sign, it's all good.",
              standard:
                "Just sign here on the tablet. Before you do, I'd recommend checking the items for any damage. Once you sign, you're confirming everything is in good condition.",
              formal:
                "Kindly sign here on the digital tablet. Prior to signing, it is advisable to inspect the items thoroughly for any potential damage. Your signature will serve as confirmation that the delivery has been received in satisfactory condition.",
            },
          },
          {
            speaker: "you",
            textEn: "Good point. Let me open the packaging and take a look first.",
            textZh: "好提醒。让我先拆开包装看看。",
            commonMistake: {
              wrong: "Let me open the package to have a look first.",
              correct: "Let me open the packaging and take a look first.",
              explanation: "'Package'通常指包裹整体，'packaging'指包装材料。'take a look'比'have a look'在美国更常用。",
            },
            casualVersion: "Good call. Let me check real quick.",
            formalityVariants: {
              casual: "Smart. Lemme check 'em out first.",
              standard: "Good point. Let me open the packaging and take a look first.",
              formal:
                "That is a very valid point. I will proceed to unpackage the items and conduct a preliminary inspection.",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Take your time. Also, do you want us to bring them upstairs, or is this a ground-floor unit? We can carry them up for free — it's part of the delivery service.",
            textZh: "不着急。另外，你要我们搬上楼吗，还是一楼？我们可以免费搬上去——这是配送服务的一部分。",
            commonMistake: {
              wrong: "Do you want us carry them up?",
              correct: "Do you want us to carry them up?",
              explanation: "\"want someone to do something\"是固定搭配。",
            },
            keyPhrases: [
              { en: "bring them upstairs", zh: "搬上楼" },
              { en: "part of the delivery service", zh: "配送服务的一部分" },
            ],
            alternativeExpressions: [
              {
                textEn: "No rush. You want us to haul them upstairs? No extra charge — that's included.",
                textZh: "不急。要我们搬上楼吗？不另外收费——包含在内的。",
                actionHint: "haul = 搬运（比较重的东西）",
                frequency: "common",
              },
            ],
            casualVersion:
              "No rush. Also, wanna us to bring 'em upstairs, or is it ground floor? We can carry 'em up free, it's part of the service.",
            culturalNote: "美国送货服务常包含送货上门甚至搬上楼，明确是免费服务。",
            formalityVariants: {
              casual:
                "Take your time. We bringing 'em upstairs, or you on the ground floor? We'll carry 'em up free, it's included.",
              standard:
                "Take your time. Also, do you want us to bring them upstairs, or is this a ground-floor unit? We can carry them up for free — it's part of the delivery service.",
              formal:
                "Please take as much time as you require. Furthermore, would you prefer us to transport these items to an upper floor, or is this a ground-level residence? We are pleased to inform you that carrying them upstairs is a complimentary service included with your delivery.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes please, I'm on the third floor. Everything looks fine — I'll sign now. Thank you!",
            textZh: "好的，我在三楼。东西都没问题——我现在签字。谢谢！",
            commonMistake: {
              wrong: "Yes please, I am on the third floor. Everything is okay now — I sign. Thank you!",
              correct: "Yes please, I'm on the third floor. Everything looks good now — I'll sign. Thanks!",
              explanation: "'I am on the third floor' 是对的，但'I'm'更自然。'Everything is okay'不如'Everything looks good'或'Everything is fine'自然。'I sign'用现在时态不自然，应用将来时'I'll sign'。",
            },
            casualVersion: "Yeah, I'm on the third floor. Looks good — I'll sign. Thanks!",
            formalityVariants: {
              casual: "Yep, third floor. Everything's good – signing now. Thanks!",
              standard: "Yes please, I'm on the third floor. Everything looks fine — I'll sign now. Thank you!",
              formal:
                "Yes, that would be appreciated; I reside on the third floor. I have completed my inspection and everything appears to be in order. I will sign the necessary documentation now. Thank you very much.",
            },
          },
        ],
      },
      {
        id: "furniture-issue",
        titleZh: "配送问题",
        titleEn: "Delivery Issues",
        description: "处理家具配送中的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hold on — I see a scratch on the side of the sofa. It wasn't like this in the picture. I don't want to sign for it like this.",
            textZh: "等一下——我看到沙发侧面有划痕。照片上不是这样的。我不想这样签收。",
            casualVersion: "Wait, there's a scratch here. This wasn't in the listing. I'm not signing for this.",
            commonMistake: {
              wrong: "I don't want to sign like this.",
              correct: "I don't want to sign for it like this.",
              explanation: "“sign for it” 表示签收物品，比 “sign” 更明确。",
            },
            formalityVariants: {
              casual:
                "Whoa, there's a scratch on the side of the sofa. It wasn't there in the pic. I'm not signing for it like this.",
              standard:
                "Hold on — I see a scratch on the side of the sofa. It wasn't like this in the picture. I don't want to sign for it like this.",
              formal:
                "Excuse me, but I've observed a scratch on the side of the sofa. This defect was not present in the photographic representation. I am therefore unable to accept and sign for the delivery in its current condition.",
            },
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "I'm sorry about that. Let me take a photo and note it on the delivery report. You have two options: refuse the delivery and get a replacement, or accept it and file a damage claim for a partial refund.",
            textZh:
              "很抱歉。我拍张照片，在配送报告上注明。你有两个选择：拒收等待换货，或者签收后提交损坏索赔申请部分退款。",
            casualVersion: "My bad. Lemme get a pic and write it down on the report. You got two choices: send it back and get a new one, or take it and file a claim for some money back.",
            commonMistake: {
              wrong: "make a damage claim",
              correct: "file a damage claim",
              explanation: "“file a claim” 是提交正式索赔的常用表达。",
            },
            formalityVariants: {
              casual: "Sorry 'bout that. I'll snap a pic and jot it on the report. Basically, two ways to go: send it back for a new one, or keep it and get some cash back with a claim.",
              standard: "I'm sorry about that. Let me take a photo and note it on the delivery report. You have two options: refuse the delivery and get a replacement, or accept it and file a damage claim for a partial refund.",
              formal: "My sincerest apologies regarding this issue. I will document the damage photographically and record it on the official delivery report. You are presented with two courses of action: either decline the delivery and arrange for a replacement unit, or accept the item and initiate a damage claim for a partial reimbursement.",
            },
            keyPhrases: [
              { en: "refuse the delivery", zh: "拒收" },
              { en: "damage claim", zh: "损坏索赔" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, that shouldn't be there. I'll document it. You can either send it back and we'll get you a new one, or keep it and put in a claim for a discount.",
                textZh: "是的，不应该有的。我记录下来。你可以退回去我们给你换新的，或者留下来申请折扣。",
                actionHint: "put in a claim = 提交索赔",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll accept it and file a claim. The scratch is small, and I don't want to wait another week. How do I file the claim?",
            textZh: "我接受，然后提交索赔。划痕很小，我不想再等一周。怎么提交索赔？",
            commonMistake: {
              wrong: "How to make the claim?",
              correct: "How do I file the claim?",
              explanation: "“How do I...?” 是询问具体操作的常用句式，“file a claim” 是提交索赔的规范用语。",
            },
            formalityVariants: {
              casual: "Yeah, I'll take it and just do the claim thing. Scratch ain't bad, and I really don't wanna wait another week. So, how do I file it?",
              standard: "I'll accept it and file a claim. The scratch is small, and I don't want to wait another week. How do I file the claim?",
              formal: "I will proceed with accepting the delivery and will initiate a claim. Given the minor nature of the scratch, I prefer not to endure an additional week's delay. Could you please instruct me on the procedure for filing this claim?",
            },
            casualVersion: "I'll keep it and file a claim. It's minor. How do I do that?",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Call the customer service number on your receipt or go to the website. They'll ask for the delivery confirmation number and the photos. Usually takes 5 to 7 business days.",
            textZh: "打收据上的客服电话或去网站。他们会要求提供配送确认号和照片。通常5到7个工作日。",
            casualVersion: "Just call the customer service number on your receipt or hit up their website. They'll need your confirmation number and the pics. Usually takes 'bout 5 to 7 business days.",
            commonMistake: {
              wrong: "Call the number in your receipt.",
              correct: "Call the number on your receipt.",
              explanation: "表示电话号码印在收据上，用 “on” 更地道。",
            },
            formalityVariants: {
              casual: "Just call the number on your receipt or hop on their site. They'll wanna see your confirmation number and the pics. Expect it to take 'round 5 to 7 business days.",
              standard: "Call the customer service number on your receipt or go to the website. They'll ask for the delivery confirmation number and the photos. Usually takes 5 to 7 business days.",
              formal: "Please contact the customer service department via the telephone number provided on your receipt, or access their official website. You will be required to furnish the delivery confirmation number and photographic evidence. The processing typically requires five to seven business days.",
            },
            keyPhrases: [
              { en: "delivery confirmation number", zh: "配送确认号" },
              { en: "business days", zh: "工作日" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Just call the number on your receipt or do it online. Have your order number and the pics ready. They usually get back to you within a week.",
                textZh: "打收据上的电话或在线处理。准备好订单号和照片。他们通常一周内回复你。",
                actionHint: "get back to you = 回复你",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One more thing — the bookshelf needs assembly. Does your delivery include assembly service?",
            textZh: "还有一件事——书架需要组装。你们配送包含组装服务吗？",
            culturalNote: "在美国，家具通常需要自行组装或另付组装费，这很常见。",
            commonMistake: {
              wrong: "The bookshelf needs assemble.",
              correct: "The bookshelf needs assembly.",
              explanation: "“assembly” 是名词，表示“组装”这个动作或服务。",
            },
            formalityVariants: {
              casual: "Oh, also, the bookshelf needs putting together. Is assembly part of the delivery?",
              standard: "One more thing — the bookshelf needs assembly. Does your delivery include assembly service?",
              formal: "Furthermore, regarding the bookshelf, it appears to require assembly. Is assembly service customarily included with your delivery?",
            },
            casualVersion: "Oh, and the bookshelf — do you guys put it together, or is that on me?",
          },
          {
            speaker: "them",
            role: "配送员",
            textEn:
              "Assembly is an extra $40. We can do it right now if you want — it takes about 30 minutes. Or you can do it yourself with the instructions in the box.",
            textZh: "组装另外收40美元。你要的话我们现在就可以装——大约30分钟。或者你可以自己按照箱子里的说明书装。",
            casualVersion: "Assembly's forty bucks extra. We can knock it out now if you want – takes 'bout half an hour. Or you can just DIY it with the directions in the box.",
            commonMistake: {
              wrong: "with the instructions on the box.",
              correct: "with the instructions in the box.",
              explanation: "“in the box” 指说明书在箱子里面，是正确的表达。",
            },
            formalityVariants: {
              casual: "Yeah, assembly's an extra 40. We can get it done now if you're good with that — probably half an hour. Or, just do it yourself, the directions are in the box.",
              standard: "Assembly is an extra $40. We can do it right now if you want — it takes about 30 minutes. Or you can do it yourself with the instructions in the box.",
              formal: "The assembly service incurs an additional charge of $40. We are prepared to proceed with the assembly immediately, should you desire; it typically requires approximately 30 minutes. Alternatively, you may elect to perform the assembly independently, utilizing the provided instructions located within the packaging.",
            },
            keyPhrases: [
              { en: "assembly", zh: "组装" },
              { en: "instructions", zh: "说明书" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Assembly's forty bucks extra. We can knock it out right now if you want, or there's an instruction manual inside if you wanna DIY.",
                textZh: "组装额外40块。你要的话我们现在就搞定，或者里面有说明书你可以自己装。",
                actionHint: "knock it out = 搞定（快速完成）; DIY = 自己动手",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 15. 与房东纠纷 ====================
  {
    id: "housing-landlord-dispute",
    category: "housing",
    titleZh: "与房东纠纷",
    titleEn: "Landlord Dispute",
    description: "与房东就维修义务、租金或合同条款产生分歧时的沟通",
    otherRole: "房东",
    otherRoleIcon: "🏠",
    flows: [
      {
        id: "dispute-basic",
        titleZh: "维修纠纷",
        titleEn: "Maintenance Dispute",
        description: "房东拒绝维修时的沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "I've reported the broken heater three times now. It's been two weeks and nobody has come to fix it. My apartment is freezing.",
            textZh: "我已经报修暖气三次了。已经两周了还没有人来修。我的公寓冷得要命。",
            casualVersion:
              "I've asked about the heater three times now. It's been two weeks and it's freezing in here.",
            culturalNote: "美国法律对租客权益有明确规定，尤其关于必需服务维修时限。",
            commonMistake: {
              wrong:
                "I already reported the heater broken three times. Two weeks already, no one come to fix it. My apartment very cold.",
              correct:
                "I've reported the broken heater three times now. It's been two weeks and nobody has come to fix it. My apartment is freezing.",
              explanation: "动词时态和主谓一致错误，且用词不够地道。",
            },
            formalityVariants: {
              casual:
                "Look, I've told you about the broken heater three times. Two weeks, still no one's fixed it. My place is literally freezing.",
              standard:
                "I've reported the broken heater three times now. It's been two weeks and nobody has come to fix it. My apartment is freezing.",
              formal:
                "I wish to reiterate that I have reported the malfunction of the heating unit on three separate occasions. It has now been two weeks, and I have yet to receive a service visit. The temperature in my apartment is unacceptably low.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "I know, I'm sorry. I've been trying to find a contractor, but everyone's booked right now. I'll try to get someone out there by the end of the week.",
            textZh: "我知道，抱歉。我一直在找承包商，但现在大家都排满了。我尽量让人这周末之前过来。",
            keyPhrases: [
              { en: "contractor", zh: "承包商" },
              { en: "booked", zh: "排满了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I apologize. It's been hard finding someone available — everybody's swamped. I'll try to get it sorted by Friday.",
                textZh: "是的，很抱歉。找到有空的人很难——大家都忙不过来。我尽量周五前解决。",
                actionHint: "swamped = 忙得不可开交；sorted = 解决",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, I know, sorry. Been trying to find a contractor, but everyone's totally booked. I'll try to get someone out by end of week.",
            commonMistake: {
              wrong:
                "I know, sorry. I always try to find contractor, but everyone very busy now. I try to let someone come by end of week.",
              correct:
                "I know, I'm sorry. I've been trying to find a contractor, but everyone's booked right now. I'll try to get someone out there by the end of the week.",
              explanation: "时态、用词、口语表达不自然。",
            },
            formalityVariants: {
              casual:
                "Yeah, I know, sorry. Been trying to find a contractor, but everyone's totally booked. I'll try to get someone out by end of week.",
              standard:
                "I know, I'm sorry. I've been trying to find a contractor, but everyone's booked right now. I'll try to get someone out there by the end of the week.",
              formal:
                "I understand your frustration, and I apologize for the delay. I have been actively seeking a qualified contractor, however, their schedules are currently fully committed. I will endeavor to arrange for a technician to visit your unit by the close of this week.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I appreciate that, but the end of the week isn't good enough. Under state law, heating is considered an essential service and has to be repaired within 24 hours.",
            textZh: "谢谢，但周末不够快。根据州法律，供暖属于基本服务，必须在24小时内修复。",
            casualVersion:
              "Look, I can't wait till Friday. Heating is legally required — it's supposed to be fixed within 24 hours.",
            culturalNote: "美国法律对租客权益有明确规定，尤其关于必需服务维修时限。",
            commonMistake: {
              wrong:
                "Thanks, but end of week not enough good. State law says, heating is essential service, must repair in 24 hours.",
              correct:
                "I appreciate that, but the end of the week isn't good enough. Under state law, heating is considered an essential service and has to be repaired within 24 hours.",
              explanation: "用词不地道，缺少冠词，表达不够流畅。",
            },
            formalityVariants: {
              casual:
                "Thanks, but that's not gonna work. End of week's not good enough. State law says heat's essential, gotta be fixed in 24 hours.",
              standard:
                "I appreciate that, but the end of the week isn't good enough. Under state law, heating is considered an essential service and has to be repaired within 24 hours.",
              formal:
                "While I appreciate your efforts, a resolution by the end of the week is insufficient. I must remind you that, pursuant to state statutes, heating is classified as an essential service and mandates repair within a 24-hour timeframe.",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "You're right, I understand. Let me call an emergency HVAC service today. It'll cost more, but I'll make it happen.",
            textZh: "你说得对，我理解。我今天就打电话叫紧急暖通服务。费用会高一些，但我来搞定。",
            keyPhrases: [
              { en: "emergency HVAC service", zh: "紧急暖通服务" },
              { en: "make it happen", zh: "搞定" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Fair point. I'll call someone for an emergency visit today. It's gonna be pricey, but I'll take care of it.",
                textZh: "说得有道理。我今天就打电话叫人紧急上门。会贵一些，但我来处理。",
                actionHint: "fair point = 说得有道理；pricey = 贵的",
                frequency: "common",
              },
            ],
            casualVersion:
              "You're right, I get it. Lemme call an emergency HVAC service today. Gonna cost more, but I'll get it done.",
            commonMistake: {
              wrong:
                "You right, I understand. Let me call emergency HVAC service today. Will cost more, but I make it success.",
              correct:
                "You're right, I understand. Let me call an emergency HVAC service today. It'll cost more, but I'll make it happen.",
              explanation: "用词和表达不自然。",
            },
            formalityVariants: {
              casual:
                "You're right, I get it. Lemme call an emergency HVAC service today. Gonna cost more, but I'll get it done.",
              standard:
                "You're right, I understand. Let me call an emergency HVAC service today. It'll cost more, but I'll make it happen.",
              formal:
                "You are absolutely correct, and I acknowledge the urgency. I will promptly contact an emergency HVAC service today, despite the additional expense, to ensure immediate resolution.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. In the meantime, can you provide a space heater so I'm not freezing tonight?",
            textZh: "谢谢。在此期间，能提供一个电暖器吗？这样今晚不至于挨冻。",
            casualVersion: "Thanks. Any chance you can drop off a space heater so I don't freeze tonight?",
            commonMistake: {
              wrong: "Thanks. In the meantime, can you give me a space heater so I no freeze tonight?",
              correct: "Thank you. In the meantime, can you provide a space heater so I'm not freezing tonight?",
              explanation: "缺少be动词，表达不够流畅。",
            },
            formalityVariants: {
              casual: "Thanks. Meanwhile, can you hook me up with a space heater so I don't freeze tonight?",
              standard: "Thank you. In the meantime, can you provide a space heater so I'm not freezing tonight?",
              formal:
                "Thank you for your prompt action. As an interim solution, would it be possible for you to supply a space heater to mitigate the low temperatures within my apartment this evening?",
            },
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Sure, I have one I can bring over this afternoon. I'll also give you a rent credit for the days you've been without heat.",
            textZh: "当然，我有一个今天下午可以送过来。这几天没暖气的日子我也会给你减免租金。",
            keyPhrases: [
              { en: "space heater", zh: "电暖器" },
              { en: "rent credit", zh: "租金减免" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I've got a portable heater — I'll bring it by this afternoon. And I'll knock some off next month's rent for the inconvenience.",
                textZh: "有的，我有个便携式暖器——今天下午送过来。下个月租金我也给你减一些，补偿这段时间的不便。",
                actionHint: "knock some off = 减去一些",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国大多数州法律规定供暖是房东的法定义务。如果房东长期不修，租客有权'修理后从租金中扣除'（repair and deduct）或通过住房法庭追究。",
            casualVersion:
              "Sure, got one I can bring over this afternoon. Plus, rent credit for the days you had no heat.",
            commonMistake: {
              wrong:
                "Sure, I have one I can take over this afternoon. I also will reduce your rent for the days you no have heat.",
              correct:
                "Sure, I have one I can bring over this afternoon. I'll also give you a rent credit for the days you've been without heat.",
              explanation: "动词误用，用词不准确。",
            },
            formalityVariants: {
              casual: "Sure, got one I can bring over this afternoon. Plus, rent credit for the days you had no heat.",
              standard:
                "Sure, I have one I can bring over this afternoon. I'll also give you a rent credit for the days you've been without heat.",
              formal:
                "Certainly, I have a space heater available which I can deliver to your unit this afternoon. Furthermore, I will issue a rent credit commensurate with the period during which the heating system was inoperable.",
            },
          },
        ],
      },
      {
        id: "dispute-rights",
        titleZh: "维权沟通",
        titleEn: "Asserting Tenant Rights",
        description: "当房东不履行义务时维护租客权益",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I need to talk to you about the mold problem in my bathroom. I reported it a month ago and nothing has been done.",
            textZh: "我需要跟你谈谈卫生间的霉菌问题。一个月前就报告了，什么也没做。",
            commonMistake: {
              wrong: "I need to talk with you about the mold problem.",
              correct: "I need to talk to you about the mold problem.",
              explanation: "“talk to”更常用于讨论具体问题，“talk with”更泛指交谈。",
            },
            formalityVariants: {
              casual: "I gotta talk to you about the mold in my bathroom. I told you about it a month ago, and still nothing's happened.",
              standard: "I need to talk to you about the mold problem in my bathroom. I reported it a month ago and nothing has been done.",
              formal: "I must bring to your attention the persistent mold issue within my bathroom. Despite my previous report submitted one month prior, no action has yet been taken.",
            },
            casualVersion:
              "We need to talk about the mold in my bathroom. I told you about it a month ago and it's still there.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "Mold is usually caused by poor ventilation. Are you running the bathroom fan when you shower? You might need to keep the window open more.",
            textZh: "霉菌通常是通风不好造成的。你洗澡时开浴室排风扇了吗？你可能需要多开窗。",
            culturalNote: "美国房东可能会先尝试将问题归咎于租客使用不当。",
            casualVersion: "Usually mold's from bad ventilation. You running the bathroom fan when you shower? Might need to keep the window open more.",
            commonMistake: {
              wrong: "Mold is caused by bad ventilation.",
              correct: "Mold is usually caused by poor ventilation.",
              explanation: "加上“usually”让语气更委婉自然，不是直接指责。",
            },
            formalityVariants: {
              casual: "Mold's usually from bad airflow. You using the fan when you shower? Maybe keep the window open more.",
              standard: "Mold is usually caused by poor ventilation. Are you running the bathroom fan when you shower? You might need to keep the window open more.",
              formal: "It is generally understood that mold formation is attributable to insufficient ventilation. May I inquire if you activate the bathroom exhaust fan during showering? Additionally, it may be beneficial to maintain the window in an open position more frequently.",
            },
            keyPhrases: [
              { en: "ventilation", zh: "通风" },
              { en: "bathroom fan", zh: "浴室排风扇" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's usually a ventilation thing. Are you using the exhaust fan? Try leaving the window cracked after you shower.",
                textZh: "那通常是通风问题。你用排风扇了吗？试试洗完澡把窗户开条缝。",
                actionHint: "leaving the window cracked = 把窗户开条缝",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I do run the fan every time. The mold is coming from a leak in the wall — that's a structural issue, not a ventilation problem. That's your responsibility to fix.",
            textZh: "我每次都开排风扇。霉菌是因为墙里漏水——那是结构问题，不是通风问题。这是你的责任来修。",
            commonMistake: {
              wrong: "It is your responsibility to fix.",
              correct: "It's your responsibility to fix.",
              explanation: "“It is”缩写为“It's”更自然，语气也更柔和。",
            },
            formalityVariants: {
              casual: "I run the fan every single time. The mold's from a leak in the wall — that's structural, not ventilation. You're responsible for fixing it.",
              standard: "I do run the fan every time. The mold is coming from a leak in the wall — that's a structural issue, not a ventilation problem. It's your responsibility to fix.",
              formal: "I assure you that I operate the fan consistently. The presence of mold originates from a leak within the wall structure, which constitutes a structural deficiency, not a ventilation concern. Therefore, remediation is unequivocally your responsibility.",
            },
            casualVersion: "I always run the fan. The mold is from a leak in the wall. That's on you to fix, not me.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "If there's really a leak, I'll need to send someone to inspect it. But I want to make sure it's not just condensation before I spend money on a plumber.",
            textZh: "如果真的有漏水，我需要派人检查。但在花钱请水管工之前，我想确认不只是结露。",
            casualVersion: "If there's really a leak, I'll have to send someone to check it out. But before I shell out for a plumber, I wanna make sure it's not just condensation.",
            commonMistake: {
              wrong: "If there is really a leak...",
              correct: "If there really is a leak...",
              explanation: "口语中“there is”常缩写，“really”位置灵活。",
            },
            formalityVariants: {
              casual: "If there's actually a leak, I'll send someone to check it. But before I pay for a plumber, I wanna be sure it's not just condensation.",
              standard: "If there really is a leak, I'll need to send someone to inspect it. But before I pay for a plumber, I want to confirm it's not just condensation.",
              formal: "Should a leak genuinely be present, I will arrange for a professional inspection. However, prior to engaging a plumber, I wish to ascertain that the issue is not merely condensation.",
            },
            keyPhrases: [
              { en: "inspect", zh: "检查" },
              { en: "condensation", zh: "结露" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Okay, if it's a leak, I'll get someone to look at it. But let me verify it's actually water damage and not just moisture buildup first.",
                textZh: "好的，如果是漏水，我找人来看。但让我先确认是真的水损而不只是湿气积聚。",
                actionHint: "moisture buildup = 湿气积聚",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'd like that inspection done within this week. Mold is a health hazard, and I have documentation of all my repair requests. If it's not addressed, I may need to contact the housing authority.",
            textZh:
              "我希望这周内完成检查。霉菌对健康有害，我有所有维修请求的记录。如果不处理，我可能需要联系住房管理部门。",
            culturalNote: "美国租客会保存所有维修记录，以便必要时投诉或采取法律行动。",
            commonMistake: {
              wrong: "I expect the inspection to be finished this week.",
              correct: "I expect that inspection to be done this week.",
              explanation: "“done”在口语中比“finished”更常用、更自然。",
            },
            formalityVariants: {
              casual: "I need that inspection done this week. Mold's a health risk, and I've got records of all my requests. If this isn't fixed, I might have to call housing authorities.",
              standard: "I expect that inspection to be done this week. Mold is a health hazard, and I have records of all my maintenance requests. If this isn't handled, I may need to contact housing authorities.",
              formal: "I anticipate the completion of said inspection within the current week. Mold constitutes a significant health hazard, and I retain meticulous documentation of all my maintenance requests. Should this matter remain unresolved, I may be compelled to engage with housing regulatory bodies.",
            },
            casualVersion:
              "I need the inspection this week. Mold is a health issue — I've got all my requests documented. If nothing happens, I'll go to the housing authority.",
          },
          {
            speaker: "them",
            role: "房东",
            textEn:
              "That won't be necessary. I'll schedule an inspection for Wednesday and we'll go from there. If it's a leak, I'll have it fixed immediately.",
            textZh: "不至于那样。我安排周三来检查，然后根据情况处理。如果是漏水，我会立刻修。",
            casualVersion: "Nah, that won't be necessary. I'll get someone out Wednesday for the inspection and we'll deal with it then. If it's a leak, I'll fix it right away.",
            commonMistake: {
              wrong: "That will not be necessary.",
              correct: "That won't be necessary.",
              explanation: "口语中“will not”通常缩写为“won't”。",
            },
            formalityVariants: {
              casual: "No, that's not needed. I'll get an inspection set for Wednesday and handle it. If it's a leak, I'll fix it pronto.",
              standard: "That won't be necessary. I'll schedule an inspection for Wednesday and address it accordingly. If it's a leak, I'll fix it immediately.",
              formal: "Such measures will not be required. I will arrange for an inspection to take place on Wednesday and proceed with appropriate action. Should a leak be confirmed, immediate repairs will be initiated.",
            },
            keyPhrases: [
              { en: "housing authority", zh: "住房管理部门" },
              { en: "go from there", zh: "根据情况处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let's not go there. I'll have someone check it out Wednesday, and if it turns out to be a leak, I'll get it fixed right away.",
                textZh: "别走到那一步。周三我让人来看，如果确实是漏水，我马上修。",
                actionHint: "let's not go there = 别走到那一步",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },
];
