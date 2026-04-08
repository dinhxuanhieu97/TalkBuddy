import type { PresetScene } from "../scene-types";

// ============================================================
// 社交场景 — Social Scenes
// 覆盖：日常闲聊、接受/拒绝邀请、请求帮助
// ============================================================

export const SOCIAL_SCENES: PresetScene[] = [
  // ==================== 日常闲聊 ====================
  {
    id: "social-smalltalk",
    category: "social",
    titleZh: "日常闲聊",
    titleEn: "Small Talk",
    description: "在各种场合与陌生人或邻座进行轻松自然的闲聊，以及自然地夸赞他人",
    otherRole: "路人/邻座",
    otherRoleIcon: "message-circle",
    flows: [
      // --- Flow 1: 和陌生人聊（酒店大堂、旅游巴士等）---
      {
        id: "stranger",
        titleZh: "和陌生人聊",
        titleEn: "Chatting with a Stranger",
        description: "在酒店大堂、旅游巴士等场合和陌生人自然搭话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this seat taken?",
            textZh: "不好意思，这个位子有人吗？",
            culturalNote: "\"Is this seat taken?\" 是搭话前最自然的开场白之一，既礼貌又不唐突。",
            casualVersion: "Hey, anyone sitting here?",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No, go ahead! Are you here on vacation too?",
            textZh: "没有，请坐！你也是来度假的吗？",
            variations: [
              { textEn: "Nope, it's all yours! Where are you visiting from?", textZh: "没有，随便坐！你从哪儿来的？" },
              { textEn: "No, feel free! First time here?", textZh: "没有，随意坐！第一次来这里吗？" },
            ],
            keyPhrases: [
              { en: "go ahead", zh: "请便/请坐" },
              { en: "on vacation", zh: "度假" },
            ],
            responseTip: "对方主动问你问题，是友好的信号，可以大方回答",
            alternativeExpressions: [
              { textEn: "Nah, all yours! You on holiday?", textZh: "没有，坐吧！你度假来的？", actionHint: "对方很随意友好，大方回答", frequency: "common" },
              { textEn: "Help yourself! Where you coming from?", textZh: "随便坐！你从哪里来的？", actionHint: "告诉对方你从哪来", frequency: "common" },
              { textEn: "Go for it! You visiting or do you live here?", textZh: "坐吧！你是来玩的还是住这里？", actionHint: "说明你是游客", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes! It's my first time in this city. Everything is so beautiful. How about you?",
            textZh: "是的！我第一次来这个城市。一切都好漂亮。你呢？",
            culturalNote: "聊天时加一句 \"How about you?\" 表示你也对对方感兴趣，是礼貌的小技巧。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "I've been here a few times. It's one of my favorite places. If you like seafood, there's an amazing restaurant near the harbor.",
            textZh: "我来过几次了。这是我最喜欢的地方之一。如果你喜欢海鲜，港口附近有一家超棒的餐厅。",
            keyPhrases: [
              { en: "a few times", zh: "好几次" },
              { en: "one of my favorite places", zh: "最喜欢的地方之一" },
              { en: "amazing restaurant", zh: "超棒的餐厅" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I come here every year. It never gets old. Oh, and if you're into food, you gotta try the seafood by the port.", textZh: "我每年都来。百看不厌。对了如果你爱吃的话，港口的海鲜一定要试试。", actionHint: "追问具体推荐", frequency: "common" },
              { textEn: "This is like my third or fourth time? I keep coming back. The food alone is worth the trip.", textZh: "这大概是我第三还是第四次来了？总是忍不住回来。光美食就值了。", actionHint: "表示感兴趣，问更多细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I love seafood! What's the restaurant called?",
            textZh: "我超喜欢海鲜！那家餐厅叫什么？",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "It's called The Blue Anchor. Get the grilled shrimp — trust me, it's incredible. It can get crowded, so try going before 6 PM.",
            textZh: "叫 The Blue Anchor。一定要点烤虾——相信我，超好吃。那里人会很多，尽量六点前去。",
            keyPhrases: [
              { en: "trust me", zh: "相信我" },
              { en: "get crowded", zh: "变得很挤/人很多" },
              { en: "try going before", zh: "尽量在……之前去" },
            ],
            culturalNote: "外国人推荐东西时常说 \"trust me\"，语气是热情分享而非命令。",
            alternativeExpressions: [
              { textEn: "The Blue Anchor — you can't miss it, it's right on the water. Seriously, the shrimp there is life-changing.", textZh: "The Blue Anchor——很好找，就在水边。说真的，那虾能改变你的人生。", actionHint: "记下餐厅名字", frequency: "common" },
              { textEn: "Blue Anchor. It's a bit of a hidden gem. Just make sure you get there early or you'll be waiting forever.", textZh: "Blue Anchor。算是个隐藏宝藏。一定要早去，不然等位等到天荒地老。", actionHint: "记住要早去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks for the tip! I'll definitely check it out. By the way, I'm Wang.",
            textZh: "谢谢推荐！我一定去看看。对了，我姓王。",
            culturalNote: "闲聊一两轮之后再自我介绍是很自然的节奏，不需要一上来就报名字。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Nice to meet you, Wang! I'm Sarah. Enjoy your trip — and don't forget the grilled shrimp!",
            textZh: "很高兴认识你，王！我叫 Sarah。祝你旅途愉快——别忘了烤虾哦！",
            keyPhrases: [
              { en: "nice to meet you", zh: "很高兴认识你" },
              { en: "enjoy your trip", zh: "祝旅途愉快" },
            ],
            alternativeExpressions: [
              { textEn: "Wang, nice meeting you! I'm Sarah. Have the best trip — this city won't let you down!", textZh: "王，认识你真好！我是Sarah。祝你旅途愉快——这个城市不会让你失望的！", actionHint: "友好告别", frequency: "common" },
              { textEn: "Pleasure! I'm Sarah. Seriously, enjoy every minute — and try that restaurant, you won't regret it!", textZh: "很高兴认识你！我是Sarah。好好享受每一分钟——一定去那家餐厅，不会后悔的！", actionHint: "记住推荐的餐厅", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 和邻座聊（飞机/火车上）---
      {
        id: "neighbor",
        titleZh: "和邻座聊",
        titleEn: "Chatting with Your Seat Neighbor",
        description: "在飞机或火车上，与邻座自然地聊天",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "邻座",
            textEn: "Long flight, huh? Where are you headed?",
            textZh: "飞好久啊。你去哪儿？",
            keyPhrases: [
              { en: "long flight", zh: "长途飞行" },
              { en: "headed", zh: "去往/前往" },
            ],
            responseTip: "邻座主动搭话，简单回答就好，不用紧张",
            alternativeExpressions: [
              { textEn: "Quite the haul, isn't it? So where are you flying to?", textZh: "飞好远啊是不是？你飞哪里？", actionHint: "简单回答目的地", frequency: "common" },
              { textEn: "These long flights are killer. Business or pleasure?", textZh: "长途飞机真要命。出差还是旅游？", actionHint: "说明你的旅行目的", frequency: "common" },
              { textEn: "Man, still got hours to go. You heading to SF too?", textZh: "天啊还有好几个小时。你也去旧金山吗？", actionHint: "回答目的地", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, it's a long one. I'm going to San Francisco for a conference. How about you?",
            textZh: "是啊，挺久的。我去旧金山参加一个会议。你呢？",
            casualVersion: "Tell me about it. Heading to SF for a work thing. You?",
          },
          {
            speaker: "them",
            role: "邻座",
            textEn: "I'm going home, actually. I live in Oakland, just across the bay. What kind of conference?",
            textZh: "我是回家，其实。我住在奥克兰，就在海湾对面。什么会议？",
            keyPhrases: [
              { en: "going home", zh: "回家" },
              { en: "across the bay", zh: "海湾对面" },
              { en: "what kind of", zh: "什么类型的" },
            ],
            alternativeExpressions: [
              { textEn: "Heading home — I'm based in Oakland. What's the conference about?", textZh: "回家——我住奥克兰。会议是关于什么的？", actionHint: "简单介绍会议内容", frequency: "common" },
              { textEn: "I live out there, actually. Just coming back from a trip. What kind of work stuff?", textZh: "我其实就住那边。出去玩了一趟回来。你去什么工作的事？", actionHint: "说说你的工作", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's a tech conference. I work in marketing, so I'm mostly there to learn about new trends.",
            textZh: "科技会议。我做市场营销的，主要是去了解新趋势。",
          },
          {
            speaker: "them",
            role: "邻座",
            textEn: "Oh, cool! Tech is huge out there. Have you been to San Francisco before? The food scene is incredible.",
            textZh: "哦，不错！那边科技行业特别大。你以前去过旧金山吗？那里的美食特别棒。",
            keyPhrases: [
              { en: "tech is huge out there", zh: "那边科技行业很大" },
              { en: "food scene", zh: "美食圈/餐饮文化" },
              { en: "incredible", zh: "不可思议/特别棒" },
            ],
            alternativeExpressions: [
              { textEn: "Nice! Tech is basically all anyone talks about there. First time visiting? You're gonna love the food.", textZh: "不错！那边基本上人人都在聊科技。第一次去？你会爱上那里的美食的。", actionHint: "回答是否去过", frequency: "common" },
              { textEn: "Oh sweet, tech stuff! The Bay Area is crawling with tech people. Have you been out there before?", textZh: "科技的啊！湾区到处都是科技人。你之前去过那边吗？", actionHint: "回答是否去过旧金山", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "First time! Any recommendations? I'll have some free time in the evenings.",
            textZh: "第一次去！有什么推荐吗？我晚上有些空闲时间。",
          },
          {
            speaker: "them",
            role: "邻座",
            textEn: "Definitely walk around Fisherman's Wharf. And if you like Chinese food, the dim sum in Chinatown is some of the best outside of Asia.",
            textZh: "一定要去渔人码头走走。如果你喜欢中餐，唐人街的点心是亚洲以外最好吃的。",
            keyPhrases: [
              { en: "walk around", zh: "逛逛/走走" },
              { en: "dim sum", zh: "点心/早茶" },
              { en: "some of the best", zh: "最好的之一" },
            ],
            culturalNote: "\"Some of the best\" 是很地道的表达，比 \"very good\" 更有说服力。",
            alternativeExpressions: [
              { textEn: "Oh man, you have to hit up Fisherman's Wharf. And seriously, Chinatown dim sum is next level — you'll feel right at home!", textZh: "你一定要去渔人码头逛逛。还有唐人街的早茶是真的绝了——你会有回到家的感觉！", actionHint: "记下推荐", frequency: "common" },
              { textEn: "Check out the Wharf for sure, and the dim sum in Chinatown is insane. Best I've had outside of Asia, hands down.", textZh: "一定要去看看码头，唐人街的点心疯了。亚洲以外我吃过最好的，毫无疑问。", actionHint: "记下推荐地点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds amazing. I'll add those to my list. Thanks! Oh — looks like they're starting the meal service.",
            textZh: "听起来太棒了。我加到清单里。谢谢！哦——好像要开始送餐了。",
            culturalNote: "飞机上聊天自然会被送餐、起降等打断，这是很自然的结束方式。",
          },
          {
            speaker: "them",
            role: "邻座",
            textEn: "Enjoy your trip! And good luck at the conference.",
            textZh: "祝旅途愉快！会议顺利！",
            keyPhrases: [
              { en: "enjoy your trip", zh: "祝旅途愉快" },
              { en: "good luck", zh: "祝好运/顺利" },
            ],
            alternativeExpressions: [
              { textEn: "Have a blast! Hope the conference goes well.", textZh: "玩得开心！希望会议顺利。", actionHint: "友好告别", frequency: "common" },
              { textEn: "Safe travels! Knock 'em dead at the conference.", textZh: "旅途平安！会议上大展身手啊。", actionHint: "感谢并告别", frequency: "occasional" },
              { textEn: "Have a great time out there! And seriously, don't skip the dim sum.", textZh: "好好享受！说真的别错过点心啊。", actionHint: "再次感谢推荐", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 被夸/夸人 ---
      {
        id: "compliment",
        titleZh: "被夸/夸人",
        titleEn: "Giving and Receiving Compliments",
        description: "在社交场合自然地夸赞他人或优雅地接受夸赞",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "新朋友",
            textEn: "I love your jacket! Where did you get it?",
            textZh: "我好喜欢你的外套！在哪买的？",
            keyPhrases: [
              { en: "I love your", zh: "我好喜欢你的" },
              { en: "where did you get it", zh: "在哪买的" },
            ],
            responseTip: "收到夸赞时不要只说 \"谢谢\"，可以分享一个小故事",
            alternativeExpressions: [
              { textEn: "Oh my gosh, that jacket is amazing! Where'd you find it?", textZh: "天哪，你这外套太好看了！在哪找到的？", actionHint: "感谢并分享来源", frequency: "common" },
              { textEn: "That jacket is fire! I need one. Where's it from?", textZh: "这外套太炸了！我也想要一件。哪里的？", actionHint: "大方分享购买信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, thank you! I actually got it at a little shop in Tokyo. It was a lucky find.",
            textZh: "谢谢！其实是在东京一家小店买的。算是意外收获。",
            culturalNote: "\"A lucky find\" 表示偶然发现的好东西，是很自然的回应方式。比谦虚地说 \"这个很便宜\" 更好。",
            casualVersion: "Thanks! Found it at a random shop in Tokyo — total lucky find.",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Tokyo! That's awesome. I've always wanted to go. The fashion there is so unique.",
            textZh: "东京！太棒了。我一直想去。那里的时尚好独特。",
            keyPhrases: [
              { en: "I've always wanted to", zh: "我一直想" },
              { en: "so unique", zh: "好独特" },
            ],
            alternativeExpressions: [
              { textEn: "No way, Tokyo?! That's on my bucket list. I bet the shopping there is insane.", textZh: "不会吧，东京？！在我的心愿清单上。那边购物肯定疯了吧。", actionHint: "聊聊东京的经历", frequency: "common" },
              { textEn: "Oh wow, Tokyo! I'm so jealous. The street fashion there is everything.", textZh: "哇东京！太羡慕了。那里的街头时尚简直绝了。", actionHint: "继续聊东京话题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You should definitely go! By the way, I really like your earrings. They're really elegant.",
            textZh: "你一定要去！对了，我很喜欢你的耳环，好优雅。",
            culturalNote: "夸赞要具体——说 \"elegant\" 比笼统地说 \"nice\" 更真诚。常用的夸赞词还有 gorgeous、lovely、stunning。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Aw, that's so sweet of you! These were a gift from my grandmother. She has great taste.",
            textZh: "太暖心了！这是我奶奶送我的。她品味特别好。",
            keyPhrases: [
              { en: "that's so sweet of you", zh: "你人真好/太暖心了" },
              { en: "a gift from", zh: "……送的礼物" },
              { en: "great taste", zh: "好品味" },
            ],
            culturalNote: "\"That's so sweet of you\" 是收到夸赞后常见的温暖回应，比单纯说 \"thanks\" 更亲近。",
            alternativeExpressions: [
              { textEn: "Oh stop, you're making me blush! They were actually my grandma's — she gave them to me.", textZh: "别夸了，我都脸红了！其实是我奶奶给我的。", actionHint: "继续夸赞", frequency: "common" },
              { textEn: "That means a lot, thank you! These are vintage — my nana handed them down to me.", textZh: "真的谢谢你！这是复古的——我奶奶传给我的。", actionHint: "可以继续聊这个话题", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "She definitely does! They suit you perfectly.",
            textZh: "她确实有！这对耳环特别适合你。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "You're too kind! You know, you have a great sense of style in general. Everything goes together so well.",
            textZh: "你太客气了！说真的，你整体穿搭特别好。搭配得很协调。",
            keyPhrases: [
              { en: "you're too kind", zh: "你太客气了" },
              { en: "sense of style", zh: "穿搭品味" },
              { en: "goes together", zh: "搭配协调" },
            ],
            alternativeExpressions: [
              { textEn: "Okay now you're just flattering me! But seriously, your whole outfit is on point today.", textZh: "你这是在捧我吧！但说真的，你今天整体搭配太到位了。", actionHint: "谦虚接受夸奖", frequency: "common" },
              { textEn: "You're too sweet! Honestly though, you always look so put-together.", textZh: "你太会说话了！说实话你每次都穿得很精致。", actionHint: "感谢并保持愉快对话", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, thank you! I don't always get it right, but today must be a good day. You've made my morning!",
            textZh: "哈哈，谢谢！我不是每次都搭得好，但今天算运气好。你让我一早上心情都好了！",
            culturalNote: "\"You've made my morning/day\" 表示对方的夸赞让自己很开心，是非常地道且温暖的表达。",
          },
        ],
      },
    ],
  },

  // ==================== 接受/拒绝邀请 ====================
  {
    id: "social-invitation",
    category: "social",
    titleZh: "接受/拒绝邀请",
    titleEn: "Accepting/Declining Invitations",
    description: "有人邀请你参加活动时，如何优雅地接受或婉拒",
    otherRole: "朋友/同事",
    otherRoleIcon: "handshake",
    flows: [
      // --- Flow 1: 接受邀请 ---
      {
        id: "accept",
        titleZh: "接受邀请",
        titleEn: "Accepting an Invitation",
        description: "有人邀请你外出，愉快地接受",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Hey! A few of us are going to a jazz bar tonight. Would you like to join us?",
            textZh: "嘿！我们几个人今晚要去一家爵士酒吧。你要一起来吗？",
            keyPhrases: [
              { en: "a few of us", zh: "我们几个人" },
              { en: "would you like to join us", zh: "你要一起来吗" },
            ],
            responseTip: "这是很随意的邀请，可以直接表达兴趣",
            alternativeExpressions: [
              { textEn: "Yo, we're hitting up a jazz bar tonight — you in?", textZh: "嘿，我们今晚去爵士酒吧——你来不？", actionHint: "表达兴趣并询问细节", frequency: "common" },
              { textEn: "We found this cool jazz spot. A bunch of us are going tonight — wanna tag along?", textZh: "我们发现了一个很酷的爵士酒吧。今晚几个人一起去——想跟来吗？", actionHint: "答应并问时间地点", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds great! I'd love to. What time are you going?",
            textZh: "听起来不错！我很想去。你们几点去？",
            culturalNote: "\"I'd love to\" 比 \"OK\" 或 \"Sure\" 更热情，让邀请人感到开心。",
            casualVersion: "Oh, I'm so in! What time?",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "We're meeting in the lobby at 8. The bar is about a 10-minute walk from the hotel. Do you like jazz?",
            textZh: "我们8点在大堂集合。酒吧离酒店步行大概10分钟。你喜欢爵士乐吗？",
            keyPhrases: [
              { en: "meeting in the lobby", zh: "在大堂集合" },
              { en: "10-minute walk", zh: "步行10分钟" },
            ],
            alternativeExpressions: [
              { textEn: "Lobby at 8, then we'll walk over — it's super close. You into jazz at all?", textZh: "8点大堂集合，走过去就到——超近。你喜欢爵士吗？", actionHint: "回答是否喜欢爵士", frequency: "common" },
              { textEn: "We're heading out around 8. It's walkable from here. Are you a jazz fan?", textZh: "我们8点左右出发。走路能到。你是爵士迷吗？", actionHint: "说说你对爵士的了解", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I love jazz! Well, I don't know much about it, but I enjoy listening to it. Is it a casual place?",
            textZh: "我喜欢爵士乐！嗯，其实了解不多，但很喜欢听。那个地方休闲吗？",
            culturalNote: "承认自己不太懂但感兴趣，比装懂更讨人喜欢。",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Very casual. Just wear whatever you're comfortable in. They also have really good cocktails and some light snacks.",
            textZh: "很休闲的。穿你觉得舒服的就行。他们的鸡尾酒特别好喝，还有一些小吃。",
            keyPhrases: [
              { en: "very casual", zh: "很休闲" },
              { en: "whatever you're comfortable in", zh: "穿你舒服的就行" },
              { en: "cocktails", zh: "鸡尾酒" },
              { en: "light snacks", zh: "小吃/轻食" },
            ],
            alternativeExpressions: [
              { textEn: "Super laid-back. Come as you are. They've got great drinks and some snacky stuff.", textZh: "超随意的。穿什么都行。那里酒很好喝还有些小吃。", actionHint: "不用纠结穿搭", frequency: "common" },
              { textEn: "No dress code or anything. Just chill vibes. The cocktails are killer though!", textZh: "没有着装要求什么的。氛围很轻松。但鸡尾酒真的超赞！", actionHint: "放轻松就好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Should I eat dinner first, or is the food there enough?",
            textZh: "好的。我要先吃晚饭吗？还是那里的吃的就够了？",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "I'd grab a quick dinner first — the snacks are more like appetizers. There's a noodle place right next to the hotel that's pretty good.",
            textZh: "建议先随便吃点——那里的小吃更像开胃菜。酒店旁边有一家面馆还不错。",
            keyPhrases: [
              { en: "grab a quick dinner", zh: "随便吃点" },
              { en: "appetizers", zh: "开胃菜" },
              { en: "right next to", zh: "就在旁边" },
            ],
            culturalNote: "\"Grab\" 用在吃饭的语境中表示快速、随意地吃一顿，非常口语化。",
            alternativeExpressions: [
              { textEn: "I'd eat something before you go — the food there is more like bar snacks. There's a decent noodle shop next door.", textZh: "建议先吃点东西——那里的食物就是小零食。隔壁有家不错的面馆。", actionHint: "先去吃饭", frequency: "common" },
              { textEn: "Honestly, eat before. The snacks won't fill you up. Hit up that noodle spot by the hotel — it's solid.", textZh: "说实话先吃吧。那点小吃吃不饱的。去酒店旁边那家面馆——挺靠谱的。", actionHint: "去推荐的面馆先吃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. I'll eat first and meet you in the lobby at 8. Thanks for inviting me!",
            textZh: "好主意。我先去吃，8点大堂见。谢谢邀请！",
          },
          {
            speaker: "them",
            role: "新朋友",
            textEn: "Awesome! See you at 8. It's going to be fun!",
            textZh: "太好了！8点见。会很好玩的！",
            keyPhrases: [
              { en: "see you at 8", zh: "8点见" },
              { en: "it's going to be fun", zh: "会很好玩的" },
            ],
            alternativeExpressions: [
              { textEn: "Sweet! See you then. It's gonna be a good time!", textZh: "太好了！到时见。肯定很好玩！", actionHint: "准时到大堂", frequency: "common" },
              { textEn: "Can't wait! 8 o'clock, lobby. It's gonna be a blast!", textZh: "等不及了！8点大堂。会超好玩的！", actionHint: "准时赴约", frequency: "common" },
            ],
          },
        ],
      },

      // --- Flow 2: 婉拒邀请 ---
      {
        id: "decline",
        titleZh: "婉拒邀请",
        titleEn: "Politely Declining an Invitation",
        description: "有人邀请你但你不方便去，礼貌地拒绝而不伤感情",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "We're going to karaoke after the workshop tonight. Wanna come?",
            textZh: "今晚研讨会结束后我们去唱歌。要来吗？",
            keyPhrases: [
              { en: "karaoke", zh: "卡拉OK/唱歌" },
              { en: "after the workshop", zh: "研讨会结束后" },
              { en: "wanna come", zh: "要来吗" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, a bunch of us are doing karaoke after this. You down?", textZh: "嘿，等会结束后我们去唱歌。你去吗？", actionHint: "礼貌婉拒", frequency: "common" },
              { textEn: "We're gonna hit karaoke tonight — you should totally come!", textZh: "今晚去唱K——你一定要来！", actionHint: "先肯定再婉拒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds like a lot of fun, but I'm going to have to pass tonight. I have an early flight tomorrow and I haven't packed yet.",
            textZh: "听起来很好玩，但今晚我恐怕去不了。明天一早的飞机，我还没收拾行李呢。",
            culturalNote: "拒绝时先肯定对方的邀请（\"That sounds fun\"），再给出理由，是不伤感情的关键。\"I'm going to have to pass\" 比 \"I can't\" 更婉转。",
            casualVersion: "Sounds awesome, but I gotta pass — early flight tomorrow and I still need to pack.",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Oh no, that's too bad! What time is your flight?",
            textZh: "啊，太可惜了！你几点的飞机？",
            keyPhrases: [
              { en: "that's too bad", zh: "太可惜了" },
              { en: "what time is your flight", zh: "你几点的飞机" },
            ],
            alternativeExpressions: [
              { textEn: "Aw bummer! When's your flight?", textZh: "太遗憾了！飞机几点的？", actionHint: "告诉对方航班时间", frequency: "common" },
              { textEn: "No way, that sucks! What time do you have to be up?", textZh: "不是吧，太惨了！你几点得起？", actionHint: "说明早起的时间", frequency: "common" },
              { textEn: "That's a shame! Are you flying out super early?", textZh: "好可惜！你是很早的航班吗？", actionHint: "告诉对方具体时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "6 AM, so I need to be at the airport by 4. It's going to be a rough morning.",
            textZh: "早上6点，所以4点就得到机场。明天早上会很难熬。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yikes, that's early! Yeah, get some rest. We'll miss you though. Maybe next time?",
            textZh: "天啊，太早了！那好好休息吧。会想你的。下次一起？",
            keyPhrases: [
              { en: "get some rest", zh: "好好休息" },
              { en: "we'll miss you", zh: "会想你的" },
              { en: "maybe next time", zh: "下次吧" },
            ],
            culturalNote: "\"Maybe next time\" 是对方表示理解的常见说法，也可以自己主动说来缓和气氛。",
            alternativeExpressions: [
              { textEn: "Ouch, that's rough. Yeah, definitely get some sleep. We'll catch you next time!", textZh: "天哪好早。那你赶紧休息吧。下次再约！", actionHint: "表示下次一定来", frequency: "common" },
              { textEn: "Brutal. Alright, go get your rest — we'll have fun for you! Next time for sure.", textZh: "太惨了。好吧去休息——我们替你玩！下次一定。", actionHint: "幽默回应并告别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Definitely next time! Take some videos — I want to see everyone's singing skills.",
            textZh: "下次一定！帮我拍几个视频——我要看看大家的歌唱实力。",
            culturalNote: "拒绝后用幽默感保持友好氛围。让对方知道你是真心遗憾而不是敷衍。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Ha, you got it! Have a safe flight tomorrow. It was great meeting you this week.",
            textZh: "哈哈，没问题！明天一路顺风。这周认识你很开心。",
            keyPhrases: [
              { en: "you got it", zh: "没问题" },
              { en: "have a safe flight", zh: "一路顺风" },
              { en: "great meeting you", zh: "认识你很开心" },
            ],
            alternativeExpressions: [
              { textEn: "Will do! Fly safe tomorrow — it's been awesome hanging out with you.", textZh: "没问题！明天飞行平安——这周跟你玩太开心了。", actionHint: "感谢并保持联系", frequency: "common" },
              { textEn: "For sure! Safe travels, and it was really cool getting to know you.", textZh: "一定拍！旅途平安，认识你真的很开心。", actionHint: "提出保持联系", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Same here! Let's stay in touch. I'll add you on LinkedIn.",
            textZh: "我也是！保持联系。我在 LinkedIn 上加你。",
            culturalNote: "商务场合认识的人，提出加 LinkedIn 是很自然的保持联系方式。比要手机号更恰当。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Please do! Safe travels, and don't forget to set your alarm!",
            textZh: "一定加！旅途平安，别忘了定闹钟！",
            keyPhrases: [
              { en: "please do", zh: "一定（做某事）" },
              { en: "safe travels", zh: "旅途平安" },
              { en: "set your alarm", zh: "定闹钟" },
            ],
            alternativeExpressions: [
              { textEn: "Yes please! Have a good flight — and set like five alarms, ha!", textZh: "一定加！飞行顺利——多定几个闹钟哈！", actionHint: "幽默回应并告别", frequency: "common" },
              { textEn: "Absolutely! Get home safe. Don't oversleep!", textZh: "必须的！安全到家。别睡过头！", actionHint: "笑着告别", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 请求帮助 ====================
  {
    id: "social-help",
    category: "social",
    titleZh: "请求帮助",
    titleEn: "Asking for Help",
    description: "在旅途中请求陌生人帮忙拍照、问路等常见场景",
    otherRole: "路人",
    otherRoleIcon: "user",
    flows: [
      // --- Flow 1: 请人拍照 ---
      {
        id: "photo",
        titleZh: "请人拍照",
        titleEn: "Asking Someone to Take a Photo",
        description: "请路人帮你拍照，说明拍摄要求",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, would you mind taking a photo for us?",
            textZh: "不好意思，能帮我们拍张照吗？",
            culturalNote: "\"Would you mind...?\" 是非常礼貌的请求方式。注意回答 \"No\" 反而表示 \"不介意/可以帮你\"。",
            casualVersion: "Hey, could you take a quick photo of us?",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure, no problem! Just this phone?",
            textZh: "当然，没问题！用这个手机拍吗？",
            variations: [
              { textEn: "Of course! I'd be happy to. Which camera?", textZh: "当然！很乐意帮忙。用哪个相机？" },
              { textEn: "Yeah, sure! Ready when you are.", textZh: "好呀！你们准备好了就拍。" },
            ],
            keyPhrases: [
              { en: "no problem", zh: "没问题" },
              { en: "just this phone", zh: "用这个手机吗" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, of course! Hand it over. Just this one?", textZh: "好的当然！给我吧。就用这个吗？", actionHint: "把手机递过去", frequency: "common" },
              { textEn: "Happy to help! Which device am I using?", textZh: "很乐意帮忙！用哪个设备拍？", actionHint: "确认拍照设备", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, this one. Could you try to get the bridge in the background? Just tap the screen to focus.",
            textZh: "对，这个。能把后面的桥拍进去吗？点一下屏幕对焦就行。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Got it. Should I take it vertical or horizontal?",
            textZh: "好的。竖着拍还是横着拍？",
            keyPhrases: [
              { en: "vertical", zh: "竖着/竖屏" },
              { en: "horizontal", zh: "横着/横屏" },
            ],
            responseTip: "告诉对方你想要的拍摄方式",
            alternativeExpressions: [
              { textEn: "OK cool. Portrait or landscape?", textZh: "好的。竖着还是横着？", actionHint: "告诉对方你想要的方式", frequency: "common" },
              { textEn: "Gotcha. Which way do you want it — up and down or sideways?", textZh: "明白。你要竖着拍还是横着拍？", actionHint: "说明拍摄方向", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Horizontal, please. And could you take a few? Just in case some are blurry.",
            textZh: "横着拍吧。能多拍几张吗？以防有拍模糊的。",
            culturalNote: "\"Just in case\" 是 \"以防万一\" 的意思，让请求听起来更合理。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Okay, move a little to the left... Perfect! One, two, three... I took about five. Let me take one more — the light is really nice right now.",
            textZh: "好，往左边移一点……完美！一、二、三……我拍了五张左右。再来一张——现在光线特别好。",
            keyPhrases: [
              { en: "move a little to the left", zh: "往左边移一点" },
              { en: "the light is really nice", zh: "光线特别好" },
            ],
            alternativeExpressions: [
              { textEn: "Alright, scoot over a tad... gorgeous! Say cheese! OK I took a bunch.", textZh: "好，稍微挪一下……完美！茄子！好了我拍了好几张。", actionHint: "查看照片效果", frequency: "common" },
              { textEn: "Just a step to your left... nice! Hold that... done! I got like six shots for you.", textZh: "往左一步……好！保持……搞定！给你拍了大概六张。", actionHint: "看看满不满意", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "These are great! Thank you so much. Would you like me to take one for you too?",
            textZh: "拍得太好了！非常感谢。要不要我也帮你拍一张？",
            culturalNote: "帮人拍完照后主动提出也帮对方拍，是一种礼尚往来的友好表现。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Oh, that would be awesome, actually! Here, just press this button. Thank you!",
            textZh: "诶，那太好了！来，按这个按钮就行。谢谢！",
            keyPhrases: [
              { en: "that would be awesome", zh: "那太好了" },
              { en: "press this button", zh: "按这个按钮" },
            ],
            alternativeExpressions: [
              { textEn: "Really? That'd be great! Just tap the screen to take it. Thanks a million!", textZh: "真的？那太好了！点屏幕就能拍。太感谢了！", actionHint: "帮对方拍照", frequency: "common" },
              { textEn: "Oh, I'd love that! Here — it's already set up, just hit the big button. You're so sweet!", textZh: "那我太想要了！给——已经设好了，按那个大按钮就行。你人真好！", actionHint: "帮忙拍照", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 问路/推荐 ---
      {
        id: "directions",
        titleZh: "问路/推荐",
        titleEn: "Asking for Directions and Recommendations",
        description: "向当地人问路或请求推荐附近的好地方",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, do you know how to get to the Central Park from here?",
            textZh: "不好意思，请问从这里怎么去中央公园？",
            casualVersion: "Hey, do you know which way Central Park is?",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Sure! Go straight for two blocks, then turn right on 5th Avenue. You'll see the park entrance on your left. It's about a 10-minute walk.",
            textZh: "知道！直走两个路口，然后在第五大道右转。你会看到公园入口在左手边。大概走10分钟。",
            variations: [
              { textEn: "Yeah, it's pretty close. Just keep walking this way for about 5 minutes. You can't miss it.", textZh: "很近的。沿这个方向走大概5分钟就到了。不会错过的。" },
            ],
            keyPhrases: [
              { en: "go straight", zh: "直走" },
              { en: "two blocks", zh: "两个路口/街区" },
              { en: "turn right", zh: "右转" },
              { en: "on your left", zh: "在你左手边" },
            ],
            alternativeExpressions: [
              { textEn: "Oh yeah, it's easy! Just go straight and hang a right on 5th. You'll see it on your left.", textZh: "很简单的！直走然后在第五大道右拐。就在你左边。", actionHint: "记住方向", frequency: "common" },
              { textEn: "Yep! Head that way for a couple blocks, take a right on 5th, can't miss it.", textZh: "对！往那边走两个街区，在第五大道右转，不会错过的。", actionHint: "按指示走", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, thank you! Is there a good coffee shop along the way? I could use some caffeine.",
            textZh: "好的，谢谢！沿路有好的咖啡店吗？我需要来点咖啡因。",
            culturalNote: "\"I could use some...\" 是 \"我需要/我想来点\" 的地道说法，比 \"I want\" 更自然。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "Oh yeah, there's a place called Brew & Bean on the corner of 3rd and Main. Their iced coffee is amazing. Way better than the chain places.",
            textZh: "有！在第三街和 Main 的拐角有一家叫 Brew & Bean 的。他们的冰咖啡特别好喝。比连锁店好多了。",
            keyPhrases: [
              { en: "on the corner of", zh: "在……的拐角" },
              { en: "iced coffee", zh: "冰咖啡" },
              { en: "way better than", zh: "比……好多了" },
              { en: "chain places", zh: "连锁店" },
            ],
            culturalNote: "当地人常会主动推荐独立小店，觉得比连锁店更正宗。",
            alternativeExpressions: [
              { textEn: "Ooh, check out Brew & Bean — it's on the corner right there. Their cold brew is insane.", textZh: "去看看Brew & Bean——就在那个路口。他们的冷萃咖啡太绝了。", actionHint: "记住咖啡店名和位置", frequency: "common" },
              { textEn: "There's this awesome little coffee shop, Brew & Bean. Skip the big chains, trust me.", textZh: "有一家超棒的小咖啡店叫Brew & Bean。别去连锁店，相信我。", actionHint: "去推荐的店", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds perfect. And one more question — is there an ATM nearby? I need to get some cash.",
            textZh: "太好了。还有个问题——附近有ATM吗？我需要取点现金。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "There's a bank right across the street with an ATM outside. But honestly, most places here take cards and Apple Pay, so you might not even need cash.",
            textZh: "对面就有一家银行，外面有ATM。不过说实话，这里大部分地方都收银行卡和 Apple Pay，你可能都不需要现金。",
            keyPhrases: [
              { en: "right across the street", zh: "就在对面" },
              { en: "take cards", zh: "收银行卡" },
              { en: "you might not even need", zh: "你可能都不需要" },
            ],
            alternativeExpressions: [
              { textEn: "There's an ATM right over there at the bank. But honestly, everywhere takes cards now — you probably don't need cash.", textZh: "那边银行外面就有ATM。但说实话现在到处都刷卡——你可能不需要现金。", actionHint: "考虑是否真的需要现金", frequency: "common" },
              { textEn: "See that bank across the road? They've got an ATM. But I barely carry cash anymore — everything's tap-to-pay here.", textZh: "看到对面那家银行吗？有ATM。不过我现在几乎不带现金了——这里什么都能刷。", actionHint: "了解当地支付习惯", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know! You've been really helpful. Thank you so much!",
            textZh: "长见识了！你太热心了。非常感谢！",
            culturalNote: "\"Good to know\" 表示 \"这个信息很有用\"，是非常实用的口语表达。",
          },
          {
            speaker: "them",
            role: "路人",
            textEn: "No worries! Enjoy the park — it's a beautiful day for it. Have a great one!",
            textZh: "不客气！好好享受公园——今天天气正好。祝你有美好的一天！",
            keyPhrases: [
              { en: "no worries", zh: "不客气/没关系" },
              { en: "a beautiful day for it", zh: "天气正好适合" },
              { en: "have a great one", zh: "祝你有美好的一天" },
            ],
            culturalNote: "\"Have a great one\" 是 \"Have a great day\" 的更口语化版本，非常常见。",
            alternativeExpressions: [
              { textEn: "You're welcome! Have a great time — perfect day for it!", textZh: "不客气！好好玩——今天天气正好！", actionHint: "感谢并告别", frequency: "common" },
              { textEn: "Anytime! The park's gorgeous today. Have a good one!", textZh: "随时问！今天公园特别漂亮。祝你有美好的一天！", actionHint: "开心出发", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 参加聚会 ====================
  {
    id: "social-party",
    category: "social",
    titleZh: "参加聚会",
    titleEn: "Attending a Party",
    description: "参加家庭聚会或朋友派对，包括自我介绍、融入群体和带礼物的礼仪",
    otherRole: "派对主人/其他客人",
    otherRoleIcon: "party-popper",
    flows: [
      // --- Flow 1: 到达和融入 ---
      {
        id: "arriving",
        titleZh: "到达和融入",
        titleEn: "Arriving and Mingling",
        description: "到达派对、见到主人、和其他客人打招呼",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, Sarah! Thanks so much for inviting me. I brought some wine — I hope you like red!",
            textZh: "嗨，Sarah！太感谢你邀请我了。我带了瓶红酒——希望你喜欢红的！",
            culturalNote: "在欧美，去别人家做客带一瓶酒是最常见的礼物。也可以带甜点、鲜花或小礼品。",
            casualVersion: "Hey Sarah! Here, I got you some wine — hope red's okay!",
          },
          {
            speaker: "them",
            role: "主人",
            textEn: "Oh, you didn't have to! But thank you, I love red wine. Come on in! Make yourself at home. Let me take your coat.",
            textZh: "你太客气了！不过谢谢，我喜欢红酒。快进来！就当自己家。我帮你挂外套。",
            alternativeExpressions: [
              { textEn: "You shouldn't have! But that's so sweet. Come in, everyone's in the backyard.", textZh: "你不用带的！太贴心了。进来吧，大家都在后院。", actionHint: "跟着主人走进去", frequency: "common" },
              { textEn: "Welcome! So glad you could make it. The drinks are in the kitchen — help yourself!", textZh: "欢迎！太高兴你能来了。饮料在厨房——自己倒啊！", actionHint: "去厨房拿饮料", frequency: "common" },
            ],
            keyPhrases: [
              { en: "you didn't have to", zh: "你不用带的/太客气了" },
              { en: "make yourself at home", zh: "就当自己家" },
              { en: "let me take your coat", zh: "我帮你挂外套" },
            ],
            vocabNotes: {
              "make yourself at home": {
                meaningInContext: "在这句话里表示：别拘束，就像在自己家一样放松",
                similarUsage: "类似用法：Sit down, make yourself at home.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Your place is beautiful. I love what you've done with the decorations.",
            textZh: "谢谢！你家好漂亮。装饰得真好。",
            culturalNote: "到别人家首先夸赞房子或装饰是很好的礼貌。",
          },
          {
            speaker: "them",
            role: "主人",
            textEn: "Aw, thanks! Come, let me introduce you to some people. Everyone, this is Wang — he's a friend from work. Wang, this is Mike and Lisa.",
            textZh: "谢谢！来，我介绍几个人给你认识。大家，这是王——我的同事。王，这是 Mike 和 Lisa。",
            keyPhrases: [
              { en: "let me introduce you", zh: "我介绍你认识" },
              { en: "a friend from work", zh: "工作上的朋友/同事" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks! OK come on, I'll introduce you around. Hey everyone, this is Wang!", textZh: "谢谢！来来来，我介绍你认识大家。大家好，这是王！", actionHint: "跟着主人去认识人", frequency: "common" },
              { textEn: "So sweet of you! Let me take you to meet the crew. Gang, this is Wang from work!", textZh: "你太好了！我带你去认识大家。各位，这是我同事王！", actionHint: "准备自我介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice to meet you both! So how do you know Sarah?",
            textZh: "很高兴认识你们！你们怎么认识 Sarah 的？",
            culturalNote: "\"How do you know the host?\" 是派对上最自然的开场白之一。",
          },
          {
            speaker: "them",
            role: "客人",
            textEn: "We're neighbors — we've lived next door for about three years now. What about you? Sarah mentioned you're originally from China?",
            textZh: "我们是邻居——住隔壁大概三年了。你呢？Sarah 说你是中国来的？",
            keyPhrases: [
              { en: "neighbors", zh: "邻居" },
              { en: "next door", zh: "隔壁" },
              { en: "originally from", zh: "来自/老家是" },
            ],
            alternativeExpressions: [
              { textEn: "We go way back — we went to college together!", textZh: "我们认识很久了——大学同学！", actionHint: "继续聊天，问更多关于他们的事", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, I'm from Shanghai. I've been in the US for about two years now. Still getting used to some things!",
            textZh: "是的，我是上海来的。来美国大概两年了。有些东西还在适应！",
          },
          {
            speaker: "them",
            role: "客人",
            textEn: "Oh, I've always wanted to visit Shanghai! I hear the food there is incredible. What do you miss most?",
            textZh: "哦，我一直想去上海！听说那里的美食特别棒。你最想念什么？",
            keyPhrases: [
              { en: "I've always wanted to visit", zh: "我一直想去" },
              { en: "what do you miss most", zh: "你最想念什么" },
            ],
            alternativeExpressions: [
              { textEn: "Shanghai! I've been dying to go. What's the food like? What do you miss the most from back home?", textZh: "上海！我一直特别想去。那里吃的怎么样？你最想念老家什么？", actionHint: "分享你想念的东西", frequency: "common" },
              { textEn: "That's so cool! Shanghai sounds amazing. Is there anything you really miss from home?", textZh: "太酷了！上海听起来很棒。有什么特别想念家乡的吗？", actionHint: "聊聊你想念的事物", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Definitely the food! Especially the soup dumplings — xiaolongbao. Nothing here quite compares.",
            textZh: "当然是美食！尤其是小笼包。这里怎么都比不上。",
          },
          {
            speaker: "them",
            role: "客人",
            textEn: "I love xiaolongbao! There's actually a really good place in Chinatown. We should all go sometime! Can I get you something to drink? There's beer, wine, and some cocktails on the table.",
            textZh: "我爱小笼包！唐人街有一家特别好吃。改天一起去！给你拿点喝的？桌上有啤酒、红酒和鸡尾酒。",
            keyPhrases: [
              { en: "we should all go sometime", zh: "改天一起去" },
              { en: "can I get you something to drink", zh: "给你拿点喝的吗" },
            ],
            vocabNotes: {
              "sometime": {
                meaningInContext: "在这句话里表示：找个时间/改天，不是具体某个时间",
                similarUsage: "类似用法：Let's grab coffee sometime.",
              },
            },
            alternativeExpressions: [
              { textEn: "Oh man, I'm obsessed with xiaolongbao! We should all go to this spot in Chinatown sometime. Want something to drink?", textZh: "天哪我超爱小笼包！改天一起去唐人街那家。你要喝点什么？", actionHint: "接受邀请并要杯饮料", frequency: "common" },
              { textEn: "Xiaolongbao is everything! There's a great dumpling place downtown, we gotta go. Can I grab you a beer or something?", textZh: "小笼包简直是一切！市区有家很棒的饺子店，一定得去。给你拿杯啤酒什么的？", actionHint: "答应下次去并接受饮料", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love a beer, please. This is such a great party — I'm really glad I came!",
            textZh: "来杯啤酒吧。这个聚会太棒了——真高兴我来了！",
          },
        ],
      },

      // --- Flow 2: 聚会中互动 ---
      {
        id: "socializing",
        titleZh: "聚会中互动",
        titleEn: "Socializing at the Party",
        description: "在聚会中参与游戏、聊天和告别",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "客人",
            textEn: "Hey Wang, we're about to play a board game. Want to join? It's really easy — no experience needed.",
            textZh: "嘿王，我们要玩桌游了。要来吗？很简单的——不需要经验。",
            keyPhrases: [
              { en: "about to", zh: "马上要" },
              { en: "board game", zh: "桌游" },
              { en: "want to join", zh: "要来吗" },
              { en: "no experience needed", zh: "不需要经验" },
            ],
            responseTip: "即使不会玩也可以大胆参与，这是融入的好机会",
            alternativeExpressions: [
              { textEn: "Hey, we're starting a game — jump in! Super easy, I'll show you.", textZh: "嘿我们要开始玩游戏了——加入吧！特别简单，我教你。", actionHint: "大胆参与", frequency: "common" },
              { textEn: "Wang! Come play with us. Don't worry, it's not complicated at all.", textZh: "王！来跟我们玩。放心，一点也不复杂。", actionHint: "勇敢加入", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll give it a try! What are we playing?",
            textZh: "好啊，我试试！玩什么？",
            culturalNote: "\"I'll give it a try\" 比 \"I don't know how\" 更积极，表示愿意尝试。",
          },
          {
            speaker: "them",
            role: "客人",
            textEn: "It's called Codenames. You just guess words based on clues. I'll explain as we go — it's more fun that way.",
            textZh: "叫 Codenames。根据提示猜词。我边玩边教——那样更好玩。",
            keyPhrases: [
              { en: "guess words based on clues", zh: "根据提示猜词" },
              { en: "explain as we go", zh: "边玩边教" },
              { en: "more fun that way", zh: "那样更好玩" },
            ],
            alternativeExpressions: [
              { textEn: "Codenames — it's basically a word guessing game. Don't overthink it, just go with your gut!", textZh: "Codenames——就是猜词游戏。别想太多，跟着感觉走就行！", actionHint: "放轻松参与", frequency: "common" },
              { textEn: "It's Codenames. Super simple — someone gives a clue and you guess which words match. We'll figure it out together.", textZh: "是Codenames。特别简单——有人给提示然后你猜对应的词。我们一起搞明白。", actionHint: "不用紧张慢慢学", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds fun! I might need a little help with some English words though.",
            textZh: "听起来很好玩！不过有些英语单词可能需要帮忙。",
          },
          {
            speaker: "them",
            role: "客人",
            textEn: "No worries at all! That's what teammates are for. You can be on my team — we'll crush it together!",
            textZh: "完全没关系！队友就是用来帮忙的嘛。你跟我一队——我们一起赢！",
            keyPhrases: [
              { en: "that's what teammates are for", zh: "队友就是用来帮忙的" },
              { en: "on my team", zh: "跟我一队" },
              { en: "crush it", zh: "赢/干掉他们" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry, we'll help you out. It's all for fun!", textZh: "别担心，我们帮你。就是玩玩！", actionHint: "放轻松，享受游戏", frequency: "common" },
            ],
            vocabNotes: {
              "crush it": {
                meaningInContext: "在这句话里表示：表现出色/赢得比赛，口语化的加油表达",
                similarUsage: "类似用法：You're going to crush the presentation tomorrow!",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Ha, let's do it! Oh, by the way — should I bring something to the kitchen? I noticed some empty plates.",
            textZh: "哈哈，来吧！对了——要不要把东西拿到厨房？我看到有些空盘子。",
            culturalNote: "主动帮忙收拾是好客人的表现，但有些主人可能会说 \"Oh, don't worry about it!\"",
          },
          {
            speaker: "them",
            role: "主人",
            textEn: "Oh, that's so nice of you, but don't worry about it! Just relax and enjoy yourself. Can I get anyone more drinks while I'm up?",
            textZh: "你太贴心了，但不用管！放松享受就好。我站起来了，有人要续杯吗？",
            keyPhrases: [
              { en: "that's so nice of you", zh: "你太贴心了" },
              { en: "don't worry about it", zh: "不用管" },
              { en: "enjoy yourself", zh: "好好享受" },
              { en: "while I'm up", zh: "趁我站起来了" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, you're sweet! But seriously, sit down and relax. Anyone need a refill?", textZh: "你太贴心了！但真的别忙了，坐下来放松。有人要续杯吗？", actionHint: "听主人的话放轻松", frequency: "common" },
              { textEn: "Leave it, leave it! You're a guest. Just have fun. More drinks, anyone?", textZh: "别管别管！你是客人。好好玩就行。有人还要喝的吗？", actionHint: "放下盘子享受派对", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm good, thanks! Actually, I should probably get going soon. I have an early morning tomorrow.",
            textZh: "我不用了，谢谢！其实我可能要走了。明天一早有事。",
            culturalNote: "告辞时不用突然离开，说 \"I should probably get going\" 自然又礼貌。",
          },
          {
            speaker: "them",
            role: "主人",
            textEn: "Already? Well, I'm so glad you came! It was great having you. Let me walk you to the door.",
            textZh: "这就走了？不过真高兴你来了！有你在真好。我送你到门口。",
            keyPhrases: [
              { en: "so glad you came", zh: "真高兴你来了" },
              { en: "great having you", zh: "有你在真好" },
              { en: "walk you to the door", zh: "送你到门口" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, leaving already? Well, thanks so much for coming! We loved having you.", textZh: "这就走啦？谢谢你来！有你在真好。", actionHint: "感谢主人的招待", frequency: "common" },
              { textEn: "Noo, so soon? Well, I'm really glad you made it. Come back anytime!", textZh: "不是吧这么快？不过真的很高兴你来了。随时欢迎再来！", actionHint: "真诚感谢并告别", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you for everything, Sarah. The food was amazing and I had such a great time. Let's do this again soon!",
            textZh: "谢谢你的一切，Sarah。食物太好吃了，我玩得特别开心。改天再聚！",
          },
          {
            speaker: "them",
            role: "主人",
            textEn: "Definitely! Get home safe. Text me when you get in so I know you're okay!",
            textZh: "一定！路上注意安全。到家发个消息，让我知道你到了！",
            keyPhrases: [
              { en: "get home safe", zh: "路上注意安全" },
              { en: "text me when you get in", zh: "到家发个消息" },
            ],
            culturalNote: "朋友之间说 \"text me when you get in/home\" 是很暖心的关心，表示在乎你的安全。",
            alternativeExpressions: [
              { textEn: "For sure! Be safe out there. Shoot me a text when you're home!", textZh: "当然！路上小心。到家给我发个消息！", actionHint: "到家后记得发消息", frequency: "common" },
              { textEn: "Absolutely! Get home safe, OK? And let me know you got in alright.", textZh: "一定的！安全到家哦？告诉我你到了就好。", actionHint: "到家后报平安", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 约会 ====================
  {
    id: "social-dating",
    category: "social",
    titleZh: "约会",
    titleEn: "Going on a Date",
    description: "第一次约会在餐厅吃饭，互相了解、聊兴趣和经历",
    otherRole: "约会对象",
    otherRoleIcon: "heart",
    flows: [
      // --- Flow 1: 餐厅初次约会 ---
      {
        id: "first-date",
        titleZh: "餐厅初次约会",
        titleEn: "First Date at a Restaurant",
        description: "在餐厅和约会对象初次见面，轻松聊天互相了解",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! Are you Emily? I'm Wang. It's really nice to finally meet you in person!",
            textZh: "嗨！你是 Emily 吗？我是王。终于见到真人了，太好了！",
            culturalNote: "网上认识后第一次线下见面，\"nice to meet you in person\" 是很自然的说法。",
            casualVersion: "Hey, Emily? I'm Wang! So nice to finally meet you!",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "Yes, that's me! Great to meet you too, Wang. You look just like your photos — that's always a relief!",
            textZh: "是我！很高兴见到你，王。你跟照片上长得一样——这就放心了！",
            keyPhrases: [
              { en: "meet you in person", zh: "见到真人" },
              { en: "you look just like your photos", zh: "你跟照片上长得一样" },
              { en: "that's always a relief", zh: "这就放心了" },
            ],
            alternativeExpressions: [
              { textEn: "Hi Wang! I'm glad we could finally do this. Should we grab a table?", textZh: "嗨王！终于能见面了。我们找个位子坐？", actionHint: "一起去找位子", frequency: "common" },
            ],
            vocabNotes: {
              "relief": {
                meaningInContext: "在这句话里表示：松了口气/放心了（因为对方和照片一样）",
                similarUsage: "类似用法：What a relief that the flight wasn't cancelled.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Ha, I'll take that as a compliment! Have you been here before? I heard the Italian food is amazing.",
            textZh: "哈哈，我就当是夸奖了！你来过这里吗？我听说意大利菜很棒。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I've been here once — the pasta is incredible. So tell me, how long have you been in the US? Your English is really good, by the way.",
            textZh: "我来过一次——意面超好吃。跟我说说，你来美国多久了？对了，你英语说得真好。",
            keyPhrases: [
              { en: "tell me", zh: "跟我说说" },
              { en: "how long have you been", zh: "你来了多久" },
              { en: "by the way", zh: "对了/顺便说一下" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, came here once before — the food's legit. Anyway, tell me more about you! How long have you been here?", textZh: "来过一次——东西确实好吃。聊聊你吧！你来这里多久了？", actionHint: "回答问题继续聊天", frequency: "common" },
              { textEn: "Once, and I've been wanting to come back since. But enough about food — I wanna know about you! Your English is great, by the way.", textZh: "来过一次，之后一直想再来。不过先不聊吃的了——想了解你！对了你英语真好。", actionHint: "谢谢夸奖并介绍自己", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you! About two years. I'm in marketing — I moved here for a job opportunity. What about you? What do you do?",
            textZh: "谢谢！大概两年了。我做市场营销——因为工作机会搬过来的。你呢？做什么工作的？",
            culturalNote: "约会时可以聊工作，但不要太深入。保持轻松，多问对方兴趣爱好。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I'm a graphic designer. I work freelance, so I get to work from home most days — which I love. Do you like your job?",
            textZh: "我是平面设计师。自由职业，所以大部分时间在家办公——我很喜欢这样。你喜欢你的工作吗？",
            keyPhrases: [
              { en: "graphic designer", zh: "平面设计师" },
              { en: "freelance", zh: "自由职业" },
              { en: "work from home", zh: "在家办公" },
            ],
            alternativeExpressions: [
              { textEn: "I do graphic design — freelance, so I basically work in my pajamas most days. It's the dream! What about you?", textZh: "我做平面设计——自由职业，基本上大部分时间穿睡衣工作。简直是梦想！你呢？", actionHint: "分享你对工作的感受", frequency: "common" },
              { textEn: "I'm a designer — I freelance, which means I get to set my own hours. Love it. How about your job?", textZh: "我是设计师——自由职业，所以时间自己定。超喜欢。你的工作呢？", actionHint: "聊聊你的工作感受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I do! It's challenging but interesting. So what do you do for fun? Any hobbies?",
            textZh: "喜欢！挺有挑战性但很有趣。那你平时有什么爱好？",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I'm really into hiking. There are some beautiful trails not far from here. I also love cooking — I'm trying to learn Chinese cooking, actually! Any tips?",
            textZh: "我特别喜欢徒步。附近有很多漂亮的步道。我也爱做饭——其实在学做中餐！有什么建议吗？",
            keyPhrases: [
              { en: "I'm really into", zh: "我特别喜欢" },
              { en: "trails", zh: "步道/小径" },
              { en: "any tips", zh: "有什么建议吗" },
            ],
            vocabNotes: {
              "into": {
                meaningInContext: "在这句话里表示：对某事很感兴趣/很喜欢",
                similarUsage: "类似用法：I'm really into jazz music these days.",
              },
            },
            alternativeExpressions: [
              { textEn: "Hiking is my thing! There are gorgeous trails around here. I also cook a lot — actually trying to learn Chinese food. Got any secrets?", textZh: "我特别爱徒步！附近有很美的步道。我也爱做饭——其实在学做中餐。有什么秘诀吗？", actionHint: "主动提出教她做中餐", frequency: "common" },
              { textEn: "I'm a total outdoors person — love hiking. And I've been getting into cooking lately, especially Chinese food. Any tips from an expert?", textZh: "我是户外控——爱徒步。最近迷上做饭了，特别是中餐。专家有什么建议？", actionHint: "提供做中餐的建议", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh really? That's awesome! I'd love to show you some authentic recipes sometime. Maybe I could cook for you — my tomato egg stir-fry is legendary.",
            textZh: "真的吗？太好了！改天教你几道正宗做法。也许我可以做给你吃——我的番茄炒蛋是一绝。",
            culturalNote: "约会时提出以后一起做某事（如做饭），既自然又暗示有兴趣继续交往。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I would love that! Okay, I'm holding you to it. Should we order? I'm starving!",
            textZh: "太好了！说定了哦。我们点菜吧？我饿死了！",
            keyPhrases: [
              { en: "I'm holding you to it", zh: "说定了/你可不能反悔" },
              { en: "should we order", zh: "我们点菜吧" },
              { en: "I'm starving", zh: "我饿死了" },
            ],
            alternativeExpressions: [
              { textEn: "That sounds like a plan! I'll hold you to that. Now let's eat!", textZh: "就这么定了！你可不能赖账。先吃饭吧！", actionHint: "开始看菜单点菜", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do it! What do you recommend from the menu?",
            textZh: "走起！菜单上你推荐什么？",
          },
        ],
      },

      // --- Flow 2: 约会结束和后续 ---
      {
        id: "ending-date",
        titleZh: "约会结束和后续",
        titleEn: "Ending the Date and Follow-Up",
        description: "约会结束时的结账、告别和后续联系",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This was really fun. I had a great time tonight. Let me get the check.",
            textZh: "今晚真的很开心。我来买单吧。",
            culturalNote: "在美国约会，谁买单没有固定规则。主动提出买单是有诚意的表现，但对方可能会提出AA。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "Oh no, let's split it. I insist — you can get the next one!",
            textZh: "不不，我们AA吧。我坚持——下次你请！",
            keyPhrases: [
              { en: "split it", zh: "AA/各付各的" },
              { en: "I insist", zh: "我坚持" },
              { en: "get the next one", zh: "下次你请" },
            ],
            alternativeExpressions: [
              { textEn: "That's really sweet, but I'd feel better if we split it.", textZh: "你人真好，但我觉得AA比较好。", actionHint: "接受对方AA的提议", frequency: "common" },
              { textEn: "Are you sure? Thank you so much — that's really generous.", textZh: "真的吗？太谢谢了——你太大方了。", actionHint: "对方接受了你请客", frequency: "occasional" },
            ],
            vocabNotes: {
              "split it": {
                meaningInContext: "在这句话里表示：各付一半/AA制",
                similarUsage: "类似用法：Let's split the bill.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Deal! So there will be a next one? I'd really like to see you again.",
            textZh: "成交！那是说还有下次？我真的很想再见到你。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "Definitely! I had a really wonderful time. Maybe we could go hiking next weekend? There's a trail I've been wanting to try.",
            textZh: "当然！今晚真的很棒。下周末要不要去徒步？有条步道我一直想去试试。",
            keyPhrases: [
              { en: "I had a wonderful time", zh: "玩得很开心" },
              { en: "maybe we could", zh: "要不要我们" },
              { en: "I've been wanting to try", zh: "一直想去试试" },
            ],
            alternativeExpressions: [
              { textEn: "I'd love that! Tonight was so fun. How about a hike next weekend? There's this trail I've been eyeing.", textZh: "太想了！今晚太开心了。下周末去徒步怎么样？有条步道我一直想去。", actionHint: "欣然答应", frequency: "common" },
              { textEn: "Absolutely! This was great. Want to do something outdoorsy next time? I know a perfect hiking spot.", textZh: "当然！今晚很棒。下次来个户外活动？我知道一个绝佳的徒步地点。", actionHint: "表达期待", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love that! Just send me the details and I'll be there.",
            textZh: "太好了！把具体信息发给我，我一定到。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I'll text you tomorrow with the plan. Oh, it's getting late — I should probably call an Uber.",
            textZh: "明天发消息告诉你安排。哦，不早了——我应该叫个 Uber 了。",
            keyPhrases: [
              { en: "text you tomorrow", zh: "明天发消息给你" },
              { en: "it's getting late", zh: "不早了" },
              { en: "call an Uber", zh: "叫个 Uber" },
            ],
            alternativeExpressions: [
              { textEn: "Let me figure out the details and text you tomorrow. Wow, it's late already — I should grab an Uber.", textZh: "我理一下细节明天发你。哇不知不觉这么晚了——我该叫个Uber了。", actionHint: "提出等她上车", frequency: "common" },
              { textEn: "I'll send you the trail info tomorrow. Oh gosh, look at the time — I need to get going.", textZh: "明天把步道信息发给你。天哪看看都几点了——我得走了。", actionHint: "提议陪她等车", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Let me wait with you until it arrives. I want to make sure you get in safely.",
            textZh: "我陪你等到车来吧。我要确认你安全上车。",
            culturalNote: "约会结束陪对方等车或确认安全到家，是很有礼貌和体贴的行为。",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "That's really sweet of you. Oh look, it's here already! Well, thank you for tonight, Wang. I had a really lovely time.",
            textZh: "你人真好。哦看，车来了！好吧，谢谢今晚，王。我真的很开心。",
            keyPhrases: [
              { en: "that's really sweet of you", zh: "你人真好" },
              { en: "lovely time", zh: "很愉快的时光" },
            ],
            alternativeExpressions: [
              { textEn: "Aw, you're such a gentleman. Oh there's my ride! Thank you for tonight — I had the best time.", textZh: "你真是个绅士。车到了！谢谢今晚——我玩得特别开心。", actionHint: "温馨告别", frequency: "common" },
              { textEn: "So thoughtful! Oh, that was fast — car's here. Well, tonight was really special. Thank you, Wang.", textZh: "太贴心了！车来得真快。今晚真的很特别。谢谢你，王。", actionHint: "道别并说晚安", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Me too! Get home safe. Text me when you're home?",
            textZh: "我也是！路上注意安全。到家告诉我一声？",
          },
          {
            speaker: "them",
            role: "约会对象",
            textEn: "I will! Good night, Wang. Talk to you tomorrow!",
            textZh: "好的！晚安，王。明天聊！",
            keyPhrases: [
              { en: "good night", zh: "晚安" },
              { en: "talk to you tomorrow", zh: "明天聊" },
            ],
            alternativeExpressions: [
              { textEn: "Promise! Night, Wang. Can't wait to chat tomorrow.", textZh: "保证！晚安王。等不及明天聊了。", actionHint: "说晚安", frequency: "common" },
              { textEn: "I'll text you the second I'm home! Good night — tonight was amazing.", textZh: "一到家就发你！晚安——今晚太棒了。", actionHint: "愉快地道晚安", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good night! Can't wait for the hiking trip!",
            textZh: "晚安！好期待徒步！",
          },
        ],
      },
    ],
  },

  // ==================== 邻居交流 ====================
  {
    id: "social-neighbor",
    category: "social",
    titleZh: "邻居交流",
    titleEn: "Talking to Neighbors",
    description: "和公寓或社区邻居的日常互动，包括打招呼、噪音问题和借东西",
    otherRole: "邻居",
    otherRoleIcon: "home",
    flows: [
      // --- Flow 1: 初次见面和日常打招呼 ---
      {
        id: "first-meeting",
        titleZh: "初次见面和日常打招呼",
        titleEn: "First Meeting and Daily Greetings",
        description: "搬进新公寓后和邻居初次见面、建立友好关系",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi there! I just moved into apartment 4B. I'm Wang — nice to meet you!",
            textZh: "你好！我刚搬进4B公寓。我叫王——很高兴认识你！",
            casualVersion: "Hey, I'm your new neighbor — just moved into 4B. I'm Wang!",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Oh, welcome to the building! I'm David — I'm in 4A, right next door. If you need anything while you're settling in, just knock!",
            textZh: "欢迎来到这栋楼！我是 David——住4A，就在隔壁。安顿期间有什么需要，敲门就行！",
            alternativeExpressions: [
              { textEn: "Hey, welcome! I'm in 4C down the hall. Let me know if you need help with anything.", textZh: "嘿，欢迎！我住走廊那头的4C。需要帮忙随时说。", actionHint: "记住邻居的名字和门号", frequency: "common" },
            ],
            keyPhrases: [
              { en: "welcome to the building", zh: "欢迎来到这栋楼" },
              { en: "right next door", zh: "就在隔壁" },
              { en: "settling in", zh: "安顿/适应新环境" },
              { en: "just knock", zh: "敲门就行" },
            ],
            vocabNotes: {
              "settling in": {
                meaningInContext: "在这句话里表示：搬进新家后的安顿过程，包括整理东西、适应环境",
                similarUsage: "类似用法：How are you settling in at your new job?",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Thanks, David! That's really kind. By the way, are there any building rules I should know about? Like quiet hours or trash days?",
            textZh: "谢谢 David！你人真好。对了，这栋楼有什么规定我需要知道的吗？比如安静时间或者倒垃圾的日子？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Good question! Quiet hours are 10 PM to 8 AM. Trash goes out on Tuesday and Friday nights — the bins are by the back door. And recycling is separate — there's a blue bin for that.",
            textZh: "问得好！安静时间是晚上10点到早上8点。垃圾周二和周五晚上扔——垃圾桶在后门旁边。回收物要分开——用蓝色垃圾桶。",
            keyPhrases: [
              { en: "quiet hours", zh: "安静时间" },
              { en: "trash goes out", zh: "倒垃圾" },
              { en: "bins", zh: "垃圾桶" },
              { en: "recycling", zh: "回收物" },
              { en: "separate", zh: "分开" },
            ],
            culturalNote: "美国公寓通常有严格的安静时间和垃圾分类规定。不遵守可能收到警告或罚款。",
            alternativeExpressions: [
              { textEn: "So basically, quiet hours are 10 to 8. Trash nights are Tuesdays and Fridays — bins out back. Oh, and recycling's separate.", textZh: "基本上安静时间是10点到8点。周二周五晚上倒垃圾——垃圾桶在后面。对了，回收物要分开。", actionHint: "记住关键信息", frequency: "common" },
              { textEn: "Main things: keep it down after 10, trash goes out Tuesdays and Fridays, and don't forget to separate your recycling.", textZh: "主要就是：10点以后安静，垃圾周二周五扔，别忘了垃圾分类。", actionHint: "记下规定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really helpful, thanks! Is there a laundry room in the building?",
            textZh: "太有用了，谢谢！楼里有洗衣房吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Yes, it's in the basement. You'll need quarters — the machines are $2.00 per wash and $1.50 for the dryer. Pro tip: avoid Sunday mornings, that's when everyone does their laundry.",
            textZh: "有的，在地下室。需要25美分硬币——洗衣机每次2美元，烘干机1.5美元。小窍门：避开周日上午，那时候大家都洗衣服。",
            keyPhrases: [
              { en: "basement", zh: "地下室" },
              { en: "quarters", zh: "25美分硬币" },
              { en: "dryer", zh: "烘干机" },
              { en: "pro tip", zh: "小窍门" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, basement. Bring quarters — machines are coin-op. Oh, and don't go Sunday morning, everyone and their mom does laundry then.", textZh: "在地下室。带硬币——是投币的。对了别周日上午去，所有人都那时候洗。", actionHint: "记住投币和时间避开", frequency: "common" },
              { textEn: "It's downstairs. You'll need quarters for the machines. Pro tip: go on a weeknight, it's way less crowded.", textZh: "在楼下。机器要投25美分硬币。小窍门：工作日晚上去，人少很多。", actionHint: "准备硬币", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know! Oh, one more thing — is the parking included with the apartment, or do I need a separate permit?",
            textZh: "长见识了！还有一个问题——停车包含在房租里吗？还是需要另外办停车证？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "You get one assigned spot in the lot — check with the super for your spot number. Street parking is free but hard to find. I'd recommend getting a neighborhood parking sticker from City Hall, just in case.",
            textZh: "你有一个指定车位——找楼管确认你的车位号。路边停车免费但很难找。建议去市政厅办一个社区停车贴，以防万一。",
            keyPhrases: [
              { en: "assigned spot", zh: "指定车位" },
              { en: "the super", zh: "楼管/管理员" },
              { en: "street parking", zh: "路边停车" },
              { en: "parking sticker", zh: "停车贴" },
              { en: "City Hall", zh: "市政厅" },
            ],
            vocabNotes: {
              "super": {
                meaningInContext: "在这句话里表示：superintendent 的缩写，即公寓楼的管理员/楼管",
                similarUsage: "类似用法：Call the super if your sink is leaking.",
              },
            },
            alternativeExpressions: [
              { textEn: "You've got a spot in the lot — talk to the super about which one's yours. Street parking is a nightmare, so I'd get a neighborhood sticker from City Hall.", textZh: "你在停车场有个车位——找楼管问哪个是你的。路边停车是噩梦，建议去市政厅办个社区贴。", actionHint: "找楼管确认车位", frequency: "common" },
              { textEn: "There's a parking spot that comes with your unit. Check with management for the number. And heads up — street parking is brutal around here.", textZh: "你的单元配了一个车位。找管理处确认号码。提醒一下——这附近路边停车很难找。", actionHint: "尽快确认车位号", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Super helpful! Thanks for all the info, David. I really appreciate it.",
            textZh: "太有用了！谢谢你的信息，David。真的很感激。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Anytime! And seriously, if you ever need anything — sugar, a screwdriver, whatever — just knock. That's what neighbors are for. Welcome again!",
            textZh: "随时！说真的，如果需要什么——糖、螺丝刀、什么都行——敲门就行。邻居嘛就是互相帮忙的。再次欢迎！",
            keyPhrases: [
              { en: "anytime", zh: "随时" },
              { en: "that's what neighbors are for", zh: "邻居嘛就是互相帮忙的" },
            ],
            alternativeExpressions: [
              { textEn: "Seriously, don't be a stranger. Need a cup of sugar, a tool, whatever — just knock. Welcome to the building!", textZh: "真的别客气。缺糖、缺工具什么的——敲门就行。欢迎入住！", actionHint: "记住这个友好的邻居", frequency: "common" },
              { textEn: "I mean it — anything you need, I'm right next door. That's what neighbors are for, right? Welcome!", textZh: "我是认真的——需要什么我就在隔壁。邻居不就是互相帮忙嘛？欢迎！", actionHint: "感谢热情的邻居", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 噪音问题和借东西 ---
      {
        id: "noise-borrowing",
        titleZh: "噪音问题和借东西",
        titleEn: "Noise Issues and Borrowing Things",
        description: "和邻居沟通噪音问题或借用物品",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "邻居",
            textEn: "Hey Wang, sorry to bother you. I don't want to be that neighbor, but the music last night was a bit loud. I have an early shift and I couldn't fall asleep.",
            textZh: "嘿王，不好意思打扰你。我不想当那种邻居，但昨晚的音乐有点大声。我早班，没法入睡。",
            keyPhrases: [
              { en: "sorry to bother you", zh: "不好意思打扰你" },
              { en: "I don't want to be that neighbor", zh: "我不想当那种（爱投诉的）邻居" },
              { en: "a bit loud", zh: "有点大声" },
              { en: "early shift", zh: "早班" },
            ],
            alternativeExpressions: [
              { textEn: "Hi, could you keep it down a little after 10? The walls are pretty thin.", textZh: "嗨，10点以后能小声一点吗？墙挺薄的。", actionHint: "诚恳道歉并注意以后的音量", frequency: "common" },
            ],
            vocabNotes: {
              "that neighbor": {
                meaningInContext: "在这句话里表示：那种总是投诉、不好相处的邻居",
                similarUsage: "类似用法：I don't want to be that person who complains all the time.",
              },
            },
            culturalNote: "邻居直接来找你说噪音问题，其实是友好的做法。不友好的做法是直接打电话报警或投诉管理处。",
          },
          {
            speaker: "you",
            textEn: "Oh, I'm really sorry about that! I had a couple of friends over and we lost track of time. It won't happen again.",
            textZh: "哦，真的很抱歉！朋友来了没注意时间。不会再发生了。",
            culturalNote: "被投诉噪音时，真诚道歉是最好的回应。不要找借口或反驳。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "No worries at all — I totally get it, we all have friends over sometimes. Just maybe keep it down after 10? The walls in this building are like paper, ha.",
            textZh: "没关系——完全理解，大家都会有朋友来。就是10点以后稍微小声一点？这楼的墙跟纸一样薄，哈。",
            keyPhrases: [
              { en: "I totally get it", zh: "完全理解" },
              { en: "keep it down", zh: "小声一点" },
              { en: "like paper", zh: "像纸一样薄" },
            ],
            alternativeExpressions: [
              { textEn: "It's all good, really. We've all been there. Just try to keep it down after 10 — these walls are paper-thin, ha.", textZh: "真没事。谁都有这种时候。10点以后尽量小声就行——这墙薄得跟纸一样，哈。", actionHint: "保证以后注意", frequency: "common" },
              { textEn: "Honestly, no biggie. I just wanted to mention it. The soundproofing here is basically nonexistent.", textZh: "说实话没事。就是提一下。这楼的隔音基本等于零。", actionHint: "理解并保证改进", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely, I'll be more mindful. Hey, while you're here — do you happen to have a power drill I could borrow? I need to hang some shelves.",
            textZh: "一定注意。对了，趁你在——你有电钻可以借我用一下吗？我要挂几个架子。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Sure! I have one. Let me go grab it. Just one thing — try not to drill during quiet hours, or Mrs. Chen in 3B will definitely let you know about it!",
            textZh: "有的！我去拿。就一件事——尽量别在安静时间打孔，不然3B的陈太太一定会找你！",
            keyPhrases: [
              { en: "let me go grab it", zh: "我去拿" },
              { en: "drill during quiet hours", zh: "在安静时间打孔" },
              { en: "let you know about it", zh: "来找你/投诉" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, I've got one! Just bring it back when you're done. No rush.", textZh: "有啊！用完还回来就行。不急。", actionHint: "用完及时归还", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, noted! I'll do it during the afternoon. Is there anything you need? I'm going to the store later.",
            textZh: "哈哈，收到！我下午打。你有什么需要的吗？我等下去超市。",
            culturalNote: "借东西后主动问邻居需不需要帮忙带东西，是维持好邻居关系的加分项。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Actually, could you grab me a carton of milk? I keep forgetting. I'll pay you back, of course.",
            textZh: "还真有！能帮我带一盒牛奶吗？我老是忘。肯定给你钱。",
            keyPhrases: [
              { en: "grab me", zh: "帮我带" },
              { en: "carton of milk", zh: "一盒牛奶" },
              { en: "I keep forgetting", zh: "我老是忘" },
              { en: "pay you back", zh: "还你钱" },
            ],
            alternativeExpressions: [
              { textEn: "Oh actually — could you pick up some milk for me? I keep running out. I'll Venmo you.", textZh: "还真有——能帮我买盒牛奶吗？我老是忘。我Venmo转给你。", actionHint: "问清牛奶种类", frequency: "common" },
              { textEn: "If it's not too much trouble, could you grab milk? Whole milk. I'll pay you back!", textZh: "不麻烦的话能帮我带牛奶吗？全脂的。钱给你！", actionHint: "爽快答应", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course! Don't worry about paying me back — consider it a thank you for the drill. Whole milk or skim?",
            textZh: "当然！不用还钱——就当谢谢你借我电钻。全脂还是脱脂？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Aw, that's nice of you. Whole milk, please. You know, you're a great neighbor. The last person in 4B never said a word to anyone!",
            textZh: "你太客气了。全脂的吧。你知道吗，你是个好邻居。4B之前那个人从来不跟人说话！",
            keyPhrases: [
              { en: "whole milk", zh: "全脂牛奶" },
              { en: "skim", zh: "脱脂牛奶" },
              { en: "never said a word", zh: "从不搭话" },
            ],
            alternativeExpressions: [
              { textEn: "You're too sweet. Whole milk, thanks! Honestly, you're the best neighbor I've had. The last tenant was basically a ghost.", textZh: "你太好了。全脂的，谢谢！说真的你是我遇到最好的邻居。上一个房客跟隐形人似的。", actionHint: "开心地接受夸奖", frequency: "common" },
              { textEn: "Aw thanks! Whole please. And seriously, it's so nice having a friendly neighbor for once!", textZh: "谢谢！要全脂的。说真的终于有个友好的邻居了，太好了！", actionHint: "保持友好关系", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, well I'm happy to be an upgrade! I'll drop off the milk later. See you!",
            textZh: "哈哈，那我算是个进步！等下给你送牛奶。回见！",
          },
        ],
      },
    ],
  },

  // ==================== 职场社交 ====================
  {
    id: "social-workplace",
    category: "social",
    titleZh: "职场社交",
    titleEn: "Workplace Socializing",
    description: "在办公室的非正式社交场景，包括茶水间闲聊、午餐邀请和下班后聚会",
    otherRole: "同事",
    otherRoleIcon: "briefcase",
    flows: [
      // --- Flow 1: 办公室闲聊 ---
      {
        id: "office-smalltalk",
        titleZh: "办公室闲聊",
        titleEn: "Office Small Talk",
        description: "在茶水间、电梯或走廊和同事闲聊",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "Morning, Wang! How was your weekend? Did you end up doing anything fun?",
            textZh: "早啊，王！周末怎么样？有做什么好玩的吗？",
            keyPhrases: [
              { en: "how was your weekend", zh: "周末怎么样" },
              { en: "end up doing", zh: "最终做了什么" },
            ],
            alternativeExpressions: [
              { textEn: "Hey Wang! Happy Monday. Got any weekend highlights?", textZh: "嘿王！周一好。周末有什么亮点？", actionHint: "简单分享一下周末", frequency: "common" },
              { textEn: "Hi! How's it going this morning?", textZh: "嗨！今天早上怎么样？", actionHint: "简短回答就好", frequency: "common" },
            ],
            vocabNotes: {
              "end up": {
                meaningInContext: "在这句话里表示：最终做了（某事），常用于问计划是否实现",
                similarUsage: "类似用法：We ended up staying home because of the rain.",
              },
            },
            responseTip: "周一早上的闲聊是最常见的职场社交。简短分享一两件事就好，不用太详细。",
          },
          {
            speaker: "you",
            textEn: "Morning! It was great, actually. I went hiking at Bear Mountain — the fall colors were amazing. How about you?",
            textZh: "早！其实挺好的。我去了熊山徒步——秋天的颜色太美了。你呢？",
            culturalNote: "分享周末活动时加一个细节（如秋色很美）能让对话更有趣，但不要说太久。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Oh nice! I've been meaning to go there. I just stayed home and binge-watched a new show. Super lazy weekend but I needed it.",
            textZh: "不错！我一直想去那里。我就待在家追了一部新剧。超懒的周末但我需要。",
            keyPhrases: [
              { en: "I've been meaning to", zh: "我一直想（做某事）" },
              { en: "binge-watched", zh: "追剧/一口气看完" },
              { en: "I needed it", zh: "我需要这样的休息" },
            ],
            vocabNotes: {
              "binge-watched": {
                meaningInContext: "在这句话里表示：一口气连续看了很多集电视剧",
                similarUsage: "类似用法：I binge-watched the entire season in one day.",
              },
            },
            alternativeExpressions: [
              { textEn: "Sounds great! I need to check that out. I was a total couch potato — binged a whole season of this new show.", textZh: "听着不错！我得去看看。我完全是沙发土豆——追了一整季新剧。", actionHint: "问是什么剧", frequency: "common" },
              { textEn: "That sounds awesome, I should go sometime. I literally didn't leave the house — just watched TV all weekend.", textZh: "听着好棒，我找时间去。我整个周末没出门——就看电视了。", actionHint: "问看了什么", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sometimes you just need a lazy weekend! What show were you watching?",
            textZh: "有时候就需要懒一下！你在看什么剧？",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "It's called 'Severance' on Apple TV. Have you seen it? It's a thriller about a company that separates work memories from personal ones. So creepy but so good.",
            textZh: "叫《人生切割术》，在 Apple TV 上。你看过吗？是一部关于公司把工作记忆和个人记忆分开的悬疑剧。很诡异但超好看。",
            keyPhrases: [
              { en: "have you seen it", zh: "你看过吗" },
              { en: "thriller", zh: "悬疑剧" },
              { en: "creepy but good", zh: "诡异但好看" },
            ],
            alternativeExpressions: [
              { textEn: "You gotta watch Severance on Apple TV. It's about this company that can erase your work memories. Totally wild.", textZh: "你一定要看Apple TV上的Severance。讲一个公司可以擦除工作记忆。太疯了。", actionHint: "加到追剧清单", frequency: "common" },
              { textEn: "Have you seen Severance? It's this crazy sci-fi thriller. The concept is so creepy but you can't stop watching.", textZh: "你看过Severance吗？是个疯狂的科幻悬疑剧。概念超诡异但根本停不下来。", actionHint: "表示感兴趣", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I haven't, but that sounds fascinating! I'll add it to my list. Oh, did you see the email about the team meeting this afternoon?",
            textZh: "没看过，听着好吸引人！我加到清单里。对了，你看到今天下午团队会议的邮件了吗？",
            culturalNote: "从个人话题自然过渡到工作话题是很正常的。不需要特别分割。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yeah, I saw it. Sounds like they're announcing the new project assignments. Fingers crossed we're on the same team! Alright, I need to grab my coffee before the morning rush. Catch you later!",
            textZh: "看了。好像是要公布新项目分组。希望我们分在一组！行了，趁早上人还少我去拿咖啡。回头见！",
            keyPhrases: [
              { en: "fingers crossed", zh: "祈祷/希望" },
              { en: "on the same team", zh: "在同一组" },
              { en: "morning rush", zh: "早上高峰" },
              { en: "catch you later", zh: "回头见" },
            ],
            vocabNotes: {
              "fingers crossed": {
                meaningInContext: "在这句话里表示：祈祷/希望（好运），来自交叉手指祈福的手势",
                similarUsage: "类似用法：Fingers crossed the weather is nice this weekend.",
              },
            },
            alternativeExpressions: [
              { textEn: "Yeah, saw that. Apparently it's about new project teams. Hoping we end up on the same one! Anyway, coffee run — catch you later!", textZh: "看了。好像是关于新项目分组。希望我们分在一起！先去拿咖啡——回头见！", actionHint: "期待好消息", frequency: "common" },
              { textEn: "Yep! Sounds like they're reshuffling teams. Fingers crossed! OK I need caffeine. See you at the meeting!", textZh: "对！好像要重新分组。祈祷吧！我需要咖啡因。会上见！", actionHint: "去准备开会", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Fingers crossed! See you at the meeting. Enjoy your coffee!",
            textZh: "一起祈祷！会议见。享受你的咖啡！",
          },
        ],
      },

      // --- Flow 2: 午餐邀请和下班后聚会 ---
      {
        id: "lunch-afterwork",
        titleZh: "午餐邀请和下班后聚会",
        titleEn: "Lunch Invitation and After-Work Drinks",
        description: "被同事邀请一起午餐或下班后聚会",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "同事",
            textEn: "Hey Wang, a bunch of us are going to that new Thai place for lunch. Want to come? We're leaving in about 10 minutes.",
            textZh: "嘿王，我们几个人中午要去那家新开的泰国餐厅。要来吗？大概10分钟后出发。",
            keyPhrases: [
              { en: "a bunch of us", zh: "我们几个人" },
              { en: "want to come", zh: "要来吗" },
              { en: "leaving in about", zh: "大概几分钟后出发" },
            ],
            alternativeExpressions: [
              { textEn: "We're grabbing lunch downstairs — come join us!", textZh: "我们去楼下吃午饭——一起来！", actionHint: "一起去就行", frequency: "common" },
              { textEn: "You free for lunch? We're trying out a new restaurant.", textZh: "午饭有空吗？我们去试一家新餐厅。", actionHint: "确认一下然后一起去", frequency: "common" },
            ],
            vocabNotes: {
              "a bunch of us": {
                meaningInContext: "在这句话里表示：我们一群人/好几个人，口语化的说法",
                similarUsage: "类似用法：A bunch of us went to the concert last night.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "I'd love to! Just let me finish this email real quick. I'll meet you in the lobby.",
            textZh: "好啊！让我先把这封邮件发完。我在大堂等你们。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Sounds good! Oh, heads up — they don't take reservations and it gets packed around noon, so we should get there a bit early.",
            textZh: "好！提醒一下——他们不接受预订，中午12点会很挤，所以我们早点到比较好。",
            keyPhrases: [
              { en: "heads up", zh: "提醒一下" },
              { en: "don't take reservations", zh: "不接受预订" },
              { en: "gets packed", zh: "会很挤" },
            ],
            vocabNotes: {
              "heads up": {
                meaningInContext: "在这句话里表示：提前提醒/给你个信息",
                similarUsage: "类似用法：Just a heads up — the boss is in a bad mood today.",
              },
              "packed": {
                meaningInContext: "在这句话里表示：人挤人/非常满",
                similarUsage: "类似用法：The subway was packed during rush hour.",
              },
            },
            alternativeExpressions: [
              { textEn: "Cool! Just FYI, they don't do reservations and it fills up fast at noon, so let's hustle.", textZh: "好！提醒一下，他们不接受预订而且中午很快就满了，咱们赶紧走。", actionHint: "加快速度", frequency: "common" },
              { textEn: "Great! Heads up though — no reservations and it gets crazy around lunchtime. We should bounce soon.", textZh: "太好！不过提醒一下——不接受预订而且午饭时间人超多。我们得快点出发。", actionHint: "赶紧出发", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it, I'll hurry. Is it within walking distance?",
            textZh: "了解，我快点。走路能到吗？",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yeah, it's just around the corner — like a 5-minute walk. Oh, and the pad thai is supposed to be really good. Someone from accounting raved about it.",
            textZh: "能，就在拐角处——走路大概5分钟。对了，听说泰式炒河粉特别好吃。会计部有人赞不绝口。",
            keyPhrases: [
              { en: "around the corner", zh: "就在拐角处" },
              { en: "is supposed to be", zh: "听说是/据说是" },
              { en: "raved about it", zh: "赞不绝口" },
            ],
            alternativeExpressions: [
              { textEn: "Super close — just down the block. Oh and apparently the pad thai is bomb. Someone in accounting was raving about it.", textZh: "超近——就在这条街上。对了听说泰式炒河粉巨好吃。会计部的人赞不绝口。", actionHint: "期待美食", frequency: "common" },
              { textEn: "Yeah, it's right there, like a five-minute walk tops. The pad thai is supposed to be legit.", textZh: "就在那边，最多走五分钟。听说泰式炒河粉特别正宗。", actionHint: "一起走过去", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice, I love pad thai! Hey, I also heard some people are going out for drinks after work on Friday. Do you know the details?",
            textZh: "不错，我爱泰式炒河粉！对了，听说周五有人下班后要去喝一杯。你知道具体安排吗？",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Yeah, it's a thing we do once a month — TGIF drinks. We usually go to O'Malley's, the Irish pub two blocks from here. Super chill, no pressure. You should totally come!",
            textZh: "对，我们每月一次——周五庆祝活动。通常去 O'Malley's，离这两个街区的爱尔兰酒吧。很轻松，没有压力。你一定要来！",
            keyPhrases: [
              { en: "TGIF", zh: "感谢上帝今天是周五" },
              { en: "super chill", zh: "很轻松" },
              { en: "no pressure", zh: "没有压力" },
              { en: "you should totally come", zh: "你一定要来" },
            ],
            alternativeExpressions: [
              { textEn: "It's pretty casual — just a few beers and some laughs. The whole team's invited.", textZh: "很随意的——就是喝几杯聊聊天。整个团队都邀请了。", actionHint: "放轻松去参加就好", frequency: "common" },
            ],
            vocabNotes: {
              "TGIF": {
                meaningInContext: "在这句话里表示：Thank God It's Friday 的缩写，庆祝周末到来",
                similarUsage: "类似用法：TGIF! I can finally relax this weekend.",
              },
              "chill": {
                meaningInContext: "在这句话里表示：轻松的、没有压力的氛围",
                similarUsage: "类似用法：Let's just have a chill evening at home.",
              },
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great! Is the boss coming too, or is it just us?",
            textZh: "听起来不错！老板也来吗？还是就我们？",
            culturalNote: "了解老板是否参加有助于判断氛围是否轻松。有老板在可能需要注意言行。",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Karen usually stops by for one drink and then heads out. She's pretty cool about it — doesn't make it weird. After she leaves, that's when the real fun starts!",
            textZh: "Karen 通常过来喝一杯就走。她这方面挺酷的——不会让人觉得尴尬。她走了之后才是真正好玩的时候！",
            keyPhrases: [
              { en: "stops by", zh: "过来一下/短暂出现" },
              { en: "heads out", zh: "走了/离开" },
              { en: "doesn't make it weird", zh: "不会让人觉得尴尬" },
              { en: "the real fun starts", zh: "真正好玩的时候开始" },
            ],
            alternativeExpressions: [
              { textEn: "The boss usually pops in for a quick drink and bounces. Once she's gone, that's when things get fun!", textZh: "老板通常来喝一杯就走。她走了之后才是真正嗨的时候！", actionHint: "了解氛围会很轻松", frequency: "common" },
              { textEn: "Karen shows up, has one beer, makes some small talk, and dips. She's cool about it. After that it's game on!", textZh: "Karen会来，喝杯啤酒聊两句就闪了。她这方面挺酷的。她走了就可以放飞了！", actionHint: "不用太紧张", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha, good to know! I'm in for Friday. Should I RSVP to someone, or just show up?",
            textZh: "哈哈，了解了！周五我参加。需要跟谁确认，还是直接去？",
          },
          {
            speaker: "them",
            role: "同事",
            textEn: "Just show up! It's super informal. We usually gather in the lobby around 5:30 and walk over together. I'll remind you on Friday morning. Now let's go — I'm starving!",
            textZh: "直接来就行！很随意的。我们通常5:30在大堂集合一起走。周五上午我提醒你。走吧——我饿死了！",
            keyPhrases: [
              { en: "just show up", zh: "直接来就行" },
              { en: "super informal", zh: "很随意" },
              { en: "gather in the lobby", zh: "在大堂集合" },
              { en: "remind you", zh: "提醒你" },
            ],
            alternativeExpressions: [
              { textEn: "No RSVP needed — just come! We usually meet at 5:30 downstairs and walk over. I'll ping you Friday morning.", textZh: "不用报名——直接来！通常5:30楼下集合一起走。周五早上我提醒你。", actionHint: "周五准时到大堂", frequency: "common" },
              { textEn: "Nah, just rock up. We all head down to the lobby around 5:30 and go together. I'll shoot you a reminder. Now let's eat!", textZh: "不用，直接来就行。5:30左右在大堂集合一起去。我会提醒你的。走吃饭吧！", actionHint: "期待周五", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 志愿者活动 ====================
  {
    id: "social-volunteer",
    category: "social",
    titleZh: "志愿者活动",
    titleEn: "Community Volunteering",
    description: "参加当地社区志愿者活动，报名、了解任务分配和与其他志愿者交流",
    otherRole: "活动协调员/志愿者",
    otherRoleIcon: "heart",
    flows: [
      // --- Flow 1: 报名参加 ---
      {
        id: "sign-up",
        titleZh: "报名参加",
        titleEn: "Signing Up to Volunteer",
        description: "在社区中心或活动现场报名参加志愿者活动",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I saw a flyer about a beach clean-up this Saturday. Can I still sign up?",
            textZh: "你好，我看到一张传单说这周六有海滩清洁活动。我还能报名吗？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Absolutely! We'd love to have you. It's from 9 AM to noon. Just fill out this volunteer registration form — name, email, and emergency contact.",
            textZh: "当然！欢迎参加。活动时间是早上9点到中午12点。填一下这张志愿者登记表——姓名、邮箱和紧急联系人。",
            keyPhrases: [
              { en: "sign up", zh: "报名" },
              { en: "volunteer registration form", zh: "志愿者登记表" },
              { en: "emergency contact", zh: "紧急联系人" },
            ],
            variations: [
              { textEn: "Yes, spots are still open! Let me get you a sign-up sheet.", textZh: "有的，还有名额！我拿登记表给你。" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! We always need more hands. It's 9 to noon on Saturday. Just fill out this quick form.", textZh: "当然！我们总是需要更多人手。周六9点到中午。填一下这个简单表格就行。", actionHint: "填写登记表", frequency: "common" },
              { textEn: "Yes, absolutely! Sign-ups are still open. It runs from 9 to 12. I just need your name and email.", textZh: "当然可以！还在报名中。9点到12点。只需要你的名字和邮箱。", actionHint: "提供个人信息", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Here you go. Do I need to bring anything? Like gloves or bags?",
            textZh: "给你。我需要带什么吗？比如手套或袋子？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "We provide gloves, trash bags, and grabbers. Just wear comfortable clothes you don't mind getting dirty, closed-toe shoes, and bring sunscreen and water. We'll also have snacks and drinks for everyone.",
            textZh: "我们提供手套、垃圾袋和拾物钳。穿舒服的、不怕弄脏的衣服，穿包头鞋，带上防晒霜和水。我们还会给大家准备零食和饮料。",
            keyPhrases: [
              { en: "grabbers", zh: "拾物钳" },
              { en: "closed-toe shoes", zh: "包头鞋" },
              { en: "don't mind getting dirty", zh: "不怕弄脏" },
            ],
            alternativeExpressions: [
              { textEn: "We've got everything you need — gloves, bags, the whole deal. Just wear stuff you don't mind getting messy. And bring water!", textZh: "我们什么都准备了——手套、袋子全套。穿不怕脏的衣服就行。带水！", actionHint: "穿不怕脏的衣服", frequency: "common" },
              { textEn: "Don't worry about gear — it's all provided. Just show up in comfy clothes and closed shoes. We'll have snacks too!", textZh: "装备不用操心——都有。穿舒服的衣服和包头鞋来就行。我们也准备了零食！", actionHint: "准备舒适的衣物", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds great. Will I get a volunteer certificate? I'm collecting community service hours.",
            textZh: "太好了。会有志愿者证书吗？我在攒社区服务时间。",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "Yes! We'll email you a certificate of participation with your hours logged. If you need it signed, just ask the team leader on Saturday. We also post photos on our social media — follow us if you'd like!",
            textZh: "有的！我们会把参与证书和记录的时间发到你的邮箱。如果需要签名版的，周六找组长就行。我们还会在社交媒体上发照片——感兴趣的话可以关注我们！",
            keyPhrases: [
              { en: "certificate of participation", zh: "参与证书" },
              { en: "hours logged", zh: "记录的时间" },
              { en: "team leader", zh: "组长" },
            ],
            alternativeExpressions: [
              { textEn: "Yep! You'll get a certificate emailed to you with your hours. If you need a signed copy, just grab the team leader on the day.", textZh: "有！证书会连同你的时间发到你邮箱。需要签名版的话当天找组长就行。", actionHint: "记住找组长签名", frequency: "common" },
              { textEn: "Totally! We send out digital certificates after the event. Just make sure your email on the form is correct.", textZh: "当然！活动后我们会发电子证书。确保表格上的邮箱是对的就行。", actionHint: "核实邮箱地址", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll definitely follow you. Is there a meeting point, or do I just go straight to the beach?",
            textZh: "我一定关注。有集合点吗，还是直接去海滩？",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "We meet at the parking lot next to the lifeguard tower at 8:45 AM. Look for the blue tent — that's our check-in station. We'll do a brief safety talk, then split into groups.",
            textZh: "我们早上8:45在救生塔旁边的停车场集合。找蓝色帐篷——那是我们的签到站。我们会做一个简短的安全说明，然后分组。",
            keyPhrases: [
              { en: "meeting point", zh: "集合点" },
              { en: "check-in station", zh: "签到站" },
              { en: "safety talk", zh: "安全说明" },
              { en: "split into groups", zh: "分组" },
            ],
            alternativeExpressions: [
              { textEn: "Show up at the parking lot by the lifeguard tower around 8:45. You'll see our blue tent — that's check-in.", textZh: "8:45左右到救生塔旁边的停车场。看到蓝色帐篷——那就是签到处。", actionHint: "找蓝色帐篷签到", frequency: "common" },
              { textEn: "Meet-up is at 8:45 in the lot near the lifeguard stand. Look for the big blue tent. Quick safety briefing, then we split up.", textZh: "8:45在救生站旁边停车场集合。找大蓝帐篷。简短安全说明后就分组行动。", actionHint: "提前到达", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can I bring a friend? She's interested too.",
            textZh: "好的。我能带一个朋友吗？她也感兴趣。",
          },
          {
            speaker: "them",
            role: "协调员",
            textEn: "The more the merrier! Just have her fill out a form when she gets there, or she can register online — I'll text you the link. See you Saturday!",
            textZh: "人越多越好！让她到了填个表就行，或者可以在线注册——我把链接发给你。周六见！",
            keyPhrases: [
              { en: "the more the merrier", zh: "人越多越好" },
              { en: "register online", zh: "在线注册" },
            ],
            culturalNote: "\"The more the merrier\" 是英语常用表达，意思是越多人参加越开心。志愿者活动通常非常欢迎带朋友。",
            alternativeExpressions: [
              { textEn: "Bring her along! The more people, the better. She can sign up on the spot or register online — I'll send you the link.", textZh: "带她来！人越多越好。她可以现场报名或网上注册——链接发给你。", actionHint: "转发链接给朋友", frequency: "common" },
              { textEn: "Of course! Walk-ins are totally welcome. Or she can register ahead of time online — let me text you the link.", textZh: "当然！临时来也完全可以。或者提前网上注册——我把链接发给你。", actionHint: "把链接分享给朋友", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 活动现场交流 ---
      {
        id: "on-site",
        titleZh: "活动现场交流",
        titleEn: "On-site Interaction",
        description: "在志愿者活动中与其他志愿者聊天、分工合作",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "志愿者",
            textEn: "Hey, are you new here? I don't think I've seen you before. I'm Jake.",
            textZh: "嘿，你是新来的吧？我之前没见过你。我叫Jake。",
            keyPhrases: [
              { en: "new here", zh: "新来的" },
            ],
            alternativeExpressions: [
              { textEn: "First timer? I don't recognize you. I'm Jake — been doing this for a while.", textZh: "第一次来？我没见过你。我叫Jake——做这个有一阵了。", actionHint: "自我介绍", frequency: "common" },
              { textEn: "You look new! Welcome — I'm Jake. Stick with me, I'll show you the ropes.", textZh: "看着像新来的！欢迎——我是Jake。跟着我，我带你上手。", actionHint: "感谢并自我介绍", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, it's my first time volunteering here. I'm Wang. Nice to meet you, Jake.",
            textZh: "是的，我第一次来这里做志愿者。我叫王。很高兴认识你，Jake。",
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn: "Nice to meet you too! So, our group is covering the north section of the beach. I'll handle the big stuff like driftwood and bottles. Do you want to work on the smaller debris — like cigarette butts and plastic bits?",
            textZh: "我也很高兴认识你！我们组负责海滩北边这块。我来处理大件垃圾，比如浮木和瓶子。你来捡小碎片怎么样——像烟头和塑料碎片？",
            keyPhrases: [
              { en: "covering", zh: "负责（某区域）" },
              { en: "debris", zh: "碎片/垃圾" },
              { en: "cigarette butts", zh: "烟头" },
            ],
            alternativeExpressions: [
              { textEn: "Cool! So we've got the north end. I'll take the big junk — you wanna handle the smaller stuff like butts and wrappers?", textZh: "好的！我们负责北边。我来搞大件垃圾——你来捡小碎片比如烟头和包装纸？", actionHint: "接受分工", frequency: "common" },
              { textEn: "Great to meet you! OK so our zone is the north beach. Want to split it up? I can do the heavy stuff and you grab the little bits?", textZh: "认识你很高兴！我们区域是北边海滩。分工一下？我搬重的你捡小的？", actionHint: "同意分工", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I can do that. Do you volunteer here often?",
            textZh: "好的，没问题。你经常来做志愿者吗？",
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn: "About once a month. It's a great way to meet people and give back to the community. Plus, it looks good on a resume — not gonna lie! Are you from around here?",
            textZh: "大概一个月一次。认识新朋友、回馈社区的好方式。而且说实话——写在简历上也挺好看的！你是本地人吗？",
            keyPhrases: [
              { en: "give back to the community", zh: "回馈社区" },
              { en: "looks good on a resume", zh: "写在简历上好看" },
              { en: "not gonna lie", zh: "说实话" },
            ],
            alternativeExpressions: [
              { textEn: "Pretty regularly — like once a month. It's fun, you meet cool people, and honestly it's good for the resume too!", textZh: "挺规律的——大概一个月一次。很好玩，能认识有趣的人，说实话放简历上也不错！", actionHint: "继续聊天", frequency: "common" },
              { textEn: "I try to come every month. Feels good to give back, you know? Plus it's a solid way to make friends.", textZh: "我尽量每个月都来。回馈社区的感觉挺好的。而且也是交朋友的好方式。", actionHint: "表示认同", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I'm visiting from China. I thought volunteering would be a great way to experience local culture and practice my English.",
            textZh: "其实我是从中国来的。我觉得做志愿者是体验当地文化和练英语的好方式。",
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn: "That's awesome! Your English is really good, by the way. Hey, a bunch of us are grabbing lunch after this — want to join? There's a great taco place nearby.",
            textZh: "太棒了！对了，你英语真的很好。嘿，活动结束后我们一群人要去吃午饭——想一起吗？附近有一家很棒的墨西哥卷饼店。",
            keyPhrases: [
              { en: "a bunch of us", zh: "我们一群人" },
              { en: "grabbing lunch", zh: "去吃午饭" },
              { en: "want to join", zh: "想一起吗" },
            ],
            culturalNote: "志愿者活动后一起吃饭是很常见的社交方式。这是融入当地圈子的好机会，大方接受就好。",
            alternativeExpressions: [
              { textEn: "That's so cool! By the way, your English is great. Hey, some of us are getting food after — wanna come?", textZh: "太酷了！对了你英语真好。嘿活动结束后一些人要去吃饭——一起？", actionHint: "开心接受邀请", frequency: "common" },
              { textEn: "Love that idea! And seriously, your English is impressive. Listen, we're doing lunch after this — you should totally join us.", textZh: "这想法太好了！说真的你英语很棒。我们活动后去吃饭——你一定要一起来。", actionHint: "大方接受", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love to! That sounds like fun. Thanks for including me.",
            textZh: "太好了！听起来很有意思。谢谢邀请我。",
          },
          {
            speaker: "them",
            role: "志愿者",
            textEn: "Of course! Let me give you my number so we can stay in touch. We do different volunteer events every month — food bank, park clean-up, stuff like that.",
            textZh: "当然！我把号码给你，这样我们能保持联系。我们每个月做不同的志愿活动——食物银行、公园清洁之类的。",
            keyPhrases: [
              { en: "stay in touch", zh: "保持联系" },
              { en: "food bank", zh: "食物银行/慈善食品站" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Here, put your number in my phone. We do different stuff every month — I'll keep you in the loop.", textZh: "当然！来把号码存我手机里。我们每个月活动不一样——我把你加进来。", actionHint: "交换联系方式", frequency: "common" },
              { textEn: "Definitely! Let's swap numbers. I'll add you to our volunteer group chat — we post about upcoming events there.", textZh: "一定！我们交换号码。我把你加到志愿者群聊——里面会发活动信息。", actionHint: "加入志愿者群", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 宗教场所 ====================
  {
    id: "social-religious",
    category: "social",
    titleZh: "宗教场所",
    titleEn: "Visiting Religious Sites",
    description: "参观教堂、寺庙等宗教场所，了解参观礼仪和文化背景",
    otherRole: "教堂/寺庙工作人员",
    otherRoleIcon: "church",
    flows: [
      // --- Flow 1: 参观教堂 ---
      {
        id: "church-visit",
        titleZh: "参观教堂",
        titleEn: "Visiting a Church",
        description: "作为游客参观教堂，了解礼仪规范和历史",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is the church open to visitors right now?",
            textZh: "请问，教堂现在对游客开放吗？",
          },
          {
            speaker: "them",
            role: "教堂工作人员",
            textEn: "Yes, you're welcome to come in. We just ask that you keep your voice low — there may be people praying. There's no entry fee, but donations are appreciated.",
            textZh: "是的，欢迎进来。只是请保持低声——可能有人在祈祷。不收门票，但欢迎捐献。",
            keyPhrases: [
              { en: "keep your voice low", zh: "保持低声" },
              { en: "praying", zh: "祈祷" },
              { en: "donations are appreciated", zh: "欢迎捐献" },
            ],
            variations: [
              { textEn: "Of course! Visiting hours are until 5 PM. Please be respectful of any ongoing services.", textZh: "当然！参观时间到下午5点。请尊重正在进行的仪式。" },
            ],
            alternativeExpressions: [
              { textEn: "Come on in! Just keep it quiet — there might be folks praying. No admission fee, but we accept donations.", textZh: "进来吧！小声一点就好——可能有人在祈祷。不收门票，但接受捐款。", actionHint: "保持安静进入", frequency: "common" },
              { textEn: "Of course, the doors are always open! Please just be mindful of the volume. Donations are welcome but not required.", textZh: "当然，大门一直敞开！请注意音量。欢迎捐款但不强制。", actionHint: "轻声进入参观", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Is it okay to take photos inside?",
            textZh: "里面可以拍照吗？",
          },
          {
            speaker: "them",
            role: "教堂工作人员",
            textEn: "Photos are fine in most areas, but please don't use flash. And please don't take photos of people who are praying without their permission. The stained glass windows are especially beautiful — everyone loves photographing those.",
            textZh: "大部分区域可以拍照，但请不要用闪光灯。也请不要未经允许拍正在祈祷的人。彩色玻璃窗特别漂亮——大家都喜欢拍那些。",
            keyPhrases: [
              { en: "flash", zh: "闪光灯" },
              { en: "stained glass windows", zh: "彩色玻璃窗" },
              { en: "without their permission", zh: "未经允许" },
            ],
            alternativeExpressions: [
              { textEn: "Go ahead and take photos — just no flash, please. And try not to photograph anyone who's praying. The windows are stunning, by the way!", textZh: "拍照没问题——别用闪光灯就行。尽量不要拍正在祈祷的人。对了玻璃窗超美的！", actionHint: "关闭闪光灯拍照", frequency: "common" },
              { textEn: "Photography's fine, just be respectful — no flash and avoid shooting people at prayer. The stained glass is a must-shoot!", textZh: "拍照可以，注意礼貌就好——不开闪光灯，别拍祈祷的人。彩色玻璃窗一定要拍！", actionHint: "拍彩色玻璃窗", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "This building is gorgeous. How old is this church?",
            textZh: "这栋建筑太漂亮了。这座教堂有多久的历史了？",
          },
          {
            speaker: "them",
            role: "教堂工作人员",
            textEn: "It was built in 1892, so over 130 years old. The original architect was inspired by Gothic cathedrals in France. We have a self-guided brochure if you'd like to learn more about the history and architecture.",
            textZh: "建于1892年，已经超过130年了。最初的建筑师受法国哥特式大教堂的启发。我们有一份自助导览手册，如果你想了解更多历史和建筑知识的话。",
            keyPhrases: [
              { en: "architect", zh: "建筑师" },
              { en: "Gothic cathedrals", zh: "哥特式大教堂" },
              { en: "self-guided brochure", zh: "自助导览手册" },
            ],
            alternativeExpressions: [
              { textEn: "It dates back to 1892 — over 130 years! The design was inspired by French Gothic style. We've got a brochure if you want the full story.", textZh: "建于1892年——超过130年了！设计灵感来自法国哥特式风格。有导览手册可以了解更多。", actionHint: "拿一份导览手册", frequency: "common" },
              { textEn: "She's been standing since 1892! Beautiful Gothic Revival architecture. There's a self-guided tour pamphlet you can grab.", textZh: "从1892年就矗立在这里了！漂亮的哥特复兴式建筑。有自助导览册可以拿。", actionHint: "索取导览册", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love a brochure, thanks. Is there a dress code? I'm wearing shorts — is that okay?",
            textZh: "我要一份手册，谢谢。有着装要求吗？我穿着短裤——可以吗？",
          },
          {
            speaker: "them",
            role: "教堂工作人员",
            textEn: "For casual visits, that's fine. But if you attend a service, it's best to dress modestly — long pants and covered shoulders. Some churches in Europe are stricter about this, especially in Italy and Spain.",
            textZh: "随便参观的话没问题。但如果参加仪式，最好穿得端庄一些——长裤、遮住肩膀。欧洲有些教堂对这个要求更严格，特别是意大利和西班牙。",
            keyPhrases: [
              { en: "dress code", zh: "着装要求" },
              { en: "dress modestly", zh: "穿着端庄" },
              { en: "covered shoulders", zh: "遮住肩膀" },
            ],
            culturalNote: "参观梵蒂冈、米兰大教堂等欧洲著名教堂时，通常要求遮住肩膀和膝盖以上部分。有些教堂会在门口提供披肩。",
            alternativeExpressions: [
              { textEn: "For looking around? No worries at all. But for services, it's better to dress a bit more conservatively. European churches can be stricter.", textZh: "随便看看的话完全没问题。但参加仪式的话最好穿得保守一些。欧洲的教堂要求更严。", actionHint: "如果参加仪式记得换衣服", frequency: "common" },
              { textEn: "That's totally fine for a visit. Services are a bit more formal — long pants and covered shoulders are the general rule.", textZh: "参观的话完全没问题。仪式比较正式——一般要求长裤和遮住肩膀。", actionHint: "记住着装规范", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Where can I leave a donation?",
            textZh: "谢谢告知。在哪里可以捐献？",
          },
          {
            speaker: "them",
            role: "教堂工作人员",
            textEn: "There's a donation box by the entrance, or you can light a candle for a small offering — it's a beautiful tradition. The candles are over there by the altar.",
            textZh: "入口处有一个捐献箱，或者你可以点一根蜡烛作为小额奉献——这是一个很美的传统。蜡烛在那边祭坛旁。",
            keyPhrases: [
              { en: "donation box", zh: "捐献箱" },
              { en: "light a candle", zh: "点蜡烛" },
              { en: "offering", zh: "奉献" },
              { en: "altar", zh: "祭坛" },
            ],
            alternativeExpressions: [
              { textEn: "There's a box at the front for donations. You can also light a candle — it's a lovely tradition. Candles are by the altar over there.", textZh: "前面有个捐款箱。也可以点一根蜡烛——是个很美的传统。蜡烛在那边祭坛旁。", actionHint: "去点一根蜡烛", frequency: "common" },
              { textEn: "The donation box is right by the door. Or if you'd like, you can light a prayer candle — they're over by the altar.", textZh: "捐款箱就在门口。或者如果你愿意的话，可以点一根祈祷蜡烛——在祭坛那边。", actionHint: "选择捐款或点蜡烛", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 参加礼拜/仪式 ---
      {
        id: "attend-service",
        titleZh: "参加礼拜仪式",
        titleEn: "Attending a Service",
        description: "作为访客参加教堂礼拜或宗教仪式，了解流程和礼仪",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm not a member of this church, but I'd like to attend the Sunday service. Is that okay?",
            textZh: "你好，我不是这个教会的成员，但我想参加周日礼拜。可以吗？",
          },
          {
            speaker: "them",
            role: "教堂志愿者",
            textEn: "Of course! Everyone is welcome. The service starts at 10 AM and lasts about an hour. Here's a bulletin with the order of service. Just follow along — sit, stand, and sing when everyone else does.",
            textZh: "当然！所有人都欢迎。礼拜10点开始，大约一个小时。这是一份礼拜程序单。跟着大家做就行——大家坐你也坐，站你也站，唱诗也跟着唱。",
            keyPhrases: [
              { en: "bulletin", zh: "程序单" },
              { en: "order of service", zh: "礼拜流程" },
              { en: "follow along", zh: "跟着做" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely! All are welcome here. Service is at 10, runs about an hour. Here's a program — just follow along with everyone.", textZh: "当然！这里欢迎所有人。10点开始，大约一小时。这是程序单——跟着大家做就行。", actionHint: "拿好程序单跟着做", frequency: "common" },
              { textEn: "Of course — we love having visitors! It starts at 10. Just grab a seat anywhere and follow the crowd.", textZh: "当然——我们很欢迎来访者！10点开始。随便找个位子坐，跟着大家就好。", actionHint: "找个位子坐下", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Is there anything I should avoid doing? I don't want to be disrespectful.",
            textZh: "谢谢。有什么我不该做的吗？我不想失礼。",
          },
          {
            speaker: "them",
            role: "教堂志愿者",
            textEn: "You're very thoughtful! Just silence your phone, and don't walk around during prayers or the sermon. During Communion — that's when bread and wine are shared — just stay seated if you're not a member. No one will think anything of it.",
            textZh: "你很体贴！手机静音就好，祈祷和讲道时不要走动。领圣餐时——就是分面包和酒的时候——如果你不是成员的话就坐着不动。没人会在意的。",
            keyPhrases: [
              { en: "sermon", zh: "讲道/布道" },
              { en: "Communion", zh: "圣餐" },
              { en: "stay seated", zh: "坐着不动" },
            ],
            culturalNote: "在大多数基督教教堂，非成员不参加圣餐是完全正常的。坐在座位上即可，不需要解释。",
            alternativeExpressions: [
              { textEn: "That's really considerate! Just put your phone on silent and stay seated during Communion if you're not a member. Super simple.", textZh: "你真细心！手机静音，圣餐时不是成员就坐着不动。很简单的。", actionHint: "手机静音", frequency: "common" },
              { textEn: "Don't worry too much! Phone on silent, don't walk around during the sermon, and sit tight during Communion. That's basically it.", textZh: "别太紧张！手机静音，讲道时别走动，圣餐时坐着就行。基本就这些。", actionHint: "放轻松跟着做", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I noticed people putting money in a basket. Is that a collection? Should I contribute?",
            textZh: "我看到大家往篮子里放钱。那是奉献吗？我需要放吗？",
          },
          {
            speaker: "them",
            role: "教堂志愿者",
            textEn: "That's the offering — it supports the church's ministries. It's completely voluntary. If you'd like to contribute, any amount is welcome. You can also just pass the basket along, no pressure at all.",
            textZh: "那是奉献——支持教会的事工。完全自愿的。如果你想捐，任何金额都可以。也可以直接把篮子传下去，完全不用有压力。",
            keyPhrases: [
              { en: "offering", zh: "奉献" },
              { en: "ministries", zh: "事工" },
              { en: "voluntary", zh: "自愿的" },
              { en: "pass the basket along", zh: "把篮子传下去" },
            ],
            alternativeExpressions: [
              { textEn: "That's the collection — it goes to the church. Totally optional. Drop something in or just pass it along, no one judges.", textZh: "那是奉献——给教会的。完全自愿。放点钱或直接传给下一个人都行，没人会介意。", actionHint: "自由选择是否捐款", frequency: "common" },
              { textEn: "Yeah, that's the offering plate. Completely voluntary — you can give or just pass it on. Either way is fine.", textZh: "对，那是奉献盘。完全自愿——可以放钱也可以直接传下去。都可以。", actionHint: "根据意愿决定", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "After the service, can I talk to the pastor? I have some questions about the church's history.",
            textZh: "礼拜结束后，我能跟牧师聊聊吗？我对教堂的历史有些问题。",
          },
          {
            speaker: "them",
            role: "教堂志愿者",
            textEn: "Absolutely! Pastor Williams is very friendly and loves meeting visitors. He usually greets everyone at the door after the service. We also have a coffee hour in the fellowship hall — it's a great time to chat with people.",
            textZh: "当然！Williams 牧师非常友好，很喜欢接待来访者。他礼拜后通常在门口跟大家打招呼。我们还有一个茶歇时间在活动厅——是聊天的好时候。",
            keyPhrases: [
              { en: "pastor", zh: "牧师" },
              { en: "coffee hour", zh: "茶歇时间" },
              { en: "fellowship hall", zh: "活动厅/团契厅" },
            ],
            alternativeExpressions: [
              { textEn: "For sure! Pastor Williams is the best — he always chats with visitors after. And stick around for coffee hour, it's a great way to meet people.", textZh: "当然！Williams牧师人超好——礼拜后总是跟来访者聊天。留下来参加茶歇吧，是认识人的好机会。", actionHint: "礼拜后去和牧师打招呼", frequency: "common" },
              { textEn: "Definitely! He'll be at the door after service. And we have coffee and snacks in the fellowship hall — come hang out!", textZh: "没问题！他礼拜后会在门口。活动厅有咖啡和点心——来坐坐吧！", actionHint: "留下来参加茶歇", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds lovely. Thank you for making me feel so welcome.",
            textZh: "太好了。谢谢你让我感到这么受欢迎。",
          },
          {
            speaker: "them",
            role: "教堂志愿者",
            textEn: "That's what we're here for! Feel free to come back anytime. We'd love to see you again.",
            textZh: "这就是我们的宗旨！随时欢迎再来。我们很期待再见到你。",
            keyPhrases: [
              { en: "that's what we're here for", zh: "这就是我们存在的目的" },
              { en: "feel free to come back", zh: "随时欢迎再来" },
            ],
            alternativeExpressions: [
              { textEn: "That's our job! You're welcome back anytime — consider this your church home.", textZh: "这是我们应该做的！随时欢迎再来——把这里当你的家。", actionHint: "表达感谢", frequency: "common" },
              { textEn: "It's what we do! Our doors are always open. We'd love to see you again.", textZh: "我们就是做这个的！大门永远敞开。期待再见到你。", actionHint: "感谢并考虑再来", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 同学/朋友聚会 ====================
  {
    id: "social-reunion",
    category: "social",
    titleZh: "同学/朋友聚会",
    titleEn: "Reunion & Catching Up",
    description: "与老同学或朋友重聚，叙旧、交换联系方式和计划后续活动",
    otherRole: "老同学/朋友",
    otherRoleIcon: "users",
    flows: [
      // --- Flow 1: 聚会叙旧 ---
      {
        id: "catching-up",
        titleZh: "聚会叙旧",
        titleEn: "Catching Up at a Reunion",
        description: "和老朋友见面聊近况、回忆过去",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "老同学",
            textEn: "Oh my god, Wang! Is that really you? It's been what — ten years? You haven't changed a bit!",
            textZh: "天哪，小王！真的是你吗？有多久了——十年？你一点都没变！",
            keyPhrases: [
              { en: "it's been", zh: "已经过了（多久）" },
              { en: "haven't changed a bit", zh: "一点都没变" },
            ],
            alternativeExpressions: [
              { textEn: "No way — Wang?! Holy cow, it's been forever! You look amazing!", textZh: "不会吧——小王？！天哪好久不见了！你看着太好了！", actionHint: "热情回应", frequency: "common" },
              { textEn: "Wang! I can't believe it! How long has it been? You haven't aged a day!", textZh: "王！不敢相信！多久没见了？你一点都没老！", actionHint: "热情拥抱回应", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Lisa! Wow, it's so great to see you! Yeah, it's been about ten years since graduation. How have you been?",
            textZh: "Lisa！哇，见到你太好了！是啊，毕业到现在差不多十年了。你过得怎么样？",
            casualVersion: "Lisa! No way! So good to see you! What have you been up to all these years?",
          },
          {
            speaker: "them",
            role: "老同学",
            textEn: "I'm doing well! I moved to Boston about five years ago. I'm working in healthcare — I'm a nurse at Mass General. How about you? Are you still in tech?",
            textZh: "我挺好的！大约五年前搬到波士顿了。我在医疗行业工作——在麻省总医院当护士。你呢？还在做科技吗？",
            keyPhrases: [
              { en: "moved to", zh: "搬到" },
              { en: "working in", zh: "在……行业工作" },
              { en: "how about you", zh: "你呢" },
            ],
            alternativeExpressions: [
              { textEn: "Pretty good! Ended up in Boston — I'm a nurse now at Mass General. What about you, still doing the tech thing?", textZh: "挺好的！去了波士顿——现在在麻省总医院当护士。你呢，还在搞科技吗？", actionHint: "分享你的近况", frequency: "common" },
              { textEn: "Life's good! Been in Boston for a while now, working as a nurse. How about you? What are you up to these days?", textZh: "日子不错！在波士顿待了一阵子，当护士。你呢？最近在忙什么？", actionHint: "聊聊你的工作", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, I switched to marketing a few years ago. I'm running my own small business now. It's a lot of work but I love it.",
            textZh: "其实我几年前转行做市场营销了。现在自己做一个小公司。很辛苦但我很喜欢。",
          },
          {
            speaker: "them",
            role: "老同学",
            textEn: "That's amazing! Good for you. Do you remember our old study group? Tom is here tonight too — he's a lawyer now, can you believe it? The guy who used to sleep through every class!",
            textZh: "太厉害了！好样的。你还记得我们以前的学习小组吗？Tom今晚也在——他现在是律师了，你能信吗？那个以前每节课都睡觉的人！",
            keyPhrases: [
              { en: "good for you", zh: "真棒/好样的" },
              { en: "can you believe it", zh: "你能信吗" },
              { en: "sleep through every class", zh: "每节课都睡过去" },
            ],
            alternativeExpressions: [
              { textEn: "Wow, that's incredible! So proud of you. Oh hey, remember our study group? Tom's here — he's a freakin' lawyer now! The guy who slept through class!", textZh: "哇太厉害了！真为你骄傲。对了你记得我们学习小组吗？Tom也在——他现在居然是律师！那个上课睡觉的家伙！", actionHint: "一起去找Tom", frequency: "common" },
              { textEn: "Good for you, seriously! Hey, you'll never guess who else is here — Tom! And guess what, he's a lawyer. The irony!", textZh: "真了不起！嘿你猜谁也在——Tom！而且他是律师了。太讽刺了！", actionHint: "表示惊讶并去见Tom", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Ha! That's hilarious. I'd love to say hi to him. Are you married? Any kids?",
            textZh: "哈！太搞笑了。我想去跟他打个招呼。你结婚了吗？有孩子吗？",
            culturalNote: "在欧美聚会中，问婚姻和孩子的问题比较常见但要注意场合。如果对方先提起家庭话题，跟着聊就好。",
          },
          {
            speaker: "them",
            role: "老同学",
            textEn: "Married with two kids — a boy and a girl. They keep me busy! Let me show you some photos. What about you?",
            textZh: "结婚了，两个孩子——一男一女。他们让我忙得团团转！给你看些照片。你呢？",
            keyPhrases: [
              { en: "keep me busy", zh: "让我忙得团团转" },
              { en: "let me show you", zh: "给你看" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, married! Two kiddos — boy and girl. They run me ragged but I love it. Wanna see pics? What about you?", textZh: "结婚了！俩娃——一男一女。累得够呛但我爱惨了。看照片不？你呢？", actionHint: "看照片并分享你的情况", frequency: "common" },
              { textEn: "Got hitched about six years ago. We have two kids now — they're a handful! Here, look at these cuties. How about your love life?", textZh: "大约六年前结的婚。现在两个孩子——可够操心的！来看看这两个小可爱。你的感情呢？", actionHint: "欣赏照片并回答", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "They're adorable! I'm still single but enjoying life. Hey, we should stay in touch this time — for real. What's the best way to reach you?",
            textZh: "好可爱！我还是单身但过得挺开心。对了，这次我们要保持联系——说真的。用什么方式联系你最好？",
          },
          {
            speaker: "them",
            role: "老同学",
            textEn: "Definitely! Here, let me add you on WhatsApp. Also, we have a class group chat — I'll add you. We're actually planning a bigger reunion for next summer. You should come!",
            textZh: "当然！来，我加你WhatsApp。我们还有一个班级群聊——我把你拉进去。其实我们正在策划明年夏天的大聚会。你一定要来！",
            keyPhrases: [
              { en: "add you on", zh: "加你的" },
              { en: "group chat", zh: "群聊" },
              { en: "planning a bigger reunion", zh: "策划大聚会" },
            ],
            alternativeExpressions: [
              { textEn: "Yes! Let me add you right now. Oh, and there's a class group chat — I'm throwing you in. We're also planning a big reunion next summer!", textZh: "当然！我现在就加你。对了有个班级群——我把你拉进去。我们还在计划明年夏天大聚会！", actionHint: "交换联系方式", frequency: "common" },
              { textEn: "A hundred percent! Give me your number. We've got a group chat going — I'll add you. And save the date for a big reunion next year!", textZh: "百分之百！把号码给我。我们有个群——把你加进去。明年大聚会记得空出时间！", actionHint: "留联系方式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd love that! It's been so nice catching up. Let me grab a drink and then let's go find Tom.",
            textZh: "太好了！叙旧真开心。我去拿杯饮料，然后我们去找Tom。",
          },
        ],
      },

      // --- Flow 2: 交换联系方式并约下次 ---
      {
        id: "exchange-contacts",
        titleZh: "交换联系方式",
        titleEn: "Exchanging Contacts & Making Plans",
        description: "聚会结束时交换联系方式，约定下次见面",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This has been such a great evening. Before everyone leaves, should we exchange numbers?",
            textZh: "今晚真的太开心了。大家走之前，我们要不要交换号码？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Definitely! Let's create a group chat. What apps do you all use? I'm on WhatsApp and LINE.",
            textZh: "当然！我们建个群吧。你们都用什么App？我有WhatsApp和LINE。",
            keyPhrases: [
              { en: "create a group chat", zh: "建群" },
              { en: "what apps do you use", zh: "你们用什么App" },
            ],
            alternativeExpressions: [
              { textEn: "Great idea! Let's make a group. What's everyone on — WhatsApp, LINE, iMessage?", textZh: "好主意！建个群吧。大家用什么——WhatsApp、LINE、iMessage？", actionHint: "说出你用的App", frequency: "common" },
              { textEn: "For sure! I'll set one up. Does everyone have WhatsApp, or should we try something else?", textZh: "没问题！我来建。大家都有WhatsApp吗，还是用别的？", actionHint: "确认用哪个App", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I mainly use WeChat, but I also have WhatsApp. Let's do WhatsApp since everyone seems to have it.",
            textZh: "我主要用微信，但也有WhatsApp。用WhatsApp吧，好像大家都有。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Perfect. I've added everyone. Let's make a plan to meet up again — maybe next month? We could do dinner or even a weekend trip somewhere.",
            textZh: "好的。我把大家都加了。我们约下次见面吧——下个月怎么样？可以吃个饭或者周末一起去哪儿玩。",
            keyPhrases: [
              { en: "meet up", zh: "见面/聚会" },
              { en: "weekend trip", zh: "周末旅行" },
            ],
            alternativeExpressions: [
              { textEn: "Done — everyone's in! We should totally do this again. Maybe next month? Dinner, or even a little weekend getaway?", textZh: "搞定——都拉进来了！一定要再聚。下个月怎么样？吃个饭，或者来个周末小旅行？", actionHint: "提出活动建议", frequency: "common" },
              { textEn: "All set! OK let's not let this die — when should we hang out next? I'm thinking dinner or a day trip somewhere.", textZh: "好了！咱们别断了联系——下次什么时候见？我在想吃饭或者去哪里一日游。", actionHint: "积极参与计划", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A weekend trip sounds fun! Maybe we could go to that wine country everyone's been talking about?",
            textZh: "周末旅行听起来不错！要不要去大家一直说的酒乡？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, Napa Valley? That would be incredible. Let me throw it out in the group and see who's in. We should book early because places fill up fast.",
            textZh: "纳帕谷？那太棒了。让我在群里问问看谁有兴趣。要早点订，因为很快就满了。",
            keyPhrases: [
              { en: "throw it out", zh: "提出来（征求意见）" },
              { en: "who's in", zh: "谁参加" },
              { en: "fill up fast", zh: "很快订满" },
            ],
            alternativeExpressions: [
              { textEn: "Napa! Yes! That would be so fun. Let me poll the group and see who's down. We should book stuff early though.", textZh: "纳帕！太好了！肯定超好玩。我在群里问问谁有兴趣。不过得提前订。", actionHint: "关注群里的消息", frequency: "common" },
              { textEn: "Oh man, Napa would be amazing. I'll throw it in the chat. Places book up super fast though, so we gotta plan ahead.", textZh: "天哪纳帕太棒了。我发群里问问。不过那边订得超快，得提前计划。", actionHint: "帮忙计划", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great idea. Also, if anyone is ever in Shanghai, you're all welcome to visit. I'd love to show you around.",
            textZh: "好主意。还有，如果谁来上海，都欢迎来玩。我很乐意带你们逛逛。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's so generous! I've always wanted to visit China. I might actually take you up on that. Alright, it's getting late. So good to see you, Wang. Don't be a stranger — text the group!",
            textZh: "你太大方了！我一直想去中国。说不定真的会去找你。好了，不早了。见到你真高兴，小王。别失联——群里聊！",
            keyPhrases: [
              { en: "take you up on that", zh: "接受你的邀请" },
              { en: "don't be a stranger", zh: "别失联/常联系" },
              { en: "text the group", zh: "在群里聊" },
            ],
            culturalNote: "\"Don't be a stranger\" 是英语中很常用的告别语，意思是\"别不联系了\"，表达希望保持联系的愿望。",
            alternativeExpressions: [
              { textEn: "That's so sweet of you! China is on my bucket list — I might seriously take you up on that! Anyway, it's late. So great seeing you. Don't be a stranger!", textZh: "你太大方了！中国在我的心愿清单上——说不定真会去找你！好了太晚了。见到你太好了。常联系！", actionHint: "开心地告别", frequency: "common" },
              { textEn: "Wow, I'd love that! Maybe one day. OK it's getting late — this was amazing. Let's keep the group chat alive, yeah?", textZh: "哇太想了！也许有一天。好了不早了——今晚太棒了。群聊别让它冷了啊？", actionHint: "保持群聊活跃", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I won't! It was wonderful seeing everyone. Safe drive home, and let's make that Napa trip happen!",
            textZh: "不会的！见到大家太开心了。开车小心，纳帕之旅一定要成行！",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Deal! Goodnight, everyone!",
            textZh: "说定了！大家晚安！",
            keyPhrases: [
              { en: "deal", zh: "说定了" },
            ],
            alternativeExpressions: [
              { textEn: "It's a plan! Night, everyone — this was the best!", textZh: "说定了！晚安各位——今晚太棒了！", actionHint: "开心告别", frequency: "common" },
              { textEn: "Love it! Alright, goodnight gang. See you all soon!", textZh: "太好了！好了晚安各位。很快再见！", actionHint: "期待下次", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 文化差异讨论 ====================
  {
    id: "social-11",
    category: "social",
    titleZh: "文化差异讨论",
    titleEn: "Discussing Cultural Differences",
    description: "与外国朋友讨论中西文化差异，如饮食习惯、节日传统、家庭观念等",
    otherRole: "外国朋友",
    otherRoleIcon: "globe",
    flows: [
      // --- Flow 1: 饮食文化差异 ---
      {
        id: "food-culture",
        titleZh: "饮食文化差异",
        titleEn: "Food Culture Differences",
        description: "和朋友聊中西方饮食文化的不同",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "I tried hot pot for the first time last week. It was amazing, but I couldn't handle the spicy broth!",
            textZh: "我上周第一次吃了火锅。太好吃了，但辣锅我受不了！",
            keyPhrases: [
              { en: "hot pot", zh: "火锅" },
              { en: "couldn't handle", zh: "受不了/吃不了" },
              { en: "spicy broth", zh: "辣汤底" },
            ],
            vocabNotes: {
              "handle": {
                meaningInContext: "在这句话里表示：承受/吃得消，指对辣的承受能力",
                similarUsage: "类似用法：I can't handle the heat outside.",
              },
            },
            alternativeExpressions: [
              { textEn: "Dude, I had hot pot for the first time and I'm obsessed! But man, that spicy broth almost killed me.", textZh: "兄弟我第一次吃火锅就爱上了！但那辣汤差点要了我的命。", actionHint: "推荐不辣的锅底", frequency: "common" },
              { textEn: "Oh my god, I just tried hot pot and it was incredible — but I totally underestimated the spicy side!", textZh: "天哪我刚试了火锅太好吃了——但我完全低估了辣锅的威力！", actionHint: "介绍鸳鸯锅的概念", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Haha, you should try the tomato or mushroom broth next time — those are mild. In China, we usually order both a spicy and a mild pot. It's called yuanyang pot.",
            textZh: "哈哈，下次你可以试番茄锅或菌汤锅——那些不辣。在中国我们一般点一个辣锅一个清汤锅。叫鸳鸯锅。",
            culturalNote: "鸳鸯锅（half-and-half pot）是火锅店最常见的搭配，适合口味不同的人一起吃。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "Oh, that's smart! I noticed everyone shares from the same pot. In the US, we're more used to having our own individual plates. Is sharing food a big thing in China?",
            textZh: "好聪明！我注意到大家都从同一个锅里夹菜。在美国我们更习惯各吃各的盘子。在中国分享食物很普遍吗？",
            keyPhrases: [
              { en: "shares from the same pot", zh: "从同一个锅里夹菜" },
              { en: "individual plates", zh: "各自的盘子" },
              { en: "a big thing", zh: "很普遍的事" },
            ],
            alternativeExpressions: [
              { textEn: "That's interesting! We usually eat from our own plates back home. Is communal dining the norm in China?", textZh: "有意思！我们在家一般各吃各的。在中国合餐是常态吗？", actionHint: "解释中国的合餐文化", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, sharing is a big part of Chinese dining culture. We order several dishes and everyone shares. It's about togetherness. But after COVID, more restaurants offer individual portions now.",
            textZh: "是的，分享是中国饮食文化的重要部分。我们点好几个菜大家一起吃。这代表一种团聚感。不过疫情后，更多餐厅也提供分餐了。",
            culturalNote: "中国传统合餐制（family-style dining）在西方也越来越常见，但公筷（serving chopsticks）的概念外国朋友可能不太熟悉。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "That makes sense. Another thing I noticed — Chinese people don't usually tip at restaurants, right? That was such a culture shock for me when I first visited.",
            textZh: "有道理。还有一个我注意到的——中国人在餐厅一般不给小费对吧？我第一次去中国时这让我很吃惊。",
            keyPhrases: [
              { en: "tip", zh: "给小费" },
              { en: "culture shock", zh: "文化冲击" },
            ],
            vocabNotes: {
              "culture shock": {
                meaningInContext: "在这句话里表示：因文化差异而感到震惊或不适应",
                similarUsage: "类似用法：Moving to a new country can cause real culture shock.",
              },
            },
            alternativeExpressions: [
              { textEn: "Interesting. Oh, here's another one — no tipping in China, right? That totally threw me off when I visited.", textZh: "有意思。还有一个——中国不给小费对吧？我去中国的时候完全懵了。", actionHint: "解释中国的付费习惯", frequency: "common" },
              { textEn: "Makes total sense. What really got me was the no-tipping thing. I kept trying to tip and people were confused!", textZh: "很有道理。最让我震惊的是没有小费。我一直想给小费结果人家一脸困惑！", actionHint: "分享你对小费的看法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Right, tipping isn't a thing in China. The price you see is what you pay. But here in the US, I've learned that 18 to 20 percent is expected. I was so confused the first time!",
            textZh: "对，中国没有小费文化。看到的价格就是你付的价格。但在美国我了解到要给18%到20%。我第一次也很困惑！",
            literalMeaning: "\"tipping isn't a thing\" 字面意思是「给小费不是一个东西」，实际意思是「没有小费这个习惯」",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "Yeah, the tipping culture here can be confusing even for Americans! Some people think it should be abolished and restaurants should just pay fair wages. What other differences surprised you?",
            textZh: "是啊，小费文化连美国人自己都觉得困惑！有些人觉得应该取消小费，让餐厅直接付合理工资。还有什么差异让你惊讶？",
            keyPhrases: [
              { en: "abolished", zh: "废除/取消" },
              { en: "fair wages", zh: "合理工资" },
            ],
            localVariants: {
              "en-US": "Yeah, tipping here is a whole thing even for us!",
              "en-GB": "We don't really tip much in the UK either — maybe 10 percent at most.",
              "en-AU": "Same in Australia — tipping isn't expected at all.",
            },
            alternativeExpressions: [
              { textEn: "Honestly, even Americans argue about tipping. A lot of people think it should just go away. What else surprised you here?", textZh: "说实话美国人自己也为小费吵。很多人觉得该取消。你还有什么觉得惊讶的？", actionHint: "分享更多文化差异", frequency: "common" },
              { textEn: "Tell me about it — I grew up here and I still find it confusing! Some people want to abolish it entirely. What else caught you off guard?", textZh: "可不是嘛——我在这里长大的都觉得困惑！有些人想彻底取消。你还有什么觉得意外的？", actionHint: "继续聊文化差异", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The portion sizes! Everything is so huge here. In China, dishes are smaller but we order more variety. Here, one plate is enough for two people sometimes.",
            textZh: "份量大小！这里的东西都好大份。在中国菜量小但我们点更多种类。这里有时候一盘够两个人吃。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "Ha, that's true! Most people take leftovers home though. We even have a saying — \"my eyes were bigger than my stomach.\" It means you ordered more than you can eat.",
            textZh: "哈，确实！不过大多数人会打包回家。我们甚至有一句话——\"我的眼睛比胃大\"。意思是你点的比吃得下的多。",
            keyPhrases: [
              { en: "leftovers", zh: "剩菜/打包" },
              { en: "take home", zh: "带回家" },
            ],
            literalMeaning: "\"my eyes were bigger than my stomach\" 字面意思是「我的眼睛比胃大」，实际意思是「眼大肚小，点多了吃不完」",
            culturalMeaning: "这是一句英语俗语，自嘲自己贪心点太多菜。在中国类似的说法是「眼大肚小」。",
            alternativeExpressions: [
              { textEn: "Haha yeah, guilty! But we always take the rest home. 'Eyes bigger than your stomach' — that's what we say when you order too much!", textZh: "哈哈确实有罪！但我们都会打包。'眼睛比胃大'——点太多的时候我们就这么说！", actionHint: "聊聊中国打包文化", frequency: "common" },
              { textEn: "So true! But hey, leftovers for lunch the next day — can't complain! We say 'my eyes were bigger than my stomach' when we overdo it.", textZh: "太对了！不过剩菜第二天当午餐——也不错！点太多的时候我们说'眼大肚小'。", actionHint: "分享中国不浪费的文化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "In China, taking food home isn't embarrassing at all — we call it \"dabao.\" It's actually considered responsible to not waste food.",
            textZh: "在中国打包一点都不丢人——我们叫「打包」。不浪费食物其实是负责任的表现。",
            culturalNote: "中国近年推行「光盘行动」（Clean Plate Campaign），提倡不浪费食物。在国外打包也很正常，说 \"Can I get a to-go box?\" 即可。",
          },
        ],
      },

      // --- Flow 2: 节日与家庭观念 ---
      {
        id: "festival-family",
        titleZh: "节日与家庭观念",
        titleEn: "Festivals & Family Values",
        description: "聊中西方节日差异和对家庭的不同理解",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Thanksgiving is coming up. What does your family usually do?",
            textZh: "感恩节快到了。你家一般怎么过？",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "We all get together at my parents' house. My mom makes a huge turkey, and we go around the table saying what we're thankful for. It's my favorite holiday. Do you have something similar in China?",
            textZh: "我们全家去我爸妈家聚。我妈做一只很大的火鸡，然后我们轮流说感谢的事。这是我最喜欢的节日。中国有类似的节日吗？",
            keyPhrases: [
              { en: "get together", zh: "聚在一起" },
              { en: "go around the table", zh: "轮流（桌上每个人都说）" },
              { en: "thankful for", zh: "感恩的/感谢的" },
            ],
            vocabNotes: {
              "go around the table": {
                meaningInContext: "在这句话里表示：桌上的人一个接一个轮流发言",
                similarUsage: "类似用法：Let's go around the room and introduce ourselves.",
              },
            },
            alternativeExpressions: [
              { textEn: "Big family dinner at my folks' place. Turkey, pie, the whole nine yards. Everyone goes around saying what they're grateful for. It's my favorite.", textZh: "去我爸妈家吃大餐。火鸡、派、全套的。大家轮流说感恩的事。是我最爱的节日。", actionHint: "分享中国类似的节日", frequency: "common" },
              { textEn: "The whole family piles into my parents' house. We eat way too much and watch football. Do you guys have anything like that?", textZh: "全家挤进我爸妈家。吃一堆然后看球赛。你们有类似的节日吗？", actionHint: "介绍中秋节或春节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The closest one would be Mid-Autumn Festival. We eat mooncakes and admire the full moon with family. And of course, Chinese New Year is the biggest — everyone goes back to their hometown.",
            textZh: "最接近的应该是中秋节。我们吃月饼，和家人一起赏月。当然，春节是最大的——所有人都回老家。",
            culturalNote: "春节的「春运」（Spring Festival travel rush）是世界上最大规模的年度人口迁移。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "I've heard of mooncakes! They look beautiful. Going back to your hometown sounds a lot like Thanksgiving here — the airports and highways are insane. Is the pressure to go home strong?",
            textZh: "我听说过月饼！看起来很精美。回老家听起来很像这边的感恩节——机场和高速都疯了。回家的压力大吗？",
            keyPhrases: [
              { en: "insane", zh: "疯了/超级拥挤" },
              { en: "pressure to go home", zh: "回家的压力" },
            ],
            alternativeExpressions: [
              { textEn: "That sounds amazing! Is it a big deal if you don't go home for Chinese New Year?", textZh: "听起来很棒！如果春节不回家的话会是大事吗？", actionHint: "解释春节回家的重要性", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Very strong, especially from parents. In Chinese culture, family gatherings during New Year are almost mandatory. If you don't go home, your parents would be really disappointed.",
            textZh: "压力很大，特别是来自父母。在中国文化里，过年团聚几乎是必须的。如果不回家，父母会很失望。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "That's kind of sweet, actually. Here, once you turn 18, most people move out and become pretty independent. Some families are close, some aren't. Do most young adults in China live with their parents?",
            textZh: "其实挺温馨的。这边一旦满18岁，大多数人就搬出去独立了。有些家庭关系紧密，有些不太紧密。中国大多数年轻人和父母住在一起吗？",
            keyPhrases: [
              { en: "move out", zh: "搬出去" },
              { en: "independent", zh: "独立" },
              { en: "young adults", zh: "年轻人" },
            ],
            culturalMeaning: "在欧美文化中，18岁搬出去住是独立和成熟的标志；而在中国，成年后和父母住不被视为不独立，反而被看作孝顺。",
            alternativeExpressions: [
              { textEn: "That's actually really nice. Over here, most people are out the door at 18. Independence is kind of a big deal. Do young people in China still live at home?", textZh: "其实挺好的。这边大多数人18岁就搬出去了。独立是很重要的事。中国年轻人还和父母住吗？", actionHint: "解释中国的居住文化", frequency: "common" },
              { textEn: "Honestly, I think that's beautiful. Americans tend to leave home super early. Is it normal for adults to stay with their parents in China?", textZh: "说实话我觉得很美好。美国人倾向于很早离家。中国成年人和父母住正常吗？", actionHint: "解释中国年轻人的情况", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "It depends on the city, but many do, especially with housing prices being so high. It's not considered embarrassing — actually, it's seen as being close to your family. Parents often help with childcare too.",
            textZh: "看城市，但很多人确实和父母住，尤其房价这么高。这不算丢人——实际上被认为是和家人亲近。父母也经常帮忙带孩子。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "Wow, that's so different from here. Childcare is super expensive in the US. A lot of families can barely afford it. Having grandparents help would be amazing. I think both cultures have their pros and cons.",
            textZh: "哇，跟这边好不一样。美国的托儿费超贵。很多家庭负担不起。有祖父母帮忙太好了。我觉得两种文化各有利弊。",
            keyPhrases: [
              { en: "childcare", zh: "托儿/照看孩子" },
              { en: "barely afford", zh: "勉强负担得起" },
              { en: "pros and cons", zh: "利弊/优缺点" },
            ],
            vocabNotes: {
              "pros and cons": {
                meaningInContext: "在这句话里表示：优点和缺点，利与弊",
                similarUsage: "类似用法：Let's weigh the pros and cons before deciding.",
              },
            },
            alternativeExpressions: [
              { textEn: "That's wild — so different here. Childcare costs a fortune in the US. Having grandparents help would be a game-changer. Each culture has its perks, I guess.", textZh: "太不一样了。美国托儿费贵得要命。有祖父母帮忙简直改变人生。各有各的好处吧。", actionHint: "表达认同", frequency: "common" },
              { textEn: "Seriously? That's awesome. We're paying like two grand a month for daycare. I wish we had that kind of family support. Both systems have their pluses.", textZh: "真的？太好了。我们每月托儿费两千多美元。真希望有那样的家庭支持。两种文化各有优点。", actionHint: "继续探讨各自优缺点", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Exactly. I think that's what makes cross-cultural friendships so interesting — we can learn from each other's perspectives.",
            textZh: "确实。我觉得这就是跨文化友谊有趣的地方——我们可以互相学习不同的视角。",
          },
          {
            speaker: "them",
            role: "外国朋友",
            textEn: "Couldn't agree more! Hey, you should come to our Thanksgiving dinner this year. I'd love for you to experience it.",
            textZh: "完全同意！嘿，今年感恩节你来我家吃饭吧。我希望你能体验一下。",
            keyPhrases: [
              { en: "couldn't agree more", zh: "完全同意/太对了" },
              { en: "I'd love for you to experience it", zh: "我希望你能体验一下" },
            ],
            literalMeaning: "\"Couldn't agree more\" 字面意思是「不能同意更多了」，实际意思是「百分之百同意」",
            alternativeExpressions: [
              { textEn: "Exactly! Hey — come to my family's Thanksgiving this year. You have to experience it firsthand!", textZh: "就是！嘿——今年感恩节来我家吧。你得亲身体验一下！", actionHint: "开心接受邀请", frequency: "common" },
              { textEn: "A hundred percent. Oh! You should totally come for Thanksgiving. Turkey, pie, the whole shebang. It'll be fun!", textZh: "百分之百。哦！你一定要来过感恩节。火鸡、派全套的。会很好玩！", actionHint: "感谢并接受", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 表达感谢与道歉 ====================
  {
    id: "social-12",
    category: "social",
    titleZh: "表达感谢与道歉",
    titleEn: "Expressing Gratitude & Apologizing",
    description: "在不同场合得体地表达感谢和真诚道歉，包括书面和口头方式",
    otherRole: "朋友/同事/陌生人",
    otherRoleIcon: "heart",
    flows: [
      // --- Flow 1: 表达深度感谢 ---
      {
        id: "deep-gratitude",
        titleZh: "表达深度感谢",
        titleEn: "Expressing Deep Gratitude",
        description: "别人帮了大忙，需要表达超越简单\"thank you\"的感谢",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Tom, I really want to thank you properly for helping me move last weekend. I couldn't have done it without you.",
            textZh: "Tom，我真的要好好感谢你上周末帮我搬家。没有你我真搞不定。",
            culturalNote: "在英语文化中，帮大忙之后需要专门表达感谢，简单说 thank you 可能显得不够重视。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, don't mention it! That's what friends are for. Besides, you helped me paint my apartment last month, remember?",
            textZh: "别客气！朋友就是这样的。再说你上个月帮我刷公寓来着，记得吧？",
            keyPhrases: [
              { en: "don't mention it", zh: "别客气/不用谢" },
              { en: "that's what friends are for", zh: "朋友就是这样的" },
            ],
            alternativeExpressions: [
              { textEn: "It was no big deal, seriously! Happy to help anytime.", textZh: "真的不算什么！随时乐意帮忙。", actionHint: "继续表达感谢", frequency: "common" },
              { textEn: "Please, you'd do the same for me in a heartbeat!", textZh: "你也一样会帮我的，而且不会犹豫！", actionHint: "确认你也会回报", frequency: "common" },
            ],
            vocabNotes: {
              "don't mention it": {
                meaningInContext: "在这句话里表示：不用谢/别提了，是比 \"you're welcome\" 更随意的说法",
                similarUsage: "类似用法：A: Thanks for the coffee! B: Don't mention it!",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Still, it meant a lot to me. Let me take you out for dinner this week — my treat. No arguments!",
            textZh: "还是要谢谢你，对我真的很重要。这周我请你吃饭——我请客。不许争！",
            culturalNote: "\"my treat\" 表示我请客。在西方文化中，请吃饭是常见的表达感谢方式。说 \"no arguments\" 表示不接受推辞。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Well, if you insist! How about that new Thai place on Main Street? I've been dying to try it.",
            textZh: "好吧，你非要这样的话！主街那家新开的泰国餐厅怎么样？我一直想去。",
            keyPhrases: [
              { en: "if you insist", zh: "你非要这样的话" },
              { en: "been dying to try", zh: "特别想尝试" },
            ],
            vocabNotes: {
              "dying to": {
                meaningInContext: "在这句话里表示：非常想要/渴望，是夸张的口语表达",
                similarUsage: "类似用法：I'm dying to see that movie!",
              },
            },
            alternativeExpressions: [
              { textEn: "OK twist my arm! What about that new Thai restaurant? I've been wanting to try it forever.", textZh: "好吧你强迫我！那家新泰国餐厅怎么样？我想去好久了。", actionHint: "愉快地确认时间", frequency: "common" },
              { textEn: "Fine, fine, I won't say no to free food! There's this Thai spot on Main I've been eyeing. Friday work?", textZh: "行行我不拒绝免费饭！Main街那家泰国菜我一直想去。周五行吗？", actionHint: "确认具体时间", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, it's a date! Friday evening work for you?",
            textZh: "太好了，就这么定了！周五晚上你有空吗？",
            literalMeaning: "\"it's a date\" 字面是「这是一个约会」，但在朋友之间只是「就这么定了」的意思，不是恋爱含义",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Friday's perfect! But seriously, you don't need to thank me every time. That's what friendship is all about.",
            textZh: "周五正好！不过说真的，你不用每次都谢我。友谊就是这样的嘛。",
            keyPhrases: [
              { en: "that's what ... is all about", zh: "...就是这样的/...的本质就是这样" },
            ],
            alternativeExpressions: [
              { textEn: "Friday works! But for real, you don't have to keep thanking me. That's what friends do.", textZh: "周五没问题！但说真的别老谢我。朋友就是这样嘛。", actionHint: "表达珍惜友谊", frequency: "common" },
              { textEn: "Friday it is! And stop being so grateful all the time — we're friends, it comes with the package!", textZh: "就周五！别一直感恩了——我们是朋友，这是自带的！", actionHint: "真诚地表达友谊", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I know, I know. But I also wanted to say — I really appreciate having you as a friend. Moving to a new country isn't easy, and you've made it so much better.",
            textZh: "我知道，我知道。但我也想说——有你这个朋友我真的很感恩。搬到一个新国家不容易，有你好太多了。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Aw, that's really sweet. You know, you've taught me so much about Chinese culture too. It goes both ways. Now stop being mushy before I start crying!",
            textZh: "太暖了。你知道吗，你也教了我好多中国文化的东西。这是互相的。行了别煽情了，我要哭了！",
            keyPhrases: [
              { en: "it goes both ways", zh: "这是互相的" },
              { en: "mushy", zh: "煽情的/过于感性的" },
            ],
            alternativeExpressions: [
              { textEn: "Stop, you're gonna make me cry! But right back at you — I'm lucky to have you as a friend.", textZh: "别说了，我要哭了！我也很幸运有你这个朋友。", actionHint: "自然地结束这个温馨时刻", frequency: "common" },
            ],
            culturalMeaning: "在西方文化中，朋友之间可以直接表达感情，但如果太感性，会用幽默来化解尴尬，比如说 \"stop being mushy\"。",
          },
        ],
      },

      // --- Flow 2: 真诚道歉 ---
      {
        id: "sincere-apology",
        titleZh: "真诚道歉",
        titleEn: "Sincere Apology",
        description: "因为自己的失误需要向朋友或同事真诚道歉",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Lisa, I owe you an apology. I completely forgot about our lunch plans yesterday. I feel terrible.",
            textZh: "Lisa，我欠你一个道歉。我昨天完全忘了我们的午餐约定。我感觉很糟糕。",
            culturalNote: "在英语文化中，\"I owe you an apology\" 比简单说 sorry 更正式、更真诚。承认错误很重要。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Honestly? I was pretty upset. I waited at the restaurant for thirty minutes before I realized you weren't coming.",
            textZh: "说实话？我挺生气的。我在餐厅等了三十分钟才意识到你不会来了。",
            keyPhrases: [
              { en: "pretty upset", zh: "挺生气/挺不高兴" },
              { en: "waited for thirty minutes", zh: "等了三十分钟" },
            ],
            responseTip: "对方在表达不满，不要找借口，先继续道歉",
            alternativeExpressions: [
              { textEn: "I'm not gonna lie — I was kinda pissed. I sat there for like half an hour.", textZh: "不骗你——我挺生气的。在那坐了快半小时。", actionHint: "继续诚恳道歉", frequency: "common" },
              { textEn: "TBH, yeah, it sucked. I waited there forever before I figured out you weren't coming.", textZh: "说实话挺糟糕的。我等了好久才反应过来你不会来了。", actionHint: "真诚道歉不找借口", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm so sorry. There's no excuse for that. I got caught up with work and it completely slipped my mind. I should have at least texted you.",
            textZh: "真的很抱歉。没有任何借口。我被工作缠住了，完全忘了。我至少应该发条信息给你。",
            vocabNotes: {
              "slipped my mind": {
                meaningInContext: "在这句话里表示：从脑子里溜走了，忘记了",
                similarUsage: "类似用法：I meant to call you, but it slipped my mind.",
              },
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Yeah, a text would have been nice. It's not just about the waiting — I was worried something had happened to you.",
            textZh: "是的，发条信息会好很多。不只是等待的问题——我还担心你出了什么事。",
            keyPhrases: [
              { en: "would have been nice", zh: "那样就好了" },
              { en: "worried something had happened", zh: "担心你出了什么事" },
            ],
            alternativeExpressions: [
              { textEn: "Honestly, a quick text is all it would've taken. I wasn't just annoyed — I was actually worried about you.", textZh: "说实话发条消息就够了。我不只是不高兴——我是真的担心你。", actionHint: "表达歉意和理解", frequency: "common" },
              { textEn: "Even a quick message would've been fine. The worst part was not knowing if something happened to you.", textZh: "哪怕发个简短消息也行。最糟糕的是不知道你是不是出了什么事。", actionHint: "承诺以后一定通知", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "You're absolutely right, and I'm sorry for worrying you too. I promise it won't happen again. Can I make it up to you? Let me reschedule and this time I'll set three reminders on my phone.",
            textZh: "你说得对，让你担心我也很抱歉。我保证不会再发生了。让我补偿你好吗？我重新约，这次我在手机上设三个闹钟。",
            culturalNote: "\"make it up to you\" 是道歉后主动提出补偿的常见说法。加点幽默（设三个闹钟）可以缓和气氛。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Three reminders? Haha, okay, I'll hold you to that. How about this Saturday? Same place?",
            textZh: "三个闹钟？哈哈，好吧，那我就等着了。这周六怎么样？同一家？",
            keyPhrases: [
              { en: "hold you to that", zh: "说到做到/我记着呢" },
            ],
            vocabNotes: {
              "hold you to that": {
                meaningInContext: "在这句话里表示：我会记住你说的话，到时候你要做到",
                similarUsage: "类似用法：You said you'd help — I'm holding you to that!",
              },
            },
            localVariants: {
              "en-US": "I'll hold you to that!",
              "en-GB": "I'll hold you to that, right!",
              "en-AU": "I'll hold you to it, mate!",
            },
            alternativeExpressions: [
              { textEn: "Ha, three alarms? I'm screenshotting this! OK, this Saturday? Same place?", textZh: "哈三个闹钟？我截图了！好这周六？同一家？", actionHint: "确认时间地点", frequency: "common" },
              { textEn: "LOL OK deal — three reminders it is. Let's redo Saturday, same spot?", textZh: "哈哈好吧——三个闹钟说定了。周六重来？同一个地方？", actionHint: "愉快地确认安排", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Saturday is perfect. And Lisa — I really value our friendship. I won't let you down again.",
            textZh: "周六没问题。还有 Lisa——我真的很珍惜我们的友谊。我不会再让你失望了。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I know. We're good. Just don't make it a habit! See you Saturday.",
            textZh: "我知道。我们没事了。别养成习惯就行！周六见。",
            keyPhrases: [
              { en: "we're good", zh: "我们没事了/我们和好了" },
              { en: "don't make it a habit", zh: "别养成习惯" },
            ],
            culturalMeaning: "\"We're good\" 在这里表示「我接受你的道歉，我们之间没问题了」，是很常见的和解表达。",
            alternativeExpressions: [
              { textEn: "We're fine, don't worry. Just don't do it again! See you Saturday.", textZh: "没事了别担心。别再犯就行！周六见。", actionHint: "开心地确认周六", frequency: "common" },
              { textEn: "It's water under the bridge. But if it happens again, you're buying me dinner for a month! Saturday it is.", textZh: "过去的事了。但如果再发生，你请我吃一个月的饭！周六见。", actionHint: "带着幽默接受和好", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 3: 写感谢卡/信息 ---
      {
        id: "thank-you-message",
        titleZh: "写感谢信息",
        titleEn: "Writing a Thank-You Message",
        description: "给帮助过你的人写感谢短信或邮件",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, I want to send a thank-you message to my professor who wrote me a recommendation letter. Can you help me with the English?",
            textZh: "嘿，我想给帮我写推荐信的教授发一封感谢信。你能帮我看看英文吗？",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Sure! For a professor, you want to keep it professional but warm. Start with \"Dear Professor [Name]\" and avoid being too casual.",
            textZh: "当然！给教授的话，你要保持专业但温暖。开头用\"Dear Professor [姓]\"，别太随意。",
            keyPhrases: [
              { en: "professional but warm", zh: "专业但温暖" },
              { en: "avoid being too casual", zh: "避免太随意" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! For a prof, keep it formal-ish but genuine. Start with 'Dear Professor' — definitely don't use 'Hey'!", textZh: "当然！给教授的话，保持正式但真诚。开头用'Dear Professor'——千万别写'Hey'！", actionHint: "用正式格式写", frequency: "common" },
              { textEn: "Happy to help! With a professor, you want polished but not stiff. 'Dear Professor [Last Name]' is the way to go.", textZh: "乐意帮忙！给教授写的话要精致但不死板。'Dear Professor [姓]'就对了。", actionHint: "注意称呼格式", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How about this: \"Dear Professor Smith, I wanted to express my sincere gratitude for taking the time to write my recommendation letter. I truly appreciate your support.\"",
            textZh: "这样写怎么样：\"亲爱的Smith教授，我想真诚地感谢您抽出时间为我写推荐信。我非常感激您的支持。\"",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "That's a great start! You could add something specific about why it matters to you. Like mentioning the program you're applying to. Personal touches make it feel genuine.",
            textZh: "很好的开头！你可以加点具体的内容，说说为什么这对你很重要。比如提一下你申请的项目。个人化的细节会让它更真诚。",
            keyPhrases: [
              { en: "personal touches", zh: "个人化的细节" },
              { en: "genuine", zh: "真诚的" },
            ],
            alternativeExpressions: [
              { textEn: "Nice! Maybe also mention how their class inspired you — professors love hearing that.", textZh: "不错！也可以提一下他们的课怎么启发了你——教授都喜欢听这个。", actionHint: "加上课程相关的感谢内容", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Good idea. Let me add: \"Your guidance in Advanced Marketing has been invaluable, and your letter will greatly help with my application to the MBA program at Columbia.\"",
            textZh: "好主意。我加上：\"您在高级营销课上的指导非常宝贵，您的推荐信对我申请哥伦比亚大学的MBA项目帮助很大。\"",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Perfect. End with something like \"Thank you again for your generosity with your time. I will keep you updated on the outcome.\" Then sign off with \"Warm regards\" or \"Sincerely.\"",
            textZh: "完美。结尾可以写\"再次感谢您抽出宝贵时间。我会向您汇报申请结果。\"然后用\"Warm regards\"或\"Sincerely\"结尾。",
            keyPhrases: [
              { en: "generosity with your time", zh: "慷慨地付出时间" },
              { en: "keep you updated", zh: "向您汇报进展" },
              { en: "warm regards", zh: "此致（温暖的问候）" },
              { en: "sincerely", zh: "此致敬礼/真诚地" },
            ],
            vocabNotes: {
              "warm regards": {
                meaningInContext: "在这句话里表示：一种正式邮件的结尾问候语，比 Sincerely 稍微温暖但不失礼",
                similarUsage: "类似用法：适合写给有一定关系的教授或上级",
              },
            },
            alternativeExpressions: [
              { textEn: "Great! Wrap it up with something like 'Thank you again for your time.' Then 'Warm regards' or 'Sincerely' for the sign-off.", textZh: "很好！结尾写'再次感谢您的时间。'然后用'Warm regards'或'Sincerely'署名。", actionHint: "完成邮件", frequency: "common" },
              { textEn: "Nice! For the ending, thank them again for their time and say you'll keep them posted. Sign off with 'Best regards' or 'Sincerely.'", textZh: "不错！结尾再次感谢时间并说会汇报进展。用'Best regards'或'Sincerely'署名。", actionHint: "检查格式后发送", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "What about sending a small gift too? In China, we usually give gifts to teachers to show appreciation.",
            textZh: "要不要也送个小礼物？在中国我们一般给老师送礼物表示感谢。",
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Be careful with that — in the US, giving gifts to professors can actually be seen as inappropriate, especially before grades are finalized. A heartfelt email is usually enough. Maybe a small thing like a coffee gift card after the semester is over would be okay.",
            textZh: "这个要小心——在美国给教授送礼物可能被认为不合适，特别是在成绩出来之前。一封真诚的邮件通常就够了。学期结束后送个咖啡礼品卡之类的小东西可能还行。",
            keyPhrases: [
              { en: "inappropriate", zh: "不合适的" },
              { en: "grades are finalized", zh: "成绩已确定" },
              { en: "heartfelt", zh: "真诚的/发自内心的" },
              { en: "gift card", zh: "礼品卡" },
            ],
            culturalMeaning: "在美国学术环境中，给教授送贵重礼物可能被视为贿赂或不当行为。真诚的感谢邮件比礼物更受欢迎。",
            alternativeExpressions: [
              { textEn: "Careful with gifts for professors here — it can be seen as a bribe, especially during the semester. A sincere email is really the best move. Maybe a small gift card after finals.", textZh: "在这里给教授送礼要小心——可能被看成贿赂，特别是学期中。真诚的邮件真的是最好的方式。期末后送个小礼品卡也许行。", actionHint: "以邮件为主", frequency: "common" },
              { textEn: "In the US, professors can't really accept gifts while grades are pending. Stick with a heartfelt email — that honestly means more to them anyway.", textZh: "在美国教授在出成绩前不太能收礼物。写封真诚的邮件——说实话对他们来说这更有意义。", actionHint: "先发邮件就好", frequency: "occasional" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 宠物与动物互动 ====================
  {
    id: "social-13",
    category: "social",
    titleZh: "宠物与动物互动",
    titleEn: "Pets & Animal Encounters",
    description: "在国外遇到宠物主人、遛狗、动物园等场景的日常社交对话",
    otherRole: "宠物主人/路人",
    otherRoleIcon: "dog",
    flows: [
      // --- Flow 1: 遛狗/公园遇到宠物 ---
      {
        id: "dog-park",
        titleZh: "公园遇到宠物",
        titleEn: "Meeting Pets at the Park",
        description: "在公园散步时遇到别人的狗，想要逗狗或搭话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Oh, what a cute dog! Can I pet him?",
            textZh: "哦，好可爱的狗！我能摸摸他吗？",
            culturalNote: "在西方国家，摸别人的狗之前一定要先问主人。直接摸是不礼貌的，而且有些狗可能会咬人。",
          },
          {
            speaker: "them",
            role: "狗主人",
            textEn: "Of course! He's super friendly. His name is Buddy. Just let him sniff your hand first.",
            textZh: "当然！他超级友好的。他叫 Buddy。先让他闻闻你的手。",
            keyPhrases: [
              { en: "pet", zh: "摸/抚摸（动物）" },
              { en: "super friendly", zh: "超级友好" },
              { en: "sniff your hand", zh: "闻你的手" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, go ahead! He loves attention. Watch out — he's a licker!", textZh: "可以啊！他超喜欢被关注。小心——他会舔人！", actionHint: "小心被狗舔", frequency: "common" },
              { textEn: "I'd rather you didn't — he's a bit nervous around strangers. Sorry!", textZh: "最好不要——他对陌生人比较紧张。不好意思！", actionHint: "尊重主人的意愿，不要靠近", frequency: "occasional" },
            ],
            vocabNotes: {
              "pet": {
                meaningInContext: "在这句话里 pet 是动词，表示「抚摸」动物，不是名词「宠物」",
                similarUsage: "类似用法：Can I pet your cat?",
              },
            },
          },
          {
            speaker: "you",
            textEn: "Hey Buddy! You're such a good boy. What breed is he?",
            textZh: "嘿 Buddy！你真是个好孩子。他是什么品种的？",
          },
          {
            speaker: "them",
            role: "狗主人",
            textEn: "He's a golden retriever. We got him as a puppy two years ago. He's still got that puppy energy though! Do you have any pets?",
            textZh: "他是金毛犬。两年前小狗的时候领养的。不过还是像小狗一样精力旺盛！你养宠物吗？",
            keyPhrases: [
              { en: "breed", zh: "品种" },
              { en: "golden retriever", zh: "金毛犬" },
              { en: "puppy", zh: "小狗/幼犬" },
              { en: "puppy energy", zh: "小狗一样的精力" },
            ],
            alternativeExpressions: [
              { textEn: "He's a golden! Got him when he was just a pup, about two years ago. Still acts like a baby though. Do you have any pets?", textZh: "他是金毛！两年前还是小奶狗的时候领的。不过还像小孩一样。你养宠物吗？", actionHint: "分享你对养宠物的想法", frequency: "common" },
              { textEn: "Golden retriever — the best dogs ever, in my totally unbiased opinion. We've had him since he was tiny. You a dog person?", textZh: "金毛——绝对是最好的狗，我完全不偏心。从他很小就养了。你是狗派的？", actionHint: "说说你对狗的喜好", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not right now, but I've always wanted a dog. I'm a bit worried about the responsibility though — especially since I work long hours.",
            textZh: "现在没有，但我一直想养一只狗。不过有点担心责任——尤其是我工作时间很长。",
          },
          {
            speaker: "them",
            role: "狗主人",
            textEn: "I totally get that. We use a dog walker who comes by at noon. And there are doggy daycare places too. It's a commitment, but the companionship is so worth it.",
            textZh: "完全理解。我们请了一个遛狗人中午来。还有狗狗日托中心。确实需要投入，但陪伴感太值了。",
            keyPhrases: [
              { en: "dog walker", zh: "遛狗人" },
              { en: "doggy daycare", zh: "狗狗日托" },
              { en: "commitment", zh: "投入/承诺" },
              { en: "companionship", zh: "陪伴" },
              { en: "worth it", zh: "值得" },
            ],
            localVariants: {
              "en-US": "We use a dog walker. There are doggy daycares too.",
              "en-GB": "We have a dog sitter who pops in at lunch. There are also doggy crèches.",
              "en-AU": "We've got a dog walker. There are puppy day cares around too.",
            },
            alternativeExpressions: [
              { textEn: "Yeah, it's a big commitment. We have a walker come by during the day. And there's doggy daycare too. But honestly, the companionship is worth every penny.", textZh: "确实投入挺大的。我们白天请人来遛。也有狗狗日托。但说实话那种陪伴感值得每一分钱。", actionHint: "了解养狗的成本", frequency: "common" },
              { textEn: "I hear you. We hired a dog walker for the midday walks. There are also daycare options. It's work, but the love you get back? Totally worth it.", textZh: "理解。我们请了遛狗人来中午遛。也有日托选择。确实费心，但得到的爱？完全值得。", actionHint: "认真考虑养狗", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Dog walker — that's a thing here? We don't really have that in China. How much does it cost?",
            textZh: "遛狗人——这里有这种服务？中国没怎么有。费用多少？",
            culturalNote: "遛狗服务（dog walking service）在欧美很普遍，一般每次15-30美元。也有通过 Rover、Wag 等APP预约的。",
          },
          {
            speaker: "them",
            role: "狗主人",
            textEn: "Usually around fifteen to twenty-five dollars per walk. There are apps like Rover and Wag where you can find walkers nearby. Oh, looks like Buddy wants to play with that labrador over there!",
            textZh: "一般每次遛狗15到25美元。有像 Rover 和 Wag 这样的APP可以找附近的遛狗人。哦，看起来 Buddy 想跟那边那只拉布拉多玩！",
            keyPhrases: [
              { en: "per walk", zh: "每次遛狗" },
              { en: "labrador", zh: "拉布拉多犬" },
            ],
            alternativeExpressions: [
              { textEn: "Depends on the area, but like 15 to 25 bucks a walk. Apps like Rover make it super easy to find someone. Oh — looks like Buddy's got a new friend!", textZh: "看地区，大概15到25美元一次。Rover这种App找人超方便。哦——Buddy交到新朋友了！", actionHint: "考虑下载Rover", frequency: "common" },
              { textEn: "Ballpark 15 to 25 a walk. Check out Rover or Wag — tons of walkers on there. Ooh, Buddy wants to play with that dog over there!", textZh: "大概15到25一次。看看Rover或Wag——上面遛狗人超多。哟Buddy想跟那边那只狗玩！", actionHint: "了解App选择", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "He's so playful! Thanks for letting me pet him. Enjoy your walk!",
            textZh: "他好爱玩！谢谢你让我摸他。散步愉快！",
          },
          {
            speaker: "them",
            role: "狗主人",
            textEn: "Anytime! If you ever want to try dog sitting to see if a dog is right for you, Rover has that option too. Nice meeting you!",
            textZh: "不客气！如果你想试试寄养别人的狗看看自己适不适合养狗，Rover 也有这个选项。很高兴认识你！",
            keyPhrases: [
              { en: "dog sitting", zh: "寄养狗/帮忙照看狗" },
              { en: "right for you", zh: "适合你的" },
            ],
            alternativeExpressions: [
              { textEn: "No problem! Oh hey, if you want to test the waters, try dog-sitting through Rover first. Nice chatting with you!", textZh: "不客气！对了如果你想先试试水，可以通过Rover先帮人照看狗。很高兴聊天！", actionHint: "考虑先试试帮人看狗", frequency: "common" },
              { textEn: "My pleasure! Pro tip — try fostering or pet-sitting first to see if dog life is for you. Enjoy the rest of your walk!", textZh: "不客气！小建议——先试试寄养或帮人看狗，看看养狗生活适不适合你。散步愉快！", actionHint: "先体验再决定", frequency: "occasional" },
            ],
          },
        ],
      },

      // --- Flow 2: 关于宠物的深度聊天 ---
      {
        id: "pet-conversation",
        titleZh: "关于宠物的深度聊天",
        titleEn: "Deep Pet Conversation",
        description: "和邻居或朋友聊养宠物的经历和故事",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "邻居",
            textEn: "I saw you looking at dogs on your phone earlier. Are you thinking about getting one?",
            textZh: "我刚才看到你在手机上看狗狗。你在考虑养一只吗？",
            alternativeExpressions: [
              { textEn: "Couldn't help but notice you scrolling through dog pics earlier. You thinking about getting one?", textZh: "刚才忍不住看到你在刷狗狗照片。在考虑养一只吗？", actionHint: "大方承认", frequency: "common" },
              { textEn: "Hey, I totally saw you looking at puppies on your phone. Are you in the market for a dog?", textZh: "嘿我看到你在手机上看小狗了。你打算养狗吗？", actionHint: "分享你的想法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yeah, I'm seriously considering it. But I'm not sure whether to adopt from a shelter or buy from a breeder. What do you think?",
            textZh: "是的，我在认真考虑。但不确定是从收容所领养还是从犬舍买。你觉得呢？",
            culturalNote: "在欧美，\"adopt, don't shop\"（领养代替购买）是非常流行的理念。很多人会倡导从shelter（收容所）领养。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Personally, I'm a big advocate for adoption. There are so many wonderful dogs in shelters that need homes. My dog Max is a rescue, and he's the best thing that ever happened to me.",
            textZh: "就我个人来说，我非常支持领养。收容所有太多好狗狗需要家了。我的狗 Max 就是救助犬，他是我生命中最好的事。",
            keyPhrases: [
              { en: "advocate for adoption", zh: "支持领养" },
              { en: "shelter", zh: "收容所" },
              { en: "rescue", zh: "救助犬/被救助的" },
            ],
            vocabNotes: {
              "rescue": {
                meaningInContext: "在这句话里 rescue 用作名词/形容词，指从收容所救助的动物",
                similarUsage: "类似用法：She adopted a rescue cat from the local shelter.",
              },
            },
            alternativeExpressions: [
              { textEn: "Honestly? Adopt, don't shop — that's my motto. Shelters have the most amazing dogs. My rescue Max changed my life.", textZh: "说实话？领养代替购买——这是我的座右铭。收容所有最棒的狗。我的救助犬Max改变了我的人生。", actionHint: "了解领养流程", frequency: "common" },
              { textEn: "I'm definitely team adoption. There are so many great dogs that just need a home. My boy Max is from a shelter and he's the best.", textZh: "我绝对支持领养。有太多好狗狗需要一个家。我家Max就是从收容所来的，他是最好的。", actionHint: "问问领养的细节", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "How was the adoption process? Was it complicated?",
            textZh: "领养过程怎么样？复杂吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "It's actually pretty straightforward. You fill out an application, they do a home check, and then you get to meet the dogs. Some shelters even have fostering programs where you can try before you commit. The adoption fee is usually around one to two hundred dollars, which includes vaccinations and neutering.",
            textZh: "其实挺简单的。你填一个申请表，他们做个家庭检查，然后你可以见狗狗。有些收容所还有寄养项目，让你先试养再决定。领养费一般在100到200美元，包括疫苗和绝育。",
            keyPhrases: [
              { en: "straightforward", zh: "简单直接的" },
              { en: "home check", zh: "家庭检查" },
              { en: "fostering programs", zh: "寄养项目" },
              { en: "adoption fee", zh: "领养费" },
              { en: "vaccinations", zh: "疫苗" },
              { en: "neutering", zh: "绝育" },
            ],
            alternativeExpressions: [
              { textEn: "Super easy! Just visit the shelter, fill out some forms, and if approved, you can take your new buddy home.", textZh: "超简单！去收容所，填些表格，通过审核就能带新朋友回家了。", actionHint: "询问更多细节", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds manageable. What about the vet costs afterward? I heard it can be expensive here.",
            textZh: "听起来可以。之后的兽医费用呢？我听说这边很贵。",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Vet bills can add up, yeah. Annual checkups are around two to three hundred. I'd strongly recommend pet insurance — it's saved me thousands when Max needed emergency surgery last year. Companies like Lemonade or Trupanion are pretty good.",
            textZh: "兽医费用确实会累积。年度体检大概两三百美元。我强烈推荐买宠物保险——去年 Max 需要紧急手术，保险帮我省了几千美元。Lemonade 和 Trupanion 这些公司都不错。",
            keyPhrases: [
              { en: "vet bills", zh: "兽医费用" },
              { en: "add up", zh: "累积起来" },
              { en: "annual checkups", zh: "年度体检" },
              { en: "pet insurance", zh: "宠物保险" },
              { en: "emergency surgery", zh: "紧急手术" },
            ],
            vocabNotes: {
              "add up": {
                meaningInContext: "在这句话里表示：费用一项项累加起来，总数变得很大",
                similarUsage: "类似用法：Small purchases add up quickly.",
              },
            },
            alternativeExpressions: [
              { textEn: "Vet costs are no joke — annual stuff is a couple hundred, but emergencies can be thousands. Get pet insurance, seriously. It saved me big time with Max.", textZh: "兽医费用不是闹着玩的——年检几百块但急诊可能几千。一定要买宠物保险。去年Max手术保险帮了大忙。", actionHint: "了解宠物保险", frequency: "common" },
              { textEn: "Yeah, it's not cheap. Routine stuff is manageable, but one emergency and boom — huge bill. That's why pet insurance is a must.", textZh: "确实不便宜。常规的还行，但一个急诊——账单爆炸。所以宠物保险是必须的。", actionHint: "调研保险公司", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Pet insurance — that's interesting. We don't really have that in China. I think I'm going to visit a shelter this weekend. Any tips?",
            textZh: "宠物保险——有意思。中国没怎么有。我想这周末去收容所看看。有什么建议吗？",
          },
          {
            speaker: "them",
            role: "邻居",
            textEn: "Don't fall in love with the first dog you see — take your time! Ask the staff about the dog's temperament and history. And bring some treats — it helps you bond. Would you like me to come with you? I know the shelter on Oak Street really well.",
            textZh: "别一见到第一只狗就心动——慢慢来！问工作人员狗狗的性格和经历。带点零食——有助于建立感情。要我陪你去吗？我对Oak Street那家收容所很熟。",
            keyPhrases: [
              { en: "fall in love with", zh: "爱上/心动" },
              { en: "temperament", zh: "性格/脾性" },
              { en: "treats", zh: "零食（给动物的）" },
              { en: "bond", zh: "建立感情/培养亲密关系" },
            ],
            culturalMeaning: "\"Don't fall in love with the first dog you see\" 不是说不让你喜欢，而是建议你多看几只做比较，因为在收容所很容易被每一只狗狗感动。",
            alternativeExpressions: [
              { textEn: "Take your time — don't just go with the first cute face you see! Ask about their personality and background. Oh, and I can come with you if you want.", textZh: "慢慢来——别看到第一张可爱的脸就走不动了！问问性格和背景。对了需要的话我陪你去。", actionHint: "接受陪同的提议", frequency: "common" },
              { textEn: "Real talk: it's tempting to adopt the first one that looks at you with those puppy eyes, but meet a few first. Want me to tag along? I know a great shelter.", textZh: "说真的：很容易被第一只用狗狗眼看你的给收买，但先多看几只。要不要我陪你去？我知道一家很好的收容所。", actionHint: "一起去收容所", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great! Let's go together. I really appreciate your help with all of this.",
            textZh: "太好了！我们一起去吧。真的很感谢你帮我了解这些。",
          },
        ],
      },
    ],
  },

  // ==================== 商务会议自我介绍 ====================
  {
    id: "social-business-meeting",
    category: "social",
    titleZh: "商务会议自我介绍",
    titleEn: "Business Meeting Introduction",
    description: "参加海外商务会议，做自我介绍和交流",
    otherRole: "客户 / 商业伙伴",
    otherRoleIcon: "briefcase",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "first-meeting",
        titleZh: "初次见面",
        titleEn: "First Business Meeting",
        description: "第一次与海外客户或合作伙伴见面",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Good morning. You must be Mr. Johnson? I'm Wayne from TechBridge Solutions in Shenzhen. It's a pleasure to finally meet you in person.",
            textZh: "早上好。您是Johnson先生吧？我是深圳TechBridge Solutions的Wayne。终于当面见到您了，很高兴。",
            formalVersion: "Good morning, Mr. Johnson. I'm Wayne Zhang, Director of International Partnerships at TechBridge Solutions. It's a privilege to meet you face to face.",
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "Wayne, great to finally put a face to the name! Please, call me Tom. How was your flight? Did you have any trouble finding our office?",
            textZh: "Wayne，终于见到真人了！叫我Tom就行。飞机还好吗？找到我们办公室没费什么劲吧？",
            keyPhrases: [
              { en: "put a face to the name", zh: "终于见到真人了（之前只通过邮件/电话联系）" },
              { en: "call me Tom", zh: "叫我Tom就行（表示友好）" },
            ],
            literalMeaning: "\"put a face to the name\" 字面意思是 \"给名字配上一张脸\"，意思是之前只知道名字现在终于见到本人了",
            alternativeExpressions: [
              { textEn: "Wayne! So good to finally meet in person. Call me Tom. How was the trip over?", textZh: "Wayne！终于见面了太好了。叫我Tom。过来还顺利吗？", actionHint: "简短回答旅途情况", frequency: "common" },
              { textEn: "Ah, Wayne — been looking forward to this! Please, it's Tom. Long flight?", textZh: "Wayne——一直很期待！叫我Tom就好。飞了很久吧？", actionHint: "礼貌回答并寒暄", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "The flight was good, thank you. Your office is in a great location. I brought a small gift from China — Longjing tea. I hope you like it.",
            textZh: "飞机挺好的，谢谢。你们办公室位置真好。我从中国带了一份小礼物——龙井茶。希望你喜欢。",
            culturalNote: "中国人有送礼的商务习惯。在西方商务场合，小礼物是加分项但不是必须的。食品、茶叶等中国特产是很好的选择。",
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "Oh, that's very thoughtful of you! I love Chinese tea. Thank you. Now, shall we get down to business? I've set up the conference room for us. Can I get you a coffee or water first?",
            textZh: "太贴心了！我很喜欢中国茶。谢谢。那我们开始谈正事？我已经准备好了会议室。先给你来杯咖啡或水吗？",
            keyPhrases: [
              { en: "get down to business", zh: "谈正事/进入正题" },
              { en: "conference room", zh: "会议室" },
              { en: "thoughtful", zh: "贴心的/体贴的" },
            ],
            alternativeExpressions: [
              { textEn: "That's so kind! I'm actually a big tea lover. Thank you. Now, shall we get started? Conference room's all set.", textZh: "太贴心了！我其实很爱喝茶。谢谢。那我们开始吧？会议室都准备好了。", actionHint: "跟着去会议室", frequency: "common" },
              { textEn: "Wow, thank you! What a nice touch. I love tea. OK, let me grab you a coffee and we'll head to the meeting room.", textZh: "哇谢谢！太有心了。我爱喝茶。好我给你倒杯咖啡然后去会议室。", actionHint: "接受咖啡准备开会", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "A coffee would be great, thank you. I've prepared a brief presentation about our company and the partnership proposal. It should take about 15 minutes.",
            textZh: "来杯咖啡吧，谢谢。我准备了一个简短的公司介绍和合作方案演示。大约15分钟。",
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "Sounds perfect. Let me grab a few team members who'll be joining us. We're really excited about this potential collaboration.",
            textZh: "很好。我叫几个同事一起过来。我们对这次潜在的合作非常期待。",
            keyPhrases: [
              { en: "team members", zh: "团队成员/同事" },
              { en: "potential collaboration", zh: "潜在合作" },
            ],
            alternativeExpressions: [
              { textEn: "Great — let me pull in a couple of my people. We're all really excited about what you've put together.", textZh: "好的——我叫几个同事过来。我们都对你准备的方案很期待。", actionHint: "准备好演示", frequency: "common" },
              { textEn: "Perfect. Give me two minutes to grab the team. Everyone's been looking forward to this meeting.", textZh: "好的。给我两分钟叫团队过来。大家一直很期待这次会议。", actionHint: "做好演示准备", frequency: "occasional" },
            ],
          },
        ],
      },
      {
        id: "presentation-qna",
        titleZh: "演示与问答环节",
        titleEn: "Presentation & Q&A",
        description: "做完演示后回答对方的问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "That concludes my presentation. I'd be happy to answer any questions you might have.",
            textZh: "以上就是我的演示。很乐意回答大家的问题。",
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "Thank you, Wayne — very impressive. I have a question about your pricing model. You mentioned a tiered structure. Could you walk us through the specifics?",
            textZh: "谢谢Wayne——非常精彩。关于定价模型有个问题。你提到了阶梯定价结构。能详细说说吗？",
            keyPhrases: [
              { en: "pricing model", zh: "定价模型" },
              { en: "tiered structure", zh: "阶梯结构" },
              { en: "walk us through", zh: "详细说说/带我们过一遍" },
              { en: "specifics", zh: "具体细节" },
            ],
            alternativeExpressions: [
              { textEn: "Thanks Wayne, really solid presentation. Quick question — can you break down the pricing tiers for us?", textZh: "谢谢Wayne，演示非常扎实。快问一下——能详细说说定价层级吗？", actionHint: "详细解释定价", frequency: "common" },
              { textEn: "Great stuff, Wayne. I'm curious about the pricing — you mentioned tiers? Could you elaborate on that?", textZh: "很棒Wayne。我对定价很好奇——你提到了分级？能展开说说吗？", actionHint: "展开说明定价模型", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course. We offer three tiers: Basic, Professional, and Enterprise. Let me pull up the comparison chart... As you can see, the main difference is the number of users and the level of customer support.",
            textZh: "当然。我们有三个级别：基础版、专业版和企业版。我把对比图调出来……如你所见，主要区别在于用户数量和客户支持级别。",
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "What about data security? Our legal team will need to know about compliance with US data protection regulations.",
            textZh: "数据安全方面呢？我们法务部需要了解是否符合美国数据保护法规。",
            keyPhrases: [
              { en: "data security", zh: "数据安全" },
              { en: "legal team", zh: "法务部" },
              { en: "compliance", zh: "合规" },
              { en: "data protection regulations", zh: "数据保护法规" },
            ],
            alternativeExpressions: [
              { textEn: "One more thing — data security. Our compliance team is going to want details on that. How do you handle US data regulations?", textZh: "还有一个——数据安全。我们合规团队会需要详细信息。你们怎么处理美国数据法规的？", actionHint: "展示合规资质", frequency: "common" },
              { textEn: "Security-wise, what's the setup? Legal will definitely be asking about compliance with US standards.", textZh: "安全方面是什么情况？法务肯定会问美国标准的合规性。", actionHint: "提供合规文件", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great question. We're fully compliant with SOC 2 and GDPR standards. I can provide our compliance certificates and audit reports. We also offer data residency options — your data can be stored entirely within the US if that's a requirement.",
            textZh: "好问题。我们完全符合SOC 2和GDPR标准。可以提供合规证书和审计报告。我们还提供数据驻留选项——如果有要求，你们的数据可以完全存储在美国。",
            vocabNotes: {
              "SOC 2": { meaningInContext: "一种信息安全合规标准，证明公司能安全处理数据" },
              "GDPR": { meaningInContext: "欧洲通用数据保护条例，全球最严格的数据保护标准之一" },
              "data residency": { meaningInContext: "数据驻留——决定数据存储在哪个国家/地区的策略" },
            },
          },
          {
            speaker: "them",
            role: "客户",
            textEn: "That's reassuring. I think we have a solid basis for moving forward. How about we schedule a follow-up meeting next week to discuss the contract details? I'll have our legal and tech teams join.",
            textZh: "这让人放心。我觉得我们有很好的合作基础。下周安排一次后续会议讨论合同细节如何？我会让法务和技术团队一起参加。",
            keyPhrases: [
              { en: "reassuring", zh: "令人放心的" },
              { en: "solid basis", zh: "坚实基础" },
              { en: "moving forward", zh: "推进/继续" },
              { en: "follow-up meeting", zh: "后续会议" },
              { en: "contract details", zh: "合同细节" },
            ],
            alternativeExpressions: [
              { textEn: "Good to hear. I think there's real potential here. How about a follow-up next week with our legal and tech teams?", textZh: "太好了。我觉得真的有合作潜力。下周安排个后续会议让法务和技术团队参加？", actionHint: "确认下周时间", frequency: "common" },
              { textEn: "That puts my mind at ease. Let's move forward — I'll set up a meeting next week to hammer out the details.", textZh: "这让我放心了。继续推进吧——我安排下周的会议敲定细节。", actionHint: "确认具体日期", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be ideal. I'm available Tuesday or Wednesday next week. Thank you for your time today, Tom. I'm very optimistic about our partnership.",
            textZh: "太好了。下周二或周三我都行。谢谢今天的时间Tom。我对我们的合作非常乐观。",
          },
        ],
      },
    ],
  },

  // ==================== 社交活动 / 行业交流 ====================
  {
    id: "social-networking-event",
    category: "social",
    titleZh: "行业交流 / 社交活动",
    titleEn: "Networking Event",
    description: "参加行业交流会、酒会等社交场合",
    otherRole: "参会者 / 行业同行",
    otherRoleIcon: "users",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "icebreaker",
        titleZh: "破冰搭话",
        titleEn: "Breaking the Ice",
        description: "在社交活动中主动和陌生人搭话",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi there! I don't think we've met. I'm Wayne — I work in digital marketing. What brings you to this event?",
            textZh: "你好！我们应该没见过。我是Wayne——做数字营销的。什么原因来参加这个活动？",
          },
          {
            speaker: "them",
            role: "参会者",
            textEn: "Hey Wayne! I'm Sarah. I'm a product manager at a startup here. I come to these meetups to learn what other companies are doing. How about you — are you based here, or visiting?",
            textZh: "嗨Wayne！我是Sarah。我在本地一家创业公司做产品经理。我参加这些聚会是了解其他公司在做什么。你呢——在本地还是来访？",
            keyPhrases: [
              { en: "product manager", zh: "产品经理" },
              { en: "startup", zh: "创业公司" },
              { en: "meetups", zh: "聚会/交流会" },
              { en: "based here", zh: "在本地的" },
            ],
            alternativeExpressions: [
              { textEn: "Nice to meet you, Wayne! I'm Sarah — I do product at a local startup. These events are great for picking up new ideas. Are you local?", textZh: "认识你很高兴Wayne！我叫Sarah——在本地创业公司做产品。这种活动学新东西很好。你是本地的吗？", actionHint: "介绍你的来历", frequency: "common" },
              { textEn: "Hey! Sarah here. I'm a PM at a startup downtown. I love these meetups — always meet interesting people. Where are you based?", textZh: "嗨！我是Sarah。在市区一家创业公司做PM。我很喜欢这种聚会——总能认识有趣的人。你在哪工作？", actionHint: "说明你从哪里来", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm visiting from Shenzhen, actually. I'm here for a conference and thought this would be a great way to meet people in the industry.",
            textZh: "我其实是从深圳来的。来参加一个会议，觉得这是认识行业内人士的好机会。",
          },
          {
            speaker: "them",
            role: "参会者",
            textEn: "Shenzhen — tech capital of China! That's so cool. What kind of digital marketing do you focus on? SEO, paid ads, content?",
            textZh: "深圳——中国的科技之都！太酷了。你做什么类型的数字营销？SEO、付费广告、还是内容营销？",
            keyPhrases: [
              { en: "SEO", zh: "搜索引擎优化" },
              { en: "paid ads", zh: "付费广告" },
              { en: "content", zh: "内容营销" },
            ],
            alternativeExpressions: [
              { textEn: "Oh wow, Shenzhen! That's where all the cool tech stuff happens, right? What area of digital marketing are you in?", textZh: "哇深圳！那是所有酷炫科技发生的地方对吧？你做哪个方向的数字营销？", actionHint: "详细介绍你的业务", frequency: "common" },
              { textEn: "Shenzhen! I've heard amazing things. The tech scene there is insane. So what's your specialty — SEO, content, ads?", textZh: "深圳！我听说过好多厉害的。那边科技圈太疯了。你的专长是什么——SEO、内容还是广告？", actionHint: "介绍你的专业方向", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Mainly content marketing and cross-border e-commerce. We help Chinese brands reach Western markets. It's a growing space.",
            textZh: "主要是内容营销和跨境电商。我们帮中国品牌打入西方市场。这个领域在快速增长。",
          },
          {
            speaker: "them",
            role: "参会者",
            textEn: "That's fascinating! We're actually looking into the Chinese market ourselves. Would you mind exchanging contact info? I'd love to pick your brain over coffee sometime.",
            textZh: "太有意思了！我们其实也在研究中国市场。方便交换联系方式吗？改天约咖啡，想向你请教一些问题。",
            keyPhrases: [
              { en: "exchanging contact info", zh: "交换联系方式" },
              { en: "pick your brain", zh: "向你请教/借鉴你的经验" },
            ],
            literalMeaning: "\"pick your brain\" 字面意思是 \"挑选你的大脑\"，实际意思是 \"向你请教/借鉴你的想法\"",
            alternativeExpressions: [
              { textEn: "That's so relevant! We've been exploring China too. Can we exchange info? I'd love to pick your brain sometime.", textZh: "太相关了！我们也在研究中国。能交换联系方式吗？改天想向你请教。", actionHint: "交换联系方式", frequency: "common" },
              { textEn: "No way, that's exactly what we need! Would you be open to grabbing coffee? I have a ton of questions about the Chinese market.", textZh: "太巧了这正是我们需要的！有空喝咖啡聊聊吗？我对中国市场有一堆问题。", actionHint: "安排后续见面", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Of course! Here's my card — or if you prefer, let me add you on LinkedIn. I'd be happy to chat more.",
            textZh: "当然！这是我的名片——或者你更喜欢的话我加你LinkedIn。很乐意多聊聊。",
          },
        ],
      },
      {
        id: "deeper-networking",
        titleZh: "深入交流",
        titleEn: "Deeper Networking",
        description: "建立更深入的职业联系，探讨合作可能",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "参会者",
            textEn: "So Wayne, I've been thinking about what you said. Your experience with Chinese social media marketing is exactly what we need. Would you be open to some kind of consulting arrangement?",
            textZh: "Wayne，我一直在想你说的。你在中国社交媒体营销方面的经验正是我们需要的。你有兴趣做某种咨询合作吗？",
            keyPhrases: [
              { en: "consulting arrangement", zh: "咨询合作" },
              { en: "open to", zh: "有兴趣/愿意考虑" },
            ],
            alternativeExpressions: [
              { textEn: "I've been mulling over our chat. Your China market expertise is exactly what we're missing. Would you consider some kind of consulting gig?", textZh: "我一直在想我们的谈话。你的中国市场经验正是我们缺少的。你会考虑做咨询吗？", actionHint: "表达兴趣并了解需求", frequency: "common" },
              { textEn: "Wayne, real talk — I can't stop thinking about what you shared. We need someone with your experience. Any chance you'd be open to consulting?", textZh: "Wayne说真的——你分享的东西我一直在想。我们需要你这样有经验的人。有没有可能做咨询？", actionHint: "积极回应并探讨", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm definitely interested. What did you have in mind? A one-time consultation, or something ongoing?",
            textZh: "我很有兴趣。你是怎么想的？一次性咨询还是持续性的？",
          },
          {
            speaker: "them",
            role: "参会者",
            textEn: "Ideally ongoing. We're launching in China next quarter and we need someone who really understands the market — WeChat marketing, Xiaohongshu strategy, KOL partnerships. Could you put together a proposal?",
            textZh: "最好是持续性的。我们下个季度要进入中国市场，需要一个真正懂市场的人——微信营销、小红书策略、KOL合作。你能做一个方案吗？",
            keyPhrases: [
              { en: "next quarter", zh: "下个季度" },
              { en: "KOL partnerships", zh: "KOL合作" },
              { en: "put together a proposal", zh: "做一个方案" },
            ],
            alternativeExpressions: [
              { textEn: "Something ongoing, ideally. We're entering the Chinese market next quarter — WeChat, Xiaohongshu, KOLs, the whole thing. Could you draft a proposal?", textZh: "最好是长期的。我们下季度进入中国市场——微信、小红书、KOL全套。你能做个方案吗？", actionHint: "答应并确认时间", frequency: "common" },
              { textEn: "Ongoing for sure. We need help with the full stack — WeChat, Red, KOL strategy. Think you could put something together for us?", textZh: "肯定是长期的。我们需要全方位帮助——微信、小红书、KOL策略。你能整理个方案给我们吗？", actionHint: "确认并准备方案", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Absolutely. I'll send you a preliminary proposal by email within a week. Should I include case studies from similar projects we've done?",
            textZh: "当然可以。一周内给你发一份初步方案。需要附上我们做过的类似项目案例吗？",
          },
          {
            speaker: "them",
            role: "参会者",
            textEn: "That would be perfect — case studies always help when I present to my team. It's been great meeting you tonight, Wayne. I have a good feeling about this.",
            textZh: "太好了——给团队汇报时案例总是很有帮助。今晚认识你太好了Wayne。我觉得这个合作有戏。",
            keyPhrases: [
              { en: "case studies", zh: "案例/项目案例" },
              { en: "I have a good feeling about this", zh: "我觉得这件事有戏/感觉不错" },
            ],
            alternativeExpressions: [
              { textEn: "That'd be amazing — case studies make it so much easier to sell to my team. Great meeting you tonight, Wayne. I've got a really good feeling about this.", textZh: "那就太好了——有案例给团队汇报方便多了。今晚认识你太好了Wayne。我对这个合作感觉非常好。", actionHint: "表达期待并告别", frequency: "common" },
              { textEn: "Perfect — my team loves seeing real results. Honestly Wayne, this feels like it could be something great. Let's make it happen.", textZh: "完美——我的团队最喜欢看实际成果。Wayne说真的，感觉这能成大事。让我们搞起来。", actionHint: "积极回应并跟进", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Likewise, Sarah. This is exactly why I love attending events like this. Looking forward to working together!",
            textZh: "我也是Sarah。这正是我喜欢参加这类活动的原因。期待合作！",
          },
        ],
      },
    ],
  },

  // ==================== 语言交换 ====================
  {
    id: "social-language-exchange",
    category: "social",
    titleZh: "语言交换",
    titleEn: "Language Exchange",
    description: "参加语言交换活动，互相学习语言",
    otherRole: "语言交换伙伴",
    otherRoleIcon: "chat",
    journeyPhase: "daily",
    priority: "likely",
    flows: [
      {
        id: "first-session",
        titleZh: "第一次语言交换",
        titleEn: "First Language Exchange Session",
        description: "第一次和外国朋友做语言交换",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! Are you here for the language exchange? I'm Wayne — I speak Chinese and I'm learning English.",
            textZh: "你好！你是来参加语言交换的吗？我是Wayne——我说中文，在学英语。",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn: "Yes! I'm Alex. I'm a native English speaker and I've been studying Mandarin for about a year. My speaking is still pretty rough though. Should we do 30 minutes in English, then 30 minutes in Chinese?",
            textZh: "是的！我是Alex。我母语是英语，学中文大约一年了。不过我的口语还很差。我们用英语30分钟、中文30分钟怎么样？",
            keyPhrases: [
              { en: "native English speaker", zh: "英语母语者" },
              { en: "pretty rough", zh: "还很差/不太熟练" },
              { en: "language exchange", zh: "语言交换" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah! I'm Alex — English native, been studying Chinese for about a year. My pronunciation is still terrible though. Wanna do half and half — 30 minutes each?", textZh: "是的！我叫Alex——母语英语，学中文大约一年了。发音还是很烂。各30分钟怎么样？", actionHint: "同意时间安排", frequency: "common" },
              { textEn: "That's me! I'm Alex. I speak English and my Mandarin is... a work in progress. How should we split the time?", textZh: "就是我！我叫Alex。我说英语，中文嘛……还在努力中。时间怎么分配？", actionHint: "讨论时间分配", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sounds perfect! Let's start with English. Can you correct me when I make mistakes? I really want to improve my pronunciation.",
            textZh: "太好了！先用英语开始。我说错了你能纠正我吗？我特别想提高发音。",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn: "Of course! And please do the same for me in Chinese — especially the tones. I always mix up the second and third tones. So tell me, what do you do for a living?",
            textZh: "当然！你帮我纠正中文也一样——特别是声调。我总搞混二声和三声。那聊聊吧，你做什么工作？",
            keyPhrases: [
              { en: "correct me", zh: "纠正我" },
              { en: "tones", zh: "声调" },
              { en: "what do you do for a living", zh: "你做什么工作" },
            ],
            alternativeExpressions: [
              { textEn: "Definitely! Correct away. And please fix my Chinese — especially the tones, I'm hopeless with those. So what do you do?", textZh: "当然！随便纠正。也请纠正我的中文——特别是声调我完全搞不定。你做什么工作？", actionHint: "开始聊天练习", frequency: "common" },
              { textEn: "For sure! And please be ruthless with my Chinese — I need it. Those tones are killing me. Anyway, tell me about yourself!", textZh: "没问题！纠正我中文的时候不用客气——我需要。声调要了我的命。聊聊你自己吧！", actionHint: "自由聊天开始", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I work in... hmm, how do you say 'shi chang ying xiao' in English? Like, promoting products?",
            textZh: "我做……嗯，'市场营销'英语怎么说？就是推广产品那种？",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn: "That's 'marketing'! You work in marketing. And 'promoting products' is totally correct — great job! You could also say 'I'm in marketing' — that's a more casual way to say it.",
            textZh: "那就是'marketing'！你做marketing。'promoting products'完全正确——说得好！你也可以说'I'm in marketing'——更口语化。",
            keyPhrases: [
              { en: "marketing", zh: "市场营销" },
              { en: "I'm in marketing", zh: "我做市场营销的（口语化）" },
            ],
            alternativeExpressions: [
              { textEn: "Marketing! That's the word. And 'promoting products' is spot-on. Even more natural: just say 'I'm in marketing.'", textZh: "Marketing！就是这个词。'promoting products'完全正确。更自然的说法：直接说'I'm in marketing'。", actionHint: "记住新的表达方式", frequency: "common" },
              { textEn: "You're looking for 'marketing'! Good job on 'promoting products' — that works too. A more casual way: 'I'm in marketing.' Try it!", textZh: "你要说的是'marketing'！'promoting products'也对——也能用。更口语化：'I'm in marketing'。试试！", actionHint: "练习新说法", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm in marketing — got it! That's much more natural. OK your turn — tell me about yourself in Chinese!",
            textZh: "I'm in marketing——记住了！自然多了。好了轮到你——用中文介绍一下自己！",
          },
        ],
      },
      {
        id: "correction-techniques",
        titleZh: "互相纠错",
        titleEn: "Correction & Learning Techniques",
        description: "在交流中互相纠正语言错误",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "语伴",
            textEn: "So Wayne, last week you mentioned you wanted to practice past tense. Let's try — tell me about what you did last weekend.",
            textZh: "Wayne，上周你说想练过去式。来试试——告诉我你上周末做了什么。",
            alternativeExpressions: [
              { textEn: "Hey Wayne, you said you wanted to work on past tense, right? Let's do it — tell me what you got up to last weekend.", textZh: "嘿Wayne你说想练过去式对吧？来——跟我说说你上周末干嘛了。", actionHint: "用过去式描述周末", frequency: "common" },
              { textEn: "OK so past tense practice! Walk me through your weekend — what did you do?", textZh: "好来练过去式！给我讲讲你的周末——做了什么？", actionHint: "尝试用过去时态说", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Last weekend I go... I went to a museum with my friends. We see... we saw many beautiful paintings.",
            textZh: "上周末我去了……我和朋友去了博物馆。我们看了……看了很多漂亮的画。",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn: "You're catching yourself — that's great! 'I went' and 'we saw' are perfect. One tip: instead of 'many beautiful paintings', native speakers usually say 'a lot of beautiful paintings' or 'some amazing artwork'. 'Many' sounds a bit formal in casual conversation.",
            textZh: "你能自己纠正——很好！'I went'和'we saw'完全正确。一个小建议：比起'many beautiful paintings'，母语者通常说'a lot of beautiful paintings'或'some amazing artwork'。'many'在日常对话里听起来有点正式。",
            keyPhrases: [
              { en: "catching yourself", zh: "自我纠正" },
              { en: "native speakers", zh: "母语者" },
              { en: "casual conversation", zh: "日常对话" },
            ],
            alternativeExpressions: [
              { textEn: "Nice — you're self-correcting, which is huge! 'Went' and 'saw' are perfect. One thing: swap 'many' for 'a lot of' — sounds way more natural in conversation.", textZh: "不错——你能自我纠正这很厉害！'went'和'saw'完美。一个建议：把'many'换成'a lot of'——日常对话中自然多了。", actionHint: "记住many和a lot of的区别", frequency: "common" },
              { textEn: "Love that you caught your own mistakes — that's a sign of real progress! Quick tip: native speakers usually say 'a lot of' instead of 'many' in casual chat.", textZh: "喜欢你能发现自己的错误——这是真正进步的标志！小建议：母语者日常聊天通常说'a lot of'而不是'many'。", actionHint: "在口语中用a lot of", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, I didn't know 'many' sounds formal! We learned that word in school and use it all the time. Good to know. OK now your turn — tell me about your weekend in Chinese!",
            textZh: "哦，我不知道'many'听起来很正式！我们学校学的一直在用。了解了。好了轮到你——用中文说说你的周末！",
          },
          {
            speaker: "them",
            role: "语伴",
            textEn: "(In Chinese) Wǒ shàng zhōumò... qù le... yī ge péngyou de jiā. Tā zuò le hěn hǎo chī de fàn.",
            textZh: "我上周末……去了……一个朋友的家。他做了很好吃的饭。",
            culturalNote: "语言交换中纠正对方时要温和鼓励，先肯定对的部分再指出可以改进的地方。这样双方都不会感到尴尬。",
            alternativeExpressions: [
              { textEn: "(In rough Chinese) Wǒ shàng ge zhōumò... qù le... yī ge péngyou jiā. Tā zuò de fàn chāo hǎo chī.", textZh: "我上个周末……去了……一个朋友家。他做的饭超好吃。", actionHint: "给出中文纠正和鼓励", frequency: "common" },
              { textEn: "(In Chinese, with some tonal mistakes) Shàng zhōumò wǒ qù péngyou jiā chī fàn. Hěn hǎo chī!", textZh: "上周末我去朋友家吃饭。很好吃！", actionHint: "纠正声调并肯定进步", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Not bad! Just a small correction — in Chinese, we'd say '去了一个朋友家' without '的'. And '做了很好吃的饭' is perfect! Your tones are getting much better.",
            textZh: "不错！小小纠正——中文里我们说'去了一个朋友家'不用'的'。'做了很好吃的饭'完全正确！你的声调进步很大。",
          },
        ],
      },
    ],
  },
];
