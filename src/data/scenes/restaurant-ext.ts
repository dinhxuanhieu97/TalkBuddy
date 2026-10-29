import type { PresetScene } from "../scene-types";

export const RESTAURANT_SCENES_EXT: PresetScene[] = [
  // ==================== 咖啡厅 Coffee Shop ====================
  {
    id: "restaurant-coffee-order",
    tags: ["coffee", "咖啡", "starbucks", "latte"],
    category: "restaurant",
    titleZh: "咖啡厅点单",
    titleEn: "Coffee Shop Order",
    description: "在咖啡厅点一杯咖啡，选择大小、牛奶类型和温度",
    otherRole: "咖啡师",
    otherRoleIcon: "☕",
    flows: [
      {
        id: "basic",
        titleZh: "基础点单",
        titleEn: "Basic Order",
        description: "简单点一杯咖啡",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hi! Welcome to Brew & Co. What can I get started for you?",
            textZh: "嗨！欢迎来到 Brew & Co。想喝点什么？",
            keyPhrases: [{ en: "what can I get started for you", zh: "想喝点什么" }],
            alternativeExpressions: [
              {
                textEn: "Hey there! Welcome in. What can I get for ya?",
                textZh: "嗨！欢迎光临。想要点什么？",
                actionHint: "更随意的欢迎",
                frequency: "common",
              },
              {
                textEn: "Good to see you! What are we drinking today?",
                textZh: "很高兴见到你！今天喝什么？",
                actionHint: "热情招呼",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a latte, please?",
            textZh: "你好，我要一杯拿铁。",
            casualVersion: "Hey, could I grab a latte?",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! What size? We have small, medium, and large.",
            textZh: "好的！要什么杯型？我们有小杯、中杯和大杯。",
            keyPhrases: [{ en: "what size", zh: "什么杯型" }],
            alternativeExpressions: [
              {
                textEn: "You got it! What size would you like?",
                textZh: "好的！要多大的？",
                actionHint: "简短确认",
                frequency: "common",
              },
              {
                textEn: "Great choice! Small, medium, or large for that?",
                textZh: "好选择！要小杯、中杯还是大杯？",
                actionHint: "直接列选项",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium, please.",
            textZh: "中杯，谢谢。",
            culturalNote: "星巴克用 Tall/Grande/Venti，但大多数咖啡厅用 small/medium/large。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hot or iced?",
            textZh: "热的还是冰的？",
            keyPhrases: [{ en: "hot or iced", zh: "热的还是冰的" }],
            alternativeExpressions: [
              {
                textEn: "Would you like that hot or over ice?",
                textZh: "要热的还是加冰的？",
                actionHint: "稍正式的问法",
                frequency: "common",
              },
              {
                textEn: "Want it hot or cold?",
                textZh: "要热的还是冷的？",
                actionHint: "口语化",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Hot, please.", textZh: "热的，谢谢。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Would you like whole milk, skim, oat, or almond milk?",
            textZh: "要全脂奶、脱脂奶、燕麦奶还是杏仁奶？",
            keyPhrases: [
              { en: "whole milk", zh: "全脂奶" },
              { en: "oat", zh: "燕麦奶" },
              { en: "almond milk", zh: "杏仁奶" },
            ],
            alternativeExpressions: [
              {
                textEn: "What kind of milk? We've got regular, skim, oat, and almond.",
                textZh: "什么奶？我们有普通奶、脱脂奶、燕麦奶和杏仁奶。",
                actionHint: "口语化列举",
                frequency: "common",
              },
              {
                textEn: "Any milk preference? We carry dairy and non-dairy options.",
                textZh: "奶有偏好吗？我们有乳制品和非乳的。",
                actionHint: "概括性问法",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Oat milk, please.", textZh: "燕麦奶，谢谢。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "That'll be $5.75. Can I get a name for the order?",
            textZh: "一共5.75美元。请问名字？",
            keyPhrases: [{ en: "can I get a name", zh: "请问名字" }],
            alternativeExpressions: [
              {
                textEn: "That comes to $5.75. What name should I put on it?",
                textZh: "一共5.75美元。写什么名字？",
                actionHint: "换种问名方式",
                frequency: "common",
              },
              {
                textEn: "$5.75 total. And a name for the cup?",
                textZh: "总共5.75美元。杯子上写什么名字？",
                actionHint: "简洁直接",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "It's Wang. W-A-N-G.",
            textZh: "王。W-A-N-G。",
            culturalNote: "美国咖啡厅会在杯子上写名字叫号。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制咖啡",
        titleEn: "Customized Coffee",
        description: "加糖浆、调整浓度等定制需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Good morning! What can I make for you today?",
            textZh: "早上好！今天想喝什么？",
            keyPhrases: [{ en: "what can I make for you", zh: "想喝什么" }],
            alternativeExpressions: [
              {
                textEn: "Morning! What are you having today?",
                textZh: "早！今天喝什么？",
                actionHint: "轻松问候",
                frequency: "common",
              },
              {
                textEn: "Hey! What can I whip up for you?",
                textZh: "嗨！想让我给你做点什么？",
                actionHint: "活泼口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd like a large caramel latte with an extra shot of espresso.",
            textZh: "我要一杯大杯焦糖拿铁，加一份浓缩。",
            casualVersion: "Can I get a large caramel latte with an extra shot?",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! Would you like that sweetened or unsweetened?",
            textZh: "好的！要加糖还是不加糖？",
            keyPhrases: [{ en: "sweetened or unsweetened", zh: "加糖还是不加糖" }],
            alternativeExpressions: [
              {
                textEn: "You got it! Do you want any sweetener in that?",
                textZh: "好的！要加甜味吗？",
                actionHint: "开放式问法",
                frequency: "common",
              },
              {
                textEn: "No problem! Sweet or unsweet?",
                textZh: "没问题！甜的还是不甜的？",
                actionHint: "简化口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Half sweet, please.",
            textZh: "半糖。",
            culturalNote: "\'Half sweet\' 或 \'half the syrup\' 是常见的减糖说法。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Do you want whipped cream on top?",
            textZh: "要加奶油吗？",
            keyPhrases: [{ en: "whipped cream", zh: "奶油" }],
            alternativeExpressions: [
              {
                textEn: "Would you like whip on that?",
                textZh: "要加奶油吗？",
                actionHint: "缩写口语whip",
                frequency: "common",
              },
              { textEn: "Any whipped cream?", textZh: "加奶油吗？", actionHint: "最简问法", frequency: "common" },
            ],
          },
          { speaker: "you", textEn: "No whipped cream, thanks.", textZh: "不要奶油，谢谢。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hot or iced?",
            textZh: "热的还是冰的？",
            keyPhrases: [{ en: "hot or iced", zh: "热的还是冰的" }],
            alternativeExpressions: [
              {
                textEn: "Do you want that hot or iced?",
                textZh: "热的还是冰的？",
                actionHint: "完整句式",
                frequency: "common",
              },
              {
                textEn: "Hot, iced, or blended?",
                textZh: "热的、冰的还是冰沙？",
                actionHint: "多一个选项",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Iced. And could you use oat milk instead of regular?",
            textZh: "冰的。可以把普通牛奶换成燕麦奶吗？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Of course. Just so you know, there's a 70-cent upcharge for oat milk. Your total is $7.45.",
            textZh: "当然。提醒一下，换燕麦奶要加70美分。一共7.45美元。",
            keyPhrases: [{ en: "upcharge", zh: "加价" }],
            alternativeExpressions: [
              {
                textEn: "Absolutely! Oat milk is 70 cents extra, so your total comes to $7.45.",
                textZh: "当然！燕麦奶加70美分，总共7.45美元。",
                actionHint: "直接报价",
                frequency: "common",
              },
              {
                textEn: "Sure thing! Heads up, there's a small upcharge for oat milk. That brings it to $7.45.",
                textZh: "没问题！提醒一下燕麦奶有小额加价。总共7.45美元。",
                actionHint: "友好提醒",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That's fine. I'll pay with my card.", textZh: "没问题。我刷卡。" },
        ],
      },
    ],
  },
  {
    id: "restaurant-coffee-specialty",
    tags: ["coffee", "咖啡", "starbucks", "latte"],
    category: "restaurant",
    titleZh: "精品咖啡/特调",
    titleEn: "Specialty Coffee",
    description: "在精品咖啡馆了解手冲、特调等专业咖啡",
    otherRole: "咖啡师",
    otherRoleIcon: "☕",
    flows: [
      {
        id: "basic",
        titleZh: "了解特调",
        titleEn: "Ask About Specials",
        description: "询问咖啡馆的特调饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hey there! Have you been here before?",
            textZh: "嗨！你以前来过吗？",
            keyPhrases: [{ en: "have you been here before", zh: "以前来过吗" }],
            alternativeExpressions: [
              {
                textEn: "Hi! Is this your first time here?",
                textZh: "嗨！你第一次来吗？",
                actionHint: "反向问法",
                frequency: "common",
              },
              {
                textEn: "Welcome! Are you a regular or is this your first visit?",
                textZh: "欢迎！你是常客还是第一次来？",
                actionHint: "区分新老客",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No, it's my first time. What do you recommend?",
            textZh: "没有，第一次来。你推荐什么？",
            casualVersion: "Nope, first time! What's good here?",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Our signature drink is the lavender honey latte. We also have single-origin pour-overs.",
            textZh: "我们的招牌是薰衣草蜂蜜拿铁。也有单一产地手冲咖啡。",
            keyPhrases: [
              { en: "signature drink", zh: "招牌饮品" },
              { en: "single-origin pour-over", zh: "单一产地手冲" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Our most popular one is the lavender honey latte. We also do hand-poured single-origin coffees.",
                textZh: "最受欢迎的是薰衣草蜂蜜拿铁。我们也做单一产地手冲。",
                actionHint: "用最受欢迎代替招牌",
                frequency: "common",
              },
              {
                textEn:
                  "If you like something unique, try our lavender honey latte. For purists, we've got pour-overs.",
                textZh: "如果喜欢独特的，试试薰衣草蜂蜜拿铁。追求纯粹的话，有手冲。",
                actionHint: "按偏好推荐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The lavender honey latte sounds interesting. Is it very sweet?",
            textZh: "薰衣草蜂蜜拿铁听起来不错。会很甜吗？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "It's lightly sweetened with real honey. I can make it less sweet if you prefer.",
            textZh: "用真蜂蜜微甜。你想要不那么甜也可以。",
            keyPhrases: [{ en: "lightly sweetened", zh: "微甜" }],
            alternativeExpressions: [
              {
                textEn: "It's not too sweet — just a touch of honey. I can dial it back if you want.",
                textZh: "不太甜——就一点蜂蜜。想少一点也行。",
                actionHint: "更口语化",
                frequency: "common",
              },
              {
                textEn: "We use real honey so it's subtly sweet. Happy to adjust it for you.",
                textZh: "我们用真蜂蜜所以是淡淡的甜。可以帮你调整。",
                actionHint: "强调天然",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds perfect. I'll try it as is.",
            textZh: "听起来很好。我就按原样来一杯。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Great choice! For here or to go?",
            textZh: "好选择！在这里喝还是带走？",
            keyPhrases: [{ en: "for here or to go", zh: "在这里喝还是带走" }],
            alternativeExpressions: [
              {
                textEn: "Nice! Are you staying or taking it to go?",
                textZh: "好的！在这喝还是带走？",
                actionHint: "换种说法",
                frequency: "common",
              },
              {
                textEn: "Will that be for here or on the go?",
                textZh: "在这里还是外带？",
                actionHint: "on the go变体",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "For here, please.",
            textZh: "在这里喝。",
            culturalNote: "\'For here\' 用瓷杯，\'To go\' 用纸杯。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "手冲咖啡",
        titleEn: "Pour-Over Order",
        description: "了解手冲咖啡的产地和风味",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to try a pour-over. What beans do you have today?",
            textZh: "我想试试手冲。今天有什么豆子？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn:
              "We have an Ethiopian Yirgacheffe — bright and fruity with blueberry notes. And a Colombian — more chocolatey and nutty.",
            textZh: "有埃塞俄比亚耶加雪菲——明亮果味带蓝莓调。还有哥伦比亚的——偏巧克力坚果。",
            keyPhrases: [
              { en: "bright and fruity", zh: "明亮果味" },
              { en: "notes of", zh: "风味调" },
              { en: "chocolatey and nutty", zh: "巧克力坚果味" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Today we've got two: an Ethiopian that's light and berry-forward, and a Colombian with chocolate and nut tones.",
                textZh: "今天有两款：一款埃塞的偏清爽浆果味，一款哥伦比亚的偏巧克力坚果。",
                actionHint: "换种描述风味",
                frequency: "common",
              },
              {
                textEn:
                  "We're pouring an Ethiopian Yirgacheffe and a Colombian. The Ethiopian is more fruity, the Colombian is richer.",
                textZh: "在冲埃塞耶加雪菲和哥伦比亚的。埃塞偏果味，哥伦比亚更醇厚。",
                actionHint: "对比两款",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the Ethiopian one. How long does it take?",
            textZh: "我要埃塞的。需要多久？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "About four to five minutes. Pour-overs are made to order.",
            textZh: "大约四五分钟。手冲是现做的。",
            keyPhrases: [{ en: "made to order", zh: "现做的" }],
            alternativeExpressions: [
              {
                textEn: "It takes around five minutes since we brew each one fresh.",
                textZh: "大约五分钟因为每杯都现冲。",
                actionHint: "解释原因",
                frequency: "common",
              },
              {
                textEn: "Give me about four minutes. We do each pour-over by hand.",
                textZh: "大概四分钟。每杯手冲都手工做。",
                actionHint: "强调手工",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "No problem. Can I also get a pastry?", textZh: "没问题。可以再来个糕点吗？" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure! We have croissants, banana bread, and lemon muffins.",
            textZh: "当然！有可颂、香蕉面包和柠檬马芬。",
            keyPhrases: [{ en: "croissant", zh: "可颂" }],
            alternativeExpressions: [
              {
                textEn: "Of course! Today we've got croissants, banana bread, and lemon muffins.",
                textZh: "当然！今天有可颂、香蕉面包和柠檬马芬。",
                actionHint: "加上今天",
                frequency: "common",
              },
              {
                textEn: "Yeah! We have some fresh pastries — croissants, banana bread, and lemon muffins.",
                textZh: "有的！有新鲜糕点——可颂、香蕉面包和柠檬马芬。",
                actionHint: "强调新鲜",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "A croissant, please.", textZh: "来个可颂。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "You got it. $9.50 total. I'll bring the pour-over to your table when it's ready.",
            textZh: "好的。一共9.50美元。好了送到你桌上。",
            keyPhrases: [{ en: "bring it to your table", zh: "送到桌上" }],
            alternativeExpressions: [
              {
                textEn: "Perfect. That's $9.50. Have a seat and I'll bring everything over.",
                textZh: "好的。9.50美元。坐下等我端过去就行。",
                actionHint: "让客人先坐",
                frequency: "common",
              },
              {
                textEn: "Sure thing! $9.50. I'll drop the pour-over off at your table once it's done.",
                textZh: "没问题！9.50美元。好了我送到你桌上。",
                actionHint: "口语化drop off",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-coffee-to-go",
    tags: ["coffee", "咖啡", "starbucks", "latte"],
    category: "restaurant",
    titleZh: "咖啡外带",
    titleEn: "Coffee To Go",
    description: "快速点一杯咖啡外带，赶时间的场景",
    otherRole: "咖啡师",
    otherRoleIcon: "☕",
    flows: [
      {
        id: "basic",
        titleZh: "快速外带",
        titleEn: "Quick Takeaway",
        description: "赶时间快速点单外带",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Hi! What can I get for you?",
            textZh: "嗨！要喝点什么？",
            keyPhrases: [{ en: "what can I get for you", zh: "要喝点什么" }],
            alternativeExpressions: [
              { textEn: "Hey! What'll you have?", textZh: "嗨！要什么？", actionHint: "极简问法", frequency: "common" },
              {
                textEn: "Good morning! What can I make for you?",
                textZh: "早上好！给你做什么？",
                actionHint: "带时间问候",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'm in a bit of a rush. Can I get a medium black coffee to go?",
            textZh: "你好，我赶时间。来杯中杯黑咖啡外带。",
            casualVersion: "Hey, just a medium black coffee to go, please.",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Sure thing! Regular or decaf?",
            textZh: "好的！普通还是无咖啡因？",
            keyPhrases: [{ en: "regular or decaf", zh: "普通还是无咖啡因" }],
            alternativeExpressions: [
              {
                textEn: "Coming right up! Caffeinated or decaf?",
                textZh: "马上来！含咖啡因还是无咖啡因？",
                actionHint: "用caffeinated替代regular",
                frequency: "common",
              },
              {
                textEn: "Got it! You want regular strength or decaf?",
                textZh: "好！要正常的还是低因的？",
                actionHint: "更具体的表达",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Regular, please.", textZh: "普通的，谢谢。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Room for cream?",
            textZh: "要留空间加奶吗？",
            keyPhrases: [{ en: "room for cream", zh: "留空间加奶" }],
            alternativeExpressions: [
              {
                textEn: "Do you need room for cream and sugar?",
                textZh: "要留空间加奶和糖吗？",
                actionHint: "加上糖",
                frequency: "common",
              },
              {
                textEn: "Want me to leave some room at the top?",
                textZh: "要不要上面留点空间？",
                actionHint: "不提具体用途",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No thanks, just black.",
            textZh: "不用，纯黑咖啡。",
            culturalNote: "\'Room for cream\' 是问要不要杯顶留空间自己加奶。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "That's $3.25. Tap or swipe whenever you're ready.",
            textZh: "3.25美元。随时可以刷卡。",
            keyPhrases: [{ en: "tap or swipe", zh: "碰一下或刷卡" }],
            alternativeExpressions: [
              {
                textEn: "$3.25. You can tap, swipe, or insert your card.",
                textZh: "3.25美元。碰、刷或插卡都行。",
                actionHint: "列全支付方式",
                frequency: "common",
              },
              {
                textEn: "That'll be $3.25. Go ahead and pay whenever.",
                textZh: "3.25美元。随时付就行。",
                actionHint: "更随意",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Here you go. Thanks!", textZh: "给你。谢谢！" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "手机下单取餐",
        titleEn: "Mobile Order Pickup",
        description: "APP提前下单到店取咖啡",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I have a mobile order to pick up. The name is Wang.",
            textZh: "你好，我有手机订单要取。名字是王。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Let me check... I don't see it yet. Do you have your order confirmation?",
            textZh: "让我查查……还没看到。你有订单确认吗？",
            keyPhrases: [{ en: "order confirmation", zh: "订单确认" }],
            alternativeExpressions: [
              {
                textEn: "Hmm, I'm not finding it. Can you pull up your confirmation?",
                textZh: "嗯，没找到。能打开你的确认信息吗？",
                actionHint: "请看手机",
                frequency: "common",
              },
              {
                textEn: "One sec... I don't see that order. Do you have a receipt or confirmation number?",
                textZh: "等一下……没看到这个单。你有收据或确认号吗？",
                actionHint: "要确认号",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, here it is on my phone. It says it should be ready.",
            textZh: "有的，在我手机上。上面说应该好了。",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Oh, I see it now! Sorry about that. One iced americano and one matcha latte.",
            textZh: "哦看到了！抱歉。一杯冰美式和一杯抹茶拿铁。",
            keyPhrases: [{ en: "iced americano", zh: "冰美式" }],
            alternativeExpressions: [
              {
                textEn: "Found it! My bad. An iced americano and a matcha latte, right?",
                textZh: "找到了！不好意思。冰美式和抹茶拿铁对吧？",
                actionHint: "口语道歉",
                frequency: "common",
              },
              {
                textEn: "There it is! Sorry for the confusion. I've got one iced americano and one matcha latte.",
                textZh: "看到了！抱歉搞混了。一杯冰美式一杯抹茶拿铁。",
                actionHint: "确认订单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, the matcha was supposed to be with almond milk. Can you check?",
            textZh: "抹茶那杯应该是杏仁奶的。能确认一下吗？",
          },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "You're right, it says almond milk. Let me remake that real quick.",
            textZh: "你说得对，写的是杏仁奶。我马上重做。",
            keyPhrases: [
              { en: "remake", zh: "重做" },
              { en: "real quick", zh: "马上" },
            ],
            alternativeExpressions: [
              {
                textEn: "Oh, my mistake. It does say almond milk. Give me a minute to redo it.",
                textZh: "哦是我的错。确实写的杏仁奶。给我一分钟重做。",
                actionHint: "承认错误",
                frequency: "common",
              },
              {
                textEn: "Good catch! I'll make a new one with almond milk right away.",
                textZh: "你发现了！我马上用杏仁奶重做一杯。",
                actionHint: "感谢提醒",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thank you, I appreciate it.", textZh: "谢谢，非常感谢。" },
          {
            speaker: "them",
            role: "咖啡师",
            textEn: "Here you go! Sorry about the mix-up. Have a great day!",
            textZh: "给你！抱歉搞混了。祝你愉快！",
            keyPhrases: [{ en: "mix-up", zh: "搞混" }],
            alternativeExpressions: [
              {
                textEn: "All set! Again, sorry about the wait. Enjoy!",
                textZh: "好了！再次抱歉让你等了。慢慢享用！",
                actionHint: "为等待道歉",
                frequency: "common",
              },
              {
                textEn: "Here's your corrected order. Sorry for the trouble. Have a good one!",
                textZh: "改好的单给你。抱歉添麻烦了。祝你愉快！",
                actionHint: "正式道歉",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 酒吧 Bar ====================
  {
    id: "restaurant-bar-cocktail",
    category: "restaurant",
    titleZh: "酒吧点鸡尾酒",
    titleEn: "Ordering Cocktails at a Bar",
    description: "在酒吧点鸡尾酒，了解基酒和口味偏好",
    otherRole: "调酒师",
    otherRoleIcon: "🍸",
    flows: [
      {
        id: "basic",
        titleZh: "基础点酒",
        titleEn: "Basic Cocktail Order",
        description: "点一杯经典鸡尾酒",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Hey! What can I get you?",
            textZh: "嗨！要喝点什么？",
            keyPhrases: [{ en: "what can I get you", zh: "喝点什么" }],
            alternativeExpressions: [
              {
                textEn: "Hey there! What are you drinking tonight?",
                textZh: "嗨！今晚喝什么？",
                actionHint: "加上时间",
                frequency: "common",
              },
              {
                textEn: "What can I pour for you?",
                textZh: "给你倒什么？",
                actionHint: "酒吧特有说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, can I see the cocktail menu?",
            textZh: "你好，可以看看鸡尾酒单吗？",
            casualVersion: "Hey, you got a cocktail menu?",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure, here you go. Our specials are on the first page. Anything catch your eye?",
            textZh: "给你。特调在第一页。有看上的吗？",
            keyPhrases: [
              { en: "specials", zh: "特调" },
              { en: "catch your eye", zh: "看上的" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! Take a look. Our seasonal cocktails are up front. See anything you like?",
                textZh: "当然！看看。季节特调在前面。有喜欢的吗？",
                actionHint: "用季节特调",
                frequency: "common",
              },
              {
                textEn: "Here's the menu. We've got some new drinks this week — check out page one.",
                textZh: "菜单给你。这周有新品——看看第一页。",
                actionHint: "推荐新品",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's in the Sunset Spritz?", textZh: "日落气泡酒里有什么？" },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "It's Aperol, prosecco, and a splash of grapefruit juice. Very refreshing.",
            textZh: "是阿佩罗、普罗赛克和一点西柚汁。很清爽。",
            keyPhrases: [
              { en: "a splash of", zh: "一点" },
              { en: "refreshing", zh: "清爽" },
            ],
            alternativeExpressions: [
              {
                textEn: "That one's Aperol with prosecco and a little grapefruit. Super light and refreshing.",
                textZh: "那个是阿佩罗加普罗赛克和一点西柚。非常清爽。",
                actionHint: "更随意的描述",
                frequency: "common",
              },
              {
                textEn:
                  "It's a bubbly mix of Aperol, prosecco, and fresh grapefruit juice. Perfect for a warm evening.",
                textZh: "是阿佩罗、普罗赛克和鲜西柚汁的气泡混合。温暖的晚上喝最合适。",
                actionHint: "氛围感推荐",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That sounds good. I'll have that.", textZh: "听起来不错。我要这个。" },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "You got it. Would you like to start a tab or pay as you go?",
            textZh: "好的。要开个账还是喝一杯结一杯？",
            keyPhrases: [
              { en: "start a tab", zh: "开个账" },
              { en: "pay as you go", zh: "喝一杯结一杯" },
            ],
            alternativeExpressions: [
              {
                textEn: "Coming right up! Want to open a tab or pay now?",
                textZh: "马上来！开个账还是现在付？",
                actionHint: "简洁二选一",
                frequency: "common",
              },
              {
                textEn: "On its way! Cash out now or keep it running?",
                textZh: "马上做！现在结还是先挂着？",
                actionHint: "酒吧口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll start a tab, please.",
            textZh: "开个账吧。",
            culturalNote: "\'Start a tab\' 意思是先把信用卡押在吧台，最后统一结账。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制鸡尾酒",
        titleEn: "Custom Cocktail",
        description: "告诉调酒师你的口味偏好来定制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "调酒师",
            textEn: "What are you in the mood for tonight?",
            textZh: "今晚想喝什么类型的？",
            keyPhrases: [{ en: "in the mood for", zh: "想要" }],
            alternativeExpressions: [
              {
                textEn: "What are you feeling tonight? Something strong, fruity, refreshing?",
                textZh: "今晚想喝什么类型的？烈的、果味的还是清爽的？",
                actionHint: "给选项引导",
                frequency: "common",
              },
              {
                textEn: "What kind of drink are you looking for this evening?",
                textZh: "今晚想要什么类型的酒？",
                actionHint: "稍正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not sure what I want. Something not too sweet, maybe gin-based?",
            textZh: "我不确定要什么。不太甜的，可能金酒基底的？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "I'd suggest a gin and tonic with a twist of lime, or maybe a Negroni if you like something bitter.",
            textZh: "我推荐金汤力加酸橙，或者如果你喜欢苦的可以试试尼格罗尼。",
            keyPhrases: [
              { en: "a twist of lime", zh: "一片酸橙" },
              { en: "bitter", zh: "苦的" },
            ],
            alternativeExpressions: [
              {
                textEn: "How about a classic G&T with lime? Or if you're into bitter flavors, a Negroni's great.",
                textZh: "经典金汤力加酸橙怎么样？喜欢苦味的话尼格罗尼不错。",
                actionHint: "缩写G&T",
                frequency: "common",
              },
              {
                textEn:
                  "For gin, you can't go wrong with a gin and tonic. If you want something bolder, try a Negroni.",
                textZh: "金酒的话金汤力不会错。想要更浓烈的可以试试尼格罗尼。",
                actionHint: "按强度推荐",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's a Negroni exactly?", textZh: "尼格罗尼具体是什么？" },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "It's equal parts gin, Campari, and sweet vermouth. It's strong and a bit bitter. Very classic.",
            textZh: "等量的金酒、金巴利和甜苦艾酒。比较烈，微苦。非常经典。",
            keyPhrases: [
              { en: "equal parts", zh: "等量" },
              { en: "strong", zh: "烈" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "One part gin, one part Campari, one part sweet vermouth. It's boozy and has a nice bitter kick.",
                textZh: "一份金酒一份金巴利一份甜苦艾酒。酒味浓带苦味。",
                actionHint: "详细比例",
                frequency: "common",
              },
              {
                textEn:
                  "It's a mix of gin, Campari, and vermouth — even parts of each. Definitely a strong, bitter drink.",
                textZh: "金酒、金巴利和苦艾酒混合——各等量。绝对是烈酒微苦的。",
                actionHint: "强调口感",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the Negroni. Can you make it a little less strong?",
            textZh: "我试试尼格罗尼。可以做得不那么烈吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure, I can lighten it up with some extra ice and a splash of soda. No problem.",
            textZh: "当然，我可以多加冰和一点苏打水来减轻酒味。没问题。",
            keyPhrases: [{ en: "lighten it up", zh: "减轻" }],
            alternativeExpressions: [
              {
                textEn: "Totally! I'll add extra ice and a little club soda to tone it down.",
                textZh: "完全可以！我多加冰和一点苏打水让它温和些。",
                actionHint: "tone it down表达",
                frequency: "common",
              },
              {
                textEn: "No worries, I can make it lighter. A bit more ice and some soda water should do the trick.",
                textZh: "没问题，我可以做轻一点。多点冰和苏打水就好。",
                actionHint: "do the trick口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect, thanks. Also, do you have any bar snacks?",
            textZh: "太好了，谢谢。另外，有吧台小吃吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn:
              "Yeah, we've got mixed nuts, olives, and a cheese plate. The cheese plate pairs great with a Negroni.",
            textZh: "有的，混合坚果、橄榄和奶酪拼盘。奶酪配尼格罗尼很搭。",
            keyPhrases: [{ en: "pairs great with", zh: "很搭配" }],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! We have nuts, olives, and a cheese board. I'd definitely go with cheese if you're having a Negroni.",
                textZh: "当然！有坚果、橄榄和奶酪板。喝尼格罗尼的话推荐奶酪。",
                actionHint: "给搭配建议",
                frequency: "common",
              },
              {
                textEn:
                  "We do! Mixed nuts, olives, and a cheese plate. The cheese is a perfect match with your Negroni.",
                textZh: "有的！混合坚果、橄榄和奶酪拼盘。奶酪跟尼格罗尼绝配。",
                actionHint: "强调完美搭配",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-bar-beer",
    category: "restaurant",
    titleZh: "酒吧点啤酒",
    titleEn: "Ordering Beer at a Bar",
    description: "在酒吧了解和选择不同类型的啤酒",
    otherRole: "调酒师",
    otherRoleIcon: "🍺",
    flows: [
      {
        id: "basic",
        titleZh: "点瓶装啤酒",
        titleEn: "Bottled Beer",
        description: "点一瓶简单的啤酒",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "调酒师",
            textEn: "What'll it be?",
            textZh: "喝什么？",
            keyPhrases: [{ en: "what'll it be", zh: "喝什么" }],
            alternativeExpressions: [
              { textEn: "What can I get ya?", textZh: "要什么？", actionHint: "极简口语", frequency: "common" },
              {
                textEn: "Hey, what are you having?",
                textZh: "嗨，喝什么？",
                actionHint: "随意问候",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What beers do you have on tap?",
            textZh: "有什么生啤？",
            culturalNote: "\'On tap\' 指的是散装扎啤，从龙头打出来的。\'Bottled\' 是瓶装。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We've got Bud Light, Blue Moon, Guinness, and two local IPAs.",
            textZh: "有百威淡啤、蓝月、健力士，还有两款本地IPA。",
            keyPhrases: [
              { en: "on tap", zh: "生啤/扎啤" },
              { en: "local IPAs", zh: "本地IPA" },
            ],
            alternativeExpressions: [
              {
                textEn: "On tap we have Bud Light, Blue Moon, Guinness, and a couple of local IPAs.",
                textZh: "生啤有百威淡啤、蓝月、健力士和几款本地IPA。",
                actionHint: "加on tap前缀",
                frequency: "common",
              },
              {
                textEn: "Let's see — Bud Light, Blue Moon, Guinness, and two IPAs from local breweries.",
                textZh: "看看——百威淡啤、蓝月、健力士和两款本地酿酒厂的IPA。",
                actionHint: "逐一列举",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll have a Blue Moon, please.", textZh: "来杯蓝月。" },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Pint or half pint?",
            textZh: "大杯还是小杯？",
            keyPhrases: [
              { en: "pint", zh: "品脱/大杯" },
              { en: "half pint", zh: "半品脱/小杯" },
            ],
            alternativeExpressions: [
              { textEn: "Full pint or a half?", textZh: "大杯还是半杯？", actionHint: "简略问法", frequency: "common" },
              {
                textEn: "Want a full glass or just a half?",
                textZh: "要一整杯还是半杯？",
                actionHint: "通俗说法",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "A pint, please.", textZh: "大杯。" },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Here you go. That's $8. Want me to keep the tab open?",
            textZh: "给你。8美元。要继续记账吗？",
            keyPhrases: [{ en: "keep the tab open", zh: "继续记账" }],
            alternativeExpressions: [
              {
                textEn: "There you go. $8. Should I leave your tab open?",
                textZh: "给你。8美元。账先挂着吗？",
                actionHint: "leave open变体",
                frequency: "common",
              },
              {
                textEn: "Here's your beer. $8. Pay now or keep it running?",
                textZh: "啤酒来了。8美元。现在付还是先记着？",
                actionHint: "keep it running口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. I might order another one later.",
            textZh: "好的。我待会可能再来一杯。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "精酿啤酒品鉴",
        titleEn: "Craft Beer Tasting",
        description: "了解精酿啤酒的类型和风味",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm new to craft beer. Can you recommend something?",
            textZh: "我刚接触精酿。能推荐一下吗？",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Sure! What kind of flavors do you like? Hoppy and bitter, or smooth and malty?",
            textZh: "当然！你喜欢什么口味？啤酒花味重偏苦的，还是顺滑麦芽味的？",
            keyPhrases: [
              { en: "hoppy and bitter", zh: "啤酒花味重偏苦" },
              { en: "smooth and malty", zh: "顺滑麦芽味" },
            ],
            alternativeExpressions: [
              {
                textEn: "Happy to help! Do you lean more towards bitter or mellow beers?",
                textZh: "很乐意帮忙！你偏好苦的还是柔和的啤酒？",
                actionHint: "简化二选一",
                frequency: "common",
              },
              {
                textEn: "Absolutely! Tell me what you usually like — hoppy, fruity, dark, light?",
                textZh: "当然！你平常喜欢什么——啤酒花味、果味、深色还是浅色？",
                actionHint: "更多选项",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Something smooth. I don't really like bitter drinks.",
            textZh: "顺滑的。我不太喜欢苦的。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Try our wheat beer or the amber ale. Both are easy-drinking. Want a taster first?",
            textZh: "试试我们的小麦啤酒或琥珀艾尔。都很好入口。要先来个试饮吗？",
            keyPhrases: [
              { en: "easy-drinking", zh: "好入口" },
              { en: "a taster", zh: "试饮" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'd go with the wheat beer or the amber ale. Both are super smooth. I can pour you a sample.",
                textZh: "我推荐小麦啤酒或琥珀艾尔。都超级顺滑。可以倒一小杯给你尝。",
                actionHint: "主动倒样品",
                frequency: "common",
              },
              {
                textEn: "The wheat and the amber are both great for beginners. Want to try a little of each?",
                textZh: "小麦和琥珀都很适合新手。要各尝一点吗？",
                actionHint: "各尝一点",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A taster of the wheat beer would be great.",
            textZh: "来一小杯小麦啤酒试试。",
            culturalNote: "很多精酿酒吧提供免费试饮（taster/sample），让你先尝一口再决定。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Here, give that a try. It's got hints of banana and clove. Really smooth finish.",
            textZh: "试试这个。带有香蕉和丁香的味道。收尾很顺滑。",
            keyPhrases: [
              { en: "hints of", zh: "带有…的味道" },
              { en: "smooth finish", zh: "收尾顺滑" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here you go — take a sip. You'll get some banana and clove notes. Goes down real smooth.",
                textZh: "给你——尝一口。能品出香蕉和丁香味。非常顺滑。",
                actionHint: "口语化描述",
                frequency: "common",
              },
              {
                textEn: "Try this one. It has a fruity, spicy character with a super clean finish.",
                textZh: "试试这个。有果味和辛香味，收尾非常干净。",
                actionHint: "用品酒术语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh, that's really good! I'll take a pint of this one.",
            textZh: "哦，真不错！来一大杯这个。",
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Great choice. If you like that, you should also try our hefeweizen next time. Similar style.",
            textZh: "好选择。如果你喜欢这个，下次可以试试我们的德式小麦啤酒。类似风格。",
            keyPhrases: [{ en: "hefeweizen", zh: "德式小麦啤酒" }],
            alternativeExpressions: [
              {
                textEn: "Nice pick! Next time you come in, give our hefeweizen a shot. You'd probably love it.",
                textZh: "好选择！下次来试试我们的德式小麦啤酒。你应该会喜欢。",
                actionHint: "热情推荐下次",
                frequency: "common",
              },
              {
                textEn: "Good call. We also have a hefeweizen that's in the same family — worth trying.",
                textZh: "选得好。我们还有一款德式小麦同系列的——值得一试。",
                actionHint: "同系列推荐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll keep that in mind. Thanks for the recommendation!",
            textZh: "我记住了。谢谢推荐！",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-bar-wine",
    category: "restaurant",
    titleZh: "酒吧点葡萄酒",
    titleEn: "Ordering Wine",
    description: "在餐厅或酒吧选择葡萄酒",
    otherRole: "侍酒师/服务员",
    otherRoleIcon: "🍷",
    flows: [
      {
        id: "basic",
        titleZh: "基础点酒",
        titleEn: "Basic Wine Order",
        description: "点一杯红酒或白酒",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Would you like to see our wine list?",
            textZh: "要看看我们的酒单吗？",
            keyPhrases: [{ en: "wine list", zh: "酒单" }],
            alternativeExpressions: [
              {
                textEn: "Can I bring you the wine menu?",
                textZh: "给你拿酒单来吗？",
                actionHint: "主动提供",
                frequency: "common",
              },
              {
                textEn: "Shall I grab the wine list for you?",
                textZh: "要我去拿酒单吗？",
                actionHint: "用grab口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. Do you have wines by the glass?",
            textZh: "好的。有按杯卖的酒吗？",
            culturalNote: "\'By the glass\' 按杯点，\'by the bottle\' 按瓶点。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We do! We have five reds and four whites by the glass. Would you prefer red or white?",
            textZh: "有的！按杯有五款红酒四款白酒。你喜欢红酒还是白酒？",
            keyPhrases: [
              { en: "by the glass", zh: "按杯" },
              { en: "red or white", zh: "红酒还是白酒" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes! We offer several wines by the glass. Are you in the mood for red or white?",
                textZh: "有的！我们有好几款可以按杯点的。想喝红的还是白的？",
                actionHint: "先问偏好",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Five reds and four whites available by the glass. What's your preference?",
                textZh: "当然。按杯有五款红四款白。你偏好哪种？",
                actionHint: "简洁列举",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try a glass of red. Something medium-bodied?",
            textZh: "来杯红酒。中等酒体的？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'd recommend the Pinot Noir. It's smooth with cherry and spice notes.",
            textZh: "推荐黑皮诺。口感柔顺，带樱桃和香料风味。",
            keyPhrases: [
              { en: "medium-bodied", zh: "中等酒体" },
              { en: "Pinot Noir", zh: "黑皮诺" },
            ],
            alternativeExpressions: [
              {
                textEn: "The Pinot Noir is a great pick. It's got a nice cherry flavor with a hint of spice.",
                textZh: "黑皮诺是个好选择。带有不错的樱桃味和一丝香料。",
                actionHint: "强调好选择",
                frequency: "common",
              },
              {
                textEn: "For medium-bodied, try the Pinot Noir. Very smooth, cherry forward with warm spice.",
                textZh: "中等酒体的话试试黑皮诺。非常顺滑，樱桃味突出带温暖香料。",
                actionHint: "品酒术语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sounds good. I'll have that.", textZh: "听起来不错。就这个吧。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Excellent. Would you like anything else to drink? Water perhaps?",
            textZh: "好的。还要其他饮品吗？水？",
            keyPhrases: [{ en: "anything else to drink", zh: "还要其他饮品吗" }],
            alternativeExpressions: [
              {
                textEn: "Great. Can I get you some water as well?",
                textZh: "好的。要来点水吗？",
                actionHint: "直接问水",
                frequency: "common",
              },
              {
                textEn: "Perfect. Anything else to drink? Sparkling or still water?",
                textZh: "好的。还要别的喝的吗？气泡水还是矿泉水？",
                actionHint: "细分水的选项",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Still water, please.", textZh: "矿泉水，谢谢。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "选酒搭配",
        titleEn: "Wine Pairing",
        description: "请侍酒师推荐搭配菜品的酒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're ordering the steak and the salmon. Could you recommend wines to pair with those?",
            textZh: "我们点了牛排和三文鱼。能推荐搭配的酒吗？",
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn:
              "For the steak, I'd suggest a Cabernet Sauvignon — full-bodied with great tannins. For the salmon, a Chardonnay would be lovely.",
            textZh: "牛排配赤霞珠——酒体饱满单宁好。三文鱼配霞多丽很合适。",
            keyPhrases: [
              { en: "full-bodied", zh: "酒体饱满" },
              { en: "tannins", zh: "单宁" },
              { en: "Cabernet Sauvignon", zh: "赤霞珠" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "A Cab Sauv would go perfectly with the steak — bold and tannic. For the salmon, I'd pair it with a nice Chardonnay.",
                textZh: "赤霞珠配牛排完美——浓郁有单宁。三文鱼的话配一款好霞多丽。",
                actionHint: "用缩写Cab Sauv",
                frequency: "common",
              },
              {
                textEn: "Steak and Cabernet is a classic. And Chardonnay with salmon is always a winner.",
                textZh: "牛排配赤霞珠是经典组合。霞多丽配三文鱼也不会错。",
                actionHint: "强调经典搭配",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What's the price range for those by the glass?",
            textZh: "按杯点的话大概什么价位？",
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn:
              "The Cab is $16 a glass and the Chardonnay is $14. We also offer a half bottle of each if you'd prefer.",
            textZh: "赤霞珠16美元一杯，霞多丽14美元。也可以各来半瓶。",
            keyPhrases: [{ en: "half bottle", zh: "半瓶" }],
            alternativeExpressions: [
              {
                textEn: "By the glass, the Cabernet is $16 and the Chardonnay is $14. Half bottles are also available.",
                textZh: "按杯的话赤霞珠16美元霞多丽14美元。也有半瓶装。",
                actionHint: "结构清晰报价",
                frequency: "common",
              },
              {
                textEn: "The Cab runs $16, Chardonnay is $14. Or if you'd like, we have half bottles too.",
                textZh: "赤霞珠16美元，霞多丽14美元。想的话也有半瓶的。",
                actionHint: "口语runs表示价格",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Let's do glasses for now. Can we taste them first?",
            textZh: "先按杯点吧。可以先尝尝吗？",
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn: "Absolutely. Let me pour you a small taste of each.",
            textZh: "当然。我给你们各倒一小口试试。",
            keyPhrases: [{ en: "a small taste", zh: "一小口" }],
            alternativeExpressions: [
              {
                textEn: "Of course! I'll bring you a little sample of both.",
                textZh: "当然！我给你们各带一点样品。",
                actionHint: "用sample",
                frequency: "common",
              },
              {
                textEn: "Sure thing. Let me get you a tasting pour of each.",
                textZh: "没问题。我给你们各倒一小杯试。",
                actionHint: "tasting pour专业说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "The Cabernet is perfect. But the Chardonnay is a bit too oaky for me. Do you have anything lighter?",
            textZh: "赤霞珠很好。但霞多丽橡木味太重了。有清淡点的吗？",
            culturalNote: "\'Oaky\' 指橡木桶陈酿带来的木质风味。",
          },
          {
            speaker: "them",
            role: "侍酒师",
            textEn: "How about a Sauvignon Blanc? It's crisp and citrusy, pairs beautifully with fish.",
            textZh: "长相思怎么样？清脆带柑橘味，配鱼非常好。",
            keyPhrases: [
              { en: "crisp", zh: "清脆" },
              { en: "citrusy", zh: "柑橘味" },
            ],
            alternativeExpressions: [
              {
                textEn: "Try the Sauvignon Blanc. It's bright and zesty — a classic with seafood.",
                textZh: "试试长相思。清爽活泼——配海鲜经典搭配。",
                actionHint: "用zesty形容",
                frequency: "common",
              },
              {
                textEn: "I'd suggest the Sauv Blanc — lighter, citrus notes, and it's wonderful with fish.",
                textZh: "推荐长相思——更轻盈，柑橘调，配鱼特别好。",
                actionHint: "缩写Sauv Blanc",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds better. We'll go with that. Thank you!",
            textZh: "听起来更好。就这个吧。谢谢！",
          },
        ],
      },
    ],
  },
  // ==================== 快餐 Fast Food ====================
  {
    id: "restaurant-fast-food-drive-thru",
    tags: ["fast food", "快餐", "mcdonalds", "burger"],
    category: "restaurant",
    titleZh: "快餐得来速",
    titleEn: "Drive-Thru Order",
    description: "在得来速窗口点餐，通过对讲机交流",
    otherRole: "快餐店员",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "basic",
        titleZh: "基本得来速",
        titleEn: "Basic Drive-Thru",
        description: "得来速点一份简单套餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome to Burger Town! Can I take your order?",
            textZh: "欢迎来到Burger Town！可以点餐了吗？",
            keyPhrases: [{ en: "can I take your order", zh: "可以点餐了吗" }],
            alternativeExpressions: [
              {
                textEn: "Thanks for choosing Burger Town! What can I get for you today?",
                textZh: "感谢选择Burger Town！今天要什么？",
                actionHint: "感谢光临",
                frequency: "common",
              },
              {
                textEn: "Hey, welcome to Burger Town! Go ahead and order whenever you're ready.",
                textZh: "嗨，欢迎来到Burger Town！准备好了就点吧。",
                actionHint: "不催促",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a number three combo?",
            textZh: "你好，我要一个三号套餐。",
            casualVersion: "Yeah, lemme get a number three.",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "What size would you like — regular or large?",
            textZh: "要什么规格——普通还是大份？",
            keyPhrases: [{ en: "regular or large", zh: "普通还是大份" }],
            alternativeExpressions: [
              {
                textEn: "Would you like that regular or supersized?",
                textZh: "要普通的还是超大份？",
                actionHint: "用supersized",
                frequency: "common",
              },
              {
                textEn: "Regular or you wanna go large on that?",
                textZh: "普通的还是要大份？",
                actionHint: "口语化wanna",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Regular, please.", textZh: "普通的，谢谢。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "And what would you like to drink?",
            textZh: "喝什么饮料？",
            keyPhrases: [{ en: "what would you like to drink", zh: "喝什么饮料" }],
            alternativeExpressions: [
              {
                textEn: "What drink would you like with that?",
                textZh: "配什么饮料？",
                actionHint: "with that搭配",
                frequency: "common",
              },
              { textEn: "And for your drink?", textZh: "饮料呢？", actionHint: "最简问法", frequency: "common" },
            ],
          },
          { speaker: "you", textEn: "A Coke, please.", textZh: "可乐。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Anything else?",
            textZh: "还要别的吗？",
            keyPhrases: [{ en: "anything else", zh: "还要别的吗" }],
            alternativeExpressions: [
              { textEn: "Will that be all?", textZh: "就这些吗？", actionHint: "确认完成", frequency: "common" },
              {
                textEn: "Can I get you anything else with that?",
                textZh: "还要加什么吗？",
                actionHint: "完整句式",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "No, that's it.", textZh: "不了，就这些。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Your total is $9.47. Please pull up to the first window.",
            textZh: "一共9.47美元。请开到第一个窗口。",
            keyPhrases: [{ en: "pull up to the first window", zh: "开到第一个窗口" }],
            alternativeExpressions: [
              {
                textEn: "That'll be $9.47. Drive around to the first window, please.",
                textZh: "9.47美元。请开到第一个窗口。",
                actionHint: "drive around说法",
                frequency: "common",
              },
              {
                textEn: "$9.47 is your total. Go ahead and pull forward to pay.",
                textZh: "总共9.47美元。往前开去付款。",
                actionHint: "pull forward变体",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it, thanks!",
            textZh: "好的，谢谢！",
            culturalNote: "得来速一般有两个窗口：第一个付钱，第二个取餐。",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制得来速",
        titleEn: "Custom Drive-Thru",
        description: "在得来速做定制修改和加单",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi, order when you're ready!",
            textZh: "嗨，准备好了就点吧！",
            keyPhrases: [{ en: "order when you're ready", zh: "准备好了就点" }],
            alternativeExpressions: [
              {
                textEn: "Hey there! Take your time and order when you're set.",
                textZh: "嗨！慢慢来，准备好了就说。",
                actionHint: "不催促",
                frequency: "common",
              },
              {
                textEn: "Welcome! Go ahead whenever you're ready.",
                textZh: "欢迎！准备好了随时开始。",
                actionHint: "简短欢迎",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get a cheeseburger with no onions and extra pickles?",
            textZh: "来个芝士汉堡，不要洋葱，多加酸黄瓜。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Cheeseburger, no onions, extra pickles. Got it. Anything else?",
            textZh: "芝士汉堡不要洋葱多酸黄瓜。好的。还要什么？",
            keyPhrases: [
              { en: "no onions", zh: "不要洋葱" },
              { en: "extra pickles", zh: "多加酸黄瓜" },
            ],
            alternativeExpressions: [
              {
                textEn: "So that's a cheeseburger, hold the onions, extra pickles. What else can I get you?",
                textZh: "那就是芝士汉堡去洋葱多酸黄瓜。还要什么？",
                actionHint: "用hold the表示去掉",
                frequency: "common",
              },
              {
                textEn: "Cheeseburger, no onions, loaded on pickles. Got that. Anything more?",
                textZh: "芝士汉堡不要洋葱多多酸黄瓜。记下了。还有吗？",
                actionHint: "loaded on口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "And a six-piece chicken nuggets with barbecue sauce.",
            textZh: "再来一份六块鸡块，配烧烤酱。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Would you like to make that a meal with fries and a drink?",
            textZh: "要升级成套餐加薯条和饮料吗？",
            keyPhrases: [{ en: "make that a meal", zh: "升级成套餐" }],
            alternativeExpressions: [
              {
                textEn: "Want to make it a combo? Comes with fries and a drink.",
                textZh: "要升级套餐吗？配薯条和饮料。",
                actionHint: "用combo",
                frequency: "common",
              },
              {
                textEn: "You can add fries and a drink for just $2 more. Want the meal deal?",
                textZh: "加2美元就能配薯条和饮料。要套餐吗？",
                actionHint: "报价引导",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sure, with a medium fries and a Sprite.", textZh: "好的，中份薯条和雪碧。" },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Okay, so that's a cheeseburger no onions extra pickles, and a six-piece nugget meal with medium fries and a Sprite. Your total comes to $14.29.",
            textZh: "好，芝士汉堡不要洋葱多酸黄瓜，六块鸡块套餐中薯条雪碧。一共14.29美元。",
            keyPhrases: [{ en: "your total comes to", zh: "一共" }],
            alternativeExpressions: [
              {
                textEn:
                  "Let me read that back: cheeseburger no onions extra pickles, six-piece nugget combo with medium fries and Sprite. That's $14.29.",
                textZh: "我复述一下：芝士汉堡去洋葱多酸黄瓜，六块鸡块套餐中薯条雪碧。14.29美元。",
                actionHint: "复述确认",
                frequency: "common",
              },
              {
                textEn: "So I've got a cheeseburger customized and a nugget meal. Comes out to $14.29 total.",
                textZh: "那就是定制芝士汉堡和鸡块套餐。总计14.29美元。",
                actionHint: "简化复述",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wait, can I also add a small chocolate milkshake?",
            textZh: "等一下，能再加一杯小份巧克力奶昔吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! New total is $17.58. Please drive to the first window.",
            textZh: "没问题！新的总价是17.58美元。请开到第一个窗口。",
            keyPhrases: [{ en: "new total", zh: "新的总价" }],
            alternativeExpressions: [
              {
                textEn: "Added! That brings your total to $17.58. Go ahead and pull around.",
                textZh: "加上了！总计17.58美元。往前开吧。",
                actionHint: "pull around说法",
                frequency: "common",
              },
              {
                textEn: "You got it! Updated total is $17.58. Please head to window one.",
                textZh: "没问题！更新后总计17.58美元。请到一号窗口。",
                actionHint: "用updated total",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-fast-food-counter",
    tags: ["fast food", "快餐", "mcdonalds", "burger"],
    category: "restaurant",
    titleZh: "快餐柜台点餐",
    titleEn: "Fast Food Counter Order",
    description: "在快餐店柜台面对面点餐",
    otherRole: "快餐店员",
    otherRoleIcon: "🍔",
    flows: [
      {
        id: "basic",
        titleZh: "柜台基础点餐",
        titleEn: "Basic Counter Order",
        description: "在柜台简单点一份快餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi! For here or to go?",
            textZh: "嗨！在这里吃还是带走？",
            keyPhrases: [{ en: "for here or to go", zh: "在这里吃还是带走" }],
            alternativeExpressions: [
              {
                textEn: "Hey! Eating in or taking out?",
                textZh: "嗨！在这吃还是外带？",
                actionHint: "eating in说法",
                frequency: "common",
              },
              {
                textEn: "Welcome! Dine in or carry out?",
                textZh: "欢迎！堂食还是打包？",
                actionHint: "carry out说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "For here, please.",
            textZh: "在这里吃。",
            culturalNote: "快餐店第一个问题通常是 for here or to go。影响打包方式和是否提供托盘。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "What can I get for you?",
            textZh: "要吃什么？",
            keyPhrases: [{ en: "what can I get for you", zh: "要吃什么" }],
            alternativeExpressions: [
              {
                textEn: "What would you like to order?",
                textZh: "想点什么？",
                actionHint: "标准问法",
                frequency: "common",
              },
              { textEn: "What'll it be today?", textZh: "今天吃什么？", actionHint: "简短口语", frequency: "common" },
            ],
          },
          { speaker: "you", textEn: "I'll have the grilled chicken sandwich meal.", textZh: "我要烤鸡三明治套餐。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Would you like fries or onion rings with that?",
            textZh: "配薯条还是洋葱圈？",
            keyPhrases: [{ en: "fries or onion rings", zh: "薯条还是洋葱圈" }],
            alternativeExpressions: [
              {
                textEn: "That comes with a side — fries or onion rings?",
                textZh: "配一个配菜——薯条还是洋葱圈？",
                actionHint: "说明配菜",
                frequency: "common",
              },
              {
                textEn: "Fries or rings on the side?",
                textZh: "配薯条还是洋葱圈？",
                actionHint: "极简版",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Fries, please.", textZh: "薯条。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "And your drink?",
            textZh: "饮料呢？",
            keyPhrases: [{ en: "your drink", zh: "你的饮料" }],
            alternativeExpressions: [
              {
                textEn: "What would you like to drink?",
                textZh: "喝什么？",
                actionHint: "完整句",
                frequency: "common",
              },
              {
                textEn: "For the drink, what'll it be?",
                textZh: "饮料要什么？",
                actionHint: "引导式",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Iced tea, please.", textZh: "冰茶。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "That'll be $11.29. Cash or card?",
            textZh: "11.29美元。现金还是刷卡？",
            keyPhrases: [{ en: "cash or card", zh: "现金还是刷卡" }],
            alternativeExpressions: [
              {
                textEn: "Your total is $11.29. How would you like to pay?",
                textZh: "总共11.29美元。怎么付？",
                actionHint: "开放式付款",
                frequency: "common",
              },
              {
                textEn: "$11.29. Paying with cash or card today?",
                textZh: "11.29美元。今天现金还是刷卡？",
                actionHint: "加today",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Card, please.", textZh: "刷卡。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "套餐替换和加单",
        titleEn: "Substitutions and Add-ons",
        description: "修改套餐内容或额外添加",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, can I get the number five meal but substitute the fries for a side salad?",
            textZh: "你好，我要五号套餐但把薯条换成沙拉。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, the side salad is 50 cents extra. What dressing would you like?",
            textZh: "好的，沙拉要加50美分。要什么沙拉酱？",
            keyPhrases: [
              { en: "substitute", zh: "替换" },
              { en: "dressing", zh: "沙拉酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "No problem! The salad is a 50-cent upcharge. What dressing do you want?",
                textZh: "没问题！沙拉加50美分。要什么酱？",
                actionHint: "用upcharge",
                frequency: "common",
              },
              {
                textEn: "We can do that. There's a small charge for the swap — 50 cents. Which dressing?",
                textZh: "可以的。换的话要加50美分。什么酱？",
                actionHint: "用swap替换",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Ranch, please. And can I upgrade the drink to a large?",
            textZh: "田园酱。饮料可以升大杯吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. Large drink is 30 cents more. What would you like?",
            textZh: "当然。大杯加30美分。要什么饮料？",
            keyPhrases: [{ en: "upgrade", zh: "升级" }],
            alternativeExpressions: [
              {
                textEn: "Sure! It's just 30 cents to go large. What drink?",
                textZh: "当然！升大杯只加30美分。什么饮料？",
                actionHint: "go large口语",
                frequency: "common",
              },
              {
                textEn: "You got it. 30 cents extra for the large size. What are you drinking?",
                textZh: "没问题。大杯加30美分。喝什么？",
                actionHint: "随意问法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Lemonade, please. Oh, and can I add a apple pie?",
            textZh: "柠檬水。哦对，能加一个苹果派吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Would you like to try our combo deal? Two pies for $3 instead of $2.49 each.",
            textZh: "当然！要试试组合优惠吗？两个派3美元，比单买划算。",
            keyPhrases: [{ en: "combo deal", zh: "组合优惠" }],
            alternativeExpressions: [
              {
                textEn: "Of course! Just so you know, we have a two-for-$3 deal on pies. Want to grab two?",
                textZh: "当然！提醒一下派有两个3美元的优惠。要来两个吗？",
                actionHint: "友好推荐",
                frequency: "common",
              },
              {
                textEn: "Sure thing! Hey, it's actually cheaper to get two — $3 for both. Interested?",
                textZh: "没问题！其实买两个更划算——两个才3美元。要吗？",
                actionHint: "强调划算",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "No thanks, just the one.", textZh: "不了，就一个。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Got it. Your total is $13.09. Your order number is 47. We'll call you when it's ready.",
            textZh: "好的。一共13.09美元。你的号码是47号。好了叫你。",
            keyPhrases: [{ en: "order number", zh: "取餐号" }],
            alternativeExpressions: [
              {
                textEn: "All right, $13.09. You're number 47. Listen for your number and we'll have it ready.",
                textZh: "好的，13.09美元。你是47号。听到叫号就好了。",
                actionHint: "listen for提醒",
                frequency: "common",
              },
              {
                textEn: "That's $13.09. Here's your receipt — number 47. Shouldn't be more than a few minutes.",
                textZh: "13.09美元。小票给你——47号。几分钟就好。",
                actionHint: "给时间预期",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "payment-and-problems",
        titleZh: "付款与出餐问题",
        titleEn: "Payment & Order Problems",
        description: "快餐店付款方式选择 + 拿到的餐和点的不一样怎么处理",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "All right, your total comes to $14.57. How would you like to pay?",
            textZh: "好的，一共14.57美元。怎么付款？",
            keyPhrases: [{ en: "total comes to", zh: "总共是" }],
            alternativeExpressions: [
              { textEn: "That'll be $14.57. Cash, card, or mobile pay?", textZh: "14.57美元。现金、刷卡还是手机支付？", actionHint: "列出所有支付方式", frequency: "common" },
              { textEn: "$14.57. How are you paying today?", textZh: "14.57美元。今天怎么付？", actionHint: "简洁问法", frequency: "common" },
            ],
            casualVersion: "Alright, $14.57. Cash or card?",
            formalityVariants: {
              casual: "That's $14.57. Cash or card?",
              standard: "All right, your total comes to $14.57. How would you like to pay?",
              formal: "Your total amounts to $14.57. How would you prefer to settle the payment?",
            },
          },
          {
            speaker: "you",
            textEn: "Can I use Apple Pay?",
            textZh: "可以用 Apple Pay 吗？",
            culturalNote: "美国大部分连锁快餐都支持 Apple Pay / Google Pay。直接问 'Can I use Apple Pay?' 就行。",
            casualVersion: "Apple Pay okay?",
            formalityVariants: {
              casual: "Apple Pay cool?",
              standard: "Can I use Apple Pay?",
              formal: "Would you accept Apple Pay as a form of payment?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! Just tap right here on the reader.",
            textZh: "当然！在读卡器这里碰一下就行。",
            keyPhrases: [{ en: "tap", zh: "碰/触碰" }, { en: "reader", zh: "读卡器" }],
            alternativeExpressions: [
              { textEn: "Yep! Hold your phone up to the terminal right here.", textZh: "可以！手机靠近这个终端就行。", actionHint: "指向终端", frequency: "common" },
              { textEn: "Absolutely. Go ahead and tap whenever you're ready.", textZh: "完全可以。准备好了碰一下就行。", actionHint: "等客户操作", frequency: "occasional" },
            ],
            casualVersion: "Yeah! Tap right here.",
            formalityVariants: {
              casual: "Yep, tap it right here.",
              standard: "Sure! Just tap right here on the reader.",
              formal: "Certainly. Please hold your device to the contactless reader here.",
            },
          },
          {
            speaker: "you",
            textEn: "Done. So where do I pick up my order?",
            textZh: "好了。那我在哪里取餐？",
            casualVersion: "Done. Where do I get my food?",
            formalityVariants: {
              casual: "Done. Where do I grab my food?",
              standard: "Done. Where do I pick up my order?",
              formal: "That is done. Where shall I collect my order?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Just wait by the counter over there. We'll call your number — you're 63.",
            textZh: "在那边柜台等一下。我们会叫号——你是63号。",
            keyPhrases: [{ en: "call your number", zh: "叫你的号" }],
            alternativeExpressions: [
              { textEn: "Hang tight by the pickup counter. Your number is 63 — we'll shout it out.", textZh: "在取餐柜台稍等。你是63号——会喊的。", actionHint: "hang tight = 稍等", frequency: "common" },
            ],
            casualVersion: "Just hang by the counter there. You're 63, we'll call ya.",
            formalityVariants: {
              casual: "Just hang by the counter. You're 63.",
              standard: "Wait by the counter over there. We'll call your number — you're 63.",
              formal: "Please wait by the collection counter. Your order number is 63, and we will announce it when ready.",
            },
          },
          {
            speaker: "you",
            textEn: "Um, excuse me? I think there's a mix-up with my order. I ordered a Big Mac but I got a McChicken.",
            textZh: "嗯，不好意思？我觉得我的单搞混了。我点的是巨无霸但拿到的是麦辣鸡。",
            culturalNote: "快餐出错很常见。礼貌地说 'Excuse me, I think there's a mix-up with my order' 就行，不需要生气。",
            commonMistake: {
              wrong: "Hey, you gave me the wrong food!",
              correct: "Excuse me, I think there's a mix-up with my order.",
              explanation: "'there's a mix-up' 比 'you gave me the wrong food' 更礼貌，不直接指责对方。",
            },
            casualVersion: "Hey, sorry — I think my order's wrong. I got a McChicken but I ordered a Big Mac.",
            formalityVariants: {
              casual: "Hey, I think my order's mixed up. Got a McChicken but ordered a Big Mac.",
              standard: "Excuse me, I think there's a mix-up with my order. I ordered a Big Mac but got a McChicken.",
              formal: "Pardon me, I believe there may have been an error with my order. I requested a Big Mac; however, I received a McChicken.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Oh, I'm so sorry about that! Let me fix that for you right away. Can I see your receipt?",
            textZh: "哦，真抱歉！我马上给你换。能看一下你的小票吗？",
            keyPhrases: [{ en: "fix that for you", zh: "帮你换/帮你处理" }, { en: "receipt", zh: "小票/收据" }],
            alternativeExpressions: [
              { textEn: "My bad! Let me swap that out for you. Do you have your receipt?", textZh: "我的错！给你换一个。有小票吗？", actionHint: "swap out = 换掉", frequency: "common" },
              { textEn: "Sorry about that! Let me get you the right one. Mind showing me your receipt?", textZh: "抱歉！我给你拿正确的。能给我看下小票吗？", actionHint: "确认订单", frequency: "occasional" },
            ],
            casualVersion: "Oh shoot, sorry! Lemme swap that for you. Got your receipt?",
            formalityVariants: {
              casual: "Oh, my bad! Let me swap that real quick. Got your receipt?",
              standard: "Oh, I'm so sorry about that! Let me fix that for you right away. Can I see your receipt?",
              formal: "I sincerely apologize for the mix-up. Allow me to rectify that immediately. May I see your receipt?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, here you go. And actually, the fries are cold too. Sorry, I don't mean to be difficult.",
            textZh: "好的，给你。而且其实薯条也是凉的。抱歉，我不是想找麻烦。",
            commonMistake: {
              wrong: "The fries are cold and the burger is wrong. This is unacceptable.",
              correct: "The fries are cold too. Sorry, I don't mean to be difficult.",
              explanation: "'I don't mean to be difficult' 是很好的缓和语气方式，避免显得在抱怨。",
            },
            casualVersion: "Here. Oh and the fries are kinda cold too. Sorry, not trying to be a pain.",
            formalityVariants: {
              casual: "Here ya go. Oh, and the fries are cold too. Not trying to be a pain.",
              standard: "Sure, here you go. And actually, the fries are cold too. Sorry, I don't mean to be difficult.",
              formal: "Certainly, here is the receipt. Additionally, the fries appear to be cold as well. I apologize for the inconvenience of mentioning it.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No, not at all! That's totally our fault. I'll get you a fresh Big Mac and fresh fries. Give me just two minutes.",
            textZh: "不不，完全不是！这完全是我们的错。我给你做一份新的巨无霸和新鲜薯条。给我两分钟。",
            keyPhrases: [{ en: "totally our fault", zh: "完全是我们的错" }, { en: "fresh", zh: "新鲜的/新做的" }],
            alternativeExpressions: [
              { textEn: "No worries at all! That's on us. Fresh Big Mac and fries coming right up.", textZh: "完全没关系！我们的问题。新的巨无霸和薯条马上来。", actionHint: "that's on us = 我们的责任", frequency: "common" },
            ],
            casualVersion: "No way, that's on us! Fresh Big Mac and fries coming right up. Two secs.",
            formalityVariants: {
              casual: "Nah, that's totally on us! New Big Mac and fresh fries, two secs.",
              standard: "Not at all! That's our fault. I'll get you a fresh Big Mac and fresh fries. Just two minutes.",
              formal: "Please, no apology necessary. The error is entirely ours. I will prepare a fresh Big Mac and a new serving of fries for you promptly.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks, I appreciate it. No rush.",
            textZh: "谢谢，感谢理解。不着急。",
            casualVersion: "Thanks! No rush.",
            formalityVariants: {
              casual: "Thanks! No rush.",
              standard: "Thanks, I appreciate it. No rush.",
              formal: "Thank you very much. I appreciate your prompt attention. There is no urgency.",
            },
          },
        ],
      },
    ],
  },
  // ==================== 快餐APP Fast Food App ====================
  {
    id: "restaurant-fast-food-app",
    tags: ["fast food", "快餐", "mcdonalds", "burger"],
    category: "restaurant",
    titleZh: "快餐APP下单问题",
    titleEn: "Fast Food App Order Issues",
    description: "使用快餐APP下单遇到问题，到店沟通",
    otherRole: "快餐店员",
    otherRoleIcon: "📱",
    flows: [
      {
        id: "basic",
        titleZh: "APP取餐",
        titleEn: "App Pickup",
        description: "APP下单后到店取餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I placed an order through the app. Here's my order number.",
            textZh: "你好，我在APP上下了单。这是我的订单号。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Let me pull that up... Order 2847? A double cheeseburger meal?",
            textZh: "让我查一下……2847号？双层芝士堡套餐？",
            keyPhrases: [{ en: "pull that up", zh: "查一下" }],
            alternativeExpressions: [
              {
                textEn: "One second, let me look that up... Is it 2847? Double cheeseburger meal?",
                textZh: "等一下，我查查……是2847吗？双层芝士堡套餐？",
                actionHint: "look that up变体",
                frequency: "common",
              },
              {
                textEn: "Give me a sec... Okay, order 2847 — double cheeseburger combo?",
                textZh: "稍等……好的，2847号——双层芝士堡套餐？",
                actionHint: "口语give me a sec",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes, that's mine.", textZh: "对，是我的。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "It's almost ready. Just another minute. You can wait by the pickup counter.",
            textZh: "快好了。再等一分钟。你可以在取餐台等。",
            keyPhrases: [{ en: "pickup counter", zh: "取餐台" }],
            alternativeExpressions: [
              {
                textEn: "Your order's almost done. Just a minute. You can hang out by the pickup area.",
                textZh: "你的单快好了。再等一下。在取餐区等就行。",
                actionHint: "hang out口语",
                frequency: "common",
              },
              {
                textEn: "We're finishing it up now. Should be just a sec — wait right over there at the counter.",
                textZh: "正在做呢。马上就好——在那边柜台等一下。",
                actionHint: "指方向",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. Oh, I forgot to add a sauce. Can I still add one?",
            textZh: "好的。哦，我忘了加酱。还能加吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "No problem! Which sauce? We have ketchup, mayo, BBQ, ranch, and hot sauce.",
            textZh: "没问题！要什么酱？有番茄酱、蛋黄酱、烧烤酱、田园酱和辣酱。",
            keyPhrases: [
              { en: "ketchup", zh: "番茄酱" },
              { en: "mayo", zh: "蛋黄酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! What sauce would you like? We've got ketchup, mayo, BBQ, ranch, or hot sauce.",
                textZh: "当然！要什么酱？番茄酱、蛋黄酱、烧烤酱、田园酱或辣酱。",
                actionHint: "稍正式",
                frequency: "common",
              },
              {
                textEn: "Of course! Pick any sauce — ketchup, mayo, BBQ, ranch, hot sauce.",
                textZh: "当然！随便选——番茄酱、蛋黄酱、烧烤酱、田园酱、辣酱。",
                actionHint: "自由选择",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "BBQ sauce, please. Is there an extra charge?", textZh: "烧烤酱。要额外收费吗？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "First sauce is free. Here you go, and your food is ready too!",
            textZh: "第一份酱免费。给你，你的餐也好了！",
            keyPhrases: [{ en: "first sauce is free", zh: "第一份酱免费" }],
            alternativeExpressions: [
              {
                textEn: "The first one's on us. And perfect timing — your order just came up!",
                textZh: "第一份我们请。正好——你的餐刚出来！",
                actionHint: "on us免费",
                frequency: "common",
              },
              {
                textEn: "No charge for the first sauce. Here's your food — enjoy!",
                textZh: "第一份酱不收费。餐给你——请享用！",
                actionHint: "no charge表达",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "APP订单出错",
        titleEn: "App Order Error",
        description: "APP下单出现错误需要沟通解决",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I picked up my app order but I think something's missing.",
            textZh: "不好意思，我取了APP订单但好像少了东西。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Oh no, I'm sorry about that. Can I see your order on the app?",
            textZh: "哦抱歉。能看一下你APP上的订单吗？",
            keyPhrases: [{ en: "I'm sorry about that", zh: "抱歉" }],
            alternativeExpressions: [
              {
                textEn: "I'm sorry to hear that. Could you show me the order on your phone?",
                textZh: "很抱歉听到这个。能给我看看手机上的订单吗？",
                actionHint: "看手机",
                frequency: "common",
              },
              {
                textEn: "Oh, that's not good. Do you have the order pulled up? Let me take a look.",
                textZh: "哦那可不行。你能打开订单吗？我看一下。",
                actionHint: "主动查看",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure. It shows I ordered two burgers, fries, and a milkshake. But I only got one burger.",
            textZh: "好的。上面显示我点了两个汉堡、薯条和奶昔。但只有一个汉堡。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You're right, I can see that. Let me get the second burger made for you right away.",
            textZh: "你说得对，我看到了。我马上让人给你做第二个汉堡。",
            keyPhrases: [{ en: "right away", zh: "马上" }],
            alternativeExpressions: [
              {
                textEn: "Yep, I see it now. We missed that. Let me get the kitchen on it immediately.",
                textZh: "是的，我看到了。我们漏了。我马上让厨房做。",
                actionHint: "get on it口语",
                frequency: "common",
              },
              {
                textEn: "Oh, you're totally right. I'll have them make the second one for you ASAP.",
                textZh: "哦你完全对。我让他们尽快做第二个。",
                actionHint: "ASAP口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Also, I asked for no mayo on both burgers in the app.",
            textZh: "谢谢。另外，我在APP上两个汉堡都选了不要蛋黄酱。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Let me check this one... Oh, it does have mayo. I'll remake both of them. Really sorry about that.",
            textZh: "让我看看这个……确实有蛋黄酱。两个都给你重做吧。真的很抱歉。",
            keyPhrases: [{ en: "remake", zh: "重做" }],
            alternativeExpressions: [
              {
                textEn: "Oh, you're right — there's mayo on this one. I'll redo both burgers for you. My apologies.",
                textZh: "哦你说得对——这个上面有蛋黄酱。两个都重做。抱歉。",
                actionHint: "redo替代remake",
                frequency: "common",
              },
              {
                textEn: "Yikes, that's definitely mayo. Let me have both of them made fresh for you. So sorry.",
                textZh: "糟糕，确实是蛋黄酱。我让两个都重新做。非常抱歉。",
                actionHint: "Yikes口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I appreciate that. How long will it take?", textZh: "谢谢。要多久？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Just about three minutes. I'll bring them out to you. Again, so sorry for the inconvenience.",
            textZh: "大约三分钟。我给你送过去。再次抱歉给你带来不便。",
            keyPhrases: [{ en: "inconvenience", zh: "不便" }],
            alternativeExpressions: [
              {
                textEn: "About three minutes. I'll drop them off at your table. Really sorry for the mix-up.",
                textZh: "大约三分钟。我送到你桌上。搞混了真的很抱歉。",
                actionHint: "drop off口语",
                frequency: "common",
              },
              {
                textEn: "Give me three minutes tops. I'll bring the new ones right over. Sorry again for the trouble.",
                textZh: "最多三分钟。我马上把新的端过来。再次抱歉添麻烦了。",
                actionHint: "three minutes tops口语",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 早午餐 Brunch ====================
  {
    id: "restaurant-brunch-reservation",
    category: "restaurant",
    titleZh: "早午餐订位",
    titleEn: "Brunch Reservation",
    description: "预订周末早午餐位置",
    otherRole: "餐厅前台",
    otherRoleIcon: "🥞",
    flows: [
      {
        id: "basic",
        titleZh: "电话订位",
        titleEn: "Phone Reservation",
        description: "打电话预订周末brunch",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Good morning, Sunrise Cafe. How can I help you?",
            textZh: "早上好，日出咖啡馆。有什么可以帮您？",
            keyPhrases: [{ en: "how can I help you", zh: "有什么可以帮您" }],
            alternativeExpressions: [
              {
                textEn: "Sunrise Cafe, good morning! What can I do for you?",
                textZh: "日出咖啡馆，早上好！有什么需要？",
                actionHint: "店名前置",
                frequency: "common",
              },
              {
                textEn: "Hi, thanks for calling Sunrise Cafe. How may I assist you?",
                textZh: "你好，感谢致电日出咖啡馆。有什么可以帮您？",
                actionHint: "电话标准用语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a reservation for brunch this Sunday.",
            textZh: "你好，我想订这周日的早午餐。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "Sure! What time and how many people?",
            textZh: "好的！几点几位？",
            keyPhrases: [
              { en: "what time", zh: "几点" },
              { en: "how many people", zh: "几位" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! What time were you thinking, and how large is your party?",
                textZh: "当然！想订什么时间？几个人？",
                actionHint: "how large is your party",
                frequency: "common",
              },
              {
                textEn: "Great! For how many guests and what time?",
                textZh: "好的！几位客人？什么时间？",
                actionHint: "顺序调换",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Around 10:30 AM for three people.", textZh: "大概上午十点半，三个人。" },
          {
            speaker: "them",
            role: "前台",
            textEn: "Let me check... We have 10:30 or 11:00 available. Which do you prefer?",
            textZh: "我查一下……十点半和十一点都可以。你选哪个？",
            keyPhrases: [{ en: "available", zh: "可以的" }],
            alternativeExpressions: [
              {
                textEn: "One moment... I can do 10:30 or 11:00. Which works better for you?",
                textZh: "稍等……十点半或十一点都行。哪个更方便？",
                actionHint: "works better更口语",
                frequency: "common",
              },
              {
                textEn: "Let me see... We're open at 10:30 or 11:00. What's your preference?",
                textZh: "我看看……十点半和十一点有位。你偏好哪个？",
                actionHint: "preference正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "10:30 works. Can we sit on the patio?",
            textZh: "十点半可以。能坐露台吗？",
            culturalNote: "Patio 是户外就餐区，美国brunch很流行坐outdoor/patio。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn: "I'll note the patio request, but I can't guarantee it. We'll do our best. Name, please?",
            textZh: "我记下露台需求，但不能保证。我们尽力。请问姓名？",
            keyPhrases: [{ en: "can't guarantee", zh: "不能保证" }],
            alternativeExpressions: [
              {
                textEn:
                  "I'll put in a note for patio seating. It's first come, first served, but we'll try. And your name?",
                textZh: "我备注一下露台座位。先到先得，但我们尽量。请问贵姓？",
                actionHint: "先到先得",
                frequency: "common",
              },
              {
                textEn:
                  "I can request patio for you, but no promises. We'll see what's available. Name for the reservation?",
                textZh: "我可以帮你申请露台，但不能保证。看当天情况。订什么名字？",
                actionHint: "更直白",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Wang, W-A-N-G. Thank you!", textZh: "王，W-A-N-G。谢谢！" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "等位和排队",
        titleEn: "Walk-in and Waitlist",
        description: "没有预订直接到brunch餐厅排队",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "前台",
            textEn: "Good morning! Do you have a reservation?",
            textZh: "早上好！有预订吗？",
            keyPhrases: [{ en: "do you have a reservation", zh: "有预订吗" }],
            alternativeExpressions: [
              {
                textEn: "Hi! Welcome. Did you book a table?",
                textZh: "嗨！欢迎。订了桌吗？",
                actionHint: "book a table口语",
                frequency: "common",
              },
              {
                textEn: "Good morning! Are you here for a reservation or walk-in?",
                textZh: "早上好！有预订还是直接来的？",
                actionHint: "walk-in说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No, we don't. Is there a long wait for a table for two?",
            textZh: "没有。两个人的桌要等很久吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Right now it's about a 45-minute wait. I can put your name on the list and text you when it's ready.",
            textZh: "现在大约等45分钟。可以把你名字加到等位名单，好了发短信通知你。",
            keyPhrases: [
              { en: "put your name on the list", zh: "加到等位名单" },
              { en: "text you", zh: "发短信通知你" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We're looking at about 45 minutes. I can add you to the waitlist and send a text when your table's ready.",
                textZh: "大概要等45分钟。我可以把你加到等位名单，桌位好了发短信。",
                actionHint: "waitlist表达",
                frequency: "common",
              },
              {
                textEn:
                  "The wait is roughly 45 minutes right now. Want me to put you down and give you a buzz when it opens up?",
                textZh: "现在大约等45分钟。要我登记一下，有位了通知你吗？",
                actionHint: "give you a buzz口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Okay, that works. Is there anywhere nearby we can walk around while we wait?",
            textZh: "好的。附近有什么地方可以逛逛吗？",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "There's a bookshop right next door, and a park across the street. Just stay within five minutes walking distance.",
            textZh: "隔壁有个书店，对面有个公园。待在步行五分钟范围内就好。",
            keyPhrases: [{ en: "within walking distance", zh: "步行范围内" }],
            alternativeExpressions: [
              {
                textEn: "There's a bookstore next door and a nice park across the way. Just don't go too far!",
                textZh: "隔壁有书店，对面有个不错的公园。别走太远就好！",
                actionHint: "轻松提醒",
                frequency: "common",
              },
              {
                textEn: "You could check out the bookshop next door or the park nearby. Just stay close by.",
                textZh: "你可以去隔壁书店或附近公园逛逛。待在附近就行。",
                actionHint: "建议语气",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. My phone number is 415-555-0199.",
            textZh: "好的。我的电话是415-555-0199。",
          },
          {
            speaker: "them",
            role: "前台",
            textEn:
              "Great. I'll send a text about 10 minutes before your table is ready. When you get the text, please come back within five minutes or you may lose your spot.",
            textZh: "好的。桌位准备好前10分钟给你发短信。收到后五分钟内回来，不然可能会被取消。",
            keyPhrases: [{ en: "lose your spot", zh: "被取消位置" }],
            alternativeExpressions: [
              {
                textEn:
                  "I'll text you a heads-up about 10 minutes out. Just make sure to come back within five or we'll have to give your table away.",
                textZh: "桌位好前10分钟发短信提醒。五分钟内回来，不然我们得把桌位让出去。",
                actionHint: "更直白说明",
                frequency: "common",
              },
              {
                textEn:
                  "You'll get a text when we're close. Just head back within five minutes of getting it so you don't lose your place.",
                textZh: "快到的时候你会收到短信。收到后五分钟内回来免得失去位置。",
                actionHint: "口语化说明",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Understood. Thank you!", textZh: "明白了。谢谢！" },
        ],
      },
    ],
  },
  {
    id: "restaurant-brunch-menu",
    category: "restaurant",
    titleZh: "早午餐点餐",
    titleEn: "Brunch Menu Order",
    description: "看菜单点早午餐的各种经典菜品",
    otherRole: "服务员",
    otherRoleIcon: "🥞",
    flows: [
      {
        id: "basic",
        titleZh: "经典brunch点餐",
        titleEn: "Classic Brunch Order",
        description: "点经典的早午餐菜品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good morning! Can I start you off with some coffee or juice?",
            textZh: "早上好！先来点咖啡或果汁？",
            keyPhrases: [{ en: "start you off with", zh: "先来点" }],
            alternativeExpressions: [
              {
                textEn: "Morning! What can I bring you to drink first? Coffee, juice, water?",
                textZh: "早！先喝点什么？咖啡、果汁、水？",
                actionHint: "多个选项",
                frequency: "common",
              },
              {
                textEn: "Hi there! Can I get you started with a beverage?",
                textZh: "嗨！先来杯饮品？",
                actionHint: "用beverage",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Coffee, please. And an orange juice.", textZh: "咖啡。再来杯橙汁。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure. Are you ready to order food, or do you need a minute?",
            textZh: "好的。准备好点餐了吗，还是再看看？",
            keyPhrases: [{ en: "need a minute", zh: "再看看" }],
            alternativeExpressions: [
              {
                textEn: "Do you know what you'd like, or should I give you a minute?",
                textZh: "知道要什么了吗，还是再看一下？",
                actionHint: "give you a minute",
                frequency: "common",
              },
              {
                textEn: "Ready to order or still deciding?",
                textZh: "准备好了还是在想？",
                actionHint: "最简问法",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "What's the eggs Benedict like here?", textZh: "你们的班尼迪克蛋怎么样？" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's one of our best sellers — poached eggs on English muffins with Canadian bacon and hollandaise sauce.",
            textZh: "是我们的招牌之一——水波蛋放在英式马芬上配加拿大培根和荷兰酱。",
            keyPhrases: [
              { en: "poached eggs", zh: "水波蛋" },
              { en: "hollandaise sauce", zh: "荷兰酱" },
              { en: "best sellers", zh: "招牌" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everyone loves it! It's poached eggs on an English muffin with Canadian bacon, all topped with hollandaise.",
                textZh: "大家都爱！水波蛋放在英式马芬上配加拿大培根，浇上荷兰酱。",
                actionHint: "更生动描述",
                frequency: "common",
              },
              {
                textEn:
                  "It's a classic — eggs poached to perfection over muffins and bacon with a rich hollandaise drizzle.",
                textZh: "经典款——完美的水波蛋配马芬和培根再淋上浓郁荷兰酱。",
                actionHint: "强调经典",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have that. How do you do the eggs? Can I get them over easy instead?",
            textZh: "我要这个。鸡蛋怎么做的？能换成单面煎嫩蛋吗？",
            culturalNote:
              "鸡蛋的做法：over easy（单面煎嫩）、over medium（半熟）、over hard（全熟）、sunny side up（太阳蛋）、scrambled（炒蛋）。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! Over easy on the eggs Benedict. Anything else?",
            textZh: "当然！班尼迪克蛋换单面煎嫩蛋。还要别的吗？",
            keyPhrases: [{ en: "over easy", zh: "单面煎嫩" }],
            alternativeExpressions: [
              {
                textEn: "No problem! I'll have them do over easy eggs on the Benedict. Can I get you anything else?",
                textZh: "没问题！班尼迪克蛋做成单面煎嫩。还要什么？",
                actionHint: "完整确认",
                frequency: "common",
              },
              {
                textEn: "Sure thing, over easy it is. Anything more for you?",
                textZh: "好的，那就做单面煎嫩。还要别的吗？",
                actionHint: "简短确认",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That's all for now, thank you.", textZh: "暂时就这些，谢谢。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "询问特色和搭配",
        titleEn: "Specials and Pairings",
        description: "了解brunch特色菜和饮品搭配",
        difficulty: "intermediate",
        turns: [
          { speaker: "you", textEn: "Do you have any brunch specials today?", textZh: "今天有什么早午餐特色菜吗？" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Yes! Today's special is stuffed French toast with mixed berries and mascarpone, and our bottomless mimosas are $18.",
            textZh: "有！今天的特色菜是夹心法式吐司配混合浆果和马斯卡彭芝士，无限续杯含羞草鸡尾酒18美元。",
            keyPhrases: [
              { en: "French toast", zh: "法式吐司" },
              { en: "bottomless mimosas", zh: "无限续杯含羞草鸡尾酒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do! The chef's special today is berry mascarpone French toast. And bottomless mimosas for $18.",
                textZh: "有的！今天厨师特选是浆果马斯卡彭法式吐司。无限续杯含羞草18美元。",
                actionHint: "chef's special表达",
                frequency: "common",
              },
              {
                textEn: "Absolutely! We've got stuffed French toast and unlimited mimosas for $18 today.",
                textZh: "当然！今天有夹心法式吐司和18美元无限畅饮含羞草鸡尾酒。",
                actionHint: "unlimited替代bottomless",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's a mimosa exactly?", textZh: "含羞草鸡尾酒具体是什么？" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's champagne mixed with orange juice. Very classic brunch drink. We also have bellinis with peach.",
            textZh: "是香槟混橙汁。非常经典的早午餐饮品。我们也有蜜桃版的贝利尼。",
            keyPhrases: [
              { en: "champagne mixed with orange juice", zh: "香槟混橙汁" },
              { en: "bellini", zh: "贝利尼" },
            ],
            alternativeExpressions: [
              {
                textEn: "It's basically bubbly and OJ — a brunch staple! We also do peach bellinis.",
                textZh: "基本上就是气泡酒加橙汁——早午餐必备！也有蜜桃贝利尼。",
                actionHint: "口语化OJ",
                frequency: "common",
              },
              {
                textEn:
                  "Champagne and fresh orange juice. Total brunch classic. Our bellinis are great too if you prefer peach.",
                textZh: "香槟加鲜橙汁。绝对的早午餐经典。喜欢蜜桃的话贝利尼也很好。",
                actionHint: "强调新鲜",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do the bottomless mimosas. And the French toast special.",
            textZh: "我要无限续杯的含羞草。再来特色法式吐司。",
            culturalNote: "\'Bottomless\' 在美国brunch指无限续杯，一般有时间限制（通常90分钟）。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Great choice! Just so you know, the bottomless deal is for 90 minutes. I'll start you off with your first glass.",
            textZh: "好选择！提醒一下，无限续杯有90分钟限制。我先给你上第一杯。",
            keyPhrases: [{ en: "90 minutes", zh: "90分钟" }],
            alternativeExpressions: [
              {
                textEn: "Awesome! Quick heads-up: the bottomless runs for 90 minutes. Let me get your first one going.",
                textZh: "太好了！提醒一下无限续杯是90分钟。我先上第一杯。",
                actionHint: "heads-up提醒",
                frequency: "common",
              },
              {
                textEn: "Love it! The unlimited deal lasts an hour and a half. I'll bring your first glass right out.",
                textZh: "好！无限畅饮持续一个半小时。马上给你上第一杯。",
                actionHint: "用小时表述",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. Does the French toast come with a side?",
            textZh: "没问题。法式吐司配什么配菜？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "It comes with your choice of bacon, sausage, or fresh fruit.",
            textZh: "配培根、香肠或新鲜水果三选一。",
            keyPhrases: [{ en: "your choice of", zh: "三选一" }],
            alternativeExpressions: [
              {
                textEn: "You get a side with it — bacon, sausage, or fruit. What sounds good?",
                textZh: "配一个配菜——培根、香肠或水果。想要哪个？",
                actionHint: "主动问选择",
                frequency: "common",
              },
              {
                textEn: "It includes a side. You can pick bacon, sausage, or fresh fruit.",
                textZh: "含一份配菜。可以选培根、香肠或新鲜水果。",
                actionHint: "includes说法",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Fresh fruit, please.", textZh: "新鲜水果。" },
        ],
      },
    ],
  },
  // ==================== 亚洲美食 Asian Cuisine ====================
  {
    id: "restaurant-sushi-bar",
    category: "restaurant",
    titleZh: "寿司吧点餐",
    titleEn: "Sushi Bar Order",
    description: "在寿司吧台前点寿司和刺身",
    otherRole: "寿司师傅/服务员",
    otherRoleIcon: "🍣",
    flows: [
      {
        id: "basic",
        titleZh: "基础寿司点餐",
        titleEn: "Basic Sushi Order",
        description: "点几份基本的寿司",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Welcome! Would you like to sit at the sushi bar or at a table?",
            textZh: "欢迎！您想坐吧台还是桌子？",
            keyPhrases: [{ en: "sushi bar", zh: "吧台" }],
            alternativeExpressions: [
              {
                textEn: "Hi, welcome in! Bar seating or a table tonight?",
                textZh: "嗨，欢迎！今晚坐吧台还是桌子？",
                actionHint: "bar seating说法",
                frequency: "common",
              },
              {
                textEn: "Welcome! Do you have a preference — counter or table?",
                textZh: "欢迎！有偏好吗——吧台还是桌子？",
                actionHint: "用counter",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The sushi bar, please. I'd like to watch the chef.",
            textZh: "吧台。我想看师傅做。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great! Here's the menu. Would you like to start with some edamame or miso soup?",
            textZh: "好的！这是菜单。先来点毛豆或味噌汤？",
            keyPhrases: [
              { en: "edamame", zh: "毛豆" },
              { en: "miso soup", zh: "味噌汤" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's your menu. Can I bring you some edamame or miso soup to start?",
                textZh: "菜单给你。先上点毛豆或味噌汤？",
                actionHint: "bring you主动上",
                frequency: "common",
              },
              {
                textEn: "Take a look at the menu. Want any appetizers? Edamame and miso soup are popular.",
                textZh: "看看菜单。要开胃菜吗？毛豆和味噌汤很受欢迎。",
                actionHint: "推荐热门",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Miso soup, please. And I'll have the salmon nigiri and a California roll.",
            textZh: "味噌汤。再来三文鱼手握和加州卷。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "How many pieces of the salmon nigiri? Two or four?",
            textZh: "三文鱼手握要几个？两个还是四个？",
            keyPhrases: [{ en: "how many pieces", zh: "几个" }],
            alternativeExpressions: [
              {
                textEn: "For the salmon nigiri, would you like two pieces or four?",
                textZh: "三文鱼手握要两个还是四个？",
                actionHint: "完整句式",
                frequency: "common",
              },
              {
                textEn: "Salmon nigiri comes in a two-piece or four-piece order. Which one?",
                textZh: "三文鱼手握有两个一份和四个一份。要哪个？",
                actionHint: "说明份量",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Four pieces, please.", textZh: "四个。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Would you like anything to drink? Green tea, beer, or sake?",
            textZh: "要喝点什么？绿茶、啤酒还是清酒？",
            keyPhrases: [{ en: "sake", zh: "清酒" }],
            alternativeExpressions: [
              {
                textEn: "Can I get you something to drink? We have tea, Japanese beer, and sake.",
                textZh: "来点喝的吗？有茶、日本啤酒和清酒。",
                actionHint: "加日本啤酒",
                frequency: "common",
              },
              {
                textEn: "What would you like to drink? Hot or cold green tea, beer, or sake?",
                textZh: "喝什么？热绿茶或冰绿茶、啤酒或清酒？",
                actionHint: "细分茶温度",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Hot green tea, please.", textZh: "热绿茶，谢谢。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "omakase 体验",
        titleEn: "Omakase Experience",
        description: "体验厨师推荐的omakase套餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'm interested in the omakase. How does it work?",
            textZh: "我想试试omakase。怎么个流程？",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "Omakase means 'I'll leave it to you.' The chef selects the best fish available today and serves it course by course. It's about 10 to 12 pieces.",
            textZh: "Omakase意思是'交给你了'。师傅选今天最好的鱼一道道上。大约10到12贯。",
            keyPhrases: [
              { en: "I'll leave it to you", zh: "交给你了" },
              { en: "course by course", zh: "一道道" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It means you trust the chef to choose. I pick the freshest fish of the day and serve you one piece at a time. Usually 10 to 12 courses.",
                textZh: "意思是你信任师傅的选择。我挑当天最新鲜的鱼一贯一贯地上。通常10到12道。",
                actionHint: "第一人称解释",
                frequency: "common",
              },
              {
                textEn:
                  "Omakase literally means 'leave it up to me.' I'll create a tasting course with today's best catches — about 10 to 12 pieces.",
                textZh: "Omakase字面意思是'交给我'。我用今天最好的鱼做品尝套餐——大约10到12贯。",
                actionHint: "literally强调",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sounds wonderful. How much is it?", textZh: "听起来很棒。多少钱？" },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "The omakase is $85 per person. We also have a premium option at $120 with uni and otoro.",
            textZh: "Omakase每人85美元。还有120美元的高级版本有海胆和大肥金枪鱼。",
            keyPhrases: [
              { en: "per person", zh: "每人" },
              { en: "uni", zh: "海胆" },
              { en: "otoro", zh: "大肥金枪鱼" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's $85 a head for the regular omakase. The premium at $120 includes uni and otoro — our finest cuts.",
                textZh: "普通omakase每人85美元。120美元的高级版有海胆和大肥——我们最好的。",
                actionHint: "a head口语",
                frequency: "common",
              },
              {
                textEn:
                  "The standard omakase runs $85 per person. For $120, you get the upgraded version with sea urchin and fatty tuna belly.",
                textZh: "标准omakase每人85美元。120美元是升级版有海胆和金枪鱼肥肉。",
                actionHint: "翻译日语术语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the regular omakase. I should mention I'm allergic to shrimp.",
            textZh: "我选普通的omakase。我要说一下我对虾过敏。",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "Noted. We'll substitute the shrimp with something else. Any other allergies or things you don't eat?",
            textZh: "记下了。虾会换成别的。还有其他过敏或不吃的吗？",
            keyPhrases: [{ en: "substitute", zh: "替换" }],
            alternativeExpressions: [
              {
                textEn:
                  "Got it, no shrimp. I'll swap it out for something equally delicious. Anything else I should know?",
                textZh: "明白，不吃虾。我换一样同样好吃的。还有什么需要注意的？",
                actionHint: "swap it out口语",
                frequency: "common",
              },
              {
                textEn: "Understood. I'll replace the shrimp course. Are there any other dietary restrictions?",
                textZh: "了解。我会替换虾的那道。还有其他饮食限制吗？",
                actionHint: "dietary restrictions正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No, that's the only one. I eat everything else.",
            textZh: "没有，只有这个。其他都吃。",
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn:
              "Perfect. I'll start with something light. Please eat each piece as it's served — that's when it's at its best.",
            textZh: "好的。我从清淡的开始。每一贯做好请马上吃——那是最佳时机。",
            keyPhrases: [{ en: "as it's served", zh: "做好就" }],
            alternativeExpressions: [
              {
                textEn:
                  "Great. We'll begin with lighter fish first. Please enjoy each piece right away — that's how you get the best flavor.",
                textZh: "好。先从清淡的鱼开始。做好请立刻吃——那样味道最好。",
                actionHint: "解释原因",
                frequency: "common",
              },
              {
                textEn: "Wonderful. I'll go from mild to rich. The key is to eat each piece the moment I set it down.",
                textZh: "很好。我会从清淡到浓郁。关键是每一贯放下就吃。",
                actionHint: "介绍节奏",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Should I use chopsticks or my hands?",
            textZh: "明白。用筷子还是手？",
            culturalNote: "正宗寿司店用手吃握寿司是完全可以的，甚至更正统。",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-ramen-shop",
    category: "restaurant",
    titleZh: "拉面店点餐",
    titleEn: "Ramen Shop Order",
    description: "在拉面店选择汤底、面条和配料",
    otherRole: "服务员",
    otherRoleIcon: "🍜",
    flows: [
      {
        id: "basic",
        titleZh: "基础拉面点餐",
        titleEn: "Basic Ramen Order",
        description: "点一碗基本拉面",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Welcome! Have you been here before?",
            textZh: "欢迎！来过吗？",
            keyPhrases: [{ en: "have you been here before", zh: "来过吗" }],
            alternativeExpressions: [
              {
                textEn: "Hi, welcome! First time here?",
                textZh: "嗨，欢迎！第一次来吗？",
                actionHint: "反向问法",
                frequency: "common",
              },
              {
                textEn: "Hey! You a regular or is this your first visit?",
                textZh: "嗨！你是常客还是第一次？",
                actionHint: "区分老客新客",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "No, first time. How do I order?", textZh: "没有，第一次。怎么点？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "First, pick your broth: tonkotsu, shoyu, miso, or shio. Then choose your toppings.",
            textZh: "先选汤底：豚骨、酱油、味噌或盐味。然后选配料。",
            keyPhrases: [
              { en: "broth", zh: "汤底" },
              { en: "tonkotsu", zh: "豚骨" },
              { en: "toppings", zh: "配料" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "So you start by picking a base — we've got tonkotsu, shoyu, miso, and shio. Then you customize your toppings.",
                textZh: "先选汤底——有豚骨、酱油、味噌和盐味。然后自选配料。",
                actionHint: "customize你的配料",
                frequency: "common",
              },
              {
                textEn:
                  "Step one is the broth. We have four options: pork bone, soy sauce, miso, or salt. After that, pick your toppings.",
                textZh: "第一步选汤底。四种：猪骨、酱油、味噌或盐味。然后选配料。",
                actionHint: "翻译日语术语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's the most popular one?", textZh: "哪个最受欢迎？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Our tonkotsu is the best seller. It's a rich, creamy pork bone broth.",
            textZh: "豚骨最畅销。浓郁奶白的猪骨汤。",
            keyPhrases: [
              { en: "rich", zh: "浓郁" },
              { en: "creamy", zh: "奶白" },
            ],
            alternativeExpressions: [
              {
                textEn: "Most people go with the tonkotsu. It's thick, creamy, and full of flavor.",
                textZh: "大多数人选豚骨。浓稠奶白，味道十足。",
                actionHint: "用most people推荐",
                frequency: "common",
              },
              {
                textEn: "The tonkotsu is our number one. Rich pork bone soup — super hearty and satisfying.",
                textZh: "豚骨是我们的第一名。浓郁猪骨汤——非常扎实满足。",
                actionHint: "hearty形容",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the tonkotsu. What toppings come with it?",
            textZh: "我试豚骨的。标配什么配料？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It comes with chashu pork, soft-boiled egg, green onions, and nori. You can add extra toppings for $2 each.",
            textZh: "标配叉烧、溏心蛋、葱花和海苔。加配料每样2美元。",
            keyPhrases: [
              { en: "chashu pork", zh: "叉烧" },
              { en: "soft-boiled egg", zh: "溏心蛋" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Standard toppings are sliced pork, a soft egg, scallions, and seaweed. Extra toppings are $2 a pop.",
                textZh: "标配是叉烧、溏心蛋、葱花和海苔。额外配料每样2美元。",
                actionHint: "用英文描述配料",
                frequency: "common",
              },
              {
                textEn:
                  "It already includes chashu, egg, green onions, and nori. Want to add anything? It's $2 per extra topping.",
                textZh: "已经包含叉烧、蛋、葱花和海苔。要加什么吗？每样2美元。",
                actionHint: "主动问加料",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sounds great. I'll have the standard one.", textZh: "不错。就标准的吧。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制拉面",
        titleEn: "Custom Ramen Order",
        description: "定制拉面的面条硬度、浓度等",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Hi! Ready to order?",
            textZh: "嗨！准备好点了吗？",
            keyPhrases: [{ en: "ready to order", zh: "准备好点了吗" }],
            alternativeExpressions: [
              {
                textEn: "Hey there! Do you know what you'd like?",
                textZh: "嗨！知道要什么了吗？",
                actionHint: "换种问法",
                frequency: "common",
              },
              {
                textEn: "Welcome! All set to order?",
                textZh: "欢迎！可以点了吗？",
                actionHint: "all set口语",
                frequency: "common",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes. I'd like the miso ramen. Can I choose the noodle firmness?",
            textZh: "好的。我要味噌拉面。能选面的硬度吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! We have soft, regular, firm, and extra firm.",
            textZh: "当然！有软、普通、硬和特硬。",
            keyPhrases: [
              { en: "noodle firmness", zh: "面条硬度" },
              { en: "firm", zh: "硬" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes! Four levels: soft, normal, hard, or extra hard. What's your preference?",
                textZh: "可以！四种：软、普通、硬、特硬。你喜欢哪个？",
                actionHint: "用levels表达",
                frequency: "common",
              },
              {
                textEn:
                  "Sure! We offer four firmness options — from soft to extra firm. Most people go with regular or firm.",
                textZh: "当然！四种硬度——从软到特硬。大多数人选普通或硬。",
                actionHint: "推荐常见选择",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Firm, please. And can I get the spicy version?", textZh: "硬面。能做辣的吗？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! On a scale of 1 to 5, how spicy do you want it?",
            textZh: "当然！辣度1到5级，你要几级？",
            keyPhrases: [{ en: "on a scale of 1 to 5", zh: "1到5级" }],
            alternativeExpressions: [
              {
                textEn: "You got it! We go from 1 to 5 on spiciness. What level do you want?",
                textZh: "没问题！辣度从1到5。你要几级？",
                actionHint: "换种问法",
                frequency: "common",
              },
              {
                textEn: "Absolutely! How hot? Level 1 is mild, 5 is fire. What's your number?",
                textZh: "当然！多辣？1级是微辣，5级是超辣。你选几？",
                actionHint: "形象描述等级",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Level 2. I like a little heat but nothing too crazy.",
            textZh: "2级。我喜欢微辣但不要太猛。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good choice. Any extra toppings? I recommend the extra chashu and corn.",
            textZh: "好选择。加配料吗？推荐加叉烧和玉米。",
            keyPhrases: [{ en: "extra toppings", zh: "额外配料" }],
            alternativeExpressions: [
              {
                textEn: "Nice! Want any add-ons? The extra pork and corn are really popular.",
                textZh: "不错！要加东西吗？加叉烧和玉米很受欢迎。",
                actionHint: "add-ons说法",
                frequency: "common",
              },
              {
                textEn:
                  "Great pick. I'd suggest throwing on some extra chashu and butter corn — it's amazing with miso.",
                textZh: "好选择。建议加叉烧和黄油玉米——配味噌超棒。",
                actionHint: "具体搭配建议",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, I'll add extra chashu and corn. Can I also get a side of gyoza?",
            textZh: "好，加叉烧和玉米。再来一份煎饺。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! That'll be $22 total. It'll be about 10 minutes.",
            textZh: "当然！一共22美元。大约10分钟。",
            keyPhrases: [{ en: "gyoza", zh: "煎饺" }],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Your total comes to $22. Should be ready in about 10 minutes.",
                textZh: "没问题！总计22美元。大约10分钟好。",
                actionHint: "should be ready",
                frequency: "common",
              },
              {
                textEn: "You got it! That's $22 altogether. Give us about 10 minutes and we'll have it out.",
                textZh: "好的！一共22美元。大约10分钟就出来。",
                actionHint: "have it out口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Perfect, thank you.", textZh: "好的，谢谢。" },
        ],
      },
    ],
  },
  {
    id: "restaurant-dim-sum",
    category: "restaurant",
    titleZh: "点心茶楼",
    titleEn: "Dim Sum Restaurant",
    description: "在港式茶楼点各种点心",
    otherRole: "服务员",
    otherRoleIcon: "🥟",
    flows: [
      {
        id: "basic",
        titleZh: "基础点心",
        titleEn: "Basic Dim Sum",
        description: "在茶楼点常见点心",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "How many in your party? And what tea would you like?",
            textZh: "几位？要什么茶？",
            keyPhrases: [
              { en: "how many in your party", zh: "几位" },
              { en: "what tea", zh: "什么茶" },
            ],
            alternativeExpressions: [
              {
                textEn: "Welcome! How many people? And which tea — pu-erh, jasmine, or chrysanthemum?",
                textZh: "欢迎！几个人？什么茶——普洱、茉莉还是菊花？",
                actionHint: "列出常见茶",
                frequency: "common",
              },
              {
                textEn: "Hi! Table for how many? And we'll get your tea started — any preference?",
                textZh: "嗨！几位？先上茶——有偏好吗？",
                actionHint: "先上茶的习惯",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Two people. Jasmine tea, please.", textZh: "两个人。茉莉花茶。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's the dim sum menu. You can check off the items you want on the order sheet.",
            textZh: "这是点心菜单。在点单纸上勾选你要的。",
            keyPhrases: [
              { en: "check off", zh: "勾选" },
              { en: "order sheet", zh: "点单纸" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here's the menu and the order form. Just tick the boxes next to what you'd like.",
                textZh: "菜单和点单纸给你。在想要的旁边打勾就行。",
                actionHint: "tick the boxes",
                frequency: "common",
              },
              {
                textEn: "Take a look at the dim sum list. Mark down what you want on this sheet and I'll put it in.",
                textZh: "看看点心单。在这张纸上标出你要的我去下单。",
                actionHint: "mark down说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you explain what's in the har gow?",
            textZh: "能解释一下虾饺里有什么吗？",
            culturalNote: "Har gow（虾饺）、siu mai（烧卖）、char siu bao（叉烧包）是最经典的三种点心。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Har gow is crystal shrimp dumplings in a translucent wrapper. It's one of our most popular items.",
            textZh: "虾饺是透明皮包的虾仁饺子。是最受欢迎的之一。",
            keyPhrases: [
              { en: "crystal shrimp dumplings", zh: "水晶虾饺" },
              { en: "translucent wrapper", zh: "透明皮" },
            ],
            alternativeExpressions: [
              {
                textEn: "Those are steamed shrimp dumplings with a see-through skin. A must-order here!",
                textZh: "那是蒸虾饺配半透明的皮。来这必点的！",
                actionHint: "must-order推荐",
                frequency: "common",
              },
              {
                textEn:
                  "Har gow is a steamed dumpling filled with whole shrimp in a delicate, clear wrapper. Everyone loves it.",
                textZh: "虾饺是蒸的饺子里面包整虾，透明薄皮。大家都爱。",
                actionHint: "详细描述",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the har gow and the siu mai. And one order of char siu bao.",
            textZh: "我要虾饺和烧卖。再来一份叉烧包。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it. Do you want the steamed or baked char siu bao?",
            textZh: "好的。叉烧包要蒸的还是烤的？",
            keyPhrases: [{ en: "steamed or baked", zh: "蒸的还是烤的" }],
            alternativeExpressions: [
              {
                textEn:
                  "For the BBQ pork buns, steamed or baked? The steamed ones are soft and fluffy, the baked have a golden crust.",
                textZh: "叉烧包要蒸的还是烤的？蒸的松软，烤的有金黄脆皮。",
                actionHint: "描述区别",
                frequency: "common",
              },
              {
                textEn: "We do the char siu bao two ways — steamed or oven-baked. Which do you prefer?",
                textZh: "叉烧包有两种做法——蒸的或烤箱烤的。你喜欢哪种？",
                actionHint: "two ways表达",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Steamed, please.", textZh: "蒸的，谢谢。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "推车点心",
        titleEn: "Cart Service Dim Sum",
        description: "从推车上选点心",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "推车服务员",
            textEn: "Dim sum! What would you like? I have turnip cake, egg tarts, and chicken feet.",
            textZh: "点心！要什么？有萝卜糕、蛋挞和凤爪。",
            keyPhrases: [
              { en: "turnip cake", zh: "萝卜糕" },
              { en: "egg tarts", zh: "蛋挞" },
              { en: "chicken feet", zh: "凤爪" },
            ],
            alternativeExpressions: [
              {
                textEn: "Fresh dim sum here! I've got turnip cake, egg custard tarts, and chicken feet. Want any?",
                textZh: "新鲜点心！有萝卜糕、蛋挞和凤爪。要吗？",
                actionHint: "吆喝揽客",
                frequency: "common",
              },
              {
                textEn: "Dim sum cart! Today I have radish cake, egg tarts, and braised chicken feet.",
                textZh: "点心推车！今天有萝卜糕、蛋挞和卤凤爪。",
                actionHint: "英文描述菜名",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's the turnip cake like?", textZh: "萝卜糕什么样的？" },
          {
            speaker: "them",
            role: "推车服务员",
            textEn: "It's pan-fried radish cake with dried shrimp and Chinese sausage. Crispy outside, soft inside.",
            textZh: "是煎萝卜糕，加虾米和腊肠。外脆内软。",
            keyPhrases: [
              { en: "pan-fried", zh: "煎的" },
              { en: "crispy outside, soft inside", zh: "外脆内软" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's a fried turnip cake with bits of shrimp and sausage. Golden and crispy on the outside, nice and soft inside.",
                textZh: "是煎萝卜糕配虾粒和腊肠。外面金黄酥脆，里面软糯。",
                actionHint: "详细描述口感",
                frequency: "common",
              },
              {
                textEn:
                  "Pan-fried radish cake — has little pieces of dried shrimp and lap cheung sausage. Really good texture.",
                textZh: "煎萝卜糕——有虾米和腊肠碎。口感很好。",
                actionHint: "保留粤语lap cheung",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll try that. And two egg tarts, please.", textZh: "试试那个。再来两个蛋挞。" },
          {
            speaker: "them",
            role: "推车服务员",
            textEn: "Sure! Let me stamp your card.",
            textZh: "好的！让我在你的卡上盖个章。",
            keyPhrases: [{ en: "stamp your card", zh: "在卡上盖章" }],
            alternativeExpressions: [
              {
                textEn: "You got it! I'll mark it on your card.",
                textZh: "好！我在你卡上记一下。",
                actionHint: "mark记录",
                frequency: "common",
              },
              {
                textEn: "Coming right up! Just need to stamp your order card real quick.",
                textZh: "马上来！我在你点单卡上盖个章。",
                actionHint: "order card说明",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "How does the billing work here?",
            textZh: "这里怎么算账？",
            culturalNote: "传统港式茶楼用卡片记录，按份数和大小分类计价：小点、中点、大点、特点。",
          },
          {
            speaker: "them",
            role: "推车服务员",
            textEn:
              "Each dish is stamped on your card by size — small, medium, large, or special. You pay at the end based on the stamps.",
            textZh: "每道菜按大小在你卡上盖章——小中大特。最后按章付钱。",
            keyPhrases: [{ en: "pay at the end", zh: "最后付钱" }],
            alternativeExpressions: [
              {
                textEn:
                  "Every dish gets a stamp — small, medium, large, or special size. You settle the bill at the end.",
                textZh: "每道菜盖个章——小中大特号。最后结账。",
                actionHint: "settle the bill",
                frequency: "common",
              },
              {
                textEn:
                  "We stamp your card for each dish by portion size. At the end, the total is calculated from the stamps.",
                textZh: "每道按份量在卡上盖章。最后按章数算总价。",
                actionHint: "详细解释计算",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. Thank you! Oh, can we also get more hot water for the tea?",
            textZh: "明白了。谢谢！哦，能再加点热水泡茶吗？",
          },
          {
            speaker: "them",
            role: "推车服务员",
            textEn: "Sure! Just flip the teapot lid open and the waiter will come refill it.",
            textZh: "当然！把茶壶盖打开，服务员会来续水。",
            keyPhrases: [
              { en: "flip the lid open", zh: "把盖子打开" },
              { en: "refill", zh: "续水" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! Just leave the lid off the teapot and someone will top it up.",
                textZh: "当然！把壶盖掀开就会有人来加水。",
                actionHint: "top it up口语",
                frequency: "common",
              },
              {
                textEn: "Sure thing. The trick is to tilt the teapot lid — that's the signal for more hot water.",
                textZh: "没问题。诀窍是把壶盖倾斜——那是续水的暗号。",
                actionHint: "解释暗号",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 牛排馆 Steakhouse ====================
  {
    id: "restaurant-steakhouse-doneness",
    category: "restaurant",
    titleZh: "牛排馆选熟度",
    titleEn: "Steakhouse Doneness",
    description: "在牛排馆选择牛排种类和熟度",
    otherRole: "服务员",
    otherRoleIcon: "🥩",
    flows: [
      {
        id: "basic",
        titleZh: "基本牛排点餐",
        titleEn: "Basic Steak Order",
        description: "选择牛排和熟度",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good evening! Have you decided on your steak?",
            textZh: "晚上好！牛排选好了吗？",
            keyPhrases: [{ en: "decided on", zh: "选好了" }],
            alternativeExpressions: [
              {
                textEn: "Evening! Do you know which steak you'd like?",
                textZh: "晚上好！知道要哪种牛排了吗？",
                actionHint: "更直接",
                frequency: "common",
              },
              {
                textEn: "Good evening! Ready to pick your steak, or do you need a hand choosing?",
                textZh: "晚上好！准备好选牛排了吗，还是需要帮忙推荐？",
                actionHint: "主动帮选",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm not sure about the cuts. What's the difference between ribeye and filet mignon?",
            textZh: "我不太了解部位。肋眼和菲力有什么区别？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The ribeye is more marbled and flavorful. The filet mignon is leaner and more tender. Both are excellent.",
            textZh: "肋眼大理石花纹多更有味。菲力更瘦更嫩。都很好。",
            keyPhrases: [
              { en: "marbled", zh: "大理石花纹" },
              { en: "tender", zh: "嫩" },
              { en: "lean", zh: "瘦" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Ribeye has more fat marbling so it's juicier. Filet is leaner but incredibly tender. You can't go wrong either way.",
                textZh: "肋眼油花多所以更多汁。菲力瘦但极嫩。都不会错。",
                actionHint: "解释原因",
                frequency: "common",
              },
              {
                textEn:
                  "If you want bold flavor, go ribeye. If you prefer buttery-soft texture, filet mignon is the one.",
                textZh: "想要浓郁味道选肋眼。喜欢黄油般嫩滑口感选菲力。",
                actionHint: "按偏好推荐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the ribeye. What sizes do you have?",
            textZh: "我选肋眼。有什么规格？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have 10-ounce and 16-ounce. And how would you like it cooked?",
            textZh: "有10盎司和16盎司的。要几分熟？",
            keyPhrases: [{ en: "how would you like it cooked", zh: "要几分熟" }],
            alternativeExpressions: [
              {
                textEn: "It comes in a 10-ounce or 16-ounce cut. And what temperature for the steak?",
                textZh: "有10盎司和16盎司的。牛排要什么温度？",
                actionHint: "temperature说法",
                frequency: "common",
              },
              {
                textEn: "We offer a 10-oz and a 16-oz. How do you like your steak done?",
                textZh: "有10盎司和16盎司。牛排要几分熟？",
                actionHint: "how do you like it done",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "10-ounce, medium rare, please.",
            textZh: "10盎司，三分熟。",
            culturalNote:
              "牛排熟度：rare（一分熟）、medium rare（三分熟）、medium（五分熟）、medium well（七分熟）、well done（全熟）。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great choice. Medium rare is perfect for ribeye. It comes with your choice of one side.",
            textZh: "好选择。肋眼三分熟最好。配一份配菜。",
            keyPhrases: [{ en: "one side", zh: "一份配菜" }],
            alternativeExpressions: [
              {
                textEn:
                  "Excellent! Medium rare really brings out the best in a ribeye. You get one side with it — what would you like?",
                textZh: "太好了！三分熟最能体现肋眼的味道。配一份配菜——你要什么？",
                actionHint: "brings out the best",
                frequency: "common",
              },
              {
                textEn: "You'll love it. Ribeye at medium rare is chef's recommendation. Pick any side to go with it.",
                textZh: "你会爱上的。肋眼三分熟是厨师推荐。选个配菜搭配。",
                actionHint: "chef's recommendation",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What sides do you have?", textZh: "有什么配菜？" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "牛排不满意退回",
        titleEn: "Steak Sent Back",
        description: "牛排熟度不对要求重做",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I ordered my steak medium rare but this looks well done.",
            textZh: "不好意思，我点的三分熟但这个看起来全熟了。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Oh, I'm so sorry about that. Let me take a look... You're right, that's overcooked. Let me have the kitchen fire a new one.",
            textZh: "哦非常抱歉。让我看看……你说得对，做过了。我让厨房重做一份。",
            keyPhrases: [
              { en: "overcooked", zh: "做过了" },
              { en: "fire a new one", zh: "重做一份" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm so sorry. Let me see... Yes, that's definitely overdone. I'll get the kitchen to cook you a new one right away.",
                textZh: "非常抱歉。我看看……确实做过了。我马上让厨房重做。",
                actionHint: "overdone替代overcooked",
                frequency: "common",
              },
              {
                textEn:
                  "My apologies. You're absolutely right — that's way past medium rare. Let me send it back and have them start a fresh one.",
                textZh: "抱歉。你说得完全对——远超过三分熟了。我退回去让他们重做。",
                actionHint: "send it back表达",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thank you. How long will it take?", textZh: "谢谢。要多久？" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "About 12 minutes for a new ribeye. Can I get you anything while you wait? Perhaps a salad or bread?",
            textZh: "新肋眼大约12分钟。等的时候要来点什么？沙拉或面包？",
            keyPhrases: [{ en: "while you wait", zh: "等的时候" }],
            alternativeExpressions: [
              {
                textEn:
                  "It'll be about 12 minutes. Can I bring you something in the meantime? Maybe some bread or a starter?",
                textZh: "大约12分钟。期间给你上点什么？面包或开胃菜？",
                actionHint: "in the meantime",
                frequency: "common",
              },
              {
                textEn:
                  "Give us about 12 minutes for the new one. Would you like a complimentary salad while you wait?",
                textZh: "大约12分钟做新的。等的时候来份免费沙拉？",
                actionHint: "主动送补偿",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Some bread would be nice, thank you.", textZh: "来点面包吧，谢谢。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. And I'll let the manager know. We'll take care of you.",
            textZh: "当然。我会告知经理。我们会处理好的。",
            keyPhrases: [{ en: "take care of you", zh: "处理好" }],
            alternativeExpressions: [
              {
                textEn: "Absolutely. I'll speak to the manager as well. We want to make this right.",
                textZh: "当然。我也会跟经理说。我们一定补偿到位。",
                actionHint: "make this right",
                frequency: "common",
              },
              {
                textEn: "For sure. I'll flag this with the manager. Don't worry, we'll sort everything out.",
                textZh: "一定。我会告诉经理。别担心，我们会处理好的。",
                actionHint: "sort everything out",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I appreciate that.", textZh: "感谢。" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's your new steak. Perfect medium rare this time. And the manager would like to offer you a complimentary dessert for the trouble.",
            textZh: "新牛排来了。这次完美三分熟。经理想送您一份甜品表示歉意。",
            keyPhrases: [
              { en: "complimentary", zh: "免费赠送" },
              { en: "for the trouble", zh: "表示歉意" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here we go — perfect medium rare. And dessert is on us tonight to make up for the wait.",
                textZh: "来了——完美三分熟。今晚甜品我们请，补偿你的等待。",
                actionHint: "on us免费",
                frequency: "common",
              },
              {
                textEn:
                  "Your new ribeye, done just right. The manager also wanted me to offer you a free dessert as an apology.",
                textZh: "新肋眼，这次恰到好处。经理让我请你吃份甜品表示歉意。",
                actionHint: "done just right",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That's very kind. Thank you so much.", textZh: "太好了。非常感谢。" },
        ],
      },
    ],
  },
  {
    id: "restaurant-steakhouse-sides",
    category: "restaurant",
    titleZh: "牛排馆配菜",
    titleEn: "Steakhouse Sides",
    description: "选择牛排馆的配菜和酱汁",
    otherRole: "服务员",
    otherRoleIcon: "🥩",
    flows: [
      {
        id: "basic",
        titleZh: "选配菜",
        titleEn: "Choosing Sides",
        description: "选择配菜和酱汁",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Your steak comes with one side. We have mashed potatoes, baked potato, steamed broccoli, creamed spinach, or Caesar salad.",
            textZh: "牛排配一份配菜。有土豆泥、烤土豆、蒸西兰花、奶油菠菜或凯撒沙拉。",
            keyPhrases: [
              { en: "mashed potatoes", zh: "土豆泥" },
              { en: "baked potato", zh: "烤土豆" },
              { en: "creamed spinach", zh: "奶油菠菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You get a side with your steak. Options are mashed potatoes, baked potato, broccoli, creamed spinach, or Caesar salad.",
                textZh: "牛排配一份配菜。选项有土豆泥、烤土豆、西兰花、奶油菠菜或凯撒沙拉。",
                actionHint: "用options列举",
                frequency: "common",
              },
              {
                textEn:
                  "Each steak includes a complimentary side. We've got five choices — mashed, baked, broccoli, spinach, or salad.",
                textZh: "每份牛排含一份配菜。五种选择——土豆泥、烤土豆、西兰花、菠菜或沙拉。",
                actionHint: "简化名称",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll have the mashed potatoes.", textZh: "我要土豆泥。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "And would you like any sauce? We have peppercorn, mushroom, or béarnaise.",
            textZh: "要酱汁吗？有胡椒酱、蘑菇酱或荷兰酱。",
            keyPhrases: [
              { en: "peppercorn", zh: "胡椒酱" },
              { en: "béarnaise", zh: "荷兰酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "Any steak sauce? We offer peppercorn, mushroom, or béarnaise.",
                textZh: "要牛排酱吗？有胡椒、蘑菇和荷兰酱。",
                actionHint: "简洁问法",
                frequency: "common",
              },
              {
                textEn: "Would you care for a sauce on the side? Peppercorn is our most popular.",
                textZh: "要来份酱汁吗？胡椒酱最受欢迎。",
                actionHint: "推荐热门",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Peppercorn sauce, please. On the side.",
            textZh: "胡椒酱。放旁边。",
            culturalNote: "\'On the side\' 意思是酱汁单独放，不浇在食物上。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Would you like to add any extra sides? They're $8 each.",
            textZh: "要加额外配菜吗？每份8美元。",
            keyPhrases: [{ en: "extra sides", zh: "额外配菜" }],
            alternativeExpressions: [
              {
                textEn: "Want to add any additional sides? They run $8 a piece.",
                textZh: "要加额外配菜吗？每份8美元。",
                actionHint: "run表示价格",
                frequency: "common",
              },
              {
                textEn: "We have add-on sides for $8 each if you're interested.",
                textZh: "有额外配菜可以加，每份8美元，有兴趣吗？",
                actionHint: "add-on说法",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Can we share a creamed spinach for the table?", textZh: "来份奶油菠菜大家分吧？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. The sharing portion is a bit bigger, $12. Would you like that?",
            textZh: "当然。分享份大一点，12美元。要吗？",
            keyPhrases: [{ en: "sharing portion", zh: "分享份" }],
            alternativeExpressions: [
              {
                textEn: "Absolutely! The family-style portion is $12, which is a larger size. Sound good?",
                textZh: "当然！家庭份12美元，更大份。可以吗？",
                actionHint: "family-style说法",
                frequency: "common",
              },
              {
                textEn: "Sure! We have a bigger sharing size for $12. It's perfect for the table.",
                textZh: "当然！分享份12美元更大。够全桌吃。",
                actionHint: "perfect for the table",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes, perfect.", textZh: "好的。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "多人聚餐点配菜",
        titleEn: "Group Side Orders",
        description: "多人聚餐时配菜搭配",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're a group of four. Can you suggest how many sides to share?",
            textZh: "我们四个人。你建议点几份配菜分享？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I'd recommend two or three sharing sides for four people, plus everyone gets their individual side with their steak.",
            textZh: "建议四个人点两三份分享配菜，加上每人牛排自带的配菜。",
            keyPhrases: [
              { en: "sharing sides", zh: "分享配菜" },
              { en: "individual side", zh: "个人配菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For four people, two or three shared sides is perfect. Plus each steak comes with its own side, so you'll have plenty.",
                textZh: "四个人的话两三份分享的刚好。加上每份牛排自带配菜，够吃的。",
                actionHint: "强调够吃",
                frequency: "common",
              },
              {
                textEn:
                  "I'd say two to three family-style sides for the table. On top of that, each person picks a side with their steak.",
                textZh: "我建议桌上来两三份大份配菜。另外每人牛排还各选一份配菜。",
                actionHint: "分层说明",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's popular to share?", textZh: "分享的什么最受欢迎？" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The truffle mac and cheese is a customer favorite. The grilled asparagus is also great. And the loaded baked potato is very filling.",
            textZh: "松露芝士通心粉是客人最爱。烤芦笋也很好。焗烤土豆很管饱。",
            keyPhrases: [
              { en: "truffle mac and cheese", zh: "松露芝士通心粉" },
              { en: "customer favorite", zh: "客人最爱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everyone loves the truffle mac and cheese. The asparagus is light and fresh. And the loaded potato is huge — very hearty.",
                textZh: "大家都爱松露芝士通心粉。芦笋清爽。焗土豆超大份——很扎实。",
                actionHint: "形容每道特点",
                frequency: "common",
              },
              {
                textEn:
                  "Our most popular share is the truffle mac. Asparagus is a lighter option. The baked potato is great if you're really hungry.",
                textZh: "最热门的分享菜是松露通心粉。芦笋偏清淡。很饿的话焗土豆很好。",
                actionHint: "按需推荐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll get the truffle mac and cheese and the grilled asparagus to share.",
            textZh: "我们要松露芝士通心粉和烤芦笋分享。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Excellent choices. Would anyone like to start with an appetizer? Our shrimp cocktail is very popular.",
            textZh: "好选择。要先来开胃菜吗？我们的鸡尾酒虾很受欢迎。",
            keyPhrases: [
              { en: "appetizer", zh: "开胃菜" },
              { en: "shrimp cocktail", zh: "鸡尾酒虾" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great picks! How about a starter while your steaks cook? The shrimp cocktail is a crowd favorite.",
                textZh: "选得好！牛排做的时候来个开胃菜？鸡尾酒虾最受欢迎。",
                actionHint: "crowd favorite",
                frequency: "common",
              },
              {
                textEn: "Love it. Can I interest the table in an appetizer? I'd highly recommend the shrimp cocktail.",
                textZh: "太好了。要来份开胃菜吗？强烈推荐鸡尾酒虾。",
                actionHint: "interest the table",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "One shrimp cocktail to share, please.", textZh: "来一份鸡尾酒虾分享。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Perfect. I'll put the order in and bring your bread basket right away.",
            textZh: "好的。我马上下单，先给你们上面包篮。",
            keyPhrases: [{ en: "bread basket", zh: "面包篮" }],
            alternativeExpressions: [
              {
                textEn: "Wonderful. I'll get that started. Let me bring some bread for the table first.",
                textZh: "很好。我去下单。先给桌上来点面包。",
                actionHint: "get that started",
                frequency: "common",
              },
              {
                textEn: "Great, I'll send that to the kitchen. Your bread basket is on its way.",
                textZh: "好的，我发到厨房。面包篮马上来。",
                actionHint: "on its way",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Great, thank you!", textZh: "太好了，谢谢！" },
        ],
      },
    ],
  },
  // ==================== 披萨 Pizza ====================
  {
    id: "restaurant-pizza-delivery",
    category: "restaurant",
    titleZh: "披萨外卖",
    titleEn: "Pizza Delivery Order",
    description: "电话或到店点披萨外卖",
    otherRole: "披萨店员",
    otherRoleIcon: "🍕",
    flows: [
      {
        id: "basic",
        titleZh: "电话点外卖",
        titleEn: "Phone Delivery Order",
        description: "打电话点披萨外卖",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Tony's Pizza, how can I help you?",
            textZh: "Tony's Pizza，有什么可以帮您？",
            keyPhrases: [{ en: "how can I help you", zh: "有什么可以帮您" }],
            alternativeExpressions: [
              {
                textEn: "Tony's Pizza! What can I do for you?",
                textZh: "Tony's Pizza！有什么需要？",
                actionHint: "简短接电话",
                frequency: "common",
              },
              {
                textEn: "Thanks for calling Tony's Pizza. Are you looking to place an order?",
                textZh: "感谢致电Tony's Pizza。要下单吗？",
                actionHint: "直接问下单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to order a pizza for delivery.",
            textZh: "你好，我想点一个披萨外卖。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! What size — small, medium, or large? And what toppings?",
            textZh: "好的！什么尺寸——小、中还是大？什么配料？",
            keyPhrases: [
              { en: "what size", zh: "什么尺寸" },
              { en: "toppings", zh: "配料" },
            ],
            alternativeExpressions: [
              {
                textEn: "Great! What size pizza do you want, and what toppings?",
                textZh: "好的！要多大的披萨，什么配料？",
                actionHint: "直接问",
                frequency: "common",
              },
              {
                textEn: "You got it! Small, medium, or large? And what do you want on it?",
                textZh: "没问题！小中大？上面放什么？",
                actionHint: "口语化",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "A large pepperoni pizza, please.", textZh: "大份意大利辣肠披萨。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Would you like thin crust, regular, or deep dish?",
            textZh: "要薄底、普通还是厚底？",
            keyPhrases: [
              { en: "thin crust", zh: "薄底" },
              { en: "deep dish", zh: "厚底" },
            ],
            alternativeExpressions: [
              {
                textEn: "What kind of crust? Thin, hand-tossed, or deep dish?",
                textZh: "什么饼底？薄的、手抛的还是厚底？",
                actionHint: "hand-tossed说法",
                frequency: "common",
              },
              {
                textEn: "And for the crust — thin and crispy, regular, or thick deep dish?",
                textZh: "饼底——薄脆的、普通的还是厚底？",
                actionHint: "描述口感",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thin crust, please.", textZh: "薄底。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Anything else? Garlic bread, wings, or drinks?",
            textZh: "还要别的吗？蒜香面包、鸡翅或饮料？",
            keyPhrases: [
              { en: "garlic bread", zh: "蒜香面包" },
              { en: "wings", zh: "鸡翅" },
            ],
            alternativeExpressions: [
              {
                textEn: "Want to add anything? We have garlic knots, wings, and two-liter sodas.",
                textZh: "要加东西吗？有蒜香面包结、鸡翅和大瓶汽水。",
                actionHint: "garlic knots变体",
                frequency: "common",
              },
              {
                textEn: "Can I get you some sides or drinks with that? Wings and garlic bread are popular add-ons.",
                textZh: "要配些小吃或饮料吗？鸡翅和蒜香面包是热门加单。",
                actionHint: "add-ons推荐",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Just the pizza. What's the delivery time?", textZh: "就披萨。送多久？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "About 30 to 40 minutes. Can I get your address?",
            textZh: "大约30到40分钟。请问地址？",
            keyPhrases: [{ en: "delivery time", zh: "送餐时间" }],
            alternativeExpressions: [
              {
                textEn: "Delivery will be around 30 to 40 minutes. What's the address?",
                textZh: "送餐大约30到40分钟。地址是？",
                actionHint: "直接问地址",
                frequency: "common",
              },
              {
                textEn: "Should take about half an hour to 40 minutes. Where are we delivering to?",
                textZh: "大概半小时到40分钟。送到哪里？",
                actionHint: "half an hour口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "123 Oak Street, Apartment 4B.", textZh: "橡树街123号，公寓4B。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "多人聚会点披萨",
        titleEn: "Group Pizza Order",
        description: "给聚会点多个披萨",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I need to order several pizzas for a party of about 10 people.",
            textZh: "你好，我要给大约10人的聚会点几个披萨。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "For 10 people, I'd recommend three large pizzas. Want different flavors?",
            textZh: "10个人建议三个大的。要不同口味吗？",
            keyPhrases: [{ en: "I'd recommend", zh: "建议" }],
            alternativeExpressions: [
              {
                textEn: "For a group of 10, three large pies should do the trick. Mix of flavors?",
                textZh: "10个人的话三个大披萨就够了。要混搭口味吗？",
                actionHint: "pies口语",
                frequency: "common",
              },
              {
                textEn: "I'd say three larges for 10 people. Do you want them all the same or different?",
                textZh: "10个人我建议三个大的。全要一样还是不同口味？",
                actionHint: "确认口味",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes. One pepperoni, one margherita, and do you have any vegetarian options?",
            textZh: "好。一个辣肠，一个玛格丽特，有素食选项吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "We have a veggie supreme with mushrooms, peppers, onions, and olives. Or a white pizza with spinach and ricotta.",
            textZh: "有蔬菜至尊披萨配蘑菇青椒洋葱橄榄。或者菠菜瑞可塔芝士白披萨。",
            keyPhrases: [
              { en: "veggie supreme", zh: "蔬菜至尊" },
              { en: "white pizza", zh: "白披萨" },
            ],
            alternativeExpressions: [
              {
                textEn: "For veggie, we've got a loaded veggie supreme or a white pie with spinach and ricotta.",
                textZh: "素食的话有蔬菜至尊或者菠菜瑞可塔白披萨。",
                actionHint: "loaded形容配料多",
                frequency: "common",
              },
              {
                textEn:
                  "Two great veggie options: the supreme has mushrooms, peppers, onions, olives. Or try our white pizza — spinach and ricotta, no red sauce.",
                textZh: "两个不错的素食选择：至尊有蘑菇青椒洋葱橄榄。或者白披萨——菠菜瑞可塔，没有红酱。",
                actionHint: "解释白披萨",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The veggie supreme sounds good. Can we do half-and-half on one of them?",
            textZh: "蔬菜至尊不错。能做一半一半吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! Which pizza do you want to split?",
            textZh: "当然！哪个要拼？",
            keyPhrases: [
              { en: "half-and-half", zh: "一半一半" },
              { en: "split", zh: "拼" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure, we can do half-and-half! Which one are we splitting?",
                textZh: "当然可以做一半一半！哪个要拼？",
                actionHint: "确认拼法",
                frequency: "common",
              },
              {
                textEn: "No problem! Which pizza gets the split? And what flavors on each half?",
                textZh: "没问题！哪个要拼？两边分别什么口味？",
                actionHint: "直接问两半",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The third one — half veggie supreme, half Hawaiian.",
            textZh: "第三个——一半蔬菜至尊一半夏威夷。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Got it. Three large pizzas: pepperoni, margherita, and half veggie-half Hawaiian. Total is $52.97. Delivery or pickup?",
            textZh: "好的。三个大：辣肠、玛格丽特、半蔬菜半夏威夷。一共52.97美元。外送还是自取？",
            keyPhrases: [{ en: "delivery or pickup", zh: "外送还是自取" }],
            alternativeExpressions: [
              {
                textEn:
                  "So three larges — pepperoni, margherita, and a split veggie-Hawaiian. That'll be $52.97. Delivering or picking up?",
                textZh: "三个大的——辣肠、玛格丽特和拼的蔬菜夏威夷。52.97美元。送还是自取？",
                actionHint: "复述确认",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect, I've got all three. Your total comes to $52.97. Want that delivered or are you coming to get it?",
                textZh: "好的，三个都记下了。总共52.97美元。要送还是你来拿？",
                actionHint: "口语化问取送",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Delivery, please. And can we schedule it for 6 PM?",
            textZh: "外送。能预约下午六点送吗？",
            culturalNote: "很多披萨店支持预约时间送达（scheduled delivery）。",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-pizza-customize",
    category: "restaurant",
    titleZh: "定制披萨",
    titleEn: "Customize Your Pizza",
    description: "在披萨店定制自己的披萨配料",
    otherRole: "披萨店员",
    otherRoleIcon: "🍕",
    flows: [
      {
        id: "basic",
        titleZh: "选配料",
        titleEn: "Choose Toppings",
        description: "选择披萨配料",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Would you like to build your own pizza?",
            textZh: "要自己搭配披萨吗？",
            keyPhrases: [{ en: "build your own", zh: "自己搭配" }],
            alternativeExpressions: [
              {
                textEn: "Want to create your own custom pizza?",
                textZh: "想要自己定制一个披萨吗？",
                actionHint: "create your own",
                frequency: "common",
              },
              {
                textEn: "You can build a pizza from scratch if you'd like. Pick your own toppings!",
                textZh: "你可以从头自己搭配披萨。自选配料！",
                actionHint: "from scratch表达",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes! What toppings can I choose from?", textZh: "好！有什么配料可选？" },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Meats: pepperoni, sausage, ham, bacon, grilled chicken. Veggies: mushrooms, peppers, onions, olives, tomatoes, spinach. Extra cheese too.",
            textZh: "肉类：辣肠、意式香肠、火腿、培根、烤鸡。蔬菜：蘑菇、青椒、洋葱、橄榄、番茄、菠菜。也可以加芝士。",
            keyPhrases: [
              { en: "pepperoni", zh: "意式辣肠" },
              { en: "sausage", zh: "香肠" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For meats, we've got pepperoni, sausage, ham, bacon, and chicken. Veggies include mushrooms, peppers, onions, olives, tomatoes, and spinach. Plus extra cheese.",
                textZh: "肉类有辣肠、香肠、火腿、培根和鸡肉。蔬菜有蘑菇、青椒、洋葱、橄榄、番茄和菠菜。还有加芝士。",
                actionHint: "分段列举",
                frequency: "common",
              },
              {
                textEn:
                  "We've got a full range — five meats and six veggies to choose from, plus you can double up on cheese.",
                textZh: "选择很多——五种肉六种蔬菜，还可以双倍芝士。",
                actionHint: "概括性介绍",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take grilled chicken, mushrooms, and spinach.",
            textZh: "我要烤鸡、蘑菇和菠菜。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Great combo. What sauce — red, white, or pesto?",
            textZh: "好搭配。什么酱——红酱、白酱还是青酱？",
            keyPhrases: [{ en: "red, white, or pesto", zh: "红酱、白酱还是青酱" }],
            alternativeExpressions: [
              {
                textEn: "Nice picks! And for the base sauce? Marinara, garlic cream, or pesto?",
                textZh: "选得好！底酱呢？番茄酱、蒜味奶油还是青酱？",
                actionHint: "用具体名称",
                frequency: "common",
              },
              {
                textEn: "Good combination. Do you want the classic red sauce, a white garlic sauce, or basil pesto?",
                textZh: "好搭配。要经典红酱、蒜白酱还是罗勒青酱？",
                actionHint: "详细描述每种",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Pesto, please.", textZh: "青酱。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "And cheese — regular mozzarella or would you like to add feta or goat cheese?",
            textZh: "芝士——普通马苏里拉还是要加菲达或羊奶芝士？",
            keyPhrases: [
              { en: "mozzarella", zh: "马苏里拉" },
              { en: "feta", zh: "菲达芝士" },
            ],
            alternativeExpressions: [
              {
                textEn: "Just regular mozzarella, or do you want to upgrade to feta or goat cheese?",
                textZh: "就普通马苏里拉，还是要升级菲达或羊奶芝士？",
                actionHint: "upgrade说法",
                frequency: "common",
              },
              {
                textEn: "Standard mozz is included. We can also add feta or goat cheese for a premium topping.",
                textZh: "标配马苏里拉。也可以加菲达或羊奶芝士作为高级配料。",
                actionHint: "premium topping",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Add some feta on top. How much extra is that?", textZh: "加点菲达。要多少钱？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Feta is $1.50 extra. Your custom pizza comes to $16.99.",
            textZh: "菲达加1.50美元。你的定制披萨16.99美元。",
            keyPhrases: [{ en: "custom pizza", zh: "定制披萨" }],
            alternativeExpressions: [
              {
                textEn: "Adding feta is $1.50 more. So your total for the custom pie is $16.99.",
                textZh: "加菲达多1.50美元。你的定制披萨总共16.99美元。",
                actionHint: "custom pie口语",
                frequency: "common",
              },
              {
                textEn: "Feta is a buck fifty extra. That brings your pizza to $16.99.",
                textZh: "菲达加一块五。你的披萨16.99美元。",
                actionHint: "a buck fifty口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sounds good. For here, please.", textZh: "好的。在这里吃。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊饮食定制",
        titleEn: "Dietary Custom Pizza",
        description: "针对饮食限制定制披萨",
        difficulty: "intermediate",
        turns: [
          { speaker: "you", textEn: "Do you have gluten-free crust options?", textZh: "有无麸质饼底吗？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes, we have a gluten-free cauliflower crust. It comes in small and medium sizes only.",
            textZh: "有的，有无麸质花椰菜饼底。只有小和中两种尺寸。",
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "cauliflower crust", zh: "花椰菜饼底" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We do! We offer a cauliflower crust that's gluten-free. It only comes in small or medium though.",
                textZh: "有的！有花椰菜无麸质饼底。不过只有小和中号。",
                actionHint: "说明限制",
                frequency: "common",
              },
              {
                textEn: "Yep! Our GF option is a cauliflower-based crust. Available in small and medium.",
                textZh: "有！我们的无麸质选项是花椰菜饼底。有小和中号。",
                actionHint: "GF缩写",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium gluten-free crust. And do you have dairy-free cheese?",
            textZh: "中份无麸质饼底。有无乳制品芝士吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "We do! We have a vegan mozzarella. It melts pretty well.",
            textZh: "有的！有纯素马苏里拉。融化效果还不错。",
            keyPhrases: [
              { en: "dairy-free", zh: "无乳制品" },
              { en: "vegan mozzarella", zh: "纯素马苏里拉" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes! We carry a plant-based mozzarella. It's actually really good — melts nicely.",
                textZh: "有！我们有植物基马苏里拉。其实真的不错——融化得很好。",
                actionHint: "plant-based说法",
                frequency: "common",
              },
              {
                textEn: "We sure do. Our vegan cheese is a soy-based mozz that melts great.",
                textZh: "有的。我们的纯素芝士是大豆基马苏里拉，融化效果很好。",
                actionHint: "说明原料",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, I'll use that. With mushrooms, roasted garlic, and artichokes.",
            textZh: "好，用那个。配蘑菇、烤蒜和洋蓟。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Nice! Red sauce or olive oil base?",
            textZh: "不错！红酱底还是橄榄油底？",
            keyPhrases: [{ en: "olive oil base", zh: "橄榄油底" }],
            alternativeExpressions: [
              {
                textEn: "Great choices! For the sauce — marinara or olive oil drizzle?",
                textZh: "好选择！酱要番茄酱还是橄榄油？",
                actionHint: "marinara和drizzle",
                frequency: "common",
              },
              {
                textEn: "Love that combo. Traditional red sauce or an olive oil base?",
                textZh: "这搭配不错。传统红酱还是橄榄油底？",
                actionHint: "traditional说法",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Olive oil base.", textZh: "橄榄油底。" },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Just a heads-up: our kitchen isn't fully gluten-free, so there may be trace amounts. Is that okay for you?",
            textZh: "提醒一下：我们厨房不是完全无麸质的，可能有微量。你可以吗？",
            keyPhrases: [
              { en: "trace amounts", zh: "微量" },
              { en: "heads-up", zh: "提醒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I should mention — we're not a dedicated GF kitchen, so there's a chance of cross-contamination. Is that a concern?",
                textZh: "要说一下——我们不是专用无麸质厨房，可能有交叉污染。你介意吗？",
                actionHint: "cross-contamination术语",
                frequency: "common",
              },
              {
                textEn:
                  "Fair warning: our kitchen handles gluten products too, so traces are possible. Would that be an issue for you?",
                textZh: "提前说一下：我们厨房也处理含麸质食品，可能有微量。你有问题吗？",
                actionHint: "fair warning表达",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine for me. I'm just avoiding gluten, not celiac.",
            textZh: "没关系。我只是避免麸质，不是乳糜泻。",
          },
        ],
      },
    ],
  },
  // ==================== 投诉和问题 Complaints ====================
  {
    id: "restaurant-food-complaint",
    category: "restaurant",
    titleZh: "餐厅投诉",
    titleEn: "Restaurant Complaint",
    description: "对食物质量或服务不满时如何礼貌投诉",
    otherRole: "服务员/经理",
    otherRoleIcon: "😟",
    flows: [
      {
        id: "basic",
        titleZh: "食物问题投诉",
        titleEn: "Food Quality Complaint",
        description: "食物有质量问题时沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think there's a problem with my dish.",
            textZh: "不好意思，我觉得我的菜有点问题。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh, I'm sorry to hear that. What seems to be the issue?",
            textZh: "哦很抱歉。什么问题？",
            keyPhrases: [{ en: "what seems to be the issue", zh: "什么问题" }],
            alternativeExpressions: [
              {
                textEn: "I'm sorry! What's the problem? Let me see if I can fix it.",
                textZh: "抱歉！怎么了？看看我能不能处理。",
                actionHint: "主动解决",
                frequency: "common",
              },
              {
                textEn: "Oh no, what's wrong? Tell me what happened.",
                textZh: "哦不，怎么了？告诉我什么情况。",
                actionHint: "关心语气",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "This soup is cold. It was supposed to be served hot.",
            textZh: "这个汤是凉的。应该是热的才对。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I'm so sorry about that. Let me take it back and have the kitchen heat it up right away.",
            textZh: "非常抱歉。我拿回去让厨房马上加热。",
            keyPhrases: [
              { en: "take it back", zh: "拿回去" },
              { en: "heat it up", zh: "加热" },
            ],
            alternativeExpressions: [
              {
                textEn: "That shouldn't happen. Let me grab that and get it warmed up for you immediately.",
                textZh: "不应该这样的。我拿过去马上给你热好。",
                actionHint: "warmed up",
                frequency: "common",
              },
              {
                textEn: "I apologize. Let me bring it back to the kitchen — they'll reheat it right away.",
                textZh: "抱歉。我拿回厨房——他们马上重新加热。",
                actionHint: "reheat表达",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Actually, could you just bring me a new bowl? This one has been sitting out.",
            textZh: "实际上，能直接给我上一碗新的吗？这碗放太久了。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely, I'll have the kitchen make a fresh one. I apologize for the wait.",
            textZh: "当然，我让厨房重做一碗。抱歉让您等了。",
            keyPhrases: [{ en: "make a fresh one", zh: "重做一碗" }],
            alternativeExpressions: [
              {
                textEn: "Of course. I'll have them start a brand new one for you. Sorry about the inconvenience.",
                textZh: "当然。我让他们给你重新做一碗。抱歉给你添麻烦了。",
                actionHint: "brand new强调",
                frequency: "common",
              },
              {
                textEn: "Absolutely. A fresh batch is coming right up. Again, I'm very sorry.",
                textZh: "当然。新的马上来。再次非常抱歉。",
                actionHint: "fresh batch",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thank you for understanding.", textZh: "谢谢理解。" },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's your new soup. Again, I'm very sorry. I've spoken with the manager and we'd like to take this off your bill.",
            textZh: "新汤来了。再次抱歉。我跟经理说了，这道从账单上去掉。",
            keyPhrases: [{ en: "take this off your bill", zh: "从账单上去掉" }],
            alternativeExpressions: [
              {
                textEn: "Here you go — fresh soup. The manager said this one's on the house. Sorry again.",
                textZh: "给你——新汤。经理说这道免单。再次抱歉。",
                actionHint: "on the house免费",
                frequency: "common",
              },
              {
                textEn: "Your new soup is here. We've removed it from your check. Please accept our apologies.",
                textZh: "新汤来了。已经从你的账单上去掉了。请接受我们的歉意。",
                actionHint: "正式道歉",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "服务态度投诉",
        titleEn: "Service Complaint",
        description: "对服务不满时要求见经理",
        difficulty: "intermediate",
        turns: [
          { speaker: "you", textEn: "Could I speak with a manager, please?", textZh: "能让我跟经理谈谈吗？" },
          {
            speaker: "them",
            role: "经理",
            textEn: "Hi, I'm the manager. How can I help you?",
            textZh: "您好，我是经理。有什么我能帮您的？",
            keyPhrases: [{ en: "I'm the manager", zh: "我是经理" }],
            alternativeExpressions: [
              {
                textEn: "Hello, I'm the manager on duty tonight. What can I do for you?",
                textZh: "你好，我是今晚值班经理。有什么需要？",
                actionHint: "on duty说法",
                frequency: "common",
              },
              {
                textEn: "Good evening, I'm the general manager. I understand there's a concern?",
                textZh: "晚上好，我是总经理。听说有什么问题？",
                actionHint: "正式回应",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We've been waiting over 45 minutes for our food and nobody has checked on us.",
            textZh: "我们等了超过45分钟了，没人来问过我们。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "I sincerely apologize for the long wait and the lack of attention. That's not the experience we want for our guests. Let me check on your order right now.",
            textZh: "对于长时间等待和服务疏忽我真诚道歉。这不是我们希望客人有的体验。我马上查你们的单。",
            keyPhrases: [
              { en: "sincerely apologize", zh: "真诚道歉" },
              { en: "check on your order", zh: "查你们的单" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm truly sorry about this. That's absolutely unacceptable and I apologize. Let me look into your order immediately.",
                textZh: "真的很抱歉。这完全不应该，我道歉。我马上查你们的单。",
                actionHint: "unacceptable承认",
                frequency: "common",
              },
              {
                textEn:
                  "Please accept my deepest apologies. No guest should have to wait that long without being attended to. I'll get to the bottom of this right now.",
                textZh: "请接受我最深的歉意。不应该让客人等这么久没人管。我现在就查清楚。",
                actionHint: "get to the bottom of",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We also asked for water twice and it was never brought.",
            textZh: "我们还要了两次水也没送来。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "I'm so sorry. Let me get water for you immediately. Your food should be out in just a few minutes — there was a kitchen backup tonight.",
            textZh: "非常抱歉。我马上给您拿水。您的菜再几分钟就好——今晚厨房积压了。",
            keyPhrases: [{ en: "kitchen backup", zh: "厨房积压" }],
            alternativeExpressions: [
              {
                textEn:
                  "That's inexcusable. Water is coming right now. Your food is almost ready — the kitchen got slammed tonight.",
                textZh: "这不可原谅。水马上来。菜快好了——今晚厨房太忙了。",
                actionHint: "got slammed口语",
                frequency: "common",
              },
              {
                textEn:
                  "I'm getting your water this second. As for the food, we had an unusually busy night in the kitchen. It's coming out very soon.",
                textZh: "我这就给您拿水。至于菜，今晚厨房异常忙。马上就出来。",
                actionHint: "解释原因",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I understand it's busy, but this has been a frustrating experience.",
            textZh: "我理解很忙，但这次体验确实让人失望。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "You're absolutely right, and I take full responsibility. I'd like to offer you 30% off your entire bill tonight. Is there anything else I can do?",
            textZh: "您说得完全对，我负全部责任。今晚账单打七折。还有什么我能做的？",
            keyPhrases: [
              { en: "take full responsibility", zh: "负全部责任" },
              { en: "30% off", zh: "打七折" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You're right, and this is on us. To make it up to you, I'd like to take 30% off your bill tonight. Please let me know if there's anything else.",
                textZh: "你说得对，这是我们的责任。为了补偿你，今晚账单打七折。还有什么需要的请说。",
                actionHint: "make it up to you",
                frequency: "common",
              },
              {
                textEn:
                  "I completely agree. This falls on us. Please accept a 30% discount on your meal tonight. What else can I do to improve your experience?",
                textZh: "我完全同意。这是我们的失误。请接受今晚七折优惠。还能怎么改善你的体验？",
                actionHint: "正式补偿",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be appreciated. Thank you for handling this.",
            textZh: "那很感谢。谢谢你处理这件事。",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-wrong-order",
    category: "restaurant",
    titleZh: "上错菜",
    titleEn: "Wrong Order",
    description: "收到的菜品与点的不一致",
    otherRole: "服务员",
    otherRoleIcon: "❌",
    flows: [
      {
        id: "basic",
        titleZh: "菜品上错",
        titleEn: "Wrong Dish Received",
        description: "收到不是自己点的菜",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I don't think this is what I ordered.",
            textZh: "不好意思，我觉得这不是我点的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh? What did you order?",
            textZh: "哦？你点的什么？",
            keyPhrases: [{ en: "what did you order", zh: "你点的什么" }],
            alternativeExpressions: [
              {
                textEn: "Really? Let me check. What was your order?",
                textZh: "是吗？我查一下。你点的什么？",
                actionHint: "主动查",
                frequency: "common",
              },
              {
                textEn: "Oh, I'm sorry. Can you remind me what you ordered?",
                textZh: "哦抱歉。能告诉我你点的什么吗？",
                actionHint: "remind me说法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I ordered the grilled salmon, but this looks like chicken.",
            textZh: "我点的烤三文鱼，但这看起来是鸡肉。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Let me check... You're right, I'm sorry. This was meant for another table. Let me fix that right away.",
            textZh: "我查一下……你说得对，抱歉。这是另一桌的。我马上处理。",
            keyPhrases: [
              { en: "meant for another table", zh: "另一桌的" },
              { en: "fix that", zh: "处理" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Oh, my mistake! This is the wrong dish. I must have mixed up the tables. I'll get your correct order right away.",
                textZh: "哦是我的错！这道菜上错了。一定是搞混了桌号。我马上上你正确的。",
                actionHint: "承认错误",
                frequency: "common",
              },
              {
                textEn:
                  "I'm so sorry about that — looks like the orders got swapped. Let me sort this out immediately.",
                textZh: "非常抱歉——看起来订单搞反了。我马上处理。",
                actionHint: "got swapped口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "How long will it take to get my correct order?", textZh: "正确的菜要多久？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Your salmon should be ready in about 8 minutes. Can I get you anything while you wait?",
            textZh: "你的三文鱼大约8分钟好。等的时候要来点什么？",
            keyPhrases: [{ en: "should be ready in", zh: "大约...好" }],
            alternativeExpressions: [
              {
                textEn: "The salmon will be about 8 minutes. Can I bring you something in the meantime?",
                textZh: "三文鱼大约8分钟。期间要来点什么？",
                actionHint: "in the meantime",
                frequency: "common",
              },
              {
                textEn: "It'll take roughly 8 minutes for your salmon. Want me to grab you anything while you wait?",
                textZh: "三文鱼大概8分钟。等的时候需要什么吗？",
                actionHint: "grab you口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "No, I'm fine. Just the right dish, please.", textZh: "不用，没事。上对的就行。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's your grilled salmon. Sorry again for the mix-up. Enjoy!",
            textZh: "你的烤三文鱼来了。再次抱歉搞混了。请享用！",
            keyPhrases: [{ en: "enjoy", zh: "请享用" }],
            alternativeExpressions: [
              {
                textEn: "Here we go — your grilled salmon. Again, my apologies for the confusion. Bon appétit!",
                textZh: "来了——你的烤三文鱼。再次为搞混道歉。请慢用！",
                actionHint: "bon appétit法语",
                frequency: "common",
              },
              {
                textEn: "Your salmon is here. Sorry about the wait and the mix-up. Please enjoy your meal!",
                textZh: "三文鱼到了。抱歉等了也搞混了。请享用！",
                actionHint: "双重道歉",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "配料错误",
        titleEn: "Wrong Modifications",
        description: "点了定制要求但没被执行",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Sorry, I asked for no tomatoes on this burger but there are tomatoes on it.",
            textZh: "抱歉，我说了汉堡不要番茄但上面有番茄。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "I apologize! Would you like me to bring a new one, or would you prefer to just remove them?",
            textZh: "抱歉！要我拿一个新的，还是你自己拿掉就行？",
            keyPhrases: [
              { en: "bring a new one", zh: "拿一个新的" },
              { en: "remove them", zh: "拿掉" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'm sorry about that! Want me to have a new one made, or is it okay if you just pick them off?",
                textZh: "抱歉！要我重做一个，还是你自己把它挑掉就行？",
                actionHint: "pick them off口语",
                frequency: "common",
              },
              {
                textEn:
                  "My apologies! I can replace the whole thing or just take care of the extras. What do you prefer?",
                textZh: "抱歉！我可以整个换新的或者把多余的去掉。你想怎样？",
                actionHint: "给出两个方案",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Normally I'd just remove them, but I also asked for no mayo and I can see it on the bun.",
            textZh: "一般我会自己拿掉，但我还说了不要蛋黄酱，面包上有蛋黄酱。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I see. Let me have a completely new one made for you. No tomatoes, no mayo. Anything else that was different?",
            textZh: "好的。让我重做一个全新的。不要番茄不要蛋黄酱。还有别的不对吗？",
            keyPhrases: [{ en: "completely new one", zh: "全新的" }],
            alternativeExpressions: [
              {
                textEn: "Got it. I'll have them start a fresh one — no tomatoes, no mayo. Was everything else correct?",
                textZh: "明白。我让他们重做——不要番茄不要蛋黄酱。其他都对吗？",
                actionHint: "start a fresh one",
                frequency: "common",
              },
              {
                textEn: "Okay, I'll redo the whole thing. No tomatoes and hold the mayo. Anything else we missed?",
                textZh: "好的，整个重做。去番茄去蛋黄酱。还有什么漏的吗？",
                actionHint: "hold the表达",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I also ordered sweet potato fries instead of regular fries.",
            textZh: "我还点了红薯薯条不是普通薯条。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Got it. I'll fix all of that. I'm really sorry — the kitchen got confused. It'll be about five minutes.",
            textZh: "好的。全部改正。真的很抱歉——厨房搞混了。大约五分钟。",
            keyPhrases: [{ en: "the kitchen got confused", zh: "厨房搞混了" }],
            alternativeExpressions: [
              {
                textEn:
                  "I'll take care of everything. So sorry — there was a mix-up in the kitchen. Should be about five minutes.",
                textZh: "我来处理。很抱歉——厨房搞错了。大约五分钟。",
                actionHint: "take care of口语",
                frequency: "common",
              },
              {
                textEn: "On it. I apologize for all the mistakes. The kitchen dropped the ball. Five minutes tops.",
                textZh: "马上处理。为所有错误道歉。厨房失误了。最多五分钟。",
                actionHint: "dropped the ball口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I appreciate you fixing everything.",
            textZh: "谢谢。感谢你帮忙改正。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. Here's everything corrected. And we'd like to comp your fries for the trouble.",
            textZh: "当然。全部改正了。薯条免单表示歉意。",
            keyPhrases: [{ en: "comp", zh: "免单" }],
            alternativeExpressions: [
              {
                textEn: "Here you go — all fixed. The fries are on us for the hassle.",
                textZh: "给你——全改好了。薯条算我们的，补偿你的麻烦。",
                actionHint: "on us免费",
                frequency: "common",
              },
              {
                textEn: "Everything's corrected now. We've comped the fries as a small apology.",
                textZh: "现在全对了。薯条免单作为小小的歉意。",
                actionHint: "small apology",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-food-return",
    category: "restaurant",
    titleZh: "退菜",
    titleEn: "Returning a Dish",
    description: "菜品不新鲜或有异物需要退换",
    otherRole: "服务员/经理",
    otherRoleIcon: "🔄",
    flows: [
      {
        id: "basic",
        titleZh: "菜品不新鲜",
        titleEn: "Food Not Fresh",
        description: "食物不新鲜要求退换",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I think this fish isn't fresh. It smells a bit off.",
            textZh: "不好意思，我觉得这鱼不新鲜。味道有点不对。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Oh, I'm sorry about that. Let me take it back and have the chef check it.",
            textZh: "哦抱歉。我拿回去让厨师看看。",
            keyPhrases: [
              { en: "smells off", zh: "味道不对" },
              { en: "take it back", zh: "拿回去" },
            ],
            alternativeExpressions: [
              {
                textEn: "I'm sorry to hear that. Let me bring it back to the kitchen and have them take a look.",
                textZh: "听到这个很抱歉。我拿回厨房让他们看看。",
                actionHint: "have them take a look",
                frequency: "common",
              },
              {
                textEn: "That's concerning. Let me send this back and have the chef inspect it right away.",
                textZh: "这令人担心。我退回去让厨师马上检查。",
                actionHint: "inspect正式用语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'd rather not have the fish again. Can I order something different?",
            textZh: "我不想再要鱼了。能换一道菜吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course. Would you like to look at the menu again? I'll make sure the fish is taken off your bill.",
            textZh: "当然。要再看看菜单吗？鱼会从你账单上去掉。",
            keyPhrases: [{ en: "taken off your bill", zh: "从账单上去掉" }],
            alternativeExpressions: [
              {
                textEn: "Absolutely. Want to pick something else from the menu? The fish won't be on your check.",
                textZh: "当然。要从菜单上选别的吗？鱼不会算在你账单上。",
                actionHint: "won't be on your check",
                frequency: "common",
              },
              {
                textEn:
                  "No problem at all. Take another look at the menu. I'll remove the fish from the bill right now.",
                textZh: "完全没问题。再看看菜单。我现在就把鱼从账单去掉。",
                actionHint: "remove from bill",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll have the chicken pasta instead.", textZh: "我换鸡肉意面。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great. I'll put that in right away. Again, I sincerely apologize.",
            textZh: "好的。我马上下单。再次真诚道歉。",
            keyPhrases: [{ en: "put that in", zh: "下单" }],
            alternativeExpressions: [
              {
                textEn: "I'll send that to the kitchen right now. So sorry again for the trouble.",
                textZh: "我现在就发到厨房。再次为麻烦道歉。",
                actionHint: "send to the kitchen",
                frequency: "common",
              },
              {
                textEn: "On it. The new order is going in now. My deepest apologies.",
                textZh: "马上办。新单现在就下。深表歉意。",
                actionHint: "going in now",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thank you for being understanding.", textZh: "谢谢你理解。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Your chicken pasta. The manager has also given you a complimentary dessert. Please enjoy.",
            textZh: "你的鸡肉意面。经理还送你一份甜品。请享用。",
            keyPhrases: [{ en: "complimentary dessert", zh: "免费甜品" }],
            alternativeExpressions: [
              {
                textEn: "Here's your chicken pasta. And dessert's on the house tonight — the manager insisted. Enjoy!",
                textZh: "鸡肉意面来了。今晚甜品免费——经理坚持的。请享用！",
                actionHint: "insisted语气",
                frequency: "common",
              },
              {
                textEn:
                  "Your new dish is here. The manager also wanted to treat you to a dessert. Please enjoy your meal.",
                textZh: "新菜来了。经理还想请你吃份甜品。请慢用。",
                actionHint: "treat you to",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "发现异物",
        titleEn: "Foreign Object in Food",
        description: "在食物中发现异物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I found a hair in my salad. Can I speak with a manager?",
            textZh: "我在沙拉里发现了一根头发。能找经理吗？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "I'm the manager. I'm terribly sorry about that. May I see it?",
            textZh: "我是经理。非常抱歉。能让我看看吗？",
            keyPhrases: [{ en: "terribly sorry", zh: "非常抱歉" }],
            alternativeExpressions: [
              {
                textEn: "I'm the manager here. I'm so sorry this happened. Could I take a look?",
                textZh: "我是这里的经理。发生这样的事很抱歉。我能看看吗？",
                actionHint: "this happened委婉",
                frequency: "common",
              },
              {
                textEn: "Hello, I'm the manager. I sincerely apologize. May I see what you found?",
                textZh: "你好，我是经理。真诚道歉。能让我看看你发现的吗？",
                actionHint: "what you found",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Here. This is really unacceptable.", textZh: "在这里。这真的不能接受。" },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "You're absolutely right, and I deeply apologize. I'll have a new salad made immediately, and your entire meal will be on the house tonight.",
            textZh: "您说得完全对，我深表歉意。马上重做一份沙拉，今晚整顿饭免单。",
            keyPhrases: [
              { en: "on the house", zh: "免单/免费" },
              { en: "deeply apologize", zh: "深表歉意" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That's completely unacceptable and I'm deeply sorry. A fresh salad is being made right now, and tonight's dinner is on us.",
                textZh: "这完全不能接受，我深感抱歉。新沙拉正在做，今晚我们请客。",
                actionHint: "dinner is on us",
                frequency: "common",
              },
              {
                textEn:
                  "I cannot apologize enough. I'll have the kitchen prepare a new salad immediately. Your entire meal tonight will be complimentary.",
                textZh: "怎么道歉都不够。我让厨房马上做新沙拉。今晚整顿饭免费。",
                actionHint: "complimentary正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. I've lost my appetite for the salad though. Can I just get the main course?",
            textZh: "谢谢。不过我没胃口吃沙拉了。直接上主菜行吗？",
            culturalNote: "\'On the house\' 是固定用语，表示餐厅请客/免单。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "Of course. I'll have your main course prioritized. And please accept a gift card for your next visit as well.",
            textZh: "当然。我让你的主菜优先做。也请收下一张礼品卡下次来用。",
            keyPhrases: [
              { en: "prioritized", zh: "优先" },
              { en: "gift card", zh: "礼品卡" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely. Your main course will be the next thing out of the kitchen. And here's a gift card for your next visit.",
                textZh: "当然。你的主菜是厨房下一个出的。这是一张礼品卡下次来用。",
                actionHint: "next thing out of",
                frequency: "common",
              },
              {
                textEn:
                  "I'll make sure your entrée comes out first. We'd also like to give you a gift card — we hope you'll give us another chance.",
                textZh: "我确保你的主菜最先出来。也想送你一张礼品卡——希望你再给我们一次机会。",
                actionHint: "give us another chance",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate that. Thank you for taking this seriously.",
            textZh: "感谢。谢谢你重视这件事。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "We take food safety very seriously. I'll be speaking with the kitchen staff. Thank you for bringing this to our attention.",
            textZh: "我们非常重视食品安全。我会跟厨房人员谈。感谢你告知我们。",
            keyPhrases: [{ en: "bringing this to our attention", zh: "告知我们" }],
            alternativeExpressions: [
              {
                textEn:
                  "Food safety is our top priority. I'll address this with the kitchen team right away. Thank you for letting us know.",
                textZh: "食品安全是我们的首要任务。我马上和厨房团队沟通。感谢你告诉我们。",
                actionHint: "top priority",
                frequency: "common",
              },
              {
                textEn:
                  "This is something we take extremely seriously. I'll be having a talk with the kitchen. We appreciate you telling us.",
                textZh: "我们对此非常重视。我会跟厨房谈。感谢你告诉我们。",
                actionHint: "having a talk with",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 外卖 Takeout ====================
  {
    id: "restaurant-takeout-order",
    category: "restaurant",
    titleZh: "外卖点餐",
    titleEn: "Takeout Order",
    description: "打电话或到店点外卖",
    otherRole: "餐厅员工",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "basic",
        titleZh: "电话点外卖",
        titleEn: "Phone Takeout",
        description: "电话点外卖",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "员工",
            textEn: "Golden Dragon, how may I help you?",
            textZh: "金龙餐厅，有什么可以帮您？",
            keyPhrases: [{ en: "how may I help you", zh: "有什么可以帮您" }],
            alternativeExpressions: [
              {
                textEn: "Golden Dragon Restaurant. What can I do for you?",
                textZh: "金龙餐厅。有什么需要？",
                actionHint: "简短版",
                frequency: "common",
              },
              {
                textEn: "Thank you for calling Golden Dragon. Are you calling to place an order?",
                textZh: "感谢致电金龙。您是要点餐吗？",
                actionHint: "直奔主题",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Hi, I'd like to place a takeout order.", textZh: "你好，我想点外卖。" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Sure! Go ahead.",
            textZh: "好的！请说。",
            keyPhrases: [{ en: "go ahead", zh: "请说" }],
            alternativeExpressions: [
              {
                textEn: "Of course! What would you like?",
                textZh: "当然！你要什么？",
                actionHint: "直接问",
                frequency: "common",
              },
              {
                textEn: "No problem. What can I get for you?",
                textZh: "没问题。要什么？",
                actionHint: "标准问法",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Can I get kung pao chicken and fried rice?", textZh: "来一份宫保鸡丁和炒饭。" },
          {
            speaker: "them",
            role: "员工",
            textEn: "What size fried rice — small or large?",
            textZh: "炒饭要小份还是大份？",
            keyPhrases: [{ en: "what size", zh: "什么份量" }],
            alternativeExpressions: [
              {
                textEn: "The fried rice comes in small or large. Which one?",
                textZh: "炒饭有小份和大份。要哪个？",
                actionHint: "列出选项",
                frequency: "common",
              },
              {
                textEn: "Small or large on the fried rice?",
                textZh: "炒饭小份还是大份？",
                actionHint: "极简问法",
                frequency: "common",
              },
            ],
          },
          { speaker: "you", textEn: "Large, please. How long until it's ready?", textZh: "大份。多久能好？" },
          {
            speaker: "them",
            role: "员工",
            textEn: "About 20 minutes. Can I get your name and phone number?",
            textZh: "大约20分钟。请问姓名和电话？",
            keyPhrases: [{ en: "how long until it's ready", zh: "多久能好" }],
            alternativeExpressions: [
              {
                textEn: "It'll be ready in about 20 minutes. What's the name and number for the order?",
                textZh: "大约20分钟好。订单写什么名字和电话？",
                actionHint: "for the order",
                frequency: "common",
              },
              {
                textEn: "Give us around 20 minutes. Name and a callback number, please?",
                textZh: "大约20分钟。请留姓名和回拨电话？",
                actionHint: "callback number",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Wang, 415-555-0123.", textZh: "王，415-555-0123。" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Your total is $18.50. Will you be paying when you pick up?",
            textZh: "一共18.50美元。取餐时付款吗？",
            keyPhrases: [{ en: "when you pick up", zh: "取餐时" }],
            alternativeExpressions: [
              {
                textEn: "That's $18.50. Are you paying at pickup or over the phone?",
                textZh: "18.50美元。到店付还是电话付？",
                actionHint: "两种付款方式",
                frequency: "common",
              },
              {
                textEn: "Your order comes to $18.50. Do you want to pay now or when you come get it?",
                textZh: "你的单18.50美元。现在付还是来拿的时候付？",
                actionHint: "come get it口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes, I'll pay by card when I get there.", textZh: "是的，到了刷卡。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "到店点外卖",
        titleEn: "In-Store Takeout",
        description: "到店点餐打包带走",
        difficulty: "intermediate",
        turns: [
          { speaker: "you", textEn: "Hi, can I order something to go?", textZh: "你好，我能点些外带吗？" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Of course! Here's a menu. Take your time.",
            textZh: "当然！这是菜单。慢慢看。",
            keyPhrases: [{ en: "to go", zh: "外带" }],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Here you go. Let me know when you're ready.",
                textZh: "当然！给你。准备好了告诉我。",
                actionHint: "let me know",
                frequency: "common",
              },
              {
                textEn: "Absolutely! Take a look at the menu. No rush at all.",
                textZh: "当然！看看菜单。不着急。",
                actionHint: "no rush",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Is the pad thai very spicy? My kids will be eating it too.",
            textZh: "泰式炒河粉很辣吗？我的孩子也要吃。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "It has a mild kick. We can make it with no spice if you'd like.",
            textZh: "有一点微辣。你想的话可以做不辣的。",
            keyPhrases: [
              { en: "mild kick", zh: "微辣" },
              { en: "no spice", zh: "不辣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "There's a little bit of heat, but nothing too strong. We can tone it down or make it completely mild.",
                textZh: "有一点辣但不重。可以减轻或做完全不辣的。",
                actionHint: "tone it down",
                frequency: "common",
              },
              {
                textEn: "It's got a slight spice to it. Want us to make it kid-friendly with no heat?",
                textZh: "有一点微辣。要做成适合小孩的不辣版吗？",
                actionHint: "kid-friendly",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No spice, please. And one green curry, that can be spicy.",
            textZh: "不辣的。再来一份绿咖喱，那个可以辣。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Got it. Anything else? Rice comes with the curry.",
            textZh: "好的。还要别的吗？咖喱配米饭。",
            keyPhrases: [{ en: "comes with", zh: "配" }],
            alternativeExpressions: [
              {
                textEn: "Noted. Want anything else? Just so you know, the curry already includes rice.",
                textZh: "记下了。还要别的吗？告诉你一下，咖喱已经包含米饭。",
                actionHint: "already includes",
                frequency: "common",
              },
              {
                textEn: "No problem. Anything more? Rice is included with all our curries.",
                textZh: "没问题。还有吗？所有咖喱都配米饭。",
                actionHint: "is included",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all. Can I get extra napkins and chopsticks?",
            textZh: "就这些。能多给些餐巾纸和筷子吗？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Sure! It'll be about 15 minutes. You can wait here or I can text you when it's ready.",
            textZh: "当然！大约15分钟。你可以在这等或者好了发短信给你。",
            keyPhrases: [{ en: "text you when it's ready", zh: "好了发短信" }],
            alternativeExpressions: [
              {
                textEn: "No problem! About a 15-minute wait. Feel free to hang out or I can send you a text.",
                textZh: "没问题！大约等15分钟。可以在这坐坐或者我发短信通知你。",
                actionHint: "hang out口语",
                frequency: "common",
              },
              {
                textEn: "Sure thing! Roughly 15 minutes. Want to wait or should I give you a buzz when it's done?",
                textZh: "没问题！大约15分钟。要等还是做好了通知你？",
                actionHint: "give you a buzz",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll wait here. Thank you.", textZh: "我在这等。谢谢。" },
        ],
      },
    ],
  },
  {
    id: "restaurant-takeout-pickup",
    category: "restaurant",
    titleZh: "外卖取餐",
    titleEn: "Takeout Pickup",
    description: "到餐厅取外卖时的对话",
    otherRole: "餐厅员工",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "basic",
        titleZh: "正常取餐",
        titleEn: "Normal Pickup",
        description: "顺利取到外卖",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Hi, I'm here to pick up an order for Wang.", textZh: "你好，我来取王的外卖。" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Let me check... Wang, kung pao chicken and fried rice?",
            textZh: "我查一下……王，宫保鸡丁和炒饭？",
            keyPhrases: [{ en: "pick up an order", zh: "取外卖" }],
            alternativeExpressions: [
              {
                textEn: "One moment... Ah, Wang — kung pao chicken and fried rice, right?",
                textZh: "稍等……啊，王——宫保鸡丁和炒饭对吧？",
                actionHint: "确认订单",
                frequency: "common",
              },
              {
                textEn: "Let me pull that up. Here we go — Wang, kung pao chicken with fried rice?",
                textZh: "我查一下。找到了——王，宫保鸡丁配炒饭？",
                actionHint: "pull that up",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That's correct.", textZh: "对的。" },
          {
            speaker: "them",
            role: "员工",
            textEn: "It's ready! Here you go. Everything's in the bag. Your total is $18.50.",
            textZh: "好了！给你。都在袋子里。一共18.50美元。",
            keyPhrases: [{ en: "it's ready", zh: "好了" }],
            alternativeExpressions: [
              {
                textEn: "All set! Here's your order. Everything's packed up. That'll be $18.50.",
                textZh: "好了！你的餐给你。都打包好了。18.50美元。",
                actionHint: "packed up",
                frequency: "common",
              },
              {
                textEn: "Good timing — it just came out! Here you go. $18.50 total.",
                textZh: "来得正好——刚做好！给你。一共18.50美元。",
                actionHint: "good timing",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Can I pay by card?", textZh: "能刷卡吗？" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Of course. Tap, insert, or swipe.",
            textZh: "当然。碰、插卡或刷卡都行。",
            keyPhrases: [{ en: "tap, insert, or swipe", zh: "碰、插卡或刷卡" }],
            alternativeExpressions: [
              {
                textEn: "Sure! You can tap, chip, or swipe your card.",
                textZh: "当然！可以碰、插芯片或刷卡。",
                actionHint: "chip说法",
                frequency: "common",
              },
              {
                textEn: "Yes, go ahead. We take tap, chip, or swipe.",
                textZh: "可以。碰、芯片或刷卡都行。",
                actionHint: "we take表达",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Are utensils and sauces included?", textZh: "有餐具和酱料吗？" },
          {
            speaker: "them",
            role: "员工",
            textEn: "Yes, chopsticks and soy sauce are in the bag. Need anything else? Hot sauce, extra napkins?",
            textZh: "有的，筷子和酱油在袋子里。还需要什么？辣酱、多点餐巾纸？",
            keyPhrases: [{ en: "utensils", zh: "餐具" }],
            alternativeExpressions: [
              {
                textEn: "Yep, everything's in there — chopsticks, soy sauce. Want any hot sauce or more napkins?",
                textZh: "有，都在里面——筷子、酱油。要辣酱或多点餐巾纸吗？",
                actionHint: "everything's in there",
                frequency: "common",
              },
              {
                textEn:
                  "I put chopsticks and soy sauce in the bag. Is there anything else you need? We have chili oil and extra napkins.",
                textZh: "我放了筷子和酱油在袋里。还需要什么？有辣椒油和多余餐巾纸。",
                actionHint: "chili oil选项",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "取餐有问题",
        titleEn: "Pickup Issues",
        description: "取餐时发现问题",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I ordered online about 30 minutes ago. Order for Wang?",
            textZh: "你好，我大约30分钟前网上下的单。王的单？",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "Hmm, I'm not seeing a Wang. Do you have a confirmation email or order number?",
            textZh: "嗯，没看到王的单。你有确认邮件或订单号吗？",
            keyPhrases: [{ en: "confirmation email", zh: "确认邮件" }],
            alternativeExpressions: [
              {
                textEn: "I don't see that name in our system. Can you pull up the confirmation on your phone?",
                textZh: "系统里没找到这个名字。能在手机上打开确认信息吗？",
                actionHint: "pull up on phone",
                frequency: "common",
              },
              {
                textEn: "Let me look again... I'm not finding Wang. Do you have the order number handy?",
                textZh: "我再查查……没找到王。你有订单号吗？",
                actionHint: "have it handy",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes, here. Order number 7892.", textZh: "有的，在这。订单号7892。" },
          {
            speaker: "them",
            role: "员工",
            textEn:
              "Oh, I see. It looks like the order went to our other location on Pine Street. This is our Oak Street location.",
            textZh: "哦我看到了。这个订单下到了我们松树街的分店。这里是橡树街的。",
            keyPhrases: [{ en: "our other location", zh: "另一家分店" }],
            alternativeExpressions: [
              {
                textEn:
                  "Ah, I think I see the issue. Your order was placed at our Pine Street branch. You're at the Oak Street one.",
                textZh: "啊，我看出问题了。你的单下在了松树街分店。你现在在橡树街这家。",
                actionHint: "I see the issue",
                frequency: "common",
              },
              {
                textEn: "Oh, that explains it. The order went to our other store on Pine Street. This is Oak Street.",
                textZh: "哦这就说得通了。订单去了我们松树街的另一家店。这里是橡树街。",
                actionHint: "that explains it",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no. Is there any way you can help me? I don't have time to drive there.",
            textZh: "糟糕。有什么办法吗？我没时间开过去。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn:
              "I can put in the same order here and have it ready in about 20 minutes. You'd need to cancel the other one through the app though.",
            textZh: "我可以在这下同样的单，大约20分钟好。不过你得在APP上取消那边的。",
            keyPhrases: [{ en: "cancel the other one", zh: "取消那边的" }],
            alternativeExpressions: [
              {
                textEn:
                  "Tell you what — I can make the same order here. About 20 minutes. Just make sure to cancel the Pine Street one on the app.",
                textZh: "这样吧——我在这里下同样的单。大约20分钟。记得在APP上取消松树街那个。",
                actionHint: "tell you what引导",
                frequency: "common",
              },
              {
                textEn:
                  "What I can do is replicate the order at this location. It'll be about 20 minutes. You'll want to cancel the original through the app.",
                textZh: "我可以在这个店重新下一样的单。大约20分钟。你需要在APP上取消原来那个。",
                actionHint: "replicate正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That works. Let me cancel it now. Thank you so much for helping.",
            textZh: "可以。我现在取消。太感谢你帮忙了。",
          },
          {
            speaker: "them",
            role: "员工",
            textEn: "No problem! Happens more often than you'd think. I'll start making yours right away.",
            textZh: "没事！这种情况比你想的常见。我马上开始做你的。",
            keyPhrases: [{ en: "happens more often than you'd think", zh: "比你想的常见" }],
            alternativeExpressions: [
              {
                textEn: "Don't worry about it! You're not the first one. Let me get started on your food.",
                textZh: "别担心！你不是第一个了。我马上开始做你的。",
                actionHint: "not the first one安慰",
                frequency: "common",
              },
              {
                textEn: "Totally fine! It happens all the time with two locations. I'm on it right now.",
                textZh: "完全没事！两家店经常搞混。我现在就开始做。",
                actionHint: "I'm on it口语",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  // ==================== 宴会/包场 Catering & Private Dining ====================
  {
    id: "restaurant-catering-inquiry",
    category: "restaurant",
    titleZh: "餐饮外包/宴会咨询",
    titleEn: "Catering Inquiry",
    description: "咨询餐厅的外包餐饮服务",
    otherRole: "宴会经理",
    otherRoleIcon: "🎉",
    flows: [
      {
        id: "basic",
        titleZh: "基本咨询",
        titleEn: "Basic Inquiry",
        description: "了解餐饮外包服务",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'm interested in your catering services for a corporate event.",
            textZh: "你好，我想了解你们的企业活动餐饮外包服务。",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn: "Of course! How many guests are you expecting, and what type of event is it?",
            textZh: "当然！预计多少人，什么类型的活动？",
            keyPhrases: [
              { en: "catering services", zh: "餐饮外包服务" },
              { en: "how many guests", zh: "多少人" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! How big is the group, and what's the occasion?",
                textZh: "没问题！多少人，什么场合？",
                actionHint: "更随意的问法",
                frequency: "common",
              },
              {
                textEn: "We'd love to help! Can you tell me the guest count and what kind of event you're planning?",
                textZh: "很乐意帮忙！能告诉我人数和活动类型吗？",
                actionHint: "热情回应",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "About 50 people. It's a company dinner.", textZh: "大约50人。公司晚宴。" },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "We offer buffet-style and plated dinner options. The buffet starts at $45 per person and plated at $65 per person.",
            textZh: "我们有自助餐和分餐两种。自助每人45美元起，分餐每人65美元起。",
            keyPhrases: [
              { en: "buffet-style", zh: "自助餐式" },
              { en: "plated dinner", zh: "分餐" },
              { en: "per person", zh: "每人" },
            ],
            alternativeExpressions: [
              {
                textEn: "We do two styles — buffet starting at $45 a head, or plated dinners at $65 a head.",
                textZh: "我们有两种形式——自助每人45美元起，分餐每人65美元起。",
                actionHint: "用a head替代per person",
                frequency: "common",
              },
              {
                textEn:
                  "You can go with a buffet or a sit-down plated dinner. Buffet runs $45 per guest, plated is $65.",
                textZh: "可以选自助或正式分餐。自助每位45美元，分餐65美元。",
                actionHint: "sit-down更正式",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's included in the buffet package?", textZh: "自助餐套餐包含什么？" },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "Two appetizers, three main courses, two sides, a salad station, and a dessert table. Drinks are separate.",
            textZh: "两道开胃菜、三道主菜、两个配菜、沙拉台和甜品台。饮品另算。",
            keyPhrases: [
              { en: "appetizers", zh: "开胃菜" },
              { en: "drinks are separate", zh: "饮品另算" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It comes with two starters, three mains, two sides, plus salad and dessert stations. Beverages are priced separately.",
                textZh: "包含两道前菜、三道主菜、两个配菜，加上沙拉台和甜品台。饮品单独算。",
                actionHint: "用starters替代appetizers",
                frequency: "common",
              },
              {
                textEn:
                  "You get a pretty full spread — appetizers, mains, sides, salad bar, and desserts. Drinks aren't included though.",
                textZh: "内容挺丰富的——前菜、主菜、配菜、沙拉吧和甜品。不过饮品不包含。",
                actionHint: "口语化概括",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can you accommodate dietary restrictions? We have some vegetarian and gluten-free guests.",
            textZh: "能满足饮食限制吗？有些客人是素食和无麸质的。",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "Absolutely. We always include vegetarian options, and we can adjust any dish to be gluten-free. I'll send you our catering menu to review.",
            textZh: "当然。我们总会包含素食选项，任何菜都可以调整为无麸质。我把餐饮菜单发给你看。",
            keyPhrases: [{ en: "accommodate dietary restrictions", zh: "满足饮食限制" }],
            alternativeExpressions: [
              {
                textEn: "Of course! We're very flexible with dietary needs. I'll email you the full catering menu.",
                textZh: "当然！我们对饮食需求很灵活。我会把完整菜单发给你。",
                actionHint: "强调灵活性",
                frequency: "common",
              },
              {
                textEn:
                  "No problem at all. We handle vegetarian, vegan, gluten-free — you name it. Let me send over the menu.",
                textZh: "完全没问题。素食、纯素、无麸质——都能做。我把菜单发过去。",
                actionHint: "列举多种饮食限制",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That would be great. Can you email it to me?",
            textZh: "太好了。能发邮件给我吗？",
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "详细定制",
        titleEn: "Detailed Planning",
        description: "深入讨论菜单和物流细节",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I've looked at your catering menu. Can we customize the main courses?",
            textZh: "我看了你们的菜单。主菜可以定制吗？",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "Absolutely. Our chef can create a custom menu based on your preferences. What cuisine are you thinking?",
            textZh: "当然。我们的厨师可以根据你的偏好定制菜单。想要什么菜系？",
            keyPhrases: [
              { en: "custom menu", zh: "定制菜单" },
              { en: "cuisine", zh: "菜系" },
            ],
            alternativeExpressions: [
              {
                textEn: "Definitely! Our chef loves doing custom menus. What kind of food are you leaning toward?",
                textZh: "当然！我们厨师很喜欢做定制菜单。你倾向什么类型的菜？",
                actionHint: "更热情的回应",
                frequency: "common",
              },
              {
                textEn: "For sure. We can tailor everything to your taste. Any particular cuisine in mind?",
                textZh: "没问题。我们可以完全按你的口味来。有想要的菜系吗？",
                actionHint: "强调量身定制",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Something international — maybe Mediterranean. Also, do you handle setup and cleanup?",
            textZh: "国际化的——可能地中海风格。另外，你们负责布置和清理吗？",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "Yes, our full-service package includes setup, serving staff, and cleanup. We'll need access to the venue two hours before the event.",
            textZh: "是的，全套服务包括布置、服务人员和清理。活动前两小时需要进入场地。",
            keyPhrases: [
              { en: "full-service package", zh: "全套服务" },
              { en: "serving staff", zh: "服务人员" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yep, we handle everything — setup, staffing, and cleanup. We just need to get into the venue a couple hours early.",
                textZh: "是的，全部包——布置、人员和清理。只要提前两小时进场就行。",
                actionHint: "口语化概括",
                frequency: "common",
              },
              {
                textEn:
                  "That's all included in our full-service option. We'd need venue access about two hours ahead of time.",
                textZh: "全套服务都包含了。需要提前两小时进入场地。",
                actionHint: "简洁确认",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What about equipment? We don't have tables and chairs at the venue.",
            textZh: "设备呢？场地没有桌椅。",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "We can provide tables, chairs, linens, and tableware for an additional fee. Shall I include that in the quote?",
            textZh: "我们可以提供桌椅、桌布和餐具，需要额外费用。要加到报价里吗？",
            keyPhrases: [
              { en: "linens", zh: "桌布" },
              { en: "tableware", zh: "餐具" },
              { en: "quote", zh: "报价" },
            ],
            alternativeExpressions: [
              {
                textEn: "We rent tables, chairs, linens, and tableware too. Want me to add that to the estimate?",
                textZh: "桌椅、桌布和餐具我们也出租。要加到预算里吗？",
                actionHint: "用rent和estimate",
                frequency: "common",
              },
              {
                textEn:
                  "Sure, we can supply all the furniture and place settings. There's an extra charge. Should I bundle it into the quote?",
                textZh: "没问题，家具和餐具都能提供。有额外费用。要打包到报价里吗？",
                actionHint: "用bundle表达打包",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, please. When do you need a final headcount?",
            textZh: "好的。最终人数什么时候确认？",
          },
          {
            speaker: "them",
            role: "宴会经理",
            textEn:
              "We need the final headcount at least one week before the event. We can adjust up to 10% after that.",
            textZh: "至少活动前一周。之后可以调整10%以内。",
            keyPhrases: [{ en: "final headcount", zh: "最终人数" }],
            alternativeExpressions: [
              {
                textEn: "We ask for final numbers a week out. After that, we can still adjust by about 10%.",
                textZh: "我们要求提前一周确认人数。之后还能调整大约10%。",
                actionHint: "口语化表达",
                frequency: "common",
              },
              {
                textEn: "Seven days before is our cutoff for the final count. Small changes after that are fine.",
                textZh: "活动前七天是确认人数的截止时间。之后小幅调整没问题。",
                actionHint: "用cutoff更专业",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's reasonable. Can you send me a formal quote by Friday?",
            textZh: "合理。能周五前发正式报价吗？",
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-private-dining",
    category: "restaurant",
    titleZh: "包厢/私人用餐",
    titleEn: "Private Dining Room",
    description: "预订私人包厢用餐",
    otherRole: "餐厅经理",
    otherRoleIcon: "🚪",
    flows: [
      {
        id: "basic",
        titleZh: "咨询包厢",
        titleEn: "Inquire About Private Room",
        description: "了解私人用餐空间",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, do you have a private dining room available for next Saturday?",
            textZh: "你好，下周六有包厢吗？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "We do have a private room. How many guests are you expecting?",
            textZh: "有包厢的。预计多少人？",
            keyPhrases: [{ en: "private dining room", zh: "包厢" }],
            alternativeExpressions: [
              {
                textEn: "Yes, we have a private dining area! How large is your party?",
                textZh: "有的，我们有私人用餐区！你们几位？",
                actionHint: "用party指一行人",
                frequency: "common",
              },
              {
                textEn: "We sure do! How many people are we looking at?",
                textZh: "当然有！大概多少人？",
                actionHint: "轻松口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "About 12 people. It's a birthday dinner.", textZh: "大约12人。生日聚餐。" },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "Our private room seats up to 16. There's a minimum spend of $600 for Saturday evenings. Is that alright?",
            textZh: "我们包厢最多坐16人。周六晚上最低消费600美元。可以吗？",
            keyPhrases: [
              { en: "minimum spend", zh: "最低消费" },
              { en: "seats up to", zh: "最多坐" },
            ],
            alternativeExpressions: [
              {
                textEn: "The private room holds up to 16. For Saturday nights, there's a $600 minimum. Does that work?",
                textZh: "包厢最多容纳16人。周六晚上有600美元最低消费。可以吗？",
                actionHint: "用holds替代seats",
                frequency: "common",
              },
              {
                textEn: "It fits 16 comfortably. Just so you know, Saturdays require a $600 minimum spend. Sound okay?",
                textZh: "舒适地坐16人。提醒一下，周六要求600美元最低消费。没问题吧？",
                actionHint: "加comfortably更生动",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That should be fine for 12 people. Is there a set menu?",
            textZh: "12个人应该没问题。有套餐吗？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "You can order à la carte or choose our prix fixe menu at $55 per person, which includes three courses.",
            textZh: "可以点菜也可以选每人55美元的固定套餐，包含三道菜。",
            keyPhrases: [
              { en: "à la carte", zh: "点菜" },
              { en: "prix fixe", zh: "固定套餐" },
            ],
            alternativeExpressions: [
              {
                textEn: "You can order off the regular menu or do our set menu — $55 a person for three courses.",
                textZh: "可以按常规菜单点，也可以选套餐——每人55美元三道菜。",
                actionHint: "用set menu替代prix fixe",
                frequency: "common",
              },
              {
                textEn:
                  "Either order individually from the menu, or go with our three-course prix fixe at $55 per head.",
                textZh: "可以各自点菜，或者选每人55美元的三道式套餐。",
                actionHint: "用per head口语化",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "The prix fixe sounds easier for a group. Can I see the menu options?",
            textZh: "大人数固定套餐更方便。能看看菜单选项吗？",
            culturalNote: "Prix fixe（法语，读作 pree feeks）指固定价格套餐。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Sure! I'll email you the menu. We can also arrange a birthday cake if you'd like.",
            textZh: "当然！我发邮件给你。如果需要也可以安排生日蛋糕。",
            keyPhrases: [{ en: "arrange a birthday cake", zh: "安排生日蛋糕" }],
            alternativeExpressions: [
              {
                textEn: "Of course! I'll send the menu over. We also do birthday cakes if you need one.",
                textZh: "当然！我把菜单发过来。需要的话也做生日蛋糕。",
                actionHint: "简洁直接",
                frequency: "common",
              },
              {
                textEn:
                  "Happy to! I'll get the menu to you by email. And just so you know, we can order a cake for the birthday too.",
                textZh: "很乐意！我邮件发菜单给你。另外告诉你，也可以帮你订生日蛋糕。",
                actionHint: "主动告知蛋糕服务",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "包厢细节安排",
        titleEn: "Private Room Details",
        description: "讨论包厢的详细安排",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to finalize the private dining reservation. A few questions first.",
            textZh: "我想确认包厢预订。先问几个问题。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "Of course. Go ahead.",
            textZh: "当然。请说。",
            keyPhrases: [{ en: "finalize", zh: "确认" }],
            alternativeExpressions: [
              {
                textEn: "Sure, fire away!",
                textZh: "当然，尽管问！",
                actionHint: "轻松口语fire away",
                frequency: "common",
              },
              {
                textEn: "Absolutely. What would you like to know?",
                textZh: "当然。你想了解什么？",
                actionHint: "稍正式的回应",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Can we bring our own decorations? It's a surprise party.",
            textZh: "能自己带装饰吗？是个惊喜派对。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn:
              "Yes, you're welcome to decorate. We just ask that nothing is taped or nailed to the walls. You can come an hour early to set up.",
            textZh: "可以的。只要不在墙上贴或钉东西就行。可以提前一小时来布置。",
            keyPhrases: [
              { en: "you're welcome to", zh: "欢迎你" },
              { en: "come early to set up", zh: "提前来布置" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Go for it! Just no tape or nails on the walls, please. You can arrive an hour beforehand to get everything set up.",
                textZh: "可以！只是别在墙上贴或钉东西。可以提前一小时来布置。",
                actionHint: "更轻松的语气",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing! Feel free to decorate — we just need to keep the walls damage-free. Come by an hour early and you'll have plenty of time.",
                textZh: "没问题！随便装饰——只要墙面不受损就行。提前一小时来时间很充裕。",
                actionHint: "解释原因更友好",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can we also bring our own wine? We have a special bottle.",
            textZh: "好的。能自带酒吗？我们有一瓶特别的。",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "We do allow BYO wine with a corkage fee of $25 per bottle.",
            textZh: "可以自带酒，每瓶收25美元开瓶费。",
            keyPhrases: [
              { en: "BYO", zh: "自带" },
              { en: "corkage fee", zh: "开瓶费" },
            ],
            alternativeExpressions: [
              {
                textEn: "Yes, you can bring your own wine. There's a $25 corkage per bottle.",
                textZh: "可以，能自带酒。每瓶25美元开瓶费。",
                actionHint: "更直白的说法",
                frequency: "common",
              },
              {
                textEn: "You're welcome to bring wine! We charge $25 a bottle for corkage.",
                textZh: "欢迎自带酒！开瓶费每瓶25美元。",
                actionHint: "更欢迎的语气",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. One more thing — can you play music in the room?",
            textZh: "没问题。还有一个——包厢能放音乐吗？",
          },
          {
            speaker: "them",
            role: "经理",
            textEn: "We have a Bluetooth speaker in the room. You can connect your phone and play your own playlist.",
            textZh: "房间里有蓝牙音箱。可以连手机放你自己的歌单。",
            keyPhrases: [{ en: "Bluetooth speaker", zh: "蓝牙音箱" }],
            alternativeExpressions: [
              {
                textEn:
                  "There's a Bluetooth speaker you can hook up to. Just pair your phone and play whatever you like.",
                textZh: "有个蓝牙音箱可以连。手机配对后放什么都行。",
                actionHint: "用hook up更口语",
                frequency: "common",
              },
              {
                textEn: "We've got a speaker in there with Bluetooth. Feel free to play your own music.",
                textZh: "里面有个带蓝牙的音箱。随便放你自己的音乐。",
                actionHint: "简短随意",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "This is going to be perfect. Let me confirm the reservation. Saturday at 7 PM, 12 people, prix fixe menu.",
            textZh: "太完美了。确认预订：周六晚7点，12人，固定套餐。",
          },
        ],
      },
    ],
  },
  // ==================== 甜品 Dessert & Bakery ====================
  {
    id: "restaurant-dessert-order",
    category: "restaurant",
    titleZh: "餐后甜品",
    titleEn: "Dessert Order",
    description: "在餐厅点餐后甜品",
    otherRole: "服务员",
    otherRoleIcon: "🍰",
    flows: [
      {
        id: "basic",
        titleZh: "点甜品",
        titleEn: "Order Dessert",
        description: "看甜品菜单点甜品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Can I interest you in some dessert? We have a few specials tonight.",
            textZh: "要来点甜品吗？今晚有几款特别推荐。",
            keyPhrases: [
              { en: "can I interest you in", zh: "要来点" },
              { en: "specials", zh: "特别推荐" },
            ],
            alternativeExpressions: [
              {
                textEn: "Would you like to see our dessert menu? We've got some great specials tonight.",
                textZh: "要看看甜品菜单吗？今晚有几款不错的特别款。",
                actionHint: "先问看菜单",
                frequency: "common",
              },
              {
                textEn: "Room for dessert? We have some really good ones tonight.",
                textZh: "还吃得下甜品吗？今晚有几款特别好的。",
                actionHint: "用room for更地道",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sure, what do you have?", textZh: "好啊，有什么？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "We have chocolate lava cake, crème brûlée, New York cheesecake, and a seasonal fruit tart.",
            textZh: "有巧克力熔岩蛋糕、焦糖布丁、纽约芝士蛋糕和时令水果挞。",
            keyPhrases: [
              { en: "chocolate lava cake", zh: "巧克力熔岩蛋糕" },
              { en: "crème brûlée", zh: "焦糖布丁" },
              { en: "seasonal", zh: "时令" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tonight we've got lava cake, crème brûlée, cheesecake, and a fruit tart that's in season.",
                textZh: "今晚有熔岩蛋糕、焦糖布丁、芝士蛋糕和应季水果挞。",
                actionHint: "用in season替代seasonal",
                frequency: "common",
              },
              {
                textEn:
                  "Our big hits are the chocolate lava cake and the crème brûlée. We also do a New York cheesecake and a seasonal tart.",
                textZh: "最受欢迎的是巧克力熔岩蛋糕和焦糖布丁。也有纽约芝士蛋糕和时令挞。",
                actionHint: "先推荐热门款",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What's in the fruit tart? What fruits are in season?",
            textZh: "水果挞里有什么？现在什么水果当季？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Right now it's strawberry and peach with a vanilla custard filling.",
            textZh: "现在是草莓和桃子配香草蛋奶馅。",
            keyPhrases: [
              { en: "in season", zh: "当季" },
              { en: "custard filling", zh: "蛋奶馅" },
            ],
            alternativeExpressions: [
              {
                textEn: "This week it's strawberry-peach with vanilla custard. Super fresh.",
                textZh: "这周是草莓桃子配香草蛋奶馅。特别新鲜。",
                actionHint: "加上新鲜评价",
                frequency: "common",
              },
              {
                textEn: "We're doing strawberry and peach right now, on a bed of vanilla custard.",
                textZh: "现在做的是草莓和桃子，铺在香草蛋奶馅上。",
                actionHint: "on a bed of更生动",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds delicious. I'll have the fruit tart.",
            textZh: "听起来很好吃。我要水果挞。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Would you like it with a scoop of ice cream or whipped cream?",
            textZh: "要配一球冰淇淋还是奶油？",
            keyPhrases: [{ en: "a scoop of ice cream", zh: "一球冰淇淋" }],
            alternativeExpressions: [
              {
                textEn: "Want that à la mode or with whipped cream?",
                textZh: "要配冰淇淋还是奶油？",
                actionHint: "à la mode指配冰淇淋",
                frequency: "common",
              },
              {
                textEn: "We can top it with ice cream or whipped cream. Which do you prefer?",
                textZh: "可以加冰淇淋或奶油在上面。你喜欢哪个？",
                actionHint: "用top it更生动",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "A scoop of vanilla ice cream, please.", textZh: "一球香草冰淇淋。" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "分享甜品和咖啡搭配",
        titleEn: "Shared Dessert and Coffee Pairing",
        description: "和朋友分享甜品并搭配咖啡",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd like to share a couple of desserts. What pairs well with coffee?",
            textZh: "我们想分享几个甜品。什么配咖啡好？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The chocolate lava cake is amazing with espresso. And the crème brûlée goes beautifully with a cappuccino.",
            textZh: "巧克力熔岩蛋糕配浓缩咖啡绝了。焦糖布丁配卡布奇诺也非常搭。",
            keyPhrases: [
              { en: "pairs well with", zh: "搭配" },
              { en: "goes beautifully with", zh: "非常搭" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'd pair the lava cake with an espresso, and the crème brûlée with a cappuccino. Both are killer combos.",
                textZh: "我会用熔岩蛋糕配浓缩，焦糖布丁配卡布奇诺。都是绝配。",
                actionHint: "用killer combos口语化",
                frequency: "common",
              },
              {
                textEn:
                  "If you go with the lava cake, try it with an espresso — it's incredible. The crème brûlée and cappuccino is another great match.",
                textZh: "如果选熔岩蛋糕，配浓缩咖啡试试——特别棒。焦糖布丁配卡布奇诺也很搭。",
                actionHint: "推荐口吻",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take one of each. And two cappuccinos.",
            textZh: "各来一个。再来两杯卡布奇诺。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Wonderful. Just so you know, the lava cake takes about 12 minutes since it's baked to order.",
            textZh: "好的。告诉你一下，熔岩蛋糕要大约12分钟因为是现烤的。",
            keyPhrases: [{ en: "baked to order", zh: "现烤的" }],
            alternativeExpressions: [
              {
                textEn: "Great! Heads up, the lava cake is made fresh, so it'll be about 12 minutes.",
                textZh: "好的！提醒一下，熔岩蛋糕现做的，大约12分钟。",
                actionHint: "用heads up提醒",
                frequency: "common",
              },
              {
                textEn:
                  "Perfect. The lava cake does take a little while — around 12 minutes — because we bake each one fresh.",
                textZh: "好的。熔岩蛋糕要稍等——大约12分钟——因为每个都是现烤的。",
                actionHint: "解释等待原因",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's fine. We're in no rush. Could I also see the after-dinner drinks menu?",
            textZh: "没关系。我们不赶时间。能看看餐后酒单吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. We have ports, dessert wines, cognac, and digestifs. Would you like a recommendation?",
            textZh: "当然。有波特酒、甜葡萄酒、干邑和餐后酒。要推荐吗？",
            keyPhrases: [
              { en: "digestifs", zh: "餐后酒" },
              { en: "port", zh: "波特酒" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Absolutely! We carry port, dessert wines, cognac, and a few after-dinner drinks. Want me to suggest something?",
                textZh: "当然！有波特酒、甜酒、干邑和几款餐后酒。要我推荐吗？",
                actionHint: "用after-dinner drinks更直白",
                frequency: "common",
              },
              {
                textEn:
                  "Sure! We've got a nice selection — ports, sweet wines, cognac. I can pair something with your dessert if you'd like.",
                textZh: "当然！选择不少——波特酒、甜酒、干邑。可以帮你配甜品搭的酒。",
                actionHint: "主动搭配",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What do you suggest with the chocolate cake?",
            textZh: "配巧克力蛋糕你推荐什么？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "A glass of port or an Amaretto would complement the chocolate perfectly.",
            textZh: "一杯波特酒或杏仁利口酒跟巧克力完美搭配。",
            keyPhrases: [
              { en: "complement", zh: "搭配" },
              { en: "Amaretto", zh: "杏仁利口酒" },
            ],
            alternativeExpressions: [
              {
                textEn: "For chocolate, I'd go with a port or an Amaretto. Both are a perfect match.",
                textZh: "配巧克力的话，我会选波特酒或杏仁利口酒。都是完美搭配。",
                actionHint: "个人推荐口吻",
                frequency: "common",
              },
              {
                textEn: "Port and chocolate is a classic combo. Amaretto works beautifully too.",
                textZh: "波特酒配巧克力是经典组合。杏仁利口酒也很搭。",
                actionHint: "强调经典",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll try the Amaretto. Thank you!", textZh: "我试试杏仁利口酒。谢谢！" },
        ],
      },
    ],
  },
  {
    id: "restaurant-bakery",
    category: "restaurant",
    titleZh: "面包店/烘焙坊",
    titleEn: "Bakery",
    description: "在面包店选购面包和糕点",
    otherRole: "面包店员",
    otherRoleIcon: "🥐",
    flows: [
      {
        id: "basic",
        titleZh: "买面包糕点",
        titleEn: "Buy Bread and Pastries",
        description: "挑选和购买面包糕点",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Good morning! What can I get for you today?",
            textZh: "早上好！今天要什么？",
            keyPhrases: [{ en: "what can I get for you", zh: "要什么" }],
            alternativeExpressions: [
              {
                textEn: "Morning! What are you looking for today?",
                textZh: "早！今天想买什么？",
                actionHint: "更随意的问候",
                frequency: "common",
              },
              {
                textEn: "Hi there! What catches your eye?",
                textZh: "嗨！看上什么了？",
                actionHint: "用catches your eye更生动",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Hi! Everything looks so good. What was baked fresh this morning?",
            textZh: "嗨！都看起来好好吃。今早新鲜出炉的有什么？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The sourdough, the baguettes, and all the croissants are fresh from this morning. The cinnamon rolls just came out of the oven.",
            textZh: "酸面包、法棍和所有可颂都是今早新鲜的。肉桂卷刚出炉。",
            keyPhrases: [
              { en: "baked fresh", zh: "新鲜出炉" },
              { en: "sourdough", zh: "酸面包" },
              { en: "baguette", zh: "法棍" },
              { en: "cinnamon rolls", zh: "肉桂卷" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Everything on the left is from today — sourdough, baguettes, croissants. And the cinnamon rolls are hot out of the oven.",
                textZh: "左边的都是今天的——酸面包、法棍、可颂。肉桂卷刚烤好热的。",
                actionHint: "指向展示区",
                frequency: "common",
              },
              {
                textEn:
                  "The sourdough and croissants were baked this morning. Oh, and the cinnamon rolls literally just came out — still warm!",
                textZh: "酸面包和可颂都是今早烤的。对了，肉桂卷真的刚出炉——还热着！",
                actionHint: "强调刚出炉的热度",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take two croissants and a cinnamon roll.",
            textZh: "我要两个可颂和一个肉桂卷。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Plain croissants or chocolate?",
            textZh: "原味可颂还是巧克力的？",
            keyPhrases: [{ en: "plain or chocolate", zh: "原味还是巧克力" }],
            alternativeExpressions: [
              {
                textEn: "Regular or chocolate-filled?",
                textZh: "普通的还是巧克力馅的？",
                actionHint: "用regular更简洁",
                frequency: "common",
              },
              {
                textEn: "Butter croissants or pain au chocolat?",
                textZh: "黄油可颂还是巧克力可颂？",
                actionHint: "用法语名称更专业",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "One of each, please.", textZh: "各一个。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Anything else? A loaf of bread maybe?",
            textZh: "还要别的吗？来条面包？",
            keyPhrases: [{ en: "a loaf of bread", zh: "一条面包" }],
            alternativeExpressions: [
              {
                textEn: "Can I get you anything else? Maybe a loaf of bread to take home?",
                textZh: "还要什么吗？带条面包回家？",
                actionHint: "加to take home更具体",
                frequency: "common",
              },
              {
                textEn: "Want to add a loaf of bread? Or anything else?",
                textZh: "要加一条面包吗？或者别的什么？",
                actionHint: "先推荐面包",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, a sourdough loaf, please. Is it sliced?",
            textZh: "好，来条酸面包。切片的吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "I can slice it for you. Thick or thin slices?",
            textZh: "可以帮你切。厚片还是薄片？",
            keyPhrases: [{ en: "sliced", zh: "切片" }],
            alternativeExpressions: [
              {
                textEn: "Want me to slice that? Thin or thick?",
                textZh: "要帮你切吗？薄的还是厚的？",
                actionHint: "先问是否要切",
                frequency: "common",
              },
              {
                textEn: "I can cut that up for you. How thick do you want the slices?",
                textZh: "可以帮你切。你要多厚的片？",
                actionHint: "开放式问厚度",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Medium slices. Thank you!", textZh: "中等厚度。谢谢！" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制蛋糕",
        titleEn: "Custom Cake Order",
        description: "定制生日蛋糕或特殊蛋糕",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I'd like to order a custom birthday cake. Is that something you do?",
            textZh: "我想定制生日蛋糕。你们做吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Yes! We do custom cakes. When do you need it and how many people will it serve?",
            textZh: "做的！什么时候要，给多少人吃？",
            keyPhrases: [
              { en: "custom cake", zh: "定制蛋糕" },
              { en: "how many will it serve", zh: "给多少人吃" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely! When's the event and how many guests?",
                textZh: "当然！活动什么时候，多少人？",
                actionHint: "更简洁的问法",
                frequency: "common",
              },
              {
                textEn: "We sure do! Tell me the date and the size of the party, and we'll make it happen.",
                textZh: "当然做！告诉我日期和人数，我们来搞定。",
                actionHint: "热情有干劲",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Next Friday. For about 20 people.", textZh: "下周五。大约20人。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "For 20 people, I'd recommend a 10-inch round or a half sheet. What flavor?",
            textZh: "20人的话建议10英寸圆形或半张方形。什么口味？",
            keyPhrases: [
              { en: "10-inch round", zh: "10英寸圆形" },
              { en: "half sheet", zh: "半张方形" },
            ],
            alternativeExpressions: [
              {
                textEn: "A 10-inch round or a half sheet would be perfect for 20. What flavor are you thinking?",
                textZh: "10英寸圆形或半张方形够20人吃。想要什么口味？",
                actionHint: "换种推荐方式",
                frequency: "common",
              },
              {
                textEn:
                  "For that many people, I'd go with a half sheet cake. It's easier to cut and serve. What flavor do you want?",
                textZh: "这么多人的话我会选半张方形。切起来方便。你想要什么口味？",
                actionHint: "给出选择理由",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Chocolate cake with vanilla frosting. Can you write 'Happy Birthday Jenny' on it?",
            textZh: "巧克力蛋糕配香草糖霜。能写 'Happy Birthday Jenny' 吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely. Any specific decorations — flowers, sprinkles, a theme?",
            textZh: "当然。要特定装饰吗——花朵、彩针、主题？",
            keyPhrases: [
              { en: "frosting", zh: "糖霜" },
              { en: "sprinkles", zh: "彩针/糖粒" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Do you have a design in mind? Flowers, sprinkles, a color scheme?",
                textZh: "好的！有想要的设计吗？花朵、彩针、配色？",
                actionHint: "加color scheme",
                frequency: "common",
              },
              {
                textEn:
                  "Love it! What kind of decoration? We can do pretty much anything — flowers, writing, themed designs.",
                textZh: "好的！要什么装饰？什么都能做——花朵、文字、主题设计。",
                actionHint: "强调灵活性",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Just simple flowers on top. How much would that be?",
            textZh: "上面简单放些花。多少钱？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The 10-inch chocolate cake with custom decoration would be $65. We require a 50% deposit to reserve.",
            textZh: "10英寸巧克力定制蛋糕65美元。需要付50%定金预订。",
            keyPhrases: [
              { en: "deposit", zh: "定金" },
              { en: "reserve", zh: "预订" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "That'll run you $65 for the 10-inch with custom decoration. We need half up front to hold the order.",
                textZh: "10英寸定制装饰的65美元。需要先付一半来确认订单。",
                actionHint: "用run you更口语",
                frequency: "common",
              },
              {
                textEn: "The total would be $65. We just need a 50% deposit when you place the order.",
                textZh: "总共65美元。下单时需要付50%定金就行。",
                actionHint: "简洁报价",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Sounds good. I'll pay the deposit now.", textZh: "好的。我现在付定金。" },
        ],
      },
    ],
  },
  // ==================== 美食广场 Food Court & Hawker ====================
  {
    id: "restaurant-food-court-hawker",
    category: "restaurant",
    titleZh: "美食广场",
    titleEn: "Food Court",
    description: "在商场美食广场点餐",
    otherRole: "摊位店员",
    otherRoleIcon: "🏬",
    flows: [
      {
        id: "basic",
        titleZh: "美食广场点餐",
        titleEn: "Food Court Order",
        description: "在美食广场选择和点餐",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Hi, what's the most popular item here?", textZh: "你好，这里最受欢迎的是什么？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "Our chicken teriyaki bowl is the best seller. It comes with rice and veggies.",
            textZh: "照烧鸡肉饭最畅销。配米饭和蔬菜。",
            keyPhrases: [
              { en: "best seller", zh: "最畅销" },
              { en: "teriyaki", zh: "照烧" },
            ],
            alternativeExpressions: [
              {
                textEn: "The teriyaki chicken bowl is our most popular — rice and veggies on the side.",
                textZh: "照烧鸡肉饭最受欢迎——配米饭和蔬菜。",
                actionHint: "用most popular",
                frequency: "common",
              },
              {
                textEn: "Everyone loves the chicken teriyaki bowl. You get rice and veggies with it.",
                textZh: "大家都爱照烧鸡肉饭。配米饭和蔬菜。",
                actionHint: "用everyone loves更生动",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll try that. Is it a big portion?", textZh: "我试试。份量大吗？" },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Pretty generous. If you're really hungry, you can get the combo with a drink and spring rolls for $2 more.",
            textZh: "挺大的。如果很饿可以加2美元升级套餐配饮料和春卷。",
            keyPhrases: [
              { en: "generous", zh: "份量大" },
              { en: "combo", zh: "套餐" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's a big portion. But if you want more, the combo adds a drink and spring rolls for just two bucks.",
                textZh: "份量很大。不过想多吃点的话，套餐加饮料和春卷只要两块钱。",
                actionHint: "用two bucks更口语",
                frequency: "common",
              },
              {
                textEn:
                  "Really filling! You can also upgrade to the combo for $2 extra — comes with a drink and spring rolls.",
                textZh: "很管饱！也可以加2美元升级套餐——有饮料和春卷。",
                actionHint: "用filling更地道",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Just the bowl, please. For here.", textZh: "就饭就行。在这吃。" },
          {
            speaker: "them",
            role: "店员",
            textEn: "White rice or brown rice?",
            textZh: "白饭还是糙米饭？",
            keyPhrases: [{ en: "white rice or brown rice", zh: "白饭还是糙米饭" }],
            alternativeExpressions: [
              {
                textEn: "Would you like white or brown rice with that?",
                textZh: "配白饭还是糙米饭？",
                actionHint: "完整句式",
                frequency: "common",
              },
              {
                textEn: "What kind of rice — white or brown?",
                textZh: "要什么饭——白饭还是糙米饭？",
                actionHint: "先问what kind",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "White rice. How long is the wait?", textZh: "白饭。要等多久？" },
          {
            speaker: "them",
            role: "店员",
            textEn: "About 3 minutes. I'll call your number. Here's your receipt — number 86.",
            textZh: "大约3分钟。叫号。你的小票——86号。",
            keyPhrases: [{ en: "call your number", zh: "叫号" }],
            alternativeExpressions: [
              {
                textEn: "Just a few minutes. You're number 86. Listen for your number.",
                textZh: "几分钟就好。你是86号。注意听叫号。",
                actionHint: "更简洁",
                frequency: "common",
              },
              {
                textEn: "It'll be ready in about 3 minutes. Grab a seat and I'll shout your number — 86.",
                textZh: "大约3分钟好。找个位子坐，我会叫你的号——86号。",
                actionHint: "让客人先坐",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "多家摊位拼餐",
        titleEn: "Multi-Stall Ordering",
        description: "在不同摊位点不同的食物",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how does the food court work? Can I order from different stalls?",
            textZh: "请问美食广场怎么运作？能从不同摊位点吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Yes! Each stall is separate. You order and pay at each one individually. Seating is shared in the middle.",
            textZh: "可以！每个摊位独立的。各摊位单独点单付款。中间座位公用。",
            keyPhrases: [
              { en: "each stall is separate", zh: "每个摊位独立" },
              { en: "shared seating", zh: "公用座位" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! Every stall runs independently — you order and pay at each one. The seating area in the center is communal.",
                textZh: "当然！每个摊位独立经营——各自点餐付款。中间的座位区是公共的。",
                actionHint: "用communal更准确",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah! Just go up to any stall you like, order, and pay there. Seats are first come, first served in the middle.",
                textZh: "对！走到你喜欢的摊位点餐付款就行。中间的座位先到先坐。",
                actionHint: "强调先到先得",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Got it. What stalls do you recommend for someone new?",
            textZh: "明白。有什么推荐给新来的？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "The Thai place in the corner has amazing pad thai. The Mexican stall has great tacos. And our Japanese stall does good udon.",
            textZh: "角落的泰国摊炒河粉很棒。墨西哥摊的塔可很好。日本摊的乌冬面也不错。",
            keyPhrases: [
              { en: "pad thai", zh: "泰式炒河粉" },
              { en: "tacos", zh: "塔可" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "I'd check out the Thai stall for pad thai, the Mexican one for tacos, and the Japanese spot for udon. All solid.",
                textZh: "推荐去泰国摊吃炒河粉，墨西哥摊吃塔可，日本摊吃乌冬。都不错。",
                actionHint: "用check out更口语",
                frequency: "common",
              },
              {
                textEn:
                  "If you like Thai, the pad thai in the corner is killer. The tacos and udon are also worth trying.",
                textZh: "如果喜欢泰菜，角落的炒河粉超赞。塔可和乌冬面也值得试。",
                actionHint: "按喜好推荐",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll start with the Thai stall. Can I save a table first?",
            textZh: "我先去泰国摊。能先占个桌吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It's usually okay to leave something on a table to hold it, but don't leave valuables.",
            textZh: "一般放点东西在桌上占着就行，但别放贵重物品。",
            keyPhrases: [
              { en: "hold a table", zh: "占桌" },
              { en: "valuables", zh: "贵重物品" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "People usually just put a jacket or a bag on a chair to save a seat. Just don't leave anything expensive.",
                textZh: "一般放件外套或包在椅子上占位就行。别放贵重东西。",
                actionHint: "给出具体方法",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, toss a napkin or something on the table to claim it. But keep your phone and wallet with you.",
                textZh: "对，放张餐巾纸之类的在桌上占着就行。但手机钱包随身带。",
                actionHint: "更具体的建议",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. Also, do all the stalls take credit cards?",
            textZh: "好的。另外，所有摊位都能刷卡吗？",
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Most do, but a couple are cash only. There's an ATM near the entrance.",
            textZh: "大多数可以，有几个只收现金。入口附近有ATM。",
            keyPhrases: [
              { en: "cash only", zh: "只收现金" },
              { en: "ATM", zh: "取款机" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Most of them take cards, but a few only do cash. There's an ATM by the front door if you need it.",
                textZh: "大多数收卡，但有几个只收现金。需要的话门口有ATM。",
                actionHint: "稍微展开",
                frequency: "common",
              },
              {
                textEn:
                  "Some stalls are cash only, so you might want to grab some cash from the ATM near the entrance. Most take cards though.",
                textZh: "有些摊位只收现金，你可能想在入口的ATM取点现金。不过大多数收卡。",
                actionHint: "先提醒取现",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thanks for all the tips!", textZh: "谢谢你的建议！" },
        ],
      },
    ],
  },
  {
    id: "restaurant-hawker-center",
    category: "restaurant",
    titleZh: "小贩中心/夜市",
    titleEn: "Hawker Center / Night Market",
    description: "在东南亚小贩中心或夜市点餐",
    otherRole: "摊主",
    otherRoleIcon: "🏮",
    flows: [
      {
        id: "basic",
        titleZh: "基本点餐",
        titleEn: "Basic Hawker Order",
        description: "在小贩中心点一份",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Hi! What's this dish? It smells amazing.", textZh: "你好！这是什么菜？好香啊。" },
          {
            speaker: "them",
            role: "摊主",
            textEn: "This is chicken satay — grilled chicken skewers with peanut sauce. Very popular!",
            textZh: "这是沙嗲鸡——烤鸡肉串配花生酱。非常受欢迎！",
            keyPhrases: [
              { en: "chicken satay", zh: "沙嗲鸡" },
              { en: "skewers", zh: "肉串" },
              { en: "peanut sauce", zh: "花生酱" },
            ],
            alternativeExpressions: [
              {
                textEn: "Chicken satay! Grilled skewers with peanut dipping sauce. It's our number one.",
                textZh: "沙嗲鸡！烤串配花生蘸酱。我们这最火的。",
                actionHint: "更热情的推介",
                frequency: "common",
              },
              {
                textEn: "That's satay — chicken on sticks with peanut sauce. Everybody loves it!",
                textZh: "那是沙嗲——鸡肉串配花生酱。人人都爱！",
                actionHint: "极简口语",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll try that. How many pieces in one order?", textZh: "我试试。一份几串？" },
          {
            speaker: "them",
            role: "摊主",
            textEn: "One order is 10 sticks. You want?",
            textZh: "一份10串。要吗？",
            keyPhrases: [{ en: "sticks", zh: "串" }],
            alternativeExpressions: [
              {
                textEn: "It's 10 sticks per serving. Want one?",
                textZh: "每份10串。要一份吗？",
                actionHint: "用per serving更清楚",
                frequency: "common",
              },
              {
                textEn: "You get 10 pieces in one order. How about it?",
                textZh: "一份有10个。来一份？",
                actionHint: "用pieces替代sticks",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Yes, please. And can I get a drink too?", textZh: "好的。能来杯饮料吗？" },
          {
            speaker: "them",
            role: "摊主",
            textEn: "We have fresh coconut water, iced tea, and sugarcane juice.",
            textZh: "有新鲜椰子水、冰茶和甘蔗汁。",
            keyPhrases: [
              { en: "coconut water", zh: "椰子水" },
              { en: "sugarcane juice", zh: "甘蔗汁" },
            ],
            alternativeExpressions: [
              {
                textEn: "Coconut water, iced tea, or sugarcane juice. All cold and fresh!",
                textZh: "椰子水、冰茶或甘蔗汁。都是冰鲜的！",
                actionHint: "强调新鲜冰镇",
                frequency: "common",
              },
              {
                textEn: "Got coconut, iced tea, and fresh sugarcane. The coconut is really refreshing.",
                textZh: "有椰子水、冰茶和鲜榨甘蔗汁。椰子水特别解渴。",
                actionHint: "推荐椰子水",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A coconut water, please. How much is everything?",
            textZh: "来杯椰子水。一共多少钱？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Satay is $6 and coconut water is $3. Total $9.",
            textZh: "沙嗲6美元椰子水3美元。一共9美元。",
            keyPhrases: [{ en: "total", zh: "一共" }],
            alternativeExpressions: [
              {
                textEn: "That's $6 for the satay, $3 for the coconut. Nine bucks total.",
                textZh: "沙嗲6美元，椰子水3美元。一共9块。",
                actionHint: "用bucks更口语",
                frequency: "common",
              },
              {
                textEn: "Six and three — $9 altogether.",
                textZh: "6加3——一共9美元。",
                actionHint: "极简算账",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "逛夜市",
        titleEn: "Night Market Experience",
        description: "逛夜市尝试多种小吃",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, is this stall known for anything special?",
            textZh: "请问这个摊位有什么特色？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "We're famous for our Hainanese chicken rice! Been here for 30 years. You can see our awards on the wall.",
            textZh: "我们的海南鸡饭很有名！在这30年了。墙上可以看到我们的奖。",
            keyPhrases: [
              { en: "famous for", zh: "有名的" },
              { en: "Hainanese chicken rice", zh: "海南鸡饭" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Our Hainanese chicken rice is what we're known for! 30 years in business — check out the awards on the wall.",
                textZh: "我们以海南鸡饭出名！开了30年了——看看墙上的奖。",
                actionHint: "用known for替代famous for",
                frequency: "common",
              },
              {
                textEn: "Chicken rice is our thing! We've been at it for 30 years. All those awards up there are ours.",
                textZh: "鸡饭是我们的招牌！做了30年了。上面那些奖都是我们的。",
                actionHint: "自豪的口吻",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wow, I have to try it then. Is there a queue?",
            textZh: "那我一定要试试。要排队吗？",
            culturalNote: "在东南亚小贩中心，排长队的摊位通常意味着食物特别好吃。",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "About 10 minutes. It moves fast. You want steamed or roasted chicken?",
            textZh: "大约10分钟。很快的。要白切鸡还是烧鸡？",
            keyPhrases: [
              { en: "steamed or roasted", zh: "白切还是烧的" },
              { en: "queue", zh: "排队" },
            ],
            alternativeExpressions: [
              {
                textEn: "Maybe 10 minutes. The line goes quick. Steamed or roasted?",
                textZh: "大概10分钟。队伍走得快。白切还是烧的？",
                actionHint: "更简洁",
                frequency: "common",
              },
              {
                textEn: "Not long — 10 minutes tops. The queue moves fast. Do you prefer the steamed or the roasted?",
                textZh: "不久——最多10分钟。队很快。你喜欢白切还是烧的？",
                actionHint: "用tops表示最多",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What's the difference?", textZh: "有什么区别？" },
          {
            speaker: "them",
            role: "摊主",
            textEn:
              "Steamed is more traditional — silky and tender. Roasted has crispy skin. Most locals prefer steamed.",
            textZh: "白切的更传统——滑嫩。烧的皮脆。本地人大多喜欢白切。",
            keyPhrases: [
              { en: "silky and tender", zh: "滑嫩" },
              { en: "crispy skin", zh: "皮脆" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The steamed one is the classic — super smooth and juicy. The roasted has crunchy skin. Locals usually go steamed.",
                textZh: "白切是经典款——特别滑嫩多汁。烧的皮脆。本地人一般选白切。",
                actionHint: "用smooth and juicy",
                frequency: "common",
              },
              {
                textEn:
                  "If you want the authentic way, go steamed. It's melt-in-your-mouth tender. The roasted is more crispy.",
                textZh: "想吃正宗的就选白切。入口即化的嫩。烧的更脆。",
                actionHint: "推荐正宗吃法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with steamed. And do you have any chili sauce?",
            textZh: "我要白切的。有辣酱吗？",
          },
          {
            speaker: "them",
            role: "摊主",
            textEn: "Of course! We make our own chili sauce, ginger sauce, and dark soy sauce. All on the table.",
            textZh: "当然！我们自制辣酱、姜酱和黑酱油。桌上都有。",
            keyPhrases: [
              { en: "chili sauce", zh: "辣酱" },
              { en: "ginger sauce", zh: "姜酱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah! Our chili, ginger, and dark soy are all homemade. Help yourself — they're on every table.",
                textZh: "有！辣酱、姜酱和黑酱油都是自制的。随便取——每桌都有。",
                actionHint: "help yourself更地道",
                frequency: "common",
              },
              {
                textEn:
                  "Sure! We have three sauces — chili, ginger, and dark soy. All made in-house. They're right there on the table.",
                textZh: "当然！三种酱——辣酱、姜酱和黑酱油。都是自家做的。就在桌上。",
                actionHint: "强调自制",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I love trying local sauces. Thank you!", textZh: "我最喜欢尝当地的酱。谢谢！" },
        ],
      },
    ],
  },
  // ==================== 小费和特殊卡片 Tips & Special Cards ====================
  {
    id: "restaurant-tipping-guide",
    category: "restaurant",
    titleZh: "小费指南",
    titleEn: "Tipping Guide",
    description: "了解不同场景的小费规则和用语",
    otherRole: "服务员",
    otherRoleIcon: "💵",
    flows: [
      {
        id: "basic",
        titleZh: "基本小费",
        titleEn: "Basic Tipping",
        description: "在普通餐厅留小费",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here's your check. Take your time. No rush.",
            textZh: "这是您的账单。不着急。慢慢来。",
            keyPhrases: [
              { en: "here's your check", zh: "这是账单" },
              { en: "no rush", zh: "不着急" },
            ],
            alternativeExpressions: [
              {
                textEn: "Here you go — whenever you're ready.",
                textZh: "给您——准备好了再结。",
                actionHint: "更简短",
                frequency: "common",
              },
              {
                textEn: "I'll leave the check here. No hurry at all.",
                textZh: "账单放这里。完全不着急。",
                actionHint: "放下就走",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thanks. Can you explain the tip options on the screen?",
            textZh: "谢谢。能解释一下屏幕上的小费选项吗？",
            culturalNote: "美国餐厅一般给15-20%小费。刷卡时POS机通常会显示小费选项。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Sure! It shows 18%, 20%, and 25%, or you can enter a custom amount. The tip is based on your pre-tax total.",
            textZh: "当然！显示18%、20%和25%，或者自定义金额。小费按税前总价计算。",
            keyPhrases: [
              { en: "custom amount", zh: "自定义金额" },
              { en: "pre-tax total", zh: "税前总价" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course! The screen gives you 18, 20, or 25 percent, or you can type in your own. It's calculated on the subtotal before tax.",
                textZh: "当然！屏幕上有18%、20%或25%，也可以自己输入。是按税前小计算的。",
                actionHint: "用subtotal更专业",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, just pick one of the options on the screen — 18, 20, or 25 percent — or put in whatever you'd like. It's based on the pre-tax amount.",
                textZh: "对，选屏幕上的选项——18%、20%或25%——或者随便输。是按税前金额算的。",
                actionHint: "更口语化的解释",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "I'll do 20%. The service was great.", textZh: "我给20%。服务很好。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you so much! That's very generous. Have a wonderful evening!",
            textZh: "非常感谢！太慷慨了。祝你晚上愉快！",
            keyPhrases: [{ en: "generous", zh: "慷慨" }],
            alternativeExpressions: [
              {
                textEn: "Wow, thank you! That's so kind. Enjoy your night!",
                textZh: "哇，谢谢你！太客气了。晚上愉快！",
                actionHint: "更自然的惊喜感",
                frequency: "common",
              },
              {
                textEn: "That's really generous of you. Thank you and have a great rest of your evening!",
                textZh: "你太慷慨了。谢谢，祝你今晚余下时间愉快！",
                actionHint: "rest of your evening更完整",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "You too! The food was excellent.", textZh: "你也是！菜非常好。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Glad you enjoyed it! Hope to see you again soon.",
            textZh: "很高兴你喜欢！希望很快再见。",
            keyPhrases: [{ en: "hope to see you again", zh: "希望再见" }],
            alternativeExpressions: [
              {
                textEn: "So happy you liked it! Come back anytime.",
                textZh: "太高兴你喜欢了！随时再来。",
                actionHint: "come back anytime更热情",
                frequency: "common",
              },
              {
                textEn: "Thanks for coming in! We'd love to have you back.",
                textZh: "谢谢光临！欢迎再来。",
                actionHint: "感谢光临",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Definitely. Thanks again!", textZh: "一定。再次感谢！" },
        ],
      },
      {
        id: "intermediate",
        titleZh: "复杂小费场景",
        titleEn: "Complex Tipping Scenarios",
        description: "外卖、酒吧等场景的小费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Quick question — do I need to tip for takeout orders?",
            textZh: "问一下——外卖要给小费吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Tips for takeout are appreciated but not expected. Most people leave 10% or a couple of dollars.",
            textZh: "外卖小费很感谢但不是必须的。大多数人给10%或几美元。",
            keyPhrases: [{ en: "appreciated but not expected", zh: "感谢但不是必须的" }],
            alternativeExpressions: [
              {
                textEn:
                  "For takeout, tipping is totally optional. If people do tip, it's usually 10% or just a buck or two.",
                textZh: "外带的话小费完全可选。给的话一般10%或一两美元。",
                actionHint: "用totally optional更明确",
                frequency: "common",
              },
              {
                textEn:
                  "Honestly, most people don't tip on takeout, but it's always appreciated. A couple bucks or 10% is common.",
                textZh: "说实话大多数人外带不给小费，但给了我们很感激。几块钱或10%比较常见。",
                actionHint: "更坦诚的回答",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "And what about at bars? Per drink or total?", textZh: "酒吧呢？按杯还是按总价？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "At bars, it's common to tip $1-2 per drink, or 15-20% if you're running a tab.",
            textZh: "酒吧一般每杯给1-2美元小费，或者记账的话给15-20%。",
            keyPhrases: [
              { en: "per drink", zh: "每杯" },
              { en: "running a tab", zh: "记账" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For bars, a dollar or two a drink is standard. If you open a tab, tip 15 to 20 percent at the end.",
                textZh: "酒吧的话每杯一两美元是标准。开了账的话最后给15到20%。",
                actionHint: "分两种情况说",
                frequency: "common",
              },
              {
                textEn:
                  "Most people tip a buck a drink at a bar. If you've got a tab going, 20% when you close out is the norm.",
                textZh: "大多数人在酒吧每杯给一块钱。开了账的话结账时给20%是常规。",
                actionHint: "用close out更地道",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "What if the service was bad? Do I still have to tip?",
            textZh: "如果服务很差呢？还要给吗？",
            culturalNote: "在美国即使服务一般也建议至少给15%。服务员的底薪很低，主要靠小费。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Technically it's optional, but in the US, servers rely on tips as a major part of their income. Even for poor service, 10-15% is considered the minimum.",
            textZh: "理论上可选，但在美国服务员靠小费作为主要收入。即使服务不好，10-15%被认为是最低。",
            keyPhrases: [
              { en: "servers rely on tips", zh: "服务员靠小费" },
              { en: "minimum", zh: "最低" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's not required by law, but tipping is a big part of how servers make a living here. Even if the service wasn't great, 10-15% is the baseline.",
                textZh: "法律上不是强制的，但小费是服务员重要收入来源。即使服务一般，10-15%是底线。",
                actionHint: "用baseline替代minimum",
                frequency: "common",
              },
              {
                textEn:
                  "Legally you don't have to, but in practice, most servers depend on tips. Anything under 10% is really frowned upon.",
                textZh: "法律上不必须，但实际上大多数服务员靠小费。低于10%会被看不起。",
                actionHint: "更直白地解释文化",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Good to know. What about when there's already a service charge on the bill?",
            textZh: "好的。如果账单上已经有服务费呢？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "If there's a service charge or auto-gratuity — usually for groups of 6 or more — you don't need to tip extra unless you want to.",
            textZh: "如果有服务费或自动小费——通常6人以上——不需要额外给，除非你想。",
            keyPhrases: [
              { en: "auto-gratuity", zh: "自动小费" },
              { en: "service charge", zh: "服务费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Some places add an automatic gratuity for larger groups — usually 18%. If you see that on the bill, you're all set.",
                textZh: "有些地方对大桌会自动加小费——通常18%。如果账单上有的话就不用再给了。",
                actionHint: "给出具体比例",
                frequency: "common",
              },
              {
                textEn:
                  "For big groups, a lot of restaurants include the tip automatically. Check your bill — if it says gratuity included, no extra tip needed.",
                textZh: "人多的话很多餐厅会自动包含小费。看看账单——如果写了已含小费就不用额外给。",
                actionHint: "教查看账单",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "That's really helpful. Thank you for explaining!",
            textZh: "真的很有帮助。谢谢你解释！",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Happy to help! And just so you know, we really do appreciate good tippers. It means a lot to us.",
            textZh: "很高兴帮忙！而且告诉你，我们真的很感谢给小费慷慨的客人。对我们意义很大。",
            keyPhrases: [{ en: "means a lot", zh: "意义很大" }],
            alternativeExpressions: [
              {
                textEn: "Glad I could help! Honestly, a good tip really makes our day.",
                textZh: "很高兴能帮上忙！说真的，给得好的小费真的能让我们一天都开心。",
                actionHint: "makes our day更生动",
                frequency: "common",
              },
              {
                textEn: "Anytime! And trust me, we notice and remember the generous ones. It really does mean a lot.",
                textZh: "随时问！相信我，我们会注意到也会记住慷慨的客人。真的很感激。",
                actionHint: "更真诚的表达",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-dietary-card",
    category: "restaurant",
    titleZh: "饮食限制卡片",
    titleEn: "Dietary Restriction Card",
    description: "出示饮食限制卡片并与服务员沟通",
    otherRole: "服务员",
    otherRoleIcon: "🃏",
    flows: [
      {
        id: "basic",
        titleZh: "出示过敏卡",
        titleEn: "Show Allergy Card",
        description: "出示过敏信息卡片",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Before I order, I have a severe food allergy. Can I show you my allergy card?",
            textZh: "点餐前，我有严重的食物过敏。能给你看我的过敏卡吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course. Please show me. We take allergies very seriously here.",
            textZh: "当然。请给我看。我们这里非常重视过敏问题。",
            keyPhrases: [
              { en: "food allergy", zh: "食物过敏" },
              { en: "take allergies seriously", zh: "重视过敏" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely. Let me see the card. We're very careful about allergies.",
                textZh: "当然。让我看看卡片。我们对过敏非常小心。",
                actionHint: "直接要看卡",
                frequency: "common",
              },
              {
                textEn: "Thank you for telling us. May I have a look? We want to make sure everything is safe for you.",
                textZh: "谢谢告诉我们。能看一下吗？我们想确保一切对你安全。",
                actionHint: "强调安全",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I'm allergic to peanuts and tree nuts. It says it on this card in English and the local language.",
            textZh: "我对花生和坚果过敏。卡片上有英文和当地语言的说明。",
            culturalNote: "出国旅行建议准备一张多语言过敏卡，写清楚你的过敏原。可以在网上打印或用APP生成。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Thank you for telling me. Let me show this to the chef. Many of our dishes are nut-free, but I want to double-check.",
            textZh: "谢谢告诉我。我拿给厨师看。我们很多菜不含坚果，但我要再确认。",
            keyPhrases: [
              { en: "nut-free", zh: "不含坚果" },
              { en: "double-check", zh: "再确认" },
            ],
            alternativeExpressions: [
              {
                textEn: "I appreciate you letting me know. Let me run this by the chef to make sure we're good.",
                textZh: "感谢告知。我拿给厨师确认一下没问题。",
                actionHint: "用run this by更口语",
                frequency: "common",
              },
              {
                textEn:
                  "Got it. I'll check with the kitchen right away. Most things here are nut-free but I want to be 100% sure.",
                textZh: "了解。我马上跟厨房确认。这里大多数菜不含坚果，但我想百分百确认。",
                actionHint: "强调百分百确认",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "I appreciate that. Even traces can cause a reaction for me.",
            textZh: "非常感谢。即使微量也会让我有反应。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Understood. The chef says the grilled fish and steamed vegetables are completely safe. He'll prepare them separately.",
            textZh: "明白。厨师说烤鱼和蒸蔬菜完全安全。他会单独准备。",
            keyPhrases: [
              { en: "traces", zh: "微量" },
              { en: "prepare separately", zh: "单独准备" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good news — the chef confirmed the grilled fish and steamed veggies are totally safe. He'll use separate utensils.",
                textZh: "好消息——厨师确认烤鱼和蒸蔬菜完全安全。他会用单独的器具。",
                actionHint: "用good news开头",
                frequency: "common",
              },
              {
                textEn:
                  "I checked with the chef. The fish and veggies have zero nut contact. He'll prep them on a clean station.",
                textZh: "我跟厨师确认了。鱼和蔬菜完全不接触坚果。他会在干净的台面单独做。",
                actionHint: "更详细的安全措施",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "That sounds perfect. I'll have the grilled fish.", textZh: "太好了。我要烤鱼。" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Great. I've noted the allergy on your order. If you need anything else, please let me know.",
            textZh: "好的。我在你的单上标注了过敏信息。有需要随时叫我。",
            keyPhrases: [{ en: "noted the allergy", zh: "标注了过敏" }],
            alternativeExpressions: [
              {
                textEn: "Perfect. I've flagged the allergy on the ticket. Don't hesitate to ask if you need anything.",
                textZh: "好的。我在单上标了过敏标记。有需要别客气。",
                actionHint: "用flagged更专业",
                frequency: "common",
              },
              {
                textEn:
                  "All set. The allergy is marked on your order, and the kitchen knows. Just wave me down if you need anything.",
                textZh: "都好了。过敏标注在单上了，厨房也知道了。需要什么招手叫我。",
                actionHint: "确认厨房知情",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "素食宗教卡片",
        titleEn: "Vegetarian/Religious Card",
        description: "出示素食或宗教饮食限制卡片",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I follow a strict halal diet. I have a dietary card that explains what I can and can't eat.",
            textZh: "你好，我严格遵守清真饮食。我有一张饮食卡说明我能吃和不能吃的。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Thank you for letting us know. May I see the card?",
            textZh: "谢谢告知。能看看卡片吗？",
            keyPhrases: [{ en: "halal diet", zh: "清真饮食" }],
            alternativeExpressions: [
              {
                textEn: "Of course, thanks for telling us. Can I take a look at your card?",
                textZh: "当然，谢谢你告诉我们。我能看看你的卡片吗？",
                actionHint: "更完整的回应",
                frequency: "common",
              },
              {
                textEn: "I appreciate you mentioning that. Do you have a card I can show the kitchen?",
                textZh: "感谢你提到这个。有卡片可以让我给厨房看吗？",
                actionHint: "提到给厨房看",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn:
              "Here you go. The key points are: no pork, no alcohol in cooking, and meat must be halal-certified.",
            textZh: "给你。重点是：不吃猪肉，烹饪不用酒，肉类必须清真认证。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I understand. Unfortunately, we don't have halal-certified meat, but we have excellent seafood and vegetarian dishes that would work.",
            textZh: "明白。遗憾的是我们没有清真认证的肉，但有很好的海鲜和素菜可以选。",
            keyPhrases: [{ en: "halal-certified", zh: "清真认证" }],
            alternativeExpressions: [
              {
                textEn:
                  "Got it. We don't carry halal meat, but our seafood and veggie options are great and would be perfectly fine.",
                textZh: "了解。我们没有清真肉，但海鲜和素菜选择很多也完全没问题。",
                actionHint: "更直接的说法",
                frequency: "common",
              },
              {
                textEn:
                  "I see. Our meat isn't halal-certified, I'm afraid. But I can recommend some wonderful seafood and vegetarian dishes instead.",
                textZh: "我明白。恐怕我们的肉不是清真认证的。不过我可以推荐一些很棒的海鲜和素菜。",
                actionHint: "主动推荐替代",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Seafood would be fine. Which dishes don't contain any alcohol or pork products?",
            textZh: "海鲜可以。哪些菜完全不含酒精或猪肉产品？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The grilled salmon is made with olive oil, lemon, and herbs — no alcohol. The shrimp stir-fry is also safe, but let me confirm the sauce ingredients.",
            textZh: "烤三文鱼用橄榄油、柠檬和香草——没有酒精。虾炒也安全，但让我确认酱料成分。",
            keyPhrases: [{ en: "sauce ingredients", zh: "酱料成分" }],
            alternativeExpressions: [
              {
                textEn:
                  "The salmon is just olive oil, lemon, and herbs — totally alcohol-free. The shrimp should be fine too, but let me verify the sauce.",
                textZh: "三文鱼只用橄榄油、柠檬和香草——完全无酒精。虾应该也没问题，但让我确认酱料。",
                actionHint: "用totally alcohol-free",
                frequency: "common",
              },
              {
                textEn:
                  "Our grilled salmon doesn't use any alcohol in the prep. For the shrimp, I want to double-check what's in the sauce before I say yes.",
                textZh: "我们的烤三文鱼制作过程不用酒精。虾的话我想先确认酱里有什么再回答你。",
                actionHint: "更谨慎的回应",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Please check. Some sauces contain mirin or wine that isn't obvious.",
            textZh: "请确认。有些酱里含味醂或酒不太明显。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good point. I've confirmed with the chef — the stir-fry sauce uses soy sauce and sesame oil only. Both dishes are safe for your diet.",
            textZh: "说得对。我跟厨师确认了——炒菜酱只用酱油和芝麻油。两道菜都符合你的饮食。",
            keyPhrases: [{ en: "confirmed with the chef", zh: "跟厨师确认了" }],
            alternativeExpressions: [
              {
                textEn:
                  "Great question. I just checked — it's only soy sauce and sesame oil. You're good with both dishes.",
                textZh: "问得好。我刚确认了——只有酱油和芝麻油。两道菜都没问题。",
                actionHint: "用you're good更口语",
                frequency: "common",
              },
              {
                textEn:
                  "I asked the chef and he confirmed — no alcohol or pork products in either dish. The sauce is just soy and sesame oil.",
                textZh: "我问了厨师他确认了——两道菜都没有酒精或猪肉成分。酱只有酱油和芝麻油。",
                actionHint: "明确排除猪肉和酒精",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Wonderful. I really appreciate you being so thorough. I'll have both.",
            textZh: "太好了。真的很感谢你这么仔细。两个都要。",
          },
        ],
      },
    ],
  },
  // ==================== 儿童 Kids ====================
  {
    id: "restaurant-kids-menu",
    category: "restaurant",
    titleZh: "儿童菜单",
    titleEn: "Kids Menu",
    description: "为孩子点儿童餐",
    otherRole: "服务员",
    otherRoleIcon: "👶",
    flows: [
      {
        id: "basic",
        titleZh: "点儿童餐",
        titleEn: "Order Kids Meal",
        description: "看儿童菜单为孩子点餐",
        difficulty: "basic",
        turns: [
          { speaker: "you", textEn: "Do you have a kids' menu?", textZh: "有儿童菜单吗？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes! Here you go. All kids' meals come with a drink and a side.",
            textZh: "有的！给你。所有儿童餐都配饮料和配菜。",
            keyPhrases: [
              { en: "kids' menu", zh: "儿童菜单" },
              { en: "come with", zh: "配" },
            ],
            alternativeExpressions: [
              {
                textEn: "We sure do! Here's the kids' menu. Every meal includes a drink and a side.",
                textZh: "当然有！这是儿童菜单。每份都包含饮料和配菜。",
                actionHint: "用includes替代come with",
                frequency: "common",
              },
              {
                textEn: "Absolutely! Take a look. Each kids' meal is a combo — food, a drink, and a side.",
                textZh: "当然！看看吧。每个儿童餐都是套餐——主食、饮料和配菜。",
                actionHint: "用combo概括",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "What sides are available for kids?", textZh: "儿童餐有什么配菜？" },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Fries, apple slices, or a fruit cup.",
            textZh: "薯条、苹果片或水果杯。",
            keyPhrases: [
              { en: "apple slices", zh: "苹果片" },
              { en: "fruit cup", zh: "水果杯" },
            ],
            alternativeExpressions: [
              {
                textEn: "The side options are fries, apple slices, or fresh fruit.",
                textZh: "配菜选项有薯条、苹果片或新鲜水果。",
                actionHint: "完整句式",
                frequency: "common",
              },
              {
                textEn: "You can pick fries, apples, or a fruit cup to go with it.",
                textZh: "可以选薯条、苹果片或水果杯搭配。",
                actionHint: "用to go with it",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "She'll have the grilled cheese with apple slices. And chocolate milk to drink.",
            textZh: "她要烤芝士三明治配苹果片。喝巧克力牛奶。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it! And do you need a booster seat?",
            textZh: "好的！需要增高座垫吗？",
            keyPhrases: [{ en: "booster seat", zh: "增高座垫" }],
            alternativeExpressions: [
              {
                textEn: "Perfect! Does the little one need a booster seat or a highchair?",
                textZh: "好的！小朋友需要增高座垫还是儿童椅？",
                actionHint: "提供两个选项",
                frequency: "common",
              },
              {
                textEn: "Noted! Would you like a booster for your child?",
                textZh: "记下了！要给孩子拿个增高垫吗？",
                actionHint: "简洁问法",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "No, she's big enough. But could we get some crayons?",
            textZh: "不用，她够大了。但能给些蜡笔吗？",
            culturalNote: "美国很多家庭餐厅会给小孩提供蜡笔和涂色纸。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! Here are some crayons and a coloring sheet. We also have stickers!",
            textZh: "当然！给你蜡笔和涂色纸。还有贴纸！",
            keyPhrases: [
              { en: "crayons", zh: "蜡笔" },
              { en: "coloring sheet", zh: "涂色纸" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! We've got crayons, a coloring page, and stickers for the kiddos.",
                textZh: "当然！有蜡笔、涂色纸和贴纸给小朋友。",
                actionHint: "用kiddos更亲切",
                frequency: "common",
              },
              {
                textEn: "Here you go — crayons and a coloring sheet to keep them busy. Oh, and stickers too!",
                textZh: "给你——蜡笔和涂色纸让他们忙着。对了，还有贴纸！",
                actionHint: "keep them busy很实用",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "特殊饮食儿童餐",
        titleEn: "Special Dietary Kids Meal",
        description: "为有饮食限制的孩子点餐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "My son has a dairy allergy. Are there any kids' meals without cheese or butter?",
            textZh: "我儿子乳制品过敏。有不含芝士或黄油的儿童餐吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Let me check... The chicken tenders can be made without butter, and the pasta can be done with olive oil instead of cream sauce.",
            textZh: "我查一下……鸡柳可以不用黄油做，意面可以用橄榄油代替奶油酱。",
            keyPhrases: [
              { en: "dairy allergy", zh: "乳制品过敏" },
              { en: "made without", zh: "不用...做" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Let me see... We can do the chicken tenders dairy-free, and the pasta with olive oil instead of cream.",
                textZh: "我看看……鸡柳可以做无乳制品的，意面用橄榄油代替奶油。",
                actionHint: "用dairy-free更直接",
                frequency: "common",
              },
              {
                textEn:
                  "Good question. The tenders we can prepare without butter, no problem. And I can swap the cream sauce on the pasta for olive oil.",
                textZh: "好问题。鸡柳不用黄油做完全没问题。意面的奶油酱也可以换成橄榄油。",
                actionHint: "用swap更口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Are the chicken tenders breaded? He can eat gluten, just no dairy.",
            textZh: "鸡柳是裹面包屑的吗？他可以吃麸质，只是不能吃乳制品。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, they're breaded but the breading doesn't contain dairy. I've confirmed with the kitchen.",
            textZh: "是的，裹了面包屑但里面不含乳制品。我跟厨房确认了。",
            keyPhrases: [
              { en: "breaded", zh: "裹面包屑的" },
              { en: "doesn't contain dairy", zh: "不含乳制品" },
            ],
            alternativeExpressions: [
              {
                textEn: "They are breaded, but I just checked and the breading is dairy-free. You're safe.",
                textZh: "是裹了面包屑的，但我刚确认面包屑不含乳制品。没问题。",
                actionHint: "用you're safe让人安心",
                frequency: "common",
              },
              {
                textEn:
                  "Yeah, they have breading on them, but no dairy in it whatsoever. I double-checked with the chef.",
                textZh: "对，有面包屑，但完全不含乳制品。我跟厨师再三确认了。",
                actionHint: "强调完全不含",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Great. He'll have the chicken tenders with the fruit cup. What dipping sauces are dairy-free?",
            textZh: "好的。他要鸡柳配水果杯。什么蘸酱不含乳制品？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Ketchup, BBQ sauce, and honey mustard are all dairy-free. The ranch has dairy.",
            textZh: "番茄酱、烧烤酱和蜂蜜芥末都不含乳制品。田园酱含乳制品。",
            keyPhrases: [
              { en: "dipping sauces", zh: "蘸酱" },
              { en: "dairy-free", zh: "不含乳制品" },
            ],
            alternativeExpressions: [
              {
                textEn: "The ketchup, BBQ, and honey mustard are all safe. Just avoid the ranch — that one has dairy.",
                textZh: "番茄酱、烧烤酱和蜂蜜芥末都安全。别选田园酱——那个含乳制品。",
                actionHint: "用safe和avoid更清晰",
                frequency: "common",
              },
              {
                textEn: "Three out of four are dairy-free: ketchup, BBQ, and honey mustard. Skip the ranch though.",
                textZh: "四种里三种不含乳制品：番茄酱、烧烤酱和蜂蜜芥末。田园酱要跳过。",
                actionHint: "数字概括更清楚",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Ketchup and BBQ sauce, please. And can he have apple juice instead of milk?",
            textZh: "番茄酱和烧烤酱。饮料能把牛奶换成苹果汁吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely. I'll make a note on the order about the dairy allergy so the kitchen is extra careful.",
            textZh: "当然。我在单上标注乳制品过敏让厨房格外注意。",
            keyPhrases: [
              { en: "make a note", zh: "标注" },
              { en: "extra careful", zh: "格外注意" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Of course. I'll flag the dairy allergy on the ticket. The kitchen will take extra precautions.",
                textZh: "当然。我会在单上标注乳制品过敏。厨房会格外小心。",
                actionHint: "用precautions更专业",
                frequency: "common",
              },
              {
                textEn:
                  "Sure thing. I'm putting a big note on the order — dairy allergy. The kitchen will handle it carefully.",
                textZh: "没问题。我在单上做个大标记——乳制品过敏。厨房会仔细处理。",
                actionHint: "大标记更让人放心",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Thank you so much for being so helpful.", textZh: "非常感谢你这么耐心帮忙。" },
        ],
      },
    ],
  },
  {
    id: "restaurant-highchair",
    category: "restaurant",
    titleZh: "要儿童椅",
    titleEn: "Requesting a Highchair",
    description: "到餐厅为小孩要儿童椅和相关服务",
    otherRole: "服务员/领位员",
    otherRoleIcon: "🪑",
    flows: [
      {
        id: "basic",
        titleZh: "要儿童椅",
        titleEn: "Ask for Highchair",
        description: "到餐厅为宝宝要儿童椅",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, table for three, please. And do you have a highchair for a baby?",
            textZh: "你好，三位。有宝宝的儿童椅吗？",
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Of course! Let me grab one. Would you prefer a booth or a table?",
            textZh: "当然！我去拿。你想坐卡座还是桌子？",
            keyPhrases: [
              { en: "highchair", zh: "儿童椅" },
              { en: "booth or table", zh: "卡座还是桌子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! I'll get a highchair. Do you want a booth or a regular table?",
                textZh: "没问题！我去拿儿童椅。要卡座还是普通桌？",
                actionHint: "加regular table对比",
                frequency: "common",
              },
              {
                textEn: "Absolutely! We have highchairs right here. Booth or table — any preference?",
                textZh: "当然！儿童椅就在这。卡座还是桌子——有偏好吗？",
                actionHint: "表示现成就有",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A booth would be great, if there's room for the highchair.",
            textZh: "卡座最好，如果放得下儿童椅的话。",
            culturalNote: "Booth（卡座）是靠墙的沙发座位，比较适合带小孩因为比较封闭。",
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Sure! I'll set the highchair at the end of the booth. Follow me, please.",
            textZh: "好的！我把儿童椅放在卡座一头。请跟我来。",
            keyPhrases: [{ en: "at the end of", zh: "在一头" }],
            alternativeExpressions: [
              {
                textEn: "Great! I'll put the highchair right at the end. Come on, follow me.",
                textZh: "好的！我把儿童椅放在最外头。来，跟我走。",
                actionHint: "更随意的引导",
                frequency: "common",
              },
              {
                textEn: "Perfect. The highchair goes at the end of the booth. Right this way!",
                textZh: "好的。儿童椅放卡座外侧。这边请！",
                actionHint: "用right this way更正式",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Thank you. Could we also get some extra napkins? Babies are messy.",
            textZh: "谢谢。能多拿些餐巾纸吗？宝宝吃得乱。",
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Ha, of course! I'll bring plenty. Here's your table.",
            textZh: "哈，当然！我多拿点。这是你们的桌。",
            keyPhrases: [{ en: "extra napkins", zh: "多拿些餐巾纸" }],
            alternativeExpressions: [
              {
                textEn: "No problem! I'll grab a stack. Here we are — this is your table.",
                textZh: "没问题！我拿一摞来。到了——这是你们的桌。",
                actionHint: "用a stack表示一摞",
                frequency: "common",
              },
              {
                textEn: "Been there! I'll bring a whole bunch. Have a seat right here.",
                textZh: "理解！我多拿一些。请坐这里。",
                actionHint: "表示感同身受",
                frequency: "occasional",
              },
            ],
          },
          { speaker: "you", textEn: "Is there somewhere I can warm up a baby bottle?", textZh: "有地方可以热奶瓶吗？" },
          {
            speaker: "them",
            role: "领位员",
            textEn: "We can warm it up in the kitchen for you. Just give it to your server when they come by.",
            textZh: "可以在厨房帮你热。服务员来了给他们就行。",
            keyPhrases: [{ en: "warm up a baby bottle", zh: "热奶瓶" }],
            alternativeExpressions: [
              {
                textEn: "Sure! Hand it to your server and they'll heat it up in the kitchen.",
                textZh: "当然！给服务员，他们会在厨房帮你加热。",
                actionHint: "更简洁的指引",
                frequency: "common",
              },
              {
                textEn: "Absolutely. Just let your server know and they'll take care of it. We do it all the time.",
                textZh: "当然。跟服务员说一声就行。我们经常帮客人热。",
                actionHint: "让家长安心",
                frequency: "occasional",
              },
            ],
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "带幼儿用餐需求",
        titleEn: "Dining with a Toddler",
        description: "带幼儿用餐的各种需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We have a two-year-old with us. Do you have a toddler-friendly setup?",
            textZh: "我们带了个两岁的。有适合幼儿的安排吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes! We have highchairs and booster seats. We can also provide a plastic plate and cup.",
            textZh: "有的！有儿童椅和增高座垫。也可以提供塑料餐盘和杯子。",
            keyPhrases: [
              { en: "toddler-friendly", zh: "适合幼儿的" },
              { en: "plastic plate and cup", zh: "塑料餐盘和杯子" },
            ],
            alternativeExpressions: [
              {
                textEn: "Absolutely! We've got highchairs, boosters, and kid-friendly plates and cups.",
                textZh: "当然有！有儿童椅、增高垫和适合孩子的餐盘杯子。",
                actionHint: "用kid-friendly概括",
                frequency: "common",
              },
              {
                textEn: "We sure do! Highchairs, booster seats — and I can bring over a plastic plate and a sippy cup.",
                textZh: "当然！儿童椅、增高垫——我还可以拿个塑料盘和防溢杯来。",
                actionHint: "加sippy cup更贴心",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "A booster seat and plastic cup would be great. Is there a changing table in the restroom?",
            textZh: "增高座垫和塑料杯就好。卫生间有换尿布台吗？",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, there's a changing table in both restrooms. They're down the hall to the left.",
            textZh: "有的，两个卫生间都有换尿布台。走廊左边。",
            keyPhrases: [{ en: "changing table", zh: "换尿布台" }],
            alternativeExpressions: [
              {
                textEn: "Yep! Both restrooms have changing tables. Just head down that hallway on the left.",
                textZh: "有的！两个卫生间都有换尿布台。沿那个走廊往左走。",
                actionHint: "指方向更具体",
                frequency: "common",
              },
              {
                textEn: "We do! There's one in each restroom. Go straight down the hall, restrooms are on your left.",
                textZh: "有的！每个卫生间都有。沿走廊直走，卫生间在左边。",
                actionHint: "更详细的指路",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can we order his food first so it comes out quickly? He gets fussy when he's hungry.",
            textZh: "好的。能先点他的菜快点上吗？他饿了会闹。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! What would he like? I can have the kitchen prioritize it.",
            textZh: "当然！他要什么？我让厨房优先做。",
            keyPhrases: [
              { en: "gets fussy", zh: "会闹" },
              { en: "prioritize", zh: "优先" },
            ],
            alternativeExpressions: [
              {
                textEn: "Of course! Tell me what he wants and I'll rush it to the kitchen.",
                textZh: "当然！告诉我他要什么，我让厨房加急。",
                actionHint: "用rush更紧迫",
                frequency: "common",
              },
              {
                textEn: "Sure! Let's get his food going first. What does he want?",
                textZh: "好的！先点他的。他要什么？",
                actionHint: "get going更口语",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "Just some plain pasta with butter, cut into small pieces, please.",
            textZh: "就要一份纯黄油意面，切成小块。",
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course. I'll ask the kitchen to cool it down a bit too, so it's safe for him. And I'll bring some crackers to hold him over.",
            textZh: "当然。我让厨房也放凉一点，这样他吃安全。我先拿些饼干给他垫垫。",
            keyPhrases: [
              { en: "cool it down", zh: "放凉" },
              { en: "hold him over", zh: "先垫垫" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure! I'll have them cool it down so it's not too hot. And let me grab some crackers for him in the meantime.",
                textZh: "好的！我让他们放凉别太烫。我先拿些饼干给他。",
                actionHint: "in the meantime同时",
                frequency: "common",
              },
              {
                textEn:
                  "No problem. I'll make sure it comes out at a safe temperature. Here, let me get him some crackers to munch on while he waits.",
                textZh: "没问题。我确保出来的温度安全。来，我给他拿些饼干先吃着。",
                actionHint: "munch on更生动",
                frequency: "occasional",
              },
            ],
          },
          {
            speaker: "you",
            textEn: "You're a lifesaver. Thank you so much!",
            textZh: "你救了我。太感谢了！",
            culturalNote: "\'You're a lifesaver\' 是常用口语表达，意思是你帮了大忙。",
          },
        ],
      },
    ],
  },

  // ==================== 点蛋 Ordering Eggs ====================
  {
    id: "restaurant-eggs-how",
    tags: ["eggs", "鸡蛋", "breakfast", "早餐", "scrambled", "over easy", "sunny side up", "diner"],
    category: "restaurant",
    titleZh: "美式早餐点蛋",
    titleEn: "Ordering Eggs at Breakfast",
    description: '在美式早餐店或diner点蛋，理解服务员问的"How would you like your eggs?"并回答',
    otherRole: "早餐店服务员",
    otherRoleIcon: "🍳",
    flows: [
      // --- Flow 1: 标准点蛋（顺利）---
      {
        id: "standard",
        titleZh: "标准点蛋",
        titleEn: "Standard Egg Order",
        description: "在 diner 点早餐，服务员问鸡蛋怎么做，你顺利回答",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good morning! What can I get for you today?",
            textZh: "早上好！今天想吃点什么？",
            keyPhrases: [{ en: "What can I get for you", zh: "想吃点什么" }],
            alternativeExpressions: [
              {
                textEn: "Morning! Ready to order?",
                textZh: "早！可以点餐了吗？",
                actionHint: "直接说你想要什么",
                frequency: "common",
              },
              {
                textEn: "Hi there! Know what you'd like?",
                textZh: "你好！想好了吗？",
                actionHint: "如果还没看完菜单可以说 I need a minute",
                frequency: "common",
              },
            ],
            casualVersion: "Morning! Whatcha having?",
            formalityVariants: {
              casual: "Morning! Whatcha having?",
              standard: "Good morning! What can I get for you today?",
              formal: "Good morning. May I take your order?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll have the breakfast special, please.",
            textZh: "我要早餐特价套餐。",
            culturalNote:
              "美式 diner 通常有 breakfast special 或 breakfast combo，包含蛋、培根/香肠、吐司和土豆饼，价格比单点便宜。",
            casualVersion: "Can I get the breakfast special?",
            commonMistake: {
              wrong: "I want the breakfast special.",
              correct: "I'll have the breakfast special, please.",
              explanation: '"I want" 比较生硬，"I\'ll have" 更礼貌自然，加 please 是标配。',
            },
            formalityVariants: {
              casual: "Lemme get the breakfast special.",
              standard: "I'll have the breakfast special, please.",
              formal: "I would like the breakfast special, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! How would you like your eggs?",
            textZh: "好的！鸡蛋要怎么做？",
            keyPhrases: [{ en: "How would you like your eggs", zh: "鸡蛋要怎么做" }],
            alternativeExpressions: [
              {
                textEn: "And how do you want your eggs?",
                textZh: "蛋要怎么做？",
                actionHint: "回答你想要的蛋的做法",
                frequency: "common",
              },
              {
                textEn: "Eggs: scrambled, fried, or over easy?",
                textZh: "蛋：炒、煎、还是半熟翻面？",
                actionHint: "从给出的选项里选一个",
                frequency: "common",
              },
            ],
            culturalNote: "这是中国人在美国早餐店最容易懵的一个问题。在中国很少被问蛋要怎么做，但在美国这是标准流程。",
            casualVersion: "How d'ya want your eggs?",
            formalityVariants: {
              casual: "How d'ya want your eggs?",
              standard: "How would you like your eggs?",
              formal: "And how would you prefer your eggs prepared?",
            },
          },
          {
            speaker: "you",
            textEn: "Scrambled, please.",
            textZh: "炒蛋，谢谢。",
            culturalNote: "scrambled（炒蛋）是最安全的选择，如果你不确定要什么。美式炒蛋通常比中式炒蛋更嫩更湿。",
            vocabNotes: {
              scrambled: {
                meaningInContext: "在这里指炒蛋，蛋液搅散后在锅里翻炒",
                similarUsage: "I'll have scrambled eggs with toast.",
              },
            },
            casualVersion: "Scrambled's fine.",
            formalityVariants: {
              casual: "Scrambled's fine.",
              standard: "Scrambled, please.",
              formal: "I would like them scrambled, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "And for your toast — white, wheat, or sourdough?",
            textZh: "吐司要哪种 — 白面包、全麦、还是酸面包？",
            keyPhrases: [{ en: "white, wheat, or sourdough", zh: "白面包、全麦、酸面包" }],
            alternativeExpressions: [
              { textEn: "What kind of toast?", textZh: "要什么吐司？", actionHint: "选一种面包", frequency: "common" },
              {
                textEn: "Toast choice: white, wheat, rye, or sourdough?",
                textZh: "吐司选择：白面包、全麦、黑麦、还是酸面包？",
                actionHint: "从选项中选一个，不确定就说 wheat",
                frequency: "occasional",
              },
            ],
            culturalNote:
              "在中国吃早餐很少被问这么多选择，但美式 diner 的标配就是一连串的定制问题：蛋怎么做、吐司选什么、要不要土豆饼。",
            casualVersion: "White, wheat, or sourdough for your toast?",
            formalityVariants: {
              casual: "White, wheat, or sourdough?",
              standard: "And for your toast — white, wheat, or sourdough?",
              formal: "And which type of toast would you prefer — white, wheat, or sourdough?",
            },
          },
          {
            speaker: "you",
            textEn: "Wheat, please.",
            textZh: "全麦的，谢谢。",
            casualVersion: "Wheat's good.",
            formalityVariants: {
              casual: "Wheat's good.",
              standard: "Wheat, please.",
              formal: "Wheat toast, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Anything to drink? Coffee?",
            textZh: "要喝点什么吗？咖啡？",
            keyPhrases: [{ en: "anything to drink", zh: "要喝什么" }],
            alternativeExpressions: [
              {
                textEn: "Can I get you some coffee or juice?",
                textZh: "来杯咖啡还是果汁？",
                actionHint: "选一个饮品，或者说 just water 要白水",
                frequency: "common",
              },
            ],
            casualVersion: "Coffee?",
            formalityVariants: {
              casual: "Coffee?",
              standard: "Anything to drink? Coffee?",
              formal: "May I offer you a beverage? Perhaps some coffee?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, coffee please. Black.",
            textZh: "好的，来杯咖啡。黑咖啡。",
            culturalNote:
              '美式 diner 的咖啡通常无限续杯（free refills），服务员会不时过来给你加满。"Black" 意思是不加奶不加糖。',
            casualVersion: "Yeah, coffee. Black.",
            formalityVariants: {
              casual: "Yeah, coffee. Black.",
              standard: "Yes, coffee please. Black.",
              formal: "Yes, I would like a black coffee, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Coming right up!",
            textZh: "马上来！",
            keyPhrases: [{ en: "coming right up", zh: "马上来" }],
            alternativeExpressions: [
              { textEn: "You got it!", textZh: "没问题！", actionHint: "等着就行", frequency: "common" },
              {
                textEn: "I'll get that started for you.",
                textZh: "我这就去准备。",
                actionHint: "耐心等待即可",
                frequency: "common",
              },
            ],
            casualVersion: "You got it!",
            formalityVariants: {
              casual: "You got it!",
              standard: "Coming right up!",
              formal: "Certainly. I will have that prepared for you shortly.",
            },
          },
        ],
      },
      // --- Flow 2: 不确定怎么选（需要解释）---
      {
        id: "need-explanation",
        titleZh: "不知道蛋怎么选",
        titleEn: "Unsure About Egg Styles",
        description: "服务员问蛋怎么做，你不确定各种做法的区别，需要询问",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "How would you like your eggs? We do scrambled, fried, over easy, over medium, over hard, poached, or sunny side up.",
            textZh: "鸡蛋要怎么做？我们有炒蛋、煎蛋、半熟翻面、中熟翻面、全熟翻面、水波蛋、或者单面煎蛋。",
            keyPhrases: [
              { en: "scrambled", zh: "炒蛋" },
              { en: "fried", zh: "煎蛋" },
              { en: "over easy", zh: "翻面半熟（蛋黄流动）" },
              { en: "over medium", zh: "翻面中熟（蛋黄半凝固）" },
              { en: "over hard", zh: "翻面全熟（蛋黄完全凝固）" },
              { en: "sunny side up", zh: "太阳蛋/单面煎（不翻面，蛋黄朝上）" },
              { en: "poached", zh: "水波蛋（蛋打入热水中煮）" },
            ],
            culturalNote:
              "这一长串选项是中国人最容易懵的时刻。别慌，不确定就直接问 what's the difference，或者选 scrambled（最安全）。",
            casualVersion: "Eggs: scrambled, over easy, sunny side up — how d'you want 'em?",
            formalityVariants: {
              casual: "Eggs: scrambled, over easy, sunny side up — how d'you want 'em?",
              standard:
                "How would you like your eggs? We do scrambled, fried, over easy, over medium, over hard, poached, or sunny side up.",
              formal:
                "How would you prefer your eggs prepared? Our options include scrambled, fried in various styles, poached, or sunny side up.",
            },
          },
          {
            speaker: "you",
            textEn: "Um, what's the difference between over easy and sunny side up?",
            textZh: "嗯，over easy 和 sunny side up 有什么区别？",
            culturalNote: "在美国问服务员解释菜单是完全正常的，不会被嫌弃。这是他们工作的一部分。",
            commonMistake: {
              wrong: "What is over easy?",
              correct: "What's the difference between over easy and sunny side up?",
              explanation: "一次问两个对比，服务员更容易解释清楚，你也能更快做决定。",
            },
            casualVersion: "What's over easy again?",
            formalityVariants: {
              casual: "What's over easy again?",
              standard: "What's the difference between over easy and sunny side up?",
              formal: "Could you explain the difference between over easy and sunny side up?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Sure! Sunny side up, we don't flip it — the yolk stays runny on top. Over easy, we flip it real quick so both sides get a little cooked, but the yolk is still runny inside.",
            textZh:
              "当然！Sunny side up 不翻面，蛋黄在上面是流动的。Over easy 快速翻一面，两面都稍微煎一下，但蛋黄里面还是流动的。",
            keyPhrases: [
              { en: "don't flip it", zh: "不翻面" },
              { en: "the yolk stays runny", zh: "蛋黄是流动的" },
              { en: "flip it real quick", zh: "快速翻一面" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sunny side up is one side only. Over easy is flipped but still runny.",
                textZh: "Sunny side up 只煎一面。Over easy 翻面但还是半熟。",
                actionHint: "选你喜欢的那种",
                frequency: "common",
              },
            ],
            casualVersion: "Sunny side up — no flip, runny yolk. Over easy — flip it, but yolk's still runny.",
            formalityVariants: {
              casual: "Sunny side up — no flip, runny yolk. Over easy — flip it, but yolk's still runny.",
              standard:
                "Sure! Sunny side up, we don't flip it — the yolk stays runny on top. Over easy, we flip it real quick so both sides get a little cooked, but the yolk is still runny inside.",
              formal:
                "Certainly. With sunny side up, the egg is cooked on one side only, leaving the yolk unbroken and liquid. Over easy means we briefly flip the egg so both sides receive heat, though the yolk remains runny.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. I'll go with over easy then.",
            textZh: "明白了。那我要 over easy。",
            casualVersion: "Cool, over easy.",
            formalityVariants: {
              casual: "Cool, over easy.",
              standard: "Got it. I'll go with over easy then.",
              formal: "I see. I will have them over easy, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good choice! Hash browns or home fries with that?",
            textZh: "选得好！要薯饼还是煎土豆块？",
            keyPhrases: [
              { en: "hash browns", zh: "薯饼（碎土豆煎成饼状）" },
              { en: "home fries", zh: "煎土豆块（切块后煎，带洋葱和青椒）" },
            ],
            alternativeExpressions: [
              {
                textEn: "Comes with a side of potatoes — hash browns or home fries?",
                textZh: "配一份土豆 — 薯饼还是煎土豆块？",
                actionHint: "选一个，不确定就选 hash browns",
                frequency: "common",
              },
            ],
            culturalNote:
              "美式早餐几乎一定配土豆制品。hash browns 是把土豆刨丝压成饼煎得酥脆，home fries 是切块加洋葱辣椒炒的。",
            casualVersion: "Hash browns or home fries?",
            formalityVariants: {
              casual: "Hash browns or home fries?",
              standard: "Good choice! Hash browns or home fries with that?",
              formal: "Excellent choice. Would you prefer hash browns or home fries as your side?",
            },
          },
          {
            speaker: "you",
            textEn: "Hash browns, please.",
            textZh: "薯饼，谢谢。",
            casualVersion: "Hash browns.",
            formalityVariants: {
              casual: "Hash browns.",
              standard: "Hash browns, please.",
              formal: "Hash browns, if you please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "And your toast — white, wheat, sourdough, or rye?",
            textZh: "吐司呢 — 白面包、全麦、酸面包、还是黑麦？",
            keyPhrases: [{ en: "rye", zh: "黑麦面包（微酸，常配 pastrami 三明治）" }],
            casualVersion: "Toast?",
            formalityVariants: {
              casual: "Toast?",
              standard: "And your toast — white, wheat, sourdough, or rye?",
              formal: "And which variety of toast would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn: "Sourdough sounds good.",
            textZh: "酸面包听起来不错。",
            culturalNote: "sourdough（酸面包）在旧金山特别有名，外壳酥脆、内里柔软、微酸，是很受欢迎的选择。",
            casualVersion: "Sourdough.",
            formalityVariants: {
              casual: "Sourdough.",
              standard: "Sourdough sounds good.",
              formal: "I will have the sourdough, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Perfect. And to drink?",
            textZh: "好的。喝点什么？",
            casualVersion: "Drink?",
            formalityVariants: {
              casual: "Drink?",
              standard: "Perfect. And to drink?",
              formal: "Wonderful. And what would you like to drink?",
            },
          },
          {
            speaker: "you",
            textEn: "Orange juice and a coffee, please.",
            textZh: "一杯橙汁和一杯咖啡，谢谢。",
            culturalNote: "美式 diner 咖啡无限续杯是常态。橙汁通常不续杯。",
            casualVersion: "OJ and coffee.",
            formalityVariants: {
              casual: "OJ and coffee.",
              standard: "Orange juice and a coffee, please.",
              formal: "I would like an orange juice and a coffee, please.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "You got it! I'll have that out in a few minutes.",
            textZh: "没问题！几分钟就好。",
            keyPhrases: [{ en: "I'll have that out", zh: "马上给你送出来" }],
            casualVersion: "Coming right up!",
            formalityVariants: {
              casual: "Coming right up!",
              standard: "You got it! I'll have that out in a few minutes.",
              formal: "Certainly. Your order will be ready shortly.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 三明治定制 Subway-style Customization ====================
  {
    id: "restaurant-sandwich-customize",
    tags: ["sandwich", "三明治", "subway", "customize", "定制", "bread", "toppings"],
    category: "restaurant",
    titleZh: "三明治店定制点餐",
    titleEn: "Customizing a Sandwich",
    description: "在 Subway 等三明治店点餐，逐步选择面包、肉、蔬菜、酱料",
    otherRole: "三明治店员",
    otherRoleIcon: "🥪",
    flows: [
      // --- Flow 1: 标准定制（顺利）---
      {
        id: "standard",
        titleZh: "标准点餐",
        titleEn: "Standard Sandwich Order",
        description: "在 Subway 式三明治店顺利完成定制点餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome to Subway! What can I get started for you?",
            textZh: "欢迎光临 Subway！想来点什么？",
            alternativeExpressions: [
              {
                textEn: "Hey! What are we making for you today?",
                textZh: "嘿！今天给你做什么？",
                actionHint: "告诉他你想要什么三明治",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, what can I get ya?",
            formalityVariants: {
              casual: "Hey, what can I get ya?",
              standard: "Welcome to Subway! What can I get started for you?",
              formal: "Good afternoon. Welcome to Subway. How may I assist you?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a footlong Italian BMT, please?",
            textZh: "你好，我要一个12寸的意大利BMT三明治。",
            culturalNote:
              "Subway 的尺寸只有两种：6 inch（6寸/半个）和 footlong（12寸/整个）。BMT 是 Biggest Meatiest Tastiest 的缩写。",
            commonMistake: {
              wrong: "Give me a big Italian sandwich.",
              correct: "Can I get a footlong Italian BMT?",
              explanation: '在 Subway 要用菜单上的名字点餐，"footlong" 是标准说法，不说 big 或 large。',
            },
            casualVersion: "Lemme get a footlong BMT.",
            formalityVariants: {
              casual: "Lemme get a footlong BMT.",
              standard: "Hi, can I get a footlong Italian BMT, please?",
              formal: "Hello, I would like a footlong Italian BMT, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Sure! What bread would you like? We've got Italian, wheat, Italian herbs and cheese, and flatbread.",
            textZh: "好的！要什么面包？我们有意大利白面包、全麦、意大利香草芝士、和薄饼。",
            keyPhrases: [
              { en: "what bread would you like", zh: "要什么面包" },
              { en: "Italian herbs and cheese", zh: "意大利香草芝士面包" },
              { en: "flatbread", zh: "薄饼/扁面包" },
            ],
            culturalNote: "美式快餐的标准流程就是一连串选择题。每个问题你只需要从选项里选一个就行。",
            casualVersion: "What bread?",
            formalityVariants: {
              casual: "What bread?",
              standard: "What bread would you like?",
              formal: "Which type of bread would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn: "Italian herbs and cheese, please.",
            textZh: "意大利香草芝士面包。",
            casualVersion: "Herbs and cheese.",
            formalityVariants: {
              casual: "Herbs and cheese.",
              standard: "Italian herbs and cheese, please.",
              formal: "I will take the Italian herbs and cheese bread, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Would you like it toasted?",
            textZh: "要烤一下吗？",
            keyPhrases: [{ en: "toasted", zh: "烤/加热过的" }],
            alternativeExpressions: [
              {
                textEn: "Want that toasted or cold?",
                textZh: "要烤的还是冷的？",
                actionHint: "说 yes 或 no 即可",
                frequency: "common",
              },
            ],
            casualVersion: "Toasted?",
            formalityVariants: {
              casual: "Toasted?",
              standard: "Would you like it toasted?",
              formal: "Shall I toast that for you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please.",
            textZh: "好的，烤一下。",
            casualVersion: "Yeah, toast it.",
            formalityVariants: {
              casual: "Yeah, toast it.",
              standard: "Yes, please.",
              formal: "Yes, I would like it toasted, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "What cheese? American, provolone, pepper jack, or Swiss?",
            textZh: "要什么芝士？美式、普罗卧酮、辣椒杰克、还是瑞士芝士？",
            keyPhrases: [
              { en: "American", zh: "美式芝士（温和奶香，最常见）" },
              { en: "pepper jack", zh: "辣椒杰克芝士（微辣）" },
              { en: "Swiss", zh: "瑞士芝士（有孔洞，微甜）" },
            ],
            casualVersion: "Cheese?",
            formalityVariants: {
              casual: "Cheese?",
              standard: "What cheese?",
              formal: "Which type of cheese would you like?",
            },
          },
          {
            speaker: "you",
            textEn: "Pepper jack.",
            textZh: "辣椒杰克。",
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Alright, what veggies? We've got lettuce, tomato, onion, green pepper, cucumber, pickles, olives, jalapeños, and spinach.",
            textZh: "好的，要什么蔬菜？有生菜、番茄、洋葱、青椒、黄瓜、酸黄瓜、橄榄、墨西哥辣椒、和菠菜。",
            keyPhrases: [
              { en: "veggies", zh: "蔬菜（vegetables 的口语缩写）" },
              { en: "pickles", zh: "酸黄瓜" },
              { en: "jalapeños", zh: "墨西哥青辣椒" },
            ],
            culturalNote:
              "这是中国人常常懵的时刻 — 一口气说出这么多选项。你可以说 everything（全部都要）或者只选几个你认识的。",
            casualVersion: "What veggies you want on that?",
            formalityVariants: {
              casual: "What veggies you want on that?",
              standard: "What veggies would you like?",
              formal: "And which vegetables would you like on your sandwich?",
            },
          },
          {
            speaker: "you",
            textEn: "Lettuce, tomato, and cucumber, please. No onion.",
            textZh: "生菜、番茄和黄瓜，谢谢。不要洋葱。",
            culturalNote: '说不要什么用 "no + 食材名" 即可。也可以说 "everything except onion"（除了洋葱都要）。',
            commonMistake: {
              wrong: "I don't want onion.",
              correct: "No onion, please.",
              explanation: '快餐店里简洁直接最好，"no onion" 比 "I don\'t want onion" 更自然高效。',
            },
            casualVersion: "Lettuce, tomato, cucumber. Hold the onion.",
            formalityVariants: {
              casual: "Lettuce, tomato, cucumber. Hold the onion.",
              standard: "Lettuce, tomato, and cucumber, please. No onion.",
              formal: "I would like lettuce, tomato, and cucumber, please. No onion.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Any sauce? Mayo, mustard, ranch, chipotle southwest, sweet onion?",
            textZh: "要什么酱？蛋黄酱、芥末酱、田园酱、烟熏辣椒西南酱、甜洋葱酱？",
            keyPhrases: [
              { en: "mayo", zh: "蛋黄酱/美乃滋" },
              { en: "mustard", zh: "芥末酱（黄色的，不辣）" },
              { en: "ranch", zh: "田园沙拉酱（奶白色，美国最受欢迎的酱）" },
              { en: "chipotle southwest", zh: "烟熏辣椒西南酱（微辣微烟熏）" },
            ],
            casualVersion: "Sauce?",
            formalityVariants: {
              casual: "Sauce?",
              standard: "Any sauce?",
              formal: "Would you like any sauce on that?",
            },
          },
          {
            speaker: "you",
            textEn: "Chipotle southwest sauce, please. Just a little.",
            textZh: "烟熏辣椒西南酱，谢谢。少放一点。",
            culturalNote: '"Just a little" 或 "not too much" 可以让店员少放酱。不说的话他们通常会挤很多。',
            casualVersion: "Chipotle. Light on the sauce.",
            formalityVariants: {
              casual: "Chipotle. Light on the sauce.",
              standard: "Chipotle southwest sauce, please. Just a little.",
              formal: "I would like the chipotle southwest sauce, lightly applied, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Anything else? Want to make it a combo with chips and a drink?",
            textZh: "还要别的吗？要加薯片和饮料做成套餐吗？",
            keyPhrases: [{ en: "make it a combo", zh: "升级为套餐" }],
            alternativeExpressions: [
              {
                textEn: "Wanna meal that?",
                textZh: "要做成套餐吗？",
                actionHint: "说 yes 加套餐，或 no 只要三明治",
                frequency: "common",
              },
            ],
            casualVersion: "Make it a meal?",
            formalityVariants: {
              casual: "Make it a meal?",
              standard: "Want to make it a combo with chips and a drink?",
              formal: "Would you like to upgrade to a combo meal with chips and a beverage?",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, I'll do the combo. With a Coke, please.",
            textZh: "好的，要套餐。配一杯可乐。",
            casualVersion: "Yeah, combo. Coke.",
            formalityVariants: {
              casual: "Yeah, combo. Coke.",
              standard: "Sure, I'll do the combo. With a Coke, please.",
              formal: "Yes, I would like the combo meal with a Coca-Cola, please.",
            },
          },
        ],
      },
      // --- Flow 2: 听不懂选项，需要帮助 ---
      {
        id: "need-help",
        titleZh: "听不太懂选项",
        titleEn: "Need Help Understanding Options",
        description: "店员说得快，你没听清或不理解某些选项，需要请对方放慢或解释",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "What bread? Italian, honey oat, or flatbread?",
            textZh: "什么面包？意大利白、蜂蜜燕麦、还是薄饼？",
            casualVersion: "Bread?",
            formalityVariants: {
              casual: "Bread?",
              standard: "What bread?",
              formal: "Which bread would you prefer?",
            },
          },
          {
            speaker: "you",
            textEn: "Sorry, could you say that again? A bit slower?",
            textZh: "不好意思，能再说一遍吗？慢一点？",
            culturalNote: "在快餐店请对方重复是完全正常的，尤其在嘈杂环境里。不需要感到不好意思。",
            commonMistake: {
              wrong: "What? I don't understand.",
              correct: "Sorry, could you say that again? A bit slower?",
              explanation: "加 sorry 和 a bit slower 比直接说 I don't understand 更礼貌，对方也知道该怎么帮你。",
            },
            casualVersion: "Sorry, one more time?",
            formalityVariants: {
              casual: "Sorry, one more time?",
              standard: "Sorry, could you say that again? A bit slower?",
              formal: "I apologize, would you mind repeating that a bit more slowly?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "No problem! We have Italian — that's the plain white bread. Honey oat — it's a little sweet, with oats on top. And flatbread — it's thin like a wrap.",
            textZh:
              "没问题！意大利白面包 — 就是普通的白面包。蜂蜜燕麦 — 稍微甜一点，上面有燕麦。薄饼 — 很薄的像卷饼一样。",
            keyPhrases: [
              { en: "plain white bread", zh: "普通白面包" },
              { en: "a little sweet, with oats on top", zh: "微甜，上面有燕麦" },
              { en: "thin like a wrap", zh: "薄的，像卷饼" },
            ],
            culturalNote: "美国服务行业的人通常很耐心，解释菜单对他们来说很日常。不要觉得你耽误了别人的时间。",
            casualVersion: "Sure! Italian is white, honey oat is sweet, flatbread is thin.",
            formalityVariants: {
              casual: "Sure! Italian is white, honey oat is sweet, flatbread is thin.",
              standard:
                "No problem! Italian is the plain white bread. Honey oat is a little sweet. Flatbread is thin like a wrap.",
              formal:
                "Of course. The Italian is our traditional white bread. The honey oat has a touch of sweetness with oats baked on top. And the flatbread is a thin, wrap-style option.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! I'll go with Italian.",
            textZh: "谢谢！那我选意大利白面包。",
            casualVersion: "Italian, thanks.",
            formalityVariants: {
              casual: "Italian, thanks.",
              standard: "Thanks! I'll go with Italian.",
              formal: "Thank you for explaining. I will have the Italian bread, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "What veggies?",
            textZh: "要什么蔬菜？",
          },
          {
            speaker: "you",
            textEn: "Can I just point? I'll take that, that, and that one.",
            textZh: "我可以指吗？我要这个、这个、和那个。",
            culturalNote:
              "完全可以用手指！Subway 的蔬菜都在玻璃后面一字排开，指着选是很正常的操作。语言不够手势来凑，在快餐店这是最实用的策略。",
            casualVersion: "Can I just point? This, this, and this.",
            formalityVariants: {
              casual: "Can I just point? This, this, and this.",
              standard: "Can I just point? I'll take that, that, and that one.",
              formal: "Would it be alright if I point? I would like these three, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure, no problem! Lettuce, tomato, and olives. Anything else?",
            textZh: "当然没问题！生菜、番茄和橄榄。还要别的吗？",
            casualVersion: "Yep! Lettuce, tomato, olives. More?",
            formalityVariants: {
              casual: "Yep! Lettuce, tomato, olives. More?",
              standard: "Sure! Lettuce, tomato, and olives. Anything else?",
              formal: "Absolutely. So that is lettuce, tomato, and olives. Would you like anything else?",
            },
          },
          {
            speaker: "you",
            textEn: "That's good. Thank you for being patient with me!",
            textZh: "够了。谢谢你这么有耐心！",
            culturalNote: "感谢服务员的耐心是个很好的习惯，会让整个互动更愉快。很多服务员听到这句话会微笑。",
            casualVersion: "That's it. Thanks!",
            formalityVariants: {
              casual: "That's it. Thanks!",
              standard: "That's good. Thank you for being patient with me!",
              formal: "That will be all, thank you. I really appreciate your patience.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 冰淇淋店 Ice Cream Shop ====================
  {
    id: "restaurant-ice-cream",
    tags: ["ice cream", "冰淇淋", "scoop", "cone", "gelato", "frozen yogurt"],
    category: "restaurant",
    titleZh: "冰淇淋店点单",
    titleEn: "Ice Cream Shop Order",
    description: "在冰淇淋店选口味、容器和份量",
    otherRole: "冰淇淋店员",
    otherRoleIcon: "🍦",
    flows: [
      // --- Flow 1: 标准点单 ---
      {
        id: "standard",
        titleZh: "标准冰淇淋点单",
        titleEn: "Standard Ice Cream Order",
        description: "选口味、cone or cup、份量",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi there! Would you like to try any flavors?",
            textZh: "你好！要试吃什么口味吗？",
            keyPhrases: [{ en: "try any flavors", zh: "试吃口味" }],
            alternativeExpressions: [
              {
                textEn: "Hey! Wanna sample anything?",
                textZh: "嘿！想试尝一下吗？",
                actionHint: "可以要求试吃任何口味",
                frequency: "common",
              },
              {
                textEn: "Welcome! Would you like a taste of anything?",
                textZh: "欢迎！想尝尝哪个口味吗？",
                actionHint: "指着想试的口味说 can I try that one",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国冰淇淋店免费试吃是标准服务，不是在占便宜。你可以试 2-3 个口味再决定，完全正常。中国的冰淇淋店很少有这个文化。",
            casualVersion: "Wanna try anything?",
            formalityVariants: {
              casual: "Wanna try anything?",
              standard: "Would you like to try any flavors?",
              formal: "Welcome. Would you care to sample any of our flavors today?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! Can I try the salted caramel?",
            textZh: "好的！我能试试海盐焦糖的吗？",
            culturalNote:
              "salted caramel（海盐焦糖）是美国冰淇淋店最热门口味之一。试吃时直接指着说 can I try that one 也行。",
            commonMistake: {
              wrong: "I want to eat this one first.",
              correct: "Can I try the salted caramel?",
              explanation: "试吃用 try 或 sample，不用 eat。指着口味说 Can I try this one 是最自然的方式。",
            },
            casualVersion: "Yeah! Can I try the salted caramel?",
            formalityVariants: {
              casual: "Yeah! Lemme try the salted caramel.",
              standard: "Yes, please! Can I try the salted caramel?",
              formal: "Yes, I would love to. May I sample the salted caramel?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Of course! Here you go.",
            textZh: "当然！给你。",
            casualVersion: "Sure thing!",
            formalityVariants: {
              casual: "Sure thing!",
              standard: "Of course! Here you go.",
              formal: "Certainly. Please enjoy.",
            },
          },
          {
            speaker: "you",
            textEn: "Mmm, that's good! I'll go with that. Can I get two scoops in a waffle cone?",
            textZh: "嗯，好吃！就要这个。能给我两球放在华夫蛋筒里吗？",
            keyPhrases: [
              { en: "scoops", zh: "球（冰淇淋的计量单位）" },
              { en: "waffle cone", zh: "华夫蛋筒（大的脆筒，通常加钱）" },
            ],
            culturalNote:
              "冰淇淋的份量用 scoop（球）计算。容器有三种：cone（普通蛋筒）、waffle cone（大华夫蛋筒，通常加 $1-2）、cup（纸杯）。",
            commonMistake: {
              wrong: "I want two balls of ice cream in a big cone.",
              correct: "Can I get two scoops in a waffle cone?",
              explanation: "冰淇淋的球用 scoop 不用 ball。大蛋筒叫 waffle cone，不说 big cone。",
            },
            casualVersion: "That's great! Two scoops, waffle cone.",
            formalityVariants: {
              casual: "That's great! Two scoops, waffle cone.",
              standard: "I'll go with that. Can I get two scoops in a waffle cone?",
              formal: "That is lovely. I would like two scoops in a waffle cone, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Two scoops — do you want both salted caramel, or a different flavor for the second one?",
            textZh: "两球 — 都要海盐焦糖，还是第二球换个口味？",
            alternativeExpressions: [
              {
                textEn: "Same flavor for both, or want to mix it up?",
                textZh: "两球都一个口味，还是要混搭？",
                actionHint: "可以选两个不同口味",
                frequency: "common",
              },
            ],
            casualVersion: "Both salted caramel, or mix it up?",
            formalityVariants: {
              casual: "Both salted caramel, or mix it up?",
              standard: "Do you want both salted caramel, or a different flavor for the second one?",
              formal: "Would you prefer both scoops to be salted caramel, or would you like a second flavor?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do one salted caramel and one cookies and cream.",
            textZh: "一球海盐焦糖，一球奥利奥奶油的。",
            culturalNote: "cookies and cream（奥利奥碎+香草冰淇淋）是美国冰淇淋店的经典口味，几乎每家店都有。",
            casualVersion: "One salted caramel, one cookies and cream.",
            formalityVariants: {
              casual: "One salted caramel, one cookies and cream.",
              standard: "I'll do one salted caramel and one cookies and cream.",
              formal: "I would like one scoop of salted caramel and one of cookies and cream, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Any toppings? We have sprinkles, hot fudge, whipped cream, and crushed Oreos.",
            textZh: "要加浇头吗？有彩色糖粒、热巧克力酱、奶油、和碎奥利奥。",
            keyPhrases: [
              { en: "toppings", zh: "浇头/配料" },
              { en: "sprinkles", zh: "彩色糖粒" },
              { en: "hot fudge", zh: "热巧克力酱" },
              { en: "whipped cream", zh: "鲜奶油" },
            ],
            culturalNote: "toppings 通常额外加钱（$0.50-$1.50 每种），但 sprinkles 在很多店是免费的。",
            casualVersion: "Want any toppings?",
            formalityVariants: {
              casual: "Want any toppings?",
              standard: "Any toppings?",
              formal: "Would you like to add any toppings to that?",
            },
          },
          {
            speaker: "you",
            textEn: "Just whipped cream on top, please.",
            textZh: "上面加点奶油就好。",
            casualVersion: "Just whipped cream.",
            formalityVariants: {
              casual: "Just whipped cream.",
              standard: "Just whipped cream on top, please.",
              formal: "I would just like some whipped cream on top, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "That'll be $8.75.",
            textZh: "一共8.75美元。",
            casualVersion: "$8.75.",
            formalityVariants: {
              casual: "$8.75.",
              standard: "That'll be $8.75.",
              formal: "Your total comes to $8.75.",
            },
          },
        ],
      },
      // --- Flow 2: 犹豫不决需要帮助 ---
      {
        id: "need-help",
        titleZh: "选择困难需要推荐",
        titleEn: "Need Recommendations",
        description: "面对太多口味不知道选什么，需要试吃和推荐",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Welcome! We have 32 flavors today. Take your time!",
            textZh: "欢迎！我们今天有32种口味。慢慢看！",
            alternativeExpressions: [
              {
                textEn: "Hi! Lots of flavors to choose from — let me know if you need help!",
                textZh: "嗨！口味很多——需要帮忙的话叫我！",
                actionHint: "可以请店员推荐",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! We got 32 flavors. No rush!",
            formalityVariants: {
              casual: "Hey! We got 32 flavors. No rush!",
              standard: "Welcome! We have 32 flavors today. Take your time!",
              formal: "Welcome. We are featuring 32 flavors today. Please take your time.",
            },
          },
          {
            speaker: "you",
            textEn: "Wow, that's a lot! What's your most popular flavor?",
            textZh: "哇，好多！你们最受欢迎的口味是什么？",
            culturalNote:
              "问 what's your most popular 或 what do you recommend 都是很自然的方式。在中国我们可能不太好意思问，但在美国这完全正常。",
            commonMistake: {
              wrong: "What flavor is the best one?",
              correct: "What's your most popular flavor?",
              explanation: "问 most popular 比 the best 更自然，因为 best 太主观。也可以说 What do you recommend?",
            },
            casualVersion: "That's a lot! What's popular?",
            formalityVariants: {
              casual: "That's a lot! What's popular?",
              standard: "What's your most popular flavor?",
              formal: "There are quite a few choices. What would you recommend?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Our mint chip and mango sorbet are super popular right now. Wanna try either one?",
            textZh: "我们的薄荷巧克力碎和芒果雪葩现在超受欢迎。要试试吗？",
            keyPhrases: [
              { en: "mint chip", zh: "薄荷巧克力碎" },
              { en: "sorbet", zh: "雪葩/冰沙（不含奶，水果做的）" },
            ],
            culturalNote: "sorbet（雪葩）和 ice cream 不同：sorbet 不含乳制品，是纯水果冰，适合乳糖不耐受或素食者。",
            casualVersion: "Mint chip and mango sorbet are killing it right now. Wanna taste?",
            formalityVariants: {
              casual: "Mint chip and mango sorbet are killing it right now. Wanna taste?",
              standard: "Our mint chip and mango sorbet are super popular right now. Wanna try either one?",
              formal:
                "Our mint chocolate chip and mango sorbet are particularly popular at the moment. Would you care to sample either?",
            },
          },
          {
            speaker: "you",
            textEn: "Can I try both? I'm not sure which one I'd like better.",
            textZh: "两个都能试试吗？我不确定哪个更好。",
            casualVersion: "Lemme try both!",
            formalityVariants: {
              casual: "Lemme try both!",
              standard: "Can I try both?",
              formal: "Would it be possible to sample both?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Absolutely! Here's the mint chip... and here's the mango sorbet.",
            textZh: "当然！这是薄荷巧克力碎……这是芒果雪葩。",
            casualVersion: "For sure! Mint chip... and mango sorbet.",
            formalityVariants: {
              casual: "For sure! Mint chip... and mango sorbet.",
              standard: "Absolutely! Here's the mint chip... and here's the mango sorbet.",
              formal: "Of course. Here is the mint chocolate chip, and here is the mango sorbet.",
            },
          },
          {
            speaker: "you",
            textEn: "I like the mango sorbet! Is a single scoop enough, or should I get a double?",
            textZh: "我喜欢芒果雪葩！单球够吃吗，还是应该要双球？",
            keyPhrases: [
              { en: "single scoop", zh: "单球" },
              { en: "double", zh: "双球" },
            ],
            culturalNote: "美国的 single scoop 通常比中国的一球大很多。如果不太饿，single 就够了。",
            casualVersion: "Mango's good! Single or double, you think?",
            formalityVariants: {
              casual: "Mango's good! Single or double, you think?",
              standard: "I like the mango sorbet! Is a single scoop enough, or should I get a double?",
              formal:
                "The mango sorbet is wonderful. Would you say a single scoop is sufficient, or would you recommend a double?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Our scoops are pretty generous. A single is usually plenty. Cup or cone?",
            textZh: "我们的球挺大的。一球通常够了。要杯装还是蛋筒？",
            keyPhrases: [
              { en: "generous", zh: "这里指份量大/给得多" },
              { en: "cup or cone", zh: "杯装还是蛋筒" },
            ],
            culturalNote: 'generous 在这里不是"慷慨"而是形容份量大。美式冰淇淋店的 single scoop 通常比标准大。',
            casualVersion: "Single's plenty! Cup or cone?",
            formalityVariants: {
              casual: "Single's plenty! Cup or cone?",
              standard: "Our scoops are pretty generous. A single is usually plenty. Cup or cone?",
              formal:
                "Our portions are quite generous. A single scoop should be more than sufficient. Would you prefer a cup or a cone?",
            },
          },
          {
            speaker: "you",
            textEn: "A cup, please. I don't want it dripping everywhere!",
            textZh: "杯装的吧。我不想弄得到处都是！",
            culturalNote: "cup（杯装）比 cone（蛋筒）更不容易弄脏手和衣服。如果在户外或天热，选 cup 更安全。",
            casualVersion: "Cup. Don't wanna make a mess!",
            formalityVariants: {
              casual: "Cup. Don't wanna make a mess!",
              standard: "A cup, please. I don't want it dripping everywhere!",
              formal: "A cup, please. I would rather not risk any spills.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Smart choice! One mango sorbet in a cup. That's $5.50.",
            textZh: "明智的选择！一球芒果雪葩杯装。5.50美元。",
            casualVersion: "Good call! $5.50.",
            formalityVariants: {
              casual: "Good call! $5.50.",
              standard: "One mango sorbet in a cup. That's $5.50.",
              formal: "One mango sorbet in a cup. Your total is $5.50.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 分单买单 Splitting the Bill ====================
  {
    id: "restaurant-splitting-bill",
    tags: ["split bill", "分单", "separate checks", "AA制", "pay separately"],
    category: "restaurant",
    titleZh: "分开买单",
    titleEn: "Splitting the Bill",
    description: "在餐厅要求分单结账",
    otherRole: "服务员",
    otherRoleIcon: "💳",
    flows: [
      // --- Flow 1: 直接要求分单 ---
      {
        id: "simple-split",
        titleZh: "直接要求分单",
        titleEn: "Simple Split Request",
        description: "和朋友吃饭，直接要求分开付",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could we get separate checks, please?",
            textZh: "不好意思，我们能分开结账吗？",
            keyPhrases: [{ en: "separate checks", zh: "分开结账/分单" }],
            culturalNote:
              "在美国，separate checks（分单）非常普遍，一点都不丢人。在中国朋友间抢着买单是常态，但美国人习惯各付各的。最好在点菜前就告诉服务员要分单。",
            commonMistake: {
              wrong: "We want to AA.",
              correct: "Could we get separate checks?",
              explanation: "AA制是中文说法，英语不说 AA。用 separate checks 或 split the bill。",
            },
            casualVersion: "Hey, can we get separate checks?",
            formalityVariants: {
              casual: "Hey, can we get separate checks?",
              standard: "Could we get separate checks, please?",
              formal: "Excuse me, would it be possible to have separate checks for our table?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure, no problem! How would you like me to split it? Each person on their own check?",
            textZh: "当然没问题！怎么分？每个人一张单吗？",
            alternativeExpressions: [
              {
                textEn: "Of course! How many ways are we splitting?",
                textZh: "当然！分几份？",
                actionHint: "告诉服务员分几份",
                frequency: "common",
              },
              {
                textEn: "Sure thing. Splitting evenly or by what each person ordered?",
                textZh: "没问题。平分还是各付各的？",
                actionHint: "说 by what we ordered 或 evenly",
                frequency: "common",
              },
            ],
            casualVersion: "No problem! How we splitting it?",
            formalityVariants: {
              casual: "No problem! How we splitting it?",
              standard: "Sure! How would you like me to split it?",
              formal: "Certainly. How would you prefer the checks to be divided?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, each person pays for what they ordered. There are three of us.",
            textZh: "是的，每人付自己点的。我们三个人。",
            culturalNote:
              "by what each person ordered（各付各的）比 split evenly（平分）更常见。如果有人点了龙虾有人只点了沙拉，平分就不公平了。",
            casualVersion: "Yeah, just split it by what each of us got. Three people.",
            formalityVariants: {
              casual: "Yeah, just split it by what each of us got. Three people.",
              standard: "Each person pays for what they ordered. There are three of us.",
              formal: "Yes, please. Each person will pay for their individual orders. We are a party of three.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Got it. I'll bring three separate checks. Do you all want the appetizers split evenly?",
            textZh: "明白了。我带三张单过来。前菜要平摊吗？",
            keyPhrases: [{ en: "appetizers split evenly", zh: "前菜平摊" }],
            alternativeExpressions: [
              {
                textEn: "What about the shared plates — divide those equally?",
                textZh: "共享的菜怎么算——平分吗？",
                actionHint: "说 yes 或指定谁付共享菜",
                frequency: "common",
              },
            ],
            culturalNote: "服务员通常会主动问共享菜（appetizers, shared plates）怎么分。说 split evenly 就是平摊。",
            casualVersion: "Cool. What about the apps — split those three ways?",
            formalityVariants: {
              casual: "Cool. What about the apps — split those three ways?",
              standard: "I'll bring three separate checks. Do you all want the appetizers split evenly?",
              formal:
                "I will prepare three separate checks. Shall the appetizers be divided equally among the three of you?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, just split the appetizers evenly. Thanks!",
            textZh: "是的，前菜就平分吧。谢谢！",
            casualVersion: "Yeah, just split the apps. Thanks!",
            formalityVariants: {
              casual: "Yeah, just split the apps. Thanks!",
              standard: "Yes, just split the appetizers evenly. Thanks!",
              formal: "Yes, please divide the appetizers equally. Thank you very much.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here are your three checks. You can pay whenever you're ready.",
            textZh: "这是你们的三张单。准备好了随时可以付。",
            keyPhrases: [{ en: "whenever you're ready", zh: "准备好了随时可以" }],
            casualVersion: "Here you go. No rush!",
            formalityVariants: {
              casual: "Here you go. No rush!",
              standard: "Here are your checks. Pay whenever you're ready.",
              formal: "Here are your three separate checks. Please take your time.",
            },
          },
        ],
      },
      // --- Flow 2: 朋友要请客的社交博弈 ---
      {
        id: "treat-negotiation",
        titleZh: "请客与分单的社交场景",
        titleEn: "Treat vs. Split Negotiation",
        description: "朋友坚持请客，你想付自己的份——处理这种常见社交尴尬",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "Put your wallet away! This one's on me.",
            textZh: "把钱包收起来！这顿我请。",
            keyPhrases: [
              { en: "this one's on me", zh: "这顿我请/我买单" },
              { en: "put your wallet away", zh: "把钱包收起来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Don't worry about it — my treat!",
                textZh: "别管了——我请！",
                actionHint: "对方想请你",
                frequency: "common",
              },
              {
                textEn: "I got this. Don't even think about it.",
                textZh: "我来。你想都别想。",
                actionHint: "对方很坚持",
                frequency: "common",
              },
            ],
            culturalNote:
              '"It\'s on me" 和 "my treat" 都是"我请客"的意思。美国人说这话时，通常第一次可以客气推让，但如果对方坚持，就接受并说 thank you。不像中国那样要来回推让很多次。',
            casualVersion: "Nah, I got this!",
            formalityVariants: {
              casual: "Nah, I got this!",
              standard: "Put your wallet away! This one's on me.",
              formal: "Please, allow me. This evening is my treat.",
            },
          },
          {
            speaker: "you",
            textEn: "Are you sure? At least let me get the tip.",
            textZh: "你确定？至少让我付小费吧。",
            culturalNote:
              "在美国，如果有人请客，提出付小费（get the tip）是一个很得体的回应。既表示感谢，又不伤面子。这个策略在美国社交中非常好用。",
            commonMistake: {
              wrong: "No no no, I must pay! Let me pay!",
              correct: "Are you sure? At least let me get the tip.",
              explanation: "中国式的反复推让在美国会让对方尴尬。推让一次，然后提出付小费就好。",
            },
            casualVersion: "You sure? I'll grab the tip at least.",
            formalityVariants: {
              casual: "You sure? I'll grab the tip at least.",
              standard: "Are you sure? At least let me get the tip.",
              formal: "That is very kind of you. Would you allow me to cover the gratuity at the very least?",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Deal! You can get the tip. And next time, it's your turn!",
            textZh: "成交！你付小费。下次轮到你请！",
            keyPhrases: [{ en: "next time it's your turn", zh: "下次轮到你" }],
            alternativeExpressions: [
              {
                textEn: "Fine, you get the tip. But I'm holding you to next time!",
                textZh: "行，你付小费。但下次你请啊！",
                actionHint: "同意分工",
                frequency: "common",
              },
            ],
            culturalNote:
              '"Next time, it\'s your turn" 是美国人常用的友好说法。不一定真的要严格轮流，但表达了互惠的社交默契。',
            casualVersion: "Deal! Next one's on you though!",
            formalityVariants: {
              casual: "Deal! Next one's on you though!",
              standard: "Deal! You get the tip. Next time, it's your turn!",
              formal: "That sounds fair. You handle the gratuity, and next time, dinner is on you.",
            },
          },
          {
            speaker: "you",
            textEn: "Deal! Thank you so much for dinner. I really appreciate it.",
            textZh: "成交！非常感谢请我吃饭。真的很感谢。",
            culturalNote: "接受别人请客后，真诚地说 thank you 比反复推让更受欢迎。之后可以发条消息再次感谢。",
            casualVersion: "Deal! Thanks for dinner — it was awesome.",
            formalityVariants: {
              casual: "Deal! Thanks for dinner — it was awesome.",
              standard: "Thank you so much for dinner. I really appreciate it.",
              formal: "Thank you very much. This was a wonderful dinner and I truly appreciate your generosity.",
            },
          },
        ],
      },
      // --- Flow 3: 复杂分账——Venmo/Zelle + 酒钱单算 + AA vs 请客文化 ---
      {
        id: "splitting-complex",
        titleZh: "复杂分账与数字支付",
        titleEn: "Complex Splitting with Venmo/Zelle",
        description: "朋友聚餐后用Venmo/Zelle分账，处理有人多喝酒的情况，理解AA vs请客文化",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "朋友",
            textEn: "OK guys, the bill is $240 total. There are six of us. Should we just split it evenly, or...? I mean, Jake ordered like three cocktails.",
            textZh: "好吧各位，总共240美元。我们六个人。直接平分吗，还是……？我是说，Jake点了三杯鸡尾酒。",
            keyPhrases: [
              { en: "split it evenly", zh: "平分" },
              { en: "or...", zh: "还是……（暗示不太公平）" },
            ],
            alternativeExpressions: [
              {
                textEn: "So, the bill's $240. Six of us. Even split? I feel like some people ordered way more drinks though.",
                textZh: "账单240美元。六个人。平分？但我觉得有些人点了很多酒。",
                actionHint: "暗示不想平分",
                frequency: "common",
              },
              {
                textEn: "Total's $240 for the table. How do we wanna handle this? Some of us stuck to water and others went full cocktail hour.",
                textZh: "桌上总共240美元。怎么算？有些人只喝了水，有些人狂点鸡尾酒。",
                actionHint: "提出差异化付款",
                frequency: "common",
              },
            ],
            culturalNote: "在美国朋友聚餐中，'or...' 后面的停顿是一种暗示——说话者觉得平分不公平但不想直接说。酒水通常是账单差异最大的部分。",
            casualVersion: "OK so bill's $240, six of us. Even split? Jake kinda went hard on the cocktails though.",
            formalityVariants: {
              casual: "Bill's $240, six people. Even split? Jake had like three cocktails though...",
              standard: "The bill is $240 total for six of us. Should we split evenly, or account for the drinks separately?",
              formal: "The total bill comes to $240 for the six of us. Shall we divide it equally, or would it be more equitable to account for individual beverage orders separately?",
            },
          },
          {
            speaker: "you",
            textEn: "Hmm, I think it's fairer if the drinks are separate. Like, I only had water. Maybe we split the food evenly and everyone covers their own drinks?",
            textZh: "嗯，我觉得酒水分开算更公平。我只喝了水。要不我们食物平分，各自付自己的酒水？",
            culturalNote: "在美国，提出'食物平分+酒水各付'是非常常见且被接受的做法。这既避免了完全AA的尴尬，也避免了不喝酒的人替别人买单。你这么说不会被认为小气。",
            commonMistake: {
              wrong: "I think we should calculate separately. I only drink water.",
              correct: "I think it's fairer if the drinks are separate. I only had water.",
              explanation: "'calculate separately' 太正式。'it's fairer if...' 更自然。'had' 过去式描述刚才的消费。",
            },
            casualVersion: "Yeah, kinda unfair if we all split it even. I had water. How about food split even, drinks on your own?",
            formalityVariants: {
              casual: "I mean, I just had water. Split the food, pay your own drinks?",
              standard: "I think it's fairer to split the food evenly and have everyone cover their own drinks. I only had water.",
              formal: "I believe a more equitable approach would be to divide the food costs equally while each person covers their own beverage expenses. I personally only had water.",
            },
          },
          {
            speaker: "them",
            role: "朋友 Jake",
            textEn: "Ha, fair enough — that's on me. I did go a little overboard on the cocktails. So food split six ways, and I'll cover my own drinks. Does anyone want me to just Venmo everyone their share?",
            textZh: "哈，说得对——那是我的锅。我鸡尾酒确实点多了。那食物六等分，我自己付酒钱。有人要我直接 Venmo 给大家分的吗？",
            keyPhrases: [
              { en: "that's on me", zh: "那算我的/我负责" },
              { en: "go overboard", zh: "过头了/过分了" },
              { en: "Venmo everyone", zh: "通过Venmo转给每个人" },
            ],
            alternativeExpressions: [
              {
                textEn: "Haha, guilty as charged! Drinks are on me separately. Want me to Venmo request everyone, or should someone put it on their card?",
                textZh: "哈哈，认罪！酒钱我单独付。要我Venmo向大家收款，还是谁先刷卡？",
                actionHint: "提议支付方案",
                frequency: "common",
              },
            ],
            culturalNote: "Venmo 是美国最流行的朋友间转账 App。年轻人聚餐后用 Venmo 分账是标准流程。'Venmo' 在美国已经变成了动词，类似中国的'微信转一下'。还有 Zelle（银行间直转）和 Cash App 也很常用。",
            casualVersion: "Ha, my bad. I went hard on the cocktails. Food split six ways, I'll handle my own drinks. Want me to Venmo everyone?",
            formalityVariants: {
              casual: "My bad on the cocktails! Food split six ways. Want me to Venmo everyone?",
              standard: "Fair enough, I did go overboard. Food split six ways, I'll cover my drinks separately. Should I Venmo everyone?",
              formal: "That is a reasonable arrangement. I acknowledge my beverage order was more substantial. I will cover those costs independently. Shall I arrange the transfers via Venmo for everyone?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, why don't I just put the whole thing on my card, and everyone Venmo or Zelle me their share? It's easier with one card.",
            textZh: "其实，不如我先刷卡付全部，然后大家Venmo或Zelle转给我各自的份额？一张卡付比较方便。",
            culturalNote: "在美国，一个人先刷卡然后大家转账给他是最常见的分账方式。这比让服务员分六张卡轻松多了。如果你主动提出先刷卡，大家会很感激。在中国抢着买单是面子文化，美国更务实。",
            commonMistake: {
              wrong: "Let me pay all first, then you transfer me money.",
              correct: "Why don't I put the whole thing on my card, and everyone Venmo me?",
              explanation: "'put it on my card'（刷我卡）比'pay all first'更地道。'transfer me money'太直接，用'Venmo me'更自然。",
            },
            casualVersion: "I'll just throw it on my card. Everyone Venmo or Zelle me later. Way easier.",
            formalityVariants: {
              casual: "I'll put it all on my card. Just Venmo or Zelle me later.",
              standard: "How about I put it all on my card and everyone sends me their share via Venmo or Zelle?",
              formal: "Perhaps the most efficient approach would be for me to charge the entire amount to my card. Everyone can then transfer their respective shares to me via Venmo or Zelle.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Perfect. So food is $180, split six ways that's $30 each. Plus your own drinks. And don't forget — we still need to add tip. 20% on $240 is $48. So tip split six ways is $8 per person.",
            textZh: "好的。食物180美元，六等分每人30美元。加上各自的酒水。别忘了——还要加小费。240美元的20%是48美元。小费六等分每人8美元。",
            keyPhrases: [
              { en: "split six ways", zh: "六等分" },
              { en: "add tip", zh: "加小费" },
              { en: "per person", zh: "每人" },
            ],
            alternativeExpressions: [
              {
                textEn: "OK so quick math — food's $30 each, plus your drinks. Tip is $48 at 20%, so $8 each for tip. Don't forget the tip, people!",
                textZh: "快算一下——食物每人30美元，加各自酒水。20%小费是48美元，每人8美元小费。别忘了小费！",
                actionHint: "提醒算小费",
                frequency: "common",
              },
            ],
            culturalNote: "美国分账时小费也要分！很多中国留学生/游客会忘记这一点。小费是按账单总额（含酒水）的百分比计算的，然后再分摊。如果有人先刷卡，转账时记得把小费份额也算进去。",
            casualVersion: "Cool. Food's $180 ÷ 6 = $30 each. Plus your drinks. And tip — 20% on $240 is $48, so $8 each for tip. Don't forget the tip!",
            formalityVariants: {
              casual: "Food's $30 each. Plus drinks. And tip is $8 per person at 20%. Don't forget that!",
              standard: "The food comes to $30 per person. Add your own drinks. And the tip at 20% is $48, so $8 each for the gratuity.",
              formal: "The food portion is $30 per person. Each individual will add their own beverage costs. The gratuity at 20 percent amounts to $48, which divided among six is $8 per person.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it. So my total is $30 for food, plus $8 for tip, and I just had water — so $38 total. Everyone else, add your drinks on top of that and Venmo me. What's your Venmo handle?",
            textZh: "明白了。我的总数是食物30美元加小费8美元，我只喝了水——所以总共38美元。其他人在这基础上加酒水然后Venmo给我。你的Venmo账号是什么？",
            culturalNote: "Venmo handle 就是 Venmo 用户名。在美国，朋友间交换 Venmo handle 就像中国交换微信号一样普遍。你也可以用搜索手机号或扫码的方式找到对方。",
            commonMistake: {
              wrong: "What is your Venmo number?",
              correct: "What's your Venmo handle?",
              explanation: "Venmo 用户名叫 handle（就像 Twitter 的 @handle），不叫 number。",
            },
            casualVersion: "So I owe $38 total — $30 food, $8 tip, water's free. Everyone, add your drinks and Venmo me. What's your Venmo?",
            formalityVariants: {
              casual: "Cool, $38 for me. Rest of y'all, add your drinks and Venmo me. What's your handle?",
              standard: "So my share is $38. Everyone, please add your drinks to the $38 and Venmo me. What's your Venmo handle?",
              formal: "My share comes to $38. I would appreciate it if everyone could calculate their respective totals and send their portions via Venmo. May I have your Venmo username?",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "I'm @sarah-chen-92. Oh wait — I don't have Venmo, I only use Zelle. Can I just Zelle you instead? I'd need your phone number or email for that.",
            textZh: "我是 @sarah-chen-92。哦等等——我没有 Venmo，我只用 Zelle。能直接 Zelle 给你吗？Zelle 需要你的手机号或邮箱。",
            keyPhrases: [
              { en: "handle", zh: "用户名/账号" },
              { en: "Zelle", zh: "Zelle（银行间即时转账服务）" },
            ],
            alternativeExpressions: [
              {
                textEn: "Mine's @sarah-chen-92. Actually, I don't have Venmo. Can I Zelle it? What's your number?",
                textZh: "我的是 @sarah-chen-92。其实我没有Venmo。能Zelle吗？你号码多少？",
                actionHint: "换转账方式",
                frequency: "common",
              },
            ],
            culturalNote: "Venmo 和 Zelle 是美国两大即时转账工具。Venmo 更社交化（有feed可以看朋友的转账），年轻人更爱用。Zelle 是银行原生的，到账更快但没有社交功能。Cash App 是第三选择。中国人常用的微信转账在美国完全不普及。",
            casualVersion: "@sarah-chen-92. Actually, I only have Zelle. Can I Zelle you? Gimme your number.",
            formalityVariants: {
              casual: "I'm @sarah-chen-92. Oh, I only do Zelle though. Can I Zelle you? What's your number?",
              standard: "My handle is @sarah-chen-92. However, I only use Zelle. Could I send it via Zelle? I'd need your phone number or email.",
              formal: "My Venmo handle is @sarah-chen-92. Actually, I only have Zelle set up. Would it be acceptable to transfer via Zelle? I would require your phone number or email address.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, Zelle works too! My number is 408-555-0123. And honestly, no rush — just send it whenever. We're all friends here. But, um, if possible, tonight would be great so I can close out my credit card statement.",
            textZh: "当然，Zelle也行！我号码是 408-555-0123。不着急——随时转就好。都是朋友嘛。不过，嗯，如果可以今晚转就最好了，这样我可以结算信用卡账单。",
            culturalNote: "在美国，分账后催朋友转账是微妙的社交场景。说'no rush'然后又说'tonight would be great'是一种礼貌但明确的催款方式。很多美国人其实会忘记转账或拖延——Venmo 的 request（请求付款）功能就是为此设计的。",
            commonMistake: {
              wrong: "Please transfer me money quickly.",
              correct: "No rush — just send it whenever. But tonight would be great.",
              explanation: "直接说'请快点转钱'太生硬。先说'不急'再暗示'今晚最好'是美国社交中的标准软催法。",
            },
            casualVersion: "Zelle's fine! 408-555-0123. No rush, but tonight-ish would be awesome so I can close out my card.",
            formalityVariants: {
              casual: "Zelle's cool! Number's 408-555-0123. Whenever, but tonight would be clutch.",
              standard: "Zelle is fine. My number is 408-555-0123. No rush, but it would be great if you could send it tonight.",
              formal: "Zelle is perfectly acceptable. My phone number is 408-555-0123. There is no urgency, though I would appreciate it if the transfer could be completed this evening so I may reconcile my credit card statement.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Done! Just sent you $46 on Zelle — $30 for food, $8 for tip, and $8 for my two glasses of wine. Check your bank app, it should show up instantly. Thanks for putting it on your card!",
            textZh: "搞定！刚Zelle给你46美元——食物30，小费8，两杯红酒8美元。看看你的银行App，应该秒到。谢谢你先刷卡！",
            keyPhrases: [
              { en: "show up instantly", zh: "秒到/立刻到账" },
              { en: "putting it on your card", zh: "先刷你的卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sent! $46 via Zelle. Should be in your account already. Thanks for covering it!",
                textZh: "转了！通过Zelle转了46美元。应该已经到账了。谢谢你先付！",
                actionHint: "确认到账",
                frequency: "common",
              },
            ],
            culturalNote: "Zelle 通常是秒到账的（银行间直转）。Venmo 默认留在 Venmo 余额里，需要手动提现到银行账户（1-3个工作日免费，即时到账收$0.25手续费）。在中国用惯了微信秒到的人刚开始可能会不习惯Venmo的提现机制。",
            casualVersion: "Done! Zelle'd you $46 — $30 food, $8 tip, $8 wine. Check your bank app, should be instant. Thanks for fronting the bill!",
            formalityVariants: {
              casual: "Sent! $46 on Zelle. Food, tip, and my wine. Should be in your account already!",
              standard: "I just sent $46 via Zelle — $30 food, $8 tip, and $8 for my wine. It should appear instantly. Thank you for putting it on your card.",
              formal: "I have transferred $46 via Zelle — $30 for the food, $8 for the gratuity, and $8 for my two glasses of wine. The funds should reflect in your account momentarily. Thank you very much for covering the bill on your card.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 打包剩菜 Leftovers Box ====================
  {
    id: "restaurant-leftovers-box",
    tags: ["leftovers", "打包", "to-go box", "doggy bag", "portion", "take home"],
    category: "restaurant",
    titleZh: "打包剩菜",
    titleEn: "Getting a Leftovers Box",
    description: "在美式餐厅打包吃不完的食物",
    otherRole: "服务员",
    otherRoleIcon: "📦",
    flows: [
      // --- Flow 1: 简单打包 ---
      {
        id: "simple-box",
        titleZh: "简单打包",
        titleEn: "Simple Box Request",
        description: "吃不完直接要打包盒",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "How was everything? Can I get you anything else?",
            textZh: "一切还好吗？还需要什么吗？",
            alternativeExpressions: [
              {
                textEn: "Are you still working on that?",
                textZh: "还在吃吗？",
                actionHint: "如果吃完了就说 I'm done",
                frequency: "common",
              },
              {
                textEn: "All finished here?",
                textZh: "都吃完了吗？",
                actionHint: "吃完了说 yes 或要求打包",
                frequency: "common",
              },
            ],
            culturalNote:
              '"Are you still working on that?" 是美国服务员的标准说法，意思是"还在吃吗"。working on 在这里不是"工作"的意思。',
            casualVersion: "Everything good? Need anything?",
            formalityVariants: {
              casual: "Everything good? Need anything?",
              standard: "How was everything? Can I get you anything else?",
              formal: "How was your meal? Is there anything else I can bring for you?",
            },
          },
          {
            speaker: "you",
            textEn: "Everything was great! Could I get a box for the rest of this?",
            textZh: "都很好！能给我一个打包盒装剩下的吗？",
            keyPhrases: [{ en: "a box", zh: "打包盒" }],
            culturalNote:
              '在美国打包剩菜说 "Can I get a box" 或 "Can I get a to-go box"。不要说 doggy bag，这个说法已经过时了。打包在美国完全正常，不丢人——份量本来就大，服务员见惯了。',
            commonMistake: {
              wrong: "Can I have a doggy bag?",
              correct: "Could I get a box for the rest of this?",
              explanation: "doggy bag 是 1950 年代的说法，现在几乎没人用了。直接说 box 或 to-go box。",
            },
            casualVersion: "Can I get a box?",
            formalityVariants: {
              casual: "Can I get a box?",
              standard: "Could I get a box for the rest of this?",
              formal: "Would it be possible to get a container for the remainder?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! I'll bring you a box. Would you like me to pack it up, or do you want to do it yourself?",
            textZh: "当然！我给你拿个盒子。要我帮你装吗，还是你自己来？",
            alternativeExpressions: [
              {
                textEn: "Sure! Let me box that up for you.",
                textZh: "好的！我帮你装起来。",
                actionHint: "服务员主动帮你装",
                frequency: "common",
              },
              {
                textEn: "No problem! Here's a box.",
                textZh: "没问题！给你盒子。",
                actionHint: "给你盒子自己装",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "pack it up", zh: "装起来/打包" },
              { en: "box that up", zh: "装盒（动词用法）" },
            ],
            casualVersion: "Sure! Want me to box it up?",
            formalityVariants: {
              casual: "Sure! Want me to box it up?",
              standard: "I'll bring you a box. Would you like me to pack it up?",
              formal: "Certainly. Shall I pack that up for you, or would you prefer to do it yourself?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll do it myself, thanks. Could I also get the check?",
            textZh: "我自己来吧，谢谢。顺便买单好吗？",
            culturalNote: "在美国，要求打包时顺便要账单（check）是很正常的流程。",
            casualVersion: "I got it. And the check too, please.",
            formalityVariants: {
              casual: "I got it. And the check too, please.",
              standard: "I'll do it myself, thanks. Could I also get the check?",
              formal: "I will take care of it myself, thank you. And may I have the check as well?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Sure! Here's your box and your check. No rush!",
            textZh: "好的！给你盒子和账单。不着急！",
            casualVersion: "Here you go! Take your time.",
            formalityVariants: {
              casual: "Here you go! Take your time.",
              standard: "Here's your box and your check. No rush!",
              formal: "Here is a container and your check. Please take your time.",
            },
          },
        ],
      },
      // --- Flow 2: 份量太大 + 多道菜打包 ---
      {
        id: "large-portions",
        titleZh: "份量太大多道菜打包",
        titleEn: "Large Portions Multiple Boxes",
        description: "美式大份量吃不完，多道菜需要打包",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "This portion is huge! There's no way I can finish all of this.",
            textZh: "这份量太大了！我肯定吃不完。",
            culturalNote:
              "美国餐厅份量通常是中国的 1.5-2 倍。吃不完非常正常，大部分美国人都会打包。据统计，美国人在餐厅平均会打包 40% 的食物。",
            commonMistake: {
              wrong: "This food is too much, I can't eat it.",
              correct: "This portion is huge! There's no way I can finish all of this.",
              explanation: '"too much" 可能被理解为对食物不满意。用 "portion is huge" 更自然，纯粹在说份量大。',
            },
            casualVersion: "Whoa, this is massive! No way I'm finishing this.",
            formalityVariants: {
              casual: "Whoa, this is massive!",
              standard: "This portion is huge! There's no way I can finish all of this.",
              formal: "My goodness, this is quite a generous portion. I do not think I will be able to finish it all.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yeah, our portions are pretty big! Want me to bring you some boxes?",
            textZh: "是的，我们份量挺大的！要我拿几个盒子来吗？",
            alternativeExpressions: [
              {
                textEn: "The leftovers reheat really well! I can grab you a box.",
                textZh: "剩菜回家热一下很好吃的！我给你拿个盒子。",
                actionHint: "服务员主动建议打包",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "leftovers", zh: "剩菜/吃剩的" },
              { en: "reheat", zh: "重新加热" },
            ],
            casualVersion: "Yeah, we don't mess around with portions! Box?",
            formalityVariants: {
              casual: "Yeah, we don't mess around with portions! Box?",
              standard: "Our portions are pretty big! Want me to bring you some boxes?",
              formal: "Yes, our portions are quite generous. Shall I bring you some containers?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please. Could I get two boxes? One for the pasta and one for the steak.",
            textZh: "好的。能给我两个盒子吗？一个装意面，一个装牛排。",
            casualVersion: "Yeah, two boxes — one for the pasta, one for the steak.",
            formalityVariants: {
              casual: "Yeah, two boxes — one for the pasta, one for the steak.",
              standard: "Could I get two boxes? One for the pasta and one for the steak.",
              formal: "Yes, please. May I have two containers? One for the pasta and one for the steak.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Here you go — two boxes. Oh, and just so you know, the pasta is even better the next day!",
            textZh: "给你——两个盒子。对了，告诉你，这个意面放到第二天更好吃！",
            alternativeExpressions: [
              {
                textEn: "Two boxes! Pro tip — microwave the pasta for about 90 seconds, it's just as good.",
                textZh: "两个盒子！小贴士——意面微波炉加热 90 秒，味道一样好。",
                actionHint: "服务员分享加热技巧",
                frequency: "occasional",
              },
            ],
            culturalNote: "美国服务员经常会告诉你剩菜怎么加热最好。这是友好的服务，不是在催你走。",
            casualVersion: "Here ya go! The pasta's killer the next day, by the way.",
            formalityVariants: {
              casual: "Here ya go! The pasta's killer the next day, by the way.",
              standard: "Here you go. The pasta is even better the next day!",
              formal: "Here are your containers. You will find that the pasta reheats beautifully the following day.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know! Thanks for the tip. That'll be great for lunch tomorrow.",
            textZh: "好的！谢谢提醒。明天午饭正好吃。",
            casualVersion: "Nice! Tomorrow's lunch is sorted then.",
            formalityVariants: {
              casual: "Nice! Tomorrow's lunch is sorted then.",
              standard: "Good to know! Thanks for the tip.",
              formal: "That is wonderful to know. Thank you for the suggestion.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 续杯 Free Refills ====================
  {
    id: "restaurant-refill",
    tags: ["refill", "续杯", "free refill", "drink", "self-serve"],
    category: "restaurant",
    titleZh: "续杯",
    titleEn: "Getting a Refill",
    description: "理解美国免费续杯文化并正确要求续杯",
    otherRole: "服务员",
    otherRoleIcon: "🥤",
    flows: [
      // --- Flow 1: 在有服务员的餐厅要续杯 ---
      {
        id: "table-service",
        titleZh: "餐厅要续杯",
        titleEn: "Table Service Refill",
        description: "在有服务员的餐厅要求续杯饮料",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "How's everything tasting? Can I top off your drink?",
            textZh: "味道怎么样？要不要我帮你续杯？",
            keyPhrases: [{ en: "top off", zh: "续满/加满" }],
            alternativeExpressions: [
              {
                textEn: "Need a refill on that Coke?",
                textZh: "可乐要续杯吗？",
                actionHint: "说 yes please 即可",
                frequency: "common",
              },
              {
                textEn: "Looks like you're running low — can I get you a refill?",
                textZh: "看起来快喝完了——要续杯吗？",
                actionHint: "说 yes 或 no thanks",
                frequency: "common",
              },
            ],
            culturalNote:
              "美国正餐餐厅的服务员会主动观察你的杯子。如果快空了，他们会主动来问是否续杯。碳酸饮料、冰茶、咖啡通常免费续杯，这在中国几乎不存在。",
            casualVersion: "Refill?",
            formalityVariants: {
              casual: "Refill?",
              standard: "Can I top off your drink?",
              formal: "May I offer you a refill on your beverage?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! Is the iced tea free refills?",
            textZh: "好的！冰茶续杯免费吗？",
            culturalNote:
              "在美国，大部分餐厅的软饮料（soda）、冰茶（iced tea）、咖啡（drip coffee）都是免费续杯的。但果汁、奶昔、酒精饮料不免费续。问一句是完全正常的。",
            commonMistake: {
              wrong: "Can I have another iced tea? How much does it cost?",
              correct: "Is the iced tea free refills?",
              explanation: '直接问 free refills 更自然。如果是免费的，说 "Can I get a refill" 就行。',
            },
            casualVersion: "Yeah! Is iced tea free refills?",
            formalityVariants: {
              casual: "Yeah! Is iced tea free refills?",
              standard: "Yes, please! Is the iced tea free refills?",
              formal: "Yes, thank you. Are refills complimentary for the iced tea?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yep! Iced tea, coffee, and all the sodas are free refills. I'll bring you a fresh glass.",
            textZh: "是的！冰茶、咖啡、和所有碳酸饮料都免费续杯。我给你拿一杯新的。",
            keyPhrases: [
              { en: "free refills", zh: "免费续杯" },
              { en: "fresh glass", zh: "新杯子（换一个干净的杯子）" },
            ],
            culturalNote: "有些餐厅续杯会换新杯子（fresh glass），有些会直接在原杯子里续满。两种都正常。",
            casualVersion: "Yep, all free! Be right back.",
            formalityVariants: {
              casual: "Yep, all free! Be right back.",
              standard: "Iced tea, coffee, and all the sodas are free refills. I'll bring you a fresh glass.",
              formal:
                "Certainly. The iced tea, coffee, and all soft drinks come with complimentary refills. I will bring you a fresh glass.",
            },
          },
          {
            speaker: "you",
            textEn: "Awesome, thank you!",
            textZh: "太好了，谢谢！",
            casualVersion: "Sweet, thanks!",
            formalityVariants: {
              casual: "Sweet, thanks!",
              standard: "Awesome, thank you!",
              formal: "That is wonderful. Thank you very much.",
            },
          },
        ],
      },
      // --- Flow 2: 自助续杯站 ---
      {
        id: "self-serve",
        titleZh: "自助续杯",
        titleEn: "Self-Serve Refill Station",
        description: "在快餐店使用自助饮料机续杯",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, where's the drink station? I'd like to get a refill.",
            textZh: "不好意思，饮料机在哪？我想续杯。",
            keyPhrases: [{ en: "drink station", zh: "饮料机/饮料台" }],
            culturalNote:
              "美国很多快餐店和一些正餐店有 self-serve drink station（自助饮料机），你可以自己无限续杯。有些店给你空杯，自己去打饮料。",
            commonMistake: {
              wrong: "Where is the drink machine?",
              correct: "Where's the drink station?",
              explanation: "drink station 或 soda fountain 是更常用的说法。drink machine 通常指自动售货机。",
            },
            casualVersion: "Hey, where do I get a refill?",
            formalityVariants: {
              casual: "Hey, where do I get a refill?",
              standard: "Excuse me, where's the drink station?",
              formal: "Pardon me, could you direct me to the beverage station?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "It's right over there by the napkins. Help yourself — refills are free!",
            textZh: "就在那边纸巾旁边。自己去打——续杯免费的！",
            keyPhrases: [
              { en: "help yourself", zh: "自己来/请自便" },
              { en: "right over there", zh: "就在那边" },
            ],
            alternativeExpressions: [
              {
                textEn: "The soda fountain is next to the condiment bar. Go ahead and refill as much as you want!",
                textZh: "饮料机在调料台旁边。想续多少续多少！",
                actionHint: "自己去操作饮料机",
                frequency: "common",
              },
            ],
            culturalNote:
              'help yourself 是"请自便"的意思，表示你可以自己操作，不需要别人帮忙。soda fountain 是饮料机的另一个常见叫法。',
            casualVersion: "Over there! Help yourself.",
            formalityVariants: {
              casual: "Over there! Help yourself.",
              standard: "It's right over there. Help yourself — refills are free!",
              formal:
                "The beverage station is just over there by the napkin dispenser. Please help yourself to unlimited refills.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks! Can I mix different sodas, or is that weird?",
            textZh: "谢谢！我可以混不同的汽水吗，还是那样很奇怪？",
            culturalNote:
              '在美国，混不同口味的汽水（叫 "suicide" 或 "swamp water"）是很多人小时候做的事。虽然不是每个人都这么做，但完全可以，不会被人觉得奇怪。',
            casualVersion: "Thanks! Is it cool to mix flavors?",
            formalityVariants: {
              casual: "Thanks! Is it cool to mix flavors?",
              standard: "Can I mix different sodas?",
              formal: "Thank you. Is it acceptable to combine different beverages?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Ha! Go for it. Some people mix Coke and Sprite — it's actually pretty good.",
            textZh: "哈！随便混。有些人把可乐和雪碧混在一起——其实还挺好喝的。",
            casualVersion: "Ha, go for it! Coke and Sprite is solid.",
            formalityVariants: {
              casual: "Ha, go for it!",
              standard: "Go for it! Some people mix Coke and Sprite.",
              formal: "By all means! Some customers enjoy mixing cola and lemon-lime soda.",
            },
          },
        ],
      },
      // --- Flow 3: 续杯礼仪——不同餐厅的规则差异 ---
      {
        id: "refill-etiquette",
        titleZh: "续杯礼仪与规则差异",
        titleEn: "Refill Etiquette & Rules by Venue",
        description: "了解不同类型餐厅的续杯政策差异——Diner无限续杯 vs 非连锁餐厅可能收费",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, I noticed my coffee cup is empty. Do you guys do free refills here?",
            textZh: "不好意思，我咖啡喝完了。你们这里免费续杯吗？",
            culturalNote: "在美国，是否免费续杯取决于餐厅类型。Diner（美式小餐馆）和连锁餐厅几乎都免费续杯。但独立咖啡馆、高档餐厅或精品咖啡店通常不提供免费续杯。问一句完全正常，不丢人。",
            commonMistake: {
              wrong: "Can I have one more coffee? Is it free?",
              correct: "Do you guys do free refills here?",
              explanation: "'Do you do free refills' 是问续杯政策的标准说法。'Can I have one more' 听起来像在单独点一杯新的。",
            },
            casualVersion: "Hey, my coffee's empty. Free refills here?",
            formalityVariants: {
              casual: "Hey, my coffee's empty. Free refills here?",
              standard: "Excuse me, my coffee cup is empty. Do you do free refills?",
              formal: "Pardon me, I notice my coffee has run out. Does this establishment offer complimentary refills?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely! Drip coffee refills are free — I'll top you off right now. Just so you know, espresso drinks like lattes and cappuccinos aren't included in that, though.",
            textZh: "当然！普通滴滤咖啡续杯免费——我现在就给你续。不过提醒一下，拿铁、卡布奇诺这种浓缩咖啡饮品不包含在内。",
            keyPhrases: [
              { en: "drip coffee", zh: "滴滤咖啡（普通美式）" },
              { en: "top you off", zh: "给你续满" },
              { en: "espresso drinks", zh: "浓缩咖啡饮品" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing! Regular coffee is always free refills. Specialty drinks like lattes are a separate charge though.",
                textZh: "没问题！普通咖啡永远免费续杯。但拿铁这种特调饮品另外收费。",
                actionHint: "确认自己喝的类型",
                frequency: "common",
              },
              {
                textEn: "Yep, free refills on our house blend all day long. The fancy stuff — espresso, lattes — those you'd need to order again.",
                textZh: "是的，我们的招牌咖啡全天免费续杯。高级的——浓缩、拿铁——那些需要重新点。",
                actionHint: "区分drip coffee和espresso drinks",
                frequency: "common",
              },
            ],
            culturalNote: "美国的 drip coffee（滴滤咖啡）和 espresso drinks（浓缩咖啡饮品）是两个完全不同的分类。Diner 里的那种大壶咖啡几乎永远免费续杯，但星巴克的拿铁当然不会。",
            casualVersion: "Yep! Drip coffee's free refills. I'll top you off. Lattes and stuff like that, nah, those aren't included.",
            formalityVariants: {
              casual: "Yep! Drip coffee's free. I'll top you off. Lattes and those fancy ones aren't included though.",
              standard: "Absolutely! Drip coffee refills are free. I'll bring you a fresh cup. Espresso drinks like lattes aren't included, though.",
              formal: "Certainly. Complimentary refills are available for our standard drip coffee. I will refresh your cup momentarily. Please note, however, that espresso-based beverages such as lattes and cappuccinos are not included in the refill policy.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. So, uh, is this a diner thing? Like, I went to a small independent café yesterday and they charged me for a second cup.",
            textZh: "了解了。所以，嗯，这是 Diner 才有的吗？我昨天去了一家独立小咖啡馆，续杯被收费了。",
            culturalNote: "discourse marker 'so, uh' 在口语中很常见，表示在思考或组织语言。独立咖啡馆（independent café）和 Diner 的续杯政策完全不同，这是很多中国游客的困惑点。",
            commonMistake: {
              wrong: "Is refill only for diner?",
              correct: "Is this a diner thing?",
              explanation: "'Is this a ... thing?' 是美式口语中非常地道的问法，意思是'这是...才有的习惯吗？'",
            },
            casualVersion: "Is this, like, a diner thing? Went to a café yesterday and they charged me for a second cup.",
            formalityVariants: {
              casual: "Wait, is this just a diner thing? A café yesterday charged me for a second cup.",
              standard: "Is the free refill policy mainly a diner thing? A small café charged me for a second cup yesterday.",
              formal: "I see. Is this complimentary refill policy specific to diners? I visited an independent café yesterday and was charged for a second cup of coffee.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yeah, pretty much! Diners, chain restaurants like IHOP and Denny's, and most family restaurants — free refills are standard. But independent cafés, especially specialty coffee shops, usually charge per cup because their coffee costs more to make. It's not rude, just different business models.",
            textZh: "是的，差不多！Diner、连锁餐厅比如 IHOP 和 Denny's、还有大多数家庭餐厅——免费续杯是标配。但独立咖啡馆，特别是精品咖啡店，通常按杯收费因为咖啡成本更高。这不是不厚道，只是不同的经营模式。",
            keyPhrases: [
              { en: "chain restaurants", zh: "连锁餐厅" },
              { en: "family restaurants", zh: "家庭餐厅" },
              { en: "specialty coffee shops", zh: "精品咖啡店" },
              { en: "business models", zh: "经营模式" },
            ],
            alternativeExpressions: [
              {
                textEn: "It depends on the place. Diners and chains — always free refills. But artisan coffee shops? They charge per cup because the beans are pricier. Totally normal either way.",
                textZh: "看地方。Diner和连锁——永远免费续杯。但精品咖啡店？按杯收费因为豆子更贵。两种都正常。",
                actionHint: "看餐厅类型判断",
                frequency: "common",
              },
            ],
            culturalNote: "美国的续杯文化其实和餐厅定位有关。Diner 的咖啡成本极低（一杯可能只要几分钱），所以免费续杯是拉客手段。精品咖啡店的单杯成本可能在$2-3，自然不会免费续。",
            casualVersion: "Yeah, basically! Diners, chains like IHOP and Denny's, family places — free refills, always. But indie cafés, especially the fancy coffee spots, charge per cup. Different business, that's all.",
            formalityVariants: {
              casual: "Pretty much! Diners and chains — free refills, always. Indie cafés? They charge per cup. Different vibes, different rules.",
              standard: "Yes. Diners, chain restaurants, and family restaurants offer free refills as standard. Independent cafés and specialty coffee shops usually charge per cup due to higher coffee costs. It's simply different business models.",
              formal: "Indeed. Diners, chain restaurants such as IHOP and Denny's, and most family-style establishments offer complimentary refills as a standard practice. Independent cafés and specialty coffee establishments, however, typically charge for each serving, as their production costs are considerably higher. It reflects differing business models rather than any lack of hospitality.",
            },
          },
          {
            speaker: "you",
            textEn: "Makes sense. Oh, one more thing — what about iced tea? I ordered one earlier and I'm not sure if that's free refills too.",
            textZh: "有道理。哦，还有一个问题——冰茶呢？我之前点了一杯，不确定续杯是不是也免费。",
            culturalNote: "美国南方的 sweet tea（甜冰茶）和全国的 unsweetened iced tea 在大多数餐厅都免费续杯。这和中国完全不同——中国的茶续水免费但冰茶饮品要另付费。",
            commonMistake: {
              wrong: "Is iced tea also refill free?",
              correct: "Is iced tea free refills too?",
              explanation: "'free refills' 作为一个固定短语使用更自然。",
            },
            casualVersion: "Makes sense. Oh, what about iced tea? Is that free refills too?",
            formalityVariants: {
              casual: "Got it. Quick question — iced tea, free refills too?",
              standard: "That makes sense. What about iced tea? Is that included in free refills?",
              formal: "I understand. One additional question — does the complimentary refill policy extend to iced tea as well?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yep! Iced tea, hot tea, regular coffee, and all the fountain sodas — those are all free refills here. Basically, if it comes from a machine or a pot, it's free. Bottled drinks, fresh juice, smoothies — those you'd pay for each one.",
            textZh: "是的！冰茶、热茶、普通咖啡和所有机器出的汽水——这些都免费续杯。基本上，从机器或壶里出来的就免费。瓶装饮料、鲜榨果汁、冰沙——那些每杯都要付钱。",
            keyPhrases: [
              { en: "fountain sodas", zh: "机器出的汽水（用饮料机打的）" },
              { en: "bottled drinks", zh: "瓶装饮料" },
              { en: "fresh juice", zh: "鲜榨果汁" },
            ],
            alternativeExpressions: [
              {
                textEn: "Iced tea's free refills, for sure. So is coffee and sodas. Rule of thumb — if we pour it from a pitcher or a machine, it's free. Anything in a bottle or freshly made, that's extra.",
                textZh: "冰茶免费续杯，没问题。咖啡和汽水也是。经验法则——如果是从壶或机器倒的就免费。瓶装或现做的就要额外付。",
                actionHint: "记住这个判断方法",
                frequency: "common",
              },
            ],
            culturalNote: "判断是否免费续杯有一个简单的经验法则：从机器或壶里出来的饮料（drip coffee, iced tea, fountain soda）几乎都免费续杯。瓶装的、现做的（fresh juice, smoothie, bottled water）都不免费。",
            casualVersion: "Yep! Iced tea, coffee, fountain sodas — all free refills. If it's from a machine or pot, it's free. Bottled stuff, juice, smoothies — nope, gotta pay for each.",
            formalityVariants: {
              casual: "Yeah! Iced tea, coffee, sodas — all free. If it comes from a machine, it's free. Bottled stuff? Nah, that costs extra.",
              standard: "Yes! Iced tea, hot tea, coffee, and fountain sodas are all free refills. Bottled drinks, fresh juice, and smoothies are charged per serving.",
              formal: "Indeed. Iced tea, hot tea, standard coffee, and all fountain beverages are included in our complimentary refill program. Bottled beverages, freshly prepared juices, and smoothies, however, are priced individually.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it — if it comes from a machine, it's free. That's a good rule of thumb. Can I get a refill on the iced tea then?",
            textZh: "明白了——从机器出来的就免费。这个经验法则不错。那能帮我续一杯冰茶吗？",
            casualVersion: "Machine = free, got it. Can I get a refill on the iced tea?",
            commonMistake: {
              wrong: "Please give me one more iced tea.",
              correct: "Can I get a refill on the iced tea?",
              explanation: "'get a refill on' 是续杯的标准说法。'give me one more' 听起来像重新点一杯。",
            },
            formalityVariants: {
              casual: "Machine stuff is free, got it. Refill on the iced tea?",
              standard: "Understood. Could I get a refill on the iced tea, please?",
              formal: "I understand perfectly. Might I trouble you for a refill of the iced tea?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Coming right up! Oh, and just a heads up — if you're ever at a restaurant and you're not sure, just ask. No one will judge you. Visitors ask about refills all the time. It's totally normal.",
            textZh: "马上来！对了，提醒一下——如果在餐厅不确定，直接问就好。没人会介意的。游客经常问续杯的事。完全正常。",
            keyPhrases: [
              { en: "coming right up", zh: "马上来" },
              { en: "heads up", zh: "提醒一下" },
              { en: "no one will judge you", zh: "没人会介意/评判你" },
            ],
            alternativeExpressions: [
              {
                textEn: "Be right back with that! And hey, don't ever feel weird asking about refills. Every tourist asks. It's totally fine.",
                textZh: "马上回来！别觉得问续杯奇怪。每个游客都问。完全没问题。",
                actionHint: "大胆问",
                frequency: "common",
              },
            ],
            culturalNote: "美国人非常习惯被问续杯政策，不会觉得奇怪。'No one will judge you' 是美国人常用来鼓励别人放心提问的说法。旅行时大胆问就好。",
            casualVersion: "Coming right up! And don't stress about asking — everyone asks about refills. Totally normal.",
            formalityVariants: {
              casual: "On it! And seriously, don't worry about asking. Everyone does. Totally normal.",
              standard: "Coming right up! And just so you know, it's completely fine to ask about refill policies. Visitors do it all the time.",
              formal: "Right away. And please do not hesitate to inquire about refill policies at any establishment. It is an entirely reasonable question that we receive frequently.",
            },
          },
        ],
      },
    ],
  },

  // ==================== Walk-in 排队等位 ====================
  {
    id: "restaurant-wait-list",
    tags: ["wait list", "排队", "walk-in", "buzzer", "等位", "no reservation"],
    category: "restaurant",
    titleZh: "排队等位",
    titleEn: "Walk-in Wait List",
    description: "没有预约，到热门餐厅排队等位",
    otherRole: "餐厅领位员",
    otherRoleIcon: "📋",
    flows: [
      // --- Flow 1: 标准排队 ---
      {
        id: "standard-wait",
        titleZh: "标准排队等位",
        titleEn: "Standard Wait",
        description: "到餐厅没有预约，排队拿 buzzer 等位",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "领位员",
            textEn: "Hi! Welcome. Do you have a reservation?",
            textZh: "你好！欢迎。有预约吗？",
            alternativeExpressions: [
              {
                textEn: "Hey! Reservation tonight?",
                textZh: "嘿！今晚有预约吗？",
                actionHint: "如果没预约说 no, we're walk-ins",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! Reservation?",
            formalityVariants: {
              casual: "Hey! Reservation?",
              standard: "Do you have a reservation?",
              formal: "Good evening. Welcome. Do you have a reservation with us this evening?",
            },
          },
          {
            speaker: "you",
            textEn: "No, we don't. We're walk-ins. Is there a wait?",
            textZh: "没有预约。我们是直接来的。需要等位吗？",
            keyPhrases: [
              { en: "walk-ins", zh: "没预约直接来的客人" },
              { en: "is there a wait", zh: "需要等吗/要排队吗" },
            ],
            culturalNote:
              'walk-in 是没有预约直接来的客人。在热门餐厅，walk-in 通常需要排队。"Is there a wait?" 是问排队时间最自然的方式。',
            commonMistake: {
              wrong: "We don't have reservation. How long do we need to wait?",
              correct: "We're walk-ins. Is there a wait?",
              explanation:
                'walk-in 是一个词就说清了。"Is there a wait" 比 "How long do we need to wait" 更自然（因为你还不确定是否需要等）。',
            },
            casualVersion: "Nah, just walk-ins. Long wait?",
            formalityVariants: {
              casual: "Nah, just walk-ins. Long wait?",
              standard: "No, we're walk-ins. Is there a wait?",
              formal: "Unfortunately, we do not. We are walk-ins. Would there happen to be a wait?",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "How many in your party?",
            textZh: "你们几位？",
            keyPhrases: [{ en: "how many in your party", zh: "你们几位" }],
            alternativeExpressions: [
              { textEn: "Party of how many?", textZh: "几位？", actionHint: "说人数", frequency: "common" },
              { textEn: "How many tonight?", textZh: "今晚几位？", actionHint: "直接说数字", frequency: "common" },
            ],
            culturalNote:
              'party 在这里不是"派对"，而是"一行人/一桌"。"Party of two" 就是"两位"。这是美国餐厅的标准用语。',
            casualVersion: "How many?",
            formalityVariants: {
              casual: "How many?",
              standard: "How many in your party?",
              formal: "Certainly. How many guests will be dining with us this evening?",
            },
          },
          {
            speaker: "you",
            textEn: "Two, please.",
            textZh: "两位。",
            casualVersion: "Just two.",
            formalityVariants: {
              casual: "Just two.",
              standard: "Two, please.",
              formal: "There are two of us.",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Okay, it's about a 25-minute wait right now. Can I get a name for the list?",
            textZh: "好的，现在大概要等 25 分钟。留个名字好吗？",
            keyPhrases: [{ en: "name for the list", zh: "名字登记" }],
            alternativeExpressions: [
              {
                textEn: "We're looking at about 25 minutes. What name should I put down?",
                textZh: "大概等 25 分钟。登记什么名字？",
                actionHint: "说一个容易听懂的名字",
                frequency: "common",
              },
            ],
            culturalNote: "美国排队等位是按名字叫号，不是按编号。用你的名字或姓都行。如果中文名难发音，可以用英文名。",
            casualVersion: "About 25 minutes. Name?",
            formalityVariants: {
              casual: "About 25 minutes. Name?",
              standard: "It's about a 25-minute wait. Can I get a name?",
              formal: "The current wait is approximately 25 minutes. May I have a name for the reservation list?",
            },
          },
          {
            speaker: "you",
            textEn: "It's Wei. W-E-I.",
            textZh: "Wei。W-E-I。",
            culturalNote:
              "主动拼读名字可以避免误听。中文名在英语环境中容易被听错，拼一遍是好习惯。也可以说 \"Wei, like the word 'way'\" 用同音词帮助理解。",
            casualVersion: "Wei. W-E-I.",
            formalityVariants: {
              casual: "Wei. W-E-I.",
              standard: "It's Wei. W-E-I.",
              formal: "The name is Wei. That is W-E-I.",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn:
              "Got it, Wei. Here's a buzzer — it'll go off when your table is ready. Feel free to wait inside or step outside.",
            textZh: "好的 Wei。这是呼叫器——桌位好了它会响。你可以在里面等，也可以出去走走。",
            keyPhrases: [
              { en: "buzzer", zh: "呼叫器/振动器" },
              { en: "go off", zh: "响起来/振动" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Here's a pager. We'll buzz you when it's ready. The bar's open if you want to grab a drink while you wait!",
                textZh: "给你传呼机。好了我们会叫你。吧台开着，等位的时候可以先喝一杯！",
                actionHint: "拿好 buzzer 等着",
                frequency: "common",
              },
            ],
            culturalNote:
              "buzzer（也叫 pager）是美国餐厅排队用的振动器。桌子好了它会闪灯+振动。很多餐厅还会让你在吧台先点杯饮料边等。",
            casualVersion: "Wei, party of two. Here's your buzzer. Hang tight!",
            formalityVariants: {
              casual: "Here's your buzzer. Hang tight!",
              standard: "Here's a buzzer. It'll go off when your table is ready.",
              formal:
                "Here is your pager. It will alert you when your table becomes available. Please feel free to wait in our lounge area or step outside.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thank you! We'll be right outside.",
            textZh: "好的，谢谢！我们在外面等。",
            casualVersion: "Cool, we'll be outside.",
            formalityVariants: {
              casual: "Cool, we'll be outside.",
              standard: "Thank you! We'll be right outside.",
              formal: "Thank you very much. We will wait just outside.",
            },
          },
        ],
      },
      // --- Flow 2: 等太久想问进度 ---
      {
        id: "check-status",
        titleZh: "等太久想问进度",
        titleEn: "Checking Wait Status",
        description: "已经等了很久，想去前台问问还要多久",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, we've been waiting for about 35 minutes now. Our name is Wei — any idea how much longer?",
            textZh: "你好，我们已经等了大概 35 分钟了。名字是 Wei——大概还要多久？",
            culturalNote: "等超过预估时间时去问进度是完全合理的。语气平和地说事实（已经等了 X 分钟）比直接抱怨更有效。",
            commonMistake: {
              wrong: "We've been waiting too long! When is our table ready?",
              correct: "We've been waiting about 35 minutes. Any idea how much longer?",
              explanation: '先陈述事实再提问，比直接抱怨效果好。"Any idea how much longer" 是很自然的追问方式。',
            },
            casualVersion: "Hey, it's been like 35 minutes for Wei, party of two. How we looking?",
            formalityVariants: {
              casual: "Hey, it's been like 35 minutes. How we looking?",
              standard: "We've been waiting about 35 minutes. Our name is Wei. Any idea how much longer?",
              formal:
                "Excuse me. We have been waiting for approximately 35 minutes. The name is Wei, party of two. Would you be able to give us an update on our wait time?",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn:
              "I'm so sorry about the wait, Wei! Let me check... You're actually next in line. Should be just a few more minutes.",
            textZh: "非常抱歉让你等了 Wei！我看看……你们其实是下一个了。再等几分钟就好。",
            alternativeExpressions: [
              {
                textEn: "Sorry about that! We had a big party that took longer than expected. You're up next!",
                textZh: "不好意思！有一大桌比预想的久。你们下一个！",
                actionHint: "快了，再等一下",
                frequency: "common",
              },
            ],
            keyPhrases: [
              { en: "next in line", zh: "下一个" },
              { en: "a few more minutes", zh: "再等几分钟" },
            ],
            casualVersion: "Sorry! You're next. Just a few more.",
            formalityVariants: {
              casual: "Sorry! You're next. Just a few more.",
              standard: "I'm sorry about the wait. You're actually next in line.",
              formal:
                "My sincere apologies for the extended wait. You are next on our list and should be seated momentarily.",
            },
          },
          {
            speaker: "you",
            textEn: "No worries, thanks for checking. We'll keep waiting.",
            textZh: "没关系，谢谢查看。我们继续等。",
            culturalNote: "即使等得不耐烦了，保持礼貌通常能让你更快被安排。美国服务业很看重互相尊重。",
            casualVersion: "All good! We'll hang tight.",
            formalityVariants: {
              casual: "All good! We'll hang tight.",
              standard: "No worries, thanks for checking.",
              formal: "Not a problem at all. Thank you for the update. We are happy to continue waiting.",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Wei, party of two? Your table is ready! Right this way.",
            textZh: "Wei，两位？你们的桌子好了！这边请。",
            keyPhrases: [{ en: "right this way", zh: "这边请" }],
            alternativeExpressions: [
              {
                textEn: "Wei? Follow me, please!",
                textZh: "Wei？请跟我来！",
                actionHint: "跟着领位员走",
                frequency: "common",
              },
            ],
            casualVersion: "Wei! You're up! Follow me.",
            formalityVariants: {
              casual: "Wei! You're up! Follow me.",
              standard: "Wei, party of two? Your table is ready! Right this way.",
              formal: "Wei, party of two? Your table is now available. Please follow me.",
            },
          },
          {
            speaker: "you",
            textEn: "Finally! Thank you. Oh, where should I return the buzzer?",
            textZh: "终于轮到了！谢谢。对了，buzzer 放哪里？",
            culturalNote:
              "buzzer 通常还给前台或直接放在桌上，服务员会收走。问一句是好习惯。有些餐厅没有 buzzer，直接用手机短信通知。",
            casualVersion: "Yes! Where do I put this buzzer?",
            formalityVariants: {
              casual: "Yes! Where do I put this buzzer?",
              standard: "Thank you! Where should I return the buzzer?",
              formal: "Wonderful, thank you. Where would you like me to return the pager?",
            },
          },
          {
            speaker: "them",
            role: "领位员",
            textEn: "Just leave it on the table, I'll grab it. Enjoy your dinner!",
            textZh: "放桌上就行，我来收。祝你们用餐愉快！",
            casualVersion: "Just leave it. Enjoy!",
            formalityVariants: {
              casual: "Just leave it. Enjoy!",
              standard: "Leave it on the table. Enjoy your dinner!",
              formal: "You may leave it on the table and I will collect it. Please enjoy your evening.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 熟食柜台 Deli Counter ====================
  {
    id: "restaurant-deli-counter",
    tags: ["deli", "熟食柜台", "sliced meat", "切片", "cheese", "pound", "grocery"],
    category: "restaurant",
    titleZh: "超市熟食柜台",
    titleEn: "Deli Counter Order",
    description: "在超市熟食柜台点切片肉类和芝士",
    otherRole: "熟食柜台店员",
    otherRoleIcon: "🥩",
    flows: [
      // --- Flow 1: 标准点单 ---
      {
        id: "standard-order",
        titleZh: "标准熟食点单",
        titleEn: "Standard Deli Order",
        description: "在超市熟食柜台点切片火鸡肉和芝士",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "店员",
            textEn: "Hi! What can I get for you?",
            textZh: "你好！要什么？",
            alternativeExpressions: [
              {
                textEn: "Next in line! What would you like?",
                textZh: "下一位！要什么？",
                actionHint: "直接说你要什么",
                frequency: "common",
              },
              {
                textEn: "What can I slice for you today?",
                textZh: "今天切什么？",
                actionHint: "说你要的肉或芝士的名字",
                frequency: "occasional",
              },
            ],
            culturalNote:
              "美国超市（Walmart, Costco, Whole Foods, Safeway 等）几乎都有 deli counter（熟食柜台）。你可以在这里买现切的肉类和芝士，比预包装的更新鲜。",
            casualVersion: "Hey! What'll it be?",
            formalityVariants: {
              casual: "Hey! What'll it be?",
              standard: "Hi! What can I get for you?",
              formal: "Good afternoon. How may I help you at the deli counter today?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a pound of sliced turkey breast?",
            textZh: "你好，我要一磅切片火鸡胸肉。",
            keyPhrases: [
              { en: "a pound", zh: "一磅（约 454 克）" },
              { en: "sliced", zh: "切片的" },
              { en: "turkey breast", zh: "火鸡胸肉" },
            ],
            culturalNote:
              "美国 deli 按磅（pound）计价。1 pound ≈ 454 克 ≈ 1 斤不到。a pound 大概够做 8-10 个三明治。半磅（half a pound）够一个人吃几天。",
            commonMistake: {
              wrong: "I want 500 grams of turkey.",
              correct: "Can I get a pound of sliced turkey breast?",
              explanation:
                "美国不用克，用 pound 和 ounce。1 pound = 16 ounces。500克 ≈ 1 pound。直接说 a pound 或 half a pound。",
            },
            casualVersion: "Pound of turkey, please.",
            formalityVariants: {
              casual: "Pound of turkey, please.",
              standard: "Can I get a pound of sliced turkey breast?",
              formal: "May I have one pound of sliced turkey breast, please?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Sure! How would you like it sliced — thin, regular, or thick?",
            textZh: "好的！要切多厚——薄的、普通的、还是厚的？",
            keyPhrases: [
              { en: "thin", zh: "薄切" },
              { en: "regular", zh: "普通厚度" },
              { en: "thick", zh: "厚切" },
            ],
            alternativeExpressions: [
              { textEn: "Thin or thick cut?", textZh: "薄切还是厚切？", actionHint: "选厚度", frequency: "common" },
              {
                textEn: "What thickness? I can do shaved, thin, or sandwich cut.",
                textZh: "什么厚度？可以刨片、薄切、或三明治厚度。",
                actionHint: "shaved 是最薄的",
                frequency: "occasional",
              },
            ],
            culturalNote:
              "shaved 是最薄的（几乎透明），适合做 Philly cheesesteak。thin 是标准三明治厚度。thick 适合做色拉或单吃。",
            casualVersion: "Thin or thick?",
            formalityVariants: {
              casual: "Thin or thick?",
              standard: "How would you like it sliced?",
              formal: "How would you prefer it sliced? We can do thin, regular, or thick.",
            },
          },
          {
            speaker: "you",
            textEn: "Thin, please. For sandwiches.",
            textZh: "薄的，谢谢。做三明治用。",
            casualVersion: "Thin. It's for sandwiches.",
            formalityVariants: {
              casual: "Thin. It's for sandwiches.",
              standard: "Thin, please. For sandwiches.",
              formal: "Thin sliced, please. I will be using it for sandwiches.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here's a sample — is this thickness okay for you?",
            textZh: "给你试一片——这个厚度可以吗？",
            keyPhrases: [
              { en: "sample", zh: "试片/样品" },
              { en: "thickness", zh: "厚度" },
            ],
            culturalNote:
              "deli 店员通常会先切一片让你确认厚度。这不是试吃（虽然你可以吃掉），而是确认厚度是否合适。说 perfect 或 a little thinner 即可。",
            casualVersion: "Try this — good?",
            formalityVariants: {
              casual: "Try this — good?",
              standard: "Here's a sample. Is this thickness okay?",
              formal: "Here is a sample slice. Is this thickness to your liking?",
            },
          },
          {
            speaker: "you",
            textEn: "That's perfect, thank you!",
            textZh: "正好，谢谢！",
            casualVersion: "Perfect!",
            formalityVariants: {
              casual: "Perfect!",
              standard: "That's perfect, thank you!",
              formal: "That is exactly right. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Alright, one pound of thin-sliced turkey. Anything else?",
            textZh: "好的，一磅薄切火鸡肉。还要别的吗？",
            alternativeExpressions: [
              {
                textEn: "That came out to 1.1 pounds — is that okay, or do you want me to take some off?",
                textZh: "切出来 1.1 磅——可以吗，还是要去掉一些？",
                actionHint: "通常会多一点点，说 that's fine 就行",
                frequency: "common",
              },
            ],
            culturalNote:
              "切出来的重量经常会比要求的多一点（比如要 1 磅切出 1.1 磅）。店员会问你 is that okay。通常说 that's fine 就好。",
            casualVersion: "One pound turkey, thin. What else?",
            formalityVariants: {
              casual: "One pound turkey, thin. What else?",
              standard: "One pound thin-sliced turkey. Anything else?",
              formal: "That is one pound of thinly sliced turkey breast. Is there anything else I can get for you?",
            },
          },
          {
            speaker: "you",
            textEn: "Can I also get half a pound of Swiss cheese, regular thickness?",
            textZh: "再来半磅瑞士芝士，普通厚度。",
            keyPhrases: [
              { en: "half a pound", zh: "半磅（约 227 克）" },
              { en: "Swiss cheese", zh: "瑞士芝士（有孔洞的，微甜）" },
            ],
            casualVersion: "Half pound of Swiss too. Regular.",
            formalityVariants: {
              casual: "Half pound of Swiss too. Regular.",
              standard: "Can I also get half a pound of Swiss cheese, regular thickness?",
              formal: "May I also have half a pound of Swiss cheese, sliced at regular thickness?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You got it! One pound turkey and half pound Swiss. I'll have those wrapped up for you.",
            textZh: "没问题！一磅火鸡肉和半磅瑞士芝士。我给你包好。",
            keyPhrases: [{ en: "wrapped up", zh: "包好" }],
            casualVersion: "Got it! I'll wrap those up.",
            formalityVariants: {
              casual: "Got it! I'll wrap those up.",
              standard: "One pound turkey and half pound Swiss. I'll have those wrapped up for you.",
              formal:
                "Certainly. That is one pound of turkey and half a pound of Swiss cheese. I will package those for you right away.",
            },
          },
        ],
      },
      // --- Flow 2: 不确定要什么需要帮助 ---
      {
        id: "need-help",
        titleZh: "不确定要什么",
        titleEn: "Need Recommendations",
        description: "第一次在 deli 柜台点东西，不知道选什么",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Hi, I've actually never ordered from a deli counter before. I want to make sandwiches at home — what do you recommend?",
            textZh: "你好，我其实没在熟食柜台买过东西。我想在家做三明治——你推荐什么？",
            culturalNote:
              "美国超市 deli counter 对中国人来说是比较陌生的。在中国超市很少有这种现切服务。诚实说自己不了解完全没问题，店员会很乐意帮忙。",
            commonMistake: {
              wrong: "What meat do you have?",
              correct: "I want to make sandwiches at home — what do you recommend?",
              explanation: "告诉店员你的用途（做三明治），他们能给出更有针对性的推荐。",
            },
            casualVersion: "Hey, first time at the deli. Wanna make sandwiches — what's good?",
            formalityVariants: {
              casual: "Hey, first time at the deli. What's good for sandwiches?",
              standard: "I've never ordered from a deli counter before. What do you recommend for sandwiches?",
              formal:
                "Good afternoon. I am unfamiliar with the deli counter. Could you recommend some selections for making sandwiches at home?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "Oh sure! Our oven-roasted turkey is the most popular. And for cheese, I'd go with provolone — it goes with everything. Wanna try a sample?",
            textZh: "当然！我们烤火鸡肉最受欢迎。芝士的话我推荐普罗卧酮——百搭。要试一片吗？",
            keyPhrases: [
              { en: "oven-roasted", zh: "烤箱烤的" },
              { en: "provolone", zh: "普罗卧酮芝士（意大利芝士，温和柔滑）" },
              { en: "goes with everything", zh: "百搭/什么都配" },
            ],
            culturalNote:
              "deli 店员通常很友好，乐意推荐。turkey（火鸡）是美国最受欢迎的 deli meat，比 ham（火腿）更健康。",
            casualVersion: "Turkey's the best seller. Provolone for cheese. Wanna taste?",
            formalityVariants: {
              casual: "Turkey's the best seller. Provolone for cheese. Wanna taste?",
              standard:
                "Our oven-roasted turkey is the most popular. For cheese, I'd go with provolone. Wanna try a sample?",
              formal:
                "Our oven-roasted turkey is our most popular selection. For cheese, I would recommend the provolone — it pairs well with most meats. Would you care for a sample?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, I'd love to try both!",
            textZh: "好的，两个都想试试！",
            casualVersion: "Yeah, lemme try both!",
            formalityVariants: {
              casual: "Yeah, lemme try both!",
              standard: "Yes, I'd love to try both!",
              formal: "Yes, I would love to sample both, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "Here you go — that's the turkey, and here's the provolone. What do you think?",
            textZh: "给你——这是火鸡肉，这是普罗卧酮。觉得怎么样？",
            casualVersion: "Turkey... and provolone. How's that?",
            formalityVariants: {
              casual: "Turkey... and provolone. How's that?",
              standard: "Here's the turkey, and here's the provolone. What do you think?",
              formal: "Here is a sample of the turkey, and here is the provolone. How do you find them?",
            },
          },
          {
            speaker: "you",
            textEn: "These are both great! How much do I need for about five sandwiches?",
            textZh: "都很好吃！做大概五个三明治需要多少？",
            culturalNote: "不知道该买多少时直接问店员。他们每天切几百次，非常清楚多少肉够做几个三明治。",
            casualVersion: "Both are good! How much for like five sandwiches?",
            formalityVariants: {
              casual: "Both are good! How much for like five sandwiches?",
              standard: "How much do I need for about five sandwiches?",
              formal: "They are both excellent. How much would you recommend for approximately five sandwiches?",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn:
              "I'd say about three-quarters of a pound of turkey and half a pound of cheese. That should be plenty.",
            textZh: "我建议大概四分之三磅火鸡肉和半磅芝士。应该够了。",
            keyPhrases: [
              { en: "three-quarters of a pound", zh: "四分之三磅（约 340 克）" },
              { en: "plenty", zh: "足够了" },
            ],
            culturalNote:
              "pound 的常见分量表达：a quarter pound（1/4磅）、half a pound（1/2磅）、three-quarters（3/4磅）、a pound（1磅）。",
            casualVersion: "Three-quarters turkey, half pound cheese. You'll be set.",
            formalityVariants: {
              casual: "Three-quarters turkey, half pound cheese. You'll be set.",
              standard: "About three-quarters of a pound of turkey and half a pound of cheese. That should be plenty.",
              formal:
                "I would recommend approximately three-quarters of a pound of turkey and half a pound of cheese. That should be more than sufficient.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds perfect. Let's go with that. Thin sliced for both, please.",
            textZh: "听起来正好。就这样吧。两个都薄切。",
            casualVersion: "Let's do it. Thin on both.",
            formalityVariants: {
              casual: "Let's do it. Thin on both.",
              standard: "Sounds perfect. Let's go with that. Thin sliced for both.",
              formal: "That sounds ideal. I will take those amounts, both sliced thin, please.",
            },
          },
          {
            speaker: "them",
            role: "店员",
            textEn: "You got it! I'll have those ready in a minute. Just grab them from the counter when you're ready.",
            textZh: "没问题！一分钟就好。准备好了来柜台拿就行。",
            casualVersion: "On it! Grab 'em when they're done.",
            formalityVariants: {
              casual: "On it! Grab 'em when they're done.",
              standard: "I'll have those ready in a minute. Grab them when you're ready.",
              formal:
                "Absolutely. I will have those prepared in just a moment. You may collect them from the counter when convenient.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 问辣度 ====================
  {
    id: "restaurant-spice-level",
    category: "restaurant",
    titleZh: "问辣度",
    titleEn: "Asking About Spice Level",
    description: "点菜时询问辣度以及请求调整",
    otherRole: "服务员",
    otherRoleIcon: "🌶️",
    flows: [
      {
        id: "spice-level-basic",
        titleZh: "基础辣度沟通",
        titleEn: "Basic Spice Level",
        description: "用简单词汇问菜品辣不辣",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Are you ready to order, or do you have any questions about the menu?",
            textZh: "准备好点单了吗，还是对菜单有什么问题？",
            keyPhrases: [
              { en: "ready to order", zh: "准备好点单了" },
              { en: "questions about the menu", zh: "对菜单有问题" },
            ],
            alternativeExpressions: [
              {
                textEn: "What can I get for you today?",
                textZh: "今天想吃什么？",
                actionHint: "直接问点单",
                frequency: "common",
              },
              {
                textEn: "Take your time — let me know if you have any questions.",
                textZh: "慢慢看——有问题随时问。",
                actionHint: "给更多时间",
                frequency: "common",
              },
            ],
            casualVersion: "Know what you want, or got questions?",
            formalityVariants: {
              casual: "Know what you want?",
              standard: "Are you ready to order, or do you have questions about the menu?",
              formal:
                "Have you had an opportunity to review the menu, or may I answer any questions before you place your order?",
            },
          },
          {
            speaker: "you",
            textEn: "I'm interested in the Thai curry, but how spicy is it?",
            textZh: "我对泰式咖喱感兴趣，但它有多辣？",
            culturalNote:
              "美国餐厅标注的 'spicy' 通常没有中国菜的辣度高。但亚洲餐厅可能辣度偏高。先问清楚再决定。",
            casualVersion: "The Thai curry — how spicy is that?",
            commonMistake: {
              wrong: "Is the curry very hot?",
              correct: "How spicy is the curry?",
              explanation:
                "Hot 既可以指温度也可以指辣度，容易混淆。用 spicy 专门指辣度更清晰。",
            },
            formalityVariants: {
              casual: "How spicy is that curry?",
              standard: "I'm interested in the Thai curry. How spicy is it?",
              formal:
                "I would like to inquire about the Thai curry. Could you describe the level of spiciness?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It's got a good kick to it — I'd say it's a medium heat. We can make it mild, medium, or hot. What's your preference?",
            textZh: "挺有劲的——我觉得是中辣。我们可以做成微辣、中辣或者辣。你想要哪种？",
            keyPhrases: [
              { en: "a good kick", zh: "挺有劲/辣劲" },
              { en: "mild, medium, or hot", zh: "微辣、中辣、辣" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It comes with some heat. You can choose your spice level — mild, medium, or hot.",
                textZh: "它自带一些辣度。你可以选辣度——微辣、中辣或辣。",
                actionHint: "标准介绍可选辣度",
                frequency: "common",
              },
              {
                textEn:
                  "On our spice scale, it's about a 3 out of 5 by default. We can bump it up or tone it down.",
                textZh: "按我们的辣度标准，默认大约是5分里的3分。可以加辣或者减辣。",
                actionHint: "用数字标度",
                frequency: "occasional",
              },
            ],
            casualVersion: "It's got some heat — medium level. Want it mild, medium, or hot?",
            formalityVariants: {
              casual: "It's got a kick! Mild, medium, or hot?",
              standard: "It's a medium heat by default. We can make it mild, medium, or hot.",
              formal:
                "The dish carries a moderate level of heat as prepared. We are able to adjust the spice to your preference — mild, medium, or hot.",
            },
          },
          {
            speaker: "you",
            textEn: "I like spicy food, but not too extreme. Can I get it medium-hot?",
            textZh: "我喜欢吃辣，但不要太极端。可以做中辣偏辣吗？",
            culturalNote:
              "美国餐厅对辣度的定义很不统一。medium-hot/medium-plus 这种夹在中间的说法完全可以用，服务员能理解。",
            casualVersion: "I can handle spice. Maybe medium-hot?",
            commonMistake: {
              wrong: "I want middle spicy.",
              correct: "Can I get it medium-hot?",
              explanation:
                "辣度级别用 mild/medium/hot，不用 middle。要求中间档可以说 medium-hot 或 between medium and hot。",
            },
            formalityVariants: {
              casual: "I like it spicy. Medium-hot?",
              standard: "I like spicy food but not too extreme. Could I get medium-hot?",
              formal:
                "I enjoy spicy cuisine but prefer it not overly intense. Would it be possible to prepare it at a medium-hot level?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely! Medium-hot is a popular choice. I'll let the kitchen know. And just so you know, we can always bring hot sauce on the side if you want more heat.",
            textZh: "当然可以！中辣偏辣是很多人的选择。我会告诉厨房。另外，如果你想更辣，我们可以额外上辣酱。",
            keyPhrases: [
              { en: "on the side", zh: "额外/单独上" },
              { en: "hot sauce", zh: "辣酱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure thing. And if you need more heat, we've got chili flakes and hot sauce at the table.",
                textZh: "没问题。如果你需要更辣，桌上有辣椒碎和辣酱。",
                actionHint: "指出桌上调料",
                frequency: "common",
              },
              {
                textEn:
                  "You got it. I'll mark it medium-hot. Want me to bring some extra chili paste on the side?",
                textZh: "收到。我标注中辣偏辣。要不要额外上一份辣椒酱？",
                actionHint: "主动提供额外辣酱",
                frequency: "common",
              },
            ],
            casualVersion: "You got it! I'll tell the kitchen. We've got hot sauce too if you want more.",
            formalityVariants: {
              casual: "Sure! And there's hot sauce if you want more heat.",
              standard:
                "Absolutely, medium-hot. And we can bring hot sauce on the side if you want extra heat.",
              formal:
                "Certainly, I will relay your preference for medium-hot to the kitchen. Additionally, we can provide hot sauce on the side should you desire more intensity.",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please bring some chili sauce on the side. And can you also recommend something not spicy at all for my friend? She can't handle any heat.",
            textZh: "好的，请额外上一份辣酱。还有能推荐一个完全不辣的菜给我朋友吗？她完全不能吃辣。",
            culturalNote:
              "美国人说 'can't handle heat/spice' 是很常见的表达。替不能吃辣的朋友问菜也是正常操作。",
            casualVersion: "Yeah, chili sauce on the side. And my friend needs something with zero spice — any suggestions?",
            commonMistake: {
              wrong: "My friend cannot eat pepper.",
              correct: "My friend can't handle any heat.",
              explanation:
                "'cannot eat pepper' 会让人以为她对辣椒过敏。如果只是不喜欢辣，说 can't handle heat/spice。如果是过敏，要说 allergic to peppers。",
            },
            formalityVariants: {
              casual: "Chili sauce on the side, yeah. Got anything not spicy at all for my friend?",
              standard:
                "Please bring chili sauce on the side. And could you recommend something completely not spicy for my friend?",
              formal:
                "Yes, please include chili sauce on the side. Additionally, could you suggest a dish with no spice whatsoever for my companion? She has a very low tolerance for heat.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! For no spice at all, I'd recommend the garlic butter chicken or the teriyaki noodles. Both are super mild and really popular.",
            textZh: "当然！完全不辣的话，我推荐蒜香黄油鸡或照烧面。都是非常温和的，很受欢迎。",
            keyPhrases: [
              { en: "super mild", zh: "非常温和/完全不辣" },
              { en: "really popular", zh: "很受欢迎" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "The garlic chicken is great if you want zero spice. The teriyaki noodles are also completely mild.",
                textZh: "蒜香鸡非常适合不吃辣的人。照烧面也完全不辣。",
                actionHint: "分别推荐",
                frequency: "common",
              },
              {
                textEn:
                  "We have a few non-spicy options. Our bestseller for that is the teriyaki noodles — no heat at all.",
                textZh: "我们有几个不辣的选择。最畅销的是照烧面——完全不辣。",
                actionHint: "推荐畅销款",
                frequency: "common",
              },
            ],
            casualVersion: "Try the garlic chicken or teriyaki noodles — totally mild, both crowd favorites.",
            formalityVariants: {
              casual: "Garlic chicken or teriyaki noodles — zero spice, both great.",
              standard: "I'd recommend the garlic butter chicken or teriyaki noodles. Both are very mild.",
              formal:
                "For a non-spicy option, I would suggest the garlic butter chicken or the teriyaki noodles. Both are prepared without any chili or pepper and are among our most well-received dishes.",
            },
          },
        ],
      },
      {
        id: "spice-level-intermediate",
        titleZh: "进阶辣度沟通",
        titleEn: "Intermediate Spice Discussion",
        description: "详细讨论辣度类型和过敏考量",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "I have a question about the Sichuan mapo tofu. What kind of spicy is it? Is it more of a tongue-numbing kind or a burning kind?",
            textZh: "我想问一下四川麻婆豆腐。它是哪种辣？是那种麻的感觉还是那种烧灼的辣？",
            culturalNote:
              "美国很多人不知道'麻'和'辣'的区别。在川菜馆可以用 numbing (麻) 和 burning/hot (辣) 来区分。服务员通常能理解。",
            casualVersion: "The mapo tofu — is it the numbing kind of spicy or the burning kind?",
            commonMistake: {
              wrong: "Is it numb spicy or burn spicy?",
              correct: "Is it more of a tongue-numbing spice or a burning heat?",
              explanation:
                "'numb spicy' 不自然。numbing 作形容词修饰 spice，burning 修饰 heat。要用描述性短语。",
            },
            formalityVariants: {
              casual: "The mapo tofu — numbing or burning spicy?",
              standard:
                "What kind of spicy is the Sichuan mapo tofu? Is it tongue-numbing or more of a burning heat?",
              formal:
                "Could you describe the type of spiciness in the Sichuan mapo tofu? Is it characterized more by a Sichuan peppercorn numbing sensation or a capsaicin-based burning heat?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Great question! It's actually both. We use Sichuan peppercorns for that tingly, numbing sensation, and chili oil for the heat. If you want, we can go easy on the peppercorns or the chili — or both.",
            textZh: "好问题！其实两种都有。我们用花椒做出那种麻麻的刺痛感，辣椒油做辣味。如果你想，我们可以少放花椒或辣椒油——或者两者都少放。",
            keyPhrases: [
              { en: "Sichuan peppercorns", zh: "花椒" },
              { en: "tingly, numbing sensation", zh: "麻麻的刺痛感" },
              { en: "go easy on", zh: "少放" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It's got the classic Sichuan combo — numbing from peppercorns and heat from chili. We can adjust either one to your liking.",
                textZh: "是经典的四川组合——花椒的麻和辣椒的辣。两种都可以按你喜好调。",
                actionHint: "用经典组合描述",
                frequency: "common",
              },
              {
                textEn:
                  "Think of it as two layers — the numbing tingle and the spicy heat. You can customize both levels.",
                textZh: "可以理解为两层——麻和辣。两层的程度都可以定制。",
                actionHint: "分层解释",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's both — numbing and spicy. We can dial down either one.",
            formalityVariants: {
              casual: "Both! Numbing plus heat. We can turn either one down.",
              standard:
                "It's both — Sichuan peppercorns for numbing, chili oil for heat. We can adjust either.",
              formal:
                "The dish features a combination of both sensations. Sichuan peppercorns provide the characteristic numbing or 'ma' effect, while chili oil delivers the heat component. We are happy to adjust either element to your preference.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I love the numbing part but want the heat toned down. Can you make it heavy on the peppercorn and light on the chili?",
            textZh: "我喜欢麻但想减辣。能多放花椒少放辣椒吗？",
            culturalNote:
              "在美国的中餐馆可以这样定制，特别是川菜馆。不要不好意思提要求——定制化在美国就餐文化中非常正常。",
            casualVersion: "Love the numbing, not so much the heat. Heavy peppercorn, light chili?",
            commonMistake: {
              wrong: "I want more numb and less spicy.",
              correct: "Can you make it heavy on the peppercorn and light on the chili?",
              explanation:
                "'more numb and less spicy' 虽然能被理解，但更地道的说法是 heavy on X, light on Y。",
            },
            formalityVariants: {
              casual: "More numbing, less heat. That cool?",
              standard:
                "I love the numbing part but want less heat. Heavy peppercorn, light chili, please.",
              formal:
                "I enjoy the numbing quality but would prefer a milder heat. Would it be possible to emphasize the peppercorn while reducing the chili content?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely! I'll tell the chef — extra peppercorn, mild chili. Also, I should mention — we have a spice allergy note on file. Does anyone at your table have any food allergies we should know about?",
            textZh: "完全可以！我跟厨师说——多加花椒，少放辣椒。另外提醒一下——我们有过敏记录系统。你们桌有人对食物过敏吗？",
            keyPhrases: [
              { en: "spice allergy", zh: "香料过敏" },
              { en: "food allergies", zh: "食物过敏" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Got it — lots of peppercorn, easy on the chili. Quick check: any allergies at the table?",
                textZh: "收到——多花椒，少辣椒。快速确认一下：有人过敏吗？",
                actionHint: "简洁确认后问过敏",
                frequency: "common",
              },
              {
                textEn:
                  "Will do. Before I put this in, do I need to flag any allergies for the kitchen? Peanuts, shellfish, anything?",
                textZh: "好的。下单之前，需要给厨房标注什么过敏吗？花生、贝类之类的？",
                actionHint: "列出常见过敏原",
                frequency: "common",
              },
            ],
            casualVersion: "You got it — extra peppercorn, mild chili. Any allergies I should know about?",
            formalityVariants: {
              casual: "Done! Extra peppercorn, less chili. Oh — any allergies?",
              standard:
                "Absolutely, extra peppercorn, mild chili. Does anyone at the table have food allergies?",
              formal:
                "Certainly, I will instruct the chef to increase the peppercorn and reduce the chili. Additionally, for food safety purposes, may I inquire whether anyone at your table has any food allergies we should be aware of?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Actually, yes — my wife is allergic to peanuts. Does the mapo tofu or any of the sauces contain peanuts?",
            textZh: "是的——我太太对花生过敏。麻婆豆腐或者酱料里含花生吗？",
            culturalNote:
              "食物过敏在美国非常受重视。餐厅有法律义务告知过敏原。一定要明确告知服务员，不要只说'不太能吃花生'。要说 allergic。",
            casualVersion: "Yeah, my wife's allergic to peanuts. Any peanuts in the mapo tofu or the sauces?",
            commonMistake: {
              wrong: "My wife doesn't eat peanut.",
              correct: "My wife is allergic to peanuts.",
              explanation:
                "'doesn't eat' 听起来像是偏好，不像过敏。过敏是安全问题，必须用 allergic to 强调严重性。",
            },
            formalityVariants: {
              casual: "Oh yeah — wife's allergic to peanuts. Anything on the menu got peanuts?",
              standard:
                "Yes, my wife is allergic to peanuts. Does the mapo tofu or any sauces contain peanuts?",
              formal:
                "Indeed — my wife has a peanut allergy. Could you please confirm whether the mapo tofu or any accompanying sauces contain peanuts or peanut-derived ingredients?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Thank you for letting me know — that's really important. The mapo tofu itself doesn't have peanuts, but our kitchen does use peanut oil for some dishes, so there's a risk of cross-contamination. Let me check with the chef and I'll be right back.",
            textZh: "谢谢你告诉我——这非常重要。麻婆豆腐本身没有花生，但我们厨房有些菜用花生油，所以有交叉污染的风险。我去问一下厨师，马上回来。",
            keyPhrases: [
              { en: "cross-contamination", zh: "交叉污染" },
              { en: "peanut oil", zh: "花生油" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Good to know. No peanuts in the mapo tofu, but we do use peanut oil in the kitchen. I'll double-check with the chef on cross-contact risk.",
                textZh: "谢谢告知。麻婆豆腐里没花生，但厨房用花生油。我再跟厨师确认交叉接触的风险。",
                actionHint: "强调交叉接触",
                frequency: "common",
              },
              {
                textEn:
                  "I'm glad you mentioned that. Let me flag this as a peanut allergy for the kitchen and confirm every ingredient. Be right back.",
                textZh: "幸好你说了。让我给厨房标记花生过敏并确认所有配料。马上回来。",
                actionHint: "走标准过敏流程",
                frequency: "common",
              },
            ],
            casualVersion:
              "Thanks for the heads-up. No peanuts in the dish, but there's peanut oil in the kitchen. Lemme check with the chef.",
            formalityVariants: {
              casual: "Thanks for telling me. No peanuts in the dish, but we use peanut oil. Let me check.",
              standard:
                "Thank you — very important. No peanuts in the dish itself, but there's peanut oil in the kitchen. Let me confirm with the chef.",
              formal:
                "Thank you for disclosing that — it is critical information. While the mapo tofu does not contain peanuts as an ingredient, our kitchen does utilize peanut oil for certain preparations, which presents a potential cross-contamination risk. Allow me to consult with the chef and I will return promptly with confirmation.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thank you for being so careful. We really appreciate it. If it's a risk, could you suggest a peanut-free dish for her instead?",
            textZh: "谢谢你这么仔细。我们非常感激。如果有风险的话，能推荐一个不含花生的菜给她吗？",
            culturalNote:
              "在美国，因为过敏请求替换菜品是完全正常的，餐厅不会觉得麻烦。好的餐厅会主动帮你找安全的选择。",
            casualVersion: "Thanks for checking. If there's a risk, can you suggest something peanut-free for her?",
            commonMistake: {
              wrong: "If it is dangerous, can you change the dish?",
              correct: "If it's a risk, could you suggest a peanut-free dish instead?",
              explanation:
                "'dangerous' 太强烈了。用 'if it's a risk'（如果有风险）更自然。'change the dish' 不够具体，说 'suggest a peanut-free dish' 更清楚。",
            },
            formalityVariants: {
              casual: "Thanks! If it's risky, what's safe for her?",
              standard:
                "Thank you for being careful. If there's a risk, could you suggest a peanut-free dish for her?",
              formal:
                "We greatly appreciate your diligence. Should there be any risk of peanut contamination, could you kindly recommend an alternative dish that is completely peanut-free?",
            },
          },
        ],
      },
    ],
  },

  // ==================== 份量太大想分享/打包 ====================
  {
    id: "restaurant-portion-share",
    category: "restaurant",
    titleZh: "份量和分享",
    titleEn: "Portion Size & Sharing",
    description: "在美国餐厅讨论份量大小、分享食物",
    otherRole: "服务员",
    otherRoleIcon: "🍽️",
    flows: [
      {
        id: "portion-share-basic",
        titleZh: "基础份量沟通",
        titleEn: "Basic Portion Discussion",
        description: "询问份量大小和是否可以分享",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Before we order, how big are the portions here? We're thinking of sharing a few dishes.",
            textZh: "点菜之前想问一下，你们这里的份量大吗？我们想几个人分着吃。",
            culturalNote:
              "美国餐厅的份量通常比中国大得多。一个主菜（entree）往往够两个人吃。分享是省钱的好办法。",
            casualVersion: "How big are the portions? We might share a few things.",
            commonMistake: {
              wrong: "The dish is big here?",
              correct: "How big are the portions here?",
              explanation:
                "问份量要用 portions（份量）而不是 dish（菜/盘子）。用 How big are 开头的疑问句。",
            },
            formalityVariants: {
              casual: "Are portions big? We're thinking of sharing.",
              standard: "How big are the portions? We're thinking of sharing a few dishes.",
              formal:
                "Could you advise on the portion sizes? We are considering sharing several dishes among us.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Our portions are pretty generous! Most entrees are big enough for two people to share. I'd suggest ordering two or three entrees for your group of four and maybe an appetizer.",
            textZh: "我们的份量挺大的！大多数主菜够两个人分。建议你们四个人点两到三个主菜，再加一个开胃菜。",
            keyPhrases: [
              { en: "portions are generous", zh: "份量很大" },
              { en: "entrees", zh: "主菜" },
              { en: "appetizer", zh: "开胃菜/前菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Yeah, we're known for big portions. Two entrees would probably be enough for your table, honestly.",
                textZh: "是的，我们以份量大出名。说实话两个主菜可能就够你们一桌了。",
                actionHint: "强调份量大",
                frequency: "common",
              },
              {
                textEn:
                  "Our plates are pretty loaded. If you're sharing, I'd say two to three mains and a side or two.",
                textZh: "我们的盘子相当满。如果分着吃，两到三个主菜加一两个配菜就行。",
                actionHint: "给具体建议",
                frequency: "common",
              },
            ],
            casualVersion: "Portions are huge! For four people, two or three entrees should do it.",
            formalityVariants: {
              casual: "Our portions are big — two or three entrees for four people, easy.",
              standard:
                "Portions are generous. For four people, two or three entrees and an appetizer should be plenty.",
              formal:
                "Our portions are quite generous. For a party of four, I would recommend two to three entrees supplemented with an appetizer. Most guests find that sufficient.",
            },
          },
          {
            speaker: "you",
            textEn: "That's helpful. Can we get an extra plate so we can split things? Or do you have a sharing menu?",
            textZh: "这很有帮助。能给我们多拿一个盘子分着吃吗？你们有分享菜单吗？",
            culturalNote:
              "美国大多数餐厅会免费提供额外的盘子（extra/sharing plate）来分食。有些收少量 split fee。直接问就好。",
            casualVersion: "Can we get some extra plates to share? Got a sharing menu?",
            commonMistake: {
              wrong: "Can you give us more bowls for sharing?",
              correct: "Can we get an extra plate to split things?",
              explanation:
                "美国餐厅一般用 plate（盘子），不用 bowl。分食说 split 或 share。额外的盘子叫 extra plate 或 sharing plate。",
            },
            formalityVariants: {
              casual: "Extra plates? And you got a sharing menu?",
              standard: "Can we get extra plates to split things? Do you have a sharing menu?",
              formal:
                "Would it be possible to receive additional plates for sharing? And does the restaurant offer a family-style or sharing menu?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! I'll bring extra plates. We don't have a formal sharing menu, but you can definitely order family-style — just pick a few dishes and we'll bring them to the center of the table.",
            textZh: "当然！我拿额外的盘子过来。我们没有正式的分享菜单，但你们完全可以家庭式点餐——选几道菜，我们放到桌中间大家一起吃。",
            keyPhrases: [
              { en: "family-style", zh: "家庭式/大家分着吃" },
              { en: "center of the table", zh: "桌子中间" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, I'll get you sharing plates. Feel free to order whatever you like and we'll set everything in the middle.",
                textZh: "好的，我拿分享盘。你们随便点，我们都放在中间。",
                actionHint: "简洁回复",
                frequency: "common",
              },
              {
                textEn:
                  "Absolutely. We do family-style a lot. Just order a few things and pass them around.",
                textZh: "当然。我们经常这样做。点几道菜然后传着吃。",
                actionHint: "强调这种方式常见",
                frequency: "common",
              },
            ],
            casualVersion: "Yeah, I'll grab extra plates. Just order family-style — pick some dishes and share.",
            formalityVariants: {
              casual: "Yep! Extra plates coming. Just order family-style.",
              standard:
                "Of course, extra plates coming. Order family-style — choose a few dishes and we'll serve them to share.",
              formal:
                "Certainly, I will bring additional plates. While we do not offer a formal sharing menu, you are welcome to order family-style. Simply select your preferred dishes and we will present them at the center of the table for communal dining.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Perfect. We'll do the pasta, the grilled salmon, and the Caesar salad to share. And could we also get a half portion of the soup if that's possible?",
            textZh: "好的。我们要意面、烤三文鱼和凯撒沙拉，大家分着吃。如果可以的话，汤能来半份吗？",
            culturalNote:
              "美国有些餐厅提供 half portion / lunch portion（半份/午餐份），但不是所有菜都行。直接问不会失礼。",
            casualVersion: "We'll do the pasta, salmon, and Caesar to share. Can we get a half order of the soup?",
            commonMistake: {
              wrong: "Can we have half of the soup?",
              correct: "Could we get a half portion of the soup?",
              explanation:
                "'half of the soup' 听起来像是要把一碗汤分一半。想点半份要说 half portion 或 half order。",
            },
            formalityVariants: {
              casual: "We'll share the pasta, salmon, and Caesar. Half order of the soup too?",
              standard:
                "We'll take the pasta, grilled salmon, and Caesar salad to share. Is a half portion of the soup available?",
              formal:
                "We would like the pasta, grilled salmon, and Caesar salad to share among the table. Additionally, would it be possible to order a half portion of the soup?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "The soup only comes in one size, but it's a pretty small bowl — perfect for sharing between two people. I'll put in the pasta, salmon, salad, and one soup. Anything to drink?",
            textZh: "汤只有一种份量，不过碗不大——两个人分着喝刚好。那我下单意面、三文鱼、沙拉和一份汤。要喝什么吗？",
            keyPhrases: [
              { en: "only comes in one size", zh: "只有一种份量" },
              { en: "anything to drink", zh: "要喝什么吗" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sorry, the soup's only one size, but it's not huge. Should be fine for two. I'll get all that in. Drinks?",
                textZh: "抱歉，汤只有一个规格，但不大。两个人够了。我来下单。喝什么？",
                actionHint: "先道歉再安抚",
                frequency: "common",
              },
              {
                textEn:
                  "We can't do a half soup, but the regular is small enough to share. Let me get that order started. What about beverages?",
                textZh: "汤不能点半份，但常规份的大小可以分享。我先下单。饮料呢？",
                actionHint: "转向饮料",
                frequency: "common",
              },
            ],
            casualVersion: "Soup's one size only, but it's small — good for sharing. Got your order. Drinks?",
            formalityVariants: {
              casual: "Soup's one size but it's small. All set! Drinks?",
              standard:
                "The soup comes in one size, but it's small enough to share. I'll put the order in. What about drinks?",
              formal:
                "Unfortunately, the soup is only available in a single portion size; however, it is modest in volume and suitable for sharing between two diners. I will enter the pasta, grilled salmon, Caesar salad, and one soup. May I also take your beverage orders?",
            },
          },
        ],
      },
      {
        id: "portion-share-intermediate",
        titleZh: "进阶份量和费用",
        titleEn: "Intermediate Portions & Charges",
        description: "处理分菜费、特殊要求和剩余打包",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "We'd like to split one entree between the two of us. Is there a split plate charge?",
            textZh: "我们俩想分一个主菜。有分盘费吗？",
            culturalNote:
              "美国有些餐厅收 split plate fee / sharing fee（分盘费），通常2-5美元。这在高档餐厅更常见。提前问可以避免结账时的意外。",
            casualVersion: "Can we split an entree? Is there a charge for that?",
            commonMistake: {
              wrong: "Can we share plate? Do we need to pay more?",
              correct: "Can we split an entree? Is there a split plate charge?",
              explanation:
                "'share plate' 含义不够具体。split an entree 明确表示一道主菜分两人吃。分盘费的固定说法是 split plate charge。",
            },
            formalityVariants: {
              casual: "Can we split one entree? Extra charge for that?",
              standard:
                "We'd like to split an entree between us. Is there a split plate charge?",
              formal:
                "We would like to share a single entree between the two of us. Is there an additional fee for split plating?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "There's a $3 split plate fee, and we'll divide it onto two plates with a side of bread for each. Or if you prefer, I can just bring an extra plate and you can split it yourselves at the table — no charge for that.",
            textZh: "有3美元的分盘费，我们会分到两个盘子里，每人配一份面包。或者你们想的话，我拿一个空盘子过来你们自己分——那就不收费。",
            keyPhrases: [
              { en: "split plate fee", zh: "分盘费" },
              { en: "extra plate", zh: "额外的盘子" },
              { en: "no charge", zh: "不收费" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "We charge $3 to split it in the kitchen — comes plated separately with garnish. Or grab a free extra plate and do it yourselves.",
                textZh: "厨房分盘收3美元——分别摆盘配装饰。或者拿个免费的空盘自己分。",
                actionHint: "对比两个选择",
                frequency: "common",
              },
              {
                textEn:
                  "Splitting in the kitchen is $3 — nicer presentation. Or I can just bring a side plate for free and you can serve yourselves.",
                textZh: "厨房分盘3美元——摆盘更好看。或者我拿个免费小盘你们自己盛。",
                actionHint: "强调美观差异",
                frequency: "common",
              },
            ],
            casualVersion:
              "It's $3 to split in the kitchen, or I can just bring an extra plate — that's free.",
            formalityVariants: {
              casual: "Three bucks to split it, or just grab a free extra plate.",
              standard:
                "Split plate fee is $3. Or I can bring an extra plate for free and you can divide it yourselves.",
              formal:
                "We assess a $3 split plate fee, which includes individual plating with a side of bread. Alternatively, I can provide a complimentary additional plate and you may portion the dish at your convenience.",
            },
          },
          {
            speaker: "you",
            textEn:
              "We'll just take the extra plate, thanks. Also, I noticed the steak comes with mashed potatoes. Can I substitute that for a side salad instead?",
            textZh: "那就拿个空盘吧，谢谢。另外我注意到牛排配的是土豆泥。能换成沙拉吗？",
            culturalNote:
              "美国餐厅一般允许换配菜（substitute sides），但可能要加钱（upcharge）。常见的 sides 有 fries, mashed potatoes, coleslaw, side salad, steamed vegetables 等。",
            casualVersion: "Just the extra plate. And can I swap the mashed potatoes for a salad?",
            commonMistake: {
              wrong: "Can I change potato to salad?",
              correct: "Can I substitute the mashed potatoes for a side salad?",
              explanation:
                "换配菜用 substitute A for B。'change potato to salad' 虽然能被理解但不够地道。",
            },
            formalityVariants: {
              casual: "Extra plate's fine. Can I swap the potatoes for a salad?",
              standard:
                "We'll take the extra plate. Can I substitute the mashed potatoes for a side salad?",
              formal:
                "The additional plate will be sufficient, thank you. May I substitute the mashed potatoes accompanying the steak for a side salad?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Sure! Swapping to a side salad is no extra charge. If you wanted sweet potato fries instead, that would be an extra $2. What dressing on the salad — ranch, vinaigrette, or blue cheese?",
            textZh: "可以！换成沙拉不加钱。如果要换红薯薯条的话要加2美元。沙拉酱要什么——田园沙拉酱、油醋汁还是蓝纹奶酪？",
            keyPhrases: [
              { en: "no extra charge", zh: "不加钱" },
              { en: "dressing", zh: "沙拉酱" },
              { en: "ranch, vinaigrette, blue cheese", zh: "田园酱、油醋汁、蓝纹奶酪酱" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Side salad swap is free. What dressing? We've got ranch, balsamic vinaigrette, and blue cheese.",
                textZh: "换沙拉免费。什么酱？有田园、巴萨米克油醋汁和蓝纹奶酪。",
                actionHint: "简洁确认",
                frequency: "common",
              },
              {
                textEn:
                  "That's an even swap — no upcharge. For dressing, we have ranch, Italian, balsamic, or blue cheese.",
                textZh: "等价替换——不加钱。酱有田园、意式、巴萨米克或蓝纹奶酪。",
                actionHint: "列更多选择",
                frequency: "common",
              },
            ],
            casualVersion: "Salad swap is free! What dressing — ranch, vinaigrette, blue cheese?",
            formalityVariants: {
              casual: "Free swap! Dressing — ranch, vinaigrette, or blue cheese?",
              standard:
                "Side salad is no extra charge. What dressing would you like?",
              formal:
                "The substitution to a side salad carries no additional charge. Which dressing would you prefer — ranch, vinaigrette, or blue cheese?",
            },
          },
          {
            speaker: "you",
            textEn: "Vinaigrette on the side, please. I like to control how much I use.",
            textZh: "油醋汁放旁边，谢谢。我喜欢自己控制用量。",
            culturalNote:
              "'Dressing on the side' 是美国非常常见的要求。沙拉酱很油很多，放旁边可以控制摄入量。服务员对此毫不意外。",
            casualVersion: "Vinaigrette, on the side. I like controlling how much goes on.",
            commonMistake: {
              wrong: "Put the sauce beside.",
              correct: "Dressing on the side, please.",
              explanation:
                "'on the side' 是固定搭配，意思是放旁边/单独装。沙拉酱叫 dressing，不叫 sauce。",
            },
            formalityVariants: {
              casual: "Vinaigrette on the side.",
              standard: "Vinaigrette on the side, please. I like to control the amount.",
              formal:
                "I would like the vinaigrette served on the side, please. I prefer to dress the salad to my own taste.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "You got it — vinaigrette on the side. Smart choice. I'll get this order in for you. It should be about 15 to 20 minutes for the steak.",
            textZh: "收到——油醋汁放旁边。聪明的选择。我这就去下单。牛排大约15到20分钟。",
            keyPhrases: [
              { en: "on the side", zh: "放旁边" },
              { en: "15 to 20 minutes", zh: "15到20分钟" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Perfect. I'll put that in now. Steak takes a little longer — about 15 to 20 minutes. The salad will come out first.",
                textZh: "好的。我现在下单。牛排要久一点——大约15到20分钟。沙拉会先上。",
                actionHint: "说明上菜顺序",
                frequency: "common",
              },
              {
                textEn:
                  "Vinaigrette on the side, noted. Your order's going in. Steak will take about 15 minutes.",
                textZh: "油醋汁放旁边，记下了。你的单子马上下。牛排大约要15分钟。",
                actionHint: "简洁确认",
                frequency: "common",
              },
            ],
            casualVersion: "Vinaigrette on the side — got it. Order's going in, steak'll be 15-20 min.",
            formalityVariants: {
              casual: "On the side — got it! Steak'll be about 15-20 min.",
              standard:
                "Vinaigrette on the side. I'll get this order in. The steak will be about 15 to 20 minutes.",
              formal:
                "Noted — vinaigrette on the side. I will submit your order immediately. Please anticipate approximately 15 to 20 minutes for the steak preparation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 打包剩菜 ====================
  {
    id: "restaurant-doggy-bag",
    category: "restaurant",
    titleZh: "打包剩菜",
    titleEn: "Getting a Doggy Bag",
    description: "餐后打包剩菜带走",
    otherRole: "服务员",
    otherRoleIcon: "📦",
    flows: [
      {
        id: "doggy-bag-basic",
        titleZh: "基础打包",
        titleEn: "Basic Takeout Box",
        description: "简单地请求打包剩菜",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "How's everything? Looks like you still have quite a bit left. Are you still working on that?",
            textZh: "都还好吗？看起来还剩不少。还在吃吗？",
            keyPhrases: [
              { en: "still working on that", zh: "还在吃" },
              { en: "quite a bit left", zh: "还剩不少" },
            ],
            alternativeExpressions: [
              {
                textEn: "Are you still eating, or can I clear some of these plates?",
                textZh: "还在吃吗，还是我可以收一些盘子了？",
                actionHint: "问是否收盘",
                frequency: "common",
              },
              {
                textEn: "All done, or still picking at it?",
                textZh: "吃完了还是还在吃？",
                actionHint: "口语化询问",
                frequency: "common",
              },
            ],
            casualVersion: "Still working on it, or are you done?",
            formalityVariants: {
              casual: "You done, or still eating?",
              standard: "Are you still working on that, or can I clear your plates?",
              formal:
                "How is everything? Are you still enjoying your meal, or may I begin clearing?",
            },
          },
          {
            speaker: "you",
            textEn:
              "We're done, thanks. The food was great, but the portions were huge! Can I get a box for the leftovers?",
            textZh: "吃完了，谢谢。菜很好吃，但份量太大了！能给我一个打包盒吗？",
            culturalNote:
              "在美国打包剩菜非常普遍，完全不丢脸。几乎每桌都会打包。说 box / to-go box / to-go container 都可以。'doggy bag' 比较老式但还有人用。",
            casualVersion: "We're done! Everything was awesome, but so much food. Can I get a box?",
            commonMistake: {
              wrong: "Can you pack the food?",
              correct: "Can I get a box for the leftovers?",
              explanation:
                "美国不说 pack the food。要说 get a box（拿个盒子）或 get this to go（打包带走）。有些餐厅让你自己装盒。",
            },
            formalityVariants: {
              casual: "Done! Can I get a box?",
              standard: "We're done, thanks. Can I get a box for the leftovers?",
              formal:
                "We have finished, thank you. The meal was wonderful. Would it be possible to have the remaining food boxed up to take home?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Of course! I'll bring you a couple of to-go boxes. Would you like me to box it up for you, or would you prefer to do it yourselves?",
            textZh: "当然！我拿几个打包盒过来。要我帮你们装还是你们自己来？",
            keyPhrases: [
              { en: "to-go boxes", zh: "打包盒" },
              { en: "box it up", zh: "装盒打包" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure! Here are some boxes. Need me to pack it up?",
                textZh: "好的！这是打包盒。需要我帮忙装吗？",
                actionHint: "直接拿盒子过来",
                frequency: "common",
              },
              {
                textEn: "I'll get you some containers. Want me to take care of it in the back?",
                textZh: "我给你拿几个盒子。要我在后面帮你装好吗？",
                actionHint: "提出在后厨装",
                frequency: "occasional",
              },
            ],
            casualVersion: "Sure! Boxes coming up. Want me to pack it or you got it?",
            formalityVariants: {
              casual: "Boxes coming! Want me to pack it?",
              standard:
                "Of course! I'll bring to-go boxes. Would you like me to box it up for you?",
              formal:
                "Certainly. I will bring several to-go containers. Shall I arrange the leftovers for you, or would you prefer to do so at your convenience?",
            },
          },
          {
            speaker: "you",
            textEn: "We can do it ourselves, thanks. Could we also get the check when you get a chance?",
            textZh: "我们自己来就好，谢谢。方便的时候也把账单拿来好吗？",
            culturalNote:
              "在美国，服务员不会主动拿账单，你需要主动要（ask for the check/bill）。说 'when you get a chance' 是很礼貌的说法。",
            casualVersion: "We'll do it. And the check too, whenever.",
            commonMistake: {
              wrong: "Can we pay money?",
              correct: "Could we get the check?",
              explanation:
                "结账要说 get the check / get the bill。不能直接说 pay money，这不是标准的请求结账表达。",
            },
            formalityVariants: {
              casual: "We got it. Check too, please.",
              standard: "We'll do it ourselves. Could we also get the check?",
              formal:
                "We will handle it ourselves, thank you. At your convenience, may we also have the check?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here are your boxes, and here's the check. No rush — take your time. It was great having you tonight!",
            textZh: "这是你们的打包盒，这是账单。不着急——慢慢来。今晚很高兴为你们服务！",
            keyPhrases: [
              { en: "no rush", zh: "不着急" },
              { en: "take your time", zh: "慢慢来" },
            ],
            alternativeExpressions: [
              {
                textEn: "Boxes and check for you. Whenever you're ready — no hurry.",
                textZh: "盒子和账单在这。你们准备好了再说——不急。",
                actionHint: "简洁递送",
                frequency: "common",
              },
              {
                textEn: "Here you go! I'll leave the check here. Take your time finishing up.",
                textZh: "给你们！账单放这里。慢慢打包。",
                actionHint: "放下就走",
                frequency: "common",
              },
            ],
            casualVersion: "Here ya go — boxes and the check. No rush!",
            formalityVariants: {
              casual: "Here ya go! No rush on the check.",
              standard: "Here are the boxes and the check. No rush — take your time.",
              formal:
                "Here are your to-go containers and the check. Please take your time. It has been a pleasure serving you this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "Thank you! Everything was delicious. We'll definitely come back.",
            textZh: "谢谢！都很好吃。我们一定会再来的。",
            culturalNote:
              "离开时说 'We'll definitely come back' 是对餐厅最好的赞美。服务员通常会非常感谢。别忘了留小费（一般15-20%）。",
            casualVersion: "Thanks! Food was amazing. We'll be back for sure.",
            commonMistake: {
              wrong: "The food is very delicious, we will come again.",
              correct: "Everything was delicious. We'll definitely come back.",
              explanation:
                "'very delicious' 中的 very 是多余的，delicious 本身就是强义词。'come again' 不如 'come back' 自然。",
            },
            formalityVariants: {
              casual: "This was great! We'll be back!",
              standard: "Everything was delicious. We'll definitely come back.",
              formal:
                "Thank you very much. The meal was absolutely delicious. We will certainly return.",
            },
          },
        ],
      },
      {
        id: "doggy-bag-intermediate",
        titleZh: "进阶打包沟通",
        titleEn: "Intermediate Takeout Questions",
        description: "处理多菜打包、存放建议和特殊情况",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn:
              "Could I get a few boxes? I want to keep the fish separate from the pasta so it doesn't get soggy. And is the soup okay to take home?",
            textZh: "能给我几个盒子吗？我想把鱼和意面分开装，不然会变软。汤可以打包吗？",
            culturalNote:
              "美国大多数餐厅的打包盒是免费的，要多少给多少。汤通常会装在带盖的杯子里。分开装不同的菜完全没问题。",
            casualVersion: "Can I get a couple boxes? Wanna keep the fish and pasta separate. Can I take the soup too?",
            commonMistake: {
              wrong: "Give me some box, fish and noodle separate.",
              correct: "Could I get a few boxes? I want to keep the fish separate from the pasta.",
              explanation:
                "box 要用复数 boxes。请求用 Could I get 更礼貌。说明原因用完整句子。",
            },
            formalityVariants: {
              casual: "Few boxes, please? Fish and pasta separate. And can I take the soup?",
              standard:
                "Could I get a few boxes? I'd like to keep the fish separate from the pasta. And is the soup okay to take?",
              formal:
                "May I request several containers? I would like to package the fish separately from the pasta to maintain quality. Additionally, is it feasible to take the soup home?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely. I'll bring you two boxes and a soup container with a lid. Great thinking keeping them separate — the fish reheats much better that way.",
            textZh: "当然。我给你拿两个盒子和一个带盖的汤碗。分开装的想法很好——鱼这样重新加热效果更好。",
            keyPhrases: [
              { en: "soup container with a lid", zh: "带盖的汤碗" },
              { en: "reheats", zh: "重新加热" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure — I'll grab two boxes and a sealed cup for the soup. Smart move keeping things separate.",
                textZh: "好的——我拿两个盒子和一个密封杯装汤。分开装很聪明。",
                actionHint: "用密封杯",
                frequency: "common",
              },
              {
                textEn:
                  "No problem. Fish box, pasta box, and soup in a to-go cup. I'll bag everything up too.",
                textZh: "没问题。鱼一个盒子，意面一个盒子，汤装外带杯。我也帮你装袋。",
                actionHint: "主动提供袋子",
                frequency: "common",
              },
            ],
            casualVersion: "Two boxes and a soup container — coming right up! Good call keeping 'em separate.",
            formalityVariants: {
              casual: "Two boxes and a soup cup — got it! Smart move.",
              standard:
                "I'll bring two boxes and a soup container. Smart to keep them separate.",
              formal:
                "Certainly. I will provide two separate containers and a sealed soup vessel. That is an excellent approach — separating the items preserves their quality during transport and reheating.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Thanks! Quick question — the sushi we didn't finish, is it safe to take home? I'm not sure about raw fish sitting out.",
            textZh: "谢谢！快问一下——我们没吃完的寿司，打包回去安全吗？我不太确定生鱼放着行不行。",
            culturalNote:
              "生鱼片/寿司打包是有食品安全考量的。如果要打包，尽快放冰箱，2小时内吃掉最安全。很多美国人都会打包寿司。",
            casualVersion: "Is the sushi safe to take home? It's raw fish, so I'm not sure.",
            commonMistake: {
              wrong: "The raw fish can bring home?",
              correct: "Is the sushi safe to take home?",
              explanation:
                "要用完整的疑问句 'Is it safe to take home?'。'can bring home' 缺少主语和助动词。",
            },
            formalityVariants: {
              casual: "The sushi — can I take that home? It's raw, so...",
              standard: "Is it safe to take the sushi home? I'm not sure about raw fish.",
              formal:
                "I have a food safety question — would it be advisable to take the remaining sushi home, given that it contains raw fish?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Good question. You can take it, but I'd recommend putting it in the fridge as soon as you get home and eating it within a couple of hours. We can pack it with a cold pack if you'd like — we have some at the front.",
            textZh: "好问题。可以带走，但建议到家后尽快放冰箱，两小时内吃完。如果你想的话，我们可以加一个冰袋——前台有。",
            keyPhrases: [
              { en: "put it in the fridge", zh: "放冰箱" },
              { en: "cold pack", zh: "冰袋" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "It should be fine as long as you refrigerate it right away. Want me to grab a cold pack for the ride home?",
                textZh: "只要马上放冰箱就没问题。要不要我拿个冰袋让你路上用？",
                actionHint: "主动提供冰袋",
                frequency: "common",
              },
              {
                textEn:
                  "You can definitely take it. Just don't leave it out too long. If you're heading straight home, you'll be fine.",
                textZh: "当然可以带。别放太久就好。如果直接回家就没问题。",
                actionHint: "评估距离",
                frequency: "common",
              },
            ],
            casualVersion:
              "Yeah, just fridge it ASAP and eat it quick. Want a cold pack for the trip?",
            formalityVariants: {
              casual: "Take it — just fridge it right away and eat it soon. We've got cold packs.",
              standard:
                "You can take it. Refrigerate it as soon as possible and eat within a couple hours. We can add a cold pack.",
              formal:
                "You may certainly take the sushi home. I would advise refrigerating it promptly upon arrival and consuming it within two hours. We can provide an insulated cold pack to maintain freshness during transport if you wish.",
            },
          },
          {
            speaker: "you",
            textEn:
              "A cold pack would be great — we have a 30-minute drive home. Also, do you have a bag for all these boxes?",
            textZh: "冰袋太好了——我们开车回家要30分钟。另外，这些盒子有袋子装吗？",
            culturalNote:
              "美国大多数餐厅会提供免费的塑料袋或纸袋装打包盒。有些环保意识强的餐厅可能不提供，可以自带。",
            casualVersion: "Yeah, cold pack please — it's a 30-minute drive. Got a bag for all this?",
            commonMistake: {
              wrong: "Do you have plastic bag?",
              correct: "Do you have a bag for all these boxes?",
              explanation:
                "直接说 plastic bag 显得有点唐突。说 a bag for these boxes 更自然，让服务员决定给什么材质的袋子。",
            },
            formalityVariants: {
              casual: "Cold pack, yeah. And a bag for all this stuff?",
              standard:
                "A cold pack would be great. We have a 30-minute drive. Do you have a bag for the boxes?",
              formal:
                "A cold pack would be most appreciated given our 30-minute commute. Additionally, could you provide a bag to consolidate the containers?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "I'll grab a bag and a cold pack. Everything should stay fresh for the ride. Is there anything else I can get you before you head out?",
            textZh: "我去拿袋子和冰袋。路上应该能保鲜。走之前还需要什么吗？",
            keyPhrases: [
              { en: "stay fresh", zh: "保鲜" },
              { en: "before you head out", zh: "走之前" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Bag and cold pack coming up. That'll keep everything good for 30 minutes, easy. Anything else?",
                textZh: "袋子和冰袋马上来。30分钟完全没问题。还需要什么？",
                actionHint: "保证时效",
                frequency: "common",
              },
              {
                textEn:
                  "I'll pack it all up with a cold pack in a bag. You're all set after that. Need anything else?",
                textZh: "我把所有东西和冰袋一起装袋。之后就齐了。还要什么吗？",
                actionHint: "总结打包",
                frequency: "common",
              },
            ],
            casualVersion: "Bag and cold pack — on it! Anything else before you go?",
            formalityVariants: {
              casual: "Bag and cold pack, got it. Need anything else?",
              standard:
                "I'll get a bag and cold pack. Everything should stay fresh. Anything else before you leave?",
              formal:
                "I will prepare a bag with a cold pack to ensure freshness during your journey. Is there anything additional I can assist you with before your departure?",
            },
          },
          {
            speaker: "you",
            textEn: "That's everything. Thank you so much for being so helpful. Have a great night!",
            textZh: "就这些了。非常感谢你这么热心。祝你晚上愉快！",
            culturalNote:
              "离开餐厅时对服务员说 'Have a great night' 是标准的美国礼貌用语。记得在账单上写小费金额并签名。",
            casualVersion: "That's it! Thanks a ton. Have a good one!",
            commonMistake: {
              wrong: "That is all. Thank you. Goodbye.",
              correct: "That's everything. Thanks so much! Have a great night!",
              explanation:
                "'Goodbye' 在餐厅里太正式/生硬了。说 'Have a great night' 或 'Have a good one' 更温暖自然。",
            },
            formalityVariants: {
              casual: "All good! Thanks! Have a good one!",
              standard: "That's everything. Thank you for being so helpful. Have a great night!",
              formal:
                "That will be all, thank you. We truly appreciate your attentiveness and excellent service this evening. Have a wonderful night.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 和外卖骑手沟通 ====================
  {
    id: "restaurant-food-delivery-app",
    category: "restaurant",
    titleZh: "外卖骑手沟通",
    titleEn: "Communicating with Delivery Driver",
    description: "和外卖送餐员沟通门禁码、楼层、取餐位置",
    otherRole: "外卖骑手",
    otherRoleIcon: "🚗",
    flows: [
      {
        id: "delivery-basic",
        titleZh: "基础外卖沟通",
        titleEn: "Basic Delivery Communication",
        description: "简单的取餐位置和门禁沟通",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "外卖骑手",
            textEn: "Hey, this is your DoorDash driver. I'm outside your building but I can't get in. Is there a gate code?",
            textZh: "嗨，我是你的DoorDash骑手。我在你楼外面但进不去。有门禁码吗？",
            keyPhrases: [
              { en: "gate code", zh: "门禁码" },
              { en: "can't get in", zh: "进不去" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hi, I'm your delivery driver. I'm at the building but the gate is locked. How do I get in?",
                textZh: "你好，我是送餐的。到楼了但门锁着。怎么进去？",
                actionHint: "直接问怎么进",
                frequency: "common",
              },
              {
                textEn: "Hey, it's your Uber Eats driver. I'm here but there's a keypad at the entrance. What's the code?",
                textZh: "嗨，是你的Uber Eats骑手。我到了，入口有个键盘。码是多少？",
                actionHint: "描述看到的键盘",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, I'm your driver. Can't get in. Code?",
            formalityVariants: {
              casual: "Hey, your driver here. What's the gate code?",
              standard: "Hi, I'm your DoorDash driver. I'm outside but can't get in. Is there a gate code?",
              formal:
                "Good evening. This is your delivery driver from DoorDash. I have arrived at your building; however, I am unable to access the entrance. Could you provide the gate code?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi! Yes, the gate code is 4523. Then take the elevator to the 3rd floor, apartment 312.",
            textZh: "你好！门禁码是4523。然后坐电梯到3楼，312号房间。",
            culturalNote:
              "在美国用外卖App点餐时，最好在备注里提前写好门禁码和具体指引。这样可以减少电话沟通。",
            casualVersion: "Code is 4523. Elevator to 3rd floor, unit 312.",
            commonMistake: {
              wrong: "The password is 4523. Go to three floor room 312.",
              correct: "The gate code is 4523. Take the elevator to the 3rd floor, apartment 312.",
              explanation:
                "门禁码叫 gate code 或 access code，不叫 password。楼层说 3rd floor，不说 three floor。公寓单位说 apartment 或 unit。",
            },
            formalityVariants: {
              casual: "4523. Third floor, 312.",
              standard: "The gate code is 4523. Elevator to the 3rd floor, apartment 312.",
              formal:
                "The access code is 4523. Please take the elevator to the third floor and proceed to apartment 312.",
            },
          },
          {
            speaker: "them",
            role: "外卖骑手",
            textEn: "Got it. 4523, elevator, third floor, 312. I'll be up in a minute.",
            textZh: "收到。4523，电梯，三楼，312。马上就到。",
            keyPhrases: [
              { en: "got it", zh: "收到/明白了" },
              { en: "be up in a minute", zh: "马上就到" },
            ],
            alternativeExpressions: [
              {
                textEn: "On my way up. See you in a sec.",
                textZh: "上来了。马上见。",
                actionHint: "简短确认",
                frequency: "common",
              },
              {
                textEn: "Perfect, I'm in. Heading to the 3rd floor now.",
                textZh: "好的，进来了。现在往3楼去。",
                actionHint: "实时汇报",
                frequency: "common",
              },
            ],
            casualVersion: "Cool, on my way up.",
            formalityVariants: {
              casual: "Got it — coming up.",
              standard: "Got it. I'll be up in a minute.",
              formal:
                "Understood. I have the code and directions. I will be at your door momentarily.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, I'll leave the door open. Oh wait — actually, can you just leave it at the door? I'm in a meeting.",
            textZh: "好的，我把门打开。等等——其实你能放在门口吗？我在开会。",
            culturalNote:
              "美国外卖App都支持 'Leave at door'（放在门口）选项。骑手放下后拍照确认。这在疫情后变得非常普遍。",
            casualVersion: "Actually, just leave it at the door — I'm in a meeting.",
            commonMistake: {
              wrong: "Please put the food at door, I am busy.",
              correct: "Can you just leave it at the door? I'm in a meeting.",
              explanation:
                "'Leave it at the door' 是外卖App的标准用语。不要说 put the food at door（缺少冠词 the）。",
            },
            formalityVariants: {
              casual: "Just leave it at the door, I'm stuck in a meeting.",
              standard: "Actually, could you leave it at the door? I'm in a meeting.",
              formal:
                "On second thought, would you mind leaving the order at the door? I am currently in a meeting and unable to come to the door.",
            },
          },
          {
            speaker: "them",
            role: "外卖骑手",
            textEn: "No problem! I'll leave it right by your door and send you a photo. Enjoy your meal!",
            textZh: "没问题！我放在你门口，给你发张照片。享用美食！",
            keyPhrases: [
              { en: "leave it right by your door", zh: "放在你门口" },
              { en: "send you a photo", zh: "给你发照片" },
            ],
            alternativeExpressions: [
              {
                textEn: "Sure thing. I'll drop it at the door and take a pic. Have a good one!",
                textZh: "好的。放门口拍个照。祝你愉快！",
                actionHint: "简洁友好",
                frequency: "common",
              },
              {
                textEn: "All good! Leaving it at the door now. You'll get a notification when it's there.",
                textZh: "没问题！现在放在门口了。放好后你会收到通知。",
                actionHint: "提到App通知",
                frequency: "common",
              },
            ],
            casualVersion: "Sure, dropping it at your door. I'll snap a pic. Enjoy!",
            formalityVariants: {
              casual: "No worries — at your door, pic sent. Enjoy!",
              standard: "No problem. I'll leave it at your door and send a photo. Enjoy!",
              formal:
                "Absolutely. I will place your order at your door and send a confirmation photo through the application. Enjoy your meal.",
            },
          },
          {
            speaker: "you",
            textEn: "Thanks so much! I really appreciate it. I left you a tip on the app.",
            textZh: "太感谢了！真的很感激。我在App上给你留了小费。",
            culturalNote:
              "外卖小费在美国通常是15-20%或至少3-5美元。可以提前在App上设置，也可以送达后追加。提前给小费可以让骑手更积极。",
            casualVersion: "Thanks! Tipped you on the app.",
            commonMistake: {
              wrong: "I give you tip in the phone.",
              correct: "I left you a tip on the app.",
              explanation:
                "小费用 left（留了）或 added，不用 give。'in the phone' 应该说 on the app。",
            },
            formalityVariants: {
              casual: "Thanks! Tip's on the app.",
              standard: "Thank you so much! I left you a tip on the app.",
              formal:
                "Thank you very much for your assistance. I have added a gratuity for you through the application.",
            },
          },
        ],
      },
      {
        id: "delivery-intermediate",
        titleZh: "进阶外卖问题处理",
        titleEn: "Intermediate Delivery Issues",
        description: "处理外卖问题：找不到地址、漏送、送错",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "外卖骑手",
            textEn:
              "Hi, I'm having trouble finding your place. The GPS is showing me a parking lot. Can you give me more specific directions?",
            textZh: "你好，我找不到你的地方。GPS导到了一个停车场。能给我更具体的路线吗？",
            keyPhrases: [
              { en: "having trouble finding", zh: "找不到" },
              { en: "GPS is showing me", zh: "GPS导到了" },
              { en: "specific directions", zh: "具体路线" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey, my GPS brought me to a parking lot. I don't see any buildings with your address. Can you help?",
                textZh: "嗨，我的GPS把我导到了停车场。我看不到你地址的建筑。能帮忙指路吗？",
                actionHint: "描述看到的环境",
                frequency: "common",
              },
              {
                textEn: "I think I'm close but I'm a bit lost. What does your building look like?",
                textZh: "我觉得快到了但有点迷路。你的楼长什么样？",
                actionHint: "问建筑外观",
                frequency: "common",
              },
            ],
            casualVersion: "Hey, I'm lost. GPS took me to a parking lot. Help?",
            formalityVariants: {
              casual: "GPS is wrong. I'm at some parking lot. Where are you?",
              standard:
                "I'm having trouble finding your building. GPS shows a parking lot. Can you give me directions?",
              formal:
                "I apologize for the inconvenience. I am having difficulty locating your residence. The GPS navigation directed me to a parking lot. Could you provide more detailed directions?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Oh, that happens a lot with our address. You're probably at the back of the complex. Turn around and exit the parking lot. You'll see a blue sign that says 'Sunset Apartments.' My building is the second one on the right — Building B.",
            textZh: "哦，我们的地址经常这样。你可能在小区后面。掉头出停车场。你会看到一个蓝色的牌子写着 'Sunset Apartments'。我的楼是右边第二栋——B栋。",
            culturalNote:
              "美国公寓小区（apartment complex）往往有多栋楼，GPS容易导到错误的入口。在App的送餐备注里写清楚 'Enter from Main Street, Building B' 之类的信息会很有帮助。",
            casualVersion: "GPS messes up here. Exit the lot, look for the blue 'Sunset Apartments' sign, second building on the right, Building B.",
            commonMistake: {
              wrong: "You go wrong direction. My home is in the blue building.",
              correct: "Turn around and exit the lot. Look for the blue sign — Building B, second on the right.",
              explanation:
                "给路线要用具体指令：turn around, exit, look for, second on the right。不要只说 go wrong direction。",
            },
            formalityVariants: {
              casual: "Yeah, GPS is bad here. Exit the lot, blue sign 'Sunset Apartments,' second building on the right — Building B.",
              standard:
                "That happens a lot. Turn around, exit the lot, look for the blue 'Sunset Apartments' sign. Building B, second on the right.",
              formal:
                "This is a common navigation issue with our address. Please exit the parking lot and look for a blue sign reading 'Sunset Apartments.' My building — Building B — is the second structure on the right-hand side.",
            },
          },
          {
            speaker: "them",
            role: "外卖骑手",
            textEn: "Okay, I see the sign now. Building B, second on the right. I'm pulling up. What floor?",
            textZh: "好的，我看到牌子了。B栋，右边第二栋。我开过来了。几楼？",
            keyPhrases: [
              { en: "pulling up", zh: "开过来/到了" },
              { en: "what floor", zh: "几楼" },
            ],
            alternativeExpressions: [
              {
                textEn: "Found it! I see Building B. Which unit number?",
                textZh: "找到了！我看到B栋了。几号？",
                actionHint: "确认到达",
                frequency: "common",
              },
              {
                textEn: "Got the sign. Heading to Building B now. Apartment number?",
                textZh: "看到牌子了。往B栋走。公寓号是？",
                actionHint: "边走边问",
                frequency: "common",
              },
            ],
            casualVersion: "See it. Building B — what floor and unit?",
            formalityVariants: {
              casual: "Found it! What floor?",
              standard: "I see the sign. Building B. What floor and unit?",
              formal: "I have located Building B. Could you confirm the floor and apartment number?",
            },
          },
          {
            speaker: "you",
            textEn: "Second floor, unit 204. The stairs are right inside the entrance on the left.",
            textZh: "二楼，204号。楼梯在入口左边。",
            culturalNote:
              "美国的楼层编号和中国一样，1st floor 是一楼。但英国的 ground floor 是一楼，first floor 是二楼。在美国不用担心这个差异。",
            casualVersion: "Second floor, 204. Stairs are on the left when you go in.",
            commonMistake: {
              wrong: "Two floor, 204 room.",
              correct: "Second floor, unit 204.",
              explanation:
                "楼层用序数词：second floor，不说 two floor。公寓号说 unit 204 或 apartment 204，不说 room。",
            },
            formalityVariants: {
              casual: "2nd floor, 204. Stairs on the left inside.",
              standard: "Second floor, unit 204. Stairs are on the left inside the entrance.",
              formal:
                "Please proceed to the second floor, unit 204. The staircase is located to the left immediately upon entering the building.",
            },
          },
          {
            speaker: "them",
            role: "外卖骑手",
            textEn:
              "I'm here at 204. Heads up though — the restaurant didn't include napkins or utensils. Sorry about that. And it looks like one of the drink lids came loose in the bag.",
            textZh: "到204了。不过跟你说一声——餐厅没有放餐巾纸和餐具。抱歉。还有一个饮料盖在袋子里松了。",
            keyPhrases: [
              { en: "heads up", zh: "提醒你一下" },
              { en: "utensils", zh: "餐具" },
              { en: "lid came loose", zh: "盖子松了" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "At your door. Just so you know, no napkins or silverware in the bag. Also, one drink might have spilled a little — the lid wasn't on tight.",
                textZh: "在门口了。提一下，袋子里没有餐巾纸和餐具。还有一杯饮料可能漏了一点——盖子没盖紧。",
                actionHint: "在门口汇报问题",
                frequency: "common",
              },
              {
                textEn:
                  "Delivered! Quick note — the restaurant forgot utensils and one of the drinks leaked a bit. I cleaned up the bag as best I could.",
                textZh: "送到了！提一下——餐厅忘了放餐具，而且一杯饮料漏了一点。我尽量把袋子擦干净了。",
                actionHint: "送达后反馈",
                frequency: "common",
              },
            ],
            casualVersion: "Here at 204. FYI, no napkins or utensils, and one drink lid came loose.",
            formalityVariants: {
              casual: "At your door. No napkins/utensils in the bag, and a drink lid popped off.",
              standard:
                "I'm at 204. Just wanted to let you know — no napkins or utensils, and one drink lid came loose.",
              formal:
                "I have arrived at unit 204. I wanted to inform you that the restaurant did not include napkins or utensils. Additionally, one of the beverage lids appears to have come loose during transit. I apologize for the inconvenience.",
            },
          },
          {
            speaker: "you",
            textEn:
              "No worries, that's not your fault. Thanks for letting me know. I'll report the missing items through the app. I appreciate you finding the place despite the GPS trouble!",
            textZh: "没关系，不是你的问题。谢谢你告诉我。我在App上报告缺少的东西。感谢你虽然GPS有问题还是找到了！",
            culturalNote:
              "外卖少东西可以在App上报告，通常会退款或补发。这不是骑手的责任，是餐厅的问题。不要因此给差评或减少小费。",
            casualVersion: "Not your fault. Thanks for the heads up. I'll report it on the app. Thanks for finding us!",
            commonMistake: {
              wrong: "It's okay, the restaurant's problem. I will complaint in the app.",
              correct: "No worries, that's not your fault. I'll report it through the app.",
              explanation:
                "complaint 是名词，动词是 complain。但在App上报告问题更好说 report the issue/missing items through the app。",
            },
            formalityVariants: {
              casual: "All good, not on you. I'll report it. Thanks for finding us!",
              standard:
                "No worries, not your fault. I'll report the missing items on the app. Thanks for finding us!",
              formal:
                "Please do not worry — that is the restaurant's responsibility. I will report the missing items through the application. I truly appreciate your effort in locating our building despite the navigation difficulties.",
            },
          },
          {
            speaker: "them",
            role: "外卖骑手",
            textEn:
              "Thanks for understanding! Good idea to report it — they usually give you credit for missing stuff. Have a good night!",
            textZh: "感谢理解！报告是个好办法——他们通常会给你积分补偿少的东西。晚安！",
            keyPhrases: [
              { en: "give you credit", zh: "给你积分/退款" },
              { en: "missing stuff", zh: "缺少的东西" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No prob! Yeah, the app's good about refunding for missing items. Enjoy your food!",
                textZh: "没事！App对缺少的东西退款很爽快的。享用吧！",
                actionHint: "肯定App退款",
                frequency: "common",
              },
              {
                textEn:
                  "Appreciate the tip! Hope the rest of the order is good. They'll definitely refund the missing items. Take care!",
                textZh: "感谢小费！希望其他的东西没问题。他们肯定会退缺少的部分。保重！",
                actionHint: "感谢小费",
                frequency: "common",
              },
            ],
            casualVersion: "Thanks! Report it — they'll hook you up with credit. Have a good one!",
            formalityVariants: {
              casual: "No worries! Report it and they'll credit you. Night!",
              standard:
                "Thanks for understanding. Reporting it usually gets you a credit. Have a good night!",
              formal:
                "Thank you for your understanding. The application typically provides a credit or refund for missing items. I hope you enjoy the remainder of your meal. Have a pleasant evening.",
            },
          },
        ],
      },
    ],
  },

  // ==================== For here or to go ====================
  {
    id: "restaurant-for-here-or-togo",
    category: "restaurant",
    titleZh: "堂食还是带走",
    titleEn: "For Here or To Go",
    description: "理解和回答 'For here or to go?' 以及各种变体",
    otherRole: "收银员",
    otherRoleIcon: "🏪",
    flows: [
      {
        id: "for-here-togo-basic",
        titleZh: "基础堂食带走",
        titleEn: "Basic For Here or To Go",
        description: "快餐店被问到堂食还是带走",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "Hi! Welcome to Five Guys. What can I get you?",
            textZh: "你好！欢迎来到 Five Guys。要点什么？",
            keyPhrases: [
              { en: "what can I get you", zh: "要点什么" },
            ],
            alternativeExpressions: [
              {
                textEn: "Hey! What'll it be today?",
                textZh: "嗨！今天吃什么？",
                actionHint: "随意问",
                frequency: "common",
              },
              {
                textEn: "Welcome! Ready to order?",
                textZh: "欢迎！准备好点了吗？",
                actionHint: "标准欢迎",
                frequency: "common",
              },
            ],
            casualVersion: "Hey! What can I get ya?",
            formalityVariants: {
              casual: "Hey, whatcha want?",
              standard: "Hi! What can I get you?",
              formal: "Good afternoon. Welcome. What may I prepare for you today?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a cheeseburger with fries and a Coke, please?",
            textZh: "你好，一个芝士汉堡加薯条和可乐。",
            culturalNote:
              "在美国快餐店点餐很直接——说你要什么就行。不需要太多寒暄。说 'Can I get...' 是最常用的开头。",
            casualVersion: "Cheeseburger, fries, and a Coke.",
            commonMistake: {
              wrong: "I want one cheese hamburger, one french fries, one Cola.",
              correct: "Can I get a cheeseburger with fries and a Coke?",
              explanation:
                "不需要每样前都加 one。cheeseburger 是一个词。可乐说 Coke 比 Cola 更常用。薯条直接说 fries。",
            },
            formalityVariants: {
              casual: "Cheeseburger, fries, Coke.",
              standard: "Can I get a cheeseburger with fries and a Coke?",
              formal: "I would like a cheeseburger with fries and a Coca-Cola, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "You got it. Is that for here or to go?",
            textZh: "好的。堂食还是带走？",
            keyPhrases: [
              { en: "for here or to go", zh: "堂食还是带走" },
            ],
            alternativeExpressions: [
              {
                textEn: "For here or to go?",
                textZh: "这里吃还是带走？",
                actionHint: "简短版",
                frequency: "common",
              },
              {
                textEn: "Eating here or taking it to go?",
                textZh: "在这吃还是带走？",
                actionHint: "完整问法",
                frequency: "common",
              },
            ],
            casualVersion: "Here or to go?",
            formalityVariants: {
              casual: "Here or to go?",
              standard: "Is that for here or to go?",
              formal: "Will you be dining in or taking your order to go?",
            },
          },
          {
            speaker: "you",
            textEn: "For here, please.",
            textZh: "在这里吃。",
            culturalNote:
              "'For here' 堂食通常用托盘和餐盘上菜，'To go' 会用纸袋打包。有些快餐店两种都用纸包装，差别不大。",
            casualVersion: "For here.",
            commonMistake: {
              wrong: "Eat here.",
              correct: "For here, please.",
              explanation:
                "'Eat here' 虽然能被理解，但回答这个问题时，直接说 'For here' 或 'To go' 是标准回答。",
            },
            formalityVariants: {
              casual: "Here.",
              standard: "For here, please.",
              formal: "I will be dining in, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Alright, your total is $14.50. Cash or card?",
            textZh: "好的，总共14.50美元。现金还是刷卡？",
            keyPhrases: [
              { en: "total", zh: "总共" },
              { en: "cash or card", zh: "现金还是刷卡" },
            ],
            alternativeExpressions: [
              {
                textEn: "That'll be $14.50. How are you paying?",
                textZh: "一共14.50美元。怎么付？",
                actionHint: "开放式问付款方式",
                frequency: "common",
              },
              {
                textEn: "$14.50. You can tap, swipe, or insert your card right there.",
                textZh: "14.50美元。你可以在那里刷卡、插卡或碰一下。",
                actionHint: "指向读卡器",
                frequency: "common",
              },
            ],
            casualVersion: "Fourteen fifty. Cash or card?",
            formalityVariants: {
              casual: "Fourteen fifty. Cash or card?",
              standard: "Your total is $14.50. Cash or card?",
              formal: "Your total comes to $14.50. Will you be paying by cash or card?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please. Can I tap?",
            textZh: "刷卡。可以碰一下（感应支付）吗？",
            culturalNote:
              "美国越来越多地方支持 contactless/tap 支付（Apple Pay、Google Pay、信用卡感应）。但不是所有地方都支持，问一下是好习惯。",
            casualVersion: "Card. Can I tap?",
            commonMistake: {
              wrong: "Can I use touch pay?",
              correct: "Can I tap?",
              explanation:
                "感应支付最简洁的说法是 tap。也可以说 contactless 或 tap to pay。'touch pay' 不是标准说法。",
            },
            formalityVariants: {
              casual: "Card. Tap okay?",
              standard: "Card, please. Can I tap?",
              formal: "I will pay by card. Do you accept contactless payment?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Yep, just tap right here on the reader. Perfect — payment went through. Your order number is 47. We'll call it out when it's ready.",
            textZh: "可以，在这个读卡器上碰一下。完美——付款成功。你的号码是47。好了我们会叫号。",
            keyPhrases: [
              { en: "tap right here", zh: "在这碰一下" },
              { en: "order number", zh: "点单号" },
              { en: "call it out", zh: "叫号" },
            ],
            alternativeExpressions: [
              {
                textEn: "Tap here. Great, you're all set. Number 47 — listen for your number.",
                textZh: "碰这里。好了。47号——听到叫号就来取。",
                actionHint: "简洁指引",
                frequency: "common",
              },
              {
                textEn: "Go ahead and tap. Perfect. You're number 47 — grab your food when you hear your number.",
                textZh: "碰吧。完美。你是47号——听到号码来取餐。",
                actionHint: "完整流程指引",
                frequency: "common",
              },
            ],
            casualVersion: "Tap here. Done! You're 47. We'll call ya when it's up.",
            formalityVariants: {
              casual: "Tap here. You're 47 — we'll holler when it's up.",
              standard:
                "Tap here. Payment's through. Number 47 — we'll call when it's ready.",
              formal:
                "Please tap on the reader. Excellent — your payment has been processed. Your order number is 47. We will announce it when your order is prepared.",
            },
          },
        ],
      },
      {
        id: "for-here-togo-intermediate",
        titleZh: "进阶堂食带走",
        titleEn: "Intermediate Dining Options",
        description: "更复杂的堂食/带走场景，包括部分打包和改变主意",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "For here or to go?",
            textZh: "堂食还是带走？",
            keyPhrases: [
              { en: "for here or to go", zh: "堂食还是带走" },
            ],
            alternativeExpressions: [
              {
                textEn: "Dining in or taking out?",
                textZh: "堂食还是外带？",
                actionHint: "更正式的说法",
                frequency: "common",
              },
              {
                textEn: "Staying or going?",
                textZh: "在这还是走？",
                actionHint: "超简短",
                frequency: "occasional",
              },
            ],
            casualVersion: "Here or to go?",
            formalityVariants: {
              casual: "Here or to go?",
              standard: "For here or to go?",
              formal: "Will you be dining in or would you prefer your order to go?",
            },
          },
          {
            speaker: "you",
            textEn:
              "Actually, it's a little complicated. I want to eat the sandwich here, but can I get the soup and the cookie to go? Is that possible?",
            textZh: "其实有点复杂。三明治我想在这吃，但汤和饼干能带走吗？可以吗？",
            culturalNote:
              "在美国完全可以一部分堂食一部分带走。收银员不会觉得奇怪。直接说你的需求就好。",
            casualVersion: "Sandwich for here, soup and cookie to go. That work?",
            commonMistake: {
              wrong: "Half eat here, half take away.",
              correct: "The sandwich for here, and the soup and cookie to go.",
              explanation:
                "'half eat here half take away' 不清晰。要具体说哪些堂食哪些带走。带走说 to go，不说 take away（那是英式）。",
            },
            formalityVariants: {
              casual: "Sandwich here, soup and cookie to go. Cool?",
              standard:
                "I want the sandwich for here, and the soup and cookie to go. Is that okay?",
              formal:
                "I would like to consume the sandwich here, but have the soup and cookie packaged to go, if that would be possible.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "Totally fine! I'll plate the sandwich for here and pack the soup and cookie in to-go containers. The soup lid seals pretty tight so you don't have to worry about spilling.",
            textZh: "完全可以！三明治用盘子堂食，汤和饼干装打包盒。汤盖封得很紧，不用担心洒。",
            keyPhrases: [
              { en: "plate for here", zh: "用盘子堂食" },
              { en: "to-go containers", zh: "打包盒" },
              { en: "seals tight", zh: "封得紧" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem at all. Sandwich on a plate, soup in a sealed container, cookie in a bag. Easy.",
                textZh: "完全没问题。三明治用盘子，汤密封装，饼干装袋。简单。",
                actionHint: "逐个说明包装",
                frequency: "common",
              },
              {
                textEn:
                  "We do that all the time. I'll get the sandwich plated and bag up the rest for you.",
                textZh: "我们经常这样做。三明治用盘子，其他的帮你打包。",
                actionHint: "安抚+正常处理",
                frequency: "common",
              },
            ],
            casualVersion: "Totally fine — sandwich on a plate, soup and cookie packed up.",
            formalityVariants: {
              casual: "No prob! Sandwich plated, soup and cookie packed.",
              standard:
                "Of course. Sandwich plated, soup and cookie in to-go containers.",
              formal:
                "Absolutely. I will serve the sandwich on a plate for dining in and package the soup and cookie in sealed to-go containers for your convenience.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Perfect. Oh, one more thing — I ordered a large coffee but I changed my mind. Can I get a small instead? Is it too late to change?",
            textZh: "太好了。对了还有一件事——我点了大杯咖啡但改主意了。能换成小杯吗？来得及改吗？",
            culturalNote:
              "在美国的快餐店/咖啡厅，只要还没做好，改单通常都可以。已经做了的话就不太方便了。说 'change my mind' 是很地道的表达。",
            casualVersion: "Oh wait — can I switch the large coffee to a small? Too late to change?",
            commonMistake: {
              wrong: "I want to change big coffee to small coffee.",
              correct: "Can I switch the large coffee to a small?",
              explanation:
                "咖啡大小用 large/small，不用 big。改单用 switch...to 或 change...to。",
            },
            formalityVariants: {
              casual: "Actually, can I switch the coffee to a small?",
              standard: "I changed my mind on the coffee. Can I get a small instead of a large?",
              formal:
                "I would like to modify my order, if possible. May I change the large coffee to a small?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "No problem, I haven't rung it up yet. Small coffee instead of large — that actually saves you a dollar fifty. New total is $13.00.",
            textZh: "没问题，还没输入呢。小杯替换大杯——其实还省了一块五。新的总价是13美元。",
            keyPhrases: [
              { en: "haven't rung it up yet", zh: "还没输入/结算" },
              { en: "saves you", zh: "省了" },
              { en: "new total", zh: "新的总价" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Sure, easy change. Small coffee drops the total to $13 even.",
                textZh: "好改。小杯咖啡总价降到整13美元。",
                actionHint: "简洁确认",
                frequency: "common",
              },
              {
                textEn:
                  "Caught it just in time. Switching to small — your new total is $13.",
                textZh: "刚好来得及。换成小杯——新总价是13美元。",
                actionHint: "强调及时",
                frequency: "common",
              },
            ],
            casualVersion: "No worries, haven't punched it in yet. Small coffee — saves you $1.50. Total's $13.",
            formalityVariants: {
              casual: "Easy — small coffee, saves you a buck fifty. $13 total.",
              standard:
                "No problem. Small instead of large saves you $1.50. New total is $13.",
              formal:
                "Certainly, the order has not yet been finalized. I will adjust the coffee to a small, which reduces your total by $1.50 to $13.00.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thanks for being flexible. Here's my card.",
            textZh: "太好了，谢谢你这么灵活。给你我的卡。",
            culturalNote:
              "美国快餐店改单通常没问题。如果已经做了改不了，他们会说 'Sorry, it's already being made.' 不要生气，下次点单时注意就好。",
            casualVersion: "Thanks! Here's my card.",
            commonMistake: {
              wrong: "Thank you for your flexible.",
              correct: "Thanks for being flexible.",
              explanation:
                "flexible 是形容词，不能说 your flexible。要说 being flexible（形容行为）或 your flexibility（名词形式）。",
            },
            formalityVariants: {
              casual: "Sweet, thanks! Here.",
              standard: "Thanks for being flexible. Here's my card.",
              formal:
                "I appreciate your flexibility in accommodating the change. Here is my card.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn:
              "You're all set! Sandwich will be out in about 5 minutes. The soup and cookie are ready to grab from the pickup counter whenever you leave.",
            textZh: "搞定！三明治大约5分钟。汤和饼干在取餐柜台已经准备好了，你走的时候拿就行。",
            keyPhrases: [
              { en: "you're all set", zh: "搞定了" },
              { en: "pickup counter", zh: "取餐柜台" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Done! Sandwich is coming, to-go stuff is at the counter when you're ready.",
                textZh: "好了！三明治马上来，外带的东西在柜台随时拿。",
                actionHint: "简洁总结",
                frequency: "common",
              },
              {
                textEn:
                  "All good. We'll call your name for the sandwich. Your to-go items are already packed and waiting.",
                textZh: "好了。三明治好了叫你名字。外带的已经打包好等你了。",
                actionHint: "叫名取餐",
                frequency: "common",
              },
            ],
            casualVersion: "All set! Sandwich in 5. Grab the to-go stuff when you leave.",
            formalityVariants: {
              casual: "Done! Sandwich coming. To-go stuff's at the counter.",
              standard:
                "You're all set. Sandwich in 5 minutes. Soup and cookie at the pickup counter when you leave.",
              formal:
                "Your transaction is complete. The sandwich will be prepared in approximately 5 minutes. Your to-go items — the soup and cookie — are available at the pickup counter whenever you are ready to depart.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 牛排配菜选择 ====================
  {
    id: "restaurant-steak-sides",
    category: "restaurant",
    titleZh: "牛排配菜选择",
    titleEn: "Steak & Sides",
    description: "在牛排馆点牛排，选熟度和配菜",
    otherRole: "服务员",
    otherRoleIcon: "🥩",
    flows: [
      {
        id: "steak-sides-basic",
        titleZh: "基础牛排点单",
        titleEn: "Basic Steak Order",
        description: "选择牛排熟度和配菜",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Have you decided on your steak? The 12-ounce ribeye is our most popular cut.",
            textZh: "选好牛排了吗？12盎司肋眼牛排是我们最受欢迎的。",
            keyPhrases: [
              { en: "ribeye", zh: "肋眼牛排" },
              { en: "cut", zh: "部位/切块" },
              { en: "12-ounce", zh: "12盎司" },
            ],
            alternativeExpressions: [
              {
                textEn: "Ready to order? Our ribeye is the crowd favorite.",
                textZh: "准备好了吗？肋眼是最受欢迎的。",
                actionHint: "推荐热门款",
                frequency: "common",
              },
              {
                textEn:
                  "Can I interest you in our dry-aged ribeye? It's a guest favorite.",
                textZh: "要不要试试我们的干式熟成肋眼？很多客人都喜欢。",
                actionHint: "推荐特色款",
                frequency: "occasional",
              },
            ],
            casualVersion: "Know what steak you want? The ribeye's a favorite.",
            formalityVariants: {
              casual: "Picked a steak yet? Ribeye's the go-to.",
              standard:
                "Have you decided on your steak? The 12-ounce ribeye is our most popular.",
              formal:
                "Have you had an opportunity to select your steak? I would recommend our 12-ounce ribeye — it is our most acclaimed cut.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll go with the ribeye. How would you recommend it cooked? I usually get it medium in Chinese restaurants.",
            textZh: "我就要肋眼。你推荐几分熟？我在中餐厅通常吃中等熟度。",
            culturalNote:
              "中国牛排馆的'五分熟'和美国 medium 的概念可能有差异。美国牛排馆的 medium-rare 是最推荐的熟度，比中餐厅的'五分'略生。",
            casualVersion: "Ribeye sounds good. What's the best way to have it cooked?",
            commonMistake: {
              wrong: "I want the ribeye, five-point cooked.",
              correct: "I'll have the ribeye. How do you recommend it cooked?",
              explanation:
                "中国说'五分熟'，但英语不能翻译成 five-point。美国用 rare, medium-rare, medium, medium-well, well-done。",
            },
            formalityVariants: {
              casual: "Ribeye for me. What's the best doneness?",
              standard: "I'll go with the ribeye. How would you recommend it cooked?",
              formal:
                "I will have the ribeye, please. What level of doneness would you recommend?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "For a ribeye, I'd suggest medium-rare — that's a warm pink center. It really lets the marbling and flavor come through. But if you're more comfortable with medium, that works great too. We do rare, medium-rare, medium, medium-well, and well-done.",
            textZh: "肋眼的话我建议中偏生（medium-rare）——就是中心温热粉红。这样能最大限度地呈现大理石纹和风味。如果你更习惯中等（medium），那也很好。我们有生的（rare）、中偏生、中等、中偏熟和全熟。",
            keyPhrases: [
              { en: "medium-rare", zh: "中偏生/三分熟" },
              { en: "warm pink center", zh: "温热粉红的中心" },
              { en: "marbling", zh: "大理石纹/油花" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Our chef recommends medium-rare for the best flavor — nice and pink in the middle. But it's totally your call.",
                textZh: "我们厨师推荐中偏生味道最好——中间漂亮的粉红色。但完全看你。",
                actionHint: "引用厨师推荐",
                frequency: "common",
              },
              {
                textEn:
                  "Medium-rare is the sweet spot for a ribeye — keeps it juicy. But medium is also a great choice if you prefer a little less pink.",
                textZh: "中偏生是肋眼的最佳选择——保持多汁。如果你喜欢少一点粉红，中等也是好选择。",
                actionHint: "说明理由和替代",
                frequency: "common",
              },
            ],
            casualVersion: "Medium-rare is the way to go — pink in the middle, super juicy. But medium's good too.",
            formalityVariants: {
              casual: "Medium-rare, for sure — pink and juicy. But you do you.",
              standard:
                "I'd suggest medium-rare for the best flavor. Medium is also great. We offer rare through well-done.",
              formal:
                "For optimal flavor and tenderness with a ribeye, I would recommend medium-rare, which features a warm pink center that accentuates the marbling. However, medium is also an excellent choice. Our kitchen prepares steaks from rare to well-done.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Let me try medium-rare then. What sides come with it?",
            textZh: "那我试试中偏生吧。配什么菜？",
            culturalNote:
              "美国牛排馆的配菜（sides）通常要另点另付。有些包含一到两个 sides，有些全部单点。先问清楚。",
            casualVersion: "I'll do medium-rare. What sides come with it?",
            commonMistake: {
              wrong: "What vegetable comes with steak?",
              correct: "What sides come with the steak?",
              explanation:
                "配菜不只是蔬菜（vegetable）。sides 包括土豆泥、薯条、沙拉、蘑菇等。用 sides（配菜）更全面。",
            },
            formalityVariants: {
              casual: "Medium-rare it is. What sides?",
              standard: "I'll try medium-rare. What sides does it come with?",
              formal:
                "I will try medium-rare. Could you advise which sides accompany the steak?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "It comes with your choice of two sides. We have baked potato, mashed potatoes, steamed broccoli, creamed spinach, Caesar salad, or garlic bread. Our baked potato and creamed spinach are really popular.",
            textZh: "配两个自选配菜。有烤土豆、土豆泥、蒸西兰花、奶油菠菜、凯撒沙拉或蒜蓉面包。烤土豆和奶油菠菜很受欢迎。",
            keyPhrases: [
              { en: "choice of two sides", zh: "自选两个配菜" },
              { en: "baked potato", zh: "烤土豆" },
              { en: "creamed spinach", zh: "奶油菠菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "You get two sides with it. Options are baked potato, mashed potato, broccoli, creamed spinach, Caesar, or garlic bread. Can't go wrong with the baked potato.",
                textZh: "配两个配菜。选项有烤土豆、土豆泥、西兰花、奶油菠菜、凯撒沙拉或蒜蓉面包。烤土豆肯定不会错。",
                actionHint: "推荐烤土豆",
                frequency: "common",
              },
              {
                textEn:
                  "Pick any two sides from our list. The creamed spinach is made in-house and it's amazing with the ribeye.",
                textZh: "从单子里选两个配菜。奶油菠菜是自制的，配肋眼特别好。",
                actionHint: "推荐自制菠菜",
                frequency: "common",
              },
            ],
            casualVersion: "Comes with two sides — potato, broccoli, spinach, Caesar, garlic bread. The baked potato's a hit.",
            formalityVariants: {
              casual: "Two sides — pick from potato, broccoli, spinach, Caesar, garlic bread.",
              standard:
                "It comes with two sides. We have baked potato, mashed potato, broccoli, creamed spinach, Caesar salad, and garlic bread.",
              formal:
                "The steak is accompanied by your selection of two side dishes. Our options include baked potato, mashed potatoes, steamed broccoli, creamed spinach, Caesar salad, and garlic bread. I would particularly recommend the creamed spinach.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll have the baked potato and creamed spinach. For the potato, can I get butter and sour cream on the side?",
            textZh: "我要烤土豆和奶油菠菜。烤土豆能把黄油和酸奶油放旁边吗？",
            culturalNote:
              "美国烤土豆的标准配料是 butter, sour cream, chives, bacon bits。通常会问你要哪些。说 'on the side' 就是单独给你，自己加。",
            casualVersion: "Baked potato and creamed spinach. Butter and sour cream on the side for the potato.",
            commonMistake: {
              wrong: "Potato with cream and oil, put beside.",
              correct: "For the potato, can I get butter and sour cream on the side?",
              explanation:
                "黄油是 butter 不是 oil，酸奶油是 sour cream 不是 cream。'on the side' 是固定搭配表示放旁边。",
            },
            formalityVariants: {
              casual: "Baked potato, creamed spinach. Butter and sour cream on the side.",
              standard:
                "I'll take the baked potato and creamed spinach. Butter and sour cream on the side, please.",
              formal:
                "I would like the baked potato and creamed spinach. May I have butter and sour cream served on the side for the potato?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Baked potato with butter and sour cream on the side, and creamed spinach. Great choices. Your steak will be out in about 12 minutes. Can I get you anything else in the meantime?",
            textZh: "烤土豆配黄油和酸奶油放旁边，加奶油菠菜。好选择。牛排大约12分钟。还需要什么吗？",
            keyPhrases: [
              { en: "in the meantime", zh: "在此期间" },
              { en: "will be out in about 12 minutes", zh: "大约12分钟上菜" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Perfect. Steak'll be ready in about 12 minutes. Need anything while you wait? Another drink, maybe?",
                textZh: "完美。牛排大约12分钟。等的时候需要什么吗？再来杯饮料？",
                actionHint: "推荐饮料",
                frequency: "common",
              },
              {
                textEn:
                  "Got it all down. The kitchen will have that up in about 12 minutes. I'll check back on you shortly.",
                textZh: "都记下了。厨房大约12分钟做好。一会儿我来看看你。",
                actionHint: "承诺跟进",
                frequency: "common",
              },
            ],
            casualVersion: "Baked potato on the side, creamed spinach — got it. Steak in about 12 min. Need anything else?",
            formalityVariants: {
              casual: "Got it! Steak in 12. Need anything?",
              standard:
                "Great choices. Steak in about 12 minutes. Anything else in the meantime?",
              formal:
                "Excellent selections. Your steak will be prepared in approximately 12 minutes. May I offer you anything additional while you wait?",
            },
          },
        ],
      },
      {
        id: "steak-sides-intermediate",
        titleZh: "进阶牛排点单",
        titleEn: "Intermediate Steak Order",
        description: "处理牛排熟度不满意、了解不同部位和烹饪方式",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Here's your ribeye, medium-rare. I had the chef give it a nice sear on the outside. Let me know if the temperature is to your liking after you cut into it.",
            textZh: "你的肋眼牛排，中偏生。我让厨师把外面煎出了漂亮的焦面。切开后告诉我温度合不合你意。",
            keyPhrases: [
              { en: "sear", zh: "煎焦/煎出焦面" },
              { en: "to your liking", zh: "合你意/满意" },
              { en: "cut into it", zh: "切开它" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Your medium-rare ribeye. Take a look when you cut in and let me know if it's good.",
                textZh: "你的中偏生肋眼。切开看看，告诉我是否可以。",
                actionHint: "简洁上菜",
                frequency: "common",
              },
              {
                textEn:
                  "Here we go — ribeye, medium-rare, rested for a few minutes so it's nice and juicy. Enjoy!",
                textZh: "来了——肋眼，中偏生，醒了几分钟所以特别多汁。享用！",
                actionHint: "提到醒肉",
                frequency: "occasional",
              },
            ],
            casualVersion: "Here's your steak — nice sear on it. Let me know if the temp's good.",
            formalityVariants: {
              casual: "Steak's here — check the temp and let me know.",
              standard:
                "Here's your ribeye, medium-rare. Check the temperature when you cut into it and let me know.",
              formal:
                "Here is your 12-ounce ribeye, prepared medium-rare with a sear. Please verify that the internal temperature meets your preference after you make your first cut.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Hmm, this looks a little too pink for me. I think it's closer to rare than medium-rare. Would it be possible to cook it a bit more?",
            textZh: "嗯，对我来说看起来有点太粉了。感觉更接近生的而不是中偏生。能再多烤一下吗？",
            culturalNote:
              "在美国牛排馆，觉得熟度不对完全可以请他们重新调整。好的餐厅不会介意——他们宁愿你满意。不要不好意思开口。",
            casualVersion: "This is a little too pink for me — more rare than medium-rare. Can you cook it a bit more?",
            commonMistake: {
              wrong: "This meat is too raw, cook it more.",
              correct: "This is a little too pink for me. Could you cook it a bit more?",
              explanation:
                "直接说 'too raw, cook it more' 语气太强硬。用 'a little too pink for me' 更委婉礼貌。加 'Could you' 而不是直接命令。",
            },
            formalityVariants: {
              casual: "This is a bit too rare for me. Can you throw it back on?",
              standard:
                "It looks a bit more rare than medium-rare. Could you cook it a little more?",
              formal:
                "I believe the temperature may be slightly below medium-rare. Would it be possible to have it cooked a bit further?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Absolutely, I'm sorry about that. I'll have the kitchen bring it up to a proper medium-rare for you. It should only take a couple minutes. Can I bring you some bread while you wait?",
            textZh: "当然，很抱歉。我让厨房调到正确的中偏生。只需要几分钟。等的时候要不要来点面包？",
            keyPhrases: [
              { en: "bring it up to", zh: "调到/升温到" },
              { en: "proper medium-rare", zh: "正确的中偏生" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "No problem at all. Let me take it back and have them fire it up a little more. Be right back.",
                textZh: "完全没问题。我拿回去让他们再烤一下。马上回来。",
                actionHint: "快速处理",
                frequency: "common",
              },
              {
                textEn:
                  "I apologize — let me get that fixed for you right away. The chef will bump it up to medium-rare. Won't be long.",
                textZh: "我道歉——马上帮你处理。厨师会把它调到中偏生。不会太久。",
                actionHint: "道歉+承诺",
                frequency: "common",
              },
            ],
            casualVersion: "My bad — I'll get it cooked up a bit more. Back in a couple minutes.",
            formalityVariants: {
              casual: "Sorry about that — I'll get it fixed. Back in a sec.",
              standard:
                "I'm sorry. I'll have the kitchen bring it up to medium-rare. A couple minutes.",
              formal:
                "My sincerest apologies. I will return the steak to the kitchen immediately to have it brought to a proper medium-rare temperature. It should only require a few minutes. May I bring you some bread in the interim?",
            },
          },
          {
            speaker: "you",
            textEn:
              "That would be great. And while you're at it, could I also order a side of mushrooms? I saw the table next to us had some and they looked amazing.",
            textZh: "太好了。顺便问一下，能再加一份蘑菇配菜吗？我看旁边桌有，看起来特别好。",
            culturalNote:
              "美国牛排馆的蘑菇配菜（sauteed mushrooms）是经典搭配，但通常要额外付费。看到别桌的菜想追加完全可以。",
            casualVersion: "Bread would be great. And can I add a side of mushrooms? Saw those at the next table — looked amazing.",
            commonMistake: {
              wrong: "The neighbor table has mushroom, I also want.",
              correct: "Could I order a side of mushrooms? The table next to us had some and they looked amazing.",
              explanation:
                "不说 neighbor table（邻居桌），说 the table next to us。'I also want' 不够礼貌，用 Could I order。",
            },
            formalityVariants: {
              casual: "Bread, yes. And can I get mushrooms too? They look great on the next table.",
              standard:
                "That'd be great. Also, could I add a side of mushrooms? They looked amazing at the next table.",
              formal:
                "That would be wonderful, thank you. Additionally, may I order a side of mushrooms? I noticed the preparation at the neighboring table and it looked exceptional.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Those are our garlic butter sauteed mushrooms — they're incredible with the ribeye. That'll be an extra $8. I'll add it to your order and bring it out with your steak.",
            textZh: "那是我们的蒜香黄油煎蘑菇——配肋眼特别好。额外8美元。我加到你的单子里，和牛排一起上。",
            keyPhrases: [
              { en: "sauteed mushrooms", zh: "煎蘑菇" },
              { en: "extra $8", zh: "额外8美元" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "Great choice — those are our garlic butter mushrooms. $8 extra. I'll time it with your steak.",
                textZh: "好选择——是蒜香黄油蘑菇。加8美元。我让它和牛排同时上。",
                actionHint: "同步上菜",
                frequency: "common",
              },
              {
                textEn:
                  "Everyone loves those! Garlic butter sauteed mushrooms, $8. I'll bring them with the steak.",
                textZh: "大家都喜欢！蒜香黄油煎蘑菇，8美元。和牛排一起上。",
                actionHint: "肯定选择",
                frequency: "common",
              },
            ],
            casualVersion: "Oh yeah, the garlic mushrooms — they're amazing. Extra $8. Coming with your steak.",
            formalityVariants: {
              casual: "Those are the garlic butter mushrooms — so good with the ribeye. Eight bucks extra, coming with your steak.",
              standard:
                "Those are our garlic butter sauteed mushrooms. Extra $8. I'll bring them with your steak.",
              formal:
                "Those are our garlic butter sauteed mushrooms — they pair beautifully with the ribeye. The additional charge is $8. I will ensure they are served alongside your steak.",
            },
          },
          {
            speaker: "you",
            textEn:
              "Perfect. Oh, and before I forget — what steak sauce do you have? Or do you think the ribeye doesn't need sauce?",
            textZh: "好的。对了在我忘记之前——你们有什么牛排酱？还是你觉得肋眼不需要酱？",
            culturalNote:
              "在美国好的牛排馆，往牛排上浇 A1 酱或番茄酱被认为是对厨师的'不尊重'。但这是你的食物，你想怎么吃都可以。可以先问服务员意见。",
            casualVersion: "What steak sauce do you guys have? Or should I skip the sauce on this one?",
            commonMistake: {
              wrong: "Do you have sauce for the meat?",
              correct: "What steak sauce do you have?",
              explanation:
                "说 'sauce for the meat' 太笼统。steak sauce 是专门指牛排酱（如 A1、chimichurri）。直接问 steak sauce 更准确。",
            },
            formalityVariants: {
              casual: "Got any steak sauce? Or is the ribeye good on its own?",
              standard:
                "What steak sauce do you have? Or do you think the ribeye is best without?",
              formal:
                "What sauce options do you offer for the steak? Or would you recommend enjoying the ribeye without additional condiments?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn:
              "Honestly? A good ribeye like ours doesn't need much. But we do have a house-made chimichurri, a peppercorn cream sauce, and classic A1 if you'd like. I'd recommend trying the chimichurri — it adds a nice fresh herb flavor without overpowering the steak.",
            textZh: "说实话？像我们这样好的肋眼不太需要酱。但我们有自制的阿根廷香草酱（chimichurri）、黑胡椒奶油酱和经典的A1酱。我推荐试试阿根廷香草酱——能增加新鲜的草本香味，又不会盖过牛排的味道。",
            keyPhrases: [
              { en: "chimichurri", zh: "阿根廷香草酱" },
              { en: "peppercorn cream sauce", zh: "黑胡椒奶油酱" },
              { en: "overpowering", zh: "盖过/压过" },
            ],
            alternativeExpressions: [
              {
                textEn:
                  "For this quality of steak, I'd say just salt and pepper. But if you want sauce, our chimichurri is the move.",
                textZh: "这个品质的牛排，我觉得只要盐和胡椒就好。但如果要酱，阿根廷香草酱是最佳选择。",
                actionHint: "暗示不需要酱但不强制",
                frequency: "common",
              },
              {
                textEn:
                  "Try it without sauce first — I think you'll be surprised. If you want something extra, we've got chimichurri on the side.",
                textZh: "先不加酱试试——我觉得你会惊喜的。如果想来点额外的，可以配阿根廷香草酱。",
                actionHint: "建议先不加",
                frequency: "common",
              },
            ],
            casualVersion:
              "Honestly, this steak's great on its own. But the chimichurri is a great option if you want something extra.",
            formalityVariants: {
              casual: "Honestly? Skip the sauce. But if you want one, get the chimichurri.",
              standard:
                "The ribeye is great on its own, but we have chimichurri, peppercorn cream, and A1. I'd recommend the chimichurri.",
              formal:
                "In my professional opinion, a ribeye of this caliber is best appreciated with minimal embellishment. However, we do offer a house-made chimichurri, a peppercorn cream sauce, and A1. Should you desire an accompaniment, I would recommend the chimichurri for its complementary fresh herb notes.",
            },
          },
          {
            speaker: "you",
            textEn:
              "I'll try it plain first and maybe get the chimichurri on the side just in case. Thanks for the recommendation!",
            textZh: "我先不加酱试试，阿根廷香草酱放旁边以防万一。谢谢推荐！",
            culturalNote:
              "'On the side just in case' 是很聪明的点法——两全其美。先品尝原味，不够再加酱。这种点法在美国很受赞赏。",
            casualVersion: "I'll try it plain first. Chimichurri on the side, just in case.",
            commonMistake: {
              wrong: "Give me no sauce first, if not good then give me sauce.",
              correct: "I'll try it plain first and get the chimichurri on the side.",
              explanation:
                "'plain' 意思是不加酱的原味。'on the side just in case' 是完美的搭配表达，不需要用条件句解释。",
            },
            formalityVariants: {
              casual: "Plain first, chimichurri on the side. Thanks!",
              standard:
                "I'll try it plain first, with the chimichurri on the side. Thanks for the recommendation!",
              formal:
                "I will begin by sampling the steak unadorned and have the chimichurri served on the side as a contingency. Thank you very much for the thoughtful recommendation.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 早午餐自助 Brunch Buffet ====================
  {
    id: "restaurant-brunch-buffet",
    tags: ["brunch", "buffet", "早午餐", "自助"],
    category: "restaurant",
    titleZh: "早午餐自助",
    titleEn: "Brunch Buffet",
    description: "在酒店或餐厅的早午餐自助餐厅点餐和用餐",
    otherRole: "服务员",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "basic-brunch-buffet",
        titleZh: "基础早午餐自助",
        titleEn: "Basic Brunch Buffet",
        description: "了解自助餐规则并开始用餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "服务员",
            textEn: "Good morning! Welcome to our Sunday brunch buffet. Table for how many?",
            textZh: "早上好！欢迎来到我们的周日早午餐自助。请问几位？",
            keyPhrases: [
              { en: "brunch buffet", zh: "早午餐自助" },
              { en: "table for how many", zh: "请问几位" },
            ],
            alternativeExpressions: [
              { textEn: "Morning! Here for the brunch? How many in your party?", textZh: "早上好！来吃早午餐的吗？几位？", actionHint: "更随意的问法", frequency: "common" },
            ],
            casualVersion: "Morning! Here for brunch? How many?",
            formalityVariants: {
              casual: "Morning! Here for brunch? How many?",
              standard: "Good morning! Welcome to our Sunday brunch buffet. Table for how many?",
              formal: "Good morning and welcome to our Sunday brunch buffet. How many guests will be dining with us today?",
            },
          },
          {
            speaker: "you",
            textEn: "Good morning! Two, please. How does the buffet work — is it all-you-can-eat?",
            textZh: "早上好！两位。自助餐怎么算——是无限量供应吗？",
            casualVersion: "Morning! Just two. Is it all-you-can-eat?",
            culturalNote: "'All-you-can-eat' 是自助餐的常用说法。有些 brunch buffet 是纯自助，有些是自助+现点（如鸡蛋的做法）。",
            commonMistake: {
              wrong: "Two people. The buffet is eat how much you want?",
              correct: "Two, please. How does the buffet work — is it all-you-can-eat?",
              explanation: "'How does the buffet work' 是礼貌的询问方式；'all-you-can-eat' 是固定表达。",
            },
            formalityVariants: {
              casual: "Two of us. Is it all-you-can-eat?",
              standard: "Two, please. How does the buffet work — is it all-you-can-eat?",
              formal: "A table for two, please. Could you explain the buffet format? Is it an unlimited dining arrangement?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Yes, it's all-you-can-eat for $32 per person. That includes the buffet stations and a complimentary mimosa or juice. Eggs and omelets are made to order at the live station.",
            textZh: "是的，每人32美元无限量供应。包括自助餐台和一杯免费的含羞草鸡尾酒或果汁。鸡蛋和煎蛋卷在现场烹饪台按需制作。",
            keyPhrases: [
              { en: "made to order", zh: "按需制作" },
              { en: "complimentary mimosa", zh: "免费的含羞草鸡尾酒" },
            ],
            alternativeExpressions: [
              { textEn: "It's $32 per person, unlimited. You get the buffet plus a free mimosa or juice. There's also an omelet bar where the chef makes them fresh.", textZh: "每人32美元，无限量。包含自助餐和一杯免费含羞草或果汁。还有煎蛋卷吧，厨师现做。", actionHint: "分项介绍", frequency: "common" },
            ],
            casualVersion: "Yep, $32 a head, eat as much as you want. Comes with a free mimosa or juice. Eggs and omelets are made fresh at the station.",
            formalityVariants: {
              casual: "Yep, $32 a head, eat all you want. Free mimosa too. Eggs are made fresh at the station.",
              standard: "Yes, it's all-you-can-eat for $32 per person. That includes the buffet stations and a complimentary mimosa or juice. Eggs and omelets are made to order at the live station.",
              formal: "Indeed, it is an all-you-can-eat arrangement at thirty-two dollars per person. This includes full access to our buffet stations along with a complimentary mimosa or fresh juice. Our live cooking station offers eggs and omelets prepared to your specifications.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds great. Can we get the mimosas, please? Also, are there any gluten-free options at the buffet?",
            textZh: "听起来不错。我们要含羞草鸡尾酒。另外，自助餐有无麸质的选项吗？",
            casualVersion: "We'll take the mimosas. Any gluten-free stuff on the buffet?",
            culturalNote: "在美国，询问 gluten-free options 非常普遍且完全正常。大多数 brunch buffet 都有标注过敏原信息。",
            commonMistake: {
              wrong: "Give us mimosa. Is there food without gluten?",
              correct: "Can we get the mimosas, please? Are there any gluten-free options at the buffet?",
              explanation: "'Can we get' 比 'Give us' 更礼貌；'gluten-free options' 是标准表达。",
            },
            formalityVariants: {
              casual: "Mimosas for us. Anything gluten-free?",
              standard: "Can we get the mimosas, please? Also, are there any gluten-free options at the buffet?",
              formal: "We would like the mimosas, please. Additionally, could you advise whether the buffet offers any gluten-free selections?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Two mimosas coming right up! Yes, we have gluten-free labels on the buffet. The fruit station, yogurt bar, and the smoked salmon are all gluten-free. I can also ask the chef to make your omelet without any wheat.",
            textZh: "两杯含羞草马上来！有的，自助餐台上有无麸质标签。水果站、酸奶吧和烟熏三文鱼都是无麸质的。我也可以让厨师做不含小麦的煎蛋卷。",
            keyPhrases: [
              { en: "gluten-free labels", zh: "无麸质标签" },
              { en: "coming right up", zh: "马上来" },
            ],
            alternativeExpressions: [
              { textEn: "Mimosas on the way! There are GF labels on the buffet — fruit, yogurt, and smoked salmon are safe. The omelet station can do gluten-free too.", textZh: "含羞草马上来！自助餐有无麸质标签——水果、酸奶和烟熏三文鱼都没问题。煎蛋卷站也可以做无麸质的。", actionHint: "用GF缩写", frequency: "common" },
            ],
            casualVersion: "Mimosas coming up! Yeah, there's GF labels on everything. Fruit, yogurt, and salmon are good. Chef can do a GF omelet too.",
            formalityVariants: {
              casual: "Mimosas on the way! There's GF labels on everything. Fruit, yogurt, salmon are all good.",
              standard: "Two mimosas coming right up! Yes, we have gluten-free labels on the buffet. The fruit station, yogurt bar, and the smoked salmon are all gluten-free. I can also ask the chef to make your omelet without any wheat.",
              formal: "Your mimosas will be with you momentarily. We do indeed provide gluten-free labeling throughout the buffet. The fruit station, yogurt bar, and smoked salmon are all certified gluten-free. Furthermore, I can arrange for the chef to prepare an omelet without any wheat-based ingredients.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. One more thing — is there a time limit for the brunch, or can we take our time?",
            textZh: "太好了。再问一下——早午餐有时间限制吗，还是可以慢慢吃？",
            casualVersion: "Cool. Is there a time limit, or can we chill?",
            culturalNote: "很多 brunch buffet 有90分钟或2小时的用餐时限，尤其是热门时段。提前了解可以更好地安排用餐节奏。",
            commonMistake: {
              wrong: "Is there time limit? Can we eat slowly?",
              correct: "Is there a time limit for the brunch, or can we take our time?",
              explanation: "'take our time' 是'慢慢来'的地道说法，比 'eat slowly' 更自然。",
            },
            formalityVariants: {
              casual: "Is there a time limit or can we just hang out?",
              standard: "Is there a time limit for the brunch, or can we take our time?",
              formal: "May I inquire whether there is a designated time limit for the brunch seating, or are we welcome to dine at a leisurely pace?",
            },
          },
        ],
      },
      {
        id: "intermediate-brunch-buffet",
        titleZh: "进阶早午餐自助",
        titleEn: "Intermediate Brunch Buffet",
        description: "处理特殊需求和升级用餐体验",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, we're really enjoying the brunch. Is it possible to upgrade to the bottomless mimosa package?",
            textZh: "不好意思，我们很喜欢这顿早午餐。可以升级到无限畅饮含羞草套餐吗？",
            casualVersion: "Hey, this brunch is great. Can we upgrade to bottomless mimosas?",
            culturalNote: "'Bottomless' 是美国早午餐的流行用语，意思是无限续杯。Bottomless mimosas/brunch 是周末社交的热门活动。",
            commonMistake: {
              wrong: "Can we change to unlimited mimosa?",
              correct: "Is it possible to upgrade to the bottomless mimosa package?",
              explanation: "'upgrade to' 表示从基础升级；'bottomless' 是无限续杯的标准说法。",
            },
            formalityVariants: {
              casual: "Can we do the bottomless mimosas?",
              standard: "Is it possible to upgrade to the bottomless mimosa package?",
              formal: "We are thoroughly enjoying the brunch. Would it be possible to upgrade our beverage selection to the bottomless mimosa package?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Of course! The bottomless mimosa upgrade is $15 per person. That gives you unlimited mimosas, bellinis, and bloody marys for the duration of your brunch.",
            textZh: "当然可以！无限畅饮升级每人15美元。包括无限量的含羞草、贝利尼和血腥玛丽，整个用餐期间有效。",
            keyPhrases: [
              { en: "bottomless mimosa upgrade", zh: "无限畅饮升级" },
              { en: "for the duration of your brunch", zh: "整个用餐期间" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! It's an extra $15 a person. You get unlimited mimosas, bellinis, and bloodys for the whole meal.", textZh: "没问题！每人加15美元。整餐无限量的含羞草、贝利尼和血腥玛丽。", actionHint: "简洁报价", frequency: "common" },
            ],
            casualVersion: "Yep! $15 extra per person — unlimited mimosas, bellinis, and bloodys the whole time.",
            formalityVariants: {
              casual: "Yep! $15 more each — unlimited drinks the whole meal.",
              standard: "Of course! The bottomless mimosa upgrade is $15 per person. That gives you unlimited mimosas, bellinis, and bloody marys for the duration of your brunch.",
              formal: "Certainly. The bottomless beverage upgrade is fifteen dollars per person. This entitles you to unlimited mimosas, bellinis, and bloody marys throughout the entirety of your brunch experience.",
            },
          },
          {
            speaker: "you",
            textEn: "We'll take it for both of us. Also, the eggs Benedict at the station looked amazing, but can the chef make it with smoked salmon instead of Canadian bacon?",
            textZh: "我们两个都升级。另外，烹饪台的班尼迪克蛋看起来很棒，厨师可以把加拿大培根换成烟熏三文鱼吗？",
            casualVersion: "We'll do it for both of us. And can the chef do eggs Benedict with salmon instead of bacon?",
            culturalNote: "把 Canadian bacon 换成 smoked salmon 的版本叫 Eggs Royale 或 Eggs Norwegian。在 live station 提出定制要求是完全正常的。",
            commonMistake: {
              wrong: "Both of us want upgrade. Can chef change bacon to salmon for egg Benedict?",
              correct: "We'll take it for both of us. Can the chef make it with smoked salmon instead of Canadian bacon?",
              explanation: "'We'll take it' 更自然；'instead of' 是替换的标准说法。",
            },
            formalityVariants: {
              casual: "Both of us, please. And can the chef swap the bacon for salmon on the eggs Benedict?",
              standard: "We'll take it for both of us. Also, can the chef make the eggs Benedict with smoked salmon instead of Canadian bacon?",
              formal: "We would like to apply the upgrade for both of us. Furthermore, would the chef be able to prepare the eggs Benedict with smoked salmon in lieu of Canadian bacon?",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Absolutely — that's called Eggs Royale. I'll let the chef know. Would you like it with hollandaise on the side, or poured over?",
            textZh: "当然——那叫皇家班尼迪克蛋。我跟厨师说。荷兰酱要放旁边还是浇在上面？",
            keyPhrases: [
              { en: "Eggs Royale", zh: "皇家班尼迪克蛋" },
              { en: "on the side", zh: "放旁边" },
            ],
            alternativeExpressions: [
              { textEn: "Sure, that's the Eggs Royale version. Shall I have the hollandaise on top or served separately?", textZh: "好的，那是皇家版的。荷兰酱浇上面还是分开放？", actionHint: "确认名称并追问", frequency: "common" },
            ],
            casualVersion: "Yeah, that's Eggs Royale! Hollandaise on the side or on top?",
            formalityVariants: {
              casual: "That's Eggs Royale! Sauce on the side or on top?",
              standard: "Absolutely — that's called Eggs Royale. Would you like the hollandaise on the side, or poured over?",
              formal: "Certainly — that preparation is known as Eggs Royale. How would you prefer the hollandaise: served on the side for self-application, or poured over the dish?",
            },
          },
          {
            speaker: "you",
            textEn: "On the side, please. And could we get a fresh round of mimosas? These are delicious.",
            textZh: "放旁边。另外能再来一轮含羞草吗？非常好喝。",
            casualVersion: "On the side. And another round of mimosas? These are so good.",
            culturalNote: "'A round of' 表示给所有人各来一杯。'Fresh round' 强调要新鲜调制的。在 bottomless brunch 里续杯很正常。",
            commonMistake: {
              wrong: "Put sauce beside. Give us more mimosa.",
              correct: "On the side, please. Could we get a fresh round of mimosas?",
              explanation: "'a fresh round' 比 'more mimosa' 更地道；加 'please' 和 'could we' 更礼貌。",
            },
            formalityVariants: {
              casual: "On the side. More mimosas when you get a sec?",
              standard: "On the side, please. And could we get a fresh round of mimosas? These are delicious.",
              formal: "On the side, if you would. And when convenient, might we have another round of mimosas? They are quite exquisite.",
            },
          },
          {
            speaker: "them",
            role: "服务员",
            textEn: "Coming right up! I'll bring the mimosas and let you know when the Eggs Royale is ready — should be about five minutes.",
            textZh: "马上来！我先上含羞草，皇家班尼迪克蛋好了通知您——大约五分钟。",
            keyPhrases: [
              { en: "coming right up", zh: "马上来" },
              { en: "let you know when", zh: "好了通知您" },
            ],
            alternativeExpressions: [
              { textEn: "On it! Mimosas first, and I'll swing by when your Eggs Royale is done — about five minutes.", textZh: "这就去！先上含羞草，皇家班尼迪克蛋好了我过来通知——大约五分钟。", actionHint: "口语化回应", frequency: "common" },
            ],
            casualVersion: "On it! Mimosas first, Eggs Royale in about five. I'll come grab you.",
            formalityVariants: {
              casual: "On it! Mimosas first, eggs in about five.",
              standard: "Coming right up! I'll bring the mimosas and let you know when the Eggs Royale is ready — should be about five minutes.",
              formal: "Right away. I shall deliver the mimosas presently and notify you when the Eggs Royale has been prepared — that should take approximately five minutes.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 欢乐时光 Happy Hour ====================
  {
    id: "restaurant-happy-hour",
    tags: ["happy hour", "drinks", "欢乐时光", "特价"],
    category: "restaurant",
    titleZh: "欢乐时光",
    titleEn: "Happy Hour",
    description: "在餐厅或酒吧享受欢乐时光优惠",
    otherRole: "调酒师",
    otherRoleIcon: "🍸",
    flows: [
      {
        id: "basic-happy-hour",
        titleZh: "基础欢乐时光",
        titleEn: "Basic Happy Hour",
        description: "了解欢乐时光的优惠和菜单",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, are you still doing happy hour? What's included?",
            textZh: "你好，现在还是欢乐时光吗？有哪些优惠？",
            casualVersion: "Hey, is happy hour still going? What's the deal?",
            culturalNote: "Happy hour 通常在工作日下午4-7点，提供打折的饮品和小食。周末一般没有。",
            commonMistake: {
              wrong: "Is now happy hour time? What is discount?",
              correct: "Are you still doing happy hour? What's included?",
              explanation: "'doing happy hour' 是询问是否在进行中的标准说法；'What's included' 比 'What is discount' 更地道。",
            },
            formalityVariants: {
              casual: "Still happy hour? What's on special?",
              standard: "Hi, are you still doing happy hour? What's included?",
              formal: "Good evening. Is the happy hour promotion currently in effect? Could you tell me what is included?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "You're just in time — happy hour runs until 7. We've got half-price well drinks, $5 draft beers, and $7 house wines. We also have a $6 appetizer menu.",
            textZh: "来得正好——欢乐时光到7点结束。基础烈酒鸡尾酒半价，生啤5美元，佐餐酒7美元。还有6美元的开胃菜菜单。",
            keyPhrases: [
              { en: "well drinks", zh: "基础烈酒鸡尾酒" },
              { en: "draft beers", zh: "生啤" },
            ],
            alternativeExpressions: [
              { textEn: "Perfect timing! HH goes till 7. Half off wells, $5 drafts, $7 wines, and we've got a $6 apps menu.", textZh: "来得正好！欢乐时光到7点。基础酒半价，生啤5美元，酒7美元，还有6美元的小食菜单。", actionHint: "使用缩写HH", frequency: "common" },
            ],
            casualVersion: "Just in time! Happy hour's till 7. Wells are half off, drafts are 5 bucks, wines are 7. Got cheap apps too.",
            formalityVariants: {
              casual: "You made it! HH till 7. Half off wells, $5 drafts, $7 wines, $6 apps.",
              standard: "You're just in time — happy hour runs until 7. We've got half-price well drinks, $5 draft beers, and $7 house wines. We also have a $6 appetizer menu.",
              formal: "You have arrived just in time. Our happy hour extends until seven o'clock. We offer well cocktails at half price, draft beers at five dollars, and house wines at seven dollars. Additionally, we feature a six-dollar appetizer selection.",
            },
          },
          {
            speaker: "you",
            textEn: "Great! I'll start with a draft IPA if you have one. What do you recommend from the appetizer menu?",
            textZh: "太好了！如果有IPA的话我先来一杯生啤。开胃菜你推荐什么？",
            casualVersion: "Nice! Got any IPA on tap? And what's good on the apps menu?",
            culturalNote: "'On tap' 和 'draft' 都指生啤。IPA（India Pale Ale）是美国最流行的精酿啤酒类型。",
            commonMistake: {
              wrong: "Give me one IPA beer. What appetizer is good?",
              correct: "I'll start with a draft IPA if you have one. What do you recommend from the appetizer menu?",
              explanation: "'I'll start with' 比 'Give me' 更礼貌；'if you have one' 表示不确定是否有。",
            },
            formalityVariants: {
              casual: "I'll take an IPA if you've got one on tap. What's good for apps?",
              standard: "I'll start with a draft IPA if you have one. What do you recommend from the appetizer menu?",
              formal: "I would like to begin with a draft IPA, if available. What would you recommend from the appetizer selection?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We have Lagunitas IPA on draft — good choice. For apps, the truffle fries and the crispy calamari are our most popular happy hour items.",
            textZh: "生啤有 Lagunitas IPA——好选择。开胃菜的话，松露薯条和脆皮鱿鱼圈是我们欢乐时光最受欢迎的。",
            keyPhrases: [
              { en: "on draft", zh: "生啤" },
              { en: "most popular", zh: "最受欢迎的" },
            ],
            alternativeExpressions: [
              { textEn: "We've got Lagunitas on tap. For food, everyone loves the truffle fries and calamari — can't go wrong with either.", textZh: "有 Lagunitas 生啤。吃的话，大家都爱松露薯条和鱿鱼圈——两个都不会错。", actionHint: "推荐口吻", frequency: "common" },
            ],
            casualVersion: "Got Lagunitas IPA on tap. For food, truffle fries and calamari are the go-tos.",
            formalityVariants: {
              casual: "Lagunitas on tap — solid pick. Truffle fries and calamari are the go-tos.",
              standard: "We have Lagunitas IPA on draft — good choice. The truffle fries and crispy calamari are our most popular happy hour items.",
              formal: "We do carry Lagunitas IPA on draft — an excellent selection. For appetizers, I would recommend the truffle fries and the crispy calamari, both of which are perennial favorites during happy hour.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take both — the truffle fries and the calamari. Can I also keep ordering happy hour prices if I order before 7?",
            textZh: "两个都要——松露薯条和鱿鱼圈。如果我在7点前点单，可以继续享受欢乐时光价格吗？",
            casualVersion: "Both, please. If I order before 7, do I still get the deals?",
            culturalNote: "很多酒吧的规则是'只要在7点前下单就享受优惠'，但也有些严格按时间截止。提前问清楚很重要。",
            commonMistake: {
              wrong: "I want both. If I order before 7, the price is still happy hour?",
              correct: "Can I keep ordering at happy hour prices if I order before 7?",
              explanation: "'keep ordering at happy hour prices' 是询问延续优惠的自然方式。",
            },
            formalityVariants: {
              casual: "Both, please. Can I still get the deal if I order before 7?",
              standard: "I'll take both. Can I also keep ordering at happy hour prices if I order before 7?",
              formal: "I shall have both, please. Additionally, may I continue to order at happy hour pricing provided the order is placed before the seven o'clock cutoff?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Absolutely — any order placed before 7 gets the happy hour price, even if you're still here after. I'd say get your drink orders in by 6:50 to be safe.",
            textZh: "当然——7点前下的单都算欢乐时光价格，即使之后还在这里。建议6:50前点酒比较保险。",
            keyPhrases: [
              { en: "placed before 7", zh: "7点前下的单" },
              { en: "to be safe", zh: "比较保险" },
            ],
            alternativeExpressions: [
              { textEn: "Yep, anything ordered before 7 stays at the HH price. Just give me a heads-up around 6:50 for last call on deals.", textZh: "是的，7点前点的都保持欢乐时光价。6:50左右提醒我一下，做最后一轮优惠点单。", actionHint: "提到last call", frequency: "common" },
            ],
            casualVersion: "Yeah, order before 7 and you're good. I'd say get your drinks in by 6:50 just in case.",
            formalityVariants: {
              casual: "Yeah, order before 7 and you're golden. Maybe get drinks in by 6:50.",
              standard: "Absolutely — any order placed before 7 gets the happy hour price, even if you're still here after. I'd say get your drink orders in by 6:50 to be safe.",
              formal: "Certainly. Any order submitted prior to seven o'clock will receive the happy hour pricing, regardless of how long you remain afterward. I would suggest placing your beverage orders by approximately six-fifty to ensure eligibility.",
            },
          },
        ],
      },
      {
        id: "intermediate-happy-hour",
        titleZh: "进阶欢乐时光",
        titleEn: "Intermediate Happy Hour",
        description: "与朋友组织happy hour聚会并点团体单",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We have a group of eight coming for happy hour. Can we push some tables together, or do you have a section for larger groups?",
            textZh: "我们有八个人要来欢乐时光。可以把几张桌子拼在一起吗，还是有大桌区域？",
            casualVersion: "Got eight people coming for HH. Can we push tables together or is there a big section?",
            culturalNote: "Happy hour 通常是先到先得，大团体最好提前到或打电话预留。有些地方不接受 happy hour 时段的预订。",
            commonMistake: {
              wrong: "We have 8 people come for happy hour. Can you put tables together?",
              correct: "We have a group of eight coming for happy hour. Can we push some tables together?",
              explanation: "'a group of eight coming' 更自然；'push tables together' 是拼桌的常用说法。",
            },
            formalityVariants: {
              casual: "Eight of us for happy hour. Can we push some tables together?",
              standard: "We have a group of eight coming for happy hour. Can we push some tables together, or do you have a section for larger groups?",
              formal: "We are expecting a party of eight for happy hour this evening. Would it be possible to arrange a combined seating area, or do you have a designated section for larger groups?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "For eight people, I can set up the high-top tables in the back — more room and a bit quieter. Happy hour deals still apply. Want me to hold the spot for you?",
            textZh: "八个人的话，我可以在后面安排高脚桌——空间更大也安静一些。欢乐时光优惠照样适用。要我帮你留位子吗？",
            keyPhrases: [
              { en: "high-top tables", zh: "高脚桌" },
              { en: "hold the spot", zh: "留位子" },
            ],
            alternativeExpressions: [
              { textEn: "I've got some high-tops in the back that'll fit your group. Same HH prices. Want me to save them for you?", textZh: "后面有几张高脚桌能容纳你们。一样的欢乐时光价格。要我给你们留着吗？", actionHint: "直接提方案", frequency: "common" },
            ],
            casualVersion: "I can set you up at the high-tops in the back. Plenty of room. Want me to save them?",
            formalityVariants: {
              casual: "High-tops in the back work? Plenty of room. Want me to save 'em?",
              standard: "For eight people, I can set up the high-top tables in the back. Happy hour deals still apply. Want me to hold the spot?",
              formal: "For a party of eight, I would suggest our high-top tables in the rear section, which offer more space and a slightly quieter atmosphere. All happy hour promotions remain applicable. Shall I reserve that area for your group?",
            },
          },
          {
            speaker: "you",
            textEn: "That would be great. We'll be there around 5:30. Also, do you do pitcher specials during happy hour? That might be easier for a big group.",
            textZh: "太好了。我们大约5:30到。另外，欢乐时光有扎啤特价吗？大团体可能更方便。",
            casualVersion: "Perfect, we'll roll in around 5:30. Got any pitcher deals? Easier for a big group.",
            culturalNote: "'Pitcher' 是大壶装啤酒（通常60oz/约1.8升），适合多人分享。很多 happy hour 有 pitcher specials。",
            commonMistake: {
              wrong: "We come 5:30. Do you have big bottle beer special? We are many people.",
              correct: "We'll be there around 5:30. Do you do pitcher specials during happy hour?",
              explanation: "'pitcher specials' 是扎啤特价的正确说法；'do you do' 是询问是否提供某服务的地道问法。",
            },
            formalityVariants: {
              casual: "We'll be there at 5:30ish. Any pitcher deals?",
              standard: "We'll be there around 5:30. Do you do pitcher specials during happy hour? That might be easier for a big group.",
              formal: "We anticipate arriving at approximately half past five. Do you offer pitcher specials during happy hour? That might prove more convenient for our larger party.",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "We do! During happy hour, pitchers are $18 for domestic and $24 for craft. That's about a 30% saving compared to ordering by the glass.",
            textZh: "有的！欢乐时光期间，国产啤酒扎啤18美元，精酿24美元。比单杯点大约省30%。",
            keyPhrases: [
              { en: "pitchers", zh: "扎啤" },
              { en: "domestic", zh: "国产啤酒" },
            ],
            alternativeExpressions: [
              { textEn: "Yeah, HH pitchers are $18 domestic, $24 craft. Way better deal than ordering pints individually.", textZh: "有，欢乐时光扎啤国产18美元，精酿24美元。比逐杯点划算多了。", actionHint: "强调性价比", frequency: "common" },
            ],
            casualVersion: "Yep! $18 for domestic pitchers, $24 for craft. Saves like 30% vs. by the glass.",
            formalityVariants: {
              casual: "Yeah! $18 domestic, $24 craft pitchers. Way better deal.",
              standard: "We do! During happy hour, pitchers are $18 for domestic and $24 for craft. That's about a 30% saving compared to ordering by the glass.",
              formal: "Indeed we do. During happy hour, domestic pitchers are eighteen dollars and craft selections are twenty-four dollars. This represents approximately a thirty percent savings compared to individual glass orders.",
            },
          },
          {
            speaker: "you",
            textEn: "Perfect. Can we get separate checks for the group, or is it easier to split it evenly at the end?",
            textZh: "太好了。我们可以分开结账吗，还是最后平均分更方便？",
            casualVersion: "Can we get separate checks, or just split it at the end?",
            culturalNote: "在美国，分开结账（separate checks）很常见。有些餐厅对大团体限制分账次数（如最多4张卡）。提前问清楚。",
            commonMistake: {
              wrong: "Can we pay separately? Or divide the bill?",
              correct: "Can we get separate checks, or is it easier to split it evenly?",
              explanation: "'separate checks' 是美式说法（英式用 'separate bills'）；'split it evenly' 是平均分账的标准表达。",
            },
            formalityVariants: {
              casual: "Can we do separate tabs or just split it even?",
              standard: "Can we get separate checks for the group, or is it easier to split it evenly at the end?",
              formal: "Would it be possible to arrange separate checks for each member of the group, or would you recommend splitting the total evenly at the conclusion of the evening?",
            },
          },
          {
            speaker: "them",
            role: "调酒师",
            textEn: "Either works! I can start separate tabs if everyone gives me a card upfront, or we can split the total at the end. For big groups, I'd recommend starting tabs — it's much smoother.",
            textZh: "都可以！如果每个人先给我一张卡，我可以开单独的账单；也可以最后分总额。大团体的话，我建议先开单独账单——更顺畅。",
            keyPhrases: [
              { en: "start separate tabs", zh: "开单独账单" },
              { en: "gives me a card upfront", zh: "先给我一张卡" },
            ],
            alternativeExpressions: [
              { textEn: "Both are fine. For groups I usually suggest separate tabs — just hand me your cards when you arrive and I'll track everything.", textZh: "都行。大团体我通常建议分开记账——到了把卡给我就行，我全程跟踪。", actionHint: "给建议", frequency: "common" },
            ],
            casualVersion: "Either way! For big groups, separate tabs work best. Just hand me your cards when you get here.",
            formalityVariants: {
              casual: "Either way's fine! Separate tabs are easiest for groups though. Cards up front.",
              standard: "Either works! I can start separate tabs if everyone gives me a card upfront, or we can split the total at the end. For big groups, I'd recommend starting tabs — it's much smoother.",
              formal: "We can accommodate either arrangement. I can initiate separate tabs provided each guest presents a card at the outset, or we can divide the total equally at the end. For larger parties, I would recommend the former approach — it tends to proceed far more smoothly.",
            },
          },
        ],
      },
    ],
  },

  // ==================== 团体外卖订餐 Catering Order ====================
  {
    id: "restaurant-catering-order",
    tags: ["catering", "group order", "外卖", "团体"],
    category: "restaurant",
    titleZh: "团体外卖订餐",
    titleEn: "Group Catering Order",
    description: "为团体活动或办公室订购外卖团餐",
    otherRole: "外卖经理",
    otherRoleIcon: "📋",
    flows: [
      {
        id: "basic-catering-order",
        titleZh: "基础团体订餐",
        titleEn: "Basic Catering Order",
        description: "为办公室午餐会议订购团餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to place a catering order for a lunch meeting. It's for 20 people, and we need it delivered by noon on Friday.",
            textZh: "你好，我想订一份午餐会议的团餐。20个人，需要周五中午前送到。",
            casualVersion: "Hey, I need to order catering for 20 people. Lunch meeting, gotta be there by noon Friday.",
            culturalNote: "团餐订单通常需要提前24-48小时。越早订越好，特别是周五这种热门日子。",
            commonMistake: {
              wrong: "I want to order food for 20 people. Friday lunch, 12 o'clock.",
              correct: "I'd like to place a catering order for a lunch meeting. It's for 20 people, and we need it delivered by noon on Friday.",
              explanation: "'place a catering order' 是团餐订单的专业说法；'delivered by noon' 明确了送达截止时间。",
            },
            formalityVariants: {
              casual: "Need catering for 20, lunch meeting Friday. Gotta be there by noon.",
              standard: "Hi, I'd like to place a catering order for a lunch meeting. It's for 20 people, and we need it delivered by noon on Friday.",
              formal: "Good morning. I would like to arrange a catering order for a corporate lunch meeting. We require service for twenty guests, with delivery no later than noon this coming Friday.",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "We'd be happy to help! For 20 people, I'd recommend one of our catering packages. We have a sandwich platter package at $12 per person, or a hot meal package starting at $18 per person. Which interests you?",
            textZh: "很高兴为您服务！20人的话，我推荐我们的团餐套餐。三明治拼盘套餐每人12美元，或者热餐套餐每人18美元起。您倾向哪种？",
            keyPhrases: [
              { en: "catering packages", zh: "团餐套餐" },
              { en: "per person", zh: "每人" },
            ],
            alternativeExpressions: [
              { textEn: "Great! We've got two main catering options — sandwich platters at $12 a head, or hot meals starting at $18 a head. What sounds better?", textZh: "好的！我们有两种主要团餐选择——三明治拼盘每人12美元，或热餐每人18美元起。哪个听起来更好？", actionHint: "用a head替代per person", frequency: "common" },
            ],
            casualVersion: "Nice! We've got sandwich platters at $12 a head or hot meals at $18. Which one?",
            formalityVariants: {
              casual: "We've got sandwiches at $12 a head or hot meals from $18. Which one?",
              standard: "For 20 people, I'd recommend our catering packages. We have a sandwich platter at $12 per person, or a hot meal package starting at $18 per person. Which interests you?",
              formal: "We would be delighted to assist. For a party of twenty, I would recommend one of our curated catering packages. Our sandwich platter option is priced at twelve dollars per person, while our hot meal package begins at eighteen dollars per person. Which would be of greater interest?",
            },
          },
          {
            speaker: "you",
            textEn: "Let's go with the hot meal package. What are the options? Also, we have a few vegetarians in the group.",
            textZh: "选热餐套餐吧。有什么选择？另外，我们组里有几个素食者。",
            casualVersion: "Hot meals, please. What's the lineup? Also got some vegetarians.",
            culturalNote: "美国办公室团餐时提到dietary restrictions（饮食限制）是标准做法。常见的有vegetarian、vegan、gluten-free。",
            commonMistake: {
              wrong: "Hot meal please. What food? Some people eat vegetables only.",
              correct: "Let's go with the hot meal package. What are the options? We have a few vegetarians.",
              explanation: "'Let's go with' 是做选择的地道说法；'vegetarians' 比 'people who eat vegetables only' 更准确。",
            },
            formalityVariants: {
              casual: "Hot meals. What's available? Got a few vegetarians too.",
              standard: "Let's go with the hot meal package. What are the options? We have a few vegetarians in the group.",
              formal: "We shall proceed with the hot meal package. Could you outline the available options? I should note that several members of our group are vegetarian.",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "For the hot meal package, you pick two mains, two sides, and a salad. Popular mains are grilled chicken and beef lasagna. For vegetarians, we have eggplant parmesan and a roasted veggie pasta. How many vegetarian portions would you need?",
            textZh: "热餐套餐包括选两个主菜、两个配菜和一个沙拉。热门主菜有烤鸡和牛肉千层面。素食主菜有茄子帕尔马干酪和烤蔬菜意面。需要多少份素食？",
            keyPhrases: [
              { en: "mains", zh: "主菜" },
              { en: "vegetarian portions", zh: "素食份数" },
            ],
            alternativeExpressions: [
              { textEn: "You get two entrees, two sides, and a salad. For the vegetarians, we can do eggplant parm or veggie pasta. How many veggie servings?", textZh: "包含两个主菜、两个配菜和一个沙拉。素食可以选茄子帕尔马或蔬菜意面。要几份素食？", actionHint: "用entrees替代mains", frequency: "common" },
            ],
            casualVersion: "You pick two mains, two sides, and a salad. Chicken and lasagna are popular. For veggies, we've got eggplant parm and veggie pasta. How many vegetarian?",
            formalityVariants: {
              casual: "Two mains, two sides, one salad. Chicken and lasagna are hits. Veggie options: eggplant parm or veggie pasta. How many vegetarian?",
              standard: "For the hot meal package, you pick two mains, two sides, and a salad. For vegetarians, we have eggplant parmesan and roasted veggie pasta. How many vegetarian portions?",
              formal: "The hot meal package includes a selection of two main courses, two side dishes, and a salad. Our most requested mains are the grilled chicken and beef lasagna. For vegetarian guests, we offer eggplant parmesan and roasted vegetable pasta. How many vegetarian portions would be required?",
            },
          },
          {
            speaker: "you",
            textEn: "Let's do grilled chicken and eggplant parmesan as the two mains — that way everyone's covered. About five vegetarian portions. What sides do you recommend?",
            textZh: "主菜选烤鸡和茄子帕尔马干酪——这样所有人都能吃。大约五份素食。配菜推荐什么？",
            casualVersion: "Chicken and eggplant parm for mains. Five vegetarian. What's good for sides?",
            culturalNote: "选一荤一素两个主菜是团餐的聪明做法。'That way everyone's covered' 表示照顾到所有人的需求。",
            commonMistake: {
              wrong: "Main food: chicken and eggplant. 5 vegetarian. What side food?",
              correct: "Let's do grilled chicken and eggplant parmesan as the two mains. About five vegetarian portions. What sides do you recommend?",
              explanation: "'Let's do X as the mains' 是选择主菜的自然说法；'What do you recommend' 比 'What side food' 更专业。",
            },
            formalityVariants: {
              casual: "Chicken and eggplant parm. Five veggie servings. What's good for sides?",
              standard: "Let's do grilled chicken and eggplant parmesan as the two mains — about five vegetarian portions. What sides do you recommend?",
              formal: "We shall select the grilled chicken and eggplant parmesan as our two main courses, with approximately five designated vegetarian portions. What side dishes would you recommend to complement the meal?",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "Great combo! I'd suggest roasted potatoes and a seasonal grilled vegetable medley — both pair well with either main. Your total would be $360 plus a $40 delivery fee. Shall I confirm the order?",
            textZh: "很好的搭配！我建议烤土豆和时令烤蔬菜拼盘——两种配菜和任何主菜都搭。总价360美元加40美元配送费。要确认订单吗？",
            keyPhrases: [
              { en: "seasonal grilled vegetable medley", zh: "时令烤蔬菜拼盘" },
              { en: "delivery fee", zh: "配送费" },
            ],
            alternativeExpressions: [
              { textEn: "Nice picks! Roasted potatoes and grilled veggies go great with both. That's $360 plus $40 for delivery — $400 total. Want me to lock it in?", textZh: "选得好！烤土豆和烤蔬菜和两道主菜都搭。360加40配送费，总共400美元。要锁定订单吗？", actionHint: "报总价", frequency: "common" },
            ],
            casualVersion: "Good picks! Roasted potatoes and grilled veggies — $360 plus $40 delivery. Want me to lock it in?",
            formalityVariants: {
              casual: "Nice! Potatoes and grilled veggies. $400 total with delivery. Lock it in?",
              standard: "I'd suggest roasted potatoes and a seasonal grilled vegetable medley. Your total would be $360 plus a $40 delivery fee. Shall I confirm the order?",
              formal: "An excellent combination. I would suggest the roasted potatoes and our seasonal grilled vegetable medley, both of which pair beautifully with either main course. The total comes to three hundred sixty dollars, with an additional forty-dollar delivery fee. Shall I proceed to confirm the order?",
            },
          },
        ],
      },
      {
        id: "intermediate-catering-order",
        titleZh: "进阶团体订餐",
        titleEn: "Intermediate Catering Order",
        description: "处理特殊要求、临时变更和大规模订单",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I placed a catering order yesterday for Friday, but we just found out three more people are joining. Can I add to the existing order?",
            textZh: "我昨天下了周五的团餐订单，但刚得知又多了三个人。能在现有订单上加吗？",
            casualVersion: "Hey, I ordered catering yesterday for Friday but we've got 3 more people now. Can I add on?",
            culturalNote: "团餐订单修改通常需要在送达前24小时进行。提前沟通比临时加量更容易安排。",
            commonMistake: {
              wrong: "Yesterday I ordered catering. Now 3 more people. Can you add food?",
              correct: "I placed a catering order yesterday for Friday, but three more people are joining. Can I add to the existing order?",
              explanation: "'placed an order' 是下单的正式说法；'add to the existing order' 是修改订单的标准表达。",
            },
            formalityVariants: {
              casual: "Hey, need to add 3 more people to my Friday catering order. Cool?",
              standard: "I placed a catering order yesterday for Friday, but three more people are joining. Can I add to the existing order?",
              formal: "I placed a catering order yesterday for this Friday's lunch meeting. We have since learned that three additional attendees will be joining. Would it be possible to amend the existing order?",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "Of course! Since it's more than 24 hours before delivery, we can easily adjust. That brings your total to 23 people. Would you like to keep the same menu, or make any changes?",
            textZh: "当然可以！因为距送达还有24小时以上，我们很容易调整。总人数变为23人。要保持相同菜单还是做修改？",
            keyPhrases: [
              { en: "more than 24 hours before delivery", zh: "距送达还有24小时以上" },
              { en: "adjust", zh: "调整" },
            ],
            alternativeExpressions: [
              { textEn: "No problem — we're still within the modification window. So that's 23 total now. Same menu work, or do you want to tweak anything?", textZh: "没问题——还在可修改时间内。那现在是23人。菜单不变，还是要调整什么？", actionHint: "提到modification window", frequency: "common" },
            ],
            casualVersion: "Sure, no problem — still plenty of time. So 23 people now. Same menu or any changes?",
            formalityVariants: {
              casual: "Easy! Still got time. 23 people now. Same food?",
              standard: "Since it's more than 24 hours before delivery, we can easily adjust. That brings your total to 23. Same menu, or any changes?",
              formal: "Certainly. As we are more than twenty-four hours from the scheduled delivery, we can readily accommodate the adjustment. This brings the total to twenty-three guests. Would you prefer to maintain the current menu, or would you like to make any modifications?",
            },
          },
          {
            speaker: "you",
            textEn: "Same menu is fine. Oh, but one of the new people has a severe nut allergy. Can you make sure none of the dishes contain nuts or were prepared with nut oils?",
            textZh: "菜单不变。但新来的人中有一位严重坚果过敏。能确保所有菜品不含坚果或坚果油吗？",
            casualVersion: "Same menu works. But one of the new people has a bad nut allergy. Can you make sure nothing has nuts?",
            culturalNote: "nut allergy（坚果过敏）在美国非常受重视，严重的可能致命（anaphylaxis）。餐厅有法律责任确保过敏原信息准确。",
            commonMistake: {
              wrong: "Same menu. But one person cannot eat nuts. Make sure no nuts.",
              correct: "One of the new people has a severe nut allergy. Can you make sure none of the dishes contain nuts or were prepared with nut oils?",
              explanation: "'severe nut allergy' 强调严重性；提到 'nut oils' 和 'prepared with' 展现了对交叉污染的了解。",
            },
            formalityVariants: {
              casual: "Same food. Oh, one person's got a serious nut allergy though. Nothing with nuts, right?",
              standard: "Same menu. But one of the new people has a severe nut allergy. Can you make sure none of the dishes contain nuts or were prepared with nut oils?",
              formal: "The existing menu will suffice. However, I must inform you that one of the additional guests has a severe nut allergy. Would you be able to guarantee that none of the dishes contain nuts or have been prepared using nut-based oils?",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "We take allergies very seriously. I'll flag the entire order as nut-free. The grilled chicken and eggplant parmesan are both naturally nut-free, and we'll use olive oil only. I'll include a separate allergen card with the delivery.",
            textZh: "我们非常重视过敏问题。我会把整个订单标记为无坚果。烤鸡和茄子帕尔马干酪本身不含坚果，我们只使用橄榄油。送达时会附一份单独的过敏原说明卡。",
            keyPhrases: [
              { en: "flag the entire order as nut-free", zh: "标记为无坚果" },
              { en: "allergen card", zh: "过敏原说明卡" },
            ],
            alternativeExpressions: [
              { textEn: "Absolutely — allergies are top priority. I'll mark it all nut-free and include an allergen info sheet with the delivery.", textZh: "当然——过敏是第一优先。我会全部标记为无坚果，送达时附上过敏原信息表。", actionHint: "强调重视", frequency: "common" },
            ],
            casualVersion: "We got you — allergies are serious. I'll mark everything nut-free and throw in an allergen card with the food.",
            formalityVariants: {
              casual: "Don't worry — we take allergies super seriously. I'll make sure everything's nut-free.",
              standard: "We take allergies very seriously. I'll flag the entire order as nut-free. I'll include a separate allergen card with the delivery.",
              formal: "We treat all allergy concerns with the utmost seriousness. I will flag the entire order as nut-free and ensure all preparation utilizes olive oil exclusively. A comprehensive allergen information card will accompany the delivery.",
            },
          },
          {
            speaker: "you",
            textEn: "That's reassuring, thank you. What's the updated total with the three extra people?",
            textZh: "这让我放心了，谢谢。加了三个人后的新总价是多少？",
            casualVersion: "Good to know. What's the new total with 3 more people?",
            culturalNote: "确认费用变化是专业做法。有些团餐每增加一人按人头加价，有些可能超过起订量后有折扣。",
            commonMistake: {
              wrong: "Thank you. How much money now with 3 more people?",
              correct: "What's the updated total with the three extra people?",
              explanation: "'updated total' 比 'how much money now' 更专业。",
            },
            formalityVariants: {
              casual: "Thanks. What's the damage with 3 more?",
              standard: "What's the updated total with the three extra people?",
              formal: "That is most reassuring, thank you. Could you kindly provide the revised total, accounting for the three additional guests?",
            },
          },
          {
            speaker: "them",
            role: "外卖经理",
            textEn: "Your updated total is $414 for food, plus the same $40 delivery fee — $454 total. Since you're over 20 people, I've applied a 10% group discount automatically. Would you like an updated invoice emailed to you?",
            textZh: "更新后的餐费414美元，加上相同的40美元配送费——总共454美元。因为超过20人，我已经自动应用了10%的团体折扣。要把更新后的发票发到您邮箱吗？",
            keyPhrases: [
              { en: "group discount", zh: "团体折扣" },
              { en: "updated invoice", zh: "更新后的发票" },
            ],
            alternativeExpressions: [
              { textEn: "Food's $414, delivery's still $40 — $454 all in. You qualified for our 10% group rate since you're over 20. Want me to send an updated invoice?", textZh: "餐费414，配送还是40——总共454。超过20人自动享受10%团体折扣。要我发更新后的发票吗？", actionHint: "报价并提到折扣", frequency: "common" },
            ],
            casualVersion: "$414 for food, $40 delivery, $454 total. You get 10% off since it's over 20 people. Want the invoice emailed?",
            formalityVariants: {
              casual: "$454 total, and I threw in a 10% group discount. Want the invoice emailed?",
              standard: "Your updated total is $414 for food, plus $40 delivery — $454 total. Since you're over 20 people, I've applied a 10% group discount. Would you like an updated invoice emailed to you?",
              formal: "The revised total for food is four hundred fourteen dollars, with the forty-dollar delivery fee remaining unchanged, bringing the grand total to four hundred fifty-four dollars. As your party exceeds twenty guests, a ten percent group discount has been applied automatically. Shall I forward an updated invoice to your email?",
            },
          },
        ],
      },
    ],
  },

  // ==================== Chipotle 流水线点餐 ====================
  {
    id: "restaurant-chipotle-order",
    tags: ["chipotle", "bowl", "burrito", "tacos", "墨西哥快餐"],
    category: "restaurant",
    titleZh: "Chipotle 流水线点餐",
    titleEn: "Chipotle Assembly Line Order",
    description: "在 Chipotle 沿着流水线点餐，选择主食、米饭、豆子、蛋白质、莎莎酱和配料",
    otherRole: "Chipotle 店员",
    otherRoleIcon: "🌯",
    flows: [
      {
        id: "basic-chipotle",
        titleZh: "基础流水线点餐",
        titleEn: "Basic Assembly Line",
        description: "沿着流水线完成一份标准 Bowl 点单",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "Welcome to Chipotle! Bowl, burrito, tacos, or salad?",
            textZh: "欢迎来到 Chipotle！要 Bowl、卷饼、Tacos 还是沙拉？",
            keyPhrases: [
              { en: "bowl", zh: "碗装" },
              { en: "burrito", zh: "卷饼" },
            ],
            alternativeExpressions: [
              { textEn: "Hey! What are we making for you — bowl, burrito, tacos, or salad?", textZh: "嗨！给你做什么——碗装、卷饼、Tacos 还是沙拉？", actionHint: "更随意的开场", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have a bowl, please.",
            textZh: "我要一个 Bowl。",
            casualVersion: "Bowl, please.",
            culturalNote: "Chipotle 的 Bowl 没有饼皮，用碗装所有食材，是最受欢迎的选择。",
          },
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "White rice or brown rice?",
            textZh: "白米饭还是糙米饭？",
            keyPhrases: [
              { en: "white rice", zh: "白米饭" },
              { en: "brown rice", zh: "糙米饭" },
            ],
            alternativeExpressions: [
              { textEn: "What rice? White or brown?", textZh: "要什么米饭？白的还是糙的？", actionHint: "简短问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "White rice. And black beans.",
            textZh: "白米饭。加黑豆。",
          },
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "What protein? Chicken, steak, barbacoa, carnitas, or sofritas?",
            textZh: "要什么蛋白质？鸡肉、牛排、烤牛肉、慢炖猪肉还是素食豆腐？",
            keyPhrases: [
              { en: "protein", zh: "蛋白质/荤菜" },
              { en: "sofritas", zh: "素食豆腐" },
            ],
            alternativeExpressions: [
              { textEn: "And for your protein?", textZh: "蛋白质选什么？", actionHint: "简洁问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Chicken, please. And can I get the mild salsa and some sour cream?",
            textZh: "鸡肉。再加微辣莎莎酱和一些酸奶油。",
            culturalNote: "Chipotle 的莎莎酱分 mild(微辣)、medium(中辣)、hot(辣)三级。Mild 是番茄为主，几乎不辣。",
          },
        ],
      },
      {
        id: "intermediate-chipotle",
        titleZh: "定制加料",
        titleEn: "Customize with Extras",
        description: "加 guacamole、双份蛋白等定制需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "What can I get for you today?",
            textZh: "今天吃什么？",
            alternativeExpressions: [
              { textEn: "Hey, what are we making?", textZh: "嗨，做什么？", actionHint: "快节奏口语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get a burrito with brown rice and pinto beans?",
            textZh: "我要一个卷饼，糙米饭加斑豆。",
            casualVersion: "Burrito, brown rice, pinto beans.",
          },
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "What protein? And do you want double meat? It's a couple bucks extra.",
            textZh: "要什么肉？要双份吗？多加几块钱。",
            keyPhrases: [
              { en: "double meat", zh: "双份肉" },
              { en: "a couple bucks extra", zh: "多几块钱" },
            ],
            alternativeExpressions: [
              { textEn: "Protein? You can do double for a little extra.", textZh: "蛋白质？可以加双份，稍微多点钱。", actionHint: "推荐加量", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Steak, just a single. And I'd like the hot salsa and corn salsa.",
            textZh: "牛排，单份就好。加辣莎莎酱和玉米莎莎酱。",
          },
          {
            speaker: "them",
            role: "Chipotle 店员",
            textEn: "Guac is extra — that okay?",
            textZh: "牛油果酱要另外加钱——可以吗？",
            keyPhrases: [{ en: "guac is extra", zh: "牛油果酱要加钱" }],
            alternativeExpressions: [
              { textEn: "Just so you know, guacamole is an additional charge. Still want it?", textZh: "提醒一下，牛油果酱需要额外收费。还要吗？", actionHint: "正式说法", frequency: "occasional" },
            ],
            culturalNote: "'Guac is extra' 是 Chipotle 的标志性台词，甚至成了网络梗。牛油果酱大约加 $2-3。",
          },
          {
            speaker: "you",
            textEn: "Yeah, guac is fine. And cheese and lettuce to finish it off.",
            textZh: "好的，加牛油果酱。再加芝士和生菜就完了。",
            casualVersion: "Yeah, throw on guac, cheese, and lettuce.",
          },
        ],
      },
    ],
  },

  // ==================== 泰餐馆 Thai Restaurant ====================
  {
    id: "restaurant-thai-restaurant",
    tags: ["thai", "泰餐", "pad thai", "curry", "泰式奶茶"],
    category: "restaurant",
    titleZh: "泰餐馆点餐",
    titleEn: "Thai Restaurant Order",
    description: "在泰餐馆点菜，选择菜品、辣度和饮品",
    otherRole: "泰餐服务员",
    otherRoleIcon: "🍜",
    flows: [
      {
        id: "basic-thai",
        titleZh: "基础泰餐点单",
        titleEn: "Basic Thai Order",
        description: "点一份经典泰菜和饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Welcome! Have you been here before, or would you like some recommendations?",
            textZh: "欢迎！您来过吗，还是需要推荐？",
            alternativeExpressions: [
              { textEn: "Hi there! First time? I can help you pick something.", textZh: "嗨！第一次来？我可以帮你选。", actionHint: "热情推荐", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "It's our first time. What do you recommend?",
            textZh: "第一次来。你们推荐什么？",
          },
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Our pad thai is the most popular. We also have great curries — red, green, or yellow. Green is the spiciest.",
            textZh: "我们的泰式炒河粉最受欢迎。还有很棒的咖喱——红、绿、黄三种。绿咖喱最辣。",
            keyPhrases: [
              { en: "pad thai", zh: "泰式炒河粉" },
              { en: "red, green, or yellow", zh: "红、绿、黄" },
            ],
            alternativeExpressions: [
              { textEn: "You can't go wrong with the pad thai. And if you like curry, our green curry is amazing — just a heads up, it's pretty spicy.", textZh: "点泰式炒河粉准没错。如果喜欢咖喱，我们的绿咖喱很棒——提醒一下，挺辣的。", actionHint: "附带辣度提醒", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll try the pad thai. How spicy is it?",
            textZh: "我试试泰式炒河粉。有多辣？",
            culturalNote: "泰餐的辣度通常分 1-5 级。美国泰餐馆的 '3' 对大多数人已经很辣了。",
          },
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Pad thai is mild by default. But you can choose your spice level from 1 to 5. What level would you like?",
            textZh: "泰式炒河粉默认是不辣的。但你可以选择 1 到 5 的辣度。要几级？",
            keyPhrases: [{ en: "spice level", zh: "辣度" }],
          },
          {
            speaker: "you",
            textEn: "Level 2, please. And can I get a Thai iced tea?",
            textZh: "2 级吧。再来一杯泰式冰奶茶。",
            culturalNote: "Thai iced tea 是泰餐馆标配饮品，橙红色，用炼乳调制，很甜很浓。",
          },
        ],
      },
      {
        id: "intermediate-thai",
        titleZh: "深度点餐",
        titleEn: "Detailed Thai Order",
        description: "点多道菜、询问食材和调整需求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We'd like to share a few dishes. Can we get the green curry with chicken and the basil fried rice?",
            textZh: "我们想点几道一起分着吃。来一份鸡肉绿咖喱和罗勒炒饭。",
            casualVersion: "We're gonna share. Green curry with chicken and the basil fried rice.",
          },
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Great choices! What spice level for the green curry? And the fried rice comes medium spice — want me to adjust that?",
            textZh: "好选择！绿咖喱要几级辣？炒饭默认中辣——要调整吗？",
            keyPhrases: [{ en: "comes medium spice", zh: "默认中辣" }],
            alternativeExpressions: [
              { textEn: "Love it! How hot do you want the curry? The fried rice is medium by default, but I can change it.", textZh: "很好！咖喱要多辣？炒饭默认中辣，可以改。", actionHint: "口语化表达", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Make the curry a 3, and the fried rice mild, please.",
            textZh: "咖喱 3 级辣，炒饭要不辣的。",
          },
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Got it. Any allergies I should know about? We use peanuts in a lot of our dishes.",
            textZh: "好的。有什么过敏的吗？我们很多菜用花生。",
            keyPhrases: [{ en: "any allergies", zh: "有过敏的吗" }],
            culturalNote: "泰菜大量使用花生、虾酱和鱼露。如有过敏务必提前告知。",
          },
          {
            speaker: "you",
            textEn: "No peanut allergy, but can you make the fried rice without shrimp? My friend is allergic to shellfish.",
            textZh: "不过敏花生，但炒饭能不加虾吗？我朋友对贝壳类过敏。",
          },
          {
            speaker: "them",
            role: "泰餐服务员",
            textEn: "Absolutely, no shrimp. I'll also make sure we skip the fish sauce on that dish. Would you like any appetizers? Our mango sticky rice is great for dessert too.",
            textZh: "没问题，不加虾。那道菜也不放鱼露。要点开胃菜吗？我们的芒果糯米饭做甜品也很棒。",
            keyPhrases: [
              { en: "fish sauce", zh: "鱼露" },
              { en: "mango sticky rice", zh: "芒果糯米饭" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 印度餐馆 Indian Restaurant ====================
  {
    id: "restaurant-indian-restaurant",
    tags: ["indian", "印度餐", "curry", "naan", "tikka masala", "lassi"],
    category: "restaurant",
    titleZh: "印度餐馆点餐",
    titleEn: "Indian Restaurant Order",
    description: "在印度餐馆点咖喱、烤饼和饮品，选择辣度",
    otherRole: "印度餐服务员",
    otherRoleIcon: "🍛",
    flows: [
      {
        id: "basic-indian",
        titleZh: "基础印度餐点单",
        titleEn: "Basic Indian Order",
        description: "点一份经典印度咖喱套餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "Good evening! Would you like to start with some naan bread or papadum while you look at the menu?",
            textZh: "晚上好！看菜单的时候要先来点烤饼或印度薄脆饼吗？",
            keyPhrases: [
              { en: "naan bread", zh: "烤饼" },
              { en: "papadum", zh: "印度薄脆饼" },
            ],
            alternativeExpressions: [
              { textEn: "Welcome! Can I get you started with some naan or an appetizer?", textZh: "欢迎！先来点烤饼或开胃菜？", actionHint: "简化问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, we'll take an order of garlic naan to start.",
            textZh: "好的，先来一份蒜味烤饼。",
            culturalNote: "Naan 是印度餐的灵魂。除了 garlic naan，还有 plain、butter、cheese 等口味。用手撕着蘸咖喱吃。",
          },
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "Great! And for your main course? Our chicken tikka masala is the house favorite.",
            textZh: "好的！主菜呢？我们的鸡肉 tikka masala 是招牌菜。",
            keyPhrases: [{ en: "chicken tikka masala", zh: "鸡肉提卡马萨拉" }],
            alternativeExpressions: [
              { textEn: "Perfect. Ready to order mains? The tikka masala is what most people love.", textZh: "好的。准备点主菜了吗？提卡马萨拉是最受欢迎的。", actionHint: "推荐语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have the chicken tikka masala. How spicy is it?",
            textZh: "我要鸡肉提卡马萨拉。有多辣？",
          },
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "It's creamy and fairly mild. You can choose mild, medium, or hot. I'd suggest medium — it has good flavor without too much heat.",
            textZh: "它是奶油口味，比较温和。可以选微辣、中辣或辣。我建议中辣——味道好又不会太辣。",
            keyPhrases: [
              { en: "mild, medium, or hot", zh: "微辣、中辣、辣" },
            ],
          },
          {
            speaker: "you",
            textEn: "Medium sounds good. And I'd like a mango lassi to drink.",
            textZh: "中辣好了。再来一杯芒果拉西。",
            culturalNote: "Mango lassi 是印度酸奶饮品，芒果味，浓稠香甜。搭配辣咖喱是绝配，能解辣。",
          },
        ],
      },
      {
        id: "intermediate-indian",
        titleZh: "搭配与定制",
        titleEn: "Pairing and Customization",
        description: "搭配米饭/烤饼、询问素食选项、调整辣度",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What's the difference between tikka masala and vindaloo?",
            textZh: "提卡马萨拉和温达卢有什么区别？",
          },
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "Tikka masala is creamy and tomato-based — it's our mildest curry. Vindaloo is a lot spicier, with a tangy, vinegar kick. It's for serious spice lovers.",
            textZh: "提卡马萨拉是奶油番茄底——是我们最温和的咖喱。温达卢辣很多，有酸酸的醋味。适合真正能吃辣的人。",
            keyPhrases: [
              { en: "vindaloo", zh: "温达卢咖喱" },
              { en: "tangy", zh: "酸味的" },
            ],
            alternativeExpressions: [
              { textEn: "Tikka masala is rich and creamy. Vindaloo? That one will make you sweat — it's got real heat and a vinegar tang.", textZh: "提卡马萨拉浓郁奶香。温达卢？那个会让你冒汗——真的辣，还有醋的酸味。", actionHint: "生动描述", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll go with the lamb vindaloo, but can you make it medium instead of hot?",
            textZh: "我要羊肉温达卢，但能做成中辣而不是辣的吗？",
          },
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "Of course. Would you like that with basmati rice or do you prefer naan to go with it?",
            textZh: "当然可以。配印度香米还是烤饼？",
            keyPhrases: [{ en: "basmati rice", zh: "印度香米" }],
          },
          {
            speaker: "you",
            textEn: "Can I get both? Rice and a butter naan?",
            textZh: "能两样都要吗？米饭加一份黄油烤饼。",
            culturalNote: "大多数印度餐馆，米饭和烤饼是分开点的。可以都要，用烤饼蘸咖喱，米饭拌着吃。",
          },
          {
            speaker: "them",
            role: "印度餐服务员",
            textEn: "Absolutely! And just so you know, our biryani is also wonderful if you ever want rice and protein together in one dish.",
            textZh: "当然！顺便说一下，如果你想要一道饭和肉在一起的菜，我们的 biryani 也很棒。",
            keyPhrases: [{ en: "biryani", zh: "印度香饭" }],
            culturalNote: "Biryani 是印度焖饭，米饭和肉层层叠放焖制，香料味浓郁，是完整的一道主菜。",
          },
        ],
      },
    ],
  },

  // ==================== 墨西哥 Taco 店 Mexican Taco ====================
  {
    id: "restaurant-mexican-taco",
    tags: ["taco", "墨西哥", "taco truck", "al pastor", "carnitas", "tortilla"],
    category: "restaurant",
    titleZh: "墨西哥 Taco 店点餐",
    titleEn: "Mexican Taco Shop Order",
    description: "在 taco 店或 taco truck 点餐，选择肉类、饼皮和配料",
    otherRole: "Taco 店员",
    otherRoleIcon: "🌮",
    flows: [
      {
        id: "basic-taco",
        titleZh: "基础 Taco 点单",
        titleEn: "Basic Taco Order",
        description: "在 taco truck 点几个 taco",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "Hey! What can I get for you?",
            textZh: "嗨！要点什么？",
            alternativeExpressions: [
              { textEn: "What'll it be?", textZh: "吃什么？", actionHint: "Taco truck 的快节奏口语", frequency: "common" },
              { textEn: "What are you having?", textZh: "吃点什么？", actionHint: "简短日常", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Can I get three tacos? Two al pastor and one carnitas.",
            textZh: "来三个 taco。两个 al pastor，一个 carnitas。",
            culturalNote: "Al pastor 是墨西哥经典烤猪肉（灵感来自中东烤肉），用菠萝腌制；carnitas 是慢炖酥脆猪肉。",
          },
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "Corn or flour tortillas?",
            textZh: "玉米饼还是面粉饼？",
            keyPhrases: [
              { en: "corn", zh: "玉米" },
              { en: "flour tortillas", zh: "面粉饼" },
            ],
            alternativeExpressions: [
              { textEn: "You want those on corn or flour?", textZh: "要玉米的还是面粉的？", actionHint: "口语化", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Corn, please.",
            textZh: "玉米饼。",
            culturalNote: "正宗墨西哥 taco 用 corn tortilla，通常是双层小饼。Flour tortilla 更大更软，常用于 burrito。",
          },
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "Cilantro and onions on all of them?",
            textZh: "都要加香菜和洋葱吗？",
            keyPhrases: [
              { en: "cilantro", zh: "香菜" },
              { en: "onions", zh: "洋葱" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, cilantro and onions on all three. And some lime on the side.",
            textZh: "对，三个都加香菜和洋葱。再来点青柠。",
            culturalNote: "墨西哥 taco 标配是 cilantro + onions + lime。吃之前挤青柠汁是地道吃法。",
          },
        ],
      },
      {
        id: "intermediate-taco",
        titleZh: "深度定制",
        titleEn: "Detailed Taco Order",
        description: "问肉的种类、加配料、点配菜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "What's the difference between al pastor and barbacoa?",
            textZh: "Al pastor 和 barbacoa 有什么区别？",
          },
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "Al pastor is marinated pork, grilled on a spit with pineapple. Barbacoa is slow-cooked beef — super tender and juicy.",
            textZh: "Al pastor 是腌制猪肉，在烤架上配菠萝烤的。Barbacoa 是慢炖牛肉——特别嫩多汁。",
            keyPhrases: [
              { en: "barbacoa", zh: "慢炖牛肉" },
              { en: "slow-cooked", zh: "慢炖" },
            ],
            alternativeExpressions: [
              { textEn: "Al pastor's pork with pineapple, barbacoa's shredded beef. Both fire.", textZh: "Al pastor 是猪肉配菠萝，barbacoa 是手撕牛肉。都好吃。", actionHint: "非常口语化", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Nice, I'll try two barbacoa tacos. Can I also get a side of rice and beans?",
            textZh: "好，来两个 barbacoa taco。再加一份米饭和豆子。",
          },
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "You got it. Want any salsa? We've got verde, roja, and habanero.",
            textZh: "没问题。要莎莎酱吗？有绿莎莎、红莎莎和哈瓦那辣椒酱。",
            keyPhrases: [
              { en: "verde", zh: "绿色/青酱" },
              { en: "roja", zh: "红酱" },
              { en: "habanero", zh: "哈瓦那辣椒" },
            ],
          },
          {
            speaker: "you",
            textEn: "Verde, please. And is the habanero really hot?",
            textZh: "要绿莎莎。哈瓦那辣椒酱真的很辣吗？",
          },
          {
            speaker: "them",
            role: "Taco 店员",
            textEn: "Yeah, the habanero is no joke. I'd stick with verde if you don't do super spicy. I'll throw in some extra lime and radish on the side too.",
            textZh: "对，哈瓦那辣椒酱不是闹着玩的。不太能吃辣的话建议选绿莎莎。我再给你加点青柠和萝卜片。",
            keyPhrases: [{ en: "no joke", zh: "不是闹着玩的/确实很辣" }],
            culturalNote: "正宗 taco 店常提供免费配菜：radish(水萝卜)、lime(青柠)、pickled onions(腌洋葱)。",
          },
        ],
      },
    ],
  },

  // ==================== 海鲜餐厅 Seafood Restaurant ====================
  {
    id: "restaurant-seafood-restaurant",
    tags: ["seafood", "海鲜", "lobster", "catch of the day", "grilled fish"],
    category: "restaurant",
    titleZh: "海鲜餐厅点餐",
    titleEn: "Seafood Restaurant Order",
    description: "在海鲜餐厅点菜，了解时价、当日渔获和烹饪方式",
    otherRole: "海鲜餐厅服务员",
    otherRoleIcon: "🦞",
    flows: [
      {
        id: "basic-seafood",
        titleZh: "基础海鲜点单",
        titleEn: "Basic Seafood Order",
        description: "询问当日渔获并点一道海鲜",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "Welcome! Just so you know, today's catch of the day is fresh halibut, and our lobster is market price at $38 per pound.",
            textZh: "欢迎！今天的当日渔获是新鲜比目鱼，龙虾是时价每磅 38 美元。",
            keyPhrases: [
              { en: "catch of the day", zh: "当日渔获" },
              { en: "market price", zh: "时价" },
            ],
            alternativeExpressions: [
              { textEn: "Hey, welcome in! Our fresh catch today is halibut. And lobster's going for $38 a pound tonight.", textZh: "嗨，欢迎！今天的鲜鱼是比目鱼。龙虾今晚每磅 38 美元。", actionHint: "轻松口吻", frequency: "common" },
            ],
            culturalNote: "'Market price' 或 'MP' 表示价格随行就市，点之前一定要问清楚当天价格。",
          },
          {
            speaker: "you",
            textEn: "The halibut sounds great. How is it prepared?",
            textZh: "比目鱼听起来不错。怎么做的？",
          },
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "You can have it grilled, pan-seared, or blackened. Grilled is our most popular. It comes with roasted vegetables and your choice of a side.",
            textZh: "可以选烤的、煎的或焦香调味的。烤的最受欢迎。配烤蔬菜和一道自选配菜。",
            keyPhrases: [
              { en: "grilled", zh: "烤的" },
              { en: "pan-seared", zh: "煎的" },
              { en: "blackened", zh: "焦香调味的" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll have it grilled. Can I get mashed potatoes as my side?",
            textZh: "烤的吧。配菜要土豆泥可以吗？",
          },
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "Absolutely. Would you like drawn butter or lemon butter sauce on the fish?",
            textZh: "当然。鱼要配融化黄油还是柠檬黄油汁？",
            keyPhrases: [
              { en: "drawn butter", zh: "融化黄油" },
              { en: "lemon butter sauce", zh: "柠檬黄油汁" },
            ],
            culturalNote: "Drawn butter 是融化过滤的纯黄油，是海鲜的经典搭配。和中餐的蘸酱功能类似。",
          },
          {
            speaker: "you",
            textEn: "Lemon butter, please. That sounds delicious.",
            textZh: "柠檬黄油汁。听起来很好吃。",
          },
        ],
      },
      {
        id: "intermediate-seafood",
        titleZh: "深入点餐",
        titleEn: "Detailed Seafood Order",
        description: "点龙虾、问烹饪细节、搭配葡萄酒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're celebrating tonight. How big are the lobster tails?",
            textZh: "今晚我们在庆祝。龙虾尾有多大？",
          },
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "Our tails are about 8 ounces each. You can also do the whole lobster — that's about a pound and a half. Steamed or broiled, your choice.",
            textZh: "我们的龙虾尾大约每只 8 盎司。也可以点整只龙虾——大约一磅半。清蒸或烤的，你选。",
            keyPhrases: [
              { en: "steamed", zh: "清蒸" },
              { en: "broiled", zh: "烤的" },
              { en: "pound and a half", zh: "一磅半" },
            ],
            alternativeExpressions: [
              { textEn: "Tails are 8 oz each. If you wanna go all out, get the whole lobster — pound and a half, steamed or broiled.", textZh: "龙虾尾 8 盎司一只。想豪华一点就点整只——一磅半，蒸或烤。", actionHint: "推荐升级", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll take two whole lobsters, steamed. What wine would you pair with that?",
            textZh: "来两只整龙虾，清蒸。配什么葡萄酒好？",
          },
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "For lobster, I'd recommend a Chardonnay or a crisp Sauvignon Blanc. We have a great California Chardonnay by the bottle.",
            textZh: "配龙虾的话，推荐霞多丽或清爽的长相思。我们有一款很好的加州霞多丽瓶装酒。",
            keyPhrases: [
              { en: "Chardonnay", zh: "霞多丽" },
              { en: "Sauvignon Blanc", zh: "长相思" },
            ],
          },
          {
            speaker: "you",
            textEn: "We'll go with the Chardonnay. And can we get a dozen raw oysters to start?",
            textZh: "就来霞多丽吧。再来一打生蚝做开胃菜？",
            culturalNote: "A dozen = 12 个。生蚝通常配柠檬、cocktail sauce 和 horseradish，是高档海鲜餐厅经典开胃菜。",
          },
          {
            speaker: "them",
            role: "海鲜餐厅服务员",
            textEn: "Wonderful choice! The oysters come with mignonette sauce, cocktail sauce, and fresh lemon. I'll get those started right away.",
            textZh: "很好的选择！生蚝配红葱醋汁、海鲜鸡尾酒酱和鲜柠檬。我马上下单。",
            keyPhrases: [
              { en: "mignonette sauce", zh: "红葱醋汁" },
              { en: "cocktail sauce", zh: "海鲜鸡尾酒酱" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 面包房/甜品店 Bakery Cafe ====================
  {
    id: "restaurant-bakery-cafe",
    tags: ["bakery", "面包房", "pastry", "croissant", "muffin", "cake", "gluten-free"],
    category: "restaurant",
    titleZh: "面包房/甜品店",
    titleEn: "Bakery & Pastry Shop",
    description: "在面包房挑选糕点、定制蛋糕、询问饮食选项",
    otherRole: "面包师",
    otherRoleIcon: "🥐",
    flows: [
      {
        id: "basic-bakery",
        titleZh: "基础面包房购物",
        titleEn: "Basic Bakery Visit",
        description: "挑选糕点和面包",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "面包师",
            textEn: "Good morning! Everything in the case is baked fresh today. Can I help you pick something?",
            textZh: "早上好！柜台里的都是今天新鲜烤的。需要帮你挑点什么吗？",
            alternativeExpressions: [
              { textEn: "Morning! Everything's fresh out of the oven. What catches your eye?", textZh: "早！都是刚出炉的。看上什么了？", actionHint: "轻松热情", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Those croissants look amazing. Are they butter croissants?",
            textZh: "那些可颂看起来好棒。是黄油可颂吗？",
            culturalNote: "好的面包房用纯黄油(butter)做可颂。如果用 margarine(人造黄油)就差很远。",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "Yes! All butter, laminated by hand. We also have chocolate and almond croissants if you're interested.",
            textZh: "是的！全黄油的，手工叠层。如果感兴趣，还有巧克力和杏仁可颂。",
            keyPhrases: [
              { en: "all butter", zh: "全黄油" },
              { en: "almond croissants", zh: "杏仁可颂" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take one butter croissant and one blueberry muffin, please.",
            textZh: "我要一个黄油可颂和一个蓝莓松饼。",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "Great! Anything else? We have fresh scones and banana bread too.",
            textZh: "好的！还要别的吗？我们还有新鲜司康和香蕉面包。",
            keyPhrases: [
              { en: "scones", zh: "司康饼" },
              { en: "banana bread", zh: "香蕉面包" },
            ],
          },
          {
            speaker: "you",
            textEn: "That's all for today. Can I also get a latte to go?",
            textZh: "今天就这些。再来一杯拿铁外带？",
            culturalNote: "很多面包房也提供咖啡。'To go' 是外带，'for here' 是堂食。",
          },
        ],
      },
      {
        id: "intermediate-bakery",
        titleZh: "定制蛋糕与饮食需求",
        titleEn: "Custom Cake & Dietary Needs",
        description: "定制生日蛋糕、询问无麸质选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hi, I'd like to order a custom cake for a birthday party. Do you do custom orders?",
            textZh: "你好，我想订一个定制生日蛋糕。你们接定制吗？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "We do! When do you need it, and how many people is it for?",
            textZh: "接的！什么时候要，多少人吃？",
            alternativeExpressions: [
              { textEn: "Absolutely! What's the date, and how big do you need it?", textZh: "当然！什么日期，要多大的？", actionHint: "直接问尺寸", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Next Saturday, for about 15 people. Do you have any gluten-free options?",
            textZh: "下周六，大概 15 个人。有无麸质的选项吗？",
            culturalNote: "Gluten-free(无麸质)在美国是常见的饮食需求。好的面包房通常有 GF 选项，但可能加价。",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "We have a gluten-free chocolate cake that's really popular. For 15 people, I'd recommend a 10-inch round. It's $65.",
            textZh: "我们有一款很受欢迎的无麸质巧克力蛋糕。15 人的话建议 10 英寸圆形的，65 美元。",
            keyPhrases: [
              { en: "gluten-free", zh: "无麸质" },
              { en: "10-inch round", zh: "10英寸圆形" },
            ],
          },
          {
            speaker: "you",
            textEn: "Perfect. Can you write 'Happy Birthday Amy' on it? And do you have any dairy-free frosting?",
            textZh: "太好了。能写 'Happy Birthday Amy' 吗？有无乳制品的糖霜吗？",
          },
          {
            speaker: "them",
            role: "面包师",
            textEn: "Of course! We can do a coconut cream frosting — it's dairy-free and tastes wonderful. I'll have it ready for pickup Saturday morning.",
            textZh: "当然！我们可以用椰子奶油糖霜——无乳制品，味道也很好。周六上午来取就行。",
            keyPhrases: [
              { en: "dairy-free", zh: "无乳制品" },
              { en: "pickup", zh: "自取" },
            ],
          },
        ],
      },
    ],
  },

  // ==================== 果汁/奶昔吧 Juice & Smoothie Bar ====================
  {
    id: "restaurant-juice-smoothie",
    tags: ["juice", "smoothie", "acai", "果汁", "奶昔", "protein"],
    category: "restaurant",
    titleZh: "果汁/奶昔吧",
    titleEn: "Juice & Smoothie Bar",
    description: "在果汁吧点奶昔，选择底料、加料和尺寸",
    otherRole: "果汁吧店员",
    otherRoleIcon: "🥤",
    flows: [
      {
        id: "basic-smoothie",
        titleZh: "基础奶昔点单",
        titleEn: "Basic Smoothie Order",
        description: "点一杯标准奶昔",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "Hey! Welcome in. Are you looking for a smoothie, a fresh juice, or an acai bowl?",
            textZh: "嗨！欢迎。你想要奶昔、鲜榨果汁还是 acai 碗？",
            keyPhrases: [
              { en: "smoothie", zh: "奶昔" },
              { en: "acai bowl", zh: "巴西莓碗" },
            ],
            alternativeExpressions: [
              { textEn: "What's up! Smoothie, juice, or bowl today?", textZh: "嗨！今天要奶昔、果汁还是碗？", actionHint: "快节奏口语", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll do a smoothie. What's your most popular one?",
            textZh: "来杯奶昔。哪款最受欢迎？",
          },
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "Our Tropical Green is the bestseller — it's banana, mango, spinach, and coconut water. Super refreshing.",
            textZh: "热带绿色最畅销——香蕉、芒果、菠菜加椰子水。超级清爽。",
            keyPhrases: [
              { en: "coconut water", zh: "椰子水" },
              { en: "refreshing", zh: "清爽" },
            ],
          },
          {
            speaker: "you",
            textEn: "That sounds good. What sizes do you have?",
            textZh: "听起来不错。有什么尺寸？",
          },
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "We have 16 ounce and 24 ounce. The 16 is $7, and the 24 is $9.",
            textZh: "有 16 盎司和 24 盎司的。16 盎司 7 美元，24 盎司 9 美元。",
            alternativeExpressions: [
              { textEn: "Small is 16 oz for $7, large is 24 oz for $9.", textZh: "小杯 16 盎司 7 美元，大杯 24 盎司 9 美元。", actionHint: "直接报价", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll take a large. Can you add less sugar?",
            textZh: "大杯。能少加点糖吗？",
            culturalNote: "很多果汁吧可以调整甜度。常用说法：'less sugar'、'no added sugar'、'half sweet'。",
          },
        ],
      },
      {
        id: "intermediate-smoothie",
        titleZh: "自定义配方",
        titleEn: "Custom Smoothie Build",
        description: "自选底料、加料和营养补充",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "I want to build my own smoothie. What bases do you have?",
            textZh: "我想自己搭配。有什么底料？",
          },
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "You can start with acai, banana, or pitaya as your base. Then pick your liquid — almond milk, oat milk, coconut water, or regular milk.",
            textZh: "底料可以选巴西莓、香蕉或火龙果。然后选液体——杏仁奶、燕麦奶、椰子水或普通牛奶。",
            keyPhrases: [
              { en: "base", zh: "底料" },
              { en: "pitaya", zh: "火龙果" },
            ],
            alternativeExpressions: [
              { textEn: "For the base, we've got acai, banana, or pitaya. Then you pick a liquid — almond, oat, coconut water, or regular milk.", textZh: "底料有巴西莓、香蕉、火龙果。液体选杏仁、燕麦、椰子水或牛奶。", actionHint: "列举式", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Banana base with almond milk. What add-ins can I get?",
            textZh: "香蕉底加杏仁奶。能加什么料？",
          },
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "Free add-ins are spinach, kale, or flax seed. Premium add-ins are $1.50 each — protein powder, peanut butter, collagen, or chia seeds.",
            textZh: "免费加料有菠菜、羽衣甘蓝、亚麻籽。付费加料每样 1.5 美元——蛋白粉、花生酱、胶原蛋白或奇亚籽。",
            keyPhrases: [
              { en: "add-ins", zh: "加料" },
              { en: "protein powder", zh: "蛋白粉" },
              { en: "premium", zh: "付费/高级" },
            ],
          },
          {
            speaker: "you",
            textEn: "I'll add spinach and protein powder. And no added sugar, please.",
            textZh: "加菠菜和蛋白粉。不要额外加糖。",
            culturalNote: "美国健身文化流行，很多人点奶昔加 protein powder。'No added sugar' 表示不额外加糖，水果本身的甜味保留。",
          },
          {
            speaker: "them",
            role: "果汁吧店员",
            textEn: "Got it — banana base, almond milk, spinach, protein, no added sugar. That'll be $10.50. Want a straw?",
            textZh: "好的——香蕉底、杏仁奶、菠菜、蛋白粉、不加糖。一共 10.5 美元。要吸管吗？",
            culturalNote: "很多城市已禁用塑料吸管，改用纸吸管或不提供吸管。店员会主动问。",
          },
        ],
      },
    ],
  },

  // ==================== 中餐馆用英语点餐 Chinese Restaurant in English ====================
  {
    id: "restaurant-chinese-in-english",
    tags: ["chinese food", "中餐", "dim sum", "lo mein", "kung pao", "chopsticks"],
    category: "restaurant",
    titleZh: "在中餐馆用英语点餐",
    titleEn: "Ordering at a Chinese Restaurant in English",
    description: "在美国中餐馆用英语点餐，了解菜名英文说法和文化差异",
    otherRole: "中餐馆服务员",
    otherRoleIcon: "🥡",
    flows: [
      {
        id: "basic-chinese",
        titleZh: "基础中餐点单",
        titleEn: "Basic Chinese Restaurant Order",
        description: "用英语点几道经典中餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Welcome! Would you like to see the regular menu or the dim sum menu?",
            textZh: "欢迎！要看普通菜单还是点心菜单？",
            keyPhrases: [{ en: "dim sum menu", zh: "点心菜单" }],
            alternativeExpressions: [
              { textEn: "Hi! Are you here for dim sum or the regular dinner menu?", textZh: "嗨！你们来吃点心还是看晚餐菜单？", actionHint: "区分点心和正餐", frequency: "common" },
            ],
            culturalNote: "美国中餐馆的 dim sum 通常只在早午时段供应。有些用推车上菜(cart service)，有些用菜单勾选。",
          },
          {
            speaker: "you",
            textEn: "The regular menu, please. We'd like to order a few dishes to share.",
            textZh: "普通菜单。我们想点几个菜一起分着吃。",
          },
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Sure! Our kung pao chicken and beef with broccoli are very popular. Would you like to start with those?",
            textZh: "好的！我们的宫保鸡丁和西兰花牛肉很受欢迎。先点这两个吗？",
            keyPhrases: [
              { en: "kung pao chicken", zh: "宫保鸡丁" },
              { en: "beef with broccoli", zh: "西兰花牛肉" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, we'll take the kung pao chicken. And can we get an order of lo mein?",
            textZh: "好，来一份宫保鸡丁。再来一份捞面。",
            culturalNote: "Lo mein 在美国中餐馆是炒软面。注意和 chow mein(炒脆面)的区别——lo mein 是拌的，chow mein 有些地方是炸脆的。",
          },
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Chicken, beef, shrimp, or vegetable lo mein?",
            textZh: "鸡肉、牛肉、虾仁还是蔬菜捞面？",
          },
          {
            speaker: "you",
            textEn: "Shrimp lo mein. And steamed rice for the table, please.",
            textZh: "虾仁捞面。再来一份桌上共享的白米饭。",
            culturalNote: "美国中餐馆的米饭通常不像国内自动配，需要单独点。说 'for the table' 表示大家共享。",
          },
        ],
      },
      {
        id: "intermediate-chinese",
        titleZh: "点心与文化沟通",
        titleEn: "Dim Sum & Cultural Details",
        description: "点点心、要筷子、打包带走",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, could we get some chopsticks? We only have forks.",
            textZh: "请问能给我们筷子吗？我们只有叉子。",
            culturalNote: "很多美国中餐馆默认给刀叉。如果想用筷子需要主动要。说 'chopsticks' 就行。",
          },
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Of course! Here you go. Are you ready to order, or do you need a few more minutes?",
            textZh: "当然！给你。准备好点餐了吗，还是需要几分钟？",
          },
          {
            speaker: "you",
            textEn: "We're ready. Can we get har gow, siu mai, and char siu bao?",
            textZh: "准备好了。来一份虾饺、烧卖和叉烧包？",
            culturalNote: "Har gow(虾饺)、siu mai(烧卖)、char siu bao(叉烧包)是最经典的三种点心，在美国中餐馆也用粤语音译。",
          },
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Great choices! The har gow and siu mai come as three pieces each. Char siu bao comes in two. Steamed or baked bao?",
            textZh: "好选择！虾饺和烧卖各三只。叉烧包两只。要蒸的还是烤的？",
            keyPhrases: [
              { en: "steamed or baked", zh: "蒸的还是烤的" },
            ],
            alternativeExpressions: [
              { textEn: "Nice! Want the bao steamed — the white fluffy ones — or baked with the golden crust?", textZh: "好！叉烧包要蒸的——白白胖胖那种——还是烤的金黄酥皮那种？", actionHint: "形象描述两种包", frequency: "occasional" },
            ],
          },
          {
            speaker: "you",
            textEn: "Steamed, please. We also want to take some food home. Can we get a to-go box later?",
            textZh: "蒸的。我们还想打包带走一些。待会儿能给我们打包盒吗？",
          },
          {
            speaker: "them",
            role: "中餐馆服务员",
            textEn: "Absolutely, just let me know when you're ready. And don't forget your fortune cookies — they'll be with the check!",
            textZh: "当然，准备好了告诉我。别忘了你们的幸运饼干——会跟账单一起上！",
            keyPhrases: [{ en: "fortune cookies", zh: "幸运饼干" }],
            culturalNote: "Fortune cookie(幸运饼干)是美国中餐馆特色，里面有一张纸条写着运势。中国本土其实没有这个东西。",
          },
        ],
      },
    ],
  },
  // ==================== 特定餐厅类型 Specific Restaurant Types ====================
  {
    id: "restaurant-starbucks-order",
    tags: ["starbucks", "星巴克", "coffee", "latte", "tall", "grande", "venti"],
    category: "restaurant",
    titleZh: "星巴克点单",
    titleEn: "Starbucks Order",
    description: "在星巴克用专属杯型名点单，定制牛奶和浓缩选项，拼写名字",
    otherRole: "星巴克咖啡师",
    otherRoleIcon: "☕",
    flows: [
      {
        id: "basic",
        titleZh: "基础星巴克点单",
        titleEn: "Basic Starbucks Order",
        description: "用星巴克杯型名点一杯饮品",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "Welcome to Starbucks! What can I get started for you?",
            textZh: "欢迎来到星巴克！想喝点什么？",
            keyPhrases: [{ en: "get started for you", zh: "想喝点什么" }],
            alternativeExpressions: [
              { textEn: "Hi there! What are we making for you today?", textZh: "嗨！今天给你做点什么？", actionHint: "热情问候", frequency: "common" },
            ],
            casualVersion: "Hey! What can I get ya?",
            formalityVariants: {
              casual: "Hey! What can I get ya?",
              standard: "Welcome to Starbucks! What can I get started for you?",
              formal: "Good morning and welcome to Starbucks. What may I prepare for you today?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a Grande Iced Caramel Latte?",
            textZh: "你好，我要一杯中杯冰焦糖拿铁。",
            culturalNote: "星巴克用自己的杯型名(Tall=小杯, Grande=中杯, Venti=大杯)，不是 small/medium/large。说 'medium' 他们也懂，但用星巴克术语更地道。",
            casualVersion: "Hey, Grande Iced Caramel Latte please.",
            commonMistake: {
              wrong: "Can I get a medium iced caramel latte?",
              correct: "Can I get a Grande Iced Caramel Latte?",
              explanation: "星巴克用 Tall/Grande/Venti，虽然说 medium 也能理解，但用专属杯型名更自然。",
            },
            formalityVariants: {
              casual: "Grande Iced Caramel Latte.",
              standard: "Can I get a Grande Iced Caramel Latte, please?",
              formal: "I'd like a Grande Iced Caramel Latte, please.",
            },
          },
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "Sure! Would you like whole milk, or do you have a milk preference?",
            textZh: "好的！要全脂奶还是有其他偏好？",
            keyPhrases: [{ en: "milk preference", zh: "奶的偏好" }],
            alternativeExpressions: [
              { textEn: "Got it! What kind of milk?", textZh: "好的！什么奶？", actionHint: "简短确认", frequency: "common" },
            ],
            casualVersion: "Cool! What milk?",
            formalityVariants: {
              casual: "What milk do you want?",
              standard: "Would you like whole milk, or do you have a milk preference?",
              formal: "Certainly. Would you prefer our standard whole milk, or do you have a particular milk preference?",
            },
          },
          {
            speaker: "you",
            textEn: "Oat milk, please.",
            textZh: "燕麦奶，谢谢。",
            culturalNote: "星巴克换植物奶(oat/almond/soy/coconut)通常加收 $0.70-$0.80。",
            casualVersion: "Oat milk.",
            commonMistake: {
              wrong: "Give me the plant milk.",
              correct: "Oat milk, please.",
              explanation: "植物奶有好几种，需要指定具体是哪种(oat/almond/soy/coconut)。",
            },
            formalityVariants: {
              casual: "Oat, please.",
              standard: "Oat milk, please.",
              formal: "I'd like oat milk, please.",
            },
          },
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "And can I get a name for the order?",
            textZh: "请问名字写什么？",
            keyPhrases: [{ en: "name for the order", zh: "名字" }],
            alternativeExpressions: [
              { textEn: "What name should I put on the cup?", textZh: "杯子上写什么名字？", actionHint: "直接问法", frequency: "common" },
            ],
            casualVersion: "Name?",
            formalityVariants: {
              casual: "Name?",
              standard: "Can I get a name for the order?",
              formal: "And may I have a name for the order, please?",
            },
          },
          {
            speaker: "you",
            textEn: "It's Wei. W-E-I.",
            textZh: "Wei。W-E-I。",
            culturalNote: "星巴克会把名字写在杯子上叫号。中文名容易被拼错，主动拼出来能避免尴尬。也可以用英文名。",
            casualVersion: "Wei. W-E-I.",
            commonMistake: {
              wrong: "My name is Wei.",
              correct: "It's Wei. W-E-I.",
              explanation: "主动拼出字母更高效，咖啡师不用再问一遍怎么拼。",
            },
            formalityVariants: {
              casual: "Wei. W-E-I.",
              standard: "It's Wei. W-E-I.",
              formal: "It's Wei. That's W-E-I.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "星巴克深度定制",
        titleEn: "Starbucks Customization",
        description: "加 shot、换奶、去奶油等复杂定制",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "Hi! Welcome back. What are we making today?",
            textZh: "嗨！欢迎回来。今天喝什么？",
            keyPhrases: [{ en: "welcome back", zh: "欢迎回来" }],
            alternativeExpressions: [
              { textEn: "Hey! Good to see you again. The usual?", textZh: "嗨！又见到你了。老样子？", actionHint: "熟客招呼", frequency: "occasional" },
            ],
            casualVersion: "Hey! What's it gonna be?",
            formalityVariants: {
              casual: "Hey! What's it gonna be?",
              standard: "Hi! Welcome back. What are we making today?",
              formal: "Good morning! Welcome back. What may I prepare for you?",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like a Venti Iced White Mocha with oat milk, an extra shot, and no whip.",
            textZh: "我要一杯大杯冰白摩卡，燕麦奶，加一份浓缩，不要奶油。",
            culturalNote: "星巴克点单公式：杯型 + 温度 + 饮品名 + 定制。'No whip' 是 'no whipped cream' 的缩写，非常常用。'Extra shot' 指多加一份浓缩咖啡。",
            casualVersion: "Venti Iced White Mocha, oat milk, extra shot, no whip.",
            commonMistake: {
              wrong: "I want a big white mocha with more coffee and no cream on top.",
              correct: "I'd like a Venti Iced White Mocha with oat milk, an extra shot, and no whip.",
              explanation: "用星巴克术语：Venti(不是big)、extra shot(不是more coffee)、no whip(不是no cream on top)。",
            },
            formalityVariants: {
              casual: "Venti Iced White Mocha, oat milk, extra shot, no whip.",
              standard: "I'd like a Venti Iced White Mocha with oat milk, an extra shot, and no whip.",
              formal: "Could I please have a Venti Iced White Mocha made with oat milk, an additional shot of espresso, and no whipped cream?",
            },
          },
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "Got it — Venti Iced White Mocha, oat milk, extra shot, no whip. Would you like any syrup changes? It comes with white mocha sauce by default.",
            textZh: "收到——大杯冰白摩卡，燕麦奶，加 shot，去奶油。要调整糖浆吗？默认用白摩卡酱。",
            keyPhrases: [{ en: "syrup changes", zh: "糖浆调整" }, { en: "by default", zh: "默认" }],
            alternativeExpressions: [
              { textEn: "Perfect. Any changes to the syrup? Standard is white mocha sauce.", textZh: "好的。糖浆要改吗？标配是白摩卡酱。", actionHint: "确认定制", frequency: "common" },
            ],
            casualVersion: "Okay! Want any syrup tweaks?",
            formalityVariants: {
              casual: "Cool. Any syrup changes?",
              standard: "Got it. Would you like any syrup changes? It comes with white mocha sauce by default.",
              formal: "Understood. Would you like to adjust the syrup at all? The standard preparation includes our white mocha sauce.",
            },
          },
          {
            speaker: "you",
            textEn: "Could I do half the pumps of white mocha? I don't like it too sweet.",
            textZh: "白摩卡酱能减半吗？我不喜欢太甜。",
            culturalNote: "星巴克糖浆按 'pumps'(泵) 计量。可以说 'half the pumps'、'two pumps instead of four'、'sugar-free vanilla' 等。",
            casualVersion: "Yeah, half pumps on the white mocha.",
            commonMistake: {
              wrong: "Can you put less sugar?",
              correct: "Could I do half the pumps of white mocha?",
              explanation: "星巴克的甜度由糖浆泵数控制，说 'half the pumps' 比 'less sugar' 更精确。",
            },
            formalityVariants: {
              casual: "Half pumps on the white mocha, please.",
              standard: "Could I do half the pumps of white mocha?",
              formal: "Would it be possible to reduce the white mocha sauce to half the standard number of pumps?",
            },
          },
          {
            speaker: "them",
            role: "星巴克咖啡师",
            textEn: "Absolutely, half pumps. Your total is $7.95. Tap or swipe whenever you're ready.",
            textZh: "没问题，减半。一共7.95美元。随时可以刷卡。",
            keyPhrases: [{ en: "tap or swipe", zh: "刷卡" }],
            alternativeExpressions: [
              { textEn: "Half pumps, you got it. That'll be $7.95 — go ahead and tap.", textZh: "减半，收到。7.95美元——请刷卡。", actionHint: "快速结账", frequency: "common" },
            ],
            casualVersion: "Half pumps, done. $7.95 — tap whenever.",
            formalityVariants: {
              casual: "$7.95. Tap whenever.",
              standard: "Your total is $7.95. Tap or swipe whenever you're ready.",
              formal: "Your total comes to seven dollars and ninety-five cents. Please tap or insert your card at your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. Can I also add a cake pop?",
            textZh: "给你。我还能加一个蛋糕棒棒糖吗？",
            culturalNote: "星巴克的 cake pop 是招牌小食，也可以加 croissant、breakfast sandwich 等。点完饮品后加食物很常见。",
            casualVersion: "Sure. Oh, and a cake pop too.",
            commonMistake: {
              wrong: "Can I also buy a cake ball?",
              correct: "Can I also add a cake pop?",
              explanation: "星巴克叫 'cake pop' 不叫 'cake ball'，用 'add' 比 'buy' 更自然。",
            },
            formalityVariants: {
              casual: "Oh, throw in a cake pop too.",
              standard: "Can I also add a cake pop?",
              formal: "Could I also add a cake pop to my order, please?",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-mcdonalds-order",
    tags: ["mcdonalds", "麦当劳", "fast-food", "combo", "drive-thru", "kiosk"],
    category: "restaurant",
    titleZh: "麦当劳点餐",
    titleEn: "McDonald's Order",
    description: "在麦当劳柜台或自助点餐机点套餐、单品，选堂食或外带",
    otherRole: "麦当劳店员",
    otherRoleIcon: "🍔",
    flows: [
      {
        id: "basic",
        titleZh: "基础麦当劳点餐",
        titleEn: "Basic McDonald's Order",
        description: "点一个套餐，选大小和堂食/外带",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "Hi, welcome to McDonald's. For here or to go?",
            textZh: "你好，欢迎来到麦当劳。堂食还是外带？",
            keyPhrases: [{ en: "for here or to go", zh: "堂食还是外带" }],
            alternativeExpressions: [
              { textEn: "Hey there! Will you be dining in or taking out?", textZh: "嗨！堂食还是打包？", actionHint: "换种问法", frequency: "common" },
            ],
            casualVersion: "Hey! Eating here or taking it to go?",
            formalityVariants: {
              casual: "Eating here or to go?",
              standard: "For here or to go?",
              formal: "Good afternoon, welcome to McDonald's. Will you be dining in or taking your order to go?",
            },
          },
          {
            speaker: "you",
            textEn: "To go, please. Can I get a number 1 — the Big Mac Meal?",
            textZh: "外带。我要一号餐——巨无霸套餐。",
            culturalNote: "美式快餐店的套餐有编号(combo #1, #2...)，直接说号码比念全名快。套餐(meal/combo)包含主食+薯条+饮料。",
            casualVersion: "To go. Number 1, Big Mac Meal.",
            commonMistake: {
              wrong: "I want the Big Mac set.",
              correct: "Can I get the number 1 — the Big Mac Meal?",
              explanation: "美国说 'meal' 或 'combo'，不说 'set'(那是亚洲英语的说法)。",
            },
            formalityVariants: {
              casual: "To go. Gimme a number 1.",
              standard: "To go, please. Can I get a number 1 — the Big Mac Meal?",
              formal: "To go, please. I'd like the number one, the Big Mac Meal.",
            },
          },
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "What size — medium or large?",
            textZh: "要中号还是大号？",
            keyPhrases: [{ en: "what size", zh: "什么号" }],
            alternativeExpressions: [
              { textEn: "Would you like to size that up to a large?", textZh: "要升级成大号吗？", actionHint: "推荐升级", frequency: "common" },
            ],
            casualVersion: "Medium or large?",
            formalityVariants: {
              casual: "Medium or large?",
              standard: "What size — medium or large?",
              formal: "Would you prefer a medium or large for your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "Large, please. And a Coke for the drink.",
            textZh: "大号。饮料要可乐。",
            culturalNote: "美国麦当劳的饮料都含无限续杯(free refills)。套餐默认含饮料，店员会问你要什么。",
            casualVersion: "Large. Coke for the drink.",
            commonMistake: {
              wrong: "Big size and Coca-Cola.",
              correct: "Large, please. And a Coke for the drink.",
              explanation: "说 'large' 不说 'big size'。美国人一般说 'Coke' 不说全称 'Coca-Cola'。",
            },
            formalityVariants: {
              casual: "Large with a Coke.",
              standard: "Large, please. And a Coke for the drink.",
              formal: "I'd like the large, please, with a Coca-Cola for the beverage.",
            },
          },
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "Anything else?",
            textZh: "还要别的吗？",
            keyPhrases: [{ en: "anything else", zh: "还要别的吗" }],
            alternativeExpressions: [
              { textEn: "Will that be all?", textZh: "就这些吗？", actionHint: "确认结束", frequency: "common" },
            ],
            casualVersion: "That it?",
            formalityVariants: {
              casual: "That it?",
              standard: "Anything else?",
              formal: "Is there anything else I can get for you?",
            },
          },
          {
            speaker: "you",
            textEn: "That's it. How much is it?",
            textZh: "就这些。多少钱？",
            culturalNote: "麦当劳通常不收小费。付款后在取餐区等叫号。",
            casualVersion: "Nah, that's it. How much?",
            commonMistake: {
              wrong: "No more. How much money?",
              correct: "That's it. How much is it?",
              explanation: "'That's it' 比 'no more' 更自然。'How much is it?' 比 'how much money?' 更地道。",
            },
            formalityVariants: {
              casual: "Nah, I'm good. How much?",
              standard: "That's it. How much is it?",
              formal: "That will be all, thank you. What's the total?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "自助点餐机 + 定制",
        titleEn: "Self-Order Kiosk + Customization",
        description: "使用自助点餐机并请求帮助",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Excuse me, how do I use the self-order kiosk?",
            textZh: "请问，自助点餐机怎么用？",
            culturalNote: "很多麦当劳现在有自助点餐机(self-order kiosk)，可以触屏选餐、刷卡付款，不用排队。",
            casualVersion: "Hey, how does this kiosk thing work?",
            commonMistake: {
              wrong: "How to use the ordering machine?",
              correct: "How do I use the self-order kiosk?",
              explanation: "完整问句用 'How do I...' 不是 'How to...'。设备叫 'kiosk' 不叫 'machine'。",
            },
            formalityVariants: {
              casual: "Hey, how does this thing work?",
              standard: "Excuse me, how do I use the self-order kiosk?",
              formal: "Pardon me, could you help me with the self-order kiosk?",
            },
          },
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "Sure! Just tap the screen to start. Pick your items, customize them, and then pay with your card right there.",
            textZh: "当然！点击屏幕开始，选餐、定制，然后直接刷卡就行。",
            keyPhrases: [{ en: "tap the screen to start", zh: "点击屏幕开始" }, { en: "customize", zh: "定制" }],
            alternativeExpressions: [
              { textEn: "Easy! Just tap to start, pick what you want, and pay at the end.", textZh: "很简单！点击开始，选你想要的，最后付款。", actionHint: "简化说明", frequency: "common" },
            ],
            casualVersion: "Just tap to start, pick your stuff, and pay with card.",
            formalityVariants: {
              casual: "Tap the screen, pick your food, pay right here.",
              standard: "Just tap the screen to start, pick your items, customize them, and pay with your card right there.",
              formal: "Of course. Simply touch the screen to begin, select your desired items and any customizations, and then complete payment with your card at the terminal.",
            },
          },
          {
            speaker: "you",
            textEn: "Can I remove the pickles and add extra cheese on a Quarter Pounder?",
            textZh: "皇堡可以去掉酸黄瓜加芝士吗？",
            culturalNote: "美国快餐最大优势是可以高度定制：去掉/添加任何配料。'No pickles'、'extra cheese'、'add bacon' 都很常见。",
            casualVersion: "Can I get a Quarter Pounder, no pickles, extra cheese?",
            commonMistake: {
              wrong: "I don't want the sour cucumber and put more cheese.",
              correct: "Can I remove the pickles and add extra cheese?",
              explanation: "酸黄瓜叫 'pickles' 不叫 'sour cucumber'。用 'remove/no' 和 'add/extra' 来定制。",
            },
            formalityVariants: {
              casual: "Quarter Pounder, hold the pickles, extra cheese.",
              standard: "Can I remove the pickles and add extra cheese on a Quarter Pounder?",
              formal: "Could I have a Quarter Pounder with the pickles removed and extra cheese added, please?",
            },
          },
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "Yep, you can do that on the kiosk. Just tap 'Customize' after you select the item. Extra cheese is 50 cents more.",
            textZh: "可以，在点餐机上选完餐后点'定制'就行。加芝士多50美分。",
            keyPhrases: [{ en: "customize", zh: "定制" }],
            alternativeExpressions: [
              { textEn: "Absolutely! Hit 'Customize' on the kiosk after picking it. 50 cents for extra cheese.", textZh: "当然！选完后按'定制'。加芝士50美分。", actionHint: "指引操作", frequency: "common" },
            ],
            casualVersion: "Yeah, just hit Customize. Extra cheese is 50 cents.",
            formalityVariants: {
              casual: "Yeah, tap Customize. Cheese is 50 cents extra.",
              standard: "You can do that on the kiosk. Just tap 'Customize' after selecting. Extra cheese is 50 cents more.",
              formal: "Absolutely. After selecting the item, tap the 'Customize' button to modify the ingredients. The extra cheese will be an additional fifty cents.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it, thanks. Where do I pick up my food after I order?",
            textZh: "明白了，谢谢。点完在哪取餐？",
            culturalNote: "自助点餐机点完后，屏幕会显示订单号。到取餐柜台等叫号即可。",
            casualVersion: "Cool. Where do I grab my food?",
            commonMistake: {
              wrong: "Where can I take the food?",
              correct: "Where do I pick up my food?",
              explanation: "'Pick up' 是取餐的正确说法，'take' 有拿走别人东西的意思。",
            },
            formalityVariants: {
              casual: "Cool, thanks. Where do I grab it?",
              standard: "Got it, thanks. Where do I pick up my food?",
              formal: "Thank you. Could you tell me where the pickup counter is?",
            },
          },
          {
            speaker: "them",
            role: "麦当劳店员",
            textEn: "Right over there at the pickup counter. Your order number will show on the screen when it's ready.",
            textZh: "就在那边取餐柜台。餐好了屏幕会显示你的订单号。",
            keyPhrases: [{ en: "pickup counter", zh: "取餐柜台" }, { en: "order number", zh: "订单号" }],
            alternativeExpressions: [
              { textEn: "Over there. Watch the screen for your number.", textZh: "那边。看屏幕等你的号。", actionHint: "简短指引", frequency: "common" },
            ],
            casualVersion: "Right there. Your number pops up on the screen when it's done.",
            formalityVariants: {
              casual: "Over there. Watch for your number on the screen.",
              standard: "Right over there at the pickup counter. Your order number will show on the screen when it's ready.",
              formal: "The pickup counter is just over there. Your order number will be displayed on the screen once your meal is prepared.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-ramen-customize",
    tags: ["ramen", "拉面", "japanese", "tonkotsu", "noodle", "chashu"],
    category: "restaurant",
    titleZh: "日式拉面店定制",
    titleEn: "Ramen Shop Customization",
    description: "在拉面店选汤底、面条硬度和加料，体验正宗日式点餐",
    otherRole: "拉面店服务员",
    otherRoleIcon: "🍜",
    flows: [
      {
        id: "basic",
        titleZh: "选汤底和面的硬度",
        titleEn: "Broth & Noodle Firmness",
        description: "选择汤底类型和面条硬度",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "Welcome! Have you been here before? We have three broths — tonkotsu, shoyu, and miso.",
            textZh: "欢迎！来过吗？我们有三种汤底——豚骨、酱油和味噌。",
            keyPhrases: [{ en: "tonkotsu", zh: "豚骨" }, { en: "shoyu", zh: "酱油" }],
            alternativeExpressions: [
              { textEn: "Hi! First time? We've got tonkotsu, shoyu, and miso ramen.", textZh: "嗨！第一次来？我们有豚骨、酱油和味噌拉面。", actionHint: "简洁介绍", frequency: "common" },
            ],
            casualVersion: "Hey! We've got tonkotsu, shoyu, or miso. What sounds good?",
            formalityVariants: {
              casual: "Hey! Tonkotsu, shoyu, or miso?",
              standard: "Welcome! We have three broths — tonkotsu, shoyu, and miso.",
              formal: "Welcome. Today we're offering three broth options: our rich tonkotsu, a classic shoyu, and a hearty miso.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with the tonkotsu. What's the difference in noodle firmness?",
            textZh: "我选豚骨。面条硬度有什么区别？",
            culturalNote: "正宗拉面店让你选面的硬度：firm/kata(硬)适合喜欢有嚼劲的人，regular/futsuu(普通)最安全，soft/yawa(软)面条更入味。第一次建议选 regular。",
            casualVersion: "Tonkotsu. What are the noodle firmness options?",
            commonMistake: {
              wrong: "I want the pork bone soup. And what about the hard of noodle?",
              correct: "I'll go with the tonkotsu. What's the difference in noodle firmness?",
              explanation: "用日语名 'tonkotsu' 而非翻译 'pork bone soup'。'noodle firmness' 是正确术语，不是 'hard of noodle'。",
            },
            formalityVariants: {
              casual: "Tonkotsu. What are the noodle options?",
              standard: "I'll go with the tonkotsu. What's the difference in noodle firmness?",
              formal: "I'd like the tonkotsu, please. Could you explain the noodle firmness options?",
            },
          },
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "We have firm, regular, and soft. Firm is chewy and holds up well. Most first-timers go with regular.",
            textZh: "有硬、普通和软。硬面更有嚼劲更耐泡。大多数第一次来的客人选普通。",
            keyPhrases: [{ en: "firm", zh: "硬" }, { en: "regular", zh: "普通" }],
            alternativeExpressions: [
              { textEn: "Firm, regular, or soft. If you're not sure, regular is a safe bet.", textZh: "硬、普通或软。不确定的话选普通准没错。", actionHint: "给建议", frequency: "common" },
            ],
            casualVersion: "Firm, regular, or soft. Regular's the safe pick.",
            formalityVariants: {
              casual: "Firm's chewy, soft soaks up the broth. Regular if you're not sure.",
              standard: "We have firm, regular, and soft. Most first-timers go with regular.",
              formal: "We offer three levels: firm for a chewier texture, regular as our standard, and soft which absorbs the broth beautifully. Regular is our most popular choice.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try firm. I like a chewy noodle.",
            textZh: "我试硬面。我喜欢有嚼劲的。",
            culturalNote: "在日本，很多拉面爱好者会选 'bari-kata'(超硬)，但英语菜单一般只到 'firm'。",
            casualVersion: "Firm. I like 'em chewy.",
            commonMistake: {
              wrong: "Give me the hard noodle.",
              correct: "I'll try firm.",
              explanation: "拉面硬度用 'firm' 不用 'hard'。'hard' 听起来像没煮熟。",
            },
            formalityVariants: {
              casual: "Firm for me.",
              standard: "I'll try firm. I like a chewy noodle.",
              formal: "I'd like to go with the firm noodles, please. I enjoy the chewier texture.",
            },
          },
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "Great choice. Tonkotsu, firm noodles. Can I get you something to drink? We have Japanese beer and soft drinks.",
            textZh: "好选择。豚骨硬面。要喝点什么吗？有日本啤酒和软饮。",
            keyPhrases: [{ en: "Japanese beer", zh: "日本啤酒" }],
            alternativeExpressions: [
              { textEn: "Awesome. Anything to drink? Beer, water, Ramune?", textZh: "好的。喝点什么？啤酒、水、弹珠汽水？", actionHint: "列饮品", frequency: "common" },
            ],
            casualVersion: "Nice. Wanna grab a drink? We've got beer and sodas.",
            formalityVariants: {
              casual: "Cool. Anything to drink?",
              standard: "Can I get you something to drink? We have Japanese beer and soft drinks.",
              formal: "Excellent choice. May I offer you a beverage? We carry a selection of Japanese beers as well as soft drinks.",
            },
          },
          {
            speaker: "you",
            textEn: "Just water for now, thanks.",
            textZh: "先来杯水就好，谢谢。",
            culturalNote: "日式拉面店通常免费提供冰水。吃拉面时发出声音(slurp)在日本文化中是表示好吃的礼貌行为。",
            casualVersion: "Water's fine.",
            commonMistake: {
              wrong: "Only water.",
              correct: "Just water for now, thanks.",
              explanation: "'Just water for now' 比 'only water' 更礼貌自然。'for now' 暗示之后可能会加。",
            },
            formalityVariants: {
              casual: "Just water, thanks.",
              standard: "Just water for now, thanks.",
              formal: "I'll just have water for the moment, thank you.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "加料和替换",
        titleEn: "Extra Toppings & Substitutions",
        description: "加叉烧、溏心蛋等配料",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I add extra chashu and an ajitama egg to my ramen?",
            textZh: "可以加份叉烧和一个溏心蛋吗？",
            culturalNote: "Chashu(叉烧) 是日式烤猪肉片。Ajitama(味玉) 是日式溏心蛋，酱油腌制，是拉面灵魂配料。直接用日语名点单更地道。",
            casualVersion: "Can I get extra chashu and an ajitama?",
            commonMistake: {
              wrong: "I want more pork and a half-cooked egg.",
              correct: "Can I add extra chashu and an ajitama egg?",
              explanation: "在拉面店用日语名 chashu/ajitama 更专业。'Half-cooked egg' 会让人担心食品安全。",
            },
            formalityVariants: {
              casual: "Throw on extra chashu and an ajitama.",
              standard: "Can I add extra chashu and an ajitama egg?",
              formal: "Could I please add an extra portion of chashu and an ajitama egg to my order?",
            },
          },
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "Sure! Extra chashu is $3 and ajitama is $2. Would you like any other toppings — corn, nori, or bamboo shoots?",
            textZh: "可以！加叉烧3美元，溏心蛋2美元。还要其他配料吗——玉米、海苔或笋？",
            keyPhrases: [{ en: "toppings", zh: "配料" }, { en: "bamboo shoots", zh: "笋" }],
            alternativeExpressions: [
              { textEn: "No problem! That's $3 for chashu and $2 for the egg. Anything else on top?", textZh: "没问题！叉烧3块蛋2块。还加什么？", actionHint: "报价加追问", frequency: "common" },
            ],
            casualVersion: "Yeah! Chashu's 3 bucks, egg's 2. Want corn, nori, or bamboo shoots too?",
            formalityVariants: {
              casual: "Chashu's $3, egg's $2. Want anything else on it?",
              standard: "Extra chashu is $3 and ajitama is $2. Would you like any other toppings?",
              formal: "Certainly. The additional chashu is three dollars and the ajitama is two dollars. May I suggest any additional toppings? We offer corn, nori, and bamboo shoots.",
            },
          },
          {
            speaker: "you",
            textEn: "Add some corn, please. And could I also get a side of gyoza?",
            textZh: "加玉米。再来一份煎饺。",
            culturalNote: "Gyoza(煎饺) 是拉面店最经典的配菜，通常一份6个。也可以点 karaage(日式炸鸡) 或 edamame(毛豆)。",
            casualVersion: "Corn, yeah. And some gyoza on the side.",
            commonMistake: {
              wrong: "Put corn and give me fried dumplings.",
              correct: "Add some corn, please. And could I also get a side of gyoza?",
              explanation: "在拉面店说 'gyoza' 而非 'fried dumplings'。用 'a side of' 表示配菜。",
            },
            formalityVariants: {
              casual: "Corn and gyoza on the side.",
              standard: "Add some corn, please. And could I also get a side of gyoza?",
              formal: "I'll have the corn added, please, and I'd also like a side of gyoza.",
            },
          },
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "You got it. Just a heads up — if you finish your noodles and want more, we do kaedama for $2. That's an extra serving of noodles in your leftover broth.",
            textZh: "收到。提醒一下——面吃完了还想加，我们有替玉2美元，就是在剩下的汤里再加一份面。",
            keyPhrases: [{ en: "kaedama", zh: "替玉/加面" }],
            alternativeExpressions: [
              { textEn: "Perfect. Oh, and if you want more noodles later, we do refills — kaedama — for $2.", textZh: "好的。对了，吃完面还想加的话，替玉2美元。", actionHint: "介绍替玉", frequency: "common" },
            ],
            casualVersion: "Got it. FYI, kaedama's $2 if you want more noodles later.",
            formalityVariants: {
              casual: "Got it. Want more noodles later? Kaedama's 2 bucks.",
              standard: "Just a heads up — we do kaedama for $2. That's extra noodles in your leftover broth.",
              formal: "Noted. I should mention that we offer kaedama for two dollars — an additional serving of noodles to enjoy in your remaining broth.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh, that's great! I'll definitely keep that in mind. Thanks!",
            textZh: "太好了！我会记住的。谢谢！",
            culturalNote: "Kaedama(替玉)是拉面店特色，面吃完后可以单独加面放进剩余汤里继续吃。在日本有些店按一下桌上的按钮就行。",
            casualVersion: "Oh nice! Good to know.",
            commonMistake: {
              wrong: "Good, I will remember.",
              correct: "I'll definitely keep that in mind.",
              explanation: "'Keep that in mind' 比 'I will remember' 更自然地道。",
            },
            formalityVariants: {
              casual: "Oh sick, good to know!",
              standard: "That's great! I'll keep that in mind. Thanks!",
              formal: "That's wonderful to know. I'll certainly keep that option in mind. Thank you.",
            },
          },
          {
            speaker: "them",
            role: "拉面店服务员",
            textEn: "Your ramen will be out in about 5 minutes. Enjoy!",
            textZh: "你的拉面大约5分钟就好。祝用餐愉快！",
            keyPhrases: [{ en: "will be out", zh: "就好" }],
            alternativeExpressions: [
              { textEn: "Ramen's coming right up! Should be about 5 minutes.", textZh: "拉面马上来！大约5分钟。", actionHint: "轻松确认", frequency: "common" },
            ],
            casualVersion: "Ramen'll be right out. About 5 minutes.",
            formalityVariants: {
              casual: "Five minutes and you're eating!",
              standard: "Your ramen will be out in about 5 minutes. Enjoy!",
              formal: "Your ramen will be prepared in approximately five minutes. Please enjoy your meal.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-sushi-bar-omakase",
    tags: ["sushi", "寿司", "omakase", "sake", "wasabi", "japanese"],
    category: "restaurant",
    titleZh: "寿司吧台体验",
    titleEn: "Sushi Bar Experience",
    description: "在寿司吧台选择 omakase 或单点，学习酱油和芥末用法，点清酒",
    otherRole: "寿司师傅",
    otherRoleIcon: "🍣",
    flows: [
      {
        id: "basic",
        titleZh: "选择 Omakase 或单点",
        titleEn: "Omakase vs A La Carte",
        description: "了解 omakase 和单点的区别并点单",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Welcome. Would you like to sit at the bar? We have omakase and à la carte options tonight.",
            textZh: "欢迎。要坐吧台吗？今晚有 omakase 和单点两种选择。",
            keyPhrases: [{ en: "omakase", zh: "厨师发办" }, { en: "à la carte", zh: "单点" }],
            alternativeExpressions: [
              { textEn: "Good evening! Bar seat or table? We're offering omakase or you can order piece by piece.", textZh: "晚上好！坐吧台还是桌位？可以选厨师发办或单点。", actionHint: "详细选项", frequency: "common" },
            ],
            casualVersion: "Hey! Bar or table? We've got omakase or à la carte.",
            formalityVariants: {
              casual: "Hey! Omakase or ordering by the piece tonight?",
              standard: "Welcome. We have omakase and à la carte options tonight.",
              formal: "Good evening and welcome. May I offer you a seat at the bar? This evening we're pleased to offer both omakase and à la carte dining.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd love a bar seat. What's included in the omakase?",
            textZh: "我想坐吧台。Omakase 包含什么？",
            culturalNote: "Omakase(お任せ) 意思是'交给你了'，由师傅根据当天最好的食材决定上什么。坐吧台能看师傅现场握寿司，是最佳体验。价格通常 $80-$200+。",
            casualVersion: "Bar seat, please. What's in the omakase?",
            commonMistake: {
              wrong: "What food is in the chef's choice?",
              correct: "What's included in the omakase?",
              explanation: "直接说 'omakase' 而非翻译成 'chef's choice'，在寿司店更得体。",
            },
            formalityVariants: {
              casual: "Bar, please. What's the omakase like?",
              standard: "I'd love a bar seat. What's included in the omakase?",
              formal: "I'd love to sit at the bar, please. Could you tell me what the omakase includes this evening?",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Tonight's omakase is 12 pieces — a mix of nigiri and a few special rolls. The chef picks the best fish from today's selection. It's $95 per person.",
            textZh: "今晚的 omakase 是12贯——握寿司和几个特制卷的组合。师傅从今天最好的鱼中选。每人95美元。",
            keyPhrases: [{ en: "nigiri", zh: "握寿司" }, { en: "per person", zh: "每人" }],
            alternativeExpressions: [
              { textEn: "12 pieces tonight — all nigiri, chef's pick from today's catch. $95.", textZh: "今晚12贯——全是握寿司，师傅从今天进货中挑选。95美元。", actionHint: "简洁报价", frequency: "common" },
            ],
            casualVersion: "12 pieces, chef picks the best fish today. $95 a head.",
            formalityVariants: {
              casual: "12 pieces, best fish of the day. 95 bucks.",
              standard: "Tonight's omakase is 12 pieces — nigiri and special rolls. $95 per person.",
              formal: "This evening's omakase features twelve pieces — a curated selection of nigiri and several special rolls, chosen by our chef from today's finest catch. It is ninety-five dollars per person.",
            },
          },
          {
            speaker: "you",
            textEn: "That sounds wonderful. I'll do the omakase. Do I need to mention any allergies now?",
            textZh: "听起来很棒。我选 omakase。需要现在告知过敏信息吗？",
            culturalNote: "吃 omakase 前务必主动告知过敏和不吃的食材(shellfish allergy, no sea urchin 等)，师傅会替换成其他食材。",
            casualVersion: "I'll go with the omakase. Should I tell you about allergies?",
            commonMistake: {
              wrong: "Give me the omakase. I am allergic, do I need to say?",
              correct: "I'll do the omakase. Do I need to mention any allergies now?",
              explanation: "'I'll do the omakase' 是很自然的点餐说法。主动询问是否需要报过敏很得体。",
            },
            formalityVariants: {
              casual: "Omakase for me. Should I flag any allergies?",
              standard: "I'll do the omakase. Do I need to mention any allergies now?",
              formal: "I'd love the omakase, please. Should I inform you of any dietary restrictions or allergies at this point?",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Yes, please! Any allergies or anything you don't eat? The chef can substitute those pieces.",
            textZh: "是的！有过敏或不吃的东西吗？师傅可以替换那些部分。",
            keyPhrases: [{ en: "substitute", zh: "替换" }],
            alternativeExpressions: [
              { textEn: "Definitely — let me know if there's anything you can't eat and we'll swap it out.", textZh: "当然——告诉我有什么不能吃的，我们会换掉。", actionHint: "灵活替换", frequency: "common" },
            ],
            casualVersion: "Yeah! Anything you can't eat? We'll swap those out.",
            formalityVariants: {
              casual: "Yeah, anything you don't eat? We'll work around it.",
              standard: "Any allergies or things you don't eat? The chef can substitute.",
              formal: "Absolutely. Please let us know of any allergies or ingredients you'd prefer to avoid, and the chef will be happy to prepare suitable substitutions.",
            },
          },
          {
            speaker: "you",
            textEn: "No shellfish, please — I'm allergic. Everything else is fine.",
            textZh: "不要贝类——我过敏。其他都可以。",
            culturalNote: "贝类过敏(shellfish allergy)在寿司店很重要，因为很多食材含虾、蟹、贝。说清楚 'allergic' 而非 'I don't like' 让师傅重视程度完全不同。",
            casualVersion: "No shellfish — allergic. Everything else is cool.",
            commonMistake: {
              wrong: "I cannot eat the shells.",
              correct: "No shellfish, please — I'm allergic.",
              explanation: "'Shellfish' 是贝类海鲜的统称(虾蟹贝)，不是 'shells'。强调 'allergic' 确保厨房认真对待。",
            },
            formalityVariants: {
              casual: "No shellfish — I'm allergic. Rest is all good.",
              standard: "No shellfish, please — I'm allergic. Everything else is fine.",
              formal: "I have a shellfish allergy, so I'd need to avoid all shellfish. Other than that, I'm happy to enjoy anything the chef prepares.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "酱油芥末用法和点清酒",
        titleEn: "Soy Sauce, Wasabi & Sake",
        description: "学习正确的酱油蘸法和点清酒",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Should I mix the wasabi into the soy sauce, or use it separately?",
            textZh: "芥末是拌进酱油里，还是单独用？",
            culturalNote: "在高端寿司店，师傅已经在寿司和鱼之间加了适量芥末，不需要额外蘸。把芥末搅进酱油里(wasabi soup)被认为是不懂行的做法。如果想加芥末，可以少量放在寿司上面。",
            casualVersion: "Do I mix wasabi in the soy sauce or keep it separate?",
            commonMistake: {
              wrong: "Should I put the green thing in the sauce?",
              correct: "Should I mix the wasabi into the soy sauce?",
              explanation: "知道 'wasabi' 和 'soy sauce' 的名称是基本寿司礼仪。",
            },
            formalityVariants: {
              casual: "Wasabi in the soy sauce or nah?",
              standard: "Should I mix the wasabi into the soy sauce, or use it separately?",
              formal: "May I ask — is it customary to mix the wasabi into the soy sauce, or should it be applied separately?",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Great question! For our omakase, the chef already adds the right amount of wasabi between the fish and rice. You can dip the fish side lightly in soy sauce — not the rice side.",
            textZh: "好问题！我们的 omakase，师傅已经在鱼和饭之间加了适量芥末。可以把鱼那面轻蘸酱油——不要蘸饭那面。",
            keyPhrases: [{ en: "fish side", zh: "鱼那面" }, { en: "lightly", zh: "轻蘸" }],
            alternativeExpressions: [
              { textEn: "The chef puts wasabi on each piece already. Just a light dip of the fish side in soy sauce.", textZh: "师傅已经在每贯上放了芥末。鱼那面轻蘸一下酱油就好。", actionHint: "简短指导", frequency: "common" },
            ],
            casualVersion: "Chef already put wasabi on it. Just dip the fish side in soy sauce, not the rice.",
            formalityVariants: {
              casual: "Wasabi's already on there. Just dip the fish side lightly.",
              standard: "The chef adds wasabi between the fish and rice. Dip the fish side lightly in soy sauce.",
              formal: "An excellent question. For our omakase, the chef has already applied the ideal amount of wasabi between the fish and the rice. I would suggest lightly dipping the fish side into the soy sauce, rather than the rice.",
            },
          },
          {
            speaker: "you",
            textEn: "Good to know. Could I also see your sake menu? I'd like something to pair with the sushi.",
            textZh: "了解了。能看看清酒菜单吗？我想配寿司喝。",
            culturalNote: "清酒(sake)配寿司是经典搭配。可以选 junmai(纯米,味道浓郁)、ginjo(吟酿,清爽花香)、daiginjo(大吟酿,最精致)。温度可选 chilled(冰)或 warm(温)。",
            casualVersion: "Nice. Got a sake menu? Something to go with the sushi.",
            commonMistake: {
              wrong: "Can I have some rice wine?",
              correct: "Could I see your sake menu?",
              explanation: "清酒在英语中直接叫 'sake'(发音 SAH-keh)，不叫 'rice wine'，虽然技术上是米酒。",
            },
            formalityVariants: {
              casual: "Got any sake to go with this?",
              standard: "Could I see your sake menu? I'd like something to pair with the sushi.",
              formal: "Would you be so kind as to share your sake list? I'd love a recommendation to complement the omakase.",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Of course! I'd recommend the Dassai 45 — it's a junmai daiginjo, very smooth and clean. Would you like it chilled or warm?",
            textZh: "当然！推荐獭祭45——纯米大吟酿，非常顺滑清爽。要冰的还是温的？",
            keyPhrases: [{ en: "junmai daiginjo", zh: "纯米大吟酿" }, { en: "chilled or warm", zh: "冰的还是温的" }],
            alternativeExpressions: [
              { textEn: "Try the Dassai 45 — clean, smooth daiginjo. Cold or warm?", textZh: "试试獭祭45——清爽顺滑的大吟酿。冰还是温？", actionHint: "简短推荐", frequency: "common" },
            ],
            casualVersion: "Dassai 45 is awesome — super smooth. Cold or warm?",
            formalityVariants: {
              casual: "Try the Dassai 45. It's smooth as hell. Cold or warm?",
              standard: "I'd recommend the Dassai 45 — junmai daiginjo, very smooth. Chilled or warm?",
              formal: "I would suggest our Dassai 45, a junmai daiginjo known for its exceptional smoothness and clean finish. Would you prefer it served chilled or at a gentle warm temperature?",
            },
          },
          {
            speaker: "you",
            textEn: "Chilled, please. I'll trust your recommendation.",
            textZh: "冰的。听你的推荐。",
            culturalNote: "大吟酿级别的清酒通常冰饮(chilled)最能体现风味。普通清酒温饮(warm/hot)也不错。'Trust your recommendation' 在 omakase 场景下很合适——本来就是信任师傅。",
            casualVersion: "Cold. I'll go with your pick.",
            commonMistake: {
              wrong: "Make it cold. You choose.",
              correct: "Chilled, please. I'll trust your recommendation.",
              explanation: "'Chilled' 比 'cold' 更适合描述酒的温度。'Trust your recommendation' 比 'you choose' 更礼貌。",
            },
            formalityVariants: {
              casual: "Chilled. You know best!",
              standard: "Chilled, please. I'll trust your recommendation.",
              formal: "Chilled would be lovely, thank you. I'm happy to trust your expert recommendation.",
            },
          },
          {
            speaker: "them",
            role: "寿司师傅",
            textEn: "Excellent taste. I'll pour you a glass to start. The first piece of the omakase will be out shortly — we always start with lighter fish and build up.",
            textZh: "好品味。先给你倒一杯。omakase 的第一贯马上来——我们总是从清淡的鱼开始，逐渐加重。",
            keyPhrases: [{ en: "lighter fish", zh: "清淡的鱼" }, { en: "build up", zh: "逐渐加重" }],
            alternativeExpressions: [
              { textEn: "Great choice. First piece is coming up — we start light and work our way up to the rich stuff.", textZh: "好选择。第一贯马上来——从清淡开始逐渐到浓郁。", actionHint: "解释顺序", frequency: "common" },
            ],
            casualVersion: "Nice. Sake's coming. We start with light fish and go from there.",
            formalityVariants: {
              casual: "Good pick. Sake first, then we start light and build up.",
              standard: "I'll pour you a glass. The omakase starts with lighter fish and builds up.",
              formal: "Excellent taste, if I may say so. Allow me to pour your first glass. The omakase will commence momentarily — we traditionally begin with the most delicate, lighter fish and gradually progress to richer selections.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-brewery-taproom",
    tags: ["brewery", "精酿", "beer", "IPA", "stout", "taproom", "craft-beer"],
    category: "restaurant",
    titleZh: "精酿啤酒屋",
    titleEn: "Brewery Taproom",
    description: "在精酿啤酒屋点品鉴组、了解啤酒类型、选择杯型",
    otherRole: "酒保",
    otherRoleIcon: "🍺",
    flows: [
      {
        id: "basic",
        titleZh: "点一杯精酿啤酒",
        titleEn: "Order a Craft Beer",
        description: "了解啤酒种类并点一杯",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "酒保",
            textEn: "Hey, welcome to the taproom! First time here? We've got 16 beers on tap today.",
            textZh: "嘿，欢迎来到 taproom！第一次来？今天有16种生啤。",
            keyPhrases: [{ en: "on tap", zh: "生啤" }, { en: "taproom", zh: "精酿啤酒屋" }],
            alternativeExpressions: [
              { textEn: "Welcome! We've got a bunch of beers on draft today. Want to take a look at the board?", textZh: "欢迎！今天有很多种生啤。要看看菜单板吗？", actionHint: "引导看菜单", frequency: "common" },
            ],
            casualVersion: "Hey! 16 on tap. What catches your eye?",
            formalityVariants: {
              casual: "Hey! 16 on tap today. Take a look!",
              standard: "Welcome to the taproom! We've got 16 beers on tap today.",
              formal: "Welcome to our taproom. We're currently offering sixteen selections on tap this evening.",
            },
          },
          {
            speaker: "you",
            textEn: "First time! I'm not sure what to get. What's the difference between an IPA and a stout?",
            textZh: "第一次来！不太确定选什么。IPA 和 stout 有什么区别？",
            culturalNote: "IPA(India Pale Ale) 是精酿啤酒最流行的类型，特点是花香和苦味。Stout 是深色浓郁的啤酒(如 Guinness)。Lager 是清爽淡啤，最接近国内啤酒。",
            casualVersion: "First time. What's the diff between IPA and stout?",
            commonMistake: {
              wrong: "What kind of beer is IPA? Is it bitter?",
              correct: "What's the difference between an IPA and a stout?",
              explanation: "直接比较两种类型比问单一类型更高效，能帮你快速决定。",
            },
            formalityVariants: {
              casual: "First time here. IPA vs stout — what's the deal?",
              standard: "I'm not sure what to get. What's the difference between an IPA and a stout?",
              formal: "This is my first visit. Could you help me understand the difference between an IPA and a stout?",
            },
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "Sure! IPAs are hoppy and can be bitter or fruity. Stouts are dark, roasty — think coffee and chocolate flavors. If you want something lighter, try a lager or a wheat beer.",
            textZh: "当然！IPA 啤酒花味重，可能偏苦或有果香。Stout 颜色深、烘烤味——想象咖啡和巧克力的风味。想清淡点的话试 lager 或小麦啤酒。",
            keyPhrases: [{ en: "hoppy", zh: "啤酒花味重" }, { en: "roasty", zh: "烘烤味" }],
            alternativeExpressions: [
              { textEn: "IPA = hoppy, sometimes citrusy. Stout = dark, coffee-chocolate vibes. Lager if you want easy-drinking.", textZh: "IPA = 啤酒花味，有时有柑橘味。Stout = 深色，咖啡巧克力风味。想好喝易入口选 lager。", actionHint: "简短对比", frequency: "common" },
            ],
            casualVersion: "IPAs are hoppy — bitter or fruity. Stouts are dark, coffee-chocolatey. Want something easy? Go lager.",
            formalityVariants: {
              casual: "IPA's hoppy, stout's dark and roasty. Lager if you want light.",
              standard: "IPAs are hoppy and can be bitter or fruity. Stouts are dark and roasty. For something lighter, try a lager.",
              formal: "Certainly. Our IPAs feature prominent hop character, ranging from bitter to fruity profiles. Stouts are darker ales with rich, roasted notes — think coffee and chocolate. For a lighter option, I'd suggest a lager or wheat beer.",
            },
          },
          {
            speaker: "you",
            textEn: "I think I'll try the IPA. Can I get a pint?",
            textZh: "我试试 IPA。来一品脱？",
            culturalNote: "精酿啤酒的杯型：pint(品脱, ~473ml 是标准杯)、half-pint(半品脱, 试喝量)、growler(大罐, 约1.9升, 带回家喝)。",
            casualVersion: "I'll do the IPA. Pint, please.",
            commonMistake: {
              wrong: "Give me a big glass of IPA.",
              correct: "Can I get a pint of the IPA?",
              explanation: "啤酒用 'pint' 而非 'big glass'。pint 是标准量度(~16oz/473ml)。",
            },
            formalityVariants: {
              casual: "IPA. Pint.",
              standard: "I'll try the IPA. Can I get a pint?",
              formal: "I think I'd like to try the IPA. May I have a pint, please?",
            },
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "You got it. The Hazy Daze IPA — it's a New England style, not too bitter, nice and juicy. That'll be $8.",
            textZh: "没问题。Hazy Daze IPA——新英格兰风格，不太苦，很果汁感。8美元。",
            keyPhrases: [{ en: "New England style", zh: "新英格兰风格" }],
            alternativeExpressions: [
              { textEn: "Great pick! Hazy Daze — juicy, not too bitter. $8 for a pint.", textZh: "好选择！Hazy Daze——果汁感，不太苦。一品脱8美元。", actionHint: "推荐描述", frequency: "common" },
            ],
            casualVersion: "Hazy Daze IPA — juicy, easy-drinking. 8 bucks.",
            formalityVariants: {
              casual: "Hazy Daze — juicy, not bitter. 8 bucks.",
              standard: "The Hazy Daze IPA — New England style, not too bitter. $8.",
              formal: "Excellent choice. That's our Hazy Daze IPA, a New England style — it's beautifully juicy with a mild bitterness. That will be eight dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds great. Do you have a food menu too, or is it just drinks?",
            textZh: "听起来不错。有吃的菜单吗，还是只有酒？",
            culturalNote: "很多精酿啤酒屋不自己做菜，但允许外带食物(BYOF: Bring Your Own Food)，或有合作的 food truck 在门口。有些有简单的 bar snacks(花生、pretzel 等)。",
            casualVersion: "Nice. Got food too or just drinks?",
            commonMistake: {
              wrong: "Do you sell food also?",
              correct: "Do you have a food menu too?",
              explanation: "'Have a food menu' 比 'sell food' 更自然，因为你是在问餐厅的服务。",
            },
            formalityVariants: {
              casual: "Got food here too?",
              standard: "Do you have a food menu, or is it just drinks?",
              formal: "Do you offer a food menu as well, or is the taproom exclusively for beverages?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "品鉴组和外带大罐",
        titleEn: "Flight & Growler",
        description: "点品鉴组尝试多种啤酒，了解外带选项",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I get a flight? I'd like to try a few different styles before committing to a pint.",
            textZh: "能来一个品鉴组吗？我想试几种不同风格再决定点一品脱。",
            culturalNote: "Flight(品鉴组) 是4-6小杯(每杯约4oz/120ml)的不同啤酒拼盘，放在一个木板上。是了解一家精酿啤酒屋最好的方式。通常 $10-$16。",
            casualVersion: "Can I do a flight first? Wanna try a few before picking.",
            commonMistake: {
              wrong: "Can I have a tasting set of beer?",
              correct: "Can I get a flight?",
              explanation: "精酿啤酒的品鉴组叫 'flight'，不叫 'tasting set'。这个词来自一组小杯像飞机排列。",
            },
            formalityVariants: {
              casual: "Can I start with a flight?",
              standard: "Can I get a flight? I'd like to try a few styles before committing.",
              formal: "Would it be possible to start with a flight? I'd love to sample a few styles before selecting a full pour.",
            },
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "Absolutely! Pick any four from the board. I'd suggest mixing it up — maybe an IPA, a stout, a lager, and a sour.",
            textZh: "当然！从菜单板上选四种。我建议混着来——比如一个 IPA、一个 stout、一个 lager、一个酸啤。",
            keyPhrases: [{ en: "pick any four", zh: "选四种" }, { en: "sour", zh: "酸啤" }],
            alternativeExpressions: [
              { textEn: "Sure thing! Choose 4 from the list. Want me to pick a good mix for you?", textZh: "没问题！从列表选4个。要我帮你搭配吗？", actionHint: "主动帮选", frequency: "common" },
            ],
            casualVersion: "Yeah! Pick 4. I'd do one IPA, one stout, one lager, one sour.",
            formalityVariants: {
              casual: "For sure! Grab any 4. Want a mix?",
              standard: "Pick any four from the board. I'd suggest mixing styles.",
              formal: "Absolutely. You may select any four from our current offerings. I'd recommend a diverse selection — perhaps an IPA, a stout, a lager, and one of our sour ales.",
            },
          },
          {
            speaker: "you",
            textEn: "Let's do that. Also, what's a growler? I see people leaving with those big bottles.",
            textZh: "就那样搭配。另外，growler 是什么？我看到有人带着大瓶子出去。",
            culturalNote: "Growler 是一种大玻璃罐(通常64oz/约1.9升)，可以在精酿啤酒屋灌装生啤带回家。有些店也有 crowler(铝罐密封版)。Growler 需要在几天内喝完。",
            casualVersion: "Sounds good. What are those big bottles people are carrying out?",
            commonMistake: {
              wrong: "What is the big bottle? Can I buy beer to bring home?",
              correct: "What's a growler? I see people leaving with those big bottles.",
              explanation: "精酿外带大罐叫 'growler'。先用自己的观察引出问题更自然。",
            },
            formalityVariants: {
              casual: "That works. What are those big jugs people are leaving with?",
              standard: "What's a growler? I see people leaving with those big bottles.",
              formal: "That sounds perfect. I've noticed some guests leaving with large bottles — could you tell me about the growler program?",
            },
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "A growler is a 64-ounce jug you can fill with any beer on tap to take home. The jug is $10, and fills are $14 to $18 depending on the beer. We also do crowlers — 32-ounce cans we seal fresh.",
            textZh: "Growler 是64盎司的大罐，可以灌任何生啤带回家。罐子10美元，灌装14到18美元看品种。我们也有 crowler——32盎司的铝罐现场密封。",
            keyPhrases: [{ en: "growler", zh: "大罐外带" }, { en: "crowler", zh: "铝罐密封" }],
            alternativeExpressions: [
              { textEn: "It's a big jug — 64 oz — you fill with draft beer to go. $10 for the jug, $14-18 for fills. Or get a crowler — sealed 32 oz can.", textZh: "大罐，64盎司，灌生啤带走。罐子10块，灌装14-18块。或者要 crowler——密封的32盎司罐。", actionHint: "简洁说明", frequency: "common" },
            ],
            casualVersion: "Big jug, 64 oz, fill it with whatever beer. Jug's $10, fill's $14-18. We also do 32 oz canned crowlers.",
            formalityVariants: {
              casual: "64 oz jug of draft to go. $10 for the jug, $14-18 for fills. We do 32 oz crowlers too.",
              standard: "A growler is a 64-oz jug for draft beer to go. $10 for the jug, $14-18 for fills. We also seal 32-oz crowlers.",
              formal: "A growler is a sixty-four-ounce glass jug that we fill with any of our draft selections for you to enjoy at home. The vessel itself is ten dollars, with fills ranging from fourteen to eighteen dollars. We also offer crowlers — thirty-two-ounce aluminum cans that we fill and seal fresh.",
            },
          },
          {
            speaker: "you",
            textEn: "That's awesome. After I try the flight, I might grab a growler of my favorite one. Do you take credit cards?",
            textZh: "太棒了。试完品鉴组后，我可能灌一罐最喜欢的。收信用卡吗？",
            culturalNote: "大部分精酿啤酒屋接受信用卡，但少数只收现金。Growler 买完后可以反复带来续灌(refill)，每次只付灌装费。",
            casualVersion: "Sick. I'll probably grab a growler after the flight. Cards okay?",
            commonMistake: {
              wrong: "Can I use bank card?",
              correct: "Do you take credit cards?",
              explanation: "'Credit card' 或 'card' 是美国标准说法。'Bank card' 不太常用。'Do you take...' 是固定搭配。",
            },
            formalityVariants: {
              casual: "Might grab a growler after the flight. You guys take cards?",
              standard: "After the flight, I might grab a growler. Do you take credit cards?",
              formal: "Wonderful. I may very well purchase a growler after sampling the flight. Do you accept credit cards?",
            },
          },
          {
            speaker: "them",
            role: "酒保",
            textEn: "We sure do — cards and tap-to-pay. Let me get your flight going. Cheers!",
            textZh: "当然——刷卡和感应支付都行。我去给你准备品鉴组。干杯！",
            keyPhrases: [{ en: "tap-to-pay", zh: "感应支付" }],
            alternativeExpressions: [
              { textEn: "Yep, cards and Apple Pay. I'll get your flight ready!", textZh: "收的，卡和 Apple Pay 都行。我去准备品鉴组！", actionHint: "确认支付", frequency: "common" },
            ],
            casualVersion: "Yeah, cards are fine. Flight coming right up!",
            formalityVariants: {
              casual: "Yep! Cards, Apple Pay, whatever. Flight's coming up!",
              standard: "We take cards and tap-to-pay. Let me get your flight going. Cheers!",
              formal: "Absolutely — we accept all major credit cards as well as contactless payment. Allow me to prepare your flight. Cheers!",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-bbq-joint",
    tags: ["bbq", "烧烤", "brisket", "ribs", "pulled-pork", "smokehouse"],
    category: "restaurant",
    titleZh: "美式 BBQ 烟熏烧烤",
    titleEn: "American BBQ Joint",
    description: "在美式 BBQ 餐厅按重量点烟熏肉、选配菜和酱汁",
    otherRole: "BBQ 柜台店员",
    otherRoleIcon: "🥩",
    flows: [
      {
        id: "basic",
        titleZh: "基础 BBQ 点餐",
        titleEn: "Basic BBQ Order",
        description: "选择烟熏肉和配菜",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "Welcome! What can I get for you? We've got brisket, ribs, pulled pork, and sausage links today.",
            textZh: "欢迎！想吃什么？今天有牛胸肉、肋排、手撕猪肉和香肠。",
            keyPhrases: [{ en: "brisket", zh: "牛胸肉" }, { en: "pulled pork", zh: "手撕猪肉" }],
            alternativeExpressions: [
              { textEn: "Hey! Today's meats are brisket, ribs, pulled pork, and links. What sounds good?", textZh: "嘿！今天的肉有牛胸、肋排、手撕猪肉和香肠。想吃哪个？", actionHint: "列举推荐", frequency: "common" },
            ],
            casualVersion: "Hey! Brisket, ribs, pulled pork, sausage — what'll it be?",
            formalityVariants: {
              casual: "What meat you want? We got brisket, ribs, pulled pork, sausage.",
              standard: "Welcome! We've got brisket, ribs, pulled pork, and sausage links today.",
              formal: "Welcome. Today's offerings include our slow-smoked brisket, St. Louis ribs, hand-pulled pork, and house-made sausage links.",
            },
          },
          {
            speaker: "you",
            textEn: "I'd like some brisket. How do you sell it — by the pound?",
            textZh: "我想要牛胸肉。怎么卖的——按磅吗？",
            culturalNote: "正宗美式 BBQ 通常按磅(by the pound)卖肉，半磅(half pound)够一个人吃。也有 plate/platter 套餐选项，包含肉+两个配菜+面包。",
            casualVersion: "Brisket. Is it by the pound?",
            commonMistake: {
              wrong: "I want beef barbecue. How much for one piece?",
              correct: "I'd like some brisket. Do you sell it by the pound?",
              explanation: "BBQ 的牛胸肉叫 'brisket'，按重量卖(by the pound)，不是按块(piece)。",
            },
            formalityVariants: {
              casual: "Brisket. By the pound?",
              standard: "I'd like some brisket. How do you sell it — by the pound?",
              formal: "I'd like the brisket, please. Is it sold by the pound?",
            },
          },
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "Yep! Brisket is $24 a pound. Half a pound is a good portion for one person. You also get to pick two sides.",
            textZh: "是的！牛胸肉24美元一磅。半磅够一个人吃。还可以选两个配菜。",
            keyPhrases: [{ en: "by the pound", zh: "按磅" }, { en: "two sides", zh: "两个配菜" }],
            alternativeExpressions: [
              { textEn: "Brisket's $24/lb. Half pound per person is plenty. Comes with 2 sides.", textZh: "牛胸24美元/磅。每人半磅足够。配两个配菜。", actionHint: "简洁报价", frequency: "common" },
            ],
            casualVersion: "$24 a pound. Half pound's enough for one. Pick 2 sides.",
            formalityVariants: {
              casual: "$24 a pound. Half pound's plenty. Two sides included.",
              standard: "Brisket is $24 a pound. Half a pound is good for one. You get two sides.",
              formal: "The brisket is twenty-four dollars per pound. A half-pound portion is typically sufficient for one person. Each order includes your choice of two side dishes.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take half a pound of brisket. What sides do you have?",
            textZh: "来半磅牛胸肉。有什么配菜？",
            culturalNote: "经典 BBQ 配菜包括 coleslaw(凉拌卷心菜)、mac and cheese(芝士通心粉)、baked beans(焗豆)、cornbread(玉米面包)、potato salad(土豆沙拉)。",
            casualVersion: "Half pound of brisket. What sides you got?",
            commonMistake: {
              wrong: "Give me a half kilogram and what vegetables do you have?",
              correct: "I'll take half a pound. What sides do you have?",
              explanation: "美国用磅(pound)不用公斤。BBQ配菜叫 'sides' 不叫 'vegetables'，因为很多不是蔬菜。",
            },
            formalityVariants: {
              casual: "Half pound. What sides?",
              standard: "I'll take half a pound of brisket. What sides do you have?",
              formal: "I'll have a half pound of brisket, please. What are your side dish options?",
            },
          },
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "We've got coleslaw, mac and cheese, baked beans, potato salad, and cornbread. The mac and cheese is super popular.",
            textZh: "有凉拌卷心菜、芝士通心粉、焗豆、土豆沙拉和玉米面包。芝士通心粉最受欢迎。",
            keyPhrases: [{ en: "coleslaw", zh: "凉拌卷心菜" }, { en: "mac and cheese", zh: "芝士通心粉" }],
            alternativeExpressions: [
              { textEn: "Coleslaw, mac, beans, potato salad, cornbread. I'd go with the mac — everyone loves it.", textZh: "凉拌菜、芝士粉、焗豆、土豆沙拉、玉米面包。推荐芝士粉——人人都爱。", actionHint: "推荐热门", frequency: "common" },
            ],
            casualVersion: "Slaw, mac and cheese, beans, potato salad, cornbread. Mac's the move.",
            formalityVariants: {
              casual: "Slaw, mac, beans, potato salad, cornbread. Get the mac.",
              standard: "Coleslaw, mac and cheese, baked beans, potato salad, and cornbread. The mac is super popular.",
              formal: "Today's side selections include coleslaw, our house-made macaroni and cheese, slow-cooked baked beans, potato salad, and fresh cornbread. The macaroni and cheese is particularly popular.",
            },
          },
          {
            speaker: "you",
            textEn: "Mac and cheese and coleslaw, please. And can I get the sauce on the side?",
            textZh: "芝士通心粉和凉拌卷心菜。酱汁能放旁边吗？",
            culturalNote: "好的 BBQ 餐厅的肉本身就有烟熏风味，不需要太多酱汁。点 'sauce on the side'(酱汁放旁边) 是内行做法，可以先尝原味再决定加多少酱。",
            casualVersion: "Mac and slaw. Sauce on the side.",
            commonMistake: {
              wrong: "Mac cheese and salad. Put the sauce separately.",
              correct: "Mac and cheese and coleslaw. Sauce on the side, please.",
              explanation: "'Mac and cheese' 不能缩写成 'mac cheese'。'Sauce on the side' 是标准表达，不说 'put separately'。",
            },
            formalityVariants: {
              casual: "Mac and slaw. Sauce on the side.",
              standard: "Mac and cheese and coleslaw. And sauce on the side, please.",
              formal: "I'll have the macaroni and cheese and the coleslaw, please. And if possible, could I have the sauce served on the side?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "拼盘和分享",
        titleEn: "BBQ Platter for Sharing",
        description: "点多人拼盘、搭配多种肉和配菜",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "We're a group of four. Do you have a combo platter we can share?",
            textZh: "我们四个人。有可以分享的拼盘吗？",
            culturalNote: "BBQ 餐厅的 family platter 或 combo platter 通常包含几种肉(1-2磅总量)加多个配菜，性价比比单点好。",
            casualVersion: "There's four of us. Got a platter we can split?",
            commonMistake: {
              wrong: "We are four people. Do you have a set for sharing?",
              correct: "We're a group of four. Do you have a combo platter we can share?",
              explanation: "'Combo platter' 而非 'set'。'A group of four' 比 'four people' 更自然。",
            },
            formalityVariants: {
              casual: "Four of us. Got a sharing platter?",
              standard: "We're a group of four. Do you have a combo platter we can share?",
              formal: "We're a party of four. Do you offer a combination platter suitable for sharing?",
            },
          },
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "Sure do! Our Family Platter is 2 pounds of meat — you pick three kinds — plus four sides and cornbread for the table. It's $72.",
            textZh: "有的！家庭拼盘有2磅肉——选三种——加四个配菜和一桌玉米面包。72美元。",
            keyPhrases: [{ en: "Family Platter", zh: "家庭拼盘" }, { en: "pick three kinds", zh: "选三种" }],
            alternativeExpressions: [
              { textEn: "Yep! Family Platter — 2 lbs of 3 meats, 4 sides, cornbread. $72 for the whole thing.", textZh: "有！家庭拼盘——2磅3种肉、4个配菜、玉米面包。整份72美元。", actionHint: "简洁报价", frequency: "common" },
            ],
            casualVersion: "Yeah! Family Platter — 2 pounds, pick 3 meats, 4 sides, cornbread. 72 bucks.",
            formalityVariants: {
              casual: "Yeah! Family Platter — 2 lbs, 3 meats, 4 sides. $72.",
              standard: "Our Family Platter is 2 pounds of meat, pick three, plus four sides and cornbread. $72.",
              formal: "Certainly. Our Family Platter features two pounds of meat — your selection of three varieties — accompanied by four side dishes and freshly baked cornbread. It's seventy-two dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "Let's do the Family Platter. We'll take brisket, ribs, and pulled pork.",
            textZh: "来个家庭拼盘。我们选牛胸肉、肋排和手撕猪肉。",
            culturalNote: "点 BBQ 拼盘的经典三件套就是 brisket + ribs + pulled pork，分别代表牛、猪肋排和猪肩肉三种不同风味和口感。",
            casualVersion: "Family Platter — brisket, ribs, and pulled pork.",
            commonMistake: {
              wrong: "Give us three kinds: beef, rib, and shredded pork.",
              correct: "We'll take brisket, ribs, and pulled pork.",
              explanation: "用 BBQ 专用名：brisket(不是beef)、ribs(复数)、pulled pork(不是shredded pork)。",
            },
            formalityVariants: {
              casual: "Family Platter. Brisket, ribs, pulled pork.",
              standard: "We'll take the Family Platter — brisket, ribs, and pulled pork.",
              formal: "We'd like the Family Platter with brisket, ribs, and pulled pork, please.",
            },
          },
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "Solid picks. For the ribs — do you want them dry-rubbed or wet? Wet comes sauced up with our house BBQ sauce.",
            textZh: "好选择。肋排要干擦(dry-rub)的还是湿的(wet)？湿的裹上了我们自家 BBQ 酱。",
            keyPhrases: [{ en: "dry-rubbed", zh: "干擦" }, { en: "wet", zh: "湿/裹酱" }],
            alternativeExpressions: [
              { textEn: "Nice. Ribs — dry rub or sauced?", textZh: "好。肋排——干擦还是裹酱？", actionHint: "简短追问", frequency: "common" },
            ],
            casualVersion: "Good picks. Ribs dry or sauced up?",
            formalityVariants: {
              casual: "Ribs — dry or sauced?",
              standard: "For the ribs — dry-rubbed or wet with our house sauce?",
              formal: "Excellent selections. For the ribs, would you prefer our dry rub, or would you like them glazed with our house-made barbecue sauce?",
            },
          },
          {
            speaker: "you",
            textEn: "Dry-rubbed. And we'll take mac and cheese, baked beans, coleslaw, and potato salad for the sides.",
            textZh: "干擦的。配菜选芝士通心粉、焗豆、凉拌卷心菜和土豆沙拉。",
            culturalNote: "BBQ 的 dry rub(干擦)指用香料粉(盐、胡椒、辣椒粉、蒜粉等)涂抹后烟熏，能尝到肉本身和烟熏风味。Wet/sauced 是裹了酱汁的做法。",
            casualVersion: "Dry rub. Mac, beans, slaw, potato salad.",
            commonMistake: {
              wrong: "Without sauce. And four side dishes please.",
              correct: "Dry-rubbed. Mac and cheese, baked beans, coleslaw, and potato salad.",
              explanation: "'Dry-rubbed' 不是 'without sauce'，干擦是一种独立的调味方式。直接列出具体配菜名。",
            },
            formalityVariants: {
              casual: "Dry rub. Mac, beans, slaw, tater salad.",
              standard: "Dry-rubbed. Mac and cheese, baked beans, coleslaw, and potato salad for the sides.",
              formal: "The dry rub, please. For our sides, we'd like the macaroni and cheese, baked beans, coleslaw, and potato salad.",
            },
          },
          {
            speaker: "them",
            role: "BBQ 柜台店员",
            textEn: "You're all set. That'll be about 15 minutes. I'll bring everything out on a big tray with butcher paper. Enjoy, folks!",
            textZh: "好了！大约15分钟。全部放在铺了牛皮纸的大托盘上端出来。祝你们吃好！",
            keyPhrases: [{ en: "butcher paper", zh: "牛皮纸" }],
            alternativeExpressions: [
              { textEn: "All set! 15 minutes. It'll come on a tray with paper — dig in with your hands or use a fork. Enjoy!", textZh: "搞定！15分钟。放纸托盘上——用手吃或用叉子都行。祝好！", actionHint: "说明吃法", frequency: "common" },
            ],
            casualVersion: "Done! 15 minutes, big tray, butcher paper. Enjoy!",
            formalityVariants: {
              casual: "15 minutes. Big tray. Enjoy!",
              standard: "About 15 minutes. Everything comes on a tray with butcher paper. Enjoy!",
              formal: "Wonderful. Your order will be ready in approximately fifteen minutes. Everything will be served on a tray lined with butcher paper. Please enjoy your meal!",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-food-truck",
    tags: ["food-truck", "街头美食", "street-food", "takeaway", "cash"],
    category: "restaurant",
    titleZh: "Food Truck 点餐",
    titleEn: "Food Truck Order",
    description: "在 Food Truck 看菜单板点餐、选支付方式、等候取餐",
    otherRole: "Food Truck 老板",
    otherRoleIcon: "🚚",
    flows: [
      {
        id: "basic",
        titleZh: "基础 Food Truck 点餐",
        titleEn: "Basic Food Truck Order",
        description: "看菜单、点餐、付款",
        difficulty: "basic",
        turns: [
          {
            speaker: "you",
            textEn: "Hi! What's good here? I've never tried this truck before.",
            textZh: "嗨！这里什么好吃？我第一次来。",
            culturalNote: "Food Truck 是美国街头文化的重要部分，每辆车通常只做一种风格的食物(tacos、烤奶酪、韩式BBQ等)。菜单写在车身侧面的黑板上。",
            casualVersion: "Hey! What do you recommend? First time here.",
            commonMistake: {
              wrong: "What is your most famous food?",
              correct: "What's good here?",
              explanation: "'What's good here?' 是美国人最自然的问推荐方式，比 'most famous food' 地道得多。",
            },
            formalityVariants: {
              casual: "Hey, what's the move here?",
              standard: "What's good here? First time trying this truck.",
              formal: "Hello! This is my first time. What would you recommend?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "Hey, welcome! Our best seller is the Korean BBQ tacos — everyone loves them. We also do loaded fries and a killer chicken sandwich.",
            textZh: "嘿，欢迎！最畅销的是韩式BBQ墨西哥卷——所有人都爱。也有超多料薯条和超赞鸡肉三明治。",
            keyPhrases: [{ en: "best seller", zh: "最畅销" }, { en: "loaded fries", zh: "超多料薯条" }],
            alternativeExpressions: [
              { textEn: "Welcome! Can't go wrong with the Korean BBQ tacos. They're our thing.", textZh: "欢迎！韩式BBQ卷绝对不会错。是我们的招牌。", actionHint: "推荐招牌", frequency: "common" },
            ],
            casualVersion: "Korean BBQ tacos are fire. Loaded fries are good too.",
            formalityVariants: {
              casual: "BBQ tacos are the hit. Get those.",
              standard: "Our best seller is the Korean BBQ tacos. We also do loaded fries and a chicken sandwich.",
              formal: "Welcome! Our most popular item is the Korean BBQ taco — it's quite beloved. We also offer loaded fries and an exceptional chicken sandwich.",
            },
          },
          {
            speaker: "you",
            textEn: "The Korean BBQ tacos sound great. I'll take two of those. Do you take cards or just cash?",
            textZh: "韩式BBQ卷听起来不错。来两个。你们收卡还是只收现金？",
            culturalNote: "有些 Food Truck 只收现金(cash only)，有些接受刷卡或手机支付。问一下比到付款时才发现只收现金好。",
            casualVersion: "Two Korean BBQ tacos. Cards or cash only?",
            commonMistake: {
              wrong: "Two Korean BBQ please. Can I use credit card?",
              correct: "I'll take two of those. Do you take cards or just cash?",
              explanation: "'Do you take cards?' 是标准问法。'I'll take two of those' 比 'two please' 更完整。",
            },
            formalityVariants: {
              casual: "Two BBQ tacos. Cash or card?",
              standard: "I'll take two Korean BBQ tacos. Do you take cards or just cash?",
              formal: "I'd like two of the Korean BBQ tacos, please. Do you accept card payment?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "We take both! Cards, Apple Pay, cash — whatever works. That's $14 for two tacos. Want any drinks? We've got bottled water and Mexican sodas.",
            textZh: "都收！刷卡、Apple Pay、现金——怎么方便怎么来。两个卷14美元。要饮料吗？有瓶装水和墨西哥汽水。",
            keyPhrases: [{ en: "whatever works", zh: "怎么方便怎么来" }],
            alternativeExpressions: [
              { textEn: "Cards, cash, phone — all good. $14 for two. Anything to drink?", textZh: "卡、现金、手机——都行。两个14块。喝点什么？", actionHint: "快速结账", frequency: "common" },
            ],
            casualVersion: "Cards, cash, whatever. $14. Want a drink?",
            formalityVariants: {
              casual: "Yeah, we take everything. $14. Drink?",
              standard: "Cards, Apple Pay, cash — whatever works. $14 for two. Want any drinks?",
              formal: "We accept all forms of payment — cards, mobile pay, and cash. That comes to fourteen dollars. May I also offer you a beverage?",
            },
          },
          {
            speaker: "you",
            textEn: "I'll add a Mexican Coke. How long's the wait?",
            textZh: "加一瓶墨西哥可乐。要等多久？",
            culturalNote: "Mexican Coke(墨西哥可乐) 用蔗糖而非玉米糖浆，玻璃瓶装，在美国 food truck 很受欢迎。问等候时间用 'How long's the wait?' 很自然。",
            casualVersion: "And a Mexican Coke. How long?",
            commonMistake: {
              wrong: "One more cola. How many minutes I need to wait?",
              correct: "I'll add a Mexican Coke. How long's the wait?",
              explanation: "'How long's the wait?' 是最自然的问等候时间方式。'I'll add' 比 'one more' 更像在加单。",
            },
            formalityVariants: {
              casual: "Mexican Coke too. How long?",
              standard: "I'll add a Mexican Coke. How long's the wait?",
              formal: "I'd also like a Mexican Coca-Cola, please. How long should I expect to wait?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "About 5 minutes. I'll call your name when it's ready. What's the name?",
            textZh: "大约5分钟。好了叫你名字。叫什么？",
            keyPhrases: [{ en: "call your name", zh: "叫你名字" }],
            alternativeExpressions: [
              { textEn: "Five minutes. Name for the order?", textZh: "五分钟。名字？", actionHint: "简短确认", frequency: "common" },
            ],
            casualVersion: "5 minutes. Name?",
            formalityVariants: {
              casual: "5 min. Name?",
              standard: "About 5 minutes. I'll call your name. What's the name?",
              formal: "It will be approximately five minutes. I'll announce your name when the order is ready. May I have your name?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "定制和加料",
        titleEn: "Customization & Add-ons",
        description: "询问配料、辣度和额外要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Can I customize the tacos? I'd like no onions and extra sauce.",
            textZh: "能定制吗？我不要洋葱，多加酱。",
            culturalNote: "Food Truck 通常很灵活，可以去掉或添加配料。因为是现做的，定制比连锁快餐店更容易。",
            casualVersion: "Can I get these without onions and extra sauce?",
            commonMistake: {
              wrong: "Please don't put onion. More sauce.",
              correct: "No onions and extra sauce, please.",
              explanation: "'No onions' 和 'extra sauce' 是快速定制的标准说法。",
            },
            formalityVariants: {
              casual: "No onions, extra sauce.",
              standard: "Can I customize the tacos? No onions and extra sauce.",
              formal: "Would it be possible to have the tacos without onions and with additional sauce?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "No problem! Want the regular sauce or the spicy one? Fair warning — the spicy is pretty hot.",
            textZh: "没问题！要普通酱还是辣酱？提醒一下——辣酱真的很辣。",
            keyPhrases: [{ en: "fair warning", zh: "提醒一下" }, { en: "pretty hot", zh: "挺辣的" }],
            alternativeExpressions: [
              { textEn: "Easy! Regular or spicy sauce? The spicy has a real kick.", textZh: "没问题！普通还是辣酱？辣酱很带劲。", actionHint: "提醒辣度", frequency: "common" },
            ],
            casualVersion: "Sure! Regular or spicy? Spicy is no joke.",
            formalityVariants: {
              casual: "Regular or spicy? Spicy'll light you up.",
              standard: "Regular sauce or spicy? Fair warning, the spicy is pretty hot.",
              formal: "Absolutely. Would you prefer our regular sauce or the spicy variety? I should mention that the spicy option is quite bold.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll try the spicy. Can I also get a side of guacamole?",
            textZh: "试试辣的。能加一份牛油果酱吗？",
            culturalNote: "Guacamole(牛油果酱) 在 taco 类 food truck 很受欢迎，通常作为 side(配菜) 额外付费。Pico de gallo(莎莎酱)、sour cream(酸奶油) 也是常见加料。",
            casualVersion: "Spicy. And some guac on the side?",
            commonMistake: {
              wrong: "Spicy sauce. And avocado sauce too.",
              correct: "I'll try the spicy. Can I get a side of guacamole?",
              explanation: "牛油果酱叫 'guacamole'(口语缩写 guac)，不叫 'avocado sauce'。",
            },
            formalityVariants: {
              casual: "Spicy. Guac on the side?",
              standard: "I'll try the spicy. Can I get a side of guacamole?",
              formal: "I'll go with the spicy, please. Could I also add a side of guacamole?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "Guac is $3 extra. We make it fresh every morning. Your new total is $19 with the Coke.",
            textZh: "牛油果酱加3美元。每天早上现做的。加上可乐新总价19美元。",
            keyPhrases: [{ en: "make it fresh", zh: "现做的" }],
            alternativeExpressions: [
              { textEn: "$3 for the guac. Fresh daily. That brings you to $19 total.", textZh: "牛油果酱3块。每天新鲜做。一共19块。", actionHint: "报价更新", frequency: "common" },
            ],
            casualVersion: "Guac's $3 extra. $19 total with the Coke.",
            formalityVariants: {
              casual: "Guac's 3 bucks. $19 all in.",
              standard: "Guac is $3 extra. Your new total is $19 with the Coke.",
              formal: "The guacamole is an additional three dollars, freshly prepared each morning. Your revised total, including the beverage, comes to nineteen dollars.",
            },
          },
          {
            speaker: "you",
            textEn: "Sounds good. I'll tap my card. Do you have napkins and hot sauce packets?",
            textZh: "好的。我刷卡。有餐巾纸和辣酱包吗？",
            culturalNote: "Food Truck 通常在窗口旁边放 napkins(餐巾纸)、utensils(餐具)、condiments(调料) 让顾客自取。吃完后垃圾扔旁边的垃圾桶。",
            casualVersion: "Cool, tapping now. Got napkins?",
            commonMistake: {
              wrong: "I use my card. Give me paper and chili sauce.",
              correct: "I'll tap my card. Do you have napkins and hot sauce packets?",
              explanation: "'Tap my card' 是感应支付的说法。'Napkins' 不是 'paper'。小包装酱叫 'packets'。",
            },
            formalityVariants: {
              casual: "Tapping. Got napkins?",
              standard: "I'll tap my card. Do you have napkins and hot sauce packets?",
              formal: "I'll pay by tapping my card. Could I also grab some napkins and hot sauce packets?",
            },
          },
          {
            speaker: "them",
            role: "Food Truck 老板",
            textEn: "Napkins and utensils are on the side of the truck. Help yourself! Your food will be up in a few.",
            textZh: "餐巾纸和餐具在车子侧面。自己拿！吃的几分钟就好。",
            keyPhrases: [{ en: "help yourself", zh: "自己拿" }, { en: "will be up", zh: "就好" }],
            alternativeExpressions: [
              { textEn: "Grab napkins from the side. Food's coming right up!", textZh: "从旁边拿餐巾纸。吃的马上好！", actionHint: "简洁指引", frequency: "common" },
            ],
            casualVersion: "Napkins on the side. Food's coming up!",
            formalityVariants: {
              casual: "Napkins are right there. Food's almost up!",
              standard: "Napkins and utensils are on the side of the truck. Help yourself!",
              formal: "You'll find napkins and utensils on the side of the truck — please help yourself. Your order will be ready shortly.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "restaurant-diner-breakfast",
    tags: ["diner", "breakfast", "早餐", "eggs", "hash-browns", "coffee-refill"],
    category: "restaurant",
    titleZh: "美式早餐店 (Diner)",
    titleEn: "American Diner Breakfast",
    description: "在美式 Diner 点鸡蛋、吐司、薯饼，享受无限续杯咖啡",
    otherRole: "Diner 服务员",
    otherRoleIcon: "🍳",
    flows: [
      {
        id: "basic",
        titleZh: "基础 Diner 早餐",
        titleEn: "Basic Diner Breakfast",
        description: "点鸡蛋、吐司和咖啡",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "Morning, hon! Coffee to start?",
            textZh: "早上好，亲！先来杯咖啡？",
            keyPhrases: [{ en: "coffee to start", zh: "先来杯咖啡" }, { en: "hon", zh: "亲(美式 diner 常用称呼)" }],
            alternativeExpressions: [
              { textEn: "Good morning! Can I get you some coffee?", textZh: "早上好！来杯咖啡吗？", actionHint: "标准问候", frequency: "common" },
            ],
            casualVersion: "Morning! Coffee?",
            formalityVariants: {
              casual: "Morning! Coffee?",
              standard: "Good morning! Coffee to start?",
              formal: "Good morning. May I bring you a cup of coffee to begin?",
            },
          },
          {
            speaker: "you",
            textEn: "Yes, please! Black coffee. And I'd like two eggs, scrambled.",
            textZh: "好的！黑咖啡。还要两个炒蛋。",
            culturalNote: "美式 diner 的咖啡通常是无限续杯的(free refills)，服务员会主动来倒。点鸡蛋必须说做法：scrambled(炒蛋)、over easy(单面半熟)、sunny side up(太阳蛋)、over hard(全熟)。",
            casualVersion: "Yeah, black. Two eggs scrambled.",
            commonMistake: {
              wrong: "Coffee with nothing. And I want eggs.",
              correct: "Black coffee. And two eggs, scrambled.",
              explanation: "'Black' 就是不加奶不加糖的咖啡。点蛋必须说做法(scrambled/over easy等)，否则服务员会追问。",
            },
            formalityVariants: {
              casual: "Black coffee. Two scrambled.",
              standard: "Black coffee, please. And two eggs, scrambled.",
              formal: "I'd love a black coffee, please. And I'll have two eggs scrambled.",
            },
          },
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "Two scrambled. What kind of toast — white, wheat, or sourdough?",
            textZh: "两个炒蛋。什么吐司——白面包、全麦还是酸面包？",
            keyPhrases: [{ en: "what kind of toast", zh: "什么吐司" }],
            alternativeExpressions: [
              { textEn: "Got it. Toast with that? We've got white, wheat, and sourdough.", textZh: "收到。配吐司吗？有白面包、全麦和酸面包。", actionHint: "标准追问", frequency: "common" },
            ],
            casualVersion: "Toast? White, wheat, or sourdough?",
            formalityVariants: {
              casual: "Toast? White, wheat, sourdough?",
              standard: "What kind of toast — white, wheat, or sourdough?",
              formal: "Certainly. For your toast, would you prefer white, whole wheat, or sourdough?",
            },
          },
          {
            speaker: "you",
            textEn: "Sourdough, please. Can I also get hash browns?",
            textZh: "酸面包。能加薯饼吗？",
            culturalNote: "Hash browns(薯饼) 是 diner 早餐的经典配菜，把土豆丝煎到金黄酥脆。有些地方也有 home fries(土豆块)。",
            casualVersion: "Sourdough. And hash browns.",
            commonMistake: {
              wrong: "Sour bread. And fried potato.",
              correct: "Sourdough. And hash browns.",
              explanation: "酸面包叫 'sourdough' 不是 'sour bread'。土豆饼叫 'hash browns' 不是 'fried potato'。",
            },
            formalityVariants: {
              casual: "Sourdough. Hash browns too.",
              standard: "Sourdough, please. Can I also get hash browns?",
              formal: "Sourdough, please. And could I add a side of hash browns?",
            },
          },
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "Hash browns, you got it. Anything else, or are we good?",
            textZh: "薯饼，没问题。还要别的，还是就这些？",
            keyPhrases: [{ en: "are we good", zh: "就这些" }],
            alternativeExpressions: [
              { textEn: "Hash browns, coming up. That everything?", textZh: "薯饼，马上来。就这些？", actionHint: "确认结束", frequency: "common" },
            ],
            casualVersion: "Hash browns, done. We good?",
            formalityVariants: {
              casual: "Hash browns. Anything else?",
              standard: "Hash browns, you got it. Anything else, or are we good?",
              formal: "Hash browns, absolutely. Is there anything else I can get for you?",
            },
          },
          {
            speaker: "you",
            textEn: "That's everything, thanks! Oh — is the coffee refillable?",
            textZh: "就这些，谢谢！对了——咖啡能续杯吗？",
            culturalNote: "美式 diner 的咖啡是无限续杯的，不需要额外付费。服务员会拿着咖啡壶在餐厅走动，看到你杯子快空了就会主动来倒。这是 diner 文化的重要部分。",
            casualVersion: "That's it. Free refills on coffee?",
            commonMistake: {
              wrong: "Can I have more coffee for free later?",
              correct: "Is the coffee refillable?",
              explanation: "'Refillable' 或 'free refills' 是标准问法，比 'more coffee for free' 更自然。",
            },
            formalityVariants: {
              casual: "That's it. Refills on the coffee?",
              standard: "That's everything. Is the coffee refillable?",
              formal: "That will be all, thank you. Does the coffee come with complimentary refills?",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "详细鸡蛋做法和加餐",
        titleEn: "Egg Styles & Add-ons",
        description: "学习各种鸡蛋做法和 diner 加餐术语",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "What'll it be this morning? We've got a Two-Egg Breakfast special — two eggs any style, bacon or sausage, toast, and hash browns for $9.99.",
            textZh: "今天早上吃什么？我们有双蛋早餐特价——两个蛋任选做法、培根或香肠、吐司和薯饼，9.99美元。",
            keyPhrases: [{ en: "any style", zh: "任选做法" }, { en: "bacon or sausage", zh: "培根或香肠" }],
            alternativeExpressions: [
              { textEn: "Morning! The Two-Egg Special is a great deal — $9.99 for the works.", textZh: "早！双蛋特价很划算——9.99全套。", actionHint: "推荐特价", frequency: "common" },
            ],
            casualVersion: "Two-Egg Special's $9.99. Eggs, meat, toast, hash browns. How you want your eggs?",
            formalityVariants: {
              casual: "Two-Egg Special — 10 bucks. Eggs, meat, toast, hash browns.",
              standard: "Two-Egg Breakfast special — two eggs any style, bacon or sausage, toast, and hash browns. $9.99.",
              formal: "This morning's special is our Two-Egg Breakfast — two eggs prepared in your preferred style, your choice of bacon or sausage, toast, and hash browns, all for nine ninety-nine.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll take the special. Can I get my eggs over easy? And bacon, crispy.",
            textZh: "我要特价套餐。鸡蛋能做 over easy 吗？培根要脆的。",
            culturalNote: "Over easy = 翻面煎但蛋黄还是流动的(最受欢迎的做法之一)。Over medium = 蛋黄半凝固。Over hard = 蛋黄全熟。Sunny side up = 只煎一面，蛋黄朝上。Crispy bacon = 煎到酥脆(美国人偏爱)。",
            casualVersion: "The special. Eggs over easy, bacon crispy.",
            commonMistake: {
              wrong: "I want the special. Eggs half-cooked, fried on both sides. And hard bacon.",
              correct: "I'll take the special. Eggs over easy. Bacon, crispy.",
              explanation: "'Over easy' 是标准术语，不需要解释做法。培根说 'crispy' 不说 'hard'。",
            },
            formalityVariants: {
              casual: "Special. Over easy. Crispy bacon.",
              standard: "I'll take the special. Eggs over easy, bacon crispy.",
              formal: "I'd like the special, please. Could I have the eggs over easy and the bacon cooked crispy?",
            },
          },
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "Over easy, crispy bacon. White, wheat, or sourdough for toast?",
            textZh: "Over easy，脆培根。吐司要白面包、全麦还是酸面包？",
            keyPhrases: [{ en: "over easy", zh: "单面半熟翻面蛋" }],
            alternativeExpressions: [
              { textEn: "Got it. And what toast?", textZh: "收到。什么吐司？", actionHint: "简短追问", frequency: "common" },
            ],
            casualVersion: "Over easy, crispy bacon. Toast?",
            formalityVariants: {
              casual: "Over easy, crispy bacon. Toast?",
              standard: "Over easy, crispy bacon. What kind of toast?",
              formal: "Over easy with crispy bacon, noted. Which toast would you prefer — white, whole wheat, or sourdough?",
            },
          },
          {
            speaker: "you",
            textEn: "Wheat toast, please. And can I swap the hash browns for fruit?",
            textZh: "全麦吐司。能把薯饼换成水果吗？",
            culturalNote: "很多 diner 允许换配菜(substitute/swap)，常见替换是 hash browns 换 fruit cup(水果杯)、cottage cheese(茅屋芝士) 或 grits(玉米糊)。可能会有小额加价。",
            casualVersion: "Wheat. Can I swap hash browns for fruit?",
            commonMistake: {
              wrong: "Change potato to fruit.",
              correct: "Can I swap the hash browns for fruit?",
              explanation: "'Swap A for B' 或 'substitute A with B' 是标准换菜说法。",
            },
            formalityVariants: {
              casual: "Wheat. Fruit instead of hash browns?",
              standard: "Wheat toast. Can I swap the hash browns for fruit?",
              formal: "Whole wheat toast, please. Would it be possible to substitute the hash browns with a fruit cup?",
            },
          },
          {
            speaker: "them",
            role: "Diner 服务员",
            textEn: "Fruit's a dollar extra — that okay? I'll top off your coffee while I'm here.",
            textZh: "水果加一美元——可以吗？趁我在这给你续杯咖啡。",
            keyPhrases: [{ en: "top off", zh: "续杯/倒满" }, { en: "a dollar extra", zh: "加一美元" }],
            alternativeExpressions: [
              { textEn: "Fruit sub is $1 more. More coffee while I'm at it?", textZh: "换水果加1块。顺便续咖啡？", actionHint: "确认加价+续杯", frequency: "common" },
            ],
            casualVersion: "Buck extra for fruit. Want a top-off on that coffee?",
            formalityVariants: {
              casual: "Dollar extra. More coffee?",
              standard: "Fruit's a dollar extra. I'll top off your coffee while I'm here.",
              formal: "The fruit substitution is an additional dollar, if that's acceptable. And allow me to refresh your coffee.",
            },
          },
          {
            speaker: "you",
            textEn: "That's fine. Yes, please top it off. You all have the best coffee.",
            textZh: "没问题。请续杯。你们的咖啡是最好的。",
            culturalNote: "在 diner 夸咖啡好喝是很好的社交方式。Diner 咖啡虽然不是精品咖啡，但那种 'bottomless cup'(无底杯) 的体验是美式文化的一部分。小费建议 15-20%。",
            casualVersion: "Sure, fill me up. Love the coffee here.",
            commonMistake: {
              wrong: "OK. Pour more. Your coffee is good.",
              correct: "That's fine. Please top it off.",
              explanation: "'Top it off' 或 'fill me up' 是续杯的地道说法，不说 'pour more'。",
            },
            formalityVariants: {
              casual: "Yeah, top me off. Best coffee around.",
              standard: "That's fine. Please top it off. You all have the best coffee.",
              formal: "That's perfectly fine. Yes, please do. I must say, your coffee is excellent.",
            },
          },
        ],
      },
    ],
  },

  // ==================== Drive-Through 点餐 ====================
  {
    id: "restaurant-drive-through",
    category: "restaurant",
    tags: ["drive-through", "drive-thru", "得来速", "fast food", "speaker", "window"],
    titleZh: "Drive-Through 点餐",
    titleEn: "Drive-Through Ordering",
    description: "在快餐店 drive-through 点餐，通过模糊的扬声器沟通，看不到对方脸",
    otherRole: "快餐店员工",
    otherRoleIcon: "🎙️",
    flows: [
      {
        id: "basic",
        titleZh: "简单套餐点单",
        titleEn: "Simple Combo Order",
        description: "点一个简单的 combo meal，付款取餐",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "Welcome to Burger Barn, what can I get for you?",
            textZh: "欢迎来到 Burger Barn，想要点什么？",
            keyPhrases: [{ en: "what can I get for you", zh: "想要点什么" }],
            alternativeExpressions: [
              { textEn: "Hi, go ahead and order whenever you're ready.", textZh: "嗨，准备好了就点吧。", actionHint: "有些店员会让你自己准备好再点", frequency: "common" },
              { textEn: "Welcome in! Order when you're ready.", textZh: "欢迎！准备好了随时点。", actionHint: "简短问候", frequency: "common" },
            ],
            culturalNote: "Drive-through 的扬声器声音通常很模糊，听不清很正常，直接说 'Sorry, could you repeat that?' 完全没问题。",
            formalityVariants: {
              casual: "Hey, what can I getcha?",
              standard: "Welcome to Burger Barn, what can I get for you?",
              formal: "Welcome to Burger Barn. How may I take your order?",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, can I get a number three combo, please?",
            textZh: "你好，我要一个三号套餐。",
            casualVersion: "Yeah, let me get a number three combo.",
            culturalNote: "Drive-through 点单通常说 combo 的编号。'Let me get...' 比 'I want...' 更自然。",
            commonMistake: {
              wrong: "I want to eat number three.",
              correct: "Can I get a number three combo?",
              explanation: "点单时说 'Can I get...' 或 'I'll have...'，不说 'I want to eat...'。",
            },
            formalityVariants: {
              casual: "Lemme get a number three.",
              standard: "Hi, can I get a number three combo, please?",
              formal: "Hello, I would like the number three combo meal, please.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "What size — small, medium, or large?",
            textZh: "要什么大小的——小、中还是大？",
            keyPhrases: [{ en: "what size", zh: "什么大小" }],
            alternativeExpressions: [
              { textEn: "You want that small, medium, or large?", textZh: "要小杯、中杯还是大杯？", actionHint: "直接问杯型", frequency: "common" },
            ],
            formalityVariants: {
              casual: "What size?",
              standard: "What size — small, medium, or large?",
              formal: "What size would you prefer for your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "Medium, please.",
            textZh: "中号的，谢谢。",
            casualVersion: "Medium's fine.",
            formalityVariants: {
              casual: "Medium.",
              standard: "Medium, please.",
              formal: "Medium would be great, thank you.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "And what would you like to drink with that?",
            textZh: "要配什么饮料？",
            keyPhrases: [{ en: "what would you like to drink", zh: "要什么饮料" }],
            alternativeExpressions: [
              { textEn: "What to drink?", textZh: "喝什么？", actionHint: "很简短，快节奏", frequency: "common" },
              { textEn: "And for your drink?", textZh: "饮料呢？", actionHint: "追问饮料选择", frequency: "common" },
            ],
            formalityVariants: {
              casual: "What to drink?",
              standard: "And what would you like to drink with that?",
              formal: "And which beverage would you like to accompany your meal?",
            },
          },
          {
            speaker: "you",
            textEn: "A Coke, please. No ice.",
            textZh: "一杯可乐，不要冰。",
            casualVersion: "Coke, no ice.",
            culturalNote: "美国饮料默认加很多冰。如果不想要冰，一定要说 'no ice'。想要少冰就说 'light ice'。",
            formalityVariants: {
              casual: "Coke, no ice.",
              standard: "A Coke, please. No ice.",
              formal: "I'd like a Coca-Cola with no ice, please.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "Anything else for you today?",
            textZh: "今天还要别的吗？",
            keyPhrases: [{ en: "anything else", zh: "还要别的吗" }],
            alternativeExpressions: [
              { textEn: "Will that be all?", textZh: "就这些吗？", actionHint: "确认是否点完", frequency: "common" },
              { textEn: "That everything?", textZh: "就这些？", actionHint: "超级简短", frequency: "common" },
            ],
            formalityVariants: {
              casual: "That it?",
              standard: "Anything else for you today?",
              formal: "Is there anything else I can add to your order?",
            },
          },
          {
            speaker: "you",
            textEn: "No, that's it. Thank you.",
            textZh: "不用了，就这些。谢谢。",
            casualVersion: "Nope, that's all.",
            formalityVariants: {
              casual: "Nah, I'm good.",
              standard: "No, that's it. Thank you.",
              formal: "No, that will be everything. Thank you very much.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "OK, your total is $8.47. Please pull up to the first window.",
            textZh: "好的，一共 8.47 美元。请开到第一个窗口。",
            keyPhrases: [
              { en: "pull up to", zh: "开到" },
              { en: "first window", zh: "第一个窗口" },
            ],
            alternativeExpressions: [
              { textEn: "That'll be $8.47 at the first window.", textZh: "8.47美元，到第一个窗口。", actionHint: "直接告诉价格和位置", frequency: "common" },
              { textEn: "$8.47 — go ahead and pull forward.", textZh: "8.47美元——往前开。", actionHint: "pull forward 就是往前开", frequency: "common" },
            ],
            culturalNote: "大多数 drive-through 有两个窗口：第一个付款，第二个取餐。有时只用一个窗口同时付款取餐。",
            formalityVariants: {
              casual: "$8.47 at the first window.",
              standard: "OK, your total is $8.47. Please pull up to the first window.",
              formal: "Your order total comes to $8.47. Please proceed to the first window for payment.",
            },
          },
          {
            speaker: "you",
            textEn: "Here you go. Thanks! Have a good one.",
            textZh: "给你。谢谢！祝你愉快。",
            casualVersion: "Here ya go. Thanks!",
            culturalNote: "付完款取完餐说 'Have a good one!' 是非常自然的告别方式。",
            formalityVariants: {
              casual: "Here ya go. Thanks!",
              standard: "Here you go. Thanks! Have a good one.",
              formal: "Here you are. Thank you very much. Have a wonderful day.",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "点单被听错 + 纠正",
        titleEn: "Order Correction & Extras",
        description: "点单被听错需要纠正，加 sauce，被要求开到第二个窗口",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "Hi, welcome to Burger Barn! Go ahead whenever you're ready.",
            textZh: "嗨，欢迎来到 Burger Barn！准备好了就点。",
            formalityVariants: {
              casual: "Hey, order when you're ready.",
              standard: "Hi, welcome to Burger Barn! Go ahead whenever you're ready.",
              formal: "Good afternoon, welcome to Burger Barn. Please order at your convenience.",
            },
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like a chicken sandwich combo with a medium fries and a lemonade.",
            textZh: "你好，我要一个鸡肉三明治套餐，配中薯条和柠檬水。",
            casualVersion: "Yeah, lemme get a chicken sandwich combo, medium fries, and a lemonade.",
            formalityVariants: {
              casual: "Lemme get a chicken sandwich combo, medium fries, lemonade.",
              standard: "Hi, I'd like a chicken sandwich combo with a medium fries and a lemonade.",
              formal: "Hello, I would like to order a chicken sandwich combo meal with medium fries and a lemonade, please.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "So that's a cheeseburger combo, medium, with lemonade?",
            textZh: "好的，芝士汉堡套餐，中号，柠檬水？",
            keyPhrases: [{ en: "cheeseburger", zh: "芝士汉堡" }],
            culturalNote: "扬声器声音不好，店员听错是家常便饭。不要不好意思纠正，礼貌地重说一遍就行。",
            alternativeExpressions: [
              { textEn: "Did you say cheese combo with lemonade?", textZh: "你说的是芝士套餐加柠檬水？", actionHint: "听错了需要纠正", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Cheese combo, medium, lemonade?",
              standard: "So that's a cheeseburger combo, medium, with lemonade?",
              formal: "I have a cheeseburger combo meal in medium with lemonade. Is that correct?",
            },
          },
          {
            speaker: "you",
            textEn: "Actually, no — I said a chicken sandwich, not a cheeseburger.",
            textZh: "不是的——我说的是鸡肉三明治，不是芝士汉堡。",
            casualVersion: "No, sorry — chicken sandwich, not cheeseburger.",
            culturalNote: "说 'Actually, no' 是自然地纠正对方的方式，不会显得粗鲁。",
            commonMistake: {
              wrong: "No! Not cheeseburger! I said chicken!",
              correct: "Actually, no — I said a chicken sandwich, not a cheeseburger.",
              explanation: "纠正时用 'Actually' 开头更自然有礼。语气太强会显得aggressive。",
            },
            formalityVariants: {
              casual: "Nah, chicken sandwich, not cheese.",
              standard: "Actually, no — I said a chicken sandwich, not a cheeseburger.",
              formal: "I'm sorry, I believe there may have been a misunderstanding. I requested the chicken sandwich, not the cheeseburger.",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "Oh, my bad! Chicken sandwich combo, medium, lemonade. Got it. You want any sauce with that?",
            textZh: "噢，我听错了！鸡肉三明治套餐，中号，柠檬水。要加什么酱吗？",
            keyPhrases: [
              { en: "my bad", zh: "我的错" },
              { en: "sauce", zh: "酱" },
            ],
            alternativeExpressions: [
              { textEn: "Sorry about that! Chicken sandwich, medium, lemonade. Any sauces?", textZh: "抱歉！鸡肉三明治，中号，柠檬水。要酱吗？", actionHint: "道歉并重新确认", frequency: "common" },
            ],
            formalityVariants: {
              casual: "My bad! Chicken sandwich, got it. Any sauce?",
              standard: "Oh, my bad! Chicken sandwich combo, medium, lemonade. Got it. You want any sauce with that?",
              formal: "I apologize for the error. Chicken sandwich combo, medium, with lemonade. Would you like any sauce with your order?",
            },
          },
          {
            speaker: "you",
            textEn: "Yeah, can I get some ranch and honey mustard on the side?",
            textZh: "好的，能给我一些田园酱和蜂蜜芥末酱吗？放旁边就好。",
            casualVersion: "Yeah, ranch and honey mustard, please.",
            vocabNotes: {
              "ranch": { meaningInContext: "田园沙拉酱，美国最受欢迎的蘸酱之一", similarUsage: "Can I get some ranch for my fries?" },
              "on the side": { meaningInContext: "放在旁边、分开放", similarUsage: "Dressing on the side, please." },
            },
            formalityVariants: {
              casual: "Ranch and honey mustard.",
              standard: "Yeah, can I get some ranch and honey mustard on the side?",
              formal: "Yes, could I please have ranch and honey mustard sauce on the side?",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "Sure! Your total's $9.75. Go ahead and pull forward to the second window, please.",
            textZh: "好的！一共 9.75 美元。请往前开到第二个窗口。",
            keyPhrases: [
              { en: "pull forward", zh: "往前开" },
              { en: "second window", zh: "第二个窗口" },
            ],
            alternativeExpressions: [
              { textEn: "That'll be $9.75. Pull around to window two.", textZh: "9.75美元。开到第二个窗口。", actionHint: "pull around 是绕过去的意思", frequency: "common" },
            ],
            formalityVariants: {
              casual: "$9.75 at the second window.",
              standard: "Sure! Your total's $9.75. Go ahead and pull forward to the second window, please.",
              formal: "Certainly. Your total comes to $9.75. Please proceed to the second window for pickup.",
            },
          },
          {
            speaker: "you",
            textEn: "Oh wait — can I also add a small vanilla shake? Sorry about that.",
            textZh: "等一下——能再加一个小份香草奶昔吗？不好意思。",
            casualVersion: "Oh, can I add a vanilla shake too? Small.",
            culturalNote: "在 drive-through 临时加东西完全可以。说 'Sorry about that' 显得有礼貌。",
            formalityVariants: {
              casual: "Oh, can you add a small vanilla shake too?",
              standard: "Oh wait — can I also add a small vanilla shake? Sorry about that.",
              formal: "I apologize, but could I also add a small vanilla milkshake to my order?",
            },
          },
          {
            speaker: "them",
            role: "快餐店员工",
            textEn: "No problem! New total is $12.50. We're making the shake fresh, so it might be a minute. Could you pull forward past the window and we'll bring it out to you?",
            textZh: "没问题！新的总价是 12.50 美元。奶昔现做的，可能要等一下。你能往前开过窗口吗？我们做好了给你送出来。",
            keyPhrases: [
              { en: "pull forward past the window", zh: "开过窗口往前停" },
              { en: "bring it out to you", zh: "给你送出来" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing! $12.50 now. The shake needs a sec — mind pulling up and we'll run it out?", textZh: "没问题！12.50美元。奶昔要等一下——能往前开吗？我们送出去。", actionHint: "run it out 就是送出来", frequency: "common" },
            ],
            culturalNote: "如果你的单需要等一下，店员会让你往前开('pull forward')以免堵住后面的车。有人会拿到你车旁边。",
            formalityVariants: {
              casual: "$12.50. Shake needs a minute — pull forward and we'll bring it out.",
              standard: "No problem! New total is $12.50. We're making the shake fresh, so it might be a minute. Could you pull forward past the window and we'll bring it out to you?",
              formal: "Absolutely, no problem at all. Your revised total is $12.50. The milkshake is being prepared fresh, so there will be a brief wait. Would you mind pulling forward past the window? We will deliver it to your vehicle.",
            },
          },
          {
            speaker: "you",
            textEn: "Sure, no problem. Thanks a lot!",
            textZh: "好的，没问题。非常感谢！",
            casualVersion: "Sure thing. Thanks!",
            formalityVariants: {
              casual: "Yeah, no worries. Thanks!",
              standard: "Sure, no problem. Thanks a lot!",
              formal: "Certainly, that's perfectly fine. Thank you very much!",
            },
          },
        ],
      },
    ],
  },

  // ==================== iPad/平板小费 Tipping Screen ====================
  {
    id: "restaurant-tipping-ipad",
    category: "restaurant",
    tags: ["tipping", "小费", "iPad", "tip screen", "counter service", "social pressure"],
    titleZh: "iPad 翻转选小费",
    titleEn: "The Dreaded Tip Screen",
    description: "店员把 iPad/平板翻转过来让你选小费比例，那个社交压力最大的时刻",
    otherRole: "收银员",
    otherRoleIcon: "💳",
    flows: [
      {
        id: "basic",
        titleZh: "咖啡店柜台小费",
        titleEn: "Coffee Counter Tip Screen",
        description: "在咖啡店买咖啡，iPad 翻转要你选 15%/20%/25%/No Tip",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "收银员",
            textEn: "All right, that'll be $6.50. Card or cash?",
            textZh: "好的，一共 6.50 美元。刷卡还是现金？",
            keyPhrases: [{ en: "card or cash", zh: "刷卡还是现金" }],
            alternativeExpressions: [
              { textEn: "That's $6.50. How are you paying today?", textZh: "6.50美元。今天怎么付？", actionHint: "换种问法", frequency: "common" },
              { textEn: "$6.50. Tap, chip, or swipe?", textZh: "6.50美元。感应、插卡还是刷卡？", actionHint: "直接问支付方式", frequency: "occasional" },
            ],
            formalityVariants: {
              casual: "$6.50. Card?",
              standard: "All right, that'll be $6.50. Card or cash?",
              formal: "Your total comes to $6.50. Will you be paying by card or cash today?",
            },
          },
          {
            speaker: "you",
            textEn: "Card, please.",
            textZh: "刷卡。",
            casualVersion: "Card.",
            formalityVariants: {
              casual: "Card.",
              standard: "Card, please.",
              formal: "I'll pay by card, please.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Go ahead and tap or insert your card. And then it'll ask you a question on the screen.",
            textZh: "请感应或插入你的卡。然后屏幕上会有一个问题。",
            keyPhrases: [
              { en: "tap or insert", zh: "感应或插入" },
              { en: "a question on the screen", zh: "屏幕上的问题" },
            ],
            culturalNote: "这里的 'a question on the screen' 就是委婉地说小费选项要出现了。店员通常会把屏幕转向你，然后礼貌地看向别处。",
            alternativeExpressions: [
              { textEn: "Just go ahead and insert your card. It'll prompt you on the screen.", textZh: "插卡就行。屏幕会提示你。", actionHint: "prompt = 提示/引导", frequency: "common" },
              { textEn: "Tap your card here, and then just follow the prompts.", textZh: "在这里感应，然后跟着屏幕操作就行。", actionHint: "follow the prompts = 跟着提示走", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Tap your card. Screen'll ask you something.",
              standard: "Go ahead and tap or insert your card. And then it'll ask you a question on the screen.",
              formal: "Please tap or insert your card when you're ready. The terminal will then display a prompt for you.",
            },
          },
          {
            speaker: "you",
            textEn: "OK... So, um, it's showing 18%, 20%, 25%, and custom. What do people usually do?",
            textZh: "好的……屏幕显示 18%、20%、25%，和自定义。一般人怎么选？",
            casualVersion: "Uh... 18, 20, 25... what do most people pick?",
            culturalNote: "Counter service 小费是可选的（和正式就餐不同）。选 No Tip 没人会说什么，但很多人选 15-18%。正式餐厅 18-20% 是标准。",
            commonMistake: {
              wrong: "How much tip I should give?",
              correct: "What do people usually do?",
              explanation: "直接问 'how much tip' 会显得不了解文化。问 'what do people usually do' 更自然，也给自己台阶。",
            },
            formalityVariants: {
              casual: "Hmm... what do most people pick?",
              standard: "OK, so it's showing 18%, 20%, 25%, and custom. What do people usually do?",
              formal: "I see the options are 18%, 20%, 25%, and a custom amount. What would you say is customary?",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Oh, honestly, whatever you're comfortable with! No pressure at all.",
            textZh: "哦，说实话，选你舒服的就行！完全不用有压力。",
            keyPhrases: [
              { en: "whatever you're comfortable with", zh: "选你舒服的" },
              { en: "no pressure", zh: "不用有压力" },
            ],
            alternativeExpressions: [
              { textEn: "Totally up to you! Don't worry about it.", textZh: "完全看你！不要有顾虑。", actionHint: "让你自己选", frequency: "common" },
              { textEn: "It's all good — pick whatever works for you.", textZh: "都没关系——选你觉得合适的。", actionHint: "轻松的回应", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Whatever you want! No biggie.",
              standard: "Oh, honestly, whatever you're comfortable with! No pressure at all.",
              formal: "Please don't feel any obligation. Any amount is appreciated, or you may skip it entirely.",
            },
          },
          {
            speaker: "you",
            textEn: "I'll go with 18%. There you go.",
            textZh: "我选 18% 吧。好了。",
            casualVersion: "I'll do 18.",
            formalityVariants: {
              casual: "18 it is.",
              standard: "I'll go with 18%. There you go.",
              formal: "I'll select the 18% option. There we are.",
            },
          },
          {
            speaker: "them",
            role: "收银员",
            textEn: "Awesome, thank you! Your drink will be ready at the end of the bar.",
            textZh: "太好了，谢谢！你的饮料在吧台那边等着取。",
            keyPhrases: [{ en: "end of the bar", zh: "吧台末端" }],
            alternativeExpressions: [
              { textEn: "Thanks! We'll call your name when it's ready.", textZh: "谢谢！做好了会叫你名字。", actionHint: "有些店会叫名字", frequency: "common" },
              { textEn: "Appreciate it! Pick up is over there.", textZh: "谢谢！那边取餐。", actionHint: "指向取餐区", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Thanks! Drink'll be down there.",
              standard: "Awesome, thank you! Your drink will be ready at the end of the bar.",
              formal: "Thank you very much! Your beverage will be prepared at the pickup station at the end of the counter.",
            },
          },
          {
            speaker: "you",
            textEn: "Great, thanks!",
            textZh: "好的，谢谢！",
            casualVersion: "Cool, thanks!",
            formalityVariants: {
              casual: "Cool, thanks!",
              standard: "Great, thanks!",
              formal: "Wonderful, thank you so much!",
            },
          },
        ],
      },
      {
        id: "intermediate",
        titleZh: "各种场景的小费指南",
        titleEn: "Tipping Guide Scenarios",
        description: "外卖取餐、理发、Uber 等各场景小费对话",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "you",
            textEn: "Hey, so I just moved here from China. I'm still figuring out the tipping thing. Like, do I tip when I pick up takeout?",
            textZh: "嘿，我刚从中国搬过来。还在搞清楚小费的事。比如取外卖要给小费吗？",
            casualVersion: "So I'm new here... do I tip for takeout?",
            formalityVariants: {
              casual: "So I'm new here... do I tip for takeout?",
              standard: "Hey, so I just moved here from China. I'm still figuring out the tipping thing. Like, do I tip when I pick up takeout?",
              formal: "I recently relocated from China and I'm still learning the customs around tipping. For instance, is it customary to leave a tip when picking up takeout?",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Oh, good question! For takeout pickup, it's kind of optional. Some people tip a dollar or two, some don't. Nobody really judges you. But if it's delivery, you should definitely tip — usually $3 to $5, or 15-20%.",
            textZh: "好问题！取外卖的小费是可选的。有人给一两美元，有人不给。没人会judge你。但如果是送外卖，一定要给——通常 3 到 5 美元，或 15-20%。",
            keyPhrases: [
              { en: "kind of optional", zh: "可选的" },
              { en: "nobody judges you", zh: "没人会说什么" },
              { en: "delivery", zh: "外卖配送" },
            ],
            alternativeExpressions: [
              { textEn: "Takeout? Totally optional. A buck or two is nice but not expected. Delivery? Yeah, definitely tip. Like 15-20%.", textZh: "取外卖？完全可选。给一两块不错但不是必须的。送的话？一定给。大约15-20%。", actionHint: "分清取和送", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Takeout pickup? Meh, optional. Delivery? Yeah, tip for sure. Like 15-20%.",
              standard: "For takeout pickup, it's kind of optional. But if it's delivery, you should definitely tip — usually $3 to $5, or 15-20%.",
              formal: "For takeout pickup, tipping is generally considered optional. However, for delivery services, a tip is customary — typically $3 to $5, or 15 to 20 percent of the order total.",
            },
          },
          {
            speaker: "you",
            textEn: "What about when I get a haircut? My barber charges $25.",
            textZh: "理发呢？我的理发师收 25 美元。",
            casualVersion: "And haircuts? Mine costs $25.",
            formalityVariants: {
              casual: "And haircuts?",
              standard: "What about when I get a haircut? My barber charges $25.",
              formal: "And what is the custom for tipping at a barbershop? My barber charges $25 per cut.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Yeah, definitely tip your barber. 15-20% is standard, so on $25 that'd be like $4 to $5. If they do a really good job, bump it up. Barbers remember good tippers and they'll take extra care of you.",
            textZh: "理发师一定要给小费。15-20% 是标准，25 美元的话大概 4 到 5 美元。如果做得特别好，多给一点。理发师会记住大方的客人，下次会更用心。",
            keyPhrases: [
              { en: "bump it up", zh: "多给一点" },
              { en: "remember good tippers", zh: "记住大方的客人" },
            ],
            culturalNote: "理发师的小费很重要。如果你是常客，给好小费意味着更好的服务。很多人给 20% 或直接凑整。",
            formalityVariants: {
              casual: "Oh yeah, always tip the barber. Like $4-5 on a $25 cut. Good tippers get the VIP treatment.",
              standard: "Yeah, definitely tip your barber. 15-20% is standard, so on $25 that'd be like $4 to $5.",
              formal: "Tipping your barber is certainly expected. The standard is 15 to 20 percent, which on a $25 service would be approximately $4 to $5.",
            },
          },
          {
            speaker: "you",
            textEn: "OK, so what about Uber? I always see the tip option pop up after the ride.",
            textZh: "那 Uber 呢？每次坐完车都会弹出小费选项。",
            casualVersion: "And Uber? It always asks for a tip after.",
            formalityVariants: {
              casual: "What about Uber? That tip thing pops up every time.",
              standard: "OK, so what about Uber? I always see the tip option pop up after the ride.",
              formal: "What about ride-share services like Uber? I notice the application prompts for a tip after each ride.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "So Uber — honestly, a lot of people don't tip, but drivers really appreciate it. A couple bucks for a regular ride is nice. If someone helps with your bags or it's late at night, I'd tip more. Same with Lyft.",
            textZh: "Uber 嘛——说实话，很多人不给。但司机真的很感激。普通行程给几块钱就不错。如果司机帮你搬行李或者是深夜，我会多给一些。Lyft 也一样。",
            keyPhrases: [
              { en: "a couple bucks", zh: "几块钱" },
              { en: "helps with your bags", zh: "帮你搬行李" },
            ],
            formalityVariants: {
              casual: "Uber? Lots of people skip it. But a couple bucks is nice, especially late at night.",
              standard: "Honestly, a lot of people don't tip Uber, but drivers really appreciate it. A couple bucks for a regular ride is nice.",
              formal: "Regarding Uber, many passengers do not tip, but drivers greatly appreciate it. A few dollars for a standard ride is considered generous.",
            },
          },
          {
            speaker: "you",
            textEn: "This is really helpful. I was so confused the first time the iPad screen popped up in my face. I just stared at it.",
            textZh: "太有用了。第一次 iPad 屏幕怼到我脸上的时候我完全懵了。就呆呆地盯着看。",
            casualVersion: "Man, this helps. I totally froze the first time that iPad screen flipped around.",
            formalityVariants: {
              casual: "Dude, this helps so much. I totally froze the first time.",
              standard: "This is really helpful. I was so confused the first time the iPad screen popped up in my face.",
              formal: "I find this incredibly helpful. I must confess, I was quite bewildered the first time the tipping screen was presented to me.",
            },
          },
          {
            speaker: "them",
            role: "朋友",
            textEn: "Ha! Everyone feels that way, even Americans. The tip screen culture is kind of new and honestly, a lot of people find it awkward. Just remember: sit-down restaurants 18-20%, counter service optional, and services like haircuts 15-20%. You'll be fine!",
            textZh: "哈！大家都这样，美国人也觉得尴尬。小费屏幕文化其实很新，很多人都觉得别扭。记住：正式餐厅 18-20%，柜台服务可选，理发之类的服务 15-20%。你不会错的！",
            keyPhrases: [
              { en: "sit-down restaurants", zh: "正式餐厅" },
              { en: "counter service", zh: "柜台服务" },
              { en: "find it awkward", zh: "觉得尴尬" },
            ],
            alternativeExpressions: [
              { textEn: "Don't worry, everyone hates the tip screen — even Americans! Just know: restaurants 18-20%, coffee shops optional, barber 15-20%. Easy rules.", textZh: "别担心，大家都讨厌小费屏幕——连美国人也是！记住：餐厅18-20%，咖啡店可选，理发15-20%。简单规则。", actionHint: "简化版记忆口诀", frequency: "common" },
            ],
            formalityVariants: {
              casual: "Everyone hates the tip screen! Restaurants 20%, coffee shops optional, barber 15-20%. Done.",
              standard: "Everyone feels that way. Just remember: sit-down restaurants 18-20%, counter service optional, services like haircuts 15-20%.",
              formal: "Rest assured, this is a common experience. The general guidelines are: full-service restaurants 18-20%, counter service is discretionary, and personal services such as haircuts typically warrant 15-20%.",
            },
          },
          {
            speaker: "you",
            textEn: "Got it — restaurants 20%, counter optional, services 15-20%. Thanks, that makes it way less stressful!",
            textZh: "明白了——餐厅 20%，柜台可选，服务类 15-20%。谢谢，这样轻松多了！",
            casualVersion: "OK, 20, optional, 15-20. Easy. Thanks!",
            formalityVariants: {
              casual: "Restaurant 20, counter whatever, barber 15-20. Got it!",
              standard: "Got it — restaurants 20%, counter optional, services 15-20%. Thanks, that makes it way less stressful!",
              formal: "Understood — restaurants at 20%, counter service at your discretion, and personal services at 15-20%. Thank you so much, this alleviates a great deal of my anxiety!",
            },
          },
        ],
      },
    ],
  },

  // ==================== 电话订位 Phone Restaurant Reservation ====================
  {
    id: "phone-restaurant-reservation",
    tags: ["phone", "电话", "reservation", "订位", "booking", "restaurant"],
    category: "restaurant",
    titleZh: "电话订位",
    titleEn: "Phone Restaurant Reservation",
    description: "打电话给餐厅订位，需要拼写名字、确认细节，处理听不清的情况",
    otherRole: "餐厅接线员",
    otherRoleIcon: "📞",
    flows: [
      {
        id: "basic-reservation",
        titleZh: "基本电话订位",
        titleEn: "Basic Phone Reservation",
        description: "打电话预订餐位，提供日期、时间、人数，拼写名字",
        difficulty: "basic",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "Thank you for calling Bella's Kitchen. How can I help you?",
            textZh: "感谢致电 Bella's Kitchen。有什么可以帮您的？",
            keyPhrases: [{ en: "thank you for calling", zh: "感谢致电" }],
            alternativeExpressions: [
              { textEn: "Bella's Kitchen, this is Maria. How may I assist you?", textZh: "Bella's Kitchen，我是 Maria。有什么可以为您服务的？", actionHint: "自报姓名的接听方式", frequency: "common" },
              { textEn: "Good evening, Bella's Kitchen. What can I do for you?", textZh: "晚上好，Bella's Kitchen。有什么需要的？", actionHint: "带时间问候", frequency: "common" },
            ],
            culturalNote: "美国餐厅接电话通常会先报餐厅名字，有时加上接线员的名字。",
          },
          {
            speaker: "you",
            textEn: "Hi, I'd like to make a reservation for this Saturday, please.",
            textZh: "你好，我想预订这个周六的位子。",
            casualVersion: "Hey, can I book a table for Saturday?",
            formalityVariants: {
              casual: "Hey, I need a table for Saturday.",
              standard: "Hi, I'd like to make a reservation for this Saturday, please.",
              formal: "Good evening. I would like to inquire about making a reservation for this Saturday, if possible.",
            },
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Sure! What time were you thinking, and how many in your party?",
            textZh: "好的！您想订几点的？一共几位？",
            keyPhrases: [
              { en: "how many in your party", zh: "一共几位" },
              { en: "what time", zh: "几点" },
            ],
            alternativeExpressions: [
              { textEn: "Of course! For what time and how many guests?", textZh: "当然！几点的，几位客人？", actionHint: "guests 更正式", frequency: "common" },
              { textEn: "Absolutely! What time would you like and how many people?", textZh: "没问题！您想几点来，几个人？", actionHint: "直接问法", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Around 7 p.m., for four people.",
            textZh: "大约晚上7点，四个人。",
            casualVersion: "Seven-ish, party of four.",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Let me check... I'm sorry, 7 is fully booked. I have openings at 6:30 or 8:15. Would either of those work?",
            textZh: "让我查一下……抱歉，7点已经满了。6:30 或 8:15 有空位。这两个时间可以吗？",
            keyPhrases: [
              { en: "fully booked", zh: "已经订满了" },
              { en: "openings", zh: "空位/可用时间" },
              { en: "would either of those work", zh: "这两个时间可以吗" },
            ],
            alternativeExpressions: [
              { textEn: "Hmm, 7 o'clock is completely full. How about 6:30 or 8:15?", textZh: "嗯，7点完全满了。6:30 或 8:15 怎么样？", actionHint: "how about 提供替代", frequency: "common" },
            ],
            culturalNote: "周末热门餐厅通常需要提前好几天甚至几周预订。",
          },
          {
            speaker: "you",
            textEn: "8:15 works. Let's go with that.",
            textZh: "8:15 可以。就定那个时间吧。",
            casualVersion: "8:15's fine.",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Great. And can I get a name for the reservation?",
            textZh: "好的。请问预订人姓名？",
            keyPhrases: [{ en: "a name for the reservation", zh: "预订人姓名" }],
          },
          {
            speaker: "you",
            textEn: "It's under Chen. C-H-E-N.",
            textZh: "Chen。C-H-E-N。",
            culturalNote: "电话里一定要主动拼写名字。即使是简单的名字，对方也可能拼错。如果名字容易混淆，可以用 'C as in Charlie, H as in Hotel' 这种NATO字母表的方式拼。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "C-H-E-N. Got it. And a phone number in case we need to reach you?",
            textZh: "C-H-E-N。收到。方便留一个联系电话吗？以防我们需要联系您。",
            keyPhrases: [
              { en: "in case we need to reach you", zh: "以防需要联系您" },
            ],
            alternativeExpressions: [
              { textEn: "C-H-E-N, perfect. What's the best number to reach you at?", textZh: "C-H-E-N，好的。最方便联系您的电话号码是？", actionHint: "best number 最方便的号码", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Sure, it's 415-555-0173.",
            textZh: "好的，415-555-0173。",
            culturalNote: "美国电话号码通常分三组念：area code (415) + 三位 (555) + 四位 (0173)。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Perfect. So that's Saturday, 8:15 p.m., party of four, under Chen. We do have a 15-minute hold policy — if you're more than 15 minutes late, we may release the table. See you Saturday!",
            textZh: "好的。那就是周六晚上 8:15，四位，Chen 名下。我们有 15 分钟保留政策——如果迟到超过 15 分钟，我们可能会释放桌位。周六见！",
            keyPhrases: [
              { en: "15-minute hold policy", zh: "15分钟保留政策" },
              { en: "release the table", zh: "释放桌位" },
            ],
            alternativeExpressions: [
              { textEn: "All set! Saturday at 8:15 for four under Chen. Just a heads up — please arrive within 15 minutes of your reservation time or we may give away the table. Looking forward to seeing you!", textZh: "搞定！周六 8:15 四位 Chen。提醒一下——请在预订时间 15 分钟内到达，否则我们可能会让出桌位。期待您的到来！", actionHint: "heads up 提醒/预先告知", frequency: "common" },
            ],
          },
        ],
      },
      {
        id: "waitlist-special-request",
        titleZh: "候位与特殊要求",
        titleEn: "Waitlist & Special Requests",
        description: "被告知满座后询问候补名单，并提出特殊要求",
        difficulty: "intermediate",
        turns: [
          {
            speaker: "them",
            role: "接线员",
            textEn: "Thank you for calling Riverside Grill. How can I help?",
            textZh: "感谢致电 Riverside Grill。有什么可以帮您的？",
          },
          {
            speaker: "you",
            textEn: "Hi, I was hoping to make a reservation for Saturday night, around 7, for six people.",
            textZh: "你好，我想预订周六晚上大约7点的位子，六个人。",
            casualVersion: "Hey, any chance you have a table for six on Saturday around 7?",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Oh, I'm sorry — Saturday night is completely booked. We've been slammed all week with reservations.",
            textZh: "哦，抱歉——周六晚上已经完全订满了。这一整周预订都爆满。",
            keyPhrases: [
              { en: "completely booked", zh: "完全订满" },
              { en: "slammed", zh: "非常忙/爆满" },
            ],
            alternativeExpressions: [
              { textEn: "Unfortunately, Saturday evening is totally full. It's been crazy busy.", textZh: "不幸的是，周六晚上完全满了。一直疯狂地忙。", actionHint: "crazy busy 非常繁忙", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Oh no. Do you have a waitlist? We're flexible on time — we could do earlier or later.",
            textZh: "啊，那有候补名单吗？我们时间灵活——早一点晚一点都行。",
            casualVersion: "Ugh. Can you put us on a waitlist? We're flexible.",
            culturalNote: "很多热门餐厅有 waitlist（候补名单）。有人取消你就能顶上。表示时间灵活可以增加排上的机会。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Yes, I can put you on our cancellation list. If anything opens up, we'll give you a call. Usually we get a few cancellations the day of. Can I get your name and number?",
            textZh: "可以，我可以把您加到取消候补名单上。如果有空位，我们会打电话通知您。通常当天会有一些取消。请问您的名字和电话？",
            keyPhrases: [
              { en: "cancellation list", zh: "取消候补名单" },
              { en: "if anything opens up", zh: "如果有空位" },
              { en: "the day of", zh: "当天" },
            ],
          },
          {
            speaker: "you",
            textEn: "Great, it's Li. L-I. Phone number is 628-555-0291. Also, I should mention — we'll need a high chair for a toddler. Is that something you can accommodate?",
            textZh: "好的，我姓 Li。L-I。电话 628-555-0291。另外我要说一下——我们需要一把儿童高椅。这个可以安排吗？",
            culturalNote: "提前告知特殊需求（高椅、轮椅通道、过敏等）是很重要的，尤其是电话预订时。",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Absolutely, we have high chairs available. I'll make a note on your reservation. Any food allergies I should flag for the kitchen?",
            textZh: "当然，我们有儿童高椅。我会在您的预订上备注。需要告知厨房什么食物过敏吗？",
            keyPhrases: [
              { en: "make a note", zh: "做备注" },
              { en: "food allergies", zh: "食物过敏" },
              { en: "flag for the kitchen", zh: "告知/提醒厨房" },
            ],
            alternativeExpressions: [
              { textEn: "Sure thing, we've got high chairs. I'll note that down. Does anyone in your party have any dietary restrictions or allergies?", textZh: "没问题，我们有高椅。我记下来。你们一行人有什么饮食限制或过敏吗？", actionHint: "dietary restrictions 饮食限制", frequency: "common" },
            ],
          },
          {
            speaker: "you",
            textEn: "Yes, one person has a peanut allergy. It's quite severe.",
            textZh: "有，一个人对花生过敏。而且比较严重。",
            casualVersion: "Yeah, one of us is allergic to peanuts. Pretty serious.",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "Got it — peanut allergy, severe. I'll flag that for the chef. We take allergies very seriously here. Is there anything else?",
            textZh: "收到——花生过敏，严重。我会特别告知主厨。我们非常重视过敏问题。还有别的需要吗？",
            keyPhrases: [{ en: "take allergies very seriously", zh: "非常重视过敏问题" }],
          },
          {
            speaker: "you",
            textEn: "One more thing — do you have a private dining room? It's actually a birthday dinner.",
            textZh: "还有一件事——你们有包间吗？其实是一个生日晚宴。",
            casualVersion: "Oh, one more thing — got a private room? It's a birthday dinner.",
          },
          {
            speaker: "them",
            role: "接线员",
            textEn: "We do have a semi-private area, but it requires a minimum spend of $500. For the waitlist, I can note your preference, but I can't guarantee the private area until we confirm a table. I'll call you as soon as something opens up!",
            textZh: "我们有一个半私密区域，但需要最低消费 500 美元。对于候补名单，我可以备注您的偏好，但在确认桌位之前不能保证包间。一有空位我马上打给您！",
            keyPhrases: [
              { en: "minimum spend", zh: "最低消费" },
              { en: "semi-private area", zh: "半私密区域" },
              { en: "as soon as something opens up", zh: "一有空位就" },
            ],
            alternativeExpressions: [
              { textEn: "We have a private dining space, but there's a $500 minimum. Since you're on the waitlist, I'll note that you'd prefer it, but no promises until we have a confirmed spot. We'll reach out the moment we have an opening!", textZh: "我们有私密用餐空间，但有 500 美元的最低消费。因为您在候补名单上，我会备注您的偏好，但在确认前不能承诺。有空位我们会立即联系您！", actionHint: "reach out 联系", frequency: "common" },
            ],
          },
        ],
      },
    ],
  },
];
