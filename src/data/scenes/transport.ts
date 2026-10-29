import type { PresetScene } from "../scene-types";

// ============================================================
// 交通场景 — Transport Scenes
// 覆盖：打车、地铁、租车、问路
// ============================================================

export const TRANSPORT_SCENES: PresetScene[] = [
  // ==================== 打车 ====================
  {
    id: "transport-taxi",
    tags: ["taxi", "打车", "出租车", "uber", "lyft", "网约车", "rideshare"],
    category: "transport",
    titleZh: "打车",
    titleEn: "Taking a Taxi",
    description: "在国外打车的各种场景，包括路边打车、叫网约车和处理价格争议",
    otherRole: "出租车司机",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 标准打车 ---
      {
        id: "standard",
        titleZh: "标准打车",
        titleEn: "Standard Taxi Ride",
        description: "路边拦车或在出租车站上车，告知目的地，正常到达并付款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, could you take me to the Hilton Hotel on 5th Avenue?",
            textZh: "你好，能送我去第五大道的希尔顿酒店吗？",
            culturalNote: "上车后直接说目的地即可。如果不确定地址，可以给司机看手机上的地图。",
            casualVersion: "Hey, Hilton Hotel on 5th Avenue, please.",
            commonMistake: {
              wrong: "Hi, could you send me to the Hilton Hotel on 5th Avenue?",
              correct: "Hi, could you take me to the Hilton Hotel on 5th Avenue?",
              explanation: "中文'送我去'直译为'send me'不自然，英文常用'take me to'。",
            },
            formalityVariants: {
              casual: "Hey, Hilton on 5th?",
              standard: "Hi, could you take me to the Hilton Hotel on 5th Avenue?",
              formal:
                "Good morning/afternoon, would you be so kind as to drive me to the Hilton Hotel on 5th Avenue, please?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Sure, hop in. Do you have a specific route you'd like me to take, or should I just take the fastest way?",
            textZh: "好的，上车吧。您有想走的路线，还是我走最快的路？",
            culturalNote: "美国司机通常会问乘客路线偏好，并非所有司机都像国内一样默认走最快路线。",
            variations: [
              {
                textEn: "No problem. That's about 20 minutes from here. Get in.",
                textZh: "没问题。从这里大概20分钟。上车吧。",
              },
              { textEn: "Hilton on 5th? Sure thing. Jump in.", textZh: "第五大道的希尔顿？没问题。上车。" },
            ],
            keyPhrases: [
              { en: "hop in", zh: "上车" },
              { en: "specific route", zh: "特定路线" },
              { en: "fastest way", zh: "最快的路" },
            ],
            alternativeExpressions: [
              { textEn: "Where to?", textZh: "去哪儿？", actionHint: "告诉司机目的地", frequency: "common" },
              {
                textEn: "Hop in, where are we headed?",
                textZh: "上车吧，去哪？",
                actionHint: "直接说地址",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, hop in. Got a route in mind or just want the fastest way?",
            formalityVariants: {
              casual: "Sure, hop in. Any route you want, or just the fastest way?",
              standard:
                "Sure, hop in. Do you have a specific route you'd like me to take, or should I just take the fastest way?",
              formal:
                "Certainly, please make yourself comfortable. Do you have a preferred route, or would you prefer I take the most expeditious path?",
            },
          },
          {
            speaker: "you",
            textEn: "Whatever's fastest is fine. How long will it take?",
            textZh: "走最快的就行。大概要多久？",
            commonMistake: {
              wrong: "It's fastest",
              correct: "Whatever's fastest",
              explanation: "It's fastest 听起来像陈述句，Whatever's fastest 才是表达'随便，最快就行'。",
            },
            casualVersion: "Fastest is good. How long's it gonna take?",
            formalityVariants: {
              casual: "Fastest works. How long?",
              standard: "Whatever's fastest is fine. How long will it take?",
              formal:
                "The most expedient route would be preferable. Approximately how much time will the journey require?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Shouldn't be more than 20 minutes, depending on traffic. Rush hour is winding down, so it should be okay.",
            textZh: "应该不超过20分钟，看交通情况。高峰期快过了，应该还行。",
            keyPhrases: [
              { en: "depending on traffic", zh: "看交通情况" },
              { en: "rush hour", zh: "高峰期" },
              { en: "winding down", zh: "快结束了" },
            ],
            alternativeExpressions: [
              {
                textEn: "Maybe 20 minutes or so, if traffic cooperates.",
                textZh: "顺利的话大概20分钟吧。",
                actionHint: "了解大概到达时间",
                frequency: "common",
              },
              {
                textEn: "Hard to say — could be 15, could be 30. You know how it is.",
                textZh: "不好说——15分钟到30分钟都有可能。你懂的。",
                actionHint: "做好时间弹性准备",
                frequency: "occasional",
              },
            ],
            casualVersion: "Shouldn't be over 20 mins, depends on traffic. Rush hour's ending, so we're good.",
            formalityVariants: {
              casual: "Probably under 20 mins, traffic allowing. Rush hour's letting up, so we should be fine.",
              standard:
                "Shouldn't be more than 20 minutes, depending on traffic. Rush hour is winding down, so it should be okay.",
              formal:
                "The journey should not exceed 20 minutes, contingent upon prevailing traffic conditions. As rush hour is concluding, the transit should proceed without significant delay.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. Can you turn on the meter, please?",
            textZh: "好的。能打表吗？",
            culturalNote: "在正规出租车中，要求打表（turn on the meter）是合理的。有些城市是固定价格。",
            casualVersion: "Sounds good. Meter on?",
            commonMistake: {
              wrong: "Can you open the meter, please?",
              correct: "Can you turn on the meter, please?",
              explanation: "中文'开表'直译为'open the meter'不自然，英文常用'turn on the meter'或'start the meter'。",
            },
            formalityVariants: {
              casual: "Cool. Meter on?",
              standard: "Sounds good. Can you turn on the meter, please?",
              formal: "That sounds acceptable. Would you kindly activate the taxi meter, please?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's already running. You can see it right there on the dashboard.",
            textZh: "已经在跑了。您看仪表盘上就有。",
            keyPhrases: [
              { en: "already running", zh: "已经在跑了" },
              { en: "dashboard", zh: "仪表盘" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, meter's on. You can see it up front.",
                textZh: "是的，表打着呢。你看前面。",
                actionHint: "确认计价器在运行",
                frequency: "common",
              },
              {
                textEn: "Don't worry, it started when you got in.",
                textZh: "放心，你上车就开始计时了。",
                actionHint: "不用额外要求打表",
                frequency: "common",
              },
            ],
            casualVersion: "It's already on. See it there on the dash.",
            formalityVariants: {
              casual: "It's already going. Right there on the dash.",
              standard: "It's already running. You can see it right there on the dashboard.",
              formal: "It is already in operation. You will observe the display on the dashboard.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thanks. Could you drop me off at the main entrance?",
            textZh: "好的，谢谢。能在正门放我下车吗？",
            commonMistake: {
              wrong: "Drop me at main entrance",
              correct: "Drop me off at the main entrance",
              explanation: "'drop me' 在英文中是不完整的，需要加上 off。",
            },
            casualVersion: "Awesome, thanks. Drop me at the main entrance?",
            formalityVariants: {
              casual: "Cool, thanks. Main entrance drop-off?",
              standard: "Great, thanks. Could you drop me off at the main entrance?",
              formal: "Excellent, thank you. Would it be possible to be dropped off at the main entrance, please?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Here we are. That comes to $23.50.",
            textZh: "到了。一共23.50美元。",
            keyPhrases: [
              { en: "here we are", zh: "到了" },
              { en: "comes to", zh: "一共是" },
            ],
            alternativeExpressions: [
              {
                textEn: "Alright, that's $23.50. Cash or card?",
                textZh: "好了，23.50美元。现金还是刷卡？",
                actionHint: "准备付款",
                frequency: "common",
              },
              {
                textEn: "We're here. It's 23 fifty.",
                textZh: "到了。23块5。",
                actionHint: "准备付款下车",
                frequency: "common",
              },
            ],
            casualVersion: "Here we are. That's twenty-three fifty.",
            formalityVariants: {
              casual: "We're here. Twenty-three fifty.",
              standard: "Here we are. That comes to $23.50.",
              formal: "We have arrived at your destination. The total fare is $23.50.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I pay by card?",
            textZh: "可以刷卡吗？",
            casualVersion: "Do you take card?",
            commonMistake: {
              wrong: "Can I swipe card?",
              correct: "Can I pay by card?",
              explanation: "中文'刷卡'直译'swipe card'不自然，英文常用'pay by card'或'use a card'。",
            },
            formalityVariants: {
              casual: "Card okay?",
              standard: "Can I pay by card?",
              formal: "May I settle the fare using a credit or debit card?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, tap or insert your card right here. Would you like a receipt?",
            textZh: "可以，在这里刷或感应一下。要收据吗？",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "receipt", zh: "收据" },
            ],
            alternativeExpressions: [
              {
                textEn: "Card's fine. Just tap it right here.",
                textZh: "刷卡没问题。在这儿碰一下就行。",
                actionHint: "掏出银行卡",
                frequency: "common",
              },
              {
                textEn: "Sure, chip or tap. Need a receipt?",
                textZh: "行，插卡或感应都行。要小票吗？",
                actionHint: "选择刷卡方式",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, just tap or insert your card here. Want a receipt?",
            culturalNote: "在美国，司机通常会问你是否需要收据，而非自动提供。",
            formalityVariants: {
              casual: "Yep, tap or insert here. Receipt?",
              standard: "Yes, tap or insert your card right here. Would you like a receipt?",
              formal:
                "Certainly, please tap or insert your card into the reader located here. Would you require a receipt for your records?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Thank you. Keep the change.",
            textZh: "要的。谢谢。不用找了。",
            culturalNote: '在美国，出租车一般给15-20%小费。"Keep the change" 意思是零头不用找了。',
            casualVersion: "Yeah, thanks. Keep the change.",
            commonMistake: {
              wrong: "No need to give change.",
              correct: "Keep the change.",
              explanation: "中文'不用找钱'直译不自然，英文表达为'Keep the change'或'You can keep the change'。",
            },
            formalityVariants: {
              casual: "Yep, thanks. Keep it.",
              standard: "Yes, please. Thank you. Keep the change.",
              formal:
                "Yes, a receipt would be appreciated. Thank you for the ride. Please retain the remainder of the payment as gratuity.",
            },
          },
        ],
      },

      // --- Flow 2: 叫网约车 ---
      {
        id: "uber-lyft",
        titleZh: "叫网约车",
        titleEn: "Rideshare (Uber/Lyft)",
        description: "用手机叫网约车，与司机确认接车点，沟通目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, are you my Uber? I'm looking for a white Toyota Camry.",
            textZh: "你好，你是我的 Uber 吗？我在找一辆白色丰田凯美瑞。",
            casualVersion: "Hey, you my Uber? Looking for a white Camry.",
            formalityVariants: {
              casual: "Hey, you my Uber? Looking for a white Camry.",
              standard: "Hi, are you my Uber? I'm looking for a white Toyota Camry.",
              formal: "Good evening/morning, I presume you are my designated Uber driver? I am searching for a white Toyota Camry.",
            },
            culturalNote: "确认车型和司机名字是网约车的基本安全习惯。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes! Are you Wei? I've been waiting by the coffee shop. Hop in!",
            textZh: "是的！你是 Wei 吗？我在咖啡店旁边等你呢。上车吧！",
            casualVersion: "Yep! Wei? Waiting by the coffee shop. Get in!",
            formalityVariants: {
              casual: "Yep! Wei? Waiting by the coffee shop. Get in!",
              standard: "Yes! Are you Wei? I'm waiting for you by the coffee shop. Hop in!",
              formal: "Indeed! Are you Mr./Ms. Wei? I am currently awaiting your arrival adjacent to the coffee establishment. Please enter the vehicle.",
            },
            variations: [{ textEn: "That's me. What's the name on your ride?", textZh: "是我。你订单上的名字是？" }],
            keyPhrases: [
              { en: "waiting by", zh: "在……旁边等" },
              { en: "name on your ride", zh: "订单上的名字" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, that's me. Confirm your name for me?",
                textZh: "是的，是我。跟我确认一下你的名字？",
                actionHint: "报出你的名字",
                frequency: "common",
              },
              {
                textEn: "Hey! I've been circling the block. Jump in!",
                textZh: "嘿！我绕了好几圈了。快上车！",
                actionHint: "赶紧上车",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's me. The app says you're going to the airport, right?",
            textZh: "是的，是我。App 上显示去机场，对吗？",
            casualVersion: "Yup, that's me. App says airport, right?",
            commonMistake: {
              wrong: "App show go to airport?",
              correct: "The app says you're going to the airport, correct?",
              explanation: "中国人常省略主语和助动词。App show 是中式英文，App says 更自然。",
            },
            formalityVariants: {
              casual: "Yup, that's me. App says airport, right?",
              standard: "Yes, that's me. The app says you're going to the airport, correct?",
              formal: "Yes, that is correct. The application indicates that the destination is the airport, is that accurate?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Yep, Terminal 2. I'll follow the GPS. Feel free to adjust the AC or let me know if you need anything.",
            textZh: "对，2号航站楼。我跟着导航走。空调随便调，有什么需要告诉我。",
            casualVersion: "Yup, Terminal 2. Just followin' the GPS. AC's yours, just holler if you need anything.",
            culturalNote: "美国司机通常会主动提供调整空调、音乐等服务，表示欢迎和体贴。",
            formalityVariants: {
              casual: "Yup, Terminal 2. Just followin' the GPS. AC's yours, just holler if you need anything.",
              standard: "Yep, Terminal 2. I'll follow the GPS. Feel free to adjust the AC, let me know if you need anything.",
              formal: "Affirmative, Terminal 2. I shall navigate according to the GPS. Please feel at liberty to regulate the air conditioning to your preference, and inform me if you require any assistance.",
            },
            keyPhrases: [
              { en: "terminal", zh: "航站楼" },
              { en: "follow the GPS", zh: "跟着导航走" },
              { en: "adjust the AC", zh: "调空调" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, airport Terminal 2. Should take about 40 minutes. Buckle up!",
                textZh: "对，机场2号航站楼。大概40分钟。系好安全带！",
                actionHint: "系安全带准备出发",
                frequency: "common",
              },
              {
                textEn: "That's what I've got. Sit back and relax — I know a shortcut.",
                textZh: "是的，我看到了。坐好放松——我知道条近路。",
                actionHint: "安心乘车",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, could we make a quick stop along the way? I need to pick something up.",
            textZh: "对了，中途能停一下吗？我要拿个东西。",
            casualVersion: "Hey, actually, could we make a quick stop? Gotta pick something up.",
            culturalNote: "Uber/Lyft等网约车App上可以提前或途中添加停靠点，这是标准操作，而不是口头要求。",
            commonMistake: {
              wrong: "Can we stop in middle?",
              correct: "Could we make a quick stop along the way?",
              explanation: "'in middle' 不如 'along the way' 自然，且 stop 最好加个 make a stop 结构。",
            },
            formalityVariants: {
              casual: "Hey, actually, could we make a quick stop? Gotta pick something up.",
              standard: "Actually, could we make a quick stop along the way? I need to pick something up.",
              formal: "Pardon me, might it be possible to arrange a brief interim stop during our journey? I am required to retrieve an item.",
            },
            isBranchPoint: true,
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure, just add the stop in the app so the route updates. Otherwise I might miss the turn.",
            textZh: "可以，在 App 里加个中途停靠点，不然路线不会更新，我可能错过路口。",
            culturalNote: "美国网约车加停靠点必须在App操作，不能口头说",
            casualVersion: "Yeah, just add it in the app so the route changes. Don't wanna miss my turn.",
            formalityVariants: {
              casual: "Yeah, just add it in the app so the route changes. Don't wanna miss my turn.",
              standard: "Sure, just add the stop in the app so the route updates. Otherwise I might miss the turn.",
              formal: "Certainly. Kindly update the route by adding the supplementary stop within the application interface. Failure to do so may result in an oversight of the intended turn.",
            },
            keyPhrases: [
              { en: "add the stop", zh: "加个停靠点" },
              { en: "route updates", zh: "路线更新" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, no problem. Just update the app so I know where to go.",
                textZh: "没问题。在App里更新一下，我好知道去哪。",
                actionHint: "在App中添加途经点",
                frequency: "common",
              },
              {
                textEn: "I can do that, but it'll change the fare. That cool?",
                textZh: "可以，但费用会变。没问题吧？",
                actionHint: "确认接受额外费用",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Done, I just added it. It should show up now.",
            textZh: "好了，加上了。应该已经显示了。",
            casualVersion: "Yep, done. Just added it. Should be there now.",
            commonMistake: {
              wrong: "Already show up now.",
              correct: "It should show up now.",
              explanation: "中国人常漏掉主语或将 show up 作为被动语态。It should show up 更自然。",
            },
            formalityVariants: {
              casual: "Yep, done. Just added it. Should be there now.",
              standard: "Done, I just added it. It should show up now.",
              formal: "Acknowledged. I have now completed the addition. It should presently be reflected on your interface.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Got it, I see it. We'll be at your stop in about 5 minutes.",
            textZh: "收到，看到了。大概5分钟到你的停靠点。",
            casualVersion: "Got it, yup. We'll hit that stop in 'bout 5 mins.",
            formalityVariants: {
              casual: "Got it, yup. We'll hit that stop in 'bout 5 mins.",
              standard: "Got it, I see it. We'll be at your stop in about 5 minutes.",
              formal: "Received, I have located it. We anticipate reaching your designated stop within approximately five minutes.",
            },
            keyPhrases: [
              { en: "got it", zh: "收到" },
              { en: "your stop", zh: "你的停靠点" },
            ],
            alternativeExpressions: [
              {
                textEn: "I see the update. About 5 minutes out.",
                textZh: "看到更新了。大概5分钟到。",
                actionHint: "准备好下车拿东西",
                frequency: "common",
              },
              {
                textEn: "Cool, it just popped up. I'll head there now.",
                textZh: "好，刚弹出来了。我现在过去。",
                actionHint: "留意到达时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. I'll be quick, just two minutes.",
            textZh: "谢谢。我很快，就两分钟。",
            casualVersion: "Thanks. I'll be super quick, like, two mins.",
            commonMistake: {
              wrong: "I very quick, only two minutes.",
              correct: "I'll be quick, just two minutes.",
              explanation: "'very quick' 听起来生硬，'I'll be quick' 更自然。'only two minutes' 也可用 'just two minutes'。",
            },
            formalityVariants: {
              casual: "Thanks. I'll be super quick, like, two mins.",
              standard: "Thanks. I'll be quick, just two minutes.",
              formal: "Thank you. I shall endeavor to be expeditious, requiring merely two minutes.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No rush. I'll keep the car running right here. Your total will update automatically in the app.",
            textZh: "不急。我在这里不熄火等你。费用会在 App 里自动更新。",
            casualVersion: "No worries. I'll leave the car running for ya. Fare'll just update in the app automatically.",
            formalityVariants: {
              casual: "No worries. I'll leave the car running for ya. Fare'll just update in the app automatically.",
              standard: "No rush. I'll keep the engine running for you here. The fare will update automatically in the app.",
              formal: "There is no need for haste. I shall maintain the engine's operation for your convenience. The fare will automatically recalculate and update within the application.",
            },
            keyPhrases: [
              { en: "keep the car running", zh: "不熄火等着" },
              { en: "update automatically", zh: "自动更新" },
            ],
            alternativeExpressions: [
              {
                textEn: "Take your time. I'll wait right here with the meter running.",
                textZh: "慢慢来。我在这儿等着，计费继续走。",
                actionHint: "尽快办完回来",
                frequency: "common",
              },
              {
                textEn: "No worries, I'm not going anywhere. The app handles the wait time.",
                textZh: "没事，我哪也不去。等待时间App会自动算。",
                actionHint: "不用担心司机走掉",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 3: 价格争议 ---
      {
        id: "dispute",
        titleZh: "价格争议",
        titleEn: "Fare Dispute",
        description: "打表问题、绕路、乱收费等纠纷处理",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "司机",
            textEn: "Alright, here we are. That'll be $65.",
            textZh: "好了，到了。65美元。",
            casualVersion: "Okay, we're here. That's $65.",
            formalityVariants: {
              casual: "Okay, we're here. That's $65.",
              standard: "Alright, here we are. That'll be $65.",
              formal: "We have arrived at your destination. The total sum due is $65.",
            },
            keyPhrases: [{ en: "that'll be", zh: "一共是" }],
            alternativeExpressions: [
              {
                textEn: "Here you go. That's 65 bucks.",
                textZh: "到了。65块。",
                actionHint: "核实金额是否合理",
                frequency: "common",
              },
              {
                textEn: "We're here. Sixty-five dollars, please.",
                textZh: "到了。请付65美元。",
                actionHint: "先别急着付，确认价格",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wait, $65? That seems really high. I checked online and this trip should be around $30.",
            textZh: "等等，65美元？太贵了吧。我查过网上说这段路大概30美元。",
            casualVersion: "Hold on, $65? That's way too much. Online said it'd be like 30 bucks.",
            commonMistake: {
              wrong: "I checked online, should be $30.",
              correct: "I checked online and this trip should be around $30.",
              explanation: "中国人常省略连接词 and/that，导致句子生硬。",
            },
            formalityVariants: {
              casual: "Hold on, $65? That's way too much. Online said it'd be like 30 bucks.",
              standard: "Wait, $65? That seems really high. I checked online and this trip should be around $30.",
              formal: "Excuse me, $65? That appears to be a substantial amount. My preliminary research online indicated the estimated cost for this journey to be approximately $30.",
            },
            culturalNote: "遇到不合理收费时要冷静但坚定。提前查好大概费用很有用。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "There was a lot of traffic. I had to take a detour because of road construction.",
            textZh: "路上堵车了。因为修路我绕了道。",
            casualVersion: "Traffic was heavy. Had to detour 'cause of roadwork.",
            formalityVariants: {
              casual: "Traffic was heavy. Had to detour 'cause of roadwork.",
              standard: "There was a lot of traffic. I had to take a detour because of road construction.",
              formal: "We encountered significant traffic congestion. Consequently, I was obliged to take a detour due to ongoing road construction.",
            },
            variations: [
              {
                textEn: "The meter doesn't lie, buddy. That's what it says.",
                textZh: "计价器不会说谎。上面就显示这个数。",
              },
              {
                textEn: "Prices went up this year. Plus there's a surcharge for airport pickups.",
                textZh: "今年涨价了。而且机场接人有附加费。",
              },
            ],
            keyPhrases: [
              { en: "detour", zh: "绕路" },
              { en: "road construction", zh: "修路/道路施工" },
              { en: "surcharge", zh: "附加费" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Traffic was terrible, man. Plus there was construction on the highway.",
                textZh: "堵得要命啊。高速上还在修路。",
                actionHint: "礼貌质疑绕路问题",
                frequency: "common",
              },
              {
                textEn: "Look at the meter — that's what it says. I don't control the price.",
                textZh: "你看计价器——就是这个数。价格不是我定的。",
                actionHint: "坚持核对费用",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I noticed the meter wasn't running when we started. Can you explain this charge?",
            textZh: "我注意到我们出发时计价器没有打开。你能解释一下这个费用吗？",
            casualVersion: "Meter wasn't on when we left, I noticed. What's with this charge?",
            commonMistake: {
              wrong: "Meter no open when we left.",
              correct: "The meter wasn't on when we started.",
              explanation: "中国人常将'no open'用于表示'没开'，不符合英文习惯，应使用 wasn't on。",
            },
            formalityVariants: {
              casual: "Meter wasn't on when we left, I noticed. What's with this charge?",
              standard: "I noticed the meter wasn't on when we started. Can you explain this charge?",
              formal: "I observed that the taximeter was not activated at the commencement of our journey. Could you please provide clarification regarding this particular charge?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Oh, it must have been a glitch. Look, I'll give you a discount — how about $45?",
            textZh: "哦，可能是故障。这样吧，给你打个折——45美元怎么样？",
            casualVersion: "Uh, must've been a glitch. Tell ya what – how 'bout 45 bucks?",
            culturalNote: "在国外，特别是的士，有时候费用会存在争议，司机可能会主动打折。这是议价的信号。",
            formalityVariants: {
              casual: "Uh, must've been a glitch. Tell ya what – how 'bout 45 bucks?",
              standard: "Oh, it must have been a glitch. Look, I'll tell you what – how about $45?",
              formal: "Ah, it appears there may have been a technical malfunction. Allow me to propose an alternative; would $45 be an acceptable resolution?",
            },
            keyPhrases: [
              { en: "glitch", zh: "故障" },
              { en: "give you a discount", zh: "给你打折" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hmm, it might've glitched. Tell you what, I'll knock off ten bucks.",
                textZh: "嗯，可能出故障了。这样吧，给你减10块。",
                actionHint: "继续据理力争",
                frequency: "common",
              },
              {
                textEn: "Okay okay, my bad. What do you think is fair?",
                textZh: "好吧好吧，我的错。你觉得多少合理？",
                actionHint: "说出你认为合理的价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I think a fair price would be around $30. That's what the ride normally costs according to Google Maps.",
            textZh: "我觉得合理价格大概是30美元。Google Maps 上显示这段路正常就是这个价。",
            casualVersion: "I figure 30 bucks is fair. Google Maps says that's what it usually is for this trip.",
            commonMistake: {
              wrong: "I think fair price is 30. Google Map say this trip normal is this price.",
              correct: "I think a fair price would be around $30. That's what Google Maps shows for this route normally.",
              explanation: "常省略冠词、助动词，或直译 'say'。英文中 'show' 更适合地图显示。",
            },
            formalityVariants: {
              casual: "I figure 30 bucks is fair. Google Maps says that's what it usually is for this trip.",
              standard: "I think a fair price would be around $30. That's what Google Maps shows for this route normally.",
              formal: "My assessment indicates that a fair valuation would be approximately $30. Google Maps typically reflects this figure for this particular route.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Fine, $35 and we call it even. Deal?",
            textZh: "行吧，35美元，两清。行吗？",
            casualVersion: "Alright, $35 and we're square. Deal?",
            formalityVariants: {
              casual: "Alright, $35 and we're square. Deal?",
              standard: "Fine, $35 and we call it even. Deal?",
              formal: "Very well, $35. We shall consider the matter settled at that price. Is this agreeable?",
            },
            keyPhrases: [
              { en: "call it even", zh: "两清/扯平" },
              { en: "deal", zh: "成交" },
            ],
            alternativeExpressions: [
              {
                textEn: "Alright, alright. 35 bucks, final offer. Take it or leave it.",
                textZh: "好吧好吧。35块，最后报价。要不要随你。",
                actionHint: "决定是否接受",
                frequency: "common",
              },
              {
                textEn: "How about we split the difference — 40 bucks?",
                textZh: "折中一下——40块怎么样？",
                actionHint: "继续谈到合理价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, $35. But I'd also like your driver number so I can file a complaint about the meter.",
            textZh: "好吧，35美元。但我要你的司机编号，我要投诉计价器的问题。",
            casualVersion: "Alright, $35. But I'm gonna need your driver ID, I'm reporting that meter.",
            commonMistake: {
              wrong: "I want your driver ID, I want complain meter problem.",
              correct: "I'll need your driver ID, I'm going to report the meter issue.",
              explanation: "'I want' 语气生硬，'I'll need' 更委婉。'complain meter problem' 不符合英文表达，应是 'report the meter issue'。",
            },
            formalityVariants: {
              casual: "Alright, $35. But I'm gonna need your driver ID, I'm reporting that meter.",
              standard: "Okay, $35. But I'll need your driver ID, I'm going to report the meter issue.",
              formal: "Very well, $35. However, I will require your driver identification number, as I intend to formally report the discrepancy with the taximeter.",
            },
            culturalNote: "记下出租车编号（driver number 或 taxi number）是保护自己权益的好办法。",
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's on the dashboard — number 4821. Here's your receipt. Sorry about the confusion.",
            textZh: "在仪表盘上——编号4821。给你收据。不好意思搞混了。",
            casualVersion: "It's on the dash – 4821. Here's your receipt. My bad for the mix-up.",
            formalityVariants: {
              casual: "It's on the dash – 4821. Here's your receipt. My bad for the mix-up.",
              standard: "It's on the dashboard – number 4821. Here's your receipt. Sorry for the mix-up.",
              formal: "It is located on the dashboard – identifier 4821. Here is your receipt. My apologies for any confusion that may have arisen.",
            },
            keyPhrases: [
              { en: "driver number", zh: "司机编号" },
              { en: "file a complaint", zh: "投诉" },
              { en: "sorry about the confusion", zh: "不好意思搞混了" },
            ],
            alternativeExpressions: [
              {
                textEn: "The number's right there on the side of the car. Here's your receipt.",
                textZh: "车号就在车门边上。给你收据。",
                actionHint: "拍照留证",
                frequency: "common",
              },
              {
                textEn: "Fine, here. And sorry about the whole thing.",
                textZh: "好吧，给你。这事确实抱歉。",
                actionHint: "保留收据作为凭证",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I'll pay by card.",
            textZh: "谢谢。我刷卡付。",
            casualVersion: "Thanks. Paying with card.",
            commonMistake: {
              wrong: "I use card pay.",
              correct: "I'll pay by card.",
              explanation: "中国人常直译 '用卡支付'。英文应是 'pay by card' 或 'pay with a card'。",
            },
            formalityVariants: {
              casual: "Thanks. Paying with card.",
              standard: "Thank you. I'll pay by card.",
              formal: "Thank you. I shall proceed to make payment via credit or debit card.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 坐地铁 ====================
  {
    id: "transport-subway",
    tags: ["subway", "地铁", "metro", "underground"],
    category: "transport",
    titleZh: "坐地铁",
    titleEn: "Taking the Subway",
    description: "在陌生城市搭乘地铁，包括购票和问路线",
    otherRole: "地铁工作人员",
    otherRoleIcon: "train",
    flows: [
      // --- Flow 1: 买票 ---
      {
        id: "buy-ticket",
        titleZh: "买票",
        titleEn: "Buying a Ticket",
        description: "在自动售票机或人工窗口购买地铁票",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you help me with the ticket machine? I'm not sure how it works.",
            textZh: "不好意思，能帮我看看这个售票机吗？我不太会用。",
            casualVersion: "Hey, sorry — how does this machine work?",
            commonMistake: {
              wrong: "Can you help me this machine? I don't know how to use it.",
              correct: "Excuse me, could you help me with this ticket machine? I'm not sure how it works.",
              explanation: "直接说“Can you help me?”不礼貌，“not sure how it works”更自然。",
            },
            formalityVariants: {
              casual: "Hey, can you help me with this ticket machine? I'm kinda lost.",
              standard: "Excuse me, could you help me with the ticket machine? I'm not sure how it works.",
              formal:
                "Pardon me, I seem to be having a bit of trouble with this ticket vending machine. Would you be so kind as to assist me?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Of course! First, select your language — you can switch it to English here. Then choose your destination or a fare amount.",
            textZh: "当然！先选语言——这里可以切换成英文。然后选目的地或者票价金额。",
            variations: [
              {
                textEn: "Sure! Where are you trying to go? I can help you find the right ticket.",
                textZh: "好的！你要去哪里？我帮你找对应的票。",
              },
            ],
            keyPhrases: [
              { en: "select your language", zh: "选语言" },
              { en: "destination", zh: "目的地" },
              { en: "fare amount", zh: "票价金额" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! What are you trying to do — buy a single ride or a pass?",
                textZh: "没问题！你要买单程还是通票？",
                actionHint: "说明你要买什么票",
                frequency: "common",
              },
              {
                textEn: "Of course! It's pretty simple once you get the hang of it. Where are you headed?",
                textZh: "当然！搞懂了就很简单。你要去哪？",
                actionHint: "告诉对方你的目的地",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, for sure! First, pick your language—you can switch it to English right here. Then just pick where you're going or how much fare you want.",
            formalityVariants: {
              casual:
                "Totally! First, pick your language—you can switch to English right here. Then just choose your stop or how much money to put in.",
              standard:
                "Of course! First, select your language — you can switch it to English here. Then choose your destination or a fare amount.",
              formal:
                "Certainly! Your initial step will be to select your preferred language; the option to switch to English is located here. Subsequently, you may choose your desired destination or specify a fare amount.",
            },
          },
          {
            speaker: "you",
            textEn: "I need to get to Central Station. How much is a single ticket?",
            textZh: "我要去中央车站。单程票多少钱？",
            casualVersion: "Gotta get to Central Station. How much for a one-way?",
            commonMistake: {
              wrong: "I need to Central Station. How much money for a single ticket?",
              correct: "I need to get to Central Station. How much is a single ticket?",
              explanation: "“How much is it?”或“How much for X?”更自然，“how many money”是错的。",
            },
            formalityVariants: {
              casual: "Gotta get to Central Station. How much for a one-way ticket?",
              standard: "I need to get to Central Station. How much is a single ticket?",
              formal:
                "My destination is Central Station. Could you please inform me of the cost of a single fare to that location?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "A single ride to Central Station is $2.75. But if you're planning to ride more today, a day pass is $7 for unlimited rides.",
            textZh: "去中央车站单程是2.75美元。不过如果你今天要多次乘坐，日票7美元可以无限次乘坐。",
            keyPhrases: [
              { en: "single ride", zh: "单程" },
              { en: "day pass", zh: "日票" },
              { en: "unlimited rides", zh: "无限次乘坐" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "One way to Central Station is $2.75. Want me to show you how to buy it?",
                textZh: "去中央车站单程2.75美元。要我教你怎么买吗？",
                actionHint: "看对方操作学习",
                frequency: "common",
              },
              {
                textEn: "It depends on how far you're going. Let me check... $2.75 for a single ride.",
                textZh: "看你去多远。我查查……单程2.75美元。",
                actionHint: "考虑是否买日票更划算",
                frequency: "common",
              },
            ],
            casualVersion:
              "Single ride to Central Station's $2.75. But if you're gonna ride more today, a day pass is just seven bucks for unlimited rides.",
            formalityVariants: {
              casual:
                "Single to Central's $2.75. But if you're riding more today, a day pass is seven bucks for unlimited.",
              standard:
                "A single ride to Central Station is $2.75. But if you're planning to ride more today, a day pass is $7 for unlimited rides.",
              formal:
                "A one-way fare to Central Station is priced at $2.75. However, should your itinerary involve multiple rides throughout the day, a day pass is available for $7, providing unlimited travel.",
            },
          },
          {
            speaker: "you",
            textEn: "The day pass sounds like a better deal. I'll get one of those.",
            textZh: "日票划算些。我买一张日票吧。",
            casualVersion: "Day pass sounds better. I'll grab one of those.",
            commonMistake: {
              wrong: "Day pass is better. I want to buy one.",
              correct: "The day pass sounds like a better deal. I'll get one of those.",
              explanation: "用“sounds like”更自然，“I'll get one”比“I want to buy one”更客气。",
            },
            formalityVariants: {
              casual: "Yeah, day pass sounds better. I'll grab one.",
              standard: "The day pass sounds like a better deal. I'll get one of those.",
              formal: "The day pass appears to be a more economical option. I will proceed with purchasing one.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Great choice. The machine takes cash, credit cards, and contactless payments. Just tap here to select the day pass.",
            textZh: "好选择。机器支持现金、信用卡和非接触式支付。点这里选日票。",
            keyPhrases: [
              { en: "contactless payments", zh: "非接触式支付" },
              { en: "tap here", zh: "点这里" },
            ],
            alternativeExpressions: [
              {
                textEn: "Good idea. Just hit 'Day Pass' on the screen and pay by card or cash.",
                textZh: "好选择。在屏幕上点'日票'，刷卡或投币付款。",
                actionHint: "按照指示操作",
                frequency: "common",
              },
              {
                textEn: "Smart move. The day pass pays for itself after three rides.",
                textZh: "聪明。坐三次日票就回本了。",
                actionHint: "按屏幕提示购买",
                frequency: "common",
              },
            ],
            casualVersion: "Good call. Machine takes cash, card, and tap. Just hit here for the day pass.",
            formalityVariants: {
              casual: "Good choice. Machine takes cash, card, and tap. Just hit here for the day pass.",
              standard:
                "Great choice. The machine takes cash, credit cards, and contactless payments. Just tap here to select the day pass.",
              formal:
                "An excellent selection. This machine accepts cash, credit cards, and all forms of contactless payment. Please indicate your selection for the day pass by tapping here.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Do I need to tap the card to enter and exit?",
            textZh: "好的。进站和出站都要刷卡吗？",
            casualVersion: "Got it. So, tap in and tap out?",
            commonMistake: {
              wrong: "Got it. Tap card enter and exit?",
              correct: "Got it. Do I need to tap the card to enter and exit?",
              explanation: "问句要用助动词“do I need to”，省略不自然。",
            },
            formalityVariants: {
              casual: "Got it. So, tap in and tap out?",
              standard: "Got it. Do I need to tap the card to enter and exit?",
              formal: "Understood. Is it necessary to tap the card both upon entry and exit?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yes, tap when you enter and tap again when you exit. Make sure to keep your card until the end of your last ride.",
            textZh: "对，进站刷一次，出站再刷一次。一定要保留卡到最后一趟结束。",
            keyPhrases: [
              { en: "tap when you enter", zh: "进站刷卡" },
              { en: "tap again when you exit", zh: "出站再刷" },
              { en: "keep your card", zh: "保留卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just tap in and tap out. Easy peasy.",
                textZh: "进站刷一下出站刷一下。超简单。",
                actionHint: "记住进出都要刷卡",
                frequency: "common",
              },
              {
                textEn: "Tap it at the turnstile going in and coming out. Don't throw the card away!",
                textZh: "进闸机刷一次出闸机刷一次。别把卡扔了！",
                actionHint: "保管好卡直到行程结束",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, tap in and tap out. And hold onto your card 'til your last ride's done.",
            formalityVariants: {
              casual: "Yep, tap in and tap out. Make sure to keep your card 'til your last ride.",
              standard:
                "Yes, tap when you enter and tap again when you exit. Make sure to keep your card until the end of your last ride.",
              formal:
                "Indeed. You are required to tap your card upon entry and again upon exit. Please retain your card until the completion of your final journey.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you so much. Which platform do I need for Central Station?",
            textZh: "太感谢了。去中央车站在哪个站台？",
            casualVersion: "Thanks a bunch. What platform for Central Station?",
            commonMistake: {
              wrong: "Thank you so much. Central Station which platform?",
              correct: "Thank you so much. Which platform do I need for Central Station?",
              explanation: "问句语序要正确，“which platform do I need for X”更地道。",
            },
            formalityVariants: {
              casual: "Thanks a bunch. What platform for Central Station?",
              standard: "Thank you so much. Which platform do I need for Central Station?",
              formal:
                "I appreciate your assistance. Could you please advise me on the correct platform for Central Station?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "Take the Blue Line, Platform 2, heading northbound. It's three stops from here.",
            textZh: "坐蓝线，2号站台，北行方向。从这里三站就到。",
            commonMistake: {
              wrong: "Take Blue Line Platform 2 north direction.",
              correct: "Take the Blue Line, Platform 2, heading northbound.",
              explanation: "中文常省略冠词和介词，美式英语需要更完整",
            },
            keyPhrases: [
              { en: "platform", zh: "站台" },
              { en: "northbound", zh: "北行方向" },
              { en: "three stops", zh: "三站" },
            ],
            alternativeExpressions: [
              {
                textEn: "Blue Line, Platform 2. Head that way and go downstairs.",
                textZh: "蓝线，2号站台。往那边走，下楼就是。",
                actionHint: "跟着指引找站台",
                frequency: "common",
              },
              {
                textEn: "You want the Blue Line going north. It's three stops — pretty quick.",
                textZh: "你坐蓝线北行方向。三站就到——很快的。",
                actionHint: "确认方向后等车",
                frequency: "common",
              },
            ],
            casualVersion: "Blue Line, Platform 2, northbound. It's three stops.",
            formalityVariants: {
              casual: "Blue Line, Platform 2, northbound. Three stops from here.",
              standard: "Take the Blue Line, Platform 2, heading northbound. It's three stops from here.",
              formal:
                "You will need to take the Blue Line, from Platform 2, in the northbound direction. It is located three stops from this station.",
            },
          },
          {
            speaker: "you",
            textEn: "Blue Line, Platform 2, northbound. Got it. Thanks for your help!",
            textZh: "蓝线，2号站台，北行。明白了。谢谢！",
            commonMistake: {
              wrong: "I got it. Thank you for your help!",
              correct: "Got it. Thanks for your help!",
              explanation: "美式口语常用'Got it'而非完整'I got it'，且直接表达谢意更自然",
            },
            casualVersion: "Blue Line, Platform 2, northbound. Got it. Thanks!",
            formalityVariants: {
              casual: "Blue Line, Platform 2, northbound. Got it. Thanks!",
              standard: "Blue Line, Platform 2, northbound. Got it. Thanks for your help!",
              formal: "Blue Line, Platform 2, northbound. Understood. I greatly appreciate your assistance!",
            },
          },
        ],
      },

      // --- Flow 2: 问路线 ---
      {
        id: "ask-directions",
        titleZh: "问路线",
        titleEn: "Asking About Routes",
        description: "向工作人员或路人询问该坐哪条线、在哪换乘",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm trying to get to the Museum of Natural History. Which line should I take?",
            textZh: "不好意思，我想去自然历史博物馆。应该坐哪条线？",
            casualVersion: "Hey, tryna get to the Natural History Museum. Which line?",
            commonMistake: {
              wrong: "I want to go to the Museum of Natural History. Which line should I take?",
              correct: "I'm trying to get to the Museum of Natural History. Which line should I take?",
              explanation: '"I want to go" 太直接，"I\'m trying to get to" 更委婉自然。',
            },
            formalityVariants: {
              casual: "Hey, trying to get to the Natural History Museum. Which line?",
              standard: "Excuse me, I'm trying to get to the Museum of Natural History. Which line should I take?",
              formal:
                "Pardon me, could you please advise on the appropriate subway line to reach the Museum of Natural History?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn: "You'll need to take the Green Line and then transfer to the Red Line. Let me show you on the map.",
            textZh: "你要坐绿线，然后换乘红线。我在地图上指给你看。",
            variations: [
              {
                textEn: "Take the A train to 42nd Street, then switch to the C line. It's a direct transfer.",
                textZh: "坐A线到42街，然后换C线。直接换乘就行。",
              },
            ],
            keyPhrases: [
              { en: "transfer", zh: "换乘" },
              { en: "Green Line", zh: "绿线" },
              { en: "show you on the map", zh: "在地图上指给你看" },
            ],
            alternativeExpressions: [
              {
                textEn: "Take the Green Line to Union Square, then switch to the Red. It's pretty straightforward.",
                textZh: "坐绿线到联合广场，然后换红线。挺简单的。",
                actionHint: "记住换乘站名",
                frequency: "common",
              },
              {
                textEn: "Hmm, you'll need to transfer once. Let me think... Green to Red at Union Square.",
                textZh: "嗯，你要换一次车。我想想……在联合广场从绿线换红线。",
                actionHint: "记下换乘信息",
                frequency: "common",
              },
            ],
            casualVersion: "Gonna need the Green Line, then switch to Red. I'll show ya on the map.",
            commonMistake: {
              wrong: "You need to take the Green Line and then change the Red Line.",
              correct: "You'll need to take the Green Line and then transfer to the Red Line.",
              explanation: '地铁、公交换乘用 "transfer"，不是 "change"。',
            },
            formalityVariants: {
              casual: "Green Line, then Red. I'll show ya on the map.",
              standard:
                "You'll need to take the Green Line and then transfer to the Red Line. Let me show you on the map.",
              formal:
                "You would need to utilize the Green Line and subsequently transfer to the Red Line. Allow me to illustrate the route on this map.",
            },
          },
          {
            speaker: "you",
            textEn: "Where do I make the transfer?",
            textZh: "在哪里换乘？",
            casualVersion: "Where do I switch?",
            commonMistake: {
              wrong: "Where do I change?",
              correct: "Where do I make the transfer?",
              explanation: '询问换乘地点，用 "make the transfer" 或 "transfer" 更地道。',
            },
            formalityVariants: {
              casual: "Where do I switch?",
              standard: "Where do I make the transfer?",
              formal: "At which station would I effect the transfer?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Transfer at Union Square. When you get off the Green Line, follow the signs for the Red Line — it's on the lower level. You can't miss it.",
            textZh: "在联合广场站换乘。下绿线后，跟着红线的指示牌走——在下一层。很好找的。",
            keyPhrases: [
              { en: "follow the signs", zh: "跟着指示牌走" },
              { en: "lower level", zh: "下一层" },
              { en: "you can't miss it", zh: "很好找的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Switch at Union Square. Just follow the signs — they're pretty clear.",
                textZh: "在联合广场换。跟着指示牌走就行——很清楚的。",
                actionHint: "到站后找指示牌",
                frequency: "common",
              },
              {
                textEn: "Get off at Union Square and look for the Red Line signs. It's one level down.",
                textZh: "在联合广场下车，找红线的牌子。下一层就是。",
                actionHint: "下车后往下走一层",
                frequency: "common",
              },
            ],
            casualVersion: "Union Square. Get off Green, follow Red Line signs — it's downstairs. Can't miss it.",
            commonMistake: {
              wrong: "You cannot miss it.",
              correct: "You can't miss it.",
              explanation: '"You can\'t miss it" 是常用口语，意为“很好找，你肯定能看到”。',
            },
            formalityVariants: {
              casual: "Union Square. Get off Green, follow Red Line signs — it's downstairs. Can't miss it.",
              standard:
                "Transfer at Union Square. When you get off the Green Line, follow the signs for the Red Line — it's on the lower level. You can't miss it.",
              formal:
                "The transfer should be made at Union Square. Upon disembarking from the Green Line, please proceed by following the signage indicating the Red Line, which is located on the lower level. It is quite distinctly marked.",
            },
          },
          {
            speaker: "you",
            textEn: "How many stops is it from Union Square to the museum?",
            textZh: "从联合广场到博物馆有几站？",
            casualVersion: "How many stops from Union Square to the museum?",
            commonMistake: {
              wrong: "From Union Square to the museum there are how many stops?",
              correct: "How many stops is it from Union Square to the museum?",
              explanation: '询问距离或时间常用句型 "How many stops is it..." 比直接翻译更自然。',
            },
            formalityVariants: {
              casual: "How many stops from Union Square to the museum?",
              standard: "How many stops is it from Union Square to the museum?",
              formal: "Could you please inform me of the number of stops from Union Square to the museum?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "It's four stops on the Red Line. Get off at 81st Street — the museum entrance is right by the station exit.",
            textZh: "红线坐四站。在81街下车——博物馆入口就在出站口旁边。",
            keyPhrases: [
              { en: "get off at", zh: "在……下车" },
              { en: "station exit", zh: "出站口" },
              { en: "right by", zh: "就在旁边" },
            ],
            alternativeExpressions: [
              {
                textEn: "Four stops. Get off at 81st — the museum is right there.",
                textZh: "四站。在81街下——博物馆就在那儿。",
                actionHint: "数好站数别坐过",
                frequency: "common",
              },
              {
                textEn: "It's about 10 minutes on the Red Line. 81st Street is your stop.",
                textZh: "红线大概10分钟。你在81街下。",
                actionHint: "留意车内报站",
                frequency: "common",
              },
            ],
            casualVersion: "Four stops on Red. Get off at 81st — museum's right by the exit.",
            commonMistake: {
              wrong: "You can go down at 81st Street.",
              correct: "Get off at 81st Street.",
              explanation: '乘坐公共交通下车用 "get off"，不是 "go down" 或 "get out"。',
            },
            formalityVariants: {
              casual: "Four stops on Red. Get off 81st — museum's right by the exit.",
              standard:
                "It's four stops on the Red Line. Get off at 81st Street — the museum entrance is right by the station exit.",
              formal:
                "It is four stops along the Red Line. Please alight at 81st Street, as the museum entrance is directly adjacent to the station exit.",
            },
          },
          {
            speaker: "you",
            textEn: "And how long will the whole trip take, roughly?",
            textZh: "整个行程大概要多久？",
            casualVersion: "And how long's the whole trip, roughly?",
            commonMistake: {
              wrong: "And how long the whole trip will take, roughly?",
              correct: "And how long will the whole trip take, roughly?",
              explanation: '疑问句主谓颠倒，"will" 在主语 "the whole trip" 之前。',
            },
            formalityVariants: {
              casual: "How long's the whole trip, roughly?",
              standard: "And how long will the whole trip take, roughly?",
              formal: "And approximately how much time should I allocate for the entirety of this journey?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "About 25 minutes total, including the transfer. Trains come every 5 minutes during the day, so you won't wait long.",
            textZh: "加上换乘一共大约25分钟。白天每5分钟一班，不用等太久。",
            keyPhrases: [
              { en: "including the transfer", zh: "包括换乘" },
              { en: "every 5 minutes", zh: "每5分钟一班" },
            ],
            alternativeExpressions: [
              {
                textEn: "Around 25 minutes, give or take. Trains are pretty frequent.",
                textZh: "差不多25分钟，上下浮动。车挺频繁的。",
                actionHint: "不用担心等太久",
                frequency: "common",
              },
              {
                textEn: "Maybe half an hour with the transfer. But trains run often, so no worries.",
                textZh: "算上换乘大概半小时。不过车次很多，不用担心。",
                actionHint: "预留充足时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Roughly 25 mins total, with the transfer. Trains run every 5 during the day, so no long wait.",
            commonMistake: {
              wrong: "Trains have every 5 minutes during the day.",
              correct: "Trains come every 5 minutes during the day.",
              explanation: '表达班次频率用 "come/run every X minutes"，不是 "have"。',
            },
            formalityVariants: {
              casual: "About 25 mins total, including transfer. Trains run every 5 mins, so you won't wait long.",
              standard:
                "About 25 minutes total, including the transfer. Trains come every 5 minutes during the day, so you won't wait long.",
              formal:
                "The total duration should be approximately 25 minutes, inclusive of the transfer. During daylight hours, trains operate at intervals of every 5 minutes, thus minimizing waiting times.",
            },
          },
          {
            speaker: "you",
            textEn: "One last question — is there an express train, or are they all local?",
            textZh: "最后一个问题——有快车吗，还是都是慢车？",
            casualVersion: "Last thing — express, or all local?",
            commonMistake: {
              wrong: "Is there express train, or are they all local?",
              correct: "Is there an express train, or are they all local?",
              explanation: '"express train" 是可数名词，前面需要加不定冠词 "an"。',
            },
            formalityVariants: {
              casual: "Last question — express, or just local?",
              standard: "One last question — is there an express train, or are they all local?",
              formal: "May I inquire one final point — is an express service available, or are all trains local?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "On the Green Line there's an express that skips a few stops, but for your route you want the local train — the express doesn't stop at Union Square.",
            textZh: "绿线有快车会跳过几站，但你要坐的路线应该坐慢车——快车不停联合广场站。",
            keyPhrases: [
              { en: "express", zh: "快车" },
              { en: "local train", zh: "慢车/站站停" },
              { en: "skips a few stops", zh: "跳过几站" },
            ],
            responseTip: "注意区分 express（快车）和 local（慢车/站站停），坐错可能会过站",
            alternativeExpressions: [
              {
                textEn: "For your trip, take the local — the express skips your transfer stop.",
                textZh: "你坐慢车——快车不停你要换乘的站。",
                actionHint: "确认坐慢车",
                frequency: "common",
              },
              {
                textEn: "There's an express, but it doesn't stop where you need to transfer. Stick with the local.",
                textZh: "有快车，但它不停你要换乘的站。还是坐慢车吧。",
                actionHint: "选慢车更保险",
                frequency: "common",
              },
            ],
            casualVersion:
              "Green Line's got an express that skips stops, but for you, take the local — express doesn't stop at Union Square.",
            commonMistake: {
              wrong: "The express train jumps over a few stops.",
              correct: "The express that skips a few stops.",
              explanation: '"skip stops" 指“越站不停”，是表达快车不停站的常用动词。',
            },
            formalityVariants: {
              casual:
                "Green Line has an express that skips stops, but for your route, take the local — express doesn't stop at Union Square.",
              standard:
                "On the Green Line there's an express that skips a few stops, but for your route you want the local train — the express doesn't stop at Union Square.",
              formal:
                "On the Green Line, an express service does operate, which bypasses certain stops. However, for your intended route, the local train would be advisable, as the express service does not stop at Union Square.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know! I'll take the local. Thank you so much for your help.",
            textZh: "还好你说了！我坐慢车。非常感谢你的帮助。",
            culturalNote: "中文“还好你说了！”表达了得知重要信息避免犯错的庆幸和感谢，与英文的'Good to know!'语义相符。",
            casualVersion: "Good to know! I'll take the local. Thanks a lot for your help.",
            commonMistake: {
              wrong: "Very thank you for your help.",
              correct: "Thank you so much for your help.",
              explanation: '表达非常感谢时，常用 "thank you so much"，而不是 "very thank you"。',
            },
            formalityVariants: {
              casual: "Good to know! I'll take the local. Thanks a lot.",
              standard: "Good to know! I'll take the local. Thank you so much for your help.",
              formal:
                "That information is most valuable. I shall opt for the local service. My sincere gratitude for your comprehensive assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 租车 ====================
  {
    id: "transport-rental",
    tags: ["rental car", "租车", "rent a car"],
    category: "transport",
    titleZh: "租车",
    titleEn: "Car Rental",
    description: "在国外租车和还车的全流程，包括保险和验车",
    otherRole: "租车柜台人员",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 标准租车 ---
      {
        id: "standard",
        titleZh: "标准租车",
        titleEn: "Standard Car Rental",
        description: "取已预订的车、选择保险、了解规则",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a reservation to pick up a car. The name is Wang, confirmation number RC-7742.",
            textZh: "你好，我预订了一辆车来取。姓王，确认号 RC-7742。",
            casualVersion: "Hey, got a reservation for a car. Name's Wang, confirmation RC-7742.",
            commonMistake: {
              wrong: "My name is Wang, confirmation number...",
              correct: "The name is Wang, confirmation number...",
              explanation: "报姓名时直接说'The name is...'或'It's...'更自然。",
            },
            formalityVariants: {
              casual: "Hey, picking up a car. Name's Wang, confirmation RC-7742.",
              standard: "Hi, I have a reservation to pick up a car. The name is Wang, confirmation number RC-7742.",
              formal: "Good morning/afternoon. I have a reservation under the name of Wang, confirmation number RC-7742, for vehicle pickup.",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Welcome, Mr. Wang! Let me pull that up. I see a mid-size sedan reserved for five days. May I have your driver's license and a credit card?",
            textZh: "欢迎，王先生！让我查一下。我看到预订了一辆中型轿车，五天。请出示驾照和信用卡。",
            casualVersion: "Hey Mr. Wang! Lemme pull that up. Looks like a mid-size sedan for five days. Can I get your license and card?",
            commonMistake: {
              wrong: "Please show me your driver's license.",
              correct: "May I have your driver's license and credit card?",
              explanation: "“Please show me” 听起来更像命令，用 “May I have” 或 “Can I see” 会更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey Mr. Wang! Lemme pull that up. Looks like a mid-size sedan for five days. Can I get your license and card?",
              standard: "Welcome, Mr. Wang! Let me pull that up. I see a mid-size sedan reserved for five days. May I have your driver's license and credit card?",
              formal: "Welcome, Mr. Wang. I'll just retrieve your booking details. I show a mid-size sedan reserved for a duration of five days. May I please request your driver's license and credit card?",
            },
            variations: [
              {
                textEn:
                  "I have your reservation here — a compact car for five days. I'll need your license and a credit card, please.",
                textZh: "找到您的预订了——小型车五天。请给我驾照和信用卡。",
              },
            ],
            keyPhrases: [
              { en: "mid-size sedan", zh: "中型轿车" },
              { en: "driver's license", zh: "驾照" },
              { en: "credit card", zh: "信用卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "I see your reservation. Can I get your license and a credit card?",
                textZh: "我看到你的预订了。给我驾照和信用卡。",
                actionHint: "出示证件",
                frequency: "common",
              },
              {
                textEn: "Welcome! Let me look that up. A mid-size for five days, right? ID and credit card, please.",
                textZh: "欢迎！我查一下。中型车五天，对吧？请出示证件和信用卡。",
                actionHint: "确认预订信息",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my international driver's license and my passport. And here's my credit card.",
            textZh: "这是我的国际驾照和护照。这是信用卡。",
            commonMistake: {
              wrong: "This is my international driving permit and passport. This is the credit card.",
              correct: "Here's my international driving permit and passport. Here's the credit card.",
              explanation: "直接递交物品时，常用 “Here's...” 而不是 “This is...”。",
            },
            casualVersion: "Here's my license and passport, and the card.",
            formalityVariants: {
              casual: "Here's my license, passport, and the card.",
              standard: "Here's my international driver's license and passport. Here's the credit card.",
              formal: "Certainly, here are my international driver's license, passport, and my credit card.",
            },
            culturalNote: "很多国家认可国际驾照（International Driving Permit）。出发前在国内办好。",
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Thank you. Now, your reservation includes basic liability coverage. Would you like to add our Collision Damage Waiver? It's $19 per day and covers any damage to the vehicle.",
            textZh: "谢谢。您的预订包含基本责任险。要加碰撞损害免责险吗？每天19美元，覆盖车辆的任何损坏。",
            casualVersion: "Thanks. Your booking's got basic liability. Wanna add our Collision Damage Waiver? It's $19 a day, covers any damage.",
            commonMistake: {
              wrong: "Do you want to add our Collision Damage Waiver?",
              correct: "Would you like to add our Collision Damage Waiver?",
              explanation: "“Would you like to” 比 “Do you want to” 更礼貌委婉，尤其在服务场合。",
            },
            formalityVariants: {
              casual: "Thanks. Your booking's got basic liability. Wanna add our Collision Damage Waiver? It's $19 a day, covers any damage.",
              standard: "Thank you. Now, your reservation includes basic liability coverage. Would you like to add our Collision Damage Waiver? It's $19 per day and covers any damage to the vehicle.",
              formal: "Thank you. Your current reservation provides basic liability coverage. We also offer a Collision Damage Waiver, which is an additional $19 per day and provides comprehensive coverage for any potential damage to the rental vehicle. Would you be interested in adding this?",
            },
            culturalNote: "美国租车保险种类繁多，常有推销。",
            keyPhrases: [
              { en: "liability coverage", zh: "责任险" },
              { en: "Collision Damage Waiver", zh: "碰撞损害免责险" },
              { en: "per day", zh: "每天" },
              { en: "covers any damage", zh: "覆盖任何损坏" },
            ],
            isBranchPoint: true,
            responseTip: "如果你的信用卡或旅行保险已包含租车保险，可以不买。但不熟悉的话建议买。",
            alternativeExpressions: [
              {
                textEn: "Would you like to add any insurance? We've got a collision waiver for $19 a day.",
                textZh: "要加保险吗？碰撞险每天19美元。",
                actionHint: "考虑是否需要额外保险",
                frequency: "common",
              },
              {
                textEn: "Your basic plan doesn't cover vehicle damage. Want to upgrade to full coverage?",
                textZh: "你的基本方案不包车损。要升级全险吗？",
                actionHint: "评估是否需要全险",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd like to add the collision waiver. Better safe than sorry.",
            textZh: "好的，加碰撞免责险吧。安全第一。",
            commonMistake: {
              wrong: "I want Collision Damage Waiver.",
              correct: "Yes, I'll take the Collision Damage Waiver.",
              explanation: "表达意愿时，",
            },
            casualVersion: "Yeah, I'll take the waiver. Better safe than sorry.",
            formalityVariants: {
              casual: "Yeah, I'll take the waiver. Better safe than sorry.",
              standard: "Yes, I'll add the Collision Damage Waiver. Better safe than sorry.",
              formal: "Yes, I will proceed with adding the Collision Damage Waiver for peace of mind.",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Smart choice. A couple of things to go over: the car comes with a full tank. Please return it with a full tank, or we'll charge $8.99 per gallon for refueling.",
            textZh: "明智的选择。说几个注意事项：车是满油取车，请满油还车，不然加油费是每加仑8.99美元。",
            casualVersion: "Good call. Few things: car's full, so return it full, or we'll charge ya $8.99 a gallon.",
            commonMistake: {
              wrong: "The car has full tank.",
              correct: "The car comes with a full tank.",
              explanation: "描述物品状态时，常用 “comes with” 或 “has a full tank” 更自然。",
            },
            formalityVariants: {
              casual: "Good call. Few things: car's full, so return it full, or we'll charge ya $8.99 a gallon.",
              standard: "Smart choice. A couple of things to go over: the car comes with a full tank. Please return it with a full tank, or we'll charge you $8.99 per gallon for gas.",
              formal: "An excellent decision. I'd like to review a few operational points: the vehicle is provided with a full tank of fuel. We kindly request that you return it with a full tank as well, otherwise a refueling charge of $8.99 per gallon will be applied.",
            },
            keyPhrases: [
              { en: "full tank", zh: "满油/满箱" },
              { en: "return it with a full tank", zh: "满油还车" },
              { en: "per gallon", zh: "每加仑" },
              { en: "refueling", zh: "加油" },
            ],
            alternativeExpressions: [
              {
                textEn: "One thing — bring it back with a full tank, or we charge 9 bucks a gallon to fill it.",
                textZh: "提醒一下——满油还车，不然我们按每加仑9块收加油费。",
                actionHint: "记住满油还车",
                frequency: "common",
              },
              {
                textEn: "Quick heads up: full tank out, full tank back. The gas station down the road is the cheapest.",
                textZh: "提前说一下：满油取车满油还。路那头的加油站最便宜。",
                actionHint: "还车前找附近加油站",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. What kind of fuel does it take?",
            textZh: "明白。加什么油？",
            casualVersion: "Got it. What kind of gas?",
            commonMistake: {
              wrong: "What fuel type?",
              correct: "What kind of fuel does it take?",
              explanation: "询问燃油类型时，口语常说 'what kind of gas'。",
            },
            formalityVariants: {
              casual: "Got it. What kind of gas?",
              standard: "Understood. What kind of fuel does it take?",
              formal: "Understood. Could you please specify the recommended fuel type for this vehicle?",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "Regular unleaded. There's a gas station about half a mile from here on the way back, which is very convenient for filling up before you return.",
            textZh: "普通无铅汽油。回来的路上半英里处有个加油站，还车前加油很方便。",
            casualVersion: "Just regular unleaded. There's a gas station 'bout half a mile back, super easy to fill up before you return it.",
            commonMistake: {
              wrong: "Add what kind of oil?",
              correct: "What kind of fuel does it take?",
              explanation: "“oil” 指机油，",
            },
            formalityVariants: {
              casual: "Just regular unleaded. There's a gas station 'bout half a mile back, super easy to fill up before you return it.",
              standard: "Regular unleaded. There's a gas station about half a mile down the road on your way back, convenient for refueling before returning.",
              formal: "It requires regular unleaded fuel. For your convenience, there is a gas station approximately half a mile from this location, situated along the route you would likely take for your return, which would facilitate refueling prior to vehicle handover.",
            },
            keyPhrases: [
              { en: "regular unleaded", zh: "普通无铅汽油" },
              { en: "gas station", zh: "加油站" },
              { en: "filling up", zh: "加满油" },
            ],
            alternativeExpressions: [
              {
                textEn: "It takes regular. There's a gas station right around the corner you can use before returning.",
                textZh: "加普通油就行。拐角就有个加油站，还车前可以去那加。",
                actionHint: "记住油品和加油站位置",
                frequency: "common",
              },
              {
                textEn: "Just regular unleaded. Check the sticker inside the fuel cap if you forget.",
                textZh: "普通无铅就行。忘了的话看油箱盖里面的贴纸。",
                actionHint: "看油箱盖贴纸确认",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Anything else I should be aware of?",
            textZh: "好的。还有什么要注意的吗？",
            casualVersion: "Good to know. Anything else I should know?",
            commonMistake: {
              wrong: "Other things?",
              correct: "Anything else I should be aware of?",
              explanation: "直接问'Other things?'听起来太生硬。用'Anything else...'更自然。",
            },
            formalityVariants: {
              casual: "Good to know. Anything else I should know?",
              standard: "Good to know. Anything else I should be aware of?",
              formal: "Thank you for that information. Are there any other specific instructions or details I should be mindful of?",
            },
          },
          {
            speaker: "them",
            role: "柜台人员",
            textEn:
              "The car is in spot B-14 in the parking garage. Please do a walk-around and note any existing scratches on this form before you drive off. Here are your keys.",
            textZh: "车在停车场B-14号车位。开走前请绕车检查一圈，把已有的划痕记在这张表上。给您钥匙。",
            casualVersion: "Car's in B-14 in the garage. Just walk around it, mark any scratches on this form before you leave. Here's your keys.",
            commonMistake: {
              wrong: "Please check the car.",
              correct: "Please do a walk-around and note any existing scratches on this form before you drive off.",
              explanation: "“walk-around” 是租车时检查车况的常用表达。",
            },
            formalityVariants: {
              casual: "Car's in B-14 in the garage. Just walk around it, mark any scratches on this form before you leave. Here's your keys.",
              standard: "The car is in spot B-14 in the parking garage. Please do a walk-around and note any existing scratches on this form before you drive off. Here are your keys.",
              formal: "The vehicle is located in spot B-14 within the parking garage. Prior to departure, kindly conduct a thorough walk-around inspection and document any pre-existing damages or scratches on the provided form. Your keys are here.",
            },
            culturalNote: "美国租车务必仔细验车，拍视频照片留证，避免争议。",
            keyPhrases: [
              { en: "walk-around", zh: "绕车检查" },
              { en: "existing scratches", zh: "已有的划痕" },
              { en: "parking garage", zh: "停车场" },
            ],
            responseTip: "取车前一定要仔细检查并记录所有已有的刮痕和凹陷，拍照留证",
            alternativeExpressions: [
              {
                textEn: "Your car is in Lot B, spot 14. Check it over and note any dings before you leave.",
                textZh: "你的车在B区14号。开走前检查一圈，有磕碰记下来。",
                actionHint: "仔细验车并拍照",
                frequency: "common",
              },
              {
                textEn: "Here are the keys. It's in the garage, B-14. Do a once-over and flag anything you see.",
                textZh: "给你钥匙。在车库B-14。检查一遍，有问题随时说。",
                actionHint: "记录所有已有痕迹",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll check it carefully and take some photos. Thank you!",
            textZh: "我会仔细检查并拍照的。谢谢！",
            casualVersion: "Will do, I'll take pics. Thanks!",
            commonMistake: {
              wrong: "I will check and take photo.",
              correct: "I'll make sure to check thoroughly and take photos.",
              explanation: "'photo'是可数名词，指多张照片时用复数'photos'。",
            },
            formalityVariants: {
              casual: "Will do, I'll take pics. Thanks!",
              standard: "I'll make sure to check thoroughly and take photos. Thank you!",
              formal: "I will certainly conduct a thorough inspection and document the vehicle's condition with photographs. Thank you kindly!",
            },
          },
        ],
      },

      // --- Flow 2: 还车 ---
      {
        id: "return",
        titleZh: "还车",
        titleEn: "Returning the Car",
        description: "归还租赁车辆，包括油量检查和损坏检验",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm returning a rental car. Where should I park it?",
            textZh: "你好，我来还租的车。停在哪里？",
            casualVersion: "Hey, returning the rental. Where do I park?",
            commonMistake: {
              wrong: "I want return the car.",
              correct: "I'm here to return the rental car.",
              explanation: "'I want' 听起来生硬。用 'I'm here to...' 或 'I'm returning...' 更自然。",
            },
            formalityVariants: {
              casual: "Hey, returning the rental. Where do I park?",
              standard: "Hi, I'm here to return the rental car. Where should I park it?",
              formal: "Good morning/afternoon. I'm here to return my rental vehicle. Could you please direct me to the designated return area?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              'Welcome back! Just pull into any open spot in the "Returns" area. I\'ll come over and do a quick inspection.',
            textZh: "欢迎回来！停到\u201C还车区\u201D任意一个空位就行。我过去做个快速检查。",
            casualVersion: "Welcome back! Just pull into any open spot in the 'Return' area. I'll be right over for a quick look.",
            commonMistake: {
              wrong: "Park in any empty place.",
              correct: "Just pull into any open spot in the 'Return' section.",
              explanation: "停车时，",
            },
            formalityVariants: {
              casual: "Welcome back! Just pull into any open spot in the 'Return' area. I'll be right over for a quick look.",
              standard: "Welcome back! Just pull into any open spot in the 'Return' section. I'll be right over for a quick check.",
              formal: "Welcome back! You may park the vehicle in any available space within the designated 'Returns' section. I will then come over to conduct a brief inspection.",
            },
            keyPhrases: [
              { en: "pull into", zh: "把车开进" },
              { en: "Returns area", zh: "还车区" },
              { en: "quick inspection", zh: "快速检查" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just park it anywhere in the return lot. I'll check it out in a sec.",
                textZh: "随便停还车区就行。我马上过去看。",
                actionHint: "把车停到还车区",
                frequency: "common",
              },
              {
                textEn: "Pull right in there. I'll be over to inspect it in a minute.",
                textZh: "开进去就行。我一会儿过去检查。",
                actionHint: "停好车等待检查",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I filled up the tank at the gas station down the road. Here's the receipt.",
            textZh: "我在路边加油站加满了油。这是收据。",
            commonMistake: {
              wrong: "I added full tank gas.",
              correct: "I filled up the tank at the gas station down the road.",
              explanation: "“filled up the tank” 是加满油的自然表达。",
            },
            casualVersion: "Tank's full, got it at the station down the road. Here's the receipt.",
            formalityVariants: {
              casual: "Tank's full, got it at the station down the road. Here's the receipt.",
              standard: "I filled up the tank at the gas station down the road. Here's the receipt.",
              formal: "I have refilled the fuel tank at the gas station just down the road. Here is the corresponding receipt.",
            },
            culturalNote: "保留加油收据，作为满油还车的证明。有些租车公司会核实。",
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Let me check the fuel gauge... Yes, that's full. Thank you for doing that. Now let me walk around the car real quick.",
            textZh: "让我看看油表……嗯，满的。谢谢您加满了。我绕车快速看一圈。",
            casualVersion: "Lemme check the gauge... Yep, it's full. Thanks for filling it. I'll do a quick look-around.",
            commonMistake: {
              wrong: "Let me see the oil meter.",
              correct: "Let me check the fuel gauge.",
              explanation: "“fuel gauge” 指油表，而非 “oil meter”。",
            },
            formalityVariants: {
              casual: "Lemme check the gauge... Yep, it's full. Thanks for filling it. I'll do a quick look-around.",
              standard: "Let me check the fuel gauge... Yes, that's full. Thank you for filling it up. I'll do a quick walk-around.",
              formal: "Allow me to verify the fuel gauge... Indeed, it indicates a full tank. Thank you for your diligence in refueling the vehicle. I will now proceed with a brief exterior inspection.",
            },
            keyPhrases: [
              { en: "fuel gauge", zh: "油表" },
              { en: "full", zh: "满的" },
              { en: "walk around", zh: "绕车检查" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tank looks full. Nice. Let me just do a quick walk-around.",
                textZh: "油表满的。不错。我快速绕一圈看看。",
                actionHint: "等待检查结果",
                frequency: "common",
              },
              {
                textEn: "Great, the fuel's topped off. I'll check the outside real quick.",
                textZh: "好的，油加满了。我快速看一下外观。",
                actionHint: "保持耐心等检查",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "I see a small scratch here on the rear bumper. Was this noted on the original form when you picked up the car?",
            textZh: "我看到后保险杠这里有道小划痕。你取车时表上有记录吗？",
            casualVersion: "Got a small scratch here on the back bumper. Was that on the form when you grabbed the car?",
            commonMistake: {
              wrong: "Is this scratch in the form?",
              correct: "Was this noted on the original form?",
              explanation: "“noted on the form” 或 “on the form” 是正确的表达方式。",
            },
            formalityVariants: {
              casual: "Got a small scratch here on the back bumper. Was that on the form when you grabbed the car?",
              standard: "I see a small scratch here on the rear bumper. Was this noted on the original form when you picked up the car?",
              formal: "I've observed a minor superficial scratch on the rear bumper in this area. Was this particular damage documented on the initial vehicle condition report upon your collection?",
            },
            keyPhrases: [
              { en: "scratch", zh: "划痕" },
              { en: "rear bumper", zh: "后保险杠" },
              { en: "noted on the original form", zh: "原始表上有记录" },
            ],
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "There's a little mark here on the bumper. Was this here before?",
                textZh: "保险杠这儿有个小痕迹。之前就有吗？",
                actionHint: "出示取车时的照片",
                frequency: "common",
              },
              {
                textEn: "Hmm, I'm seeing a scratch on the rear. Did you note this at pickup?",
                textZh: "嗯，后面有道划痕。你取车时记录了吗？",
                actionHint: "展示取车时拍的照片",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it was already there. I also took photos when I picked it up — let me show you.",
            textZh: "是的，之前就有了。我取车时拍了照片——给你看看。",
            casualVersion: "Yeah, it was already there. Took photos when I picked it up — lemme show ya.",
            commonMistake: {
              wrong: "Yes, it is already there.",
              correct: "Yes, it was already there.",
              explanation: "刮痕是在取车时就存在的，应使用过去时态'was'。",
            },
            formalityVariants: {
              casual: "Yeah, it was already there. Took photos when I picked it up — lemme show ya.",
              standard: "Yes, it was already there. I also took photos when I picked it up — let me show you.",
              formal: "Yes, that particular scratch was pre-existing. I documented it with photographs during the initial pickup — I can show you.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Okay, I can see it matches the pre-existing damage report. No problem at all. Everything else looks great.",
            textZh: "好的，和之前的损坏记录吻合。没问题。其他都没问题。",
            casualVersion: "Okay, matches the old damage report. No prob. Everything else looks good.",
            commonMistake: {
              wrong: "No problem.",
              correct: "No problem at all.",
              explanation: "“No problem at all” 比 “No problem” 更完整，语气更温和。",
            },
            formalityVariants: {
              casual: "Okay, matches the old damage report. No prob. Everything else looks good.",
              standard: "Okay, I can see it matches the pre-existing damage report. No problem at all. Everything else looks great.",
              formal: "Alright, I can confirm that this aligns with the documented pre-existing damage. That is perfectly acceptable. The remainder of the vehicle appears to be in excellent condition.",
            },
            keyPhrases: [
              { en: "pre-existing damage", zh: "之前就有的损坏" },
              { en: "damage report", zh: "损坏记录" },
              { en: "everything looks great", zh: "一切都没问题" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, matches the original report. You're all good.",
                textZh: "嗯，和原始记录一致。没问题了。",
                actionHint: "松口气等结算",
                frequency: "common",
              },
              {
                textEn: "I see it in the file. No worries, that's pre-existing. Everything else checks out.",
                textZh: "档案里有。别担心，之前就有的。其他都没问题。",
                actionHint: "等待最终结算",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a relief. So what's my final total?",
            textZh: "那就好。最终一共多少？",
            casualVersion: "Good. What's the final charge?",
            commonMistake: {
              wrong: "How much total?",
              correct: "What's the final charge?",
              explanation: "直接问'How much total?'不够自然，用'What's the final charge/total?'。",
            },
            formalityVariants: {
              casual: "Good. What's the final charge?",
              standard: "That's good to hear. What's the final charge?",
              formal: "That is reassuring. May I inquire about the final total charge?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Five days at $45 per day, plus the collision waiver at $19 per day, comes to $320. Plus tax, your total is $348.80. We'll charge it to the card on file.",
            textZh: "五天每天45美元，加碰撞免责险每天19美元，一共320美元。加税后总计348.80美元。从您登记的卡上扣。",
            casualVersion: "Five days at $45, plus the $19 waiver daily, that's $320. Add tax, total's $348.80. We'll charge the card you've got on file.",
            commonMistake: {
              wrong: "Total is $348.80.",
              correct: "Your total is $348.80.",
              explanation: "“Your total is” 更口语化，自然。",
            },
            formalityVariants: {
              casual: "Five days at $45, plus the $19 waiver daily, that's $320. Add tax, total's $348.80. We'll charge the card you've got on file.",
              standard: "Five days at $45 per day, plus the collision waiver at $19 per day, comes to $320. Plus tax, your total is $348.80. We'll charge your card on file.",
              formal: "The charges comprise five days at $45 per day, in addition to the Collision Damage Waiver at $19 per day, totaling $320. With the applicable tax, your grand total is $348.80. This amount will be processed using the credit card we have on record.",
            },
            keyPhrases: [
              { en: "final total", zh: "最终总额" },
              { en: "plus tax", zh: "加税" },
              { en: "card on file", zh: "登记的卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me total it up... Five days plus insurance comes to $348.80 with tax.",
                textZh: "我算一下……五天加保险含税一共348.80美元。",
                actionHint: "核对账单金额",
                frequency: "common",
              },
              {
                textEn: "Your total is $348.80. We'll put it on the card you gave us at pickup.",
                textZh: "总计348.80美元。从你取车时登记的卡扣。",
                actionHint: "确认金额无误",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That looks right. Can I get a copy of the receipt by email?",
            textZh: "没问题。能把收据发到我邮箱吗？",
            casualVersion: "Sounds right. Can you email me the receipt?",
            commonMistake: {
              wrong: "Can email receipt to me?",
              correct: "Can I get a copy of the receipt by email?",
              explanation: "询问能否通过邮件发送收据时，用完整句式更礼貌自然。",
            },
            formalityVariants: {
              casual: "Sounds right. Can you email me the receipt?",
              standard: "That looks right. Can I get a copy of the receipt by email?",
              formal: "That aligns with my understanding. Would it be possible to receive a copy of the receipt via email?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Absolutely. I'll send it to the email address on your reservation. You should receive it within the hour. Thank you for choosing us!",
            textZh: "当然。我会发到您预订时留的邮箱。一小时内应该能收到。感谢选择我们！",
            casualVersion: "Totally. I'll send it to the email from your booking. Should get it in about an hour. Thanks for choosing us!",
            commonMistake: {
              wrong: "I will send it to your email.",
              correct: "I'll send it to the email address on file with your reservation.",
              explanation: "“on file” 指已备案，这种场合更常用。",
            },
            formalityVariants: {
              casual: "Totally. I'll send it to the email from your booking. Should get it in about an hour. Thanks for choosing us!",
              standard: "Absolutely. I'll send it to the email address on file with your reservation. You should receive it within the hour. Thank you for choosing us!",
              formal: "Certainly. I will dispatch the receipt to the email address associated with your reservation. You can expect to receive it within approximately one hour. We appreciate your patronage.",
            },
            keyPhrases: [
              { en: "email address on your reservation", zh: "预订时留的邮箱" },
              { en: "within the hour", zh: "一小时内" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! I'll email the receipt right now. Should be in your inbox shortly.",
                textZh: "没问题！我现在就发邮件。很快就能收到。",
                actionHint: "检查邮箱确认收到",
                frequency: "common",
              },
              {
                textEn: "Of course. You'll get it by email within the hour. Thanks for renting with us!",
                textZh: "当然。一小时内会收到邮件。感谢选择我们！",
                actionHint: "留意邮箱",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 问路 ====================
  {
    id: "transport-directions",
    tags: ["directions", "问路", "navigate"],
    category: "transport",
    titleZh: "问路",
    titleEn: "Asking for Directions",
    description: "在陌生城市向路人或建筑内工作人员问路",
    otherRole: "路人/工作人员",
    otherRoleIcon: "map",
    flows: [
      // --- Flow 1: 街上问路 ---
      {
        id: "on-street",
        titleZh: "街上问路",
        titleEn: "Asking Directions on the Street",
        description: "在街上向陌生人问路，找到目的地",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know how to get to the Central Library from here?",
            textZh: "不好意思，你知道从这里怎么去中央图书馆吗？",
            casualVersion: "Hey, sorry to bother you — do you know where the Central Library is?",
            commonMistake: {
              wrong: "Do you know the way to the Central Library?",
              correct: "Do you know how to get to the Central Library from here?",
              explanation: "how to get to 是地道表达，问路时比 the way to 更常用。",
            },
            formalityVariants: {
              casual: "Hey, you know how to get to the Central Library from here?",
              standard: "Excuse me, do you know how to get to the Central Library from here?",
              formal: "Pardon me, I was wondering if you could direct me to the Central Library from this location.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "The Central Library? Yeah, it's not far. Walk straight down this street for about two blocks, then turn right on Oak Street. You'll see it on your left.",
            textZh: "中央图书馆？不远。沿这条街直走大约两个街区，然后在橡树街右转。在你左边就能看到。",
            commonMistake: {
              wrong: "Go straight for two blocks, then turn right. Then you will see it.",
              correct: "Go straight for about two blocks, then turn right on Oak Street. You'll see it on your left.",
              explanation: "连续使用then显生硬，连接词的使用要自然。",
            },
            variations: [
              {
                textEn:
                  "Sure! Go down to the traffic light and make a left. It's the big building on the corner — you really can't miss it.",
                textZh: "当然！走到红绿灯那里左转。在拐角处那栋大楼就是——很好找的。",
              },
              {
                textEn: "Hmm, I think it's that way? Actually, I'm not from around here either. Sorry!",
                textZh: "嗯，好像是那个方向？其实我也不是本地人。抱歉！",
              },
            ],
            keyPhrases: [
              { en: "walk straight", zh: "直走" },
              { en: "two blocks", zh: "两个街区" },
              { en: "turn right", zh: "右转" },
              { en: "on your left", zh: "在你左边" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Just go straight for a couple blocks, hang a right on Oak, and it's on the left.",
                textZh: "好的！直走两个街区，在橡树街右拐，就在左手边。",
                actionHint: "复述确认方向",
                frequency: "common",
              },
              {
                textEn: "Yeah, I think so. Walk that way, like 10 minutes? It's by the park.",
                textZh: "应该是吧。往那边走，大概10分钟？就在公园旁边。",
                actionHint: "确认距离和方向",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Central Library? Oh yeah, not far. Just go straight down this street, like, two blocks, then right on Oak Street. You'll see it on your left.",
            formalityVariants: {
              casual:
                "Central Library? Yeah, not far. Just go straight two blocks, then right on Oak. It'll be on your left.",
              standard:
                "The Central Library? Yeah, it's not far. Walk straight down this street for about two blocks, then turn right on Oak Street. You'll see it on your left.",
              formal:
                "Yes, the Central Library is not a significant distance. Proceed straight along this thoroughfare for approximately two city blocks, then make a right turn onto Oak Street. The library will be visible on your left-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Two blocks straight and then right on Oak Street. Is it walking distance?",
            textZh: "直走两个街区然后在橡树街右转。走路能到吗？",
            casualVersion: "Okay, two blocks straight, then right on Oak. Can I walk there?",
            commonMistake: {
              wrong: "Is it far by walk?",
              correct: "Is it walking distance?",
              explanation: "by walk 是中式英语，地道说法是 walking distance 或 Is it walkable?",
            },
            formalityVariants: {
              casual: "Two blocks straight, right on Oak. Can I walk it?",
              standard: "Two blocks straight and then right on Oak Street. Is it walking distance?",
              formal:
                "So, two blocks straight and then a right onto Oak Street. Is that location within comfortable walking proximity?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yeah, about a 10-minute walk. If you hit the park, you've gone too far.",
            textZh: "能，大概走10分钟。如果走到公园了就是走过了。",
            commonMistake: {
              wrong: "If you arrive at the park, you are too far.",
              correct: "If you hit the park, you've gone too far.",
              explanation: "“Hit the park”指走到公园，gone too far更地道。",
            },
            keyPhrases: [
              { en: "walking distance", zh: "走路能到的距离" },
              { en: "10-minute walk", zh: "走10分钟" },
              { en: "gone too far", zh: "走过了" },
            ],
            culturalNote:
              '"If you hit X, you\'ve gone too far" 是英语里很常见的指路说法，意思是以某个标志物判断是否过头了。',
            alternativeExpressions: [
              {
                textEn: "Yeah, like 10 minutes on foot. Pretty easy walk.",
                textZh: "走路大概10分钟。很好走。",
                actionHint: "放心步行前往",
                frequency: "common",
              },
              {
                textEn: "Totally walkable. Just don't go past the park — that means you went too far.",
                textZh: "走路完全没问题。别走过公园——走过了就是太远了。",
                actionHint: "以公园为参照物",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, like 10 minutes walk. If you get to the park, you went too far.",
            formalityVariants: {
              casual: "Yep, 'bout 10 mins walk. Hit the park, you went too far.",
              standard: "Yeah, about a 10-minute walk. If you hit the park, you've gone too far.",
              formal:
                "Yes, it is approximately a 10-minute walk. Please note that if you reach the park, you will have proceeded beyond your destination.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Is there a crosswalk at the intersection, or should I cross somewhere else?",
            textZh: "明白了。路口有人行横道吗，还是要从别的地方过？",
            casualVersion: "Gotcha. Is there a crosswalk at the intersection, or should I just cross elsewhere?",
            commonMistake: {
              wrong: "Is there pedestrian crossing?",
              correct: "Is there a crosswalk at the intersection?",
              explanation: "crosswalk 是人行横道的正确名称。",
            },
            formalityVariants: {
              casual: "Got it. Crosswalk at the intersection, or just cross somewhere else?",
              standard: "Got it. Is there a crosswalk at the intersection, or should I cross somewhere else?",
              formal:
                "Understood. May I inquire if a marked crosswalk is present at the intersection, or if I should consider crossing at an alternative location?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "There's a crosswalk with a traffic light at the main intersection. Just wait for the walk signal — drivers around here don't always stop for pedestrians.",
            textZh: "主路口有带红绿灯的人行横道。等行人信号灯——这附近的司机不一定让行人。",
            keyPhrases: [
              { en: "crosswalk", zh: "人行横道" },
              { en: "traffic light", zh: "红绿灯" },
              { en: "walk signal", zh: "行人信号灯" },
              { en: "pedestrians", zh: "行人" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, there's a light at the big intersection. Just use the crosswalk.",
                textZh: "大路口有红绿灯。走人行横道就行。",
                actionHint: "在路口等绿灯",
                frequency: "common",
              },
              {
                textEn: "Cross at the light up there. Don't jaywalk — cops around here are strict.",
                textZh: "在前面红绿灯那里过。别闯红灯——这附近警察管得严。",
                actionHint: "遵守交通规则过马路",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, there's a crosswalk with a light at the main intersection. Just wait for the walk signal, 'cause drivers here don't always stop for people.",
            culturalNote: "在美国，许多司机不会主动避让行人，所以一定要等红绿灯或行人指示灯。",
            commonMistake: {
              wrong: "Wait for the walk light.",
              correct: "Wait for the walk signal.",
              explanation: "行人指示灯更常用 'walk signal'。",
            },
            formalityVariants: {
              casual:
                "Yeah, there's a crosswalk with a light at the main intersection. Just wait for the walk signal; drivers here don't always stop for people.",
              standard:
                "There's a crosswalk with a traffic light at the main intersection. Just wait for the walk signal — drivers around here don't always stop for pedestrians.",
              formal:
                "Indeed, there is a designated crosswalk equipped with a traffic light at the primary intersection. It is advisable to await the pedestrian walk signal, as motorists in this vicinity do not consistently yield to foot traffic.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks a lot! One more thing — is the library open on weekends?",
            textZh: "太感谢了！再问一下——图书馆周末开门吗？",
            casualVersion: "Thanks! Quick question – is the library open on weekends?",
            commonMistake: {
              wrong: "Is the library open on weekend?",
              correct: "Is the library open on weekends?",
              explanation: "询问'每个周末'是否开放，用复数 'weekends'。",
            },
            formalityVariants: {
              casual: "Thanks! Quick question: is the library open weekends?",
              standard: "Thanks a lot! One more thing — is the library open on weekends?",
              formal:
                "Thank you very much! And one final inquiry, if I may — are the library's operating hours inclusive of the weekend?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "I think so, but I'm not 100% sure about the hours. You might want to check their website. Good luck!",
            textZh: "应该开吧，但具体时间我不太确定。你可以查一下他们的网站。祝你好运！",
            commonMistake: {
              wrong: "I wish you good luck!",
              correct: "Good luck!",
              explanation: "“Good luck”本身是地道祝愿，无需I wish you。",
            },
            keyPhrases: [
              { en: "not 100% sure", zh: "不太确定" },
              { en: "check their website", zh: "查一下他们的网站" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm not sure about their hours. Google it maybe? Anyway, good luck!",
                textZh: "时间我不太清楚。你搜一下吧？总之祝你好运！",
                actionHint: "手机查一下营业时间",
                frequency: "common",
              },
              {
                textEn: "I think they close early on Sundays. Better check online first.",
                textZh: "好像周日关得早。最好先网上查查。",
                actionHint: "出发前查好开放时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "I think so, but I'm not totally sure about the hours. You might wanna check their site. Good luck!",
            formalityVariants: {
              casual: "I think so, but not totally sure on hours. Might wanna check their site. Good luck!",
              standard:
                "I think so, but I'm not 100% sure about the hours. You might want to check their website. Good luck!",
              formal:
                "I believe that to be the case, however, I cannot confirm the exact operating hours. It would be prudent to verify this information on their official website. I wish you the best of luck!",
            },
          },
          {
            speaker: "you",
            textEn: "Will do. Thanks so much for your help!",
            textZh: "好的。非常感谢你的帮助！",
            casualVersion: "Will do. Thanks for the help!",
            commonMistake: {
              wrong: "I will do. Thanks your help very much.",
              correct: "Will do. Thanks so much for your help!",
              explanation: "Will do 是口语化的应答，Thank you for your help 更自然。",
            },
            formalityVariants: {
              casual: "Will do. Thanks for the help!",
              standard: "Will do. Thanks so much for your help!",
              formal: "I shall do so. I greatly appreciate your assistance!",
            },
          },
        ],
      },

      // --- Flow 2: 在建筑内问路 ---
      {
        id: "in-building",
        titleZh: "在建筑内问路",
        titleEn: "Finding Your Way Inside a Building",
        description: "在大型建筑内找特定楼层、房间或办公室",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for the immigration office. Is it in this building?",
            textZh: "不好意思，我找移民局办公室。在这栋楼里吗？",
            casualVersion: "Excuse me, looking for the immigration office. Is it in this building?",
            commonMistake: {
              wrong: "Excuse me, I want to find the immigration office.",
              correct: "Excuse me, I'm looking for the immigration office.",
              explanation: "“I want to find”语气太直接，用“I'm looking for”更自然客气。",
            },
            formalityVariants: {
              casual: "Hey, looking for the immigration office. Is it in here?",
              standard: "Excuse me, I'm looking for the immigration office. Is it in this building?",
              formal: "Pardon me, I was wondering if the immigration office is located within this building.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, it is. The immigration office is on the 4th floor, Room 412. Take the elevator on your right to the 4th floor, then turn left when you get out.",
            textZh: "是的。移民局在4楼412室。坐右边的电梯到4楼，出来左转。",
            commonMistake: {
              wrong: "When you go out of the elevator, turn left.",
              correct: "Turn left when you get out.",
              explanation: "“get out”从电梯出来很地道，go out of略显生硬。",
            },
            variations: [
              {
                textEn:
                  "You're in the right building. It's on the 4th floor. The elevators are just around the corner.",
                textZh: "你来对地方了。在4楼。电梯就在拐角处。",
              },
            ],
            keyPhrases: [
              { en: "4th floor", zh: "4楼" },
              { en: "Room 412", zh: "412室" },
              { en: "take the elevator", zh: "坐电梯" },
              { en: "turn left when you get out", zh: "出来左转" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, 4th floor. Take the elevator on the right and go left when you get out.",
                textZh: "对，4楼。坐右边电梯，出来左转。",
                actionHint: "记住楼层和方向",
                frequency: "common",
              },
              {
                textEn: "It's upstairs, Room 412. The elevators are just around that corner.",
                textZh: "在楼上，412室。电梯就在那个拐角。",
                actionHint: "找电梯上4楼",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, it is. Immigration office is on the 4th floor, 412. Take the elevator on your right to the 4th, then turn left when you get out.",
            formalityVariants: {
              casual: "Yeah, it's on the 4th, Room 412. Elevator's right there, go up to 4, then left when you exit.",
              standard:
                "Yes, it is. The immigration office is on the 4th floor, Room 412. Take the elevator on your right to the 4th floor, then turn left when you get out.",
              formal:
                "Yes, that is correct. The immigration office is situated on the fourth floor, specifically in Room 412. Kindly proceed to utilize the elevator located to your right, ascend to the fourth floor, and upon exiting, make a left turn.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you. Do I need to sign in or get a visitor badge?",
            textZh: "谢谢。需要登记或者拿访客证吗？",
            culturalNote: "在美国进入很多政府或公司大楼，都需要登记并领取访客证",
            casualVersion: "Thanks. Gotta sign in or get a visitor badge?",
            commonMistake: {
              wrong: "Thank you. Do I need sign in or get visitor badge?",
              correct: "Thank you. Do I need to sign in or get a visitor badge?",
              explanation: "“need”后跟动词原形时，通常需要加“to”。“badge”前需要冠词“a”。",
            },
            formalityVariants: {
              casual: "Thanks. Gotta sign in or get a badge?",
              standard: "Thank you. Do I need to sign in or get a visitor badge?",
              formal: "Thank you for the information. Is it necessary for me to sign in or acquire a visitor's badge?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Yes, please sign in here and I'll give you a visitor pass. You'll need to show a photo ID.",
            textZh: "需要的，请在这里登记，我给你一个访客证。需要出示带照片的证件。",
            culturalNote: "美国进入很多机构需要带照片的ID。",
            commonMistake: {
              wrong: "You must show your photo ID.",
              correct: "You'll need to show a photo ID.",
              explanation: "“must”语气强硬，“need to”更自然。",
            },
            keyPhrases: [
              { en: "sign in", zh: "登记" },
              { en: "visitor pass", zh: "访客证" },
              { en: "photo ID", zh: "带照片的证件" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, sign in here and I'll get you a badge. Got a photo ID on you?",
                textZh: "对，在这登记，我给你办访客证。带证件了吗？",
                actionHint: "出示护照或证件",
                frequency: "common",
              },
              {
                textEn: "Please fill this out and show me your ID. I'll print a visitor badge for you.",
                textZh: "请填一下这个，给我看证件。我给你打一张访客证。",
                actionHint: "填写登记表",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, sign in here, and I'll give you a visitor pass. Need to show a photo ID.",
            formalityVariants: {
              casual: "Yep, sign in here, I'll give you a pass. Gotta show photo ID.",
              standard: "Yes, please sign in here and I'll give you a visitor pass. You'll need to show a photo ID.",
              formal:
                "Yes, that is correct. Kindly complete the sign-in process here, and I will issue you a visitor pass. Please note that a photo identification will be required.",
            },
          },
          {
            speaker: "you",
            textEn: "Here's my passport. Do I return the visitor pass when I leave?",
            textZh: "这是我的护照。走的时候要还访客证吗？",
            casualVersion: "Here's my passport. Return the visitor pass when I leave?",
            commonMistake: {
              wrong: "This is my passport. Do I return the visitor pass when I leave?",
              correct: "Here's my passport. Do I return the visitor pass when I leave?",
              explanation: "在递交物品时，用“Here's”比“This is”更自然。",
            },
            formalityVariants: {
              casual: "Here's my passport. Do I give the pass back when I leave?",
              standard: "Here's my passport. Do I return the visitor pass when I leave?",
              formal: "This is my passport. Am I required to return the visitor pass upon my departure?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Yes, please return it to this desk when you're done. The elevator is right over there. When you reach the 4th floor, Room 412 will be on your left, about halfway down the hallway.",
            textZh: "是的，办完事请把访客证还到这个前台。电梯就在那边。到4楼后，412室在左边，大概走到走廊中间的位置。",
            commonMistake: {
              wrong: "Please return it to this desk when you finished.",
              correct: "Please return it to this desk when you're done.",
              explanation: "“When you're done”更口语化、自然，指事情办完。",
            },
            keyPhrases: [
              { en: "return it", zh: "归还" },
              { en: "halfway down the hallway", zh: "走廊中间的位置" },
            ],
            alternativeExpressions: [
              {
                textEn: "Drop off the badge here when you leave. Elevators are right there.",
                textZh: "走的时候把访客证还到这里。电梯就在那儿。",
                actionHint: "记得离开时还访客证",
                frequency: "common",
              },
              {
                textEn: "Return the pass on your way out. Room 412 is halfway down the hall on the left.",
                textZh: "出来时把通行证还了。412室在走廊左边中间位置。",
                actionHint: "出来时别忘还通行证",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, just bring it back to this desk when you're done. Elevator's right over there. On the 4th, 412's gonna be on your left, about halfway down the hall.",
            formalityVariants: {
              casual:
                "Yep, just bring it back here when you're done. Elevator's over there. On 4, 412's on your left, halfway down.",
              standard:
                "Yes, please return it to this desk when you're done. The elevator is right over there. When you reach the 4th floor, Room 412 will be on your left, about halfway down the hallway.",
              formal:
                "Yes, kindly return it to this reception desk once your business is concluded. The elevator is situated immediately over there. Upon ascending to the fourth floor, Room 412 will be located on your left-hand side, approximately midway down the corridor.",
            },
          },
          {
            speaker: "you",
            textEn: "Is there a waiting area up there, or do I go directly to the office?",
            textZh: "上面有等候区吗，还是直接去办公室？",
            casualVersion: "Waiting area up there, or go straight to the office?",
            commonMistake: {
              wrong: "Have waiting area up there, or directly go to office?",
              correct: "Is there a waiting area up there, or do I go directly to the office?",
              explanation: "表示“有/存在”通常用“There is/are”，而不是“have”。",
            },
            formalityVariants: {
              casual: "Waiting area up there, or just go to the office?",
              standard: "Is there a waiting area up there, or do I go directly to the office?",
              formal:
                "Will there be a designated waiting area on that floor, or should I proceed directly to the office?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "There's a waiting area right outside Room 412. Take a number when you get there and wait for your number to be called.",
            textZh: "412室外面有等候区。到了先取号，等叫号就行。",
            commonMistake: {
              wrong: "Wait for your number to be called.",
              correct: "Wait to be called.",
              explanation: "“Wait to be called”简洁地道，指等叫号。",
            },
            keyPhrases: [
              { en: "waiting area", zh: "等候区" },
              { en: "take a number", zh: "取号" },
              { en: "wait for your number to be called", zh: "等叫号" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's a waiting room right outside. Grab a number and they'll call you.",
                textZh: "外面就有等候室。取个号等叫号就行。",
                actionHint: "到了先取号",
                frequency: "common",
              },
              {
                textEn: "When you get there, take a ticket and wait. They'll call your number.",
                textZh: "到了以后先取号牌等着。会叫号的。",
                actionHint: "先取号再坐下等",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, waiting area's right outside 412. Grab a number when you get there, wait for your number.",
            culturalNote: "“取号排队”是美国服务机构常见的流程，如车管所、政府办公室等。",
            formalityVariants: {
              casual: "Yep, waiting area's right outside 412. Grab a number, wait for your turn.",
              standard:
                "There's a waiting area right outside Room 412. Take a number when you get there and wait for your number to be called.",
              formal:
                "Yes, a waiting area is situated directly outside Room 412. Upon your arrival, please obtain a queue number and await your turn to be called.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. And where are the restrooms, by the way?",
            textZh: "明白了。对了，洗手间在哪里？",
            casualVersion: "Got it. Restrooms, by the way?",
            commonMistake: {
              wrong: "Got it. And where is toilet, by the way?",
              correct: "Got it. And where are the restrooms, by the way?",
              explanation: "“restroom”比“toilet”更礼貌常用，且通常用复数“restrooms”指男女厕。",
            },
            formalityVariants: {
              casual: "Got it. Restrooms, by the way?",
              standard: "Got it. And where are the restrooms, by the way?",
              formal: "Understood. May I also inquire about the location of the restrooms?",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "There are restrooms on every floor, at the end of the hallway near the emergency exit. On the 4th floor, they're on the right side.",
            textZh: "每层都有洗手间，在走廊尽头靠近紧急出口的地方。4楼的在右边。",
            commonMistake: {
              wrong: "The restrooms are on the end of the hallway, near the emergency exit.",
              correct: "At the end of the hallway near the emergency exit.",
              explanation: "使用介词at更准确，表达位置。",
            },
            keyPhrases: [
              { en: "restrooms", zh: "洗手间" },
              { en: "end of the hallway", zh: "走廊尽头" },
              { en: "emergency exit", zh: "紧急出口" },
            ],
            alternativeExpressions: [
              {
                textEn: "Bathrooms are at the end of each hallway. On the 4th floor, they're on the right.",
                textZh: "每层走廊尽头都有卫生间。4楼的在右边。",
                actionHint: "记住卫生间位置",
                frequency: "common",
              },
              {
                textEn: "Down the hall, near the stairs. Every floor has them.",
                textZh: "走廊尽头，楼梯旁边。每层都有。",
                actionHint: "走到走廊尽头找",
                frequency: "common",
              },
            ],
            casualVersion:
              "Restrooms on every floor, end of the hall by the emergency exit. On the 4th, they're on the right.",
            formalityVariants: {
              casual: "Restrooms on every floor, end of the hall by the exit. On 4, they're on the right.",
              standard:
                "There are restrooms on every floor, at the end of the hallway near the emergency exit. On the 4th floor, they're on the right side.",
              formal:
                "Restrooms are available on each floor, located at the terminus of the hallway adjacent to the emergency exit. Specifically on the fourth floor, they are positioned on the right-hand side.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you very much for all the information!",
            textZh: "太好了。非常感谢你提供的信息！",
            casualVersion: "Perfect. Thanks so much for all the info!",
            commonMistake: {
              wrong: "Perfect. Thank you all information!",
              correct: "Perfect. Thank you very much for all the information!",
              explanation: "“Thank you”后常跟“for”引导原因，且“information”前通常用“the”或“all the”。",
            },
            formalityVariants: {
              casual: "Perfect. Thanks a bunch for the info!",
              standard: "Perfect. Thank you very much for all the information!",
              formal: "Excellent. I am most grateful for all the comprehensive information you have provided.",
            },
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "You're welcome. Good luck with your appointment!",
            textZh: "不客气。祝你办事顺利！",
            commonMistake: {
              wrong: "Good luck for your business!",
              correct: "Good luck with your business!",
              explanation: "“with your business”指你办的事情，“for your business”易误解为商业公司。",
            },
            keyPhrases: [
              { en: "good luck", zh: "祝你好运" },
              { en: "appointment", zh: "预约/办事" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! Hope everything goes smoothly for you.",
                textZh: "不客气！希望你一切顺利。",
                actionHint: "道谢后前往",
                frequency: "common",
              },
              {
                textEn: "You're welcome! Good luck up there.",
                textZh: "不用客气！祝你楼上办事顺利。",
                actionHint: "道谢离开前台",
                frequency: "common",
              },
            ],
            casualVersion: "No problem. Good luck with your appointment!",
            formalityVariants: {
              casual: "No problem. Good luck with the appointment!",
              standard: "You're welcome. Good luck with your appointment!",
              formal: "You are most welcome. I wish you the best of luck with your scheduled appointment.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 渡轮/游船 ====================
  {
    id: "transport-ferry",
    category: "transport",
    titleZh: "渡轮/游船",
    titleEn: "Taking a Ferry",
    description: "乘坐渡轮或游船的全流程，包括购票、登船和处理晕船问题",
    otherRole: "售票员/船员",
    otherRoleIcon: "ship",
    flows: [
      // --- Flow 1: 购票登船 ---
      {
        id: "boarding",
        titleZh: "购票登船",
        titleEn: "Buying Tickets and Boarding",
        description: "在码头购买渡轮票并登船",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to buy two tickets for the ferry to Liberty Island.",
            textZh: "你好，我想买两张去自由岛的渡轮票。",
            culturalNote: "在美国，直接说自己想做什么即可，无需客套地加上'请问'。",
            commonMistake: {
              wrong: "I want to buy two tickets.",
              correct: "I'd like to buy two tickets.",
              explanation: "“I want” 听起来过于直接和生硬，用 “I'd like” 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, need two ferry tickets for Liberty Island.",
              standard: "Hi, I'd like to buy two ferry tickets to Liberty Island.",
              formal: "Good morning/afternoon, I would like to purchase two tickets for the ferry service to Liberty Island, please.",
            },
            casualVersion: "Hey, two tickets to Liberty Island, please.",
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Sure! We have two options — a standard round-trip for $24 each, or a premium ticket for $35 that includes the pedestal access to the Statue of Liberty.",
            textZh: "好的！我们有两种选择——标准往返票每张24美元，或者35美元的高级票，包含自由女神像基座的参观权限。",
            casualVersion: "Sure! Got two options — standard round-trip's twenty-four bucks each, or thirty-five for premium, that includes pedestal access to the Statue of Liberty.",
            formalityVariants: {
              casual: "Yep! You got two options: standard round-trip's 24 bucks, or premium for 35, which gets you pedestal access.",
              standard: "Sure! We have two options — a standard round-trip for $24 each, or a premium ticket for $35 that includes the pedestal access to the Statue of Liberty.",
              formal: "Certainly. We offer two distinct ticketing options: a standard round-trip fare at $24 per person, or a premium ticket priced at $35, which grants inclusive access to the Statue of Liberty's pedestal.",
            },
            alternativeExpressions: [
              {
                textEn: "Round-trip or one-way?",
                textZh: "往返还是单程？",
                actionHint: "告诉对方你要往返票",
                frequency: "common",
              },
              {
                textEn: "How many adults and children?",
                textZh: "几个大人几个小孩？",
                actionHint: "说明人数和年龄",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "round-trip", zh: "往返" },
              { en: "premium ticket", zh: "高级票" },
              { en: "pedestal access", zh: "基座参观权限" },
            ],
            vocabNotes: {
              "round-trip": {
                meaningInContext: "在这句话里表示：往返票（去了还要回来）",
                similarUsage: "类似用法：I booked a round-trip flight.",
              },
              pedestal: {
                meaningInContext: "在这句话里表示：自由女神像的底座/基座",
                similarUsage: "类似用法：The statue stands on a stone pedestal.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "We'll take two standard round-trip tickets, please. What time does the next ferry depart?",
            textZh: "我们买两张标准往返票。下一班渡轮几点出发？",
            casualVersion: "We'll just do two standard round-trips. What time's the next one leave?",
            formalityVariants: {
              casual: "We'll just do two standard round-trips. What time's the next one leave?",
              standard: "We'll take two standard round-trip tickets. What time does the next ferry depart?",
              formal: "We would like to purchase two standard round-trip tickets, please. Could you inform us of the departure time for the next ferry?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The next departure is at 10:30, that's in about 20 minutes. Ferries run every 30 minutes after that. Boarding starts 10 minutes before departure at Gate 3.",
            textZh: "下一班是10点半出发，大概还有20分钟。之后每30分钟一班。登船在3号登船口，出发前10分钟开始。",
            casualVersion: "Next one's at 10:30, so that's like 20 minutes from now. After that, they leave every half hour. Boarding's at Gate 3, starts 10 mins before it leaves.",
            formalityVariants: {
              casual: "Next one's at 10:30, so that's like 20 minutes. Then they run every 30 mins. Boarding's Gate 3, 10 mins before departure.",
              standard: "The next departure is at 10:30, that's about 20 minutes from now. After that, ferries depart every 30 minutes. Boarding is at Gate 3, starting 10 minutes before departure.",
              formal: "The subsequent departure is scheduled for 10:30 AM, approximately 20 minutes from this moment. Thereafter, ferries will operate on a 30-minute interval. Boarding will commence at Gate 3, precisely 10 minutes prior to the scheduled departure time.",
            },
            keyPhrases: [
              { en: "departure", zh: "出发" },
              { en: "run every 30 minutes", zh: "每30分钟一班" },
              { en: "boarding starts", zh: "开始登船" },
              { en: "gate", zh: "登船口" },
            ],
            vocabNotes: {
              departure: {
                meaningInContext: "在这句话里表示：渡轮出发的时间",
                similarUsage: "类似用法：The departure time for your flight is 3 PM.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Next one's at 10:30. They run every half hour after that.",
                textZh: "下一班10:30。之后每半小时一班。",
                actionHint: "看好时间不要迟到",
                frequency: "common",
              },
              {
                textEn: "You've got about 20 minutes till the next boat. Boarding at Gate 3.",
                textZh: "下一班还有大约20分钟。在3号口登船。",
                actionHint: "提前去登船口排队",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Is there an upper deck where we can sit outside?",
            textZh: "好的。有上层甲板可以坐在外面吗？",
            casualVersion: "Sweet. Upper deck with outside seating a thing?",
            commonMistake: {
              wrong: "Is there upper deck can sit outside?",
              correct: "Is there an upper deck where we can sit outside?",
              explanation: "中文习惯省略的词（如“可以坐”中的“可以”），英文不能省略，且需要连接词。",
            },
            formalityVariants: {
              casual: "Sweet. Upper deck with outside seating a thing?",
              standard: "Perfect. Is there an upper deck where we can sit outside?",
              formal: "Excellent. May I inquire if an upper deck with exterior seating is available?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, there's an open-air upper deck with great views. Seats are first come, first served, so I'd recommend boarding early if you want a good spot.",
            textZh: "有的，上层有露天甲板，视野很好。座位先到先得，建议早点登船抢个好位置。",
            casualVersion: "Yeah, there's an open-air upper deck, great views. Seating's first-come, first-served, so hop on early to snag a good spot.",
            formalityVariants: {
              casual: "Yeah, there's an open-air upper deck, great views. Seating's first-come, first-served, so hop on early to snag a good spot.",
              standard: "Yes, there is an open-air upper deck with great views. Seating is first-come, first-served, so I recommend boarding early to get a good spot.",
              formal: "Indeed, an open-air upper deck offering panoramic views is available. Seating is allocated on a first-come, first-served basis, therefore, early boarding is advisable to secure a preferred position.",
            },
            keyPhrases: [
              { en: "upper deck", zh: "上层甲板" },
              { en: "open-air", zh: "露天的" },
              { en: "first come, first served", zh: "先到先得" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's seating inside and outside. The top deck fills up fast though.",
                textZh: "里面外面都有座位。不过上层甲板很快就坐满了。",
                actionHint: "尽早上船抢上层座位",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. One more question — can I bring food and drinks on board?",
            textZh: "明白了。再问一下——可以带吃的喝的上船吗？",
            casualVersion: "Gotcha. Another question — can I bring food/drinks on board?",
            formalityVariants: {
              casual: "Gotcha. Another question — can I bring food/drinks on board?",
              standard: "Got it. One more question — can I bring food and drinks on board?",
              formal: "Understood. I have one further inquiry — are food and beverages permitted on board the vessel?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, you can. There's also a snack bar on board if you want to buy anything during the ride. Just no glass bottles, please.",
            textZh: "可以的。船上也有小吃吧，如果途中想买东西。只是不能带玻璃瓶。",
            casualVersion: "Yep, you can. There's also a snack bar on board if you wanna buy stuff during the trip. Just no glass bottles.",
            formalityVariants: {
              casual: "Yep, you can. There's also a snack bar on board if you wanna buy stuff. Just no glass bottles.",
              standard: "Yes, you can. There's also a snack bar on board if you want to buy something during the trip. Just no glass bottles.",
              formal: "Yes, that is permitted. Additionally, a snack bar is available on board should you wish to purchase refreshments during your journey. However, glass bottles are prohibited.",
            },
            keyPhrases: [
              { en: "on board", zh: "船上" },
              { en: "snack bar", zh: "小吃吧" },
              { en: "glass bottles", zh: "玻璃瓶" },
            ],
            alternativeExpressions: [
              {
                textEn: "Go for it. There's a café on board too if you need anything.",
                textZh: "可以的。船上也有小卖部，需要什么也能买到。",
                actionHint: "了解船上有补给",
                frequency: "common",
              },
              {
                textEn: "Yeah, that's fine. Just no alcohol in glass bottles.",
                textZh: "可以的。就是不能带玻璃瓶装的酒。",
                actionHint: "不带玻璃瓶",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. How long is the ride to Liberty Island?",
            textZh: "明白了。到自由岛要坐多久？",
            casualVersion: "Okay. How long's the ride to Liberty Island?",
            formalityVariants: {
              casual: "Okay. How long's the ride to Liberty Island?",
              standard: "Understood. How long is the ride to Liberty Island?",
              formal: "Duly noted. Could you please inform me of the approximate duration of the journey to Liberty Island?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "It's about a 15-minute ride. The last ferry back is at 5 PM, so make sure you don't miss it. Enjoy your trip!",
            textZh: "大概15分钟。最后一班回程的渡轮是下午5点，一定不要错过哦。祝你旅途愉快！",
            casualVersion: "It's like 15 minutes. Last return ferry's at 5 PM, so don't miss it, alright? Have a good one!",
            formalityVariants: {
              casual: "It's like 15 minutes. Last return ferry's at 5 PM, so don't miss it, alright? Have a good one!",
              standard: "It's about 15 minutes. The last return ferry is at 5 PM, so make sure not to miss it. Have a great trip!",
              formal: "The journey typically takes approximately 15 minutes. Please be advised that the final return ferry departs at 5:00 PM; ensuring you do not miss this departure is crucial. Enjoy your excursion.",
            },
            keyPhrases: [
              { en: "the last ferry back", zh: "最后一班回程渡轮" },
              { en: "make sure", zh: "一定要" },
              { en: "don't miss it", zh: "不要错过" },
            ],
            vocabNotes: {
              ride: {
                meaningInContext: "在这句话里表示：乘坐（渡轮）的时间/路程",
                similarUsage: "类似用法：It's a 20-minute ride to the airport.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "About 15 minutes. And heads up — last boat back is at 5.",
                textZh: "大概15分钟。提醒一下——最后一班回程的船5点开。",
                actionHint: "记好回程末班时间",
                frequency: "common",
              },
              {
                textEn: "It's a quick ride — 15 minutes tops. Just don't miss the 5 o'clock ferry back!",
                textZh: "很快的——最多15分钟。别错过5点的回程船就行！",
                actionHint: "安排好岛上时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! We'll make sure to catch the last one. Where's Gate 3?",
            textZh: "谢谢！我们会赶上最后一班的。3号登船口在哪？",
            casualVersion: "Thanks! We'll catch it. Where's boarding gate 3?",
            formalityVariants: {
              casual: "Thanks! We'll catch it. Where's boarding gate 3?",
              standard: "Thank you! We'll make sure to catch the last one. Where is boarding gate 3?",
              formal: "Thank you kindly. We shall ensure our timely return. Could you direct me to boarding gate number 3?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Head straight down the pier and you'll see signs for Gate 3 on your right. You can start lining up now.",
            textZh: "沿码头直走，右手边就能看到3号登船口的指示牌。现在就可以排队了。",
            casualVersion: "Just head straight down the pier and you'll see the sign for Gate 3 on your right. You can jump in line now.",
            formalityVariants: {
              casual: "Just head straight down the pier and you'll see the sign for Gate 3 on your right. You can jump in line now.",
              standard: "Head straight down the pier and you'll see the sign for Gate 3 on your right. You can start queuing now.",
              formal: "Proceed directly along the pier, and the signage for Gate 3 will be visible on your right-hand side. You are welcome to join the queue at your convenience.",
            },
            keyPhrases: [
              { en: "pier", zh: "码头" },
              { en: "lining up", zh: "排队" },
            ],
            alternativeExpressions: [
              {
                textEn: "Straight down the pier, Gate 3 is on your right. You can line up now.",
                textZh: "沿码头直走，3号口在右边。现在就能排队了。",
                actionHint: "赶紧去排队",
                frequency: "common",
              },
              {
                textEn: "Just follow the crowd — Gate 3 is right down there. Can't miss it.",
                textZh: "跟着人群走——3号口就在那边。不会错过的。",
                actionHint: "跟着人流走",
                frequency: "common",
              },
            ],
          },
        ],
      },

      // --- Flow 2: 晕船求助 ---
      {
        id: "seasickness",
        titleZh: "晕船求助",
        titleEn: "Dealing with Seasickness",
        description: "在船上感到不适，向船员寻求帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm not feeling very well. I think I'm getting seasick.",
            textZh: "不好意思，我有点不舒服。我好像晕船了。",
            casualVersion: "Uh, excuse me, I'm kinda not feeling great. Think I'm getting seasick.",
            commonMistake: {
              wrong: "I have seasick.",
              correct: "I'm seasick / I'm getting seasick.",
              explanation: "Seasick 是形容词，通常用 'be seasick' 或 'feel seasick'，'have seasick' 是错误用法。",
            },
            formalityVariants: {
              casual: "Uh, excuse me, I'm kinda not feeling great. Think I'm getting seasick.",
              standard: "Excuse me, I'm feeling a bit unwell. I think I'm getting seasick.",
              formal: "Pardon me, but I am beginning to feel rather indisposed. I believe I am experiencing seasickness.",
            },
            culturalNote: "晕船时不要忍着，及时告诉船员。他们通常有应对措施。",
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "I'm sorry to hear that. Let me help you. Would you like to sit near the center of the boat? It rocks less there. I'll also get you a motion sickness bag just in case.",
            textZh: "不好意思。我来帮你。要不要坐到船中间的位置？那里晃得少一些。我给你拿个晕船袋以防万一。",
            casualVersion: "Oh, jeez. Lemme help. Wanna sit in the middle? It's less bouncy there. I'll grab you a sick bag just in case.",
            formalityVariants: {
              casual: "Oh, jeez. Lemme help. Wanna sit in the middle? It's less bouncy there. I'll grab you a sick bag just in case.",
              standard: "I'm sorry to hear that. Let me help you. Would you like to sit in the middle of the boat? It's less rocky there. I'll get you a sick bag just in case.",
              formal: "I sincerely apologize to hear that. Allow me to assist you. Would you prefer to relocate to the central section of the vessel, where the motion is typically more stable? I shall also procure an emesis bag for you as a precaution.",
            },
            alternativeExpressions: [
              {
                textEn: "Try to look at the horizon — it helps with the dizziness.",
                textZh: "试着看远处的地平线——有助于缓解头晕。",
                actionHint: "看向远处的水平线",
                frequency: "common",
              },
              {
                textEn: "Would you like some fresh air? Let's go to the upper deck.",
                textZh: "需要透透气吗？我们去上层甲板吧。",
                actionHint: "去甲板上呼吸新鲜空气",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "seasick", zh: "晕船" },
              { en: "center of the boat", zh: "船中间" },
              { en: "rocks less", zh: "晃得少" },
              { en: "motion sickness bag", zh: "晕船袋" },
            ],
            vocabNotes: {
              rocks: {
                meaningInContext: "在这句话里表示：（船）摇晃，不是石头的意思",
                similarUsage: "类似用法：The boat rocked gently in the waves.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Do you have any motion sickness medicine?",
            textZh: "好的。你们有晕船药吗？",
            casualVersion: "Yeah, please. Got any motion sickness meds?",
            formalityVariants: {
              casual: "Yeah, please. Got any motion sickness meds?",
              standard: "Yes, please. Do you have any motion sickness medicine?",
              formal: "Yes, that would be greatly appreciated. Do you happen to carry any medication for motion sickness?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "We have some ginger candies that can help settle your stomach. Unfortunately, we can't give out medication, but I can offer you some water and crackers.",
            textZh: "我们有姜糖可以帮助缓解胃部不适。很遗憾我们不能提供药物，但可以给你一些水和饼干。",
            casualVersion: "We got some ginger candies that can help your stomach. Unfortunately, we can't give out meds, but I can get you some water and crackers.",
            formalityVariants: {
              casual: "We got some ginger candies that can help your stomach. Unfortunately, we can't give out meds, but I can get you some water and crackers.",
              standard: "We have some ginger candies that can help settle your stomach. Unfortunately, we can't provide medication, but I can get you some water and crackers.",
              formal: "We do have ginger candies available, which may aid in settling your stomach. Regrettably, we are unable to dispense medication; however, I can provide you with some water and crackers.",
            },
            keyPhrases: [
              { en: "ginger candies", zh: "姜糖" },
              { en: "settle your stomach", zh: "缓解胃部不适" },
              { en: "give out medication", zh: "提供药物" },
              { en: "crackers", zh: "饼干/苏打饼" },
            ],
            vocabNotes: {
              settle: {
                meaningInContext: "在这句话里表示：使（胃部）平静下来、缓解不适",
                similarUsage: "类似用法：Have some tea to settle your nerves.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "We've got ginger candy and water. That usually does the trick.",
                textZh: "我们有姜糖和水。通常挺管用的。",
                actionHint: "先试试姜糖",
                frequency: "common",
              },
              {
                textEn: "No meds, sorry. But I can get you some crackers and water — that might help.",
                textZh: "没有药，抱歉。不过我可以给你拿点饼干和水——可能有帮助。",
                actionHint: "接受饼干和水",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the ginger candies and some water, please. How much longer until we arrive?",
            textZh: "给我姜糖和水吧。还有多久到？",
            casualVersion: "I'll take the ginger candies and water. How much longer till we get there?",
            commonMistake: {
              wrong: "Still how long to arrive?",
              correct: "How much longer until we arrive?",
              explanation: "中文直译的“还有多久到”不符合英文表达习惯，应使用“How much longer”或“How long until”。",
            },
            formalityVariants: {
              casual: "I'll take the ginger candies and water. How much longer till we get there?",
              standard: "I'll take the ginger candies and water. How much longer until we arrive?",
              formal: "I will accept the ginger candies and water. Could you inform me of the remaining duration of our journey?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "About 10 more minutes. The water is calmer near the island, so it should get better soon. Try to focus on a fixed point in the distance.",
            textZh: "大概还有10分钟。靠近岛的时候水面会更平静，应该会好一些。试着看远处一个固定的点。",
            casualVersion: "Like 10 more minutes. Water's calmer near the island, so you should feel better soon. Try to stare at a fixed point out in the distance.",
            formalityVariants: {
              casual: "Like 10 more minutes. Water's calmer near the island, so you should feel better soon. Try to stare at a fixed point out in the distance.",
              standard: "About 10 more minutes. The water is calmer near the island, so it should get better soon. Try to focus on a fixed point in the distance.",
              formal: "Approximately 10 additional minutes. The waters typically become calmer as we approach the island, so you should experience some relief shortly. I recommend focusing your gaze upon a fixed point in the distance.",
            },
            keyPhrases: [
              { en: "calmer", zh: "更平静" },
              { en: "fixed point", zh: "固定的点" },
              { en: "in the distance", zh: "在远处" },
            ],
            alternativeExpressions: [
              {
                textEn: "About 10 more minutes. It'll get smoother once we're closer to shore.",
                textZh: "大概还有10分钟。靠近岸边就不那么晃了。",
                actionHint: "再坚持一下",
                frequency: "common",
              },
              {
                textEn: "Hang in there — we're almost there. Try staring at something that isn't moving.",
                textZh: "坚持一下——快到了。盯着一个不动的东西看。",
                actionHint: "看远处固定的点",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, I'll try that. Thank you so much for your help.",
            textZh: "好的，我试试。非常感谢你的帮助。",
            casualVersion: "Okay, I'll try that. Thanks a lot for your help.",
            formalityVariants: {
              casual: "Okay, I'll try that. Thanks a lot for your help.",
              standard: "Okay, I'll try. Thank you very much for your help.",
              formal: "Very well, I shall endeavor to do so. I am most grateful for your assistance.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "No problem at all. I'll check on you in a few minutes. If you feel worse, don't hesitate to come find me — I'll be right over there by the cabin door.",
            textZh: "别客气。我过几分钟来看看你。如果感觉更不舒服，别犹豫，来找我——我就在那边船舱门口。",
            casualVersion: "No worries at all. I'll check back in a few. If you feel worse, just come find me — I'll be by the cabin door over there.",
            formalityVariants: {
              casual: "No worries at all. I'll check back in a few. If you feel worse, just come find me — I'll be by the cabin door over there.",
              standard: "No problem at all. I'll check on you in a few minutes. If you feel worse, don't hesitate to find me — I'll be by the cabin door over there.",
              formal: "It is absolutely no trouble. I shall return to check on your condition in a few minutes. Should your symptoms worsen, please do not hesitate to locate me; I will be positioned by the cabin door.",
            },
            keyPhrases: [
              { en: "check on you", zh: "来看看你" },
              { en: "don't hesitate", zh: "别犹豫" },
              { en: "cabin door", zh: "船舱门" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me know if you need anything else. We're almost there.",
                textZh: "需要什么随时跟我说。快到了。",
                actionHint: "坚持一下就好",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I really appreciate it. I'm feeling a little better already. The ginger candy is helping.",
            textZh: "真的很感谢。已经好一点了。姜糖有效果。",
            casualVersion: "Really appreciate it. I'm feeling a bit better now. The ginger candies are actually helping.",
            formalityVariants: {
              casual: "Really appreciate it. I'm feeling a bit better now. The ginger candies are actually helping.",
              standard: "I really appreciate it. I'm feeling a bit better now. The ginger candies are working.",
              formal: "I am truly appreciative. I am pleased to report that I am experiencing some improvement. The ginger candies appear to be efficacious.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Glad to hear it! For the return trip, you might want to sit outside on the lower deck — you'll get fresh air and it's the most stable part of the boat.",
            textZh: "太好了！回程的时候建议坐在外面下层甲板——能呼吸到新鲜空气，而且那里是船最稳的部分。",
            casualVersion: "Glad to hear it! For the trip back, you might wanna sit outside on the lower deck — you'll get fresh air, and that's the steadiest part of the boat.",
            formalityVariants: {
              casual: "Glad to hear it! For the trip back, you might wanna sit outside on the lower deck — you'll get fresh air, and that's the steadiest part of the boat.",
              standard: "Glad to hear it! For the return trip, you might want to sit outside on the lower deck — you'll get fresh air, and it's the most stable part of the boat.",
              formal: "I am delighted to hear that! For your return journey, I would suggest sitting on the lower, exterior deck — this provides access to fresh air and is generally the most stable section of the vessel.",
            },
            keyPhrases: [
              { en: "return trip", zh: "回程" },
              { en: "lower deck", zh: "下层甲板" },
              { en: "most stable", zh: "最稳的" },
            ],
            responseTip: "记住回程时的建议：坐下层甲板外面，又稳又透气",
            alternativeExpressions: [
              {
                textEn: "On the way back, sit outside on the lower deck. It's way more stable.",
                textZh: "回程的时候坐外面下层甲板。稳得多。",
                actionHint: "回程坐下层甲板",
                frequency: "common",
              },
              {
                textEn: "Next time, try sitting near the middle and look at the horizon. Works wonders.",
                textZh: "下次试试坐中间，看地平线。效果特别好。",
                actionHint: "记住防晕船技巧",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 停车 ====================
  {
    id: "transport-parking",
    tags: ["parking", "停车", "parking meter", "garage"],
    category: "transport",
    titleZh: "停车",
    titleEn: "Parking",
    description: "在停车场、路边找车位、使用咪表或处理违停等场景",
    otherRole: "停车场管理员/交通警察",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 停车场停车 ---
      {
        id: "garage",
        titleZh: "停车场停车",
        titleEn: "Parking in a Garage",
        description: "在停车场找车位、了解收费和取车流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, is there parking available? I need to park for about three hours.",
            textZh: "你好，还有车位吗？我大概要停三个小时。",
            commonMistake: {
              wrong: "Is there parking?",
              correct: "Is there parking available?",
              explanation: "中文常直接问“有停车位吗？”而英文口语中常用“available”来表达“是否还有”或“是否可用”。",
            },
            casualVersion: "Hey, got any spots open? I need about three hours.",
            culturalNote: "美国人打招呼常用'Hi'或'Hello'，直接说明需求即可，不需要客套的'请问'。",
            formalityVariants: {
              casual: "Hey, got any parking? Need like three hours.",
              standard: "Hi, is there parking available? I need to park for about three hours.",
              formal:
                "Good morning/afternoon, I was wondering if you have any parking spaces available? I anticipate needing to park for approximately three hours.",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes, we have spaces available. The rate is $5 per hour, or you can get the daily max of $25. Would you like a ticket or are you paying now?",
            textZh: "有的，还有空位。每小时5美元，或者一天封顶25美元。你要取票还是现在付？",
            commonMistake: {
              wrong: "You want ticket or pay now?",
              correct: "Would you like a ticket or are you paying now?",
              explanation: "直接问“You want...?”听起来不礼貌，用“Would you like...”或“Are you...”更自然。",
            },
            alternativeExpressions: [
              {
                textEn: "We're pretty full right now, but there should be some spots on the upper levels.",
                textZh: "现在差不多满了，不过上面几层应该还有位置。",
                actionHint: "去上面几层找车位",
                frequency: "occasional",
              },
              {
                textEn: "Sure! Pull in and take a ticket from the machine.",
                textZh: "有的！开进去从机器取张票。",
                actionHint: "从入口机器取票",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "spaces available", zh: "有空位" },
              { en: "rate", zh: "费率/价格" },
              { en: "per hour", zh: "每小时" },
              { en: "daily max", zh: "一天封顶" },
            ],
            vocabNotes: {
              rate: {
                meaningInContext: "在这句话里表示：停车收费标准",
                similarUsage: "类似用法：What's the room rate at this hotel?",
              },
              "daily max": {
                meaningInContext: "在这句话里表示：一天最多收这么多钱，不会再涨",
                similarUsage: "类似用法：The daily max on this plan is $30.",
              },
            },
            casualVersion: "Yep, got spots. It's $5 an hour, or the daily max is $25. Wanna ticket or pay now?",
            culturalNote: "“Daily max”指每天停车费的上限，即使停很久也不会超过这个价格。",
            formalityVariants: {
              casual: "Yeah, plenty of spots. It's $5/hr, or a $25 max for the day. Want a ticket or paying upfront?",
              standard:
                "Yes, we have spaces available. The rate is $5 per hour, or you can get the daily max of $25. Would you like a ticket or are you paying now?",
              formal:
                "Certainly, we do have spaces available. The parking rate is $5 per hour, with a daily maximum charge of $25. Would you prefer to take a parking ticket, or would you like to make payment at this time?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take a ticket. Do I pay when I leave?",
            textZh: "我取票吧。走的时候付吗？",
            commonMistake: {
              wrong: "I take ticket. Pay when leave?",
              correct: "I'll take a ticket. Do I pay when I leave?",
              explanation: "“I take ticket”不够自然，用“I'll take a ticket”。“Pay when leave?”太直接，用疑问句形式更完整。",
            },
            casualVersion: "I'll grab a ticket. Pay when I leave?",
            formalityVariants: {
              casual: "Ticket's fine. Pay on exit?",
              standard: "I'll take a ticket. Do I pay when I leave?",
              formal: "I will take a ticket, thank you. Am I correct in assuming payment is due upon my departure?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes, pay at the machine near the exit before you get your car. You can pay by cash or card. Insert your ticket, pay, and then use the validated ticket to open the exit gate.",
            textZh:
              "是的，取车前在出口旁边的机器上付款。可以用现金或刷卡。插入票据，付款，然后用验证过的票打开出口闸门。",
            keyPhrases: [
              { en: "pay at the machine", zh: "在机器上付款" },
              { en: "near the exit", zh: "出口旁边" },
              { en: "validated ticket", zh: "验证过的票" },
              { en: "exit gate", zh: "出口闸门" },
            ],
            alternativeExpressions: [
              {
                textEn: "Pay before you leave at the machine by the exit. Cash or card, either works.",
                textZh: "走之前在出口旁的机器付款。现金刷卡都行。",
                actionHint: "离开前记得缴费",
                frequency: "common",
              },
              {
                textEn: "You pay on your way out. Stick your ticket in the machine and it'll tell you the amount.",
                textZh: "出去的时候付。把票插进机器，会告诉你多少钱。",
                actionHint: "保管好停车票",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, pay at the machine by the exit before you get your car. Cash or card's fine. Just put in your ticket, pay up, then use that paid ticket to open the gate.",
            culturalNote: "“Validated ticket”指已付款并激活的停车票，可以打开出口闸门。",
            commonMistake: {
              wrong: "Use the ticket already paid to open the gate.",
              correct: "Use the validated ticket to open the exit gate.",
              explanation: "“validated ticket” 指已付款并激活的停车票，可以打开闸门。",
            },
            formalityVariants: {
              casual:
                "Yep, you pay at the machine by the exit before grabbing your car. Cash or card works. Stick your ticket in, pay, then use the paid ticket for the gate.",
              standard:
                "Yes, you'll pay at the machine located near the exit before retrieving your car. Payment can be made by cash or card. Simply insert your ticket, complete the payment, and then use the validated ticket to open the exit gate.",
              formal:
                "Indeed. Payment is to be made at the automated machine situated adjacent to the exit, prior to retrieving your vehicle. We accept both cash and credit card payments. The process involves inserting your parking ticket, completing the transaction, and subsequently utilizing the validated ticket to activate the exit gate.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Are there any compact car spots closer to the elevator?",
            textZh: "明白了。电梯附近有小型车位吗？",
            casualVersion: "Got it. Any compact spots closer to the elevator?",
            culturalNote: "“Compact car spots”是美国停车场常见的专用车位，只适用于小型轿车。",
            commonMistake: {
              wrong: "Are there small car spots near the elevator?",
              correct: "Are there any compact car spots closer to the elevator?",
              explanation: "“compact car” 是特指小型汽车类别，“spots”是车位的口语说法。",
            },
            formalityVariants: {
              casual: "Okay, cool. Any compact spots near the elevator?",
              standard: "Understood. Are there any compact car spots closer to the elevator?",
              formal:
                "Thank you, I understand. Could you inform me if there are any designated compact car parking spaces located closer to the elevator access?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Yes, Level 2 has some compact spots right by the elevator. Just follow the green arrows on the floor — they'll lead you to open spaces.",
            textZh: "有的，2层电梯旁边有小型车位。跟着地面上的绿色箭头走——它们会指向空车位。",
            keyPhrases: [
              { en: "compact spots", zh: "小型车位" },
              { en: "follow the green arrows", zh: "跟着绿色箭头走" },
              { en: "open spaces", zh: "空车位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Level 2 has some spots by the elevator. Follow the green signs.",
                textZh: "2层电梯旁有位子。跟着绿色标识走。",
                actionHint: "去2层找车位",
                frequency: "common",
              },
              {
                textEn: "Try Level 2 — there are usually compact spots near the elevator there.",
                textZh: "去2层试试——电梯附近通常有小车位。",
                actionHint: "开到2层找位置",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, Level 2's got some compact spots right by the elevator. Just follow the green arrows on the floor — they'll show you to open spaces.",
            commonMistake: {
              wrong: "They will lead you to empty spaces.",
              correct: "They'll lead you to open spaces.",
              explanation: "“open spaces” 指的是可用的、未被占用的停车位。",
            },
            formalityVariants: {
              casual:
                "Yeah, Level 2's got compact spots right by the elevator. Just follow the green arrows on the ground — they'll show you where to go.",
              standard:
                "Yes, Level 2 does have several compact spots directly adjacent to the elevator. Simply follow the green arrows painted on the floor; they will guide you to available spaces.",
              formal:
                "Affirmative. On Level 2, there are indeed designated compact parking spaces located immediately proximate to the elevator. Kindly observe the green directional arrows marked on the flooring; these will guide you toward unoccupied parking berths.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Is the garage open 24 hours, or does it close at a certain time?",
            textZh: "好的。停车场是24小时的，还是几点关门？",
            commonMistake: {
              wrong: "Is garage 24 hours, or what time close?",
              correct: "Is the garage open 24 hours, or does it close at a certain time?",
              explanation: "“what time close”是中式英语，用“what time does it close”或“does it close at a certain time”更自然。",
            },
            casualVersion: "Cool. Is the garage open 24/7, or does it close?",
            formalityVariants: {
              casual: "Awesome. Garage open all the time, or does it close?",
              standard: "Great. Is the garage open 24 hours, or does it close at a certain time?",
              formal:
                "Excellent. Could you please confirm if the parking garage operates on a 24-hour basis, or if there are specific closing times?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "We're open 24/7, but the office closes at 10 PM. After that, everything is automated. If you have any issues with the machine, there's a help button that connects to our call center.",
            textZh:
              "我们全天24小时开放，但办公室晚上10点关。之后全部自动化。如果机器有问题，有个求助按钮可以联系我们的呼叫中心。",
            keyPhrases: [
              { en: "24/7", zh: "全天候/24小时" },
              { en: "automated", zh: "自动化的" },
              { en: "help button", zh: "求助按钮" },
              { en: "call center", zh: "呼叫中心" },
            ],
            vocabNotes: {
              "24/7": {
                meaningInContext: "在这句话里表示：每周7天每天24小时，全天候开放",
                similarUsage: "类似用法：Our customer service is available 24/7.",
              },
            },
            alternativeExpressions: [
              {
                textEn: "Open 24/7. After 10 PM it's all self-service, but there's a help button if you need it.",
                textZh: "24小时营业。晚上10点后全自助，但有求助按钮。",
                actionHint: "记住晚上是自助模式",
                frequency: "common",
              },
              {
                textEn: "We never close. But the booth closes at 10 — after that, everything's automated.",
                textZh: "全天不关。不过值班室10点下班——之后全自动化。",
                actionHint: "晚上有问题按求助按钮",
                frequency: "common",
              },
            ],
            casualVersion:
              "We're 24/7, but the office shuts at 10 PM. After that, it's all automated. Got issues with the machine? There's a help button that'll connect you to our call center.",
            commonMistake: {
              wrong: "After that, everything is automatic.",
              correct: "After that, everything is automated.",
              explanation: "“automated” 是指由机器控制、自动化的状态，更强调过程。",
            },
            formalityVariants: {
              casual:
                "Yeah, we're 24/7, but the office closes at 10. After that, it's all machines. If you got a problem, hit the help button and it'll connect you to our call center.",
              standard:
                "We are open 24 hours a day, seven days a week; however, the office closes at 10 PM. Subsequent to that time, all operations are automated. Should you encounter any issues with the machinery, there is a designated help button that will connect you directly to our call center.",
              formal:
                "Our facility operates continuously, twenty-four hours a day, seven days a week. However, please note that the administrative office closes at 10:00 PM. Beyond that hour, all functions are fully automated. In the event of any operational difficulties with the equipment, a dedicated help button is provided for direct contact with our customer service call center.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. And I should remember my parking level and spot number, right?",
            textZh: "好的。我要记住停车的楼层和车位号，对吗？",
            commonMistake: {
              wrong: "I should remember parking level and spot number, right?",
              correct: "And I should remember my parking level and spot number, right?",
              explanation: "在“parking level”前加上“my”或“the”更自然，表示特指。",
            },
            casualVersion: "Cool. And I should remember my level and spot number, right?",
            formalityVariants: {
              casual: "Perfect. Gotta remember my level and spot, yeah?",
              standard: "Perfect. And I should remember my parking level and spot number, correct?",
              formal:
                "Understood. And it would be prudent for me to make a note of my parking level and designated spot number, would it not?",
            },
          },
          {
            speaker: "them",
            role: "管理员",
            textEn:
              "Exactly. I'd suggest taking a photo of the level sign and your spot number. People forget all the time and end up wandering around looking for their car!",
            textZh: "没错。建议拍张楼层标识和车位号的照片。经常有人忘了，到处找车！",
            keyPhrases: [
              { en: "taking a photo", zh: "拍张照片" },
              { en: "level sign", zh: "楼层标识" },
              { en: "wandering around", zh: "到处转/四处找" },
            ],
            culturalNote: "这是非常实用的建议。大型停车场很容易迷路找不到车。",
            alternativeExpressions: [
              {
                textEn: "Pro tip: take a photo of your level and spot number. People lose their cars all the time!",
                textZh: "小建议：拍张照记住楼层和车位号。好多人找不到车！",
                actionHint: "拍照记录停车位置",
                frequency: "common",
              },
              {
                textEn: "Snap a pic of the sign. You'd be amazed how many people forget where they parked.",
                textZh: "拍张标识的照片。你想不到有多少人忘了停哪儿。",
                actionHint: "用手机拍照备忘",
                frequency: "common",
              },
            ],
            casualVersion:
              "Exactly. I'd just take a pic of the level sign and your spot number. Folks forget all the time and just wander around trying to find their car!",
            commonMistake: {
              wrong: "People forget and walk around to find their car.",
              correct: "People forget all the time and end up wandering around looking for their car!",
              explanation: "“wander around” 指漫无目的地走动，强调迷茫和寻找的过程。",
            },
            formalityVariants: {
              casual:
                "Yeah, exactly. Just snap a photo of the level and spot number. People always forget and just walk around lost looking for their car!",
              standard:
                "Precisely. I would strongly recommend taking a photograph of the level signage and your assigned spot number. It's quite common for people to forget and subsequently wander around attempting to locate their vehicle!",
              formal:
                "Indeed. I would highly advise you to photograph the level indicator and your specific parking bay number. It is a frequent occurrence for individuals to misplace this information and subsequently spend considerable time searching for their vehicle.",
            },
          },
          {
            speaker: "you",
            textEn: "Ha, good tip! I'll definitely do that. Thanks!",
            textZh: "哈哈，好建议！我一定拍。谢谢！",
            commonMistake: {
              wrong: "I will definitely take. Thanks!",
              correct: "I will definitely take one. Thanks!",
              explanation: "“take”是及物动词，后面需要有宾语，用“one”指代“a picture”。",
            },
            casualVersion: "Haha, good call! I'll totally do that. Thanks!",
            formalityVariants: {
              casual: "Haha, good idea! I'll totally do it. Thanks!",
              standard: "That's a very helpful tip! I will certainly make sure to do that. Thank you!",
              formal:
                "That is an excellent piece of advice. I shall most certainly implement that suggestion. My gratitude for your assistance!",
            },
          },
        ],
      },

      // --- Flow 2: 咪表和违停 ---
      {
        id: "meter-violation",
        titleZh: "咪表和违停",
        titleEn: "Parking Meters and Violations",
        description: "使用路边咪表停车或处理违停罚单",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how does this parking meter work? I can't figure out how to pay.",
            textZh: "不好意思，这个咪表怎么用？我搞不清怎么付款。",
            culturalNote: "美国路边停车通常用电子咪表或手机App支付。不同城市的咪表操作方式不同。",
            casualVersion: "Excuse me, how's this meter work? Can't figure out how to pay.",
            commonMistake: {
              wrong: "How to use this parking meter?",
              correct: "How does this parking meter work?",
              explanation: '直接问 "How to..." 不太礼貌，听起来像自言自语或命令，用 "How does this work?" 更自然。',
            },
            formalityVariants: {
              casual: "Hey, how's this meter work? Can't figure out the payment.",
              standard: "Excuse me, how does this parking meter work? I can't figure out how to pay.",
              formal:
                "Pardon me, could you please explain the operation of this parking meter? I am experiencing difficulty understanding the payment procedure.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Oh, this one takes coins and cards. Just insert your card, select how much time you need, and press the green button. Or you can download the ParkMobile app — it's easier.",
            textZh:
              "哦，这个可以投币或刷卡。插卡，选择要停多久，按绿色按钮就行。或者你可以下载 ParkMobile 应用——更方便。",
            commonMistake: {
              wrong: "This one can use coins and cards.",
              correct: "This one takes coins and cards.",
              explanation: "“take”在这里有“接受（支付方式）”的意思，比“can use”更自然地道。",
            },
            alternativeExpressions: [
              {
                textEn: "You need quarters for this one. Do you have any change?",
                textZh: "这个要投25美分硬币。你有零钱吗？",
                actionHint: "准备25美分硬币",
                frequency: "occasional",
              },
            ],
            keyPhrases: [
              { en: "parking meter", zh: "咪表/停车计时器" },
              { en: "insert your card", zh: "插卡" },
              { en: "how much time", zh: "多长时间" },
              { en: "download the app", zh: "下载应用" },
            ],
            vocabNotes: {
              meter: {
                meaningInContext: "在这句话里表示：路边停车收费的计时器/咪表",
                similarUsage: "类似用法：I need to feed the meter before it expires.",
              },
            },
            casualVersion:
              "Oh, this one does coins and cards. Just put your card in, pick your time, hit the green button. Or, download ParkMobile app — way easier.",
            culturalNote: "美国常用ParkMobile等App支付停车费",
            formalityVariants: {
              casual:
                "Yeah, this one takes coins/cards. Just swipe, pick your time, hit green. Or, ParkMobile app's even easier.",
              standard:
                "Oh, this one takes coins and cards. Just insert your card, select how much time you need, and press the green button. Or you can download the ParkMobile app — it's easier.",
              formal:
                "This particular meter accepts both coin and card payments. Kindly insert your card, designate your desired parking duration, and then press the illuminated green button. Alternatively, for enhanced convenience, you may consider utilizing the ParkMobile mobile application.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll use my card. How much time am I allowed to park here?",
            textZh: "我用卡吧。这里最长能停多久？",
            casualVersion: "I'll use my card. How much time can I park here?",
            commonMistake: {
              wrong: "How long can I park here?",
              correct: "How much time am I allowed to park here?",
              explanation: '"How much time" 更自然地询问停车时长限制。',
            },
            formalityVariants: {
              casual: "Card it is. Max time here?",
              standard: "I'll use my card. How much time am I allowed to park here?",
              formal:
                "I shall utilize my credit card. What is the maximum permissible parking duration at this location?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "I think the max is two hours. Check the sign on the pole — it should say the time limit and the hours when parking is metered.",
            textZh: "我觉得最多两小时。看看杆子上的标识——上面应该写了时间限制和收费时段。",
            commonMistake: {
              wrong: "Check sign on pole.",
              correct: "Check the sign on the pole.",
              explanation: "特指某个“杆子上的标志”时，需要加定冠词“the”使其更清晰自然。",
            },
            keyPhrases: [
              { en: "the max", zh: "最多/上限" },
              { en: "time limit", zh: "时间限制" },
              { en: "metered", zh: "收费的/计时的" },
            ],
            alternativeExpressions: [
              {
                textEn: "I think it's two hours max. Check the sign on the pole — it'll have all the details.",
                textZh: "好像最多两小时。看杆子上的标识——上面都写着。",
                actionHint: "仔细看标识牌",
                frequency: "common",
              },
              {
                textEn: "Read the sign — it should say the limit. I think it's a two-hour zone.",
                textZh: "看标识牌——上面会写限制时间。好像是两小时的区域。",
                actionHint: "先看清规则再停",
                frequency: "common",
              },
            ],
            casualVersion:
              "Pretty sure it's two hours max. Look at the sign on the pole — it'll tell you the limit and when it's paid parking.",
            culturalNote: "美国路边停车规则复杂，需仔细阅读标识牌",
            formalityVariants: {
              casual: "Two hours, I think. Just check the sign on the pole, it'll show the limit and meter hours.",
              standard:
                "I think the max is two hours. Check the sign on the pole — it should say the time limit and the hours when parking is metered.",
              formal:
                "My recollection suggests a maximum of two hours. However, it is advisable to consult the posted sign on the pole, as it will explicitly state the time limit and the operational hours for metered parking.",
            },
          },
          {
            speaker: "you",
            textEn: "It says two-hour maximum, 8 AM to 6 PM. So after 6 PM, parking is free?",
            textZh: "上面写最多两小时，早8点到晚6点。那6点以后停车免费？",
            culturalNote: "在美国，路边停车咪表通常在非工作时间（如晚上或周末）免费，但务必核对标识确认。",
            casualVersion: "Says two-hour max, 8 to 6. So after 6, it's free?",
            commonMistake: {
              wrong: "So after 6 PM, is free parking?",
              correct: "So after 6 PM, parking is free?",
              explanation: '疑问句中主语 (parking) 通常在 is/are 之后，而不是像 "is free parking" 这种结构。',
            },
            formalityVariants: {
              casual: "Two-hour max, 8-6. After 6, it's free?",
              standard: "It says two-hour maximum, 8 AM to 6 PM. So after 6 PM, parking is free?",
              formal:
                "The sign indicates a two-hour maximum duration, operational from 8 AM to 6 PM. May I infer that parking is complimentary beyond 6 PM?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Usually, yes. But always check for street cleaning signs too. If they're cleaning the street, you'll get a ticket even if the meter is free.",
            textZh: "一般是的。但也要注意看有没有清扫街道的标识。如果在清扫街道，即使咪表免费时段你也会被罚款。",
            commonMistake: {
              wrong: "If they clean street, you will still get ticket.",
              correct: "If they're cleaning the street, you'll still get ticketed.",
              explanation: "“clean street”是主动动词，表示“扫街道”，但句子主语是“they”，应使用现在进行时。且“get ticketed”更常用，表示“收到罚单”。",
            },
            keyPhrases: [
              { en: "street cleaning", zh: "清扫街道" },
              { en: "get a ticket", zh: "被开罚单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Check for any 'No Parking' signs nearby. Some spots are restricted at certain times.",
                textZh: "看看附近有没有'禁止停车'的标识。有些位置在特定时段是限制停车的。",
                actionHint: "仔细查看周围所有标识",
                frequency: "common",
              },
            ],
            vocabNotes: {
              ticket: {
                meaningInContext: "在这句话里表示：违停罚单，不是门票的意思",
                similarUsage: "类似用法：I got a speeding ticket last week.",
              },
            },
            culturalNote: "美国路边停车规则很复杂，同一个车位在不同时间可能有不同规定。一定要仔细看所有标识。",
            casualVersion:
              "Yeah, usually. But always watch for street cleaning signs too. If they're cleaning, you'll still get a ticket, even if the meter's free.",
            formalityVariants: {
              casual:
                "Yeah, usually. But check for street cleaning. If they're cleaning, you'll still get a ticket, even with free meter.",
              standard:
                "Usually, yes. But always check for street cleaning signs too. If they're cleaning the street, you'll get a ticket even if the meter is free.",
              formal:
                "That is typically correct. However, it is imperative to also observe any signage pertaining to street cleaning. Should street cleaning operations be in effect, a citation will be issued irrespective of whether the meter is currently requiring payment.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh no, I just found a ticket on my windshield! What do I do now?",
            textZh: "糟糕，我挡风玻璃上有张罚单！现在怎么办？",
            culturalNote: "美国的停车罚单通常会直接夹在雨刮器下。",
            isBranchPoint: true,
            casualVersion: "Oh no, found a ticket on my windshield! Now what?",
            commonMistake: {
              wrong: "What I do now?",
              correct: "What do I do now?",
              explanation: '疑问句需要助动词 "do" (或 "is/are/can" 等) 在主语之前。',
            },
            formalityVariants: {
              casual: "Dang it, got a ticket! What now?",
              standard: "Oh no, I just found a ticket on my windshield! What do I do now?",
              formal:
                "Oh dear, I have just discovered a citation affixed to my windshield! What course of action would you recommend at this juncture?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Let me see... Looks like a $65 fine for expired meter. You can pay it online — there should be a website and a code on the ticket. Pay within 30 days or it doubles.",
            textZh: "让我看看……好像是咪表过期，罚65美元。可以网上交——罚单上应该有网站和编号。30天内付，不然翻倍。",
            commonMistake: {
              wrong: "Pay in 30 days or double.",
              correct: "Pay within 30 days or it doubles.",
              explanation: "“in 30 days”通常指30天后，而“within 30 days”指30天内。句子后半部分需要主语“it”和动词“doubles”来表达完整意思。",
            },
            keyPhrases: [
              { en: "fine", zh: "罚款" },
              { en: "expired meter", zh: "咪表过期" },
              { en: "pay it online", zh: "网上交" },
              { en: "within 30 days", zh: "30天内" },
              { en: "doubles", zh: "翻倍" },
            ],
            alternativeExpressions: [
              {
                textEn: "Looks like a parking ticket — 65 bucks for an expired meter. You can pay it online.",
                textZh: "看着像罚单——咪表过期罚65块。可以网上交。",
                actionHint: "记下罚单编号去网上缴费",
                frequency: "common",
              },
              {
                textEn: "Ouch, $65. It says expired meter. Pay online within 30 days or the fine doubles.",
                textZh: "心疼，65块。写的是咪表过期。30天内网上缴费，不然罚款翻倍。",
                actionHint: "尽快网上缴费",
                frequency: "common",
              },
            ],
            casualVersion:
              "Lemme see... Looks like a $65 fine, meter expired. You can pay online — website and code should be on the ticket. Pay in 30 days or it doubles.",
            culturalNote: "美国罚单需在规定时间内支付，否则罚金翻倍甚至影响信用。",
            formalityVariants: {
              casual: "Okay, $65 fine for expired meter. Pay online, details on ticket. 30 days to pay or it's double.",
              standard:
                "Let me see... Looks like a $65 fine for expired meter. You can pay it online — there should be a website and a code on the ticket. Pay within 30 days or it doubles.",
              formal:
                "Allow me to examine it. It appears to be a $65 fine incurred due to an expired parking meter. Payment can be rendered electronically; the requisite website and identification code should be printed on the citation itself. It is imperative to settle this within 30 days to avoid a doubling of the penalty.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I contest the ticket if I think it's wrong?",
            textZh: "如果我觉得不对，可以申诉吗？",
            culturalNote: "在美国，罚单是可以申诉的，但需要提供充足的证据和理由。",
            casualVersion: "Can I fight the ticket if I think it's wrong?",
            commonMistake: {
              wrong: "Can I appeal the ticket?",
              correct: "Can I contest the ticket?",
              explanation: '对于交通罚单，通常用 "contest" 或 "dispute" 而不是 "appeal" 来表示申诉。',
            },
            formalityVariants: {
              casual: "Can I fight it if I think it's wrong?",
              standard: "Can I contest the ticket if I think it's wrong?",
              formal: "Am I permitted to formally dispute this citation if I believe an error has occurred?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yes, you can dispute it online or request a hearing. The instructions should be on the back of the ticket. But honestly, if the meter was expired, it's pretty hard to fight.",
            textZh: "可以的，可以在线申诉或者要求听证。罚单背面应该有说明。但说实话，如果确实咪表过期了，很难打赢。",
            commonMistake: {
              wrong: "If meter expired, hard to win.",
              correct: "If the meter was expired, it's hard to win.",
              explanation: "句子需要一个主语“it”来指代“申诉”或“这种情况”，并用“it's hard to win”来表达“很难赢”。",
            },
            keyPhrases: [
              { en: "contest the ticket", zh: "申诉罚单" },
              { en: "dispute", zh: "争议/申诉" },
              { en: "request a hearing", zh: "要求听证" },
              { en: "hard to fight", zh: "很难打赢" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can fight it online, but if the meter was actually expired, it's tough to win.",
                textZh: "可以网上申诉，但如果咪表确实过期了，很难赢。",
                actionHint: "权衡是否值得申诉",
                frequency: "common",
              },
              {
                textEn:
                  "The back of the ticket has instructions for disputing it. But honestly, just pay it and move on.",
                textZh: "罚单背面有申诉说明。但说实话，交了算了。",
                actionHint: "看看罚单背面的说明",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, you can dispute it online or ask for a hearing. Instructions should be on the back. But honestly, if the meter was expired, it's pretty tough to fight.",
            formalityVariants: {
              casual:
                "Yep, dispute online or ask for a hearing. Back of the ticket has instructions. But if the meter was expired, it's usually a tough fight.",
              standard:
                "Yes, you can dispute it online or request a hearing. The instructions should be on the back of the ticket. But honestly, if the meter was expired, it's pretty hard to fight.",
              formal:
                "Indeed, you have the option to dispute the citation online or to formally request a hearing. The relevant instructions should be detailed on the reverse side of the ticket. However, I must candidly state that if the meter was verifiably expired, successfully challenging the citation proves quite challenging.",
            },
          },
          {
            speaker: "you",
            textEn: "I guess I'll just pay it. Lesson learned — I'll set a timer on my phone next time.",
            textZh: "那我还是交了吧。吃一堑长一智——下次我手机定个闹钟。",
            culturalNote: "“吃一堑长一智”是中国俗语，意指从错误中学习。在英语中，类似表达是 'learn my lesson'。",
            casualVersion: "Guess I'll just pay it. Live and learn — I'll set a timer on my phone next time.",
            commonMistake: {
              wrong: "I'll set my phone a timer next time.",
              correct: "I'll set a timer on my phone next time.",
              explanation: '动词 "set" 后面跟宾语 "a timer"，然后是介词短语 "on my phone"。',
            },
            formalityVariants: {
              casual: "Yeah, I'll just pay it. My bad — timer on my phone next time.",
              standard: "I guess I'll just pay it. Lesson learned — I'll set a timer on my phone next time.",
              formal:
                "I suppose I shall proceed with the payment. This has certainly been an instructive experience; I shall endeavor to utilize a timer on my mobile device during future parking instances.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 加油站 ====================
  {
    id: "transport-gas",
    tags: ["gas station", "加油", "refuel"],
    category: "transport",
    titleZh: "加油站",
    titleEn: "Gas Station",
    description: "在加油站自助加油或请求帮助的场景",
    otherRole: "加油站工作人员",
    otherRoleIcon: "fuel",
    flows: [
      // --- Flow 1: 自助加油 ---
      {
        id: "self-service",
        titleZh: "自助加油",
        titleEn: "Self-Service Fueling",
        description: "在自助加油站加油的流程和常见操作",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I've never used a gas pump in the US before. Could you show me how it works?",
            textZh: "不好意思，我以前没在美国加过油。能教我怎么用吗？",
            culturalNote: "美国大部分加油站是自助的，和中国有人帮忙加油不同。",
            casualVersion: "Hey, sorry — first time pumping gas here. Can you help me out?",
            commonMistake: {
              wrong: "I never used gas pump in US. How to use?",
              correct: "I've never used a gas pump in the US before. Could you show me how it works?",
              explanation: "语序和时态错误，且省略了太多词，显得不礼貌不自然。",
            },
            formalityVariants: {
              casual: "Hey, never used a US gas pump. Can you show me how it works?",
              standard: "Excuse me, I haven't used a gas pump in the US before. Could you show me how it works?",
              formal:
                "Pardon me, but I am unfamiliar with operating a gas pump in the United States. Would you be so kind as to demonstrate the procedure?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Sure! First, you'll need to pay. You can either pay at the pump with a credit card, or go inside and pre-pay with cash. What works better for you?",
            textZh: "当然！首先要付款。你可以在油枪这里刷信用卡，或者进去先用现金预付。哪种方便？",
            alternativeExpressions: [
              {
                textEn: "Swipe your card right here, or you can pay inside first.",
                textZh: "在这里刷卡，或者先进去付款。",
                actionHint: "选一种付款方式",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "gas pump", zh: "加油机/油枪" },
              { en: "pay at the pump", zh: "在油枪处付款" },
              { en: "pre-pay", zh: "预付" },
            ],
            vocabNotes: {
              pump: {
                meaningInContext: "在这句话里表示：加油机/油枪装置",
                similarUsage: "类似用法：Which pump number are you at?",
              },
            },
            casualVersion:
              "Sure! First, gotta pay. Can pay at the pump with a card, or go inside and pre-pay cash. What works for ya?",
            culturalNote: "加油前付款是中国人常感到困惑的一点。",
            commonMistake: {
              wrong: "Which is convenient for you?",
              correct: "What works better for you?",
              explanation: "问“哪个方便”的直译不自然，美国人会问“哪个更好/更适合你”。",
            },
            formalityVariants: {
              casual: "Yeah, gotta pay first. Card at the pump, or go in and pay cash. What works for ya?",
              standard:
                "Certainly. First, payment is required. You have the option to pay at the pump using a credit card, or you may pre-pay with cash inside. Which method do you prefer?",
              formal:
                "Certainly, sir/ma'am. The initial step is payment. You may either process your payment directly at the pump with a credit card, or, alternatively, you can enter the station to pre-pay with cash. Which option would be more suitable for your needs?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll use my credit card at the pump. What do I do after I insert the card?",
            textZh: "我在油枪这里刷信用卡吧。插卡之后怎么操作？",
            casualVersion: "I'll just use my card at the pump. What's next after I put it in?",
            commonMistake: {
              wrong: "What to do after I insert card?",
              correct: "What do I do after I insert the card?",
              explanation: "省略主语和助动词，听起来不自然且缺乏礼貌。",
            },
            formalityVariants: {
              casual: "I'll just use my card at the pump. What's next after I put it in?",
              standard: "I'll use my credit card at the pump. What are the subsequent steps after inserting the card?",
              formal:
                "I will proceed with using my credit card at the pump. Could you please instruct me on the steps to follow once the card has been inserted?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Insert the card and remove it quickly. It might ask for your ZIP code — just enter any 5-digit number if your card is international. Then select the fuel grade — regular is usually the cheapest and fine for most cars.",
            textZh:
              "插卡后快速抽出。可能会要求输入邮编——如果是国际信用卡，随便输5位数字就行。然后选油品——regular（普通）通常最便宜，大部分车都可以用。",
            keyPhrases: [
              { en: "ZIP code", zh: "邮编" },
              { en: "fuel grade", zh: "油品等级" },
              { en: "regular", zh: "普通（汽油）" },
            ],
            vocabNotes: {
              regular: {
                meaningInContext: "在这句话里表示：普通汽油（87号），最便宜的一档",
                similarUsage: "类似用法：Fill it up with regular, please.",
              },
              grade: {
                meaningInContext: "在这句话里表示：汽油的等级/标号",
                similarUsage: "类似用法：Premium grade is for high-performance engines.",
              },
            },
            culturalNote:
              "美国汽油分 Regular（87）、Mid-grade/Plus（89）、Premium（91/93）三档。除非车辆说明书要求，加 Regular 就行。",
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn:
                  "Slide the card in and pull it right out. Then pick your gas type. If it asks for a ZIP, just try 99999.",
                textZh: "插卡后马上拔出来。然后选油品。如果要邮编，试试输99999。",
                actionHint: "记住操作步骤",
                frequency: "common",
              },
              {
                textEn: "Put your card in, pull it out fast. Choose regular unless your car needs premium. Easy peasy.",
                textZh: "插卡，快速拔出。选普通油就行，除非你的车要高标号的。很简单。",
                actionHint: "选对油品等级",
                frequency: "common",
              },
            ],
            casualVersion:
              "Pop the card in, pull it out quick. Might ask for your ZIP — just use any 5 digits if your card's international. Then pick the fuel type — regular's usually cheapest and good for most cars.",
            commonMistake: {
              wrong: "just enter 5 digit number",
              correct: "just enter any 5-digit number",
              explanation: "“5位数字”前面需要加“任何”或“一个”修饰，否则不自然。",
            },
            formalityVariants: {
              casual:
                "Pop the card in, pull it out quick. Might ask for your ZIP — just use any 5 digits if your card's international. Then pick the fuel type — regular's usually cheapest and good for most cars.",
              standard:
                "Please insert your card and then promptly remove it. The system may request your ZIP code; for international cards, simply input any five-digit number. Afterward, select the appropriate fuel grade. 'Regular' is typically the most economical option and suitable for most vehicles.",
              formal:
                "Kindly insert your credit card and expeditiously withdraw it. Should the system prompt for a ZIP code, for cards issued internationally, it is permissible to enter any five-digit numerical sequence. Following this, please select your desired fuel grade; 'Regular' is generally the most cost-effective and appropriate for the majority of automobiles.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I selected regular. Now what?",
            textZh: "好，我选了 regular。然后呢？",
            casualVersion: "Alright, got regular. Now what?",
            formalityVariants: {
              casual: "Alright, got regular. Now what?",
              standard: "Okay, I've selected the regular fuel grade. What is the next step?",
              formal:
                "I have successfully selected the 'Regular' fuel grade. May I inquire about the subsequent instruction?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Lift the nozzle, put it in your gas tank, and squeeze the handle. You can lock it in place so you don't have to hold it the whole time. When it's full, it'll click and stop automatically.",
            textZh:
              "拿起油枪，插进你的油箱口，按住把手。你可以把它卡住，就不用一直握着了。加满了会自动咔嗒一声停下来。",
            keyPhrases: [
              { en: "lift the nozzle", zh: "拿起油枪" },
              { en: "gas tank", zh: "油箱" },
              { en: "squeeze the handle", zh: "按住把手" },
              { en: "lock it in place", zh: "把它卡住" },
              { en: "click and stop", zh: "咔嗒一声停下来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Grab the nozzle, stick it in, and squeeze. It'll stop by itself when it's full.",
                textZh: "拿起油枪，插进去，按住。满了会自动停。",
                actionHint: "按步骤操作",
                frequency: "common",
              },
              {
                textEn:
                  "Put the nozzle in your tank and pull the trigger. You can lock it so you don't have to hold it.",
                textZh: "把油枪插进油箱，扣住扳机。可以卡住就不用一直握着了。",
                actionHint: "可以把油枪卡住",
                frequency: "common",
              },
            ],
            casualVersion:
              "Grab the nozzle, stick it in your tank, and squeeze the handle. Can lock it so you don't gotta hold it. When it's full, it'll click and stop.",
            culturalNote: "中国的加油站一般都是人工服务，所以自动锁定油枪这个操作对很多中国人来说很新鲜。",
            commonMistake: {
              wrong: "put into your gas tank",
              correct: "put it in your gas tank",
              explanation: "“put it in” 更自然地表达“放入”，而 “insert into” 听起来更正式或像说明书。",
            },
            formalityVariants: {
              casual:
                "Grab the nozzle, stick it in your tank, and squeeze the handle. Can lock it so you don't gotta hold it. When it's full, it'll click and stop.",
              standard:
                "Lift the nozzle, place it into your gas tank, and squeeze the handle. You have the option to engage the locking mechanism so you won't need to manually hold it throughout the process. It will automatically click and cease dispensing fuel once the tank is full.",
              formal:
                "Kindly retrieve the nozzle, position it securely within your vehicle's fuel receptacle, and depress the dispensing handle. A locking mechanism is available to maintain the flow without continuous manual engagement. Upon reaching capacity, the pump will automatically disengage with an audible click.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Oh wait — which side is my gas tank on? I keep forgetting.",
            textZh: "明白了。等等——我的油箱在哪边？我老是忘。",
            casualVersion: "Got it. Oh wait — which side's my gas tank on? Always forget that.",
            commonMistake: {
              wrong: "I always forget",
              correct: "I keep forgetting",
              explanation: "“I keep forgetting” 比 “I always forget” 更自然地表达“老是忘记”这个动作。",
            },
            formalityVariants: {
              casual: "Got it. Oh wait — which side's my gas tank on? Always forget that.",
              standard: "Understood. Oh, a moment please — on which side is my gas tank located? I frequently forget.",
              formal:
                "I comprehend. However, I must momentarily interject: could you please remind me of the location of my vehicle's fuel tank? I seem to have a recurring oversight regarding this detail.",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Ha, check your dashboard — there's a little arrow next to the gas gauge icon that shows which side the tank is on. It's a little trick most people don't know about.",
            textZh: "哈哈，看你的仪表盘——油表图标旁边有个小箭头，指向油箱口的那一边。这个小窍门大部分人不知道。",
            keyPhrases: [
              { en: "dashboard", zh: "仪表盘" },
              { en: "gas gauge", zh: "油表" },
              { en: "little arrow", zh: "小箭头" },
            ],
            culturalNote: "这个仪表盘上的小箭头几乎所有现代汽车都有，非常实用的冷知识。",
            alternativeExpressions: [
              {
                textEn: "Your gas cap is on the driver's side. Just pull in with the pump on your left.",
                textZh: "你的油箱盖在驾驶座这边。把油枪放在左边停就行。",
                actionHint: "注意油箱盖的位置停车",
                frequency: "common",
              },
            ],
            casualVersion:
              "Ha, look at your dash — there's a little arrow next to the gas icon that shows the tank side. Most folks don't know that trick.",
            commonMistake: {
              wrong: "small trick",
              correct: "little trick",
              explanation: "“little trick” 是固定搭配，表示“小窍门”，而 “small trick” 听起来不自然。",
            },
            formalityVariants: {
              casual:
                "Ha, look at your dash — there's a little arrow next to the gas icon that shows the tank side. Most folks don't know that trick.",
              standard:
                "Haha, examine your dashboard — you'll find a small arrow adjacent to the fuel gauge icon, indicating the side on which your fuel tank is located. This is a subtle detail that many individuals are unaware of.",
              formal:
                "Indeed. Kindly observe your vehicle's dashboard; you will note a diminutive arrow positioned alongside the fuel gauge emblem, which precisely denotes the orientation of your fuel tank. This particular insight is largely unacquainted by the general public.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh nice, I see it! It's on the left side. Okay, it's pumping now. Should I stay by the car?",
            textZh: "哦看到了！在左边。好，在加了。我要守在车旁边吗？",
            casualVersion: "Oh nice, got it! It's on the left. Okay, it's pumping. Should I stay near the car?",
            culturalNote: "中国加油站基本是人工加油，顾客不需要（也不会被允许）在车边。",
            commonMistake: {
              wrong: "Should I stay beside the car?",
              correct: "Should I stay by the car?",
              explanation: "“by the car” 或 “near the car” 更自然，而 “beside the car” 显得稍微生硬。",
            },
            formalityVariants: {
              casual: "Oh nice, got it! It's on the left. Okay, it's pumping. Should I stay near the car?",
              standard:
                "Ah, excellent, I see it! It's on the left side. All right, the fuel is now dispensing. Should I remain in close proximity to the vehicle?",
              formal:
                "Indeed, I have located it! It is situated on the left-hand side. The fueling process has commenced. Is it advisable for me to remain adjacent to the vehicle?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "It's best to stay nearby, yes. Don't get back in the car while it's pumping — static electricity can be a hazard. It'll be done in a couple of minutes.",
            textZh: "最好在旁边待着。加油时不要上车——静电可能有危险。两分钟左右就加完了。",
            keyPhrases: [
              { en: "stay nearby", zh: "在旁边待着" },
              { en: "static electricity", zh: "静电" },
              { en: "hazard", zh: "危险/隐患" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yeah, stay by the car. Don't sit back inside — static can cause problems.",
                textZh: "是的，在车旁边站着。别坐回车里——静电可能出问题。",
                actionHint: "在车外等加油完成",
                frequency: "common",
              },
              {
                textEn: "Stick around, it only takes a couple minutes. And don't use your phone too close to the pump.",
                textZh: "在旁边待着，就几分钟的事。别在油枪旁边玩手机。",
                actionHint: "在旁边等几分钟",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, best to stay close. Don't get back in while it's pumping — static's a hazard. It'll be done in a few.",
            culturalNote: "美国加油站安全规定严格，禁止加油时离开车或回到车内，这与中国习惯不同。",
            commonMistake: {
              wrong: "static electricity is dangerous",
              correct: "static electricity can be a hazard",
              explanation: "“can be a hazard” 更自然地表达“可能存在危险”，比“是危险的”更委婉。",
            },
            formalityVariants: {
              casual:
                "Yeah, best to stay close. Don't get back in while it's pumping — static's a hazard. It'll be done in a few.",
              standard:
                "Yes, it is advisable to remain nearby. Please refrain from re-entering the vehicle while fuel is being dispensed, as static electricity poses a potential hazard. The process will conclude within a couple of minutes.",
              formal:
                "Indeed, it is highly recommended to remain in the immediate vicinity. It is imperative that you do not re-enter the vehicle during the fueling operation, as static electricity presents a significant safety risk. The process is anticipated to be completed within approximately two minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "It just clicked and stopped. Do I just put the nozzle back?",
            textZh: "咔嗒停了。我把油枪放回去就行吗？",
            casualVersion: "It just clicked and stopped. Just put the nozzle back?",
            commonMistake: {
              wrong: "put back the nozzle",
              correct: "put the nozzle back",
              explanation: "动词短语 “put back” 中的 “back” 是副词，宾语 “the nozzle” 应放在中间。",
            },
            formalityVariants: {
              casual: "It just clicked and stopped. Just put the nozzle back?",
              standard:
                "It has just clicked and ceased operation. Should I simply return the nozzle to its original position?",
              formal:
                "The mechanism has just disengaged with an audible click, indicating cessation. Am I to understand that the next step is to replace the nozzle to its designated holder?",
            },
          },
          {
            speaker: "them",
            role: "工作人员",
            textEn:
              "Yep, hang it back up and close your gas cap. The receipt should print out automatically — or you can get one inside. You're all set!",
            textZh: "对，挂回去，关好油箱盖。小票会自动打印出来——或者进去拿也行。搞定了！",
            culturalNote: "加油后通常会打印收据，有时需进店领取。",
            keyPhrases: [
              { en: "hang it back up", zh: "挂回去" },
              { en: "gas cap", zh: "油箱盖" },
              { en: "you're all set", zh: "搞定了" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just put the nozzle back and close your gas cap. You're done!",
                textZh: "把油枪放回去，关好油箱盖。搞定了！",
                actionHint: "挂回油枪关好油箱盖",
                frequency: "common",
              },
              {
                textEn: "Hang it up, cap your tank, and grab your receipt. All done!",
                textZh: "挂回去，盖好油箱盖，拿小票。齐活儿！",
                actionHint: "别忘了拿小票",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, hang it back and close your cap. Receipt'll print automatically — or get one inside. You're good to go!",
            commonMistake: {
              wrong: "You are finished!",
              correct: "You're all set!",
              explanation: "“You're all set!” 是常用口语，表示“你搞定了/一切就绪”，比 “you are finished” 更自然。",
            },
            formalityVariants: {
              casual:
                "Yep, hang it back and close your cap. Receipt'll print automatically — or get one inside. You're good to go!",
              standard:
                "Yes, return it to its holder and secure your gas cap. The receipt should print automatically, or you may obtain one inside the station. You are now fully complete!",
              formal:
                "Affirmative. Please replace the nozzle to its designated position and securely fasten your fuel cap. The transaction receipt is programmed to print automatically; however, you may also request a copy inside the establishment. Your task is now entirely concluded.",
            },
          },
        ],
      },

      // --- Flow 2: 进店预付和求助 ---
      {
        id: "prepay-help",
        titleZh: "进店预付和求助",
        titleEn: "Pre-Paying and Asking for Help",
        description: "进加油站店内预付现金或信用卡被拒时求助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to pre-pay for gas on pump number 5. Can I pay with cash?",
            textZh: "你好，我想预付5号油枪的油费。可以付现金吗？",
            casualVersion: "Hey, wanna pre-pay for gas on pump 5. Cash cool?",
            culturalNote: "加油站预付现金或非美国信用卡是很常见的流程。",
            commonMistake: {
              wrong: "I want to pre-pay gas",
              correct: "I'd like to pre-pay for gas",
              explanation: "“want to” 比较生硬；“pay gas” 语法不对，需要 “pay for gas”。",
            },
            formalityVariants: {
              casual: "Hey, wanna pre-pay for gas at pump 5. Cash okay?",
              standard: "Hi, I'd like to pre-pay for gas on pump number 5. Can I pay with cash?",
              formal:
                "Good morning/afternoon, I would like to pre-pay for gasoline at pump number five. Would it be possible to pay with cash?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Sure! How much would you like to put on it? If you pay more than what you pump, we'll refund the difference.",
            textZh: "可以！你想预存多少？如果付的比实际加的多，差额会退给你。",
            culturalNote: "美国加油预付现金，若多付会退还差额，中国较少见此机制。",
            commonMistake: {
              wrong: "How much you want?",
              correct: "How much would you like to put on it?",
              explanation: "问预付金额时，用 \"would like\" 更礼貌，\"want\" 过于直接。",
            },
            alternativeExpressions: [
              {
                textEn: "How much gas do you need? Or do you just want to fill it up?",
                textZh: "你要加多少？还是加满？",
                actionHint: "告诉对方金额或说加满",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "pre-pay", zh: "预付" },
              { en: "put on it", zh: "预存/充值" },
              { en: "refund the difference", zh: "退差额" },
            ],
            vocabNotes: {
              "put on it": {
                meaningInContext: "在这句话里表示：往这个油枪上预存多少钱",
                similarUsage: "类似用法：Can I put $20 on pump 3?",
              },
            },
            casualVersion: "Yep! How much you wanna put on? If you pay too much, we'll give you back the difference.",
            formalityVariants: {
              casual: "Yep! How much you wanna put on? Pay too much, we'll give you the difference back.",
              standard:
                "Sure! How much would you like to put on it? If you pay more than what you pump, we'll refund the difference.",
              formal:
                "Certainly. What amount would you prefer to place on the pump? Should there be an excess payment, we will gladly refund the differential.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll put $40 on it. Here's two twenties.",
            textZh: "我预存40美元。给你两张20的。",
            commonMistake: {
              wrong: "I will give you two twenties.",
              correct: "Here are two twenties.",
              explanation: "递钱时说 'Here are...' 是更自然的表达",
            },
            casualVersion: "Forty bucks. Here's two twenties.",
            formalityVariants: {
              casual: "Forty bucks. Two twenties here.",
              standard: "I'll put $40 on it. Here's two twenties.",
              formal: "I would like to place forty dollars on the pump. Here are two twenty-dollar bills.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Got it. Pump 5 is activated. You're good to go. Just come back inside if you need change.",
            textZh: "收到。5号油枪已经激活了。可以去加了。如果需要找零，回来店里就行。",
            culturalNote: "美国加油站预付现金多收了，需要进店退还找零。",
            commonMistake: {
              wrong: "Pump 5 is ready.",
              correct: "Pump 5 is activated.",
              explanation: "\"activated\" 更准确地描述油枪可用的状态，\"ready\" 略显口语化但不够精确。",
            },
            keyPhrases: [
              { en: "activated", zh: "激活了" },
              { en: "you're good to go", zh: "可以了/可以去了" },
              { en: "change", zh: "找零" },
            ],
            alternativeExpressions: [
              {
                textEn: "Pump 5 is all set. Go ahead and start fueling.",
                textZh: "5号枪好了。去加吧。",
                actionHint: "去5号枪开始加油",
                frequency: "common",
              },
              {
                textEn: "You're good. 5's ready to go. Come back if you need change.",
                textZh: "可以了。5号准备好了。需要找零回来就行。",
                actionHint: "加完油回来找零",
                frequency: "common",
              },
            ],
            casualVersion: "Got it. Pump 5's active. You're set. Just come back in if you need change.",
            formalityVariants: {
              casual: "Got it. Pump 5's active. You're set. Come back in if you need change.",
              standard: "Got it. Pump 5 is activated. You're good to go. Just come back inside if you need change.",
              formal:
                "Understood. Pump number five has been activated. You may proceed. Please return inside should you require any change.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thanks. Actually, one more thing — my card got declined at the pump earlier. Is that common with foreign cards?",
            textZh: "谢谢。对了还有一个问题——我刚才在油枪上刷卡被拒了。外国卡常见吗？",
            casualVersion:
              "Thanks. Actually, one more thing — my card got declined at the pump earlier. Is that common for foreign cards?",
            culturalNote: "外国信用卡在加油站刷卡常因邮编被拒，是很实用的信息。",
            commonMistake: {
              wrong: "My card was declined",
              correct: "My card got declined",
              explanation: "“got declined” 比 “was declined” 更口语化和自然。",
            },
            formalityVariants: {
              casual: "Thanks. Oh, by the way, my card got declined at the pump. Happens a lot with foreign cards?",
              standard:
                "Thanks. Actually, one more thing — my card got declined at the pump earlier. Is that common with foreign cards?",
              formal:
                "Thank you. Additionally, I experienced an issue where my credit card was declined at the pump. Is this a frequent occurrence with international cards?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Yeah, that happens a lot with foreign credit cards because the pump asks for a US ZIP code. But you can always come inside and I'll run the card for you here — no ZIP code needed.",
            textZh:
              "是的，外国信用卡经常这样，因为油枪上会要求输入美国邮编。你可以进来店里，我在这里帮你刷——不需要邮编。",
            commonMistake: {
              wrong: "I can help you swipe here.",
              correct: "I can run it for you here.",
              explanation: "\"run it for you\" 是更地道地表示店员帮你刷卡操作。",
            },
            keyPhrases: [
              { en: "got declined", zh: "被拒了" },
              { en: "ZIP code", zh: "邮编" },
              { en: "run the card", zh: "帮你刷卡" },
            ],
            vocabNotes: {
              "run the card": {
                meaningInContext: "在这句话里表示：帮你刷信用卡/处理信用卡付款",
                similarUsage: "类似用法：Let me run your card through the machine.",
              },
              declined: {
                meaningInContext: "在这句话里表示：信用卡被拒绝/刷不过去",
                similarUsage: "类似用法：My payment was declined at the store.",
              },
            },
            culturalNote:
              "外国信用卡在美国自助加油时很容易被拒，因为系统要求输入美国邮编验证。最简单的解决办法就是进店用现金或让店员帮忙刷。",
            alternativeExpressions: [
              {
                textEn: "Yeah, foreign cards get rejected a lot out there. Just come inside and I'll swipe it for you.",
                textZh: "是的，外国卡在外面经常刷不过。进来我帮你刷。",
                actionHint: "下次直接进店刷卡",
                frequency: "common",
              },
              {
                textEn:
                  "Happens all the time. The pump wants a ZIP code. Bring your card in next time and we'll handle it.",
                textZh: "经常发生。油枪要邮编。下次拿卡进来我们帮你处理。",
                actionHint: "记住这个技巧",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, happens a lot with foreign cards 'cause the pump asks for a US ZIP code. But you can just come inside, and I'll run it here — no ZIP code needed.",
            formalityVariants: {
              casual:
                "Yeah, happens a lot with foreign cards 'cause the pump asks for a US ZIP code. Just come inside, I'll run it here — no ZIP code.",
              standard:
                "Yeah, that happens a lot with foreign credit cards because the pump asks for a US ZIP code. But you can always come inside and I'll run the card for you here — no ZIP code needed.",
              formal:
                "Yes, this is a frequent issue with international credit cards as the automated pumps require a U.S. ZIP code. However, you are always welcome to process the transaction inside the store, where a ZIP code will not be required.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know for next time! Where are the restrooms, by the way?",
            textZh: "下次知道了！对了，洗手间在哪？",
            casualVersion: "Good to know! So, where's the restroom?",
            commonMistake: {
              wrong: "Where is WC?",
              correct: "Where are the restrooms?",
              explanation: "WC在美式英语中不常用，“toilet” 指马桶，通常不用来问洗手间位置。",
            },
            formalityVariants: {
              casual: "Good to know! So, where's the restroom?",
              standard: "Good to know for next time! Where are the restrooms, by the way?",
              formal:
                "That's very helpful information. May I also inquire as to the location of your public restrooms?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "They're around the side of the building. You'll need this key — just bring it back when you're done.",
            textZh: "在楼的侧面。你需要这把钥匙——用完还回来就行。",
            commonMistake: {
              wrong: "Restrooms are on the side of the building.",
              correct: "They're around the side of the building.",
              explanation: "用 \"they're\" 更自然，\"around the side\" 比 \"on the side\" 听起来更口语化。",
            },
            keyPhrases: [
              { en: "around the side", zh: "在侧面" },
              { en: "you'll need this key", zh: "你需要这把钥匙" },
              { en: "bring it back", zh: "还回来" },
            ],
            culturalNote: "美国很多加油站的洗手间需要找店员拿钥匙，这是防止外人随意使用的做法。",
            alternativeExpressions: [
              {
                textEn: "Around the side. Here's the key — bring it back when you're done.",
                textZh: "在侧面。给你钥匙——用完还回来。",
                actionHint: "用完记得还钥匙",
                frequency: "common",
              },
              {
                textEn: "Outside, to the left. You need this key to get in.",
                textZh: "外面，往左走。你需要这把钥匙才能进去。",
                actionHint: "拿好钥匙去找洗手间",
                frequency: "common",
              },
            ],
            casualVersion:
              "They're around the side of the building. You'll need this key— just bring it back when you're done.",
            formalityVariants: {
              casual: "Side of the building. Here's the key— bring it back when you're done.",
              standard:
                "They're around the side of the building. You'll need this key — just bring it back when you're done.",
              formal:
                "The facilities are located on the side of the building. You will require this key for access; kindly return it upon completion of your visit.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Also, do you sell windshield washer fluid? I think mine is running low.",
            textZh: "谢谢！你们卖挡风玻璃清洗液吗？我的好像快没了。",
            casualVersion: "Thanks! Hey, do you guys sell windshield washer fluid? Mine's kinda low.",
            commonMistake: {
              wrong: "Do you have windshield washer fluid?",
              correct: "Do you sell windshield washer fluid?",
              explanation: "“Do you have” 听起来像问有没有私人用品，“Do you sell” 问是否有售卖。",
            },
            formalityVariants: {
              casual: "Thanks! Hey, you guys sell windshield washer fluid? Mine's kinda low.",
              standard: "Thanks! Also, do you sell windshield washer fluid? I think mine is running low.",
              formal:
                "Thank you. Furthermore, I was wondering if you carry windshield washer fluid? I believe my vehicle's reservoir is quite low.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Yes, aisle 3 on the right. We also have engine oil and antifreeze if you need those. Let me know if you need help finding anything.",
            textZh: "有的，右边第3排货架。我们也有机油和防冻液。找不到的话告诉我。",
            commonMistake: {
              wrong: "Tell me if you need help.",
              correct: "Let me know if you need help finding anything.",
              explanation: "\"Let me know\" 更礼貌和主动，且 \"finding anything\" 更完整地表达了语境。",
            },
            keyPhrases: [
              { en: "windshield washer fluid", zh: "挡风玻璃清洗液" },
              { en: "engine oil", zh: "机油" },
              { en: "antifreeze", zh: "防冻液" },
              { en: "aisle", zh: "过道/货架排" },
            ],
            alternativeExpressions: [
              {
                textEn: "Aisle 3, on the right. We've also got oil and antifreeze if you need them.",
                textZh: "右边第3排。还有机油和防冻液需要的话也有。",
                actionHint: "去第3排找",
                frequency: "common",
              },
              {
                textEn: "Yeah, over in the automotive section. Third row. Holler if you can't find it.",
                textZh: "有的，在汽车用品区。第三排。找不到喊我。",
                actionHint: "去汽车用品区找",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, aisle 3 on the right. Got engine oil and antifreeze too, if you need 'em. Lemme know if you need help finding anything.",
            formalityVariants: {
              casual: "Yep, aisle 3 right. Got engine oil and antifreeze if you need 'em. Lemme know if you need help.",
              standard:
                "Yes, aisle 3 on the right. We also have engine oil and antifreeze if you need those. Let me know if you need help finding anything.",
              formal:
                "Yes, it is located in aisle three, to your right. We also stock engine oil and antifreeze, should you require those items. Please do not hesitate to ask if you need assistance locating anything.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, thanks so much! You've been super helpful.",
            textZh: "好的，太感谢了！你帮了大忙。",
            casualVersion: "Got it, thanks a bunch! You've been super helpful.",
            commonMistake: {
              wrong: "You are very helpful",
              correct: "You've been super helpful",
              explanation: "“You are” 听起来像在评价，“You've been” 更自然地表示对方持续的帮助。",
            },
            formalityVariants: {
              casual: "Got it, thanks a bunch! You've been super helpful.",
              standard: "Got it, thanks so much! You've been super helpful.",
              formal: "Understood, thank you very much for your assistance! I greatly appreciate your extensive help.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 火车/长途巴士 ====================
  {
    id: "transport-train",
    category: "transport",
    titleZh: "火车/长途巴士",
    titleEn: "Long-Distance Train/Bus",
    description: "乘坐长途火车或巴士的全流程，包括订票、对号入座和行李管理",
    otherRole: "列车员/巴士司机",
    otherRoleIcon: "train",
    flows: [
      // --- Flow 1: 购票上车 ---
      {
        id: "booking-boarding",
        titleZh: "购票上车",
        titleEn: "Booking and Boarding",
        description: "在车站窗口购票或查询车次，找到对应站台上车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to buy a ticket to Boston. What are the departure times today?",
            textZh: "你好，我想买一张去波士顿的票。今天有哪些班次？",
            casualVersion: "Hey, wanna grab a ticket to Boston. What times are there today?",
            commonMistake: {
              wrong: "Hello, I want to buy a ticket to Boston. What times have today?",
              correct: "Hi, I'd like to buy a ticket to Boston. What times are available today?",
              explanation: "“I want to” 听起来不礼貌，用 “I'd like to” 更佳。“What times are available” 是更自然的表达。",
            },
            formalityVariants: {
              casual: "Hey, need a ticket to Boston. What times today?",
              standard: "Hi, I'd like to buy a ticket to Boston. What times are available today?",
              formal: "Good morning/afternoon, I would like to purchase a ticket to Boston. Could you please inform me of the available departure times for today?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Let me check. We have departures at 10:15 AM, 1:30 PM, and 4:45 PM. The 10:15 is an express — it takes about 3.5 hours. The others are local and take around 5 hours with stops.",
            textZh:
              "我查一下。今天有上午10:15、下午1:30和下午4:45的班次。10:15是快车——大概3个半小时。其他是慢车，沿途停靠，大约5个小时。",
            casualVersion: "Lemme check. We got departures at 10:15 AM, 1:30 PM, and 4:45 PM. The 10:15's an express — 'bout 3.5 hours. Others are local, take 'round 5 hours with stops.",
            formalityVariants: {
              casual: "Checking. 10:15 AM, 1:30 PM, 4:45 PM. 10:15 is express, 3.5 hours. Others are local, 5 hours with stops.",
              standard: "Let me check. We have departures at 10:15 AM, 1:30 PM, and 4:45 PM. The 10:15 is an express — it takes about 3.5 hours. The others are local and take around 5 hours with stops.",
              formal: "Certainly, I'll check for you. We have scheduled departures at 10:15 AM, 1:30 PM, and 4:45 PM. The 10:15 AM service is an express, with an approximate travel time of 3.5 hours. The other services are local, requiring around 5 hours due to intermediate stops.",
            },
            alternativeExpressions: [
              {
                textEn: "The next train leaves in 40 minutes. Would you like that one?",
                textZh: "下一班40分钟后出发。你要坐这班吗？",
                actionHint: "确认是否要最近的一班",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "departures", zh: "班次/出发时间" },
              { en: "express", zh: "快车/直达" },
              { en: "local", zh: "慢车/站站停" },
              { en: "with stops", zh: "沿途停靠" },
            ],
            vocabNotes: {
              express: {
                meaningInContext: "在这句话里表示：直达或快速列车，中途很少停",
                similarUsage: "类似用法：Take the express bus to save time.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the 10:15 express. How much is a one-way ticket?",
            textZh: "我坐10:15的快车。单程票多少钱？",
            casualVersion: "I'll take the 10:15 express. How much is a one-way?",
            commonMistake: {
              wrong: "I take 10:15 express. How much is single ticket?",
              correct: "I'll take the 10:15 express. How much is a one-way ticket?",
              explanation: "中文说“我坐”，英文习惯说“I'll take”。“Single ticket”指单人票，单程票是“one-way ticket”。",
            },
            formalityVariants: {
              casual: "Lemme get the 10:15 express. What's a one-way cost?",
              standard: "I'll take the 10:15 express. How much is a one-way ticket?",
              formal: "I would like to purchase a ticket for the 10:15 AM express service. Could you please inform me of the one-way fare?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "A one-way ticket in coach is $49, and business class is $89. Business class includes a reserved seat, more legroom, and complimentary Wi-Fi.",
            textZh: "经济座单程49美元，商务座89美元。商务座包含预留座位、更大的腿部空间和免费Wi-Fi。",
            casualVersion: "A one-way coach ticket's $49, business class is $89. Business class gets ya a reserved seat, more legroom, and free Wi-Fi.",
            formalityVariants: {
              casual: "Coach one-way, $49; business, $89. Business means reserved seat, more legroom, free Wi-Fi.",
              standard: "A one-way ticket in coach is $49, and business class is $89. Business class includes a reserved seat, more legroom, and complimentary Wi-Fi.",
              formal: "A single-journey ticket in coach class is priced at $49, whereas business class is available for $89. Business class amenities include a guaranteed reserved seat, enhanced legroom, and complimentary Wi-Fi access.",
            },
            keyPhrases: [
              { en: "one-way ticket", zh: "单程票" },
              { en: "coach", zh: "经济座" },
              { en: "business class", zh: "商务座" },
              { en: "reserved seat", zh: "预留座位" },
              { en: "legroom", zh: "腿部空间" },
              { en: "complimentary", zh: "免费赠送的" },
            ],
            vocabNotes: {
              coach: {
                meaningInContext: "在这句话里表示：普通/经济等级的座位",
                similarUsage: "类似用法：We flew coach to save money.",
              },
              complimentary: {
                meaningInContext: "在这句话里表示：免费附送的，不额外收费",
                similarUsage: "类似用法：The hotel offers complimentary breakfast.",
              },
            },
            isBranchPoint: true,
            alternativeExpressions: [
              {
                textEn: "Coach is $49, business is $89. Business gets you more legroom and free Wi-Fi.",
                textZh: "经济座49，商务座89。商务座空间大还有免费Wi-Fi。",
                actionHint: "选择座位等级",
                frequency: "common",
              },
              {
                textEn: "One-way starts at $49 for regular seating. Want me to check business class?",
                textZh: "单程普通座49美元起。要看看商务座吗？",
                actionHint: "考虑是否升级商务座",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Coach is fine. Can I bring a large suitcase on board?",
            textZh: "经济座就行。我可以带大行李箱上车吗？",
            casualVersion: "Coach is fine. Can I bring a big suitcase on board?",
            commonMistake: {
              wrong: "Economy class is fine. Can I take big luggage on car?",
              correct: "Coach is fine. Can I bring a large suitcase on board?",
              explanation: "经济座在火车或巴士上常用“coach”。“Luggage”是不可数名词。“on board”更地道。",
            },
            formalityVariants: {
              casual: "Coach works. Can I bring a big bag?",
              standard: "Coach is fine. Can I bring a large suitcase on board?",
              formal: "The coach class will be sufficient. May I inquire if I am permitted to bring a large suitcase onto the vehicle?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, you can bring two bags — one carry-on and one larger bag. There's overhead storage and a luggage rack at the end of each car for bigger bags. No extra charge.",
            textZh:
              "可以，你可以带两件行李——一件随身和一件大件。车厢上方有行李架，每节车厢尽头也有大件行李区。不额外收费。",
            commonMistake: {
              wrong: "There is no extra fee.",
              correct: "No extra charge.",
              explanation: "Chinese speakers often say 'no extra fee', but 'no extra charge' is more natural here.",
            },
            casualVersion: "Yep, you can bring two bags — one carry-on, one bigger bag. There's overhead racks and big luggage areas at each car's end. No extra charge.",
            formalityVariants: {
              casual: "Yeah, two bags — carry-on and a bigger one. Overhead racks, big luggage spots at car ends. No extra cost.",
              standard: "Yes, you can bring two bags — one carry-on and one larger bag. There are overhead racks and large luggage areas at the end of each car. There's no extra charge.",
              formal: "Yes, you are permitted to bring two pieces of luggage: one carry-on item and one larger bag. Overhead storage racks are provided, and there are designated larger luggage areas located at the ends of each car. There is no additional charge for this.",
            },
            keyPhrases: [
              { en: "carry-on", zh: "随身行李" },
              { en: "overhead storage", zh: "上方行李架" },
              { en: "luggage rack", zh: "行李架" },
              { en: "no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Two bags are fine. There's a rack at the end of the car for bigger stuff.",
                textZh: "两件行李没问题。每节车厢尾部有大件行李架。",
                actionHint: "了解行李存放位置",
                frequency: "common",
              },
              {
                textEn: "Sure, no problem. You can put it in the overhead bin or at the end of the car.",
                textZh: "可以，没问题。放头顶行李架或者车厢尾部都行。",
                actionHint: "上车后找行李位",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. Which platform does the 10:15 train depart from?",
            textZh: "好的。10:15的列车在哪个站台出发？",
            casualVersion: "Cool. What platform's the 10:15 train leave from?",
            commonMistake: {
              wrong: "Good. Which platform 10:15 train depart from?",
              correct: "Great. Which platform does the 10:15 train depart from?",
              explanation: "疑问句需要助动词“does”。“Good”或“Great”都可以表示“好的”。",
            },
            formalityVariants: {
              casual: "Okay. Where's the 10:15 train leave from?",
              standard: "Great. Which platform does the 10:15 train depart from?",
              formal: "Understood. Could you please inform me of the departure platform for the 10:15 AM train?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "It'll be announced about 15 minutes before departure on the screen over there. Usually it's Platform 7 or 8 for the Boston trains. They'll call the boarding over the PA system too.",
            textZh: "出发前大约15分钟会在那边的屏幕上公布。去波士顿的通常在7号或8号站台。他们也会通过广播叫你上车。",
            commonMistake: {
              wrong: "They will announce it by broadcast.",
              correct: "They'll also make announcements.",
              explanation: "用“make announcements”更自然，而不是“announce by broadcast”。",
            },
            casualVersion: "It'll be on the screens over there 'bout 15 mins before it leaves. Boston trains are usually platforms 7 or 8. They'll call you to board too.",
            formalityVariants: {
              casual: "Screens there, 15 mins before. Boston trains usually 7 or 8. They'll announce boarding.",
              standard: "It will be announced on the screens over there approximately 15 minutes before departure. Trains to Boston usually depart from platforms 7 or 8. They will also announce boarding via loudspeaker.",
              formal: "The platform assignment will be displayed on the information screens approximately 15 minutes prior to departure. Services to Boston typically utilize platforms 7 or 8. Boarding announcements will also be made over the public address system.",
            },
            keyPhrases: [
              { en: "announced", zh: "公布/宣布" },
              { en: "platform", zh: "站台" },
              { en: "boarding", zh: "登车/上车" },
              { en: "PA system", zh: "广播系统" },
            ],
            alternativeExpressions: [
              {
                textEn: "Check the board in about 15 minutes — it'll show the platform. Usually 7 or 8 for Boston.",
                textZh: "15分钟后看大屏——会显示站台。去波士顿通常在7或8号。",
                actionHint: "等大屏幕公布站台",
                frequency: "common",
              },
              {
                textEn: "They'll announce it soon. Keep an eye on the departure board over there.",
                textZh: "很快会广播的。留意那边的出发信息屏。",
                actionHint: "注意广播和屏幕",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "One last question — is there a dining car on this train?",
            textZh: "最后一个问题——这趟车有餐车吗？",
            casualVersion: "Last question — there a dining car on this train?",
            commonMistake: {
              wrong: "One last question – this train has dining car?",
              correct: "One last question — is there a dining car on this train?",
              explanation: "英文疑问句需倒装或助动词。“is there”是地道表达。",
            },
            formalityVariants: {
              casual: "Quick question — dining car on this train?",
              standard: "One last question — is there a dining car on this train?",
              formal: "I have one final question, if I may. Is there a dining car facility available on this particular train service?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Yes, there's a café car in the middle of the train. They sell sandwiches, drinks, and snacks. But I'd recommend grabbing something before you board — the café car can get crowded.",
            textZh: "有的，列车中间有一节餐吧车。卖三明治、饮料和零食。不过建议上车前买点吃的——餐吧车可能会很挤。",
            commonMistake: {
              wrong: "I suggest you buy something to eat before getting on the train.",
              correct: "But I'd recommend grabbing something before you board.",
              explanation: "“grab something”更口语化、自然。避免直译“buy something to eat”。",
            },
            casualVersion: "Yeah, there's a cafe car in the middle of the train. Sells sandwiches, drinks, snacks. But you might wanna grab something to eat before you get on — it can get crowded.",
            formalityVariants: {
              casual: "Yep, cafe car in the middle. Sandwiches, drinks, snacks. But grab food before boarding, it gets busy.",
              standard: "Yes, there is a cafe car located in the middle of the train. It sells sandwiches, beverages, and snacks. However, I recommend purchasing food before boarding as the cafe car can become quite crowded.",
              formal: "Yes, there is a designated cafe car situated towards the middle of the train. It offers a selection of sandwiches, beverages, and snacks for purchase. Nevertheless, it is advisable to procure any desired food items prior to boarding, as the cafe car can experience high traffic.",
            },
            keyPhrases: [
              { en: "café car", zh: "餐吧车" },
              { en: "grabbing something", zh: "买点东西" },
              { en: "before you board", zh: "上车前" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's no food service on this route, so bring your own snacks.",
                textZh: "这条线路没有餐饮服务，自己带点吃的吧。",
                actionHint: "上车前在车站买吃的",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll grab a coffee and a sandwich. Thank you so much!",
            textZh: "好主意。我先买杯咖啡和三明治。非常感谢！",
            casualVersion: "Good call. I'll grab a coffee and sandwich first. Thanks a ton!",
            commonMistake: {
              wrong: "Good idea. I go buy a coffee and sandwich first. Very thank you!",
              correct: "Good idea. I'll buy a coffee and sandwich first. Thank you very much!",
              explanation: "“I'll go buy”更自然地表达将要做的动作。“Thank you very much”或“Thanks a lot”更常见。",
            },
            formalityVariants: {
              casual: "Smart. I'll get coffee and a sandwich first. Cheers!",
              standard: "Good idea. I'll buy a coffee and sandwich first. Thank you very much!",
              formal: "That is an excellent suggestion. I shall proceed to purchase a coffee and a sandwich beforehand. Thank you kindly for your assistance.",
            },
          },
        ],
      },

      // --- Flow 2: 车上对号入座和行李 ---
      {
        id: "onboard",
        titleZh: "车上对号入座和行李",
        titleEn: "Finding Your Seat and Storing Luggage",
        description: "在火车或巴士上找到座位、存放行李、处理座位问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think this might be my seat — 14A? I have a reserved seat ticket.",
            textZh: "不好意思，这好像是我的座位——14A？我有对号入座的票。",
            casualVersion: "Excuse me, I think this might be my seat — 14A? I got a reserved ticket.",
            commonMistake: {
              wrong: "Excuse me, I think this is my seat — 14A? I have the reserved seat ticket.",
              correct: "Excuse me, I think this might be my seat — 14A? I have a reserved seat ticket.",
              explanation: "“might be”更客气，避免直接断定。“The”不需要，直接“a reserved seat ticket”即可。",
            },
            formalityVariants: {
              casual: "Hey, pretty sure this is my seat — 14A? Got a reserved ticket.",
              standard: "Excuse me, I think this might be my seat — 14A? I have a reserved seat ticket.",
              formal: "Pardon me, but I believe this seat, 14A, may be allocated to me. I hold a reservation ticket for this specific seat.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Oh, let me check my ticket... You're right, I'm in 14B. Sorry, I thought this was an unreserved car. Let me move my bag.",
            textZh: "哦，让我看看我的票……你是对的，我是14B。抱歉，我以为这节车厢不对号。我把包挪一下。",
            commonMistake: {
              wrong: "I thought this car was free seating.",
              correct: "I thought this car was unreserved.",
              explanation: "“unreserved”更准确地表达了“不对号入座”的意思，避免“free seating”的歧义。",
            },
            casualVersion: "Oh, lemme check my ticket... You're right, I'm 14B. My bad, thought this car wasn't assigned. I'll move my bag.",
            formalityVariants: {
              casual: "Oh, check my ticket... You're right, 14B. Oops, thought this car was open. Moving my bag.",
              standard: "Oh, let me check my ticket... You're right, I am 14B. My apologies, I thought this car didn't have assigned seating. I'll move my bag.",
              formal: "Oh, kindly allow me to verify my ticket... You are indeed correct; my seat is 14B. My sincere apologies, I was under the impression that this particular carriage did not have assigned seating. I will promptly relocate my belongings.",
            },
            alternativeExpressions: [
              {
                textEn: "Oh sorry, my mistake! I'll move right away.",
                textZh: "抱歉，我搞错了！我马上挪。",
                actionHint: "等对方让出座位",
                frequency: "common",
              },
              {
                textEn: "Are you sure? Let me see your ticket.",
                textZh: "你确定吗？让我看看你的票。",
                actionHint: "出示你的车票给对方看",
                frequency: "occasional",
              },
            ],
            keyPhrases: [
              { en: "reserved seat", zh: "对号入座/预留座位" },
              { en: "unreserved car", zh: "不对号的车厢" },
              { en: "let me move my bag", zh: "我把包挪一下" },
            ],
            vocabNotes: {
              unreserved: {
                meaningInContext: "在这句话里表示：不对号入座的，随便坐",
                similarUsage: "类似用法：Unreserved seats are available on a first-come basis.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "No worries at all. Could you help me lift this suitcase into the overhead rack? It's a bit heavy.",
            textZh: "没关系。能帮我把这个箱子抬到上面的行李架吗？有点重。",
            casualVersion: "No worries at all. Could ya help me lift this suitcase into the overhead rack? It's pretty heavy.",
            commonMistake: {
              wrong: "No problem. Can you help me lift this box to overhead rack? It is heavy.",
              correct: "No worries at all. Could you help me lift this suitcase into the overhead rack? It's pretty heavy.",
              explanation: "“No worries at all”更地道。“Suitcase”比“box”准确。“overhead rack”更具体。",
            },
            formalityVariants: {
              casual: "No biggie. Help me get this bag up top? It's heavy.",
              standard: "No worries at all. Could you help me lift this suitcase into the overhead rack? It's pretty heavy.",
              formal: "Not a problem whatsoever. Would you be so kind as to assist me with lifting this suitcase into the overhead storage compartment? It is rather weighty.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Sure thing. One, two, three — there we go. That is heavy! What do you have in there?",
            textZh: "没问题。一、二、三——好了。真的挺重的！你装了什么？",
            commonMistake: {
              wrong: "What things do you have in there?",
              correct: "What do you have in there?",
              explanation: "“What do you have in there?”更自然，无需强调“things”。",
            },
            casualVersion: "Sure thing. One, two, three — there we go. That is heavy! What'd you put in there?",
            formalityVariants: {
              casual: "No problem. One, two, three — got it. That's heavy! What's in it?",
              standard: "Sure thing. One, two, three — there we go. That is heavy! What do you have in there?",
              formal: "Certainly. One, two, three — and there it is. That is indeed quite heavy! May I inquire as to its contents?",
            },
            keyPhrases: [
              { en: "overhead rack", zh: "上方行李架" },
              { en: "there we go", zh: "好了/搞定" },
            ],
            alternativeExpressions: [
              {
                textEn: "Let me give you a hand. One, two, three — there ya go!",
                textZh: "我帮你。一二三——好了！",
                actionHint: "道谢",
                frequency: "common",
              },
              {
                textEn: "Whoa, that's heavy! What've you got in there, bricks?",
                textZh: "哇，好重！你装了啥，砖头啊？",
                actionHint: "笑着感谢对方帮忙",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, way too many souvenirs! Thank you so much. Is there a power outlet near the seat?",
            textZh: "哈哈，纪念品买太多了！太谢谢了。座位附近有电源插座吗？",
            casualVersion: "Ha, way too many souvenirs! Thanks so much. Is there an outlet near the seat?",
            commonMistake: {
              wrong: "Ha, too many souvenirs! Thank you very much. Have power outlet near seat?",
              correct: "Ha, way too many souvenirs! Thank you so much. Is there a power outlet near the seat?",
              explanation: "“way too many”更口语化。“Is there a power outlet”是地道问法。",
            },
            formalityVariants: {
              casual: "Haha, too many souvenirs! Thanks a bunch. Power outlet nearby?",
              standard: "Ha, way too many souvenirs! Thank you so much. Is there a power outlet near the seat?",
              formal: "Haha, indeed, an abundance of souvenirs! I am most grateful for your assistance. May I ask if a power outlet is available near this seating area?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Yeah, there's one between our seats, down by the floor. It's a standard US outlet. Do you need a plug adapter?",
            textZh: "有的，在我们座位中间，靠地板的地方。是标准美式插座。你需要转换插头吗？",
            culturalNote: "美国插座是两扁一圆或两扁，需转换插头",
            commonMistake: {
              wrong: "It's a normal American socket.",
              correct: "It's a standard American outlet.",
              explanation: "“outlet”是插座的标准说法，而“socket”多指电源孔本身。",
            },
            casualVersion: "Yeah, there's one between our seats, near the floor. It's a standard US outlet. Need a converter?",
            formalityVariants: {
              casual: "Yep, between our seats, by the floor. Standard US outlet. Need a converter?",
              standard: "Yeah, there's one between our seats, near the floor. It's a standard American outlet. Do you need a converter?",
              formal: "Yes, there is indeed one located between our seats, close to the floor. It is a standard American electrical outlet. Do you require a power converter?",
            },
            keyPhrases: [
              { en: "power outlet", zh: "电源插座" },
              { en: "down by the floor", zh: "靠地板的地方" },
              { en: "plug adapter", zh: "转换插头" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's one between the seats, down low. Standard American plug.",
                textZh: "座位中间有一个，在下面。美标插座。",
                actionHint: "找到插座充电",
                frequency: "common",
              },
              {
                textEn: "Yeah, check by your feet. Some seats have USB ports too.",
                textZh: "有的，看看脚边。有些座位还有USB口。",
                actionHint: "找插座或USB口",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I have one, thanks! By the way, do you know if there's Wi-Fi on this train?",
            textZh: "我有的，谢谢！对了，这趟车有Wi-Fi吗？",
            casualVersion: "Got one, thanks! By the way, know if there's Wi-Fi on this train?",
            commonMistake: {
              wrong: "I have one, thanks! By the way, do you know this train has Wi-Fi?",
              correct: "I have one, thanks! By the way, do you know if there's Wi-Fi on this train?",
              explanation: "“Do you know if there's Wi-Fi”更自然地表达“有没有”。",
            },
            formalityVariants: {
              casual: "Have one, thanks! Btw, is there Wi-Fi?",
              standard: "I have one, thanks! By the way, do you know if there's Wi-Fi on this train?",
              formal: "I possess one, thank you! Incidentally, are you aware if Wi-Fi connectivity is provided on this train?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "There is, but honestly it's pretty slow. Good enough for emails but not great for streaming. The password is usually on the back of the seat in front of you.",
            textZh: "有的，但说实话挺慢的。发邮件够用，看视频就不太行了。密码通常在前面座椅靠背上。",
            commonMistake: {
              wrong: "It's slow for watching videos.",
              correct: "not so much for streaming videos.",
              explanation: "“streaming videos”更具体和自然，比“watching videos”在语境中更常用。",
            },
            casualVersion: "There is, but honestly, it's pretty slow. Good for emails, not really for videos. Password's usually on the seat back in front of you.",
            formalityVariants: {
              casual: "Yeah, but it's slow. Emails are fine, videos not so much. Password's on the seat back.",
              standard: "There is, but honestly it's quite slow. It's fine for emails, but not really for streaming videos. The password is usually on the seat back in front of you.",
              formal: "Yes, it is available, however, I must candidly state that its performance is rather slow. It is suitable for email correspondence, but not truly adequate for streaming video content. The password is typically provided on the seat back in front of you.",
            },
            keyPhrases: [
              { en: "pretty slow", zh: "挺慢的" },
              { en: "good enough for", zh: "够用于……" },
              { en: "streaming", zh: "流媒体/看视频" },
            ],
            alternativeExpressions: [
              {
                textEn: "There's Wi-Fi, but it's pretty spotty. Don't expect to stream anything.",
                textZh: "有Wi-Fi，但信号断断续续的。别指望看视频。",
                actionHint: "用来收发消息就好",
                frequency: "common",
              },
              {
                textEn: "Yeah, the password's usually on the seatback. It's slow though — emails only, basically.",
                textZh: "有，密码一般在椅背上。不过很慢——基本只能收发邮件。",
                actionHint: "找椅背上的密码",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. How many more stops before Boston?",
            textZh: "没关系。到波士顿还有几站？",
            casualVersion: "No problem. How many more stops till Boston?",
            commonMistake: {
              wrong: "No problem. How many stops to Boston?",
              correct: "No problem. How many more stops before Boston?",
              explanation: "“How many more stops before Boston?”更完整和地道，强调还有多少站。",
            },
            formalityVariants: {
              casual: "Okay. How many more stops to Boston?",
              standard: "No problem. How many more stops before Boston?",
              formal: "Understood. Could you please inform me of the number of remaining stops prior to our arrival in Boston?",
            },
          },
          {
            speaker: "them",
            role: "列车员",
            textEn:
              "We have three more stops — Providence, then two smaller stations. Boston South Station is the final stop, so you won't miss it. I'll announce each stop beforehand.",
            textZh: "还有三站——普罗维登斯，然后两个小站。波士顿南站是终点站，你不会错过的。每站前我会广播。",
            commonMistake: {
              wrong: "I will tell you before each stop.",
              correct: "I'll make announcements before each stop.",
              explanation: "“make announcements”是更地道且正式的说法，表示通过广播告知乘客。",
            },
            casualVersion: "We got three more stops — Providence, then two smaller stations. Boston South Station's the last stop, so you won't miss it. I'll announce each stop.",
            formalityVariants: {
              casual: "Three more stops — Providence, then two small ones. Boston South Station is the end, can't miss it. I'll announce each stop.",
              standard: "We have three more stops — Providence, then two smaller stations. Boston South Station is the final stop, so you won't miss it. I'll announce each stop before we arrive.",
              formal: "We have three additional stops remaining: Providence, followed by two minor stations. Boston South Station serves as the terminal stop, therefore you will not inadvertently miss it. I will make an announcement before each stop.",
            },
            keyPhrases: [
              { en: "final stop", zh: "终点站" },
              { en: "you won't miss it", zh: "你不会错过的" },
              { en: "announce each stop", zh: "每站广播" },
              { en: "beforehand", zh: "提前/事先" },
            ],
            alternativeExpressions: [
              {
                textEn: "Next stop is Providence in about 20 minutes. Boston is two stops after that.",
                textZh: "下一站是普罗维登斯，大约20分钟。波士顿在那之后两站。",
                actionHint: "注意听广播",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. And when we arrive, do I exit from the front or back of the train?",
            textZh: "好的。到了以后，从车头还是车尾下车？",
            casualVersion: "Great. And when we get there, do I get off from the front or back of the train?",
            commonMistake: {
              wrong: "Good. And when we arrive, do I go down from front or back of train?",
              correct: "Great. And when we arrive, do I exit from the front or back of the train?",
              explanation: "“Go down from”听起来不自然。“Exit from”是标准的表达。",
            },
            formalityVariants: {
              casual: "Cool. When we get to Boston, front or back to exit?",
              standard: "Great. And when we arrive, do I exit from the front or back of the train?",
              formal: "Excellent. Upon our arrival, please advise if I should disembark from the front or rear of the train.",
            },
          },
          {
            speaker: "them",
            role: "列车员",
            textEn:
              "All doors open at South Station, so you can exit from any car. The main concourse and taxi stand are toward the front of the train. Make sure you have all your belongings.",
            textZh: "在南站所有车门都会打开，从哪节车厢下都行。大厅和出租车站在列车前部方向。记得带好所有随身物品。",
            culturalNote: "美国公共交通强调保管个人物品，常有提醒",
            commonMistake: {
              wrong: "Make sure you take all your belongings.",
              correct: "Make sure you have all your belongings.",
              explanation: "“have all your belongings”是美国更常见的提醒方式，而非“take”。",
            },
            casualVersion: "All doors open at South Station, so you can get off from any car. The main hall and taxi stand are towards the front of the train. Make sure you got all your stuff.",
            formalityVariants: {
              casual: "All doors open at South Station, so any car's fine. Main hall and taxis are up front. Grab all your stuff.",
              standard: "All doors open at South Station, so you can exit from any car. The main concourse and taxi stand are toward the front of the train. Make sure you have all your belongings.",
              formal: "At South Station, all doors will be operational, allowing you to disembark from any car. The main concourse and taxi stand facilities are located towards the front of the train. Please ensure you have retrieved all your personal belongings.",
            },
            keyPhrases: [
              { en: "all doors open", zh: "所有车门都会打开" },
              { en: "main concourse", zh: "大厅/候车大厅" },
              { en: "taxi stand", zh: "出租车站" },
              { en: "belongings", zh: "随身物品" },
            ],
            alternativeExpressions: [
              {
                textEn: "Boston is the last stop, so just sit tight. I'll announce when we're close.",
                textZh: "波士顿是终点站，坐着就行。快到了我会广播。",
                actionHint: "放心不会坐过站",
                frequency: "common",
              },
              {
                textEn: "You can get off from any door. The main exit and taxis are toward the front.",
                textZh: "哪个门都能下。正门和出租车在前面方向。",
                actionHint: "带好行李从前门出",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 骑行/共享单车 ====================
  {
    id: "transport-bike",
    category: "transport",
    titleZh: "骑行/共享单车",
    titleEn: "Bike Rental & Scooter",
    description: "在国外租自行车、共享单车或电动滑板车，了解骑行规则和安全须知",
    otherRole: "租车店员/工作人员",
    otherRoleIcon: "bike",
    flows: [
      // --- Flow 1: 租自行车 ---
      {
        id: "bike-rental",
        titleZh: "租自行车",
        titleEn: "Renting a Bicycle",
        description: "在租车店租一辆自行车，选择车型、了解价格和归还规则",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to rent a bicycle for the day. What options do you have?",
            textZh: "你好，我想租一辆自行车骑一天。你们有什么选择？",
            casualVersion: "Hey, looking to rent a bike for today. What do you got?",
            commonMistake: {
              wrong: "I want to rent a bicycle for the day.",
              correct: "I'd like to rent a bicycle for the day.",
              explanation: "“I want to” 听起来比较直接生硬，“I'd like to” 更委婉礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna rent a bike for the day. Whatcha got?",
              standard: "Hi, I'd like to rent a bicycle for the day. What options do you have?",
              formal:
                "Good morning/afternoon, I am interested in renting a bicycle for the day. Could you please inform me of the available options?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! We have standard city bikes for $15 a day and electric bikes for $30. The e-bikes are great if you're planning to cover a lot of ground or there are hills.",
            textZh:
              "好的！我们有普通城市自行车每天15美元，电动自行车每天30美元。如果你打算骑很远或者有上坡路，电动的很方便。",
            commonMistake: {
              wrong: "if you want to go far or have uphill roads",
              correct: "if you plan to go far or have uphill sections",
              explanation: "中文'有上坡路'直译不自然，应说'有上坡路段'或'遇到上坡'。",
            },
            keyPhrases: [
              { en: "city bikes", zh: "城市自行车" },
              { en: "electric bikes", zh: "电动自行车" },
              { en: "cover a lot of ground", zh: "走很远的路" },
            ],
            variations: [
              {
                textEn: "We've got regular bikes and e-bikes. How far are you planning to ride?",
                textZh: "我们有普通自行车和电动车。你打算骑多远？",
              },
            ],
            alternativeExpressions: [
              {
                textEn: "We've got regular bikes and e-bikes. The e-bike is great for hills.",
                textZh: "有普通自行车和电动的。有坡的话电动的很好用。",
                actionHint: "根据路线选车型",
                frequency: "common",
              },
              {
                textEn: "City bikes are $15, e-bikes are $30. How far are you planning to go?",
                textZh: "城市车15块，电动车30块。你打算骑多远？",
                actionHint: "告诉对方你的计划",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, we got regular city bikes, fifteen bucks a day, and e-bikes for thirty. E-bikes are awesome if you're going far or it's hilly.",
            formalityVariants: {
              casual:
                "Yep! Got regular city bikes ($15/day) and e-bikes ($30). E-bikes are good if you're going far or uphill.",
              standard:
                "Sure! We have standard city bikes for $15 a day and electric bikes for $30. The e-bikes are great if you're planning to cover a lot of ground or there are hills.",
              formal:
                "Certainly. Our offerings include standard city bicycles, priced at $15 per day, and electric bicycles, available for $30 daily. The electric bicycles are highly recommended for covering extensive distances or navigating challenging hilly terrains.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the city bike. Does it come with a helmet and a lock?",
            textZh: "我要普通的。带头盔和锁吗？",
            culturalNote: "与中国常见的'我要'不同，在美式英语中直接说'I want'听起来可能不够礼貌或生硬，常用'I'll take'或'I'",
            casualVersion: "I'll just grab a city bike. Helmet and lock included?",
            commonMistake: {
              wrong: "Does it have helmet and lock?",
              correct: "Does it come with a helmet and a lock?",
              explanation: "问特定物品是否附带，用 “come with” 更自然，且冠词 “a” 不能省略。",
            },
            formalityVariants: {
              casual: "City bike for me. Helmet and lock?",
              standard: "I'll take the city bike. Does it come with a helmet and a lock?",
              formal: "I will proceed with the city bicycle. Are a helmet and a lock provided with the rental?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "A helmet is included — actually, it's required by law here. The lock is also included. Just make sure to lock it up whenever you park it.",
            textZh: "头盔包含在内——其实这里法律规定必须戴。锁也包含在内。停车的时候一定记得锁好。",
            commonMistake: {
              wrong: "it is the law must wear",
              correct: "it's legally required here",
              explanation: "直接说'法律必须戴'不自然，应说'法律要求戴'或'是法律规定'。",
            },
            keyPhrases: [
              { en: "required by law", zh: "法律要求的" },
              { en: "lock it up", zh: "锁好" },
            ],
            culturalNote: "在很多欧美城市（如澳大利亚全境），骑车必须戴头盔，否则会被罚款。",
            alternativeExpressions: [
              {
                textEn: "Helmet's included, and it's the law here. The lock comes with the bike too.",
                textZh: "头盔包含在内，这里法律要求的。锁也随车的。",
                actionHint: "骑车必须戴头盔",
                frequency: "common",
              },
              {
                textEn: "You get a helmet and a lock. Make sure to always lock it when you park.",
                textZh: "有头盔和锁。停车的时候一定记得锁。",
                actionHint: "每次停车都要锁",
                frequency: "common",
              },
            ],
            casualVersion:
              "Helmet's included – actually, it's the law here. Lock's in too. Just remember to lock it when you park.",
            formalityVariants: {
              casual: "Helmet's included, it's actually the law. Lock too. Just gotta lock it up when you park.",
              standard:
                "A helmet is included — actually, it's required by law here. The lock is also included. Just make sure to lock it up whenever you park it.",
              formal:
                "Yes, a helmet is provided as part of the rental; indeed, its use is mandated by local regulation. A bicycle lock is also included. Please ensure the bicycle is securely locked whenever it is parked.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Where do I return the bike, and by what time?",
            textZh: "好的。在哪里还车，几点之前？",
            casualVersion: "Got it. Where do I drop off the bike, and when?",
            commonMistake: {
              wrong: "Where return the bike, and what time?",
              correct: "Where do I return the bike, and by what time?",
              explanation: "英文问句需要主谓结构和正确介词。“by what time” 表示“在什么时间之前”。",
            },
            formalityVariants: {
              casual: "Okay. Where and when do I bring it back?",
              standard: "Good to know. Where do I return the bike, and by what time?",
              formal:
                "Understood. Could you please provide instructions regarding the return location and the designated return deadline for the bicycle?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Return it right here by 7 PM. If you're late, there's a $5 fee per extra hour. I'll need a credit card on file and a quick signature on this waiver.",
            textZh:
              "在这里还，晚上7点之前。如果超时，每小时多收5美元。我需要一张信用卡做登记，还有在这份免责协议上签个字。",
            keyPhrases: [
              { en: "on file", zh: "登记在案" },
              { en: "waiver", zh: "免责协议/弃权书" },
              { en: "per extra hour", zh: "每多一小时" },
            ],
            culturalNote: "waiver 是租借运动器材时常见的免责声明，签了表示你自行承担骑行风险。",
            alternativeExpressions: [
              {
                textEn:
                  "Bring it back here by 7. After that it's $5 per hour. I'll just need a card and your signature.",
                textZh: "7点前还到这里。超时每小时5块。我需要你的卡和签名。",
                actionHint: "记好还车时间",
                frequency: "common",
              },
              {
                textEn: "Back by 7 PM. Late returns are $5 an hour. Just sign this waiver and you're good.",
                textZh: "下午7点前还。超时每小时5美元。签一下这个免责书就行。",
                actionHint: "签好协议出发",
                frequency: "common",
              },
            ],
            casualVersion:
              "Bring it back here by seven. Late? Five bucks an hour. Need your credit card for our records and a quick sign on this form.",
            commonMistake: {
              wrong: "I need a credit card and sign this paper.",
              correct: "I'll need a credit card on file and a quick signature on this waiver.",
              explanation: "“on file” 表示“备案”，“waiver” 指“免责协议”。“paper” 太笼统。",
            },
            formalityVariants: {
              casual:
                "Just bring it back here by seven. Late's five bucks an hour. Need a credit card and a signature on this waiver.",
              standard:
                "Return it right here by 7 PM. If you're late, there's a $5 fee per extra hour. I'll need a credit card on file and a quick signature on this waiver.",
              formal:
                "The bicycle should be returned to this location no later than 7:00 PM. A late fee of $5 will be assessed for each additional hour. We will require a credit card for security purposes and your signature on the liability waiver.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure. Can you recommend a good bike route around here?",
            textZh: "好的。你能推荐一条附近好骑的路线吗？",
            casualVersion: "Okay. Any good bike routes nearby you'd suggest?",
            commonMistake: {
              wrong: "Can you recommend good bike route nearby?",
              correct: "Can you recommend a good bike route around here?",
              explanation: "“a good bike route” 需要冠词 “a”。用 “around here” 比单独的 “nearby” 更自然。",
            },
            formalityVariants: {
              casual: "Alright. Got any good bike routes close by?",
              standard: "Sure. Can you recommend a good bike route around here?",
              formal: "Certainly. Would you be able to recommend any suitable bicycle routes in this vicinity?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Definitely! The waterfront trail is beautiful — about 10 miles round trip. It's mostly flat and there are bike lanes the whole way. Here's a map. Stay on the marked bike paths and watch out for pedestrians near the pier.",
            textZh:
              "当然！滨水步道很漂亮——往返大约10英里。基本都是平路，全程都有自行车道。给你一份地图。沿着标好的自行车道骑，码头附近注意行人。",
            keyPhrases: [
              { en: "waterfront trail", zh: "滨水步道" },
              { en: "round trip", zh: "往返" },
              { en: "bike lanes", zh: "自行车道" },
              { en: "watch out for", zh: "注意/小心" },
            ],
            alternativeExpressions: [
              {
                textEn: "The waterfront path is awesome — about 10 miles round trip, nice and flat.",
                textZh: "滨水步道超棒——往返大概10英里，又平又好骑。",
                actionHint: "走推荐路线",
                frequency: "common",
              },
              {
                textEn: "I'd recommend the coastal trail. It's scenic and there are bike lanes the whole way.",
                textZh: "推荐海滨步道。风景好，全程都有自行车道。",
                actionHint: "选有自行车道的路线",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure! The waterfront trail's awesome – like, 10 miles round trip. Mostly flat, bike lanes all the way. Here's a map. Stick to the bike paths and watch for folks by the pier.",
            commonMistake: {
              wrong: "Watch out pedestrian near pier.",
              correct: "Watch out for pedestrians near the pier.",
              explanation: "“watch out for” 是固定搭配，表示“小心、提防”。“pedestrians” 需用复数或加冠词。",
            },
            formalityVariants: {
              casual:
                "Oh yeah! Waterfront trail's great – 'bout 10 miles. Flat, bike lanes all through. Here's your map. Keep to the bike paths, and eyes open for people by the pier.",
              standard:
                "Definitely! The waterfront trail is beautiful — about 10 miles round trip. It's mostly flat and there are bike lanes the whole way. Here's a map. Stay on the marked bike paths and watch out for pedestrians near the pier.",
              formal:
                "Absolutely. The waterfront trail offers a picturesque experience, spanning approximately 10 miles for a round trip. It features predominantly flat terrain and dedicated bicycle lanes throughout its entirety. Please find a map here. Kindly adhere to the designated bike paths and exercise caution regarding pedestrians in the vicinity of the pier.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds perfect. One more thing — what should I do if I get a flat tire?",
            textZh: "听起来很棒。再问一下——如果轮胎爆了怎么办？",
            casualVersion: "Sounds good. Oh, one more thing – what if I get a flat?",
            commonMistake: {
              wrong: "What to do if tire flat?",
              correct: "What should I do if I get a flat tire?",
              explanation: "“get a flat tire” 是地道的说法，表示“爆胎”。问句结构需完整。",
            },
            formalityVariants: {
              casual: "Cool. Uh, what if I get a flat?",
              standard: "Sounds perfect. One more thing — what should I do if I get a flat tire?",
              formal:
                "That sounds excellent. I have one further inquiry: what is the procedure should I experience a flat tire?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Just give us a call — the number's on your receipt. We'll either come to you or you can walk it back and we'll swap it for another bike. No extra charge for mechanical issues.",
            textZh: "打我们电话就行——号码在收据上。我们会过去找你，或者你推回来换一辆车。机械故障不额外收费。",
            keyPhrases: [
              { en: "flat tire", zh: "爆胎/瘪胎" },
              { en: "swap it", zh: "换一辆" },
              { en: "no extra charge", zh: "不额外收费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Call us and we'll sort it out. Our number's on the receipt.",
                textZh: "打电话给我们，我们来处理。号码在收据上。",
                actionHint: "保管好收据",
                frequency: "common",
              },
              {
                textEn: "No worries — just give us a ring. We'll swap the bike or come pick you up.",
                textZh: "别担心——打个电话就行。我们换辆车或者去接你。",
                actionHint: "遇到故障别慌打电话",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just call us – number's on the receipt. We'll either come get ya or you can walk it back and we'll swap it. No charge for mechanical stuff.",
            commonMistake: {
              wrong: "We will change another bike for you.",
              correct: "We'll swap it for another bike.",
              explanation: "“swap it for another bike” 是地道的表达，表示“给你换另一辆自行车”。",
            },
            formalityVariants: {
              casual:
                "Just call us – number's on the receipt. We'll come to you or you can just walk it back and we'll switch it out. No extra charge for bike problems.",
              standard:
                "Just give us a call — the number's on your receipt. We'll either come to you or you can walk it back and we'll swap it for another bike. No extra charge for mechanical issues.",
              formal:
                "In the event of a flat tire, kindly contact us using the number provided on your receipt. We will either dispatch assistance to your location or you may return the bicycle to us, at which point we will provide a replacement. There will be no additional charge for mechanical issues.",
            },
          },
        ],
      },

      // --- Flow 2: 共享电动滑板车 ---
      {
        id: "scooter-rental",
        titleZh: "共享电动滑板车",
        titleEn: "Electric Scooter Rental",
        description: "用手机 App 解锁共享电动滑板车，了解使用规则和停放要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I'm trying to use one of these scooters, but the app won't let me unlock it. Can you help?",
            textZh: "不好意思，我想用这些滑板车，但App解锁不了。能帮帮我吗？",
            culturalNote: "在英语中，当App无法解锁共享单车时，更自然的说法是'the app won't unlock them'，而非'the",
            casualVersion: "Hey, tryna use these scooters, but the app won't unlock. Can you help?",
            commonMistake: {
              wrong: "I want to use this scooter, but app cannot unlock.",
              correct: "I'm trying to use this scooter, but the app won't let me unlock it.",
              explanation: "“cannot” 听起来不自然，“won't let me” 更地道，是固定用法。",
            },
            formalityVariants: {
              casual: "Hey, tryna use these scooters, but app won't unlock. Help?",
              standard:
                "Excuse me, I'm trying to use one of these scooters, but the app won't let me unlock it. Can you help?",
              formal:
                "Pardon me, I am attempting to utilize one of these scooters, however, the application is preventing me from unlocking it. Would you be able to provide assistance?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Oh, you might need to add a payment method first. Open the app, go to settings, and add a credit card. Sometimes it also needs your location turned on.",
            textZh: "哦，你可能需要先添加付款方式。打开App，去设置，添加一张信用卡。有时候还需要开启定位。",
            keyPhrases: [
              { en: "payment method", zh: "付款方式" },
              { en: "location turned on", zh: "开启定位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Have you added a payment method? Check your settings — and make sure your GPS is on.",
                textZh: "你添加付款方式了吗？看看设置——还有确保GPS开着。",
                actionHint: "检查App设置",
                frequency: "common",
              },
              {
                textEn: "Sometimes the app needs a card on file first. Try adding your credit card in settings.",
                textZh: "有时候App要先绑卡。试试在设置里加信用卡。",
                actionHint: "先绑定信用卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Oh, might need a payment method first. Open the app, settings, add a card. Sometimes location needs to be on too.",
            commonMistake: {
              wrong: "go settings, your location open",
              correct: "go to settings, your location turned on",
              explanation: "“go to” 更自然，“turned on” 是开启定位的常用说法。",
            },
            formalityVariants: {
              casual:
                "Oh, might need a payment method first. Open the app, settings, add a card. Sometimes location needs to be on too.",
              standard:
                "Oh, you might need to add a payment method first. Open the app, go to settings, and add a credit card. Sometimes it also needs your location turned on.",
              formal:
                "It appears you may first need to register a payment method. Kindly navigate to the settings section within the application and input your credit card details. Additionally, ensuring your location services are activated may also be required.",
            },
          },
          {
            speaker: "you",
            textEn: "Ah, that worked! Thanks. Is there a speed limit on these? I don't want to get in trouble.",
            textZh: "啊，好了！谢谢。这些车有速度限制吗？我不想惹麻烦。",
            casualVersion: "Aha, worked! Cheers. Speed limit on these? Don't wanna get busted.",
            commonMistake: {
              wrong: "Is there speed limit for these? I don't want trouble.",
              correct: "Is there a speed limit on these? I don't want to get in trouble.",
              explanation: "“a speed limit” 需要冠词，“get in trouble” 是固定搭配。",
            },
            formalityVariants: {
              casual: "Aha, worked! Cheers. Speed limit on these? Don't wanna get busted.",
              standard: "Ah, that worked! Thanks. Is there a speed limit on these? I don't want to get in trouble.",
              formal:
                "Excellent, it appears to be functional! My gratitude. May I inquire if there is a speed restriction applicable to these devices? I wish to avoid any potential infractions.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yeah, they're capped at 15 miles per hour. You're supposed to ride in the bike lane, not on the sidewalk. And make sure to park it upright in a designated parking area when you're done — otherwise you might get a fine.",
            textZh:
              "有的，最高限速15英里每小时。应该在自行车道上骑，不能在人行道上。用完之后确保停在指定停车区，把车立好——不然可能会被罚款。",
            keyPhrases: [
              { en: "capped at", zh: "上限为" },
              { en: "bike lane", zh: "自行车道" },
              { en: "sidewalk", zh: "人行道" },
              { en: "designated parking area", zh: "指定停车区" },
              { en: "fine", zh: "罚款" },
            ],
            culturalNote: "在很多城市（如洛杉矶、巴黎），在人行道上骑电动滑板车是违法的。乱停放也会被额外扣费。",
            alternativeExpressions: [
              {
                textEn: "They max out at 15 mph. Ride in the bike lane, not on the sidewalk, and park it properly.",
                textZh: "最快15英里每小时。骑自行车道别骑人行道，停好车。",
                actionHint: "走自行车道",
                frequency: "common",
              },
              {
                textEn: "Yeah, 15 miles per hour tops. And don't ride on the sidewalk — you'll get fined.",
                textZh: "最高15英里时速。别在人行道上骑——会被罚款的。",
                actionHint: "注意走自行车道",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, capped at 15mph. Bike lane, not sidewalk. Park it upright in a designated spot when you're done, otherwise, fine.",
            commonMistake: {
              wrong: "ride on the bike lane, you will get fine",
              correct: "ride in the bike lane, you might get a fine",
              explanation: "“ride in” 通常用于车道，“get a fine” 更口语化且需要冠词“a”。",
            },
            formalityVariants: {
              casual:
                "Yeah, capped at 15mph. Bike lane, not sidewalk. Park it upright in a designated spot when you're done, otherwise, fine.",
              standard:
                "Yeah, they're capped at 15 miles per hour. You're supposed to ride in the bike lane, not on the sidewalk. And make sure to park it upright in a designated parking area when you're done — otherwise you might get a fine.",
              formal:
                "Indeed, their maximum velocity is restricted to 15 miles per hour. It is imperative that you operate them within the designated bicycle lanes, rather than upon pedestrian sidewalks. Furthermore, ensure the scooter is parked upright within a clearly marked parking zone upon completion of your ride, to avoid potential penalties.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. How does the pricing work? Is it per minute?",
            textZh: "明白了。怎么计费？按分钟吗？",
            casualVersion: "Gotcha. How's pricing? Minutely?",
            commonMistake: {
              wrong: "How to calculate money? How is the price?",
              correct: "How does the pricing work? How is it priced?",
              explanation: "“How does the pricing work?” 是询问计费方式最自然的说法。",
            },
            formalityVariants: {
              casual: "Gotcha. How's pricing? Minutely?",
              standard: "Got it. How does the pricing work? Is it per minute?",
              formal:
                "Understood. Could you please elaborate on the pricing structure? Is the billing based on a per-minute increment?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yeah, it's usually $1 to unlock and then about 30 cents per minute. It adds up quick, so it's better for short trips. There might be a day pass if you're planning to ride a lot.",
            textZh:
              "是的，一般解锁1美元，然后每分钟大约30美分。费用涨得挺快的，所以比较适合短途。如果你打算多骑，可能有日卡。",
            keyPhrases: [
              { en: "to unlock", zh: "解锁费" },
              { en: "per minute", zh: "每分钟" },
              { en: "adds up quick", zh: "涨得很快" },
              { en: "day pass", zh: "日卡/一日通票" },
            ],
            alternativeExpressions: [
              {
                textEn: "A dollar to start, then 30 cents a minute. Adds up fast, so keep it short.",
                textZh: "起步1块，然后每分钟3毛。涨得快，尽量短途用。",
                actionHint: "注意控制时长",
                frequency: "common",
              },
              {
                textEn: "It's pay-per-minute. About 30 cents. There's a day pass if you wanna ride a lot.",
                textZh: "按分钟计费。大概3毛一分钟。骑得多可以买日卡。",
                actionHint: "考虑买日卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, usually a buck to unlock, then like 30 cents a minute. Adds up fast, so good for short rides. Day pass might be available if you're riding heaps.",
            culturalNote: "注意美国口语中 “a buck” 表示 “one dollar”。",
            commonMistake: {
              wrong: "It adds quick",
              correct: "It adds up quick",
              explanation: "“adds up” 表示累积增加，更符合语境。",
            },
            formalityVariants: {
              casual:
                "Yeah, usually a buck to unlock, then like 30 cents a minute. Adds up fast, so good for short rides. Day pass might be available if you're riding heaps.",
              standard:
                "Yeah, it's usually $1 to unlock and then about 30 cents per minute. It adds up quick, so it's better for short trips. There might be a day pass if you're planning to ride a lot.",
              formal:
                "Yes, typically there is an initial activation fee of one dollar, followed by approximately thirty cents per minute. The costs can accumulate rather swiftly, making it more suitable for brief journeys. However, a day pass option may be available should you intend to utilize the service extensively.",
            },
          },
          {
            speaker: "you",
            textEn: "A day pass sounds good. And do I need to wear a helmet?",
            textZh: "日卡不错。需要戴头盔吗？",
            casualVersion: "Day pass sounds good. Helmet needed?",
            commonMistake: {
              wrong: "Do I need wear helmet?",
              correct: "Do I need to wear a helmet?",
              explanation: "“need to do something” 是固定句式，“a helmet” 需要冠词。",
            },
            formalityVariants: {
              casual: "Day pass sounds good. Helmet needed?",
              standard: "A day pass sounds good. And do I need to wear a helmet?",
              formal: "A day pass option appears favorable. Furthermore, is it mandatory for me to wear a helmet?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Technically yes, but honestly most people don't. I'd recommend it though — the roads can be busy. Some scooter companies have helmet pickup points where you can borrow one for free.",
            textZh:
              "按规定是要的，但说实话大多数人不戴。不过我建议戴——路上车挺多的。有些滑板车公司有头盔取用点，可以免费借。",
            culturalNote: "在美国，许多城市有头盔法律，但执法力度可能因地而异。商店人员可能会透露实际情况，而非严格遵守规定。但在法律上，仍建议佩戴",
            keyPhrases: [
              { en: "technically", zh: "按规定/严格来说" },
              { en: "helmet pickup points", zh: "头盔取用点" },
            ],
            alternativeExpressions: [
              {
                textEn: "You should, but hardly anyone does. At least ride carefully — it gets busy out there.",
                textZh: "应该戴，但几乎没人戴。至少骑慢点——外面车挺多的。",
                actionHint: "安全起见还是戴上",
                frequency: "common",
              },
              {
                textEn: "Officially yes. Some companies have free helmet stations. I'd wear one if I were you.",
                textZh: "按规定是的。有些公司有免费头盔取用点。我的话会戴的。",
                actionHint: "找附近的头盔取用点",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Technically yeah, but most people don't, honestly. Still, I'd recommend it, roads get busy. Some companies have free helmet pickup points.",
            commonMistake: {
              wrong: "most people not wear it",
              correct: "most people don't",
              explanation: "“don't” 是更自然的否定形式，省略了 “wear one” 更口语。",
            },
            formalityVariants: {
              casual:
                "Technically yeah, but most people don't, honestly. Still, I'd recommend it, roads get busy. Some companies have free helmet pickup points.",
              standard:
                "Technically yes, but honestly most people don't. I'd recommend it though — the roads can be busy. Some scooter companies have helmet pickup points where you can borrow one for free.",
              formal:
                "While it is technically required, it is observed that a significant portion of riders do not comply. Nevertheless, I would strongly advise it, as traffic conditions can be quite congested. Certain scooter providers offer designated helmet collection points where one may procure a helmet free of charge.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks for all the tips! One last question — can two people ride on one scooter?",
            textZh: "谢谢你的提醒！最后一个问题——两个人能骑一辆吗？",
            casualVersion: "Cheers for the tips! Last question — two people on one scooter?",
            commonMistake: {
              wrong: "can two people ride one scooter",
              correct: "can two people ride on one scooter",
              explanation: "“ride on” 是骑行的常用介词搭配。",
            },
            formalityVariants: {
              casual: "Cheers for the tips! Last question — two people on one scooter?",
              standard: "Thanks for all the tips! One last question — can two people ride on one scooter?",
              formal:
                "I appreciate all of your valuable advice! I have one final inquiry — is it permissible for two individuals to ride simultaneously on a single scooter?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "No, definitely not. That's against the rules and it's really dangerous. Each person needs their own scooter. Have fun and ride safe!",
            textZh: "不行，绝对不可以。这违反规定而且很危险。每个人需要自己一辆。玩得开心，骑车注意安全！",
            keyPhrases: [
              { en: "against the rules", zh: "违反规定" },
              { en: "ride safe", zh: "骑车注意安全" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nope, one person per scooter. It's way too dangerous with two people.",
                textZh: "不行，一人一辆。两个人太危险了。",
                actionHint: "各骑各的",
                frequency: "common",
              },
              {
                textEn: "Absolutely not — that's a quick way to get hurt. Get a second scooter.",
                textZh: "绝对不行——那是找受伤的节奏。再租一辆吧。",
                actionHint: "每人单独租一辆",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, absolutely not. Against the rules, super dangerous. Everyone needs their own. Have fun, ride safe!",
            culturalNote: "美国对共享滑板车双人骑行管理非常严格，是明令禁止且被视为危险行为。",
            commonMistake: {
              wrong: "This is dangerous.",
              correct: "it's really dangerous.",
              explanation: "“It's” 更口语化，“really” 强调危险程度。",
            },
            formalityVariants: {
              casual:
                "Nah, absolutely not. Against the rules, super dangerous. Everyone needs their own. Have fun, ride safe!",
              standard:
                "No, definitely not. That's against the rules and it's really dangerous. Each person needs their own scooter. Have fun and ride safe!",
              formal:
                "No, that is absolutely prohibited. Such an action contravenes regulations and poses a significant safety risk. Each individual is required to operate their own scooter. Please enjoy your ride responsibly and safely!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 游轮 ====================
  {
    id: "transport-cruise",
    category: "transport",
    titleZh: "游轮",
    titleEn: "Cruise Ship",
    description: "搭乘游轮出行，包括登船手续、客舱入住、岸上观光安排等",
    otherRole: "游轮工作人员",
    otherRoleIcon: "ship",
    flows: [
      // --- Flow 1: 登船与入住 ---
      {
        id: "boarding",
        titleZh: "登船与入住",
        titleEn: "Boarding & Cabin Check-in",
        description: "到达码头后办理登船手续，找到客舱并熟悉船上设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're here for the Caribbean cruise. Where do we check in?",
            textZh: "你好，我们来坐加勒比海游轮的。在哪里办登船手续？",
            casualVersion: "Hey, we're here for the Caribbean cruise. Where do we check in at?",
            culturalNote: "询问地点时不需要说'请问'，直接说即可",
            commonMistake: {
              wrong: "Where we check in?",
              correct: "Where do we check in?",
              explanation: "疑问句需要助动词do/does",
            },
            formalityVariants: {
              casual: "Hey, Caribbean cruise check-in? Where's that?",
              standard: "Hi, we're here for the Caribbean cruise. Where do we check in?",
              formal:
                "Good morning/afternoon, we are here for the Caribbean cruise. Could you please direct us to the check-in area?",
            },
          },
          {
            speaker: "them",
            role: "港口工作人员",
            textEn:
              "Welcome! Head to Terminal B — that's the building on your right. Have your passport and booking confirmation ready. You'll go through security first, then check-in.",
            textZh: "欢迎！去B航站楼——就是右手边那栋楼。准备好护照和预订确认函。先过安检，然后办理登船。",
            keyPhrases: [
              { en: "terminal", zh: "航站楼" },
              { en: "booking confirmation", zh: "预订确认函" },
              { en: "go through security", zh: "过安检" },
            ],
            alternativeExpressions: [
              {
                textEn: "Head to Terminal B. Have your passport and booking info ready.",
                textZh: "去B航站楼。准备好护照和预订信息。",
                actionHint: "拿好证件去B楼",
                frequency: "common",
              },
              {
                textEn: "Check-in is in that building on the right. You'll go through security first.",
                textZh: "办手续在右边那栋楼。先过安检。",
                actionHint: "先排队过安检",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! Go to Terminal B — it's the building on your right. Get your passport and confirmation ready. Security first, then check-in.",
            commonMistake: {
              wrong: "Go Terminal B",
              correct: "Head to Terminal B",
              explanation: "表示去某地需要介词to",
            },
            formalityVariants: {
              casual:
                "Welcome! Terminal B, building on the right. Passports, confirmations ready. Security, then check-in.",
              standard:
                "Welcome! Head to Terminal B — that's the building on your right. Have your passport and booking confirmation ready. You'll go through security first, then check-in.",
              formal:
                "Welcome aboard! Please proceed to Terminal B, which is located in the building on your right. Kindly have your passport and booking confirmation prepared. You will first go through security, followed by the check-in process.",
            },
          },
          {
            speaker: "you",
            textEn: "Here are our passports and the booking email. We reserved a balcony cabin.",
            textZh: "这是我们的护照和预订邮件。我们订的是阳台舱。",
            casualVersion: "Here's our passports and the booking email. Got a balcony cabin.",
            commonMistake: {
              wrong: "This is our passports",
              correct: "Here are our passports",
              explanation: "复数主语用are",
            },
            formalityVariants: {
              casual: "Here's our stuff. Got a balcony room.",
              standard: "Here are our passports and the booking email. We reserved a balcony cabin.",
              formal:
                "Herein are our passports and the booking confirmation email. We have a reservation for a balcony cabin.",
            },
          },
          {
            speaker: "them",
            role: "登船柜台",
            textEn:
              "Perfect. I can see your reservation — Cabin 7214, Deck 7. Here are your cruise cards. These are your room key, ID, and payment card all in one. Don't lose them!",
            textZh:
              "好的。我查到你们的预订了——7214舱房，7层甲板。这是你们的游轮卡。这张卡集房卡、身份证明和付款卡于一体。别弄丢了！",
            keyPhrases: [
              { en: "balcony cabin", zh: "阳台舱" },
              { en: "deck", zh: "甲板/层" },
              { en: "cruise cards", zh: "游轮卡" },
            ],
            culturalNote: "游轮上几乎所有消费都用 cruise card 结算，船上一般不收现金。下船时统一结账。",
            alternativeExpressions: [
              {
                textEn:
                  "Got your reservation — Cabin 7214 on Deck 7. Here's your cruise card. It's your key, ID, and wallet all in one.",
                textZh: "查到你的预订了——7层7214舱。给你游轮卡。它是房卡、身份证明和钱包三合一。",
                actionHint: "保管好游轮卡",
                frequency: "common",
              },
              {
                textEn:
                  "All set! Your cabin is on Deck 7. Don't lose this card — you'll need it for everything on board.",
                textZh: "搞定了！你的舱房在7层。别丢了这张卡——船上什么都靠它。",
                actionHint: "随身带好游轮卡",
                frequency: "common",
              },
            ],
            casualVersion:
              "Great. Got your reservation — Cabin 7214, Deck 7. Here's your cruise cards. They're your room key, ID, and payment all rolled into one. Don't lose 'em!",
            commonMistake: {
              wrong: "You can't lose them.",
              correct: "Don't lose them!",
              explanation: "表示禁止用Don't...",
            },
            formalityVariants: {
              casual:
                "Got your booking — 7214, Deck 7. Here's your cards. Key, ID, payment, all in one. Don't lose 'em.",
              standard:
                "Perfect. I can see your reservation — Cabin 7214, Deck 7. Here are your cruise cards. These are your room key, ID, and payment card all in one. Don't lose them!",
              formal:
                "Excellent. I have located your reservation for Cabin 7214 on Deck 7. Please accept your cruise cards. These cards serve as your room key, identification, and payment method. Kindly ensure they are not misplaced.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. What time is the safety drill? I heard it's mandatory.",
            textZh: "明白了。安全演习几点？我听说是必须参加的。",
            casualVersion: "Got it. When's the safety drill? Heard it's mandatory.",
            commonMistake: {
              wrong: "What time safety drill?",
              correct: "What time is the safety drill?",
              explanation: "疑问句需要动词",
            },
            formalityVariants: {
              casual: "Okay. Safety drill time? Heard it's a must.",
              standard: "Got it. What time is the safety drill? I heard it's mandatory.",
              formal:
                "Understood. Could you please inform me of the scheduled time for the safety drill? I was informed that it is mandatory.",
            },
          },
          {
            speaker: "them",
            role: "登船柜台",
            textEn:
              "Yes, it's called the muster drill. It's at 4:30 PM today — you'll hear an announcement. Go to your muster station — it's printed on your cruise card. It takes about 20 minutes.",
            textZh:
              "是的，叫集合演习。今天下午4:30——你们会听到广播通知。去你们的集合站——集合站号码印在游轮卡上。大概20分钟。",
            culturalNote: "“Muster drill”称为集合演习，中文里可能不直观。",
            keyPhrases: [
              { en: "muster drill", zh: "集合演习/安全演习" },
              { en: "muster station", zh: "集合站" },
              { en: "announcement", zh: "广播通知" },
            ],
            alternativeExpressions: [
              {
                textEn: "The safety drill is at 4:30. Check your cruise card for your muster station.",
                textZh: "安全演习下午4:30。看游轮卡上的集合站号。",
                actionHint: "4:30准时参加演习",
                frequency: "common",
              },
              {
                textEn:
                  "It's mandatory — 4:30 PM today. You'll hear an announcement. Just go to your assigned station.",
                textZh: "必须参加——今天下午4:30。会有广播。去你指定的集合点就行。",
                actionHint: "别忽略广播通知",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, it's the muster drill. 4:30 PM today — you'll get an announcement. Head to your muster station — it's on your cruise card. 'Bout 20 minutes.",
            commonMistake: {
              wrong: "Spend 20 minutes.",
              correct: "It takes about 20 minutes.",
              explanation: "描述时间花费用it takes",
            },
            formalityVariants: {
              casual:
                "Yep, muster drill. 4:30. Listen for the announcement. Station's on your card. Quick, like 20 mins.",
              standard:
                "Yes, it's called the muster drill. It's at 4:30 PM today — you'll hear an announcement. Go to your muster station — it's printed on your cruise card. It takes about 20 minutes.",
              formal:
                "Indeed, it is referred to as the muster drill. It is scheduled for 4:30 PM this afternoon; an announcement will be made. Please proceed to your designated muster station, the location of which is indicated on your cruise card. The duration of the drill is approximately 20 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "When does dinner service start? And do we need to dress up?",
            textZh: "晚餐几点开始？需要穿正装吗？",
            casualVersion: "When's dinner? Gotta dress up?",
            culturalNote: "美国餐厅着装要求多样，需提前确认",
            commonMistake: {
              wrong: "Dinner start when?",
              correct: "When does dinner service start?",
              explanation: "疑问词在句首，用助动词does",
            },
            formalityVariants: {
              casual: "Dinner time? Dress code?",
              standard: "When does dinner service start? And do we need to dress up?",
              formal:
                "Could you please inform me of the commencement time for dinner service? Additionally, is there a specific dress code required?",
            },
          },
          {
            speaker: "them",
            role: "登船柜台",
            textEn:
              "The main dining room has two seatings — 6 PM and 8:30 PM. You're assigned to the early seating. Tonight is casual, but there's a formal night on Wednesday. You can also eat at the buffet anytime — it's on Deck 12.",
            textZh:
              "主餐厅有两个用餐时段——下午6点和8:30。你们被安排在早场。今晚是休闲装，但周三有正装之夜。你们也可以随时去自助餐厅——在12层甲板。",
            keyPhrases: [
              { en: "seatings", zh: "用餐时段" },
              { en: "formal night", zh: "正装之夜" },
              { en: "buffet", zh: "自助餐" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Dinner's at 6 or 8:30. You're in the early seating. Tonight's casual, formal night is Wednesday.",
                textZh: "晚餐6点或8:30。你们是早场。今晚休闲装，周三是正装之夜。",
                actionHint: "周三准备正装",
                frequency: "common",
              },
              {
                textEn:
                  "You can hit the buffet on Deck 12 anytime, or the dining room at 6 PM. Tonight's casual dress.",
                textZh: "12层自助餐厅随时可以去，主餐厅6点开。今晚穿休闲装就行。",
                actionHint: "随时可以去自助餐厅",
                frequency: "common",
              },
            ],
            casualVersion:
              "Dining room's got two seatings — 6 and 8:30. You're in the early one. Tonight's casual, but Wednesday's formal night. Or just hit the buffet whenever — it's on Deck 12.",
            culturalNote: "游轮晚餐分批次、有固定座位的做法很常见",
            commonMistake: {
              wrong: "You are assigned to early seating.",
              correct: "You're assigned to the early seating.",
              explanation: "特指某一餐期需要加定冠词the",
            },
            formalityVariants: {
              casual:
                "Two dinner times: 6 and 8:30. You got the first one. Casual tonight, formal Wednesday. Buffet's always open on Deck 12.",
              standard:
                "The main dining room has two seatings — 6 PM and 8:30 PM. You're assigned to the early seating. Tonight is casual, but there's a formal night on Wednesday. You can also eat at the buffet anytime — it's on Deck 12.",
              formal:
                "The main dining room offers two seating times: 6:00 PM and 8:30 PM. Your party has been assigned to the earlier seating. This evening's attire is casual, however, a formal night is scheduled for Wednesday. Alternatively, the buffet is available for dining at your convenience on Deck 12.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — is the Wi-Fi included or do we need to buy a package?",
            textZh: "再问一下——Wi-Fi 包含在内吗，还是需要另买套餐？",
            casualVersion: "Quick question — is Wi-Fi included or do we gotta buy a package?",
            culturalNote: "游轮Wi-Fi一般都收费，且价格不菲",
            commonMistake: {
              wrong: "Wi-Fi included?",
              correct: "Is the Wi-Fi included?",
              explanation: "疑问句需要动词be",
            },
            formalityVariants: {
              casual: "Last thing — Wi-Fi free or gotta pay?",
              standard: "One more question — is the Wi-Fi included or do we need to buy a package?",
              formal:
                "I have one final query: is the Wi-Fi service complimentary, or is it necessary for us to purchase a package?",
            },
          },
          {
            speaker: "them",
            role: "登船柜台",
            textEn:
              "Wi-Fi is extra, unfortunately. There's a basic plan for $15 a day — it handles email and messaging. The premium plan is $25 and supports video calls and streaming. You can buy it at the internet café on Deck 5 or through the cruise app.",
            textZh:
              "Wi-Fi 要另付费的。基础套餐每天15美元——可以收发邮件和消息。高级套餐25美元，支持视频通话和看视频。你可以在5层的网络咖啡厅或者通过游轮App购买。",
            culturalNote: "邮轮Wi-Fi通常昂贵且不包含，与陆上不同。",
            keyPhrases: [
              { en: "extra", zh: "另外收费的" },
              { en: "basic plan", zh: "基础套餐" },
              { en: "premium plan", zh: "高级套餐" },
              { en: "streaming", zh: "看视频/流媒体" },
            ],
            alternativeExpressions: [
              {
                textEn: "Wi-Fi costs extra — $15 a day for basic, $25 for premium.",
                textZh: "Wi-Fi要另外付费——基础版每天15，高级版25。",
                actionHint: "选择适合的套餐",
                frequency: "common",
              },
              {
                textEn: "It's not included, unfortunately. You can buy a package at the internet café on Deck 5.",
                textZh: "很遗憾不包含在内。可以在5层网吧买套餐。",
                actionHint: "去5层网吧购买",
                frequency: "common",
              },
            ],
            casualVersion:
              "Wi-Fi's extra, unfortunately. Basic plan's 15 bucks a day — good for email and texts. Premium's 25, that's for video calls and streaming. Get it at the internet café on Deck 5 or the app.",
            commonMistake: {
              wrong: "Wi-Fi is not included.",
              correct: "Wi-Fi is extra, unfortunately.",
              explanation: "用'extra'或'unfortunately'语气更委婉",
            },
            formalityVariants: {
              casual:
                "Nope, Wi-Fi costs. 15 for basic (emails/texts), 25 for premium (video/streaming). Buy it at the café (Deck 5) or the app.",
              standard:
                "Wi-Fi is extra, unfortunately. There's a basic plan for $15 a day — it handles email and messaging. The premium plan is $25 and supports video calls and streaming. You can buy it at the internet café on Deck 5 or through the cruise app.",
              formal:
                "Regrettably, Wi-Fi service is an additional charge. A basic plan is available for $15 per day, which accommodates email and messaging. The premium plan, priced at $25, supports video calls and streaming. You may purchase access at the internet café on Deck 5 or via the official cruise application.",
            },
          },
        ],
      },

      // --- Flow 2: 岸上观光 ---
      {
        id: "shore-excursion",
        titleZh: "岸上观光",
        titleEn: "Shore Excursion",
        description: "游轮靠岸后参加岸上观光活动，了解集合时间和注意事项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. We signed up for the snorkeling excursion today. Where do we meet?",
            textZh: "早上好。我们报名了今天的浮潜岸上游。在哪里集合？",
            casualVersion: "Morning. Signed up for the snorkeling excursion. Where's the meetup?",
            commonMistake: {
              wrong: "We signed up the snorkeling excursion.",
              correct: "We signed up for the snorkeling excursion.",
              explanation: "动词 sign up 后面需要加介词 for，表示报名参加某个活动。",
            },
            formalityVariants: {
              casual: "Morning. Signed up for the snorkeling. Where do we meet?",
              standard: "Good morning. We signed up for the snorkeling excursion today. Where do we meet?",
              formal:
                "Good morning. We have registered for today's snorkeling excursion. Could you please advise on the designated meeting point?",
            },
          },
          {
            speaker: "them",
            role: "岸上游协调员",
            textEn:
              "Good morning! The snorkeling group meets at the gangway exit on Deck 3 at 9 AM sharp. Make sure to bring your cruise card — you'll need to scan it when you leave and return to the ship.",
            textZh: "早上好！浮潜团在3层甲板舷梯出口集合，早上9点整。记得带游轮卡——下船和回船都要扫卡。",
            culturalNote: "邮轮卡是上下船及船上消费的唯一凭证，非常重要。",
            keyPhrases: [
              { en: "gangway", zh: "舷梯" },
              { en: "sharp", zh: "整（准时）" },
              { en: "scan", zh: "扫卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Morning! Snorkeling group gathers at Deck 3 gangway at 9. Don't forget your cruise card — you need it to get on and off.",
                textZh: "早上好！浮潜团9点在3层舷梯集合。别忘了带游轮卡——上下船都要用。",
                actionHint: "记住集合地点和时间",
                frequency: "common",
              },
              {
                textEn:
                  "Hey there! Your group meets at the Deck 3 exit, 9 AM. Bring your ship card — they scan it at the gangway.",
                textZh: "嘿！你们的团在3层出口集合，早上9点。带好船卡——在舷梯那里要扫。",
                actionHint: "带好游轮卡",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Morning! Snorkeling group's at the Deck 3 gangway exit, 9 AM sharp. Don't forget your cruise card — gotta scan it getting on and off.",
            commonMistake: {
              wrong: "You need scan it when you leave and return ship.",
              correct: "You'll need to scan it when you leave and return to the ship.",
              explanation: "scan 后面通常需要 to，动词 return 后面去某地需要 to the ship。",
            },
            formalityVariants: {
              casual:
                "Morning! Snorkeling group's at the Deck 3 gangway exit, 9 AM sharp. Bring your cruise card — gotta scan it on and off.",
              standard:
                "Good morning! The snorkeling group meets at the gangway exit on Deck 3 at 9 AM sharp. Make sure to bring your cruise card — you'll need to scan it when you leave and return to the ship.",
              formal:
                "Good morning. The designated meeting point for the snorkeling group is the gangway exit on Deck 3, promptly at 9 AM. Please ensure you have your cruise card, as it is required for scanning upon both disembarkation and re-embarkation.",
            },
          },
          {
            speaker: "you",
            textEn: "What should we bring? Do we need our own snorkeling gear?",
            textZh: "我们要带什么？需要自带浮潜装备吗？",
            casualVersion: "What should we bring? Do we need our own snorkel gear?",
            commonMistake: {
              wrong: "Need own snorkeling gear?",
              correct: "Do we need our own snorkeling gear?",
              explanation: "英文疑问句通常需要助动词和主语，own 前面通常用物主代词 our。",
            },
            formalityVariants: {
              casual: "What should we bring? Own gear needed?",
              standard: "What should we bring? Do we need our own snorkeling gear?",
              formal:
                "Could you please advise what items we should bring? Are we required to provide our own snorkeling equipment?",
            },
          },
          {
            speaker: "them",
            role: "岸上游协调员",
            textEn:
              "Snorkeling equipment is provided — mask, snorkel, and fins. Just bring sunscreen, a towel, and some cash for tips or souvenirs. Waterproof sunscreen, please — to protect the reef.",
            textZh:
              "浮潜装备提供——面镜、呼吸管和脚蹼。带上防晒霜、毛巾和一些现金用于小费或买纪念品。请用防水防晒霜——保护珊瑚礁。",
            keyPhrases: [
              { en: "mask, snorkel, and fins", zh: "面镜、呼吸管和脚蹼" },
              { en: "waterproof sunscreen", zh: "防水防晒霜" },
              { en: "reef", zh: "珊瑚礁" },
            ],
            culturalNote: "很多海洋保护区要求使用 reef-safe sunscreen（珊瑚礁安全防晒霜），不含对珊瑚有害的化学成分。",
            alternativeExpressions: [
              {
                textEn:
                  "We provide all the gear — mask, snorkel, fins. Just bring sunblock, a towel, and a bit of cash. And please use reef-safe sunscreen.",
                textZh: "装备我们全提供——面镜、呼吸管、脚蹼。带好防晒霜、毛巾和一点现金就行。请用珊瑚礁安全防晒霜。",
                actionHint: "注意用环保防晒霜",
                frequency: "common",
              },
              {
                textEn:
                  "Everything's included — snorkel gear, the works. You just need sunscreen, towel, and some spending money. Oh, and make sure the sunscreen is reef-friendly.",
                textZh:
                  "全包的——浮潜装备什么都有。你只需要带防晒霜、毛巾和一些零花钱。对了，确保防晒霜是对珊瑚礁友好的。",
                actionHint: "准备好随身物品",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Snorkel gear's provided — mask, snorkel, fins. Just bring sunscreen, towel, cash for tips/souvenirs. Waterproof sunscreen, please — helps the reef.",
            commonMistake: {
              wrong: "Snorkeling equipment is providing.",
              correct: "Snorkeling equipment is provided.",
              explanation: "装备是被提供的，所以要用被动语态 is provided，而不是现在进行时 is providing。",
            },
            formalityVariants: {
              casual:
                "Snorkel gear's provided (mask, snorkel, fins). Just bring sunscreen, a towel, cash for tips/souvenirs. Waterproof sunscreen, for the reef.",
              standard:
                "Snorkeling equipment is provided — mask, snorkel, and fins. Just bring sunscreen, a towel, and some cash for tips or souvenirs. Waterproof sunscreen, please — to protect the reef.",
              formal:
                "Snorkeling equipment, including mask, snorkel, and fins, will be provided. We recommend bringing sunscreen, a towel, and a modest amount of cash for gratuities or souvenirs. Kindly ensure your sunscreen is waterproof to minimize impact on the coral reef environment.",
            },
          },
          {
            speaker: "you",
            textEn: "What time do we need to be back on the ship?",
            textZh: "我们几点必须回到船上？",
            casualVersion: "What time we gotta be back on the ship?",
            commonMistake: {
              wrong: "What time we need back to ship?",
              correct: "What time do we need to be back on the ship?",
              explanation: "疑问句通常需要助动词 do，need 后面跟动词需要加 to，回到船上是 back on the ship。",
            },
            formalityVariants: {
              casual: "What time we gotta be back on the ship?",
              standard: "What time do we need to be back on the ship?",
              formal: "Could you please confirm the required re-boarding time for the ship?",
            },
          },
          {
            speaker: "them",
            role: "岸上游协调员",
            textEn:
              "The ship departs at 5 PM, but you must be back on board by 4:30. If you miss the ship, you'll have to arrange your own transportation to the next port at your own expense. The excursion gets you back around 2 PM, so you'll have time to explore on your own afterward.",
            textZh:
              "船下午5点启航，但你必须4:30前回到船上。如果错过了船，需要自费安排交通到下一个港口。岸上游大约下午2点回来，之后你还有时间自由活动。",
            culturalNote: "邮轮不会等你，错过了船后果自负。",
            keyPhrases: [
              { en: "on board", zh: "上船/在船上" },
              { en: "miss the ship", zh: "错过船" },
              { en: "at your own expense", zh: "自费" },
              { en: "next port", zh: "下一个港口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ship leaves at 5, but you need to be back by 4:30. The excursion wraps up around 2, so you'll have free time after.",
                textZh: "船5点开，但你必须4:30前回来。岸上游大约2点结束，之后你有自由时间。",
                actionHint: "记住回船截止时间",
                frequency: "common",
              },
              {
                textEn:
                  "All aboard by 4:30 — sailing's at 5. If you're late, you'll have to catch up to us at the next port on your own dime.",
                textZh: "4:30前必须上船——5点开船。迟到的话你得自费赶到下一个港口。",
                actionHint: "千万不要迟到",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Ship leaves at 5 PM, but gotta be back by 4:30. Miss it, and you're on your own to the next port. Excursion gets you back around 2, so you'll have time to explore.",
            commonMistake: {
              wrong: "If miss the ship, you have to arrange own transportation.",
              correct: "If you miss the ship, you'll have to arrange your own transportation.",
              explanation: "条件句中 If 后面需要主语 you。own 前面需要物主代词 your。",
            },
            formalityVariants: {
              casual:
                "Ship leaves at 5, but be back by 4:30. Miss it, you're on your own for the next port. Tour's back around 2, so you'll have extra time.",
              standard:
                "The ship departs at 5 PM, but you must be back on board by 4:30. If you miss the ship, you'll have to arrange your own transportation to the next port at your own expense. The excursion gets you back around 2 PM, so you'll have time to explore on your own afterward.",
              formal:
                "The vessel is scheduled to depart at 5 PM, therefore, re-boarding is mandatory by 4:30 PM. Please be advised that passengers who fail to re-board by this time will be responsible for their own transportation arrangements to the subsequent port of call. The excursion is expected to conclude around 2 PM, allowing ample time for independent exploration thereafter.",
            },
          },
          {
            speaker: "you",
            textEn: "Understood. Is it safe to use local taxis on the island?",
            textZh: "明白了。在岛上打当地出租车安全吗？",
            casualVersion: "Got it. Local taxis safe on the island?",
            commonMistake: {
              wrong: "Is it safe use local taxis?",
              correct: "Is it safe to use local taxis on the island?",
              explanation: "safe 后面跟动词需要加 to，并注意补全介词 on the island。",
            },
            formalityVariants: {
              casual: "Got it. Local taxis safe?",
              standard: "Understood. Is it safe to use local taxis on the island?",
              formal:
                "Thank you for the clarification. Could you please advise on the safety of utilizing local taxi services on the island?",
            },
          },
          {
            speaker: "them",
            role: "岸上游协调员",
            textEn:
              "Generally yes, but negotiate the fare before you get in — meters are rare here. You can also use the shuttle bus the cruise line provides — it runs between the port and the main town every 30 minutes. It's free for passengers.",
            textZh:
              "一般来说安全，但上车前先谈好价——这里很少有打表的。你也可以用游轮公司提供的接驳巴士——在码头和镇中心之间每30分钟一班。乘客免费。",
            keyPhrases: [
              { en: "negotiate the fare", zh: "谈好价格" },
              { en: "shuttle bus", zh: "接驳巴士" },
              { en: "runs between", zh: "来回运行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, taxis are fine, just agree on a price first. Or you can take our free shuttle — it goes to town every half hour.",
                textZh: "可以，出租车没问题，就是先谈好价。或者坐我们的免费接驳车——每半小时一趟去镇上。",
                actionHint: "先谈好价再上车",
                frequency: "common",
              },
              {
                textEn:
                  "Local cabs are safe enough. Just make sure you settle the fare before hopping in — no meters around here. There's also a complimentary shuttle to the main area.",
                textZh: "当地出租车够安全的。就是上车前先谈好价——这里没有打表的。还有免费接驳车去主要地方。",
                actionHint: "可选接驳巴士更省心",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, usually, but haggle the fare before you hop in — no meters really. Or just take the free cruise shuttle; runs every 30 mins between the port and town.",
            culturalNote:
              "中国游客常习惯出租车按表计费，而非讲价，需注意很多国家打车需提前议价。同时，美国强调安全，所以出租车相关问题很常见。",
            commonMistake: {
              wrong: "negotiate fare before get in.",
              correct: "negotiate the fare before you get in.",
              explanation: "fare 前面需要定冠词 the，get in 前面需要主语 you。",
            },
            formalityVariants: {
              casual:
                "Yeah, usually. Just haggle the fare before you get in — meters aren't common. Or, take the free cruise shuttle, runs every 30 mins to town.",
              standard:
                "Generally yes, but negotiate the fare before you get in — meters are rare here. You can also use the shuttle bus the cruise line provides — it runs between the port and the main town every 30 minutes. It's free for passengers.",
              formal:
                "Generally, local taxis are safe, however, it is advisable to negotiate the fare prior to commencing your journey, as metered services are uncommon in this region. Alternatively, the cruise line offers a complimentary shuttle bus service operating between the port and the main town every 30 minutes for all passengers.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. Can I use US dollars on the island, or do I need local currency?",
            textZh: "好的。岛上可以用美元吗，还是需要当地货币？",
            casualVersion: "Cool. Can I use USD on the island, or need local cash?",
            commonMistake: {
              wrong: "Can I use US dollars on island, or need local currency?",
              correct: "Can I use US dollars on the island, or do I need local currency?",
              explanation: "on island 前面需要定冠词 the。第二个问句需要助动词 do 和主语 I。",
            },
            formalityVariants: {
              casual: "Cool. USD okay, or need local cash?",
              standard: "Great. Can I use US dollars on the island, or do I need local currency?",
              formal:
                "Excellent. May I inquire if US dollars are accepted on the island, or is it necessary to acquire local currency?",
            },
          },
          {
            speaker: "them",
            role: "岸上游协调员",
            textEn:
              "Most shops and restaurants accept US dollars, but you'll get change in local currency. Credit cards are accepted in bigger stores. For small vendors or street food, cash is better — small bills are ideal.",
            textZh:
              "大部分商店和餐厅接受美元，但找零会给当地货币。大店铺接受信用卡。小商贩或街头小吃最好用现金——最好是小面额的。",
            culturalNote: "许多旅游区美元通用，但找零常是当地货币。",
            keyPhrases: [
              { en: "change in local currency", zh: "用当地货币找零" },
              { en: "small bills", zh: "小面额纸币" },
              { en: "small vendors", zh: "小商贩" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Dollars work in most places, but your change will be in local money. For street stalls, bring small bills — easier that way.",
                textZh: "大部分地方可以用美元，但找零是当地货币。街头小摊带小面额纸币——比较方便。",
                actionHint: "准备好零钱",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, US dollars are widely accepted. Bigger shops take cards too. For market vendors though, cash is king — and the smaller the bills, the better.",
                textZh: "美元很多地方都收。大店也刷卡。不过市场小贩那里现金最好使——面额越小越好。",
                actionHint: "大店刷卡小摊用现金",
                frequency: "common",
              },
            ],
            casualVersion:
              "Most places take USD, but you'll get local change. Bigger stores take cards. For small vendors/street food, cash is best — small bills are ideal.",
            commonMistake: {
              wrong: "You will get change local currency.",
              correct: "You'll get change in local currency.",
              explanation: "得到当地货币找零需要介词 in。",
            },
            formalityVariants: {
              casual:
                "Most places take USD, but change is local. Cards for bigger stores. For small vendors/street food, cash is better — small bills.",
              standard:
                "Most shops and restaurants accept US dollars, but you'll get change in local currency. Credit cards are accepted in bigger stores. For small vendors or street food, cash is better — small bills are ideal.",
              formal:
                "The majority of shops and restaurants will accept US dollars; however, please be aware that any change provided will typically be in the local currency. Credit cards are generally accepted at larger establishments. For smaller vendors or street food, cash is preferable, with smaller denominations being most convenient.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 自驾游 ====================
  {
    id: "transport-roadtrip",
    category: "transport",
    titleZh: "自驾游",
    titleEn: "Road Trip",
    description: "在国外自驾旅行，包括加油、休息站、走风景公路和处理路上突发情况",
    otherRole: "加油站员工/路人",
    otherRoleIcon: "map",
    flows: [
      // --- Flow 1: 加油与休息站 ---
      {
        id: "gas-station",
        titleZh: "加油与休息站",
        titleEn: "Gas Station & Rest Stops",
        description: "在自驾途中找加油站加油、使用休息站设施",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, which pump is regular unleaded?",
            textZh: "你好，哪个是普通无铅汽油的油枪？",
            culturalNote:
              "在美国，加油站通常有三种油：Regular（普通）、Plus/Mid-grade（中等）、Premium（高级）。租的车一般加 Regular 就行。",
            casualVersion: "Hey, which one's regular unleaded?",
            commonMistake: {
              wrong: "Which pump is normal gas?",
              correct: "Which pump is regular unleaded?",
              explanation: '在美国指普通汽油时通常用 "regular" 或 "unleaded"，而不是 "normal"。',
            },
            formalityVariants: {
              casual: "Hey, which one's regular?",
              standard: "Hi, which pump is regular unleaded?",
              formal: "Excuse me, could you please tell me which pump dispenses regular unleaded gasoline?",
            },
          },
          {
            speaker: "them",
            role: "加油站员工",
            textEn:
              "Any pump works — just select the grade you want on the screen. Regular is the one on the left, usually the green handle. Are you paying cash or card?",
            textZh: "任何油枪都行——在屏幕上选你要的等级就行。普通汽油是左边那个，通常是绿色把手。现金还是刷卡？",
            keyPhrases: [
              { en: "pump", zh: "油枪/加油机" },
              { en: "grade", zh: "等级/标号" },
              { en: "regular unleaded", zh: "普通无铅汽油" },
            ],
            variations: [
              {
                textEn: "Pull up to any pump. Select regular on the touchscreen. Credit or debit?",
                textZh: "开到任何一个加油机前。在触摸屏上选普通。信用卡还是借记卡？",
              },
            ],
            alternativeExpressions: [
              {
                textEn: "Just pick any pump and choose regular on the screen — green button. Paying by card or cash?",
                textZh: "随便选个油枪，屏幕上选普通——绿色按钮。刷卡还是现金？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
              {
                textEn:
                  "They're all the same pump — hit regular once you're there. It's the cheapest option. Cash or card today?",
                textZh: "油枪都一样的——到了选普通就行。最便宜的那个。今天现金还是刷卡？",
                actionHint: "普通汽油最经济",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Any pump's fine. Just pick your grade on the screen. Regular's on the left, usually green. Cash or card?",
            culturalNote: '美国加油先在屏幕选油品，而非先选油枪号。油品等级用"grade"表示。',
            commonMistake: {
              wrong: "Just select the type you want.",
              correct: "Just select the grade you want.",
              explanation: '"grade" 指汽油标号，"type" 范围太广不准确。',
            },
            formalityVariants: {
              casual:
                "Any pump's fine. Just pick your grade on the screen. Regular's on the left, usually green. Cash or card?",
              standard:
                "Any pump works — just select the grade you want on the screen. Regular is the one on the left, usually the green handle. Are you paying cash or card?",
              formal:
                "Any available pump will suffice. Please select your desired fuel grade on the screen. The regular unleaded option is typically located on the left and is often indicated by a green handle. Will you be paying with cash or a credit/debit card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card. Do I pay at the pump or inside?",
            textZh: "刷卡。在油枪那里付还是进去付？",
            casualVersion: "Card. Pay at the pump or inside?",
            culturalNote: "美国加油站普遍可在油泵处直接刷卡支付，但外国卡有时会遇到兼容性问题。",
            commonMistake: {
              wrong: "Pay on the pump?",
              correct: "Pay at the pump?",
              explanation: '"at the pump" 是固定搭配，指在加油机处支付。',
            },
            formalityVariants: {
              casual: "Card. Pay at the pump or inside?",
              standard: "Card. Do I pay at the pump or inside?",
              formal:
                "I'll be paying with a card. May I inquire if payment is processed directly at the pump or inside the establishment?",
            },
          },
          {
            speaker: "them",
            role: "加油站员工",
            textEn:
              "You can pay at the pump — just insert or tap your card, then select your fuel grade and start pumping. If your foreign card doesn't work at the pump, come inside and I can run it here.",
            textZh:
              "在油枪那里就能付——插卡或感应，然后选油品等级开始加油。如果你的外国卡在油枪那里刷不了，进来我这里刷。",
            commonMistake: {
              wrong: "If your foreign card cannot work...",
              correct: "If your foreign card doesn't work...",
              explanation: "英文中'can't'多指能力，'doesn't work'更自然指机器故障。",
            },
            keyPhrases: [
              { en: "pay at the pump", zh: "在油枪处付款" },
              { en: "start pumping", zh: "开始加油" },
              { en: "run it", zh: "刷卡（非正式说法）" },
            ],
            culturalNote:
              "美国加油站基本都是自助加油。有些外国信用卡在油枪处刷不了（因为要输 ZIP code），进去找店员刷就行。",
            alternativeExpressions: [
              {
                textEn:
                  "Swipe or tap your card at the pump. If it doesn't go through, just come inside and I'll ring it up.",
                textZh: "在油枪那里刷卡或感应。如果刷不了，进来我这里帮你刷。",
                actionHint: "外卡刷不了就进店",
                frequency: "common",
              },
              {
                textEn:
                  "Right at the pump — insert your card, pick your grade, and fill up. Some foreign cards don't work outside though, so come in if you have trouble.",
                textZh: "直接在油枪那里——插卡、选标号、加油。不过有些外国卡在外面刷不了，有问题就进来。",
                actionHint: "先试油枪再进店",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You can pay at the pump. Just insert or tap your card, pick your fuel grade, and start pumping. If your foreign card acts up, just come inside and I'll run it.",
            formalityVariants: {
              casual:
                "You can pay at the pump. Just insert or tap your card, pick your fuel grade, and start pumping. If your foreign card acts up, just come inside and I'll run it.",
              standard:
                "You can pay at the pump — just insert or tap your card, then select your fuel grade and start pumping. If your foreign card doesn't work at the pump, come inside and I can run it here.",
              formal:
                "You have the option to pay directly at the pump by inserting or tapping your card, then selecting your desired fuel grade to commence pumping. Should your international credit card encounter any issues at the pump, please feel free to come inside, and I will be able to process the transaction for you.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thanks. Also, are there any rest stops with bathrooms coming up on the highway? We've been driving for two hours.",
            textZh: "谢谢。另外，前面高速上有带卫生间的休息站吗？我们已经开了两个小时了。",
            casualVersion:
              "Thanks. Any rest stops with restrooms coming up on the highway? Been driving for two hours.",
            culturalNote: "在美国，公共场所用“restroom”或“bathroom”更礼貌自然，避免直接说“toilet”。",
            commonMistake: {
              wrong: "Are there any rest stops with toilets?",
              correct: "Are there any rest stops with bathrooms/restrooms?",
              explanation: '"toilet" 在美国不如 "bathroom" 或 "restroom" 礼貌和常用，尤其是在公共场所。',
            },
            formalityVariants: {
              casual: "Thanks. Any rest stops with restrooms coming up on the highway? Been driving for two hours.",
              standard:
                "Thanks. Also, are there any rest stops with bathrooms coming up on the highway? We've been driving for two hours.",
              formal:
                "Thank you. Additionally, could you advise if there are any upcoming rest stops along the highway that include restroom facilities? We have been driving for approximately two hours.",
            },
          },
          {
            speaker: "them",
            role: "加油站员工",
            textEn:
              "There's a rest area about 30 miles up on I-95. It has restrooms, a picnic area, and vending machines. Or if you want food, there's a travel plaza with fast food about 45 miles out.",
            textZh:
              "I-95前方大约30英里有一个休息区。有卫生间、野餐区和自动贩卖机。如果想吃东西，大约45英里处有个服务广场，有快餐。",
            commonMistake: {
              wrong: "It has WC, picnic area...",
              correct: "It has restrooms, picnic areas...",
              explanation: "'WC'在美式英语中非常不常用，应使用'restroom'或'bathroom'。",
            },
            keyPhrases: [
              { en: "rest area", zh: "休息区" },
              { en: "travel plaza", zh: "服务广场" },
              { en: "vending machines", zh: "自动贩卖机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a rest stop about 30 miles ahead with bathrooms and vending machines. If you want actual food, there's a service plaza a bit further.",
                textZh: "前方大约30英里有个休息站，有卫生间和自动贩卖机。想吃正经东西的话，再远一点有服务广场。",
                actionHint: "选择休息站或服务广场",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, about 30 miles up the road on I-95 you'll hit a rest area. Restrooms, picnic tables, that sort of thing. Or 45 miles out there's a plaza with a few fast-food joints.",
                textZh: "I-95前方大约30英里有个休息区。卫生间、野餐桌那些。再走45英里有个广场，有几家快餐店。",
                actionHint: "根据需求选地方停",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "There's a rest area 'bout 30 miles up on I-95. Has restrooms, picnic area, vending machines. Or if you want food, there's a travel plaza with fast food 'bout 45 miles out.",
            culturalNote: "美国高速公路的“rest area”通常只提供基本设施，“travel plaza”则有更多餐饮等服务。",
            formalityVariants: {
              casual:
                "There's a rest area 'bout 30 miles up on I-95. Has restrooms, picnic area, vending machines. Or if you want food, there's a travel plaza with fast food 'bout 45 miles out.",
              standard:
                "There's a rest area about 30 miles up on I-95. It has restrooms, a picnic area, and vending machines. Or if you want food, there's a travel plaza with fast food about 45 miles out.",
              formal:
                "Approximately 30 miles ahead on I-95, there is a designated rest area equipped with restrooms, a picnic area, and vending machines. Alternatively, for dining options, a travel plaza featuring fast food establishments is situated around 45 miles further.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — we're trying to get to the coastal scenic route. Is this the right way?",
            textZh: "再问一下——我们想走海岸风景公路。这条路对吗？",
            culturalNote: "美国很多州都有标志性的“Scenic Highway”或“Scenic Byway”，通常风景优美但车速较慢。",
            casualVersion: "One more thing — trying to get to the coastal scenic route. Is this the right way?",
            commonMistake: {
              wrong: "Is this way right?",
              correct: "Is this the right way?",
              explanation: '"the right way" 是常用短语，更自然。',
            },
            formalityVariants: {
              casual: "One more thing — trying to get to the coastal scenic route. Is this the right way?",
              standard: "One more thing — we're trying to get to the coastal scenic route. Is this the right way?",
              formal:
                "Just one additional inquiry — we are attempting to reach the coastal scenic route. Is this indeed the correct path?",
            },
          },
          {
            speaker: "them",
            role: "加油站员工",
            textEn:
              "You're close. Stay on this road for about 10 miles, then take Exit 23 and follow signs for Route 1 South — that's the scenic coastal highway. It's a beautiful drive, but it'll add about an hour compared to the interstate.",
            textZh:
              "快到了。沿这条路开大约10英里，然后走23号出口，跟着1号公路南的标志走——那就是海岸风景公路。很漂亮，但比走高速多大约一个小时。",
            commonMistake: {
              wrong: "You are near.",
              correct: "You're almost there.",
              explanation: "'almost there'是地道表达，指快到达目的地，更自然。",
            },
            keyPhrases: [
              { en: "exit", zh: "出口" },
              { en: "scenic coastal highway", zh: "海岸风景公路" },
              { en: "interstate", zh: "州际高速公路" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Almost there. Keep going about 10 miles, get off at Exit 23, and follow the signs for Route 1 South. Beautiful drive, but adds about an hour.",
                textZh: "快到了。再开10英里，在23号出口下，跟着1号公路南的标志走。风景很美，但多花大约一小时。",
                actionHint: "注意出口编号",
                frequency: "common",
              },
              {
                textEn:
                  "You're on the right track. Take Exit 23 up ahead and hop on Route 1 heading south — that's your scenic route. Just know it's slower than the freeway.",
                textZh: "方向对的。前面23号出口下去，上1号公路往南——那就是风景路线。不过比高速慢。",
                actionHint: "风景路线时间更长",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "You're close. Stay on this road 'bout 10 miles, then take Exit 23, follow signs for Route 1 South — that's the scenic coastal highway. Pretty drive, but it'll add 'bout an hour compared to the interstate.",
            culturalNote: "美国州际公路(interstate)通常更快，但风景公路(scenic highway)可能更美。",
            formalityVariants: {
              casual:
                "You're close. Stay on this road 'bout 10 miles, then take Exit 23, follow signs for Route 1 South — that's the scenic coastal highway. Pretty drive, but it'll add 'bout an hour compared to the interstate.",
              standard:
                "You're close. Stay on this road for about 10 miles, then take Exit 23 and follow signs for Route 1 South — that's the scenic coastal highway. It's a beautiful drive, but it'll add about an hour compared to the interstate.",
              formal:
                "You are in close proximity. Please continue on this road for approximately 10 miles, then proceed to take Exit 23 and follow the signage for Route 1 South, which is indeed the scenic coastal highway. While it offers a very picturesque journey, please be aware it will extend your travel time by roughly one hour compared to utilizing the interstate.",
            },
          },
          {
            speaker: "you",
            textEn: "That's fine — we're not in a rush. Thanks for the directions!",
            textZh: "没关系——我们不赶时间。谢谢指路！",
            casualVersion: "That's fine — not in a rush. Thanks for the directions!",
            commonMistake: {
              wrong: "Thanks for your directions!",
              correct: "Thanks for the directions!",
              explanation: '"the directions" 更自然，"your" 稍显生硬。',
            },
            formalityVariants: {
              casual: "That's fine — not in a rush. Thanks for the directions!",
              standard: "That's fine — we're not in a rush. Thanks for the directions!",
              formal:
                "That is perfectly acceptable — we are not constrained by time. Thank you for providing the directions!",
            },
          },
        ],
      },

      // --- Flow 2: 路上遇到问题 ---
      {
        id: "road-trouble",
        titleZh: "路上遇到问题",
        titleEn: "Road Trouble",
        description: "自驾途中遇到迷路、车辆故障或需要求助的情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think I'm lost. My GPS lost signal and I'm not sure where I am.",
            textZh: "打扰一下，我好像迷路了。GPS没信号了，我不确定自己在哪。",
            culturalNote: "在寻求帮助时，直接说明问题而非过度客套是美国常见的交流方式。",
            casualVersion: "Hey, uh, think I'm lost. GPS cut out, so not sure where I'm at.",
            commonMistake: {
              wrong: "Excuse me, I lost. GPS no signal, I not sure where I am.",
              correct: "Excuse me, I think I'm lost. My GPS lost signal and I'm not sure where I am.",
              explanation: "中文思维容易省略主语和系动词，以及“没信号”直译为no signal。",
            },
            formalityVariants: {
              casual: "Hey, uh, think I'm lost. GPS cut out, so not sure where I'm at.",
              standard: "Excuse me, I think I'm lost. My GPS lost signal and I'm not sure where I am.",
              formal:
                "Pardon me, I seem to be disoriented. My GPS device has lost its satellite signal, and I'm quite unsure of my precise location.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You're on Miller Road, just past the old church. Where are you trying to get to?",
            textZh: "你在 Miller 路上，刚过那个老教堂。你要去哪？",
            culturalNote: "美国人问路时通常直接说地点或目的地，不需要像中文一样绕弯",
            commonMistake: {
              wrong: "Where do you want to go?",
              correct: "Where are you trying to get to?",
              explanation: "'trying to get to'比'want to go'更自然，语气更柔和。",
            },
            keyPhrases: [
              { en: "just past", zh: "刚过/刚经过" },
              { en: "trying to get to", zh: "想去" },
            ],
            alternativeExpressions: [
              {
                textEn: "You're on Miller Road, right by the old church. Where you headed?",
                textZh: "你在 Miller 路上，就在老教堂旁边。你要去哪？",
                actionHint: "告诉对方目的地",
                frequency: "common",
              },
              {
                textEn:
                  "This is Miller Road. See that church back there? You just passed it. Where are you trying to go?",
                textZh: "这是 Miller 路。看到后面那个教堂了吗？你刚过的。你想去哪？",
                actionHint: "说出你的目的地",
                frequency: "occasional",
              },
            ],
            casualVersion: "You're on Miller Road, just past the old church. Where you headed?",
            formalityVariants: {
              casual: "Miller Road, past the old church. Where you headed?",
              standard: "You're on Miller Road, just past the old church. Where are you trying to get to?",
              formal:
                "You are currently located on Miller Road, just beyond the old church. Could you please specify your intended destination?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm heading to Lake Tahoe. I think I took a wrong turn somewhere.",
            textZh: "我要去太浩湖。我觉得我在什么地方拐错了。",
            casualVersion: "Headed to Lake Tahoe. Think I took a wrong turn.",
            commonMistake: {
              wrong: "I go to Lake Tahoe. I turn wrong somewhere.",
              correct: "I'm heading to Lake Tahoe. I think I took a wrong turn somewhere.",
              explanation: "常用动词时态错误，“去”用go代替head to，以及“转错”直译。",
            },
            formalityVariants: {
              casual: "Headed to Lake Tahoe. Think I took a wrong turn.",
              standard: "I'm heading to Lake Tahoe. I think I took a wrong turn somewhere.",
              formal:
                "My intended destination is Lake Tahoe. I believe I may have made an incorrect turn at some point.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Ah yeah, that's a common mistake. Turn around and go back to the intersection — take a right onto Highway 50. Stay on that for about 20 miles and you'll see signs for the lake.",
            textZh: "啊是的，很多人走错。掉头回到那个十字路口——右转上50号公路。沿着开大约20英里就会看到湖的指示牌。",
            commonMistake: {
              wrong: "Turn over and go back...",
              correct: "Turn around and go back...",
              explanation: "'turn around'是地道表达，指掉头，'turn over'是翻身或翻倒。",
            },
            keyPhrases: [
              { en: "turn around", zh: "掉头" },
              { en: "intersection", zh: "十字路口" },
              { en: "take a right onto", zh: "右转上……路" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, lots of people miss that turn. Just head back to the light and make a right on Highway 50. About 20 miles and you're there.",
                textZh: "很多人都走错那个弯。回到红绿灯那里右转上50号公路。大约20英里就到了。",
                actionHint: "先掉头回十字路口",
                frequency: "common",
              },
              {
                textEn:
                  "Classic wrong turn. Go back the way you came, hang a right at the intersection onto 50, and keep going. You'll see signs for the lake.",
                textZh: "经典走错路。原路返回，在十字路口右转上50号公路，一直走。你会看到湖的指示牌。",
                actionHint: "跟着路标走",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Oh yeah, that's common. Turn around, go back to the intersection, take a right on 50. Stay on it for like 20 miles, then you'll see lake signs.",
            formalityVariants: {
              casual:
                "Oh yeah, that's common. Turn around, go back to the intersection, right on 50. Stay on it 'bout 20 miles, then you'll see lake signs.",
              standard:
                "Ah yeah, that's a common mistake. Turn around and go back to the intersection — take a right onto Highway 50. Stay on that for about 20 miles and you'll see signs for the lake.",
              formal:
                "Yes, that is a frequently encountered error. You will need to reverse direction and return to the aforementioned intersection, at which point you should turn right onto Highway 50. Proceed along that route for approximately 20 miles, and you will observe signage indicating the lake.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you! By the way, we noticed a warning light on the dashboard. It looks like the engine temperature. Is there a mechanic nearby?",
            textZh: "谢谢！顺便问一下，我们发现仪表盘上有个警示灯亮了。看起来是发动机温度的。附近有修车行吗？",
            culturalNote: "在美国，当车辆出现问题时，人们通常会直接向遇到的当地人询问最近的修车点或建议。",
            casualVersion:
              "Thanks! Hey, saw a warning light on the dash. Engine temp, I think. Any mechanics 'round here?",
            commonMistake: {
              wrong:
                "Thank you! By the way, we see a warning light on the dashboard. It looks like engine temperature. Have mechanic nearby?",
              correct:
                "Thank you! By the way, we noticed a warning light on the dashboard. It looks like the engine temperature. Is there a mechanic nearby?",
              explanation: "中文容易混淆动词时态，“看到”直译see，省略介词和不定冠词，以及“有”直译have。",
            },
            formalityVariants: {
              casual: "Thanks! Hey, saw a warning light on the dash. Engine temp, I think. Any mechanics 'round here?",
              standard:
                "Thank you! By the way, we noticed a warning light on the dashboard. It looks like the engine temperature. Is there a mechanic nearby?",
              formal:
                "I am most grateful for your assistance. Additionally, we've observed an illuminated warning indicator on the instrument panel, which appears to pertain to the engine's temperature. Are there any automotive repair facilities in the immediate vicinity?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "That's the overheating light — you should pull over and let the engine cool down for a bit. Don't open the hood while it's hot. There's a gas station with a small auto shop about 3 miles down that way.",
            textZh:
              "那是过热警示灯——你应该靠边停车让发动机冷却一会儿。发动机热的时候别打开引擎盖。往那边大约3英里有个加油站带小修车行。",
            culturalNote: "汽车仪表盘上的各种警示灯（warning light）是美国驾车人非常熟悉的概念。",
            commonMistake: {
              wrong: "Don't open the engine cover.",
              correct: "Don't open the hood.",
              explanation: "'hood'是美式英语中指汽车引擎盖的常用词。",
            },
            keyPhrases: [
              { en: "overheating", zh: "过热" },
              { en: "pull over", zh: "靠边停车" },
              { en: "cool down", zh: "冷却" },
              { en: "hood", zh: "引擎盖" },
              { en: "auto shop", zh: "修车行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's your engine overheating. Pull over right away and let it cool. Don't touch the hood yet. There's a garage about 3 miles that way.",
                textZh: "那是发动机过热。马上靠边停车让它冷却。先别碰引擎盖。往那个方向大约3英里有个修车行。",
                actionHint: "先靠边等冷却",
                frequency: "common",
              },
              {
                textEn:
                  "Uh oh, that's the temperature warning. You should stop and let the engine rest. There's a place that does repairs not far from here — about 3 miles down the road.",
                textZh: "糟糕，那是温度警告灯。你应该停车让发动机休息。附近有个修车的地方——往前大约3英里。",
                actionHint: "不要继续开",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "That's the overheating light — gotta pull over, let the engine cool down for a sec. Don't open the hood when it's hot. There's a gas station with a small auto shop 'bout 3 miles down that way.",
            formalityVariants: {
              casual:
                "Overheating light — gotta pull over, let it cool for a bit. Don't open the hood when it's hot. Gas station with a shop 'bout 3 miles down.",
              standard:
                "That's the overheating light — you should pull over and let the engine cool down for a bit. Don't open the hood while it's hot. There's a gas station with a small auto shop about 3 miles down that way.",
              formal:
                "That particular indicator signifies an overheating condition. It is advisable to safely pull your vehicle to the side of the road and allow the engine to cool down for a period. It is critical that you refrain from opening the hood while the engine is still hot. Approximately three miles in that direction, there is a fueling station that also houses a modest automotive repair facility.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I call the rental company? It's a rental car.",
            textZh: "我要不要打电话给租车公司？这是租来的车。",
            culturalNote: "租车出问题时，首要步骤是联系租车公司，而不是自行处理，这是基本常识。",
            casualVersion: "Should I call the rental place? It's a rental.",
            commonMistake: {
              wrong: "I need call rental company? It is rental car.",
              correct: "Should I call the rental company? It's a rental car.",
              explanation: "中文思维省略助动词，以及“这是租的车”直译导致用is而不是it's。",
            },
            formalityVariants: {
              casual: "Call the rental place? It's a rental.",
              standard: "Should I call the rental company? It's a rental car.",
              formal:
                "Would it be advisable for me to contact the rental car agency? This vehicle is, in fact, a rental.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Definitely. They usually have roadside assistance. The number should be in your rental agreement or on a sticker on the windshield. They might send a tow truck or swap the car for you.",
            textZh:
              "一定要打。他们一般有道路救援服务。号码应该在你的租车协议上或者挡风玻璃的贴纸上。他们可能会派拖车或者给你换一辆车。",
            culturalNote: "美国租车服务通常会包含道路救援（roadside assistance），遇到问题时联系租车公司是标准做法。",
            commonMistake: {
              wrong: "They will send a tow car.",
              correct: "They might send a tow truck.",
              explanation: "'tow truck'是拖车的正确说法，'tow car'不常用。",
            },
            keyPhrases: [
              { en: "roadside assistance", zh: "道路救援" },
              { en: "rental agreement", zh: "租车协议" },
              { en: "windshield", zh: "挡风玻璃" },
              { en: "tow truck", zh: "拖车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure, call them. They've got roadside assistance. The number's in your paperwork or on the windshield sticker. They'll probably tow it or bring you a replacement.",
                textZh: "一定要打。他们有道路救援。号码在你的文件里或挡风玻璃贴纸上。他们可能会拖车或给你换一辆。",
                actionHint: "联系租车公司救援",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. Check your rental papers — there should be an emergency number. They usually send a tow truck or swap out the car.",
                textZh: "肯定的。看看你的租车文件——应该有紧急电话。他们一般会派拖车或换车。",
                actionHint: "找租车协议上的电话",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Definitely. They usually got roadside assistance. Number should be in your agreement or on a sticker on the windshield. They might send a tow truck or just swap cars for ya.",
            formalityVariants: {
              casual:
                "Yeah, definitely. They usually got roadside assistance. Number's in your agreement or on a sticker. Might send a tow or swap cars.",
              standard:
                "Definitely. They usually have roadside assistance. The number should be in your rental agreement or on a sticker on the windshield. They might send a tow truck or swap the car for you.",
              formal:
                "Absolutely. Rental agencies typically provide roadside assistance services. The relevant contact number should be located within your rental agreement documentation or affixed to the vehicle's windshield. They may dispatch a tow truck or facilitate a vehicle exchange for you.",
            },
          },
          {
            speaker: "you",
            textEn: "Good idea. Thanks so much for your help — you've been really kind.",
            textZh: "好主意。非常感谢你的帮助——你真是太好了。",
            culturalNote: "“You're a lifesaver!”是美式英语中对帮助自己摆脱困境的人的常见赞美。",
            casualVersion: "Good call. Thanks a bunch for your help — you've been super kind.",
            commonMistake: {
              wrong: "Good idea. Thank you very much for your help, you are very kind.",
              correct: "Good idea. Thanks so much for your help — you've been really kind.",
              explanation: "中文表达习惯可能导致直接用are，缺少've been，感谢表达不够地道。",
            },
            formalityVariants: {
              casual: "Good call. Thanks a bunch for your help — you've been super kind.",
              standard: "Good idea. Thanks so much for your help — you've been really kind.",
              formal:
                "That is an excellent suggestion. I am profoundly grateful for your assistance; your kindness has been most appreciated.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No problem at all. Good luck with the car, and enjoy Lake Tahoe when you get there!",
            textZh: "不客气。祝车的问题顺利解决，到了太浩湖好好玩！",
            culturalNote: "美国服务人员乐于助人，常会说“No problem”或“You're welcome”表示不客气。",
            commonMistake: {
              wrong: "No problem! Have fun for Lake Tahoe!",
              correct: "No problem at all. Enjoy Lake Tahoe!",
              explanation: "'Have fun for...'不自然，应直接用'Enjoy [地点]!'。",
            },
            keyPhrases: [
              { en: "no problem at all", zh: "完全不客气" },
              { en: "good luck", zh: "祝顺利" },
            ],
            alternativeExpressions: [
              {
                textEn: "Happy to help! Hope the car's okay. Have a great time at the lake!",
                textZh: "很高兴帮到你！希望车没问题。去湖边玩得开心！",
                actionHint: "友好道别",
                frequency: "common",
              },
              {
                textEn: "Don't mention it. Good luck getting it sorted, and enjoy Tahoe!",
                textZh: "不客气。祝车的事顺利解决，太浩湖玩得开心！",
                actionHint: "祝旅途愉快",
                frequency: "common",
              },
            ],
            casualVersion: "No prob. Good luck with the car, and enjoy Tahoe when you get there!",
            formalityVariants: {
              casual: "No prob. Good luck with the car, and enjoy Tahoe!",
              standard: "No problem at all. Good luck with the car, and enjoy Lake Tahoe when you get there!",
              formal:
                "You are most welcome. I wish you the best of luck resolving your vehicle's issue, and I hope you thoroughly enjoy your time at Lake Tahoe upon your arrival.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 机场大巴 ====================
  {
    id: "transport-airport-shuttle",
    category: "transport",
    titleZh: "机场大巴",
    titleEn: "Airport Shuttle",
    description: "搭乘机场大巴或酒店接送车，了解接送安排、行李和费用",
    otherRole: "大巴司机/前台",
    otherRoleIcon: "bus",
    flows: [
      // --- Flow 1: 酒店接送 ---
      {
        id: "hotel-shuttle",
        titleZh: "酒店接送",
        titleEn: "Hotel Shuttle Pick-up",
        description: "联系酒店安排机场接送，到达后找到接送车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm a guest at the Marriott downtown. Does the hotel offer an airport shuttle?",
            textZh: "你好，我是市中心万豪酒店的住客。酒店有机场接送服务吗？",
            culturalNote: "直接说目的即可，无需像中文一样先介绍自己。",
            casualVersion: "Hey, I'm at the downtown Marriott. Got an airport shuttle?",
            commonMistake: {
              wrong: "Hi, I'm a guest at the Marriott downtown. Hotel has airport shuttle?",
              correct: "Hi, I'm a guest at the Marriott downtown. Does the hotel offer an airport shuttle?",
              explanation:
                "询问服务时，常需使用助动词 'does' 或 'do' 构成疑问句，并且 'offer' 比 'have' 更自然地表达酒店提供服务。",
            },
            formalityVariants: {
              casual: "Hey, I'm at the downtown Marriott. Got an airport shuttle?",
              standard: "Hi, I'm a guest at the Marriott downtown. Does the hotel offer an airport shuttle?",
              formal:
                "Good afternoon. I am a registered guest at your downtown Marriott property. I was wondering if the hotel provides a complimentary airport shuttle service?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Yes, we do! Our complimentary shuttle runs every 30 minutes between 6 AM and 11 PM. What time does your flight arrive?",
            textZh: "有的！我们的免费接送车每30分钟一班，早上6点到晚上11点运行。你的航班几点到？",
            keyPhrases: [
              { en: "complimentary shuttle", zh: "免费接送车" },
              { en: "runs every", zh: "每……一班" },
            ],
            variations: [
              {
                textEn: "We sure do. It's a free shuttle service. When do you land?",
                textZh: "当然有。是免费的接送服务。你几点落地？",
              },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yes! We have a free airport shuttle every half hour from 6 AM to 11 PM. What time are you landing?",
                textZh: "有的！早6点到晚11点每半小时一班免费机场接送车。你几点到？",
                actionHint: "告知航班到达时间",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. Our courtesy shuttle runs all day, every 30 minutes. Just tell me your arrival time and we'll have it ready.",
                textZh: "当然。我们的免费接送车全天运行，每30分钟一班。告诉我你的到达时间就行。",
                actionHint: "提供到达时间",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, totally! Shuttle's free, runs every 30 mins, 6 AM to 11 PM. What time's your flight land?",
            commonMistake: {
              wrong: "What time your flight arrive?",
              correct: "What time does your flight arrive?",
              explanation: "询问动作发生的时间时，需要使用助动词 'does' 构成疑问句。",
            },
            formalityVariants: {
              casual: "Yeah, free shuttle runs every 30, 6 AM to 11 PM. When's your flight?",
              standard:
                "Yes, we do! Our complimentary shuttle runs every 30 minutes between 6 AM and 11 PM. What time does your flight arrive?",
              formal:
                "Indeed, we do provide that service. Our complimentary shuttle operates on a 30-minute rotation from 6:00 AM until 11:00 PM. Could you please inform me of your estimated flight arrival time?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm arriving at 3:15 PM tomorrow, Terminal 2. How do I find the shuttle?",
            textZh: "我明天下午3:15到，2号航站楼。怎么找到接送车？",
            culturalNote: "中国乘客通常习惯酒店主动提供接驳车信息，但在美国则需主动询问并提供航班信息。",
            casualVersion: "Landing 3:15 PM tomorrow, T2. Where do I grab the shuttle?",
            commonMistake: {
              wrong: "How to find the shuttle?",
              correct: "How do I find the shuttle?",
              explanation: "提问 '如何做某事' 时，需要使用 'How do I...' 或 'How can I...' 的句式。",
            },
            formalityVariants: {
              casual: "Tomorrow, 3:15 PM, T2. How do I find the shuttle?",
              standard: "I'm arriving at 3:15 PM tomorrow, Terminal 2. How do I find the shuttle?",
              formal:
                "My arrival is scheduled for 3:15 PM tomorrow at Terminal 2. Could you please provide instructions on locating the shuttle service?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "After you collect your luggage, exit through the arrivals hall and look for the hotel shuttle pick-up area — it's usually on the lower level, outside Door 4. Our shuttle is a white van with the Marriott logo. You can also call us when you've landed and we'll let the driver know.",
            textZh:
              "取完行李后，从到达大厅出来，找酒店接送车上客区——通常在下层，4号门外。我们的接送车是一辆白色面包车，有万豪的标志。你也可以落地后打电话给我们，我们会通知司机。",
            keyPhrases: [
              { en: "arrivals hall", zh: "到达大厅" },
              { en: "pick-up area", zh: "上客区" },
              { en: "lower level", zh: "下层" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Grab your bags, head out of arrivals, and go down to the ground level. Our white Marriott van picks up outside Door 4. Give us a ring when you land.",
                textZh: "拿好行李，从到达口出来，下到底层。我们的白色万豪面包车在4号门外接人。落地后给我们打个电话。",
                actionHint: "落地后打电话确认",
                frequency: "common",
              },
              {
                textEn:
                  "Once you have your luggage, look for the shuttle zone on the lower level, by Door 4. It's a white van with our logo. You can also call when you're ready and we'll send the driver.",
                textZh:
                  "拿到行李后，在下层4号门找接送区。白色面包车，有我们的标志。你也可以准备好了打电话，我们派司机过去。",
                actionHint: "认准白色面包车",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Once you get your bags, head out the arrivals hall and look for the shuttle pick-up – usually downstairs, outside Door 4. It's a white Marriott van. Or just call us when you land, we'll tell the driver.",
            commonMistake: {
              wrong: "It's usually on the lower level, outside Gate 4.",
              correct: "It's usually on the lower level, outside Door 4.",
              explanation: "机场出口通常用 'Door' 来指代，而 'Gate' 通常指登机口。",
            },
            formalityVariants: {
              casual:
                "Grab bags, head out arrivals, look for shuttle pick-up – usually downstairs, Door 4. White Marriott van. Call us when you land, we'll tell driver.",
              standard:
                "After you collect your luggage, exit through the arrivals hall and look for the hotel shuttle pick-up area — it's usually on the lower level, outside Door 4. Our shuttle is a white van with the Marriott logo. You can also call us when you've landed and we'll let the driver know.",
              formal:
                "Upon retrieving your luggage, please proceed through the arrivals hall and locate the designated hotel shuttle pick-up zone, which is typically situated on the lower level, adjacent to Door 4. Our shuttle is identifiable as a white van bearing the Marriott insignia. Alternatively, you may contact us once you have landed, and we will notify the driver accordingly.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. I have two large suitcases — is there enough room?",
            textZh: "好的。我有两个大行李箱——空间够吗？",
            casualVersion: "Cool. Got two big suitcases – enough space?",
            commonMistake: {
              wrong: "Is enough room?",
              correct: "Is there enough room?",
              explanation: "询问 '是否有...' 时，通常使用 'Is there...' 或 'Are there...' 的句式。",
            },
            formalityVariants: {
              casual: "Cool. Got two big bags – enough space?",
              standard: "Perfect. I have two large suitcases — is there enough room?",
              formal:
                "Excellent. I will be traveling with two sizable suitcases; will there be adequate storage capacity?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Absolutely. The shuttle can handle plenty of luggage. The driver will help you load your bags. Is it just yourself, or will there be others?",
            textZh: "完全没问题。接送车能放很多行李。司机会帮你搬行李。就你一个人，还是有同行的？",
            keyPhrases: [{ en: "load your bags", zh: "搬行李上车" }],
            alternativeExpressions: [
              {
                textEn:
                  "No problem at all! Plenty of space for luggage. The driver will take care of your bags. Traveling alone or with someone?",
                textZh: "完全没问题！行李空间很大。司机会帮你搬行李。一个人还是有同行的？",
                actionHint: "说明出行人数",
                frequency: "common",
              },
              {
                textEn:
                  "Two suitcases? Easy. We've got room. Our driver will load them for you. Anyone else coming with you?",
                textZh: "两个行李箱？没问题。空间足够。司机帮你搬上去。还有别人跟你一起吗？",
                actionHint: "告知人数",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Oh yeah, totally. Shuttle can hold tons of bags. Driver'll help you load 'em. Just you, or more people?",
            commonMistake: {
              wrong: "Is it just you, or others?",
              correct: "Is it just yourself, or will there be others?",
              explanation:
                "询问是否有 '其他人' 时，'others' 前通常需要助动词和主语，'will there be others' 更完整自然。",
            },
            formalityVariants: {
              casual: "Yeah, plenty of room. Driver'll help. Just you or more?",
              standard:
                "Absolutely. The shuttle can handle plenty of luggage. The driver will help you load your bags. Is it just yourself, or will there be others?",
              formal:
                "Certainly. The shuttle is designed to accommodate a substantial volume of luggage, and the driver will assist you with loading your bags. May I inquire if you will be traveling alone, or if there will be additional passengers?",
            },
          },
          {
            speaker: "you",
            textEn: "Just me. And for departure — can the shuttle take me back to the airport too?",
            textZh: "就我一个人。回程的话——接送车也能送我去机场吗？",
            casualVersion: "Just me. And for leaving — can it take me back to the airport too?",
            commonMistake: {
              wrong: "Can the shuttle take me back to the airport again?",
              correct: "Can the shuttle take me back to the airport too?",
              explanation: "'too' 在这里表示 '也'，更自然地表达了去程和回程都使用接驳服务，而不是指 '再次'。",
            },
            formalityVariants: {
              casual: "Just me. And for going back — can it drop me at the airport too?",
              standard: "Just me. And for departure — can the shuttle take me back to the airport too?",
              formal:
                "I will be the sole passenger. Regarding my departure, would the shuttle service also be available for transportation back to the airport?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "Of course. Just let the front desk know the night before, and we'll schedule a pick-up time. We recommend leaving at least 3 hours before an international flight.",
            textZh: "当然。前一天晚上跟前台说一声就行，我们会安排出发时间。国际航班建议至少提前3小时出发。",
            keyPhrases: [
              { en: "schedule a pick-up", zh: "安排接送时间" },
              { en: "the night before", zh: "前一天晚上" },
              { en: "at least 3 hours before", zh: "至少提前3小时" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Just tell the front desk the evening before and we'll book you a spot. For international flights, plan on heading out 3 hours early.",
                textZh: "当然。前一天晚上跟前台说一声就行，我们帮你预约。国际航班的话，提前3小时出发。",
                actionHint: "提前一晚预约",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. Let us know the night before your departure and we'll arrange everything. We usually suggest 3 hours for international flights.",
                textZh: "没问题。出发前一晚告诉我们就行，我们安排好一切。国际航班我们一般建议提前3小时。",
                actionHint: "提前沟通出发时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally. Just tell the front desk the night before, and we'll set up a pick-up. For international flights, best to leave at least 3 hours early.",
            commonMistake: {
              wrong: "Just let front desk know the night before.",
              correct: "Just let the front desk know the night before.",
              explanation: "'Front desk' 是特指的地点，需要冠词 'the'。",
            },
            formalityVariants: {
              casual:
                "Yup. Just tell front desk night before, we'll arrange pick-up. International flights, leave 3+ hours early.",
              standard:
                "Of course. Just let the front desk know the night before, and we'll schedule a pick-up time. We recommend leaving at least 3 hours before an international flight.",
              formal:
                "Certainly. Kindly inform the front desk on the evening prior to your departure, and we shall arrange a suitable pick-up time. We advise departing at least three hours in advance for international flights.",
            },
          },
          {
            speaker: "you",
            textEn: "That's very helpful. Do I need to tip the shuttle driver?",
            textZh: "太有帮助了。需要给接送车司机小费吗？",
            casualVersion: "Super helpful. Gotta tip the shuttle driver?",
            culturalNote: "美国有小费文化，司机搬行李通常要给小费",
            commonMistake: {
              wrong: "Need to tip shuttle driver?",
              correct: "Do I need to tip the shuttle driver?",
              explanation: "询问需求时，需要完整的疑问句式 'Do I need to...'。",
            },
            formalityVariants: {
              casual: "Very helpful. Should I tip the driver?",
              standard: "That's very helpful. Do I need to tip the shuttle driver?",
              formal: "I appreciate that information. Is it customary to offer a gratuity to the shuttle driver?",
            },
          },
          {
            speaker: "them",
            role: "酒店前台",
            textEn:
              "It's not required since it's a complimentary service, but a couple of dollars is always appreciated if the driver helps with your bags.",
            textZh: "因为是免费服务，不是必须的，但如果司机帮忙搬行李，给几美元小费他们会很感激。",
            keyPhrases: [
              { en: "not required", zh: "不是必须的" },
              { en: "appreciated", zh: "感激的/受欢迎的" },
            ],
            culturalNote: "在美国，即使是免费接送，如果司机帮忙搬行李，给$2-5小费是常见的礼貌做法。",
            alternativeExpressions: [
              {
                textEn:
                  "Tips aren't expected since the shuttle is free, but if the driver helps with your luggage, a few bucks goes a long way.",
                textZh: "接送车免费所以不用给小费，但如果司机帮搬行李，给几块钱就很好了。",
                actionHint: "帮搬行李可给小费",
                frequency: "common",
              },
              {
                textEn:
                  "It's complimentary, so no tip necessary. But a dollar or two for the driver is always a nice gesture, especially if they help with bags.",
                textZh: "是免费服务，所以不必给小费。但给司机一两美元是个好做法，特别是帮搬行李的时候。",
                actionHint: "小费不强制但受欢迎",
                frequency: "occasional",
              },
            ],
            casualVersion: "Nah, not required 'cause it's free, but a few bucks is nice if they help with your bags.",
            commonMistake: {
              wrong: "a couple of dollars always appreciated.",
              correct: "a couple of dollars is always appreciated.",
              explanation: "'a couple of dollars' 作主语时，谓语动词需要使用单数形式 'is'。",
            },
            formalityVariants: {
              casual: "Nope, not required since it's free. But a few bucks is cool if they help with bags.",
              standard:
                "It's not required since it's a complimentary service, but a couple of dollars is always appreciated if the driver helps with your bags.",
              formal:
                "While it is not strictly obligatory, as this is a complimentary service, a gratuity of a few dollars is certainly appreciated should the driver assist with your luggage.",
            },
          },
        ],
      },

      // --- Flow 2: 公共机场大巴 ---
      {
        id: "airport-bus",
        titleZh: "公共机场大巴",
        titleEn: "Airport Express Bus",
        description: "搭乘公共机场快线巴士往返机场和市中心",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where can I catch the airport express bus to downtown?",
            textZh: "请问去市中心的机场快线在哪里坐？",
            casualVersion: "Hey, where do I grab the airport express to downtown?",
            culturalNote: "美国问路常省略'请问'，直接说事即可",
            commonMistake: {
              wrong: "Where can I take the airport express bus?",
              correct: "Where can I catch the airport express bus?",
              explanation: "Catch/get a bus更自然，take the bus也有但语气不如catch/get常用",
            },
            formalityVariants: {
              casual: "Hey, where do I grab the airport express to downtown?",
              standard: "Excuse me, where can I catch the airport express bus to downtown?",
              formal: "Pardon me, could you please direct me to the airport express bus service for downtown?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Go out Exit B and cross to the bus terminal — it's the covered area across the road. Look for Route A1 — that's the airport express. It stops at Central Station, City Hall, and the main hotel district.",
            textZh:
              "从B出口出去，过马路到公交站——就是对面有顶棚的地方。找A1线路——那就是机场快线。停靠中央车站、市政厅和主要酒店区。",
            keyPhrases: [
              { en: "bus terminal", zh: "公交站" },
              { en: "airport express", zh: "机场快线" },
              { en: "hotel district", zh: "酒店区" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Head out Exit B, cross over to the bus stop with the roof — you can't miss it. Grab the A1, that's the express to downtown.",
                textZh: "从B出口出去，到对面有顶棚的公交站——很好找。坐A1线，那就是去市中心的快线。",
                actionHint: "找A1线路",
                frequency: "common",
              },
              {
                textEn:
                  "Take Exit B and walk across to the covered bus terminal. Look for Route A1 — it hits Central Station, City Hall, and the hotel area.",
                textZh: "走B出口到对面有顶棚的公交站。找A1线——会经过中央车站、市政厅和酒店区。",
                actionHint: "认准A1标志",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Head out Exit B, cross to the bus terminal – that covered spot 'cross the street. Find Route A1, that's the express. Stops at Central Station, City Hall, and the main hotels.",
            formalityVariants: {
              casual:
                "Out Exit B, cross to the terminal – covered spot 'cross the street. Route A1, express. Central Station, City Hall, main hotels.",
              standard:
                "Go out Exit B and cross to the bus terminal — it's the covered area across the road. Look for Route A1 — that's the airport express. It stops at Central Station, City Hall, and the main hotel district.",
              formal:
                "Kindly proceed through Exit B and cross over to the designated bus terminal, which is the covered area situated directly opposite. Please locate Route A1, identified as the airport express service. Its scheduled stops include Central Station, City Hall, and the primary hotel district.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the fare, and can I pay on the bus?",
            textZh: "票价多少？能在车上付款吗？",
            casualVersion: "How much is it, and can I pay on the bus?",
            commonMistake: {
              wrong: "How much is the ticket price?",
              correct: "How much is the fare?",
              explanation: "Fare就是车票价格，不用加ticket。",
            },
            formalityVariants: {
              casual: "How much is it, and can I pay on the bus?",
              standard: "How much is the fare, and can I pay on the bus?",
              formal:
                "Could you please inform me of the fare, and is it possible to make payment directly on board the bus?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "It's $18 one way or $30 for a round trip. You can pay with credit card on the bus, or buy a ticket at the kiosk over there. Cash is not accepted on board.",
            textZh: "单程18美元，往返30美元。可以在车上刷信用卡，或者在那边的自助售票机买票。车上不收现金。",
            keyPhrases: [
              { en: "one way", zh: "单程" },
              { en: "round trip", zh: "往返" },
              { en: "kiosk", zh: "自助售票机" },
              { en: "on board", zh: "车上" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "18 bucks one way, 30 round trip. You can tap your card on the bus or grab a ticket from the machine over there. No cash though.",
                textZh: "单程18块，往返30块。车上可以感应刷卡，或者去那边机器买票。不收现金。",
                actionHint: "不收现金要注意",
                frequency: "common",
              },
              {
                textEn:
                  "One way is $18, return is $30 — saves you a few bucks. Pay by card on board or use that ticket kiosk. They don't take cash on the bus.",
                textZh: "单程18美元，往返30美元——省几块钱。车上刷卡或用那个自助售票机。车上不收现金。",
                actionHint: "往返票更划算",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "$18 one way, $30 for a round trip. Card on the bus, or buy a ticket at that kiosk. No cash on board.",
            culturalNote: "美国很多公共交通不收现金，常需信用卡或预付卡",
            commonMistake: {
              wrong: "Cash is not accept on board.",
              correct: "Cash is not accepted on board.",
              explanation: "被动语态动词用过去分词形式，accepted。",
            },
            formalityVariants: {
              casual: "$18 one way, $30 round trip. Card on bus, or kiosk. No cash.",
              standard:
                "It's $18 one way or $30 for a round trip. You can pay with credit card on the bus, or buy a ticket at the kiosk over there. Cash is not accepted on board.",
              formal:
                "The fare is $18 for a one-way journey or $30 for a round trip. Payment may be made via credit card directly on the bus, or a ticket can be purchased at the adjacent kiosk. Please note that cash payments are not accepted on board.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll get a round trip. How often does it run, and how long to downtown?",
            textZh: "我买往返的。多久一班，到市中心要多久？",
            casualVersion: "I'll grab a round trip. How often does it come, and how long to downtown?",
            commonMistake: {
              wrong: "How often does it has a bus?",
              correct: "How often does it run?",
              explanation: "询问班次频率用'run'或'come'，句型是'How often does it run?'",
            },
            formalityVariants: {
              casual: "I'll grab a round trip. How often does it come, and how long to downtown?",
              standard: "I'll get a round trip. How often does it run, and how long to downtown?",
              formal:
                "I will purchase a round-trip ticket. Could you please inform me of the service frequency and the estimated travel time to downtown?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Every 20 minutes during the day. The ride is about 45 minutes, depending on traffic. The last bus is at midnight.",
            textZh: "白天每20分钟一班。车程大约45分钟，看交通情况。末班车是午夜12点。",
            keyPhrases: [
              { en: "every 20 minutes", zh: "每20分钟" },
              { en: "last bus", zh: "末班车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Daytime it's every 20 minutes. Takes about 45 minutes to get downtown, traffic depending. Last one's at midnight.",
                textZh: "白天每20分钟一班。到市中心大约45分钟，看交通。末班车午夜。",
                actionHint: "注意末班车时间",
                frequency: "common",
              },
              {
                textEn:
                  "They come pretty often — every 20 minutes or so. Figure about 45 minutes for the ride. After midnight there's no service.",
                textZh: "来得挺频繁的——大约每20分钟一班。车程大概45分钟。午夜后没有车了。",
                actionHint: "别错过末班车",
                frequency: "occasional",
              },
            ],
            casualVersion: "Every 20 mins during the day. 'Bout 45 mins, depends on traffic. Last bus is at midnight.",
            formalityVariants: {
              casual: "Every 20 mins during the day. 'Bout 45, depends on traffic. Last bus: midnight.",
              standard:
                "Every 20 minutes during the day. The ride is about 45 minutes, depending on traffic. The last bus is at midnight.",
              formal:
                "The service operates every 20 minutes during daylight hours. The journey typically takes approximately 45 minutes, contingent upon traffic conditions. The final bus departs at midnight.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I put my suitcase under the bus?",
            textZh: "行李箱可以放在车底吗？",
            casualVersion: "Can I throw my suitcase under the bus?",
            commonMistake: {
              wrong: "Can I put my luggages under the bus?",
              correct: "Can I put my suitcase under the bus?",
              explanation: "Luggage是不可数名词，不能用复数形式'luggages'。",
            },
            formalityVariants: {
              casual: "Can I throw my suitcase under the bus?",
              standard: "Can I put my suitcase under the bus?",
              formal: "May I place my luggage in the undercarriage compartment of the bus?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes, there's a luggage compartment underneath. The driver will open it for you. Keep your valuables with you on the bus though.",
            textZh: "可以，车底有行李舱。司机会帮你打开。不过贵重物品带在身上。",
            keyPhrases: [
              { en: "luggage compartment", zh: "行李舱" },
              { en: "valuables", zh: "贵重物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, there's storage underneath. The driver will pop it open for you. Just keep your wallet and phone on you.",
                textZh: "车底有储物空间。司机会帮你打开。钱包和手机随身带着就好。",
                actionHint: "贵重物品随身带",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, suitcases go in the compartment below. Driver handles that. But hang on to anything valuable — take it on the bus with you.",
                textZh: "当然，行李箱放下面的行李舱。司机来管。但贵重东西拿好——带上车。",
                actionHint: "别把贵重物品放行李舱",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, there's a luggage compartment underneath. Driver'll open it. Keep your valuables with you on the bus though.",
            formalityVariants: {
              casual: "Yeah, luggage space underneath. Driver'll open it. Keep valuables with you.",
              standard:
                "Yes, there's a luggage compartment underneath. The driver will open it for you. Keep your valuables with you on the bus though.",
              formal:
                "Certainly, a designated luggage compartment is available underneath the vehicle. The driver will assist you with access. However, it is advisable to retain any valuable items with you on board.",
            },
          },
          {
            speaker: "you",
            textEn: "Which stop should I get off for the Hilton on Park Avenue?",
            textZh: "我要去公园大道的希尔顿，在哪一站下车？",
            casualVersion: "Which stop for the Hilton on Park Ave?",
            commonMistake: {
              wrong: "Which stop I should get off?",
              correct: "Which stop should I get off?",
              explanation: "疑问句中，助动词should在主语I之前。",
            },
            formalityVariants: {
              casual: "Which stop for the Hilton on Park Ave?",
              standard: "Which stop should I get off for the Hilton on Park Avenue?",
              formal: "Could you please advise me of the appropriate stop for the Hilton hotel on Park Avenue?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Get off at the City Hall stop — that's the third stop. The Hilton is a 5-minute walk from there. The driver announces each stop, so you won't miss it.",
            textZh: "在市政厅站下——第三站。希尔顿从那里走5分钟就到。司机每站都会报站，不会错过的。",
            keyPhrases: [
              { en: "get off at", zh: "在……下车" },
              { en: "announces each stop", zh: "每站报站" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hop off at City Hall — third stop. The Hilton's just a short walk from there. Don't worry, the driver calls out every stop.",
                textZh: "在市政厅下——第三站。希尔顿走几分钟就到。放心，司机每站都会报的。",
                actionHint: "数好第三站下车",
                frequency: "common",
              },
              {
                textEn:
                  "You want the City Hall stop, that's stop number three. From there it's maybe a 5-minute walk to the Hilton. The driver announces them all.",
                textZh: "你要在市政厅站下，第三站。从那里走大约5分钟到希尔顿。司机会报每一站。",
                actionHint: "听报站不会坐过",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "City Hall stop — that's the third one. Hilton's a 5-min walk from there. Driver announces stops, so you won't miss it.",
            formalityVariants: {
              casual: "City Hall stop, third one. Hilton's 5-min walk. Driver calls stops, you won't miss it.",
              standard:
                "Get off at the City Hall stop — that's the third stop. The Hilton is a 5-minute walk from there. The driver announces each stop, so you won't miss it.",
              formal:
                "Please alight at the City Hall stop, which is the third stop. The Hilton hotel is located approximately a five-minute walk from that point. The driver provides announcements for each stop, ensuring you will not miss your destination.",
            },
          },
          {
            speaker: "you",
            textEn: "Great. For the return trip, do I catch the bus at the same stop?",
            textZh: "好的。回程的话，在同一站上车吗？",
            casualVersion: "Cool. For the return, do I grab the bus at the same stop?",
            commonMistake: {
              wrong: "Do I take the bus in the same stop?",
              correct: "Do I catch the bus at the same stop?",
              explanation: "表示在某个地点，用介词at。",
            },
            formalityVariants: {
              casual: "Cool. Return trip, same stop for the bus?",
              standard: "Great. For the return trip, do I catch the bus at the same stop?",
              formal: "Understood. Regarding the return journey, will the boarding point be at the identical stop?",
            },
          },
          {
            speaker: "them",
            role: "信息台",
            textEn:
              "Yes, the return pick-up is right across the street from where you get off. Look for the blue A1 sign. Show your round-trip ticket to the driver. Make sure to leave enough time for traffic — airport-bound buses can get busy during rush hour.",
            textZh:
              "是的，回程上车点就在你下车的对面。找蓝色A1标志。给司机出示往返票就行。留够时间考虑交通——高峰期去机场的班车会很挤。",
            keyPhrases: [
              { en: "return pick-up", zh: "回程上车点" },
              { en: "airport-bound", zh: "去往机场的" },
              { en: "rush hour", zh: "高峰期" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, same spot, just the other side of the street. Look for the blue A1 sign. Keep your return ticket handy. And give yourself extra time during rush hour.",
                textZh: "对，同一个地方，就在马路对面。找蓝色A1标志。把回程票准备好。高峰期多留点时间。",
                actionHint: "高峰期提前出发",
                frequency: "common",
              },
              {
                textEn:
                  "The return bus picks up right across from where you get dropped off. Flash your round-trip ticket to the driver. Heads up — traffic to the airport can be rough in the evening.",
                textZh: "回程车在你下车对面上车。出示往返票给司机就行。提醒一下——晚上去机场的路上可能堵车。",
                actionHint: "保管好往返票",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, return pick-up's right 'cross the street from where you got off. Look for the blue A1 sign. Show your round-trip ticket to the driver. Leave enough time for traffic — airport buses can get busy during rush hour.",
            formalityVariants: {
              casual:
                "Yep, return pick-up's right 'cross the street from where you got off. Blue A1 sign. Show driver your ticket. Leave time for traffic — airport buses get busy rush hour.",
              standard:
                "Yes, the return pick-up is right across the street from where you get off. Look for the blue A1 sign. Show your round-trip ticket to the driver. Make sure to leave enough time for traffic — airport-bound buses can get busy during rush hour.",
              formal:
                "Affirmative, the return pick-up point is situated directly across the street from your disembarkation location. Please identify the blue A1 signage. Present your round-trip ticket to the driver. Kindly ensure you allocate sufficient time for potential traffic delays, as airport-bound services can experience high occupancy during peak hours.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 网约车高级场景 ====================
  {
    id: "transport-13",
    category: "transport",
    titleZh: "网约车问题处理",
    titleEn: "Rideshare Issues",
    description: "使用 Uber/Lyft 时遇到的各种问题，如找不到司机、路线变更和投诉",
    otherRole: "网约车司机",
    otherRoleIcon: "car",
    flows: [
      // --- Flow 1: 找不到司机 ---
      {
        id: "finding-driver",
        titleZh: "找不到网约车",
        titleEn: "Finding Your Rideshare",
        description: "在机场或商场等复杂地点找到网约车司机",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm your Uber passenger. I'm at the airport but I can't find you. Where exactly are you?",
            textZh: "你好，我是你的 Uber 乘客。我在机场但找不到你。你具体在哪里？",
            culturalNote: "美国办理网约车接驾时通常直接说目的，不需要说'请问'之类的客套话。",
            casualVersion: "Hey, I'm your Uber. I can't spot you — where are you exactly?",
            commonMistake: {
              wrong: "Hi, I'm your Uber passenger. I'm at airport but I can't find you. Where exactly are you?",
              correct: "Hi, I'm your Uber passenger. I'm at the airport but I can't find you. Where exactly are you?",
              explanation: "机场是特定地点，需要加定冠词 the。",
            },
            formalityVariants: {
              casual: "Hey, I'm your Uber. I'm at the airport, can't find you. Where are you?",
              standard: "Hi, I'm your Uber passenger. I'm at the airport but I can't find you. Where exactly are you?",
              formal:
                "Good afternoon, I am your scheduled Uber passenger. I am currently located at the airport and am having difficulty locating your vehicle. Could you please specify your precise location?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Hey! I'm in the rideshare pick-up zone on level 2 of the parking garage. It's a blue Toyota Camry, license plate 7XBK429. Do you see the signs for 'Rideshare Pick-up'?",
            textZh: "嘿！我在停车场2层的网约车接客区。蓝色丰田凯美瑞，车牌 7XBK429。你看到'网约车接客'的标志了吗？",
            keyPhrases: [
              { en: "rideshare pick-up zone", zh: "网约车接客区" },
              { en: "parking garage", zh: "停车场（多层）" },
              { en: "license plate", zh: "车牌" },
            ],
            vocabNotes: {
              rideshare: {
                meaningInContext: "在这句话里表示：通过 Uber、Lyft 等 App 叫的车，区别于传统出租车",
                similarUsage:
                  "类似用法：The rideshare pick-up is separate from the taxi stand.（网约车接客区和出租车站是分开的）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "I'm at the designated Uber/Lyft area. Follow the signs to the pick-up level.",
                textZh: "我在指定的 Uber/Lyft 区域。跟着标志走到接客层。",
                actionHint: "寻找机场的网约车专用接客标志",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey! I'm in the rideshare pick-up zone, level 2, parking garage. Blue Toyota Camry, plate 7XBK429. See the 'Rideshare Pick-up' signs?",
            formalityVariants: {
              casual:
                "Hey! I'm in the pick-up zone, level 2, parking garage. Blue Camry, plate 7XBK429. See the signs?",
              standard:
                "Hey! I'm in the rideshare pick-up zone on level 2 of the parking garage. It's a blue Toyota Camry, license plate 7XBK429. Do you see the signs for 'Rideshare Pick-up'?",
              formal:
                "Good day. I am located in the designated rideshare pick-up zone on the second level of the parking garage. My vehicle is a blue Toyota Camry, license plate number 7XBK429. Are you able to see the 'Rideshare Pick-up' signage from your current vantage point?",
            },
          },
          {
            speaker: "you",
            textEn: "I see the signs, but I'm on the arrivals level. Do I need to go up to level 2?",
            textZh: "我看到标志了，但我在到达层。需要上到2层吗？",
            casualVersion: "See the signs, but I'm on arrivals. Gotta go up to level 2?",
            commonMistake: {
              wrong: "I see the signs, but I'm on the arrivals level. I need to go up to level 2?",
              correct: "I see the signs, but I'm on the arrivals level. Do I need to go up to level 2?",
              explanation: "疑问句需要倒装或使用助动词 Do。",
            },
            formalityVariants: {
              casual: "Got the signs, but I'm on arrivals. Gotta go up to 2?",
              standard: "I see the signs, but I'm on the arrivals level. Do I need to go up to level 2?",
              formal:
                "I acknowledge seeing the signage. However, I am currently positioned on the arrivals level. Is it necessary for me to ascend to level 2?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Yes, take the elevator or escalator up one level. When you get out, turn right and walk about 200 feet. I'll flash my headlights when I see you. I'm in the third row.",
            textZh: "是的，坐电梯或扶梯上一层。出来后右转走大约200英尺（60米）。看到你的时候我会闪大灯。我在第三排。",
            keyPhrases: [
              { en: "flash my headlights", zh: "闪大灯" },
              { en: "arrivals level", zh: "到达层" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, go up one floor — elevator or escalator. Turn right, walk a bit, and I'm in row three. I'll blink my lights for you.",
                textZh: "是的，上一层——电梯或扶梯都行。右转走一段，我在第三排。我会闪灯给你看。",
                actionHint: "上到出发层找车",
                frequency: "common",
              },
              {
                textEn:
                  "You need to come up to level 2. Take the escalator, hang a right, about 200 feet. I'll be flashing my headlights — third row.",
                textZh: "你要上到2层。坐扶梯，右转，大约200英尺。我会闪大灯——第三排。",
                actionHint: "看闪灯找到司机",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yep, elevator or escalator up one level. Get out, turn right, walk 'bout 200 feet. I'll flash my lights when I see ya. I'm in the third row.",
            formalityVariants: {
              casual:
                "Yep, elevator or escalator up one. Get out, turn right, walk ~200 feet. I'll flash lights when I see ya. Third row.",
              standard:
                "Yes, take the elevator or escalator up one level. When you get out, turn right and walk about 200 feet. I'll flash my headlights when I see you. I'm in the third row.",
              formal:
                "Affirmative. Please utilize the elevator or escalator to ascend one level. Upon exiting, proceed to your right and walk approximately 200 feet. I will activate my vehicle's headlights as a signal when I identify your presence. I am positioned in the third row.",
            },
          },
          {
            speaker: "you",
            textEn: "Okay, I see a blue car flashing its lights. Is that you? The app says your car is a Camry.",
            textZh: "好的，我看到一辆蓝色车在闪灯。是你吗？App 上显示你的车是凯美瑞。",
            culturalNote: "上网约车前一定要核对车型、颜色、车牌和司机照片，确保安全。",
            casualVersion: "Okay, see a blue car flashing its lights. That you? App says it's a Camry.",
            commonMistake: {
              wrong: "Okay, I see a blue car flashing its lights. Is that you? The app say your car is Camry.",
              correct: "Okay, I see a blue car flashing its lights. Is that you? The app says your car is a Camry.",
              explanation: '"says"是第三人称单数，Camry前需加冠词 a。',
            },
            formalityVariants: {
              casual: "Okay, blue car flashing lights. That you? App says Camry.",
              standard: "Okay, I see a blue car flashing its lights. Is that you? The app says your car is a Camry.",
              formal:
                "I observe a blue vehicle indicating its presence with flashing lights. Could you confirm if that is your vehicle? My application indicates your vehicle is a Camry model.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "That's me! Can you confirm your name for me? I just need to make sure I've got the right passenger.",
            textZh: "是我！能确认一下你的名字吗？我要确认接对了人。",
            keyPhrases: [{ en: "confirm your name", zh: "确认你的名字" }],
            culturalMeaning:
              "这是网约车的安全流程，司机和乘客互相确认身份，防止上错车。千万不要主动先说名字，让司机来问。",
            alternativeExpressions: [
              {
                textEn: "Yep, that's me! What's the name on the ride? Just wanna make sure.",
                textZh: "对，是我！这单叫车的是什么名字？确认一下。",
                actionHint: "告诉司机你的名字",
                frequency: "common",
              },
              {
                textEn: "Right here! Before you hop in — can I get your name? Gotta verify it matches the app.",
                textZh: "就是这里！上车前——能告诉我你的名字吗？要跟App上的核对一下。",
                actionHint: "配合身份验证",
                frequency: "occasional",
              },
            ],
            casualVersion: "That's me! Can you confirm your name? Just gotta make sure I got the right passenger.",
            culturalNote: "美国网约车司机常核对姓名。",
            commonMistake: {
              wrong: "That's me! Can you confirm your name? I just need to make sure is right passenger.",
              correct:
                "That's me! Can you confirm your name for me? I just need to make sure I've got the right passenger.",
              explanation: "句子需要主语 I，且动词要用正确的形式。",
            },
            formalityVariants: {
              casual: "Yep, that's me! Confirm your name? Just making sure I got the right person.",
              standard:
                "That's me! Can you confirm your name for me? I just need to make sure I've got the right passenger.",
              formal:
                "Indeed, that is my vehicle. May I kindly request you state your name for confirmation? It is essential to ensure I am collecting the correct passenger for this trip.",
            },
          },
          {
            speaker: "you",
            textEn: "I'm Wang. Can you help me with my suitcase? It's pretty heavy.",
            textZh: "我姓王。能帮我搬一下行李箱吗？挺重的。",
            culturalNote: "在美国，让网约车司机帮忙拿行李是很常见的，尤其是在机场。司机通常都会乐意帮助。",
            casualVersion: "I'm Wang. Help me with my suitcase? It's heavy.",
            commonMistake: {
              wrong: "I'm Wang. Can you help my suitcase? It's pretty heavy.",
              correct: "I'm Wang. Can you help me with my suitcase? It's pretty heavy.",
              explanation: '帮助某人做某事常用"help someone with something"。',
            },
            formalityVariants: {
              casual: "Wang. Help with my suitcase? It's heavy.",
              standard: "I'm Wang. Can you help me with my suitcase? It's pretty heavy.",
              formal:
                "My name is Wang. Would you be able to assist me with my luggage? It is quite substantial in weight.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Of course! Pop the trunk — oh wait, let me get that for you. There you go. All set? The GPS says we'll be at your hotel in about 35 minutes.",
            textZh: "当然！打开后备箱——等等，我来帮你。好了。都准备好了？GPS 显示大约35分钟到你的酒店。",
            keyPhrases: [
              { en: "pop the trunk", zh: "打开后备箱" },
              { en: "all set", zh: "都准备好了" },
            ],
            vocabNotes: {
              "pop the trunk": {
                meaningInContext: "在这句话里表示：打开汽车后备箱放行李",
                similarUsage:
                  "类似用法：Can you pop the hood? I need to check the engine.（能打开引擎盖吗？我要检查发动机）",
              },
            },
            localVariants: { "en-US": "pop the trunk", "en-GB": "open the boot", "en-AU": "open the boot" },
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing! Let me get that for you — I'll put it in the trunk. All good? GPS says about 35 minutes to your hotel.",
                textZh: "没问题！我来帮你——放后备箱。都好了吗？GPS显示大约35分钟到你的酒店。",
                actionHint: "确认目的地",
                frequency: "common",
              },
              {
                textEn:
                  "No problem, I got it. Hop in and we'll get going. Should be about 35 minutes to the hotel, give or take.",
                textZh: "没问题，我来。上车吧，我们出发。到酒店大约35分钟，差不多。",
                actionHint: "上车出发",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Course! Pop the trunk — oh wait, lemme get that. There ya go. All set? GPS says we'll be there in 'bout 35.",
            culturalNote: "“Pop the trunk” 是打开后备箱。",
            formalityVariants: {
              casual:
                "Course! Pop the trunk — wait, lemme get it. There ya go. All set? GPS says ~35 mins to your hotel.",
              standard:
                "Of course! Pop the trunk — oh wait, let me get that for you. There you go. All set? The GPS says we'll be at your hotel in about 35 minutes.",
              formal:
                "Certainly. Please open the trunk compartment — my apologies, allow me to handle that for you. There you are. Is everything situated? The navigation system indicates an approximate 35-minute travel time to your hotel.",
            },
          },
          {
            speaker: "you",
            textEn: "All set. Can we take the highway? I'm in a bit of a rush.",
            textZh: "好了。能走高速吗？我有点赶时间。",
            culturalNote: "向网约车司机提出路线要求是很常见的，只要合理，司机通常会满足。",
            casualVersion: "All set. Can we take the highway? Kinda rushing.",
            commonMistake: {
              wrong: "All set. Can we take the highway? I am rush.",
              correct: "All set. Can we take the highway? I'm in a bit of a rush.",
              explanation: '表达“赶时间”的固定短语是 "in a rush"。',
            },
            formalityVariants: {
              casual: "All set. Highway good? Kinda rushing.",
              standard: "All set. Can we take the highway? I'm in a bit of a rush.",
              formal:
                "Everything is prepared. Would it be possible for us to utilize the highway? I am somewhat pressed for time.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Sure, the highway should be faster this time of day. Just a heads up — there might be a toll of about $3. It'll show up on your Uber receipt automatically.",
            textZh: "好的，这个时间走高速应该更快。提前说一下——可能有大约3美元的过路费。会自动显示在你的 Uber 账单上。",
            keyPhrases: [
              { en: "toll", zh: "过路费" },
              { en: "heads up", zh: "提前说一下" },
              { en: "receipt", zh: "账单/收据" },
            ],
            literalMeaning: '"heads up" 字面意思是 "抬起头来"，实际表示 "提前提醒你一下"',
            alternativeExpressions: [
              {
                textEn:
                  "No problem, highway it is. FYI there's a $3 toll — it'll get added to your fare automatically.",
                textZh: "没问题，走高速。提一下有3美元过路费——会自动加到你的车费里。",
                actionHint: "过路费自动计入",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, this time of day highway's your best bet. Small toll though, like 3 bucks. Shows up on your receipt.",
                textZh: "好的，这个时间走高速最快。有个小过路费，大约3块。会显示在你的收据上。",
                actionHint: "不需要额外付费",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, highway's probably faster now. Heads up — might be like a $3 toll. Shows up on your Uber receipt automatically.",
            culturalNote: "美国网约车通常会提前告知过路费，且会自动计入账单。",
            formalityVariants: {
              casual: "Yeah, highway's faster right now. Heads up — possible $3 toll. Auto-shows on your Uber receipt.",
              standard:
                "Sure, the highway should be faster this time of day. Just a heads up — there might be a toll of about $3. It'll show up on your Uber receipt automatically.",
              formal:
                "Certainly, the highway is likely to be the more expeditious route at this hour. Please be advised, there may be a toll charge of approximately three dollars, which will be automatically reflected on your Uber receipt.",
            },
          },
          {
            speaker: "you",
            textEn: "No problem. I'll rate you five stars for being so helpful. Thanks!",
            textZh: "没问题。你这么热心我给你五星评价。谢谢！",
            culturalNote: "在美国乘坐网约车，五星好评对司机非常重要。满意的话建议在 App 上给五星并留小费。",
            casualVersion: "No prob. Five stars for being so helpful. Thanks!",
            commonMistake: {
              wrong: "No problem. I'll rate you five star for being so helpful. Thanks!",
              correct: "No problem. I'll rate you five stars for being so helpful. Thanks!",
              explanation: '"five stars" 是复数形式。',
            },
            formalityVariants: {
              casual: "No prob. Five stars for being super helpful. Thanks!",
              standard: "No problem. I'll rate you five stars for being so helpful. Thanks!",
              formal:
                "That is perfectly acceptable. I will certainly provide a five-star rating in appreciation of your exceptional assistance. Thank you.",
            },
          },
        ],
      },
      // --- Flow 2: 投诉和纠纷 ---
      {
        id: "rideshare-complaint",
        titleZh: "乘车投诉",
        titleEn: "Rideshare Complaint",
        description: "对网约车的路线、收费或服务提出投诉和争议",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I think you took a wrong turn. The GPS shows a shorter route going straight, but you turned onto the highway.",
            textZh: "不好意思，我觉得你走错路了。GPS 显示直行更近，但你上了高速。",
            culturalNote: "乘客质疑路线是可接受的，但通常会礼貌地提出疑问，司机也会给出解释。",
            casualVersion:
              "Uh, hey, I think you went the wrong way. My GPS says straight's quicker, but you just got on the highway.",
            commonMistake: {
              wrong: "I think you are wrong way.",
              correct: "I think you took a wrong turn.",
              explanation: "“走错路”常用 take a wrong turn，不是 are wrong way。",
            },
            formalityVariants: {
              casual:
                "Hey, I think you went the wrong way. My GPS says straight's quicker, but you got on the highway.",
              standard:
                "Excuse me, I think you took a wrong turn. The GPS shows a shorter route going straight, but you turned onto the highway.",
              formal:
                "Pardon me, I believe we may have taken an incorrect route. My navigation system indicates a more direct path, yet we appear to have entered the highway.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "I know this area well — the direct route has heavy construction right now. There's a road closure on 5th Street. The highway actually saves about 10 minutes even though it looks longer on the map.",
            textZh: "我对这一带很熟——直行的路现在在大修。第五街封路了。走高速虽然地图上看着远，但实际省大约10分钟。",
            commonMistake: {
              wrong: "I know this area very well",
              correct: "I know this area well",
              explanation: "口语中“very”常省略，直接说“know it well”更自然",
            },
            keyPhrases: [
              { en: "construction", zh: "施工" },
              { en: "road closure", zh: "封路" },
            ],
            alternativeExpressions: [
              {
                textEn: "Trust me, the main road is a parking lot right now. This way is faster.",
                textZh: "相信我，主路现在堵成停车场了。这条路更快。",
                actionHint: "可以查看手机地图确认",
                frequency: "common",
              },
            ],
            casualVersion:
              "Nah, I know this spot. The direct way's got a ton of construction. 5th Street's closed. Highway actually saves like 10 mins even if it looks longer on the map.",
            formalityVariants: {
              casual:
                "Nah, I know this area. The direct way's got a bunch of construction, 5th Street's closed. Highway actually saves like 10 minutes, even if it looks longer on the map.",
              standard:
                "I know this area well — the direct route has heavy construction right now. There's a road closure on 5th Street. The highway actually saves about 10 minutes even though it looks longer on the map.",
              formal:
                "I am quite familiar with this locale. The more direct thoroughfare is currently experiencing significant construction. Specifically, there is a road closure on 5th Street. The highway, despite appearing more circuitous on the map, actually expedites travel by approximately ten minutes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Okay, I see the construction on my map now. Sorry about that. But the fare seems to be going up fast — will Uber adjust it if the route is longer?",
            textZh: "好的，我在地图上看到施工了。抱歉。但费用涨得挺快——路线变长的话 Uber 会调整吗？",
            culturalNote: "许多初次使用Uber的国际旅客会误解其动态定价和路线变更的费用调整机制。",
            casualVersion:
              "Okay, yeah, I see the construction now. My bad. But the fare's jumping pretty quick — will Uber adjust it for a longer route?",
            commonMistake: {
              wrong: "My map shows construction. But the fare is raising fast.",
              correct: "I see the construction on my map now. But the fare seems to be going up fast.",
              explanation: "表达“涨价”常用 go up 或 increase，而 raise 是及物动词。",
            },
            formalityVariants: {
              casual:
                "Okay, I see the construction on my map now. My bad. But the fare's jumping up quick — will Uber adjust it if it's a longer route?",
              standard:
                "Okay, I see the construction on my map now. Sorry about that. But the fare seems to be going up fast — will Uber adjust it if the route is longer?",
              formal:
                "Understood. I can now observe the construction on my navigation. My apologies for the oversight. However, the fare appears to be increasing rather rapidly — will Uber make an adjustment if the route taken is indeed longer?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Uber uses upfront pricing — meaning the price you saw when you booked is what you'll pay, regardless of the route. So even though this route is technically longer, your fare won't change. No worries.",
            textZh:
              "Uber 用的是预估定价——就是说你下单时看到的价格就是最终价格，不管走哪条路。所以虽然这条路技术上更远，你的费用不会变。放心。",
            commonMistake: {
              wrong: "Uber use upfront pricing",
              correct: "Uber uses upfront pricing",
              explanation: "主谓一致错误，第三人称单数动词要加s",
            },
            culturalNote: "Uber的预估定价模式（upfront pricing）对不熟悉此服务的国际旅客来说常是一个困惑点，即价格通常在预订时确",
            keyPhrases: [
              { en: "upfront pricing", zh: "预估定价" },
              { en: "regardless of", zh: "不管/无论" },
              { en: "fare", zh: "费用/车费" },
            ],
            vocabNotes: {
              "upfront pricing": {
                meaningInContext: "在这句话里表示：在你下单叫车时就确定好的固定价格，不会因为实际路线变化而改变",
                similarUsage:
                  "类似用法：We offer upfront pricing with no hidden fees.（我们提供预估定价，没有隐藏费用）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Don't worry — Uber locks in the price when you book. Doesn't matter which route we take, you pay what it said.",
                textZh: "别担心——Uber下单时就锁定价格了。不管走哪条路，你付的就是当时显示的。",
                actionHint: "确认App上的价格",
                frequency: "common",
              },
              {
                textEn:
                  "The price is fixed from when you booked. Longer route, shorter route — same fare. So you're good.",
                textZh: "价格从你下单就固定了。走远走近——都一个价。所以放心。",
                actionHint: "不用担心绕路加价",
                frequency: "common",
              },
            ],
            casualVersion:
              "Uber's got upfront pricing – so whatever price you saw when you booked, that's what you're paying, route doesn't matter. So yeah, even though this way's longer, your fare won't change. Don't sweat it.",
            formalityVariants: {
              casual:
                "Uber's upfront pricing – so whatever you saw when you booked, that's what you pay, route doesn't matter. So yeah, even if this way's longer, your fare won't change. No worries.",
              standard:
                "Uber uses upfront pricing — meaning the price you saw when you booked is what you'll pay, regardless of the route. So even though this route is technically longer, your fare won't change. No worries.",
              formal:
                "Uber operates on an upfront pricing model, which means the fare displayed at the time of your booking is the definitive amount you will be charged, irrespective of the actual route taken. Therefore, despite this route being technically longer, your stipulated fare will remain unchanged. Please be assured.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. One more thing — do I tip you through the app or in cash?",
            textZh: "明白了。还有一个问题——小费是在 App 上给还是现金？",
            culturalNote: "在美国，给服务人员小费非常普遍且重要。询问小费方式是很常见且得体的。",
            casualVersion: "Gotcha. So, tip through the app or cash?",
            commonMistake: {
              wrong: "I give you tip in app or cash?",
              correct: "Do I tip you through the app or in cash?",
              explanation: '询问如何给小费常用 "tip (someone) through the app" 或 "tip in cash"。',
            },
            formalityVariants: {
              casual: "Got it. So, app or cash for the tip?",
              standard: "Got it. One more thing — do I tip you through the app or in cash?",
              formal:
                "Understood. One additional query: would you prefer I provide the gratuity via the application or in physical currency?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Either way works! You can tip in the app after the ride ends — you'll get a prompt. Or cash is always appreciated too. Whatever is easier for you.",
            textZh: "都可以！行程结束后 App 上会有提示让你给小费。现金也欢迎。你方便就行。",
            commonMistake: {
              wrong: "Either way is fine",
              correct: "Either way works!",
              explanation: "“Either way works”在口语中更自然，简洁且常用",
            },
            keyPhrases: [
              { en: "prompt", zh: "提示" },
              { en: "appreciated", zh: "感谢/欢迎" },
            ],
            culturalNote: "美国网约车小费一般是车费的15-20%。App 上通常有预设金额可以选。不给也不违规，但算是礼貌。",
            alternativeExpressions: [
              {
                textEn:
                  "Up to you! The app will ask you after the trip, or I'm happy with cash too. No pressure either way.",
                textZh: "随你！行程结束后App会问你，给现金也行。不勉强。",
                actionHint: "行程结束后App会提示",
                frequency: "common",
              },
              {
                textEn: "Both work! Most people just tip through the app when it pops up. Cash is cool too though.",
                textZh: "都可以！大部分人在App弹出来的时候给。现金也没问题。",
                actionHint: "选自己方便的方式",
                frequency: "common",
              },
            ],
            casualVersion: "Either's fine! App'll prompt you after the ride. Cash is cool too. Whichever's easiest.",
            formalityVariants: {
              casual:
                "Either way's fine! You can tip in the app after, it'll prompt you. Cash is good too. Whichever's easiest.",
              standard:
                "Either way works! You can tip in the app after the ride ends — you'll get a prompt. Or cash is always appreciated too. Whatever is easier for you.",
              formal:
                "Both options are perfectly acceptable. You may process a tip through the application following the completion of the journey, where you will receive a notification. Alternatively, a cash gratuity is also always welcomed. Please choose whichever method is most convenient for you.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll tip in the app. By the way, the app is charging me a 'surge price' — $15 extra. Is that normal?",
            textZh: "我在 App 上给。顺便问一下，App 收了我一笔'动态加价'——多了15美元。这正常吗？",
            culturalNote: "动态加价（surge pricing）对不熟悉此机制的国际旅客来说常是一个疑问，因其在许多国家不常见。",
            casualVersion:
              "I'll just do the app. Btw, the app's charging me a 'surge price' — like 15 bucks extra. Is that normal?",
            commonMistake: {
              wrong: "The app charges me a surge price $15 more.",
              correct: "The app is charging me a 'surge price' — $15 extra.",
              explanation: "表达“多收钱”或“额外收费”常用 charge extra 或 include extra。",
            },
            formalityVariants: {
              casual:
                "I'll just tip in the app. Hey, the app's charging me a 'surge price' — 15 bucks extra. Is that normal?",
              standard:
                "I'll tip in the app. By the way, the app is charging me a 'surge price' — $15 extra. Is that normal?",
              formal:
                "I will utilize the application for the gratuity. Incidentally, the application is indicating a 'surge price' amounting to an additional fifteen dollars. Is this a typical occurrence?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Yeah, surge pricing happens when there's high demand — like after a big event or during rush hour. The airport is always busy at this time. You can dispute it through the app's help section if you think it's unfair, but honestly this time of day it's pretty standard.",
            textZh:
              "是的，需求大的时候就会动态加价——比如大活动散场后或高峰期。这个时间机场总是很忙。如果你觉得不合理，可以在 App 的帮助中心申诉，但说实话这个时间段加价挺正常的。",
            culturalNote: "美国网约车有动态加价，高峰期很常见。可投诉但可能无用",
            commonMistake: {
              wrong: "Surge pricing happens when demand is high",
              correct: "Surge pricing happens when there's high demand",
              explanation: "用 there's high demand 更自然，避免直接翻译",
            },
            keyPhrases: [
              { en: "surge pricing", zh: "动态加价" },
              { en: "high demand", zh: "需求大" },
              { en: "dispute", zh: "申诉/争议" },
            ],
            vocabNotes: {
              "surge pricing": {
                meaningInContext: "在这句话里表示：在用车高峰期，Uber/Lyft 自动提高价格以应对大量需求",
                similarUsage:
                  "类似用法：Surge pricing doubled the fare during the concert.（演唱会期间动态加价让车费翻了一倍）",
              },
            },
            literalMeaning: '"surge" 字面意思是 "涌浪/激增"，在打车App里表示需求突然大增导致的加价',
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, that's surge — it kicks in when everyone's trying to get a ride at the same time. You can complain in the app but honestly it's normal for the airport.",
                textZh: "对，那是动态加价——大家同时叫车就会触发。你可以在App里投诉，但机场这个价挺正常的。",
                actionHint: "可以在App里申诉",
                frequency: "common",
              },
              {
                textEn:
                  "That's how it works — more riders than drivers and the price goes up. Try waiting 10-15 minutes next time, surge usually drops.",
                textZh: "就是这样——叫车的人比司机多价格就上去了。下次试试等10-15分钟，加价通常会降。",
                actionHint: "下次等加价降再叫",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Yeah, surge pricing's just a thing when demand's high — like after a huge event or rush hour. Airport's always packed now. You can dispute it in the app if you think it's unfair, but honestly, this time of day, it's pretty normal.",
            formalityVariants: {
              casual:
                "Yeah, surge pricing happens with high demand — like after a big event or during rush hour. Airport's always busy now. You can dispute it in the app's help if you think it's unfair, but honestly, this time of day it's pretty standard.",
              standard:
                "Yeah, surge pricing happens when there's high demand — like after a big event or during rush hour. The airport is always busy at this time. You can dispute it through the app's help section if you think it's unfair, but honestly this time of day it's pretty standard.",
              formal:
                "Indeed, surge pricing is typically implemented during periods of heightened demand, such as post-event congestion or peak commuting hours. The airport, in particular, experiences significant activity at this time. While you retain the option to dispute the charge via the application's support interface if you deem it unjust, it is quite common for pricing to reflect this premium during these hours.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I see. Next time I'll check for surge before booking. We're almost there — you can drop me off at the main entrance.",
            textZh: "明白了。下次下单前我先看看有没有加价。快到了——在正门放我下车就行。",
            casualVersion:
              "Gotcha. Next time I'll check for surge before booking. We're almost there — just drop me at the main entrance.",
            commonMistake: {
              wrong: "Next time I will check surge before booking.",
              correct: "Next time I'll check for surge before booking.",
              explanation: "表达“查看是否有”时，check 后面常接 for。",
            },
            formalityVariants: {
              casual:
                "Got it. Next time I'll check for surge before booking. Almost there — just drop me at the main entrance.",
              standard:
                "I see. Next time I'll check for surge before booking. We're almost there — you can drop me off at the main entrance.",
              formal:
                "Understood. I will ensure to verify for surge pricing prior to future bookings. We are nearing our destination; kindly disembark me at the primary entrance.",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Here you are — the main entrance of the Marriott. Let me help you with your luggage. Have a great stay!",
            textZh: "到了——万豪酒店正门。我帮你拿行李。祝你住得愉快！",
            keyPhrases: [
              { en: "drop me off", zh: "放我下车" },
              { en: "have a great stay", zh: "祝你住得愉快" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here we are — Marriott front door. Let me pop the trunk for your bags. Enjoy your stay!",
                textZh: "到了——万豪正门。我开后备箱帮你拿行李。住得愉快！",
                actionHint: "下车前检查随身物品",
                frequency: "common",
              },
              {
                textEn: "This is you — main entrance right here. I'll grab your luggage. Have a good one!",
                textZh: "到了——正门就在这。我帮你拿行李。祝一切顺利！",
                actionHint: "别忘了给评价",
                frequency: "common",
              },
            ],
            casualVersion: "Alright, here we are — Marriott main entrance. Lemme grab your bags. Have a good stay!",
            formalityVariants: {
              casual: "Here we go — Marriott main entrance. Let me help with your bags. Have a great stay!",
              standard:
                "Here you are — the main entrance of the Marriott. Let me help you with your luggage. Have a great stay!",
              formal:
                "We have arrived at your destination: the main entrance of the Marriott. Allow me to assist you with your luggage. I wish you a most pleasant stay!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 长途大巴/城际巴士 ====================
  {
    id: "transport-14",
    category: "transport",
    titleZh: "城际大巴",
    titleEn: "Intercity Bus",
    description: "乘坐 Greyhound 等城际大巴的购票、候车和乘车全流程",
    otherRole: "车站工作人员",
    otherRoleIcon: "bus",
    flows: [
      // --- Flow 1: 买票和候车 ---
      {
        id: "intercity-booking",
        titleZh: "购票候车",
        titleEn: "Booking & Waiting",
        description: "在城际大巴站购票、了解路线和候车流程",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to buy a ticket to Boston. What's the next departure?",
            textZh: "你好，我想买一张去波士顿的票。最近一班是什么时候？",
            culturalNote: "中国人在问话前常用“请问”，美国则更直接，可以说“Hi”或直接切入主题。",
            casualVersion: "Hey, need a ticket to Boston. When's the next one leave?",
            commonMistake: {
              wrong: "I want to buy a ticket to Boston.",
              correct: "I'd like to buy a ticket to Boston.",
              explanation: "“I want” 语气生硬，用 “I'd like” 更礼貌客气。",
            },
            formalityVariants: {
              casual: "Hey, need a ticket to Boston. When's the next bus?",
              standard: "Hi, I'd like to buy a ticket to Boston. What's the next departure?",
              formal:
                "Good morning/afternoon, I'd like to purchase a ticket to Boston, please. Could you inform me of the next available departure time?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The next bus to Boston leaves at 2:30 PM — that's in about an hour. It's a direct service, no transfers. The ride is approximately 4 hours and 15 minutes. One way or round trip?",
            textZh: "下一班去波士顿的2点30分出发——大约一小时后。直达车，不用换乘。车程大约4小时15分钟。单程还是往返？",
            keyPhrases: [
              { en: "departure", zh: "出发" },
              { en: "direct service", zh: "直达车" },
              { en: "no transfers", zh: "不用换乘" },
              { en: "one way or round trip", zh: "单程还是往返" },
            ],
            alternativeExpressions: [
              {
                textEn: "Next one out is at 2:30 — nonstop to Boston. About four hours. Need a return ticket too?",
                textZh: "下一班2:30——直达波士顿。大约四小时。需要回程票吗？",
                actionHint: "告知单程还是往返",
                frequency: "common",
              },
            ],
            casualVersion:
              "Next bus to Boston's at 2:30 PM, so in about an hour. Direct, no transfers. Ride's around 4 hours, 15. One way or round trip?",
            formalityVariants: {
              casual:
                "Next Boston bus is 2:30 PM, 'bout an hour. Direct, no transfers. Like 4 hours 15. One way or round trip?",
              standard:
                "The next bus to Boston leaves at 2:30 PM — that's in about an hour. It's a direct service, no transfers. The ride is approximately 4 hours and 15 minutes. One way or round trip?",
              formal:
                "The subsequent departure for Boston is scheduled for 2:30 PM, which is approximately one hour from now. This is a direct service, requiring no transfers. The estimated travel duration is 4 hours and 15 minutes. May I inquire if you require a one-way or round-trip ticket?",
            },
          },
          {
            speaker: "you",
            textEn: "One way, please. How much is it? And do you have different seat classes?",
            textZh: "单程。多少钱？有不同的座位等级吗？",
            casualVersion: "One way. How much? Any different seat types?",
            commonMistake: {
              wrong: "One way. How much money?",
              correct: "One way. How much is it?",
              explanation: "问价格直接说 “How much is it?” 或 “What's the price?” 更自然。",
            },
            formalityVariants: {
              casual: "One way. Price? Different seat types?",
              standard: "One way, please. How much is it? And do you have different seat classes?",
              formal:
                "A one-way ticket, if you please. Could you kindly inform me of the fare, and are there various seating classes available?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "We have Economy at $35 and Economy Extra at $52. Economy Extra gets you extra legroom, a guaranteed power outlet, and priority boarding. Both have free Wi-Fi and a restroom on board.",
            textZh:
              "经济座35美元，经济加宽座52美元。加宽座有更大的腿部空间、保证有电源插座和优先登车。两种都有免费Wi-Fi和车上卫生间。",
            commonMistake: {
              wrong: "Both have free Wi-Fi and toilet on board.",
              correct: "Both have free Wi-Fi and a restroom on board.",
              explanation: "Toilet在公共场合听起来不雅，一般用restroom或bathroom.",
            },
            keyPhrases: [
              { en: "Economy Extra", zh: "经济加宽座" },
              { en: "legroom", zh: "腿部空间" },
              { en: "power outlet", zh: "电源插座" },
              { en: "priority boarding", zh: "优先登车" },
              { en: "restroom on board", zh: "车上卫生间" },
            ],
            vocabNotes: {
              legroom: {
                meaningInContext: "在这句话里表示：座位前后之间的距离，决定你的腿伸不伸得开",
                similarUsage:
                  "类似用法：This airline has terrible legroom in economy class.（这个航空公司经济舱腿部空间很小）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Basic is 35 bucks, the upgrade is 52 — more legroom, an outlet, and you board first. Both have Wi-Fi and a bathroom.",
                textZh: "基础票35，升级版52——更大的腿部空间、有插座、优先上车。都有Wi-Fi和卫生间。",
                actionHint: "考虑是否值得升级",
                frequency: "common",
              },
              {
                textEn:
                  "Economy's $35, Economy Extra's $52. Extra gets you a power outlet and priority boarding. For four hours, might be worth it.",
                textZh: "经济座35，加宽座52。加宽座有电源插座和优先登车。四个小时的话可能值得。",
                actionHint: "长途建议升级",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Okay, Economy's 35, Economy Extra's 52. Extra gets you more legroom, a guaranteed power outlet, and you board first. Both have free Wi-Fi and a bathroom on the bus.",
            formalityVariants: {
              casual:
                "Economy's 35, Economy Extra's 52. Extra gets you legroom, power, and priority boarding. Both got free Wi-Fi, onboard bathroom.",
              standard:
                "We have Economy at $35 and Economy Extra at $52. Economy Extra gets you extra legroom, a guaranteed power outlet, and priority boarding. Both have free Wi-Fi and a restroom on board.",
              formal:
                "Certainly, we offer two fare options: Economy at $35 and Economy Extra at $52. The Economy Extra option provides additional legroom, an assured power outlet, and priority boarding. Both classes include complimentary Wi-Fi and access to an onboard restroom.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take Economy Extra — four hours is a long ride. Can I pick my seat?",
            textZh: "我要经济加宽座——四小时挺长的。能选座位吗？",
            casualVersion: "Yeah, I'll go with Economy Extra — four hours is a long time. Can I pick a seat?",
            commonMistake: {
              wrong: "Can I choose my seat?",
              correct: "Can I pick my seat?",
              explanation: "“pick my seat” 在口语中更常用，表示选择座位。",
            },
            formalityVariants: {
              casual: "Economy Extra for me — that's a long trip. Can I pick my spot?",
              standard: "I'll take Economy Extra — four hours is a long ride. Can I pick my seat?",
              formal:
                "I will opt for the Economy Extra class, as a four-hour journey is considerable. Am I permitted to select my seating preference?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "Seats are first come, first served, but with Economy Extra you board first, so you'll have your pick. I'd recommend getting in line about 15 minutes before departure. The boarding gate is Gate 7.",
            textZh: "座位是先到先得的，但经济加宽座优先上车，所以你可以先选。建议出发前15分钟开始排队。登车口在7号门。",
            commonMistake: {
              wrong: "Seats are first to come, first to get.",
              correct: "Seats are first come, first served.",
              explanation: "这是个固定短语，字面翻译容易出错。",
            },
            keyPhrases: [
              { en: "first come, first served", zh: "先到先得" },
              { en: "boarding gate", zh: "登车口" },
              { en: "get in line", zh: "排队" },
            ],
            literalMeaning: '"first come, first served" 字面意思是 "先来的先服务"，是英语中很常见的表达',
            alternativeExpressions: [
              {
                textEn:
                  "No assigned seats, but you board first with Extra so you'll get your pick. Line up at Gate 7 about 15 minutes early.",
                textZh: "没有指定座位，但加宽座先上车所以你可以随便选。提前15分钟去7号门排队。",
                actionHint: "提前去排队",
                frequency: "common",
              },
              {
                textEn:
                  "It's open seating — first on, best seat. With Economy Extra you get on before everyone else. Gate 7, be there 15 minutes ahead.",
                textZh: "自由选座——先上先选。加宽座比别人先上车。7号门，提前15分钟到。",
                actionHint: "先上车先选好座",
                frequency: "common",
              },
            ],
            casualVersion:
              "Seats are first come, first served, but since you're Economy Extra, you board first, so you'll get your pick. Just get in line 'bout 15 before. Boarding's Gate 7.",
            formalityVariants: {
              casual:
                "First come, first served for seats, but with Extra you board first, so you get your pick. Line up 'bout 15 before. Gate 7.",
              standard:
                "Seats are first come, first served, but with Economy Extra you board first, so you'll have your pick. I'd recommend getting in line about 15 minutes before departure. The boarding gate is Gate 7.",
              formal:
                "Seating is allocated on a first-come, first-served basis. However, as an Economy Extra passenger, you will be granted priority boarding, thus allowing you to select your preferred seat. I advise joining the boarding queue approximately 15 minutes prior to the scheduled departure. The designated boarding gate is Gate 7.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Where can I wait? Is there a waiting area with seating?",
            textZh: "明白了。在哪里等车？有候车区和座位吗？",
            casualVersion: "Got it. Where can I wait? Is there a waiting area with seats?",
            commonMistake: {
              wrong: "Is there a waiting room with seating?",
              correct: "Is there a waiting area with seating?",
              explanation: "“Waiting area” 更常用在公共交通场所，指开放空间。",
            },
            formalityVariants: {
              casual: "Got it. Where can I wait? Like, a waiting area with seats?",
              standard: "Got it. Where can I wait? Is there a waiting area with seating?",
              formal:
                "Understood. Could you please direct me to the designated waiting area? Is there seating available within that area?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "The main waiting area is right behind you — plenty of seats. There are also vending machines and a coffee shop on the left. Restrooms are down the hall. We'll announce boarding on the PA system about 10 minutes before departure.",
            textZh:
              "候车大厅就在你身后——座位很多。左边有自动售货机和一家咖啡店。卫生间在走廊尽头。出发前10分钟我们会在广播里通知登车。",
            commonMistake: {
              wrong: "We will tell you to board 10 minutes before departure.",
              correct: "We'll announce boarding 10 minutes before departure.",
              explanation: "告知登车用'announce boarding'更地道，'tell you to board'过于直白。",
            },
            keyPhrases: [
              { en: "vending machines", zh: "自动售货机" },
              { en: "PA system", zh: "广播系统" },
              { en: "announce boarding", zh: "通知登车" },
            ],
            vocabNotes: {
              "PA system": {
                meaningInContext: "在这句话里表示：Public Address system，公共广播系统，用来对全场播报通知",
                similarUsage:
                  "类似用法：The flight delay was announced over the PA system.（航班延误通过广播系统通知了）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Waiting area's right behind you. Coffee shop on the left, bathrooms down the hall. We'll call boarding over the speakers 10 minutes before.",
                textZh: "候车区就在你身后。左边有咖啡店，卫生间在走廊那头。出发前10分钟广播通知上车。",
                actionHint: "留意广播",
                frequency: "common",
              },
              {
                textEn:
                  "Have a seat right over there — plenty of room. There's snacks and coffee nearby. Listen for the announcement about 10 minutes before departure.",
                textZh: "就在那边坐——位子很多。附近有零食和咖啡。出发前10分钟注意听广播。",
                actionHint: "别走太远听广播",
                frequency: "common",
              },
            ],
            casualVersion:
              "Main waiting area's right behind ya — tons of seats. Vending machines and a coffee shop on the left too. Bathrooms are down the hall. We'll announce boarding over the loudspeaker 'bout 10 minutes before we leave.",
            formalityVariants: {
              casual:
                "Waiting area's right behind you — lots of seats. Vending machines and a coffee shop left. Restrooms down the hall. We'll announce boarding on the PA 'bout 10 before.",
              standard:
                "The main waiting area is right behind you — plenty of seats. There are also vending machines and a coffee shop on the left. Restrooms are down the hall. We'll announce boarding on the PA system about 10 minutes before departure.",
              formal:
                "The primary waiting area is located directly behind you, offering ample seating. Additionally, you will find vending machines and a coffee shop to your left. The restrooms are situated further down the hall. Boarding will be announced via the public address system approximately 10 minutes prior to departure.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — how much luggage can I bring?",
            textZh: "再问一个问题——能带多少行李？",
            casualVersion: "Another question — how much luggage can I bring on?",
            commonMistake: {
              wrong: "How many luggages can I bring?",
              correct: "How much luggage can I bring?",
              explanation: "“Luggage” 是不可数名词，不能用 “how many”，只能用 “how much”。",
            },
            formalityVariants: {
              casual: "Just one more — how much luggage can I bring?",
              standard: "One more question — how much luggage can I bring?",
              formal:
                "I have one additional inquiry, if you don't mind. What is the permissible allowance for luggage?",
            },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn:
              "You can bring one personal item on board — like a backpack — and one checked bag that goes underneath for free. Each additional checked bag is $20. Maximum weight is 50 pounds per bag.",
            textZh:
              "车上可以带一件随身物品——比如背包——还有一件免费托运行李放在车底。每件额外托运行李20美元。每件最大重量50磅（约23公斤）。",
            commonMistake: {
              wrong: "You can bring one carry-on on board.",
              correct: "You can bring one personal item on board.",
              explanation: "巴士上一般指personal item，而不是飞机上说的carry-on。",
            },
            keyPhrases: [
              { en: "personal item", zh: "随身物品" },
              { en: "checked bag", zh: "托运行李" },
              { en: "additional", zh: "额外的" },
              { en: "maximum weight", zh: "最大重量" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One carry-on like a backpack, plus one bag underneath for free. Extra bags are 20 bucks each. Keep it under 50 pounds.",
                textZh: "一个随身的比如背包，加一件免费放车底的。多的每件20美元。每件不超过50磅。",
                actionHint: "检查行李重量",
                frequency: "common",
              },
              {
                textEn:
                  "You get a personal item on board and one free checked bag in the hold. Anything extra is $20. Max 50 pounds per bag.",
                textZh: "车上带一个随身物品，车底免费放一件托运。额外的每件20美元。每件最重50磅。",
                actionHint: "超重需额外付费",
                frequency: "common",
              },
            ],
            casualVersion:
              "You get one personal item, like a backpack, on board, and one free checked bag underneath. Any extra checked bags are 20 bucks each. Max weight's 50 pounds a bag.",
            culturalNote: "美国对行李尺寸和重量规定很细，常常有额外收费。",
            formalityVariants: {
              casual:
                "One personal item on board (like a backpack), one free checked bag underneath. Extra checked bags are $20 each. 50 lbs max per bag.",
              standard:
                "You can bring one personal item on board — like a backpack — and one checked bag that goes underneath for free. Each additional checked bag is $20. Maximum weight is 50 pounds per bag.",
              formal:
                "You are permitted one personal item for carry-on, such as a backpack, and one complimentary checked bag to be stored beneath the coach. Any supplementary checked bags will incur a charge of $20 each. Please note that the maximum weight allowance is 50 pounds per bag.",
            },
          },
          {
            speaker: "you",
            textEn: "That works. I just have a backpack and one suitcase. Thank you — I'll head to the waiting area.",
            textZh: "够了。我就一个背包和一个行李箱。谢谢——我去候车区了。",
            commonMistake: {
              wrong: "Enough. I just have a backpack and one suitcase. Thanks, I go to the waiting area.",
              correct: "That works. I just have a backpack and one suitcase. Thank you — I'll head to the waiting area.",
              explanation: "“That works”比“Enough”更自然。“go to”在口语中常加“to the”。",
            },
            casualVersion:
              "Sounds good. Just got a backpack and one suitcase. Thanks! I'll head over to the waiting area now.",
            formalityVariants: {
              casual: "Perfect. Just a backpack and a suitcase. Thanks! See ya in the waiting area.",
              standard:
                "That works. I just have a backpack and one suitcase. Thank you — I'll head to the waiting area.",
              formal:
                "That is perfectly acceptable. I only have a backpack and a single suitcase. Thank you for your assistance; I shall now proceed to the waiting area.",
            },
          },
        ],
      },
      // --- Flow 2: 车上沟通 ---
      {
        id: "on-the-bus",
        titleZh: "车上沟通",
        titleEn: "On the Bus",
        description: "在长途大巴上与司机和乘客的沟通，处理中途停靠等情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Good afternoon, everyone. Welcome aboard the 2:30 service to Boston. The estimated arrival time is 6:45 PM. We'll make one rest stop in about two hours at the Hartford service plaza. The restroom is at the rear of the bus. Please keep your belongings with you at all times.",
            textZh:
              "大家下午好。欢迎乘坐2:30去波士顿的班车。预计到达时间6:45 PM。大约两小时后我们会在哈特福德服务区停靠一次。卫生间在车尾。请随时保管好个人物品。",
            culturalNote: "这种广播通知语气是美国特色，非常直接。",
            commonMistake: {
              wrong: "We will stop one time at the Hartford Service Plaza.",
              correct: "We'll make one stop at the Hartford Service Plaza.",
              explanation: "描述中途停靠点用'make a stop'，'stop one time'不太自然。",
            },
            keyPhrases: [
              { en: "welcome aboard", zh: "欢迎乘坐" },
              { en: "estimated arrival time", zh: "预计到达时间" },
              { en: "rest stop", zh: "休息站/服务区" },
              { en: "rear of the bus", zh: "车尾" },
              { en: "belongings", zh: "个人物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Afternoon, folks. Boston-bound, arriving around 6:45. We'll stop once in Hartford for a break. Restroom's in the back. Keep your stuff close.",
                textZh: "大家下午好。去波士顿，大约6:45到。中间在哈特福德停一次。卫生间在后面。东西看好。",
                actionHint: "记住到达时间",
                frequency: "common",
              },
              {
                textEn:
                  "Welcome aboard, everyone. ETA is 6:45 in Boston. One rest stop in about two hours. Bathroom's at the rear. Please keep an eye on your belongings.",
                textZh: "欢迎上车。预计6:45到波士顿。大约两小时后停一次。卫生间在车尾。请看好个人物品。",
                actionHint: "了解中途停靠安排",
                frequency: "common",
              },
            ],
            casualVersion:
              "Hey everyone, welcome on the 2:30 to Boston. We're looking at 6:45 PM arrival. We'll hit one rest stop in about two hours at the Hartford plaza. Bathroom's in the back. Keep your stuff with you, please.",
            formalityVariants: {
              casual:
                "Hey everyone, welcome on the 2:30 to Boston. We're looking at 6:45 PM arrival. We'll hit one rest stop in about two hours at the Hartford plaza. Bathroom's in the back. Keep your stuff with you, please.",
              standard:
                "Good afternoon, everyone. Welcome aboard the 2:30 service to Boston. Estimated arrival is 6:45 PM. We'll have one rest stop in about two hours at the Hartford service plaza. The restroom is at the rear of the bus. Please keep your belongings with you at all times.",
              formal:
                "Ladies and gentlemen, good afternoon. Welcome aboard the 2:30 service to Boston. Our anticipated arrival time is 6:45 PM. We will be making a single comfort stop in approximately two hours at the Hartford service plaza. Restroom facilities are located at the rear of the vehicle. We kindly request that you retain possession of your personal belongings at all times.",
            },
          },
          {
            speaker: "you",
            textEn: "Excuse me, is this seat taken? I have an Economy Extra ticket.",
            textZh: "不好意思，这个座位有人吗？我是经济加宽座的票。",
            casualVersion: "Hey, this seat open? I've got an Economy Extra ticket.",
            commonMistake: {
              wrong: "Is this seat empty?",
              correct: "Is this seat taken?",
              explanation: '"taken"或"free"更自然，"empty"虽能理解但较少用。',
            },
            formalityVariants: {
              casual: "Hey, this seat open? Got an Economy Extra ticket.",
              standard: "Excuse me, is this seat taken? I have an Economy Extra ticket.",
              formal:
                "Pardon me, is this particular seat currently occupied? I hold a ticket for the Economy Extra seating section.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "No, it's free. Go ahead. Are you heading to Boston too? The seats in this section recline a bit more — just push the button on the armrest.",
            textZh: "没有人，坐吧。你也去波士顿吗？这个区域的座位可以多倾斜一些——按扶手上的按钮就行。",
            commonMistake: {
              wrong: "No, no one. Sit down. Are you going to Boston too?",
              correct: "No, it's not. Have a seat. Are you headed to Boston too?",
              explanation: "直接说'no one'不自然，'it's not'指代座位。'Have a seat'比'sit down'更客气。",
            },
            keyPhrases: [
              { en: "is this seat taken", zh: "这个座位有人吗" },
              { en: "recline", zh: "倾斜/放倒" },
              { en: "armrest", zh: "扶手" },
            ],
            alternativeExpressions: [
              {
                textEn: "Nope, go for it. Heading to Boston? These seats recline more — hit the button on the arm.",
                textZh: "没人，坐吧。也去波士顿？这些座位能多倾斜一些——按扶手上的按钮。",
                actionHint: "试试座位倾斜功能",
                frequency: "common",
              },
              {
                textEn:
                  "All yours! Yeah, Boston too. Pro tip — there's a recline button on the armrest. These seats tilt back further.",
                textZh: "随便坐！对，也去波士顿。告诉你个窍门——扶手上有倾斜按钮。这些座位能更往后仰。",
                actionHint: "找到倾斜按钮",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Nah, it's free. Go for it. Boston-bound? These seats here recline a little more – just hit the button on the armrest.",
            formalityVariants: {
              casual:
                "Nope, it's open. Take it. You going to Boston? These seats recline more – button's on the armrest.",
              standard:
                "No, it's free. Go ahead. Are you heading to Boston too? The seats in this section recline a bit more — just push the button on the armrest.",
              formal:
                "No, this seat is indeed unoccupied. Please feel free to proceed. May I ask if your destination is also Boston? These particular seats offer a slightly greater degree of recline; simply press the button located on the armrest.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Yes, Boston. Is the Wi-Fi password posted somewhere? I can't seem to connect.",
            textZh: "谢谢！对，去波士顿。Wi-Fi 密码贴在哪里了？我好像连不上。",
            casualVersion: "Thanks! Yeah, Boston. Is the Wi-Fi password anywhere? Can't get on.",
            commonMistake: {
              wrong: "Where is Wi-Fi password?",
              correct: "Is the Wi-Fi password posted somewhere?",
              explanation: '句子结构要完整，问密码在哪要用"posted"或"written"。',
            },
            formalityVariants: {
              casual: "Cheers! Yeah, Boston. Wi-Fi password anywhere? Can't connect.",
              standard: "Thanks! Yes, Boston. Is the Wi-Fi password posted somewhere? I can't seem to connect.",
              formal:
                "Thank you. Yes, I am indeed traveling to Boston. Could you please inform me if the Wi-Fi password is displayed anywhere? I am experiencing difficulty connecting.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "There's no password — just connect to 'GreyhoundWiFi' and accept the terms in your browser. It's a bit slow for streaming, but fine for messaging and email.",
            textZh: "没有密码——连上'GreyhoundWiFi'然后在浏览器里接受条款就行。看视频可能有点慢，但发消息和邮件没问题。",
            commonMistake: {
              wrong: "No password — connect 'Greyhound Wi-Fi'.",
              correct: "There's no password — just connect to 'Greyhound Wi-Fi'.",
              explanation: "说明没有密码用'There's no password'，更自然流畅。",
            },
            keyPhrases: [
              { en: "accept the terms", zh: "接受条款" },
              { en: "streaming", zh: "看视频/流媒体" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No password needed. Just connect to 'GreyhoundWiFi' and hit accept in your browser. Don't expect Netflix to work though.",
                textZh: "不用密码。连上'GreyhoundWiFi'在浏览器里点接受就行。别指望能看Netflix。",
                actionHint: "在浏览器里接受条款",
                frequency: "common",
              },
              {
                textEn:
                  "It's open — just pick GreyhoundWiFi from the list and agree to the terms. Good enough for texting, not great for videos.",
                textZh: "开放的——在列表里选GreyhoundWiFi然后同意条款。发消息够用，看视频不太行。",
                actionHint: "连上后打开浏览器",
                frequency: "common",
              },
            ],
            casualVersion:
              "No password – just hit 'GreyhoundWiFi' and accept the terms in your browser. It's kinda slow for streaming, but messages and email are fine.",
            formalityVariants: {
              casual:
                "No password. Just connect to 'GreyhoundWiFi' then accept terms in your browser. Might be slow for streaming, but good for messages/email.",
              standard:
                "There's no password — just connect to 'GreyhoundWiFi' and accept the terms in your browser. It's a bit slow for streaming, but fine for messaging and email.",
              formal:
                "There is no password required. Kindly connect to the network named 'GreyhoundWiFi' and then accept the terms and conditions within your web browser. While it may be somewhat insufficient for video streaming, it functions adequately for messaging and email correspondence.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, thanks. How long is the rest stop usually? I want to grab some food.",
            textZh: "明白了，谢谢。休息站一般停多久？我想买点吃的。",
            casualVersion: "Got it, thanks. How long's the rest stop usually? Wanna grab some food.",
            commonMistake: {
              wrong: "I want to buy some food.",
              correct: "I want to grab some food.",
              explanation: '"Grab some food"更自然地表示“随便吃点什么”。',
            },
            formalityVariants: {
              casual: "Okay, thanks. How long's the stop? Gotta grab food.",
              standard: "Got it, thanks. How long is the rest stop usually? I want to grab some food.",
              formal:
                "Understood, thank you. What is the typical duration of the rest stop? I intend to procure some refreshments.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Usually about 15 to 20 minutes. There's a food court at the Hartford plaza — McDonald's and Subway, I think. Just don't wander too far. The driver won't wait if you're late.",
            textZh: "一般15到20分钟。哈特福德服务区有美食广场——好像有麦当劳和赛百味。别走太远。迟到了司机不会等你的。",
            culturalNote: "美国巴士通常不等人，司机有严格的时间表。务必准时归队。",
            commonMistake: {
              wrong: "Usually 15-20 minutes. There is a food court. Don't be late.",
              correct: "Usually about 15 to 20 minutes. There's a food court. Don't wander too far. The driver won't wait for you.",
              explanation: "“Don't be late”不够具体，应说“Don't wander too far”或“don't miss the bus”。“wait you”应为“wait for you”。",
            },
            keyPhrases: [
              { en: "food court", zh: "美食广场" },
              { en: "wander too far", zh: "走太远" },
            ],
            culturalMeaning:
              "美国长途大巴在服务区停车时间有限，一定要注意时间。司机会在出发前按喇叭提醒，但迟到了真的会直接走。",
            alternativeExpressions: [
              {
                textEn:
                  "About 15-20 minutes. There's a McDonald's and Subway at the plaza. Just keep track of time — the bus leaves with or without you.",
                textZh: "大约15-20分钟。服务区有麦当劳和赛百味。注意时间——车不等人的。",
                actionHint: "设闹钟提醒",
                frequency: "common",
              },
              {
                textEn:
                  "It's a quick stop — 15, maybe 20 minutes. Grab food fast. Seriously, don't wander off. The driver will honk and go.",
                textZh: "很短的停靠——15到20分钟。赶紧买吃的。说真的，别乱跑。司机按喇叭就走。",
                actionHint: "抓紧时间买食物",
                frequency: "common",
              },
            ],
            casualVersion:
              "Usually 'round 15, 20 mins. There's a food court at the Hartford plaza – think there's a McDonald's and Subway. Just don't stray too far. Driver won't wait if you're late.",
            formalityVariants: {
              casual:
                "About 15-20 minutes. Food court at Hartford plaza – think McD's and Subway. Don't go too far. Driver leaves without you.",
              standard:
                "Usually about 15 to 20 minutes. There's a food court at the Hartford plaza — McDonald's and Subway, I think. Just don't wander too far. The driver won't wait if you're late.",
              formal:
                "Typically, the stop will be approximately 15 to 20 minutes in duration. There is a food court facility available at the Hartford service plaza, offering establishments such as McDonald's and Subway, to my knowledge. Please refrain from venturing too far from the bus. The driver will adhere to the schedule and will not be able to delay departure for late passengers.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Good to know! I'll set an alarm. By the way, do you know if the bus stops near the city center in Boston, or do I need to take another ride?",
            textZh: "谢谢提醒！我设个闹钟。对了，巴士在波士顿市中心附近停吗？还是需要再转车？",
            casualVersion:
              "Good to know! I'll set an alarm. Btw, does the bus stop near Boston city center, or do I gotta catch another ride?",
            commonMistake: {
              wrong: "Does the bus stop Boston city center?",
              correct: "Does the bus stop near the Boston city center?",
              explanation: '地点前加"near"或"at"等介词使表达更自然。',
            },
            formalityVariants: {
              casual: "Got it! Setting an alarm. So, does this bus stop downtown Boston, or do I need to transfer?",
              standard:
                "Good to know! I'll set an alarm. By the way, do you know if the bus stops near the city center in Boston, or do I need to take another ride?",
              formal:
                "That information is helpful, thank you. I will ensure to set an alarm. Incidentally, could you please advise if the bus terminates in proximity to the city center in Boston, or will further transportation be required?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "The bus station is South Station — right in downtown Boston. It's connected to the subway, so you can transfer to the Red Line or Silver Line from there. Very convenient, actually.",
            textZh: "巴士站是南站——就在波士顿市中心。连着地铁，可以从那里转红线或银线。其实很方便。",
            commonMistake: {
              wrong: "The bus station is South Station. It is in downtown Boston.",
              correct: "The bus station is South Station — right in downtown Boston.",
              explanation: "用破折号连接能让句子更流畅，更自然，'right in'强调位置。",
            },
            keyPhrases: [
              { en: "downtown", zh: "市中心" },
              { en: "connected to the subway", zh: "连着地铁" },
              { en: "transfer to", zh: "转乘" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You end up at South Station — smack in the middle of downtown. The T is right there — Red Line, Silver Line, whatever you need.",
                textZh: "终点站是南站——就在市中心正中间。地铁就在那——红线、银线，想转哪条都行。",
                actionHint: "到站后找地铁标志",
                frequency: "common",
              },
              {
                textEn:
                  "The bus drops you at South Station, which is downtown. It connects to the subway so getting around from there is easy.",
                textZh: "巴士把你放在南站，就是市中心。那里通地铁，之后出行很方便。",
                actionHint: "不需要再打车",
                frequency: "common",
              },
            ],
            casualVersion:
              "The bus station's South Station – right downtown Boston. It connects to the subway, so you can hop on the Red Line or Silver Line from there. Super convenient, actually.",
            formalityVariants: {
              casual:
                "It's South Station – right downtown. Connects to the subway; you can grab the Red or Silver Line from there. Pretty convenient.",
              standard:
                "The bus station is South Station — right in downtown Boston. It's connected to the subway, so you can transfer to the Red Line or Silver Line from there. Very convenient, actually.",
              formal:
                "The primary bus terminal is South Station, which is centrally located within downtown Boston. It offers direct connectivity to the subway system, allowing for transfers to the Red Line or Silver Line. It is, in fact, quite convenient.",
            },
          },
          {
            speaker: "you",
            textEn: "That's great. Thank you so much — you've been really helpful!",
            textZh: "太好了。非常感谢——你帮了大忙！",
            commonMistake: {
              wrong: "That's great. Thank you very much, you helped me a big busy!",
              correct: "That's great. Thank you very much — you've been a great help!",
              explanation: "“你帮了大忙”直译很奇怪，应使用固定表达“You've been a great help”。",
            },
            casualVersion: "Awesome. Thanks a ton – you've been a huge help!",
            formalityVariants: {
              casual: "Perfect. Thanks a lot – big help!",
              standard: "That's great. Thank you so much — you've been really helpful!",
              formal:
                "That is excellent news. I extend my sincere gratitude for your assistance; you have been exceptionally helpful.",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "No problem! If it's your first time in Boston, I'd recommend the Freedom Trail — it's a walking tour through the historic sites. Have a great trip!",
            textZh: "不客气！如果是第一次去波士顿，推荐自由之路——步行游览历史景点。旅途愉快！",
            culturalNote: "美国人很乐意分享旅行建议，这是友好的表现。",
            keyPhrases: [
              { en: "Freedom Trail", zh: "自由之路" },
              { en: "walking tour", zh: "步行游览" },
              { en: "historic sites", zh: "历史景点" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Anytime! First time in Boston? Definitely check out the Freedom Trail — it's a walking path through all the historic stuff. Have fun!",
                textZh: "不客气！第一次去波士顿？一定要去自由之路——是条步行路线穿过所有历史景点。玩得开心！",
                actionHint: "搜索自由之路路线",
                frequency: "common",
              },
              {
                textEn:
                  "No worries! If you get a chance, walk the Freedom Trail — best way to see the city. Enjoy Boston!",
                textZh: "不客气！有机会的话走一下自由之路——看城市最好的方式。享受波士顿！",
                actionHint: "提前规划游览路线",
                frequency: "common",
              },
            ],
            casualVersion:
              "No problem! First time in Boston? I'd say do the Freedom Trail – it's a walking tour of the historic spots. Have a good trip!",
            commonMistake: {
              wrong: "You are welcome!",
              correct: "No problem!",
              explanation: '"You are welcome!" 比较生硬，"No problem!"更自然亲切。',
            },
            formalityVariants: {
              casual:
                "Anytime! First time Boston? Definitely check out the Freedom Trail – it's a walk around the historic sites. Enjoy your trip!",
              standard:
                "No problem! If it's your first time in Boston, I'd recommend the Freedom Trail — it's a walking tour through the historic sites. Have a great trip!",
              formal:
                "You are most welcome. Should this be your inaugural visit to Boston, I would highly recommend the Freedom Trail, which is a comprehensive walking tour encompassing numerous historical landmarks. I wish you an enjoyable journey.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 电动滑板车/Scooter租赁 ====================
  {
    id: "transport-15",
    category: "transport",
    titleZh: "电动滑板车租赁",
    titleEn: "E-Scooter Rental",
    description: "在城市中使用 Lime、Bird 等共享电动滑板车的完整流程和遇到的问题",
    otherRole: "路人/客服",
    otherRoleIcon: "zap",
    flows: [
      // --- Flow 1: 第一次使用 ---
      {
        id: "first-scooter",
        titleZh: "第一次使用共享滑板车",
        titleEn: "First Time Using a Shared Scooter",
        description: "请路人帮忙了解如何使用共享电动滑板车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know how to use these scooters? I've never tried one before.",
            textZh: "不好意思，你知道怎么用这些滑板车吗？我从来没用过。",
            casualVersion: "Hey, you know how to use these scooters? Never used one before.",
            culturalNote: "美国人问路或求助时，常用 'Excuse me' 或 'Hi' 开头，后面直接提问即可，无需过多客套。",
            commonMistake: {
              wrong: "How to use these scooters?",
              correct: "Excuse me, do you know how to use these scooters?",
              explanation: "直接问 'How to use' 不够礼貌，需用 'Excuse me, do you know how to' 引出。",
            },
            formalityVariants: {
              casual: "Hey, you know how to use these scooters? Never used 'em.",
              standard: "Excuse me, do you know how to use these scooters? I've never used one before.",
              formal: "Pardon me, might you be able to explain how these scooters operate? I am unfamiliar with their use.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Sure! You need to download the Lime app first. Then you scan the QR code on the handlebars. It'll charge your credit card on file. The rate is usually $1 to unlock plus about 39 cents per minute.",
            textZh:
              "当然！你先下载 Lime App。然后扫车把上的二维码。会从你绑定的信用卡扣费。费用一般是1美元解锁加每分钟大约39美分。",
            casualVersion: "Yeah! Gotta get the Lime app first. Then just scan the QR code on the handlebars. It'll charge your card.",
            formalityVariants: {
              casual: "Yeah, you gotta download the Lime app first. Then scan the QR code on the handlebars. It'll charge your linked credit card.",
              standard: "Sure! You need to download the Lime app first. Then you scan the QR code on the handlebars. It will charge your linked credit card.",
              formal: "Certainly. You will first need to download the Lime application. Subsequently, you may scan the QR code located on the handlebars. This will then charge your designated credit card.",
            },
            keyPhrases: [
              { en: "QR code", zh: "二维码" },
              { en: "handlebars", zh: "车把" },
              { en: "credit card on file", zh: "绑定的信用卡" },
              { en: "unlock", zh: "解锁" },
              { en: "per minute", zh: "每分钟" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just download the app, add a payment method, and scan the code. It's super easy.",
                textZh: "下载App，添加支付方式，扫码就行。超简单。",
                actionHint: "先下载对应的App",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Okay, I downloaded the app. But it's asking for a US phone number to verify — I only have a Chinese number. Will that work?",
            textZh: "好的，App 下载好了。但要求输入美国手机号验证——我只有中国号码。能用吗？",
            casualVersion: "Alright, got the app. But it's asking for a US number to verify – I only got a Chinese one. Will that work?",
            culturalNote: "美国很多服务需要本地手机号验证，中国游客常遇到此问题。",
            commonMistake: {
              wrong: "But it needs US phone number.",
              correct: "But it's asking for a US phone number.",
              explanation: "缺少动词 'is' 和介词 'for'，以及冠词 'a' 会听起来不自然。",
            },
            formalityVariants: {
              casual: "Okay, got the app. But it wants a US number to verify — I only have a Chinese one. Will it work?",
              standard: "Okay, I downloaded the app. But it's asking for a US phone number to verify — I only have a Chinese number. Will it work?",
              formal: "I have successfully downloaded the application. However, it is requesting a U.S. mobile number for verification purposes. I only possess a Chinese mobile number; will this suffice?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "I think Lime accepts international numbers — try entering your Chinese number with the country code +86. If it doesn't work, you might be able to sign up with just your email. Or try Bird — that's another scooter company here, the black ones over there.",
            textZh:
              "我记得 Lime 接受国际号码——试试输入中国号码加国家代码 +86。如果不行的话，可能可以只用邮箱注册。或者试试 Bird——那边黑色的，另一个滑板车公司。",
            casualVersion: "Pretty sure Lime takes international numbers — just try putting in your Chinese number with the +86. If that doesn't work, maybe you can just register with email. Or try Bird — that black one over there, another scooter company.",
            formalityVariants: {
              casual: "Pretty sure Lime accepts international numbers — try entering your Chinese number with the +86 country code. If not, you might be able to register with just an email. Or check out Bird, that black one, another scooter company.",
              standard: "I think Lime accepts international numbers — try entering your Chinese number with the country code +86. If it doesn't work, you might be able to register with just an email. Alternatively, you could try Bird, which is that black scooter over there, another scooter company.",
              formal: "I believe Lime does accept international numbers; kindly attempt to enter your Chinese number, including the +86 country code. Should that prove unsuccessful, it may be possible to register using only an email address. Another option would be to consider Bird, the black scooter company located nearby.",
            },
            keyPhrases: [
              { en: "country code", zh: "国家代码" },
              { en: "international numbers", zh: "国际号码" },
              { en: "sign up", zh: "注册" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm pretty sure they take international numbers — just add +86 in front. If not, try email signup. Or use Bird, those black ones over there.",
                textZh: "我记得可以用国际号码——前面加+86。不行的话试试邮箱注册。或者用Bird，那边黑色的。",
                actionHint: "输入+86加手机号",
                frequency: "common",
              },
              {
                textEn:
                  "Try your Chinese number with the country code. Worst case, sign up with email. There's also Bird scooters around — the black ones.",
                textZh: "试试中国号码加国家代码。最差用邮箱注册。附近也有Bird滑板车——黑色的那种。",
                actionHint: "有备选方案",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "It worked with my Chinese number! Great. Now I've scanned the code and the scooter beeped. How do I ride it?",
            textZh: "中国号码可以用！太好了。二维码扫了，滑板车响了一声。怎么骑？",
            casualVersion: "My Chinese number worked! Sweet. Scanned the QR, scooter beeped. How do I ride it?",
            commonMistake: {
              wrong: "How ride it?",
              correct: "How do I ride it?",
              explanation: "疑问句中缺少助动词 'do' 和主语 'I'，听起来不完整。",
            },
            formalityVariants: {
              casual: "My Chinese number worked! Awesome. Scanned the QR, scooter beeped. So, how do I ride this thing?",
              standard: "It worked with my Chinese number! Great. Now I've scanned the QR code, and the scooter beeped. How do I ride it?",
              formal: "My Chinese number was successfully accepted! Excellent. I have scanned the QR code, and the scooter has emitted a confirmation sound. May I inquire how one operates it?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Put one foot on the platform and push off with the other foot to get started. Once you're moving, squeeze the throttle on the right handlebar to accelerate. The brake is on the left — squeeze gently. Don't go too fast at first!",
            textZh:
              "一只脚踩在踏板上，另一只脚蹬地起步。动起来以后，握右边车把上的油门加速。刹车在左边——轻轻握。刚开始别太快！",
            casualVersion: "Foot on the platform, push off with the other to get going. Once you're moving, twist the throttle on the right handlebar to speed up. Brake's on the left — just squeeze it gently. Don't go too fast at first!",
            formalityVariants: {
              casual: "Put one foot on, push off with the other. Once you're moving, twist the throttle on the right to speed up. Brake's on the left, just squeeze it easy. Don't go too fast, okay?",
              standard: "Put one foot on the platform and push off with the other foot to get started. Once you are moving, twist the throttle on the right handlebar to accelerate. The brake is on the left — squeeze it gently. Don't go too fast initially!",
              formal: "Place one foot upon the platform and propel yourself forward with the other foot to initiate movement. Once momentum is achieved, engage the throttle located on the right handlebar to accelerate. The braking mechanism is situated on the left — apply gentle pressure. It is advisable not to attain excessive speed initially.",
            },
            keyPhrases: [
              { en: "platform", zh: "踏板" },
              { en: "push off", zh: "蹬地起步" },
              { en: "throttle", zh: "油门" },
              { en: "accelerate", zh: "加速" },
              { en: "brake", zh: "刹车" },
            ],
            vocabNotes: {
              throttle: {
                meaningInContext: "在这句话里表示：滑板车车把上控制速度的旋转手柄或按钮，相当于汽车的油门",
                similarUsage: "类似用法：Ease up on the throttle when going downhill.（下坡时松开油门）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Step on with one foot, push off with the other to get going. Right hand is the gas, left is the brake. Easy does it at first!",
                textZh: "一只脚踩上去，另一只脚蹬地起步。右手是油门，左手是刹车。慢慢来！",
                actionHint: "先慢慢练习",
                frequency: "common",
              },
              {
                textEn:
                  "Kick off to start, then twist the throttle on the right to speed up. Brake's on the left — squeeze gently. Take it slow till you get the hang of it.",
                textZh: "蹬地起步，然后右边拧油门加速。刹车在左边——轻轻捏。找到感觉前慢点骑。",
                actionHint: "先在空地练习",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Where am I allowed to ride? Can I go on the sidewalk?",
            textZh: "明白了。我能在哪里骑？能骑上人行道吗？",
            casualVersion: "Okay, gotcha. Where can I ride? Sidewalks cool?",
            culturalNote: "美国滑板车通常不能上人行道，这与中国习惯不同，需特别注意。",
            commonMistake: {
              wrong: "Can I ride on sidewalk?",
              correct: "Can I go on the sidewalk?",
              explanation: "缺少冠词 'the' 会导致表达不自然。",
            },
            formalityVariants: {
              casual: "Got it. Where can I ride? Can I use the sidewalk?",
              standard: "Got it. Where am I allowed to ride? Can I go on the sidewalk?",
              formal: "Understood. Could you please inform me of the designated riding areas? Am I permitted to operate this on the sidewalk?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Actually, in most US cities you're supposed to ride in the bike lane or on the street — not on the sidewalk. Some areas have designated scooter lanes. And you should follow traffic signals just like a car. Oh, and helmets aren't required here but they're strongly recommended.",
            textZh:
              "其实在美国大多数城市，你应该骑在自行车道或马路上——不能骑上人行道。有些地方有专门的滑板车道。要像开车一样遵守交通信号灯。哦，这里不强制戴头盔但强烈建议戴。",
            casualVersion: "Nah, actually, in most US cities you gotta ride in the bike lane or street — no sidewalks. Some places have special scooter lanes. Gotta follow traffic lights like a car. Oh, helmets aren't mandatory here, but totally recommended.",
            commonMistake: {
              wrong: "You must ride in bike lane.",
              correct: "You should ride in the bike lane or street — not on the sidewalk.",
              explanation: "用 'must' 语气过强，不如 'should' 更自然；且 'not on the sidewalk' 更清晰。",
            },
            formalityVariants: {
              casual: "Nah, in most US cities you gotta ride in the bike lane or street, not sidewalks. Some spots have special scooter lanes. Treat traffic lights like a car. Helmets aren't required, but definitely wear one.",
              standard: "Actually, in most US cities you should ride in the bike lane or street — not on the sidewalk. Some places have dedicated scooter lanes. You must follow traffic signals like a car. Also, helmets aren't mandatory here, but highly recommended.",
              formal: "As a matter of fact, in the majority of U.S. municipalities, you are expected to utilize either bicycle lanes or the main thoroughfare, rather than sidewalks. Certain locations may offer designated scooter lanes. It is imperative to observe all traffic signals as if operating a motor vehicle. While helmets are not legally mandated in this area, their use is strongly advised.",
            },
            keyPhrases: [
              { en: "bike lane", zh: "自行车道" },
              { en: "sidewalk", zh: "人行道" },
              { en: "designated", zh: "专门指定的" },
              { en: "traffic signals", zh: "交通信号灯" },
              { en: "helmets", zh: "头盔" },
            ],
            localVariants: { "en-US": "sidewalk", "en-GB": "pavement", "en-AU": "footpath" },
            culturalNote: "在人行道上骑电动滑板车在很多美国城市是违法的，会被罚款。一定要走自行车道或靠马路边。",
            alternativeExpressions: [
              {
                textEn:
                  "Stay off the sidewalk — that's a no-no in most cities. Stick to the bike lane or the road. And follow traffic lights like you would in a car.",
                textZh: "别上人行道——大多数城市不让。走自行车道或马路。红绿灯像开车一样遵守。",
                actionHint: "走自行车道",
                frequency: "common",
              },
              {
                textEn:
                  "Bike lanes are your friend. Sidewalks are illegal for scooters here. A helmet's not required but I'd wear one if I were you.",
                textZh: "走自行车道就对了。人行道骑滑板车这里违法。头盔不强制但建议你戴。",
                actionHint: "尽量戴头盔",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thanks for telling me — I would have ridden on the sidewalk! And where do I park it when I'm done?",
            textZh: "谢谢提醒——我差点就骑上人行道了！骑完了停哪里？",
            casualVersion: "Good to know — I totally would've been on the sidewalk! And where do I park it when I'm done?",
            commonMistake: {
              wrong: "Where I park it?",
              correct: "Where do I park it?",
              explanation: "疑问句中缺少助动词 'do' 会听起来不自然。",
            },
            formalityVariants: {
              casual: "Phew, thanks for the heads-up — I would've been on the sidewalk! So, where do I park it when I'm done?",
              standard: "Thanks for telling me — I would have ridden on the sidewalk! And where do I park it when I'm finished?",
              formal: "I appreciate you informing me; I would have inadvertently utilized the sidewalk. Furthermore, where should I appropriately park it upon completion of my journey?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Just park it upright on the sidewalk near a bike rack — don't block doorways or wheelchair ramps. The app will show you designated parking areas on the map. End your ride in the app and take a photo to confirm parking. Otherwise you'll keep getting charged!",
            textZh:
              "立着停在人行道上自行车架附近就行——别挡门口或轮椅坡道。App 上的地图会显示指定停车区域。在 App 里结束行程并拍照确认停车。不然会一直计费的！",
            casualVersion: "Just park it upright on the sidewalk near a bike rack — don't block doorways or ramps. The app map'll show you parking zones. End the ride in the app and snap a pic to confirm. Otherwise, you'll keep getting charged!",
            culturalNote: "美国共享滑板车停车规定严格，不能挡住人行道、门口或无障碍坡道，App 内通常有指定区域。",
            commonMistake: {
              wrong: "Don't block door.",
              correct: "Don't block doorways.",
              explanation: "缺少冠词或使用复数形式会更自然，指代一类物体。",
            },
            formalityVariants: {
              casual: "Just park it upright on the sidewalk by a bike rack — don't block entrances or ramps. The app map'll show you parking zones. End the ride in the app, take a pic to confirm, or you'll keep getting charged!",
              standard: "Just park it upright on the sidewalk near a bike rack — don't block doorways or wheelchair ramps. The app's map will show you designated parking areas. End the ride in the app and take a photo to confirm parking. Otherwise, you will continue to be charged!",
              formal: "Kindly park it upright on the sidewalk adjacent to a bicycle rack, ensuring not to obstruct doorways or wheelchair access ramps. The application's map will delineate permissible parking zones. Terminate the ride within the application and submit a photographic confirmation of parking; failure to do so will result in continued billing.",
            },
            keyPhrases: [
              { en: "upright", zh: "立着" },
              { en: "bike rack", zh: "自行车架" },
              { en: "wheelchair ramp", zh: "轮椅坡道" },
              { en: "end your ride", zh: "结束行程" },
              { en: "keep getting charged", zh: "一直计费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Park it standing up near a bike rack. Don't block doors or ramps. End the ride in the app and snap a photo — otherwise it keeps charging.",
                textZh: "立着停在自行车架旁。别挡门和坡道。App里结束行程拍照——不然一直扣钱。",
                actionHint: "一定要在App里结束行程",
                frequency: "common",
              },
              {
                textEn:
                  "The app shows parking zones. Just leave it upright, don't block anything, and make sure you hit 'end ride' and take a pic. Super important.",
                textZh: "App上有停车区域。立好停着，别挡路，一定要点'结束行程'然后拍照。这个很重要。",
                actionHint: "拍照确认停车",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This is so helpful. One last thing — is it safe to ride at night?",
            textZh: "太有帮助了。最后一个问题——晚上骑安全吗？",
            casualVersion: "This is super helpful. One last thing — is it safe to ride at night?",
            formalityVariants: {
              casual: "This is really helpful. Last thing — safe to ride at night?",
              standard: "This is so helpful. One last thing — is it safe to ride at night?",
              formal: "I find this information highly valuable. I have one final inquiry: Is it considered safe to operate these scooters during nighttime hours?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "The scooters have front lights and a rear reflector, but honestly I'd stick to well-lit streets at night. Some scooter companies have a curfew after 10 PM in certain areas. Stay safe and have fun!",
            textZh:
              "滑板车前面有灯后面有反光板，但老实说晚上我建议走灯光好的路。有些滑板车公司在某些区域晚上10点后有宵禁。注意安全，玩得开心！",
            casualVersion: "Scooters got front lights and a rear reflector, but honestly I wouldn't recommend riding too late, or stick to well-lit areas. Some companies even have curfews after 10 PM in certain zones. Stay safe, have fun!",
            commonMistake: {
              wrong: "I not recommend ride at night.",
              correct: "I wouldn't recommend riding at night.",
              explanation: "缺少助动词 'would' 和动词 'recommend' 后动名词形式 'riding'。",
            },
            formalityVariants: {
              casual: "Scooters have lights and a reflector, but honestly, I'd say stick to well-lit areas at night. Some companies even have curfews after 10 PM in certain zones. Be safe, enjoy!",
              standard: "The scooters have front lights and a rear reflector, but honestly, I would recommend sticking to well-lit areas at night. Some scooter companies have curfews after 10 PM in certain zones. Stay safe and have fun!",
              formal: "The scooters are equipped with front lights and a rear reflector; however, I must candidly advise against riding late at night, or at least to remain within well-illuminated areas. Certain scooter operators implement curfews after 10 PM in specific zones. Please prioritize your safety and enjoy your experience.",
            },
            keyPhrases: [
              { en: "front lights", zh: "前灯" },
              { en: "rear reflector", zh: "后反光板" },
              { en: "well-lit", zh: "灯光好的" },
              { en: "curfew", zh: "宵禁/限制使用时间" },
            ],
            vocabNotes: {
              curfew: {
                meaningInContext: "在这句话里表示：某个时间之后不允许使用滑板车的规定",
                similarUsage: "类似用法：The city has a 9 PM curfew for minors.（这个城市未成年人晚上9点后有宵禁）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "There's a headlight and reflector, but I wouldn't ride on dark streets. Some areas shut the scooters down after 10 PM too.",
                textZh: "有前灯和反光板，但暗的路我不建议骑。有些地方晚上10点以后滑板车也会停用。",
                actionHint: "晚上尽量别骑",
                frequency: "common",
              },
              {
                textEn:
                  "They've got lights on them, but stick to well-lit areas at night. Oh, and some zones have a 10 PM cutoff — the scooter just stops working.",
                textZh: "车上有灯，但晚上走亮的路。有些区域10点后有限制——滑板车直接停止工作。",
                actionHint: "走亮的街道",
                frequency: "common",
              },
            ],
          },
        ],
      },
      // --- Flow 2: 遇到故障 ---
      {
        id: "scooter-problem",
        titleZh: "滑板车故障",
        titleEn: "Scooter Malfunction",
        description: "使用共享滑板车时遇到电量不足或故障，联系客服处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I scanned the scooter but it won't start. The light is blinking red. What does that mean?",
            textZh: "我扫了二维码但滑板车启动不了。灯在闪红色。什么意思？",
            casualVersion: "Scanned the scooter but it won't start. Light's blinking red. What's that mean?",
            commonMistake: {
              wrong: "What means that?",
              correct: "What does that mean?",
              explanation: "中文常省略助动词，但英文疑问句中通常需要'do/does'或'is/are'等。",
            },
            formalityVariants: {
              casual: "Scanned the scooter, but it's not starting. Red light's blinking. What's it mean?",
              standard: "I scanned the scooter but it won't start. The light is blinking red. What does that mean?",
              formal:
                "I've attempted to activate the scooter, however, it's not initiating. The indicator light is flashing red. Could you please explain the significance of this?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Red blinking usually means the battery is almost dead. You should end this ride in the app and find another one. Check the battery percentage before you scan — it shows on the app when you point your camera at it.",
            textZh:
              "红灯闪一般是电池快没电了。你在 App 里结束这次行程找另一辆吧。扫码前先看电量——用 App 对着车拍的时候会显示电量百分比。",
            commonMistake: {
              wrong: "Battery almost dead.",
              correct: "The battery is almost dead.",
              explanation: "缺少动词 'is' 会导致表达不完整，不符合英语习惯。",
            },
            keyPhrases: [
              { en: "battery is almost dead", zh: "电池快没电了" },
              { en: "battery percentage", zh: "电量百分比" },
              { en: "blinking", zh: "闪烁" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Red light means it's basically dead. Just end the ride and grab a different one. Next time check the battery in the app before scanning.",
                textZh: "红灯就是没电了。结束行程换一辆吧。下次扫码前先在App里看电量。",
                actionHint: "结束行程找别的车",
                frequency: "common",
              },
              {
                textEn:
                  "That's low battery. Ditch this one — end the ride in the app and find another. Pro tip: the app shows battery level before you unlock.",
                textZh: "那是电量低。放弃这辆——在App里结束行程找下一辆。小窍门：App解锁前会显示电量。",
                actionHint: "扫码前先看电量",
                frequency: "common",
              },
            ],
            casualVersion:
              "Red blinking? Battery's probably almost dead. Just end this ride in the app, find another one. Before you scan, check the battery percent — app shows it when you point your camera at it.",
            formalityVariants: {
              casual:
                "Red light usually means the battery's almost dead. Just end this ride in the app, find another one. Check the battery percent before scanning – it shows up when you point your camera.",
              standard:
                "Red blinking usually means the battery is almost dead. You should end this ride in the app and find another one. Check the battery percentage before you scan — it shows on the app when you point your camera at it.",
              formal:
                "A blinking red light typically indicates a critically low battery level. We advise you to terminate this current rental within the application and locate an alternative scooter. Prior to scanning, please verify the battery percentage, which is displayed within the app when you aim your camera at the scooter.",
            },
          },
          {
            speaker: "you",
            textEn: "But the app already charged me the $1 unlock fee. Will I get a refund for a broken scooter?",
            textZh: "但 App 已经扣了1美元解锁费。坏车能退费吗？",
            casualVersion:
              "But the app already charged me the dollar unlock fee. Will I get a refund for a broken one?",
            commonMistake: {
              wrong: "Can I refund a broken scooter?",
              correct: "Will I get a refund for a broken scooter?",
              explanation: "refund是退款这个动作，receive/get a refund是收到退款，语义更准确。",
            },
            formalityVariants: {
              casual: "App already charged me the dollar unlock fee. Get a refund for a broken one?",
              standard: "But the app already charged me the $1 unlock fee. Will I get a refund for a broken scooter?",
              formal:
                "However, the application has already debited the $1 unlock fee. Am I eligible for a refund in the event of a non-functional scooter?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yeah, just go to the app's help section and report the issue. Select 'scooter didn't work' or 'low battery.' They usually refund the unlock fee automatically. You can also report the scooter as damaged so they can fix it.",
            textZh:
              "可以的，在 App 的帮助中心报告问题。选'滑板车无法使用'或'电量低'。他们通常会自动退解锁费。你也可以报告滑板车损坏，这样他们会来修。",
            culturalNote: "美国APP的客服流程通常很明确，通过Help Center提交报告是常见做法。",
            commonMistake: {
              wrong: "Report problem in app.",
              correct: "Report the problem in the app's help center.",
              explanation: "缺少冠词 'the' 和所有格 'app's'，介词 'in' 和 'help center' 更具体。",
            },
            keyPhrases: [
              { en: "report the issue", zh: "报告问题" },
              { en: "refund", zh: "退费" },
              { en: "damaged", zh: "损坏的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For sure — go to Help in the app and say the scooter didn't work. They'll refund the buck automatically. You can also flag it as broken.",
                textZh: "可以——在App的帮助里说滑板车不能用。他们会自动退那1块钱。你也可以标记它坏了。",
                actionHint: "在App里报告问题",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, just report it in the app. Pick 'scooter issue' and they'll give you your money back. Takes like 2 minutes.",
                textZh: "可以，在App里报告就行。选'滑板车问题'他们就退钱了。就两分钟的事。",
                actionHint: "选对应的问题类型",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, just hit up the app's help section, report the issue. Pick 'scooter didn't work' or 'low battery.' They usually auto-refund the unlock fee. You can also report it damaged so they can fix it.",
            formalityVariants: {
              casual:
                "Yeah, just go to the app's help section, report it. Choose 'scooter didn't work' or 'low battery.' They usually refund the unlock fee automatically. You can also report it damaged.",
              standard:
                "Yes, just go to the app's help section and report the issue. Select 'scooter didn't work' or 'low battery.' They usually refund the unlock fee automatically. You can also report the scooter as damaged so they can fix it.",
              formal:
                "Yes, please navigate to the application's help section and report the issue. You should select either 'scooter didn't work' or 'low battery.' A refund for the unlock fee is typically processed automatically. Additionally, you may report the scooter as damaged to facilitate its repair.",
            },
          },
          {
            speaker: "you",
            textEn: "I found another scooter — this one shows 78% battery. That should be enough, right?",
            textZh: "我找到另一辆了——显示78%电量。应该够用了吧？",
            casualVersion: "Found another scooter — this one's at 78% battery. That should be good, right?",
            commonMistake: {
              wrong: "I found another scooter, 78% battery. Is that enough?",
              correct: "I found another scooter, 78% battery. That should be enough, right?",
              explanation: "用 'That should be enough, right?' 征求确认，比直接问 'Is that enough?' 更自然。",
            },
            formalityVariants: {
              casual: "Found another scooter — this one's at 78%. Should be enough, right?",
              standard: "I found another scooter — this one shows 78% battery. That should be enough, right?",
              formal:
                "I have located an alternative scooter, which indicates a 78% battery charge. Would that suffice for my intended journey?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Definitely. 78% should get you about 15 to 20 miles, depending on speed and hills. More than enough for getting around the city. Just keep an eye on the battery level in the app as you ride.",
            textZh:
              "肯定够。78%大约能跑15到20英里（24到32公里），取决于速度和坡度。在城里逛绰绰有余。骑的时候注意看 App 上的电量就行。",
            keyPhrases: [
              { en: "keep an eye on", zh: "留意/注意看" },
              { en: "depending on", zh: "取决于" },
            ],
            literalMeaning: '"keep an eye on" 字面意思是 "把一只眼睛放在上面"，实际表示 "持续关注、留意"',
            alternativeExpressions: [
              {
                textEn:
                  "Plenty! 78% will get you way more than you need for getting around town. Just check the app now and then for the battery level.",
                textZh: "足够了！78%在城里逛绰绰有余。骑的时候偶尔看看App上的电量就行。",
                actionHint: "偶尔查看电量",
                frequency: "common",
              },
              {
                textEn:
                  "Oh yeah, that's more than enough. Should last 15-20 miles easy. Just don't let it get below 10% or it'll slow down on you.",
                textZh: "绝对够。轻松跑15-20英里。别让电量低于10%不然会自动减速。",
                actionHint: "留意电量别太低",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure. 78%? That's good for like 15-20 miles, depends on speed, hills. Plenty for city stuff. Just watch the battery level in the app while you ride.",
            formalityVariants: {
              casual:
                "Oh yeah. 78% is good for 15-20 miles, depending on speed/hills. Plenty for the city. Just watch the battery in the app.",
              standard:
                "Definitely. 78% should get you about 15 to 20 miles, depending on speed and hills. More than enough for getting around the city. Just keep an eye on the battery level in the app as you ride.",
              formal:
                "Absolutely. A 78% charge should provide an estimated range of 15 to 20 miles, contingent upon factors such as speed and terrain. This is more than adequate for urban transit. Please monitor the battery level via the application during your ride.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Great. One more thing — I accidentally rode into a no-parking zone and the scooter slowed down by itself. Is that normal?",
            textZh: "好的。还有一件事——我不小心骑进了禁停区，滑板车自己减速了。这正常吗？",
            culturalNote: "电子围栏 (geofencing) 是共享出行工具常见的功能，外国人可能不熟悉。",
            casualVersion:
              "Cool. Oh, one more thing — I accidentally rode into a no-parking zone and the scooter just slowed down on its own. That normal?",
            commonMistake: {
              wrong: "This normal?",
              correct: "Is that normal?",
              explanation: "英文问句通常需要助动词或系动词，不能直接用 'That normal?'。",
            },
            formalityVariants: {
              casual:
                "Cool. So, I accidentally rode into a no-parking zone and the scooter slowed down by itself. Normal?",
              standard:
                "Great. One more thing — I accidentally rode into a no-parking zone and the scooter slowed down by itself. Is that normal?",
              formal:
                "Understood. I have an additional query: I inadvertently entered a restricted parking zone, and the scooter automatically reduced its speed. Is this an expected operational feature?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn:
              "Yes, that's a geofenced zone — the scooter uses GPS to detect restricted areas and automatically slows you down or prevents you from ending your ride there. Just ride out of the zone and you'll get full speed back. The app shows those zones in red on the map.",
            textZh:
              "是的，那是电子围栏区域——滑板车用 GPS 检测限制区域，会自动减速或阻止你在那里结束行程。骑出那个区域就恢复正常速度了。App 地图上用红色标了这些区域。",
            commonMistake: {
              wrong: "That is geofence zone.",
              correct: "That's a geofence zone.",
              explanation: "缺少不定冠词 'a' 会导致表达不自然。",
            },
            keyPhrases: [
              { en: "geofenced zone", zh: "电子围栏区域" },
              { en: "restricted areas", zh: "限制区域" },
              { en: "full speed", zh: "全速" },
            ],
            vocabNotes: {
              geofenced: {
                meaningInContext: "在这句话里表示：用GPS技术划定的虚拟边界区域，进入后滑板车会自动限速或禁止停车",
                similarUsage:
                  "类似用法：The drone has geofenced restrictions near airports.（无人机在机场附近有电子围栏限制）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Yep, that's a restricted zone — the scooter knows where it is via GPS and slows itself down. Ride out of it and you'll be back to normal speed. Red zones show up on the map.",
                textZh:
                  "对，那是限制区域——滑板车通过GPS知道自己在哪，会自动减速。骑出去就恢复正常速度。App地图上红色区域就是。",
                actionHint: "骑出限制区域",
                frequency: "common",
              },
              {
                textEn:
                  "That's a geofence — certain areas limit the speed or won't let you park. Just keep going until you're out of the zone. Check the map for red areas.",
                textZh: "那是电子围栏——某些区域限速或不让停车。继续骑出去就好。看地图上的红色区域。",
                actionHint: "查看App地图红色区域",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, that's a geofenced zone. The scooter uses GPS to spot restricted areas and automatically slows you down or stops you from ending your ride there. Just get out of the zone and you'll speed right up again. App shows 'em red on the map.",
            formalityVariants: {
              casual:
                "Yeah, that's a geofenced zone. Scooter uses GPS to detect restricted areas, slows you down or stops you ending your ride. Just ride out of it, and you're good. App shows those zones in red.",
              standard:
                "Yes, that's a geofenced zone — the scooter uses GPS to detect restricted areas and automatically slows you down or prevents you from ending your ride there. Just ride out of the zone and you'll get full speed back. The app shows those zones in red on the map.",
              formal:
                "Yes, that is correct. You have entered a geofenced zone, which utilizes GPS technology to identify restricted areas. The scooter is programmed to automatically reduce speed or inhibit ride termination within these boundaries. Simply exit the designated zone to resume full operational speed. These zones are indicated in red on the application's map.",
            },
          },
          {
            speaker: "you",
            textEn: "That makes sense. Thanks for explaining everything. I would have been so confused on my own!",
            textZh: "原来如此。谢谢你解释这些。我自己搞的话肯定一头雾水！",
            commonMistake: {
              wrong: "I would confused on my own.",
              correct: "I would have been so confused on my own.",
              explanation: "缺少完成时助动词 'have been' 和表示程度的 'so'，表达不完整。",
            },
            casualVersion: "Makes sense. Thanks for explaining all that. I'd have been totally lost by myself!",
            formalityVariants: {
              casual: "Makes sense. Thanks for explaining everything. I'd have been totally confused by myself!",
              standard: "That makes sense. Thanks for explaining everything. I would have been so confused on my own!",
              formal:
                "That clarifies the situation perfectly. I appreciate you explaining everything thoroughly. I anticipate I would have encountered significant confusion independently.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 水上交通/水上出租 ====================
  {
    id: "transport-16",
    category: "transport",
    titleZh: "水上出租车",
    titleEn: "Water Taxi",
    description: "在海滨城市乘坐水上出租车或水上巴士的购票和乘坐流程",
    otherRole: "船员",
    otherRoleIcon: "anchor",
    flows: [
      // --- Flow 1: 乘坐水上出租车 ---
      {
        id: "water-taxi-ride",
        titleZh: "乘坐水上出租车",
        titleEn: "Taking a Water Taxi",
        description: "在码头乘坐水上出租车去酒店或景点",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to take a water taxi to the waterfront hotel district. How does it work?",
            textZh: "你好，我想坐水上出租车去海滨酒店区。怎么坐？",
            culturalNote: "美国服务业场合沟通通常更直接，无需像中文那样使用“请问”作为开场，直接说明目的即可。",
            casualVersion: "Hey, wanna get a water taxi to the hotel district. How's it work?",
            commonMistake: {
              wrong: "I want to take a water taxi",
              correct: "I'd like to take a water taxi",
              explanation: "中文的“我想”直接翻译成 I want 听起来会比较生硬，用 I'd like 更礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna take a water taxi to the hotel district. How's it work?",
              standard: "Hi, I'd like to take a water taxi to the waterfront hotel district. How does it work?",
              formal:
                "Good morning/afternoon, I am interested in taking a water taxi to the waterfront hotel district. Could you please explain the process?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Welcome! The water taxi runs on a fixed route with several stops along the harbor. The hotel district is stop number 4 — about a 20-minute ride. We depart every 30 minutes, and the next one leaves in 10 minutes.",
            textZh:
              "欢迎！水上出租车沿着港口的固定路线行驶，有几个停靠站。酒店区是第4站——大约20分钟的路程。每30分钟一班，下一班10分钟后出发。",
            keyPhrases: [
              { en: "fixed route", zh: "固定路线" },
              { en: "harbor", zh: "港口" },
              { en: "stop number 4", zh: "第4站" },
              { en: "depart", zh: "出发" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hop on — we go right past the hotel area. It's the fourth stop, about 20 minutes.",
                textZh: "上船吧——我们会经过酒店区。第四站，大约20分钟。",
                actionHint: "询问票价",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome! We got a fixed route with a few stops. Hotel district's stop 4, 'bout a 20-min ride. We leave every 30 mins, next one's in 10.",
            formalityVariants: {
              casual:
                "Welcome! We got a fixed route with a few stops. Hotel district's stop 4, 'bout a 20-min ride. Next one's in 10.",
              standard:
                "Welcome! The water taxi runs on a fixed route with several stops along the harbor. The hotel district is stop number 4 — about a 20-minute ride. We depart every 30 minutes, and the next one leaves in 10 minutes.",
              formal:
                "Welcome aboard. Our water taxi operates on a predetermined route with various designated stops along the harbor. The hotel district is designated as Stop Number 4, which is approximately a 20-minute journey. Departures occur every 30 minutes, with the next scheduled departure in 10 minutes.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the fare? And can I buy a ticket here or do I need to pay on board?",
            textZh: "票价多少？在这里买票还是上船再付？",
            commonMistake: {
              wrong: "How much for a ticket?",
              correct: "How much is the fare?",
              explanation: "Fare 是公共交通的惯用词。Ticket 也可以但 fare 更地道。",
            },
            casualVersion: "How much? Can I buy a ticket here or on the boat?",
            formalityVariants: {
              casual: "How much? Can I buy a ticket here or on the boat?",
              standard: "How much is the fare? And can I buy a ticket here or do I need to pay on board?",
              formal:
                "Could you please inform me of the fare? Additionally, may I purchase a ticket here, or is payment required upon boarding?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "It's $12 for a single ride or $25 for an all-day pass — that lets you hop on and hop off as many times as you want. You can pay right here with cash or card, or use our app. I'd recommend the day pass if you plan to do some sightseeing along the waterfront.",
            textZh:
              "单次12美元，或者25美元买一日通票——可以全天不限次上下。在这里现金或刷卡都行，也可以用我们的 App。如果打算沿海滨观光的话我推荐一日通票。",
            commonMistake: {
              wrong: "How to pay?",
              correct: "How can I pay?",
              explanation: "How to pay? 听起来像在问方法，不够礼貌和自然。",
            },
            keyPhrases: [
              { en: "single ride", zh: "单次乘坐" },
              { en: "all-day pass", zh: "一日通票" },
              { en: "hop on and hop off", zh: "随上随下" },
              { en: "sightseeing", zh: "观光" },
            ],
            vocabNotes: {
              "hop on and hop off": {
                meaningInContext: "在这句话里表示：可以在任何站点自由上下车/船，不限次数的乘坐方式",
                similarUsage:
                  "类似用法：The hop-on-hop-off bus tour is great for tourists.（随上随下巴士游很适合游客）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "12 bucks one way, or 25 for all day — ride as much as you want. Cash, card, or our app. If you're sightseeing, the day pass is the way to go.",
                textZh: "单次12，全天25——随便坐。现金、刷卡或我们的App都行。如果要观光，日票最划算。",
                actionHint: "观光选日票更值",
                frequency: "common",
              },
              {
                textEn:
                  "A single ride is $12. But for $25 you get an all-day pass — unlimited on and off. Totally worth it if you're exploring the waterfront.",
                textZh: "单次12美元。但25美元买全天通票——不限次随上随下。逛海滨的话绝对值。",
                actionHint: "多次乘坐选全天票",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's $12 for one ride, or $25 for an all-day pass — that's hop on/off all you want. Pay here with cash/card, or our app. Day pass is good if you're gonna sightsee.",
            formalityVariants: {
              casual:
                "It's $12 for one ride, or $25 for an all-day pass — that's hop on/off all you want. Pay here with cash/card, or our app. Day pass is good if you're gonna sightsee.",
              standard:
                "It's $12 for a single ride or $25 for an all-day pass — that lets you hop on and hop off as many times as you want. You can pay right here with cash or card, or use our app. I'd recommend the day pass if you plan to do some sightseeing along the waterfront.",
              formal:
                "The fare is $12 for a single journey, or you may opt for an all-day pass at $25, which permits unlimited re-boarding. Payment can be rendered here via cash or credit card, or through our dedicated mobile application. I would suggest the day pass if your itinerary includes extensive sightseeing along the waterfront.",
            },
          },
          {
            speaker: "you",
            textEn:
              "The day pass sounds great. Two passes, please — one for me and one for my wife. Can we sit outside?",
            textZh: "一日通票不错。两张，我和太太各一张。能坐外面吗？",
            casualVersion: "Day pass sounds good. Two passes, please — for me and my wife. Can we sit outside?",
            formalityVariants: {
              casual: "Day pass sounds good. Two passes, please — for me and my wife. Can we sit outside?",
              standard:
                "The day pass sounds great. Two passes, please — one for me and one for my wife. Can we sit outside?",
              formal:
                "The all-day pass sounds very suitable. We would like two passes, please — one for myself and one for my wife. Is outdoor seating available?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Of course! There's open-air seating on the upper deck — best views of the skyline. Just be aware it can get windy and there might be some spray, so hold onto your hats and phones. Life jackets are under the seats if you need them.",
            textZh:
              "当然可以！上层甲板有露天座位——看天际线最佳位置。不过注意风会比较大，可能有水花溅到，拿好帽子和手机。救生衣在座位下面，需要的话可以穿。",
            keyPhrases: [
              { en: "open-air seating", zh: "露天座位" },
              { en: "upper deck", zh: "上层甲板" },
              { en: "skyline", zh: "天际线" },
              { en: "spray", zh: "水花" },
              { en: "life jackets", zh: "救生衣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! Upper deck has the best views — you can see the whole skyline. Gets windy though, so hold onto your stuff. Life jackets are under the seats just in case.",
                textZh: "当然！上层甲板视野最好——能看到整个天际线。不过风大，拿好东西。救生衣在座位下面以防万一。",
                actionHint: "拿好帽子和手机",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, go up top! Best spot on the boat. Just watch out for spray and wind. Life vests are stowed under every seat.",
                textZh: "当然，去上面！船上最好的位置。注意水花和风。救生衣在每个座位下面。",
                actionHint: "做好防风准备",
                frequency: "common",
              },
            ],
            casualVersion:
              "Totally! Upper deck's got open-air seating — best views. Just careful, it gets windy, might get some spray. Hold onto your hats/phones. Life jackets are under the seats if ya need 'em.",
            formalityVariants: {
              casual:
                "Totally! Upper deck's got open-air seating — best views. Just careful, it gets windy, might get some spray. Hold onto your hats/phones. Life jackets are under the seats if ya need 'em.",
              standard:
                "Of course! There's open-air seating on the upper deck — best views of the skyline. Just be aware it can get windy and there might be some spray, so hold onto your hats and phones. Life jackets are under the seats if you need them.",
              formal:
                "Certainly. The upper deck features open-air seating, offering optimal views of the skyline. Please be advised that conditions can be windy, and there may be some water spray, so we recommend securing loose articles such as hats and mobile phones. Life jackets are conveniently located beneath the seats should you require them.",
            },
          },
          {
            speaker: "you",
            textEn: "Will someone announce the stops, or do I need to watch for it myself?",
            textZh: "有人报站吗？还是要自己注意看？",
            casualVersion: "Will someone say the stops, or do I gotta watch for it?",
            commonMistake: {
              wrong: "Someone will announce the stops?",
              correct: "Will someone announce the stops?",
              explanation: "中文疑问句常省略主语，但英文问句需要'Will'或'Do'等助动词开头。",
            },
            formalityVariants: {
              casual: "Will someone say the stops, or do I gotta watch for it?",
              standard: "Will someone announce the stops, or do I need to watch for it myself?",
              formal: "Will the stops be announced, or am I responsible for monitoring our location?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "We announce each stop over the speaker, and there's a digital display showing the next stop. When you hear 'Waterfront Hotels,' that's you. You'll also see the hotels from the water — can't miss them!",
            textZh:
              "我们会通过喇叭报每一站，还有电子屏显示下一站。听到'海滨酒店'就是你们的站。从水上也能看到那些酒店——不会错过的！",
            keyPhrases: [
              { en: "speaker", zh: "喇叭/扬声器" },
              { en: "digital display", zh: "电子屏" },
              { en: "can't miss them", zh: "不会错过的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We call out every stop and there's a screen showing what's next. When you hear 'Waterfront Hotels,' that's your cue. You can see the hotels from the water too.",
                textZh: "我们每站都报，还有屏幕显示下一站。听到'海滨酒店'就是你们的站。从水上也能看到酒店。",
                actionHint: "注意听报站",
                frequency: "common",
              },
              {
                textEn:
                  "Don't worry about missing it — we announce stops and there's a display. Plus you'll literally see the hotels coming up on your right.",
                textZh: "不用担心坐过——我们会报站也有显示屏。而且你会看到酒店就在右边出现。",
                actionHint: "留意右侧",
                frequency: "common",
              },
            ],
            casualVersion:
              "We announce each stop over the speaker, plus there's a screen showing the next one. When you hear 'Waterfront Hotels,' that's you. You'll see 'em from the water, too — can't miss 'em!",
            formalityVariants: {
              casual:
                "We announce each stop over the speaker, plus there's a screen showing the next one. When you hear 'Waterfront Hotels,' that's you. You'll see 'em from the water, too — can't miss 'em!",
              standard:
                "We announce each stop over the speaker, and there's a digital display showing the next stop. When you hear 'Waterfront Hotels,' that's you. You'll also see the hotels from the water — can't miss them!",
              formal:
                "Each stop is announced via our onboard speaker system, and a digital display indicates the upcoming stop. Your destination, 'Waterfront Hotels,' will be audibly announced. Furthermore, the hotels are distinctly visible from the waterway, ensuring you will not overlook them.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Is there a later boat back? We might want to have dinner at the waterfront and return around 9 PM.",
            textZh: "有晚一点的船回来吗？我们可能在海滨吃晚饭，9点左右回来。",
            commonMistake: {
              wrong: "Is there a late boat back?",
              correct: "Is there a later boat back?",
              explanation: "late 是“迟到的”，later 是“更晚的”，问“有没有更晚的船”用 later。",
            },
            casualVersion:
              "Is there a later boat back? We might wanna eat dinner at the waterfront and get back 'round 9 PM.",
            formalityVariants: {
              casual:
                "Is there a later boat back? We might wanna eat dinner at the waterfront and get back 'round 9 PM.",
              standard:
                "Is there a later boat back? We might want to have dinner at the waterfront and return around 9 PM.",
              formal:
                "Is there a later return service available? We are considering having dinner at the waterfront and would ideally like to return around 9 PM.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "The last departure from the hotel district is at 10:30 PM. Your day pass covers everything until the last boat. Here's a schedule card — it has all the stop times. The evening boats also have LED lighting, so it's a beautiful ride at night.",
            textZh:
              "从酒店区出发的末班是10:30 PM。一日通票覆盖到末班船。这是时刻表卡片——所有站点时间都有。晚上的船还有 LED 灯光装饰，夜景很漂亮。",
            commonMistake: {
              wrong: "It has all stops and times.",
              correct: "It has all the stops and times.",
              explanation: "加 'the' 使得表达更自然流畅。",
            },
            keyPhrases: [
              { en: "last departure", zh: "末班" },
              { en: "schedule card", zh: "时刻表卡片" },
              { en: "LED lighting", zh: "LED灯光装饰" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Last boat from there is 10:30 PM, so you're totally fine for a 9 PM return. Your day pass covers everything. Oh, and the night boats have lights — it's really pretty.",
                textZh: "从那边末班船10:30 PM，所以9点回完全没问题。一日通票全覆盖。对了，晚上的船有灯光——特别漂亮。",
                actionHint: "确认末班船时间",
                frequency: "common",
              },
              {
                textEn:
                  "10:30 is the last departure from the hotel area. Day pass is good until then. The evening ride is actually gorgeous with all the LED lights.",
                textZh: "酒店区末班10:30。一日通票到那时都有效。晚上坐船特别美，有LED灯光。",
                actionHint: "安排好晚餐时间",
                frequency: "common",
              },
            ],
            casualVersion:
              "Last one from the hotel district is 10:30 PM. Your day pass covers everything 'til the last boat. Here's a schedule card — has all the times. Evening boats also have LED lights, so it's a pretty ride at night.",
            formalityVariants: {
              casual:
                "Last one from the hotel district is 10:30 PM. Your day pass covers everything 'til the last boat. Here's a schedule card — has all the times. Evening boats also have LED lights, so it's a pretty ride at night.",
              standard:
                "The last departure from the hotel district is at 10:30 PM. Your day pass covers everything until the last boat. Here's a schedule card — it has all the stop times. The evening boats also have LED lighting, so it's a beautiful ride at night.",
              formal:
                "The final departure from the hotel district is scheduled for 10:30 PM. Your all-day pass remains valid for all services, including the last boat. Please take this schedule card, which details all stop times. Our evening boats are also equipped with LED lighting, providing a beautiful nocturnal experience.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds romantic! Perfect. We'll definitely take the evening boat back. Thank you!",
            textZh: "听起来很浪漫！太好了。我们一定坐晚上的船回来。谢谢！",
            casualVersion: "Sounds romantic! Perfect. We'll definitely take the evening boat back. Thanks!",
            formalityVariants: {
              casual: "Sounds romantic! Perfect. We'll definitely take the evening boat back. Thanks!",
              standard: "Sounds romantic! Perfect. We'll definitely take the evening boat back. Thank you!",
              formal:
                "That sounds quite romantic! Excellent. We will certainly plan to take an evening boat for our return journey. Thank you very much!",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "You're welcome! The boat is pulling in now. Head to the boarding ramp on your left. Enjoy the ride, and don't forget — your day pass works on all three water taxi routes, not just this one!",
            textZh:
              "不客气！船正在靠岸。左边的登船通道上船。旅途愉快，别忘了——你的一日通票在所有三条水上出租车路线上都能用，不只是这条！",
            commonMistake: {
              wrong: "Take boat on the left.",
              correct: "Board through the gangway on the left.",
              explanation: "Board (登船) 和 gangway (舷梯/登船通道) 是更专业的词汇。",
            },
            keyPhrases: [
              { en: "pulling in", zh: "靠岸" },
              { en: "boarding ramp", zh: "登船通道" },
              { en: "all three routes", zh: "所有三条路线" },
            ],
            vocabNotes: {
              "pulling in": {
                meaningInContext: "在这句话里表示：船正在驶入码头、慢慢靠岸",
                similarUsage: "类似用法：The train is pulling in to the station.（火车正在进站）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Here comes the boat now! Head to the ramp on your left. Enjoy the ride — and remember, your day pass works on all three routes!",
                textZh: "船来了！左边的通道上船。旅途愉快——别忘了你的一日通票三条线路都能用！",
                actionHint: "左侧登船",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect timing — boat's pulling up. Board on the left. Oh, and your pass is good on every route, not just this one. Have fun!",
                textZh: "正好赶上——船靠岸了。左边上船。对了，你的通票每条线路都能用，不只这条。玩得开心！",
                actionHint: "一日通票通用所有线路",
                frequency: "common",
              },
            ],
            casualVersion:
              "You're welcome! Boat's pullin' in now. Head to the ramp on your left. Enjoy the ride, and don't forget — your day pass works on all three routes, not just this one!",
            formalityVariants: {
              casual:
                "You're welcome! Boat's pullin' in now. Head to the ramp on your left. Enjoy the ride, and don't forget — your day pass works on all three routes, not just this one!",
              standard:
                "You're welcome! The boat is pulling in now. Head to the boarding ramp on your left. Enjoy the ride, and don't forget — your day pass works on all three water taxi routes, not just this one!",
              formal:
                "You are most welcome. The vessel is currently approaching the dock. Please proceed to the boarding ramp located to your left. Enjoy your journey, and kindly remember that your all-day pass is valid across all three water taxi routes, not exclusively this one.",
            },
          },
        ],
      },
      // --- Flow 2: 包船游览 ---
      {
        id: "private-charter",
        titleZh: "私人包船",
        titleEn: "Private Boat Charter",
        description: "包一艘小船做私人城市水上游览",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we're a group of 6 and we'd like to do a private boat tour of the harbor. Do you offer that?",
            textZh: "你好，我们一行6人想包船游览港口。你们提供这种服务吗？",
            casualVersion: "Hey, six of us wanna do a private boat tour of the harbor. You guys do that?",
            commonMistake: {
              wrong: "Hi, we are 6 people and we want private boat tour. Do you have?",
              correct: "Hi, we're a group of 6 and we'd like to do a private boat tour. Do you offer that?",
              explanation: '"want"不够礼貌，"do you have" 不如 "do you offer" 专业。',
            },
            formalityVariants: {
              casual: "Hey, six of us wanna do a private harbor boat tour. You guys offer that?",
              standard:
                "Hi, we're a group of 6 and we'd like to do a private boat tour of the harbor. Do you offer that?",
              formal:
                "Good morning/afternoon, we are a party of six interested in a private boat tour of the harbor. May I inquire if you provide such a service?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Yes! We have private charters starting at $250 for one hour, or $400 for two hours. That includes a captain, a guided commentary, and complimentary water and snacks. Up to 10 people per boat.",
            textZh:
              "有的！私人包船一小时起价250美元，两小时400美元。包括一名船长、导游讲解以及免费的水和小吃。每船最多10人。",
            keyPhrases: [
              { en: "private charter", zh: "私人包船" },
              { en: "guided commentary", zh: "导游讲解" },
              { en: "complimentary", zh: "免费赠送的" },
              { en: "captain", zh: "船长" },
            ],
            vocabNotes: {
              complimentary: {
                meaningInContext: "在这句话里表示：作为服务的一部分免费提供，不另外收费",
                similarUsage: "类似用法：The hotel offers complimentary breakfast.（酒店提供免费早餐）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "We do! Private tours start at 250 an hour. Comes with a captain, narration, and some snacks and water. Fits up to 10 people.",
                textZh: "有的！私人游船一小时起价250。配船长、讲解，还有小吃和水。最多10人。",
                actionHint: "确认人数和时长",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely — 250 for one hour, 400 for two. Captain, guided tour, complimentary refreshments. You can bring up to 10.",
                textZh: "当然——一小时250，两小时400。配船长、导游讲解、免费茶点。最多带10个人。",
                actionHint: "两小时更划算",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep! Private charters start at $250 an hour, $400 for two. That's with a captain, commentary, and free water and snacks. Up to ten people a boat.",
            formalityVariants: {
              casual:
                "Yep! Private charters, $250 for one hour, $400 for two. Comes with a captain, commentary, water, snacks. Up to 10 people a boat.",
              standard:
                "Yes! We have private charters starting at $250 for one hour, or $400 for two hours. That includes a captain, a guided commentary, and complimentary water and snacks. Up to 10 people per boat.",
              formal:
                "Certainly! Our private charter services commence at $250 for a one-hour excursion, or $400 for a two-hour duration. This package encompasses a dedicated captain, an informative guided commentary, and complimentary refreshments. Each vessel can accommodate up to ten passengers.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Two hours would be great. Can we customize the route? We'd love to see the sunset over the bridge.",
            textZh: "两小时的好。能自定义路线吗？我们很想看到桥上的日落。",
            casualVersion:
              "Two hours sounds perfect. Can we pick our own route? Really wanna see the sunset over the bridge.",
            commonMistake: {
              wrong: "Two hours is good. Can we change route? We want to see sunset on bridge.",
              correct:
                "Two hours would be great. Can we customize the route? We'd love to see the sunset over the bridge.",
              explanation: '"is good" 不如 "would be great" 自然；"want to" 不够委婉；"on bridge" 搭配不当。',
            },
            formalityVariants: {
              casual: "Two hours is good. Can we choose our route? Wanna catch sunset over the bridge.",
              standard:
                "Two hours would be great. Can we customize the route? We'd love to see the sunset over the bridge.",
              formal:
                "A two-hour duration would be excellent. Is it permissible to customize the itinerary? We are particularly interested in viewing the sunset over the bridge.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Absolutely! Our captain can adjust the route to your preferences. The sunset tour is actually our most popular request — we'll head toward the bridge around golden hour. Sunset is at 7:15 today, so I'd suggest departing at 5:30 to get the full experience.",
            textZh:
              "当然可以！船长可以根据你们的喜好调整路线。日落游其实是最受欢迎的需求——我们会在黄金时刻朝大桥方向开。今天日落是7:15，所以建议5:30出发，充分享受全程。",
            commonMistake: {
              wrong: "Sunset today is 7:15.",
              correct: "Sunset today is at 7:15.",
              explanation: "表示具体时间点通常用介词 at。",
            },
            keyPhrases: [
              { en: "customize the route", zh: "自定义路线" },
              { en: "golden hour", zh: "黄金时刻" },
              { en: "departing", zh: "出发" },
            ],
            vocabNotes: {
              "golden hour": {
                meaningInContext: "在这句话里表示：日落前一小时左右光线最柔和温暖的时段，是拍照和观景的最佳时间",
                similarUsage: "类似用法：Photographers love shooting during golden hour.（摄影师喜欢在黄金时刻拍照）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "For sure! The captain customizes the route. Sunset is at 7:15, so I'd say leave at 5:30 to catch the whole golden hour by the bridge.",
                textZh: "当然可以！船长可以自定路线。日落7:15，建议5:30出发，正好赶上大桥的黄金时刻。",
                actionHint: "确认出发时间",
                frequency: "common",
              },
              {
                textEn:
                  "Totally — you tell us where you want to go. Sunset tour is our most popular. Today it sets at 7:15, so head out around 5:30 for the best experience.",
                textZh: "完全可以——你说想去哪就去哪。日落游是我们最火的。今天7:15日落，5:30出发体验最好。",
                actionHint: "5:30出发看日落",
                frequency: "common",
              },
            ],
            casualVersion:
              "For sure! Captain'll totally adjust the route for ya. Sunset tour's actually our biggest hit — we'll cruise toward the bridge 'round golden hour. Sunset's at 7:15 today, so I'd say leave at 5:30 to get the full thing.",
            culturalNote: "Golden hour是指日出后或日落前的特定时间段。",
            formalityVariants: {
              casual:
                "Yeah, captain can totally change the route. Sunset tour's super popular — we'll head to the bridge around golden hour. Sunset's at 7:15, so 5:30 departure is best for the full vibe.",
              standard:
                "Absolutely! Our captain can adjust the route to your preferences. The sunset tour is actually our most popular request — we'll head toward the bridge around golden hour. Sunset is at 7:15 today, so I'd suggest departing at 5:30 to get the full experience.",
              formal:
                "Certainly! Our captain is fully capable of tailoring the route to your specific preferences. The sunset tour, in fact, represents our most frequently requested experience. We will navigate towards the bridge vicinity during the 'golden hour'. As sunset is scheduled for 7:15 PM today, I would recommend a departure time of 5:30 PM to fully optimize your experience.",
            },
          },
          {
            speaker: "you",
            textEn: "5:30 is perfect. Can we bring our own drinks? We'd like to celebrate a birthday on board.",
            textZh: "5:30 可以。能自带饮料吗？我们想在船上庆祝生日。",
            casualVersion: "5:30 works. Can we bring our own drinks? Wanna celebrate a birthday on the boat.",
            commonMistake: {
              wrong: "5:30 is perfect. Can we bring drinks? We want celebrate birthday.",
              correct: "5:30 is perfect. Can we bring our own drinks? We'd like to celebrate a birthday on board.",
              explanation: '"our own" 明确是自带；"want" 语气生硬。',
            },
            formalityVariants: {
              casual: "5:30's good. BYOB? It's for a birthday.",
              standard: "5:30 is perfect. Can we bring our own drinks? We'd like to celebrate a birthday on board.",
              formal:
                "5:30 PM is perfectly suitable. May we inquire about the possibility of bringing our own beverages? We are planning to celebrate a birthday during the excursion.",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "You're welcome to bring your own food and non-alcoholic drinks at no extra charge. If you want to bring alcohol, there's a $50 BYOB fee and you'll need to sign a liability waiver. Or we can provide a champagne package for $75 — that includes a bottle of Moët and glasses.",
            textZh:
              "可以自带食物和非酒精饮料，不额外收费。如果要带酒的话，有50美元的自带酒水费，需要签免责声明。或者我们可以提供75美元的香槟套餐——包含一瓶酩悦和酒杯。",
            commonMistake: {
              wrong: "Can we bring wine?",
              correct: "If you want to bring alcohol, there's a $50 corkage fee...",
              explanation: "直接问 'Can we bring wine?' 可能无法得到完整的规则信息，而服务人员会主动说明费用和免责规定。",
            },
            keyPhrases: [
              { en: "BYOB", zh: "自带酒水" },
              { en: "liability waiver", zh: "免责声明" },
              { en: "champagne package", zh: "香槟套餐" },
            ],
            vocabNotes: {
              BYOB: {
                meaningInContext: "在这句话里表示：Bring Your Own Bottle/Beverage，自带酒水",
                similarUsage: "类似用法：The restaurant is BYOB — you can bring your own wine.（这家餐厅允许自带酒水）",
              },
            },
            literalMeaning:
              '"BYOB" 是 "Bring Your Own Bottle" 或 "Bring Your Own Beverage" 的缩写，字面意思是 "自己带瓶子/饮料"',
            alternativeExpressions: [
              {
                textEn:
                  "Food and soft drinks, no charge. Alcohol is a $50 BYOB fee plus a waiver. Or we can do a champagne package — 75 bucks, bottle of Moet, glasses, the works.",
                textZh:
                  "食物和软饮免费。带酒的话50美元自带费加签免责书。或者我们有75美元的香槟套餐——一瓶酩悦、酒杯，全套。",
                actionHint: "考虑香槟套餐",
                frequency: "common",
              },
              {
                textEn:
                  "Bring whatever food you want, no problem. For booze there's a $50 BYOB fee and a liability form. Or skip the hassle — our champagne package is $75 with a bottle of bubbly.",
                textZh: "随便带吃的，没问题。带酒有50美元自带费和免责表。嫌麻烦的话——75美元香槟套餐直接搞定。",
                actionHint: "香槟套餐更省事",
                frequency: "occasional",
              },
            ],
            casualVersion:
              "Totally fine to bring your own food and non-alcoholic stuff, no extra charge. If you wanna bring booze, it's a $50 BYOB fee, and you gotta sign a waiver. Or, we can do a champagne package for $75 — that's a bottle of Moët and glasses.",
            culturalNote: "BYOB是美国自带酒水服务常见缩写。签免责声明在美国很常见。",
            formalityVariants: {
              casual:
                "Bring your own food/non-alcoholic drinks, no charge. Alcohol's $50 BYOB fee, gotta sign a waiver. Or, $75 champagne package — Moët and glasses.",
              standard:
                "You're welcome to bring your own food and non-alcoholic drinks at no extra charge. If you want to bring alcohol, there's a $50 BYOB fee and you'll need to sign a liability waiver. Or we can provide a champagne package for $75 — that includes a bottle of Moët and glasses.",
              formal:
                "You are permitted to bring your own food and non-alcoholic beverages without incurring any additional charges. Should you wish to provide your own alcoholic beverages, a corkage fee of $50 will apply, and a liability waiver must be signed. Alternatively, we offer a champagne package for $75, which includes a bottle of Moët and appropriate glassware.",
            },
          },
          {
            speaker: "you",
            textEn:
              "The champagne package sounds special! Let's do the 2-hour tour with the champagne package. How do I pay?",
            textZh: "香槟套餐听起来很特别！两小时的加上香槟套餐吧。怎么付款？",
            casualVersion: "Champagne package sounds cool! Let's just do the two-hour tour with that. How do I pay?",
            commonMistake: {
              wrong: "Champagne package sounds good! We do 2-hour tour with champagne. How to pay?",
              correct:
                "The champagne package sounds special! Let's do the 2-hour tour with the champagne package. How do I pay?",
              explanation: '"sounds good" 缺乏热情；"how to pay" 语法不完整。',
            },
            formalityVariants: {
              casual: "Champagne package, awesome! Two-hour tour with it. Payment?",
              standard:
                "The champagne package sounds special! Let's do the 2-hour tour with the champagne package. How do I pay?",
              formal:
                "The champagne package sounds delightful! We would like to proceed with the two-hour tour including the champagne package. What are the accepted methods of payment?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "Your total is $475 — $400 for the 2-hour charter plus $75 for the champagne. We require a 50% deposit now and the rest when you board. I can take cash, card, or Venmo. We'll also email you a confirmation with the dock location and departure time.",
            textZh:
              "总共475美元——两小时包船400美元加75美元香槟。需要先付50%定金，剩下的上船时付。可以现金、刷卡或 Venmo。我们还会发邮件确认码头位置和出发时间。",
            commonMistake: {
              wrong: "Remaining money pay when board.",
              correct: "The rest when you board.",
              explanation: "“剩余的钱”口语中常用 'the rest' 来表达，更自然。",
            },
            keyPhrases: [
              { en: "deposit", zh: "定金" },
              { en: "board", zh: "上船" },
              { en: "dock location", zh: "码头位置" },
              { en: "confirmation", zh: "确认" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's 475 total. Half now, half when you show up. Card, cash, or Venmo. We'll email you the dock info and time.",
                textZh: "总共475。先付一半，到的时候付剩下的。刷卡、现金或Venmo都行。我们会发邮件确认码头信息和时间。",
                actionHint: "先付定金",
                frequency: "common",
              },
              {
                textEn:
                  "So it's $400 plus $75 for the champagne — $475. We need 50% upfront and the balance at boarding. I'll send a confirmation to your email.",
                textZh: "400加75香槟——总共475。先付50%定金，上船时付尾款。我发确认邮件给你。",
                actionHint: "确认邮箱地址",
                frequency: "common",
              },
            ],
            casualVersion:
              "Total's $475 — $400 for the two hours, $75 for the champagne. Need 50% deposit now, rest when you board. Can take cash, card, or Venmo. We'll email ya a confirmation with the dock spot and departure time.",
            culturalNote: "Venmo是美国流行的移动支付app。",
            formalityVariants: {
              casual:
                "Total's $475 ($400 for 2 hours, $75 for champagne). Half deposit now, rest on board. Cash, card, Venmo. We'll email confirmation with dock and time.",
              standard:
                "Your total is $475 — $400 for the 2-hour charter plus $75 for the champagne. We require a 50% deposit now and the rest when you board. I can take cash, card, or Venmo. We'll also email you a confirmation with the dock location and departure time.",
              formal:
                "Your total comes to $475, comprising $400 for the two-hour charter and $75 for the champagne package. A 50% deposit is required at this time, with the remaining balance due upon boarding. We accept cash, credit card, or Venmo. A confirmation email detailing the dock location and precise departure time will also be sent to you.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll pay the deposit by card. Can we cancel or reschedule if the weather is bad?",
            textZh: "好的，定金刷卡。如果天气不好能取消或改期吗？",
            casualVersion: "Cool, I'll pay the deposit by card. Can we cancel or reschedule if the weather's bad?",
            commonMistake: {
              wrong: "Good, I pay deposit by card. If weather is bad, can we cancel or change time?",
              correct: "Great, I'll pay the deposit by card. Can we cancel or reschedule if the weather is bad?",
              explanation: '"Good" 比较敷衍；"change time" 不是很自然；从句位置。',
            },
            formalityVariants: {
              casual: "Okay, card for the deposit. Bad weather, can we cancel/reschedule?",
              standard: "Great, I'll pay the deposit by card. Can we cancel or reschedule if the weather is bad?",
              formal:
                "Excellent, I will render the deposit payment via credit card. In the event of inclement weather, may we inquire about the policy for cancellation or rescheduling?",
            },
          },
          {
            speaker: "them",
            role: "船员",
            textEn:
              "If we cancel due to weather — like heavy rain or high winds — you get a full refund or can reschedule for free. If you cancel on your end, we need 24 hours' notice for a full refund. Less than 24 hours, the deposit is non-refundable but you can reschedule within 30 days.",
            textZh:
              "如果因天气取消——比如大雨或大风——全额退款或免费改期。如果是你们自己取消，需要提前24小时通知才能全额退款。不到24小时的话定金不退，但30天内可以改期。",
            commonMistake: {
              wrong: "Due to weather reason",
              correct: "Due to weather",
              explanation: "直接说 'due to weather' 即可，'reason' 在此是冗余。",
            },
            keyPhrases: [
              { en: "full refund", zh: "全额退款" },
              { en: "reschedule", zh: "改期" },
              { en: "24 hours' notice", zh: "提前24小时通知" },
              { en: "non-refundable", zh: "不可退款的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "If it's bad weather on our end — rain, high winds — full refund or free reschedule. If you cancel, we need 24 hours' notice. Less than that, you keep the deposit as credit for 30 days.",
                textZh:
                  "如果是我们这边天气原因——下雨、大风——全额退或免费改期。你自己取消的话要提前24小时。不到24小时，定金作为30天内的抵用额度。",
                actionHint: "记住取消政策",
                frequency: "common",
              },
              {
                textEn:
                  "Weather cancellations are on us — full refund or reschedule, no charge. Your cancellation needs 24 hours for a refund. Under 24, the deposit rolls into credit.",
                textZh: "天气取消我们负责——全退或免费改期。你取消要提前24小时才能退。不到24小时定金转为抵用额度。",
                actionHint: "关注天气预报",
                frequency: "common",
              },
            ],
            casualVersion:
              "If we cancel for weather — like crazy rain or strong winds — you get a full refund or can reschedule free. If *you* cancel, we need 24 hours' notice for a full refund. Less than that, deposit's non-refundable but you can reschedule within 30 days.",
            formalityVariants: {
              casual:
                "Weather cancellation (heavy rain/wind)? Full refund or free reschedule. You cancel? 24-hour notice for full refund. Under 24 hours, deposit's non-refundable, but you can reschedule within 30 days.",
              standard:
                "If we cancel due to weather — like heavy rain or high winds — you get a full refund or can reschedule for free. If you cancel on your end, we need 24 hours' notice for a full refund. Less than 24 hours, the deposit is non-refundable but you can reschedule within 30 days.",
              formal:
                "Should the cancellation be initiated by us due to adverse weather conditions, such as heavy rain or high winds, you will be entitled to a full refund or a complimentary rescheduling. In the event of a cancellation initiated by your party, a minimum of 24 hours' notice is required to receive a full refund. For cancellations made with less than 24 hours' notice, the deposit becomes non-refundable, though rescheduling within a 30-day period will be permitted.",
            },
          },
          {
            speaker: "you",
            textEn: "That's fair. We'll be there at 5:30. This is going to be the highlight of our trip!",
            textZh: "很合理。我们5:30到。这一定是我们旅行的亮点！",
            casualVersion: "Fair enough. We'll be there at 5:30. This is gonna be the best part of our trip!",
            commonMistake: {
              wrong: "That's fair. We will be there at 5:30. This will be highlight of our trip!",
              correct: "That's fair. We'll be there at 5:30. This is going to be the highlight of our trip!",
              explanation: '"will be" 听起来更像承诺而非憧憬，口语中 "gonna" 更自然。',
            },
            formalityVariants: {
              casual: "Sounds fair. See you at 5:30. This'll be epic!",
              standard: "That's fair. We'll be there at 5:30. This is going to be the highlight of our trip!",
              formal:
                "That is perfectly reasonable. We shall ensure our presence by 5:30 PM. We anticipate this experience will be a significant highlight of our journey!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 机场内交通 ====================
  {
    id: "transport-17",
    category: "transport",
    titleZh: "机场内交通",
    titleEn: "Airport Internal Transport",
    description: "在大型国际机场内的航站楼之间转运、摆渡车和步行导航",
    otherRole: "机场工作人员",
    otherRoleIcon: "plane",
    flows: [
      // --- Flow 1: 航站楼间转运 ---
      {
        id: "terminal-transfer",
        titleZh: "航站楼间转运",
        titleEn: "Terminal Transfer",
        description: "在大型机场的不同航站楼之间转运",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I landed in Terminal 1 but my connecting flight is in Terminal 4. How do I get there?",
            textZh: "不好意思，我在1号航站楼降落，但转机的航班在4号航站楼。怎么过去？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "You have two options. The AirTrain is the fastest — it's a free automated train that connects all terminals. Take it right outside this door, level 3. Terminal 4 is three stops away, about 8 minutes. Or there's a free shuttle bus at the ground level, but that takes about 20 minutes.",
            textZh:
              "有两种方式。AirTrain 最快——是连接所有航站楼的免费自动列车。就在这个门外面3层坐。到4号航站楼3站，大约8分钟。或者在地面层有免费穿梭巴士，但要大约20分钟。",
            keyPhrases: [
              { en: "connecting flight", zh: "转机航班" },
              { en: "AirTrain", zh: "机场轻轨" },
              { en: "automated train", zh: "自动列车" },
              { en: "shuttle bus", zh: "穿梭巴士" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Follow the signs for 'Inter-Terminal Transport' — you can take the people mover or the shuttle.",
                textZh: "跟着'航站楼间交通'的标志走——可以坐自动列车或穿梭巴士。",
                actionHint: "选择更快的方式",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take the AirTrain. Do I need to go through security again when I get to Terminal 4?",
            textZh: "我坐 AirTrain。到4号航站楼需要重新过安检吗？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "It depends on your situation. If you're staying airside — meaning you don't leave the secure area — then no. But since Terminal 1 and Terminal 4 are in different security zones at this airport, you will need to go through security again. I'd allow at least 30 minutes for that.",
            textZh:
              "取决于情况。如果你一直留在隔离区内——就是不离开安检后的区域——就不用。但这个机场的1号和4号航站楼在不同的安检区域，所以你需要重新过安检。至少预留30分钟。",
            keyPhrases: [
              { en: "airside", zh: "隔离区/安检后区域" },
              { en: "secure area", zh: "安全区域" },
              { en: "security zones", zh: "安检区域" },
              { en: "allow at least", zh: "至少预留" },
            ],
            vocabNotes: {
              airside: {
                meaningInContext: "在这句话里表示：通过安检之后的机场区域，只有持有效登机牌的旅客才能进入",
                similarUsage: "类似用法：Duty-free shops are airside, past security.（免税店在安检后的隔离区内）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Unfortunately yes — T1 and T4 are in different security zones here. You'll have to clear security again. Budget at least 30 minutes for that.",
                textZh: "很遗憾是的——这里1号和4号航站楼在不同安检区。你得重新过安检。至少预留30分钟。",
                actionHint: "预留安检时间",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, you'll need to go through security again at T4. These terminals have separate secure areas. Allow 30 minutes to be safe.",
                textZh: "对，到4号航站楼要重新过安检。这些航站楼安检区是分开的。保险起见留30分钟。",
                actionHint: "提前安排时间",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "My connecting flight boards in 90 minutes. Is that enough time?",
            textZh: "我转机的航班90分钟后登机。时间够吗？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "That should be fine, but don't linger. The AirTrain is 8 minutes, security could be 15 to 30 minutes depending on the queue, and then you'll need to find your gate. My advice: go straight to the AirTrain now and don't stop for food or shopping until you've reached your gate.",
            textZh:
              "应该够，但别耽搁。AirTrain 8分钟，安检看排队情况15到30分钟，然后还要找登机口。我建议：现在直接去坐 AirTrain，到了登机口再考虑吃东西或买东西。",
            keyPhrases: [
              { en: "don't linger", zh: "别耽搁" },
              { en: "queue", zh: "排队" },
              { en: "gate", zh: "登机口" },
            ],
            localVariants: { "en-US": "line", "en-GB": "queue", "en-AU": "queue" },
            alternativeExpressions: [
              {
                textEn:
                  "Tight but doable. Don't stop for anything — go straight to the AirTrain, get through security, and then you can relax at your gate.",
                textZh: "紧但来得及。别停下来——直奔AirTrain，过安检，到了登机口再休息。",
                actionHint: "立刻出发别耽搁",
                frequency: "common",
              },
              {
                textEn:
                  "You should be fine, just don't waste time. AirTrain's 8 minutes, security maybe 20. Head straight there and skip the shops.",
                textZh: "应该没问题，别浪费时间就行。AirTrain 8分钟，安检大约20分钟。直接过去，别逛商店。",
                actionHint: "到登机口再买东西",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Good advice. One question — can I use the moving walkways with my luggage cart, or do I need to carry my bags?",
            textZh: "好建议。问一下——自动步道能推行李车上去吗？还是要自己拎包？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "The moving walkways here are flat, so you can push your cart on them. But you'll need to leave the cart before the AirTrain — no carts allowed on the train. Just grab your bags and step on. There are carts available at Terminal 4 if you need one.",
            textZh:
              "这里的自动步道是平的，可以推车上去。但在坐 AirTrain 之前要把车放下——列车上不让带推车。拿好行李直接上车就行。4号航站楼有推车可以用。",
            keyPhrases: [
              { en: "moving walkways", zh: "自动步道" },
              { en: "luggage cart", zh: "行李推车" },
              { en: "step on", zh: "上车" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The walkways are flat so you can push your cart on them. But no carts on the AirTrain — grab your bags and leave the cart. There are carts at T4 if you need one.",
                textZh: "步道是平的可以推车上去。但AirTrain不让带推车——拿好行李把车放下。4号航站楼有推车可以用。",
                actionHint: "上AirTrain前放下推车",
                frequency: "common",
              },
              {
                textEn:
                  "Cart's fine on the moving walkway. When you get to the AirTrain, ditch the cart and carry your bags on. You can grab another cart on the other side.",
                textZh: "推车在自动步道上没问题。到AirTrain那里放下推车拿行李上车。到了对面可以再拿一个。",
                actionHint: "到了再找新推车",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Thanks. And on the AirTrain, how will I know which stop to get off at? I don't want to miss Terminal 4.",
            textZh: "谢谢。在 AirTrain 上，怎么知道在哪站下？我不想坐过4号航站楼。",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "There are automated announcements and a screen showing the next stop. It goes Terminal 1, 2, 3, 4, 5 in order. So when you hear 'Next stop: Terminal 4,' get ready to step off. If you miss it, just stay on — it loops around. You'll come back to Terminal 4.",
            textZh:
              "有自动报站和屏幕显示下一站。按顺序走：1号、2号、3号、4号、5号航站楼。听到'下一站：4号航站楼'就准备下车。如果坐过了也没关系，不用下车——它是环形的，会回到4号航站楼。",
            keyPhrases: [
              { en: "automated announcements", zh: "自动报站" },
              { en: "in order", zh: "按顺序" },
              { en: "loops around", zh: "环形运行" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a screen and announcements. It goes 1, 2, 3, 4, 5 — so yours is three stops. If you miss it, no biggie — it loops back around.",
                textZh: "有屏幕和报站。按1、2、3、4、5的顺序——你的是第三站。坐过了也没事——环形的会绕回来。",
                actionHint: "数好三站",
                frequency: "common",
              },
              {
                textEn:
                  "You'll hear 'Terminal 4' announced and see it on the display. Can't really miss it. And even if you do, it's a loop — just stay on.",
                textZh: "会听到报'4号航站楼'屏幕上也会显示。不太会坐过。就算坐过了也没事，环形线不用下车。",
                actionHint: "留意报站",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, that's very clear. I'll head to the AirTrain now. Thank you so much for your help!",
            textZh: "很清楚了。我现在就去坐 AirTrain。非常感谢你的帮助！",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "You're welcome! Follow the purple signs — they'll lead you right to the AirTrain. Good luck with your connection, and safe travels!",
            textZh: "不客气！跟着紫色标志走——会直接带你到 AirTrain。祝转机顺利，一路平安！",
            keyPhrases: [
              { en: "follow the signs", zh: "跟着标志走" },
              { en: "connection", zh: "转机" },
              { en: "safe travels", zh: "一路平安" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! Just follow the purple signs to the AirTrain. You'll be fine. Safe travels!",
                textZh: "不客气！跟着紫色标志走去AirTrain。没问题的。一路平安！",
                actionHint: "找紫色标志",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help! Purple signs will take you right there. Good luck with your connection — have a great flight!",
                textZh: "很高兴帮到你！紫色标志会带你到。祝转机顺利——旅途愉快！",
                actionHint: "跟着标志走",
                frequency: "common",
              },
            ],
          },
        ],
      },
      // --- Flow 2: 机场迷路 ---
      {
        id: "lost-in-airport",
        titleZh: "机场迷路求助",
        titleEn: "Lost in the Airport",
        description: "在大型机场迷路后向工作人员求助找到正确方向",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn:
              "Excuse me, I'm completely lost. I need to get to Gate B36 but I have no idea where I am. Can you help me?",
            textZh: "不好意思，我完全迷路了。我要去B36登机口但完全不知道自己在哪。能帮帮我吗？",
            casualVersion: "Hey, totally lost. Gotta get to Gate B36 but no clue where I'm at. Can you help?",
            commonMistake: {
              wrong: "I very lost. I need go to Gate B36. Can you help me?",
              correct: "I'm completely lost. I need to get to Gate B36. Can you help me?",
              explanation: "“very lost” 不如 “completely lost” 自然；“need go to” 语法错误，应为 “need to get to”.",
            },
            formalityVariants: {
              casual: "Hey, totally lost. Gotta get to Gate B36 but no clue where I'm at. Can you help?",
              standard:
                "Excuse me, I'm completely lost. I need to get to Gate B36 but I have no idea where I am. Can you help me?",
              formal:
                "Pardon me, I seem to be rather disoriented. My flight departs from Gate B36, and I am currently unsure of my location. Would you be so kind as to assist me?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Of course! You're currently in Concourse A. Gate B36 is in Concourse B, which is the next building over. Don't worry — it happens to everyone in this airport, it's huge! Do you see the signs overhead that say 'Gates B'?",
            textZh:
              "当然可以！你现在在A候机厅。B36登机口在B候机厅，就是旁边那栋。别担心——这个机场太大了，谁都会迷路！你看到头上写着'B登机口'的标志了吗？",
            keyPhrases: [
              { en: "Concourse", zh: "候机厅" },
              { en: "overhead", zh: "头上的" },
            ],
            vocabNotes: {
              concourse: {
                meaningInContext:
                  "在这句话里表示：机场里的一个大的候机区域，通常用字母编号（A、B、C），里面有一排登机口",
                similarUsage: "类似用法：Meet me at the food court in Concourse C.（在C候机厅的美食广场见）",
              },
            },
            alternativeExpressions: [
              {
                textEn: "No worries! B gates are this way. Follow me, I'll point you in the right direction.",
                textZh: "别担心！B登机口这边走。跟我来，我给你指路。",
                actionHint: "跟着工作人员走",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure! You're in Concourse A. B36's in Concourse B, next building over. Don't worry, everyone gets lost here, it's massive! See the 'Gates B' signs up there?",
            formalityVariants: {
              casual:
                "Sure! You're in Concourse A. B36's in Concourse B, next building over. Don't worry, everyone gets lost here, it's massive! See the 'Gates B' signs up there?",
              standard:
                "Of course! You're currently in Concourse A. Gate B36 is in Concourse B, which is the next building over. Don't worry — it happens to everyone in this airport, it's huge! Do you see the signs overhead that say 'Gates B'?",
              formal:
                "Certainly! You are presently located in Concourse A. Gate B36 is situated in Concourse B, which is the adjacent terminal. Please do not be concerned — this is a common occurrence in an airport of this scale. May I direct your attention to the overhead signage indicating 'Gates B'?",
            },
          },
          {
            speaker: "you",
            textEn:
              "I see them! So I just follow the signs? Is it far? My flight boards in 40 minutes and I'm starting to panic.",
            textZh: "看到了！跟着标志走就行？远吗？我的航班40分钟后登机，我开始慌了。",
            casualVersion: "Got 'em! Just follow the signs? Far? Flight boards in 40, kinda freaking out.",
            commonMistake: {
              wrong: "My flight will get on in 40 minutes. I'm starting panic.",
              correct: "My flight boards in 40 minutes and I'm starting to panic.",
              explanation:
                "“get on” 不太用于航班登机，应使用 “board”。“starting panic” 语法错误，应为 “starting to panic”。",
            },
            formalityVariants: {
              casual: "Got 'em! Just follow the signs? Far? Flight boards in 40, kinda freaking out.",
              standard:
                "I see them! So I just follow the signs? Is it far? My flight boards in 40 minutes and I'm starting to panic.",
              formal:
                "Indeed, I do! Am I to simply follow the directional signage? Is the distance considerable? My flight commences boarding in 40 minutes, and I confess I am becoming rather anxious.",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "You have plenty of time — don't panic. Walk straight ahead, past the duty-free shops. You'll see a junction — turn left at the big 'B' sign. Then it's about a 5-minute walk. Gate numbers go in order, so B36 will be on the right-hand side near the end.",
            textZh:
              "时间充裕——别慌。一直往前走，经过免税店。你会看到一个岔路口——在大大的'B'标志那里左转。然后走大约5分钟。登机口按顺序排的，B36在右手边靠里面。",
            keyPhrases: [
              { en: "plenty of time", zh: "时间充裕" },
              { en: "duty-free shops", zh: "免税店" },
              { en: "junction", zh: "岔路口" },
              { en: "right-hand side", zh: "右手边" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Plenty of time, no worries. Go straight, past duty-free, left at the big 'B' sign. Five-minute walk and B36 is on the right toward the end.",
                textZh: "时间充裕，别急。一直走，过免税店，在大大的'B'标志左转。走5分钟，B36在右边靠里面。",
                actionHint: "在'B'标志左转",
                frequency: "common",
              },
              {
                textEn:
                  "You're totally fine on time. Walk straight through, hang a left at the 'B' junction, and it's about 5 minutes. B36 will be on your right.",
                textZh: "时间完全够。一直走，'B'岔路口左转，大约5分钟。B36在你右手边。",
                actionHint: "直走然后左转",
                frequency: "common",
              },
            ],
            casualVersion:
              "Plenty of time, no need to panic. Just go straight, past duty-free. You'll hit a split, take a left at the big 'B'. Then it's like a 5-min walk. Gates go in order, so B36'll be on the right, near the end.",
            formalityVariants: {
              casual:
                "Plenty of time, no need to panic. Just go straight, past duty-free. You'll hit a split, take a left at the big 'B'. Then it's like a 5-min walk. Gates go in order, so B36'll be on the right, near the end.",
              standard:
                "You have plenty of time — don't panic. Walk straight ahead, past the duty-free shops. You'll see a junction — turn left at the big 'B' sign. Then it's about a 5-minute walk. Gate numbers go in order, so B36 will be on the right-hand side near the end.",
              formal:
                "You have ample time, so there is no cause for concern. Proceed directly ahead, beyond the duty-free establishments. You will encounter a junction; kindly turn left at the prominent 'B' sign. The gate will then be approximately a five-minute walk. Gate numbers are sequential, thus B36 will be located on the right-hand side towards the terminal's conclusion.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! I also need to fill my water bottle. Are there water fountains in Concourse B?",
            textZh: "谢谢！我还需要接点水。B候机厅有饮水台吗？",
            casualVersion: "Thanks! Also gotta fill my water bottle. Any water fountains in Concourse B?",
            commonMistake: {
              wrong: "Thank you! I also need fill water. Have water machine in Concourse B?",
              correct: "Thank you! I also need to fill my water bottle. Are there water fountains in Concourse B?",
              explanation:
                "“fill water” 不完整，应为 “fill my water bottle”。“water machine” 不地道，应为 “water fountain” 或 “bottle-filling station”。",
            },
            formalityVariants: {
              casual: "Thanks! Also gotta fill my water bottle. Any water fountains in Concourse B?",
              standard: "Thank you! I also need to fill my water bottle. Are there water fountains in Concourse B?",
              formal:
                "Thank you kindly! I also require access to a water refilling station. Are there water fountains available within Concourse B?",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Yes! There are bottle-filling stations near every restroom — look for the blue signs. There's one right next to Gate B32, which is close to your gate. You can also grab a coffee at the Starbucks near B30.",
            textZh:
              "有的！每个卫生间附近都有饮水站——找蓝色标志。B32登机口旁边就有一个，离你的登机口很近。B30附近的星巴克也可以买杯咖啡。",
            keyPhrases: [
              { en: "bottle-filling stations", zh: "饮水站/灌水台" },
              { en: "close to your gate", zh: "离你的登机口近" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep! There are water bottle fillers by every restroom — look for the blue signs. There's one right by B32, super close to your gate.",
                textZh: "有！每个卫生间旁边都有接水的——找蓝色标志。B32旁边就有一个，离你的登机口很近。",
                actionHint: "找蓝色标志",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, there's bottle refill stations all over. Closest one to you is near Gate B32. Blue sign, can't miss it.",
                textZh: "当然，到处都有饮水站。离你最近的在B32登机口旁边。蓝色标志，很好找。",
                actionHint: "B32旁边有饮水站",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep! Bottle-filling stations near every restroom — look for blue signs. One right next to B32, super close to your gate. Can also grab coffee at Starbucks near B30.",
            formalityVariants: {
              casual:
                "Yep! Bottle-filling stations near every restroom — look for blue signs. One right next to B32, super close to your gate. Can also grab coffee at Starbucks near B30.",
              standard:
                "Yes! There are bottle-filling stations near every restroom — look for the blue signs. There's one right next to Gate B32, which is close to your gate. You can also grab a coffee at the Starbucks near B30.",
              formal:
                "Indeed! Bottle-filling stations are conveniently located near every restroom facility; please refer to the blue signage. Specifically, there is one adjacent to Gate B32, which is in close proximity to your designated gate. Furthermore, you may procure a coffee at the Starbucks located near B30.",
            },
          },
          {
            speaker: "you",
            textEn: "One more thing — is there anywhere I can charge my phone? It's almost dead.",
            textZh: "再问一下——哪里可以给手机充电？快没电了。",
            casualVersion: "Oh, one more thing — where can I charge my phone? It's practically dead.",
            commonMistake: {
              wrong: "One more thing — where can charge phone? My phone no power.",
              correct: "One more thing — is there anywhere I can charge my phone? It's almost dead.",
              explanation:
                "“charge phone” 缺少代词 “my”。“My phone no power” 语法不正确，更自然的说法是 “It's almost dead” 或 “My phone has no power”.",
            },
            formalityVariants: {
              casual: "Oh, one more thing — where can I charge my phone? It's practically dead.",
              standard: "One more thing — is there anywhere I can charge my phone? It's almost dead.",
              formal:
                "One final inquiry, if I may — are there facilities available where I can charge my mobile telephone? Its battery is critically low.",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Most of the seats in Concourse B have USB charging ports built into the armrests. And there are free charging stations — the tall kiosks with multiple cables — scattered around the concourse. You should find one near your gate. If not, the airline lounge near B34 has plenty of outlets.",
            textZh:
              "B候机厅大部分座位的扶手上都有USB充电口。还有免费充电站——带多条数据线的高立柱——分布在候机厅各处。你的登机口附近应该有。如果没有，B34附近的航空公司贵宾室有很多插座。",
            keyPhrases: [
              { en: "USB charging ports", zh: "USB充电口" },
              { en: "charging stations", zh: "充电站" },
              { en: "outlets", zh: "插座" },
              { en: "airline lounge", zh: "航空公司贵宾室" },
            ],
            culturalNote:
              "美国大型机场通常在座位区提供免费USB充电口。但要注意：公共USB充电口有安全风险，建议用自己的充电器插电源插座更安全。",
            alternativeExpressions: [
              {
                textEn:
                  "Most seats have USB ports in the armrests. There's also free charging kiosks around — tall things with cables. Should be one near your gate.",
                textZh: "大部分座位扶手上有USB口。还有免费的充电柱——高高的带数据线的。你的登机口附近应该有。",
                actionHint: "找座位上的USB口",
                frequency: "common",
              },
              {
                textEn:
                  "Check the armrests — there's USB charging built in. Or look for the standing charging stations scattered around. Tons of outlets near the gates.",
                textZh: "看看扶手——内置了USB充电。或者找分布在各处的立式充电站。登机口附近插座很多。",
                actionHint: "用自己的充电器更安全",
                frequency: "common",
              },
            ],
            casualVersion:
              "Most seats in Concourse B have USB chargers in the armrests. Plus, there are free charging stations — those tall kiosks with tons of cables — all over. Should be one near your gate. If not, the lounge near B34 has tons of outlets.",
            formalityVariants: {
              casual:
                "Most seats in Concourse B have USB chargers in the armrests. Plus, there are free charging stations — those tall kiosks with tons of cables — all over. Should be one near your gate. If not, the lounge near B34 has tons of outlets.",
              standard:
                "Most of the seats in Concourse B have USB charging ports built into the armrests. And there are free charging stations — the tall kiosks with multiple cables — scattered around the concourse. You should find one near your gate. If not, the airline lounge near B34 has plenty of outlets.",
              formal:
                "The majority of seating areas within Concourse B are equipped with integrated USB charging ports in their armrests. Additionally, complimentary charging stations — the upright kiosks providing various charging cables — are disbursed throughout the concourse. You should locate one in proximity to your gate. Should that prove unsuccessful, the airline lounge situated near B34 offers an abundance of power outlets.",
            },
          },
          {
            speaker: "you",
            textEn: "You've been incredibly helpful. I feel much better now. Thank you!",
            textZh: "你帮了大忙。我现在安心多了。谢谢！",
            casualVersion: "You've been a lifesaver. Feel way better now. Thanks!",
            commonMistake: {
              wrong: "You very help. I feel better. Thank you.",
              correct: "You've been incredibly helpful. I feel much better now. Thank you!",
              explanation:
                "“You very help” 语法错误，应为 “You've been very helpful”。“feel better” 可以，但 “much better” 程度更深。",
            },
            formalityVariants: {
              casual: "You've been a lifesaver. Feel way better now. Thanks!",
              standard: "You've been incredibly helpful. I feel much better now. Thank you!",
              formal:
                "I am profoundly grateful for your exceptional assistance. I feel significantly more at ease now. Thank you sincerely!",
            },
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Happy to help! Just follow those signs and you'll be fine. And remember — if you ever get lost again, look for staff in blue vests like mine, or use the information kiosks — the touchscreen ones with the airport map. Have a great flight!",
            textZh:
              "很高兴能帮到你！跟着标志走就没问题。记住——如果再迷路了，找穿像我这样蓝色背心的工作人员，或者用信息查询台——那些有机场地图的触屏设备。祝旅途愉快！",
            keyPhrases: [
              { en: "blue vests", zh: "蓝色背心" },
              { en: "information kiosks", zh: "信息查询台" },
              { en: "touchscreen", zh: "触屏的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You got it! Follow the signs and you're golden. If you get lost again, find someone in a blue vest like me, or use the touchscreen maps around the concourse.",
                textZh: "没问题！跟着标志走就行。再迷路的话找穿蓝色背心的人，或者用候机厅里的触屏地图。",
                actionHint: "记住找蓝色背心",
                frequency: "common",
              },
              {
                textEn:
                  "Glad I could help! Just follow those B signs. And if you ever need help, look for staff in blue vests or the info kiosks with maps. Safe travels!",
                textZh: "很高兴帮到你！跟着B标志走。需要帮助的话找蓝背心的工作人员或者信息查询台。一路平安！",
                actionHint: "记住求助方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "Glad to help! Just follow the signs, you'll be golden. And hey, if you get lost again, look for staff in blue vests like mine, or those touchscreen info kiosks with the map. Have a good flight!",
            formalityVariants: {
              casual:
                "Glad to help! Just follow the signs, you'll be golden. And hey, if you get lost again, look for staff in blue vests like mine, or those touchscreen info kiosks with the map. Have a good flight!",
              standard:
                "Happy to help! Just follow those signs and you'll be fine. And remember — if you ever get lost again, look for staff in blue vests like mine, or use the information kiosks — the touchscreen ones with the airport map. Have a great flight!",
              formal:
                "It was my distinct pleasure to assist you! Simply adhere to the directional signage, and you will arrive without difficulty. Please remember — should you find yourself disoriented in the future, seek out staff members wearing blue vests, or utilize the interactive information kiosks, specifically those featuring a touchscreen airport map. I wish you a most pleasant journey!",
            },
          },
        ],
      },
      // --- Flow 3: 机场无障碍服务 ---
      {
        id: "airport-assistance",
        titleZh: "请求机场协助服务",
        titleEn: "Requesting Airport Assistance",
        description: "为老人或行动不便的家人请求机场轮椅服务和协助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, my mother is elderly and has difficulty walking long distances. Is there a wheelchair service available?",
            textZh: "你好，我母亲年纪大了，走远路很困难。有轮椅服务吗？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Absolutely. We provide complimentary wheelchair assistance. I'll radio for one right now. An attendant will come with a wheelchair and escort your mother all the way to the gate. Which flight are you on?",
            textZh:
              "当然有。我们提供免费轮椅协助。我现在就呼叫。服务人员会推轮椅来，一路送你母亲到登机口。你们的航班是哪个？",
            keyPhrases: [
              { en: "wheelchair assistance", zh: "轮椅协助" },
              { en: "complimentary", zh: "免费的" },
              { en: "attendant", zh: "服务人员" },
              { en: "escort", zh: "护送" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course. Let me arrange wheelchair service. It's completely free. What gate do you need to get to?",
                textZh: "当然可以。我来安排轮椅服务。完全免费的。你们要去哪个登机口？",
                actionHint: "提供航班信息和登机口",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "We're on United Flight 892 to Shanghai, Gate C22. How long will the wheelchair take? We still need to go through security.",
            textZh: "我们坐联合航空892航班去上海，C22登机口。轮椅要等多久？我们还要过安检。",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "About 5 to 10 minutes. The attendant will also help you through security — wheelchair passengers get to use the priority lane, so it should be quicker. They can assist with placing bags on the belt and everything.",
            textZh:
              "大约5到10分钟。服务人员还会帮你们过安检——轮椅旅客可以走优先通道，会更快。他们可以帮忙把包放上传送带什么的。",
            keyPhrases: [
              { en: "priority lane", zh: "优先通道" },
              { en: "belt", zh: "传送带" },
              { en: "assist with", zh: "帮助做某事" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Give it 5-10 minutes. They'll also fast-track you through security — wheelchair passengers get the priority line. They help with the bags and everything.",
                textZh: "等5-10分钟。他们还会帮你们快速过安检——轮椅旅客走优先通道。包放传送带什么的都帮忙。",
                actionHint: "等待轮椅服务",
                frequency: "common",
              },
              {
                textEn:
                  "Should be here in under 10 minutes. Good news — they take you through the priority security lane, so it's much faster. They handle everything.",
                textZh: "10分钟内到。好消息是——他们带你走安检优先通道，快很多。什么都帮你办好。",
                actionHint: "享受优先通道",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's wonderful. Will they also help us when we board the plane?",
            textZh: "太好了。登机的时候也会帮忙吗？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "Yes! Wheelchair passengers board first — before all other groups. The attendant will take your mother right up to the jet bridge and help her onto the aircraft. On the other end in Shanghai, the airline will arrange wheelchair assistance at arrival too — just mention it to the flight crew.",
            textZh:
              "会的！轮椅旅客最先登机——比所有其他组都早。服务人员会把你母亲送到廊桥并帮她上飞机。到上海那边，航空公司也会安排接机轮椅服务——跟机组人员说一下就行。",
            keyPhrases: [
              { en: "board first", zh: "最先登机" },
              { en: "jet bridge", zh: "廊桥/登机桥" },
              { en: "flight crew", zh: "机组人员" },
            ],
            vocabNotes: {
              "jet bridge": {
                meaningInContext: "在这句话里表示：连接航站楼登机口和飞机舱门的封闭通道",
                similarUsage:
                  "类似用法：Please wait in the jet bridge until the cabin door opens.（请在廊桥等候直到舱门打开）",
              },
            },
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. Wheelchair passengers pre-board — before everyone else. They'll wheel her right up to the plane. And let the crew know so Shanghai arranges a chair on arrival too.",
                textZh:
                  "当然。轮椅旅客优先登机——比所有人都早。会推她直接到飞机跟前。告诉机组一声，上海那边也会安排轮椅接机。",
                actionHint: "提前告诉机组人员",
                frequency: "common",
              },
              {
                textEn:
                  "Yep, she'll board first. The attendant takes her through the jet bridge onto the aircraft. Just mention it to the flight crew and they'll set up wheelchair service in Shanghai too.",
                textZh: "会的，她最先登机。服务人员会推她走廊桥上飞机。跟机组说一下，他们会在上海也安排轮椅。",
                actionHint: "跟空乘说需要到达轮椅",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is there anything we need to fill out or sign for the wheelchair service?",
            textZh: "轮椅服务需要填什么表或签字吗？",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "No paperwork needed. It's a standard service provided under the Air Carrier Access Act — every airline is required to offer it. Just keep your boarding passes ready. Oh, and one tip: it's customary to tip the wheelchair attendant $5 to $10, but it's not mandatory.",
            textZh:
              "不需要填表。这是《航空运输无障碍法案》规定的标准服务——每个航空公司都必须提供。把登机牌准备好就行。对了，提示一下：习惯上给轮椅服务人员5到10美元小费，但不是必须的。",
            keyPhrases: [
              { en: "no paperwork", zh: "不需要填表" },
              { en: "Air Carrier Access Act", zh: "航空运输无障碍法案" },
              { en: "customary", zh: "习惯上的" },
              { en: "mandatory", zh: "必须的/强制的" },
            ],
            culturalMeaning:
              "在美国，给轮椅服务人员小费是一种文化习惯，虽然不是强制的，但大多数人都会给。5-10美元是合适的金额。",
            alternativeExpressions: [
              {
                textEn:
                  "No forms, nothing. It's required by law — every airline has to provide it. Just have your boarding passes handy. Oh, and tipping the attendant $5-10 is appreciated but not required.",
                textZh:
                  "不用填表，什么都不用。法律规定的——每家航空公司都必须提供。登机牌准备好就行。对了，给服务人员5-10美元小费不是必须但会很感激。",
                actionHint: "准备好登机牌和小费",
                frequency: "common",
              },
              {
                textEn:
                  "Zero paperwork. It's a legal requirement under federal law. Keep your boarding passes ready and that's it. A small tip for the attendant is customary but optional.",
                textZh: "完全不需要填表。联邦法律规定的服务。登机牌准备好就行。给服务人员一点小费是惯例但不强制。",
                actionHint: "小费是惯例",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "I'll definitely tip them. This service is so helpful — my mother was really worried about the long walk. Thank you for making it easy.",
            textZh: "我一定会给小费的。这个服务太贴心了——我妈本来很担心走那么远。谢谢你让一切变得容易。",
          },
          {
            speaker: "them",
            role: "机场工作人员",
            textEn:
              "That's what we're here for! Ah, here comes the attendant with the wheelchair now. This is Maria — she'll take great care of your mother. Have a safe flight to Shanghai!",
            textZh: "这就是我们的工作！啊，服务人员推着轮椅来了。这是 Maria——她会好好照顾你母亲的。祝飞上海一路平安！",
            keyPhrases: [
              { en: "that's what we're here for", zh: "这就是我们的工作" },
              { en: "take great care of", zh: "好好照顾" },
              { en: "safe flight", zh: "一路平安" },
            ],
            literalMeaning:
              '"that\'s what we\'re here for" 字面意思是 "这就是我们在这里的原因"，实际表示 "这就是我的职责/很乐意帮忙"',
            alternativeExpressions: [
              {
                textEn:
                  "It's my pleasure! Here's your wheelchair and attendant now. This is Maria — she'll look after your mom. Have a wonderful flight!",
                textZh: "我的荣幸！轮椅和服务人员到了。这是Maria——她会照顾你妈妈。祝旅途愉快！",
                actionHint: "跟着Maria走",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to help! Oh perfect timing, here comes the wheelchair. Maria here will take great care of your mother all the way to the gate. Safe flight!",
                textZh: "很高兴帮到你！正好，轮椅来了。Maria会一路照顾你母亲到登机口。一路平安！",
                actionHint: "把母亲交给Maria",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 城市公交 ====================
  {
    id: "transport-city-bus",
    category: "transport",
    titleZh: "坐城市公交",
    titleEn: "Taking a City Bus",
    description: "在城市内乘坐公交车，包括找站台、问路线、刷卡付费等",
    otherRole: "公交司机 / 乘客",
    otherRoleIcon: "bus",
    journeyPhase: "daily",
    priority: "must",
    flows: [
      {
        id: "boarding",
        titleZh: "上车与付费",
        titleEn: "Boarding & Paying the Fare",
        description: "找到正确的公交线路，上车刷卡或投币",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, does this bus go to downtown?",
            textZh: "请问，这趟公交去市中心吗？",
            casualVersion: "Hey, does this go downtown?",
            commonMistake: {
              wrong: "Does this bus arrive downtown?",
              correct: "Does this bus go to downtown?",
              explanation: 'arrive 指到达，多用于人或物。路线常用 "go to" 或 "head to"',
            },
            formalityVariants: {
              casual: "Hey, does this bus go downtown?",
              standard: "Excuse me, does this bus go to downtown?",
              formal: "Pardon me, could you please tell me if this bus is headed towards downtown?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, this is the number 7. Downtown is about 15 stops from here.",
            textZh: "是的，这是7路。市中心大约15站。",
            keyPhrases: [
              { en: "number 7", zh: "7路" },
              { en: "stops", zh: "站" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, this is the 7. Gets you downtown — about 15 stops.",
                textZh: "对，这是7路。到市中心——大约15站。",
                actionHint: "确认上对了车",
                frequency: "common",
              },
              {
                textEn: "You're on the right bus. Number 7 goes straight to downtown, about 15 stops from here.",
                textZh: "你坐对了。7路直达市中心，从这里大约15站。",
                actionHint: "可以上车了",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, this is the 7. Downtown's like 15 stops from here.",
            formalityVariants: {
              casual: "Yeah, it's the 7. Downtown's probably like 15 stops away.",
              standard: "Yes, this is the number 7. Downtown is about 15 stops from here.",
              formal:
                "Yes, you are indeed on the number 7 route. The downtown area is approximately 15 stops distant from our current location.",
            },
          },
          {
            speaker: "you",
            textEn: "How much is the fare?",
            textZh: "票价多少？",
            casualVersion: "What's the fare?",
            commonMistake: {
              wrong: "How much is fare?",
              correct: "How much is the fare?",
              explanation: "“fare”在这里特指票价，需要加定冠词“the”。",
            },
            formalityVariants: {
              casual: "What's the fare?",
              standard: "How much is the fare?",
              formal: "Could you please inform me of the cost of the fare?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "It's $2.50. You can pay with exact change, a transit card, or tap your phone.",
            textZh: "2.5美元。可以投币（需自备零钱）、刷公交卡，或手机刷卡。",
            keyPhrases: [
              { en: "exact change", zh: "自备零钱（不找零）" },
              { en: "transit card", zh: "公交卡" },
              { en: "tap your phone", zh: "手机刷卡" },
            ],
            culturalNote: "美国公交通常不找零，需要自备零钱。很多城市支持手机支付（Apple Pay等）。",
            alternativeExpressions: [
              {
                textEn:
                  "Two-fifty. Exact change only, or you can use a transit card. Tap works too if you've got Apple Pay or Google Pay.",
                textZh: "2.5美元。只收正好的零钱，或者用公交卡。有Apple Pay或Google Pay也能刷。",
                actionHint: "准备好付款方式",
                frequency: "common",
              },
              {
                textEn: "$2.50. We don't make change, so have the right amount or use your phone to tap.",
                textZh: "2.5美元。我们不找零，准备好零钱或者用手机刷。",
                actionHint: "不找零要自备",
                frequency: "common",
              },
            ],
            casualVersion: "It's two-fifty. Exact change, transit card, or just tap your phone.",
            commonMistake: {
              wrong: "You can pay by exact change.",
              correct: "You can pay with exact change.",
              explanation: "“pay with”用于支付方式的工具。",
            },
            formalityVariants: {
              casual: "Two fifty. Just use exact change, your transit card, or tap your phone.",
              standard: "It's $2.50. You can pay with exact change, a transit card, or tap your phone.",
              formal:
                "The fare is $2.50. Payment methods include exact cash, a valid transit card, or a contactless mobile payment.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll tap my phone. Can you tell me when we reach City Hall?",
            textZh: "我用手机刷。到市政厅的时候能提醒我吗？",
            casualVersion: "I'll just tap my phone. Could you let me know when we hit City Hall?",
            commonMistake: {
              wrong: "Can you remind me when we arrive City Hall?",
              correct: "Can you tell me when we reach City Hall?",
              explanation: '"remind"是提醒已知的，"tell"是告知未知的。抵达地点常用"reach"或"get to"。',
            },
            formalityVariants: {
              casual: "I'll just tap. Could you lemme know when we get to City Hall?",
              standard: "I'll tap my phone. Can you tell me when we reach City Hall?",
              formal:
                "I shall utilize the mobile payment option. Would it be possible for you to alert me upon our arrival at City Hall?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Sure thing. There's also an electronic sign that shows the next stop. Just keep an eye on it.",
            textZh: "没问题。车上也有电子显示牌会显示下一站。留意一下就行。",
            keyPhrases: [
              { en: "electronic sign", zh: "电子显示牌" },
              { en: "next stop", zh: "下一站" },
              { en: "keep an eye on", zh: "留意" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, I'll give you a shout. There's a display up front that shows the next stop too, so watch for it.",
                textZh: "好的，我会叫你。前面还有个显示屏会显示下一站，留意一下。",
                actionHint: "看前方显示屏",
                frequency: "common",
              },
              {
                textEn:
                  "No problem, I'll let you know. You can also check the screen above the door — it shows every stop.",
                textZh: "没问题，我会提醒你。你也可以看门上方的屏幕——每站都显示。",
                actionHint: "关注门上方的屏幕",
                frequency: "common",
              },
            ],
            casualVersion: "No problem. There's also a screen showing the next stop, so just watch that.",
            formalityVariants: {
              casual: "Yeah, no problem. Plus, there's a screen showing the next stop, so just look at that.",
              standard: "Sure thing. There's also an electronic sign that shows the next stop. Just keep an eye on it.",
              formal:
                "Certainly. Additionally, an electronic display board indicates the upcoming stop. Kindly monitor it for your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thank you!",
            textZh: "好的，谢谢！",
            casualVersion: "Cool, thanks!",
            commonMistake: {
              wrong: "Very good, thank you!",
              correct: "Great, thank you!",
              explanation: '"Great"或"Good"更常用于表示理解或肯定，"Very good"略显生硬。',
            },
            formalityVariants: {
              casual: "Awesome, thanks!",
              standard: "Great, thank you!",
              formal: "Excellent, I appreciate your assistance!",
            },
          },
        ],
      },
      {
        id: "transfer",
        titleZh: "换乘与下车",
        titleEn: "Transfers & Getting Off",
        description: "需要换乘另一条线路或到站下车",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need to transfer to the number 12 bus. Where should I get off?",
            textZh: "请问，我需要换乘12路公交，应该在哪站下车？",
            casualVersion: "Hey, gotta transfer to the 12. Where do I get off?",
            commonMistake: {
              wrong: "Excuse me, I need to change bus 12. Where should I get down?",
              correct: "Excuse me, I need to transfer to the number 12 bus. Where should I get off?",
              explanation: '换乘用"transfer to"，下车用"get off"。"change bus"不地道，"get down"也不是自然说法。',
            },
            formalityVariants: {
              casual: "Hey, I gotta transfer to the 12. Where do I hop off?",
              standard: "Excuse me, I need to transfer to the number 12 bus. Where should I get off?",
              formal:
                "Pardon me, I require a transfer to the number 12 bus route. Could you kindly advise me on the appropriate stop for disembarking?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Get off at Oak Street — that's three stops from here. The number 12 stop is right across the street.",
            textZh: "在Oak Street下车——从这里还有三站。12路的站台就在马路对面。",
            keyPhrases: [
              { en: "get off at", zh: "在……下车" },
              { en: "right across the street", zh: "就在马路对面" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oak Street — three more stops. The 12 picks up right across the road, you can't miss it.",
                textZh: "Oak Street——还有三站。12路就在马路对面上车，很好找。",
                actionHint: "三站后下车",
                frequency: "common",
              },
              {
                textEn:
                  "Hop off at Oak Street, that's three stops away. Cross the street and you'll see the number 12 stop.",
                textZh: "Oak Street下车，还有三站。过马路就能看到12路的站台。",
                actionHint: "过马路找12路",
                frequency: "common",
              },
            ],
            casualVersion: "Hop off at Oak Street — it's three stops away. The 12 stop's just across the street.",
            formalityVariants: {
              casual: "Hop off at Oak Street — it's like three stops from now. The 12 is just across the street.",
              standard:
                "Get off at Oak Street — that's three stops from here. The number 12 stop is right across the street.",
              formal:
                "You will need to disembark at Oak Street, which is three stops distant from this location. The stop for the number 12 route is situated directly across the thoroughfare.",
            },
          },
          {
            speaker: "you",
            textEn: "Do I need to pay again when I transfer?",
            textZh: "换乘需要再付一次钱吗？",
            casualVersion: "Gotta pay again to transfer?",
            commonMistake: {
              wrong: "Need I pay again when I transfer?",
              correct: "Do I need to pay again when I transfer?",
              explanation: '"Need I"句式较老旧，现代英语中常用"Do I need to"。',
            },
            formalityVariants: {
              casual: "Gotta pay again to transfer?",
              standard: "Do I need to pay again when I transfer?",
              formal: "Is an additional payment required for the transfer?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "If you paid with a transit card, the transfer is free within two hours. If you paid cash, you should have asked for a transfer slip.",
            textZh: "如果用公交卡付的，两小时内换乘免费。如果投币的话，上车时应该要一张换乘票。",
            keyPhrases: [
              { en: "transfer", zh: "换乘" },
              { en: "transfer slip", zh: "换乘票" },
              { en: "within two hours", zh: "两小时内" },
            ],
            culturalNote:
              "很多城市的公交系统提供换乘优惠，但需要用公交卡才能自动生效。投币乘客需要主动向司机要换乘票。",
            alternativeExpressions: [
              {
                textEn:
                  "With a transit card it's free to transfer within two hours. If you paid cash, you should've gotten a transfer slip from the driver.",
                textZh: "公交卡两小时内免费换乘。投币的话应该找司机要了换乘票才行。",
                actionHint: "确认有换乘资格",
                frequency: "common",
              },
              {
                textEn:
                  "Did you use a card? Then you're good — free transfer for 2 hours. Cash riders need a transfer ticket from the driver.",
                textZh: "你刷卡了吗？那就没问题——2小时内免费换乘。投币的话需要找司机要换乘票。",
                actionHint: "检查付款方式",
                frequency: "common",
              },
            ],
            casualVersion:
              "If you used a transit card, the transfer's free for two hours. Paid cash? Should've asked for a transfer slip.",
            commonMistake: {
              wrong: "If you paid cash, you should ask for a transfer slip.",
              correct: "If you paid cash, you should have asked for a transfer slip.",
              explanation: '"should have asked"表示过去本该做但没做的事。',
            },
            formalityVariants: {
              casual: "Transit card? Transfer's free for two hours. Cash? You should've gotten a slip.",
              standard:
                "If you paid with a transit card, the transfer is free within two hours. If you paid cash, you should have asked for a transfer slip.",
              formal:
                "Should you have utilized a transit card, the transfer is complimentary within a two-hour period. However, if your payment was rendered in cash, it would have been necessary to request a transfer slip at the time of your initial boarding.",
            },
          },
          {
            speaker: "you",
            textEn: "I used my transit card, so I should be fine. How do I signal the driver to stop?",
            textZh: "我用的公交卡，应该没问题。怎么让司机知道我要下车？",
            culturalNote: "美国公交下车需要主动示意司机。",
            casualVersion: "Used my transit card, so I'm good. How do I let the driver know to stop?",
            commonMistake: {
              wrong: "How to signal the driver to stop?",
              correct: "How do I signal the driver to stop?",
              explanation: "询问如何做某事时，疑问句结构需要助动词和主语。",
            },
            formalityVariants: {
              casual: "Used my card, so I'm good. How do I let the driver know to stop?",
              standard: "I used my transit card, so I should be fine. How do I signal the driver to stop?",
              formal:
                "I utilized my transit card, so that aspect should be satisfactory. What is the appropriate method for signaling the driver to stop?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Just pull the cord along the window, or press the yellow strip. It'll ring a bell and the 'Stop Requested' sign will light up.",
            textZh: "拉一下窗边的绳子，或者按黄色的按条。会响铃，然后'停车请求'的灯会亮。",
            keyPhrases: [
              { en: "pull the cord", zh: "拉绳子" },
              { en: "Stop Requested", zh: "停车请求" },
            ],
            alternativeExpressions: [
              {
                textEn: "Press the button near the door before your stop.",
                textZh: "到站前按门旁边的按钮。",
                actionHint: "提前一站按铃",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just pull the cord by the window, or hit the yellow strip. A bell'll ring, and the 'Stop Requested' sign'll light up.",
            culturalNote: "中国公交车通常没有拉绳或按条，需口头告知司机或到站即停。",
            commonMistake: {
              wrong: "Pull the rope near the window.",
              correct: "Pull the cord along the window.",
              explanation: '"cord"更准确，"along the window"表示沿着窗户的特定位置。',
            },
            formalityVariants: {
              casual:
                "Just pull the cord by the window, or push the yellow strip. It'll ding, and the 'Stop Requested' sign lights up.",
              standard:
                "Just pull the cord along the window, or press the yellow strip. It'll ring a bell and the 'Stop Requested' sign will light up.",
              formal:
                "Kindly pull the cord positioned along the window, or depress the yellow signaling strip. This action will activate an audible chime, and the 'Stop Requested' indicator will illuminate.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. Thanks for the help!",
            textZh: "明白了。谢谢帮忙！",
            casualVersion: "Got it. Thanks!",
            commonMistake: {
              wrong: "Understood. Thank you for your help.",
              correct: "Got it. Thanks for the help!",
              explanation: '"Got it"在口语中表示理解更自然。',
            },
            formalityVariants: {
              casual: "Got it. Thanks!",
              standard: "Got it. Thanks for the help!",
              formal: "I comprehend. I appreciate your assistance.",
            },
          },
        ],
      },
      {
        id: "lost-route",
        titleZh: "坐过站 / 坐错车",
        titleEn: "Missed Stop / Wrong Bus",
        description: "坐过了站或者发现坐错了车",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Oh no, I think I missed my stop. Was that Market Street we just passed?",
            textZh: "糟糕，我好像坐过站了。刚才过的是Market Street吗？",
            casualVersion: "Oh crap, missed my stop. That Market Street we just passed?",
            commonMistake: {
              wrong: "I missed stop. / I passed my stop.",
              correct: "I missed my stop. / I think I missed my stop.",
              explanation: "“miss” 后需要宾语 “my stop”；“pass” 通常用于主动地经过某物，而不是被动地错过。",
            },
            formalityVariants: {
              casual: "Crap, missed my stop. That Market Street we just passed?",
              standard: "Oh no, I think I missed my stop. Was that Market Street we just passed?",
              formal:
                "Excuse me, I believe I may have inadvertently passed my designated stop. Could you confirm if the previous intersection was Market Street?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "Yes, that was Market Street. I'll let you off at the next stop — it's just one block over. You can walk back easily.",
            textZh: "是的，刚才是Market Street。下一站我给你停——就隔一个街区。你可以走回去。",
            commonMistake: {
              wrong: "I can let you off at next stop.",
              correct: "I can drop you off at the next stop.",
              explanation: "let off 在口语中不够自然，'drop off' 更地道。",
            },
            casualVersion: "Yep, Market Street. I'll drop you at the next stop — just a block over. Easy walk back.",
            formalityVariants: {
              casual: "Yep, Market Street. I'll drop you at the next stop – just a block over. Easy walk back.",
              standard: "Yes, that was Market Street. I'll let you off at the next stop — it's just one block over. You can walk back easily.",
              formal: "Indeed, that was Market Street. I will disembark you at the subsequent stop, which is merely one block away. You will find the return walk quite manageable.",
            },
            keyPhrases: [
              { en: "one block over", zh: "隔一个街区" },
              { en: "walk back", zh: "走回去" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, that was Market. I'll drop you at the next one — it's just a block. Easy walk back.",
                textZh: "对，刚才是Market。下一站我给你停——就一个街区。走回去很近。",
                actionHint: "下一站下车",
                frequency: "common",
              },
              {
                textEn:
                  "That was it, yeah. Don't worry, next stop is right around the corner. You can walk back in a minute.",
                textZh: "是的，刚过了。别担心，下一站就在拐角。一分钟就走回去了。",
                actionHint: "准备下车",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! Or actually — can I take this bus back in the other direction?",
            textZh: "谢谢！或者——这趟车能坐回去吗？",
            casualVersion: "Thanks! Wait, can I just take this bus back the other way?",
            commonMistake: {
              wrong: "Can I take this bus return? / Can I sit this bus back?",
              correct: "Can I take this bus back in the other direction?",
              explanation: "“return” 不用于交通工具；“sit” 是坐下，不是乘坐；“back in the other direction” 更清晰。",
            },
            formalityVariants: {
              casual: "Thanks! Wait, can I just take this bus back the other way?",
              standard: "Thank you! Or actually — can I take this bus back in the other direction?",
              formal: "Thank you kindly. A quick clarification, please: is it permissible to remain on this vehicle and travel in the opposing direction?",
            },
          },
          {
            speaker: "them",
            role: "司机",
            textEn:
              "This bus doesn't loop back. You'll need to cross the street and catch the number 7 going the other way. It comes every 10 minutes.",
            textZh: "这趟车不绕回去。你需要过马路坐反方向的7路。每10分钟一班。",
            culturalNote: "美国的公交线路通常不是循环往返，同一辆车不能直接调头开回。",
            commonMistake: {
              wrong: "This bus no turn back.",
              correct: "This bus doesn't loop back.",
              explanation: "中式英语常省略助动词，表达不够地道。",
            },
            casualVersion: "Nah, this bus doesn't loop. You gotta cross the street, catch the 7 going the other way. Runs every 10 mins.",
            formalityVariants: {
              casual: "Nah, this bus doesn't loop. You gotta cross the street, catch the 7 going the other way. Runs every 10 mins.",
              standard: "This bus doesn't loop back. You'll need to cross the street and catch the number 7 going the other way. It comes every 10 minutes.",
              formal: "This particular route does not include a return loop. You will need to proceed across the thoroughfare and board the number 7 service, which operates in the opposite direction. It maintains a frequency of approximately every ten minutes.",
            },
            keyPhrases: [
              { en: "doesn't loop back", zh: "不绕回去" },
              { en: "going the other way", zh: "反方向" },
              { en: "comes every 10 minutes", zh: "每10分钟一班" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Nah, this one doesn't go back. Cross over and grab the 7 going the other direction. Comes every 10 minutes, no big deal.",
                textZh: "不行，这趟不往回走。过马路坐反方向的7路。10分钟一班，没事。",
                actionHint: "过马路等反方向的车",
                frequency: "common",
              },
              {
                textEn:
                  "This bus is one-way. You'd need to hop off, cross the street, and catch the 7 heading back. Should only be a few minutes' wait.",
                textZh: "这趟是单向的。下车过马路坐回头的7路。等几分钟就行。",
                actionHint: "下车后过马路",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "OK, I'll just walk back. It's only one block. Thank you for your help!",
            textZh: "好吧，我走回去算了。就一个街区。谢谢您帮忙！",
            casualVersion: "Okay, I'll just walk it. Just a block. Thanks for the help!",
            commonMistake: {
              wrong: "I'll just walk. / Thank you for your helping!",
              correct: "I'll just walk back. / Thank you for your help!",
              explanation: "“walk back” 更明确；“help” 是名词，可以直接用作 “your help”。",
            },
            formalityVariants: {
              casual: "Okay, I'll just walk it. Just a block. Thanks for the help!",
              standard: "OK, I'll just walk back. It's only one block. Thank you for your help!",
              formal: "Very well, I shall simply return on foot. Given its proximity of merely one block, this is a negligible inconvenience. I sincerely appreciate your assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 有轨电车 ====================
  {
    id: "transport-tram",
    category: "transport",
    titleZh: "有轨电车 / 轻轨",
    titleEn: "Tram / Streetcar / Light Rail",
    description: "在城市乘坐有轨电车或轻轨，理解线路和票务系统",
    otherRole: "售票机 / 乘客 / 检票员",
    otherRoleIcon: "train",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "ticket-machine",
        titleZh: "在自动售票机买票",
        titleEn: "Using the Ticket Machine",
        description: "使用自助售票机购买单程票或日票",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I buy a ticket for the tram?",
            textZh: "请问，怎么买有轨电车的票？",
            culturalNote: "在美国问路或寻求帮助，'Excuse me'之后直接说目的即可，无需像中文那样使用'请问'来过渡。",
            casualVersion: "Hey, how do I buy a tram ticket?",
            commonMistake: {
              wrong: "How to buy tram ticket?",
              correct: "How do I buy a tram ticket?",
              explanation: "中式英语常省略主语和助动词，听起来不自然。",
            },
            formalityVariants: {
              casual: "How do I get a tram ticket?",
              standard: "Excuse me, how do I buy a ticket for the tram?",
              formal: "Pardon me, could you please advise on the procedure for purchasing a tram ticket?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "There's a ticket machine right over there. You can choose English on the screen. Just select your zone and ticket type.",
            textZh: "那边有个自动售票机。屏幕上可以选英语。选好区域和票种就行。",
            commonMistake: {
              wrong: "Choose the area and ticket type.",
              correct: "Select your zone and ticket type.",
              explanation: "中文'选择'常用于抽象概念，英文'select'更常用于从列表中选取具体选项。",
            },
            keyPhrases: [
              { en: "ticket machine", zh: "自动售票机" },
              { en: "zone", zh: "区域" },
              { en: "ticket type", zh: "票种" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "See that machine over there? It's got English on the screen. Just pick your zone and what kind of ticket you want.",
                textZh: "看到那边的机器了吗？屏幕上有英文。选好区域和票种就行。",
                actionHint: "去自动售票机",
                frequency: "common",
              },
              {
                textEn:
                  "There's a ticket vending machine right there. Switch it to English, choose your zone and ticket type, and pay. Pretty straightforward.",
                textZh: "那边就有自助售票机。切换成英文，选区域和票种，付款。很简单的。",
                actionHint: "切换英文界面",
                frequency: "common",
              },
            ],
            casualVersion:
              "Ticket machine's right over there. Just pick English on the screen, then your zone and ticket type.",
            formalityVariants: {
              casual: "Machine's over there. Pick English, then your zone/ticket.",
              standard:
                "There's a ticket machine right over there. You can choose English on the screen. Just select your zone and ticket type.",
              formal:
                "You'll find an automated ticket vending machine located over there. You may select the English language option on the display, and then proceed to choose your desired zone and ticket type.",
            },
          },
          {
            speaker: "you",
            textEn: "Should I get a single ride or a day pass? I'll be taking it a few times today.",
            textZh: "买单程票还是日票？我今天要坐好几次。",
            casualVersion: "Single ride or a day pass? I'll be using it a few times today.",
            commonMistake: {
              wrong: "Buy single ride or day pass?",
              correct: "Should I get a single ride or a day pass?",
              explanation: '问句常省略助动词，不自然。应加 "Should I" 或 "Do I need to"。',
            },
            formalityVariants: {
              casual: "Single ride or day pass? I'll be on it a few times.",
              standard: "Should I get a single ride or a day pass? I'll be taking it a few times today.",
              formal:
                "Would it be more advantageous to purchase a single-ride ticket or a day pass, considering I anticipate utilizing the service multiple times today?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "A day pass is $5 — unlimited rides until midnight. A single ride is $2.75. So if you're riding more than twice, the day pass is a better deal.",
            textZh: "日票5美元——午夜前不限次乘坐。单程票2.75美元。坐两次以上的话日票更划算。",
            commonMistake: {
              wrong: "Day pass is more cost-effective.",
              correct: "A day pass is a better deal / cheaper.",
              explanation: "'Cost-effective'偏书面语，日常口语更常用'better deal'或'cheaper'。",
            },
            keyPhrases: [
              { en: "day pass", zh: "日票" },
              { en: "unlimited rides", zh: "不限次乘坐" },
              { en: "single ride", zh: "单程" },
              { en: "better deal", zh: "更划算" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Day pass is 5 bucks — ride all you want till midnight. Single ride's $2.75. If you're going more than twice, day pass is the move.",
                textZh: "日票5块——午夜前随便坐。单程2.75。坐两次以上的话日票划算。",
                actionHint: "算算坐几次",
                frequency: "common",
              },
              {
                textEn:
                  "A single is $2.75, day pass is $5 for unlimited. Do the math — more than two rides and you save money with the pass.",
                textZh: "单程2.75，日票5块不限次。算一下——超过两次用日票就省钱了。",
                actionHint: "多次乘坐买日票",
                frequency: "common",
              },
            ],
            casualVersion:
              "Day pass is five bucks — unlimited rides 'til midnight. Single ride's $2.75. So yeah, if you're riding more than twice, day pass is way better.",
            formalityVariants: {
              casual:
                "Day pass is five bucks, unlimited 'til midnight. Single is $2.75. More than two rides? Day pass is better.",
              standard:
                "A day pass is $5 — unlimited rides until midnight. A single ride is $2.75. So if you're riding more than twice, the day pass is a better deal.",
              formal:
                "The day pass is priced at five dollars, offering unlimited travel until midnight. A single ride costs two dollars and seventy-five cents. Therefore, if your itinerary involves more than two rides, the day pass presents a more economical option.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll get a day pass then. Does it accept credit cards?",
            textZh: "那我买日票。可以刷信用卡吗？",
            casualVersion: "Okay, I'll grab a day pass. Can I use a credit card?",
            commonMistake: {
              wrong: "It can accept credit card?",
              correct: "Does it accept credit cards?",
              explanation: '动词搭配和冠词使用错误。应是 "accept credit cards" 或 "pay with credit card"。',
            },
            formalityVariants: {
              casual: "Day pass, please. Credit card okay?",
              standard: "I'll get a day pass then. Does it accept credit cards?",
              formal:
                "I believe I shall opt for the day pass. May I inquire if credit card payment is a permissible option?",
            },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn:
              "Yes, cards and contactless payment both work. Don't forget to validate your ticket before you board — there's a little machine on the platform.",
            textZh: "可以，信用卡和非接触支付都行。别忘了上车前在月台的小机器上验票。",
            commonMistake: {
              wrong: "Don't forget to check your ticket.",
              correct: "Don't forget to validate your ticket.",
              explanation: "验票机制是'validate'（验证），而不是'check'（检查），含义不同。",
            },
            keyPhrases: [
              { en: "contactless payment", zh: "非接触支付" },
              { en: "validate your ticket", zh: "验票" },
              { en: "platform", zh: "月台" },
            ],
            culturalNote: "很多欧洲城市的公共交通采用信用制——没有闸机，但会有便衣检票员随机查票。逃票罚款很重。",
            alternativeExpressions: [
              {
                textEn:
                  "Yep, cards and tap-to-pay both work. Oh, and make sure you validate the ticket at the little machine on the platform before getting on.",
                textZh: "对，信用卡和感应支付都行。哦，上车前记得在月台的小机器上验票。",
                actionHint: "上车前一定要验票",
                frequency: "common",
              },
              {
                textEn:
                  "Credit card, debit, contactless — all good. Just don't forget to stamp your ticket at the validator before you board. That's important here.",
                textZh: "信用卡、借记卡、非接触——都行。别忘了上车前在验票机上盖章。这里很重要。",
                actionHint: "找月台上的验票机",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yep, cards and tap-to-pay both work. Just remember to validate your ticket *before* you get on — there's a machine on the platform.",
            formalityVariants: {
              casual: "Yeah, cards or contactless work. Validate before boarding, machine's on the platform.",
              standard:
                "Yes, cards and contactless payment both work. Don't forget to validate your ticket before you board — there's a little machine on the platform.",
              formal:
                "Certainly, both credit card and contactless payment methods are accepted. Please ensure to validate your ticket prior to boarding the tram; a validation machine is located on the platform.",
            },
          },
        ],
      },
      {
        id: "inspector",
        titleZh: "遇到查票",
        titleEn: "Ticket Inspection",
        description: "车上遇到检票员查票",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "检票员",
            textEn: "Good afternoon. Tickets, please.",
            textZh: "下午好。请出示车票。",
            commonMistake: {
              wrong: "Good afternoon. Tickets.",
              correct: "Good afternoon. Tickets, please.",
              explanation: "直接说'Tickets'听起来很生硬且不礼貌，加上'please'更自然。",
            },
            culturalNote: "美国查票通常是直接说“Tickets, please”，并非“请看票”。",
            casualVersion: "Afternoon. Tickets.",
            formalityVariants: {
              casual: "Tickets.",
              standard: "Good afternoon. Tickets, please.",
              formal: "Good afternoon. May I please see your tickets?",
            },
            alternativeExpressions: [
              {
                textEn: "Hi there. Ticket inspection — can I see your ticket?",
                textZh: "你好。查票——能看看你的票吗？",
                actionHint: "出示车票",
                frequency: "common",
              },
              {
                textEn: "Tickets, please. Just a routine check.",
                textZh: "请出示车票。例行检查。",
                actionHint: "准备好车票",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's my day pass. I validated it at the station.",
            textZh: "这是我的日票。在车站验过了。",
            casualVersion: "Here's my day pass. Validated it at the station.",
            commonMistake: {
              wrong: "My day pass here. I checked it at the station.",
              correct: "Here's my day pass. I validated it at the station.",
              explanation: "\"validate\" 在这里是专业词汇，指“验票”，不能用 \"check\" 替代。",
            },
            formalityVariants: {
              casual: "Day pass, here. Validated it.",
              standard: "Here's my day pass. I validated it at the station.",
              formal: "Here is my day pass. I completed the validation procedure at the station.",
            },
          },
          {
            speaker: "them",
            role: "检票员",
            textEn: "Hmm, I don't see a validation stamp on this. When did you buy it?",
            textZh: "嗯，我没看到验票印章。你什么时候买的？",
            commonMistake: {
              wrong: "I don't see check mark.",
              correct: "I don't see a validation stamp.",
              explanation: "这里指的是特定印章或标记，'check mark'是勾号，不符语境。",
            },
            casualVersion: "Huh, no validation stamp. When'd you buy it?",
            formalityVariants: {
              casual: "No stamp. When'd you get it?",
              standard: "Hmm, I don't see a validation stamp on this. When did you buy it?",
              formal: "I observe the absence of a validation stamp on this ticket. Could you please inform me of the purchase time?",
            },
            keyPhrases: [{ en: "validation stamp", zh: "验票印章" }],
            alternativeExpressions: [
              {
                textEn: "This doesn't have a stamp on it. Did you validate it? When did you buy this?",
                textZh: "这上面没有盖章。你验过票了吗？什么时候买的？",
                actionHint: "解释情况",
                frequency: "common",
              },
              {
                textEn: "I don't see a validation on this ticket. Where did you get on?",
                textZh: "这张票上没有验票记录。你在哪站上的车？",
                actionHint: "如实说明",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "About 20 minutes ago. I'm sorry — I thought I validated it. I'm a tourist and this is my first time using the tram here.",
            textZh: "大约20分钟前。抱歉——我以为我验过了。我是游客，第一次坐这里的电车。",
            casualVersion: "Like, 20 mins ago. Shoot, thought I validated it. Tourist, first time on the tram here.",
            commonMistake: {
              wrong: "Sorry, I think I validated. I am tourist.",
              correct: "I'm sorry — I thought I validated it. I'm a tourist.",
              explanation: "表达“以为”要用 \"I thought I...\"。 \"tourist\" 前需加冠词 \"a\"。",
            },
            formalityVariants: {
              casual: "20 minutes ago. My bad, thought I validated it. New here.",
              standard: "About 20 minutes ago. I'm sorry — I thought I validated it. I'm a tourist and this is my first time using the tram here.",
              formal: "Approximately twenty minutes prior. My apologies, I was under the impression that I had completed the validation process. I am a tourist and this marks my inaugural experience utilizing the tram service in this locality.",
            },
          },
          {
            speaker: "them",
            role: "检票员",
            textEn:
              "I understand. Since you do have a valid ticket, I'll let it go this time. Let me stamp it for you now. Next time, look for the yellow validation machine on the platform — insert the ticket and it prints the date and time.",
            textZh:
              "我理解。既然你确实有票，这次就算了。我帮你盖章。下次找月台上的黄色验票机——把票插进去就会打印日期和时间。",
            culturalNote: "美国文化中，'I'll let it slide this time' 是一种常见的口语表达，表示对小过失的宽容或不追究",
            commonMistake: {
              wrong: "I'll allow it this time.",
              correct: "I'll let it slide this time.",
              explanation: "'Let it slide'是表示宽容的习语，'allow it'在语法上可以但不自然。",
            },
            casualVersion: "Gotcha. Since you've got a valid ticket, I'll let it slide this time. Lemme stamp it for ya. Next time, look for the yellow machine on the platform — just pop the ticket in and it'll print the date and time.",
            formalityVariants: {
              casual: "Understood. Got a valid ticket, so I'll let it slide. I'll stamp it. Next time, yellow machine on platform – insert ticket, it prints.",
              standard: "I understand. Since you do have a valid ticket, I'll let it go this time. Let me stamp it for you now. Next time, look for the yellow validation machine on the platform — insert the ticket and it prints the date and time.",
              formal: "I comprehend the situation. Given that you possess a legitimate ticket, I shall waive any penalty on this occasion. Allow me to validate it for you now. For future reference, please locate the yellow validation machine situated on the platform; kindly insert your ticket, and it will imprint the current date and time.",
            },
            keyPhrases: [
              { en: "let it go", zh: "放过/算了" },
              { en: "stamp it", zh: "盖章" },
              { en: "validation machine", zh: "验票机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Since you do have a ticket, I'll let it slide this time. Here, I'll stamp it now. Next time, use the yellow machine on the platform — it prints the time on your ticket.",
                textZh: "你确实有票，这次就放过了。我帮你盖章。下次用月台上的黄色机器——会在票上打印时间。",
                actionHint: "记住下次验票",
                frequency: "common",
              },
              {
                textEn:
                  "OK, since you're a tourist and you have the ticket, no fine this time. Let me validate it for you. The yellow box on the platform — that's what you need to use.",
                textZh: "好吧，你是游客而且确实有票，这次不罚了。我帮你验。月台上的黄色箱子——下次用那个。",
                actionHint: "找黄色验票机",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! I'll definitely remember next time.",
            textZh: "太感谢了！下次一定记住。",
            commonMistake: {
              wrong: "I will remember for next time.",
              correct: "I'll be sure to remember next time.",
              explanation: "“记住下次”在中文里很常见，但英文“remember for next time”听起来不自然。",
            },
            casualVersion: "Thanks a ton! I'll definitely remember next time.",
            formalityVariants: {
              casual: "Thanks a bunch! Got it for next time.",
              standard: "Thank you so much! I'll definitely remember next time.",
              formal: "My sincere gratitude. I shall certainly retain this information for future reference.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 收费站 / 过路费 ====================
  {
    id: "transport-toll",
    category: "transport",
    titleZh: "收费站 / 过路费",
    titleEn: "Toll Booth / Road Tolls",
    description: "开车经过收费站，了解付费方式和通行规则",
    otherRole: "收费站工作人员",
    otherRoleIcon: "car",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "cash-toll",
        titleZh: "人工收费通道",
        titleEn: "Cash Toll Lane",
        description: "走人工通道用现金或信用卡付过路费",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收费员",
            textEn: "That'll be $6.50 for the toll.",
            textZh: "过路费6.5美元。",
            keyPhrases: [{ en: "toll", zh: "过路费" }],
            alternativeExpressions: [
              { textEn: "Six-fifty, please.", textZh: "6.5美元。", actionHint: "准备付款", frequency: "common" },
              {
                textEn: "Toll is $6.50. Cash or card?",
                textZh: "过路费6.5美元。现金还是刷卡？",
                actionHint: "选择付款方式",
                frequency: "common",
              },
            ],
            casualVersion: "Six fifty for the toll.",
            formalityVariants: {
              casual: "Six fifty for the toll.",
              standard: "That'll be $6.50 for the toll.",
              formal: "Your toll will be $6.50.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I pay with a credit card?",
            textZh: "可以刷信用卡吗？",
            casualVersion: "Credit card okay?",
            commonMistake: {
              wrong: "Can I swipe credit card?",
              correct: "Can I pay with a credit card?",
              explanation: "“swipe” 指的是刷卡这个物理动作，通常用 “pay with” 或 “use” 更自然。",
            },
            formalityVariants: {
              casual: "Credit card?",
              standard: "Can I pay with a credit card?",
              formal: "May I use a credit card for payment?",
            },
          },
          {
            speaker: "them",
            role: "收费员",
            textEn: "We accept cash or cards. Go ahead and insert or tap your card on the reader.",
            textZh: "现金和卡都可以。插卡或者在读卡器上刷一下。",
            commonMistake: {
              wrong: "You can use cash or cards.",
              correct: "We accept cash or cards.",
              explanation: "直接说\"We accept\"比\"You can use\"更自然。",
            },
            keyPhrases: [
              { en: "insert", zh: "插卡" },
              { en: "tap", zh: "刷/碰" },
              { en: "reader", zh: "读卡器" },
            ],
            alternativeExpressions: [
              {
                textEn: "Cash or credit, both work. Just tap or insert your card right here on the machine.",
                textZh: "现金或信用卡都行。在这个机器上刷卡或插卡就行。",
                actionHint: "刷卡付费",
                frequency: "common",
              },
              {
                textEn: "Either one's fine. Stick your card in the reader or tap it. You're all set.",
                textZh: "都可以。把卡插进读卡器或者感应一下。好了。",
                actionHint: "插卡或感应",
                frequency: "common",
              },
            ],
            casualVersion: "Cash or card's fine. Just insert or tap it.",
            formalityVariants: {
              casual: "Cash or card works. Just insert/tap it.",
              standard: "We accept cash or cards. Go ahead and insert or tap your card on the reader.",
              formal:
                "We accept both cash and credit/debit cards. Please proceed by inserting or tapping your card on the designated reader.",
            },
          },
          {
            speaker: "you",
            textEn: "Done. Is this toll for the whole highway, or are there more toll booths ahead?",
            textZh: "好了。这是整条高速的费用吗，还是前面还有收费站？",
            casualVersion: "Okay. Is this for the whole highway, or more tolls coming up?",
            commonMistake: {
              wrong: "Is this toll for whole highway?",
              correct: "Is this toll for the whole highway?",
              explanation: "“whole highway” 前需加定冠词 “the”，表示特指某条高速公路。",
            },
            formalityVariants: {
              casual: "Done. Is this the only toll, or are there more?",
              standard: "Done. Is this toll for the whole highway, or are there more toll booths ahead?",
              formal:
                "I've completed the payment. Does this toll cover the entirety of the highway, or should I anticipate additional toll plazas further along?",
            },
          },
          {
            speaker: "them",
            role: "收费员",
            textEn:
              "This covers the bridge crossing. There's one more toll plaza about 40 miles ahead at the state line. That one is $4. Have a safe drive!",
            textZh: "这是过桥费。前面大约40英里的州界还有一个收费站，那边4美元。开车注意安全！",
            commonMistake: {
              wrong: "This toll is for the bridge.",
              correct: "This covers the bridge crossing.",
              explanation: "\"cover\" 比 \"is for\" 更自然地表示费用包含内容。",
            },
            keyPhrases: [
              { en: "bridge crossing", zh: "过桥" },
              { en: "toll plaza", zh: "收费站" },
              { en: "state line", zh: "州界" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's just the bridge toll. There's another one about 40 miles up at the state border — four bucks. Drive safe!",
                textZh: "这只是过桥费。前面大约40英里州界还有一个——4块钱。开车注意安全！",
                actionHint: "准备好下一个收费站",
                frequency: "common",
              },
              {
                textEn:
                  "This one covers the bridge. Heads up, there's one more toll plaza at the state line, $4. After that you're clear.",
                textZh: "这个是过桥的。提醒一下，州界还有个收费站，4美元。过了之后就没有了。",
                actionHint: "留意前方收费站",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just the bridge. There's another toll about 40 miles up at the state line, that one's 4 bucks. Drive safe!",
            formalityVariants: {
              casual:
                "This is just for the bridge. You'll hit another toll, about 40 miles ahead at the state line, that's $4. Drive safe!",
              standard:
                "This covers the bridge crossing. There's one more toll plaza about 40 miles ahead at the state line. That one is $4. Have a safe drive!",
              formal:
                "This particular toll is for the bridge crossing. You will encounter one additional toll plaza approximately 40 miles ahead, located at the state line, which will be $4. Please have a safe journey.",
            },
          },
        ],
      },
      {
        id: "electronic-toll",
        titleZh: "电子收费与租车ETC",
        titleEn: "Electronic Tolls & Rental Car ETC",
        description: "租车走了电子收费通道，理解后续扣费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I accidentally went through the E-ZPass lane, but my rental car doesn't have E-ZPass. What should I do?",
            textZh: "我不小心走了E-ZPass通道，但我的租车没有E-ZPass。怎么办？",
            vocabNotes: {
              "E-ZPass": { meaningInContext: "美国东部常见的电子收费系统，类似国内的ETC" },
            },
            casualVersion: "Oops, went through the E-ZPass lane, but my rental car doesn't have one. What do I do?",
            culturalNote: "美国部分高速电子收费无需设备，车辆信息会被拍照记录并扣费。",
            commonMistake: {
              wrong: "My rental car has no E-ZPass.",
              correct: "My rental car doesn't have E-ZPass.",
              explanation: "“has no” 听起来不自然，用 “doesn't have” 更地道。",
            },
            formalityVariants: {
              casual: "Oops, went through E-ZPass lane, but my rental doesn't have one. What now?",
              standard:
                "I accidentally went through the E-ZPass lane, but my rental car doesn't have E-ZPass. What should I do?",
              formal:
                "Excuse me, I inadvertently utilized the E-ZPass lane, but my rental vehicle is not equipped with an E-ZPass transponder. Could you please advise on the appropriate course of action?",
            },
          },
          {
            speaker: "them",
            role: "收费员",
            textEn:
              "Don't worry — a camera captured your license plate. The toll will be billed to the rental car company, and they'll charge it to your credit card on file. There's usually an admin fee on top of the toll, though.",
            textZh:
              "别担心——摄像头拍到了你的车牌。过路费会算到租车公司，他们会从你的信用卡上扣。不过通常还会加一笔手续费。",
            casualVersion: "No worries, camera got your plate. Toll goes to the rental company, then they charge your card. Heads up, usually an admin fee on top.",
            formalityVariants: {
              casual: "Relax, camera got your plate. Toll'll go to the rental company, then they'll charge your card. Just a heads up, there's usually an extra admin fee.",
              standard: "Don't worry — a camera captured your license plate. The toll will be billed to the rental car company, and they'll charge it to your credit card on file. There's usually an admin fee on top of the toll, though.",
              formal: "Please do not be concerned; your vehicle's license plate was recorded by the camera system. The toll will be debited to the rental car company, and subsequently charged to the credit card on file. However, please be aware that an administrative fee is typically applied in addition to the toll.",
            },
            keyPhrases: [
              { en: "license plate", zh: "车牌" },
              { en: "billed to", zh: "记账给/向……收费" },
              { en: "on file", zh: "留档的" },
              { en: "admin fee", zh: "手续费" },
            ],
            culturalNote:
              "租车走电子收费通道，租车公司通常会额外收取$3-5的手续费。建议租车时直接购买租车公司的ETC服务。",
            alternativeExpressions: [
              {
                textEn:
                  "No worries — the camera got your plate. The rental company will charge your card for the toll plus an admin fee on top.",
                textZh: "别担心——摄像头拍到车牌了。租车公司会从你的卡上扣过路费外加一笔手续费。",
                actionHint: "会有额外手续费",
                frequency: "common",
              },
              {
                textEn:
                  "It's fine, happens all the time. They'll snap your plate and bill the rental company. Just expect an extra service charge.",
                textZh: "没事，经常有人这样。他们会拍车牌记到租车公司。就是会有额外的服务费。",
                actionHint: "留意租车账单",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How much is the admin fee usually?",
            textZh: "手续费一般多少？",
            commonMistake: {
              wrong: "Admin fee usually how much?",
              correct: "How much is the admin fee usually?",
              explanation: "疑问句中“how much”后面通常接“is/are + 主语”。",
            },
            casualVersion: "What's the admin fee usually run?",
            formalityVariants: {
              casual: "What's the admin fee usually?",
              standard: "How much is the admin fee usually?",
              formal: "Could you please inform me of the typical amount for the administrative fee?",
            },
          },
          {
            speaker: "them",
            role: "收费员",
            textEn:
              "It depends on the rental company — usually $3 to $5 per toll. You might want to call them and ask about adding a toll pass to your rental. It's usually around $5 a day.",
            textZh:
              "看租车公司——一般每次3到5美元。你可以打电话问他们能不能给你的车加个电子收费标签。通常一天5美元左右。",
            commonMistake: {
              wrong: "Call them ask about adding toll pass.",
              correct: "Call them and ask about adding a toll pass.",
              explanation: "动词连接时常用“and”或“to”连接。",
            },
            casualVersion: "Depends on the rental company — like, $3 to $5 per toll. You might wanna call 'em, ask about adding a toll pass to your rental. Usually runs 'bout 5 bucks a day.",
            culturalNote: "租车公司常提供每日收费服务包，价格固定，可避免单次手续费。",
            formalityVariants: {
              casual: "Depends on the rental company — usually $3-5 per toll. You could call 'em, ask about adding a toll pass to your rental. It's normally around $5 a day.",
              standard: "It depends on the rental company — usually $3 to $5 per toll. You might want to call them and ask about adding a toll pass to your rental. It's usually around $5 a day.",
              formal: "The amount varies by rental company, typically ranging from $3 to $5 per toll incident. It might be advisable to contact them to inquire about the option of adding a toll transponder to your rental, which is generally priced at approximately $5 per day.",
            },
            keyPhrases: [
              { en: "toll pass", zh: "电子收费标签" },
              { en: "per toll", zh: "每次过路" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Depends on the company — usually 3 to 5 per toll on top of the actual toll. You could call them about getting a toll pass added — runs about $5 a day.",
                textZh:
                  "看租车公司——一般每次收3到5美元手续费加上实际过路费。你可以打电话问加个电子收费标签——大约一天5美元。",
                actionHint: "考虑买租车公司的ETC",
                frequency: "common",
              },
              {
                textEn:
                  "Usually $3-5 per occurrence. My advice? Call the rental company and add a toll transponder. It's like 5 bucks a day and saves you the hassle.",
                textZh: "一般每次3-5美元。我建议？打电话给租车公司加个电子收费器。一天5美元左右，省很多麻烦。",
                actionHint: "打电话给租车公司",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. I'll call the rental company right away. Thank you!",
            textZh: "了解了。我马上打电话给租车公司。谢谢！",
            casualVersion: "Got it. I'll call the rental company ASAP. Thanks!",
            commonMistake: {
              wrong: "It's good I know. I will call the rental company immediately.",
              correct: "Good to know. I'll call the rental company right away.",
              explanation: "“Good to know” 是常用表达；“immediately” 过于正式，“right away” 更自然。",
            },
            formalityVariants: {
              casual: "Got it. I'll call the rental company ASAP. Thanks!",
              standard: "Good to know. I'll call the rental company right away. Thank you!",
              formal: "Thank you for this information. I will contact the rental company without delay. I appreciate your assistance.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 道路救援 ====================
  {
    id: "transport-road-assistance",
    category: "transport",
    titleZh: "道路救援",
    titleEn: "Roadside Assistance",
    description: "车辆在路上抛锚，寻求道路救援服务",
    otherRole: "救援调度员 / 拖车司机",
    otherRoleIcon: "car",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "call-assistance",
        titleZh: "打电话求助",
        titleEn: "Calling for Help",
        description: "车抛锚了，打电话给道路救援",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, my car broke down on the highway. I need roadside assistance.",
            textZh: "你好，我的车在高速上抛锚了。我需要道路救援。",
            casualVersion: "Hey, car broke down on the highway. Need roadside assistance.",
            culturalNote: "美国直接说事，不像中文可能先客套",
            commonMistake: {
              wrong: "My car broken down on the highway.",
              correct: "My car broke down on the highway.",
              explanation: "Broke down 是动词的过去式，broken down 是过去分词，常用作形容词。",
            },
            formalityVariants: {
              casual: "Hey, car broke down on the highway. Need roadside assistance.",
              standard: "Hi, my car broke down on the highway. I need roadside assistance.",
              formal:
                "Good morning/afternoon, I regret to inform you that my vehicle has experienced a breakdown on the highway. I require roadside assistance.",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "I'm sorry to hear that. Can you tell me your exact location? What highway are you on, and what's the nearest mile marker or exit?",
            textZh: "很抱歉。能告诉我你的具体位置吗？在哪条高速，最近的里程标或出口是哪个？",
            keyPhrases: [
              { en: "exact location", zh: "具体位置" },
              { en: "mile marker", zh: "里程标" },
              { en: "exit", zh: "出口" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh no, sorry to hear that. Where are you right now? Which highway, and can you see a mile marker or an exit number?",
                textZh: "哎呀，很抱歉。你现在在哪？哪条公路，能看到里程标或出口号吗？",
                actionHint: "查看周围路标",
                frequency: "common",
              },
              {
                textEn:
                  "I'm sorry about that. Can you give me your location — highway name, nearest exit, anything you can see around you?",
                textZh: "很抱歉。能告诉我你的位置吗——公路名、最近的出口，或者你能看到的任何标志？",
                actionHint: "描述周围环境",
                frequency: "common",
              },
            ],
            casualVersion:
              "Ugh, sorry to hear that. Where exactly are you? Which highway, and what's the closest mile marker or exit?",
            formalityVariants: {
              casual: "Oh, sorry to hear that. Where exactly are you? Highway, closest mile marker/exit?",
              standard:
                "I'm sorry to hear that. Can you tell me your exact location? What highway are you on, and what's the nearest mile marker or exit?",
              formal:
                "I'm very sorry to learn of your predicament. Could you please provide your precise location? Specifically, which highway are you currently on, and what is the nearest mile marker or exit number?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm on I-95 northbound, near exit 42. I pulled over to the right shoulder.",
            textZh: "我在I-95北向，42号出口附近。我停在右侧路肩上了。",
            vocabNotes: {
              northbound: { meaningInContext: "北向行驶方向", similarUsage: "southbound（南向）、eastbound（东向）" },
              "right shoulder": { meaningInContext: "高速公路右侧应急车道/路肩" },
            },
            casualVersion: "On I-95 northbound, near exit 42. Pulled over on the right shoulder.",
            culturalNote: "美国高速的‘路肩’叫shoulder，不是‘旁边’",
            commonMistake: {
              wrong: "I stopped my car to the right shoulder.",
              correct: "I pulled over to the right shoulder.",
              explanation: "'Pull over' 专指停车到路边，更自然。",
            },
            formalityVariants: {
              casual: "I'm on I-95 N, by exit 42. Pulled over on the right shoulder.",
              standard: "I'm on I-95 northbound, near exit 42. I pulled over to the right shoulder.",
              formal:
                "I am currently located on Interstate 95, proceeding northbound, in the vicinity of Exit 42. I have safely maneuvered the vehicle onto the right shoulder.",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn: "Got it. What seems to be the problem? Is it a flat tire, engine trouble, or something else?",
            textZh: "收到。什么情况？爆胎、发动机故障，还是其他问题？",
            keyPhrases: [
              { en: "flat tire", zh: "爆胎" },
              { en: "engine trouble", zh: "发动机故障" },
            ],
            alternativeExpressions: [
              {
                textEn: "OK, I've got your location. What's going on — flat tire, engine problem, or something else?",
                textZh: "好的，位置收到了。什么情况——爆胎、发动机问题还是其他？",
                actionHint: "描述故障情况",
                frequency: "common",
              },
              {
                textEn:
                  "Got it. Can you tell me what happened? Did you get a flat, or is it the engine? Any warning lights?",
                textZh: "收到。能说说怎么了吗？爆胎还是发动机？有没有警示灯亮？",
                actionHint: "说明具体故障",
                frequency: "common",
              },
            ],
            casualVersion: "Gotcha. What's up with it? Flat tire, engine, or what?",
            formalityVariants: {
              casual: "Gotcha. What's up with it? Flat tire, engine, or something else?",
              standard: "Got it. What seems to be the problem? Is it a flat tire, engine trouble, or something else?",
              formal:
                "Understood. Could you please describe the nature of the malfunction? Is it related to a flat tire, engine mechanical issues, or another concern?",
            },
          },
          {
            speaker: "you",
            textEn: "The engine started making a loud noise and then just stopped. I can't restart it.",
            textZh: "发动机开始发出很大的声音然后就熄火了。打不着了。",
            casualVersion: "Engine started making a ton of noise, then just died. Can't restart it.",
            commonMistake: {
              wrong: "The engine stopped by itself.",
              correct: "The engine just stopped.",
              explanation: "'By itself' 有种主动停止的感觉，用 'just stopped' 更自然。",
            },
            formalityVariants: {
              casual: "Engine made a bunch of noise, then died. Can't restart.",
              standard: "The engine started making a loud noise and then just stopped. I can't restart it.",
              formal:
                "The engine began to emit a significant amount of noise, subsequently ceasing operation. I am unable to restart the vehicle.",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "OK, I'm dispatching a tow truck to your location. The estimated arrival time is about 30 to 45 minutes. Please stay in your vehicle with your hazard lights on. Is there anything else you need — are you safe?",
            textZh: "好的，我派拖车过去。预计30到45分钟到。请待在车里，开着双闪灯。还需要什么吗——你安全吧？",
            keyPhrases: [
              { en: "tow truck", zh: "拖车" },
              { en: "estimated arrival time", zh: "预计到达时间" },
              { en: "hazard lights", zh: "双闪灯/危险警示灯" },
              { en: "stay in your vehicle", zh: "待在车里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm sending a tow truck now — 30 to 45 minutes. Stay in the car with your hazards on and keep your seatbelt on. Are you in a safe spot?",
                textZh: "我现在派拖车——30到45分钟。待在车里开着双闪，系好安全带。你在安全的地方吗？",
                actionHint: "打开双闪灯等待",
                frequency: "common",
              },
              {
                textEn:
                  "A tow truck is on its way — should be there in half an hour to 45 minutes. Keep those hazard lights flashing. Don't get out on the highway side. You OK?",
                textZh: "拖车已经出发了——大约半小时到45分钟。双闪灯开着。别往公路那边下车。你还好吗？",
                actionHint: "不要在车道侧下车",
                frequency: "common",
              },
            ],
            casualVersion:
              "Alright, sending a tow truck your way. 'Bout 30-45 mins. Stay in your car, hazards on. Anything else? You safe?",
            formalityVariants: {
              casual:
                "Okay, sending a tow truck. 'Bout 30-45 mins. Stay in your car, hazards on. Anything else? You safe?",
              standard:
                "OK, I'm dispatching a tow truck to your location. The estimated arrival time is about 30 to 45 minutes. Please stay in your vehicle with your hazard lights on. Is there anything else you need — are you safe?",
              formal:
                "Understood. I am now dispatching a tow truck to your specified location. The estimated time of arrival is approximately 30 to 45 minutes. For your safety, please remain inside your vehicle with your hazard warning lights activated. Furthermore, I must inquire if there are any other immediate needs, and to confirm your safety.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'm safe. Thank you. How much will the tow cost?",
            textZh: "是的，我安全的。谢谢。拖车费多少？",
            casualVersion: "Yeah, I'm good. Thanks. How much is the tow gonna be?",
            commonMistake: {
              wrong: "How much the tow cost?",
              correct: "How much will the tow cost?",
              explanation: "缺少助动词 will，或用 is the tow cost 语法错误。",
            },
            formalityVariants: {
              casual: "Yeah, I'm good. Thanks. How much for the tow?",
              standard: "Yes, I'm safe. Thank you. How much will the tow cost?",
              formal:
                "Yes, I am secure. Thank you for your assistance. Could you please inform me of the estimated cost for the towing service?",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "If you have AAA or your car insurance includes roadside assistance, it may be covered. Otherwise, a basic tow is around $75 to $125 for the first 5 miles, plus $3 to $7 per additional mile.",
            textZh:
              "如果你有AAA会员或车险包含道路救援，可能免费。否则基本拖车费头5英里大约75到125美元，之后每英里加3到7美元。",
            keyPhrases: [
              { en: "AAA", zh: "美国汽车协会（道路救援会员服务）" },
              { en: "roadside assistance", zh: "道路救援" },
              { en: "covered", zh: "（保险）覆盖/包含" },
              { en: "per additional mile", zh: "每多一英里" },
            ],
            culturalNote:
              "AAA（美国汽车协会）是美国最常见的道路救援服务，年费约60-100美元。很多信用卡和车险也附带道路救援。",
            alternativeExpressions: [
              {
                textEn:
                  "Do you have AAA or roadside coverage through your insurance? If so, it might be free. Otherwise, a tow runs about $75-125 for the first 5 miles, then $3-7 per mile after that.",
                textZh:
                  "你有AAA或保险含道路救援吗？有的话可能免费。没有的话拖车头5英里大约75-125美元，之后每英里3-7美元。",
                actionHint: "检查保险是否覆盖",
                frequency: "common",
              },
              {
                textEn:
                  "Check your insurance or rental agreement — many include roadside assistance at no extra cost. Without coverage, expect around $100 for a basic tow, plus mileage.",
                textZh: "查一下保险或租车协议——很多包含免费道路救援。没有的话基本拖车大约100美元，加里程费。",
                actionHint: "查看租车协议",
                frequency: "common",
              },
            ],
            casualVersion:
              "If you've got AAA or roadside assistance with your insurance, it might be covered. Otherwise, a basic tow's like 75 to 125 bucks for the first 5 miles, then another 3 to 7 per extra mile.",
            formalityVariants: {
              casual:
                "If you got AAA or insurance covers it, might be free. Else, basic tow's like $75-125 for 5 miles, then $3-7 per extra.",
              standard:
                "If you have AAA or your car insurance includes roadside assistance, it may be covered. Otherwise, a basic tow is around $75 to $125 for the first 5 miles, plus $3 to $7 per additional mile.",
              formal:
                "Should you possess an AAA membership or if your automotive insurance policy incorporates roadside assistance coverage, the service may be complimentary. Otherwise, a standard towing service typically ranges from $75 to $125 for the initial five miles, with an additional charge of $3 to $7 for each subsequent mile.",
            },
          },
        ],
      },
      {
        id: "tow-truck",
        titleZh: "与拖车司机沟通",
        titleEn: "Dealing with the Tow Truck",
        description: "拖车到了，沟通去哪里修车",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "拖车司机",
            textEn:
              "Hey there! I'm Mike, your tow driver. Let's take a look. Yep, this isn't starting. We'll need to tow it. Where would you like me to take it?",
            textZh: "嗨！我是Mike，你的拖车司机。看看情况。嗯，确实打不着了。需要拖走。你想拖到哪里？",
            keyPhrases: [
              { en: "tow driver", zh: "拖车司机" },
              { en: "tow it", zh: "拖走" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Hey! I'm Mike from AAA. Let me check it out... Yeah, this thing's not starting. We'll have to tow it. Any idea where you want it to go?",
                textZh: "嗨！我是AAA的Mike。让我看看……嗯，确实打不着。得拖走。你想拖到哪里？",
                actionHint: "说明想去的修车行",
                frequency: "common",
              },
              {
                textEn:
                  "I'm your tow guy, Mike. Let me take a look... Yep, she's dead. Gotta tow it. Got a mechanic in mind, or need a recommendation?",
                textZh: "我是拖车的Mike。让我看看……嗯，彻底熄火了。得拖走。有想去的修车行吗，还是需要推荐？",
                actionHint: "问问有没有推荐",
                frequency: "occasional",
              },
            ],
            casualVersion: "Hey! Mike, your tow guy. Lemme check. Yep, not starting. Gotta tow it. Where d'ya want it?",
            formalityVariants: {
              casual: "Hey! Mike, your tow guy. Lemme check. Yep, not starting. Gotta tow it. Where d'ya want it?",
              standard:
                "Hello there! I'm Mike, your tow driver. Let's take a look. Indeed, it's not starting. We'll need to tow it. Where would you like me to take it?",
              formal:
                "Good afternoon. I'm Mike, your tow service professional. I'll conduct an initial assessment. It appears the vehicle is not initiating. Towing will be required. Could you please specify the desired destination for the vehicle?",
            },
          },
          {
            speaker: "you",
            textEn: "I don't know any mechanics around here. Can you recommend a good repair shop?",
            textZh: "我不认识附近的修车行。能推荐一个靠谱的吗？",
            casualVersion: "Don't know any mechanics around. Got a good repair shop to recommend?",
            commonMistake: {
              wrong: "Can you recommend a reliable repair shop?",
              correct: "Can you recommend a good repair shop?",
              explanation: "“Reliable”在指人或服务时常用good/trustworthy。",
            },
            formalityVariants: {
              casual: "Don't know any mechanics around. Got a good repair shop to recommend?",
              standard: "I don't know any mechanics around here. Can you recommend a good repair shop?",
              formal: "I'm unfamiliar with the local automotive service providers. Could you please recommend a reputable repair facility?",
            },
          },
          {
            speaker: "them",
            role: "拖车司机",
            textEn:
              "There's a well-rated place called Joe's Auto about 3 miles from here. They're honest and do good work. But they close at 6, so we need to hurry. It's a rental car, right?",
            textZh: "附近3英里有一家口碑很好的叫Joe's Auto。很实诚，活儿也好。不过6点关门，得快点。这是租的车吧？",
            casualVersion: "Joe's Auto, 'bout 3 miles, gets good ratings. They're honest, do good work. But they close at 6, gotta hustle. It's a rental, right?",
            formalityVariants: {
              casual: "Joe's Auto, 'bout 3 miles, gets good ratings. They're honest, do good work. But they close at 6, gotta hustle. It's a rental, right?",
              standard: "There's a well-rated place called Joe's Auto about 3 miles from here. They're honest and do good work. However, they close at 6 PM, so we'll need to proceed promptly. This is a rental vehicle, correct?",
              formal: "There is a highly-rated establishment named Joe's Auto approximately three miles from our current location. They possess a reputation for integrity and quality workmanship. Please note, their operating hours conclude at 6 PM, necessitating expediency. This vehicle is a rental, correct?",
            },
            keyPhrases: [
              { en: "well-rated", zh: "口碑好的" },
              { en: "honest", zh: "实诚的" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I know a good shop about 3 miles from here — Joe's Auto. Good people, fair prices. But they close at 6, so we gotta move. This a rental?",
                textZh: "我知道附近3英里有家好店——Joe's Auto。人好，价公道。但6点关门，得赶紧。这是租的车？",
                actionHint: "确认是否是租车",
                frequency: "common",
              },
              {
                textEn:
                  "Joe's Auto is nearby and they're solid — honest work, won't rip you off. Only thing is they shut at 6. Is this your car or a rental?",
                textZh: "Joe's Auto就在附近，他们很靠谱——活实在，不会宰你。就是6点关门。这是你自己的车还是租的？",
                actionHint: "说明车辆情况",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's a rental. Should I call the rental company first?",
            textZh: "是的，租的。我要先打电话给租车公司吗？",
            culturalNote: "美国租车公司对车辆有明确规定，需先联系他们",
            casualVersion: "Yeah, rental. Should I call them first?",
            commonMistake: {
              wrong: "Yes, it's a rental car. Should I call the rental car company first?",
              correct: "Yes, it's a rental. Should I call the rental company first?",
              explanation: "避免重复使用“car”，rental company就够了。",
            },
            formalityVariants: {
              casual: "Yeah, rental. Should I call them first?",
              standard: "Yes, it's a rental. Should I call the rental company first?",
              formal: "Yes, it is a rental vehicle. Would it be advisable to contact the rental agency prior to proceeding?",
            },
          },
          {
            speaker: "them",
            role: "拖车司机",
            textEn:
              "Definitely. Call them now — they might have a preferred repair shop, or they might just want to swap the car for you. In the meantime, I'll get your car loaded up.",
            textZh: "最好先打。他们可能有指定修车行，或者直接给你换车。你打电话的时候我先把车装上。",
            casualVersion: "Yeah, for sure. Call 'em now — they might have a preferred shop, or just want to swap it out. While you're on the phone, I'll get your car loaded.",
            formalityVariants: {
              casual: "Yeah, for sure. Call 'em now — they might have a preferred shop, or just want to swap it out. While you're on the phone, I'll get your car loaded.",
              standard: "Definitely. Call them now — they might have a preferred repair shop, or they might just want to swap the car for you. In the meantime, I'll get your car loaded up.",
              formal: "Indeed. I advise you contact them immediately, as they may have a designated repair facility, or they might prefer to exchange the vehicle. Concurrently, I shall commence loading your vehicle.",
            },
            keyPhrases: [
              { en: "preferred repair shop", zh: "指定修车行" },
              { en: "swap the car", zh: "换车" },
              { en: "loaded up", zh: "装上（拖车）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, call them first. They might have their own shop or just swap the car out. I'll start loading up while you're on the phone.",
                textZh: "对，先打电话。他们可能有自己的指定修车行，或者直接给你换车。你打电话的时候我先把车装上。",
                actionHint: "一边打电话一边装车",
                frequency: "common",
              },
              {
                textEn:
                  "For sure, get them on the phone. Rental companies usually have a preferred garage or they'll bring you a replacement. Let me get the car up on the flatbed meanwhile.",
                textZh: "一定要打。租车公司一般有合作修车行，或者派一辆替换车。我先把车装上拖板车。",
                actionHint: "联系租车公司询问方案",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Thank you, Mike. I really appreciate you getting here so quickly.",
            textZh: "好主意。谢谢你Mike。真感谢你来这么快。",
            casualVersion: "Good call. Thanks, Mike. Really appreciate you getting here fast.",
            commonMistake: {
              wrong: "Good idea. Thank you, Mike. I appreciate you coming here so quickly.",
              correct: "Good idea. Thank you, Mike. I really appreciate you getting here so quickly.",
              explanation: "“get here”比“come here”更自然。",
            },
            formalityVariants: {
              casual: "Good call. Thanks, Mike. Really appreciate you getting here fast.",
              standard: "Good idea. Thank you, Mike. I really appreciate you getting here so quickly.",
              formal: "That's an excellent suggestion. Thank you, Mike. I sincerely appreciate your prompt arrival.",
            },
          },
        ],
      },
      {
        id: "flat-tire",
        titleZh: "爆胎换胎",
        titleEn: "Flat Tire Assistance",
        description: "路上爆胎，请人帮忙换备胎",
        difficulty: "advanced",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I've got a flat tire and I don't know how to change it. Can you send someone to help?",
            textZh: "你好，我爆胎了，不会换。能派人来帮忙吗？",
            casualVersion: "Hey, got a flat, don't know how to change it. Can you send someone?",
            commonMistake: {
              wrong: "I have a flat tire, I can't change it. Can you send someone to help?",
              correct: "I've got a flat tire and I don't know how to change it. Can you send someone to help?",
              explanation:
                "直接说“I have a flat tire”在英语里稍显生硬，用“I've got”更自然；“I can't change it”听起来像“我没能力换”，不如“don't know how to”表示“我不知道怎么换”。",
            },
            formalityVariants: {
              casual: "Got a flat, can't change it. Send help?",
              standard: "Hi, I've got a flat tire and I don't know how to change it. Can you send someone to help?",
              formal:
                "Good day. I regret to inform you that I have experienced a flat tire and am unfamiliar with the procedure for changing it. Would it be possible to dispatch assistance?",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "Of course. Does your car have a spare tire? Check in the trunk — there should be a compartment under the floor mat.",
            textZh: "当然。你的车有备胎吗？看看后备箱——脚垫下面应该有个隔层。",
            casualVersion: "Sure. Got a spare? Check the trunk, usually under the floor mat.",
            formalityVariants: {
              casual: "Yeah. Spare tire? Check the trunk, under the mat.",
              standard: "Of course. Does your car have a spare tire? Check in the trunk — there should be a compartment under the floor mat.",
              formal: "Certainly. May I inquire if your vehicle is equipped with a spare tire? Please inspect the trunk compartment; there is typically a storage area beneath the floor mat.",
            },
            keyPhrases: [
              { en: "spare tire", zh: "备胎" },
              { en: "trunk", zh: "后备箱" },
              { en: "compartment", zh: "隔层" },
              { en: "floor mat", zh: "脚垫" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. Is there a spare in the trunk? Pop it open and check — usually there's one under the floor panel.",
                textZh: "没问题。后备箱有备胎吗？打开看看——通常在底板下面。",
                actionHint: "检查后备箱底部",
                frequency: "common",
              },
              {
                textEn:
                  "We'll get someone out there. First, check if you've got a spare — open the trunk, lift the mat, and there should be a compartment underneath.",
                textZh: "我们派人去。先看看有没有备胎——打开后备箱，掀起脚垫，下面应该有个隔层。",
                actionHint: "先找到备胎",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I see a small spare tire and some tools down there.",
            textZh: "有的，看到一个小备胎和一些工具。",
            casualVersion: "Yep, small spare and some tools down there.",
            commonMistake: {
              wrong: "Yes, I see small spare tire and some tools.",
              correct: "Yes, I see a small spare tire and some tools down there.",
              explanation: "英文中可数名词单数前需要冠词a/an；“down there”更自然地指箱底。",
            },
            formalityVariants: {
              casual: "Yeah, small spare, tools.",
              standard: "Yes, I see a small spare tire and some tools down there.",
              formal: "Affirmative, I have located a compact spare tire and the requisite tools within that area.",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "That's a temporary spare — also called a donut. Our technician will be there in about 25 minutes to change it for you. Keep in mind that a donut spare has a speed limit of 50 mph and should only be driven about 50 miles. You'll want to get the real tire repaired or replaced as soon as possible.",
            textZh:
              "那是临时备胎——也叫甜甜圈。我们的技师大约25分钟到，帮你换上。注意临时备胎限速50英里/小时，只能开大约50英里。要尽快修好或换掉原来的轮胎。",
            commonMistake: {
              wrong: "That is a small tire.",
              correct: "That's a temporary spare / donut.",
              explanation: "直接说 'small tire' 不如地道说法'temporary spare' 或俚语 'donut' 准确且自然。",
            },
            casualVersion: "That's a temporary spare, kinda like a donut. Our tech'll be there in 'bout 25. Heads up, donut spares are limited to 50 mph and 'bout 50 miles. Get the real tire fixed ASAP.",
            formalityVariants: {
              casual: "That's a 'donut' spare. Tech'll be 25. Don't go over 50 mph or 50 miles. Get your real tire fixed fast.",
              standard: "That's a temporary spare — also called a donut. Our technician will be there in about 25 minutes to change it for you. Keep in mind that a donut spare has a speed limit of 50 mph and should only be driven about 50 miles. You'll want to get the real tire repaired or replaced as soon as possible.",
              formal: "That particular item is a temporary spare tire, colloquially known as a 'donut'. Our qualified technician is scheduled to arrive in approximately twenty-five minutes to facilitate its installation. Please be advised that temporary spares have a maximum speed limitation of 50 miles per hour and are designed for a travel distance of no more than approximately 50 miles. It is strongly recommended that the original tire be repaired or replaced at your earliest convenience.",
            },
            keyPhrases: [
              { en: "temporary spare", zh: "临时备胎" },
              { en: "donut", zh: "甜甜圈（临时备胎的俗称）" },
              { en: "speed limit", zh: "限速" },
              { en: "repaired or replaced", zh: "修好或换掉" },
            ],
            culturalNote:
              "很多现代车只配备临时小备胎（donut），不能高速行驶也不能开太远。有些新车甚至只有补胎液没有备胎。",
            alternativeExpressions: [
              {
                textEn:
                  "Good, that's a donut spare — the small one. Our guy will swap it for you in about 25 minutes. Just remember, max 50 mph and don't drive more than 50 miles on it.",
                textZh:
                  "好的，那是甜甜圈备胎——小的那种。我们的技师大约25分钟到帮你换。记住，最快50英里/小时，别开超过50英里。",
                actionHint: "尽快去修轮胎",
                frequency: "common",
              },
              {
                textEn:
                  "That's a temp spare. Tech will be there in 25 to put it on. Don't go over 50 mph on it and get the real tire fixed ASAP.",
                textZh: "那是临时备胎。技师25分钟到帮你装。不要超过50英里/小时，尽快去修原来的轮胎。",
                actionHint: "临时备胎有速度限制",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Understood. Is there a tire shop nearby where I can get the original tire fixed?",
            textZh: "了解。附近有轮胎店可以修原来那个轮胎吗？",
            casualVersion: "Got it. Any tire shops nearby to fix the original?",
            commonMistake: {
              wrong: "Understood. Is there a tire shop nearby can fix original tire?",
              correct: "Understood. Is there a tire shop nearby where I can get the original tire fixed?",
              explanation: "表达“在哪里可以做某事”时，用“where I can get...fixed”更地道。",
            },
            formalityVariants: {
              casual: "Okay, where can I get the old tire fixed around here?",
              standard: "Understood. Is there a tire shop nearby where I can get the original tire fixed?",
              formal: "Understood. Could you please advise if there is a tire repair facility in close proximity where I might have the original tire serviced?",
            },
          },
          {
            speaker: "them",
            role: "调度员",
            textEn:
              "There's a Discount Tire about 6 miles north. They can usually patch a tire for $10 to $25 if the damage isn't too bad. If you need a new tire, expect to pay $80 to $200 depending on the size.",
            textZh:
              "北边大约6英里有家Discount Tire。如果损坏不严重，补胎一般10到25美元。需要换新胎的话，看尺寸大约80到200美元。",
            casualVersion: "Discount Tire's 'bout 6 miles north. Patch is 10-25 if it's not too bad. New tire? Expect 80-200, depends on size.",
            culturalNote: "美国有很多连锁的轮胎店，通常可以补胎或换胎。说出具体店名很常见。",
            commonMistake: {
              wrong: "North 6 miles have a Discount Tire. Patch tire 10 to 25 dollars. New tire 80 to 200.",
              correct: "There's a Discount Tire about 6 miles north. They can usually patch a tire for $10 to $25 if the damage isn't too bad. If you need a new tire, expect to pay $80 to $200 depending on the size.",
              explanation: "英文表达“有”常用“There is/are”；补胎用“patch a tire”；费用前用“for”或“expect to pay”。",
            },
            formalityVariants: {
              casual: "Discount Tire, like 6 miles north. Patch is 10-25 if it's minor. New one's 80-200, depends on size.",
              standard: "There's a Discount Tire about 6 miles north. They can usually patch a tire for $10 to $25 if the damage isn't too bad. If you need a new tire, expect to pay $80 to $200 depending on the size.",
              formal: "There is a Discount Tire establishment situated approximately six miles to the north. They typically provide tire patching services for a cost ranging from ten to twenty-five dollars, provided the damage is not extensive. For a new tire, you may anticipate an expenditure between eighty and two hundred dollars, contingent upon the tire's dimensions.",
            },
            keyPhrases: [
              { en: "patch a tire", zh: "补胎" },
              { en: "damage", zh: "损坏" },
              { en: "depending on the size", zh: "看尺寸" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a Discount Tire about 6 miles north. A patch job is like $10-25 if the hole's not too bad. New tire's $80-200 depending on the size.",
                textZh: "北边大约6英里有家Discount Tire。补胎大约10-25美元，看洞大不大。新胎80-200美元，看尺寸。",
                actionHint: "先补胎试试",
                frequency: "common",
              },
              {
                textEn:
                  "Discount Tire is close by — 6 miles north. If it's a small puncture they can patch it cheap. If you need a new one, budget $80-200.",
                textZh: "Discount Tire很近——北边6英里。小洞的话能便宜补好。需要换新的话准备80-200美元。",
                actionHint: "开临时备胎去修",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 摩托车 / 踏板车租赁 ====================
  {
    id: "transport-motorcycle",
    category: "transport",
    titleZh: "摩托车 / 踏板车租赁",
    titleEn: "Motorcycle / Moped Rental",
    description: "在旅游地点租摩托车或踏板车出行",
    otherRole: "租车行工作人员",
    otherRoleIcon: "bike",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "renting",
        titleZh: "租车流程",
        titleEn: "Renting Process",
        description: "咨询车型、价格、所需证件等",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to rent a scooter for two days. What do you have available?",
            textZh: "你好，我想租一辆踏板车用两天。有什么车可以租？",
            casualVersion: "Hey, I wanna rent a scooter for two days. What d'ya got?",
            commonMistake: {
              wrong: "I want to rent a scooter",
              correct: "I'd like to rent a scooter",
              explanation: "I want 在英文中听起来有点生硬和不礼貌，I'd like to 更常用且礼貌。",
            },
            formalityVariants: {
              casual: "Hey, wanna rent a scooter for two days. What do you have?",
              standard: "Hi, I'd like to rent a scooter for two days. What do you have available?",
              formal:
                "Good morning/afternoon, I am interested in renting a scooter for a two-day period. Could you please inform me of the models you currently have in stock?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! We have 50cc and 125cc scooters. The 50cc is $25 a day — you don't need a motorcycle license for it. The 125cc is $40 a day but you'll need a valid motorcycle license or an international driving permit.",
            textZh:
              "好的！我们有50cc和125cc的。50cc一天25美元——不需要摩托车驾照。125cc一天40美元，需要有效的摩托车驾照或国际驾照。",
            commonMistake: {
              wrong: "You needn't a motorcycle license.",
              correct: "You don't need a motorcycle license.",
              explanation: "needn't 用的少，美语更常用 don't need。",
            },
            keyPhrases: [
              { en: "motorcycle license", zh: "摩托车驾照" },
              { en: "international driving permit", zh: "国际驾照" },
              { en: "50cc / 125cc", zh: "排量（表示发动机大小）" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We've got 50cc and 125cc scooters. The 50 is 25 a day, no motorcycle license needed. The 125 is 40 but you'll need a motorcycle license or international permit.",
                textZh: "我们有50cc和125cc的。50cc一天25，不需要摩托车驾照。125cc一天40，需要摩托车驾照或国际驾照。",
                actionHint: "确认自己有没有摩托车驾照",
                frequency: "common",
              },
              {
                textEn:
                  "Small one's $25/day — anyone with a regular license can ride it. The bigger one's $40 but you need a motorcycle endorsement. Which sounds good?",
                textZh: "小的25美元/天——普通驾照就能骑。大的40但需要摩托车执照。你想要哪个？",
                actionHint: "没有摩托证选50cc",
                frequency: "common",
              },
            ],
            casualVersion:
              "Sure thing! Got 50cc and 125cc. 50cc's $25 a day, no motorcycle license needed. 125cc's $40, but you'll need a valid motorcycle license or an international permit.",
            formalityVariants: {
              casual:
                "Yep! We got 50cc and 125cc scooters. The 50cc's $25 a day, no motorcycle license needed. 125cc's $40, but you'll need one.",
              standard:
                "Sure! We have 50cc and 125cc scooters. The 50cc is $25 a day — you don't need a motorcycle license for it. The 125cc is $40 a day but you'll need a valid motorcycle license or an international driving permit.",
              formal:
                "Certainly. We offer both 50cc and 125cc scooter models. The 50cc model is priced at $25 per day and does not require a specialized motorcycle license. The 125cc model is $40 per day, for which a valid motorcycle license or an international driving permit is required.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the 50cc. Do I need to leave a deposit?",
            textZh: "我要50cc的。需要交押金吗？",
            casualVersion: "I'll take the 50cc. Gotta leave a deposit?",
            commonMistake: {
              wrong: "Need to pay deposit?",
              correct: "Do I need to leave a deposit?",
              explanation: "英文中常用 'leave a deposit' 表示留下押金，而非直接 'pay deposit'。",
            },
            formalityVariants: {
              casual: "I'll take the 50cc. Need a deposit?",
              standard: "I'll take the 50cc. Do I need to leave a deposit?",
              formal: "I will proceed with the 50cc model. May I inquire if a deposit is required?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes, we need a $200 deposit on your credit card — or you can leave your passport as a deposit. We also need a copy of your regular driver's license. The rental includes a helmet, but I strongly recommend getting the insurance for $8 a day. It covers theft and damage.",
            textZh:
              "需要信用卡预授权200美元押金——或者押护照也行。还需要你的普通驾照复印件。租车含一个头盔，但强烈建议买保险，一天8美元，包含盗窃和损坏。",
            commonMistake: {
              wrong: "We need $200 deposit.",
              correct: "We need a $200 deposit.",
              explanation: "deposit作为名词时，前面常加冠词a或the。",
            },
            keyPhrases: [
              { en: "deposit", zh: "押金" },
              { en: "helmet", zh: "头盔" },
              { en: "insurance", zh: "保险" },
              { en: "theft", zh: "盗窃" },
            ],
            culturalNote: "在东南亚等旅游区租摩托车，千万不要押护照——护照丢失补办非常麻烦。尽量用信用卡付押金。",
            alternativeExpressions: [
              {
                textEn:
                  "$200 deposit on your card, or you can leave your passport. We need to see your license too. Helmet's included. I'd grab the insurance — $8/day covers theft and damage.",
                textZh: "信用卡200美元押金，或者押护照。需要看你的驾照。含头盔。建议买保险——8美元/天包盗窃和损坏。",
                actionHint: "用信用卡付押金更安全",
                frequency: "common",
              },
              {
                textEn:
                  "We need a $200 hold on your credit card and a copy of your license. You get a helmet with the rental. The insurance is optional but recommended — 8 bucks a day.",
                textZh: "信用卡预授权200美元加驾照复印件。租车含头盔。保险可选但建议买——一天8块。",
                actionHint: "建议买保险",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, need a $200 deposit on your card—or just leave your passport. Also need a copy of your regular driver's license. Comes with a helmet, but seriously, get the insurance for $8. Covers theft and damage.",
            formalityVariants: {
              casual:
                "Yeah, we need a $200 deposit on your card, or you can just leave your passport. We also need a copy of your driver's license. Helmet's included, but I'd really get the insurance for $8. Covers theft and damage.",
              standard:
                "Yes, we need a $200 deposit on your credit card — or you can leave your passport as a deposit. We also need a copy of your regular driver's license. The rental includes a helmet, but I strongly recommend getting the insurance for $8 a day. It covers theft and damage.",
              formal:
                "Yes, a security deposit of $200 is required, which can be authorized on your credit card or by leaving your passport. Additionally, we require a copy of your standard driver's license. A helmet is provided with the rental; however, I highly recommend acquiring the optional insurance for $8 per day, as it provides coverage for theft and damage.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll use my credit card for the deposit and I'll take the insurance. Where should I return it?",
            textZh: "我用信用卡付押金，保险也买。在哪里还车？",
            casualVersion: "Credit card for the deposit and I'll take the insurance. Where do I drop it off?",
            commonMistake: {
              wrong: "How to return it?",
              correct: "Where should I return it?",
              explanation: "询问地点用 'where'，'how' 通常指方式或方法，易产生歧义。",
            },
            formalityVariants: {
              casual: "I'll use my card for the deposit and get the insurance. Where do I bring it back?",
              standard:
                "I'll use my credit card for the deposit and I'll take the insurance. Where should I return it?",
              formal:
                "I will place the deposit on my credit card and opt for the insurance coverage. Could you please advise on the designated return location?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "You can return it here anytime before 6 PM on the last day. Please return it with a full tank — gas stations are marked on this map. Let me show you how everything works on the scooter.",
            textZh: "最后一天下午6点前还到这里就行。请加满油还车——加油站在地图上标了。我来教你怎么操作这辆车。",
            commonMistake: {
              wrong: "Please return it with full tank.",
              correct: "Please return it with a full tank.",
              explanation: "\"full tank\"作为名词短语，前面需要加冠词。",
            },
            keyPhrases: [
              { en: "full tank", zh: "油箱加满" },
              { en: "return it here", zh: "还到这里" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bring it back here by 6 PM on the last day. Fill the tank up before you return it — gas stations are on the map here. Let me walk you through the controls.",
                textZh: "最后一天下午6点前还到这里。还车前加满油——加油站在这张地图上标了。我教你怎么操作。",
                actionHint: "记得加满油还车",
                frequency: "common",
              },
              {
                textEn:
                  "Return is right here, before 6 PM. Please top off the gas first — I've marked the stations on this map. Now let me show you how everything works.",
                textZh: "还车就在这里，6点前。请先把油加满——我在地图上标了加油站。现在让我教你怎么操作。",
                actionHint: "记住还车时间和地点",
                frequency: "common",
              },
            ],
            casualVersion:
              "Just bring it back here anytime before 6 PM on the last day. Fill up the tank first—gas stations are on this map. Lemme show you how this thing works.",
            formalityVariants: {
              casual:
                "Just bring it back here before 6 PM on the last day. Make sure it's full of gas—stations are on the map. I'll show you how to use it.",
              standard:
                "You can return it here anytime before 6 PM on the last day. Please return it with a full tank — gas stations are marked on this map. Let me show you how everything works on the scooter.",
              formal:
                "You may return the scooter to this location anytime prior to 6 PM on the final day of your rental. Kindly ensure the fuel tank is full upon return; gas stations are indicated on the provided map. I will now demonstrate the operating procedures of the scooter.",
            },
          },
        ],
      },
      {
        id: "damage-return",
        titleZh: "还车时有争议",
        titleEn: "Return with Damage Dispute",
        description: "还车时被指有新损坏，需要沟通",
        difficulty: "advanced",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Welcome back. Let me check the scooter... Hmm, there's a new scratch on the left side here. This wasn't here before.",
            textZh: "欢迎回来。我检查一下车……嗯，左边这里有一道新划痕。之前没有的。",
            keyPhrases: [
              { en: "scratch", zh: "划痕" },
              { en: "wasn't here before", zh: "之前没有" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hmm, I'm seeing a scratch on the left side that wasn't there when you picked it up.",
                textZh: "嗯，左边有道划痕，你取车的时候没有。",
                actionHint: "出示取车时的照片",
                frequency: "common",
              },
              {
                textEn: "Hold on — there's a new scratch here on the left. This is new damage. Did something happen?",
                textZh: "等一下——左边这里有道新划痕。这是新的。发生什么了？",
                actionHint: "解释情况或出示照片",
                frequency: "common",
              },
            ],
            casualVersion:
              "Welcome back. Lemme check the scooter... Huh, new scratch on the left here. Wasn't here before.",
            commonMistake: {
              wrong: "This didn't exist before.",
              correct: "This wasn't here before.",
              explanation: "exist听起来很正式或哲学，wasn't here更自然，口语常用。",
            },
            formalityVariants: {
              casual: "Hey. Lemme check the scooter. Hmm, new scratch on the left here. Wasn't there earlier.",
              standard:
                "Welcome back. Let me check the scooter... Hmm, there's a new scratch on the left side here. This wasn't here before.",
              formal:
                "Welcome back. I'll proceed with the inspection of the scooter. I've observed a new scratch on the left side. This damage was not present prior to your rental.",
            },
          },
          {
            speaker: "you",
            textEn:
              "That scratch was already there when I picked it up. I actually took photos before I left — here, you can see it in these pictures.",
            textZh: "这个划痕我取车的时候就有了。我出发前拍了照片——你看，这些照片里可以看到。",
            casualVersion: "That scratch was already there when I got it. I actually took pics before I left — here, you can see it.",
            culturalNote: "在国外租车时，提车前拍照留证是非常好的习惯。",
            commonMistake: {
              wrong: "That scratch already there when I pick up. I took photos before I go.",
              correct: "That scratch was already there when I picked it up. I actually took photos before I left.",
              explanation: "句子结构不完整，动词时态和介词错误，应使用过去式。",
            },
            formalityVariants: {
              casual: "Nah, that scratch was there when I got it. I actually took pics before I left — you can see it here.",
              standard: "That scratch was already there when I picked it up. I actually took photos before I left — here, you can see it in these pictures.",
              formal: "I must inform you that the scratch in question was present at the time of my acquisition of the vehicle. I documented the condition prior to my departure; you may observe the aforementioned damage in these photographic records.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Oh, you're right — I can see it in your photo with the timestamp. My apologies. Let me check the rest... Everything else looks fine. Full tank too. Your deposit will be refunded in 3 to 5 business days.",
            textZh:
              "哦，你说得对——你照片上有时间戳能看到。抱歉。我看看其他地方……都没问题。油也加满了。押金3到5个工作日退还。",
            commonMistake: {
              wrong: "Oh, you are right. Your photos have timestamp. Sorry.",
              correct: "Oh, you're right — your photos are timestamped. My apologies.",
              explanation: "\"timestamped\" 是更地道的说法。 \"My apologies\" 比 \"Sorry\" 更正式一点但仍自然。",
            },
            casualVersion: "Oh, yeah — I see it in your photo with the timestamp. My bad. Lemme check the rest... Everything else looks good. Full tank too. Deposit back in 3 to 5 biz days.",
            formalityVariants: {
              casual: "Oh, yeah, I see it on your timestamped photo. My bad. Rest looks good. Full tank. Deposit back in 3-5 biz days.",
              standard: "Oh, you're right — I can see it in your photo with the timestamp. My apologies. Let me check the rest... Everything else looks fine. Full tank too. Your deposit will be refunded in 3 to 5 business days.",
              formal: "Indeed, you are correct. I can confirm its presence via your timestamped photographic evidence. My sincerest apologies for the oversight. I shall now complete the remaining inspection... All other aspects appear satisfactory. The fuel tank is also full. Your deposit will be processed for a refund within three to five business days.",
            },
            keyPhrases: [
              { en: "timestamp", zh: "时间戳" },
              { en: "refunded", zh: "退还" },
              { en: "business days", zh: "工作日" },
            ],
            culturalNote:
              "租车前一定要拍照记录车辆现有损坏，包括划痕、凹痕等。拍照时确保有时间戳。这是保护自己的最佳方式。",
            alternativeExpressions: [
              {
                textEn:
                  "Oh wait, I see it in your photo with the timestamp — you're right, it was already there. My bad. Everything else checks out. Full tank, good. Deposit back in 3-5 business days.",
                textZh:
                  "等等，你照片上有时间戳确实能看到——你说得对，本来就有。我的错。其他都没问题。油也满了。押金3-5个工作日退。",
                actionHint: "保留好照片和收据",
                frequency: "common",
              },
              {
                textEn:
                  "Ah, you've got photos — smart. Yeah, I can see it was pre-existing. Sorry about that. Rest of the scooter looks great. Deposit will be released in a few business days.",
                textZh: "啊，你有照片——聪明。是的，确实是原来就有的。抱歉。车其他地方都没问题。押金几个工作日内退还。",
                actionHint: "等待押金退还",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No problem. Can I get a receipt for the rental?",
            textZh: "没关系。能给我一张租车收据吗？",
            casualVersion: "No worries. Can I get a receipt?",
            commonMistake: {
              wrong: "No problem. Can give me a receipt for the rental?",
              correct: "No problem. Can I get a receipt for the rental?",
              explanation: "英文动词通常需要主语，Can give me是错误用法，应为Can I get...",
            },
            formalityVariants: {
              casual: "All good. Can I get a receipt?",
              standard: "No problem. Can I get a receipt for the rental?",
              formal: "It's quite alright. May I please request a receipt for this rental transaction?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course — here you go. Thank you for renting with us. Hope you enjoyed the ride!",
            textZh: "当然——给你。谢谢光临。希望骑得开心！",
            commonMistake: {
              wrong: "Of course, give you. Thank you for renting with us. Hope you enjoyed the journey!",
              correct: "Of course — here you go. Thank you for renting with us. Hope you enjoyed the ride!",
              explanation: "\"here you go\" 更自然口语。\"ride\" 指骑行体验。",
            },
            casualVersion: "Sure — here ya go. Thanks for renting. Hope you had fun!",
            formalityVariants: {
              casual: "Yup — here. Thanks for renting. Hope you enjoyed it!",
              standard: "Of course — here you go. Thank you for renting with us. Hope you enjoyed the ride!",
              formal: "Certainly — here is your receipt. We appreciate you choosing to rent with us. We trust you found your experience enjoyable!",
            },
            alternativeExpressions: [
              {
                textEn: "Here's your receipt. Thanks for choosing us — hope you had a great time out there!",
                textZh: "这是你的收据。谢谢选择我们——希望你玩得开心！",
                actionHint: "保留收据",
                frequency: "common",
              },
              {
                textEn: "Sure thing, here you go. Thanks for renting with us. Come back anytime!",
                textZh: "没问题，给你。感谢光顾。随时再来！",
                actionHint: "收好收据留底",
                frequency: "common",
              },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 买新车 ====================
  // ==================== 买二手车 ====================
  // ==================== 车险 ====================
  // ==================== 道路救援(AAA) ====================
  // ==================== 尾气检测 ====================
  // ==================== 车辆注册 ====================
  {
    id: "transport-car-registration",
    category: "transport",
    titleZh: "车辆注册",
    titleEn: "Car Registration",
    description: "在DMV办理车辆注册、领取车牌和贴纸",
    otherRole: "DMV工作人员",
    otherRoleIcon: "car",
    journeyPhase: "daily",
    priority: "likely",
    tags: ["DMV", "car registration", "车辆注册", "license plate", "车牌", "sticker", "贴纸"],
    flows: [
      {
        id: "new-registration",
        titleZh: "新车注册",
        titleEn: "New Vehicle Registration",
        description: "买车后去DMV注册、领车牌",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I just bought a car and need to register it. What documents do I need?",
            textZh: "你好，我刚买了车，需要注册。需要什么材料？",
            culturalNote: "美国DMV（车管所）效率低出名，建议提前预约或一大早排队。线上也可以办理部分业务。",
            casualVersion: "Hey, just bought a car — need to register it. What do I need to bring?",
            commonMistake: {
              wrong: "I need to register my new car. What paper do I bring?",
              correct: "I need to register it. What documents do I need?",
              explanation: "'documents'比'paper'更正式准确；'do I need'比'do I bring'更通用。",
            },
            formalityVariants: {
              casual: "Hey, bought a car. What do I need to get it registered?",
              standard: "Hi, I just bought a car and need to register it. What documents do I need?",
              formal: "Good morning, I've recently purchased a vehicle and need to complete the registration process. Could you please advise which documents are required?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "You'll need the signed title, a valid ID, proof of insurance, and the bill of sale. If it's from a dealer, they usually handle the title — just bring the purchase agreement.",
            textZh: "你需要签好的产权证、有效证件、保险证明和购车发票。如果是从经销商买的，他们通常会处理产权——带购车协议就行。",
            keyPhrases: [
              { en: "signed title", zh: "签过字的产权证" },
              { en: "proof of insurance", zh: "保险证明" },
            ],
            alternativeExpressions: [
              {
                textEn: "Bring the title, your ID, insurance proof, and bill of sale. Dealer purchase? They handle the title — just bring the purchase agreement.",
                textZh: "带产权证、证件、保险证明和发票。从经销商买的？他们处理产权——带购车协议就行。",
                actionHint: "准备文件",
                frequency: "common",
              },
            ],
            casualVersion: "Title, ID, insurance, and bill of sale. If it's from a dealer, they usually handle the title — just bring the purchase agreement.",
            formalityVariants: {
              casual: "Title, ID, insurance, bill of sale. Dealer? They do the title — just bring the purchase agreement.",
              standard: "You'll need the signed title, a valid ID, proof of insurance, and the bill of sale. If it's from a dealer, they usually handle the title — just bring the purchase agreement.",
              formal: "You will need to present the endorsed certificate of title, a valid form of identification, proof of insurance coverage, and the bill of sale. If the vehicle was purchased from a licensed dealer, they typically process the title transfer — in that case, the purchase agreement would suffice.",
            },
          },
          {
            speaker: "you",
            textEn: "I have everything here. How much are the registration fees?",
            textZh: "材料都带了。注册费多少？",
            culturalNote: "注册费因州、车型、车龄不同，通常$50-$500。加州和纽约偏贵。",
            casualVersion: "Got everything right here. What are the fees?",
            commonMistake: {
              wrong: "How much is register fee?",
              correct: "How much are the registration fees?",
              explanation: "'registration fees'复数形式更准确，因为通常包含多项费用。",
            },
            formalityVariants: {
              casual: "Got it all. What's the damage for registration?",
              standard: "I have everything here. How much are the registration fees?",
              formal: "I've brought all the required documentation. Could you please inform me of the total registration fees?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "For your vehicle, the registration fee is $85, plus a $15 plate fee and a $28 title transfer fee. That comes to $128 total. We accept cash, check, or card.",
            textZh: "你这辆车注册费85美元，车牌费15美元，产权转让费28美元。一共128美元。现金、支票、刷卡都可以。",
            keyPhrases: [
              { en: "plate fee", zh: "车牌费" },
              { en: "title transfer fee", zh: "产权转让费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Registration is $85, plates are $15, and title transfer is $28 — $128 total. Cash, check, or card.",
                textZh: "注册85，车牌15，过户28——一共128。现金、支票、刷卡都行。",
                actionHint: "准备付款",
                frequency: "common",
              },
            ],
            casualVersion: "85 for registration, 15 for plates, 28 for title transfer. 128 total. Cash, check, or card.",
            formalityVariants: {
              casual: "$85 registration, $15 plates, $28 title transfer. $128 total. Cash, check, or card works.",
              standard: "For your vehicle, the registration fee is $85, plus a $15 plate fee and a $28 title transfer fee. That comes to $128 total. We accept cash, check, or card.",
              formal: "The registration fee for your vehicle is $85, with an additional $15 license plate fee and a $28 title transfer fee, bringing the total to $128. We accept payment by cash, personal check, or credit/debit card.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll pay by card. When will I get my plates?",
            textZh: "我刷卡。车牌什么时候能拿到？",
            culturalNote: "有些州当场给车牌，有些会邮寄。临时牌照（temp tag）通常有效30-90天。",
            casualVersion: "Card, please. When do I get my plates?",
            commonMistake: {
              wrong: "When can I receive my plate number?",
              correct: "When will I get my plates?",
              explanation: "'plates'指实体车牌，不是'plate number'（车牌号码）。",
            },
            formalityVariants: {
              casual: "I'll put it on my card. When do I get plates?",
              standard: "I'll pay by card. When will I get my plates?",
              formal: "I'd like to pay by card, please. Could you advise when the license plates will be available?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Your plates will be mailed to you within 2 to 3 weeks. In the meantime, here's a temporary registration and a paper plate. It's valid for 30 days.",
            textZh: "车牌会在2到3周内邮寄给你。这期间先用这个临时注册证和纸质车牌。有效期30天。",
            keyPhrases: [
              { en: "temporary registration", zh: "临时注册证" },
              { en: "paper plate", zh: "纸质临时车牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Plates come by mail in 2-3 weeks. Here's your temp registration and paper plate — good for 30 days.",
                textZh: "车牌2-3周邮寄到。给你临时注册和纸质车牌——30天有效。",
                actionHint: "贴好临时车牌",
                frequency: "common",
              },
            ],
            casualVersion: "Plates come in the mail, 2 to 3 weeks. Here's a temp registration and paper plate — good for 30 days.",
            formalityVariants: {
              casual: "Plates'll come in the mail in 2-3 weeks. Here's your temp plate — good for 30 days.",
              standard: "Your plates will be mailed to you within 2 to 3 weeks. In the meantime, here's a temporary registration and a paper plate. It's valid for 30 days.",
              formal: "Your permanent license plates will be mailed to your registered address within 2 to 3 weeks. In the interim, please accept this temporary registration certificate and paper plate, which are valid for 30 days.",
            },
          },
        ],
      },
      {
        id: "renewal-sticker",
        titleZh: "续注册与贴纸",
        titleEn: "Renewal & Sticker",
        description: "车辆注册到期，续注册并领取新的年检贴纸",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My registration is about to expire. Can I renew it online or do I have to come in?",
            textZh: "我的注册快到期了。可以在线续期还是必须来现场？",
            culturalNote: "大多数州支持在线续注册，但如果车辆需要做排放检测或有未缴罚款，可能需要亲自到DMV。",
            casualVersion: "Registration's expiring soon. Can I do it online?",
            commonMistake: {
              wrong: "My car registration will finish soon. Can I continue online?",
              correct: "My registration is about to expire. Can I renew it online?",
              explanation: "'expire'是到期的标准用词；'renew'是续期，不是'continue'。",
            },
            formalityVariants: {
              casual: "Registration's almost up. Can I renew online?",
              standard: "My registration is about to expire. Can I renew it online or do I have to come in?",
              formal: "My vehicle registration is approaching its expiration date. Would it be possible to complete the renewal online, or is an in-person visit required?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "You can renew online at our website as long as you have a valid emissions test on file. If not, you'll need to get that done first. The renewal fee is $75.",
            textZh: "只要系统里有有效的尾气检测记录，就可以在我们网站上续期。没有的话需要先做尾气检测。续期费75美元。",
            keyPhrases: [
              { en: "renew online", zh: "在线续期" },
              { en: "on file", zh: "系统里有记录" },
            ],
            alternativeExpressions: [
              {
                textEn: "If your emissions test is current, you can renew online. Otherwise, get the test done first, then renew. It's $75.",
                textZh: "如果排放检测是最新的，可以在线续期。否则先做检测再续。75美元。",
                actionHint: "确认排放检测是否过期",
                frequency: "common",
              },
            ],
            casualVersion: "If your emissions test is up to date, just renew online. If not, get that first. It's $75 to renew.",
            formalityVariants: {
              casual: "Emissions test current? Renew online. If not, get the test first. $75.",
              standard: "You can renew online at our website as long as you have a valid emissions test on file. If not, you'll need to get that done first. The renewal fee is $75.",
              formal: "Online renewal is available through our website, provided that a valid emissions test result is currently on file in our system. If not, you would need to complete the emissions test prior to renewal. The renewal fee is $75.",
            },
          },
          {
            speaker: "you",
            textEn: "I already did the emissions test last week. After I renew, will I get a new sticker for my license plate?",
            textZh: "我上周已经做了尾气检测了。续期后会收到新的车牌贴纸吗？",
            culturalNote: "美国车牌贴纸（registration sticker/tab）通常贴在车牌角上，显示到期月份和年份。颜色每年不同。",
            casualVersion: "Did the emissions test last week. Do I get a new sticker after I renew?",
            commonMistake: {
              wrong: "I already did emission test. Will I get new plate sticker?",
              correct: "I already did the emissions test. Will I get a new sticker for my license plate?",
              explanation: "'emissions test'带's'；'sticker for my license plate'比'plate sticker'更清晰。",
            },
            formalityVariants: {
              casual: "Got the emissions test done last week. New sticker coming after renewal?",
              standard: "I already did the emissions test last week. After I renew, will I get a new sticker for my license plate?",
              formal: "I completed the emissions test last week. Following the renewal, will I receive a new registration sticker for my license plate?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Yes, once you renew, a new registration sticker will be mailed to you. Peel off the old one and put the new one in the same spot on your rear plate. It shows the new expiration month and year.",
            textZh: "是的，续期后会邮寄新贴纸。把旧的揭掉，把新的贴在后车牌同一个位置。上面会显示新的到期月份和年份。",
            keyPhrases: [
              { en: "registration sticker", zh: "注册贴纸" },
              { en: "rear plate", zh: "后车牌" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep — new sticker comes in the mail. Stick it on the rear plate, same spot as the old one. Shows your new expiration date.",
                textZh: "对——新贴纸会邮寄来。贴在后车牌旧贴纸的位置。显示新的到期日。",
                actionHint: "及时更换贴纸",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, new sticker comes in the mail. Peel off the old one, slap the new one on your back plate. It shows the new expiration.",
            formalityVariants: {
              casual: "Yeah, new sticker comes by mail. Replace the old one on the back plate — shows your new expiration.",
              standard: "Yes, once you renew, a new registration sticker will be mailed to you. Peel off the old one and put the new one in the same spot on your rear plate. It shows the new expiration month and year.",
              formal: "Yes, upon completion of the renewal, a new registration sticker will be dispatched to your mailing address. Please remove the existing sticker and affix the new one in the designated location on your rear license plate. The sticker will indicate the updated expiration month and year.",
            },
          },
          {
            speaker: "you",
            textEn: "What if I drive with an expired sticker? Will I get a ticket?",
            textZh: "如果贴纸过期了还开车会被罚吗？",
            culturalNote: "过期注册在美国几乎所有州都违法，被警察拦下会开罚单，通常$50-$200，严重的可能扣车。",
            casualVersion: "What happens if I drive around with an expired sticker?",
            commonMistake: {
              wrong: "If sticker expires and I drive, will police fine me?",
              correct: "What if I drive with an expired sticker? Will I get a ticket?",
              explanation: "'get a ticket'是被开罚单的标准说法，比'police fine me'更自然。",
            },
            formalityVariants: {
              casual: "Am I gonna get a ticket if my sticker's expired?",
              standard: "What if I drive with an expired sticker? Will I get a ticket?",
              formal: "Could you advise on the consequences of operating a vehicle with an expired registration sticker? Would I be subject to a citation?",
            },
          },
          {
            speaker: "them",
            role: "DMV工作人员",
            textEn: "Yes, driving with expired registration is a moving violation. You could get a ticket — fines start at $100 and go up. Renew before it expires to avoid any issues.",
            textZh: "是的，过期注册驾驶属于交通违规。会被开罚单——罚款从100美元起。在到期前续期就没问题了。",
            keyPhrases: [
              { en: "moving violation", zh: "交通违规" },
              { en: "fines", zh: "罚款" },
            ],
            alternativeExpressions: [
              {
                textEn: "Expired registration is a citable offense. Fines are $100 and up. Just get it renewed before it lapses and you're good.",
                textZh: "过期注册是可罚的违规。罚款100起。在到期前续了就没事。",
                actionHint: "尽快续注册",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, expired registration is a ticket. Fines start at $100. Just renew before it expires and you're fine.",
            formalityVariants: {
              casual: "Yep, expired registration is a ticket — $100 and up. Just renew on time.",
              standard: "Yes, driving with expired registration is a moving violation. You could get a ticket — fines start at $100 and go up. Renew before it expires to avoid any issues.",
              formal: "Indeed, operating a vehicle with expired registration constitutes a moving violation. You could be issued a citation, with fines beginning at $100 and potentially increasing. I would strongly recommend completing the renewal prior to the expiration date to avoid any legal complications.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 停车计时器 ====================
  {
    id: "transport-parking-meter",
    category: "transport",
    titleZh: "停车计时器",
    titleEn: "Parking Meter",
    description: "使用路边停车计时器，投币或App支付停车费",
    otherRole: "路人 / 停车管理员",
    otherRoleIcon: "car",
    journeyPhase: "daily",
    priority: "likely",
    tags: ["parking meter", "停车", "coins", "app payment", "计时器", "停车费"],
    flows: [
      {
        id: "coin-meter",
        titleZh: "投币停车",
        titleEn: "Coin-Operated Meter",
        description: "路边停车，用硬币投停车计时器",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know how this parking meter works? I don't have any quarters.",
            textZh: "打扰了，你知道这个停车计时器怎么用吗？我没有25美分硬币。",
            culturalNote: "美国路边停车计时器传统上只接受quarter（25美分硬币），但越来越多的城市支持信用卡或App支付。",
            casualVersion: "Hey, how does this meter work? I don't have any quarters on me.",
            commonMistake: {
              wrong: "Do you know how to use this parking machine? I have no coins.",
              correct: "Do you know how this parking meter works? I don't have any quarters.",
              explanation: "'parking meter'不是'parking machine'；美国停车计时器主要用'quarters'。",
            },
            formalityVariants: {
              casual: "Hey, know how this meter works? No quarters on me.",
              standard: "Excuse me, do you know how this parking meter works? I don't have any quarters.",
              formal: "Excuse me, would you happen to know how this parking meter operates? I'm afraid I don't have any quarters at the moment.",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure! This one actually takes credit cards now. Just tap or insert your card, then select how much time you need. Each hour is $2.",
            textZh: "当然！这个其实现在可以刷卡了。刷卡或插卡，然后选你要停多长时间。每小时2美元。",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插卡" },
              { en: "select how much time", zh: "选择停车时长" },
            ],
            alternativeExpressions: [
              {
                textEn: "No worries — these newer ones take cards. Tap your card, pick your time, and you're set. It's $2 an hour.",
                textZh: "没事——这些新的可以刷卡。刷卡，选时间就好了。每小时2美元。",
                actionHint: "刷卡付停车费",
                frequency: "common",
              },
            ],
            casualVersion: "Oh yeah, this one takes cards now. Tap your card, pick your time. Two bucks an hour.",
            formalityVariants: {
              casual: "This one takes cards. Tap it, pick your time. 2 bucks an hour.",
              standard: "Sure! This one actually takes credit cards now. Just tap or insert your card, then select how much time you need. Each hour is $2.",
              formal: "Certainly! This particular meter has been updated to accept credit cards. Simply tap or insert your card and select your desired duration. The rate is $2 per hour.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll pay by card. Is there a time limit, or can I park here all day?",
            textZh: "太好了，我刷卡。有时间限制吗，还是可以停一整天？",
            culturalNote: "大多数路边停车计时器有2-4小时上限，不允许反复投币续时（feeding the meter），违者会被罚。",
            casualVersion: "Cool, I'll use my card. Any time limit, or can I park all day?",
            commonMistake: {
              wrong: "Can I stop here all day?",
              correct: "Can I park here all day?",
              explanation: "'park'是停车的标准用词，'stop'通常指短暂停留。",
            },
            formalityVariants: {
              casual: "Nice. Any time limit, or can I leave my car here all day?",
              standard: "Great, I'll pay by card. Is there a time limit, or can I park here all day?",
              formal: "Wonderful, I'll use my card. Is there a maximum parking duration, or may I park for the entire day?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "There's a 2-hour max on this block. After that, you'd have to move your car or risk getting a ticket. The sign right there shows the rules.",
            textZh: "这条街最多停2小时。之后要移车，不然会被贴罚单。那个牌子上写着规则。",
            keyPhrases: [
              { en: "2-hour max", zh: "最多2小时" },
              { en: "risk getting a ticket", zh: "有被罚单的风险" },
            ],
            alternativeExpressions: [
              {
                textEn: "Max is 2 hours here. Move it after that or you'll get a ticket. Check the sign for details.",
                textZh: "这里最多2小时。之后移车，不然会被开单。看牌子上的细节。",
                actionHint: "设手机闹钟提醒",
                frequency: "common",
              },
            ],
            casualVersion: "2-hour max on this block. Gotta move after that or you'll get a ticket. The sign right there has the rules.",
            formalityVariants: {
              casual: "2 hours max. Move it after that or you'll get ticketed. Check the sign.",
              standard: "There's a 2-hour max on this block. After that, you'd have to move your car or risk getting a ticket. The sign right there shows the rules.",
              formal: "The maximum parking duration on this block is 2 hours. Beyond that, you would need to relocate your vehicle to avoid receiving a parking citation. The posted sign indicates the specific regulations.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, I see. What time does metered parking end? Is it free after a certain hour?",
            textZh: "哦，明白了。计时停车到几点结束？过了某个时间是不是就免费了？",
            culturalNote: "很多城市计时停车有时段限制，比如周一到周六早8点到晚6点收费，其余时间和周日免费。",
            casualVersion: "Got it. When does the meter stop charging? Is it free at night?",
            commonMistake: {
              wrong: "What time parking meter finishes? Is night time free?",
              correct: "What time does metered parking end? Is it free after a certain hour?",
              explanation: "'metered parking'是计时停车的标准说法；'after a certain hour'表达更地道。",
            },
            formalityVariants: {
              casual: "When does the meter stop? Free at night?",
              standard: "What time does metered parking end? Is it free after a certain hour?",
              formal: "At what time does the metered parking period conclude? Is parking complimentary beyond a certain hour?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Metered parking here is Monday through Saturday, 8 AM to 6 PM. After 6 PM and all day Sunday, it's free. But check the sign — some blocks are different.",
            textZh: "这里的计时停车是周一到周六，早8点到晚6点。6点以后和整个周日都免费。但看一下牌子——有些街区不一样。",
            keyPhrases: [
              { en: "Monday through Saturday", zh: "周一到周六" },
              { en: "check the sign", zh: "看一下牌子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Meters run Mon-Sat, 8 to 6. Evenings and Sundays are free. Always double-check the sign though.",
                textZh: "计时器周一到周六，8点到6点。晚上和周日免费。不过一定要看牌子确认。",
                actionHint: "查看停车标志",
                frequency: "common",
              },
            ],
            casualVersion: "Mon through Sat, 8 to 6. After 6 and Sundays it's free. But check the sign — varies by block.",
            formalityVariants: {
              casual: "Mon to Sat, 8 to 6. Free after 6 and all day Sunday. Check the sign though.",
              standard: "Metered parking here is Monday through Saturday, 8 AM to 6 PM. After 6 PM and all day Sunday, it's free. But check the sign — some blocks are different.",
              formal: "Metered parking in this area is enforced Monday through Saturday, from 8:00 AM to 6:00 PM. Parking is complimentary after 6:00 PM and throughout the day on Sundays. However, I would recommend verifying the posted signage, as regulations may vary by block.",
            },
          },
        ],
      },
      {
        id: "parking-app",
        titleZh: "App支付停车",
        titleEn: "Parking App Payment",
        description: "用手机App支付停车费、远程续时",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I see a sign that says I can pay with ParkMobile. How do I set that up?",
            textZh: "我看到牌子说可以用ParkMobile付停车费。怎么设置？",
            culturalNote: "ParkMobile是美国最大的停车App之一，覆盖500+城市。其他常见的有SpotHero、PayByPhone。",
            casualVersion: "Sign says ParkMobile. How do I use that?",
            commonMistake: {
              wrong: "How to use the parking app?",
              correct: "How do I set that up?",
              explanation: "英文疑问句需要助动词do；'set up'表示首次设置。",
            },
            formalityVariants: {
              casual: "ParkMobile? How's that work?",
              standard: "I see a sign that says I can pay with ParkMobile. How do I set that up?",
              formal: "I notice the signage indicates that ParkMobile is accepted. Could you guide me through the setup process?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Download the ParkMobile app, create an account, and add your card. Then just enter the zone number from the sign and pick your time. It'll charge your card automatically.",
            textZh: "下载ParkMobile App，注册账号，绑卡。然后输入牌子上的区号，选停车时间。会自动从卡上扣费。",
            keyPhrases: [
              { en: "zone number", zh: "停车区域号" },
              { en: "charge your card automatically", zh: "自动扣费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just download the app, sign up, add a card. Then punch in the zone number on the sign and how long you're parking. It bills your card.",
                textZh: "下载App，注册，加卡。然后输入牌子上的区号和停车时长。从卡上扣费。",
                actionHint: "下载App并注册",
                frequency: "common",
              },
            ],
            casualVersion: "Download the app, make an account, add your card. Type in the zone number from the sign, pick your time. It charges your card.",
            formalityVariants: {
              casual: "Download it, sign up, add a card. Enter the zone number, pick your time. It charges your card.",
              standard: "Download the ParkMobile app, create an account, and add your card. Then just enter the zone number from the sign and pick your time. It'll charge your card automatically.",
              formal: "You would need to download the ParkMobile application, create an account, and register your payment card. Then simply input the zone number displayed on the sign and select your desired parking duration. The fee will be charged to your card automatically.",
            },
          },
          {
            speaker: "you",
            textEn: "Nice. Can I extend my time from the app if I'm running late?",
            textZh: "不错。如果来不及回来，能在App上续时间吗？",
            culturalNote: "App停车的一大优势就是可以远程续时，不用跑回来投币。但仍受最大时限限制。",
            casualVersion: "Can I add more time from the app if I'm late?",
            commonMistake: {
              wrong: "Can I add time if I'm not back on time?",
              correct: "Can I extend my time from the app if I'm running late?",
              explanation: "'extend my time'是续时的标准说法；'running late'比'not back on time'更自然。",
            },
            formalityVariants: {
              casual: "Can I extend from the app if I'm running behind?",
              standard: "Nice. Can I extend my time from the app if I'm running late?",
              formal: "That's convenient. Would I be able to extend my parking session remotely through the app if I need additional time?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yeah, that's the best part. The app sends you a notification before your time runs out, and you can extend right from your phone. Just remember there's still a 2-hour max.",
            textZh: "对，这是最棒的功能。时间快到的时候App会发通知，直接在手机上就能续。但记住还是有2小时上限。",
            keyPhrases: [
              { en: "notification", zh: "通知" },
              { en: "extend right from your phone", zh: "直接手机上续时" },
            ],
            alternativeExpressions: [
              {
                textEn: "That's the best thing about it — you get an alert before time's up and can extend from your phone. Still capped at 2 hours though.",
                textZh: "这是它最好的地方——时间快到前会提醒，手机上就能续。但还是最多2小时。",
                actionHint: "注意2小时上限",
                frequency: "common",
              },
            ],
            casualVersion: "Yep, best part. It notifies you before time's up and you can extend from your phone. But still 2-hour max.",
            formalityVariants: {
              casual: "Yeah, that's the beauty of it. Get a notification, extend from your phone. 2-hour max still applies though.",
              standard: "Yeah, that's the best part. The app sends you a notification before your time runs out, and you can extend right from your phone. Just remember there's still a 2-hour max.",
              formal: "Indeed, that is one of the primary advantages. The application will send you a notification prior to your session expiring, and you can extend directly from your phone. Do bear in mind, however, that the 2-hour maximum still applies.",
            },
          },
          {
            speaker: "you",
            textEn: "One more question — what happens if I forget to start the session? Will I get a ticket?",
            textZh: "再问一下——如果忘了开始计时会怎样？会被开罚单吗？",
            culturalNote: "停车执法人员会检查计时器状态或App系统。没有有效停车记录就可能被贴罚单，通常$35-$75。",
            casualVersion: "What if I forget to start it? Will I get a ticket?",
            commonMistake: {
              wrong: "If I forget to open the parking, will I be fined?",
              correct: "What happens if I forget to start the session? Will I get a ticket?",
              explanation: "'start the session'是启动停车计时的说法；'get a ticket'比'be fined'更口语化。",
            },
            formalityVariants: {
              casual: "What if I forget to start it? Ticket?",
              standard: "One more question — what happens if I forget to start the session? Will I get a ticket?",
              formal: "I have one additional question — what would the consequences be if I inadvertently fail to initiate the parking session? Would I be subject to a citation?",
            },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yeah, parking enforcement checks the system. If there's no active session, they'll ticket you. Usually around $50. So make sure you start it before you walk away.",
            textZh: "会的，停车执法人员会查系统。没有有效的停车记录就会开罚单。通常50美元左右。所以走之前一定要开始计时。",
            keyPhrases: [
              { en: "parking enforcement", zh: "停车执法人员" },
              { en: "active session", zh: "有效的停车记录" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yep, enforcement checks the app system. No active session, you get a ticket — about $50. Always start the session before leaving your car.",
                textZh: "对，执法会查App系统。没有有效记录就开单——大约50美元。离开车之前一定要启动。",
                actionHint: "养成习惯先启动App",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, no active session means a ticket — usually about 50 bucks. Start it before you walk away.",
            formalityVariants: {
              casual: "Yep, no session = ticket. About $50. Don't forget to start it.",
              standard: "Yeah, parking enforcement checks the system. If there's no active session, they'll ticket you. Usually around $50. So make sure you start it before you walk away.",
              formal: "Yes, parking enforcement officers verify the system. In the absence of an active session, you would receive a parking citation, typically in the amount of approximately $50. I would strongly advise ensuring the session is started before leaving your vehicle.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 收费公路 ====================
  {
    id: "transport-toll-road",
    category: "transport",
    titleZh: "收费公路",
    titleEn: "Toll Road & EZ-Pass",
    description: "在美国走收费公路，使用EZ-Pass或在收费站付费",
    otherRole: "客服 / 收费站员工",
    otherRoleIcon: "car",
    journeyPhase: "daily",
    priority: "likely",
    tags: ["toll road", "收费公路", "EZ-Pass", "toll booth", "turnpike", "收费站"],
    flows: [
      {
        id: "setup-ezpass",
        titleZh: "办理EZ-Pass",
        titleEn: "Setting Up EZ-Pass",
        description: "购买和设置EZ-Pass电子收费设备",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to get an EZ-Pass. Where can I buy one and how much does it cost?",
            textZh: "你好，我想办一个EZ-Pass。在哪买，多少钱？",
            culturalNote: "EZ-Pass覆盖美国东部19个州，是最广泛使用的电子收费系统。可以在网上、服务中心或部分便利店购买。",
            casualVersion: "Hey, I wanna get an EZ-Pass. Where do I get one and how much?",
            commonMistake: {
              wrong: "I want to buy a EZ-Pass. Where can I buy?",
              correct: "I'd like to get an EZ-Pass. Where can I buy one?",
              explanation: "'an EZ-Pass'因为E发音以元音开头用'an'；'buy one'比单独'buy'更完整。",
            },
            formalityVariants: {
              casual: "Where do I get an EZ-Pass? How much?",
              standard: "Hi, I'd like to get an EZ-Pass. Where can I buy one and how much does it cost?",
              formal: "Good afternoon, I'm interested in obtaining an EZ-Pass transponder. Could you advise where I might purchase one and the associated cost?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "You can order one online or pick one up at any of our service centers. The transponder itself is free — you just need a $25 prepaid balance to start. It auto-replenishes from your card.",
            textZh: "可以在网上订购或在我们任何一个服务中心领取。设备本身免费——只需要25美元的预存余额。会从你的卡上自动充值。",
            keyPhrases: [
              { en: "transponder", zh: "电子收费设备" },
              { en: "auto-replenishes", zh: "自动充值" },
            ],
            alternativeExpressions: [
              {
                textEn: "Order online or grab one at a service center. The device is free — just load $25 to start. It refills automatically from your card.",
                textZh: "在线下单或去服务中心拿。设备免费——充25美元开始用。自动从卡上补充。",
                actionHint: "准备银行卡",
                frequency: "common",
              },
            ],
            casualVersion: "Order online or pick one up at a service center. Device is free — 25 bucks prepaid to start. It auto-refills from your card.",
            formalityVariants: {
              casual: "Get one online or at a service center. It's free — just 25 prepaid. Auto-refills from your card.",
              standard: "You can order one online or pick one up at any of our service centers. The transponder itself is free — you just need a $25 prepaid balance to start. It auto-replenishes from your card.",
              formal: "You may order a transponder through our website or collect one from any of our service centers. The transponder is provided at no cost — an initial prepaid balance of $25 is required. The balance auto-replenishes from the credit card on file.",
            },
          },
          {
            speaker: "you",
            textEn: "How do I mount it in my car? Does it go on the windshield?",
            textZh: "怎么装到车上？贴在挡风玻璃上吗？",
            culturalNote: "EZ-Pass通常用附带的粘贴条固定在挡风玻璃内侧上方。部分州（如加州的FasTrak）有外挂型。",
            casualVersion: "Where does it go — on the windshield?",
            commonMistake: {
              wrong: "How to install it in car? Put on front glass?",
              correct: "How do I mount it in my car? Does it go on the windshield?",
              explanation: "'mount'是安装的标准用词；'windshield'是挡风玻璃，不是'front glass'。",
            },
            formalityVariants: {
              casual: "Where do I stick it? Windshield?",
              standard: "How do I mount it in my car? Does it go on the windshield?",
              formal: "Could you advise on the proper installation method? Is the transponder to be affixed to the windshield?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Yes, it sticks to the inside of your windshield near the rearview mirror. We include adhesive strips in the box. Make sure the windshield is clean and dry before you attach it.",
            textZh: "是的，贴在挡风玻璃内侧，后视镜附近。盒子里有胶条。贴之前确保玻璃干净干燥。",
            keyPhrases: [
              { en: "rearview mirror", zh: "后视镜" },
              { en: "adhesive strips", zh: "胶条" },
            ],
            alternativeExpressions: [
              {
                textEn: "Stick it on the inside of your windshield, near the mirror. Comes with adhesive strips — just make sure the glass is clean first.",
                textZh: "贴在挡风玻璃内侧，后视镜附近。附带胶条——先确保玻璃干净。",
                actionHint: "清洁挡风玻璃后安装",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, stick it on the inside of your windshield near the mirror. Comes with adhesive strips. Just clean the glass first.",
            formalityVariants: {
              casual: "Goes on the inside of your windshield, by the mirror. Clean the glass, stick it on.",
              standard: "Yes, it sticks to the inside of your windshield near the rearview mirror. We include adhesive strips in the box. Make sure the windshield is clean and dry before you attach it.",
              formal: "The transponder should be affixed to the interior surface of your windshield, in proximity to the rearview mirror. Adhesive strips are included in the package. Please ensure the windshield surface is clean and dry prior to attachment.",
            },
          },
          {
            speaker: "you",
            textEn: "Does EZ-Pass work in every state, or just this one?",
            textZh: "EZ-Pass每个州都能用，还是只在这个州？",
            culturalNote: "EZ-Pass可在美国东部19个州互通使用，包括纽约、新泽西、宾州等。西部各州有自己的系统如FasTrak。",
            casualVersion: "Does EZ-Pass work everywhere, or just here?",
            commonMistake: {
              wrong: "Can EZ-Pass use in all states?",
              correct: "Does EZ-Pass work in every state?",
              explanation: "'work in'比'use in'更自然地表达能否使用。",
            },
            formalityVariants: {
              casual: "Does this work in other states too?",
              standard: "Does EZ-Pass work in every state, or just this one?",
              formal: "Is the EZ-Pass accepted across all states, or is its functionality limited to this particular state?",
            },
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "EZ-Pass is accepted in 19 states, mostly in the Northeast and Midwest. If you're driving out West, you'd need a different system like FasTrak for California. But for the East Coast, one EZ-Pass covers you everywhere.",
            textZh: "EZ-Pass在19个州通用，主要是东北部和中西部。如果去西部开车，需要不同的系统，比如加州的FasTrak。但在东海岸，一个EZ-Pass就够了。",
            keyPhrases: [
              { en: "accepted in 19 states", zh: "在19个州通用" },
              { en: "covers you everywhere", zh: "到处都能用" },
            ],
            alternativeExpressions: [
              {
                textEn: "It works in 19 states — mainly the East Coast and Midwest. Out West, it's a different system. But for this part of the country, you're all set with one EZ-Pass.",
                textZh: "19个州能用——主要是东海岸和中西部。西部是另一个系统。但在这一带，一个EZ-Pass就够了。",
                actionHint: "了解覆盖范围",
                frequency: "common",
              },
            ],
            casualVersion: "Works in 19 states — mostly the East Coast and Midwest. Out West it's different — like FasTrak in Cali. But around here, one EZ-Pass covers everything.",
            formalityVariants: {
              casual: "19 states, mostly East Coast and Midwest. West is different — FasTrak for California. But around here, you're covered.",
              standard: "EZ-Pass is accepted in 19 states, mostly in the Northeast and Midwest. If you're driving out West, you'd need a different system like FasTrak for California. But for the East Coast, one EZ-Pass covers you everywhere.",
              formal: "EZ-Pass is currently accepted across 19 states, predominantly in the Northeastern and Midwestern regions. Should you travel to the Western states, an alternative system such as California's FasTrak would be required. However, for East Coast travel, a single EZ-Pass transponder provides comprehensive coverage.",
            },
          },
        ],
      },
      {
        id: "toll-booth-navigate",
        titleZh: "收费站通行",
        titleEn: "Navigating the Toll Booth",
        description: "在收费站选择正确的通道、处理误入问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "There are so many lanes at this toll plaza. Which one do I use if I have EZ-Pass?",
            textZh: "这个收费站好多通道。有EZ-Pass走哪条？",
            culturalNote: "收费站通常分为EZ-Pass专用道、混合道和现金道。EZ-Pass道可以不停车通过，速度限制通常15-25mph。",
            casualVersion: "So many lanes here. Which one's for EZ-Pass?",
            commonMistake: {
              wrong: "Which road should I go with EZ-Pass?",
              correct: "Which lane do I use if I have EZ-Pass?",
              explanation: "'lane'是车道/通道，不是'road'；'use'比'go'更准确。",
            },
            formalityVariants: {
              casual: "Which lane for EZ-Pass?",
              standard: "There are so many lanes at this toll plaza. Which one do I use if I have EZ-Pass?",
              formal: "I notice there are numerous lanes at this toll plaza. Could you direct me to the appropriate lane for EZ-Pass users?",
            },
          },
          {
            speaker: "them",
            role: "同行乘客",
            textEn: "Look for the purple signs that say 'EZ-Pass Only.' Those are the express lanes — you can drive through at 15 mph without stopping. Don't go in the cash lanes by accident.",
            textZh: "找写着'EZ-Pass Only'的紫色标牌。那些是快速通道——15英里/时通过，不用停。别误入现金通道。",
            keyPhrases: [
              { en: "express lanes", zh: "快速通道" },
              { en: "without stopping", zh: "不用停车" },
            ],
            alternativeExpressions: [
              {
                textEn: "See the purple 'EZ-Pass Only' signs? Head for those. You cruise through at 15 mph, no need to stop. Avoid the cash lanes.",
                textZh: "看到紫色'EZ-Pass Only'标牌了吗？走那边。15英里/时通过，不用停。别走现金道。",
                actionHint: "变道到EZ-Pass通道",
                frequency: "common",
              },
            ],
            casualVersion: "See the purple EZ-Pass Only signs? Go through those at 15 mph. Don't stop. And don't end up in the cash lanes.",
            formalityVariants: {
              casual: "Purple signs — EZ-Pass Only. Cruise through at 15. Don't hit the cash lanes.",
              standard: "Look for the purple signs that say 'EZ-Pass Only.' Those are the express lanes — you can drive through at 15 mph without stopping. Don't go in the cash lanes by accident.",
              formal: "Please look for the purple signage indicating 'EZ-Pass Only.' Those designated express lanes allow you to proceed at 15 mph without stopping. Please be careful not to inadvertently enter the cash-only lanes.",
            },
          },
          {
            speaker: "you",
            textEn: "I think I just went through the wrong lane — I used the EZ-Pass lane but my transponder didn't beep. Did it read it?",
            textZh: "我好像走错道了——走了EZ-Pass通道但设备没响。读到了吗？",
            culturalNote: "有时设备不响但实际已读取成功。可以查App或网站确认。如果确实没读到，摄像头会拍车牌补扣费。",
            casualVersion: "Uh oh, went through EZ-Pass lane but didn't hear a beep. Did it register?",
            commonMistake: {
              wrong: "My EZ-Pass didn't make sound. Did the machine read?",
              correct: "My transponder didn't beep. Did it read it?",
              explanation: "'beep'比'make sound'更具体；'transponder'是EZ-Pass设备的标准称呼。",
            },
            formalityVariants: {
              casual: "It didn't beep going through. Think it read it?",
              standard: "I think I just went through the wrong lane — I used the EZ-Pass lane but my transponder didn't beep. Did it read it?",
              formal: "I'm concerned that my transponder may not have been detected — it did not produce the usual confirmation tone. Would you know if the toll was successfully registered?",
            },
          },
          {
            speaker: "them",
            role: "同行乘客",
            textEn: "It might still have read it — sometimes the beep is hard to hear. Check your EZ-Pass account online when you get home. If it didn't register, they'll take a photo of your plate and bill your account.",
            textZh: "可能还是读到了——有时候声音听不到。回家后在网上查一下EZ-Pass账户。如果没读到，会拍车牌然后从账户扣费。",
            keyPhrases: [
              { en: "check your account online", zh: "在网上查账户" },
              { en: "bill your account", zh: "从账户扣费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Don't worry — it probably read it. Sometimes the beep is quiet. Check your account later. If it missed, they'll snap your plate and charge your account.",
                textZh: "别担心——可能读到了。有时声音很小。稍后查账户。没读到的话会拍车牌从账户扣费。",
                actionHint: "回家后查账户",
                frequency: "common",
              },
            ],
            casualVersion: "Probably still got it — beep is quiet sometimes. Check your account later. Worst case, they snap your plate and charge your account.",
            formalityVariants: {
              casual: "Probably fine. Beep's quiet sometimes. Check your account later. If it missed, they'll photo your plate and bill you.",
              standard: "It might still have read it — sometimes the beep is hard to hear. Check your EZ-Pass account online when you get home. If it didn't register, they'll take a photo of your plate and bill your account.",
              formal: "There's a good possibility it was read successfully — the audible confirmation can sometimes be difficult to hear. I would recommend checking your EZ-Pass account online upon your return. In the event that the toll was not registered, the system will photograph your license plate and charge the toll to your account.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Is there a way to get a toll receipt for my expense report?",
            textZh: "了解了。有办法拿到过路费收据报销吗？",
            culturalNote: "EZ-Pass网站可以下载明细账单和收据，方便商务报销。也可以设置每月自动发送电子账单。",
            casualVersion: "Can I get a receipt for my expense report?",
            commonMistake: {
              wrong: "Can I get bill for reimburse?",
              correct: "Is there a way to get a toll receipt for my expense report?",
              explanation: "'toll receipt'是过路费收据；'expense report'是报销单，这些是商务场景的标准用词。",
            },
            formalityVariants: {
              casual: "Can I pull a receipt for my expense report?",
              standard: "Good to know. Is there a way to get a toll receipt for my expense report?",
              formal: "That's helpful to know. Would it be possible to obtain toll receipts for the purpose of filing an expense report?",
            },
          },
          {
            speaker: "them",
            role: "同行乘客",
            textEn: "Yeah, log into your EZ-Pass account and you can download trip statements showing every toll with the date, time, and amount. You can also set it up to email you a monthly statement.",
            textZh: "可以，登录EZ-Pass账户就能下载行程明细，显示每笔过路费的日期、时间和金额。也可以设置每月发邮件账单。",
            keyPhrases: [
              { en: "trip statements", zh: "行程明细" },
              { en: "monthly statement", zh: "月度账单" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just log in to your account — you can download detailed trip reports with dates, times, and amounts. Set up automatic monthly statements too.",
                textZh: "登录账户就行——可以下载详细行程报告，有日期、时间和金额。也能设置自动月度账单。",
                actionHint: "登录账户下载明细",
                frequency: "common",
              },
            ],
            casualVersion: "Log into your account and download trip statements. Shows every toll — date, time, amount. You can also get a monthly statement emailed to you.",
            formalityVariants: {
              casual: "Log in and download the trip info. It shows every toll. You can also set up monthly email statements.",
              standard: "Yeah, log into your EZ-Pass account and you can download trip statements showing every toll with the date, time, and amount. You can also set it up to email you a monthly statement.",
              formal: "Certainly. You can access your EZ-Pass account online and download comprehensive trip statements detailing each toll transaction, including the date, time, and amount. Additionally, you may configure automatic monthly statement delivery via email.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 坐地铁(MetroCard) ====================
  {
    id: "transport-subway-metro",
    category: "transport",
    titleZh: "坐地铁(买卡/换乘)",
    titleEn: "Subway: MetroCard & Transfers",
    description: "在美国大城市坐地铁，买MetroCard/TAP card、看路线图、问到站和转线",
    otherRole: "地铁乘客 / 工作人员",
    otherRoleIcon: "train",
    journeyPhase: "daily",
    priority: "must",
    tags: ["subway", "metro", "MetroCard", "TAP card", "transfer", "地铁", "换乘"],
    flows: [
      {
        id: "metro-card-buy",
        titleZh: "买卡与充值",
        titleEn: "Buying & Loading a Metro Card",
        description: "在自动售票机购买或充值地铁卡",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I need a MetroCard. Can I buy one from this machine?",
            textZh: "请问，我需要一张 MetroCard。可以在这台机器上买吗？",
            culturalNote: "纽约用 MetroCard（正在换成 OMNY 感应卡），洛杉矶用 TAP card，华盛顿用 SmarTrip。每个城市的交通卡名称不同，但购买方式类似。",
            casualVersion: "Hey, can I get a MetroCard from this machine?",
            commonMistake: { wrong: "I want to buy metro card. This machine can?", correct: "I need a MetroCard. Can I buy one from this machine?", explanation: "MetroCard 是专有名词，要连写。'buy one from this machine' 比 'this machine can' 更自然。" },
            formalityVariants: { casual: "Can I grab a MetroCard here?", standard: "Excuse me, I need a MetroCard. Can I buy one from this machine?", formal: "Pardon me, I would like to purchase a MetroCard. Is this machine the appropriate place to do so?" },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yep! Hit 'Get New Card' on the screen. A new card is $1, then you load however much you want. I'd put at least $10 on it — each ride is $2.90.",
            textZh: "可以！在屏幕上点'Get New Card'。新卡1美元，然后充多少随你。建议至少充10美元——每次乘车2.90美元。",
            keyPhrases: [{ en: "Get New Card", zh: "购买新卡" }, { en: "load", zh: "充值" }, { en: "each ride", zh: "每次乘车" }],
            alternativeExpressions: [{ textEn: "Yeah, press 'Start' then 'New Card.' Card's a buck, then add money. Each swipe is $2.90.", textZh: "按'Start'再按'New Card'。卡1美元，然后加钱。每刷一次2.90美元。", actionHint: "按屏幕操作", frequency: "common" }],
            casualVersion: "Yeah! Hit 'Get New Card.' Buck for the card, then load up. Rides are $2.90 each.",
            formalityVariants: { casual: "Yeah, hit New Card. Buck for the card, load it up. $2.90 a ride.", standard: "Yep! Hit 'Get New Card' on the screen. A new card is $1, then you load however much you want. Each ride is $2.90.", formal: "Yes, you may select 'Get New Card' on the display. The card itself costs $1, after which you may add any amount you wish. The current fare per ride is $2.90." },
          },
          {
            speaker: "you",
            textEn: "Does the machine take cash or just cards? I only have a $20 bill.",
            textZh: "机器收现金还是只刷卡？我只有一张20美元。",
            casualVersion: "Cash or card only? I've got a twenty.",
            commonMistake: { wrong: "Can I use money or only credit card? I have 20 dollar.", correct: "Does the machine take cash or just cards? I only have a $20 bill.", explanation: "'take cash' 是接受现金的标准说法。$20 bill 是20美元纸币。" },
            formalityVariants: { casual: "Does it take cash? Got a twenty.", standard: "Does the machine take cash or just cards? I only have a $20 bill.", formal: "Does this machine accept cash payments? I only have a $20 bill at the moment." },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "It takes both, but heads up — it only gives change in coins. So if you put in $20 and load $10, you'll get $9 back in quarters. Kind of annoying.",
            textZh: "都可以，但注意——找零只给硬币。如果你放20美元充10美元，会找回9美元的25美分硬币。有点烦人。",
            keyPhrases: [{ en: "gives change in coins", zh: "找零用硬币" }, { en: "quarters", zh: "25美分硬币" }],
            culturalNote: "纽约地铁售票机收现金但只找硬币（quarters），所以尽量用刷卡或准备零钱。这是很多游客的吐槽点。",
            alternativeExpressions: [{ textEn: "Cash works but the change comes back as quarters. Like, a lot of quarters. Most people just use a debit card.", textZh: "现金可以，但找零全是25美分硬币。很多硬币。大多数人直接刷借记卡。", actionHint: "考虑刷卡", frequency: "common" }],
            casualVersion: "Both, but change is all quarters. $20 in, load $10, you get nine bucks in quarters. Kinda annoying.",
            formalityVariants: { casual: "Both work. But change? All quarters. Pretty annoying.", standard: "It takes both, but heads up — it only gives change in coins. So if you put in $20 and load $10, you'll get $9 back in quarters.", formal: "The machine accepts both cash and cards. However, please be aware that change is dispensed exclusively in coins. Loading $10 from a $20 bill would result in $9 returned as quarters." },
          },
          {
            speaker: "you",
            textEn: "Good to know — I'll just use my debit card then. Thanks! One more thing — can I use this same card on the bus too?",
            textZh: "好的——那我直接刷借记卡吧。谢谢！再问一下——这张卡坐公交也能用吗？",
            casualVersion: "I'll just use my card then. And does this work on buses too?",
            formalityVariants: { casual: "Card it is. Works on buses too?", standard: "I'll just use my debit card then. Can I use this same card on the bus too?", formal: "I shall use my debit card in that case. Might I also use this card on the bus system?" },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yeah, same MetroCard works on buses and subways. And you get a free transfer within two hours — subway to bus or bus to bus. Just swipe and it won't charge you again.",
            textZh: "可以，MetroCard 地铁和公交都能用。而且两小时内免费换乘——地铁转公交或公交转公交。刷一下就行，不会再扣钱。",
            keyPhrases: [{ en: "free transfer", zh: "免费换乘" }, { en: "within two hours", zh: "两小时内" }],
            alternativeExpressions: [{ textEn: "Same card, buses and subways. Plus free transfers within 2 hours. Subway to bus is free — just swipe.", textZh: "同一张卡，公交地铁通用。两小时内免费换乘。地铁转公交免费——刷卡就行。", actionHint: "利用免费换乘", frequency: "common" }],
            casualVersion: "Yep, same card. Buses and subways. Free transfer within 2 hours — just swipe.",
            formalityVariants: { casual: "Same card, buses and subway. Free transfers for 2 hours.", standard: "Yeah, same MetroCard works on buses and subways. You get a free transfer within two hours.", formal: "Indeed, the MetroCard is accepted on both the bus and subway systems. Additionally, complimentary transfers are available within a two-hour window — from subway to bus or bus to bus." },
          },
        ],
      },
      {
        id: "metro-transfer",
        titleZh: "看图与换乘",
        titleEn: "Reading the Map & Transferring",
        description: "看地铁路线图、问到站、找对站台换乘",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm trying to get to Times Square. I'm on the Blue line — do I need to transfer?",
            textZh: "请问，我要去时代广场。我在蓝线上——需要换乘吗？",
            casualVersion: "Hey, trying to get to Times Square. Do I need to transfer from this line?",
            commonMistake: { wrong: "I want to go Time Square. I am in Blue line. Do I change train?", correct: "I'm trying to get to Times Square. I'm on the Blue line — do I need to transfer?", explanation: "transfer 是换乘的标准说法。Times Square 有 s。'I'm on the Blue line' 是正确的介词用法。" },
            formalityVariants: { casual: "Times Square — do I transfer from here?", standard: "I'm trying to get to Times Square. I'm on the Blue line — do I need to transfer?", formal: "I'm attempting to reach Times Square. I'm currently on the Blue line — would a transfer be necessary?" },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Yeah, you'll need to transfer at Downtown Crossing. Take this train three more stops, get off, and follow the signs for the Red line going northbound. Times Square is four stops from there.",
            textZh: "是的，你需要在 Downtown Crossing 换乘。坐这趟车再坐三站，下车后跟着 Red line 北行方向的指示牌走。时代广场再坐四站。",
            keyPhrases: [{ en: "transfer at", zh: "在...换乘" }, { en: "northbound", zh: "北行方向" }, { en: "follow the signs", zh: "跟着指示牌走" }],
            alternativeExpressions: [{ textEn: "You need to switch at Downtown Crossing — 3 stops from here. Then catch the Red line north. Times Square is 4 stops on that line.", textZh: "在 Downtown Crossing 换——从这里3站。然后坐红线北行。时代广场在那条线上再4站。", actionHint: "记住换乘站", frequency: "common" }],
            casualVersion: "Yeah, transfer at Downtown Crossing. Three stops, get off, follow signs for the Red line north. Four more stops.",
            formalityVariants: { casual: "Transfer at Downtown Crossing. 3 stops, Red line north, 4 more stops.", standard: "You'll need to transfer at Downtown Crossing. Three more stops on this train, then follow signs for the Red line northbound. Times Square is four stops from there.", formal: "You will need to transfer at Downtown Crossing station. Proceed three stops on this train, alight, and follow the signage for the northbound Red line. Times Square is four stops along that route." },
          },
          {
            speaker: "you",
            textEn: "When I transfer, do I need to pay again or is it the same fare?",
            textZh: "换乘的时候需要再付一次钱吗，还是同一个票价？",
            casualVersion: "Do I pay again when I transfer?",
            commonMistake: { wrong: "When change train, I pay again?", correct: "When I transfer, do I need to pay again?", explanation: "transfer 比 change train 更地道。完整的疑问句结构更清晰。" },
            formalityVariants: { casual: "Transfer costs extra?", standard: "When I transfer, do I need to pay again or is it the same fare?", formal: "Upon transferring, will an additional fare be required, or is the transfer included in the original fare?" },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "Subway-to-subway transfers are free — just follow the transfer corridors inside the station. Don't exit through the turnstiles or you'll have to pay again.",
            textZh: "地铁转地铁免费——走站内的换乘通道就行。别出闸机，不然要重新付费。",
            keyPhrases: [{ en: "transfer corridors", zh: "换乘通道" }, { en: "turnstiles", zh: "闸机" }],
            culturalNote: "在美国地铁系统中，站内换乘通常免费，但如果走出闸机（turnstile）到了站外，再进站就要重新刷卡扣费。一定要走站内通道。",
            alternativeExpressions: [{ textEn: "Free transfer inside the station — just don't go through the exit turnstile. Follow the 'Transfer' signs and you'll stay inside the system.", textZh: "站内换乘免费——别走出口闸机。跟着'Transfer'指示牌走就不会出站。", actionHint: "走站内通道", frequency: "common" }],
            casualVersion: "Subway transfers are free. Just stay inside — don't go through the turnstiles or you'll get charged again.",
            formalityVariants: { casual: "Free. Just don't exit the turnstiles.", standard: "Subway-to-subway transfers are free — just follow the transfer corridors. Don't exit through the turnstiles or you'll have to pay again.", formal: "Transfers between subway lines within the station are complimentary. Simply follow the designated transfer corridors. Please avoid exiting through the turnstiles, as re-entry would require an additional fare." },
          },
          {
            speaker: "you",
            textEn: "Got it. How will I know when my stop is coming up? Is there an announcement?",
            textZh: "明白了。怎么知道快到站了？有广播吗？",
            casualVersion: "How do I know when my stop's coming?",
            formalityVariants: { casual: "How'll I know my stop?", standard: "How will I know when my stop is coming up? Is there an announcement?", formal: "How will I be informed when my stop is approaching? Are there station announcements?" },
          },
          {
            speaker: "them",
            role: "乘客",
            textEn: "There's usually a digital display and an automated announcement. But honestly, the announcements can be hard to hear. I'd count the stops on the map and watch for the station name on the platform signs.",
            textZh: "通常有电子屏和自动广播。不过说实话，广播有时听不清。我建议在地图上数站数，然后看站台上的站名牌。",
            keyPhrases: [{ en: "digital display", zh: "电子显示屏" }, { en: "platform signs", zh: "站台标志" }, { en: "count the stops", zh: "数站数" }],
            alternativeExpressions: [{ textEn: "Announcements and a screen, but they're not always clear. Best bet — count stops on the map and read the signs on the platform as the train pulls in.", textZh: "有广播和屏幕，但不一定清楚。最靠谱的方法——在地图上数站，火车进站时看站台标志。", actionHint: "数站数最可靠", frequency: "common" }],
            casualVersion: "Digital display and announcements, but they can be hard to hear. Count the stops on the map — that's the safest bet.",
            formalityVariants: { casual: "There's announcements but they're hard to hear. Count stops on the map.", standard: "There's a digital display and automated announcement, but they can be hard to hear. Count the stops on the map and watch for platform signs.", formal: "The train is equipped with digital displays and automated announcements, though audio clarity can be inconsistent. I would recommend tracking your progress on the route map and observing the station name signage on the platform as the train arrives." },
          },
        ],
      },
    ],
  },

  // ==================== 坐公交(本地路线) ====================
  {
    id: "transport-city-bus-local",
    category: "transport",
    titleZh: "坐公交(本地路线)",
    titleEn: "Local Bus Ride",
    description: "在美国坐本地公交车，投币/刷卡、拉绳下车、问路线",
    otherRole: "公交司机 / 乘客",
    otherRoleIcon: "bus",
    journeyPhase: "daily",
    priority: "likely",
    tags: ["city bus", "公交", "local bus", "pull the cord", "bus route", "bus stop"],
    flows: [
      {
        id: "bus-boarding-pay",
        titleZh: "上车付款与问路",
        titleEn: "Boarding, Paying & Asking the Route",
        description: "上公交、投币或刷卡、问司机路线",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, does this bus go near the convention center? I'm not sure which stop to get off at.",
            textZh: "你好，这趟车经过会展中心附近吗？我不知道在哪站下车。",
            casualVersion: "Hey, does this go near the convention center? Which stop do I get off?",
            commonMistake: { wrong: "This bus go convention center? Which station I get off?", correct: "Does this bus go near the convention center? Which stop do I get off at?", explanation: "'go near' 表示经过附近。公交用 stop 不用 station。'get off at' 是下车的标准说法。" },
            formalityVariants: { casual: "Does this go by the convention center? Where do I get off?", standard: "Does this bus go near the convention center? I'm not sure which stop to get off at.", formal: "Excuse me, does this bus route pass near the convention center? I'm uncertain which stop I should disembark at." },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, I pass right by it. It's about 12 stops from here — I'll call it out for you. Fare's $2.00, exact change only, or tap your card.",
            textZh: "是的，正好经过。从这里大约12站——到的时候我会提醒你。票价2美元，投币需要自备零钱，或者刷卡。",
            keyPhrases: [{ en: "exact change only", zh: "需要自备零钱（不找零）" }, { en: "call it out", zh: "喊出来/提醒" }, { en: "tap your card", zh: "刷卡" }],
            culturalNote: "美国大部分城市的公交不找零（exact change），所以一定要准备好零钱。越来越多城市支持手机支付或交通卡。",
            alternativeExpressions: [{ textEn: "Yep, convention center is on this route. I'll let you know when we get there. Two dollars — coins or card.", textZh: "对，会展中心在这条线上。到的时候我告诉你。两美元——投币或刷卡。", actionHint: "准备付款", frequency: "common" }],
            casualVersion: "Yep, I go right by it. About 12 stops. I'll holler when we're there. Two bucks, exact change or tap.",
            formalityVariants: { casual: "Yeah, right past it. I'll holler. Two bucks, exact change or card.", standard: "Yes, I pass right by it. It's about 12 stops. Fare's $2.00, exact change only, or tap your card.", formal: "Yes, the convention center is along this route, approximately 12 stops from here. I will announce the stop for you. The fare is $2.00 — exact change is required, or you may use a contactless card." },
          },
          {
            speaker: "you",
            textEn: "I only have a $5 bill. Does the machine give change?",
            textZh: "我只有5美元纸币。机器找零吗？",
            casualVersion: "Only got a five. Does it make change?",
            commonMistake: { wrong: "I have five dollar only. Can machine give back money?", correct: "I only have a $5 bill. Does the machine give change?", explanation: "'give change' 是找零的标准说法。'$5 bill' 是5美元纸币。" },
            formalityVariants: { casual: "Got a five — does it give change?", standard: "I only have a $5 bill. Does the machine give change?", formal: "Unfortunately, I only have a $5 bill. Does the fare machine provide change?" },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "No, sorry — it doesn't give change. But you can tap your phone if you have Apple Pay or Google Pay. Or download the transit app — you can buy a day pass for $5 on there.",
            textZh: "不行，抱歉——不找零。不过你可以用手机刷 Apple Pay 或 Google Pay。或者下载公交 App——上面5美元可以买日票。",
            keyPhrases: [{ en: "doesn't give change", zh: "不找零" }, { en: "day pass", zh: "日票" }, { en: "transit app", zh: "公交App" }],
            alternativeExpressions: [{ textEn: "Sorry, no change. But Apple Pay works. Or grab the transit app — a day pass is 5 bucks and you can ride all day.", textZh: "不好意思，不找零。Apple Pay 可以用。或者下载公交App——日票5美元随便坐。", actionHint: "用手机支付", frequency: "common" }],
            casualVersion: "Nope, no change. Apple Pay or Google Pay works though. Or get the transit app — day pass is 5 bucks.",
            formalityVariants: { casual: "No change. Use your phone — Apple Pay or the transit app. Day pass is 5 bucks.", standard: "No, sorry — it doesn't give change. But you can tap your phone or buy a day pass on the transit app for $5.", formal: "I'm afraid the machine does not dispense change. However, you may use Apple Pay or Google Pay via your phone. Alternatively, the transit application offers a day pass for $5, which provides unlimited rides." },
          },
          {
            speaker: "you",
            textEn: "OK, I'll use Apple Pay. And how do I signal that I want to get off? I've heard you pull a cord?",
            textZh: "好的，我用 Apple Pay。那怎么示意要下车？听说要拉一根绳子？",
            culturalNote: "美国公交车上有一根黄色的绳子（pull cord）或按钮条（stop request strip），拉一下或按一下会响铃通知司机下一站停车。看到 'Stop Requested' 亮灯就说明有人要下了。",
            casualVersion: "Apple Pay it is. And how do I tell the driver I wanna get off? Pull a cord or something?",
            commonMistake: { wrong: "How to tell driver I want to go down? I heard pull the rope?", correct: "How do I signal that I want to get off? I've heard you pull a cord.", explanation: "'get off' 是下车，不是 'go down'。pull a cord 是拉铃绳。signal 是示意。" },
            formalityVariants: { casual: "How do I let you know I wanna get off? Pull the cord thing?", standard: "How do I signal that I want to get off? I've heard you pull a cord?", formal: "How does one indicate a desire to disembark? I understand there is a cord to pull?" },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Exactly! See that yellow cord running along the windows? Give it a pull one stop before yours, and the 'Stop Requested' sign will light up. I'll pull over at the next stop. Exit through the back door.",
            textZh: "没错！看到沿窗户那根黄色绳子了吗？在你要下的前一站拉一下，'Stop Requested' 指示灯会亮。我会在下一站停车。从后门下。",
            keyPhrases: [{ en: "pull cord", zh: "拉铃绳" }, { en: "Stop Requested", zh: "已请求停车" }, { en: "exit through the back door", zh: "从后门下车" }],
            alternativeExpressions: [{ textEn: "Yellow cord along the windows — pull it one stop early. You'll see 'Stop Requested' light up. Use the back door to exit.", textZh: "窗户边的黄色绳子——提前一站拉。看到'Stop Requested'亮了就行。从后门下。", actionHint: "提前一站拉绳", frequency: "common" }],
            casualVersion: "Yeah, yellow cord by the windows. Pull it a stop early. 'Stop Requested' lights up. Hop out the back door.",
            formalityVariants: { casual: "Yellow cord, pull it, back door. Easy.", standard: "See the yellow cord along the windows? Pull it one stop before yours. 'Stop Requested' will light up. Exit through the back door.", formal: "You will notice a yellow cord running along the window line. Please pull it approximately one stop before your destination. The 'Stop Requested' indicator will illuminate, and I will stop at the next designated stop. Kindly exit through the rear door." },
          },
        ],
      },
      {
        id: "bus-route-help",
        titleZh: "问路线与换乘",
        titleEn: "Asking About Routes & Connections",
        description: "问司机或乘客公交路线、换乘和时刻表",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, does this bus connect to the number 45 at the transit center? I need to get to the university.",
            textZh: "请问，这趟车在公交枢纽能转45路吗？我要去大学。",
            casualVersion: "Hey, can I catch the 45 at the transit center from this bus? Need to get to the university.",
            commonMistake: { wrong: "This bus can change to 45 bus at transit center? I go to university.", correct: "Does this bus connect to the number 45 at the transit center?", explanation: "'connect to' 是公交换乘的标准表达。'the number 45' 是某路公交的说法。" },
            formalityVariants: { casual: "Does this connect to the 45? I need the university.", standard: "Does this bus connect to the number 45 at the transit center? I need to get to the university.", formal: "Does this bus service connect with the number 45 route at the transit center? My destination is the university." },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "Yes, but the 45 only runs every 30 minutes. We'll get to the transit center around 3:15 — the next 45 should be at 3:30. Check the schedule on the shelter when you get there.",
            textZh: "可以，但45路每30分钟一班。我们大约3:15到公交枢纽——下一班45路应该3:30。到了之后看候车亭的时刻表。",
            keyPhrases: [{ en: "runs every 30 minutes", zh: "每30分钟一班" }, { en: "schedule on the shelter", zh: "候车亭上的时刻表" }],
            alternativeExpressions: [{ textEn: "Yeah, the 45 connects at the transit center. It's every half hour though. We should get there by 3:15, so you'll catch the 3:30.", textZh: "对，45路在公交枢纽可以转。不过半小时一班。我们应该3:15到，你可以赶上3:30那班。", actionHint: "查看时刻表", frequency: "common" }],
            casualVersion: "Yeah, but the 45 runs every 30 min. We'll be there around 3:15 — next 45 is at 3:30. Check the shelter schedule.",
            formalityVariants: { casual: "Yeah, 45 connects. Every 30 min though. Should catch the 3:30.", standard: "Yes, but the 45 only runs every 30 minutes. We'll get to the transit center around 3:15 — the next 45 should be at 3:30.", formal: "Yes, the number 45 does connect at the transit center. However, it operates on a 30-minute frequency. We should arrive at approximately 3:15, and the subsequent 45 is scheduled for 3:30. I recommend verifying the timetable at the shelter." },
          },
          {
            speaker: "you",
            textEn: "Is there a faster route? I have a meeting at 4:00 and I'm worried about making it on time.",
            textZh: "有更快的路线吗？我4点有个会，怕赶不上。",
            casualVersion: "Anything faster? Got a meeting at 4.",
            formalityVariants: { casual: "Faster way? Meeting at 4.", standard: "Is there a faster route? I have a meeting at 4:00 and I'm worried about making it on time.", formal: "Is there perhaps a more expedient route? I have an appointment at 4:00 and I'm concerned about arriving punctually." },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "You could get off at Washington Street — that's 6 stops — and grab the express 12. It goes straight to the university with no stops in between. Runs every 15 minutes.",
            textZh: "你可以在华盛顿街下——6站——然后坐12路快线。直达大学中间不停。每15分钟一班。",
            keyPhrases: [{ en: "express", zh: "快线/直达" }, { en: "no stops in between", zh: "中间不停" }],
            alternativeExpressions: [{ textEn: "Try the express 12 from Washington Street. Six stops from here. It goes direct to the university — no stops. Every 15 minutes.", textZh: "试试华盛顿街的12路快线。从这里6站。直达大学——不停站。每15分钟一班。", actionHint: "换快线", frequency: "common" }],
            casualVersion: "Get off at Washington — 6 stops — and catch the express 12. Goes straight to the university, every 15 min.",
            formalityVariants: { casual: "Hop off at Washington, grab the express 12. Straight to the university, 15 min apart.", standard: "You could get off at Washington Street — 6 stops — and grab the express 12. It goes straight to the university with no stops.", formal: "You might consider alighting at Washington Street — that is 6 stops hence — and boarding the express 12 route. It proceeds directly to the university without intermediate stops and operates every 15 minutes." },
          },
          {
            speaker: "you",
            textEn: "That sounds much better. Will the driver on the express give me a free transfer if I show my receipt?",
            textZh: "那好多了。坐快线的时候出示收据可以免费换乘吗？",
            casualVersion: "Way better. Free transfer with a receipt?",
            commonMistake: { wrong: "Can I free change to express bus with ticket?", correct: "Will the driver give me a free transfer if I show my receipt?", explanation: "free transfer 是免费换乘。receipt 是付款凭证。show 比 give 更合适。" },
            formalityVariants: { casual: "Free transfer with my receipt?", standard: "Will the driver on the express give me a free transfer if I show my receipt?", formal: "Will the express bus driver honor a free transfer if I present my fare receipt?" },
          },
          {
            speaker: "them",
            role: "司机",
            textEn: "If you paid with a transit card or phone, the transfer is automatic — it won't charge you within 2 hours. If you paid cash, ask me for a paper transfer slip before you get off. Hand it to the next driver.",
            textZh: "如果你用交通卡或手机付的，换乘是自动的——两小时内不会再扣钱。如果用现金付的，下车前找我要一张纸质换乘票。交给下一个司机就行。",
            keyPhrases: [{ en: "automatic transfer", zh: "自动换乘" }, { en: "paper transfer slip", zh: "纸质换乘票" }],
            culturalNote: "美国公交换乘政策因城市而异。刷卡通常自动免费换乘；现金需要向司机索要 transfer slip（换乘票），在规定时间内有效。",
            alternativeExpressions: [{ textEn: "Card or phone — transfer's automatic, no extra charge for 2 hours. Cash — ask me for a transfer slip. Give it to the next driver.", textZh: "卡或手机——自动换乘，两小时内免费。现金——找我要换乘票。交给下个司机。", actionHint: "记得要换乘票", frequency: "common" }],
            casualVersion: "Card or phone? Transfer's automatic. Cash? Ask me for a transfer slip before you get off.",
            formalityVariants: { casual: "Card: automatic. Cash: grab a transfer slip from me.", standard: "Transit card or phone — automatic, no charge within 2 hours. Cash — ask me for a paper transfer slip before you get off.", formal: "If you have paid via transit card or mobile device, the transfer will be processed automatically at no additional charge within a two-hour window. For cash payments, please request a paper transfer slip from me before disembarking and present it to the next driver." },
          },
        ],
      },
    ],
  },

  // ==================== 坐火车(Amtrak) ====================
  {
    id: "transport-train-amtrak",
    category: "transport",
    titleZh: "坐火车(Amtrak)",
    titleEn: "Riding Amtrak",
    description: "在美国坐 Amtrak 火车，买票选座、车厢服务和到站广播",
    otherRole: "列车员 / 同车乘客",
    otherRoleIcon: "train",
    journeyPhase: "transit",
    priority: "likely",
    tags: ["Amtrak", "train", "火车", "quiet car", "cafe car", "长途火车"],
    flows: [
      {
        id: "amtrak-ticket",
        titleZh: "买票选座",
        titleEn: "Buying Tickets & Choosing Seats",
        description: "购买 Amtrak 车票、选座位类型和安静车厢",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like a ticket from Boston to New York on the 3 p.m. train. What are my seat options?",
            textZh: "你好，我想买一张波士顿到纽约下午3点火车的票。座位有什么选择？",
            casualVersion: "Hey, one ticket Boston to New York, 3 p.m. train. What seats do you have?",
            commonMistake: { wrong: "I want ticket from Boston to New York, afternoon 3 o'clock. What kind of seat?", correct: "I'd like a ticket from Boston to New York on the 3 p.m. train. What are my seat options?", explanation: "'the 3 p.m. train' 是指定班次的说法。'seat options' 是座位选择。" },
            formalityVariants: { casual: "Boston to New York, 3 p.m. What seats you got?", standard: "I'd like a ticket from Boston to New York on the 3 p.m. train. What are my seat options?", formal: "Good afternoon, I would like to purchase a ticket from Boston to New York on the 3 p.m. departure. Could you outline the available seating options?" },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "The 3 p.m. is the Northeast Regional. Coach is $49 and Business Class is $79. Business gets you wider seats, more legroom, and a power outlet at every seat. There's also the Acela Express at 3:30 for $120 if you want the fastest option.",
            textZh: "3点是东北区域线。经济座49美元，商务座79美元。商务座更宽、腿部空间更大、每个座位有电源插座。还有3:30的 Acela 特快120美元，如果你想最快的话。",
            keyPhrases: [{ en: "Coach", zh: "经济座" }, { en: "Business Class", zh: "商务座" }, { en: "legroom", zh: "腿部空间" }, { en: "power outlet", zh: "电源插座" }],
            culturalNote: "Amtrak 的 Northeast Regional 是东海岸最常见的线路。Acela Express 是快车但贵很多。Coach 相当于经济座，不需要对号入座（先到先坐）。",
            alternativeExpressions: [{ textEn: "3 p.m. Northeast Regional — Coach $49, Business $79. Business has bigger seats and outlets. Or the Acela at 3:30 for $120 — fastest but priciest.", textZh: "3点东北区域线——经济49，商务79。商务座位大有插座。3:30还有Acela特快120——最快但最贵。", actionHint: "根据预算选择", frequency: "common" }],
            casualVersion: "3 p.m. Regional. Coach is 49 bucks, Business is 79. Business has better seats and outlets. Or Acela at 3:30 for 120.",
            formalityVariants: { casual: "Regional at 3. Coach 49, Business 79. Acela at 3:30 for 120 if you want speed.", standard: "The 3 p.m. Northeast Regional has Coach at $49 and Business Class at $79. The Acela Express at 3:30 is $120.", formal: "The 3 p.m. service is the Northeast Regional, offering Coach class at $49 and Business Class at $79, which includes wider seating, additional legroom, and individual power outlets. The Acela Express departs at 3:30 for $120, providing the fastest service." },
          },
          {
            speaker: "you",
            textEn: "I'll take Coach on the 3 p.m. Is there a quiet car? I need to get some work done.",
            textZh: "我买3点的经济座。有安静车厢吗？我需要工作。",
            culturalNote: "Amtrak 的 Quiet Car 是真的安静——不能打电话、不能大声说话、电子设备必须静音。违反规则的乘客会被列车员提醒。",
            casualVersion: "Coach, 3 p.m. Got a quiet car? Need to work.",
            commonMistake: { wrong: "I choose economy ticket. Is there silent room? I need to do work.", correct: "I'll take Coach on the 3 p.m. Is there a quiet car?", explanation: "Coach 是 Amtrak 经济座的专有名称。quiet car 是安静车厢，不是 silent room。" },
            formalityVariants: { casual: "Coach, 3 p.m. Quiet car available?", standard: "I'll take Coach on the 3 p.m. Is there a quiet car? I need to get some work done.", formal: "I will take a Coach seat on the 3 p.m. departure, please. Is a Quiet Car available? I have some work to attend to during the journey." },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Yes! Car 3 is the designated Quiet Car — no phone calls, conversations kept to a whisper, and all devices on silent. It's first-come-first-served seating, so board early to get a good spot.",
            textZh: "有！3号车厢是指定安静车厢——不能打电话、说话要轻声、所有设备静音。座位先到先得，所以早点上车抢好位子。",
            keyPhrases: [{ en: "Quiet Car", zh: "安静车厢" }, { en: "first-come-first-served", zh: "先到先得" }, { en: "kept to a whisper", zh: "轻声说话" }],
            alternativeExpressions: [{ textEn: "Car 3 is Quiet Car — no talking on phones, devices silent. Seats aren't assigned, so get on early for a window seat.", textZh: "3号车是安静车厢——不能用手机通话，设备静音。不对号入座，早上车能抢到靠窗位。", actionHint: "早点排队上车", frequency: "common" }],
            casualVersion: "Yeah, car 3 is the Quiet Car. No phone calls, everything on silent. First come first served — board early.",
            formalityVariants: { casual: "Car 3 — Quiet Car. No phones, silent everything. Get on early.", standard: "Yes, car 3 is the Quiet Car. No phone calls, whisper only, devices on silent. First-come-first-served seating.", formal: "Indeed, car 3 is designated as the Quiet Car. Regulations require that phone calls be refrained from, conversations be conducted in hushed tones, and all electronic devices be silenced. Seating is on a first-come-first-served basis, so I recommend boarding early." },
          },
          {
            speaker: "you",
            textEn: "Perfect. Is there Wi-Fi on the train? And can I bring food on board?",
            textZh: "太好了。车上有 Wi-Fi 吗？可以带吃的上车吗？",
            casualVersion: "Nice. Wi-Fi? And can I bring snacks?",
            formalityVariants: { casual: "Wi-Fi? And can I bring food?", standard: "Is there Wi-Fi on the train? And can I bring food on board?", formal: "Does the train offer Wi-Fi connectivity? And is one permitted to bring food aboard?" },
          },
          {
            speaker: "them",
            role: "售票员",
            textEn: "Free Wi-Fi on all trains, though it can be spotty in rural areas. And yes, you can bring your own food. There's also a Cafe Car in the middle of the train — they sell sandwiches, drinks, and snacks.",
            textZh: "所有列车都有免费 Wi-Fi，不过在偏远地区信号可能不稳定。可以自带食物。车中间还有餐车（Cafe Car）——卖三明治、饮料和零食。",
            keyPhrases: [{ en: "spotty", zh: "信号不稳定" }, { en: "Cafe Car", zh: "餐车" }, { en: "bring your own food", zh: "自带食物" }],
            alternativeExpressions: [{ textEn: "Wi-Fi's free but don't expect perfect signal the whole ride. BYO food is fine, and there's a Cafe Car with snacks and drinks.", textZh: "Wi-Fi 免费但别指望全程信号好。可以自带食物，也有餐车卖零食和饮料。", actionHint: "考虑去餐车", frequency: "common" }],
            casualVersion: "Free Wi-Fi, kinda spotty sometimes. Bring whatever food you want. Plus there's a Cafe Car with sandwiches and drinks.",
            formalityVariants: { casual: "Free Wi-Fi, spotty though. Bring food. Cafe Car in the middle.", standard: "Free Wi-Fi on all trains, though it can be spotty. You can bring your own food, and there's a Cafe Car with sandwiches and drinks.", formal: "Complimentary Wi-Fi is available on all services, though connectivity may be intermittent in rural areas. You are welcome to bring your own refreshments. Additionally, a Cafe Car is located in the center of the train, offering sandwiches, beverages, and snacks for purchase." },
          },
        ],
      },
      {
        id: "amtrak-onboard",
        titleZh: "车上服务与到站",
        titleEn: "On-Board Service & Arriving",
        description: "车上找列车员、去餐车、听到站广播",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this seat taken? I couldn't find a spot in the Quiet Car.",
            textZh: "请问，这个座位有人吗？安静车厢没找到位子。",
            casualVersion: "Hey, anyone sitting here? Quiet Car was full.",
            commonMistake: { wrong: "This seat have people? Silent car is full.", correct: "Is this seat taken? I couldn't find a spot in the Quiet Car.", explanation: "'Is this seat taken' 是问座位是否有人的地道说法。spot 是位子。" },
            formalityVariants: { casual: "Seat taken? Quiet Car's packed.", standard: "Is this seat taken? I couldn't find a spot in the Quiet Car.", formal: "Pardon me, is this seat occupied? I was unable to secure a place in the Quiet Car." },
          },
          {
            speaker: "them",
            role: "同车乘客",
            textEn: "It's all yours! Fair warning — I'm getting off at Stamford in about an hour, so someone else might sit here after. The Cafe Car's in car 5 if you need anything.",
            textZh: "随便坐！提醒一下——我大约一小时后在斯坦福德下车，之后可能有人坐这。餐车在5号车厢，需要什么可以去那边。",
            keyPhrases: [{ en: "it's all yours", zh: "随便坐/给你了" }, { en: "fair warning", zh: "提醒一下" }],
            alternativeExpressions: [{ textEn: "Go ahead! I'm off at Stamford in an hour. Cafe Car is in car 5 — decent coffee and snacks.", textZh: "请坐！我一小时后在斯坦福德下。餐车在5号车厢——咖啡和零食还不错。", actionHint: "找到座位了", frequency: "common" }],
            casualVersion: "All yours! I'm getting off at Stamford in an hour. Cafe's in car 5.",
            formalityVariants: { casual: "Take it! I'm off at Stamford. Cafe's car 5.", standard: "It's all yours! I'm getting off at Stamford in about an hour. Cafe Car's in car 5.", formal: "Please, by all means, have a seat. I shall be alighting at Stamford in approximately one hour, so the seat may become available again thereafter. The Cafe Car is located in car 5 should you need refreshments." },
          },
          {
            speaker: "you",
            textEn: "Thanks! How will I know when we're getting close to New York? I'm worried about missing my stop.",
            textZh: "谢谢！怎么知道快到纽约了？我怕坐过站。",
            casualVersion: "Thanks! How'll I know when we're near New York? Don't wanna miss it.",
            formalityVariants: { casual: "Thanks. How do I know when we're close?", standard: "How will I know when we're getting close to New York? I'm worried about missing my stop.", formal: "Thank you. How will I be informed of our approach to New York? I'm rather concerned about inadvertently missing my station." },
          },
          {
            speaker: "them",
            role: "同车乘客",
            textEn: "The conductor announces each stop about 5 minutes before arrival. Plus there's a scrolling display up there. New York Penn Station is the last stop on this route, so you literally can't miss it.",
            textZh: "列车员会在到站前5分钟广播。上面还有滚动显示屏。纽约宾州站是这条线的终点站，所以你不可能坐过。",
            keyPhrases: [{ en: "conductor", zh: "列车员" }, { en: "Penn Station", zh: "宾州站" }, { en: "last stop", zh: "终点站" }],
            alternativeExpressions: [{ textEn: "Conductor calls each stop 5 minutes out. And you can't miss Penn Station — it's the end of the line. Everybody gets off.", textZh: "列车员每站提前5分钟喊。宾州站你不可能坐过——终点站，所有人都要下。", actionHint: "放心坐到底", frequency: "common" }],
            casualVersion: "Conductor announces 5 min before. Plus Penn Station is the last stop — can't miss it.",
            formalityVariants: { casual: "Conductor announces stops. Penn Station's the end — you can't miss it.", standard: "The conductor announces each stop about 5 minutes before arrival. Penn Station is the last stop, so you can't miss it.", formal: "The conductor will announce each station approximately 5 minutes prior to arrival. A digital display is also available for reference. New York Penn Station is the terminal stop on this route, so there is no possibility of missing it." },
          },
          {
            speaker: "you",
            textEn: "Oh great, that's reassuring. I think I'll head to the Cafe Car. Is it okay to leave my bag here?",
            textZh: "那就放心了。我去一下餐车。行李放这里可以吗？",
            casualVersion: "Nice, can't miss it. Gonna hit the Cafe Car — cool to leave my bag?",
            commonMistake: { wrong: "I go cafe car now. Can I put bag here?", correct: "I'll head to the Cafe Car. Is it okay to leave my bag here?", explanation: "'head to' 是去某处的自然说法。'Is it okay to' 是请求许可的礼貌方式。" },
            formalityVariants: { casual: "Gonna check out the Cafe Car. Mind if I leave my bag?", standard: "I'll head to the Cafe Car. Is it okay to leave my bag here?", formal: "I believe I'll visit the Cafe Car. Would it be acceptable to leave my bag in this seat while I'm away?" },
          },
          {
            speaker: "them",
            role: "同车乘客",
            textEn: "Sure, I'll keep an eye on it. The Cafe Car usually has a decent line around now, so don't be surprised if you wait a few minutes. Their coffee's actually pretty good for train coffee.",
            textZh: "没问题，我帮你看着。餐车现在这个时间通常排队人比较多，等几分钟别意外。他们的咖啡在火车咖啡里算不错的。",
            keyPhrases: [{ en: "keep an eye on it", zh: "帮你看着" }, { en: "a decent line", zh: "排队的人不少" }],
            alternativeExpressions: [{ textEn: "Go for it — I'll watch your bag. Fair warning, the line can be long. But the coffee's surprisingly decent.", textZh: "去吧——我帮你看包。提醒一下，可能要排队。不过咖啡出人意料地不错。", actionHint: "耐心排队", frequency: "common" }],
            casualVersion: "Yeah, I'll watch it. Line might be long, heads up. Coffee's actually decent though.",
            formalityVariants: { casual: "Sure, go ahead. Might be a line. Coffee's legit though.", standard: "Sure, I'll keep an eye on it. The Cafe Car usually has a line, so expect a short wait. The coffee is actually quite good.", formal: "Of course, I shall watch over it for you. Be prepared for a queue at the Cafe Car, as this is a popular time. I must say, their coffee is surprisingly commendable for train fare." },
          },
        ],
      },
    ],
  },

  // ==================== 共享单车/电动滑板车 ====================
  {
    id: "transport-bike-scooter-rental",
    category: "transport",
    titleZh: "共享单车/电动滑板车",
    titleEn: "Bike & Scooter Rental",
    description: "租用共享单车或电动滑板车，扫码解锁、了解规则和停放",
    otherRole: "本地居民 / 客服",
    otherRoleIcon: "bike",
    journeyPhase: "daily",
    priority: "likely",
    tags: ["bike share", "scooter", "共享单车", "电动滑板车", "Citi Bike", "Lime", "Bird"],
    flows: [
      {
        id: "bike-scooter-unlock",
        titleZh: "扫码解锁骑行",
        titleEn: "Scanning & Unlocking a Ride",
        description: "用 App 扫码解锁共享单车或电动滑板车",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, I'm trying to unlock this Lime scooter but the QR code won't scan. Am I doing something wrong?",
            textZh: "你好，我在试着解锁这个 Lime 滑板车，但二维码扫不上。我是不是做错什么了？",
            culturalNote: "美国常见的共享出行品牌有 Lime（绿色滑板车/自行车）、Bird（黑色滑板车）、Citi Bike（纽约蓝色自行车）。都需要先下载 App、注册并绑定信用卡。",
            casualVersion: "This Lime scooter won't unlock — QR code's not scanning. Help?",
            commonMistake: { wrong: "I want to open this scooter but the code cannot scan. What is wrong?", correct: "I'm trying to unlock this scooter but the QR code won't scan. Am I doing something wrong?", explanation: "'unlock' 是解锁的标准动词。'won't scan' 表示扫不上。" },
            formalityVariants: { casual: "Can't scan this Lime. What am I doing wrong?", standard: "I'm trying to unlock this Lime scooter but the QR code won't scan. Am I doing something wrong?", formal: "I'm attempting to unlock this Lime scooter, but the QR code does not appear to be scanning. Might I be doing something incorrectly?" },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Try the code on the handlebar — sometimes the one on the stem is scratched up. Also make sure Bluetooth is on. The app uses both the camera and Bluetooth to connect.",
            textZh: "试试车把上的二维码——车杆上那个有时被刮花了。还有确认蓝牙开了。App 用摄像头和蓝牙同时连接的。",
            keyPhrases: [{ en: "handlebar", zh: "车把" }, { en: "stem", zh: "车杆" }, { en: "Bluetooth", zh: "蓝牙" }],
            alternativeExpressions: [{ textEn: "There's usually a second QR code on the handlebars. And turn on Bluetooth — the app needs it. Sometimes you can also type in the scooter number manually.", textZh: "车把上通常还有一个二维码。打开蓝牙——App需要。有时也可以手动输入滑板车编号。", actionHint: "检查蓝牙设置", frequency: "common" }],
            casualVersion: "Try the code on the handlebar — the other one might be scratched. And turn on Bluetooth.",
            formalityVariants: { casual: "Handlebar code. Turn on Bluetooth. Should work.", standard: "Try the QR code on the handlebar. Make sure Bluetooth is on — the app uses both camera and Bluetooth.", formal: "I would suggest trying the QR code located on the handlebar, as the one on the stem may be damaged. Additionally, please ensure your Bluetooth is enabled — the application requires both the camera and Bluetooth connectivity." },
          },
          {
            speaker: "you",
            textEn: "That worked! OK so how does pricing work? I don't want a surprise charge.",
            textZh: "好了！那收费怎么算？我不想被意外扣费。",
            casualVersion: "Got it! How much does this thing cost? Don't wanna get hit with a surprise bill.",
            commonMistake: { wrong: "It works! How much money this cost? I don't want suddenly pay a lot.", correct: "How does pricing work? I don't want a surprise charge.", explanation: "'pricing' 是收费方式。'surprise charge' 是意外收费。" },
            formalityVariants: { casual: "It worked! How much is this gonna cost me?", standard: "How does pricing work? I don't want a surprise charge.", formal: "Success! Could you explain the pricing structure? I would like to avoid any unexpected charges." },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "It's $1 to unlock and then about 35 cents per minute. So a 15-minute ride is like $6.25. End the ride in the app when you're done or it keeps charging. Don't forget to lock it properly.",
            textZh: "解锁1美元，然后大约每分钟35美分。所以骑15分钟大概6.25美元。用完在 App 里结束骑行，不然会一直扣费。别忘了锁好。",
            keyPhrases: [{ en: "unlock fee", zh: "解锁费" }, { en: "per minute", zh: "每分钟" }, { en: "end the ride", zh: "结束骑行" }],
            alternativeExpressions: [{ textEn: "Dollar to start, 35 cents a minute after that. Make sure you end the ride in the app when you park it — otherwise it keeps running.", textZh: "1美元起步，之后每分钟35美分。停好后一定在 App 里结束——不然会一直计费。", actionHint: "用完记得结束", frequency: "common" }],
            casualVersion: "Buck to start, 35 cents a minute. End the ride in the app when you're done. Otherwise it keeps charging.",
            formalityVariants: { casual: "Buck to start, 35 cents a minute. End it in the app or it keeps running.", standard: "It's $1 to unlock and about 35 cents per minute. End the ride in the app when you're done or it keeps charging.", formal: "The initial unlock fee is $1, followed by approximately 35 cents per minute of use. It is essential to conclude the ride through the application once you have finished, as charges will continue to accrue otherwise." },
          },
          {
            speaker: "you",
            textEn: "Got it. Are there any rules I should know about? Like, can I ride on the sidewalk?",
            textZh: "明白了。有什么规则我需要知道的吗？比如能在人行道上骑吗？",
            culturalNote: "大多数美国城市禁止在人行道上骑电动滑板车，必须在自行车道或马路上骑。违规可能被罚款。骑自行车通常也是走车道或自行车道。",
            casualVersion: "Any rules? Can I ride this on the sidewalk?",
            formalityVariants: { casual: "Rules? Sidewalk OK?", standard: "Are there any rules I should know about? Can I ride on the sidewalk?", formal: "Are there any regulations I should be aware of? For instance, is it permissible to ride on the sidewalk?" },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No sidewalk riding — it's illegal in most cities and you'll get a fine. Stay in the bike lane or on the street. And always park it upright by a bike rack, not blocking the sidewalk. They'll charge you an extra fee if you park in a restricted area.",
            textZh: "不能在人行道上骑——大多数城市都违法，会被罚款。走自行车道或马路。停的时候竖着停在自行车架旁边，不要挡人行道。如果停在禁停区会被额外收费。",
            keyPhrases: [{ en: "bike lane", zh: "自行车道" }, { en: "park it upright", zh: "竖着停好" }, { en: "restricted area", zh: "禁停区" }, { en: "fine", zh: "罚款" }],
            alternativeExpressions: [{ textEn: "Sidewalk is a no-go — bike lane or street only. Park by a rack, standing up, not blocking anything. Bad parking = extra fee from the app.", textZh: "人行道不行——只能走自行车道或马路。停在架子旁边，立着，别挡路。乱停 = App 额外扣费。", actionHint: "遵守规则", frequency: "common" }],
            casualVersion: "No sidewalk — illegal, you'll get fined. Bike lane or street. Park upright by a rack. Don't block the sidewalk or they charge you.",
            formalityVariants: { casual: "No sidewalk. Bike lane only. Park by a rack, upright. Bad parking = fee.", standard: "No sidewalk riding — stay in the bike lane or on the street. Park upright by a bike rack. They charge extra for parking in restricted areas.", formal: "Riding on the sidewalk is prohibited in most jurisdictions and subject to fines. Please confine your riding to designated bike lanes or the roadway. When parking, please position the vehicle upright adjacent to a bicycle rack without obstructing pedestrian pathways. Parking in restricted zones incurs an additional fee." },
          },
        ],
      },
      {
        id: "bike-scooter-problem",
        titleZh: "骑行问题与还车",
        titleEn: "Ride Issues & Returning",
        description: "骑行中遇到问题和正确停放还车",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This scooter's battery is really low — it says 8%. Will I make it to the park, about a mile away?",
            textZh: "这个滑板车电量很低——显示8%。能骑到一英里外的公园吗？",
            casualVersion: "Battery's at 8%. Think I'll make it a mile to the park?",
            commonMistake: { wrong: "The battery is very less — 8 percent. Can I arrive to park, one mile?", correct: "The battery is really low — 8%. Will I make it to the park, about a mile away?", explanation: "'really low' 比 'very less' 更自然。'make it to' 是到达某处的口语说法。" },
            formalityVariants: { casual: "8% battery. Will this thing make it a mile?", standard: "The battery is really low — 8%. Will I make it to the park, about a mile away?", formal: "The battery indicator shows only 8% remaining charge. Do you think the scooter can travel approximately one mile to the park?" },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Hmm, 8% is cutting it close. You might make it on flat ground, but if there's any uphill you'll run out. I'd swap it for another one — there's a bunch more right around the corner.",
            textZh: "嗯，8%有点悬。平路可能够，但如果有上坡就不行了。我建议换一辆——拐角那边还有好几辆。",
            keyPhrases: [{ en: "cutting it close", zh: "很悬/勉强够" }, { en: "swap it", zh: "换一辆" }, { en: "flat ground", zh: "平路" }],
            alternativeExpressions: [{ textEn: "8% for a mile? Risky. Flat ground maybe, uphill no way. Just end this ride and grab a fresh one — there's more around the corner.", textZh: "8%骑一英里？有风险。平路可能行，上坡不行。结束这次骑行，换一辆新的——拐角有更多。", actionHint: "换一辆满电的", frequency: "common" }],
            casualVersion: "8%'s risky. Flat ground maybe. I'd swap — there's more around the corner.",
            formalityVariants: { casual: "Risky. Swap for a charged one — more around the corner.", standard: "8% is cutting it close. You might make it on flat ground. I'd swap it for another one around the corner.", formal: "Eight percent is rather marginal. You might reach your destination on level terrain, but any incline would likely deplete the battery entirely. I would recommend ending this ride and selecting a fully charged vehicle — there are several more just around the corner." },
          },
          {
            speaker: "you",
            textEn: "Good idea. How do I end this ride and switch? Do I just park it here and scan a new one?",
            textZh: "好主意。怎么结束骑行换一辆？就停这里然后扫新的吗？",
            casualVersion: "Makes sense. Just park it and scan a new one?",
            formalityVariants: { casual: "Cool. Just park and scan a new one?", standard: "How do I end this ride and switch? Do I just park it here and scan a new one?", formal: "That's sound advice. How would I go about ending this ride and switching to another? May I simply park here and scan a new vehicle?" },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yeah, park it properly — kickstand down, out of the walkway — then hit 'End Ride' in the app. Take a photo if it asks you to. Then just walk to the next one and scan it.",
            textZh: "对，好好停好——放下脚撑，别挡路——然后在 App 里点'End Ride'。如果要求拍照就拍一张。然后走到下一辆扫码就行。",
            keyPhrases: [{ en: "kickstand down", zh: "放下脚撑" }, { en: "End Ride", zh: "结束骑行" }, { en: "take a photo", zh: "拍照确认" }],
            alternativeExpressions: [{ textEn: "Park it neat — kickstand, off the sidewalk. End the ride in the app, snap a pic if prompted. Then scan the next one.", textZh: "停好——脚撑放好，别在人行道上。在App结束骑行，提示拍照就拍。然后扫下一辆。", actionHint: "停好再结束", frequency: "common" }],
            casualVersion: "Park it right — kickstand, off the walkway. Hit End Ride, snap a pic. Then scan a new one.",
            formalityVariants: { casual: "Kickstand, off the walkway, End Ride, photo, scan new one. Done.", standard: "Park it properly — kickstand down, out of the walkway. Hit End Ride in the app and take a photo if prompted. Then scan a new one.", formal: "Please park the vehicle properly with the kickstand deployed, ensuring it does not obstruct the walkway. Select 'End Ride' in the application and photograph the parked vehicle if prompted. You may then proceed to the next available scooter and scan its code." },
          },
          {
            speaker: "you",
            textEn: "The app says there's a parking zone at the park entrance. Do I have to return it there, or can I leave it anywhere?",
            textZh: "App 显示公园入口有个停车区。必须停到那里，还是可以停在任何地方？",
            culturalNote: "很多城市要求共享单车/滑板车停在指定区域（parking zone/hub）。如果停在禁停区（如私人领地、建筑入口），App 会收取额外费用或无法结束骑行。",
            casualVersion: "App says there's a parking zone at the park. Do I have to use it?",
            formalityVariants: { casual: "Parking zone at the park. Must use it?", standard: "Do I have to return it to the parking zone, or can I leave it anywhere?", formal: "The application indicates a designated parking zone at the park entrance. Am I required to return the vehicle there, or is parking permitted at any location?" },
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You can end rides outside parking zones, but you might get a small fee — like a dollar. Parking zones are free to end at. My tip: always end in a zone to avoid fees, and check the app map for nearby zones before you ride.",
            textZh: "可以在停车区外结束，但可能被收一小笔费——大概一美元。在停车区结束免费。我的建议：尽量在停车区结束，骑之前看看 App 地图找附近的停车区。",
            keyPhrases: [{ en: "parking zone", zh: "停车区" }, { en: "small fee", zh: "小额费用" }, { en: "check the app map", zh: "看App地图" }],
            alternativeExpressions: [{ textEn: "Technically you can park anywhere legal, but there's usually a buck or two surcharge outside a zone. Free in zones. Pro tip — check the map before you ride so you know where to park.", textZh: "理论上合法地方都能停，但停车区外通常多收一两美元。停车区内免费。建议——骑之前看地图，知道去哪停。", actionHint: "提前规划停车点", frequency: "common" }],
            casualVersion: "You can, but there's usually a small fee outside zones. Park in a zone — free. Check the app map first.",
            formalityVariants: { casual: "Can park outside zones but there's a fee. Zones are free. Check the map.", standard: "You can end outside parking zones, but there might be a small fee. Parking zones are free. Check the app map for nearby zones.", formal: "Ending a ride outside designated parking zones is permissible, though a nominal surcharge — typically around one dollar — may apply. Concluding your ride within a parking zone incurs no additional fee. I would recommend consulting the application's map prior to your ride to identify convenient parking zones near your destination." },
          },
        ],
      },
    ],
  },
];
