import type { PresetScene } from "../scene-types";

// ============================================================
// 基础英语扩展场景 — Foundation Extended Scenes
// 覆盖：自我介绍、问候寒暄、数字与计算、时间与日期、天气聊天、
//       描述家庭、谈论职业、谈论爱好、描述外貌、表达感受、
//       同意与反对、请求帮助、道歉与原谅、感谢与回应、打电话、
//       发送邮件、问路、描述位置、讨论价格、比较选择、
//       提出建议、表达意见、描述经历、谈论未来计划、告别与祝福
// ============================================================

export const FOUNDATION_SCENES_EXT: PresetScene[] = [
  // ==================== 1. 自我介绍 ====================
  {
    id: "foundation-self-introduction",
    category: "foundation",
    titleZh: "自我介绍",
    titleEn: "Self Introduction",
    description: "在社交场合介绍自己的姓名、来历和基本信息",
    otherRole: "新朋友",
    otherRoleIcon: "🤝",
    flows: [
      {
        id: "basic",
        titleZh: "基本自我介绍",
        titleEn: "Basic Self Introduction",
        description: "在聚会上认识新朋友，做简单的自我介绍",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Hi there! I don't think we've met. I'm Sarah.",
            textZh: "嗨！我们好像没见过。我是 Sarah。",
            keyPhrases: [
              { en: "I don't think we've met", zh: "我们好像没见过" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! I don't believe we've been introduced. I'm Sarah.", textZh: "嘿！我们好像还没正式介绍过。我是 Sarah。", actionHint: "含义一样，回应自我介绍即可", frequency: "common" },
              { textEn: "Hi! Are you new here? I'm Sarah.", textZh: "嗨！你是新来的吗？我是 Sarah。", actionHint: "对方在主动搭话，友好回应就行", frequency: "common" },
              { textEn: "I don't think I've seen you around before. Sarah.", textZh: "我之前好像没见过你。我是 Sarah。", actionHint: "更随意的打招呼方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice to meet you, Sarah. I'm Wayne. I'm from China.",
            textZh: "很高兴认识你，Sarah。我是 Wayne，来自中国。",
            casualVersion: "Hey Sarah! I'm Wayne, from China.",
            culturalNote: "西方文化中，初次见面握手并保持眼神接触是基本礼节。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Oh, nice! What part of China are you from?",
            textZh: "哦，真好！你是中国哪里的？",
            keyPhrases: [
              { en: "what part of", zh: "哪个地方/哪里的" },
            ],
            alternativeExpressions: [
              { textEn: "Cool! Whereabouts in China?", textZh: "不错！中国哪一块的？", actionHint: "whereabouts 就是问具体哪里", frequency: "common" },
              { textEn: "Which city are you from?", textZh: "你是哪个城市的？", actionHint: "直接问城市，简单回答即可", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm from Shanghai. It's a big city on the east coast.",
            textZh: "我来自上海，是东海岸的一个大城市。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "I've always wanted to go there! So what do you do for work?",
            textZh: "我一直想去那里！你做什么工作？",
            keyPhrases: [
              { en: "what do you do", zh: "你做什么工作" },
              { en: "always wanted to", zh: "一直想要" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, that's on my bucket list! So what do you do?", textZh: "哦，那在我的愿望清单上！你做什么工作？", actionHint: "bucket list 是人生愿望清单", frequency: "common" },
              { textEn: "No way, I've been meaning to go! What kind of work are you in?", textZh: "不会吧，我一直想去！你做什么工作的？", actionHint: "been meaning to 就是一直想做", frequency: "common" },
              { textEn: "I'd love to visit someday! And what's your line of work?", textZh: "我以后一定要去！你是做什么行业的？", actionHint: "line of work 等于职业", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I work in marketing. How about you?",
            textZh: "我做市场营销。你呢？",
            culturalNote: "\'How about you?\' 是最常用的反问方式，表示你也对对方感兴趣。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "I'm a teacher. I teach high school English.",
            textZh: "我是老师，教高中英语。",
            keyPhrases: [
              { en: "high school", zh: "高中" },
            ],
            alternativeExpressions: [
              { textEn: "I teach — high school English, actually.", textZh: "我是教书的——教高中英语。", actionHint: "先说大类再补充细节，很常见的说法", frequency: "common" },
              { textEn: "I work in education. I'm an English teacher at a high school.", textZh: "我在教育行业。在高中教英语。", actionHint: "先说行业再说具体职位", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's great! It's really nice meeting you, Sarah.",
            textZh: "太好了！很高兴认识你，Sarah。",
          },
        ],
      },
    ],
  },

  // ==================== 2. 问候寒暄 ====================
  {
    id: "foundation-greetings",
    category: "foundation",
    titleZh: "问候寒暄",
    titleEn: "Greetings and Small Talk",
    description: "日常问候和简短的寒暄交流",
    otherRole: "邻居",
    otherRoleIcon: "👋",
    flows: [
      {
        id: "basic",
        titleZh: "日常问候",
        titleEn: "Everyday Greetings",
        description: "在小区遇到邻居，进行日常寒暄",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "邻居",
            textEn: "Good morning! How are you doing today?",
            textZh: "早上好！你今天怎么样？",
            keyPhrases: [
              { en: "how are you doing", zh: "你怎么样" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! How's it going?", textZh: "早！最近咋样？", actionHint: "随口一问，简单回答就行", frequency: "common" },
              { textEn: "Hey there! How've you been?", textZh: "嘿！最近怎么样？", actionHint: "问近况，不用详细回答", frequency: "common" },
              { textEn: "Hi! What's up?", textZh: "嗨！怎么样？", actionHint: "非常随意的问候，回 Not much 就行", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm doing well, thank you! And you?",
            textZh: "我很好，谢谢！你呢？",
            casualVersion: "Pretty good, thanks! You?",
            culturalNote: "英语中 \'How are you?\' 通常只是礼貌问候，不需要真的详细回答。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Can't complain! Beautiful day, isn't it?",
            textZh: "还不错！天气真好，是吧？",
            keyPhrases: [
              { en: "can't complain", zh: "还不错/没什么可抱怨的" },
              { en: "isn't it", zh: "是吧（反问确认）" },
            ],
            alternativeExpressions: [
              { textEn: "Not too bad! Gorgeous weather, huh?", textZh: "还行！天气真好，是吧？", actionHint: "huh 是口语中求认同的语气词", frequency: "common" },
              { textEn: "Pretty good! What a beautiful day, right?", textZh: "挺好的！天气真好，对吧？", actionHint: "附和天气好就行", frequency: "common" },
              { textEn: "Hanging in there! Nice day out though.", textZh: "还过得去！不过今天天气不错。", actionHint: "hanging in there 意思是还撑着/凑合", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's lovely. Are you heading out for a walk?",
            textZh: "是啊，太好了。你要出去散步吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Yeah, just going to grab a coffee. Have you tried that new café on Main Street?",
            textZh: "是的，去买杯咖啡。你去过大街上新开的那家咖啡馆吗？",
            keyPhrases: [
              { en: "grab a coffee", zh: "买杯咖啡" },
              { en: "have you tried", zh: "你试过吗" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, heading out for a quick coffee run. You been to that new spot on Main?", textZh: "是的，出去买个咖啡。你去过大街那家新店吗？", actionHint: "coffee run 就是出门买咖啡", frequency: "common" },
              { textEn: "Just gonna get my caffeine fix. Have you checked out that new place on Main Street?", textZh: "去弄杯咖啡续命。你看过大街上那家新店吗？", actionHint: "caffeine fix 是咖啡因补充，幽默说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not yet, but I've heard good things about it.",
            textZh: "还没有，但我听说不错。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "You should check it out! Well, have a great day!",
            textZh: "你应该去看看！好吧，祝你有美好的一天！",
            keyPhrases: [
              { en: "check it out", zh: "去看看" },
              { en: "have a great day", zh: "祝你有美好的一天" },
            ],
            alternativeExpressions: [
              { textEn: "You should totally go! Alright, catch you later!", textZh: "你一定要去看看！好了，回见！", actionHint: "catch you later 就是以后见", frequency: "common" },
              { textEn: "It's worth a try! Anyway, take it easy!", textZh: "值得试试！好了，慢慢来！", actionHint: "take it easy 是轻松的告别语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks, you too! See you around.",
            textZh: "谢谢，你也是！回见。",
            culturalNote: "\'See you around\' 是非常地道的非正式告别语，表示以后还会碰面。",
          },
        ],
      },
    ],
  },

  // ==================== 3. 数字与计算 ====================
  {
    id: "foundation-numbers-counting",
    category: "foundation",
    titleZh: "数字与计算",
    titleEn: "Numbers and Counting",
    description: "在购物、分账等场景中使用数字和简单计算",
    otherRole: "收银员",
    otherRoleIcon: "🔢",
    flows: [
      {
        id: "basic",
        titleZh: "购物数字",
        titleEn: "Shopping Numbers",
        description: "在商店里理解价格、数量和找零",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "How much are these apples?",
            textZh: "这些苹果多少钱？",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "They're $1.50 per pound. How many pounds would you like?",
            textZh: "每磅1.50美元。你要几磅？",
            keyPhrases: [
              { en: "per pound", zh: "每磅" },
              { en: "how many", zh: "多少/几个" },
            ],
            alternativeExpressions: [
              { textEn: "Those are a buck fifty a pound. How much you want?", textZh: "那些一磅一块五。你要多少？", actionHint: "a buck fifty 就是1.50美元", frequency: "common" },
              { textEn: "Dollar fifty per pound. How many do you need?", textZh: "一磅一块五。你要几磅？", actionHint: "省略了 per 前面的 a，口语常见", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take three pounds, please.",
            textZh: "请给我三磅。",
            culturalNote: "美国用磅（pound）计量，1磅约等于0.45公斤。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Three pounds — that'll be $4.50. Anything else?",
            textZh: "三磅——一共4.50美元。还要别的吗？",
            keyPhrases: [
              { en: "that'll be", zh: "一共是" },
              { en: "anything else", zh: "还要别的吗" },
            ],
            alternativeExpressions: [
              { textEn: "Okay, three pounds comes out to four fifty. Need anything else?", textZh: "好的，三磅算下来四块五。还需要别的吗？", actionHint: "comes out to 就是算出来是", frequency: "common" },
              { textEn: "That's gonna be $4.50 for three pounds. Is that everything?", textZh: "三磅四块五。就这些吗？", actionHint: "is that everything 和 anything else 一个意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'd also like a dozen eggs.",
            textZh: "是的，我还要一打鸡蛋。",
            culturalNote: "\'a dozen\' 是12个，在英语中买鸡蛋常用 dozen 计量。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "A dozen eggs is $3.99. So your total comes to $8.49.",
            textZh: "一打鸡蛋3.99美元。所以总共8.49美元。",
            keyPhrases: [
              { en: "a dozen", zh: "一打（12个）" },
              { en: "your total comes to", zh: "你的总额是" },
            ],
            alternativeExpressions: [
              { textEn: "Eggs are $3.99 for a dozen. So altogether that's $8.49.", textZh: "鸡蛋一打3.99。加一起8.49。", actionHint: "altogether 就是总共", frequency: "common" },
              { textEn: "A dozen eggs, $3.99. That brings your total to $8.49.", textZh: "一打鸡蛋，3.99。总共8.49。", actionHint: "brings your total to 和 comes to 一样", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here's a ten-dollar bill.",
            textZh: "给你一张十美元的。",
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Your change is $1.51. Here you go. Have a good one!",
            textZh: "找你1.51美元。给你。祝愉快！",
            keyPhrases: [
              { en: "your change", zh: "找你的零钱" },
              { en: "have a good one", zh: "祝愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Out of ten — here's $1.51 back. You have a nice day!", textZh: "十块的——找你1.51。祝你有个好日子！", actionHint: "out of ten 意思是收了十块", frequency: "common" },
              { textEn: "And $1.51 is your change. Thanks for coming in!", textZh: "找你1.51。感谢光临！", actionHint: "thanks for coming in 是常见的收银告别语", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 4. 时间与日期 ====================
  {
    id: "foundation-time-date",
    category: "foundation",
    titleZh: "时间与日期",
    titleEn: "Time and Date",
    description: "询问和表达时间、日期、预约等",
    otherRole: "前台",
    otherRoleIcon: "🕐",
    flows: [
      {
        id: "basic",
        titleZh: "预约时间",
        titleEn: "Making an Appointment",
        description: "打电话预约，讨论可用的时间和日期",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to make an appointment, please.",
            textZh: "你好，我想预约一下。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Of course. When would you like to come in?",
            textZh: "当然可以。你想什么时候来？",
            keyPhrases: [
              { en: "when would you like to", zh: "你想什么时候" },
              { en: "come in", zh: "过来/到店" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely. What day works best for you?", textZh: "当然。哪天最方便？", actionHint: "works best for you 就是最适合你", frequency: "common" },
              { textEn: "Sure thing! Did you have a particular day in mind?", textZh: "没问题！你有想好哪天吗？", actionHint: "have in mind 是心里有没有想法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is next Tuesday available? Maybe in the morning?",
            textZh: "下周二有空吗？可能上午？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... Tuesday morning is full, but I have an opening at 2:30 PM. Would that work?",
            textZh: "让我查一下……周二上午满了，但下午2:30有空。可以吗？",
            keyPhrases: [
              { en: "an opening", zh: "一个空位/空档" },
              { en: "would that work", zh: "那样可以吗" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, Tuesday morning is all booked up. How about 2:30 in the afternoon?", textZh: "嗯，周二上午全满了。下午2:30怎么样？", actionHint: "booked up 就是预约满了", frequency: "common" },
              { textEn: "Tuesday morning's pretty packed. I could squeeze you in at 2:30 though.", textZh: "周二上午排得很满。不过2:30我可以给你安排进去。", actionHint: "squeeze you in 是见缝插针帮你安排", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "2:30 works for me. How long will it take?",
            textZh: "2:30可以。大概要多长时间？",
            culturalNote: "英语口语中2:30通常说 \'two thirty\'，不说 \'fourteen thirty\'。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "About 45 minutes. Could I get your name and phone number?",
            textZh: "大约45分钟。能告诉我你的名字和电话号码吗？",
            keyPhrases: [
              { en: "about 45 minutes", zh: "大约45分钟" },
              { en: "could I get", zh: "能告诉我" },
            ],
            alternativeExpressions: [
              { textEn: "It usually takes around 45 minutes. Can I have your name and a contact number?", textZh: "通常需要大约45分钟。能留个名字和联系电话吗？", actionHint: "contact number 就是联系电话", frequency: "common" },
              { textEn: "Give or take 45 minutes. And your name and number, please?", textZh: "差不多45分钟。请告诉我你的名字和电话？", actionHint: "give or take 是大约的意思", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. My name is Wayne, and my number is 555-012-3456.",
            textZh: "好的。我叫 Wayne，电话号码是 555-012-3456。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Got it. So that's Tuesday, March 17th at 2:30 PM. We'll see you then!",
            textZh: "好的。那就是3月17日周二下午2:30。到时候见！",
            keyPhrases: [
              { en: "March 17th", zh: "3月17日" },
              { en: "we'll see you then", zh: "到时候见" },
            ],
            alternativeExpressions: [
              { textEn: "All set! Tuesday the 17th at 2:30. See you then!", textZh: "搞定了！17号周二2:30。到时候见！", actionHint: "all set 就是都安排好了", frequency: "common" },
              { textEn: "You're booked for Tuesday, March 17th, 2:30 PM. Looking forward to seeing you!", textZh: "已经帮你预约了3月17日周二下午2:30。期待见到你！", actionHint: "you're booked 意思是预约好了", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 5. 天气聊天 ====================
  {
    id: "foundation-weather-talk",
    category: "foundation",
    titleZh: "天气聊天",
    titleEn: "Weather Talk",
    description: "用天气作为话题进行日常闲聊",
    otherRole: "同事",
    otherRoleIcon: "🌤️",
    flows: [
      {
        id: "basic",
        titleZh: "天气闲聊",
        titleEn: "Casual Weather Chat",
        description: "在办公室和同事聊天气",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "Wow, it's really cold out there today!",
            textZh: "哇，今天外面真冷啊！",
            keyPhrases: [
              { en: "cold out there", zh: "外面冷" },
            ],
            alternativeExpressions: [
              { textEn: "Man, it's freezing out there!", textZh: "天哪，外面冻死了！", actionHint: "freezing 比 cold 更夸张，很常见", frequency: "common" },
              { textEn: "Brrr, it's brutal outside today!", textZh: "天哪，今天外面冷得要命！", actionHint: "brutal 在这里形容天气极端", frequency: "occasional" },
              { textEn: "Can you believe how cold it is today?", textZh: "今天也太冷了吧？", actionHint: "反问句表达惊讶，附和就好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I know! I checked the weather this morning — it said it's going to be around 30 degrees.",
            textZh: "是啊！我今早看了天气预报——说大概30度（华氏）。",
            culturalNote: "美国用华氏度（Fahrenheit），30°F 约等于 -1°C。记住 32°F = 0°C。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yeah, and it might snow later this afternoon. Did you bring an umbrella?",
            textZh: "是啊，下午可能还会下雪。你带伞了吗？",
            keyPhrases: [
              { en: "it might snow", zh: "可能会下雪" },
              { en: "did you bring", zh: "你带了吗" },
            ],
            alternativeExpressions: [
              { textEn: "They're saying we might get some snow this afternoon. You got an umbrella?", textZh: "他们说下午可能要下雪。你带伞了吗？", actionHint: "they're saying 指天气预报说", frequency: "common" },
              { textEn: "I heard there's a chance of snow later. Did you bring anything to stay dry?", textZh: "我听说晚点可能下雪。你带了防雨的东西吗？", actionHint: "a chance of 就是有可能", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, I forgot! I hope it doesn't snow too much.",
            textZh: "没有，我忘了！希望不会下太大。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "The forecast says it should clear up by tomorrow. It's supposed to be sunny and in the fifties.",
            textZh: "天气预报说明天应该会放晴。应该是晴天，五十多度。",
            keyPhrases: [
              { en: "forecast", zh: "天气预报" },
              { en: "clear up", zh: "放晴/转晴" },
              { en: "in the fifties", zh: "五十多度（华氏）" },
            ],
            alternativeExpressions: [
              { textEn: "Supposedly it's gonna warm up tomorrow. Sunny and mid-fifties.", textZh: "据说明天会暖和起来。晴天，五十几度。", actionHint: "supposedly 就是据说、听说", frequency: "common" },
              { textEn: "The weather app says it'll be nice tomorrow — like fifties and sunny.", textZh: "天气 app 说明天不错——五十多度，晴天。", actionHint: "weather app 现在比 forecast 更常用", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's good to hear. I really miss the warm weather.",
            textZh: "那太好了。我真怀念暖和的天气。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Same here! Spring can't come soon enough.",
            textZh: "我也是！春天快点来吧。",
            keyPhrases: [
              { en: "same here", zh: "我也是" },
              { en: "can't come soon enough", zh: "真盼着赶紧来" },
            ],
            alternativeExpressions: [
              { textEn: "Tell me about it! I'm so over this cold weather.", textZh: "可不是嘛！我受够这冷天了。", actionHint: "tell me about it 表示深有同感", frequency: "common" },
              { textEn: "Right?! I'm counting down the days till spring.", textZh: "对吧？！我在数着日子等春天。", actionHint: "counting down the days 就是掰着手指数日子", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 6. 描述家庭 ====================
  {
    id: "foundation-describing-family",
    category: "foundation",
    titleZh: "描述家庭",
    titleEn: "Describing Family",
    description: "向他人介绍和描述自己的家庭成员",
    otherRole: "朋友",
    otherRoleIcon: "👨‍👩‍👧‍👦",
    flows: [
      {
        id: "basic",
        titleZh: "聊家庭",
        titleEn: "Talking About Family",
        description: "和新朋友聊自己的家庭情况",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "So, do you have a big family?",
            textZh: "那，你家人多吗？",
            keyPhrases: [
              { en: "big family", zh: "大家庭/家人多" },
            ],
            alternativeExpressions: [
              { textEn: "How big is your family?", textZh: "你家有多少人？", actionHint: "直接问家庭人数", frequency: "common" },
              { textEn: "Do you come from a big family or is it pretty small?", textZh: "你来自大家庭还是人不多？", actionHint: "come from 这里指家庭背景", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not really. There are four of us — my parents, my sister, and me.",
            textZh: "不算多。我们家四口人——父母、姐姐和我。",
            culturalNote: "英文描述家庭人数时，常说 \'There are X of us\'。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Is your sister older or younger than you?",
            textZh: "你姐姐/妹妹比你大还是小？",
            keyPhrases: [
              { en: "older or younger", zh: "比你大还是小" },
            ],
            alternativeExpressions: [
              { textEn: "Are you the older one or the younger one?", textZh: "你是大的还是小的？", actionHint: "在问你在家排行", frequency: "common" },
              { textEn: "Is she your big sis or little sis?", textZh: "她是你姐还是妹？", actionHint: "sis 是 sister 的口语缩写", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's two years older. She's married and has a little boy.",
            textZh: "她大我两岁。她已经结婚了，有一个小男孩。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, so you're an uncle! How old is your nephew?",
            textZh: "哦，那你是舅舅啦！你外甥多大了？",
            keyPhrases: [
              { en: "uncle", zh: "叔叔/舅舅" },
              { en: "nephew", zh: "侄子/外甥" },
            ],
            alternativeExpressions: [
              { textEn: "Aww, that makes you an uncle then! How old is the little guy?", textZh: "哇，那你就是舅舅了！小家伙多大了？", actionHint: "little guy 是对小男孩的亲切称呼", frequency: "common" },
              { textEn: "Oh cool, uncle life! How old is her kid?", textZh: "哦不错，当舅舅了！她孩子多大？", actionHint: "uncle life 是轻松调侃的说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He just turned three. He's really cute and full of energy.",
            textZh: "他刚满三岁。特别可爱，精力充沛。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's such a fun age! Do your parents live nearby?",
            textZh: "那个年纪真有趣！你父母住在附近吗？",
            keyPhrases: [
              { en: "such a fun age", zh: "那个年纪真有趣" },
              { en: "live nearby", zh: "住在附近" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, three is the best! Are your folks close by?", textZh: "哦，三岁最好玩了！你爸妈住得近吗？", actionHint: "folks 是口语中对父母的称呼", frequency: "common" },
              { textEn: "That's a cute age! Do your parents live around here too?", textZh: "那个年纪好可爱！你父母也住在这附近吗？", actionHint: "around here 就是这附近", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "No, they still live back in China. I visit them once or twice a year.",
            textZh: "不是，他们还住在中国。我每年回去看他们一两次。",
          },
        ],
      },
    ],
  },

  // ==================== 7. 谈论职业 ====================
  {
    id: "foundation-talking-about-jobs",
    category: "foundation",
    titleZh: "谈论职业",
    titleEn: "Talking About Jobs",
    description: "讨论工作、职业和职场话题",
    otherRole: "新认识的人",
    otherRoleIcon: "💼",
    flows: [
      {
        id: "basic",
        titleZh: "聊工作",
        titleEn: "Talking About Work",
        description: "在社交活动中和人聊各自的工作",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "新认识的人",
            textEn: "So, what do you do for a living?",
            textZh: "那，你做什么工作？",
            keyPhrases: [
              { en: "what do you do for a living", zh: "你做什么工作/靠什么谋生" },
            ],
            alternativeExpressions: [
              { textEn: "What kind of work do you do?", textZh: "你做什么工作的？", actionHint: "最常见的问职业方式之一", frequency: "common" },
              { textEn: "What line of work are you in?", textZh: "你在哪个行业？", actionHint: "line of work 就是行业/职业", frequency: "common" },
              { textEn: "So what keeps you busy during the week?", textZh: "你平时都忙什么？", actionHint: "更含蓄地问工作，不那么直接", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm in marketing. I work for a tech company.",
            textZh: "我做市场营销，在一家科技公司。",
            culturalNote: "\'I'm in + 行业\' 是表达职业最常用的方式之一。",
          },
          {
            speaker: "them",
            role: "新认识的人",
            textEn: "Oh, that sounds interesting! Do you like it?",
            textZh: "哦，听起来很有意思！你喜欢吗？",
            keyPhrases: [
              { en: "that sounds interesting", zh: "听起来很有意思" },
            ],
            alternativeExpressions: [
              { textEn: "Oh cool! Are you enjoying it?", textZh: "哦不错！你喜欢吗？", actionHint: "直接问你喜不喜欢这份工作", frequency: "common" },
              { textEn: "Nice! Is it fun?", textZh: "不错！有意思吗？", actionHint: "更随意的问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, I really enjoy it. It's busy, but I like the creative side of things.",
            textZh: "是的，我很喜欢。虽然很忙，但我喜欢创意的部分。",
          },
          {
            speaker: "them",
            role: "新认识的人",
            textEn: "I know what you mean. I'm a graphic designer, so I'm all about the creative stuff too.",
            textZh: "我理解你的意思。我是平面设计师，所以我也全是创意工作。",
            keyPhrases: [
              { en: "I know what you mean", zh: "我理解你的意思" },
              { en: "graphic designer", zh: "平面设计师" },
              { en: "all about", zh: "全是关于/专注于" },
            ],
            alternativeExpressions: [
              { textEn: "Totally get that. I do graphic design, so I'm a creative type too.", textZh: "完全理解。我做平面设计，所以我也是创意型的。", actionHint: "creative type 指创意型的人", frequency: "common" },
              { textEn: "Yeah, I feel you. I'm in design myself — graphic design.", textZh: "是啊，我懂。我自己也是做设计的——平面设计。", actionHint: "I feel you 表示感同身受", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice! Do you work freelance or for a company?",
            textZh: "不错！你是自由职业还是在公司上班？",
          },
          {
            speaker: "them",
            role: "新认识的人",
            textEn: "I'm freelance right now. The hours are flexible, but finding clients can be tough sometimes.",
            textZh: "我现在是自由职业。工作时间灵活，但有时找客户挺难的。",
            keyPhrases: [
              { en: "freelance", zh: "自由职业" },
              { en: "flexible", zh: "灵活的" },
              { en: "tough", zh: "困难的" },
            ],
            alternativeExpressions: [
              { textEn: "I'm doing my own thing right now. Love the freedom, but the hustle for clients is real.", textZh: "我现在自己干。喜欢自由，但找客户确实辛苦。", actionHint: "doing my own thing 意思是自己单干", frequency: "common" },
              { textEn: "I freelance. The schedule's great but landing new gigs can be tricky.", textZh: "我做自由职业。时间安排很好，但接活有时不容易。", actionHint: "landing gigs 就是接到活儿", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I bet. But it must be nice to be your own boss!",
            textZh: "可以想象。但自己当老板肯定不错吧！",
            culturalNote: "\'I bet\' 表示 \'我能想象/我敢说\'，是一种表示理解的口语表达。",
          },
        ],
      },
    ],
  },

  // ==================== 8. 谈论爱好 ====================
  {
    id: "foundation-discussing-hobbies",
    category: "foundation",
    titleZh: "谈论爱好",
    titleEn: "Discussing Hobbies",
    description: "聊兴趣爱好和休闲活动",
    otherRole: "朋友",
    otherRoleIcon: "🎨",
    flows: [
      {
        id: "basic",
        titleZh: "聊爱好",
        titleEn: "Talking About Hobbies",
        description: "和朋友聊各自的兴趣爱好",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "What do you usually do in your free time?",
            textZh: "你空闲时间通常做什么？",
            keyPhrases: [
              { en: "in your free time", zh: "在你的空闲时间" },
            ],
            alternativeExpressions: [
              { textEn: "What do you like to do for fun?", textZh: "你平时喜欢做什么消遣？", actionHint: "for fun 比 free time 更随意", frequency: "common" },
              { textEn: "Got any hobbies?", textZh: "有什么爱好吗？", actionHint: "非常直接的问法", frequency: "common" },
              { textEn: "What are you into these days?", textZh: "你最近对什么感兴趣？", actionHint: "be into 就是喜欢/热衷于", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I really like hiking and photography. I try to go on a hike every weekend.",
            textZh: "我很喜欢徒步和摄影。我尽量每周末去徒步。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh cool! Do you have a favorite trail around here?",
            textZh: "哦不错！附近有你喜欢的步道吗？",
            keyPhrases: [
              { en: "favorite trail", zh: "最喜欢的步道" },
              { en: "around here", zh: "附近" },
            ],
            alternativeExpressions: [
              { textEn: "That's awesome! Know any good trails nearby?", textZh: "太棒了！附近有什么好步道吗？", actionHint: "know any 就是知不知道有什么", frequency: "common" },
              { textEn: "Nice! Where do you usually go hiking?", textZh: "不错！你一般去哪里徒步？", actionHint: "在问你常去的地方", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, there's a great one by the lake. The views are amazing.",
            textZh: "有的，湖边有一条很棒的。风景特别好。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Nice! I'm more of an indoor person myself. I love reading and cooking.",
            textZh: "不错！我比较宅。我喜欢阅读和做饭。",
            keyPhrases: [
              { en: "more of an indoor person", zh: "比较宅/偏宅的人" },
            ],
            alternativeExpressions: [
              { textEn: "Cool! I'm kind of a homebody, honestly. I'm really into reading and cooking.", textZh: "不错！说实话我比较宅。我很喜欢阅读和做饭。", actionHint: "homebody 就是宅家的人", frequency: "common" },
              { textEn: "That's cool. I'm not really an outdoorsy type — I'd rather stay in and cook or read.", textZh: "不错。我不太是户外型的——我更喜欢待在家做饭或看书。", actionHint: "outdoorsy type 指喜欢户外的人", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Cooking is great! What kind of food do you like to make?",
            textZh: "做饭很棒！你喜欢做什么菜？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Mostly Italian — pasta, pizza, that sort of thing. I'm actually trying to learn Chinese cooking too!",
            textZh: "主要是意大利菜——意面、披萨之类的。其实我也在学做中国菜！",
            keyPhrases: [
              { en: "that sort of thing", zh: "诸如此类的" },
              { en: "trying to learn", zh: "正在尝试学" },
            ],
            alternativeExpressions: [
              { textEn: "I'm big on Italian food — pasta, pizza, you name it. I've actually been getting into Chinese cooking lately!", textZh: "我特别爱意大利菜——意面、披萨，你能想到的都有。最近其实还迷上了中国菜！", actionHint: "be big on 就是很喜欢，you name it 指什么都有", frequency: "common" },
              { textEn: "Mainly Italian stuff. But I've been dabbling in Chinese food recently — it's so good!", textZh: "主要是意大利菜。但最近在尝试做中国菜——太好吃了！", actionHint: "dabbling in 是初步尝试的意思", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh really? I could teach you some easy recipes! We should cook together sometime.",
            textZh: "真的吗？我可以教你几道简单的菜！我们找时间一起做吧。",
            culturalNote: "\'We should... sometime\' 是一种友好的邀约方式，不一定有具体计划。",
          },
        ],
      },
    ],
  },

  // ==================== 9. 描述外貌 ====================
  {
    id: "foundation-describing-appearance",
    category: "foundation",
    titleZh: "描述外貌",
    titleEn: "Describing Appearance",
    description: "描述自己或他人的外表特征",
    otherRole: "朋友",
    otherRoleIcon: "👤",
    flows: [
      {
        id: "basic",
        titleZh: "描述朋友外貌",
        titleEn: "Describing a Friend's Look",
        description: "在等朋友到来时向他人描述朋友的外貌",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "So your friend is coming to meet us? What does she look like? So I can spot her.",
            textZh: "你朋友要来找我们？她长什么样？这样我好认出她。",
            keyPhrases: [
              { en: "what does she look like", zh: "她长什么样" },
              { en: "spot her", zh: "认出她" },
            ],
            alternativeExpressions: [
              { textEn: "Oh nice! What should I look for? How will I recognize her?", textZh: "不错！我该注意什么特征？怎么认出她？", actionHint: "look for 在这里是留意什么特征", frequency: "common" },
              { textEn: "Cool, what's she look like? I wanna make sure I don't miss her.", textZh: "好，她长啥样？我不想错过她。", actionHint: "what's she look like 是口语缩写", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She's about average height, maybe 5'5\". She has long black hair.",
            textZh: "她中等身高，大概5尺5（165cm）。留着黑色长发。",
            culturalNote: "美国用英尺和英寸（feet/inches）描述身高，5'5\' 约165厘米。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Okay. What will she be wearing?",
            textZh: "好的。她会穿什么？",
            keyPhrases: [
              { en: "what will she be wearing", zh: "她会穿什么" },
            ],
            alternativeExpressions: [
              { textEn: "Got it. Any idea what she's wearing today?", textZh: "明白了。知道她今天穿什么吗？", actionHint: "any idea 就是知不知道", frequency: "common" },
              { textEn: "Alright. Do you know what she's got on?", textZh: "好的。你知道她穿了什么吗？", actionHint: "got on 是穿着的口语说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "She told me she'd be wearing a red jacket and jeans.",
            textZh: "她说她会穿一件红色夹克和牛仔裤。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Does she wear glasses?",
            textZh: "她戴眼镜吗？",
            keyPhrases: [
              { en: "wear glasses", zh: "戴眼镜" },
            ],
            alternativeExpressions: [
              { textEn: "Is she wearing glasses or anything like that?", textZh: "她戴眼镜什么的吗？", actionHint: "or anything like that 是追问更多特征", frequency: "common" },
              { textEn: "Does she have glasses on?", textZh: "她戴着眼镜吗？", actionHint: "have glasses on 和 wear glasses 一样", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, she wears round glasses. And she usually carries a big tote bag.",
            textZh: "是的，她戴圆框眼镜。通常还背一个大手提袋。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, I think I see her! Is that her by the entrance? The one with the red jacket?",
            textZh: "哦，我好像看到她了！入口那边那个穿红色夹克的是她吗？",
            keyPhrases: [
              { en: "by the entrance", zh: "在入口处" },
              { en: "the one with", zh: "那个穿/戴着...的" },
            ],
            alternativeExpressions: [
              { textEn: "Wait — is that her over there? Red jacket, by the door?", textZh: "等等——那边那个是她吗？红夹克，在门口？", actionHint: "用关键特征快速确认", frequency: "common" },
              { textEn: "Hang on, I think I see her! The girl in red near the entrance?", textZh: "等一下，我好像看到她了！入口那边穿红色的？", actionHint: "hang on 就是等一下", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, that's her! Let me wave her over.",
            textZh: "是的，就是她！我招呼她过来。",
          },
        ],
      },
    ],
  },

  // ==================== 10. 表达感受 ====================
  {
    id: "foundation-expressing-feelings",
    category: "foundation",
    titleZh: "表达感受",
    titleEn: "Expressing Feelings",
    description: "用英语表达各种情绪和感受",
    otherRole: "朋友",
    otherRoleIcon: "😊",
    flows: [
      {
        id: "basic",
        titleZh: "表达心情",
        titleEn: "Sharing How You Feel",
        description: "和朋友分享近期的心情和感受",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "Hey, you look a bit down today. Is everything okay?",
            textZh: "嘿，你今天看起来有点沮丧。一切还好吗？",
            keyPhrases: [
              { en: "a bit down", zh: "有点沮丧/低落" },
              { en: "is everything okay", zh: "一切还好吗" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, you alright? You seem kind of off today.", textZh: "嘿，你没事吧？你今天看着不太对劲。", actionHint: "kind of off 意思是状态不太对", frequency: "common" },
              { textEn: "What's wrong? You don't seem like yourself.", textZh: "怎么了？你看着不像平时的你。", actionHint: "not like yourself 是说状态反常", frequency: "common" },
              { textEn: "Hey, what's up? You look like something's bugging you.", textZh: "嘿，咋了？你看着好像有什么心事。", actionHint: "bugging you 是有什么在烦你", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, I'm just a little stressed about work. I have a big deadline coming up.",
            textZh: "嗯，就是工作压力有点大。有一个重要的截止日期快到了。",
            culturalNote: "英语中直接表达感受是正常的，不需要过于委婉或隐瞒。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I'm sorry to hear that. Is there anything I can do to help?",
            textZh: "很遗憾听到这个。有什么我能帮忙的吗？",
            keyPhrases: [
              { en: "I'm sorry to hear that", zh: "很遗憾听到这个" },
              { en: "anything I can do to help", zh: "我能帮什么忙" },
            ],
            alternativeExpressions: [
              { textEn: "Ugh, that sucks. Want me to help with anything?", textZh: "唉，那真烦。需要我帮什么忙吗？", actionHint: "that sucks 是表示同情的口语", frequency: "common" },
              { textEn: "Oh no, I'm sorry. Let me know if there's anything I can do.", textZh: "哦不，真遗憾。有什么我能做的告诉我。", actionHint: "let me know 就是告诉我", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for asking. Just talking about it makes me feel better, honestly.",
            textZh: "谢谢你的关心。说实话，聊聊就感觉好多了。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I totally get it. Work stress is the worst. But you always manage to get things done!",
            textZh: "我完全理解。工作压力是最糟的。但你总能搞定！",
            keyPhrases: [
              { en: "I totally get it", zh: "我完全理解" },
              { en: "manage to get things done", zh: "设法完成事情" },
            ],
            alternativeExpressions: [
              { textEn: "Been there. But hey, you always pull through!", textZh: "我懂的。不过你每次都能挺过来！", actionHint: "been there 表示我也经历过，pull through 是挺过来", frequency: "common" },
              { textEn: "I hear you. But knowing you, you'll crush it like you always do.", textZh: "我理解。但以我对你的了解，你肯定会搞定的。", actionHint: "crush it 意思是做得很棒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really nice of you to say. I'm feeling more positive now.",
            textZh: "你这么说真好。我现在感觉积极多了。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Good! How about we grab lunch? My treat. That always cheers me up!",
            textZh: "太好了！我们去吃午饭吧？我请客。这总能让我开心！",
            keyPhrases: [
              { en: "my treat", zh: "我请客" },
              { en: "cheers me up", zh: "让我开心/振奋" },
            ],
            alternativeExpressions: [
              { textEn: "That's great! Hey, let's go grab lunch — on me. Food always makes everything better!", textZh: "太好了！走，吃午饭去——我请。吃东西总能让一切好起来！", actionHint: "on me 就是我请客", frequency: "common" },
              { textEn: "Yay! Wanna go get some food? I'm buying. Nothing like a good meal to lift your spirits!", textZh: "太好了！想不想去吃点东西？我请。没什么比一顿好饭更能提神了！", actionHint: "I'm buying 也是我请客的意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds wonderful. Thank you — you're a great friend!",
            textZh: "听起来太好了。谢谢你——你真是个好朋友！",
          },
        ],
      },
    ],
  },

  // ==================== 11. 同意与反对 ====================
  {
    id: "foundation-agreeing-disagreeing",
    category: "foundation",
    titleZh: "同意与反对",
    titleEn: "Agreeing and Disagreeing",
    description: "礼貌地表达同意或不同意",
    otherRole: "同事",
    otherRoleIcon: "💬",
    flows: [
      {
        id: "basic",
        titleZh: "讨论观点",
        titleEn: "Discussing Opinions",
        description: "在团队讨论中表达同意和不同意",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "I think we should change our meeting time to 9 AM. What do you think?",
            textZh: "我觉得我们应该把开会时间改到早上9点。你觉得呢？",
            keyPhrases: [
              { en: "what do you think", zh: "你觉得呢" },
            ],
            alternativeExpressions: [
              { textEn: "I was thinking — what if we moved the meeting to 9 AM? Thoughts?", textZh: "我在想——我们把会议改到早上9点怎么样？你怎么看？", actionHint: "thoughts 就是你怎么看", frequency: "common" },
              { textEn: "How would you feel about switching our meeting time to 9?", textZh: "把会议时间换到9点你觉得怎样？", actionHint: "how would you feel about 是征求意见的委婉说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I agree. That makes a lot of sense because mornings are more productive.",
            textZh: "我同意。这很有道理，因为上午效率更高。",
            culturalNote: "表达同意时，说明原因会让对方觉得你是认真思考过的。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Great. I also think we should make meetings shorter — maybe 30 minutes instead of an hour.",
            textZh: "太好了。我还觉得我们应该缩短会议时间——也许30分钟而不是一小时。",
            keyPhrases: [
              { en: "instead of", zh: "而不是/代替" },
            ],
            alternativeExpressions: [
              { textEn: "Awesome. Oh, and I also think our meetings run too long. What about cutting them down to 30 minutes?", textZh: "太好了。对了，我还觉得我们的会开太长了。缩短到30分钟怎么样？", actionHint: "cutting them down 就是缩短", frequency: "common" },
              { textEn: "Nice. Another thought — could we do half-hour meetings instead of a full hour?", textZh: "不错。还有个想法——我们能不能开半小时的会，不要一整小时？", actionHint: "another thought 是再提一个想法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hmm, I see your point, but I'm not sure about that. Sometimes we need the full hour for complex topics.",
            textZh: "嗯，我明白你的意思，但我不太确定。有时候复杂的话题需要完整的一小时。",
            culturalNote: "\'I see your point, but...\' 是礼貌表达不同意的经典句型。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "That's a fair point. Maybe we could do 30 minutes for regular updates and keep the full hour for project reviews?",
            textZh: "说得有道理。也许我们可以常规更新用30分钟，项目评审保留一小时？",
            keyPhrases: [
              { en: "that's a fair point", zh: "说得有道理" },
              { en: "project reviews", zh: "项目评审" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, you've got a point. How about 30 for quick check-ins and a full hour when we need a deep dive?", textZh: "嗯，你说得对。简单碰头30分钟，需要深入讨论的时候再开一小时怎么样？", actionHint: "check-in 是简短碰头，deep dive 是深入讨论", frequency: "common" },
              { textEn: "Good call. What if we split it — short meetings for updates, longer ones for big stuff?", textZh: "有道理。如果分开呢——更新用短会，重要的事开长会？", actionHint: "good call 就是说得好", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a good compromise. I think everyone would be happy with that.",
            textZh: "这是个好折中方案。我觉得大家都会满意的。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Exactly! I'll bring it up at the next team meeting and see if everyone agrees.",
            textZh: "没错！我会在下次团队会议上提出来，看看大家是否同意。",
            keyPhrases: [
              { en: "bring it up", zh: "提出来" },
              { en: "see if everyone agrees", zh: "看看大家是否同意" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! I'll mention it at the next meeting and get everyone's input.", textZh: "当然！我在下次会议上提一下，听听大家的意见。", actionHint: "get everyone's input 就是征求大家意见", frequency: "common" },
              { textEn: "Totally! I'll float the idea to the team and see what they think.", textZh: "没错！我跟团队提一下这个想法，看看他们怎么想。", actionHint: "float the idea 是试探性地提出想法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds like a plan. Let me know how it goes!",
            textZh: "听起来不错。告诉我结果！",
          },
        ],
      },
    ],
  },

  // ==================== 12. 请求帮助 ====================
  {
    id: "foundation-asking-for-help",
    category: "foundation",
    titleZh: "请求帮助",
    titleEn: "Asking for Help",
    description: "在各种情况下礼貌地请求帮助",
    otherRole: "陌生人",
    otherRoleIcon: "🙋",
    flows: [
      {
        id: "basic",
        titleZh: "请人帮忙",
        titleEn: "Asking a Stranger for Help",
        description: "在公共场所向陌生人求助",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could you help me with something?",
            textZh: "打扰一下，你能帮我一下吗？",
            culturalNote: "\'Excuse me\' 是向陌生人搭话时必须说的礼貌开头。",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Sure, what do you need?",
            textZh: "当然，你需要什么帮助？",
            keyPhrases: [
              { en: "what do you need", zh: "你需要什么" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, of course. What's up?", textZh: "好的，当然。怎么了？", actionHint: "what's up 在这里是问你需要什么", frequency: "common" },
              { textEn: "Sure, how can I help?", textZh: "好的，我能帮你什么？", actionHint: "更热情的回应", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm trying to find the post office. Do you know where it is?",
            textZh: "我在找邮局。你知道在哪吗？",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Oh yeah, it's just around the corner. Go straight and take the first right.",
            textZh: "哦知道，就在拐角处。直走然后在第一个路口右转。",
            keyPhrases: [
              { en: "around the corner", zh: "拐角处" },
              { en: "go straight", zh: "直走" },
              { en: "take the first right", zh: "第一个路口右转" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, I know where that is. Just head straight down this way and hang a right at the first street.", textZh: "哦知道，我知道在哪。沿这边直走，到第一条街右拐。", actionHint: "hang a right 就是右转的口语说法", frequency: "common" },
              { textEn: "The post office? It's right around the corner — keep going straight, first right.", textZh: "邮局？就在拐角——一直走，第一个右转。", actionHint: "keep going 就是继续走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Straight and then first right. Is it far from here?",
            textZh: "直走然后第一个右转。离这里远吗？",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "Not at all — maybe a two-minute walk. You can't miss it.",
            textZh: "一点都不远——走路大概两分钟。你不会错过的。",
            keyPhrases: [
              { en: "not at all", zh: "一点都不" },
              { en: "you can't miss it", zh: "你不会错过的/很容易找到" },
            ],
            alternativeExpressions: [
              { textEn: "Nah, it's super close. Like a two-minute walk. It's right there, you'll see it.", textZh: "不远，超近的。就走两分钟。就在那儿，你能看到。", actionHint: "nah 是 no 的随意说法", frequency: "common" },
              { textEn: "It's literally right there — couple minutes tops. Big building, can't miss it.", textZh: "就在那儿——最多几分钟。大楼很显眼，不会错过。", actionHint: "tops 是最多的意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you so much! That's really helpful.",
            textZh: "非常感谢！真的很有帮助。",
          },
          {
            speaker: "them",
            role: "陌生人",
            textEn: "No problem! Happy to help.",
            textZh: "不客气！很高兴能帮忙。",
            keyPhrases: [
              { en: "happy to help", zh: "很高兴能帮忙" },
            ],
            alternativeExpressions: [
              { textEn: "No worries! Glad I could help.", textZh: "没事！能帮到你就好。", actionHint: "no worries 比 no problem 更随意", frequency: "common" },
              { textEn: "Anytime! Good luck finding it.", textZh: "随时来问！祝你顺利找到。", actionHint: "anytime 表示随时愿意帮忙", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 13. 道歉与原谅 ====================
  {
    id: "foundation-apologizing",
    category: "foundation",
    titleZh: "道歉与原谅",
    titleEn: "Apologizing",
    description: "在不同情况下进行道歉和接受道歉",
    otherRole: "朋友",
    otherRoleIcon: "🙏",
    flows: [
      {
        id: "basic",
        titleZh: "迟到道歉",
        titleEn: "Apologizing for Being Late",
        description: "因为迟到向朋友道歉",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "I'm so sorry I'm late! Traffic was terrible.",
            textZh: "非常抱歉我迟到了！交通太堵了。",
            culturalNote: "在英语文化中，迟到时主动道歉并说明原因是基本礼貌。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Don't worry about it! I just got here a few minutes ago myself.",
            textZh: "别担心！我自己也是几分钟前才到的。",
            keyPhrases: [
              { en: "don't worry about it", zh: "别担心/没关系" },
              { en: "a few minutes ago", zh: "几分钟前" },
            ],
            alternativeExpressions: [
              { textEn: "No worries at all! I literally just sat down myself.", textZh: "完全没事！我自己也是刚坐下。", actionHint: "literally 在这里是强调刚刚", frequency: "common" },
              { textEn: "It's fine, seriously! I wasn't waiting long at all.", textZh: "真的没事！我完全没等多久。", actionHint: "seriously 强调真的不在意", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Still, I should have left earlier. I feel bad about keeping you waiting.",
            textZh: "不过我应该早点出发的。让你等了我很过意不去。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Honestly, it's no big deal. These things happen. Let's just enjoy our dinner!",
            textZh: "说实话，没什么大不了的。这种事难免的。我们享受晚餐吧！",
            keyPhrases: [
              { en: "it's no big deal", zh: "没什么大不了的" },
              { en: "these things happen", zh: "这种事难免的" },
            ],
            alternativeExpressions: [
              { textEn: "Seriously, it's totally fine. Traffic is traffic. Let's just have a good time!", textZh: "说真的，完全没事。堵车嘛，没办法。我们好好享受就行！", actionHint: "traffic is traffic 是说堵车很正常", frequency: "common" },
              { textEn: "Don't even sweat it! Stuff happens. Come on, let's eat!", textZh: "别放在心上！这种事难免的。走吧，吃饭！", actionHint: "don't sweat it 就是别担心", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're too kind. Let me buy you a drink to make it up to you.",
            textZh: "你太好了。我请你喝一杯作为补偿。",
            culturalNote: "\'make it up to you\' 是常用表达，意思是弥补/补偿对方。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Ha, deal! I'll take a glass of wine. And really, don't beat yourself up about it.",
            textZh: "哈，成交！我来一杯红酒。真的，别太自责了。",
            keyPhrases: [
              { en: "deal", zh: "成交/一言为定" },
              { en: "don't beat yourself up", zh: "别太自责" },
            ],
            alternativeExpressions: [
              { textEn: "Ha, you're on! I'll have a glass of wine. But seriously, stop feeling bad about it.", textZh: "哈，说定了！我要杯红酒。但说真的，别再内疚了。", actionHint: "you're on 就是接受挑战/一言为定", frequency: "common" },
              { textEn: "Deal! Wine for me. And honestly, let it go — it's not a big deal!", textZh: "成交！我要红酒。说实话，放下吧——真不是大事！", actionHint: "let it go 就是别再纠结了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for being so understanding. Next time I'll leave extra early!",
            textZh: "谢谢你这么理解。下次我会提前很多出发的！",
          },
        ],
      },
    ],
  },

  // ==================== 14. 感谢与回应 ====================
  {
    id: "foundation-thanking",
    category: "foundation",
    titleZh: "感谢与回应",
    titleEn: "Thanking and Responding",
    description: "正确地表达感谢和回应他人的感谢",
    otherRole: "同事",
    otherRoleIcon: "🤗",
    flows: [
      {
        id: "basic",
        titleZh: "职场感谢",
        titleEn: "Workplace Thanks",
        description: "在工作中表达和接受感谢",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "Hey, I just wanted to say thank you for helping me with that report yesterday.",
            textZh: "嘿，我想说谢谢你昨天帮我做那个报告。",
            keyPhrases: [
              { en: "I just wanted to say", zh: "我就是想说" },
              { en: "thank you for helping", zh: "谢谢你的帮助" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, thanks so much for your help with that report yesterday. I really appreciate it.", textZh: "嘿，昨天那个报告的事太谢谢你了。真的很感激。", actionHint: "thanks so much 比 thank you 更口语", frequency: "common" },
              { textEn: "I owe you one for helping me out with that report yesterday.", textZh: "昨天帮我做报告的事，我欠你一个人情。", actionHint: "I owe you one 是我欠你一次", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, you're welcome! It was no trouble at all.",
            textZh: "哦，不客气！完全不费事。",
            culturalNote: "\'It was no trouble at all\' 是比简单说 \'You're welcome\' 更热情的回应。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "No, really, I couldn't have finished it without your help. The data analysis part was key.",
            textZh: "不，真的，没有你的帮助我完成不了。数据分析那部分很关键。",
            keyPhrases: [
              { en: "couldn't have finished", zh: "完成不了（虚拟语气）" },
              { en: "without your help", zh: "没有你的帮助" },
            ],
            alternativeExpressions: [
              { textEn: "For real though, I wouldn't have gotten it done without you. That data part was huge.", textZh: "真的，没有你我做不完的。数据那部分太重要了。", actionHint: "for real 是真的说真的，huge 表示很重要", frequency: "common" },
              { textEn: "No seriously, you saved my life with that data analysis. I was totally stuck.", textZh: "不开玩笑，数据分析那块你救了我。我完全卡住了。", actionHint: "saved my life 是夸张的感谢方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm glad I could help. Anytime you need a hand, just let me know.",
            textZh: "我很高兴能帮上忙。任何时候需要帮忙，告诉我就行。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "I really appreciate that. By the way, I brought you a coffee as a little thank-you.",
            textZh: "非常感谢。顺便说，我给你带了杯咖啡表示感谢。",
            keyPhrases: [
              { en: "I really appreciate that", zh: "非常感谢" },
              { en: "as a little thank-you", zh: "作为小小的感谢" },
            ],
            alternativeExpressions: [
              { textEn: "That means a lot, thank you. Oh, I grabbed you a coffee — just a little something to say thanks.", textZh: "太感谢了。哦，我给你买了杯咖啡——就是表示一下感谢。", actionHint: "grabbed you 就是顺便给你买了", frequency: "common" },
              { textEn: "Seriously, you're the best. Here — got you a coffee as a thank-you.", textZh: "真的，你最棒了。给——买了杯咖啡表示感谢。", actionHint: "you're the best 是常见的夸赞", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's so thoughtful of you! You didn't have to do that.",
            textZh: "你太贴心了！你不用这样的。",
            culturalNote: "\'You didn't have to do that\' 是收到礼物/好意时的经典回应。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Of course I did! Teamwork makes everything easier. Thanks again!",
            textZh: "当然要的！团队合作让一切更轻松。再次感谢！",
            keyPhrases: [
              { en: "teamwork", zh: "团队合作" },
              { en: "thanks again", zh: "再次感谢" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! That's what teammates are for, right? Seriously, thanks a million.", textZh: "当然要的！这不就是队友嘛，对吧？真的，万分感谢。", actionHint: "thanks a million 是很感谢的夸张说法", frequency: "common" },
              { textEn: "Hey, we're a team! Everything's better when we work together. Appreciate you!", textZh: "我们是一个团队嘛！一起合作什么都好做。感谢你！", actionHint: "appreciate you 是直接表达对人的感谢", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "My pleasure! We make a good team.",
            textZh: "这是我的荣幸！我们是好搭档。",
          },
        ],
      },
    ],
  },

  // ==================== 15. 打电话 ====================
  {
    id: "foundation-phone-calls",
    category: "foundation",
    titleZh: "打电话",
    titleEn: "Making Phone Calls",
    description: "基本的英语电话沟通技巧",
    otherRole: "客服",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "basic",
        titleZh: "电话预订",
        titleEn: "Phone Reservation",
        description: "打电话给餐厅预订座位",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "客服",
            textEn: "Thank you for calling Bella's Italian Kitchen. How can I help you?",
            textZh: "感谢致电 Bella 意大利餐厅。有什么可以帮您？",
            keyPhrases: [
              { en: "thank you for calling", zh: "感谢致电" },
              { en: "how can I help you", zh: "有什么可以帮您" },
            ],
            alternativeExpressions: [
              { textEn: "Bella's Italian Kitchen, how may I help you?", textZh: "Bella 意大利餐厅，请问有什么需要？", actionHint: "更简洁的电话开场白", frequency: "common" },
              { textEn: "Hi, thanks for calling Bella's. What can I do for you?", textZh: "您好，感谢致电 Bella's。有什么我能帮您的？", actionHint: "what can I do for you 和 how can I help 一样", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a reservation for this Saturday evening.",
            textZh: "你好，我想预订这周六晚上的位子。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Sure! For how many people, and what time were you thinking?",
            textZh: "好的！几位用餐，您想几点？",
            keyPhrases: [
              { en: "for how many people", zh: "几位用餐" },
              { en: "what time were you thinking", zh: "您想几点" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! How many guests and what time would you prefer?", textZh: "当然！几位客人，您希望什么时间？", actionHint: "guests 比 people 更正式", frequency: "common" },
              { textEn: "Absolutely! How big is your party, and do you have a time in mind?", textZh: "当然可以！你们几位，有想好时间吗？", actionHint: "party 在餐厅指一起用餐的一行人", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A table for four, around 7 PM if possible.",
            textZh: "四个人，如果可以的话大概晚上7点。",
            culturalNote: "\'A table for four\' 是餐厅预订的标准表达方式。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Let me check... 7 PM is fully booked, but I have availability at 7:30. Would that work?",
            textZh: "让我查一下……7点已经满了，但7:30有位置。可以吗？",
            keyPhrases: [
              { en: "fully booked", zh: "已经订满了" },
              { en: "availability", zh: "空位/可用时间" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, 7 o'clock's all taken, I'm afraid. But I could do 7:30 — would that be okay?", textZh: "嗯，7点恐怕满了。不过7:30可以——您觉得行吗？", actionHint: "all taken 就是全被订了", frequency: "common" },
              { textEn: "Unfortunately 7 PM is sold out. I do have a spot at 7:30 though. Does that work for you?", textZh: "不好意思7点没位置了。不过7:30有空位。您方便吗？", actionHint: "sold out 通常指票卖完了，但餐厅也用", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "7:30 is fine. The reservation will be under the name Wayne.",
            textZh: "7:30可以。预订名字用 Wayne。",
            culturalNote: "\'Under the name...\' 是告知预订姓名的标准说法。",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "Perfect. A table for four at 7:30 PM this Saturday under Wayne. Can I get a phone number?",
            textZh: "好的。本周六晚上7:30，Wayne 名下四人桌。能给个电话号码吗？",
            keyPhrases: [
              { en: "under Wayne", zh: "Wayne 名下" },
              { en: "can I get a phone number", zh: "能给个电话号码吗" },
            ],
            alternativeExpressions: [
              { textEn: "Great — table for four, 7:30, Saturday, under Wayne. And a phone number just in case?", textZh: "好的——四人桌，7:30，周六，Wayne名下。留个电话以防万一？", actionHint: "just in case 是以防万一", frequency: "common" },
              { textEn: "Got it. Four people, 7:30 Saturday night, name is Wayne. What's the best number to reach you at?", textZh: "明白了。四位，周六晚7:30，名字 Wayne。留个最方便联系的电话？", actionHint: "best number to reach you 是最方便的联系方式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, it's 555-012-3456. Thank you!",
            textZh: "好的，555-012-3456。谢谢！",
          },
          {
            speaker: "them",
            role: "客服",
            textEn: "You're all set! We'll see you Saturday. Have a great day!",
            textZh: "都安排好了！周六见。祝您有美好的一天！",
            keyPhrases: [
              { en: "you're all set", zh: "都安排好了" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect, you're good to go! We look forward to seeing you Saturday!", textZh: "好了，搞定了！期待周六见到您！", actionHint: "good to go 就是一切就绪", frequency: "common" },
              { textEn: "Awesome, everything's booked! See you this Saturday. Enjoy your evening!", textZh: "太好了，都预订好了！周六见。祝您晚安！", actionHint: "everything's booked 是已经预订好了", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 16. 发送邮件 ====================
  {
    id: "foundation-writing-emails",
    category: "foundation",
    titleZh: "发送邮件",
    titleEn: "Writing Emails",
    description: "讨论如何写和回复英文邮件",
    otherRole: "同事",
    otherRoleIcon: "📧",
    flows: [
      {
        id: "basic",
        titleZh: "邮件求助",
        titleEn: "Email Help",
        description: "请同事帮忙检查英文邮件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, could you take a look at this email before I send it? I want to make sure it sounds professional.",
            textZh: "嘿，你能在我发送之前帮我看看这封邮件吗？我想确保它读起来够专业。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Sure, let me see. Hmm, I'd suggest starting with 'Dear Mr. Johnson' instead of 'Hi Mr. Johnson' since it's more formal.",
            textZh: "好的，让我看看。嗯，我建议用 'Dear Mr. Johnson' 而不是 'Hi Mr. Johnson'，因为更正式。",
            keyPhrases: [
              { en: "I'd suggest", zh: "我建议" },
              { en: "more formal", zh: "更正式" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, let me take a look. Hmm, one thing — you might wanna go with 'Dear' instead of 'Hi' since this is kind of formal.", textZh: "好的，我看看。嗯，有一点——你可能想用 'Dear' 而不是 'Hi'，因为这个比较正式。", actionHint: "wanna 是 want to 的口语缩写", frequency: "common" },
              { textEn: "Yeah, happy to look it over. Okay so first off, I'd probably use 'Dear Mr. Johnson' — sounds more professional.", textZh: "好的，我来帮你看。首先，我会用 'Dear Mr. Johnson'——听起来更专业。", actionHint: "look it over 就是看一遍检查", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good point. Should I also change the ending?",
            textZh: "有道理。我需要改结尾吗？",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yes, 'Best regards' is better than just 'Thanks' for a formal email. Also, you might want to add 'Please don't hesitate to contact me' before the closing.",
            textZh: "是的，正式邮件用 'Best regards' 比单纯的 'Thanks' 好。另外，你可以在结尾前加上 'Please don't hesitate to contact me'。",
            keyPhrases: [
              { en: "Best regards", zh: "此致敬意（邮件结尾）" },
              { en: "don't hesitate to contact me", zh: "请随时联系我" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I'd swap out 'Thanks' for 'Best regards' — it's more polished. And maybe throw in a 'Feel free to reach out' before you sign off.", textZh: "对，我会把 'Thanks' 换成 'Best regards'——更精练。结尾前可以加一句 'Feel free to reach out'。", actionHint: "swap out 是替换，sign off 是邮件结尾", frequency: "common" },
              { textEn: "Definitely close with 'Best regards' instead. Oh, and you could add something like 'Please let me know if you have any questions' right before that.", textZh: "结尾一定要用 'Best regards'。对了，在那之前可以加一句 'Please let me know if you have any questions'。", actionHint: "close with 指以什么结尾", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's helpful. What about the subject line? I wrote 'About the meeting.'",
            textZh: "很有帮助。主题行呢？我写了 'About the meeting'。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Try to be more specific. Something like 'Follow-up: Q1 Marketing Meeting — March 15' so the recipient knows exactly what it's about.",
            textZh: "尽量具体一些。比如 'Follow-up: Q1 Marketing Meeting — March 15' 这样收件人一看就知道是什么。",
            keyPhrases: [
              { en: "follow-up", zh: "跟进/后续" },
              { en: "recipient", zh: "收件人" },
            ],
            alternativeExpressions: [
              { textEn: "The subject line could use some work. Make it more specific — like 'Follow-up: Q1 Marketing Meeting' so they know right away what it's about.", textZh: "主题行可以改进一下。具体一点——比如 'Follow-up: Q1 Marketing Meeting'，这样对方马上知道是什么。", actionHint: "could use some work 是委婉说还需要改进", frequency: "common" },
              { textEn: "Hmm, 'About the meeting' is kinda vague. I'd go with something like 'Follow-up: Q1 Marketing Meeting — March 15.' Super clear that way.", textZh: "嗯，'About the meeting' 有点模糊。我会写 'Follow-up: Q1 Marketing Meeting — March 15'。这样就很清楚了。", actionHint: "kinda vague 是有点模糊", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great advice! I'll update all of that. Thank you for your help!",
            textZh: "很好的建议！我都改一下。谢谢你的帮助！",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Anytime! Pro tip: always proofread your emails twice before hitting send.",
            textZh: "随时来问！专业建议：发送前一定要检查两遍。",
            keyPhrases: [
              { en: "pro tip", zh: "专业建议" },
              { en: "proofread", zh: "校对/检查" },
              { en: "hitting send", zh: "点击发送" },
            ],
            alternativeExpressions: [
              { textEn: "Happy to help! Oh, and one more thing — always double-check your emails before you send them. Saves you from embarrassing typos!", textZh: "很高兴能帮忙！对了，还有一点——发邮件前一定要检查两遍。能避免尴尬的拼写错误！", actionHint: "double-check 就是再检查一遍", frequency: "common" },
              { textEn: "No problem! Word of advice though — read it out loud before you hit send. You'll catch mistakes you'd otherwise miss.", textZh: "不客气！不过给你一个建议——发送前大声读一遍。你能发现平时会忽略的错误。", actionHint: "word of advice 是给一个建议", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 17. 问路 ====================
  {
    id: "foundation-asking-directions",
    category: "foundation",
    titleZh: "问路",
    titleEn: "Asking for Directions",
    description: "在街上向路人问路",
    otherRole: "路人",
    otherRoleIcon: "🗺️",
    flows: [
      {
        id: "basic",
        titleZh: "街上问路",
        titleEn: "Street Directions",
        description: "在陌生的地方向路人问路",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I'm looking for the nearest subway station. Could you point me in the right direction?",
            textZh: "打扰一下，我在找最近的地铁站。你能指一下方向吗？",
            culturalNote: "\'Could you point me in the right direction?\' 是非常礼貌的问路方式。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure! Walk down this street for about two blocks, then turn left on Oak Avenue.",
            textZh: "当然！沿着这条街走大约两个街区，然后在橡树大道左转。",
            keyPhrases: [
              { en: "two blocks", zh: "两个街区" },
              { en: "turn left on", zh: "在...左转" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! Just go down this street a couple blocks and take a left on Oak Ave.", textZh: "好！沿着这条街走几个街区，然后在橡树大道左转。", actionHint: "a couple blocks 大约两三个街区", frequency: "common" },
              { textEn: "Oh sure, it's easy. Head that way about two blocks, then hang a left onto Oak Avenue.", textZh: "哦好的，很简单。往那边走大约两个街区，然后左拐到橡树大道。", actionHint: "hang a left 是左转的口语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Two blocks and then left on Oak Avenue. Got it. Is the station on that street?",
            textZh: "两个街区然后在橡树大道左转。明白了。地铁站在那条街上吗？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Yes, you'll see it on your right-hand side, right across from a big park. There's a blue sign out front.",
            textZh: "是的，你会在右手边看到，就在一个大公园对面。门口有一个蓝色标识。",
            keyPhrases: [
              { en: "right-hand side", zh: "右手边" },
              { en: "across from", zh: "对面" },
              { en: "out front", zh: "门口/前面" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, it'll be on your right. You'll see it — it's right across the street from this big park. Look for the blue sign.", textZh: "对，在你右边。你能看到——就在一个大公园街对面。找蓝色标识。", actionHint: "look for 是留意找一下", frequency: "common" },
              { textEn: "Yeah, it's on the right side of the street, opposite a park. There's a big blue sign, so it's hard to miss.", textZh: "对，在街的右边，公园对面。有个大蓝色标识，很好找。", actionHint: "hard to miss 就是很容易看到", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How long will it take to walk there?",
            textZh: "走过去要多久？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Maybe five to ten minutes. It's a pretty easy walk.",
            textZh: "大概五到十分钟。很好走的。",
            keyPhrases: [
              { en: "five to ten minutes", zh: "五到十分钟" },
              { en: "pretty easy", zh: "很容易/很好走" },
            ],
            alternativeExpressions: [
              { textEn: "Not far — maybe like ten minutes on foot. It's a straight shot, nothing complicated.", textZh: "不远——走路大概十分钟。一条直路，很简单。", actionHint: "a straight shot 是一条直路直达", frequency: "common" },
              { textEn: "It's a quick walk, five or ten minutes max. Pretty hard to get lost.", textZh: "很快就到，最多五到十分钟。基本不会迷路。", actionHint: "max 就是最多", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Thank you very much for your help!",
            textZh: "太好了。非常感谢你的帮助！",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "You're welcome! If you get lost, just ask anyone — most people around here are happy to help.",
            textZh: "不客气！如果迷路了，随便问谁——这附近的人大都很乐意帮忙。",
            keyPhrases: [
              { en: "if you get lost", zh: "如果迷路了" },
              { en: "most people around here", zh: "这附近大多数人" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! And don't worry if you can't find it right away — just ask somebody, people here are pretty friendly.", textZh: "没问题！找不到也别着急——随便问个人，这里的人都挺友好的。", actionHint: "pretty friendly 就是挺友好的", frequency: "common" },
              { textEn: "Happy to help! If you get turned around, just ask anyone. Folks around here are super helpful.", textZh: "不客气！如果走错了，随便问谁。这边的人都很乐意帮忙。", actionHint: "get turned around 是走错方向/迷路", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 18. 描述位置 ====================
  {
    id: "foundation-describing-locations",
    category: "foundation",
    titleZh: "描述位置",
    titleEn: "Describing Locations",
    description: "描述地点、位置和方位",
    otherRole: "朋友",
    otherRoleIcon: "📍",
    flows: [
      {
        id: "basic",
        titleZh: "描述住处位置",
        titleEn: "Describing Where You Live",
        description: "向朋友描述自己住的地方和周边环境",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "So where exactly do you live? I might come visit sometime.",
            textZh: "你到底住哪里？我可能找时间去看你。",
            keyPhrases: [
              { en: "where exactly", zh: "到底在哪里" },
              { en: "come visit", zh: "来拜访" },
            ],
            alternativeExpressions: [
              { textEn: "Whereabouts do you live? I'd love to swing by sometime.", textZh: "你住在哪一块？我找时间去看你。", actionHint: "swing by 就是顺路过来看看", frequency: "common" },
              { textEn: "What part of town are you in? I should come check out your place!", textZh: "你住在城里哪一块？我应该去看看你的住处！", actionHint: "check out your place 就是去看看你家", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I live on the east side of the city, near the river. It's about 20 minutes from downtown.",
            textZh: "我住在城市东边，河流附近。离市中心大概20分钟。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh nice. Is it in a residential area?",
            textZh: "哦不错。是居民区吗？",
            keyPhrases: [
              { en: "residential area", zh: "居民区" },
            ],
            alternativeExpressions: [
              { textEn: "Cool. Is it more of a residential neighborhood or is it kinda commercial?", textZh: "不错。那边更偏居民区还是比较商业化？", actionHint: "kinda commercial 是有点商业化", frequency: "common" },
              { textEn: "That's not bad. Is it a quiet area?", textZh: "不错啊。那边安静吗？", actionHint: "在问周围环境", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, it's a quiet neighborhood. There's a park right behind my apartment building.",
            textZh: "是的，是个安静的小区。我公寓后面就有一个公园。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That sounds lovely. Is there a grocery store nearby?",
            textZh: "听起来不错。附近有超市吗？",
            keyPhrases: [
              { en: "grocery store", zh: "杂货店/超市" },
              { en: "nearby", zh: "附近" },
            ],
            alternativeExpressions: [
              { textEn: "Nice! Can you walk to get groceries, or do you have to drive?", textZh: "不错！买菜能走着去还是得开车？", actionHint: "get groceries 就是买日用品/菜", frequency: "common" },
              { textEn: "That's great. Is there a supermarket close by?", textZh: "真好。附近有超市吗？", actionHint: "close by 和 nearby 一样", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, there's one within walking distance — about five minutes on foot. And there's a mall across the street.",
            textZh: "有的，步行距离内就有一家——走路大概五分钟。街对面还有一个商场。",
            culturalNote: "\'Within walking distance\' 意思是步行可到达的距离。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "It sounds like a really convenient location. How do I get there by public transit?",
            textZh: "听起来位置很方便。坐公共交通怎么去？",
            keyPhrases: [
              { en: "convenient location", zh: "便利的位置" },
              { en: "public transit", zh: "公共交通" },
            ],
            alternativeExpressions: [
              { textEn: "That sounds like a great spot! Can I get there by bus or train?", textZh: "听起来位置真好！能坐公交或地铁到吗？", actionHint: "great spot 是好地段", frequency: "common" },
              { textEn: "Wow, that's super convenient. What's the easiest way to get there without a car?", textZh: "哇，真方便。不开车的话怎么去最方便？", actionHint: "without a car 是不开车的情况", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Take the Blue Line to River Station. My building is just a block away from the station exit.",
            textZh: "坐蓝线到河滨站。我的楼就在出站口一个街区。",
          },
        ],
      },
    ],
  },

  // ==================== 19. 讨论价格 ====================
  {
    id: "foundation-discussing-prices",
    category: "foundation",
    titleZh: "讨论价格",
    titleEn: "Discussing Prices",
    description: "询问价格、比较价格和讨价还价",
    otherRole: "店员",
    otherRoleIcon: "💰",
    flows: [
      {
        id: "basic",
        titleZh: "询问和比较价格",
        titleEn: "Asking About Prices",
        description: "在商店里询问和比较不同商品的价格",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, how much is this jacket?",
            textZh: "你好，这件夹克多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That one is $89.99. But it's actually on sale — 20% off this week.",
            textZh: "那件89.99美元。不过这周打折——八折。",
            keyPhrases: [
              { en: "on sale", zh: "在打折" },
              { en: "20% off", zh: "打八折/减20%" },
            ],
            alternativeExpressions: [
              { textEn: "That one's 89.99, but you're in luck — it's 20% off right now.", textZh: "那件89.99，不过你运气好——现在打八折。", actionHint: "you're in luck 是你运气好", frequency: "common" },
              { textEn: "It's normally $89.99, but we've got a sale going on — 20 percent off this week.", textZh: "原价89.99，不过我们现在在做活动——这周减20%。", actionHint: "got a sale going on 是正在做促销", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "So after the discount, it would be about $72?",
            textZh: "打完折大概72美元？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Exactly, $71.99 to be precise. Plus tax, it comes to about $78.",
            textZh: "没错，精确来说是71.99美元。加税大概78美元。",
            keyPhrases: [
              { en: "to be precise", zh: "精确来说" },
              { en: "plus tax", zh: "加税" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, $71.99 before tax. After tax it'll run you about 78 bucks.", textZh: "对，税前71.99。加税大概78块。", actionHint: "run you 就是花费你多少钱，bucks 就是美元", frequency: "common" },
              { textEn: "Right, so that's 71.99 with the discount. With tax you're looking at roughly 78.", textZh: "对，折后71.99。加税大概78。", actionHint: "you're looking at 就是大概是多少", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's a good deal. What about the blue one? Is it the same price?",
            textZh: "不错的价格。蓝色那件呢？一样价格吗？",
            culturalNote: "美国的标价通常不含销售税（sales tax），结账时才会加上。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "The blue one is from our new collection, so it's $119 and not included in the sale, unfortunately.",
            textZh: "蓝色那件是新品系列，119美元，很遗憾不参加打折。",
            keyPhrases: [
              { en: "new collection", zh: "新品系列" },
              { en: "not included in the sale", zh: "不参加打折" },
            ],
            alternativeExpressions: [
              { textEn: "Ah, the blue one is actually a new arrival — $119, and it's not part of the sale, sorry about that.", textZh: "啊，蓝色那件其实是新到的——119美元，不在打折范围内，抱歉。", actionHint: "new arrival 就是新到货", frequency: "common" },
              { textEn: "That one's from the latest collection, so it's full price at $119. The discount doesn't apply to new items, unfortunately.", textZh: "那件是最新系列的，原价119。新品没有折扣，很遗憾。", actionHint: "full price 就是原价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Hmm, that's a bit over my budget. I think I'll go with the first one.",
            textZh: "嗯，有点超出预算了。我还是要第一件吧。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great choice! Would you like to pay by cash or card?",
            textZh: "好选择！您要现金还是刷卡？",
            keyPhrases: [
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              { textEn: "Good pick! How would you like to pay — cash, card, or Apple Pay?", textZh: "选得好！怎么付——现金、刷卡还是 Apple Pay？", actionHint: "good pick 就是好选择", frequency: "common" },
              { textEn: "Nice choice! Will that be cash or are you putting it on a card?", textZh: "好选择！付现金还是刷卡？", actionHint: "putting it on a card 就是刷卡", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I also get a gift receipt?",
            textZh: "刷卡。能给我一张礼品收据吗？",
            culturalNote: "\'Gift receipt\' 是不显示价格的收据，方便退换但不让收礼人知道价格。",
          },
        ],
      },
    ],
  },

  // ==================== 20. 比较选择 ====================
  {
    id: "foundation-making-comparisons",
    category: "foundation",
    titleZh: "比较选择",
    titleEn: "Making Comparisons",
    description: "比较不同选项并做出选择",
    otherRole: "朋友",
    otherRoleIcon: "⚖️",
    flows: [
      {
        id: "basic",
        titleZh: "比较选择",
        titleEn: "Comparing Options",
        description: "和朋友一起比较选择餐厅或活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "Should we eat at the Mexican place or the Thai restaurant?",
            textZh: "我们去吃墨西哥菜还是泰国菜？",
            keyPhrases: [
              { en: "should we", zh: "我们要不要" },
            ],
            alternativeExpressions: [
              { textEn: "I'm torn between the Mexican place and the Thai spot. Which one are you feeling?", textZh: "我在墨西哥餐厅和泰国餐厅之间纠结。你偏向哪个？", actionHint: "I'm torn between 就是在两个之间纠结", frequency: "common" },
              { textEn: "Mexican or Thai tonight — what are you in the mood for?", textZh: "今晚墨西哥菜还是泰国菜——你想吃什么？", actionHint: "in the mood for 是想吃什么的意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Both are good, but I think the Thai restaurant has better reviews.",
            textZh: "两家都不错，但我觉得泰国餐厅评价更好。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "True, but the Mexican place is closer and cheaper. The food is just as tasty.",
            textZh: "没错，但墨西哥餐厅更近也更便宜。食物一样好吃。",
            keyPhrases: [
              { en: "closer and cheaper", zh: "更近也更便宜" },
              { en: "just as tasty", zh: "一样好吃" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, but the Mexican spot is way closer and won't break the bank. Plus the food's just as good.", textZh: "是，但墨西哥那家近多了也不贵。而且菜也一样好吃。", actionHint: "won't break the bank 是不会太贵", frequency: "common" },
              { textEn: "Fair enough, but the Mexican place is right around the corner and it's easier on the wallet. And honestly, the food slaps.", textZh: "说得对，但墨西哥餐厅就在附近，也更省钱。说实话菜很好吃。", actionHint: "easier on the wallet 是更省钱，slaps 是好吃的俚语", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's true. The Mexican place does have bigger portions too.",
            textZh: "说得对。墨西哥餐厅份量也更大。",
            culturalNote: "\'bigger portions\' 是美国餐厅的一个特点，份量通常很大。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Exactly. And it's less crowded on weeknights compared to the Thai place.",
            textZh: "没错。而且工作日晚上没有泰国餐厅那么挤。",
            keyPhrases: [
              { en: "less crowded", zh: "没那么挤" },
              { en: "compared to", zh: "与...相比" },
              { en: "weeknights", zh: "工作日晚上" },
            ],
            alternativeExpressions: [
              { textEn: "Right. Plus it's not as packed on a weeknight. The Thai place always has a crazy wait.", textZh: "对。而且工作日晚上不那么挤。泰国餐厅总是要等很久。", actionHint: "a crazy wait 是等很长时间", frequency: "common" },
              { textEn: "Totally. And you don't have to deal with a long line like at the Thai restaurant.", textZh: "完全是。而且不用像泰国餐厅那样排长队。", actionHint: "deal with 就是面对/应付", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, you've convinced me. Let's go with the Mexican place this time.",
            textZh: "好吧，你说服我了。这次去墨西哥餐厅吧。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "And next time we can try the Thai restaurant. Best of both worlds!",
            textZh: "下次再去泰国餐厅。两全其美！",
            keyPhrases: [
              { en: "next time", zh: "下次" },
              { en: "best of both worlds", zh: "两全其美" },
            ],
            alternativeExpressions: [
              { textEn: "We can always hit up the Thai place another time. Win-win!", textZh: "改天再去泰国餐厅就行。双赢！", actionHint: "hit up 就是去某个地方", frequency: "common" },
              { textEn: "And we'll save Thai for next time — that way we get to try both!", textZh: "泰国菜留到下次——这样两个都能吃到！", actionHint: "save for 是留到以后", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds like a plan! Let's go.",
            textZh: "就这么定了！走吧。",
          },
        ],
      },
    ],
  },

  // ==================== 21. 提出建议 ====================
  {
    id: "foundation-making-suggestions",
    category: "foundation",
    titleZh: "提出建议",
    titleEn: "Making Suggestions",
    description: "用不同方式提出建议和推荐",
    otherRole: "朋友",
    otherRoleIcon: "💡",
    flows: [
      {
        id: "basic",
        titleZh: "周末计划建议",
        titleEn: "Weekend Plan Suggestions",
        description: "给朋友提建议周末做什么",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "I'm so bored this weekend. Any ideas on what to do?",
            textZh: "这个周末好无聊。有什么好建议吗？",
            keyPhrases: [
              { en: "any ideas", zh: "有什么主意/建议" },
            ],
            alternativeExpressions: [
              { textEn: "Ugh, I've got nothing to do this weekend. Got any suggestions?", textZh: "唉，这周末没事做。你有什么建议吗？", actionHint: "got nothing to do 就是没事做", frequency: "common" },
              { textEn: "I'm dying of boredom. What should I do this weekend?", textZh: "我无聊死了。这周末我该干嘛？", actionHint: "dying of boredom 是无聊到要死的夸张说法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "How about going to the farmers' market? I heard it's really good on Saturdays.",
            textZh: "去农贸市场怎么样？我听说周六很不错。",
            culturalNote: "\'How about + doing...?\' 是提建议最常用的句型之一。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That could be fun. What else is there?",
            textZh: "那可能挺好玩的。还有什么？",
            keyPhrases: [
              { en: "that could be fun", zh: "那可能挺好玩的" },
              { en: "what else", zh: "还有什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, maybe! What other options are there?", textZh: "嗯，也许！还有什么别的选择？", actionHint: "想听更多选择", frequency: "common" },
              { textEn: "Ooh, that's not bad. Any other ideas though?", textZh: "嗯，不错。不过还有别的想法吗？", actionHint: "not bad 是还可以但不够兴奋", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "You could also try that new escape room downtown. I've heard great things about it.",
            textZh: "你也可以试试市中心新开的密室逃脱。我听说非常好。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, I love escape rooms! But they're usually pretty expensive.",
            textZh: "哦，我喜欢密室逃脱！但通常挺贵的。",
            keyPhrases: [
              { en: "pretty expensive", zh: "挺贵的" },
            ],
            alternativeExpressions: [
              { textEn: "I'm totally into escape rooms! But they can be kinda pricey, right?", textZh: "我特别喜欢密室逃脱！但是有点贵吧？", actionHint: "kinda pricey 就是有点贵", frequency: "common" },
              { textEn: "Yes! Escape rooms are awesome. Only thing is they're not exactly cheap.", textZh: "对！密室逃脱超棒的。就是不便宜。", actionHint: "not exactly cheap 是委婉说贵", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Why don't we split the cost? It's more fun with more people anyway.",
            textZh: "我们AA怎么样？人多也更好玩。",
            culturalNote: "\'Why don't we...\' 是另一种提建议的常用表达，比 \'How about\' 更主动。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's a great idea! I'll see if anyone else wants to join us.",
            textZh: "好主意！我问问还有没有其他人想一起来。",
            keyPhrases: [
              { en: "that's a great idea", zh: "好主意" },
              { en: "wants to join us", zh: "想加入我们" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, smart! Let me ask around and see who else is down.", textZh: "哦，聪明！我问问还有谁想来。", actionHint: "ask around 是四处问问，down 是愿意参加", frequency: "common" },
              { textEn: "Love that idea! I'll hit up a few people and see if they wanna come.", textZh: "我喜欢这个主意！我联系几个人看看他们想不想来。", actionHint: "hit up 在这里是联系/问问", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect! I suggest we book it early — those things fill up fast.",
            textZh: "太好了！建议我们早点预订——那种活动很快就满了。",
          },
        ],
      },
    ],
  },

  // ==================== 22. 表达意见 ====================
  {
    id: "foundation-expressing-opinions",
    category: "foundation",
    titleZh: "表达意见",
    titleEn: "Expressing Opinions",
    description: "用不同方式表达自己的看法和意见",
    otherRole: "朋友",
    otherRoleIcon: "🗣️",
    flows: [
      {
        id: "basic",
        titleZh: "讨论电影",
        titleEn: "Discussing a Movie",
        description: "和朋友讨论一部电影的看法",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "Did you see that new movie everyone's been talking about?",
            textZh: "你看了大家一直在讨论的那部新电影吗？",
            keyPhrases: [
              { en: "everyone's been talking about", zh: "大家一直在讨论的" },
            ],
            alternativeExpressions: [
              { textEn: "Have you watched that movie that's been blowing up lately?", textZh: "你看了最近超火的那部电影吗？", actionHint: "blowing up 是突然爆火的意思", frequency: "common" },
              { textEn: "So did you catch that new film? It's all over social media.", textZh: "你看了那部新电影没？到处都在说。", actionHint: "catch 在这里是看/赶上的意思", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I saw it last weekend. In my opinion, the story was really well written.",
            textZh: "看了，上周末看的。我觉得故事写得很好。",
            culturalNote: "\'In my opinion\' 是表达个人看法时最安全、最常用的开头。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I thought so too! But I felt the ending was a bit disappointing. What did you think?",
            textZh: "我也这么觉得！但我觉得结局有点让人失望。你觉得呢？",
            keyPhrases: [
              { en: "I thought so too", zh: "我也这么觉得" },
              { en: "a bit disappointing", zh: "有点让人失望" },
            ],
            alternativeExpressions: [
              { textEn: "Same! But honestly the ending kind of let me down. How'd you feel about it?", textZh: "我也是！但说实话结局有点让我失望。你感觉怎么样？", actionHint: "let me down 就是让我失望", frequency: "common" },
              { textEn: "Right?! The ending was a bit meh though, don't you think?", textZh: "对吧？！不过结局有点一般，你不觉得吗？", actionHint: "meh 是表示无感/一般的口语", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I actually liked the ending. I think it was realistic, even though it wasn't what I expected.",
            textZh: "我其实喜欢那个结局。我觉得很真实，虽然不是我预期的。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's an interesting way to look at it. I guess I was hoping for a happy ending.",
            textZh: "这个角度很有意思。我想我是期待一个美好结局吧。",
            keyPhrases: [
              { en: "that's an interesting way to look at it", zh: "这个角度很有意思" },
              { en: "I was hoping for", zh: "我期待/希望的是" },
            ],
            alternativeExpressions: [
              { textEn: "Huh, I never thought of it that way. I guess I just wanted a happy ending, you know?", textZh: "嗯，我从没那么想过。我就是想要一个美好结局嘛。", actionHint: "never thought of it that way 是没从这个角度想过", frequency: "common" },
              { textEn: "That's a good point actually. I was just really rooting for a feel-good ending.", textZh: "你说得也对。我就是特别希望是一个温馨的结局。", actionHint: "rooting for 是期待/支持", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I totally understand that. The acting was incredible though, don't you think?",
            textZh: "我完全理解。不过演技真的很棒，你说呢？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Absolutely! The lead actress was amazing. I'd say it's one of the best performances I've seen this year.",
            textZh: "绝对的！女主角太厉害了。我觉得这是我今年看过的最好的表演之一。",
            keyPhrases: [
              { en: "I'd say", zh: "我觉得/我认为" },
              { en: "one of the best", zh: "最好的之一" },
            ],
            alternativeExpressions: [
              { textEn: "Oh, 100%! She was phenomenal. Hands down one of the best performances this year.", textZh: "百分之百同意！她太出色了。毫无疑问是今年最好的表演之一。", actionHint: "hands down 是毫无疑问", frequency: "common" },
              { textEn: "For sure! She totally nailed it. Probably the best acting I've seen in ages.", textZh: "当然！她演得太到位了。可能是我好久以来看过的最好的表演。", actionHint: "nailed it 就是完美完成了", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I couldn't agree more. I'd definitely recommend it to anyone.",
            textZh: "我完全同意。我一定会推荐给大家。",
            culturalNote: "\'I couldn't agree more\' 是表示 \'完全同意\' 的地道强调说法。",
          },
        ],
      },
    ],
  },

  // ==================== 23. 描述经历 ====================
  {
    id: "foundation-describing-experiences",
    category: "foundation",
    titleZh: "描述经历",
    titleEn: "Describing Experiences",
    description: "用英语讲述过去的经历和故事",
    otherRole: "朋友",
    otherRoleIcon: "✈️",
    flows: [
      {
        id: "basic",
        titleZh: "旅行经历",
        titleEn: "Travel Experience",
        description: "和朋友分享一次旅行经历",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "How was your trip to Japan? I've been dying to hear about it!",
            textZh: "你的日本之旅怎么样？我一直好想听你说说！",
            keyPhrases: [
              { en: "how was your trip", zh: "你的旅途怎么样" },
              { en: "been dying to", zh: "非常想/迫不及待" },
            ],
            alternativeExpressions: [
              { textEn: "So how was Japan?! I've been wanting to hear all about it!", textZh: "日本怎么样？！我一直想听你说！", actionHint: "wanting to hear all about it 就是想了解所有细节", frequency: "common" },
              { textEn: "Tell me everything about your Japan trip! I'm so curious.", textZh: "快跟我说说你的日本之旅！我太好奇了。", actionHint: "tell me everything 是快全告诉我", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It was amazing! We spent a week in Tokyo and three days in Kyoto.",
            textZh: "太棒了！我们在东京待了一周，京都待了三天。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "What was the highlight for you?",
            textZh: "对你来说最精彩的是什么？",
            keyPhrases: [
              { en: "the highlight", zh: "最精彩的部分/亮点" },
            ],
            alternativeExpressions: [
              { textEn: "What was the best part?", textZh: "最棒的是什么？", actionHint: "best part 和 highlight 一个意思", frequency: "common" },
              { textEn: "What was your favorite thing about the trip?", textZh: "旅途中你最喜欢什么？", actionHint: "favorite thing 是最喜欢的事", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Definitely visiting the temples in Kyoto. They were even more beautiful than I imagined.",
            textZh: "绝对是参观京都的寺庙。比我想象的还要美。",
            culturalNote: "\'even more... than I imagined\' 是描述超出预期体验的好表达。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That sounds incredible! How was the food?",
            textZh: "听起来太赞了！食物怎么样？",
            keyPhrases: [
              { en: "that sounds incredible", zh: "听起来太赞了" },
            ],
            alternativeExpressions: [
              { textEn: "Oh wow, that sounds absolutely amazing! And the food — was it as good as everyone says?", textZh: "哇，听起来真的太棒了！食物呢——有大家说的那么好吗？", actionHint: "as good as everyone says 是不是真的像大家说的那样", frequency: "common" },
              { textEn: "That's so cool! What about the food? I've heard Japanese food is next level.", textZh: "太酷了！食物怎么样？我听说日本菜是另一个档次的。", actionHint: "next level 就是非常棒/超出一般水平", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, the food was out of this world! We tried ramen, sushi, and this amazing street food called takoyaki.",
            textZh: "哦，食物简直绝了！我们吃了拉面、寿司，还有一种叫章鱼烧的超好吃街头小吃。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I'm so jealous! Did you have any trouble with the language barrier?",
            textZh: "太羡慕了！语言不通有没有遇到什么困难？",
            keyPhrases: [
              { en: "I'm so jealous", zh: "太羡慕了" },
              { en: "language barrier", zh: "语言障碍" },
            ],
            alternativeExpressions: [
              { textEn: "Okay now I really need to go! Was it hard getting around without speaking Japanese?", textZh: "好了我真的必须去了！不会说日语出行难吗？", actionHint: "getting around 就是出行/到处走", frequency: "common" },
              { textEn: "You're making me so jealous right now! Did you have any language issues over there?", textZh: "你让我太羡慕了！在那边有语言障碍吗？", actionHint: "language issues 和 language barrier 一样", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "A little bit at first, but most people were really helpful. I learned a few basic phrases which made a big difference.",
            textZh: "一开始有一点，但大多数人都很热心。我学了几句基本的日语，帮了大忙。",
            culturalNote: "\'made a big difference\' 意思是 \'产生了很大影响/帮了大忙\'。",
          },
        ],
      },
    ],
  },

  // ==================== 24. 谈论未来计划 ====================
  {
    id: "foundation-future-plans",
    category: "foundation",
    titleZh: "谈论未来计划",
    titleEn: "Future Plans",
    description: "谈论未来的打算和计划",
    otherRole: "朋友",
    otherRoleIcon: "🔮",
    flows: [
      {
        id: "basic",
        titleZh: "聊未来计划",
        titleEn: "Discussing Future Plans",
        description: "和朋友聊各自的未来计划和目标",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "So, do you have any plans for the summer?",
            textZh: "那，你暑假有什么计划吗？",
            keyPhrases: [
              { en: "do you have any plans", zh: "你有什么计划吗" },
            ],
            alternativeExpressions: [
              { textEn: "What are you up to this summer? Anything exciting?", textZh: "这个夏天你有什么安排？有什么好玩的吗？", actionHint: "up to 在这里是打算做什么", frequency: "common" },
              { textEn: "Got anything planned for the summer?", textZh: "暑假有什么安排吗？", actionHint: "got anything planned 就是有没有安排", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm thinking about taking a trip to Europe. I've always wanted to visit Italy.",
            textZh: "我在考虑去欧洲旅行。我一直想去意大利。",
            culturalNote: "\'I'm thinking about + doing\' 表示你在考虑但还没确定的计划。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, that would be amazing! How long are you planning to go for?",
            textZh: "哦，那太棒了！你打算去多久？",
            keyPhrases: [
              { en: "that would be amazing", zh: "那太棒了" },
              { en: "how long are you planning", zh: "你打算多久" },
            ],
            alternativeExpressions: [
              { textEn: "No way, that's awesome! How many days are you thinking?", textZh: "不会吧，太棒了！你打算去几天？", actionHint: "no way 是惊讶的表达", frequency: "common" },
              { textEn: "Oh, I love Italy! How long of a trip are you looking at?", textZh: "哦，我爱意大利！你打算去多久？", actionHint: "looking at 在这里是考虑/打算", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Probably about two weeks. I'm going to try to visit Rome, Florence, and Venice.",
            textZh: "大概两周吧。我打算去罗马、佛罗伦萨和威尼斯。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's a great itinerary! Are you going to travel solo or with someone?",
            textZh: "行程安排很棒！你一个人去还是和别人一起？",
            keyPhrases: [
              { en: "itinerary", zh: "行程安排" },
              { en: "travel solo", zh: "独自旅行" },
            ],
            alternativeExpressions: [
              { textEn: "Sounds like an amazing trip! Are you going by yourself or taking someone along?", textZh: "听起来是个很棒的旅行！你自己去还是带人一起？", actionHint: "taking someone along 是带人同行", frequency: "common" },
              { textEn: "That's a solid plan! Flying solo or bringing a travel buddy?", textZh: "计划不错！一个人去还是带个旅伴？", actionHint: "flying solo 是一个人行动的意思", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm hoping to go with my friend, but she hasn't confirmed yet. Either way, I'm definitely going.",
            textZh: "我希望和朋友一起去，但她还没确认。不管怎样，我肯定会去。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Good for you! Any long-term plans beyond the trip? I remember you mentioned wanting to start a business.",
            textZh: "太好了！除了旅行还有什么长期计划吗？我记得你提过想创业。",
            keyPhrases: [
              { en: "good for you", zh: "太好了/为你高兴" },
              { en: "long-term plans", zh: "长期计划" },
            ],
            alternativeExpressions: [
              { textEn: "That's awesome! What about after the trip? Didn't you mention wanting to start something on your own?", textZh: "太棒了！旅行之后呢？你是不是说过想自己创业？", actionHint: "start something on your own 就是自己创业", frequency: "common" },
              { textEn: "Love that for you! Any big-picture goals beyond the vacation? I think you mentioned a business idea.", textZh: "真替你高兴！除了度假还有什么大计划吗？我记得你提过一个创业想法。", actionHint: "big-picture goals 是长远目标", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! I'm going to start working on that next year. Right now I'm saving up and learning as much as I can.",
            textZh: "是的！我打算明年开始做那件事。现在正在攒钱，尽量多学。",
            culturalNote: "\'I'm going to\' 表示已经决定的未来计划，比 \'I'm thinking about\' 更确定。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's exciting! I'm rooting for you. Let me know if there's anything I can do to help.",
            textZh: "太令人兴奋了！我支持你。有什么我能帮忙的告诉我。",
            keyPhrases: [
              { en: "I'm rooting for you", zh: "我支持你/为你加油" },
            ],
            alternativeExpressions: [
              { textEn: "That's so exciting! I've got your back — seriously, if you need anything, just holler.", textZh: "太让人兴奋了！我挺你——真的，需要什么就喊我。", actionHint: "I've got your back 就是我支持你，holler 是喊一声", frequency: "common" },
              { textEn: "I love that! You're gonna kill it. Don't hesitate to reach out if you need help!", textZh: "我太喜欢了！你会做得很棒的。需要帮忙随时找我！", actionHint: "gonna kill it 就是会做得很成功", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 25. 告别与祝福 ====================
  {
    id: "foundation-saying-goodbye",
    category: "foundation",
    titleZh: "告别与祝福",
    titleEn: "Saying Goodbye",
    description: "各种场合下的告别和祝福表达",
    otherRole: "朋友",
    otherRoleIcon: "👋",
    flows: [
      {
        id: "basic",
        titleZh: "离别告别",
        titleEn: "Farewell",
        description: "朋友要搬去另一个城市，告别场景",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "I can't believe I'm leaving next week. I'm really going to miss this place.",
            textZh: "真不敢相信下周就要走了。我真的会想念这里。",
            keyPhrases: [
              { en: "I can't believe", zh: "真不敢相信" },
              { en: "going to miss", zh: "会想念" },
            ],
            alternativeExpressions: [
              { textEn: "It's crazy that I'm already leaving next week. I'm gonna miss everything about this place.", textZh: "下周就要走了真疯狂。这里的一切我都会想念。", actionHint: "it's crazy that 是不敢相信的口语", frequency: "common" },
              { textEn: "I still can't wrap my head around it — next week I'll be gone. I really don't want to leave.", textZh: "我还是没法接受——下周我就走了。真不想走。", actionHint: "can't wrap my head around 是没法理解/接受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "We're going to miss you too! It won't be the same without you.",
            textZh: "我们也会想念你的！没有你就不一样了。",
            culturalNote: "\'It won't be the same without you\' 是表达不舍的经典说法。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Thanks. Promise me we'll keep in touch?",
            textZh: "谢谢。答应我我们会保持联系？",
            keyPhrases: [
              { en: "keep in touch", zh: "保持联系" },
              { en: "promise me", zh: "答应我" },
            ],
            alternativeExpressions: [
              { textEn: "Thank you. We're still gonna stay in touch, right? Don't be a stranger!", textZh: "谢谢。我们还是会保持联系的，对吧？别失联啊！", actionHint: "don't be a stranger 是别断了联系", frequency: "common" },
              { textEn: "Thanks. You better not forget about me! We have to keep talking.", textZh: "谢谢。你可别把我忘了！我们得继续联系。", actionHint: "you better not 是你最好别，语气亲切", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course! We can video call every week. And I'll come visit you in your new city.",
            textZh: "当然！我们可以每周视频通话。我也会去你的新城市看你。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I'd love that! You're always welcome. My door is always open for you.",
            textZh: "那太好了！随时欢迎。我家的门永远为你敞开。",
            keyPhrases: [
              { en: "you're always welcome", zh: "随时欢迎" },
              { en: "my door is always open", zh: "我家的门永远为你敞开" },
            ],
            alternativeExpressions: [
              { textEn: "I'd love that! You've got a standing invite — come anytime.", textZh: "那太好了！你永远有邀请——随时来。", actionHint: "standing invite 是长期有效的邀请", frequency: "common" },
              { textEn: "That would be amazing! Seriously, mi casa es su casa. Come whenever you want!", textZh: "那太棒了！说真的，我家就是你家。你想来随时来！", actionHint: "mi casa es su casa 是西班牙语，英语常用来表示热情", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I wish you all the best in your new job. You're going to do great!",
            textZh: "祝你新工作一切顺利。你会做得很好的！",
            culturalNote: "\'I wish you all the best\' 是最常用的祝福语之一。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Thank you so much. That means a lot to me. Take care of yourself!",
            textZh: "非常感谢。这对我意义重大。好好照顾自己！",
            keyPhrases: [
              { en: "that means a lot to me", zh: "这对我意义重大" },
              { en: "take care of yourself", zh: "好好照顾自己" },
            ],
            alternativeExpressions: [
              { textEn: "Seriously, that means the world to me. Look after yourself, okay?", textZh: "真的，这对我太重要了。好好照顾自己，好吗？", actionHint: "means the world 比 means a lot 更强烈", frequency: "common" },
              { textEn: "Thank you, I really needed to hear that. Stay safe and take good care!", textZh: "谢谢，我真的需要听到这些。注意安全，保重！", actionHint: "stay safe 是注意安全", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "You too! Safe travels, and don't forget about us!",
            textZh: "你也是！一路平安，别忘了我们！",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Never! Goodbye for now — but not forever. See you soon!",
            textZh: "绝不会！暂时告别——但不是永远。很快再见！",
            keyPhrases: [
              { en: "goodbye for now", zh: "暂时告别" },
              { en: "see you soon", zh: "很快再见" },
            ],
            alternativeExpressions: [
              { textEn: "No way! This isn't goodbye — it's more like 'see you later.' We'll meet again soon!", textZh: "才不会！这不是再见——只是'回头见'。我们很快会再见面的！", actionHint: "see you later 比 goodbye 更乐观", frequency: "common" },
              { textEn: "Not a chance! It's not forever, just for now. Catch you soon, okay?", textZh: "不可能忘！不是永别，只是暂别。很快再见，好吗？", actionHint: "catch you soon 是很快再见的随意说法", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },
];
